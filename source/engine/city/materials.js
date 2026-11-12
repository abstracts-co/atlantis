// The city's materials. One shader draws every solid surface: it picks the picture, its scale and its finish from the
// surface a vertex names (surfaces.js), lays the picture on by the direction the face looks (so nothing needs texture
// coordinates), and looks the sun's shadow up in three maps of different reach. Water, the ghost and the lines over
// the land are the only other materials.
import * as THREE from 'three';
import { SURFACES, SURFACE_NAMES, TINT } from './surfaces.js';
import { drawnTextures, waveTexture } from './textures.js';

const lin = (c) => new THREE.Color().setRGB(c[0] / 255, c[1] / 255, c[2] / 255, THREE.SRGBColorSpace);

// The sun's shadow from the finest of three maps that covers the point: near the eye, round it, and the whole city.
const SHADOW_FN = /* glsl */`
#if defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 2 )
float cityShadowIn( int i, vec4 c ) {
  if ( i == 0 ) return getShadow( directionalShadowMap[ 0 ], directionalLightShadows[ 0 ].shadowMapSize, directionalLightShadows[ 0 ].shadowIntensity, directionalLightShadows[ 0 ].shadowBias, directionalLightShadows[ 0 ].shadowRadius, c );
  if ( i == 1 ) return getShadow( directionalShadowMap[ 1 ], directionalLightShadows[ 1 ].shadowMapSize, directionalLightShadows[ 1 ].shadowIntensity, directionalLightShadows[ 1 ].shadowBias, directionalLightShadows[ 1 ].shadowRadius, c );
  return getShadow( directionalShadowMap[ 2 ], directionalLightShadows[ 2 ].shadowMapSize, directionalLightShadows[ 2 ].shadowIntensity, directionalLightShadows[ 2 ].shadowBias, directionalLightShadows[ 2 ].shadowRadius, c );
}
float cityEdge( vec4 c ) { vec3 p = c.xyz / c.w; vec2 e = abs( p.xy * 2.0 - 1.0 ); return 1.0 - smoothstep( 0.84, 0.97, max( e.x, e.y ) ); }
float cityShadow() {
  float w0 = cityEdge( vDirectionalShadowCoord[ 0 ] ), s = 1.0;
  if ( w0 < 1.0 ) {
    float w1 = cityEdge( vDirectionalShadowCoord[ 1 ] );
    s = w1 < 1.0 ? cityShadowIn( 2, vDirectionalShadowCoord[ 2 ] ) : 1.0;
    if ( w1 > 0.0 ) s = mix( s, cityShadowIn( 1, vDirectionalShadowCoord[ 1 ] ), w1 );
  }
  if ( w0 > 0.0 ) s = mix( s, cityShadowIn( 0, vDirectionalShadowCoord[ 0 ] ), w0 );
  return s;
}
#endif
`;
const SUN_BLOCK = /* glsl */`
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
  {
    DirectionalLight directionalLight = directionalLights[ 0 ];
    getDirectionalLightInfo( directionalLight, directLight );
    #if defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 2 )
      if ( receiveShadow ) directLight.color *= cityShadow();
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
#endif
`;
// three.js's light loop with its directional part replaced by ours.
const lightsChunk = () => {
  const src = THREE.ShaderChunk.lights_fragment_begin, a = src.indexOf('#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )');
  const b = src.indexOf('#endif', src.indexOf('#pragma unroll_loop_end', a)) + 6;
  if (a < 0 || b < 6) throw new Error('city: three.js light loop not as expected');
  return src.slice(0, a) + SUN_BLOCK + src.slice(b);
};

