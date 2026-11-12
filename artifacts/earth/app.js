var nu=0,Sc=1,iu=2;var ws=1,su=2,ir=3,es=0,nn=1,sn=2,Ms=0,sr=1,Tc=2,Ec=3,Ac=4,Yr=5;var Ss=100,ru=101,au=102,ou=103,lu=104,Zr=200,jr=201,cu=202,hu=203,rr=204,ar=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,vu=212,xu=213,yu=214,qa=0,Xa=1,Ya=2,Zs=3,Za=4,ja=5,Ja=6,Ka=7,Rc=0,_u=1,bu=2,di=0,Cc=1,Pc=2,Ic=3,Lc=4,Dc=5,Nc=6,Fc=7;var Uc=300,Ts=301,or=302,So=303,To=304,Pi=1e3,_n=1001,Qa=1002,Ue=1003,wu=1004;var Jr=1005;var Ae=1006,Eo=1007;var rn=1008;var an=1009,kc=1010,Oc=1011,lr=1012,Ao=1013,ni=1014,Tn=1015,je=1016,Ro=1017,Co=1018,Es=1020,Bc=35902,zc=35899,Hc=1021,Gc=1022,Ye=1023,Ii=1026,Di=1027,fi=1028,Po=1029,ns=1030,Io=1031;var Lo=1033,Kr=33776,Qr=33777,ta=33778,ea=33779,Do=35840,No=35841,Fo=35842,Uo=35843,ko=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,na=37490,Go=37491,Vo=37808,Wo=37809,$o=37810,qo=37811,Xo=37812,Yo=37813,Zo=37814,jo=37815,Jo=37816,Ko=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,ia=36285,ll=36286;var Cr=2300,to=2301,Wa=2302,gc=2303,vc=2400,xc=2401,yc=2402;var Mu=3200;var cl=0,Su=1,On="",Ie="srgb",ys="srgb-linear",Pr="linear",Se="srgb";var $a=7680;var Tu=519,Eu=512,Au=513,Ru=514,Vc=515,Cu=516,Pu=517,Wc=518,$c=519,Iu=35044;var is="300 es",Gn=2e3,js=2001;function tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=Ir("canvas");return i.style.display="block",i}var Ch={},Js=null;function qc(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function Du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Du(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Du(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rr(...i){let t=i.join(" ");t in Ch||(Ch[t]=!0,oe(...i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fu={[qa]:qa,[Ya]:Ja,[Za]:Za,[Zs]:ja,[Xa]:Xa,[Ja]:Ya,[Ka]:Ka,[ja]:Zs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,eo=180/Math.PI;function sa(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function np(i,t){return(i%t+t)%t}function Zl(i,t,e){return(1-e)*i+e*t}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ip(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sp(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(c!==v||o!==f||h!==d||u!==p){let g=o*f+h*d+u*p+c*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let x=Math.acos(g),w=Math.sin(x);m=Math.sin(m*x)/w,l=Math.sin(l*x)/w,o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l}else{o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l;let x=1/Math.sqrt(o*o+h*h+u*u+c*c);o*=x,h*=x,u*=x,c*=x}}t[e]=o,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*c+o*d-h*f,t[e+1]=o*p+u*f+h*c-l*d,t[e+2]=h*p+u*d+l*f-o*c,t[e+3]=u*p-l*c-o*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(n/2),u=l(s/2),c=l(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"YXZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"ZXY":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"ZYX":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"YZX":this._x=f*u*c+h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c-f*d*p;break;case"XZY":this._x=f*u*c-h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c+f*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],u=e[6],c=e[10],f=n+l+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>l&&n>c){let d=2*Math.sqrt(1+n-l-c);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){let d=2*Math.sqrt(1+l-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-n-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,u=e._w;return this._x=n*u+a*l+s*h-r*o,this._y=s*u+a*o+r*l-n*h,this._z=r*u+a*h+n*o-s*l,this._w=a*u-n*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);o=Math.sin(o*h)/u,e=Math.sin(e*h)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ht=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*n),u=2*(l*e-r*s),c=2*(r*n-a*e);return this.x=e+o*h+a*c-l*u,this.y=n+o*u+l*h-r*c,this.z=s+o*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new ht,Ph=new Vn,de=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h)}set(t,e,n,s,r,a,l,o,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],w=s[4],M=s[7],S=s[2],A=s[5],y=s[8];return r[0]=a*v+l*x+o*S,r[3]=a*g+l*w+o*A,r[6]=a*m+l*M+o*y,r[1]=h*v+u*x+c*S,r[4]=h*g+u*w+c*A,r[7]=h*m+u*M+c*y,r[2]=f*v+d*x+p*S,r[5]=f*g+d*w+p*A,r[8]=f*m+d*M+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8];return e*a*u-e*l*h-n*r*u+n*l*o+s*r*h-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=u*a-l*h,f=l*o-u*r,d=h*r-a*o,p=e*c+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=c*v,t[1]=(s*h-u*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*o)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*o-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new de,Ih=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){let i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var _e=rp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Ir("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ap=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=sa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var op=0,Ql=new ht,cn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Ae,a=rn,l=Ye,o=an,h=i.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=sa(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uc;cn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,h=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(h+1)/2,M=(d+1)/2,S=(m+1)/2,A=(u+f)/4,y=(c+v)/4,T=(p+g)/4;return w>M&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=y/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=y/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(c-v)/x,this.z=(f-u)/x,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_s=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g)}set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=h,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),a=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=-o*c,e[8]=h,e[1]=d+p*h,e[5]=f-v*h,e[9]=-l*o,e[2]=v-f*h,e[6]=p+d*h,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f+v*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=v+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f-v*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=p*h-d,e[8]=f*h+v,e[1]=o*c,e[5]=v*h+f,e[9]=d*h-p,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=v-f*c,e[8]=p*c+d,e[1]=c,e[5]=a*u,e[9]=-l*u,e[2]=-h*u,e[6]=d*c+p,e[10]=f-v*c}else if(t.order==="XZY"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=-c,e[8]=h*u,e[1]=f*c+v,e[5]=a*u,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,cp)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Gi.crossVectors(n,Ln),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Gi.crossVectors(n,Ln)),Gi.normalize(),Ma.crossVectors(Ln,Gi),s[0]=Gi.x,s[4]=Ma.x,s[8]=Ln.x,s[1]=Gi.y,s[5]=Ma.y,s[9]=Ln.y,s[2]=Gi.z,s[6]=Ma.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],w=n[7],M=n[11],S=n[15],A=s[0],y=s[4],T=s[8],F=s[12],_=s[1],B=s[5],J=s[9],at=s[13],L=s[2],X=s[6],O=s[10],N=s[14],j=s[3],Y=s[7],V=s[11],U=s[15];return r[0]=a*A+l*_+o*L+h*j,r[4]=a*y+l*B+o*X+h*Y,r[8]=a*T+l*J+o*O+h*V,r[12]=a*F+l*at+o*N+h*U,r[1]=u*A+c*_+f*L+d*j,r[5]=u*y+c*B+f*X+d*Y,r[9]=u*T+c*J+f*O+d*V,r[13]=u*F+c*at+f*N+d*U,r[2]=p*A+v*_+g*L+m*j,r[6]=p*y+v*B+g*X+m*Y,r[10]=p*T+v*J+g*O+m*V,r[14]=p*F+v*at+g*N+m*U,r[3]=x*A+w*_+M*L+S*j,r[7]=x*y+w*B+M*X+S*Y,r[11]=x*T+w*J+M*O+S*V,r[15]=x*F+w*at+M*N+S*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=o*d-h*f,w=l*d-h*c,M=l*f-o*c,S=a*d-h*u,A=a*f-o*u,y=a*c-l*u;return e*(v*x-g*w+m*M)-n*(p*x-g*S+m*A)+s*(p*w-v*S+m*y)-r*(p*M-v*A+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],h=t[6],u=t[10];return e*(a*u-l*h)-n*(r*u-l*o)+s*(r*h-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*l-n*a,w=e*o-s*a,M=e*h-r*a,S=n*o-s*l,A=n*h-r*l,y=s*h-r*o,T=u*v-c*p,F=u*g-f*p,_=u*m-d*p,B=c*g-f*v,J=c*m-d*v,at=f*m-d*g,L=x*at-w*J+M*B+S*_-A*F+y*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/L;return t[0]=(l*at-o*J+h*B)*X,t[1]=(s*J-n*at-r*B)*X,t[2]=(v*y-g*A+m*S)*X,t[3]=(f*A-c*y-d*S)*X,t[4]=(o*_-a*at-h*F)*X,t[5]=(e*at-s*_+r*F)*X,t[6]=(g*M-p*y-m*w)*X,t[7]=(u*y-f*M+d*w)*X,t[8]=(a*J-l*_+h*T)*X,t[9]=(n*_-e*J-r*T)*X,t[10]=(p*A-v*M+m*x)*X,t[11]=(c*M-u*A-d*x)*X,t[12]=(l*F-a*B-o*T)*X,t[13]=(e*B-n*F+s*T)*X,t[14]=(v*w-p*S-g*x)*X,t[15]=(u*S-c*w+f*x)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,h=r*a,u=r*l;return this.set(h*a+n,h*l-s*o,h*o+s*l,0,h*l+s*o,u*l+n,u*o-s*a,0,h*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,u=a+a,c=l+l,f=r*h,d=r*u,p=r*c,v=a*u,g=a*c,m=l*c,x=o*h,w=o*u,M=o*c,S=n.x,A=n.y,y=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+M)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+m))*A,s[6]=(g+x)*A,s[7]=0,s[8]=(p+w)*y,s[9]=(g-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fs.set(s[0],s[1],s[2]).length(),l=Fs.set(s[4],s[5],s[6]).length(),o=Fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let h=1/a,u=1/l,c=1/o;return Jn.elements[0]*=h,Jn.elements[1]*=h,Jn.elements[2]*=h,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=c,Jn.elements[9]*=c,Jn.elements[10]*=c,e.setFromRotationMatrix(Jn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Gn,o=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(l===Gn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===js)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Gn,o=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(l===Gn)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===js)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new ht,Jn=new xe,lp=new ht(0,0,0),cp=new ht(1,1,1),Gi=new ht,Ma=new ht,Ln=new ht,Dh=new xe,Nh=new Vn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hp=0,Fh=new ht,Us=new Vn,Mi=new xe,Sa=new ht,wr=new ht,up=new ht,dp=new Vn,Uh=new ht(1,0,0),kh=new ht(0,1,0),Oh=new ht(0,0,1),Bh={type:"added"},fp={type:"removed"},ks={type:"childadded",child:null},tc={type:"childremoved",child:null},bn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ht,e=new ti,n=new Vn,s=new ht(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new de}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(wr,Sa,this.up):Mi.lookAt(Sa,wr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Mi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),ks.child=t,this.dispatchEvent(ks),ks.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new ht(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},pp={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=np(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return _e.workingToColorSpace(mn.copy(this),t),Math.round(be(mn.r*255,0,255))*65536+Math.round(be(mn.g*255,0,255))*256+Math.round(be(mn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,h,u=(l+a)/2;if(l===a)o=0,h=0;else{let c=a-l;switch(h=u<=.5?c/(a+l):c/(2-a-l),a){case n:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-n)/c+2;break;case r:o=(n-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Ie){_e.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ta);let n=Zl(Vi.h,Ta.h,e),s=Zl(Vi.s,Ta.s,e),r=Zl(Vi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=ku;var Wn=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new ht,Si=new ht,nc=new ht,Ti=new ht,Os=new ht,Bs=new ht,zh=new ht,ic=new ht,sc=new ht,rc=new ht,ac=new ge,oc=new ge,lc=new ge,Xi=class i{constructor(t=new ht,e=new ht,n=new ht){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Kn.subVectors(s,e),Si.subVectors(n,e),nc.subVectors(t,e);let a=Kn.dot(Kn),l=Kn.dot(Si),o=Kn.dot(nc),h=Si.dot(Si),u=Si.dot(nc),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*o-l*u)*f,p=(a*u-l*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ti.x),o.addScaledVector(a,Ti.y),o.addScaledVector(l,Ti.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),Si.subVectors(t,e),Kn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Kn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Os.subVectors(s,n),Bs.subVectors(r,n),ic.subVectors(t,n);let o=Os.dot(ic),h=Bs.dot(ic);if(o<=0&&h<=0)return e.copy(n);sc.subVectors(t,s);let u=Os.dot(sc),c=Bs.dot(sc);if(u>=0&&c<=u)return e.copy(s);let f=o*c-u*h;if(f<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),e.copy(n).addScaledVector(Os,a);rc.subVectors(t,r);let d=Os.dot(rc),p=Bs.dot(rc);if(p>=0&&d<=p)return e.copy(r);let v=d*h-o*p;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(Bs,l);let g=u*p-d*c;if(g<=0&&c-u>=0&&d-p>=0)return zh.subVectors(r,s),l=(c-u)/(c-u+(d-p)),e.copy(s).addScaledVector(zh,l);let m=1/(g+v+f);return a=v*m,l=f*m,e.copy(n).addScaledVector(Os,a).addScaledVector(Bs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new ht(1/0,1/0,1/0),e=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Aa.subVectors(this.max,Mr),zs.subVectors(t.a,Mr),Hs.subVectors(t.b,Mr),Gs.subVectors(t.c,Mr),Wi.subVectors(Hs,zs),$i.subVectors(Gs,Hs),ms.subVectors(zs,Gs);let e=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-ms.z,ms.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,ms.z,0,-ms.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-ms.y,ms.x,0];return!cc(e,zs,Hs,Gs,Aa)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,zs,Hs,Gs,Aa))?!1:(Ra.crossVectors(Wi,$i),e=[Ra.x,Ra.y,Ra.z],cc(e,zs,Hs,Gs,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],Qn=new ht,Ea=new ci,zs=new ht,Hs=new ht,Gs=new ht,Wi=new ht,$i=new ht,ms=new ht,Mr=new ht,Aa=new ht,Ra=new ht,gs=new ht;function cc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gs.fromArray(i,r);let l=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),o=t.dot(gs),h=e.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var Ri=mp();function mp(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):h<-14?(n[o]=1024>>-h-14,n[o|256]=1024>>-h-14|32768,s[o]=-h-1,s[o|256]=-h-1):h<=15?(n[o]=h+15<<10,n[o|256]=h+15<<10|32768,s[o]=13,s[o|256]=13):h<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[o]=h|u}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function gp(i){Math.abs(i)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),i=be(i,-65504,65504),Ri.floatView[0]=i;let t=Ri.uint32View[0],e=t>>23&511;return Ri.baseTable[e]+((t&8388607)>>Ri.shiftTable[e])}function vp(i){let t=i>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[t]+(i&1023)]+Ri.exponentTable[t],Ri.floatView[0]}var Yi=class{static toHalfFloat(t){return gp(t)}static fromHalfFloat(t){return vp(t)}},Ve=new ht,Ca=new ie,xp=0,Le=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?Xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ip(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sp(t,this.array)}};var Lr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=new ci,Sr=new ht,hc=new ht,hi=class{constructor(t=new ht,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(hc)),this.expandByPoint(Sr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_p=0,Hn=new xe,uc=new bn,Vs=new ht,Dn=new ci,Tr=new ci,en=new ht,Be=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Tr.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(Dn.min,Tr.min),Dn.expandByPoint(en),en.addVectors(Dn.max,Tr.max),Dn.expandByPoint(en)):(Dn.expandByPoint(Tr.min),Dn.expandByPoint(Tr.max))}Dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)en.fromBufferAttribute(l,h),o&&(Vs.fromBufferAttribute(t,h),en.add(Vs)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[],h=new Uint8Array(n.count);for(let F=0;F<n.count;F++)l[F]=new ht,o[F]=new ht;let u=new ht,c=new ht,f=new ht,d=new ie,p=new ie,v=new ie,g=new ht,m=new ht;function x(F,_,B){h[F]=h[_]=h[B]=1,u.fromBufferAttribute(n,F),c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,B),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,_),v.fromBufferAttribute(r,B),c.sub(u),f.sub(u),p.sub(d),v.sub(d);let J=1/(p.x*v.y-v.x*p.y);isFinite(J)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(J),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(J),l[F].add(g),l[_].add(g),l[B].add(g),o[F].add(m),o[_].add(m),o[B].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,_=w.length;F<_;++F){let B=w[F],J=B.start,at=B.count;for(let L=J,X=J+at;L<X;L+=3)x(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new ht,S=new ht,A=new ht,y=new ht;function T(F){A.fromBufferAttribute(s,F),y.copy(A);let _=l[F];M.copy(_),M.sub(A.multiplyScalar(A.dot(_))).normalize(),S.crossVectors(y,_);let J=S.dot(o[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,J)}for(let F=0,_=n.count;F<_;++F)h[F]&&T(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new ht,r=new ht,a=new ht,l=new ht,o=new ht,h=new ht,u=new ht,c=new ht;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(u),o.add(u),h.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,c=l.normalized,f=new h.constructor(o.length*u),d=0,p=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Le(f,u,c)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let o=[],h=r[l];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let h=n[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new ht,bp=new ht,wp=new de,Nn=class{constructor(t=new ht(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mp=0,Zi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=sr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=ar,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new ht,fc=new ht,Pa=new ht,Ia=new ht,Nr=class{constructor(t=new ht,e=new ht(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),h=Ia.lengthSq(),u=Math.abs(1-a*a),c,f,d,p;if(u>0)if(c=a*o-l,f=a*l-o,p=r*u,c>=0)if(f>=-p)if(f<=p){let v=1/u;c*=v,f*=v,d=c*(c+a*f+2*l)+f*(a*c+f+2*o)+h}else f=r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f=-r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f<=-p?(c=Math.max(0,-(-a*r+l)),f=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h):f<=p?(c=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+h):(c=Math.max(0,-(a*r+l)),f=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(fc).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-f.z)*c,o=(t.max.z-f.z)*c):(l=(t.max.z-f.z)*c,o=(t.min.z-f.z)*c),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,h=l.y,u=l.z,c=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,w=n.z-a.z,M=Math.abs(o),S=Math.abs(h),A=Math.abs(u),y,T,F,_,B,J,at,L,X,O,N,j;if(M>=S&&M>=A?(F=o,J=c,X=p,j=m,o>=0?(y=h,T=u,_=f,B=d,at=v,L=g,O=x,N=w):(y=u,T=h,_=d,B=f,at=g,L=v,O=w,N=x)):S>=A?(F=h,J=f,X=v,j=x,h>=0?(y=u,T=o,_=d,B=c,at=g,L=p,O=w,N=m):(y=o,T=u,_=c,B=d,at=p,L=g,O=m,N=w)):(F=u,J=d,X=g,j=w,u>=0?(y=o,T=h,_=c,B=f,at=p,L=v,O=m,N=x):(y=h,T=o,_=f,B=c,at=v,L=p,O=x,N=m)),F===0)return null;let Y=y/F,V=T/F,U=1/F,H=_-Y*J,W=B-V*J,z=at-Y*X,st=L-V*X,ot=O-Y*j,ut=N-V*j,dt=ot*st-ut*z,St=H*ut-W*ot,k=z*W-st*H;if(s){if(dt<0||St<0||k<0)return null}else if((dt<0||St<0||k<0)&&(dt>0||St>0||k>0))return null;let rt=dt+St+k;if(rt===0)return null;let et=U*(dt*J+St*X+k*j);return(rt>0?et<0:et>0)?null:this.at(et/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hh=new xe,vs=new Nr,La=new hi,Gh=new ht,Da=new ht,Na=new ht,Fa=new ht,pc=new ht,Ua=new ht,Vh=new ht,ka=new ht,pe=class extends bn{constructor(t=new Be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ua.set(0,0,0);for(let o=0,h=r.length;o<h;o++){let u=l[o],c=r[o];u!==0&&(pc.fromBufferAttribute(c,t),a?Ua.addScaledVector(pc,u):Ua.addScaledVector(pc.sub(e),u))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(La.containsPoint(vs.origin)===!1&&(vs.intersectSphere(La,Gh)===null||vs.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),vs.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,S=w;M<S;M+=3){let A=l.getX(M),y=l.getX(M+1),T=l.getX(M+2);s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=l.getX(g),w=l.getX(g+1),M=l.getX(g+2);s=Oa(this,a,t,n,h,u,c,x,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,S=w;M<S;M+=3){let A=M,y=M+1,T=M+2;s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,w=g+1,M=g+2;s=Oa(this,a,t,n,h,u,c,x,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Sp(i,t,e,n,s,r,a,l){let o;if(t.side===nn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===es,l),o===null)return null;ka.copy(l),ka.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ka);return h<e.near||h>e.far?null:{distance:h,point:ka.clone(),object:i}}function Oa(i,t,e,n,s,r,a,l,o,h){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(h,Fa);let u=Sp(i,t,e,n,Da,Na,Fa,Vh);if(u){let c=new ht;Xi.getBarycoord(Vh,Da,Na,Fa,c),s&&(u.uv=Xi.getInterpolatedAttribute(s,l,o,h,c,new ie)),r&&(u.uv1=Xi.getInterpolatedAttribute(r,l,o,h,c,new ie)),a&&(u.normal=Xi.getInterpolatedAttribute(a,l,o,h,c,new ht),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new ht,materialIndex:0};Xi.getNormal(Da,Na,Fa,f.normal),u.face=f,u.barycoord=c}return u}var Sn=class extends cn{constructor(t=null,e=1,n=1,s,r,a,l,o,h=Ue,u=Ue,c,f){super(null,a,l,o,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new xe,Wh=new xe,Ba=[],$h=new ci,Tp=new xe,Er=new pe,Ar=new hi,Ur=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),$h.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union($h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Ar.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Wh.multiplyMatrices(n,Ws),Er.matrixWorld=Wh,Er.raycast(t,Ba);for(let a=0,l=Ba.length;a<l;a++){let o=Ba[a];o.instanceId=r,o.object=this,e.push(o)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,fi,Tn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new hi,Ep=new ie(.5,.5),za=new ht,ui=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],w=r[13],M=r[14],S=r[15];if(s[0].setComponents(h-a,d-u,m-p,S-x).normalize(),s[1].setComponents(h+a,d+u,m+p,S+x).normalize(),s[2].setComponents(h+l,d+c,m+v,S+w).normalize(),s[3].setComponents(h-l,d-c,m-v,S-w).normalize(),n)s[4].setComponents(o,f,g,M).normalize(),s[5].setComponents(h-o,d-f,m-g,S-M).normalize();else if(s[4].setComponents(h-o,d-f,m-g,S-M).normalize(),e===Gn)s[5].setComponents(h+o,d+f,m+g,S+M).normalize();else if(e===js)s[5].setComponents(o,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=Ep.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qh=new xe,ro=class i{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ui),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var kr=class extends cn{constructor(t=[],e=Ts,n,s,r,a,l,o,h,u){super(t,e,n,s,r,a,l,o,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends cn{constructor(t,e,n,s,r,a,l,o,h){super(t,e,n,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends cn{constructor(t,e,n=ni,s,r,a,l=Ue,o=Ue,h,u=Ii,c=1){if(u!==Ii&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,l,o,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Or=class extends ei{constructor(t,e=ni,n=Ts,s,r,a=Ue,l=Ue,o,h=Ii){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Br=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],h=[],u=[],c=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(c,2));function p(v,g,m,x,w,M,S,A,y,T,F){let _=M/y,B=S/T,J=M/2,at=S/2,L=A/2,X=y+1,O=T+1,N=0,j=0,Y=new ht;for(let V=0;V<O;V++){let U=V*B-at;for(let H=0;H<X;H++){let W=H*_-J;Y[v]=W*x,Y[g]=U*w,Y[m]=L,h.push(Y.x,Y.y,Y.z),Y[v]=0,Y[g]=0,Y[m]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),c.push(H/y),c.push(1-V/T),N+=1}}for(let V=0;V<T;V++)for(let U=0;U<y;U++){let H=f+U+X*V,W=f+U+X*(V+1),z=f+(U+1)+X*(V+1),st=f+(U+1)+X*V;o.push(H,W,st),o.push(W,z,st),j+=6}l.addGroup(d,j,F),d+=j,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zr=class i extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,p=n*2+r,v=s+1,g=new ht,m=new ht;for(let x=0;x<=p;x++){let w=0,M=0,S=0,A=0;if(x<=n){let F=x/n,_=F*Math.PI/2;M=-u-t*Math.cos(_),S=t*Math.sin(_),A=-t*Math.cos(_),w=F*c}else if(x<=n+r){let F=(x-n)/r;M=-u+F*e,S=t,A=0,w=c+F*f}else{let F=(x-n-r)/n,_=F*Math.PI/2;M=u+t*Math.sin(_),S=t*Math.cos(_),A=t*Math.sin(_),w=c+f+F*c}let y=Math.max(0,Math.min(1,w/d)),T=0;x===0?T=.5/s:x===p&&(T=-.5/s);for(let F=0;F<=s;F++){let _=F/s,B=_*Math.PI*2,J=Math.sin(B),at=Math.cos(B);m.x=-S*at,m.y=M,m.z=S*J,l.push(m.x,m.y,m.z),g.set(-S*at,A,S*J),g.normalize(),o.push(g.x,g.y,g.z),h.push(_+T,y)}if(x>0){let F=(x-1)*v;for(let _=0;_<s;_++){let B=F+_,J=F+_+1,at=x*v+_,L=x*v+_+1;a.push(B,J,at),a.push(J,L,at)}}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Hr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],h=new ht,u=new ie;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){let d=n+c/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],p=0,v=[],g=n/2,m=0;x(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){let M=new ht,S=new ht,A=0,y=(e-t)/n;for(let T=0;T<=r;T++){let F=[],_=T/r,B=_*(e-t)+t;for(let J=0;J<=s;J++){let at=J/s,L=at*o+l,X=Math.sin(L),O=Math.cos(L);S.x=B*X,S.y=-_*n+g,S.z=B*O,c.push(S.x,S.y,S.z),M.set(X,y,O).normalize(),f.push(M.x,M.y,M.z),d.push(at,1-_),F.push(p++)}v.push(F)}for(let T=0;T<s;T++)for(let F=0;F<r;F++){let _=v[F][T],B=v[F+1][T],J=v[F+1][T+1],at=v[F][T+1];(t>0||F!==0)&&(u.push(_,B,at),A+=3),(e>0||F!==r-1)&&(u.push(B,J,at),A+=3)}h.addGroup(m,A,0),m+=A}function w(M){let S=p,A=new ie,y=new ht,T=0,F=M===!0?t:e,_=M===!0?1:-1;for(let J=1;J<=s;J++)c.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),p++;let B=p;for(let J=0;J<=s;J++){let L=J/s*o+l,X=Math.cos(L),O=Math.sin(L);y.x=F*O,y.y=g*_,y.z=F*X,c.push(y.x,y.y,y.z),f.push(0,_,0),A.x=X*.5+.5,A.y=O*.5*_+.5,d.push(A.x,A.y),p++}for(let J=0;J<s;J++){let at=S+J,L=B+J;M===!0?u.push(L,L+1,at):u.push(L+1,L,at),T+=3}h.addGroup(m,T,M===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gr=class i extends Ji{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),h(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let w=new ht,M=new ht,S=new ht;for(let A=0;A<e.length;A+=3)d(e[A+0],w),d(e[A+1],M),d(e[A+2],S),o(w,M,S,x)}function o(x,w,M,S){let A=S+1,y=[];for(let T=0;T<=A;T++){y[T]=[];let F=x.clone().lerp(M,T/A),_=w.clone().lerp(M,T/A),B=A-T;for(let J=0;J<=B;J++)J===0&&T===A?y[T][J]=F:y[T][J]=F.clone().lerp(_,J/B)}for(let T=0;T<A;T++)for(let F=0;F<2*(A-T)-1;F++){let _=Math.floor(F/2);F%2===0?(f(y[T][_+1]),f(y[T+1][_]),f(y[T][_])):(f(y[T][_+1]),f(y[T+1][_+1]),f(y[T+1][_]))}}function h(x){let w=new ht;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(x),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function u(){let x=new ht;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];let M=g(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;a.push(M,1-S)}p(),c()}function c(){for(let x=0;x<a.length;x+=6){let w=a[x+0],M=a[x+2],S=a[x+4],A=Math.max(w,M,S),y=Math.min(w,M,S);A>.9&&y<.1&&(w<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,w){let M=x*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function p(){let x=new ht,w=new ht,M=new ht,S=new ht,A=new ie,y=new ie,T=new ie;for(let F=0,_=0;F<r.length;F+=9,_+=6){x.set(r[F+0],r[F+1],r[F+2]),w.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),A.set(a[_+0],a[_+1]),y.set(a[_+2],a[_+3]),T.set(a[_+4],a[_+5]),S.copy(x).add(w).add(M).divideScalar(3);let B=g(S);v(A,_+0,x,B),v(y,_+2,w,B),v(T,_+4,M,B)}}function v(x,w,M,S){S<0&&x.x===1&&(a[w]=x.x-1),M.x===0&&M.z===0&&(a[w]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Vr=class i extends ao{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fn=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),h=l+1,u=o+1,c=t/l,f=e/o,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*f-a;for(let w=0;w<h;w++){let M=w*c-r;p.push(M,-x,0),v.push(0,0,1),g.push(w/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){let w=x+h*m,M=x+h*(m+1),S=x+1+h*(m+1),A=x+1+h*m;d.push(w,M,A),d.push(M,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$n=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],o=[],h=[],u=[],c=t,f=(e-t)/s,d=new ht,p=new ie;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=c*Math.cos(m),d.y=c*Math.sin(m),o.push(d.x,d.y,d.z),h.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}c+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,w=x,M=x+n+1,S=x+n+2,A=x+1;l.push(w,M,A),l.push(M,S,A)}}this.setIndex(l),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Un=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),h=0,u=[],c=new ht,f=new ht,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],w=m/n,M=a+w*l,S=t*Math.cos(M),A=Math.sqrt(t*t-S*S),y=0;m===0&&a===0?y=.5/e:m===n&&o===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let F=T/e,_=s+F*r;c.x=-A*Math.cos(_),c.y=S,c.z=A*Math.sin(_),p.push(c.x,c.y,c.z),f.copy(c).normalize(),v.push(f.x,f.y,f.z),g.push(F+y,1-w),x.push(h++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let w=u[m][x+1],M=u[m][x],S=u[m+1][x],A=u[m+1][x+1];(m!==0||a>0)&&d.push(w,M,A),(m!==n-1||o<Math.PI)&&d.push(M,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xh(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Ou={clone:As,merge:gn},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},er=class extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var lo=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},co=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case xc:r=t,l=2*e-n;break;case yc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,o=2*n-e;break;case yc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,w=(-1-d)*g+(1.5+d)*v+.5*p,M=d*g-d*v;for(let S=0;S!==l;++S)r[S]=m*a[u+S]+x*a[h+S]+w*a[o+S]+M*a[c+S];return r}},uo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==l;++f)r[f]=a[h+f]*c+a[o+f]*u;return r}},fo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},po=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this.inTangents,c=this.outTangents;if(!u||!c){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==l;++g)r[g]=a[h+g]*v+a[o+g]*p;return r}let f=l*2,d=t-1;for(let p=0;p!==l;++p){let v=a[h+p],g=a[o+p],m=d*f+p*2,x=c[m],w=c[m+1],M=t*f+p*2,S=u[M],A=u[M+1],y=Ip(n,e,x,S,s);r[p]=Bu(y,v,w,A,g)}return r}};function Bu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Pp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ip(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Bu(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Pp(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ha(t.settings)&&(n.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ha(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ha(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){ce("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){ce("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&ep(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){ce("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(s)o=!0;else{let c=l*n,f=c-n,d=c+n;for(let p=0;p!==n;++p){let v=e[c+p];if(v!==e[f+p]||v!==e[d+p]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let c=l*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,h=0;h!==n;++h)e[o+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=to;var Qi=class extends kn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Cr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};mo.prototype.ValueTypeName="color";var go=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="number";var vo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),h=t*l;for(let u=h+l;h!==u;h+=4)Vn.slerpFlat(r,0,a,h-l,a,h,o);return r}},Wr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends kn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Cr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="vector";var yo=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],p=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new yo,_o=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var mc=new xe,jh=new ht,Jh=new ht,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new ht,Va=new Vn,oi=new ht,$r=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new ht,Kh=new ie,Qh=new ie,We=class extends $r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,Qh),e.subVectors(Qh,Kh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/h,s*=a.width/o,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bs=class extends $r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends wo{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qs=-90,Xs=1,nr=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(qs,Xs,t,e);s.layers=this.layers,this.add(s);let r=new We(qs,Xs,t,e);r.layers=this.layers,this.add(r);let a=new We(qs,Xs,t,e);a.layers=this.layers,this.add(a);let l=new We(qs,Xs,t,e);l.layers=this.layers,this.add(l);let o=new We(qs,Xs,t,e);o.layers=this.layers,this.add(o);let h=new We(qs,Xs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let h of e)this.remove(h);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zc="\\[\\]\\.:\\/",Lp=new RegExp("["+Zc+"]","g"),jc="[^"+Zc+"]",Dp="[^"+Zc.replace("\\.","")+"]",Np=/((?:WC+[\/:])*)/.source.replace("WC",jc),Fp=/(WCOD+)?/.source.replace("WCOD",Dp),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),Op=new RegExp("^"+Np+Fp+Up+kp+"$"),Bp=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(t){let e=Op.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=bc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $y=new Float32Array(1);var tu=new xe,Xr=class{constructor(t,e,n=0,s=1/0){this.ray=new Nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(eu),n}};function eu(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)wc(r[a],t,e,!0)}}var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Jc(i,t,e,n){let s=zp(n);switch(e){case Hc:return i*t;case fi:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Oo:case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case na:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zp(i){switch(i){case an:case kc:return{byteLength:1,components:1};case lr:case Oc:case je:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case ni:case Ao:case Tn:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ld(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){let t=new WeakMap;function e(l,o){let h=l.array,u=l.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,h,u),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function n(l,o,h){let u=o.array,c=o.updateRanges;if(i.bindBuffer(h,l),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<c.length;d++){let p=c[f],v=c[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,c[f]=v)}c.length=f+1;for(let d=0,p=c.length;d<p;d++){let v=c[d];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:$p,alphamap_pars_fragment:qp,alphatest_fragment:Xp,alphatest_pars_fragment:Yp,aomap_fragment:Zp,aomap_pars_fragment:jp,batching_pars_vertex:Jp,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,defaultnormal_vertex:fm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:vm,colorspace_fragment:xm,colorspace_pars_fragment:ym,envmap_fragment:_m,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Nm,envmap_vertex:Sm,fog_vertex:Tm,fog_pars_vertex:Em,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Um,lights_phong_fragment:km,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:Hm,lights_fragment_maps:Gm,lights_fragment_end:Vm,lightprobes_pars_fragment:Wm,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:Ym,map_fragment:Zm,map_pars_fragment:jm,map_particle_fragment:Jm,map_particle_pars_fragment:Km,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:_0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:T0,shadowmap_vertex:E0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:F0,transmission_fragment:U0,transmission_pars_fragment:k0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:H0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:$0,cube_vert:q0,cube_frag:X0,depth_vert:Y0,depth_frag:Z0,distance_vert:j0,distance_frag:J0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:xg,shadow_frag:yg,sprite_vert:_g,sprite_frag:bg},Zt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:gn([Zt.common,Zt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:gn([Zt.lights,Zt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var hl={r:0,b:0,g:0},wg=new xe,cd=new de;cd.set(-1,0,0,0,1,0,0,0,1);function Mg(i,t,e,n,s,r){let a=new se(0),l=s===!0?0:1,o,h,u=null,c=0,f=null;function d(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){let M=x.backgroundBlurriness>0;w=t.get(w,M)}return w}function p(x){let w=!1,M=d(x);M===null?g(a,l):M&&M.isColor&&(g(M,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,w){let M=d(w);M&&M.isCubeTexture?(h===void 0&&(h=new pe(new ji(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:As(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(cd),h.material.toneMapped=_e.getTransfer(M.colorSpace)!==Se,(u!==M||c!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,c=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new pe(new Fn(2,2),new Xe({name:"BackgroundMaterial",uniforms:As(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=_e.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||c!==M.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=M,c=M.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,w){x.getRGB(hl,Yc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,w,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:v,dispose:m}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(B,J,at,L,X){let O=!1,N=c(B,L,at,J);r!==N&&(r=N,h(r.object)),O=d(B,L,at,X),O&&p(B,L,at,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(B,J,at,L),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function o(){return i.createVertexArray()}function h(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function c(B,J,at,L){let X=L.wireframe===!0,O=n[J.id];O===void 0&&(O={},n[J.id]=O);let N=B.isInstancedMesh===!0?B.id:0,j=O[N];j===void 0&&(j={},O[N]=j);let Y=j[at.id];Y===void 0&&(Y={},j[at.id]=Y);let V=Y[X];return V===void 0&&(V=f(o()),Y[X]=V),V}function f(B){let J=[],at=[],L=[];for(let X=0;X<e;X++)J[X]=0,at[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:at,attributeDivisors:L,object:B,attributes:{},index:null}}function d(B,J,at,L){let X=r.attributes,O=J.attributes,N=0,j=at.getAttributes();for(let Y in j)if(j[Y].location>=0){let U=X[Y],H=O[Y];if(H===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),U===void 0||U.attribute!==H||H&&U.data!==H.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function p(B,J,at,L){let X={},O=J.attributes,N=0,j=at.getAttributes();for(let Y in j)if(j[Y].location>=0){let U=O[Y];U===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(U=B.instanceColor));let H={};H.attribute=U,U&&U.data&&(H.data=U.data),X[Y]=H,N++}r.attributes=X,r.attributesNum=N,r.index=L}function v(){let B=r.newAttributes;for(let J=0,at=B.length;J<at;J++)B[J]=0}function g(B){m(B,0)}function m(B,J){let at=r.newAttributes,L=r.enabledAttributes,X=r.attributeDivisors;at[B]=1,L[B]===0&&(i.enableVertexAttribArray(B),L[B]=1),X[B]!==J&&(i.vertexAttribDivisor(B,J),X[B]=J)}function x(){let B=r.newAttributes,J=r.enabledAttributes;for(let at=0,L=J.length;at<L;at++)J[at]!==B[at]&&(i.disableVertexAttribArray(at),J[at]=0)}function w(B,J,at,L,X,O,N){N===!0?i.vertexAttribIPointer(B,J,at,X,O):i.vertexAttribPointer(B,J,at,L,X,O)}function M(B,J,at,L){v();let X=L.attributes,O=at.getAttributes(),N=J.defaultAttributeValues;for(let j in O){let Y=O[j];if(Y.location>=0){let V=X[j];if(V===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(V=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(V=B.instanceColor)),V!==void 0){let U=V.normalized,H=V.itemSize,W=t.get(V);if(W===void 0)continue;let z=W.buffer,st=W.type,ot=W.bytesPerElement,ut=st===i.INT||st===i.UNSIGNED_INT||V.gpuType===Ao;if(V.isInterleavedBufferAttribute){let dt=V.data,St=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,k=V.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt,dt.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let rt=0;rt<Y.locationSize;rt++)g(Y.location+rt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let rt=0;rt<Y.locationSize;rt++)w(Y.location+rt,H/Y.locationSize,st,U,St*ot,(k+H/Y.locationSize*rt)*ot,ut)}else{if(V.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt,V.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let dt=0;dt<Y.locationSize;dt++)g(Y.location+dt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let dt=0;dt<Y.locationSize;dt++)w(Y.location+dt,H/Y.locationSize,st,U,H*ot,H/Y.locationSize*dt*ot,ut)}}else if(N!==void 0){let U=N[j];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(Y.location,U);break;case 3:i.vertexAttrib3fv(Y.location,U);break;case 4:i.vertexAttrib4fv(Y.location,U);break;default:i.vertexAttrib1fv(Y.location,U)}}}}x()}function S(){F();for(let B in n){let J=n[B];for(let at in J){let L=J[at];for(let X in L){let O=L[X];for(let N in O)u(O[N].object),delete O[N];delete L[X]}}delete n[B]}}function A(B){if(n[B.id]===void 0)return;let J=n[B.id];for(let at in J){let L=J[at];for(let X in L){let O=L[X];for(let N in O)u(O[N].object),delete O[N];delete L[X]}}delete n[B.id]}function y(B){for(let J in n){let at=n[J];for(let L in at){let X=at[L];if(X[B.id]===void 0)continue;let O=X[B.id];for(let N in O)u(O[N].object),delete O[N];delete X[B.id]}}}function T(B){for(let J in n){let at=n[J],L=B.isInstancedMesh===!0?B.id:0,X=at[L];if(X!==void 0){for(let O in X){let N=X[O];for(let j in N)u(N[j].object),delete N[j];delete X[O]}delete at[L],Object.keys(at).length===0&&delete n[J]}}}function F(){_(),a=!0,r!==s&&(r=s,h(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Tg(i,t,e){let n;function s(o){n=o}function r(o,h){i.drawArrays(n,o,h),e.update(h,n,1)}function a(o,h,u){u!==0&&(i.drawArraysInstanced(n,o,h,u),e.update(h,n,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ye&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(y){let T=y===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==an&&y!==Tn&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=o(h);u!==h&&(oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&c===!1;e.reversedDepthBuffer===!0&&c===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&c===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:M,maxSamples:S,samples:A}}function Ag(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Nn,l=new de,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let p=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=i.get(c);if(!s||p===null||p.length===0||r&&!g)r?u(null):h();else{let x=r?0:n,w=x*4,M=m.clippingState||null;o.value=M,M=u(p,f,w,d);for(let S=0;S!==w;++S)M[S]=e[S];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,p){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){let m=d+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,M=d;w!==v;++w,M+=4)a.copy(c[w]).applyMatrix4(x,l),a.normal.toArray(g,M),g[M+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var oa=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ji(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ms});r.uniforms.tEquirect.value=e;let a=new pe(s,r),l=e.minFilter;return e.minFilter===rn&&(e.minFilter=Ae),new nr(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Hu=256,Rg=3,Cg=20,hd=256,ud=16,Pg=3,Ig=new ht,Lg=new se,hr=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new pe(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Ig}=r,o=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let c=o.autoClear,f=o.autoClearColor,d=o.autoClearDepth,p=o.autoClearStencil,v=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(t.background=o.getClearColor(Lg));let g=new nr(n,s,u);return g.position.copy(l),g.update(o,t),o.autoClear=c,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Hu,Uu(t))}_fromTexture(t,e){t.mapping===Ts||t.mapping===or?this._setSize(t.image.length===0?Hu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Gu(t,!1,!1),n=Math.log2(t)-Rg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Gu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ts||t.mapping===or?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dg(),this._integrationMaterial=Ng());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ud);for(let a=0;a<=n;a++){let l=i.lodToRoughness(a,n);if(a>n-Pg)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(hd*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Fg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Gu(i,t,e){return new oa(i,{minFilter:rn,generateMipmaps:t,type:je,colorSpace:ys,depthBuffer:e})}function la(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:nn,blending:Ms,depthTest:!1,depthWrite:!1})}function Dg(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ng(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ud}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fg(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vu(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wu(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===So||d===To)if(t.has(f)){let p=t.get(f).texture;return l(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new oa(p.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",h),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===So||d===To,v=d===Ts||d===or;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new hr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new hr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,d){return d===So?f.mapping=Ts:d===To&&(f.mapping=or),f}function o(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rr("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function c(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=v!==null?v.array.length:g.array.length/3-1,w=g.count>=65535?Dr:Lr,M=new w(Math.ceil(x/3)*6,1),S=M.array;if(v!==null){let y=v.array;m=v.version;for(let T=0,F=0;T<x;T+=3){let _=y[T+0],B=y[T+1],J=y[T+2];S[F++]=_,S[F++]=B,S[F++]=B,S[F++]=J,S[F++]=J,S[F++]=_}}else{m=g.version;for(let y=0,T=0;y<x;y+=3){let F=y+0,_=y+1,B=y+2;S[T++]=F,S[T++]=_,S[T++]=_,S[T++]=B,S[T++]=B,S[T++]=F}}M.version=m;let A=r.get(p);A&&t.remove(A),r.set(p,M)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&c(p)}else c(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&o(v)}}return{get:h,update:u,getWireframeAttribute:f,dispose:d}}function Bg(i,t,e){let n;function s(c){n=c}let r,a;function l(c){r=c.type,a=c.bytesPerElement}function o(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function zg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,t,e){let n=new WeakMap,s=new ge;function r(a,l,o){let h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==c){let F=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),v===!0&&(w=3);let M=l.attributes.position.count*w,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*S*4*c),y=new _s(A,M,S,c);y.type=Tn,y.needsUpdate=!0;let T=w*4;for(let _=0;_<c;_++){let B=g[_],J=m[_],at=x[_],L=M*S*4*_;for(let X=0;X<B.count;X++){let O=X*T;d===!0&&(s.fromBufferAttribute(B,X),A[L+O+0]=s.x,A[L+O+1]=s.y,A[L+O+2]=s.z,A[L+O+3]=0),p===!0&&(s.fromBufferAttribute(J,X),A[L+O+4]=s.x,A[L+O+5]=s.y,A[L+O+6]=s.z,A[L+O+7]=0),v===!0&&(s.fromBufferAttribute(at,X),A[L+O+8]=s.x,A[L+O+9]=s.y,A[L+O+10]=s.z,A[L+O+11]=at.itemSize===4?s.w:1)}}f={count:c,texture:y,size:new ie(M,S)},n.set(l,f),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",h)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gg(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var Vg={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Lc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function Wg(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,u=new Be;u.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Te([0,2,0,0,2,0],2));let c=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new pe(u,c),d=new bs(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,x=null,w=[],M=!1;this.setSize=function(S,A){a.setSize(S,A),l!==null&&l.setSize(S,A),o!==null&&o.setSize(S,A);for(let y=0;y<w.length;y++){let T=w[y];T.setSize&&T.setSize(S,A)}},this.setEffects=function(S){w=S,M=w.length>0&&w[0].isRenderPass===!0;let A=a.width,y=a.height;w.length>0&&l===null&&(l=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}),o=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&w.some(F=>F.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new ei(A,y),r===!0&&(h.format=Di,h.type=Es)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let F=0;F<w.length;F++){let _=w[F];_.setSize&&_.setSize(A,y),T&&_.needsDepthTexture===!0&&_.setDepthTexture&&_.setDepthTexture(h)}},this.begin=function(S,A){if(g||S.toneMapping===di&&w.length===0)return!1;if(x=A,A!==null){let y=A.width,T=A.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return M===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(S,A){S.toneMapping=m,g=!0;let y=a,T=l;for(let F=0;F<w.length;F++){let _=w[F];_.enabled!==!1&&(_.render(S,T,y,A),_.needsSwap!==!1&&(y=T,T=T===l?o:l))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,c.defines={},_e.getTransfer(p)===Se&&(c.defines.SRGB_TRANSFER="");let F=Vg[v];F&&(c.defines[F]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var dd=new cn,fd=new ei(1,1),pd=new Or(1),md=new _s,gd=new so,vd=new kr,$u=[],qu=[],Xu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Ke(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Ke(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),Ke(e,n)}}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function pl(i){return i.version===0&&(i.compareFunction=$c,i.needsUpdate=!0),i}function av(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=pl(fd):r=dd,e.setTexture2D(t||r,s)}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=pl(pd):r=vd,e.setTextureCube(t||r,s)}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function hv(i){switch(i){case 5126:return $g;case 35664:return qg;case 35665:return Xg;case 35666:return Yg;case 35674:return Zg;case 35675:return jg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(i,t){i.uniform1fv(this.addr,t)}function dv(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function fv(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function pv(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function mv(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gv(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vv(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xv(i,t){i.uniform1iv(this.addr,t)}function yv(i,t){i.uniform2iv(this.addr,t)}function _v(i,t){i.uniform3iv(this.addr,t)}function bv(i,t){i.uniform4iv(this.addr,t)}function wv(i,t){i.uniform1uiv(this.addr,t)}function Mv(i,t){i.uniform2uiv(this.addr,t)}function Sv(i,t){i.uniform3uiv(this.addr,t)}function Tv(i,t){i.uniform4uiv(this.addr,t)}function Ev(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pl(fd):a=dd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Av(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gd,r[a])}function Rv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=pl(pd):a=vd;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function Cv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||md,r[a])}function Pv(i){switch(i){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return vv;case 5124:case 35670:return xv;case 35667:case 35671:return yv;case 35668:case 35672:return _v;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Mv;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hv(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pv(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function ju(i,t){i.seq.push(t),i.map[t.id]=t}function Iv(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,l=r[1],o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){ju(e,h===void 0?new th(l,i,t):new eh(l,i,t));break}else{let c=e.map[l];c===void 0&&(c=new nh(l),ju(e,c)),e=c}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Iv(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ju(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lv=37297,Dv=0;function Nv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Ku=new de;function Fv(i){_e._getMatrix(Ku,_e.workingColorSpace,i);let t=`mat3( ${Ku.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(t),l)}else return r}function Uv(i,t){let e=Fv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kv={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[Lc]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Dc]:"Custom"};function Ov(i,t){let e=kv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new ht;function Bv(){_e.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Hv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function aa(i){return i!==""}function td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(Vv,Wv)}function Wv(i,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ih(e)}var $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace($v,qv)}function qv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Xv={[ws]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Yv(i){return Xv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[or]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jv={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[_u]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Kv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jv[i.combine]||"ENVMAP_BLENDING_NONE"}function Qv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=Yv(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=jv(e),c=Kv(e),f=zv(e),d=Hv(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(aa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(v=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?me.tonemapping_pars_fragment:"",e.toneMapping!==di?Ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),Bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),a=ih(a),a=td(a,e),a=ed(a,e),l=ih(l),l=td(l,e),l=ed(l,e),a=nd(a),l=nd(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===is?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===is?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+v+a,w=m+g+l,M=Ju(s,s.VERTEX_SHADER,x),S=Ju(s,s.FRAGMENT_SHADER,w);s.attachShader(p,M),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(_){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(p)||"",J=s.getShaderInfoLog(M)||"",at=s.getShaderInfoLog(S)||"",L=B.trim(),X=J.trim(),O=at.trim(),N=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,S);else{let Y=Qu(s,M,"vertex"),V=Qu(s,S,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+L+`
`+Y+`
`+V)}else L!==""?oe("WebGLProgram: Program Info Log:",L):(X===""||O==="")&&(j=!1);j&&(_.diagnostics={runnable:N,programLog:L,vertexShader:{log:X,prefix:v},fragmentShader:{log:O,prefix:g}})}s.deleteShader(M),s.deleteShader(S),y=new cr(s,p),T=Gv(s,p)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,Lv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var tx=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=tx++,this.code=t,this.usedTimes=0}};function ex(i){return i===ns||i===na||i===ia}function nx(i,t,e,n,s,r){let a=new Qs,l=new sh,o=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return o.add(y),y===0?"uv":`uv${y}`}function p(y,T,F,_,B,J){let at=_.fog,L=B.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?_.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=t.get(y.envMap||X,O),j=f[y.type],Y=n.precision;y.precision!==null&&(Y=n.getMaxPrecision(y.precision),Y!==y.precision&&oe("WebGLProgram.getParameters:",y.precision,"not supported, using",Y,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=V!==void 0?V.length:0,H=0;L.morphAttributes.position!==void 0&&(H=1),L.morphAttributes.normal!==void 0&&(H=2),L.morphAttributes.color!==void 0&&(H=3);let W,z,st,ot;if(j){let bt=mi[j];W=bt.vertexShader,z=bt.fragmentShader}else{W=y.vertexShader,z=y.fragmentShader;let bt=l.getVertexShaderStage(y),ae=l.getFragmentShaderStage(y);l.update(y,bt,ae),st=bt.id,ot=ae.id}let ut=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),St=B.isInstancedMesh===!0,k=B.isBatchedMesh===!0,rt=!!y.map,et=!!y.matcap,gt=!!N,ct=gt&&N.isPMREMTexture===!0,Mt=!!y.aoMap,Tt=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,Dt=!!y.normalMap,ee=!!y.displacementMap,Vt=!!y.emissiveMap,Rt=!!y.metalnessMap,Ct=!!y.roughnessMap,Ut=y.anisotropy>0,nt=y.clearcoat>0,$t=y.diffuseRoughness>0,Et=y.dispersion>0,Bt=y.retroreflectivity>0,vt=y.iridescence>0,Lt=y.sheen>0,kt=y.transmission>0,Nt=Ut&&!!y.anisotropyMap,$=nt&&!!y.clearcoatMap,E=nt&&!!y.clearcoatNormalMap,lt=nt&&!!y.clearcoatRoughnessMap,ft=$t&&!!y.diffuseRoughnessMap,R=vt&&!!y.iridescenceMap,G=vt&&!!y.iridescenceThicknessMap,K=Lt&&!!y.sheenColorMap,b=Lt&&!!y.sheenRoughnessMap,P=!!y.specularMap,D=!!y.specularColorMap,C=!!y.specularIntensityMap,Z=kt&&!!y.transmissionMap,tt=kt&&!!y.thicknessMap,yt=!!y.gradientMap,wt=!!y.alphaMap,Pt=y.alphaTest>0,zt=!!y.alphaHash,Ht=!!y.extensions,At=di;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(At=i.toneMapping);let It=ct?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,qt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:z,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Y,batching:k,batchingColor:k&&B._colorsTexture!==null,instancing:St,instancingColor:St&&B.instanceColor!==null,instancingMorph:St&&B.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:et,envMap:gt,envMapMode:gt&&N.mapping,envMapPMREM:ct,envMapMaxLod:ct?It.length-1:null,envMapSize:ct?It[0].width:null,aoMap:Mt,lightMap:Tt,bumpMap:Ft,normalMap:Dt,displacementMap:ee,emissiveMap:Vt,normalMapObjectSpace:Dt&&y.normalMapType===Su,normalMapTangentSpace:Dt&&y.normalMapType===cl,packedNormalMap:Dt&&y.normalMapType===cl&&ex(y.normalMap.format),metalnessMap:Rt,roughnessMap:Ct,anisotropy:Ut,anisotropyMap:Nt,clearcoat:nt,clearcoatMap:$,clearcoatNormalMap:E,clearcoatRoughnessMap:lt,diffuseRoughness:$t,diffuseRoughnessMap:ft,dispersion:Et,retroreflection:Bt,iridescence:vt,iridescenceMap:R,iridescenceThicknessMap:G,sheen:Lt,sheenColorMap:K,sheenRoughnessMap:b,specularMap:P,specularColorMap:D,specularIntensityMap:C,transmission:kt,transmissionMap:Z,thicknessMap:tt,gradientMap:yt,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:Pt,alphaHash:zt,combine:y.combine,mapUv:rt&&d(y.map.channel),aoMapUv:Mt&&d(y.aoMap.channel),lightMapUv:Tt&&d(y.lightMap.channel),bumpMapUv:Ft&&d(y.bumpMap.channel),normalMapUv:Dt&&d(y.normalMap.channel),displacementMapUv:ee&&d(y.displacementMap.channel),emissiveMapUv:Vt&&d(y.emissiveMap.channel),metalnessMapUv:Rt&&d(y.metalnessMap.channel),roughnessMapUv:Ct&&d(y.roughnessMap.channel),anisotropyMapUv:Nt&&d(y.anisotropyMap.channel),clearcoatMapUv:$&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:R&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:G&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:K&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:b&&d(y.sheenRoughnessMap.channel),specularMapUv:P&&d(y.specularMap.channel),specularColorMapUv:D&&d(y.specularColorMap.channel),specularIntensityMapUv:C&&d(y.specularIntensityMap.channel),transmissionMapUv:Z&&d(y.transmissionMap.channel),thicknessMapUv:tt&&d(y.thicknessMap.channel),alphaMapUv:wt&&d(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Dt||Ut),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(rt||wt),fog:!!at,useFog:y.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:dt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:H,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:J.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||k)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function v(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(g(T,y),m(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){let T=f[y.type],F;if(T){let _=mi[T];F=Ou.clone(_.uniforms)}else F=y.uniforms;return F}function w(y,T){let F=u.get(T);return F!==void 0?++F.usedTimes:(F=new Qv(i,T,y,s),h.push(F),u.set(T,F)),F}function M(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:w,releaseProgram:M,releaseShaderCache:S,programs:h,dispose:A}}function ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,p,v,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function o(f,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let w=l(f,d,p,v,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function h(f,d,p,v,g,m){let x=l(f,d,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||sx),n.length>1&&n.sort(d||sd),s.length>1&&s.sort(d||sd)}function c(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function rx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rd,i.set(n,[a])):s>=r.length?(a=new rd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ht,color:new se};break;case"SpotLight":e={position:new ht,direction:new ht,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ht,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ht,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return i[t.id]=e,e}}}function ox(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lx=0;function cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){let t=new ax,e=ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ht);let s=new ht,r=new xe,a=new xe;function l(h){let u=0,c=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,w=0,M=0,S=0,A=0,y=0,T=0,F=0,_=0;h.sort(cx);for(let J=0,at=h.length;J<at;J++){let L=h[J],X=L.color,O=L.intensity,N=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ns?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=X.r*O,c+=X.g*O,f+=X.b*O;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],O);_++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,U=e.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=j;let H=V.getViewportCount();for(let W=0;W<H;W++)n.sunShadowMatrix[v+W]=V.getMatrix(W),n.sunShadowCascade[v+W]=V._cascadeData[W];v+=H,p++}n.sun[d]=Y,d++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,U=e.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.directionalShadow[g]=U,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(X).multiplyScalar(O),Y.distance=N,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[x]=Y;let V=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[x]=V.matrix,L.castShadow){let U=e.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=j,y++}x++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(X).multiplyScalar(O),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let V=L.shadow,U=e.get(L);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=L.shadow.matrix,A++}n.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(O),Y.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[M]=Y,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let B=n.hash;(B.sunLength!==d||B.directionalLength!==g||B.pointLength!==m||B.spotLength!==x||B.rectAreaLength!==w||B.hemiLength!==M||B.numSunShadows!==p||B.numDirectionalShadows!==S||B.numPointShadows!==A||B.numSpotShadows!==y||B.numSpotMaps!==T||B.numLightProbes!==_)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=w,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-F,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=_,B.sunLength=d,B.directionalLength=g,B.pointLength=m,B.spotLength=x,B.rectAreaLength=w,B.hemiLength=M,B.numSunShadows=p,B.numDirectionalShadows=S,B.numPointShadows=A,B.numSpotShadows=y,B.numSpotMaps=T,B.numLightProbes=_,n.version=lx++)}function o(h,u){let c=0,f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,w=h.length;x<w;x++){let M=h[x];if(M.isSunLight){let S=n.sun[c];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),c++}else if(M.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:n}}function ad(i){let t=new hx(i),e=[],n=[],s=[];function r(c){u.camera=c,e.length=0,n.length=0,s.length=0}function a(c){c.isLightProbeGrid?s.push(c):e.push(c)}function l(c){n.push(c)}function o(){t.setup(e),s.sort((c,f)=>c.priority-f.priority||c.id-f.id)}function h(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l}}function ux(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new ad(i),t.set(s,[l])):r>=a.length?(l=new ad(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,px=[new ht(1,0,0),new ht(-1,0,0),new ht(0,1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1)],mx=[new ht(0,-1,0),new ht(0,-1,0),new ht(0,0,1),new ht(0,0,-1),new ht(0,-1,0),new ht(0,-1,0)],od=new xe,ra=new ht,Qc=new ht;function gx(i,t,e){let n=new ui,s=new ie,r=new ie,a=new ge,l=new lo,o=new co,h={},u=e.maxTextureSize,c={[es]:nn,[nn]:es,[sn]:sn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let m=this.type;this.render=function(A,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===su&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let F=i.getRenderTarget(),_=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Ms),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let at=m!==this.type;at&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=A.length;L<X;L++){let O=A[L],N=O.shadow;if(N===void 0){oe("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let j=N.getFrameExtents();s.multiply(j),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,N.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Y,N.map===null||at===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ir){if(O.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Oe(s.x,s.y,{format:ns,type:je,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new ei(s.x,s.y,Tn),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=Ii,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ue,N.map.depthTexture.magFilter=Ue}else O.isPointLight?(N.map=new oa(s.x),N.map.depthTexture=new Or(s.x,ni)):(N.map=new Oe(s.x,s.y),N.map.depthTexture=new ei(s.x,s.y,ni)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=Ii,this.type===ws?(N.map.depthTexture.compareFunction=Y?Wc:Vc,N.map.depthTexture.minFilter=Ae,N.map.depthTexture.magFilter=Ae):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ue,N.map.depthTexture.magFilter=Ue);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let V=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();O.isPointLight!==!0&&N.updateMatrices(O,T);let U=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:T.layers;for(let H=0;H<V;H++){let W=N.getCamera(H);if(O.isPointLight){let z=N.camera,st=N.matrix,ot=O.distance||z.far;ot!==z.far&&(z.far=ot,z.updateProjectionMatrix()),ra.setFromMatrixPosition(O.matrixWorld),z.position.copy(ra),Qc.copy(z.position),Qc.add(px[H]),z.up.copy(mx[H]),z.lookAt(Qc),z.updateMatrixWorld(),st.makeTranslation(-ra.x,-ra.y,-ra.z),od.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),N._frustum.setFromProjectionMatrix(od,z.coordinateSystem,z.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,H),i.clear();else{H===0&&(i.setRenderTarget(N.map),i.clear());let z=N.getViewport(H);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),J.viewport(a)}n=N.getFrustum(H),M(y,T,W,O,U,this.type)}N.isPointLightShadow!==!0&&this.type===ir&&x(N,T),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(F,_,B)};function x(A,y){let T=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Oe(s.x,s.y,{format:ns,type:je}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,T,d,v,null)}function w(A,y,T,F){let _=null,B=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)_=B;else if(_=T.isPointLight===!0?o:l,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let J=_.uuid,at=y.uuid,L=h[J];L===void 0&&(L={},h[J]=L);let X=L[at];X===void 0&&(X=_.clone(),L[at]=X,y.addEventListener("dispose",S)),_=X}if(_.visible=y.visible,_.wireframe=y.wireframe,F===ir?_.side=y.shadowSide!==null?y.shadowSide:y.side:_.side=y.shadowSide!==null?y.shadowSide:c[y.side],_.alphaMap=y.alphaMap,_.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,_.map=y.map,_.clipShadows=y.clipShadows,_.clippingPlanes=y.clippingPlanes,_.clipIntersection=y.clipIntersection,_.displacementMap=y.displacementMap,_.displacementScale=y.displacementScale,_.displacementBias=y.displacementBias,_.wireframeLinewidth=y.wireframeLinewidth,_.linewidth=y.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let J=i.properties.get(_);J.light=T}return _}function M(A,y,T,F,_,B){if(A.visible===!1)return;if(A.layers.test(_)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===ir)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let L=t.update(A),X=A.material;if(Array.isArray(X)){let O=L.groups;for(let N=0,j=O.length;N<j;N++){let Y=O[N],V=X[Y.materialIndex];if(V&&V.visible){let U=w(A,V,F,B);A.onBeforeShadow(i,A,y,T,L,U,Y),i.renderBufferDirect(T,null,L,U,A,Y),A.onAfterShadow(i,A,y,T,L,U,Y)}}}else if(X.visible){let O=w(A,X,F,B);A.onBeforeShadow(i,A,y,T,L,O,null),i.renderBufferDirect(T,null,L,O,A,null),A.onAfterShadow(i,A,y,T,L,O,null)}}let at=A.children;for(let L=0,X=at.length;L<X;L++)M(at[L],y,T,F,_,B)}function S(A){A.target.removeEventListener("dispose",S);for(let T in h){let F=h[T],_=A.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}function vx(i,t){function e(){let C=!1,Z=new ge,tt=null,yt=new ge(0,0,0,0);return{setMask:function(wt){tt!==wt&&!C&&(i.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){C=wt},setClear:function(wt,Pt,zt,Ht,At){At===!0&&(wt*=Ht,Pt*=Ht,zt*=Ht),Z.set(wt,Pt,zt,Ht),yt.equals(Z)===!1&&(i.clearColor(wt,Pt,zt,Ht),yt.copy(Z))},reset:function(){C=!1,tt=null,yt.set(-1,0,0,0)}}}function n(){let C=!1,Z=!1,tt=null,yt=null,wt=null;return{setReversed:function(Pt){if(Z!==Pt){let zt=t.get("EXT_clip_control");Pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Z=Pt;let Ht=wt;wt=null,this.setClear(Ht)}},getReversed:function(){return Z},setTest:function(Pt){Pt?dt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Pt){tt!==Pt&&!C&&(i.depthMask(Pt),tt=Pt)},setFunc:function(Pt){if(Z&&(Pt=Fu[Pt]),yt!==Pt){switch(Pt){case qa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Pt}},setLocked:function(Pt){C=Pt},setClear:function(Pt){wt!==Pt&&(wt=Pt,Z&&(Pt=1-Pt),i.clearDepth(Pt))},reset:function(){C=!1,tt=null,yt=null,wt=null,Z=!1}}}function s(){let C=!1,Z=null,tt=null,yt=null,wt=null,Pt=null,zt=null,Ht=null,At=null;return{setTest:function(It){C||(It?dt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(It){Z!==It&&!C&&(i.stencilMask(It),Z=It)},setFunc:function(It,qt,bt){(tt!==It||yt!==qt||wt!==bt)&&(i.stencilFunc(It,qt,bt),tt=It,yt=qt,wt=bt)},setOp:function(It,qt,bt){(Pt!==It||zt!==qt||Ht!==bt)&&(i.stencilOp(It,qt,bt),Pt=It,zt=qt,Ht=bt)},setLocked:function(It){C=It},setClear:function(It){At!==It&&(i.clearStencil(It),At=It)},reset:function(){C=!1,Z=null,tt=null,yt=null,wt=null,Pt=null,zt=null,Ht=null,At=null}}}let r=new e,a=new n,l=new s,o={},h=new WeakMap,u={},c={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,w=null,M=null,S=null,A=null,y=null,T=new se(0,0,0),F=0,_=!1,B=null,J=null,at=null,L=null,X=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=j>=2);let V=null,U={},H=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),z=new ge().fromArray(H),st=new ge().fromArray(W);function ot(C,Z,tt,yt){let wt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(C,Pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<tt;zt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(Z+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Pt}let ut={};ut[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),dt(i.DEPTH_TEST),a.setFunc(Zs),Ft(!1),Dt(Sc),dt(i.CULL_FACE),Mt(Ms);function dt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function St(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function k(C,Z){return f[C]!==Z?(i.bindFramebuffer(C,Z),f[C]=Z,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Z),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function rt(C,Z){let tt=p,yt=!1;if(C){tt=d.get(Z),tt===void 0&&(tt=[],d.set(Z,tt));let wt=C.textures;if(tt.length!==wt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,zt=wt.length;Pt<zt;Pt++)tt[Pt]=i.COLOR_ATTACHMENT0+Pt;tt.length=wt.length,yt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(tt)}function et(C){return v!==C?(i.useProgram(C),v=C,!0):!1}let gt={[Ss]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};gt[ou]=i.MIN,gt[lu]=i.MAX;let ct={[Zr]:i.ZERO,[jr]:i.ONE,[cu]:i.SRC_COLOR,[rr]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[uu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[ar]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(C,Z,tt,yt,wt,Pt,zt,Ht,At,It){if(C===Ms){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),C!==Yr){if(C!==m||It!==_){if((x!==Ss||S!==Ss)&&(i.blendEquation(i.FUNC_ADD),x=Ss,S=Ss),It)switch(C){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",C);break}else switch(C){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",C);break}w=null,M=null,A=null,y=null,T.set(0,0,0),F=0,m=C,_=It}return}wt=wt||Z,Pt=Pt||tt,zt=zt||yt,(Z!==x||wt!==S)&&(i.blendEquationSeparate(gt[Z],gt[wt]),x=Z,S=wt),(tt!==w||yt!==M||Pt!==A||zt!==y)&&(i.blendFuncSeparate(ct[tt],ct[yt],ct[Pt],ct[zt]),w=tt,M=yt,A=Pt,y=zt),(Ht.equals(T)===!1||At!==F)&&(i.blendColor(Ht.r,Ht.g,Ht.b,At),T.copy(Ht),F=At),m=C,_=!1}function Tt(C,Z){C.side===sn?St(i.CULL_FACE):dt(i.CULL_FACE);let tt=C.side===nn;Z&&(tt=!tt),Ft(tt),C.blending===sr&&C.transparent===!1?Mt(Ms):Mt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let yt=C.stencilWrite;l.setTest(yt),yt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Vt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){B!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),B=C)}function Dt(C){C!==nu?(dt(i.CULL_FACE),C!==J&&(C===Sc?i.cullFace(i.BACK):C===iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),J=C}function ee(C){C!==at&&(N&&i.lineWidth(C),at=C)}function Vt(C,Z,tt){C?(dt(i.POLYGON_OFFSET_FILL),(L!==Z||X!==tt)&&(L=Z,X=tt,a.getReversed()&&(Z=-Z,tt=-tt),i.polygonOffset(Z,tt))):St(i.POLYGON_OFFSET_FILL)}function Rt(C){C?dt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ct(C){C===void 0&&(C=i.TEXTURE0+O-1),V!==C&&(i.activeTexture(C),V=C)}function Ut(C,Z,tt){tt===void 0&&(V===null?tt=i.TEXTURE0+O-1:tt=V);let yt=U[tt];yt===void 0&&(yt={type:void 0,texture:void 0},U[tt]=yt),(yt.type!==C||yt.texture!==Z)&&(V!==tt&&(i.activeTexture(tt),V=tt),i.bindTexture(C,Z||ut[C]),yt.type=C,yt.texture=Z)}function nt(){let C=U[V];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function Et(){try{i.compressedTexImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function vt(){try{i.texSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Nt(){try{i.texStorage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function $(){try{i.texStorage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function E(){try{i.texImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function lt(){try{i.texImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function ft(C){return c[C]!==void 0?c[C]:i.getParameter(C)}function R(C,Z){c[C]!==Z&&(i.pixelStorei(C,Z),c[C]=Z)}function G(C){z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),z.copy(C))}function K(C){st.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),st.copy(C))}function b(C,Z){let tt=h.get(Z);tt===void 0&&(tt=new WeakMap,h.set(Z,tt));let yt=tt.get(C);yt===void 0&&(yt=i.getUniformBlockIndex(Z,C.name),i.uniformBlockBinding(Z,yt,yt),tt.set(C,yt))}function P(C,Z,tt){let wt=h.get(Z).get(C);o[wt]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,wt,tt),o[wt]=tt)}function D(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},V=null,U={},f={},o={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,w=null,M=null,S=null,A=null,y=null,T=new se(0,0,0),F=0,_=!1,B=null,J=null,at=null,L=null,X=null,z.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:dt,disable:St,bindFramebuffer:k,drawBuffers:rt,useProgram:et,setBlending:Mt,setMaterial:Tt,setFlipSided:Ft,setCullFace:Dt,setLineWidth:ee,setPolygonOffset:Vt,setScissorTest:Rt,activeTexture:Ct,bindTexture:Ut,unbindTexture:nt,compressedTexImage2D:$t,compressedTexImage3D:Et,texImage2D:E,texImage3D:lt,pixelStorei:R,getParameter:ft,updateUBOMapping:b,uniformBlockBinding:P,texStorage2D:Nt,texStorage3D:$,texSubImage2D:Bt,texSubImage3D:vt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:kt,scissor:G,viewport:K,reset:D}}function xx(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ie,u=new WeakMap,c=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry($=>p.delete($)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m($,E){return g?new OffscreenCanvas($,E):Ir("canvas")}function x($,E,lt){let ft=1,R=Nt($);if((R.width>lt||R.height>lt)&&(ft=lt/Math.max(R.width,R.height)),ft<1)if(typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&$ instanceof ImageBitmap||typeof VideoFrame<"u"&&$ instanceof VideoFrame){let G=Math.floor(ft*R.width),K=Math.floor(ft*R.height);f===void 0&&(f=m(G,K));let b=E?m(G,K):f;return b.width=G,b.height=K,b.getContext("2d").drawImage($,0,0,G,K),oe("WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+G+"x"+K+")."),b}else return"data"in $&&oe("WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),$;return $}function w($){return $.generateMipmaps}function M($){i.generateMipmap($)}function S($){return $.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:$.isWebGL3DRenderTarget?i.TEXTURE_3D:$.isWebGLArrayRenderTarget||$.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A($,E,lt,ft,R,G=!1){if($!==null){if(i[$]!==void 0)return i[$];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+$+"'")}let K;ft&&(K=t.get("EXT_texture_norm16"),K||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let b=E;if(E===i.RED&&(lt===i.FLOAT&&(b=i.R32F),lt===i.HALF_FLOAT&&(b=i.R16F),lt===i.UNSIGNED_BYTE&&(b=i.R8),lt===i.UNSIGNED_SHORT&&K&&(b=K.R16_EXT),lt===i.SHORT&&K&&(b=K.R16_SNORM_EXT)),E===i.RED_INTEGER&&(lt===i.UNSIGNED_BYTE&&(b=i.R8UI),lt===i.UNSIGNED_SHORT&&(b=i.R16UI),lt===i.UNSIGNED_INT&&(b=i.R32UI),lt===i.BYTE&&(b=i.R8I),lt===i.SHORT&&(b=i.R16I),lt===i.INT&&(b=i.R32I)),E===i.RG&&(lt===i.FLOAT&&(b=i.RG32F),lt===i.HALF_FLOAT&&(b=i.RG16F),lt===i.UNSIGNED_BYTE&&(b=i.RG8),lt===i.UNSIGNED_SHORT&&K&&(b=K.RG16_EXT),lt===i.SHORT&&K&&(b=K.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(lt===i.UNSIGNED_BYTE&&(b=i.RG8UI),lt===i.UNSIGNED_SHORT&&(b=i.RG16UI),lt===i.UNSIGNED_INT&&(b=i.RG32UI),lt===i.BYTE&&(b=i.RG8I),lt===i.SHORT&&(b=i.RG16I),lt===i.INT&&(b=i.RG32I)),E===i.RGB_INTEGER&&(lt===i.UNSIGNED_BYTE&&(b=i.RGB8UI),lt===i.UNSIGNED_SHORT&&(b=i.RGB16UI),lt===i.UNSIGNED_INT&&(b=i.RGB32UI),lt===i.BYTE&&(b=i.RGB8I),lt===i.SHORT&&(b=i.RGB16I),lt===i.INT&&(b=i.RGB32I)),E===i.RGBA_INTEGER&&(lt===i.UNSIGNED_BYTE&&(b=i.RGBA8UI),lt===i.UNSIGNED_SHORT&&(b=i.RGBA16UI),lt===i.UNSIGNED_INT&&(b=i.RGBA32UI),lt===i.BYTE&&(b=i.RGBA8I),lt===i.SHORT&&(b=i.RGBA16I),lt===i.INT&&(b=i.RGBA32I)),E===i.RGB&&(lt===i.UNSIGNED_SHORT&&K&&(b=K.RGB16_EXT),lt===i.SHORT&&K&&(b=K.RGB16_SNORM_EXT),lt===i.UNSIGNED_INT_5_9_9_9_REV&&(b=i.RGB9_E5),lt===i.UNSIGNED_INT_10F_11F_11F_REV&&(b=i.R11F_G11F_B10F)),E===i.RGBA){let P=G?Pr:_e.getTransfer(R);lt===i.FLOAT&&(b=i.RGBA32F),lt===i.HALF_FLOAT&&(b=i.RGBA16F),lt===i.UNSIGNED_BYTE&&(b=P===Se?i.SRGB8_ALPHA8:i.RGBA8),lt===i.UNSIGNED_SHORT&&K&&(b=K.RGBA16_EXT),lt===i.SHORT&&K&&(b=K.RGBA16_SNORM_EXT),lt===i.UNSIGNED_SHORT_4_4_4_4&&(b=i.RGBA4),lt===i.UNSIGNED_SHORT_5_5_5_1&&(b=i.RGB5_A1)}return(b===i.R16F||b===i.R32F||b===i.RG16F||b===i.RG32F||b===i.RGBA16F||b===i.RGBA32F)&&t.get("EXT_color_buffer_float"),b}function y($,E){let lt;return $?E===null||E===ni||E===Es?lt=i.DEPTH24_STENCIL8:E===Tn?lt=i.DEPTH32F_STENCIL8:E===lr&&(lt=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ni||E===Es?lt=i.DEPTH_COMPONENT24:E===Tn?lt=i.DEPTH_COMPONENT32F:E===lr&&(lt=i.DEPTH_COMPONENT16),lt}function T($,E){return w($)===!0||$.isFramebufferTexture&&$.minFilter!==Ue&&$.minFilter!==Ae?Math.log2(Math.max(E.width,E.height))+1:$.mipmaps.length>0?$.mipmaps.length:$.isCompressedTexture&&Array.isArray($.image)?E.mipmaps.length:1}function F($){let E=new WeakRef($);n.get($).__ref=E,p.add(E),v.register($,E,E)}function _($){let E=n.get($).__ref;E!==void 0&&(p.delete(E),v.unregister(E))}function B($){at($.target)}function J($){L($.target)}function at($){$.removeEventListener("dispose",B),_($),O($),$.isVideoTexture&&u.delete($),$.isHTMLTexture&&c.delete($)}function L($){$.removeEventListener("dispose",J),_($),j($)}function X(){for(let $ of p){let E=$.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):at(E))}p.clear(),c.clear()}function O($){let E=n.get($);if(E.__webglInit===void 0)return;let lt=$.source,ft=d.get(lt);if(ft){let R=ft[E.__cacheKey];R.usedTimes--,R.usedTimes===0&&N($),Object.keys(ft).length===0&&d.delete(lt)}n.remove($)}function N($){let E=n.get($);i.deleteTexture(E.__webglTexture);let lt=$.source,ft=d.get(lt);delete ft[E.__cacheKey],a.memory.textures--}function j($){let E=n.get($);E.__depthDisposeCallback&&E.__depthDisposeCallback();let lt=$.depthTexture;if(lt&&lt.renderTarget===$&&at(lt),$.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(E.__webglFramebuffer[R]))for(let G=0;G<E.__webglFramebuffer[R].length;G++)i.deleteFramebuffer(E.__webglFramebuffer[R][G]);else i.deleteFramebuffer(E.__webglFramebuffer[R]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[R])}else{if(Array.isArray(E.__webglFramebuffer))for(let R=0;R<E.__webglFramebuffer.length;R++)i.deleteFramebuffer(E.__webglFramebuffer[R]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let R=0;R<E.__webglColorRenderbuffer.length;R++)E.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[R]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ft=$.textures;for(let R=0,G=ft.length;R<G;R++){let K=n.get(ft[R]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(ft[R])}n.remove($)}let Y=0;function V(){Y=0}function U(){return Y}function H($){Y=$}function W(){let $=Y;return $>=s.maxTextures&&oe("WebGLTextures: Trying to use "+($+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,$}function z($){let E=[];return E.push($.wrapS),E.push($.wrapT),E.push($.wrapR||0),E.push($.magFilter),E.push($.minFilter),E.push($.anisotropy),E.push($.internalFormat),E.push($.format),E.push($.type),E.push($.generateMipmaps),E.push($.mipmapsAutoUpdate),E.push($.premultiplyAlpha),E.push($.flipY),E.push($.unpackAlignment),E.push($.colorSpace),E.join()}function st($,E){let lt=n.get($);if($.isVideoTexture&&Lt($),$.isRenderTargetTexture===!1&&$.isExternalTexture!==!0&&$.version>0&&lt.__version!==$.version){let ft=$.image;if(ft===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(lt,$,E);return}}else $.isExternalTexture&&(lt.__webglTexture=$.sourceTexture?$.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture,i.TEXTURE0+E)}function ot($,E){let lt=n.get($);if($.isRenderTargetTexture===!1&&$.version>0&&lt.__version!==$.version){Tt(lt,$,E);return}else $.isExternalTexture&&(lt.__webglTexture=$.sourceTexture?$.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,lt.__webglTexture,i.TEXTURE0+E)}function ut($,E){let lt=n.get($);if($.isRenderTargetTexture===!1&&$.version>0&&lt.__version!==$.version){Tt(lt,$,E);return}e.bindTexture(i.TEXTURE_3D,lt.__webglTexture,i.TEXTURE0+E)}function dt($,E){let lt=n.get($);if($.version>0&&lt.__version!==$.version){Ft(lt,$,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture,i.TEXTURE0+E)}let St={[Pi]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},k={[Ue]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},rt={[Eu]:i.NEVER,[$c]:i.ALWAYS,[Au]:i.LESS,[Vc]:i.LEQUAL,[Ru]:i.EQUAL,[Wc]:i.GEQUAL,[Cu]:i.GREATER,[Pu]:i.NOTEQUAL};function et($,E){if(E.type===Tn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ae||E.magFilter===Eo||E.magFilter===Jr||E.magFilter===rn||E.minFilter===Ae||E.minFilter===Eo||E.minFilter===Jr||E.minFilter===rn)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri($,i.TEXTURE_WRAP_S,St[E.wrapS]),i.texParameteri($,i.TEXTURE_WRAP_T,St[E.wrapT]),($===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY)&&i.texParameteri($,i.TEXTURE_WRAP_R,St[E.wrapR]),i.texParameteri($,i.TEXTURE_MAG_FILTER,k[E.magFilter]),i.texParameteri($,i.TEXTURE_MIN_FILTER,k[E.minFilter]),E.compareFunction&&(i.texParameteri($,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri($,i.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ue||E.minFilter!==Jr&&E.minFilter!==rn||E.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let lt=t.get("EXT_texture_filter_anisotropic");i.texParameterf($,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt($,E){let lt=!1;$.__webglInit===void 0&&($.__webglInit=!0,E.addEventListener("dispose",B),F(E));let ft=E.source,R=d.get(ft);R===void 0&&(R={},d.set(ft,R));let G=z(E);if(G!==$.__cacheKey){R[G]===void 0&&(R[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,lt=!0),R[G].usedTimes++;let K=R[$.__cacheKey];K!==void 0&&(R[$.__cacheKey].usedTimes--,K.usedTimes===0&&N(E)),$.__cacheKey=G,$.__webglTexture=R[G].texture}return lt}function ct($,E,lt){return Math.floor(Math.floor($/lt)/E)}function Mt($,E,lt,ft){let G=$.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,lt,ft,E.data);else{G.sort((C,Z)=>C.start-Z.start);let K=0;for(let C=1;C<G.length;C++){let Z=G[K],tt=G[C],yt=Z.start+Z.count,wt=ct(tt.start,E.width,4),Pt=ct(Z.start,E.width,4);tt.start<=yt+1&&wt===Pt&&ct(tt.start+tt.count-1,E.width,4)===wt?Z.count=Math.max(Z.count,tt.start+tt.count-Z.start):(++K,G[K]=tt)}G.length=K+1;let b=e.getParameter(i.UNPACK_ROW_LENGTH),P=e.getParameter(i.UNPACK_SKIP_PIXELS),D=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let C=0,Z=G.length;C<Z;C++){let tt=G[C],yt=Math.floor(tt.start/4),wt=Math.ceil(tt.count/4),Pt=yt%E.width,zt=Math.floor(yt/E.width),Ht=wt,At=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,Pt,zt,Ht,At,lt,ft,E.data)}$.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,b),e.pixelStorei(i.UNPACK_SKIP_PIXELS,P),e.pixelStorei(i.UNPACK_SKIP_ROWS,D)}}function Tt($,E,lt){let ft=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=i.TEXTURE_3D);let R=gt($,E),G=E.source;e.bindTexture(ft,$.__webglTexture,i.TEXTURE0+lt);let K=n.get(G);if(G.version!==K.__version||R===!0){if(e.activeTexture(i.TEXTURE0+lt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let At=_e.getPrimaries(_e.workingColorSpace),It=E.colorSpace===On?null:_e.getPrimaries(E.colorSpace),qt=E.colorSpace===On||At===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let P=x(E.image,!1,s.maxTextureSize);P=kt(E,P);let D=r.convert(E.format,E.colorSpace),C=r.convert(E.type),Z=A(E.internalFormat,D,C,E.normalized,E.colorSpace,E.isVideoTexture);et(ft,E);let tt,yt=E.mipmaps,wt=E.isVideoTexture!==!0,Pt=K.__version===void 0||R===!0,zt=G.dataReady,Ht=T(E,P);if(E.isDepthTexture)Z=y(E.format===Di,E.type),Pt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,Z,P.width,P.height):e.texImage2D(i.TEXTURE_2D,0,Z,P.width,P.height,0,D,C,null));else if(E.isDataTexture)if(yt.length>0){wt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Z,yt[0].width,yt[0].height);for(let At=0,It=yt.length;At<It;At++)tt=yt[At],wt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,tt.width,tt.height,D,C,tt.data):e.texImage2D(i.TEXTURE_2D,At,Z,tt.width,tt.height,0,D,C,tt.data);E.generateMipmaps=!1}else wt?(Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Z,P.width,P.height),zt&&Mt(E,P,D,C)):e.texImage2D(i.TEXTURE_2D,0,Z,P.width,P.height,0,D,C,P.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Z,yt[0].width,yt[0].height,P.depth);for(let At=0,It=yt.length;At<It;At++)if(tt=yt[At],E.format!==Ye)if(D!==null)if(wt){if(zt)if(E.layerUpdates.size>0){let qt=Jc(tt.width,tt.height,E.format,E.type);for(let bt of E.layerUpdates){let ae=tt.data.subarray(bt*qt/tt.data.BYTES_PER_ELEMENT,(bt+1)*qt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,bt,tt.width,tt.height,1,D,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,tt.width,tt.height,P.depth,D,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,At,Z,tt.width,tt.height,P.depth,0,tt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,tt.width,tt.height,P.depth,D,C,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,At,Z,tt.width,tt.height,P.depth,0,D,C,tt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{wt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Z,yt[0].width,yt[0].height);for(let At=0,It=yt.length;At<It;At++)tt=yt[At],E.format!==Ye?D!==null?wt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,At,0,0,tt.width,tt.height,D,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,At,Z,tt.width,tt.height,0,tt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,tt.width,tt.height,D,C,tt.data):e.texImage2D(i.TEXTURE_2D,At,Z,tt.width,tt.height,0,D,C,tt.data)}else if(E.isDataArrayTexture)if(wt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Z,P.width,P.height,P.depth),zt)if(E.layerUpdates.size>0){let At=Jc(P.width,P.height,E.format,E.type);for(let It of E.layerUpdates){let qt=P.data.subarray(It*At/P.data.BYTES_PER_ELEMENT,(It+1)*At/P.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,P.width,P.height,1,D,C,qt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,D,C,P.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,P.width,P.height,P.depth,0,D,C,P.data);else if(E.isData3DTexture)wt?(Pt&&e.texStorage3D(i.TEXTURE_3D,Ht,Z,P.width,P.height,P.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,D,C,P.data)):e.texImage3D(i.TEXTURE_3D,0,Z,P.width,P.height,P.depth,0,D,C,P.data);else if(E.isFramebufferTexture){if(Pt)if(wt)e.texStorage2D(i.TEXTURE_2D,Ht,Z,P.width,P.height);else{let At=P.width,It=P.height;for(let qt=0;qt<Ht;qt++)e.texImage2D(i.TEXTURE_2D,qt,Z,At,It,0,D,C,null),At>>=1,It>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let At=i.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),P.parentNode!==At){At.appendChild(P),c.add(E),At.onpaint=It=>{let qt=It.changedElements;for(let bt of c)qt.includes(bt.image)&&(bt.needsUpdate=!0)},At.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,P);else{let qt=i.RGBA,bt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,bt,ae,P)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(wt&&Pt){let At=Nt(yt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,Z,At.width,At.height)}for(let At=0,It=yt.length;At<It;At++)tt=yt[At],wt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,D,C,tt):e.texImage2D(i.TEXTURE_2D,At,Z,D,C,tt);E.generateMipmaps=!1}else if(wt){if(Pt){let At=Nt(P);e.texStorage2D(i.TEXTURE_2D,Ht,Z,At.width,At.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,C,P)}else e.texImage2D(i.TEXTURE_2D,0,Z,D,C,P);w(E)&&E.mipmapsAutoUpdate===!0&&M(ft),K.__version=G.version,E.onUpdate&&E.onUpdate(E)}$.__version=E.version}function Ft($,E,lt){if(E.image.length!==6)return;let ft=gt($,E),R=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+lt);let G=n.get(R);if(R.version!==G.__version||ft===!0){e.activeTexture(i.TEXTURE0+lt);let K=_e.getPrimaries(_e.workingColorSpace),b=E.colorSpace===On?null:_e.getPrimaries(E.colorSpace),P=E.colorSpace===On||K===b?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);let D=E.isCompressedTexture||E.image[0].isCompressedTexture,C=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let bt=0;bt<6;bt++)!D&&!C?Z[bt]=x(E.image[bt],!0,s.maxCubemapSize):Z[bt]=C?E.image[bt].image:E.image[bt],Z[bt]=kt(E,Z[bt]);let tt=Z[0],yt=r.convert(E.format,E.colorSpace),wt=r.convert(E.type),Pt=A(E.internalFormat,yt,wt,E.normalized,E.colorSpace),zt=E.isVideoTexture!==!0,Ht=G.__version===void 0||ft===!0,At=R.dataReady,It=T(E,tt);et(i.TEXTURE_CUBE_MAP,E);let qt;if(E.isDepthTexture){if(Pt=y(E.format===Di,E.type),Ht)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pt,tt.width,tt.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Pt,tt.width,tt.height,0,yt,wt,null)}else if(D){zt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Pt,tt.width,tt.height);for(let bt=0;bt<6;bt++){qt=Z[bt].mipmaps;for(let ae=0;ae<qt.length;ae++){let le=qt[ae];E.format!==Ye?yt!==null?zt?At&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae,0,0,le.width,le.height,yt,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae,Pt,le.width,le.height,0,le.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae,0,0,le.width,le.height,yt,wt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae,Pt,le.width,le.height,0,yt,wt,le.data)}}}else{if(qt=E.mipmaps,zt&&Ht){qt.length>0&&It++;let bt=Nt(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Pt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(C){zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Z[bt].width,Z[bt].height,yt,wt,Z[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Pt,Z[bt].width,Z[bt].height,0,yt,wt,Z[bt].data);for(let ae=0;ae<qt.length;ae++){let De=qt[ae].image[bt].image;zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae+1,0,0,De.width,De.height,yt,wt,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae+1,Pt,De.width,De.height,0,yt,wt,De.data)}}else{zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,yt,wt,Z[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Pt,yt,wt,Z[bt]);for(let ae=0;ae<qt.length;ae++){let le=qt[ae];zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae+1,0,0,yt,wt,le.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ae+1,Pt,yt,wt,le.image[bt])}}}w(E)&&E.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),G.__version=R.version,E.onUpdate&&E.onUpdate(E)}$.__version=E.version}function Dt($,E,lt,ft,R,G){let K=r.convert(lt.format,lt.colorSpace),b=r.convert(lt.type),P=A(lt.internalFormat,K,b,lt.normalized,lt.colorSpace),D=n.get(E),C=n.get(lt);if(C.__renderTarget=E,!D.__hasExternalTextures){let Z=Math.max(1,E.width>>G),tt=Math.max(1,E.height>>G);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,G,P,Z,tt,E.depth,0,K,b,null):e.texImage2D(R,G,P,Z,tt,0,K,b,null)}e.bindFramebuffer(i.FRAMEBUFFER,$),vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,R,C.__webglTexture,0,Bt(E)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,R,C.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee($,E,lt){if(i.bindRenderbuffer(i.RENDERBUFFER,$),E.depthBuffer){let ft=E.depthTexture,R=ft&&ft.isDepthTexture?ft.type:null,G=y(E.stencilBuffer,R),K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),G,E.width,E.height):lt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),G,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,G,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}else{let ft=E.textures;for(let R=0;R<ft.length;R++){let G=ft[R],K=r.convert(G.format,G.colorSpace),b=r.convert(G.type),P=A(G.internalFormat,K,b,G.normalized,G.colorSpace);vt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),P,E.width,E.height):lt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),P,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,P,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt($,E,lt){let ft=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,$),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let R=n.get(E.depthTexture);R.__renderTarget=E;let G=ft?E.depthTexture.image[0]:E.depthTexture.image;(!R.__webglTexture||G.width!==E.width||G.height!==E.height)&&(G.width=E.width,G.height=E.height,E.depthTexture.needsUpdate=!0),ft?dt(E.depthTexture,0):st(E.depthTexture,0);let K=R.__webglTexture,b=Bt(E),P=ft?i.TEXTURE_CUBE_MAP_POSITIVE_X+lt:i.TEXTURE_2D,D=E.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ii)vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,P,K,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,D,P,K,0);else if(E.depthTexture.format===Di)vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,P,K,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,D,P,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt($){let E=n.get($),lt=$.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==$.depthTexture){let ft=$.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){let R=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",R)};ft.addEventListener("dispose",R),E.__depthDisposeCallback=R}E.__boundDepthTexture=ft}if($.depthTexture&&!E.__autoAllocateDepthBuffer)if(lt)for(let ft=0;ft<6;ft++)Vt(E.__webglFramebuffer[ft],$,ft);else $.texture.mipmaps.length>0?Vt(E.__webglFramebuffer[0],$,0):Vt(E.__webglFramebuffer,$,0);else if(lt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=i.createRenderbuffer(),ee(E.__webglDepthbuffer[ft],$,!1);else{let R=$.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,G)}}else if($.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ee(E.__webglDepthbuffer,$,!1);else{let R=$.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,G)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct($,E,lt){let ft=n.get($);E!==void 0&&Dt(ft.__webglFramebuffer,$,$.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),lt!==void 0&&Rt($)}function Ut($){let E=$.texture,lt=n.get($),ft=n.get(E);$.addEventListener("dispose",J),F($);let R=$.textures,G=$.isWebGLCubeRenderTarget===!0,K=R.length>1;if(K||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=E.version,a.memory.textures++),G){lt.__webglFramebuffer=[];for(let b=0;b<6;b++)if(E.mipmaps.length>0){lt.__webglFramebuffer[b]=[];for(let P=0;P<E.mipmaps.length;P++)lt.__webglFramebuffer[b][P]=i.createFramebuffer()}else lt.__webglFramebuffer[b]=i.createFramebuffer()}else{if(E.mipmaps.length>0){lt.__webglFramebuffer=[];for(let b=0;b<E.mipmaps.length;b++)lt.__webglFramebuffer[b]=i.createFramebuffer()}else lt.__webglFramebuffer=i.createFramebuffer();if(K)for(let b=0,P=R.length;b<P;b++){let D=n.get(R[b]);D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture(),a.memory.textures++)}if($.samples>0&&vt($)===!1){lt.__webglMultisampledFramebuffer=i.createFramebuffer(),lt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let b=0;b<R.length;b++){let P=R[b];lt.__webglColorRenderbuffer[b]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,lt.__webglColorRenderbuffer[b]);let D=r.convert(P.format,P.colorSpace),C=r.convert(P.type),Z=A(P.internalFormat,D,C,P.normalized,P.colorSpace,$.isXRRenderTarget===!0),tt=Bt($);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Z,$.width,$.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,lt.__webglColorRenderbuffer[b])}i.bindRenderbuffer(i.RENDERBUFFER,null),$.depthBuffer&&(lt.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(lt.__webglDepthRenderbuffer,$,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let b=0;b<6;b++)if(E.mipmaps.length>0)for(let P=0;P<E.mipmaps.length;P++)Dt(lt.__webglFramebuffer[b][P],$,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,P);else Dt(lt.__webglFramebuffer[b],$,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);w(E)?M(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(K){for(let b=0,P=R.length;b<P;b++){let D=R[b],C=n.get(D),Z=i.TEXTURE_2D;($.isWebGL3DRenderTarget||$.isWebGLArrayRenderTarget)&&(Z=$.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,C.__webglTexture),et(Z,D),Dt(lt.__webglFramebuffer,$,D,i.COLOR_ATTACHMENT0+b,Z,0),w(D)&&M(Z)}e.unbindTexture()}else{let b=i.TEXTURE_2D;if(($.isWebGL3DRenderTarget||$.isWebGLArrayRenderTarget)&&(b=$.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(b,ft.__webglTexture),et(b,E),E.mipmaps.length>0)for(let P=0;P<E.mipmaps.length;P++)Dt(lt.__webglFramebuffer[P],$,E,i.COLOR_ATTACHMENT0,b,P);else Dt(lt.__webglFramebuffer,$,E,i.COLOR_ATTACHMENT0,b,0);w(E)?M(b):E.mipmaps.length>0&&i.texParameteri(b,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}$.depthBuffer&&Rt($)}function nt($){let E=$.textures;for(let lt=0,ft=E.length;lt<ft;lt++){let R=E[lt];if(w(R)&&R.mipmapsAutoUpdate===!0){let G=S($),K=n.get(R).__webglTexture;e.bindTexture(G,K),M(G),e.unbindTexture()}}}let $t=[];function Et($){if($.samples>0){if(vt($)===!1){let E=$.textures,lt=$.width,ft=$.height,R=i.COLOR_BUFFER_BIT,G=$.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get($),b=E.length>1;if(b)for(let D=0;D<E.length;D++)e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),$.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let D=0;D<E.length;D++){if($.resolveDepthBuffer&&($.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),$.stencilBuffer&&$.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),b){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[D]);let C=n.get(E[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,lt,ft,0,0,lt,ft,R,i.NEAREST),o===!0&&($t.length=0,$t.push(i.COLOR_ATTACHMENT0+D),$.depthBuffer&&$.storeMultisampledDepthBuffer===!1&&$t.push(G),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),b)for(let D=0;D<E.length;D++){e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,K.__webglColorRenderbuffer[D]);let C=n.get(E[D]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if($.depthBuffer&&$.storeMultisampledDepthBuffer===!1&&o){let E=$.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Bt($){return Math.min(s.maxSamples,$.samples)}function vt($){let E=n.get($);return $.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt($){let E=a.render.frame;u.get($)!==E&&(u.set($,E),$.update())}function kt($,E){let lt=$.colorSpace,ft=$.format,R=$.type;return $.isCompressedTexture===!0||$.isVideoTexture===!0||lt!==ys&&lt!==On&&(_e.getTransfer(lt)===Se?(ft!==Ye||R!==an)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",lt)),E}function Nt($){return typeof HTMLImageElement<"u"&&$ instanceof HTMLImageElement?(h.width=$.naturalWidth||$.width,h.height=$.naturalHeight||$.height):typeof VideoFrame<"u"&&$ instanceof VideoFrame?(h.width=$.displayWidth,h.height=$.displayHeight):(h.width=$.width,h.height=$.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=H,this.setTexture2D=st,this.setTexture2DArray=ot,this.setTexture3D=ut,this.setTextureCube=dt,this.rebindTextures=Ct,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=vt,this.dispose=X}function yx(i,t){function e(n,s=On){let r,a=_e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Ye)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===fi)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Kr||n===Qr||n===ta||n===ea)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Fo||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===na||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Oo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Wo||n===$o||n===qo||n===Xo||n===Yo||n===Zo||n===jo||n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===ia||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:_x,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,h=null,u=null,c=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new ah,m={},x=e.getContextAttributes(),w=null,M=null,S=[],A=[],y=new ie,T=null,F=null,_=new We;_.viewport=new ge;let B=new We;B.viewport=new ge;let J=[_,B],at=new Mo,L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let st=S[z];return st===void 0&&(st=new tr,S[z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(z){let st=S[z];return st===void 0&&(st=new tr,S[z]=st),st.getGripSpace()},this.getHand=function(z){let st=S[z];return st===void 0&&(st=new tr,S[z]=st),st.getHandSpace()};function O(z){let st=A.indexOf(z.inputSource);if(st===-1)return;let ot=S[st];ot!==void 0&&(ot.update(z.inputSource,z.frame,h||a),ot.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",j);for(let z=0;z<S.length;z++){let st=A[z];st!==null&&(A[z]=null,S[z].disconnect(st))}L=null,X=null,g.reset();for(let z in m)delete m[z];if(t.setRenderTarget(w),d=null,f=null,c=null,s=null,M=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),F!==null){let z=F.camera;z.fov=F.fov,z.zoom=F.zoom,z.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ut=null,dt=null;x.depth&&(dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?Di:Ii,ut=x.stencil?Es:ni);let St={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Oe(f.textureWidth,f.textureHeight,{format:Ye,type:an,depthTexture:new ei(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Ye,type:an,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(z){for(let st=0;st<z.removed.length;st++){let ot=z.removed[st],ut=A.indexOf(ot);ut>=0&&(A[ut]=null,S[ut].disconnect(ot))}for(let st=0;st<z.added.length;st++){let ot=z.added[st],ut=A.indexOf(ot);if(ut===-1){for(let St=0;St<S.length;St++)if(St>=A.length){A.push(ot),ut=St;break}else if(A[St]===null){A[St]=ot,ut=St;break}if(ut===-1)break}let dt=S[ut];dt&&dt.connect(ot)}}function Y(z,st){st===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(st.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let st=z.near,ot=z.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),at.near=B.near=_.near=st,at.far=B.far=_.far=ot,(L!==at.near||X!==at.far)&&(s.updateRenderState({depthNear:at.near,depthFar:at.far}),L=at.near,X=at.far),at.layers.mask=z.layers.mask|6,_.layers.mask=at.layers.mask&-5,B.layers.mask=at.layers.mask&-3;let ut=z.parent,dt=at.cameras;Y(at,ut);for(let St=0;St<dt.length;St++)Y(dt[St],ut);at.projectionMatrix.copy(_.projectionMatrix),at.projectionMatrixInverse.copy(_.projectionMatrixInverse),F===null&&z.isPerspectiveCamera&&(F={camera:z,fov:z.fov,zoom:z.zoom}),V(z,at,ut)};function V(z,st,ot){ot===null?z.matrix.copy(st.matrixWorld):(z.matrix.copy(ot.matrixWorld),z.matrix.invert(),z.matrix.multiply(st.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(st.projectionMatrix),z.projectionMatrixInverse.copy(st.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=eo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(z){o=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(at)},this.getCameraTexture=function(z){return m[z]};let U=null;function H(z,st){if(u=st.getViewerPose(h||a),p=st,u!==null){let ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ut=!1;ot.length!==at.cameras.length&&(at.cameras.length=0,ut=!0);for(let rt=0;rt<ot.length;rt++){let et=ot[rt],gt=null;if(d!==null)gt=d.getViewport(et);else{let Mt=c.getViewSubImage(f,et);gt=Mt.viewport,rt===0&&(t.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(M))}let ct=J[rt];ct===void 0&&(ct=new We,ct.layers.enable(rt),ct.viewport=new ge,J[rt]=ct),ct.matrix.fromArray(et.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(et.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(gt.x,gt.y,gt.width,gt.height),rt===0&&(at.matrix.copy(ct.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),ut===!0&&at.cameras.push(ct)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){c=n.getBinding();let rt=c.getDepthInformation(ot[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,s.renderState)}if(dt&&dt.includes("camera-access")&&v){t.state.unbindTexture(),c=n.getBinding();for(let rt=0;rt<ot.length;rt++){let et=ot[rt].camera;if(et){let gt=m[et];gt||(gt=new Br,m[et]=gt);let ct=c.getCameraImage(et);gt.sourceTexture=ct}}}}for(let ot=0;ot<S.length;ot++){let ut=A[ot],dt=S[ot];ut!==null&&dt!==void 0&&dt.update(ut,st,h||a)}U&&U(z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),p=null}let W=new ld;W.setAnimationLoop(H),this.setAnimationLoop=function(z){U=z},this.dispose=function(){}}},wx=new xe,xd=new de;xd.set(-1,0,0,0,1,0,0,0,1);function Mx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Yc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,w,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,x,w):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),w=x.envMap,M=x.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,x,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sx(i,t,e,n){let s={},r={};function a(x,w){let M=w.program;n.uniformBlockBinding(x,M,s[x.id])}function l(x,w){let M=s[x.id];M===void 0&&(p(x),M=o(x),s[x.id]=M,x.addEventListener("dispose",g));let S=w.program;n.updateUBOMapping(x,S);let A=t.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function o(x){let w=i.createBuffer(),M=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,S),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function h(x){let w=s[x.id],M=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,y=M.length;A<y;A++){let T=M[A];if(Array.isArray(T))for(let F=0,_=T.length;F<_;F++)u(T[F],A,F,S);else u(T,A,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,w,M,S){if(f(x,w,M,S)===!0){let A=x.__offset,y=x.value;if(Array.isArray(y)){let T=0;for(let F=0;F<y.length;F++){let _=y[F],B=v(_,!0);c(_,x.__data,T),T+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else c(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,x.__data)}}function c(x,w,M){typeof x=="number"||typeof x=="boolean"?w[M]=x:x.isMatrix3?(w[M]=x.elements[0],w[M+1]=x.elements[1],w[M+2]=x.elements[2],w[M+3]=0,w[M+4]=x.elements[3],w[M+5]=x.elements[4],w[M+6]=x.elements[5],w[M+7]=0,w[M+8]=x.elements[6],w[M+9]=x.elements[7],w[M+10]=x.elements[8],w[M+11]=0):ArrayBuffer.isView(x)?w.set(x.subarray(0,w.length-M),M):x.toArray(w,M)}function f(x,w,M,S){let A=x.value,y=w+"_"+M;if(Array.isArray(A)){S[y]===void 0&&(S[y]=[]);let T=S[y],F=!1;for(let _=0;_<A.length;_++)d(A[_],T,_)===!0&&(F=!0);return F}return d(A,S,y)}function d(x,w,M){if(w[M]===void 0)return typeof x=="number"||typeof x=="boolean"?w[M]=x:ArrayBuffer.isView(x)?w[M]=x.slice():w[M]=x.clone(),!0;{let S=w[M];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return w[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function p(x){let w=x.uniforms,M=0,S=16;for(let y=0,T=w.length;y<T;y++){let F=Array.isArray(w[y])?w[y]:[w[y]];for(let _=0,B=F.length;_<B;_++){let J=F[_],at=Array.isArray(J.value)?J.value:[J.value],L=Array.isArray(w[y])||Array.isArray(J.value),X=M;for(let N=0,j=at.length;N<j;N++){let Y=at[N],V=v(Y,L),U=M%S,H=U%V.boundary,W=U+H;M+=H,W!==0&&S-W<V.storage&&(M+=S-W),N===0&&(X=M),M+=V.storage}let O=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new O((M-X)/Float32Array.BYTES_PER_ELEMENT),J.__offset=X}}let A=M%S;return A>0&&(M+=S-A),x.__size=M,x.__cache={},this}function v(x,w){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(x){let w=x.target;w.removeEventListener("dispose",g),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:l,dispose:m}}var Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function Ex(){return pi===null&&(pi=new Sn(Tx,16,16,ns,je),pi.name="DFG_LUT",pi.minFilter=Ae,pi.magFilter=Ae,pi.wrapS=_n,pi.wrapT=_n,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var dl=class{constructor(t={}){let{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Lo,Io,Po]),m=new Set([an,ni,lr,Es,Ro,Co]),x=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},S=null,A=null,y=[],T=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,B=!1,J=null,at=null,L=null,X=null;this._outputColorSpace=Ie;let O=0,N=0,j=null,Y=-1,V=null,U=new ge,H=new ge,W=null,z=new se(0),st=0,ot=e.width,ut=e.height,dt=1,St=null,k=null,rt=new ge(0,0,ot,ut),et=new ge(0,0,ot,ut),gt=!1,ct=new ui,Mt=new ro,Tt=!1,Ft=!1,Dt=new xe,ee=new ht,Vt=new ge,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ut(){return j===null?dt:1}let nt=n;function $t(I,it){return e.getContext(I,it)}let Et,Bt,vt,Lt,kt,Nt,$,E,lt,ft,R,G,K,b,P,D,C,Z,tt,yt,wt,Pt,zt;try{let I={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),nt===null){let it="webgl2";if(nt=$t(it,I),nt===null)throw $t(it)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(I){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ce("WebGLRenderer: "+I.message),I}function Ht(){Et=new kg(nt),Et.init(),wt=new yx(nt,Et),Bt=new Eg(nt,Et,t,wt),vt=new vx(nt,Et),Bt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),at=nt.createFramebuffer(),L=nt.createFramebuffer(),X=nt.createFramebuffer(),Lt=new zg(nt),kt=new ix,Nt=new xx(nt,Et,vt,kt,Bt,wt,Lt),$=new Ug(_),E=new Gp(nt),Pt=new Sg(nt,E),lt=new Og(nt,E,Lt,Pt),ft=new Gg(nt,lt,E,Pt,Lt),Z=new Hg(nt,Bt,Nt),P=new Ag(kt),R=new nx(_,$,Et,Bt,Pt,P),G=new Mx(_,kt),K=new rx,b=new ux(Et),C=new Mg(_,$,vt,ft,p,o),D=new gx(_,ft,Bt),zt=new Sx(nt,Lt,Bt,vt),tt=new Tg(nt,Et,Lt),yt=new Bg(nt,Et,Lt),Lt.programs=R.programs,_.capabilities=Bt,_.extensions=Et,_.properties=kt,_.renderLists=K,_.shadowMap=D,_.state=vt,_.info=Lt}v!==an&&(F=new Wg(v,e.width,e.height,l,s,r));let At=new oh(_,nt);this.xr=At,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){let I=Et.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Et.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(I){I!==void 0&&(dt=I,this.setSize(ot,ut,!1))},this.getSize=function(I){return I.set(ot,ut)},this.setSize=function(I,it,_t=!0){if(At.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=I,ut=it,e.width=Math.floor(I*dt),e.height=Math.floor(it*dt),_t===!0&&(e.style.width=I+"px",e.style.height=it+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,I,it)},this.getDrawingBufferSize=function(I){return I.set(ot*dt,ut*dt).floor()},this.setDrawingBufferSize=function(I,it,_t){ot=I,ut=it,dt=_t,e.width=Math.floor(I*_t),e.height=Math.floor(it*_t),this.setViewport(0,0,I,it)},this.setEffects=function(I){if(v===an){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let it=0;it<I.length;it++)if(I[it].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(rt)},this.setViewport=function(I,it,_t,pt){I.isVector4?rt.set(I.x,I.y,I.z,I.w):rt.set(I,it,_t,pt),vt.viewport(U.copy(rt).multiplyScalar(Ut()).round())},this.getScissor=function(I){return I.copy(et)},this.setScissor=function(I,it,_t,pt){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,it,_t,pt),vt.scissor(H.copy(et).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(I){vt.setScissorTest(gt=I)},this.setOpaqueSort=function(I){St=I},this.setTransparentSort=function(I){k=I},this.getClearColor=function(I){return I.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(I=!0,it=!0,_t=!0){let pt=0;if(I){let xt=!1;if(j!==null){let Gt=j.texture.format;xt=g.has(Gt)}if(xt){let Gt=j.texture.type,jt=m.has(Gt),Ot=C.getClearColor(),Yt=C.getClearAlpha(),Qt=Ot.r,he=Ot.g,ve=Ot.b;jt?(x[0]=Qt,x[1]=he,x[2]=ve,x[3]=Yt,nt.clearBufferuiv(nt.COLOR,0,x)):(w[0]=Qt,w[1]=he,w[2]=ve,w[3]=Yt,nt.clearBufferiv(nt.COLOR,0,w))}else pt|=nt.COLOR_BUFFER_BIT}it&&(pt|=nt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_t&&(pt|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&nt.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),J=I},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),C.dispose(),K.dispose(),b.dispose(),Nt.dispose(),kt.dispose(),$.dispose(),ft.dispose(),lt.dispose(),Pt.dispose(),zt.dispose(),R.dispose(),At.dispose(),At.removeEventListener("sessionstart",ke),At.removeEventListener("sessionend",us),Ee.stop()};function It(I){I.preventDefault(),qc("WebGLRenderer: Context Lost."),B=!0}function qt(){qc("WebGLRenderer: Context Restored."),B=!1;let I=Lt.autoReset,it=D.enabled,_t=D.autoUpdate,pt=D.needsUpdate,xt=D.type;Ht(),Lt.autoReset=I,D.enabled=it,D.autoUpdate=_t,D.needsUpdate=pt,D.type=xt}function bt(I){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ae(I){let it=I.target;it.removeEventListener("dispose",ae),le(it)}function le(I){De(I),kt.remove(I)}function De(I){let it=kt.get(I).programs;it!==void 0&&(it.forEach(function(_t){R.releaseProgram(_t)}),I.isShaderMaterial&&R.releaseShaderCache(I))}this.renderBufferDirect=function(I,it,_t,pt,xt,Gt){it===null&&(it=Rt);let jt=xt.isMesh&&xt.matrixWorld.determinantAffine()<0,Ot=Xl(I,it,_t,pt,xt);vt.setMaterial(pt,jt);let Yt=_t.index,Qt=1;if(pt.wireframe===!0){if(Yt=lt.getWireframeAttribute(_t),Yt===void 0)return;Qt=2}let he=_t.drawRange,ve=_t.attributes.position,Jt=he.start*Qt,ye=(he.start+he.count)*Qt;Gt!==null&&(Jt=Math.max(Jt,Gt.start*Qt),ye=Math.min(ye,(Gt.start+Gt.count)*Qt)),Yt!==null?(Jt=Math.max(Jt,0),ye=Math.min(ye,Yt.count)):ve!=null&&(Jt=Math.max(Jt,0),ye=Math.min(ye,ve.count));let Ge=ye-Jt;if(Ge<0||Ge===1/0)return;Pt.setup(xt,pt,Ot,_t,Yt);let Pe,Ce=tt;if(Yt!==null&&(Pe=E.get(Yt),Ce=yt,Ce.setIndex(Pe)),xt.isMesh)pt.wireframe===!0?(vt.setLineWidth(pt.wireframeLinewidth*Ut()),Ce.setMode(nt.LINES)):Ce.setMode(nt.TRIANGLES);else if(xt.isLine){let dn=pt.linewidth;dn===void 0&&(dn=1),vt.setLineWidth(dn*Ut()),xt.isLineSegments?Ce.setMode(nt.LINES):xt.isLineLoop?Ce.setMode(nt.LINE_LOOP):Ce.setMode(nt.LINE_STRIP)}else xt.isPoints?Ce.setMode(nt.POINTS):xt.isSprite&&Ce.setMode(nt.TRIANGLES);if(xt.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Ce.renderMultiDraw(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount);else{let dn=xt._multiDrawStarts,te=xt._multiDrawCounts,yn=xt._multiDrawCount,Me=Yt?E.get(Yt).bytesPerElement:1,fs=kt.get(pt).currentProgram.getUniforms();for(let fn=0;fn<yn;fn++)fs.setValue(nt,"_gl_DrawID",fn),Ce.render(dn[fn]/Me,te[fn])}else if(xt.isInstancedMesh)Ce.renderInstances(Jt,Ge,xt.count);else if(_t.isInstancedBufferGeometry){let dn=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,te=Math.min(_t.instanceCount,dn);Ce.renderInstances(Jt,Ge,te)}else Ce.render(Jt,Ge)};function Rn(I,it,_t,pt){J!==null&&I.isNodeMaterial&&J.setObject(pt,I),Tt===!0&&P.setState(I,_t,!1),I.transparent===!0&&I.side===sn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,In(I,it,pt),I.side=es,I.needsUpdate=!0,In(I,it,pt),I.side=sn):In(I,it,pt)}this.compile=function(I,it,_t=null){_t===null&&(_t=I),J!==null&&J.renderStart(I,it,_t),A=b.get(_t),A.init(it),T.push(A),_t.traverseVisible(function(xt){xt.isLight&&xt.layers.test(it.layers)&&(A.pushLight(xt),xt.castShadow&&A.pushShadow(xt))}),I!==_t&&I.traverseVisible(function(xt){xt.isLight&&xt.layers.test(it.layers)&&(A.pushLight(xt),xt.castShadow&&A.pushShadow(xt))}),A.setupLights(),J!==null&&J.updateLights(A.state.lightsArray),Ft=this.localClippingEnabled,Tt=P.init(this.clippingPlanes,Ft),Tt===!0&&P.setGlobalState(this.clippingPlanes,it),J!==null&&D.render(A.state.shadowsArray,_t,it);let pt=new Set;return I.traverse(function(xt){if(!(xt.isMesh||xt.isPoints||xt.isLine||xt.isSprite))return;let Gt=xt.material;if(Gt)if(Array.isArray(Gt))for(let jt=0;jt<Gt.length;jt++){let Ot=Gt[jt];Rn(Ot,_t,it,xt),pt.add(Ot)}else Rn(Gt,_t,it,xt),pt.add(Gt)}),A=T.pop(),J!==null&&J.renderEnd(),pt},this.compileAsync=function(I,it,_t=null){let pt=this.compile(I,it,_t);return new Promise(xt=>{function Gt(){if(pt.forEach(function(jt){let Yt=kt.get(jt).currentProgram;(Yt===void 0||Yt.isReady())&&pt.delete(jt)}),pt.size===0){xt(I);return}setTimeout(Gt,10)}Et.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Cn=null;function Mn(I){Cn&&Cn(I)}function ke(){Ee.stop()}function us(){Ee.start()}let Ee=new ld;Ee.setAnimationLoop(Mn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(I){Cn=I,At.setAnimationLoop(I),I===null?Ee.stop():Ee.start()},At.addEventListener("sessionstart",ke),At.addEventListener("sessionend",us),this.render=function(I,it){if(it!==void 0&&it.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;J!==null&&J.renderStart(I,it);let _t=At.enabled===!0&&At.isPresenting===!0,pt=F!==null&&(j===null||_t)&&F.begin(_,j);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(it),it=At.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,it,j),A=b.get(I,T.length),A.init(it),A.state.textureUnits=Nt.getTextureUnits(),T.push(A),Dt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),it.isArrayCamera?Mt.setFromArrayCamera(it):ct.setFromProjectionMatrix(Dt,Gn,it.reversedDepth),Ft=this.localClippingEnabled,Tt=P.init(this.clippingPlanes,Ft),S=K.get(I,y.length),S.init(),y.push(S),this.info.render.frame++,At.enabled===!0&&At.isPresenting===!0){let jt=_.xr.getDepthSensingMesh();jt!==null&&He(jt,it,-1/0,_.sortObjects)}He(I,it,0,_.sortObjects),S.finish(),J!==null&&J.updateLights(A.state.lightsArray),_.sortObjects===!0&&S.sort(St,k),Ct=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ct&&C.addToRenderList(S,I),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&P.beginShadows();let xt=A.state.shadowsArray;if(D.render(xt,I,it),Tt===!0&&P.endShadows(),(pt&&F.hasRenderPass())===!1){let jt=S.opaque,Ot=S.transmissive;if(A.setupLights(),it.isArrayCamera){let Yt=it.cameras;if(Ot.length>0)for(let Qt=0,he=Yt.length;Qt<he;Qt++){let ve=Yt[Qt];Pn(jt,Ot,I,ve)}Ct&&C.render(I);for(let Qt=0,he=Yt.length;Qt<he;Qt++){let ve=Yt[Qt];Zn(S,I,ve,ve.viewport)}}else Ot.length>0&&Pn(jt,Ot,I,it),Ct&&C.render(I),Zn(S,I,it)}j!==null&&N===0&&(Nt.updateMultisampleRenderTarget(j),Nt.updateRenderTargetMipmap(j)),pt&&F.end(_),I.isScene===!0&&I.onAfterRender(_,I,it),Pt.resetDefaultState(),Y=-1,V=null,T.pop(),T.length>0?(A=T[T.length-1],Nt.setTextureUnits(A.state.textureUnits),Tt===!0&&P.setGlobalState(_.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,J!==null&&J.renderEnd()};function He(I,it,_t,pt){if(I.visible===!1)return;if(I.layers.test(it.layers)){if(I.isGroup)_t=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(it);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){let jt=it.isArrayCamera?Mt:ct;if(!I.frustumCulled||I.intersectsFrustum(jt)){pt&&Vt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Dt);let Ot=ft.update(I),Yt=I.material;Yt.visible&&S.push(I,Ot,Yt,_t,Vt.z,null,it)}}else if(I.isMesh||I.isLine||I.isPoints){let jt=it.isArrayCamera?Mt:ct;if(!I.frustumCulled||I.intersectsFrustum(jt)){let Ot=ft.update(I),Yt=I.material;if(pt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Vt.copy(I.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Vt.copy(Ot.boundingSphere.center)),Vt.applyMatrix4(I.matrixWorld).applyMatrix4(Dt)),Array.isArray(Yt)){let Qt=Ot.groups;for(let he=0,ve=Qt.length;he<ve;he++){let Jt=Qt[he],ye=Yt[Jt.materialIndex];ye&&ye.visible&&S.push(I,Ot,ye,_t,Vt.z,Jt,it)}}else Yt.visible&&S.push(I,Ot,Yt,_t,Vt.z,null,it)}}}let Gt=I.children;for(let jt=0,Ot=Gt.length;jt<Ot;jt++)He(Gt[jt],it,_t,pt)}function Zn(I,it,_t,pt){let{opaque:xt,transmissive:Gt,transparent:jt}=I;A.setupLightsView(_t),Tt===!0&&P.setGlobalState(_.clippingPlanes,_t),pt&&vt.viewport(U.copy(pt)),xt.length>0&&Oi(xt,it,_t),Gt.length>0&&Oi(Gt,it,_t),jt.length>0&&Oi(jt,it,_t),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Pn(I,it,_t,pt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[pt.id]===void 0){let Jt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[pt.id]=new Oe(1,1,{generateMipmaps:!0,type:Jt?je:an,minFilter:rn,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Gt=A.state.transmissionRenderTarget[pt.id],jt=pt.viewport||U;Gt.setSize(jt.z*_.transmissionResolutionScale,jt.w*_.transmissionResolutionScale);let Ot=_.getRenderTarget(),Yt=_.getActiveCubeFace(),Qt=_.getActiveMipmapLevel();_.setRenderTarget(Gt),_.getClearColor(z),st=_.getClearAlpha(),st<1&&_.setClearColor(16777215,.5),_.clear(),Ct&&C.render(_t);let he=_.toneMapping;_.toneMapping=di;let ve=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),A.setupLightsView(pt),Tt===!0&&P.setGlobalState(_.clippingPlanes,pt),Oi(I,_t,pt),Nt.updateMultisampleRenderTarget(Gt),Nt.updateRenderTargetMipmap(Gt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ye=0,Ge=it.length;ye<Ge;ye++){let Pe=it[ye],{object:Ce,geometry:dn,material:te,group:yn}=Pe;if(te.side===sn&&Ce.layers.test(pt.layers)){let Me=te.side;te.side=nn,te.needsUpdate=!0,yr(Ce,_t,pt,dn,te,yn),te.side=Me,te.needsUpdate=!0,Jt=!0}}Jt===!0&&(Nt.updateMultisampleRenderTarget(Gt),Nt.updateRenderTargetMipmap(Gt))}_.setRenderTarget(Ot,Yt,Qt),_.setClearColor(z,st),ve!==void 0&&(pt.viewport=ve),_.toneMapping=he}function Oi(I,it,_t){let pt=it.isScene===!0?it.overrideMaterial:null;for(let xt=0,Gt=I.length;xt<Gt;xt++){let jt=I[xt],{object:Ot,geometry:Yt,group:Qt}=jt,he=jt.material;he.allowOverride===!0&&pt!==null&&(he=pt),Ot.layers.test(_t.layers)&&yr(Ot,it,_t,Yt,he,Qt)}}function yr(I,it,_t,pt,xt,Gt){J!==null&&xt.isNodeMaterial&&J.setObject(I,xt),I.onBeforeRender(_,it,_t,pt,xt,Gt),I.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),xt.onBeforeRender(_,it,_t,pt,I,Gt),xt.transparent===!0&&xt.side===sn&&xt.forceSinglePass===!1?(xt.side=nn,xt.needsUpdate=!0,_.renderBufferDirect(_t,it,pt,xt,I,Gt),xt.side=es,xt.needsUpdate=!0,_.renderBufferDirect(_t,it,pt,xt,I,Gt),xt.side=sn):_.renderBufferDirect(_t,it,pt,xt,I,Gt),I.onAfterRender(_,it,_t,pt,xt,Gt)}function _r(I){let it=0;for(let _t of I)_t.texture!==null&&it++;return it}function In(I,it,_t){it.isScene!==!0&&(it=Rt);let pt=kt.get(I),xt=A.state.lights,Gt=A.state.shadowsArray,jt=xt.state.version,Ot=R.getParameters(I,xt.state,Gt,it,_t,A.state.lightProbeGridArray),Yt=R.getProgramCacheKey(Ot),Qt=pt.programs;pt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?it.environment:null,pt.fog=it.fog;let he=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;pt.envMap=$.get(I.envMap||pt.environment,he),pt.envMapRotation=pt.environment!==null&&I.envMap===null?it.environmentRotation:I.envMapRotation,Qt===void 0&&(I.addEventListener("dispose",ae),Qt=new Map,pt.programs=Qt,pt.programVariants=new Map);let ve=Qt.get(Yt);if(ve!==void 0){if(pt.currentProgram===ve&&pt.lightsStateVersion===jt)return zi(I,Ot),ve}else Ot.uniforms=R.getUniforms(I),J!==null&&I.isNodeMaterial&&J.build(I,_t,Ot),I.onBeforeCompile(Ot,_),ve=R.acquireProgram(Ot,Yt),Qt.set(Yt,ve),pt.uniforms=Ot.uniforms;let Jt=pt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Jt.clippingPlanes=P.uniform),zi(I,Ot),pt.needsLights=Xt(I),pt.lightsStateVersion=jt,pt.needsLights&&(Jt.ambientLightColor.value=xt.state.ambient,Jt.lightProbe.value=xt.state.probe,Jt.sunLights.value=xt.state.sun,Jt.sunLightShadows.value=xt.state.sunShadow,Jt.directionalLights.value=xt.state.directional,Jt.directionalLightShadows.value=xt.state.directionalShadow,Jt.spotLights.value=xt.state.spot,Jt.spotLightShadows.value=xt.state.spotShadow,Jt.rectAreaLights.value=xt.state.rectArea,Jt.ltc_1.value=xt.state.rectAreaLTC1,Jt.ltc_2.value=xt.state.rectAreaLTC2,Jt.pointLights.value=xt.state.point,Jt.pointLightShadows.value=xt.state.pointShadow,Jt.hemisphereLights.value=xt.state.hemi,Jt.sunShadowMatrix.value=xt.state.sunShadowMatrix,Jt.sunShadowCascade.value=xt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=xt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=xt.state.spotLightMatrix,Jt.spotLightMap.value=xt.state.spotLightMap,Jt.pointShadowMatrix.value=xt.state.pointShadowMatrix),pt.numLightProbeGrids=_r(A.state.lightProbeGridArray),pt.currentProgram=ve,pt.uniformsList=null,ve}function Bi(I,it,_t,pt,xt){let Gt=kt.get(I),jt=Gt.currentProgram.id+","+pt+","+xt,Ot=Gt.programVariants.get(jt);return Ot===void 0?(Ot=In(I,it,_t),Gt.programVariants.set(jt,Ot)):(Gt.currentProgram=Ot,Gt.uniformsList=null,Gt.outputColorSpace=pt,Gt.toneMapping=xt),Ot}function ds(I){if(I.uniformsList===null){let it=I.currentProgram.getUniforms();I.uniformsList=cr.seqWithValue(it.seq,I.uniforms)}return I.uniformsList}function zi(I,it){let _t=kt.get(I);_t.outputColorSpace=it.outputColorSpace,_t.batching=it.batching,_t.batchingColor=it.batchingColor,_t.instancing=it.instancing,_t.instancingColor=it.instancingColor,_t.instancingMorph=it.instancingMorph,_t.skinning=it.skinning,_t.morphTargets=it.morphTargets,_t.morphNormals=it.morphNormals,_t.morphColors=it.morphColors,_t.morphTargetsCount=it.morphTargetsCount,_t.numClippingPlanes=it.numClippingPlanes,_t.numIntersection=it.numClipIntersection,_t.vertexAlphas=it.vertexAlphas,_t.vertexTangents=it.vertexTangents,_t.toneMapping=it.toneMapping}function Xl(I,it,_t,pt,xt){it.isScene!==!0&&(it=Rt),Nt.resetTextureUnits();let Gt=it.fog,jt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?it.environment:null,Ot=j===null?_.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_e.workingColorSpace,Yt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,Qt=$.get(pt.envMap||jt,Yt),he=pt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ve=!!_t.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Jt=!!_t.morphAttributes.position,ye=!!_t.morphAttributes.normal,Ge=!!_t.morphAttributes.color,Pe=di;pt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let Ce=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,te=kt.get(pt),yn=A.state.lights;if(Tt===!0&&(Ft===!0||I!==V)){let Fe=I===V&&pt.id===Y;P.setState(pt,I,Fe)}let Me=!1,fs=!1;pt.version===te.__version?te.needsLights&&te.lightsStateVersion!==yn.state.version||xt.isBatchedMesh&&te.batching===!1||!xt.isBatchedMesh&&te.batching===!0||xt.isBatchedMesh&&te.batchingColor===!0&&xt._colorsTexture===null||xt.isBatchedMesh&&te.batchingColor===!1&&xt._colorsTexture!==null||xt.isInstancedMesh&&te.instancing===!1||!xt.isInstancedMesh&&te.instancing===!0||xt.isSkinnedMesh&&te.skinning===!1||!xt.isSkinnedMesh&&te.skinning===!0||xt.isInstancedMesh&&te.instancingColor===!0&&xt.instanceColor===null||xt.isInstancedMesh&&te.instancingColor===!1&&xt.instanceColor!==null||xt.isInstancedMesh&&te.instancingMorph===!0&&xt.morphTexture===null||xt.isInstancedMesh&&te.instancingMorph===!1&&xt.morphTexture!==null||te.envMap!==Qt||pt.fog===!0&&te.fog!==Gt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==P.numPlanes||te.numIntersection!==P.numIntersection)||te.vertexAlphas!==he||te.vertexTangents!==ve||te.morphTargets!==Jt||te.morphNormals!==ye||te.morphColors!==Ge||te.morphTargetsCount!==dn||te.numLightProbeGrids!==_r(A.state.lightProbeGridArray)?Me=!0:(te.outputColorSpace!==Ot||te.toneMapping!==Pe)&&(fs=!0):(Me=!0,te.__version=pt.version);let fn=te.currentProgram;(Me===!0||fs===!0)&&(fn=fs===!0?Bi(pt,it,xt,Ot,Pe):In(pt,it,xt),J&&pt.isNodeMaterial&&J.onUpdateProgram(pt,fn,te));let wa=!1,Hi=!1,ps=!1,we=fn.getUniforms(),ln=te.uniforms;if(vt.useProgram(fn.program)&&(wa=!0,Hi=!0,ps=!0),pt.id!==Y&&(Y=pt.id,Hi=!0),wa||V!==I){vt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),we.setValue(nt,"projectionMatrix",I.projectionMatrix),we.setValue(nt,"viewMatrix",I.matrixWorldInverse);let tn=we.map.cameraPosition;tn!==void 0&&tn.setValue(nt,ee.setFromMatrixPosition(I.matrixWorld)),Bt.logarithmicDepthBuffer&&we.setValue(nt,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&we.setValue(nt,"isOrthographic",I.isOrthographicCamera===!0),V!==I&&(V=I,Hi=!0,ps=!0)}if(te.needsLights&&(yn.state.sunShadowMap.length>0&&we.setValue(nt,"sunShadowMap",yn.state.sunShadowMap,Nt),yn.state.directionalShadowMap.length>0&&we.setValue(nt,"directionalShadowMap",yn.state.directionalShadowMap,Nt),yn.state.spotShadowMap.length>0&&we.setValue(nt,"spotShadowMap",yn.state.spotShadowMap,Nt),yn.state.pointShadowMap.length>0&&we.setValue(nt,"pointShadowMap",yn.state.pointShadowMap,Nt)),xt.isSkinnedMesh){we.setOptional(nt,xt,"bindMatrix"),we.setOptional(nt,xt,"bindMatrixInverse");let Fe=xt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(nt,"boneTexture",Fe.boneTexture,Nt))}xt.isBatchedMesh&&(we.setOptional(nt,xt,"batchingTexture"),we.setValue(nt,"batchingTexture",xt._matricesTexture,Nt),we.setOptional(nt,xt,"batchingIdTexture"),we.setValue(nt,"batchingIdTexture",xt._indirectTexture,Nt),we.setOptional(nt,xt,"batchingColorTexture"),xt._colorsTexture!==null&&we.setValue(nt,"batchingColorTexture",xt._colorsTexture,Nt));let jn=_t.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Z.update(xt,_t,fn),(Hi||te.receiveShadow!==xt.receiveShadow)&&(te.receiveShadow=xt.receiveShadow,we.setValue(nt,"receiveShadow",xt.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&it.environment!==null&&(ln.envMapIntensity.value=it.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Ex()),Hi){if(we.setValue(nt,"toneMappingExposure",_.toneMappingExposure),te.needsLights&&br(ln,ps),Gt&&pt.fog===!0&&G.refreshFogUniforms(ln,Gt),G.refreshMaterialUniforms(ln,pt,dt,ut,A.state.transmissionRenderTarget[I.id]),te.needsLights&&te.numLightProbeGrids>0){let Fe=M,tn=0;for(let wi of A.state.lightProbeGridArray)wi.texture!==null&&(Fe.textures[tn]=wi.texture,Fe.min[tn]=wi.boundingBox.min,Fe.max[tn]=wi.boundingBox.max,Fe.resolution[tn]=wi.resolution,tn++);for(let wi in Fe)Fe[wi].length=tn;ln.probesSH.value=Fe.textures,ln.probesMin.value=Fe.min,ln.probesMax.value=Fe.max,ln.probesResolution.value=Fe.resolution}cr.upload(nt,ds(te),ln,Nt)}if(pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(cr.upload(nt,ds(te),ln,Nt),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&we.setValue(nt,"center",xt.center),we.setValue(nt,"modelViewMatrix",xt.modelViewMatrix),we.setValue(nt,"normalMatrix",xt.normalMatrix),we.setValue(nt,"modelMatrix",xt.matrixWorld),pt.uniformsGroups!==void 0){let Fe=pt.uniformsGroups;for(let tn=0,wi=Fe.length;tn<wi;tn++){let Rh=Fe[tn];zt.update(Rh,fn),zt.bind(Rh,fn)}}return fn}function br(I,it){I.ambientLightColor.needsUpdate=it,I.lightProbe.needsUpdate=it,I.sunLights.needsUpdate=it,I.sunLightShadows.needsUpdate=it,I.directionalLights.needsUpdate=it,I.directionalLightShadows.needsUpdate=it,I.pointLights.needsUpdate=it,I.pointLightShadows.needsUpdate=it,I.spotLights.needsUpdate=it,I.spotLightShadows.needsUpdate=it,I.rectAreaLights.needsUpdate=it,I.hemisphereLights.needsUpdate=it}function Xt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(I,it,_t){let pt=kt.get(I);pt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),kt.get(I.texture).__webglTexture=it,kt.get(I.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:_t,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,it){let _t=kt.get(I);_t.__webglFramebuffer=it,_t.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(I,it=0,_t=0){j=I,O=it,N=_t;let pt=null,xt=!1,Gt=!1;if(I){let Ot=kt.get(I);if(Ot.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(nt.FRAMEBUFFER,Ot.__webglFramebuffer),U.copy(I.viewport),H.copy(I.scissor),W=I.scissorTest,vt.viewport(U),vt.scissor(H),vt.setScissorTest(W),Y=-1;return}else if(Ot.__webglFramebuffer===void 0)Nt.setupRenderTarget(I);else if(Ot.__hasExternalTextures)Nt.rebindTextures(I,kt.get(I.texture).__webglTexture,kt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let he=I.depthTexture;if(Ot.__boundDepthTexture!==he){if(he!==null&&kt.has(he)&&(I.width!==he.image.width||I.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(I)}}let Yt=I.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Gt=!0);let Qt=kt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qt[it])?pt=Qt[it][_t]:pt=Qt[it],xt=!0):I.samples>0&&Nt.useMultisampledRTT(I)===!1?pt=kt.get(I).__webglMultisampledFramebuffer:Array.isArray(Qt)?pt=Qt[_t]:pt=Qt,U.copy(I.viewport),H.copy(I.scissor),W=I.scissorTest}else U.copy(rt).multiplyScalar(dt).floor(),H.copy(et).multiplyScalar(dt).floor(),W=gt;if(_t!==0&&(pt=at),vt.bindFramebuffer(nt.FRAMEBUFFER,pt)&&vt.drawBuffers(I,pt),vt.viewport(U),vt.scissor(H),vt.setScissorTest(W),xt){let Ot=kt.get(I.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot.__webglTexture,_t)}else if(Gt){let Ot=it;for(let Yt=0;Yt<I.textures.length;Yt++){let Qt=kt.get(I.textures[Yt]);nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,_t,Ot)}}else if(I!==null&&_t!==0){let Ot=kt.get(I.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_2D,Ot.__webglTexture,_t)}Y=-1};function fe(I){let it=kt.get(I);return(it.__readFormat!==I.format||it.__readType!==I.type)&&(it.__readFormat=I.format,it.__readType=I.type,it.__formatReadable=Bt.textureFormatReadable(I.format),it.__typeReadable=Bt.textureTypeReadable(I.type)),it}this.readRenderTargetPixels=function(I,it,_t,pt,xt,Gt,jt,Ot=0){if(!(I&&I.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=kt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt){vt.bindFramebuffer(nt.FRAMEBUFFER,Yt);try{let Qt=I.textures[Ot],he=Qt.format,ve=Qt.type;I.textures.length>1&&nt.readBuffer(nt.COLOR_ATTACHMENT0+Ot);let Jt=fe(Qt);if(Jt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=I.width-pt&&_t>=0&&_t<=I.height-xt&&nt.readPixels(it,_t,pt,xt,wt.convert(he),wt.convert(ve),Gt)}finally{let Qt=j!==null?kt.get(j).__webglFramebuffer:null;vt.bindFramebuffer(nt.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(I,it,_t,pt,xt,Gt,jt,Ot=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=kt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt)if(it>=0&&it<=I.width-pt&&_t>=0&&_t<=I.height-xt){vt.bindFramebuffer(nt.FRAMEBUFFER,Yt);let Qt=I.textures[Ot],he=Qt.format,ve=Qt.type;I.textures.length>1&&nt.readBuffer(nt.COLOR_ATTACHMENT0+Ot);let Jt=fe(Qt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=nt.createBuffer();nt.bindBuffer(nt.PIXEL_PACK_BUFFER,ye),nt.bufferData(nt.PIXEL_PACK_BUFFER,Gt.byteLength,nt.STREAM_READ),nt.readPixels(it,_t,pt,xt,wt.convert(he),wt.convert(ve),0),nt.bindBuffer(nt.PIXEL_PACK_BUFFER,null);let Ge=j!==null?kt.get(j).__webglFramebuffer:null;vt.bindFramebuffer(nt.FRAMEBUFFER,Ge);let Pe=nt.fenceSync(nt.SYNC_GPU_COMMANDS_COMPLETE,0);return nt.flush(),await Nu(nt,Pe,4),nt.bindBuffer(nt.PIXEL_PACK_BUFFER,ye),nt.getBufferSubData(nt.PIXEL_PACK_BUFFER,0,Gt),nt.bindBuffer(nt.PIXEL_PACK_BUFFER,null),nt.deleteBuffer(ye),nt.deleteSync(Pe),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,it=null,_t=0){let pt=Math.pow(2,-_t),xt=Math.floor(I.image.width*pt),Gt=Math.floor(I.image.height*pt),jt=it!==null?it.x:0,Ot=it!==null?it.y:0;Nt.setTexture2D(I,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,_t,0,0,jt,Ot,xt,Gt),vt.unbindTexture()},this.copyTextureToTexture=function(I,it,_t=null,pt=null,xt=0,Gt=0){let jt,Ot,Yt,Qt,he,ve,Jt,ye,Ge,Pe=I.isCompressedTexture?I.mipmaps[Gt]:I.image;if(_t!==null)jt=_t.max.x-_t.min.x,Ot=_t.max.y-_t.min.y,Yt=_t.isBox3?_t.max.z-_t.min.z:1,Qt=_t.min.x,he=_t.min.y,ve=_t.isBox3?_t.min.z:0;else{let we=Math.pow(2,-xt);jt=Math.floor(Pe.width*we),Ot=Math.floor(Pe.height*we),I.isDataArrayTexture?Yt=Pe.depth:I.isData3DTexture?Yt=Math.floor(Pe.depth*we):Yt=1,Qt=0,he=0,ve=0}pt!==null?(Jt=pt.x,ye=pt.y,Ge=pt.z):(Jt=0,ye=0,Ge=0);let Ce=wt.convert(it.format),dn=wt.convert(it.type),te;it.isData3DTexture?(Nt.setTexture3D(it,0),te=nt.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(Nt.setTexture2DArray(it,0),te=nt.TEXTURE_2D_ARRAY):(Nt.setTexture2D(it,0),te=nt.TEXTURE_2D),vt.activeTexture(nt.TEXTURE0),vt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,it.flipY),vt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),vt.pixelStorei(nt.UNPACK_ALIGNMENT,it.unpackAlignment);let yn=vt.getParameter(nt.UNPACK_ROW_LENGTH),Me=vt.getParameter(nt.UNPACK_IMAGE_HEIGHT),fs=vt.getParameter(nt.UNPACK_SKIP_PIXELS),fn=vt.getParameter(nt.UNPACK_SKIP_ROWS),wa=vt.getParameter(nt.UNPACK_SKIP_IMAGES);vt.pixelStorei(nt.UNPACK_ROW_LENGTH,Pe.width),vt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Pe.height),vt.pixelStorei(nt.UNPACK_SKIP_PIXELS,Qt),vt.pixelStorei(nt.UNPACK_SKIP_ROWS,he),vt.pixelStorei(nt.UNPACK_SKIP_IMAGES,ve);let Hi=I.isDataArrayTexture||I.isData3DTexture,ps=it.isDataArrayTexture||it.isData3DTexture;if(I.isDepthTexture){let we=kt.get(I),ln=kt.get(it),jn=kt.get(we.__renderTarget),Fe=kt.get(ln.__renderTarget);vt.bindFramebuffer(nt.READ_FRAMEBUFFER,jn.__webglFramebuffer),vt.bindFramebuffer(nt.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let tn=0;tn<Yt;tn++)Hi&&(nt.framebufferTextureLayer(nt.READ_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,kt.get(I).__webglTexture,xt,ve+tn),nt.framebufferTextureLayer(nt.DRAW_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,kt.get(it).__webglTexture,Gt,Ge+tn)),nt.blitFramebuffer(Qt,he,Qt+jt,he+Ot,Jt,ye,Jt+jt,ye+Ot,nt.DEPTH_BUFFER_BIT,nt.NEAREST);vt.bindFramebuffer(nt.READ_FRAMEBUFFER,null),vt.bindFramebuffer(nt.DRAW_FRAMEBUFFER,null)}else if(xt!==0||I.isRenderTargetTexture||kt.has(I)){let we=kt.get(I),ln=kt.get(it);vt.bindFramebuffer(nt.READ_FRAMEBUFFER,L),vt.bindFramebuffer(nt.DRAW_FRAMEBUFFER,X);for(let jn=0;jn<Yt;jn++)Hi?nt.framebufferTextureLayer(nt.READ_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,we.__webglTexture,xt,ve+jn):nt.framebufferTexture2D(nt.READ_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_2D,we.__webglTexture,xt),ps?nt.framebufferTextureLayer(nt.DRAW_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,ln.__webglTexture,Gt,Ge+jn):nt.framebufferTexture2D(nt.DRAW_FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_2D,ln.__webglTexture,Gt),xt!==0?nt.blitFramebuffer(Qt,he,Qt+jt,he+Ot,Jt,ye,Jt+jt,ye+Ot,nt.COLOR_BUFFER_BIT,nt.NEAREST):ps?nt.copyTexSubImage3D(te,Gt,Jt,ye,Ge+jn,Qt,he,jt,Ot):nt.copyTexSubImage2D(te,Gt,Jt,ye,Qt,he,jt,Ot);vt.bindFramebuffer(nt.READ_FRAMEBUFFER,null),vt.bindFramebuffer(nt.DRAW_FRAMEBUFFER,null)}else ps?I.isDataTexture||I.isData3DTexture?nt.texSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,dn,Pe.data):it.isCompressedArrayTexture?nt.compressedTexSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,Pe.data):nt.texSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,dn,Pe):I.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,Gt,Jt,ye,jt,Ot,Ce,dn,Pe.data):I.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,Gt,Jt,ye,Pe.width,Pe.height,Ce,Pe.data):nt.texSubImage2D(nt.TEXTURE_2D,Gt,Jt,ye,jt,Ot,Ce,dn,Pe);vt.pixelStorei(nt.UNPACK_ROW_LENGTH,yn),vt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Me),vt.pixelStorei(nt.UNPACK_SKIP_PIXELS,fs),vt.pixelStorei(nt.UNPACK_SKIP_ROWS,fn),vt.pixelStorei(nt.UNPACK_SKIP_IMAGES,wa),Gt===0&&it.generateMipmaps===!0&&it.mipmapsAutoUpdate===!0&&nt.generateMipmap(te),vt.unbindTexture()},this.initRenderTarget=function(I){kt.get(I).__webglFramebuffer===void 0&&Nt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Nt.setTextureCube(I,0):I.isData3DTexture?Nt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Nt.setTexture2DArray(I,0):Nt.setTexture2D(I,0),vt.unbindTexture()},this.resetState=function(){O=0,N=0,j=null,vt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ne=63710088e-1,dr=2*Math.PI*ne,mt=Math.PI/180,ss=Math.atan(Math.sinh(Math.PI)),Wt=(i,t,e)=>i<t?t:i>e?e:i,qn=(i,t,e)=>i+(t-i)*e,yd=i=>i*i*(3-2*i),wn=i=>i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI)),rs=(i,t)=>(i+Math.PI)/(2*Math.PI)*2**t,as=(i,t)=>{let e=Wt(i,-ss,ss);return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t},gi=(i,t)=>i/2**t*2*Math.PI-Math.PI,Bn=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**t))),xn=(i,t,e=[0,0,0])=>{let n=Math.cos(t);return e[0]=n*Math.cos(i),e[1]=n*Math.sin(i),e[2]=Math.sin(t),e},ml=i=>{let t=Math.hypot(i[0],i[1],i[2]);return[Math.atan2(i[1],i[0]),Math.asin(Wt(i[2]/t,-1,1))]},ii=(i,t)=>{let e=xn(i,t),n=[-Math.sin(i),Math.cos(i),0],s=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];return{east:n,north:s,up:e}},hn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],ca=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],fr=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Xn=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],En=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],pr=(i,t,e,n)=>{let s=Math.sin((n-t)/2),r=Math.sin((e-i)/2);return 2*Math.asin(Math.min(1,Math.sqrt(s*s+Math.cos(t)*Math.cos(n)*r*r)))},_d=(i,t,e)=>{let n=hn(i,t),s=hn(i,i)-e*e,r=n*n-s;if(r<0)return-1;let a=Math.sqrt(r),l=-n-a;return l>0?l:-n+a>0?-n+a:-1},An=(i,t,e=4)=>`${Math.abs(i).toFixed(e)}\xB0${i>=0?"N":"S"} ${Math.abs(t).toFixed(e)}\xB0${t>=0?"E":"W"}`,bd=i=>i>=1e5?`${Math.round(i/1e3).toLocaleString("en")} km`:i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)} km`:`${Math.round(i)} m`;var Rs=[],Ax=(i,t)=>{for(let e of Rs){let[n,s,r,a]=e.bbox;if(i<=n||i>=r||t<=s||t>=a)continue;let l=Wt((i-n)/(r-n)*e.width-.5,0,e.width-1.001),o=Wt((a-t)/(a-s)*e.height-.5,0,e.height-1.001),h=l|0,u=o|0,c=l-h,f=o-u,d=u*e.width+h,p=e.data,v=(p[d]*(1-c)+p[d+1]*c)*(1-f)+(p[d+e.width]*(1-c)+p[d+e.width+1]*c)*f,g=Math.min((i-n)/(r-n),(r-i)/(r-n),(t-s)/(a-s),(a-t)/(a-s));return[v,yd(Wt(g*12,0,1))]}return null},lh=(i,t,e)=>{if(!Rs.length||i>.5)return i;let n=Ax(t,e);return n&&n[0]<-.5?i+(n[0]-i)*n[1]:i},wd=(i,t)=>{if(!Rs.length)return!1;let e=gi(t.x,t.z)/mt,n=gi(t.x+1,t.z)/mt,s=Bn(t.y,t.z)/mt,r=Bn(t.y+1,t.z)/mt;if(!Rs.some(({bbox:[l,o,h,u]})=>n>l&&e<h&&s>o&&r<u))return!1;let a=!1;for(let l=0,o=0;l<256;l++){let h=Bn(t.y+(l+.5)/256,t.z)/mt;for(let u=0;u<256;u++,o++){let c=i[o];if(c>.5)continue;let f=lh(c,e+(n-e)*(u+.5)/256,h);f!==c&&(i[o]=f,a=!0)}}return a},Md=i=>{if(!Rs.length||i.z>11)return!1;let t=gi(i.x,i.z)/mt,e=gi(i.x+1,i.z)/mt,n=Bn(i.y,i.z)/mt,s=Bn(i.y+1,i.z)/mt;return Rs.some(({bbox:[r,a,l,o]})=>e>r&&t<l&&n>a&&s<o)},gl=new Map,Sd=(i,t="./")=>(gl.has(i.id)||gl.set(i.id,(async()=>{let e=await fetch(globalThis.__PATCHES__?.[i.file]??t+i.file);if(!e.ok)throw new Error(`patch ${i.id}: HTTP ${e.status}`);let n=await createImageBitmap(await e.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:n.width,height:n.height}):new OffscreenCanvas(n.width,n.height)).getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=r.getImageData(0,0,n.width,n.height).data,l=new Float32Array(n.width*n.height);for(let h=0,u=0;h<l.length;h++,u+=4)l[h]=a[u]*256+a[u+1]+a[u+2]/256-32768;let o={...i,width:n.width,height:n.height,data:l};return n.close?.(),Rs.push(o),o})().catch(e=>(gl.delete(i.id),console.warn(e.message),null))),gl.get(i.id));var ch=20037508342789244e-9,hh=0,Rx=1,Yn=2,Td=3,Ed=4,Cx=(i,t,e,n)=>{if(i.url.includes("{bbox}")){let r=2*ch/2**t,a=-ch+e*r,l=ch-n*r;return i.url.replace("{bbox}",`${a},${l-r},${a+r},${l}`).replaceAll("{size}",String(i.size??256))}let s=i.subdomains?i.subdomains[(e+n)%i.subdomains.length]:"";return i.url.replace("{s}",s).replace("{z}",t).replace("{x}",e).replace("{y}",n)},Px=(i,t)=>{if(t.z<(i.minZoom??0)||i.every>1&&(t.z-(i.minZoom??0))%i.every)return!1;let e=i.bbox;return e?t.east>e[0]&&t.west<e[2]&&t.north>e[1]&&t.south<e[3]:!0},uh,vl,Ix=i=>(uh||(uh=typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256),vl=uh.getContext("2d",{willReadFrequently:!0})),vl.globalCompositeOperation="copy",vl.drawImage(i,0,0,256,256),vl.getImageData(0,0,256,256).data),Ad=10,ze=258,Lx=(i,t)=>{let e=i.parent;for(;e&&e.z>Ad;)e=e.parent;for(;e;e=e.parent)if(e.slots[t]?.state===Yn)return e;return null},Dx=i=>{let t=Yi.fromHalfFloat,e=new Float32Array(65536);for(let s=0,r=0;s<256;s++)for(let a=0;a<256;a++,r++)e[r]=i.base+t(i.heights[(s+1)*ze+a+1]);for(let s=0;s<4;s++){let r=Float32Array.from(e),a=0;for(let l=0;l<256;l++)for(let o=0;o<256;o++){let h=l*256+o;if(e[h]<-.5)continue;let u=0,c=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let p=o+d,v=l+f;if(p<0||v<0||p>255||v>255)continue;let g=e[v*256+p];g<-.5&&(u+=g,c++)}c&&(r[h]=u/c,a++)}if(e=r,!a)break}let n=new Float32Array(ze*ze);for(let s=-1;s<=256;s++){let r=s<0?0:s>255?255:s,a=s<0?1:s>255?254:s;for(let l=-1;l<=256;l++){let o=l<0?0:l>255?255:l,h=l<0?1:l>255?254:l;n[(s+1)*ze+l+1]=o===h&&r===a?e[s*256+l]:2*e[r*256+o]-e[a*256+h]}}return n},Nx=(i,t,e)=>{let n=Ix(i),s=256*256,r=new Float32Array(s);for(let v=0,g=0;v<s;v++,g+=4)r[v]=n[g]*256+n[g+1]+n[g+2]/256-32768;let a=0;if(t.z>Ad){let v=Lx(t,e),g=v?.slots[e],m=v?2**(t.z-v.z):1,x=v?(t.x-v.x*m)*256:0,w=v?(t.y-v.y*m)*256:0,M=null;for(let S=0,A=0;S<256;S++)for(let y=0;y<256;y++,A++){let T=r[A];if(T>.001){a++;continue}if(!g){r[A]=T<-11100?0:T;continue}M??=g.seaWide??=Dx(g);let F=(x+y+.5)/m+.5,_=(w+S+.5)/m+.5,B=F|0,J=_|0,at=F-B,L=_-J,X=J*ze+B,O=(M[X]*(1-at)+M[X+1]*at)*(1-L)+(M[X+ze]*(1-at)+M[X+ze+1]*at)*L;r[A]=O<-.5?O:T<-11100?-.5:Math.min(T,-.5)}}else a=1;wd(r,t),Md(t)&&(a=Math.max(a,1));let l=1/0,o=-1/0,h=0;for(let v=0;v<s;v++){let g=r[v];g<l&&(l=g),g>o&&(o=g),h+=g}let u=Math.round(h/s),c=new Uint16Array(ze*ze),f=Yi.toHalfFloat,d=(v,g)=>r[g*256+v];for(let v=-1;v<=256;v++){let g=v<0?0:v>255?255:v,m=v<0?1:v>255?254:v;for(let x=-1;x<=256;x++){let w=x<0?0:x>255?255:x,M=x<0?1:x>255?254:x,S=w===M&&g===m?d(x,v):2*d(w,g)-d(M,m);c[(v+1)*ze+x+1]=f(S-u)}}let p=new Sn(c,ze,ze,fi,je);return p.internalFormat="R16F",p.magFilter=p.minFilter=Ae,p.wrapS=p.wrapT=_n,p.generateMipmaps=!1,p.needsUpdate=!0,{tex:p,heights:c,base:u,min:l,max:o,allSea:a===0}},Fx=(i,t)=>{let e=new cn(i);return e.colorSpace=Ie,e.flipY=!1,e.premultiplyAlpha=!1,e.wrapS=e.wrapT=_n,e.minFilter=rn,e.magFilter=Ae,e.anisotropy=t,e.generateMipmaps=!0,e.needsUpdate=!0,e},xl=class{constructor({maxActive:t=16,anisotropy:e=4}={}){this.maxActive=t,this.anisotropy=e,this.queue=[],this.active=new Set,this.decodeBudget=5,this.pendingDecodes=[],this.loaded=0,this.failed=0,this.onLoad=null}want(t,e,n){let s=t.slots[e.id];return s||(s=t.slots[e.id]={state:Px(e,t)&&t.z<=e.maxZoom?hh:Ed,tex:null,layer:e,tile:t,priority:0,queued:!1,abort:null},e.kind==="elevation"&&t.parent?.allSea&&(s.state=Ed,t.allSea=!0)),s.priority=n,s.state===hh&&!s.queued&&(s.queued=!0,this.queue.push(s)),s}pump(t){let e=performance.now();for(let s=0;s<this.decodeBudget&&this.pendingDecodes.length&&performance.now()-e<5;s++)this.pendingDecodes.shift()();for(let s of this.active)s.tile.visit<t-30&&s.abort&&s.abort.abort();if(!this.queue.length||(this.queue=this.queue.filter(s=>s.tile.visit>=t-5&&!s.tile.dead?!0:(s.queued=!1,!1)),this.active.size>=this.maxActive))return;this.queue.sort((s,r)=>s.priority-r.priority);let n=new Map;for(let s of this.active)n.set(s.layer.id,(n.get(s.layer.id)??0)+1);for(let s=this.queue.length-1;s>=0&&this.active.size<this.maxActive;s--){let r=this.queue[s],a=n.get(r.layer.id)??0;a>=(r.layer.maxActive??this.maxActive)||(n.set(r.layer.id,a+1),this.queue.splice(s,1),this.start(r))}}start(t){t.queued=!1,t.state=Rx,t.abort=new AbortController,this.active.add(t);let{tile:e,layer:n}=t,s=r=>{this.active.delete(t),t.abort=null,t.state=r,r===Yn&&this.loaded++,r===Td&&this.failed++,this.onLoad?.(t)};fetch(Cx(n,e.z,e.x,e.y),{signal:t.abort.signal,mode:"cors",credentials:"omit",referrerPolicy:"no-referrer"}).then(r=>{if(!r.ok)throw Object.assign(new Error(`HTTP ${r.status}`),{status:r.status});return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(r=>{this.pendingDecodes.push(()=>{if(e.dead)return r.close?.();if(n.kind==="elevation"){let a=Nx(r,e,n.id);r.close?.(),Object.assign(t,a),e.minH=a.min,e.maxH=a.max,e.allSea=a.allSea}else t.tex=Fx(r,this.anisotropy),t.tex.onUpdate=()=>{r.close?.(),t.tex.onUpdate=null};s(Yn)})}).catch(r=>{r.name==="AbortError"?(this.active.delete(t),t.abort=null,t.state=hh):s(Td)})}get busy(){return this.active.size+this.queue.length+this.pendingDecodes.length}},Rd=i=>{for(let t in i.slots){let e=i.slots[t];e.abort?.abort(),e.tex?.dispose(),e.tex=null,e.heights=null,e.seaWide=null}i.slots={}};var Ux=`
float hash21(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
// Value noise on a lattice that wraps every "per" cells. Returns value in x and its gradient in yz.
vec3 vnoise(vec2 p, float per) {
  vec2 i = floor(p), f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  vec2 du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
  vec2 i0 = mod(i, per), i1 = mod(i + 1.0, per);
  float a = hash21(i0), b = hash21(vec2(i1.x, i0.y)), c = hash21(vec2(i0.x, i1.y)), d = hash21(i1);
  float k1 = b - a, k2 = c - a, k4 = a - b - c + d;
  return vec3(a + k1 * u.x + k2 * u.y + k4 * u.x * u.y, du * vec2(k1 + k4 * u.y, k2 + k4 * u.x));
}
`,Cd=`
vec3 sunTransmit(float mu, float altKm) {
  float zen = degrees(acos(clamp(mu, -1.0, 1.0)));
  float m = 1.0 / (max(mu, 0.0) + 0.15 * pow(max(93.885 - zen, 0.5), -1.253));
  m = min(m, 38.0) * exp(-max(altKm, 0.0) / 8.0);
  vec3 tau = vec3(0.0464, 0.1085, 0.2648) + vec3(0.0098, 0.0282, 0.0013) + 0.012;
  return exp(-tau * m) * smoothstep(-0.035, 0.02, mu);
}
vec3 skyLight(float mu) {
  float day = smoothstep(-0.14, 0.3, mu);
  vec3 zenith = mix(vec3(0.10, 0.13, 0.26), vec3(0.20, 0.30, 0.50), day);
  vec3 dusk = vec3(0.30, 0.18, 0.12) * smoothstep(-0.12, 0.02, mu) * (1.0 - smoothstep(0.02, 0.25, mu));
  return (zenith * day + dusk * 0.5) * 0.55 + vec3(0.0030, 0.0042, 0.0075);   // the last term is moonlight, so the night side isn't a hole
}
`,Pd=`
precision highp float;
in float skirt;
uniform vec3 uCenter;
uniform vec3 uCenterRel;
uniform sampler2D tElev;
uniform vec4 uElevUV;
uniform float uElevBase;
uniform float uSeaClamp;
uniform float uExag;
uniform float uSkirt;
uniform vec4 uPad;      // a level pad for something built on the ground: its centre as a unit vector, its radius in metres
uniform float uPadH;    // the pad's height in metres
out vec2 vUv;
out vec3 vRel;
void main() {
  vUv = uv;
  vec3 up = normalize(uCenter + position);
  float h = textureLod(tElev, uv * uElevUV.xy + uElevUV.zw, 0.0).r + uElevBase;
  h = max(h, uSeaClamp);
  if (uPad.w > 0.0) h = mix(uPadH, h, smoothstep(uPad.w, uPad.w * 1.1 + 150.0, length(up - uPad.xyz) * 6371008.8));
  vec3 p = position + up * (h * uExag - skirt * uSkirt);
  vRel = uCenterRel + p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Id=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec3 vRel;
out vec4 outColor;

uniform sampler2D tElev;
uniform vec4 uElevUV;
uniform float uElevBase;
uniform float uElevMpp;      // metres per elevation texel at the equator
uniform sampler2D tFar;      // a coarser elevation tile around this one, for shadows
uniform vec4 uFarUV;
uniform float uFarBase;
uniform float uFarMpp;
uniform float uFarTop;       // highest ground in that tile
uniform sampler2D tBase;
uniform vec4 uBaseUV;
uniform float uBaseTexels;   // photo pixels around the equator at the zoom in use
uniform sampler2D tGlobe;    // the low-zoom photograph of the whole planet
uniform vec4 uGlobeUV;
uniform float uGlobeOn;
uniform sampler2D tOver;
uniform vec4 uOverUV;
uniform float uOverOn;
uniform sampler2D tNight;
uniform vec4 uNightUV;
uniform float uNightOn;
uniform vec4 uDry;           // tile-uv box of land that lies below sea level and stays dry
uniform vec2 uLat[3];
uniform float uLatS[3];

uniform vec3 uCamPos;
uniform vec3 uSun;
uniform float uSea;
uniform float uWater;        // 1 = draw the sea, 0 = show the bare floor
uniform float uExag;
uniform float uTime;
uniform float uPixAngle;
uniform int uLens;           // 0 satellite, 1 bare earth, 2 height and depth colours
uniform float uOverMix;
uniform int uOverMode;       // 0 colour laid over the ground and lit, 1 shown as is
uniform float uBathy;
uniform float uShadows;
uniform float uContours;
uniform vec4 uPad;
// Drawings laid flat over the ground round one place: survey boxes, ship tracks, outlines (evidence.js paints them).
// A sharp one round the point being looked at, and a coarse one eight times wider for the distance.
uniform sampler2D tDecal;
uniform sampler2D tDecalFar;
uniform float uDecalOn;
uniform vec3 uDecalO;        // their centre, relative to the camera
uniform vec3 uDecalU;        // east and north across the sharp one, scaled so it spans -0.5 to 0.5
uniform vec3 uDecalV;
// The hunt: how well each 10 km of sunken land matches Plato's description (data/worldfit.png), as a glow, and the
// ring that runs out from a spot being scanned.
uniform sampler2D tHeat;
uniform float uHeat;
uniform float uHeatLod;      // 0 for the full grid, -1 for the half-size one
uniform vec4 uScan;          // xyz: the spot, as a unit vector; w: the ring's radius in km
uniform float uScanA;

${Ux}
${Cd}

float elevRaw(vec2 e) { return texture(tElev, e).r; }

vec3 heightColour(float h) {
  // Depths in blues, land from green lowlands through brown to snow.
  if (h < 0.0) {
    float d = -h;
    vec3 c = mix(vec3(0.55, 0.80, 0.86), vec3(0.20, 0.52, 0.74), smoothstep(0.0, 200.0, d));
    c = mix(c, vec3(0.07, 0.25, 0.52), smoothstep(200.0, 2500.0, d));
    c = mix(c, vec3(0.03, 0.08, 0.26), smoothstep(2500.0, 6000.0, d));
    return mix(c, vec3(0.02, 0.02, 0.10), smoothstep(6000.0, 10500.0, d));
  }
  vec3 c = mix(vec3(0.33, 0.50, 0.27), vec3(0.62, 0.66, 0.36), smoothstep(0.0, 400.0, h));
  c = mix(c, vec3(0.70, 0.58, 0.36), smoothstep(400.0, 1400.0, h));
  c = mix(c, vec3(0.52, 0.38, 0.27), smoothstep(1400.0, 3000.0, h));
  c = mix(c, vec3(0.72, 0.70, 0.68), smoothstep(3000.0, 4500.0, h));
  return mix(c, vec3(0.96), smoothstep(4500.0, 6000.0, h));
}

void main() {
  vec3 P = uCamPos + vRel;
  vec3 up = normalize(P);
  // Something built on the ground covers it here: skip the work.
  if (uPad.w > 0.0 && length(up - uPad.xyz) * 6371008.8 < uPad.w - 60.0) discard;
  float cosLat = max(sqrt(1.0 - up.z * up.z), 0.02);
  vec3 east = normalize(vec3(-up.y, up.x, 0.0));
  vec3 north = cross(up, east);
  float dist = length(vRel);
  vec3 V = -vRel / dist;
  float foot = dist * uPixAngle;                    // metres covered by one pixel

  // Height and slope from the elevation tile.
  vec2 e = vUv * uElevUV.xy + uElevUV.zw;
  float px = 1.0 / 258.0;   // height textures are 256 pixels plus a one-pixel rim
  // Neighbours are read a little away, but never past the texture's edge: there the slope is taken one-sided.
  // They sit a texel and a half out, which also averages away the metre-steps the height data is stored in.
  vec2 lo = max(e - 1.5 * px, vec2(0.5 * px)), hi = min(e + 1.5 * px, vec2(1.0 - 0.5 * px));
  float hc = elevRaw(e);
  float hL = elevRaw(vec2(lo.x, e.y)), hR = elevRaw(vec2(hi.x, e.y));
  float hU = elevRaw(vec2(e.x, lo.y)), hD = elevRaw(vec2(e.x, hi.y));
  float h = hc + uElevBase;
  float mpp = uElevMpp * cosLat;
  vec2 span = max((hi - lo) * 258.0, vec2(0.5));
  vec2 grad = vec2(hR - hL, hU - hD) / (span * mpp);
  // Seen from far off, true slopes are too gentle to read, so shading (not the shape) is drawn steeper, as on a relief map.
  float shade = uExag * (1.0 + 5.0 * smoothstep(250.0, 9000.0, mpp));
  vec3 N = normalize(up - (east * grad.x + north * grad.y) * shade);
  float slope = length(grad);
  vec2 edge = min(e, 1.0 - e) * 258.0;
  float curv = (hL + hR + hU + hD - 4.0 * hc) / (mpp * 2.25) * smoothstep(0.5, 1.0, min(edge.x, edge.y));

  // Noise lattices fixed to the ground at three sizes: about 10 km, 300 m and 10 m.
  vec2 w0 = uLat[0] + vUv * uLatS[0];
  vec2 w1 = uLat[1] + vUv * uLatS[1];
  vec2 w2 = uLat[2] + vUv * uLatS[2];
  float cell1 = 305.7 * cosLat, cell2 = 9.55 * cosLat;

  float mu = dot(up, uSun);
  float altKm = max(h, 0.0) * 0.001;
  vec3 sunC = sunTransmit(mu, altKm);
  vec3 sky = skyLight(mu);

  // Shadows cast by the terrain itself: walk towards the sun across a coarser height tile.
  float shadow = 1.0;
  if (uShadows > 0.5 && mu > -0.05 && uLens != 2) {
    vec3 L = uSun;
    vec2 dirH = vec2(dot(L, east), dot(L, north));
    float lenH = length(dirH);
    float rise = dot(L, up);
    if (lenH > 0.02) {
      vec2 fe = vUv * uFarUV.xy + uFarUV.zw;
      float fmpp = uFarMpp * cosLat;
      float h0 = texture(tFar, fe).r + uFarBase;
      h0 = max(h0, h);
      vec2 stepUV = vec2(dirH.x, -dirH.y) / lenH * px;        // one far texel towards the sun
      float stepM = fmpp;
      float occ = 0.0;
      float t = 1.5;
      float climb = (rise / lenH) * stepM / uExag;
      for (int i = 0; i < 10; i++) {
        vec2 q = fe + stepUV * t;
        float ray = h0 + climb * t + fmpp * 0.01;
        // Above every summit nearby, or off the tile: nothing further can block the sun.
        if (ray > uFarTop || q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) break;
        float hq = texture(tFar, q).r + uFarBase;
        occ = max(occ, (hq - ray) / (t * stepM) * 9.0);
        t *= 1.5;
      }
      shadow = 1.0 - clamp(occ, 0.0, 1.0);
    }
  }

  // Ground colour.
  vec3 albedo;
  vec2 b = vUv * uBaseUV.xy + uBaseUV.zw;
  vec3 img = texture(tBase, b).rgb;
  // The close-up mosaic runs hot in deserts and dark in forests; pull both towards the middle.
  float lum = dot(img, vec3(0.3, 0.5, 0.2));
  img = pow(img, vec3(0.90)) * (0.96 - 0.30 * smoothstep(0.25, 0.9, lum));
  if (uGlobeOn > 0.5) {
    // From far away a single cloud-free picture of the planet reads better than a mosaic of close-ups.
    vec3 far = texture(tGlobe, vUv * uGlobeUV.xy + uGlobeUV.zw).rgb;
    img = mix(img, far * 0.92, smoothstep(280.0, 900.0, foot));
  }
  // Fine grain fades in once the photo is stretched past its own pixels, so close views don't turn to blur.
  float stretch = clamp((40075016.0 * cosLat / uBaseTexels) / max(foot, 1e-3), 0.0, 8.0);   // screen pixels per photo pixel
  float grainMix = smoothstep(1.2, 4.0, stretch);
  vec3 n1 = vnoise(w1 * 8.0, 512.0);
  if (grainMix > 0.0) {
    float grain = (n1.x - 0.5) * 0.10 + (vnoise(w2, 64.0).x - 0.5) * 0.12 + (vnoise(w2 * 4.0, 256.0).x - 0.5) * 0.10;
    img *= 1.0 + grain * grainMix;
  }
  vec3 photoRaw = img;

  // The sea floor has no photograph, so it gets a material: sand on the shelves, mud lower down, dark rock on steep ground.
  float floorMix = smoothstep(0.6, -0.4, h) * (uWater > 0.5 ? smoothstep(0.3, 2.0, -uSea) : 1.0);
  if (floorMix > 0.0) {
    float d = -h;
    vec3 n0 = vnoise(w0 * 4.0, 256.0);
    vec3 fl = mix(vec3(0.50, 0.44, 0.32), vec3(0.37, 0.32, 0.25), smoothstep(0.0, 150.0, d + (n0.x - 0.5) * 70.0));
    fl = mix(fl, vec3(0.31, 0.28, 0.25), smoothstep(150.0, 1500.0, d));
    fl = mix(fl, vec3(0.22, 0.22, 0.23), smoothstep(1500.0, 3200.0, d));
    fl = mix(fl, vec3(0.135, 0.145, 0.17), smoothstep(3200.0, 5000.0, d));
    fl = mix(fl, vec3(0.07, 0.08, 0.11), smoothstep(5000.0, 7500.0, d));
    fl = mix(fl, fl * 0.7, smoothstep(0.08, 0.5, slope));
    // Mottling fades out with distance: from orbit it would only be grit.
    fl *= 1.0 + ((n0.x - 0.5) * 0.30 + (n1.x - 0.5) * 0.14) * (1.0 - smoothstep(2000.0, 12000.0, foot));
    // Bare floor has no photograph to carry its shape, so ridges are lightened and hollows darkened, as in the bare-earth view.
    fl *= 1.0 + clamp(curv * 1.3 * uExag, -0.28, 0.24);
    // Just above the water the ground is wet: darker, for a few metres up.
    if (uWater > 0.5) fl *= mix(0.62, 1.0, smoothstep(0.0, 7.0, h - uSea));
    img = mix(img, fl, floorMix);
  }
  albedo = img;

  if (uLens == 1) {
    // Bare earth: one pale material, so only shape shows. Hollows darken and edges lighten, the way a lidar relief is drawn.
    vec3 clay = mix(vec3(0.70, 0.68, 0.64), vec3(0.52, 0.58, 0.64), smoothstep(0.5, -1.5, h));
    albedo = clay * (1.0 + clamp(curv * 1.6 * uExag, -0.40, 0.40));
  } else if (uLens == 2) {
    albedo = heightColour(h) * (1.0 + clamp(curv * 1.0 * uExag, -0.3, 0.3));
  }

  if (uOverOn > 0.5 && uOverMix > 0.0 && uOverMode == 0) {
    vec4 o = texture(tOver, vUv * uOverUV.xy + uOverUV.zw);
    albedo = mix(albedo, o.rgb, o.a * uOverMix);
  }

  float NoL = max(dot(N, uSun), 0.0);
  // The photo already carries the light of the day it was taken, so relief shading is laid on gently in the satellite view.
  float flat_ = max(mu, 0.0);
  float lit = uLens == 0 ? mix(flat_, NoL, 0.8) : NoL;
  // The floor's own material carries no light from a photograph: shade it fully by its slope.
  lit = mix(lit, NoL, floorMix * 0.85);
  float ao = clamp(1.0 + curv * 0.5 * uExag, 0.6, 1.15);
  vec3 col = albedo * (sunC * lit * shadow + sky * ao);

  if (uContours > 0.5) {
    float step_ = foot < 2.0 ? 10.0 : foot < 12.0 ? 50.0 : foot < 60.0 ? 200.0 : foot < 400.0 ? 1000.0 : 2000.0;
    float f = h / step_;
    float line = 1.0 - smoothstep(0.0, 1.2, abs(fract(f - 0.5) - 0.5) / max(fwidth(f), 1e-5));
    col = mix(col, col * 0.35, line * 0.55);
  }

  // The sea.
  float depth = uSea - h;
  bool dry = vUv.x > uDry.x && vUv.y > uDry.y && vUv.x < uDry.z && vUv.y < uDry.w;
  if (uWater > 0.5 && depth > -1.0 && !dry) {
    float wet = clamp(depth / max(fwidth(h), 0.02) + 0.5, 0.0, 1.0);
    if (wet > 0.0) {
      // Waves: three sizes of moving ripple, each dropped once it gets smaller than a pixel.
      vec2 wind = vec2(0.86, 0.5);
      float t = uTime;
      vec2 sl = vec2(0.0);
      float rough = 0.05;
      float fa = 1.0 - smoothstep(0.25, 1.5, foot / (cell1 * 2.0));
      float fb = 1.0 - smoothstep(0.25, 1.5, foot / (cell2 * 4.0));
      float fc = 1.0 - smoothstep(0.25, 1.5, foot / (cell2 * 0.6));
      if (fa > 0.0) {
        vec3 a = vnoise(w1 * 2.0 + wind * t * 0.035, 128.0) + 0.5 * vnoise(w1 * 4.0 - wind.yx * t * 0.05, 256.0);
        sl += a.yz * 0.9 / cell1 * 2.0 * fa * 6.0;
      }
      if (fb > 0.0) {
        vec3 a = vnoise(w2 * 0.25 + wind * t * 0.22, 16.0) + 0.6 * vnoise(w2 * 0.5 + wind.yx * t * 0.31, 32.0);
        sl += a.yz * 0.55 / cell2 * 0.25 * fb * 4.0;
      }
      if (fc > 0.0) {
        vec3 a = vnoise(w2 * 1.5 - wind * t * 0.9, 96.0) + 0.5 * vnoise(w2 * 3.0 + wind * t * 1.4, 192.0);
        sl += a.yz * 0.10 / cell2 * 1.5 * fc * 3.0;
      }
      rough += 0.20 * (1.0 - fc) + 0.07 * (1.0 - fb) + 0.03 * (1.0 - fa);
      vec3 Nw = normalize(up - east * sl.x - north * sl.y);

      float NoV = max(dot(Nw, V), 0.001);
      float fres = 0.02 + 0.98 * pow(1.0 - NoV, 5.0);
      fres = mix(fres, 0.02 + 0.5 * pow(1.0 - max(dot(up, V), 0.0), 5.0), 0.5);

      // What is seen through the water: the lit floor, fading fast in red and slowly in blue, then the water's own colour.
      float dz = max(depth, 0.0);
      // Coarse height tiles smear the shore into a wide false shallow, so the floor is hidden sooner there.
      float coarse = clamp(mpp / 45.0, 1.0, 80.0);
      vec3 through = exp(-vec3(0.34, 0.058, 0.036) * dz * 1.7 * coarse);
      vec3 body = vec3(0.004, 0.026, 0.064) * mix(1.0, mix(1.45, 0.50, pow(clamp(dz / 6500.0, 0.0, 1.0), 0.42)), uBathy);
      vec3 light = sunC * max(mu, 0.0) + sky;
      vec3 floorLit = albedo * light;
      vec3 under = floorLit * through + body * (light + sky * 0.2) * (1.0 - through.b * 0.85);
      // At today's sea level the photograph already shows the shallows as they are: reefs, sandbanks, silt. Use it there.
      float photo = (1.0 - smoothstep(6.0, 45.0, dz)) * (1.0 - smoothstep(0.4, 2.5, abs(uSea)));
      under = mix(under, photoRaw * light, photo);

      vec3 Rv = reflect(-V, Nw);
      float up_r = max(dot(Rv, up), 0.0);
      vec3 skyRefl = sky * mix(2.6, 1.1, pow(up_r, 0.6));
      vec3 H = normalize(uSun + V);
      float NoH = max(dot(Nw, H), 0.0);
      float a2 = rough * rough; a2 *= a2;
      float dd = NoH * NoH * (a2 - 1.0) + 1.0;
      float D = a2 / (3.14159 * dd * dd);
      float NoLw = max(dot(Nw, uSun), 0.0);
      vec3 glint = sunC * D * 0.25 * (0.02 + 0.98 * pow(1.0 - max(dot(H, V), 0.0), 5.0)) * NoLw / max(mix(NoV, 1.0, 0.5) * 0.5, 0.05) * 3.14159;

      // A thin line of foam where the water meets the shore.
      float foam = (1.0 - smoothstep(0.0, 1.6, dz)) * smoothstep(0.35, 0.75, vnoise(w2 * 0.75 + t * 0.05, 48.0).x) * fb * (1.0 - photo) * (1.0 - smoothstep(8.0, 30.0, mpp));
      vec3 water = under * (1.0 - fres) + skyRefl * fres + glint;
      water = mix(water, vec3(0.85) * (sunC * max(mu, 0.0) + sky), foam * 0.6);
      float ice = smoothstep(0.972, 0.990, up.z + (vnoise(w0 * 2.0, 128.0).x - 0.5) * 0.012) * (1.0 - smoothstep(-3.0, -40.0, uSea) * 0.0);
      water = mix(water, vec3(0.80, 0.85, 0.90) * light, ice);
      col = mix(col, water, wet);
    }
  }

  // Lights of towns on the dark side.
  if (uNightOn > 0.5 && uLens == 0) {
    float night = 1.0 - smoothstep(-0.18, 0.02, mu);
    if (night > 0.0) {
      vec3 lights = texture(tNight, vUv * uNightUV.xy + uNightUV.zw).rgb;
      float lum = max(lights.r, max(lights.g, lights.b));
      col += vec3(1.0, 0.72, 0.38) * pow(lum, 1.6) * 2.2 * night * step(uSea - 0.5, h);
    }
  }

  if (uOverOn > 0.5 && uOverMix > 0.0 && uOverMode == 1) {
    vec4 o = texture(tOver, vUv * uOverUV.xy + uOverUV.zw);
    col = mix(col, o.rgb * 0.82, o.a * uOverMix);
  }

  if (uDecalOn > 0.0) {
    vec3 q = vRel - uDecalO;
    vec2 dp = vec2(dot(q, uDecalU), dot(q, uDecalV));
    vec2 df = dp * 0.125;
    if (max(abs(df.x), abs(df.y)) < 0.5) {
      // Colour already multiplied by its cover, in screen (sRGB) values.
      vec4 d = texture(tDecalFar, df + 0.5) * (1.0 - smoothstep(0.42, 0.5, max(abs(df.x), abs(df.y))));
      float m = max(abs(dp.x), abs(dp.y));
      if (m < 0.5) d = mix(texture(tDecal, dp + 0.5), d, smoothstep(0.42, 0.5, m));
      if (d.a > 0.003) {
        vec3 ink = pow(d.rgb / d.a, vec3(2.2));
        // Light colours are drawn a little brighter than the ground can be, so a line still reads on sand at noon and on the sea at dusk.
        float glow = 0.35 + 1.25 * smoothstep(0.08, 0.6, max(ink.r, max(ink.g, ink.b)));
        col = mix(col, ink * glow, d.a * uDecalOn);
      }
    }
  }

  if (uHeat > 0.0) {
    float hlat = asin(clamp(up.z, -1.0, 1.0));
    float my = 0.5 - log(tan(0.78539816 + 0.5 * hlat)) / 6.28318531;
    if (my > 0.002 && my < 0.998) {
      // The level of detail is worked out from the size of a pixel on the ground: the longitude wraps, and a wrap would otherwise draw a seam.
      float lod = max(log2(foot / (9784.0 * cosLat)) + uHeatLod, 0.0);
      float s = textureLod(tHeat, vec2(atan(up.y, up.x) / 6.28318531 + 0.5, my), lod).r * 5.1;   // 0 to 5 clues, softened at the edges
      if (s > 0.1) {
        // One clue: a dim teal. Three: bright sea-green. Four: gold, and it beats. Five would be white.
        vec3 hc = mix(vec3(0.03, 0.28, 0.44), vec3(0.04, 0.52, 0.70), smoothstep(1.0, 2.0, s));
        hc = mix(hc, vec3(0.22, 0.95, 0.72), smoothstep(2.1, 3.0, s));
        hc = mix(hc, vec3(1.0, 0.72, 0.16), smoothstep(3.25, 3.9, s));
        hc = mix(hc, vec3(1.0, 0.97, 0.84), smoothstep(4.2, 5.0, s));
        float beat = 1.0 + 0.25 * sin(uTime * 2.6) * smoothstep(3.3, 3.9, s);
        // It is light in the water, not paint on it: what lies under still shows through, a slow shimmer runs across it,
        // and the edge of each sunken land is a brighter line.
        float shimmer = 0.86 + 0.14 * sin(dot(up, vec3(310.0, 170.0, 240.0)) + uTime * 1.3);
        float rim = smoothstep(0.08, 0.5, s) * (1.0 - smoothstep(0.5, 1.15, s));
        float cover = min(s, 1.0) * mix(0.16, 0.80, smoothstep(1.0, 3.9, s));
        vec3 lightIn = hc * mix(0.5, 2.9, smoothstep(2.0, 3.9, s)) * beat * shimmer;
        col = mix(col, col * 0.55 + lightIn, cover * uHeat);
        col += hc * rim * 0.55 * uHeat;
      }
    }
  }
  if (uScanA > 0.0) {
    float dkm = acos(clamp(dot(up, uScan.xyz), -1.0, 1.0)) * 6371.0;
    float ring = exp(-pow((dkm - uScan.w) / max(uScan.w * 0.03, foot * 0.003), 2.0));
    col += vec3(0.30, 0.88, 1.0) * ring * uScanA;
  }

  outColor = vec4(col, 1.0);
}
`,Ld=`
precision highp float;
uniform vec3 uCenter;
uniform vec3 uCenterRel;
uniform float uExag;
in float height;
out vec3 vRel;
void main() {
  vec3 up = normalize(uCenter + position);
  vec3 p = position + up * height * uExag;
  vRel = uCenterRel + p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Dd=`
precision highp float;
in vec3 vRel;
out vec4 outColor;
uniform vec3 uCamPos;
uniform vec3 uSun;
${Cd}
void main() {
  vec3 up = normalize(uCamPos + vRel);
  float mu = dot(up, uSun);
  vec3 col = vec3(0.80, 0.85, 0.90) * (sunTransmit(mu, 0.0) * max(mu, 0.0) + skyLight(mu));
  outColor = vec4(col, 1.0);
}
`,Nd=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Fd=`
uniform sampler2D tDepth;
uniform vec3 uCam;      // km
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uFwd;
uniform vec2 uTan;
uniform vec2 uShift;
uniform float uNear;    // m
uniform float uFar;     // m
uniform vec3 uSun;
const float RG = 6371.0088;
const float PI = 3.14159265;
// Where a ray meets a sphere round the planet's centre: near and far distances, or (1e9, -1e9) for a miss.
// Written through the ray's closest approach to the centre. The textbook form subtracts two numbers near 4e8 from each
// other, which in 32-bit floats is only good to a few kilometres for a camera in orbit, and drew stripes along the limb.
vec2 sphere(vec3 o, vec3 d, float r) {
  float b = dot(o, d);
  float near = length(o - b * d);
  float h = (r - near) * (r + near);
  if (h < 0.0) return vec2(1e9, -1e9);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}
vec3 rayDir(vec2 uv) {
  vec2 ndc = uv * 2.0 - 1.0 - uShift;
  return normalize(uFwd + uRight * ndc.x * uTan.x + uUp * ndc.y * uTan.y);
}
// Distance to the ground along the ray in km, for one pixel of the full-size depth picture, or a negative number for sky.
float groundAt(ivec2 pixel, vec3 dir) {
  float d = texelFetch(tDepth, pixel, 0).r;
  if (d >= 1.0) return -1.0;
  float zn = d * 2.0 - 1.0;
  float viewZ = 2.0 * uNear * uFar / (uFar + uNear - zn * (uFar - uNear));
  return viewZ / dot(dir, uFwd) * 0.001;
}
`,Ud=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
layout(location = 0) out vec4 outLight;   // scattered light, and the ground distance in alpha
layout(location = 1) out vec4 outThrough; // how much of the background survives
${Fd}
uniform float uHaze;
uniform int uSteps;
uniform float uAir;
uniform float uThick;   // the air is drawn a little deeper than it is from orbit, where the true layer is thinner than a pixel

#define RT (RG + 65.0 * uThick)
const vec3 BR = vec3(5.802e-3, 13.558e-3, 33.1e-3);
const float BM = 3.996e-3;
const vec3 BO = vec3(0.650e-3, 1.881e-3, 0.085e-3);

vec3 density(float alt) {
  alt = max(alt, -11.0);
  alt /= uThick;
  return vec3(exp(-alt / 8.0), exp(-alt / 1.2) * uHaze, max(0.0, 1.0 - abs(alt - 25.0) / 15.0)) / uThick;
}
vec3 depthToSun(vec3 p) {
  float t1 = sphere(p, uSun, RT).y;
  float dt = t1 / 4.0;
  vec3 od = vec3(0.0);
  for (int i = 0; i < 4; i++) od += density(length(p + uSun * (dt * (float(i) + 0.5))) - RG) * dt;
  return od;
}

void main() {
  // Each half-size pixel stands for one exact full-size pixel: its ray and its depth are read for that pixel, not for a
  // point between four of them, where rounding picks a different neighbour from column to column and draws stripes.
  ivec2 full = textureSize(tDepth, 0);
  ivec2 pixel = min(ivec2(gl_FragCoord.xy) * 2, full - 1);
  vec3 dir = rayDir((vec2(pixel) + 0.5) / vec2(full));
  float tSurf = groundAt(pixel, dir);
  bool hit = tSurf >= 0.0;
  vec2 ta = sphere(uCam, dir, RT);
  vec3 L = vec3(0.0), T = vec3(1.0);
  float t0 = max(ta.x, 0.0), t1 = hit ? min(ta.y, tSurf) : ta.y;
  if (!hit) {
    // No ground in this pixel. If the ray still meets the sea-level sphere it is the far side of a missing tile: stop there.
    vec2 tg = sphere(uCam, dir, RG - 12.0);
    if (tg.x > 0.0 && tg.x < 1e8) t1 = min(t1, tg.x);
  }
  float mu = dot(dir, uSun);
  if (t1 > t0) {
    float phaseR = 3.0 / (16.0 * PI) * (1.0 + mu * mu);
    float g = 0.78;
    float phaseM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + mu * mu)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
    // Sky pixels show banding first and have the longest paths, so they get more samples.
    int steps = hit ? uSteps : uSteps + 12;
    float n = float(steps);
    vec3 od = vec3(0.0);
    // Each pixel starts its samples at a slightly different depth, which turns banding into faint grain. The grain has no
    // pattern of its own: a regular one shows as stripes once this half-size picture is stretched to full size.
    vec3 jp = fract(vec3(gl_FragCoord.xyx) * 0.1031);
    jp += dot(jp, jp.yzx + 33.33);
    float jitter = fract((jp.x + jp.y) * jp.z) - 0.5;
    float prev = t0;
    for (int i = 0; i < 48; i++) {
      if (i >= steps) break;
      // Samples bunch up near the eye, where the air a ground-level view crosses is thickest.
      float f1 = (float(i) + 1.0) / n;
      float tt = mix(t0, t1, f1 * (0.45 + 0.55 * f1));
      float ds = tt - prev;
      float tm = prev + ds * (0.5 + jitter * 0.3);
      prev = tt;
      vec3 p = uCam + dir * tm;
      vec3 dn = density(length(p) - RG);
      od += dn * ds;
      // In the planet's shadow no direct sun reaches this sample.
      vec2 sh = sphere(p, uSun, RG - 2.0);
      if (!(sh.x > 0.0 && sh.y > 0.0)) {
        vec3 os = depthToSun(p);
        vec3 att = exp(-(BR * (od.x + os.x) + BM * 1.1 * (od.y + os.y) + BO * (od.z + os.z)));
        vec3 scatter = BR * dn.x * phaseR + BM * dn.y * phaseM;
        // A little light that has bounced more than once keeps the shaded side of the air from going black.
        vec3 multi = (BR * dn.x + BM * dn.y) * 0.035 * exp(-(BR * os.x) * 0.4);
        L += (scatter * att + multi * exp(-(BR * od.x + BM * od.y))) * ds;
      }
    }
    T = mix(vec3(1.0), exp(-(BR * od.x + BM * 1.1 * od.y + BO * od.z)), uAir);
    L *= PI * uAir;
  }
  outLight = vec4(L, tSurf);
  outThrough = vec4(T, 1.0);
}
`,kd=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tColor;
uniform sampler2D tLight;
uniform sampler2D tThrough;
uniform float uPixAngle;
${Fd}
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
vec3 stars(vec3 d) {
  // The sky is cut into the six faces of a cube and each face into cells; some cells hold one star. A cube keeps the
  // cells nearly square everywhere, where a latitude and longitude grid would smear stars into dashes away from its equator.
  vec3 a = abs(d);
  vec2 uv;
  int axis;
  if (a.x >= a.y && a.x >= a.z) { uv = d.yz / a.x; axis = 0; }
  else if (a.y >= a.z) { uv = d.xz / a.y; axis = 1; }
  else { uv = d.xy / a.z; axis = 2; }
  float sgn = axis == 0 ? sign(d.x) : axis == 1 ? sign(d.y) : sign(d.z);
  float cells = 44.0;
  vec2 g = uv * cells;
  vec2 cell = floor(g);
  vec2 id = cell + (float(axis) * 2.0 + step(0.0, sgn)) * 131.0;
  float r = hash(id);
  if (r < 0.72) return vec3(0.0);
  // The star's own direction, so its disc is measured as an angle in the sky and stays round.
  vec2 c = (cell + vec2(hash(id + 7.3), hash(id + 13.7)) * 0.6 + 0.2) / cells;
  vec3 at = normalize(axis == 0 ? vec3(sgn, c.x, c.y) : axis == 1 ? vec3(c.x, sgn, c.y) : vec3(c.x, c.y, sgn));
  vec3 off = cross(d, at);
  float size = max(uPixAngle * 1.25, 0.0004);
  float s = exp(-dot(off, off) / (size * size));
  float mag = pow((r - 0.72) / 0.28, 6.0);
  vec3 tint = mix(vec3(1.0, 0.82, 0.66), vec3(0.72, 0.84, 1.0), hash(id + 3.1));
  return tint * s * (0.11 + mag * 2.2);
}

void main() {
  vec3 dir = rayDir(vUv);
  float tSurf = groundAt(ivec2(gl_FragCoord.xy), dir);
  bool hit = tSurf >= 0.0;
  ivec2 size = textureSize(tLight, 0);
  // Half-size pixel q was computed for full-size pixel 2q, so this pixel sits at (x / 2, y / 2) among them.
  vec2 hp = floor(gl_FragCoord.xy) * 0.5;
  ivec2 base = ivec2(floor(hp));
  vec2 f = hp - vec2(base);
  vec3 L = vec3(0.0), T = vec3(0.0);
  float sum = 0.0;
  for (int k = 0; k < 4; k++) {
    ivec2 o = ivec2(k & 1, k >> 1);
    ivec2 q = clamp(base + o, ivec2(0), size - 1);
    vec4 l = texelFetch(tLight, q, 0);
    float w = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y) + 0.02;
    bool sky = l.a < 0.0;
    w *= hit == !sky ? (hit ? 1.0 / (1.0 + abs(l.a - tSurf) / (0.03 * tSurf + 0.02)) : 1.0) : 0.004;
    L += l.rgb * w;
    T += texelFetch(tThrough, q, 0).rgb * w;
    sum += w;
  }
  L /= sum; T /= sum;
  vec3 col = texture(tColor, vUv).rgb;
  if (!hit) {
    col = vec3(0.0);
    vec2 tg = sphere(uCam, dir, RG - 12.0);
    if (!(tg.x > 0.0 && tg.x < 1e8)) {
      float mu = dot(dir, uSun);
      col = stars(dir);
      float sunAng = acos(clamp(mu, -1.0, 1.0));
      col += vec3(1.0, 0.96, 0.90) * 90.0 * (1.0 - smoothstep(0.0046, 0.0052, sunAng));
      col += vec3(1.0, 0.9, 0.8) * 0.04 / (1.0 + pow(sunAng / 0.02, 2.0));
    }
  }
  outColor = vec4(col * T + L, 1.0);
}
`,Od=`
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uThreshold;
void main() {
  vec3 a = texture(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  vec3 b = texture(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb;
  vec3 d = texture(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  vec3 col = (a + b + c + d) * 0.2 + e * 0.2;
  if (uThreshold > 0.0) {
    float l = max(col.r, max(col.g, col.b));
    col *= max(l - uThreshold, 0.0) / max(l, 1e-4);
    col = min(col, vec3(30.0));
  }
  outColor = vec4(col, 1.0);
}
`,Bd=`
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tSrc;
uniform sampler2D tAdd;
uniform vec2 uTexel;
void main() {
  vec3 s = texture(tSrc, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + uTexel * vec2(1.0, 0.0)).rgb
    + texture(tSrc, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + uTexel * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  outColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}
`,zd=`
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tColor;
uniform sampler2D tBloom;
uniform vec2 uTexel;
uniform float uExposure;
uniform float uBloom;
uniform float uVignette;
vec3 aces(vec3 x) {
  const mat3 inM = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 outM = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  vec3 v = inM * x;
  vec3 a = v * (v + 0.0245786) - 0.000090537;
  vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return clamp(outM * (a / b), 0.0, 1.0);
}
float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float luma(vec3 c) {
  c *= uExposure;
  return dot(c / (1.0 + c), vec3(0.299, 0.587, 0.114));
}
// FXAA, the short form: find the direction of an edge from four diagonal taps and blur along it.
vec3 smoothEdges(vec2 uv) {
  vec3 m = texture(tColor, uv).rgb;
  float lNW = luma(texture(tColor, uv + uTexel * vec2(-0.5, -0.5)).rgb), lNE = luma(texture(tColor, uv + uTexel * vec2(0.5, -0.5)).rgb);
  float lSW = luma(texture(tColor, uv + uTexel * vec2(-0.5, 0.5)).rgb), lSE = luma(texture(tColor, uv + uTexel * vec2(0.5, 0.5)).rgb);
  float lM = luma(m);
  float lo = min(lM, min(min(lNW, lNE), min(lSW, lSE))), hi = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (hi - lo < max(0.04, hi * 0.14)) return m;
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
  float reduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);
  dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + reduce), -8.0, 8.0) * uTexel;
  vec3 a = 0.5 * (texture(tColor, uv + dir * (1.0 / 3.0 - 0.5)).rgb + texture(tColor, uv + dir * (2.0 / 3.0 - 0.5)).rgb);
  vec3 b = a * 0.5 + 0.25 * (texture(tColor, uv - dir * 0.5).rgb + texture(tColor, uv + dir * 0.5).rgb);
  float lB = luma(b);
  return lB < lo || lB > hi ? a : b;
}
void main() {
  vec3 col = smoothEdges(vUv) + texture(tBloom, vUv).rgb * uBloom;
  col *= uExposure;
  vec2 q = vUv - 0.5;
  col *= 1.0 - uVignette * dot(q, q) * 1.6;
  col = aces(col);
  col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 1.06);
  col = pow(col, vec3(1.0 / 2.2));
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`;var mr=2,kx=[12,17,22],Ox=[[44,35.5,56.5,48.5],[34.9,30,36.2,33.4],[-117.6,35.6,-116.2,37],[-116.4,32.4,-115,33.8],[25.5,28.3,30.3,30.6],[39.5,11,42.8,15],[88.5,42.3,90.5,43.3],[3.3,51.2,7.3,53.6],[5.5,33.5,9,34.8],[136.5,-29.6,138.3,-27.6],[-68.6,-49.8,-67.9,-49.3],[50.9,43.2,52.3,44],[-.6,52.2,.5,52.9]],dh=class i{constructor(t,e,n,s){this.z=t,this.x=e,this.y=n,this.parent=s,this.children=null,this.lon0=gi(e,t),this.lon1=gi(e+1,t),this.latN=Bn(n,t),this.latS=Bn(n+1,t),this.west=this.lon0/mt,this.east=this.lon1/mt,this.north=this.latN/mt,this.south=this.latS/mt;let r=(this.lon0+this.lon1)/2,a=Bn(n+.5,t);this.center=xn(r,a).map(h=>h*ne);let l=0;for(let[h,u]of[[this.lon0,this.latN],[this.lon1,this.latN],[this.lon0,this.latS],[this.lon1,this.latS]]){let c=xn(h,u);l=Math.max(l,Math.hypot(c[0]*ne-this.center[0],c[1]*ne-this.center[1],c[2]*ne-this.center[2]))}this.radius=l,this.minH=s?s.minH:-8e3,this.maxH=s?s.maxH:6e3,this.slots={},this.visit=0,this.geom=null,this.dead=!1,this.dry=null;for(let h of Ox)if(this.east>h[0]&&this.west<h[2]&&this.north>h[1]&&this.south<h[3]){this.dry=[rs(h[0]*mt,t)-e,as(h[3]*mt,t)-n,rs(h[2]*mt,t)-e,as(h[1]*mt,t)-n];break}let o=[];for(let h of kx){let u=2**(h-t);o.push([e*u%64,n*u%64,u])}this.lattice=o}split(){let{z:t,x:e,y:n}=this;this.children=[new i(t+1,2*e,2*n,this),new i(t+1,2*e+1,2*n,this),new i(t+1,2*e,2*n+1,this),new i(t+1,2*e+1,2*n+1,this)]}},Bx=i=>{let t=i+1,e=t*t,n=e+4*t,s=new Float32Array(n*2),r=new Float32Array(n),a=new Uint32Array(4*t);for(let o=0;o<t;o++)for(let h=0;h<t;h++)s[(o*t+h)*2]=h/i,s[(o*t+h)*2+1]=o/i;for(let o=0;o<t;o++)a[o]=o,a[t+o]=i*t+o,a[2*t+o]=o*t,a[3*t+o]=o*t+i;for(let o=0;o<4*t;o++)s[(e+o)*2]=s[a[o]*2],s[(e+o)*2+1]=s[a[o]*2+1],r[e+o]=1;let l=[];for(let o=0;o<i;o++)for(let h=0;h<i;h++){let u=o*t+h,c=u+1,f=u+t,d=f+1;l.push(u,f,c,c,f,d)}for(let o=0;o<4;o++)for(let h=0;h<i;h++){let u=a[o*t+h],c=a[o*t+h+1],f=e+o*t+h,d=f+1;l.push(u,f,c,c,f,d)}return{n:i,side:t,main:e,count:n,edge:a,uv:new Le(s,2),skirt:new Le(r,1),index:new Le(n>65535?new Uint32Array(l):new Uint16Array(l),1)}},zx=(i,t)=>{let e=new Float32Array(t.count*3),{n,side:s}=t,[r,a,l]=i.center,o=new Float64Array(s),h=new Float64Array(s);for(let c=0;c<s;c++){let f=i.lon0+(i.lon1-i.lon0)*c/n;o[c]=Math.cos(f),h[c]=Math.sin(f)}for(let c=0;c<s;c++){let f=Bn(i.y+c/n,i.z),d=Math.cos(f)*ne,p=Math.sin(f)*ne;for(let v=0;v<s;v++){let g=(c*s+v)*3;e[g]=d*o[v]-r,e[g+1]=d*h[v]-a,e[g+2]=p-l}}for(let c=0;c<4*s;c++){let f=t.edge[c]*3,d=(t.main+c)*3;e[d]=e[f],e[d+1]=e[f+1],e[d+2]=e[f+2]}let u=new Be;return u.setAttribute("position",new Le(e,3)),u.setAttribute("uv",t.uv),u.setAttribute("skirt",t.skirt),u.setIndex(t.index),u},Hd=(i,t,e,n=255)=>{let s=new Sn(new Uint8Array([i,t,e,n]),1,1,Ye);return s.needsUpdate=!0,s},yl=class{constructor({renderer:t,scene:e,segments:n=64,threshold:s=340,budget:r=380,layers:a}){this.scene=e,this.grid=Bx(n),this.threshold=s,this.budget=r,this.loader=new xl({anisotropy:Math.min(8,t.capabilities.getMaxAnisotropy())}),this.layers=a,this.maxZ=17,this.frame=0,this.count=0,this.roots=[];for(let l=0;l<2**mr;l++)for(let o=0;o<2**mr;o++)this.roots.push(new dh(mr,o,l,null));this.count=this.roots.length,this.drawn=[],this.pool=[],this.group=new $e,e.add(this.group),this.blank=Hd(20,30,45),this.blankElev=(()=>{let l=new Sn(new Uint16Array([0]),1,1,fi,je);return l.internalFormat="R16F",l.needsUpdate=!0,l})(),this.black=Hd(0,0,0,0),this.shared={uCamPos:{value:new ht},uSun:{value:new ht(1,0,0)},uSea:{value:0},uWater:{value:1},uSeaClamp:{value:0},uExag:{value:1},uTime:{value:0},uPixAngle:{value:.001},uLens:{value:0},uOverMix:{value:1},uOverMode:{value:0},uBathy:{value:.45},uShadows:{value:1},uContours:{value:0},uNightOn:{value:1},uPad:{value:new ge(0,0,0,0)},uPadH:{value:0},tDecal:{value:this.black},tDecalFar:{value:this.black},uDecalOn:{value:0},tHeat:{value:this.black},uHeat:{value:0},uHeatLod:{value:0},uScan:{value:new ge(0,0,1,0)},uScanA:{value:0},uDecalO:{value:new ht},uDecalU:{value:new ht},uDecalV:{value:new ht}},this.frustum=new ui,this.caps=this.makeCaps(),this.stats={tiles:0,depth:0}}makeMaterial(){let t={...this.shared,uCenter:{value:new ht},uCenterRel:{value:new ht},uSkirt:{value:0},tElev:{value:this.blankElev},uElevUV:{value:new ge(1,1,0,0)},uElevBase:{value:0},uElevMpp:{value:1},tFar:{value:this.blankElev},uFarUV:{value:new ge(1,1,0,0)},uFarBase:{value:0},uFarMpp:{value:1},uFarTop:{value:9e3},tBase:{value:this.blank},uBaseUV:{value:new ge(1,1,0,0)},uBaseTexels:{value:256},tGlobe:{value:this.blank},uGlobeUV:{value:new ge(1,1,0,0)},uGlobeOn:{value:0},tOver:{value:this.black},uOverUV:{value:new ge(1,1,0,0)},uOverOn:{value:0},tNight:{value:this.black},uNightUV:{value:new ge(1,1,0,0)},uDry:{value:new ge(2,2,-1,-1)},uLat:{value:[new ie,new ie,new ie]},uLatS:{value:[1,1,1]}};return new Xe({uniforms:t,vertexShader:Pd,fragmentShader:Id,glslVersion:is,side:sn})}makeCaps(){let n=[];for(let s of[1,-1]){let r=new Float32Array(2307),a=new Float32Array(769),l=[0,0,s*ne];for(let d=0;d<8;d++){let p=s*(ss+(Math.PI/2-ss)*d/8);for(let v=0;v<96;v++){let g=xn(v/96*2*Math.PI-Math.PI,p),m=(d*96+v)*3;r[m]=g[0]*ne,r[m+1]=g[1]*ne,r[m+2]=g[2]*ne-l[2]}}let o=[];for(let d=0;d<7;d++)for(let p=0;p<96;p++){let v=d*96+p,g=d*96+(p+1)%96,m=v+96,x=g+96;o.push(v,g,m,g,x,m)}let h=768;for(let d=0;d<96;d++)o.push(672+d,672+(d+1)%96,h);let u=new Be;u.setAttribute("position",new Le(r,3)),u.setAttribute("height",new Le(a,1)),u.setIndex(o);let c=new Xe({uniforms:{uCamPos:this.shared.uCamPos,uSun:this.shared.uSun,uExag:this.shared.uExag,uCenter:{value:new ht(...l)},uCenterRel:{value:new ht}},vertexShader:Ld,fragmentShader:Dd,glslVersion:is,side:sn}),f=new pe(u,c);f.frustumCulled=!1,f.position.set(...l),f.updateMatrixWorld(),this.scene.add(f),n.push({mesh:f,sign:s,rings:8,around:96,centre:l,set:!1})}return n}fitCaps(){let t=this.shared.uWater.value>.5?this.shared.uSea.value:-1e5;for(let e of this.caps){let n=e.mesh.geometry.attributes.height,s=0,r=[];for(let a=0;a<e.around;a++){let l=Math.max(this.heightAt(a/e.around*2*Math.PI-Math.PI,e.sign*(ss-.002))??0,t);r.push(l),s+=l/e.around}for(let a=0;a<e.rings;a++)for(let l=0;l<e.around;l++)n.array[a*e.around+l]=r[l]+(s-r[l])*(a/e.rings);n.array[e.rings*e.around]=s,n.needsUpdate=!0}}resolve(t,e){for(let n=t;n;n=n.parent){let s=n.slots[e.id];if(s&&s.state===Yn){let r=2**(t.z-n.z);return{slot:s,z:n.z,scale:1/r,ox:(t.x-n.x*r)/r,oy:(t.y-n.y*r)/r}}}return null}heightAt(t,e){t=wn(t),e=Wt(e,-ss+1e-6,ss-1e-6);let n=2**mr,s=this.roots[Wt(Math.floor(as(e,mr)),0,n-1)*n+Wt(Math.floor(rs(t,mr)),0,n-1)],r=null,a=this.layers.elevation.id;for(;s;){let m=s.slots[a];if(m&&m.state===Yn&&(r=s),!s.children)break;let x=rs(t,s.z+1)-2*s.x,w=as(e,s.z+1)-2*s.y;s=s.children[(w>=1?2:0)+(x>=1?1:0)]}if(!r)return null;let l=r.slots[a],o=Wt((rs(t,r.z)-r.x)*256-.5,0,255),h=Wt((as(e,r.z)-r.y)*256-.5,0,255),u=Math.floor(o),c=Math.floor(h),f=Math.min(u+1,255),d=Math.min(c+1,255),p=o-u,v=h-c,g=(m,x)=>Yi.fromHalfFloat(l.heights[(x+1)*ze+m+1]);return l.base+(g(u,c)*(1-p)+g(f,c)*p)*(1-v)+(g(u,d)*(1-p)+g(f,d)*p)*v}measure(t,e){let n=this.shared.uExag.value,s=e.lon;if(!(s>=t.lon0&&s<=t.lon1)){let v=Math.abs(wn(e.lon-t.lon0)),g=Math.abs(wn(e.lon-t.lon1));s=v<g?t.lon0:t.lon1}let r=Wt(e.lat,t.latS,t.latN),a=pr(e.lon,e.lat,s,r),l=Math.max(t.maxH,e.sea)*n;if(a>e.horizon+Math.acos(Math.min(1,e.occluder/(ne+Math.max(l,0)+50)))+.002)return null;let o=this._v.set(t.center[0]-e.pos[0],t.center[1]-e.pos[1],t.center[2]-e.pos[2]);if(this._sphere.center.copy(o),this._sphere.radius=t.radius+Math.max(Math.abs(t.minH),Math.abs(t.maxH))*n+200,!this.frustum.intersectsSphere(this._sphere))return null;let h=Wt(e.ground,t.minH,t.maxH)*n,u=xn(s,r,this._p),c=ne+Math.max(h,e.sea*n),f=Math.max(Math.hypot(u[0]*c-e.pos[0],u[1]*c-e.pos[1],u[2]*c-e.pos[2]),20),d=dr*Math.cos(r)/2**t.z,p=Math.abs((u[0]*(u[0]*c-e.pos[0])+u[1]*(u[1]*c-e.pos[1])+u[2]*(u[2]*c-e.pos[2]))/f);return d/f*e.pxPerRad*Math.max(.45,Math.sqrt(p))}ensure(t,e){let n=this.layers,s=this.loader,r=s.want(t,n.elevation,e+2e6),a=n.globe?n.globe.maxZoom:-1,l=n.globe&&t.z<=a?s.want(t,n.globe,e+1e6):null,o=t.z>=a?s.want(t,n.base,e+1e6):l;return n.overlay&&s.want(t,n.overlay,e),n.night&&this.shared.uNightOn.value>.5&&s.want(t,n.night,e-1e5),r.state>=Yn&&o.state>=Yn}visit(t,e,n){t.visit=this.frame;let s=this.ensure(t,e);if(s&&t.z<this.maxZ&&e>this.threshold&&this.drawn.length<700){t.children||(t.split(),this.count+=4);let r=!0;for(let a of t.children)a._px=this.measure(a,n),a._px!==null&&(a.visit=this.frame,this.ensure(a,a._px)||(r=!1));if(r){for(let a of t.children)a._px!==null&&this.visit(a,a._px,n);return}}s&&this.drawn.push(t)}update(t){this.frame++;let e=this.shared,n=e.uExag.value,s=e.uWater.value>.5;t.sea=s?e.uSea.value:-12e3;let r=Math.hypot(t.pos[0],t.pos[1],t.pos[2]);t.occluder=ne+(s?Math.min(e.uSea.value,-450):-11e3)*n-100,t.horizon=r>t.occluder?Math.acos(t.occluder/r):Math.PI,this._v??=new ht,this._p??=[0,0,0],this._sphere??=new hi,this.frustum.setFromProjectionMatrix(t.viewProjectionRel),e.uSeaClamp.value=s?e.uSea.value:-1e5,this.drawn.length=0;for(let a of this.roots){let l=this.measure(a,t);if(l===null){a.visit=this.frame,this.ensure(a,1);continue}this.visit(a,l,t)}this.assign(t),this.loader.pump(this.frame),this.frame%90===0&&this.prune(),!this.capsFitted&&this.roots.every(a=>a.slots[this.layers.elevation.id]?.state>=Yn)&&(this.fitCaps(),this.capsFitted=!0);for(let a of this.caps)a.mesh.material.uniforms.uCenterRel.value.set(a.centre[0]-t.pos[0],a.centre[1]-t.pos[1],a.centre[2]-t.pos[2])}assign(t){let e=this.layers,n=0;for(let s=0;s<this.drawn.length;s++){let r=this.drawn[s],a=this.pool[s];a||(a=this.pool[s]=new pe(void 0,this.makeMaterial()),a.frustumCulled=!1,a.matrixAutoUpdate=!1,this.group.add(a)),r.geom??=zx(r,this.grid),a.geometry=r.geom,a.visible=!0,a.matrix.makeTranslation(r.center[0],r.center[1],r.center[2]),a.matrixWorld.copy(a.matrix);let l=a.material.uniforms;l.uCenter.value.set(r.center[0],r.center[1],r.center[2]),l.uCenterRel.value.set(r.center[0]-t.pos[0],r.center[1]-t.pos[1],r.center[2]-t.pos[2]),l.uSkirt.value=Math.max(dr/2**r.z*.04,30)*Math.max(1,this.shared.uExag.value*.5);let o=this.resolve(r,e.elevation);if(o){let p=256/ze;l.tElev.value=o.slot.tex,l.uElevUV.value.set(o.scale*p,o.scale*p,(1+256*o.ox)/ze,(1+256*o.oy)/ze),l.uElevBase.value=o.slot.base,l.uElevMpp.value=dr/2**o.z/256}else l.tElev.value=this.blankElev,l.uElevBase.value=0,l.uElevMpp.value=dr/2**r.z/256;let h=null;for(let p=r,v=0;p;p=p.parent,v++){let g=p.slots[e.elevation.id];if(g&&g.state===Yn&&(v>=3||!p.parent)){h=p;break}}if(h){let p=2**(r.z-h.z),v=h.slots[e.elevation.id];l.tFar.value=v.tex,l.uFarUV.value.set(256/ze/p,256/ze/p,(1+256*(r.x-h.x*p)/p)/ze,(1+256*(r.y-h.y*p)/p)/ze),l.uFarBase.value=v.base,l.uFarMpp.value=dr/2**h.z/256,l.uFarTop.value=v.max}else l.tFar.value=l.tElev.value,l.uFarUV.value.copy(l.uElevUV.value),l.uFarBase.value=l.uElevBase.value,l.uFarMpp.value=l.uElevMpp.value,l.uFarTop.value=r.maxH;let u=e.globe&&this.resolve(r,e.globe),c=this.resolve(r,e.base)??u;c?(l.tBase.value=c.slot.tex,l.uBaseUV.value.set(c.scale,c.scale,c.ox,c.oy),l.uBaseTexels.value=256*2**c.z):(l.tBase.value=this.blank,l.uBaseTexels.value=256*2**r.z),u?(l.tGlobe.value=u.slot.tex,l.uGlobeUV.value.set(u.scale,u.scale,u.ox,u.oy),l.uGlobeOn.value=1):(l.tGlobe.value=this.blank,l.uGlobeOn.value=0);let f=e.overlay&&this.resolve(r,e.overlay);f?(l.tOver.value=f.slot.tex,l.uOverUV.value.set(f.scale,f.scale,f.ox,f.oy),l.uOverOn.value=1):(l.tOver.value=this.black,l.uOverOn.value=0);let d=e.night&&this.shared.uNightOn.value>.5&&this.resolve(r,e.night);d?(l.tNight.value=d.slot.tex,l.uNightUV.value.set(d.scale,d.scale,d.ox,d.oy)):l.tNight.value=this.black,r.dry?l.uDry.value.set(r.dry[0],r.dry[1],r.dry[2],r.dry[3]):l.uDry.value.set(2,2,-1,-1);for(let p=0;p<3;p++)l.uLat.value[p].set(r.lattice[p][0],r.lattice[p][1]),l.uLatS.value[p]=r.lattice[p][2];r.z>n&&(n=r.z)}for(let s=this.drawn.length;s<this.pool.length;s++)this.pool[s].visible=!1;this.stats.tiles=this.drawn.length,this.stats.depth=n}prune(){let t=this.count>this.budget?45:900,e=n=>{if(!n.children)return;let s=!0;for(let r of n.children)e(r),(r.children||r.visit>=this.frame-t)&&(s=!1);if(s){for(let r of n.children)r.dead=!0,Rd(r),r.geom?.dispose(),r.geom=null;n.children=null,this.count-=4}};for(let n of this.roots)e(n)}refresh(t){let e=this.layers.elevation.id,[n,s,r,a]=t.map(o=>o*mt),l=o=>{if(!(gi(o.x+1,o.z)<=n||gi(o.x,o.z)>=r||Bn(o.y,o.z)<=s||Bn(o.y+1,o.z)>=a)){if(o.z>=7){let h=o.slots[e];h&&(h.abort?.abort(),h.tex?.dispose(),delete o.slots[e]),o.allSea=!1}o.children?.forEach(l)}};this.roots.forEach(l)}setLayer(t,e){let n=this.layers[t];if(this.layers[t]=e,n&&(!e||n.id!==e.id)){let s=r=>{let a=r.slots[n.id];a&&(a.abort?.abort(),a.tex?.dispose(),delete r.slots[n.id]),r.children&&r.children.forEach(s)};this.roots.forEach(s)}}get ready(){let t=(this.layers.globe??this.layers.base).id;return this.roots.every(e=>e.slots[this.layers.elevation.id]?.state>=Yn&&e.slots[t]?.state>=Yn)}};var fh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,_l=class{constructor(t,e,n){this.camera=t,this.dom=e,this.globe=n,this.lon=-30*mt,this.lat=25*mt,this.range=175e5,this.heading=0,this.tilt=0,this.goalRange=this.range,this.goalHeading=0,this.goalTilt=0,this.maxRange=6e7,this.floor=null,this.inCity=!1,this.walk=null,this.groundH=0,this.pos=[0,0,0],this.basis={right:[1,0,0],up:[0,1,0],fwd:[0,0,-1]},this.vel=[0,0],this.fly=null,this.anchor=null,this.idle=!0,this.moved=0,this.onChange=null,this.onTap=null,this.wheelNeedsKey=!1,this.shift=[0,0],this.goalShift=[0,0],this.onWheelBlocked=null,this.pointers=new Map,this.bind(),this.place()}get fovY(){return this.camera.fov*mt}get minRange(){return this.inCity?14:150}size(){return[this.dom.clientWidth||1,this.dom.clientHeight||1]}place(){if(this.walk)return this.placeWalk();let t=this.globe,e=t?t.shared.uExag.value:1,n=t&&t.shared.uWater.value>.5?t.shared.uSea.value:-1e5,s=ii(this.lon,this.lat),r=Xn(En(s.north,Math.cos(this.heading)),s.east,Math.sin(this.heading)),a=En(s.up,ne+this.groundH),l=Xn(En(s.up,Math.cos(this.tilt)),r,-Math.sin(this.tilt)),o=Xn(a,l,this.range),h=Math.hypot(o[0],o[1],o[2]),[u,c]=ml(o),f=this.floor?.(u,c)??null,d=Math.max(t?Math.max(t.heightAt(u,c)??0,n)*e:0,f??-1e9),p=Math.max(f==null?25:1.7,this.range*.04);h<ne+d+p&&(o=En(o,(ne+d+p)/h),h=ne+d+p);let v=fr(Xn(o,a,-1)),g=Xn(En(r,Math.cos(this.tilt)),s.up,Math.sin(this.tilt)),m=fr(ca(g,v)),x=ca(v,m);this.pos=o,this.basis={right:m,up:x,fwd:En(v,-1)},this.camLon=u,this.camLat=c,this.under=d,this.altitude=h-ne-d;let w=Math.max(f==null?1.5:.5,.06*Math.min(this.altitude,this.range)),M=ne-11e3*e,S=Math.sqrt(Math.max(h*h-M*M,0))+Math.sqrt((ne+9e3*e)**2-M*M)+1e3,A=this.camera;A.near=w,A.far=Math.max(S,w*10),A.updateProjectionMatrix(),A.projectionMatrix.elements[8]=-this.shift[0],A.projectionMatrix.elements[9]=-this.shift[1],A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.matrixAutoUpdate=!1,A.matrix.set(m[0],x[0],v[0],o[0],m[1],x[1],v[1],o[1],m[2],x[2],v[2],o[2],0,0,0,1),A.matrixWorld.copy(A.matrix),A.matrixWorldInverse.copy(A.matrix).invert()}placeWalk(){let t=this.walk,e=this.globe,n=e?e.shared.uExag.value:1,s=ii(t.lon,t.lat),r=this.floor?.(t.lon,t.lat)??(e?(e.heightAt(t.lon,t.lat)??0)*n:0),a=ne+r+t.eye+(t.lift??0),l=En(s.up,a),o=Xn(En(s.north,Math.cos(t.yaw)),s.east,Math.sin(t.yaw)),h=fr(Xn(En(o,Math.cos(t.pitch)),s.up,Math.sin(t.pitch))),u=En(h,-1),c=fr(ca(s.up,u)),f=ca(u,c);this.pos=l,this.basis={right:c,up:f,fwd:h},this.lon=this.camLon=t.lon,this.lat=this.camLat=t.lat,this.heading=this.goalHeading=t.yaw,this.tilt=t.pitch,this.groundH=this.under=r,this.altitude=t.eye;let d=ne-11e3*n,p=Math.sqrt(Math.max(a*a-d*d,0))+Math.sqrt((ne+9e3*n)**2-d*d)+1e3,v=this.camera;v.near=.14,v.far=p,v.updateProjectionMatrix(),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.matrixAutoUpdate=!1,v.matrix.set(c[0],f[0],u[0],l[0],c[1],f[1],u[1],l[1],c[2],f[2],u[2],l[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert()}ray(t,e){let[n,s]=this.size(),r=Math.tan(this.fovY/2),a=r*(n/s),l=t/n*2-1-this.shift[0],o=1-e/s*2-this.shift[1],h=this.basis;return fr([h.fwd[0]+h.right[0]*l*a+h.up[0]*o*r,h.fwd[1]+h.right[1]*l*a+h.up[1]*o*r,h.fwd[2]+h.right[2]*l*a+h.up[2]*o*r])}pick(t,e){let n=this.globe,s=n.shared.uExag.value,r=n.shared.uWater.value>.5?n.shared.uSea.value:-1e5,a=this.ray(t,e),l=this.groundH,o=null;for(let h=0;h<5;h++){let u=_d(this.pos,a,ne+l);if(u<0)return o;let c=Xn(this.pos,a,u),[f,d]=ml(c),p=n.heightAt(f,d)??0;o={lon:f,lat:d,height:p,distance:u},l=Math.max(Math.max(p,r)*s,this.floor?.(f,d)??-1e9)}return o}touch(){this.idle=!1,this.fly=null,this.moved=performance.now()}bind(){let t=this.dom;t.style.touchAction="none",t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(this.walk)return;t.setPointerCapture?.(n.pointerId);let s=t.getBoundingClientRect(),r={x:n.clientX-s.left,y:n.clientY-s.top,x0:n.clientX-s.left,y0:n.clientY-s.top,button:n.button,mod:n.ctrlKey||n.shiftKey||n.metaKey||n.altKey,t:performance.now()};this.pointers.set(n.pointerId,r),this.touch(),this.vel=[0,0],this.anchor=null,this.goalRange=this.range,this.pointers.size===1&&(this.grab=this.pick(r.x,r.y)),this.pointers.size===2&&(this.pinch=this.pinchState())}),t.addEventListener("pointermove",n=>{if(this.walk)return;let s=this.pointers.get(n.pointerId),r=t.getBoundingClientRect(),a=n.clientX-r.left,l=n.clientY-r.top;if(this.hover={x:a,y:l},!s)return;let o=a-s.x,h=l-s.y;s.x=a,s.y=l,this.pointers.size===1?s.button===2||s.button===1||s.mod?this.orbit(o,h):this.pan(s,o,h):this.pointers.size===2&&this.pinchMove(),this.onChange?.()});let e=n=>{let s=this.pointers.get(n.pointerId);if(s){if(this.pointers.delete(n.pointerId),this.pointers.size===0&&Math.hypot(s.x-s.x0,s.y-s.y0)<6&&performance.now()-s.t<400&&this.onTap?.(s.x,s.y),this.pointers.size===1){let r=[...this.pointers.values()][0];this.grab=this.pick(r.x,r.y)}this.pinch=null}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{if(this.walk)return;if(this.wheelNeedsKey&&!(n.ctrlKey||n.metaKey)){this.onWheelBlocked?.();return}n.preventDefault(),this.touch();let s=t.getBoundingClientRect(),r=n.deltaMode===1?32:n.deltaMode===2?400:1,a=n.ctrlKey?.012:.0016;this.goalRange=Wt(this.goalRange*Math.exp(Wt(n.deltaY*r,-300,300)*a),this.minRange,this.maxRange);let l=n.clientX-s.left,o=n.clientY-s.top,h=this.pick(l,o);this.anchor=h?{lon:h.lon,lat:h.lat,x:l,y:o}:null},{passive:!1}),t.addEventListener("dblclick",n=>{if(this.walk)return;let s=t.getBoundingClientRect(),r=this.pick(n.clientX-s.left,n.clientY-s.top);r&&this.flyTo({lon:r.lon,lat:r.lat,range:Math.max(this.range*.35,this.minRange*2)},.9)})}pan(t,e,n){let s=[this.lon,this.lat],r=this.pick(t.x,t.y);if(this.grab&&r)this.lon=wn(this.lon+wn(this.grab.lon-r.lon)),this.lat=Wt(this.lat+(this.grab.lat-r.lat),-89*mt,89*mt);else{let[,h]=this.size(),u=2*Math.tan(this.fovY/2)*this.range/h/ne,c=Math.cos(this.heading),f=Math.sin(this.heading);this.lon=wn(this.lon-(e*c+n*f)*u/Math.max(Math.cos(this.lat),.2)),this.lat=Wt(this.lat+(n*c-e*f)*u,-89*mt,89*mt)}this.place();let a=performance.now(),l=Math.max((a-(this.lastPan??a-16))/1e3,.004);this.lastPan=a;let o=[wn(this.lon-s[0])/l,(this.lat-s[1])/l];this.vel=[qn(this.vel[0],o[0],.5),qn(this.vel[1],o[1],.5)]}orbit(t,e){this.heading=this.goalHeading=this.heading-t*.006,this.tilt=this.goalTilt=Wt(this.tilt-e*.005,0,this.maxTilt()),this.place()}maxTilt(){return this.inCity&&this.range<900?qn(88.5,84,Wt((this.range-200)/700,0,1))*mt:qn(84,62,Wt((Math.log10(this.range)-5.2)/1.8,0,1))*mt}pinchState(){let[t,e]=[...this.pointers.values()];return{d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x),cy:(t.y+e.y)/2,cx:(t.x+e.x)/2,range:this.range,heading:this.heading,tilt:this.tilt,grab:this.pick((t.x+e.x)/2,(t.y+e.y)/2)}}pinchMove(){let t=this.pinch;if(!t)return;let[e,n]=[...this.pointers.values()],s=Math.hypot(e.x-n.x,e.y-n.y),r=Math.atan2(n.y-e.y,n.x-e.x),a=(e.y+n.y)/2,l=(e.x+n.x)/2;this.range=this.goalRange=Wt(t.range*t.d/Math.max(s,1),this.minRange,this.maxRange);let o=r-t.ang;o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)>.12&&(this.heading=this.goalHeading=t.heading+(o-Math.sign(o)*.12));let h=a-t.cy,u=Math.abs(s-t.d);Math.abs(h)>24&&u<40&&(this.tilt=this.goalTilt=Wt(t.tilt-(h-Math.sign(h)*24)*.006,0,this.maxTilt())),this.place();let c=this.pick(l,a);t.grab&&c&&(this.lon=wn(this.lon+wn(t.grab.lon-c.lon)),this.lat=Wt(this.lat+(t.grab.lat-c.lat),-89*mt,89*mt),this.place())}flyTo(t,e){let n={lon:this.lon,lat:this.lat,range:this.range,heading:this.heading,tilt:this.tilt},s={lon:t.lon??n.lon,lat:t.lat??n.lat,range:Wt(t.range??n.range,this.minRange,this.maxRange),heading:t.heading??0,tilt:t.tilt??0},r=pr(n.lon,n.lat,s.lon,s.lat),a=Math.max(n.range,s.range,Math.min(r*ne*1.4,24e6)),l=e??Wt(1.4+r*1.6+Math.abs(Math.log(n.range/s.range))*.22+Math.log(a/Math.max(n.range,s.range))*.18,1.2,6.5),o=s.heading-n.heading;o=Math.atan2(Math.sin(o),Math.cos(o)),this.fly={from:n,target:s,hop:a,dur:l,t:0,dh:o,a:xn(n.lon,n.lat),b:xn(s.lon,s.lat),angle:r},this.idle=!1,this.anchor=null,this.vel=[0,0]}zoomBy(t){this.touch(),this.anchor=null,this.goalRange=Wt(this.goalRange*t,this.minRange,this.maxRange)}jump(t){Object.assign(this,{lon:t.lon??this.lon,lat:t.lat??this.lat,range:t.range??this.range,heading:t.heading??0,tilt:t.tilt??0}),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,this.fly=null,this.place()}update(t){if(this.walk){this.fly=null,this.inCity=!0,this.shift=[0,0],this.place();return}let e=this.globe,n=e.shared.uExag.value,s=e.shared.uWater.value>.5?e.shared.uSea.value:-1e5,r=1-Math.exp(-t*7);if(this.shift=[qn(this.shift[0],this.goalShift[0],r),qn(this.shift[1],this.goalShift[1],r)],this.fly){let o=this.fly;o.t=Math.min(1,o.t+t/o.dur);let h=o.hop>3*Math.max(o.from.range,o.target.range),u=fh(h?Wt((o.t-.14)/.72,0,1):o.t);if(o.angle>1e-9){let p=Math.sin(o.angle),v=Math.sin((1-u)*o.angle)/p,g=Math.sin(u*o.angle)/p,[m,x]=ml([o.a[0]*v+o.b[0]*g,o.a[1]*v+o.b[1]*g,o.a[2]*v+o.b[2]*g]);this.lon=m,this.lat=x}let c=fh(o.t),f=Math.exp(qn(Math.log(o.from.range),Math.log(o.target.range),c)),d=Math.sin(Math.PI*o.t);this.range=Math.exp(qn(Math.log(f),Math.log(Math.max(o.hop,f)),h?d**.7:d*d)),this.heading=o.from.heading+o.dh*c,this.tilt=qn(o.from.tilt,o.target.tilt,c)*(h?1-.85*d:1),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,o.t>=1&&(this.fly=null,this.heading=o.target.heading)}else{if(this.idle&&this.spin!==!1&&this.range>4e6&&(this.lon=wn(this.lon+t*.035)),!this.pointers.size){if(Math.abs(this.vel[0])+Math.abs(this.vel[1])>1e-7){this.lon=wn(this.lon+this.vel[0]*t),this.lat=Wt(this.lat+this.vel[1]*t,-89*mt,89*mt);let h=Math.exp(-t*4.5);this.vel=[this.vel[0]*h,this.vel[1]*h]}let o=1-Math.exp(-t*9);if(Math.abs(Math.log(this.goalRange/this.range))>1e-4){if(this.range=Math.exp(qn(Math.log(this.range),Math.log(this.goalRange),o)),this.anchor){this.place();let h=this.pick(this.anchor.x,this.anchor.y);h&&(this.lon=wn(this.lon+wn(this.anchor.lon-h.lon)),this.lat=Wt(this.lat+(this.anchor.lat-h.lat),-89*mt,89*mt))}}else this.anchor=null}this.tilt=Math.min(this.tilt,this.maxTilt())}let a=this.floor?.(this.lon,this.lat)??null;this.inCity=a!=null,this.goalRange<this.minRange&&(this.goalRange=this.minRange);let l=Math.max(Math.max(e.heightAt(this.lon,this.lat)??0,s)*n,a??-1e9);this.groundH=qn(this.groundH,l,1-Math.exp(-t*6)),this.place()}view(t){let e=this.camera,n=new xe().copy(e.matrixWorldInverse);return n.elements[12]=n.elements[13]=n.elements[14]=0,{pos:this.pos,lon:this.camLon,lat:this.camLat,ground:this.under/Math.max(this.globe.shared.uExag.value,1e-6),viewProjectionRel:new xe().multiplyMatrices(e.projectionMatrix,n),pxPerRad:t/(2*Math.tan(this.fovY/2))}}state(){return{lat:this.lat/mt,lon:this.lon/mt,range:this.range,heading:this.heading/mt,tilt:this.tilt/mt}}};var bl=5,wl=class{constructor(t,{samples:e=4,steps:n=20}={}){this.renderer=t,this.samples=e;let s=new Be;s.setAttribute("position",new Le(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),s.setAttribute("uv",new Le(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new pe(s),this.quad.frustumCulled=!1,this.quadScene=new Wn,this.quadScene.add(this.quad),this.quadCam=new bs(-1,1,1,-1,0,1);let r=(l,o)=>new Xe({vertexShader:Nd,fragmentShader:l,uniforms:o,glslVersion:is,depthTest:!1,depthWrite:!1}),a={tDepth:{value:null},uCam:{value:new ht},uRight:{value:new ht},uUp:{value:new ht},uFwd:{value:new ht},uTan:{value:new ie},uShift:{value:new ie},uNear:{value:1},uFar:{value:2},uSun:{value:new ht}};this.atmo=r(Ud,{...a,uHaze:{value:1},uSteps:{value:n},uAir:{value:1},uThick:{value:1}}),this.comp=r(kd,{...a,tColor:{value:null},tLight:{value:null},tThrough:{value:null},uPixAngle:{value:.001}}),this.down=r(Od,{tSrc:{value:null},uTexel:{value:new ie},uThreshold:{value:0}}),this.up=r(Bd,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ie}}),this.final=r(zd,{tColor:{value:null},tBloom:{value:null},uTexel:{value:new ie},uExposure:{value:1},uBloom:{value:.06},uVignette:{value:.35}}),this.w=this.h=0}setSize(t,e){if(t===this.w&&e===this.h)return;this.w=t,this.h=e,this.dispose();let n={type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!1},s=new ei(t,e);s.type=Tn,s.minFilter=s.magFilter=Ue,this.rtScene=new Oe(t,e,{...n,depthBuffer:!0,depthTexture:s,samples:this.samples}),this.rtAir=new Oe(t,e,n),this.rtHalf=new Oe(Math.max(2,t>>1),Math.max(2,e>>1),{...n,count:2,minFilter:Ue,magFilter:Ue}),this.rtDown=[],this.rtUp=[];for(let r=0;r<bl;r++){let a=Math.max(2,t>>r+1),l=Math.max(2,e>>r+1);this.rtDown.push(new Oe(a,l,n)),r<bl-1&&this.rtUp.push(new Oe(a,l,n))}}dispose(){for(let t of[this.rtScene,this.rtAir,this.rtHalf,...this.rtDown??[],...this.rtUp??[]])t?.dispose();this.rtScene?.depthTexture?.dispose()}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,s=[]){let r=this.renderer;r.setRenderTarget(this.rtScene),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let f of s)r.render(f.scene,f.camera),r.setRenderTarget(this.rtScene);let a=this.atmo.uniforms;a.tDepth.value=this.rtScene.depthTexture,a.uCam.value.set(n.pos[0]/1e3,n.pos[1]/1e3,n.pos[2]/1e3),a.uRight.value.set(...n.basis.right),a.uUp.value.set(...n.basis.up),a.uFwd.value.set(...n.basis.fwd),a.uTan.value.set(n.tanY*n.aspect,n.tanY),a.uShift.value.set(n.shift[0],n.shift[1]),a.uNear.value=n.near,a.uFar.value=n.far,a.uSun.value.copy(n.sun);let l=Math.hypot(n.pos[0],n.pos[1],n.pos[2])/1e3-6371,o=Math.min(Math.max((l-1500)/9e3,0),1);a.uThick.value=1+1.1*o*o*(3-2*o),this.pass(this.atmo,this.rtHalf);let h=this.comp.uniforms;h.tColor.value=this.rtScene.texture,h.tLight.value=this.rtHalf.textures[0],h.tThrough.value=this.rtHalf.textures[1],h.uPixAngle.value=2*n.tanY/this.h,this.pass(this.comp,this.rtAir);let u=this.rtAir;for(let f=0;f<bl;f++){let d=this.down.uniforms;d.tSrc.value=u.texture,d.uTexel.value.set(1/u.width,1/u.height),d.uThreshold.value=f===0?1.1:0,this.pass(this.down,this.rtDown[f]),u=this.rtDown[f]}for(let f=bl-2;f>=0;f--){let d=this.up.uniforms;d.tSrc.value=u.texture,d.tAdd.value=this.rtDown[f].texture,d.uTexel.value.set(1/u.width,1/u.height),this.pass(this.up,this.rtUp[f]),u=this.rtUp[f]}let c=this.final.uniforms;c.tColor.value=this.rtAir.texture,c.tBloom.value=u.texture,c.uTexel.value.set(1/this.w,1/this.h),this.pass(this.final,null)}};var ph={version:2,checked:"2026-11-12",what:"How the 3D city on the globe was built from Plato's Critias: which parts follow the text, with the passage, and which parts are our choices because the text is silent. The code is source/engine/city.js and source/engine/city/. Every mesh in the model names one id from this file.",text:{work:"Plato, Critias",translation:"R. G. Bury, Loeb Classical Library, 1929",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.",checked_against:"https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg032/tlg0059.tlg032.perseus-eng2.xml"},units:{stadion_m:185,plethron:"one sixth of a stadion",note:"The stadion is drawn at 185 m. data/plato.json lists the other lengths scholars use; the whole city scales with it."},from_text:[{id:"hill",what:"The city stands on a hill that is low on all sides, about 50 stadia from the sea",ref:"Critias 113c",quote:"at a distance of about 50 stades, there stood a mountain that was low on all sides",param:"hill"},{id:"rings",what:"Three rings of sea and two of land round a central hill",ref:"Critias 113d",quote:"he made circular belts of sea and land enclosing one another alternately, some greater, some smaller, two being of land and three of sea",param:"rings"},{id:"ring-widths",what:"Ring widths from the centre: water 1, land 2, water 2, land 3, water 3 stadia",ref:"Critias 115e",quote:"The greatest of the circles into which a boring was made for the sea was three stades in breadth, and the circle of land next to it was of equal breadth; and of the second pair of circles that of water was two stades in breadth and that of dry land equal again to the preceding one of water; and the circle which ran round the central island itself was of a stade's breadth.",param:"rings"},{id:"island",what:"Central island five stadia across",ref:"Critias 116a",quote:"this island, wherein stood the royal palace, was of five stades in diameter",param:"islandDiameter"},{id:"island-gardens",what:"The central island set in order by the god, bearing every kind of food",ref:"Critias 113e",quote:"producing out of the earth all kinds of food in plenty"},{id:"canal",what:"Canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stadia long",ref:"Critias 115d",quote:"beginning at the sea, they bored a channel right through to the outermost circle, which was three plethra in breadth, one hundred feet in depth, and fifty stades in length",param:"canalLength, canalWidthPlethra"},{id:"canal-mouth",what:"The mouth of the canal on the sea, wide enough for the largest ships",ref:"Critias 115d",quote:"they made the entrance to it from the sea like that to a harbor by opening out a mouth large enough for the greatest ships to sail through",drawn:!1,note:"At the sea, 50 stadia out: beyond the modelled ground. The canal's course is drawn as a line."},{id:"harbours",what:"Three harbours: the three rings of water",ref:"Critias 117d",quote:"after crossing the three outer harbors"},{id:"ship-passages",what:"Roofed passages for one trireme through the rings of land, beside the bridges",ref:"Critias 115d-e",quote:"through the circles of land, which divided those of sea, over against the bridges they opened out a channel leading from circle to circle, large enough to give passage to a single trireme; and this they roofed over above so that the sea-way was subterranean"},{id:"bridges",what:"Bridges over the rings of water, a plethron wide, with towers and gates",ref:"Critias 115c, 116a",quote:"the bridge, which was a plethrum in breadth \u2026 and upon the bridges on each side, over against the passages for the sea, they erected towers and gates",param:"bridgeWidthPlethra"},{id:"bridge-gates",what:"Towers and gates on the bridges, on each side, where the sea passes",ref:"Critias 116a",quote:"upon the bridges on each side, over against the passages for the sea, they erected towers and gates"},{id:"ring-walls",what:"A stone wall round the island, round each ring and along both sides of the bridge",ref:"Critias 116a",quote:"Now the island and the circles and the bridge, which was a plethrum in breadth, they encompassed round about, on this side and on that, with a wall of stone"},{id:"stone",what:"White, black and red stone, quarried on the spot",ref:"Critias 116a-b",quote:"the stone they quarried beneath the central island all round, and from beneath the outer and inner circles, some of it being white, some black and some red"},{id:"rock-docks",what:"Two docks cut into the rock",ref:"Critias 116b",quote:"while quarrying it they constructed two inner docks, hollowed out and roofed over by the native rock"},{id:"patterned-buildings",what:"Buildings of one colour of stone, and buildings patterned in white, black and red",ref:"Critias 116b",quote:"of the buildings some they framed of one simple color, in others they wove a pattern of many colors by blending the stones for the sake of ornament",shape:"ours"},{id:"walls",what:"Walls faced with brass (outer ring), tin (inner ring) and orichalcum (citadel)",ref:"Critias 116b-c",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle; and that of the inner one they coated with tin; and that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"wall-brass",what:"The wall round the outermost ring, covered with brass",ref:"Critias 116b",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle"},{id:"wall-tin",what:"The wall round the inner ring, coated with tin",ref:"Critias 116b",quote:"that of the inner one they coated with tin"},{id:"wall-orichalcum",what:"The wall round the acropolis, coated with orichalcum",ref:"Critias 116b-c",quote:"that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"palace",what:"The royal palace on the central island, enlarged by every king",ref:"Critias 115c-d",quote:"they made of it an abode amazing to behold for the magnitude and beauty of its workmanship",shape:"ours"},{id:"shrine",what:"Shrine of Cleito and Poseidon at the centre, inside a wall of gold; kept as holy ground",ref:"Critias 116c",quote:"In the center there stood a temple sacred to Cleito and Poseidon, which was reserved as holy ground, and encircled with a wall of gold",shape:"ours"},{id:"shrine-wall",what:"The wall of gold round the shrine of Cleito and Poseidon",ref:"Critias 116c",quote:"encircled with a wall of gold"},{id:"temple",what:"Temple of Poseidon: a stadion long, 3 plethra wide, silver outside, gold pinnacles",ref:"Critias 116d",quote:"the temple of Poseidon himself was a stade in length, three plethra in breadth, and of a height which appeared symmetrical therewith \u2026 All the exterior of the temple they coated with silver, save only the pinnacles, and these they coated with gold.",param:"templeLength, templeWidth"},{id:"pinnacles",what:"Gold on the pinnacles of the temple",ref:"Critias 116d",quote:"save only the pinnacles, and these they coated with gold"},{id:"temple-ceiling",what:"Inside the temple: a ceiling of ivory, varied with gold, silver and orichalcum",ref:"Critias 116d",quote:"they made the roof all of ivory in appearance, variegated with gold and silver and orichalcum"},{id:"temple-interior",what:"Inside the temple: walls, pillars and floor covered with orichalcum",ref:"Critias 116d",quote:"all the rest of the walls and pillars and floors they covered with orichalcum"},{id:"poseidon",what:"A gold Poseidon in a chariot with six winged horses, his head touching the roof",ref:"Critias 116d-e",quote:"golden statues, one being that of the God standing on a chariot and driving six \u2026 winged steeds, his own figure so tall as to touch the ridge of the roof"},{id:"nereids",what:"A hundred Nereids on dolphins round him",ref:"Critias 116e",quote:"round about him a hundred Nereids on dolphins"},{id:"votive-inside",what:"Many other statues inside, given by private men",ref:"Critias 116e",quote:"it contained also many other images, the votive offerings of private men",shape:"ours"},{id:"pillar",what:"A pillar of orichalcum inside the temple, with the laws on it",ref:"Critias 119c-d",quote:"a pillar of orichalcum, which was placed within the temple of Poseidon in the center of the island"},{id:"statues",what:"Gold statues of the kings and their wives round the temple",ref:"Critias 116e",quote:"outside, round about the temple, there stood images in gold of all the princes, both themselves and their wives"},{id:"votive-outside",what:"Other offerings round the temple, from kings, citizens and subject peoples",ref:"Critias 116e",quote:"together with many other votive offerings both of the kings and of private persons",shape:"ours"},{id:"altar",what:"The altar, matching the temple in size and workmanship",ref:"Critias 117a",quote:"in respect of its size and its workmanship, harmonized with its surroundings",shape:"ours"},{id:"bulls",what:"Bulls loose in the precinct of Poseidon",ref:"Critias 119d",quote:"In the sacred precincts of Poseidon there were bulls at large",drawn:!1,note:'No animals or people are drawn; see the choice "no-figures".'},{id:"springs",what:"A hot and a cold spring on the central island, with buildings and trees round them",ref:"Critias 113e, 117a-b",quote:"The springs they made use of, one kind being of cold, another of warm water \u2026 these they surrounded with buildings and with plantations of trees",shape:"ours"},{id:"reservoirs",what:"Basins round the springs, some open to the sky and some roofed for hot baths in winter",ref:"Critias 117b",quote:"they set reservoirs round about, some under the open sky, and others under cover to supply hot baths in the winter",shape:"ours"},{id:"baths",what:"Separate baths for the kings, for citizens, for women, and for horses and beasts of burden",ref:"Critias 117b",quote:"they put separate baths for the kings and for the private citizens, besides others for women, and others again for horses and all other beasts of burden",shape:"ours"},{id:"grove",what:"The sacred grove of Poseidon",ref:"Critias 117b",quote:"the sacred grove of Poseidon, which contained trees of all kinds that were of marvellous beauty and height"},{id:"aqueducts",what:"Channels that carry the spring water to the outer rings by the bridges",ref:"Critias 117b",quote:"by means of channels they led the water to the outer circles over against the bridges",shape:"ours"},{id:"ring-buildings",what:"Temples, gardens, exercise grounds and barracks on the rings of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods, and many gardens and many exercising grounds \u2026 in each of the circular belts of island"},{id:"ring-temples",what:"Many temples on each ring of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods",shape:"ours"},{id:"gardens",what:"Many gardens on each ring of land",ref:"Critias 117c",quote:"and many gardens and many exercising grounds"},{id:"gymnasia",what:"Exercise grounds for men on each ring of land",ref:"Critias 117c",quote:"many exercising grounds, some for men and some set apart for horses",shape:"ours"},{id:"horse-grounds",what:"Exercise grounds for horses, kept apart, on each ring of land",ref:"Critias 117c",quote:"some set apart for horses, in each of the circular belts of island",shape:"ours"},{id:"racecourse",what:"Racecourse a stadion wide, running round the middle of the larger ring",ref:"Critias 117c",quote:"in the center of the large island a racecourse laid out for horses, which was a stade in width, while as to length, a strip which ran round the whole circumference",param:"racecourseWidth"},{id:"barracks",what:"Barracks for most of the spearmen on both sides of the racecourse",ref:"Critias 117c",quote:"round about it, on this side and on that, were barracks for the greater part of the spearmen",shape:"ours"},{id:"guard-house",what:"The guard house of the more trusted spearmen, on the smaller ring",ref:"Critias 117c-d",quote:"was posted in the smaller circle, which was nearer the acropolis",shape:"ours"},{id:"guard-dwellings",what:"Dwellings of the most trusted guards, on the acropolis round the kings",ref:"Critias 117d",quote:"had dwellings granted to them within the acropolis round about the persons of the kings",shape:"ours"},{id:"shipyards",what:"Shipyards full of triremes and their gear",ref:"Critias 117d",quote:"the shipyards were full of triremes and all the tackling that belongs to triremes",shape:"ours"},{id:"merchant-ships",what:"Merchant ships filling the canal and the largest harbour",ref:"Critias 117e",quote:"the sea-way and the largest harbor were filled with ships and merchants coming from all quarters",shape:"ours"},{id:"outer-wall",what:"Outer wall 50 stadia from the largest ring, its ends meeting at the canal's mouth on the sea",ref:"Critias 117e",quote:"a wall which began at the sea and ran round in a circle, at a uniform distance of fifty stades from the largest circle and harbor, and its ends converged at the seaward mouth of the channel",param:"outerWallDistance"},{id:"houses",what:"The town inside the outer wall: many houses set close together",ref:"Critias 117e",quote:"The whole of this wall had numerous houses built on to it, set close together",note:'Bury makes the houses line the wall. The Greek is "touto de pan synoikeito hypo pollon kai pyknon oikeseon": all of this was settled with many dense dwellings, which Jowett gives as "The entire area was densely crowded with habitations". We draw the area filled, after the Greek and Jowett.'},{id:"faces-south",what:"The sea lies south of the city",ref:"Critias 118a-b",quote:"this region, all along the island, faced towards the South and was sheltered from the Northern blasts",param:"seaBearing"}],choices:[{id:"stadion",what:"185 m to the stadion",why:"Plato gives stadia, not metres. Lengths from about 157 m to 192 m are used by scholars. The whole city scales with this number."},{id:"style",what:"One style throughout: Greek building forms of Plato's own century (columns, gabled roofs with tiles, ashlar walls with battlements), made strange by the materials the text gives: three colours of stone laid in bands and patterns, and metal skins on walls and temple",why:'Plato wrote about 360 BCE for Athenian readers and uses Greek building words (teichos, pyrgoi, pylai, neosoikoi, gymnasia, hippodromos, neos). He sets the city 9,000 years earlier and says of the temple that "there was something of the barbaric in its appearance" (116d). Rings of wall, each differently coloured and the innermost coated in silver and gold, are what Herodotus (1.98) reports of Ecbatana, the Median capital: a picture of eastern royal splendour his readers knew. So the forms are Greek and the surfaces are the foreign part. This is a drawing of how a Greek reader could have pictured it, not of any real place.',sources:[{what:"Herodotus, Histories 1.98, tr. A. D. Godley (1920): the seven ringed walls of Ecbatana, their battlements white, black, purple, blue, orange, silver and gold",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D98",read:"2026-11-12"}]},{id:"heights",what:"Heights: banks 8 m above the water with a quay 2 m above it, the hill 24 m above the banks, walls 11 m with towers to 17 m, gate towers 21 m",why:'The text says only that the lips of the rings stood "a sufficient height above the level of the sea" for a roofed ship passage (115e), and gives no wall heights. The banks are as high as a trireme without its mast needs to pass under a roof of rock.'},{id:"walls-both-shores",what:"Each ring of land has a wall on both shores, set back from the water behind a harbour strip, and both are faced in that ring's metal on the side towards the water",why:`116a puts the walls round the island, the rings and the bridge "on this side and on that"; 116b names one wall per ring for the metal. We wall both shores and face both in that ring's metal.`},{id:"wall-towers",what:"Towers at intervals along the ring walls, battlements and a walk on top",why:"Towers and gates are stated only for the bridges (116a). A Greek city wall of Plato's time had towers and a crenellated walk."},{id:"metal-look",what:'How the metals look: brass a yellow gold-brown, tin a soft grey-white, orichalcum a red gold "sparkling like fire", silver and gold bright; all slightly weathered sheet, with seams',why:'The text names the metals and says the brass was put on "as though with plaster" (116b). Orichalcum is unknown ("now known only by name", 114e); a red-gold copper alloy is the usual guess.'},{id:"road-offset",what:"One straight road from the town to the palace, 96 m east of the canal's line; the roofed ship passages through the rings of land are on the canal's line",why:'Bridges and ship passages are "over against" each other (115e, 116a). Their exact relation is not given. Ships come up the canal and go straight on through the passages; the road and its bridges run beside them.'},{id:"bridge-form",what:"Bridges of stone on piers with flat spans, a parapet wall each side, the water channel under the roadway",why:"The text gives only the width, a plethron (116a), the walls on both sides and the towers and gates. Greek bridges of the time were piers with corbelled or lintelled openings; the arch was not in general use."},{id:"gate-form",what:"Each bridge end has two towers with a gate between, the gate leaves faced in the ring's metal",why:"116a states towers and gates, no form."},{id:"aqueduct-form",what:"The spring water crosses each bridge in a covered stone channel along the parapet, and falls into basins on the rings",why:'117b says channels led the water to the outer rings by the bridges (Jowett: "by aqueducts along the bridges"). Their form is not given.'},{id:"quays",what:"A level harbour strip at quay height between the water and the foot of each bank, with mooring posts, storehouses on the merchants' harbour and steps up the banks",why:'Not described. Harbours "full of ships" (117e) need them.'},{id:"rock-dock-place",what:"The two rock-cut docks open off the innermost ring of water, in the flank of the central island, as two pairs of roofed slips",why:"116b: two inner docks hollowed out and roofed by the rock, made while quarrying under the island and the rings. The Greek (neosoikous koilous diplous entos) can also be read as double ship sheds. Where they were is not said."},{id:"ship-sheds",what:"Rows of roofed ship sheds on slipways along the three inner harbour strips, each 40 m by 7.4 m, in groups of six",why:"The text has shipyards full of triremes (117d), not their layout. Sheds are sized to the trireme we draw."},{id:"triremes",what:"Triremes about 37 m long and 5.5 m in beam, with a ram, three banks of oars, one mast and an upturned stern",why:"Plato says triremes (115e, 117d) and nothing of their shape. The form follows the Athenian trireme of his own time as rebuilt in the trial ship Olympias.",sources:[{what:"Olympias, the reconstruction of an Athenian trireme (built 1985 to 1987 to John Coates's drawings; 170 oars in three banks; bronze ram)",url:"https://en.wikipedia.org/wiki/Olympias_(trireme)",read:"2026-11-12"}]},{id:"merchantmen",what:"Round-hulled merchant ships 14 to 24 m long with one square sail",why:'117e says only "ships and merchants coming from all quarters".'},{id:"temple-form",what:"Poseidon's temple as a Greek temple with a colonnade all round, on four steps in the three stones, 11 by 22 columns, with a sun disc of gold in each gable",why:"Plato gives its size and metals and says it looked somewhat barbaric (116d). Its form is not described. A stadion by three plethra (185 by 92.5 m) is far larger than any Greek temple; the columns here are 3.4 m thick and 30 m high."},{id:"temple-height",what:"The temple is 41 m to the top of the cornice and 54 m to the ridge",why:'116d: "of a height which appeared symmetrical therewith". We use the proportion of height to width on the front of the Parthenon, 4 to 9.',sources:[{what:"Parthenon: a 4:9 proportion in the elevation",url:"https://en.wikipedia.org/wiki/Parthenon",read:"2026-11-12"}]},{id:"pinnacle-form",what:"The pinnacles are the ornaments on the ridge ends and corners of the roof (akroteria), as tall finials",why:"The Greek word is akroteria. Their shape is not given."},{id:"temple-interior-layout",what:"Inside: one great room with two rows of pillars, Poseidon's chariot at the far end facing the door, the Nereids in rows down both sides, the pillar of the laws before the statue",why:"116d-e and 119c-d list what was inside, not where it stood."},{id:"figure-form",what:"Statues are drawn as plain, smooth figures without faces or detail",why:"We will not invent portraits. The text gives their material (gold) and who they are."},{id:"counts",what:"Numbers: 60 royal statues round the temple, some 30 other offerings, 24 statues inside, towers, ships, sheds, buildings and trees",why:"Not given, except 100 Nereids (116e) and 1,200 ships for the whole fleet (119b). Ten kings and their wives over many generations would be more statues than we draw."},{id:"altar-form",what:"A long stepped altar of white stone before the east front of the temple, 46 m long",why:"117a says only that it matched its surroundings in size and workmanship."},{id:"shrine-form",what:"The shrine of Cleito and Poseidon is a round building with a ring of columns and an open eye in its roof; the wall of gold is 4.5 m high and has a gate towards the sea",why:`116c: holy ground, kept closed (abaton), inside a wall of gold. Nothing more: no shape and no size for either. A round building is one of the forms Greek builders used for a holy place. The gate and the open door are ours, because the shrine is used as this community's hall (see "hall").`},{id:"palace-plan",what:"The palace as ranges of two storeys round courts north of the shrine, with a great hall behind a porch of red columns and a taller hall behind it",why:"115c-d: each king added to it. No plan is given."},{id:"baths-layout",what:"Two round spring houses, two open basins and two roofed ones, three bath buildings round courts and a long trough hall for horses, in the north-east of the island; a stone channel carries the outflow to the grove and to the bridge",why:"117a-b lists them, without a plan."},{id:"grove-trees",what:"The grove: tall cypresses, planes and pines; gardens: olives, fruit trees and vines in rows",why:`117b: "trees of all kinds" of great height and beauty. 115a-b lists the island's fruits. The kinds drawn are Mediterranean, which is a choice.`},{id:"ring-layout",what:"How the rings of land are laid out: temples in walled precincts, gymnasia as colonnaded courts, horse grounds as fenced paddocks, gardens between, a road round each ring",why:"117c lists them and puts the racecourse in the middle of the larger ring with barracks on both sides. The rest of the plan is ours."},{id:"racecourse-form",what:"The racecourse as a sand track a stadion wide between low stone kerbs, with a ring of marker columns down its middle and stone seats by the road",why:"117c gives its width and that it ran round the whole ring."},{id:"house-form",what:"Houses of one and two storeys in blocks round yards, plastered, with tiled roofs, sixteen avenues leading to the harbour",why:"Not described."},{id:"extent",what:"Only the rings and the town within 2.5 stadia of the harbour are modelled, on made ground that ends in a grass bank; the outer wall and the rest of the canal are drawn as lines over the real land",why:"The wall is 50 stadia out (117e), so the whole city is about 23 km across. Levelling that much ground would hide the place it stands on."},{id:"houses-reading",what:"The town fills the ground inside the outer wall, rather than lining the wall",why:'Translations differ at 117e: see the entry "houses". The modelled band shows the nearest part of it.'},{id:"no-figures",what:"No people or animals are drawn",why:"The text has crowds, merchants, spearmen, horses and bulls loose in the precinct (119d). Figures would be invention at every step, and badly drawn ones spoil the scale. Doors, steps, ships and trees give the scale instead."},{id:"water",what:"The water in the rings is calm sea water about 30 m deep, clear enough to see the quay foot",why:"The canal is 100 feet deep (115d). The depth of the rings is not given."},{id:"plain",what:"The great plain, its ditch and canals are not modelled",why:"They are described (118a-e: a plain 3,000 by 2,000 stadia, a ditch a stadion wide and 10,000 stadia long) and are still to do."},{id:"hall",what:"The shrine stands open, and inside it is this community's hall: the research on its wall, a globe on its table",why:"Plato says only that the shrine stood in the centre, was reserved as holy ground, and had a wall of gold round it (116c). He gives it no shape and says nothing of its inside. We made the one closed place in the text the room where the search is shown and people meet. Nothing inside it is from the text."},{id:"home-site",what:"When nobody has stood it anywhere, the city stands on the open Atlantic at 35.3\xB0N, 9.9\xB0W, its canal running south",why:"The text says only that the island lay in front of the Pillars of Heracles, out in the Atlantic (Timaeus 24e). No island is there: the elevation tiles the globe uses put the sea floor at that spot 3,762 m down. The city is set where the words point so that no place anyone has proposed is favoured. It can be stood on any of them instead."}],shape_note:`An entry with "shape": "ours" is stated by Plato, but he gives it no size or form, so everything about how it is drawn is our choice. The page's text-only view draws those pale, together with the choices. An entry with "drawn": false is in the text and not in the model.`};var Ml={stadion:185,islandDiameter:5,rings:[["water",1],["land",2],["water",2],["land",3],["water",3]],canalLength:50,canalWidthPlethra:3,bridgeWidthPlethra:1,templeLength:1,templeWidth:.5,racecourseWidth:1,outerWallDistance:50,bank:8,hill:24,wallHeight:11,wallThickness:4.5,seaBearing:180,modelledTown:2.5},Gd=(i={})=>{let t={...Ml,...i},e=t.stadion,n=e/6,s=e/185,r=[t.islandDiameter/2*e];for(let[,rt]of t.rings)r.push(r[r.length-1]+rt*e);let[a,l,o,h,u,c]=r,f=t.bank,d=2,p=t.wallHeight,v=t.wallThickness,g=t.canalWidthPlethra*n/2,m=t.bridgeWidthPlethra*n/2,x={isle:12*s,r1in:46*s,r1out:46*s,r2in:46*s,r2out:40*s,town:36*s},w=a-x.isle,M=l+x.r1in,S=o-x.r1out,A=h+x.r2in,y=u-x.r2out,T=c+x.town,F=c+t.modelledTown*e,_=F+70*s,B=c+t.outerWallDistance*e,J=g+m+34*s,at=7.5,L=f+t.hill,X=a*.6,O=a*.76,N=L-5,j=f+3,Y=Math.sqrt(X*X-J*J),V=O+44*s,U=(A+y)/2,H=t.racecourseWidth*e/2,W=rt=>Math.sqrt(Math.max(0,rt*rt-J*J)),z=[[W(w),W(M)],[W(S),W(A)],[W(y),W(T)]],st=rt=>Math.abs(rt-J)<=m,ot=rt=>rt<=X?L:rt<=O?N+(j-N)*(rt-X)/(O-X):f,ut=(rt,et,gt)=>{let ct=Math.hypot(rt,et),Mt=(Ft,Dt)=>(gt&&(gt.kind=Dt),Ft);if(ct>_)return null;let Tt=-et;if(st(rt)&&Tt>0){for(let[Ft,Dt]of z)if(Tt>=Ft-1&&Tt<=Dt+1)return Mt(f,"bridge");if(Tt<=V&&Tt>=Y)return Mt(L+(f-L)*(Tt-Y)/(V-Y),"ramp")}return ct<=w?Mt(ot(ct),ct<=X?"plateau":ct<=O?"slope":"island"):ct<=a?Mt(d,"quay"):ct<l?Mt(0,"water"):ct<=M||ct>=S&&ct<=o?Mt(Math.abs(rt)<at&&Tt>0?0:d,"quay"):ct<=S?Mt(f,"ring-inner"):ct<h?Mt(0,"water"):ct<=A||ct>=y&&ct<=u?Mt(Math.abs(rt)<at&&Tt>0?0:d,"quay"):ct<=y?Mt(f,Math.abs(ct-U)<H?"racecourse":"ring-outer"):ct<c||Math.abs(rt)<g&&Tt>0?Mt(0,"water"):ct<=T?Mt(d,"quay"):ct<=F?Mt(f,"town"):Mt(f+(-3-f)*(ct-F)/(_-F),"bank")},dt=-Math.PI/2;return{SEA:dt,roadAngle:rt=>dt+Math.asin(Math.min(1,J/rt)),arcsExcept:rt=>{let et=rt.map(([ct,Mt])=>{let Tt=ct-Mt;return Tt=(Tt%(2*Math.PI)+2*Math.PI)%(2*Math.PI),[Tt,Tt+2*Mt]}).sort((ct,Mt)=>ct[0]-Mt[0]);if(!et.length)return[[0,2*Math.PI]];let gt=[];for(let ct=0;ct<et.length;ct++){let Mt=et[ct][1],Tt=ct+1<et.length?et[ct+1][0]:et[0][0]+2*Math.PI;Tt-Mt>1e-6&&gt.push([Mt,Tt])}return gt},P:t,S:e,k:s,plethron:n,shores:r,rIsle:a,rW1:l,rL1:o,rW2:h,rL2:u,rW3:c,B:f,Q:d,H:p,T:v,canalHalf:g,bridgeHalf:m,strip:x,rA:w,r1a:M,r1b:S,r2a:A,r2b:y,rT:T,core:F,edge:_,rWall:B,off:J,tunnelHalf:at,Zp:L,Rp:X,Rs:O,zSlopeTop:N,zSlopeFoot:j,rampTop:Y,rampFoot:V,rcMid:U,rcHalf:H,along:W,bridges:z,onRoad:st,islandZ:ot,groundZ:ut}};var re=Math.PI*2,zn=i=>()=>(i=i*1664525+1013904223>>>0)/4294967296;var vi=class{constructor(){this.c=1,this.s=0,this.x=0,this.y=0,this.z=0}set(t=0,e=0,n=0,s=0){return this.c=Math.cos(s),this.s=Math.sin(s),this.x=t,this.y=e,this.z=n,this}push(t,e,n,s=0){let r=[this.c,this.s,this.x,this.y,this.z],a=Math.cos(s),l=Math.sin(s),o=this.x+this.c*t-this.s*e,h=this.y+this.s*t+this.c*e,u=this.c*a-this.s*l,c=this.s*a+this.c*l;return this.c=u,this.s=c,this.x=o,this.y=h,this.z+=n,r}pop(t){[this.c,this.s,this.x,this.y,this.z]=t}},xi=class{constructor(t,e){this.F=t,this.id=e,this.cap=1024,this.icap=2048,this.pos=new Float32Array(this.cap*3),this.nrm=new Int8Array(this.cap*4),this.col=new Uint8Array(this.cap*4),this.idx=new Uint32Array(this.icap),this.nv=0,this.ni=0,this.s=0,this.r=255,this.g=255,this.b=255}surf(t,e){return this.s=t,e?(this.r=e[0],this.g=e[1],this.b=e[2]):this.r=this.g=this.b=255,this}room(t,e){if(this.nv+t>this.cap){for(;this.nv+t>this.cap;)this.cap*=2;let n=new Float32Array(this.cap*3);n.set(this.pos.subarray(0,this.nv*3)),this.pos=n;let s=new Int8Array(this.cap*4);s.set(this.nrm.subarray(0,this.nv*4)),this.nrm=s;let r=new Uint8Array(this.cap*4);r.set(this.col.subarray(0,this.nv*4)),this.col=r}if(this.ni+e>this.icap){for(;this.ni+e>this.icap;)this.icap*=2;let n=new Uint32Array(this.icap);n.set(this.idx.subarray(0,this.ni)),this.idx=n}}v(t,e,n,s,r,a,l=1){this.room(1,0);let o=this.F,h=this.nv,u=h*3,c=h*4;return this.pos[u]=o.x+o.c*t-o.s*e,this.pos[u+1]=o.y+o.s*t+o.c*e,this.pos[u+2]=o.z+n,this.nrm[c]=(o.c*s-o.s*r)*127,this.nrm[c+1]=(o.s*s+o.c*r)*127,this.nrm[c+2]=a*127,this.col[c]=this.r*l,this.col[c+1]=this.g*l,this.col[c+2]=this.b*l,this.col[c+3]=this.s,this.nv++}tri3(t,e,n){this.room(0,3),this.idx[this.ni++]=t,this.idx[this.ni++]=e,this.idx[this.ni++]=n}quad4(t,e,n,s){this.room(0,6);let r=this.idx,a=this.ni;r[a++]=t,r[a++]=e,r[a++]=n,r[a++]=t,r[a++]=n,r[a++]=s,this.ni=a}quad(t,e,n,s,r=1,a=r,l=a,o=r){let h=e[0]-t[0],u=e[1]-t[1],c=e[2]-t[2],f=s[0]-t[0],d=s[1]-t[1],p=s[2]-t[2],v=u*p-c*d,g=c*f-h*p,m=h*d-u*f,x=Math.hypot(v,g,m)||1;v/=x,g/=x,m/=x;let w=this.v(t[0],t[1],t[2],v,g,m,r);return this.v(e[0],e[1],e[2],v,g,m,a),this.v(n[0],n[1],n[2],v,g,m,l),this.v(s[0],s[1],s[2],v,g,m,o),this.quad4(w,w+1,w+2,w+3),this}tri(t,e,n,s=1,r=s,a=s){let l=e[0]-t[0],o=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],d=o*f-h*c,p=h*u-l*f,v=l*c-o*u,g=Math.hypot(d,p,v)||1;d/=g,p/=g,v/=g;let m=this.v(t[0],t[1],t[2],d,p,v,s);return this.v(e[0],e[1],e[2],d,p,v,r),this.v(n[0],n[1],n[2],d,p,v,a),this.tri3(m,m+1,m+2),this}wall(t,e,n,s,r,a,l=1,o=l){return this.quad([t,e,r],[n,s,r],[n,s,a],[t,e,a],l,l,o,o)}slab(t,e,n,s,r,a=0,l=1){let o=Math.cos(a)/2,h=Math.sin(a)/2,u=o*s,c=h*s,f=-h*r,d=o*r;return this.quad([t-u-f,e-c-d,n],[t+u-f,e+c-d,n],[t+u+f,e+c+d,n],[t-u+f,e-c+d,n],l)}box(t,e,n,s,r,a,l=0,{top:o=!0,bottom:h=!1,foot:u=1,head:c=u,sides:f=15,topShade:d=1}={}){let p=Math.cos(l)/2,v=Math.sin(l)/2,g=p*s,m=v*s,x=-v*r,w=p*r,M=n+a,S=[[t-g-x,e-m-w],[t+g-x,e+m-w],[t+g+x,e+m+w],[t-g+x,e-m+w]];for(let A=0;A<4;A++)if(f&1<<A){let y=S[A],T=S[(A+1)%4];this.wall(y[0],y[1],T[0],T[1],n,M,u,c)}return o&&this.quad([S[0][0],S[0][1],M],[S[1][0],S[1][1],M],[S[2][0],S[2][1],M],[S[3][0],S[3][1],M],d),h&&this.quad([S[3][0],S[3][1],n],[S[2][0],S[2][1],n],[S[1][0],S[1][1],n],[S[0][0],S[0][1],n],u*.6),this}sweep(t,{arcs:e=[[0,re]],step:n=8,sense:s=1}={}){let r=Math.max(...t.map(a=>a[0]),1);for(let[a,l]of e){let o=Math.max(2,Math.ceil((l-a)*r/n));for(let h=0;h<t.length-1;h++){let u=t[h],c=t[h+1];if(Math.abs(u[0]-c[0])<1e-6&&Math.abs(u[1]-c[1])<1e-6)continue;let f=u[2]??1,d=c[2]??1;for(let p=0;p<o;p++){let v=a+(l-a)*p/o,g=a+(l-a)*(p+1)/o,m=Math.cos(v),x=Math.sin(v),w=Math.cos(g),M=Math.sin(g),S=[u[0]*m,u[0]*x,u[1]],A=[u[0]*w,u[0]*M,u[1]],y=[c[0]*w,c[0]*M,c[1]],T=[c[0]*m,c[0]*x,c[1]];s>0?this.quad(S,A,y,T,f,f,d,d):this.quad(A,S,T,y,f,f,d,d)}}}return this}shaft(t,e,n,s,r,a,l=12,{foot:o=1,head:h=o,cap:u=!1,phase:c=0}={}){for(let f=0;f<l;f++){let d=c+f/l*re,p=c+(f+1)/l*re,v=Math.cos(d),g=Math.sin(d),m=Math.cos(p),x=Math.sin(p);this.quad([t+s*v,e+s*g,n],[t+s*m,e+s*x,n],[t+r*m,e+r*x,n+a],[t+r*v,e+r*g,n+a],o,o,h,h),u&&this.tri([t,e,n+a],[t+r*v,e+r*g,n+a],[t+r*m,e+r*x,n+a],h)}return this}turned(t,e,n,s,r=8,{squash:a=1,rot:l=0,shade:o=1}={}){let h=this.nv,u=s.length;for(let c=0;c<u;c++){let[f,d]=s[c],p=s[Math.max(0,c-1)],v=s[Math.min(u-1,c+1)],g=v[0]-p[0],m=v[1]-p[1],x=Math.hypot(g,m)||1,w=m/x,M=-g/x;for(let S=0;S<r;S++){let A=l+S/r*re,y=Math.cos(A),T=Math.sin(A)*a;this.v(t+f*y,e+f*T,n+d,w*y,w*Math.sin(A),M,o)}}for(let c=0;c<u-1;c++)for(let f=0;f<r;f++){let d=h+c*r+f,p=h+c*r+(f+1)%r;this.quad4(d,p,p+r,d+r)}return this}loft(t,{closed:e=!1,flip:n=!1,shade:s=1}={}){let r=this.nv,a=t.length,l=t[0].length;for(let h=0;h<a;h++)for(let u=0;u<l;u++){let c=t[h][u],f=t[Math.min(a-1,h+1)][u],d=t[Math.max(0,h-1)][u],p=t[h][e?(u+1)%l:Math.min(l-1,u+1)],v=t[h][e?(u+l-1)%l:Math.max(0,u-1)],g=f[0]-d[0],m=f[1]-d[1],x=f[2]-d[2],w=p[0]-v[0],M=p[1]-v[1],S=p[2]-v[2],A=m*S-x*M,y=x*w-g*S,T=g*M-m*w,F=(Math.hypot(A,y,T)||1)*(n?-1:1);this.v(c[0],c[1],c[2],A/F,y/F,T/F,c[3]??s)}let o=e?l:l-1;for(let h=0;h<a-1;h++)for(let u=0;u<o;u++){let c=r+h*l+u,f=r+h*l+(u+1)%l;n?this.quad4(c,f,f+l,c+l):this.quad4(c,c+l,f+l,f)}return this}geometry(){let t=new Be;return t.setAttribute("position",new Le(this.pos.slice(0,this.nv*3),3)),t.setAttribute("normal",new Le(this.nrm.slice(0,this.nv*4),4,!0)),t.setAttribute("aTint",new Le(this.col.slice(0,this.nv*4),4,!0)),t.setIndex(new Le(this.nv>65535?this.idx.slice(0,this.ni):new Uint16Array(this.idx.subarray(0,this.ni)),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Sl=class{constructor(){this.F=new vi,this.bins=new Map}to(t){let e=this.bins.get(t);return e||this.bins.set(t,e=new xi(this.F,t)),e}proto(t){return new xi(new vi,t)}},Ni=(i,t,e)=>{let n=new Ur(i,t,e.length),s=new xe,r=new Vn,a=new ti,l=new ht,o=new ht,h=new se,u=!1;return e.forEach((c,f)=>{a.set(c.tilt??0,0,c.rot??0,"ZXY"),r.setFromEuler(a),l.set(c.sx??1,c.sy??c.sx??1,c.sz??c.sx??1),o.set(c.x,c.y,c.z??0),n.setMatrixAt(f,s.compose(o,r,l)),c.tint?(u=!0,n.setColorAt(f,h.setRGB(c.tint[0]/255,c.tint[1]/255,c.tint[2]/255,Ie))):u&&n.setColorAt(f,h.setRGB(1,1,1))}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.computeBoundingBox(),n};var si=["ashlar","paving","tiles","plaster","metal","grass","sand","wood","rock","leaf"],Gx=Object.fromEntries(si.map((i,t)=>[i,t])),Qe=(i,t,e={})=>({layer:Gx[i],size:t,metal:0,rough:1,bump:1,pattern:0,wet:1,keep:0,...e}),Tl={stone:Qe("ashlar",3.6),stoneBands:Qe("ashlar",3.6,{pattern:1}),stoneChequer:Qe("ashlar",3.6,{pattern:2}),stoneCourses:Qe("ashlar",3.6,{pattern:3}),smooth:Qe("plaster",5,{rough:.8,bump:.5}),rock:Qe("rock",9,{bump:1.3}),paving:Qe("paving",7),plaster:Qe("plaster",4.5,{bump:.7}),tiles:Qe("tiles",2.6,{keep:1,wet:0}),metal:Qe("metal",4.6,{metal:.72,rough:1.5,wet:0}),gilt:Qe("metal",3.1,{metal:.8,rough:1.15,bump:.3,wet:0}),grass:Qe("grass",7,{keep:1}),sand:Qe("sand",6,{keep:1}),earth:Qe("sand",8,{keep:0}),wood:Qe("wood",2.6,{keep:1}),leaf:Qe("leaf",5.5,{keep:1,wet:0,bump:1.6}),cloth:Qe("plaster",2.2,{wet:0,bump:.4}),dark:Qe("rock",9,{bump:.4,wet:0}),ivory:Qe("plaster",6,{rough:.55,bump:.3,wet:0})},ha=Object.keys(Tl),Q=Object.fromEntries(ha.map((i,t)=>[i,t])),q={white:[226,219,203],black:[70,70,76],red:[150,78,58],brass:[205,160,72],tin:[196,201,204],orichalcum:[226,118,62],silver:[224,228,232],gold:[246,190,78],plaster:[[232,224,207],[222,208,184],[212,193,164],[226,214,196],[204,182,152],[236,230,218]],tile:[[255,255,255],[240,222,205],[226,204,186],[255,240,226]],wood:[150,118,86],darkWood:[92,70,50],hull:[78,60,44],sail:[232,222,198],ivory:[244,236,214],leaf:[[78,104,58],[92,116,66],[66,92,52],[104,122,70]],cypress:[[40,66,42],[48,74,46],[34,58,38]],olive:[[118,132,96],[104,120,88]],trunk:[96,78,60],shade:[26,26,28],sand:[255,255,255],water:[255,255,255]},mh=["canal","merchant-ships","houses","harbours","bridges","bridge-gates","aqueducts","wall-brass","ship-passages","racecourse","barracks","horse-grounds","gymnasia","gardens","ring-temples","patterned-buildings","shipyards","wall-tin","guard-house","rock-docks","wall-orichalcum","guard-dwellings","springs","reservoirs","baths","grove","palace","shrine","shrine-wall","altar","statues","votive-outside","temple","pinnacles","temple-interior","temple-ceiling","poseidon","nereids","votive-inside","pillar"],Uw=[...mh,"hall","rings","island","hill","island-gardens","stone","ring-walls","quays","outer-wall","extent","ship-sheds","triremes","merchantmen","wall-towers","bridge-form","gate-form","palace-plan","house-form","grove-trees","ring-layout","racecourse-form","rock-dock-place","road-offset","temple-form","figure-form"];var Ze=(i,t)=>[Math.min(255,i[0]*t),Math.min(255,i[1]*t),Math.min(255,i[2]*t)],os=(i,t,e,n,s,r,{n:a=12,surf:l=Q.smooth,tint:o=q.white,base:h=!1,shade:u=1,simple:c=!1}={})=>{if(i.surf(l,o),c){c==="pier"?i.box(t,e,n,s*2,s*2,r,0,{top:!1,foot:.8*u,head:.95*u}):(i.shaft(t,e,n,s,s*.82,r-s*.5,6,{foot:.82*u,head:.95*u}),i.box(t,e,n+r-s*.5,s*2.5,s*2.5,s*.5,0,{foot:.9*u,top:!1,bottom:!0}));return}let f=s*.55,d=s*.42,p=r-f-d,v=n;h&&(i.shaft(t,e,n,s*1.3,s*1.3,s*.35,a,{foot:.8*u,head:u,cap:!0}),v+=s*.35),i.shaft(t,e,v,s,s*.8,p-(v-n),a,{foot:.82*u,head:.95*u}),i.shaft(t,e,n+p,s*.8,s*1.22,f,a,{foot:.8*u,head:u}),i.box(t,e,n+p+f,s*2.7,s*2.7,d,0,{foot:.9*u,topShade:.7*u})},Cs=(i,t,e,n,s,r,a,l,o,h)=>{for(let u=0;u<a;u++){let c=a>1?u/(a-1):.5;os(i,t+(n-t)*c,e+(s-e)*c,r,l,o,h)}},Al=(i,t,e,n,s,{over:r=.6,tile:a=q.tile[0],wall:l=[Q.plaster,q.plaster[0]],thick:o=.28,ridgeAlongY:h=!1}={})=>{let u=i.F,c=h?u.push(0,0,0,Math.PI/2):null;h&&([t,e]=[e,t]);let f=t/2+r*.5,d=e/2+r,p=s*r/(e/2),v=n-p,g=n+s;i.surf(Q.tiles,a),i.quad([-f,-d,v],[f,-d,v],[f,0,g],[-f,0,g],.92,.92,1,1),i.quad([f,d,v],[-f,d,v],[-f,0,g],[f,0,g],.92,.92,1,1),i.surf(Q.tiles,Ze(a,.7)),i.wall(-f,-d,f,-d,v-o,v,.7,.85),i.wall(f,d,-f,d,v-o,v,.7,.85);for(let m of[-1,1]){let x=m*f,w=[x,-d,v],M=[x,0,g],S=[x,d,v],A=y=>[y[0],y[1],y[2]-o];m>0?(i.quad(A(w),A(M),M,w,.75),i.quad(A(M),A(S),S,M,.75)):(i.quad(A(M),A(w),w,M,.75),i.quad(A(S),A(M),M,S,.75))}i.surf(Q.wood,q.darkWood),i.quad([f,-d,v-o],[-f,-d,v-o],[-f,-e/2,n-o],[f,-e/2,n-o],.45),i.quad([-f,d,v-o],[f,d,v-o],[f,e/2,n-o],[-f,e/2,n-o],.45),i.surf(l[0],l[1]),i.tri([t/2,-e/2,n],[t/2,e/2,n],[t/2,0,g-.05],.8,.8,.95),i.tri([-t/2,e/2,n],[-t/2,-e/2,n],[-t/2,0,g-.05],.8,.8,.95),c&&u.pop(c)},Vx=(i,t,e,n,s,{over:r=.6,tile:a=q.tile[0],thick:l=.28}={})=>{let o=t/2+r,h=e/2+r,u=n-.15,c=n+s,f=Math.max(0,t/2-e/2);i.surf(Q.tiles,a),i.quad([-o,-h,u],[o,-h,u],[f,0,c],[-f,0,c],.92,.92,1,1),i.quad([o,h,u],[-o,h,u],[-f,0,c],[f,0,c],.92,.92,1,1),i.tri([o,-h,u],[o,h,u],[f,0,c],.92,.92,1),i.tri([-o,h,u],[-o,-h,u],[-f,0,c],.92,.92,1),i.surf(Q.tiles,Ze(a,.7)),i.box(0,0,u-l,o*2,h*2,l,0,{top:!1,bottom:!0,foot:.7})},El=(i,t,e,n,s,r,a,l,o)=>{let h=t/2,u=e/2;n===0?i.wall(s-a/2,-u-o,s+a/2,-u-o,r,r+l,.85,1):n===1?i.wall(h+o,s-a/2,h+o,s+a/2,r,r+l,.85,1):n===2?i.wall(s+a/2,u+o,s-a/2,u+o,r,r+l,.85,1):i.wall(-h-o,s+a/2,-h-o,s-a/2,r,r+l,.85,1)},ua=(i,t,e,n,s,r,{pw:a=1.5,ph:l=2.5,frame:o=q.white,leaf:h=q.darkWood}={})=>{i.surf(Q.smooth,o),El(i,t,e,n,s,r,a+.5,l+.3,.05),i.surf(Q.wood,h),El(i,t,e,n,s,r,a,l,.09)},Wx=(i,t,e,n,s,r,{pw:a=.8,ph:l=1.1}={})=>{i.surf(Q.smooth,q.white),El(i,t,e,n,s,r-.12,a+.3,l+.24,.04),i.surf(Q.dark,q.shade),El(i,t,e,n,s,r,a,l,.07)},on=(i,t,e,n,s,r,a,l,o={})=>{let{wall:h=[Q.plaster,q.plaster[0]],roof:u="gable",rise:c=Math.min(s,r)*.22,tile:f=q.tile[0],doors:d=[[0,0]],windows:p=1,base:v=null,cornice:g=null,ridgeAlongY:m=r>s,over:x=.6}=o,w=i.F.push(t,e,n,l);if(i.surf(h[0],h[1]).box(0,0,0,s,r,a,0,{top:u==="flat",foot:.78,head:1,topShade:.9}),v&&i.surf(v[0],v[1]).box(0,0,0,s+.3,r+.3,Math.min(1.1,a*.2),0,{foot:.72,head:.9,topShade:.8}),g&&i.surf(Q.smooth,g).box(0,0,a-.45,s+.5,r+.5,.45,0,{bottom:!0,foot:.8,topShade:.8}),u==="gable")Al(i,s,r,a,c,{tile:f,wall:h,ridgeAlongY:m,over:x});else if(u==="hip")Vx(i,s,r,a,c,{tile:f,over:x});else{i.surf(h[0],h[1]);for(let[M,S,A,y]of[[0,-r/2+.2,s,.4],[0,r/2-.2,s,.4],[-s/2+.2,0,.4,r-.8],[s/2-.2,0,.4,r-.8]])i.box(M,S,a,A,y,.7,0,{foot:.9,topShade:.95})}for(let[M,S]of d)ua(i,s,r,M,S,0,{ph:Math.min(2.6,a*.62)});if(p){let M=Math.max(1,Math.round(a/3.4));for(let S=0;S<M;S++){let A=a/M*S+a/M*.52;for(let y of[0,2,1,3]){let T=y%2?r:s,F=Math.floor(T/3.6)*(p>1,1);for(let _=0;_<F;_++){let B=-T/2+T*(_+.5)/F;S===0&&d.some(([J,at])=>J===y&&Math.abs(at-B)<1.6)||(_+S+y)%(p>1?1:2)||Wx(i,s,r,y,B,A,{pw:.7,ph:1})}}}}i.F.pop(w)},yi=(i,t,e,n,s,r,a,l,{wall:o=[Q.stone,q.white],tile:h=q.tile[1],cols:u=Math.max(3,Math.round(s/3.4)),colTint:c=q.white,r:f=.34,simple:d=!0}={})=>{let p=i.F.push(t,e,n,l);i.surf(Q.paving,q.white).box(0,0,0,s+1,r+1,.3,0,{foot:.8,topShade:.75}),i.surf(o[0],o[1]).box(0,r/2-.3,.3,s,.6,a+1.1,0,{foot:.7});for(let x of[-1,1])i.box(x*(s/2-.3),0,.3,.6,r,a+.5,0,{foot:.7});Cs(i,-s/2+.6,-r/2+.5,s/2-.6,-r/2+.5,.3,u,f,a-.4,{n:8,tint:c,simple:d}),i.surf(Q.smooth,c).box(0,-r/2+.5,a-.1,s,.8,.5,0,{bottom:!0,foot:.7});let v=a+.4,g=a+1.5,m=s/2+.4;i.surf(Q.tiles,h).quad([-m,-r/2-.5,v],[m,-r/2-.5,v],[m,r/2+.1,g],[-m,r/2+.1,g],.92,.92,1,1),i.surf(Q.wood,q.darkWood).quad([m,-r/2-.5,v-.2],[-m,-r/2-.5,v-.2],[-m,r/2,g-.25],[m,r/2,g-.25],.4),i.F.pop(p)},Vd=(i,t,e,n,s,r,a,{wall:l=[Q.stone,q.white],colTint:o=q.white,tile:h=q.tile[0],cols:u=4,steps:c=3,closed:f=!1,finial:d=null}={})=>{let p=i.F.push(t,e,n,a),v=.32,g=s*.82,m=s*.052,x=f?0:Math.min(r*.28,s*.6);for(let M=0;M<c;M++)i.surf(Q.smooth,q.white).box(0,0,M*v,s+2.6-M*.9,r+2.6-M*.9,v,0,{foot:.8,topShade:.85});let w=c*v;if(i.surf(l[0],l[1]).box(0,x/2,w,s-1.2,r-x-.6,g,0,{top:!1,foot:.75}),!f){Cs(i,-s/2+m*1.6,-r/2+m*1.6,s/2-m*1.6,-r/2+m*1.6,w,u,m,g,{tint:o}),ua(i,s-1.2,r-x-.6,0,0,w,{pw:s*.2,ph:g*.62});let M=i.F.push(0,x/2,0);i.F.pop(M)}if(i.surf(Q.smooth,o).box(0,0,w+g,s+.1,r+.1,s*.1,0,{bottom:!0,foot:.78,topShade:.8}),Al(i,s+.1,r+.1,w+g+s*.1,s*.19,{tile:h,wall:[Q.smooth,o],ridgeAlongY:!0,over:.5}),d)for(let M of[-1,1])i.surf(Q.gilt,d),i.shaft(0,M*(r/2+.3),w+g+s*.29,s*.035,.02,s*.16,6,{foot:.9});i.F.pop(p)},Rl=(i,t,e,n,s,r,a,l,{depth:o=5,wall:h=[Q.stone,q.white],tile:u=q.tile[1],floor:c=[Q.sand,q.sand],gate:f=!0}={})=>{let d=i.F.push(t,e,n,l);i.surf(c[0],c[1]).slab(0,0,.06,s-o*2,r-o*2,0,.95),yi(i,0,r/2-o/2,0,s,o,a,0,{wall:h,tile:u}),yi(i,0,-r/2+o/2,0,s,o,a,Math.PI,{wall:h,tile:u}),yi(i,s/2-o/2,0,0,r-o*2,o,a,-Math.PI/2,{wall:h,tile:u}),yi(i,-s/2+o/2,0,0,r-o*2,o,a,Math.PI/2,{wall:h,tile:u}),f&&i.surf(Q.wood,q.darkWood).wall(-1.4,-r/2-.08,1.4,-r/2-.08,.3,3.2,.8,1),i.F.pop(d)},Fi=(i,t,e,n,s,r,{pitch:a=3.2,w:l=1.7,t:o=.7,h=1.3,lowWall:u=.9}={})=>{let c=Math.hypot(n-t,s-e),f=Math.max(1,Math.round(c/a)),d=(n-t)/c,p=(s-e)/c,v=Math.atan2(p,d),g=p,m=-d;u&&i.box((t+n)/2-g*o/2,(e+s)/2-m*o/2,r,c,o,u,v,{foot:.9,topShade:.9});for(let x=0;x<f;x++){let w=(x+.5)/f*c;i.box(t+d*w-g*o/2,e+p*w-m*o/2,r+u,l,o,h,v,{foot:.92,topShade:.95})}},da=(i,t,e,n,s,r,a,{face:l=[Q.stone,q.white],crown:o=[Q.stone,q.white],slits:h=!0,band:u=null}={})=>{let c=i.F.push(t,e,n,a),f=s/2;i.surf(l[0],l[1]).box(0,0,0,s,s,r,0,{top:!1,foot:.72}),i.surf(o[0],o[1]).box(0,0,r,s+.7,s+.7,.7,0,{bottom:!0,foot:.8,topShade:.7}),u&&i.surf(u[0],u[1]).box(0,0,r*.62,s+.3,s+.3,.6,0,{bottom:!0,foot:.85});let d=r+.7,p=f+.35;if(i.surf(o[0],o[1]),Fi(i,-p,-p,p,-p,d,{pitch:2.6,w:1.3}),Fi(i,p,-p,p,p,d,{pitch:2.6,w:1.3}),Fi(i,p,p,-p,p,d,{pitch:2.6,w:1.3}),Fi(i,-p,p,-p,-p,d,{pitch:2.6,w:1.3}),h){i.surf(Q.dark,q.shade);for(let v of[0,1,2,3]){let g=v*Math.PI/2,m=Math.cos(g),x=Math.sin(g),w=x*(f+.06),M=-m*(f+.06);i.wall(w-m*.25,M-x*.25,w+m*.25,M+x*.25,r*.7,r*.7+1.8)}}i.F.pop(c)},$x=[[.125,0],[.12,.08],[.098,.42],[.112,.6],[.092,.69],[.128,.795],[.118,.83],[.05,.855],[.062,.9],[.066,.94],[.045,.985],[0,1]],fa=(i,t,e,n,s,r=0,{n:a=8,tint:l=q.gold,surf:o=Q.gilt,arm:h=!1}={})=>{i.surf(o,l);let u=i.F.push(t,e,n,r);i.turned(0,0,0,$x.map(([c,f])=>[c*s,f*s]),a,{squash:.62}),h&&i.box(s*.16,-s*.03,s*.72,s*.3,s*.05,s*.05,.25,{bottom:!0}),i.F.pop(u)},Cl=(i,t,e,n,s,r,{plinth:a=[Q.smooth,q.white],tint:l=q.gold,ph:o=s*.32,pw:h=s*.36}={})=>{i.surf(a[0],a[1]).box(t,e,n,h*1.25,h*1.25,o*.2,r,{foot:.75,topShade:.8}),i.box(t,e,n+o*.2,h,h,o*.8,r,{foot:.85,topShade:.8}),fa(i,t,e,n+o,s,r,{tint:l})},Wd=(i,t,e,n,s,{surf:r=Q.smooth,tint:a=q.white,treads:l=Math.max(2,Math.round(Math.abs(s-n)/.4))}={})=>{i.surf(r,a);let o=(s-n)/l,h=e/l;for(let u=0;u<l;u++)i.wall(-t/2,u*h,t/2,u*h,n+u*o,n+(u+1)*o,.72,.85),i.quad([-t/2,u*h,n+(u+1)*o],[t/2,u*h,n+(u+1)*o],[t/2,(u+1)*h,n+(u+1)*o],[-t/2,(u+1)*h,n+(u+1)*o],.95)};var $d=(i,t,e)=>{let{B:n,Q:s,rIsle:r,rW1:a,rL1:l,rW2:o,rL2:h,rW3:u,rA:c,r1a:f,r1b:d,r2a:p,r2b:v,rT:g,core:m,edge:x,Zp:w,Rp:M,Rs:S,zSlopeTop:A,zSlopeFoot:y,SEA:T,roadAngle:F,arcsExcept:_,canalHalf:B,bridgeHalf:J,tunnelHalf:at,off:L,rampTop:X,rampFoot:O,k:N}=t,j=e.phone?14:8,Y=-3.2,V=i.to("rings"),U=i.to("quays"),H=i.to("stone"),W=i.to("rings"),z=i.to("island"),st=i.to("hill"),ot=(E,lt)=>Math.asin(Math.min(1,lt/E)),ut=21,dt=Math.PI/2,St=_([[dt,ot(r,ut)]]);V.surf(Q.stone,q.white).sweep([[r,Y,.6],[r,s,.95]],{arcs:St,step:j}),V.surf(Q.paving,q.white).sweep([[r,s,.95],[c,s,.8]],{arcs:St,step:j}),H.surf(Q.stoneCourses,q.white).sweep([[c,s,.7],[c,n,.95]],{arcs:_([[dt,ot(c,ut)]]),step:j}),z.surf(Q.grass,[235,235,225]).sweep([[c,n],[S+26,n]],{step:j}),z.surf(Q.paving,q.white).sweep([[S+26,n+.02],[S,n+.02,.8]],{step:j});let k=E=>[[F(E),ot(E,J+.6)]];st.surf(Q.stoneBands,q.white).sweep([[S,n,.7],[S,y+.9,1]],{arcs:_(k(S)),step:j}),st.surf(Q.smooth,q.white).sweep([[S,y+.9],[S-.7,y+.9],[S-.7,y,.8]],{arcs:_(k(S)),step:j}),st.surf(Q.grass,[255,255,245]).sweep([[S-.7,y],[M,A,.85]],{step:j}),st.surf(Q.stoneBands,q.white).sweep([[M,A,.7],[M,w+1,1]],{arcs:_(k(M)),step:j}),st.surf(Q.smooth,q.white).sweep([[M,w+1],[M-.8,w+1],[M-.8,w,.8]],{arcs:_(k(M)),step:j}),z.surf(Q.paving,q.white).sweep([[M,w],[M*.5,w],[.5,w]],{step:j*2});let rt=(E,lt,ft,R,G)=>{let K=b=>[[T,ot(b,at)]];V.surf(Q.stone,q.white).sweep([[E,Y,.6],[E,s,.95]],{arcs:_(K(E)),step:j,sense:-1}),V.surf(Q.paving,q.white).sweep([[E,s,.95],[E+ft,s,.8]],{arcs:_(K(E)),step:j,sense:-1}),H.surf(G[0],G[1]).sweep([[E+ft,s,.7],[E+ft,n,.95]],{arcs:_(K(E+ft)),step:j,sense:-1}),W.surf(Q.grass,[240,236,220]).sweep([[E+ft,n],[lt-R,n]],{step:j,sense:-1}),H.surf(G[0],G[1]).sweep([[lt-R,n,.95],[lt-R,s,.7]],{arcs:_(K(lt-R)),step:j,sense:-1}),V.surf(Q.paving,q.white).sweep([[lt-R,s,.8],[lt,s,.95]],{arcs:_(K(lt)),step:j,sense:-1}),V.surf(Q.stone,q.white).sweep([[lt,s,.95],[lt,Y,.6]],{arcs:_(K(lt)),step:j,sense:-1})};rt(a,l,f-a,l-d,[Q.stoneBands,q.white]),rt(o,h,p-o,h-v,[Q.stoneChequer,q.white]);let et=i.to("ship-passages"),gt=5.6,ct=at,Mt=(E,lt=ct)=>-Math.sqrt(E*E-lt*lt);for(let[E,lt,ft,R]of[[a,l,f-a,l-d],[o,h,p-o,h-v]]){for(let[b,P]of[[Mt(E),Mt(E+ft)],[Mt(lt-R),Mt(lt)]])for(let D of[-1,1])V.surf(Q.stone,q.white),D>0?V.wall(ct,b,ct,P,Y,s,.6,.95):V.wall(-ct,P,-ct,b,Y,s,.6,.95);let G=Mt(E+ft),K=Mt(lt-R);et.surf(Q.rock,[120,116,110]),et.wall(ct,G,ct,K,Y,gt,.3,.2),et.wall(-ct,K,-ct,G,Y,gt,.3,.2),et.quad([-ct,G,gt],[ct,G,gt],[ct,K,gt],[-ct,K,gt],.25);for(let[b,P]of[[G,1],[K,-1]]){et.surf(Q.stone,q.red);let D=b+P*.25;P>0?(et.wall(ct+2.2,D,-ct-2.2,D,gt,n,.85,1),et.wall(ct+2.2,D,ct,D,s,gt,.8,.9),et.wall(-ct,D,-ct-2.2,D,s,gt,.8,.9)):(et.wall(-ct-2.2,D,ct+2.2,D,gt,n,.85,1),et.wall(ct,D,ct+2.2,D,s,gt,.8,.9),et.wall(-ct-2.2,D,-ct,D,s,gt,.8,.9)),et.surf(Q.rock,[120,116,110]).quad([-ct,b,gt],[ct,b,gt],[ct,b+P*.3,gt],[-ct,b+P*.3,gt],.3)}}let Tt=i.to("rock-docks"),Ft=52*N,Dt=Math.sqrt(c*c-ut*ut),ee=Math.sqrt(r*r-ut*ut),Vt=17,Rt=(ut*2-Vt*2)/3,Ct=n-1.2;Tt.surf(Q.rock,[150,144,132]),Tt.wall(-ut,Dt,ut,Dt,Ct,n,.8,1);let Ut=[-ut+Rt+Vt/2,ut-Rt-Vt/2];for(let E of[-ut+Rt/2,0,ut-Rt/2])Tt.wall(E-Rt/2,Dt,E+Rt/2,Dt,Y,Ct,.55,.9);for(let E of Ut)Tt.surf(Q.rock,[118,112,104]),Tt.wall(E-Vt/2,Dt,E-Vt/2,Dt-Ft,Y,Ct,.32,.22),Tt.wall(E+Vt/2,Dt-Ft,E+Vt/2,Dt,Y,Ct,.32,.22),Tt.wall(E-Vt/2,Dt-Ft,E+Vt/2,Dt-Ft,Y,Ct,.2,.16),Tt.quad([E-Vt/2,Dt-Ft,Ct],[E+Vt/2,Dt-Ft,Ct],[E+Vt/2,Dt,Ct],[E-Vt/2,Dt,Ct],.2,.2,.35,.35),Tt.surf(Q.rock,[140,134,122]).quad([E-Vt/2,Dt-Ft+22,-1.2],[E+Vt/2,Dt-Ft+22,-1.2],[E+Vt/2,Dt-Ft,1.6],[E-Vt/2,Dt-Ft,1.6],.3);for(let E of[-1,1])V.surf(Q.stone,q.white),E>0?V.wall(ut,Dt,ut,ee,Y,s,.6,.95):V.wall(-ut,ee,-ut,Dt,Y,s,.6,.95);let nt=i.to("houses"),$t=i.to("canal"),Et=i.to("extent"),Bt=12*N,vt=B+Bt,Lt=ot(g,vt),kt=_([[T,Lt]]);V.surf(Q.stone,q.white).sweep([[u,Y,.6],[u,s,.95]],{arcs:_([[T,ot(u,B)]]),step:j,sense:-1}),V.surf(Q.paving,q.white).sweep([[u,s,.95],[g,s,.8]],{arcs:_([[T,ot(u,B)]]),step:j,sense:-1}),H.surf(Q.stoneCourses,q.white).sweep([[g,s,.7],[g,n,.95]],{arcs:kt,step:j,sense:-1}),nt.surf(Q.earth,[196,184,160]).sweep([[g,n],[(g+m)/2,n],[m,n]],{arcs:kt,step:j*1.5,sense:-1}),Et.surf(Q.grass,[225,220,190]).sweep([[m,n],[x,-3.2]],{arcs:kt,step:j*2,sense:-1});for(let E of[-1,1]){let lt=E*B,ft=E*vt,R=-Math.sqrt(u*u-B*B),G=-Math.sqrt(g*g-vt*vt),K=-x,b=(Ht,At,It,qt,bt,ae,le,De,Rn)=>E>0?Ht.wall(qt,bt,At,It,ae,le,De,Rn):Ht.wall(At,It,qt,bt,ae,le,De,Rn);$t.surf(Q.stone,q.white),b($t,lt,R,lt,K,Y,s,.6,.95),$t.surf(Q.paving,q.white);let P=[lt,R,s],D=[lt,K,s],C=[ft,K,s],Z=[ft,G,s];E>0?$t.quad(P,Z,C,D,.9):$t.quad(P,D,C,Z,.9),$t.surf(Q.stoneCourses,q.white),b($t,ft,G,ft,K,s,n,.7,.95);let tt=T+E*Lt,yt=[g*Math.cos(tt),g*Math.sin(tt)],wt=[m*Math.cos(tt),m*Math.sin(tt)],Pt=[x*Math.cos(tt),x*Math.sin(tt)],zt=-Math.sqrt(m*m-vt*vt);nt.surf(Q.earth,[196,184,160]),E>0?nt.tri([yt[0],yt[1],n],[wt[0],wt[1],n],[ft,zt,n]):nt.tri([yt[0],yt[1],n],[ft,zt,n],[wt[0],wt[1],n]),Et.surf(Q.grass,[225,220,190]),E>0?Et.quad([ft,zt,n],[wt[0],wt[1],n],[Pt[0],Pt[1],-3.2],[ft,K,n]):Et.quad([ft,zt,n],[ft,K,n],[Pt[0],Pt[1],-3.2],[wt[0],wt[1],n])}let Nt=(E,lt,ft,R)=>{for(let G=0;G<ft;G++){let K=G/ft*re;if(R(K))continue;let b=Math.cos(K),P=Math.sin(K),D=E-lt*1.2;U.surf(Q.smooth,Ze(q.white,.8)).shaft(D*b,D*P,s,.32,.26,.9,6,{cap:!0,foot:.7})}},$=E=>Math.abs(Math.atan2(Math.sin(E-T),Math.cos(E-T)))<.06;return e.phone||(Nt(r,1,90,E=>Math.abs(E-dt)<.06),Nt(a,-1,130,$),Nt(l,1,200,$),Nt(o,-1,270,$),Nt(h,1,380,$),Nt(u,-1,480,$)),{dock:{mouths:Ut,yFace:Dt,dockDeep:Ft,dw:Vt},canalStrip:Bt}},qd=(i,t)=>{let{rIsle:e,rW3:n,canalHalf:s,edge:r,rWall:a,core:l,B:o}=i,h=[],u=new pe(new $n(e-70,n+3,180,1),t.sea);u.userData={id:"harbours"},h.push(u);let c=r-n+60,f=new pe(new Fn(s*2,c),t.sea);f.position.set(0,-(n+c/2)+2,0),f.userData={id:"canal"},h.push(f);for(let g of h)g.receiveShadow=!0,g.renderOrder=2,g.userData.water=!0;let d=Math.asin(Math.min(1,s/a))*3,p=new pe(new $n(a-22,a+22,360,1,-Math.PI/2+d,Math.PI*2-d*2),t.wallLine);p.userData={id:"outer-wall",line:!0};let v=new pe(new Fn(s*2,a-r),t.canalLine);v.position.set(0,-(r+a)/2,0),v.userData={id:"canal",line:!0};for(let g of[p,v])g.renderOrder=5,g.position.z=o,h.push(g);return h};var Xd=(i,t,e)=>{let{B:n,Q:s,H:r,T:a,rA:l,r1a:o,r1b:h,r2a:u,r2b:c,rT:f,core:d,SEA:p,roadAngle:v,arcsExcept:g,bridgeHalf:m,off:x,bridges:w,Zp:M,rampTop:S,rampFoot:A,k:y,Rp:T,Rs:F}=t,_=e.phone?14:8,B=i.to("ring-walls"),J=i.to("ring-walls#teeth"),at=i.to("wall-towers"),L=(W,z)=>Math.asin(Math.min(1,z/W)),X=(W,z,st,ot)=>{let ut=i.to(ot),dt=g([[v(W),L(W,m+.5)]]),St={arcs:dt,step:_,sense:z},k=n+r-.9,rt=W+z*.3,et=W-z*a;ut.surf(Q.metal,st).sweep([[W,n-.3,.72],[W,n+r*.45,.95],[W,k,1]],St),B.surf(Q.stone,q.white).sweep([[W,k,.6],[rt,k,.75],[rt,n+r,.95],[et,n+r,.85],[et,n,.7]],St);let gt=n+r,ct=rt,Mt=rt-z*.7;B.sweep([[ct,gt,.9],[ct,gt+.9,1],[Mt,gt+.9,.95],[Mt,gt,.8]],St);let Tt=e.phone?6.4:3.2,Ft=(ct+Mt)/2;J.surf(Q.stone,q.white);for(let[Rt,Ct]of dt){let Ut=Math.round((Ct-Rt)*W/Tt);for(let nt=0;nt<Ut;nt++){let $t=Rt+(Ct-Rt)*(nt+.5)/Ut;J.box(Ft*Math.cos($t),Ft*Math.sin($t),gt+.9,e.phone?3:1.6,.7,1.25,$t+Math.PI/2,{foot:.95,topShade:.95})}}let Dt=v(W),ee=Math.max(8,Math.round(re*W/(118*y))),Vt=L(W,m+22);for(let Rt=0;Rt<ee;Rt++){let Ct=Dt+Vt+(re-2*Vt)*(Rt+.5)/ee,Ut=W-z*(a/2-1.6);da(at,Ut*Math.cos(Ct),Ut*Math.sin(Ct),n-.3,8.4,r+5.6,Ct,{face:[Q.metal,st],crown:[Q.stone,q.white],band:[Q.stone,q.white]})}};X(l,1,q.orichalcum,"wall-orichalcum"),X(o,-1,q.tin,"wall-tin"),X(h,1,q.tin,"wall-tin"),X(u,-1,q.brass,"wall-brass"),X(c,1,q.brass,"wall-brass");let O=i.to("bridges"),N=i.to("bridge-gates"),j=i.to("aqueducts"),Y=[[q.orichalcum,q.tin],[q.tin,q.brass],[q.brass,q.brass]],V=(W,z,st,ot=!0)=>{let ut=N.F.push(x,-W,n,z>0?0:Math.PI),dt=9,St=r+10,k=m*2-dt*2,rt=9.2;for(let et of[-1,1])da(N,et*(m-dt/2),0,-.3,dt,St,0,{face:[Q.metal,st],crown:[Q.stone,q.white],band:[Q.stone,q.red]});N.surf(Q.stoneBands,q.white).box(0,0,rt,k,4.4,St-4-rt,0,{bottom:!0,foot:.7,topShade:.8}),N.surf(Q.stone,q.white),Fi(N,-k/2,-2.2,k/2,-2.2,St-4,{pitch:2.6,w:1.3}),Fi(N,k/2,2.2,-k/2,2.2,St-4,{pitch:2.6,w:1.3}),N.surf(Q.stone,q.red).box(0,-2.3,rt-.9,k+1.6,.5,1.3,0,{bottom:!0,foot:.8});for(let et of[-1,1]){let gt=k/2-.2,ct=ot?et*1.32:0,Mt=et*(k/2-.15);N.surf(Q.metal,Ze(st,.9)).box(Mt-et*Math.cos(ct)*gt/2,1.6+Math.abs(Math.sin(ct))*gt/2,.15,gt,.35,rt-.4,ct,{foot:.6,head:.85})}N.F.pop(ut)};w.forEach(([W,z],st)=>{let ot=z-W,ut=-(W+z)/2;O.surf(Q.stone,q.white).box(x,ut,n-1.5,m*2,ot,1.5,0,{top:!1,bottom:!0,foot:.7,head:.95}),O.surf(Q.paving,q.white).slab(x,ut,n,m*2,ot,0,.95);let dt=Math.max(2,Math.round(ot/17));for(let k=0;k<=dt;k++){let rt=-W-ot*k/dt;O.surf(Q.stoneCourses,q.white).box(x,rt,-3.2,m*2-1.2,3.6,n-3+3.2,0,{top:!1,foot:.55,head:.8}),O.surf(Q.stone,q.white).box(x,rt,n-3,m*2-.6,5.6,.8,0,{bottom:!0,top:!1,foot:.6}),O.box(x,rt,n-2.2,m*2-.2,7.8,.7,0,{bottom:!0,top:!1,foot:.65})}for(let k of[-1,1]){let rt=x+k*(m-.6);B.surf(Q.stone,q.white).box(rt,ut,n,1.2,ot-9,2.3,0,{foot:.8,topShade:.9}),k>0?Fi(B,rt+.6,-W-4.5,rt+.6,-z+4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0}):Fi(B,rt-.6,-z+4.5,rt-.6,-W-4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0})}let St=x-m+2.2;j.surf(Q.stone,q.white).box(St,ut,n,1.6,ot-10,1.25,0,{foot:.75,topShade:.9}),j.surf(Q.smooth,q.white);for(let k=-W-14;k>-z+10;k-=24)j.box(St,k,n+1.25,1.9,2.2,.3,0,{foot:.9});V(W,-1,Y[st][0]),V(z,1,Y[st][1])});let U=w.slice(0,2).map(([,W])=>({x:x-m-9,y:-W-16,z:n,w:9,d:14}));for(let W of U){j.surf(Q.stone,q.white);for(let[z,st,ot,ut]of[[0,-W.d/2,W.w+1.2,.7],[0,W.d/2,W.w+1.2,.7],[-W.w/2,0,.7,W.d],[W.w/2,0,.7,W.d]])j.box(W.x+z,W.y+st,W.z,ot,ut,1,0,{foot:.8,topShade:.9});j.surf(Q.stone,q.white).box(W.x+W.w/2+4,W.y+W.d/2+6,W.z,1.6,18,1.25,.35,{foot:.75})}let H=(W,z,st=n)=>{O.surf(Q.paving,q.white).slab(x,-(W+z)/2,st+.14,m*2,z-W,0,.95);for(let ot of[-1,1])O.surf(Q.smooth,q.white).box(x+ot*m,-(W+z)/2,st,.5,z-W,.34,0,{foot:.8})};H(w[0][1],w[1][0]),H(w[1][1],w[2][0]),H(w[2][1],Math.sqrt(d*d-x*x)),H(A,w[0][0]);{let W=O.F.push(x,-A,0,0),z=A-S,st=m*2;Wd(O,st,z,n,M,{surf:Q.paving,treads:e.phone?20:60});for(let ot of[-1,1]){let ut=ot*(st/2+.6),dt=12;for(let St=0;St<dt;St++){let k=z*St/dt,rt=z*(St+1)/dt,et=n+(M-n)*St/dt,gt=n+(M-n)*(St+1)/dt;O.surf(Q.stoneBands,q.white);let ct=ut+ot*.6,Mt=ut-ot*.6,Tt=n-.2;ot>0?(O.quad([ct,k,Tt],[ct,rt,Tt],[ct,rt,gt+1.1],[ct,k,et+1.1],.7,.7,1,1),O.quad([Mt,rt,gt],[Mt,k,et],[Mt,k,et+1.1],[Mt,rt,gt+1.1],.8)):(O.quad([ct,rt,Tt],[ct,k,Tt],[ct,k,et+1.1],[ct,rt,gt+1.1],.7,.7,1,1),O.quad([Mt,k,et],[Mt,rt,gt],[Mt,rt,gt+1.1],[Mt,k,et+1.1],.8)),O.surf(Q.smooth,q.white).quad([ut-.6,k,et+1.1],[ut+.6,k,et+1.1],[ut+.6,rt,gt+1.1],[ut-.6,rt,gt+1.1],.95)}}O.F.pop(W)}return{basins:U}};var Yd=(i,t,e)=>{let{Zp:n,SEA:s,arcsExcept:r}=t,a=44,l=20,o=1.1,h=l-o,u=24.4,c=u+2,f=5.5,d=9.5,p=3.4,v=6.4,g=6,m=n+.45,x=m,w=m+d,M=(X,O)=>Math.asin(Math.min(1,O/X)),S=e.phone?5:3,A=i.to("shrine-wall").surf(Q.metal,q.gold);A.sweep([[a,n,.8],[a,n+4.5,1],[a-.9,n+4.5,.95],[a-.9,n,.75]],{arcs:r([[s,M(a,g)]]),step:S});for(let X of[-1,1]){let O=s+X*M(a,g+.5);A.shaft((a-.45)*Math.cos(O),(a-.45)*Math.sin(O),n,.95,.8,6.4,10,{cap:!0,foot:.8})}let y=i.to("shrine");for(let X=0;X<3;X++)y.surf(Q.smooth,q.white).sweep([[c+(2-X)*.55,n+X*.15,.8],[c+(2-X)*.55,n+(X+1)*.15,.92],[c+(1-X)*.55,n+(X+1)*.15,.95]],{step:S+1});y.surf(Q.paving,q.white).sweep([[c-.55,m,.95],[h,m,.95]],{step:S+1});let T=r([[s,M(l,p)]]),F=[[s-M(l,p),s+M(l,p)]];y.surf(Q.stoneCourses,q.white).sweep([[l,x,.8],[l,w,1]],{arcs:T,step:S}),y.surf(Q.stoneCourses,q.white).sweep([[l,x+v,.85],[l,w,1]],{arcs:F,step:S}),y.surf(Q.smooth,q.white).sweep([[h,w,.8],[h,x+6.3,.7]],{arcs:T,step:S}),y.surf(Q.smooth,q.white).sweep([[h,w,.8],[h,x+v,.7],[l,x+v,.6]],{arcs:F,step:S});let _=i.to("hall");_.surf(Q.smooth,q.shade).sweep([[h,x+6.3,.9],[h,x,.7]],{arcs:T,step:S}),_.surf(Q.gilt,q.gold).sweep([[h-.04,x+6.42,1],[h-.04,x+6.3,1]],{arcs:T,step:S});for(let X of[-1,1]){let O=s+X*M(l,p),N=Math.cos(O),j=Math.sin(O);y.surf(Q.gilt,q.gold).quad([h*N,h*j,x],[l*N,l*j,x],[l*N,l*j,x+v],[h*N,h*j,x+v],.9)}_.surf(Q.paving,q.white).sweep([[h,m,.9],[7.2,m,.92]],{step:S}),_.surf(Q.smooth,q.shade).sweep([[7.2,m,.9],[6.2,m,.9]],{step:2}),_.surf(Q.gilt,q.gold).sweep([[6.2,m,1],[6,m,1]],{step:2}),_.surf(Q.paving,q.white).sweep([[6,m,.92],[0,m,.95]],{step:2});let B=e.phone?20:28;for(let X=0;X<B;X++){let O=s+(X+.5)/B*re;os(y,u*Math.cos(O),u*Math.sin(O),m,.72,d,{n:e.phone?8:14,tint:q.white})}y.surf(Q.smooth,q.white).sweep([[u+1,w,.75],[u+1,w+1.1,.95],[u-1,w+1.1,.9],[u-1,w,.7],[u+1,w,.6]],{step:S}),y.surf(Q.gilt,q.gold).sweep([[u+1.05,w+.46,1],[u+1.05,w+.62,1]],{step:S}),y.surf(Q.smooth,q.white).sweep([[l,w+.04,.55],[u-1,w+.04,.6]],{step:S}),y.surf(Q.tiles,q.tile[1]).sweep([[u+1.5,w+1.05,.9],[f,w+5.4,1]],{step:S}),_.surf(Q.smooth,q.shade).sweep([[f,w+5.1,.6],[h,w,.4]],{step:S}),y.surf(Q.gilt,q.gold).sweep([[f,w+5.1,.9],[f,w+5.45,1]],{step:2,sense:-1}),_.surf(Q.smooth,q.white).shaft(0,0,m,3,2.7,.75,28,{cap:!0,foot:.8,head:.96}),_.surf(Q.gilt,q.gold).shaft(0,0,m+.75,1.15,.85,.55,18,{cap:!0,foot:.9});let J=12,at=.44,L=[];for(let X=0;X<J;X++){let O=s-at-X*(re-2*at)/(J-1),N=h-.32;L.push({x:N*Math.cos(O),y:N*Math.sin(O),z:m+3.15,w:7.2,h:4,a:O})}return{RG:a,RH:l,RI:h,RC:u,RS:c,RO:f,floor:m,height:d,panels:L,door:{a:s,half:p},gate:{a:s,half:g},globe:{x:0,y:0,z:m+3.6,r:2.2},rings:[{r:a-.45,t:.8,a:s,gap:g-.9},{r:l-o/2,t:.95,a:s,gap:p-.7}],circles:[{x:0,y:0,r:3.5},...Array.from({length:B},(X,O)=>{let N=s+(O+.5)/B*re;return{x:u*Math.cos(N),y:u*Math.sin(N),r:1.15}})]}};var ri=Math.PI/180,qx=(i,t,e,n,s,r,a)=>{let l=i.F.push(t,e,n,r),o=s,h=o*.5;i.surf(Q.gilt,a);let u=(c,f,d,p,v=8)=>Array.from({length:v},(g,m)=>{let x=m/v*re;return[c,Math.cos(x)*d,f+Math.sin(x)*p]});i.loft([u(-o*.36,h,.02,.02),u(-o*.32,h,o*.1,o*.12),u(-o*.1,h-o*.01,o*.105,o*.125),u(o*.16,h,o*.1,o*.13),u(o*.27,h+o*.05,o*.07,o*.11),u(o*.36,h+o*.2,o*.05,o*.075),u(o*.42,h+o*.33,o*.04,o*.055),u(o*.52,h+o*.3,o*.028,o*.04),u(o*.6,h+o*.25,o*.02,o*.03)],{closed:!0});for(let[c,f,d]of[[-o*.26,-1,0],[-o*.26,1,0],[o*.18,-1,1],[o*.18,1,1]])i.shaft(c+(d&&f>0?o*.06:0),f*o*.07,d&&f>0?o*.12:0,o*.022,o*.04,h-o*.08-(d&&f>0?o*.12:0),5);for(let c of[-1,1])i.quad([o*.14,c*o*.09,h+o*.08],[-o*.1,c*o*.1,h+o*.06],[-o*.42,c*o*.34,h+o*.5],[-o*.05,c*o*.3,h+o*.42]),i.quad([-o*.05,c*o*.3,h+o*.42],[-o*.42,c*o*.34,h+o*.5],[-o*.62,c*o*.5,h+o*.74],[-o*.2,c*o*.46,h+o*.6]);i.F.pop(l)},Zd=(i,t,e,n,s,r)=>{let a=i.F.push(t,e,n,s),l=3.6;i.surf(Q.gilt,r);let o=(h,u,c=6)=>{let f=(h-.5)*l,d=1+Math.sin(h*Math.PI)*.9;return Array.from({length:c},(p,v)=>{let g=v/c*re;return[f,Math.cos(g)*u*.8,d+Math.sin(g)*u]})};i.loft([o(0,.03),o(.12,.2),o(.4,.42),o(.62,.4),o(.85,.2),o(1,.04)],{closed:!0}),i.tri([-l*.5,-.6,1],[-l*.5,.6,1],[-l*.38,0,1.3]),i.tri([l*.02,0,2.25],[l*.2,0,2.2],[l*.02,0,2.75]),fa(i,-.15,0,2,2.5,0,{n:6,tint:r}),i.F.pop(a)},jd=(i,t,e)=>{let{B:n,Zp:s,Rp:r,Rs:a,rA:l,T:o,S:h,P:u,k:c,off:f,bridgeHalf:d,SEA:p,roadAngle:v,zSlopeTop:g,zSlopeFoot:m,islandZ:x}=t,w=zn(1160),M=[],S=[],A=(R,G)=>[R*Math.cos(G*ri),R*Math.sin(G*ri)],y=Yd(i,t,e),T=u.templeLength*h,F=u.templeWidth*h,_=-45*c,B=-135*c,J=i.to("temple"),at=i.to("temple#roof"),L=i.to("temple-interior"),X=i.to("temple-ceiling#roof"),O=i.to("pinnacles#roof"),N=.9,j=4,Y=j*N,V=F*.325,U=F*.076,H=F*.0185,W=F*.14,z=J.F,st=z.push(_,B,s,0);{let R=[q.black,q.white,q.red,q.white];for(let Xt=0;Xt<j;Xt++)J.surf(Q.smooth,R[Xt]).box(0,0,Xt*N,T+(j-1-Xt)*3.4,F+(j-1-Xt)*3.4,N,0,{foot:.78,topShade:.86});let G=11,K=22,b=H*1.7,P={n:e.phone?10:16,surf:Q.metal,tint:q.silver};for(let Xt of[-1,1])Cs(J,-T/2+b,Xt*(F/2-b),T/2-b,Xt*(F/2-b),Y,K,H,V,P);for(let Xt of[-1,1])Cs(J,Xt*(T/2-b),-F/2+b+(F-2*b)/(G-1),Xt*(T/2-b),F/2-b-(F-2*b)/(G-1),Y,G-2,H,V,P);let D=Y+V,C=b*2,Z=(T-.6)/2-C,tt=(F-.6)/2-C,yt=(Xt,fe,I,it,_t,pt,xt=!0)=>{let Gt=[[-fe,-I],[fe,-I],[fe,I],[-fe,I]],jt=[[-it,-_t],[it,-_t],[it,_t],[-it,_t]];for(let Ot=0;Ot<4;Ot++){let Yt=(Ot+1)%4,Qt=[...Gt[Ot],Xt],he=[...Gt[Yt],Xt],ve=[...jt[Yt],Xt],Jt=[...jt[Ot],Xt];xt?J.quad(Qt,he,ve,Jt,pt):J.quad(Jt,ve,he,Qt,pt)}};J.surf(Q.metal,q.silver).box(0,0,D,T-.6,F-.6,U*.4,0,{foot:.75,top:!1}),yt(D,(T-.6)/2,(F-.6)/2,Z,tt,.6,!1),J.surf(Q.metal,Ze(q.silver,.9)).box(0,0,D+U*.4,T-.2,F-.2,U*.38,0,{top:!1,foot:.9}),J.surf(Q.gilt,q.gold).box(0,0,D+U*.4,T-.1,F-.1,U*.07,0,{top:!1}),J.surf(Q.metal,q.silver).box(0,0,D+U*.78,T+1.6,F+1.6,U*.22,0,{foot:.7,top:!1}),yt(D+U,(T+1.6)/2,(F+1.6)/2,Z,tt,.9),J.surf(Q.metal,Ze(q.silver,.8)),J.wall(Z,-tt,-Z,-tt,D,D+U,.6,.75),J.wall(-Z,tt,Z,tt,D,D+U,.6,.75),J.wall(-Z,-tt,-Z,tt,D,D+U,.6,.75),J.wall(Z,tt,Z,-tt,D,D+U,.6,.75);let wt=T-30*c,Pt=F-30*c,zt=2.2,Ht=9,At=V*.66;J.surf(Q.metal,q.silver),J.wall(-wt/2,-Pt/2,wt/2,-Pt/2,Y,D,.72,.9),J.wall(wt/2,Pt/2,-wt/2,Pt/2,Y,D,.72,.9),J.wall(-wt/2,Pt/2,-wt/2,-Pt/2,Y,D,.72,.9),J.wall(wt/2,-Pt/2,wt/2,-Ht/2,Y,D,.72,.9),J.wall(wt/2,Ht/2,wt/2,Pt/2,Y,D,.72,.9),J.wall(wt/2,-Ht/2,wt/2,Ht/2,Y+At,D,.8,.9),J.surf(Q.gilt,q.gold),J.box(wt/2+.2,-Ht/2-.6,Y,.6,1.2,At+1.2,0,{foot:.8}),J.box(wt/2+.2,Ht/2+.6,Y,.6,1.2,At+1.2,0,{foot:.8}),J.box(wt/2+.2,0,Y+At,.6,Ht+2.4,1.2,0,{bottom:!0});for(let Xt of[-1,1])J.surf(Q.metal,q.silver).box(wt/2+Ht/4+.3,Xt*(Ht/2+.25),Y,Ht/2,.35,At,0,{foot:.7});let It=wt-zt*2,qt=Pt-zt*2,bt=q.orichalcum;yt(D,wt/2,Pt/2,It/2,qt/2,.85),L.surf(Q.metal,bt),L.wall(It/2,-qt/2,-It/2,-qt/2,Y,D,.6,.85),L.wall(-It/2,qt/2,It/2,qt/2,Y,D,.6,.85),L.wall(-It/2,-qt/2,-It/2,qt/2,Y,D,.6,.85),L.wall(It/2,-Ht/2,It/2,-qt/2,Y,D,.6,.85),L.wall(It/2,qt/2,It/2,Ht/2,Y,D,.6,.85),L.wall(It/2,Ht/2,It/2,-Ht/2,Y+At,D,.7,.85);for(let Xt of[-1,1])L.wall(It/2,Xt*Ht/2,wt/2,Xt*Ht/2,Y,Y+At,.7);L.surf(Q.metal,Ze(bt,.92)).slab(0,0,Y+.04,It,qt,0,.8),J.surf(Q.smooth,q.white).slab(0,0,Y+.02,T-.2,F-.2,0,.82);let ae=14,le=qt*.27;for(let Xt of[-1,1])Cs(L,-It/2+9,Xt*le,It/2-9,Xt*le,Y,ae,1.45,V,{n:e.phone?8:12,surf:Q.metal,tint:bt,shade:.85});let De=D-.05,Rn=26,Cn=10,Mn=It/Rn,ke=qt/Cn,us=[q.gold,q.silver,bt];X.surf(Q.ivory,q.ivory).quad([-It/2,qt/2,De],[It/2,qt/2,De],[It/2,-qt/2,De],[-It/2,-qt/2,De],.8);for(let Xt=0;Xt<Rn;Xt++)for(let fe=0;fe<Cn;fe++){let I=-It/2+(Xt+.5)*Mn,it=-qt/2+(fe+.5)*ke,_t=us[(Xt+fe*2)%3],pt=.3;X.surf(Q.gilt,_t).quad([I-Mn*pt,it+ke*pt,De-.12],[I+Mn*pt,it+ke*pt,De-.12],[I+Mn*pt,it-ke*pt,De-.12],[I-Mn*pt,it-ke*pt,De-.12],.9)}at.surf(Q.metal,Ze(q.silver,.8)).quad([-T/2,F/2,D+U*.3],[T/2,F/2,D+U*.3],[T/2,-F/2,D+U*.3],[-T/2,-F/2,D+U*.3],.5);let Ee=D+U,He=T/2+1.2,Zn=F/2+1.6,Pn=Ee+W;at.surf(Q.metal,Ze(q.silver,.95)),at.quad([-He,-Zn,Ee],[He,-Zn,Ee],[He,0,Pn],[-He,0,Pn],.92,.92,1,1),at.quad([He,Zn,Ee],[-He,Zn,Ee],[-He,0,Pn],[He,0,Pn],.92,.92,1,1);let Oi=e.phone?0:46;for(let Xt=0;Oi&&Xt<=Oi;Xt++){let fe=-He+2*He*Xt/Oi;for(let I of[-1,1])at.quad([fe-.25,I*Zn,Ee+.25],[fe+.25,I*Zn,Ee+.25],[fe+.25,0,Pn+.25],[fe-.25,0,Pn+.25],1)}for(let Xt of[-1,1]){let fe=Xt*(T/2-.4);at.surf(Q.metal,q.silver),Xt>0?at.tri([fe,-F/2,Ee],[fe,F/2,Ee],[fe,0,Pn-.3],.8,.8,.95):at.tri([fe,F/2,Ee],[fe,-F/2,Ee],[fe,0,Pn-.3],.8,.8,.95),at.surf(Q.gilt,q.gold);let I=W*.3,it=20;for(let _t=0;_t<it;_t++){let pt=_t/it*re,xt=(_t+1)/it*re,Gt=[fe+Xt*.25,0,Ee+W*.4],jt=[fe+Xt*.25,Math.cos(pt)*I,Ee+W*.4+Math.sin(pt)*I],Ot=[fe+Xt*.25,Math.cos(xt)*I,Ee+W*.4+Math.sin(xt)*I];Xt>0?at.tri(Gt,jt,Ot):at.tri(Gt,Ot,jt)}}let yr=(Xt,fe,I,it)=>O.surf(Q.gilt,q.gold).turned(Xt,fe,I,[[it*.1,0],[it*.13,it*.08],[it*.05,it*.2],[it*.16,it*.45],[it*.19,it*.58],[it*.07,it*.78],[it*.03,it*.9],[0,it]],8);for(let Xt of[-1,1]){yr(Xt*He,0,Pn,9.5);for(let fe of[-1,1])yr(Xt*He,fe*Zn,Ee,6.5)}let _r=e.phone?12:44;for(let Xt=1;Xt<_r;Xt++)O.surf(Q.gilt,q.gold).shaft(-He+2*He*Xt/_r,0,Pn,.5,.05,2.6,4);for(let Xt=0;Xt<=(e.phone?0:44);Xt++)for(let fe of[-1,1])O.shaft(-He+2*He*Xt/44,fe*Zn,Ee,.45,.05,1.5,4);let In=i.to("poseidon"),Bi=-It/2+34;In.surf(Q.gilt,q.gold).box(Bi-6,0,Y,30,22,1.2,0,{foot:.7,topShade:.8}),In.box(Bi-9,0,Y+3.4,9,7,2.6,0,{bottom:!0,foot:.8});for(let Xt of[-1,1]){let fe=In.F.push(Bi-9,Xt*4.2,Y+4,0);for(let I=0;I<14;I++){let it=I/14*re,_t=(I+1)/14*re;In.tri([0,0,0],[Math.cos(it)*2.8,0,Math.sin(it)*2.8],[Math.cos(_t)*2.8,0,Math.sin(_t)*2.8])}In.F.pop(fe)}fa(In,Bi-9,0,Y+6,V-6.3,-Math.PI/2,{n:12,arm:!0});for(let Xt=0;Xt<6;Xt++)qx(In,Bi+8+Xt%2*2.5,(Xt-2.5)*3.9,Y+1.2,10.5,0,q.gold);let ds=i.to("nereids"),zi=0;for(let Xt=0;Xt<22&&zi<100;Xt++)for(let[fe,I]of[[le-5.4,1],[le+5.4,-1],[-le+5.4,-1],[-le-5.4,1]]){if(zi>=88)break;let it=-It/2+12+Xt*(It-30)/21;ds.surf(Q.metal,bt).box(it,fe,Y,2.4,1.6,1.3,0,{foot:.6}),Zd(ds,it,fe,Y+.9,I>0?0:Math.PI,q.gold),zi++}for(let Xt=0;zi<100;Xt++,zi++){let fe=(-.42+.84*Xt/11)*Math.PI,I=Bi+30+Math.cos(fe)*9,it=Math.sin(fe)*15;ds.surf(Q.metal,bt).box(I,it,Y,2.4,1.6,1.3,fe,{foot:.6}),Zd(ds,I,it,Y+.9,fe,q.gold)}let Xl=i.to("votive-inside");for(let Xt=0;Xt<24;Xt++){let fe=-It/2+14+(It-60)*(Xt>>1)/11.5+4,I=Xt%2?1:-1;Cl(Xl,fe,I*(qt/2-2.6),Y,3.2+w()*1.4,I>0?-Math.PI/2:Math.PI/2,{plinth:[Q.metal,bt],tint:Xt%3?q.gold:q.silver})}let br=i.to("pillar");br.surf(Q.metal,bt).box(It/2-52,0,Y,4.2,4.2,.9,0,{foot:.7}),br.box(It/2-52,0,Y+.9,2.2,1,7.5,0,{foot:.85}),br.box(It/2-52,0,Y+8.4,2.6,1.3,.5,0,{bottom:!0})}z.pop(st);let ot=s+Y+V+U+W,ut=i.to("statues"),dt=i.to("votive-outside");{let R=T/2+15,G=F/2+15,K=2*(2*R+2*G),b=60;for(let P=0;P<b;P++){let D=(P+.5)/b*K,C,Z,tt;D<2*R?(C=-R+D,Z=-G,tt=-Math.PI/2):(D-=2*R)<2*G?(C=R,Z=-G+D,tt=0):(D-=2*G)<2*R?(C=R-D,Z=G,tt=Math.PI/2):(D-=2*R,C=-R,Z=G-D,tt=Math.PI),!(C===R&&Math.abs(Z)<9)&&Cl(ut,_+C,B+Z,s,4.4,tt+Math.PI/2,{plinth:[Q.smooth,P%2?q.white:q.red]})}for(let P=0;P<38;P++){let D=P%2?1:-1,C=f+D*(d+4+P%3*3.2),Z=-t.rampTop+12+(P>>1)*5.6,tt=P%4,yt=s;Math.hypot(C,Z)>r-6||(tt===0?(os(dt,C,Z,yt,.42,5.2,{n:8,tint:q.white}),fa(dt,C,Z,yt+5.2,2.2,-Math.PI/2,{n:6,tint:q.gold})):tt===1?(dt.surf(Q.smooth,q.white).box(C,Z,yt,1.5,.9,.4,0),dt.surf(Q.smooth,P%3?q.white:q.black).box(C,Z,yt+.4,1,.32,2.7,0,{foot:.85})):tt===2?dt.surf(Q.gilt,P%3?q.brass:q.silver).turned(C,Z,yt,[[.5,0],[.16,.25],[.12,1.1],[.3,1.25],[.85,1.75],[.9,1.85],[0,1.6]],8):Cl(dt,C,Z,yt,2.6,-Math.PI/2*D,{tint:P%3?q.gold:q.brass}))}}let St=i.to("altar"),k=_+T/2+34*c,rt=B;for(let R=0;R<3;R++)St.surf(Q.smooth,[q.white,q.red,q.white][R]).box(k,rt,s+R*.5,15-R*2.2,50-R*2.2,.5,0,{foot:.8,topShade:.88});St.surf(Q.stoneCourses,q.white).box(k,rt,s+1.5,6.5,42,3.1,0,{foot:.8}),St.surf(Q.smooth,q.white).box(k,rt,s+4.6,7.6,43.2,.55,0,{bottom:!0,foot:.8,topShade:.9});for(let R of[-1,1])St.surf(Q.smooth,q.white).box(k,rt+R*21.2,s+5.15,7.6,.9,1.3,0,{foot:.9});St.surf(Q.gilt,q.gold).box(k,rt,s+1.6,6.7,42.2,.3,0,{top:!1});let et=i.to("palace"),gt=[Q.stoneBands,q.white],ct=[Q.stoneChequer,q.white],Mt=[Q.stone,q.white],Tt=[Q.stone,q.red],Ft=q.gold;on(et,0,215*c,s,150,22,14,0,{wall:gt,cornice:q.white,base:[Q.stone,q.black],windows:2,doors:[[0,-40],[0,40]],tile:q.tile[1]}),on(et,-86,152*c,s,22,104,12,0,{wall:Mt,cornice:q.red,base:[Q.stone,q.red],windows:2,doors:[[1,-30],[1,30]],tile:q.tile[0]}),on(et,86,152*c,s,22,104,12,0,{wall:Mt,cornice:q.red,base:[Q.stone,q.red],windows:2,doors:[[3,-30],[3,30]],tile:q.tile[0]}),on(et,0,196*c,s,34,18,25,0,{wall:ct,roof:"hip",cornice:Ft,windows:2,doors:[],tile:q.tile[2]}),on(et,0,148*c,s+1.2,44,64,17,0,{wall:gt,cornice:Ft,base:[Q.stone,q.black],windows:0,doors:[],tile:q.tile[1],rise:7}),et.surf(Q.smooth,q.white).box(0,148*c,s,48,68,1.2,0,{foot:.8}),et.surf(Q.smooth,q.white).box(0,148*c-34-6,s,44,12,1.2,0,{foot:.8,topShade:.86}),et.box(0,148*c-34-13.5,s,40,3,.8,0,{foot:.8}),et.box(0,148*c-34-16,s,40,2.5,.4,0,{foot:.8}),Cs(et,-19.5,148*c-34-10.5,19.5,148*c-34-10.5,s+1.2,6,1.15,14.6,{n:14,tint:q.red}),et.surf(Q.smooth,q.white).box(0,148*c-34-6,s+15.8,44,12,1.4,0,{bottom:!0,foot:.75});{let R=et.F.push(0,148*c-34-6,0,0);Al(et,44,12,s+17.2,7,{tile:q.tile[1],wall:[Q.smooth,q.white],ridgeAlongY:!0}),et.F.pop(R)}ua(et,44,64,0,0,0,{pw:5,ph:9,leaf:q.brass});{let R=et.F.push(0,148*c,s+1.2,0);ua(et,44,64,0,0,0,{pw:5,ph:9.5,leaf:q.brass,frame:Ft}),et.F.pop(R)}for(let R of[-1,1])yi(et,R*71,150*c,s,96,7,6.2,R>0?Math.PI/2:-Math.PI/2,{wall:Mt,colTint:q.red,r:.42,simple:!1}),et.surf(Q.gilt,Ft).shaft(R*86,152*c,s+12+4.6,.5,.04,3,6);on(et,-150,62*c,s,20,66,10,-.5,{wall:Tt,cornice:q.white,base:[Q.stone,q.black],windows:2,doors:[[1,0]],tile:q.tile[3]}),on(et,160,66*c,s,20,60,10,.45,{wall:[Q.stoneCourses,q.white],cornice:q.white,windows:2,doors:[[3,0]],tile:q.tile[3]}),on(et,-205,150*c,s,18,50,8,-.95,{wall:Mt,windows:1,doors:[[1,0]],tile:q.tile[0]}),on(et,205,150*c,s,18,50,8,.95,{wall:Mt,windows:1,doors:[[3,0]],tile:q.tile[0]});for(let R of[-1,1])for(let G=0;G<7;G++)M.push({x:R*40,y:108*c+G*12,z:s,s:7+w()*2,kind:"cypress",id:"palace"});let Dt=i.to("guard-dwellings");for(let R=0;R<16;R++){let G=196+R*6.6,[K,b]=A(a+50*c,G);R%5!==4&&on(Dt,K,b,n,15,9,4.4+R%3*.6,G*ri+Math.PI/2,{wall:[Q.plaster,q.plaster[R%6]],windows:1,doors:[[0,-3]],tile:q.tile[R%4],base:[Q.stone,q.white]})}let ee=i.to("springs"),Vt=i.to("reservoirs"),Rt=i.to("baths"),Ct=(a+26+l-o)/2+2,Ut=(R,G,K,b)=>{R.surf(Q.smooth,q.white).shaft(G,K,n,8.6,8.6,.5,20,{cap:!0,foot:.8,head:.85});for(let P=0;P<10;P++){let D=P/10*re;os(R,G+Math.cos(D)*7.4,K+Math.sin(D)*7.4,n+.5,.42,5.6,{n:8,tint:b})}R.surf(Q.smooth,q.white).shaft(G,K,n+6.1,8.2,8.2,.7,20,{foot:.75}),R.surf(Q.tiles,q.tile[1]).shaft(G,K,n+6.8,8.9,.3,4.2,20,{foot:.9,head:1}),R.surf(Q.gilt,q.gold).shaft(G,K,n+10.9,.35,.03,1.6,6),R.surf(Q.smooth,q.white).shaft(G,K,n+.5,4.4,4.4,.8,16,{foot:.8}),R.shaft(G,K,n+.5,3.8,3.8,.8,16,{foot:.6}),S.push({x:G,y:K,z:n+1.1,r:3.8,id:"springs"})},[nt,$t]=A(Ct,36),[Et,Bt]=A(Ct,58);Ut(ee,nt,$t,q.red),Ut(ee,Et,Bt,q.white);let vt=(R,G,K,b,P)=>{let[D,C]=A(Ct,G),Z=G*ri+Math.PI/2,tt=R.F.push(D,C,n,Z);R.surf(Q.smooth,q.white);for(let[yt,wt,Pt,zt]of[[0,-b/2,K+1.6,.8],[0,b/2,K+1.6,.8],[-K/2,0,.8,b],[K/2,0,.8,b]])R.box(yt,wt,0,Pt,zt,.8,0,{foot:.8,topShade:.9});R.surf(Q.paving,q.white).slab(0,0,.05,K+5,b+5,0,.85),R.F.pop(tt),S.push({x:D,y:C,z:n+.6,w:K,d:b,rot:Z,id:P})};vt(Vt,47,26,15,"reservoirs"),vt(Vt,26,22,14,"reservoirs");for(let R of[20,64]){let[G,K]=A(Ct+3,R);on(Vt,G,K,n,30,15,6.5,R*ri+Math.PI/2,{wall:[Q.stoneCourses,q.white],windows:0,doors:[[0,0]],tile:q.tile[2],cornice:q.white})}let Lt=(R,G,K,b,P,D)=>{let[C,Z]=A(Ct,R);Rl(Rt,C,Z,n,G,K,b,R*ri+Math.PI/2,{depth:6,wall:P,tile:D,floor:[Q.paving,q.white]}),S.push({x:C,y:Z,z:n+.35,w:G-22,d:K-20,rot:R*ri+Math.PI/2,id:"baths"})};Lt(73,40,34,5.2,[Q.stoneBands,q.white],q.tile[1]),Lt(84,54,38,4.8,[Q.stone,q.white],q.tile[0]),Lt(96,36,32,4.6,[Q.stone,q.red],q.tile[3]);{let[R,G]=A(Ct,9);yi(Rt,R,G,n,46,9,4.6,9*ri-Math.PI/2,{wall:[Q.stone,q.black],cols:10});let[K,b]=A(Ct-13,9);vt(Rt,9,.01,.01,"baths"),S.pop(),S.push({x:K,y:b,z:n+.3,w:40,d:9,rot:9*ri+Math.PI/2,id:"baths"}),Rt.surf(Q.smooth,q.white).box(K,b,n,42,11,.5,9*ri+Math.PI/2,{foot:.8,topShade:.85})}let kt=i.to("aqueducts"),Nt=a+30*c,$=v(Nt)+.06,E=205*ri;kt.surf(Q.smooth,q.white).sweep([[Nt+1.1,n,.8],[Nt+1.1,n+.45],[Nt+.7,n+.45],[Nt+.7,n+.1,.6],[Nt-.7,n+.1,.6],[Nt-.7,n+.45],[Nt-1.1,n+.45],[Nt-1.1,n,.8]],{arcs:[[$,E]],step:6}),S.push({arc:[$,E],r0:Nt-.7,r1:Nt+.7,z:n+.34,id:"aqueducts"});for(let R=0;R<46;R++){let G=12+w()*92,[K,b]=A(a+30+w()*(l-o-a-36),G);M.push({x:K,y:b,z:n,s:7+w()*5,kind:R%3?"plane":"cypress",id:"springs",soft:!0})}let lt=e.phone?260:520;for(let R=0;R<lt;R++){let G=104+w()*86,K=a+32+w()*(l-o-a-38),[b,P]=A(K,G);M.push({x:b,y:P,z:n,s:13+w()*13,kind:["cypress","plane","pine","plane"][R%4],id:"grove"})}let ft=e.phone?300:620;for(let R=0;R<ft;R++){let G=w()*re,K=r+7+Math.floor(w()*6)/6*(a-r-14)+w()*2;Math.abs(Math.atan2(Math.sin(G-v(K)),Math.cos(G-v(K))))<(d+6)/K||M.push({x:K*Math.cos(G),y:K*Math.sin(G),z:x(K),s:3.2+w()*2.6,kind:R%3?"olive":"fruit",id:"island-gardens"})}return{trees:M,pools:S,hall:y,temple:{x:_,y:B,z:s,L:T,W:F,top:ot,floor:s+Y,room:{l:T-30*c,w:F-30*c,door:9}},altar:{x:k,y:rt},springs:[[nt,$t],[Et,Bt]]}};var Jd=(i,t,e)=>{let{B:n,Q:s,T:r,rW1:a,rL1:l,rW2:o,r1a:h,r1b:u,r2a:c,r2b:f,rcMid:d,rcHalf:p,off:v,bridgeHalf:g,SEA:m,roadAngle:x,k:w,rL2:M,rT:S,rW3:A,strip:y}=t,T=zn(1170),F=[],_=[],B=e.phone?14:8,J=i.to("ring-temples"),at=i.to("gymnasia"),L=i.to("horse-grounds"),X=i.to("gardens"),O=i.to("patterned-buildings"),N=i.to("ring-layout"),j=(Rt,Ct,Ut)=>{let nt=Rt*Math.cos(Ct);return Rt*Math.sin(Ct)<0&&Math.abs(nt-v)<g+Ut},Y=Rt=>Rt[T()*Rt.length|0],V={temple:(Rt,Ct,Ut,nt,$t)=>{let Et=J,Bt=Et.F.push(Rt,Ct,n,Ut),vt=Math.min(nt-8,78),Lt=Math.min($t-8,84);Et.surf(Q.stone,q.white);for(let[$,E,lt,ft]of[[0,Lt/2,vt,.8],[-vt/2,0,.8,Lt],[vt/2,0,.8,Lt],[-vt/4-2,-Lt/2,vt/2-4,.8],[vt/4+2,-Lt/2,vt/2-4,.8]])Et.box($,E,0,lt,ft,2.1,0,{foot:.78,topShade:.9});for(let $ of[-1,1])Et.surf(Q.stone,q.red).box($*4.6,-Lt/2,0,1.4,1.4,3.4,0,{foot:.8});let kt=11+T()*7,Nt=T()*3|0;Vd(Et,0,Lt*.12,0,kt,kt*(1.9+T()*.5),0,{wall:[[Q.stone,Q.stoneBands,Q.stoneCourses][Nt],q.white],colTint:Nt===2?q.red:q.white,tile:Y(q.tile),cols:kt>14?6:4,finial:T()<.5?q.gold:null}),Et.surf(Q.smooth,q.white).box(0,-Lt*.3,0,5,2.4,1.3,0,{foot:.8}),Et.surf(Q.paving,q.white).slab(0,-Lt*.2,.05,7,Lt*.5,0,.9),Et.F.pop(Bt);for(let $ of[-1,1])for(let E=0;E<5;E++){let lt=$*(vt/2-5),ft=-Lt/2+8+E*((Lt-16)/4),R=Math.cos(Ut),G=Math.sin(Ut);F.push({x:Rt+R*lt-G*ft,y:Ct+G*lt+R*ft,z:n,s:9+T()*4,kind:"cypress",id:"ring-temples"})}},gym:(Rt,Ct,Ut,nt,$t)=>{let Et=Math.min(nt-10,74),Bt=Math.min($t-12,62);Rl(at,Rt,Ct,n,Et,Bt,4.8,Ut,{depth:6,wall:[Q.stone,Y([q.white,q.white,q.red])],tile:Y(q.tile)});let vt=at.F.push(Rt,Ct,n,Ut);for(let Lt=0;Lt<2;Lt++)at.surf(Q.smooth,q.white).box((Lt?1:-1)*6,0,.06,1,1,1.5,0,{foot:.8});at.F.pop(vt)},horses:(Rt,Ct,Ut,nt,$t)=>{let Et=L,Bt=Et.F.push(Rt,Ct,n,Ut),vt=Math.min(nt-10,88),Lt=Math.min($t-22,58);Et.surf(Q.sand,q.sand).slab(0,-4,.07,vt,Lt,0,.95),Et.surf(Q.wood,q.wood);let kt=(lt,ft,R,G)=>{let K=Math.hypot(R-lt,G-ft),b=Math.atan2(G-ft,R-lt);for(let D of[.7,1.25])Et.box((lt+R)/2,(ft+G)/2,D,K,.12,.16,b,{bottom:!0});let P=Math.round(K/7);for(let D=0;D<=P;D++)Et.box(lt+(R-lt)*D/P,ft+(G-ft)*D/P,0,.2,.2,1.5,b,{foot:.7})};kt(-vt/2,-4-Lt/2,vt/2,-4-Lt/2),kt(vt/2,-4-Lt/2,vt/2,-4+Lt/2),kt(-vt/2,-4+Lt/2,-vt/2,-4-Lt/2),Et.F.pop(Bt);let Nt=Math.cos(Ut),$=Math.sin(Ut),E=-4+Lt/2+6;yi(Et,Rt-$*E,Ct+Nt*E,n,vt,8,4.2,Ut,{wall:[Q.stone,q.white],tile:Y(q.tile),cols:Math.round(vt/5.5),r:.3,simple:"pier"})},garden:(Rt,Ct,Ut,nt,$t)=>{let Et=X,Bt=Et.F.push(Rt,Ct,n,Ut),vt=nt-12,Lt=$t-12;Et.surf(Q.paving,q.white).slab(0,0,.06,3,Lt,0,.9),Et.slab(0,0,.065,vt,3,0,.9),Et.surf(Q.smooth,q.white).shaft(0,0,0,3.4,3.4,.7,12,{cap:!0,foot:.8,head:.55}),Et.surf(Q.stone,q.white);for(let[lt,ft,R,G]of[[0,Lt/2,vt,.5],[0,-Lt/2,vt,.5],[-vt/2,0,.5,Lt],[vt/2,0,.5,Lt]])Et.box(lt,ft,0,R,G,.9,0,{foot:.8});Et.F.pop(Bt);let kt=Y(["olive","fruit","fruit","plane"]),Nt=kt==="plane"?15:11.5,$=Math.cos(Ut),E=Math.sin(Ut);for(let lt=-vt/2+5;lt<vt/2-3;lt+=Nt)for(let ft=-Lt/2+5;ft<Lt/2-3;ft+=Nt)Math.abs(lt)<4||Math.abs(ft)<4||e.phone&&(lt+ft|0)%2||F.push({x:Rt+$*lt-E*ft+(T()-.5),y:Ct+E*lt+$*ft+(T()-.5),z:n,s:(kt==="plane"?9:4)+T()*2.5,kind:kt,id:"gardens"})},houses:(Rt,Ct,Ut,nt,$t)=>{let Et=O,Bt=Et.F.push(Rt,Ct,n,Ut),vt=2+(T()*3|0);for(let Lt=0;Lt<vt;Lt++){let kt=14+T()*12,Nt=9+T()*5,$=5+T()*5,E=-nt/2+12+(nt-24)*(Lt+.5)/vt+(T()-.5)*4,lt=(T()-.5)*($t-40);on(Et,E,lt,0,Math.min(kt,(nt-16)/vt),Nt,$,T()<.3?Math.PI/2:0,{wall:[Y([Q.stoneBands,Q.stoneChequer,Q.stoneCourses,Q.stone,Q.stone]),Y([q.white,q.white,q.red,q.black])],cornice:q.white,tile:Y(q.tile),windows:1,doors:[[0,0]]})}Et.F.pop(Bt);for(let Lt=0;Lt<4;Lt++){let kt=(T()-.5)*(nt-14),Nt=$t/2-8-T()*8,$=Math.cos(Ut),E=Math.sin(Ut);F.push({x:Rt+$*kt-E*Nt,y:Ct+E*kt+$*Nt,z:n,s:6+T()*5,kind:Y(["plane","cypress","olive"]),id:"gardens"})}}},U=(Rt,Ct,Ut,nt,$t=104)=>{let Et=(Rt+Ct)/2,Bt=Ct-Rt,vt=Math.floor(re*Et/$t),Lt=re*Et/vt-2;for(let kt=0;kt<vt;kt++){let Nt=m+(kt+.5)/vt*re;if(j(Et,Nt,Lt/2+6))continue;let $=nt[(kt*7+(T()*2|0))%nt.length];V[$](Et*Math.cos(Nt),Et*Math.sin(Nt),Ut>0?Nt+Math.PI/2:Nt-Math.PI/2,Math.min(Lt,$t),Bt)}},H=(Rt,Ct)=>N.surf(Q.paving,[226,220,205]).sweep([[Rt-Ct/2,n+.05],[Rt+Ct/2,n+.05]],{step:B,sense:-1}),W=h+r+5,z=u-r-5,st=(W+z)/2;H(st,9);let ot=["temple","garden","gym","garden","houses","horses","temple","garden","houses"];U(W,st-6,1,ot),U(st+6,z,-1,ot);{let Rt=i.to("guard-house"),Ct=x(st)+.2,Ut=(st+10)*Math.cos(Ct),nt=(st+10)*Math.sin(Ct),$t=Rt.F.push(Ut,nt,n,Ct-Math.PI/2),Et=96,Bt=78;for(let[vt,Lt,kt,Nt,$]of[[0,Bt/2-6,Et,12,0],[0,-Bt/2+6,Et,12,0],[-Et/2+6,0,12,Bt-24,0],[Et/2-6,0,12,Bt-24,0]])on(Rt,vt,Lt,0,kt,Nt,9,$,{wall:[Q.stoneBands,q.white],base:[Q.stone,q.black],cornice:q.red,windows:2,doors:[[Lt>0?0:2,0]],tile:q.tile[2]});for(let vt of[-1,1])for(let Lt of[-1,1])da(Rt,vt*(Et/2-2),Lt*(Bt/2-2),0,9,14,0,{face:[Q.stone,q.red],crown:[Q.stone,q.white]});Rt.surf(Q.sand,q.sand).slab(0,0,.06,Et-24,Bt-24,0,.95),Rt.F.pop($t)}let ut=c+r+5,dt=f-r-5,St=d-p,k=d+p,rt=i.to("racecourse"),et=i.to("racecourse-form"),gt=i.to("barracks");rt.surf(Q.sand,q.sand).sweep([[St,n+.1],[d,n+.1,.96],[k,n+.1]],{step:B,sense:-1});for(let[Rt,Ct]of[[St,-1],[k,1]])et.surf(Q.smooth,q.white).sweep([[Rt-.5,n,.8],[Rt-.5,n+1],[Rt+.5,n+1],[Rt+.5,n,.8]],{step:B,sense:1*(Ct>0,1)});for(let Rt=0;Rt<48;Rt++){let Ct=Rt/48*re;j(d,Ct,30)||(os(et,d*Math.cos(Ct),d*Math.sin(Ct),n+.1,.7,6.5,{n:8,tint:Rt%6?q.white:q.red}),Rt%6===0&&et.surf(Q.gilt,q.gold).shaft(d*Math.cos(Ct),d*Math.sin(Ct),n+6.6,.5,.05,2,6))}for(let Rt of[-.13,-.085,.085,.13]){let Ct=x(k)+Rt,Ut=et.F.push((k+9)*Math.cos(Ct),(k+9)*Math.sin(Ct),n,Ct+Math.PI/2);for(let nt=0;nt<6;nt++)et.surf(Q.smooth,q.white).box(0,-nt*1.3+3.3,0,60,1.3,.6+(5-nt)*.62,0,{foot:.8,topShade:.88});et.F.pop(Ut)}let ct=Rt=>Math.floor(re*Rt/66);for(let[Rt,Ct]of[[St-15,-1],[k+15,1],[St-31,-1],[k+31,1]]){let Ut=ct(Rt);for(let nt=0;nt<Ut;nt++){let $t=m+(nt+.5)/Ut*re;j(Rt,$t,40)||nt%9===4||on(gt,Rt*Math.cos($t),Rt*Math.sin($t),n,56,9.5,4.6,Ct>0?$t-Math.PI/2:$t+Math.PI/2,{wall:[Q.stone,nt%4===1?q.red:q.white],windows:1,doors:[[0,-16],[0,0],[0,16]],tile:q.tile[nt%4],base:[Q.stone,q.black],rise:2.3})}}H(St-45,7),H(k+45,7);let Mt=["garden","temple","gym","garden","horses","houses","garden","horses","temple","gym"];U(ut,St-50,1,Mt),U(k+50,dt,-1,Mt);let Tt=i.to("ship-sheds"),Ft=40,Dt=7.4,ee=(Rt,Ct,Ut,nt)=>{let $t=Tt.F.push(Rt,Ct,0,Ut),Et=4.3,Bt=Dt/2,vt=-Ft/2,Lt=Ft/2,kt=s+.25;Tt.surf(Q.paving,Ze(q.white,.9)).quad([-Bt,vt-7,-1.3],[Bt,vt-7,-1.3],[Bt,Lt,kt+1.2],[-Bt,Lt,kt+1.2],.6,.6,.45,.45),Tt.surf(Q.stone,q.white);for(let E=0;E<5;E++)Tt.box(Bt,vt+2+E*((Ft-4)/4),s,.7,2.2,Et,0,{foot:.7});if(Tt.box(Bt,0,s+Et,.7,Ft,.5,0,{bottom:!0,foot:.7}),nt){for(let E=0;E<5;E++)Tt.box(-Bt,vt+2+E*((Ft-4)/4),s,.7,2.2,Et,0,{foot:.7});Tt.box(-Bt,0,s+Et,.7,Ft,.5,0,{bottom:!0,foot:.7})}Tt.wall(Bt,Lt,-Bt,Lt,s,s+Et+.5,.6,.8);let Nt=s+Et+.5,$=Nt+1.9;Tt.surf(Q.tiles,q.tile[(Math.abs(Rt*7+Ct*3)|0)%4]),Tt.quad([-Bt-.2,vt-.6,Nt],[0,vt-.6,$],[0,Lt+.3,$],[-Bt-.2,Lt+.3,Nt],.95),Tt.quad([0,vt-.6,$],[Bt+.2,vt-.6,Nt],[Bt+.2,Lt+.3,Nt],[0,Lt+.3,$],.95),Tt.surf(Q.wood,q.darkWood).tri([-Bt,vt,Nt],[Bt,vt,Nt],[0,vt,$],.55),Tt.tri([Bt,Lt,Nt],[-Bt,Lt,Nt],[0,Lt,$],.7),Tt.F.pop($t)};for(let[Rt,Ct]of[[a,!0],[l,!1],[o,!0]]){let Ut=Ct?Rt+1+Ft/2:Rt-1-Ft/2,nt=Math.floor(re*Ut/(Dt+.7));for(let $t=0;$t<nt;$t++){let Et=m+($t+.5)/nt*re,Bt=$t%14;if(Bt>=6||Math.abs(Math.atan2(Math.sin(Et-m),Math.cos(Et-m)))<34/Ut||j(Ut,Et,24)||e.phone&&$t%28>=9)continue;let vt=Ct?Et-Math.PI/2:Et+Math.PI/2;if(ee(Ut*Math.cos(Et),Ut*Math.sin(Et),vt,Bt===0),T()<.7){let Lt=Ct?Ut+2:Ut-2;_.push({x:Lt*Math.cos(Et),y:Lt*Math.sin(Et),z:s+1,rot:Ct?Et+Math.PI:Et,tilt:0,sx:1})}}}let Vt=i.to("quays");for(let[Rt,Ct,Ut]of[[f+7,1,44],[S-7,-1,52]]){let nt=Math.floor(re*Rt/(Ut+26));for(let $t=0;$t<nt;$t++){let Et=m+($t+.5)/nt*re;if(!(j(Rt,Et,Ut/2+8)||Math.abs(Math.atan2(Math.sin(Et-m),Math.cos(Et-m)))<110/Rt)){if($t%5===3){let Bt=Vt.F.push((Rt+Ct*-6.4)*Math.cos(Et),(Rt+Ct*-6.4)*Math.sin(Et),0,Ct>0?Et+Math.PI/2:Et-Math.PI/2);for(let vt=0;vt<14;vt++)Vt.surf(Q.smooth,q.white).box(0,-9+vt*.7+4.5,s,9,.7,(n-s)*(vt+1)/14,0,{foot:.75,topShade:.9});Vt.F.pop(Bt);continue}yi(Vt,Rt*Math.cos(Et),Rt*Math.sin(Et),s,Ut,9,4.4,Ct>0?Et+Math.PI/2:Et-Math.PI/2,{wall:[Q.stone,$t%3?q.white:q.red],tile:q.tile[$t%4],r:.4,cols:Math.round(Ut/5.5),simple:"pier"})}}}return{trees:F,hulls:_,strip:y,rW3:A,rL2:M}};var Pl=(i,t)=>{let e=new xi(new vi,"block"),n=zn(i),s=(r,a)=>{let l=-22;for(;l<21;){let o=Math.min(22-l,7.5+n()*6.5),h=9+n()*3.5,u=n()<.35?6.2+n()*1.4:3.3+n()*1.2,c=q.plaster[n()*6|0],f=q.tile[n()*4|0],d=r+(a>0?-1:1)*(h/2-5),p=n()<.24;if(t)on(e,l+o/2,d,0,o-.25,h,u,a>0?0:Math.PI,{wall:[Q.plaster,c],tile:f,roof:p?"flat":"gable",windows:1,doors:[[0,(n()-.5)*(o-3.4)]],rise:1.3+n()*.8,ridgeAlongY:!1,over:.45,base:n()<.4?[Q.stone,q.white]:null});else{let v=e.F.push(l+o/2,d,0,a>0?0:Math.PI),g=1.3+n()*.8,m=(o-.25)/2;e.surf(Q.plaster,c).box(0,0,0,o-.25,h,u+(p?.6:0),0,{top:p,foot:.78,sides:p?15:3,topShade:.82}),p||(e.surf(Q.tiles,f).quad([-m,-h/2-.4,u-.2],[m,-h/2-.4,u-.2],[m,0,u+g],[-m,0,u+g],.92,.92,1,1),e.quad([m,h/2+.4,u-.2],[-m,h/2+.4,u-.2],[-m,0,u+g],[m,0,u+g],.92,.92,1,1),e.surf(Q.plaster,c).tri([m,-h/2,u],[m,h/2,u],[m,0,u+g],.85),e.tri([-m,h/2,u],[-m,-h/2,u],[-m,0,u+g],.85)),e.F.pop(v)}l+=o}};return s(-10,1),s(10,-1),t&&(e.surf(Q.plaster,q.plaster[1]).box(-21.6,0,0,.5,9,2.4,0,{foot:.75}),e.box(21.6,0,0,.5,9,2.4,0,{foot:.75}),e.surf(Q.wood,q.darkWood).wall(-21.9,1,-21.9,-1,0,2,.8),e.surf(Q.earth,[205,192,168]).slab(0,0,.04,43,9,0,.75)),e.geometry()},Kd=(i,t)=>{let{rT:e,core:n,B:s,SEA:r,off:a,bridgeHalf:l,canalHalf:o,k:h}=i,u=zn(1180),c={low:Pl(11,!1),high:[Pl(21,!0),Pl(22,!0),Pl(23,!0)]},f=t.phone?8:24,d=Array.from({length:f},()=>({blocks:[],cx:0,cy:0})),p=37,v=Math.floor((n-e-18)/p),g=t.phone?Math.min(v,7):v,m=[];for(let x=0;x<g;x++){let w=e+24+x*p,M=Math.floor(re*w/50);for(let S=0;S<M;S++){let A=r+(S+.5)/M*re,y=w*Math.cos(A),T=w*Math.sin(A);if(T<0&&(Math.abs(y)<o+12*h+30||Math.abs(y-a)<l+28))continue;let F=(A-r)/re*16;if(Math.abs(F-Math.round(F))*(re/16)*w<29)continue;if(u()<.035){for(let J=0;J<5;J++)m.push({x:y+(u()-.5)*34,y:T+(u()-.5)*22,z:s,s:6+u()*5,kind:u()<.5?"plane":"cypress",id:"house-form"});continue}let _=Math.min(f-1,Math.floor((A-r)/re%1*f)),B=.86+u()*.28;d[_].blocks.push({x:y,y:T,z:s,rot:A+Math.PI/2+(u()<.5?Math.PI:0),sx:re*w/M/50,sy:1,sz:.9+u()*.25,tint:[255*Math.min(1,B),255*Math.min(1,B*.985),255*Math.min(1,B*.95)],kind:u()*3|0})}}for(let x=0;x<f;x++){let w=r+(x+.5)/f*re,M=(e+n)/2;d[x].cx=M*Math.cos(w),d[x].cy=M*Math.sin(w),d[x].reach=re*M/f/2+(n-e)/2}return{protos:c,sectors:d,trees:m}};var Qd=(i,t,e,n,s)=>{let r=[];for(let a=0;a<=n;a++){let l=a/n,[o,h,u,c]=e(l),f=(l-.5)*t;r.push([[f,-o,u+c],[f,-o*.96,u*.45+c],[f,-o*.6,-h*.55+c],[f,0,-h+c],[f,o*.6,-h*.55+c],[f,o*.96,u*.45+c],[f,o,u+c]])}i.surf(Q.wood,s).loft(r,{flip:!0}),i.surf(Q.wood,Ze(q.wood,1.05));for(let a=0;a<n;a++){let l=r[a],o=r[a+1];i.quad([l[0][0],l[0][1],l[0][2]-.25],[o[0][0],o[0][1],o[0][2]-.25],[o[6][0],o[6][1],o[6][2]-.25],[l[6][0],l[6][1],l[6][2]-.25],.8)}return r},Il=(i,t,e,n=.07)=>i.quad([t[0],t[1]-n,t[2]],[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],[e[0],e[1]-n,e[2]]),tf=i=>{let t=()=>new xi(new vi,"ship"),e=(s,r)=>{let a=t(),l=37;Qd(a,l,o=>{let h=2.75*Math.min(1,Math.sin(Math.min(1,o*1.25)*Math.PI/2)**.7)*(o>.82?Math.max(.06,1-((o-.82)/.18)**1.6):1),u=o<.16?((.16-o)/.16)**2*4.2:o>.9?((o-.9)/.1)**2*1.2:0;return[Math.max(.12,h*(o<.1?.35+o*6.5:1)),1*(o<.12?o/.12:1),2.1,u]},r||i.phone?7:12,q.hull),a.surf(Q.gilt,q.brass).box(l/2+.9,0,-.5,2.6,.5,.9,0,{bottom:!0}),a.surf(Q.wood,q.hull);for(let o of[-1,1])a.box(0,o*3,1.5,l*.66,.6,.5,0,{bottom:!0,foot:.7});a.surf(Q.wood,Ze(q.red,1.1)).box(l/2-2.2,0,2.1,.5,2.6,.9,0);for(let o=-1;o<=1;o++)a.surf(Q.wood,q.hull).quad([-l/2+.2,o*.5-.12,6],[-l/2+.2,o*.5+.12,6],[-l/2+2.6+Math.abs(o)*.3,o*.9+.12,8.4-Math.abs(o)*.5],[-l/2+2.6+Math.abs(o)*.3,o*.9-.12,8.4-Math.abs(o)*.5]);if(s){a.surf(Q.wood,q.wood).shaft(1.5,0,1.8,.2,.13,10.5,5),a.box(1.5,0,11.4,.3,11,.3,0,{bottom:!0}),a.surf(Q.cloth,q.sail).box(1.5,0,10.9,.5,10.4,.55,0,{bottom:!0}),a.surf(Q.wood,q.darkWood),Il(a,[1.5,0,12.2],[l/2-2,0,2.6]),Il(a,[1.5,0,12.2],[-l/2+2,0,5]);let o=i.phone?12:28;for(let h=0;h<o;h++)for(let u of[-1,1]){let c=-l*.3+l*.6*h/(o-1);a.surf(Q.wood,q.wood).quad([c,u*2.9,1.5],[c+.14,u*2.9,1.5],[c+.14-1.2,u*7.2,.05],[c-1.2,u*7.2,.05])}}return a.geometry()},n=s=>{let r=t(),a=19;Qd(r,a,l=>{let o=3*Math.sin(Math.min(1,l*1.6)*Math.PI/2)**.6*(l>.72?Math.max(.05,Math.cos((l-.72)/.28*Math.PI/2)**.8):1),h=l<.14?((.14-l)/.14)**1.6*3:l>.86?((l-.86)/.14)**1.6*2.2:0;return[Math.max(.1,o),1.5*Math.min(1,l/.1,(1-l)/.08),1.9,h]},7,Ze(q.hull,1.15)),r.surf(Q.wood,Ze(q.hull,.9));for(let l of[-1,1])r.box(0,l*3.02,1.35,a*.7,.16,.3,0,{bottom:!0});if(r.surf(Q.wood,q.wood).shaft(.6,0,1.6,.24,.15,12.5,5),r.box(.6,0,12.6,.3,11.5,.3,0,{bottom:!0}),s){r.surf(Q.cloth,q.sail);let l=4;for(let o=0;o<l;o++){let h=12.6-o*8.2/l,u=12.6-(o+1)*8.2/l,c=p=>.75+Math.sin(p*Math.PI)*1.6,f=o/l,d=(o+1)/l;r.quad([c(f),-5.4,h],[c(f),5.4,h],[c(d),5.2,u],[c(d),-5.2,u],1,1,.9,.9)}}else r.surf(Q.cloth,q.sail).box(.6,0,12.1,.55,10.8,.6,0,{bottom:!0});r.surf(Q.wood,q.darkWood),Il(r,[.6,0,14],[a/2-.6,0,4.2]),Il(r,[.6,0,14],[-a/2+1,0,4.6]);for(let l of[-1,1])r.quad([.6,0,13.6],[.74,0,13.6],[.74,l*2.9,2],[.6,l*2.9,2]),r.surf(Q.wood,q.wood).box(-a/2+2.2,l*2.6,-.6,.25,.5,4.4,0,{foot:.8});r.surf(Q.wood,Ze(q.wood,.9)).box(-a/2+3.4,0,1.6,2.6,3.2,1.5,0,{foot:.8}),r.surf(Q.tiles,[240,200,170]);for(let[l,o]of[[3.5,-.8],[4.6,.7]])r.shaft(l,o,1.6,.34,.46,.95,5,{cap:!0});return r.geometry()};return{trireme:e(!0),hull:e(!1,!0),merchant:n(!1),sailing:n(!0)}},ef=(i,t)=>{let{rIsle:e,rW1:n,rL1:s,rW2:r,rL2:a,rW3:l,canalHalf:o,edge:h,SEA:u,off:c,bridgeHalf:f,k:d}=i,p=zn(1190),v=[],g=[],m=[],x=[],w=(S,A)=>!(A<0&&Math.abs(S-c)<f+16),M=t.phone?.5:1;for(let S=0;S<9*M;S++){let A=p()*re,y=(e+n)/2+(p()-.5)*70,T=y*Math.cos(A),F=y*Math.sin(A);w(T,F)&&v.push({x:T,y:F,z:.25,rot:A+Math.PI/2+(p()-.5)*.3})}for(let S=0;S<16*M;S++){let A=p()*re,y=(s+r)/2+(p()-.5)*190,T=y*Math.cos(A),F=y*Math.sin(A);w(T,F)&&v.push({x:T,y:F,z:.25,rot:A+Math.PI/2+(p()-.5)*.4})}for(let S=0;S<26*M;S++){let A=p()*re,y=e+5.5,T=y*Math.cos(A),F=y*Math.sin(A);w(T,F)&&Math.abs(A-Math.PI/2)>.12&&g.push({x:T,y:F,z:.25,rot:A+Math.PI/2})}for(let[S,A]of[[a+12,1],[l-12,-1]]){let y=Math.floor(re*S/15);for(let T=0;T<y;T++){if(p()>.21*M)continue;let F=u+(T+.5)/y*re,_=S*Math.cos(F),B=S*Math.sin(F);!w(_,B)||Math.abs(Math.atan2(Math.sin(F-u),Math.cos(F-u)))<90/S||m.push({x:_,y:B,z:.1,rot:A>0?F:F+Math.PI,sx:.8+p()*.5})}}for(let S=0;S<110*M;S++){let A=p()*re,y=(a+l)/2+(p()-.5)*380,T=y*Math.cos(A),F=y*Math.sin(A);w(T,F)&&(p()<.3?x:m).push({x:T,y:F,z:.1,rot:A+Math.PI/2+(p()-.5)*1.4+(p()<.5?Math.PI:0),sx:.8+p()*.5})}for(let S=0;S<26*M;S++){let A=l+p()*(h-l-30),y=p()<.5?-1:1;(p()<.55?x:m).push({x:y*o*(.25+p()*.4),y:-A,z:.1,rot:y>0?Math.PI/2:-Math.PI/2,sx:.85+p()*.45})}for(let S=0;S<30*M;S++){let A=l+60+p()*(h-l-120),y=p()<.5?-1:1;m.push({x:y*(o-3.6),y:-A,z:.1,rot:Math.PI/2*(p()<.5?1:-1),sx:.8+p()*.4})}return{triremes:v,hulls:g,merchants:m,sailing:x}};var pa=(i,t,e,n,s,r,a,l,o)=>{let h=zn(o),u=()=>.86+h()*.28;i.surf(Q.leaf,l).turned(t,e,n,[[s*.3,0],[s*u(),r*.36],[s*.8*u(),r*.72],[.01,r]],a,{rot:h()*6,squash:.9+h()*.2})},nf=i=>{let e=()=>new xi(new vi,"tree"),n=e();n.surf(Q.wood,q.trunk).shaft(0,0,0,.022,.018,.12,4),n.surf(Q.leaf,[255,255,255]).turned(0,0,.07,[[.03,0],[.095,.14],[.1,.36],[.06,.72],[.004,.93]],5);let s=e();s.surf(Q.wood,q.trunk).shaft(0,0,0,.035,.025,.42,5),pa(s,.06,.02,.3,.3,.52,5,[255,255,255],3),pa(s,-.14,-.06,.4,.26,.6,5,[235,245,225],4);let r=e();r.surf(Q.wood,q.trunk).shaft(0,0,0,.03,.02,.66,5),pa(r,0,0,.6,.36,.4,6,[215,235,205],5);let a=e();a.surf(Q.wood,q.trunk).shaft(0,0,0,.06,.04,.34,5),pa(a,0,0,.24,.46,.76,5,[255,255,255],6);let l=e();return l.surf(Q.wood,q.trunk).shaft(0,0,0,.045,.03,.36,4),pa(l,0,0,.28,.4,.72,5,[255,255,255],7),{cypress:n.geometry(),plane:s.geometry(),pine:r.geometry(),olive:a.geometry(),fruit:l.geometry()}},sf={cypress:[[150,175,150],[170,190,160],[135,160,140]],plane:[[255,255,255],[235,245,220],[220,235,205],[245,240,200]],pine:[[190,215,185],[205,225,195]],olive:[[225,232,236],[205,216,222]],fruit:[[255,255,235],[240,255,220],[225,240,205]]};var rf=Math.PI*2,gh=Object.fromEntries(si.map(i=>[i,[`${i}_c.jpg`,`${i}_n.jpg`]])),ls=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Xx=(i,t,e,n)=>{let s=Math.floor(i),r=Math.floor(t),a=i-s,l=t-r,o=a*a*(3-2*a),h=l*l*(3-2*l),u=(c,f)=>ls((c%e+e)%e,(f%e+e)%e,n);return(u(s,r)*(1-o)+u(s+1,r)*o)*(1-h)+(u(s,r+1)*(1-o)+u(s+1,r+1)*o)*h},un=(i,t,e,n,s=4)=>{let r=0,a=.5,l=1;for(let o=0;o<s;o++)r+=a*Xx(i*l,t*l,e*l,n+o),a*=.5,l*=2;return r/(1-2**-s)},Yx={ashlar:(i,t)=>{let n=Math.floor(t*8),s=t*8-n,r=2+(n%3===1?1:0),a=ls(n,0,3)*.6,l=(i+a)*r,o=Math.floor(l),h=l-o,u=1/r,c=Math.min(h*u*4.2,(1-h)*u*4.2,s*.525,(1-s)*.525)/.022,f=Math.min(1,c),d=.86+.2*ls(o%r,n,7),p=un(i*24,t*24,24,5),v=un(i*3,t*3,3,9),g=214*d*(.9+.2*p)*(.9+.14*v)*(.55+.45*f);return[g,g*.985,g*.95,f*(.75+.25*p),.9-.12*p]},paving:(i,t)=>{let n=i*5,s=t*5+Math.floor(i*5)%2*.5,r=Math.floor(n),a=Math.floor(s),l=n-r,o=s-a,h=Math.min(1,Math.min(l,1-l,o,1-o)/.03),u=.84+.22*ls(r%5,a%5,11),c=un(i*28,t*28,28,13),f=208*u*(.88+.22*c)*(.5+.5*h);return[f,f*.98,f*.93,h*(.8+.2*c),.86-.14*c]},tiles:(i,t)=>{let s=i*10,r=t*8,a=Math.floor(s),l=Math.floor(r),o=s-a,h=r-l,u=Math.abs(Math.sin(o*Math.PI)),c=h,f=.8+.3*ls(a,l,17),d=un(i*30,t*30,30,19),p=.25+.55*u+.2*(1-c),v=f*(.86+.25*d)*(.62+.38*u)*(c<.08?.7:1);return[196*v,112*v,76*v,p,.82]},plaster:(i,t)=>{let e=un(i*6,t*6,6,23,5),n=un(i*40,t*40,40,29,2),s=212*(.9+.14*e)*(.95+.08*n);return[s,s*.99,s*.96,.5+.3*e+.2*n,.9]},metal:(i,t)=>{let n=i*2,s=t*2*2,r=n-Math.floor(n),a=s-Math.floor(s),l=Math.min(1,Math.min(r,1-r,a*.5,(1-a)*.5)/.012),o=un(i*3,t*90,3,31,3),h=un(i*9,t*9,9,37),u=Math.hypot(r*8%1-.5,(a-.06)*4)<.16||Math.hypot(r*8%1-.5,(a-.94)*4)<.16?1:0,c=222*(.9+.1*o)*(.86+.16*h)*(.72+.28*l);return[c,c,c,.5*l+.1*o+.4*u,.34+.32*h+.1*o+.2*(1-l)]},grass:(i,t)=>{let e=un(i*8,t*8,8,41,5),n=un(i*60,t*60,60,43,2),s=un(i*3,t*3,3,47),r=.7+.5*e*n*2;return[(86+46*s)*r,(112+16*s)*r,54*r,n,.95]},sand:(i,t)=>{let e=un(i*10,t*10,10,53,4),n=ls(Math.floor(i*256),Math.floor(t*256),59),s=.86+.14*e+.06*n;return[216*s,198*s,162*s,.5*e+.5*n,.96]},wood:(i,t)=>{let n=t*6,s=Math.floor(n),r=n-s,a=Math.min(1,Math.min(r,1-r)/.04),l=un(i*4+ls(s,0,61)*9,t*70,4,67,3),h=(.8+.3*ls(s,1,71))*(.75+.4*l)*(.55+.45*a);return[150*h,112*h,78*h,a*(.6+.4*l),.8]},rock:(i,t)=>{let e=un(i*5,t*5,5,73,6),n=un(i*2,t*14,2,79,3),s=150*(.6+.5*e)*(.85+.25*n);return[s,s*.97,s*.92,.6*e+.4*n,.94]},leaf:(i,t)=>{let e=un(i*12,t*12,12,83,3),n=un(i*36,t*36,36,89,2),s=.45+1.1*e*(.6+.8*n);return[84*s,112*s,58*s,e*n*1.6,.86]}},af=(i,t)=>{let e=new Uint8Array(t*t*4),n=new Uint8Array(t*t*4),s=new Float32Array(t*t),r=Yx[i];for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=r((o+.5)/t,(l+.5)/t),u=(l*t+o)*4;e[u]=Math.min(255,h[0]),e[u+1]=Math.min(255,h[1]),e[u+2]=Math.min(255,h[2]),e[u+3]=255,s[l*t+o]=h[3],n[u+2]=Math.min(255,h[4]*255),n[u+3]=255}let a=t/64;for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=(s[l*t+(o+1)%t]-s[l*t+(o+t-1)%t])*a,u=(s[(l+1)%t*t+o]-s[(l+t-1)%t*t+o])*a,c=Math.hypot(h,u,1),f=(l*t+o)*4;n[f]=(-h/c*.5+.5)*255,n[f+1]=(-u/c*.5+.5)*255}return{colour:e,detail:n}},Ll=(i,t)=>{let e=new _s(new Uint8Array(i*i*4*si.length),i,i,si.length);return e.format=Ye,e.type=an,e.colorSpace=t?Ie:On,e.wrapS=e.wrapT=Pi,e.minFilter=rn,e.magFilter=Ae,e.generateMipmaps=!0,e.anisotropy=8,e},of=(i=128)=>{let t=Ll(i,!0),e=Ll(i,!1);return si.forEach((n,s)=>{let r=af(n,i);t.image.data.set(r.colour,s*i*i*4),e.image.data.set(r.detail,s*i*i*4)}),t.needsUpdate=e.needsUpdate=!0,{colour:t,detail:e,size:i}},lf=(i=256)=>{let t=new Uint8Array(i*i*4),e=5,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,s=Array.from({length:18},()=>{let a=Math.round((n()-.5)*26)||1,l=Math.round((n()-.5)*26);return[a,l,n()*rf,1/Math.hypot(a,l)**1.2]});for(let a=0;a<i;a++)for(let l=0;l<i;l++){let o=0,h=0;for(let[p,v,g,m]of s){let x=Math.cos(rf*(p*l+v*a)/i+g)*m;o+=x*p,h+=x*v}let u=-o*.16,c=-h*.16,f=Math.hypot(u,c,1),d=(a*i+l)*4;t[d]=(u/f*.5+.5)*255,t[d+1]=(c/f*.5+.5)*255,t[d+2]=(1/f*.5+.5)*255,t[d+3]=255}let r=new Sn(t,i,i,Ye);return r.wrapS=r.wrapT=Pi,r.minFilter=rn,r.magFilter=Ae,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r},cf=async(i,t)=>{let e=`${globalThis.__ASSETS__||"./"}city/`,n=globalThis.__CITYTEX__,s=async p=>{let v=await fetch(n?.[p]??e+p);if(!v.ok)throw new Error(`${p}: ${v.status}`);return createImageBitmap(await v.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"})},r=await Promise.all(si.map(async p=>{let v=t[p];if(!v)return null;try{return{colour:await s(v[0]),detail:await s(v[1])}}catch{return null}}));if(!r.some(Boolean))return null;let a=Ll(i,!0),l=Ll(i,!1),h=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(i,i):Object.assign(document.createElement("canvas"),{width:i,height:i})).getContext("2d",{willReadFrequently:!0}),u=p=>(h.setTransform(1,0,0,-1,0,i),h.clearRect(0,0,i,i),h.drawImage(p,0,0,i,i),p.close?.(),h.getImageData(0,0,i,i).data),c=128,f=p=>{let v=new Uint8Array(i*i*4),g=i/c;for(let m=0;m<i;m++)for(let x=0;x<i;x++){let w=((m/g|0)*c+(x/g|0))*4,M=(m*i+x)*4;v[M]=p[w],v[M+1]=p[w+1],v[M+2]=p[w+2],v[M+3]=255}return v},d=[];for(let p=0;p<si.length;p++){if(r[p])a.image.data.set(u(r[p].colour),p*i*i*4),l.image.data.set(u(r[p].detail),p*i*i*4);else{d.push(si[p]);let v=af(si[p],c);a.image.data.set(f(v.colour),p*i*i*4),l.image.data.set(f(v.detail),p*i*i*4)}await new Promise(v=>setTimeout(v,0))}return a.needsUpdate=l.needsUpdate=!0,{colour:a,detail:l,size:i,loaded:si.length-d.length,missing:d}};var vh=i=>new se().setRGB(i[0]/255,i[1]/255,i[2]/255,Ie),Zx=`
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
`,jx=`
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
`,Jx=()=>{let i=me.lights_fragment_begin,t=i.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),e=i.indexOf("#endif",i.indexOf("#pragma unroll_loop_end",t))+6;if(t<0||e<6)throw new Error("city: three.js light loop not as expected");return i.slice(0,t)+jx+i.slice(e)},Kx=`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`,Qx=`
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
`,ty=`
#define CITY_SURFACES ${ha.length}
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
`,ey=`
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
`,ny=`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`,iy=`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`,hf=i=>{i.fragmentShader=i.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
${Zx}`).replace("#include <lights_fragment_begin>",Jx())},Dl=({phone:i=!1}={})=>{let t=of(i?64:128),e={tColour:{value:t.colour},tDetail:{value:t.detail},uSurfA:{value:ha.map(p=>{let v=Tl[p];return new ge(v.layer,v.size,v.metal,v.rough)})},uSurfB:{value:ha.map(p=>{let v=Tl[p];return new ge(v.bump,v.pattern,v.wet,v.keep)})},uStone:{value:[vh(q.white),vh(q.black),vh(q.red)]},uGlow:{value:new se(0,0,0)},uTime:{value:0}},n=p=>{let v=new er({color:16777215,roughness:1,metalness:0,side:sn,envMapIntensity:1});v.shadowSide=sn;let g={value:p};return v.onBeforeCompile=m=>{Object.assign(m.uniforms,{tColour:e.tColour,tDetail:e.tDetail,uSurfA:e.uSurfA,uSurfB:e.uSurfB,uStone:e.uStone,uDim:g,uGlow:e.uGlow}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
${Kx}`).replace("#include <project_vertex>",`#include <project_vertex>
${Qx}`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
${ty}`).replace("#include <map_fragment>",ey).replace("#include <roughnessmap_fragment>","float roughnessFactor = cityRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = cityMetal;").replace("#include <normal_fragment_maps>",ny).replace("#include <opaque_fragment>",`${iy}
#include <opaque_fragment>`),hf(m)},v.customProgramCacheKey=()=>"city-solid",v},s=n(1),r=n(.32),a=n(2),l=lf(i?128:256),o={value:1},h={tWave:{value:l},uTime:e.uTime,uShores:{value:new Float32Array(6)},uCanal:{value:new ge(0,-1,46,1e9)},tMirror:{value:null},uMirror:{value:0},uMirrorVP:{value:new xe},uDim:o},u=p=>{let v=new er({color:16777215,roughness:.07,metalness:0,transparent:!0,envMapIntensity:1.15});return v.blending=Yr,v.blendSrc=rr,v.blendDst=ar,v.blendSrcAlpha=Zr,v.blendDstAlpha=jr,v.onBeforeCompile=g=>{Object.assign(g.uniforms,h),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 cPos;`).replace("#include <project_vertex>",`#include <project_vertex>
cPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
          uniform sampler2D tWave; uniform sampler2D tMirror; uniform float uTime; uniform float uShores[ 6 ]; uniform vec4 uCanal; uniform float uMirror; uniform mat4 uMirrorVP; uniform float uDim;
          varying vec3 cPos; vec3 cityWave; float cityShore;`).replace("#include <map_fragment>",`
          vec2 wp = cPos.xy;
          float wd = length( vViewPosition );
          vec3 w1 = texture2D( tWave, wp / 19.0 + uTime * vec2( 0.011, 0.007 ) ).xyz * 2.0 - 1.0;
          vec3 w2 = texture2D( tWave, wp / 6.1 - uTime * vec2( 0.013, 0.017 ) ).xyz * 2.0 - 1.0;
          vec3 w3 = texture2D( tWave, wp / 83.0 + uTime * vec2( -0.004, 0.006 ) ).xyz * 2.0 - 1.0;
          float calm = 1.0 / ( 1.0 + wd / 900.0 );
          cityWave = normalize( vec3( ( w1.xy * 0.55 + w2.xy * 0.3 * calm + w3.xy * 0.5 ) * ${p?"0.22":"0.42"}, 1.0 ) );
          float wr = length( wp );
          cityShore = 1e5;
          ${p?"cityShore = 2.0;":`for ( int i = 0; i < 6; i ++ ) cityShore = min( cityShore, abs( wr - uShores[ i ] ) );
          float along = dot( wp, uCanal.xy ), across = abs( wp.x * uCanal.y - wp.y * uCanal.x );
          if ( along > uShores[ 5 ] - 20.0 ) cityShore = abs( uCanal.z - across );`}
          float shallow = 1.0 - smoothstep( 0.0, 14.0, cityShore );
          diffuseColor.rgb = mix( vec3( 0.006, 0.034, 0.05 ), vec3( 0.03, 0.105, 0.1 ), shallow * 0.8 ) * ${p?"vec3( 1.6, 2.2, 2.0 )":"1.0"};
          diffuseColor.a = mix( 0.94, ${p?"0.45":"0.62"}, shallow );`).replace("#include <normal_fragment_maps>","normal = normalize( ( viewMatrix * vec4( cityWave, 0.0 ) ).xyz );").replace("#include <opaque_fragment>",`
          float wf = 0.02 + 0.98 * pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 5.0 );
          ${p?"":`if ( uMirror > 0.5 ) {
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
          #include <opaque_fragment>`),hf(g)},v.customProgramCacheKey=()=>p?"city-pool":"city-sea",v},c={uColour:{value:new se(.5,.6,.7)}},f=new Xe({uniforms:c,transparent:!0,depthWrite:!1,side:sn,blending:Yr,blendSrc:rr,blendDst:ar,blendSrcAlpha:Zr,blendDstAlpha:jr,vertexShader:`varying vec3 gN; varying vec3 gV;
      void main() {
        vec4 p = vec4( position, 1.0 ); vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p; n = mat3( instanceMatrix ) * n;
        #endif
        vec4 mv = modelViewMatrix * p; gN = normalMatrix * n; gV = - mv.xyz; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColour; varying vec3 gN; varying vec3 gV;
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`}),d=(p,v,g)=>new qe({color:new se(p,v,g),transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1,side:sn});return{solid:s,dim:r,glow:a,seaDim:o,glowColour:e.uGlow.value,sea:u(!1),pool:u(!0),ghost:f,wallLine:d(1.5,1.1,.4),canalLine:d(.25,.7,1.3),shared:e,waterUniforms:h,ghostUniforms:c,textures:t}};var Nl=new Map([...ph.from_text.map(i=>[i.id,{id:i.id,what:i.what,ref:i.ref,kind:"text",ours:i.shape==="ours"}]),...ph.choices.map(i=>[i.id,{id:i.id,what:i.what,ref:null,kind:"choice",ours:!0}])]),uf=(i={},t={})=>{let e=typeof performance<"u"?performance.now():0,n=Gd(i),s={phone:!!t.phone},r=t.materials??Dl(s),a=new Sl,l=new $e,o=zn(42),h=[],u=(O,N,j={})=>{let Y=Nl.get(N);return Y||console.warn(`city: "${N}" is not in reconstruction.json`),O.userData={...O.userData,id:N,kind:Y?.kind??"choice",ghostable:!!Y?.ours&&!j.keep,solid:O.material,...j},O.name=N,!O.userData.line&&!O.userData.water&&(O.castShadow=O.receiveShadow=!0),l.add(O),h.push(O),O},c=$d(a,n,s),f=Xd(a,n,s),d=jd(a,n,s),p=Jd(a,n,s);for(let[O,N]of a.bins){if(!N.nv)continue;let[j,Y]=O.split("#");u(new pe(N.geometry(),r.solid),j,Y?{[Y]:!0}:{})}for(let O of qd(n,r))u(O,O.userData.id);for(let O of[...d.pools,...f.basins.map(N=>({...N,z:N.z+.8,rot:0,id:"aqueducts"}))]){let N=O.arc?new $n(O.r0,O.r1,Math.ceil((O.arc[1]-O.arc[0])*O.r1/6),1,O.arc[0],O.arc[1]-O.arc[0]):O.r?new Hr(O.r,20):new Fn(O.w,O.d),j=new pe(N,r.pool);O.arc?j.position.z=O.z:(j.position.set(O.x,O.y,O.z),j.rotation.z=O.rot??0),j.receiveShadow=!0,u(j,O.id,{water:!0,pool:!0})}let v=nf(s),g=Kd(n,s),m=new Map;for(let O of[...d.trees,...p.trees,...g.trees]){let N=`${O.kind}|${O.id}`;m.has(N)||m.set(N,[]);let j=sf[O.kind],Y=j[o()*j.length|0],V=.85+o()*.3;m.get(N).push({x:O.x,y:O.y,z:O.z-.1,rot:o()*re,sx:O.s*(.9+o()*.3),sy:O.s*(.9+o()*.3),sz:O.s,tint:[Math.min(255,Y[0]*V),Math.min(255,Y[1]*V),Math.min(255,Y[2]*V)]})}let x=0;for(let[O,N]of m){let[j,Y]=O.split("|");x+=N.length,u(Ni(v[j],r.solid,N),Y,{keep:Y!=="house-form",tree:!0})}let w=tf(s),M=ef(n,s),S=[255,255,255],A=O=>O.map(N=>({...N,sy:N.sx,sz:N.sx,tint:N.tint??S}));for(let O of c.dock.mouths)M.hulls.push({x:O,y:c.dock.yFace-c.dock.dockDeep*.5,z:.2,rot:-Math.PI/2});u(Ni(w.hull,r.solid,A(p.hulls)),"shipyards"),u(Ni(w.hull,r.solid,A(M.hulls)),"triremes",{reflect:!0}),u(Ni(w.trireme,r.solid,A(M.triremes)),"triremes",{reflect:!0}),u(Ni(w.merchant,r.solid,A(M.merchants)),"merchant-ships",{reflect:!0}),u(Ni(w.sailing,r.solid,A(M.sailing)),"merchantmen",{reflect:!0});let y=g.sectors.map(O=>{let N=O.blocks.length?u(Ni(g.protos.low,r.solid,O.blocks),"house-form"):null,j=s.phone?[]:[0,1,2].map(Y=>{let V=O.blocks.filter(H=>H.kind===Y);if(!V.length)return null;let U=u(Ni(g.protos.high[Y],r.solid,V),"house-form");return U.visible=!1,U}).filter(Boolean);return{...O,low:N,high:j,near:!1}}),T=new Set(["wall-brass","wall-tin","wall-orichalcum","ring-walls","wall-towers","bridges","bridge-gates","stone","rings","ship-sheds","quays","rock-docks","ship-passages","canal"]);for(let O of h)(O.userData.reflect||T.has(O.userData.id)&&!O.userData.water&&!O.userData.line&&!O.userData.teeth)&&O.layers.enable(1);let F=mh.filter(O=>h.some(N=>N.userData.id===O)).map(O=>{let N=Nl.get(O);return{id:O,what:N.what,ref:N.ref,kind:N.kind}}),_=n,B=d.temple,J={canal:[0,-(_.rW3+330),520,74,0],"merchant-ships":[-420,-(_.rW3-150),380,76,300],houses:[-360,-(_.rT+190),300,68,25],"house-form":[-360,-(_.rT+190),160,74,25],harbours:[_.off-260,-(_.rL2+_.rW3)/2,1e3,68,332],bridges:[_.off+150,-(_.rL2+300),420,74,330],"bridge-gates":[_.off+6,-(_.bridges[2][1]+70),120,80,0],aqueducts:[_.off-8,-(_.bridges[1][1]+30),90,72,20],"wall-brass":[_.off+330,-(_.r2b-60),420,78,300],"ring-walls":[_.off+60,-(_.r2b+30),150,80,60],"wall-towers":[_.off+200,-(_.r2b+10),160,78,310],"ship-passages":[0,-(_.rL2+110),170,82,0],racecourse:[_.off+420,-(_.rcMid-60),520,70,290],barracks:[_.off+240,-(_.rcMid+_.rcHalf+30),170,70,300],"horse-grounds":[_.off+500,-(_.r2a+80),300,64,330],gymnasia:[_.off+330,-(_.r1a+70),260,62,320],gardens:[_.off+260,-(_.r2b-70),240,62,300],"ring-temples":[_.off-300,-(_.r1a+80),240,66,30],"patterned-buildings":[_.off-420,-(_.r1b-60),220,66,20],shipyards:[_.off+330,-(_.rW2-60),260,74,300],"ship-sheds":[_.off+330,-(_.rW2-60),160,78,300],"wall-tin":[_.off+220,-(_.r1b+60),300,78,310],"guard-house":[_.off+200,-(_.r1a+130),260,62,60],"rock-docks":[0,_.rIsle+60,150,80,180],"wall-orichalcum":[_.off+150,-(_.rIsle+60),240,78,320],"guard-dwellings":[-(_.Rs+50),-40,190,66,90],springs:[330,250,190,66,230],reservoirs:[300,300,200,62,230],baths:[120,420,220,62,190],grove:[-220,380,300,66,150],palace:[0,110,330,62,0],shrine:[0,-20,150,68,15],"shrine-wall":[0,-30,120,72,0],hall:[0,0,60,30,0],altar:[d.altar.x+10,d.altar.y,110,72,280],statues:[B.x+B.L/2+20,B.y-B.W/2-10,90,78,300],"votive-outside":[_.off,-(_.rampTop-40),70,78,0],temple:[B.x,B.y,215,70,40],pinnacles:[B.x+B.L/2,B.y,120,60,270],"temple-interior":[B.x+20,B.y,70,84,270,B.floor],"temple-ceiling":[B.x-20,B.y,40,62,270,B.floor],poseidon:[B.x-30,B.y,60,84,270,B.floor],nereids:[B.x+10,B.y+12,30,80,250,B.floor],"votive-inside":[B.x+30,B.y-20,30,80,200,B.floor],pillar:[B.x+22,B.y,26,82,270,B.floor],rings:[0,0,_.rW3*3.4,58,330],island:[0,-60,900,62,0],hill:[_.off+40,-(_.rampFoot+40),200,76,350],stone:[_.off+120,-(_.r1b+40),120,80,300],quays:[_.off+150,-(_.rT-20),140,82,290],"outer-wall":[0,0,_.rWall*2.6,20,0],extent:[0,-_.core,900,66,0],triremes:[_.off+140,-(_.rL1+150),200,78,300],merchantmen:[60,-(_.rW3+200),200,80,0],"island-gardens":[-(_.Rp+30),-30,160,70,90],"racecourse-form":[_.off+60,-(_.rcMid+_.rcHalf+30),180,76,330],"ring-layout":[_.off+300,-(_.r1a+140),300,62,300]},at={centre:[0,0],harbour:[_.off-40,-(_.rL2+150)],temple:[B.x+10,B.y],quay:[_.off+40,-(_.rT-24)]},L=(typeof performance<"u"?performance.now():0)-e,X=0;for(let O of h){let N=O.geometry,j=(N.index?N.index.count:N.attributes.position.count)/3;X+=j*(O.isInstancedMesh?O.count:1)}return{group:l,meshes:h,parts:F,spots:J,lab:at,sectors:y,plan:n,temple:d.temple,hall:d.hall,radius:n.edge+80,wallRadius:n.rWall,coreRadius:n.rW3,shores:n.shores,materials:r,params:n.P,bank:n.B,stats:{buildMs:L,triangles:X,meshes:h.length,trees:x}}};var sy=i=>{let t=Math.acos(Wt(i,-1,1))*180/Math.PI,e=Math.min(38,1/(Math.max(i,0)+.15*Math.max(93.885-t,.5)**-1.253)),n=Wt((i+.035)/.055,0,1),s=n*n*(3-2*n);return[.0464+.0098+.012,.1085+.0282+.012,.2648+.0013+.012].map(r=>Math.exp(-r*e)*s)},ry=i=>{let t=Wt((i+.14)/.44,0,1),e=t*t*(3-2*t);return[.1+.1*e,.13+.17*e,.26+.24*e].map(s=>s*e*.55+.004)},Fl=class{constructor(t){this.world=t,this.scene=new Wn,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.active=!1,this.site=null,this.city=null,this.params={...Ml},this.pending=0,this.buildMs=null,this.ghost=!1,this.lit=null,this.cut=!1;let e=t.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=ws;let n=t.phone?1024:2048;this.suns=[0,1,2].map(r=>{let a=new qr(16777215,Math.PI);return a.castShadow=!0,a.shadow.mapSize.set(r===2&&!t.phone?4096:n,r===2&&!t.phone?4096:n),a.shadow.autoUpdate=!1,a.shadow.radius=1.4,a.layers.enable(1),this.scene.add(a,a.target),a}),this.cascades=[{half:0,c:new ht(1e9,0,0)},{half:0,c:new ht(1e9,0,0)},{half:0,c:new ht(1e9,0,0)}],this.pmrem=new hr(e),this.skyUniforms={uSky:{value:new ht(.1,.16,.27)},uSun:{value:new ht(0,0,1)},uSunColour:{value:new ht(1,1,1)}};let s=new pe(new Un(50,32,16),new Xe({side:nn,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir);
          float up = d.z;
          vec3 sky = mix(uSky * 0.9, (uSky + vec3(dot(uSky, vec3(0.34)))) * 1.7, 1.0 - pow(max(up, 0.0), 0.42));   // paler and brighter towards the horizon
          sky += uSunColour * 0.35 * pow(max(dot(d, uSun), 0.0), 24.0);
          vec3 ground = (uSky * 0.6 + uSunColour * max(uSun.z, 0.0) * 0.4) * vec3(0.92, 0.86, 0.76);   // sunlit pale stone and earth, seen from above them
          gl_FragColor = vec4(mix(ground, sky, smoothstep(-0.06, 0.04, up)), 1.0);
        }`}));this.skyScene=new Wn,this.skyScene.add(s),this.dome=new pe(new Un(1,32,12,0,Math.PI*2,0,Math.PI/2+.06),new Xe({side:nn,uniforms:this.skyUniforms,depthWrite:!0,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir.xzy * vec3(1.0, -1.0, 1.0));
          float up = max(d.z, 0.0);
          vec3 sky = mix(uSky * 1.25, (uSky + vec3(dot(uSky, vec3(0.3)))) * 1.5, 1.0 - pow(up, 0.5));
          sky += uSunColour * 0.25 * pow(max(dot(d, uSun), 0.0), 12.0);
          gl_FragColor = vec4(sky, 1.0);
        }`})),this.dome.rotation.x=Math.PI/2,this.dome.frustumCulled=!1,this.dome.renderOrder=-1,this.scene.add(this.dome),this.lastSun=new ht,this.env=null,this.materials=null,this.mirror=t.phone?null:{target:null,camera:new We,vp:new xe,on:!1},this.mirror&&this.mirror.camera.layers.set(1),this.ray=new Xr}get turn(){return Math.PI-this.params.seaBearing*mt}toCity(t,e){let n=-this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toScene(t,e){let n=this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toLonLat(t,e){let n=this.site.lat*mt;return[this.site.lon*mt+t/(ne*Math.cos(n)),n+e/ne]}fromLonLat(t,e){let n=this.site.lat*mt,s=t-this.site.lon*mt;return s=Math.atan2(Math.sin(s),Math.cos(s)),[s*ne*Math.cos(n),(e-n)*ne]}place({lat:t,lon:e,bearing:n=180,stadion:s=this.params.stadion}){let r=!this.city||s!==this.params.stadion;if(this.params={...this.params,stadion:s,seaBearing:n},r){let a=performance.now();if(this.city){this.scene.remove(this.city.group);for(let h of this.city.meshes)h.geometry.dispose()}this.materials||(this.materials=Dl({phone:this.world.phone}),this.loadPictures()),this.city=uf(this.params,{phone:this.world.phone,materials:this.materials}),this.scene.add(this.city.group);let l=this.materials.waterUniforms,o=this.city.shores;for(let h=0;h<6;h++)l.uShores.value[h]=o[h];l.uCanal.value.z=this.city.plan.canalHalf,this.buildMs=Math.round(performance.now()-a),this.applyLook()}this.city.group.rotation.z=this.turn,this.city.group.updateMatrixWorld(!0);{let[a,l]=this.toScene(0,-1);this.materials.waterUniforms.uCanal.value.x=a,this.materials.waterUniforms.uCanal.value.y=l}this.site={lat:t,lon:e,frame:ii(e*mt,t*mt)},this.active=!0,this.lastSun.set(0,0,0);for(let a of this.cascades)a.half=0;return this.ground(),this.world.stamp++,this.city}loadPictures(){Object.keys(gh).length&&(this.pending++,cf(this.world.phone?512:1024,gh).then(t=>{if(t){let e=this.materials.shared,n=[e.tColour.value,e.tDetail.value];e.tColour.value=t.colour,e.tDetail.value=t.detail;for(let s of n)s.dispose();this.pictures={loaded:t.loaded,missing:t.missing}}else this.pictures={loaded:0,missing:"all"}}).catch(t=>{this.pictures={loaded:0,error:String(t)}}).finally(()=>{this.pending--,this.world.stamp++}))}remove(){this.active=!1,this.site=null,this.world.globe.shared.uPad.value.set(0,0,0,0),this.world.stamp++}ground(){let t=this.world.globe,e=t.shared,n=this.site,s=e.uWater.value>.5?e.uSea.value:-1e5,r=Math.max(t.heightAt(n.lon*mt,n.lat*mt)??0,s);n.h=r;let a=n.frame;e.uPad.value.set(a.up[0],a.up[1],a.up[2],this.city.radius-80),e.uPadH.value=r-2;let l=ne+r*e.uExag.value;n.origin=[a.up[0]*l,a.up[1]*l,a.up[2]*l]}floorAt(t,e){if(!this.active||!this.city)return null;let[n,s]=this.fromLonLat(t,e);if(Math.hypot(n,s)>this.city.plan.edge)return null;let[r,a]=this.toCity(n,s),l=this.localFloor(r,a);return l==null?null:this.site.h*this.world.globe.shared.uExag.value+l}localFloor(t,e){let n=this.city.plan.groundZ(t,e);if(n==null)return null;let s=this.city.temple,r=this.city.hall,a=Math.max(Math.abs(t-s.x)-s.L/2,Math.abs(e-s.y)-s.W/2);return a<5.1?s.floor-Math.max(0,Math.ceil(a/1.7))*((s.floor-s.z)/4):r&&t*t+e*e<r.RS*r.RS?r.floor:n}pick(t,e){if(!this.active||!this.city)return null;let n=this.world.renderer.domElement,s=n.clientWidth||1,r=n.clientHeight||1;this.ray.setFromCamera(new ie(t/s*2-1,1-e/r*2),this.camera);let a=this.ray.intersectObjects(this.city.meshes.filter(c=>c.visible&&!c.userData.line),!1);if(!a.length)return null;let l=a[0],o=Nl.get(l.object.userData.id),[h,u]=this.toLonLat(l.point.x,l.point.y);return{id:l.object.userData.id,what:o?.what??l.object.userData.id,ref:o?.ref??null,kind:o?.kind??"choice",lon:h,lat:u}}parts(){return this.city?this.city.parts.map(t=>({...t})):[]}viewOf(t){let e=this.city?.spots[t];if(!e||!this.site)return null;let[n,s]=this.toScene(e[0],e[1]),[r,a]=this.toLonLat(n,s);return{lat:a,lon:r,range:e[2],tilt:e[3]*mt,heading:((e[4]+this.params.seaBearing-180)%360+360)%360*mt}}highlight(t){this.lit=t&&this.city?.meshes.some(e=>e.userData.id===t)?t:null,this.applyLook()}setGhost(t){this.ghost=!!t,this.applyLook()}cutaway(t){this.cut=!!t,this.applyLook()}applyLook(){if(!this.city)return;let t=this.materials;for(let e of this.city.meshes){let n=e.userData;if(n.roof&&(e.visible=!this.cut),n.line)continue;let s=this.ghost&&n.ghostable;if(n.water){e.material=n.solid;continue}e.material=s?t.ghost:this.lit?n.id===this.lit?t.glow:t.dim:t.solid,e.castShadow=!s,n.lodHidden&&(e.visible=!1)}t.seaDim.value=this.lit&&this.lit!=="harbours"&&this.lit!=="canal"?.45:1;for(let e of this.cascades)e.half=0;this.world.stamp++}labSpots(){let t={};for(let[e,n]of Object.entries(this.city.lab))t[e]=this.toScene(n[0],n[1]);return t}forceShadows(){this.cascades[0].half=0,this.cascades[1].half=0}update(){if(!this.active)return null;this.ground();let{control:t,camera:e,sun:n,renderer:s}=this.world,r=this.site.frame,a=this.site.origin,l=t.basis,o=[-l.fwd[0],-l.fwd[1],-l.fwd[2]],h=[t.pos[0]-a[0],t.pos[1]-a[1],t.pos[2]-a[2]],u=U=>[hn(U,r.east),hn(U,r.north),hn(U,r.up)],c=u(l.right),f=u(l.up),d=u(o),p=u(h),v=this.camera;v.matrix.set(c[0],f[0],d[0],p[0],c[1],f[1],d[1],p[1],c[2],f[2],d[2],p[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert(),v.projectionMatrix.copy(e.projectionMatrix),v.projectionMatrixInverse.copy(e.projectionMatrixInverse);let g=this.materials,m=this.city.plan;g.shared.uTime.value=this.world.time,this.dome.visible=p[2]<2500&&p[2]>-50,this.dome.visible&&(this.dome.position.set(p[0],p[1],p[2]-40),this.dome.scale.setScalar(38e3),this.dome.updateMatrixWorld());let x=-d[2],w=x<-.02?Wt((p[2]-m.B)/-x,5,6e3):6e3,M=[p[0]-d[0]*w,p[1]-d[1]*w],S=w,[A,y]=this.toCity(p[0],p[1]);for(let U of this.city.sectors){let H=U.high.length>0&&Math.hypot(A-U.cx,y-U.cy,p[2])<640;H!==U.near&&(U.near=H,this.cascades[0].half=0,this.cascades[1].half=0),U.low&&(U.low.visible=!H,U.low.userData.lodHidden=H);for(let W of U.high)W.visible=H,W.userData.lodHidden=!H}let T=u([n.dir.x,n.dir.y,n.dir.z]),F=T[2];if(this.lastSun.distanceToSquared(new ht(T[0],T[1],T[2]))>1e-5){this.lastSun.set(T[0],T[1],T[2]);let U=sy(F),H=ry(F);for(let W of this.suns)W.color.setRGB(U[0],U[1],U[2]);this.skyUniforms.uSky.value.set(H[0],H[1],H[2]),this.skyUniforms.uSun.value.set(T[0],T[1],T[2]),this.skyUniforms.uSunColour.value.set(U[0],U[1],U[2]),this.env?.dispose(),this.env=this.pmrem.fromScene(this.skyScene,0,1,200),this.scene.environment=this.env.texture,g.ghostUniforms.uColour.value.setRGB(H[0]*2.2+U[0]*.25,H[1]*2.2+U[1]*.25,H[2]*2.2+U[2]*.25),g.glowColour.setRGB(U[0]*.05+H[0]*.12,U[1]*.05+H[1]*.12,U[2]*.04+H[2]*.1);for(let W of this.cascades)W.half=0}let B=[T[0],T[1],Math.max(T[2],.03)],J=Math.hypot(B[0],B[1],B[2]);B[0]/=J,B[1]/=J,B[2]/=J;let at=Math.max(B[2],.14),X=(U=>1.5**Math.ceil(Math.log(U)/Math.log(1.5)))(Wt(S*1.1,40,620)),O=[{half:X,c:[M[0]-d[0]*X*.35,M[1]-d[1]*X*.35,m.B]},{half:Math.min(X*5.5,m.edge*1.02),c:[M[0]-d[0]*X*1.2,M[1]-d[1]*X*1.2,m.B]},{half:m.edge*1.02,c:[0,0,m.B]}],N=0;for(let U=0;U<3;U++){let H=this.cascades[U],W=O[U],z=this.suns[U];if(!(H.half!==W.half||Math.hypot(H.c.x-W.c[0],H.c.y-W.c[1])>W.half*.22)||N>0&&U<2&&H.half>0)continue;H.half=W.half,H.c.set(W.c[0],W.c[1],W.c[2]);let ot=W.half*1.6+80/at+200,ut=W.half*1.5+80/at,dt=2*W.half/z.shadow.mapSize.x;z.position.set(W.c[0]+B[0]*ot,W.c[1]+B[1]*ot,W.c[2]+B[2]*ot),z.target.position.set(W.c[0],W.c[1],W.c[2]),z.target.updateMatrixWorld(),z.updateMatrixWorld();let St=z.shadow.camera;St.left=-W.half,St.right=W.half,St.top=W.half,St.bottom=-W.half,St.near=ot-ut,St.far=ot+ut,St.updateProjectionMatrix(),z.shadow.bias=-(.02+dt*1.1)/(2*ut),z.shadow.normalBias=dt*1.5+.02,z.shadow.needsUpdate=!0,U<2&&N++}let j=this.mirror,Y=g.waterUniforms;if(!!j&&p[2]<1400&&p[2]>.3&&!this.ghost){let U=s.getDrawingBufferSize(new ie),H=Math.max(2,U.x>>1),W=Math.max(2,U.y>>1);(!j.target||j.target.width!==H||j.target.height!==W)&&(j.target?.dispose(),j.target=new Oe(H,W,{type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!0}));let z=j.camera,st=new ht(p[0],p[1],-p[2]);z.fov=Wt(t.fovY/mt*1.25,10,120),z.aspect=e.aspect,z.near=1,z.far=16e3,z.updateProjectionMatrix(),z.position.copy(st),z.up.set(f[0],f[1],-f[2]),z.lookAt(st.x-d[0],st.y-d[1],st.z+d[2]),z.updateMatrixWorld(),z.matrixWorldInverse.copy(z.matrixWorld).invert(),j.vp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse);let ot=new Nn(new ht(0,0,1),-.05).applyMatrix4(z.matrixWorldInverse),ut=new ge(ot.normal.x,ot.normal.y,ot.normal.z,ot.constant),dt=z.projectionMatrix,St=new ge;St.x=(Math.sign(ut.x)+dt.elements[8])/dt.elements[0],St.y=(Math.sign(ut.y)+dt.elements[9])/dt.elements[5],St.z=-1,St.w=(1+dt.elements[10])/dt.elements[14],ut.multiplyScalar(2/ut.dot(St)),dt.elements[2]=ut.x,dt.elements[6]=ut.y,dt.elements[10]=ut.z+1,dt.elements[14]=ut.w;let k=s.shadowMap,rt=k.autoUpdate,et=s.getRenderTarget();k.autoUpdate=!1,k.needsUpdate=!1,s.setRenderTarget(j.target),s.setClearColor(0,0),s.clear(!0,!0,!1),s.render(this.scene,z),s.setRenderTarget(et),s.setClearColor(0,1),k.autoUpdate=rt,Y.tMirror.value=j.target.texture,Y.uMirrorVP.value.copy(j.vp),Y.uMirror.value=1}else Y.uMirror.value=0;return{scene:this.scene,camera:v}}view(){return{lat:this.site.lat*mt,lon:this.site.lon*mt,range:this.city.coreRadius*3.4,tilt:58*mt,heading:(this.params.seaBearing+150)%360*mt}}};var xh={claimed:{ink:"#ffab5c",name:"Claimed"},checked:{ink:"#7fc0ff",name:"Checked"},found:{ink:"#7fe3a0",name:"Found"},context:{ink:"#e9edf5",name:"Place"},plato:{ink:"#f2cc6b",name:"Plato's measure"}},df={claimed:["claimed","context","plato"],found:["checked","found","context","plato"],all:["claimed","checked","found","context","plato"]},ff=8,ay=new Set(["core","sample","dive","dig","place"]),pf={context:0,plato:1,checked:2,found:3,claimed:4},oy=[[/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i,"#4a4d55"],[/ash|tephra|pumice|ignimbrite/i,"#b9b4ad"],[/salt|evaporite|gypsum|halite/i,"#eef0f2"],[/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i,"#d9cfb4"],[/peat|organic|lignite|soil/i,"#4b3a2a"],[/shell|coquina/i,"#e6dcc8"],[/gravel|pebble|cobble|conglomerate|breccia/i,"#8d8478"],[/sand/i,"#d7bf86"],[/silt/i,"#a89a80"],[/clay|mud|turbidite/i,"#7d7468"]],yh=i=>(oy.find(([t])=>t.test(i??""))??[0,"#9a9488"])[1],gf=i=>i.type==="Polygon"?i.coordinates:i.type==="MultiPolygon"?i.coordinates.flat():[],vf=i=>i.type==="LineString"?[i.coordinates]:i.type==="MultiLineString"?i.coordinates:[],xf=i=>i.type==="Point"?[i.coordinates]:i.type==="MultiPoint"?i.coordinates:[],yf=i=>[...xf(i),...vf(i).flat(),...gf(i).flat()],_i=i=>{let t=i.geometry;if(t.type==="Point")return t.coordinates;if(t.type==="LineString")return t.coordinates[Math.floor(t.coordinates.length/2)];let e=yf(t);return[e.reduce((n,s)=>n+s[0],0)/e.length,e.reduce((n,s)=>n+s[1],0)/e.length]},mf=i=>{let t=yf(i.geometry),e=_i(i),n=0;for(let s of t)n=Math.max(n,Math.hypot((s[0]-e[0])*Math.cos(e[1]*mt),s[1]-e[1])*mt*ne);return n*2},ly=i=>i.position?.how==="from-description"||(i.position?.error_m??0)>=500,Ul=class{constructor(t){this.world=t,this.scene=new Wn,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.entry=null,this.extras=[],this.mode="all",this.focus=null,this.selected=null,this.labels=[],this.markers=new Map,this.on=0,this.origin=null;let e=t.globe.shared;this.size=t.phone?1024:2048,this.near=this.sheet(),this.far=this.sheet(),e.tDecal.value=this.near.tex,e.tDecalFar.value=this.far.tex,this.painted=null,this.dirty=!0,this.tick=0,this.geo=this.shapes(),this.mats=new Map}sheet(){let t=document.createElement("canvas");t.width=t.height=this.size;let e=new Li(t);return e.colorSpace=On,e.premultiplyAlpha=!0,e.generateMipmaps=!0,e.minFilter=rn,e.anisotropy=8,{canvas:t,g:t.getContext("2d"),tex:e}}shapes(){let t=(e,n=0)=>(e.rotateX(Math.PI/2),e.translate(0,0,n),e);return{stem:t(new Ji(.007,.007,1,6),.5),core:t(new Ji(.05,.05,1,20,1,!1),.5),cap:t(new Ji(.066,.066,.03,20),1),sample:new Vr(.085).translate(0,0,1.06),dive:new Un(.075,18,12).translate(0,0,1.06),dig:new ji(.13,.13,.13).rotateZ(Math.PI/4).translate(0,0,1.06),place:new Un(.045,14,10).translate(0,0,.62)}}ink(t,e=1.7){let n=`${t}:${e}`;return this.mats.has(n)||this.mats.set(n,new qe({color:new se(xh[t].ink).multiplyScalar(e)})),this.mats.get(n)}column(t){let e=document.createElement("canvas");e.width=8,e.height=256;let n=e.getContext("2d"),s=(t.column??[]).filter(a=>Number.isFinite(a.from_m)&&Number.isFinite(a.to_m)&&a.to_m>a.from_m);if(s.length){let a=Math.min(...s.map(o=>o.from_m)),l=Math.max(...s.map(o=>o.to_m));n.fillStyle="#9a9488",n.fillRect(0,0,8,256);for(let o of s)n.fillStyle=yh(o.what),n.fillRect(0,(o.from_m-a)/(l-a)*256,8,Math.max(2,(o.to_m-o.from_m)/(l-a)*256));n.fillStyle="rgba(0,0,0,0.35)";for(let o of s)n.fillRect(0,(o.to_m-a)/(l-a)*256-1,8,1.5)}else{n.fillStyle=xh[t.side].ink,n.fillRect(0,0,8,256),n.fillStyle="rgba(0,0,0,0.28)";for(let a=32;a<256;a+=32)n.fillRect(0,a,8,2)}let r=new Li(e);return r.colorSpace=Ie,new qe({map:r,color:new se(1.25,1.25,1.25)})}marker(t){let e=new $e;if(t.kind==="core")e.add(new pe(this.geo.core,this.column(t)),new pe(this.geo.cap,this.ink(t.side)));else{let n=new pe(this.geo.stem,this.ink("context",1.1));t.kind==="place"&&(n.scale.z=.6),e.add(n,new pe(this.geo[t.kind]??this.geo.dive,this.ink(t.side)))}return e.userData.feature=t,e}show(t){this.entry=t??null,this.focus=null,this.selected=null,this.rebuild()}setExtras(t){this.extras=t??[],this.rebuild()}setMode(t){df[t]&&t!==this.mode&&(this.mode=t,this.rebuild())}setFocus(t){this.focus=t?.length?new Set(t):null,this.restyle()}select(t){this.selected=t??null,this.restyle()}get active(){return!!(this.entry||this.extras.length)}visible(){let t=new Set(df[this.mode]);return[...this.entry?.features??[],...this.extras].filter(e=>t.has(e.side)&&e.geometry).sort((e,n)=>pf[e.side]-pf[n.side])}lit(t){return!this.focus||this.focus.has(t.id)||t.id===this.selected}rebuild(){for(let e of this.markers.values()){this.scene.remove(e);for(let n of e.children)n.material.map&&(n.material.map.dispose(),n.material.dispose())}this.markers.clear();let t=this.entry?.centre??(this.extras[0]&&{lon:_i(this.extras[0])[0],lat:_i(this.extras[0])[1]});this.origin=t?{lon:t.lon*mt,lat:t.lat*mt,frame:ii(t.lon*mt,t.lat*mt)}:null,this.labels=[];for(let e of this.visible()){let[n,s]=_i(e),r={id:e.id,text:e.label,year:e.year??null,side:e.side,kind:e.kind,lon:n,lat:s,lift:0,lit:!0,feature:e};if(ay.has(e.kind)&&e.geometry.type==="Point"){let a=this.marker(e);a.userData.label=r,this.markers.set(e.id,a),this.scene.add(a)}e.label&&this.labels.push(r)}this.restyle()}restyle(){for(let t of this.labels)t.lit=this.lit(t.feature);for(let t of this.markers.values())t.userData.dim=!this.lit(t.userData.feature);this.dirty=!0,this.heights=0,this.world.stamp++}paint(t,e,n,s){let r=t.g,a=this.size,l=a/(2*n),o=ii(e.lon,e.lat),h=[0,0,0];r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,a,a),r.lineJoin=r.lineCap="round";let u=([d,p])=>(xn(d*mt,p*mt,h),hn(h,o.up)<.05?null:[a/2+hn(h,o.east)*ne*l,a/2-hn(h,o.north)*ne*l]),c=(d,p)=>{let v=0,g=!1;r.beginPath();for(let m of d){let x=u(m);x&&(v++?r.lineTo(x[0],x[1]):r.moveTo(x[0],x[1]),x[0]>-200&&x[1]>-200&&x[0]<a+200&&x[1]<a+200&&(g=!0))}return p&&r.closePath(),g&&v>1},f=(d,p,v,g)=>{let m=Math.max(1.5,p*s);r.setLineDash([]),r.globalAlpha=.55*v,r.strokeStyle="#04070c",r.lineWidth=m+Math.max(2,2.4*s),r.stroke(),r.setLineDash(g?g.map(x=>Math.max(2,x*s)):[]),r.globalAlpha=v,r.strokeStyle=d,r.lineWidth=m,r.stroke(),r.setLineDash([])};for(let d of this.visible()){let p=d.side==="context"&&d.id!==this.selected?.55:1,v=xh[d.side].ink,g=this.lit(d),m=(g?1:.28)*p,x=d.id===this.selected,w=d.geometry,M=d.dash??(ly(d)?[7,6]:d.kind==="track"?[12,5]:null),S=(d.width??(d.kind==="structure"?3.2:d.kind==="survey-area"?1.8:d.kind==="outline"?1.9:2.2))*(x?1.5:1);for(let A of gf(w))c(A,!0)&&(d.fill!==!1&&(r.globalAlpha=(d.kind==="survey-area"?.13:d.kind==="dig"?.34:.1)*m*p*(x?1.6:1),r.fillStyle=v,r.fill()),f(v,S,m,M));for(let A of vf(w))c(A,!1)&&f(v,S,m,M);for(let A of xf(w)){let y=u(A);if(!y||y[0]<-50||y[1]<-50||y[0]>a+50||y[1]>a+50)continue;let T=(d.position?.error_m??0)*l;T>6*s&&(r.beginPath(),r.arc(y[0],y[1],T,0,Math.PI*2),r.globalAlpha=.07*m*p,r.fillStyle=v,r.fill(),f(v,1.1,.6*m,[5,5])),r.beginPath(),r.arc(y[0],y[1],Math.max(2.5,(x?5.5:3.6)*s),0,Math.PI*2),r.globalAlpha=m,r.fillStyle=v,r.fill(),r.globalAlpha=.7*m,r.strokeStyle="#04070c",r.lineWidth=Math.max(1,1.4*s),r.stroke(),x&&(r.beginPath(),r.arc(y[0],y[1],13*s,0,Math.PI*2),f("#ffffff",1.6,.9,null))}}r.globalAlpha=1,t.tex.needsUpdate=!0}update(){let{world:t}=this,e=t.globe.shared,n=t.control,s=this.active?1:0;if(this.on!==s&&(this.on=Wt(this.on+(s?.08:-.12),0,1),t.stamp++),e.uDecalOn.value=this.on,!this.active||!this.origin)return null;let r=performance.now(),a=Math.max(n.range*.7,30),l=this.painted,o=l?Math.hypot((n.lon-l.lon)*Math.cos(l.lat),n.lat-l.lat)*ne:1/0;if((this.dirty||!l||o>l.half*.3||a>l.half*1.5||a<l.half*.62)&&(this.dirty||r-(l?.at??0)>160)){let F={lon:n.lon,lat:n.lat},_=2*Math.tan(n.fovY/2)*n.range/Math.max(t.renderer.domElement.clientHeight,1);this.paint(this.near,F,a,_/(2*a/this.size)),this.paint(this.far,F,a*ff,_/(2*a*ff/this.size)),this.painted={...F,half:a,at:r,frame:ii(F.lon,F.lat)},this.dirty=!1,t.stamp++}let h=this.painted,u=h.frame.up,c=n.pos;if(e.uDecalO.value.set(u[0]*ne-c[0],u[1]*ne-c[1],u[2]*ne-c[2]),e.uDecalU.value.set(...h.frame.east).multiplyScalar(1/(2*h.half)),e.uDecalV.value.set(...h.frame.north).multiplyScalar(1/(2*h.half)),!this.markers.size)return null;let f=this.origin.frame,d=[f.up[0]*ne,f.up[1]*ne,f.up[2]*ne],p=F=>[hn(F,f.east),hn(F,f.north),hn(F,f.up)],v=n.basis,g=p(v.right),m=p(v.up),x=p([-v.fwd[0],-v.fwd[1],-v.fwd[2]]),w=p([c[0]-d[0],c[1]-d[1],c[2]-d[2]]),M=this.camera;M.matrix.set(g[0],m[0],x[0],w[0],g[1],m[1],x[1],w[1],g[2],m[2],x[2],w[2],0,0,0,1),M.matrixWorld.copy(M.matrix),M.matrixWorldInverse.copy(M.matrix).invert(),M.projectionMatrix.copy(t.camera.projectionMatrix),M.projectionMatrixInverse.copy(t.camera.projectionMatrixInverse);let S=this.tick++%20===0||this.heights<3;S&&this.heights++;let A=e.uExag.value,y=e.uWater.value>.5?e.uSea.value:-1e5,T=[0,0,0];for(let F of this.markers.values()){let _=F.userData.label;if(S||F.userData.h==null){let at=Math.max(t.globe.heightAt(_.lon*mt,_.lat*mt)??0,y)*A;xn(_.lon*mt,_.lat*mt,T);let L=[T[0]*(ne+at)-d[0],T[1]*(ne+at)-d[1],T[2]*(ne+at)-d[2]];F.position.set(...p(L)),F.quaternion.setFromUnitVectors(new ht(0,0,1),new ht(...p(T))),F.userData.h=at}let B=Math.hypot(F.position.x-w[0],F.position.y-w[1],F.position.z-w[2]),J=B*.05*Math.min(1,n.range*1.25/B)**.6*(F.userData.feature.id===this.selected?1.3:1)*(F.userData.dim?.62:1);F.scale.setScalar(J),_.lift=J*(F.userData.feature.kind==="place"?.72:1.16),F.updateMatrixWorld(!0)}return{scene:this.scene,camera:M}}viewOf(t){if(!t){let s=this.entry;if(!s)return null;let r=s.features.map(l=>{let o=_i(l);return Math.hypot((o[0]-s.centre.lon)*Math.cos(s.centre.lat*mt),o[1]-s.centre.lat)*mt*ne+mf(l)/2}).sort((l,o)=>l-o),a=r.length?r[Math.min(r.length-1,Math.floor(r.length*.8))]:(s.radius_km??20)*1e3;return{lon:s.centre.lon*mt,lat:s.centre.lat*mt,range:Wt(Math.max(a,2500)*2.9,6e3,6e6),tilt:46*mt,heading:0}}let[e,n]=_i(t);return{lon:e*mt,lat:n*mt,range:Wt(Math.max(mf(t)*2.2,(t.position?.error_m??0)*6,900),400,6e6),tilt:50*mt,heading:this.world.control.heading}}};var gr={terrarium:{id:"terrarium",kind:"elevation",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:15,credit:"Terrain Tiles (Mapzen, AWS Open Data)"},s2:{id:"s2",kind:"image",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)"},bluemarble:{id:"bluemarble",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA Blue Marble Next Generation"},night:{id:"night",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA Black Marble"}},_f=(i,t={})=>{let e=t.phone??(Math.min(screen.width,screen.height)<600||matchMedia("(pointer: coarse)").matches),n=new dl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});n.outputColorSpace=ys,n.autoClear=!1;let s=new Wn,r=new We(36,1,1,1e8),a=new yl({renderer:n,scene:s,segments:32,threshold:e?400:290,budget:e?170:400,layers:{elevation:gr.terrarium,base:gr.s2,globe:gr.bluemarble,overlay:null,night:gr.night}}),l=new _l(r,i,a),o=new wl(n,{samples:0,steps:e?14:28}),h={renderer:n,scene:s,camera:r,globe:a,control:l,pipeline:o,phone:e,sun:{azimuth:295,altitude:48,follow:!0,dir:new ht(1,0,0)},exposure:1.1,air:1,pixelCap:2,pixelBudget:e?14e5:26e5,scale:1,time:0,fps:60,onFrame:null,paused:!1,adaptive:!0,rest:!0,locals:[],stamp:0},u=()=>{let x=i.clientWidth||1,w=i.clientHeight||1,M=Math.min(devicePixelRatio||1,h.pixelCap),S=Math.min(M,Math.sqrt(h.pixelBudget/(x*w)))*h.scale,A=Math.max(2,Math.round(x*S)),y=Math.max(2,Math.round(w*S));return(i.width!==A||i.height!==y)&&(n.setSize(A,y,!1),r.aspect=x/w,r.updateProjectionMatrix()),o.setSize(A,y),[A,y]},c=()=>{let x=ii(l.lon,l.lat),w=h.sun.azimuth*mt,M=h.sun.altitude*mt,S=Xn(En(x.up,Math.sin(M)),Xn(En(x.north,Math.cos(w)),x.east,Math.sin(w)),Math.cos(M));h.sun.follow&&h.sun.dir.set(S[0],S[1],S[2]).normalize()};h.city=new Fl(h),h.locals.push(h.city),h.evidence=new Ul(h),h.locals.push(h.evidence),l.floor=(x,w)=>h.city.floorAt?.(x,w)??null;let f=performance.now(),d=0,p=0,v="",g=0,m=x=>{if(requestAnimationFrame(m),h.paused){f=x;return}let w=Wt((x-f)/1e3,.001,.1);f=x,h.time+=w,h.fps+=(1/w-h.fps)*.05;let M=a.loader.busy>0;w>1/38?M||(d++,p=0):w<1/55&&(p++,d=Math.max(0,d-1)),h.adaptive||(d=p=0),d>40&&h.scale>.55&&(h.scale=Math.max(.55,h.scale-.1),d=0),p>300&&h.scale<1&&(h.scale=Math.min(1,h.scale+.1),p=0);let[S,A]=u();h.beforeFrame?.(w),l.update(w),c();let y=`${h.stamp},${h.city.active},${h.sun.azimuth},${h.sun.altitude},${l.pos[0].toFixed(1)},${l.pos[1].toFixed(1)},${l.pos[2].toFixed(1)},${l.heading.toFixed(4)},${l.tilt.toFixed(4)},${l.shift[0].toFixed(3)},${l.shift[1].toFixed(3)},${S},${A}`,T=y!==v||a.loader.busy>0||l.pointers.size>0||h.snap;v=y,T?g=0:g++;let F=g>(h.restSoon?150:600)?h.restSoon?30:12:g>30?3:1;if(h.rest&&g%F){h.onFrame?.(w);return}let _=a.shared;_.uCamPos.value.set(l.pos[0],l.pos[1],l.pos[2]),_.uSun.value.copy(h.sun.dir),_.uTime.value=h.time,_.uPixAngle.value=2*Math.tan(l.fovY/2)/A,a.update(l.view(A));let B=1-Wt((Math.sin(h.sun.altitude*mt)-.17)/.6,0,1);if(o.final.uniforms.uExposure.value=h.exposure*(1+.85*B),o.atmo.uniforms.uAir.value+=((_.uLens.value===0?1:.4)*h.air-o.atmo.uniforms.uAir.value)*Math.min(1,w*6),o.render(s,r,{pos:l.pos,basis:l.basis,tanY:Math.tan(l.fovY/2),aspect:r.aspect,near:r.near,far:r.far,sun:h.sun.dir,shift:l.shift},h.locals.map(J=>J.update()).filter(Boolean)),h.onFrame?.(w),h.snap){let J=h.snap;h.snap=null,i.toBlob(at=>J(at),"image/jpeg",.9)}};return requestAnimationFrame(m),h};var _h=[["sunken-land","Sunken lands"],["lost-city","Lost cities"],["remote-sensing-find","Found from above"],["treasure","Treasure"],["shipwreck","Shipwrecks"],["tomb","Tombs"],["relic","Relics"]],eS=Object.fromEntries(_h),bh={"sunken-land":"Sunken land","lost-city":"Lost city","remote-sensing-find":"Found from above",treasure:"Treasure",shipwreck:"Shipwreck",tomb:"Tomb",relic:"Relic"},Mf={legend:"Legend",unlocated:"Not found yet",disputed:"Disputed",found:"Found",hoax:"Hoax"},Is={confirmed:"Confirmed",mainstream:"Leading view",plausible:"Plausible",fringe:"Fringe",rejected:"Rejected",hoax:"Hoax"},kl={found:"Found here",candidate:"Proposed","search-area":"Search area",claimed:"Claimed find",inspiration:"Possible inspiration",origin:"Where it began"},bf={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},wf={found:0,candidate:1,"search-area":2,inspiration:3,claimed:4,origin:5},Ps=i=>(i??"").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),Sf=async(i="./")=>{let t=globalThis.__DATA__,e=(d,p)=>t?.[d]?Promise.resolve(t[d]):fetch(i+d).then(v=>v.ok?v.json():p).catch(()=>p),[n,s,r,a,l,o,h,u,c]=await Promise.all([e("legends.json",{legends:[]}),e("sources.json",{sources:[]}),e("reconstruction.json",null),e("case.json",null),e("evidence.json",null),e("worldfit.json",null),e("audio/index.json",null),e("open.json",null),e("story-media.json",null)]),f=(n.legends??[]).filter(d=>d&&d.id&&d.name&&Array.isArray(d.places));for(let d of f){d.places=d.places.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)),d.main=[...d.places].sort((p,v)=>(bf[p.standing]??9)-(bf[v.standing]??9)||(wf[p.role]??9)-(wf[v.role]??9))[0]??null,d.key=Ps([d.name,...d.aka??[]].join(" ")),d.tagKey=Ps((d.tags??[]).join(" "));for(let p of d.places)p.key=Ps(p.name)}return{legends:f.filter(d=>d.main),sources:s.sources??[],reconstruction:r,cas:a,evidence:l?.sites??[],worldfit:o,audio:h,open:u,storyMedia:c?.media??[],checked:n.checked??null}},Tf=i=>{let e=[...i.trim().toUpperCase().replace(/[′’]/g,"'").replace(/[″”]/g,'"').matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter(o=>o[0].trim());if(e.length!==2)return null;let n=o=>(Math.abs(Number(o[1]))+Number(o[2]??0)/60+Number(o[3]??0)/3600)*(Number(o[1])<0||o[4]==="S"||o[4]==="W"?-1:1),[s,r]=e;/[EW]/.test(s[4]??"")&&/[NS]/.test(r[4]??"")&&([s,r]=[r,s]);let a=n(s),l=n(r);return!Number.isFinite(a)||!Number.isFinite(l)||Math.abs(a)>90||Math.abs(l)>180?null:{lat:a,lon:l}},Ef=(i,t,e=8)=>{let n=Ps(t);if(!n)return[];let s=[];for(let r of i){let a=0;r.key.startsWith(n)?a=100:r.key.split(" ").some(l=>l.startsWith(n))?a=80:r.key.includes(n)?a=60:r.tagKey.split(" ").includes(n)&&(a=30),a&&s.push({score:a,legend:r});for(let l of r.places){let o=l.key.startsWith(n)?55:l.key.split(" ").some(h=>h.startsWith(n))?45:l.key.includes(n)&&n.length>2?25:0;o&&o>a-30&&s.push({score:o,legend:r,place:l})}}return s.sort((r,a)=>a.score-r.score||r.legend.name.localeCompare(a.legend.name)).slice(0,e)},wh=(i,t)=>{let e=t?{...i.access,...t}:i.access;if(!i.browser?.ok||!e?.url||!["xyz","wmts","wms","arcgis-image","arcgis-map"].includes(i.access.type)||e.crs&&e.crs!=="EPSG:3857"||i.kind==="elevation-tiles")return null;let n=e.url.includes("{z}");if(!n&&!e.url.includes("{bbox}"))return null;let s=i.resolution_m&&i.resolution_m<=30?Math.min(11,Math.max(0,Math.round(15-Math.log2(i.resolution_m))-5)):0;return{id:`src-${i.id}${t?`-${t.id}`:""}`,kind:"image",url:e.url,size:n?256:512,every:n?1:2,minZoom:Math.max(i.access.min_zoom??0,s,n?0:3),maxZoom:i.access.max_zoom??15,maxActive:n?8:4,bbox:i.coverage?.bbox??null,asIs:i.kind==="hillshade"||i.kind==="colour-relief"||i.kind==="anomaly-map"||i.kind==="coverage-map",credit:i.license?.attribution??i.name}};var cs=parent!==window,cy=0,Mh=new Map;addEventListener("message",i=>{i.source!==parent||i.data?.abstracts!=="result"||(Mh.get(i.data.id)?.(i.data),Mh.delete(i.data.id))});var bi=(i,t={})=>new Promise((e,n)=>{if(!cs)return n(Object.assign(new Error("standalone"),{code:"unsupported"}));let s=`c${++cy}`;Mh.set(s,r=>r.ok?e(r.value):n(Object.assign(new Error(r.error?.message??"failed"),{code:r.error?.code??"failed"}))),parent.postMessage({abstracts:"call",id:s,method:i,params:t},"*")}),Af=async()=>{if(!cs)return null;for(let i=0;i<3;i++){let t=await Promise.race([bi("hello"),new Promise(e=>setTimeout(e,500,null))]).catch(()=>null);if(t)return t}return null},Rf=i=>{if(globalThis.__LAYOUT__)return i(globalThis.__LAYOUT__);if(!cs)return i("viewport");let t="content";i(t),addEventListener("message",e=>{if(e.source!==parent)return;let n=e.data?.abstractsLayout;n!=="content"&&n!=="viewport"||(n==="viewport"&&parent.postMessage({abstractsLayout:"viewport"},"*"),n!==t&&(t=n,i(t)))}),parent.postMessage({abstractsLayout:"request"},"*")},Cf=i=>{cs&&i>0&&Number.isFinite(i)&&parent.postMessage({abstractsHeight:Math.ceil(i)},"*")};var Re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ma=i=>i.replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(),ai={confirmed:{label:"Tested, and the result stands",short:"Result stands",tone:"good",d:"M4.2 7.4l2 2 3.8-4.6"},refuted:{label:"The claim was shown wrong",short:"Shown wrong",tone:"bad",d:"M4.5 4.5l5 5M9.5 4.5l-5 5"},corrected:{label:"The claim was corrected",short:"Corrected",tone:"warn",d:"M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0"},unresolved:{label:"Still open",short:"Still open",tone:"info",d:"M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1"},"never-tested":{label:"Never tested",short:"Never tested",tone:"mut",d:""},"no-claim":{label:"Made no claim about Atlantis",short:"No claim",tone:"mut",d:"M4.5 7h5"}},ga=i=>{let t=ai[i]??ai["never-tested"];return`<svg class="g g-${t.tone}${t.d?"":" hollow"}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${t.d?`<path d="${t.d}"/>`:""}</svg>`},Ls=i=>i==="fit"?'<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>':i==="brk"?'<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>':'<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>',Pf=(i,t)=>{let e=i.places,n=new Map;for(let r of e)for(let a of[...r.fits??[],...r.conflicts??[]])n.set(a,(n.get(a)??0)+1);let s=t.claims.filter(r=>r.testable);return{places:e.length,found:e.filter(r=>r.standing==="confirmed"||r.standing==="mainstream").length,checked:e.filter(r=>(r.tests??[]).length).length,checkable:s.length,unmeasured:s.filter(r=>!n.has(r.id)),used:n,searches:t.searches.length,open:t.searches.filter(r=>r.status==="unresolved").length,first:t.searches[0]?.year,last:t.searches.at(-1)?.year}},hy=i=>[[i.places,"places proposed"],[i.found,"where Plato's city has been found"],[i.places-i.checked,"never checked on the ground"],[`${i.unmeasured.length} of ${i.checkable}`,"of Plato's checkable details never measured anywhere"]].map(([t,e])=>`<div class="tile"><b>${t}</b><span>${Re(e)}</span></div>`).join(""),uy=(i,t)=>`<ol class="tl">${i.searches.map(e=>`<li><button class="tl-b${e.id===t?" on":""}" data-search="${Re(e.id)}" aria-label="${e.year}: ${Re(e.title)}. ${Re(ai[e.status]?.label??"")}">${ga(e.status)}<span>${e.year}</span></button></li>`).join("")}</ol>`,dy=i=>`<div class="key">${Object.entries(ai).map(([t,e])=>`<span>${ga(t)}<b>${i.searches.filter(n=>n.status===t).length}</b> ${Re(e.short.toLowerCase())}</span>`).join("")}</div>`,If=(i,t)=>`
  <div class="pop-h">${ga(i.status)}<b>${i.year} \xB7 ${Re(i.title)}</b></div>
  <div class="pop-s">${Re(ai[i.status]?.label??"")}${i.who?` \xB7 ${Re(i.who)}`:""}</div>
  ${i.announced?`<p><em>Said:</em> ${Re(i.announced)}</p>`:""}
  <p><em>How it ended:</em> ${Re(i.outcome)}</p>
  <div class="row">${i.place?`<button class="btn primary" data-go="${Re(i.place)}">Go to ${Re(t??"the place")}</button>`:""}${/^https?:/.test(i.source??"")?`<a class="btn" href="${Re(i.source)}" target="_blank" rel="noopener">Source</a>`:""}</div>`,Lf=(i,t,e,n)=>{let s=Object.fromEntries(t.claims.map(c=>[c.id,c])),r=[...e.used.keys()].filter(c=>s[c]).sort((c,f)=>e.used.get(f)-e.used.get(c)),a=e.unmeasured.map(c=>c.id),l=[...i.places].sort((c,f)=>(f.tests??[]).length-(c.tests??[]).length||(f.fits??[]).length+(f.conflicts??[]).length-((c.fits??[]).length+(c.conflicts??[]).length)||c.name.localeCompare(f.name)),o=(c,f)=>`<th class="col${f?" dim":""}"><button data-claim="${Re(c)}"><span>${Re(s[c].short)}</span></button></th>`,h=(c,f)=>{let d=(c.fits??[]).includes(f),p=(c.conflicts??[]).includes(f);if(!d&&!p)return'<td class="c"></td>';let v=d&&p?"both":d?"fit":"brk";return`<td class="c"><button data-cell="${Re(c.id)}|${Re(f)}|${v}" aria-label="${Re(c.name)}: ${v==="fit"?"said to fit":v==="brk"?"breaks":"argued both ways"} ${Re(s[f].short)}">${Ls(v)}</button></td>`},u=l.map(c=>{let f=(c.tests??[]).length;return`<tr><th scope="row"><button data-go="${Re(c.id)}">${Re(ma(c.name))}${n.has(c.id)?'<i class="has-scene"></i>':""}</button></th>${r.map(d=>h(c,d)).join("")}${a.map(()=>'<td class="c dim"></td>').join("")}<td class="n">${f?`<b>${f}</b>`:"<span>0</span>"}</td><td class="v"><i class="sdot p-${Re(c.standing)}"></i>${Re(Is[c.standing]??c.standing)}</td></tr>`}).join("");return`
    <div class="tiles">${hy(e)}</div>
    <h3>${e.searches} searches, ${e.first} to ${e.last}</h3>
    
    <div class="tl-wrap">${uy(t)}</div>
    ${dy(t)}
    <h3>Each place against what Plato wrote</h3>
    
    <div class="grid-wrap"><table class="grid">
      <thead><tr><th></th>${r.map(c=>o(c,!1)).join("")}${a.map(c=>o(c,!0)).join("")}<th class="flat">Field<br>checks</th><th class="flat l">Standing</th></tr></thead>
      <tbody>${u}</tbody>
    </table></div>
    <div class="key"><span>${Ls("fit")}said to fit</span><span>${Ls("brk")}breaks</span><span>${Ls("both")}argued both ways</span><span><i class="has-scene"></i>has a scene to explore</span><span class="dimkey">shaded columns: never measured anywhere</span></div>
    `},Df=(i,t)=>`
  <div class="pop-h"><b>${Re(i.short)}</b></div>
  <div class="pop-s">${Re(i.ref)}${i.testable?"":" \xB7 not something the ground can test"}</div>
  <p>${Re(i.label)}</p>
  ${i.quote?`<p class="quote">\u201C${Re(i.quote)}\u201D</p>`:""}
  ${i.testable&&i.how_to_test?`<p><em>How to check it:</em> ${Re(i.how_to_test)}</p>`:""}
  <p class="pop-s">${t?`Held against ${t} place${t===1?"":"s"}.`:"Not held against any place yet."}</p>`;var fy="https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",Ol=new Map,Bl=null,py=(i,t,e)=>{let n=`${i}/${t}/${e}`;return Ol.has(n)||Ol.set(n,(async()=>{let s=await fetch(fy.replace("{z}",i).replace("{x}",t).replace("{y}",e),{signal:AbortSignal.timeout(25e3)});if(!s.ok)throw new Error(`elevation tile ${n}: HTTP ${s.status}`);let r=await createImageBitmap(await s.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"});Bl??=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256)).getContext("2d",{willReadFrequently:!0}),Bl.clearRect(0,0,256,256),Bl.drawImage(r,0,0),r.close?.();let a=Bl.getImageData(0,0,256,256).data,l=new Float32Array(65536);for(let o=0;o<65536;o++)l[o]=a[o*4]*256+a[o*4+1]+a[o*4+2]/256-32768;return l})().catch(s=>{throw Ol.delete(n),s})),Ol.get(n)},zl=async(i,t)=>{t=Wt(Math.round(t),0,10);let e=2**t,n=new Map,s=i.map(([a,l])=>{let o=rs(a*mt,t),h=Wt(as(l*mt,t),0,e-1e-6),u=(Math.floor(o)%e+e)%e,c=Math.floor(h);return n.set(`${u}/${c}`,[u,c]),[`${u}/${c}`,Wt(Math.floor((o-Math.floor(o))*256),0,255),Wt(Math.floor((h-c)*256),0,255)]}),r=new Map(await Promise.all([...n].map(async([a,[l,o]])=>[a,await py(t,l,o)])));return s.map(([a,l,o],h)=>lh(r.get(a)[o*256+l],i[h][0],i[h][1]))},Hl=(i,t)=>Wt(Math.round(Math.log2(400750167e-1*Math.cos(t*mt)/256/i)),0,10);var va={lat:35.97389,lon:-5.51611},vr=(i,t,e,n)=>{let s=n/ne,r=e*mt,a=i*mt,l=t*mt,o=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r));return[((l+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(o)))/mt+540)%360-180,o/mt]},my=(i,t,e,n)=>{let s=Math.sin((e-i)*mt/2)**2+Math.cos(i*mt)*Math.cos(e*mt)*Math.sin((n-t)*mt/2)**2;return 2*ne*Math.asin(Math.min(1,Math.sqrt(s)))},gy=(i,t,e,n)=>{let s=Math.sin((n-t)*mt)*Math.cos(e*mt),r=Math.cos(i*mt)*Math.sin(e*mt)-Math.sin(i*mt)*Math.cos(e*mt)*Math.cos((n-t)*mt);return(Math.atan2(s,r)/mt+360)%360},vy=["north","north-east","east","south-east","south","south-west","west","north-west"],Gl=i=>vy[Math.round(i/45)%8],Sh=i=>{let t=n=>i.claims.find(s=>s.id===n)??{numbers:[]},e=(n,s)=>t(n).numbers.find(r=>r.what.startsWith(s))?.value;return{island:e("central-island-diameter","diameter"),rings:t("ring-widths").numbers.reduce((n,s)=>n+s.value,0),canal:e("canal-to-sea","canal length"),wall:e("outer-wall-50-stades","distance"),plainLong:e("great-plain","plain length"),plainWide:e("great-plain","plain width"),canalGap:e("plain-canals","spacing"),refs:{rings:t("ring-widths").ref,island:t("central-island-diameter").ref,canal:t("canal-to-sea").ref,wall:t("outer-wall-50-stades").ref,plain:t("great-plain").ref,canals:t("plain-canals").ref,pillars:t("beyond-pillars").ref,years:t("nine-thousand-years").ref}}},Nf=i=>{let t=[...i].sort((n,s)=>n-s),e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{low:e(.05),mid:e(.5),high:e(.95),min:t[0],max:t[t.length-1]}},Ff=async({lat:i,lon:t,sea:e,cas:n,stadion:s=185})=>{let r=Sh(n),a=s,l=(r.island/2+r.rings)*a,o=l+r.wall*a,h={lat:i,lon:t,sea:e,stadion:a,plato:r,ringR:l,wallR:o,made:new Date().toISOString().slice(0,10)},u=Hl(120,i),c=[];for(let W=-l;W<=l;W+=110)for(let z=-l;z<=l;z+=110)z*z+W*W<=l*l&&c.push([t+z/(ne*Math.cos(i*mt))/mt,i+W/ne/mt]);let f=await zl(c,u),d=Nf(f);h.rings={across:2*l,low:d.min,high:d.max,mid:d.mid,relief:d.high-d.low,underSea:f.filter(W=>W<e).length/f.length,here:f[Math.floor(f.length/2)],zoom:u};let p=h.rings.mid>=e;h.dry=p;let v=Hl(260,i),g=[],m=400,x=15e4;for(let W=0;W<360;W+=5)for(let z=m;z<=x;z+=m)g.push([W,z,vr(i,t,W,z)]);let w=await zl(g.map(W=>W[2]),v),M=null;for(let W=0;W<g.length;W++)(p?w[W]<e:w[W]>=e)&&(!M||g[W][1]<M.distance)&&(M={distance:g[W][1],bearing:g[W][0],at:g[W][2]});h.shore=M?{...M,kind:p?"sea":"land"}:{distance:null,bearing:null,kind:p?"sea":"land",beyond:x},h.canal={want:r.canal*a+l,from:"centre"};let S=p?h.shore.bearing??180:((h.shore.bearing??0)+180)%360,A=(S+180)%360,y=(S+90)%360,T=p&&h.shore.distance!=null?h.shore.distance:0,F=r.plainLong*a,_=r.plainWide*a,B=(W,z)=>{let st=vr(i,t,S,T-z);return vr(st[1],st[0],y,W)},J=Hl(Math.max(1200,F/110),i),at=[];for(let W=0;W<44;W++)for(let z=0;z<66;z++)at.push(B(((z+.5)/66-.5)*F,(W+.5)/44*_));let L=await zl(at,J),X=L.filter(W=>W>=e),O=X.length?Nf(X):null;h.plain={long:F,wide:_,land:X.length/L.length,low:O?.low??null,high:O?.high??null,mid:O?.mid??null,level:O?X.filter(W=>Math.abs(W-O.mid)<=100).length/L.length:0,inland:A,zoom:J};let N=my(i,t,va.lat,va.lon),j=t>va.lon&&t<42&&i>30&&i<47.5;h.strait={distance:N,bearing:gy(va.lat,va.lon,i,t),inside:j};let Y=(W,z=96)=>Array.from({length:z+1},(st,ot)=>vr(i,t,ot/z*360,W)),V=(W,z,st,ot={})=>({id:`plato-${W}`,side:"plato",kind:"outline",label:z,geometry:st,fill:!1,...ot}),U=[V("rings",`Plato's rings, ${(2*l/1e3).toFixed(1)} km across`,{type:"Polygon",coordinates:[Y(l)]},{fill:!0,width:2.4}),V("island",null,{type:"LineString",coordinates:Y(r.island/2*a,48)},{width:1.4}),V("wall",`Outer wall, ${r.wall} stades out`,{type:"LineString",coordinates:Y(o,128)},{width:1.8,dash:[9,6]}),V("canal",`Canal, ${r.canal} stades`,{type:"LineString",coordinates:[vr(i,t,S,l),vr(i,t,S,o)]},{width:2.6}),V("plain",`The plain, ${Math.round(F/1e3)} by ${Math.round(_/1e3)} km`,{type:"Polygon",coordinates:[[B(-F/2,0),B(F/2,0),B(F/2,_),B(-F/2,_),B(-F/2,0)]]},{width:2.2})],H=[];for(let W=-F/2+r.canalGap*a;W<F/2-1;W+=r.canalGap*a)H.push([B(W,0),B(W,_/2),B(W,_)]);return U.push(V("canals",null,{type:"MultiLineString",coordinates:H},{width:.9})),h.shapes=U,h.seaBearing=S,h};var xy={"survey-area":"Survey",track:"Track",core:"Core",sample:"Sample",dive:"Dive",dig:"Dig",structure:"Claimed shape",outline:"Outline",place:"Place"},yy={"from-dataset":"Position from an open data record","stated-coordinates":"Position printed in the source","digitised-from-figure":"Position read off a map in the source","from-description":"Position from a description only"},Uf={claimed:"Claimed",checked:"Checked",found:"Found",context:"Places"},kf={"survey-area":'<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>',track:'<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',core:'<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>',sample:'<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',dive:'<circle cx="7" cy="7" r="4" fill="currentColor"/>',dig:'<path d="M3 3h8v8H3z" fill="currentColor"/>',structure:'<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',outline:'<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>',place:'<circle cx="7" cy="7" r="2.200" fill="currentColor"/>'},_y=i=>`<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${kf[i]??kf.place}</svg>`,Of=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,metres:l,toast:o,setSheet:h,body:u,eyebrow:c,stage:f,pinsEl:d,project:p}=i,{control:v,globe:g}=t,m=g.shared,x=t.evidence,w=e.legends.find(R=>R.id==="atlantis"),M=e.cas;if(!w||!M)return null;let S=new Map(e.evidence.map(R=>[R.place,R])),A=new Map(w.places.map(R=>[R.id,R])),y=Object.fromEntries(M.claims.map(R=>[R.id,R])),T=Pf(w,M),F=Sh(M),_=n.a={view:"list",scene:null,mode:"all",step:-1,feature:null,search:null,sea:null,fit:null,tour:null,more:!1},B=R=>{let G=/^(.{40,220}?[.!?])(\s|$)/.exec(R??"");return G?G[1]:R??""},J=R=>R>=1e5?`${Math.round(R/1e3).toLocaleString("en")} km`:R>=1e4?`${(R/1e3).toFixed(0)} km`:R>=1e3?`${(R/1e3).toFixed(1)} km`:`${Math.round(R)} m`,at=null,L=(R,G)=>{let K=m.uSea.value,b=performance.now(),P=Wt(Math.abs(R-K)*22,500,2600);cancelAnimationFrame(at);let D=()=>{let C=Wt((performance.now()-b)/P,0,1),Z=C*C*(3-2*C);i.setSea(K+(R-K)*Z,!1),C<1?at=requestAnimationFrame(D):G?.()};D()},X=()=>{_.sea&&Math.abs(m.uSea.value-_.sea.to)<.6&&L(_.sea.from),_.sea=null},O=R=>{let G=(R.tests??[]).length;return`<button class="prow" data-act="a-place" data-id="${r(R.id)}"><i class="sdot p-${r(R.standing)}${G?"":" hollow"}"></i><span class="pn">${r(ma(R.name))}${S.has(R.id)?'<em class="sc">scene</em>':""}</span><small>${G?`${G} check${G===1?"":"s"}`:"never checked"}</small></button>`},N=()=>{_.view="list",c.innerHTML='Atlantis <span class="tag s-legend">Legend</span>';let R=[...w.places].sort((G,K)=>Number(S.has(K.id))-Number(S.has(G.id))||(K.tests??[]).length-(G.tests??[]).length||G.name.localeCompare(K.name));u.innerHTML=`
      <h2>Where was Atlantis?</h2>
      <p class="lead">${r(B(w.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${S.size} places with a scene to explore</h3>
      ${R.filter(G=>S.has(G.id)).map(O).join("")}
      <h3>The other ${w.places.length-S.size} proposals</h3>
      ${R.filter(G=>!S.has(G.id)).map(O).join("")}
      
      ${w.origin?.url?`<p class="note">Where the story comes from: ${a(w.origin.url,w.origin.text??"source")}</p>`:""}`},j=R=>{let G=M.places[R.id]??{fits:{},breaks:{}},K=(Z,tt)=>`<button class="sc-chip ${tt}" data-act="a-claim" data-id="${r(Z)}" data-place="${r(R.id)}" data-kind="${tt}">${Ls(tt)}${r(y[Z]?.short??Z)}</button>`,b=(R.fits??[]).filter(Z=>y[Z]),P=(R.conflicts??[]).filter(Z=>y[Z]),D=b.filter(Z=>P.includes(Z)),C=T.checkable-new Set([...b,...P].filter(Z=>y[Z].testable)).size;return!b.length&&!P.length?`<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${T.checkable} could be checked.</p>`:`<h3>Against Plato</h3><div class="score">${b.filter(Z=>!D.includes(Z)).map(Z=>K(Z,"fit")).join("")}${D.map(Z=>K(Z,"both")).join("")}${P.filter(Z=>!D.includes(Z)).map(Z=>K(Z,"brk")).join("")}</div>
      ${G.reason,""}`},Y=()=>_.scene?x.visible().filter(R=>R.side!=="plato"):[],V=R=>`
    <div class="fcard">
      <p>${r(R.what)}</p>
      ${R.result?`<p><b>${R.side==="claimed"?"What a check showed":"Result"}:</b> ${r(R.result)}</p>`:""}
      ${(R.column??[]).length?`<div class="strata">${R.column.map(G=>`<div><i style="background:${i.strataColour(G.what)}"></i><span>${G.from_m}\u2013${G.to_m} m \xB7 ${r(G.what)}${G.age?` \xB7 ${r(G.age)}`:""}</span></div>`).join("")}</div>`:""}
      ${R.evidence?`<p class="quote">\u201C${r(R.evidence)}\u201D</p>`:""}
      <p class="note" style="margin:0">${r(yy[R.position?.how]??"")}${Number.isFinite(R.position?.error_m)?`, give or take ${J(R.position.error_m)}`:""}. ${a(R.source,"Source")}${R.position?.source&&R.position.source!==R.source?` \xB7 ${a(R.position.source,"position")}`:""}</p>
    </div>`,U=()=>{let R=Y();return R.length?["claimed","checked","found","context"].map(G=>{let K=R.filter(b=>b.side===G);return K.length?`<div class="fgroup s-${G}"><h4><i></i>${Uf[G]} \xB7 ${K.length}</h4>${K.map(b=>`<button class="feat${b.id===_.feature?" on":""}" data-act="a-feature" data-id="${r(b.id)}">${_y(b.kind)}<span>${r(b.label)}</span><small>${r([xy[b.kind],b.year].filter(Boolean).join(" \xB7 "))}</small></button>${b.id===_.feature?V(b):""}`).join("")}</div>`:""}).join(""):'<p class="note">Nothing in this view. Try <b>Both</b>.</p>'},H=()=>{let R=_.scene;if(_.step>=0){let K=R.story[_.step];return`<span class="tag s-${K.side==="claimed"?"claimed":K.side==="checked"?"checked":"found"}">${_.step+1} of ${R.story.length} \xB7 ${r(Uf[K.side]??K.side)}</span> ${r(K.line)}`}let G=(K,b)=>`<b class="w-${K}">${b}.</b> ${r(R[K].line)} <small>${r([R[K].who,R[K].year].filter(Boolean).join(", "))} \xB7 ${a(R[K].source,"source")}</small>`;return _.mode==="claimed"?G("claimed","Claimed"):_.mode==="found"?G("found","Found"):`${G("claimed","Claimed")}<br>${G("found","Found")}`},W=R=>{let G=(R.best_layers??[]).map(K=>i.overlays.find(b=>b.id===K)).filter(Boolean).slice(0,5);return G.length?`<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${G.map(K=>`<button class="chip${n.overlay?.id===K.id?" on":""}" data-act="a-layer" data-id="${r(K.id)}">${r(K.s.name.replace(/\s*\(.*?\)/g,""))}</button>`).join("")}</div>`:""},z=()=>{let R=_.scene;return`
      <div class="seg modes">${[["claimed","Claimed"],["found","Found"],["all","Both"]].map(([G,K])=>`<button data-act="a-mode" data-v="${G}" class="${_.mode===G&&_.step<0?"on":""} m-${G}">${K}</button>`).join("")}</div>
      <p class="lead" id="a-line">${H()}</p>
      ${R.story.length?`<div class="steps"><span>Walk through it</span>${R.story.map((G,K)=>`<button data-act="a-step" data-i="${K}" class="s-${r(G.side)}${K===_.step?" on":""}" aria-label="Step ${K+1}">${K+1}</button>`).join("")}<button class="nx" data-act="a-next" aria-label="Next step">${_.step>=R.story.length-1?"Start over":_.step<0?"Start \u203A":"Next \u203A"}</button></div>`:""}
      <div id="a-features">${U()}</div>
      ${W(R)}
      ${R.measurements.length?`<h3>Measured here</h3><div class="meas">${R.measurements.slice(0,_.more?99:5).map(G=>`<div><span>${r(G.what)}</span><b>${r(typeof G.value=="number"?G.value.toLocaleString("en"):G.value)} ${r(G.unit??"")}</b>${G.plato_value?`<small>Plato: ${r(G.plato_value)}</small>`:""}<small>${a(G.source,"source")}</small></div>`).join("")}</div>${R.measurements.length>5&&!_.more?`<button class="linkish" data-act="a-more">All ${R.measurements.length} measurements</button>`:""}`:""}`},st=R=>`
    <details class="full"><summary>Read the full case</summary>
      ${R.claim?`<p>${r(R.claim)}</p>`:""}
      ${R.against?`<p><b>Against:</b> ${r(R.against)}</p>`:""}
      ${R.proposed_by?.length?`<p>Proposed by ${r(R.proposed_by.slice(0,4).map(G=>`${G.who}${G.year?` (${G.year})`:""}`).join(", "))}.</p>`:""}
      ${(R.tests??[]).map(G=>`<p><b>Checked:</b> ${r(G.what)}${G.who?` (${r(G.who)}${G.year?`, ${G.year}`:""})`:""}. ${r(G.result)} ${G.url?a(G.url,"Source"):""}</p>`).join("")}
      ${_.scene?.not_located?.length?`<p><b>Could not be placed on the map:</b></p><ul>${_.scene.not_located.slice(0,8).map(G=>`<li>${r(G.what)}${G.why?` <span class="why">(${r(G.why)})</span>`:""}</li>`).join("")}</ul>`:""}
      <p class="note">${An(R.lat,R.lon,3)}${R.precision_km?`, give or take ${R.precision_km} km`:""}${R.underwater?", under water":""}</p>
      ${(R.sources??[]).map(G=>`<a class="src" href="${r(G.url)}" target="_blank" rel="noopener">${r(G.title??G.url)}</a>`).join("")}
    </details>`,ot=()=>{let R=n.place,G=_.scene,K=R.proposed_by?.[0],b=(R.tests??[]).length;_.view="place",c.innerHTML=`${r(kl[R.role]??"Proposed")} <span class="tag t-${r(R.standing)}">${r(Is[R.standing]??R.standing)}</span>`;let P=u.scrollTop;u.innerHTML=`
      <button class="back" data-act="a-list">\u2039 All ${w.places.length} places</button>
      <h2>${r(R.name)}</h2>
      <div class="when">${K?`Proposed by ${r(K.who)}${K.year?`, ${K.year}`:""}`:""}${R.event_date?`${K?" \xB7 ":""}needs ${r(R.event_date)}`:""}</div>
      ${G?z():`<p class="lead">${r(B(R.claim))}</p>${R.against?`<p class="lead"><b class="w-found">Against.</b> ${r(B(R.against))}</p>`:""}`}
      ${j(R)}
      ${G?"":`<h3>Checks on the ground \xB7 ${b}</h3>${b?R.tests.map(D=>`<div class="check1">${ga("confirmed")}<span><b>${r(D.what)}</b>${D.who?` \xB7 ${r(D.who)}${D.year?`, ${D.year}`:""}`:""}<br>${r(B(D.result))} ${D.url?a(D.url,"Source"):""}</span></div>`).join(""):'<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${G?.needs_sea_level?`<button class="btn${_.sea?" on":""}" data-act="a-sea">${_.sea?"Sea back to where it was":`${G.needs_sea_level.m<0?"Lower":"Raise"} the sea to ${l(G.needs_sea_level.m)}`}</button>`:""}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${st(R)}`,u.scrollTop=P},ut=()=>x.viewOf(null),dt=(R,G=!0)=>{let K=n.place;n.legend=w,n.place=R;let b=S.get(R.id)??null;(K!==R||_.scene!==b)&&(X(),_.mode="all",_.step=-1,_.feature=null,_.more=!1,_.fit=null),_.scene=b,b?.dem&&!b.dem.asked&&(b.dem.asked=!0,Sd(b.dem,globalThis.__ASSETS__||"./").then(P=>{P&&(g.refresh(P.bbox),t.stamp++)})),x.show(b),x.setExtras([]),x.setMode(_.mode),h("legend"),u.scrollTop=0,ot(),G&&v.flyTo(b?ut():i.viewFor(R)),b?.needs_sea_level?.m<0&&G&&!_.sea&&Math.abs(m.uSea.value-b.needs_sea_level.m)>.6&&m.uWater.value>.5&&(_.sea={from:m.uSea.value,to:b.needs_sea_level.m},setTimeout(()=>{_.sea&&n.place===R&&(L(_.sea.to),o(`Sea lowered to ${l(_.sea.to)}: ${b.needs_sea_level.when??"what this proposal needs"}`,4200),ot())},G?1700:0))},St=()=>{k(),n.legend=w,n.place=null,h("legend"),u.scrollTop=0,N()},k=()=>{X(),_.scene=null,_.step=-1,_.feature=null,x.show(null),x.setExtras([]),_.fit=null},rt=R=>{_.mode=R,_.step=-1,_.feature=null,x.setMode(R),x.setFocus(null),x.select(null),ot()},et=R=>{let G=_.scene.features.filter(C=>R.includes(C.id));if(!G.length)return ut();let K=G.map(_i),b=K.reduce((C,Z)=>C+Z[0],0)/K.length,P=K.reduce((C,Z)=>C+Z[1],0)/K.length,D=0;for(let C of G){let Z=x.viewOf(C);D=Math.max(D,Z.range/2.2+Math.hypot((_i(C)[0]-b)*Math.cos(P*mt),_i(C)[1]-P)*mt*63710088e-1)}return{lon:b*mt,lat:P*mt,range:Wt(D*2.6,900,ut().range*1.2),tilt:48*mt,heading:v.heading}},gt=R=>{let G=_.scene;if(G?.story.length){if(_.step=R>=G.story.length?-1:R,_.feature=null,x.select(null),_.step<0)_.mode="all",x.setMode("all"),x.setFocus(null),v.flyTo(ut(),1.6);else{let K=G.story[_.step];_.mode="all",x.setMode("all"),x.setFocus(K.show??[]),K.show?.length&&v.flyTo(et(K.show),1.8)}ot()}},ct=(R,G=!0)=>{let K=_.scene?.features.find(b=>b.id===R);_.feature=K&&_.feature!==R?R:null,x.select(_.feature),_.feature&&G&&v.flyTo(x.viewOf(K),1.5),n.sheet!=="legend"&&h("legend"),ot(),_.feature&&u.querySelector(".feat.on")?.scrollIntoView({block:"nearest",behavior:"smooth"})},Mt=new Map,Tt=new Set,Ft=[0,0],Dt=R=>{let G=Mt.get(R.id);return G||(G=document.createElement("button"),G.className="mark",G.innerHTML="<i></i><span></span>",G.addEventListener("click",K=>{K.stopPropagation(),R.side!=="plato"&&ct(R.id,!1)}),d.appendChild(G),Mt.set(R.id,G)),G._l=R,G},ee=()=>{let R=new Set;if(x.active&&x.labels.length){let G=f.clientWidth,K=f.clientHeight,b=[],P=x.labels.map(D=>({l:D,w:(D.id===_.feature?100:0)+(D.lit?10:0)+({claimed:5,found:4,checked:3,plato:2,context:1}[D.side]??0)})).sort((D,C)=>C.w-D.w);for(let{l:D}of P){if(!p(D.lon,D.lat,Ft,D.lift)||Ft[0]<-10||Ft[1]<90||Ft[0]>G+10||Ft[1]>K-30)continue;let C=D.text.length>34?`${D.text.slice(0,32).trimEnd()}\u2026`:D.text,Z=[Ft[0]-8,Ft[1]-10,Ft[0]+14+C.length*6.3,Ft[1]+10],tt=D.lit&&b.length<26&&Z[2]<G-4;if(tt){for(let Pt of b)if(Z[0]<Pt[2]&&Z[2]>Pt[0]&&Z[1]<Pt[3]&&Z[3]>Pt[1]){tt=!1;break}}if(!tt&&D.id!==_.feature&&D.kind!=="core"&&D.side==="context")continue;tt&&b.push(Z);let yt=Dt(D);yt._text!==C&&(yt.lastChild.textContent=C,yt._text=C,yt.setAttribute("aria-label",`${D.text}${D.year?` (${D.year})`:""}`)),yt.style.transform=`translate3d(${Ft[0].toFixed(1)}px,${Ft[1].toFixed(1)}px,0)`;let wt=`mark s-${D.side}${tt?"":" dot"}${D.id===_.feature?" on":""}${D.lit?"":" dim"}`;yt.className!==wt&&(yt.className=wt),yt._shown||(yt.style.display="",yt._shown=!0),R.add(yt)}}for(let G of Tt)R.has(G)||(G.style.display="none",G._shown=!1);Tt.clear();for(let G of R)Tt.add(G);if(!x.active&&Mt.size){for(let G of Mt.values())G.remove();Mt.clear()}},Vt=s("#pop"),Rt=0,Ct=(R,G)=>{Vt.innerHTML=`<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${R}`,Vt.classList.add("open"),Rt=performance.now();let K=f.getBoundingClientRect(),b=G.getBoundingClientRect(),P=Vt.offsetWidth,D=Vt.offsetHeight,C=Wt(b.left-K.left+b.width/2-P/2,8,K.width-P-8),Z=b.top-K.top-D-10;Vt.style.left=`${C}px`,Vt.style.top=`${Z>=8?Z:Math.min(b.bottom-K.top+10,K.height-D-8)}px`},Ut=()=>{Vt.classList.remove("open"),_.search=null;for(let R of f.querySelectorAll(".tl-b.on"))R.classList.remove("on");i.pulse(null)},nt=(R,G)=>{let K=M.searches.find(b=>b.id===R);if(K){if(_.search===R)return Ut();Ut(),_.search=R,G.classList.add("on"),Ct(If(K,K.place?A.get(K.place)?.name:null),G),i.pulse(K.place?A.get(K.place):null)}},$t=(R,G,K,b)=>{let P=y[R];if(!P)return;let D=K&&M.places[K],C=D&&(b==="brk"?D.breaks[R]:b==="fit"?D.fits[R]:null),Z=D&&b==="both"?`<p><em>Said to fit:</em> ${r(D.fits[R]?.how??"")} ${a(D.fits[R]?.source,"source")}</p><p><em>Breaks:</em> ${r(D.breaks[R]?.how??"")} ${a(D.breaks[R]?.source,"source")}</p>`:"",tt=K?`<div class="pop-h">${Ls(b)}<b>${r(A.get(K)?.name??"")} \xB7 ${r(P.short)}</b></div><div class="pop-s">${b==="fit"?"Said to fit":b==="brk"?"Breaks":"Argued both ways"} \xB7 ${r(P.ref)}</div>${C?`<p>${r(C.how)} ${a(C.source,"source")}</p>`:Z}<p class="quote">\u201C${r(P.quote??P.label)}\u201D</p>`:Df(P,T.used.get(R)??0);Ct(tt,G)},Et=s("#board"),Bt=()=>{Ut(),s("#board-body").innerHTML=Lf(w,M,T,S),Et.classList.add("open"),f.classList.add("board-open"),s("#board-body").scrollTop=0},vt=()=>{Ut(),Et.classList.remove("open"),f.classList.remove("board-open")},Lt=R=>{let G=A.get(R);G&&(vt(),Ut(),dt(G,!0))};Et.addEventListener("click",R=>{let G=R.target.closest("[data-search],[data-claim],[data-cell],[data-go],[data-act]");if(!G)return Ut();if(G.dataset.act==="board-x")vt();else if(G.dataset.search)nt(G.dataset.search,G);else if(G.dataset.claim)$t(G.dataset.claim,G);else if(G.dataset.cell){let[K,b,P]=G.dataset.cell.split("|");$t(b,G,K,P)}else G.dataset.go&&Lt(G.dataset.go)});for(let R of[s("#board-body"),u])R.addEventListener("scroll",()=>{Vt.classList.contains("open")&&performance.now()-Rt>350&&Ut()},{passive:!0});Vt.addEventListener("click",R=>{let G=R.target.closest("[data-go],[data-act]");G?.dataset.go?Lt(G.dataset.go):G?.dataset.act==="pop-x"&&Ut()});let kt=()=>`<button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-list="1"><b>${T.places}</b> famous claims</button><button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-board="1"><b>${T.checked}</b> checked<i>&nbsp;on the ground</i> \xB7 <b>${T.found}</b> found<span>Board \u203A</span></button>`,Nt=(R,G,K,b,P,D)=>`<div class="fit"><div class="fit-h"><b>${r(R)}</b><small>${r(G??"")}</small></div><div class="fit-b"><span><em>Plato</em>${K}</span><span class="${D??""}"><em>Here</em>${b}</span></div>${P?`<p class="note">${P}</p>`:""}</div>`,$=()=>{let R=_.fit,G=n.place;if(c.textContent="Test the fit",!R||R.state==="loading"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(G?.name??"Back")}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${r(G?.name??"this point")} from the open elevation tiles\u2026</p>`;return}if(R.state==="failed"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(G?.name??"Back")}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`;return}let K=R.plato,b=wt=>`${wt.toLocaleString("en")} stades`,P=R.stadion,D=R.rings,C=R.shore,Z=R.plain,tt=R.strait,yt=Math.abs(R.sea)<1?"today's sea level":`the sea at ${l(R.sea)}`;u.innerHTML=`
      <button class="back" data-act="a-back">\u2039 ${r(G?.name??"Back")}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${An(R.lat,R.lon,3)} with ${yt}, at ${P} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0,"Today"],[-50,"Plato's date"],[-125,"Ice-age low"]].map(([wt,Pt])=>`<button class="chip${Math.abs(R.sea-wt)<1?" on":""}" data-act="a-fit-sea" data-m="${wt}">${Pt}${wt?` ${l(wt)}`:""}</button>`).join("")}</div>
      ${Nt("Is it above water?",K.refs.years,"<b>Dry land</b>, with the sea let into the rings",R.dry?`<b>Dry</b>, ${l(D.mid-R.sea)} above the sea`:`<b>Under ${Math.round(R.sea-D.mid).toLocaleString("en")} m of water</b>`,R.dry?"":`At this sea level the point is sea floor. Nearest land: ${C.distance==null?`more than ${J(C.beyond)} away`:`${J(C.distance)} to the ${Gl(C.bearing)}`}.`,R.dry?"ok":"no")}
      ${Nt("Ground for the rings",K.refs.rings,`<b>${J(D.across)}</b> across, cut to sea level<small>${b(K.island)} island + rings of ${K.rings} stades</small>`,`<b>${Math.round(D.relief).toLocaleString("en")} m</b> of relief<small>from ${l(D.low)} to ${l(D.high)}</small>`,"Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.")}
      ${Nt("The canal to the sea",K.refs.canal,`<b>${J(R.wallR)}</b> from the centre to the sea<small>a canal of ${b(K.canal)} beyond the rings</small>`,R.dry?C.distance==null?`<b>No sea within ${J(C.beyond)}</b>`:`<b>${J(C.distance)}</b> to the sea, to the ${Gl(C.bearing)}`:"<b>Under water</b>","The outer wall stood the same 50 stades out and met the sea at the canal mouth.")}
      ${Nt("The great plain",K.refs.plain,`<b>${Math.round(Z.long/1e3)} by ${Math.round(Z.wide/1e3)} km</b>, level<small>${b(K.plainLong)} by ${b(K.plainWide)}</small>`,`<b>${Math.round(Z.land*100)}%</b> of that box is land${Z.mid==null?"":`<small>${Math.round(Z.level*100)}% within 100 m of its middle height (${l(Z.mid)})</small>`}`,`Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${Gl(Z.inland)}.`)}
      ${Nt("Beyond the Pillars",K.refs.pillars,"<b>In front of the strait</b>, in the outer ocean",`<b>${J(tt.distance)}</b> from the Strait of Gibraltar<small>${tt.inside?"inside it, on the Mediterranean side":"outside it"}</small>`,"Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.",tt.inside?"no":"ok")}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`},E=async(R,G)=>{let K=n.place,b=v.state(),P=G??_.fit?.at??(K?_.scene?{lat:_.scene.centre.lat,lon:_.scene.centre.lon}:{lat:K.lat,lon:K.lon}:{lat:b.lat,lon:b.lon}),D=R??(m.uWater.value>.5?Math.round(m.uSea.value):0);_.fit={state:"loading",at:P},h("fit"),_.view="fit",$();try{let C=await Ff({...P,sea:D,cas:M,stadion:t.city.params.stadion});if(_.view!=="fit")return;_.fit={...C,state:"done",at:P},R!=null&&i.setSea(R,!1),x.setExtras(C.shapes),C.dry&&(t.city.place({lat:C.lat,lon:C.lon,bearing:Math.round(C.seaBearing)}),t.stamp++),v.flyTo({lon:C.lon*mt,lat:C.lat*mt,range:C.wallR*3.4,tilt:50*mt,heading:(C.seaBearing+160)%360*mt},2.2),$()}catch(C){console.warn(C),_.fit={state:"failed",at:P},$()}},lt=()=>{let R=_.fit,G=R.rings,K=R.shore,b=R.plain;return[`Plato's plan at ${R.lat.toFixed(4)}, ${R.lon.toFixed(4)} (sea ${R.sea} m, stadion ${R.stadion} m), measured ${R.made} from Terrain Tiles:`,`- above water: ${R.dry?"yes":"no"} (middle height under the rings ${Math.round(G.mid)} m)`,`- ground under the rings (${Math.round(G.across)} m across): ${Math.round(G.low)} to ${Math.round(G.high)} m, relief ${Math.round(G.relief)} m`,`- nearest ${K.kind}: ${K.distance==null?`none within ${K.beyond} m`:`${Math.round(K.distance)} m at bearing ${K.bearing}`} (Plato: ${Math.round(R.wallR)} m from centre to sea)`,`- plain box ${Math.round(b.long/1e3)} x ${Math.round(b.wide/1e3)} km: ${Math.round(b.land*100)}% land, ${Math.round(b.level*100)}% within 100 m of ${b.mid==null?"n/a":Math.round(b.mid)} m`,`- Strait of Gibraltar: ${Math.round(R.strait.distance/1e3)} km, ${R.strait.inside?"inside":"outside"}`].join(`
`)},ft=(R,G)=>{if(R==="a-list")St();else if(R==="a-place")dt(A.get(G.dataset.id),!0);else if(R==="a-board")Bt();else if(R==="a-mode")rt(G.dataset.v);else if(R==="a-step")gt(Number(G.dataset.i)===_.step?-1:Number(G.dataset.i));else if(R==="a-next")gt(_.step+1);else if(R==="a-feature")ct(G.dataset.id);else if(R==="a-more")_.more=!0,ot();else if(R==="a-layer"){let K=i.overlays.find(b=>b.id===G.dataset.id);i.setOverlay(n.overlay?.id===K.id?null:K),i.drawTag(),ot()}else if(R==="a-claim")$t(G.dataset.id,G,G.dataset.place,G.dataset.kind);else if(R==="a-sea"){let K=_.scene;_.sea?X():(_.sea={from:m.uSea.value,to:K.needs_sea_level.m},L(_.sea.to)),ot()}else if(R==="a-city"){let K=n.place,b=_.scene?.centre??K;i.standCity(b.lat,b.lon)}else if(R==="a-known"){let K=n.place;i.checkKnown(K.lat,K.lon,Math.max(K.precision_km??10,5))}else if(R==="a-fit")E();else if(R==="a-fit-sea")E(Number(G.dataset.m));else if(R==="a-fit-off")x.setExtras([]),t.city.remove(),t.stamp++,i.drawTag(),o("Cleared");else if(R==="a-fit-copy")navigator.clipboard?.writeText(lt()).then(()=>o("Copied"),()=>o("Could not copy"));else if(R==="a-back")_.view="place",n.place?(h("legend"),ot()):i.closeSheet();else if(R==="a-tour")i.tour?.();else return!1;return!0};return{atlantis:w,scenes:S,stats:T,a:_,seaTo:L,ringStades:F.island/2+F.rings,openPlace:dt,openList:St,leaveScene:k,openBoard:Bt,closeBoard:vt,hidePop:Ut,drawCase:kt,click:ft,placeMarks:ee,selectFeature:ct,setStep:gt,setMode:rt,runFit:E,get boardOpen(){return Et.classList.contains("open")}}};var by=i=>(i??"").split(",")[0].trim(),Th=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")};var Bf=({worldfit:i,cas:t})=>{let e=[],n=i,s=t?.searches??[];if(e.push({id:"tale",say:"It begins with Plato, who has it told as \u201Ca tale which, though strange, is certainly true\u201D.",least:6e3}),e.push({id:"island",say:"Beyond the Pillars of Heracles, out in the Atlantic, lay an island \u201Clarger than Libya and Asia put together\u201D.",least:6500}),e.push({id:"city",say:"At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that \u201Csparkled like fire\u201D.",least:8e3}),e.push({id:"fall",say:"Then, \u201Cin a single day and night of misfortune\u201D, Atlantis \u201Cdisappeared in the depths of the sea\u201D.",least:7e3}),e.push({id:"date",say:"Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.",least:6e3}),n){let r=n.best.find(l=>!l.near_old_ice)??n.best[0];e.push({id:"sank",say:`The sea stood about 50 m lower then. Since that date, ${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2 of land have gone under. All of it is glowing now.`,least:8e3});let a=r?.near?.name?/^off /.test(r.near.name)?` The closest, ${r.near.name},`:` The closest, the ${by(r.near.name)},`:" The closest";r&&e.push({id:"scored",say:`We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${a} scores ${r.top}: a match in the landscape, not a city.`,least:9e3,best:r})}if(s.length){let r=l=>s.filter(o=>o.status===l).length,a=Math.min(...s.map(l=>l.year));e.push({id:"search",say:`People have gone looking since ${a}. Of ${s.length} searches on record, ${r("refuted")} were shown wrong, ${r("corrected")} were corrected, and ${r("unresolved")} are still open. Not one has found the city.`,least:9e3})}return e.push({id:"built",say:"So we built his city as he wrote it, each part tied to a line of his text.",least:5500}),e.push({id:"hall",say:"At its centre he put a shrine, \u201Creserved as holy ground, and encircled with a wall of gold\u201D. We opened it. Inside is everything found so far, and everything still unknown.",least:9500}),e.push({id:"turn",say:"Walk in. The search is yours now.",least:4e3}),e};var zf=(i,t,e)=>{let{world:n,data:s,$:r,esc:a,setSheet:l,st:o}=i,{control:h}=n,u=r("#tour"),c={on:!1,i:0,steps:[],timer:null,paused:!1,started:0,left:0,later:[]},f=(_,B=0)=>Math.max(B,2600+_.length*48),d=r("#shot"),p=s.storyMedia??[],v=_=>globalThis.__STORY__?.[_]??`${globalThis.__ASSETS__||"./"}${_}`,g=()=>d.classList.remove("on"),m=_=>{d.innerHTML=`<img src="${a(v(_.file))}" alt=""><figcaption>${a(_.caption)}</figcaption>`,d.style.setProperty("--hold",`${_.for}s`),d.classList.remove("on"),d.offsetWidth,d.classList.add("on")},x=(_,B)=>{let J=c.i;c.later.push(setTimeout(()=>{c.on&&c.i===J&&B()},_))},w=()=>{let _=(O,N,j,Y=3,V=0)=>h.flyTo({lon:O*mt,lat:N*mt,range:j,tilt:V*mt,heading:0},Y),B=()=>{t.leaveScene(),o.legend=o.place=null,l(null)},J=i.home,at=n.city,L=()=>{at.active||(at.place({lat:J.lat,lon:J.lon,bearing:J.bearing}),n.stamp++)},X={tale:()=>{B(),at.remove(),n.stamp++,e?.setGlow(0),i.setSea(0,!1),_(22,37,75e5,3.2,10)},island:()=>_(J.lon-4,J.lat,52e5,4.4,14),city:()=>{L(),h.flyTo({...at.view(),range:9500},4.6),x(5200,()=>{let O=at.viewOf("temple");O&&h.flyTo({...O,range:190,tilt:74*mt},1.6)}),x(8400,()=>{let O=at.viewOf("wall-orichalcum");O&&h.flyTo({...O,range:210},1.6)})},fall:()=>{i.sound?.sfx("rise",.3),h.flyTo({lon:J.lon*mt,lat:J.lat*mt,range:26e4,tilt:30*mt,heading:.4},6.5),x(3400,()=>{at.remove(),n.stamp++})},date:()=>{at.remove(),e?.setGlow(0),t.seaTo(-50),h.flyTo({lon:1*mt,lat:53*mt,range:34e5,tilt:18*mt,heading:0},4)},sank:()=>{t.seaTo(0),e?.setGlow(1),i.sound?.sfx("rise",.2)},scored:O=>{let N=O.best;h.flyTo({lon:N.lon*mt,lat:N.lat*mt,range:1e6,tilt:32*mt,heading:0},4.2),x(4400,()=>{e.scan(N.lon,N.lat),i.sound?.sfx("ping",.6)})},search:()=>_(-20,32,105e5,4),built:()=>{e?.setGlow(.5),i.setSea(0,!1),L(),h.flyTo({...at.view(),range:5200,tilt:62*mt},5)},hall:()=>{L();let O=at.viewOf("shrine");O&&h.flyTo({...O,range:190,tilt:64*mt,heading:O.heading+.5},6),i.sound?.sfx("reveal",.3)},turn:()=>i.enterCity?.("gate",!0)};return Bf({worldfit:e?s.worldfit:null,cas:s.cas}).map(O=>({...O,go:()=>X[O.id]?.(O)}))},M=()=>{let _=c.steps[c.i];u.innerHTML=`<p class="${_.tone?`w-${_.tone}`:""}">${a(_.say)}</p><div class="bar"><div class="dots">${c.steps.map((at,L)=>`<i class="${L<c.i?"done":L===c.i?"on":""}"><b></b></i>`).join("")}</div><button class="linkish" data-act="tour-pause">${c.paused?"Play":"Pause"}</button><button class="linkish" data-act="tour-next">${c.i===c.steps.length-1?"Finish":"Next"}</button><button class="linkish" data-act="tour-stop">${c.i===c.steps.length-1?"Close":"Skip to the city"}</button></div>`;let B=u.querySelector(".dots .on b"),J=_.total;B&&!c.paused?(B.style.transition="none",B.style.width=`${(1-c.left/J)*100}%`,requestAnimationFrame(()=>{B.style.transition=`width ${c.left}ms linear`,B.style.width="100%"})):B&&(B.style.width=`${(1-c.left/J)*100}%`)},S=()=>{clearTimeout(c.timer),c.started=performance.now(),c.paused||(c.timer=setTimeout(y,c.left))},A=_=>{c.i=_;let B=c.steps[_];g(),B.go();for(let at of p.filter(L=>L.line===B.id))x(at.at*1e3,()=>m(at)),x((at.at+at.for)*1e3,g);let J=i.sound?.say(B.say);B.total=c.left=J?Math.max(J*1e3+900,1500):f(B.say,B.least),M(),S()},y=()=>c.i>=c.steps.length-1?F():A(c.i+1),T=()=>{if(!(!t||c.on)){i.leaveWalk?.(),c.steps=w(),i.sound?.prime(c.steps.map(_=>_.say));for(let _ of p)new Image().src=v(_.file);c.on=!0,c.paused=!1,r("#intro").classList.add("gone"),t.closeBoard(),u.classList.add("open"),i.stage.classList.add("touring"),h.idle=!1,i.sound?.bed(!0),A(0)}},F=()=>{if(c.on){clearTimeout(c.timer);for(let _ of c.later)clearTimeout(_);c.later=[],c.on=!1,u.classList.remove("open"),i.stage.classList.remove("touring"),g(),i.sound?.hush(),i.sound?.bed(!1),t.leaveScene(),o.legend=o.place=null,l(null),e?.setGlow(1),Math.abs(n.globe.shared.uSea.value)>.6&&i.setSea(0,!1),i.walkOn?.()||i.enterCity?.("gate")}};return u.addEventListener("click",_=>{let B=_.target.closest("[data-act]")?.dataset.act;B==="tour-stop"?F():B==="tour-next"?y():B==="tour-pause"&&(c.paused?(c.paused=!1,i.sound?.resume(),S()):(c.paused=!0,clearTimeout(c.timer),i.sound?.pause(),c.left=Math.max(600,c.left-(performance.now()-c.started))),M())}),{start:T,stop:F,next:y,get on(){return c.on},get step(){return c.i},get steps(){return c.steps}}};var Hf=i=>{let{world:t,data:e,$:n,esc:s,stage:r}=i,{control:a}=t,l=t.city,o=n("#citybar"),h=e.reconstruction,u=new Map([...(h?.from_text??[]).map(m=>[m.id,{...m,kind:"text"}]),...(h?.choices??[]).map(m=>[m.id,{...m,kind:"choice"}])]),c={open:!1,walk:-1,parts:[],ghost:!1,cut:!1,part:null},f=(m,x)=>{let w=u.get(m)??x;return w?`<p class="cb-what"><span class="tag ${w.kind==="text"?"t-confirmed":"t-fringe"}">${w.kind==="text"?"From the text":"Our choice"}</span> ${s(w.what??m)}${w.ref?` <small>${s(w.ref)}</small>`:""}</p>${w.quote?`<p class="quote">\u201C${s(w.quote)}\u201D</p>`:w.why?`<p class="cb-why">${s(w.why)}</p>`:""}`:""},d=()=>{let m=l.active&&!i.tourOn()&&!i.walkOn?.()&&a.range<9e4&&!(a.fly&&a.fly.target.range>9e4);m!==c.open&&(c.open=m,o.classList.toggle("open",m),r.classList.toggle("city-on",m),m?p():(c.walk=-1,c.part=null,c.ghost=c.cut=!1))},p=()=>{if(!c.open)return;let m=w=>typeof l[w]=="function",x=c.walk>=0&&c.parts[c.walk];o.innerHTML=`
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${x?`${c.walk+1} of ${c.parts.length}`:""}</span></div>
      ${x?f(x.id,x):c.part?f(c.part.id,c.part):""}
      <div class="bar">
        ${m("parts")&&m("viewOf")?x?'<button class="btn" data-act="cb-prev">\u2039 Back</button><button class="btn primary" data-act="cb-next">Next \u203A</button><button class="linkish" data-act="cb-end">End the walk</button>':'<button class="btn primary" data-act="cb-foot">Go on foot</button><button class="btn" data-act="cb-walk">See each part</button>':""}
        ${x?"":`${m("setGhost")?`<button class="btn${c.ghost?" on":""}" data-act="cb-ghost">Text or guess</button>`:""}${m("cutaway")?`<button class="btn${c.cut?" on":""}" data-act="cb-cut">${c.cut?"Close the temple":"Open the temple"}</button>`:""}<button class="btn" data-act="cb-notes">Every part</button><button class="linkish" data-act="cb-off">Remove</button>`}
      </div>`},v=m=>{c.walk=m,c.part=null;let x=c.parts[m];if(x){l.highlight?.(x.id);let w=l.viewOf(x.id);w&&a.flyTo(w,2.4)}else l.highlight?.(null);t.stamp++,p()};return o.addEventListener("click",m=>{let x=m.target.closest("[data-act]")?.dataset.act;if(x==="cb-foot")i.enterCity?.("gate");else if(x==="cb-walk")c.parts=l.parts()??[],c.parts.length&&v(0);else if(x==="cb-next")v(c.walk+1>=c.parts.length?-1:c.walk+1);else if(x==="cb-prev")v(Math.max(0,c.walk-1));else if(x==="cb-end")v(-1),a.flyTo(l.view(),2.4);else if(x==="cb-ghost")c.ghost=!c.ghost,l.setGhost(c.ghost),t.stamp++,p();else if(x==="cb-cut"){c.cut=!c.cut,l.cutaway(c.cut),t.stamp++;let w=c.cut&&l.viewOf?.("temple");w&&a.flyTo({...w,tilt:Math.min(w.tilt??.6,40*mt)},2.2),p()}else x==="cb-notes"?i.drawCity():x==="cb-off"&&(l.highlight?.(null),l.remove(),t.stamp++,d(),i.drawTag())}),{sync:d,draw:p,tap:(m,x)=>{if(!l.active||typeof l.pick!="function"||c.walk>=0)return!1;let w=l.pick(m,x);return c.part=w??null,l.highlight?.(w?.id??null),t.stamp++,p(),!!w},state:c}};var Gf=1.7,wy=5.2,My=15,xa=.55,Sy=1,Ty={plateau:"The citadel",slope:"The planted slope",island:"The island",bridge:"A bridge",ramp:"The stair to the citadel",quay:"A quay","ring-inner":"The inner ring","ring-outer":"The outer ring",racecourse:"The racecourse",town:"The town",bank:"The edge of the town"},Vf=i=>{let{world:t,$:e,stage:n}=i,{control:s}=t,r=t.city,a=t.renderer.domElement,l=e("#walk"),o={on:!1,x:0,y:0,z:0,zs:0,dir:0,pitch:0,vel:[0,0],keys:new Set,look:null,stick:null,goal:null,hot:null,where:"",place:null,bob:0,moved:!1,hotspots:[],used:!1},h=new pe(new $n(.34,.5,28),new qe({color:new se(1.6,1.6,1.6),transparent:!0,opacity:0,depthWrite:!1}));h.renderOrder=5;let u=matchMedia("(pointer: coarse)").matches,c=()=>r.city.plan,f=()=>{let N=c();return[[N.rA-N.T,N.rA+.4],[N.r1a-.4,N.r1a+N.T],[N.r1b-N.T,N.r1b+.4],[N.r2a-.4,N.r2a+N.T],[N.r2b-N.T,N.r2b+.4]]},d=(N,j)=>{let Y=c(),V=Math.hypot(N,j),U=r.city.hall,H=r.city.temple;for(let[W,z]of f())if(V>W-xa&&V<z+xa&&!(j<0&&Math.abs(N-Y.off)<Y.bridgeHalf-9.8))return!0;if(U){for(let W of U.rings)if(Math.abs(V-W.r)<W.t+xa*.5){let z=N*Math.cos(W.a)+j*Math.sin(W.a),st=Math.abs(-N*Math.sin(W.a)+j*Math.cos(W.a));if(!(z>0&&st<W.gap))return!0}if(V<U.RC+3){for(let W of U.circles)if(Math.hypot(N-W.x,j-W.y)<W.r+xa*.6)return!0}}if(H?.room){let W=N-H.x,z=j-H.y,st=H.room.l/2,ot=H.room.w/2,ut=(dt,St)=>Math.abs(Math.abs(dt)-St)<1.1+xa*.5;if(Math.abs(W)<st+1.6&&Math.abs(z)<ot+1.6&&(ut(z,ot)||ut(W,st)&&!(W>0&&Math.abs(z)<H.room.door/2-.8)))return!0}return!1},p=(N,j)=>{let Y={};return c().groundZ(N,j,Y)==null||Y.kind==="water"?null:{z:r.localFloor(N,j),kind:Y.kind}},v=(N,j,Y=o.z)=>{let V=p(N,j);return!!V&&Math.abs(V.z-Y)<=Sy&&!d(N,j)},g=(N,j)=>{let Y=Math.hypot(N,j),V=Math.max(1,Math.ceil(Y/.35));for(let U=0;U<V;U++){let H=N/V,W=j/V,z=!1;for(let[st,ot]of[[0,1],[.6,.8],[-.6,.8],[1.15,.5],[-1.15,.5]]){let ut=Math.cos(st),dt=Math.sin(st),St=o.x+(H*ut-W*dt)*ot,k=o.y+(H*dt+W*ut)*ot;if(v(St,k)){o.x=St,o.y=k,o.z=p(St,k).z,z=!0;break}}if(!z){o.vel=[0,0];break}}},m=(N,j,Y=90)=>{for(let V=0;V<=Y;V+=1.5)for(let U=0;U<(V?16:1);U++){let H=U/16*Math.PI*2,W=N+V*Math.cos(H),z=j+V*Math.sin(H),st=p(W,z);if(st&&!d(W,z))return[W,z,st.z]}return null},x=()=>r.toCity(Math.sin(o.dir),Math.cos(o.dir)),w=(N=0)=>{o.zs+=(o.z-o.zs)*(N?1-Math.exp(-N*11):1);let j=Math.hypot(o.vel[0],o.vel[1]);j>.6&&(o.bob+=N*(j>9?13:9.5));let[Y,V]=r.toScene(o.x,o.y),[U,H]=r.toLonLat(Y,V);s.walk={lon:U,lat:H,yaw:o.dir,pitch:o.pitch,eye:Gf,lift:o.zs-o.z+(j>.6?Math.sin(o.bob)*.035:0)}},M=()=>[o.x,o.y,o.zs+Gf],S=()=>{let[N,j]=x(),Y=Math.cos(o.pitch),V=[N*Y,j*Y,Math.sin(o.pitch)],U=M(),H=null,W=.9;for(let z of o.hotspots){let st=[z.x-U[0],z.y-U[1],z.z-U[2]],ot=Math.hypot(st[0],st[1],st[2]);if(ot>z.reach||ot<.3)continue;let ut=(st[0]*V[0]+st[1]*V[1]+st[2]*V[2])/ot,dt=Math.cos(Math.min(.75,Math.atan2((z.size??1.5)/2,ot)+.1));ut>dt&&ut-dt+1>W&&(H=z,W=ut-dt+1)}return H},A=e("#w-use"),y=e("#w-where"),T=(N=o.hot)=>{N&&(o.used=!0,o.goal=null,N.act(N))},F=(N,j)=>{let Y=r.site.frame,V=s.ray(N,j),[U,H]=r.toCity(hn(V,Y.east),hn(V,Y.north)),W=[U,H,hn(V,Y.up)],z=M(),st=null,ot=1/0;for(let St of o.hotspots){let k=[St.x-z[0],St.y-z[1],St.z-z[2]],rt=k[0]*W[0]+k[1]*W[1]+k[2]*W[2];rt<.3||rt>St.reach||Math.hypot(k[0]-W[0]*rt,k[1]-W[1]*rt,k[2]-W[2]*rt)<(St.size??1.5)*.48&&rt<ot&&(st=St,ot=rt)}if(st)return T(st);if(W[2]>-.04)return;let ut=Math.min(70,(o.zs-z[2])/W[2]),dt=m(z[0]+W[0]*ut,z[1]+W[1]*ut,6);dt&&(o.goal=[dt[0],dt[1]],h.position.set(dt[0],dt[1],dt[2]+.04),h.material.opacity=.9,h.parent!==r.city.group&&r.city.group.add(h),t.stamp++)},_=N=>{if(!o.on)return;if(!r.active||!r.city)return O(!1);let j=o.keys,Y=document.activeElement?.closest?.("input, textarea, [contenteditable]"),V=0,U=0,H=0;Y||((j.has("KeyW")||j.has("ArrowUp"))&&(V+=1),(j.has("KeyS")||j.has("ArrowDown"))&&(V-=1),j.has("KeyD")&&(U+=1),j.has("KeyA")&&(U-=1),j.has("ArrowRight")&&(H+=1),j.has("ArrowLeft")&&(H-=1)),o.stick&&(V-=o.stick.dy,U+=o.stick.dx);let W=Math.hypot(V,U);W>1&&(V/=W,U/=W);let z=!Y&&(j.has("ShiftLeft")||j.has("ShiftRight"))||o.stick&&Math.hypot(o.stick.dx,o.stick.dy)>.93,[st,ot]=x(),ut=1-Math.exp(-N*10),dt=[st*V+ot*U,ot*V-st*U];if(o.goal){let Rt=o.goal[0]-o.x,Ct=o.goal[1]-o.y,Ut=Math.hypot(Rt,Ct);W>.05||Ut<.45||(o.stuck??0)>.5?(o.goal=null,o.stuck=0):(dt=[Rt/Ut,Ct/Ut],z=Ut>22,Ut<2.5&&(dt=dt.map(nt=>nt*Math.max(.35,Ut/2.5))))}!o.goal&&h.material.opacity>0&&(h.material.opacity=Math.max(0,h.material.opacity-N*3),t.stamp++);let St=z?My:wy;o.vel[0]+=(dt[0]*St-o.vel[0])*ut,o.vel[1]+=(dt[1]*St-o.vel[1])*ut,H&&(o.dir+=H*N*1.9);let k=Math.hypot(o.vel[0],o.vel[1]),rt=`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`,et=o.x,gt=o.y;k>.05&&g(o.vel[0]*N,o.vel[1]*N),o.goal&&(o.stuck=Math.hypot(o.x-et,o.y-gt)<k*N*.2?(o.stuck??0)+N:0),w(N),k>1.2&&Math.hypot(o.vel[0],o.vel[1])>1.2&&(o.moved=!0,i.sound?.step(z)),rt!==`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`&&t.stamp++;let ct=r.city.hall,Mt=r.city.temple,Tt=Math.hypot(o.x,o.y),Ft=p(o.x,o.y)?.kind,Dt=ct&&Tt<ct.RI?"The hall":ct&&Tt<ct.RG?"Inside the wall of gold":Mt&&Math.abs(o.x-Mt.x)<Mt.L/2&&Math.abs(o.y-Mt.y)<Mt.W/2?"Poseidon's temple":Ty[Ft]??"";Dt!==o.where&&(o.where=Dt,y.textContent=Dt,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"));let ee=Dt==="The hall"?"hall":"city";ee!==o.place&&(o.place=ee,i.sound?.air(ee),i.onWalkPlace?.(ee));let Vt=S();Vt!==o.hot&&(o.hot=Vt,A.hidden=!Vt,Vt&&(A.innerHTML=`<span>${i.esc(Vt.label)}</span>`))},B=(N,j,Y)=>{o.dir+=N*Y,o.pitch=Wt(o.pitch-j*Y,-1.25,1.35)};addEventListener("keydown",N=>{!o.on||N.target.closest?.("input, textarea, [contenteditable]")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"].includes(N.code)&&(o.keys.add(N.code),N.preventDefault()),(N.code==="KeyE"||N.code==="Enter")&&!N.repeat&&(T(),N.preventDefault()))}),addEventListener("keyup",N=>o.keys.delete(N.code)),addEventListener("blur",()=>o.keys.clear());let J=new Map,at=e("#w-stick");a.addEventListener("pointerdown",N=>{if(!o.on)return;let j=a.getBoundingClientRect(),Y=N.clientX-j.left,V=N.clientY-j.top,U=N.pointerType!=="mouse"&&Y<j.width*.42&&V>j.height*.45&&!o.stick&&Math.hypot(Y-84,V-(j.height-128))<110?"stick":"look";J.set(N.pointerId,{kind:U,x:Y,y:V,x0:Y,y0:V,t:performance.now(),mouse:N.pointerType==="mouse"}),U==="stick"&&(o.stick={dx:0,dy:0},o.goal=null,at.classList.add("on")),a.setPointerCapture?.(N.pointerId)}),a.addEventListener("pointermove",N=>{let j=J.get(N.pointerId);if(!o.on||!j)return;let Y=a.getBoundingClientRect(),V=N.clientX-Y.left,U=N.clientY-Y.top;if(j.kind==="stick"){let H=(V-j.x0)/56,W=(U-j.y0)/56,z=Math.hypot(H,W),st=z>1?1/z:1;o.stick={dx:H*st,dy:W*st},at.firstElementChild.style.transform=`translate(${H*st*30}px, ${W*st*30}px)`}else B(V-j.x,U-j.y,j.mouse?.004:.0055);j.x=V,j.y=U});let L=N=>{let j=J.get(N.pointerId);if(j){if(J.delete(N.pointerId),j.kind==="stick"){o.stick=null,at.classList.remove("on"),at.firstElementChild.style.transform="";return}o.on&&Math.hypot(j.x-j.x0,j.y-j.y0)<7&&performance.now()-j.t<400&&F(j.x,j.y)}};a.addEventListener("pointerup",L),a.addEventListener("pointercancel",L),A.addEventListener("click",()=>T());let X=({x:N=0,y:j=-60,dir:Y=null,look:V=null}={})=>{if(!r.active||!r.city)return!1;let U=m(N,j);if(!U)return!1;if([o.x,o.y,o.z]=U,o.zs=o.z,V){let[H,W]=r.toScene(V[0]-o.x,V[1]-o.y);o.dir=Math.atan2(H,W)}else o.dir=Y??s.heading;return o.pitch=0,o.vel=[0,0],o.keys.clear(),o.goal=null,o.hot=null,o.where="",o.place=null,A.hidden=!0,s.pointers.clear(),s.fly=null,o.on||(o.on=!0,l.hidden=!1,n.classList.add("walking"),i.onWalk?.(!0)),w(),t.stamp++,!0},O=(N=!0)=>{if(!o.on)return;o.on=!1,o.goal=null,h.removeFromParent(),l.hidden=!0,l.classList.remove("went"),n.classList.remove("walking");let j=s.walk;s.walk=null,i.sound?.air(null),j&&(s.jump({lon:j.lon,lat:j.lat,range:40,tilt:1.2,heading:o.dir}),N&&s.flyTo({lon:j.lon,lat:j.lat,range:420,tilt:1.05,heading:o.dir},2.2)),t.stamp++,i.onWalk?.(!1)};return t.beforeFrame=_,{enter:X,leave:O,use:T,footing:m,canStand:v,state:o,hotspots:o.hotspots,eye:M,forward:x,get on(){return o.on}}};var Vl="#eef2f6",Ui="#9aa7b4",ya="#e9bd62",Ey="#0b1016",Eh="#243040",xr={good:"#5fd0a0",bad:"#f0766a",warn:"#e9bd62",info:"#6fb6f0",mut:"#7c8794"},_a=["#16324a","#1f6f78","#2b9a8f","#58c08a","#e9bd62","#fff3c4"],Ay=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Ry=(i,t)=>i.length>t?`${i.slice(0,t-1).replace(/[ ,;:]+\S*$/,"")}\u2026`:i,Wf=(i,{A:t,H:e,walk:n})=>{let{world:s,data:r,$:a,esc:l,link:o,setSheet:h,body:u,eyebrow:c,toast:f}=i,d=s.city,p=r.worldfit,v=r.cas,g=r.evidence??[],m=r.open,x={group:null,on:null,boards:[],globe:null,spin:null,painted:!1},w=s.phone?768:1152,M=Math.round(w/1.8),S=w/1152,A=(k,rt=500)=>`${rt} ${Math.round(k*S)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,y=(k,rt,et)=>{let gt=[],ct="";for(let Mt of String(rt).split(/\s+/)){let Tt=ct?`${ct} ${Mt}`:Mt;k.measureText(Tt).width>et&&ct?(gt.push(ct),ct=Mt):ct=Tt}return ct&&gt.push(ct),gt},T=(k,rt,et,gt,ct,Mt,{colour:Tt=Vl,weight:Ft=500,rows:Dt=9,gap:ee=1.32}={})=>{k.font=A(Mt,Ft),k.fillStyle=Tt,k.textBaseline="top";let Vt=y(k,rt,ct*S);return Vt.slice(0,Dt).forEach((Rt,Ct)=>k.fillText(Ct===Dt-1&&Vt.length>Dt?`${Rt.replace(/[ ,;:]+\S*$/,"")}\u2026`:Rt,et*S,(gt+Ct*Mt*ee)*S)),gt+Math.min(Dt,Vt.length)*Mt*ee},F=(k,rt,et)=>(k.fillStyle=Ey,k.fillRect(0,0,w,M),k.fillStyle=ya,k.fillRect(0,0,w,5*S),k.font=A(21,700),k.fillStyle=ya,k.textBaseline="top",k.fillText(rt.toUpperCase().split("").join("\u200A"),56*S,44*S),T(k,et,56,78,1040,54,{weight:700,rows:2,gap:1.12})+22),_=(k,rt)=>{k.font=A(20,500),k.fillStyle=Ui,k.textBaseline="alphabetic",k.fillText(rt,56*S,M-30*S),k.fillStyle=Eh,k.fillRect(56*S,M-66*S,w-112*S,1.5*S)},B=(k,rt,et,gt,ct)=>{k.fillStyle=ct,k.beginPath(),k.arc(rt*S,et*S,gt*S,0,7),k.fill()},J=(k,rt,et,gt,ct=22)=>gt.forEach((Mt,Tt)=>{k.fillStyle=Mt?_a[4]:"#2a3442",k.fillRect((rt+Tt*(ct+5))*S,et*S,ct*S,ct*S)}),at=k=>p?.places.find(rt=>rt.id===k),L=(v?.searches??[]).filter(k=>k.status==="unresolved"||k.status==="never-tested"),X=new Set((e?.CLUES??[]).map(k=>k.claim)),O=(v?.claims??[]).filter(k=>!X.has(k.id)),N=g.flatMap(k=>(k.not_located??[]).map(rt=>({site:k.name,what:typeof rt=="string"?rt:rt.what??rt.name??rt.id??""}))).filter(k=>k.what),j=(p?.best??[]).filter(k=>!k.near_old_ice),Y=m?.work?.filter(k=>(k.status??"open")!=="done")??[],V=[];for(let k=0;k<g.length;k+=2)V.push(g.slice(k,k+2));let U=[];for(U.push({id:"welcome",label:"Read: what this room is",draw:k=>{let rt=F(k,"The hall","The one closed place in the story, opened");rt=T(k,"Plato wrote that the shrine at the centre was holy ground with a wall of gold round it. He says nothing of what was inside. So this is where the search is kept.",56,rt,1040,30,{colour:Ui,rows:3})+26;for(let[et,gt]of[["1","Follow the wall to your left: his words, then what the Earth says, then every place people named."],["2","Past the far side: what is still unknown, and work you can pick up, with or without an AI."],["3","The globe in the middle opens the whole Earth. Hunt for it yourself."]])B(k,74,rt+20,19,"#1b2532"),k.font=A(22,700),k.fillStyle=ya,k.textBaseline="middle",k.textAlign="center",k.fillText(et,74*S,(rt+21)*S),k.textAlign="left",rt=T(k,gt,112,rt,980,29,{rows:2})+16;_(k,"Signed in, you can talk here: text for the room, voice for whoever stands near you.")},sheet:()=>'<h2>The hall</h2><div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button><button class="btn" data-act="hl-work">Work to pick up</button></div>'}),U.push({id:"text",label:"Read: what Plato wrote",draw:k=>{let rt=F(k,"His words",`${v?.claims.length??""} things Plato says that can be checked`),et=(e?.CLUES??[]).map(gt=>v?.claims.find(ct=>ct.id===gt.claim)).filter(Boolean);for(let gt of et.slice(0,5))B(k,66,rt+17,8,_a[4]),k.font=A(21,600),k.fillStyle=Ui,k.textBaseline="top",k.textAlign="right",k.fillText(gt.ref.split(";")[0],(w/S-56)*S,(rt+5)*S),k.textAlign="left",rt=T(k,gt.label,92,rt,760,27,{rows:2})+12;_(k,`The ${et.length} with a gold dot are scored on the globe. The other ${O.length} are waiting for someone.`)},sheet:()=>`<h2>What Plato wrote</h2>${(v?.claims??[]).map(k=>`<div class="known"><span>${X.has(k.id)?'<i class="cdot on"></i>':'<i class="cdot"></i>'}${l(k.label)}</span><small>${l(k.ref??"")}</small></div>`).join("")}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>`}),U.push({id:"earth",label:"Read: what the Earth says",draw:k=>{let rt=F(k,"The Earth","Nothing on Earth scores 5 of 5"),et=p?.totals.by_score??[],gt=Math.max(1,...et.map(ct=>ct.km2));rt=T(k,`${((p?.totals.land_that_sank_km2??0)/1e6).toFixed(1)} million km\xB2 of land have gone under the sea since Plato's date. Every 10 km of it was scored against his words.`,56,rt,1040,29,{colour:Ui,rows:2})+28;for(let ct of et)k.font=A(26,700),k.fillStyle=Vl,k.textBaseline="middle",k.fillText(`${ct.score} of 5`,56*S,(rt+17)*S),k.fillStyle="#16202c",k.fillRect(190*S,rt*S,640*S,34*S),k.fillStyle=_a[ct.score],k.fillRect(190*S,rt*S,Math.max(ct.km2?3:0,640*ct.km2/gt)*S,34*S),k.font=A(23,500),k.fillStyle=ct.km2?Ui:xr.bad,k.fillText(ct.km2?`${Math.round(ct.km2).toLocaleString("en")} km\xB2`:"none",850*S,(rt+17)*S),rt+=48;_(k,"A score is a match in the landscape. It is not evidence of a city.")},sheet:()=>`<h2>What the Earth says</h2>${(p?.totals.by_score??[]).map(k=>`<div class="known"><span>${k.score} of 5</span><small>${Math.round(k.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button><button class="btn" data-act="h-rules">How it's scored</button></div>`}),U.push({id:"best",label:"Read: the best matches on Earth",draw:k=>{let rt=F(k,"The leaderboard","The closest matches so far");j.slice(0,6).forEach((et,gt)=>{k.font=A(26,700),k.fillStyle=Ui,k.textBaseline="top",k.fillText(String(gt+1),56*S,(rt+2)*S),k.font=A(28,600),k.fillStyle=Vl,k.fillText(Ry(et.near?.name??`${et.lat.toFixed(1)}, ${et.lon.toFixed(1)}`,40),104*S,rt*S),J(k,800,rt+4,(e?.CLUES??[]).map(ct=>et.clues.includes(ct.key))),k.font=A(26,700),k.fillStyle=_a[et.top],k.textAlign="right",k.fillText(`${et.top}/5`,(w/S-56)*S,(rt+2)*S),k.textAlign="left",rt+=50}),_(k,"Find a better spot on the globe and claim it.")},sheet:()=>`<h2>Closest landscape matches</h2>${j.slice(0,12).map((k,rt)=>`<div class="known"><span>${rt+1}. ${l(k.near?.name??`${k.lat.toFixed(1)}, ${k.lon.toFixed(1)}`)}</span><small>${k.top} of 5 \xB7 ${Math.round(k.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),V.forEach((k,rt)=>U.push({id:`claims-${rt+1}`,label:`Read: ${k.map(et=>et.name.split(",")[0]).join(" and ")}`,draw:et=>{F(et,`Places people named \xB7 ${rt+1} of ${V.length}`,k.map(gt=>gt.name.split(",")[0]).join("  \xB7  ")),k.forEach((gt,ct)=>{let Mt=56+ct*532,Tt=at(gt.place??gt.id),Ft=196;et.font=A(20,700),et.fillStyle=xr.warn,et.textBaseline="top",et.fillText("CLAIMED",Mt*S,Ft*S),Ft=T(et,gt.claimed?.line??"",Mt,Ft+28,480,24,{rows:4})+18,et.font=A(20,700),et.fillStyle=xr.good,et.fillText("FOUND",Mt*S,Ft*S),Ft=T(et,gt.found?.line??"",Mt,Ft+28,480,24,{rows:5})+14,Tt&&(et.font=A(22,600),et.fillStyle=Ui,et.fillText(`By the hunt's rules: ${Tt.score} of 5`,Mt*S,(M/S-112)*S))}),et.fillStyle=Eh,et.fillRect(w/2-1,196*S,1.5*S,M-290*S),_(et,"Each has a scene on the globe: what was claimed and what was found, drawn on the ground.")},sheet:()=>k.map(et=>`<h2>${l(et.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${l(et.claimed?.line??"")}</p><p><span class="tag t-confirmed">Found</span> ${l(et.found?.line??"")}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${l(et.place??et.id)}">See it on the globe</button></div>`).join("")})),U.push({id:"searches",label:"Read: every search on record",draw:k=>{let rt=v?.searches??[],et=F(k,"The searches",`${rt.length} searches, ${Math.min(...rt.map(Dt=>Dt.year))} to ${Math.max(...rt.map(Dt=>Dt.year))}`),gt=Dt=>Dt<1950?70+(Dt-1650)/300*250:320+(Dt-1950)/80*770,ct=et+150;k.fillStyle=Eh,k.fillRect(56*S,ct*S,(w/S-112)*S,2*S),k.font=A(19,500),k.fillStyle=Ui,k.textBaseline="top",k.textAlign="center";for(let Dt of[1700,1800,1900,1950,1975,2e3,2025])k.fillRect(gt(Dt)*S,(ct-6)*S,1.5*S,14*S),k.fillText(String(Dt),gt(Dt)*S,(ct+16)*S);k.textAlign="left";let Mt=new Map;for(let Dt of rt){let ee=Math.round(gt(Dt.year)/15),Vt=Mt.get(ee)??0;Mt.set(ee,Vt+1),B(k,ee*15,ct-20-Vt*24,9,xr[ai[Dt.status]?.tone??"mut"])}let Tt=56,Ft=ct+78;for(let[Dt,ee]of Object.entries(ai)){let Vt=rt.filter(Ct=>Ct.status===Dt).length;if(!Vt)continue;B(k,Tt+9,Ft+14,9,xr[ee.tone]),k.font=A(22,500),k.fillStyle=Vl,k.textBaseline="top";let Rt=`${Vt} ${ee.short.toLowerCase()}`;k.fillText(Rt,(Tt+26)*S,Ft*S),Tt+=44+k.measureText(Rt).width/S}_(k,"Not one has found the city.")},sheet:()=>`<h2>Every search on record</h2>${(v?.searches??[]).map(k=>`<div class="known"><span>${l(k.title)}</span><small>${l(String(k.date??k.year))} \xB7 ${l(ai[k.status]?.short??k.status)}</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>`}),U.push({id:"unknown",label:"Read: what is still unknown",draw:k=>{let rt=F(k,"Still unknown",`${L.length} searches with no answer yet`);for(let et of L.slice(0,6))B(k,66,rt+15,8,xr[ai[et.status]?.tone??"mut"]),k.font=A(20,600),k.fillStyle=Ui,k.textBaseline="top",k.textAlign="right",k.fillText(String(et.year),(w/S-56)*S,(rt+3)*S),k.textAlign="left",rt=T(k,et.title,92,rt,880,25,{rows:1})+11;_(k,`Also open: ${O.length} of Plato's claims not scored, and ${N.length} things claimed at a place with no published position.`)},sheet:()=>`<h2>What is still unknown</h2><h3>Searches with no answer yet</h3>${L.map(k=>`<div class="known"><span>${l(k.title)}${k.source?` ${o(typeof k.source=="string"?k.source:k.source.url??"","source")}`:""}</span><small>${l(String(k.date??k.year))} \xB7 ${l(ai[k.status]?.short??"")}</small></div>`).join("")}<h3>Claims of Plato's not scored yet</h3>${O.map(k=>`<div class="known"><span>${l(k.label)}</span><small>${l(k.ref??"")}</small></div>`).join("")}${N.length?`<h3>Claimed at a place, with no published position</h3>${N.map(k=>`<div class="known"><span>${l(k.what)}</span><small>${l(k.site.split(",")[0])}</small></div>`).join("")}`:""}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>`}),U.push({id:"work",label:"Read: work you can pick up",draw:k=>{let rt=F(k,"Open work",`${Y.length} things to pick up`);[Y.slice(0,Math.ceil(Math.min(Y.length,10)/2)),Y.slice(Math.ceil(Math.min(Y.length,10)/2),10)].forEach((gt,ct)=>{let Mt=rt;for(let Tt of gt)k.font=A(18,700),k.fillStyle=ya,k.textBaseline="top",k.fillText(Tt.area.toUpperCase(),(56+ct*532)*S,Mt*S),Mt=T(k,Tt.title,56+ct*532,Mt+24,480,25,{rows:1})+13}),_(k,"Each comes with a prompt to hand to your AI. Press to see them all.")},sheet:()=>st()}),U.push({id:"help",label:"Read: how to help, with your AI",draw:k=>{let rt=F(k,"Bring your AI","Anyone can add to this");(m?.how??[]).slice(0,5).forEach((et,gt)=>{B(k,74,rt+18,17,"#1b2532"),k.font=A(20,700),k.fillStyle=ya,k.textBaseline="middle",k.textAlign="center",k.fillText(String(gt+1),74*S,(rt+19)*S),k.textAlign="left",rt=T(k,et,110,rt+2,990,24,{rows:2})+13}),_(k,"Better graphics, more research, new data, sound, things to do: all of it is open.")},sheet:()=>st()});U.length<12;)U.push(null);let H=()=>i.host?.community??m?.community??"atlantis",W=()=>(m?.repository??"").replace(/\/[^/]+$/,`/${H()}`),z=k=>`Help with a/${H()} on Abstracts (https://abstracts.co/a/${H()}). Its repository is ${W()}.

${k?`The task: ${k.title} (${k.id}, ${k.area}).
${k.why}
Done when: ${k.done_when}`:"Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want."}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${k?` This task starts in: ${k.start.join(", ")}.`:""}
2. Offer to say on the community's Wall that I am taking ${k?k.id:"the task"}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${k?k.check.map(rt=>`\`${rt}\``).join(" and "):"the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${W()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${k?k.id:"the task"} in it.`,st=()=>`<h2>Work you can pick up</h2>${Object.entries(m?.areas??{}).map(([k,rt])=>{let et=Y.filter(gt=>gt.area===k);return et.length?`<h3>${l(k[0].toUpperCase()+k.slice(1))}</h3>${et.map(gt=>`<details class="hl-task"><summary><b>${l(gt.title)}</b><small>${l(gt.size)}</small></summary><p>${l(gt.why)}</p><p><span class="tag t-confirmed">Done when</span> ${l(gt.done_when)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${l(gt.id)}">Copy the prompt for my AI</button></div></details>`).join("")}`:""}).join("")}`,ot=k=>{let rt=U.find(et=>et?.id===k);rt&&(h("hall"),c.textContent="The hall",u.innerHTML=rt.sheet())};u.addEventListener("click",k=>{let rt=k.target.closest('[data-act^="hl-"]');if(!rt)return;let et=rt.dataset.act;if(et==="hl-work")ot("work");else if(et==="hl-globe")i.openGlobe?.();else if(et==="hl-board")i.openGlobe?.(!1),t?.openBoard();else if(et==="hl-place"){let gt=t?.atlantis.places.find(ct=>ct.id===rt.dataset.id);i.openGlobe?.(!1),gt&&t.openPlace(gt,!0)}else if(et==="hl-prompt"){let gt=z(Y.find(ct=>ct.id===rt.dataset.id)??null);(navigator.clipboard?.writeText(gt)??Promise.reject()).then(()=>f("Copied. Paste it to your AI."),()=>{u.insertAdjacentHTML("beforeend",`<pre class="c-share">${l(gt)}</pre>`),f("Select the text and copy it")})}});let ut=()=>{let et=document.createElement("canvas");et.width=720,et.height=360;let gt=et.getContext("2d"),ct=gt.createImageData(720,360),Mt=ct.data,Tt=e?.state,Ft=Tt?.n,Dt=Ct=>[parseInt(Ct.slice(1,3),16),parseInt(Ct.slice(3,5),16),parseInt(Ct.slice(5,7),16)],ee=Dt("#0c2a44"),Vt=Dt("#3b4a3f"),Rt=_a.map(Dt);for(let Ct=0;Ct<360;Ct++){let Ut=Math.max(-85,Math.min(85,90-(Ct+.5)/360*180))*Math.PI/180,nt=Ft?Math.max(0,Math.min(Ft-1,Math.floor((1-Math.log(Math.tan(Ut)+1/Math.cos(Ut))/Math.PI)/2*Ft))):0;for(let $t=0;$t<720;$t++){let Et=ee;if(Ft){let vt=nt*Ft+Math.floor($t/720*Ft),Lt=Tt.state[vt];Et=Lt===1?Vt:Lt===2?Rt[Math.max(1,Ay(Tt.bits[vt]))]:ee}let Bt=(Ct*720+$t)*4;Mt[Bt]=Et[0],Mt[Bt+1]=Et[1],Mt[Bt+2]=Et[2],Mt[Bt+3]=255}}return gt.putImageData(ct,0,0),et},dt=()=>{let k=d.city.hall,rt=new $e;rt.name="hall",x.boards=[],k.panels.forEach((Tt,Ft)=>{let Dt=U[Ft];if(!Dt)return;let ee=document.createElement("canvas");ee.width=w,ee.height=M;let Vt=ee.getContext("2d");Vt.textAlign="left",Dt.draw(Vt);let Rt=new Li(ee);Rt.colorSpace=Ie,Rt.anisotropy=4;let Ct=new pe(new Fn(Tt.w,Tt.h),new qe({map:Rt})),Ut=new ht(-Math.cos(Tt.a),-Math.sin(Tt.a),0),nt=new ht(0,0,1),$t=new ht().crossVectors(nt,Ut);Ct.quaternion.setFromRotationMatrix(new xe().makeBasis($t,nt,Ut)),Ct.position.set(Tt.x,Tt.y,Tt.z);let Et=new pe(new Fn(Tt.w+.16,Tt.h+.16),new qe({color:new se(.55,.4,.14)}));Et.quaternion.copy(Ct.quaternion),Et.position.set(Tt.x-Ut.x*.03,Tt.y-Ut.y*.03,Tt.z),rt.add(Et,Ct),x.boards.push({...Dt,mesh:Ct,canvas:ee,tex:Rt,at:Tt})});let et=new Li(ut());et.colorSpace=Ie;let gt=new pe(new Un(k.globe.r,48,32),new qe({map:et}));gt.rotation.x=Math.PI/2;let ct=new $e,Mt=new $e;return ct.add(gt),Mt.add(ct),Mt.rotation.y=.41,Mt.position.set(k.globe.x,k.globe.y,k.globe.z),rt.add(Mt),x.globe={ball:gt,tex:et,painted:!!e?.state.ready},x.spin=ct,rt};return{sync:()=>{let k=d.city?.group??null;if(k!==x.on&&(x.on=k,k&&d.city.hall)){x.group=dt(),k.add(x.group);let rt=d.city.hall;n.hotspots.length=0;for(let et of x.boards)n.hotspots.push({id:et.id,x:et.at.x,y:et.at.y,z:et.at.z,reach:15,size:et.at.w,label:et.label,act:()=>ot(et.id)});n.hotspots.push({id:"globe",x:rt.globe.x,y:rt.globe.y,z:rt.globe.z,reach:13,size:rt.globe.r*2.4,label:"Open the globe: hunt for it yourself",act:()=>i.openGlobe?.()})}!x.group||!d.active||(x.globe&&!x.globe.painted&&e?.state.ready&&(x.globe.tex.image=ut(),x.globe.tex.needsUpdate=!0,x.globe.painted=!0,s.stamp++),n.on&&Math.hypot(n.state.x,n.state.y)<d.city.hall.RG&&(x.spin.rotation.z=s.time*.12,s.stamp++))},show:ot,boards:U,promptFor:z,state:x,counts:{work:Y.length,openSearches:L.length,unscored:O.length,lost:N.length}}};var Wl=["HALL22","HALL23","HALL24","HALL25","HALL26","HALL27","HALL28","HALL29"],Cy=30,$f=38,Py=8,Iy=900,Ah=280,Ly=i=>{let t=0;for(let e of String(i))t=(t*31+e.charCodeAt(0))%360;return t},qf=(i,{walk:t})=>{let{world:e,$:n,esc:s,toast:r,st:a}=i,l=e.city,o=n("#meet"),h=n("#people"),u=new URLSearchParams(location.search).get("room"),c={state:"off",drawn:null,me:null,members:new Map,socket:null,room:0,seats:8,ice:[],batch:!1,lastPos:"",sentAt:0,saidAt:0,lines:[],muted:new Set,voice:{on:!1,stream:null,mic:!0,peers:new Map},group:null,on:null,tries:0},f=V=>{c.socket?.readyState===1&&c.socket.send(JSON.stringify(V))},d='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>',p=()=>{if(c.drawn!==c.state&&(c.drawn=c.state,o.dataset.state=c.state,o.innerHTML=c.state==="on"?`<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${Ah}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${d}</button><span class="mt-n" id="mt-n"></span></form>`:c.state==="signed-out"?'<button class="btn glass" data-act="mt-signin">Sign in to meet people</button>':c.state==="ask"?'<button class="btn glass" data-act="mt-join">Meet people</button>':c.state==="elsewhere"?`<a class="btn glass" href="https://abstracts.co/a/${s(i.data.open?.community??"atlantis")}?a_hall=1" target="_blank" rel="noopener">Meet people on abstracts.co</a>`:c.state==="joining"?'<span class="mt-state">Joining\u2026</span>':c.state==="full"?'<span class="mt-state">Rooms are full</span>':""),c.state==="on"){let V=n("#mt-log"),U=n("#mt-mic"),H=n("#mt-n");V.innerHTML=c.lines.slice(-6).map(W=>`<p${W.mine?' class="mine"':""}><b>${s(W.name)}</b> ${s(W.text)}</p>`).join(""),V.scrollTop=V.scrollHeight,U.className=`mt-mic${c.voice.on?c.voice.mic?" on":" muted":""}`,U.setAttribute("aria-label",c.voice.on?c.voice.mic?"Mute my microphone":"Unmute my microphone":"Talk with people near me"),U.setAttribute("aria-pressed",String(c.voice.on&&c.voice.mic)),H.textContent=`${c.members.size+1} here`}o.hidden=!o.innerHTML||!t.on},v=(V,U,H=!1)=>{c.lines.push({name:V,text:U,mine:H}),c.lines.length>40&&c.lines.shift(),p()},g=V=>{let U=new $e,H=new se().setHSL(Ly(V)/360,.55,.62),W=H.clone().multiplyScalar(.55),z=new pe(new zr(.27,.86,4,10),new qe({color:H}));z.rotation.x=Math.PI/2,z.position.z=.72;let st=new pe(new Un(.21,12,10),new qe({color:H.clone().multiplyScalar(1.15)}));st.position.z=1.52;let ot=new pe(new Gr(.09,.26,8),new qe({color:W}));ot.position.set(0,.24,1.5);let ut=new pe(new $n(.42,.5,24),new qe({color:new se(1.4,1.1,.4),transparent:!0,opacity:0}));return ut.position.z=.03,U.add(z,st,ot,ut),U.userData.ring=ut,U},m=V=>{let U=document.createElement("div");return U.className="person",U.innerHTML=`<i></i><span>${s(V.name)}</span>`,h.append(U),U},x=V=>{if(!V?.id||V.id===c.me?.id||c.members.has(V.id))return c.members.get(V?.id);let U={id:V.id,name:V.name||V.username||"Someone",username:V.username,x:0,y:0,dir:0,tx:null,ty:0,tdir:0,voice:!1,talking:0,seen:0,fig:g(V.id),tag:null};return U.fig.visible=!1,U.tag=m(U),c.group?.add(U.fig),c.members.set(V.id,U),U},w=V=>{let U=c.members.get(V);U&&(U.fig.removeFromParent(),U.tag.remove(),B(V),c.members.delete(V),p(),e.stamp++)},M=(V,U)=>{let H=c.members.get(V);!H||!Array.isArray(U)||!U.slice(0,3).every(Number.isFinite)||([H.tx,H.ty,H.tdir]=U,H.voice=!!(U[3]&1),H.seen=performance.now(),H.fig.visible===!1&&(H.x=H.tx,H.y=H.ty,H.dir=H.tdir,H.fig.visible=!0))},S=async()=>u?{url:u.replace(/[A-Z2-9]{6}$/,Wl[c.room]),token:`dev.${encodeURIComponent(new URLSearchParams(location.search).get("as")??"Guest")}`,ice:[],room:Wl[c.room]}:bi("roomToken",{room:Wl[c.room]}),A=async(V=!1)=>{if(!(c.state==="on"||c.state==="joining")){c.state="joining",p();try{!u&&V&&await bi("viewer");let U=await S();c.ice=U.ice??[],c.seats=U.seats??8;let H=c.socket=new WebSocket(`${U.url}?token=${encodeURIComponent(U.token)}`);H.onmessage=W=>{let z;try{z=JSON.parse(W.data)}catch{return}y(z)},H.onclose=W=>{if(c.socket===H){c.socket=null;for(let z of[...c.members.keys()])w(z);if(W.code===4003&&c.room<Wl.length-1)return c.room++,c.state="off",A();if(W.code===4003)return c.state="full",p();if(W.code===4001)return c.state="ask",r("You joined from somewhere else"),p();c.state="off",t.on&&c.tries++<5?setTimeout(()=>{t.on&&c.state==="off"&&A()},1500*c.tries):(c.state="ask",p())}}}catch(U){c.state=U?.code==="signed_out"?"signed-out":U?.code==="unsupported"?"off":"ask",V&&U?.code&&!["denied","cancelled","signed_out"].includes(U.code)&&r("The room is not answering"),p()}}},y=V=>{if(V.t==="welcome"){c.me=V.you,c.state="on",c.tries=0,c.batch=V.seats!==void 0,V.seats&&(c.seats=V.seats);for(let U of V.members??[])x(U);for(let[U,H]of Object.entries(V.pos??{}))M(U,H);c.lastPos="",p()}else if(V.t==="join"){let U=x(V.member);U&&v(U.name,"came in"),c.lastPos=""}else if(V.t==="leave"){let U=c.members.get(V.id);U&&v(U.name,"left"),w(V.id)}else if(V.t==="pos")for(let[U,H]of Object.entries(V.from??{}))M(U,H);else if(V.t==="msg"){let U=V.data,H=c.members.get(V.from);if(!H||!U||typeof U!="object")return;Array.isArray(U.p)?M(V.from,U.p):typeof U.c=="string"&&!c.muted.has(V.from)?(v(H.name,U.c.slice(0,Ah)),i.sound?.sfx("tick",.12)):U.rtc&&at(V.from,U.rtc)}else V.t==="error"&&V.code==="invalid"&&c.batch&&(c.batch=!1)},T=()=>{let V=c.socket;c.socket=null,V?.close(1e3);for(let U of[...c.members.keys()])w(U);X(),(c.state==="on"||c.state==="joining")&&(c.state="ask"),p()},F=V=>{let U=V.trim().slice(0,Ah),H=performance.now();return!U||c.state!=="on"?!1:H-c.saidAt<Iy?(r("A moment between lines"),!1):(c.saidAt=H,f({t:"send",data:{c:U}}),v(c.me?.name??"You",U,!0),!0)},_=c.voice,B=V=>{let U=_.peers.get(V);if(U){_.peers.delete(V);try{U.pc.close()}catch{}U.out?.disconnect(),U.el?.remove()}},J=V=>{if(_.peers.has(V))return _.peers.get(V);let U=new RTCPeerConnection({iceServers:c.ice}),H={pc:U,id:V,out:null,gain:null,pan:null,level:null,el:null,polite:String(c.me.id)>String(V),making:!1};if(_.peers.set(V,H),_.stream)for(let W of _.stream.getAudioTracks())U.addTrack(W,_.stream);else U.addTransceiver("audio",{direction:"recvonly"});return U.onicecandidate=W=>{W.candidate&&f({t:"send",to:V,data:{rtc:{ice:W.candidate}}})},U.onnegotiationneeded=async()=>{try{H.making=!0,await U.setLocalDescription(),f({t:"send",to:V,data:{rtc:{sdp:U.localDescription}}})}catch{}finally{H.making=!1}},U.ontrack=W=>{let z=W.streams[0]??new MediaStream([W.track]),st=i.sound?.context;H.el=Object.assign(document.createElement("audio"),{srcObject:z,muted:!!st,autoplay:!0}),H.el.play?.().catch(()=>{}),st&&(H.out=st.createMediaStreamSource(z),H.gain=st.createGain(),H.gain.gain.value=0,H.pan=st.createStereoPanner(),H.level=st.createAnalyser(),H.level.fftSize=256,H.out.connect(H.level),H.out.connect(H.gain).connect(H.pan).connect(i.sound.master))},U.onconnectionstatechange=()=>{["failed","closed"].includes(U.connectionState)&&B(V)},H},at=async(V,U)=>{if(!_.on)return;let H=J(V),W=H.pc;try{if(U.sdp){if(U.sdp.type==="offer"&&(H.making||W.signalingState!=="stable")&&!H.polite)return;await W.setRemoteDescription(U.sdp),U.sdp.type==="offer"&&(await W.setLocalDescription(),f({t:"send",to:V,data:{rtc:{sdp:W.localDescription}}}))}else U.ice&&await W.addIceCandidate(U.ice).catch(()=>{})}catch{}},L=async()=>{if(!_.on){try{_.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),_.mic=!0}catch{_.stream=null,_.mic=!1,r("No microphone: you can listen")}_.on=!0,c.lastPos="",i.sound?.context.state!=="running"&&i.sound?.context.resume().catch(()=>{}),p()}},X=()=>{if(_.on){_.on=!1;for(let V of[..._.peers.keys()])B(V);for(let V of _.stream?.getTracks()??[])V.stop();_.stream=null,c.lastPos="",p()}},O=()=>{_.mic=!_.mic;for(let V of _.stream?.getAudioTracks()??[])V.enabled=_.mic;p()};document.addEventListener("visibilitychange",()=>{if(document.hidden&&_.on&&_.stream){_.mic=!1;for(let V of _.stream.getAudioTracks())V.enabled=!1;p()}});let N=new ht,j=V=>{let U=l.city?.group??null;if(U!==c.on)if(c.on=U,U){c.group=new $e,c.group.name="people",U.add(c.group);for(let et of c.members.values())c.group.add(et.fig)}else c.group=null;if(!t.on){(c.state==="on"||c.state==="joining")&&T(),o.hidden||(o.hidden=!0,h.hidden=!0);return}h.hidden=!1,o.hidden&&p();let H=t.state,W=performance.now();if(c.state==="on"){let et=[Math.round(H.x*10)/10,Math.round(H.y*10)/10,Math.round(H.dir*100)/100,_.on?1:0],gt=et.join(",");(gt!==c.lastPos&&W-c.sentAt>(c.batch?200:330)||W-c.sentAt>3e3)&&(c.lastPos=gt,c.sentAt=W,f(c.batch?{t:"pos",data:et}:{t:"send",data:{p:et}}))}if(!c.members.size)return;let z=l.camera,st=e.renderer.domElement,ot=st.clientWidth,ut=st.clientHeight,dt=1-Math.exp(-V*9),[St,k]=t.forward(),rt=[];for(let et of c.members.values()){if(et.tx==null)continue;let gt=et.x+et.y;et.x+=(et.tx-et.x)*dt,et.y+=(et.ty-et.y)*dt;let ct=et.tdir-et.dir;ct=Math.atan2(Math.sin(ct),Math.cos(ct)),et.dir+=ct*dt;let Mt=l.localFloor(et.x,et.y)??H.z;et.fig.position.set(et.x,et.y,Mt),et.fig.rotation.z=-et.dir-l.turn,Math.abs(et.x+et.y-gt)>.001&&e.stamp++;let Tt=Math.hypot(et.x-H.x,et.y-H.y);N.set(et.x,et.y,Mt+1.95).applyMatrix4(U.matrixWorld).project(z);let Ft=N.z<1&&N.z>-1&&Math.abs(N.x)<1.05&&Math.abs(N.y)<1.05&&Tt<160;et.tag.style.display=Ft?"":"none",Ft&&(et.tag.style.transform=`translate(${(N.x+1)/2*ot}px, ${(1-N.y)/2*ut}px) translate(-50%, -100%)`,et.tag.style.opacity=Tt<60?1:.6);let Dt=_.peers.get(et.id);if(Dt?.gain){let ee=Tt<3?1:Math.max(0,1-(Tt-3)/($f-3))**1.6,Vt=((et.x-H.x)*k-(et.y-H.y)*St)/Math.max(Tt,.5);Dt.gain.gain.value+=((c.muted.has(et.id)?0:ee)-Dt.gain.gain.value)*dt,Dt.pan.pan.value+=(Math.max(-.85,Math.min(.85,Vt))-Dt.pan.pan.value)*dt;let Rt=new Uint8Array(Dt.level.fftSize);Dt.level.getByteTimeDomainData(Rt);let Ct=0;for(let Ut of Rt)Ct=Math.max(Ct,Math.abs(Ut-128));et.talking+=((Ct>9?1:0)-et.talking)*Math.min(1,V*8)}else et.talking*=.9;et.fig.userData.ring.material.opacity=et.talking,et.tag.classList.toggle("talking",et.talking>.4),et.voice&&rt.push([Tt,et.id])}if(_.on&&c.state==="on"){rt.sort((gt,ct)=>gt[0]-ct[0]);let et=new Set(rt.filter(([gt])=>gt<Cy).slice(0,Py).map(([,gt])=>gt));for(let gt of et)!_.peers.has(gt)&&String(c.me.id)<String(gt)&&J(gt);for(let[gt]of _.peers){let ct=c.members.get(gt);(!ct||!ct.voice||Math.hypot(ct.x-H.x,ct.y-H.y)>$f)&&B(gt)}}},Y=async()=>{if(c.state==="on"||c.state==="joining")return;if(u)return A();if(!cs)return c.state="elsewhere",p();let V=a.host;if(!V)return c.state="off",p();if(!V.signedIn)return c.state="signed-out",p();c.state="ask",p(),c.tries=0,await A(!1)};return o.addEventListener("click",V=>{let U=V.target.closest("[data-act]")?.dataset.act;U==="mt-signin"?bi("signIn").catch(()=>r("Sign-in is not answering")):U==="mt-join"?A(!0):U==="mt-voice"&&(_.on?_.stream?O():X():L())}),o.addEventListener("submit",V=>{V.preventDefault();let U=n("#mt-text");U&&F(U.value)&&(U.value="",U.blur())}),addEventListener("keydown",V=>{t.on&&c.state==="on"&&(V.code==="KeyT"||V.code==="Slash")&&!V.target.closest?.("input, textarea")&&(n("#mt-text")?.focus(),V.preventDefault()),V.code==="Escape"&&V.target.id==="mt-text"&&V.target.blur()}),{tick:j,arrive:Y,leave:T,join:A,say:F,voiceOn:L,voiceOff:X,mute:O,state:c,get count(){return c.members.size}}};var Ds=[{key:"sank",claim:"sank-in-a-day-and-night",name:"It sank",word:"sank",yes:"Land at Plato's date, open sea today.",no:"It did not go under."},{key:"atlantic",claim:"beyond-pillars",name:"Beyond the Pillars",word:"beyond the Pillars",yes:"On the Atlantic side, outside the strait.",no:"Not on the Atlantic, or inside the strait."},{key:"plain",claim:"great-plain",name:"Great plain",word:"great plain",yes:"Level low ground of the size he gives.",no:"No level plain of his size here."},{key:"mountains",claim:"mountains-shelter-north",name:"Mountains north",word:"mountains north",yes:"Higher ground on the north side than the south.",no:"No mountains sheltering it from the north."},{key:"island",claim:"larger-than-libya-and-asia",name:"An island",word:"island",yes:"The land it stood on was an island then.",no:"Part of a continent then, not an island."}],Dy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Ny=i=>{let t=(i??"").split(",").map(e=>e.trim()).filter(Boolean);return t.length>2?`${t[0]}, ${t[t.length-1]}`:t.join(", ")},Xf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,toast:l,setSheet:o,body:h,eyebrow:u,stage:c}=i,{control:f,globe:d}=t,p=d.shared,v=e.worldfit,g=e.cas;if(!v)return null;let m=s("#hunt"),x=s("#reticle"),w={ready:!1,n:0,score:null,bits:null,state:null,on:!1,last:"",claim:null,glow:1},M=H=>g?.claims.find(W=>W.id===H),S=H=>(M(H.claim)?.ref??"").split(";")[0];(async()=>{let H=t.phone?"worldfit-2k.png":"worldfit.png",W=await fetch(globalThis.__WORLDFIT__?.[H]??(globalThis.__ASSETS__||"./")+H);if(!W.ok)throw new Error(`worldfit: HTTP ${W.status}`);let z=await createImageBitmap(await W.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),st=z.width,ot=512,ut=new Uint8Array(st*st),dt=new Uint8Array(st*st),St=new Uint8Array(st*st),rt=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:st,height:ot}):new OffscreenCanvas(st,ot)).getContext("2d",{willReadFrequently:!0});for(let ct=0;ct<st;ct+=ot){rt.clearRect(0,0,st,ot),rt.drawImage(z,0,ct,st,ot,0,0,st,ot);let Mt=rt.getImageData(0,0,st,ot).data;for(let Tt=0,Ft=ct*st;Tt<st*ot;Tt++,Ft++)ut[Ft]=Mt[Tt*4],dt[Ft]=Mt[Tt*4+1],St[Ft]=Mt[Tt*4+2]}z.close?.();let et=new Uint8Array(st*st);for(let ct=0;ct<st;ct++)for(let Mt=0;Mt<st;Mt++){let Tt=0;for(let Ft=-1;Ft<=1;Ft++){let Dt=ct+Ft<0?0:ct+Ft>=st?st-1:ct+Ft;for(let ee=-1;ee<=1;ee++)Tt+=ut[Dt*st+(Mt+ee+st)%st]*(ee||Ft?1:2)}et[ct*st+Mt]=Tt*5}let gt=new Sn(et,st,st,fi,an);gt.minFilter=rn,gt.magFilter=Ae,gt.wrapS=Pi,gt.wrapT=_n,gt.generateMipmaps=!0,gt.needsUpdate=!0,p.tHeat.value=gt,p.uHeatLod.value=st<v.grid.size?-1:0,Object.assign(w,{n:st,bits:dt,state:St,ready:!0}),t.stamp++})().catch(H=>{console.warn(H.message),m.classList.remove("open")});let y=(H,W)=>{if(!w.ready)return null;let z=w.n,st=Wt(Math.floor((H+180)/360*z),0,z-1),ot=Wt(W,-85,85)*mt,ut=Wt(Math.floor((1-Math.log(Math.tan(ot)+1/Math.cos(ot))/Math.PI)/2*z),0,z-1),dt=w.bits[ut*z+st],St=w.state[ut*z+st];return{state:St,bits:dt,score:St===0?0:Dy(dt),clues:Ds.map((k,rt)=>!!(dt&1<<rt))}},T={sank:"sank",atlantic:"Pillars",plain:"plain",mountains:"mountains",island:"island"};m.innerHTML=`<div class="h-main"><b id="h-score"></b><div class="h-clues">${Ds.map((H,W)=>`<span class="h-c" data-j="${W}"><i></i>${r(T[H.key])}</span>`).join("")}</div><button class="btn primary" data-act="h-claim">Claim this spot</button></div>`;let _=()=>{let H=n.hunt&&w.ready&&!i.busy();H!==w.on&&(w.on=H,m.classList.toggle("open",H),x.classList.toggle("open",H),c.classList.toggle("hunting",H),i.sound?.deep(H));let W=n.hunt&&w.ready?H||n.sheet==="claim"||!s("#intro").classList.contains("gone")?w.glow:.3*w.glow:0;if(Math.abs(p.uHeat.value-W)>.004&&(p.uHeat.value+=(W-p.uHeat.value)*.12,t.stamp++),!H)return;x.style.left=`${50+f.shift[0]*50}%`,x.style.top=`${50-f.shift[1]*50}%`;let z=f.lat/mt,st=f.lon/mt,ot=y(st,z),ut=`${ot.state}|${ot.bits}`;if(ut===w.last)return;w.last=ut;let dt=s("#h-score");dt.innerHTML=ot.state===0?"\u2013":`${ot.score}<small>/5</small>`,dt.className=`s${ot.state===2?ot.score:0}`,dt.setAttribute("aria-label",ot.state===0?"Open sea at Plato's date too: nothing here to sink":ot.state===1?`${ot.score} of 5. Dry land then and now: it never sank`:`${ot.score} of 5, on land that has gone under`),x.className=`open s${ot.state===2?ot.score:0}`;for(let St of m.querySelectorAll(".h-c"))St.classList.toggle("on",ot.state!==0&&ot.clues[Number(St.dataset.j)]);i.sound?.read(ot)},B=null,J=(H,W)=>{let z=xn(H*mt,W*mt),st=performance.now(),ot=Wt(f.range/1e3*.75,30,3500);cancelAnimationFrame(B);let ut=()=>{let dt=Wt((performance.now()-st)/1700,0,1);p.uScan.value.set(z[0],z[1],z[2],Math.max(ot*(1-(1-dt)**2.2),.01)),p.uScanA.value=1.1*(1-dt)**1.3,t.stamp++,dt<1?B=requestAnimationFrame(ut):p.uScanA.value=0};ut()},at=H=>{let W=v.totals;return W.by_score.filter(st=>st.score<H).reduce((st,ot)=>st+ot.km2,0)/W.land_that_sank_km2*100},L=(H,W)=>`The hunt for Atlantis \u{1F531} ${H.score}/5
${H.clues.map(z=>z?"\u{1F7E9}":"\u{1F7E5}").join("")}
${Ds.map(z=>z.word).join(" \xB7 ")}
${An(H.lat,H.lon,2)}${H.name?` \xB7 ${H.name}`:""}
${W}`,X=H=>i.shareUrl({hunt:`${H.lat.toFixed(3)},${H.lon.toFixed(3)}`},!0),O={copy:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',x:'<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',save:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>'},N=()=>{let H=w.claim,W=v.places;u.textContent="Landscape match";let z=W.filter(ot=>ot.score<H.score).length,st=H.state===0?"Open sea at Plato's date too. There was no land here to sink.":H.state===1?"Dry land then and now. It never sank, which is the heart of the story.":`Better than ${at(H.score).toFixed(H.score>=4?1:0)}% of all the land that has gone under. Beats ${z} of the ${W.length} famous claims.`;h.innerHTML=`
      <div class="c-hero s${H.state===2?H.score:0}"><b>${H.state===0?"\u2013":`${H.score}<small>/5</small>`}</b><div class="sq">${H.clues.map(ot=>`<i class="${ot?"y":"n"}"></i>`).join("")}</div></div>
      <h2 class="c-name">${r(H.name??An(H.lat,H.lon,2))}</h2>
      <div class="c-sub">${H.name?An(H.lat,H.lon,2):H.state===2?"Sunken land":H.state===1?"Dry land":"Open sea"}</div>
      <p class="c-rank">${r(st)}</p>
      <div class="c-list">${Ds.map((ot,ut)=>`<details class="c-row ${H.clues[ut]?"y":"n"}"><summary><i></i>${r(ot.name)}<small>${r(S(ot))}</small></summary><p>${r(H.state===0?"No land here at that date.":H.clues[ut]?ot.yes:ot.no)}${M(ot.claim)?.quote?` <em class="q">\u201C${r(M(ot.claim).quote)}\u201D</em>`:""}</p></details>`).join("")}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share my claim</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${O.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${O.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${O.save}</button></div>
      <details class="c-more"><summary>More to do here</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${r(L(H,X(H)))}</pre>`},j=async(H,W,z=!1)=>{if(!w.ready)return;let st=y(W,H),ot=v.best.find(ut=>ut.near?.name&&!/^off /.test(ut.near.name)&&Math.abs(ut.lat-H)<1.2&&Math.abs(ut.lon-W)<1.2&&st.state===2);w.claim={lat:H,lon:W,...st,name:ot?ot.near.name:null,named:!!ot},n.legend=n.place=null,i.leaveScene(),o("claim"),h.scrollTop=0,N(),z&&f.flyTo({lon:W*mt,lat:H*mt,range:Wt(f.range,6e4,9e5),tilt:30*mt,heading:0},2.4),setTimeout(()=>{J(W,H),i.sound?.sfx("ping",.8),st.state===2&&st.score>=4&&setTimeout(()=>i.sound?.sfx("reveal",.5),500)},z?2200:60);try{let dt=(await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${H}&lon=${W}`,{signal:AbortSignal.timeout(6e3)}).then(k=>k.json())).features?.[0]?.properties,St=dt&&[dt.name??dt.county??dt.state,dt.country].filter(Boolean).join(", ");St&&w.claim&&w.claim.lat===H&&!w.claim.named&&n.sheet==="claim"&&(w.claim.name=`Near ${St}`,N())}catch{}},Y=()=>{u.textContent="Closest landscape matches";let H=(ut,dt)=>`<button class="prow" data-act="h-go" data-ll="${ut.lat},${ut.lon}"><b class="lb s${ut.top}">${ut.top}/5</b><span class="pn">${r(ut.near?.name?Ny(ut.near.name):An(ut.lat,ut.lon,1))}</span><small>${ut.km2.toLocaleString("en")} km\xB2</small></button>`,W=v.best.filter(ut=>!ut.near_old_ice).slice(0,8),z=v.best.filter(ut=>ut.near_old_ice).slice(0,5),st=v.totals,ot=(st.land_that_sank_km2/1e6).toFixed(1);h.innerHTML=`
      <h2>Best on Earth</h2>
      <p class="lead">${ot} million km\xB2 of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${st.by_score.map(ut=>`<div><b class="lb s${ut.score}">${ut.score}/5</b><i style="width:${Math.max(1.5,ut.km2/st.land_that_sank_km2*100).toFixed(1)}%"></i><small>${ut.km2>=1e6?`${(ut.km2/1e6).toFixed(1)} million km\xB2`:ut.km2>=500?`${Math.round(ut.km2/1e3).toLocaleString("en")} thousand km\xB2`:"none"}</small></div>`).join("")}</div>
      <h3>The best matches</h3>
      ${W.map(H).join("")}
      ${z.length?`<h3>Near the old ice sheets</h3>${z.map(H).join("")}`:""}
      <h3>The famous claims, by the same rules</h3>
      ${v.places.map(ut=>`<button class="prow" data-act="a-place" data-id="${r(ut.id)}"><b class="lb s${ut.score}">${ut.score}/5</b><span class="pn">${r(i.shortName(ut.name))}</span><small>${r(ut.note?"open sea then":ut.clues.map(dt=>Ds.find(St=>St.key===dt).word).join(", ")||"none")}</small></button>`).join("")}
      `},V=()=>{u.textContent="How it's scored";let H=v.rules,W={sank:`The cell was land with the sea ${Math.abs(H.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,atlantic:"The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.",plain:`At least ${Math.round(H.plain.share_needed*100)}% of a ${Math.round(H.plain.long_km)} by ${Math.round(H.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${H.plain.low_ground_max_m_above_today} m above today's sea.`,mountains:`The ground ${H.mountains.band_from_km} to ${H.mountains.band_to_km} km to its north averages at least ${H.mountains.north_mean_at_least_m} m, and at least ${H.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,island:`The piece of land it belonged to then was smaller than ${(H.island.smaller_than_km2/1e6).toFixed(1)} million km\xB2: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`};h.innerHTML=`
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${g?.claims.filter(z=>z.testable).length??27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${Ds.map(z=>`<div class="c-row y"><i></i><span><b>${r(z.name)}</b> <small>${r(S(z))}</small><br>${r(W[z.key])}${M(z.claim)?.quote?`<br><em class="q">\u201C${r(M(z.claim).quote)}\u201D</em>`:""}</span></div>`).join("")}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${v.limits.map(z=>`<li>${r(z)}</li>`).join("")}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`},U=(H,W)=>{let z=w.claim;if(H==="h-claim")j(f.lat/mt,f.lon/mt);else if(H==="h-best")n.legend=n.place=null,i.leaveScene(),o("best"),h.scrollTop=0,Y();else if(H==="h-rules")n.legend=n.place=null,i.leaveScene(),o("rules"),h.scrollTop=0,V();else if(H==="h-story")i.tour?.();else if(H==="h-go"){let[st,ot]=W.dataset.ll.split(",").map(Number);j(st,ot,!0)}else if(H==="h-share")i.shareOut({text:L(z,""),url:X(z),both:L(z,X(z))});else if(H==="h-copy")navigator.clipboard?.writeText(L(z,X(z))).then(()=>l("Copied. Paste it anywhere."),()=>{s("#c-share").hidden=!1,l("Select the text and copy it")});else if(H==="h-x")window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(L(z,X(z)))}`,"_blank","noopener");else if(H==="h-pic")t.snap=st=>{if(!st)return l("Could not take the picture");let ot=document.createElement("a");ot.href=URL.createObjectURL(st),ot.download=`atlantis-hunt-${z.lat.toFixed(2)}_${z.lon.toFixed(2)}.jpg`,ot.click(),setTimeout(()=>URL.revokeObjectURL(ot.href),4e3)},t.stamp++;else if(H==="h-fit")i.fitAt(z.lat,z.lon);else if(H==="h-city")i.standCity(z.lat,z.lon);else if(H==="h-known")i.checkKnown(z.lat,z.lon,20);else return!1;return!0};return m.addEventListener("click",H=>{let W=H.target.closest("[data-act]");W&&U(W.dataset.act,W)}),{fit:y,claim:j,scan:J,click:U,tick:_,drawBest:Y,state:w,CLUES:Ds,get ready(){return w.ready},setGlow:H=>{w.glow=H}}};var Yf={on:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',off:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>'},$l=2.5,Fy=.006,Uy=.04,ky=.14,Zf=i=>Float32Array.from({length:48},(t,e)=>i(e/47*Math.PI/2)),Oy=Zf(Math.sin),By=Zf(Math.cos),jf=i=>{let{data:t,$:e}=i,n=t.audio,s=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n||!s)return null;let r=e("#b-sound"),a={on:!0,ac:null,master:null,buffers:new Map,voice:null,want:new Map,loops:new Map,last:{score:-1,lit:-1,lockAt:0,tickAt:0,stepAt:0},log:[]},l=(L,X={})=>{globalThis.__AUDIOLOG__&&a.log.push({t:performance.now(),kind:L,...X})},o=L=>globalThis.__AUDIO__?.[L]??`${globalThis.__ASSETS__||"./"}audio/${L}`,h=async L=>{let X=o(L);if(X.startsWith("data:")){let N=atob(X.slice(X.indexOf(",")+1)),j=new Uint8Array(N.length);for(let Y=0;Y<N.length;Y++)j[Y]=N.charCodeAt(Y);return j.buffer}let O=await fetch(X);if(!O.ok)throw new Error(`${L}: ${O.status}`);return O.arrayBuffer()},u=()=>{if(a.ac)return a.ac;let L=a.ac=new s({latencyHint:"interactive"});a.master=L.createGain();let X=L.createDynamicsCompressor();return X.threshold.value=-9,X.knee.value=6,X.ratio.value=14,X.attack.value=.003,X.release.value=.22,a.master.connect(X).connect(L.destination),L},c=()=>{let L=u();return L.state!=="running"&&L.resume().then(y).catch(()=>{}),L.state==="running"},f=L=>(a.buffers.has(L)||a.buffers.set(L,h(L).then(X=>u().decodeAudioData(X)).catch(()=>null)),a.buffers.get(L)),d=(L=[])=>{for(let X of L){let O=n.narration?.[Th(X)];O&&f(O.file)}},p=(L,{volume:X=1,offset:O=0,at:N=0,fadeIn:j=Fy,out:Y=a.master}={})=>{let V=a.ac,U=V.createBufferSource(),H=V.createGain();U.buffer=L;let W=Math.max(V.currentTime+.005,N),z=Math.max(.05,L.duration-O),st=Math.min(j,z/3),ot=Math.min(Uy,z/3);return H.gain.setValueAtTime(0,W),H.gain.linearRampToValueAtTime(X,W+st),H.gain.setValueAtTime(X,W+z-ot),H.gain.linearRampToValueAtTime(0,W+z),U.connect(H).connect(Y),U.start(W,O),{node:U,gain:H,t0:W,dur:z,offset:O}},v=(L,X=ky)=>{let O=a.ac,N=O.currentTime;if(!(N>=L.t0+L.dur)){L.gain.gain.cancelScheduledValues(N),L.gain.gain.setValueAtTime(L.gain.gain.value,N),L.gain.gain.linearRampToValueAtTime(0,N+X);try{L.node.stop(N+X+.03)}catch{}}},g=L=>{m();let X=n.narration?.[Th(L)];if(!X)return 0;if(a.on){let O=a.voice={clip:X,at:0,playing:null,paused:!1};f(X.file).then(N=>{a.voice===O&&!O.paused&&N&&a.on&&c()&&(O.playing=p(N),l("say",{file:X.file,volume:1}))})}return X.seconds},m=()=>{let L=a.voice;a.voice=null,L?.playing&&(v(L.playing),l("hush",{file:L.clip.file}))},x=()=>{let L=a.voice;!L||L.paused||(L.paused=!0,L.playing&&(L.at=Math.min(L.clip.seconds,L.playing.offset+Math.max(0,a.ac.currentTime-L.playing.t0)),v(L.playing,.09),L.playing=null,l("hush",{file:L.clip.file})))},w=()=>{let L=a.voice;if(!L||!L.paused)return;L.paused=!1;let X=Math.max(0,L.at-.25);a.on&&X<L.clip.seconds-.1&&f(L.clip.file).then(O=>{a.voice===L&&!L.paused&&O&&c()&&(L.playing=p(O,{offset:X,fadeIn:.06}),l("say",{file:L.clip.file,volume:1,offset:X}))})},M=()=>{let L=a.voice,X=L?.playing;return{clip:L?.clip.file??null,paused:!!L?.paused,playing:!!X&&a.ac.currentTime<X.t0+X.dur,at:X?X.offset+Math.max(0,a.ac.currentTime-X.t0):L?.at??0}},S=(L,X=.6)=>{let O=n.sfx?.[L];!O||!a.on||(l("sfx",{file:O.file,volume:X}),f(O.file).then(N=>{N&&a.on&&c()&&p(N,{volume:X})}))},A=(L,X,O=.25)=>{if(!n.sfx?.[L])return;let N=a.want.get(L);X?N!==O&&(a.want.set(L,O),y()):N!==void 0&&(a.want.delete(L),y())};function y(){let L=a.ac;for(let[X,O]of a.loops){let N=a.on?a.want.get(X):void 0;if(N===void 0){if(a.loops.delete(X),l("loop-off",{file:O.file}),O.gain){let j=L.currentTime;O.gain.gain.cancelScheduledValues(j),O.gain.gain.setValueAtTime(O.gain.gain.value,j),O.gain.gain.linearRampToValueAtTime(0,j+1.5);for(let Y of O.parts)try{Y.node.stop(j+1.6)}catch{}}}else N!==O.volume&&O.gain&&(O.volume=N,O.gain.gain.setTargetAtTime(N,L.currentTime,.4))}if(a.on){for(let[X,O]of a.want)if(!a.loops.has(X)){let N={name:X,file:n.sfx[X].file,volume:O,gain:null,parts:[],next:0,buffer:null};a.loops.set(X,N),l("loop-on",{file:N.file,volume:O,cross:$l}),f(N.file).then(j=>{N.buffer=j,y()})}}if(a.loops.size&&c())for(let X of a.loops.values()){if(!X.buffer)continue;let O=L.currentTime,N=X.buffer.duration,j=N-$l;for(X.gain||(X.gain=L.createGain(),X.gain.gain.setValueAtTime(0,O),X.gain.gain.linearRampToValueAtTime(X.volume,O+1.2),X.gain.connect(a.master),X.next=O+.02);X.next<O+1.2;){let Y=!X.parts.length,V=L.createBufferSource(),U=L.createGain(),H=X.next;V.buffer=X.buffer,U.gain.setValueAtTime(Y?1:0,H),Y||U.gain.setValueCurveAtTime(Oy,H,$l),U.gain.setValueCurveAtTime(By,H+j,$l-.005),V.connect(U).connect(X.gain),V.start(H),X.parts.push({node:V,end:H+N}),X.next=H+j}X.parts=X.parts.filter(Y=>Y.end>O-1)}}setInterval(()=>{a.loops.size&&y()},400),addEventListener("pointerdown",()=>{a.ac&&a.ac.state!=="running"&&c()},{capture:!0,passive:!0});let T=L=>{A("bed",L,.1),L&&(A("deep",!1),A("city",!1))},F=L=>A("deep",L&&!a.want.has("bed")&&!a.want.has("city"),.32),_=L=>{A("city",L==="city",.3),A("bed",L==="hall",.07),L&&A("deep",!1)},B=L=>{let X=performance.now();X-a.last.stepAt<(L?300:420)||(a.last.stepAt=X,S("step",.16+Math.random()*.05))},J=L=>{let X=performance.now(),O=L.state===0?0:L.clues.filter(Boolean).length,N=L.state===2&&L.score>=4;O>a.last.lit&&X-a.last.tickAt>140&&(S("tick",.3),a.last.tickAt=X),N&&a.last.score<4&&X-a.last.lockAt>1500&&(S("lock",.4),a.last.lockAt=X),a.last.lit=O,a.last.score=N?L.score:0},at=()=>{r.innerHTML=a.on?Yf.on:Yf.off,r.setAttribute("aria-label",a.on?"Turn sound off":"Turn sound on"),r.setAttribute("aria-pressed",String(a.on))};return r.hidden=!1,r.addEventListener("click",()=>{a.on=!a.on,a.on||m(),y(),at(),i.toast(a.on?"Sound on":"Sound off",1200)}),at(),{say:g,hush:m,pause:x,resume:w,prime:d,voiceState:M,sfx:S,loop:A,bed:T,deep:F,air:_,step:B,read:J,state:a,get on(){return a.on},get master(){return u(),a.master},get context(){return u()}}};var ql={lat:35.3,lon:-9.9,bearing:180},Kt=(i,t=document)=>t.querySelector(i),ue=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ba=(i,t)=>/^https?:\/\//.test(i??"")?`<a href="${ue(i)}" target="_blank" rel="noopener">${ue(t)}</a>`:ue(t),hs=i=>`${i<0?"\u2212":i>0?"+":""}${Math.abs(Math.round(i)).toLocaleString("en")} m`,zy=[{m:0,label:"Today"},{m:-50,label:"9600 BCE",note:"Plato's date for Atlantis; sources give 43 to 58 m below today"},{m:-95,label:"12,500 BCE",note:"before the fastest melt; our own estimate"},{m:-125,label:"19,000 BCE",note:"the low point of the last ice age; estimates run from 116 to 134 m below today"}];var Hy={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Gy=["atlantis","el dorado","troy","titanic","doggerland","lost city of z","amber room","oak island","san jose","endurance","genghis khan","cleopatra","noah","ark of the covenant","valeriana","angkor","machu picchu","ubar","iram","lemuria","ciudad blanca","yonaguni","thonis","upano","roanoke","holy grail","franklin","erebus","alexander","mu","sundaland","beringia","rungholt","paititi","yamashita","cahokia","great zimbabwe","nazca"],Jf=(i,t)=>{let{control:e,globe:n}=i,s=n.shared,r=Kt("#stage"),a=Kt("#view"),l=Kt("#pins"),o=Kt("#sheet"),h=Kt("#body"),u=Kt("#eyebrow"),c={kind:null,legend:null,place:null,sheet:null,mode:"content",overlay:null,overlayMix:1,host:null,known:null},f=t.legends,d=null,p=null,v=null,g=null,m=null,x=null,w=null,M=f.find(b=>b.id==="atlantis")??null;M&&(c.kind="atlantis");for(let b of f){let P=Ps(b.name),D=Gy.findIndex(C=>P.includes(C));b.weight=(D>=0?200-D:0)+Math.min(b.places.length,8)*3+(b.status==="found"?4:0)}let S=()=>{if(c.mode==="viewport")r.style.height="100dvh";else{let b=Math.round(Wt(r.clientWidth*1.16,560,740));r.style.height=`${b}px`,Cf(b)}e.wheelNeedsKey=c.mode!=="viewport",Y()};Rf(b=>{c.mode=b,S()}),addEventListener("resize",S),addEventListener("load",S);let A,y=(b,P=2600)=>{let D=Kt("#toast");D.textContent=b,D.classList.add("open"),clearTimeout(A),A=setTimeout(()=>D.classList.remove("open"),P)},T=new Map,F=(b,P)=>{let D=T.get(P);return D||(D=document.createElement("button"),D.className=`pin s-${b.status}`,D.innerHTML="<i></i><span></span>",D.addEventListener("click",C=>{C.stopPropagation(),z(b,P,!0)}),l.appendChild(D),T.set(P,D),D._shown=!1),D},_=(b,P,D,C=0)=>{let Z=xn(b*mt,P*mt,_.d),tt=e.pos,yt=Math.hypot(tt[0],tt[1],tt[2]);if((Z[0]*tt[0]+Z[1]*tt[1]+Z[2]*tt[2])/yt<(ne-2e3)/yt)return!1;let Pt=s.uExag.value,zt=s.uWater.value>.5?s.uSea.value:-1e5,Ht=Math.max(n.heightAt(b*mt,P*mt)??0,zt)*Pt,At=ne+Ht+C,It=Z[0]*At-tt[0],qt=Z[1]*At-tt[1],bt=Z[2]*At-tt[2],ae=e.basis,le=It*ae.fwd[0]+qt*ae.fwd[1]+bt*ae.fwd[2];if(le<=i.camera.near)return!1;let De=Math.tan(e.fovY/2),Rn=De*i.camera.aspect;return D[0]=(((It*ae.right[0]+qt*ae.right[1]+bt*ae.right[2])/le/Rn+e.shift[0])*.5+.5)*r.clientWidth,D[1]=(.5-((It*ae.up[0]+qt*ae.up[1]+bt*ae.up[2])/le/De+e.shift[1])*.5)*r.clientHeight,!0};_.d=[0,0,0];let B=new Set,J=()=>{let b=r.clientWidth,P=r.clientHeight,D=e.range<15e5,C=[],Z=[0,0],tt=c.kind==="atlantis";for(let bt of f){let ae=bt===c.legend||tt&&bt===M;if(!(!ae&&(tt||c.kind&&bt.kind!==c.kind)))for(let le of ae||D?bt.places:[bt.main])le===c.place&&(d?.a.scene&&e.range<d.a.scene.radius_km*9e3||i.evidence.extras.length)||_(le.lon,le.lat,Z)&&(Z[0]<-20||Z[1]<-20||Z[0]>b+20||Z[1]>P+20||C.push({legend:bt,place:le,x:Z[0],y:Z[1],w:(ae?1e3:0)+(le===c.place?500:0)+bt.weight+(le===bt.main?5:0)+(tt?60-10*(Hy[le.standing]??5):0)}))}C.sort((bt,ae)=>ae.w-bt.w);let yt=b<500?9:b<900?16:30,wt=[],Pt=new Set,zt=0,Ht=0,At=!Kt("#intro").classList.contains("gone"),It=96,qt=c.sheet&&b<760?P*.38:At?P-(b<760?310:300):P;for(let bt of C){let le=(bt.legend===c.legend||tt&&bt.legend===M)&&bt.legend.places.length>1?bt.place.name:bt.legend.name;le.length>26&&(le=`${le.slice(0,24).trimEnd()}\u2026`);let De=16+le.length*6.6,Rn=18,Cn=[bt.x-6,bt.y-Rn/2,bt.x+De,bt.y+Rn/2],Mn=!(c.hunt&&!c.legend&&bt.place!==c.place)&&zt<yt&&bt.y>It&&bt.y<qt-10&&Cn[2]<b-4;if(Mn){for(let Ee of wt)if(Cn[0]<Ee[2]&&Cn[2]>Ee[0]&&Cn[1]<Ee[3]&&Cn[3]>Ee[1]){Mn=!1;break}}if(!Mn&&(Ht>220||bt.y>qt))continue;Mn?(wt.push(Cn),zt++):Ht++;let ke=F(bt.legend,bt.place);ke._text!==le&&(ke.lastChild.textContent=le,ke._text=le,ke.setAttribute("aria-label",bt.place===bt.legend.main?bt.legend.name:`${bt.place.name} (${bt.legend.name})`)),ke.style.transform=`translate3d(${bt.x.toFixed(1)}px,${bt.y.toFixed(1)}px,0)`;let us=`pin ${tt&&bt.legend===M?`p-${bt.place.standing}${(bt.place.tests??[]).length?"":" hollow"}${d?.scenes.has(bt.place.id)?" scene":""}`:`s-${bt.legend.status}`}${Mn?"":" dot"}${bt.place===c.place?" on":""}${bt.place===p?" pulse":""}`;ke.className!==us&&(ke.className=us),ke.style.zIndex=bt.place===c.place?3:Mn?2:1,ke._shown||(ke.style.display="",ke._shown=!0),Pt.add(ke)}for(let bt of B)Pt.has(bt)||(bt.style.display="none",bt._shown=!1);B.clear();for(let bt of Pt)B.add(bt)},at=Kt("#kinds"),L=()=>{let b=_h.filter(([P])=>f.some(D=>D.kind===P));r.classList.toggle("others",c.kind!=="atlantis"),at.innerHTML=(d?d.drawCase():M?`<button class="chip glass${c.kind==="atlantis"?" on":""}" data-kind="atlantis">Atlantis \xB7 ${M.places.length} places</button>`:"")+(d&&c.kind==="atlantis"?"":`<button class="chip glass${c.kind?"":" on"}" data-kind="">${M?`Other legends ${f.length-1}`:`All ${f.length}`}</button>`)+(c.kind==="atlantis"?"":b.map(([P,D])=>`<button class="chip glass${c.kind===P?" on":""}" data-kind="${P}">${ue(D)}</button>`).join(""))},X=Kt("#menu"),O=Kt("#b-menu"),N=b=>{X.classList.toggle("open",b),O.setAttribute("aria-expanded",String(b)),O.classList.toggle("on",b)};O.addEventListener("click",b=>{b.stopPropagation(),N(!X.classList.contains("open"))}),X.addEventListener("click",b=>{let P=b.target.closest("button");if(!P)return;N(!1),Kt("#intro").classList.add("gone"),e.idle=!1;let D=P.dataset.menu;D==="city"?ft.enterCity("gate"):D==="hall"?ft.enterCity("hall"):D==="hunt"?(d?.leaveScene(),c.legend=c.place=null,c.kind!=="atlantis"&&M&&(c.kind="atlantis",L()),ft.openGlobe()):D==="story"?R.start():D==="work"?g.show("work"):D==="best"?(ft.leaveWalk(),w?.click("h-best")):D==="claims"?(ft.leaveWalk(),z(M,null,!1)):D==="board"?(ft.leaveWalk(),d?.openBoard()):D==="rules"?w?.click("h-rules"):D==="credits"&&Kt("#credit").click()}),at.addEventListener("click",b=>{let P=b.target.closest("[data-kind]");if(P){if(P.dataset.board&&c.kind==="atlantis")return d.openBoard();if(P.dataset.list&&c.kind==="atlantis")return d.openList();c.kind=P.dataset.kind||null,c.kind!=="atlantis"&&d?.a.scene&&(d.leaveScene(),V()),c.kind==="atlantis"&&c.legend&&c.legend!==M&&V(),L()}});let j=b=>{c.sheet=b,o.dataset.kind=b??"",o.classList.toggle("open",!!b),r.classList.toggle("sheet-open",!!b);for(let[P,D]of[["b-layers","layers"],["b-sea","sea"],["b-known","known"]])Kt(`#${P}`).classList.toggle("on",b===D);r.dataset.sheet=b??"",b&&Kt("#intro").classList.add("gone"),b||(h.innerHTML=""),h.scrollTop=0,Y()};function Y(){let b=r.clientWidth;e.goalShift=c.sheet?b<760?[0,c.sheet==="legend"||c.sheet==="fit"?.42:.56]:[416/b,0]:[0,0]}let V=()=>{j(null),c.legend&&!d?.a.scene&&(c.legend=c.place=null)},U=b=>{let P=Wt((b.precision_km??10)*1e3*7,12e3,25e5);return{lon:b.lon*mt,lat:b.lat*mt,range:P,tilt:P<2e5?38*mt:0,heading:0}},H=(b,P,D,C)=>P?.length?`<p style="margin-bottom:4px"><b>${b}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${P.map(Z=>`<span class="tag t-${D}">${ue(Z.replaceAll("-"," "))}</span>`).join("")}</div>`:"",W=()=>{let b=c.legend;u.innerHTML=`${ue(bh[b.kind]??b.kind)} <span class="tag s-${b.status}">${ue(Mf[b.status]??b.status)}</span>`;let P=b.places.map((C,Z)=>`
      <div class="place${C===c.place?" on":""}" data-i="${Z}">
        <button data-act="place" data-i="${Z}">
          <span class="name">${ue(C.name)}<small>${ue(kl[C.role]??C.role??"")}</small></span>
          <span class="tag t-${C.standing}">${ue(Is[C.standing]??C.standing??"")}</span>
        </button>
        <div class="more">
          ${C.claim?`<p>${ue(C.claim)}</p>`:""}
          ${C.against?`<p><b>Against:</b> ${ue(C.against)}</p>`:""}
          ${C.proposed_by?.length?`<p style="font-size:12.5px">Proposed by ${ue(C.proposed_by.slice(0,3).map(tt=>`${tt.who}${tt.year?` (${tt.year})`:""}`).join(", "))}${C.event_date?`. Date it needs: ${ue(C.event_date)}`:""}</p>`:""}
          ${H("Said to fit Plato on",C.fits,"confirmed",b)}${H("Breaks Plato on",C.conflicts,"rejected",b)}
          ${(C.tests??[]).map(tt=>`<p><b>Tested:</b> ${ue(tt.what)}${tt.who?` (${ue(tt.who)}${tt.year?`, ${tt.year}`:""})`:""}. ${ue(tt.result)} ${tt.url?ba(tt.url,"Source"):""}</p>`).join("")}
          <p style="font-size:12.5px;color:var(--faint)">${An(C.lat,C.lon,3)}${C.precision_km?`, give or take ${C.precision_km>=100?Math.round(C.precision_km):C.precision_km} km`:""}${C.underwater?", under water":""}</p>
          ${(C.sources??[]).map(tt=>`<a class="src" href="${ue(tt.url)}" target="_blank" rel="noopener">${ue(tt.title??tt.url)}</a>`).join("")}
          <div class="row">${b===M?`<button class="btn primary" data-act="city" data-i="${Z}">Stand Plato's city here, to scale</button>`:""}<button class="btn" data-act="known-here" data-i="${Z}">What's already recorded here?</button></div>
        </div>
      </div>`).join(""),D=Number.isFinite(b.sea_level_m)&&b.sea_level_m!==0;h.innerHTML=`
      <h2>${ue(b.name)}</h2>
      ${b.when?`<div class="when">${ue(b.when)}</div>`:""}
      <p>${ue(b.summary)}</p>
      ${b.look_for?`<div class="look"><b>What to look for</b> ${ue(b.look_for)}</div>`:""}
      <div class="row" style="margin-top:0">
        ${D?`<button class="btn primary" data-act="sea-to" data-m="${b.sea_level_m}">Set the sea to ${hs(b.sea_level_m)}</button>`:""}
        <button class="btn" data-act="share">Share this view</button>
        ${cs?'<button class="btn" data-act="post">Post what you see</button>':""}
      </div>
      <h3>${b.places.length===1?"Where":`Where people have looked \xB7 ${b.places.length}`}</h3>
      ${P}
      ${b.origin?.url||b.origin?.text?`<p class="note">Where the story comes from: ${ba(b.origin.url,b.origin.text??"source")}</p>`:""}`},z=(b,P,D)=>{if(b===M&&d)return c.kind!=="atlantis"&&(c.kind="atlantis",L()),Kt("#q").blur(),P?d.openPlace(P,D):d.openList();d?.leaveScene(),c.kind==="atlantis"&&b!==M&&(c.kind=null,L()),c.legend=b,c.place=P??b.main,j("legend"),W(),D&&e.flyTo(U(c.place)),Kt("#q").blur();let C=Kt(".place.on",h);C&&P&&C.scrollIntoView({block:"nearest"})},st=()=>{let b=Kt("#seatag"),P=s.uSea.value,D=s.uWater.value<.5,C=c.overlay,Z=[];if(D?Z.push("Oceans drained: <b>bare sea floor</b>"):Math.abs(P)>=1&&Z.push(`Sea level <b>${hs(P)}</b>`),C){let yt=40075016*Math.cos(e.lat)/2**C.form.layer.minZoom/290*r.clientHeight*1.5;Z.push(et(C)?e.range>yt?`Zoom in to see <b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b> has no data here`)}d?.a.scene&&c.sheet!=="legend"&&c.sheet!=="fit"&&Z.push(`<b>${ue(c.place?.name??"")}</b> \xB7 <button class="linkish" data-act="scene-open">open its card</button> \xB7 <button class="linkish" data-act="scene-off">leave</button>`),x?.sync();let tt=Z.join(" \xB7 ");b._html!==tt&&(b.innerHTML=tt,b._html=tt,b.classList.toggle("open",!!tt))},ot=(b,P)=>{s.uSea.value=Wt(b,-11e3,9e3),P!==void 0&&(s.uWater.value=P?0:1),n.fitCaps(),st()},ut=()=>{u.textContent="Sea level";let b=s.uSea.value,P=s.uWater.value<.5;h.innerHTML=`
      <div class="big" id="sea-big">${hs(b)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${Wt(b,-150,70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${zy.map(D=>`<button class="chip${Math.abs(D.m-b)<.5&&!P?" on":""}" data-act="sea-to" data-m="${D.m}">${ue(D.label)} ${D.m?hs(D.m):""}</button>`).join("")}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${P?"checked":""}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `},dt=(b,P,D=180,C=!0)=>{i.city.place({lat:b,lon:P,bearing:D}),i.stamp++,C&&e.flyTo(i.city.view(),4.5),j(null),st()},St=()=>{d?.a.scene||(c.legend=c.place=null),j("city"),u.textContent="Plato's city, rebuilt";let b=t.reconstruction,P=D=>`<div class="known"><span>${ue(D.what)}</span><small>${ue(D.ref??"")}</small></div>`;h.innerHTML=`
      <p>This is the city Plato describes in the Critias, built to his measurements at ${i.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${b?`<h3>From the text \xB7 ${b.from_text.length}</h3>${b.from_text.map(P).join("")}<h3>Our choices, not in the text \xB7 ${b.choices.length}</h3>${b.choices.map(P).join("")}`:""}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`};Kt("#seatag").addEventListener("click",b=>{let P=b.target.closest("[data-act]")?.dataset.act;P==="city-off"&&(i.city.remove(),i.stamp++,st()),P==="city-notes"&&St(),P==="scene-open"&&c.place&&d.openPlace(c.place,!1),P==="scene-off"&&(d.leaveScene(),c.legend=c.place=null,st())});let k=[];for(let b of t.sources){if(b.license?.share_ok!==!0)continue;let P=[],D=wh(b);D&&P.push({id:"",name:"Standard",layer:D});for(let C of b.access?.variants??[]){if(/stretch/i.test(`${C.id} ${C.name??""}`))continue;let Z=wh(b,C);Z&&P.push({id:C.id,name:C.name??C.id,layer:Z})}P.length&&k.push({s:b,forms:P,id:b.id})}let rt=[["lidar","Lidar relief"],["elevation","Terrain"],["seafloor","Sea floor"],["geophysics","Gravity, magnetics, geology"],["imagery","Satellite and air photos"],["radar","Radar"],["historic","Old maps and photos"],["catalog","Where surveys exist"]],et=b=>{let P=b.s.coverage?.bbox;if(!P)return!0;let D=e.lat/mt,C=e.lon/mt;return C>=P[0]&&C<=P[2]&&D>=P[1]&&D<=P[3]},gt=b=>{let P=b.s.coverage?.bbox;return!P||P[2]-P[0]>300&&P[3]-P[1]>120},ct=(b,P)=>{let D=b?b.forms.find(C=>C.id===(P??""))??b.forms[0]:null;c.overlay=b?{...b,form:D}:null,n.setLayer("overlay",D?D.layer:null),s.uOverMode.value=D&&D.layer.asIs?1:0,s.uOverMix.value=c.overlayMix,n.maxZ=D?Math.max(17,Math.min(D.layer.maxZoom+1,19)):17},Mt=()=>{u.textContent="Readings and view";let b=s.uLens.value,P=yt=>{let wt=c.overlay?.id===yt.id,Pt=et(yt),zt=yt.s.resolution_m?` \xB7 ${yt.s.resolution_m>=1e3?`${yt.s.resolution_m/1e3} km`:`${yt.s.resolution_m} m`}`:"";return`<button class="layer${wt?" on":""}" data-act="overlay" data-id="${ue(yt.id)}"><span class="radio"></span><span class="t"><b>${ue(yt.s.name)}</b><small>${ue(yt.s.coverage?.note??"")}${zt}</small></span></button>`+(wt?`<div class="slide" style="margin:2px 10px 8px 36px">
            ${yt.forms.length>1?`<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${yt.forms.map(Ht=>`<button class="chip${c.overlay.form===Ht?" on":""}" data-act="overlay-form" data-form="${ue(Ht.id)}">${ue(Ht.name.replace(/\s*\(.*\)$/,""))}</button>`).join("")}</div>`:""}
            <label for="over-mix">Strength</label><output>${Math.round(c.overlayMix*100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${c.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${Pt?"":'<button class="btn" data-act="overlay-go">Go where it has data</button>'}${yt.s.docs?`<a class="btn" href="${ue(yt.s.docs)}" target="_blank" rel="noopener">About this source</a>`:""}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${ue(yt.s.what??"")} ${yt.s.license?.name?`Licence: ${ba(yt.s.license.url,yt.s.license.name)}.`:""} ${ue(yt.s.license?.attribution??"")}</p></div>`:"")},D=yt=>rt.map(([wt,Pt])=>{let zt=yt.filter(Ht=>Ht.s.group===wt);return zt.length?`<h3>${ue(Pt)}</h3>${zt.map(P).join("")}`:""}).join(""),C=k.filter(yt=>et(yt)&&!gt(yt)),Z=k.filter(gt),tt=k.filter(yt=>!et(yt)&&!gt(yt));h.innerHTML=`
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${b===0?"on":""}">Satellite</button><button data-act="lens" data-v="1" class="${b===1?"on":""}">Bare earth</button><button data-act="lens" data-v="2" class="${b===2?"on":""}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${s.uExag.value.toFixed(1)}\xD7</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${s.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${Tt(i.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${i.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(i.sun.altitude)}\xB0</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${i.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${s.uShadows.value>.5?"checked":""}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${s.uContours.value>.5?"checked":""}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${s.uNightOn.value>.5?"checked":""}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${C.length?D(C):""}
      ${Z.length?`<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${D(Z)}`:""}
      ${tt.length?`<details style="margin-top:18px"${c.overlay&&tt.some(yt=>yt.id===c.overlay.id)?" open":""}><summary style="cursor:pointer;font-weight:600">Surveys of other places \xB7 ${tt.length}</summary>${D(tt)}</details>`:""}
      `},Tt=b=>["N","NE","E","SE","S","SW","W","NW"][Math.round(b/45)%8]+` ${Math.round(b)}\xB0`,Ft=/archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i,Dt=()=>{u.textContent="Already recorded here?";let b=c.known;if(!b){h.innerHTML="<p>Before you call something a discovery, check what is already on record.</p>";return}let P=`<p style="color:var(--dim)">Within <b style="color:var(--ink)">${b.radius} km</b> of ${An(b.lat,b.lon,3)}</p>`;if(b.state==="loading"&&!b.rows.length){h.innerHTML=`${P}<p class="note">Asking Wikidata and OpenStreetMap\u2026</p>`;return}let D=tt=>`<div class="known"><span>${tt.url?ba(tt.url,tt.name):ue(tt.name)} ${tt.type?`<em>\xB7 ${ue(tt.type)}</em>`:""}</span><small>${tt.km<1?`${Math.round(tt.km*1e3)} m`:`${tt.km.toFixed(tt.km<10?1:0)} km`}</small></div>`,C=b.rows.filter(tt=>tt.site),Z=b.rows.filter(tt=>!tt.site);h.innerHTML=`${P}
      ${C.length?`<h3>Sites and monuments \xB7 ${C.length}</h3>${C.map(D).join("")}`:"<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>"}
      ${Z.length?`<h3>Other named places \xB7 ${Z.length}</h3>${Z.slice(0,25).map(D).join("")}`:""}
      ${b.state==="loading"?'<p class="note">Still waiting for OpenStreetMap, which can take half a minute\u2026</p>':""}
      ${b.errors.length?`<p class="note">Could not reach: ${ue(b.errors.join(", "))}.</p>`:""}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(b.radius,8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`},ee=async(b,P,D)=>{let C=Math.round(Wt(D,2,60)),Z=c.known={lat:b,lon:P,radius:C,state:"loading",rows:[],errors:[]};j("known"),Dt();let tt=(zt,Ht)=>pr(P*mt,b*mt,Ht*mt,zt*mt)*ne/1e3,yt=(async()=>{let zt=`SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${P} ${b})"^^geo:wktLiteral; wikibase:radius "${C}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`,Ht=()=>fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(zt)}`,{headers:{Accept:"application/sparql-results+json"},signal:AbortSignal.timeout(25e3)}),At=await Ht().catch(()=>null);if(At?.ok||(await new Promise(It=>setTimeout(It,1500)),At=await Ht()),!At.ok)throw new Error("Wikidata");for(let It of(await At.json()).results.bindings){let qt=/Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(It.coord.value);!qt||/^Q\d+$/.test(It.itemLabel.value)||Z.rows.push({name:It.itemLabel.value,type:It.inst?.value??"",url:It.item.value.replace("http://","https://"),km:tt(Number(qt[2]),Number(qt[1])),site:Ft.test(It.inst?.value??"")})}})().catch(()=>Z.errors.push("Wikidata")),wt=(async()=>{let zt=`[out:json][timeout:12];(nwr["historic"](around:${Math.min(C,8)*1e3},${b},${P}););out center tags 600;`,Ht=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:`data=${encodeURIComponent(zt)}`,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(4e4)});if(!Ht.ok)throw new Error("OpenStreetMap");for(let At of(await Ht.json()).elements){let It=At.lat??At.center?.lat,qt=At.lon??At.center?.lon,bt=At.tags??{};It==null||!bt.name||["memorial","wayside_cross","wayside_shrine","boundary_stone","milestone"].includes(bt.historic)||Z.rows.push({name:bt.name,type:[bt.historic,bt.site_type].filter(Boolean).join(", ").replaceAll("_"," "),url:`https://www.openstreetmap.org/${At.type}/${At.id}`,km:tt(It,qt),site:!0})}})().catch(()=>Z.errors.push("OpenStreetMap")),Pt=()=>{if(c.known!==Z)return;let zt=new Map;for(let Ht of Z.rows.sort((At,It)=>At.km-It.km)){let At=Ps(Ht.name);(!zt.has(At)||Ht.site&&!zt.get(At).site)&&zt.set(At,Ht)}if(Z.rows=[...zt.values()].sort((Ht,At)=>Ht.km-At.km),c.sheet==="known"){let Ht=h.scrollTop;Dt(),h.scrollTop=Ht}};yt.then(Pt),await Promise.all([yt,wt]),Z.state="done",Pt()},Vt=()=>{let b=e.state(),P={ll:`${b.lat.toFixed(5)},${b.lon.toFixed(5)}`,r:Math.round(b.range)};return Math.abs(b.heading)>.5&&(P.hd=Math.round(b.heading)),b.tilt>.5&&(P.t=Math.round(b.tilt)),Math.abs(s.uSea.value)>=1&&(P.sea=Math.round(s.uSea.value)),s.uWater.value<.5&&(P.dry=1),s.uLens.value&&(P.lens=s.uLens.value),s.uExag.value!==1&&(P.x=s.uExag.value),c.legend&&(P.l=c.legend.id),c.legend&&c.place&&(c.place!==c.legend.main||c.legend===M)&&(P.p=c.place.id),d?.a.scene&&(d.a.mode!=="all"&&d.a.step<0&&(P.m=d.a.mode),d.a.step>=0&&(P.s=d.a.step+1)),i.city.active&&(P.city=`${i.city.site.lat.toFixed(4)},${i.city.site.lon.toFixed(4)},${i.city.params.seaBearing}`),c.overlay&&(P.o=c.overlay.form.id?`${c.overlay.id}.${c.overlay.form.id}`:c.overlay.id),P},Rt=(b,P)=>{let D=P?{...b}:{...Vt(),...b};if(c.host?.community)return`https://abstracts.co/a/${c.host.community}?${Object.entries(D).map(([Z,tt])=>`a_${Z}=${encodeURIComponent(tt)}`).join("&")}`;let C=new URL(location.href);return C.search=new URLSearchParams(D).toString(),C.toString()},Ct=async({text:b,url:P,both:D})=>{try{if(c.host){let C=await bi("share",{url:P,text:b});y(C?.shared===!1?"Not shared":"Ready to share");return}if(navigator.share&&matchMedia("(hover: none)").matches){await navigator.share({text:D??`${b}
${P}`});return}await navigator.clipboard.writeText(D??`${b}
${P}`),y("Copied. Paste it anywhere.")}catch(C){if(C?.code==="cancelled"||C?.name==="AbortError")return;prompt("Copy this",D??`${b}
${P}`)}},Ut=async()=>{let b=Rt(),P=c.legend?`${c.legend.name}: ${c.place?.name??""}`.trim():"A view of the Earth";try{if(c.host){let D=await bi("share",{url:b,text:P});y(D?.shared===!1?"Not shared":"Link ready to share");return}await navigator.clipboard.writeText(b),y("Link copied")}catch(D){if(D?.code==="cancelled")return;prompt("Copy this link",b)}},nt=async()=>{if(!c.host)return y("Open this on abstracts.co to post");if(!c.host.signedIn){try{await bi("signIn")}catch{y("Sign in to post")}return}let b=await new Promise(Z=>{i.snap=Z});if(!b)return y("Could not take the picture");let P=e.state(),D=An(P.lat,P.lon,3),C=`${c.legend?`${c.legend.name}${c.place?`, ${c.place.name}`:""}`:"Looking at"} ${D}${Math.abs(s.uSea.value)>=1?`, sea at ${hs(s.uSea.value)}`:""}

${Rt()}`;try{(await bi("post",{text:C,media:[new File([b],"view.jpg",{type:"image/jpeg"})]}))?.post?.url&&y("Posted")}catch(Z){Z?.code!=="cancelled"&&y(Z?.code==="signed_out"?"Sign in to post":"Could not post")}};o.addEventListener("click",b=>{let P=b.target.closest("[data-act]");if(!P)return;let D=P.dataset.act;if(!d?.click(D,P)&&!w?.click(D,P)){if(D==="close")V();else if(D==="city-off")i.city.remove(),i.stamp++,V(),st();else if(D==="place"){let C=c.legend.places[Number(P.dataset.i)];c.place=C,W(),e.flyTo(U(C))}else if(D==="sea-to")ot(Number(P.dataset.m),!1),c.sheet==="sea"?ut():y(`Sea level ${hs(Number(P.dataset.m))}`);else if(D==="share")Ut();else if(D==="post")nt();else if(D==="lens")s.uLens.value=Number(P.dataset.v),Mt();else if(D==="overlay"){let C=k.find(tt=>tt.id===P.dataset.id);ct(c.overlay?.id===C.id?null:C);let Z=h.scrollTop;Mt(),h.scrollTop=Z}else if(D==="overlay-form"){ct(k.find(Z=>Z.id===c.overlay.id),P.dataset.form);let C=h.scrollTop;Mt(),h.scrollTop=C}else if(D==="overlay-go"){let C=c.overlay?.s.coverage?.bbox;C&&e.flyTo({lon:(C[0]+C[2])/2*mt,lat:(C[1]+C[3])/2*mt,range:Wt(Math.max(C[2]-C[0],C[3]-C[1])*111e3*1.1,2e4,12e6)})}else if(D==="city"){let C=c.legend.places[Number(P.dataset.i)];dt(C.lat,C.lon)}else if(D==="city-notes")St();else if(D==="known-here"){let C=c.legend.places[Number(P.dataset.i)];ee(C.lat,C.lon,Math.max(C.precision_km??10,5))}else if(D==="known-again"){let C=e.state();ee(C.lat,C.lon,e.range/4e3)}}}),o.addEventListener("input",b=>{let P=b.target;if(P.id==="sea-range"){ot(Number(P.value)),Kt("#sea-big").innerHTML=`${hs(Number(P.value))}<small>against today</small>`;for(let D of h.querySelectorAll(".presets .chip"))D.classList.toggle("on",Number(D.dataset.m)===Number(P.value)&&s.uWater.value>.5)}else P.id==="sea-off"?ot(s.uSea.value,P.checked):P.id==="exag"?(s.uExag.value=Number(P.value),Kt("#exag-out").textContent=`${Number(P.value).toFixed(1)}\xD7`,n.fitCaps()):P.id==="sun-az"?(i.sun.azimuth=Number(P.value),Kt("#az-out").textContent=Tt(Number(P.value))):P.id==="sun-alt"?(i.sun.altitude=Number(P.value),Kt("#alt-out").textContent=`${P.value}\xB0`):P.id==="opt-shadows"?s.uShadows.value=P.checked?1:0:P.id==="opt-contours"?s.uContours.value=P.checked?1:0:P.id==="opt-night"?s.uNightOn.value=P.checked?1:0:P.id==="over-mix"&&(c.overlayMix=Number(P.value),s.uOverMix.value=c.overlayMix,P.previousElementSibling.textContent=`${Math.round(c.overlayMix*100)}%`)});let $t=(b,P)=>()=>{if(c.sheet===b)return V();d?.a.scene||(c.legend=c.place=null),j(b),P()};Kt("#b-layers").addEventListener("click",$t("layers",Mt)),Kt("#b-sea").addEventListener("click",$t("sea",ut)),Kt("#b-known").addEventListener("click",()=>{if(c.sheet==="known")return V();d?.a.scene||(c.legend=c.place=null);let b=e.state();ee(b.lat,b.lon,e.range/4e3)}),Kt("#z-in").addEventListener("click",()=>e.zoomBy(.5)),Kt("#z-out").addEventListener("click",()=>e.zoomBy(2)),Kt("#compass").addEventListener("click",()=>e.flyTo({heading:0,tilt:0},.7)),Kt("#credit").addEventListener("click",()=>{let b=n.layers,P=[gr.terrarium.credit,e.range>8e5?b.globe?.credit:b.base.credit,c.overlay?.form.layer.credit,s.uNightOn.value>.5?b.night.credit:null].filter(Boolean);y(`Showing: ${P.join(" \xB7 ")}`,6e3)}),Kt("#intro").addEventListener("click",b=>{let P=b.target.closest("[data-act]")?.dataset.act;if(P==="start"){let D=M??[...f].sort((C,Z)=>Z.weight-C.weight)[0];D&&z(D,null,!0)}P==="tour"&&R.start(),P==="enter"&&ft.enterCity("gate"),P==="hunt"&&(Kt("#intro").classList.add("gone"),e.idle=!1),P==="board"&&(Kt("#intro").classList.add("gone"),d?.openBoard()),P==="sea"&&(M&&ot(-50,!1),j("sea"),ut())}),e.onTap=(b,P)=>{Kt("#results").classList.remove("open"),d?.hidePop(),x?.tap(b,P)},addEventListener("keydown",b=>{b.key==="Escape"&&(R.on?R.stop():d?.boardOpen?d.closeBoard():v?.on&&c.sheet?j(null):d?.hidePop())}),a.addEventListener("pointerdown",()=>{Kt("#intro").classList.add("gone"),Kt("#q").blur(),Kt("#results").classList.remove("open"),N(!1)});let Et=Kt("#q"),Bt=Kt("#results"),vt=[],Lt=0,kt=()=>{let b=Et.value.trim();if(!b){Bt.classList.remove("open");return}let P=Tf(b);vt=P?[{coords:P}]:Ef(f,b,7),!P&&b.length>=3&&vt.push({geocode:b}),Lt=Math.min(Lt,vt.length-1),Bt.innerHTML=vt.map((D,C)=>D.coords?`<button class="res${C===Lt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${An(D.coords.lat,D.coords.lon,4)}</b></span><small>Go to coordinates</small></button>`:D.geocode?`<button class="res${C===Lt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--faint)"></span><span>Find \u201C<b>${ue(D.geocode)}</b>\u201D on the map</span><small>Place search</small></button>`:`<button class="res s-${D.legend.status}${C===Lt?" sel":""}" data-i="${C}"><span class="bullet"></span><span><b>${ue(D.place?D.place.name:D.legend.name)}</b>${D.place?` <em>${ue(D.legend.name)}</em>`:""}</span><small>${ue(D.place?Is[D.place.standing]??"":bh[D.legend.kind]??"")}</small></button>`).join("")||'<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>',Bt.classList.add("open")},Nt=async b=>{if(b){if(Bt.classList.remove("open"),b.coords){e.flyTo({lon:b.coords.lon*mt,lat:b.coords.lat*mt,range:Math.min(e.range,6e4)}),Et.blur();return}if(b.geocode){try{let D=(await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(b.geocode)}`).then(wt=>wt.json())).features?.[0];if(!D)return y(`No place called \u201C${b.geocode}\u201D`);let[C,Z]=D.geometry.coordinates,tt=D.properties.extent,yt=tt?Math.max(Math.abs(tt[2]-tt[0])*Math.cos(Z*mt),Math.abs(tt[1]-tt[3]))*111e3:3e4;e.flyTo({lon:C*mt,lat:Z*mt,range:Wt(yt*1.6,3e3,4e6)}),y(`${D.properties.name??b.geocode}${D.properties.country?`, ${D.properties.country}`:""} \xB7 place search by Photon, \xA9 OpenStreetMap`,3800),Et.blur()}catch{y("Place search is not answering")}return}Et.value=b.legend.name,z(b.legend,b.place??null,!0)}};Et.addEventListener("input",()=>{Lt=0,kt()}),Et.addEventListener("focus",()=>{Kt("#intro").classList.add("gone"),kt()}),Et.addEventListener("keydown",b=>{b.key==="ArrowDown"&&(Lt=Math.min(Lt+1,vt.length-1),kt(),b.preventDefault()),b.key==="ArrowUp"&&(Lt=Math.max(Lt-1,0),kt(),b.preventDefault()),b.key==="Escape"&&(Bt.classList.remove("open"),Et.blur())}),Kt("#search").addEventListener("submit",b=>{b.preventDefault(),Nt(vt[Lt])}),Bt.addEventListener("click",b=>{let P=b.target.closest("[data-i]");P&&Nt(vt[Number(P.dataset.i)])});let $=0,E=Kt("#where"),lt=Kt("#compass svg");i.onFrame=(b=.016)=>{if(g?.sync(),m?.tick(b),v?.on||(J(),d?.placeMarks(),w?.tick(),e.idle||Kt("#intro").classList.add("gone"),++$%8))return;let P=e.hover&&!e.pointers.size&&matchMedia("(hover: hover)").matches?e.pick(e.hover.x,e.hover.y):null,D=P?P.lat/mt:e.lat/mt,C=P?P.lon/mt:e.lon/mt,Z=P?P.height:n.heightAt(e.lon,e.lat),tt=s.uSea.value,yt=Z==null?"":Z<-.6?`<b>${Math.round(-Z).toLocaleString("en")} m</b> below today's sea${s.uWater.value>.5&&Z<tt?"":", dry"}`:`<b>${Math.round(Z).toLocaleString("en")} m</b>`;E.innerHTML=`${An(D,C,e.range<5e4?4:2)} \xB7 ${yt} \xB7 eye ${bd(e.altitude)}`,lt.style.transform=`rotate(${(-e.heading/mt).toFixed(1)}deg)`,r.classList.toggle("turned",Math.abs(e.heading)>.02||e.tilt>.03),r.classList.toggle("dots",!!c.hunt&&!c.legend),st()};let ft={world:i,data:t,st:c,$:Kt,esc:ue,link:ba,metres:hs,toast:y,setSheet:j,closeSheet:V,body:h,eyebrow:u,sheet:o,stage:r,pinsEl:l,project:_,setSea:ot,standCity:dt,checkKnown:ee,viewFor:U,drawTag:st,drawCity:St,strataColour:yh,overlays:k,setOverlay:ct,shortName:ma,shareUrl:(b,P)=>Rt(b,P),shareOut:b=>Ct(b),pulse:b=>{p=b??null},tourOn:()=>!1};ft.sound=jf(ft),d=Of(ft),ft.leaveScene=()=>d?.leaveScene(),ft.fitAt=(b,P)=>d?.runFit(void 0,{lat:b,lon:P}),ft.busy=()=>!!(d?.a.scene||d?.boardOpen||R.on||!Kt("#intro").classList.contains("gone")||v?.on||i.city.active&&e.range<9e4||c.sheet==="fit"||c.sheet==="legend"||c.sheet&&r.clientWidth<760),w=d?Xf(ft):null,c.hunt=!!w;let R=zf(ft,d,w);ft.tour=()=>R.start(),ft.tourOn=()=>R.on,x=Hf(ft),ft.home=ql,Object.defineProperty(ft,"host",{get:()=>c.host??null}),v=Vf(ft),g=Wf(ft,{A:d,H:w,walk:v}),m=qf(ft,{walk:v}),ft.walkOn=()=>v.on,ft.leaveWalk=()=>{v.on&&v.leave(!1)},ft.onWalk=b=>{b?(m.arrive(),c.sheet&&j(null)):m.leave(),x.sync(),st()},ft.enterCity=(b="gate",P=!1)=>{if(!P&&R.on)return R.stop();d?.leaveScene(),d?.closeBoard(),c.legend=c.place=null,j(null),Kt("#intro").classList.add("gone"),e.idle=!1,i.city.active||i.city.place({lat:ql.lat,lon:ql.lon,bearing:ql.bearing}),Math.abs(s.uSea.value)>.6&&ot(0,!1);let D=i.city.city.hall;G(),v.enter(b==="hall"?{x:0,y:-(D.RI-6),look:[0,0]}:{x:0,y:-(D.RG+15),look:[0,0]})},ft.openGlobe=(b=!0)=>{j(null);let P=i.city.site;ft.leaveWalk(),b&&(G(),e.flyTo({lon:(P?.lon??-30)*mt,lat:(P?.lat??25)*mt,range:135e5,tilt:0,heading:0},3.6)),Kt("#b-city").hidden=!d};let G=()=>{r.classList.remove("blink"),r.offsetWidth,r.classList.add("blink")};Kt("#walk").addEventListener("click",b=>{let P=b.target.closest("[data-act]")?.dataset.act;P==="w-up"?v.leave(!0):P==="w-hall"?ft.enterCity("hall"):P==="w-globe"&&ft.openGlobe()}),Kt("#b-city").addEventListener("click",()=>ft.enterCity((i.city.active,"gate"))),L(),ot(s.uSea.value),e.idle&&e.jump({range:175e5/Math.min(1,r.clientWidth/r.clientHeight)**.55});let K=b=>{if(!b)return;let P=Z=>b[Z]==null||b[Z]===""||!Number.isFinite(Number(b[Z]))?null:Number(b[Z]);if(P("x")!=null&&(s.uExag.value=Wt(P("x"),1,12)),P("lens")!=null&&(s.uLens.value=Wt(Math.round(P("lens")),0,2)),(P("sea")!=null||b.dry)&&ot(P("sea")??0,!!b.dry),b.o){let[Z,tt]=String(b.o).split("."),yt=k.find(wt=>wt.id===Z);yt&&ct(yt,tt)}if(typeof b.city=="string"){let Z=b.city.split(",").map(Number);Number.isFinite(Z[0])&&Number.isFinite(Z[1])&&dt(Z[0],Z[1],Number.isFinite(Z[2])?Z[2]:180,!1)}let D=b.l&&f.find(Z=>Z.id===b.l);D&&z(D,D.places.find(Z=>Z.id===b.p)??null,!1),d?.a.scene&&(["claimed","found"].includes(b.m)&&d.setMode(b.m),P("s")!=null&&d.setStep(Wt(Math.round(P("s"))-1,-1,d.a.scene.story.length-1)));let C=typeof b.ll=="string"&&b.ll.split(",").map(Number);if(C&&C.length===2&&C.every(Number.isFinite)?(e.jump({lat:Wt(C[0],-89,89)*mt,lon:C[1]*mt,range:Wt(P("r")??2e6,i.city.active?14:150,e.maxRange),heading:(P("hd")??0)*mt,tilt:Wt(P("t")??0,0,i.city.active?88.5:84)*mt}),e.idle=!1):D&&c.place?(e.jump(d?.a.scene?i.evidence.viewOf(null):U(c.place)),e.idle=!1):i.city.active&&(e.jump(i.city.view()),e.idle=!1),(b.ll||D||i.city.active)&&Kt("#intro").classList.add("gone"),b.board&&d&&(Kt("#intro").classList.add("gone"),d.openBoard()),typeof b.hunt=="string"&&w){let Z=b.hunt.split(",").map(Number);if(Z.length===2&&Z.every(Number.isFinite)){Kt("#intro").classList.add("gone"),e.idle=!1;let tt=()=>w.ready?w.claim(Wt(Z[0],-85,85),Z[1],!b.ll):setTimeout(tt,150);tt()}}b.tour&&d&&R.start(),(b.walk||b.hall)&&d&&ft.enterCity(b.hall?"hall":"gate")};K(Object.fromEntries(new URLSearchParams(location.search))),Af().then(b=>{c.host=b,b?.launch&&Object.keys(b.launch).length&&K(b.launch)}),M&&(Kt("#intro h1").textContent="Atlantis",Kt('#intro [data-act="start"]').textContent=w?"Famous claims":"Explore the places"),Kt('#intro [data-act="hunt"]').hidden=!w,w&&(Kt('#intro [data-act="tour"]').textContent="Watch the story");for(let b of document.querySelectorAll("#intro [data-atlantis], #menu [data-atlantis]"))b.hidden=!d;return Kt('#intro [data-act="start"]').hidden=!!w,d&&(Kt("#m-claims").textContent=d.stats.places),w||(Kt("#brand").textContent=M?"Where was Atlantis?":"Lost places"),Kt('#intro [data-act="sea"]').hidden=!!d,Kt('#intro [data-act="enter"]').hidden=!d,Kt("#b-city").hidden=!d,{st:c,selectLegend:z,setSea:ot,setOverlay:ct,overlays:k,apply:K,viewParams:Vt,A:d,H:w,tour:R,cityBar:x,walk:v,hall:g,meet:m,enterCity:ft.enterCity,openGlobe:ft.openGlobe,sound:ft.sound}};var Kf=document.getElementById("view"),ki=new URLSearchParams(location.search),Vy=globalThis.__ASSETS__||"./",Qf=()=>{document.getElementById("fail").style.display="grid",document.getElementById("veil").classList.add("gone")},Wy=async()=>{if(!Kf.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))return Qf();let i;try{i=_f(Kf,{phone:ki.get("phone")==="1"?!0:ki.get("phone")==="0"?!1:void 0})}catch(r){return console.error(r),Qf()}globalThis.world=i;let t=await Sf(Vy);globalThis.ui=Jf(i,t);let e=r=>ki.get(r)===null?null:Number(ki.get(r));if(e("az")!==null&&(i.sun.azimuth=e("az")),e("alt")!==null&&(i.sun.altitude=e("alt")),e("exp")!==null&&(i.exposure=e("exp")),e("air")!==null&&(i.air=e("air")),e("shadows")!==null&&(i.globe.shared.uShadows.value=e("shadows")),e("night")!==null&&(i.globe.shared.uNightOn.value=e("night")),ki.get("still")&&(i.control.idle=!1),globalThis.__STILL__&&(i.control.spin=!1,i.restSoon=!0),ki.get("clean")){for(let r of["bar","kinds","zoom","readout","intro","seatag","results"])document.getElementById(r).style.display="none";ki.get("clean")==="2"&&(document.getElementById("pins").style.display="none")}ki.get("sheet")==="layers"&&document.getElementById("b-layers").click(),ki.get("sheet")==="sea"&&document.getElementById("b-sea").click();let n=document.getElementById("veil"),s=()=>i.globe.ready?n.classList.add("gone"):setTimeout(s,100);s(),setTimeout(()=>n.classList.add("gone"),12e3)};Wy();
