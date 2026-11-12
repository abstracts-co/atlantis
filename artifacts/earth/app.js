var iu=0,Sc=1,su=2;var ws=1,ru=2,sr=3,es=0,nn=1,sn=2,Ms=0,rr=1,Tc=2,Ec=3,Ac=4,Zr=5;var Ss=100,au=101,ou=102,lu=103,cu=104,jr=200,Jr=201,hu=202,uu=203,ar=204,or=205,du=206,fu=207,pu=208,mu=209,gu=210,vu=211,xu=212,yu=213,_u=214,qa=0,Xa=1,Ya=2,js=3,Za=4,ja=5,Ja=6,Ka=7,Rc=0,bu=1,wu=2,di=0,Cc=1,Pc=2,Ic=3,Lc=4,Dc=5,Nc=6,Fc=7;var Uc=300,Ts=301,lr=302,So=303,To=304,Pi=1e3,_n=1001,Qa=1002,Ue=1003,Mu=1004;var Kr=1005;var Ae=1006,Eo=1007;var rn=1008;var an=1009,kc=1010,Oc=1011,cr=1012,Ao=1013,ii=1014,Tn=1015,je=1016,Ro=1017,Co=1018,Es=1020,Bc=35902,zc=35899,Hc=1021,Gc=1022,Ye=1023,Ii=1026,Di=1027,fi=1028,Po=1029,ns=1030,Io=1031;var Lo=1033,Qr=33776,ta=33777,ea=33778,na=33779,Do=35840,No=35841,Fo=35842,Uo=35843,ko=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,ia=37490,Go=37491,Vo=37808,Wo=37809,$o=37810,qo=37811,Xo=37812,Yo=37813,Zo=37814,jo=37815,Jo=37816,Ko=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,sa=36285,ll=36286;var Pr=2300,to=2301,Wa=2302,gc=2303,vc=2400,xc=2401,yc=2402;var Su=3200;var cl=0,Tu=1,Bn="",Ie="srgb",ys="srgb-linear",Ir="linear",Se="srgb";var $a=7680;var Eu=519,Au=512,Ru=513,Cu=514,Vc=515,Pu=516,Iu=517,Wc=518,$c=519,Lu=35044;var is="300 es",Vn=2e3,Js=2001;function ep(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Lr("canvas");return i.style.display="block",i}var Ph={},Ks=null;function qc(...i){let t="THREE."+i.shift();Ks?Ks("log",t,...i):console.log(t,...i)}function Nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Nu(i);let t="THREE."+i.shift();if(Ks)Ks("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Nu(i);let t="THREE."+i.shift();if(Ks)Ks("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cr(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,oe(...i))}function Fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[qa]:qa,[Ya]:Ja,[Za]:Za,[js]:ja,[Xa]:Xa,[Ja]:Ya,[Ka]:Ka,[ja]:js},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,eo=180/Math.PI;function ra(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function ip(i,t){return(i%t+t)%t}function Zl(i,t,e){return(1-e)*i+e*t}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function rp(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(c!==v||o!==f||h!==d||u!==p){let g=o*f+h*d+u*p+c*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let x=Math.acos(g),b=Math.sin(x);m=Math.sin(m*x)/b,l=Math.sin(l*x)/b,o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l}else{o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l;let x=1/Math.sqrt(o*o+h*h+u*u+c*c);o*=x,h*=x,u*=x,c*=x}}t[e]=o,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*c+o*d-h*f,t[e+1]=o*p+u*f+h*c-l*d,t[e+2]=h*p+u*d+l*f-o*c,t[e+3]=u*p-l*c-o*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(n/2),u=l(s/2),c=l(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"YXZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"ZXY":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"ZYX":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"YZX":this._x=f*u*c+h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c-f*d*p;break;case"XZY":this._x=f*u*c-h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c+f*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],u=e[6],c=e[10],f=n+l+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>l&&n>c){let d=2*Math.sqrt(1+n-l-c);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){let d=2*Math.sqrt(1+l-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-n-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,u=e._w;return this._x=n*u+a*l+s*h-r*o,this._y=s*u+a*o+r*l-n*h,this._z=r*u+a*h+n*o-s*l,this._w=a*u-n*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);o=Math.sin(o*h)/u,e=Math.sin(e*h)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dt=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*n),u=2*(l*e-r*s),c=2*(r*n-a*e);return this.x=e+o*h+a*c-l*u,this.y=n+o*u+l*h-r*c,this.z=s+o*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new dt,Ih=new Wn,de=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h)}set(t,e,n,s,r,a,l,o,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],b=s[4],_=s[7],S=s[2],A=s[5],y=s[8];return r[0]=a*v+l*x+o*S,r[3]=a*g+l*b+o*A,r[6]=a*m+l*_+o*y,r[1]=h*v+u*x+c*S,r[4]=h*g+u*b+c*A,r[7]=h*m+u*_+c*y,r[2]=f*v+d*x+p*S,r[5]=f*g+d*b+p*A,r[8]=f*m+d*_+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8];return e*a*u-e*l*h-n*r*u+n*l*o+s*r*h-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=u*a-l*h,f=l*o-u*r,d=h*r-a*o,p=e*c+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=c*v,t[1]=(s*h-u*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*o)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*o-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new de,Lh=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){let i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var _e=ap();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=Lr("canvas")),Fs.width=t.width,Fs.height=t.height;let s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},op=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var lp=0,Ql=new dt,cn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Ae,a=rn,l=Ye,o=an,h=i.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ra(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uc;cn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,h=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,_=(d+1)/2,S=(m+1)/2,A=(u+f)/4,y=(c+v)/4,T=(p+g)/4;return b>_&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=y/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=y/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(c-v)/x,this.z=(f-u)/x,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_s=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g)}set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=h,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=-o*c,e[8]=h,e[1]=d+p*h,e[5]=f-v*h,e[9]=-l*o,e[2]=v-f*h,e[6]=p+d*h,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f+v*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=v+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f-v*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=p*h-d,e[8]=f*h+v,e[1]=o*c,e[5]=v*h+f,e[9]=d*h-p,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=v-f*c,e[8]=p*c+d,e[1]=c,e[5]=a*u,e[9]=-l*u,e[2]=-h*u,e[6]=d*c+p,e[10]=f-v*c}else if(t.order==="XZY"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=-c,e[8]=h*u,e[1]=f*c+v,e[5]=a*u,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,hp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Gi.crossVectors(n,Dn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Gi.crossVectors(n,Dn)),Gi.normalize(),Ma.crossVectors(Dn,Gi),s[0]=Gi.x,s[4]=Ma.x,s[8]=Dn.x,s[1]=Gi.y,s[5]=Ma.y,s[9]=Dn.y,s[2]=Gi.z,s[6]=Ma.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],b=n[7],_=n[11],S=n[15],A=s[0],y=s[4],T=s[8],B=s[12],M=s[1],W=s[5],J=s[9],ht=s[13],N=s[2],$=s[6],G=s[10],j=s[14],lt=s[3],Q=s[7],F=s[11],I=s[15];return r[0]=a*A+l*M+o*N+h*lt,r[4]=a*y+l*W+o*$+h*Q,r[8]=a*T+l*J+o*G+h*F,r[12]=a*B+l*ht+o*j+h*I,r[1]=u*A+c*M+f*N+d*lt,r[5]=u*y+c*W+f*$+d*Q,r[9]=u*T+c*J+f*G+d*F,r[13]=u*B+c*ht+f*j+d*I,r[2]=p*A+v*M+g*N+m*lt,r[6]=p*y+v*W+g*$+m*Q,r[10]=p*T+v*J+g*G+m*F,r[14]=p*B+v*ht+g*j+m*I,r[3]=x*A+b*M+_*N+S*lt,r[7]=x*y+b*W+_*$+S*Q,r[11]=x*T+b*J+_*G+S*F,r[15]=x*B+b*ht+_*j+S*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=o*d-h*f,b=l*d-h*c,_=l*f-o*c,S=a*d-h*u,A=a*f-o*u,y=a*c-l*u;return e*(v*x-g*b+m*_)-n*(p*x-g*S+m*A)+s*(p*b-v*S+m*y)-r*(p*_-v*A+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],h=t[6],u=t[10];return e*(a*u-l*h)-n*(r*u-l*o)+s*(r*h-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*l-n*a,b=e*o-s*a,_=e*h-r*a,S=n*o-s*l,A=n*h-r*l,y=s*h-r*o,T=u*v-c*p,B=u*g-f*p,M=u*m-d*p,W=c*g-f*v,J=c*m-d*v,ht=f*m-d*g,N=x*ht-b*J+_*W+S*M-A*B+y*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/N;return t[0]=(l*ht-o*J+h*W)*$,t[1]=(s*J-n*ht-r*W)*$,t[2]=(v*y-g*A+m*S)*$,t[3]=(f*A-c*y-d*S)*$,t[4]=(o*M-a*ht-h*B)*$,t[5]=(e*ht-s*M+r*B)*$,t[6]=(g*_-p*y-m*b)*$,t[7]=(u*y-f*_+d*b)*$,t[8]=(a*J-l*M+h*T)*$,t[9]=(n*M-e*J-r*T)*$,t[10]=(p*A-v*_+m*x)*$,t[11]=(c*_-u*A-d*x)*$,t[12]=(l*B-a*W-o*T)*$,t[13]=(e*W-n*B+s*T)*$,t[14]=(v*b-p*S-g*x)*$,t[15]=(u*S-c*b+f*x)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,h=r*a,u=r*l;return this.set(h*a+n,h*l-s*o,h*o+s*l,0,h*l+s*o,u*l+n,u*o-s*a,0,h*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,u=a+a,c=l+l,f=r*h,d=r*u,p=r*c,v=a*u,g=a*c,m=l*c,x=o*h,b=o*u,_=o*c,S=n.x,A=n.y,y=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+_)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+m))*A,s[6]=(g+x)*A,s[7]=0,s[8]=(p+b)*y,s[9]=(g-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),l=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);let h=1/a,u=1/l,c=1/o;return Kn.elements[0]*=h,Kn.elements[1]*=h,Kn.elements[2]*=h,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=c,Kn.elements[9]*=c,Kn.elements[10]*=c,e.setFromRotationMatrix(Kn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(l===Vn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Js)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(l===Vn)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===Js)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new dt,Kn=new xe,cp=new dt(0,0,0),hp=new dt(1,1,1),Gi=new dt,Ma=new dt,Dn=new dt,Nh=new xe,Fh=new Wn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},up=0,Uh=new dt,ks=new Wn,Mi=new xe,Sa=new dt,Mr=new dt,dp=new dt,fp=new Wn,kh=new dt(1,0,0),Oh=new dt(0,1,0),Bh=new dt(0,0,1),zh={type:"added"},pp={type:"removed"},Os={type:"childadded",child:null},tc={type:"childremoved",child:null},bn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new dt,e=new ei,n=new Wn,s=new dt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new de}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Mr,Sa,this.up):Mi.lookAt(Sa,Mr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Mi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Os.child=t,this.dispatchEvent(Os),Os.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,dp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new dt(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mp={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new dt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new dt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new dt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new dt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=ip(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return _e.workingToColorSpace(mn.copy(this),t),Math.round(be(mn.r*255,0,255))*65536+Math.round(be(mn.g*255,0,255))*256+Math.round(be(mn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,h,u=(l+a)/2;if(l===a)o=0,h=0;else{let c=a-l;switch(h=u<=.5?c/(a+l):c/(2-a-l),a){case n:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-n)/c+2;break;case r:o=(n-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Ie){_e.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ta);let n=Zl(Vi.h,Ta.h,e),s=Zl(Vi.s,Ta.s,e),r=Zl(Vi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=Ou;var $n=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new dt,Si=new dt,nc=new dt,Ti=new dt,Bs=new dt,zs=new dt,Hh=new dt,ic=new dt,sc=new dt,rc=new dt,ac=new ge,oc=new ge,lc=new ge,Xi=class i{constructor(t=new dt,e=new dt,n=new dt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Si.subVectors(n,e),nc.subVectors(t,e);let a=Qn.dot(Qn),l=Qn.dot(Si),o=Qn.dot(nc),h=Si.dot(Si),u=Si.dot(nc),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*o-l*u)*f,p=(a*u-l*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ti.x),o.addScaledVector(a,Ti.y),o.addScaledVector(l,Ti.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Si.subVectors(t,e),Qn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Bs.subVectors(s,n),zs.subVectors(r,n),ic.subVectors(t,n);let o=Bs.dot(ic),h=zs.dot(ic);if(o<=0&&h<=0)return e.copy(n);sc.subVectors(t,s);let u=Bs.dot(sc),c=zs.dot(sc);if(u>=0&&c<=u)return e.copy(s);let f=o*c-u*h;if(f<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),e.copy(n).addScaledVector(Bs,a);rc.subVectors(t,r);let d=Bs.dot(rc),p=zs.dot(rc);if(p>=0&&d<=p)return e.copy(r);let v=d*h-o*p;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(zs,l);let g=u*p-d*c;if(g<=0&&c-u>=0&&d-p>=0)return Hh.subVectors(r,s),l=(c-u)/(c-u+(d-p)),e.copy(s).addScaledVector(Hh,l);let m=1/(g+v+f);return a=v*m,l=f*m,e.copy(n).addScaledVector(Bs,a).addScaledVector(zs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new dt(1/0,1/0,1/0),e=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Aa.subVectors(this.max,Sr),Hs.subVectors(t.a,Sr),Gs.subVectors(t.b,Sr),Vs.subVectors(t.c,Sr),Wi.subVectors(Gs,Hs),$i.subVectors(Vs,Gs),ms.subVectors(Hs,Vs);let e=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-ms.z,ms.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,ms.z,0,-ms.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-ms.y,ms.x,0];return!cc(e,Hs,Gs,Vs,Aa)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,Hs,Gs,Vs,Aa))?!1:(Ra.crossVectors(Wi,$i),e=[Ra.x,Ra.y,Ra.z],cc(e,Hs,Gs,Vs,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],ti=new dt,Ea=new ci,Hs=new dt,Gs=new dt,Vs=new dt,Wi=new dt,$i=new dt,ms=new dt,Sr=new dt,Aa=new dt,Ra=new dt,gs=new dt;function cc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gs.fromArray(i,r);let l=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),o=t.dot(gs),h=e.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var Ri=gp();function gp(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):h<-14?(n[o]=1024>>-h-14,n[o|256]=1024>>-h-14|32768,s[o]=-h-1,s[o|256]=-h-1):h<=15?(n[o]=h+15<<10,n[o|256]=h+15<<10|32768,s[o]=13,s[o|256]=13):h<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[o]=h|u}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function vp(i){Math.abs(i)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),i=be(i,-65504,65504),Ri.floatView[0]=i;let t=Ri.uint32View[0],e=t>>23&511;return Ri.baseTable[e]+((t&8388607)>>Ri.shiftTable[e])}function xp(i){let t=i>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[t]+(i&1023)]+Ri.exponentTable[t],Ri.floatView[0]}var Yi=class{static toHalfFloat(t){return vp(t)}static fromHalfFloat(t){return xp(t)}},Ve=new dt,Ca=new ie,yp=0,Le=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?Xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rp(t,this.array)}};var Dr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},_p=new ci,Tr=new dt,hc=new dt,hi=class{constructor(t=new dt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_p.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(hc)),this.expandByPoint(Tr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bp=0,Gn=new xe,uc=new bn,Ws=new dt,Nn=new ci,Er=new ci,en=new dt,Be=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ep(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Er.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(Nn.min,Er.min),Nn.expandByPoint(en),en.addVectors(Nn.max,Er.max),Nn.expandByPoint(en)):(Nn.expandByPoint(Er.min),Nn.expandByPoint(Er.max))}Nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)en.fromBufferAttribute(l,h),o&&(Ws.fromBufferAttribute(t,h),en.add(Ws)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[],h=new Uint8Array(n.count);for(let B=0;B<n.count;B++)l[B]=new dt,o[B]=new dt;let u=new dt,c=new dt,f=new dt,d=new ie,p=new ie,v=new ie,g=new dt,m=new dt;function x(B,M,W){h[B]=h[M]=h[W]=1,u.fromBufferAttribute(n,B),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,W),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,W),c.sub(u),f.sub(u),p.sub(d),v.sub(d);let J=1/(p.x*v.y-v.x*p.y);isFinite(J)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(J),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(J),l[B].add(g),l[M].add(g),l[W].add(g),o[B].add(m),o[M].add(m),o[W].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let B=0,M=b.length;B<M;++B){let W=b[B],J=W.start,ht=W.count;for(let N=J,$=J+ht;N<$;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new dt,S=new dt,A=new dt,y=new dt;function T(B){A.fromBufferAttribute(s,B),y.copy(A);let M=l[B];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(y,M);let J=S.dot(o[B])<0?-1:1;a.setXYZW(B,_.x,_.y,_.z,J)}for(let B=0,M=n.count;B<M;++B)h[B]&&T(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new dt,r=new dt,a=new dt,l=new dt,o=new dt,h=new dt,u=new dt,c=new dt;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(u),o.add(u),h.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,c=l.normalized,f=new h.constructor(o.length*u),d=0,p=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Le(f,u,c)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let o=[],h=r[l];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let h=n[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new dt,wp=new dt,Mp=new de,Fn=class{constructor(t=new dt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sp=0,Zi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=rr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=or,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new dt,fc=new dt,Pa=new dt,Ia=new dt,Fr=class{constructor(t=new dt,e=new dt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),h=Ia.lengthSq(),u=Math.abs(1-a*a),c,f,d,p;if(u>0)if(c=a*o-l,f=a*l-o,p=r*u,c>=0)if(f>=-p)if(f<=p){let v=1/u;c*=v,f*=v,d=c*(c+a*f+2*l)+f*(a*c+f+2*o)+h}else f=r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f=-r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f<=-p?(c=Math.max(0,-(-a*r+l)),f=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h):f<=p?(c=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+h):(c=Math.max(0,-(a*r+l)),f=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(fc).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-f.z)*c,o=(t.max.z-f.z)*c):(l=(t.max.z-f.z)*c,o=(t.min.z-f.z)*c),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,h=l.y,u=l.z,c=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,b=n.z-a.z,_=Math.abs(o),S=Math.abs(h),A=Math.abs(u),y,T,B,M,W,J,ht,N,$,G,j,lt;if(_>=S&&_>=A?(B=o,J=c,$=p,lt=m,o>=0?(y=h,T=u,M=f,W=d,ht=v,N=g,G=x,j=b):(y=u,T=h,M=d,W=f,ht=g,N=v,G=b,j=x)):S>=A?(B=h,J=f,$=v,lt=x,h>=0?(y=u,T=o,M=d,W=c,ht=g,N=p,G=b,j=m):(y=o,T=u,M=c,W=d,ht=p,N=g,G=m,j=b)):(B=u,J=d,$=g,lt=b,u>=0?(y=o,T=h,M=c,W=f,ht=p,N=v,G=m,j=x):(y=h,T=o,M=f,W=c,ht=v,N=p,G=x,j=m)),B===0)return null;let Q=y/B,F=T/B,I=1/B,z=M-Q*J,k=W-F*J,O=ht-Q*$,nt=N-F*$,tt=G-Q*lt,at=j-F*lt,ft=tt*nt-at*O,bt=z*at-k*tt,L=O*k-nt*z;if(s){if(ft<0||bt<0||L<0)return null}else if((ft<0||bt<0||L<0)&&(ft>0||bt>0||L>0))return null;let X=ft+bt+L;if(X===0)return null;let Z=I*(ft*J+bt*$+L*lt);return(X>0?Z<0:Z>0)?null:this.at(Z/X,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new xe,vs=new Fr,La=new hi,Vh=new dt,Da=new dt,Na=new dt,Fa=new dt,pc=new dt,Ua=new dt,Wh=new dt,ka=new dt,pe=class extends bn{constructor(t=new Be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ua.set(0,0,0);for(let o=0,h=r.length;o<h;o++){let u=l[o],c=r[o];u!==0&&(pc.fromBufferAttribute(c,t),a?Ua.addScaledVector(pc,u):Ua.addScaledVector(pc.sub(e),u))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(La.containsPoint(vs.origin)===!1&&(vs.intersectSphere(La,Vh)===null||vs.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),vs.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,S=b;_<S;_+=3){let A=l.getX(_),y=l.getX(_+1),T=l.getX(_+2);s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=l.getX(g),b=l.getX(g+1),_=l.getX(g+2);s=Oa(this,a,t,n,h,u,c,x,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,S=b;_<S;_+=3){let A=_,y=_+1,T=_+2;s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,b=g+1,_=g+2;s=Oa(this,a,t,n,h,u,c,x,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Tp(i,t,e,n,s,r,a,l){let o;if(t.side===nn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===es,l),o===null)return null;ka.copy(l),ka.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ka);return h<e.near||h>e.far?null:{distance:h,point:ka.clone(),object:i}}function Oa(i,t,e,n,s,r,a,l,o,h){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(h,Fa);let u=Tp(i,t,e,n,Da,Na,Fa,Wh);if(u){let c=new dt;Xi.getBarycoord(Wh,Da,Na,Fa,c),s&&(u.uv=Xi.getInterpolatedAttribute(s,l,o,h,c,new ie)),r&&(u.uv1=Xi.getInterpolatedAttribute(r,l,o,h,c,new ie)),a&&(u.normal=Xi.getInterpolatedAttribute(a,l,o,h,c,new dt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new dt,materialIndex:0};Xi.getNormal(Da,Na,Fa,f.normal),u.face=f,u.barycoord=c}return u}var Sn=class extends cn{constructor(t=null,e=1,n=1,s,r,a,l,o,h=Ue,u=Ue,c,f){super(null,a,l,o,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new xe,$h=new xe,Ba=[],qh=new ci,Ep=new xe,Ar=new pe,Rr=new hi,kr=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),qh.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Rr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),$h.multiplyMatrices(n,$s),Ar.matrixWorld=$h,Ar.raycast(t,Ba);for(let a=0,l=Ba.length;a<l;a++){let o=Ba[a];o.instanceId=r,o.object=this,e.push(o)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,fi,Tn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new hi,Ap=new ie(.5,.5),za=new dt,ui=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],b=r[13],_=r[14],S=r[15];if(s[0].setComponents(h-a,d-u,m-p,S-x).normalize(),s[1].setComponents(h+a,d+u,m+p,S+x).normalize(),s[2].setComponents(h+l,d+c,m+v,S+b).normalize(),s[3].setComponents(h-l,d-c,m-v,S-b).normalize(),n)s[4].setComponents(o,f,g,_).normalize(),s[5].setComponents(h-o,d-f,m-g,S-_).normalize();else if(s[4].setComponents(h-o,d-f,m-g,S-_).normalize(),e===Vn)s[5].setComponents(h+o,d+f,m+g,S+_).normalize();else if(e===Js)s[5].setComponents(o,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=Ap.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xh=new xe,ro=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(Xh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ui),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Or=class extends cn{constructor(t=[],e=Ts,n,s,r,a,l,o,h,u){super(t,e,n,s,r,a,l,o,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends cn{constructor(t,e,n,s,r,a,l,o,h){super(t,e,n,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends cn{constructor(t,e,n=ii,s,r,a,l=Ue,o=Ue,h,u=Ii,c=1){if(u!==Ii&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,l,o,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Br=class extends ni{constructor(t,e=ii,n=Ts,s,r,a=Ue,l=Ue,o,h=Ii){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ji=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],h=[],u=[],c=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(c,2));function p(v,g,m,x,b,_,S,A,y,T,B){let M=_/y,W=S/T,J=_/2,ht=S/2,N=A/2,$=y+1,G=T+1,j=0,lt=0,Q=new dt;for(let F=0;F<G;F++){let I=F*W-ht;for(let z=0;z<$;z++){let k=z*M-J;Q[v]=k*x,Q[g]=I*b,Q[m]=N,h.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),c.push(z/y),c.push(1-F/T),j+=1}}for(let F=0;F<T;F++)for(let I=0;I<y;I++){let z=f+I+$*F,k=f+I+$*(F+1),O=f+(I+1)+$*(F+1),nt=f+(I+1)+$*F;o.push(z,k,nt),o.push(k,O,nt),lt+=6}l.addGroup(d,lt,B),d+=lt,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hr=class i extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,p=n*2+r,v=s+1,g=new dt,m=new dt;for(let x=0;x<=p;x++){let b=0,_=0,S=0,A=0;if(x<=n){let B=x/n,M=B*Math.PI/2;_=-u-t*Math.cos(M),S=t*Math.sin(M),A=-t*Math.cos(M),b=B*c}else if(x<=n+r){let B=(x-n)/r;_=-u+B*e,S=t,A=0,b=c+B*f}else{let B=(x-n-r)/n,M=B*Math.PI/2;_=u+t*Math.sin(M),S=t*Math.cos(M),A=t*Math.sin(M),b=c+f+B*c}let y=Math.max(0,Math.min(1,b/d)),T=0;x===0?T=.5/s:x===p&&(T=-.5/s);for(let B=0;B<=s;B++){let M=B/s,W=M*Math.PI*2,J=Math.sin(W),ht=Math.cos(W);m.x=-S*ht,m.y=_,m.z=S*J,l.push(m.x,m.y,m.z),g.set(-S*ht,A,S*J),g.normalize(),o.push(g.x,g.y,g.z),h.push(M+T,y)}if(x>0){let B=(x-1)*v;for(let M=0;M<s;M++){let W=B+M,J=B+M+1,ht=x*v+M,N=x*v+M+1;a.push(W,J,ht),a.push(J,N,ht)}}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Gr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],h=new dt,u=new ie;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){let d=n+c/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],p=0,v=[],g=n/2,m=0;x(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){let _=new dt,S=new dt,A=0,y=(e-t)/n;for(let T=0;T<=r;T++){let B=[],M=T/r,W=M*(e-t)+t;for(let J=0;J<=s;J++){let ht=J/s,N=ht*o+l,$=Math.sin(N),G=Math.cos(N);S.x=W*$,S.y=-M*n+g,S.z=W*G,c.push(S.x,S.y,S.z),_.set($,y,G).normalize(),f.push(_.x,_.y,_.z),d.push(ht,1-M),B.push(p++)}v.push(B)}for(let T=0;T<s;T++)for(let B=0;B<r;B++){let M=v[B][T],W=v[B+1][T],J=v[B+1][T+1],ht=v[B][T+1];(t>0||B!==0)&&(u.push(M,W,ht),A+=3),(e>0||B!==r-1)&&(u.push(W,J,ht),A+=3)}h.addGroup(m,A,0),m+=A}function b(_){let S=p,A=new ie,y=new dt,T=0,B=_===!0?t:e,M=_===!0?1:-1;for(let J=1;J<=s;J++)c.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let W=p;for(let J=0;J<=s;J++){let N=J/s*o+l,$=Math.cos(N),G=Math.sin(N);y.x=B*G,y.y=g*M,y.z=B*$,c.push(y.x,y.y,y.z),f.push(0,M,0),A.x=$*.5+.5,A.y=G*.5*M+.5,d.push(A.x,A.y),p++}for(let J=0;J<s;J++){let ht=S+J,N=W+J;_===!0?u.push(N,N+1,ht):u.push(N+1,N,ht),T+=3}h.addGroup(m,T,_===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class i extends Ji{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),h(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let b=new dt,_=new dt,S=new dt;for(let A=0;A<e.length;A+=3)d(e[A+0],b),d(e[A+1],_),d(e[A+2],S),o(b,_,S,x)}function o(x,b,_,S){let A=S+1,y=[];for(let T=0;T<=A;T++){y[T]=[];let B=x.clone().lerp(_,T/A),M=b.clone().lerp(_,T/A),W=A-T;for(let J=0;J<=W;J++)J===0&&T===A?y[T][J]=B:y[T][J]=B.clone().lerp(M,J/W)}for(let T=0;T<A;T++)for(let B=0;B<2*(A-T)-1;B++){let M=Math.floor(B/2);B%2===0?(f(y[T][M+1]),f(y[T+1][M]),f(y[T][M])):(f(y[T][M+1]),f(y[T+1][M+1]),f(y[T+1][M]))}}function h(x){let b=new dt;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let x=new dt;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=g(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;a.push(_,1-S)}p(),c()}function c(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],S=a[x+4],A=Math.max(b,_,S),y=Math.min(b,_,S);A>.9&&y<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,b){let _=x*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function p(){let x=new dt,b=new dt,_=new dt,S=new dt,A=new ie,y=new ie,T=new ie;for(let B=0,M=0;B<r.length;B+=9,M+=6){x.set(r[B+0],r[B+1],r[B+2]),b.set(r[B+3],r[B+4],r[B+5]),_.set(r[B+6],r[B+7],r[B+8]),A.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),S.copy(x).add(b).add(_).divideScalar(3);let W=g(S);v(A,M+0,x,W),v(y,M+2,b,W),v(T,M+4,_,W)}}function v(x,b,_,S){S<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Wr=class i extends ao{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Un=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),h=l+1,u=o+1,c=t/l,f=e/o,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*f-a;for(let b=0;b<h;b++){let _=b*c-r;p.push(_,-x,0),v.push(0,0,1),g.push(b/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){let b=x+h*m,_=x+h*(m+1),S=x+1+h*(m+1),A=x+1+h*m;d.push(b,_,A),d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qn=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],o=[],h=[],u=[],c=t,f=(e-t)/s,d=new dt,p=new ie;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=c*Math.cos(m),d.y=c*Math.sin(m),o.push(d.x,d.y,d.z),h.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}c+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,b=x,_=x+n+1,S=x+n+2,A=x+1;l.push(b,_,A),l.push(_,S,A)}}this.setIndex(l),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var kn=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),h=0,u=[],c=new dt,f=new dt,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],b=m/n,_=a+b*l,S=t*Math.cos(_),A=Math.sqrt(t*t-S*S),y=0;m===0&&a===0?y=.5/e:m===n&&o===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let B=T/e,M=s+B*r;c.x=-A*Math.cos(M),c.y=S,c.z=A*Math.sin(M),p.push(c.x,c.y,c.z),f.copy(c).normalize(),v.push(f.x,f.y,f.z),g.push(B+y,1-b),x.push(h++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let b=u[m][x+1],_=u[m][x],S=u[m+1][x],A=u[m+1][x+1];(m!==0||a>0)&&d.push(b,_,A),(m!==n-1||o<Math.PI)&&d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yh(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Yh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Bu={clone:As,merge:gn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nr=class extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var lo=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},co=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case xc:r=t,l=2*e-n;break;case yc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,o=2*n-e;break;case yc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,b=(-1-d)*g+(1.5+d)*v+.5*p,_=d*g-d*v;for(let S=0;S!==l;++S)r[S]=m*a[u+S]+x*a[h+S]+b*a[o+S]+_*a[c+S];return r}},uo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==l;++f)r[f]=a[h+f]*c+a[o+f]*u;return r}},fo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},po=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this.inTangents,c=this.outTangents;if(!u||!c){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==l;++g)r[g]=a[h+g]*v+a[o+g]*p;return r}let f=l*2,d=t-1;for(let p=0;p!==l;++p){let v=a[h+p],g=a[o+p],m=d*f+p*2,x=c[m],b=c[m+1],_=t*f+p*2,S=u[_],A=u[_+1],y=Lp(n,e,x,S,s);r[p]=zu(y,v,b,A,g)}return r}};function zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ip(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=zu(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Ip(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ha(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ha(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ha(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){ce("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){ce("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&np(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){ce("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(s)o=!0;else{let c=l*n,f=c-n,d=c+n;for(let p=0;p!==n;++p){let v=e[c+p];if(v!==e[f+p]||v!==e[d+p]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let c=l*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,h=0;h!==n;++h)e[o+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=to;var Qi=class extends On{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Pr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};mo.prototype.ValueTypeName="color";var go=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="number";var vo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),h=t*l;for(let u=h+l;h!==u;h+=4)Wn.slerpFlat(r,0,a,h-l,a,h,o);return r}},$r=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends On{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Pr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="vector";var yo=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],p=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new yo,_o=class{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var mc=new xe,Jh=new dt,Kh=new dt,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new dt,Va=new Wn,oi=new dt,qr=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new dt,Qh=new ie,tu=new ie,We=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,tu),e.subVectors(tu,Qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/h,s*=a.width/o,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bs=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends wo{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,Ys=1,ir=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Xs,Ys,t,e);s.layers=this.layers,this.add(s);let r=new We(Xs,Ys,t,e);r.layers=this.layers,this.add(r);let a=new We(Xs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new We(Xs,Ys,t,e);l.layers=this.layers,this.add(l);let o=new We(Xs,Ys,t,e);o.layers=this.layers,this.add(o);let h=new We(Xs,Ys,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let h of e)this.remove(h);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zc="\\[\\]\\.:\\/",Dp=new RegExp("["+Zc+"]","g"),jc="[^"+Zc+"]",Np="[^"+Zc.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",jc),Up=/(WCOD+)?/.source.replace("WCOD",Np),kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),Bp=new RegExp("^"+Fp+Up+kp+Op+"$"),zp=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=Bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=bc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var eu=new xe,Yr=class{constructor(t,e,n=0,s=1/0){this.ray=new Fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)wc(r[a],t,e,!0)}}var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Jc(i,t,e,n){let s=Hp(n);switch(e){case Hc:return i*t;case fi:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Oo:case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ia:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hp(i){switch(i){case an:case kc:return{byteLength:1,components:1};case cr:case Oc:case je:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case ii:case Ao:case Tn:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vp(i){let t=new WeakMap;function e(l,o){let h=l.array,u=l.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,h,u),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function n(l,o,h){let u=o.array,c=o.updateRanges;if(i.bindBuffer(h,l),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<c.length;d++){let p=c[f],v=c[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,c[f]=v)}c.length=f+1;for(let d=0,p=c.length;d<p;d++){let v=c[d];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Hm=`uniform sampler2D dfgLUT;
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
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
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform float backgroundBlurriness;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Wp,alphahash_pars_fragment:$p,alphamap_fragment:qp,alphamap_pars_fragment:Xp,alphatest_fragment:Yp,alphatest_pars_fragment:Zp,aomap_fragment:jp,aomap_pars_fragment:Jp,batching_pars_vertex:Kp,batching_vertex:Qp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:vm,emissivemap_pars_fragment:xm,colorspace_fragment:ym,colorspace_pars_fragment:_m,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Fm,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Nm,lights_toon_fragment:Um,lights_toon_pars_fragment:km,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:$m,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:jm,map_pars_fragment:Jm,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:v0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:_0,dithering_fragment:b0,dithering_pars_fragment:w0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:E0,shadowmap_vertex:A0,shadowmask_pars_fragment:R0,skinbase_vertex:C0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:N0,tonemapping_fragment:F0,tonemapping_pars_fragment:U0,transmission_fragment:k0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:H0,worldpos_vertex:G0,background_vert:V0,background_frag:W0,backgroundCube_vert:$0,backgroundCube_frag:q0,cube_vert:X0,cube_frag:Y0,depth_vert:Z0,depth_frag:j0,distance_vert:J0,distance_frag:K0,equirect_vert:Q0,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:ag,meshmatcap_vert:og,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:vg,points_frag:xg,shadow_vert:yg,shadow_frag:_g,sprite_vert:bg,sprite_frag:wg},Zt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:gn([Zt.common,Zt.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:gn([Zt.lights,Zt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var hl={r:0,b:0,g:0},Mg=new xe,hd=new de;hd.set(-1,0,0,0,1,0,0,0,1);function Sg(i,t,e,n,s,r){let a=new se(0),l=s===!0?0:1,o,h,u=null,c=0,f=null;function d(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let _=x.backgroundBlurriness>0;b=t.get(b,_)}return b}function p(x){let b=!1,_=d(x);_===null?g(a,l):_&&_.isColor&&(g(_,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,b){let _=d(b);_&&_.isCubeTexture?(h===void 0&&(h=new pe(new ji(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:As(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(hd),h.material.toneMapped=_e.getTransfer(_.colorSpace)!==Se,(u!==_||c!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,c=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new pe(new Un(2,2),new Xe({name:"BackgroundMaterial",uniforms:As(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=_e.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||c!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=_,c=_.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,b){x.getRGB(hl,Yc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,b,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),l=b,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:v,dispose:m}}function Tg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(W,J,ht,N,$){let G=!1,j=c(W,N,ht,J);r!==j&&(r=j,h(r.object)),G=d(W,N,ht,$),G&&p(W,N,ht,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(W,J,ht,N),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function o(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function c(W,J,ht,N){let $=N.wireframe===!0,G=n[J.id];G===void 0&&(G={},n[J.id]=G);let j=W.isInstancedMesh===!0?W.id:0,lt=G[j];lt===void 0&&(lt={},G[j]=lt);let Q=lt[ht.id];Q===void 0&&(Q={},lt[ht.id]=Q);let F=Q[$];return F===void 0&&(F=f(o()),Q[$]=F),F}function f(W){let J=[],ht=[],N=[];for(let $=0;$<e;$++)J[$]=0,ht[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ht,attributeDivisors:N,object:W,attributes:{},index:null}}function d(W,J,ht,N){let $=r.attributes,G=J.attributes,j=0,lt=ht.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let I=$[Q],z=G[Q];if(z===void 0&&(Q==="instanceMatrix"&&W.instanceMatrix&&(z=W.instanceMatrix),Q==="instanceColor"&&W.instanceColor&&(z=W.instanceColor)),I===void 0||I.attribute!==z||z&&I.data!==z.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function p(W,J,ht,N){let $={},G=J.attributes,j=0,lt=ht.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let I=G[Q];I===void 0&&(Q==="instanceMatrix"&&W.instanceMatrix&&(I=W.instanceMatrix),Q==="instanceColor"&&W.instanceColor&&(I=W.instanceColor));let z={};z.attribute=I,I&&I.data&&(z.data=I.data),$[Q]=z,j++}r.attributes=$,r.attributesNum=j,r.index=N}function v(){let W=r.newAttributes;for(let J=0,ht=W.length;J<ht;J++)W[J]=0}function g(W){m(W,0)}function m(W,J){let ht=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;ht[W]=1,N[W]===0&&(i.enableVertexAttribArray(W),N[W]=1),$[W]!==J&&(i.vertexAttribDivisor(W,J),$[W]=J)}function x(){let W=r.newAttributes,J=r.enabledAttributes;for(let ht=0,N=J.length;ht<N;ht++)J[ht]!==W[ht]&&(i.disableVertexAttribArray(ht),J[ht]=0)}function b(W,J,ht,N,$,G,j){j===!0?i.vertexAttribIPointer(W,J,ht,$,G):i.vertexAttribPointer(W,J,ht,N,$,G)}function _(W,J,ht,N){v();let $=N.attributes,G=ht.getAttributes(),j=J.defaultAttributeValues;for(let lt in G){let Q=G[lt];if(Q.location>=0){let F=$[lt];if(F===void 0&&(lt==="instanceMatrix"&&W.instanceMatrix&&(F=W.instanceMatrix),lt==="instanceColor"&&W.instanceColor&&(F=W.instanceColor)),F!==void 0){let I=F.normalized,z=F.itemSize,k=t.get(F);if(k===void 0)continue;let O=k.buffer,nt=k.type,tt=k.bytesPerElement,at=nt===i.INT||nt===i.UNSIGNED_INT||F.gpuType===Ao;if(F.isInterleavedBufferAttribute){let ft=F.data,bt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,L=F.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let X=0;X<Q.locationSize;X++)m(Q.location+X,ft.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let X=0;X<Q.locationSize;X++)g(Q.location+X);i.bindBuffer(i.ARRAY_BUFFER,O);for(let X=0;X<Q.locationSize;X++)b(Q.location+X,z/Q.locationSize,nt,I,bt*tt,(L+z/Q.locationSize*X)*tt,at)}else{if(F.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)m(Q.location+ft,F.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ft=0;ft<Q.locationSize;ft++)g(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,O);for(let ft=0;ft<Q.locationSize;ft++)b(Q.location+ft,z/Q.locationSize,nt,I,z*tt,z/Q.locationSize*ft*tt,at)}}else if(j!==void 0){let I=j[lt];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(Q.location,I);break;case 3:i.vertexAttrib3fv(Q.location,I);break;case 4:i.vertexAttrib4fv(Q.location,I);break;default:i.vertexAttrib1fv(Q.location,I)}}}}x()}function S(){B();for(let W in n){let J=n[W];for(let ht in J){let N=J[ht];for(let $ in N){let G=N[$];for(let j in G)u(G[j].object),delete G[j];delete N[$]}}delete n[W]}}function A(W){if(n[W.id]===void 0)return;let J=n[W.id];for(let ht in J){let N=J[ht];for(let $ in N){let G=N[$];for(let j in G)u(G[j].object),delete G[j];delete N[$]}}delete n[W.id]}function y(W){for(let J in n){let ht=n[J];for(let N in ht){let $=ht[N];if($[W.id]===void 0)continue;let G=$[W.id];for(let j in G)u(G[j].object),delete G[j];delete $[W.id]}}}function T(W){for(let J in n){let ht=n[J],N=W.isInstancedMesh===!0?W.id:0,$=ht[N];if($!==void 0){for(let G in $){let j=$[G];for(let lt in j)u(j[lt].object),delete j[lt];delete $[G]}delete ht[N],Object.keys(ht).length===0&&delete n[J]}}}function B(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Eg(i,t,e){let n;function s(o){n=o}function r(o,h){i.drawArrays(n,o,h),e.update(h,n,1)}function a(o,h,u){u!==0&&(i.drawArraysInstanced(n,o,h,u),e.update(h,n,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Ag(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ye&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(y){let T=y===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==an&&y!==Tn&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=o(h);u!==h&&(oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&c===!1;e.reversedDepthBuffer===!0&&c===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&c===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,maxSamples:S,samples:A}}function Rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,l=new de,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let p=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=i.get(c);if(!s||p===null||p.length===0||r&&!g)r?u(null):h();else{let x=r?0:n,b=x*4,_=m.clippingState||null;o.value=_,_=u(p,f,b,d);for(let S=0;S!==b;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,p){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){let m=d+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=d;b!==v;++b,_+=4)a.copy(c[b]).applyMatrix4(x,l),a.normal.toArray(g,_),g[_+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var la=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ms});r.uniforms.tEquirect.value=e;let a=new pe(s,r),l=e.minFilter;return e.minFilter===rn&&(e.minFilter=Ae),new ir(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gu=256,Cg=3,Pg=20,ud=256,dd=16,Ig=3,Lg=new dt,Dg=new se,ur=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ir(1,10,null),this._boxMesh=new pe(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Lg}=r,o=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let c=o.autoClear,f=o.autoClearColor,d=o.autoClearDepth,p=o.autoClearStencil,v=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(t.background=o.getClearColor(Dg));let g=new ir(n,s,u);return g.position.copy(l),g.update(o,t),o.autoClear=c,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gu,ku(t))}_fromTexture(t,e){t.mapping===Ts||t.mapping===lr?this._setSize(t.image.length===0?Gu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-Cg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ts||t.mapping===lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ng(),this._integrationMaterial=Fg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/dd);for(let a=0;a<=n;a++){let l=i.lodToRoughness(a,n);if(a>n-Ig)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(ud*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ug());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vu(i,t,e){return new la(i,{minFilter:rn,generateMipmaps:t,type:je,colorSpace:ys,depthBuffer:e})}function ca(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:nn,blending:Ms,depthTest:!1,depthWrite:!1})}function Ng(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ud}u

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
	`)}function Fg(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dd}},`

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
	`)}function Ug(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pg}
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
	`)}function Wu(){return ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $u(){return ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===So||d===To)if(t.has(f)){let p=t.get(f).texture;return l(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new la(p.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",h),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===So||d===To,v=d===Ts||d===lr;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ur(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new ur(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,d){return d===So?f.mapping=Ts:d===To&&(f.mapping=lr),f}function o(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function Og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function c(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=v!==null?v.array.length:g.array.length/3-1,b=g.count>=65535?Nr:Dr,_=new b(Math.ceil(x/3)*6,1),S=_.array;if(v!==null){let y=v.array;m=v.version;for(let T=0,B=0;T<x;T+=3){let M=y[T+0],W=y[T+1],J=y[T+2];S[B++]=M,S[B++]=W,S[B++]=W,S[B++]=J,S[B++]=J,S[B++]=M}}else{m=g.version;for(let y=0,T=0;y<x;y+=3){let B=y+0,M=y+1,W=y+2;S[T++]=B,S[T++]=M,S[T++]=M,S[T++]=W,S[T++]=W,S[T++]=B}}_.version=m;let A=r.get(p);A&&t.remove(A),r.set(p,_)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&c(p)}else c(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&o(v)}}return{get:h,update:u,getWireframeAttribute:f,dispose:d}}function zg(i,t,e){let n;function s(c){n=c}let r,a;function l(c){r=c.type,a=c.bytesPerElement}function o(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function Hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new ge;function r(a,l,o){let h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==c){let B=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let _=l.attributes.position.count*b,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*S*4*c),y=new _s(A,_,S,c);y.type=Tn,y.needsUpdate=!0;let T=b*4;for(let M=0;M<c;M++){let W=g[M],J=m[M],ht=x[M],N=_*S*4*M;for(let $=0;$<W.count;$++){let G=$*T;d===!0&&(s.fromBufferAttribute(W,$),A[N+G+0]=s.x,A[N+G+1]=s.y,A[N+G+2]=s.z,A[N+G+3]=0),p===!0&&(s.fromBufferAttribute(J,$),A[N+G+4]=s.x,A[N+G+5]=s.y,A[N+G+6]=s.z,A[N+G+7]=0),v===!0&&(s.fromBufferAttribute(ht,$),A[N+G+8]=s.x,A[N+G+9]=s.y,A[N+G+10]=s.z,A[N+G+11]=ht.itemSize===4?s.w:1)}}f={count:c,texture:y,size:new ie(_,S)},n.set(l,f),l.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",h)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vg(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var Wg={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Lc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function $g(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,u=new Be;u.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Te([0,2,0,0,2,0],2));let c=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pe(u,c),d=new bs(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,x=null,b=[],_=!1;this.setSize=function(S,A){a.setSize(S,A),l!==null&&l.setSize(S,A),o!==null&&o.setSize(S,A);for(let y=0;y<b.length;y++){let T=b[y];T.setSize&&T.setSize(S,A)}},this.setEffects=function(S){b=S,_=b.length>0&&b[0].isRenderPass===!0;let A=a.width,y=a.height;b.length>0&&l===null&&(l=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}),o=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&b.some(B=>B.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new ni(A,y),r===!0&&(h.format=Di,h.type=Es)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let B=0;B<b.length;B++){let M=b[B];M.setSize&&M.setSize(A,y),T&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(h)}},this.begin=function(S,A){if(g||S.toneMapping===di&&b.length===0)return!1;if(x=A,A!==null){let y=A.width,T=A.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return _===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=di,!0},this.hasRenderPass=function(){return _},this.end=function(S,A){S.toneMapping=m,g=!0;let y=a,T=l;for(let B=0;B<b.length;B++){let M=b[B];M.enabled!==!1&&(M.render(S,T,y,A),M.needsSwap!==!1&&(y=T,T=T===l?o:l))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,c.defines={},_e.getTransfer(p)===Se&&(c.defines.SRGB_TRANSFER="");let B=Wg[v];B&&(c.defines[B]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var fd=new cn,pd=new ni(1,1),md=new Br(1),gd=new _s,vd=new so,xd=new Or,qu=[],Xu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),ju=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Ke(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ke(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Ke(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function iv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function pl(i){return i.version===0&&(i.compareFunction=$c,i.needsUpdate=!0),i}function ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=pl(pd):r=fd,e.setTexture2D(t||r,s)}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vd,s)}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=pl(md):r=xd,e.setTextureCube(t||r,s)}function hv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function uv(i){switch(i){case 5126:return qg;case 35664:return Xg;case 35665:return Yg;case 35666:return Zg;case 35674:return jg;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}function dv(i,t){i.uniform1fv(this.addr,t)}function fv(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function pv(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function mv(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function gv(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vv(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xv(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yv(i,t){i.uniform1iv(this.addr,t)}function _v(i,t){i.uniform2iv(this.addr,t)}function bv(i,t){i.uniform3iv(this.addr,t)}function wv(i,t){i.uniform4iv(this.addr,t)}function Mv(i,t){i.uniform1uiv(this.addr,t)}function Sv(i,t){i.uniform2uiv(this.addr,t)}function Tv(i,t){i.uniform3uiv(this.addr,t)}function Ev(i,t){i.uniform4uiv(this.addr,t)}function Av(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pl(pd):a=fd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Rv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vd,r[a])}function Cv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=pl(md):a=xd;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function Pv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Iv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return _v;case 35668:case 35672:return bv;case 35669:case 35673:return wv;case 5125:return Mv;case 36294:return Sv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uv(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iv(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Ju(i,t){i.seq.push(t),i.map[t.id]=t}function Lv(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,l=r[1],o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){Ju(e,h===void 0?new th(l,i,t):new eh(l,i,t));break}else{let c=e.map[l];c===void 0&&(c=new nh(l),Ju(e,c)),e=c}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Lv(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dv=37297,Nv=0;function Fv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Qu=new de;function Uv(i){_e._getMatrix(Qu,_e.workingColorSpace,i);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fv(i.getShaderSource(t),l)}else return r}function kv(i,t){let e=Uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ov={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[Lc]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Dc]:"Custom"};function Bv(i,t){let e=Ov[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new dt;function zv(){_e.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Gv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function oa(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(Wv,$v)}function $v(i,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ih(e)}var qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(qv,Xv)}function Xv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yv={[ws]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Zv(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jv={[lr]:"ENVMAP_MODE_REFRACTION"};function Jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kv={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function Qv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[i.combine]||"ENVMAP_BLENDING_NONE"}function tx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=Zv(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Jv(e),c=Qv(e),f=Hv(e),d=Gv(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(v=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?me.tonemapping_pars_fragment:"",e.toneMapping!==di?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,kv("linearToOutputTexel",e.outputColorSpace),zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=ih(a),a=ed(a,e),a=nd(a,e),l=ih(l),l=ed(l,e),l=nd(l,e),a=id(a),l=id(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===is?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===is?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+v+a,b=m+g+l,_=Ku(s,s.VERTEX_SHADER,x),S=Ku(s,s.FRAGMENT_SHADER,b);s.attachShader(p,_),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(M){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(p)||"",J=s.getShaderInfoLog(_)||"",ht=s.getShaderInfoLog(S)||"",N=W.trim(),$=J.trim(),G=ht.trim(),j=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,S);else{let Q=td(s,_,"vertex"),F=td(s,S,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+N+`
`+Q+`
`+F)}else N!==""?oe("WebGLProgram: Program Info Log:",N):($===""||G==="")&&(lt=!1);lt&&(M.diagnostics={runnable:j,programLog:N,vertexShader:{log:$,prefix:v},fragmentShader:{log:G,prefix:g}})}s.deleteShader(_),s.deleteShader(S),y=new hr(s,p),T=Vv(s,p)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,Dv)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=S,this}var ex=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=ex++,this.code=t,this.usedTimes=0}};function nx(i){return i===ns||i===ia||i===sa}function ix(i,t,e,n,s,r){let a=new tr,l=new sh,o=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return o.add(y),y===0?"uv":`uv${y}`}function p(y,T,B,M,W,J){let ht=M.fog,N=W.geometry,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?M.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||$,G),lt=f[y.type],Q=n.precision;y.precision!==null&&(Q=n.getMaxPrecision(y.precision),Q!==y.precision&&oe("WebGLProgram.getParameters:",y.precision,"not supported, using",Q,"instead."));let F=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,I=F!==void 0?F.length:0,z=0;N.morphAttributes.position!==void 0&&(z=1),N.morphAttributes.normal!==void 0&&(z=2),N.morphAttributes.color!==void 0&&(z=3);let k,O,nt,tt;if(lt){let wt=mi[lt];k=wt.vertexShader,O=wt.fragmentShader}else{k=y.vertexShader,O=y.fragmentShader;let wt=l.getVertexShaderStage(y),ae=l.getFragmentShaderStage(y);l.update(y,wt,ae),nt=wt.id,tt=ae.id}let at=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),bt=W.isInstancedMesh===!0,L=W.isBatchedMesh===!0,X=!!y.map,Z=!!y.matcap,ut=!!j,ot=ut&&j.isPMREMTexture===!0,Tt=!!y.aoMap,Et=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,Dt=!!y.normalMap,ne=!!y.displacementMap,Wt=!!y.emissiveMap,Rt=!!y.metalnessMap,Ct=!!y.roughnessMap,Ut=y.anisotropy>0,st=y.clearcoat>0,Vt=y.diffuseRoughness>0,St=y.dispersion>0,Bt=y.retroreflectivity>0,vt=y.iridescence>0,Lt=y.sheen>0,kt=y.transmission>0,Nt=Ut&&!!y.anisotropyMap,V=st&&!!y.clearcoatMap,E=st&&!!y.clearcoatNormalMap,ct=st&&!!y.clearcoatRoughnessMap,pt=Vt&&!!y.diffuseRoughnessMap,R=vt&&!!y.iridescenceMap,H=vt&&!!y.iridescenceThicknessMap,K=Lt&&!!y.sheenColorMap,w=Lt&&!!y.sheenRoughnessMap,P=!!y.specularMap,U=!!y.specularColorMap,C=!!y.specularIntensityMap,Y=kt&&!!y.transmissionMap,it=kt&&!!y.thicknessMap,yt=!!y.gradientMap,Mt=!!y.alphaMap,Pt=y.alphaTest>0,zt=!!y.alphaHash,Ht=!!y.extensions,At=di;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(At=i.toneMapping);let It=ot?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,qt={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:O,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Q,batching:L,batchingColor:L&&W._colorsTexture!==null,instancing:bt,instancingColor:bt&&W.instanceColor!==null,instancingMorph:bt&&W.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:X,matcap:Z,envMap:ut,envMapMode:ut&&j.mapping,envMapPMREM:ot,envMapMaxLod:ot?It.length-1:null,envMapSize:ot?It[0].width:null,aoMap:Tt,lightMap:Et,bumpMap:Ft,normalMap:Dt,displacementMap:ne,emissiveMap:Wt,normalMapObjectSpace:Dt&&y.normalMapType===Tu,normalMapTangentSpace:Dt&&y.normalMapType===cl,packedNormalMap:Dt&&y.normalMapType===cl&&nx(y.normalMap.format),metalnessMap:Rt,roughnessMap:Ct,anisotropy:Ut,anisotropyMap:Nt,clearcoat:st,clearcoatMap:V,clearcoatNormalMap:E,clearcoatRoughnessMap:ct,diffuseRoughness:Vt,diffuseRoughnessMap:pt,dispersion:St,retroreflection:Bt,iridescence:vt,iridescenceMap:R,iridescenceThicknessMap:H,sheen:Lt,sheenColorMap:K,sheenRoughnessMap:w,specularMap:P,specularColorMap:U,specularIntensityMap:C,transmission:kt,transmissionMap:Y,thicknessMap:it,gradientMap:yt,opaque:y.transparent===!1&&y.blending===rr&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Pt,alphaHash:zt,combine:y.combine,mapUv:X&&d(y.map.channel),aoMapUv:Tt&&d(y.aoMap.channel),lightMapUv:Et&&d(y.lightMap.channel),bumpMapUv:Ft&&d(y.bumpMap.channel),normalMapUv:Dt&&d(y.normalMap.channel),displacementMapUv:ne&&d(y.displacementMap.channel),emissiveMapUv:Wt&&d(y.emissiveMap.channel),metalnessMapUv:Rt&&d(y.metalnessMap.channel),roughnessMapUv:Ct&&d(y.roughnessMap.channel),anisotropyMapUv:Nt&&d(y.anisotropyMap.channel),clearcoatMapUv:V&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:R&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:H&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:K&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:w&&d(y.sheenRoughnessMap.channel),specularMapUv:P&&d(y.specularMap.channel),specularColorMapUv:U&&d(y.specularColorMap.channel),specularIntensityMapUv:C&&d(y.specularIntensityMap.channel),transmissionMapUv:Y&&d(y.transmissionMap.channel),thicknessMapUv:it&&d(y.thicknessMap.channel),alphaMapUv:Mt&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Dt||Ut),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!N.attributes.uv&&(X||Mt),fog:!!ht,useFog:y.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&Dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:ft,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:z,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:J.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:X&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Wt&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||L)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function v(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)T.push(B),T.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(g(T,y),m(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){let T=f[y.type],B;if(T){let M=mi[T];B=Bu.clone(M.uniforms)}else B=y.uniforms;return B}function b(y,T){let B=u.get(T);return B!==void 0?++B.usedTimes:(B=new tx(i,T,y,s),h.push(B),u.set(T,B)),B}function _(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:h,dispose:A}}function sx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ad(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,p,v,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function o(f,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let b=l(f,d,p,v,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function h(f,d,p,v,g,m){let x=l(f,d,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||rx),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function c(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function ax(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ox(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new dt,color:new se};break;case"SpotLight":e={position:new dt,direction:new dt,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new dt,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new dt,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new dt,halfWidth:new dt,halfHeight:new dt};break}return i[t.id]=e,e}}}function lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cx=0;function hx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ux(i){let t=new ox,e=lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new dt);let s=new dt,r=new xe,a=new xe;function l(h){let u=0,c=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,b=0,_=0,S=0,A=0,y=0,T=0,B=0,M=0;h.sort(hx);for(let J=0,ht=h.length;J<ht;J++){let N=h[J],$=N.color,G=N.intensity,j=N.distance,lt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ns?lt=N.shadow.map.texture:lt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=$.r*G,c+=$.g*G,f+=$.b*G;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(N.sh.coefficients[Q],G);M++}else if(N.isSunLight){let Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,I=e.get(N);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[p]=I,n.sunShadowMap[p]=lt;let z=F.getViewportCount();for(let k=0;k<z;k++)n.sunShadowMatrix[v+k]=F.getMatrix(k),n.sunShadowCascade[v+k]=F._cascadeData[k];v+=z,p++}n.sun[d]=Q,d++}else if(N.isDirectionalLight){let Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,I=e.get(N);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.directionalShadow[g]=I,n.directionalShadowMap[g]=lt,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=Q,g++}else if(N.isSpotLight){let Q=t.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy($).multiplyScalar(G),Q.distance=j,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,n.spot[x]=Q;let F=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,F.updateMatrices(N),N.castShadow&&B++),n.spotLightMatrix[x]=F.matrix,N.castShadow){let I=e.get(N);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.spotShadow[x]=I,n.spotShadowMap[x]=lt,y++}x++}else if(N.isRectAreaLight){let Q=t.get(N);Q.color.copy($).multiplyScalar(G),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=Q,b++}else if(N.isPointLight){let Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){let F=N.shadow,I=e.get(N);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,n.pointShadow[m]=I,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=N.shadow.matrix,A++}n.point[m]=Q,m++}else if(N.isHemisphereLight){let Q=t.get(N);Q.skyColor.copy(N.color).multiplyScalar(G),Q.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[_]=Q,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let W=n.hash;(W.sunLength!==d||W.directionalLength!==g||W.pointLength!==m||W.spotLength!==x||W.rectAreaLength!==b||W.hemiLength!==_||W.numSunShadows!==p||W.numDirectionalShadows!==S||W.numPointShadows!==A||W.numSpotShadows!==y||W.numSpotMaps!==T||W.numLightProbes!==M)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-B,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=M,W.sunLength=d,W.directionalLength=g,W.pointLength=m,W.spotLength=x,W.rectAreaLength=b,W.hemiLength=_,W.numSunShadows=p,W.numDirectionalShadows=S,W.numPointShadows=A,W.numSpotShadows=y,W.numSpotMaps=T,W.numLightProbes=M,n.version=cx++)}function o(h,u){let c=0,f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let _=h[x];if(_.isSunLight){let S=n.sun[c];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),c++}else if(_.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:n}}function od(i){let t=new ux(i),e=[],n=[],s=[];function r(c){u.camera=c,e.length=0,n.length=0,s.length=0}function a(c){c.isLightProbeGrid?s.push(c):e.push(c)}function l(c){n.push(c)}function o(){t.setup(e),s.sort((c,f)=>c.priority-f.priority||c.id-f.id)}function h(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l}}function dx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new od(i),t.set(s,[l])):r>=a.length?(l=new od(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`,mx=[new dt(1,0,0),new dt(-1,0,0),new dt(0,1,0),new dt(0,-1,0),new dt(0,0,1),new dt(0,0,-1)],gx=[new dt(0,-1,0),new dt(0,-1,0),new dt(0,0,1),new dt(0,0,-1),new dt(0,-1,0),new dt(0,-1,0)],ld=new xe,aa=new dt,Qc=new dt;function vx(i,t,e){let n=new ui,s=new ie,r=new ie,a=new ge,l=new lo,o=new co,h={},u=e.maxTextureSize,c={[es]:nn,[nn]:es,[sn]:sn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:fx,fragmentShader:px}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let m=this.type;this.render=function(A,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===ru&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let B=i.getRenderTarget(),M=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Ms),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ht=m!==this.type;ht&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach($=>$.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,$=A.length;N<$;N++){let G=A[N],j=G.shadow;if(j===void 0){oe("WebGLShadowMap:",G,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let lt=j.getFrameExtents();s.multiply(lt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,j.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Q,j.map===null||ht===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===sr){if(G.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Oe(s.x,s.y,{format:ns,type:je,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),j.map.texture.name=G.name+".shadowMap",j.map.depthTexture=new ni(s.x,s.y,Tn),j.map.depthTexture.name=G.name+".shadowMapDepth",j.map.depthTexture.format=Ii,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ue,j.map.depthTexture.magFilter=Ue}else G.isPointLight?(j.map=new la(s.x),j.map.depthTexture=new Br(s.x,ii)):(j.map=new Oe(s.x,s.y),j.map.depthTexture=new ni(s.x,s.y,ii)),j.map.depthTexture.name=G.name+".shadowMap",j.map.depthTexture.format=Ii,this.type===ws?(j.map.depthTexture.compareFunction=Q?Wc:Vc,j.map.depthTexture.minFilter=Ae,j.map.depthTexture.magFilter=Ae):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ue,j.map.depthTexture.magFilter=Ue);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let F=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();G.isPointLight!==!0&&j.updateMatrices(G,T);let I=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:T.layers;for(let z=0;z<F;z++){let k=j.getCamera(z);if(G.isPointLight){let O=j.camera,nt=j.matrix,tt=G.distance||O.far;tt!==O.far&&(O.far=tt,O.updateProjectionMatrix()),aa.setFromMatrixPosition(G.matrixWorld),O.position.copy(aa),Qc.copy(O.position),Qc.add(mx[z]),O.up.copy(gx[z]),O.lookAt(Qc),O.updateMatrixWorld(),nt.makeTranslation(-aa.x,-aa.y,-aa.z),ld.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ld,O.coordinateSystem,O.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,z),i.clear();else{z===0&&(i.setRenderTarget(j.map),i.clear());let O=j.getViewport(z);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),J.viewport(a)}n=j.getFrustum(z),_(y,T,k,G,I,this.type)}j.isPointLightShadow!==!0&&this.type===sr&&x(j,T),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(B,M,W)};function x(A,y){let T=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Oe(s.x,s.y,{format:ns,type:je}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,T,d,v,null)}function b(A,y,T,B){let M=null,W=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(W!==void 0)M=W;else if(M=T.isPointLight===!0?o:l,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let J=M.uuid,ht=y.uuid,N=h[J];N===void 0&&(N={},h[J]=N);let $=N[ht];$===void 0&&($=M.clone(),N[ht]=$,y.addEventListener("dispose",S)),M=$}if(M.visible=y.visible,M.wireframe=y.wireframe,B===sr?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:c[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=i.properties.get(M);J.light=T}return M}function _(A,y,T,B,M,W){if(A.visible===!1)return;if(A.layers.test(M)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&W===sr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let N=t.update(A),$=A.material;if(Array.isArray($)){let G=N.groups;for(let j=0,lt=G.length;j<lt;j++){let Q=G[j],F=$[Q.materialIndex];if(F&&F.visible){let I=b(A,F,B,W);A.onBeforeShadow(i,A,y,T,N,I,Q),i.renderBufferDirect(T,null,N,I,A,Q),A.onAfterShadow(i,A,y,T,N,I,Q)}}}else if($.visible){let G=b(A,$,B,W);A.onBeforeShadow(i,A,y,T,N,G,null),i.renderBufferDirect(T,null,N,G,A,null),A.onAfterShadow(i,A,y,T,N,G,null)}}let ht=A.children;for(let N=0,$=ht.length;N<$;N++)_(ht[N],y,T,B,M,W)}function S(A){A.target.removeEventListener("dispose",S);for(let T in h){let B=h[T],M=A.target.uuid;M in B&&(B[M].dispose(),delete B[M])}}}function xx(i,t){function e(){let C=!1,Y=new ge,it=null,yt=new ge(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!C&&(i.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){C=Mt},setClear:function(Mt,Pt,zt,Ht,At){At===!0&&(Mt*=Ht,Pt*=Ht,zt*=Ht),Y.set(Mt,Pt,zt,Ht),yt.equals(Y)===!1&&(i.clearColor(Mt,Pt,zt,Ht),yt.copy(Y))},reset:function(){C=!1,it=null,yt.set(-1,0,0,0)}}}function n(){let C=!1,Y=!1,it=null,yt=null,Mt=null;return{setReversed:function(Pt){if(Y!==Pt){let zt=t.get("EXT_clip_control");Pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Y=Pt;let Ht=Mt;Mt=null,this.setClear(Ht)}},getReversed:function(){return Y},setTest:function(Pt){Pt?ft(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Pt){it!==Pt&&!C&&(i.depthMask(Pt),it=Pt)},setFunc:function(Pt){if(Y&&(Pt=Uu[Pt]),yt!==Pt){switch(Pt){case qa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Pt}},setLocked:function(Pt){C=Pt},setClear:function(Pt){Mt!==Pt&&(Mt=Pt,Y&&(Pt=1-Pt),i.clearDepth(Pt))},reset:function(){C=!1,it=null,yt=null,Mt=null,Y=!1}}}function s(){let C=!1,Y=null,it=null,yt=null,Mt=null,Pt=null,zt=null,Ht=null,At=null;return{setTest:function(It){C||(It?ft(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(It){Y!==It&&!C&&(i.stencilMask(It),Y=It)},setFunc:function(It,qt,wt){(it!==It||yt!==qt||Mt!==wt)&&(i.stencilFunc(It,qt,wt),it=It,yt=qt,Mt=wt)},setOp:function(It,qt,wt){(Pt!==It||zt!==qt||Ht!==wt)&&(i.stencilOp(It,qt,wt),Pt=It,zt=qt,Ht=wt)},setLocked:function(It){C=It},setClear:function(It){At!==It&&(i.clearStencil(It),At=It)},reset:function(){C=!1,Y=null,it=null,yt=null,Mt=null,Pt=null,zt=null,Ht=null,At=null}}}let r=new e,a=new n,l=new s,o={},h=new WeakMap,u={},c={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,b=null,_=null,S=null,A=null,y=null,T=new se(0,0,0),B=0,M=!1,W=null,J=null,ht=null,N=null,$=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,lt=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=lt>=1):Q.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=lt>=2);let F=null,I={},z=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),O=new ge().fromArray(z),nt=new ge().fromArray(k);function tt(C,Y,it,yt){let Mt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(C,Pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<it;zt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Y+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Pt}let at={};at[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ft(i.DEPTH_TEST),a.setFunc(js),Ft(!1),Dt(Sc),ft(i.CULL_FACE),Tt(Ms);function ft(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function bt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function L(C,Y){return f[C]!==Y?(i.bindFramebuffer(C,Y),f[C]=Y,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Y),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function X(C,Y){let it=p,yt=!1;if(C){it=d.get(Y),it===void 0&&(it=[],d.set(Y,it));let Mt=C.textures;if(it.length!==Mt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,zt=Mt.length;Pt<zt;Pt++)it[Pt]=i.COLOR_ATTACHMENT0+Pt;it.length=Mt.length,yt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,yt=!0);yt&&i.drawBuffers(it)}function Z(C){return v!==C?(i.useProgram(C),v=C,!0):!1}let ut={[Ss]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};ut[lu]=i.MIN,ut[cu]=i.MAX;let ot={[jr]:i.ZERO,[Jr]:i.ONE,[hu]:i.SRC_COLOR,[ar]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[or]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(C,Y,it,yt,Mt,Pt,zt,Ht,At,It){if(C===Ms){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),C!==Zr){if(C!==m||It!==M){if((x!==Ss||S!==Ss)&&(i.blendEquation(i.FUNC_ADD),x=Ss,S=Ss),It)switch(C){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",C);break}else switch(C){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",C);break}b=null,_=null,A=null,y=null,T.set(0,0,0),B=0,m=C,M=It}return}Mt=Mt||Y,Pt=Pt||it,zt=zt||yt,(Y!==x||Mt!==S)&&(i.blendEquationSeparate(ut[Y],ut[Mt]),x=Y,S=Mt),(it!==b||yt!==_||Pt!==A||zt!==y)&&(i.blendFuncSeparate(ot[it],ot[yt],ot[Pt],ot[zt]),b=it,_=yt,A=Pt,y=zt),(Ht.equals(T)===!1||At!==B)&&(i.blendColor(Ht.r,Ht.g,Ht.b,At),T.copy(Ht),B=At),m=C,M=!1}function Et(C,Y){C.side===sn?bt(i.CULL_FACE):ft(i.CULL_FACE);let it=C.side===nn;Y&&(it=!it),Ft(it),C.blending===rr&&C.transparent===!1?Tt(Ms):Tt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let yt=C.stencilWrite;l.setTest(yt),yt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Wt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){W!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),W=C)}function Dt(C){C!==iu?(ft(i.CULL_FACE),C!==J&&(C===Sc?i.cullFace(i.BACK):C===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),J=C}function ne(C){C!==ht&&(j&&i.lineWidth(C),ht=C)}function Wt(C,Y,it){C?(ft(i.POLYGON_OFFSET_FILL),(N!==Y||$!==it)&&(N=Y,$=it,a.getReversed()&&(Y=-Y,it=-it),i.polygonOffset(Y,it))):bt(i.POLYGON_OFFSET_FILL)}function Rt(C){C?ft(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Ct(C){C===void 0&&(C=i.TEXTURE0+G-1),F!==C&&(i.activeTexture(C),F=C)}function Ut(C,Y,it){it===void 0&&(F===null?it=i.TEXTURE0+G-1:it=F);let yt=I[it];yt===void 0&&(yt={type:void 0,texture:void 0},I[it]=yt),(yt.type!==C||yt.texture!==Y)&&(F!==it&&(i.activeTexture(it),F=it),i.bindTexture(C,Y||at[C]),yt.type=C,yt.texture=Y)}function st(){let C=I[F];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function St(){try{i.compressedTexImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function vt(){try{i.texSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Nt(){try{i.texStorage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function V(){try{i.texStorage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function E(){try{i.texImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function ct(){try{i.texImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function pt(C){return c[C]!==void 0?c[C]:i.getParameter(C)}function R(C,Y){c[C]!==Y&&(i.pixelStorei(C,Y),c[C]=Y)}function H(C){O.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),O.copy(C))}function K(C){nt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),nt.copy(C))}function w(C,Y){let it=h.get(Y);it===void 0&&(it=new WeakMap,h.set(Y,it));let yt=it.get(C);yt===void 0&&(yt=i.getUniformBlockIndex(Y,C.name),i.uniformBlockBinding(Y,yt,yt),it.set(C,yt))}function P(C,Y,it){let Mt=h.get(Y).get(C);o[Mt]!==it&&(i.bindBufferBase(i.UNIFORM_BUFFER,Mt,it),o[Mt]=it)}function U(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},F=null,I={},f={},o={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,b=null,_=null,S=null,A=null,y=null,T=new se(0,0,0),B=0,M=!1,W=null,J=null,ht=null,N=null,$=null,O.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ft,disable:bt,bindFramebuffer:L,drawBuffers:X,useProgram:Z,setBlending:Tt,setMaterial:Et,setFlipSided:Ft,setCullFace:Dt,setLineWidth:ne,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:Ct,bindTexture:Ut,unbindTexture:st,compressedTexImage2D:Vt,compressedTexImage3D:St,texImage2D:E,texImage3D:ct,pixelStorei:R,getParameter:pt,updateUBOMapping:w,uniformBlockBinding:P,texStorage2D:Nt,texStorage3D:V,texSubImage2D:Bt,texSubImage3D:vt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:kt,scissor:H,viewport:K,reset:U}}function yx(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ie,u=new WeakMap,c=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(V=>p.delete(V)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(V,E){return g?new OffscreenCanvas(V,E):Lr("canvas")}function x(V,E,ct){let pt=1,R=Nt(V);if((R.width>ct||R.height>ct)&&(pt=ct/Math.max(R.width,R.height)),pt<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let H=Math.floor(pt*R.width),K=Math.floor(pt*R.height);f===void 0&&(f=m(H,K));let w=E?m(H,K):f;return w.width=H,w.height=K,w.getContext("2d").drawImage(V,0,0,H,K),oe("WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+H+"x"+K+")."),w}else return"data"in V&&oe("WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),V;return V}function b(V){return V.generateMipmaps}function _(V){i.generateMipmap(V)}function S(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(V,E,ct,pt,R,H=!1){if(V!==null){if(i[V]!==void 0)return i[V];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let K;pt&&(K=t.get("EXT_texture_norm16"),K||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=E;if(E===i.RED&&(ct===i.FLOAT&&(w=i.R32F),ct===i.HALF_FLOAT&&(w=i.R16F),ct===i.UNSIGNED_BYTE&&(w=i.R8),ct===i.UNSIGNED_SHORT&&K&&(w=K.R16_EXT),ct===i.SHORT&&K&&(w=K.R16_SNORM_EXT)),E===i.RED_INTEGER&&(ct===i.UNSIGNED_BYTE&&(w=i.R8UI),ct===i.UNSIGNED_SHORT&&(w=i.R16UI),ct===i.UNSIGNED_INT&&(w=i.R32UI),ct===i.BYTE&&(w=i.R8I),ct===i.SHORT&&(w=i.R16I),ct===i.INT&&(w=i.R32I)),E===i.RG&&(ct===i.FLOAT&&(w=i.RG32F),ct===i.HALF_FLOAT&&(w=i.RG16F),ct===i.UNSIGNED_BYTE&&(w=i.RG8),ct===i.UNSIGNED_SHORT&&K&&(w=K.RG16_EXT),ct===i.SHORT&&K&&(w=K.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(ct===i.UNSIGNED_BYTE&&(w=i.RG8UI),ct===i.UNSIGNED_SHORT&&(w=i.RG16UI),ct===i.UNSIGNED_INT&&(w=i.RG32UI),ct===i.BYTE&&(w=i.RG8I),ct===i.SHORT&&(w=i.RG16I),ct===i.INT&&(w=i.RG32I)),E===i.RGB_INTEGER&&(ct===i.UNSIGNED_BYTE&&(w=i.RGB8UI),ct===i.UNSIGNED_SHORT&&(w=i.RGB16UI),ct===i.UNSIGNED_INT&&(w=i.RGB32UI),ct===i.BYTE&&(w=i.RGB8I),ct===i.SHORT&&(w=i.RGB16I),ct===i.INT&&(w=i.RGB32I)),E===i.RGBA_INTEGER&&(ct===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),ct===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),ct===i.UNSIGNED_INT&&(w=i.RGBA32UI),ct===i.BYTE&&(w=i.RGBA8I),ct===i.SHORT&&(w=i.RGBA16I),ct===i.INT&&(w=i.RGBA32I)),E===i.RGB&&(ct===i.UNSIGNED_SHORT&&K&&(w=K.RGB16_EXT),ct===i.SHORT&&K&&(w=K.RGB16_SNORM_EXT),ct===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),ct===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),E===i.RGBA){let P=H?Ir:_e.getTransfer(R);ct===i.FLOAT&&(w=i.RGBA32F),ct===i.HALF_FLOAT&&(w=i.RGBA16F),ct===i.UNSIGNED_BYTE&&(w=P===Se?i.SRGB8_ALPHA8:i.RGBA8),ct===i.UNSIGNED_SHORT&&K&&(w=K.RGBA16_EXT),ct===i.SHORT&&K&&(w=K.RGBA16_SNORM_EXT),ct===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),ct===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&t.get("EXT_color_buffer_float"),w}function y(V,E){let ct;return V?E===null||E===ii||E===Es?ct=i.DEPTH24_STENCIL8:E===Tn?ct=i.DEPTH32F_STENCIL8:E===cr&&(ct=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Es?ct=i.DEPTH_COMPONENT24:E===Tn?ct=i.DEPTH_COMPONENT32F:E===cr&&(ct=i.DEPTH_COMPONENT16),ct}function T(V,E){return b(V)===!0||V.isFramebufferTexture&&V.minFilter!==Ue&&V.minFilter!==Ae?Math.log2(Math.max(E.width,E.height))+1:V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?E.mipmaps.length:1}function B(V){let E=new WeakRef(V);n.get(V).__ref=E,p.add(E),v.register(V,E,E)}function M(V){let E=n.get(V).__ref;E!==void 0&&(p.delete(E),v.unregister(E))}function W(V){ht(V.target)}function J(V){N(V.target)}function ht(V){V.removeEventListener("dispose",W),M(V),G(V),V.isVideoTexture&&u.delete(V),V.isHTMLTexture&&c.delete(V)}function N(V){V.removeEventListener("dispose",J),M(V),lt(V)}function $(){for(let V of p){let E=V.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):ht(E))}p.clear(),c.clear()}function G(V){let E=n.get(V);if(E.__webglInit===void 0)return;let ct=V.source,pt=d.get(ct);if(pt){let R=pt[E.__cacheKey];R.usedTimes--,R.usedTimes===0&&j(V),Object.keys(pt).length===0&&d.delete(ct)}n.remove(V)}function j(V){let E=n.get(V);i.deleteTexture(E.__webglTexture);let ct=V.source,pt=d.get(ct);delete pt[E.__cacheKey],a.memory.textures--}function lt(V){let E=n.get(V);E.__depthDisposeCallback&&E.__depthDisposeCallback();let ct=V.depthTexture;if(ct&&ct.renderTarget===V&&ht(ct),V.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(E.__webglFramebuffer[R]))for(let H=0;H<E.__webglFramebuffer[R].length;H++)i.deleteFramebuffer(E.__webglFramebuffer[R][H]);else i.deleteFramebuffer(E.__webglFramebuffer[R]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[R])}else{if(Array.isArray(E.__webglFramebuffer))for(let R=0;R<E.__webglFramebuffer.length;R++)i.deleteFramebuffer(E.__webglFramebuffer[R]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let R=0;R<E.__webglColorRenderbuffer.length;R++)E.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[R]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pt=V.textures;for(let R=0,H=pt.length;R<H;R++){let K=n.get(pt[R]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(pt[R])}n.remove(V)}let Q=0;function F(){Q=0}function I(){return Q}function z(V){Q=V}function k(){let V=Q;return V>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,V}function O(V){let E=[];return E.push(V.wrapS),E.push(V.wrapT),E.push(V.wrapR||0),E.push(V.magFilter),E.push(V.minFilter),E.push(V.anisotropy),E.push(V.internalFormat),E.push(V.format),E.push(V.type),E.push(V.generateMipmaps),E.push(V.mipmapsAutoUpdate),E.push(V.premultiplyAlpha),E.push(V.flipY),E.push(V.unpackAlignment),E.push(V.colorSpace),E.join()}function nt(V,E){let ct=n.get(V);if(V.isVideoTexture&&Lt(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&ct.__version!==V.version){let pt=V.image;if(pt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(ct,V,E);return}}else V.isExternalTexture&&(ct.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture,i.TEXTURE0+E)}function tt(V,E){let ct=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ct.__version!==V.version){Et(ct,V,E);return}else V.isExternalTexture&&(ct.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,ct.__webglTexture,i.TEXTURE0+E)}function at(V,E){let ct=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&ct.__version!==V.version){Et(ct,V,E);return}e.bindTexture(i.TEXTURE_3D,ct.__webglTexture,i.TEXTURE0+E)}function ft(V,E){let ct=n.get(V);if(V.version>0&&ct.__version!==V.version){Ft(ct,V,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture,i.TEXTURE0+E)}let bt={[Pi]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},L={[Ue]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},X={[Au]:i.NEVER,[$c]:i.ALWAYS,[Ru]:i.LESS,[Vc]:i.LEQUAL,[Cu]:i.EQUAL,[Wc]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function Z(V,E){if(E.type===Tn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ae||E.magFilter===Eo||E.magFilter===Kr||E.magFilter===rn||E.minFilter===Ae||E.minFilter===Eo||E.minFilter===Kr||E.minFilter===rn)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,bt[E.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,bt[E.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,bt[E.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,L[E.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ue||E.minFilter!==Kr&&E.minFilter!==rn||E.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let ct=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ut(V,E){let ct=!1;V.__webglInit===void 0&&(V.__webglInit=!0,E.addEventListener("dispose",W),B(E));let pt=E.source,R=d.get(pt);R===void 0&&(R={},d.set(pt,R));let H=O(E);if(H!==V.__cacheKey){R[H]===void 0&&(R[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ct=!0),R[H].usedTimes++;let K=R[V.__cacheKey];K!==void 0&&(R[V.__cacheKey].usedTimes--,K.usedTimes===0&&j(E)),V.__cacheKey=H,V.__webglTexture=R[H].texture}return ct}function ot(V,E,ct){return Math.floor(Math.floor(V/ct)/E)}function Tt(V,E,ct,pt){let H=V.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,ct,pt,E.data);else{H.sort((C,Y)=>C.start-Y.start);let K=0;for(let C=1;C<H.length;C++){let Y=H[K],it=H[C],yt=Y.start+Y.count,Mt=ot(it.start,E.width,4),Pt=ot(Y.start,E.width,4);it.start<=yt+1&&Mt===Pt&&ot(it.start+it.count-1,E.width,4)===Mt?Y.count=Math.max(Y.count,it.start+it.count-Y.start):(++K,H[K]=it)}H.length=K+1;let w=e.getParameter(i.UNPACK_ROW_LENGTH),P=e.getParameter(i.UNPACK_SKIP_PIXELS),U=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let C=0,Y=H.length;C<Y;C++){let it=H[C],yt=Math.floor(it.start/4),Mt=Math.ceil(it.count/4),Pt=yt%E.width,zt=Math.floor(yt/E.width),Ht=Mt,At=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,Pt,zt,Ht,At,ct,pt,E.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,w),e.pixelStorei(i.UNPACK_SKIP_PIXELS,P),e.pixelStorei(i.UNPACK_SKIP_ROWS,U)}}function Et(V,E,ct){let pt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=i.TEXTURE_3D);let R=ut(V,E),H=E.source;e.bindTexture(pt,V.__webglTexture,i.TEXTURE0+ct);let K=n.get(H);if(H.version!==K.__version||R===!0){if(e.activeTexture(i.TEXTURE0+ct),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let At=_e.getPrimaries(_e.workingColorSpace),It=E.colorSpace===Bn?null:_e.getPrimaries(E.colorSpace),qt=E.colorSpace===Bn||At===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let P=x(E.image,!1,s.maxTextureSize);P=kt(E,P);let U=r.convert(E.format,E.colorSpace),C=r.convert(E.type),Y=A(E.internalFormat,U,C,E.normalized,E.colorSpace,E.isVideoTexture);Z(pt,E);let it,yt=E.mipmaps,Mt=E.isVideoTexture!==!0,Pt=K.__version===void 0||R===!0,zt=H.dataReady,Ht=T(E,P);if(E.isDepthTexture)Y=y(E.format===Di,E.type),Pt&&(Mt?e.texStorage2D(i.TEXTURE_2D,1,Y,P.width,P.height):e.texImage2D(i.TEXTURE_2D,0,Y,P.width,P.height,0,U,C,null));else if(E.isDataTexture)if(yt.length>0){Mt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Y,yt[0].width,yt[0].height);for(let At=0,It=yt.length;At<It;At++)it=yt[At],Mt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,it.width,it.height,U,C,it.data):e.texImage2D(i.TEXTURE_2D,At,Y,it.width,it.height,0,U,C,it.data);E.generateMipmaps=!1}else Mt?(Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Y,P.width,P.height),zt&&Tt(E,P,U,C)):e.texImage2D(i.TEXTURE_2D,0,Y,P.width,P.height,0,U,C,P.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Mt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Y,yt[0].width,yt[0].height,P.depth);for(let At=0,It=yt.length;At<It;At++)if(it=yt[At],E.format!==Ye)if(U!==null)if(Mt){if(zt)if(E.layerUpdates.size>0){let qt=Jc(it.width,it.height,E.format,E.type);for(let wt of E.layerUpdates){let ae=it.data.subarray(wt*qt/it.data.BYTES_PER_ELEMENT,(wt+1)*qt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,wt,it.width,it.height,1,U,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,it.width,it.height,P.depth,U,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,At,Y,it.width,it.height,P.depth,0,it.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Mt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,At,0,0,0,it.width,it.height,P.depth,U,C,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,At,Y,it.width,it.height,P.depth,0,U,C,it.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Mt&&Pt&&e.texStorage2D(i.TEXTURE_2D,Ht,Y,yt[0].width,yt[0].height);for(let At=0,It=yt.length;At<It;At++)it=yt[At],E.format!==Ye?U!==null?Mt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,At,0,0,it.width,it.height,U,it.data):e.compressedTexImage2D(i.TEXTURE_2D,At,Y,it.width,it.height,0,it.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,it.width,it.height,U,C,it.data):e.texImage2D(i.TEXTURE_2D,At,Y,it.width,it.height,0,U,C,it.data)}else if(E.isDataArrayTexture)if(Mt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Y,P.width,P.height,P.depth),zt)if(E.layerUpdates.size>0){let At=Jc(P.width,P.height,E.format,E.type);for(let It of E.layerUpdates){let qt=P.data.subarray(It*At/P.data.BYTES_PER_ELEMENT,(It+1)*At/P.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,P.width,P.height,1,U,C,qt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,U,C,P.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,P.width,P.height,P.depth,0,U,C,P.data);else if(E.isData3DTexture)Mt?(Pt&&e.texStorage3D(i.TEXTURE_3D,Ht,Y,P.width,P.height,P.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,U,C,P.data)):e.texImage3D(i.TEXTURE_3D,0,Y,P.width,P.height,P.depth,0,U,C,P.data);else if(E.isFramebufferTexture){if(Pt)if(Mt)e.texStorage2D(i.TEXTURE_2D,Ht,Y,P.width,P.height);else{let At=P.width,It=P.height;for(let qt=0;qt<Ht;qt++)e.texImage2D(i.TEXTURE_2D,qt,Y,At,It,0,U,C,null),At>>=1,It>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let At=i.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),P.parentNode!==At){At.appendChild(P),c.add(E),At.onpaint=It=>{let qt=It.changedElements;for(let wt of c)qt.includes(wt.image)&&(wt.needsUpdate=!0)},At.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,P);else{let qt=i.RGBA,wt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,wt,ae,P)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(Mt&&Pt){let At=Nt(yt[0]);e.texStorage2D(i.TEXTURE_2D,Ht,Y,At.width,At.height)}for(let At=0,It=yt.length;At<It;At++)it=yt[At],Mt?zt&&e.texSubImage2D(i.TEXTURE_2D,At,0,0,U,C,it):e.texImage2D(i.TEXTURE_2D,At,Y,U,C,it);E.generateMipmaps=!1}else if(Mt){if(Pt){let At=Nt(P);e.texStorage2D(i.TEXTURE_2D,Ht,Y,At.width,At.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,U,C,P)}else e.texImage2D(i.TEXTURE_2D,0,Y,U,C,P);b(E)&&E.mipmapsAutoUpdate===!0&&_(pt),K.__version=H.version,E.onUpdate&&E.onUpdate(E)}V.__version=E.version}function Ft(V,E,ct){if(E.image.length!==6)return;let pt=ut(V,E),R=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+ct);let H=n.get(R);if(R.version!==H.__version||pt===!0){e.activeTexture(i.TEXTURE0+ct);let K=_e.getPrimaries(_e.workingColorSpace),w=E.colorSpace===Bn?null:_e.getPrimaries(E.colorSpace),P=E.colorSpace===Bn||K===w?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);let U=E.isCompressedTexture||E.image[0].isCompressedTexture,C=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let wt=0;wt<6;wt++)!U&&!C?Y[wt]=x(E.image[wt],!0,s.maxCubemapSize):Y[wt]=C?E.image[wt].image:E.image[wt],Y[wt]=kt(E,Y[wt]);let it=Y[0],yt=r.convert(E.format,E.colorSpace),Mt=r.convert(E.type),Pt=A(E.internalFormat,yt,Mt,E.normalized,E.colorSpace),zt=E.isVideoTexture!==!0,Ht=H.__version===void 0||pt===!0,At=R.dataReady,It=T(E,it);Z(i.TEXTURE_CUBE_MAP,E);let qt;if(E.isDepthTexture){if(Pt=y(E.format===Di,E.type),Ht)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pt,it.width,it.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Pt,it.width,it.height,0,yt,Mt,null)}else if(U){zt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Pt,it.width,it.height);for(let wt=0;wt<6;wt++){qt=Y[wt].mipmaps;for(let ae=0;ae<qt.length;ae++){let le=qt[ae];E.format!==Ye?yt!==null?zt?At&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,0,0,le.width,le.height,yt,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,Pt,le.width,le.height,0,le.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,0,0,le.width,le.height,yt,Mt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae,Pt,le.width,le.height,0,yt,Mt,le.data)}}}else{if(qt=E.mipmaps,zt&&Ht){qt.length>0&&It++;let wt=Nt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Pt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(C){zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Y[wt].width,Y[wt].height,yt,Mt,Y[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Pt,Y[wt].width,Y[wt].height,0,yt,Mt,Y[wt].data);for(let ae=0;ae<qt.length;ae++){let De=qt[ae].image[wt].image;zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,0,0,De.width,De.height,yt,Mt,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,Pt,De.width,De.height,0,yt,Mt,De.data)}}else{zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,yt,Mt,Y[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Pt,yt,Mt,Y[wt]);for(let ae=0;ae<qt.length;ae++){let le=qt[ae];zt?At&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,0,0,yt,Mt,le.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ae+1,Pt,yt,Mt,le.image[wt])}}}b(E)&&E.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),H.__version=R.version,E.onUpdate&&E.onUpdate(E)}V.__version=E.version}function Dt(V,E,ct,pt,R,H){let K=r.convert(ct.format,ct.colorSpace),w=r.convert(ct.type),P=A(ct.internalFormat,K,w,ct.normalized,ct.colorSpace),U=n.get(E),C=n.get(ct);if(C.__renderTarget=E,!U.__hasExternalTextures){let Y=Math.max(1,E.width>>H),it=Math.max(1,E.height>>H);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,H,P,Y,it,E.depth,0,K,w,null):e.texImage2D(R,H,P,Y,it,0,K,w,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,R,C.__webglTexture,0,Bt(E)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,R,C.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(V,E,ct){if(i.bindRenderbuffer(i.RENDERBUFFER,V),E.depthBuffer){let pt=E.depthTexture,R=pt&&pt.isDepthTexture?pt.type:null,H=y(E.stencilBuffer,R),K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),H,E.width,E.height):ct?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),H,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,H,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}else{let pt=E.textures;for(let R=0;R<pt.length;R++){let H=pt[R],K=r.convert(H.format,H.colorSpace),w=r.convert(H.type),P=A(H.internalFormat,K,w,H.normalized,H.colorSpace);vt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),P,E.width,E.height):ct?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),P,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,P,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(V,E,ct){let pt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let R=n.get(E.depthTexture);R.__renderTarget=E;let H=pt?E.depthTexture.image[0]:E.depthTexture.image;(!R.__webglTexture||H.width!==E.width||H.height!==E.height)&&(H.width=E.width,H.height=E.height,E.depthTexture.needsUpdate=!0),pt?ft(E.depthTexture,0):nt(E.depthTexture,0);let K=R.__webglTexture,w=Bt(E),P=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+ct:i.TEXTURE_2D,U=E.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ii)vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,P,K,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,U,P,K,0);else if(E.depthTexture.format===Di)vt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,P,K,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,U,P,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(V){let E=n.get(V),ct=V.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==V.depthTexture){let pt=V.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){let R=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",R)};pt.addEventListener("dispose",R),E.__depthDisposeCallback=R}E.__boundDepthTexture=pt}if(V.depthTexture&&!E.__autoAllocateDepthBuffer)if(ct)for(let pt=0;pt<6;pt++)Wt(E.__webglFramebuffer[pt],V,pt);else V.texture.mipmaps.length>0?Wt(E.__webglFramebuffer[0],V,0):Wt(E.__webglFramebuffer,V,0);else if(ct){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=i.createRenderbuffer(),ne(E.__webglDepthbuffer[pt],V,!1);else{let R=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,H)}}else if(V.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ne(E.__webglDepthbuffer,V,!1);else{let R=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,H)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(V,E,ct){let pt=n.get(V);E!==void 0&&Dt(pt.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ct!==void 0&&Rt(V)}function Ut(V){let E=V.texture,ct=n.get(V),pt=n.get(E);V.addEventListener("dispose",J),B(V);let R=V.textures,H=V.isWebGLCubeRenderTarget===!0,K=R.length>1;if(K||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=E.version,a.memory.textures++),H){ct.__webglFramebuffer=[];for(let w=0;w<6;w++)if(E.mipmaps.length>0){ct.__webglFramebuffer[w]=[];for(let P=0;P<E.mipmaps.length;P++)ct.__webglFramebuffer[w][P]=i.createFramebuffer()}else ct.__webglFramebuffer[w]=i.createFramebuffer()}else{if(E.mipmaps.length>0){ct.__webglFramebuffer=[];for(let w=0;w<E.mipmaps.length;w++)ct.__webglFramebuffer[w]=i.createFramebuffer()}else ct.__webglFramebuffer=i.createFramebuffer();if(K)for(let w=0,P=R.length;w<P;w++){let U=n.get(R[w]);U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture(),a.memory.textures++)}if(V.samples>0&&vt(V)===!1){ct.__webglMultisampledFramebuffer=i.createFramebuffer(),ct.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer);for(let w=0;w<R.length;w++){let P=R[w];ct.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ct.__webglColorRenderbuffer[w]);let U=r.convert(P.format,P.colorSpace),C=r.convert(P.type),Y=A(P.internalFormat,U,C,P.normalized,P.colorSpace,V.isXRRenderTarget===!0),it=Bt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Y,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,ct.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(ct.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(ct.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,E);for(let w=0;w<6;w++)if(E.mipmaps.length>0)for(let P=0;P<E.mipmaps.length;P++)Dt(ct.__webglFramebuffer[w][P],V,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,P);else Dt(ct.__webglFramebuffer[w],V,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);b(E)?_(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(K){for(let w=0,P=R.length;w<P;w++){let U=R[w],C=n.get(U),Y=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Y=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,C.__webglTexture),Z(Y,U),Dt(ct.__webglFramebuffer,V,U,i.COLOR_ATTACHMENT0+w,Y,0),b(U)&&_(Y)}e.unbindTexture()}else{let w=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(w=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,pt.__webglTexture),Z(w,E),E.mipmaps.length>0)for(let P=0;P<E.mipmaps.length;P++)Dt(ct.__webglFramebuffer[P],V,E,i.COLOR_ATTACHMENT0,w,P);else Dt(ct.__webglFramebuffer,V,E,i.COLOR_ATTACHMENT0,w,0);b(E)?_(w):E.mipmaps.length>0&&i.texParameteri(w,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}V.depthBuffer&&Rt(V)}function st(V){let E=V.textures;for(let ct=0,pt=E.length;ct<pt;ct++){let R=E[ct];if(b(R)&&R.mipmapsAutoUpdate===!0){let H=S(V),K=n.get(R).__webglTexture;e.bindTexture(H,K),_(H),e.unbindTexture()}}}let Vt=[];function St(V){if(V.samples>0){if(vt(V)===!1){let E=V.textures,ct=V.width,pt=V.height,R=i.COLOR_BUFFER_BIT,H=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(V),w=E.length>1;if(w)for(let U=0;U<E.length;U++)e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),V.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let U=0;U<E.length;U++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[U]);let C=n.get(E[U]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,ct,pt,0,0,ct,pt,R,i.NEAREST),o===!0&&(Vt.length=0,Vt.push(i.COLOR_ATTACHMENT0+U),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&Vt.push(H),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let U=0;U<E.length;U++){e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,K.__webglColorRenderbuffer[U]);let C=n.get(E[U]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&o){let E=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Bt(V){return Math.min(s.maxSamples,V.samples)}function vt(V){let E=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(V){let E=a.render.frame;u.get(V)!==E&&(u.set(V,E),V.update())}function kt(V,E){let ct=V.colorSpace,pt=V.format,R=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ct!==ys&&ct!==Bn&&(_e.getTransfer(ct)===Se?(pt!==Ye||R!==an)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",ct)),E}function Nt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(h.width=V.naturalWidth||V.width,h.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(h.width=V.displayWidth,h.height=V.displayHeight):(h.width=V.width,h.height=V.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=tt,this.setTexture3D=at,this.setTextureCube=ft,this.rebindTextures=Ct,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=vt,this.dispose=$}function _x(i,t){function e(n,s=Bn){let r,a=_e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Ye)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===fi)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Fo||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===ia||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Oo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Wo||n===$o||n===qo||n===Xo||n===Yo||n===Zo||n===jo||n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===sa||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:bx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,h=null,u=null,c=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new ah,m={},x=e.getContextAttributes(),b=null,_=null,S=[],A=[],y=new ie,T=null,B=null,M=new We;M.viewport=new ge;let W=new We;W.viewport=new ge;let J=[M,W],ht=new Mo,N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let nt=S[O];return nt===void 0&&(nt=new er,S[O]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(O){let nt=S[O];return nt===void 0&&(nt=new er,S[O]=nt),nt.getGripSpace()},this.getHand=function(O){let nt=S[O];return nt===void 0&&(nt=new er,S[O]=nt),nt.getHandSpace()};function G(O){let nt=A.indexOf(O.inputSource);if(nt===-1)return;let tt=S[nt];tt!==void 0&&(tt.update(O.inputSource,O.frame,h||a),tt.dispatchEvent({type:O.type,data:O.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",lt);for(let O=0;O<S.length;O++){let nt=A[O];nt!==null&&(A[O]=null,S[O].disconnect(nt))}N=null,$=null,g.reset();for(let O in m)delete m[O];if(t.setRenderTarget(b),d=null,f=null,c=null,s=null,_=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),B!==null){let O=B.camera;O.fov=B.fov,O.zoom=B.zoom,O.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",lt),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,at=null,ft=null;x.depth&&(ft=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?Di:Ii,at=x.stencil?Es:ii);let bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Oe(f.textureWidth,f.textureHeight,{format:Ye,type:an,depthTexture:new ni(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Ye,type:an,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(O){for(let nt=0;nt<O.removed.length;nt++){let tt=O.removed[nt],at=A.indexOf(tt);at>=0&&(A[at]=null,S[at].disconnect(tt))}for(let nt=0;nt<O.added.length;nt++){let tt=O.added[nt],at=A.indexOf(tt);if(at===-1){for(let bt=0;bt<S.length;bt++)if(bt>=A.length){A.push(tt),at=bt;break}else if(A[bt]===null){A[bt]=tt,at=bt;break}if(at===-1)break}let ft=S[at];ft&&ft.connect(tt)}}function Q(O,nt){nt===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(nt.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let nt=O.near,tt=O.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(tt=g.depthFar)),ht.near=W.near=M.near=nt,ht.far=W.far=M.far=tt,(N!==ht.near||$!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),N=ht.near,$=ht.far),ht.layers.mask=O.layers.mask|6,M.layers.mask=ht.layers.mask&-5,W.layers.mask=ht.layers.mask&-3;let at=O.parent,ft=ht.cameras;Q(ht,at);for(let bt=0;bt<ft.length;bt++)Q(ft[bt],at);ht.projectionMatrix.copy(M.projectionMatrix),ht.projectionMatrixInverse.copy(M.projectionMatrixInverse),B===null&&O.isPerspectiveCamera&&(B={camera:O,fov:O.fov,zoom:O.zoom}),F(O,ht,at)};function F(O,nt,tt){tt===null?O.matrix.copy(nt.matrixWorld):(O.matrix.copy(tt.matrixWorld),O.matrix.invert(),O.matrix.multiply(nt.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(nt.projectionMatrix),O.projectionMatrixInverse.copy(nt.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=eo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(O){o=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ht)},this.getCameraTexture=function(O){return m[O]};let I=null;function z(O,nt){if(u=nt.getViewerPose(h||a),p=nt,u!==null){let tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let at=!1;tt.length!==ht.cameras.length&&(ht.cameras.length=0,at=!0);for(let X=0;X<tt.length;X++){let Z=tt[X],ut=null;if(d!==null)ut=d.getViewport(Z);else{let Tt=c.getViewSubImage(f,Z);ut=Tt.viewport,X===0&&(t.setRenderTargetTextures(_,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(_))}let ot=J[X];ot===void 0&&(ot=new We,ot.layers.enable(X),ot.viewport=new ge,J[X]=ot),ot.matrix.fromArray(Z.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Z.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ut.x,ut.y,ut.width,ut.height),X===0&&(ht.matrix.copy(ot.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),at===!0&&ht.cameras.push(ot)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){c=n.getBinding();let X=c.getDepthInformation(tt[0]);X&&X.isValid&&X.texture&&g.init(X,s.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),c=n.getBinding();for(let X=0;X<tt.length;X++){let Z=tt[X].camera;if(Z){let ut=m[Z];ut||(ut=new zr,m[Z]=ut);let ot=c.getCameraImage(Z);ut.sourceTexture=ot}}}}for(let tt=0;tt<S.length;tt++){let at=A[tt],ft=S[tt];at!==null&&ft!==void 0&&ft.update(at,nt,h||a)}I&&I(O,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let k=new cd;k.setAnimationLoop(z),this.setAnimationLoop=function(O){I=O},this.dispose=function(){}}},Mx=new xe,yd=new de;yd.set(-1,0,0,0,1,0,0,0,1);function Sx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Yc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,x,b):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),b=x.envMap,_=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,x,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,t,e,n){let s={},r={};function a(x,b){let _=b.program;n.uniformBlockBinding(x,_,s[x.id])}function l(x,b){let _=s[x.id];_===void 0&&(p(x),_=o(x),s[x.id]=_,x.addEventListener("dispose",g));let S=b.program;n.updateUBOMapping(x,S);let A=t.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function o(x){let b=i.createBuffer(),_=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function h(x){let b=s[x.id],_=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,y=_.length;A<y;A++){let T=_[A];if(Array.isArray(T))for(let B=0,M=T.length;B<M;B++)u(T[B],A,B,S);else u(T,A,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,b,_,S){if(f(x,b,_,S)===!0){let A=x.__offset,y=x.value;if(Array.isArray(y)){let T=0;for(let B=0;B<y.length;B++){let M=y[B],W=v(M,!0);c(M,x.__data,T),T+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else c(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,x.__data)}}function c(x,b,_){typeof x=="number"||typeof x=="boolean"?b[_]=x:x.isMatrix3?(b[_]=x.elements[0],b[_+1]=x.elements[1],b[_+2]=x.elements[2],b[_+3]=0,b[_+4]=x.elements[3],b[_+5]=x.elements[4],b[_+6]=x.elements[5],b[_+7]=0,b[_+8]=x.elements[6],b[_+9]=x.elements[7],b[_+10]=x.elements[8],b[_+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-_),_):x.toArray(b,_)}function f(x,b,_,S){let A=x.value,y=b+"_"+_;if(Array.isArray(A)){S[y]===void 0&&(S[y]=[]);let T=S[y],B=!1;for(let M=0;M<A.length;M++)d(A[M],T,M)===!0&&(B=!0);return B}return d(A,S,y)}function d(x,b,_){if(b[_]===void 0)return typeof x=="number"||typeof x=="boolean"?b[_]=x:ArrayBuffer.isView(x)?b[_]=x.slice():b[_]=x.clone(),!0;{let S=b[_];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return b[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function p(x){let b=x.uniforms,_=0,S=16;for(let y=0,T=b.length;y<T;y++){let B=Array.isArray(b[y])?b[y]:[b[y]];for(let M=0,W=B.length;M<W;M++){let J=B[M],ht=Array.isArray(J.value)?J.value:[J.value],N=Array.isArray(b[y])||Array.isArray(J.value),$=_;for(let j=0,lt=ht.length;j<lt;j++){let Q=ht[j],F=v(Q,N),I=_%S,z=I%F.boundary,k=I+z;_+=z,k!==0&&S-k<F.storage&&(_+=S-k),j===0&&($=_),_+=F.storage}let G=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new G((_-$)/Float32Array.BYTES_PER_ELEMENT),J.__offset=$}}let A=_%S;return A>0&&(_+=S-A),x.__size=_,x.__cache={},this}function v(x,b){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(x){let b=x.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:l,dispose:m}}var Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function Ax(){return pi===null&&(pi=new Sn(Ex,16,16,ns,je),pi.name="DFG_LUT",pi.minFilter=Ae,pi.magFilter=Ae,pi.wrapS=_n,pi.wrapT=_n,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var dl=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Lo,Io,Po]),m=new Set([an,ii,cr,Es,Ro,Co]),x=new Uint32Array(4),b=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,A=null,y=[],T=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,W=!1,J=null,ht=null,N=null,$=null;this._outputColorSpace=Ie;let G=0,j=0,lt=null,Q=-1,F=null,I=new ge,z=new ge,k=null,O=new se(0),nt=0,tt=e.width,at=e.height,ft=1,bt=null,L=null,X=new ge(0,0,tt,at),Z=new ge(0,0,tt,at),ut=!1,ot=new ui,Tt=new ro,Et=!1,Ft=!1,Dt=new xe,ne=new dt,Wt=new ge,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ut(){return lt===null?ft:1}let st=n;function Vt(D,rt){return e.getContext(D,rt)}let St,Bt,vt,Lt,kt,Nt,V,E,ct,pt,R,H,K,w,P,U,C,Y,it,yt,Mt,Pt,zt;try{let D={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),st===null){let rt="webgl2";if(st=Vt(rt,D),st===null)throw Vt(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(D){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ce("WebGLRenderer: "+D.message),D}function Ht(){St=new Og(st),St.init(),Mt=new _x(st,St),Bt=new Ag(st,St,t,Mt),vt=new xx(st,St),Bt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),ht=st.createFramebuffer(),N=st.createFramebuffer(),$=st.createFramebuffer(),Lt=new Hg(st),kt=new sx,Nt=new yx(st,St,vt,kt,Bt,Mt,Lt),V=new kg(M),E=new Vp(st),Pt=new Tg(st,E),ct=new Bg(st,E,Lt,Pt),pt=new Vg(st,ct,E,Pt,Lt),Y=new Gg(st,Bt,Nt),P=new Rg(kt),R=new ix(M,V,St,Bt,Pt,P),H=new Sx(M,kt),K=new ax,w=new dx(St),C=new Sg(M,V,vt,pt,p,o),U=new vx(M,pt,Bt),zt=new Tx(st,Lt,Bt,vt),it=new Eg(st,St,Lt),yt=new zg(st,St,Lt),Lt.programs=R.programs,M.capabilities=Bt,M.extensions=St,M.properties=kt,M.renderLists=K,M.shadowMap=U,M.state=vt,M.info=Lt}v!==an&&(B=new $g(v,e.width,e.height,l,s,r));let At=new oh(M,st);this.xr=At,this.getContext=function(){return st},this.getContextAttributes=function(){return st.getContextAttributes()},this.forceContextLoss=function(){let D=St.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=St.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(D){D!==void 0&&(ft=D,this.setSize(tt,at,!1))},this.getSize=function(D){return D.set(tt,at)},this.setSize=function(D,rt,_t=!0){if(At.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=D,at=rt,e.width=Math.floor(D*ft),e.height=Math.floor(rt*ft),_t===!0&&(e.style.width=D+"px",e.style.height=rt+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,D,rt)},this.getDrawingBufferSize=function(D){return D.set(tt*ft,at*ft).floor()},this.setDrawingBufferSize=function(D,rt,_t){tt=D,at=rt,ft=_t,e.width=Math.floor(D*_t),e.height=Math.floor(rt*_t),this.setViewport(0,0,D,rt)},this.setEffects=function(D){if(v===an){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let rt=0;rt<D.length;rt++)if(D[rt].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(X)},this.setViewport=function(D,rt,_t,mt){D.isVector4?X.set(D.x,D.y,D.z,D.w):X.set(D,rt,_t,mt),vt.viewport(I.copy(X).multiplyScalar(Ut()).round())},this.getScissor=function(D){return D.copy(Z)},this.setScissor=function(D,rt,_t,mt){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,rt,_t,mt),vt.scissor(z.copy(Z).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(D){vt.setScissorTest(ut=D)},this.setOpaqueSort=function(D){bt=D},this.setTransparentSort=function(D){L=D},this.getClearColor=function(D){return D.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(D=!0,rt=!0,_t=!0){let mt=0;if(D){let xt=!1;if(lt!==null){let Gt=lt.texture.format;xt=g.has(Gt)}if(xt){let Gt=lt.texture.type,jt=m.has(Gt),Ot=C.getClearColor(),Yt=C.getClearAlpha(),Qt=Ot.r,he=Ot.g,ve=Ot.b;jt?(x[0]=Qt,x[1]=he,x[2]=ve,x[3]=Yt,st.clearBufferuiv(st.COLOR,0,x)):(b[0]=Qt,b[1]=he,b[2]=ve,b[3]=Yt,st.clearBufferiv(st.COLOR,0,b))}else mt|=st.COLOR_BUFFER_BIT}rt&&(mt|=st.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_t&&(mt|=st.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),mt!==0&&st.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),J=D},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),C.dispose(),K.dispose(),w.dispose(),Nt.dispose(),kt.dispose(),V.dispose(),pt.dispose(),ct.dispose(),Pt.dispose(),zt.dispose(),R.dispose(),At.dispose(),At.removeEventListener("sessionstart",ke),At.removeEventListener("sessionend",us),Ee.stop()};function It(D){D.preventDefault(),qc("WebGLRenderer: Context Lost."),W=!0}function qt(){qc("WebGLRenderer: Context Restored."),W=!1;let D=Lt.autoReset,rt=U.enabled,_t=U.autoUpdate,mt=U.needsUpdate,xt=U.type;Ht(),Lt.autoReset=D,U.enabled=rt,U.autoUpdate=_t,U.needsUpdate=mt,U.type=xt}function wt(D){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ae(D){let rt=D.target;rt.removeEventListener("dispose",ae),le(rt)}function le(D){De(D),kt.remove(D)}function De(D){let rt=kt.get(D).programs;rt!==void 0&&(rt.forEach(function(_t){R.releaseProgram(_t)}),D.isShaderMaterial&&R.releaseShaderCache(D))}this.renderBufferDirect=function(D,rt,_t,mt,xt,Gt){rt===null&&(rt=Rt);let jt=xt.isMesh&&xt.matrixWorld.determinantAffine()<0,Ot=Xl(D,rt,_t,mt,xt);vt.setMaterial(mt,jt);let Yt=_t.index,Qt=1;if(mt.wireframe===!0){if(Yt=ct.getWireframeAttribute(_t),Yt===void 0)return;Qt=2}let he=_t.drawRange,ve=_t.attributes.position,Jt=he.start*Qt,ye=(he.start+he.count)*Qt;Gt!==null&&(Jt=Math.max(Jt,Gt.start*Qt),ye=Math.min(ye,(Gt.start+Gt.count)*Qt)),Yt!==null?(Jt=Math.max(Jt,0),ye=Math.min(ye,Yt.count)):ve!=null&&(Jt=Math.max(Jt,0),ye=Math.min(ye,ve.count));let Ge=ye-Jt;if(Ge<0||Ge===1/0)return;Pt.setup(xt,mt,Ot,_t,Yt);let Pe,Ce=it;if(Yt!==null&&(Pe=E.get(Yt),Ce=yt,Ce.setIndex(Pe)),xt.isMesh)mt.wireframe===!0?(vt.setLineWidth(mt.wireframeLinewidth*Ut()),Ce.setMode(st.LINES)):Ce.setMode(st.TRIANGLES);else if(xt.isLine){let dn=mt.linewidth;dn===void 0&&(dn=1),vt.setLineWidth(dn*Ut()),xt.isLineSegments?Ce.setMode(st.LINES):xt.isLineLoop?Ce.setMode(st.LINE_LOOP):Ce.setMode(st.LINE_STRIP)}else xt.isPoints?Ce.setMode(st.POINTS):xt.isSprite&&Ce.setMode(st.TRIANGLES);if(xt.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Ce.renderMultiDraw(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount);else{let dn=xt._multiDrawStarts,te=xt._multiDrawCounts,yn=xt._multiDrawCount,Me=Yt?E.get(Yt).bytesPerElement:1,fs=kt.get(mt).currentProgram.getUniforms();for(let fn=0;fn<yn;fn++)fs.setValue(st,"_gl_DrawID",fn),Ce.render(dn[fn]/Me,te[fn])}else if(xt.isInstancedMesh)Ce.renderInstances(Jt,Ge,xt.count);else if(_t.isInstancedBufferGeometry){let dn=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,te=Math.min(_t.instanceCount,dn);Ce.renderInstances(Jt,Ge,te)}else Ce.render(Jt,Ge)};function Cn(D,rt,_t,mt){J!==null&&D.isNodeMaterial&&J.setObject(mt,D),Et===!0&&P.setState(D,_t,!1),D.transparent===!0&&D.side===sn&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,Ln(D,rt,mt),D.side=es,D.needsUpdate=!0,Ln(D,rt,mt),D.side=sn):Ln(D,rt,mt)}this.compile=function(D,rt,_t=null){_t===null&&(_t=D),J!==null&&J.renderStart(D,rt,_t),A=w.get(_t),A.init(rt),T.push(A),_t.traverseVisible(function(xt){xt.isLight&&xt.layers.test(rt.layers)&&(A.pushLight(xt),xt.castShadow&&A.pushShadow(xt))}),D!==_t&&D.traverseVisible(function(xt){xt.isLight&&xt.layers.test(rt.layers)&&(A.pushLight(xt),xt.castShadow&&A.pushShadow(xt))}),A.setupLights(),J!==null&&J.updateLights(A.state.lightsArray),Ft=this.localClippingEnabled,Et=P.init(this.clippingPlanes,Ft),Et===!0&&P.setGlobalState(this.clippingPlanes,rt),J!==null&&U.render(A.state.shadowsArray,_t,rt);let mt=new Set;return D.traverse(function(xt){if(!(xt.isMesh||xt.isPoints||xt.isLine||xt.isSprite))return;let Gt=xt.material;if(Gt)if(Array.isArray(Gt))for(let jt=0;jt<Gt.length;jt++){let Ot=Gt[jt];Cn(Ot,_t,rt,xt),mt.add(Ot)}else Cn(Gt,_t,rt,xt),mt.add(Gt)}),A=T.pop(),J!==null&&J.renderEnd(),mt},this.compileAsync=function(D,rt,_t=null){let mt=this.compile(D,rt,_t);return new Promise(xt=>{function Gt(){if(mt.forEach(function(jt){let Yt=kt.get(jt).currentProgram;(Yt===void 0||Yt.isReady())&&mt.delete(jt)}),mt.size===0){xt(D);return}setTimeout(Gt,10)}St.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Pn=null;function Mn(D){Pn&&Pn(D)}function ke(){Ee.stop()}function us(){Ee.start()}let Ee=new cd;Ee.setAnimationLoop(Mn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(D){Pn=D,At.setAnimationLoop(D),D===null?Ee.stop():Ee.start()},At.addEventListener("sessionstart",ke),At.addEventListener("sessionend",us),this.render=function(D,rt){if(rt!==void 0&&rt.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;J!==null&&J.renderStart(D,rt);let _t=At.enabled===!0&&At.isPresenting===!0,mt=B!==null&&(lt===null||_t)&&B.begin(M,lt);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(rt),rt=At.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,rt,lt),A=w.get(D,T.length),A.init(rt),A.state.textureUnits=Nt.getTextureUnits(),T.push(A),Dt.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),rt.isArrayCamera?Tt.setFromArrayCamera(rt):ot.setFromProjectionMatrix(Dt,Vn,rt.reversedDepth),Ft=this.localClippingEnabled,Et=P.init(this.clippingPlanes,Ft),S=K.get(D,y.length),S.init(),y.push(S),this.info.render.frame++,At.enabled===!0&&At.isPresenting===!0){let jt=M.xr.getDepthSensingMesh();jt!==null&&He(jt,rt,-1/0,M.sortObjects)}He(D,rt,0,M.sortObjects),S.finish(),J!==null&&J.updateLights(A.state.lightsArray),M.sortObjects===!0&&S.sort(bt,L),Ct=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ct&&C.addToRenderList(S,D),this.info.autoReset===!0&&this.info.reset(),Et===!0&&P.beginShadows();let xt=A.state.shadowsArray;if(U.render(xt,D,rt),Et===!0&&P.endShadows(),(mt&&B.hasRenderPass())===!1){let jt=S.opaque,Ot=S.transmissive;if(A.setupLights(),rt.isArrayCamera){let Yt=rt.cameras;if(Ot.length>0)for(let Qt=0,he=Yt.length;Qt<he;Qt++){let ve=Yt[Qt];In(jt,Ot,D,ve)}Ct&&C.render(D);for(let Qt=0,he=Yt.length;Qt<he;Qt++){let ve=Yt[Qt];jn(S,D,ve,ve.viewport)}}else Ot.length>0&&In(jt,Ot,D,rt),Ct&&C.render(D),jn(S,D,rt)}lt!==null&&j===0&&(Nt.updateMultisampleRenderTarget(lt),Nt.updateRenderTargetMipmap(lt)),mt&&B.end(M),D.isScene===!0&&D.onAfterRender(M,D,rt),Pt.resetDefaultState(),Q=-1,F=null,T.pop(),T.length>0?(A=T[T.length-1],Nt.setTextureUnits(A.state.textureUnits),Et===!0&&P.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,J!==null&&J.renderEnd()};function He(D,rt,_t,mt){if(D.visible===!1)return;if(D.layers.test(rt.layers)){if(D.isGroup)_t=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(rt);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){let jt=rt.isArrayCamera?Tt:ot;if(!D.frustumCulled||D.intersectsFrustum(jt)){mt&&Wt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Dt);let Ot=pt.update(D),Yt=D.material;Yt.visible&&S.push(D,Ot,Yt,_t,Wt.z,null,rt)}}else if(D.isMesh||D.isLine||D.isPoints){let jt=rt.isArrayCamera?Tt:ot;if(!D.frustumCulled||D.intersectsFrustum(jt)){let Ot=pt.update(D),Yt=D.material;if(mt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Wt.copy(D.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Wt.copy(Ot.boundingSphere.center)),Wt.applyMatrix4(D.matrixWorld).applyMatrix4(Dt)),Array.isArray(Yt)){let Qt=Ot.groups;for(let he=0,ve=Qt.length;he<ve;he++){let Jt=Qt[he],ye=Yt[Jt.materialIndex];ye&&ye.visible&&S.push(D,Ot,ye,_t,Wt.z,Jt,rt)}}else Yt.visible&&S.push(D,Ot,Yt,_t,Wt.z,null,rt)}}}let Gt=D.children;for(let jt=0,Ot=Gt.length;jt<Ot;jt++)He(Gt[jt],rt,_t,mt)}function jn(D,rt,_t,mt){let{opaque:xt,transmissive:Gt,transparent:jt}=D;A.setupLightsView(_t),Et===!0&&P.setGlobalState(M.clippingPlanes,_t),mt&&vt.viewport(I.copy(mt)),xt.length>0&&Oi(xt,rt,_t),Gt.length>0&&Oi(Gt,rt,_t),jt.length>0&&Oi(jt,rt,_t),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function In(D,rt,_t,mt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[mt.id]===void 0){let Jt=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[mt.id]=new Oe(1,1,{generateMipmaps:!0,type:Jt?je:an,minFilter:rn,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Gt=A.state.transmissionRenderTarget[mt.id],jt=mt.viewport||I;Gt.setSize(jt.z*M.transmissionResolutionScale,jt.w*M.transmissionResolutionScale);let Ot=M.getRenderTarget(),Yt=M.getActiveCubeFace(),Qt=M.getActiveMipmapLevel();M.setRenderTarget(Gt),M.getClearColor(O),nt=M.getClearAlpha(),nt<1&&M.setClearColor(16777215,.5),M.clear(),Ct&&C.render(_t);let he=M.toneMapping;M.toneMapping=di;let ve=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),A.setupLightsView(mt),Et===!0&&P.setGlobalState(M.clippingPlanes,mt),Oi(D,_t,mt),Nt.updateMultisampleRenderTarget(Gt),Nt.updateRenderTargetMipmap(Gt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ye=0,Ge=rt.length;ye<Ge;ye++){let Pe=rt[ye],{object:Ce,geometry:dn,material:te,group:yn}=Pe;if(te.side===sn&&Ce.layers.test(mt.layers)){let Me=te.side;te.side=nn,te.needsUpdate=!0,_r(Ce,_t,mt,dn,te,yn),te.side=Me,te.needsUpdate=!0,Jt=!0}}Jt===!0&&(Nt.updateMultisampleRenderTarget(Gt),Nt.updateRenderTargetMipmap(Gt))}M.setRenderTarget(Ot,Yt,Qt),M.setClearColor(O,nt),ve!==void 0&&(mt.viewport=ve),M.toneMapping=he}function Oi(D,rt,_t){let mt=rt.isScene===!0?rt.overrideMaterial:null;for(let xt=0,Gt=D.length;xt<Gt;xt++){let jt=D[xt],{object:Ot,geometry:Yt,group:Qt}=jt,he=jt.material;he.allowOverride===!0&&mt!==null&&(he=mt),Ot.layers.test(_t.layers)&&_r(Ot,rt,_t,Yt,he,Qt)}}function _r(D,rt,_t,mt,xt,Gt){J!==null&&xt.isNodeMaterial&&J.setObject(D,xt),D.onBeforeRender(M,rt,_t,mt,xt,Gt),D.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),xt.onBeforeRender(M,rt,_t,mt,D,Gt),xt.transparent===!0&&xt.side===sn&&xt.forceSinglePass===!1?(xt.side=nn,xt.needsUpdate=!0,M.renderBufferDirect(_t,rt,mt,xt,D,Gt),xt.side=es,xt.needsUpdate=!0,M.renderBufferDirect(_t,rt,mt,xt,D,Gt),xt.side=sn):M.renderBufferDirect(_t,rt,mt,xt,D,Gt),D.onAfterRender(M,rt,_t,mt,xt,Gt)}function br(D){let rt=0;for(let _t of D)_t.texture!==null&&rt++;return rt}function Ln(D,rt,_t){rt.isScene!==!0&&(rt=Rt);let mt=kt.get(D),xt=A.state.lights,Gt=A.state.shadowsArray,jt=xt.state.version,Ot=R.getParameters(D,xt.state,Gt,rt,_t,A.state.lightProbeGridArray),Yt=R.getProgramCacheKey(Ot),Qt=mt.programs;mt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?rt.environment:null,mt.fog=rt.fog;let he=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;mt.envMap=V.get(D.envMap||mt.environment,he),mt.envMapRotation=mt.environment!==null&&D.envMap===null?rt.environmentRotation:D.envMapRotation,Qt===void 0&&(D.addEventListener("dispose",ae),Qt=new Map,mt.programs=Qt,mt.programVariants=new Map);let ve=Qt.get(Yt);if(ve!==void 0){if(mt.currentProgram===ve&&mt.lightsStateVersion===jt)return zi(D,Ot),ve}else Ot.uniforms=R.getUniforms(D),J!==null&&D.isNodeMaterial&&J.build(D,_t,Ot),D.onBeforeCompile(Ot,M),ve=R.acquireProgram(Ot,Yt),Qt.set(Yt,ve),mt.uniforms=Ot.uniforms;let Jt=mt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Jt.clippingPlanes=P.uniform),zi(D,Ot),mt.needsLights=Xt(D),mt.lightsStateVersion=jt,mt.needsLights&&(Jt.ambientLightColor.value=xt.state.ambient,Jt.lightProbe.value=xt.state.probe,Jt.sunLights.value=xt.state.sun,Jt.sunLightShadows.value=xt.state.sunShadow,Jt.directionalLights.value=xt.state.directional,Jt.directionalLightShadows.value=xt.state.directionalShadow,Jt.spotLights.value=xt.state.spot,Jt.spotLightShadows.value=xt.state.spotShadow,Jt.rectAreaLights.value=xt.state.rectArea,Jt.ltc_1.value=xt.state.rectAreaLTC1,Jt.ltc_2.value=xt.state.rectAreaLTC2,Jt.pointLights.value=xt.state.point,Jt.pointLightShadows.value=xt.state.pointShadow,Jt.hemisphereLights.value=xt.state.hemi,Jt.sunShadowMatrix.value=xt.state.sunShadowMatrix,Jt.sunShadowCascade.value=xt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=xt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=xt.state.spotLightMatrix,Jt.spotLightMap.value=xt.state.spotLightMap,Jt.pointShadowMatrix.value=xt.state.pointShadowMatrix),mt.numLightProbeGrids=br(A.state.lightProbeGridArray),mt.currentProgram=ve,mt.uniformsList=null,ve}function Bi(D,rt,_t,mt,xt){let Gt=kt.get(D),jt=Gt.currentProgram.id+","+mt+","+xt,Ot=Gt.programVariants.get(jt);return Ot===void 0?(Ot=Ln(D,rt,_t),Gt.programVariants.set(jt,Ot)):(Gt.currentProgram=Ot,Gt.uniformsList=null,Gt.outputColorSpace=mt,Gt.toneMapping=xt),Ot}function ds(D){if(D.uniformsList===null){let rt=D.currentProgram.getUniforms();D.uniformsList=hr.seqWithValue(rt.seq,D.uniforms)}return D.uniformsList}function zi(D,rt){let _t=kt.get(D);_t.outputColorSpace=rt.outputColorSpace,_t.batching=rt.batching,_t.batchingColor=rt.batchingColor,_t.instancing=rt.instancing,_t.instancingColor=rt.instancingColor,_t.instancingMorph=rt.instancingMorph,_t.skinning=rt.skinning,_t.morphTargets=rt.morphTargets,_t.morphNormals=rt.morphNormals,_t.morphColors=rt.morphColors,_t.morphTargetsCount=rt.morphTargetsCount,_t.numClippingPlanes=rt.numClippingPlanes,_t.numIntersection=rt.numClipIntersection,_t.vertexAlphas=rt.vertexAlphas,_t.vertexTangents=rt.vertexTangents,_t.toneMapping=rt.toneMapping}function Xl(D,rt,_t,mt,xt){rt.isScene!==!0&&(rt=Rt),Nt.resetTextureUnits();let Gt=rt.fog,jt=mt.isMeshStandardMaterial||mt.isMeshLambertMaterial||mt.isMeshPhongMaterial?rt.environment:null,Ot=lt===null?M.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:_e.workingColorSpace,Yt=mt.isMeshStandardMaterial||mt.isMeshLambertMaterial&&!mt.envMap||mt.isMeshPhongMaterial&&!mt.envMap,Qt=V.get(mt.envMap||jt,Yt),he=mt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ve=!!_t.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),Jt=!!_t.morphAttributes.position,ye=!!_t.morphAttributes.normal,Ge=!!_t.morphAttributes.color,Pe=di;mt.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Pe=M.toneMapping);let Ce=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,te=kt.get(mt),yn=A.state.lights;if(Et===!0&&(Ft===!0||D!==F)){let Fe=D===F&&mt.id===Q;P.setState(mt,D,Fe)}let Me=!1,fs=!1;mt.version===te.__version?te.needsLights&&te.lightsStateVersion!==yn.state.version||xt.isBatchedMesh&&te.batching===!1||!xt.isBatchedMesh&&te.batching===!0||xt.isBatchedMesh&&te.batchingColor===!0&&xt._colorsTexture===null||xt.isBatchedMesh&&te.batchingColor===!1&&xt._colorsTexture!==null||xt.isInstancedMesh&&te.instancing===!1||!xt.isInstancedMesh&&te.instancing===!0||xt.isSkinnedMesh&&te.skinning===!1||!xt.isSkinnedMesh&&te.skinning===!0||xt.isInstancedMesh&&te.instancingColor===!0&&xt.instanceColor===null||xt.isInstancedMesh&&te.instancingColor===!1&&xt.instanceColor!==null||xt.isInstancedMesh&&te.instancingMorph===!0&&xt.morphTexture===null||xt.isInstancedMesh&&te.instancingMorph===!1&&xt.morphTexture!==null||te.envMap!==Qt||mt.fog===!0&&te.fog!==Gt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==P.numPlanes||te.numIntersection!==P.numIntersection)||te.vertexAlphas!==he||te.vertexTangents!==ve||te.morphTargets!==Jt||te.morphNormals!==ye||te.morphColors!==Ge||te.morphTargetsCount!==dn||te.numLightProbeGrids!==br(A.state.lightProbeGridArray)?Me=!0:(te.outputColorSpace!==Ot||te.toneMapping!==Pe)&&(fs=!0):(Me=!0,te.__version=mt.version);let fn=te.currentProgram;(Me===!0||fs===!0)&&(fn=fs===!0?Bi(mt,rt,xt,Ot,Pe):Ln(mt,rt,xt),J&&mt.isNodeMaterial&&J.onUpdateProgram(mt,fn,te));let wa=!1,Hi=!1,ps=!1,we=fn.getUniforms(),ln=te.uniforms;if(vt.useProgram(fn.program)&&(wa=!0,Hi=!0,ps=!0),mt.id!==Q&&(Q=mt.id,Hi=!0),wa||F!==D){vt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),we.setValue(st,"projectionMatrix",D.projectionMatrix),we.setValue(st,"viewMatrix",D.matrixWorldInverse);let tn=we.map.cameraPosition;tn!==void 0&&tn.setValue(st,ne.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&we.setValue(st,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&we.setValue(st,"isOrthographic",D.isOrthographicCamera===!0),F!==D&&(F=D,Hi=!0,ps=!0)}if(te.needsLights&&(yn.state.sunShadowMap.length>0&&we.setValue(st,"sunShadowMap",yn.state.sunShadowMap,Nt),yn.state.directionalShadowMap.length>0&&we.setValue(st,"directionalShadowMap",yn.state.directionalShadowMap,Nt),yn.state.spotShadowMap.length>0&&we.setValue(st,"spotShadowMap",yn.state.spotShadowMap,Nt),yn.state.pointShadowMap.length>0&&we.setValue(st,"pointShadowMap",yn.state.pointShadowMap,Nt)),xt.isSkinnedMesh){we.setOptional(st,xt,"bindMatrix"),we.setOptional(st,xt,"bindMatrixInverse");let Fe=xt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(st,"boneTexture",Fe.boneTexture,Nt))}xt.isBatchedMesh&&(we.setOptional(st,xt,"batchingTexture"),we.setValue(st,"batchingTexture",xt._matricesTexture,Nt),we.setOptional(st,xt,"batchingIdTexture"),we.setValue(st,"batchingIdTexture",xt._indirectTexture,Nt),we.setOptional(st,xt,"batchingColorTexture"),xt._colorsTexture!==null&&we.setValue(st,"batchingColorTexture",xt._colorsTexture,Nt));let Jn=_t.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Y.update(xt,_t,fn),(Hi||te.receiveShadow!==xt.receiveShadow)&&(te.receiveShadow=xt.receiveShadow,we.setValue(st,"receiveShadow",xt.receiveShadow)),(mt.isMeshStandardMaterial||mt.isMeshLambertMaterial||mt.isMeshPhongMaterial)&&mt.envMap===null&&rt.environment!==null&&(ln.envMapIntensity.value=rt.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Ax()),Hi){if(we.setValue(st,"toneMappingExposure",M.toneMappingExposure),te.needsLights&&wr(ln,ps),Gt&&mt.fog===!0&&H.refreshFogUniforms(ln,Gt),H.refreshMaterialUniforms(ln,mt,ft,at,A.state.transmissionRenderTarget[D.id]),te.needsLights&&te.numLightProbeGrids>0){let Fe=_,tn=0;for(let wi of A.state.lightProbeGridArray)wi.texture!==null&&(Fe.textures[tn]=wi.texture,Fe.min[tn]=wi.boundingBox.min,Fe.max[tn]=wi.boundingBox.max,Fe.resolution[tn]=wi.resolution,tn++);for(let wi in Fe)Fe[wi].length=tn;ln.probesSH.value=Fe.textures,ln.probesMin.value=Fe.min,ln.probesMax.value=Fe.max,ln.probesResolution.value=Fe.resolution}hr.upload(st,ds(te),ln,Nt)}if(mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(hr.upload(st,ds(te),ln,Nt),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&we.setValue(st,"center",xt.center),we.setValue(st,"modelViewMatrix",xt.modelViewMatrix),we.setValue(st,"normalMatrix",xt.normalMatrix),we.setValue(st,"modelMatrix",xt.matrixWorld),mt.uniformsGroups!==void 0){let Fe=mt.uniformsGroups;for(let tn=0,wi=Fe.length;tn<wi;tn++){let Ch=Fe[tn];zt.update(Ch,fn),zt.bind(Ch,fn)}}return fn}function wr(D,rt){D.ambientLightColor.needsUpdate=rt,D.lightProbe.needsUpdate=rt,D.sunLights.needsUpdate=rt,D.sunLightShadows.needsUpdate=rt,D.directionalLights.needsUpdate=rt,D.directionalLightShadows.needsUpdate=rt,D.pointLights.needsUpdate=rt,D.pointLightShadows.needsUpdate=rt,D.spotLights.needsUpdate=rt,D.spotLightShadows.needsUpdate=rt,D.rectAreaLights.needsUpdate=rt,D.hemisphereLights.needsUpdate=rt}function Xt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(D,rt,_t){let mt=kt.get(D);mt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),kt.get(D.texture).__webglTexture=rt,kt.get(D.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:_t,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,rt){let _t=kt.get(D);_t.__webglFramebuffer=rt,_t.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(D,rt=0,_t=0){lt=D,G=rt,j=_t;let mt=null,xt=!1,Gt=!1;if(D){let Ot=kt.get(D);if(Ot.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(st.FRAMEBUFFER,Ot.__webglFramebuffer),I.copy(D.viewport),z.copy(D.scissor),k=D.scissorTest,vt.viewport(I),vt.scissor(z),vt.setScissorTest(k),Q=-1;return}else if(Ot.__webglFramebuffer===void 0)Nt.setupRenderTarget(D);else if(Ot.__hasExternalTextures)Nt.rebindTextures(D,kt.get(D.texture).__webglTexture,kt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let he=D.depthTexture;if(Ot.__boundDepthTexture!==he){if(he!==null&&kt.has(he)&&(D.width!==he.image.width||D.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(D)}}let Yt=D.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Gt=!0);let Qt=kt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qt[rt])?mt=Qt[rt][_t]:mt=Qt[rt],xt=!0):D.samples>0&&Nt.useMultisampledRTT(D)===!1?mt=kt.get(D).__webglMultisampledFramebuffer:Array.isArray(Qt)?mt=Qt[_t]:mt=Qt,I.copy(D.viewport),z.copy(D.scissor),k=D.scissorTest}else I.copy(X).multiplyScalar(ft).floor(),z.copy(Z).multiplyScalar(ft).floor(),k=ut;if(_t!==0&&(mt=ht),vt.bindFramebuffer(st.FRAMEBUFFER,mt)&&vt.drawBuffers(D,mt),vt.viewport(I),vt.scissor(z),vt.setScissorTest(k),xt){let Ot=kt.get(D.texture);st.framebufferTexture2D(st.FRAMEBUFFER,st.COLOR_ATTACHMENT0,st.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot.__webglTexture,_t)}else if(Gt){let Ot=rt;for(let Yt=0;Yt<D.textures.length;Yt++){let Qt=kt.get(D.textures[Yt]);st.framebufferTextureLayer(st.FRAMEBUFFER,st.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,_t,Ot)}}else if(D!==null&&_t!==0){let Ot=kt.get(D.texture);st.framebufferTexture2D(st.FRAMEBUFFER,st.COLOR_ATTACHMENT0,st.TEXTURE_2D,Ot.__webglTexture,_t)}Q=-1};function fe(D){let rt=kt.get(D);return(rt.__readFormat!==D.format||rt.__readType!==D.type)&&(rt.__readFormat=D.format,rt.__readType=D.type,rt.__formatReadable=Bt.textureFormatReadable(D.format),rt.__typeReadable=Bt.textureTypeReadable(D.type)),rt}this.readRenderTargetPixels=function(D,rt,_t,mt,xt,Gt,jt,Ot=0){if(!(D&&D.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt){vt.bindFramebuffer(st.FRAMEBUFFER,Yt);try{let Qt=D.textures[Ot],he=Qt.format,ve=Qt.type;D.textures.length>1&&st.readBuffer(st.COLOR_ATTACHMENT0+Ot);let Jt=fe(Qt);if(Jt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=D.width-mt&&_t>=0&&_t<=D.height-xt&&st.readPixels(rt,_t,mt,xt,Mt.convert(he),Mt.convert(ve),Gt)}finally{let Qt=lt!==null?kt.get(lt).__webglFramebuffer:null;vt.bindFramebuffer(st.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(D,rt,_t,mt,xt,Gt,jt,Ot=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt)if(rt>=0&&rt<=D.width-mt&&_t>=0&&_t<=D.height-xt){vt.bindFramebuffer(st.FRAMEBUFFER,Yt);let Qt=D.textures[Ot],he=Qt.format,ve=Qt.type;D.textures.length>1&&st.readBuffer(st.COLOR_ATTACHMENT0+Ot);let Jt=fe(Qt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=st.createBuffer();st.bindBuffer(st.PIXEL_PACK_BUFFER,ye),st.bufferData(st.PIXEL_PACK_BUFFER,Gt.byteLength,st.STREAM_READ),st.readPixels(rt,_t,mt,xt,Mt.convert(he),Mt.convert(ve),0),st.bindBuffer(st.PIXEL_PACK_BUFFER,null);let Ge=lt!==null?kt.get(lt).__webglFramebuffer:null;vt.bindFramebuffer(st.FRAMEBUFFER,Ge);let Pe=st.fenceSync(st.SYNC_GPU_COMMANDS_COMPLETE,0);return st.flush(),await Fu(st,Pe,4),st.bindBuffer(st.PIXEL_PACK_BUFFER,ye),st.getBufferSubData(st.PIXEL_PACK_BUFFER,0,Gt),st.bindBuffer(st.PIXEL_PACK_BUFFER,null),st.deleteBuffer(ye),st.deleteSync(Pe),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,rt=null,_t=0){let mt=Math.pow(2,-_t),xt=Math.floor(D.image.width*mt),Gt=Math.floor(D.image.height*mt),jt=rt!==null?rt.x:0,Ot=rt!==null?rt.y:0;Nt.setTexture2D(D,0),st.copyTexSubImage2D(st.TEXTURE_2D,_t,0,0,jt,Ot,xt,Gt),vt.unbindTexture()},this.copyTextureToTexture=function(D,rt,_t=null,mt=null,xt=0,Gt=0){let jt,Ot,Yt,Qt,he,ve,Jt,ye,Ge,Pe=D.isCompressedTexture?D.mipmaps[Gt]:D.image;if(_t!==null)jt=_t.max.x-_t.min.x,Ot=_t.max.y-_t.min.y,Yt=_t.isBox3?_t.max.z-_t.min.z:1,Qt=_t.min.x,he=_t.min.y,ve=_t.isBox3?_t.min.z:0;else{let we=Math.pow(2,-xt);jt=Math.floor(Pe.width*we),Ot=Math.floor(Pe.height*we),D.isDataArrayTexture?Yt=Pe.depth:D.isData3DTexture?Yt=Math.floor(Pe.depth*we):Yt=1,Qt=0,he=0,ve=0}mt!==null?(Jt=mt.x,ye=mt.y,Ge=mt.z):(Jt=0,ye=0,Ge=0);let Ce=Mt.convert(rt.format),dn=Mt.convert(rt.type),te;rt.isData3DTexture?(Nt.setTexture3D(rt,0),te=st.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Nt.setTexture2DArray(rt,0),te=st.TEXTURE_2D_ARRAY):(Nt.setTexture2D(rt,0),te=st.TEXTURE_2D),vt.activeTexture(st.TEXTURE0),vt.pixelStorei(st.UNPACK_FLIP_Y_WEBGL,rt.flipY),vt.pixelStorei(st.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),vt.pixelStorei(st.UNPACK_ALIGNMENT,rt.unpackAlignment);let yn=vt.getParameter(st.UNPACK_ROW_LENGTH),Me=vt.getParameter(st.UNPACK_IMAGE_HEIGHT),fs=vt.getParameter(st.UNPACK_SKIP_PIXELS),fn=vt.getParameter(st.UNPACK_SKIP_ROWS),wa=vt.getParameter(st.UNPACK_SKIP_IMAGES);vt.pixelStorei(st.UNPACK_ROW_LENGTH,Pe.width),vt.pixelStorei(st.UNPACK_IMAGE_HEIGHT,Pe.height),vt.pixelStorei(st.UNPACK_SKIP_PIXELS,Qt),vt.pixelStorei(st.UNPACK_SKIP_ROWS,he),vt.pixelStorei(st.UNPACK_SKIP_IMAGES,ve);let Hi=D.isDataArrayTexture||D.isData3DTexture,ps=rt.isDataArrayTexture||rt.isData3DTexture;if(D.isDepthTexture){let we=kt.get(D),ln=kt.get(rt),Jn=kt.get(we.__renderTarget),Fe=kt.get(ln.__renderTarget);vt.bindFramebuffer(st.READ_FRAMEBUFFER,Jn.__webglFramebuffer),vt.bindFramebuffer(st.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let tn=0;tn<Yt;tn++)Hi&&(st.framebufferTextureLayer(st.READ_FRAMEBUFFER,st.COLOR_ATTACHMENT0,kt.get(D).__webglTexture,xt,ve+tn),st.framebufferTextureLayer(st.DRAW_FRAMEBUFFER,st.COLOR_ATTACHMENT0,kt.get(rt).__webglTexture,Gt,Ge+tn)),st.blitFramebuffer(Qt,he,Qt+jt,he+Ot,Jt,ye,Jt+jt,ye+Ot,st.DEPTH_BUFFER_BIT,st.NEAREST);vt.bindFramebuffer(st.READ_FRAMEBUFFER,null),vt.bindFramebuffer(st.DRAW_FRAMEBUFFER,null)}else if(xt!==0||D.isRenderTargetTexture||kt.has(D)){let we=kt.get(D),ln=kt.get(rt);vt.bindFramebuffer(st.READ_FRAMEBUFFER,N),vt.bindFramebuffer(st.DRAW_FRAMEBUFFER,$);for(let Jn=0;Jn<Yt;Jn++)Hi?st.framebufferTextureLayer(st.READ_FRAMEBUFFER,st.COLOR_ATTACHMENT0,we.__webglTexture,xt,ve+Jn):st.framebufferTexture2D(st.READ_FRAMEBUFFER,st.COLOR_ATTACHMENT0,st.TEXTURE_2D,we.__webglTexture,xt),ps?st.framebufferTextureLayer(st.DRAW_FRAMEBUFFER,st.COLOR_ATTACHMENT0,ln.__webglTexture,Gt,Ge+Jn):st.framebufferTexture2D(st.DRAW_FRAMEBUFFER,st.COLOR_ATTACHMENT0,st.TEXTURE_2D,ln.__webglTexture,Gt),xt!==0?st.blitFramebuffer(Qt,he,Qt+jt,he+Ot,Jt,ye,Jt+jt,ye+Ot,st.COLOR_BUFFER_BIT,st.NEAREST):ps?st.copyTexSubImage3D(te,Gt,Jt,ye,Ge+Jn,Qt,he,jt,Ot):st.copyTexSubImage2D(te,Gt,Jt,ye,Qt,he,jt,Ot);vt.bindFramebuffer(st.READ_FRAMEBUFFER,null),vt.bindFramebuffer(st.DRAW_FRAMEBUFFER,null)}else ps?D.isDataTexture||D.isData3DTexture?st.texSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,dn,Pe.data):rt.isCompressedArrayTexture?st.compressedTexSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,Pe.data):st.texSubImage3D(te,Gt,Jt,ye,Ge,jt,Ot,Yt,Ce,dn,Pe):D.isDataTexture?st.texSubImage2D(st.TEXTURE_2D,Gt,Jt,ye,jt,Ot,Ce,dn,Pe.data):D.isCompressedTexture?st.compressedTexSubImage2D(st.TEXTURE_2D,Gt,Jt,ye,Pe.width,Pe.height,Ce,Pe.data):st.texSubImage2D(st.TEXTURE_2D,Gt,Jt,ye,jt,Ot,Ce,dn,Pe);vt.pixelStorei(st.UNPACK_ROW_LENGTH,yn),vt.pixelStorei(st.UNPACK_IMAGE_HEIGHT,Me),vt.pixelStorei(st.UNPACK_SKIP_PIXELS,fs),vt.pixelStorei(st.UNPACK_SKIP_ROWS,fn),vt.pixelStorei(st.UNPACK_SKIP_IMAGES,wa),Gt===0&&rt.generateMipmaps===!0&&rt.mipmapsAutoUpdate===!0&&st.generateMipmap(te),vt.unbindTexture()},this.initRenderTarget=function(D){kt.get(D).__webglFramebuffer===void 0&&Nt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Nt.setTextureCube(D,0):D.isData3DTexture?Nt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Nt.setTexture2DArray(D,0):Nt.setTexture2D(D,0),vt.unbindTexture()},this.resetState=function(){G=0,j=0,lt=null,vt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ee=63710088e-1,fr=2*Math.PI*ee,gt=Math.PI/180,ss=Math.atan(Math.sinh(Math.PI)),$t=(i,t,e)=>i<t?t:i>e?e:i,Xn=(i,t,e)=>i+(t-i)*e,_d=i=>i*i*(3-2*i),wn=i=>i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI)),rs=(i,t)=>(i+Math.PI)/(2*Math.PI)*2**t,as=(i,t)=>{let e=$t(i,-ss,ss);return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t},gi=(i,t)=>i/2**t*2*Math.PI-Math.PI,zn=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**t))),xn=(i,t,e=[0,0,0])=>{let n=Math.cos(t);return e[0]=n*Math.cos(i),e[1]=n*Math.sin(i),e[2]=Math.sin(t),e},ml=i=>{let t=Math.hypot(i[0],i[1],i[2]);return[Math.atan2(i[1],i[0]),Math.asin($t(i[2]/t,-1,1))]},si=(i,t)=>{let e=xn(i,t),n=[-Math.sin(i),Math.cos(i),0],s=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];return{east:n,north:s,up:e}},hn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],ha=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],pr=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Yn=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],En=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],mr=(i,t,e,n)=>{let s=Math.sin((n-t)/2),r=Math.sin((e-i)/2);return 2*Math.asin(Math.min(1,Math.sqrt(s*s+Math.cos(t)*Math.cos(n)*r*r)))},bd=(i,t,e)=>{let n=hn(i,t),s=hn(i,i)-e*e,r=n*n-s;if(r<0)return-1;let a=Math.sqrt(r),l=-n-a;return l>0?l:-n+a>0?-n+a:-1},An=(i,t,e=4)=>`${Math.abs(i).toFixed(e)}\xB0${i>=0?"N":"S"} ${Math.abs(t).toFixed(e)}\xB0${t>=0?"E":"W"}`,wd=i=>i>=1e5?`${Math.round(i/1e3).toLocaleString("en")} km`:i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)} km`:`${Math.round(i)} m`;var Rs=[],Rx=(i,t)=>{for(let e of Rs){let[n,s,r,a]=e.bbox;if(i<=n||i>=r||t<=s||t>=a)continue;let l=$t((i-n)/(r-n)*e.width-.5,0,e.width-1.001),o=$t((a-t)/(a-s)*e.height-.5,0,e.height-1.001),h=l|0,u=o|0,c=l-h,f=o-u,d=u*e.width+h,p=e.data,v=(p[d]*(1-c)+p[d+1]*c)*(1-f)+(p[d+e.width]*(1-c)+p[d+e.width+1]*c)*f,g=Math.min((i-n)/(r-n),(r-i)/(r-n),(t-s)/(a-s),(a-t)/(a-s));return[v,_d($t(g*12,0,1))]}return null},lh=(i,t,e)=>{if(!Rs.length||i>.5)return i;let n=Rx(t,e);return n&&n[0]<-.5?i+(n[0]-i)*n[1]:i},Md=(i,t)=>{if(!Rs.length)return!1;let e=gi(t.x,t.z)/gt,n=gi(t.x+1,t.z)/gt,s=zn(t.y,t.z)/gt,r=zn(t.y+1,t.z)/gt;if(!Rs.some(({bbox:[l,o,h,u]})=>n>l&&e<h&&s>o&&r<u))return!1;let a=!1;for(let l=0,o=0;l<256;l++){let h=zn(t.y+(l+.5)/256,t.z)/gt;for(let u=0;u<256;u++,o++){let c=i[o];if(c>.5)continue;let f=lh(c,e+(n-e)*(u+.5)/256,h);f!==c&&(i[o]=f,a=!0)}}return a},Sd=i=>{if(!Rs.length||i.z>11)return!1;let t=gi(i.x,i.z)/gt,e=gi(i.x+1,i.z)/gt,n=zn(i.y,i.z)/gt,s=zn(i.y+1,i.z)/gt;return Rs.some(({bbox:[r,a,l,o]})=>e>r&&t<l&&n>a&&s<o)},gl=new Map,Td=(i,t="./")=>(gl.has(i.id)||gl.set(i.id,(async()=>{let e=await fetch(globalThis.__PATCHES__?.[i.file]??t+i.file);if(!e.ok)throw new Error(`patch ${i.id}: HTTP ${e.status}`);let n=await createImageBitmap(await e.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:n.width,height:n.height}):new OffscreenCanvas(n.width,n.height)).getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=r.getImageData(0,0,n.width,n.height).data,l=new Float32Array(n.width*n.height);for(let h=0,u=0;h<l.length;h++,u+=4)l[h]=a[u]*256+a[u+1]+a[u+2]/256-32768;let o={...i,width:n.width,height:n.height,data:l};return n.close?.(),Rs.push(o),o})().catch(e=>(gl.delete(i.id),console.warn(e.message),null))),gl.get(i.id));var ch=20037508342789244e-9,hh=0,Cx=1,Zn=2,Ed=3,Ad=4,Px=(i,t,e,n)=>{if(i.url.includes("{bbox}")){let r=2*ch/2**t,a=-ch+e*r,l=ch-n*r;return i.url.replace("{bbox}",`${a},${l-r},${a+r},${l}`).replaceAll("{size}",String(i.size??256))}let s=i.subdomains?i.subdomains[(e+n)%i.subdomains.length]:"";return i.url.replace("{s}",s).replace("{z}",t).replace("{x}",e).replace("{y}",n)},Ix=(i,t)=>{if(t.z<(i.minZoom??0)||i.every>1&&(t.z-(i.minZoom??0))%i.every)return!1;let e=i.bbox;return e?t.east>e[0]&&t.west<e[2]&&t.north>e[1]&&t.south<e[3]:!0},uh,vl,Lx=i=>(uh||(uh=typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256),vl=uh.getContext("2d",{willReadFrequently:!0})),vl.globalCompositeOperation="copy",vl.drawImage(i,0,0,256,256),vl.getImageData(0,0,256,256).data),Rd=10,ze=258,Dx=(i,t)=>{let e=i.parent;for(;e&&e.z>Rd;)e=e.parent;for(;e;e=e.parent)if(e.slots[t]?.state===Zn)return e;return null},Nx=i=>{let t=Yi.fromHalfFloat,e=new Float32Array(65536);for(let s=0,r=0;s<256;s++)for(let a=0;a<256;a++,r++)e[r]=i.base+t(i.heights[(s+1)*ze+a+1]);for(let s=0;s<4;s++){let r=Float32Array.from(e),a=0;for(let l=0;l<256;l++)for(let o=0;o<256;o++){let h=l*256+o;if(e[h]<-.5)continue;let u=0,c=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let p=o+d,v=l+f;if(p<0||v<0||p>255||v>255)continue;let g=e[v*256+p];g<-.5&&(u+=g,c++)}c&&(r[h]=u/c,a++)}if(e=r,!a)break}let n=new Float32Array(ze*ze);for(let s=-1;s<=256;s++){let r=s<0?0:s>255?255:s,a=s<0?1:s>255?254:s;for(let l=-1;l<=256;l++){let o=l<0?0:l>255?255:l,h=l<0?1:l>255?254:l;n[(s+1)*ze+l+1]=o===h&&r===a?e[s*256+l]:2*e[r*256+o]-e[a*256+h]}}return n},Fx=(i,t,e)=>{let n=Lx(i),s=256*256,r=new Float32Array(s);for(let v=0,g=0;v<s;v++,g+=4)r[v]=n[g]*256+n[g+1]+n[g+2]/256-32768;let a=0;if(t.z>Rd){let v=Dx(t,e),g=v?.slots[e],m=v?2**(t.z-v.z):1,x=v?(t.x-v.x*m)*256:0,b=v?(t.y-v.y*m)*256:0,_=null;for(let S=0,A=0;S<256;S++)for(let y=0;y<256;y++,A++){let T=r[A];if(T>.001){a++;continue}if(!g){r[A]=T<-11100?0:T;continue}_??=g.seaWide??=Nx(g);let B=(x+y+.5)/m+.5,M=(b+S+.5)/m+.5,W=B|0,J=M|0,ht=B-W,N=M-J,$=J*ze+W,G=(_[$]*(1-ht)+_[$+1]*ht)*(1-N)+(_[$+ze]*(1-ht)+_[$+ze+1]*ht)*N;r[A]=G<-.5?G:T<-11100?-.5:Math.min(T,-.5)}}else a=1;Md(r,t),Sd(t)&&(a=Math.max(a,1));let l=1/0,o=-1/0,h=0;for(let v=0;v<s;v++){let g=r[v];g<l&&(l=g),g>o&&(o=g),h+=g}let u=Math.round(h/s),c=new Uint16Array(ze*ze),f=Yi.toHalfFloat,d=(v,g)=>r[g*256+v];for(let v=-1;v<=256;v++){let g=v<0?0:v>255?255:v,m=v<0?1:v>255?254:v;for(let x=-1;x<=256;x++){let b=x<0?0:x>255?255:x,_=x<0?1:x>255?254:x,S=b===_&&g===m?d(x,v):2*d(b,g)-d(_,m);c[(v+1)*ze+x+1]=f(S-u)}}let p=new Sn(c,ze,ze,fi,je);return p.internalFormat="R16F",p.magFilter=p.minFilter=Ae,p.wrapS=p.wrapT=_n,p.generateMipmaps=!1,p.needsUpdate=!0,{tex:p,heights:c,base:u,min:l,max:o,allSea:a===0}},Ux=(i,t)=>{let e=new cn(i);return e.colorSpace=Ie,e.flipY=!1,e.premultiplyAlpha=!1,e.wrapS=e.wrapT=_n,e.minFilter=rn,e.magFilter=Ae,e.anisotropy=t,e.generateMipmaps=!0,e.needsUpdate=!0,e},xl=class{constructor({maxActive:t=16,anisotropy:e=4}={}){this.maxActive=t,this.anisotropy=e,this.queue=[],this.active=new Set,this.decodeBudget=5,this.pendingDecodes=[],this.loaded=0,this.failed=0,this.onLoad=null}want(t,e,n){let s=t.slots[e.id];return s||(s=t.slots[e.id]={state:Ix(e,t)&&t.z<=e.maxZoom?hh:Ad,tex:null,layer:e,tile:t,priority:0,queued:!1,abort:null},e.kind==="elevation"&&t.parent?.allSea&&(s.state=Ad,t.allSea=!0)),s.priority=n,s.state===hh&&!s.queued&&(s.queued=!0,this.queue.push(s)),s}pump(t){let e=performance.now();for(let s=0;s<this.decodeBudget&&this.pendingDecodes.length&&performance.now()-e<5;s++)this.pendingDecodes.shift()();for(let s of this.active)s.tile.visit<t-30&&s.abort&&s.abort.abort();if(!this.queue.length||(this.queue=this.queue.filter(s=>s.tile.visit>=t-5&&!s.tile.dead?!0:(s.queued=!1,!1)),this.active.size>=this.maxActive))return;this.queue.sort((s,r)=>s.priority-r.priority);let n=new Map;for(let s of this.active)n.set(s.layer.id,(n.get(s.layer.id)??0)+1);for(let s=this.queue.length-1;s>=0&&this.active.size<this.maxActive;s--){let r=this.queue[s],a=n.get(r.layer.id)??0;a>=(r.layer.maxActive??this.maxActive)||(n.set(r.layer.id,a+1),this.queue.splice(s,1),this.start(r))}}start(t){t.queued=!1,t.state=Cx,t.abort=new AbortController,this.active.add(t);let{tile:e,layer:n}=t,s=r=>{this.active.delete(t),t.abort=null,t.state=r,r===Zn&&this.loaded++,r===Ed&&this.failed++,this.onLoad?.(t)};fetch(Px(n,e.z,e.x,e.y),{signal:t.abort.signal,mode:"cors",credentials:"omit",referrerPolicy:"no-referrer"}).then(r=>{if(!r.ok)throw Object.assign(new Error(`HTTP ${r.status}`),{status:r.status});return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(r=>{this.pendingDecodes.push(()=>{if(e.dead)return r.close?.();if(n.kind==="elevation"){let a=Fx(r,e,n.id);r.close?.(),Object.assign(t,a),e.minH=a.min,e.maxH=a.max,e.allSea=a.allSea}else t.tex=Ux(r,this.anisotropy),t.tex.onUpdate=()=>{r.close?.(),t.tex.onUpdate=null};s(Zn)})}).catch(r=>{r.name==="AbortError"?(this.active.delete(t),t.abort=null,t.state=hh):s(Ed)})}get busy(){return this.active.size+this.queue.length+this.pendingDecodes.length}},Cd=i=>{for(let t in i.slots){let e=i.slots[t];e.abort?.abort(),e.tex?.dispose(),e.tex=null,e.heights=null,e.seaWide=null}i.slots={}};var kx=`
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
`,Pd=`
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
`,Id=`
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
`,Ld=`
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

${kx}
${Pd}

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
      // From orbit the sun's glint is one white blot on the ocean, which reads as dirt on the lens: it is kept for views near the sea.
      glint *= mix(1.0, 0.06, smoothstep(3.0e4, 6.0e5, length(uCamPos) - 6.371e6));
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
`,Dd=`
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
`,Nd=`
precision highp float;
in vec3 vRel;
out vec4 outColor;
uniform vec3 uCamPos;
uniform vec3 uSun;
${Pd}
void main() {
  vec3 up = normalize(uCamPos + vRel);
  float mu = dot(up, uSun);
  vec3 col = vec3(0.80, 0.85, 0.90) * (sunTransmit(mu, 0.0) * max(mu, 0.0) + skyLight(mu));
  outColor = vec4(col, 1.0);
}
`,Fd=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ud=`
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
`,kd=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
layout(location = 0) out vec4 outLight;   // scattered light, and the ground distance in alpha
layout(location = 1) out vec4 outThrough; // how much of the background survives
${Ud}
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
`,Od=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tColor;
uniform sampler2D tLight;
uniform sampler2D tThrough;
uniform float uPixAngle;
${Ud}
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
`,Bd=`
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
`,zd=`
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
`,Hd=`
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
`;var gr=2,Ox=[12,17,22],Bx=[[44,35.5,56.5,48.5],[34.9,30,36.2,33.4],[-117.6,35.6,-116.2,37],[-116.4,32.4,-115,33.8],[25.5,28.3,30.3,30.6],[39.5,11,42.8,15],[88.5,42.3,90.5,43.3],[3.3,51.2,7.3,53.6],[5.5,33.5,9,34.8],[136.5,-29.6,138.3,-27.6],[-68.6,-49.8,-67.9,-49.3],[50.9,43.2,52.3,44],[-.6,52.2,.5,52.9]],dh=class i{constructor(t,e,n,s){this.z=t,this.x=e,this.y=n,this.parent=s,this.children=null,this.lon0=gi(e,t),this.lon1=gi(e+1,t),this.latN=zn(n,t),this.latS=zn(n+1,t),this.west=this.lon0/gt,this.east=this.lon1/gt,this.north=this.latN/gt,this.south=this.latS/gt;let r=(this.lon0+this.lon1)/2,a=zn(n+.5,t);this.center=xn(r,a).map(h=>h*ee);let l=0;for(let[h,u]of[[this.lon0,this.latN],[this.lon1,this.latN],[this.lon0,this.latS],[this.lon1,this.latS]]){let c=xn(h,u);l=Math.max(l,Math.hypot(c[0]*ee-this.center[0],c[1]*ee-this.center[1],c[2]*ee-this.center[2]))}this.radius=l,this.minH=s?s.minH:-8e3,this.maxH=s?s.maxH:6e3,this.slots={},this.visit=0,this.geom=null,this.dead=!1,this.dry=null;for(let h of Bx)if(this.east>h[0]&&this.west<h[2]&&this.north>h[1]&&this.south<h[3]){this.dry=[rs(h[0]*gt,t)-e,as(h[3]*gt,t)-n,rs(h[2]*gt,t)-e,as(h[1]*gt,t)-n];break}let o=[];for(let h of Ox){let u=2**(h-t);o.push([e*u%64,n*u%64,u])}this.lattice=o}split(){let{z:t,x:e,y:n}=this;this.children=[new i(t+1,2*e,2*n,this),new i(t+1,2*e+1,2*n,this),new i(t+1,2*e,2*n+1,this),new i(t+1,2*e+1,2*n+1,this)]}},zx=i=>{let t=i+1,e=t*t,n=e+4*t,s=new Float32Array(n*2),r=new Float32Array(n),a=new Uint32Array(4*t);for(let o=0;o<t;o++)for(let h=0;h<t;h++)s[(o*t+h)*2]=h/i,s[(o*t+h)*2+1]=o/i;for(let o=0;o<t;o++)a[o]=o,a[t+o]=i*t+o,a[2*t+o]=o*t,a[3*t+o]=o*t+i;for(let o=0;o<4*t;o++)s[(e+o)*2]=s[a[o]*2],s[(e+o)*2+1]=s[a[o]*2+1],r[e+o]=1;let l=[];for(let o=0;o<i;o++)for(let h=0;h<i;h++){let u=o*t+h,c=u+1,f=u+t,d=f+1;l.push(u,f,c,c,f,d)}for(let o=0;o<4;o++)for(let h=0;h<i;h++){let u=a[o*t+h],c=a[o*t+h+1],f=e+o*t+h,d=f+1;l.push(u,f,c,c,f,d)}return{n:i,side:t,main:e,count:n,edge:a,uv:new Le(s,2),skirt:new Le(r,1),index:new Le(n>65535?new Uint32Array(l):new Uint16Array(l),1)}},Hx=(i,t)=>{let e=new Float32Array(t.count*3),{n,side:s}=t,[r,a,l]=i.center,o=new Float64Array(s),h=new Float64Array(s);for(let c=0;c<s;c++){let f=i.lon0+(i.lon1-i.lon0)*c/n;o[c]=Math.cos(f),h[c]=Math.sin(f)}for(let c=0;c<s;c++){let f=zn(i.y+c/n,i.z),d=Math.cos(f)*ee,p=Math.sin(f)*ee;for(let v=0;v<s;v++){let g=(c*s+v)*3;e[g]=d*o[v]-r,e[g+1]=d*h[v]-a,e[g+2]=p-l}}for(let c=0;c<4*s;c++){let f=t.edge[c]*3,d=(t.main+c)*3;e[d]=e[f],e[d+1]=e[f+1],e[d+2]=e[f+2]}let u=new Be;return u.setAttribute("position",new Le(e,3)),u.setAttribute("uv",t.uv),u.setAttribute("skirt",t.skirt),u.setIndex(t.index),u},Gd=(i,t,e,n=255)=>{let s=new Sn(new Uint8Array([i,t,e,n]),1,1,Ye);return s.needsUpdate=!0,s},yl=class{constructor({renderer:t,scene:e,segments:n=64,threshold:s=340,budget:r=380,layers:a}){this.scene=e,this.grid=zx(n),this.threshold=s,this.budget=r,this.loader=new xl({anisotropy:Math.min(8,t.capabilities.getMaxAnisotropy())}),this.layers=a,this.maxZ=17,this.frame=0,this.count=0,this.roots=[];for(let l=0;l<2**gr;l++)for(let o=0;o<2**gr;o++)this.roots.push(new dh(gr,o,l,null));this.count=this.roots.length,this.drawn=[],this.pool=[],this.group=new $e,e.add(this.group),this.blank=Gd(20,30,45),this.blankElev=(()=>{let l=new Sn(new Uint16Array([0]),1,1,fi,je);return l.internalFormat="R16F",l.needsUpdate=!0,l})(),this.black=Gd(0,0,0,0),this.shared={uCamPos:{value:new dt},uSun:{value:new dt(1,0,0)},uSea:{value:0},uWater:{value:1},uSeaClamp:{value:0},uExag:{value:1},uTime:{value:0},uPixAngle:{value:.001},uLens:{value:0},uOverMix:{value:1},uOverMode:{value:0},uBathy:{value:.45},uShadows:{value:1},uContours:{value:0},uNightOn:{value:1},uPad:{value:new ge(0,0,0,0)},uPadH:{value:0},tDecal:{value:this.black},tDecalFar:{value:this.black},uDecalOn:{value:0},tHeat:{value:this.black},uHeat:{value:0},uHeatLod:{value:0},uScan:{value:new ge(0,0,1,0)},uScanA:{value:0},uDecalO:{value:new dt},uDecalU:{value:new dt},uDecalV:{value:new dt}},this.frustum=new ui,this.caps=this.makeCaps(),this.stats={tiles:0,depth:0}}makeMaterial(){let t={...this.shared,uCenter:{value:new dt},uCenterRel:{value:new dt},uSkirt:{value:0},tElev:{value:this.blankElev},uElevUV:{value:new ge(1,1,0,0)},uElevBase:{value:0},uElevMpp:{value:1},tFar:{value:this.blankElev},uFarUV:{value:new ge(1,1,0,0)},uFarBase:{value:0},uFarMpp:{value:1},uFarTop:{value:9e3},tBase:{value:this.blank},uBaseUV:{value:new ge(1,1,0,0)},uBaseTexels:{value:256},tGlobe:{value:this.blank},uGlobeUV:{value:new ge(1,1,0,0)},uGlobeOn:{value:0},tOver:{value:this.black},uOverUV:{value:new ge(1,1,0,0)},uOverOn:{value:0},tNight:{value:this.black},uNightUV:{value:new ge(1,1,0,0)},uDry:{value:new ge(2,2,-1,-1)},uLat:{value:[new ie,new ie,new ie]},uLatS:{value:[1,1,1]}};return new Xe({uniforms:t,vertexShader:Id,fragmentShader:Ld,glslVersion:is,side:sn})}makeCaps(){let n=[];for(let s of[1,-1]){let r=new Float32Array(2307),a=new Float32Array(769),l=[0,0,s*ee];for(let d=0;d<8;d++){let p=s*(ss+(Math.PI/2-ss)*d/8);for(let v=0;v<96;v++){let g=xn(v/96*2*Math.PI-Math.PI,p),m=(d*96+v)*3;r[m]=g[0]*ee,r[m+1]=g[1]*ee,r[m+2]=g[2]*ee-l[2]}}let o=[];for(let d=0;d<7;d++)for(let p=0;p<96;p++){let v=d*96+p,g=d*96+(p+1)%96,m=v+96,x=g+96;o.push(v,g,m,g,x,m)}let h=768;for(let d=0;d<96;d++)o.push(672+d,672+(d+1)%96,h);let u=new Be;u.setAttribute("position",new Le(r,3)),u.setAttribute("height",new Le(a,1)),u.setIndex(o);let c=new Xe({uniforms:{uCamPos:this.shared.uCamPos,uSun:this.shared.uSun,uExag:this.shared.uExag,uCenter:{value:new dt(...l)},uCenterRel:{value:new dt}},vertexShader:Dd,fragmentShader:Nd,glslVersion:is,side:sn}),f=new pe(u,c);f.frustumCulled=!1,f.position.set(...l),f.updateMatrixWorld(),this.scene.add(f),n.push({mesh:f,sign:s,rings:8,around:96,centre:l,set:!1})}return n}fitCaps(){let t=this.shared.uWater.value>.5?this.shared.uSea.value:-1e5;for(let e of this.caps){let n=e.mesh.geometry.attributes.height,s=0,r=[];for(let a=0;a<e.around;a++){let l=Math.max(this.heightAt(a/e.around*2*Math.PI-Math.PI,e.sign*(ss-.002))??0,t);r.push(l),s+=l/e.around}for(let a=0;a<e.rings;a++)for(let l=0;l<e.around;l++)n.array[a*e.around+l]=r[l]+(s-r[l])*(a/e.rings);n.array[e.rings*e.around]=s,n.needsUpdate=!0}}resolve(t,e){for(let n=t;n;n=n.parent){let s=n.slots[e.id];if(s&&s.state===Zn){let r=2**(t.z-n.z);return{slot:s,z:n.z,scale:1/r,ox:(t.x-n.x*r)/r,oy:(t.y-n.y*r)/r}}}return null}heightAt(t,e){t=wn(t),e=$t(e,-ss+1e-6,ss-1e-6);let n=2**gr,s=this.roots[$t(Math.floor(as(e,gr)),0,n-1)*n+$t(Math.floor(rs(t,gr)),0,n-1)],r=null,a=this.layers.elevation.id;for(;s;){let m=s.slots[a];if(m&&m.state===Zn&&(r=s),!s.children)break;let x=rs(t,s.z+1)-2*s.x,b=as(e,s.z+1)-2*s.y;s=s.children[(b>=1?2:0)+(x>=1?1:0)]}if(!r)return null;let l=r.slots[a],o=$t((rs(t,r.z)-r.x)*256-.5,0,255),h=$t((as(e,r.z)-r.y)*256-.5,0,255),u=Math.floor(o),c=Math.floor(h),f=Math.min(u+1,255),d=Math.min(c+1,255),p=o-u,v=h-c,g=(m,x)=>Yi.fromHalfFloat(l.heights[(x+1)*ze+m+1]);return l.base+(g(u,c)*(1-p)+g(f,c)*p)*(1-v)+(g(u,d)*(1-p)+g(f,d)*p)*v}measure(t,e){let n=this.shared.uExag.value,s=e.lon;if(!(s>=t.lon0&&s<=t.lon1)){let v=Math.abs(wn(e.lon-t.lon0)),g=Math.abs(wn(e.lon-t.lon1));s=v<g?t.lon0:t.lon1}let r=$t(e.lat,t.latS,t.latN),a=mr(e.lon,e.lat,s,r),l=Math.max(t.maxH,e.sea)*n;if(a>e.horizon+Math.acos(Math.min(1,e.occluder/(ee+Math.max(l,0)+50)))+.002)return null;let o=this._v.set(t.center[0]-e.pos[0],t.center[1]-e.pos[1],t.center[2]-e.pos[2]);if(this._sphere.center.copy(o),this._sphere.radius=t.radius+Math.max(Math.abs(t.minH),Math.abs(t.maxH))*n+200,!this.frustum.intersectsSphere(this._sphere))return null;let h=$t(e.ground,t.minH,t.maxH)*n,u=xn(s,r,this._p),c=ee+Math.max(h,e.sea*n),f=Math.max(Math.hypot(u[0]*c-e.pos[0],u[1]*c-e.pos[1],u[2]*c-e.pos[2]),20),d=fr*Math.cos(r)/2**t.z,p=Math.abs((u[0]*(u[0]*c-e.pos[0])+u[1]*(u[1]*c-e.pos[1])+u[2]*(u[2]*c-e.pos[2]))/f);return d/f*e.pxPerRad*Math.max(.45,Math.sqrt(p))}ensure(t,e){let n=this.layers,s=this.loader,r=s.want(t,n.elevation,e+2e6),a=n.globe?n.globe.maxZoom:-1,l=n.globe&&t.z<=a?s.want(t,n.globe,e+1e6):null,o=t.z>=a?s.want(t,n.base,e+1e6):l;return n.overlay&&s.want(t,n.overlay,e),n.night&&this.shared.uNightOn.value>.5&&s.want(t,n.night,e-1e5),r.state>=Zn&&o.state>=Zn}visit(t,e,n){t.visit=this.frame;let s=this.ensure(t,e);if(s&&t.z<this.maxZ&&e>this.threshold&&this.drawn.length<700){t.children||(t.split(),this.count+=4);let r=!0;for(let a of t.children)a._px=this.measure(a,n),a._px!==null&&(a.visit=this.frame,this.ensure(a,a._px)||(r=!1));if(r){for(let a of t.children)a._px!==null&&this.visit(a,a._px,n);return}}s&&this.drawn.push(t)}update(t){this.frame++;let e=this.shared,n=e.uExag.value,s=e.uWater.value>.5;t.sea=s?e.uSea.value:-12e3;let r=Math.hypot(t.pos[0],t.pos[1],t.pos[2]);t.occluder=ee+(s?Math.min(e.uSea.value,-450):-11e3)*n-100,t.horizon=r>t.occluder?Math.acos(t.occluder/r):Math.PI,this._v??=new dt,this._p??=[0,0,0],this._sphere??=new hi,this.frustum.setFromProjectionMatrix(t.viewProjectionRel),e.uSeaClamp.value=s?e.uSea.value:-1e5,this.drawn.length=0;for(let a of this.roots){let l=this.measure(a,t);if(l===null){a.visit=this.frame,this.ensure(a,1);continue}this.visit(a,l,t)}this.assign(t),this.loader.pump(this.frame),this.frame%90===0&&this.prune(),!this.capsFitted&&this.roots.every(a=>a.slots[this.layers.elevation.id]?.state>=Zn)&&(this.fitCaps(),this.capsFitted=!0);for(let a of this.caps)a.mesh.material.uniforms.uCenterRel.value.set(a.centre[0]-t.pos[0],a.centre[1]-t.pos[1],a.centre[2]-t.pos[2])}assign(t){let e=this.layers,n=0;for(let s=0;s<this.drawn.length;s++){let r=this.drawn[s],a=this.pool[s];a||(a=this.pool[s]=new pe(void 0,this.makeMaterial()),a.frustumCulled=!1,a.matrixAutoUpdate=!1,this.group.add(a)),r.geom??=Hx(r,this.grid),a.geometry=r.geom,a.visible=!0,a.matrix.makeTranslation(r.center[0],r.center[1],r.center[2]),a.matrixWorld.copy(a.matrix);let l=a.material.uniforms;l.uCenter.value.set(r.center[0],r.center[1],r.center[2]),l.uCenterRel.value.set(r.center[0]-t.pos[0],r.center[1]-t.pos[1],r.center[2]-t.pos[2]),l.uSkirt.value=Math.max(fr/2**r.z*.04,30)*Math.max(1,this.shared.uExag.value*.5);let o=this.resolve(r,e.elevation);if(o){let p=256/ze;l.tElev.value=o.slot.tex,l.uElevUV.value.set(o.scale*p,o.scale*p,(1+256*o.ox)/ze,(1+256*o.oy)/ze),l.uElevBase.value=o.slot.base,l.uElevMpp.value=fr/2**o.z/256}else l.tElev.value=this.blankElev,l.uElevBase.value=0,l.uElevMpp.value=fr/2**r.z/256;let h=null;for(let p=r,v=0;p;p=p.parent,v++){let g=p.slots[e.elevation.id];if(g&&g.state===Zn&&(v>=3||!p.parent)){h=p;break}}if(h){let p=2**(r.z-h.z),v=h.slots[e.elevation.id];l.tFar.value=v.tex,l.uFarUV.value.set(256/ze/p,256/ze/p,(1+256*(r.x-h.x*p)/p)/ze,(1+256*(r.y-h.y*p)/p)/ze),l.uFarBase.value=v.base,l.uFarMpp.value=fr/2**h.z/256,l.uFarTop.value=v.max}else l.tFar.value=l.tElev.value,l.uFarUV.value.copy(l.uElevUV.value),l.uFarBase.value=l.uElevBase.value,l.uFarMpp.value=l.uElevMpp.value,l.uFarTop.value=r.maxH;let u=e.globe&&this.resolve(r,e.globe),c=this.resolve(r,e.base)??u;c?(l.tBase.value=c.slot.tex,l.uBaseUV.value.set(c.scale,c.scale,c.ox,c.oy),l.uBaseTexels.value=256*2**c.z):(l.tBase.value=this.blank,l.uBaseTexels.value=256*2**r.z),u?(l.tGlobe.value=u.slot.tex,l.uGlobeUV.value.set(u.scale,u.scale,u.ox,u.oy),l.uGlobeOn.value=1):(l.tGlobe.value=this.blank,l.uGlobeOn.value=0);let f=e.overlay&&this.resolve(r,e.overlay);f?(l.tOver.value=f.slot.tex,l.uOverUV.value.set(f.scale,f.scale,f.ox,f.oy),l.uOverOn.value=1):(l.tOver.value=this.black,l.uOverOn.value=0);let d=e.night&&this.shared.uNightOn.value>.5&&this.resolve(r,e.night);d?(l.tNight.value=d.slot.tex,l.uNightUV.value.set(d.scale,d.scale,d.ox,d.oy)):l.tNight.value=this.black,r.dry?l.uDry.value.set(r.dry[0],r.dry[1],r.dry[2],r.dry[3]):l.uDry.value.set(2,2,-1,-1);for(let p=0;p<3;p++)l.uLat.value[p].set(r.lattice[p][0],r.lattice[p][1]),l.uLatS.value[p]=r.lattice[p][2];r.z>n&&(n=r.z)}for(let s=this.drawn.length;s<this.pool.length;s++)this.pool[s].visible=!1;this.stats.tiles=this.drawn.length,this.stats.depth=n}prune(){let t=this.count>this.budget?45:900,e=n=>{if(!n.children)return;let s=!0;for(let r of n.children)e(r),(r.children||r.visit>=this.frame-t)&&(s=!1);if(s){for(let r of n.children)r.dead=!0,Cd(r),r.geom?.dispose(),r.geom=null;n.children=null,this.count-=4}};for(let n of this.roots)e(n)}refresh(t){let e=this.layers.elevation.id,[n,s,r,a]=t.map(o=>o*gt),l=o=>{if(!(gi(o.x+1,o.z)<=n||gi(o.x,o.z)>=r||zn(o.y,o.z)<=s||zn(o.y+1,o.z)>=a)){if(o.z>=7){let h=o.slots[e];h&&(h.abort?.abort(),h.tex?.dispose(),delete o.slots[e]),o.allSea=!1}o.children?.forEach(l)}};this.roots.forEach(l)}setLayer(t,e){let n=this.layers[t];if(this.layers[t]=e,n&&(!e||n.id!==e.id)){let s=r=>{let a=r.slots[n.id];a&&(a.abort?.abort(),a.tex?.dispose(),delete r.slots[n.id]),r.children&&r.children.forEach(s)};this.roots.forEach(s)}}get ready(){let t=(this.layers.globe??this.layers.base).id;return this.roots.every(e=>e.slots[this.layers.elevation.id]?.state>=Zn&&e.slots[t]?.state>=Zn)}};var fh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,_l=class{constructor(t,e,n){this.camera=t,this.dom=e,this.globe=n,this.lon=-30*gt,this.lat=25*gt,this.range=175e5,this.heading=0,this.tilt=0,this.goalRange=this.range,this.goalHeading=0,this.goalTilt=0,this.maxRange=6e7,this.floor=null,this.inCity=!1,this.walk=null,this.groundH=0,this.pos=[0,0,0],this.basis={right:[1,0,0],up:[0,1,0],fwd:[0,0,-1]},this.vel=[0,0],this.fly=null,this.anchor=null,this.idle=!0,this.moved=0,this.onChange=null,this.onTap=null,this.wheelNeedsKey=!1,this.shift=[0,0],this.goalShift=[0,0],this.onWheelBlocked=null,this.pointers=new Map,this.bind(),this.place()}get fovY(){return this.camera.fov*gt}get minRange(){return this.inCity?14:150}size(){return[this.dom.clientWidth||1,this.dom.clientHeight||1]}place(){if(this.walk)return this.placeWalk();let t=this.globe,e=t?t.shared.uExag.value:1,n=t&&t.shared.uWater.value>.5?t.shared.uSea.value:-1e5,s=si(this.lon,this.lat),r=Yn(En(s.north,Math.cos(this.heading)),s.east,Math.sin(this.heading)),a=En(s.up,ee+this.groundH),l=Yn(En(s.up,Math.cos(this.tilt)),r,-Math.sin(this.tilt)),o=Yn(a,l,this.range),h=Math.hypot(o[0],o[1],o[2]),[u,c]=ml(o),f=this.floor?.(u,c)??null,d=Math.max(t?Math.max(t.heightAt(u,c)??0,n)*e:0,f??-1e9),p=Math.max(f==null?25:1.7,this.range*.04);h<ee+d+p&&(o=En(o,(ee+d+p)/h),h=ee+d+p);let v=pr(Yn(o,a,-1)),g=Yn(En(r,Math.cos(this.tilt)),s.up,Math.sin(this.tilt)),m=pr(ha(g,v)),x=ha(v,m);this.pos=o,this.basis={right:m,up:x,fwd:En(v,-1)},this.camLon=u,this.camLat=c,this.under=d,this.altitude=h-ee-d;let b=Math.max(f==null?1.5:.5,.06*Math.min(this.altitude,this.range)),_=ee-11e3*e,S=Math.sqrt(Math.max(h*h-_*_,0))+Math.sqrt((ee+9e3*e)**2-_*_)+1e3,A=this.camera;A.near=b,A.far=Math.max(S,b*10),A.updateProjectionMatrix(),A.projectionMatrix.elements[8]=-this.shift[0],A.projectionMatrix.elements[9]=-this.shift[1],A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.matrixAutoUpdate=!1,A.matrix.set(m[0],x[0],v[0],o[0],m[1],x[1],v[1],o[1],m[2],x[2],v[2],o[2],0,0,0,1),A.matrixWorld.copy(A.matrix),A.matrixWorldInverse.copy(A.matrix).invert()}placeWalk(){let t=this.walk,e=this.globe,n=e?e.shared.uExag.value:1,s=si(t.lon,t.lat),r=this.floor?.(t.lon,t.lat)??(e?(e.heightAt(t.lon,t.lat)??0)*n:0),a=ee+r+t.eye+(t.lift??0),l=En(s.up,a),o=Yn(En(s.north,Math.cos(t.yaw)),s.east,Math.sin(t.yaw)),h=pr(Yn(En(o,Math.cos(t.pitch)),s.up,Math.sin(t.pitch))),u=En(h,-1),c=pr(ha(s.up,u)),f=ha(u,c);this.pos=l,this.basis={right:c,up:f,fwd:h},this.lon=this.camLon=t.lon,this.lat=this.camLat=t.lat,this.heading=this.goalHeading=t.yaw,this.tilt=t.pitch,this.groundH=this.under=r,this.altitude=t.eye;let d=ee-11e3*n,p=Math.sqrt(Math.max(a*a-d*d,0))+Math.sqrt((ee+9e3*n)**2-d*d)+1e3,v=this.camera;v.near=.14,v.far=p,v.updateProjectionMatrix(),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.matrixAutoUpdate=!1,v.matrix.set(c[0],f[0],u[0],l[0],c[1],f[1],u[1],l[1],c[2],f[2],u[2],l[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert()}ray(t,e){let[n,s]=this.size(),r=Math.tan(this.fovY/2),a=r*(n/s),l=t/n*2-1-this.shift[0],o=1-e/s*2-this.shift[1],h=this.basis;return pr([h.fwd[0]+h.right[0]*l*a+h.up[0]*o*r,h.fwd[1]+h.right[1]*l*a+h.up[1]*o*r,h.fwd[2]+h.right[2]*l*a+h.up[2]*o*r])}pick(t,e){let n=this.globe,s=n.shared.uExag.value,r=n.shared.uWater.value>.5?n.shared.uSea.value:-1e5,a=this.ray(t,e),l=this.groundH,o=null;for(let h=0;h<5;h++){let u=bd(this.pos,a,ee+l);if(u<0)return o;let c=Yn(this.pos,a,u),[f,d]=ml(c),p=n.heightAt(f,d)??0;o={lon:f,lat:d,height:p,distance:u},l=Math.max(Math.max(p,r)*s,this.floor?.(f,d)??-1e9)}return o}touch(){this.idle=!1,this.fly=null,this.moved=performance.now()}bind(){let t=this.dom;t.style.touchAction="none",t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(this.walk)return;t.setPointerCapture?.(n.pointerId);let s=t.getBoundingClientRect(),r={x:n.clientX-s.left,y:n.clientY-s.top,x0:n.clientX-s.left,y0:n.clientY-s.top,button:n.button,mod:n.ctrlKey||n.shiftKey||n.metaKey||n.altKey,t:performance.now()};this.pointers.set(n.pointerId,r),this.touch(),this.vel=[0,0],this.anchor=null,this.goalRange=this.range,this.pointers.size===1&&(this.grab=this.pick(r.x,r.y)),this.pointers.size===2&&(this.pinch=this.pinchState())}),t.addEventListener("pointermove",n=>{if(this.walk)return;let s=this.pointers.get(n.pointerId),r=t.getBoundingClientRect(),a=n.clientX-r.left,l=n.clientY-r.top;if(this.hover={x:a,y:l},!s)return;let o=a-s.x,h=l-s.y;s.x=a,s.y=l,this.pointers.size===1?s.button===2||s.button===1||s.mod?this.orbit(o,h):this.pan(s,o,h):this.pointers.size===2&&this.pinchMove(),this.onChange?.()});let e=n=>{let s=this.pointers.get(n.pointerId);if(s){if(this.pointers.delete(n.pointerId),this.pointers.size===0&&Math.hypot(s.x-s.x0,s.y-s.y0)<6&&performance.now()-s.t<400&&this.onTap?.(s.x,s.y),this.pointers.size===1){let r=[...this.pointers.values()][0];this.grab=this.pick(r.x,r.y)}this.pinch=null}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{if(this.walk)return;if(this.wheelNeedsKey&&!(n.ctrlKey||n.metaKey)){this.onWheelBlocked?.();return}n.preventDefault(),this.touch();let s=t.getBoundingClientRect(),r=n.deltaMode===1?32:n.deltaMode===2?400:1,a=n.ctrlKey?.012:.0016;this.goalRange=$t(this.goalRange*Math.exp($t(n.deltaY*r,-300,300)*a),this.minRange,this.maxRange);let l=n.clientX-s.left,o=n.clientY-s.top,h=this.pick(l,o);this.anchor=h?{lon:h.lon,lat:h.lat,x:l,y:o}:null},{passive:!1}),t.addEventListener("dblclick",n=>{if(this.walk)return;let s=t.getBoundingClientRect(),r=this.pick(n.clientX-s.left,n.clientY-s.top);r&&this.flyTo({lon:r.lon,lat:r.lat,range:Math.max(this.range*.35,this.minRange*2)},.9)})}pan(t,e,n){let s=[this.lon,this.lat],r=this.pick(t.x,t.y);if(this.grab&&r)this.lon=wn(this.lon+wn(this.grab.lon-r.lon)),this.lat=$t(this.lat+(this.grab.lat-r.lat),-89*gt,89*gt);else{let[,h]=this.size(),u=2*Math.tan(this.fovY/2)*this.range/h/ee,c=Math.cos(this.heading),f=Math.sin(this.heading);this.lon=wn(this.lon-(e*c+n*f)*u/Math.max(Math.cos(this.lat),.2)),this.lat=$t(this.lat+(n*c-e*f)*u,-89*gt,89*gt)}this.place();let a=performance.now(),l=Math.max((a-(this.lastPan??a-16))/1e3,.004);this.lastPan=a;let o=[wn(this.lon-s[0])/l,(this.lat-s[1])/l];this.vel=[Xn(this.vel[0],o[0],.5),Xn(this.vel[1],o[1],.5)]}orbit(t,e){this.heading=this.goalHeading=this.heading-t*.006,this.tilt=this.goalTilt=$t(this.tilt-e*.005,0,this.maxTilt()),this.place()}maxTilt(){return this.inCity&&this.range<900?Xn(88.5,84,$t((this.range-200)/700,0,1))*gt:Xn(84,62,$t((Math.log10(this.range)-5.2)/1.8,0,1))*gt}pinchState(){let[t,e]=[...this.pointers.values()];return{d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x),cy:(t.y+e.y)/2,cx:(t.x+e.x)/2,range:this.range,heading:this.heading,tilt:this.tilt,grab:this.pick((t.x+e.x)/2,(t.y+e.y)/2)}}pinchMove(){let t=this.pinch;if(!t)return;let[e,n]=[...this.pointers.values()],s=Math.hypot(e.x-n.x,e.y-n.y),r=Math.atan2(n.y-e.y,n.x-e.x),a=(e.y+n.y)/2,l=(e.x+n.x)/2;this.range=this.goalRange=$t(t.range*t.d/Math.max(s,1),this.minRange,this.maxRange);let o=r-t.ang;o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)>.12&&(this.heading=this.goalHeading=t.heading+(o-Math.sign(o)*.12));let h=a-t.cy,u=Math.abs(s-t.d);Math.abs(h)>24&&u<40&&(this.tilt=this.goalTilt=$t(t.tilt-(h-Math.sign(h)*24)*.006,0,this.maxTilt())),this.place();let c=this.pick(l,a);t.grab&&c&&(this.lon=wn(this.lon+wn(t.grab.lon-c.lon)),this.lat=$t(this.lat+(t.grab.lat-c.lat),-89*gt,89*gt),this.place())}flyTo(t,e){let n={lon:this.lon,lat:this.lat,range:this.range,heading:this.heading,tilt:this.tilt},s={lon:t.lon??n.lon,lat:t.lat??n.lat,range:$t(t.range??n.range,this.minRange,this.maxRange),heading:t.heading??0,tilt:t.tilt??0},r=mr(n.lon,n.lat,s.lon,s.lat),a=Math.max(n.range,s.range,Math.min(r*ee*1.4,24e6)),l=e??$t(1.4+r*1.6+Math.abs(Math.log(n.range/s.range))*.22+Math.log(a/Math.max(n.range,s.range))*.18,1.2,6.5),o=s.heading-n.heading;o=Math.atan2(Math.sin(o),Math.cos(o)),this.fly={from:n,target:s,hop:a,dur:l,t:0,dh:o,a:xn(n.lon,n.lat),b:xn(s.lon,s.lat),angle:r},this.idle=!1,this.anchor=null,this.vel=[0,0]}zoomBy(t){this.touch(),this.anchor=null,this.goalRange=$t(this.goalRange*t,this.minRange,this.maxRange)}jump(t){Object.assign(this,{lon:t.lon??this.lon,lat:t.lat??this.lat,range:t.range??this.range,heading:t.heading??0,tilt:t.tilt??0}),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,this.fly=null,this.place()}update(t){if(this.walk){this.fly=null,this.inCity=!0,this.shift=[0,0],this.place();return}let e=this.globe,n=e.shared.uExag.value,s=e.shared.uWater.value>.5?e.shared.uSea.value:-1e5,r=1-Math.exp(-t*7);if(this.shift=[Xn(this.shift[0],this.goalShift[0],r),Xn(this.shift[1],this.goalShift[1],r)],this.fly){let o=this.fly;o.t=Math.min(1,o.t+t/o.dur);let h=o.hop>3*Math.max(o.from.range,o.target.range),u=fh(h?$t((o.t-.14)/.72,0,1):o.t);if(o.angle>1e-9){let p=Math.sin(o.angle),v=Math.sin((1-u)*o.angle)/p,g=Math.sin(u*o.angle)/p,[m,x]=ml([o.a[0]*v+o.b[0]*g,o.a[1]*v+o.b[1]*g,o.a[2]*v+o.b[2]*g]);this.lon=m,this.lat=x}let c=fh(o.t),f=Math.exp(Xn(Math.log(o.from.range),Math.log(o.target.range),c)),d=Math.sin(Math.PI*o.t);this.range=Math.exp(Xn(Math.log(f),Math.log(Math.max(o.hop,f)),h?d**.7:d*d)),this.heading=o.from.heading+o.dh*c,this.tilt=Xn(o.from.tilt,o.target.tilt,c)*(h?1-.85*d:1),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,o.t>=1&&(this.fly=null,this.heading=o.target.heading)}else{if(this.idle&&this.spin!==!1&&this.range>4e6&&(this.lon=wn(this.lon+t*.035)),!this.pointers.size){if(Math.abs(this.vel[0])+Math.abs(this.vel[1])>1e-7){this.lon=wn(this.lon+this.vel[0]*t),this.lat=$t(this.lat+this.vel[1]*t,-89*gt,89*gt);let h=Math.exp(-t*4.5);this.vel=[this.vel[0]*h,this.vel[1]*h]}let o=1-Math.exp(-t*9);if(Math.abs(Math.log(this.goalRange/this.range))>1e-4){if(this.range=Math.exp(Xn(Math.log(this.range),Math.log(this.goalRange),o)),this.anchor){this.place();let h=this.pick(this.anchor.x,this.anchor.y);h&&(this.lon=wn(this.lon+wn(this.anchor.lon-h.lon)),this.lat=$t(this.lat+(this.anchor.lat-h.lat),-89*gt,89*gt))}}else this.anchor=null}this.tilt=Math.min(this.tilt,this.maxTilt())}let a=this.floor?.(this.lon,this.lat)??null;this.inCity=a!=null,this.goalRange<this.minRange&&(this.goalRange=this.minRange);let l=Math.max(Math.max(e.heightAt(this.lon,this.lat)??0,s)*n,a??-1e9);this.groundH=Xn(this.groundH,l,1-Math.exp(-t*6)),this.place()}view(t){let e=this.camera,n=new xe().copy(e.matrixWorldInverse);return n.elements[12]=n.elements[13]=n.elements[14]=0,{pos:this.pos,lon:this.camLon,lat:this.camLat,ground:this.under/Math.max(this.globe.shared.uExag.value,1e-6),viewProjectionRel:new xe().multiplyMatrices(e.projectionMatrix,n),pxPerRad:t/(2*Math.tan(this.fovY/2))}}state(){return{lat:this.lat/gt,lon:this.lon/gt,range:this.range,heading:this.heading/gt,tilt:this.tilt/gt}}};var bl=5,wl=class{constructor(t,{samples:e=4,steps:n=20}={}){this.renderer=t,this.samples=e;let s=new Be;s.setAttribute("position",new Le(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),s.setAttribute("uv",new Le(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new pe(s),this.quad.frustumCulled=!1,this.quadScene=new $n,this.quadScene.add(this.quad),this.quadCam=new bs(-1,1,1,-1,0,1);let r=(l,o)=>new Xe({vertexShader:Fd,fragmentShader:l,uniforms:o,glslVersion:is,depthTest:!1,depthWrite:!1}),a={tDepth:{value:null},uCam:{value:new dt},uRight:{value:new dt},uUp:{value:new dt},uFwd:{value:new dt},uTan:{value:new ie},uShift:{value:new ie},uNear:{value:1},uFar:{value:2},uSun:{value:new dt}};this.atmo=r(kd,{...a,uHaze:{value:1},uSteps:{value:n},uAir:{value:1},uThick:{value:1}}),this.comp=r(Od,{...a,tColor:{value:null},tLight:{value:null},tThrough:{value:null},uPixAngle:{value:.001}}),this.down=r(Bd,{tSrc:{value:null},uTexel:{value:new ie},uThreshold:{value:0}}),this.up=r(zd,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ie}}),this.final=r(Hd,{tColor:{value:null},tBloom:{value:null},uTexel:{value:new ie},uExposure:{value:1},uBloom:{value:.06},uVignette:{value:.35}}),this.w=this.h=0}setSize(t,e){if(t===this.w&&e===this.h)return;this.w=t,this.h=e,this.dispose();let n={type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!1},s=new ni(t,e);s.type=Tn,s.minFilter=s.magFilter=Ue,this.rtScene=new Oe(t,e,{...n,depthBuffer:!0,depthTexture:s,samples:this.samples}),this.rtAir=new Oe(t,e,n),this.rtHalf=new Oe(Math.max(2,t>>1),Math.max(2,e>>1),{...n,count:2,minFilter:Ue,magFilter:Ue}),this.rtDown=[],this.rtUp=[];for(let r=0;r<bl;r++){let a=Math.max(2,t>>r+1),l=Math.max(2,e>>r+1);this.rtDown.push(new Oe(a,l,n)),r<bl-1&&this.rtUp.push(new Oe(a,l,n))}}dispose(){for(let t of[this.rtScene,this.rtAir,this.rtHalf,...this.rtDown??[],...this.rtUp??[]])t?.dispose();this.rtScene?.depthTexture?.dispose()}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,s=[]){let r=this.renderer;r.setRenderTarget(this.rtScene),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let f of s)r.render(f.scene,f.camera),r.setRenderTarget(this.rtScene);let a=this.atmo.uniforms;a.tDepth.value=this.rtScene.depthTexture,a.uCam.value.set(n.pos[0]/1e3,n.pos[1]/1e3,n.pos[2]/1e3),a.uRight.value.set(...n.basis.right),a.uUp.value.set(...n.basis.up),a.uFwd.value.set(...n.basis.fwd),a.uTan.value.set(n.tanY*n.aspect,n.tanY),a.uShift.value.set(n.shift[0],n.shift[1]),a.uNear.value=n.near,a.uFar.value=n.far,a.uSun.value.copy(n.sun);let l=Math.hypot(n.pos[0],n.pos[1],n.pos[2])/1e3-6371,o=Math.min(Math.max((l-1500)/9e3,0),1);a.uThick.value=1+1.1*o*o*(3-2*o),this.pass(this.atmo,this.rtHalf);let h=this.comp.uniforms;h.tColor.value=this.rtScene.texture,h.tLight.value=this.rtHalf.textures[0],h.tThrough.value=this.rtHalf.textures[1],h.uPixAngle.value=2*n.tanY/this.h,this.pass(this.comp,this.rtAir);let u=this.rtAir;for(let f=0;f<bl;f++){let d=this.down.uniforms;d.tSrc.value=u.texture,d.uTexel.value.set(1/u.width,1/u.height),d.uThreshold.value=f===0?1.1:0,this.pass(this.down,this.rtDown[f]),u=this.rtDown[f]}for(let f=bl-2;f>=0;f--){let d=this.up.uniforms;d.tSrc.value=u.texture,d.tAdd.value=this.rtDown[f].texture,d.uTexel.value.set(1/u.width,1/u.height),this.pass(this.up,this.rtUp[f]),u=this.rtUp[f]}let c=this.final.uniforms;c.tColor.value=this.rtAir.texture,c.tBloom.value=u.texture,c.uTexel.value.set(1/this.w,1/this.h),this.pass(this.final,null)}};var ph={version:2,checked:"2026-11-12",what:"How the 3D city on the globe was built from Plato's Critias: which parts follow the text, with the passage, and which parts are our choices because the text is silent. The code is source/engine/city.js and source/engine/city/. Every mesh in the model names one id from this file.",text:{work:"Plato, Critias",translation:"R. G. Bury, Loeb Classical Library, 1929",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.",checked_against:"https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg032/tlg0059.tlg032.perseus-eng2.xml"},units:{stadion_m:185,plethron:"one sixth of a stadion",note:"The stadion is drawn at 185 m. data/plato.json lists the other lengths scholars use; the whole city scales with it."},from_text:[{id:"hill",what:"The city stands on a hill that is low on all sides, about 50 stadia from the sea",ref:"Critias 113c",quote:"at a distance of about 50 stades, there stood a mountain that was low on all sides",param:"hill"},{id:"rings",what:"Three rings of sea and two of land round a central hill",ref:"Critias 113d",quote:"he made circular belts of sea and land enclosing one another alternately, some greater, some smaller, two being of land and three of sea",param:"rings"},{id:"ring-widths",what:"Ring widths from the centre: water 1, land 2, water 2, land 3, water 3 stadia",ref:"Critias 115e",quote:"The greatest of the circles into which a boring was made for the sea was three stades in breadth, and the circle of land next to it was of equal breadth; and of the second pair of circles that of water was two stades in breadth and that of dry land equal again to the preceding one of water; and the circle which ran round the central island itself was of a stade's breadth.",param:"rings"},{id:"island",what:"Central island five stadia across",ref:"Critias 116a",quote:"this island, wherein stood the royal palace, was of five stades in diameter",param:"islandDiameter"},{id:"island-gardens",what:"The central island set in order by the god, bearing every kind of food",ref:"Critias 113e",quote:"producing out of the earth all kinds of food in plenty"},{id:"canal",what:"Canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stadia long",ref:"Critias 115d",quote:"beginning at the sea, they bored a channel right through to the outermost circle, which was three plethra in breadth, one hundred feet in depth, and fifty stades in length",param:"canalLength, canalWidthPlethra"},{id:"canal-mouth",what:"The mouth of the canal on the sea, wide enough for the largest ships",ref:"Critias 115d",quote:"they made the entrance to it from the sea like that to a harbor by opening out a mouth large enough for the greatest ships to sail through",drawn:!1,note:"At the sea, 50 stadia out: beyond the modelled ground. The canal's course is drawn as a line."},{id:"harbours",what:"Three harbours: the three rings of water",ref:"Critias 117d",quote:"after crossing the three outer harbors"},{id:"ship-passages",what:"Roofed passages for one trireme through the rings of land, beside the bridges",ref:"Critias 115d-e",quote:"through the circles of land, which divided those of sea, over against the bridges they opened out a channel leading from circle to circle, large enough to give passage to a single trireme; and this they roofed over above so that the sea-way was subterranean"},{id:"bridges",what:"Bridges over the rings of water, a plethron wide, with towers and gates",ref:"Critias 115c, 116a",quote:"the bridge, which was a plethrum in breadth \u2026 and upon the bridges on each side, over against the passages for the sea, they erected towers and gates",param:"bridgeWidthPlethra"},{id:"bridge-gates",what:"Towers and gates on the bridges, on each side, where the sea passes",ref:"Critias 116a",quote:"upon the bridges on each side, over against the passages for the sea, they erected towers and gates"},{id:"ring-walls",what:"A stone wall round the island, round each ring and along both sides of the bridge",ref:"Critias 116a",quote:"Now the island and the circles and the bridge, which was a plethrum in breadth, they encompassed round about, on this side and on that, with a wall of stone"},{id:"stone",what:"White, black and red stone, quarried on the spot",ref:"Critias 116a-b",quote:"the stone they quarried beneath the central island all round, and from beneath the outer and inner circles, some of it being white, some black and some red"},{id:"rock-docks",what:"Two docks cut into the rock",ref:"Critias 116b",quote:"while quarrying it they constructed two inner docks, hollowed out and roofed over by the native rock"},{id:"patterned-buildings",what:"Buildings of one colour of stone, and buildings patterned in white, black and red",ref:"Critias 116b",quote:"of the buildings some they framed of one simple color, in others they wove a pattern of many colors by blending the stones for the sake of ornament",shape:"ours"},{id:"walls",what:"Walls faced with brass (outer ring), tin (inner ring) and orichalcum (citadel)",ref:"Critias 116b-c",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle; and that of the inner one they coated with tin; and that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"wall-brass",what:"The wall round the outermost ring, covered with brass",ref:"Critias 116b",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle"},{id:"wall-tin",what:"The wall round the inner ring, coated with tin",ref:"Critias 116b",quote:"that of the inner one they coated with tin"},{id:"wall-orichalcum",what:"The wall round the acropolis, coated with orichalcum",ref:"Critias 116b-c",quote:"that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"palace",what:"The royal palace on the central island, enlarged by every king",ref:"Critias 115c-d",quote:"they made of it an abode amazing to behold for the magnitude and beauty of its workmanship",shape:"ours"},{id:"shrine",what:"Shrine of Cleito and Poseidon at the centre, inside a wall of gold; kept as holy ground",ref:"Critias 116c",quote:"In the center there stood a temple sacred to Cleito and Poseidon, which was reserved as holy ground, and encircled with a wall of gold",shape:"ours"},{id:"shrine-wall",what:"The wall of gold round the shrine of Cleito and Poseidon",ref:"Critias 116c",quote:"encircled with a wall of gold"},{id:"temple",what:"Temple of Poseidon: a stadion long, 3 plethra wide, silver outside, gold pinnacles",ref:"Critias 116d",quote:"the temple of Poseidon himself was a stade in length, three plethra in breadth, and of a height which appeared symmetrical therewith \u2026 All the exterior of the temple they coated with silver, save only the pinnacles, and these they coated with gold.",param:"templeLength, templeWidth"},{id:"pinnacles",what:"Gold on the pinnacles of the temple",ref:"Critias 116d",quote:"save only the pinnacles, and these they coated with gold"},{id:"temple-ceiling",what:"Inside the temple: a ceiling of ivory, varied with gold, silver and orichalcum",ref:"Critias 116d",quote:"they made the roof all of ivory in appearance, variegated with gold and silver and orichalcum"},{id:"temple-interior",what:"Inside the temple: walls, pillars and floor covered with orichalcum",ref:"Critias 116d",quote:"all the rest of the walls and pillars and floors they covered with orichalcum"},{id:"poseidon",what:"A gold Poseidon in a chariot with six winged horses, his head touching the roof",ref:"Critias 116d-e",quote:"golden statues, one being that of the God standing on a chariot and driving six \u2026 winged steeds, his own figure so tall as to touch the ridge of the roof"},{id:"nereids",what:"A hundred Nereids on dolphins round him",ref:"Critias 116e",quote:"round about him a hundred Nereids on dolphins"},{id:"votive-inside",what:"Many other statues inside, given by private men",ref:"Critias 116e",quote:"it contained also many other images, the votive offerings of private men",shape:"ours"},{id:"pillar",what:"A pillar of orichalcum inside the temple, with the laws on it",ref:"Critias 119c-d",quote:"a pillar of orichalcum, which was placed within the temple of Poseidon in the center of the island"},{id:"statues",what:"Gold statues of the kings and their wives round the temple",ref:"Critias 116e",quote:"outside, round about the temple, there stood images in gold of all the princes, both themselves and their wives"},{id:"votive-outside",what:"Other offerings round the temple, from kings, citizens and subject peoples",ref:"Critias 116e",quote:"together with many other votive offerings both of the kings and of private persons",shape:"ours"},{id:"altar",what:"The altar, matching the temple in size and workmanship",ref:"Critias 117a",quote:"in respect of its size and its workmanship, harmonized with its surroundings",shape:"ours"},{id:"bulls",what:"Bulls loose in the precinct of Poseidon",ref:"Critias 119d",quote:"In the sacred precincts of Poseidon there were bulls at large",drawn:!1,note:'No animals or people are drawn; see the choice "no-figures".'},{id:"springs",what:"A hot and a cold spring on the central island, with buildings and trees round them",ref:"Critias 113e, 117a-b",quote:"The springs they made use of, one kind being of cold, another of warm water \u2026 these they surrounded with buildings and with plantations of trees",shape:"ours"},{id:"reservoirs",what:"Basins round the springs, some open to the sky and some roofed for hot baths in winter",ref:"Critias 117b",quote:"they set reservoirs round about, some under the open sky, and others under cover to supply hot baths in the winter",shape:"ours"},{id:"baths",what:"Separate baths for the kings, for citizens, for women, and for horses and beasts of burden",ref:"Critias 117b",quote:"they put separate baths for the kings and for the private citizens, besides others for women, and others again for horses and all other beasts of burden",shape:"ours"},{id:"grove",what:"The sacred grove of Poseidon",ref:"Critias 117b",quote:"the sacred grove of Poseidon, which contained trees of all kinds that were of marvellous beauty and height"},{id:"aqueducts",what:"Channels that carry the spring water to the outer rings by the bridges",ref:"Critias 117b",quote:"by means of channels they led the water to the outer circles over against the bridges",shape:"ours"},{id:"ring-buildings",what:"Temples, gardens, exercise grounds and barracks on the rings of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods, and many gardens and many exercising grounds \u2026 in each of the circular belts of island"},{id:"ring-temples",what:"Many temples on each ring of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods",shape:"ours"},{id:"gardens",what:"Many gardens on each ring of land",ref:"Critias 117c",quote:"and many gardens and many exercising grounds"},{id:"gymnasia",what:"Exercise grounds for men on each ring of land",ref:"Critias 117c",quote:"many exercising grounds, some for men and some set apart for horses",shape:"ours"},{id:"horse-grounds",what:"Exercise grounds for horses, kept apart, on each ring of land",ref:"Critias 117c",quote:"some set apart for horses, in each of the circular belts of island",shape:"ours"},{id:"racecourse",what:"Racecourse a stadion wide, running round the middle of the larger ring",ref:"Critias 117c",quote:"in the center of the large island a racecourse laid out for horses, which was a stade in width, while as to length, a strip which ran round the whole circumference",param:"racecourseWidth"},{id:"barracks",what:"Barracks for most of the spearmen on both sides of the racecourse",ref:"Critias 117c",quote:"round about it, on this side and on that, were barracks for the greater part of the spearmen",shape:"ours"},{id:"guard-house",what:"The guard house of the more trusted spearmen, on the smaller ring",ref:"Critias 117c-d",quote:"was posted in the smaller circle, which was nearer the acropolis",shape:"ours"},{id:"guard-dwellings",what:"Dwellings of the most trusted guards, on the acropolis round the kings",ref:"Critias 117d",quote:"had dwellings granted to them within the acropolis round about the persons of the kings",shape:"ours"},{id:"shipyards",what:"Shipyards full of triremes and their gear",ref:"Critias 117d",quote:"the shipyards were full of triremes and all the tackling that belongs to triremes",shape:"ours"},{id:"merchant-ships",what:"Merchant ships filling the canal and the largest harbour",ref:"Critias 117e",quote:"the sea-way and the largest harbor were filled with ships and merchants coming from all quarters",shape:"ours"},{id:"outer-wall",what:"Outer wall 50 stadia from the largest ring, its ends meeting at the canal's mouth on the sea",ref:"Critias 117e",quote:"a wall which began at the sea and ran round in a circle, at a uniform distance of fifty stades from the largest circle and harbor, and its ends converged at the seaward mouth of the channel",param:"outerWallDistance"},{id:"houses",what:"The town inside the outer wall: many houses set close together",ref:"Critias 117e",quote:"The whole of this wall had numerous houses built on to it, set close together",note:'Bury makes the houses line the wall. The Greek is "touto de pan synoikeito hypo pollon kai pyknon oikeseon": all of this was settled with many dense dwellings, which Jowett gives as "The entire area was densely crowded with habitations". We draw the area filled, after the Greek and Jowett.'},{id:"faces-south",what:"The sea lies south of the city",ref:"Critias 118a-b",quote:"this region, all along the island, faced towards the South and was sheltered from the Northern blasts",param:"seaBearing"}],choices:[{id:"stadion",what:"185 m to the stadion",why:"Plato gives stadia, not metres. Lengths from about 157 m to 192 m are used by scholars. The whole city scales with this number."},{id:"style",what:"One style throughout: Greek building forms of Plato's own century (columns, gabled roofs with tiles, ashlar walls with battlements), made strange by the materials the text gives: three colours of stone laid in bands and patterns, and metal skins on walls and temple",why:'Plato wrote about 360 BCE for Athenian readers and uses Greek building words (teichos, pyrgoi, pylai, neosoikoi, gymnasia, hippodromos, neos). He sets the city 9,000 years earlier and says of the temple that "there was something of the barbaric in its appearance" (116d). Rings of wall, each differently coloured and the innermost coated in silver and gold, are what Herodotus (1.98) reports of Ecbatana, the Median capital: a picture of eastern royal splendour his readers knew. So the forms are Greek and the surfaces are the foreign part. This is a drawing of how a Greek reader could have pictured it, not of any real place.',sources:[{what:"Herodotus, Histories 1.98, tr. A. D. Godley (1920): the seven ringed walls of Ecbatana, their battlements white, black, purple, blue, orange, silver and gold",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D98",read:"2026-11-12"}]},{id:"heights",what:"Heights: banks 8 m above the water with a quay 2 m above it, the hill 24 m above the banks, walls 11 m with towers to 17 m, gate towers 21 m",why:'The text says only that the lips of the rings stood "a sufficient height above the level of the sea" for a roofed ship passage (115e), and gives no wall heights. The banks are as high as a trireme without its mast needs to pass under a roof of rock.'},{id:"walls-both-shores",what:"Each ring of land has a wall on both shores, set back from the water behind a harbour strip, and both are faced in that ring's metal on the side towards the water",why:`116a puts the walls round the island, the rings and the bridge "on this side and on that"; 116b names one wall per ring for the metal. We wall both shores and face both in that ring's metal.`},{id:"wall-towers",what:"Towers at intervals along the ring walls, battlements and a walk on top",why:"Towers and gates are stated only for the bridges (116a). A Greek city wall of Plato's time had towers and a crenellated walk."},{id:"metal-look",what:'How the metals look: brass a yellow gold-brown, tin a soft grey-white, orichalcum a red gold "sparkling like fire", silver and gold bright; all slightly weathered sheet, with seams',why:'The text names the metals and says the brass was put on "as though with plaster" (116b). Orichalcum is unknown ("now known only by name", 114e); a red-gold copper alloy is the usual guess.'},{id:"road-offset",what:"One straight road from the town to the palace, 96 m east of the canal's line; the roofed ship passages through the rings of land are on the canal's line",why:'Bridges and ship passages are "over against" each other (115e, 116a). Their exact relation is not given. Ships come up the canal and go straight on through the passages; the road and its bridges run beside them.'},{id:"bridge-form",what:"Bridges of stone on piers with flat spans, a parapet wall each side, the water channel under the roadway",why:"The text gives only the width, a plethron (116a), the walls on both sides and the towers and gates. Greek bridges of the time were piers with corbelled or lintelled openings; the arch was not in general use."},{id:"gate-form",what:"Each bridge end has two towers with a gate between, the gate leaves faced in the ring's metal",why:"116a states towers and gates, no form."},{id:"aqueduct-form",what:"The spring water crosses each bridge in a covered stone channel along the parapet, and falls into basins on the rings",why:'117b says channels led the water to the outer rings by the bridges (Jowett: "by aqueducts along the bridges"). Their form is not given.'},{id:"quays",what:"A level harbour strip at quay height between the water and the foot of each bank, with mooring posts, storehouses on the merchants' harbour and steps up the banks",why:'Not described. Harbours "full of ships" (117e) need them.'},{id:"rock-dock-place",what:"The two rock-cut docks open off the innermost ring of water, in the flank of the central island, as two pairs of roofed slips",why:"116b: two inner docks hollowed out and roofed by the rock, made while quarrying under the island and the rings. The Greek (neosoikous koilous diplous entos) can also be read as double ship sheds. Where they were is not said."},{id:"ship-sheds",what:"Rows of roofed ship sheds on slipways along the three inner harbour strips, each 40 m by 7.4 m, in groups of six",why:"The text has shipyards full of triremes (117d), not their layout. Sheds are sized to the trireme we draw."},{id:"triremes",what:"Triremes about 37 m long and 5.5 m in beam, with a ram, three banks of oars, one mast and an upturned stern",why:"Plato says triremes (115e, 117d) and nothing of their shape. The form follows the Athenian trireme of his own time as rebuilt in the trial ship Olympias.",sources:[{what:"Olympias, the reconstruction of an Athenian trireme (built 1985 to 1987 to John Coates's drawings; 170 oars in three banks; bronze ram)",url:"https://en.wikipedia.org/wiki/Olympias_(trireme)",read:"2026-11-12"}]},{id:"merchantmen",what:"Round-hulled merchant ships 14 to 24 m long with one square sail",why:'117e says only "ships and merchants coming from all quarters".'},{id:"temple-form",what:"Poseidon's temple as a Greek temple with a colonnade all round, on four steps in the three stones, 11 by 22 columns, with a sun disc of gold in each gable",why:"Plato gives its size and metals and says it looked somewhat barbaric (116d). Its form is not described. A stadion by three plethra (185 by 92.5 m) is far larger than any Greek temple; the columns here are 3.4 m thick and 30 m high."},{id:"temple-height",what:"The temple is 41 m to the top of the cornice and 54 m to the ridge",why:'116d: "of a height which appeared symmetrical therewith". We use the proportion of height to width on the front of the Parthenon, 4 to 9.',sources:[{what:"Parthenon: a 4:9 proportion in the elevation",url:"https://en.wikipedia.org/wiki/Parthenon",read:"2026-11-12"}]},{id:"pinnacle-form",what:"The pinnacles are the ornaments on the ridge ends and corners of the roof (akroteria), as tall finials",why:"The Greek word is akroteria. Their shape is not given."},{id:"temple-interior-layout",what:"Inside: one great room with two rows of pillars, Poseidon's chariot at the far end facing the door, the Nereids in rows down both sides, the pillar of the laws before the statue",why:"116d-e and 119c-d list what was inside, not where it stood."},{id:"figure-form",what:"Statues are drawn as plain, smooth figures without faces or detail",why:"We will not invent portraits. The text gives their material (gold) and who they are."},{id:"counts",what:"Numbers: 60 royal statues round the temple, some 30 other offerings, 24 statues inside, towers, ships, sheds, buildings and trees",why:"Not given, except 100 Nereids (116e) and 1,200 ships for the whole fleet (119b). Ten kings and their wives over many generations would be more statues than we draw."},{id:"altar-form",what:"A long stepped altar of white stone before the east front of the temple, 46 m long",why:"117a says only that it matched its surroundings in size and workmanship."},{id:"shrine-form",what:"The shrine of Cleito and Poseidon is a round building with a ring of columns and an open eye in its roof; the wall of gold is 4.5 m high and has a gate towards the sea",why:`116c: holy ground, kept closed (abaton), inside a wall of gold. Nothing more: no shape and no size for either. A round building is one of the forms Greek builders used for a holy place. The gate and the open door are ours, because the shrine is used as this community's hall (see "hall").`},{id:"palace-plan",what:"The palace as ranges of two storeys round courts north of the shrine, with a great hall behind a porch of red columns and a taller hall behind it",why:"115c-d: each king added to it. No plan is given."},{id:"baths-layout",what:"Two round spring houses, two open basins and two roofed ones, three bath buildings round courts and a long trough hall for horses, in the north-east of the island; a stone channel carries the outflow to the grove and to the bridge",why:"117a-b lists them, without a plan."},{id:"grove-trees",what:"The grove: tall cypresses, planes and pines; gardens: olives, fruit trees and vines in rows",why:`117b: "trees of all kinds" of great height and beauty. 115a-b lists the island's fruits. The kinds drawn are Mediterranean, which is a choice.`},{id:"ring-layout",what:"How the rings of land are laid out: temples in walled precincts, gymnasia as colonnaded courts, horse grounds as fenced paddocks, gardens between, a road round each ring",why:"117c lists them and puts the racecourse in the middle of the larger ring with barracks on both sides. The rest of the plan is ours."},{id:"racecourse-form",what:"The racecourse as a sand track a stadion wide between low stone kerbs, with a ring of marker columns down its middle and stone seats by the road",why:"117c gives its width and that it ran round the whole ring."},{id:"house-form",what:"Houses of one and two storeys in blocks round yards, plastered, with tiled roofs, sixteen avenues leading to the harbour",why:"Not described."},{id:"extent",what:"Only the rings and the town within 2.5 stadia of the harbour are modelled, on made ground that ends in a grass bank; the outer wall and the rest of the canal are drawn as lines over the real land",why:"The wall is 50 stadia out (117e), so the whole city is about 23 km across. Levelling that much ground would hide the place it stands on."},{id:"houses-reading",what:"The town fills the ground inside the outer wall, rather than lining the wall",why:'Translations differ at 117e: see the entry "houses". The modelled band shows the nearest part of it.'},{id:"no-figures",what:"No people or animals are drawn",why:"The text has crowds, merchants, spearmen, horses and bulls loose in the precinct (119d). Figures would be invention at every step, and badly drawn ones spoil the scale. Doors, steps, ships and trees give the scale instead."},{id:"water",what:"The water in the rings is calm sea water about 30 m deep, clear enough to see the quay foot",why:"The canal is 100 feet deep (115d). The depth of the rings is not given."},{id:"plain",what:"The great plain, its ditch and canals are not modelled",why:"They are described (118a-e: a plain 3,000 by 2,000 stadia, a ditch a stadion wide and 10,000 stadia long) and are still to do."},{id:"hall",what:"The shrine stands open, and inside it is this community's hall: the research on its wall, a globe on its table",why:"Plato says only that the shrine stood in the centre, was reserved as holy ground, and had a wall of gold round it (116c). He gives it no shape and says nothing of its inside. We made the one closed place in the text the room where the search is shown and people meet. Nothing inside it is from the text."},{id:"home-site",what:"When nobody has stood it anywhere, the city stands on the open Atlantic at 35.3\xB0N, 9.9\xB0W, its canal running south",why:"The text says only that the island lay in front of the Pillars of Heracles, out in the Atlantic (Timaeus 24e). No island is there: the elevation tiles the globe uses put the sea floor at that spot 3,762 m down. The city is set where the words point so that no place anyone has proposed is favoured. It can be stood on any of them instead."}],shape_note:`An entry with "shape": "ours" is stated by Plato, but he gives it no size or form, so everything about how it is drawn is our choice. The page's text-only view draws those pale, together with the choices. An entry with "drawn": false is in the text and not in the model.`};var Ml={stadion:185,islandDiameter:5,rings:[["water",1],["land",2],["water",2],["land",3],["water",3]],canalLength:50,canalWidthPlethra:3,bridgeWidthPlethra:1,templeLength:1,templeWidth:.5,racecourseWidth:1,outerWallDistance:50,bank:8,hill:24,wallHeight:11,wallThickness:4.5,seaBearing:180,modelledTown:2.5},Vd=(i={})=>{let t={...Ml,...i},e=t.stadion,n=e/6,s=e/185,r=[t.islandDiameter/2*e];for(let[,X]of t.rings)r.push(r[r.length-1]+X*e);let[a,l,o,h,u,c]=r,f=t.bank,d=2,p=t.wallHeight,v=t.wallThickness,g=t.canalWidthPlethra*n/2,m=t.bridgeWidthPlethra*n/2,x={isle:12*s,r1in:46*s,r1out:46*s,r2in:46*s,r2out:40*s,town:36*s},b=a-x.isle,_=l+x.r1in,S=o-x.r1out,A=h+x.r2in,y=u-x.r2out,T=c+x.town,B=c+t.modelledTown*e,M=B+70*s,W=c+t.outerWallDistance*e,J=g+m+34*s,ht=7.5,N=f+t.hill,$=a*.6,G=a*.76,j=N-5,lt=f+3,Q=Math.sqrt($*$-J*J),F=G+44*s,I=(A+y)/2,z=t.racecourseWidth*e/2,k=X=>Math.sqrt(Math.max(0,X*X-J*J)),O=[[k(b),k(_)],[k(S),k(A)],[k(y),k(T)]],nt=X=>Math.abs(X-J)<=m,tt=X=>X<=$?N:X<=G?j+(lt-j)*(X-$)/(G-$):f,at=(X,Z,ut)=>{let ot=Math.hypot(X,Z),Tt=(Ft,Dt)=>(ut&&(ut.kind=Dt),Ft);if(ot>M)return null;let Et=-Z;if(nt(X)&&Et>0){for(let[Ft,Dt]of O)if(Et>=Ft-1&&Et<=Dt+1)return Tt(f,"bridge");if(Et<=F&&Et>=Q)return Tt(N+(f-N)*(Et-Q)/(F-Q),"ramp")}return ot<=b?Tt(tt(ot),ot<=$?"plateau":ot<=G?"slope":"island"):ot<=a?Tt(d,"quay"):ot<l?Tt(0,"water"):ot<=_||ot>=S&&ot<=o?Tt(Math.abs(X)<ht&&Et>0?0:d,"quay"):ot<=S?Tt(f,"ring-inner"):ot<h?Tt(0,"water"):ot<=A||ot>=y&&ot<=u?Tt(Math.abs(X)<ht&&Et>0?0:d,"quay"):ot<=y?Tt(f,Math.abs(ot-I)<z?"racecourse":"ring-outer"):ot<c||Math.abs(X)<g&&Et>0?Tt(0,"water"):ot<=T?Tt(d,"quay"):ot<=B?Tt(f,"town"):Tt(f+(-3-f)*(ot-B)/(M-B),"bank")},ft=-Math.PI/2;return{SEA:ft,roadAngle:X=>ft+Math.asin(Math.min(1,J/X)),arcsExcept:X=>{let Z=X.map(([ot,Tt])=>{let Et=ot-Tt;return Et=(Et%(2*Math.PI)+2*Math.PI)%(2*Math.PI),[Et,Et+2*Tt]}).sort((ot,Tt)=>ot[0]-Tt[0]);if(!Z.length)return[[0,2*Math.PI]];let ut=[];for(let ot=0;ot<Z.length;ot++){let Tt=Z[ot][1],Et=ot+1<Z.length?Z[ot+1][0]:Z[0][0]+2*Math.PI;Et-Tt>1e-6&&ut.push([Tt,Et])}return ut},P:t,S:e,k:s,plethron:n,shores:r,rIsle:a,rW1:l,rL1:o,rW2:h,rL2:u,rW3:c,B:f,Q:d,H:p,T:v,canalHalf:g,bridgeHalf:m,strip:x,rA:b,r1a:_,r1b:S,r2a:A,r2b:y,rT:T,core:B,edge:M,rWall:W,off:J,tunnelHalf:ht,Zp:N,Rp:$,Rs:G,zSlopeTop:j,zSlopeFoot:lt,rampTop:Q,rampFoot:F,rcMid:I,rcHalf:z,along:k,bridges:O,onRoad:nt,islandZ:tt,groundZ:at}};var re=Math.PI*2,Hn=i=>()=>(i=i*1664525+1013904223>>>0)/4294967296;var vi=class{constructor(){this.c=1,this.s=0,this.x=0,this.y=0,this.z=0}set(t=0,e=0,n=0,s=0){return this.c=Math.cos(s),this.s=Math.sin(s),this.x=t,this.y=e,this.z=n,this}push(t,e,n,s=0){let r=[this.c,this.s,this.x,this.y,this.z],a=Math.cos(s),l=Math.sin(s),o=this.x+this.c*t-this.s*e,h=this.y+this.s*t+this.c*e,u=this.c*a-this.s*l,c=this.s*a+this.c*l;return this.c=u,this.s=c,this.x=o,this.y=h,this.z+=n,r}pop(t){[this.c,this.s,this.x,this.y,this.z]=t}},xi=class{constructor(t,e){this.F=t,this.id=e,this.cap=1024,this.icap=2048,this.pos=new Float32Array(this.cap*3),this.nrm=new Int8Array(this.cap*4),this.col=new Uint8Array(this.cap*4),this.idx=new Uint32Array(this.icap),this.nv=0,this.ni=0,this.s=0,this.r=255,this.g=255,this.b=255}surf(t,e){return this.s=t,e?(this.r=e[0],this.g=e[1],this.b=e[2]):this.r=this.g=this.b=255,this}room(t,e){if(this.nv+t>this.cap){for(;this.nv+t>this.cap;)this.cap*=2;let n=new Float32Array(this.cap*3);n.set(this.pos.subarray(0,this.nv*3)),this.pos=n;let s=new Int8Array(this.cap*4);s.set(this.nrm.subarray(0,this.nv*4)),this.nrm=s;let r=new Uint8Array(this.cap*4);r.set(this.col.subarray(0,this.nv*4)),this.col=r}if(this.ni+e>this.icap){for(;this.ni+e>this.icap;)this.icap*=2;let n=new Uint32Array(this.icap);n.set(this.idx.subarray(0,this.ni)),this.idx=n}}v(t,e,n,s,r,a,l=1){this.room(1,0);let o=this.F,h=this.nv,u=h*3,c=h*4;return this.pos[u]=o.x+o.c*t-o.s*e,this.pos[u+1]=o.y+o.s*t+o.c*e,this.pos[u+2]=o.z+n,this.nrm[c]=(o.c*s-o.s*r)*127,this.nrm[c+1]=(o.s*s+o.c*r)*127,this.nrm[c+2]=a*127,this.col[c]=this.r*l,this.col[c+1]=this.g*l,this.col[c+2]=this.b*l,this.col[c+3]=this.s,this.nv++}tri3(t,e,n){this.room(0,3),this.idx[this.ni++]=t,this.idx[this.ni++]=e,this.idx[this.ni++]=n}quad4(t,e,n,s){this.room(0,6);let r=this.idx,a=this.ni;r[a++]=t,r[a++]=e,r[a++]=n,r[a++]=t,r[a++]=n,r[a++]=s,this.ni=a}quad(t,e,n,s,r=1,a=r,l=a,o=r){let h=e[0]-t[0],u=e[1]-t[1],c=e[2]-t[2],f=s[0]-t[0],d=s[1]-t[1],p=s[2]-t[2],v=u*p-c*d,g=c*f-h*p,m=h*d-u*f,x=Math.hypot(v,g,m)||1;v/=x,g/=x,m/=x;let b=this.v(t[0],t[1],t[2],v,g,m,r);return this.v(e[0],e[1],e[2],v,g,m,a),this.v(n[0],n[1],n[2],v,g,m,l),this.v(s[0],s[1],s[2],v,g,m,o),this.quad4(b,b+1,b+2,b+3),this}tri(t,e,n,s=1,r=s,a=s){let l=e[0]-t[0],o=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],d=o*f-h*c,p=h*u-l*f,v=l*c-o*u,g=Math.hypot(d,p,v)||1;d/=g,p/=g,v/=g;let m=this.v(t[0],t[1],t[2],d,p,v,s);return this.v(e[0],e[1],e[2],d,p,v,r),this.v(n[0],n[1],n[2],d,p,v,a),this.tri3(m,m+1,m+2),this}wall(t,e,n,s,r,a,l=1,o=l){return this.quad([t,e,r],[n,s,r],[n,s,a],[t,e,a],l,l,o,o)}slab(t,e,n,s,r,a=0,l=1){let o=Math.cos(a)/2,h=Math.sin(a)/2,u=o*s,c=h*s,f=-h*r,d=o*r;return this.quad([t-u-f,e-c-d,n],[t+u-f,e+c-d,n],[t+u+f,e+c+d,n],[t-u+f,e-c+d,n],l)}box(t,e,n,s,r,a,l=0,{top:o=!0,bottom:h=!1,foot:u=1,head:c=u,sides:f=15,topShade:d=1}={}){let p=Math.cos(l)/2,v=Math.sin(l)/2,g=p*s,m=v*s,x=-v*r,b=p*r,_=n+a,S=[[t-g-x,e-m-b],[t+g-x,e+m-b],[t+g+x,e+m+b],[t-g+x,e-m+b]];for(let A=0;A<4;A++)if(f&1<<A){let y=S[A],T=S[(A+1)%4];this.wall(y[0],y[1],T[0],T[1],n,_,u,c)}return o&&this.quad([S[0][0],S[0][1],_],[S[1][0],S[1][1],_],[S[2][0],S[2][1],_],[S[3][0],S[3][1],_],d),h&&this.quad([S[3][0],S[3][1],n],[S[2][0],S[2][1],n],[S[1][0],S[1][1],n],[S[0][0],S[0][1],n],u*.6),this}sweep(t,{arcs:e=[[0,re]],step:n=8,sense:s=1}={}){let r=Math.max(...t.map(a=>a[0]),1);for(let[a,l]of e){let o=Math.max(2,Math.ceil((l-a)*r/n));for(let h=0;h<t.length-1;h++){let u=t[h],c=t[h+1];if(Math.abs(u[0]-c[0])<1e-6&&Math.abs(u[1]-c[1])<1e-6)continue;let f=u[2]??1,d=c[2]??1;for(let p=0;p<o;p++){let v=a+(l-a)*p/o,g=a+(l-a)*(p+1)/o,m=Math.cos(v),x=Math.sin(v),b=Math.cos(g),_=Math.sin(g),S=[u[0]*m,u[0]*x,u[1]],A=[u[0]*b,u[0]*_,u[1]],y=[c[0]*b,c[0]*_,c[1]],T=[c[0]*m,c[0]*x,c[1]];s>0?this.quad(S,A,y,T,f,f,d,d):this.quad(A,S,T,y,f,f,d,d)}}}return this}shaft(t,e,n,s,r,a,l=12,{foot:o=1,head:h=o,cap:u=!1,phase:c=0}={}){for(let f=0;f<l;f++){let d=c+f/l*re,p=c+(f+1)/l*re,v=Math.cos(d),g=Math.sin(d),m=Math.cos(p),x=Math.sin(p);this.quad([t+s*v,e+s*g,n],[t+s*m,e+s*x,n],[t+r*m,e+r*x,n+a],[t+r*v,e+r*g,n+a],o,o,h,h),u&&this.tri([t,e,n+a],[t+r*v,e+r*g,n+a],[t+r*m,e+r*x,n+a],h)}return this}turned(t,e,n,s,r=8,{squash:a=1,rot:l=0,shade:o=1}={}){let h=this.nv,u=s.length;for(let c=0;c<u;c++){let[f,d]=s[c],p=s[Math.max(0,c-1)],v=s[Math.min(u-1,c+1)],g=v[0]-p[0],m=v[1]-p[1],x=Math.hypot(g,m)||1,b=m/x,_=-g/x;for(let S=0;S<r;S++){let A=l+S/r*re,y=Math.cos(A),T=Math.sin(A)*a;this.v(t+f*y,e+f*T,n+d,b*y,b*Math.sin(A),_,o)}}for(let c=0;c<u-1;c++)for(let f=0;f<r;f++){let d=h+c*r+f,p=h+c*r+(f+1)%r;this.quad4(d,p,p+r,d+r)}return this}loft(t,{closed:e=!1,flip:n=!1,shade:s=1}={}){let r=this.nv,a=t.length,l=t[0].length;for(let h=0;h<a;h++)for(let u=0;u<l;u++){let c=t[h][u],f=t[Math.min(a-1,h+1)][u],d=t[Math.max(0,h-1)][u],p=t[h][e?(u+1)%l:Math.min(l-1,u+1)],v=t[h][e?(u+l-1)%l:Math.max(0,u-1)],g=f[0]-d[0],m=f[1]-d[1],x=f[2]-d[2],b=p[0]-v[0],_=p[1]-v[1],S=p[2]-v[2],A=m*S-x*_,y=x*b-g*S,T=g*_-m*b,B=(Math.hypot(A,y,T)||1)*(n?-1:1);this.v(c[0],c[1],c[2],A/B,y/B,T/B,c[3]??s)}let o=e?l:l-1;for(let h=0;h<a-1;h++)for(let u=0;u<o;u++){let c=r+h*l+u,f=r+h*l+(u+1)%l;n?this.quad4(c,f,f+l,c+l):this.quad4(c,c+l,f+l,f)}return this}geometry(){let t=new Be;return t.setAttribute("position",new Le(this.pos.slice(0,this.nv*3),3)),t.setAttribute("normal",new Le(this.nrm.slice(0,this.nv*4),4,!0)),t.setAttribute("aTint",new Le(this.col.slice(0,this.nv*4),4,!0)),t.setIndex(new Le(this.nv>65535?this.idx.slice(0,this.ni):new Uint16Array(this.idx.subarray(0,this.ni)),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Sl=class{constructor(){this.F=new vi,this.bins=new Map}to(t){let e=this.bins.get(t);return e||this.bins.set(t,e=new xi(this.F,t)),e}proto(t){return new xi(new vi,t)}},Ni=(i,t,e)=>{let n=new kr(i,t,e.length),s=new xe,r=new Wn,a=new ei,l=new dt,o=new dt,h=new se,u=!1;return e.forEach((c,f)=>{a.set(c.tilt??0,0,c.rot??0,"ZXY"),r.setFromEuler(a),l.set(c.sx??1,c.sy??c.sx??1,c.sz??c.sx??1),o.set(c.x,c.y,c.z??0),n.setMatrixAt(f,s.compose(o,r,l)),c.tint?(u=!0,n.setColorAt(f,h.setRGB(c.tint[0]/255,c.tint[1]/255,c.tint[2]/255,Ie))):u&&n.setColorAt(f,h.setRGB(1,1,1))}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.computeBoundingBox(),n};var ri=["ashlar","paving","tiles","plaster","metal","grass","sand","wood","rock","leaf"],Vx=Object.fromEntries(ri.map((i,t)=>[i,t])),Qe=(i,t,e={})=>({layer:Vx[i],size:t,metal:0,rough:1,bump:1,pattern:0,wet:1,keep:0,...e}),Tl={stone:Qe("ashlar",3.6),stoneBands:Qe("ashlar",3.6,{pattern:1}),stoneChequer:Qe("ashlar",3.6,{pattern:2}),stoneCourses:Qe("ashlar",3.6,{pattern:3}),smooth:Qe("plaster",5,{rough:.8,bump:.5}),rock:Qe("rock",9,{bump:1.3}),paving:Qe("paving",7),plaster:Qe("plaster",4.5,{bump:.7}),tiles:Qe("tiles",2.6,{keep:1,wet:0}),metal:Qe("metal",4.6,{metal:.72,rough:1.5,wet:0}),gilt:Qe("metal",3.1,{metal:.8,rough:1.15,bump:.3,wet:0}),grass:Qe("grass",7,{keep:1}),sand:Qe("sand",6,{keep:1}),earth:Qe("sand",8,{keep:0}),wood:Qe("wood",2.6,{keep:1}),leaf:Qe("leaf",5.5,{keep:1,wet:0,bump:1.6}),cloth:Qe("plaster",2.2,{wet:0,bump:.4}),dark:Qe("rock",9,{bump:.4,wet:0}),ivory:Qe("plaster",6,{rough:.55,bump:.3,wet:0})},ua=Object.keys(Tl),et=Object.fromEntries(ua.map((i,t)=>[i,t])),q={white:[226,219,203],black:[70,70,76],red:[150,78,58],brass:[205,160,72],tin:[196,201,204],orichalcum:[226,118,62],silver:[224,228,232],gold:[246,190,78],plaster:[[232,224,207],[222,208,184],[212,193,164],[226,214,196],[204,182,152],[236,230,218]],tile:[[255,255,255],[240,222,205],[226,204,186],[255,240,226]],wood:[150,118,86],darkWood:[92,70,50],hull:[78,60,44],sail:[232,222,198],ivory:[244,236,214],leaf:[[78,104,58],[92,116,66],[66,92,52],[104,122,70]],cypress:[[40,66,42],[48,74,46],[34,58,38]],olive:[[118,132,96],[104,120,88]],trunk:[96,78,60],shade:[26,26,28],sand:[255,255,255],water:[255,255,255]},mh=["canal","merchant-ships","houses","harbours","bridges","bridge-gates","aqueducts","wall-brass","ship-passages","racecourse","barracks","horse-grounds","gymnasia","gardens","ring-temples","patterned-buildings","shipyards","wall-tin","guard-house","rock-docks","wall-orichalcum","guard-dwellings","springs","reservoirs","baths","grove","palace","shrine","shrine-wall","altar","statues","votive-outside","temple","pinnacles","temple-interior","temple-ceiling","poseidon","nereids","votive-inside","pillar"],Ow=[...mh,"hall","rings","island","hill","island-gardens","stone","ring-walls","quays","outer-wall","extent","ship-sheds","triremes","merchantmen","wall-towers","bridge-form","gate-form","palace-plan","house-form","grove-trees","ring-layout","racecourse-form","rock-dock-place","road-offset","temple-form","figure-form"];var Ze=(i,t)=>[Math.min(255,i[0]*t),Math.min(255,i[1]*t),Math.min(255,i[2]*t)],os=(i,t,e,n,s,r,{n:a=12,surf:l=et.smooth,tint:o=q.white,base:h=!1,shade:u=1,simple:c=!1}={})=>{if(i.surf(l,o),c){c==="pier"?i.box(t,e,n,s*2,s*2,r,0,{top:!1,foot:.8*u,head:.95*u}):(i.shaft(t,e,n,s,s*.82,r-s*.5,6,{foot:.82*u,head:.95*u}),i.box(t,e,n+r-s*.5,s*2.5,s*2.5,s*.5,0,{foot:.9*u,top:!1,bottom:!0}));return}let f=s*.55,d=s*.42,p=r-f-d,v=n;h&&(i.shaft(t,e,n,s*1.3,s*1.3,s*.35,a,{foot:.8*u,head:u,cap:!0}),v+=s*.35),i.shaft(t,e,v,s,s*.8,p-(v-n),a,{foot:.82*u,head:.95*u}),i.shaft(t,e,n+p,s*.8,s*1.22,f,a,{foot:.8*u,head:u}),i.box(t,e,n+p+f,s*2.7,s*2.7,d,0,{foot:.9*u,topShade:.7*u})},Cs=(i,t,e,n,s,r,a,l,o,h)=>{for(let u=0;u<a;u++){let c=a>1?u/(a-1):.5;os(i,t+(n-t)*c,e+(s-e)*c,r,l,o,h)}},Al=(i,t,e,n,s,{over:r=.6,tile:a=q.tile[0],wall:l=[et.plaster,q.plaster[0]],thick:o=.28,ridgeAlongY:h=!1}={})=>{let u=i.F,c=h?u.push(0,0,0,Math.PI/2):null;h&&([t,e]=[e,t]);let f=t/2+r*.5,d=e/2+r,p=s*r/(e/2),v=n-p,g=n+s;i.surf(et.tiles,a),i.quad([-f,-d,v],[f,-d,v],[f,0,g],[-f,0,g],.92,.92,1,1),i.quad([f,d,v],[-f,d,v],[-f,0,g],[f,0,g],.92,.92,1,1),i.surf(et.tiles,Ze(a,.7)),i.wall(-f,-d,f,-d,v-o,v,.7,.85),i.wall(f,d,-f,d,v-o,v,.7,.85);for(let m of[-1,1]){let x=m*f,b=[x,-d,v],_=[x,0,g],S=[x,d,v],A=y=>[y[0],y[1],y[2]-o];m>0?(i.quad(A(b),A(_),_,b,.75),i.quad(A(_),A(S),S,_,.75)):(i.quad(A(_),A(b),b,_,.75),i.quad(A(S),A(_),_,S,.75))}i.surf(et.wood,q.darkWood),i.quad([f,-d,v-o],[-f,-d,v-o],[-f,-e/2,n-o],[f,-e/2,n-o],.45),i.quad([-f,d,v-o],[f,d,v-o],[f,e/2,n-o],[-f,e/2,n-o],.45),i.surf(l[0],l[1]),i.tri([t/2,-e/2,n],[t/2,e/2,n],[t/2,0,g-.05],.8,.8,.95),i.tri([-t/2,e/2,n],[-t/2,-e/2,n],[-t/2,0,g-.05],.8,.8,.95),c&&u.pop(c)},Wx=(i,t,e,n,s,{over:r=.6,tile:a=q.tile[0],thick:l=.28}={})=>{let o=t/2+r,h=e/2+r,u=n-.15,c=n+s,f=Math.max(0,t/2-e/2);i.surf(et.tiles,a),i.quad([-o,-h,u],[o,-h,u],[f,0,c],[-f,0,c],.92,.92,1,1),i.quad([o,h,u],[-o,h,u],[-f,0,c],[f,0,c],.92,.92,1,1),i.tri([o,-h,u],[o,h,u],[f,0,c],.92,.92,1),i.tri([-o,h,u],[-o,-h,u],[-f,0,c],.92,.92,1),i.surf(et.tiles,Ze(a,.7)),i.box(0,0,u-l,o*2,h*2,l,0,{top:!1,bottom:!0,foot:.7})},El=(i,t,e,n,s,r,a,l,o)=>{let h=t/2,u=e/2;n===0?i.wall(s-a/2,-u-o,s+a/2,-u-o,r,r+l,.85,1):n===1?i.wall(h+o,s-a/2,h+o,s+a/2,r,r+l,.85,1):n===2?i.wall(s+a/2,u+o,s-a/2,u+o,r,r+l,.85,1):i.wall(-h-o,s+a/2,-h-o,s-a/2,r,r+l,.85,1)},da=(i,t,e,n,s,r,{pw:a=1.5,ph:l=2.5,frame:o=q.white,leaf:h=q.darkWood}={})=>{i.surf(et.smooth,o),El(i,t,e,n,s,r,a+.5,l+.3,.05),i.surf(et.wood,h),El(i,t,e,n,s,r,a,l,.09)},$x=(i,t,e,n,s,r,{pw:a=.8,ph:l=1.1}={})=>{i.surf(et.smooth,q.white),El(i,t,e,n,s,r-.12,a+.3,l+.24,.04),i.surf(et.dark,q.shade),El(i,t,e,n,s,r,a,l,.07)},on=(i,t,e,n,s,r,a,l,o={})=>{let{wall:h=[et.plaster,q.plaster[0]],roof:u="gable",rise:c=Math.min(s,r)*.22,tile:f=q.tile[0],doors:d=[[0,0]],windows:p=1,base:v=null,cornice:g=null,ridgeAlongY:m=r>s,over:x=.6}=o,b=i.F.push(t,e,n,l);if(i.surf(h[0],h[1]).box(0,0,0,s,r,a,0,{top:u==="flat",foot:.78,head:1,topShade:.9}),v&&i.surf(v[0],v[1]).box(0,0,0,s+.3,r+.3,Math.min(1.1,a*.2),0,{foot:.72,head:.9,topShade:.8}),g&&i.surf(et.smooth,g).box(0,0,a-.45,s+.5,r+.5,.45,0,{bottom:!0,foot:.8,topShade:.8}),u==="gable")Al(i,s,r,a,c,{tile:f,wall:h,ridgeAlongY:m,over:x});else if(u==="hip")Wx(i,s,r,a,c,{tile:f,over:x});else{i.surf(h[0],h[1]);for(let[_,S,A,y]of[[0,-r/2+.2,s,.4],[0,r/2-.2,s,.4],[-s/2+.2,0,.4,r-.8],[s/2-.2,0,.4,r-.8]])i.box(_,S,a,A,y,.7,0,{foot:.9,topShade:.95})}for(let[_,S]of d)da(i,s,r,_,S,0,{ph:Math.min(2.6,a*.62)});if(p){let _=Math.max(1,Math.round(a/3.4));for(let S=0;S<_;S++){let A=a/_*S+a/_*.52;for(let y of[0,2,1,3]){let T=y%2?r:s,B=Math.floor(T/3.6)*(p>1,1);for(let M=0;M<B;M++){let W=-T/2+T*(M+.5)/B;S===0&&d.some(([J,ht])=>J===y&&Math.abs(ht-W)<1.6)||(M+S+y)%(p>1?1:2)||$x(i,s,r,y,W,A,{pw:.7,ph:1})}}}}i.F.pop(b)},yi=(i,t,e,n,s,r,a,l,{wall:o=[et.stone,q.white],tile:h=q.tile[1],cols:u=Math.max(3,Math.round(s/3.4)),colTint:c=q.white,r:f=.34,simple:d=!0}={})=>{let p=i.F.push(t,e,n,l);i.surf(et.paving,q.white).box(0,0,0,s+1,r+1,.3,0,{foot:.8,topShade:.75}),i.surf(o[0],o[1]).box(0,r/2-.3,.3,s,.6,a+1.1,0,{foot:.7});for(let x of[-1,1])i.box(x*(s/2-.3),0,.3,.6,r,a+.5,0,{foot:.7});Cs(i,-s/2+.6,-r/2+.5,s/2-.6,-r/2+.5,.3,u,f,a-.4,{n:8,tint:c,simple:d}),i.surf(et.smooth,c).box(0,-r/2+.5,a-.1,s,.8,.5,0,{bottom:!0,foot:.7});let v=a+.4,g=a+1.5,m=s/2+.4;i.surf(et.tiles,h).quad([-m,-r/2-.5,v],[m,-r/2-.5,v],[m,r/2+.1,g],[-m,r/2+.1,g],.92,.92,1,1),i.surf(et.wood,q.darkWood).quad([m,-r/2-.5,v-.2],[-m,-r/2-.5,v-.2],[-m,r/2,g-.25],[m,r/2,g-.25],.4),i.F.pop(p)},Wd=(i,t,e,n,s,r,a,{wall:l=[et.stone,q.white],colTint:o=q.white,tile:h=q.tile[0],cols:u=4,steps:c=3,closed:f=!1,finial:d=null}={})=>{let p=i.F.push(t,e,n,a),v=.32,g=s*.82,m=s*.052,x=f?0:Math.min(r*.28,s*.6);for(let _=0;_<c;_++)i.surf(et.smooth,q.white).box(0,0,_*v,s+2.6-_*.9,r+2.6-_*.9,v,0,{foot:.8,topShade:.85});let b=c*v;if(i.surf(l[0],l[1]).box(0,x/2,b,s-1.2,r-x-.6,g,0,{top:!1,foot:.75}),!f){Cs(i,-s/2+m*1.6,-r/2+m*1.6,s/2-m*1.6,-r/2+m*1.6,b,u,m,g,{tint:o}),da(i,s-1.2,r-x-.6,0,0,b,{pw:s*.2,ph:g*.62});let _=i.F.push(0,x/2,0);i.F.pop(_)}if(i.surf(et.smooth,o).box(0,0,b+g,s+.1,r+.1,s*.1,0,{bottom:!0,foot:.78,topShade:.8}),Al(i,s+.1,r+.1,b+g+s*.1,s*.19,{tile:h,wall:[et.smooth,o],ridgeAlongY:!0,over:.5}),d)for(let _ of[-1,1])i.surf(et.gilt,d),i.shaft(0,_*(r/2+.3),b+g+s*.29,s*.035,.02,s*.16,6,{foot:.9});i.F.pop(p)},Rl=(i,t,e,n,s,r,a,l,{depth:o=5,wall:h=[et.stone,q.white],tile:u=q.tile[1],floor:c=[et.sand,q.sand],gate:f=!0}={})=>{let d=i.F.push(t,e,n,l);i.surf(c[0],c[1]).slab(0,0,.06,s-o*2,r-o*2,0,.95),yi(i,0,r/2-o/2,0,s,o,a,0,{wall:h,tile:u}),yi(i,0,-r/2+o/2,0,s,o,a,Math.PI,{wall:h,tile:u}),yi(i,s/2-o/2,0,0,r-o*2,o,a,-Math.PI/2,{wall:h,tile:u}),yi(i,-s/2+o/2,0,0,r-o*2,o,a,Math.PI/2,{wall:h,tile:u}),f&&i.surf(et.wood,q.darkWood).wall(-1.4,-r/2-.08,1.4,-r/2-.08,.3,3.2,.8,1),i.F.pop(d)},Fi=(i,t,e,n,s,r,{pitch:a=3.2,w:l=1.7,t:o=.7,h=1.3,lowWall:u=.9}={})=>{let c=Math.hypot(n-t,s-e),f=Math.max(1,Math.round(c/a)),d=(n-t)/c,p=(s-e)/c,v=Math.atan2(p,d),g=p,m=-d;u&&i.box((t+n)/2-g*o/2,(e+s)/2-m*o/2,r,c,o,u,v,{foot:.9,topShade:.9});for(let x=0;x<f;x++){let b=(x+.5)/f*c;i.box(t+d*b-g*o/2,e+p*b-m*o/2,r+u,l,o,h,v,{foot:.92,topShade:.95})}},fa=(i,t,e,n,s,r,a,{face:l=[et.stone,q.white],crown:o=[et.stone,q.white],slits:h=!0,band:u=null}={})=>{let c=i.F.push(t,e,n,a),f=s/2;i.surf(l[0],l[1]).box(0,0,0,s,s,r,0,{top:!1,foot:.72}),i.surf(o[0],o[1]).box(0,0,r,s+.7,s+.7,.7,0,{bottom:!0,foot:.8,topShade:.7}),u&&i.surf(u[0],u[1]).box(0,0,r*.62,s+.3,s+.3,.6,0,{bottom:!0,foot:.85});let d=r+.7,p=f+.35;if(i.surf(o[0],o[1]),Fi(i,-p,-p,p,-p,d,{pitch:2.6,w:1.3}),Fi(i,p,-p,p,p,d,{pitch:2.6,w:1.3}),Fi(i,p,p,-p,p,d,{pitch:2.6,w:1.3}),Fi(i,-p,p,-p,-p,d,{pitch:2.6,w:1.3}),h){i.surf(et.dark,q.shade);for(let v of[0,1,2,3]){let g=v*Math.PI/2,m=Math.cos(g),x=Math.sin(g),b=x*(f+.06),_=-m*(f+.06);i.wall(b-m*.25,_-x*.25,b+m*.25,_+x*.25,r*.7,r*.7+1.8)}}i.F.pop(c)},qx=[[.125,0],[.12,.08],[.098,.42],[.112,.6],[.092,.69],[.128,.795],[.118,.83],[.05,.855],[.062,.9],[.066,.94],[.045,.985],[0,1]],pa=(i,t,e,n,s,r=0,{n:a=8,tint:l=q.gold,surf:o=et.gilt,arm:h=!1}={})=>{i.surf(o,l);let u=i.F.push(t,e,n,r);i.turned(0,0,0,qx.map(([c,f])=>[c*s,f*s]),a,{squash:.62}),h&&i.box(s*.16,-s*.03,s*.72,s*.3,s*.05,s*.05,.25,{bottom:!0}),i.F.pop(u)},Cl=(i,t,e,n,s,r,{plinth:a=[et.smooth,q.white],tint:l=q.gold,ph:o=s*.32,pw:h=s*.36}={})=>{i.surf(a[0],a[1]).box(t,e,n,h*1.25,h*1.25,o*.2,r,{foot:.75,topShade:.8}),i.box(t,e,n+o*.2,h,h,o*.8,r,{foot:.85,topShade:.8}),pa(i,t,e,n+o,s,r,{tint:l})},$d=(i,t,e,n,s,{surf:r=et.smooth,tint:a=q.white,treads:l=Math.max(2,Math.round(Math.abs(s-n)/.4))}={})=>{i.surf(r,a);let o=(s-n)/l,h=e/l;for(let u=0;u<l;u++)i.wall(-t/2,u*h,t/2,u*h,n+u*o,n+(u+1)*o,.72,.85),i.quad([-t/2,u*h,n+(u+1)*o],[t/2,u*h,n+(u+1)*o],[t/2,(u+1)*h,n+(u+1)*o],[-t/2,(u+1)*h,n+(u+1)*o],.95)};var qd=(i,t,e)=>{let{B:n,Q:s,rIsle:r,rW1:a,rL1:l,rW2:o,rL2:h,rW3:u,rA:c,r1a:f,r1b:d,r2a:p,r2b:v,rT:g,core:m,edge:x,Zp:b,Rp:_,Rs:S,zSlopeTop:A,zSlopeFoot:y,SEA:T,roadAngle:B,arcsExcept:M,canalHalf:W,bridgeHalf:J,tunnelHalf:ht,off:N,rampTop:$,rampFoot:G,k:j}=t,lt=e.phone?14:8,Q=-3.2,F=i.to("rings"),I=i.to("quays"),z=i.to("stone"),k=i.to("rings"),O=i.to("island"),nt=i.to("hill"),tt=(E,ct)=>Math.asin(Math.min(1,ct/E)),at=21,ft=Math.PI/2,bt=M([[ft,tt(r,at)]]);F.surf(et.stone,q.white).sweep([[r,Q,.6],[r,s,.95]],{arcs:bt,step:lt}),F.surf(et.paving,q.white).sweep([[r,s,.95],[c,s,.8]],{arcs:bt,step:lt}),z.surf(et.stoneCourses,q.white).sweep([[c,s,.7],[c,n,.95]],{arcs:M([[ft,tt(c,at)]]),step:lt}),O.surf(et.grass,[235,235,225]).sweep([[c,n],[S+26,n]],{step:lt}),O.surf(et.paving,q.white).sweep([[S+26,n+.02],[S,n+.02,.8]],{step:lt});let L=E=>[[B(E),tt(E,J+.6)]];nt.surf(et.stoneBands,q.white).sweep([[S,n,.7],[S,y+.9,1]],{arcs:M(L(S)),step:lt}),nt.surf(et.smooth,q.white).sweep([[S,y+.9],[S-.7,y+.9],[S-.7,y,.8]],{arcs:M(L(S)),step:lt}),nt.surf(et.grass,[255,255,245]).sweep([[S-.7,y],[_,A,.85]],{step:lt}),nt.surf(et.stoneBands,q.white).sweep([[_,A,.7],[_,b+1,1]],{arcs:M(L(_)),step:lt}),nt.surf(et.smooth,q.white).sweep([[_,b+1],[_-.8,b+1],[_-.8,b,.8]],{arcs:M(L(_)),step:lt}),O.surf(et.paving,q.white).sweep([[_,b],[_*.5,b],[.5,b]],{step:lt*2});let X=(E,ct,pt,R,H)=>{let K=w=>[[T,tt(w,ht)]];F.surf(et.stone,q.white).sweep([[E,Q,.6],[E,s,.95]],{arcs:M(K(E)),step:lt,sense:-1}),F.surf(et.paving,q.white).sweep([[E,s,.95],[E+pt,s,.8]],{arcs:M(K(E)),step:lt,sense:-1}),z.surf(H[0],H[1]).sweep([[E+pt,s,.7],[E+pt,n,.95]],{arcs:M(K(E+pt)),step:lt,sense:-1}),k.surf(et.grass,[240,236,220]).sweep([[E+pt,n],[ct-R,n]],{step:lt,sense:-1}),z.surf(H[0],H[1]).sweep([[ct-R,n,.95],[ct-R,s,.7]],{arcs:M(K(ct-R)),step:lt,sense:-1}),F.surf(et.paving,q.white).sweep([[ct-R,s,.8],[ct,s,.95]],{arcs:M(K(ct)),step:lt,sense:-1}),F.surf(et.stone,q.white).sweep([[ct,s,.95],[ct,Q,.6]],{arcs:M(K(ct)),step:lt,sense:-1})};X(a,l,f-a,l-d,[et.stoneBands,q.white]),X(o,h,p-o,h-v,[et.stoneChequer,q.white]);let Z=i.to("ship-passages"),ut=5.6,ot=ht,Tt=(E,ct=ot)=>-Math.sqrt(E*E-ct*ct);for(let[E,ct,pt,R]of[[a,l,f-a,l-d],[o,h,p-o,h-v]]){for(let[w,P]of[[Tt(E),Tt(E+pt)],[Tt(ct-R),Tt(ct)]])for(let U of[-1,1])F.surf(et.stone,q.white),U>0?F.wall(ot,w,ot,P,Q,s,.6,.95):F.wall(-ot,P,-ot,w,Q,s,.6,.95);let H=Tt(E+pt),K=Tt(ct-R);Z.surf(et.rock,[120,116,110]),Z.wall(ot,H,ot,K,Q,ut,.3,.2),Z.wall(-ot,K,-ot,H,Q,ut,.3,.2),Z.quad([-ot,H,ut],[ot,H,ut],[ot,K,ut],[-ot,K,ut],.25);for(let[w,P]of[[H,1],[K,-1]]){Z.surf(et.stone,q.red);let U=w+P*.25;P>0?(Z.wall(ot+2.2,U,-ot-2.2,U,ut,n,.85,1),Z.wall(ot+2.2,U,ot,U,s,ut,.8,.9),Z.wall(-ot,U,-ot-2.2,U,s,ut,.8,.9)):(Z.wall(-ot-2.2,U,ot+2.2,U,ut,n,.85,1),Z.wall(ot,U,ot+2.2,U,s,ut,.8,.9),Z.wall(-ot-2.2,U,-ot,U,s,ut,.8,.9)),Z.surf(et.rock,[120,116,110]).quad([-ot,w,ut],[ot,w,ut],[ot,w+P*.3,ut],[-ot,w+P*.3,ut],.3)}}let Et=i.to("rock-docks"),Ft=52*j,Dt=Math.sqrt(c*c-at*at),ne=Math.sqrt(r*r-at*at),Wt=17,Rt=(at*2-Wt*2)/3,Ct=n-1.2;Et.surf(et.rock,[150,144,132]),Et.wall(-at,Dt,at,Dt,Ct,n,.8,1);let Ut=[-at+Rt+Wt/2,at-Rt-Wt/2];for(let E of[-at+Rt/2,0,at-Rt/2])Et.wall(E-Rt/2,Dt,E+Rt/2,Dt,Q,Ct,.55,.9);for(let E of Ut)Et.surf(et.rock,[118,112,104]),Et.wall(E-Wt/2,Dt,E-Wt/2,Dt-Ft,Q,Ct,.32,.22),Et.wall(E+Wt/2,Dt-Ft,E+Wt/2,Dt,Q,Ct,.32,.22),Et.wall(E-Wt/2,Dt-Ft,E+Wt/2,Dt-Ft,Q,Ct,.2,.16),Et.quad([E-Wt/2,Dt-Ft,Ct],[E+Wt/2,Dt-Ft,Ct],[E+Wt/2,Dt,Ct],[E-Wt/2,Dt,Ct],.2,.2,.35,.35),Et.surf(et.rock,[140,134,122]).quad([E-Wt/2,Dt-Ft+22,-1.2],[E+Wt/2,Dt-Ft+22,-1.2],[E+Wt/2,Dt-Ft,1.6],[E-Wt/2,Dt-Ft,1.6],.3);for(let E of[-1,1])F.surf(et.stone,q.white),E>0?F.wall(at,Dt,at,ne,Q,s,.6,.95):F.wall(-at,ne,-at,Dt,Q,s,.6,.95);let st=i.to("houses"),Vt=i.to("canal"),St=i.to("extent"),Bt=12*j,vt=W+Bt,Lt=tt(g,vt),kt=M([[T,Lt]]);F.surf(et.stone,q.white).sweep([[u,Q,.6],[u,s,.95]],{arcs:M([[T,tt(u,W)]]),step:lt,sense:-1}),F.surf(et.paving,q.white).sweep([[u,s,.95],[g,s,.8]],{arcs:M([[T,tt(u,W)]]),step:lt,sense:-1}),z.surf(et.stoneCourses,q.white).sweep([[g,s,.7],[g,n,.95]],{arcs:kt,step:lt,sense:-1}),st.surf(et.earth,[196,184,160]).sweep([[g,n],[(g+m)/2,n],[m,n]],{arcs:kt,step:lt*1.5,sense:-1}),St.surf(et.grass,[225,220,190]).sweep([[m,n],[x,-3.2]],{arcs:kt,step:lt*2,sense:-1});for(let E of[-1,1]){let ct=E*W,pt=E*vt,R=-Math.sqrt(u*u-W*W),H=-Math.sqrt(g*g-vt*vt),K=-x,w=(Ht,At,It,qt,wt,ae,le,De,Cn)=>E>0?Ht.wall(qt,wt,At,It,ae,le,De,Cn):Ht.wall(At,It,qt,wt,ae,le,De,Cn);Vt.surf(et.stone,q.white),w(Vt,ct,R,ct,K,Q,s,.6,.95),Vt.surf(et.paving,q.white);let P=[ct,R,s],U=[ct,K,s],C=[pt,K,s],Y=[pt,H,s];E>0?Vt.quad(P,Y,C,U,.9):Vt.quad(P,U,C,Y,.9),Vt.surf(et.stoneCourses,q.white),w(Vt,pt,H,pt,K,s,n,.7,.95);let it=T+E*Lt,yt=[g*Math.cos(it),g*Math.sin(it)],Mt=[m*Math.cos(it),m*Math.sin(it)],Pt=[x*Math.cos(it),x*Math.sin(it)],zt=-Math.sqrt(m*m-vt*vt);st.surf(et.earth,[196,184,160]),E>0?st.tri([yt[0],yt[1],n],[Mt[0],Mt[1],n],[pt,zt,n]):st.tri([yt[0],yt[1],n],[pt,zt,n],[Mt[0],Mt[1],n]),St.surf(et.grass,[225,220,190]),E>0?St.quad([pt,zt,n],[Mt[0],Mt[1],n],[Pt[0],Pt[1],-3.2],[pt,K,n]):St.quad([pt,zt,n],[pt,K,n],[Pt[0],Pt[1],-3.2],[Mt[0],Mt[1],n])}let Nt=(E,ct,pt,R)=>{for(let H=0;H<pt;H++){let K=H/pt*re;if(R(K))continue;let w=Math.cos(K),P=Math.sin(K),U=E-ct*1.2;I.surf(et.smooth,Ze(q.white,.8)).shaft(U*w,U*P,s,.32,.26,.9,6,{cap:!0,foot:.7})}},V=E=>Math.abs(Math.atan2(Math.sin(E-T),Math.cos(E-T)))<.06;return e.phone||(Nt(r,1,90,E=>Math.abs(E-ft)<.06),Nt(a,-1,130,V),Nt(l,1,200,V),Nt(o,-1,270,V),Nt(h,1,380,V),Nt(u,-1,480,V)),{dock:{mouths:Ut,yFace:Dt,dockDeep:Ft,dw:Wt},canalStrip:Bt}},Xd=(i,t)=>{let{rIsle:e,rW3:n,canalHalf:s,edge:r,rWall:a,core:l,B:o}=i,h=[],u=new pe(new qn(e-70,n+3,180,1),t.sea);u.userData={id:"harbours"},h.push(u);let c=r-n+60,f=new pe(new Un(s*2,c),t.sea);f.position.set(0,-(n+c/2)+2,0),f.userData={id:"canal"},h.push(f);for(let g of h)g.receiveShadow=!0,g.renderOrder=2,g.userData.water=!0;let d=Math.asin(Math.min(1,s/a))*3,p=new pe(new qn(a-22,a+22,360,1,-Math.PI/2+d,Math.PI*2-d*2),t.wallLine);p.userData={id:"outer-wall",line:!0};let v=new pe(new Un(s*2,a-r),t.canalLine);v.position.set(0,-(r+a)/2,0),v.userData={id:"canal",line:!0};for(let g of[p,v])g.renderOrder=5,g.position.z=o,h.push(g);return h};var Yd=(i,t,e)=>{let{B:n,Q:s,H:r,T:a,rA:l,r1a:o,r1b:h,r2a:u,r2b:c,rT:f,core:d,SEA:p,roadAngle:v,arcsExcept:g,bridgeHalf:m,off:x,bridges:b,Zp:_,rampTop:S,rampFoot:A,k:y,Rp:T,Rs:B}=t,M=e.phone?14:8,W=i.to("ring-walls"),J=i.to("ring-walls#teeth"),ht=i.to("wall-towers"),N=(k,O)=>Math.asin(Math.min(1,O/k)),$=(k,O,nt,tt)=>{let at=i.to(tt),ft=g([[v(k),N(k,m+.5)]]),bt={arcs:ft,step:M,sense:O},L=n+r-.9,X=k+O*.3,Z=k-O*a;at.surf(et.metal,nt).sweep([[k,n-.3,.72],[k,n+r*.45,.95],[k,L,1]],bt),W.surf(et.stone,q.white).sweep([[k,L,.6],[X,L,.75],[X,n+r,.95],[Z,n+r,.85],[Z,n,.7]],bt);let ut=n+r,ot=X,Tt=X-O*.7;W.sweep([[ot,ut,.9],[ot,ut+.9,1],[Tt,ut+.9,.95],[Tt,ut,.8]],bt);let Et=e.phone?6.4:3.2,Ft=(ot+Tt)/2;J.surf(et.stone,q.white);for(let[Rt,Ct]of ft){let Ut=Math.round((Ct-Rt)*k/Et);for(let st=0;st<Ut;st++){let Vt=Rt+(Ct-Rt)*(st+.5)/Ut;J.box(Ft*Math.cos(Vt),Ft*Math.sin(Vt),ut+.9,e.phone?3:1.6,.7,1.25,Vt+Math.PI/2,{foot:.95,topShade:.95})}}let Dt=v(k),ne=Math.max(8,Math.round(re*k/(118*y))),Wt=N(k,m+22);for(let Rt=0;Rt<ne;Rt++){let Ct=Dt+Wt+(re-2*Wt)*(Rt+.5)/ne,Ut=k-O*(a/2-1.6);fa(ht,Ut*Math.cos(Ct),Ut*Math.sin(Ct),n-.3,8.4,r+5.6,Ct,{face:[et.metal,nt],crown:[et.stone,q.white],band:[et.stone,q.white]})}};$(l,1,q.orichalcum,"wall-orichalcum"),$(o,-1,q.tin,"wall-tin"),$(h,1,q.tin,"wall-tin"),$(u,-1,q.brass,"wall-brass"),$(c,1,q.brass,"wall-brass");let G=i.to("bridges"),j=i.to("bridge-gates"),lt=i.to("aqueducts"),Q=[[q.orichalcum,q.tin],[q.tin,q.brass],[q.brass,q.brass]],F=(k,O,nt,tt=!0)=>{let at=j.F.push(x,-k,n,O>0?0:Math.PI),ft=9,bt=r+10,L=m*2-ft*2,X=9.2;for(let Z of[-1,1])fa(j,Z*(m-ft/2),0,-.3,ft,bt,0,{face:[et.metal,nt],crown:[et.stone,q.white],band:[et.stone,q.red]});j.surf(et.stoneBands,q.white).box(0,0,X,L,4.4,bt-4-X,0,{bottom:!0,foot:.7,topShade:.8}),j.surf(et.stone,q.white),Fi(j,-L/2,-2.2,L/2,-2.2,bt-4,{pitch:2.6,w:1.3}),Fi(j,L/2,2.2,-L/2,2.2,bt-4,{pitch:2.6,w:1.3}),j.surf(et.stone,q.red).box(0,-2.3,X-.9,L+1.6,.5,1.3,0,{bottom:!0,foot:.8});for(let Z of[-1,1]){let ut=L/2-.2,ot=tt?Z*1.32:0,Tt=Z*(L/2-.15);j.surf(et.metal,Ze(nt,.9)).box(Tt-Z*Math.cos(ot)*ut/2,1.6+Math.abs(Math.sin(ot))*ut/2,.15,ut,.35,X-.4,ot,{foot:.6,head:.85})}j.F.pop(at)};b.forEach(([k,O],nt)=>{let tt=O-k,at=-(k+O)/2;G.surf(et.stone,q.white).box(x,at,n-1.5,m*2,tt,1.5,0,{top:!1,bottom:!0,foot:.7,head:.95}),G.surf(et.paving,q.white).slab(x,at,n,m*2,tt,0,.95);let ft=Math.max(2,Math.round(tt/17));for(let L=0;L<=ft;L++){let X=-k-tt*L/ft;G.surf(et.stoneCourses,q.white).box(x,X,-3.2,m*2-1.2,3.6,n-3+3.2,0,{top:!1,foot:.55,head:.8}),G.surf(et.stone,q.white).box(x,X,n-3,m*2-.6,5.6,.8,0,{bottom:!0,top:!1,foot:.6}),G.box(x,X,n-2.2,m*2-.2,7.8,.7,0,{bottom:!0,top:!1,foot:.65})}for(let L of[-1,1]){let X=x+L*(m-.6);W.surf(et.stone,q.white).box(X,at,n,1.2,tt-9,2.3,0,{foot:.8,topShade:.9}),L>0?Fi(W,X+.6,-k-4.5,X+.6,-O+4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0}):Fi(W,X-.6,-O+4.5,X-.6,-k-4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0})}let bt=x-m+2.2;lt.surf(et.stone,q.white).box(bt,at,n,1.6,tt-10,1.25,0,{foot:.75,topShade:.9}),lt.surf(et.smooth,q.white);for(let L=-k-14;L>-O+10;L-=24)lt.box(bt,L,n+1.25,1.9,2.2,.3,0,{foot:.9});F(k,-1,Q[nt][0]),F(O,1,Q[nt][1])});let I=b.slice(0,2).map(([,k])=>({x:x-m-9,y:-k-16,z:n,w:9,d:14}));for(let k of I){lt.surf(et.stone,q.white);for(let[O,nt,tt,at]of[[0,-k.d/2,k.w+1.2,.7],[0,k.d/2,k.w+1.2,.7],[-k.w/2,0,.7,k.d],[k.w/2,0,.7,k.d]])lt.box(k.x+O,k.y+nt,k.z,tt,at,1,0,{foot:.8,topShade:.9});lt.surf(et.stone,q.white).box(k.x+k.w/2+4,k.y+k.d/2+6,k.z,1.6,18,1.25,.35,{foot:.75})}let z=(k,O,nt=n)=>{G.surf(et.paving,q.white).slab(x,-(k+O)/2,nt+.14,m*2,O-k,0,.95);for(let tt of[-1,1])G.surf(et.smooth,q.white).box(x+tt*m,-(k+O)/2,nt,.5,O-k,.34,0,{foot:.8})};z(b[0][1],b[1][0]),z(b[1][1],b[2][0]),z(b[2][1],Math.sqrt(d*d-x*x)),z(A,b[0][0]);{let k=G.F.push(x,-A,0,0),O=A-S,nt=m*2;$d(G,nt,O,n,_,{surf:et.paving,treads:e.phone?20:60});for(let tt of[-1,1]){let at=tt*(nt/2+.6),ft=12;for(let bt=0;bt<ft;bt++){let L=O*bt/ft,X=O*(bt+1)/ft,Z=n+(_-n)*bt/ft,ut=n+(_-n)*(bt+1)/ft;G.surf(et.stoneBands,q.white);let ot=at+tt*.6,Tt=at-tt*.6,Et=n-.2;tt>0?(G.quad([ot,L,Et],[ot,X,Et],[ot,X,ut+1.1],[ot,L,Z+1.1],.7,.7,1,1),G.quad([Tt,X,ut],[Tt,L,Z],[Tt,L,Z+1.1],[Tt,X,ut+1.1],.8)):(G.quad([ot,X,Et],[ot,L,Et],[ot,L,Z+1.1],[ot,X,ut+1.1],.7,.7,1,1),G.quad([Tt,L,Z],[Tt,X,ut],[Tt,X,ut+1.1],[Tt,L,Z+1.1],.8)),G.surf(et.smooth,q.white).quad([at-.6,L,Z+1.1],[at+.6,L,Z+1.1],[at+.6,X,ut+1.1],[at-.6,X,ut+1.1],.95)}}G.F.pop(k)}return{basins:I}};var Zd=(i,t,e)=>{let{Zp:n,SEA:s,arcsExcept:r}=t,a=44,l=20,o=1.1,h=l-o,u=24.4,c=u+2,f=5.5,d=9.5,p=3.4,v=6.4,g=6,m=n+.45,x=m,b=m+d,_=($,G)=>Math.asin(Math.min(1,G/$)),S=e.phone?5:3,A=i.to("shrine-wall").surf(et.metal,q.gold);A.sweep([[a,n,.8],[a,n+4.5,1],[a-.9,n+4.5,.95],[a-.9,n,.75]],{arcs:r([[s,_(a,g)]]),step:S});for(let $ of[-1,1]){let G=s+$*_(a,g+.5);A.shaft((a-.45)*Math.cos(G),(a-.45)*Math.sin(G),n,.95,.8,6.4,10,{cap:!0,foot:.8})}let y=i.to("shrine");for(let $=0;$<3;$++)y.surf(et.smooth,q.white).sweep([[c+(2-$)*.55,n+$*.15,.8],[c+(2-$)*.55,n+($+1)*.15,.92],[c+(1-$)*.55,n+($+1)*.15,.95]],{step:S+1});y.surf(et.paving,q.white).sweep([[c-.55,m,.95],[h,m,.95]],{step:S+1});let T=r([[s,_(l,p)]]),B=[[s-_(l,p),s+_(l,p)]];y.surf(et.stoneCourses,q.white).sweep([[l,x,.8],[l,b,1]],{arcs:T,step:S}),y.surf(et.stoneCourses,q.white).sweep([[l,x+v,.85],[l,b,1]],{arcs:B,step:S}),y.surf(et.smooth,q.white).sweep([[h,b,.8],[h,x+6.3,.7]],{arcs:T,step:S}),y.surf(et.smooth,q.white).sweep([[h,b,.8],[h,x+v,.7],[l,x+v,.6]],{arcs:B,step:S});let M=i.to("hall");M.surf(et.smooth,q.shade).sweep([[h,x+6.3,.9],[h,x,.7]],{arcs:T,step:S}),M.surf(et.gilt,q.gold).sweep([[h-.04,x+6.42,1],[h-.04,x+6.3,1]],{arcs:T,step:S});for(let $ of[-1,1]){let G=s+$*_(l,p),j=Math.cos(G),lt=Math.sin(G);y.surf(et.gilt,q.gold).quad([h*j,h*lt,x],[l*j,l*lt,x],[l*j,l*lt,x+v],[h*j,h*lt,x+v],.9)}M.surf(et.paving,q.white).sweep([[h,m,.9],[7.2,m,.92]],{step:S}),M.surf(et.smooth,q.shade).sweep([[7.2,m,.9],[6.2,m,.9]],{step:2}),M.surf(et.gilt,q.gold).sweep([[6.2,m,1],[6,m,1]],{step:2}),M.surf(et.paving,q.white).sweep([[6,m,.92],[0,m,.95]],{step:2});let W=e.phone?20:28;for(let $=0;$<W;$++){let G=s+($+.5)/W*re;os(y,u*Math.cos(G),u*Math.sin(G),m,.72,d,{n:e.phone?8:14,tint:q.white})}y.surf(et.smooth,q.white).sweep([[u+1,b,.75],[u+1,b+1.1,.95],[u-1,b+1.1,.9],[u-1,b,.7],[u+1,b,.6]],{step:S}),y.surf(et.gilt,q.gold).sweep([[u+1.05,b+.46,1],[u+1.05,b+.62,1]],{step:S}),y.surf(et.smooth,q.white).sweep([[l,b+.04,.55],[u-1,b+.04,.6]],{step:S}),y.surf(et.tiles,q.tile[1]).sweep([[u+1.5,b+1.05,.9],[f,b+5.4,1]],{step:S}),M.surf(et.smooth,q.shade).sweep([[f,b+5.1,.6],[h,b,.4]],{step:S}),y.surf(et.gilt,q.gold).sweep([[f,b+5.1,.9],[f,b+5.45,1]],{step:2,sense:-1}),M.surf(et.smooth,q.white).shaft(0,0,m,3,2.7,.75,28,{cap:!0,foot:.8,head:.96}),M.surf(et.gilt,q.gold).shaft(0,0,m+.75,1.15,.85,.55,18,{cap:!0,foot:.9});let J=12,ht=.44,N=[];for(let $=0;$<J;$++){let G=s-ht-$*(re-2*ht)/(J-1),j=h-.32;N.push({x:j*Math.cos(G),y:j*Math.sin(G),z:m+3.15,w:7.2,h:4,a:G})}return{RG:a,RH:l,RI:h,RC:u,RS:c,RO:f,floor:m,height:d,panels:N,door:{a:s,half:p},gate:{a:s,half:g},globe:{x:0,y:0,z:m+3.6,r:2.2},rings:[{r:a-.45,t:.8,a:s,gap:g-.9},{r:l-o/2,t:.95,a:s,gap:p-.7}],circles:[{x:0,y:0,r:3.5},...Array.from({length:W},($,G)=>{let j=s+(G+.5)/W*re;return{x:u*Math.cos(j),y:u*Math.sin(j),r:1.15}})]}};var ai=Math.PI/180,Xx=(i,t,e,n,s,r,a)=>{let l=i.F.push(t,e,n,r),o=s,h=o*.5;i.surf(et.gilt,a);let u=(c,f,d,p,v=8)=>Array.from({length:v},(g,m)=>{let x=m/v*re;return[c,Math.cos(x)*d,f+Math.sin(x)*p]});i.loft([u(-o*.36,h,.02,.02),u(-o*.32,h,o*.1,o*.12),u(-o*.1,h-o*.01,o*.105,o*.125),u(o*.16,h,o*.1,o*.13),u(o*.27,h+o*.05,o*.07,o*.11),u(o*.36,h+o*.2,o*.05,o*.075),u(o*.42,h+o*.33,o*.04,o*.055),u(o*.52,h+o*.3,o*.028,o*.04),u(o*.6,h+o*.25,o*.02,o*.03)],{closed:!0});for(let[c,f,d]of[[-o*.26,-1,0],[-o*.26,1,0],[o*.18,-1,1],[o*.18,1,1]])i.shaft(c+(d&&f>0?o*.06:0),f*o*.07,d&&f>0?o*.12:0,o*.022,o*.04,h-o*.08-(d&&f>0?o*.12:0),5);for(let c of[-1,1])i.quad([o*.14,c*o*.09,h+o*.08],[-o*.1,c*o*.1,h+o*.06],[-o*.42,c*o*.34,h+o*.5],[-o*.05,c*o*.3,h+o*.42]),i.quad([-o*.05,c*o*.3,h+o*.42],[-o*.42,c*o*.34,h+o*.5],[-o*.62,c*o*.5,h+o*.74],[-o*.2,c*o*.46,h+o*.6]);i.F.pop(l)},jd=(i,t,e,n,s,r)=>{let a=i.F.push(t,e,n,s),l=3.6;i.surf(et.gilt,r);let o=(h,u,c=6)=>{let f=(h-.5)*l,d=1+Math.sin(h*Math.PI)*.9;return Array.from({length:c},(p,v)=>{let g=v/c*re;return[f,Math.cos(g)*u*.8,d+Math.sin(g)*u]})};i.loft([o(0,.03),o(.12,.2),o(.4,.42),o(.62,.4),o(.85,.2),o(1,.04)],{closed:!0}),i.tri([-l*.5,-.6,1],[-l*.5,.6,1],[-l*.38,0,1.3]),i.tri([l*.02,0,2.25],[l*.2,0,2.2],[l*.02,0,2.75]),pa(i,-.15,0,2,2.5,0,{n:6,tint:r}),i.F.pop(a)},Jd=(i,t,e)=>{let{B:n,Zp:s,Rp:r,Rs:a,rA:l,T:o,S:h,P:u,k:c,off:f,bridgeHalf:d,SEA:p,roadAngle:v,zSlopeTop:g,zSlopeFoot:m,islandZ:x}=t,b=Hn(1160),_=[],S=[],A=(R,H)=>[R*Math.cos(H*ai),R*Math.sin(H*ai)],y=Zd(i,t,e),T=u.templeLength*h,B=u.templeWidth*h,M=-45*c,W=-135*c,J=i.to("temple"),ht=i.to("temple#roof"),N=i.to("temple-interior"),$=i.to("temple-ceiling#roof"),G=i.to("pinnacles#roof"),j=.9,lt=4,Q=lt*j,F=B*.325,I=B*.076,z=B*.0185,k=B*.14,O=J.F,nt=O.push(M,W,s,0);{let R=[q.black,q.white,q.red,q.white];for(let Xt=0;Xt<lt;Xt++)J.surf(et.smooth,R[Xt]).box(0,0,Xt*j,T+(lt-1-Xt)*3.4,B+(lt-1-Xt)*3.4,j,0,{foot:.78,topShade:.86});let H=11,K=22,w=z*1.7,P={n:e.phone?10:16,surf:et.metal,tint:q.silver};for(let Xt of[-1,1])Cs(J,-T/2+w,Xt*(B/2-w),T/2-w,Xt*(B/2-w),Q,K,z,F,P);for(let Xt of[-1,1])Cs(J,Xt*(T/2-w),-B/2+w+(B-2*w)/(H-1),Xt*(T/2-w),B/2-w-(B-2*w)/(H-1),Q,H-2,z,F,P);let U=Q+F,C=w*2,Y=(T-.6)/2-C,it=(B-.6)/2-C,yt=(Xt,fe,D,rt,_t,mt,xt=!0)=>{let Gt=[[-fe,-D],[fe,-D],[fe,D],[-fe,D]],jt=[[-rt,-_t],[rt,-_t],[rt,_t],[-rt,_t]];for(let Ot=0;Ot<4;Ot++){let Yt=(Ot+1)%4,Qt=[...Gt[Ot],Xt],he=[...Gt[Yt],Xt],ve=[...jt[Yt],Xt],Jt=[...jt[Ot],Xt];xt?J.quad(Qt,he,ve,Jt,mt):J.quad(Jt,ve,he,Qt,mt)}};J.surf(et.metal,q.silver).box(0,0,U,T-.6,B-.6,I*.4,0,{foot:.75,top:!1}),yt(U,(T-.6)/2,(B-.6)/2,Y,it,.6,!1),J.surf(et.metal,Ze(q.silver,.9)).box(0,0,U+I*.4,T-.2,B-.2,I*.38,0,{top:!1,foot:.9}),J.surf(et.gilt,q.gold).box(0,0,U+I*.4,T-.1,B-.1,I*.07,0,{top:!1}),J.surf(et.metal,q.silver).box(0,0,U+I*.78,T+1.6,B+1.6,I*.22,0,{foot:.7,top:!1}),yt(U+I,(T+1.6)/2,(B+1.6)/2,Y,it,.9),J.surf(et.metal,Ze(q.silver,.8)),J.wall(Y,-it,-Y,-it,U,U+I,.6,.75),J.wall(-Y,it,Y,it,U,U+I,.6,.75),J.wall(-Y,-it,-Y,it,U,U+I,.6,.75),J.wall(Y,it,Y,-it,U,U+I,.6,.75);let Mt=T-30*c,Pt=B-30*c,zt=2.2,Ht=9,At=F*.66;J.surf(et.metal,q.silver),J.wall(-Mt/2,-Pt/2,Mt/2,-Pt/2,Q,U,.72,.9),J.wall(Mt/2,Pt/2,-Mt/2,Pt/2,Q,U,.72,.9),J.wall(-Mt/2,Pt/2,-Mt/2,-Pt/2,Q,U,.72,.9),J.wall(Mt/2,-Pt/2,Mt/2,-Ht/2,Q,U,.72,.9),J.wall(Mt/2,Ht/2,Mt/2,Pt/2,Q,U,.72,.9),J.wall(Mt/2,-Ht/2,Mt/2,Ht/2,Q+At,U,.8,.9),J.surf(et.gilt,q.gold),J.box(Mt/2+.2,-Ht/2-.6,Q,.6,1.2,At+1.2,0,{foot:.8}),J.box(Mt/2+.2,Ht/2+.6,Q,.6,1.2,At+1.2,0,{foot:.8}),J.box(Mt/2+.2,0,Q+At,.6,Ht+2.4,1.2,0,{bottom:!0});for(let Xt of[-1,1])J.surf(et.metal,q.silver).box(Mt/2+Ht/4+.3,Xt*(Ht/2+.25),Q,Ht/2,.35,At,0,{foot:.7});let It=Mt-zt*2,qt=Pt-zt*2,wt=q.orichalcum;yt(U,Mt/2,Pt/2,It/2,qt/2,.85),N.surf(et.metal,wt),N.wall(It/2,-qt/2,-It/2,-qt/2,Q,U,.6,.85),N.wall(-It/2,qt/2,It/2,qt/2,Q,U,.6,.85),N.wall(-It/2,-qt/2,-It/2,qt/2,Q,U,.6,.85),N.wall(It/2,-Ht/2,It/2,-qt/2,Q,U,.6,.85),N.wall(It/2,qt/2,It/2,Ht/2,Q,U,.6,.85),N.wall(It/2,Ht/2,It/2,-Ht/2,Q+At,U,.7,.85);for(let Xt of[-1,1])N.wall(It/2,Xt*Ht/2,Mt/2,Xt*Ht/2,Q,Q+At,.7);N.surf(et.metal,Ze(wt,.92)).slab(0,0,Q+.04,It,qt,0,.8),J.surf(et.smooth,q.white).slab(0,0,Q+.02,T-.2,B-.2,0,.82);let ae=14,le=qt*.27;for(let Xt of[-1,1])Cs(N,-It/2+9,Xt*le,It/2-9,Xt*le,Q,ae,1.45,F,{n:e.phone?8:12,surf:et.metal,tint:wt,shade:.85});let De=U-.05,Cn=26,Pn=10,Mn=It/Cn,ke=qt/Pn,us=[q.gold,q.silver,wt];$.surf(et.ivory,q.ivory).quad([-It/2,qt/2,De],[It/2,qt/2,De],[It/2,-qt/2,De],[-It/2,-qt/2,De],.8);for(let Xt=0;Xt<Cn;Xt++)for(let fe=0;fe<Pn;fe++){let D=-It/2+(Xt+.5)*Mn,rt=-qt/2+(fe+.5)*ke,_t=us[(Xt+fe*2)%3],mt=.3;$.surf(et.gilt,_t).quad([D-Mn*mt,rt+ke*mt,De-.12],[D+Mn*mt,rt+ke*mt,De-.12],[D+Mn*mt,rt-ke*mt,De-.12],[D-Mn*mt,rt-ke*mt,De-.12],.9)}ht.surf(et.metal,Ze(q.silver,.8)).quad([-T/2,B/2,U+I*.3],[T/2,B/2,U+I*.3],[T/2,-B/2,U+I*.3],[-T/2,-B/2,U+I*.3],.5);let Ee=U+I,He=T/2+1.2,jn=B/2+1.6,In=Ee+k;ht.surf(et.metal,Ze(q.silver,.95)),ht.quad([-He,-jn,Ee],[He,-jn,Ee],[He,0,In],[-He,0,In],.92,.92,1,1),ht.quad([He,jn,Ee],[-He,jn,Ee],[-He,0,In],[He,0,In],.92,.92,1,1);let Oi=e.phone?0:46;for(let Xt=0;Oi&&Xt<=Oi;Xt++){let fe=-He+2*He*Xt/Oi;for(let D of[-1,1])ht.quad([fe-.25,D*jn,Ee+.25],[fe+.25,D*jn,Ee+.25],[fe+.25,0,In+.25],[fe-.25,0,In+.25],1)}for(let Xt of[-1,1]){let fe=Xt*(T/2-.4);ht.surf(et.metal,q.silver),Xt>0?ht.tri([fe,-B/2,Ee],[fe,B/2,Ee],[fe,0,In-.3],.8,.8,.95):ht.tri([fe,B/2,Ee],[fe,-B/2,Ee],[fe,0,In-.3],.8,.8,.95),ht.surf(et.gilt,q.gold);let D=k*.3,rt=20;for(let _t=0;_t<rt;_t++){let mt=_t/rt*re,xt=(_t+1)/rt*re,Gt=[fe+Xt*.25,0,Ee+k*.4],jt=[fe+Xt*.25,Math.cos(mt)*D,Ee+k*.4+Math.sin(mt)*D],Ot=[fe+Xt*.25,Math.cos(xt)*D,Ee+k*.4+Math.sin(xt)*D];Xt>0?ht.tri(Gt,jt,Ot):ht.tri(Gt,Ot,jt)}}let _r=(Xt,fe,D,rt)=>G.surf(et.gilt,q.gold).turned(Xt,fe,D,[[rt*.1,0],[rt*.13,rt*.08],[rt*.05,rt*.2],[rt*.16,rt*.45],[rt*.19,rt*.58],[rt*.07,rt*.78],[rt*.03,rt*.9],[0,rt]],8);for(let Xt of[-1,1]){_r(Xt*He,0,In,9.5);for(let fe of[-1,1])_r(Xt*He,fe*jn,Ee,6.5)}let br=e.phone?12:44;for(let Xt=1;Xt<br;Xt++)G.surf(et.gilt,q.gold).shaft(-He+2*He*Xt/br,0,In,.5,.05,2.6,4);for(let Xt=0;Xt<=(e.phone?0:44);Xt++)for(let fe of[-1,1])G.shaft(-He+2*He*Xt/44,fe*jn,Ee,.45,.05,1.5,4);let Ln=i.to("poseidon"),Bi=-It/2+34;Ln.surf(et.gilt,q.gold).box(Bi-6,0,Q,30,22,1.2,0,{foot:.7,topShade:.8}),Ln.box(Bi-9,0,Q+3.4,9,7,2.6,0,{bottom:!0,foot:.8});for(let Xt of[-1,1]){let fe=Ln.F.push(Bi-9,Xt*4.2,Q+4,0);for(let D=0;D<14;D++){let rt=D/14*re,_t=(D+1)/14*re;Ln.tri([0,0,0],[Math.cos(rt)*2.8,0,Math.sin(rt)*2.8],[Math.cos(_t)*2.8,0,Math.sin(_t)*2.8])}Ln.F.pop(fe)}pa(Ln,Bi-9,0,Q+6,F-6.3,-Math.PI/2,{n:12,arm:!0});for(let Xt=0;Xt<6;Xt++)Xx(Ln,Bi+8+Xt%2*2.5,(Xt-2.5)*3.9,Q+1.2,10.5,0,q.gold);let ds=i.to("nereids"),zi=0;for(let Xt=0;Xt<22&&zi<100;Xt++)for(let[fe,D]of[[le-5.4,1],[le+5.4,-1],[-le+5.4,-1],[-le-5.4,1]]){if(zi>=88)break;let rt=-It/2+12+Xt*(It-30)/21;ds.surf(et.metal,wt).box(rt,fe,Q,2.4,1.6,1.3,0,{foot:.6}),jd(ds,rt,fe,Q+.9,D>0?0:Math.PI,q.gold),zi++}for(let Xt=0;zi<100;Xt++,zi++){let fe=(-.42+.84*Xt/11)*Math.PI,D=Bi+30+Math.cos(fe)*9,rt=Math.sin(fe)*15;ds.surf(et.metal,wt).box(D,rt,Q,2.4,1.6,1.3,fe,{foot:.6}),jd(ds,D,rt,Q+.9,fe,q.gold)}let Xl=i.to("votive-inside");for(let Xt=0;Xt<24;Xt++){let fe=-It/2+14+(It-60)*(Xt>>1)/11.5+4,D=Xt%2?1:-1;Cl(Xl,fe,D*(qt/2-2.6),Q,3.2+b()*1.4,D>0?-Math.PI/2:Math.PI/2,{plinth:[et.metal,wt],tint:Xt%3?q.gold:q.silver})}let wr=i.to("pillar");wr.surf(et.metal,wt).box(It/2-52,0,Q,4.2,4.2,.9,0,{foot:.7}),wr.box(It/2-52,0,Q+.9,2.2,1,7.5,0,{foot:.85}),wr.box(It/2-52,0,Q+8.4,2.6,1.3,.5,0,{bottom:!0})}O.pop(nt);let tt=s+Q+F+I+k,at=i.to("statues"),ft=i.to("votive-outside");{let R=T/2+15,H=B/2+15,K=2*(2*R+2*H),w=60;for(let P=0;P<w;P++){let U=(P+.5)/w*K,C,Y,it;U<2*R?(C=-R+U,Y=-H,it=-Math.PI/2):(U-=2*R)<2*H?(C=R,Y=-H+U,it=0):(U-=2*H)<2*R?(C=R-U,Y=H,it=Math.PI/2):(U-=2*R,C=-R,Y=H-U,it=Math.PI),!(C===R&&Math.abs(Y)<9)&&Cl(at,M+C,W+Y,s,4.4,it+Math.PI/2,{plinth:[et.smooth,P%2?q.white:q.red]})}for(let P=0;P<38;P++){let U=P%2?1:-1,C=f+U*(d+4+P%3*3.2),Y=-t.rampTop+12+(P>>1)*5.6,it=P%4,yt=s;Math.hypot(C,Y)>r-6||(it===0?(os(ft,C,Y,yt,.42,5.2,{n:8,tint:q.white}),pa(ft,C,Y,yt+5.2,2.2,-Math.PI/2,{n:6,tint:q.gold})):it===1?(ft.surf(et.smooth,q.white).box(C,Y,yt,1.5,.9,.4,0),ft.surf(et.smooth,P%3?q.white:q.black).box(C,Y,yt+.4,1,.32,2.7,0,{foot:.85})):it===2?ft.surf(et.gilt,P%3?q.brass:q.silver).turned(C,Y,yt,[[.5,0],[.16,.25],[.12,1.1],[.3,1.25],[.85,1.75],[.9,1.85],[0,1.6]],8):Cl(ft,C,Y,yt,2.6,-Math.PI/2*U,{tint:P%3?q.gold:q.brass}))}}let bt=i.to("altar"),L=M+T/2+34*c,X=W;for(let R=0;R<3;R++)bt.surf(et.smooth,[q.white,q.red,q.white][R]).box(L,X,s+R*.5,15-R*2.2,50-R*2.2,.5,0,{foot:.8,topShade:.88});bt.surf(et.stoneCourses,q.white).box(L,X,s+1.5,6.5,42,3.1,0,{foot:.8}),bt.surf(et.smooth,q.white).box(L,X,s+4.6,7.6,43.2,.55,0,{bottom:!0,foot:.8,topShade:.9});for(let R of[-1,1])bt.surf(et.smooth,q.white).box(L,X+R*21.2,s+5.15,7.6,.9,1.3,0,{foot:.9});bt.surf(et.gilt,q.gold).box(L,X,s+1.6,6.7,42.2,.3,0,{top:!1});let Z=i.to("palace"),ut=[et.stoneBands,q.white],ot=[et.stoneChequer,q.white],Tt=[et.stone,q.white],Et=[et.stone,q.red],Ft=q.gold;on(Z,0,215*c,s,150,22,14,0,{wall:ut,cornice:q.white,base:[et.stone,q.black],windows:2,doors:[[0,-40],[0,40]],tile:q.tile[1]}),on(Z,-86,152*c,s,22,104,12,0,{wall:Tt,cornice:q.red,base:[et.stone,q.red],windows:2,doors:[[1,-30],[1,30]],tile:q.tile[0]}),on(Z,86,152*c,s,22,104,12,0,{wall:Tt,cornice:q.red,base:[et.stone,q.red],windows:2,doors:[[3,-30],[3,30]],tile:q.tile[0]}),on(Z,0,196*c,s,34,18,25,0,{wall:ot,roof:"hip",cornice:Ft,windows:2,doors:[],tile:q.tile[2]}),on(Z,0,148*c,s+1.2,44,64,17,0,{wall:ut,cornice:Ft,base:[et.stone,q.black],windows:0,doors:[],tile:q.tile[1],rise:7}),Z.surf(et.smooth,q.white).box(0,148*c,s,48,68,1.2,0,{foot:.8}),Z.surf(et.smooth,q.white).box(0,148*c-34-6,s,44,12,1.2,0,{foot:.8,topShade:.86}),Z.box(0,148*c-34-13.5,s,40,3,.8,0,{foot:.8}),Z.box(0,148*c-34-16,s,40,2.5,.4,0,{foot:.8}),Cs(Z,-19.5,148*c-34-10.5,19.5,148*c-34-10.5,s+1.2,6,1.15,14.6,{n:14,tint:q.red}),Z.surf(et.smooth,q.white).box(0,148*c-34-6,s+15.8,44,12,1.4,0,{bottom:!0,foot:.75});{let R=Z.F.push(0,148*c-34-6,0,0);Al(Z,44,12,s+17.2,7,{tile:q.tile[1],wall:[et.smooth,q.white],ridgeAlongY:!0}),Z.F.pop(R)}da(Z,44,64,0,0,0,{pw:5,ph:9,leaf:q.brass});{let R=Z.F.push(0,148*c,s+1.2,0);da(Z,44,64,0,0,0,{pw:5,ph:9.5,leaf:q.brass,frame:Ft}),Z.F.pop(R)}for(let R of[-1,1])yi(Z,R*71,150*c,s,96,7,6.2,R>0?Math.PI/2:-Math.PI/2,{wall:Tt,colTint:q.red,r:.42,simple:!1}),Z.surf(et.gilt,Ft).shaft(R*86,152*c,s+12+4.6,.5,.04,3,6);on(Z,-150,62*c,s,20,66,10,-.5,{wall:Et,cornice:q.white,base:[et.stone,q.black],windows:2,doors:[[1,0]],tile:q.tile[3]}),on(Z,160,66*c,s,20,60,10,.45,{wall:[et.stoneCourses,q.white],cornice:q.white,windows:2,doors:[[3,0]],tile:q.tile[3]}),on(Z,-205,150*c,s,18,50,8,-.95,{wall:Tt,windows:1,doors:[[1,0]],tile:q.tile[0]}),on(Z,205,150*c,s,18,50,8,.95,{wall:Tt,windows:1,doors:[[3,0]],tile:q.tile[0]});for(let R of[-1,1])for(let H=0;H<7;H++)_.push({x:R*40,y:108*c+H*12,z:s,s:7+b()*2,kind:"cypress",id:"palace"});let Dt=i.to("guard-dwellings");for(let R=0;R<16;R++){let H=196+R*6.6,[K,w]=A(a+50*c,H);R%5!==4&&on(Dt,K,w,n,15,9,4.4+R%3*.6,H*ai+Math.PI/2,{wall:[et.plaster,q.plaster[R%6]],windows:1,doors:[[0,-3]],tile:q.tile[R%4],base:[et.stone,q.white]})}let ne=i.to("springs"),Wt=i.to("reservoirs"),Rt=i.to("baths"),Ct=(a+26+l-o)/2+2,Ut=(R,H,K,w)=>{R.surf(et.smooth,q.white).shaft(H,K,n,8.6,8.6,.5,20,{cap:!0,foot:.8,head:.85});for(let P=0;P<10;P++){let U=P/10*re;os(R,H+Math.cos(U)*7.4,K+Math.sin(U)*7.4,n+.5,.42,5.6,{n:8,tint:w})}R.surf(et.smooth,q.white).shaft(H,K,n+6.1,8.2,8.2,.7,20,{foot:.75}),R.surf(et.tiles,q.tile[1]).shaft(H,K,n+6.8,8.9,.3,4.2,20,{foot:.9,head:1}),R.surf(et.gilt,q.gold).shaft(H,K,n+10.9,.35,.03,1.6,6),R.surf(et.smooth,q.white).shaft(H,K,n+.5,4.4,4.4,.8,16,{foot:.8}),R.shaft(H,K,n+.5,3.8,3.8,.8,16,{foot:.6}),S.push({x:H,y:K,z:n+1.1,r:3.8,id:"springs"})},[st,Vt]=A(Ct,36),[St,Bt]=A(Ct,58);Ut(ne,st,Vt,q.red),Ut(ne,St,Bt,q.white);let vt=(R,H,K,w,P)=>{let[U,C]=A(Ct,H),Y=H*ai+Math.PI/2,it=R.F.push(U,C,n,Y);R.surf(et.smooth,q.white);for(let[yt,Mt,Pt,zt]of[[0,-w/2,K+1.6,.8],[0,w/2,K+1.6,.8],[-K/2,0,.8,w],[K/2,0,.8,w]])R.box(yt,Mt,0,Pt,zt,.8,0,{foot:.8,topShade:.9});R.surf(et.paving,q.white).slab(0,0,.05,K+5,w+5,0,.85),R.F.pop(it),S.push({x:U,y:C,z:n+.6,w:K,d:w,rot:Y,id:P})};vt(Wt,47,26,15,"reservoirs"),vt(Wt,26,22,14,"reservoirs");for(let R of[20,64]){let[H,K]=A(Ct+3,R);on(Wt,H,K,n,30,15,6.5,R*ai+Math.PI/2,{wall:[et.stoneCourses,q.white],windows:0,doors:[[0,0]],tile:q.tile[2],cornice:q.white})}let Lt=(R,H,K,w,P,U)=>{let[C,Y]=A(Ct,R);Rl(Rt,C,Y,n,H,K,w,R*ai+Math.PI/2,{depth:6,wall:P,tile:U,floor:[et.paving,q.white]}),S.push({x:C,y:Y,z:n+.35,w:H-22,d:K-20,rot:R*ai+Math.PI/2,id:"baths"})};Lt(73,40,34,5.2,[et.stoneBands,q.white],q.tile[1]),Lt(84,54,38,4.8,[et.stone,q.white],q.tile[0]),Lt(96,36,32,4.6,[et.stone,q.red],q.tile[3]);{let[R,H]=A(Ct,9);yi(Rt,R,H,n,46,9,4.6,9*ai-Math.PI/2,{wall:[et.stone,q.black],cols:10});let[K,w]=A(Ct-13,9);vt(Rt,9,.01,.01,"baths"),S.pop(),S.push({x:K,y:w,z:n+.3,w:40,d:9,rot:9*ai+Math.PI/2,id:"baths"}),Rt.surf(et.smooth,q.white).box(K,w,n,42,11,.5,9*ai+Math.PI/2,{foot:.8,topShade:.85})}let kt=i.to("aqueducts"),Nt=a+30*c,V=v(Nt)+.06,E=205*ai;kt.surf(et.smooth,q.white).sweep([[Nt+1.1,n,.8],[Nt+1.1,n+.45],[Nt+.7,n+.45],[Nt+.7,n+.1,.6],[Nt-.7,n+.1,.6],[Nt-.7,n+.45],[Nt-1.1,n+.45],[Nt-1.1,n,.8]],{arcs:[[V,E]],step:6}),S.push({arc:[V,E],r0:Nt-.7,r1:Nt+.7,z:n+.34,id:"aqueducts"});for(let R=0;R<46;R++){let H=12+b()*92,[K,w]=A(a+30+b()*(l-o-a-36),H);_.push({x:K,y:w,z:n,s:7+b()*5,kind:R%3?"plane":"cypress",id:"springs",soft:!0})}let ct=e.phone?260:520;for(let R=0;R<ct;R++){let H=104+b()*86,K=a+32+b()*(l-o-a-38),[w,P]=A(K,H);_.push({x:w,y:P,z:n,s:13+b()*13,kind:["cypress","plane","pine","plane"][R%4],id:"grove"})}let pt=e.phone?300:620;for(let R=0;R<pt;R++){let H=b()*re,K=r+7+Math.floor(b()*6)/6*(a-r-14)+b()*2;Math.abs(Math.atan2(Math.sin(H-v(K)),Math.cos(H-v(K))))<(d+6)/K||_.push({x:K*Math.cos(H),y:K*Math.sin(H),z:x(K),s:3.2+b()*2.6,kind:R%3?"olive":"fruit",id:"island-gardens"})}return{trees:_,pools:S,hall:y,temple:{x:M,y:W,z:s,L:T,W:B,top:tt,floor:s+Q,room:{l:T-30*c,w:B-30*c,door:9}},altar:{x:L,y:X},springs:[[st,Vt],[St,Bt]]}};var Kd=(i,t,e)=>{let{B:n,Q:s,T:r,rW1:a,rL1:l,rW2:o,r1a:h,r1b:u,r2a:c,r2b:f,rcMid:d,rcHalf:p,off:v,bridgeHalf:g,SEA:m,roadAngle:x,k:b,rL2:_,rT:S,rW3:A,strip:y}=t,T=Hn(1170),B=[],M=[],W=e.phone?14:8,J=i.to("ring-temples"),ht=i.to("gymnasia"),N=i.to("horse-grounds"),$=i.to("gardens"),G=i.to("patterned-buildings"),j=i.to("ring-layout"),lt=(Rt,Ct,Ut)=>{let st=Rt*Math.cos(Ct);return Rt*Math.sin(Ct)<0&&Math.abs(st-v)<g+Ut},Q=Rt=>Rt[T()*Rt.length|0],F={temple:(Rt,Ct,Ut,st,Vt)=>{let St=J,Bt=St.F.push(Rt,Ct,n,Ut),vt=Math.min(st-8,78),Lt=Math.min(Vt-8,84);St.surf(et.stone,q.white);for(let[V,E,ct,pt]of[[0,Lt/2,vt,.8],[-vt/2,0,.8,Lt],[vt/2,0,.8,Lt],[-vt/4-2,-Lt/2,vt/2-4,.8],[vt/4+2,-Lt/2,vt/2-4,.8]])St.box(V,E,0,ct,pt,2.1,0,{foot:.78,topShade:.9});for(let V of[-1,1])St.surf(et.stone,q.red).box(V*4.6,-Lt/2,0,1.4,1.4,3.4,0,{foot:.8});let kt=11+T()*7,Nt=T()*3|0;Wd(St,0,Lt*.12,0,kt,kt*(1.9+T()*.5),0,{wall:[[et.stone,et.stoneBands,et.stoneCourses][Nt],q.white],colTint:Nt===2?q.red:q.white,tile:Q(q.tile),cols:kt>14?6:4,finial:T()<.5?q.gold:null}),St.surf(et.smooth,q.white).box(0,-Lt*.3,0,5,2.4,1.3,0,{foot:.8}),St.surf(et.paving,q.white).slab(0,-Lt*.2,.05,7,Lt*.5,0,.9),St.F.pop(Bt);for(let V of[-1,1])for(let E=0;E<5;E++){let ct=V*(vt/2-5),pt=-Lt/2+8+E*((Lt-16)/4),R=Math.cos(Ut),H=Math.sin(Ut);B.push({x:Rt+R*ct-H*pt,y:Ct+H*ct+R*pt,z:n,s:9+T()*4,kind:"cypress",id:"ring-temples"})}},gym:(Rt,Ct,Ut,st,Vt)=>{let St=Math.min(st-10,74),Bt=Math.min(Vt-12,62);Rl(ht,Rt,Ct,n,St,Bt,4.8,Ut,{depth:6,wall:[et.stone,Q([q.white,q.white,q.red])],tile:Q(q.tile)});let vt=ht.F.push(Rt,Ct,n,Ut);for(let Lt=0;Lt<2;Lt++)ht.surf(et.smooth,q.white).box((Lt?1:-1)*6,0,.06,1,1,1.5,0,{foot:.8});ht.F.pop(vt)},horses:(Rt,Ct,Ut,st,Vt)=>{let St=N,Bt=St.F.push(Rt,Ct,n,Ut),vt=Math.min(st-10,88),Lt=Math.min(Vt-22,58);St.surf(et.sand,q.sand).slab(0,-4,.07,vt,Lt,0,.95),St.surf(et.wood,q.wood);let kt=(ct,pt,R,H)=>{let K=Math.hypot(R-ct,H-pt),w=Math.atan2(H-pt,R-ct);for(let U of[.7,1.25])St.box((ct+R)/2,(pt+H)/2,U,K,.12,.16,w,{bottom:!0});let P=Math.round(K/7);for(let U=0;U<=P;U++)St.box(ct+(R-ct)*U/P,pt+(H-pt)*U/P,0,.2,.2,1.5,w,{foot:.7})};kt(-vt/2,-4-Lt/2,vt/2,-4-Lt/2),kt(vt/2,-4-Lt/2,vt/2,-4+Lt/2),kt(-vt/2,-4+Lt/2,-vt/2,-4-Lt/2),St.F.pop(Bt);let Nt=Math.cos(Ut),V=Math.sin(Ut),E=-4+Lt/2+6;yi(St,Rt-V*E,Ct+Nt*E,n,vt,8,4.2,Ut,{wall:[et.stone,q.white],tile:Q(q.tile),cols:Math.round(vt/5.5),r:.3,simple:"pier"})},garden:(Rt,Ct,Ut,st,Vt)=>{let St=$,Bt=St.F.push(Rt,Ct,n,Ut),vt=st-12,Lt=Vt-12;St.surf(et.paving,q.white).slab(0,0,.06,3,Lt,0,.9),St.slab(0,0,.065,vt,3,0,.9),St.surf(et.smooth,q.white).shaft(0,0,0,3.4,3.4,.7,12,{cap:!0,foot:.8,head:.55}),St.surf(et.stone,q.white);for(let[ct,pt,R,H]of[[0,Lt/2,vt,.5],[0,-Lt/2,vt,.5],[-vt/2,0,.5,Lt],[vt/2,0,.5,Lt]])St.box(ct,pt,0,R,H,.9,0,{foot:.8});St.F.pop(Bt);let kt=Q(["olive","fruit","fruit","plane"]),Nt=kt==="plane"?15:11.5,V=Math.cos(Ut),E=Math.sin(Ut);for(let ct=-vt/2+5;ct<vt/2-3;ct+=Nt)for(let pt=-Lt/2+5;pt<Lt/2-3;pt+=Nt)Math.abs(ct)<4||Math.abs(pt)<4||e.phone&&(ct+pt|0)%2||B.push({x:Rt+V*ct-E*pt+(T()-.5),y:Ct+E*ct+V*pt+(T()-.5),z:n,s:(kt==="plane"?9:4)+T()*2.5,kind:kt,id:"gardens"})},houses:(Rt,Ct,Ut,st,Vt)=>{let St=G,Bt=St.F.push(Rt,Ct,n,Ut),vt=2+(T()*3|0);for(let Lt=0;Lt<vt;Lt++){let kt=14+T()*12,Nt=9+T()*5,V=5+T()*5,E=-st/2+12+(st-24)*(Lt+.5)/vt+(T()-.5)*4,ct=(T()-.5)*(Vt-40);on(St,E,ct,0,Math.min(kt,(st-16)/vt),Nt,V,T()<.3?Math.PI/2:0,{wall:[Q([et.stoneBands,et.stoneChequer,et.stoneCourses,et.stone,et.stone]),Q([q.white,q.white,q.red,q.black])],cornice:q.white,tile:Q(q.tile),windows:1,doors:[[0,0]]})}St.F.pop(Bt);for(let Lt=0;Lt<4;Lt++){let kt=(T()-.5)*(st-14),Nt=Vt/2-8-T()*8,V=Math.cos(Ut),E=Math.sin(Ut);B.push({x:Rt+V*kt-E*Nt,y:Ct+E*kt+V*Nt,z:n,s:6+T()*5,kind:Q(["plane","cypress","olive"]),id:"gardens"})}}},I=(Rt,Ct,Ut,st,Vt=104)=>{let St=(Rt+Ct)/2,Bt=Ct-Rt,vt=Math.floor(re*St/Vt),Lt=re*St/vt-2;for(let kt=0;kt<vt;kt++){let Nt=m+(kt+.5)/vt*re;if(lt(St,Nt,Lt/2+6))continue;let V=st[(kt*7+(T()*2|0))%st.length];F[V](St*Math.cos(Nt),St*Math.sin(Nt),Ut>0?Nt+Math.PI/2:Nt-Math.PI/2,Math.min(Lt,Vt),Bt)}},z=(Rt,Ct)=>j.surf(et.paving,[226,220,205]).sweep([[Rt-Ct/2,n+.05],[Rt+Ct/2,n+.05]],{step:W,sense:-1}),k=h+r+5,O=u-r-5,nt=(k+O)/2;z(nt,9);let tt=["temple","garden","gym","garden","houses","horses","temple","garden","houses"];I(k,nt-6,1,tt),I(nt+6,O,-1,tt);{let Rt=i.to("guard-house"),Ct=x(nt)+.2,Ut=(nt+10)*Math.cos(Ct),st=(nt+10)*Math.sin(Ct),Vt=Rt.F.push(Ut,st,n,Ct-Math.PI/2),St=96,Bt=78;for(let[vt,Lt,kt,Nt,V]of[[0,Bt/2-6,St,12,0],[0,-Bt/2+6,St,12,0],[-St/2+6,0,12,Bt-24,0],[St/2-6,0,12,Bt-24,0]])on(Rt,vt,Lt,0,kt,Nt,9,V,{wall:[et.stoneBands,q.white],base:[et.stone,q.black],cornice:q.red,windows:2,doors:[[Lt>0?0:2,0]],tile:q.tile[2]});for(let vt of[-1,1])for(let Lt of[-1,1])fa(Rt,vt*(St/2-2),Lt*(Bt/2-2),0,9,14,0,{face:[et.stone,q.red],crown:[et.stone,q.white]});Rt.surf(et.sand,q.sand).slab(0,0,.06,St-24,Bt-24,0,.95),Rt.F.pop(Vt)}let at=c+r+5,ft=f-r-5,bt=d-p,L=d+p,X=i.to("racecourse"),Z=i.to("racecourse-form"),ut=i.to("barracks");X.surf(et.sand,q.sand).sweep([[bt,n+.1],[d,n+.1,.96],[L,n+.1]],{step:W,sense:-1});for(let[Rt,Ct]of[[bt,-1],[L,1]])Z.surf(et.smooth,q.white).sweep([[Rt-.5,n,.8],[Rt-.5,n+1],[Rt+.5,n+1],[Rt+.5,n,.8]],{step:W,sense:1*(Ct>0,1)});for(let Rt=0;Rt<48;Rt++){let Ct=Rt/48*re;lt(d,Ct,30)||(os(Z,d*Math.cos(Ct),d*Math.sin(Ct),n+.1,.7,6.5,{n:8,tint:Rt%6?q.white:q.red}),Rt%6===0&&Z.surf(et.gilt,q.gold).shaft(d*Math.cos(Ct),d*Math.sin(Ct),n+6.6,.5,.05,2,6))}for(let Rt of[-.13,-.085,.085,.13]){let Ct=x(L)+Rt,Ut=Z.F.push((L+9)*Math.cos(Ct),(L+9)*Math.sin(Ct),n,Ct+Math.PI/2);for(let st=0;st<6;st++)Z.surf(et.smooth,q.white).box(0,-st*1.3+3.3,0,60,1.3,.6+(5-st)*.62,0,{foot:.8,topShade:.88});Z.F.pop(Ut)}let ot=Rt=>Math.floor(re*Rt/66);for(let[Rt,Ct]of[[bt-15,-1],[L+15,1],[bt-31,-1],[L+31,1]]){let Ut=ot(Rt);for(let st=0;st<Ut;st++){let Vt=m+(st+.5)/Ut*re;lt(Rt,Vt,40)||st%9===4||on(ut,Rt*Math.cos(Vt),Rt*Math.sin(Vt),n,56,9.5,4.6,Ct>0?Vt-Math.PI/2:Vt+Math.PI/2,{wall:[et.stone,st%4===1?q.red:q.white],windows:1,doors:[[0,-16],[0,0],[0,16]],tile:q.tile[st%4],base:[et.stone,q.black],rise:2.3})}}z(bt-45,7),z(L+45,7);let Tt=["garden","temple","gym","garden","horses","houses","garden","horses","temple","gym"];I(at,bt-50,1,Tt),I(L+50,ft,-1,Tt);let Et=i.to("ship-sheds"),Ft=40,Dt=7.4,ne=(Rt,Ct,Ut,st)=>{let Vt=Et.F.push(Rt,Ct,0,Ut),St=4.3,Bt=Dt/2,vt=-Ft/2,Lt=Ft/2,kt=s+.25;Et.surf(et.paving,Ze(q.white,.9)).quad([-Bt,vt-7,-1.3],[Bt,vt-7,-1.3],[Bt,Lt,kt+1.2],[-Bt,Lt,kt+1.2],.6,.6,.45,.45),Et.surf(et.stone,q.white);for(let E=0;E<5;E++)Et.box(Bt,vt+2+E*((Ft-4)/4),s,.7,2.2,St,0,{foot:.7});if(Et.box(Bt,0,s+St,.7,Ft,.5,0,{bottom:!0,foot:.7}),st){for(let E=0;E<5;E++)Et.box(-Bt,vt+2+E*((Ft-4)/4),s,.7,2.2,St,0,{foot:.7});Et.box(-Bt,0,s+St,.7,Ft,.5,0,{bottom:!0,foot:.7})}Et.wall(Bt,Lt,-Bt,Lt,s,s+St+.5,.6,.8);let Nt=s+St+.5,V=Nt+1.9;Et.surf(et.tiles,q.tile[(Math.abs(Rt*7+Ct*3)|0)%4]),Et.quad([-Bt-.2,vt-.6,Nt],[0,vt-.6,V],[0,Lt+.3,V],[-Bt-.2,Lt+.3,Nt],.95),Et.quad([0,vt-.6,V],[Bt+.2,vt-.6,Nt],[Bt+.2,Lt+.3,Nt],[0,Lt+.3,V],.95),Et.surf(et.wood,q.darkWood).tri([-Bt,vt,Nt],[Bt,vt,Nt],[0,vt,V],.55),Et.tri([Bt,Lt,Nt],[-Bt,Lt,Nt],[0,Lt,V],.7),Et.F.pop(Vt)};for(let[Rt,Ct]of[[a,!0],[l,!1],[o,!0]]){let Ut=Ct?Rt+1+Ft/2:Rt-1-Ft/2,st=Math.floor(re*Ut/(Dt+.7));for(let Vt=0;Vt<st;Vt++){let St=m+(Vt+.5)/st*re,Bt=Vt%14;if(Bt>=6||Math.abs(Math.atan2(Math.sin(St-m),Math.cos(St-m)))<34/Ut||lt(Ut,St,24)||e.phone&&Vt%28>=9)continue;let vt=Ct?St-Math.PI/2:St+Math.PI/2;if(ne(Ut*Math.cos(St),Ut*Math.sin(St),vt,Bt===0),T()<.7){let Lt=Ct?Ut+2:Ut-2;M.push({x:Lt*Math.cos(St),y:Lt*Math.sin(St),z:s+1,rot:Ct?St+Math.PI:St,tilt:0,sx:1})}}}let Wt=i.to("quays");for(let[Rt,Ct,Ut]of[[f+7,1,44],[S-7,-1,52]]){let st=Math.floor(re*Rt/(Ut+26));for(let Vt=0;Vt<st;Vt++){let St=m+(Vt+.5)/st*re;if(!(lt(Rt,St,Ut/2+8)||Math.abs(Math.atan2(Math.sin(St-m),Math.cos(St-m)))<110/Rt)){if(Vt%5===3){let Bt=Wt.F.push((Rt+Ct*-6.4)*Math.cos(St),(Rt+Ct*-6.4)*Math.sin(St),0,Ct>0?St+Math.PI/2:St-Math.PI/2);for(let vt=0;vt<14;vt++)Wt.surf(et.smooth,q.white).box(0,-9+vt*.7+4.5,s,9,.7,(n-s)*(vt+1)/14,0,{foot:.75,topShade:.9});Wt.F.pop(Bt);continue}yi(Wt,Rt*Math.cos(St),Rt*Math.sin(St),s,Ut,9,4.4,Ct>0?St+Math.PI/2:St-Math.PI/2,{wall:[et.stone,Vt%3?q.white:q.red],tile:q.tile[Vt%4],r:.4,cols:Math.round(Ut/5.5),simple:"pier"})}}}return{trees:B,hulls:M,strip:y,rW3:A,rL2:_}};var Pl=(i,t)=>{let e=new xi(new vi,"block"),n=Hn(i),s=(r,a)=>{let l=-22;for(;l<21;){let o=Math.min(22-l,7.5+n()*6.5),h=9+n()*3.5,u=n()<.35?6.2+n()*1.4:3.3+n()*1.2,c=q.plaster[n()*6|0],f=q.tile[n()*4|0],d=r+(a>0?-1:1)*(h/2-5),p=n()<.24;if(t)on(e,l+o/2,d,0,o-.25,h,u,a>0?0:Math.PI,{wall:[et.plaster,c],tile:f,roof:p?"flat":"gable",windows:1,doors:[[0,(n()-.5)*(o-3.4)]],rise:1.3+n()*.8,ridgeAlongY:!1,over:.45,base:n()<.4?[et.stone,q.white]:null});else{let v=e.F.push(l+o/2,d,0,a>0?0:Math.PI),g=1.3+n()*.8,m=(o-.25)/2;e.surf(et.plaster,c).box(0,0,0,o-.25,h,u+(p?.6:0),0,{top:p,foot:.78,sides:p?15:3,topShade:.82}),p||(e.surf(et.tiles,f).quad([-m,-h/2-.4,u-.2],[m,-h/2-.4,u-.2],[m,0,u+g],[-m,0,u+g],.92,.92,1,1),e.quad([m,h/2+.4,u-.2],[-m,h/2+.4,u-.2],[-m,0,u+g],[m,0,u+g],.92,.92,1,1),e.surf(et.plaster,c).tri([m,-h/2,u],[m,h/2,u],[m,0,u+g],.85),e.tri([-m,h/2,u],[-m,-h/2,u],[-m,0,u+g],.85)),e.F.pop(v)}l+=o}};return s(-10,1),s(10,-1),t&&(e.surf(et.plaster,q.plaster[1]).box(-21.6,0,0,.5,9,2.4,0,{foot:.75}),e.box(21.6,0,0,.5,9,2.4,0,{foot:.75}),e.surf(et.wood,q.darkWood).wall(-21.9,1,-21.9,-1,0,2,.8),e.surf(et.earth,[205,192,168]).slab(0,0,.04,43,9,0,.75)),e.geometry()},Qd=(i,t)=>{let{rT:e,core:n,B:s,SEA:r,off:a,bridgeHalf:l,canalHalf:o,k:h}=i,u=Hn(1180),c={low:Pl(11,!1),high:[Pl(21,!0),Pl(22,!0),Pl(23,!0)]},f=t.phone?8:24,d=Array.from({length:f},()=>({blocks:[],cx:0,cy:0})),p=37,v=Math.floor((n-e-18)/p),g=t.phone?Math.min(v,7):v,m=[];for(let x=0;x<g;x++){let b=e+24+x*p,_=Math.floor(re*b/50);for(let S=0;S<_;S++){let A=r+(S+.5)/_*re,y=b*Math.cos(A),T=b*Math.sin(A);if(T<0&&(Math.abs(y)<o+12*h+30||Math.abs(y-a)<l+28))continue;let B=(A-r)/re*16;if(Math.abs(B-Math.round(B))*(re/16)*b<29)continue;if(u()<.035){for(let J=0;J<5;J++)m.push({x:y+(u()-.5)*34,y:T+(u()-.5)*22,z:s,s:6+u()*5,kind:u()<.5?"plane":"cypress",id:"house-form"});continue}let M=Math.min(f-1,Math.floor((A-r)/re%1*f)),W=.86+u()*.28;d[M].blocks.push({x:y,y:T,z:s,rot:A+Math.PI/2+(u()<.5?Math.PI:0),sx:re*b/_/50,sy:1,sz:.9+u()*.25,tint:[255*Math.min(1,W),255*Math.min(1,W*.985),255*Math.min(1,W*.95)],kind:u()*3|0})}}for(let x=0;x<f;x++){let b=r+(x+.5)/f*re,_=(e+n)/2;d[x].cx=_*Math.cos(b),d[x].cy=_*Math.sin(b),d[x].reach=re*_/f/2+(n-e)/2}return{protos:c,sectors:d,trees:m}};var tf=(i,t,e,n,s)=>{let r=[];for(let a=0;a<=n;a++){let l=a/n,[o,h,u,c]=e(l),f=(l-.5)*t;r.push([[f,-o,u+c],[f,-o*.96,u*.45+c],[f,-o*.6,-h*.55+c],[f,0,-h+c],[f,o*.6,-h*.55+c],[f,o*.96,u*.45+c],[f,o,u+c]])}i.surf(et.wood,s).loft(r,{flip:!0}),i.surf(et.wood,Ze(q.wood,1.05));for(let a=0;a<n;a++){let l=r[a],o=r[a+1];i.quad([l[0][0],l[0][1],l[0][2]-.25],[o[0][0],o[0][1],o[0][2]-.25],[o[6][0],o[6][1],o[6][2]-.25],[l[6][0],l[6][1],l[6][2]-.25],.8)}return r},Il=(i,t,e,n=.07)=>i.quad([t[0],t[1]-n,t[2]],[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],[e[0],e[1]-n,e[2]]),ef=i=>{let t=()=>new xi(new vi,"ship"),e=(s,r)=>{let a=t(),l=37;tf(a,l,o=>{let h=2.75*Math.min(1,Math.sin(Math.min(1,o*1.25)*Math.PI/2)**.7)*(o>.82?Math.max(.06,1-((o-.82)/.18)**1.6):1),u=o<.16?((.16-o)/.16)**2*4.2:o>.9?((o-.9)/.1)**2*1.2:0;return[Math.max(.12,h*(o<.1?.35+o*6.5:1)),1*(o<.12?o/.12:1),2.1,u]},r||i.phone?7:12,q.hull),a.surf(et.gilt,q.brass).box(l/2+.9,0,-.5,2.6,.5,.9,0,{bottom:!0}),a.surf(et.wood,q.hull);for(let o of[-1,1])a.box(0,o*3,1.5,l*.66,.6,.5,0,{bottom:!0,foot:.7});a.surf(et.wood,Ze(q.red,1.1)).box(l/2-2.2,0,2.1,.5,2.6,.9,0);for(let o=-1;o<=1;o++)a.surf(et.wood,q.hull).quad([-l/2+.2,o*.5-.12,6],[-l/2+.2,o*.5+.12,6],[-l/2+2.6+Math.abs(o)*.3,o*.9+.12,8.4-Math.abs(o)*.5],[-l/2+2.6+Math.abs(o)*.3,o*.9-.12,8.4-Math.abs(o)*.5]);if(s){a.surf(et.wood,q.wood).shaft(1.5,0,1.8,.2,.13,10.5,5),a.box(1.5,0,11.4,.3,11,.3,0,{bottom:!0}),a.surf(et.cloth,q.sail).box(1.5,0,10.9,.5,10.4,.55,0,{bottom:!0}),a.surf(et.wood,q.darkWood),Il(a,[1.5,0,12.2],[l/2-2,0,2.6]),Il(a,[1.5,0,12.2],[-l/2+2,0,5]);let o=i.phone?12:28;for(let h=0;h<o;h++)for(let u of[-1,1]){let c=-l*.3+l*.6*h/(o-1);a.surf(et.wood,q.wood).quad([c,u*2.9,1.5],[c+.14,u*2.9,1.5],[c+.14-1.2,u*7.2,.05],[c-1.2,u*7.2,.05])}}return a.geometry()},n=s=>{let r=t(),a=19;tf(r,a,l=>{let o=3*Math.sin(Math.min(1,l*1.6)*Math.PI/2)**.6*(l>.72?Math.max(.05,Math.cos((l-.72)/.28*Math.PI/2)**.8):1),h=l<.14?((.14-l)/.14)**1.6*3:l>.86?((l-.86)/.14)**1.6*2.2:0;return[Math.max(.1,o),1.5*Math.min(1,l/.1,(1-l)/.08),1.9,h]},7,Ze(q.hull,1.15)),r.surf(et.wood,Ze(q.hull,.9));for(let l of[-1,1])r.box(0,l*3.02,1.35,a*.7,.16,.3,0,{bottom:!0});if(r.surf(et.wood,q.wood).shaft(.6,0,1.6,.24,.15,12.5,5),r.box(.6,0,12.6,.3,11.5,.3,0,{bottom:!0}),s){r.surf(et.cloth,q.sail);let l=4;for(let o=0;o<l;o++){let h=12.6-o*8.2/l,u=12.6-(o+1)*8.2/l,c=p=>.75+Math.sin(p*Math.PI)*1.6,f=o/l,d=(o+1)/l;r.quad([c(f),-5.4,h],[c(f),5.4,h],[c(d),5.2,u],[c(d),-5.2,u],1,1,.9,.9)}}else r.surf(et.cloth,q.sail).box(.6,0,12.1,.55,10.8,.6,0,{bottom:!0});r.surf(et.wood,q.darkWood),Il(r,[.6,0,14],[a/2-.6,0,4.2]),Il(r,[.6,0,14],[-a/2+1,0,4.6]);for(let l of[-1,1])r.quad([.6,0,13.6],[.74,0,13.6],[.74,l*2.9,2],[.6,l*2.9,2]),r.surf(et.wood,q.wood).box(-a/2+2.2,l*2.6,-.6,.25,.5,4.4,0,{foot:.8});r.surf(et.wood,Ze(q.wood,.9)).box(-a/2+3.4,0,1.6,2.6,3.2,1.5,0,{foot:.8}),r.surf(et.tiles,[240,200,170]);for(let[l,o]of[[3.5,-.8],[4.6,.7]])r.shaft(l,o,1.6,.34,.46,.95,5,{cap:!0});return r.geometry()};return{trireme:e(!0),hull:e(!1,!0),merchant:n(!1),sailing:n(!0)}},nf=(i,t)=>{let{rIsle:e,rW1:n,rL1:s,rW2:r,rL2:a,rW3:l,canalHalf:o,edge:h,SEA:u,off:c,bridgeHalf:f,k:d}=i,p=Hn(1190),v=[],g=[],m=[],x=[],b=(S,A)=>!(A<0&&Math.abs(S-c)<f+16),_=t.phone?.5:1;for(let S=0;S<9*_;S++){let A=p()*re,y=(e+n)/2+(p()-.5)*70,T=y*Math.cos(A),B=y*Math.sin(A);b(T,B)&&v.push({x:T,y:B,z:.25,rot:A+Math.PI/2+(p()-.5)*.3})}for(let S=0;S<16*_;S++){let A=p()*re,y=(s+r)/2+(p()-.5)*190,T=y*Math.cos(A),B=y*Math.sin(A);b(T,B)&&v.push({x:T,y:B,z:.25,rot:A+Math.PI/2+(p()-.5)*.4})}for(let S=0;S<26*_;S++){let A=p()*re,y=e+5.5,T=y*Math.cos(A),B=y*Math.sin(A);b(T,B)&&Math.abs(A-Math.PI/2)>.12&&g.push({x:T,y:B,z:.25,rot:A+Math.PI/2})}for(let[S,A]of[[a+12,1],[l-12,-1]]){let y=Math.floor(re*S/15);for(let T=0;T<y;T++){if(p()>.21*_)continue;let B=u+(T+.5)/y*re,M=S*Math.cos(B),W=S*Math.sin(B);!b(M,W)||Math.abs(Math.atan2(Math.sin(B-u),Math.cos(B-u)))<90/S||m.push({x:M,y:W,z:.1,rot:A>0?B:B+Math.PI,sx:.8+p()*.5})}}for(let S=0;S<110*_;S++){let A=p()*re,y=(a+l)/2+(p()-.5)*380,T=y*Math.cos(A),B=y*Math.sin(A);b(T,B)&&(p()<.3?x:m).push({x:T,y:B,z:.1,rot:A+Math.PI/2+(p()-.5)*1.4+(p()<.5?Math.PI:0),sx:.8+p()*.5})}for(let S=0;S<26*_;S++){let A=l+p()*(h-l-30),y=p()<.5?-1:1;(p()<.55?x:m).push({x:y*o*(.25+p()*.4),y:-A,z:.1,rot:y>0?Math.PI/2:-Math.PI/2,sx:.85+p()*.45})}for(let S=0;S<30*_;S++){let A=l+60+p()*(h-l-120),y=p()<.5?-1:1;m.push({x:y*(o-3.6),y:-A,z:.1,rot:Math.PI/2*(p()<.5?1:-1),sx:.8+p()*.4})}return{triremes:v,hulls:g,merchants:m,sailing:x}};var ma=(i,t,e,n,s,r,a,l,o)=>{let h=Hn(o),u=()=>.86+h()*.28;i.surf(et.leaf,l).turned(t,e,n,[[s*.3,0],[s*u(),r*.36],[s*.8*u(),r*.72],[.01,r]],a,{rot:h()*6,squash:.9+h()*.2})},sf=i=>{let e=()=>new xi(new vi,"tree"),n=e();n.surf(et.wood,q.trunk).shaft(0,0,0,.022,.018,.12,4),n.surf(et.leaf,[255,255,255]).turned(0,0,.07,[[.03,0],[.095,.14],[.1,.36],[.06,.72],[.004,.93]],5);let s=e();s.surf(et.wood,q.trunk).shaft(0,0,0,.035,.025,.42,5),ma(s,.06,.02,.3,.3,.52,5,[255,255,255],3),ma(s,-.14,-.06,.4,.26,.6,5,[235,245,225],4);let r=e();r.surf(et.wood,q.trunk).shaft(0,0,0,.03,.02,.66,5),ma(r,0,0,.6,.36,.4,6,[215,235,205],5);let a=e();a.surf(et.wood,q.trunk).shaft(0,0,0,.06,.04,.34,5),ma(a,0,0,.24,.46,.76,5,[255,255,255],6);let l=e();return l.surf(et.wood,q.trunk).shaft(0,0,0,.045,.03,.36,4),ma(l,0,0,.28,.4,.72,5,[255,255,255],7),{cypress:n.geometry(),plane:s.geometry(),pine:r.geometry(),olive:a.geometry(),fruit:l.geometry()}},rf={cypress:[[150,175,150],[170,190,160],[135,160,140]],plane:[[255,255,255],[235,245,220],[220,235,205],[245,240,200]],pine:[[190,215,185],[205,225,195]],olive:[[225,232,236],[205,216,222]],fruit:[[255,255,235],[240,255,220],[225,240,205]]};var af=Math.PI*2,gh=Object.fromEntries(ri.map(i=>[i,[`${i}_c.jpg`,`${i}_n.jpg`]])),ls=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Yx=(i,t,e,n)=>{let s=Math.floor(i),r=Math.floor(t),a=i-s,l=t-r,o=a*a*(3-2*a),h=l*l*(3-2*l),u=(c,f)=>ls((c%e+e)%e,(f%e+e)%e,n);return(u(s,r)*(1-o)+u(s+1,r)*o)*(1-h)+(u(s,r+1)*(1-o)+u(s+1,r+1)*o)*h},un=(i,t,e,n,s=4)=>{let r=0,a=.5,l=1;for(let o=0;o<s;o++)r+=a*Yx(i*l,t*l,e*l,n+o),a*=.5,l*=2;return r/(1-2**-s)},Zx={ashlar:(i,t)=>{let n=Math.floor(t*8),s=t*8-n,r=2+(n%3===1?1:0),a=ls(n,0,3)*.6,l=(i+a)*r,o=Math.floor(l),h=l-o,u=1/r,c=Math.min(h*u*4.2,(1-h)*u*4.2,s*.525,(1-s)*.525)/.022,f=Math.min(1,c),d=.86+.2*ls(o%r,n,7),p=un(i*24,t*24,24,5),v=un(i*3,t*3,3,9),g=214*d*(.9+.2*p)*(.9+.14*v)*(.55+.45*f);return[g,g*.985,g*.95,f*(.75+.25*p),.9-.12*p]},paving:(i,t)=>{let n=i*5,s=t*5+Math.floor(i*5)%2*.5,r=Math.floor(n),a=Math.floor(s),l=n-r,o=s-a,h=Math.min(1,Math.min(l,1-l,o,1-o)/.03),u=.84+.22*ls(r%5,a%5,11),c=un(i*28,t*28,28,13),f=208*u*(.88+.22*c)*(.5+.5*h);return[f,f*.98,f*.93,h*(.8+.2*c),.86-.14*c]},tiles:(i,t)=>{let s=i*10,r=t*8,a=Math.floor(s),l=Math.floor(r),o=s-a,h=r-l,u=Math.abs(Math.sin(o*Math.PI)),c=h,f=.8+.3*ls(a,l,17),d=un(i*30,t*30,30,19),p=.25+.55*u+.2*(1-c),v=f*(.86+.25*d)*(.62+.38*u)*(c<.08?.7:1);return[196*v,112*v,76*v,p,.82]},plaster:(i,t)=>{let e=un(i*6,t*6,6,23,5),n=un(i*40,t*40,40,29,2),s=212*(.9+.14*e)*(.95+.08*n);return[s,s*.99,s*.96,.5+.3*e+.2*n,.9]},metal:(i,t)=>{let n=i*2,s=t*2*2,r=n-Math.floor(n),a=s-Math.floor(s),l=Math.min(1,Math.min(r,1-r,a*.5,(1-a)*.5)/.012),o=un(i*3,t*90,3,31,3),h=un(i*9,t*9,9,37),u=Math.hypot(r*8%1-.5,(a-.06)*4)<.16||Math.hypot(r*8%1-.5,(a-.94)*4)<.16?1:0,c=222*(.9+.1*o)*(.86+.16*h)*(.72+.28*l);return[c,c,c,.5*l+.1*o+.4*u,.34+.32*h+.1*o+.2*(1-l)]},grass:(i,t)=>{let e=un(i*8,t*8,8,41,5),n=un(i*60,t*60,60,43,2),s=un(i*3,t*3,3,47),r=.7+.5*e*n*2;return[(86+46*s)*r,(112+16*s)*r,54*r,n,.95]},sand:(i,t)=>{let e=un(i*10,t*10,10,53,4),n=ls(Math.floor(i*256),Math.floor(t*256),59),s=.86+.14*e+.06*n;return[216*s,198*s,162*s,.5*e+.5*n,.96]},wood:(i,t)=>{let n=t*6,s=Math.floor(n),r=n-s,a=Math.min(1,Math.min(r,1-r)/.04),l=un(i*4+ls(s,0,61)*9,t*70,4,67,3),h=(.8+.3*ls(s,1,71))*(.75+.4*l)*(.55+.45*a);return[150*h,112*h,78*h,a*(.6+.4*l),.8]},rock:(i,t)=>{let e=un(i*5,t*5,5,73,6),n=un(i*2,t*14,2,79,3),s=150*(.6+.5*e)*(.85+.25*n);return[s,s*.97,s*.92,.6*e+.4*n,.94]},leaf:(i,t)=>{let e=un(i*12,t*12,12,83,3),n=un(i*36,t*36,36,89,2),s=.45+1.1*e*(.6+.8*n);return[84*s,112*s,58*s,e*n*1.6,.86]}},of=(i,t)=>{let e=new Uint8Array(t*t*4),n=new Uint8Array(t*t*4),s=new Float32Array(t*t),r=Zx[i];for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=r((o+.5)/t,(l+.5)/t),u=(l*t+o)*4;e[u]=Math.min(255,h[0]),e[u+1]=Math.min(255,h[1]),e[u+2]=Math.min(255,h[2]),e[u+3]=255,s[l*t+o]=h[3],n[u+2]=Math.min(255,h[4]*255),n[u+3]=255}let a=t/64;for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=(s[l*t+(o+1)%t]-s[l*t+(o+t-1)%t])*a,u=(s[(l+1)%t*t+o]-s[(l+t-1)%t*t+o])*a,c=Math.hypot(h,u,1),f=(l*t+o)*4;n[f]=(-h/c*.5+.5)*255,n[f+1]=(-u/c*.5+.5)*255}return{colour:e,detail:n}},Ll=(i,t)=>{let e=new _s(new Uint8Array(i*i*4*ri.length),i,i,ri.length);return e.format=Ye,e.type=an,e.colorSpace=t?Ie:Bn,e.wrapS=e.wrapT=Pi,e.minFilter=rn,e.magFilter=Ae,e.generateMipmaps=!0,e.anisotropy=8,e},lf=(i=128)=>{let t=Ll(i,!0),e=Ll(i,!1);return ri.forEach((n,s)=>{let r=of(n,i);t.image.data.set(r.colour,s*i*i*4),e.image.data.set(r.detail,s*i*i*4)}),t.needsUpdate=e.needsUpdate=!0,{colour:t,detail:e,size:i}},cf=(i=256)=>{let t=new Uint8Array(i*i*4),e=5,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,s=Array.from({length:18},()=>{let a=Math.round((n()-.5)*26)||1,l=Math.round((n()-.5)*26);return[a,l,n()*af,1/Math.hypot(a,l)**1.2]});for(let a=0;a<i;a++)for(let l=0;l<i;l++){let o=0,h=0;for(let[p,v,g,m]of s){let x=Math.cos(af*(p*l+v*a)/i+g)*m;o+=x*p,h+=x*v}let u=-o*.16,c=-h*.16,f=Math.hypot(u,c,1),d=(a*i+l)*4;t[d]=(u/f*.5+.5)*255,t[d+1]=(c/f*.5+.5)*255,t[d+2]=(1/f*.5+.5)*255,t[d+3]=255}let r=new Sn(t,i,i,Ye);return r.wrapS=r.wrapT=Pi,r.minFilter=rn,r.magFilter=Ae,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r},hf=async(i,t)=>{let e=`${globalThis.__ASSETS__||"./"}city/`,n=globalThis.__CITYTEX__,s=async p=>{let v=await fetch(n?.[p]??e+p);if(!v.ok)throw new Error(`${p}: ${v.status}`);return createImageBitmap(await v.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"})},r=await Promise.all(ri.map(async p=>{let v=t[p];if(!v)return null;try{return{colour:await s(v[0]),detail:await s(v[1])}}catch{return null}}));if(!r.some(Boolean))return null;let a=Ll(i,!0),l=Ll(i,!1),h=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(i,i):Object.assign(document.createElement("canvas"),{width:i,height:i})).getContext("2d",{willReadFrequently:!0}),u=p=>(h.setTransform(1,0,0,-1,0,i),h.clearRect(0,0,i,i),h.drawImage(p,0,0,i,i),p.close?.(),h.getImageData(0,0,i,i).data),c=128,f=p=>{let v=new Uint8Array(i*i*4),g=i/c;for(let m=0;m<i;m++)for(let x=0;x<i;x++){let b=((m/g|0)*c+(x/g|0))*4,_=(m*i+x)*4;v[_]=p[b],v[_+1]=p[b+1],v[_+2]=p[b+2],v[_+3]=255}return v},d=[];for(let p=0;p<ri.length;p++){if(r[p])a.image.data.set(u(r[p].colour),p*i*i*4),l.image.data.set(u(r[p].detail),p*i*i*4);else{d.push(ri[p]);let v=of(ri[p],c);a.image.data.set(f(v.colour),p*i*i*4),l.image.data.set(f(v.detail),p*i*i*4)}await new Promise(v=>setTimeout(v,0))}return a.needsUpdate=l.needsUpdate=!0,{colour:a,detail:l,size:i,loaded:ri.length-d.length,missing:d}};var vh=i=>new se().setRGB(i[0]/255,i[1]/255,i[2]/255,Ie),jx=`
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
`,Jx=`
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
`,Kx=()=>{let i=me.lights_fragment_begin,t=i.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),e=i.indexOf("#endif",i.indexOf("#pragma unroll_loop_end",t))+6;if(t<0||e<6)throw new Error("city: three.js light loop not as expected");return i.slice(0,t)+Jx+i.slice(e)},Qx=`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`,ty=`
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
`,ey=`
#define CITY_SURFACES ${ua.length}
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
`,ny=`
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
`,iy=`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`,sy=`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`,uf=i=>{i.fragmentShader=i.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
${jx}`).replace("#include <lights_fragment_begin>",Kx())},Dl=({phone:i=!1}={})=>{let t=lf(i?64:128),e={tColour:{value:t.colour},tDetail:{value:t.detail},uSurfA:{value:ua.map(p=>{let v=Tl[p];return new ge(v.layer,v.size,v.metal,v.rough)})},uSurfB:{value:ua.map(p=>{let v=Tl[p];return new ge(v.bump,v.pattern,v.wet,v.keep)})},uStone:{value:[vh(q.white),vh(q.black),vh(q.red)]},uGlow:{value:new se(0,0,0)},uTime:{value:0}},n=p=>{let v=new nr({color:16777215,roughness:1,metalness:0,side:sn,envMapIntensity:1});v.shadowSide=sn;let g={value:p};return v.onBeforeCompile=m=>{Object.assign(m.uniforms,{tColour:e.tColour,tDetail:e.tDetail,uSurfA:e.uSurfA,uSurfB:e.uSurfB,uStone:e.uStone,uDim:g,uGlow:e.uGlow}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
${Qx}`).replace("#include <project_vertex>",`#include <project_vertex>
${ty}`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
${ey}`).replace("#include <map_fragment>",ny).replace("#include <roughnessmap_fragment>","float roughnessFactor = cityRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = cityMetal;").replace("#include <normal_fragment_maps>",iy).replace("#include <opaque_fragment>",`${sy}
#include <opaque_fragment>`),uf(m)},v.customProgramCacheKey=()=>"city-solid",v},s=n(1),r=n(.32),a=n(2),l=cf(i?128:256),o={value:1},h={tWave:{value:l},uTime:e.uTime,uShores:{value:new Float32Array(6)},uCanal:{value:new ge(0,-1,46,1e9)},tMirror:{value:null},uMirror:{value:0},uMirrorVP:{value:new xe},uDim:o},u=p=>{let v=new nr({color:16777215,roughness:.07,metalness:0,transparent:!0,envMapIntensity:1.15});return v.blending=Zr,v.blendSrc=ar,v.blendDst=or,v.blendSrcAlpha=jr,v.blendDstAlpha=Jr,v.onBeforeCompile=g=>{Object.assign(g.uniforms,h),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
          #include <opaque_fragment>`),uf(g)},v.customProgramCacheKey=()=>p?"city-pool":"city-sea",v},c={uColour:{value:new se(.5,.6,.7)}},f=new Xe({uniforms:c,transparent:!0,depthWrite:!1,side:sn,blending:Zr,blendSrc:ar,blendDst:or,blendSrcAlpha:jr,blendDstAlpha:Jr,vertexShader:`varying vec3 gN; varying vec3 gV;
      void main() {
        vec4 p = vec4( position, 1.0 ); vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p; n = mat3( instanceMatrix ) * n;
        #endif
        vec4 mv = modelViewMatrix * p; gN = normalMatrix * n; gV = - mv.xyz; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColour; varying vec3 gN; varying vec3 gV;
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`}),d=(p,v,g)=>new qe({color:new se(p,v,g),transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1,side:sn});return{solid:s,dim:r,glow:a,seaDim:o,glowColour:e.uGlow.value,sea:u(!1),pool:u(!0),ghost:f,wallLine:d(1.5,1.1,.4),canalLine:d(.25,.7,1.3),shared:e,waterUniforms:h,ghostUniforms:c,textures:t}};var Nl=new Map([...ph.from_text.map(i=>[i.id,{id:i.id,what:i.what,ref:i.ref,kind:"text",ours:i.shape==="ours"}]),...ph.choices.map(i=>[i.id,{id:i.id,what:i.what,ref:null,kind:"choice",ours:!0}])]),df=(i={},t={})=>{let e=typeof performance<"u"?performance.now():0,n=Vd(i),s={phone:!!t.phone},r=t.materials??Dl(s),a=new Sl,l=new $e,o=Hn(42),h=[],u=(G,j,lt={})=>{let Q=Nl.get(j);return Q||console.warn(`city: "${j}" is not in reconstruction.json`),G.userData={...G.userData,id:j,kind:Q?.kind??"choice",ghostable:!!Q?.ours&&!lt.keep,solid:G.material,...lt},G.name=j,!G.userData.line&&!G.userData.water&&(G.castShadow=G.receiveShadow=!0),l.add(G),h.push(G),G},c=qd(a,n,s),f=Yd(a,n,s),d=Jd(a,n,s),p=Kd(a,n,s);for(let[G,j]of a.bins){if(!j.nv)continue;let[lt,Q]=G.split("#");u(new pe(j.geometry(),r.solid),lt,Q?{[Q]:!0}:{})}for(let G of Xd(n,r))u(G,G.userData.id);for(let G of[...d.pools,...f.basins.map(j=>({...j,z:j.z+.8,rot:0,id:"aqueducts"}))]){let j=G.arc?new qn(G.r0,G.r1,Math.ceil((G.arc[1]-G.arc[0])*G.r1/6),1,G.arc[0],G.arc[1]-G.arc[0]):G.r?new Gr(G.r,20):new Un(G.w,G.d),lt=new pe(j,r.pool);G.arc?lt.position.z=G.z:(lt.position.set(G.x,G.y,G.z),lt.rotation.z=G.rot??0),lt.receiveShadow=!0,u(lt,G.id,{water:!0,pool:!0})}let v=sf(s),g=Qd(n,s),m=new Map;for(let G of[...d.trees,...p.trees,...g.trees]){let j=`${G.kind}|${G.id}`;m.has(j)||m.set(j,[]);let lt=rf[G.kind],Q=lt[o()*lt.length|0],F=.85+o()*.3;m.get(j).push({x:G.x,y:G.y,z:G.z-.1,rot:o()*re,sx:G.s*(.9+o()*.3),sy:G.s*(.9+o()*.3),sz:G.s,tint:[Math.min(255,Q[0]*F),Math.min(255,Q[1]*F),Math.min(255,Q[2]*F)]})}let x=0;for(let[G,j]of m){let[lt,Q]=G.split("|");x+=j.length,u(Ni(v[lt],r.solid,j),Q,{keep:Q!=="house-form",tree:!0})}let b=ef(s),_=nf(n,s),S=[255,255,255],A=G=>G.map(j=>({...j,sy:j.sx,sz:j.sx,tint:j.tint??S}));for(let G of c.dock.mouths)_.hulls.push({x:G,y:c.dock.yFace-c.dock.dockDeep*.5,z:.2,rot:-Math.PI/2});u(Ni(b.hull,r.solid,A(p.hulls)),"shipyards"),u(Ni(b.hull,r.solid,A(_.hulls)),"triremes",{reflect:!0}),u(Ni(b.trireme,r.solid,A(_.triremes)),"triremes",{reflect:!0}),u(Ni(b.merchant,r.solid,A(_.merchants)),"merchant-ships",{reflect:!0}),u(Ni(b.sailing,r.solid,A(_.sailing)),"merchantmen",{reflect:!0});let y=g.sectors.map(G=>{let j=G.blocks.length?u(Ni(g.protos.low,r.solid,G.blocks),"house-form"):null,lt=s.phone?[]:[0,1,2].map(Q=>{let F=G.blocks.filter(z=>z.kind===Q);if(!F.length)return null;let I=u(Ni(g.protos.high[Q],r.solid,F),"house-form");return I.visible=!1,I}).filter(Boolean);return{...G,low:j,high:lt,near:!1}}),T=new Set(["wall-brass","wall-tin","wall-orichalcum","ring-walls","wall-towers","bridges","bridge-gates","stone","rings","ship-sheds","quays","rock-docks","ship-passages","canal"]);for(let G of h)(G.userData.reflect||T.has(G.userData.id)&&!G.userData.water&&!G.userData.line&&!G.userData.teeth)&&G.layers.enable(1);let B=mh.filter(G=>h.some(j=>j.userData.id===G)).map(G=>{let j=Nl.get(G);return{id:G,what:j.what,ref:j.ref,kind:j.kind}}),M=n,W=d.temple,J={canal:[0,-(M.rW3+330),520,74,0],"merchant-ships":[-420,-(M.rW3-150),380,76,300],houses:[-360,-(M.rT+190),300,68,25],"house-form":[-360,-(M.rT+190),160,74,25],harbours:[M.off-260,-(M.rL2+M.rW3)/2,1e3,68,332],bridges:[M.off+150,-(M.rL2+300),420,74,330],"bridge-gates":[M.off+6,-(M.bridges[2][1]+70),120,80,0],aqueducts:[M.off-8,-(M.bridges[1][1]+30),90,72,20],"wall-brass":[M.off+330,-(M.r2b-60),420,78,300],"ring-walls":[M.off+60,-(M.r2b+30),150,80,60],"wall-towers":[M.off+200,-(M.r2b+10),160,78,310],"ship-passages":[0,-(M.rL2+110),170,82,0],racecourse:[M.off+420,-(M.rcMid-60),520,70,290],barracks:[M.off+240,-(M.rcMid+M.rcHalf+30),170,70,300],"horse-grounds":[M.off+500,-(M.r2a+80),300,64,330],gymnasia:[M.off+330,-(M.r1a+70),260,62,320],gardens:[M.off+260,-(M.r2b-70),240,62,300],"ring-temples":[M.off-300,-(M.r1a+80),240,66,30],"patterned-buildings":[M.off-420,-(M.r1b-60),220,66,20],shipyards:[M.off+330,-(M.rW2-60),260,74,300],"ship-sheds":[M.off+330,-(M.rW2-60),160,78,300],"wall-tin":[M.off+220,-(M.r1b+60),300,78,310],"guard-house":[M.off+200,-(M.r1a+130),260,62,60],"rock-docks":[0,M.rIsle+60,150,80,180],"wall-orichalcum":[M.off+150,-(M.rIsle+60),240,78,320],"guard-dwellings":[-(M.Rs+50),-40,190,66,90],springs:[330,250,190,66,230],reservoirs:[300,300,200,62,230],baths:[120,420,220,62,190],grove:[-220,380,300,66,150],palace:[0,110,330,62,0],shrine:[0,-20,150,68,15],"shrine-wall":[0,-30,120,72,0],hall:[0,0,60,30,0],altar:[d.altar.x+10,d.altar.y,110,72,280],statues:[W.x+W.L/2+20,W.y-W.W/2-10,90,78,300],"votive-outside":[M.off,-(M.rampTop-40),70,78,0],temple:[W.x,W.y,215,70,40],pinnacles:[W.x+W.L/2,W.y,120,60,270],"temple-interior":[W.x+20,W.y,70,84,270,W.floor],"temple-ceiling":[W.x-20,W.y,40,62,270,W.floor],poseidon:[W.x-30,W.y,60,84,270,W.floor],nereids:[W.x+10,W.y+12,30,80,250,W.floor],"votive-inside":[W.x+30,W.y-20,30,80,200,W.floor],pillar:[W.x+22,W.y,26,82,270,W.floor],rings:[0,0,M.rW3*3.4,58,330],island:[0,-60,900,62,0],hill:[M.off+40,-(M.rampFoot+40),200,76,350],stone:[M.off+120,-(M.r1b+40),120,80,300],quays:[M.off+150,-(M.rT-20),140,82,290],"outer-wall":[0,0,M.rWall*2.6,20,0],extent:[0,-M.core,900,66,0],triremes:[M.off+140,-(M.rL1+150),200,78,300],merchantmen:[60,-(M.rW3+200),200,80,0],"island-gardens":[-(M.Rp+30),-30,160,70,90],"racecourse-form":[M.off+60,-(M.rcMid+M.rcHalf+30),180,76,330],"ring-layout":[M.off+300,-(M.r1a+140),300,62,300]},ht={centre:[0,0],harbour:[M.off-40,-(M.rL2+150)],temple:[W.x+10,W.y],quay:[M.off+40,-(M.rT-24)]},N=(typeof performance<"u"?performance.now():0)-e,$=0;for(let G of h){let j=G.geometry,lt=(j.index?j.index.count:j.attributes.position.count)/3;$+=lt*(G.isInstancedMesh?G.count:1)}return{group:l,meshes:h,parts:B,spots:J,lab:ht,sectors:y,plan:n,temple:d.temple,hall:d.hall,radius:n.edge+80,wallRadius:n.rWall,coreRadius:n.rW3,shores:n.shores,materials:r,params:n.P,bank:n.B,stats:{buildMs:N,triangles:$,meshes:h.length,trees:x}}};var ry=i=>{let t=Math.acos($t(i,-1,1))*180/Math.PI,e=Math.min(38,1/(Math.max(i,0)+.15*Math.max(93.885-t,.5)**-1.253)),n=$t((i+.035)/.055,0,1),s=n*n*(3-2*n);return[.0464+.0098+.012,.1085+.0282+.012,.2648+.0013+.012].map(r=>Math.exp(-r*e)*s)},ay=i=>{let t=$t((i+.14)/.44,0,1),e=t*t*(3-2*t);return[.1+.1*e,.13+.17*e,.26+.24*e].map(s=>s*e*.55+.004)},Fl=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.active=!1,this.site=null,this.city=null,this.params={...Ml},this.pending=0,this.buildMs=null,this.ghost=!1,this.lit=null,this.cut=!1;let e=t.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=ws;let n=t.phone?1024:2048;this.suns=[0,1,2].map(r=>{let a=new Xr(16777215,Math.PI);return a.castShadow=!0,a.shadow.mapSize.set(r===2&&!t.phone?4096:n,r===2&&!t.phone?4096:n),a.shadow.autoUpdate=!1,a.shadow.radius=1.4,a.layers.enable(1),this.scene.add(a,a.target),a}),this.cascades=[{half:0,c:new dt(1e9,0,0)},{half:0,c:new dt(1e9,0,0)},{half:0,c:new dt(1e9,0,0)}],this.pmrem=new ur(e),this.skyUniforms={uSky:{value:new dt(.1,.16,.27)},uSun:{value:new dt(0,0,1)},uSunColour:{value:new dt(1,1,1)}};let s=new pe(new kn(50,32,16),new Xe({side:nn,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir);
          float up = d.z;
          vec3 sky = mix(uSky * 0.9, (uSky + vec3(dot(uSky, vec3(0.34)))) * 1.7, 1.0 - pow(max(up, 0.0), 0.42));   // paler and brighter towards the horizon
          sky += uSunColour * 0.35 * pow(max(dot(d, uSun), 0.0), 24.0);
          vec3 ground = (uSky * 0.6 + uSunColour * max(uSun.z, 0.0) * 0.4) * vec3(0.92, 0.86, 0.76);   // sunlit pale stone and earth, seen from above them
          gl_FragColor = vec4(mix(ground, sky, smoothstep(-0.06, 0.04, up)), 1.0);
        }`}));this.skyScene=new $n,this.skyScene.add(s),this.dome=new pe(new kn(1,32,12,0,Math.PI*2,0,Math.PI/2+.06),new Xe({side:nn,uniforms:this.skyUniforms,depthWrite:!0,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir.xzy * vec3(1.0, -1.0, 1.0));
          float up = max(d.z, 0.0);
          vec3 sky = mix(uSky * 1.25, (uSky + vec3(dot(uSky, vec3(0.3)))) * 1.5, 1.0 - pow(up, 0.5));
          sky += uSunColour * 0.25 * pow(max(dot(d, uSun), 0.0), 12.0);
          gl_FragColor = vec4(sky, 1.0);
        }`})),this.dome.rotation.x=Math.PI/2,this.dome.frustumCulled=!1,this.dome.renderOrder=-1,this.scene.add(this.dome),this.lastSun=new dt,this.env=null,this.materials=null,this.mirror=t.phone?null:{target:null,camera:new We,vp:new xe,on:!1},this.mirror&&this.mirror.camera.layers.set(1),this.ray=new Yr}get turn(){return Math.PI-this.params.seaBearing*gt}toCity(t,e){let n=-this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toScene(t,e){let n=this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toLonLat(t,e){let n=this.site.lat*gt;return[this.site.lon*gt+t/(ee*Math.cos(n)),n+e/ee]}fromLonLat(t,e){let n=this.site.lat*gt,s=t-this.site.lon*gt;return s=Math.atan2(Math.sin(s),Math.cos(s)),[s*ee*Math.cos(n),(e-n)*ee]}place({lat:t,lon:e,bearing:n=180,stadion:s=this.params.stadion}){let r=!this.city||s!==this.params.stadion;if(this.params={...this.params,stadion:s,seaBearing:n},r){let a=performance.now();if(this.city){this.scene.remove(this.city.group);for(let h of this.city.meshes)h.geometry.dispose()}this.materials||(this.materials=Dl({phone:this.world.phone}),this.loadPictures()),this.city=df(this.params,{phone:this.world.phone,materials:this.materials}),this.scene.add(this.city.group);let l=this.materials.waterUniforms,o=this.city.shores;for(let h=0;h<6;h++)l.uShores.value[h]=o[h];l.uCanal.value.z=this.city.plan.canalHalf,this.buildMs=Math.round(performance.now()-a),this.applyLook()}this.city.group.rotation.z=this.turn,this.city.group.updateMatrixWorld(!0);{let[a,l]=this.toScene(0,-1);this.materials.waterUniforms.uCanal.value.x=a,this.materials.waterUniforms.uCanal.value.y=l}this.site={lat:t,lon:e,frame:si(e*gt,t*gt)},this.active=!0,this.lastSun.set(0,0,0);for(let a of this.cascades)a.half=0;return this.ground(),this.world.stamp++,this.city}loadPictures(){Object.keys(gh).length&&(this.pending++,hf(this.world.phone?512:1024,gh).then(t=>{if(t){let e=this.materials.shared,n=[e.tColour.value,e.tDetail.value];e.tColour.value=t.colour,e.tDetail.value=t.detail;for(let s of n)s.dispose();this.pictures={loaded:t.loaded,missing:t.missing}}else this.pictures={loaded:0,missing:"all"}}).catch(t=>{this.pictures={loaded:0,error:String(t)}}).finally(()=>{this.pending--,this.world.stamp++}))}remove(){this.active=!1,this.site=null,this.world.globe.shared.uPad.value.set(0,0,0,0),this.world.stamp++}ground(){let t=this.world.globe,e=t.shared,n=this.site,s=e.uWater.value>.5?e.uSea.value:-1e5,r=Math.max(t.heightAt(n.lon*gt,n.lat*gt)??0,s);n.h=r;let a=n.frame;e.uPad.value.set(a.up[0],a.up[1],a.up[2],this.city.radius-80),e.uPadH.value=r-2;let l=ee+r*e.uExag.value;n.origin=[a.up[0]*l,a.up[1]*l,a.up[2]*l]}floorAt(t,e){if(!this.active||!this.city)return null;let[n,s]=this.fromLonLat(t,e);if(Math.hypot(n,s)>this.city.plan.edge)return null;let[r,a]=this.toCity(n,s),l=this.localFloor(r,a);return l==null?null:this.site.h*this.world.globe.shared.uExag.value+l}localFloor(t,e){let n=this.city.plan.groundZ(t,e);if(n==null)return null;let s=this.city.temple,r=this.city.hall,a=Math.max(Math.abs(t-s.x)-s.L/2,Math.abs(e-s.y)-s.W/2);return a<5.1?s.floor-Math.max(0,Math.ceil(a/1.7))*((s.floor-s.z)/4):r&&t*t+e*e<r.RS*r.RS?r.floor:n}pick(t,e){if(!this.active||!this.city)return null;let n=this.world.renderer.domElement,s=n.clientWidth||1,r=n.clientHeight||1;this.ray.setFromCamera(new ie(t/s*2-1,1-e/r*2),this.camera);let a=this.ray.intersectObjects(this.city.meshes.filter(c=>c.visible&&!c.userData.line),!1);if(!a.length)return null;let l=a[0],o=Nl.get(l.object.userData.id),[h,u]=this.toLonLat(l.point.x,l.point.y);return{id:l.object.userData.id,what:o?.what??l.object.userData.id,ref:o?.ref??null,kind:o?.kind??"choice",lon:h,lat:u}}parts(){return this.city?this.city.parts.map(t=>({...t})):[]}viewOf(t){let e=this.city?.spots[t];if(!e||!this.site)return null;let[n,s]=this.toScene(e[0],e[1]),[r,a]=this.toLonLat(n,s);return{lat:a,lon:r,range:e[2],tilt:e[3]*gt,heading:((e[4]+this.params.seaBearing-180)%360+360)%360*gt}}highlight(t){this.lit=t&&this.city?.meshes.some(e=>e.userData.id===t)?t:null,this.applyLook()}setGhost(t){this.ghost=!!t,this.applyLook()}cutaway(t){this.cut=!!t,this.applyLook()}applyLook(){if(!this.city)return;let t=this.materials;for(let e of this.city.meshes){let n=e.userData;if(n.roof&&(e.visible=!this.cut),n.line)continue;let s=this.ghost&&n.ghostable;if(n.water){e.material=n.solid;continue}e.material=s?t.ghost:this.lit?n.id===this.lit?t.glow:t.dim:t.solid,e.castShadow=!s,n.lodHidden&&(e.visible=!1)}t.seaDim.value=this.lit&&this.lit!=="harbours"&&this.lit!=="canal"?.45:1;for(let e of this.cascades)e.half=0;this.world.stamp++}labSpots(){let t={};for(let[e,n]of Object.entries(this.city.lab))t[e]=this.toScene(n[0],n[1]);return t}forceShadows(){this.cascades[0].half=0,this.cascades[1].half=0}update(){if(!this.active)return null;this.ground();let{control:t,camera:e,sun:n,renderer:s}=this.world,r=this.site.frame,a=this.site.origin,l=t.basis,o=[-l.fwd[0],-l.fwd[1],-l.fwd[2]],h=[t.pos[0]-a[0],t.pos[1]-a[1],t.pos[2]-a[2]],u=I=>[hn(I,r.east),hn(I,r.north),hn(I,r.up)],c=u(l.right),f=u(l.up),d=u(o),p=u(h),v=this.camera;v.matrix.set(c[0],f[0],d[0],p[0],c[1],f[1],d[1],p[1],c[2],f[2],d[2],p[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert(),v.projectionMatrix.copy(e.projectionMatrix),v.projectionMatrixInverse.copy(e.projectionMatrixInverse);let g=this.materials,m=this.city.plan;g.shared.uTime.value=this.world.time,this.dome.visible=p[2]<2500&&p[2]>-50,this.dome.visible&&(this.dome.position.set(p[0],p[1],p[2]-40),this.dome.scale.setScalar(38e3),this.dome.updateMatrixWorld());let x=-d[2],b=x<-.02?$t((p[2]-m.B)/-x,5,6e3):6e3,_=[p[0]-d[0]*b,p[1]-d[1]*b],S=b,[A,y]=this.toCity(p[0],p[1]);for(let I of this.city.sectors){let z=I.high.length>0&&Math.hypot(A-I.cx,y-I.cy,p[2])<640;z!==I.near&&(I.near=z,this.cascades[0].half=0,this.cascades[1].half=0),I.low&&(I.low.visible=!z,I.low.userData.lodHidden=z);for(let k of I.high)k.visible=z,k.userData.lodHidden=!z}let T=u([n.dir.x,n.dir.y,n.dir.z]),B=T[2];if(this.lastSun.distanceToSquared(new dt(T[0],T[1],T[2]))>1e-5){this.lastSun.set(T[0],T[1],T[2]);let I=ry(B),z=ay(B);for(let k of this.suns)k.color.setRGB(I[0],I[1],I[2]);this.skyUniforms.uSky.value.set(z[0],z[1],z[2]),this.skyUniforms.uSun.value.set(T[0],T[1],T[2]),this.skyUniforms.uSunColour.value.set(I[0],I[1],I[2]),this.env?.dispose(),this.env=this.pmrem.fromScene(this.skyScene,0,1,200),this.scene.environment=this.env.texture,g.ghostUniforms.uColour.value.setRGB(z[0]*2.2+I[0]*.25,z[1]*2.2+I[1]*.25,z[2]*2.2+I[2]*.25),g.glowColour.setRGB(I[0]*.05+z[0]*.12,I[1]*.05+z[1]*.12,I[2]*.04+z[2]*.1);for(let k of this.cascades)k.half=0}let W=[T[0],T[1],Math.max(T[2],.03)],J=Math.hypot(W[0],W[1],W[2]);W[0]/=J,W[1]/=J,W[2]/=J;let ht=Math.max(W[2],.14),$=(I=>1.5**Math.ceil(Math.log(I)/Math.log(1.5)))($t(S*1.1,40,620)),G=[{half:$,c:[_[0]-d[0]*$*.35,_[1]-d[1]*$*.35,m.B]},{half:Math.min($*5.5,m.edge*1.02),c:[_[0]-d[0]*$*1.2,_[1]-d[1]*$*1.2,m.B]},{half:m.edge*1.02,c:[0,0,m.B]}],j=0;for(let I=0;I<3;I++){let z=this.cascades[I],k=G[I],O=this.suns[I];if(!(z.half!==k.half||Math.hypot(z.c.x-k.c[0],z.c.y-k.c[1])>k.half*.22)||j>0&&I<2&&z.half>0)continue;z.half=k.half,z.c.set(k.c[0],k.c[1],k.c[2]);let tt=k.half*1.6+80/ht+200,at=k.half*1.5+80/ht,ft=2*k.half/O.shadow.mapSize.x;O.position.set(k.c[0]+W[0]*tt,k.c[1]+W[1]*tt,k.c[2]+W[2]*tt),O.target.position.set(k.c[0],k.c[1],k.c[2]),O.target.updateMatrixWorld(),O.updateMatrixWorld();let bt=O.shadow.camera;bt.left=-k.half,bt.right=k.half,bt.top=k.half,bt.bottom=-k.half,bt.near=tt-at,bt.far=tt+at,bt.updateProjectionMatrix(),O.shadow.bias=-(.02+ft*1.1)/(2*at),O.shadow.normalBias=ft*1.5+.02,O.shadow.needsUpdate=!0,I<2&&j++}let lt=this.mirror,Q=g.waterUniforms;if(!!lt&&p[2]<1400&&p[2]>.3&&!this.ghost){let I=s.getDrawingBufferSize(new ie),z=Math.max(2,I.x>>1),k=Math.max(2,I.y>>1);(!lt.target||lt.target.width!==z||lt.target.height!==k)&&(lt.target?.dispose(),lt.target=new Oe(z,k,{type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!0}));let O=lt.camera,nt=new dt(p[0],p[1],-p[2]);O.fov=$t(t.fovY/gt*1.25,10,120),O.aspect=e.aspect,O.near=1,O.far=16e3,O.updateProjectionMatrix(),O.position.copy(nt),O.up.set(f[0],f[1],-f[2]),O.lookAt(nt.x-d[0],nt.y-d[1],nt.z+d[2]),O.updateMatrixWorld(),O.matrixWorldInverse.copy(O.matrixWorld).invert(),lt.vp.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse);let tt=new Fn(new dt(0,0,1),-.05).applyMatrix4(O.matrixWorldInverse),at=new ge(tt.normal.x,tt.normal.y,tt.normal.z,tt.constant),ft=O.projectionMatrix,bt=new ge;bt.x=(Math.sign(at.x)+ft.elements[8])/ft.elements[0],bt.y=(Math.sign(at.y)+ft.elements[9])/ft.elements[5],bt.z=-1,bt.w=(1+ft.elements[10])/ft.elements[14],at.multiplyScalar(2/at.dot(bt)),ft.elements[2]=at.x,ft.elements[6]=at.y,ft.elements[10]=at.z+1,ft.elements[14]=at.w;let L=s.shadowMap,X=L.autoUpdate,Z=s.getRenderTarget();L.autoUpdate=!1,L.needsUpdate=!1,s.setRenderTarget(lt.target),s.setClearColor(0,0),s.clear(!0,!0,!1),s.render(this.scene,O),s.setRenderTarget(Z),s.setClearColor(0,1),L.autoUpdate=X,Q.tMirror.value=lt.target.texture,Q.uMirrorVP.value.copy(lt.vp),Q.uMirror.value=1}else Q.uMirror.value=0;return{scene:this.scene,camera:v}}view(){return{lat:this.site.lat*gt,lon:this.site.lon*gt,range:this.city.coreRadius*3.4,tilt:58*gt,heading:(this.params.seaBearing+150)%360*gt}}};var xh={claimed:{ink:"#ffab5c",name:"Claimed"},checked:{ink:"#7fc0ff",name:"Checked"},found:{ink:"#7fe3a0",name:"Found"},context:{ink:"#e9edf5",name:"Place"},plato:{ink:"#f2cc6b",name:"Plato's measure"}},ff={claimed:["claimed","context","plato"],found:["checked","found","context","plato"],all:["claimed","checked","found","context","plato"]},pf=8,oy=new Set(["core","sample","dive","dig","place"]),mf={context:0,plato:1,checked:2,found:3,claimed:4},ly=[[/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i,"#4a4d55"],[/ash|tephra|pumice|ignimbrite/i,"#b9b4ad"],[/salt|evaporite|gypsum|halite/i,"#eef0f2"],[/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i,"#d9cfb4"],[/peat|organic|lignite|soil/i,"#4b3a2a"],[/shell|coquina/i,"#e6dcc8"],[/gravel|pebble|cobble|conglomerate|breccia/i,"#8d8478"],[/sand/i,"#d7bf86"],[/silt/i,"#a89a80"],[/clay|mud|turbidite/i,"#7d7468"]],yh=i=>(ly.find(([t])=>t.test(i??""))??[0,"#9a9488"])[1],vf=i=>i.type==="Polygon"?i.coordinates:i.type==="MultiPolygon"?i.coordinates.flat():[],xf=i=>i.type==="LineString"?[i.coordinates]:i.type==="MultiLineString"?i.coordinates:[],yf=i=>i.type==="Point"?[i.coordinates]:i.type==="MultiPoint"?i.coordinates:[],_f=i=>[...yf(i),...xf(i).flat(),...vf(i).flat()],_i=i=>{let t=i.geometry;if(t.type==="Point")return t.coordinates;if(t.type==="LineString")return t.coordinates[Math.floor(t.coordinates.length/2)];let e=_f(t);return[e.reduce((n,s)=>n+s[0],0)/e.length,e.reduce((n,s)=>n+s[1],0)/e.length]},gf=i=>{let t=_f(i.geometry),e=_i(i),n=0;for(let s of t)n=Math.max(n,Math.hypot((s[0]-e[0])*Math.cos(e[1]*gt),s[1]-e[1])*gt*ee);return n*2},cy=i=>i.position?.how==="from-description"||(i.position?.error_m??0)>=500,Ul=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.entry=null,this.extras=[],this.mode="all",this.focus=null,this.selected=null,this.labels=[],this.markers=new Map,this.on=0,this.origin=null;let e=t.globe.shared;this.size=t.phone?1024:2048,this.near=this.sheet(),this.far=this.sheet(),e.tDecal.value=this.near.tex,e.tDecalFar.value=this.far.tex,this.painted=null,this.dirty=!0,this.tick=0,this.geo=this.shapes(),this.mats=new Map}sheet(){let t=document.createElement("canvas");t.width=t.height=this.size;let e=new Li(t);return e.colorSpace=Bn,e.premultiplyAlpha=!0,e.generateMipmaps=!0,e.minFilter=rn,e.anisotropy=8,{canvas:t,g:t.getContext("2d"),tex:e}}shapes(){let t=(e,n=0)=>(e.rotateX(Math.PI/2),e.translate(0,0,n),e);return{stem:t(new Ji(.007,.007,1,6),.5),core:t(new Ji(.05,.05,1,20,1,!1),.5),cap:t(new Ji(.066,.066,.03,20),1),sample:new Wr(.085).translate(0,0,1.06),dive:new kn(.075,18,12).translate(0,0,1.06),dig:new ji(.13,.13,.13).rotateZ(Math.PI/4).translate(0,0,1.06),place:new kn(.045,14,10).translate(0,0,.62)}}ink(t,e=1.7){let n=`${t}:${e}`;return this.mats.has(n)||this.mats.set(n,new qe({color:new se(xh[t].ink).multiplyScalar(e)})),this.mats.get(n)}column(t){let e=document.createElement("canvas");e.width=8,e.height=256;let n=e.getContext("2d"),s=(t.column??[]).filter(a=>Number.isFinite(a.from_m)&&Number.isFinite(a.to_m)&&a.to_m>a.from_m);if(s.length){let a=Math.min(...s.map(o=>o.from_m)),l=Math.max(...s.map(o=>o.to_m));n.fillStyle="#9a9488",n.fillRect(0,0,8,256);for(let o of s)n.fillStyle=yh(o.what),n.fillRect(0,(o.from_m-a)/(l-a)*256,8,Math.max(2,(o.to_m-o.from_m)/(l-a)*256));n.fillStyle="rgba(0,0,0,0.35)";for(let o of s)n.fillRect(0,(o.to_m-a)/(l-a)*256-1,8,1.5)}else{n.fillStyle=xh[t.side].ink,n.fillRect(0,0,8,256),n.fillStyle="rgba(0,0,0,0.28)";for(let a=32;a<256;a+=32)n.fillRect(0,a,8,2)}let r=new Li(e);return r.colorSpace=Ie,new qe({map:r,color:new se(1.25,1.25,1.25)})}marker(t){let e=new $e;if(t.kind==="core")e.add(new pe(this.geo.core,this.column(t)),new pe(this.geo.cap,this.ink(t.side)));else{let n=new pe(this.geo.stem,this.ink("context",1.1));t.kind==="place"&&(n.scale.z=.6),e.add(n,new pe(this.geo[t.kind]??this.geo.dive,this.ink(t.side)))}return e.userData.feature=t,e}show(t){this.entry=t??null,this.focus=null,this.selected=null,this.rebuild()}setExtras(t){this.extras=t??[],this.rebuild()}setMode(t){ff[t]&&t!==this.mode&&(this.mode=t,this.rebuild())}setFocus(t){this.focus=t?.length?new Set(t):null,this.restyle()}select(t){this.selected=t??null,this.restyle()}get active(){return!!(this.entry||this.extras.length)}visible(){let t=new Set(ff[this.mode]);return[...this.entry?.features??[],...this.extras].filter(e=>t.has(e.side)&&e.geometry).sort((e,n)=>mf[e.side]-mf[n.side])}lit(t){return!this.focus||this.focus.has(t.id)||t.id===this.selected}rebuild(){for(let e of this.markers.values()){this.scene.remove(e);for(let n of e.children)n.material.map&&(n.material.map.dispose(),n.material.dispose())}this.markers.clear();let t=this.entry?.centre??(this.extras[0]&&{lon:_i(this.extras[0])[0],lat:_i(this.extras[0])[1]});this.origin=t?{lon:t.lon*gt,lat:t.lat*gt,frame:si(t.lon*gt,t.lat*gt)}:null,this.labels=[];for(let e of this.visible()){let[n,s]=_i(e),r={id:e.id,text:e.label,year:e.year??null,side:e.side,kind:e.kind,lon:n,lat:s,lift:0,lit:!0,feature:e};if(oy.has(e.kind)&&e.geometry.type==="Point"){let a=this.marker(e);a.userData.label=r,this.markers.set(e.id,a),this.scene.add(a)}e.label&&this.labels.push(r)}this.restyle()}restyle(){for(let t of this.labels)t.lit=this.lit(t.feature);for(let t of this.markers.values())t.userData.dim=!this.lit(t.userData.feature);this.dirty=!0,this.heights=0,this.world.stamp++}paint(t,e,n,s){let r=t.g,a=this.size,l=a/(2*n),o=si(e.lon,e.lat),h=[0,0,0];r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,a,a),r.lineJoin=r.lineCap="round";let u=([d,p])=>(xn(d*gt,p*gt,h),hn(h,o.up)<.05?null:[a/2+hn(h,o.east)*ee*l,a/2-hn(h,o.north)*ee*l]),c=(d,p)=>{let v=0,g=!1;r.beginPath();for(let m of d){let x=u(m);x&&(v++?r.lineTo(x[0],x[1]):r.moveTo(x[0],x[1]),x[0]>-200&&x[1]>-200&&x[0]<a+200&&x[1]<a+200&&(g=!0))}return p&&r.closePath(),g&&v>1},f=(d,p,v,g)=>{let m=Math.max(1.5,p*s);r.setLineDash([]),r.globalAlpha=.55*v,r.strokeStyle="#04070c",r.lineWidth=m+Math.max(2,2.4*s),r.stroke(),r.setLineDash(g?g.map(x=>Math.max(2,x*s)):[]),r.globalAlpha=v,r.strokeStyle=d,r.lineWidth=m,r.stroke(),r.setLineDash([])};for(let d of this.visible()){let p=d.side==="context"&&d.id!==this.selected?.55:1,v=xh[d.side].ink,g=this.lit(d),m=(g?1:.28)*p,x=d.id===this.selected,b=d.geometry,_=d.dash??(cy(d)?[7,6]:d.kind==="track"?[12,5]:null),S=(d.width??(d.kind==="structure"?3.2:d.kind==="survey-area"?1.8:d.kind==="outline"?1.9:2.2))*(x?1.5:1);for(let A of vf(b))c(A,!0)&&(d.fill!==!1&&(r.globalAlpha=(d.kind==="survey-area"?.13:d.kind==="dig"?.34:.1)*m*p*(x?1.6:1),r.fillStyle=v,r.fill()),f(v,S,m,_));for(let A of xf(b))c(A,!1)&&f(v,S,m,_);for(let A of yf(b)){let y=u(A);if(!y||y[0]<-50||y[1]<-50||y[0]>a+50||y[1]>a+50)continue;let T=(d.position?.error_m??0)*l;T>6*s&&(r.beginPath(),r.arc(y[0],y[1],T,0,Math.PI*2),r.globalAlpha=.07*m*p,r.fillStyle=v,r.fill(),f(v,1.1,.6*m,[5,5])),r.beginPath(),r.arc(y[0],y[1],Math.max(2.5,(x?5.5:3.6)*s),0,Math.PI*2),r.globalAlpha=m,r.fillStyle=v,r.fill(),r.globalAlpha=.7*m,r.strokeStyle="#04070c",r.lineWidth=Math.max(1,1.4*s),r.stroke(),x&&(r.beginPath(),r.arc(y[0],y[1],13*s,0,Math.PI*2),f("#ffffff",1.6,.9,null))}}r.globalAlpha=1,t.tex.needsUpdate=!0}update(){let{world:t}=this,e=t.globe.shared,n=t.control,s=this.active?1:0;if(this.on!==s&&(this.on=$t(this.on+(s?.08:-.12),0,1),t.stamp++),e.uDecalOn.value=this.on,!this.active||!this.origin)return null;let r=performance.now(),a=Math.max(n.range*.7,30),l=this.painted,o=l?Math.hypot((n.lon-l.lon)*Math.cos(l.lat),n.lat-l.lat)*ee:1/0;if((this.dirty||!l||o>l.half*.3||a>l.half*1.5||a<l.half*.62)&&(this.dirty||r-(l?.at??0)>160)){let B={lon:n.lon,lat:n.lat},M=2*Math.tan(n.fovY/2)*n.range/Math.max(t.renderer.domElement.clientHeight,1);this.paint(this.near,B,a,M/(2*a/this.size)),this.paint(this.far,B,a*pf,M/(2*a*pf/this.size)),this.painted={...B,half:a,at:r,frame:si(B.lon,B.lat)},this.dirty=!1,t.stamp++}let h=this.painted,u=h.frame.up,c=n.pos;if(e.uDecalO.value.set(u[0]*ee-c[0],u[1]*ee-c[1],u[2]*ee-c[2]),e.uDecalU.value.set(...h.frame.east).multiplyScalar(1/(2*h.half)),e.uDecalV.value.set(...h.frame.north).multiplyScalar(1/(2*h.half)),!this.markers.size)return null;let f=this.origin.frame,d=[f.up[0]*ee,f.up[1]*ee,f.up[2]*ee],p=B=>[hn(B,f.east),hn(B,f.north),hn(B,f.up)],v=n.basis,g=p(v.right),m=p(v.up),x=p([-v.fwd[0],-v.fwd[1],-v.fwd[2]]),b=p([c[0]-d[0],c[1]-d[1],c[2]-d[2]]),_=this.camera;_.matrix.set(g[0],m[0],x[0],b[0],g[1],m[1],x[1],b[1],g[2],m[2],x[2],b[2],0,0,0,1),_.matrixWorld.copy(_.matrix),_.matrixWorldInverse.copy(_.matrix).invert(),_.projectionMatrix.copy(t.camera.projectionMatrix),_.projectionMatrixInverse.copy(t.camera.projectionMatrixInverse);let S=this.tick++%20===0||this.heights<3;S&&this.heights++;let A=e.uExag.value,y=e.uWater.value>.5?e.uSea.value:-1e5,T=[0,0,0];for(let B of this.markers.values()){let M=B.userData.label;if(S||B.userData.h==null){let ht=Math.max(t.globe.heightAt(M.lon*gt,M.lat*gt)??0,y)*A;xn(M.lon*gt,M.lat*gt,T);let N=[T[0]*(ee+ht)-d[0],T[1]*(ee+ht)-d[1],T[2]*(ee+ht)-d[2]];B.position.set(...p(N)),B.quaternion.setFromUnitVectors(new dt(0,0,1),new dt(...p(T))),B.userData.h=ht}let W=Math.hypot(B.position.x-b[0],B.position.y-b[1],B.position.z-b[2]),J=W*.05*Math.min(1,n.range*1.25/W)**.6*(B.userData.feature.id===this.selected?1.3:1)*(B.userData.dim?.62:1);B.scale.setScalar(J),M.lift=J*(B.userData.feature.kind==="place"?.72:1.16),B.updateMatrixWorld(!0)}return{scene:this.scene,camera:_}}viewOf(t){if(!t){let s=this.entry;if(!s)return null;let r=s.features.map(l=>{let o=_i(l);return Math.hypot((o[0]-s.centre.lon)*Math.cos(s.centre.lat*gt),o[1]-s.centre.lat)*gt*ee+gf(l)/2}).sort((l,o)=>l-o),a=r.length?r[Math.min(r.length-1,Math.floor(r.length*.8))]:(s.radius_km??20)*1e3;return{lon:s.centre.lon*gt,lat:s.centre.lat*gt,range:$t(Math.max(a,2500)*2.9,6e3,6e6),tilt:46*gt,heading:0}}let[e,n]=_i(t);return{lon:e*gt,lat:n*gt,range:$t(Math.max(gf(t)*2.2,(t.position?.error_m??0)*6,900),400,6e6),tilt:50*gt,heading:this.world.control.heading}}};var vr={terrarium:{id:"terrarium",kind:"elevation",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:15,credit:"Terrain Tiles (Mapzen, AWS Open Data)"},s2:{id:"s2",kind:"image",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)"},bluemarble:{id:"bluemarble",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA Blue Marble Next Generation"},night:{id:"night",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA Black Marble"}},bf=(i,t={})=>{let e=t.phone??(Math.min(screen.width,screen.height)<600||matchMedia("(pointer: coarse)").matches),n=new dl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});n.outputColorSpace=ys,n.autoClear=!1;let s=new $n,r=new We(36,1,1,1e8),a=new yl({renderer:n,scene:s,segments:32,threshold:e?400:290,budget:e?170:400,layers:{elevation:vr.terrarium,base:vr.s2,globe:vr.bluemarble,overlay:null,night:vr.night}}),l=new _l(r,i,a),o=new wl(n,{samples:0,steps:e?14:28}),h={renderer:n,scene:s,camera:r,globe:a,control:l,pipeline:o,phone:e,sun:{azimuth:295,altitude:48,follow:!0,dir:new dt(1,0,0)},exposure:1.1,air:1,pixelCap:2,pixelBudget:e?14e5:26e5,scale:1,time:0,fps:60,onFrame:null,paused:!1,adaptive:!0,rest:!0,locals:[],stamp:0},u=()=>{let x=i.clientWidth||1,b=i.clientHeight||1,_=Math.min(devicePixelRatio||1,h.pixelCap),S=Math.min(_,Math.sqrt(h.pixelBudget/(x*b)))*h.scale,A=Math.max(2,Math.round(x*S)),y=Math.max(2,Math.round(b*S));return(i.width!==A||i.height!==y)&&(n.setSize(A,y,!1),r.aspect=x/b,r.updateProjectionMatrix()),o.setSize(A,y),[A,y]},c=()=>{let x=si(l.lon,l.lat),b=h.sun.azimuth*gt,_=h.sun.altitude*gt,S=Yn(En(x.up,Math.sin(_)),Yn(En(x.north,Math.cos(b)),x.east,Math.sin(b)),Math.cos(_));h.sun.follow&&h.sun.dir.set(S[0],S[1],S[2]).normalize()};h.city=new Fl(h),h.locals.push(h.city),h.evidence=new Ul(h),h.locals.push(h.evidence),l.floor=(x,b)=>h.city.floorAt?.(x,b)??null;let f=performance.now(),d=0,p=0,v="",g=0,m=x=>{if(requestAnimationFrame(m),h.paused){f=x;return}let b=$t((x-f)/1e3,.001,.1);f=x,h.time+=b,h.fps+=(1/b-h.fps)*.05;let _=a.loader.busy>0;b>1/38?_||(d++,p=0):b<1/55&&(p++,d=Math.max(0,d-1)),h.adaptive||(d=p=0),d>40&&h.scale>.55&&(h.scale=Math.max(.55,h.scale-.1),d=0),p>300&&h.scale<1&&(h.scale=Math.min(1,h.scale+.1),p=0);let[S,A]=u();h.beforeFrame?.(b),l.update(b),c();let y=`${h.stamp},${h.city.active},${h.sun.azimuth},${h.sun.altitude},${l.pos[0].toFixed(1)},${l.pos[1].toFixed(1)},${l.pos[2].toFixed(1)},${l.heading.toFixed(4)},${l.tilt.toFixed(4)},${l.shift[0].toFixed(3)},${l.shift[1].toFixed(3)},${S},${A}`,T=y!==v||a.loader.busy>0||l.pointers.size>0||h.snap;v=y,T?g=0:g++;let B=g>(h.restSoon?150:600)?h.restSoon?30:12:g>30?3:1;if(h.rest&&g%B){h.onFrame?.(b);return}let M=a.shared;M.uCamPos.value.set(l.pos[0],l.pos[1],l.pos[2]),M.uSun.value.copy(h.sun.dir),M.uTime.value=h.time,M.uPixAngle.value=2*Math.tan(l.fovY/2)/A,a.update(l.view(A));let W=1-$t((Math.sin(h.sun.altitude*gt)-.17)/.6,0,1);if(o.final.uniforms.uExposure.value=h.exposure*(1+.85*W),o.atmo.uniforms.uAir.value+=((M.uLens.value===0?1:.4)*h.air-o.atmo.uniforms.uAir.value)*Math.min(1,b*6),o.render(s,r,{pos:l.pos,basis:l.basis,tanY:Math.tan(l.fovY/2),aspect:r.aspect,near:r.near,far:r.far,sun:h.sun.dir,shift:l.shift},h.locals.map(J=>J.update()).filter(Boolean)),h.onFrame?.(b),h.snap){let J=h.snap;h.snap=null,i.toBlob(ht=>J(ht),"image/jpeg",.9)}};return requestAnimationFrame(m),h};var _h=[["sunken-land","Sunken lands"],["lost-city","Lost cities"],["remote-sensing-find","Found from above"],["treasure","Treasure"],["shipwreck","Shipwrecks"],["tomb","Tombs"],["relic","Relics"]],iS=Object.fromEntries(_h),bh={"sunken-land":"Sunken land","lost-city":"Lost city","remote-sensing-find":"Found from above",treasure:"Treasure",shipwreck:"Shipwreck",tomb:"Tomb",relic:"Relic"},Sf={legend:"Legend",unlocated:"Not found yet",disputed:"Disputed",found:"Found",hoax:"Hoax"},Is={confirmed:"Confirmed",mainstream:"Leading view",plausible:"Plausible",fringe:"Fringe",rejected:"Rejected",hoax:"Hoax"},kl={found:"Found here",candidate:"Proposed","search-area":"Search area",claimed:"Claimed find",inspiration:"Possible inspiration",origin:"Where it began"},wf={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Mf={found:0,candidate:1,"search-area":2,inspiration:3,claimed:4,origin:5},Ps=i=>(i??"").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),Tf=async(i="./")=>{let t=globalThis.__DATA__,e=(d,p)=>t?.[d]?Promise.resolve(t[d]):fetch(i+d).then(v=>v.ok?v.json():p).catch(()=>p),[n,s,r,a,l,o,h,u,c]=await Promise.all([e("legends.json",{legends:[]}),e("sources.json",{sources:[]}),e("reconstruction.json",null),e("case.json",null),e("evidence.json",null),e("worldfit.json",null),e("audio/index.json",null),e("open.json",null),e("story-media.json",null)]),f=(n.legends??[]).filter(d=>d&&d.id&&d.name&&Array.isArray(d.places));for(let d of f){d.places=d.places.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)),d.main=[...d.places].sort((p,v)=>(wf[p.standing]??9)-(wf[v.standing]??9)||(Mf[p.role]??9)-(Mf[v.role]??9))[0]??null,d.key=Ps([d.name,...d.aka??[]].join(" ")),d.tagKey=Ps((d.tags??[]).join(" "));for(let p of d.places)p.key=Ps(p.name)}return{legends:f.filter(d=>d.main),sources:s.sources??[],reconstruction:r,cas:a,evidence:l?.sites??[],worldfit:o,audio:h,open:u,storyMedia:c?.media??[],checked:n.checked??null}},Ef=i=>{let e=[...i.trim().toUpperCase().replace(/[′’]/g,"'").replace(/[″”]/g,'"').matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter(o=>o[0].trim());if(e.length!==2)return null;let n=o=>(Math.abs(Number(o[1]))+Number(o[2]??0)/60+Number(o[3]??0)/3600)*(Number(o[1])<0||o[4]==="S"||o[4]==="W"?-1:1),[s,r]=e;/[EW]/.test(s[4]??"")&&/[NS]/.test(r[4]??"")&&([s,r]=[r,s]);let a=n(s),l=n(r);return!Number.isFinite(a)||!Number.isFinite(l)||Math.abs(a)>90||Math.abs(l)>180?null:{lat:a,lon:l}},Af=(i,t,e=8)=>{let n=Ps(t);if(!n)return[];let s=[];for(let r of i){let a=0;r.key.startsWith(n)?a=100:r.key.split(" ").some(l=>l.startsWith(n))?a=80:r.key.includes(n)?a=60:r.tagKey.split(" ").includes(n)&&(a=30),a&&s.push({score:a,legend:r});for(let l of r.places){let o=l.key.startsWith(n)?55:l.key.split(" ").some(h=>h.startsWith(n))?45:l.key.includes(n)&&n.length>2?25:0;o&&o>a-30&&s.push({score:o,legend:r,place:l})}}return s.sort((r,a)=>a.score-r.score||r.legend.name.localeCompare(a.legend.name)).slice(0,e)},wh=(i,t)=>{let e=t?{...i.access,...t}:i.access;if(!i.browser?.ok||!e?.url||!["xyz","wmts","wms","arcgis-image","arcgis-map"].includes(i.access.type)||e.crs&&e.crs!=="EPSG:3857"||i.kind==="elevation-tiles")return null;let n=e.url.includes("{z}");if(!n&&!e.url.includes("{bbox}"))return null;let s=i.resolution_m&&i.resolution_m<=30?Math.min(11,Math.max(0,Math.round(15-Math.log2(i.resolution_m))-5)):0;return{id:`src-${i.id}${t?`-${t.id}`:""}`,kind:"image",url:e.url,size:n?256:512,every:n?1:2,minZoom:Math.max(i.access.min_zoom??0,s,n?0:3),maxZoom:i.access.max_zoom??15,maxActive:n?8:4,bbox:i.coverage?.bbox??null,asIs:i.kind==="hillshade"||i.kind==="colour-relief"||i.kind==="anomaly-map"||i.kind==="coverage-map",credit:i.license?.attribution??i.name}};var cs=parent!==window,hy=0,Mh=new Map;addEventListener("message",i=>{i.source!==parent||i.data?.abstracts!=="result"||(Mh.get(i.data.id)?.(i.data),Mh.delete(i.data.id))});var bi=(i,t={})=>new Promise((e,n)=>{if(!cs)return n(Object.assign(new Error("standalone"),{code:"unsupported"}));let s=`c${++hy}`;Mh.set(s,r=>r.ok?e(r.value):n(Object.assign(new Error(r.error?.message??"failed"),{code:r.error?.code??"failed"}))),parent.postMessage({abstracts:"call",id:s,method:i,params:t},"*")}),Rf=async()=>{if(!cs)return null;for(let i=0;i<3;i++){let t=await Promise.race([bi("hello"),new Promise(e=>setTimeout(e,500,null))]).catch(()=>null);if(t)return t}return null},Cf=i=>{if(globalThis.__LAYOUT__)return i(globalThis.__LAYOUT__);if(!cs)return i("viewport");let t="content";i(t),addEventListener("message",e=>{if(e.source!==parent)return;let n=e.data?.abstractsLayout;n!=="content"&&n!=="viewport"||(n==="viewport"&&parent.postMessage({abstractsLayout:"viewport"},"*"),n!==t&&(t=n,i(t)))}),parent.postMessage({abstractsLayout:"request"},"*")},Pf=i=>{cs&&i>0&&Number.isFinite(i)&&parent.postMessage({abstractsHeight:Math.ceil(i)},"*")};var Re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ga=i=>i.replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(),Rn={confirmed:{label:"Tested, and the result stands",short:"Result stands",tone:"good",d:"M4.2 7.4l2 2 3.8-4.6"},refuted:{label:"The claim was shown wrong",short:"Shown wrong",tone:"bad",d:"M4.5 4.5l5 5M9.5 4.5l-5 5"},corrected:{label:"The claim was corrected",short:"Corrected",tone:"warn",d:"M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0"},unresolved:{label:"Still open",short:"Still open",tone:"info",d:"M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1"},"never-tested":{label:"Never tested",short:"Never tested",tone:"mut",d:""},"no-claim":{label:"Made no claim about Atlantis",short:"No claim",tone:"mut",d:"M4.5 7h5"}},va=i=>{let t=Rn[i]??Rn["never-tested"];return`<svg class="g g-${t.tone}${t.d?"":" hollow"}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${t.d?`<path d="${t.d}"/>`:""}</svg>`},Ls=i=>i==="fit"?'<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>':i==="brk"?'<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>':'<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>',If=(i,t)=>{let e=i.places,n=new Map;for(let r of e)for(let a of[...r.fits??[],...r.conflicts??[]])n.set(a,(n.get(a)??0)+1);let s=t.claims.filter(r=>r.testable);return{places:e.length,found:e.filter(r=>r.standing==="confirmed"||r.standing==="mainstream").length,checked:e.filter(r=>(r.tests??[]).length).length,checkable:s.length,unmeasured:s.filter(r=>!n.has(r.id)),used:n,searches:t.searches.length,open:t.searches.filter(r=>r.status==="unresolved").length,first:t.searches[0]?.year,last:t.searches.at(-1)?.year}},uy=i=>[[i.places,"places proposed"],[i.found,"where Plato's city has been found"],[i.places-i.checked,"never checked on the ground"],[`${i.unmeasured.length} of ${i.checkable}`,"of Plato's checkable details never measured anywhere"]].map(([t,e])=>`<div class="tile"><b>${t}</b><span>${Re(e)}</span></div>`).join(""),dy=(i,t)=>`<ol class="tl">${i.searches.map(e=>`<li><button class="tl-b${e.id===t?" on":""}" data-search="${Re(e.id)}" aria-label="${e.year}: ${Re(e.title)}. ${Re(Rn[e.status]?.label??"")}">${va(e.status)}<span>${e.year}</span></button></li>`).join("")}</ol>`,fy=i=>`<div class="key">${Object.entries(Rn).map(([t,e])=>`<span>${va(t)}<b>${i.searches.filter(n=>n.status===t).length}</b> ${Re(e.short.toLowerCase())}</span>`).join("")}</div>`,Lf=(i,t)=>`
  <div class="pop-h">${va(i.status)}<b>${i.year} \xB7 ${Re(i.title)}</b></div>
  <div class="pop-s">${Re(Rn[i.status]?.label??"")}${i.who?` \xB7 ${Re(i.who)}`:""}</div>
  ${i.announced?`<p><em>Said:</em> ${Re(i.announced)}</p>`:""}
  <p><em>How it ended:</em> ${Re(i.outcome)}</p>
  <div class="row">${i.place?`<button class="btn primary" data-go="${Re(i.place)}">Go to ${Re(t??"the place")}</button>`:""}${/^https?:/.test(i.source??"")?`<a class="btn" href="${Re(i.source)}" target="_blank" rel="noopener">Source</a>`:""}</div>`,Df=(i,t,e,n)=>{let s=Object.fromEntries(t.claims.map(c=>[c.id,c])),r=[...e.used.keys()].filter(c=>s[c]).sort((c,f)=>e.used.get(f)-e.used.get(c)),a=e.unmeasured.map(c=>c.id),l=[...i.places].sort((c,f)=>(f.tests??[]).length-(c.tests??[]).length||(f.fits??[]).length+(f.conflicts??[]).length-((c.fits??[]).length+(c.conflicts??[]).length)||c.name.localeCompare(f.name)),o=(c,f)=>`<th class="col${f?" dim":""}"><button data-claim="${Re(c)}"><span>${Re(s[c].short)}</span></button></th>`,h=(c,f)=>{let d=(c.fits??[]).includes(f),p=(c.conflicts??[]).includes(f);if(!d&&!p)return'<td class="c"></td>';let v=d&&p?"both":d?"fit":"brk";return`<td class="c"><button data-cell="${Re(c.id)}|${Re(f)}|${v}" aria-label="${Re(c.name)}: ${v==="fit"?"said to fit":v==="brk"?"breaks":"argued both ways"} ${Re(s[f].short)}">${Ls(v)}</button></td>`},u=l.map(c=>{let f=(c.tests??[]).length;return`<tr><th scope="row"><button data-go="${Re(c.id)}">${Re(ga(c.name))}${n.has(c.id)?'<i class="has-scene"></i>':""}</button></th>${r.map(d=>h(c,d)).join("")}${a.map(()=>'<td class="c dim"></td>').join("")}<td class="n">${f?`<b>${f}</b>`:"<span>0</span>"}</td><td class="v"><i class="sdot p-${Re(c.standing)}"></i>${Re(Is[c.standing]??c.standing)}</td></tr>`}).join("");return`
    <div class="tiles">${uy(e)}</div>
    <h3>${e.searches} searches, ${e.first} to ${e.last}</h3>
    
    <div class="tl-wrap">${dy(t)}</div>
    ${fy(t)}
    <h3>Each place against what Plato wrote</h3>
    
    <div class="grid-wrap"><table class="grid">
      <thead><tr><th></th>${r.map(c=>o(c,!1)).join("")}${a.map(c=>o(c,!0)).join("")}<th class="flat">Field<br>checks</th><th class="flat l">Standing</th></tr></thead>
      <tbody>${u}</tbody>
    </table></div>
    <div class="key"><span>${Ls("fit")}said to fit</span><span>${Ls("brk")}breaks</span><span>${Ls("both")}argued both ways</span><span><i class="has-scene"></i>has a scene to explore</span><span class="dimkey">shaded columns: never measured anywhere</span></div>
    `},Nf=(i,t)=>`
  <div class="pop-h"><b>${Re(i.short)}</b></div>
  <div class="pop-s">${Re(i.ref)}${i.testable?"":" \xB7 not something the ground can test"}</div>
  <p>${Re(i.label)}</p>
  ${i.quote?`<p class="quote">\u201C${Re(i.quote)}\u201D</p>`:""}
  ${i.testable&&i.how_to_test?`<p><em>How to check it:</em> ${Re(i.how_to_test)}</p>`:""}
  <p class="pop-s">${t?`Held against ${t} place${t===1?"":"s"}.`:"Not held against any place yet."}</p>`;var py="https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",Ol=new Map,Bl=null,my=(i,t,e)=>{let n=`${i}/${t}/${e}`;return Ol.has(n)||Ol.set(n,(async()=>{let s=await fetch(py.replace("{z}",i).replace("{x}",t).replace("{y}",e),{signal:AbortSignal.timeout(25e3)});if(!s.ok)throw new Error(`elevation tile ${n}: HTTP ${s.status}`);let r=await createImageBitmap(await s.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"});Bl??=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256)).getContext("2d",{willReadFrequently:!0}),Bl.clearRect(0,0,256,256),Bl.drawImage(r,0,0),r.close?.();let a=Bl.getImageData(0,0,256,256).data,l=new Float32Array(65536);for(let o=0;o<65536;o++)l[o]=a[o*4]*256+a[o*4+1]+a[o*4+2]/256-32768;return l})().catch(s=>{throw Ol.delete(n),s})),Ol.get(n)},zl=async(i,t)=>{t=$t(Math.round(t),0,10);let e=2**t,n=new Map,s=i.map(([a,l])=>{let o=rs(a*gt,t),h=$t(as(l*gt,t),0,e-1e-6),u=(Math.floor(o)%e+e)%e,c=Math.floor(h);return n.set(`${u}/${c}`,[u,c]),[`${u}/${c}`,$t(Math.floor((o-Math.floor(o))*256),0,255),$t(Math.floor((h-c)*256),0,255)]}),r=new Map(await Promise.all([...n].map(async([a,[l,o]])=>[a,await my(t,l,o)])));return s.map(([a,l,o],h)=>lh(r.get(a)[o*256+l],i[h][0],i[h][1]))},Hl=(i,t)=>$t(Math.round(Math.log2(400750167e-1*Math.cos(t*gt)/256/i)),0,10);var xa={lat:35.97389,lon:-5.51611},xr=(i,t,e,n)=>{let s=n/ee,r=e*gt,a=i*gt,l=t*gt,o=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r));return[((l+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(o)))/gt+540)%360-180,o/gt]},gy=(i,t,e,n)=>{let s=Math.sin((e-i)*gt/2)**2+Math.cos(i*gt)*Math.cos(e*gt)*Math.sin((n-t)*gt/2)**2;return 2*ee*Math.asin(Math.min(1,Math.sqrt(s)))},vy=(i,t,e,n)=>{let s=Math.sin((n-t)*gt)*Math.cos(e*gt),r=Math.cos(i*gt)*Math.sin(e*gt)-Math.sin(i*gt)*Math.cos(e*gt)*Math.cos((n-t)*gt);return(Math.atan2(s,r)/gt+360)%360},xy=["north","north-east","east","south-east","south","south-west","west","north-west"],Gl=i=>xy[Math.round(i/45)%8],Sh=i=>{let t=n=>i.claims.find(s=>s.id===n)??{numbers:[]},e=(n,s)=>t(n).numbers.find(r=>r.what.startsWith(s))?.value;return{island:e("central-island-diameter","diameter"),rings:t("ring-widths").numbers.reduce((n,s)=>n+s.value,0),canal:e("canal-to-sea","canal length"),wall:e("outer-wall-50-stades","distance"),plainLong:e("great-plain","plain length"),plainWide:e("great-plain","plain width"),canalGap:e("plain-canals","spacing"),refs:{rings:t("ring-widths").ref,island:t("central-island-diameter").ref,canal:t("canal-to-sea").ref,wall:t("outer-wall-50-stades").ref,plain:t("great-plain").ref,canals:t("plain-canals").ref,pillars:t("beyond-pillars").ref,years:t("nine-thousand-years").ref}}},Ff=i=>{let t=[...i].sort((n,s)=>n-s),e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{low:e(.05),mid:e(.5),high:e(.95),min:t[0],max:t[t.length-1]}},Uf=async({lat:i,lon:t,sea:e,cas:n,stadion:s=185})=>{let r=Sh(n),a=s,l=(r.island/2+r.rings)*a,o=l+r.wall*a,h={lat:i,lon:t,sea:e,stadion:a,plato:r,ringR:l,wallR:o,made:new Date().toISOString().slice(0,10)},u=Hl(120,i),c=[];for(let k=-l;k<=l;k+=110)for(let O=-l;O<=l;O+=110)O*O+k*k<=l*l&&c.push([t+O/(ee*Math.cos(i*gt))/gt,i+k/ee/gt]);let f=await zl(c,u),d=Ff(f);h.rings={across:2*l,low:d.min,high:d.max,mid:d.mid,relief:d.high-d.low,underSea:f.filter(k=>k<e).length/f.length,here:f[Math.floor(f.length/2)],zoom:u};let p=h.rings.mid>=e;h.dry=p;let v=Hl(260,i),g=[],m=400,x=15e4;for(let k=0;k<360;k+=5)for(let O=m;O<=x;O+=m)g.push([k,O,xr(i,t,k,O)]);let b=await zl(g.map(k=>k[2]),v),_=null;for(let k=0;k<g.length;k++)(p?b[k]<e:b[k]>=e)&&(!_||g[k][1]<_.distance)&&(_={distance:g[k][1],bearing:g[k][0],at:g[k][2]});h.shore=_?{..._,kind:p?"sea":"land"}:{distance:null,bearing:null,kind:p?"sea":"land",beyond:x},h.canal={want:r.canal*a+l,from:"centre"};let S=p?h.shore.bearing??180:((h.shore.bearing??0)+180)%360,A=(S+180)%360,y=(S+90)%360,T=p&&h.shore.distance!=null?h.shore.distance:0,B=r.plainLong*a,M=r.plainWide*a,W=(k,O)=>{let nt=xr(i,t,S,T-O);return xr(nt[1],nt[0],y,k)},J=Hl(Math.max(1200,B/110),i),ht=[];for(let k=0;k<44;k++)for(let O=0;O<66;O++)ht.push(W(((O+.5)/66-.5)*B,(k+.5)/44*M));let N=await zl(ht,J),$=N.filter(k=>k>=e),G=$.length?Ff($):null;h.plain={long:B,wide:M,land:$.length/N.length,low:G?.low??null,high:G?.high??null,mid:G?.mid??null,level:G?$.filter(k=>Math.abs(k-G.mid)<=100).length/N.length:0,inland:A,zoom:J};let j=gy(i,t,xa.lat,xa.lon),lt=t>xa.lon&&t<42&&i>30&&i<47.5;h.strait={distance:j,bearing:vy(xa.lat,xa.lon,i,t),inside:lt};let Q=(k,O=96)=>Array.from({length:O+1},(nt,tt)=>xr(i,t,tt/O*360,k)),F=(k,O,nt,tt={})=>({id:`plato-${k}`,side:"plato",kind:"outline",label:O,geometry:nt,fill:!1,...tt}),I=[F("rings",`Plato's rings, ${(2*l/1e3).toFixed(1)} km across`,{type:"Polygon",coordinates:[Q(l)]},{fill:!0,width:2.4}),F("island",null,{type:"LineString",coordinates:Q(r.island/2*a,48)},{width:1.4}),F("wall",`Outer wall, ${r.wall} stades out`,{type:"LineString",coordinates:Q(o,128)},{width:1.8,dash:[9,6]}),F("canal",`Canal, ${r.canal} stades`,{type:"LineString",coordinates:[xr(i,t,S,l),xr(i,t,S,o)]},{width:2.6}),F("plain",`The plain, ${Math.round(B/1e3)} by ${Math.round(M/1e3)} km`,{type:"Polygon",coordinates:[[W(-B/2,0),W(B/2,0),W(B/2,M),W(-B/2,M),W(-B/2,0)]]},{width:2.2})],z=[];for(let k=-B/2+r.canalGap*a;k<B/2-1;k+=r.canalGap*a)z.push([W(k,0),W(k,M/2),W(k,M)]);return I.push(F("canals",null,{type:"MultiLineString",coordinates:z},{width:.9})),h.shapes=I,h.seaBearing=S,h};var yy={"survey-area":"Survey",track:"Track",core:"Core",sample:"Sample",dive:"Dive",dig:"Dig",structure:"Claimed shape",outline:"Outline",place:"Place"},_y={"from-dataset":"Position from an open data record","stated-coordinates":"Position printed in the source","digitised-from-figure":"Position read off a map in the source","from-description":"Position from a description only"},kf={claimed:"Claimed",checked:"Checked",found:"Found",context:"Places"},Of={"survey-area":'<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>',track:'<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',core:'<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>',sample:'<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',dive:'<circle cx="7" cy="7" r="4" fill="currentColor"/>',dig:'<path d="M3 3h8v8H3z" fill="currentColor"/>',structure:'<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',outline:'<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>',place:'<circle cx="7" cy="7" r="2.200" fill="currentColor"/>'},by=i=>`<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${Of[i]??Of.place}</svg>`,Bf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,metres:l,toast:o,setSheet:h,body:u,eyebrow:c,stage:f,pinsEl:d,project:p}=i,{control:v,globe:g}=t,m=g.shared,x=t.evidence,b=e.legends.find(R=>R.id==="atlantis"),_=e.cas;if(!b||!_)return null;let S=new Map(e.evidence.map(R=>[R.place,R])),A=new Map(b.places.map(R=>[R.id,R])),y=Object.fromEntries(_.claims.map(R=>[R.id,R])),T=If(b,_),B=Sh(_),M=n.a={view:"list",scene:null,mode:"all",step:-1,feature:null,search:null,sea:null,fit:null,tour:null,more:!1},W=R=>{let H=/^(.{40,220}?[.!?])(\s|$)/.exec(R??"");return H?H[1]:R??""},J=R=>R>=1e5?`${Math.round(R/1e3).toLocaleString("en")} km`:R>=1e4?`${(R/1e3).toFixed(0)} km`:R>=1e3?`${(R/1e3).toFixed(1)} km`:`${Math.round(R)} m`,ht=null,N=(R,H)=>{let K=m.uSea.value,w=performance.now(),P=$t(Math.abs(R-K)*22,500,2600);cancelAnimationFrame(ht);let U=()=>{let C=$t((performance.now()-w)/P,0,1),Y=C*C*(3-2*C);i.setSea(K+(R-K)*Y,!1),C<1?ht=requestAnimationFrame(U):H?.()};U()},$=()=>{M.sea&&Math.abs(m.uSea.value-M.sea.to)<.6&&N(M.sea.from),M.sea=null},G=R=>{let H=(R.tests??[]).length;return`<button class="prow" data-act="a-place" data-id="${r(R.id)}"><i class="sdot p-${r(R.standing)}${H?"":" hollow"}"></i><span class="pn">${r(ga(R.name))}${S.has(R.id)?'<em class="sc">scene</em>':""}</span><small>${H?`${H} check${H===1?"":"s"}`:"never checked"}</small></button>`},j=()=>{M.view="list",c.innerHTML='Atlantis <span class="tag s-legend">Legend</span>';let R=[...b.places].sort((H,K)=>Number(S.has(K.id))-Number(S.has(H.id))||(K.tests??[]).length-(H.tests??[]).length||H.name.localeCompare(K.name));u.innerHTML=`
      <h2>Where was Atlantis?</h2>
      <p class="lead">${r(W(b.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${S.size} places with a scene to explore</h3>
      ${R.filter(H=>S.has(H.id)).map(G).join("")}
      <h3>The other ${b.places.length-S.size} proposals</h3>
      ${R.filter(H=>!S.has(H.id)).map(G).join("")}
      
      ${b.origin?.url?`<p class="note">Where the story comes from: ${a(b.origin.url,b.origin.text??"source")}</p>`:""}`},lt=R=>{let H=_.places[R.id]??{fits:{},breaks:{}},K=(Y,it)=>`<button class="sc-chip ${it}" data-act="a-claim" data-id="${r(Y)}" data-place="${r(R.id)}" data-kind="${it}">${Ls(it)}${r(y[Y]?.short??Y)}</button>`,w=(R.fits??[]).filter(Y=>y[Y]),P=(R.conflicts??[]).filter(Y=>y[Y]),U=w.filter(Y=>P.includes(Y)),C=T.checkable-new Set([...w,...P].filter(Y=>y[Y].testable)).size;return!w.length&&!P.length?`<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${T.checkable} could be checked.</p>`:`<h3>Against Plato</h3><div class="score">${w.filter(Y=>!U.includes(Y)).map(Y=>K(Y,"fit")).join("")}${U.map(Y=>K(Y,"both")).join("")}${P.filter(Y=>!U.includes(Y)).map(Y=>K(Y,"brk")).join("")}</div>
      ${H.reason,""}`},Q=()=>M.scene?x.visible().filter(R=>R.side!=="plato"):[],F=R=>`
    <div class="fcard">
      <p>${r(R.what)}</p>
      ${R.result?`<p><b>${R.side==="claimed"?"What a check showed":"Result"}:</b> ${r(R.result)}</p>`:""}
      ${(R.column??[]).length?`<div class="strata">${R.column.map(H=>`<div><i style="background:${i.strataColour(H.what)}"></i><span>${H.from_m}\u2013${H.to_m} m \xB7 ${r(H.what)}${H.age?` \xB7 ${r(H.age)}`:""}</span></div>`).join("")}</div>`:""}
      ${R.evidence?`<p class="quote">\u201C${r(R.evidence)}\u201D</p>`:""}
      <p class="note" style="margin:0">${r(_y[R.position?.how]??"")}${Number.isFinite(R.position?.error_m)?`, give or take ${J(R.position.error_m)}`:""}. ${a(R.source,"Source")}${R.position?.source&&R.position.source!==R.source?` \xB7 ${a(R.position.source,"position")}`:""}</p>
    </div>`,I=()=>{let R=Q();return R.length?["claimed","checked","found","context"].map(H=>{let K=R.filter(w=>w.side===H);return K.length?`<div class="fgroup s-${H}"><h4><i></i>${kf[H]} \xB7 ${K.length}</h4>${K.map(w=>`<button class="feat${w.id===M.feature?" on":""}" data-act="a-feature" data-id="${r(w.id)}">${by(w.kind)}<span>${r(w.label)}</span><small>${r([yy[w.kind],w.year].filter(Boolean).join(" \xB7 "))}</small></button>${w.id===M.feature?F(w):""}`).join("")}</div>`:""}).join(""):'<p class="note">Nothing in this view. Try <b>Both</b>.</p>'},z=()=>{let R=M.scene;if(M.step>=0){let K=R.story[M.step];return`<span class="tag s-${K.side==="claimed"?"claimed":K.side==="checked"?"checked":"found"}">${M.step+1} of ${R.story.length} \xB7 ${r(kf[K.side]??K.side)}</span> ${r(K.line)}`}let H=(K,w)=>`<b class="w-${K}">${w}.</b> ${r(R[K].line)} <small>${r([R[K].who,R[K].year].filter(Boolean).join(", "))} \xB7 ${a(R[K].source,"source")}</small>`;return M.mode==="claimed"?H("claimed","Claimed"):M.mode==="found"?H("found","Found"):`${H("claimed","Claimed")}<br>${H("found","Found")}`},k=R=>{let H=(R.best_layers??[]).map(K=>i.overlays.find(w=>w.id===K)).filter(Boolean).slice(0,5);return H.length?`<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${H.map(K=>`<button class="chip${n.overlay?.id===K.id?" on":""}" data-act="a-layer" data-id="${r(K.id)}">${r(K.s.name.replace(/\s*\(.*?\)/g,""))}</button>`).join("")}</div>`:""},O=()=>{let R=M.scene;return`
      <div class="seg modes">${[["claimed","Claimed"],["found","Found"],["all","Both"]].map(([H,K])=>`<button data-act="a-mode" data-v="${H}" class="${M.mode===H&&M.step<0?"on":""} m-${H}">${K}</button>`).join("")}</div>
      <p class="lead" id="a-line">${z()}</p>
      ${R.story.length?`<div class="steps"><span>Walk through it</span>${R.story.map((H,K)=>`<button data-act="a-step" data-i="${K}" class="s-${r(H.side)}${K===M.step?" on":""}" aria-label="Step ${K+1}">${K+1}</button>`).join("")}<button class="nx" data-act="a-next" aria-label="Next step">${M.step>=R.story.length-1?"Start over":M.step<0?"Start \u203A":"Next \u203A"}</button></div>`:""}
      <div id="a-features">${I()}</div>
      ${k(R)}
      ${R.measurements.length?`<h3>Measured here</h3><div class="meas">${R.measurements.slice(0,M.more?99:5).map(H=>`<div><span>${r(H.what)}</span><b>${r(typeof H.value=="number"?H.value.toLocaleString("en"):H.value)} ${r(H.unit??"")}</b>${H.plato_value?`<small>Plato: ${r(H.plato_value)}</small>`:""}<small>${a(H.source,"source")}</small></div>`).join("")}</div>${R.measurements.length>5&&!M.more?`<button class="linkish" data-act="a-more">All ${R.measurements.length} measurements</button>`:""}`:""}`},nt=R=>`
    <details class="full"><summary>Read the full case</summary>
      ${R.claim?`<p>${r(R.claim)}</p>`:""}
      ${R.against?`<p><b>Against:</b> ${r(R.against)}</p>`:""}
      ${R.proposed_by?.length?`<p>Proposed by ${r(R.proposed_by.slice(0,4).map(H=>`${H.who}${H.year?` (${H.year})`:""}`).join(", "))}.</p>`:""}
      ${(R.tests??[]).map(H=>`<p><b>Checked:</b> ${r(H.what)}${H.who?` (${r(H.who)}${H.year?`, ${H.year}`:""})`:""}. ${r(H.result)} ${H.url?a(H.url,"Source"):""}</p>`).join("")}
      ${M.scene?.not_located?.length?`<p><b>Could not be placed on the map:</b></p><ul>${M.scene.not_located.slice(0,8).map(H=>`<li>${r(H.what)}${H.why?` <span class="why">(${r(H.why)})</span>`:""}</li>`).join("")}</ul>`:""}
      <p class="note">${An(R.lat,R.lon,3)}${R.precision_km?`, give or take ${R.precision_km} km`:""}${R.underwater?", under water":""}</p>
      ${(R.sources??[]).map(H=>`<a class="src" href="${r(H.url)}" target="_blank" rel="noopener">${r(H.title??H.url)}</a>`).join("")}
    </details>`,tt=()=>{let R=n.place,H=M.scene,K=R.proposed_by?.[0],w=(R.tests??[]).length;M.view="place",c.innerHTML=`${r(kl[R.role]??"Proposed")} <span class="tag t-${r(R.standing)}">${r(Is[R.standing]??R.standing)}</span>`;let P=u.scrollTop;u.innerHTML=`
      <button class="back" data-act="a-list">\u2039 All ${b.places.length} places</button>
      <h2>${r(R.name)}</h2>
      <div class="when">${K?`Proposed by ${r(K.who)}${K.year?`, ${K.year}`:""}`:""}${R.event_date?`${K?" \xB7 ":""}needs ${r(R.event_date)}`:""}</div>
      ${H?O():`<p class="lead">${r(W(R.claim))}</p>${R.against?`<p class="lead"><b class="w-found">Against.</b> ${r(W(R.against))}</p>`:""}`}
      ${lt(R)}
      ${H?"":`<h3>Checks on the ground \xB7 ${w}</h3>${w?R.tests.map(U=>`<div class="check1">${va("confirmed")}<span><b>${r(U.what)}</b>${U.who?` \xB7 ${r(U.who)}${U.year?`, ${U.year}`:""}`:""}<br>${r(W(U.result))} ${U.url?a(U.url,"Source"):""}</span></div>`).join(""):'<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${H?.needs_sea_level?`<button class="btn${M.sea?" on":""}" data-act="a-sea">${M.sea?"Sea back to where it was":`${H.needs_sea_level.m<0?"Lower":"Raise"} the sea to ${l(H.needs_sea_level.m)}`}</button>`:""}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${nt(R)}`,u.scrollTop=P},at=()=>x.viewOf(null),ft=(R,H=!0)=>{let K=n.place;n.legend=b,n.place=R;let w=S.get(R.id)??null;(K!==R||M.scene!==w)&&($(),M.mode="all",M.step=-1,M.feature=null,M.more=!1,M.fit=null),M.scene=w,w?.dem&&!w.dem.asked&&(w.dem.asked=!0,Td(w.dem,globalThis.__ASSETS__||"./").then(P=>{P&&(g.refresh(P.bbox),t.stamp++)})),x.show(w),x.setExtras([]),x.setMode(M.mode),h("legend"),u.scrollTop=0,tt(),H&&v.flyTo(w?at():i.viewFor(R)),w?.needs_sea_level?.m<0&&H&&!M.sea&&Math.abs(m.uSea.value-w.needs_sea_level.m)>.6&&m.uWater.value>.5&&(M.sea={from:m.uSea.value,to:w.needs_sea_level.m},setTimeout(()=>{M.sea&&n.place===R&&(N(M.sea.to),o(`Sea lowered to ${l(M.sea.to)}: ${w.needs_sea_level.when??"what this proposal needs"}`,4200),tt())},H?1700:0))},bt=()=>{L(),n.legend=b,n.place=null,h("legend"),u.scrollTop=0,j()},L=()=>{$(),M.scene=null,M.step=-1,M.feature=null,x.show(null),x.setExtras([]),M.fit=null},X=R=>{M.mode=R,M.step=-1,M.feature=null,x.setMode(R),x.setFocus(null),x.select(null),tt()},Z=R=>{let H=M.scene.features.filter(C=>R.includes(C.id));if(!H.length)return at();let K=H.map(_i),w=K.reduce((C,Y)=>C+Y[0],0)/K.length,P=K.reduce((C,Y)=>C+Y[1],0)/K.length,U=0;for(let C of H){let Y=x.viewOf(C);U=Math.max(U,Y.range/2.2+Math.hypot((_i(C)[0]-w)*Math.cos(P*gt),_i(C)[1]-P)*gt*63710088e-1)}return{lon:w*gt,lat:P*gt,range:$t(U*2.6,900,at().range*1.2),tilt:48*gt,heading:v.heading}},ut=R=>{let H=M.scene;if(H?.story.length){if(M.step=R>=H.story.length?-1:R,M.feature=null,x.select(null),M.step<0)M.mode="all",x.setMode("all"),x.setFocus(null),v.flyTo(at(),1.6);else{let K=H.story[M.step];M.mode="all",x.setMode("all"),x.setFocus(K.show??[]),K.show?.length&&v.flyTo(Z(K.show),1.8)}tt()}},ot=(R,H=!0)=>{let K=M.scene?.features.find(w=>w.id===R);M.feature=K&&M.feature!==R?R:null,x.select(M.feature),M.feature&&H&&v.flyTo(x.viewOf(K),1.5),n.sheet!=="legend"&&h("legend"),tt(),M.feature&&u.querySelector(".feat.on")?.scrollIntoView({block:"nearest",behavior:"smooth"})},Tt=new Map,Et=new Set,Ft=[0,0],Dt=R=>{let H=Tt.get(R.id);return H||(H=document.createElement("button"),H.className="mark",H.innerHTML="<i></i><span></span>",H.addEventListener("click",K=>{K.stopPropagation(),R.side!=="plato"&&ot(R.id,!1)}),d.appendChild(H),Tt.set(R.id,H)),H._l=R,H},ne=()=>{let R=new Set;if(x.active&&x.labels.length){let H=f.clientWidth,K=f.clientHeight,w=[],P=x.labels.map(U=>({l:U,w:(U.id===M.feature?100:0)+(U.lit?10:0)+({claimed:5,found:4,checked:3,plato:2,context:1}[U.side]??0)})).sort((U,C)=>C.w-U.w);for(let{l:U}of P){if(!p(U.lon,U.lat,Ft,U.lift)||Ft[0]<-10||Ft[1]<90||Ft[0]>H+10||Ft[1]>K-30)continue;let C=U.text.length>34?`${U.text.slice(0,32).trimEnd()}\u2026`:U.text,Y=[Ft[0]-8,Ft[1]-10,Ft[0]+14+C.length*6.3,Ft[1]+10],it=U.lit&&w.length<26&&Y[2]<H-4;if(it){for(let Pt of w)if(Y[0]<Pt[2]&&Y[2]>Pt[0]&&Y[1]<Pt[3]&&Y[3]>Pt[1]){it=!1;break}}if(!it&&U.id!==M.feature&&U.kind!=="core"&&U.side==="context")continue;it&&w.push(Y);let yt=Dt(U);yt._text!==C&&(yt.lastChild.textContent=C,yt._text=C,yt.setAttribute("aria-label",`${U.text}${U.year?` (${U.year})`:""}`)),yt.style.transform=`translate3d(${Ft[0].toFixed(1)}px,${Ft[1].toFixed(1)}px,0)`;let Mt=`mark s-${U.side}${it?"":" dot"}${U.id===M.feature?" on":""}${U.lit?"":" dim"}`;yt.className!==Mt&&(yt.className=Mt),yt._shown||(yt.style.display="",yt._shown=!0),R.add(yt)}}for(let H of Et)R.has(H)||(H.style.display="none",H._shown=!1);Et.clear();for(let H of R)Et.add(H);if(!x.active&&Tt.size){for(let H of Tt.values())H.remove();Tt.clear()}},Wt=s("#pop"),Rt=0,Ct=(R,H)=>{Wt.innerHTML=`<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${R}`,Wt.classList.add("open"),Rt=performance.now();let K=f.getBoundingClientRect(),w=H.getBoundingClientRect(),P=Wt.offsetWidth,U=Wt.offsetHeight,C=$t(w.left-K.left+w.width/2-P/2,8,K.width-P-8),Y=w.top-K.top-U-10;Wt.style.left=`${C}px`,Wt.style.top=`${Y>=8?Y:Math.min(w.bottom-K.top+10,K.height-U-8)}px`},Ut=()=>{Wt.classList.remove("open"),M.search=null;for(let R of f.querySelectorAll(".tl-b.on"))R.classList.remove("on");i.pulse(null)},st=(R,H)=>{let K=_.searches.find(w=>w.id===R);if(K){if(M.search===R)return Ut();Ut(),M.search=R,H.classList.add("on"),Ct(Lf(K,K.place?A.get(K.place)?.name:null),H),i.pulse(K.place?A.get(K.place):null)}},Vt=(R,H,K,w)=>{let P=y[R];if(!P)return;let U=K&&_.places[K],C=U&&(w==="brk"?U.breaks[R]:w==="fit"?U.fits[R]:null),Y=U&&w==="both"?`<p><em>Said to fit:</em> ${r(U.fits[R]?.how??"")} ${a(U.fits[R]?.source,"source")}</p><p><em>Breaks:</em> ${r(U.breaks[R]?.how??"")} ${a(U.breaks[R]?.source,"source")}</p>`:"",it=K?`<div class="pop-h">${Ls(w)}<b>${r(A.get(K)?.name??"")} \xB7 ${r(P.short)}</b></div><div class="pop-s">${w==="fit"?"Said to fit":w==="brk"?"Breaks":"Argued both ways"} \xB7 ${r(P.ref)}</div>${C?`<p>${r(C.how)} ${a(C.source,"source")}</p>`:Y}<p class="quote">\u201C${r(P.quote??P.label)}\u201D</p>`:Nf(P,T.used.get(R)??0);Ct(it,H)},St=s("#board"),Bt=()=>{Ut(),s("#board-body").innerHTML=Df(b,_,T,S),St.classList.add("open"),f.classList.add("board-open"),s("#board-body").scrollTop=0},vt=()=>{Ut(),St.classList.remove("open"),f.classList.remove("board-open")},Lt=R=>{let H=A.get(R);H&&(vt(),Ut(),ft(H,!0))};St.addEventListener("click",R=>{let H=R.target.closest("[data-search],[data-claim],[data-cell],[data-go],[data-act]");if(!H)return Ut();if(H.dataset.act==="board-x")vt();else if(H.dataset.search)st(H.dataset.search,H);else if(H.dataset.claim)Vt(H.dataset.claim,H);else if(H.dataset.cell){let[K,w,P]=H.dataset.cell.split("|");Vt(w,H,K,P)}else H.dataset.go&&Lt(H.dataset.go)});for(let R of[s("#board-body"),u])R.addEventListener("scroll",()=>{Wt.classList.contains("open")&&performance.now()-Rt>350&&Ut()},{passive:!0});Wt.addEventListener("click",R=>{let H=R.target.closest("[data-go],[data-act]");H?.dataset.go?Lt(H.dataset.go):H?.dataset.act==="pop-x"&&Ut()});let kt=()=>`<button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-list="1"><b>${T.places}</b> famous claims</button><button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-board="1"><b>${T.checked}</b> checked<i>&nbsp;on the ground</i> \xB7 <b>${T.found}</b> found<span>Board \u203A</span></button>`,Nt=(R,H,K,w,P,U)=>`<div class="fit"><div class="fit-h"><b>${r(R)}</b><small>${r(H??"")}</small></div><div class="fit-b"><span><em>Plato</em>${K}</span><span class="${U??""}"><em>Here</em>${w}</span></div>${P?`<p class="note">${P}</p>`:""}</div>`,V=()=>{let R=M.fit,H=n.place;if(c.textContent="Test the fit",!R||R.state==="loading"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${r(H?.name??"this point")} from the open elevation tiles\u2026</p>`;return}if(R.state==="failed"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`;return}let K=R.plato,w=Mt=>`${Mt.toLocaleString("en")} stades`,P=R.stadion,U=R.rings,C=R.shore,Y=R.plain,it=R.strait,yt=Math.abs(R.sea)<1?"today's sea level":`the sea at ${l(R.sea)}`;u.innerHTML=`
      <button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${An(R.lat,R.lon,3)} with ${yt}, at ${P} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0,"Today"],[-50,"Plato's date"],[-125,"Ice-age low"]].map(([Mt,Pt])=>`<button class="chip${Math.abs(R.sea-Mt)<1?" on":""}" data-act="a-fit-sea" data-m="${Mt}">${Pt}${Mt?` ${l(Mt)}`:""}</button>`).join("")}</div>
      ${Nt("Is it above water?",K.refs.years,"<b>Dry land</b>, with the sea let into the rings",R.dry?`<b>Dry</b>, ${l(U.mid-R.sea)} above the sea`:`<b>Under ${Math.round(R.sea-U.mid).toLocaleString("en")} m of water</b>`,R.dry?"":`At this sea level the point is sea floor. Nearest land: ${C.distance==null?`more than ${J(C.beyond)} away`:`${J(C.distance)} to the ${Gl(C.bearing)}`}.`,R.dry?"ok":"no")}
      ${Nt("Ground for the rings",K.refs.rings,`<b>${J(U.across)}</b> across, cut to sea level<small>${w(K.island)} island + rings of ${K.rings} stades</small>`,`<b>${Math.round(U.relief).toLocaleString("en")} m</b> of relief<small>from ${l(U.low)} to ${l(U.high)}</small>`,"Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.")}
      ${Nt("The canal to the sea",K.refs.canal,`<b>${J(R.wallR)}</b> from the centre to the sea<small>a canal of ${w(K.canal)} beyond the rings</small>`,R.dry?C.distance==null?`<b>No sea within ${J(C.beyond)}</b>`:`<b>${J(C.distance)}</b> to the sea, to the ${Gl(C.bearing)}`:"<b>Under water</b>","The outer wall stood the same 50 stades out and met the sea at the canal mouth.")}
      ${Nt("The great plain",K.refs.plain,`<b>${Math.round(Y.long/1e3)} by ${Math.round(Y.wide/1e3)} km</b>, level<small>${w(K.plainLong)} by ${w(K.plainWide)}</small>`,`<b>${Math.round(Y.land*100)}%</b> of that box is land${Y.mid==null?"":`<small>${Math.round(Y.level*100)}% within 100 m of its middle height (${l(Y.mid)})</small>`}`,`Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${Gl(Y.inland)}.`)}
      ${Nt("Beyond the Pillars",K.refs.pillars,"<b>In front of the strait</b>, in the outer ocean",`<b>${J(it.distance)}</b> from the Strait of Gibraltar<small>${it.inside?"inside it, on the Mediterranean side":"outside it"}</small>`,"Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.",it.inside?"no":"ok")}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`},E=async(R,H)=>{let K=n.place,w=v.state(),P=H??M.fit?.at??(K?M.scene?{lat:M.scene.centre.lat,lon:M.scene.centre.lon}:{lat:K.lat,lon:K.lon}:{lat:w.lat,lon:w.lon}),U=R??(m.uWater.value>.5?Math.round(m.uSea.value):0);M.fit={state:"loading",at:P},h("fit"),M.view="fit",V();try{let C=await Uf({...P,sea:U,cas:_,stadion:t.city.params.stadion});if(M.view!=="fit")return;M.fit={...C,state:"done",at:P},R!=null&&i.setSea(R,!1),x.setExtras(C.shapes),C.dry&&(t.city.place({lat:C.lat,lon:C.lon,bearing:Math.round(C.seaBearing)}),t.stamp++),v.flyTo({lon:C.lon*gt,lat:C.lat*gt,range:C.wallR*3.4,tilt:50*gt,heading:(C.seaBearing+160)%360*gt},2.2),V()}catch(C){console.warn(C),M.fit={state:"failed",at:P},V()}},ct=()=>{let R=M.fit,H=R.rings,K=R.shore,w=R.plain;return[`Plato's plan at ${R.lat.toFixed(4)}, ${R.lon.toFixed(4)} (sea ${R.sea} m, stadion ${R.stadion} m), measured ${R.made} from Terrain Tiles:`,`- above water: ${R.dry?"yes":"no"} (middle height under the rings ${Math.round(H.mid)} m)`,`- ground under the rings (${Math.round(H.across)} m across): ${Math.round(H.low)} to ${Math.round(H.high)} m, relief ${Math.round(H.relief)} m`,`- nearest ${K.kind}: ${K.distance==null?`none within ${K.beyond} m`:`${Math.round(K.distance)} m at bearing ${K.bearing}`} (Plato: ${Math.round(R.wallR)} m from centre to sea)`,`- plain box ${Math.round(w.long/1e3)} x ${Math.round(w.wide/1e3)} km: ${Math.round(w.land*100)}% land, ${Math.round(w.level*100)}% within 100 m of ${w.mid==null?"n/a":Math.round(w.mid)} m`,`- Strait of Gibraltar: ${Math.round(R.strait.distance/1e3)} km, ${R.strait.inside?"inside":"outside"}`].join(`
`)},pt=(R,H)=>{if(R==="a-list")bt();else if(R==="a-place")ft(A.get(H.dataset.id),!0);else if(R==="a-board")Bt();else if(R==="a-mode")X(H.dataset.v);else if(R==="a-step")ut(Number(H.dataset.i)===M.step?-1:Number(H.dataset.i));else if(R==="a-next")ut(M.step+1);else if(R==="a-feature")ot(H.dataset.id);else if(R==="a-more")M.more=!0,tt();else if(R==="a-layer"){let K=i.overlays.find(w=>w.id===H.dataset.id);i.setOverlay(n.overlay?.id===K.id?null:K),i.drawTag(),tt()}else if(R==="a-claim")Vt(H.dataset.id,H,H.dataset.place,H.dataset.kind);else if(R==="a-sea"){let K=M.scene;M.sea?$():(M.sea={from:m.uSea.value,to:K.needs_sea_level.m},N(M.sea.to)),tt()}else if(R==="a-city"){let K=n.place,w=M.scene?.centre??K;i.standCity(w.lat,w.lon)}else if(R==="a-known"){let K=n.place;i.checkKnown(K.lat,K.lon,Math.max(K.precision_km??10,5))}else if(R==="a-fit")E();else if(R==="a-fit-sea")E(Number(H.dataset.m));else if(R==="a-fit-off")x.setExtras([]),t.city.remove(),t.stamp++,i.drawTag(),o("Cleared");else if(R==="a-fit-copy")navigator.clipboard?.writeText(ct()).then(()=>o("Copied"),()=>o("Could not copy"));else if(R==="a-back")M.view="place",n.place?(h("legend"),tt()):i.closeSheet();else if(R==="a-tour")i.tour?.();else return!1;return!0};return{atlantis:b,scenes:S,stats:T,a:M,seaTo:N,ringStades:B.island/2+B.rings,openPlace:ft,openList:bt,leaveScene:L,openBoard:Bt,closeBoard:vt,hidePop:Ut,drawCase:kt,click:pt,placeMarks:ne,selectFeature:ot,setStep:ut,setMode:X,runFit:E,get boardOpen(){return St.classList.contains("open")}}};var wy=i=>(i??"").split(",")[0].trim(),Th=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")};var zf=({worldfit:i,cas:t})=>{let e=[],n=i,s=t?.searches??[];if(e.push({id:"legend",say:"Atlantis is a story Plato told. Nobody has ever found it.",least:4500}),e.push({id:"tale",say:"He has it told as \u201Ca tale which, though strange, is certainly true\u201D.",least:5500}),e.push({id:"island",say:"Beyond the Pillars of Heracles, out in the Atlantic, lay an island \u201Clarger than Libya and Asia put together\u201D.",least:6500}),e.push({id:"city",say:"At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that \u201Csparkled like fire\u201D.",least:8e3}),e.push({id:"fall",say:"Then, \u201Cin a single day and night of misfortune\u201D, Atlantis \u201Cdisappeared in the depths of the sea\u201D.",least:7e3}),e.push({id:"date",say:"Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.",least:6e3,show:[{at:3.4,for:4.6,big:"9600 BCE"}]}),n){let r=n.best.find(l=>!l.near_old_ice)??n.best[0];e.push({id:"sank",say:`The sea stood about 50 m lower then. Since that date, ${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2 of land have gone under. All of it is glowing now.`,least:8e3,show:[{at:.4,for:3.2,big:"\u221250 m"},{at:4.2,for:6.2,big:`${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2`}]});let a=r?.near?.name?/^off /.test(r.near.name)?` The closest, ${r.near.name},`:` The closest, the ${wy(r.near.name)},`:" The closest";r&&e.push({id:"scored",say:`We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${a} scores ${r.top}: a match in the landscape, not a city.`,least:9e3,best:r})}if(s.length){let r=s.filter(l=>l.status==="unresolved").length,a=Math.min(...s.map(l=>l.year));e.push({id:"search",say:`People have gone looking since ${a}. ${s.length} searches are on record, and ${r} of them are still open. Not one has found the city.`,least:9e3,show:[{dots:[...s].sort((l,o)=>l.year-o.year).map(l=>l.status)}]})}return e.push({id:"built",say:"So we built his city as he wrote it, each part tied to a line of his text.",least:5500}),e.push({id:"hall",say:"At its centre he put a shrine, \u201Creserved as holy ground, and encircled with a wall of gold\u201D. We opened it. Inside is everything found so far, and everything still unknown.",least:9500}),e.push({id:"turn",say:"Walk in. The search is yours now.",least:4e3}),e};var Eh={lon:-5.61,lat:35.95},Hf=(i,t,e)=>{let{world:n,data:s,$:r,esc:a,setSheet:l,st:o,stage:h}=i,{control:u}=n,c=r("#tour"),f=n.city,d={on:!1,i:0,steps:[],timer:null,paused:!1,started:0,left:0,later:[],sink:null,label:null},p=(k,O=0)=>Math.max(O,2600+k.length*48),v=(k,O)=>{let nt=d.i;d.later.push(setTimeout(()=>{d.on&&d.i===nt&&O()},k))},g=r("#shot"),m=r("#stat"),x=r("#dots"),b=r("#t-mark"),_=s.storyMedia??[],S=k=>globalThis.__STORY__?.[k]??`${globalThis.__ASSETS__||"./"}${k}`,A=()=>g.classList.remove("on"),y=k=>{g.innerHTML=`<img src="${a(S(k.file))}" alt=""><figcaption>${a(k.caption)}</figcaption>`,g.style.setProperty("--hold",`${k.for}s`),g.dataset.where=k.where??"right",g.classList.remove("on"),g.offsetWidth,g.classList.add("on")},T=k=>{m.innerHTML=`<b>${a(k.big)}</b>${k.small?`<span>${a(k.small)}</span>`:""}`,m.classList.remove("on"),m.offsetWidth,m.classList.add("on")},B=(k,O)=>{x.innerHTML=k.map((nt,tt)=>`<i class="d-${Rn[nt]?.tone??"mut"}" style="animation-delay:${Math.round(tt/k.length*O)}ms"></i>`).join(""),x.classList.add("on")},M=()=>{A(),m.classList.remove("on"),x.classList.remove("on"),d.label=null,b.classList.remove("on"),i.cityBar?.present(null),h.classList.remove("tour-hunt"),e&&(e.state.forced=!1)},W=(k,O)=>{d.label=k,b.textContent=O,b.classList.add("on")},J=[0,0],ht=()=>{if(!d.on)return;if(d.label){let nt=i.project(d.label.lon,d.label.lat,J,0);b.style.opacity=nt?"":"0",nt&&(b.style.transform=`translate(${J[0]}px, ${J[1]}px) translate(-50%, -150%)`)}let k=d.sink,O=f.city?.group;if(k&&O){let nt=Math.min(1,(performance.now()-k.from)/k.ms);O.position.z=-k.deep*nt*nt,O.updateMatrixWorld(!0),n.stamp++,nt>=1&&(d.sink=null,f.remove(),O.position.z=0,O.updateMatrixWorld(!0))}},N=()=>{d.sink=null;let k=f.city?.group;k&&k.position.z&&(k.position.z=0,k.updateMatrixWorld(!0))},$=()=>{let k=(L,X,Z,ut=3,ot=0)=>u.flyTo({lon:L*gt,lat:X*gt,range:Z,tilt:ot*gt,heading:0},ut),O=()=>{t.leaveScene(),o.legend=o.place=null,l(null)},nt=i.home,tt=()=>{N(),f.active||(f.place({lat:nt.lat,lon:nt.lon,bearing:nt.bearing}),n.stamp++),f.cutaway?.(!1)},at=(L,X,Z=1.5,ut={})=>{let ot=f.viewOf(L);ot&&u.flyTo({...ot,...X?{range:X}:{},...ut},Z),i.cityBar?.present(L)},ft=(L,X=2.6)=>{let Z=(s.evidence??[]).find(Tt=>Tt.id===L),ut=t.atlantis.places.find(Tt=>Tt.id===(Z?.place??L));if(!ut)return;t.openPlace(ut,!0),t.setMode("all"),l(null);let ot=n.evidence.viewOf(null);ot&&u.flyTo(ot,X)},bt={legend:()=>{O(),e?.setGlow(0),i.setSea(0,!1),tt();let L=f.view();u.jump({...L,range:7600}),u.flyTo({...L,range:6200,heading:L.heading+.5},9)},tale:()=>k(21,37.5,52e5,3.4,8),island:(L,X)=>{k(Eh.lon-6,Eh.lat,24e5,3,16),W(Eh,"The Pillars of Heracles"),v(X*620,()=>{b.classList.remove("on"),d.label=null,tt(),u.flyTo({...f.view(),range:9e3},X*.36+.6)})},city:(L,X)=>{tt();let Z=f.view();u.flyTo({...Z,range:7e3,heading:Z.heading+.25},X*.4),v(X*400,()=>at("temple",230,1.5,{tilt:62*gt})),v(X*400+1700,()=>{f.cutaway?.(!0),n.stamp++}),v(X*700,()=>{f.cutaway?.(!1),at("wall-orichalcum",200,1.5)})},fall:(L,X)=>{i.cityBar?.present(null),tt();let Z=f.view();u.flyTo({...Z,range:8200,tilt:52*gt},1.6),i.sound?.sfx("rise",.3),v(1500,()=>{d.sink={from:performance.now(),ms:Math.max(3e3,X*1e3-2600),deep:46},u.flyTo({...Z,range:15e3,tilt:40*gt,heading:Z.heading+.3},X-1.2)})},date:()=>{N(),f.remove(),e?.setGlow(0),t.seaTo(-50),u.flyTo({lon:3*gt,lat:54*gt,range:32e5,tilt:16*gt,heading:0},3.6)},sank:(L,X)=>{t.seaTo(0),e?.setGlow(1),i.sound?.sfx("rise",.2),v(X*380,()=>k(108,2,62e5,X*.26,6)),v(X*690,()=>k(-172,62,56e5,X*.28,6))},scored:(L,X)=>{let Z=L.best;u.flyTo({lon:Z.lon*gt,lat:Z.lat*gt,range:1e6,tilt:30*gt,heading:0},3.8),e&&(e.state.forced=!0,h.classList.add("tour-hunt")),v(X*500,()=>{e?.scan(Z.lon,Z.lat),i.sound?.sfx("ping",.6)})},search:(L,X)=>{h.classList.remove("tour-hunt"),e&&(e.state.forced=!1),ft("santorini",2.6),v(X*420,()=>ft("richat",2.8)),v(X*830,()=>{O(),k(-18,30,95e5,2.6)})},built:(L,X)=>{O(),e?.setGlow(.5),i.setSea(0,!1),tt(),u.jump({...f.view(),range:5200}),at("harbours",null,1.3),v(X*340,()=>at("bridges",null,1.2)),v(X*670,()=>at("temple",260,1.2))},hall:(L,X)=>{i.cityBar?.present(null),tt();let Z=f.viewOf("shrine");Z&&u.flyTo({...Z,range:150,tilt:64*gt,heading:Z.heading+Math.PI},X*.34),v(X*360,()=>{i.sound?.sfx("reveal",.3),i.enterCity?.("hall",!0,{pan:.34,x:4,y:-4,look:[-12,6]})})},turn:()=>i.enterCity?.("hall",!0)};return zf({worldfit:e?s.worldfit:null,cas:s.cas}).map(L=>({...L,go:X=>bt[L.id]?.(L,X)}))},G=k=>k.split(/(?<=[.!?:]”?)\s+(?=[A-Z“])/).filter(Boolean),j=k=>{let O=d.steps[d.i];k!==void 0&&(d.words=k),c.innerHTML=`<p>${a(d.words??O.say)}</p><div class="bar"><div class="dots">${d.steps.map((ft,bt)=>`<i class="${bt<d.i?"done":bt===d.i?"on":""}"><b></b></i>`).join("")}</div><button class="linkish" data-act="tour-pause">${d.paused?"Play":"Pause"}</button><button class="linkish" data-act="tour-next">${d.i===d.steps.length-1?"Finish":"Next"}</button><button class="linkish" data-act="tour-stop">${d.i===d.steps.length-1?"Close":"Skip"}</button></div>`;let nt=c.querySelector(".dots .on b"),tt=O.total,at=Math.max(0,d.paused?d.left:d.left-(performance.now()-d.started));nt&&!d.paused?(nt.style.transition="none",nt.style.width=`${(1-at/tt)*100}%`,requestAnimationFrame(()=>{nt.style.transition=`width ${at}ms linear`,nt.style.width="100%"})):nt&&(nt.style.width=`${(1-at/tt)*100}%`)},lt=()=>{clearTimeout(d.timer),d.started=performance.now(),d.paused||(d.timer=setTimeout(F,d.left))},Q=k=>{d.i=k;let O=d.steps[k];for(let L of d.later)clearTimeout(L);d.later=[],M();let nt=i.sound?.say(O.say),tt=nt||p(O.say,O.least)/1e3;O.total=d.left=nt?Math.max(nt*1e3+700,1500):p(O.say,O.least),d.started=performance.now(),O.go(tt);for(let L of _.filter(X=>X.line===O.id))v(L.at*1e3,()=>y(L)),v((L.at+L.for)*1e3,A);for(let L of O.show??[])L.dots?B(L.dots,tt*620):(v(L.at*1e3,()=>T(L)),v((L.at+L.for)*1e3,()=>m.classList.remove("on")));let at=G(O.say),ft=at.reduce((L,X)=>L+X.length,0),bt=0;at.forEach((L,X)=>{X&&v(bt/ft*tt*1e3,()=>j(L)),bt+=L.length}),j(at[0]),lt()},F=()=>d.i>=d.steps.length-1?z():Q(d.i+1),I=()=>{if(!(!t||d.on)){i.leaveWalk?.(),d.steps=$(),i.sound?.prime(d.steps.map(k=>k.say));for(let k of _)new Image().src=S(k.file);d.on=!0,d.paused=!1,r("#intro").classList.add("gone"),t.closeBoard(),c.classList.add("open"),h.classList.add("touring"),u.idle=!1,i.sound?.bed(!0),Q(0)}},z=()=>{if(d.on){clearTimeout(d.timer);for(let k of d.later)clearTimeout(k);d.later=[],d.on=!1,c.classList.remove("open"),h.classList.remove("touring"),M(),N(),i.sound?.hush(),i.sound?.bed(!1),t.leaveScene(),o.legend=o.place=null,l(null),e?.setGlow(1),Math.abs(n.globe.shared.uSea.value)>.6&&i.setSea(0,!1),f.cutaway?.(!1),i.walkOn?.()?i.walkPan?.(0):i.enterCity?.("hall")}};return c.addEventListener("click",k=>{let O=k.target.closest("[data-act]")?.dataset.act;O==="tour-stop"?z():O==="tour-next"?F():O==="tour-pause"&&(d.paused?(d.paused=!1,i.sound?.resume(),lt()):(d.paused=!0,clearTimeout(d.timer),i.sound?.pause(),d.left=Math.max(600,d.left-(performance.now()-d.started))),j())}),{start:I,stop:z,next:F,tick:ht,get on(){return d.on},get step(){return d.i},get steps(){return d.steps}}};var Gf=i=>{let{world:t,data:e,$:n,esc:s,stage:r}=i,{control:a}=t,l=t.city,o=n("#citybar"),h=e.reconstruction,u=new Map([...(h?.from_text??[]).map(x=>[x.id,{...x,kind:"text"}]),...(h?.choices??[]).map(x=>[x.id,{...x,kind:"choice"}])]),c={open:!1,walk:-1,parts:[],ghost:!1,cut:!1,part:null},f=(x,b)=>{let _=u.get(x)??b;return _?`<p class="cb-what"><span class="tag ${_.kind==="text"?"t-confirmed":"t-fringe"}">${_.kind==="text"?"From the text":"Our choice"}</span> ${s(_.what??x)}${_.ref?` <small>${s(_.ref)}</small>`:""}</p>${_.quote?`<p class="quote">\u201C${s(_.quote)}\u201D</p>`:_.why?`<p class="cb-why">${s(_.why)}</p>`:""}`:""},d=x=>{c.shown=x&&u.has(x)?x:null,o.classList.toggle("present",!!c.shown),c.shown?(o.innerHTML=f(c.shown),l.highlight?.(null)):c.open||(o.innerHTML=""),t.stamp++},p=()=>{let x=l.active&&!i.tourOn()&&!i.walkOn?.()&&a.range<9e4&&!(a.fly&&a.fly.target.range>9e4);x!==c.open&&(c.open=x,o.classList.toggle("open",x),r.classList.toggle("city-on",x),x?v():(c.walk=-1,c.part=null,c.ghost=c.cut=!1))},v=()=>{if(!c.open)return;let x=_=>typeof l[_]=="function",b=c.walk>=0&&c.parts[c.walk];o.innerHTML=`
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${b?`${c.walk+1} of ${c.parts.length}`:""}</span></div>
      ${b?f(b.id,b):c.part?f(c.part.id,c.part):""}
      <div class="bar">
        ${x("parts")&&x("viewOf")?b?'<button class="btn" data-act="cb-prev">Back</button><button class="btn primary" data-act="cb-next">Next</button><button class="btn" data-act="cb-end">Done</button>':'<button class="btn primary" data-act="cb-foot">Walk</button><button class="btn" data-act="cb-walk">Tour</button>':""}
        ${b?"":`${x("setGhost")?`<button class="btn${c.ghost?" on":""}" data-act="cb-ghost">Text only</button>`:""}${x("cutaway")?`<button class="btn${c.cut?" on":""}" data-act="cb-cut">${c.cut?"Close temple":"Open temple"}</button>`:""}<button class="btn" data-act="cb-notes">List</button><button class="ib" data-act="cb-off" aria-label="Remove the city"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>`}
      </div>`},g=x=>{c.walk=x,c.part=null;let b=c.parts[x];if(b){l.highlight?.(b.id);let _=l.viewOf(b.id);_&&a.flyTo(_,2.4)}else l.highlight?.(null);t.stamp++,v()};return o.addEventListener("click",x=>{let b=x.target.closest("[data-act]")?.dataset.act;if(b==="cb-foot")i.enterCity?.("gate");else if(b==="cb-walk")c.parts=l.parts()??[],c.parts.length&&g(0);else if(b==="cb-next")g(c.walk+1>=c.parts.length?-1:c.walk+1);else if(b==="cb-prev")g(Math.max(0,c.walk-1));else if(b==="cb-end")g(-1),a.flyTo(l.view(),2.4);else if(b==="cb-ghost")c.ghost=!c.ghost,l.setGhost(c.ghost),t.stamp++,v();else if(b==="cb-cut"){c.cut=!c.cut,l.cutaway(c.cut),t.stamp++;let _=c.cut&&l.viewOf?.("temple");_&&a.flyTo({..._,tilt:Math.min(_.tilt??.6,40*gt)},2.2),v()}else b==="cb-notes"?i.drawCity():b==="cb-off"&&(l.highlight?.(null),l.remove(),t.stamp++,p(),i.drawTag())}),{sync:p,draw:v,tap:(x,b)=>{if(!l.active||typeof l.pick!="function"||c.walk>=0)return!1;let _=l.pick(x,b);return c.part=_??null,l.highlight?.(_?.id??null),t.stamp++,v(),!!_},present:d,state:c}};var Vf=1.7,My=5.2,Sy=15,ya=.55,Ty=1,Ey={plateau:"The citadel",slope:"The planted slope",island:"The island",bridge:"A bridge",ramp:"The stair to the citadel",quay:"A quay","ring-inner":"The inner ring","ring-outer":"The outer ring",racecourse:"The racecourse",town:"The town",bank:"The edge of the town"},Wf=i=>{let{world:t,$:e,stage:n}=i,{control:s}=t,r=t.city,a=t.renderer.domElement,l=e("#walk"),o={on:!1,x:0,y:0,z:0,zs:0,dir:0,pitch:0,vel:[0,0],keys:new Set,look:null,stick:null,goal:null,turn:null,pan:0,locked:!1,hot:null,where:"",place:null,bob:0,moved:!1,hotspots:[],used:!1},h=new pe(new qn(.34,.5,28),new qe({color:new se(1.6,1.6,1.6),transparent:!0,opacity:0,depthWrite:!1}));h.renderOrder=5;let u=matchMedia("(pointer: coarse)").matches,c=()=>r.city.plan,f=()=>{let F=c();return[[F.rA-F.T,F.rA+.4],[F.r1a-.4,F.r1a+F.T],[F.r1b-F.T,F.r1b+.4],[F.r2a-.4,F.r2a+F.T],[F.r2b-F.T,F.r2b+.4]]},d=(F,I)=>{let z=c(),k=Math.hypot(F,I),O=r.city.hall,nt=r.city.temple;for(let[tt,at]of f())if(k>tt-ya&&k<at+ya&&!(I<0&&Math.abs(F-z.off)<z.bridgeHalf-9.8))return!0;if(O){for(let tt of O.rings)if(Math.abs(k-tt.r)<tt.t+ya*.5){let at=F*Math.cos(tt.a)+I*Math.sin(tt.a),ft=Math.abs(-F*Math.sin(tt.a)+I*Math.cos(tt.a));if(!(at>0&&ft<tt.gap))return!0}if(k<O.RC+3){for(let tt of O.circles)if(Math.hypot(F-tt.x,I-tt.y)<tt.r+ya*.6)return!0}}if(nt?.room){let tt=F-nt.x,at=I-nt.y,ft=nt.room.l/2,bt=nt.room.w/2,L=(X,Z)=>Math.abs(Math.abs(X)-Z)<1.1+ya*.5;if(Math.abs(tt)<ft+1.6&&Math.abs(at)<bt+1.6&&(L(at,bt)||L(tt,ft)&&!(tt>0&&Math.abs(at)<nt.room.door/2-.8)))return!0}return!1},p=(F,I)=>{let z={};return c().groundZ(F,I,z)==null||z.kind==="water"?null:{z:r.localFloor(F,I),kind:z.kind}},v=(F,I,z=o.z)=>{let k=p(F,I);return!!k&&Math.abs(k.z-z)<=Ty&&!d(F,I)},g=(F,I)=>{let z=Math.hypot(F,I),k=Math.max(1,Math.ceil(z/.35));for(let O=0;O<k;O++){let nt=F/k,tt=I/k,at=!1;for(let[ft,bt]of[[0,1],[.6,.8],[-.6,.8],[1.15,.5],[-1.15,.5]]){let L=Math.cos(ft),X=Math.sin(ft),Z=o.x+(nt*L-tt*X)*bt,ut=o.y+(nt*X+tt*L)*bt;if(v(Z,ut)){o.x=Z,o.y=ut,o.z=p(Z,ut).z,at=!0;break}}if(!at){o.vel=[0,0];break}}},m=(F,I,z=90)=>{for(let k=0;k<=z;k+=1.5)for(let O=0;O<(k?16:1);O++){let nt=O/16*Math.PI*2,tt=F+k*Math.cos(nt),at=I+k*Math.sin(nt),ft=p(tt,at);if(ft&&!d(tt,at))return[tt,at,ft.z]}return null},x=()=>r.toCity(Math.sin(o.dir),Math.cos(o.dir)),b=(F=0)=>{o.zs+=(o.z-o.zs)*(F?1-Math.exp(-F*11):1);let I=Math.hypot(o.vel[0],o.vel[1]);I>.6&&(o.bob+=F*(I>9?13:9.5));let[z,k]=r.toScene(o.x,o.y),[O,nt]=r.toLonLat(z,k);s.walk={lon:O,lat:nt,yaw:o.dir,pitch:o.pitch,eye:Vf,lift:o.zs-o.z+(I>.6?Math.sin(o.bob)*.035:0)}},_=()=>[o.x,o.y,o.zs+Vf],S=()=>{let[F,I]=x(),z=Math.cos(o.pitch),k=[F*z,I*z,Math.sin(o.pitch)],O=_(),nt=null,tt=.9;for(let at of o.hotspots){let ft=[at.x-O[0],at.y-O[1],at.z-O[2]],bt=Math.hypot(ft[0],ft[1],ft[2]);if(bt>at.reach||bt<.3)continue;let L=(ft[0]*k[0]+ft[1]*k[1]+ft[2]*k[2])/bt,X=Math.cos(Math.min(.75,Math.atan2((at.size??1.5)/2,bt)+.1));L>X&&L-X+1>tt&&(nt=at,tt=L-X+1)}return nt},A=e("#w-use"),y=e("#w-where"),T=(F=o.hot)=>{F&&(o.used=!0,o.goal=null,ht(),F.act(F))},B=(F,I)=>{let z=r.site.frame,k=s.ray(F,I),[O,nt]=r.toCity(hn(k,z.east),hn(k,z.north)),tt=[O,nt,hn(k,z.up)],at=_(),ft=null,bt=1/0;for(let Z of o.hotspots){let ut=[Z.x-at[0],Z.y-at[1],Z.z-at[2]],ot=ut[0]*tt[0]+ut[1]*tt[1]+ut[2]*tt[2];ot<.3||ot>Z.reach||Math.hypot(ut[0]-tt[0]*ot,ut[1]-tt[1]*ot,ut[2]-tt[2]*ot)<(Z.size??1.5)*.48&&ot<bt&&(ft=Z,bt=ot)}if(ft)return T(ft);if(tt[2]>-.04)return;let L=Math.min(70,(o.zs-at[2])/tt[2]),X=m(at[0]+tt[0]*L,at[1]+tt[1]*L,6);X&&(o.goal=[X[0],X[1]],h.position.set(X[0],X[1],X[2]+.04),h.material.opacity=.9,h.parent!==r.city.group&&r.city.group.add(h),t.stamp++)},M=F=>{if(!o.on)return;if(!r.active||!r.city)return Q(!1);let I=o.keys,z=document.activeElement?.closest?.("input, textarea, [contenteditable]"),k=0,O=0,nt=0;z||((I.has("KeyW")||I.has("ArrowUp"))&&(k+=1),(I.has("KeyS")||I.has("ArrowDown"))&&(k-=1),I.has("KeyD")&&(O+=1),I.has("KeyA")&&(O-=1),I.has("ArrowRight")&&(nt+=1),I.has("ArrowLeft")&&(nt-=1)),o.stick&&(k-=o.stick.dy,O+=o.stick.dx),o.turn&&(o.dir+=o.turn.dx*F*2.6,o.pitch=$t(o.pitch-o.turn.dy*F*1.7,-1.25,1.35)),o.pan&&(o.dir+=o.pan*F);let tt=Math.hypot(k,O);tt>1&&(k/=tt,O/=tt);let at=!z&&(I.has("ShiftLeft")||I.has("ShiftRight"))||o.stick&&Math.hypot(o.stick.dx,o.stick.dy)>.93,[ft,bt]=x(),L=1-Math.exp(-F*10),X=[ft*k+bt*O,bt*k-ft*O];if(o.goal){let st=o.goal[0]-o.x,Vt=o.goal[1]-o.y,St=Math.hypot(st,Vt);tt>.05||St<.45||(o.stuck??0)>.5?(o.goal=null,o.stuck=0):(X=[st/St,Vt/St],at=St>22,St<2.5&&(X=X.map(Bt=>Bt*Math.max(.35,St/2.5))))}!o.goal&&h.material.opacity>0&&(h.material.opacity=Math.max(0,h.material.opacity-F*3),t.stamp++);let Z=at?Sy:My;o.vel[0]+=(X[0]*Z-o.vel[0])*L,o.vel[1]+=(X[1]*Z-o.vel[1])*L,nt&&(o.dir+=nt*F*1.9);let ut=Math.hypot(o.vel[0],o.vel[1]),ot=`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`,Tt=o.x,Et=o.y;ut>.05&&g(o.vel[0]*F,o.vel[1]*F),o.goal&&(o.stuck=Math.hypot(o.x-Tt,o.y-Et)<ut*F*.2?(o.stuck??0)+F:0),b(F),ut>1.2&&Math.hypot(o.vel[0],o.vel[1])>1.2&&(o.moved=!0,i.sound?.step(at)),ot!==`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`&&t.stamp++;let Ft=r.city.hall,Dt=r.city.temple,ne=Math.hypot(o.x,o.y),Wt=p(o.x,o.y)?.kind,Rt=Ft&&ne<Ft.RI?"The hall":Ft&&ne<Ft.RG?"Inside the wall of gold":Dt&&Math.abs(o.x-Dt.x)<Dt.L/2&&Math.abs(o.y-Dt.y)<Dt.W/2?"Poseidon's temple":Ey[Wt]??"";Rt!==o.where&&(o.where=Rt,y.textContent=Rt,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"));let Ct=Rt==="The hall"?"hall":"city";Ct!==o.place&&(o.place=Ct,i.sound?.air(Ct),i.onWalkPlace?.(Ct)),l.classList.toggle("in-hall",Ct==="hall");let Ut=S();Ut!==o.hot&&(o.hot=Ut,A.hidden=!Ut,Ut&&(A.innerHTML=`<span>${i.esc(Ut.label)}</span>`))},W=(F,I,z)=>{o.dir+=F*z,o.pitch=$t(o.pitch-I*z,-1.25,1.35)},J=()=>{if(!(o.locked||!a.requestPointerLock))try{a.requestPointerLock()?.catch?.(()=>{})}catch{}},ht=()=>{document.pointerLockElement===a&&document.exitPointerLock?.()};document.addEventListener("pointerlockchange",()=>{o.locked=document.pointerLockElement===a,l.classList.toggle("locked",o.locked),o.locked||o.keys.clear()}),document.addEventListener("mousemove",F=>{o.on&&o.locked&&W(F.movementX,F.movementY,.0022)}),addEventListener("keydown",F=>{!o.on||F.target.closest?.("input, textarea, [contenteditable]")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"].includes(F.code)&&(o.keys.add(F.code),F.preventDefault()),(F.code==="KeyE"||F.code==="Enter")&&!F.repeat&&(T(),F.preventDefault()))}),addEventListener("keyup",F=>o.keys.delete(F.code)),addEventListener("blur",()=>o.keys.clear());let N=new Map,$={move:e("#w-stick"),look:e("#w-look")},G=()=>{let F=a.getBoundingClientRect();return[F.width/2,F.height/2]};a.addEventListener("pointerdown",F=>{if(!o.on)return;let I=a.getBoundingClientRect(),z=F.clientX-I.left,k=F.clientY-I.top;if(F.pointerType==="mouse"){if(o.locked){B(...G());return}N.set(F.pointerId,{kind:"look",x:z,y:k,x0:z,y0:k,t:performance.now(),mouse:!0})}else{l.classList.contains("touch")||l.classList.add("touch");let O=tt=>{let at=tt.getBoundingClientRect();return Math.hypot(F.clientX-(at.left+at.width/2),F.clientY-(at.top+at.height/2))<at.width*.85},nt=!o.stick&&O($.move)?"move":!o.turn&&O($.look)?"turn":"look";N.set(F.pointerId,{kind:nt,x:z,y:k,x0:z,y0:k,t:performance.now()}),nt==="move"&&(o.stick={dx:0,dy:0},o.goal=null,$.move.classList.add("on")),nt==="turn"&&(o.turn={dx:0,dy:0},$.look.classList.add("on"))}a.setPointerCapture?.(F.pointerId)}),a.addEventListener("pointermove",F=>{let I=N.get(F.pointerId);if(!o.on||!I)return;let z=a.getBoundingClientRect(),k=F.clientX-z.left,O=F.clientY-z.top;if(I.kind==="move"||I.kind==="turn"){let nt=(k-I.x0)/52,tt=(O-I.y0)/52,at=Math.hypot(nt,tt),ft=at>1?1/at:1,bt={dx:nt*ft,dy:tt*ft};I.kind==="move"?o.stick=bt:o.turn=bt,$[I.kind==="move"?"move":"look"].firstElementChild.style.transform=`translate(${bt.dx*28}px, ${bt.dy*28}px)`}else W(k-I.x,O-I.y,I.mouse?.004:.0055);I.x=k,I.y=O});let j=F=>{let I=N.get(F.pointerId);if(I){if(N.delete(F.pointerId),I.kind==="move"){o.stick=null,$.move.classList.remove("on"),$.move.firstElementChild.style.transform="";return}if(I.kind==="turn"){o.turn=null,$.look.classList.remove("on"),$.look.firstElementChild.style.transform="";return}!o.on||!(Math.hypot(I.x-I.x0,I.y-I.y0)<7&&performance.now()-I.t<400)||(I.mouse&&a.requestPointerLock?(J(),setTimeout(()=>{o.on&&!o.locked&&B(I.x,I.y)},180)):B(I.x,I.y))}};a.addEventListener("pointerup",j),a.addEventListener("pointercancel",j),A.addEventListener("click",()=>T());let lt=({x:F=0,y:I=-60,dir:z=null,look:k=null,pan:O=0,grab:nt=!0}={})=>{if(!r.active||!r.city)return!1;let tt=m(F,I);if(!tt)return!1;if([o.x,o.y,o.z]=tt,o.zs=o.z,k){let[at,ft]=r.toScene(k[0]-o.x,k[1]-o.y);o.dir=Math.atan2(at,ft)}else o.dir=z??s.heading;return o.pitch=0,o.vel=[0,0],o.keys.clear(),o.goal=null,o.turn=null,o.pan=O,o.hot=null,o.where="",o.place=null,A.hidden=!0,s.pointers.clear(),s.fly=null,o.on||(o.on=!0,l.hidden=!1,n.classList.add("walking"),i.onWalk?.(!0)),nt&&!u&&navigator.userActivation?.isActive&&J(),b(),t.stamp++,!0},Q=(F=!0)=>{if(!o.on)return;o.on=!1,o.goal=null,o.pan=0,ht(),h.removeFromParent(),l.hidden=!0,l.classList.remove("went"),n.classList.remove("walking");let I=s.walk;s.walk=null,i.sound?.air(null),I&&(s.jump({lon:I.lon,lat:I.lat,range:40,tilt:1.2,heading:o.dir}),F&&s.flyTo({lon:I.lon,lat:I.lat,range:420,tilt:1.05,heading:o.dir},2.2)),t.stamp++,i.onWalk?.(!1)};return t.beforeFrame=M,{enter:lt,leave:Q,use:T,lock:J,unlock:ht,footing:m,canStand:v,state:o,hotspots:o.hotspots,eye:_,forward:x,get on(){return o.on}}};var Vl="#eef2f6",Ui="#9aa7b4",_a="#e9bd62",Ay="#0b1016",Ah="#243040",Ds={good:"#5fd0a0",bad:"#f0766a",warn:"#e9bd62",info:"#6fb6f0",mut:"#7c8794"},yr=["#16324a","#1f6f78","#2b9a8f","#58c08a","#e9bd62","#fff3c4"],Ry=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Cy=-Math.PI/2+30*Math.PI/180,Py=(i,t)=>i.length>t?`${i.slice(0,t-1).replace(/[ ,;:]+\S*$/,"")}\u2026`:i,$f=(i,{A:t,H:e,walk:n})=>{let{world:s,data:r,$:a,esc:l,link:o,setSheet:h,body:u,eyebrow:c,toast:f}=i,d=s.city,p=r.worldfit,v=r.cas,g=r.evidence??[],m=r.open,x={group:null,on:null,boards:[],globe:null,spin:null,painted:!1},b=s.phone?768:1152,_=Math.round(b/1.8),S=b/1152,A=(L,X=500)=>`${X} ${Math.round(L*S)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,y=(L,X,Z)=>{let ut=[],ot="";for(let Tt of String(X).split(/\s+/)){let Et=ot?`${ot} ${Tt}`:Tt;L.measureText(Et).width>Z&&ot?(ut.push(ot),ot=Tt):ot=Et}return ot&&ut.push(ot),ut},T=(L,X,Z,ut,ot,Tt,{colour:Et=Vl,weight:Ft=500,rows:Dt=9,gap:ne=1.32}={})=>{L.font=A(Tt,Ft),L.fillStyle=Et,L.textBaseline="top";let Wt=y(L,X,ot*S);return Wt.slice(0,Dt).forEach((Rt,Ct)=>L.fillText(Ct===Dt-1&&Wt.length>Dt?`${Rt.replace(/[ ,;:]+\S*$/,"")}\u2026`:Rt,Z*S,(ut+Ct*Tt*ne)*S)),ut+Math.min(Dt,Wt.length)*Tt*ne},B=(L,X,Z)=>(L.fillStyle=Ay,L.fillRect(0,0,b,_),L.fillStyle=_a,L.fillRect(0,0,b,5*S),L.font=A(21,700),L.fillStyle=_a,L.textBaseline="top",L.fillText(X.toUpperCase().split("").join("\u200A"),56*S,44*S),T(L,Z,56,78,1040,54,{weight:700,rows:2,gap:1.12})+22),M=(L,X)=>{L.font=A(20,500),L.fillStyle=Ui,L.textBaseline="alphabetic",L.fillText(X,56*S,_-30*S),L.fillStyle=Ah,L.fillRect(56*S,_-66*S,b-112*S,1.5*S)},W=(L,X,Z,ut,ot)=>{L.fillStyle=ot,L.beginPath(),L.arc(X*S,Z*S,ut*S,0,7),L.fill()},J=(L,X,Z,ut,ot=22)=>ut.forEach((Tt,Et)=>{L.fillStyle=Tt?yr[4]:"#2a3442",L.fillRect((X+Et*(ot+5))*S,Z*S,ot*S,ot*S)}),ht=L=>p?.places.find(X=>X.id===L),N=(v?.searches??[]).filter(L=>L.status==="unresolved"||L.status==="never-tested"),$=new Set((e?.CLUES??[]).map(L=>L.claim)),G=(v?.claims??[]).filter(L=>!$.has(L.id)),j=g.flatMap(L=>(L.not_located??[]).map(X=>({site:L.name,what:typeof X=="string"?X:X.what??X.name??X.id??""}))).filter(L=>L.what),lt=(p?.best??[]).filter(L=>!L.near_old_ice),Q=m?.work?.filter(L=>(L.status??"open")!=="done")??[],F=[];for(let L=0;L<g.length;L+=2)F.push(g.slice(L,L+2));let I=[];for(I.push({id:"welcome",label:"The hall",draw:L=>{let X=B(L,"The hall","The one closed place in the story, opened");X=T(L,"Plato wrote that the shrine at the centre was holy ground with a wall of gold round it. He says nothing of what was inside. So this is where the search is kept.",56,X,1040,30,{colour:Ui,rows:3})+26;for(let[Z,ut]of[["1","Follow the wall to your left: his words, then what the Earth says, then every place people named."],["2","Past the far side: what is still unknown, and work you can pick up, with or without an AI."],["3","The globe in the middle opens the whole Earth. Hunt for it yourself."]])W(L,74,X+20,19,"#1b2532"),L.font=A(22,700),L.fillStyle=_a,L.textBaseline="middle",L.textAlign="center",L.fillText(Z,74*S,(X+21)*S),L.textAlign="left",X=T(L,ut,112,X,980,29,{rows:2})+16;M(L,"Signed in, you can talk here: text for the room, voice for whoever stands near you.")},sheet:()=>`<h2>The hall</h2><div class="hl-index">${[["text","His words"],["earth","Earth scores"],["best","Top scores"],["claims-1","Places named"],["searches","Searches"],["unknown","Unknown"],["work","Help build"]].map(([L,X])=>`<button class="btn" data-act="hl-open" data-id="${L}">${X}</button>`).join("")}</div><div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),I.push({id:"text",label:"His words",draw:L=>{let X=B(L,"His words",`${v?.claims.length??""} things Plato says that can be checked`),Z=(e?.CLUES??[]).map(ut=>v?.claims.find(ot=>ot.id===ut.claim)).filter(Boolean);for(let ut of Z.slice(0,5))W(L,66,X+17,8,yr[4]),L.font=A(21,600),L.fillStyle=Ui,L.textBaseline="top",L.textAlign="right",L.fillText(ut.ref.split(";")[0],(b/S-56)*S,(X+5)*S),L.textAlign="left",X=T(L,ut.label,92,X,760,27,{rows:2})+12;M(L,`The ${Z.length} with a gold dot are scored on the globe. The other ${G.length} are waiting for someone.`)},sheet:()=>`<h2>What Plato wrote</h2>${(v?.claims??[]).map(L=>`<div class="known"><span>${$.has(L.id)?'<i class="cdot on"></i>':'<i class="cdot"></i>'}${l(L.label)}</span><small>${l(L.ref??"")}</small></div>`).join("")}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>`}),I.push({id:"earth",label:"Earth scores",draw:L=>{let X=B(L,"The Earth","Nothing on Earth scores 5 of 5"),Z=p?.totals.by_score??[],ut=Math.max(1,...Z.map(ot=>ot.km2));X=T(L,`${((p?.totals.land_that_sank_km2??0)/1e6).toFixed(1)} million km\xB2 of land have gone under the sea since Plato's date. Every 10 km of it was scored against his words.`,56,X,1040,29,{colour:Ui,rows:2})+28;for(let ot of Z)L.font=A(26,700),L.fillStyle=Vl,L.textBaseline="middle",L.fillText(`${ot.score} of 5`,56*S,(X+17)*S),L.fillStyle="#16202c",L.fillRect(190*S,X*S,640*S,34*S),L.fillStyle=yr[ot.score],L.fillRect(190*S,X*S,Math.max(ot.km2?3:0,640*ot.km2/ut)*S,34*S),L.font=A(23,500),L.fillStyle=ot.km2?Ui:Ds.bad,L.fillText(ot.km2?`${Math.round(ot.km2).toLocaleString("en")} km\xB2`:"none",850*S,(X+17)*S),X+=48;M(L,"A score is a match in the landscape. It is not evidence of a city.")},sheet:()=>{let L=[...p?.totals.by_score??[]].sort((ut,ot)=>ot.score-ut.score),X=Math.max(1,...L.map(ut=>ut.km2)),Z=ut=>ut>=1e6?`${(ut/1e6).toFixed(1)} M km\xB2`:ut>=1e3?`${Math.round(ut/1e3)} K km\xB2`:ut?`${Math.round(ut)} km\xB2`:"None";return`<h2>Earth scores</h2>${L.map(ut=>`<div class="hbar"><span class="pips" aria-label="${ut.score} of 5">${[0,1,2,3,4].map(ot=>`<i class="${ot<ut.score?"on":""}"></i>`).join("")}</span><span class="track"><b style="width:${ut.km2/X*100}%;background:${yr[ut.score]}"></b></span><small>${Z(ut.km2)}</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),I.push({id:"best",label:"Top scores",draw:L=>{let X=B(L,"The leaderboard","The closest matches so far");lt.slice(0,6).forEach((Z,ut)=>{L.font=A(26,700),L.fillStyle=Ui,L.textBaseline="top",L.fillText(String(ut+1),56*S,(X+2)*S),L.font=A(28,600),L.fillStyle=Vl,L.fillText(Py(Z.near?.name??`${Z.lat.toFixed(1)}, ${Z.lon.toFixed(1)}`,40),104*S,X*S),J(L,800,X+4,(e?.CLUES??[]).map(ot=>Z.clues.includes(ot.key))),L.font=A(26,700),L.fillStyle=yr[Z.top],L.textAlign="right",L.fillText(`${Z.top}/5`,(b/S-56)*S,(X+2)*S),L.textAlign="left",X+=50}),M(L,"Find a better spot on the globe and claim it.")},sheet:()=>`<h2>Top scores</h2>${lt.filter(X=>X.near?.name&&!/^off /.test(X.near.name)).slice(0,5).map(X=>`<div class="hbar"><span class="pips" aria-label="${X.top} of 5">${[0,1,2,3,4].map(Z=>`<i class="${Z<X.top?"on":""}"></i>`).join("")}</span><span>${l(X.near.name)}</span><small>${Math.round(X.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),F.forEach((L,X)=>I.push({id:`claims-${X+1}`,label:L.map(Z=>Z.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join(" \xB7 "),draw:Z=>{B(Z,`Places people named \xB7 ${X+1} of ${F.length}`,L.map(ut=>ut.name.split(",")[0]).join("  \xB7  ")),L.forEach((ut,ot)=>{let Tt=56+ot*532,Et=ht(ut.place??ut.id),Ft=196;Z.font=A(20,700),Z.fillStyle=Ds.warn,Z.textBaseline="top",Z.fillText("CLAIMED",Tt*S,Ft*S),Ft=T(Z,ut.claimed?.line??"",Tt,Ft+28,480,24,{rows:4})+18,Z.font=A(20,700),Z.fillStyle=Ds.good,Z.fillText("FOUND",Tt*S,Ft*S),Ft=T(Z,ut.found?.line??"",Tt,Ft+28,480,24,{rows:5})+14,Et&&(Z.font=A(22,600),Z.fillStyle=Ui,Z.fillText(`By the hunt's rules: ${Et.score} of 5`,Tt*S,(_/S-112)*S))}),Z.fillStyle=Ah,Z.fillRect(b/2-1,196*S,1.5*S,_-290*S),M(Z,"Each has a scene on the globe: what was claimed and what was found, drawn on the ground.")},sheet:()=>L.map(Z=>`<h2>${l(Z.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${l(Z.claimed?.line??"")}</p><p><span class="tag">Evidence</span> ${l(Z.found?.line??"")}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${l(Z.place??Z.id)}">See it on the globe</button></div>`).join("")})),I.push({id:"searches",label:"Searches",draw:L=>{let X=v?.searches??[],Z=B(L,"The searches",`${X.length} searches, ${Math.min(...X.map(Dt=>Dt.year))} to ${Math.max(...X.map(Dt=>Dt.year))}`),ut=Dt=>Dt<1950?70+(Dt-1650)/300*250:320+(Dt-1950)/80*770,ot=Z+150;L.fillStyle=Ah,L.fillRect(56*S,ot*S,(b/S-112)*S,2*S),L.font=A(19,500),L.fillStyle=Ui,L.textBaseline="top",L.textAlign="center";for(let Dt of[1700,1800,1900,1950,1975,2e3,2025])L.fillRect(ut(Dt)*S,(ot-6)*S,1.5*S,14*S),L.fillText(String(Dt),ut(Dt)*S,(ot+16)*S);L.textAlign="left";let Tt=new Map;for(let Dt of X){let ne=Math.round(ut(Dt.year)/15),Wt=Tt.get(ne)??0;Tt.set(ne,Wt+1),W(L,ne*15,ot-20-Wt*24,9,Ds[Rn[Dt.status]?.tone??"mut"])}let Et=56,Ft=ot+78;for(let[Dt,ne]of Object.entries(Rn)){let Wt=X.filter(Ct=>Ct.status===Dt).length;if(!Wt)continue;W(L,Et+9,Ft+14,9,Ds[ne.tone]),L.font=A(22,500),L.fillStyle=Vl,L.textBaseline="top";let Rt=`${Wt} ${ne.short.toLowerCase()}`;L.fillText(Rt,(Et+26)*S,Ft*S),Et+=44+L.measureText(Rt).width/S}M(L,"Not one has found the city.")},sheet:()=>`<h2>Searches</h2>${[...v?.searches??[]].sort((L,X)=>L.year-X.year).map(L=>`<div class="known"><span><span class="yr">${L.year}</span>${l(L.title)}</span><small style="color:${Ds[Rn[L.status]?.tone??"mut"]}">${l(Rn[L.status]?.short??L.status)}</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>`}),I.push({id:"unknown",label:"Unknown",draw:L=>{let X=B(L,"Still unknown",`${N.length} searches with no answer yet`);for(let Z of N.slice(0,6))W(L,66,X+15,8,Ds[Rn[Z.status]?.tone??"mut"]),L.font=A(20,600),L.fillStyle=Ui,L.textBaseline="top",L.textAlign="right",L.fillText(String(Z.year),(b/S-56)*S,(X+3)*S),L.textAlign="left",X=T(L,Z.title,92,X,880,25,{rows:1})+11;M(L,`Also open: ${G.length} of Plato's claims not scored, and ${j.length} things claimed at a place with no published position.`)},sheet:()=>`<h2>Unknown</h2><h3>Searches</h3>${N.map(L=>`<div class="known"><span>${l(L.title)}${L.source?` ${o(typeof L.source=="string"?L.source:L.source.url??"","source")}`:""}</span><small>${l(String(L.date??L.year))} \xB7 ${l(Rn[L.status]?.short??"")}</small></div>`).join("")}<h3>Not scored yet</h3>${G.map(L=>`<div class="known"><span>${l(L.label)}</span><small>${l(L.ref??"")}</small></div>`).join("")}${j.length?`<h3>No published position</h3>${j.map(L=>`<div class="known"><span>${l(L.what)}</span><small>${l(L.site.split(",")[0])}</small></div>`).join("")}`:""}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>`}),I.push({id:"work",label:"Help build",draw:L=>{let X=B(L,"Open work",`${Q.length} things to pick up`);[Q.slice(0,Math.ceil(Math.min(Q.length,10)/2)),Q.slice(Math.ceil(Math.min(Q.length,10)/2),10)].forEach((ut,ot)=>{let Tt=X;for(let Et of ut)L.font=A(18,700),L.fillStyle=_a,L.textBaseline="top",L.fillText(Et.area.toUpperCase(),(56+ot*532)*S,Tt*S),Tt=T(L,Et.title,56+ot*532,Tt+24,480,25,{rows:1})+13}),M(L,"Each comes with a prompt to hand to your AI. Press to see them all.")},sheet:()=>nt()}),I.push({id:"help",label:"Help build",draw:L=>{let X=B(L,"Bring your AI","Anyone can add to this");(m?.how??[]).slice(0,5).forEach((Z,ut)=>{W(L,74,X+18,17,"#1b2532"),L.font=A(20,700),L.fillStyle=_a,L.textBaseline="middle",L.textAlign="center",L.fillText(String(ut+1),74*S,(X+19)*S),L.textAlign="left",X=T(L,Z,110,X+2,990,24,{rows:2})+13}),M(L,"Better graphics, more research, new data, sound, things to do: all of it is open.")},sheet:()=>nt()});I.length<12;)I.push(null);let z=()=>i.host?.community??m?.community??"atlantis",k=()=>(m?.repository??"").replace(/\/[^/]+$/,`/${z()}`),O=L=>`Help with a/${z()} on Abstracts (https://abstracts.co/a/${z()}). Its repository is ${k()}.

${L?`The task: ${L.title} (${L.id}, ${L.area}).
${L.why}
Done when: ${L.done_when}`:"Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want."}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${L?` This task starts in: ${L.start.join(", ")}.`:""}
2. Offer to say on the community's Wall that I am taking ${L?L.id:"the task"}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${L?L.check.map(X=>`\`${X}\``).join(" and "):"the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${k()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${L?L.id:"the task"} in it.`,nt=()=>`<h2>Help build</h2>${Object.entries(m?.areas??{}).map(([L,X])=>{let Z=Q.filter(ut=>ut.area===L);return Z.length?`<h3>${l(L[0].toUpperCase()+L.slice(1))}</h3>${Z.map(ut=>`<details class="hl-task"><summary><b>${l(ut.title)}</b><small>${l(ut.size)}</small></summary><p>${l(ut.why)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${l(ut.id)}">Copy the prompt for my AI</button></div></details>`).join("")}`:""}).join("")}`,tt=L=>{let X=I.find(Z=>Z?.id===L);X&&(h("hall"),c.textContent="The hall",u.innerHTML=X.sheet())};u.addEventListener("click",L=>{let X=L.target.closest('[data-act^="hl-"]');if(!X)return;let Z=X.dataset.act;if(Z==="hl-work")tt("work");else if(Z==="hl-open")tt(X.dataset.id);else if(Z==="hl-globe")i.openGlobe?.();else if(Z==="hl-board")i.openGlobe?.(!1),t?.openBoard();else if(Z==="hl-place"){let ut=t?.atlantis.places.find(ot=>ot.id===X.dataset.id);i.openGlobe?.(!1),ut&&t.openPlace(ut,!0)}else if(Z==="hl-prompt"){let ut=O(Q.find(ot=>ot.id===X.dataset.id)??null);(navigator.clipboard?.writeText(ut)??Promise.reject()).then(()=>f("Copied. Paste it to your AI."),()=>{u.insertAdjacentHTML("beforeend",`<pre class="c-share">${l(ut)}</pre>`),f("Select the text and copy it")})}});let at=()=>{let Z=document.createElement("canvas");Z.width=720,Z.height=360;let ut=Z.getContext("2d"),ot=ut.createImageData(720,360),Tt=ot.data,Et=e?.state,Ft=Et?.n,Dt=Ct=>[parseInt(Ct.slice(1,3),16),parseInt(Ct.slice(3,5),16),parseInt(Ct.slice(5,7),16)],ne=Dt("#0c2a44"),Wt=Dt("#3b4a3f"),Rt=yr.map(Dt);for(let Ct=0;Ct<360;Ct++){let Ut=Math.max(-85,Math.min(85,90-(Ct+.5)/360*180))*Math.PI/180,st=Ft?Math.max(0,Math.min(Ft-1,Math.floor((1-Math.log(Math.tan(Ut)+1/Math.cos(Ut))/Math.PI)/2*Ft))):0;for(let Vt=0;Vt<720;Vt++){let St=ne;if(Ft){let vt=st*Ft+Math.floor(Vt/720*Ft),Lt=Et.state[vt];St=Lt===1?Wt:Lt===2?Rt[Math.max(1,Ry(Et.bits[vt]))]:ne}let Bt=(Ct*720+Vt)*4;Tt[Bt]=St[0],Tt[Bt+1]=St[1],Tt[Bt+2]=St[2],Tt[Bt+3]=255}}return ut.putImageData(ot,0,0),Z},ft=()=>{let L=d.city.hall,X=new $e;X.name="hall",x.boards=[],L.panels.forEach((Et,Ft)=>{let Dt=I[Ft];if(!Dt)return;let ne=document.createElement("canvas");ne.width=b,ne.height=_;let Wt=ne.getContext("2d");Wt.textAlign="left",Dt.draw(Wt);let Rt=new Li(ne);Rt.colorSpace=Ie,Rt.anisotropy=4;let Ct=new pe(new Un(Et.w,Et.h),new qe({map:Rt})),Ut=new dt(-Math.cos(Et.a),-Math.sin(Et.a),0),st=new dt(0,0,1),Vt=new dt().crossVectors(st,Ut);Ct.quaternion.setFromRotationMatrix(new xe().makeBasis(Vt,st,Ut)),Ct.position.set(Et.x,Et.y,Et.z);let St=new pe(new Un(Et.w+.16,Et.h+.16),new qe({color:new se(.55,.4,.14)}));St.quaternion.copy(Ct.quaternion),St.position.set(Et.x-Ut.x*.03,Et.y-Ut.y*.03,Et.z),X.add(St,Ct),x.boards.push({...Dt,mesh:Ct,canvas:ne,tex:Rt,at:Et})});let Z=new Li(at());Z.colorSpace=Ie;let ut=new pe(new kn(L.globe.r,48,32),new qe({map:Z}));ut.rotation.x=Math.PI/2;let ot=new $e,Tt=new $e;return ot.add(ut),Tt.add(ot),Tt.rotation.y=.41,Tt.position.set(L.globe.x,L.globe.y,L.globe.z),X.add(Tt),x.globe={ball:ut,tex:Z,painted:!!e?.state.ready},x.spin=ot,X};return{sync:()=>{let L=d.city?.group??null;if(L!==x.on&&(x.on=L,L&&d.city.hall)){x.group=ft(),L.add(x.group);let X=d.city.hall;n.hotspots.length=0;for(let Z of x.boards)n.hotspots.push({id:Z.id,x:Z.at.x,y:Z.at.y,z:Z.at.z,reach:15,size:Z.at.w,label:Z.label,act:()=>tt(Z.id)});n.hotspots.push({id:"globe",x:X.globe.x,y:X.globe.y,z:X.globe.z,reach:13,size:X.globe.r*2.4,label:"Open the globe",act:()=>i.openGlobe?.()})}!x.group||!d.active||(x.globe&&!x.globe.painted&&e?.state.ready&&(x.globe.tex.image=at(),x.globe.tex.needsUpdate=!0,x.globe.painted=!0,s.stamp++),n.on&&Math.hypot(n.state.x,n.state.y)<d.city.hall.RG&&(x.spin.rotation.z=Cy+(s.time-(x.since??=s.time))*.05,s.stamp++))},show:tt,boards:I,promptFor:O,state:x,counts:{work:Q.length,openSearches:N.length,unscored:G.length,lost:j.length}}};var Wl=["HALL22","HALL23","HALL24","HALL25","HALL26","HALL27","HALL28","HALL29"],Iy=30,qf=38,Ly=8,Dy=900,Rh=280,Ny=i=>{let t=0;for(let e of String(i))t=(t*31+e.charCodeAt(0))%360;return t},Xf=(i,{walk:t})=>{let{world:e,$:n,esc:s,toast:r,st:a}=i,l=e.city,o=n("#meet"),h=n("#people"),u=new URLSearchParams(location.search).get("room"),c={state:"off",drawn:null,me:null,members:new Map,socket:null,room:0,seats:8,ice:[],batch:!1,lastPos:"",sentAt:0,saidAt:0,lines:[],muted:new Set,voice:{on:!1,stream:null,mic:!0,peers:new Map},group:null,on:null,tries:0},f=F=>{c.socket?.readyState===1&&c.socket.send(JSON.stringify(F))},d='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>',p=()=>{if(c.drawn!==c.state&&(c.drawn=c.state,o.dataset.state=c.state,o.innerHTML=c.state==="on"?`<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${Rh}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${d}</button><span class="mt-n" id="mt-n"></span></form>`:c.state==="signed-out"?'<button class="btn glass" data-act="mt-signin">Sign in to meet people</button>':c.state==="ask"?'<button class="btn glass" data-act="mt-join">Meet people</button>':c.state==="elsewhere"?`<a class="btn glass" href="https://abstracts.co/a/${s(i.data.open?.community??"atlantis")}?a_hall=1" target="_blank" rel="noopener">Meet people on abstracts.co</a>`:c.state==="joining"?'<span class="mt-state">Joining\u2026</span>':c.state==="full"?'<span class="mt-state">Rooms are full</span>':""),c.state==="on"){let F=n("#mt-log"),I=n("#mt-mic"),z=n("#mt-n");F.innerHTML=c.lines.slice(-6).map(k=>`<p${k.mine?' class="mine"':""}><b>${s(k.name)}</b> ${s(k.text)}</p>`).join(""),F.scrollTop=F.scrollHeight,I.className=`mt-mic${c.voice.on?c.voice.mic?" on":" muted":""}`,I.setAttribute("aria-label",c.voice.on?c.voice.mic?"Mute my microphone":"Unmute my microphone":"Talk with people near me"),I.setAttribute("aria-pressed",String(c.voice.on&&c.voice.mic)),z.textContent=`${c.members.size+1} here`}o.hidden=!o.innerHTML||!t.on},v=(F,I,z=!1)=>{c.lines.push({name:F,text:I,mine:z}),c.lines.length>40&&c.lines.shift(),p()},g=F=>{let I=new $e,z=new se().setHSL(Ny(F)/360,.55,.62),k=z.clone().multiplyScalar(.55),O=new pe(new Hr(.27,.86,4,10),new qe({color:z}));O.rotation.x=Math.PI/2,O.position.z=.72;let nt=new pe(new kn(.21,12,10),new qe({color:z.clone().multiplyScalar(1.15)}));nt.position.z=1.52;let tt=new pe(new Vr(.09,.26,8),new qe({color:k}));tt.position.set(0,.24,1.5);let at=new pe(new qn(.42,.5,24),new qe({color:new se(1.4,1.1,.4),transparent:!0,opacity:0}));return at.position.z=.03,I.add(O,nt,tt,at),I.userData.ring=at,I},m=F=>{let I=document.createElement("div");return I.className="person",I.innerHTML=`<i></i><span>${s(F.name)}</span>`,h.append(I),I},x=F=>{if(!F?.id||F.id===c.me?.id||c.members.has(F.id))return c.members.get(F?.id);let I={id:F.id,name:F.name||F.username||"Someone",username:F.username,x:0,y:0,dir:0,tx:null,ty:0,tdir:0,voice:!1,talking:0,seen:0,fig:g(F.id),tag:null};return I.fig.visible=!1,I.tag=m(I),c.group?.add(I.fig),c.members.set(F.id,I),I},b=F=>{let I=c.members.get(F);I&&(I.fig.removeFromParent(),I.tag.remove(),W(F),c.members.delete(F),p(),e.stamp++)},_=(F,I)=>{let z=c.members.get(F);!z||!Array.isArray(I)||!I.slice(0,3).every(Number.isFinite)||([z.tx,z.ty,z.tdir]=I,z.voice=!!(I[3]&1),z.seen=performance.now(),z.fig.visible===!1&&(z.x=z.tx,z.y=z.ty,z.dir=z.tdir,z.fig.visible=!0))},S=async()=>u?{url:u.replace(/[A-Z2-9]{6}$/,Wl[c.room]),token:`dev.${encodeURIComponent(new URLSearchParams(location.search).get("as")??"Guest")}`,ice:[],room:Wl[c.room]}:bi("roomToken",{room:Wl[c.room]}),A=async(F=!1)=>{if(!(c.state==="on"||c.state==="joining")){c.state="joining",p();try{!u&&F&&await bi("viewer");let I=await S();c.ice=I.ice??[],c.seats=I.seats??8;let z=c.socket=new WebSocket(`${I.url}?token=${encodeURIComponent(I.token)}`);z.onmessage=k=>{let O;try{O=JSON.parse(k.data)}catch{return}y(O)},z.onclose=k=>{if(c.socket===z){c.socket=null;for(let O of[...c.members.keys()])b(O);if(k.code===4003&&c.room<Wl.length-1)return c.room++,c.state="off",A();if(k.code===4003)return c.state="full",p();if(k.code===4001)return c.state="ask",r("You joined from somewhere else"),p();c.state="off",t.on&&c.tries++<5?setTimeout(()=>{t.on&&c.state==="off"&&A()},1500*c.tries):(c.state="ask",p())}}}catch(I){c.state=I?.code==="signed_out"?"signed-out":I?.code==="unsupported"?"off":"ask",F&&I?.code&&!["denied","cancelled","signed_out"].includes(I.code)&&r("The room is not answering"),p()}}},y=F=>{if(F.t==="welcome"){c.me=F.you,c.state="on",c.tries=0,c.batch=F.seats!==void 0,F.seats&&(c.seats=F.seats);for(let I of F.members??[])x(I);for(let[I,z]of Object.entries(F.pos??{}))_(I,z);c.lastPos="",p()}else if(F.t==="join"){let I=x(F.member);I&&v(I.name,"came in"),c.lastPos=""}else if(F.t==="leave"){let I=c.members.get(F.id);I&&v(I.name,"left"),b(F.id)}else if(F.t==="pos")for(let[I,z]of Object.entries(F.from??{}))_(I,z);else if(F.t==="msg"){let I=F.data,z=c.members.get(F.from);if(!z||!I||typeof I!="object")return;Array.isArray(I.p)?_(F.from,I.p):typeof I.c=="string"&&!c.muted.has(F.from)?(v(z.name,I.c.slice(0,Rh)),i.sound?.sfx("tick",.12)):I.rtc&&ht(F.from,I.rtc)}else F.t==="error"&&F.code==="invalid"&&c.batch&&(c.batch=!1)},T=()=>{let F=c.socket;c.socket=null,F?.close(1e3);for(let I of[...c.members.keys()])b(I);$(),(c.state==="on"||c.state==="joining")&&(c.state="ask"),p()},B=F=>{let I=F.trim().slice(0,Rh),z=performance.now();return!I||c.state!=="on"?!1:z-c.saidAt<Dy?(r("A moment between lines"),!1):(c.saidAt=z,f({t:"send",data:{c:I}}),v(c.me?.name??"You",I,!0),!0)},M=c.voice,W=F=>{let I=M.peers.get(F);if(I){M.peers.delete(F);try{I.pc.close()}catch{}I.out?.disconnect(),I.el?.remove()}},J=F=>{if(M.peers.has(F))return M.peers.get(F);let I=new RTCPeerConnection({iceServers:c.ice}),z={pc:I,id:F,out:null,gain:null,pan:null,level:null,el:null,polite:String(c.me.id)>String(F),making:!1};if(M.peers.set(F,z),M.stream)for(let k of M.stream.getAudioTracks())I.addTrack(k,M.stream);else I.addTransceiver("audio",{direction:"recvonly"});return I.onicecandidate=k=>{k.candidate&&f({t:"send",to:F,data:{rtc:{ice:k.candidate}}})},I.onnegotiationneeded=async()=>{try{z.making=!0,await I.setLocalDescription(),f({t:"send",to:F,data:{rtc:{sdp:I.localDescription}}})}catch{}finally{z.making=!1}},I.ontrack=k=>{let O=k.streams[0]??new MediaStream([k.track]),nt=i.sound?.context;z.el=Object.assign(document.createElement("audio"),{srcObject:O,muted:!!nt,autoplay:!0}),z.el.play?.().catch(()=>{}),nt&&(z.out=nt.createMediaStreamSource(O),z.gain=nt.createGain(),z.gain.gain.value=0,z.pan=nt.createStereoPanner(),z.level=nt.createAnalyser(),z.level.fftSize=256,z.out.connect(z.level),z.out.connect(z.gain).connect(z.pan).connect(i.sound.master))},I.onconnectionstatechange=()=>{["failed","closed"].includes(I.connectionState)&&W(F)},z},ht=async(F,I)=>{if(!M.on)return;let z=J(F),k=z.pc;try{if(I.sdp){if(I.sdp.type==="offer"&&(z.making||k.signalingState!=="stable")&&!z.polite)return;await k.setRemoteDescription(I.sdp),I.sdp.type==="offer"&&(await k.setLocalDescription(),f({t:"send",to:F,data:{rtc:{sdp:k.localDescription}}}))}else I.ice&&await k.addIceCandidate(I.ice).catch(()=>{})}catch{}},N=async()=>{if(!M.on){try{M.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),M.mic=!0}catch{M.stream=null,M.mic=!1,r("No microphone: you can listen")}M.on=!0,c.lastPos="",i.sound?.context.state!=="running"&&i.sound?.context.resume().catch(()=>{}),p()}},$=()=>{if(M.on){M.on=!1;for(let F of[...M.peers.keys()])W(F);for(let F of M.stream?.getTracks()??[])F.stop();M.stream=null,c.lastPos="",p()}},G=()=>{M.mic=!M.mic;for(let F of M.stream?.getAudioTracks()??[])F.enabled=M.mic;p()};document.addEventListener("visibilitychange",()=>{if(document.hidden&&M.on&&M.stream){M.mic=!1;for(let F of M.stream.getAudioTracks())F.enabled=!1;p()}});let j=new dt,lt=F=>{let I=l.city?.group??null;if(I!==c.on)if(c.on=I,I){c.group=new $e,c.group.name="people",I.add(c.group);for(let Z of c.members.values())c.group.add(Z.fig)}else c.group=null;if(!t.on){(c.state==="on"||c.state==="joining")&&T(),o.hidden||(o.hidden=!0,h.hidden=!0);return}h.hidden=!1,o.hidden&&p();let z=t.state,k=performance.now();if(c.state==="on"){let Z=[Math.round(z.x*10)/10,Math.round(z.y*10)/10,Math.round(z.dir*100)/100,M.on?1:0],ut=Z.join(",");(ut!==c.lastPos&&k-c.sentAt>(c.batch?200:330)||k-c.sentAt>3e3)&&(c.lastPos=ut,c.sentAt=k,f(c.batch?{t:"pos",data:Z}:{t:"send",data:{p:Z}}))}if(!c.members.size)return;let O=l.camera,nt=e.renderer.domElement,tt=nt.clientWidth,at=nt.clientHeight,ft=1-Math.exp(-F*9),[bt,L]=t.forward(),X=[];for(let Z of c.members.values()){if(Z.tx==null)continue;let ut=Z.x+Z.y;Z.x+=(Z.tx-Z.x)*ft,Z.y+=(Z.ty-Z.y)*ft;let ot=Z.tdir-Z.dir;ot=Math.atan2(Math.sin(ot),Math.cos(ot)),Z.dir+=ot*ft;let Tt=l.localFloor(Z.x,Z.y)??z.z;Z.fig.position.set(Z.x,Z.y,Tt),Z.fig.rotation.z=-Z.dir-l.turn,Math.abs(Z.x+Z.y-ut)>.001&&e.stamp++;let Et=Math.hypot(Z.x-z.x,Z.y-z.y);j.set(Z.x,Z.y,Tt+1.95).applyMatrix4(I.matrixWorld).project(O);let Ft=j.z<1&&j.z>-1&&Math.abs(j.x)<1.05&&Math.abs(j.y)<1.05&&Et<160;Z.tag.style.display=Ft?"":"none",Ft&&(Z.tag.style.transform=`translate(${(j.x+1)/2*tt}px, ${(1-j.y)/2*at}px) translate(-50%, -100%)`,Z.tag.style.opacity=Et<60?1:.6);let Dt=M.peers.get(Z.id);if(Dt?.gain){let ne=Et<3?1:Math.max(0,1-(Et-3)/(qf-3))**1.6,Wt=((Z.x-z.x)*L-(Z.y-z.y)*bt)/Math.max(Et,.5);Dt.gain.gain.value+=((c.muted.has(Z.id)?0:ne)-Dt.gain.gain.value)*ft,Dt.pan.pan.value+=(Math.max(-.85,Math.min(.85,Wt))-Dt.pan.pan.value)*ft;let Rt=new Uint8Array(Dt.level.fftSize);Dt.level.getByteTimeDomainData(Rt);let Ct=0;for(let Ut of Rt)Ct=Math.max(Ct,Math.abs(Ut-128));Z.talking+=((Ct>9?1:0)-Z.talking)*Math.min(1,F*8)}else Z.talking*=.9;Z.fig.userData.ring.material.opacity=Z.talking,Z.tag.classList.toggle("talking",Z.talking>.4),Z.voice&&X.push([Et,Z.id])}if(M.on&&c.state==="on"){X.sort((ut,ot)=>ut[0]-ot[0]);let Z=new Set(X.filter(([ut])=>ut<Iy).slice(0,Ly).map(([,ut])=>ut));for(let ut of Z)!M.peers.has(ut)&&String(c.me.id)<String(ut)&&J(ut);for(let[ut]of M.peers){let ot=c.members.get(ut);(!ot||!ot.voice||Math.hypot(ot.x-z.x,ot.y-z.y)>qf)&&W(ut)}}},Q=async()=>{if(c.state==="on"||c.state==="joining")return;if(u)return A();if(!cs)return c.state="elsewhere",p();let F=a.host;if(!F)return c.state="off",p();if(!F.signedIn)return c.state="signed-out",p();c.state="ask",p(),c.tries=0,await A(!1)};return o.addEventListener("click",F=>{let I=F.target.closest("[data-act]")?.dataset.act;I==="mt-signin"?bi("signIn").catch(()=>r("Sign-in is not answering")):I==="mt-join"?A(!0):I==="mt-voice"&&(M.on?M.stream?G():$():N())}),o.addEventListener("submit",F=>{F.preventDefault();let I=n("#mt-text");I&&B(I.value)&&(I.value="",I.blur())}),addEventListener("keydown",F=>{t.on&&c.state==="on"&&(F.code==="KeyT"||F.code==="Slash")&&!F.target.closest?.("input, textarea")&&(n("#mt-text")?.focus(),F.preventDefault()),F.code==="Escape"&&F.target.id==="mt-text"&&F.target.blur()}),{tick:lt,arrive:Q,leave:T,join:A,say:B,voiceOn:N,voiceOff:$,mute:G,state:c,get count(){return c.members.size}}};var Ns=[{key:"sank",claim:"sank-in-a-day-and-night",name:"It sank",word:"sank",yes:"Land at Plato's date, open sea today.",no:"It did not go under."},{key:"atlantic",claim:"beyond-pillars",name:"Beyond the Pillars",word:"beyond the Pillars",yes:"On the Atlantic side, outside the strait.",no:"Not on the Atlantic, or inside the strait."},{key:"plain",claim:"great-plain",name:"Great plain",word:"great plain",yes:"Level low ground of the size he gives.",no:"No level plain of his size here."},{key:"mountains",claim:"mountains-shelter-north",name:"Mountains north",word:"mountains north",yes:"Higher ground on the north side than the south.",no:"No mountains sheltering it from the north."},{key:"island",claim:"larger-than-libya-and-asia",name:"An island",word:"island",yes:"The land it stood on was an island then.",no:"Part of a continent then, not an island."}],Fy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Uy=i=>{let t=(i??"").split(",").map(e=>e.trim()).filter(Boolean);return t.length>2?`${t[0]}, ${t[t.length-1]}`:t.join(", ")},Yf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,toast:l,setSheet:o,body:h,eyebrow:u,stage:c}=i,{control:f,globe:d}=t,p=d.shared,v=e.worldfit,g=e.cas;if(!v)return null;let m=s("#hunt"),x=s("#reticle"),b={forced:!1,ready:!1,n:0,score:null,bits:null,state:null,on:!1,last:"",claim:null,glow:1},_=z=>g?.claims.find(k=>k.id===z),S=z=>(_(z.claim)?.ref??"").split(";")[0];(async()=>{let z=t.phone?"worldfit-2k.png":"worldfit.png",k=await fetch(globalThis.__WORLDFIT__?.[z]??(globalThis.__ASSETS__||"./")+z);if(!k.ok)throw new Error(`worldfit: HTTP ${k.status}`);let O=await createImageBitmap(await k.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),nt=O.width,tt=512,at=new Uint8Array(nt*nt),ft=new Uint8Array(nt*nt),bt=new Uint8Array(nt*nt),X=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:nt,height:tt}):new OffscreenCanvas(nt,tt)).getContext("2d",{willReadFrequently:!0});for(let ot=0;ot<nt;ot+=tt){X.clearRect(0,0,nt,tt),X.drawImage(O,0,ot,nt,tt,0,0,nt,tt);let Tt=X.getImageData(0,0,nt,tt).data;for(let Et=0,Ft=ot*nt;Et<nt*tt;Et++,Ft++)at[Ft]=Tt[Et*4],ft[Ft]=Tt[Et*4+1],bt[Ft]=Tt[Et*4+2]}O.close?.();let Z=new Uint8Array(nt*nt);for(let ot=0;ot<nt;ot++)for(let Tt=0;Tt<nt;Tt++){let Et=0;for(let Ft=-1;Ft<=1;Ft++){let Dt=ot+Ft<0?0:ot+Ft>=nt?nt-1:ot+Ft;for(let ne=-1;ne<=1;ne++)Et+=at[Dt*nt+(Tt+ne+nt)%nt]*(ne||Ft?1:2)}Z[ot*nt+Tt]=Et*5}let ut=new Sn(Z,nt,nt,fi,an);ut.minFilter=rn,ut.magFilter=Ae,ut.wrapS=Pi,ut.wrapT=_n,ut.generateMipmaps=!0,ut.needsUpdate=!0,p.tHeat.value=ut,p.uHeatLod.value=nt<v.grid.size?-1:0,Object.assign(b,{n:nt,bits:ft,state:bt,ready:!0}),t.stamp++})().catch(z=>{console.warn(z.message),m.classList.remove("open")});let y=(z,k)=>{if(!b.ready)return null;let O=b.n,nt=$t(Math.floor((z+180)/360*O),0,O-1),tt=$t(k,-85,85)*gt,at=$t(Math.floor((1-Math.log(Math.tan(tt)+1/Math.cos(tt))/Math.PI)/2*O),0,O-1),ft=b.bits[at*O+nt],bt=b.state[at*O+nt];return{state:bt,bits:ft,score:bt===0?0:Fy(ft),clues:Ns.map((L,X)=>!!(ft&1<<X))}},T={sank:"Sank",atlantic:"Atlantic",plain:"Plain",mountains:"Mountains",island:"Island"};m.innerHTML=`<div class="h-main"><b id="h-score"></b><div class="h-clues">${Ns.map((z,k)=>`<span class="h-c" data-j="${k}"><i></i>${r(T[z.key])}</span>`).join("")}</div><button class="btn primary" data-act="h-claim">Score this spot</button></div>`;let M=()=>{let z=n.hunt&&b.ready&&(!i.busy()||b.forced);z!==b.on&&(b.on=z,m.classList.toggle("open",z),x.classList.toggle("open",z),c.classList.toggle("hunting",z),i.sound?.deep(z));let k=n.hunt&&b.ready?z||n.sheet==="claim"||!s("#intro").classList.contains("gone")?b.glow:.3*b.glow:0;if(Math.abs(p.uHeat.value-k)>.004&&(p.uHeat.value+=(k-p.uHeat.value)*.12,t.stamp++),!z)return;x.style.left=`${50+f.shift[0]*50}%`,x.style.top=`${50-f.shift[1]*50}%`;let O=f.lat/gt,nt=f.lon/gt,tt=y(nt,O),at=`${tt.state}|${tt.bits}`;if(at===b.last)return;b.last=at;let ft=s("#h-score");ft.innerHTML=tt.state===0?"":`${tt.score}<small>/5</small>`,m.querySelector('[data-act="h-claim"]').disabled=tt.state===0,ft.className=`s${tt.state===2?tt.score:0}`,ft.setAttribute("aria-label",tt.state===0?"Open sea at Plato's date too: nothing here to sink":tt.state===1?`${tt.score} of 5. Dry land then and now: it never sank`:`${tt.score} of 5, on land that has gone under`),x.className=`open s${tt.state===2?tt.score:0}`;for(let bt of m.querySelectorAll(".h-c"))bt.classList.toggle("on",tt.state!==0&&tt.clues[Number(bt.dataset.j)]);i.sound?.read(tt)},W=null,J=(z,k)=>{let O=xn(z*gt,k*gt),nt=performance.now(),tt=$t(f.range/1e3*.75,30,3500);cancelAnimationFrame(W);let at=()=>{let ft=$t((performance.now()-nt)/1700,0,1);p.uScan.value.set(O[0],O[1],O[2],Math.max(tt*(1-(1-ft)**2.2),.01)),p.uScanA.value=1.1*(1-ft)**1.3,t.stamp++,ft<1?W=requestAnimationFrame(at):p.uScanA.value=0};at()},ht=z=>{let k=v.totals;return k.by_score.filter(nt=>nt.score<z).reduce((nt,tt)=>nt+tt.km2,0)/k.land_that_sank_km2*100},N=(z,k)=>`The hunt for Atlantis \u{1F531} ${z.score}/5
${z.clues.map(O=>O?"\u{1F7E9}":"\u{1F7E5}").join("")}
${Ns.map(O=>O.word).join(" \xB7 ")}
${An(z.lat,z.lon,2)}${z.name?` \xB7 ${z.name}`:""}
${k}`,$=z=>i.shareUrl({hunt:`${z.lat.toFixed(3)},${z.lon.toFixed(3)}`},!0),G={copy:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',x:'<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',save:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>'},j=()=>{let z=b.claim,k=v.places;u.textContent="Landscape match";let O=k.filter(tt=>tt.score<z.score).length,nt=z.state===0?"Open sea at Plato's date too. There was no land here to sink.":z.state===1?"Dry land then and now. It never sank, which is the heart of the story.":`Better than ${ht(z.score).toFixed(z.score>=4?1:0)}% of all the land that has gone under. Beats ${O} of the ${k.length} famous claims.`;h.innerHTML=`
      <div class="c-hero s${z.state===2?z.score:0}"><b>${z.state===0?"\u2013":`${z.score}<small>/5</small>`}</b><div class="sq">${z.clues.map(tt=>`<i class="${tt?"y":"n"}"></i>`).join("")}</div></div>
      <h2 class="c-name">${r(z.name??An(z.lat,z.lon,2))}</h2>
      <div class="c-sub">${z.name?An(z.lat,z.lon,2):z.state===2?"Sunken land":z.state===1?"Dry land":"Open sea"}</div>
      <div class="c-list">${Ns.map((tt,at)=>`<details class="c-row ${z.clues[at]?"y":"n"}"><summary><i></i>${r(tt.name)}<small>${r(S(tt))}</small></summary><p>${r(z.state===0?"No land here at that date.":z.clues[at]?tt.yes:tt.no)}${_(tt.claim)?.quote?` <em class="q">\u201C${r(_(tt.claim).quote)}\u201D</em>`:""}</p></details>`).join("")}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${G.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${G.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${G.save}</button></div>
      <details class="c-more"><summary>More</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${r(N(z,$(z)))}</pre>`},lt=async(z,k,O=!1)=>{if(!b.ready)return;let nt=y(k,z),tt=v.best.find(at=>at.near?.name&&!/^off /.test(at.near.name)&&Math.abs(at.lat-z)<1.2&&Math.abs(at.lon-k)<1.2&&nt.state===2);b.claim={lat:z,lon:k,...nt,name:tt?tt.near.name:null,named:!!tt},n.legend=n.place=null,i.leaveScene(),o("claim"),h.scrollTop=0,j(),O&&f.flyTo({lon:k*gt,lat:z*gt,range:$t(f.range,6e4,9e5),tilt:30*gt,heading:0},2.4),setTimeout(()=>{J(k,z),i.sound?.sfx("ping",.8),nt.state===2&&nt.score>=4&&setTimeout(()=>i.sound?.sfx("reveal",.5),500)},O?2200:60);try{let ft=(await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${z}&lon=${k}`,{signal:AbortSignal.timeout(6e3)}).then(L=>L.json())).features?.[0]?.properties,bt=ft&&[ft.name??ft.county??ft.state,ft.country].filter(Boolean).join(", ");bt&&b.claim&&b.claim.lat===z&&!b.claim.named&&n.sheet==="claim"&&(b.claim.name=`Near ${bt}`,j())}catch{}},Q=()=>{u.textContent="Top scores";let z=(at,ft)=>`<button class="prow" data-act="h-go" data-ll="${at.lat},${at.lon}"><b class="lb s${at.top}">${at.top}/5</b><span class="pn">${r(at.near?.name?Uy(at.near.name):An(at.lat,at.lon,1))}</span><small>${at.km2.toLocaleString("en")} km\xB2</small></button>`,k=v.best.filter(at=>!at.near_old_ice).slice(0,8),O=v.best.filter(at=>at.near_old_ice).slice(0,5),nt=v.totals,tt=(nt.land_that_sank_km2/1e6).toFixed(1);h.innerHTML=`
      <h2>Best on Earth</h2>
      <p class="lead">${tt} million km\xB2 of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${nt.by_score.map(at=>`<div><b class="lb s${at.score}">${at.score}/5</b><i style="width:${Math.max(1.5,at.km2/nt.land_that_sank_km2*100).toFixed(1)}%"></i><small>${at.km2>=1e6?`${(at.km2/1e6).toFixed(1)} million km\xB2`:at.km2>=500?`${Math.round(at.km2/1e3).toLocaleString("en")} thousand km\xB2`:"none"}</small></div>`).join("")}</div>
      <h3>The best matches</h3>
      ${k.map(z).join("")}
      ${O.length?`<h3>Near the old ice sheets</h3>${O.map(z).join("")}`:""}
      <h3>The famous claims, by the same rules</h3>
      ${v.places.map(at=>`<button class="prow" data-act="a-place" data-id="${r(at.id)}"><b class="lb s${at.score}">${at.score}/5</b><span class="pn">${r(i.shortName(at.name))}</span><small>${r(at.note?"open sea then":at.clues.map(ft=>Ns.find(bt=>bt.key===ft).word).join(", ")||"none")}</small></button>`).join("")}
      `},F=()=>{u.textContent="How it's scored";let z=v.rules,k={sank:`The cell was land with the sea ${Math.abs(z.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,atlantic:"The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.",plain:`At least ${Math.round(z.plain.share_needed*100)}% of a ${Math.round(z.plain.long_km)} by ${Math.round(z.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${z.plain.low_ground_max_m_above_today} m above today's sea.`,mountains:`The ground ${z.mountains.band_from_km} to ${z.mountains.band_to_km} km to its north averages at least ${z.mountains.north_mean_at_least_m} m, and at least ${z.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,island:`The piece of land it belonged to then was smaller than ${(z.island.smaller_than_km2/1e6).toFixed(1)} million km\xB2: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`};h.innerHTML=`
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${g?.claims.filter(O=>O.testable).length??27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${Ns.map(O=>`<div class="c-row y"><i></i><span><b>${r(O.name)}</b> <small>${r(S(O))}</small><br>${r(k[O.key])}${_(O.claim)?.quote?`<br><em class="q">\u201C${r(_(O.claim).quote)}\u201D</em>`:""}</span></div>`).join("")}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${v.limits.map(O=>`<li>${r(O)}</li>`).join("")}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`},I=(z,k)=>{let O=b.claim;if(z==="h-claim")lt(f.lat/gt,f.lon/gt);else if(z==="h-best")n.legend=n.place=null,i.leaveScene(),o("best"),h.scrollTop=0,Q();else if(z==="h-rules")n.legend=n.place=null,i.leaveScene(),o("rules"),h.scrollTop=0,F();else if(z==="h-story")i.tour?.();else if(z==="h-go"){let[nt,tt]=k.dataset.ll.split(",").map(Number);lt(nt,tt,!0)}else if(z==="h-share")i.shareOut({text:N(O,""),url:$(O),both:N(O,$(O))});else if(z==="h-copy")navigator.clipboard?.writeText(N(O,$(O))).then(()=>l("Copied. Paste it anywhere."),()=>{s("#c-share").hidden=!1,l("Select the text and copy it")});else if(z==="h-x")window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(N(O,$(O)))}`,"_blank","noopener");else if(z==="h-pic")t.snap=nt=>{if(!nt)return l("Could not take the picture");let tt=document.createElement("a");tt.href=URL.createObjectURL(nt),tt.download=`atlantis-hunt-${O.lat.toFixed(2)}_${O.lon.toFixed(2)}.jpg`,tt.click(),setTimeout(()=>URL.revokeObjectURL(tt.href),4e3)},t.stamp++;else if(z==="h-fit")i.fitAt(O.lat,O.lon);else if(z==="h-city")i.standCity(O.lat,O.lon);else if(z==="h-known")i.checkKnown(O.lat,O.lon,20);else return!1;return!0};return m.addEventListener("click",z=>{let k=z.target.closest("[data-act]");k&&I(k.dataset.act,k)}),{fit:y,claim:lt,scan:J,click:I,tick:M,drawBest:Q,state:b,CLUES:Ns,get ready(){return b.ready},setGlow:z=>{b.glow=z}}};var Zf={on:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',off:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>'},$l=2.5,ky=.006,Oy=.04,By=.14,jf=i=>Float32Array.from({length:48},(t,e)=>i(e/47*Math.PI/2)),zy=jf(Math.sin),Hy=jf(Math.cos),Jf=i=>{let{data:t,$:e}=i,n=t.audio,s=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n||!s)return null;let r=e("#b-sound"),a={on:!0,ac:null,master:null,buffers:new Map,voice:null,want:new Map,loops:new Map,last:{score:-1,lit:-1,lockAt:0,tickAt:0,stepAt:0},log:[]},l=(N,$={})=>{globalThis.__AUDIOLOG__&&a.log.push({t:performance.now(),kind:N,...$})},o=N=>globalThis.__AUDIO__?.[N]??`${globalThis.__ASSETS__||"./"}audio/${N}`,h=async N=>{let $=o(N);if($.startsWith("data:")){let j=atob($.slice($.indexOf(",")+1)),lt=new Uint8Array(j.length);for(let Q=0;Q<j.length;Q++)lt[Q]=j.charCodeAt(Q);return lt.buffer}let G=await fetch($);if(!G.ok)throw new Error(`${N}: ${G.status}`);return G.arrayBuffer()},u=()=>{if(a.ac)return a.ac;let N=a.ac=new s({latencyHint:"interactive"});a.master=N.createGain();let $=N.createDynamicsCompressor();return $.threshold.value=-9,$.knee.value=6,$.ratio.value=14,$.attack.value=.003,$.release.value=.22,a.master.connect($).connect(N.destination),N},c=()=>{let N=u();return N.state!=="running"&&N.resume().then(y).catch(()=>{}),N.state==="running"},f=N=>(a.buffers.has(N)||a.buffers.set(N,h(N).then($=>u().decodeAudioData($)).catch(()=>null)),a.buffers.get(N)),d=(N=[])=>{for(let $ of N){let G=n.narration?.[Th($)];G&&f(G.file)}},p=(N,{volume:$=1,offset:G=0,at:j=0,fadeIn:lt=ky,out:Q=a.master}={})=>{let F=a.ac,I=F.createBufferSource(),z=F.createGain();I.buffer=N;let k=Math.max(F.currentTime+.005,j),O=Math.max(.05,N.duration-G),nt=Math.min(lt,O/3),tt=Math.min(Oy,O/3);return z.gain.setValueAtTime(0,k),z.gain.linearRampToValueAtTime($,k+nt),z.gain.setValueAtTime($,k+O-tt),z.gain.linearRampToValueAtTime(0,k+O),I.connect(z).connect(Q),I.start(k,G),{node:I,gain:z,t0:k,dur:O,offset:G}},v=(N,$=By)=>{let G=a.ac,j=G.currentTime;if(!(j>=N.t0+N.dur)){N.gain.gain.cancelScheduledValues(j),N.gain.gain.setValueAtTime(N.gain.gain.value,j),N.gain.gain.linearRampToValueAtTime(0,j+$);try{N.node.stop(j+$+.03)}catch{}}},g=N=>{m();let $=n.narration?.[Th(N)];if(!$)return 0;if(a.on){let G=a.voice={clip:$,at:0,playing:null,paused:!1};f($.file).then(j=>{a.voice===G&&!G.paused&&j&&a.on&&c()&&(G.playing=p(j),l("say",{file:$.file,volume:1}))})}return $.seconds},m=()=>{let N=a.voice;a.voice=null,N?.playing&&(v(N.playing),l("hush",{file:N.clip.file}))},x=()=>{let N=a.voice;!N||N.paused||(N.paused=!0,N.playing&&(N.at=Math.min(N.clip.seconds,N.playing.offset+Math.max(0,a.ac.currentTime-N.playing.t0)),v(N.playing,.09),N.playing=null,l("hush",{file:N.clip.file})))},b=()=>{let N=a.voice;if(!N||!N.paused)return;N.paused=!1;let $=Math.max(0,N.at-.25);a.on&&$<N.clip.seconds-.1&&f(N.clip.file).then(G=>{a.voice===N&&!N.paused&&G&&c()&&(N.playing=p(G,{offset:$,fadeIn:.06}),l("say",{file:N.clip.file,volume:1,offset:$}))})},_=()=>{let N=a.voice,$=N?.playing;return{clip:N?.clip.file??null,paused:!!N?.paused,playing:!!$&&a.ac.currentTime<$.t0+$.dur,at:$?$.offset+Math.max(0,a.ac.currentTime-$.t0):N?.at??0}},S=(N,$=.6)=>{let G=n.sfx?.[N];!G||!a.on||(l("sfx",{file:G.file,volume:$}),f(G.file).then(j=>{j&&a.on&&c()&&p(j,{volume:$})}))},A=(N,$,G=.25)=>{if(!n.sfx?.[N])return;let j=a.want.get(N);$?j!==G&&(a.want.set(N,G),y()):j!==void 0&&(a.want.delete(N),y())};function y(){let N=a.ac;for(let[$,G]of a.loops){let j=a.on?a.want.get($):void 0;if(j===void 0){if(a.loops.delete($),l("loop-off",{file:G.file}),G.gain){let lt=N.currentTime;G.gain.gain.cancelScheduledValues(lt),G.gain.gain.setValueAtTime(G.gain.gain.value,lt),G.gain.gain.linearRampToValueAtTime(0,lt+1.5);for(let Q of G.parts)try{Q.node.stop(lt+1.6)}catch{}}}else j!==G.volume&&G.gain&&(G.volume=j,G.gain.gain.setTargetAtTime(j,N.currentTime,.4))}if(a.on){for(let[$,G]of a.want)if(!a.loops.has($)){let j={name:$,file:n.sfx[$].file,volume:G,gain:null,parts:[],next:0,buffer:null};a.loops.set($,j),l("loop-on",{file:j.file,volume:G,cross:$l}),f(j.file).then(lt=>{j.buffer=lt,y()})}}if(a.loops.size&&c())for(let $ of a.loops.values()){if(!$.buffer)continue;let G=N.currentTime,j=$.buffer.duration,lt=j-$l;for($.gain||($.gain=N.createGain(),$.gain.gain.setValueAtTime(0,G),$.gain.gain.linearRampToValueAtTime($.volume,G+1.2),$.gain.connect(a.master),$.next=G+.02);$.next<G+1.2;){let Q=!$.parts.length,F=N.createBufferSource(),I=N.createGain(),z=$.next;F.buffer=$.buffer,I.gain.setValueAtTime(Q?1:0,z),Q||I.gain.setValueCurveAtTime(zy,z,$l),I.gain.setValueCurveAtTime(Hy,z+lt,$l-.005),F.connect(I).connect($.gain),F.start(z),$.parts.push({node:F,end:z+j}),$.next=z+lt}$.parts=$.parts.filter(Q=>Q.end>G-1)}}setInterval(()=>{a.loops.size&&y()},400),addEventListener("pointerdown",()=>{a.ac&&a.ac.state!=="running"&&c()},{capture:!0,passive:!0});let T=N=>{A("bed",N,.1),N&&(A("deep",!1),A("city",!1))},B=N=>A("deep",N&&!a.want.has("bed")&&!a.want.has("city"),.32),M=N=>{A("city",N==="city",.3),A("bed",N==="hall",.07),N&&A("deep",!1)},W=N=>{let $=performance.now();$-a.last.stepAt<(N?300:420)||(a.last.stepAt=$,S("step",.16+Math.random()*.05))},J=N=>{let $=performance.now(),G=N.state===0?0:N.clues.filter(Boolean).length,j=N.state===2&&N.score>=4;G>a.last.lit&&$-a.last.tickAt>140&&(S("tick",.3),a.last.tickAt=$),j&&a.last.score<4&&$-a.last.lockAt>1500&&(S("lock",.4),a.last.lockAt=$),a.last.lit=G,a.last.score=j?N.score:0},ht=()=>{r.innerHTML=a.on?Zf.on:Zf.off,r.setAttribute("aria-label",a.on?"Turn sound off":"Turn sound on"),r.setAttribute("aria-pressed",String(a.on))};return r.hidden=!1,r.addEventListener("click",()=>{a.on=!a.on,a.on||m(),y(),ht(),i.toast(a.on?"Sound on":"Sound off",1200)}),ht(),{say:g,hush:m,pause:x,resume:b,prime:d,voiceState:_,sfx:S,loop:A,bed:T,deep:B,air:M,step:W,read:J,state:a,get on(){return a.on},get master(){return u(),a.master},get context(){return u()}}};var ql={lat:35.3,lon:-9.9,bearing:180},Kt=(i,t=document)=>t.querySelector(i),ue=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ba=(i,t)=>/^https?:\/\//.test(i??"")?`<a href="${ue(i)}" target="_blank" rel="noopener">${ue(t)}</a>`:ue(t),hs=i=>`${i<0?"\u2212":i>0?"+":""}${Math.abs(Math.round(i)).toLocaleString("en")} m`,Gy=[{m:0,label:"Today"},{m:-50,label:"9600 BCE",note:"Plato's date for Atlantis; sources give 43 to 58 m below today"},{m:-95,label:"12,500 BCE",note:"before the fastest melt; our own estimate"},{m:-125,label:"19,000 BCE",note:"the low point of the last ice age; estimates run from 116 to 134 m below today"}];var Vy={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Wy=["atlantis","el dorado","troy","titanic","doggerland","lost city of z","amber room","oak island","san jose","endurance","genghis khan","cleopatra","noah","ark of the covenant","valeriana","angkor","machu picchu","ubar","iram","lemuria","ciudad blanca","yonaguni","thonis","upano","roanoke","holy grail","franklin","erebus","alexander","mu","sundaland","beringia","rungholt","paititi","yamashita","cahokia","great zimbabwe","nazca"],Kf=(i,t)=>{let{control:e,globe:n}=i,s=n.shared,r=Kt("#stage"),a=Kt("#view"),l=Kt("#pins"),o=Kt("#sheet"),h=Kt("#body"),u=Kt("#eyebrow"),c={kind:null,legend:null,place:null,sheet:null,mode:"content",overlay:null,overlayMix:1,host:null,known:null},f=t.legends,d=null,p=null,v=null,g=null,m=null,x=null,b=null,_=f.find(w=>w.id==="atlantis")??null;_&&(c.kind="atlantis");for(let w of f){let P=Ps(w.name),U=Wy.findIndex(C=>P.includes(C));w.weight=(U>=0?200-U:0)+Math.min(w.places.length,8)*3+(w.status==="found"?4:0)}let S=()=>{if(c.mode==="viewport")r.style.height="100dvh";else{let w=Math.round($t(r.clientWidth*1.16,560,740));r.style.height=`${w}px`,Pf(w)}e.wheelNeedsKey=c.mode!=="viewport",Q()};Cf(w=>{c.mode=w,S()}),addEventListener("resize",S),addEventListener("load",S);let A,y=(w,P=2600)=>{let U=Kt("#toast");U.textContent=w,U.classList.add("open"),clearTimeout(A),A=setTimeout(()=>U.classList.remove("open"),P)},T=new Map,B=(w,P)=>{let U=T.get(P);return U||(U=document.createElement("button"),U.className=`pin s-${w.status}`,U.innerHTML="<i></i><span></span>",U.addEventListener("click",C=>{C.stopPropagation(),O(w,P,!0)}),l.appendChild(U),T.set(P,U),U._shown=!1),U},M=(w,P,U,C=0)=>{let Y=xn(w*gt,P*gt,M.d),it=e.pos,yt=Math.hypot(it[0],it[1],it[2]);if((Y[0]*it[0]+Y[1]*it[1]+Y[2]*it[2])/yt<(ee-2e3)/yt)return!1;let Pt=s.uExag.value,zt=s.uWater.value>.5?s.uSea.value:-1e5,Ht=Math.max(n.heightAt(w*gt,P*gt)??0,zt)*Pt,At=ee+Ht+C,It=Y[0]*At-it[0],qt=Y[1]*At-it[1],wt=Y[2]*At-it[2],ae=e.basis,le=It*ae.fwd[0]+qt*ae.fwd[1]+wt*ae.fwd[2];if(le<=i.camera.near)return!1;let De=Math.tan(e.fovY/2),Cn=De*i.camera.aspect;return U[0]=(((It*ae.right[0]+qt*ae.right[1]+wt*ae.right[2])/le/Cn+e.shift[0])*.5+.5)*r.clientWidth,U[1]=(.5-((It*ae.up[0]+qt*ae.up[1]+wt*ae.up[2])/le/De+e.shift[1])*.5)*r.clientHeight,!0};M.d=[0,0,0];let W=new Set,J=()=>{let w=r.clientWidth,P=r.clientHeight,U=e.range<15e5,C=[],Y=[0,0],it=c.kind==="atlantis";for(let wt of f){let ae=wt===c.legend||it&&wt===_;if(!(!ae&&(it||c.kind&&wt.kind!==c.kind)))for(let le of ae||U?wt.places:[wt.main])le===c.place&&(d?.a.scene&&e.range<d.a.scene.radius_km*9e3||i.evidence.extras.length)||M(le.lon,le.lat,Y)&&(Y[0]<-20||Y[1]<-20||Y[0]>w+20||Y[1]>P+20||C.push({legend:wt,place:le,x:Y[0],y:Y[1],w:(ae?1e3:0)+(le===c.place?500:0)+wt.weight+(le===wt.main?5:0)+(it?60-10*(Vy[le.standing]??5):0)}))}C.sort((wt,ae)=>ae.w-wt.w);let yt=w<500?9:w<900?16:30,Mt=[],Pt=new Set,zt=0,Ht=0,At=!Kt("#intro").classList.contains("gone"),It=96,qt=c.sheet&&w<760?P*.38:At?P-(w<760?310:300):P;for(let wt of C){let le=(wt.legend===c.legend||it&&wt.legend===_)&&wt.legend.places.length>1?wt.place.name:wt.legend.name;le.length>26&&(le=`${le.slice(0,24).trimEnd()}\u2026`);let De=16+le.length*6.6,Cn=18,Pn=[wt.x-6,wt.y-Cn/2,wt.x+De,wt.y+Cn/2],Mn=!(c.hunt&&!c.legend&&wt.place!==c.place)&&zt<yt&&wt.y>It&&wt.y<qt-10&&Pn[2]<w-4;if(Mn){for(let Ee of Mt)if(Pn[0]<Ee[2]&&Pn[2]>Ee[0]&&Pn[1]<Ee[3]&&Pn[3]>Ee[1]){Mn=!1;break}}if(!Mn&&(Ht>220||wt.y>qt))continue;Mn?(Mt.push(Pn),zt++):Ht++;let ke=B(wt.legend,wt.place);ke._text!==le&&(ke.lastChild.textContent=le,ke._text=le,ke.setAttribute("aria-label",wt.place===wt.legend.main?wt.legend.name:`${wt.place.name} (${wt.legend.name})`)),ke.style.transform=`translate3d(${wt.x.toFixed(1)}px,${wt.y.toFixed(1)}px,0)`;let us=`pin ${it&&wt.legend===_?`p-${wt.place.standing}${(wt.place.tests??[]).length?"":" hollow"}${d?.scenes.has(wt.place.id)?" scene":""}`:`s-${wt.legend.status}`}${Mn?"":" dot"}${wt.place===c.place?" on":""}${wt.place===p?" pulse":""}`;ke.className!==us&&(ke.className=us),ke.style.zIndex=wt.place===c.place?3:Mn?2:1,ke._shown||(ke.style.display="",ke._shown=!0),Pt.add(ke)}for(let wt of W)Pt.has(wt)||(wt.style.display="none",wt._shown=!1);W.clear();for(let wt of Pt)W.add(wt)},ht=Kt("#kinds"),N=()=>{let w=_h.filter(([P])=>f.some(U=>U.kind===P));r.classList.toggle("others",c.kind!=="atlantis"),ht.innerHTML=(d?d.drawCase():_?`<button class="chip glass${c.kind==="atlantis"?" on":""}" data-kind="atlantis">Atlantis \xB7 ${_.places.length} places</button>`:"")+(d&&c.kind==="atlantis"?"":`<button class="chip glass${c.kind?"":" on"}" data-kind="">${_?`Other legends ${f.length-1}`:`All ${f.length}`}</button>`)+(c.kind==="atlantis"?"":w.map(([P,U])=>`<button class="chip glass${c.kind===P?" on":""}" data-kind="${P}">${ue(U)}</button>`).join(""))},$=Kt("#menu"),G=Kt("#b-menu"),j=w=>{$.classList.toggle("open",w),G.setAttribute("aria-expanded",String(w)),G.classList.toggle("on",w)};G.addEventListener("click",w=>{w.stopPropagation(),j(!$.classList.contains("open"))}),$.addEventListener("click",w=>{let P=w.target.closest("button");if(!P)return;j(!1),Kt("#intro").classList.add("gone"),e.idle=!1;let U=P.dataset.menu;U==="city"?pt.enterCity("gate"):U==="hall"?pt.enterCity("hall"):U==="hunt"?(d?.leaveScene(),c.legend=c.place=null,c.kind!=="atlantis"&&_&&(c.kind="atlantis",N()),pt.openGlobe()):U==="story"?R.start():U==="work"?g.show("work"):U==="best"?(pt.leaveWalk(),b?.click("h-best")):U==="claims"?(pt.leaveWalk(),O(_,null,!1)):U==="board"?(pt.leaveWalk(),d?.openBoard()):U==="rules"?b?.click("h-rules"):U==="credits"&&Kt("#credit").click()}),ht.addEventListener("click",w=>{let P=w.target.closest("[data-kind]");if(P){if(P.dataset.board&&c.kind==="atlantis")return d.openBoard();if(P.dataset.list&&c.kind==="atlantis")return d.openList();c.kind=P.dataset.kind||null,c.kind!=="atlantis"&&d?.a.scene&&(d.leaveScene(),F()),c.kind==="atlantis"&&c.legend&&c.legend!==_&&F(),N()}});let lt=w=>{c.sheet=w,o.dataset.kind=w??"",o.classList.toggle("open",!!w),r.classList.toggle("sheet-open",!!w);for(let[P,U]of[["b-layers","layers"],["b-sea","sea"],["b-known","known"]])Kt(`#${P}`).classList.toggle("on",w===U);r.dataset.sheet=w??"",w&&Kt("#intro").classList.add("gone"),w||(h.innerHTML=""),h.scrollTop=0,Q()};function Q(){let w=r.clientWidth;e.goalShift=c.sheet?w<760?[0,c.sheet==="legend"||c.sheet==="fit"?.42:.56]:[416/w,0]:[0,0]}let F=()=>{lt(null),c.legend&&!d?.a.scene&&(c.legend=c.place=null)},I=w=>{let P=$t((w.precision_km??10)*1e3*7,12e3,25e5);return{lon:w.lon*gt,lat:w.lat*gt,range:P,tilt:P<2e5?38*gt:0,heading:0}},z=(w,P,U,C)=>P?.length?`<p style="margin-bottom:4px"><b>${w}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${P.map(Y=>`<span class="tag t-${U}">${ue(Y.replaceAll("-"," "))}</span>`).join("")}</div>`:"",k=()=>{let w=c.legend;u.innerHTML=`${ue(bh[w.kind]??w.kind)} <span class="tag s-${w.status}">${ue(Sf[w.status]??w.status)}</span>`;let P=w.places.map((C,Y)=>`
      <div class="place${C===c.place?" on":""}" data-i="${Y}">
        <button data-act="place" data-i="${Y}">
          <span class="name">${ue(C.name)}<small>${ue(kl[C.role]??C.role??"")}</small></span>
          <span class="tag t-${C.standing}">${ue(Is[C.standing]??C.standing??"")}</span>
        </button>
        <div class="more">
          ${C.claim?`<p>${ue(C.claim)}</p>`:""}
          ${C.against?`<p><b>Against:</b> ${ue(C.against)}</p>`:""}
          ${C.proposed_by?.length?`<p style="font-size:12.5px">Proposed by ${ue(C.proposed_by.slice(0,3).map(it=>`${it.who}${it.year?` (${it.year})`:""}`).join(", "))}${C.event_date?`. Date it needs: ${ue(C.event_date)}`:""}</p>`:""}
          ${z("Said to fit Plato on",C.fits,"confirmed",w)}${z("Breaks Plato on",C.conflicts,"rejected",w)}
          ${(C.tests??[]).map(it=>`<p><b>Tested:</b> ${ue(it.what)}${it.who?` (${ue(it.who)}${it.year?`, ${it.year}`:""})`:""}. ${ue(it.result)} ${it.url?ba(it.url,"Source"):""}</p>`).join("")}
          <p style="font-size:12.5px;color:var(--faint)">${An(C.lat,C.lon,3)}${C.precision_km?`, give or take ${C.precision_km>=100?Math.round(C.precision_km):C.precision_km} km`:""}${C.underwater?", under water":""}</p>
          ${(C.sources??[]).map(it=>`<a class="src" href="${ue(it.url)}" target="_blank" rel="noopener">${ue(it.title??it.url)}</a>`).join("")}
          <div class="row">${w===_?`<button class="btn primary" data-act="city" data-i="${Y}">Stand Plato's city here, to scale</button>`:""}<button class="btn" data-act="known-here" data-i="${Y}">What's already recorded here?</button></div>
        </div>
      </div>`).join(""),U=Number.isFinite(w.sea_level_m)&&w.sea_level_m!==0;h.innerHTML=`
      <h2>${ue(w.name)}</h2>
      ${w.when?`<div class="when">${ue(w.when)}</div>`:""}
      <p>${ue(w.summary)}</p>
      ${w.look_for?`<div class="look"><b>What to look for</b> ${ue(w.look_for)}</div>`:""}
      <div class="row" style="margin-top:0">
        ${U?`<button class="btn primary" data-act="sea-to" data-m="${w.sea_level_m}">Set the sea to ${hs(w.sea_level_m)}</button>`:""}
        <button class="btn" data-act="share">Share this view</button>
        ${cs?'<button class="btn" data-act="post">Post what you see</button>':""}
      </div>
      <h3>${w.places.length===1?"Where":`Where people have looked \xB7 ${w.places.length}`}</h3>
      ${P}
      ${w.origin?.url||w.origin?.text?`<p class="note">Where the story comes from: ${ba(w.origin.url,w.origin.text??"source")}</p>`:""}`},O=(w,P,U)=>{if(w===_&&d)return c.kind!=="atlantis"&&(c.kind="atlantis",N()),Kt("#q").blur(),P?d.openPlace(P,U):d.openList();d?.leaveScene(),c.kind==="atlantis"&&w!==_&&(c.kind=null,N()),c.legend=w,c.place=P??w.main,lt("legend"),k(),U&&e.flyTo(I(c.place)),Kt("#q").blur();let C=Kt(".place.on",h);C&&P&&C.scrollIntoView({block:"nearest"})},nt=()=>{let w=Kt("#seatag"),P=s.uSea.value,U=s.uWater.value<.5,C=c.overlay,Y=[];if(U?Y.push("Oceans drained: <b>bare sea floor</b>"):Math.abs(P)>=1&&Y.push(`Sea level <b>${hs(P)}</b>`),C){let yt=40075016*Math.cos(e.lat)/2**C.form.layer.minZoom/290*r.clientHeight*1.5;Y.push(Z(C)?e.range>yt?`Zoom in to see <b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b> has no data here`)}d?.a.scene&&c.sheet!=="legend"&&c.sheet!=="fit"&&Y.push(`<b>${ue(c.place?.name??"")}</b> \xB7 <button class="linkish" data-act="scene-open">open its card</button> \xB7 <button class="linkish" data-act="scene-off">leave</button>`),x?.sync();let it=Y.join(" \xB7 ");w._html!==it&&(w.innerHTML=it,w._html=it,w.classList.toggle("open",!!it))},tt=(w,P)=>{s.uSea.value=$t(w,-11e3,9e3),P!==void 0&&(s.uWater.value=P?0:1),n.fitCaps(),nt()},at=()=>{u.textContent="Sea level";let w=s.uSea.value,P=s.uWater.value<.5;h.innerHTML=`
      <div class="big" id="sea-big">${hs(w)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${$t(w,-150,70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${Gy.map(U=>`<button class="chip${Math.abs(U.m-w)<.5&&!P?" on":""}" data-act="sea-to" data-m="${U.m}">${ue(U.label)} ${U.m?hs(U.m):""}</button>`).join("")}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${P?"checked":""}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `},ft=(w,P,U=180,C=!0)=>{i.city.place({lat:w,lon:P,bearing:U}),i.stamp++,C&&e.flyTo(i.city.view(),4.5),lt(null),nt()},bt=()=>{d?.a.scene||(c.legend=c.place=null),lt("city"),u.textContent="Plato's city, rebuilt";let w=t.reconstruction,P=U=>`<div class="known"><span>${ue(U.what)}</span><small>${ue(U.ref??"")}</small></div>`;h.innerHTML=`
      <p>This is the city Plato describes in the Critias, built to his measurements at ${i.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${w?`<h3>From the text \xB7 ${w.from_text.length}</h3>${w.from_text.map(P).join("")}<h3>Our choices, not in the text \xB7 ${w.choices.length}</h3>${w.choices.map(P).join("")}`:""}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`};Kt("#seatag").addEventListener("click",w=>{let P=w.target.closest("[data-act]")?.dataset.act;P==="city-off"&&(i.city.remove(),i.stamp++,nt()),P==="city-notes"&&bt(),P==="scene-open"&&c.place&&d.openPlace(c.place,!1),P==="scene-off"&&(d.leaveScene(),c.legend=c.place=null,nt())});let L=[];for(let w of t.sources){if(w.license?.share_ok!==!0)continue;let P=[],U=wh(w);U&&P.push({id:"",name:"Standard",layer:U});for(let C of w.access?.variants??[]){if(/stretch/i.test(`${C.id} ${C.name??""}`))continue;let Y=wh(w,C);Y&&P.push({id:C.id,name:C.name??C.id,layer:Y})}P.length&&L.push({s:w,forms:P,id:w.id})}let X=[["lidar","Lidar relief"],["elevation","Terrain"],["seafloor","Sea floor"],["geophysics","Gravity, magnetics, geology"],["imagery","Satellite and air photos"],["radar","Radar"],["historic","Old maps and photos"],["catalog","Where surveys exist"]],Z=w=>{let P=w.s.coverage?.bbox;if(!P)return!0;let U=e.lat/gt,C=e.lon/gt;return C>=P[0]&&C<=P[2]&&U>=P[1]&&U<=P[3]},ut=w=>{let P=w.s.coverage?.bbox;return!P||P[2]-P[0]>300&&P[3]-P[1]>120},ot=(w,P)=>{let U=w?w.forms.find(C=>C.id===(P??""))??w.forms[0]:null;c.overlay=w?{...w,form:U}:null,n.setLayer("overlay",U?U.layer:null),s.uOverMode.value=U&&U.layer.asIs?1:0,s.uOverMix.value=c.overlayMix,n.maxZ=U?Math.max(17,Math.min(U.layer.maxZoom+1,19)):17},Tt=()=>{u.textContent="Readings and view";let w=s.uLens.value,P=yt=>{let Mt=c.overlay?.id===yt.id,Pt=Z(yt),zt=yt.s.resolution_m?` \xB7 ${yt.s.resolution_m>=1e3?`${yt.s.resolution_m/1e3} km`:`${yt.s.resolution_m} m`}`:"";return`<button class="layer${Mt?" on":""}" data-act="overlay" data-id="${ue(yt.id)}"><span class="radio"></span><span class="t"><b>${ue(yt.s.name)}</b><small>${ue(yt.s.coverage?.note??"")}${zt}</small></span></button>`+(Mt?`<div class="slide" style="margin:2px 10px 8px 36px">
            ${yt.forms.length>1?`<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${yt.forms.map(Ht=>`<button class="chip${c.overlay.form===Ht?" on":""}" data-act="overlay-form" data-form="${ue(Ht.id)}">${ue(Ht.name.replace(/\s*\(.*\)$/,""))}</button>`).join("")}</div>`:""}
            <label for="over-mix">Strength</label><output>${Math.round(c.overlayMix*100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${c.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${Pt?"":'<button class="btn" data-act="overlay-go">Go where it has data</button>'}${yt.s.docs?`<a class="btn" href="${ue(yt.s.docs)}" target="_blank" rel="noopener">About this source</a>`:""}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${ue(yt.s.what??"")} ${yt.s.license?.name?`Licence: ${ba(yt.s.license.url,yt.s.license.name)}.`:""} ${ue(yt.s.license?.attribution??"")}</p></div>`:"")},U=yt=>X.map(([Mt,Pt])=>{let zt=yt.filter(Ht=>Ht.s.group===Mt);return zt.length?`<h3>${ue(Pt)}</h3>${zt.map(P).join("")}`:""}).join(""),C=L.filter(yt=>Z(yt)&&!ut(yt)),Y=L.filter(ut),it=L.filter(yt=>!Z(yt)&&!ut(yt));h.innerHTML=`
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${w===0?"on":""}">Satellite</button><button data-act="lens" data-v="1" class="${w===1?"on":""}">Bare earth</button><button data-act="lens" data-v="2" class="${w===2?"on":""}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${s.uExag.value.toFixed(1)}\xD7</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${s.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${Et(i.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${i.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(i.sun.altitude)}\xB0</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${i.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${s.uShadows.value>.5?"checked":""}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${s.uContours.value>.5?"checked":""}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${s.uNightOn.value>.5?"checked":""}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${C.length?U(C):""}
      ${Y.length?`<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${U(Y)}`:""}
      ${it.length?`<details style="margin-top:18px"${c.overlay&&it.some(yt=>yt.id===c.overlay.id)?" open":""}><summary style="cursor:pointer;font-weight:600">Surveys of other places \xB7 ${it.length}</summary>${U(it)}</details>`:""}
      `},Et=w=>["N","NE","E","SE","S","SW","W","NW"][Math.round(w/45)%8]+` ${Math.round(w)}\xB0`,Ft=/archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i,Dt=()=>{u.textContent="Already recorded here?";let w=c.known;if(!w){h.innerHTML="<p>Before you call something a discovery, check what is already on record.</p>";return}let P=`<p style="color:var(--dim)">Within <b style="color:var(--ink)">${w.radius} km</b> of ${An(w.lat,w.lon,3)}</p>`;if(w.state==="loading"&&!w.rows.length){h.innerHTML=`${P}<p class="note">Asking Wikidata and OpenStreetMap\u2026</p>`;return}let U=it=>`<div class="known"><span>${it.url?ba(it.url,it.name):ue(it.name)} ${it.type?`<em>\xB7 ${ue(it.type)}</em>`:""}</span><small>${it.km<1?`${Math.round(it.km*1e3)} m`:`${it.km.toFixed(it.km<10?1:0)} km`}</small></div>`,C=w.rows.filter(it=>it.site),Y=w.rows.filter(it=>!it.site);h.innerHTML=`${P}
      ${C.length?`<h3>Sites and monuments \xB7 ${C.length}</h3>${C.map(U).join("")}`:"<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>"}
      ${Y.length?`<h3>Other named places \xB7 ${Y.length}</h3>${Y.slice(0,25).map(U).join("")}`:""}
      ${w.state==="loading"?'<p class="note">Still waiting for OpenStreetMap, which can take half a minute\u2026</p>':""}
      ${w.errors.length?`<p class="note">Could not reach: ${ue(w.errors.join(", "))}.</p>`:""}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(w.radius,8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`},ne=async(w,P,U)=>{let C=Math.round($t(U,2,60)),Y=c.known={lat:w,lon:P,radius:C,state:"loading",rows:[],errors:[]};lt("known"),Dt();let it=(zt,Ht)=>mr(P*gt,w*gt,Ht*gt,zt*gt)*ee/1e3,yt=(async()=>{let zt=`SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${P} ${w})"^^geo:wktLiteral; wikibase:radius "${C}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`,Ht=()=>fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(zt)}`,{headers:{Accept:"application/sparql-results+json"},signal:AbortSignal.timeout(25e3)}),At=await Ht().catch(()=>null);if(At?.ok||(await new Promise(It=>setTimeout(It,1500)),At=await Ht()),!At.ok)throw new Error("Wikidata");for(let It of(await At.json()).results.bindings){let qt=/Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(It.coord.value);!qt||/^Q\d+$/.test(It.itemLabel.value)||Y.rows.push({name:It.itemLabel.value,type:It.inst?.value??"",url:It.item.value.replace("http://","https://"),km:it(Number(qt[2]),Number(qt[1])),site:Ft.test(It.inst?.value??"")})}})().catch(()=>Y.errors.push("Wikidata")),Mt=(async()=>{let zt=`[out:json][timeout:12];(nwr["historic"](around:${Math.min(C,8)*1e3},${w},${P}););out center tags 600;`,Ht=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:`data=${encodeURIComponent(zt)}`,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(4e4)});if(!Ht.ok)throw new Error("OpenStreetMap");for(let At of(await Ht.json()).elements){let It=At.lat??At.center?.lat,qt=At.lon??At.center?.lon,wt=At.tags??{};It==null||!wt.name||["memorial","wayside_cross","wayside_shrine","boundary_stone","milestone"].includes(wt.historic)||Y.rows.push({name:wt.name,type:[wt.historic,wt.site_type].filter(Boolean).join(", ").replaceAll("_"," "),url:`https://www.openstreetmap.org/${At.type}/${At.id}`,km:it(It,qt),site:!0})}})().catch(()=>Y.errors.push("OpenStreetMap")),Pt=()=>{if(c.known!==Y)return;let zt=new Map;for(let Ht of Y.rows.sort((At,It)=>At.km-It.km)){let At=Ps(Ht.name);(!zt.has(At)||Ht.site&&!zt.get(At).site)&&zt.set(At,Ht)}if(Y.rows=[...zt.values()].sort((Ht,At)=>Ht.km-At.km),c.sheet==="known"){let Ht=h.scrollTop;Dt(),h.scrollTop=Ht}};yt.then(Pt),await Promise.all([yt,Mt]),Y.state="done",Pt()},Wt=()=>{let w=e.state(),P={ll:`${w.lat.toFixed(5)},${w.lon.toFixed(5)}`,r:Math.round(w.range)};return Math.abs(w.heading)>.5&&(P.hd=Math.round(w.heading)),w.tilt>.5&&(P.t=Math.round(w.tilt)),Math.abs(s.uSea.value)>=1&&(P.sea=Math.round(s.uSea.value)),s.uWater.value<.5&&(P.dry=1),s.uLens.value&&(P.lens=s.uLens.value),s.uExag.value!==1&&(P.x=s.uExag.value),c.legend&&(P.l=c.legend.id),c.legend&&c.place&&(c.place!==c.legend.main||c.legend===_)&&(P.p=c.place.id),d?.a.scene&&(d.a.mode!=="all"&&d.a.step<0&&(P.m=d.a.mode),d.a.step>=0&&(P.s=d.a.step+1)),i.city.active&&(P.city=`${i.city.site.lat.toFixed(4)},${i.city.site.lon.toFixed(4)},${i.city.params.seaBearing}`),c.overlay&&(P.o=c.overlay.form.id?`${c.overlay.id}.${c.overlay.form.id}`:c.overlay.id),P},Rt=(w,P)=>{let U=P?{...w}:{...Wt(),...w};if(c.host?.community)return`https://abstracts.co/a/${c.host.community}?${Object.entries(U).map(([Y,it])=>`a_${Y}=${encodeURIComponent(it)}`).join("&")}`;let C=new URL(location.href);return C.search=new URLSearchParams(U).toString(),C.toString()},Ct=async({text:w,url:P,both:U})=>{try{if(c.host){let C=await bi("share",{url:P,text:w});y(C?.shared===!1?"Not shared":"Ready to share");return}if(navigator.share&&matchMedia("(hover: none)").matches){await navigator.share({text:U??`${w}
${P}`});return}await navigator.clipboard.writeText(U??`${w}
${P}`),y("Copied. Paste it anywhere.")}catch(C){if(C?.code==="cancelled"||C?.name==="AbortError")return;prompt("Copy this",U??`${w}
${P}`)}},Ut=async()=>{let w=Rt(),P=c.legend?`${c.legend.name}: ${c.place?.name??""}`.trim():"A view of the Earth";try{if(c.host){let U=await bi("share",{url:w,text:P});y(U?.shared===!1?"Not shared":"Link ready to share");return}await navigator.clipboard.writeText(w),y("Link copied")}catch(U){if(U?.code==="cancelled")return;prompt("Copy this link",w)}},st=async()=>{if(!c.host)return y("Open this on abstracts.co to post");if(!c.host.signedIn){try{await bi("signIn")}catch{y("Sign in to post")}return}let w=await new Promise(Y=>{i.snap=Y});if(!w)return y("Could not take the picture");let P=e.state(),U=An(P.lat,P.lon,3),C=`${c.legend?`${c.legend.name}${c.place?`, ${c.place.name}`:""}`:"Looking at"} ${U}${Math.abs(s.uSea.value)>=1?`, sea at ${hs(s.uSea.value)}`:""}

${Rt()}`;try{(await bi("post",{text:C,media:[new File([w],"view.jpg",{type:"image/jpeg"})]}))?.post?.url&&y("Posted")}catch(Y){Y?.code!=="cancelled"&&y(Y?.code==="signed_out"?"Sign in to post":"Could not post")}};o.addEventListener("click",w=>{let P=w.target.closest("[data-act]");if(!P)return;let U=P.dataset.act;if(!d?.click(U,P)&&!b?.click(U,P)){if(U==="close")F();else if(U==="city-off")i.city.remove(),i.stamp++,F(),nt();else if(U==="place"){let C=c.legend.places[Number(P.dataset.i)];c.place=C,k(),e.flyTo(I(C))}else if(U==="sea-to")tt(Number(P.dataset.m),!1),c.sheet==="sea"?at():y(`Sea level ${hs(Number(P.dataset.m))}`);else if(U==="share")Ut();else if(U==="post")st();else if(U==="lens")s.uLens.value=Number(P.dataset.v),Tt();else if(U==="overlay"){let C=L.find(it=>it.id===P.dataset.id);ot(c.overlay?.id===C.id?null:C);let Y=h.scrollTop;Tt(),h.scrollTop=Y}else if(U==="overlay-form"){ot(L.find(Y=>Y.id===c.overlay.id),P.dataset.form);let C=h.scrollTop;Tt(),h.scrollTop=C}else if(U==="overlay-go"){let C=c.overlay?.s.coverage?.bbox;C&&e.flyTo({lon:(C[0]+C[2])/2*gt,lat:(C[1]+C[3])/2*gt,range:$t(Math.max(C[2]-C[0],C[3]-C[1])*111e3*1.1,2e4,12e6)})}else if(U==="city"){let C=c.legend.places[Number(P.dataset.i)];ft(C.lat,C.lon)}else if(U==="city-notes")bt();else if(U==="known-here"){let C=c.legend.places[Number(P.dataset.i)];ne(C.lat,C.lon,Math.max(C.precision_km??10,5))}else if(U==="known-again"){let C=e.state();ne(C.lat,C.lon,e.range/4e3)}}}),o.addEventListener("input",w=>{let P=w.target;if(P.id==="sea-range"){tt(Number(P.value)),Kt("#sea-big").innerHTML=`${hs(Number(P.value))}<small>against today</small>`;for(let U of h.querySelectorAll(".presets .chip"))U.classList.toggle("on",Number(U.dataset.m)===Number(P.value)&&s.uWater.value>.5)}else P.id==="sea-off"?tt(s.uSea.value,P.checked):P.id==="exag"?(s.uExag.value=Number(P.value),Kt("#exag-out").textContent=`${Number(P.value).toFixed(1)}\xD7`,n.fitCaps()):P.id==="sun-az"?(i.sun.azimuth=Number(P.value),Kt("#az-out").textContent=Et(Number(P.value))):P.id==="sun-alt"?(i.sun.altitude=Number(P.value),Kt("#alt-out").textContent=`${P.value}\xB0`):P.id==="opt-shadows"?s.uShadows.value=P.checked?1:0:P.id==="opt-contours"?s.uContours.value=P.checked?1:0:P.id==="opt-night"?s.uNightOn.value=P.checked?1:0:P.id==="over-mix"&&(c.overlayMix=Number(P.value),s.uOverMix.value=c.overlayMix,P.previousElementSibling.textContent=`${Math.round(c.overlayMix*100)}%`)});let Vt=(w,P)=>()=>{if(c.sheet===w)return F();d?.a.scene||(c.legend=c.place=null),lt(w),P()};Kt("#b-layers").addEventListener("click",Vt("layers",Tt)),Kt("#b-sea").addEventListener("click",Vt("sea",at)),Kt("#b-known").addEventListener("click",()=>{if(c.sheet==="known")return F();d?.a.scene||(c.legend=c.place=null);let w=e.state();ne(w.lat,w.lon,e.range/4e3)}),Kt("#z-in").addEventListener("click",()=>e.zoomBy(.5)),Kt("#z-out").addEventListener("click",()=>e.zoomBy(2)),Kt("#compass").addEventListener("click",()=>e.flyTo({heading:0,tilt:0},.7)),Kt("#credit").addEventListener("click",()=>{let w=n.layers,P=[vr.terrarium.credit,e.range>8e5?w.globe?.credit:w.base.credit,c.overlay?.form.layer.credit,s.uNightOn.value>.5?w.night.credit:null].filter(Boolean);y(`Showing: ${P.join(" \xB7 ")}`,6e3)}),Kt("#intro").addEventListener("click",w=>{let P=w.target.closest("[data-act]")?.dataset.act;if(P==="start"){let U=_??[...f].sort((C,Y)=>Y.weight-C.weight)[0];U&&O(U,null,!0)}P==="tour"&&R.start(),P==="enter"&&pt.enterCity("gate"),P==="hunt"&&(Kt("#intro").classList.add("gone"),e.idle=!1),P==="board"&&(Kt("#intro").classList.add("gone"),d?.openBoard()),P==="sea"&&(_&&tt(-50,!1),lt("sea"),at())}),e.onTap=(w,P)=>{Kt("#results").classList.remove("open"),d?.hidePop(),x?.tap(w,P)},addEventListener("keydown",w=>{w.key==="Escape"&&(R.on?R.stop():d?.boardOpen?d.closeBoard():v?.on&&c.sheet?lt(null):d?.hidePop())}),a.addEventListener("pointerdown",()=>{Kt("#intro").classList.add("gone"),Kt("#q").blur(),Kt("#results").classList.remove("open"),j(!1)});let St=Kt("#q"),Bt=Kt("#results"),vt=[],Lt=0,kt=()=>{let w=St.value.trim();if(!w){Bt.classList.remove("open");return}let P=Ef(w);vt=P?[{coords:P}]:Af(f,w,7),!P&&w.length>=3&&vt.push({geocode:w}),Lt=Math.min(Lt,vt.length-1),Bt.innerHTML=vt.map((U,C)=>U.coords?`<button class="res${C===Lt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${An(U.coords.lat,U.coords.lon,4)}</b></span><small>Go to coordinates</small></button>`:U.geocode?`<button class="res${C===Lt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--faint)"></span><span>Find \u201C<b>${ue(U.geocode)}</b>\u201D on the map</span><small>Place search</small></button>`:`<button class="res s-${U.legend.status}${C===Lt?" sel":""}" data-i="${C}"><span class="bullet"></span><span><b>${ue(U.place?U.place.name:U.legend.name)}</b>${U.place?` <em>${ue(U.legend.name)}</em>`:""}</span><small>${ue(U.place?Is[U.place.standing]??"":bh[U.legend.kind]??"")}</small></button>`).join("")||'<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>',Bt.classList.add("open")},Nt=async w=>{if(w){if(Bt.classList.remove("open"),w.coords){e.flyTo({lon:w.coords.lon*gt,lat:w.coords.lat*gt,range:Math.min(e.range,6e4)}),St.blur();return}if(w.geocode){try{let U=(await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(w.geocode)}`).then(Mt=>Mt.json())).features?.[0];if(!U)return y(`No place called \u201C${w.geocode}\u201D`);let[C,Y]=U.geometry.coordinates,it=U.properties.extent,yt=it?Math.max(Math.abs(it[2]-it[0])*Math.cos(Y*gt),Math.abs(it[1]-it[3]))*111e3:3e4;e.flyTo({lon:C*gt,lat:Y*gt,range:$t(yt*1.6,3e3,4e6)}),y(`${U.properties.name??w.geocode}${U.properties.country?`, ${U.properties.country}`:""} \xB7 place search by Photon, \xA9 OpenStreetMap`,3800),St.blur()}catch{y("Place search is not answering")}return}St.value=w.legend.name,O(w.legend,w.place??null,!0)}};St.addEventListener("input",()=>{Lt=0,kt()}),St.addEventListener("focus",()=>{Kt("#intro").classList.add("gone"),kt()}),St.addEventListener("keydown",w=>{w.key==="ArrowDown"&&(Lt=Math.min(Lt+1,vt.length-1),kt(),w.preventDefault()),w.key==="ArrowUp"&&(Lt=Math.max(Lt-1,0),kt(),w.preventDefault()),w.key==="Escape"&&(Bt.classList.remove("open"),St.blur())}),Kt("#search").addEventListener("submit",w=>{w.preventDefault(),Nt(vt[Lt])}),Bt.addEventListener("click",w=>{let P=w.target.closest("[data-i]");P&&Nt(vt[Number(P.dataset.i)])});let V=0,E=Kt("#where"),ct=Kt("#compass svg");i.onFrame=(w=.016)=>{if(g?.sync(),m?.tick(w),R?.tick(),v?.on||(J(),d?.placeMarks(),b?.tick(),e.idle||Kt("#intro").classList.add("gone"),++V%8))return;let P=e.hover&&!e.pointers.size&&matchMedia("(hover: hover)").matches?e.pick(e.hover.x,e.hover.y):null,U=P?P.lat/gt:e.lat/gt,C=P?P.lon/gt:e.lon/gt,Y=P?P.height:n.heightAt(e.lon,e.lat),it=s.uSea.value,yt=Y==null?"":Y<-.6?`<b>${Math.round(-Y).toLocaleString("en")} m</b> below today's sea${s.uWater.value>.5&&Y<it?"":", dry"}`:`<b>${Math.round(Y).toLocaleString("en")} m</b>`;E.innerHTML=`${An(U,C,e.range<5e4?4:2)} \xB7 ${yt} \xB7 eye ${wd(e.altitude)}`,ct.style.transform=`rotate(${(-e.heading/gt).toFixed(1)}deg)`,r.classList.toggle("turned",Math.abs(e.heading)>.02||e.tilt>.03),r.classList.toggle("dots",!!c.hunt&&!c.legend),nt()};let pt={world:i,data:t,st:c,$:Kt,esc:ue,link:ba,metres:hs,toast:y,setSheet:lt,closeSheet:F,body:h,eyebrow:u,sheet:o,stage:r,pinsEl:l,project:M,setSea:tt,standCity:ft,checkKnown:ne,viewFor:I,drawTag:nt,drawCity:bt,strataColour:yh,overlays:L,setOverlay:ot,shortName:ga,shareUrl:(w,P)=>Rt(w,P),shareOut:w=>Ct(w),pulse:w=>{p=w??null},tourOn:()=>!1};pt.sound=Jf(pt),d=Bf(pt),pt.leaveScene=()=>d?.leaveScene(),pt.fitAt=(w,P)=>d?.runFit(void 0,{lat:w,lon:P}),pt.busy=()=>!!(d?.a.scene||d?.boardOpen||R.on||!Kt("#intro").classList.contains("gone")||v?.on||i.city.active&&e.range<9e4||c.sheet==="fit"||c.sheet==="legend"||c.sheet&&r.clientWidth<760),b=d?Yf(pt):null,c.hunt=!!b;let R=Hf(pt,d,b);pt.tour=()=>R.start(),pt.tourOn=()=>R.on,x=Gf(pt),pt.cityBar=x,pt.home=ql,Object.defineProperty(pt,"host",{get:()=>c.host??null}),v=Wf(pt),g=$f(pt,{A:d,H:b,walk:v}),m=Xf(pt,{walk:v}),pt.walkOn=()=>v.on,pt.leaveWalk=()=>{v.on&&v.leave(!1)},pt.onWalk=w=>{w?(m.arrive(),c.sheet&&lt(null)):m.leave(),x.sync(),nt()},pt.walkPan=w=>{v.state.pan=w},pt.enterCity=(w="gate",P=!1,U={})=>{if(!P&&R.on)return R.stop();d?.leaveScene(),d?.closeBoard(),c.legend=c.place=null,lt(null),Kt("#intro").classList.add("gone"),e.idle=!1,i.city.active||i.city.place({lat:ql.lat,lon:ql.lon,bearing:ql.bearing}),Math.abs(s.uSea.value)>.6&&tt(0,!1);let C=i.city.city.hall;P||H(),v.enter({...w==="hall"?{x:0,y:-(C.RI-6),look:[0,0]}:{x:0,y:-(C.RG+15),look:[0,0]},grab:!P,...U})},pt.openGlobe=(w=!0)=>{lt(null);let P=i.city.site;pt.leaveWalk(),w&&(H(),e.flyTo({lon:(P?.lon??-30)*gt,lat:(P?.lat??25)*gt,range:135e5,tilt:0,heading:0},3.6)),Kt("#b-city").hidden=!d};let H=()=>{r.classList.remove("blink"),r.offsetWidth,r.classList.add("blink")};Kt("#walk").addEventListener("click",w=>{let P=w.target.closest("[data-act]")?.dataset.act;P==="w-up"?v.leave(!0):P==="w-hall"?pt.enterCity("hall"):P==="w-globe"&&pt.openGlobe()}),Kt("#b-city").addEventListener("click",()=>pt.enterCity((i.city.active,"gate"))),N(),tt(s.uSea.value),e.idle&&e.jump({range:175e5/Math.min(1,r.clientWidth/r.clientHeight)**.55});let K=w=>{if(!w)return;let P=Y=>w[Y]==null||w[Y]===""||!Number.isFinite(Number(w[Y]))?null:Number(w[Y]);if(P("x")!=null&&(s.uExag.value=$t(P("x"),1,12)),P("lens")!=null&&(s.uLens.value=$t(Math.round(P("lens")),0,2)),(P("sea")!=null||w.dry)&&tt(P("sea")??0,!!w.dry),w.o){let[Y,it]=String(w.o).split("."),yt=L.find(Mt=>Mt.id===Y);yt&&ot(yt,it)}if(typeof w.city=="string"){let Y=w.city.split(",").map(Number);Number.isFinite(Y[0])&&Number.isFinite(Y[1])&&ft(Y[0],Y[1],Number.isFinite(Y[2])?Y[2]:180,!1)}let U=w.l&&f.find(Y=>Y.id===w.l);U&&O(U,U.places.find(Y=>Y.id===w.p)??null,!1),d?.a.scene&&(["claimed","found"].includes(w.m)&&d.setMode(w.m),P("s")!=null&&d.setStep($t(Math.round(P("s"))-1,-1,d.a.scene.story.length-1)));let C=typeof w.ll=="string"&&w.ll.split(",").map(Number);if(C&&C.length===2&&C.every(Number.isFinite)?(e.jump({lat:$t(C[0],-89,89)*gt,lon:C[1]*gt,range:$t(P("r")??2e6,i.city.active?14:150,e.maxRange),heading:(P("hd")??0)*gt,tilt:$t(P("t")??0,0,i.city.active?88.5:84)*gt}),e.idle=!1):U&&c.place?(e.jump(d?.a.scene?i.evidence.viewOf(null):I(c.place)),e.idle=!1):i.city.active&&(e.jump(i.city.view()),e.idle=!1),(w.ll||U||i.city.active)&&Kt("#intro").classList.add("gone"),w.board&&d&&(Kt("#intro").classList.add("gone"),d.openBoard()),typeof w.hunt=="string"&&b){let Y=w.hunt.split(",").map(Number);if(Y.length===2&&Y.every(Number.isFinite)){Kt("#intro").classList.add("gone"),e.idle=!1;let it=()=>b.ready?b.claim($t(Y[0],-85,85),Y[1],!w.ll):setTimeout(it,150);it()}}w.tour&&d&&R.start(),(w.walk||w.hall)&&d&&pt.enterCity(w.hall?"hall":"gate")};K(Object.fromEntries(new URLSearchParams(location.search))),Rf().then(w=>{c.host=w,w?.launch&&Object.keys(w.launch).length&&K(w.launch)}),_&&(Kt("#intro h1").textContent="Atlantis",Kt('#intro [data-act="start"]').textContent=b?"Famous claims":"Explore the places"),Kt('#intro [data-act="hunt"]').hidden=!b,b&&(Kt('#intro [data-act="tour"]').textContent="Watch the story");for(let w of document.querySelectorAll("#intro [data-atlantis], #menu [data-atlantis]"))w.hidden=!d;return Kt('#intro [data-act="start"]').hidden=!!b,d&&(Kt("#m-claims").textContent=d.stats.places),b||(Kt("#brand").textContent=_?"Where was Atlantis?":"Lost places"),Kt('#intro [data-act="sea"]').hidden=!!d,Kt('#intro [data-act="enter"]').hidden=!d,Kt("#b-city").hidden=!d,{st:c,selectLegend:O,setSea:tt,setOverlay:ot,overlays:L,apply:K,viewParams:Wt,A:d,H:b,tour:R,cityBar:x,walk:v,hall:g,meet:m,enterCity:pt.enterCity,openGlobe:pt.openGlobe,sound:pt.sound}};var Qf=document.getElementById("view"),ki=new URLSearchParams(location.search),$y=globalThis.__ASSETS__||"./",tp=()=>{document.getElementById("fail").style.display="grid",document.getElementById("veil").classList.add("gone")},qy=async()=>{if(!Qf.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))return tp();let i;try{i=bf(Qf,{phone:ki.get("phone")==="1"?!0:ki.get("phone")==="0"?!1:void 0})}catch(r){return console.error(r),tp()}globalThis.world=i;let t=await Tf($y);globalThis.ui=Kf(i,t);let e=r=>ki.get(r)===null?null:Number(ki.get(r));if(e("az")!==null&&(i.sun.azimuth=e("az")),e("alt")!==null&&(i.sun.altitude=e("alt")),e("exp")!==null&&(i.exposure=e("exp")),e("air")!==null&&(i.air=e("air")),e("shadows")!==null&&(i.globe.shared.uShadows.value=e("shadows")),e("night")!==null&&(i.globe.shared.uNightOn.value=e("night")),ki.get("still")&&(i.control.idle=!1),globalThis.__STILL__&&(i.control.spin=!1,i.restSoon=!0),ki.get("clean")){for(let r of["bar","kinds","zoom","readout","intro","seatag","results"])document.getElementById(r).style.display="none";ki.get("clean")==="2"&&(document.getElementById("pins").style.display="none")}ki.get("sheet")==="layers"&&document.getElementById("b-layers").click(),ki.get("sheet")==="sea"&&document.getElementById("b-sea").click();let n=document.getElementById("veil"),s=()=>i.globe.ready?n.classList.add("gone"):setTimeout(s,100);s(),setTimeout(()=>n.classList.add("gone"),12e3)};qy();