const VERT_PARS = /* glsl */`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`;
const VERT_MAIN = /* glsl */`
{
  vec4 cw = vec4( transformed, 1.0 );
  vec3 cn = objectNormal;
  #ifdef USE_INSTANCING
    cw = instanceMatrix * cw;
    cn = mat3( instanceMatrix ) * cn;
  #endif
  cPos = ( modelMatrix * cw ).xyz;
  cNrm = normalize( mat3( modelMatrix ) * cn );
  cTint = pow( aTint.rgb, vec3( 2.2 ) );
  cSurf = aTint.a * 255.0;
}
`;
const FRAG_PARS = /* glsl */`
#define CITY_SURFACES ${SURFACE_NAMES.length}
uniform highp sampler2DArray tColour;
uniform highp sampler2DArray tDetail;
uniform vec4 uSurfA[ CITY_SURFACES ];   // layer, size in metres, metal, roughness scale
uniform vec4 uSurfB[ CITY_SURFACES ];   // bump, pattern, wet, keep the picture's colour
uniform vec3 uStone[ 3 ];               // white, black, red
uniform float uDim;                     // 1 normal; below 1 this part is dimmed because another is being shown
uniform vec3 uGlow;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
float cityRough; float cityMetal; vec3 cityTS;
// Bands and chequers of the three stones (Critias 116b: "they wove a pattern of many colours by blending the stones").
vec3 cityPattern( vec2 p, float mode ) {
  float course = floor( p.y / 0.525 );
  if ( mode < 1.5 ) { float k = mod( floor( course / 3.0 ), 6.0 ); return k == 2.0 ? uStone[ 2 ] : k == 5.0 ? uStone[ 1 ] : uStone[ 0 ]; }
  if ( mode < 2.5 ) { float row = floor( course / 2.0 ), col = floor( p.x / 1.05 ); if ( mod( row, 5.0 ) == 4.0 ) return uStone[ 2 ]; return mod( row + col, 2.0 ) < 0.5 ? uStone[ 0 ] : uStone[ 1 ]; }
  return mod( course, 4.0 ) < 2.0 ? uStone[ 0 ] : uStone[ 2 ];
}
`;
const FRAG_MAP = /* glsl */`
vec3 cN = normalize( cNrm );
if ( ! gl_FrontFacing ) cN = - cN;
int cs = int( cSurf + 0.5 );
vec4 sa = uSurfA[ cs ], sb = uSurfB[ cs ];
vec3 cT, cB; vec2 cuv;
if ( abs( cN.z ) > 0.96 ) { cT = vec3( 1.0, 0.0, 0.0 ); cB = vec3( 0.0, 1.0, 0.0 ); cuv = cPos.xy; }
else { cT = normalize( vec3( - cN.y, cN.x, 0.0 ) ); cB = cross( cN, cT ); cuv = vec2( dot( cPos, cT ) + dot( cPos, cN ) * atan( cN.y, cN.x ), dot( cPos, cB ) ); }
vec2 tuv = cuv / sa.y;
vec4 ca = texture( tColour, vec3( tuv, sa.x ) );
vec4 cd = texture( tDetail, vec3( tuv, sa.x ) );
float macro = texture( tColour, vec3( tuv * 0.063 + 0.31, sa.x ) ).g;
vec3 ctint = cTint;
if ( sb.y > 0.5 ) ctint = cityPattern( cuv, sb.y ) * ( cTint / uStone[ 0 ] );
float clum = dot( ca.rgb, vec3( 0.3, 0.55, 0.15 ) );
vec3 cbase = mix( ctint * clum * 1.45, ca.rgb * ctint, sb.w ) * ( 0.74 + 0.52 * macro );
float cwet = sb.z * smoothstep( 1.25, 0.2, cPos.z ) * ( 0.55 + 0.45 * macro );
cbase *= mix( 1.0, 0.5, cwet );
cbase = mix( cbase, vec3( 0.07, 0.09, 0.035 ), sb.z * smoothstep( 0.7, 0.0, cPos.z ) * 0.6 );
if ( cPos.z < 0.0 ) cbase *= exp( cPos.z * vec3( 0.42, 0.16, 0.13 ) );
diffuseColor.rgb = cbase;
cityRough = mix( clamp( cd.b * sa.w, 0.05, 1.0 ), 0.2, cwet );
cityMetal = sa.z;
cityTS = vec3( ( cd.rg * 2.0 - 1.0 ) * sb.x, 1.0 );
`;
const FRAG_NORMAL = /* glsl */`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`;
const FRAG_END = /* glsl */`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`;

const patchShadows = (shader) => {
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <shadowmap_pars_fragment>', `#include <shadowmap_pars_fragment>\n${SHADOW_FN}`)
    .replace('#include <lights_fragment_begin>', lightsChunk());
};

export const makeMaterials = ({ phone = false } = {}) => {
  const tex = drawnTextures(phone ? 64 : 128);
  const shared = {
    tColour: { value: tex.colour }, tDetail: { value: tex.detail },
    uSurfA: { value: SURFACE_NAMES.map((n) => { const s = SURFACES[n]; return new THREE.Vector4(s.layer, s.size, s.metal, s.rough); }) },
    uSurfB: { value: SURFACE_NAMES.map((n) => { const s = SURFACES[n]; return new THREE.Vector4(s.bump, s.pattern, s.wet, s.keep); }) },
    uStone: { value: [lin(TINT.white), lin(TINT.black), lin(TINT.red)] },
    uGlow: { value: new THREE.Color(0, 0, 0) },
    uTime: { value: 0 },
  };
  // Every solid thing. Three materials share the one program: the usual one, a dimmed one for everything else while a
  // part is being shown, and one with a little light added for the part itself.
  const solidLike = (dim) => {
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, side: THREE.DoubleSide, envMapIntensity: 1 });
    m.shadowSide = THREE.DoubleSide;
    const uDim = { value: dim };
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, { tColour: shared.tColour, tDetail: shared.tDetail, uSurfA: shared.uSurfA, uSurfB: shared.uSurfB, uStone: shared.uStone, uDim, uGlow: shared.uGlow });
      shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>\n${VERT_PARS}`).replace('#include <project_vertex>', `#include <project_vertex>\n${VERT_MAIN}`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\n${FRAG_PARS}`)
        .replace('#include <map_fragment>', FRAG_MAP)
        .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = cityRough;')
        .replace('#include <metalnessmap_fragment>', 'float metalnessFactor = cityMetal;')
        .replace('#include <normal_fragment_maps>', FRAG_NORMAL)
        .replace('#include <opaque_fragment>', `${FRAG_END}\n#include <opaque_fragment>`);
      patchShadows(shader);
    };
    m.customProgramCacheKey = () => 'city-solid';
    return m;
  };
  const solid = solidLike(1), dim = solidLike(0.32), glow = solidLike(2);

  // Water: the sea let into the rings, and the basins of the springs.
  const waves = waveTexture(phone ? 128 : 256), seaDim = { value: 1 };
  const waterUniforms = { tWave: { value: waves }, uTime: shared.uTime, uShores: { value: new Float32Array(6) }, uCanal: { value: new THREE.Vector4(0, -1, 46, 1e9) }, tMirror: { value: null }, uMirror: { value: 0 }, uMirrorVP: { value: new THREE.Matrix4() }, uDim: seaDim };
  const water = (pool) => {
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.07, metalness: 0, transparent: true, envMapIntensity: 1.15 });
    m.blending = THREE.CustomBlending; m.blendSrc = THREE.SrcAlphaFactor; m.blendDst = THREE.OneMinusSrcAlphaFactor; m.blendSrcAlpha = THREE.ZeroFactor; m.blendDstAlpha = THREE.OneFactor;
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, waterUniforms);
      shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 cPos;').replace('#include <project_vertex>', '#include <project_vertex>\ncPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', /* glsl */`#include <common>
          uniform sampler2D tWave; uniform sampler2D tMirror; uniform float uTime; uniform float uShores[ 6 ]; uniform vec4 uCanal; uniform float uMirror; uniform mat4 uMirrorVP; uniform float uDim;
          varying vec3 cPos; vec3 cityWave; float cityShore;`)
        .replace('#include <map_fragment>', /* glsl */`
          vec2 wp = cPos.xy;
          float wd = length( vViewPosition );
          vec3 w1 = texture2D( tWave, wp / 19.0 + uTime * vec2( 0.011, 0.007 ) ).xyz * 2.0 - 1.0;
          vec3 w2 = texture2D( tWave, wp / 6.1 - uTime * vec2( 0.013, 0.017 ) ).xyz * 2.0 - 1.0;
          vec3 w3 = texture2D( tWave, wp / 83.0 + uTime * vec2( -0.004, 0.006 ) ).xyz * 2.0 - 1.0;
          float calm = 1.0 / ( 1.0 + wd / 900.0 );
          cityWave = normalize( vec3( ( w1.xy * 0.55 + w2.xy * 0.3 * calm + w3.xy * 0.5 ) * ${pool ? '0.22' : '0.42'}, 1.0 ) );
          float wr = length( wp );
          cityShore = 1e5;
          ${pool ? 'cityShore = 2.0;' : `for ( int i = 0; i < 6; i ++ ) cityShore = min( cityShore, abs( wr - uShores[ i ] ) );
          float along = dot( wp, uCanal.xy ), across = abs( wp.x * uCanal.y - wp.y * uCanal.x );
          if ( along > uShores[ 5 ] - 20.0 ) cityShore = abs( uCanal.z - across );`}
          float shallow = 1.0 - smoothstep( 0.0, 14.0, cityShore );
          diffuseColor.rgb = mix( vec3( 0.006, 0.034, 0.05 ), vec3( 0.03, 0.105, 0.1 ), shallow * 0.8 ) * ${pool ? 'vec3( 1.6, 2.2, 2.0 )' : '1.0'};
          diffuseColor.a = mix( 0.94, ${pool ? '0.45' : '0.62'}, shallow );`)
        .replace('#include <normal_fragment_maps>', 'normal = normalize( ( viewMatrix * vec4( cityWave, 0.0 ) ).xyz );')
        .replace('#include <opaque_fragment>', /* glsl */`
          float wf = 0.02 + 0.98 * pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 5.0 );
          ${pool ? '' : `if ( uMirror > 0.5 ) {
            vec4 mc = uMirrorVP * vec4( cPos.xy, 0.0, 1.0 );
            vec2 muv = mc.xy / max( mc.w, 0.001 ) * 0.5 + 0.5 + cityWave.xy * vec2( 0.03, 0.08 );
            vec4 mir = texture2D( tMirror, clamp( muv, 0.002, 0.998 ) );
            vec3 body = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
            outgoingLight = mix( outgoingLight, body + mir.rgb * wf, mir.a * step( 0.0, mc.w ) );
          }`}
          float foam = ( 1.0 - smoothstep( 0.0, 0.9, cityShore ) ) * 0.35;
          outgoingLight += foam * reflectedLight.indirectDiffuse * 14.0;
          diffuseColor.a = max( diffuseColor.a, wf );
          outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) );
          #include <opaque_fragment>`);
      patchShadows(shader);
    };
    m.customProgramCacheKey = () => (pool ? 'city-pool' : 'city-sea');
    return m;
  };

  // The ghost: what is our choice, when the page shows only what the text fixes.
  const ghostUniforms = { uColour: { value: new THREE.Color(0.5, 0.6, 0.7) } };
  const ghost = new THREE.ShaderMaterial({
    uniforms: ghostUniforms, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.CustomBlending, blendSrc: THREE.SrcAlphaFactor, blendDst: THREE.OneMinusSrcAlphaFactor, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
    vertexShader: /* glsl */`varying vec3 gN; varying vec3 gV;
      void main() {
        vec4 p = vec4( position, 1.0 ); vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p; n = mat3( instanceMatrix ) * n;
        #endif
        vec4 mv = modelViewMatrix * p; gN = normalMatrix * n; gV = - mv.xyz; gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`uniform vec3 uColour; varying vec3 gN; varying vec3 gV;
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`,
  });
  const line = (r, g, b) => new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b), transparent: true, opacity: 0.75, depthTest: false, depthWrite: false, side: THREE.DoubleSide });

  return { solid, dim, glow, seaDim, glowColour: shared.uGlow.value, sea: water(false), pool: water(true), ghost, wallLine: line(1.5, 1.1, 0.4), canalLine: line(0.25, 0.7, 1.3), shared, waterUniforms, ghostUniforms, textures: tex };
};
