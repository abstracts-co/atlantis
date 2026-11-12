var iu=0,Sc=1,su=2;var bs=1,ru=2,rr=3,ts=0,nn=1,sn=2,ws=0,ar=1,Tc=2,Ec=3,Ac=4,Zr=5;var Ms=100,au=101,ou=102,lu=103,cu=104,jr=200,Jr=201,hu=202,uu=203,or=204,lr=205,du=206,fu=207,pu=208,mu=209,gu=210,vu=211,xu=212,yu=213,_u=214,qa=0,Xa=1,Ya=2,Js=3,Za=4,ja=5,Ja=6,Ka=7,Rc=0,bu=1,wu=2,di=0,Cc=1,Pc=2,Ic=3,Lc=4,Dc=5,Nc=6,Fc=7;var Uc=300,Ss=301,cr=302,So=303,To=304,Pi=1e3,_n=1001,Qa=1002,Ue=1003,Mu=1004;var Kr=1005;var Ae=1006,Eo=1007;var rn=1008;var an=1009,kc=1010,Oc=1011,hr=1012,Ao=1013,ii=1014,Tn=1015,je=1016,Ro=1017,Co=1018,Ts=1020,Bc=35902,zc=35899,Hc=1021,Gc=1022,Ye=1023,Ii=1026,Di=1027,fi=1028,Po=1029,es=1030,Io=1031;var Lo=1033,Qr=33776,ta=33777,ea=33778,na=33779,Do=35840,No=35841,Fo=35842,Uo=35843,ko=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,ia=37490,Go=37491,Vo=37808,Wo=37809,$o=37810,qo=37811,Xo=37812,Yo=37813,Zo=37814,jo=37815,Jo=37816,Ko=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,sa=36285,ll=36286;var Pr=2300,to=2301,Wa=2302,gc=2303,vc=2400,xc=2401,yc=2402;var Su=3200;var cl=0,Tu=1,Bn="",Ie="srgb",xs="srgb-linear",Ir="linear",Se="srgb";var $a=7680;var Eu=519,Au=512,Ru=513,Cu=514,Vc=515,Pu=516,Iu=517,Wc=518,$c=519,Lu=35044;var ns="300 es",Vn=2e3,Ks=2001;function np(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Lr("canvas");return i.style.display="block",i}var Ph={},Qs=null;function qc(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function Nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Nu(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Nu(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cr(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,oe(...i))}function Fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[qa]:qa,[Ya]:Ja,[Za]:Za,[Js]:ja,[Xa]:Xa,[Ja]:Ya,[Ka]:Ka,[ja]:Js},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,eo=180/Math.PI;function ra(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function sp(i,t){return(i%t+t)%t}function Zl(i,t,e){return(1-e)*i+e*t}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rp(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ap(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(c!==v||o!==f||h!==d||u!==p){let g=o*f+h*d+u*p+c*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,l=Math.sin(l*x)/_,o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l}else{o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l;let x=1/Math.sqrt(o*o+h*h+u*u+c*c);o*=x,h*=x,u*=x,c*=x}}t[e]=o,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*c+o*d-h*f,t[e+1]=o*p+u*f+h*c-l*d,t[e+2]=h*p+u*d+l*f-o*c,t[e+3]=u*p-l*c-o*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(n/2),u=l(s/2),c=l(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"YXZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"ZXY":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"ZYX":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"YZX":this._x=f*u*c+h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c-f*d*p;break;case"XZY":this._x=f*u*c-h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c+f*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],u=e[6],c=e[10],f=n+l+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>l&&n>c){let d=2*Math.sqrt(1+n-l-c);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){let d=2*Math.sqrt(1+l-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-n-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,u=e._w;return this._x=n*u+a*l+s*h-r*o,this._y=s*u+a*o+r*l-n*h,this._z=r*u+a*h+n*o-s*l,this._w=a*u-n*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);o=Math.sin(o*h)/u,e=Math.sin(e*h)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pt=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*n),u=2*(l*e-r*s),c=2*(r*n-a*e);return this.x=e+o*h+a*c-l*u,this.y=n+o*u+l*h-r*c,this.z=s+o*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new pt,Ih=new Wn,de=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h)}set(t,e,n,s,r,a,l,o,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],_=s[4],b=s[7],S=s[2],A=s[5],y=s[8];return r[0]=a*v+l*x+o*S,r[3]=a*g+l*_+o*A,r[6]=a*m+l*b+o*y,r[1]=h*v+u*x+c*S,r[4]=h*g+u*_+c*A,r[7]=h*m+u*b+c*y,r[2]=f*v+d*x+p*S,r[5]=f*g+d*_+p*A,r[8]=f*m+d*b+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8];return e*a*u-e*l*h-n*r*u+n*l*o+s*r*h-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=u*a-l*h,f=l*o-u*r,d=h*r-a*o,p=e*c+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=c*v,t[1]=(s*h-u*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*o)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*o-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new de,Lh=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var _e=op();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Lr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lp=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var cp=0,Ql=new pt,cn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Ae,a=rn,l=Ye,o=an,h=i.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ra(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uc;cn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,h=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,b=(d+1)/2,S=(m+1)/2,A=(u+f)/4,y=(c+v)/4,T=(p+g)/4;return _>b&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=y/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=y/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(c-v)/x,this.z=(f-u)/x,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ys=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g)}set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=h,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=-o*c,e[8]=h,e[1]=d+p*h,e[5]=f-v*h,e[9]=-l*o,e[2]=v-f*h,e[6]=p+d*h,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f+v*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=v+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f-v*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=p*h-d,e[8]=f*h+v,e[1]=o*c,e[5]=v*h+f,e[9]=d*h-p,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=v-f*c,e[8]=p*c+d,e[1]=c,e[5]=a*u,e[9]=-l*u,e[2]=-h*u,e[6]=d*c+p,e[10]=f-v*c}else if(t.order==="XZY"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=-c,e[8]=h*u,e[1]=f*c+v,e[5]=a*u,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hp,t,up)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Hi.crossVectors(n,Dn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Hi.crossVectors(n,Dn)),Hi.normalize(),Ma.crossVectors(Dn,Hi),s[0]=Hi.x,s[4]=Ma.x,s[8]=Dn.x,s[1]=Hi.y,s[5]=Ma.y,s[9]=Dn.y,s[2]=Hi.z,s[6]=Ma.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],b=n[11],S=n[15],A=s[0],y=s[4],T=s[8],k=s[12],M=s[1],H=s[5],J=s[9],ft=s[13],F=s[2],V=s[6],O=s[10],Y=s[14],lt=s[3],et=s[7],X=s[11],G=s[15];return r[0]=a*A+l*M+o*F+h*lt,r[4]=a*y+l*H+o*V+h*et,r[8]=a*T+l*J+o*O+h*X,r[12]=a*k+l*ft+o*Y+h*G,r[1]=u*A+c*M+f*F+d*lt,r[5]=u*y+c*H+f*V+d*et,r[9]=u*T+c*J+f*O+d*X,r[13]=u*k+c*ft+f*Y+d*G,r[2]=p*A+v*M+g*F+m*lt,r[6]=p*y+v*H+g*V+m*et,r[10]=p*T+v*J+g*O+m*X,r[14]=p*k+v*ft+g*Y+m*G,r[3]=x*A+_*M+b*F+S*lt,r[7]=x*y+_*H+b*V+S*et,r[11]=x*T+_*J+b*O+S*X,r[15]=x*k+_*ft+b*Y+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=o*d-h*f,_=l*d-h*c,b=l*f-o*c,S=a*d-h*u,A=a*f-o*u,y=a*c-l*u;return e*(v*x-g*_+m*b)-n*(p*x-g*S+m*A)+s*(p*_-v*S+m*y)-r*(p*b-v*A+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],h=t[6],u=t[10];return e*(a*u-l*h)-n*(r*u-l*o)+s*(r*h-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*l-n*a,_=e*o-s*a,b=e*h-r*a,S=n*o-s*l,A=n*h-r*l,y=s*h-r*o,T=u*v-c*p,k=u*g-f*p,M=u*m-d*p,H=c*g-f*v,J=c*m-d*v,ft=f*m-d*g,F=x*ft-_*J+b*H+S*M-A*k+y*T;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return t[0]=(l*ft-o*J+h*H)*V,t[1]=(s*J-n*ft-r*H)*V,t[2]=(v*y-g*A+m*S)*V,t[3]=(f*A-c*y-d*S)*V,t[4]=(o*M-a*ft-h*k)*V,t[5]=(e*ft-s*M+r*k)*V,t[6]=(g*b-p*y-m*_)*V,t[7]=(u*y-f*b+d*_)*V,t[8]=(a*J-l*M+h*T)*V,t[9]=(n*M-e*J-r*T)*V,t[10]=(p*A-v*b+m*x)*V,t[11]=(c*b-u*A-d*x)*V,t[12]=(l*k-a*H-o*T)*V,t[13]=(e*H-n*k+s*T)*V,t[14]=(v*_-p*S-g*x)*V,t[15]=(u*S-c*_+f*x)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,h=r*a,u=r*l;return this.set(h*a+n,h*l-s*o,h*o+s*l,0,h*l+s*o,u*l+n,u*o-s*a,0,h*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,u=a+a,c=l+l,f=r*h,d=r*u,p=r*c,v=a*u,g=a*c,m=l*c,x=o*h,_=o*u,b=o*c,S=n.x,A=n.y,y=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+b)*S,s[2]=(p-_)*S,s[3]=0,s[4]=(d-b)*A,s[5]=(1-(f+m))*A,s[6]=(g+x)*A,s[7]=0,s[8]=(p+_)*y,s[9]=(g-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),l=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);let h=1/a,u=1/l,c=1/o;return Kn.elements[0]*=h,Kn.elements[1]*=h,Kn.elements[2]*=h,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=c,Kn.elements[9]*=c,Kn.elements[10]*=c,e.setFromRotationMatrix(Kn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(l===Vn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Ks)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(l===Vn)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===Ks)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ks=new pt,Kn=new xe,hp=new pt(0,0,0),up=new pt(1,1,1),Hi=new pt,Ma=new pt,Dn=new pt,Nh=new xe,Fh=new Wn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,Uh=new pt,Os=new Wn,Mi=new xe,Sa=new pt,Mr=new pt,fp=new pt,pp=new Wn,kh=new pt(1,0,0),Oh=new pt(0,1,0),Bh=new pt(0,0,1),zh={type:"added"},mp={type:"removed"},Bs={type:"childadded",child:null},tc={type:"childremoved",child:null},bn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new pt,e=new ei,n=new Wn,s=new pt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new de}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Mr,Sa,this.up):Mi.lookAt(Sa,Mr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Mi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mp),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new pt(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gp={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=sp(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return _e.workingToColorSpace(mn.copy(this),t),Math.round(be(mn.r*255,0,255))*65536+Math.round(be(mn.g*255,0,255))*256+Math.round(be(mn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,h,u=(l+a)/2;if(l===a)o=0,h=0;else{let c=a-l;switch(h=u<=.5?c/(a+l):c/(2-a-l),a){case n:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-n)/c+2;break;case r:o=(n-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Ie){_e.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Ta);let n=Zl(Gi.h,Ta.h,e),s=Zl(Gi.s,Ta.s,e),r=Zl(Gi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=Ou;var $n=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new pt,Si=new pt,nc=new pt,Ti=new pt,zs=new pt,Hs=new pt,Hh=new pt,ic=new pt,sc=new pt,rc=new pt,ac=new ge,oc=new ge,lc=new ge,qi=class i{constructor(t=new pt,e=new pt,n=new pt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Si.subVectors(n,e),nc.subVectors(t,e);let a=Qn.dot(Qn),l=Qn.dot(Si),o=Qn.dot(nc),h=Si.dot(Si),u=Si.dot(nc),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*o-l*u)*f,p=(a*u-l*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ti.x),o.addScaledVector(a,Ti.y),o.addScaledVector(l,Ti.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Si.subVectors(t,e),Qn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;zs.subVectors(s,n),Hs.subVectors(r,n),ic.subVectors(t,n);let o=zs.dot(ic),h=Hs.dot(ic);if(o<=0&&h<=0)return e.copy(n);sc.subVectors(t,s);let u=zs.dot(sc),c=Hs.dot(sc);if(u>=0&&c<=u)return e.copy(s);let f=o*c-u*h;if(f<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),e.copy(n).addScaledVector(zs,a);rc.subVectors(t,r);let d=zs.dot(rc),p=Hs.dot(rc);if(p>=0&&d<=p)return e.copy(r);let v=d*h-o*p;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(Hs,l);let g=u*p-d*c;if(g<=0&&c-u>=0&&d-p>=0)return Hh.subVectors(r,s),l=(c-u)/(c-u+(d-p)),e.copy(s).addScaledVector(Hh,l);let m=1/(g+v+f);return a=v*m,l=f*m,e.copy(n).addScaledVector(zs,a).addScaledVector(Hs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new pt(1/0,1/0,1/0),e=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Aa.subVectors(this.max,Sr),Gs.subVectors(t.a,Sr),Vs.subVectors(t.b,Sr),Ws.subVectors(t.c,Sr),Vi.subVectors(Vs,Gs),Wi.subVectors(Ws,Vs),ps.subVectors(Gs,Ws);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-ps.z,ps.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,ps.z,0,-ps.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-ps.y,ps.x,0];return!cc(e,Gs,Vs,Ws,Aa)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,Gs,Vs,Ws,Aa))?!1:(Ra.crossVectors(Vi,Wi),e=[Ra.x,Ra.y,Ra.z],cc(e,Gs,Vs,Ws,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],ti=new pt,Ea=new ci,Gs=new pt,Vs=new pt,Ws=new pt,Vi=new pt,Wi=new pt,ps=new pt,Sr=new pt,Aa=new pt,Ra=new pt,ms=new pt;function cc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ms.fromArray(i,r);let l=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),o=t.dot(ms),h=e.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var Ri=vp();function vp(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):h<-14?(n[o]=1024>>-h-14,n[o|256]=1024>>-h-14|32768,s[o]=-h-1,s[o|256]=-h-1):h<=15?(n[o]=h+15<<10,n[o|256]=h+15<<10|32768,s[o]=13,s[o|256]=13):h<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[o]=h|u}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function xp(i){Math.abs(i)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),i=be(i,-65504,65504),Ri.floatView[0]=i;let t=Ri.uint32View[0],e=t>>23&511;return Ri.baseTable[e]+((t&8388607)>>Ri.shiftTable[e])}function yp(i){let t=i>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[t]+(i&1023)]+Ri.exponentTable[t],Ri.floatView[0]}var Xi=class{static toHalfFloat(t){return xp(t)}static fromHalfFloat(t){return yp(t)}},Ve=new pt,Ca=new ie,_p=0,Le=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?Xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ap(t,this.array)}};var Dr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=new ci,Tr=new pt,hc=new pt,hi=class{constructor(t=new pt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(hc)),this.expandByPoint(Tr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wp=0,Gn=new xe,uc=new bn,$s=new pt,Nn=new ci,Er=new ci,en=new pt,Be=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(np(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Er.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(Nn.min,Er.min),Nn.expandByPoint(en),en.addVectors(Nn.max,Er.max),Nn.expandByPoint(en)):(Nn.expandByPoint(Er.min),Nn.expandByPoint(Er.max))}Nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)en.fromBufferAttribute(l,h),o&&($s.fromBufferAttribute(t,h),en.add($s)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[],h=new Uint8Array(n.count);for(let k=0;k<n.count;k++)l[k]=new pt,o[k]=new pt;let u=new pt,c=new pt,f=new pt,d=new ie,p=new ie,v=new ie,g=new pt,m=new pt;function x(k,M,H){h[k]=h[M]=h[H]=1,u.fromBufferAttribute(n,k),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,H),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,H),c.sub(u),f.sub(u),p.sub(d),v.sub(d);let J=1/(p.x*v.y-v.x*p.y);isFinite(J)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(J),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(J),l[k].add(g),l[M].add(g),l[H].add(g),o[k].add(m),o[M].add(m),o[H].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let k=0,M=_.length;k<M;++k){let H=_[k],J=H.start,ft=H.count;for(let F=J,V=J+ft;F<V;F+=3)x(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new pt,S=new pt,A=new pt,y=new pt;function T(k){A.fromBufferAttribute(s,k),y.copy(A);let M=l[k];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(y,M);let J=S.dot(o[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,J)}for(let k=0,M=n.count;k<M;++k)h[k]&&T(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new pt,r=new pt,a=new pt,l=new pt,o=new pt,h=new pt,u=new pt,c=new pt;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(u),o.add(u),h.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,c=l.normalized,f=new h.constructor(o.length*u),d=0,p=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Le(f,u,c)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let o=[],h=r[l];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let h=n[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new pt,Mp=new pt,Sp=new de,Fn=class{constructor(t=new pt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tp=0,Yi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=ar,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=lr,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new pt,fc=new pt,Pa=new pt,Ia=new pt,Fr=class{constructor(t=new pt,e=new pt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),h=Ia.lengthSq(),u=Math.abs(1-a*a),c,f,d,p;if(u>0)if(c=a*o-l,f=a*l-o,p=r*u,c>=0)if(f>=-p)if(f<=p){let v=1/u;c*=v,f*=v,d=c*(c+a*f+2*l)+f*(a*c+f+2*o)+h}else f=r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f=-r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f<=-p?(c=Math.max(0,-(-a*r+l)),f=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h):f<=p?(c=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+h):(c=Math.max(0,-(a*r+l)),f=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(fc).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-f.z)*c,o=(t.max.z-f.z)*c):(l=(t.max.z-f.z)*c,o=(t.min.z-f.z)*c),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,h=l.y,u=l.z,c=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,_=n.z-a.z,b=Math.abs(o),S=Math.abs(h),A=Math.abs(u),y,T,k,M,H,J,ft,F,V,O,Y,lt;if(b>=S&&b>=A?(k=o,J=c,V=p,lt=m,o>=0?(y=h,T=u,M=f,H=d,ft=v,F=g,O=x,Y=_):(y=u,T=h,M=d,H=f,ft=g,F=v,O=_,Y=x)):S>=A?(k=h,J=f,V=v,lt=x,h>=0?(y=u,T=o,M=d,H=c,ft=g,F=p,O=_,Y=m):(y=o,T=u,M=c,H=d,ft=p,F=g,O=m,Y=_)):(k=u,J=d,V=g,lt=_,u>=0?(y=o,T=h,M=c,H=f,ft=p,F=v,O=m,Y=x):(y=h,T=o,M=f,H=c,ft=v,F=p,O=x,Y=m)),k===0)return null;let et=y/k,X=T/k,G=1/k,$=M-et*J,N=H-X*J,L=ft-et*V,st=F-X*V,nt=O-et*lt,ut=Y-X*lt,j=nt*st-ut*L,ct=$*ut-N*nt,vt=L*N-st*$;if(s){if(j<0||ct<0||vt<0)return null}else if((j<0||ct<0||vt<0)&&(j>0||ct>0||vt>0))return null;let mt=j+ct+vt;if(mt===0)return null;let P=G*(j*J+ct*V+vt*lt);return(mt>0?P<0:P>0)?null:this.at(P/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new xe,gs=new Fr,La=new hi,Vh=new pt,Da=new pt,Na=new pt,Fa=new pt,pc=new pt,Ua=new pt,Wh=new pt,ka=new pt,pe=class extends bn{constructor(t=new Be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ua.set(0,0,0);for(let o=0,h=r.length;o<h;o++){let u=l[o],c=r[o];u!==0&&(pc.fromBufferAttribute(c,t),a?Ua.addScaledVector(pc,u):Ua.addScaledVector(pc.sub(e),u))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(La.containsPoint(gs.origin)===!1&&(gs.intersectSphere(La,Vh)===null||gs.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,S=_;b<S;b+=3){let A=l.getX(b),y=l.getX(b+1),T=l.getX(b+2);s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=l.getX(g),_=l.getX(g+1),b=l.getX(g+2);s=Oa(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,S=_;b<S;b+=3){let A=b,y=b+1,T=b+2;s=Oa(this,m,t,n,h,u,c,A,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,_=g+1,b=g+2;s=Oa(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ep(i,t,e,n,s,r,a,l){let o;if(t.side===nn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===ts,l),o===null)return null;ka.copy(l),ka.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ka);return h<e.near||h>e.far?null:{distance:h,point:ka.clone(),object:i}}function Oa(i,t,e,n,s,r,a,l,o,h){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(h,Fa);let u=Ep(i,t,e,n,Da,Na,Fa,Wh);if(u){let c=new pt;qi.getBarycoord(Wh,Da,Na,Fa,c),s&&(u.uv=qi.getInterpolatedAttribute(s,l,o,h,c,new ie)),r&&(u.uv1=qi.getInterpolatedAttribute(r,l,o,h,c,new ie)),a&&(u.normal=qi.getInterpolatedAttribute(a,l,o,h,c,new pt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new pt,materialIndex:0};qi.getNormal(Da,Na,Fa,f.normal),u.face=f,u.barycoord=c}return u}var Sn=class extends cn{constructor(t=null,e=1,n=1,s,r,a,l,o,h=Ue,u=Ue,c,f){super(null,a,l,o,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new xe,$h=new xe,Ba=[],qh=new ci,Ap=new xe,Ar=new pe,Rr=new hi,kr=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ap)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),qh.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Rr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),$h.multiplyMatrices(n,qs),Ar.matrixWorld=$h,Ar.raycast(t,Ba);for(let a=0,l=Ba.length;a<l;a++){let o=Ba[a];o.instanceId=r,o.object=this,e.push(o)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,fi,Tn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new hi,Rp=new ie(.5,.5),za=new pt,ui=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],_=r[13],b=r[14],S=r[15];if(s[0].setComponents(h-a,d-u,m-p,S-x).normalize(),s[1].setComponents(h+a,d+u,m+p,S+x).normalize(),s[2].setComponents(h+l,d+c,m+v,S+_).normalize(),s[3].setComponents(h-l,d-c,m-v,S-_).normalize(),n)s[4].setComponents(o,f,g,b).normalize(),s[5].setComponents(h-o,d-f,m-g,S-b).normalize();else if(s[4].setComponents(h-o,d-f,m-g,S-b).normalize(),e===Vn)s[5].setComponents(h+o,d+f,m+g,S+b).normalize();else if(e===Ks)s[5].setComponents(o,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=Rp.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xh=new xe,ro=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(Xh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ui),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Or=class extends cn{constructor(t=[],e=Ss,n,s,r,a,l,o,h,u){super(t,e,n,s,r,a,l,o,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends cn{constructor(t,e,n,s,r,a,l,o,h){super(t,e,n,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends cn{constructor(t,e,n=ii,s,r,a,l=Ue,o=Ue,h,u=Ii,c=1){if(u!==Ii&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,l,o,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Br=class extends ni{constructor(t,e=ii,n=Ss,s,r,a=Ue,l=Ue,o,h=Ii){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],h=[],u=[],c=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(c,2));function p(v,g,m,x,_,b,S,A,y,T,k){let M=b/y,H=S/T,J=b/2,ft=S/2,F=A/2,V=y+1,O=T+1,Y=0,lt=0,et=new pt;for(let X=0;X<O;X++){let G=X*H-ft;for(let $=0;$<V;$++){let N=$*M-J;et[v]=N*x,et[g]=G*_,et[m]=F,h.push(et.x,et.y,et.z),et[v]=0,et[g]=0,et[m]=A>0?1:-1,u.push(et.x,et.y,et.z),c.push($/y),c.push(1-X/T),Y+=1}}for(let X=0;X<T;X++)for(let G=0;G<y;G++){let $=f+G+V*X,N=f+G+V*(X+1),L=f+(G+1)+V*(X+1),st=f+(G+1)+V*X;o.push($,N,st),o.push(N,L,st),lt+=6}l.addGroup(d,lt,k),d+=lt,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hr=class i extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,p=n*2+r,v=s+1,g=new pt,m=new pt;for(let x=0;x<=p;x++){let _=0,b=0,S=0,A=0;if(x<=n){let k=x/n,M=k*Math.PI/2;b=-u-t*Math.cos(M),S=t*Math.sin(M),A=-t*Math.cos(M),_=k*c}else if(x<=n+r){let k=(x-n)/r;b=-u+k*e,S=t,A=0,_=c+k*f}else{let k=(x-n-r)/n,M=k*Math.PI/2;b=u+t*Math.sin(M),S=t*Math.cos(M),A=t*Math.sin(M),_=c+f+k*c}let y=Math.max(0,Math.min(1,_/d)),T=0;x===0?T=.5/s:x===p&&(T=-.5/s);for(let k=0;k<=s;k++){let M=k/s,H=M*Math.PI*2,J=Math.sin(H),ft=Math.cos(H);m.x=-S*ft,m.y=b,m.z=S*J,l.push(m.x,m.y,m.z),g.set(-S*ft,A,S*J),g.normalize(),o.push(g.x,g.y,g.z),h.push(M+T,y)}if(x>0){let k=(x-1)*v;for(let M=0;M<s;M++){let H=k+M,J=k+M+1,ft=x*v+M,F=x*v+M+1;a.push(H,J,ft),a.push(J,F,ft)}}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Gr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],h=new pt,u=new ie;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){let d=n+c/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ji=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],p=0,v=[],g=n/2,m=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){let b=new pt,S=new pt,A=0,y=(e-t)/n;for(let T=0;T<=r;T++){let k=[],M=T/r,H=M*(e-t)+t;for(let J=0;J<=s;J++){let ft=J/s,F=ft*o+l,V=Math.sin(F),O=Math.cos(F);S.x=H*V,S.y=-M*n+g,S.z=H*O,c.push(S.x,S.y,S.z),b.set(V,y,O).normalize(),f.push(b.x,b.y,b.z),d.push(ft,1-M),k.push(p++)}v.push(k)}for(let T=0;T<s;T++)for(let k=0;k<r;k++){let M=v[k][T],H=v[k+1][T],J=v[k+1][T+1],ft=v[k][T+1];(t>0||k!==0)&&(u.push(M,H,ft),A+=3),(e>0||k!==r-1)&&(u.push(H,J,ft),A+=3)}h.addGroup(m,A,0),m+=A}function _(b){let S=p,A=new ie,y=new pt,T=0,k=b===!0?t:e,M=b===!0?1:-1;for(let J=1;J<=s;J++)c.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let H=p;for(let J=0;J<=s;J++){let F=J/s*o+l,V=Math.cos(F),O=Math.sin(F);y.x=k*O,y.y=g*M,y.z=k*V,c.push(y.x,y.y,y.z),f.push(0,M,0),A.x=V*.5+.5,A.y=O*.5*M+.5,d.push(A.x,A.y),p++}for(let J=0;J<s;J++){let ft=S+J,F=H+J;b===!0?u.push(F,F+1,ft):u.push(F+1,F,ft),T+=3}h.addGroup(m,T,b===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class i extends ji{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),h(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let _=new pt,b=new pt,S=new pt;for(let A=0;A<e.length;A+=3)d(e[A+0],_),d(e[A+1],b),d(e[A+2],S),o(_,b,S,x)}function o(x,_,b,S){let A=S+1,y=[];for(let T=0;T<=A;T++){y[T]=[];let k=x.clone().lerp(b,T/A),M=_.clone().lerp(b,T/A),H=A-T;for(let J=0;J<=H;J++)J===0&&T===A?y[T][J]=k:y[T][J]=k.clone().lerp(M,J/H)}for(let T=0;T<A;T++)for(let k=0;k<2*(A-T)-1;k++){let M=Math.floor(k/2);k%2===0?(f(y[T][M+1]),f(y[T+1][M]),f(y[T][M])):(f(y[T][M+1]),f(y[T+1][M+1]),f(y[T+1][M]))}}function h(x){let _=new pt;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(x),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let x=new pt;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let b=g(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;a.push(b,1-S)}p(),c()}function c(){for(let x=0;x<a.length;x+=6){let _=a[x+0],b=a[x+2],S=a[x+4],A=Math.max(_,b,S),y=Math.min(_,b,S);A>.9&&y<.1&&(_<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,_){let b=x*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function p(){let x=new pt,_=new pt,b=new pt,S=new pt,A=new ie,y=new ie,T=new ie;for(let k=0,M=0;k<r.length;k+=9,M+=6){x.set(r[k+0],r[k+1],r[k+2]),_.set(r[k+3],r[k+4],r[k+5]),b.set(r[k+6],r[k+7],r[k+8]),A.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),S.copy(x).add(_).add(b).divideScalar(3);let H=g(S);v(A,M+0,x,H),v(y,M+2,_,H),v(T,M+4,b,H)}}function v(x,_,b,S){S<0&&x.x===1&&(a[_]=x.x-1),b.x===0&&b.z===0&&(a[_]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Wr=class i extends ao{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Un=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),h=l+1,u=o+1,c=t/l,f=e/o,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*f-a;for(let _=0;_<h;_++){let b=_*c-r;p.push(b,-x,0),v.push(0,0,1),g.push(_/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){let _=x+h*m,b=x+h*(m+1),S=x+1+h*(m+1),A=x+1+h*m;d.push(_,b,A),d.push(b,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qn=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],o=[],h=[],u=[],c=t,f=(e-t)/s,d=new pt,p=new ie;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=c*Math.cos(m),d.y=c*Math.sin(m),o.push(d.x,d.y,d.z),h.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}c+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,b=x+n+1,S=x+n+2,A=x+1;l.push(_,b,A),l.push(b,S,A)}}this.setIndex(l),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var kn=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),h=0,u=[],c=new pt,f=new pt,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,b=a+_*l,S=t*Math.cos(b),A=Math.sqrt(t*t-S*S),y=0;m===0&&a===0?y=.5/e:m===n&&o===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let k=T/e,M=s+k*r;c.x=-A*Math.cos(M),c.y=S,c.z=A*Math.sin(M),p.push(c.x,c.y,c.z),f.copy(c).normalize(),v.push(f.x,f.y,f.z),g.push(k+y,1-_),x.push(h++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=u[m][x+1],b=u[m][x],S=u[m+1][x],A=u[m+1][x+1];(m!==0||a>0)&&d.push(_,b,A),(m!==n-1||o<Math.PI)&&d.push(b,S,A)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yh(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function Yh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Bu={clone:Es,merge:gn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ir=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var lo=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},co=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case xc:r=t,l=2*e-n;break;case yc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,o=2*n-e;break;case yc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*v+.5*p,b=d*g-d*v;for(let S=0;S!==l;++S)r[S]=m*a[u+S]+x*a[h+S]+_*a[o+S]+b*a[c+S];return r}},uo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==l;++f)r[f]=a[h+f]*c+a[o+f]*u;return r}},fo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},po=class extends Ji{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this.inTangents,c=this.outTangents;if(!u||!c){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==l;++g)r[g]=a[h+g]*v+a[o+g]*p;return r}let f=l*2,d=t-1;for(let p=0;p!==l;++p){let v=a[h+p],g=a[o+p],m=d*f+p*2,x=c[m],_=c[m+1],b=t*f+p*2,S=u[b],A=u[b+1],y=Dp(n,e,x,S,s);r[p]=zu(y,v,_,A,g)}return r}};function zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Lp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Dp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=zu(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Lp(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ha(t.settings)&&(n.settings={inTangents:Xs(t.settings.inTangents,Array),outTangents:Xs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ha(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ha(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){ce("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){ce("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&ip(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){ce("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(s)o=!0;else{let c=l*n,f=c-n,d=c+n;for(let p=0;p!==n;++p){let v=e[c+p];if(v!==e[f+p]||v!==e[d+p]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let c=l*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,h=0;h!==n;++h)e[o+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=to;var Ki=class extends On{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Pr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};mo.prototype.ValueTypeName="color";var go=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="number";var vo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),h=t*l;for(let u=h+l;h!==u;h+=4)Wn.slerpFlat(r,0,a,h-l,a,h,o);return r}},$r=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends On{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Pr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="vector";var yo=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],p=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new yo,_o=class{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var mc=new xe,Jh=new pt,Kh=new pt,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new pt,Va=new Wn,oi=new pt,qr=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new pt,Qh=new ie,tu=new ie,We=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,tu),e.subVectors(tu,Qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/h,s*=a.width/o,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _s=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends wo{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ys=-90,Zs=1,sr=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let r=new We(Ys,Zs,t,e);r.layers=this.layers,this.add(r);let a=new We(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let l=new We(Ys,Zs,t,e);l.layers=this.layers,this.add(l);let o=new We(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let h=new We(Ys,Zs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let h of e)this.remove(h);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zc="\\[\\]\\.:\\/",Np=new RegExp("["+Zc+"]","g"),jc="[^"+Zc+"]",Fp="[^"+Zc.replace("\\.","")+"]",Up=/((?:WC+[\/:])*)/.source.replace("WC",jc),kp=/(WCOD+)?/.source.replace("WCOD",Fp),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),zp=new RegExp("^"+Up+kp+Op+Bp+"$"),Hp=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(t){let e=zp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=bc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var eu=new xe,Yr=class{constructor(t,e,n=0,s=1/0){this.ray=new Fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)wc(r[a],t,e,!0)}}var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Jc(i,t,e,n){let s=Gp(n);switch(e){case Hc:return i*t;case fi:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Oo:case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ia:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(i){switch(i){case an:case kc:return{byteLength:1,components:1};case hr:case Oc:case je:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case ii:case Ao:case Tn:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wp(i){let t=new WeakMap;function e(l,o){let h=l.array,u=l.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,h,u),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function n(l,o,h){let u=o.array,c=o.updateRanges;if(i.bindBuffer(h,l),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<c.length;d++){let p=c[f],v=c[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,c[f]=v)}c.length=f+1;for(let d=0,p=c.length;d<p;d++){let v=c[d];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
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
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform float backgroundBlurriness;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,vg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:$p,alphahash_pars_fragment:qp,alphamap_fragment:Xp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:jp,aomap_fragment:Jp,aomap_pars_fragment:Kp,batching_pars_vertex:Qp,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:fm,common:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:ym,colorspace_fragment:_m,colorspace_pars_fragment:bm,envmap_fragment:wm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Um,envmap_vertex:Em,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Lm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Fm,lights_toon_fragment:km,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:$m,lightprobes_pars_fragment:qm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:jm,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:t0,metalnessmap_fragment:e0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:v0,opaque_fragment:x0,packing:y0,premultiplied_alpha_fragment:_0,project_vertex:b0,dithering_fragment:w0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:I0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:F0,tonemapping_fragment:U0,tonemapping_pars_fragment:k0,transmission_fragment:O0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:V0,background_vert:W0,background_frag:$0,backgroundCube_vert:q0,backgroundCube_frag:X0,cube_vert:Y0,cube_frag:Z0,depth_vert:j0,depth_frag:J0,distance_vert:K0,distance_frag:Q0,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:vg,points_vert:xg,points_frag:yg,shadow_vert:_g,shadow_frag:bg,sprite_vert:wg,sprite_frag:Mg},Zt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:gn([Zt.common,Zt.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:gn([Zt.lights,Zt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var hl={r:0,b:0,g:0},Sg=new xe,hd=new de;hd.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){let a=new se(0),l=s===!0?0:1,o,h,u=null,c=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let b=x.backgroundBlurriness>0;_=t.get(_,b)}return _}function p(x){let _=!1,b=d(x);b===null?g(a,l):b&&b.isColor&&(g(b,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){let b=d(_);b&&b.isCubeTexture?(h===void 0&&(h=new pe(new Zi(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Es(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(hd),h.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,(u!==b||c!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(o===void 0&&(o=new pe(new Un(2,2),new Xe({name:"BackgroundMaterial",uniforms:Es(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=b,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,b.matrixAutoUpdate===!0&&b.updateMatrix(),o.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||c!==b.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,_){x.getRGB(hl,Yc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,_,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:v,dispose:m}}function Eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(H,J,ft,F,V){let O=!1,Y=c(H,F,ft,J);r!==Y&&(r=Y,h(r.object)),O=d(H,F,ft,V),O&&p(H,F,ft,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(H,J,ft,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function o(){return i.createVertexArray()}function h(H){return i.bindVertexArray(H)}function u(H){return i.deleteVertexArray(H)}function c(H,J,ft,F){let V=F.wireframe===!0,O=n[J.id];O===void 0&&(O={},n[J.id]=O);let Y=H.isInstancedMesh===!0?H.id:0,lt=O[Y];lt===void 0&&(lt={},O[Y]=lt);let et=lt[ft.id];et===void 0&&(et={},lt[ft.id]=et);let X=et[V];return X===void 0&&(X=f(o()),et[V]=X),X}function f(H){let J=[],ft=[],F=[];for(let V=0;V<e;V++)J[V]=0,ft[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ft,attributeDivisors:F,object:H,attributes:{},index:null}}function d(H,J,ft,F){let V=r.attributes,O=J.attributes,Y=0,lt=ft.getAttributes();for(let et in lt)if(lt[et].location>=0){let G=V[et],$=O[et];if($===void 0&&(et==="instanceMatrix"&&H.instanceMatrix&&($=H.instanceMatrix),et==="instanceColor"&&H.instanceColor&&($=H.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function p(H,J,ft,F){let V={},O=J.attributes,Y=0,lt=ft.getAttributes();for(let et in lt)if(lt[et].location>=0){let G=O[et];G===void 0&&(et==="instanceMatrix"&&H.instanceMatrix&&(G=H.instanceMatrix),et==="instanceColor"&&H.instanceColor&&(G=H.instanceColor));let $={};$.attribute=G,G&&G.data&&($.data=G.data),V[et]=$,Y++}r.attributes=V,r.attributesNum=Y,r.index=F}function v(){let H=r.newAttributes;for(let J=0,ft=H.length;J<ft;J++)H[J]=0}function g(H){m(H,0)}function m(H,J){let ft=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;ft[H]=1,F[H]===0&&(i.enableVertexAttribArray(H),F[H]=1),V[H]!==J&&(i.vertexAttribDivisor(H,J),V[H]=J)}function x(){let H=r.newAttributes,J=r.enabledAttributes;for(let ft=0,F=J.length;ft<F;ft++)J[ft]!==H[ft]&&(i.disableVertexAttribArray(ft),J[ft]=0)}function _(H,J,ft,F,V,O,Y){Y===!0?i.vertexAttribIPointer(H,J,ft,V,O):i.vertexAttribPointer(H,J,ft,F,V,O)}function b(H,J,ft,F){v();let V=F.attributes,O=ft.getAttributes(),Y=J.defaultAttributeValues;for(let lt in O){let et=O[lt];if(et.location>=0){let X=V[lt];if(X===void 0&&(lt==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),lt==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),X!==void 0){let G=X.normalized,$=X.itemSize,N=t.get(X);if(N===void 0)continue;let L=N.buffer,st=N.type,nt=N.bytesPerElement,ut=st===i.INT||st===i.UNSIGNED_INT||X.gpuType===Ao;if(X.isInterleavedBufferAttribute){let j=X.data,ct=j.isInterleavedBuffer===!0?j.stride:j.itemSize,vt=X.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let mt=0;mt<et.locationSize;mt++)m(et.location+mt,j.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<et.locationSize;mt++)g(et.location+mt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let mt=0;mt<et.locationSize;mt++)_(et.location+mt,$/et.locationSize,st,G,ct*nt,(vt+$/et.locationSize*mt)*nt,ut)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<et.locationSize;j++)m(et.location+j,X.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<et.locationSize;j++)g(et.location+j);i.bindBuffer(i.ARRAY_BUFFER,L);for(let j=0;j<et.locationSize;j++)_(et.location+j,$/et.locationSize,st,G,$*nt,$/et.locationSize*j*nt,ut)}}else if(Y!==void 0){let G=Y[lt];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(et.location,G);break;case 3:i.vertexAttrib3fv(et.location,G);break;case 4:i.vertexAttrib4fv(et.location,G);break;default:i.vertexAttrib1fv(et.location,G)}}}}x()}function S(){k();for(let H in n){let J=n[H];for(let ft in J){let F=J[ft];for(let V in F){let O=F[V];for(let Y in O)u(O[Y].object),delete O[Y];delete F[V]}}delete n[H]}}function A(H){if(n[H.id]===void 0)return;let J=n[H.id];for(let ft in J){let F=J[ft];for(let V in F){let O=F[V];for(let Y in O)u(O[Y].object),delete O[Y];delete F[V]}}delete n[H.id]}function y(H){for(let J in n){let ft=n[J];for(let F in ft){let V=ft[F];if(V[H.id]===void 0)continue;let O=V[H.id];for(let Y in O)u(O[Y].object),delete O[Y];delete V[H.id]}}}function T(H){for(let J in n){let ft=n[J],F=H.isInstancedMesh===!0?H.id:0,V=ft[F];if(V!==void 0){for(let O in V){let Y=V[O];for(let lt in Y)u(Y[lt].object),delete Y[lt];delete V[O]}delete ft[F],Object.keys(ft).length===0&&delete n[J]}}}function k(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:k,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Ag(i,t,e){let n;function s(o){n=o}function r(o,h){i.drawArrays(n,o,h),e.update(h,n,1)}function a(o,h,u){u!==0&&(i.drawArraysInstanced(n,o,h,u),e.update(h,n,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ye&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(y){let T=y===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==an&&y!==Tn&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=o(h);u!==h&&(oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&c===!1;e.reversedDepthBuffer===!0&&c===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&c===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,maxSamples:S,samples:A}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,l=new de,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let p=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=i.get(c);if(!s||p===null||p.length===0||r&&!g)r?u(null):h();else{let x=r?0:n,_=x*4,b=m.clippingState||null;o.value=b,b=u(p,f,_,d);for(let S=0;S!==_;++S)b[S]=e[S];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,p){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){let m=d+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,b=d;_!==v;++_,b+=4)a.copy(c[_]).applyMatrix4(x,l),a.normal.toArray(g,b),g[b+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var la=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ws});r.uniforms.tEquirect.value=e;let a=new pe(s,r),l=e.minFilter;return e.minFilter===rn&&(e.minFilter=Ae),new sr(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gu=256,Pg=3,Ig=20,ud=256,dd=16,Lg=3,Dg=new pt,Ng=new se,dr=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sr(1,10,null),this._boxMesh=new pe(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Dg}=r,o=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let c=o.autoClear,f=o.autoClearColor,d=o.autoClearDepth,p=o.autoClearStencil,v=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(t.background=o.getClearColor(Ng));let g=new sr(n,s,u);return g.position.copy(l),g.update(o,t),o.autoClear=c,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gu,ku(t))}_fromTexture(t,e){t.mapping===Ss||t.mapping===cr?this._setSize(t.image.length===0?Gu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-Pg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ss||t.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Fg(),this._integrationMaterial=Ug());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/dd);for(let a=0;a<=n;a++){let l=i.lodToRoughness(a,n);if(a>n-Lg)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(ud*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=kg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vu(i,t,e){return new la(i,{minFilter:rn,generateMipmaps:t,type:je,colorSpace:xs,depthBuffer:e})}function ca(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:nn,blending:ws,depthTest:!1,depthWrite:!1})}function Fg(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Ug(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dd}},`

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
	`)}function kg(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ig}
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
	`)}function Og(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===So||d===To)if(t.has(f)){let p=t.get(f).texture;return l(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new la(p.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",h),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===So||d===To,v=d===Ss||d===cr;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new dr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new dr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,d){return d===So?f.mapping=Ss:d===To&&(f.mapping=cr),f}function o(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function Bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function c(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=v!==null?v.array.length:g.array.length/3-1,_=g.count>=65535?Nr:Dr,b=new _(Math.ceil(x/3)*6,1),S=b.array;if(v!==null){let y=v.array;m=v.version;for(let T=0,k=0;T<x;T+=3){let M=y[T+0],H=y[T+1],J=y[T+2];S[k++]=M,S[k++]=H,S[k++]=H,S[k++]=J,S[k++]=J,S[k++]=M}}else{m=g.version;for(let y=0,T=0;y<x;y+=3){let k=y+0,M=y+1,H=y+2;S[T++]=k,S[T++]=M,S[T++]=M,S[T++]=H,S[T++]=H,S[T++]=k}}b.version=m;let A=r.get(p);A&&t.remove(A),r.set(p,b)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&c(p)}else c(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&o(v)}}return{get:h,update:u,getWireframeAttribute:f,dispose:d}}function Hg(i,t,e){let n;function s(c){n=c}let r,a;function l(c){r=c.type,a=c.bytesPerElement}function o(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function Gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,t,e){let n=new WeakMap,s=new ge;function r(a,l,o){let h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==c){let k=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let b=l.attributes.position.count*_,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*S*4*c),y=new ys(A,b,S,c);y.type=Tn,y.needsUpdate=!0;let T=_*4;for(let M=0;M<c;M++){let H=g[M],J=m[M],ft=x[M],F=b*S*4*M;for(let V=0;V<H.count;V++){let O=V*T;d===!0&&(s.fromBufferAttribute(H,V),A[F+O+0]=s.x,A[F+O+1]=s.y,A[F+O+2]=s.z,A[F+O+3]=0),p===!0&&(s.fromBufferAttribute(J,V),A[F+O+4]=s.x,A[F+O+5]=s.y,A[F+O+6]=s.z,A[F+O+7]=0),v===!0&&(s.fromBufferAttribute(ft,V),A[F+O+8]=s.x,A[F+O+9]=s.y,A[F+O+10]=s.z,A[F+O+11]=ft.itemSize===4?s.w:1)}}f={count:c,texture:y,size:new ie(b,S)},n.set(l,f),l.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",h)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Wg(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var $g={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Lc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function qg(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,u=new Be;u.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Te([0,2,0,0,2,0],2));let c=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pe(u,c),d=new _s(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,x=null,_=[],b=!1;this.setSize=function(S,A){a.setSize(S,A),l!==null&&l.setSize(S,A),o!==null&&o.setSize(S,A);for(let y=0;y<_.length;y++){let T=_[y];T.setSize&&T.setSize(S,A)}},this.setEffects=function(S){_=S,b=_.length>0&&_[0].isRenderPass===!0;let A=a.width,y=a.height;_.length>0&&l===null&&(l=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}),o=new Oe(A,y,{type:je,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&_.some(k=>k.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new ni(A,y),r===!0&&(h.format=Di,h.type=Ts)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let k=0;k<_.length;k++){let M=_[k];M.setSize&&M.setSize(A,y),T&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(h)}},this.begin=function(S,A){if(g||S.toneMapping===di&&_.length===0)return!1;if(x=A,A!==null){let y=A.width,T=A.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return b===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=di,!0},this.hasRenderPass=function(){return b},this.end=function(S,A){S.toneMapping=m,g=!0;let y=a,T=l;for(let k=0;k<_.length;k++){let M=_[k];M.enabled!==!1&&(M.render(S,T,y,A),M.needsSwap!==!1&&(y=T,T=T===l?o:l))}if(p!==S.outputColorSpace||v!==S.toneMapping){p=S.outputColorSpace,v=S.toneMapping,c.defines={},_e.getTransfer(p)===Se&&(c.defines.SRGB_TRANSFER="");let k=$g[v];k&&(c.defines[k]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var fd=new cn,pd=new ni(1,1),md=new Br(1),gd=new ys,vd=new so,xd=new Or,qu=[],Xu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),ju=new Float32Array(4);function fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Ke(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ke(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Ke(e,n)}}function tv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function sv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function pl(i){return i.version===0&&(i.compareFunction=$c,i.needsUpdate=!0),i}function lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=pl(pd):r=fd,e.setTexture2D(t||r,s)}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vd,s)}function hv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=pl(md):r=xd,e.setTextureCube(t||r,s)}function uv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function dv(i){switch(i){case 5126:return Xg;case 35664:return Yg;case 35665:return Zg;case 35666:return jg;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(i,t){i.uniform1fv(this.addr,t)}function pv(i,t){let e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function mv(i,t){let e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function gv(i,t){let e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function vv(i,t){let e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xv(i,t){let e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yv(i,t){let e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _v(i,t){i.uniform1iv(this.addr,t)}function bv(i,t){i.uniform2iv(this.addr,t)}function wv(i,t){i.uniform3iv(this.addr,t)}function Mv(i,t){i.uniform4iv(this.addr,t)}function Sv(i,t){i.uniform1uiv(this.addr,t)}function Tv(i,t){i.uniform2uiv(this.addr,t)}function Ev(i,t){i.uniform3uiv(this.addr,t)}function Av(i,t){i.uniform4uiv(this.addr,t)}function Rv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pl(pd):a=fd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Cv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vd,r[a])}function Pv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=pl(md):a=xd;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function Iv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Lv(i){switch(i){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return vv;case 35675:return xv;case 35676:return yv;case 5124:case 35670:return _v;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return Tv;case 36295:return Ev;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dv(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lv(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Ju(i,t){i.seq.push(t),i.map[t.id]=t}function Dv(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,l=r[1],o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){Ju(e,h===void 0?new th(l,i,t):new eh(l,i,t));break}else{let c=e.map[l];c===void 0&&(c=new nh(l),Ju(e,c)),e=c}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Dv(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nv=37297,Fv=0;function Uv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Qu=new de;function kv(i){_e._getMatrix(Qu,_e.workingColorSpace,i);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Uv(i.getShaderSource(t),l)}else return r}function Ov(i,t){let e=kv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Bv={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[Lc]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Dc]:"Custom"};function zv(i,t){let e=Bv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new pt;function Hv(){_e.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function oa(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace($v,qv)}function qv(i,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ih(e)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(Xv,Yv)}function Yv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Zv={[bs]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function jv(i){return Zv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[cr]:"ENVMAP_MODE_REFRACTION"};function Kv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function ex(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=jv(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Kv(e),c=tx(e),f=Gv(e),d=Vv(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(v=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?me.tonemapping_pars_fragment:"",e.toneMapping!==di?zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),Hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=ih(a),a=ed(a,e),a=nd(a,e),l=ih(l),l=ed(l,e),l=nd(l,e),a=id(a),l=id(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+v+a,_=m+g+l,b=Ku(s,s.VERTEX_SHADER,x),S=Ku(s,s.FRAGMENT_SHADER,_);s.attachShader(p,b),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(M){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(p)||"",J=s.getShaderInfoLog(b)||"",ft=s.getShaderInfoLog(S)||"",F=H.trim(),V=J.trim(),O=ft.trim(),Y=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,b,S);else{let et=td(s,b,"vertex"),X=td(s,S,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+et+`
`+X)}else F!==""?oe("WebGLProgram: Program Info Log:",F):(V===""||O==="")&&(lt=!1);lt&&(M.diagnostics={runnable:Y,programLog:F,vertexShader:{log:V,prefix:v},fragmentShader:{log:O,prefix:g}})}s.deleteShader(b),s.deleteShader(S),y=new ur(s,p),T=Wv(s,p)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,Nv)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=S,this}var nx=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}};function ix(i){return i===es||i===ia||i===sa}function sx(i,t,e,n,s,r){let a=new er,l=new sh,o=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return o.add(y),y===0?"uv":`uv${y}`}function p(y,T,k,M,H,J){let ft=M.fog,F=H.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?M.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||V,O),lt=f[y.type],et=n.precision;y.precision!==null&&(et=n.getMaxPrecision(y.precision),et!==y.precision&&oe("WebGLProgram.getParameters:",y.precision,"not supported, using",et,"instead."));let X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=X!==void 0?X.length:0,$=0;F.morphAttributes.position!==void 0&&($=1),F.morphAttributes.normal!==void 0&&($=2),F.morphAttributes.color!==void 0&&($=3);let N,L,st,nt;if(lt){let Tt=mi[lt];N=Tt.vertexShader,L=Tt.fragmentShader}else{N=y.vertexShader,L=y.fragmentShader;let Tt=l.getVertexShaderStage(y),ae=l.getFragmentShaderStage(y);l.update(y,Tt,ae),st=Tt.id,nt=ae.id}let ut=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ct=H.isInstancedMesh===!0,vt=H.isBatchedMesh===!0,mt=!!y.map,P=!!y.matcap,ot=!!Y,Z=ot&&Y.isPMREMTexture===!0,ht=!!y.aoMap,at=!!y.lightMap,wt=!!y.bumpMap&&y.wireframe===!1,Pt=!!y.normalMap,Jt=!!y.displacementMap,Ut=!!y.emissiveMap,At=!!y.metalnessMap,Lt=!!y.roughnessMap,kt=y.anisotropy>0,Q=y.clearcoat>0,Wt=y.diffuseRoughness>0,Rt=y.dispersion>0,Bt=y.retroreflectivity>0,_t=y.iridescence>0,Dt=y.sheen>0,Ot=y.transmission>0,Ft=kt&&!!y.anisotropyMap,z=Q&&!!y.clearcoatMap,E=Q&&!!y.clearcoatNormalMap,dt=Q&&!!y.clearcoatRoughnessMap,gt=Wt&&!!y.diffuseRoughnessMap,R=_t&&!!y.iridescenceMap,B=_t&&!!y.iridescenceThicknessMap,K=Dt&&!!y.sheenColorMap,w=Dt&&!!y.sheenRoughnessMap,I=!!y.specularMap,U=!!y.specularColorMap,C=!!y.specularIntensityMap,q=Ot&&!!y.transmissionMap,it=Ot&&!!y.thicknessMap,Mt=!!y.gradientMap,Et=!!y.alphaMap,It=y.alphaTest>0,Ht=!!y.alphaHash,Gt=!!y.extensions,Ct=di;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let Nt=Z?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,qt={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:N,fragmentShader:L,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:et,batching:vt,batchingColor:vt&&H._colorsTexture!==null,instancing:ct,instancingColor:ct&&H.instanceColor!==null,instancingMorph:ct&&H.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:P,envMap:ot,envMapMode:ot&&Y.mapping,envMapPMREM:Z,envMapMaxLod:Z?Nt.length-1:null,envMapSize:Z?Nt[0].width:null,aoMap:ht,lightMap:at,bumpMap:wt,normalMap:Pt,displacementMap:Jt,emissiveMap:Ut,normalMapObjectSpace:Pt&&y.normalMapType===Tu,normalMapTangentSpace:Pt&&y.normalMapType===cl,packedNormalMap:Pt&&y.normalMapType===cl&&ix(y.normalMap.format),metalnessMap:At,roughnessMap:Lt,anisotropy:kt,anisotropyMap:Ft,clearcoat:Q,clearcoatMap:z,clearcoatNormalMap:E,clearcoatRoughnessMap:dt,diffuseRoughness:Wt,diffuseRoughnessMap:gt,dispersion:Rt,retroreflection:Bt,iridescence:_t,iridescenceMap:R,iridescenceThicknessMap:B,sheen:Dt,sheenColorMap:K,sheenRoughnessMap:w,specularMap:I,specularColorMap:U,specularIntensityMap:C,transmission:Ot,transmissionMap:q,thicknessMap:it,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:Et,alphaTest:It,alphaHash:Ht,combine:y.combine,mapUv:mt&&d(y.map.channel),aoMapUv:ht&&d(y.aoMap.channel),lightMapUv:at&&d(y.lightMap.channel),bumpMapUv:wt&&d(y.bumpMap.channel),normalMapUv:Pt&&d(y.normalMap.channel),displacementMapUv:Jt&&d(y.displacementMap.channel),emissiveMapUv:Ut&&d(y.emissiveMap.channel),metalnessMapUv:At&&d(y.metalnessMap.channel),roughnessMapUv:Lt&&d(y.roughnessMap.channel),anisotropyMapUv:Ft&&d(y.anisotropyMap.channel),clearcoatMapUv:z&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:R&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:B&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:K&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:w&&d(y.sheenRoughnessMap.channel),specularMapUv:I&&d(y.specularMap.channel),specularColorMapUv:U&&d(y.specularColorMap.channel),specularIntensityMapUv:C&&d(y.specularIntensityMap.channel),transmissionMapUv:q&&d(y.transmissionMap.channel),thicknessMapUv:it&&d(y.thicknessMap.channel),alphaMapUv:Et&&d(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||kt),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(mt||Et),fog:!!ft,useFog:y.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Pt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:j,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:$,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:J.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Ut&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&y.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function v(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(g(T,y),m(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){let T=f[y.type],k;if(T){let M=mi[T];k=Bu.clone(M.uniforms)}else k=y.uniforms;return k}function _(y,T){let k=u.get(T);return k!==void 0?++k.usedTimes:(k=new ex(i,T,y,s),h.push(k),u.set(T,k)),k}function b(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:A}}function rx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ad(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,p,v,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function o(f,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let _=l(f,d,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function h(f,d,p,v,g,m){let x=l(f,d,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||ax),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function c(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function lx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new pt,color:new se};break;case"SpotLight":e={position:new pt,direction:new pt,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new pt,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new pt,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return i[t.id]=e,e}}}function cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hx=0;function ux(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dx(i){let t=new lx,e=cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new pt);let s=new pt,r=new xe,a=new xe;function l(h){let u=0,c=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,_=0,b=0,S=0,A=0,y=0,T=0,k=0,M=0;h.sort(ux);for(let J=0,ft=h.length;J<ft;J++){let F=h[J],V=F.color,O=F.intensity,Y=F.distance,lt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===es?lt=F.shadow.map.texture:lt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=V.r*O,c+=V.g*O,f+=V.b*O;else if(F.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(F.sh.coefficients[et],O);M++}else if(F.isSunLight){let et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,G=e.get(F);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=lt;let $=X.getViewportCount();for(let N=0;N<$;N++)n.sunShadowMatrix[v+N]=X.getMatrix(N),n.sunShadowCascade[v+N]=X._cascadeData[N];v+=$,p++}n.sun[d]=et,d++}else if(F.isDirectionalLight){let et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let X=F.shadow,G=e.get(F);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=lt,n.directionalShadowMatrix[g]=F.shadow.matrix,S++}n.directional[g]=et,g++}else if(F.isSpotLight){let et=t.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(V).multiplyScalar(O),et.distance=Y,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,n.spot[x]=et;let X=F.shadow;if(F.map&&(n.spotLightMap[T]=F.map,T++,X.updateMatrices(F),F.castShadow&&k++),n.spotLightMatrix[x]=X.matrix,F.castShadow){let G=e.get(F);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=lt,y++}x++}else if(F.isRectAreaLight){let et=t.get(F);et.color.copy(V).multiplyScalar(O),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=et,_++}else if(F.isPointLight){let et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),et.distance=F.distance,et.decay=F.decay,F.castShadow){let X=F.shadow,G=e.get(F);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=F.shadow.matrix,A++}n.point[m]=et,m++}else if(F.isHemisphereLight){let et=t.get(F);et.skyColor.copy(F.color).multiplyScalar(O),et.groundColor.copy(F.groundColor).multiplyScalar(O),n.hemi[b]=et,b++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let H=n.hash;(H.sunLength!==d||H.directionalLength!==g||H.pointLength!==m||H.spotLength!==x||H.rectAreaLength!==_||H.hemiLength!==b||H.numSunShadows!==p||H.numDirectionalShadows!==S||H.numPointShadows!==A||H.numSpotShadows!==y||H.numSpotMaps!==T||H.numLightProbes!==M)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-k,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=M,H.sunLength=d,H.directionalLength=g,H.pointLength=m,H.spotLength=x,H.rectAreaLength=_,H.hemiLength=b,H.numSunShadows=p,H.numDirectionalShadows=S,H.numPointShadows=A,H.numSpotShadows=y,H.numSpotMaps=T,H.numLightProbes=M,n.version=hx++)}function o(h,u){let c=0,f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let b=h[x];if(b.isSunLight){let S=n.sun[c];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),c++}else if(b.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:n}}function od(i){let t=new dx(i),e=[],n=[],s=[];function r(c){u.camera=c,e.length=0,n.length=0,s.length=0}function a(c){c.isLightProbeGrid?s.push(c):e.push(c)}function l(c){n.push(c)}function o(){t.setup(e),s.sort((c,f)=>c.priority-f.priority||c.id-f.id)}function h(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l}}function fx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new od(i),t.set(s,[l])):r>=a.length?(l=new od(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`,gx=[new pt(1,0,0),new pt(-1,0,0),new pt(0,1,0),new pt(0,-1,0),new pt(0,0,1),new pt(0,0,-1)],vx=[new pt(0,-1,0),new pt(0,-1,0),new pt(0,0,1),new pt(0,0,-1),new pt(0,-1,0),new pt(0,-1,0)],ld=new xe,aa=new pt,Qc=new pt;function xx(i,t,e){let n=new ui,s=new ie,r=new ie,a=new ge,l=new lo,o=new co,h={},u=e.maxTextureSize,c={[ts]:nn,[nn]:ts,[sn]:sn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:px,fragmentShader:mx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let m=this.type;this.render=function(A,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===ru&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let k=i.getRenderTarget(),M=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),J=i.state;J.setBlending(ws),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ft=m!==this.type;ft&&y.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=A.length;F<V;F++){let O=A[F],Y=O.shadow;if(Y===void 0){oe("WebGLShadowMap:",O,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let lt=Y.getFrameExtents();s.multiply(lt),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,Y.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=et,Y.map===null||ft===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===rr){if(O.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Oe(s.x,s.y,{format:es,type:je,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),Y.map.texture.name=O.name+".shadowMap",Y.map.depthTexture=new ni(s.x,s.y,Tn),Y.map.depthTexture.name=O.name+".shadowMapDepth",Y.map.depthTexture.format=Ii,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue}else O.isPointLight?(Y.map=new la(s.x),Y.map.depthTexture=new Br(s.x,ii)):(Y.map=new Oe(s.x,s.y),Y.map.depthTexture=new ni(s.x,s.y,ii)),Y.map.depthTexture.name=O.name+".shadowMap",Y.map.depthTexture.format=Ii,this.type===bs?(Y.map.depthTexture.compareFunction=et?Wc:Vc,Y.map.depthTexture.minFilter=Ae,Y.map.depthTexture.magFilter=Ae):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let X=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();O.isPointLight!==!0&&Y.updateMatrices(O,T);let G=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:T.layers;for(let $=0;$<X;$++){let N=Y.getCamera($);if(O.isPointLight){let L=Y.camera,st=Y.matrix,nt=O.distance||L.far;nt!==L.far&&(L.far=nt,L.updateProjectionMatrix()),aa.setFromMatrixPosition(O.matrixWorld),L.position.copy(aa),Qc.copy(L.position),Qc.add(gx[$]),L.up.copy(vx[$]),L.lookAt(Qc),L.updateMatrixWorld(),st.makeTranslation(-aa.x,-aa.y,-aa.z),ld.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ld,L.coordinateSystem,L.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,$),i.clear();else{$===0&&(i.setRenderTarget(Y.map),i.clear());let L=Y.getViewport($);a.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),J.viewport(a)}n=Y.getFrustum($),b(y,T,N,O,G,this.type)}Y.isPointLightShadow!==!0&&this.type===rr&&x(Y,T),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(k,M,H)};function x(A,y){let T=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Oe(s.x,s.y,{format:es,type:je}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,T,d,v,null)}function _(A,y,T,k){let M=null,H=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)M=H;else if(M=T.isPointLight===!0?o:l,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let J=M.uuid,ft=y.uuid,F=h[J];F===void 0&&(F={},h[J]=F);let V=F[ft];V===void 0&&(V=M.clone(),F[ft]=V,y.addEventListener("dispose",S)),M=V}if(M.visible=y.visible,M.wireframe=y.wireframe,k===rr?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:c[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=i.properties.get(M);J.light=T}return M}function b(A,y,T,k,M,H){if(A.visible===!1)return;if(A.layers.test(M)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&H===rr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let F=t.update(A),V=A.material;if(Array.isArray(V)){let O=F.groups;for(let Y=0,lt=O.length;Y<lt;Y++){let et=O[Y],X=V[et.materialIndex];if(X&&X.visible){let G=_(A,X,k,H);A.onBeforeShadow(i,A,y,T,F,G,et),i.renderBufferDirect(T,null,F,G,A,et),A.onAfterShadow(i,A,y,T,F,G,et)}}}else if(V.visible){let O=_(A,V,k,H);A.onBeforeShadow(i,A,y,T,F,O,null),i.renderBufferDirect(T,null,F,O,A,null),A.onAfterShadow(i,A,y,T,F,O,null)}}let ft=A.children;for(let F=0,V=ft.length;F<V;F++)b(ft[F],y,T,k,M,H)}function S(A){A.target.removeEventListener("dispose",S);for(let T in h){let k=h[T],M=A.target.uuid;M in k&&(k[M].dispose(),delete k[M])}}}function yx(i,t){function e(){let C=!1,q=new ge,it=null,Mt=new ge(0,0,0,0);return{setMask:function(Et){it!==Et&&!C&&(i.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){C=Et},setClear:function(Et,It,Ht,Gt,Ct){Ct===!0&&(Et*=Gt,It*=Gt,Ht*=Gt),q.set(Et,It,Ht,Gt),Mt.equals(q)===!1&&(i.clearColor(Et,It,Ht,Gt),Mt.copy(q))},reset:function(){C=!1,it=null,Mt.set(-1,0,0,0)}}}function n(){let C=!1,q=!1,it=null,Mt=null,Et=null;return{setReversed:function(It){if(q!==It){let Ht=t.get("EXT_clip_control");It?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),q=It;let Gt=Et;Et=null,this.setClear(Gt)}},getReversed:function(){return q},setTest:function(It){It?j(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(It){it!==It&&!C&&(i.depthMask(It),it=It)},setFunc:function(It){if(q&&(It=Uu[It]),Mt!==It){switch(It){case qa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=It}},setLocked:function(It){C=It},setClear:function(It){Et!==It&&(Et=It,q&&(It=1-It),i.clearDepth(It))},reset:function(){C=!1,it=null,Mt=null,Et=null,q=!1}}}function s(){let C=!1,q=null,it=null,Mt=null,Et=null,It=null,Ht=null,Gt=null,Ct=null;return{setTest:function(Nt){C||(Nt?j(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Nt){q!==Nt&&!C&&(i.stencilMask(Nt),q=Nt)},setFunc:function(Nt,qt,Tt){(it!==Nt||Mt!==qt||Et!==Tt)&&(i.stencilFunc(Nt,qt,Tt),it=Nt,Mt=qt,Et=Tt)},setOp:function(Nt,qt,Tt){(It!==Nt||Ht!==qt||Gt!==Tt)&&(i.stencilOp(Nt,qt,Tt),It=Nt,Ht=qt,Gt=Tt)},setLocked:function(Nt){C=Nt},setClear:function(Nt){Ct!==Nt&&(i.clearStencil(Nt),Ct=Nt)},reset:function(){C=!1,q=null,it=null,Mt=null,Et=null,It=null,Ht=null,Gt=null,Ct=null}}}let r=new e,a=new n,l=new s,o={},h=new WeakMap,u={},c={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,S=null,A=null,y=null,T=new se(0,0,0),k=0,M=!1,H=null,J=null,ft=null,F=null,V=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,lt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(et)[1]),Y=lt>=1):et.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Y=lt>=2);let X=null,G={},$=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),L=new ge().fromArray($),st=new ge().fromArray(N);function nt(C,q,it,Mt){let Et=new Uint8Array(4),It=i.createTexture();i.bindTexture(C,It),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<it;Ht++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(q+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return It}let ut={};ut[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(i.DEPTH_TEST),a.setFunc(Js),wt(!1),Pt(Sc),j(i.CULL_FACE),ht(ws);function j(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function ct(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function vt(C,q){return f[C]!==q?(i.bindFramebuffer(C,q),f[C]=q,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=q),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=q),!0):!1}function mt(C,q){let it=p,Mt=!1;if(C){it=d.get(q),it===void 0&&(it=[],d.set(q,it));let Et=C.textures;if(it.length!==Et.length||it[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Ht=Et.length;It<Ht;It++)it[It]=i.COLOR_ATTACHMENT0+It;it.length=Et.length,Mt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(it)}function P(C){return v!==C?(i.useProgram(C),v=C,!0):!1}let ot={[Ms]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};ot[lu]=i.MIN,ot[cu]=i.MAX;let Z={[jr]:i.ZERO,[Jr]:i.ONE,[hu]:i.SRC_COLOR,[or]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[lr]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(C,q,it,Mt,Et,It,Ht,Gt,Ct,Nt){if(C===ws){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),C!==Zr){if(C!==m||Nt!==M){if((x!==Ms||S!==Ms)&&(i.blendEquation(i.FUNC_ADD),x=Ms,S=Ms),Nt)switch(C){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",C);break}else switch(C){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",C);break}_=null,b=null,A=null,y=null,T.set(0,0,0),k=0,m=C,M=Nt}return}Et=Et||q,It=It||it,Ht=Ht||Mt,(q!==x||Et!==S)&&(i.blendEquationSeparate(ot[q],ot[Et]),x=q,S=Et),(it!==_||Mt!==b||It!==A||Ht!==y)&&(i.blendFuncSeparate(Z[it],Z[Mt],Z[It],Z[Ht]),_=it,b=Mt,A=It,y=Ht),(Gt.equals(T)===!1||Ct!==k)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Ct),T.copy(Gt),k=Ct),m=C,M=!1}function at(C,q){C.side===sn?ct(i.CULL_FACE):j(i.CULL_FACE);let it=C.side===nn;q&&(it=!it),wt(it),C.blending===ar&&C.transparent===!1?ht(ws):ht(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let Mt=C.stencilWrite;l.setTest(Mt),Mt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ut(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(C){H!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),H=C)}function Pt(C){C!==iu?(j(i.CULL_FACE),C!==J&&(C===Sc?i.cullFace(i.BACK):C===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),J=C}function Jt(C){C!==ft&&(Y&&i.lineWidth(C),ft=C)}function Ut(C,q,it){C?(j(i.POLYGON_OFFSET_FILL),(F!==q||V!==it)&&(F=q,V=it,a.getReversed()&&(q=-q,it=-it),i.polygonOffset(q,it))):ct(i.POLYGON_OFFSET_FILL)}function At(C){C?j(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Lt(C){C===void 0&&(C=i.TEXTURE0+O-1),X!==C&&(i.activeTexture(C),X=C)}function kt(C,q,it){it===void 0&&(X===null?it=i.TEXTURE0+O-1:it=X);let Mt=G[it];Mt===void 0&&(Mt={type:void 0,texture:void 0},G[it]=Mt),(Mt.type!==C||Mt.texture!==q)&&(X!==it&&(i.activeTexture(it),X=it),i.bindTexture(C,q||ut[C]),Mt.type=C,Mt.texture=q)}function Q(){let C=G[X];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function Rt(){try{i.compressedTexImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function _t(){try{i.texSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function Ft(){try{i.texStorage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function z(){try{i.texStorage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function E(){try{i.texImage2D(...arguments)}catch(C){ce("WebGLState:",C)}}function dt(){try{i.texImage3D(...arguments)}catch(C){ce("WebGLState:",C)}}function gt(C){return c[C]!==void 0?c[C]:i.getParameter(C)}function R(C,q){c[C]!==q&&(i.pixelStorei(C,q),c[C]=q)}function B(C){L.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),L.copy(C))}function K(C){st.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),st.copy(C))}function w(C,q){let it=h.get(q);it===void 0&&(it=new WeakMap,h.set(q,it));let Mt=it.get(C);Mt===void 0&&(Mt=i.getUniformBlockIndex(q,C.name),i.uniformBlockBinding(q,Mt,Mt),it.set(C,Mt))}function I(C,q,it){let Et=h.get(q).get(C);o[Et]!==it&&(i.bindBufferBase(i.UNIFORM_BUFFER,Et,it),o[Et]=it)}function U(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},X=null,G={},f={},o={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,S=null,A=null,y=null,T=new se(0,0,0),k=0,M=!1,H=null,J=null,ft=null,F=null,V=null,L.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:j,disable:ct,bindFramebuffer:vt,drawBuffers:mt,useProgram:P,setBlending:ht,setMaterial:at,setFlipSided:wt,setCullFace:Pt,setLineWidth:Jt,setPolygonOffset:Ut,setScissorTest:At,activeTexture:Lt,bindTexture:kt,unbindTexture:Q,compressedTexImage2D:Wt,compressedTexImage3D:Rt,texImage2D:E,texImage3D:dt,pixelStorei:R,getParameter:gt,updateUBOMapping:w,uniformBlockBinding:I,texStorage2D:Ft,texStorage3D:z,texSubImage2D:Bt,texSubImage3D:_t,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ot,scissor:B,viewport:K,reset:U}}function _x(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ie,u=new WeakMap,c=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(z=>p.delete(z)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(z,E){return g?new OffscreenCanvas(z,E):Lr("canvas")}function x(z,E,dt){let gt=1,R=Ft(z);if((R.width>dt||R.height>dt)&&(gt=dt/Math.max(R.width,R.height)),gt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let B=Math.floor(gt*R.width),K=Math.floor(gt*R.height);f===void 0&&(f=m(B,K));let w=E?m(B,K):f;return w.width=B,w.height=K,w.getContext("2d").drawImage(z,0,0,B,K),oe("WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+B+"x"+K+")."),w}else return"data"in z&&oe("WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),z;return z}function _(z){return z.generateMipmaps}function b(z){i.generateMipmap(z)}function S(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(z,E,dt,gt,R,B=!1){if(z!==null){if(i[z]!==void 0)return i[z];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let K;gt&&(K=t.get("EXT_texture_norm16"),K||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=E;if(E===i.RED&&(dt===i.FLOAT&&(w=i.R32F),dt===i.HALF_FLOAT&&(w=i.R16F),dt===i.UNSIGNED_BYTE&&(w=i.R8),dt===i.UNSIGNED_SHORT&&K&&(w=K.R16_EXT),dt===i.SHORT&&K&&(w=K.R16_SNORM_EXT)),E===i.RED_INTEGER&&(dt===i.UNSIGNED_BYTE&&(w=i.R8UI),dt===i.UNSIGNED_SHORT&&(w=i.R16UI),dt===i.UNSIGNED_INT&&(w=i.R32UI),dt===i.BYTE&&(w=i.R8I),dt===i.SHORT&&(w=i.R16I),dt===i.INT&&(w=i.R32I)),E===i.RG&&(dt===i.FLOAT&&(w=i.RG32F),dt===i.HALF_FLOAT&&(w=i.RG16F),dt===i.UNSIGNED_BYTE&&(w=i.RG8),dt===i.UNSIGNED_SHORT&&K&&(w=K.RG16_EXT),dt===i.SHORT&&K&&(w=K.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(dt===i.UNSIGNED_BYTE&&(w=i.RG8UI),dt===i.UNSIGNED_SHORT&&(w=i.RG16UI),dt===i.UNSIGNED_INT&&(w=i.RG32UI),dt===i.BYTE&&(w=i.RG8I),dt===i.SHORT&&(w=i.RG16I),dt===i.INT&&(w=i.RG32I)),E===i.RGB_INTEGER&&(dt===i.UNSIGNED_BYTE&&(w=i.RGB8UI),dt===i.UNSIGNED_SHORT&&(w=i.RGB16UI),dt===i.UNSIGNED_INT&&(w=i.RGB32UI),dt===i.BYTE&&(w=i.RGB8I),dt===i.SHORT&&(w=i.RGB16I),dt===i.INT&&(w=i.RGB32I)),E===i.RGBA_INTEGER&&(dt===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),dt===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),dt===i.UNSIGNED_INT&&(w=i.RGBA32UI),dt===i.BYTE&&(w=i.RGBA8I),dt===i.SHORT&&(w=i.RGBA16I),dt===i.INT&&(w=i.RGBA32I)),E===i.RGB&&(dt===i.UNSIGNED_SHORT&&K&&(w=K.RGB16_EXT),dt===i.SHORT&&K&&(w=K.RGB16_SNORM_EXT),dt===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),dt===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),E===i.RGBA){let I=B?Ir:_e.getTransfer(R);dt===i.FLOAT&&(w=i.RGBA32F),dt===i.HALF_FLOAT&&(w=i.RGBA16F),dt===i.UNSIGNED_BYTE&&(w=I===Se?i.SRGB8_ALPHA8:i.RGBA8),dt===i.UNSIGNED_SHORT&&K&&(w=K.RGBA16_EXT),dt===i.SHORT&&K&&(w=K.RGBA16_SNORM_EXT),dt===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),dt===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&t.get("EXT_color_buffer_float"),w}function y(z,E){let dt;return z?E===null||E===ii||E===Ts?dt=i.DEPTH24_STENCIL8:E===Tn?dt=i.DEPTH32F_STENCIL8:E===hr&&(dt=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Ts?dt=i.DEPTH_COMPONENT24:E===Tn?dt=i.DEPTH_COMPONENT32F:E===hr&&(dt=i.DEPTH_COMPONENT16),dt}function T(z,E){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ue&&z.minFilter!==Ae?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function k(z){let E=new WeakRef(z);n.get(z).__ref=E,p.add(E),v.register(z,E,E)}function M(z){let E=n.get(z).__ref;E!==void 0&&(p.delete(E),v.unregister(E))}function H(z){ft(z.target)}function J(z){F(z.target)}function ft(z){z.removeEventListener("dispose",H),M(z),O(z),z.isVideoTexture&&u.delete(z),z.isHTMLTexture&&c.delete(z)}function F(z){z.removeEventListener("dispose",J),M(z),lt(z)}function V(){for(let z of p){let E=z.deref();E!==void 0&&(E.isRenderTarget===!0?F(E):ft(E))}p.clear(),c.clear()}function O(z){let E=n.get(z);if(E.__webglInit===void 0)return;let dt=z.source,gt=d.get(dt);if(gt){let R=gt[E.__cacheKey];R.usedTimes--,R.usedTimes===0&&Y(z),Object.keys(gt).length===0&&d.delete(dt)}n.remove(z)}function Y(z){let E=n.get(z);i.deleteTexture(E.__webglTexture);let dt=z.source,gt=d.get(dt);delete gt[E.__cacheKey],a.memory.textures--}function lt(z){let E=n.get(z);E.__depthDisposeCallback&&E.__depthDisposeCallback();let dt=z.depthTexture;if(dt&&dt.renderTarget===z&&ft(dt),z.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(E.__webglFramebuffer[R]))for(let B=0;B<E.__webglFramebuffer[R].length;B++)i.deleteFramebuffer(E.__webglFramebuffer[R][B]);else i.deleteFramebuffer(E.__webglFramebuffer[R]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[R])}else{if(Array.isArray(E.__webglFramebuffer))for(let R=0;R<E.__webglFramebuffer.length;R++)i.deleteFramebuffer(E.__webglFramebuffer[R]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let R=0;R<E.__webglColorRenderbuffer.length;R++)E.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[R]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let gt=z.textures;for(let R=0,B=gt.length;R<B;R++){let K=n.get(gt[R]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(gt[R])}n.remove(z)}let et=0;function X(){et=0}function G(){return et}function $(z){et=z}function N(){let z=et;return z>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,z}function L(z){let E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.mipmapsAutoUpdate),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function st(z,E){let dt=n.get(z);if(z.isVideoTexture&&Dt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&dt.__version!==z.version){let gt=z.image;if(gt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(dt,z,E);return}}else z.isExternalTexture&&(dt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture,i.TEXTURE0+E)}function nt(z,E){let dt=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&dt.__version!==z.version){at(dt,z,E);return}else z.isExternalTexture&&(dt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,dt.__webglTexture,i.TEXTURE0+E)}function ut(z,E){let dt=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&dt.__version!==z.version){at(dt,z,E);return}e.bindTexture(i.TEXTURE_3D,dt.__webglTexture,i.TEXTURE0+E)}function j(z,E){let dt=n.get(z);if(z.version>0&&dt.__version!==z.version){wt(dt,z,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture,i.TEXTURE0+E)}let ct={[Pi]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},vt={[Ue]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},mt={[Au]:i.NEVER,[$c]:i.ALWAYS,[Ru]:i.LESS,[Vc]:i.LEQUAL,[Cu]:i.EQUAL,[Wc]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function P(z,E){if(E.type===Tn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ae||E.magFilter===Eo||E.magFilter===Kr||E.magFilter===rn||E.minFilter===Ae||E.minFilter===Eo||E.minFilter===Kr||E.minFilter===rn)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ct[E.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ct[E.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ct[E.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,vt[E.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ue||E.minFilter!==Kr&&E.minFilter!==rn||E.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(z,E){let dt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",H),k(E));let gt=E.source,R=d.get(gt);R===void 0&&(R={},d.set(gt,R));let B=L(E);if(B!==z.__cacheKey){R[B]===void 0&&(R[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,dt=!0),R[B].usedTimes++;let K=R[z.__cacheKey];K!==void 0&&(R[z.__cacheKey].usedTimes--,K.usedTimes===0&&Y(E)),z.__cacheKey=B,z.__webglTexture=R[B].texture}return dt}function Z(z,E,dt){return Math.floor(Math.floor(z/dt)/E)}function ht(z,E,dt,gt){let B=z.updateRanges;if(B.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,dt,gt,E.data);else{B.sort((C,q)=>C.start-q.start);let K=0;for(let C=1;C<B.length;C++){let q=B[K],it=B[C],Mt=q.start+q.count,Et=Z(it.start,E.width,4),It=Z(q.start,E.width,4);it.start<=Mt+1&&Et===It&&Z(it.start+it.count-1,E.width,4)===Et?q.count=Math.max(q.count,it.start+it.count-q.start):(++K,B[K]=it)}B.length=K+1;let w=e.getParameter(i.UNPACK_ROW_LENGTH),I=e.getParameter(i.UNPACK_SKIP_PIXELS),U=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let C=0,q=B.length;C<q;C++){let it=B[C],Mt=Math.floor(it.start/4),Et=Math.ceil(it.count/4),It=Mt%E.width,Ht=Math.floor(Mt/E.width),Gt=Et,Ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,It),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ht),e.texSubImage2D(i.TEXTURE_2D,0,It,Ht,Gt,Ct,dt,gt,E.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,w),e.pixelStorei(i.UNPACK_SKIP_PIXELS,I),e.pixelStorei(i.UNPACK_SKIP_ROWS,U)}}function at(z,E,dt){let gt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=i.TEXTURE_3D);let R=ot(z,E),B=E.source;e.bindTexture(gt,z.__webglTexture,i.TEXTURE0+dt);let K=n.get(B);if(B.version!==K.__version||R===!0){if(e.activeTexture(i.TEXTURE0+dt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Ct=_e.getPrimaries(_e.workingColorSpace),Nt=E.colorSpace===Bn?null:_e.getPrimaries(E.colorSpace),qt=E.colorSpace===Bn||Ct===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let I=x(E.image,!1,s.maxTextureSize);I=Ot(E,I);let U=r.convert(E.format,E.colorSpace),C=r.convert(E.type),q=A(E.internalFormat,U,C,E.normalized,E.colorSpace,E.isVideoTexture);P(gt,E);let it,Mt=E.mipmaps,Et=E.isVideoTexture!==!0,It=K.__version===void 0||R===!0,Ht=B.dataReady,Gt=T(E,I);if(E.isDepthTexture)q=y(E.format===Di,E.type),It&&(Et?e.texStorage2D(i.TEXTURE_2D,1,q,I.width,I.height):e.texImage2D(i.TEXTURE_2D,0,q,I.width,I.height,0,U,C,null));else if(E.isDataTexture)if(Mt.length>0){Et&&It&&e.texStorage2D(i.TEXTURE_2D,Gt,q,Mt[0].width,Mt[0].height);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)it=Mt[Ct],Et?Ht&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,it.width,it.height,U,C,it.data):e.texImage2D(i.TEXTURE_2D,Ct,q,it.width,it.height,0,U,C,it.data);E.generateMipmaps=!1}else Et?(It&&e.texStorage2D(i.TEXTURE_2D,Gt,q,I.width,I.height),Ht&&ht(E,I,U,C)):e.texImage2D(i.TEXTURE_2D,0,q,I.width,I.height,0,U,C,I.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Et&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,q,Mt[0].width,Mt[0].height,I.depth);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)if(it=Mt[Ct],E.format!==Ye)if(U!==null)if(Et){if(Ht)if(E.layerUpdates.size>0){let qt=Jc(it.width,it.height,E.format,E.type);for(let Tt of E.layerUpdates){let ae=it.data.subarray(Tt*qt/it.data.BYTES_PER_ELEMENT,(Tt+1)*qt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,Tt,it.width,it.height,1,U,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,it.width,it.height,I.depth,U,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ct,q,it.width,it.height,I.depth,0,it.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,it.width,it.height,I.depth,U,C,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Ct,q,it.width,it.height,I.depth,0,U,C,it.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Et&&It&&e.texStorage2D(i.TEXTURE_2D,Gt,q,Mt[0].width,Mt[0].height);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)it=Mt[Ct],E.format!==Ye?U!==null?Et?Ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,Ct,0,0,it.width,it.height,U,it.data):e.compressedTexImage2D(i.TEXTURE_2D,Ct,q,it.width,it.height,0,it.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Ht&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,it.width,it.height,U,C,it.data):e.texImage2D(i.TEXTURE_2D,Ct,q,it.width,it.height,0,U,C,it.data)}else if(E.isDataArrayTexture)if(Et){if(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,q,I.width,I.height,I.depth),Ht)if(E.layerUpdates.size>0){let Ct=Jc(I.width,I.height,E.format,E.type);for(let Nt of E.layerUpdates){let qt=I.data.subarray(Nt*Ct/I.data.BYTES_PER_ELEMENT,(Nt+1)*Ct/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,I.width,I.height,1,U,C,qt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,U,C,I.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,I.width,I.height,I.depth,0,U,C,I.data);else if(E.isData3DTexture)Et?(It&&e.texStorage3D(i.TEXTURE_3D,Gt,q,I.width,I.height,I.depth),Ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,U,C,I.data)):e.texImage3D(i.TEXTURE_3D,0,q,I.width,I.height,I.depth,0,U,C,I.data);else if(E.isFramebufferTexture){if(It)if(Et)e.texStorage2D(i.TEXTURE_2D,Gt,q,I.width,I.height);else{let Ct=I.width,Nt=I.height;for(let qt=0;qt<Gt;qt++)e.texImage2D(i.TEXTURE_2D,qt,q,Ct,Nt,0,U,C,null),Ct>>=1,Nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Ct=i.canvas;if(Ct.hasAttribute("layoutsubtree")||Ct.setAttribute("layoutsubtree","true"),I.parentNode!==Ct){Ct.appendChild(I),c.add(E),Ct.onpaint=Nt=>{let qt=Nt.changedElements;for(let Tt of c)qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,I);else{let qt=i.RGBA,Tt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,Tt,ae,I)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Et&&It){let Ct=Ft(Mt[0]);e.texStorage2D(i.TEXTURE_2D,Gt,q,Ct.width,Ct.height)}for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)it=Mt[Ct],Et?Ht&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,U,C,it):e.texImage2D(i.TEXTURE_2D,Ct,q,U,C,it);E.generateMipmaps=!1}else if(Et){if(It){let Ct=Ft(I);e.texStorage2D(i.TEXTURE_2D,Gt,q,Ct.width,Ct.height)}Ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,U,C,I)}else e.texImage2D(i.TEXTURE_2D,0,q,U,C,I);_(E)&&E.mipmapsAutoUpdate===!0&&b(gt),K.__version=B.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function wt(z,E,dt){if(E.image.length!==6)return;let gt=ot(z,E),R=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+dt);let B=n.get(R);if(R.version!==B.__version||gt===!0){e.activeTexture(i.TEXTURE0+dt);let K=_e.getPrimaries(_e.workingColorSpace),w=E.colorSpace===Bn?null:_e.getPrimaries(E.colorSpace),I=E.colorSpace===Bn||K===w?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let U=E.isCompressedTexture||E.image[0].isCompressedTexture,C=E.image[0]&&E.image[0].isDataTexture,q=[];for(let Tt=0;Tt<6;Tt++)!U&&!C?q[Tt]=x(E.image[Tt],!0,s.maxCubemapSize):q[Tt]=C?E.image[Tt].image:E.image[Tt],q[Tt]=Ot(E,q[Tt]);let it=q[0],Mt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),It=A(E.internalFormat,Mt,Et,E.normalized,E.colorSpace),Ht=E.isVideoTexture!==!0,Gt=B.__version===void 0||gt===!0,Ct=R.dataReady,Nt=T(E,it);P(i.TEXTURE_CUBE_MAP,E);let qt;if(E.isDepthTexture){if(It=y(E.format===Di,E.type),Gt)if(Ht)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,It,it.width,it.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,It,it.width,it.height,0,Mt,Et,null)}else if(U){Ht&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,It,it.width,it.height);for(let Tt=0;Tt<6;Tt++){qt=q[Tt].mipmaps;for(let ae=0;ae<qt.length;ae++){let le=qt[ae];E.format!==Ye?Mt!==null?Ht?Ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,le.width,le.height,Mt,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,It,le.width,le.height,0,le.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,le.width,le.height,Mt,Et,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,It,le.width,le.height,0,Mt,Et,le.data)}}}else{if(qt=E.mipmaps,Ht&&Gt){qt.length>0&&Nt++;let Tt=Ft(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,It,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(C){Ht?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,q[Tt].width,q[Tt].height,Mt,Et,q[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,It,q[Tt].width,q[Tt].height,0,Mt,Et,q[Tt].data);for(let ae=0;ae<qt.length;ae++){let De=qt[ae].image[Tt].image;Ht?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,De.width,De.height,Mt,Et,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,It,De.width,De.height,0,Mt,Et,De.data)}}else{Ht?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Mt,Et,q[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,It,Mt,Et,q[Tt]);for(let ae=0;ae<qt.length;ae++){let le=qt[ae];Ht?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,Mt,Et,le.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,It,Mt,Et,le.image[Tt])}}}_(E)&&E.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),B.__version=R.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Pt(z,E,dt,gt,R,B){let K=r.convert(dt.format,dt.colorSpace),w=r.convert(dt.type),I=A(dt.internalFormat,K,w,dt.normalized,dt.colorSpace),U=n.get(E),C=n.get(dt);if(C.__renderTarget=E,!U.__hasExternalTextures){let q=Math.max(1,E.width>>B),it=Math.max(1,E.height>>B);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,B,I,q,it,E.depth,0,K,w,null):e.texImage2D(R,B,I,q,it,0,K,w,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),_t(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,R,C.__webglTexture,0,Bt(E)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,R,C.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(z,E,dt){if(i.bindRenderbuffer(i.RENDERBUFFER,z),E.depthBuffer){let gt=E.depthTexture,R=gt&&gt.isDepthTexture?gt.type:null,B=y(E.stencilBuffer,R),K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),B,E.width,E.height):dt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),B,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,B,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,z)}else{let gt=E.textures;for(let R=0;R<gt.length;R++){let B=gt[R],K=r.convert(B.format,B.colorSpace),w=r.convert(B.type),I=A(B.internalFormat,K,w,B.normalized,B.colorSpace);_t(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(E),I,E.width,E.height):dt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(E),I,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,I,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(z,E,dt){let gt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let R=n.get(E.depthTexture);R.__renderTarget=E;let B=gt?E.depthTexture.image[0]:E.depthTexture.image;(!R.__webglTexture||B.width!==E.width||B.height!==E.height)&&(B.width=E.width,B.height=E.height,E.depthTexture.needsUpdate=!0),gt?j(E.depthTexture,0):st(E.depthTexture,0);let K=R.__webglTexture,w=Bt(E),I=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+dt:i.TEXTURE_2D,U=E.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ii)_t(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,I,K,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,U,I,K,0);else if(E.depthTexture.format===Di)_t(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,I,K,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,U,I,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(z){let E=n.get(z),dt=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){let gt=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){let R=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",R)};gt.addEventListener("dispose",R),E.__depthDisposeCallback=R}E.__boundDepthTexture=gt}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(dt)for(let gt=0;gt<6;gt++)Ut(E.__webglFramebuffer[gt],z,gt);else z.texture.mipmaps.length>0?Ut(E.__webglFramebuffer[0],z,0):Ut(E.__webglFramebuffer,z,0);else if(dt){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=i.createRenderbuffer(),Jt(E.__webglDepthbuffer[gt],z,!1);else{let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,B)}}else if(z.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Jt(E.__webglDepthbuffer,z,!1);else{let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,B)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(z,E,dt){let gt=n.get(z);E!==void 0&&Pt(gt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),dt!==void 0&&At(z)}function kt(z){let E=z.texture,dt=n.get(z),gt=n.get(E);z.addEventListener("dispose",J),k(z);let R=z.textures,B=z.isWebGLCubeRenderTarget===!0,K=R.length>1;if(K||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=E.version,a.memory.textures++),B){dt.__webglFramebuffer=[];for(let w=0;w<6;w++)if(E.mipmaps.length>0){dt.__webglFramebuffer[w]=[];for(let I=0;I<E.mipmaps.length;I++)dt.__webglFramebuffer[w][I]=i.createFramebuffer()}else dt.__webglFramebuffer[w]=i.createFramebuffer()}else{if(E.mipmaps.length>0){dt.__webglFramebuffer=[];for(let w=0;w<E.mipmaps.length;w++)dt.__webglFramebuffer[w]=i.createFramebuffer()}else dt.__webglFramebuffer=i.createFramebuffer();if(K)for(let w=0,I=R.length;w<I;w++){let U=n.get(R[w]);U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&_t(z)===!1){dt.__webglMultisampledFramebuffer=i.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let w=0;w<R.length;w++){let I=R[w];dt.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,dt.__webglColorRenderbuffer[w]);let U=r.convert(I.format,I.colorSpace),C=r.convert(I.type),q=A(I.internalFormat,U,C,I.normalized,I.colorSpace,z.isXRRenderTarget===!0),it=Bt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,q,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,dt.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(dt.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(dt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),P(i.TEXTURE_CUBE_MAP,E);for(let w=0;w<6;w++)if(E.mipmaps.length>0)for(let I=0;I<E.mipmaps.length;I++)Pt(dt.__webglFramebuffer[w][I],z,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,I);else Pt(dt.__webglFramebuffer[w],z,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);_(E)?b(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(K){for(let w=0,I=R.length;w<I;w++){let U=R[w],C=n.get(U),q=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(q=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,C.__webglTexture),P(q,U),Pt(dt.__webglFramebuffer,z,U,i.COLOR_ATTACHMENT0+w,q,0),_(U)&&b(q)}e.unbindTexture()}else{let w=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(w=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,gt.__webglTexture),P(w,E),E.mipmaps.length>0)for(let I=0;I<E.mipmaps.length;I++)Pt(dt.__webglFramebuffer[I],z,E,i.COLOR_ATTACHMENT0,w,I);else Pt(dt.__webglFramebuffer,z,E,i.COLOR_ATTACHMENT0,w,0);_(E)?b(w):E.mipmaps.length>0&&i.texParameteri(w,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}z.depthBuffer&&At(z)}function Q(z){let E=z.textures;for(let dt=0,gt=E.length;dt<gt;dt++){let R=E[dt];if(_(R)&&R.mipmapsAutoUpdate===!0){let B=S(z),K=n.get(R).__webglTexture;e.bindTexture(B,K),b(B),e.unbindTexture()}}}let Wt=[];function Rt(z){if(z.samples>0){if(_t(z)===!1){let E=z.textures,dt=z.width,gt=z.height,R=i.COLOR_BUFFER_BIT,B=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(z),w=E.length>1;if(w)for(let U=0;U<E.length;U++)e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let U=0;U<E.length;U++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[U]);let C=n.get(E[U]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,dt,gt,0,0,dt,gt,R,i.NEAREST),o===!0&&(Wt.length=0,Wt.push(i.COLOR_ATTACHMENT0+U),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Wt.push(B),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let U=0;U<E.length;U++){e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,K.__webglColorRenderbuffer[U]);let C=n.get(E[U]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&o){let E=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Bt(z){return Math.min(s.maxSamples,z.samples)}function _t(z){let E=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Dt(z){let E=a.render.frame;u.get(z)!==E&&(u.set(z,E),z.update())}function Ot(z,E){let dt=z.colorSpace,gt=z.format,R=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||dt!==xs&&dt!==Bn&&(_e.getTransfer(dt)===Se?(gt!==Ye||R!==an)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",dt)),E}function Ft(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=X,this.getTextureUnits=G,this.setTextureUnits=$,this.setTexture2D=st,this.setTexture2DArray=nt,this.setTexture3D=ut,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=_t,this.dispose=V}function bx(i,t){function e(n,s=Bn){let r,a=_e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Ye)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===fi)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Fo||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===ia||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Oo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Wo||n===$o||n===qo||n===Xo||n===Yo||n===Zo||n===jo||n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===sa||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:wx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,h=null,u=null,c=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new ah,m={},x=e.getContextAttributes(),_=null,b=null,S=[],A=[],y=new ie,T=null,k=null,M=new We;M.viewport=new ge;let H=new We;H.viewport=new ge;let J=[M,H],ft=new Mo,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let st=S[L];return st===void 0&&(st=new nr,S[L]=st),st.getTargetRaySpace()},this.getControllerGrip=function(L){let st=S[L];return st===void 0&&(st=new nr,S[L]=st),st.getGripSpace()},this.getHand=function(L){let st=S[L];return st===void 0&&(st=new nr,S[L]=st),st.getHandSpace()};function O(L){let st=A.indexOf(L.inputSource);if(st===-1)return;let nt=S[st];nt!==void 0&&(nt.update(L.inputSource,L.frame,h||a),nt.dispatchEvent({type:L.type,data:L.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",lt);for(let L=0;L<S.length;L++){let st=A[L];st!==null&&(A[L]=null,S[L].disconnect(st))}F=null,V=null,g.reset();for(let L in m)delete m[L];if(t.setRenderTarget(_),d=null,f=null,c=null,s=null,b=null,N.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),k!==null){let L=k.camera;L.fov=k.fov,L.zoom=k.zoom,L.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){l=L,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(L){h=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",lt),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ut=null,j=null;x.depth&&(j=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?Di:Ii,ut=x.stencil?Ts:ii);let ct={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Oe(f.textureWidth,f.textureHeight,{format:Ye,type:an,depthTexture:new ni(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Ye,type:an,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),N.setContext(s),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(L){for(let st=0;st<L.removed.length;st++){let nt=L.removed[st],ut=A.indexOf(nt);ut>=0&&(A[ut]=null,S[ut].disconnect(nt))}for(let st=0;st<L.added.length;st++){let nt=L.added[st],ut=A.indexOf(nt);if(ut===-1){for(let ct=0;ct<S.length;ct++)if(ct>=A.length){A.push(nt),ut=ct;break}else if(A[ct]===null){A[ct]=nt,ut=ct;break}if(ut===-1)break}let j=S[ut];j&&j.connect(nt)}}function et(L,st){st===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(st.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let st=L.near,nt=L.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),ft.near=H.near=M.near=st,ft.far=H.far=M.far=nt,(F!==ft.near||V!==ft.far)&&(s.updateRenderState({depthNear:ft.near,depthFar:ft.far}),F=ft.near,V=ft.far),ft.layers.mask=L.layers.mask|6,M.layers.mask=ft.layers.mask&-5,H.layers.mask=ft.layers.mask&-3;let ut=L.parent,j=ft.cameras;et(ft,ut);for(let ct=0;ct<j.length;ct++)et(j[ct],ut);ft.projectionMatrix.copy(M.projectionMatrix),ft.projectionMatrixInverse.copy(M.projectionMatrixInverse),k===null&&L.isPerspectiveCamera&&(k={camera:L,fov:L.fov,zoom:L.zoom}),X(L,ft,ut)};function X(L,st,nt){nt===null?L.matrix.copy(st.matrixWorld):(L.matrix.copy(nt.matrixWorld),L.matrix.invert(),L.matrix.multiply(st.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(st.projectionMatrix),L.projectionMatrixInverse.copy(st.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=eo*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return ft},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(L){o=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ft)},this.getCameraTexture=function(L){return m[L]};let G=null;function $(L,st){if(u=st.getViewerPose(h||a),p=st,u!==null){let nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ut=!1;nt.length!==ft.cameras.length&&(ft.cameras.length=0,ut=!0);for(let mt=0;mt<nt.length;mt++){let P=nt[mt],ot=null;if(d!==null)ot=d.getViewport(P);else{let ht=c.getViewSubImage(f,P);ot=ht.viewport,mt===0&&(t.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(b))}let Z=J[mt];Z===void 0&&(Z=new We,Z.layers.enable(mt),Z.viewport=new ge,J[mt]=Z),Z.matrix.fromArray(P.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(P.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ot.x,ot.y,ot.width,ot.height),mt===0&&(ft.matrix.copy(Z.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale)),ut===!0&&ft.cameras.push(Z)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){c=n.getBinding();let mt=c.getDepthInformation(nt[0]);mt&&mt.isValid&&mt.texture&&g.init(mt,s.renderState)}if(j&&j.includes("camera-access")&&v){t.state.unbindTexture(),c=n.getBinding();for(let mt=0;mt<nt.length;mt++){let P=nt[mt].camera;if(P){let ot=m[P];ot||(ot=new zr,m[P]=ot);let Z=c.getCameraImage(P);ot.sourceTexture=Z}}}}for(let nt=0;nt<S.length;nt++){let ut=A[nt],j=S[nt];ut!==null&&j!==void 0&&j.update(ut,st,h||a)}G&&G(L,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),p=null}let N=new cd;N.setAnimationLoop($),this.setAnimationLoop=function(L){G=L},this.dispose=function(){}}},Sx=new xe,yd=new de;yd.set(-1,0,0,0,1,0,0,0,1);function Tx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Yc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,_,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,x,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,b=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ex(i,t,e,n){let s={},r={};function a(x,_){let b=_.program;n.uniformBlockBinding(x,b,s[x.id])}function l(x,_){let b=s[x.id];b===void 0&&(p(x),b=o(x),s[x.id]=b,x.addEventListener("dispose",g));let S=_.program;n.updateUBOMapping(x,S);let A=t.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function o(x){let _=i.createBuffer(),b=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function h(x){let _=s[x.id],b=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,y=b.length;A<y;A++){let T=b[A];if(Array.isArray(T))for(let k=0,M=T.length;k<M;k++)u(T[k],A,k,S);else u(T,A,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,_,b,S){if(f(x,_,b,S)===!0){let A=x.__offset,y=x.value;if(Array.isArray(y)){let T=0;for(let k=0;k<y.length;k++){let M=y[k],H=v(M,!0);c(M,x.__data,T),T+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else c(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,x.__data)}}function c(x,_,b){typeof x=="number"||typeof x=="boolean"?_[b]=x:x.isMatrix3?(_[b]=x.elements[0],_[b+1]=x.elements[1],_[b+2]=x.elements[2],_[b+3]=0,_[b+4]=x.elements[3],_[b+5]=x.elements[4],_[b+6]=x.elements[5],_[b+7]=0,_[b+8]=x.elements[6],_[b+9]=x.elements[7],_[b+10]=x.elements[8],_[b+11]=0):ArrayBuffer.isView(x)?_.set(x.subarray(0,_.length-b),b):x.toArray(_,b)}function f(x,_,b,S){let A=x.value,y=_+"_"+b;if(Array.isArray(A)){S[y]===void 0&&(S[y]=[]);let T=S[y],k=!1;for(let M=0;M<A.length;M++)d(A[M],T,M)===!0&&(k=!0);return k}return d(A,S,y)}function d(x,_,b){if(_[b]===void 0)return typeof x=="number"||typeof x=="boolean"?_[b]=x:ArrayBuffer.isView(x)?_[b]=x.slice():_[b]=x.clone(),!0;{let S=_[b];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return _[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function p(x){let _=x.uniforms,b=0,S=16;for(let y=0,T=_.length;y<T;y++){let k=Array.isArray(_[y])?_[y]:[_[y]];for(let M=0,H=k.length;M<H;M++){let J=k[M],ft=Array.isArray(J.value)?J.value:[J.value],F=Array.isArray(_[y])||Array.isArray(J.value),V=b;for(let Y=0,lt=ft.length;Y<lt;Y++){let et=ft[Y],X=v(et,F),G=b%S,$=G%X.boundary,N=G+$;b+=$,N!==0&&S-N<X.storage&&(b+=S-N),Y===0&&(V=b),b+=X.storage}let O=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new O((b-V)/Float32Array.BYTES_PER_ELEMENT),J.__offset=V}}let A=b%S;return A>0&&(b+=S-A),x.__size=b,x.__cache={},this}function v(x,_){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),_===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(x){let _=x.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:l,dispose:m}}var Ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function Rx(){return pi===null&&(pi=new Sn(Ax,16,16,es,je),pi.name="DFG_LUT",pi.minFilter=Ae,pi.magFilter=Ae,pi.wrapS=_n,pi.wrapT=_n,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var dl=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Lo,Io,Po]),m=new Set([an,ii,hr,Ts,Ro,Co]),x=new Uint32Array(4),_=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},S=null,A=null,y=[],T=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,H=!1,J=null,ft=null,F=null,V=null;this._outputColorSpace=Ie;let O=0,Y=0,lt=null,et=-1,X=null,G=new ge,$=new ge,N=null,L=new se(0),st=0,nt=e.width,ut=e.height,j=1,ct=null,vt=null,mt=new ge(0,0,nt,ut),P=new ge(0,0,nt,ut),ot=!1,Z=new ui,ht=new ro,at=!1,wt=!1,Pt=new xe,Jt=new pt,Ut=new ge,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function kt(){return lt===null?j:1}let Q=n;function Wt(D,rt){return e.getContext(D,rt)}let Rt,Bt,_t,Dt,Ot,Ft,z,E,dt,gt,R,B,K,w,I,U,C,q,it,Mt,Et,It,Ht;try{let D={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),Q===null){let rt="webgl2";if(Q=Wt(rt,D),Q===null)throw Wt(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(D){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ce("WebGLRenderer: "+D.message),D}function Gt(){Rt=new Bg(Q),Rt.init(),Et=new bx(Q,Rt),Bt=new Rg(Q,Rt,t,Et),_t=new yx(Q,Rt),Bt.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),ft=Q.createFramebuffer(),F=Q.createFramebuffer(),V=Q.createFramebuffer(),Dt=new Gg(Q),Ot=new rx,Ft=new _x(Q,Rt,_t,Ot,Bt,Et,Dt),z=new Og(M),E=new Wp(Q),It=new Eg(Q,E),dt=new zg(Q,E,Dt,It),gt=new Wg(Q,dt,E,It,Dt),q=new Vg(Q,Bt,Ft),I=new Cg(Ot),R=new sx(M,z,Rt,Bt,It,I),B=new Tx(M,Ot),K=new ox,w=new fx(Rt),C=new Tg(M,z,_t,gt,p,o),U=new xx(M,gt,Bt),Ht=new Ex(Q,Dt,Bt,_t),it=new Ag(Q,Rt,Dt),Mt=new Hg(Q,Rt,Dt),Dt.programs=R.programs,M.capabilities=Bt,M.extensions=Rt,M.properties=Ot,M.renderLists=K,M.shadowMap=U,M.state=_t,M.info=Dt}v!==an&&(k=new qg(v,e.width,e.height,l,s,r));let Ct=new oh(M,Q);this.xr=Ct,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let D=Rt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Rt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(nt,ut,!1))},this.getSize=function(D){return D.set(nt,ut)},this.setSize=function(D,rt,St=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=D,ut=rt,e.width=Math.floor(D*j),e.height=Math.floor(rt*j),St===!0&&(e.style.width=D+"px",e.style.height=rt+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,D,rt)},this.getDrawingBufferSize=function(D){return D.set(nt*j,ut*j).floor()},this.setDrawingBufferSize=function(D,rt,St){nt=D,ut=rt,j=St,e.width=Math.floor(D*St),e.height=Math.floor(rt*St),this.setViewport(0,0,D,rt)},this.setEffects=function(D){if(v===an){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let rt=0;rt<D.length;rt++)if(D[rt].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(G)},this.getViewport=function(D){return D.copy(mt)},this.setViewport=function(D,rt,St,xt){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,rt,St,xt),_t.viewport(G.copy(mt).multiplyScalar(kt()).round())},this.getScissor=function(D){return D.copy(P)},this.setScissor=function(D,rt,St,xt){D.isVector4?P.set(D.x,D.y,D.z,D.w):P.set(D,rt,St,xt),_t.scissor($.copy(P).multiplyScalar(kt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(D){_t.setScissorTest(ot=D)},this.setOpaqueSort=function(D){ct=D},this.setTransparentSort=function(D){vt=D},this.getClearColor=function(D){return D.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(D=!0,rt=!0,St=!0){let xt=0;if(D){let bt=!1;if(lt!==null){let Vt=lt.texture.format;bt=g.has(Vt)}if(bt){let Vt=lt.texture.type,jt=m.has(Vt),zt=C.getClearColor(),Yt=C.getClearAlpha(),te=zt.r,he=zt.g,ve=zt.b;jt?(x[0]=te,x[1]=he,x[2]=ve,x[3]=Yt,Q.clearBufferuiv(Q.COLOR,0,x)):(_[0]=te,_[1]=he,_[2]=ve,_[3]=Yt,Q.clearBufferiv(Q.COLOR,0,_))}else xt|=Q.COLOR_BUFFER_BIT}rt&&(xt|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),St&&(xt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),xt!==0&&Q.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),J=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),C.dispose(),K.dispose(),w.dispose(),Ft.dispose(),Ot.dispose(),z.dispose(),gt.dispose(),dt.dispose(),It.dispose(),Ht.dispose(),R.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ke),Ct.removeEventListener("sessionend",hs),Ee.stop()};function Nt(D){D.preventDefault(),qc("WebGLRenderer: Context Lost."),H=!0}function qt(){qc("WebGLRenderer: Context Restored."),H=!1;let D=Dt.autoReset,rt=U.enabled,St=U.autoUpdate,xt=U.needsUpdate,bt=U.type;Gt(),Dt.autoReset=D,U.enabled=rt,U.autoUpdate=St,U.needsUpdate=xt,U.type=bt}function Tt(D){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ae(D){let rt=D.target;rt.removeEventListener("dispose",ae),le(rt)}function le(D){De(D),Ot.remove(D)}function De(D){let rt=Ot.get(D).programs;rt!==void 0&&(rt.forEach(function(St){R.releaseProgram(St)}),D.isShaderMaterial&&R.releaseShaderCache(D))}this.renderBufferDirect=function(D,rt,St,xt,bt,Vt){rt===null&&(rt=At);let jt=bt.isMesh&&bt.matrixWorld.determinantAffine()<0,zt=Xl(D,rt,St,xt,bt);_t.setMaterial(xt,jt);let Yt=St.index,te=1;if(xt.wireframe===!0){if(Yt=dt.getWireframeAttribute(St),Yt===void 0)return;te=2}let he=St.drawRange,ve=St.attributes.position,Kt=he.start*te,ye=(he.start+he.count)*te;Vt!==null&&(Kt=Math.max(Kt,Vt.start*te),ye=Math.min(ye,(Vt.start+Vt.count)*te)),Yt!==null?(Kt=Math.max(Kt,0),ye=Math.min(ye,Yt.count)):ve!=null&&(Kt=Math.max(Kt,0),ye=Math.min(ye,ve.count));let Ge=ye-Kt;if(Ge<0||Ge===1/0)return;It.setup(bt,xt,zt,St,Yt);let Pe,Ce=it;if(Yt!==null&&(Pe=E.get(Yt),Ce=Mt,Ce.setIndex(Pe)),bt.isMesh)xt.wireframe===!0?(_t.setLineWidth(xt.wireframeLinewidth*kt()),Ce.setMode(Q.LINES)):Ce.setMode(Q.TRIANGLES);else if(bt.isLine){let dn=xt.linewidth;dn===void 0&&(dn=1),_t.setLineWidth(dn*kt()),bt.isLineSegments?Ce.setMode(Q.LINES):bt.isLineLoop?Ce.setMode(Q.LINE_LOOP):Ce.setMode(Q.LINE_STRIP)}else bt.isPoints?Ce.setMode(Q.POINTS):bt.isSprite&&Ce.setMode(Q.TRIANGLES);if(bt.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(bt._multiDrawStarts,bt._multiDrawCounts,bt._multiDrawCount);else{let dn=bt._multiDrawStarts,ee=bt._multiDrawCounts,yn=bt._multiDrawCount,Me=Yt?E.get(Yt).bytesPerElement:1,ds=Ot.get(xt).currentProgram.getUniforms();for(let fn=0;fn<yn;fn++)ds.setValue(Q,"_gl_DrawID",fn),Ce.render(dn[fn]/Me,ee[fn])}else if(bt.isInstancedMesh)Ce.renderInstances(Kt,Ge,bt.count);else if(St.isInstancedBufferGeometry){let dn=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,ee=Math.min(St.instanceCount,dn);Ce.renderInstances(Kt,Ge,ee)}else Ce.render(Kt,Ge)};function Cn(D,rt,St,xt){J!==null&&D.isNodeMaterial&&J.setObject(xt,D),at===!0&&I.setState(D,St,!1),D.transparent===!0&&D.side===sn&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,Ln(D,rt,xt),D.side=ts,D.needsUpdate=!0,Ln(D,rt,xt),D.side=sn):Ln(D,rt,xt)}this.compile=function(D,rt,St=null){St===null&&(St=D),J!==null&&J.renderStart(D,rt,St),A=w.get(St),A.init(rt),T.push(A),St.traverseVisible(function(bt){bt.isLight&&bt.layers.test(rt.layers)&&(A.pushLight(bt),bt.castShadow&&A.pushShadow(bt))}),D!==St&&D.traverseVisible(function(bt){bt.isLight&&bt.layers.test(rt.layers)&&(A.pushLight(bt),bt.castShadow&&A.pushShadow(bt))}),A.setupLights(),J!==null&&J.updateLights(A.state.lightsArray),wt=this.localClippingEnabled,at=I.init(this.clippingPlanes,wt),at===!0&&I.setGlobalState(this.clippingPlanes,rt),J!==null&&U.render(A.state.shadowsArray,St,rt);let xt=new Set;return D.traverse(function(bt){if(!(bt.isMesh||bt.isPoints||bt.isLine||bt.isSprite))return;let Vt=bt.material;if(Vt)if(Array.isArray(Vt))for(let jt=0;jt<Vt.length;jt++){let zt=Vt[jt];Cn(zt,St,rt,bt),xt.add(zt)}else Cn(Vt,St,rt,bt),xt.add(Vt)}),A=T.pop(),J!==null&&J.renderEnd(),xt},this.compileAsync=function(D,rt,St=null){let xt=this.compile(D,rt,St);return new Promise(bt=>{function Vt(){if(xt.forEach(function(jt){let Yt=Ot.get(jt).currentProgram;(Yt===void 0||Yt.isReady())&&xt.delete(jt)}),xt.size===0){bt(D);return}setTimeout(Vt,10)}Rt.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Pn=null;function Mn(D){Pn&&Pn(D)}function ke(){Ee.stop()}function hs(){Ee.start()}let Ee=new cd;Ee.setAnimationLoop(Mn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(D){Pn=D,Ct.setAnimationLoop(D),D===null?Ee.stop():Ee.start()},Ct.addEventListener("sessionstart",ke),Ct.addEventListener("sessionend",hs),this.render=function(D,rt){if(rt!==void 0&&rt.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(D,rt);let St=Ct.enabled===!0&&Ct.isPresenting===!0,xt=k!==null&&(lt===null||St)&&k.begin(M,lt);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(rt),rt=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(M,D,rt,lt),A=w.get(D,T.length),A.init(rt),A.state.textureUnits=Ft.getTextureUnits(),T.push(A),Pt.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),rt.isArrayCamera?ht.setFromArrayCamera(rt):Z.setFromProjectionMatrix(Pt,Vn,rt.reversedDepth),wt=this.localClippingEnabled,at=I.init(this.clippingPlanes,wt),S=K.get(D,y.length),S.init(),y.push(S),this.info.render.frame++,Ct.enabled===!0&&Ct.isPresenting===!0){let jt=M.xr.getDepthSensingMesh();jt!==null&&He(jt,rt,-1/0,M.sortObjects)}He(D,rt,0,M.sortObjects),S.finish(),J!==null&&J.updateLights(A.state.lightsArray),M.sortObjects===!0&&S.sort(ct,vt),Lt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Lt&&C.addToRenderList(S,D),this.info.autoReset===!0&&this.info.reset(),at===!0&&I.beginShadows();let bt=A.state.shadowsArray;if(U.render(bt,D,rt),at===!0&&I.endShadows(),(xt&&k.hasRenderPass())===!1){let jt=S.opaque,zt=S.transmissive;if(A.setupLights(),rt.isArrayCamera){let Yt=rt.cameras;if(zt.length>0)for(let te=0,he=Yt.length;te<he;te++){let ve=Yt[te];In(jt,zt,D,ve)}Lt&&C.render(D);for(let te=0,he=Yt.length;te<he;te++){let ve=Yt[te];jn(S,D,ve,ve.viewport)}}else zt.length>0&&In(jt,zt,D,rt),Lt&&C.render(D),jn(S,D,rt)}lt!==null&&Y===0&&(Ft.updateMultisampleRenderTarget(lt),Ft.updateRenderTargetMipmap(lt)),xt&&k.end(M),D.isScene===!0&&D.onAfterRender(M,D,rt),It.resetDefaultState(),et=-1,X=null,T.pop(),T.length>0?(A=T[T.length-1],Ft.setTextureUnits(A.state.textureUnits),at===!0&&I.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,J!==null&&J.renderEnd()};function He(D,rt,St,xt){if(D.visible===!1)return;if(D.layers.test(rt.layers)){if(D.isGroup)St=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(rt);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){let jt=rt.isArrayCamera?ht:Z;if(!D.frustumCulled||D.intersectsFrustum(jt)){xt&&Ut.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Pt);let zt=gt.update(D),Yt=D.material;Yt.visible&&S.push(D,zt,Yt,St,Ut.z,null,rt)}}else if(D.isMesh||D.isLine||D.isPoints){let jt=rt.isArrayCamera?ht:Z;if(!D.frustumCulled||D.intersectsFrustum(jt)){let zt=gt.update(D),Yt=D.material;if(xt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ut.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ut.copy(zt.boundingSphere.center)),Ut.applyMatrix4(D.matrixWorld).applyMatrix4(Pt)),Array.isArray(Yt)){let te=zt.groups;for(let he=0,ve=te.length;he<ve;he++){let Kt=te[he],ye=Yt[Kt.materialIndex];ye&&ye.visible&&S.push(D,zt,ye,St,Ut.z,Kt,rt)}}else Yt.visible&&S.push(D,zt,Yt,St,Ut.z,null,rt)}}}let Vt=D.children;for(let jt=0,zt=Vt.length;jt<zt;jt++)He(Vt[jt],rt,St,xt)}function jn(D,rt,St,xt){let{opaque:bt,transmissive:Vt,transparent:jt}=D;A.setupLightsView(St),at===!0&&I.setGlobalState(M.clippingPlanes,St),xt&&_t.viewport(G.copy(xt)),bt.length>0&&ki(bt,rt,St),Vt.length>0&&ki(Vt,rt,St),jt.length>0&&ki(jt,rt,St),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function In(D,rt,St,xt){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[xt.id]===void 0){let Kt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[xt.id]=new Oe(1,1,{generateMipmaps:!0,type:Kt?je:an,minFilter:rn,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Vt=A.state.transmissionRenderTarget[xt.id],jt=xt.viewport||G;Vt.setSize(jt.z*M.transmissionResolutionScale,jt.w*M.transmissionResolutionScale);let zt=M.getRenderTarget(),Yt=M.getActiveCubeFace(),te=M.getActiveMipmapLevel();M.setRenderTarget(Vt),M.getClearColor(L),st=M.getClearAlpha(),st<1&&M.setClearColor(16777215,.5),M.clear(),Lt&&C.render(St);let he=M.toneMapping;M.toneMapping=di;let ve=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),A.setupLightsView(xt),at===!0&&I.setGlobalState(M.clippingPlanes,xt),ki(D,St,xt),Ft.updateMultisampleRenderTarget(Vt),Ft.updateRenderTargetMipmap(Vt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ye=0,Ge=rt.length;ye<Ge;ye++){let Pe=rt[ye],{object:Ce,geometry:dn,material:ee,group:yn}=Pe;if(ee.side===sn&&Ce.layers.test(xt.layers)){let Me=ee.side;ee.side=nn,ee.needsUpdate=!0,_r(Ce,St,xt,dn,ee,yn),ee.side=Me,ee.needsUpdate=!0,Kt=!0}}Kt===!0&&(Ft.updateMultisampleRenderTarget(Vt),Ft.updateRenderTargetMipmap(Vt))}M.setRenderTarget(zt,Yt,te),M.setClearColor(L,st),ve!==void 0&&(xt.viewport=ve),M.toneMapping=he}function ki(D,rt,St){let xt=rt.isScene===!0?rt.overrideMaterial:null;for(let bt=0,Vt=D.length;bt<Vt;bt++){let jt=D[bt],{object:zt,geometry:Yt,group:te}=jt,he=jt.material;he.allowOverride===!0&&xt!==null&&(he=xt),zt.layers.test(St.layers)&&_r(zt,rt,St,Yt,he,te)}}function _r(D,rt,St,xt,bt,Vt){J!==null&&bt.isNodeMaterial&&J.setObject(D,bt),D.onBeforeRender(M,rt,St,xt,bt,Vt),D.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),bt.onBeforeRender(M,rt,St,xt,D,Vt),bt.transparent===!0&&bt.side===sn&&bt.forceSinglePass===!1?(bt.side=nn,bt.needsUpdate=!0,M.renderBufferDirect(St,rt,xt,bt,D,Vt),bt.side=ts,bt.needsUpdate=!0,M.renderBufferDirect(St,rt,xt,bt,D,Vt),bt.side=sn):M.renderBufferDirect(St,rt,xt,bt,D,Vt),D.onAfterRender(M,rt,St,xt,bt,Vt)}function br(D){let rt=0;for(let St of D)St.texture!==null&&rt++;return rt}function Ln(D,rt,St){rt.isScene!==!0&&(rt=At);let xt=Ot.get(D),bt=A.state.lights,Vt=A.state.shadowsArray,jt=bt.state.version,zt=R.getParameters(D,bt.state,Vt,rt,St,A.state.lightProbeGridArray),Yt=R.getProgramCacheKey(zt),te=xt.programs;xt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?rt.environment:null,xt.fog=rt.fog;let he=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;xt.envMap=z.get(D.envMap||xt.environment,he),xt.envMapRotation=xt.environment!==null&&D.envMap===null?rt.environmentRotation:D.envMapRotation,te===void 0&&(D.addEventListener("dispose",ae),te=new Map,xt.programs=te,xt.programVariants=new Map);let ve=te.get(Yt);if(ve!==void 0){if(xt.currentProgram===ve&&xt.lightsStateVersion===jt)return Bi(D,zt),ve}else zt.uniforms=R.getUniforms(D),J!==null&&D.isNodeMaterial&&J.build(D,St,zt),D.onBeforeCompile(zt,M),ve=R.acquireProgram(zt,Yt),te.set(Yt,ve),xt.uniforms=zt.uniforms;let Kt=xt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Kt.clippingPlanes=I.uniform),Bi(D,zt),xt.needsLights=Xt(D),xt.lightsStateVersion=jt,xt.needsLights&&(Kt.ambientLightColor.value=bt.state.ambient,Kt.lightProbe.value=bt.state.probe,Kt.sunLights.value=bt.state.sun,Kt.sunLightShadows.value=bt.state.sunShadow,Kt.directionalLights.value=bt.state.directional,Kt.directionalLightShadows.value=bt.state.directionalShadow,Kt.spotLights.value=bt.state.spot,Kt.spotLightShadows.value=bt.state.spotShadow,Kt.rectAreaLights.value=bt.state.rectArea,Kt.ltc_1.value=bt.state.rectAreaLTC1,Kt.ltc_2.value=bt.state.rectAreaLTC2,Kt.pointLights.value=bt.state.point,Kt.pointLightShadows.value=bt.state.pointShadow,Kt.hemisphereLights.value=bt.state.hemi,Kt.sunShadowMatrix.value=bt.state.sunShadowMatrix,Kt.sunShadowCascade.value=bt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=bt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=bt.state.spotLightMatrix,Kt.spotLightMap.value=bt.state.spotLightMap,Kt.pointShadowMatrix.value=bt.state.pointShadowMatrix),xt.numLightProbeGrids=br(A.state.lightProbeGridArray),xt.currentProgram=ve,xt.uniformsList=null,ve}function Oi(D,rt,St,xt,bt){let Vt=Ot.get(D),jt=Vt.currentProgram.id+","+xt+","+bt,zt=Vt.programVariants.get(jt);return zt===void 0?(zt=Ln(D,rt,St),Vt.programVariants.set(jt,zt)):(Vt.currentProgram=zt,Vt.uniformsList=null,Vt.outputColorSpace=xt,Vt.toneMapping=bt),zt}function us(D){if(D.uniformsList===null){let rt=D.currentProgram.getUniforms();D.uniformsList=ur.seqWithValue(rt.seq,D.uniforms)}return D.uniformsList}function Bi(D,rt){let St=Ot.get(D);St.outputColorSpace=rt.outputColorSpace,St.batching=rt.batching,St.batchingColor=rt.batchingColor,St.instancing=rt.instancing,St.instancingColor=rt.instancingColor,St.instancingMorph=rt.instancingMorph,St.skinning=rt.skinning,St.morphTargets=rt.morphTargets,St.morphNormals=rt.morphNormals,St.morphColors=rt.morphColors,St.morphTargetsCount=rt.morphTargetsCount,St.numClippingPlanes=rt.numClippingPlanes,St.numIntersection=rt.numClipIntersection,St.vertexAlphas=rt.vertexAlphas,St.vertexTangents=rt.vertexTangents,St.toneMapping=rt.toneMapping}function Xl(D,rt,St,xt,bt){rt.isScene!==!0&&(rt=At),Ft.resetTextureUnits();let Vt=rt.fog,jt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?rt.environment:null,zt=lt===null?M.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:_e.workingColorSpace,Yt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap,te=z.get(xt.envMap||jt,Yt),he=xt.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ve=!!St.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Kt=!!St.morphAttributes.position,ye=!!St.morphAttributes.normal,Ge=!!St.morphAttributes.color,Pe=di;xt.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Pe=M.toneMapping);let Ce=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,ee=Ot.get(xt),yn=A.state.lights;if(at===!0&&(wt===!0||D!==X)){let Fe=D===X&&xt.id===et;I.setState(xt,D,Fe)}let Me=!1,ds=!1;xt.version===ee.__version?ee.needsLights&&ee.lightsStateVersion!==yn.state.version||bt.isBatchedMesh&&ee.batching===!1||!bt.isBatchedMesh&&ee.batching===!0||bt.isBatchedMesh&&ee.batchingColor===!0&&bt._colorsTexture===null||bt.isBatchedMesh&&ee.batchingColor===!1&&bt._colorsTexture!==null||bt.isInstancedMesh&&ee.instancing===!1||!bt.isInstancedMesh&&ee.instancing===!0||bt.isSkinnedMesh&&ee.skinning===!1||!bt.isSkinnedMesh&&ee.skinning===!0||bt.isInstancedMesh&&ee.instancingColor===!0&&bt.instanceColor===null||bt.isInstancedMesh&&ee.instancingColor===!1&&bt.instanceColor!==null||bt.isInstancedMesh&&ee.instancingMorph===!0&&bt.morphTexture===null||bt.isInstancedMesh&&ee.instancingMorph===!1&&bt.morphTexture!==null||ee.envMap!==te||xt.fog===!0&&ee.fog!==Vt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==I.numPlanes||ee.numIntersection!==I.numIntersection)||ee.vertexAlphas!==he||ee.vertexTangents!==ve||ee.morphTargets!==Kt||ee.morphNormals!==ye||ee.morphColors!==Ge||ee.morphTargetsCount!==dn||ee.numLightProbeGrids!==br(A.state.lightProbeGridArray)?Me=!0:(ee.outputColorSpace!==zt||ee.toneMapping!==Pe)&&(ds=!0):(Me=!0,ee.__version=xt.version);let fn=ee.currentProgram;(Me===!0||ds===!0)&&(fn=ds===!0?Oi(xt,rt,bt,zt,Pe):Ln(xt,rt,bt),J&&xt.isNodeMaterial&&J.onUpdateProgram(xt,fn,ee));let wa=!1,zi=!1,fs=!1,we=fn.getUniforms(),ln=ee.uniforms;if(_t.useProgram(fn.program)&&(wa=!0,zi=!0,fs=!0),xt.id!==et&&(et=xt.id,zi=!0),wa||X!==D){_t.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),we.setValue(Q,"projectionMatrix",D.projectionMatrix),we.setValue(Q,"viewMatrix",D.matrixWorldInverse);let tn=we.map.cameraPosition;tn!==void 0&&tn.setValue(Q,Jt.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&we.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&we.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),X!==D&&(X=D,zi=!0,fs=!0)}if(ee.needsLights&&(yn.state.sunShadowMap.length>0&&we.setValue(Q,"sunShadowMap",yn.state.sunShadowMap,Ft),yn.state.directionalShadowMap.length>0&&we.setValue(Q,"directionalShadowMap",yn.state.directionalShadowMap,Ft),yn.state.spotShadowMap.length>0&&we.setValue(Q,"spotShadowMap",yn.state.spotShadowMap,Ft),yn.state.pointShadowMap.length>0&&we.setValue(Q,"pointShadowMap",yn.state.pointShadowMap,Ft)),bt.isSkinnedMesh){we.setOptional(Q,bt,"bindMatrix"),we.setOptional(Q,bt,"bindMatrixInverse");let Fe=bt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(Q,"boneTexture",Fe.boneTexture,Ft))}bt.isBatchedMesh&&(we.setOptional(Q,bt,"batchingTexture"),we.setValue(Q,"batchingTexture",bt._matricesTexture,Ft),we.setOptional(Q,bt,"batchingIdTexture"),we.setValue(Q,"batchingIdTexture",bt._indirectTexture,Ft),we.setOptional(Q,bt,"batchingColorTexture"),bt._colorsTexture!==null&&we.setValue(Q,"batchingColorTexture",bt._colorsTexture,Ft));let Jn=St.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&q.update(bt,St,fn),(zi||ee.receiveShadow!==bt.receiveShadow)&&(ee.receiveShadow=bt.receiveShadow,we.setValue(Q,"receiveShadow",bt.receiveShadow)),(xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial)&&xt.envMap===null&&rt.environment!==null&&(ln.envMapIntensity.value=rt.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Rx()),zi){if(we.setValue(Q,"toneMappingExposure",M.toneMappingExposure),ee.needsLights&&wr(ln,fs),Vt&&xt.fog===!0&&B.refreshFogUniforms(ln,Vt),B.refreshMaterialUniforms(ln,xt,j,ut,A.state.transmissionRenderTarget[D.id]),ee.needsLights&&ee.numLightProbeGrids>0){let Fe=b,tn=0;for(let wi of A.state.lightProbeGridArray)wi.texture!==null&&(Fe.textures[tn]=wi.texture,Fe.min[tn]=wi.boundingBox.min,Fe.max[tn]=wi.boundingBox.max,Fe.resolution[tn]=wi.resolution,tn++);for(let wi in Fe)Fe[wi].length=tn;ln.probesSH.value=Fe.textures,ln.probesMin.value=Fe.min,ln.probesMax.value=Fe.max,ln.probesResolution.value=Fe.resolution}ur.upload(Q,us(ee),ln,Ft)}if(xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(ur.upload(Q,us(ee),ln,Ft),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&we.setValue(Q,"center",bt.center),we.setValue(Q,"modelViewMatrix",bt.modelViewMatrix),we.setValue(Q,"normalMatrix",bt.normalMatrix),we.setValue(Q,"modelMatrix",bt.matrixWorld),xt.uniformsGroups!==void 0){let Fe=xt.uniformsGroups;for(let tn=0,wi=Fe.length;tn<wi;tn++){let Ch=Fe[tn];Ht.update(Ch,fn),Ht.bind(Ch,fn)}}return fn}function wr(D,rt){D.ambientLightColor.needsUpdate=rt,D.lightProbe.needsUpdate=rt,D.sunLights.needsUpdate=rt,D.sunLightShadows.needsUpdate=rt,D.directionalLights.needsUpdate=rt,D.directionalLightShadows.needsUpdate=rt,D.pointLights.needsUpdate=rt,D.pointLightShadows.needsUpdate=rt,D.spotLights.needsUpdate=rt,D.spotLightShadows.needsUpdate=rt,D.rectAreaLights.needsUpdate=rt,D.hemisphereLights.needsUpdate=rt}function Xt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(D,rt,St){let xt=Ot.get(D);xt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,xt.__autoAllocateDepthBuffer===!1&&(xt.__useRenderToTexture=!1),Ot.get(D.texture).__webglTexture=rt,Ot.get(D.depthTexture).__webglTexture=xt.__autoAllocateDepthBuffer?void 0:St,xt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,rt){let St=Ot.get(D);St.__webglFramebuffer=rt,St.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(D,rt=0,St=0){lt=D,O=rt,Y=St;let xt=null,bt=!1,Vt=!1;if(D){let zt=Ot.get(D);if(zt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(Q.FRAMEBUFFER,zt.__webglFramebuffer),G.copy(D.viewport),$.copy(D.scissor),N=D.scissorTest,_t.viewport(G),_t.scissor($),_t.setScissorTest(N),et=-1;return}else if(zt.__webglFramebuffer===void 0)Ft.setupRenderTarget(D);else if(zt.__hasExternalTextures)Ft.rebindTextures(D,Ot.get(D.texture).__webglTexture,Ot.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let he=D.depthTexture;if(zt.__boundDepthTexture!==he){if(he!==null&&Ot.has(he)&&(D.width!==he.image.width||D.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(D)}}let Yt=D.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Vt=!0);let te=Ot.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(te[rt])?xt=te[rt][St]:xt=te[rt],bt=!0):D.samples>0&&Ft.useMultisampledRTT(D)===!1?xt=Ot.get(D).__webglMultisampledFramebuffer:Array.isArray(te)?xt=te[St]:xt=te,G.copy(D.viewport),$.copy(D.scissor),N=D.scissorTest}else G.copy(mt).multiplyScalar(j).floor(),$.copy(P).multiplyScalar(j).floor(),N=ot;if(St!==0&&(xt=ft),_t.bindFramebuffer(Q.FRAMEBUFFER,xt)&&_t.drawBuffers(D,xt),_t.viewport(G),_t.scissor($),_t.setScissorTest(N),bt){let zt=Ot.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt.__webglTexture,St)}else if(Vt){let zt=rt;for(let Yt=0;Yt<D.textures.length;Yt++){let te=Ot.get(D.textures[Yt]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Yt,te.__webglTexture,St,zt)}}else if(D!==null&&St!==0){let zt=Ot.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,zt.__webglTexture,St)}et=-1};function fe(D){let rt=Ot.get(D);return(rt.__readFormat!==D.format||rt.__readType!==D.type)&&(rt.__readFormat=D.format,rt.__readType=D.type,rt.__formatReadable=Bt.textureFormatReadable(D.format),rt.__typeReadable=Bt.textureTypeReadable(D.type)),rt}this.readRenderTargetPixels=function(D,rt,St,xt,bt,Vt,jt,zt=0){if(!(D&&D.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Ot.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt){_t.bindFramebuffer(Q.FRAMEBUFFER,Yt);try{let te=D.textures[zt],he=te.format,ve=te.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+zt);let Kt=fe(te);if(Kt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=D.width-xt&&St>=0&&St<=D.height-bt&&Q.readPixels(rt,St,xt,bt,Et.convert(he),Et.convert(ve),Vt)}finally{let te=lt!==null?Ot.get(lt).__webglFramebuffer:null;_t.bindFramebuffer(Q.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(D,rt,St,xt,bt,Vt,jt,zt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Ot.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&jt!==void 0&&(Yt=Yt[jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt)if(rt>=0&&rt<=D.width-xt&&St>=0&&St<=D.height-bt){_t.bindFramebuffer(Q.FRAMEBUFFER,Yt);let te=D.textures[zt],he=te.format,ve=te.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+zt);let Kt=fe(te);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,ye),Q.bufferData(Q.PIXEL_PACK_BUFFER,Vt.byteLength,Q.STREAM_READ),Q.readPixels(rt,St,xt,bt,Et.convert(he),Et.convert(ve),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);let Ge=lt!==null?Ot.get(lt).__webglFramebuffer:null;_t.bindFramebuffer(Q.FRAMEBUFFER,Ge);let Pe=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Fu(Q,Pe,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,ye),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Vt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(ye),Q.deleteSync(Pe),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,rt=null,St=0){let xt=Math.pow(2,-St),bt=Math.floor(D.image.width*xt),Vt=Math.floor(D.image.height*xt),jt=rt!==null?rt.x:0,zt=rt!==null?rt.y:0;Ft.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,St,0,0,jt,zt,bt,Vt),_t.unbindTexture()},this.copyTextureToTexture=function(D,rt,St=null,xt=null,bt=0,Vt=0){let jt,zt,Yt,te,he,ve,Kt,ye,Ge,Pe=D.isCompressedTexture?D.mipmaps[Vt]:D.image;if(St!==null)jt=St.max.x-St.min.x,zt=St.max.y-St.min.y,Yt=St.isBox3?St.max.z-St.min.z:1,te=St.min.x,he=St.min.y,ve=St.isBox3?St.min.z:0;else{let we=Math.pow(2,-bt);jt=Math.floor(Pe.width*we),zt=Math.floor(Pe.height*we),D.isDataArrayTexture?Yt=Pe.depth:D.isData3DTexture?Yt=Math.floor(Pe.depth*we):Yt=1,te=0,he=0,ve=0}xt!==null?(Kt=xt.x,ye=xt.y,Ge=xt.z):(Kt=0,ye=0,Ge=0);let Ce=Et.convert(rt.format),dn=Et.convert(rt.type),ee;rt.isData3DTexture?(Ft.setTexture3D(rt,0),ee=Q.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Ft.setTexture2DArray(rt,0),ee=Q.TEXTURE_2D_ARRAY):(Ft.setTexture2D(rt,0),ee=Q.TEXTURE_2D),_t.activeTexture(Q.TEXTURE0),_t.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,rt.flipY),_t.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),_t.pixelStorei(Q.UNPACK_ALIGNMENT,rt.unpackAlignment);let yn=_t.getParameter(Q.UNPACK_ROW_LENGTH),Me=_t.getParameter(Q.UNPACK_IMAGE_HEIGHT),ds=_t.getParameter(Q.UNPACK_SKIP_PIXELS),fn=_t.getParameter(Q.UNPACK_SKIP_ROWS),wa=_t.getParameter(Q.UNPACK_SKIP_IMAGES);_t.pixelStorei(Q.UNPACK_ROW_LENGTH,Pe.width),_t.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Pe.height),_t.pixelStorei(Q.UNPACK_SKIP_PIXELS,te),_t.pixelStorei(Q.UNPACK_SKIP_ROWS,he),_t.pixelStorei(Q.UNPACK_SKIP_IMAGES,ve);let zi=D.isDataArrayTexture||D.isData3DTexture,fs=rt.isDataArrayTexture||rt.isData3DTexture;if(D.isDepthTexture){let we=Ot.get(D),ln=Ot.get(rt),Jn=Ot.get(we.__renderTarget),Fe=Ot.get(ln.__renderTarget);_t.bindFramebuffer(Q.READ_FRAMEBUFFER,Jn.__webglFramebuffer),_t.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let tn=0;tn<Yt;tn++)zi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ot.get(D).__webglTexture,bt,ve+tn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ot.get(rt).__webglTexture,Vt,Ge+tn)),Q.blitFramebuffer(te,he,te+jt,he+zt,Kt,ye,Kt+jt,ye+zt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);_t.bindFramebuffer(Q.READ_FRAMEBUFFER,null),_t.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(bt!==0||D.isRenderTargetTexture||Ot.has(D)){let we=Ot.get(D),ln=Ot.get(rt);_t.bindFramebuffer(Q.READ_FRAMEBUFFER,F),_t.bindFramebuffer(Q.DRAW_FRAMEBUFFER,V);for(let Jn=0;Jn<Yt;Jn++)zi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,we.__webglTexture,bt,ve+Jn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,we.__webglTexture,bt),fs?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ln.__webglTexture,Vt,Ge+Jn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ln.__webglTexture,Vt),bt!==0?Q.blitFramebuffer(te,he,te+jt,he+zt,Kt,ye,Kt+jt,ye+zt,Q.COLOR_BUFFER_BIT,Q.NEAREST):fs?Q.copyTexSubImage3D(ee,Vt,Kt,ye,Ge+Jn,te,he,jt,zt):Q.copyTexSubImage2D(ee,Vt,Kt,ye,te,he,jt,zt);_t.bindFramebuffer(Q.READ_FRAMEBUFFER,null),_t.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else fs?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(ee,Vt,Kt,ye,Ge,jt,zt,Yt,Ce,dn,Pe.data):rt.isCompressedArrayTexture?Q.compressedTexSubImage3D(ee,Vt,Kt,ye,Ge,jt,zt,Yt,Ce,Pe.data):Q.texSubImage3D(ee,Vt,Kt,ye,Ge,jt,zt,Yt,Ce,dn,Pe):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Vt,Kt,ye,jt,zt,Ce,dn,Pe.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Vt,Kt,ye,Pe.width,Pe.height,Ce,Pe.data):Q.texSubImage2D(Q.TEXTURE_2D,Vt,Kt,ye,jt,zt,Ce,dn,Pe);_t.pixelStorei(Q.UNPACK_ROW_LENGTH,yn),_t.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Me),_t.pixelStorei(Q.UNPACK_SKIP_PIXELS,ds),_t.pixelStorei(Q.UNPACK_SKIP_ROWS,fn),_t.pixelStorei(Q.UNPACK_SKIP_IMAGES,wa),Vt===0&&rt.generateMipmaps===!0&&rt.mipmapsAutoUpdate===!0&&Q.generateMipmap(ee),_t.unbindTexture()},this.initRenderTarget=function(D){Ot.get(D).__webglFramebuffer===void 0&&Ft.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ft.setTextureCube(D,0):D.isData3DTexture?Ft.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ft.setTexture2DArray(D,0):Ft.setTexture2D(D,0),_t.unbindTexture()},this.resetState=function(){O=0,Y=0,lt=null,_t.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ne=63710088e-1,pr=2*Math.PI*ne,yt=Math.PI/180,is=Math.atan(Math.sinh(Math.PI)),$t=(i,t,e)=>i<t?t:i>e?e:i,Xn=(i,t,e)=>i+(t-i)*e,_d=i=>i*i*(3-2*i),wn=i=>i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI)),ss=(i,t)=>(i+Math.PI)/(2*Math.PI)*2**t,rs=(i,t)=>{let e=$t(i,-is,is);return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t},gi=(i,t)=>i/2**t*2*Math.PI-Math.PI,zn=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**t))),xn=(i,t,e=[0,0,0])=>{let n=Math.cos(t);return e[0]=n*Math.cos(i),e[1]=n*Math.sin(i),e[2]=Math.sin(t),e},ml=i=>{let t=Math.hypot(i[0],i[1],i[2]);return[Math.atan2(i[1],i[0]),Math.asin($t(i[2]/t,-1,1))]},si=(i,t)=>{let e=xn(i,t),n=[-Math.sin(i),Math.cos(i),0],s=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];return{east:n,north:s,up:e}},hn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],ha=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],mr=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Yn=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],En=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],gr=(i,t,e,n)=>{let s=Math.sin((n-t)/2),r=Math.sin((e-i)/2);return 2*Math.asin(Math.min(1,Math.sqrt(s*s+Math.cos(t)*Math.cos(n)*r*r)))},bd=(i,t,e)=>{let n=hn(i,t),s=hn(i,i)-e*e,r=n*n-s;if(r<0)return-1;let a=Math.sqrt(r),l=-n-a;return l>0?l:-n+a>0?-n+a:-1},An=(i,t,e=4)=>`${Math.abs(i).toFixed(e)}\xB0${i>=0?"N":"S"} ${Math.abs(t).toFixed(e)}\xB0${t>=0?"E":"W"}`,wd=i=>i>=1e5?`${Math.round(i/1e3).toLocaleString("en")} km`:i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)} km`:`${Math.round(i)} m`;var As=[],Cx=(i,t)=>{for(let e of As){let[n,s,r,a]=e.bbox;if(i<=n||i>=r||t<=s||t>=a)continue;let l=$t((i-n)/(r-n)*e.width-.5,0,e.width-1.001),o=$t((a-t)/(a-s)*e.height-.5,0,e.height-1.001),h=l|0,u=o|0,c=l-h,f=o-u,d=u*e.width+h,p=e.data,v=(p[d]*(1-c)+p[d+1]*c)*(1-f)+(p[d+e.width]*(1-c)+p[d+e.width+1]*c)*f,g=Math.min((i-n)/(r-n),(r-i)/(r-n),(t-s)/(a-s),(a-t)/(a-s));return[v,_d($t(g*12,0,1))]}return null},lh=(i,t,e)=>{if(!As.length||i>.5)return i;let n=Cx(t,e);return n&&n[0]<-.5?i+(n[0]-i)*n[1]:i},Md=(i,t)=>{if(!As.length)return!1;let e=gi(t.x,t.z)/yt,n=gi(t.x+1,t.z)/yt,s=zn(t.y,t.z)/yt,r=zn(t.y+1,t.z)/yt;if(!As.some(({bbox:[l,o,h,u]})=>n>l&&e<h&&s>o&&r<u))return!1;let a=!1;for(let l=0,o=0;l<256;l++){let h=zn(t.y+(l+.5)/256,t.z)/yt;for(let u=0;u<256;u++,o++){let c=i[o];if(c>.5)continue;let f=lh(c,e+(n-e)*(u+.5)/256,h);f!==c&&(i[o]=f,a=!0)}}return a},Sd=i=>{if(!As.length||i.z>11)return!1;let t=gi(i.x,i.z)/yt,e=gi(i.x+1,i.z)/yt,n=zn(i.y,i.z)/yt,s=zn(i.y+1,i.z)/yt;return As.some(({bbox:[r,a,l,o]})=>e>r&&t<l&&n>a&&s<o)},gl=new Map,Td=(i,t="./")=>(gl.has(i.id)||gl.set(i.id,(async()=>{let e=await fetch(globalThis.__PATCHES__?.[i.file]??t+i.file);if(!e.ok)throw new Error(`patch ${i.id}: HTTP ${e.status}`);let n=await createImageBitmap(await e.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:n.width,height:n.height}):new OffscreenCanvas(n.width,n.height)).getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=r.getImageData(0,0,n.width,n.height).data,l=new Float32Array(n.width*n.height);for(let h=0,u=0;h<l.length;h++,u+=4)l[h]=a[u]*256+a[u+1]+a[u+2]/256-32768;let o={...i,width:n.width,height:n.height,data:l};return n.close?.(),As.push(o),o})().catch(e=>(gl.delete(i.id),console.warn(e.message),null))),gl.get(i.id));var ch=20037508342789244e-9,hh=0,Px=1,Zn=2,Ed=3,Ad=4,Ix=(i,t,e,n)=>{if(i.url.includes("{bbox}")){let r=2*ch/2**t,a=-ch+e*r,l=ch-n*r;return i.url.replace("{bbox}",`${a},${l-r},${a+r},${l}`).replaceAll("{size}",String(i.size??256))}let s=i.subdomains?i.subdomains[(e+n)%i.subdomains.length]:"";return i.url.replace("{s}",s).replace("{z}",t).replace("{x}",e).replace("{y}",n)},Lx=(i,t)=>{if(t.z<(i.minZoom??0)||i.every>1&&(t.z-(i.minZoom??0))%i.every)return!1;let e=i.bbox;return e?t.east>e[0]&&t.west<e[2]&&t.north>e[1]&&t.south<e[3]:!0},uh,vl,Dx=i=>(uh||(uh=typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256),vl=uh.getContext("2d",{willReadFrequently:!0})),vl.globalCompositeOperation="copy",vl.drawImage(i,0,0,256,256),vl.getImageData(0,0,256,256).data),Rd=10,ze=258,Nx=(i,t)=>{let e=i.parent;for(;e&&e.z>Rd;)e=e.parent;for(;e;e=e.parent)if(e.slots[t]?.state===Zn)return e;return null},Fx=i=>{let t=Xi.fromHalfFloat,e=new Float32Array(65536);for(let s=0,r=0;s<256;s++)for(let a=0;a<256;a++,r++)e[r]=i.base+t(i.heights[(s+1)*ze+a+1]);for(let s=0;s<4;s++){let r=Float32Array.from(e),a=0;for(let l=0;l<256;l++)for(let o=0;o<256;o++){let h=l*256+o;if(e[h]<-.5)continue;let u=0,c=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let p=o+d,v=l+f;if(p<0||v<0||p>255||v>255)continue;let g=e[v*256+p];g<-.5&&(u+=g,c++)}c&&(r[h]=u/c,a++)}if(e=r,!a)break}let n=new Float32Array(ze*ze);for(let s=-1;s<=256;s++){let r=s<0?0:s>255?255:s,a=s<0?1:s>255?254:s;for(let l=-1;l<=256;l++){let o=l<0?0:l>255?255:l,h=l<0?1:l>255?254:l;n[(s+1)*ze+l+1]=o===h&&r===a?e[s*256+l]:2*e[r*256+o]-e[a*256+h]}}return n},Ux=(i,t,e)=>{let n=Dx(i),s=256*256,r=new Float32Array(s);for(let v=0,g=0;v<s;v++,g+=4)r[v]=n[g]*256+n[g+1]+n[g+2]/256-32768;let a=0;if(t.z>Rd){let v=Nx(t,e),g=v?.slots[e],m=v?2**(t.z-v.z):1,x=v?(t.x-v.x*m)*256:0,_=v?(t.y-v.y*m)*256:0,b=null;for(let S=0,A=0;S<256;S++)for(let y=0;y<256;y++,A++){let T=r[A];if(T>.001){a++;continue}if(!g){r[A]=T<-11100?0:T;continue}b??=g.seaWide??=Fx(g);let k=(x+y+.5)/m+.5,M=(_+S+.5)/m+.5,H=k|0,J=M|0,ft=k-H,F=M-J,V=J*ze+H,O=(b[V]*(1-ft)+b[V+1]*ft)*(1-F)+(b[V+ze]*(1-ft)+b[V+ze+1]*ft)*F;r[A]=O<-.5?O:T<-11100?-.5:Math.min(T,-.5)}}else a=1;Md(r,t),Sd(t)&&(a=Math.max(a,1));let l=1/0,o=-1/0,h=0;for(let v=0;v<s;v++){let g=r[v];g<l&&(l=g),g>o&&(o=g),h+=g}let u=Math.round(h/s),c=new Uint16Array(ze*ze),f=Xi.toHalfFloat,d=(v,g)=>r[g*256+v];for(let v=-1;v<=256;v++){let g=v<0?0:v>255?255:v,m=v<0?1:v>255?254:v;for(let x=-1;x<=256;x++){let _=x<0?0:x>255?255:x,b=x<0?1:x>255?254:x,S=_===b&&g===m?d(x,v):2*d(_,g)-d(b,m);c[(v+1)*ze+x+1]=f(S-u)}}let p=new Sn(c,ze,ze,fi,je);return p.internalFormat="R16F",p.magFilter=p.minFilter=Ae,p.wrapS=p.wrapT=_n,p.generateMipmaps=!1,p.needsUpdate=!0,{tex:p,heights:c,base:u,min:l,max:o,allSea:a===0}},kx=(i,t)=>{let e=new cn(i);return e.colorSpace=Ie,e.flipY=!1,e.premultiplyAlpha=!1,e.wrapS=e.wrapT=_n,e.minFilter=rn,e.magFilter=Ae,e.anisotropy=t,e.generateMipmaps=!0,e.needsUpdate=!0,e},xl=class{constructor({maxActive:t=16,anisotropy:e=4}={}){this.maxActive=t,this.anisotropy=e,this.queue=[],this.active=new Set,this.decodeBudget=5,this.pendingDecodes=[],this.loaded=0,this.failed=0,this.onLoad=null}want(t,e,n){let s=t.slots[e.id];return s||(s=t.slots[e.id]={state:Lx(e,t)&&t.z<=e.maxZoom?hh:Ad,tex:null,layer:e,tile:t,priority:0,queued:!1,abort:null},e.kind==="elevation"&&t.parent?.allSea&&(s.state=Ad,t.allSea=!0)),s.priority=n,s.state===hh&&!s.queued&&(s.queued=!0,this.queue.push(s)),s}pump(t){let e=performance.now();for(let s=0;s<this.decodeBudget&&this.pendingDecodes.length&&performance.now()-e<5;s++)this.pendingDecodes.shift()();for(let s of this.active)s.tile.visit<t-30&&s.abort&&s.abort.abort();if(!this.queue.length||(this.queue=this.queue.filter(s=>s.tile.visit>=t-5&&!s.tile.dead?!0:(s.queued=!1,!1)),this.active.size>=this.maxActive))return;this.queue.sort((s,r)=>s.priority-r.priority);let n=new Map;for(let s of this.active)n.set(s.layer.id,(n.get(s.layer.id)??0)+1);for(let s=this.queue.length-1;s>=0&&this.active.size<this.maxActive;s--){let r=this.queue[s],a=n.get(r.layer.id)??0;a>=(r.layer.maxActive??this.maxActive)||(n.set(r.layer.id,a+1),this.queue.splice(s,1),this.start(r))}}start(t){t.queued=!1,t.state=Px,t.abort=new AbortController,this.active.add(t);let{tile:e,layer:n}=t,s=r=>{this.active.delete(t),t.abort=null,t.state=r,r===Zn&&this.loaded++,r===Ed&&this.failed++,this.onLoad?.(t)};fetch(Ix(n,e.z,e.x,e.y),{signal:t.abort.signal,mode:"cors",credentials:"omit",referrerPolicy:"no-referrer"}).then(r=>{if(!r.ok)throw Object.assign(new Error(`HTTP ${r.status}`),{status:r.status});return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(r=>{this.pendingDecodes.push(()=>{if(e.dead)return r.close?.();if(n.kind==="elevation"){let a=Ux(r,e,n.id);r.close?.(),Object.assign(t,a),e.minH=a.min,e.maxH=a.max,e.allSea=a.allSea}else t.tex=kx(r,this.anisotropy),t.tex.onUpdate=()=>{r.close?.(),t.tex.onUpdate=null};s(Zn)})}).catch(r=>{r.name==="AbortError"?(this.active.delete(t),t.abort=null,t.state=hh):s(Ed)})}get busy(){return this.active.size+this.queue.length+this.pendingDecodes.length}},Cd=i=>{for(let t in i.slots){let e=i.slots[t];e.abort?.abort(),e.tex?.dispose(),e.tex=null,e.heights=null,e.seaWide=null}i.slots={}};var Ox=`
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

${Ox}
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
`;var vr=2,Bx=[12,17,22],zx=[[44,35.5,56.5,48.5],[34.9,30,36.2,33.4],[-117.6,35.6,-116.2,37],[-116.4,32.4,-115,33.8],[25.5,28.3,30.3,30.6],[39.5,11,42.8,15],[88.5,42.3,90.5,43.3],[3.3,51.2,7.3,53.6],[5.5,33.5,9,34.8],[136.5,-29.6,138.3,-27.6],[-68.6,-49.8,-67.9,-49.3],[50.9,43.2,52.3,44],[-.6,52.2,.5,52.9]],dh=class i{constructor(t,e,n,s){this.z=t,this.x=e,this.y=n,this.parent=s,this.children=null,this.lon0=gi(e,t),this.lon1=gi(e+1,t),this.latN=zn(n,t),this.latS=zn(n+1,t),this.west=this.lon0/yt,this.east=this.lon1/yt,this.north=this.latN/yt,this.south=this.latS/yt;let r=(this.lon0+this.lon1)/2,a=zn(n+.5,t);this.center=xn(r,a).map(h=>h*ne);let l=0;for(let[h,u]of[[this.lon0,this.latN],[this.lon1,this.latN],[this.lon0,this.latS],[this.lon1,this.latS]]){let c=xn(h,u);l=Math.max(l,Math.hypot(c[0]*ne-this.center[0],c[1]*ne-this.center[1],c[2]*ne-this.center[2]))}this.radius=l,this.minH=s?s.minH:-8e3,this.maxH=s?s.maxH:6e3,this.slots={},this.visit=0,this.geom=null,this.dead=!1,this.dry=null;for(let h of zx)if(this.east>h[0]&&this.west<h[2]&&this.north>h[1]&&this.south<h[3]){this.dry=[ss(h[0]*yt,t)-e,rs(h[3]*yt,t)-n,ss(h[2]*yt,t)-e,rs(h[1]*yt,t)-n];break}let o=[];for(let h of Bx){let u=2**(h-t);o.push([e*u%64,n*u%64,u])}this.lattice=o}split(){let{z:t,x:e,y:n}=this;this.children=[new i(t+1,2*e,2*n,this),new i(t+1,2*e+1,2*n,this),new i(t+1,2*e,2*n+1,this),new i(t+1,2*e+1,2*n+1,this)]}},Hx=i=>{let t=i+1,e=t*t,n=e+4*t,s=new Float32Array(n*2),r=new Float32Array(n),a=new Uint32Array(4*t);for(let o=0;o<t;o++)for(let h=0;h<t;h++)s[(o*t+h)*2]=h/i,s[(o*t+h)*2+1]=o/i;for(let o=0;o<t;o++)a[o]=o,a[t+o]=i*t+o,a[2*t+o]=o*t,a[3*t+o]=o*t+i;for(let o=0;o<4*t;o++)s[(e+o)*2]=s[a[o]*2],s[(e+o)*2+1]=s[a[o]*2+1],r[e+o]=1;let l=[];for(let o=0;o<i;o++)for(let h=0;h<i;h++){let u=o*t+h,c=u+1,f=u+t,d=f+1;l.push(u,f,c,c,f,d)}for(let o=0;o<4;o++)for(let h=0;h<i;h++){let u=a[o*t+h],c=a[o*t+h+1],f=e+o*t+h,d=f+1;l.push(u,f,c,c,f,d)}return{n:i,side:t,main:e,count:n,edge:a,uv:new Le(s,2),skirt:new Le(r,1),index:new Le(n>65535?new Uint32Array(l):new Uint16Array(l),1)}},Gx=(i,t)=>{let e=new Float32Array(t.count*3),{n,side:s}=t,[r,a,l]=i.center,o=new Float64Array(s),h=new Float64Array(s);for(let c=0;c<s;c++){let f=i.lon0+(i.lon1-i.lon0)*c/n;o[c]=Math.cos(f),h[c]=Math.sin(f)}for(let c=0;c<s;c++){let f=zn(i.y+c/n,i.z),d=Math.cos(f)*ne,p=Math.sin(f)*ne;for(let v=0;v<s;v++){let g=(c*s+v)*3;e[g]=d*o[v]-r,e[g+1]=d*h[v]-a,e[g+2]=p-l}}for(let c=0;c<4*s;c++){let f=t.edge[c]*3,d=(t.main+c)*3;e[d]=e[f],e[d+1]=e[f+1],e[d+2]=e[f+2]}let u=new Be;return u.setAttribute("position",new Le(e,3)),u.setAttribute("uv",t.uv),u.setAttribute("skirt",t.skirt),u.setIndex(t.index),u},Gd=(i,t,e,n=255)=>{let s=new Sn(new Uint8Array([i,t,e,n]),1,1,Ye);return s.needsUpdate=!0,s},yl=class{constructor({renderer:t,scene:e,segments:n=64,threshold:s=340,budget:r=380,layers:a}){this.scene=e,this.grid=Hx(n),this.threshold=s,this.budget=r,this.loader=new xl({anisotropy:Math.min(8,t.capabilities.getMaxAnisotropy())}),this.layers=a,this.maxZ=17,this.frame=0,this.count=0,this.roots=[];for(let l=0;l<2**vr;l++)for(let o=0;o<2**vr;o++)this.roots.push(new dh(vr,o,l,null));this.count=this.roots.length,this.drawn=[],this.pool=[],this.group=new $e,e.add(this.group),this.blank=Gd(20,30,45),this.blankElev=(()=>{let l=new Sn(new Uint16Array([0]),1,1,fi,je);return l.internalFormat="R16F",l.needsUpdate=!0,l})(),this.black=Gd(0,0,0,0),this.shared={uCamPos:{value:new pt},uSun:{value:new pt(1,0,0)},uSea:{value:0},uWater:{value:1},uSeaClamp:{value:0},uExag:{value:1},uTime:{value:0},uPixAngle:{value:.001},uLens:{value:0},uOverMix:{value:1},uOverMode:{value:0},uBathy:{value:.45},uShadows:{value:1},uContours:{value:0},uNightOn:{value:1},uPad:{value:new ge(0,0,0,0)},uPadH:{value:0},tDecal:{value:this.black},tDecalFar:{value:this.black},uDecalOn:{value:0},tHeat:{value:this.black},uHeat:{value:0},uHeatLod:{value:0},uScan:{value:new ge(0,0,1,0)},uScanA:{value:0},uDecalO:{value:new pt},uDecalU:{value:new pt},uDecalV:{value:new pt}},this.frustum=new ui,this.caps=this.makeCaps(),this.stats={tiles:0,depth:0}}makeMaterial(){let t={...this.shared,uCenter:{value:new pt},uCenterRel:{value:new pt},uSkirt:{value:0},tElev:{value:this.blankElev},uElevUV:{value:new ge(1,1,0,0)},uElevBase:{value:0},uElevMpp:{value:1},tFar:{value:this.blankElev},uFarUV:{value:new ge(1,1,0,0)},uFarBase:{value:0},uFarMpp:{value:1},uFarTop:{value:9e3},tBase:{value:this.blank},uBaseUV:{value:new ge(1,1,0,0)},uBaseTexels:{value:256},tGlobe:{value:this.blank},uGlobeUV:{value:new ge(1,1,0,0)},uGlobeOn:{value:0},tOver:{value:this.black},uOverUV:{value:new ge(1,1,0,0)},uOverOn:{value:0},tNight:{value:this.black},uNightUV:{value:new ge(1,1,0,0)},uDry:{value:new ge(2,2,-1,-1)},uLat:{value:[new ie,new ie,new ie]},uLatS:{value:[1,1,1]}};return new Xe({uniforms:t,vertexShader:Id,fragmentShader:Ld,glslVersion:ns,side:sn})}makeCaps(){let n=[];for(let s of[1,-1]){let r=new Float32Array(2307),a=new Float32Array(769),l=[0,0,s*ne];for(let d=0;d<8;d++){let p=s*(is+(Math.PI/2-is)*d/8);for(let v=0;v<96;v++){let g=xn(v/96*2*Math.PI-Math.PI,p),m=(d*96+v)*3;r[m]=g[0]*ne,r[m+1]=g[1]*ne,r[m+2]=g[2]*ne-l[2]}}let o=[];for(let d=0;d<7;d++)for(let p=0;p<96;p++){let v=d*96+p,g=d*96+(p+1)%96,m=v+96,x=g+96;o.push(v,g,m,g,x,m)}let h=768;for(let d=0;d<96;d++)o.push(672+d,672+(d+1)%96,h);let u=new Be;u.setAttribute("position",new Le(r,3)),u.setAttribute("height",new Le(a,1)),u.setIndex(o);let c=new Xe({uniforms:{uCamPos:this.shared.uCamPos,uSun:this.shared.uSun,uExag:this.shared.uExag,uCenter:{value:new pt(...l)},uCenterRel:{value:new pt}},vertexShader:Dd,fragmentShader:Nd,glslVersion:ns,side:sn}),f=new pe(u,c);f.frustumCulled=!1,f.position.set(...l),f.updateMatrixWorld(),this.scene.add(f),n.push({mesh:f,sign:s,rings:8,around:96,centre:l,set:!1})}return n}fitCaps(){let t=this.shared.uWater.value>.5?this.shared.uSea.value:-1e5;for(let e of this.caps){let n=e.mesh.geometry.attributes.height,s=0,r=[];for(let a=0;a<e.around;a++){let l=Math.max(this.heightAt(a/e.around*2*Math.PI-Math.PI,e.sign*(is-.002))??0,t);r.push(l),s+=l/e.around}for(let a=0;a<e.rings;a++)for(let l=0;l<e.around;l++)n.array[a*e.around+l]=r[l]+(s-r[l])*(a/e.rings);n.array[e.rings*e.around]=s,n.needsUpdate=!0}}resolve(t,e){for(let n=t;n;n=n.parent){let s=n.slots[e.id];if(s&&s.state===Zn){let r=2**(t.z-n.z);return{slot:s,z:n.z,scale:1/r,ox:(t.x-n.x*r)/r,oy:(t.y-n.y*r)/r}}}return null}heightAt(t,e){t=wn(t),e=$t(e,-is+1e-6,is-1e-6);let n=2**vr,s=this.roots[$t(Math.floor(rs(e,vr)),0,n-1)*n+$t(Math.floor(ss(t,vr)),0,n-1)],r=null,a=this.layers.elevation.id;for(;s;){let m=s.slots[a];if(m&&m.state===Zn&&(r=s),!s.children)break;let x=ss(t,s.z+1)-2*s.x,_=rs(e,s.z+1)-2*s.y;s=s.children[(_>=1?2:0)+(x>=1?1:0)]}if(!r)return null;let l=r.slots[a],o=$t((ss(t,r.z)-r.x)*256-.5,0,255),h=$t((rs(e,r.z)-r.y)*256-.5,0,255),u=Math.floor(o),c=Math.floor(h),f=Math.min(u+1,255),d=Math.min(c+1,255),p=o-u,v=h-c,g=(m,x)=>Xi.fromHalfFloat(l.heights[(x+1)*ze+m+1]);return l.base+(g(u,c)*(1-p)+g(f,c)*p)*(1-v)+(g(u,d)*(1-p)+g(f,d)*p)*v}measure(t,e){let n=this.shared.uExag.value,s=e.lon;if(!(s>=t.lon0&&s<=t.lon1)){let v=Math.abs(wn(e.lon-t.lon0)),g=Math.abs(wn(e.lon-t.lon1));s=v<g?t.lon0:t.lon1}let r=$t(e.lat,t.latS,t.latN),a=gr(e.lon,e.lat,s,r),l=Math.max(t.maxH,e.sea)*n;if(a>e.horizon+Math.acos(Math.min(1,e.occluder/(ne+Math.max(l,0)+50)))+.002)return null;let o=this._v.set(t.center[0]-e.pos[0],t.center[1]-e.pos[1],t.center[2]-e.pos[2]);if(this._sphere.center.copy(o),this._sphere.radius=t.radius+Math.max(Math.abs(t.minH),Math.abs(t.maxH))*n+200,!this.frustum.intersectsSphere(this._sphere))return null;let h=$t(e.ground,t.minH,t.maxH)*n,u=xn(s,r,this._p),c=ne+Math.max(h,e.sea*n),f=Math.max(Math.hypot(u[0]*c-e.pos[0],u[1]*c-e.pos[1],u[2]*c-e.pos[2]),20),d=pr*Math.cos(r)/2**t.z,p=Math.abs((u[0]*(u[0]*c-e.pos[0])+u[1]*(u[1]*c-e.pos[1])+u[2]*(u[2]*c-e.pos[2]))/f);return d/f*e.pxPerRad*Math.max(.45,Math.sqrt(p))}ensure(t,e){let n=this.layers,s=this.loader,r=s.want(t,n.elevation,e+2e6),a=n.globe?n.globe.maxZoom:-1,l=n.globe&&t.z<=a?s.want(t,n.globe,e+1e6):null,o=t.z>=a?s.want(t,n.base,e+1e6):l;return n.overlay&&s.want(t,n.overlay,e),n.night&&this.shared.uNightOn.value>.5&&s.want(t,n.night,e-1e5),r.state>=Zn&&o.state>=Zn}visit(t,e,n){t.visit=this.frame;let s=this.ensure(t,e);if(s&&t.z<this.maxZ&&e>this.threshold&&this.drawn.length<700){t.children||(t.split(),this.count+=4);let r=!0;for(let a of t.children)a._px=this.measure(a,n),a._px!==null&&(a.visit=this.frame,this.ensure(a,a._px)||(r=!1));if(r){for(let a of t.children)a._px!==null&&this.visit(a,a._px,n);return}}s&&this.drawn.push(t)}update(t){this.frame++;let e=this.shared,n=e.uExag.value,s=e.uWater.value>.5;t.sea=s?e.uSea.value:-12e3;let r=Math.hypot(t.pos[0],t.pos[1],t.pos[2]);t.occluder=ne+(s?Math.min(e.uSea.value,-450):-11e3)*n-100,t.horizon=r>t.occluder?Math.acos(t.occluder/r):Math.PI,this._v??=new pt,this._p??=[0,0,0],this._sphere??=new hi,this.frustum.setFromProjectionMatrix(t.viewProjectionRel),e.uSeaClamp.value=s?e.uSea.value:-1e5,this.drawn.length=0;for(let a of this.roots){let l=this.measure(a,t);if(l===null){a.visit=this.frame,this.ensure(a,1);continue}this.visit(a,l,t)}this.assign(t),this.loader.pump(this.frame),this.frame%90===0&&this.prune(),!this.capsFitted&&this.roots.every(a=>a.slots[this.layers.elevation.id]?.state>=Zn)&&(this.fitCaps(),this.capsFitted=!0);for(let a of this.caps)a.mesh.material.uniforms.uCenterRel.value.set(a.centre[0]-t.pos[0],a.centre[1]-t.pos[1],a.centre[2]-t.pos[2])}assign(t){let e=this.layers,n=0;for(let s=0;s<this.drawn.length;s++){let r=this.drawn[s],a=this.pool[s];a||(a=this.pool[s]=new pe(void 0,this.makeMaterial()),a.frustumCulled=!1,a.matrixAutoUpdate=!1,this.group.add(a)),r.geom??=Gx(r,this.grid),a.geometry=r.geom,a.visible=!0,a.matrix.makeTranslation(r.center[0],r.center[1],r.center[2]),a.matrixWorld.copy(a.matrix);let l=a.material.uniforms;l.uCenter.value.set(r.center[0],r.center[1],r.center[2]),l.uCenterRel.value.set(r.center[0]-t.pos[0],r.center[1]-t.pos[1],r.center[2]-t.pos[2]),l.uSkirt.value=Math.max(pr/2**r.z*.04,30)*Math.max(1,this.shared.uExag.value*.5);let o=this.resolve(r,e.elevation);if(o){let p=256/ze;l.tElev.value=o.slot.tex,l.uElevUV.value.set(o.scale*p,o.scale*p,(1+256*o.ox)/ze,(1+256*o.oy)/ze),l.uElevBase.value=o.slot.base,l.uElevMpp.value=pr/2**o.z/256}else l.tElev.value=this.blankElev,l.uElevBase.value=0,l.uElevMpp.value=pr/2**r.z/256;let h=null;for(let p=r,v=0;p;p=p.parent,v++){let g=p.slots[e.elevation.id];if(g&&g.state===Zn&&(v>=3||!p.parent)){h=p;break}}if(h){let p=2**(r.z-h.z),v=h.slots[e.elevation.id];l.tFar.value=v.tex,l.uFarUV.value.set(256/ze/p,256/ze/p,(1+256*(r.x-h.x*p)/p)/ze,(1+256*(r.y-h.y*p)/p)/ze),l.uFarBase.value=v.base,l.uFarMpp.value=pr/2**h.z/256,l.uFarTop.value=v.max}else l.tFar.value=l.tElev.value,l.uFarUV.value.copy(l.uElevUV.value),l.uFarBase.value=l.uElevBase.value,l.uFarMpp.value=l.uElevMpp.value,l.uFarTop.value=r.maxH;let u=e.globe&&this.resolve(r,e.globe),c=this.resolve(r,e.base)??u;c?(l.tBase.value=c.slot.tex,l.uBaseUV.value.set(c.scale,c.scale,c.ox,c.oy),l.uBaseTexels.value=256*2**c.z):(l.tBase.value=this.blank,l.uBaseTexels.value=256*2**r.z),u?(l.tGlobe.value=u.slot.tex,l.uGlobeUV.value.set(u.scale,u.scale,u.ox,u.oy),l.uGlobeOn.value=1):(l.tGlobe.value=this.blank,l.uGlobeOn.value=0);let f=e.overlay&&this.resolve(r,e.overlay);f?(l.tOver.value=f.slot.tex,l.uOverUV.value.set(f.scale,f.scale,f.ox,f.oy),l.uOverOn.value=1):(l.tOver.value=this.black,l.uOverOn.value=0);let d=e.night&&this.shared.uNightOn.value>.5&&this.resolve(r,e.night);d?(l.tNight.value=d.slot.tex,l.uNightUV.value.set(d.scale,d.scale,d.ox,d.oy)):l.tNight.value=this.black,r.dry?l.uDry.value.set(r.dry[0],r.dry[1],r.dry[2],r.dry[3]):l.uDry.value.set(2,2,-1,-1);for(let p=0;p<3;p++)l.uLat.value[p].set(r.lattice[p][0],r.lattice[p][1]),l.uLatS.value[p]=r.lattice[p][2];r.z>n&&(n=r.z)}for(let s=this.drawn.length;s<this.pool.length;s++)this.pool[s].visible=!1;this.stats.tiles=this.drawn.length,this.stats.depth=n}prune(){let t=this.count>this.budget?45:900,e=n=>{if(!n.children)return;let s=!0;for(let r of n.children)e(r),(r.children||r.visit>=this.frame-t)&&(s=!1);if(s){for(let r of n.children)r.dead=!0,Cd(r),r.geom?.dispose(),r.geom=null;n.children=null,this.count-=4}};for(let n of this.roots)e(n)}refresh(t){let e=this.layers.elevation.id,[n,s,r,a]=t.map(o=>o*yt),l=o=>{if(!(gi(o.x+1,o.z)<=n||gi(o.x,o.z)>=r||zn(o.y,o.z)<=s||zn(o.y+1,o.z)>=a)){if(o.z>=7){let h=o.slots[e];h&&(h.abort?.abort(),h.tex?.dispose(),delete o.slots[e]),o.allSea=!1}o.children?.forEach(l)}};this.roots.forEach(l)}setLayer(t,e){let n=this.layers[t];if(this.layers[t]=e,n&&(!e||n.id!==e.id)){let s=r=>{let a=r.slots[n.id];a&&(a.abort?.abort(),a.tex?.dispose(),delete r.slots[n.id]),r.children&&r.children.forEach(s)};this.roots.forEach(s)}}get ready(){let t=(this.layers.globe??this.layers.base).id;return this.roots.every(e=>e.slots[this.layers.elevation.id]?.state>=Zn&&e.slots[t]?.state>=Zn)}};var fh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,_l=class{constructor(t,e,n){this.camera=t,this.dom=e,this.globe=n,this.lon=-30*yt,this.lat=25*yt,this.range=175e5,this.heading=0,this.tilt=0,this.goalRange=this.range,this.goalHeading=0,this.goalTilt=0,this.maxRange=6e7,this.floor=null,this.inCity=!1,this.walk=null,this.groundH=0,this.pos=[0,0,0],this.basis={right:[1,0,0],up:[0,1,0],fwd:[0,0,-1]},this.vel=[0,0],this.fly=null,this.anchor=null,this.idle=!0,this.moved=0,this.onChange=null,this.onTap=null,this.wheelNeedsKey=!1,this.shift=[0,0],this.goalShift=[0,0],this.onWheelBlocked=null,this.pointers=new Map,this.bind(),this.place()}get fovY(){return this.camera.fov*yt}get minRange(){return this.inCity?14:150}size(){return[this.dom.clientWidth||1,this.dom.clientHeight||1]}place(){if(this.walk)return this.placeWalk();let t=this.globe,e=t?t.shared.uExag.value:1,n=t&&t.shared.uWater.value>.5?t.shared.uSea.value:-1e5,s=si(this.lon,this.lat),r=Yn(En(s.north,Math.cos(this.heading)),s.east,Math.sin(this.heading)),a=En(s.up,ne+this.groundH),l=Yn(En(s.up,Math.cos(this.tilt)),r,-Math.sin(this.tilt)),o=Yn(a,l,this.range),h=Math.hypot(o[0],o[1],o[2]),[u,c]=ml(o),f=this.floor?.(u,c)??null,d=Math.max(t?Math.max(t.heightAt(u,c)??0,n)*e:0,f??-1e9),p=Math.max(f==null?25:1.7,this.range*.04);h<ne+d+p&&(o=En(o,(ne+d+p)/h),h=ne+d+p);let v=mr(Yn(o,a,-1)),g=Yn(En(r,Math.cos(this.tilt)),s.up,Math.sin(this.tilt)),m=mr(ha(g,v)),x=ha(v,m);this.pos=o,this.basis={right:m,up:x,fwd:En(v,-1)},this.camLon=u,this.camLat=c,this.under=d,this.altitude=h-ne-d;let _=Math.max(f==null?1.5:.5,.06*Math.min(this.altitude,this.range)),b=ne-11e3*e,S=Math.sqrt(Math.max(h*h-b*b,0))+Math.sqrt((ne+9e3*e)**2-b*b)+1e3,A=this.camera;A.near=_,A.far=Math.max(S,_*10),A.updateProjectionMatrix(),A.projectionMatrix.elements[8]=-this.shift[0],A.projectionMatrix.elements[9]=-this.shift[1],A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.matrixAutoUpdate=!1,A.matrix.set(m[0],x[0],v[0],o[0],m[1],x[1],v[1],o[1],m[2],x[2],v[2],o[2],0,0,0,1),A.matrixWorld.copy(A.matrix),A.matrixWorldInverse.copy(A.matrix).invert()}placeWalk(){let t=this.walk,e=this.globe,n=e?e.shared.uExag.value:1,s=si(t.lon,t.lat),r=this.floor?.(t.lon,t.lat)??(e?(e.heightAt(t.lon,t.lat)??0)*n:0),a=ne+r+t.eye+(t.lift??0),l=En(s.up,a),o=Yn(En(s.north,Math.cos(t.yaw)),s.east,Math.sin(t.yaw)),h=mr(Yn(En(o,Math.cos(t.pitch)),s.up,Math.sin(t.pitch))),u=En(h,-1),c=mr(ha(s.up,u)),f=ha(u,c);this.pos=l,this.basis={right:c,up:f,fwd:h},this.lon=this.camLon=t.lon,this.lat=this.camLat=t.lat,this.heading=this.goalHeading=t.yaw,this.tilt=t.pitch,this.groundH=this.under=r,this.altitude=t.eye;let d=ne-11e3*n,p=Math.sqrt(Math.max(a*a-d*d,0))+Math.sqrt((ne+9e3*n)**2-d*d)+1e3,v=this.camera;v.near=.14,v.far=p,v.updateProjectionMatrix(),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.matrixAutoUpdate=!1,v.matrix.set(c[0],f[0],u[0],l[0],c[1],f[1],u[1],l[1],c[2],f[2],u[2],l[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert()}ray(t,e){let[n,s]=this.size(),r=Math.tan(this.fovY/2),a=r*(n/s),l=t/n*2-1-this.shift[0],o=1-e/s*2-this.shift[1],h=this.basis;return mr([h.fwd[0]+h.right[0]*l*a+h.up[0]*o*r,h.fwd[1]+h.right[1]*l*a+h.up[1]*o*r,h.fwd[2]+h.right[2]*l*a+h.up[2]*o*r])}pick(t,e){let n=this.globe,s=n.shared.uExag.value,r=n.shared.uWater.value>.5?n.shared.uSea.value:-1e5,a=this.ray(t,e),l=this.groundH,o=null;for(let h=0;h<5;h++){let u=bd(this.pos,a,ne+l);if(u<0)return o;let c=Yn(this.pos,a,u),[f,d]=ml(c),p=n.heightAt(f,d)??0;o={lon:f,lat:d,height:p,distance:u},l=Math.max(Math.max(p,r)*s,this.floor?.(f,d)??-1e9)}return o}touch(){this.idle=!1,this.fly=null,this.moved=performance.now()}bind(){let t=this.dom;t.style.touchAction="none",t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(this.walk)return;t.setPointerCapture?.(n.pointerId);let s=t.getBoundingClientRect(),r={x:n.clientX-s.left,y:n.clientY-s.top,x0:n.clientX-s.left,y0:n.clientY-s.top,button:n.button,mod:n.ctrlKey||n.shiftKey||n.metaKey||n.altKey,t:performance.now()};this.pointers.set(n.pointerId,r),this.touch(),this.vel=[0,0],this.anchor=null,this.goalRange=this.range,this.pointers.size===1&&(this.grab=this.pick(r.x,r.y)),this.pointers.size===2&&(this.pinch=this.pinchState())}),t.addEventListener("pointermove",n=>{if(this.walk)return;let s=this.pointers.get(n.pointerId),r=t.getBoundingClientRect(),a=n.clientX-r.left,l=n.clientY-r.top;if(this.hover={x:a,y:l},!s)return;let o=a-s.x,h=l-s.y;s.x=a,s.y=l,this.pointers.size===1?s.button===2||s.button===1||s.mod?this.orbit(o,h):this.pan(s,o,h):this.pointers.size===2&&this.pinchMove(),this.onChange?.()});let e=n=>{let s=this.pointers.get(n.pointerId);if(s){if(this.pointers.delete(n.pointerId),this.pointers.size===0&&Math.hypot(s.x-s.x0,s.y-s.y0)<6&&performance.now()-s.t<400&&this.onTap?.(s.x,s.y),this.pointers.size===1){let r=[...this.pointers.values()][0];this.grab=this.pick(r.x,r.y)}this.pinch=null}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{if(this.walk)return;if(this.wheelNeedsKey&&!(n.ctrlKey||n.metaKey)){this.onWheelBlocked?.();return}n.preventDefault(),this.touch();let s=t.getBoundingClientRect(),r=n.deltaMode===1?32:n.deltaMode===2?400:1,a=n.ctrlKey?.012:.0016;this.goalRange=$t(this.goalRange*Math.exp($t(n.deltaY*r,-300,300)*a),this.minRange,this.maxRange);let l=n.clientX-s.left,o=n.clientY-s.top,h=this.pick(l,o);this.anchor=h?{lon:h.lon,lat:h.lat,x:l,y:o}:null},{passive:!1}),t.addEventListener("dblclick",n=>{if(this.walk)return;let s=t.getBoundingClientRect(),r=this.pick(n.clientX-s.left,n.clientY-s.top);r&&this.flyTo({lon:r.lon,lat:r.lat,range:Math.max(this.range*.35,this.minRange*2)},.9)})}pan(t,e,n){let s=[this.lon,this.lat],r=this.pick(t.x,t.y);if(this.grab&&r)this.lon=wn(this.lon+wn(this.grab.lon-r.lon)),this.lat=$t(this.lat+(this.grab.lat-r.lat),-89*yt,89*yt);else{let[,h]=this.size(),u=2*Math.tan(this.fovY/2)*this.range/h/ne,c=Math.cos(this.heading),f=Math.sin(this.heading);this.lon=wn(this.lon-(e*c+n*f)*u/Math.max(Math.cos(this.lat),.2)),this.lat=$t(this.lat+(n*c-e*f)*u,-89*yt,89*yt)}this.place();let a=performance.now(),l=Math.max((a-(this.lastPan??a-16))/1e3,.004);this.lastPan=a;let o=[wn(this.lon-s[0])/l,(this.lat-s[1])/l];this.vel=[Xn(this.vel[0],o[0],.5),Xn(this.vel[1],o[1],.5)]}orbit(t,e){this.heading=this.goalHeading=this.heading-t*.006,this.tilt=this.goalTilt=$t(this.tilt-e*.005,0,this.maxTilt()),this.place()}maxTilt(){return this.inCity&&this.range<900?Xn(88.5,84,$t((this.range-200)/700,0,1))*yt:Xn(84,62,$t((Math.log10(this.range)-5.2)/1.8,0,1))*yt}pinchState(){let[t,e]=[...this.pointers.values()];return{d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x),cy:(t.y+e.y)/2,cx:(t.x+e.x)/2,range:this.range,heading:this.heading,tilt:this.tilt,grab:this.pick((t.x+e.x)/2,(t.y+e.y)/2)}}pinchMove(){let t=this.pinch;if(!t)return;let[e,n]=[...this.pointers.values()],s=Math.hypot(e.x-n.x,e.y-n.y),r=Math.atan2(n.y-e.y,n.x-e.x),a=(e.y+n.y)/2,l=(e.x+n.x)/2;this.range=this.goalRange=$t(t.range*t.d/Math.max(s,1),this.minRange,this.maxRange);let o=r-t.ang;o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)>.12&&(this.heading=this.goalHeading=t.heading+(o-Math.sign(o)*.12));let h=a-t.cy,u=Math.abs(s-t.d);Math.abs(h)>24&&u<40&&(this.tilt=this.goalTilt=$t(t.tilt-(h-Math.sign(h)*24)*.006,0,this.maxTilt())),this.place();let c=this.pick(l,a);t.grab&&c&&(this.lon=wn(this.lon+wn(t.grab.lon-c.lon)),this.lat=$t(this.lat+(t.grab.lat-c.lat),-89*yt,89*yt),this.place())}flyTo(t,e){let n={lon:this.lon,lat:this.lat,range:this.range,heading:this.heading,tilt:this.tilt},s={lon:t.lon??n.lon,lat:t.lat??n.lat,range:$t(t.range??n.range,this.minRange,this.maxRange),heading:t.heading??0,tilt:t.tilt??0},r=gr(n.lon,n.lat,s.lon,s.lat),a=Math.max(n.range,s.range,Math.min(r*ne*1.4,24e6)),l=e??$t(1.4+r*1.6+Math.abs(Math.log(n.range/s.range))*.22+Math.log(a/Math.max(n.range,s.range))*.18,1.2,6.5),o=s.heading-n.heading;o=Math.atan2(Math.sin(o),Math.cos(o)),this.fly={from:n,target:s,hop:a,dur:l,t:0,dh:o,a:xn(n.lon,n.lat),b:xn(s.lon,s.lat),angle:r},this.idle=!1,this.anchor=null,this.vel=[0,0]}zoomBy(t){this.touch(),this.anchor=null,this.goalRange=$t(this.goalRange*t,this.minRange,this.maxRange)}jump(t){Object.assign(this,{lon:t.lon??this.lon,lat:t.lat??this.lat,range:t.range??this.range,heading:t.heading??0,tilt:t.tilt??0}),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,this.fly=null,this.place()}update(t){if(this.walk){this.fly=null,this.inCity=!0,this.shift=[0,0],this.place();return}let e=this.globe,n=e.shared.uExag.value,s=e.shared.uWater.value>.5?e.shared.uSea.value:-1e5,r=1-Math.exp(-t*7);if(this.shift=[Xn(this.shift[0],this.goalShift[0],r),Xn(this.shift[1],this.goalShift[1],r)],this.fly){let o=this.fly;o.t=Math.min(1,o.t+t/o.dur);let h=o.hop>3*Math.max(o.from.range,o.target.range),u=fh(h?$t((o.t-.14)/.72,0,1):o.t);if(o.angle>1e-9){let p=Math.sin(o.angle),v=Math.sin((1-u)*o.angle)/p,g=Math.sin(u*o.angle)/p,[m,x]=ml([o.a[0]*v+o.b[0]*g,o.a[1]*v+o.b[1]*g,o.a[2]*v+o.b[2]*g]);this.lon=m,this.lat=x}let c=fh(o.t),f=Math.exp(Xn(Math.log(o.from.range),Math.log(o.target.range),c)),d=Math.sin(Math.PI*o.t);this.range=Math.exp(Xn(Math.log(f),Math.log(Math.max(o.hop,f)),h?d**.7:d*d)),this.heading=o.from.heading+o.dh*c,this.tilt=Xn(o.from.tilt,o.target.tilt,c)*(h?1-.85*d:1),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,o.t>=1&&(this.fly=null,this.heading=o.target.heading)}else{if(this.idle&&this.spin!==!1&&this.range>4e6&&(this.lon=wn(this.lon+t*.035)),!this.pointers.size){if(Math.abs(this.vel[0])+Math.abs(this.vel[1])>1e-7){this.lon=wn(this.lon+this.vel[0]*t),this.lat=$t(this.lat+this.vel[1]*t,-89*yt,89*yt);let h=Math.exp(-t*4.5);this.vel=[this.vel[0]*h,this.vel[1]*h]}let o=1-Math.exp(-t*9);if(Math.abs(Math.log(this.goalRange/this.range))>1e-4){if(this.range=Math.exp(Xn(Math.log(this.range),Math.log(this.goalRange),o)),this.anchor){this.place();let h=this.pick(this.anchor.x,this.anchor.y);h&&(this.lon=wn(this.lon+wn(this.anchor.lon-h.lon)),this.lat=$t(this.lat+(this.anchor.lat-h.lat),-89*yt,89*yt))}}else this.anchor=null}this.tilt=Math.min(this.tilt,this.maxTilt())}let a=this.floor?.(this.lon,this.lat)??null;this.inCity=a!=null,this.goalRange<this.minRange&&(this.goalRange=this.minRange);let l=Math.max(Math.max(e.heightAt(this.lon,this.lat)??0,s)*n,a??-1e9);this.groundH=Xn(this.groundH,l,1-Math.exp(-t*6)),this.place()}view(t){let e=this.camera,n=new xe().copy(e.matrixWorldInverse);return n.elements[12]=n.elements[13]=n.elements[14]=0,{pos:this.pos,lon:this.camLon,lat:this.camLat,ground:this.under/Math.max(this.globe.shared.uExag.value,1e-6),viewProjectionRel:new xe().multiplyMatrices(e.projectionMatrix,n),pxPerRad:t/(2*Math.tan(this.fovY/2))}}state(){return{lat:this.lat/yt,lon:this.lon/yt,range:this.range,heading:this.heading/yt,tilt:this.tilt/yt}}};var bl=5,wl=class{constructor(t,{samples:e=4,steps:n=20}={}){this.renderer=t,this.samples=e;let s=new Be;s.setAttribute("position",new Le(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),s.setAttribute("uv",new Le(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new pe(s),this.quad.frustumCulled=!1,this.quadScene=new $n,this.quadScene.add(this.quad),this.quadCam=new _s(-1,1,1,-1,0,1);let r=(l,o)=>new Xe({vertexShader:Fd,fragmentShader:l,uniforms:o,glslVersion:ns,depthTest:!1,depthWrite:!1}),a={tDepth:{value:null},uCam:{value:new pt},uRight:{value:new pt},uUp:{value:new pt},uFwd:{value:new pt},uTan:{value:new ie},uShift:{value:new ie},uNear:{value:1},uFar:{value:2},uSun:{value:new pt}};this.atmo=r(kd,{...a,uHaze:{value:1},uSteps:{value:n},uAir:{value:1},uThick:{value:1}}),this.comp=r(Od,{...a,tColor:{value:null},tLight:{value:null},tThrough:{value:null},uPixAngle:{value:.001}}),this.down=r(Bd,{tSrc:{value:null},uTexel:{value:new ie},uThreshold:{value:0}}),this.up=r(zd,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ie}}),this.final=r(Hd,{tColor:{value:null},tBloom:{value:null},uTexel:{value:new ie},uExposure:{value:1},uBloom:{value:.06},uVignette:{value:.35}}),this.w=this.h=0}setSize(t,e){if(t===this.w&&e===this.h)return;this.w=t,this.h=e,this.dispose();let n={type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!1},s=new ni(t,e);s.type=Tn,s.minFilter=s.magFilter=Ue,this.rtScene=new Oe(t,e,{...n,depthBuffer:!0,depthTexture:s,samples:this.samples}),this.rtAir=new Oe(t,e,n),this.rtHalf=new Oe(Math.max(2,t>>1),Math.max(2,e>>1),{...n,count:2,minFilter:Ue,magFilter:Ue}),this.rtDown=[],this.rtUp=[];for(let r=0;r<bl;r++){let a=Math.max(2,t>>r+1),l=Math.max(2,e>>r+1);this.rtDown.push(new Oe(a,l,n)),r<bl-1&&this.rtUp.push(new Oe(a,l,n))}}dispose(){for(let t of[this.rtScene,this.rtAir,this.rtHalf,...this.rtDown??[],...this.rtUp??[]])t?.dispose();this.rtScene?.depthTexture?.dispose()}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,s=[]){let r=this.renderer;r.setRenderTarget(this.rtScene),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let f of s)r.render(f.scene,f.camera),r.setRenderTarget(this.rtScene);let a=this.atmo.uniforms;a.tDepth.value=this.rtScene.depthTexture,a.uCam.value.set(n.pos[0]/1e3,n.pos[1]/1e3,n.pos[2]/1e3),a.uRight.value.set(...n.basis.right),a.uUp.value.set(...n.basis.up),a.uFwd.value.set(...n.basis.fwd),a.uTan.value.set(n.tanY*n.aspect,n.tanY),a.uShift.value.set(n.shift[0],n.shift[1]),a.uNear.value=n.near,a.uFar.value=n.far,a.uSun.value.copy(n.sun);let l=Math.hypot(n.pos[0],n.pos[1],n.pos[2])/1e3-6371,o=Math.min(Math.max((l-1500)/9e3,0),1);a.uThick.value=1+1.1*o*o*(3-2*o),this.pass(this.atmo,this.rtHalf);let h=this.comp.uniforms;h.tColor.value=this.rtScene.texture,h.tLight.value=this.rtHalf.textures[0],h.tThrough.value=this.rtHalf.textures[1],h.uPixAngle.value=2*n.tanY/this.h,this.pass(this.comp,this.rtAir);let u=this.rtAir;for(let f=0;f<bl;f++){let d=this.down.uniforms;d.tSrc.value=u.texture,d.uTexel.value.set(1/u.width,1/u.height),d.uThreshold.value=f===0?1.1:0,this.pass(this.down,this.rtDown[f]),u=this.rtDown[f]}for(let f=bl-2;f>=0;f--){let d=this.up.uniforms;d.tSrc.value=u.texture,d.tAdd.value=this.rtDown[f].texture,d.uTexel.value.set(1/u.width,1/u.height),this.pass(this.up,this.rtUp[f]),u=this.rtUp[f]}let c=this.final.uniforms;c.tColor.value=this.rtAir.texture,c.tBloom.value=u.texture,c.uTexel.value.set(1/this.w,1/this.h),this.pass(this.final,null)}};var ph={version:2,checked:"2026-11-12",what:"How the 3D city on the globe was built from Plato's Critias: which parts follow the text, with the passage, and which parts are our choices because the text is silent. The code is source/engine/city.js and source/engine/city/. Every mesh in the model names one id from this file.",text:{work:"Plato, Critias",translation:"R. G. Bury, Loeb Classical Library, 1929",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.",checked_against:"https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg032/tlg0059.tlg032.perseus-eng2.xml"},units:{stadion_m:185,plethron:"one sixth of a stadion",note:"The stadion is drawn at 185 m. data/plato.json lists the other lengths scholars use; the whole city scales with it."},from_text:[{id:"hill",what:"The city stands on a hill that is low on all sides, about 50 stadia from the sea",ref:"Critias 113c",quote:"at a distance of about 50 stades, there stood a mountain that was low on all sides",param:"hill"},{id:"rings",what:"Three rings of sea and two of land round a central hill",ref:"Critias 113d",quote:"he made circular belts of sea and land enclosing one another alternately, some greater, some smaller, two being of land and three of sea",param:"rings"},{id:"ring-widths",what:"Ring widths from the centre: water 1, land 2, water 2, land 3, water 3 stadia",ref:"Critias 115e",quote:"The greatest of the circles into which a boring was made for the sea was three stades in breadth, and the circle of land next to it was of equal breadth; and of the second pair of circles that of water was two stades in breadth and that of dry land equal again to the preceding one of water; and the circle which ran round the central island itself was of a stade's breadth.",param:"rings"},{id:"island",what:"Central island five stadia across",ref:"Critias 116a",quote:"this island, wherein stood the royal palace, was of five stades in diameter",param:"islandDiameter"},{id:"island-gardens",what:"The central island set in order by the god, bearing every kind of food",ref:"Critias 113e",quote:"producing out of the earth all kinds of food in plenty"},{id:"canal",what:"Canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stadia long",ref:"Critias 115d",quote:"beginning at the sea, they bored a channel right through to the outermost circle, which was three plethra in breadth, one hundred feet in depth, and fifty stades in length",param:"canalLength, canalWidthPlethra"},{id:"canal-mouth",what:"The mouth of the canal on the sea, wide enough for the largest ships",ref:"Critias 115d",quote:"they made the entrance to it from the sea like that to a harbor by opening out a mouth large enough for the greatest ships to sail through",drawn:!1,note:"At the sea, 50 stadia out: beyond the modelled ground. The canal's course is drawn as a line."},{id:"harbours",what:"Three harbours: the three rings of water",ref:"Critias 117d",quote:"after crossing the three outer harbors"},{id:"ship-passages",what:"Roofed passages for one trireme through the rings of land, beside the bridges",ref:"Critias 115d-e",quote:"through the circles of land, which divided those of sea, over against the bridges they opened out a channel leading from circle to circle, large enough to give passage to a single trireme; and this they roofed over above so that the sea-way was subterranean"},{id:"bridges",what:"Bridges over the rings of water, a plethron wide, with towers and gates",ref:"Critias 115c, 116a",quote:"the bridge, which was a plethrum in breadth \u2026 and upon the bridges on each side, over against the passages for the sea, they erected towers and gates",param:"bridgeWidthPlethra"},{id:"bridge-gates",what:"Towers and gates on the bridges, on each side, where the sea passes",ref:"Critias 116a",quote:"upon the bridges on each side, over against the passages for the sea, they erected towers and gates"},{id:"ring-walls",what:"A stone wall round the island, round each ring and along both sides of the bridge",ref:"Critias 116a",quote:"Now the island and the circles and the bridge, which was a plethrum in breadth, they encompassed round about, on this side and on that, with a wall of stone"},{id:"stone",what:"White, black and red stone, quarried on the spot",ref:"Critias 116a-b",quote:"the stone they quarried beneath the central island all round, and from beneath the outer and inner circles, some of it being white, some black and some red"},{id:"rock-docks",what:"Two docks cut into the rock",ref:"Critias 116b",quote:"while quarrying it they constructed two inner docks, hollowed out and roofed over by the native rock"},{id:"patterned-buildings",what:"Buildings of one colour of stone, and buildings patterned in white, black and red",ref:"Critias 116b",quote:"of the buildings some they framed of one simple color, in others they wove a pattern of many colors by blending the stones for the sake of ornament",shape:"ours"},{id:"walls",what:"Walls faced with brass (outer ring), tin (inner ring) and orichalcum (citadel)",ref:"Critias 116b-c",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle; and that of the inner one they coated with tin; and that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"wall-brass",what:"The wall round the outermost ring, covered with brass",ref:"Critias 116b",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle"},{id:"wall-tin",what:"The wall round the inner ring, coated with tin",ref:"Critias 116b",quote:"that of the inner one they coated with tin"},{id:"wall-orichalcum",what:"The wall round the acropolis, coated with orichalcum",ref:"Critias 116b-c",quote:"that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"palace",what:"The royal palace on the central island, enlarged by every king",ref:"Critias 115c-d",quote:"they made of it an abode amazing to behold for the magnitude and beauty of its workmanship",shape:"ours"},{id:"shrine",what:"Shrine of Cleito and Poseidon at the centre, inside a wall of gold; kept as holy ground",ref:"Critias 116c",quote:"In the center there stood a temple sacred to Cleito and Poseidon, which was reserved as holy ground, and encircled with a wall of gold",shape:"ours"},{id:"shrine-wall",what:"The wall of gold round the shrine of Cleito and Poseidon",ref:"Critias 116c",quote:"encircled with a wall of gold"},{id:"temple",what:"Temple of Poseidon: a stadion long, 3 plethra wide, silver outside, gold pinnacles",ref:"Critias 116d",quote:"the temple of Poseidon himself was a stade in length, three plethra in breadth, and of a height which appeared symmetrical therewith \u2026 All the exterior of the temple they coated with silver, save only the pinnacles, and these they coated with gold.",param:"templeLength, templeWidth"},{id:"pinnacles",what:"Gold on the pinnacles of the temple",ref:"Critias 116d",quote:"save only the pinnacles, and these they coated with gold"},{id:"temple-ceiling",what:"Inside the temple: a ceiling of ivory, varied with gold, silver and orichalcum",ref:"Critias 116d",quote:"they made the roof all of ivory in appearance, variegated with gold and silver and orichalcum"},{id:"temple-interior",what:"Inside the temple: walls, pillars and floor covered with orichalcum",ref:"Critias 116d",quote:"all the rest of the walls and pillars and floors they covered with orichalcum"},{id:"poseidon",what:"A gold Poseidon in a chariot with six winged horses, his head touching the roof",ref:"Critias 116d-e",quote:"golden statues, one being that of the God standing on a chariot and driving six \u2026 winged steeds, his own figure so tall as to touch the ridge of the roof"},{id:"nereids",what:"A hundred Nereids on dolphins round him",ref:"Critias 116e",quote:"round about him a hundred Nereids on dolphins"},{id:"votive-inside",what:"Many other statues inside, given by private men",ref:"Critias 116e",quote:"it contained also many other images, the votive offerings of private men",shape:"ours"},{id:"pillar",what:"A pillar of orichalcum inside the temple, with the laws on it",ref:"Critias 119c-d",quote:"a pillar of orichalcum, which was placed within the temple of Poseidon in the center of the island"},{id:"statues",what:"Gold statues of the kings and their wives round the temple",ref:"Critias 116e",quote:"outside, round about the temple, there stood images in gold of all the princes, both themselves and their wives"},{id:"votive-outside",what:"Other offerings round the temple, from kings, citizens and subject peoples",ref:"Critias 116e",quote:"together with many other votive offerings both of the kings and of private persons",shape:"ours"},{id:"altar",what:"The altar, matching the temple in size and workmanship",ref:"Critias 117a",quote:"in respect of its size and its workmanship, harmonized with its surroundings",shape:"ours"},{id:"bulls",what:"Bulls loose in the precinct of Poseidon",ref:"Critias 119d",quote:"In the sacred precincts of Poseidon there were bulls at large",drawn:!1,note:'No animals or people are drawn; see the choice "no-figures".'},{id:"springs",what:"A hot and a cold spring on the central island, with buildings and trees round them",ref:"Critias 113e, 117a-b",quote:"The springs they made use of, one kind being of cold, another of warm water \u2026 these they surrounded with buildings and with plantations of trees",shape:"ours"},{id:"reservoirs",what:"Basins round the springs, some open to the sky and some roofed for hot baths in winter",ref:"Critias 117b",quote:"they set reservoirs round about, some under the open sky, and others under cover to supply hot baths in the winter",shape:"ours"},{id:"baths",what:"Separate baths for the kings, for citizens, for women, and for horses and beasts of burden",ref:"Critias 117b",quote:"they put separate baths for the kings and for the private citizens, besides others for women, and others again for horses and all other beasts of burden",shape:"ours"},{id:"grove",what:"The sacred grove of Poseidon",ref:"Critias 117b",quote:"the sacred grove of Poseidon, which contained trees of all kinds that were of marvellous beauty and height"},{id:"aqueducts",what:"Channels that carry the spring water to the outer rings by the bridges",ref:"Critias 117b",quote:"by means of channels they led the water to the outer circles over against the bridges",shape:"ours"},{id:"ring-buildings",what:"Temples, gardens, exercise grounds and barracks on the rings of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods, and many gardens and many exercising grounds \u2026 in each of the circular belts of island"},{id:"ring-temples",what:"Many temples on each ring of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods",shape:"ours"},{id:"gardens",what:"Many gardens on each ring of land",ref:"Critias 117c",quote:"and many gardens and many exercising grounds"},{id:"gymnasia",what:"Exercise grounds for men on each ring of land",ref:"Critias 117c",quote:"many exercising grounds, some for men and some set apart for horses",shape:"ours"},{id:"horse-grounds",what:"Exercise grounds for horses, kept apart, on each ring of land",ref:"Critias 117c",quote:"some set apart for horses, in each of the circular belts of island",shape:"ours"},{id:"racecourse",what:"Racecourse a stadion wide, running round the middle of the larger ring",ref:"Critias 117c",quote:"in the center of the large island a racecourse laid out for horses, which was a stade in width, while as to length, a strip which ran round the whole circumference",param:"racecourseWidth"},{id:"barracks",what:"Barracks for most of the spearmen on both sides of the racecourse",ref:"Critias 117c",quote:"round about it, on this side and on that, were barracks for the greater part of the spearmen",shape:"ours"},{id:"guard-house",what:"The guard house of the more trusted spearmen, on the smaller ring",ref:"Critias 117c-d",quote:"was posted in the smaller circle, which was nearer the acropolis",shape:"ours"},{id:"guard-dwellings",what:"Dwellings of the most trusted guards, on the acropolis round the kings",ref:"Critias 117d",quote:"had dwellings granted to them within the acropolis round about the persons of the kings",shape:"ours"},{id:"shipyards",what:"Shipyards full of triremes and their gear",ref:"Critias 117d",quote:"the shipyards were full of triremes and all the tackling that belongs to triremes",shape:"ours"},{id:"merchant-ships",what:"Merchant ships filling the canal and the largest harbour",ref:"Critias 117e",quote:"the sea-way and the largest harbor were filled with ships and merchants coming from all quarters",shape:"ours"},{id:"outer-wall",what:"Outer wall 50 stadia from the largest ring, its ends meeting at the canal's mouth on the sea",ref:"Critias 117e",quote:"a wall which began at the sea and ran round in a circle, at a uniform distance of fifty stades from the largest circle and harbor, and its ends converged at the seaward mouth of the channel",param:"outerWallDistance"},{id:"houses",what:"The town inside the outer wall: many houses set close together",ref:"Critias 117e",quote:"The whole of this wall had numerous houses built on to it, set close together",note:'Bury makes the houses line the wall. The Greek is "touto de pan synoikeito hypo pollon kai pyknon oikeseon": all of this was settled with many dense dwellings, which Jowett gives as "The entire area was densely crowded with habitations". We draw the area filled, after the Greek and Jowett.'},{id:"faces-south",what:"The sea lies south of the city",ref:"Critias 118a-b",quote:"this region, all along the island, faced towards the South and was sheltered from the Northern blasts",param:"seaBearing"}],choices:[{id:"stadion",what:"185 m to the stadion",why:"Plato gives stadia, not metres. Lengths from about 157 m to 192 m are used by scholars. The whole city scales with this number."},{id:"style",what:"One style throughout: Greek building forms of Plato's own century (columns, gabled roofs with tiles, ashlar walls with battlements), made strange by the materials the text gives: three colours of stone laid in bands and patterns, and metal skins on walls and temple",why:'Plato wrote about 360 BCE for Athenian readers and uses Greek building words (teichos, pyrgoi, pylai, neosoikoi, gymnasia, hippodromos, neos). He sets the city 9,000 years earlier and says of the temple that "there was something of the barbaric in its appearance" (116d). Rings of wall, each differently coloured and the innermost coated in silver and gold, are what Herodotus (1.98) reports of Ecbatana, the Median capital: a picture of eastern royal splendour his readers knew. So the forms are Greek and the surfaces are the foreign part. This is a drawing of how a Greek reader could have pictured it, not of any real place.',sources:[{what:"Herodotus, Histories 1.98, tr. A. D. Godley (1920): the seven ringed walls of Ecbatana, their battlements white, black, purple, blue, orange, silver and gold",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D98",read:"2026-11-12"}]},{id:"heights",what:"Heights: banks 8 m above the water with a quay 2 m above it, the hill 24 m above the banks, walls 11 m with towers to 17 m, gate towers 21 m",why:'The text says only that the lips of the rings stood "a sufficient height above the level of the sea" for a roofed ship passage (115e), and gives no wall heights. The banks are as high as a trireme without its mast needs to pass under a roof of rock.'},{id:"walls-both-shores",what:"Each ring of land has a wall on both shores, set back from the water behind a harbour strip, and both are faced in that ring's metal on the side towards the water",why:`116a puts the walls round the island, the rings and the bridge "on this side and on that"; 116b names one wall per ring for the metal. We wall both shores and face both in that ring's metal.`},{id:"wall-towers",what:"Towers at intervals along the ring walls, battlements and a walk on top",why:"Towers and gates are stated only for the bridges (116a). A Greek city wall of Plato's time had towers and a crenellated walk."},{id:"metal-look",what:'How the metals look: brass a yellow gold-brown, tin a soft grey-white, orichalcum a red gold "sparkling like fire", silver and gold bright; all slightly weathered sheet, with seams',why:'The text names the metals and says the brass was put on "as though with plaster" (116b). Orichalcum is unknown ("now known only by name", 114e); a red-gold copper alloy is the usual guess.'},{id:"road-offset",what:"One straight road from the town to the palace, 96 m east of the canal's line; the roofed ship passages through the rings of land are on the canal's line",why:'Bridges and ship passages are "over against" each other (115e, 116a). Their exact relation is not given. Ships come up the canal and go straight on through the passages; the road and its bridges run beside them.'},{id:"bridge-form",what:"Bridges of stone on piers with flat spans, a parapet wall each side, the water channel under the roadway",why:"The text gives only the width, a plethron (116a), the walls on both sides and the towers and gates. Greek bridges of the time were piers with corbelled or lintelled openings; the arch was not in general use."},{id:"gate-form",what:"Each bridge end has two towers with a gate between, the gate leaves faced in the ring's metal",why:"116a states towers and gates, no form."},{id:"aqueduct-form",what:"The spring water crosses each bridge in a covered stone channel along the parapet, and falls into basins on the rings",why:'117b says channels led the water to the outer rings by the bridges (Jowett: "by aqueducts along the bridges"). Their form is not given.'},{id:"quays",what:"A level harbour strip at quay height between the water and the foot of each bank, with mooring posts, storehouses on the merchants' harbour and steps up the banks",why:'Not described. Harbours "full of ships" (117e) need them.'},{id:"rock-dock-place",what:"The two rock-cut docks open off the innermost ring of water, in the flank of the central island, as two pairs of roofed slips",why:"116b: two inner docks hollowed out and roofed by the rock, made while quarrying under the island and the rings. The Greek (neosoikous koilous diplous entos) can also be read as double ship sheds. Where they were is not said."},{id:"ship-sheds",what:"Rows of roofed ship sheds on slipways along the three inner harbour strips, each 40 m by 7.4 m, in groups of six",why:"The text has shipyards full of triremes (117d), not their layout. Sheds are sized to the trireme we draw."},{id:"triremes",what:"Triremes about 37 m long and 5.5 m in beam, with a ram, three banks of oars, one mast and an upturned stern",why:"Plato says triremes (115e, 117d) and nothing of their shape. The form follows the Athenian trireme of his own time as rebuilt in the trial ship Olympias.",sources:[{what:"Olympias, the reconstruction of an Athenian trireme (built 1985 to 1987 to John Coates's drawings; 170 oars in three banks; bronze ram)",url:"https://en.wikipedia.org/wiki/Olympias_(trireme)",read:"2026-11-12"}]},{id:"merchantmen",what:"Round-hulled merchant ships 14 to 24 m long with one square sail",why:'117e says only "ships and merchants coming from all quarters".'},{id:"temple-form",what:"Poseidon's temple as a Greek temple with a colonnade all round, on four steps in the three stones, 11 by 22 columns, with a sun disc of gold in each gable",why:"Plato gives its size and metals and says it looked somewhat barbaric (116d). Its form is not described. A stadion by three plethra (185 by 92.5 m) is far larger than any Greek temple; the columns here are 3.4 m thick and 30 m high."},{id:"temple-height",what:"The temple is 41 m to the top of the cornice and 54 m to the ridge",why:'116d: "of a height which appeared symmetrical therewith". We use the proportion of height to width on the front of the Parthenon, 4 to 9.',sources:[{what:"Parthenon: a 4:9 proportion in the elevation",url:"https://en.wikipedia.org/wiki/Parthenon",read:"2026-11-12"}]},{id:"pinnacle-form",what:"The pinnacles are the ornaments on the ridge ends and corners of the roof (akroteria), as tall finials",why:"The Greek word is akroteria. Their shape is not given."},{id:"temple-interior-layout",what:"Inside: one great room with two rows of pillars, Poseidon's chariot at the far end facing the door, the Nereids in rows down both sides, the pillar of the laws before the statue",why:"116d-e and 119c-d list what was inside, not where it stood."},{id:"figure-form",what:"Statues are drawn as plain, smooth figures without faces or detail",why:"We will not invent portraits. The text gives their material (gold) and who they are."},{id:"counts",what:"Numbers: 60 royal statues round the temple, some 30 other offerings, 24 statues inside, towers, ships, sheds, buildings and trees",why:"Not given, except 100 Nereids (116e) and 1,200 ships for the whole fleet (119b). Ten kings and their wives over many generations would be more statues than we draw."},{id:"altar-form",what:"A long stepped altar of white stone before the east front of the temple, 46 m long",why:"117a says only that it matched its surroundings in size and workmanship."},{id:"shrine-form",what:"The shrine of Cleito and Poseidon is a round building with a ring of columns and an open eye in its roof; the wall of gold is 4.5 m high and has a gate towards the sea",why:`116c: holy ground, kept closed (abaton), inside a wall of gold. Nothing more: no shape and no size for either. A round building is one of the forms Greek builders used for a holy place. The gate and the open door are ours, because the shrine is used as this community's hall (see "hall").`},{id:"palace-plan",what:"The palace as ranges of two storeys round courts north of the shrine, with a great hall behind a porch of red columns and a taller hall behind it",why:"115c-d: each king added to it. No plan is given."},{id:"baths-layout",what:"Two round spring houses, two open basins and two roofed ones, three bath buildings round courts and a long trough hall for horses, in the north-east of the island; a stone channel carries the outflow to the grove and to the bridge",why:"117a-b lists them, without a plan."},{id:"grove-trees",what:"The grove: tall cypresses, planes and pines; gardens: olives, fruit trees and vines in rows",why:`117b: "trees of all kinds" of great height and beauty. 115a-b lists the island's fruits. The kinds drawn are Mediterranean, which is a choice.`},{id:"ring-layout",what:"How the rings of land are laid out: temples in walled precincts, gymnasia as colonnaded courts, horse grounds as fenced paddocks, gardens between, a road round each ring",why:"117c lists them and puts the racecourse in the middle of the larger ring with barracks on both sides. The rest of the plan is ours."},{id:"racecourse-form",what:"The racecourse as a sand track a stadion wide between low stone kerbs, with a ring of marker columns down its middle and stone seats by the road",why:"117c gives its width and that it ran round the whole ring."},{id:"house-form",what:"Houses of one and two storeys in blocks round yards, plastered, with tiled roofs, sixteen avenues leading to the harbour",why:"Not described."},{id:"extent",what:"Only the rings and the town within 2.5 stadia of the harbour are modelled, on made ground that ends in a grass bank; the outer wall and the rest of the canal are drawn as lines over the real land",why:"The wall is 50 stadia out (117e), so the whole city is about 23 km across. Levelling that much ground would hide the place it stands on."},{id:"houses-reading",what:"The town fills the ground inside the outer wall, rather than lining the wall",why:'Translations differ at 117e: see the entry "houses". The modelled band shows the nearest part of it.'},{id:"no-figures",what:"No people or animals are drawn",why:"The text has crowds, merchants, spearmen, horses and bulls loose in the precinct (119d). Figures would be invention at every step, and badly drawn ones spoil the scale. Doors, steps, ships and trees give the scale instead."},{id:"water",what:"The water in the rings is calm sea water about 30 m deep, clear enough to see the quay foot",why:"The canal is 100 feet deep (115d). The depth of the rings is not given."},{id:"plain",what:"The great plain, its ditch and canals are not modelled",why:"They are described (118a-e: a plain 3,000 by 2,000 stadia, a ditch a stadion wide and 10,000 stadia long) and are still to do."},{id:"hall",what:"The shrine stands open, and inside it is this community's hall: the research on its wall, a globe on its table",why:"Plato says only that the shrine stood in the centre, was reserved as holy ground, and had a wall of gold round it (116c). He gives it no shape and says nothing of its inside. We made the one closed place in the text the room where the search is shown and people meet. Nothing inside it is from the text."},{id:"home-site",what:"When nobody has stood it anywhere, the city stands on the open Atlantic at 35.3\xB0N, 9.9\xB0W, its canal running south",why:"The text says only that the island lay in front of the Pillars of Heracles, out in the Atlantic (Timaeus 24e). No island is there: the elevation tiles the globe uses put the sea floor at that spot 3,762 m down. The city is set where the words point so that no place anyone has proposed is favoured. It can be stood on any of them instead."}],shape_note:`An entry with "shape": "ours" is stated by Plato, but he gives it no size or form, so everything about how it is drawn is our choice. The page's text-only view draws those pale, together with the choices. An entry with "drawn": false is in the text and not in the model.`};var Ml={stadion:185,islandDiameter:5,rings:[["water",1],["land",2],["water",2],["land",3],["water",3]],canalLength:50,canalWidthPlethra:3,bridgeWidthPlethra:1,templeLength:1,templeWidth:.5,racecourseWidth:1,outerWallDistance:50,bank:8,hill:24,wallHeight:11,wallThickness:4.5,seaBearing:180,modelledTown:2.5},Vd=(i={})=>{let t={...Ml,...i},e=t.stadion,n=e/6,s=e/185,r=[t.islandDiameter/2*e];for(let[,mt]of t.rings)r.push(r[r.length-1]+mt*e);let[a,l,o,h,u,c]=r,f=t.bank,d=2,p=t.wallHeight,v=t.wallThickness,g=t.canalWidthPlethra*n/2,m=t.bridgeWidthPlethra*n/2,x={isle:12*s,r1in:46*s,r1out:46*s,r2in:46*s,r2out:40*s,town:36*s},_=a-x.isle,b=l+x.r1in,S=o-x.r1out,A=h+x.r2in,y=u-x.r2out,T=c+x.town,k=c+t.modelledTown*e,M=k+70*s,H=c+t.outerWallDistance*e,J=g+m+34*s,ft=7.5,F=f+t.hill,V=a*.6,O=a*.76,Y=F-5,lt=f+3,et=Math.sqrt(V*V-J*J),X=O+44*s,G=(A+y)/2,$=t.racecourseWidth*e/2,N=mt=>Math.sqrt(Math.max(0,mt*mt-J*J)),L=[[N(_),N(b)],[N(S),N(A)],[N(y),N(T)]],st=mt=>Math.abs(mt-J)<=m,nt=mt=>mt<=V?F:mt<=O?Y+(lt-Y)*(mt-V)/(O-V):f,ut=(mt,P,ot)=>{let Z=Math.hypot(mt,P),ht=(wt,Pt)=>(ot&&(ot.kind=Pt),wt);if(Z>M)return null;let at=-P;if(st(mt)&&at>0){for(let[wt,Pt]of L)if(at>=wt-1&&at<=Pt+1)return ht(f,"bridge");if(at<=X&&at>=et)return ht(F+(f-F)*(at-et)/(X-et),"ramp")}return Z<=_?ht(nt(Z),Z<=V?"plateau":Z<=O?"slope":"island"):Z<=a?ht(d,"quay"):Z<l?ht(0,"water"):Z<=b||Z>=S&&Z<=o?ht(Math.abs(mt)<ft&&at>0?0:d,"quay"):Z<=S?ht(f,"ring-inner"):Z<h?ht(0,"water"):Z<=A||Z>=y&&Z<=u?ht(Math.abs(mt)<ft&&at>0?0:d,"quay"):Z<=y?ht(f,Math.abs(Z-G)<$?"racecourse":"ring-outer"):Z<c||Math.abs(mt)<g&&at>0?ht(0,"water"):Z<=T?ht(d,"quay"):Z<=k?ht(f,"town"):ht(f+(-3-f)*(Z-k)/(M-k),"bank")},j=-Math.PI/2;return{SEA:j,roadAngle:mt=>j+Math.asin(Math.min(1,J/mt)),arcsExcept:mt=>{let P=mt.map(([Z,ht])=>{let at=Z-ht;return at=(at%(2*Math.PI)+2*Math.PI)%(2*Math.PI),[at,at+2*ht]}).sort((Z,ht)=>Z[0]-ht[0]);if(!P.length)return[[0,2*Math.PI]];let ot=[];for(let Z=0;Z<P.length;Z++){let ht=P[Z][1],at=Z+1<P.length?P[Z+1][0]:P[0][0]+2*Math.PI;at-ht>1e-6&&ot.push([ht,at])}return ot},P:t,S:e,k:s,plethron:n,shores:r,rIsle:a,rW1:l,rL1:o,rW2:h,rL2:u,rW3:c,B:f,Q:d,H:p,T:v,canalHalf:g,bridgeHalf:m,strip:x,rA:_,r1a:b,r1b:S,r2a:A,r2b:y,rT:T,core:k,edge:M,rWall:H,off:J,tunnelHalf:ft,Zp:F,Rp:V,Rs:O,zSlopeTop:Y,zSlopeFoot:lt,rampTop:et,rampFoot:X,rcMid:G,rcHalf:$,along:N,bridges:L,onRoad:st,islandZ:nt,groundZ:ut}};var re=Math.PI*2,Hn=i=>()=>(i=i*1664525+1013904223>>>0)/4294967296;var vi=class{constructor(){this.c=1,this.s=0,this.x=0,this.y=0,this.z=0}set(t=0,e=0,n=0,s=0){return this.c=Math.cos(s),this.s=Math.sin(s),this.x=t,this.y=e,this.z=n,this}push(t,e,n,s=0){let r=[this.c,this.s,this.x,this.y,this.z],a=Math.cos(s),l=Math.sin(s),o=this.x+this.c*t-this.s*e,h=this.y+this.s*t+this.c*e,u=this.c*a-this.s*l,c=this.s*a+this.c*l;return this.c=u,this.s=c,this.x=o,this.y=h,this.z+=n,r}pop(t){[this.c,this.s,this.x,this.y,this.z]=t}},xi=class{constructor(t,e){this.F=t,this.id=e,this.cap=1024,this.icap=2048,this.pos=new Float32Array(this.cap*3),this.nrm=new Int8Array(this.cap*4),this.col=new Uint8Array(this.cap*4),this.idx=new Uint32Array(this.icap),this.nv=0,this.ni=0,this.s=0,this.r=255,this.g=255,this.b=255}surf(t,e){return this.s=t,e?(this.r=e[0],this.g=e[1],this.b=e[2]):this.r=this.g=this.b=255,this}room(t,e){if(this.nv+t>this.cap){for(;this.nv+t>this.cap;)this.cap*=2;let n=new Float32Array(this.cap*3);n.set(this.pos.subarray(0,this.nv*3)),this.pos=n;let s=new Int8Array(this.cap*4);s.set(this.nrm.subarray(0,this.nv*4)),this.nrm=s;let r=new Uint8Array(this.cap*4);r.set(this.col.subarray(0,this.nv*4)),this.col=r}if(this.ni+e>this.icap){for(;this.ni+e>this.icap;)this.icap*=2;let n=new Uint32Array(this.icap);n.set(this.idx.subarray(0,this.ni)),this.idx=n}}v(t,e,n,s,r,a,l=1){this.room(1,0);let o=this.F,h=this.nv,u=h*3,c=h*4;return this.pos[u]=o.x+o.c*t-o.s*e,this.pos[u+1]=o.y+o.s*t+o.c*e,this.pos[u+2]=o.z+n,this.nrm[c]=(o.c*s-o.s*r)*127,this.nrm[c+1]=(o.s*s+o.c*r)*127,this.nrm[c+2]=a*127,this.col[c]=this.r*l,this.col[c+1]=this.g*l,this.col[c+2]=this.b*l,this.col[c+3]=this.s,this.nv++}tri3(t,e,n){this.room(0,3),this.idx[this.ni++]=t,this.idx[this.ni++]=e,this.idx[this.ni++]=n}quad4(t,e,n,s){this.room(0,6);let r=this.idx,a=this.ni;r[a++]=t,r[a++]=e,r[a++]=n,r[a++]=t,r[a++]=n,r[a++]=s,this.ni=a}quad(t,e,n,s,r=1,a=r,l=a,o=r){let h=e[0]-t[0],u=e[1]-t[1],c=e[2]-t[2],f=s[0]-t[0],d=s[1]-t[1],p=s[2]-t[2],v=u*p-c*d,g=c*f-h*p,m=h*d-u*f,x=Math.hypot(v,g,m)||1;v/=x,g/=x,m/=x;let _=this.v(t[0],t[1],t[2],v,g,m,r);return this.v(e[0],e[1],e[2],v,g,m,a),this.v(n[0],n[1],n[2],v,g,m,l),this.v(s[0],s[1],s[2],v,g,m,o),this.quad4(_,_+1,_+2,_+3),this}tri(t,e,n,s=1,r=s,a=s){let l=e[0]-t[0],o=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],d=o*f-h*c,p=h*u-l*f,v=l*c-o*u,g=Math.hypot(d,p,v)||1;d/=g,p/=g,v/=g;let m=this.v(t[0],t[1],t[2],d,p,v,s);return this.v(e[0],e[1],e[2],d,p,v,r),this.v(n[0],n[1],n[2],d,p,v,a),this.tri3(m,m+1,m+2),this}wall(t,e,n,s,r,a,l=1,o=l){return this.quad([t,e,r],[n,s,r],[n,s,a],[t,e,a],l,l,o,o)}slab(t,e,n,s,r,a=0,l=1){let o=Math.cos(a)/2,h=Math.sin(a)/2,u=o*s,c=h*s,f=-h*r,d=o*r;return this.quad([t-u-f,e-c-d,n],[t+u-f,e+c-d,n],[t+u+f,e+c+d,n],[t-u+f,e-c+d,n],l)}box(t,e,n,s,r,a,l=0,{top:o=!0,bottom:h=!1,foot:u=1,head:c=u,sides:f=15,topShade:d=1}={}){let p=Math.cos(l)/2,v=Math.sin(l)/2,g=p*s,m=v*s,x=-v*r,_=p*r,b=n+a,S=[[t-g-x,e-m-_],[t+g-x,e+m-_],[t+g+x,e+m+_],[t-g+x,e-m+_]];for(let A=0;A<4;A++)if(f&1<<A){let y=S[A],T=S[(A+1)%4];this.wall(y[0],y[1],T[0],T[1],n,b,u,c)}return o&&this.quad([S[0][0],S[0][1],b],[S[1][0],S[1][1],b],[S[2][0],S[2][1],b],[S[3][0],S[3][1],b],d),h&&this.quad([S[3][0],S[3][1],n],[S[2][0],S[2][1],n],[S[1][0],S[1][1],n],[S[0][0],S[0][1],n],u*.6),this}sweep(t,{arcs:e=[[0,re]],step:n=8,sense:s=1}={}){let r=Math.max(...t.map(a=>a[0]),1);for(let[a,l]of e){let o=Math.max(2,Math.ceil((l-a)*r/n));for(let h=0;h<t.length-1;h++){let u=t[h],c=t[h+1];if(Math.abs(u[0]-c[0])<1e-6&&Math.abs(u[1]-c[1])<1e-6)continue;let f=u[2]??1,d=c[2]??1;for(let p=0;p<o;p++){let v=a+(l-a)*p/o,g=a+(l-a)*(p+1)/o,m=Math.cos(v),x=Math.sin(v),_=Math.cos(g),b=Math.sin(g),S=[u[0]*m,u[0]*x,u[1]],A=[u[0]*_,u[0]*b,u[1]],y=[c[0]*_,c[0]*b,c[1]],T=[c[0]*m,c[0]*x,c[1]];s>0?this.quad(S,A,y,T,f,f,d,d):this.quad(A,S,T,y,f,f,d,d)}}}return this}shaft(t,e,n,s,r,a,l=12,{foot:o=1,head:h=o,cap:u=!1,phase:c=0}={}){for(let f=0;f<l;f++){let d=c+f/l*re,p=c+(f+1)/l*re,v=Math.cos(d),g=Math.sin(d),m=Math.cos(p),x=Math.sin(p);this.quad([t+s*v,e+s*g,n],[t+s*m,e+s*x,n],[t+r*m,e+r*x,n+a],[t+r*v,e+r*g,n+a],o,o,h,h),u&&this.tri([t,e,n+a],[t+r*v,e+r*g,n+a],[t+r*m,e+r*x,n+a],h)}return this}turned(t,e,n,s,r=8,{squash:a=1,rot:l=0,shade:o=1}={}){let h=this.nv,u=s.length;for(let c=0;c<u;c++){let[f,d]=s[c],p=s[Math.max(0,c-1)],v=s[Math.min(u-1,c+1)],g=v[0]-p[0],m=v[1]-p[1],x=Math.hypot(g,m)||1,_=m/x,b=-g/x;for(let S=0;S<r;S++){let A=l+S/r*re,y=Math.cos(A),T=Math.sin(A)*a;this.v(t+f*y,e+f*T,n+d,_*y,_*Math.sin(A),b,o)}}for(let c=0;c<u-1;c++)for(let f=0;f<r;f++){let d=h+c*r+f,p=h+c*r+(f+1)%r;this.quad4(d,p,p+r,d+r)}return this}loft(t,{closed:e=!1,flip:n=!1,shade:s=1}={}){let r=this.nv,a=t.length,l=t[0].length;for(let h=0;h<a;h++)for(let u=0;u<l;u++){let c=t[h][u],f=t[Math.min(a-1,h+1)][u],d=t[Math.max(0,h-1)][u],p=t[h][e?(u+1)%l:Math.min(l-1,u+1)],v=t[h][e?(u+l-1)%l:Math.max(0,u-1)],g=f[0]-d[0],m=f[1]-d[1],x=f[2]-d[2],_=p[0]-v[0],b=p[1]-v[1],S=p[2]-v[2],A=m*S-x*b,y=x*_-g*S,T=g*b-m*_,k=(Math.hypot(A,y,T)||1)*(n?-1:1);this.v(c[0],c[1],c[2],A/k,y/k,T/k,c[3]??s)}let o=e?l:l-1;for(let h=0;h<a-1;h++)for(let u=0;u<o;u++){let c=r+h*l+u,f=r+h*l+(u+1)%l;n?this.quad4(c,f,f+l,c+l):this.quad4(c,c+l,f+l,f)}return this}geometry(){let t=new Be;return t.setAttribute("position",new Le(this.pos.slice(0,this.nv*3),3)),t.setAttribute("normal",new Le(this.nrm.slice(0,this.nv*4),4,!0)),t.setAttribute("aTint",new Le(this.col.slice(0,this.nv*4),4,!0)),t.setIndex(new Le(this.nv>65535?this.idx.slice(0,this.ni):new Uint16Array(this.idx.subarray(0,this.ni)),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Sl=class{constructor(){this.F=new vi,this.bins=new Map}to(t){let e=this.bins.get(t);return e||this.bins.set(t,e=new xi(this.F,t)),e}proto(t){return new xi(new vi,t)}},Ni=(i,t,e)=>{let n=new kr(i,t,e.length),s=new xe,r=new Wn,a=new ei,l=new pt,o=new pt,h=new se,u=!1;return e.forEach((c,f)=>{a.set(c.tilt??0,0,c.rot??0,"ZXY"),r.setFromEuler(a),l.set(c.sx??1,c.sy??c.sx??1,c.sz??c.sx??1),o.set(c.x,c.y,c.z??0),n.setMatrixAt(f,s.compose(o,r,l)),c.tint?(u=!0,n.setColorAt(f,h.setRGB(c.tint[0]/255,c.tint[1]/255,c.tint[2]/255,Ie))):u&&n.setColorAt(f,h.setRGB(1,1,1))}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.computeBoundingBox(),n};var ri=["ashlar","paving","tiles","plaster","metal","grass","sand","wood","rock","leaf"],Wx=Object.fromEntries(ri.map((i,t)=>[i,t])),Qe=(i,t,e={})=>({layer:Wx[i],size:t,metal:0,rough:1,bump:1,pattern:0,wet:1,keep:0,...e}),Tl={stone:Qe("ashlar",3.6),stoneBands:Qe("ashlar",3.6,{pattern:1}),stoneChequer:Qe("ashlar",3.6,{pattern:2}),stoneCourses:Qe("ashlar",3.6,{pattern:3}),smooth:Qe("plaster",5,{rough:.8,bump:.5}),rock:Qe("rock",9,{bump:1.3}),paving:Qe("paving",7),plaster:Qe("plaster",4.5,{bump:.7}),tiles:Qe("tiles",2.6,{keep:1,wet:0}),metal:Qe("metal",4.6,{metal:.72,rough:1.5,wet:0}),gilt:Qe("metal",3.1,{metal:.8,rough:1.15,bump:.3,wet:0}),grass:Qe("grass",7,{keep:1}),sand:Qe("sand",6,{keep:1}),earth:Qe("sand",8,{keep:0}),wood:Qe("wood",2.6,{keep:1}),leaf:Qe("leaf",5.5,{keep:1,wet:0,bump:1.6}),cloth:Qe("plaster",2.2,{wet:0,bump:.4}),dark:Qe("rock",9,{bump:.4,wet:0}),ivory:Qe("plaster",6,{rough:.55,bump:.3,wet:0})},ua=Object.keys(Tl),tt=Object.fromEntries(ua.map((i,t)=>[i,t])),W={white:[226,219,203],black:[70,70,76],red:[150,78,58],brass:[205,160,72],tin:[196,201,204],orichalcum:[226,118,62],silver:[224,228,232],gold:[246,190,78],plaster:[[232,224,207],[222,208,184],[212,193,164],[226,214,196],[204,182,152],[236,230,218]],tile:[[255,255,255],[240,222,205],[226,204,186],[255,240,226]],wood:[150,118,86],darkWood:[92,70,50],hull:[78,60,44],sail:[232,222,198],ivory:[244,236,214],leaf:[[78,104,58],[92,116,66],[66,92,52],[104,122,70]],cypress:[[40,66,42],[48,74,46],[34,58,38]],olive:[[118,132,96],[104,120,88]],trunk:[96,78,60],shade:[26,26,28],sand:[255,255,255],water:[255,255,255]},mh=["canal","merchant-ships","houses","harbours","bridges","bridge-gates","aqueducts","wall-brass","ship-passages","racecourse","barracks","horse-grounds","gymnasia","gardens","ring-temples","patterned-buildings","shipyards","wall-tin","guard-house","rock-docks","wall-orichalcum","guard-dwellings","springs","reservoirs","baths","grove","palace","shrine","shrine-wall","altar","statues","votive-outside","temple","pinnacles","temple-interior","temple-ceiling","poseidon","nereids","votive-inside","pillar"],Ow=[...mh,"hall","rings","island","hill","island-gardens","stone","ring-walls","quays","outer-wall","extent","ship-sheds","triremes","merchantmen","wall-towers","bridge-form","gate-form","palace-plan","house-form","grove-trees","ring-layout","racecourse-form","rock-dock-place","road-offset","temple-form","figure-form"];var Ze=(i,t)=>[Math.min(255,i[0]*t),Math.min(255,i[1]*t),Math.min(255,i[2]*t)],as=(i,t,e,n,s,r,{n:a=12,surf:l=tt.smooth,tint:o=W.white,base:h=!1,shade:u=1,simple:c=!1}={})=>{if(i.surf(l,o),c){c==="pier"?i.box(t,e,n,s*2,s*2,r,0,{top:!1,foot:.8*u,head:.95*u}):(i.shaft(t,e,n,s,s*.82,r-s*.5,6,{foot:.82*u,head:.95*u}),i.box(t,e,n+r-s*.5,s*2.5,s*2.5,s*.5,0,{foot:.9*u,top:!1,bottom:!0}));return}let f=s*.55,d=s*.42,p=r-f-d,v=n;h&&(i.shaft(t,e,n,s*1.3,s*1.3,s*.35,a,{foot:.8*u,head:u,cap:!0}),v+=s*.35),i.shaft(t,e,v,s,s*.8,p-(v-n),a,{foot:.82*u,head:.95*u}),i.shaft(t,e,n+p,s*.8,s*1.22,f,a,{foot:.8*u,head:u}),i.box(t,e,n+p+f,s*2.7,s*2.7,d,0,{foot:.9*u,topShade:.7*u})},Rs=(i,t,e,n,s,r,a,l,o,h)=>{for(let u=0;u<a;u++){let c=a>1?u/(a-1):.5;as(i,t+(n-t)*c,e+(s-e)*c,r,l,o,h)}},Al=(i,t,e,n,s,{over:r=.6,tile:a=W.tile[0],wall:l=[tt.plaster,W.plaster[0]],thick:o=.28,ridgeAlongY:h=!1}={})=>{let u=i.F,c=h?u.push(0,0,0,Math.PI/2):null;h&&([t,e]=[e,t]);let f=t/2+r*.5,d=e/2+r,p=s*r/(e/2),v=n-p,g=n+s;i.surf(tt.tiles,a),i.quad([-f,-d,v],[f,-d,v],[f,0,g],[-f,0,g],.92,.92,1,1),i.quad([f,d,v],[-f,d,v],[-f,0,g],[f,0,g],.92,.92,1,1),i.surf(tt.tiles,Ze(a,.7)),i.wall(-f,-d,f,-d,v-o,v,.7,.85),i.wall(f,d,-f,d,v-o,v,.7,.85);for(let m of[-1,1]){let x=m*f,_=[x,-d,v],b=[x,0,g],S=[x,d,v],A=y=>[y[0],y[1],y[2]-o];m>0?(i.quad(A(_),A(b),b,_,.75),i.quad(A(b),A(S),S,b,.75)):(i.quad(A(b),A(_),_,b,.75),i.quad(A(S),A(b),b,S,.75))}i.surf(tt.wood,W.darkWood),i.quad([f,-d,v-o],[-f,-d,v-o],[-f,-e/2,n-o],[f,-e/2,n-o],.45),i.quad([-f,d,v-o],[f,d,v-o],[f,e/2,n-o],[-f,e/2,n-o],.45),i.surf(l[0],l[1]),i.tri([t/2,-e/2,n],[t/2,e/2,n],[t/2,0,g-.05],.8,.8,.95),i.tri([-t/2,e/2,n],[-t/2,-e/2,n],[-t/2,0,g-.05],.8,.8,.95),c&&u.pop(c)},$x=(i,t,e,n,s,{over:r=.6,tile:a=W.tile[0],thick:l=.28}={})=>{let o=t/2+r,h=e/2+r,u=n-.15,c=n+s,f=Math.max(0,t/2-e/2);i.surf(tt.tiles,a),i.quad([-o,-h,u],[o,-h,u],[f,0,c],[-f,0,c],.92,.92,1,1),i.quad([o,h,u],[-o,h,u],[-f,0,c],[f,0,c],.92,.92,1,1),i.tri([o,-h,u],[o,h,u],[f,0,c],.92,.92,1),i.tri([-o,h,u],[-o,-h,u],[-f,0,c],.92,.92,1),i.surf(tt.tiles,Ze(a,.7)),i.box(0,0,u-l,o*2,h*2,l,0,{top:!1,bottom:!0,foot:.7})},El=(i,t,e,n,s,r,a,l,o)=>{let h=t/2,u=e/2;n===0?i.wall(s-a/2,-u-o,s+a/2,-u-o,r,r+l,.85,1):n===1?i.wall(h+o,s-a/2,h+o,s+a/2,r,r+l,.85,1):n===2?i.wall(s+a/2,u+o,s-a/2,u+o,r,r+l,.85,1):i.wall(-h-o,s+a/2,-h-o,s-a/2,r,r+l,.85,1)},da=(i,t,e,n,s,r,{pw:a=1.5,ph:l=2.5,frame:o=W.white,leaf:h=W.darkWood}={})=>{i.surf(tt.smooth,o),El(i,t,e,n,s,r,a+.5,l+.3,.05),i.surf(tt.wood,h),El(i,t,e,n,s,r,a,l,.09)},qx=(i,t,e,n,s,r,{pw:a=.8,ph:l=1.1}={})=>{i.surf(tt.smooth,W.white),El(i,t,e,n,s,r-.12,a+.3,l+.24,.04),i.surf(tt.dark,W.shade),El(i,t,e,n,s,r,a,l,.07)},on=(i,t,e,n,s,r,a,l,o={})=>{let{wall:h=[tt.plaster,W.plaster[0]],roof:u="gable",rise:c=Math.min(s,r)*.22,tile:f=W.tile[0],doors:d=[[0,0]],windows:p=1,base:v=null,cornice:g=null,ridgeAlongY:m=r>s,over:x=.6}=o,_=i.F.push(t,e,n,l);if(i.surf(h[0],h[1]).box(0,0,0,s,r,a,0,{top:u==="flat",foot:.78,head:1,topShade:.9}),v&&i.surf(v[0],v[1]).box(0,0,0,s+.3,r+.3,Math.min(1.1,a*.2),0,{foot:.72,head:.9,topShade:.8}),g&&i.surf(tt.smooth,g).box(0,0,a-.45,s+.5,r+.5,.45,0,{bottom:!0,foot:.8,topShade:.8}),u==="gable")Al(i,s,r,a,c,{tile:f,wall:h,ridgeAlongY:m,over:x});else if(u==="hip")$x(i,s,r,a,c,{tile:f,over:x});else{i.surf(h[0],h[1]);for(let[b,S,A,y]of[[0,-r/2+.2,s,.4],[0,r/2-.2,s,.4],[-s/2+.2,0,.4,r-.8],[s/2-.2,0,.4,r-.8]])i.box(b,S,a,A,y,.7,0,{foot:.9,topShade:.95})}for(let[b,S]of d)da(i,s,r,b,S,0,{ph:Math.min(2.6,a*.62)});if(p){let b=Math.max(1,Math.round(a/3.4));for(let S=0;S<b;S++){let A=a/b*S+a/b*.52;for(let y of[0,2,1,3]){let T=y%2?r:s,k=Math.floor(T/3.6)*(p>1,1);for(let M=0;M<k;M++){let H=-T/2+T*(M+.5)/k;S===0&&d.some(([J,ft])=>J===y&&Math.abs(ft-H)<1.6)||(M+S+y)%(p>1?1:2)||qx(i,s,r,y,H,A,{pw:.7,ph:1})}}}}i.F.pop(_)},yi=(i,t,e,n,s,r,a,l,{wall:o=[tt.stone,W.white],tile:h=W.tile[1],cols:u=Math.max(3,Math.round(s/3.4)),colTint:c=W.white,r:f=.34,simple:d=!0}={})=>{let p=i.F.push(t,e,n,l);i.surf(tt.paving,W.white).box(0,0,0,s+1,r+1,.3,0,{foot:.8,topShade:.75}),i.surf(o[0],o[1]).box(0,r/2-.3,.3,s,.6,a+1.1,0,{foot:.7});for(let x of[-1,1])i.box(x*(s/2-.3),0,.3,.6,r,a+.5,0,{foot:.7});Rs(i,-s/2+.6,-r/2+.5,s/2-.6,-r/2+.5,.3,u,f,a-.4,{n:8,tint:c,simple:d}),i.surf(tt.smooth,c).box(0,-r/2+.5,a-.1,s,.8,.5,0,{bottom:!0,foot:.7});let v=a+.4,g=a+1.5,m=s/2+.4;i.surf(tt.tiles,h).quad([-m,-r/2-.5,v],[m,-r/2-.5,v],[m,r/2+.1,g],[-m,r/2+.1,g],.92,.92,1,1),i.surf(tt.wood,W.darkWood).quad([m,-r/2-.5,v-.2],[-m,-r/2-.5,v-.2],[-m,r/2,g-.25],[m,r/2,g-.25],.4),i.F.pop(p)},Wd=(i,t,e,n,s,r,a,{wall:l=[tt.stone,W.white],colTint:o=W.white,tile:h=W.tile[0],cols:u=4,steps:c=3,closed:f=!1,finial:d=null}={})=>{let p=i.F.push(t,e,n,a),v=.32,g=s*.82,m=s*.052,x=f?0:Math.min(r*.28,s*.6);for(let b=0;b<c;b++)i.surf(tt.smooth,W.white).box(0,0,b*v,s+2.6-b*.9,r+2.6-b*.9,v,0,{foot:.8,topShade:.85});let _=c*v;if(i.surf(l[0],l[1]).box(0,x/2,_,s-1.2,r-x-.6,g,0,{top:!1,foot:.75}),!f){Rs(i,-s/2+m*1.6,-r/2+m*1.6,s/2-m*1.6,-r/2+m*1.6,_,u,m,g,{tint:o}),da(i,s-1.2,r-x-.6,0,0,_,{pw:s*.2,ph:g*.62});let b=i.F.push(0,x/2,0);i.F.pop(b)}if(i.surf(tt.smooth,o).box(0,0,_+g,s+.1,r+.1,s*.1,0,{bottom:!0,foot:.78,topShade:.8}),Al(i,s+.1,r+.1,_+g+s*.1,s*.19,{tile:h,wall:[tt.smooth,o],ridgeAlongY:!0,over:.5}),d)for(let b of[-1,1])i.surf(tt.gilt,d),i.shaft(0,b*(r/2+.3),_+g+s*.29,s*.035,.02,s*.16,6,{foot:.9});i.F.pop(p)},Rl=(i,t,e,n,s,r,a,l,{depth:o=5,wall:h=[tt.stone,W.white],tile:u=W.tile[1],floor:c=[tt.sand,W.sand],gate:f=!0}={})=>{let d=i.F.push(t,e,n,l);i.surf(c[0],c[1]).slab(0,0,.06,s-o*2,r-o*2,0,.95),yi(i,0,r/2-o/2,0,s,o,a,0,{wall:h,tile:u}),yi(i,0,-r/2+o/2,0,s,o,a,Math.PI,{wall:h,tile:u}),yi(i,s/2-o/2,0,0,r-o*2,o,a,-Math.PI/2,{wall:h,tile:u}),yi(i,-s/2+o/2,0,0,r-o*2,o,a,Math.PI/2,{wall:h,tile:u}),f&&i.surf(tt.wood,W.darkWood).wall(-1.4,-r/2-.08,1.4,-r/2-.08,.3,3.2,.8,1),i.F.pop(d)},Fi=(i,t,e,n,s,r,{pitch:a=3.2,w:l=1.7,t:o=.7,h=1.3,lowWall:u=.9}={})=>{let c=Math.hypot(n-t,s-e),f=Math.max(1,Math.round(c/a)),d=(n-t)/c,p=(s-e)/c,v=Math.atan2(p,d),g=p,m=-d;u&&i.box((t+n)/2-g*o/2,(e+s)/2-m*o/2,r,c,o,u,v,{foot:.9,topShade:.9});for(let x=0;x<f;x++){let _=(x+.5)/f*c;i.box(t+d*_-g*o/2,e+p*_-m*o/2,r+u,l,o,h,v,{foot:.92,topShade:.95})}},fa=(i,t,e,n,s,r,a,{face:l=[tt.stone,W.white],crown:o=[tt.stone,W.white],slits:h=!0,band:u=null}={})=>{let c=i.F.push(t,e,n,a),f=s/2;i.surf(l[0],l[1]).box(0,0,0,s,s,r,0,{top:!1,foot:.72}),i.surf(o[0],o[1]).box(0,0,r,s+.7,s+.7,.7,0,{bottom:!0,foot:.8,topShade:.7}),u&&i.surf(u[0],u[1]).box(0,0,r*.62,s+.3,s+.3,.6,0,{bottom:!0,foot:.85});let d=r+.7,p=f+.35;if(i.surf(o[0],o[1]),Fi(i,-p,-p,p,-p,d,{pitch:2.6,w:1.3}),Fi(i,p,-p,p,p,d,{pitch:2.6,w:1.3}),Fi(i,p,p,-p,p,d,{pitch:2.6,w:1.3}),Fi(i,-p,p,-p,-p,d,{pitch:2.6,w:1.3}),h){i.surf(tt.dark,W.shade);for(let v of[0,1,2,3]){let g=v*Math.PI/2,m=Math.cos(g),x=Math.sin(g),_=x*(f+.06),b=-m*(f+.06);i.wall(_-m*.25,b-x*.25,_+m*.25,b+x*.25,r*.7,r*.7+1.8)}}i.F.pop(c)},Xx=[[.125,0],[.12,.08],[.098,.42],[.112,.6],[.092,.69],[.128,.795],[.118,.83],[.05,.855],[.062,.9],[.066,.94],[.045,.985],[0,1]],pa=(i,t,e,n,s,r=0,{n:a=8,tint:l=W.gold,surf:o=tt.gilt,arm:h=!1}={})=>{i.surf(o,l);let u=i.F.push(t,e,n,r);i.turned(0,0,0,Xx.map(([c,f])=>[c*s,f*s]),a,{squash:.62}),h&&i.box(s*.16,-s*.03,s*.72,s*.3,s*.05,s*.05,.25,{bottom:!0}),i.F.pop(u)},Cl=(i,t,e,n,s,r,{plinth:a=[tt.smooth,W.white],tint:l=W.gold,ph:o=s*.32,pw:h=s*.36}={})=>{i.surf(a[0],a[1]).box(t,e,n,h*1.25,h*1.25,o*.2,r,{foot:.75,topShade:.8}),i.box(t,e,n+o*.2,h,h,o*.8,r,{foot:.85,topShade:.8}),pa(i,t,e,n+o,s,r,{tint:l})},$d=(i,t,e,n,s,{surf:r=tt.smooth,tint:a=W.white,treads:l=Math.max(2,Math.round(Math.abs(s-n)/.4))}={})=>{i.surf(r,a);let o=(s-n)/l,h=e/l;for(let u=0;u<l;u++)i.wall(-t/2,u*h,t/2,u*h,n+u*o,n+(u+1)*o,.72,.85),i.quad([-t/2,u*h,n+(u+1)*o],[t/2,u*h,n+(u+1)*o],[t/2,(u+1)*h,n+(u+1)*o],[-t/2,(u+1)*h,n+(u+1)*o],.95)};var qd=(i,t,e)=>{let{B:n,Q:s,rIsle:r,rW1:a,rL1:l,rW2:o,rL2:h,rW3:u,rA:c,r1a:f,r1b:d,r2a:p,r2b:v,rT:g,core:m,edge:x,Zp:_,Rp:b,Rs:S,zSlopeTop:A,zSlopeFoot:y,SEA:T,roadAngle:k,arcsExcept:M,canalHalf:H,bridgeHalf:J,tunnelHalf:ft,off:F,rampTop:V,rampFoot:O,k:Y}=t,lt=e.phone?14:8,et=-3.2,X=i.to("rings"),G=i.to("quays"),$=i.to("stone"),N=i.to("rings"),L=i.to("island"),st=i.to("hill"),nt=(E,dt)=>Math.asin(Math.min(1,dt/E)),ut=21,j=Math.PI/2,ct=M([[j,nt(r,ut)]]);X.surf(tt.stone,W.white).sweep([[r,et,.6],[r,s,.95]],{arcs:ct,step:lt}),X.surf(tt.paving,W.white).sweep([[r,s,.95],[c,s,.8]],{arcs:ct,step:lt}),$.surf(tt.stoneCourses,W.white).sweep([[c,s,.7],[c,n,.95]],{arcs:M([[j,nt(c,ut)]]),step:lt}),L.surf(tt.grass,[235,235,225]).sweep([[c,n],[S+26,n]],{step:lt}),L.surf(tt.paving,W.white).sweep([[S+26,n+.02],[S,n+.02,.8]],{step:lt});let vt=E=>[[k(E),nt(E,J+.6)]];st.surf(tt.stoneBands,W.white).sweep([[S,n,.7],[S,y+.9,1]],{arcs:M(vt(S)),step:lt}),st.surf(tt.smooth,W.white).sweep([[S,y+.9],[S-.7,y+.9],[S-.7,y,.8]],{arcs:M(vt(S)),step:lt}),st.surf(tt.grass,[255,255,245]).sweep([[S-.7,y],[b,A,.85]],{step:lt}),st.surf(tt.stoneBands,W.white).sweep([[b,A,.7],[b,_+1,1]],{arcs:M(vt(b)),step:lt}),st.surf(tt.smooth,W.white).sweep([[b,_+1],[b-.8,_+1],[b-.8,_,.8]],{arcs:M(vt(b)),step:lt}),L.surf(tt.paving,W.white).sweep([[b,_],[b*.5,_],[.5,_]],{step:lt*2});let mt=(E,dt,gt,R,B)=>{let K=w=>[[T,nt(w,ft)]];X.surf(tt.stone,W.white).sweep([[E,et,.6],[E,s,.95]],{arcs:M(K(E)),step:lt,sense:-1}),X.surf(tt.paving,W.white).sweep([[E,s,.95],[E+gt,s,.8]],{arcs:M(K(E)),step:lt,sense:-1}),$.surf(B[0],B[1]).sweep([[E+gt,s,.7],[E+gt,n,.95]],{arcs:M(K(E+gt)),step:lt,sense:-1}),N.surf(tt.grass,[240,236,220]).sweep([[E+gt,n],[dt-R,n]],{step:lt,sense:-1}),$.surf(B[0],B[1]).sweep([[dt-R,n,.95],[dt-R,s,.7]],{arcs:M(K(dt-R)),step:lt,sense:-1}),X.surf(tt.paving,W.white).sweep([[dt-R,s,.8],[dt,s,.95]],{arcs:M(K(dt)),step:lt,sense:-1}),X.surf(tt.stone,W.white).sweep([[dt,s,.95],[dt,et,.6]],{arcs:M(K(dt)),step:lt,sense:-1})};mt(a,l,f-a,l-d,[tt.stoneBands,W.white]),mt(o,h,p-o,h-v,[tt.stoneChequer,W.white]);let P=i.to("ship-passages"),ot=5.6,Z=ft,ht=(E,dt=Z)=>-Math.sqrt(E*E-dt*dt);for(let[E,dt,gt,R]of[[a,l,f-a,l-d],[o,h,p-o,h-v]]){for(let[w,I]of[[ht(E),ht(E+gt)],[ht(dt-R),ht(dt)]])for(let U of[-1,1])X.surf(tt.stone,W.white),U>0?X.wall(Z,w,Z,I,et,s,.6,.95):X.wall(-Z,I,-Z,w,et,s,.6,.95);let B=ht(E+gt),K=ht(dt-R);P.surf(tt.rock,[120,116,110]),P.wall(Z,B,Z,K,et,ot,.3,.2),P.wall(-Z,K,-Z,B,et,ot,.3,.2),P.quad([-Z,B,ot],[Z,B,ot],[Z,K,ot],[-Z,K,ot],.25);for(let[w,I]of[[B,1],[K,-1]]){P.surf(tt.stone,W.red);let U=w+I*.25;I>0?(P.wall(Z+2.2,U,-Z-2.2,U,ot,n,.85,1),P.wall(Z+2.2,U,Z,U,s,ot,.8,.9),P.wall(-Z,U,-Z-2.2,U,s,ot,.8,.9)):(P.wall(-Z-2.2,U,Z+2.2,U,ot,n,.85,1),P.wall(Z,U,Z+2.2,U,s,ot,.8,.9),P.wall(-Z-2.2,U,-Z,U,s,ot,.8,.9)),P.surf(tt.rock,[120,116,110]).quad([-Z,w,ot],[Z,w,ot],[Z,w+I*.3,ot],[-Z,w+I*.3,ot],.3)}}let at=i.to("rock-docks"),wt=52*Y,Pt=Math.sqrt(c*c-ut*ut),Jt=Math.sqrt(r*r-ut*ut),Ut=17,At=(ut*2-Ut*2)/3,Lt=n-1.2;at.surf(tt.rock,[150,144,132]),at.wall(-ut,Pt,ut,Pt,Lt,n,.8,1);let kt=[-ut+At+Ut/2,ut-At-Ut/2];for(let E of[-ut+At/2,0,ut-At/2])at.wall(E-At/2,Pt,E+At/2,Pt,et,Lt,.55,.9);for(let E of kt)at.surf(tt.rock,[118,112,104]),at.wall(E-Ut/2,Pt,E-Ut/2,Pt-wt,et,Lt,.32,.22),at.wall(E+Ut/2,Pt-wt,E+Ut/2,Pt,et,Lt,.32,.22),at.wall(E-Ut/2,Pt-wt,E+Ut/2,Pt-wt,et,Lt,.2,.16),at.quad([E-Ut/2,Pt-wt,Lt],[E+Ut/2,Pt-wt,Lt],[E+Ut/2,Pt,Lt],[E-Ut/2,Pt,Lt],.2,.2,.35,.35),at.surf(tt.rock,[140,134,122]).quad([E-Ut/2,Pt-wt+22,-1.2],[E+Ut/2,Pt-wt+22,-1.2],[E+Ut/2,Pt-wt,1.6],[E-Ut/2,Pt-wt,1.6],.3);for(let E of[-1,1])X.surf(tt.stone,W.white),E>0?X.wall(ut,Pt,ut,Jt,et,s,.6,.95):X.wall(-ut,Jt,-ut,Pt,et,s,.6,.95);let Q=i.to("houses"),Wt=i.to("canal"),Rt=i.to("extent"),Bt=12*Y,_t=H+Bt,Dt=nt(g,_t),Ot=M([[T,Dt]]);X.surf(tt.stone,W.white).sweep([[u,et,.6],[u,s,.95]],{arcs:M([[T,nt(u,H)]]),step:lt,sense:-1}),X.surf(tt.paving,W.white).sweep([[u,s,.95],[g,s,.8]],{arcs:M([[T,nt(u,H)]]),step:lt,sense:-1}),$.surf(tt.stoneCourses,W.white).sweep([[g,s,.7],[g,n,.95]],{arcs:Ot,step:lt,sense:-1}),Q.surf(tt.earth,[196,184,160]).sweep([[g,n],[(g+m)/2,n],[m,n]],{arcs:Ot,step:lt*1.5,sense:-1}),Rt.surf(tt.grass,[225,220,190]).sweep([[m,n],[x,-3.2]],{arcs:Ot,step:lt*2,sense:-1});for(let E of[-1,1]){let dt=E*H,gt=E*_t,R=-Math.sqrt(u*u-H*H),B=-Math.sqrt(g*g-_t*_t),K=-x,w=(Gt,Ct,Nt,qt,Tt,ae,le,De,Cn)=>E>0?Gt.wall(qt,Tt,Ct,Nt,ae,le,De,Cn):Gt.wall(Ct,Nt,qt,Tt,ae,le,De,Cn);Wt.surf(tt.stone,W.white),w(Wt,dt,R,dt,K,et,s,.6,.95),Wt.surf(tt.paving,W.white);let I=[dt,R,s],U=[dt,K,s],C=[gt,K,s],q=[gt,B,s];E>0?Wt.quad(I,q,C,U,.9):Wt.quad(I,U,C,q,.9),Wt.surf(tt.stoneCourses,W.white),w(Wt,gt,B,gt,K,s,n,.7,.95);let it=T+E*Dt,Mt=[g*Math.cos(it),g*Math.sin(it)],Et=[m*Math.cos(it),m*Math.sin(it)],It=[x*Math.cos(it),x*Math.sin(it)],Ht=-Math.sqrt(m*m-_t*_t);Q.surf(tt.earth,[196,184,160]),E>0?Q.tri([Mt[0],Mt[1],n],[Et[0],Et[1],n],[gt,Ht,n]):Q.tri([Mt[0],Mt[1],n],[gt,Ht,n],[Et[0],Et[1],n]),Rt.surf(tt.grass,[225,220,190]),E>0?Rt.quad([gt,Ht,n],[Et[0],Et[1],n],[It[0],It[1],-3.2],[gt,K,n]):Rt.quad([gt,Ht,n],[gt,K,n],[It[0],It[1],-3.2],[Et[0],Et[1],n])}let Ft=(E,dt,gt,R)=>{for(let B=0;B<gt;B++){let K=B/gt*re;if(R(K))continue;let w=Math.cos(K),I=Math.sin(K),U=E-dt*1.2;G.surf(tt.smooth,Ze(W.white,.8)).shaft(U*w,U*I,s,.32,.26,.9,6,{cap:!0,foot:.7})}},z=E=>Math.abs(Math.atan2(Math.sin(E-T),Math.cos(E-T)))<.06;return e.phone||(Ft(r,1,90,E=>Math.abs(E-j)<.06),Ft(a,-1,130,z),Ft(l,1,200,z),Ft(o,-1,270,z),Ft(h,1,380,z),Ft(u,-1,480,z)),{dock:{mouths:kt,yFace:Pt,dockDeep:wt,dw:Ut},canalStrip:Bt}},Xd=(i,t)=>{let{rIsle:e,rW3:n,canalHalf:s,edge:r,rWall:a,core:l,B:o}=i,h=[],u=new pe(new qn(e-70,n+3,180,1),t.sea);u.userData={id:"harbours"},h.push(u);let c=r-n+60,f=new pe(new Un(s*2,c),t.sea);f.position.set(0,-(n+c/2)+2,0),f.userData={id:"canal"},h.push(f);for(let g of h)g.receiveShadow=!0,g.renderOrder=2,g.userData.water=!0;let d=Math.asin(Math.min(1,s/a))*3,p=new pe(new qn(a-22,a+22,360,1,-Math.PI/2+d,Math.PI*2-d*2),t.wallLine);p.userData={id:"outer-wall",line:!0};let v=new pe(new Un(s*2,a-r),t.canalLine);v.position.set(0,-(r+a)/2,0),v.userData={id:"canal",line:!0};for(let g of[p,v])g.renderOrder=5,g.position.z=o,h.push(g);return h};var Yd=(i,t,e)=>{let{B:n,Q:s,H:r,T:a,rA:l,r1a:o,r1b:h,r2a:u,r2b:c,rT:f,core:d,SEA:p,roadAngle:v,arcsExcept:g,bridgeHalf:m,off:x,bridges:_,Zp:b,rampTop:S,rampFoot:A,k:y,Rp:T,Rs:k}=t,M=e.phone?14:8,H=i.to("ring-walls"),J=i.to("ring-walls#teeth"),ft=i.to("wall-towers"),F=(N,L)=>Math.asin(Math.min(1,L/N)),V=(N,L,st,nt)=>{let ut=i.to(nt),j=g([[v(N),F(N,m+.5)]]),ct={arcs:j,step:M,sense:L},vt=n+r-.9,mt=N+L*.3,P=N-L*a;ut.surf(tt.metal,st).sweep([[N,n-.3,.72],[N,n+r*.45,.95],[N,vt,1]],ct),H.surf(tt.stone,W.white).sweep([[N,vt,.6],[mt,vt,.75],[mt,n+r,.95],[P,n+r,.85],[P,n,.7]],ct);let ot=n+r,Z=mt,ht=mt-L*.7;H.sweep([[Z,ot,.9],[Z,ot+.9,1],[ht,ot+.9,.95],[ht,ot,.8]],ct);let at=e.phone?6.4:3.2,wt=(Z+ht)/2;J.surf(tt.stone,W.white);for(let[At,Lt]of j){let kt=Math.round((Lt-At)*N/at);for(let Q=0;Q<kt;Q++){let Wt=At+(Lt-At)*(Q+.5)/kt;J.box(wt*Math.cos(Wt),wt*Math.sin(Wt),ot+.9,e.phone?3:1.6,.7,1.25,Wt+Math.PI/2,{foot:.95,topShade:.95})}}let Pt=v(N),Jt=Math.max(8,Math.round(re*N/(118*y))),Ut=F(N,m+22);for(let At=0;At<Jt;At++){let Lt=Pt+Ut+(re-2*Ut)*(At+.5)/Jt,kt=N-L*(a/2-1.6);fa(ft,kt*Math.cos(Lt),kt*Math.sin(Lt),n-.3,8.4,r+5.6,Lt,{face:[tt.metal,st],crown:[tt.stone,W.white],band:[tt.stone,W.white]})}};V(l,1,W.orichalcum,"wall-orichalcum"),V(o,-1,W.tin,"wall-tin"),V(h,1,W.tin,"wall-tin"),V(u,-1,W.brass,"wall-brass"),V(c,1,W.brass,"wall-brass");let O=i.to("bridges"),Y=i.to("bridge-gates"),lt=i.to("aqueducts"),et=[[W.orichalcum,W.tin],[W.tin,W.brass],[W.brass,W.brass]],X=(N,L,st,nt=!0)=>{let ut=Y.F.push(x,-N,n,L>0?0:Math.PI),j=9,ct=r+10,vt=m*2-j*2,mt=9.2;for(let P of[-1,1])fa(Y,P*(m-j/2),0,-.3,j,ct,0,{face:[tt.metal,st],crown:[tt.stone,W.white],band:[tt.stone,W.red]});Y.surf(tt.stoneBands,W.white).box(0,0,mt,vt,4.4,ct-4-mt,0,{bottom:!0,foot:.7,topShade:.8}),Y.surf(tt.stone,W.white),Fi(Y,-vt/2,-2.2,vt/2,-2.2,ct-4,{pitch:2.6,w:1.3}),Fi(Y,vt/2,2.2,-vt/2,2.2,ct-4,{pitch:2.6,w:1.3}),Y.surf(tt.stone,W.red).box(0,-2.3,mt-.9,vt+1.6,.5,1.3,0,{bottom:!0,foot:.8});for(let P of[-1,1]){let ot=vt/2-.2,Z=nt?P*1.32:0,ht=P*(vt/2-.15);Y.surf(tt.metal,Ze(st,.9)).box(ht-P*Math.cos(Z)*ot/2,1.6+Math.abs(Math.sin(Z))*ot/2,.15,ot,.35,mt-.4,Z,{foot:.6,head:.85})}Y.F.pop(ut)};_.forEach(([N,L],st)=>{let nt=L-N,ut=-(N+L)/2;O.surf(tt.stone,W.white).box(x,ut,n-1.5,m*2,nt,1.5,0,{top:!1,bottom:!0,foot:.7,head:.95}),O.surf(tt.paving,W.white).slab(x,ut,n,m*2,nt,0,.95);let j=Math.max(2,Math.round(nt/17));for(let vt=0;vt<=j;vt++){let mt=-N-nt*vt/j;O.surf(tt.stoneCourses,W.white).box(x,mt,-3.2,m*2-1.2,3.6,n-3+3.2,0,{top:!1,foot:.55,head:.8}),O.surf(tt.stone,W.white).box(x,mt,n-3,m*2-.6,5.6,.8,0,{bottom:!0,top:!1,foot:.6}),O.box(x,mt,n-2.2,m*2-.2,7.8,.7,0,{bottom:!0,top:!1,foot:.65})}for(let vt of[-1,1]){let mt=x+vt*(m-.6);H.surf(tt.stone,W.white).box(mt,ut,n,1.2,nt-9,2.3,0,{foot:.8,topShade:.9}),vt>0?Fi(H,mt+.6,-N-4.5,mt+.6,-L+4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0}):Fi(H,mt-.6,-L+4.5,mt-.6,-N-4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0})}let ct=x-m+2.2;lt.surf(tt.stone,W.white).box(ct,ut,n,1.6,nt-10,1.25,0,{foot:.75,topShade:.9}),lt.surf(tt.smooth,W.white);for(let vt=-N-14;vt>-L+10;vt-=24)lt.box(ct,vt,n+1.25,1.9,2.2,.3,0,{foot:.9});X(N,-1,et[st][0]),X(L,1,et[st][1])});let G=_.slice(0,2).map(([,N])=>({x:x-m-9,y:-N-16,z:n,w:9,d:14}));for(let N of G){lt.surf(tt.stone,W.white);for(let[L,st,nt,ut]of[[0,-N.d/2,N.w+1.2,.7],[0,N.d/2,N.w+1.2,.7],[-N.w/2,0,.7,N.d],[N.w/2,0,.7,N.d]])lt.box(N.x+L,N.y+st,N.z,nt,ut,1,0,{foot:.8,topShade:.9});lt.surf(tt.stone,W.white).box(N.x+N.w/2+4,N.y+N.d/2+6,N.z,1.6,18,1.25,.35,{foot:.75})}let $=(N,L,st=n)=>{O.surf(tt.paving,W.white).slab(x,-(N+L)/2,st+.14,m*2,L-N,0,.95);for(let nt of[-1,1])O.surf(tt.smooth,W.white).box(x+nt*m,-(N+L)/2,st,.5,L-N,.34,0,{foot:.8})};$(_[0][1],_[1][0]),$(_[1][1],_[2][0]),$(_[2][1],Math.sqrt(d*d-x*x)),$(A,_[0][0]);{let N=O.F.push(x,-A,0,0),L=A-S,st=m*2;$d(O,st,L,n,b,{surf:tt.paving,treads:e.phone?20:60});for(let nt of[-1,1]){let ut=nt*(st/2+.6),j=12;for(let ct=0;ct<j;ct++){let vt=L*ct/j,mt=L*(ct+1)/j,P=n+(b-n)*ct/j,ot=n+(b-n)*(ct+1)/j;O.surf(tt.stoneBands,W.white);let Z=ut+nt*.6,ht=ut-nt*.6,at=n-.2;nt>0?(O.quad([Z,vt,at],[Z,mt,at],[Z,mt,ot+1.1],[Z,vt,P+1.1],.7,.7,1,1),O.quad([ht,mt,ot],[ht,vt,P],[ht,vt,P+1.1],[ht,mt,ot+1.1],.8)):(O.quad([Z,mt,at],[Z,vt,at],[Z,vt,P+1.1],[Z,mt,ot+1.1],.7,.7,1,1),O.quad([ht,vt,P],[ht,mt,ot],[ht,mt,ot+1.1],[ht,vt,P+1.1],.8)),O.surf(tt.smooth,W.white).quad([ut-.6,vt,P+1.1],[ut+.6,vt,P+1.1],[ut+.6,mt,ot+1.1],[ut-.6,mt,ot+1.1],.95)}}O.F.pop(N)}return{basins:G}};var Zd=(i,t,e)=>{let{Zp:n,SEA:s,arcsExcept:r}=t,a=44,l=20,o=1.1,h=l-o,u=24.4,c=u+2,f=5.5,d=9.5,p=3.4,v=6.4,g=6,m=n+.45,x=m,_=m+d,b=(V,O)=>Math.asin(Math.min(1,O/V)),S=e.phone?5:3,A=i.to("shrine-wall").surf(tt.metal,W.gold);A.sweep([[a,n,.8],[a,n+4.5,1],[a-.9,n+4.5,.95],[a-.9,n,.75]],{arcs:r([[s,b(a,g)]]),step:S});for(let V of[-1,1]){let O=s+V*b(a,g+.5);A.shaft((a-.45)*Math.cos(O),(a-.45)*Math.sin(O),n,.95,.8,6.4,10,{cap:!0,foot:.8})}let y=i.to("shrine");for(let V=0;V<3;V++)y.surf(tt.smooth,W.white).sweep([[c+(2-V)*.55,n+V*.15,.8],[c+(2-V)*.55,n+(V+1)*.15,.92],[c+(1-V)*.55,n+(V+1)*.15,.95]],{step:S+1});y.surf(tt.paving,W.white).sweep([[c-.55,m,.95],[h,m,.95]],{step:S+1});let T=r([[s,b(l,p)]]),k=[[s-b(l,p),s+b(l,p)]];y.surf(tt.stoneCourses,W.white).sweep([[l,x,.8],[l,_,1]],{arcs:T,step:S}),y.surf(tt.stoneCourses,W.white).sweep([[l,x+v,.85],[l,_,1]],{arcs:k,step:S}),y.surf(tt.smooth,W.white).sweep([[h,_,.8],[h,x+6.3,.7]],{arcs:T,step:S}),y.surf(tt.smooth,W.white).sweep([[h,_,.8],[h,x+v,.7],[l,x+v,.6]],{arcs:k,step:S});let M=i.to("hall");M.surf(tt.smooth,W.shade).sweep([[h,x+6.3,.9],[h,x,.7]],{arcs:T,step:S}),M.surf(tt.gilt,W.gold).sweep([[h-.04,x+6.42,1],[h-.04,x+6.3,1]],{arcs:T,step:S});for(let V of[-1,1]){let O=s+V*b(l,p),Y=Math.cos(O),lt=Math.sin(O);y.surf(tt.gilt,W.gold).quad([h*Y,h*lt,x],[l*Y,l*lt,x],[l*Y,l*lt,x+v],[h*Y,h*lt,x+v],.9)}M.surf(tt.paving,W.white).sweep([[h,m,.9],[7.2,m,.92]],{step:S}),M.surf(tt.smooth,W.shade).sweep([[7.2,m,.9],[6.2,m,.9]],{step:2}),M.surf(tt.gilt,W.gold).sweep([[6.2,m,1],[6,m,1]],{step:2}),M.surf(tt.paving,W.white).sweep([[6,m,.92],[0,m,.95]],{step:2});let H=e.phone?20:28;for(let V=0;V<H;V++){let O=s+(V+.5)/H*re;as(y,u*Math.cos(O),u*Math.sin(O),m,.72,d,{n:e.phone?8:14,tint:W.white})}y.surf(tt.smooth,W.white).sweep([[u+1,_,.75],[u+1,_+1.1,.95],[u-1,_+1.1,.9],[u-1,_,.7],[u+1,_,.6]],{step:S}),y.surf(tt.gilt,W.gold).sweep([[u+1.05,_+.46,1],[u+1.05,_+.62,1]],{step:S}),y.surf(tt.smooth,W.white).sweep([[l,_+.04,.55],[u-1,_+.04,.6]],{step:S}),y.surf(tt.tiles,W.tile[1]).sweep([[u+1.5,_+1.05,.9],[f,_+5.4,1]],{step:S}),M.surf(tt.smooth,W.shade).sweep([[f,_+5.1,.6],[h,_,.4]],{step:S}),y.surf(tt.gilt,W.gold).sweep([[f,_+5.1,.9],[f,_+5.45,1]],{step:2,sense:-1}),M.surf(tt.smooth,W.white).shaft(0,0,m,3,2.7,.75,28,{cap:!0,foot:.8,head:.96}),M.surf(tt.gilt,W.gold).shaft(0,0,m+.75,1.15,.85,.55,18,{cap:!0,foot:.9});let J=12,ft=.44,F=[];for(let V=0;V<J;V++){let O=s-ft-V*(re-2*ft)/(J-1),Y=Math.sqrt(h*h-(7.2/2+.3)**2)-.12;F.push({x:Y*Math.cos(O),y:Y*Math.sin(O),z:m+3.15,w:7.2,h:4,a:O})}return{RG:a,RH:l,RI:h,RC:u,RS:c,RO:f,floor:m,height:d,panels:F,door:{a:s,half:p},gate:{a:s,half:g},globe:{x:0,y:0,z:m+3.6,r:2.2},rings:[{r:a-.45,t:.8,a:s,gap:g-.9},{r:l-o/2,t:.95,a:s,gap:p-.7}],circles:[{x:0,y:0,r:3.5},...Array.from({length:H},(V,O)=>{let Y=s+(O+.5)/H*re;return{x:u*Math.cos(Y),y:u*Math.sin(Y),r:1.15}})]}};var ai=Math.PI/180,Yx=(i,t,e,n,s,r,a)=>{let l=i.F.push(t,e,n,r),o=s,h=o*.5;i.surf(tt.gilt,a);let u=(c,f,d,p,v=8)=>Array.from({length:v},(g,m)=>{let x=m/v*re;return[c,Math.cos(x)*d,f+Math.sin(x)*p]});i.loft([u(-o*.36,h,.02,.02),u(-o*.32,h,o*.1,o*.12),u(-o*.1,h-o*.01,o*.105,o*.125),u(o*.16,h,o*.1,o*.13),u(o*.27,h+o*.05,o*.07,o*.11),u(o*.36,h+o*.2,o*.05,o*.075),u(o*.42,h+o*.33,o*.04,o*.055),u(o*.52,h+o*.3,o*.028,o*.04),u(o*.6,h+o*.25,o*.02,o*.03)],{closed:!0});for(let[c,f,d]of[[-o*.26,-1,0],[-o*.26,1,0],[o*.18,-1,1],[o*.18,1,1]])i.shaft(c+(d&&f>0?o*.06:0),f*o*.07,d&&f>0?o*.12:0,o*.022,o*.04,h-o*.08-(d&&f>0?o*.12:0),5);for(let c of[-1,1])i.quad([o*.14,c*o*.09,h+o*.08],[-o*.1,c*o*.1,h+o*.06],[-o*.42,c*o*.34,h+o*.5],[-o*.05,c*o*.3,h+o*.42]),i.quad([-o*.05,c*o*.3,h+o*.42],[-o*.42,c*o*.34,h+o*.5],[-o*.62,c*o*.5,h+o*.74],[-o*.2,c*o*.46,h+o*.6]);i.F.pop(l)},jd=(i,t,e,n,s,r)=>{let a=i.F.push(t,e,n,s),l=3.6;i.surf(tt.gilt,r);let o=(h,u,c=6)=>{let f=(h-.5)*l,d=1+Math.sin(h*Math.PI)*.9;return Array.from({length:c},(p,v)=>{let g=v/c*re;return[f,Math.cos(g)*u*.8,d+Math.sin(g)*u]})};i.loft([o(0,.03),o(.12,.2),o(.4,.42),o(.62,.4),o(.85,.2),o(1,.04)],{closed:!0}),i.tri([-l*.5,-.6,1],[-l*.5,.6,1],[-l*.38,0,1.3]),i.tri([l*.02,0,2.25],[l*.2,0,2.2],[l*.02,0,2.75]),pa(i,-.15,0,2,2.5,0,{n:6,tint:r}),i.F.pop(a)},Jd=(i,t,e)=>{let{B:n,Zp:s,Rp:r,Rs:a,rA:l,T:o,S:h,P:u,k:c,off:f,bridgeHalf:d,SEA:p,roadAngle:v,zSlopeTop:g,zSlopeFoot:m,islandZ:x}=t,_=Hn(1160),b=[],S=[],A=(R,B)=>[R*Math.cos(B*ai),R*Math.sin(B*ai)],y=Zd(i,t,e),T=u.templeLength*h,k=u.templeWidth*h,M=-45*c,H=-135*c,J=i.to("temple"),ft=i.to("temple#roof"),F=i.to("temple-interior"),V=i.to("temple-ceiling#roof"),O=i.to("pinnacles#roof"),Y=.9,lt=4,et=lt*Y,X=k*.325,G=k*.076,$=k*.0185,N=k*.14,L=J.F,st=L.push(M,H,s,0);{let R=[W.black,W.white,W.red,W.white];for(let Xt=0;Xt<lt;Xt++)J.surf(tt.smooth,R[Xt]).box(0,0,Xt*Y,T+(lt-1-Xt)*3.4,k+(lt-1-Xt)*3.4,Y,0,{foot:.78,topShade:.86});let B=11,K=22,w=$*1.7,I={n:e.phone?10:16,surf:tt.metal,tint:W.silver};for(let Xt of[-1,1])Rs(J,-T/2+w,Xt*(k/2-w),T/2-w,Xt*(k/2-w),et,K,$,X,I);for(let Xt of[-1,1])Rs(J,Xt*(T/2-w),-k/2+w+(k-2*w)/(B-1),Xt*(T/2-w),k/2-w-(k-2*w)/(B-1),et,B-2,$,X,I);let U=et+X,C=w*2,q=(T-.6)/2-C,it=(k-.6)/2-C,Mt=(Xt,fe,D,rt,St,xt,bt=!0)=>{let Vt=[[-fe,-D],[fe,-D],[fe,D],[-fe,D]],jt=[[-rt,-St],[rt,-St],[rt,St],[-rt,St]];for(let zt=0;zt<4;zt++){let Yt=(zt+1)%4,te=[...Vt[zt],Xt],he=[...Vt[Yt],Xt],ve=[...jt[Yt],Xt],Kt=[...jt[zt],Xt];bt?J.quad(te,he,ve,Kt,xt):J.quad(Kt,ve,he,te,xt)}};J.surf(tt.metal,W.silver).box(0,0,U,T-.6,k-.6,G*.4,0,{foot:.75,top:!1}),Mt(U,(T-.6)/2,(k-.6)/2,q,it,.6,!1),J.surf(tt.metal,Ze(W.silver,.9)).box(0,0,U+G*.4,T-.2,k-.2,G*.38,0,{top:!1,foot:.9}),J.surf(tt.gilt,W.gold).box(0,0,U+G*.4,T-.1,k-.1,G*.07,0,{top:!1}),J.surf(tt.metal,W.silver).box(0,0,U+G*.78,T+1.6,k+1.6,G*.22,0,{foot:.7,top:!1}),Mt(U+G,(T+1.6)/2,(k+1.6)/2,q,it,.9),J.surf(tt.metal,Ze(W.silver,.8)),J.wall(q,-it,-q,-it,U,U+G,.6,.75),J.wall(-q,it,q,it,U,U+G,.6,.75),J.wall(-q,-it,-q,it,U,U+G,.6,.75),J.wall(q,it,q,-it,U,U+G,.6,.75);let Et=T-30*c,It=k-30*c,Ht=2.2,Gt=9,Ct=X*.66;J.surf(tt.metal,W.silver),J.wall(-Et/2,-It/2,Et/2,-It/2,et,U,.72,.9),J.wall(Et/2,It/2,-Et/2,It/2,et,U,.72,.9),J.wall(-Et/2,It/2,-Et/2,-It/2,et,U,.72,.9),J.wall(Et/2,-It/2,Et/2,-Gt/2,et,U,.72,.9),J.wall(Et/2,Gt/2,Et/2,It/2,et,U,.72,.9),J.wall(Et/2,-Gt/2,Et/2,Gt/2,et+Ct,U,.8,.9),J.surf(tt.gilt,W.gold),J.box(Et/2+.2,-Gt/2-.6,et,.6,1.2,Ct+1.2,0,{foot:.8}),J.box(Et/2+.2,Gt/2+.6,et,.6,1.2,Ct+1.2,0,{foot:.8}),J.box(Et/2+.2,0,et+Ct,.6,Gt+2.4,1.2,0,{bottom:!0});for(let Xt of[-1,1])J.surf(tt.metal,W.silver).box(Et/2+Gt/4+.3,Xt*(Gt/2+.25),et,Gt/2,.35,Ct,0,{foot:.7});let Nt=Et-Ht*2,qt=It-Ht*2,Tt=W.orichalcum;Mt(U,Et/2,It/2,Nt/2,qt/2,.85),F.surf(tt.metal,Tt),F.wall(Nt/2,-qt/2,-Nt/2,-qt/2,et,U,.6,.85),F.wall(-Nt/2,qt/2,Nt/2,qt/2,et,U,.6,.85),F.wall(-Nt/2,-qt/2,-Nt/2,qt/2,et,U,.6,.85),F.wall(Nt/2,-Gt/2,Nt/2,-qt/2,et,U,.6,.85),F.wall(Nt/2,qt/2,Nt/2,Gt/2,et,U,.6,.85),F.wall(Nt/2,Gt/2,Nt/2,-Gt/2,et+Ct,U,.7,.85);for(let Xt of[-1,1])F.wall(Nt/2,Xt*Gt/2,Et/2,Xt*Gt/2,et,et+Ct,.7);F.surf(tt.metal,Ze(Tt,.92)).slab(0,0,et+.04,Nt,qt,0,.8),J.surf(tt.smooth,W.white).slab(0,0,et+.02,T-.2,k-.2,0,.82);let ae=14,le=qt*.27;for(let Xt of[-1,1])Rs(F,-Nt/2+9,Xt*le,Nt/2-9,Xt*le,et,ae,1.45,X,{n:e.phone?8:12,surf:tt.metal,tint:Tt,shade:.85});let De=U-.05,Cn=26,Pn=10,Mn=Nt/Cn,ke=qt/Pn,hs=[W.gold,W.silver,Tt];V.surf(tt.ivory,W.ivory).quad([-Nt/2,qt/2,De],[Nt/2,qt/2,De],[Nt/2,-qt/2,De],[-Nt/2,-qt/2,De],.8);for(let Xt=0;Xt<Cn;Xt++)for(let fe=0;fe<Pn;fe++){let D=-Nt/2+(Xt+.5)*Mn,rt=-qt/2+(fe+.5)*ke,St=hs[(Xt+fe*2)%3],xt=.3;V.surf(tt.gilt,St).quad([D-Mn*xt,rt+ke*xt,De-.12],[D+Mn*xt,rt+ke*xt,De-.12],[D+Mn*xt,rt-ke*xt,De-.12],[D-Mn*xt,rt-ke*xt,De-.12],.9)}ft.surf(tt.metal,Ze(W.silver,.8)).quad([-T/2,k/2,U+G*.3],[T/2,k/2,U+G*.3],[T/2,-k/2,U+G*.3],[-T/2,-k/2,U+G*.3],.5);let Ee=U+G,He=T/2+1.2,jn=k/2+1.6,In=Ee+N;ft.surf(tt.metal,Ze(W.silver,.95)),ft.quad([-He,-jn,Ee],[He,-jn,Ee],[He,0,In],[-He,0,In],.92,.92,1,1),ft.quad([He,jn,Ee],[-He,jn,Ee],[-He,0,In],[He,0,In],.92,.92,1,1);let ki=e.phone?0:46;for(let Xt=0;ki&&Xt<=ki;Xt++){let fe=-He+2*He*Xt/ki;for(let D of[-1,1])ft.quad([fe-.25,D*jn,Ee+.25],[fe+.25,D*jn,Ee+.25],[fe+.25,0,In+.25],[fe-.25,0,In+.25],1)}for(let Xt of[-1,1]){let fe=Xt*(T/2-.4);ft.surf(tt.metal,W.silver),Xt>0?ft.tri([fe,-k/2,Ee],[fe,k/2,Ee],[fe,0,In-.3],.8,.8,.95):ft.tri([fe,k/2,Ee],[fe,-k/2,Ee],[fe,0,In-.3],.8,.8,.95),ft.surf(tt.gilt,W.gold);let D=N*.3,rt=20;for(let St=0;St<rt;St++){let xt=St/rt*re,bt=(St+1)/rt*re,Vt=[fe+Xt*.25,0,Ee+N*.4],jt=[fe+Xt*.25,Math.cos(xt)*D,Ee+N*.4+Math.sin(xt)*D],zt=[fe+Xt*.25,Math.cos(bt)*D,Ee+N*.4+Math.sin(bt)*D];Xt>0?ft.tri(Vt,jt,zt):ft.tri(Vt,zt,jt)}}let _r=(Xt,fe,D,rt)=>O.surf(tt.gilt,W.gold).turned(Xt,fe,D,[[rt*.1,0],[rt*.13,rt*.08],[rt*.05,rt*.2],[rt*.16,rt*.45],[rt*.19,rt*.58],[rt*.07,rt*.78],[rt*.03,rt*.9],[0,rt]],8);for(let Xt of[-1,1]){_r(Xt*He,0,In,9.5);for(let fe of[-1,1])_r(Xt*He,fe*jn,Ee,6.5)}let br=e.phone?12:44;for(let Xt=1;Xt<br;Xt++)O.surf(tt.gilt,W.gold).shaft(-He+2*He*Xt/br,0,In,.5,.05,2.6,4);for(let Xt=0;Xt<=(e.phone?0:44);Xt++)for(let fe of[-1,1])O.shaft(-He+2*He*Xt/44,fe*jn,Ee,.45,.05,1.5,4);let Ln=i.to("poseidon"),Oi=-Nt/2+34;Ln.surf(tt.gilt,W.gold).box(Oi-6,0,et,30,22,1.2,0,{foot:.7,topShade:.8}),Ln.box(Oi-9,0,et+3.4,9,7,2.6,0,{bottom:!0,foot:.8});for(let Xt of[-1,1]){let fe=Ln.F.push(Oi-9,Xt*4.2,et+4,0);for(let D=0;D<14;D++){let rt=D/14*re,St=(D+1)/14*re;Ln.tri([0,0,0],[Math.cos(rt)*2.8,0,Math.sin(rt)*2.8],[Math.cos(St)*2.8,0,Math.sin(St)*2.8])}Ln.F.pop(fe)}pa(Ln,Oi-9,0,et+6,X-6.3,-Math.PI/2,{n:12,arm:!0});for(let Xt=0;Xt<6;Xt++)Yx(Ln,Oi+8+Xt%2*2.5,(Xt-2.5)*3.9,et+1.2,10.5,0,W.gold);let us=i.to("nereids"),Bi=0;for(let Xt=0;Xt<22&&Bi<100;Xt++)for(let[fe,D]of[[le-5.4,1],[le+5.4,-1],[-le+5.4,-1],[-le-5.4,1]]){if(Bi>=88)break;let rt=-Nt/2+12+Xt*(Nt-30)/21;us.surf(tt.metal,Tt).box(rt,fe,et,2.4,1.6,1.3,0,{foot:.6}),jd(us,rt,fe,et+.9,D>0?0:Math.PI,W.gold),Bi++}for(let Xt=0;Bi<100;Xt++,Bi++){let fe=(-.42+.84*Xt/11)*Math.PI,D=Oi+30+Math.cos(fe)*9,rt=Math.sin(fe)*15;us.surf(tt.metal,Tt).box(D,rt,et,2.4,1.6,1.3,fe,{foot:.6}),jd(us,D,rt,et+.9,fe,W.gold)}let Xl=i.to("votive-inside");for(let Xt=0;Xt<24;Xt++){let fe=-Nt/2+14+(Nt-60)*(Xt>>1)/11.5+4,D=Xt%2?1:-1;Cl(Xl,fe,D*(qt/2-2.6),et,3.2+_()*1.4,D>0?-Math.PI/2:Math.PI/2,{plinth:[tt.metal,Tt],tint:Xt%3?W.gold:W.silver})}let wr=i.to("pillar");wr.surf(tt.metal,Tt).box(Nt/2-52,0,et,4.2,4.2,.9,0,{foot:.7}),wr.box(Nt/2-52,0,et+.9,2.2,1,7.5,0,{foot:.85}),wr.box(Nt/2-52,0,et+8.4,2.6,1.3,.5,0,{bottom:!0})}L.pop(st);let nt=s+et+X+G+N,ut=i.to("statues"),j=i.to("votive-outside");{let R=T/2+15,B=k/2+15,K=2*(2*R+2*B),w=60;for(let I=0;I<w;I++){let U=(I+.5)/w*K,C,q,it;U<2*R?(C=-R+U,q=-B,it=-Math.PI/2):(U-=2*R)<2*B?(C=R,q=-B+U,it=0):(U-=2*B)<2*R?(C=R-U,q=B,it=Math.PI/2):(U-=2*R,C=-R,q=B-U,it=Math.PI),!(C===R&&Math.abs(q)<9)&&Cl(ut,M+C,H+q,s,4.4,it+Math.PI/2,{plinth:[tt.smooth,I%2?W.white:W.red]})}for(let I=0;I<38;I++){let U=I%2?1:-1,C=f+U*(d+4+I%3*3.2),q=-t.rampTop+12+(I>>1)*5.6,it=I%4,Mt=s;Math.hypot(C,q)>r-6||(it===0?(as(j,C,q,Mt,.42,5.2,{n:8,tint:W.white}),pa(j,C,q,Mt+5.2,2.2,-Math.PI/2,{n:6,tint:W.gold})):it===1?(j.surf(tt.smooth,W.white).box(C,q,Mt,1.5,.9,.4,0),j.surf(tt.smooth,I%3?W.white:W.black).box(C,q,Mt+.4,1,.32,2.7,0,{foot:.85})):it===2?j.surf(tt.gilt,I%3?W.brass:W.silver).turned(C,q,Mt,[[.5,0],[.16,.25],[.12,1.1],[.3,1.25],[.85,1.75],[.9,1.85],[0,1.6]],8):Cl(j,C,q,Mt,2.6,-Math.PI/2*U,{tint:I%3?W.gold:W.brass}))}}let ct=i.to("altar"),vt=M+T/2+34*c,mt=H;for(let R=0;R<3;R++)ct.surf(tt.smooth,[W.white,W.red,W.white][R]).box(vt,mt,s+R*.5,15-R*2.2,50-R*2.2,.5,0,{foot:.8,topShade:.88});ct.surf(tt.stoneCourses,W.white).box(vt,mt,s+1.5,6.5,42,3.1,0,{foot:.8}),ct.surf(tt.smooth,W.white).box(vt,mt,s+4.6,7.6,43.2,.55,0,{bottom:!0,foot:.8,topShade:.9});for(let R of[-1,1])ct.surf(tt.smooth,W.white).box(vt,mt+R*21.2,s+5.15,7.6,.9,1.3,0,{foot:.9});ct.surf(tt.gilt,W.gold).box(vt,mt,s+1.6,6.7,42.2,.3,0,{top:!1});let P=i.to("palace"),ot=[tt.stoneBands,W.white],Z=[tt.stoneChequer,W.white],ht=[tt.stone,W.white],at=[tt.stone,W.red],wt=W.gold;on(P,0,215*c,s,150,22,14,0,{wall:ot,cornice:W.white,base:[tt.stone,W.black],windows:2,doors:[[0,-40],[0,40]],tile:W.tile[1]}),on(P,-86,152*c,s,22,104,12,0,{wall:ht,cornice:W.red,base:[tt.stone,W.red],windows:2,doors:[[1,-30],[1,30]],tile:W.tile[0]}),on(P,86,152*c,s,22,104,12,0,{wall:ht,cornice:W.red,base:[tt.stone,W.red],windows:2,doors:[[3,-30],[3,30]],tile:W.tile[0]}),on(P,0,196*c,s,34,18,25,0,{wall:Z,roof:"hip",cornice:wt,windows:2,doors:[],tile:W.tile[2]}),on(P,0,148*c,s+1.2,44,64,17,0,{wall:ot,cornice:wt,base:[tt.stone,W.black],windows:0,doors:[],tile:W.tile[1],rise:7}),P.surf(tt.smooth,W.white).box(0,148*c,s,48,68,1.2,0,{foot:.8}),P.surf(tt.smooth,W.white).box(0,148*c-34-6,s,44,12,1.2,0,{foot:.8,topShade:.86}),P.box(0,148*c-34-13.5,s,40,3,.8,0,{foot:.8}),P.box(0,148*c-34-16,s,40,2.5,.4,0,{foot:.8}),Rs(P,-19.5,148*c-34-10.5,19.5,148*c-34-10.5,s+1.2,6,1.15,14.6,{n:14,tint:W.red}),P.surf(tt.smooth,W.white).box(0,148*c-34-6,s+15.8,44,12,1.4,0,{bottom:!0,foot:.75});{let R=P.F.push(0,148*c-34-6,0,0);Al(P,44,12,s+17.2,7,{tile:W.tile[1],wall:[tt.smooth,W.white],ridgeAlongY:!0}),P.F.pop(R)}da(P,44,64,0,0,0,{pw:5,ph:9,leaf:W.brass});{let R=P.F.push(0,148*c,s+1.2,0);da(P,44,64,0,0,0,{pw:5,ph:9.5,leaf:W.brass,frame:wt}),P.F.pop(R)}for(let R of[-1,1])yi(P,R*71,150*c,s,96,7,6.2,R>0?Math.PI/2:-Math.PI/2,{wall:ht,colTint:W.red,r:.42,simple:!1}),P.surf(tt.gilt,wt).shaft(R*86,152*c,s+12+4.6,.5,.04,3,6);on(P,-150,62*c,s,20,66,10,-.5,{wall:at,cornice:W.white,base:[tt.stone,W.black],windows:2,doors:[[1,0]],tile:W.tile[3]}),on(P,160,66*c,s,20,60,10,.45,{wall:[tt.stoneCourses,W.white],cornice:W.white,windows:2,doors:[[3,0]],tile:W.tile[3]}),on(P,-205,150*c,s,18,50,8,-.95,{wall:ht,windows:1,doors:[[1,0]],tile:W.tile[0]}),on(P,205,150*c,s,18,50,8,.95,{wall:ht,windows:1,doors:[[3,0]],tile:W.tile[0]});for(let R of[-1,1])for(let B=0;B<7;B++)b.push({x:R*40,y:108*c+B*12,z:s,s:7+_()*2,kind:"cypress",id:"palace"});let Pt=i.to("guard-dwellings");for(let R=0;R<16;R++){let B=196+R*6.6,[K,w]=A(a+50*c,B);R%5!==4&&on(Pt,K,w,n,15,9,4.4+R%3*.6,B*ai+Math.PI/2,{wall:[tt.plaster,W.plaster[R%6]],windows:1,doors:[[0,-3]],tile:W.tile[R%4],base:[tt.stone,W.white]})}let Jt=i.to("springs"),Ut=i.to("reservoirs"),At=i.to("baths"),Lt=(a+26+l-o)/2+2,kt=(R,B,K,w)=>{R.surf(tt.smooth,W.white).shaft(B,K,n,8.6,8.6,.5,20,{cap:!0,foot:.8,head:.85});for(let I=0;I<10;I++){let U=I/10*re;as(R,B+Math.cos(U)*7.4,K+Math.sin(U)*7.4,n+.5,.42,5.6,{n:8,tint:w})}R.surf(tt.smooth,W.white).shaft(B,K,n+6.1,8.2,8.2,.7,20,{foot:.75}),R.surf(tt.tiles,W.tile[1]).shaft(B,K,n+6.8,8.9,.3,4.2,20,{foot:.9,head:1}),R.surf(tt.gilt,W.gold).shaft(B,K,n+10.9,.35,.03,1.6,6),R.surf(tt.smooth,W.white).shaft(B,K,n+.5,4.4,4.4,.8,16,{foot:.8}),R.shaft(B,K,n+.5,3.8,3.8,.8,16,{foot:.6}),S.push({x:B,y:K,z:n+1.1,r:3.8,id:"springs"})},[Q,Wt]=A(Lt,36),[Rt,Bt]=A(Lt,58);kt(Jt,Q,Wt,W.red),kt(Jt,Rt,Bt,W.white);let _t=(R,B,K,w,I)=>{let[U,C]=A(Lt,B),q=B*ai+Math.PI/2,it=R.F.push(U,C,n,q);R.surf(tt.smooth,W.white);for(let[Mt,Et,It,Ht]of[[0,-w/2,K+1.6,.8],[0,w/2,K+1.6,.8],[-K/2,0,.8,w],[K/2,0,.8,w]])R.box(Mt,Et,0,It,Ht,.8,0,{foot:.8,topShade:.9});R.surf(tt.paving,W.white).slab(0,0,.05,K+5,w+5,0,.85),R.F.pop(it),S.push({x:U,y:C,z:n+.6,w:K,d:w,rot:q,id:I})};_t(Ut,47,26,15,"reservoirs"),_t(Ut,26,22,14,"reservoirs");for(let R of[20,64]){let[B,K]=A(Lt+3,R);on(Ut,B,K,n,30,15,6.5,R*ai+Math.PI/2,{wall:[tt.stoneCourses,W.white],windows:0,doors:[[0,0]],tile:W.tile[2],cornice:W.white})}let Dt=(R,B,K,w,I,U)=>{let[C,q]=A(Lt,R);Rl(At,C,q,n,B,K,w,R*ai+Math.PI/2,{depth:6,wall:I,tile:U,floor:[tt.paving,W.white]}),S.push({x:C,y:q,z:n+.35,w:B-22,d:K-20,rot:R*ai+Math.PI/2,id:"baths"})};Dt(73,40,34,5.2,[tt.stoneBands,W.white],W.tile[1]),Dt(84,54,38,4.8,[tt.stone,W.white],W.tile[0]),Dt(96,36,32,4.6,[tt.stone,W.red],W.tile[3]);{let[R,B]=A(Lt,9);yi(At,R,B,n,46,9,4.6,9*ai-Math.PI/2,{wall:[tt.stone,W.black],cols:10});let[K,w]=A(Lt-13,9);_t(At,9,.01,.01,"baths"),S.pop(),S.push({x:K,y:w,z:n+.3,w:40,d:9,rot:9*ai+Math.PI/2,id:"baths"}),At.surf(tt.smooth,W.white).box(K,w,n,42,11,.5,9*ai+Math.PI/2,{foot:.8,topShade:.85})}let Ot=i.to("aqueducts"),Ft=a+30*c,z=v(Ft)+.06,E=205*ai;Ot.surf(tt.smooth,W.white).sweep([[Ft+1.1,n,.8],[Ft+1.1,n+.45],[Ft+.7,n+.45],[Ft+.7,n+.1,.6],[Ft-.7,n+.1,.6],[Ft-.7,n+.45],[Ft-1.1,n+.45],[Ft-1.1,n,.8]],{arcs:[[z,E]],step:6}),S.push({arc:[z,E],r0:Ft-.7,r1:Ft+.7,z:n+.34,id:"aqueducts"});for(let R=0;R<46;R++){let B=12+_()*92,[K,w]=A(a+30+_()*(l-o-a-36),B);b.push({x:K,y:w,z:n,s:7+_()*5,kind:R%3?"plane":"cypress",id:"springs",soft:!0})}let dt=e.phone?260:520;for(let R=0;R<dt;R++){let B=104+_()*86,K=a+32+_()*(l-o-a-38),[w,I]=A(K,B);b.push({x:w,y:I,z:n,s:13+_()*13,kind:["cypress","plane","pine","plane"][R%4],id:"grove"})}let gt=e.phone?300:620;for(let R=0;R<gt;R++){let B=_()*re,K=r+7+Math.floor(_()*6)/6*(a-r-14)+_()*2;Math.abs(Math.atan2(Math.sin(B-v(K)),Math.cos(B-v(K))))<(d+6)/K||b.push({x:K*Math.cos(B),y:K*Math.sin(B),z:x(K),s:3.2+_()*2.6,kind:R%3?"olive":"fruit",id:"island-gardens"})}return{trees:b,pools:S,hall:y,temple:{x:M,y:H,z:s,L:T,W:k,top:nt,floor:s+et,room:{l:T-30*c,w:k-30*c,door:9}},altar:{x:vt,y:mt},springs:[[Q,Wt],[Rt,Bt]]}};var Kd=(i,t,e)=>{let{B:n,Q:s,T:r,rW1:a,rL1:l,rW2:o,r1a:h,r1b:u,r2a:c,r2b:f,rcMid:d,rcHalf:p,off:v,bridgeHalf:g,SEA:m,roadAngle:x,k:_,rL2:b,rT:S,rW3:A,strip:y}=t,T=Hn(1170),k=[],M=[],H=e.phone?14:8,J=i.to("ring-temples"),ft=i.to("gymnasia"),F=i.to("horse-grounds"),V=i.to("gardens"),O=i.to("patterned-buildings"),Y=i.to("ring-layout"),lt=(At,Lt,kt)=>{let Q=At*Math.cos(Lt);return At*Math.sin(Lt)<0&&Math.abs(Q-v)<g+kt},et=At=>At[T()*At.length|0],X={temple:(At,Lt,kt,Q,Wt)=>{let Rt=J,Bt=Rt.F.push(At,Lt,n,kt),_t=Math.min(Q-8,78),Dt=Math.min(Wt-8,84);Rt.surf(tt.stone,W.white);for(let[z,E,dt,gt]of[[0,Dt/2,_t,.8],[-_t/2,0,.8,Dt],[_t/2,0,.8,Dt],[-_t/4-2,-Dt/2,_t/2-4,.8],[_t/4+2,-Dt/2,_t/2-4,.8]])Rt.box(z,E,0,dt,gt,2.1,0,{foot:.78,topShade:.9});for(let z of[-1,1])Rt.surf(tt.stone,W.red).box(z*4.6,-Dt/2,0,1.4,1.4,3.4,0,{foot:.8});let Ot=11+T()*7,Ft=T()*3|0;Wd(Rt,0,Dt*.12,0,Ot,Ot*(1.9+T()*.5),0,{wall:[[tt.stone,tt.stoneBands,tt.stoneCourses][Ft],W.white],colTint:Ft===2?W.red:W.white,tile:et(W.tile),cols:Ot>14?6:4,finial:T()<.5?W.gold:null}),Rt.surf(tt.smooth,W.white).box(0,-Dt*.3,0,5,2.4,1.3,0,{foot:.8}),Rt.surf(tt.paving,W.white).slab(0,-Dt*.2,.05,7,Dt*.5,0,.9),Rt.F.pop(Bt);for(let z of[-1,1])for(let E=0;E<5;E++){let dt=z*(_t/2-5),gt=-Dt/2+8+E*((Dt-16)/4),R=Math.cos(kt),B=Math.sin(kt);k.push({x:At+R*dt-B*gt,y:Lt+B*dt+R*gt,z:n,s:9+T()*4,kind:"cypress",id:"ring-temples"})}},gym:(At,Lt,kt,Q,Wt)=>{let Rt=Math.min(Q-10,74),Bt=Math.min(Wt-12,62);Rl(ft,At,Lt,n,Rt,Bt,4.8,kt,{depth:6,wall:[tt.stone,et([W.white,W.white,W.red])],tile:et(W.tile)});let _t=ft.F.push(At,Lt,n,kt);for(let Dt=0;Dt<2;Dt++)ft.surf(tt.smooth,W.white).box((Dt?1:-1)*6,0,.06,1,1,1.5,0,{foot:.8});ft.F.pop(_t)},horses:(At,Lt,kt,Q,Wt)=>{let Rt=F,Bt=Rt.F.push(At,Lt,n,kt),_t=Math.min(Q-10,88),Dt=Math.min(Wt-22,58);Rt.surf(tt.sand,W.sand).slab(0,-4,.07,_t,Dt,0,.95),Rt.surf(tt.wood,W.wood);let Ot=(dt,gt,R,B)=>{let K=Math.hypot(R-dt,B-gt),w=Math.atan2(B-gt,R-dt);for(let U of[.7,1.25])Rt.box((dt+R)/2,(gt+B)/2,U,K,.12,.16,w,{bottom:!0});let I=Math.round(K/7);for(let U=0;U<=I;U++)Rt.box(dt+(R-dt)*U/I,gt+(B-gt)*U/I,0,.2,.2,1.5,w,{foot:.7})};Ot(-_t/2,-4-Dt/2,_t/2,-4-Dt/2),Ot(_t/2,-4-Dt/2,_t/2,-4+Dt/2),Ot(-_t/2,-4+Dt/2,-_t/2,-4-Dt/2),Rt.F.pop(Bt);let Ft=Math.cos(kt),z=Math.sin(kt),E=-4+Dt/2+6;yi(Rt,At-z*E,Lt+Ft*E,n,_t,8,4.2,kt,{wall:[tt.stone,W.white],tile:et(W.tile),cols:Math.round(_t/5.5),r:.3,simple:"pier"})},garden:(At,Lt,kt,Q,Wt)=>{let Rt=V,Bt=Rt.F.push(At,Lt,n,kt),_t=Q-12,Dt=Wt-12;Rt.surf(tt.paving,W.white).slab(0,0,.06,3,Dt,0,.9),Rt.slab(0,0,.065,_t,3,0,.9),Rt.surf(tt.smooth,W.white).shaft(0,0,0,3.4,3.4,.7,12,{cap:!0,foot:.8,head:.55}),Rt.surf(tt.stone,W.white);for(let[dt,gt,R,B]of[[0,Dt/2,_t,.5],[0,-Dt/2,_t,.5],[-_t/2,0,.5,Dt],[_t/2,0,.5,Dt]])Rt.box(dt,gt,0,R,B,.9,0,{foot:.8});Rt.F.pop(Bt);let Ot=et(["olive","fruit","fruit","plane"]),Ft=Ot==="plane"?15:11.5,z=Math.cos(kt),E=Math.sin(kt);for(let dt=-_t/2+5;dt<_t/2-3;dt+=Ft)for(let gt=-Dt/2+5;gt<Dt/2-3;gt+=Ft)Math.abs(dt)<4||Math.abs(gt)<4||e.phone&&(dt+gt|0)%2||k.push({x:At+z*dt-E*gt+(T()-.5),y:Lt+E*dt+z*gt+(T()-.5),z:n,s:(Ot==="plane"?9:4)+T()*2.5,kind:Ot,id:"gardens"})},houses:(At,Lt,kt,Q,Wt)=>{let Rt=O,Bt=Rt.F.push(At,Lt,n,kt),_t=2+(T()*3|0);for(let Dt=0;Dt<_t;Dt++){let Ot=14+T()*12,Ft=9+T()*5,z=5+T()*5,E=-Q/2+12+(Q-24)*(Dt+.5)/_t+(T()-.5)*4,dt=(T()-.5)*(Wt-40);on(Rt,E,dt,0,Math.min(Ot,(Q-16)/_t),Ft,z,T()<.3?Math.PI/2:0,{wall:[et([tt.stoneBands,tt.stoneChequer,tt.stoneCourses,tt.stone,tt.stone]),et([W.white,W.white,W.red,W.black])],cornice:W.white,tile:et(W.tile),windows:1,doors:[[0,0]]})}Rt.F.pop(Bt);for(let Dt=0;Dt<4;Dt++){let Ot=(T()-.5)*(Q-14),Ft=Wt/2-8-T()*8,z=Math.cos(kt),E=Math.sin(kt);k.push({x:At+z*Ot-E*Ft,y:Lt+E*Ot+z*Ft,z:n,s:6+T()*5,kind:et(["plane","cypress","olive"]),id:"gardens"})}}},G=(At,Lt,kt,Q,Wt=104)=>{let Rt=(At+Lt)/2,Bt=Lt-At,_t=Math.floor(re*Rt/Wt),Dt=re*Rt/_t-2;for(let Ot=0;Ot<_t;Ot++){let Ft=m+(Ot+.5)/_t*re;if(lt(Rt,Ft,Dt/2+6))continue;let z=Q[(Ot*7+(T()*2|0))%Q.length];X[z](Rt*Math.cos(Ft),Rt*Math.sin(Ft),kt>0?Ft+Math.PI/2:Ft-Math.PI/2,Math.min(Dt,Wt),Bt)}},$=(At,Lt)=>Y.surf(tt.paving,[226,220,205]).sweep([[At-Lt/2,n+.05],[At+Lt/2,n+.05]],{step:H,sense:-1}),N=h+r+5,L=u-r-5,st=(N+L)/2;$(st,9);let nt=["temple","garden","gym","garden","houses","horses","temple","garden","houses"];G(N,st-6,1,nt),G(st+6,L,-1,nt);{let At=i.to("guard-house"),Lt=x(st)+.2,kt=(st+10)*Math.cos(Lt),Q=(st+10)*Math.sin(Lt),Wt=At.F.push(kt,Q,n,Lt-Math.PI/2),Rt=96,Bt=78;for(let[_t,Dt,Ot,Ft,z]of[[0,Bt/2-6,Rt,12,0],[0,-Bt/2+6,Rt,12,0],[-Rt/2+6,0,12,Bt-24,0],[Rt/2-6,0,12,Bt-24,0]])on(At,_t,Dt,0,Ot,Ft,9,z,{wall:[tt.stoneBands,W.white],base:[tt.stone,W.black],cornice:W.red,windows:2,doors:[[Dt>0?0:2,0]],tile:W.tile[2]});for(let _t of[-1,1])for(let Dt of[-1,1])fa(At,_t*(Rt/2-2),Dt*(Bt/2-2),0,9,14,0,{face:[tt.stone,W.red],crown:[tt.stone,W.white]});At.surf(tt.sand,W.sand).slab(0,0,.06,Rt-24,Bt-24,0,.95),At.F.pop(Wt)}let ut=c+r+5,j=f-r-5,ct=d-p,vt=d+p,mt=i.to("racecourse"),P=i.to("racecourse-form"),ot=i.to("barracks");mt.surf(tt.sand,W.sand).sweep([[ct,n+.1],[d,n+.1,.96],[vt,n+.1]],{step:H,sense:-1});for(let[At,Lt]of[[ct,-1],[vt,1]])P.surf(tt.smooth,W.white).sweep([[At-.5,n,.8],[At-.5,n+1],[At+.5,n+1],[At+.5,n,.8]],{step:H,sense:1*(Lt>0,1)});for(let At=0;At<48;At++){let Lt=At/48*re;lt(d,Lt,30)||(as(P,d*Math.cos(Lt),d*Math.sin(Lt),n+.1,.7,6.5,{n:8,tint:At%6?W.white:W.red}),At%6===0&&P.surf(tt.gilt,W.gold).shaft(d*Math.cos(Lt),d*Math.sin(Lt),n+6.6,.5,.05,2,6))}for(let At of[-.13,-.085,.085,.13]){let Lt=x(vt)+At,kt=P.F.push((vt+9)*Math.cos(Lt),(vt+9)*Math.sin(Lt),n,Lt+Math.PI/2);for(let Q=0;Q<6;Q++)P.surf(tt.smooth,W.white).box(0,-Q*1.3+3.3,0,60,1.3,.6+(5-Q)*.62,0,{foot:.8,topShade:.88});P.F.pop(kt)}let Z=At=>Math.floor(re*At/66);for(let[At,Lt]of[[ct-15,-1],[vt+15,1],[ct-31,-1],[vt+31,1]]){let kt=Z(At);for(let Q=0;Q<kt;Q++){let Wt=m+(Q+.5)/kt*re;lt(At,Wt,40)||Q%9===4||on(ot,At*Math.cos(Wt),At*Math.sin(Wt),n,56,9.5,4.6,Lt>0?Wt-Math.PI/2:Wt+Math.PI/2,{wall:[tt.stone,Q%4===1?W.red:W.white],windows:1,doors:[[0,-16],[0,0],[0,16]],tile:W.tile[Q%4],base:[tt.stone,W.black],rise:2.3})}}$(ct-45,7),$(vt+45,7);let ht=["garden","temple","gym","garden","horses","houses","garden","horses","temple","gym"];G(ut,ct-50,1,ht),G(vt+50,j,-1,ht);let at=i.to("ship-sheds"),wt=40,Pt=7.4,Jt=(At,Lt,kt,Q)=>{let Wt=at.F.push(At,Lt,0,kt),Rt=4.3,Bt=Pt/2,_t=-wt/2,Dt=wt/2,Ot=s+.25;at.surf(tt.paving,Ze(W.white,.9)).quad([-Bt,_t-7,-1.3],[Bt,_t-7,-1.3],[Bt,Dt,Ot+1.2],[-Bt,Dt,Ot+1.2],.6,.6,.45,.45),at.surf(tt.stone,W.white);for(let E=0;E<5;E++)at.box(Bt,_t+2+E*((wt-4)/4),s,.7,2.2,Rt,0,{foot:.7});if(at.box(Bt,0,s+Rt,.7,wt,.5,0,{bottom:!0,foot:.7}),Q){for(let E=0;E<5;E++)at.box(-Bt,_t+2+E*((wt-4)/4),s,.7,2.2,Rt,0,{foot:.7});at.box(-Bt,0,s+Rt,.7,wt,.5,0,{bottom:!0,foot:.7})}at.wall(Bt,Dt,-Bt,Dt,s,s+Rt+.5,.6,.8);let Ft=s+Rt+.5,z=Ft+1.9;at.surf(tt.tiles,W.tile[(Math.abs(At*7+Lt*3)|0)%4]),at.quad([-Bt-.2,_t-.6,Ft],[0,_t-.6,z],[0,Dt+.3,z],[-Bt-.2,Dt+.3,Ft],.95),at.quad([0,_t-.6,z],[Bt+.2,_t-.6,Ft],[Bt+.2,Dt+.3,Ft],[0,Dt+.3,z],.95),at.surf(tt.wood,W.darkWood).tri([-Bt,_t,Ft],[Bt,_t,Ft],[0,_t,z],.55),at.tri([Bt,Dt,Ft],[-Bt,Dt,Ft],[0,Dt,z],.7),at.F.pop(Wt)};for(let[At,Lt]of[[a,!0],[l,!1],[o,!0]]){let kt=Lt?At+1+wt/2:At-1-wt/2,Q=Math.floor(re*kt/(Pt+.7));for(let Wt=0;Wt<Q;Wt++){let Rt=m+(Wt+.5)/Q*re,Bt=Wt%14;if(Bt>=6||Math.abs(Math.atan2(Math.sin(Rt-m),Math.cos(Rt-m)))<34/kt||lt(kt,Rt,24)||e.phone&&Wt%28>=9)continue;let _t=Lt?Rt-Math.PI/2:Rt+Math.PI/2;if(Jt(kt*Math.cos(Rt),kt*Math.sin(Rt),_t,Bt===0),T()<.7){let Dt=Lt?kt+2:kt-2;M.push({x:Dt*Math.cos(Rt),y:Dt*Math.sin(Rt),z:s+1,rot:Lt?Rt+Math.PI:Rt,tilt:0,sx:1})}}}let Ut=i.to("quays");for(let[At,Lt,kt]of[[f+7,1,44],[S-7,-1,52]]){let Q=Math.floor(re*At/(kt+26));for(let Wt=0;Wt<Q;Wt++){let Rt=m+(Wt+.5)/Q*re;if(!(lt(At,Rt,kt/2+8)||Math.abs(Math.atan2(Math.sin(Rt-m),Math.cos(Rt-m)))<110/At)){if(Wt%5===3){let Bt=Ut.F.push((At+Lt*-6.4)*Math.cos(Rt),(At+Lt*-6.4)*Math.sin(Rt),0,Lt>0?Rt+Math.PI/2:Rt-Math.PI/2);for(let _t=0;_t<14;_t++)Ut.surf(tt.smooth,W.white).box(0,-9+_t*.7+4.5,s,9,.7,(n-s)*(_t+1)/14,0,{foot:.75,topShade:.9});Ut.F.pop(Bt);continue}yi(Ut,At*Math.cos(Rt),At*Math.sin(Rt),s,kt,9,4.4,Lt>0?Rt+Math.PI/2:Rt-Math.PI/2,{wall:[tt.stone,Wt%3?W.white:W.red],tile:W.tile[Wt%4],r:.4,cols:Math.round(kt/5.5),simple:"pier"})}}}return{trees:k,hulls:M,strip:y,rW3:A,rL2:b}};var Pl=(i,t)=>{let e=new xi(new vi,"block"),n=Hn(i),s=(r,a)=>{let l=-22;for(;l<21;){let o=Math.min(22-l,7.5+n()*6.5),h=9+n()*3.5,u=n()<.35?6.2+n()*1.4:3.3+n()*1.2,c=W.plaster[n()*6|0],f=W.tile[n()*4|0],d=r+(a>0?-1:1)*(h/2-5),p=n()<.24;if(t)on(e,l+o/2,d,0,o-.25,h,u,a>0?0:Math.PI,{wall:[tt.plaster,c],tile:f,roof:p?"flat":"gable",windows:1,doors:[[0,(n()-.5)*(o-3.4)]],rise:1.3+n()*.8,ridgeAlongY:!1,over:.45,base:n()<.4?[tt.stone,W.white]:null});else{let v=e.F.push(l+o/2,d,0,a>0?0:Math.PI),g=1.3+n()*.8,m=(o-.25)/2;e.surf(tt.plaster,c).box(0,0,0,o-.25,h,u+(p?.6:0),0,{top:p,foot:.78,sides:p?15:3,topShade:.82}),p||(e.surf(tt.tiles,f).quad([-m,-h/2-.4,u-.2],[m,-h/2-.4,u-.2],[m,0,u+g],[-m,0,u+g],.92,.92,1,1),e.quad([m,h/2+.4,u-.2],[-m,h/2+.4,u-.2],[-m,0,u+g],[m,0,u+g],.92,.92,1,1),e.surf(tt.plaster,c).tri([m,-h/2,u],[m,h/2,u],[m,0,u+g],.85),e.tri([-m,h/2,u],[-m,-h/2,u],[-m,0,u+g],.85)),e.F.pop(v)}l+=o}};return s(-10,1),s(10,-1),t&&(e.surf(tt.plaster,W.plaster[1]).box(-21.6,0,0,.5,9,2.4,0,{foot:.75}),e.box(21.6,0,0,.5,9,2.4,0,{foot:.75}),e.surf(tt.wood,W.darkWood).wall(-21.9,1,-21.9,-1,0,2,.8),e.surf(tt.earth,[205,192,168]).slab(0,0,.04,43,9,0,.75)),e.geometry()},Qd=(i,t)=>{let{rT:e,core:n,B:s,SEA:r,off:a,bridgeHalf:l,canalHalf:o,k:h}=i,u=Hn(1180),c={low:Pl(11,!1),high:[Pl(21,!0),Pl(22,!0),Pl(23,!0)]},f=t.phone?8:24,d=Array.from({length:f},()=>({blocks:[],cx:0,cy:0})),p=37,v=Math.floor((n-e-18)/p),g=t.phone?Math.min(v,7):v,m=[];for(let x=0;x<g;x++){let _=e+24+x*p,b=Math.floor(re*_/50);for(let S=0;S<b;S++){let A=r+(S+.5)/b*re,y=_*Math.cos(A),T=_*Math.sin(A);if(T<0&&(Math.abs(y)<o+12*h+30||Math.abs(y-a)<l+28))continue;let k=(A-r)/re*16;if(Math.abs(k-Math.round(k))*(re/16)*_<29)continue;if(u()<.035){for(let J=0;J<5;J++)m.push({x:y+(u()-.5)*34,y:T+(u()-.5)*22,z:s,s:6+u()*5,kind:u()<.5?"plane":"cypress",id:"house-form"});continue}let M=Math.min(f-1,Math.floor((A-r)/re%1*f)),H=.86+u()*.28;d[M].blocks.push({x:y,y:T,z:s,rot:A+Math.PI/2+(u()<.5?Math.PI:0),sx:re*_/b/50,sy:1,sz:.9+u()*.25,tint:[255*Math.min(1,H),255*Math.min(1,H*.985),255*Math.min(1,H*.95)],kind:u()*3|0})}}for(let x=0;x<f;x++){let _=r+(x+.5)/f*re,b=(e+n)/2;d[x].cx=b*Math.cos(_),d[x].cy=b*Math.sin(_),d[x].reach=re*b/f/2+(n-e)/2}return{protos:c,sectors:d,trees:m}};var tf=(i,t,e,n,s)=>{let r=[];for(let a=0;a<=n;a++){let l=a/n,[o,h,u,c]=e(l),f=(l-.5)*t;r.push([[f,-o,u+c],[f,-o*.96,u*.45+c],[f,-o*.6,-h*.55+c],[f,0,-h+c],[f,o*.6,-h*.55+c],[f,o*.96,u*.45+c],[f,o,u+c]])}i.surf(tt.wood,s).loft(r,{flip:!0}),i.surf(tt.wood,Ze(W.wood,1.05));for(let a=0;a<n;a++){let l=r[a],o=r[a+1];i.quad([l[0][0],l[0][1],l[0][2]-.25],[o[0][0],o[0][1],o[0][2]-.25],[o[6][0],o[6][1],o[6][2]-.25],[l[6][0],l[6][1],l[6][2]-.25],.8)}return r},Il=(i,t,e,n=.07)=>i.quad([t[0],t[1]-n,t[2]],[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],[e[0],e[1]-n,e[2]]),ef=i=>{let t=()=>new xi(new vi,"ship"),e=(s,r)=>{let a=t(),l=37;tf(a,l,o=>{let h=2.75*Math.min(1,Math.sin(Math.min(1,o*1.25)*Math.PI/2)**.7)*(o>.82?Math.max(.06,1-((o-.82)/.18)**1.6):1),u=o<.16?((.16-o)/.16)**2*4.2:o>.9?((o-.9)/.1)**2*1.2:0;return[Math.max(.12,h*(o<.1?.35+o*6.5:1)),1*(o<.12?o/.12:1),2.1,u]},r||i.phone?7:12,W.hull),a.surf(tt.gilt,W.brass).box(l/2+.9,0,-.5,2.6,.5,.9,0,{bottom:!0}),a.surf(tt.wood,W.hull);for(let o of[-1,1])a.box(0,o*3,1.5,l*.66,.6,.5,0,{bottom:!0,foot:.7});a.surf(tt.wood,Ze(W.red,1.1)).box(l/2-2.2,0,2.1,.5,2.6,.9,0);for(let o=-1;o<=1;o++)a.surf(tt.wood,W.hull).quad([-l/2+.2,o*.5-.12,6],[-l/2+.2,o*.5+.12,6],[-l/2+2.6+Math.abs(o)*.3,o*.9+.12,8.4-Math.abs(o)*.5],[-l/2+2.6+Math.abs(o)*.3,o*.9-.12,8.4-Math.abs(o)*.5]);if(s){a.surf(tt.wood,W.wood).shaft(1.5,0,1.8,.2,.13,10.5,5),a.box(1.5,0,11.4,.3,11,.3,0,{bottom:!0}),a.surf(tt.cloth,W.sail).box(1.5,0,10.9,.5,10.4,.55,0,{bottom:!0}),a.surf(tt.wood,W.darkWood),Il(a,[1.5,0,12.2],[l/2-2,0,2.6]),Il(a,[1.5,0,12.2],[-l/2+2,0,5]);let o=i.phone?12:28;for(let h=0;h<o;h++)for(let u of[-1,1]){let c=-l*.3+l*.6*h/(o-1);a.surf(tt.wood,W.wood).quad([c,u*2.9,1.5],[c+.14,u*2.9,1.5],[c+.14-1.2,u*7.2,.05],[c-1.2,u*7.2,.05])}}return a.geometry()},n=s=>{let r=t(),a=19;tf(r,a,l=>{let o=3*Math.sin(Math.min(1,l*1.6)*Math.PI/2)**.6*(l>.72?Math.max(.05,Math.cos((l-.72)/.28*Math.PI/2)**.8):1),h=l<.14?((.14-l)/.14)**1.6*3:l>.86?((l-.86)/.14)**1.6*2.2:0;return[Math.max(.1,o),1.5*Math.min(1,l/.1,(1-l)/.08),1.9,h]},7,Ze(W.hull,1.15)),r.surf(tt.wood,Ze(W.hull,.9));for(let l of[-1,1])r.box(0,l*3.02,1.35,a*.7,.16,.3,0,{bottom:!0});if(r.surf(tt.wood,W.wood).shaft(.6,0,1.6,.24,.15,12.5,5),r.box(.6,0,12.6,.3,11.5,.3,0,{bottom:!0}),s){r.surf(tt.cloth,W.sail);let l=4;for(let o=0;o<l;o++){let h=12.6-o*8.2/l,u=12.6-(o+1)*8.2/l,c=p=>.75+Math.sin(p*Math.PI)*1.6,f=o/l,d=(o+1)/l;r.quad([c(f),-5.4,h],[c(f),5.4,h],[c(d),5.2,u],[c(d),-5.2,u],1,1,.9,.9)}}else r.surf(tt.cloth,W.sail).box(.6,0,12.1,.55,10.8,.6,0,{bottom:!0});r.surf(tt.wood,W.darkWood),Il(r,[.6,0,14],[a/2-.6,0,4.2]),Il(r,[.6,0,14],[-a/2+1,0,4.6]);for(let l of[-1,1])r.quad([.6,0,13.6],[.74,0,13.6],[.74,l*2.9,2],[.6,l*2.9,2]),r.surf(tt.wood,W.wood).box(-a/2+2.2,l*2.6,-.6,.25,.5,4.4,0,{foot:.8});r.surf(tt.wood,Ze(W.wood,.9)).box(-a/2+3.4,0,1.6,2.6,3.2,1.5,0,{foot:.8}),r.surf(tt.tiles,[240,200,170]);for(let[l,o]of[[3.5,-.8],[4.6,.7]])r.shaft(l,o,1.6,.34,.46,.95,5,{cap:!0});return r.geometry()};return{trireme:e(!0),hull:e(!1,!0),merchant:n(!1),sailing:n(!0)}},nf=(i,t)=>{let{rIsle:e,rW1:n,rL1:s,rW2:r,rL2:a,rW3:l,canalHalf:o,edge:h,SEA:u,off:c,bridgeHalf:f,k:d}=i,p=Hn(1190),v=[],g=[],m=[],x=[],_=(S,A)=>!(A<0&&Math.abs(S-c)<f+16),b=t.phone?.5:1;for(let S=0;S<9*b;S++){let A=p()*re,y=(e+n)/2+(p()-.5)*70,T=y*Math.cos(A),k=y*Math.sin(A);_(T,k)&&v.push({x:T,y:k,z:.25,rot:A+Math.PI/2+(p()-.5)*.3})}for(let S=0;S<16*b;S++){let A=p()*re,y=(s+r)/2+(p()-.5)*190,T=y*Math.cos(A),k=y*Math.sin(A);_(T,k)&&v.push({x:T,y:k,z:.25,rot:A+Math.PI/2+(p()-.5)*.4})}for(let S=0;S<26*b;S++){let A=p()*re,y=e+5.5,T=y*Math.cos(A),k=y*Math.sin(A);_(T,k)&&Math.abs(A-Math.PI/2)>.12&&g.push({x:T,y:k,z:.25,rot:A+Math.PI/2})}for(let[S,A]of[[a+12,1],[l-12,-1]]){let y=Math.floor(re*S/15);for(let T=0;T<y;T++){if(p()>.21*b)continue;let k=u+(T+.5)/y*re,M=S*Math.cos(k),H=S*Math.sin(k);!_(M,H)||Math.abs(Math.atan2(Math.sin(k-u),Math.cos(k-u)))<90/S||m.push({x:M,y:H,z:.1,rot:A>0?k:k+Math.PI,sx:.8+p()*.5})}}for(let S=0;S<110*b;S++){let A=p()*re,y=(a+l)/2+(p()-.5)*380,T=y*Math.cos(A),k=y*Math.sin(A);_(T,k)&&(p()<.3?x:m).push({x:T,y:k,z:.1,rot:A+Math.PI/2+(p()-.5)*1.4+(p()<.5?Math.PI:0),sx:.8+p()*.5})}for(let S=0;S<26*b;S++){let A=l+p()*(h-l-30),y=p()<.5?-1:1;(p()<.55?x:m).push({x:y*o*(.25+p()*.4),y:-A,z:.1,rot:y>0?Math.PI/2:-Math.PI/2,sx:.85+p()*.45})}for(let S=0;S<30*b;S++){let A=l+60+p()*(h-l-120),y=p()<.5?-1:1;m.push({x:y*(o-3.6),y:-A,z:.1,rot:Math.PI/2*(p()<.5?1:-1),sx:.8+p()*.4})}return{triremes:v,hulls:g,merchants:m,sailing:x}};var ma=(i,t,e,n,s,r,a,l,o)=>{let h=Hn(o),u=()=>.86+h()*.28;i.surf(tt.leaf,l).turned(t,e,n,[[s*.3,0],[s*u(),r*.36],[s*.8*u(),r*.72],[.01,r]],a,{rot:h()*6,squash:.9+h()*.2})},sf=i=>{let e=()=>new xi(new vi,"tree"),n=e();n.surf(tt.wood,W.trunk).shaft(0,0,0,.022,.018,.12,4),n.surf(tt.leaf,[255,255,255]).turned(0,0,.07,[[.03,0],[.095,.14],[.1,.36],[.06,.72],[.004,.93]],5);let s=e();s.surf(tt.wood,W.trunk).shaft(0,0,0,.035,.025,.42,5),ma(s,.06,.02,.3,.3,.52,5,[255,255,255],3),ma(s,-.14,-.06,.4,.26,.6,5,[235,245,225],4);let r=e();r.surf(tt.wood,W.trunk).shaft(0,0,0,.03,.02,.66,5),ma(r,0,0,.6,.36,.4,6,[215,235,205],5);let a=e();a.surf(tt.wood,W.trunk).shaft(0,0,0,.06,.04,.34,5),ma(a,0,0,.24,.46,.76,5,[255,255,255],6);let l=e();return l.surf(tt.wood,W.trunk).shaft(0,0,0,.045,.03,.36,4),ma(l,0,0,.28,.4,.72,5,[255,255,255],7),{cypress:n.geometry(),plane:s.geometry(),pine:r.geometry(),olive:a.geometry(),fruit:l.geometry()}},rf={cypress:[[150,175,150],[170,190,160],[135,160,140]],plane:[[255,255,255],[235,245,220],[220,235,205],[245,240,200]],pine:[[190,215,185],[205,225,195]],olive:[[225,232,236],[205,216,222]],fruit:[[255,255,235],[240,255,220],[225,240,205]]};var af=Math.PI*2,gh=Object.fromEntries(ri.map(i=>[i,[`${i}_c.jpg`,`${i}_n.jpg`]])),os=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Zx=(i,t,e,n)=>{let s=Math.floor(i),r=Math.floor(t),a=i-s,l=t-r,o=a*a*(3-2*a),h=l*l*(3-2*l),u=(c,f)=>os((c%e+e)%e,(f%e+e)%e,n);return(u(s,r)*(1-o)+u(s+1,r)*o)*(1-h)+(u(s,r+1)*(1-o)+u(s+1,r+1)*o)*h},un=(i,t,e,n,s=4)=>{let r=0,a=.5,l=1;for(let o=0;o<s;o++)r+=a*Zx(i*l,t*l,e*l,n+o),a*=.5,l*=2;return r/(1-2**-s)},jx={ashlar:(i,t)=>{let n=Math.floor(t*8),s=t*8-n,r=2+(n%3===1?1:0),a=os(n,0,3)*.6,l=(i+a)*r,o=Math.floor(l),h=l-o,u=1/r,c=Math.min(h*u*4.2,(1-h)*u*4.2,s*.525,(1-s)*.525)/.022,f=Math.min(1,c),d=.86+.2*os(o%r,n,7),p=un(i*24,t*24,24,5),v=un(i*3,t*3,3,9),g=214*d*(.9+.2*p)*(.9+.14*v)*(.55+.45*f);return[g,g*.985,g*.95,f*(.75+.25*p),.9-.12*p]},paving:(i,t)=>{let n=i*5,s=t*5+Math.floor(i*5)%2*.5,r=Math.floor(n),a=Math.floor(s),l=n-r,o=s-a,h=Math.min(1,Math.min(l,1-l,o,1-o)/.03),u=.84+.22*os(r%5,a%5,11),c=un(i*28,t*28,28,13),f=208*u*(.88+.22*c)*(.5+.5*h);return[f,f*.98,f*.93,h*(.8+.2*c),.86-.14*c]},tiles:(i,t)=>{let s=i*10,r=t*8,a=Math.floor(s),l=Math.floor(r),o=s-a,h=r-l,u=Math.abs(Math.sin(o*Math.PI)),c=h,f=.8+.3*os(a,l,17),d=un(i*30,t*30,30,19),p=.25+.55*u+.2*(1-c),v=f*(.86+.25*d)*(.62+.38*u)*(c<.08?.7:1);return[196*v,112*v,76*v,p,.82]},plaster:(i,t)=>{let e=un(i*6,t*6,6,23,5),n=un(i*40,t*40,40,29,2),s=212*(.9+.14*e)*(.95+.08*n);return[s,s*.99,s*.96,.5+.3*e+.2*n,.9]},metal:(i,t)=>{let n=i*2,s=t*2*2,r=n-Math.floor(n),a=s-Math.floor(s),l=Math.min(1,Math.min(r,1-r,a*.5,(1-a)*.5)/.012),o=un(i*3,t*90,3,31,3),h=un(i*9,t*9,9,37),u=Math.hypot(r*8%1-.5,(a-.06)*4)<.16||Math.hypot(r*8%1-.5,(a-.94)*4)<.16?1:0,c=222*(.9+.1*o)*(.86+.16*h)*(.72+.28*l);return[c,c,c,.5*l+.1*o+.4*u,.34+.32*h+.1*o+.2*(1-l)]},grass:(i,t)=>{let e=un(i*8,t*8,8,41,5),n=un(i*60,t*60,60,43,2),s=un(i*3,t*3,3,47),r=.7+.5*e*n*2;return[(86+46*s)*r,(112+16*s)*r,54*r,n,.95]},sand:(i,t)=>{let e=un(i*10,t*10,10,53,4),n=os(Math.floor(i*256),Math.floor(t*256),59),s=.86+.14*e+.06*n;return[216*s,198*s,162*s,.5*e+.5*n,.96]},wood:(i,t)=>{let n=t*6,s=Math.floor(n),r=n-s,a=Math.min(1,Math.min(r,1-r)/.04),l=un(i*4+os(s,0,61)*9,t*70,4,67,3),h=(.8+.3*os(s,1,71))*(.75+.4*l)*(.55+.45*a);return[150*h,112*h,78*h,a*(.6+.4*l),.8]},rock:(i,t)=>{let e=un(i*5,t*5,5,73,6),n=un(i*2,t*14,2,79,3),s=150*(.6+.5*e)*(.85+.25*n);return[s,s*.97,s*.92,.6*e+.4*n,.94]},leaf:(i,t)=>{let e=un(i*12,t*12,12,83,3),n=un(i*36,t*36,36,89,2),s=.45+1.1*e*(.6+.8*n);return[84*s,112*s,58*s,e*n*1.6,.86]}},of=(i,t)=>{let e=new Uint8Array(t*t*4),n=new Uint8Array(t*t*4),s=new Float32Array(t*t),r=jx[i];for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=r((o+.5)/t,(l+.5)/t),u=(l*t+o)*4;e[u]=Math.min(255,h[0]),e[u+1]=Math.min(255,h[1]),e[u+2]=Math.min(255,h[2]),e[u+3]=255,s[l*t+o]=h[3],n[u+2]=Math.min(255,h[4]*255),n[u+3]=255}let a=t/64;for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=(s[l*t+(o+1)%t]-s[l*t+(o+t-1)%t])*a,u=(s[(l+1)%t*t+o]-s[(l+t-1)%t*t+o])*a,c=Math.hypot(h,u,1),f=(l*t+o)*4;n[f]=(-h/c*.5+.5)*255,n[f+1]=(-u/c*.5+.5)*255}return{colour:e,detail:n}},Ll=(i,t)=>{let e=new ys(new Uint8Array(i*i*4*ri.length),i,i,ri.length);return e.format=Ye,e.type=an,e.colorSpace=t?Ie:Bn,e.wrapS=e.wrapT=Pi,e.minFilter=rn,e.magFilter=Ae,e.generateMipmaps=!0,e.anisotropy=8,e},lf=(i=128)=>{let t=Ll(i,!0),e=Ll(i,!1);return ri.forEach((n,s)=>{let r=of(n,i);t.image.data.set(r.colour,s*i*i*4),e.image.data.set(r.detail,s*i*i*4)}),t.needsUpdate=e.needsUpdate=!0,{colour:t,detail:e,size:i}},cf=(i=256)=>{let t=new Uint8Array(i*i*4),e=5,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,s=Array.from({length:18},()=>{let a=Math.round((n()-.5)*26)||1,l=Math.round((n()-.5)*26);return[a,l,n()*af,1/Math.hypot(a,l)**1.2]});for(let a=0;a<i;a++)for(let l=0;l<i;l++){let o=0,h=0;for(let[p,v,g,m]of s){let x=Math.cos(af*(p*l+v*a)/i+g)*m;o+=x*p,h+=x*v}let u=-o*.16,c=-h*.16,f=Math.hypot(u,c,1),d=(a*i+l)*4;t[d]=(u/f*.5+.5)*255,t[d+1]=(c/f*.5+.5)*255,t[d+2]=(1/f*.5+.5)*255,t[d+3]=255}let r=new Sn(t,i,i,Ye);return r.wrapS=r.wrapT=Pi,r.minFilter=rn,r.magFilter=Ae,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r},hf=async(i,t)=>{let e=`${globalThis.__ASSETS__||"./"}city/`,n=globalThis.__CITYTEX__,s=async p=>{let v=await fetch(n?.[p]??e+p);if(!v.ok)throw new Error(`${p}: ${v.status}`);return createImageBitmap(await v.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"})},r=await Promise.all(ri.map(async p=>{let v=t[p];if(!v)return null;try{return{colour:await s(v[0]),detail:await s(v[1])}}catch{return null}}));if(!r.some(Boolean))return null;let a=Ll(i,!0),l=Ll(i,!1),h=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(i,i):Object.assign(document.createElement("canvas"),{width:i,height:i})).getContext("2d",{willReadFrequently:!0}),u=p=>(h.setTransform(1,0,0,-1,0,i),h.clearRect(0,0,i,i),h.drawImage(p,0,0,i,i),p.close?.(),h.getImageData(0,0,i,i).data),c=128,f=p=>{let v=new Uint8Array(i*i*4),g=i/c;for(let m=0;m<i;m++)for(let x=0;x<i;x++){let _=((m/g|0)*c+(x/g|0))*4,b=(m*i+x)*4;v[b]=p[_],v[b+1]=p[_+1],v[b+2]=p[_+2],v[b+3]=255}return v},d=[];for(let p=0;p<ri.length;p++){if(r[p])a.image.data.set(u(r[p].colour),p*i*i*4),l.image.data.set(u(r[p].detail),p*i*i*4);else{d.push(ri[p]);let v=of(ri[p],c);a.image.data.set(f(v.colour),p*i*i*4),l.image.data.set(f(v.detail),p*i*i*4)}await new Promise(v=>setTimeout(v,0))}return a.needsUpdate=l.needsUpdate=!0,{colour:a,detail:l,size:i,loaded:ri.length-d.length,missing:d}};var vh=i=>new se().setRGB(i[0]/255,i[1]/255,i[2]/255,Ie),Jx=`
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
`,Kx=`
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
`,Qx=()=>{let i=me.lights_fragment_begin,t=i.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),e=i.indexOf("#endif",i.indexOf("#pragma unroll_loop_end",t))+6;if(t<0||e<6)throw new Error("city: three.js light loop not as expected");return i.slice(0,t)+Kx+i.slice(e)},ty=`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`,ey=`
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
`,ny=`
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
`,iy=`
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
`,sy=`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`,ry=`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`,uf=i=>{i.fragmentShader=i.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
${Jx}`).replace("#include <lights_fragment_begin>",Qx())},Dl=({phone:i=!1}={})=>{let t=lf(i?64:128),e={tColour:{value:t.colour},tDetail:{value:t.detail},uSurfA:{value:ua.map(p=>{let v=Tl[p];return new ge(v.layer,v.size,v.metal,v.rough)})},uSurfB:{value:ua.map(p=>{let v=Tl[p];return new ge(v.bump,v.pattern,v.wet,v.keep)})},uStone:{value:[vh(W.white),vh(W.black),vh(W.red)]},uGlow:{value:new se(0,0,0)},uTime:{value:0}},n=p=>{let v=new ir({color:16777215,roughness:1,metalness:0,side:sn,envMapIntensity:1});v.shadowSide=sn;let g={value:p};return v.onBeforeCompile=m=>{Object.assign(m.uniforms,{tColour:e.tColour,tDetail:e.tDetail,uSurfA:e.uSurfA,uSurfB:e.uSurfB,uStone:e.uStone,uDim:g,uGlow:e.uGlow}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
${ty}`).replace("#include <project_vertex>",`#include <project_vertex>
${ey}`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
${ny}`).replace("#include <map_fragment>",iy).replace("#include <roughnessmap_fragment>","float roughnessFactor = cityRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = cityMetal;").replace("#include <normal_fragment_maps>",sy).replace("#include <opaque_fragment>",`${ry}
#include <opaque_fragment>`),uf(m)},v.customProgramCacheKey=()=>"city-solid",v},s=n(1),r=n(.32),a=n(2),l=cf(i?128:256),o={value:1},h={tWave:{value:l},uTime:e.uTime,uShores:{value:new Float32Array(6)},uCanal:{value:new ge(0,-1,46,1e9)},tMirror:{value:null},uMirror:{value:0},uMirrorVP:{value:new xe},uDim:o},u=p=>{let v=new ir({color:16777215,roughness:.07,metalness:0,transparent:!0,envMapIntensity:1.15});return v.blending=Zr,v.blendSrc=or,v.blendDst=lr,v.blendSrcAlpha=jr,v.blendDstAlpha=Jr,v.onBeforeCompile=g=>{Object.assign(g.uniforms,h),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
          #include <opaque_fragment>`),uf(g)},v.customProgramCacheKey=()=>p?"city-pool":"city-sea",v},c={uColour:{value:new se(.5,.6,.7)}},f=new Xe({uniforms:c,transparent:!0,depthWrite:!1,side:sn,blending:Zr,blendSrc:or,blendDst:lr,blendSrcAlpha:jr,blendDstAlpha:Jr,vertexShader:`varying vec3 gN; varying vec3 gV;
      void main() {
        vec4 p = vec4( position, 1.0 ); vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p; n = mat3( instanceMatrix ) * n;
        #endif
        vec4 mv = modelViewMatrix * p; gN = normalMatrix * n; gV = - mv.xyz; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColour; varying vec3 gN; varying vec3 gV;
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`}),d=(p,v,g)=>new qe({color:new se(p,v,g),transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1,side:sn});return{solid:s,dim:r,glow:a,seaDim:o,glowColour:e.uGlow.value,sea:u(!1),pool:u(!0),ghost:f,wallLine:d(1.5,1.1,.4),canalLine:d(.25,.7,1.3),shared:e,waterUniforms:h,ghostUniforms:c,textures:t}};var Nl=new Map([...ph.from_text.map(i=>[i.id,{id:i.id,what:i.what,ref:i.ref,kind:"text",ours:i.shape==="ours"}]),...ph.choices.map(i=>[i.id,{id:i.id,what:i.what,ref:null,kind:"choice",ours:!0}])]),df=(i={},t={})=>{let e=typeof performance<"u"?performance.now():0,n=Vd(i),s={phone:!!t.phone},r=t.materials??Dl(s),a=new Sl,l=new $e,o=Hn(42),h=[],u=(O,Y,lt={})=>{let et=Nl.get(Y);return et||console.warn(`city: "${Y}" is not in reconstruction.json`),O.userData={...O.userData,id:Y,kind:et?.kind??"choice",ghostable:!!et?.ours&&!lt.keep,solid:O.material,...lt},O.name=Y,!O.userData.line&&!O.userData.water&&(O.castShadow=O.receiveShadow=!0),l.add(O),h.push(O),O},c=qd(a,n,s),f=Yd(a,n,s),d=Jd(a,n,s),p=Kd(a,n,s);for(let[O,Y]of a.bins){if(!Y.nv)continue;let[lt,et]=O.split("#");u(new pe(Y.geometry(),r.solid),lt,et?{[et]:!0}:{})}for(let O of Xd(n,r))u(O,O.userData.id);for(let O of[...d.pools,...f.basins.map(Y=>({...Y,z:Y.z+.8,rot:0,id:"aqueducts"}))]){let Y=O.arc?new qn(O.r0,O.r1,Math.ceil((O.arc[1]-O.arc[0])*O.r1/6),1,O.arc[0],O.arc[1]-O.arc[0]):O.r?new Gr(O.r,20):new Un(O.w,O.d),lt=new pe(Y,r.pool);O.arc?lt.position.z=O.z:(lt.position.set(O.x,O.y,O.z),lt.rotation.z=O.rot??0),lt.receiveShadow=!0,u(lt,O.id,{water:!0,pool:!0})}let v=sf(s),g=Qd(n,s),m=new Map;for(let O of[...d.trees,...p.trees,...g.trees]){let Y=`${O.kind}|${O.id}`;m.has(Y)||m.set(Y,[]);let lt=rf[O.kind],et=lt[o()*lt.length|0],X=.85+o()*.3;m.get(Y).push({x:O.x,y:O.y,z:O.z-.1,rot:o()*re,sx:O.s*(.9+o()*.3),sy:O.s*(.9+o()*.3),sz:O.s,tint:[Math.min(255,et[0]*X),Math.min(255,et[1]*X),Math.min(255,et[2]*X)]})}let x=0;for(let[O,Y]of m){let[lt,et]=O.split("|");x+=Y.length,u(Ni(v[lt],r.solid,Y),et,{keep:et!=="house-form",tree:!0})}let _=ef(s),b=nf(n,s),S=[255,255,255],A=O=>O.map(Y=>({...Y,sy:Y.sx,sz:Y.sx,tint:Y.tint??S}));for(let O of c.dock.mouths)b.hulls.push({x:O,y:c.dock.yFace-c.dock.dockDeep*.5,z:.2,rot:-Math.PI/2});u(Ni(_.hull,r.solid,A(p.hulls)),"shipyards"),u(Ni(_.hull,r.solid,A(b.hulls)),"triremes",{reflect:!0}),u(Ni(_.trireme,r.solid,A(b.triremes)),"triremes",{reflect:!0}),u(Ni(_.merchant,r.solid,A(b.merchants)),"merchant-ships",{reflect:!0}),u(Ni(_.sailing,r.solid,A(b.sailing)),"merchantmen",{reflect:!0});let y=g.sectors.map(O=>{let Y=O.blocks.length?u(Ni(g.protos.low,r.solid,O.blocks),"house-form"):null,lt=s.phone?[]:[0,1,2].map(et=>{let X=O.blocks.filter($=>$.kind===et);if(!X.length)return null;let G=u(Ni(g.protos.high[et],r.solid,X),"house-form");return G.visible=!1,G}).filter(Boolean);return{...O,low:Y,high:lt,near:!1}}),T=new Set(["wall-brass","wall-tin","wall-orichalcum","ring-walls","wall-towers","bridges","bridge-gates","stone","rings","ship-sheds","quays","rock-docks","ship-passages","canal"]);for(let O of h)(O.userData.reflect||T.has(O.userData.id)&&!O.userData.water&&!O.userData.line&&!O.userData.teeth)&&O.layers.enable(1);let k=mh.filter(O=>h.some(Y=>Y.userData.id===O)).map(O=>{let Y=Nl.get(O);return{id:O,what:Y.what,ref:Y.ref,kind:Y.kind}}),M=n,H=d.temple,J={canal:[0,-(M.rW3+330),520,74,0],"merchant-ships":[-420,-(M.rW3-150),380,76,300],houses:[-360,-(M.rT+190),300,68,25],"house-form":[-360,-(M.rT+190),160,74,25],harbours:[M.off-260,-(M.rL2+M.rW3)/2,1e3,68,332],bridges:[M.off+150,-(M.rL2+300),420,74,330],"bridge-gates":[M.off+6,-(M.bridges[2][1]+70),120,80,0],aqueducts:[M.off-8,-(M.bridges[1][1]+30),90,72,20],"wall-brass":[M.off+330,-(M.r2b-60),420,78,300],"ring-walls":[M.off+60,-(M.r2b+30),150,80,60],"wall-towers":[M.off+200,-(M.r2b+10),160,78,310],"ship-passages":[0,-(M.rL2+110),170,82,0],racecourse:[M.off+420,-(M.rcMid-60),520,70,290],barracks:[M.off+240,-(M.rcMid+M.rcHalf+30),170,70,300],"horse-grounds":[M.off+500,-(M.r2a+80),300,64,330],gymnasia:[M.off+330,-(M.r1a+70),260,62,320],gardens:[M.off+260,-(M.r2b-70),240,62,300],"ring-temples":[M.off-300,-(M.r1a+80),240,66,30],"patterned-buildings":[M.off-420,-(M.r1b-60),220,66,20],shipyards:[M.off+330,-(M.rW2-60),260,74,300],"ship-sheds":[M.off+330,-(M.rW2-60),160,78,300],"wall-tin":[M.off+220,-(M.r1b+60),300,78,310],"guard-house":[M.off+200,-(M.r1a+130),260,62,60],"rock-docks":[0,M.rIsle+60,150,80,180],"wall-orichalcum":[M.off+150,-(M.rIsle+60),240,78,320],"guard-dwellings":[-(M.Rs+50),-40,190,66,90],springs:[330,250,190,66,230],reservoirs:[300,300,200,62,230],baths:[120,420,220,62,190],grove:[-220,380,300,66,150],palace:[0,110,330,62,0],shrine:[0,-20,150,68,15],"shrine-wall":[0,-30,120,72,0],hall:[0,0,60,30,0],altar:[d.altar.x+10,d.altar.y,110,72,280],statues:[H.x+H.L/2+20,H.y-H.W/2-10,90,78,300],"votive-outside":[M.off,-(M.rampTop-40),70,78,0],temple:[H.x,H.y,215,70,40],pinnacles:[H.x+H.L/2,H.y,120,60,270],"temple-interior":[H.x+20,H.y,70,84,270,H.floor],"temple-ceiling":[H.x-20,H.y,40,62,270,H.floor],poseidon:[H.x-30,H.y,60,84,270,H.floor],nereids:[H.x+10,H.y+12,30,80,250,H.floor],"votive-inside":[H.x+30,H.y-20,30,80,200,H.floor],pillar:[H.x+22,H.y,26,82,270,H.floor],rings:[0,0,M.rW3*3.4,58,330],island:[0,-60,900,62,0],hill:[M.off+40,-(M.rampFoot+40),200,76,350],stone:[M.off+120,-(M.r1b+40),120,80,300],quays:[M.off+150,-(M.rT-20),140,82,290],"outer-wall":[0,0,M.rWall*2.6,20,0],extent:[0,-M.core,900,66,0],triremes:[M.off+140,-(M.rL1+150),200,78,300],merchantmen:[60,-(M.rW3+200),200,80,0],"island-gardens":[-(M.Rp+30),-30,160,70,90],"racecourse-form":[M.off+60,-(M.rcMid+M.rcHalf+30),180,76,330],"ring-layout":[M.off+300,-(M.r1a+140),300,62,300]},ft={centre:[0,0],harbour:[M.off-40,-(M.rL2+150)],temple:[H.x+10,H.y],quay:[M.off+40,-(M.rT-24)]},F=(typeof performance<"u"?performance.now():0)-e,V=0;for(let O of h){let Y=O.geometry,lt=(Y.index?Y.index.count:Y.attributes.position.count)/3;V+=lt*(O.isInstancedMesh?O.count:1)}return{group:l,meshes:h,parts:k,spots:J,lab:ft,sectors:y,plan:n,temple:d.temple,hall:d.hall,radius:n.edge+80,wallRadius:n.rWall,coreRadius:n.rW3,shores:n.shores,materials:r,params:n.P,bank:n.B,stats:{buildMs:F,triangles:V,meshes:h.length,trees:x}}};var ay=i=>{let t=Math.acos($t(i,-1,1))*180/Math.PI,e=Math.min(38,1/(Math.max(i,0)+.15*Math.max(93.885-t,.5)**-1.253)),n=$t((i+.035)/.055,0,1),s=n*n*(3-2*n);return[.0464+.0098+.012,.1085+.0282+.012,.2648+.0013+.012].map(r=>Math.exp(-r*e)*s)},oy=i=>{let t=$t((i+.14)/.44,0,1),e=t*t*(3-2*t);return[.1+.1*e,.13+.17*e,.26+.24*e].map(s=>s*e*.55+.004)},Fl=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.active=!1,this.site=null,this.city=null,this.params={...Ml},this.pending=0,this.buildMs=null,this.ghost=!1,this.lit=null,this.cut=!1;let e=t.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=bs;let n=t.phone?1024:2048;this.suns=[0,1,2].map(r=>{let a=new Xr(16777215,Math.PI);return a.castShadow=!0,a.shadow.mapSize.set(r===2&&!t.phone?4096:n,r===2&&!t.phone?4096:n),a.shadow.autoUpdate=!1,a.shadow.radius=1.4,a.layers.enable(1),this.scene.add(a,a.target),a}),this.cascades=[{half:0,c:new pt(1e9,0,0)},{half:0,c:new pt(1e9,0,0)},{half:0,c:new pt(1e9,0,0)}],this.pmrem=new dr(e),this.skyUniforms={uSky:{value:new pt(.1,.16,.27)},uSun:{value:new pt(0,0,1)},uSunColour:{value:new pt(1,1,1)}};let s=new pe(new kn(50,32,16),new Xe({side:nn,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
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
        }`})),this.dome.rotation.x=Math.PI/2,this.dome.frustumCulled=!1,this.dome.renderOrder=-1,this.scene.add(this.dome),this.lastSun=new pt,this.env=null,this.materials=null,this.mirror=t.phone?null:{target:null,camera:new We,vp:new xe,on:!1},this.mirror&&this.mirror.camera.layers.set(1),this.ray=new Yr}get turn(){return Math.PI-this.params.seaBearing*yt}toCity(t,e){let n=-this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toScene(t,e){let n=this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toLonLat(t,e){let n=this.site.lat*yt;return[this.site.lon*yt+t/(ne*Math.cos(n)),n+e/ne]}fromLonLat(t,e){let n=this.site.lat*yt,s=t-this.site.lon*yt;return s=Math.atan2(Math.sin(s),Math.cos(s)),[s*ne*Math.cos(n),(e-n)*ne]}place({lat:t,lon:e,bearing:n=180,stadion:s=this.params.stadion}){let r=!this.city||s!==this.params.stadion;if(this.params={...this.params,stadion:s,seaBearing:n},r){let a=performance.now();if(this.city){this.scene.remove(this.city.group);for(let h of this.city.meshes)h.geometry.dispose()}this.materials||(this.materials=Dl({phone:this.world.phone}),this.loadPictures()),this.city=df(this.params,{phone:this.world.phone,materials:this.materials}),this.scene.add(this.city.group);let l=this.materials.waterUniforms,o=this.city.shores;for(let h=0;h<6;h++)l.uShores.value[h]=o[h];l.uCanal.value.z=this.city.plan.canalHalf,this.buildMs=Math.round(performance.now()-a),this.applyLook()}this.city.group.rotation.z=this.turn,this.city.group.updateMatrixWorld(!0);{let[a,l]=this.toScene(0,-1);this.materials.waterUniforms.uCanal.value.x=a,this.materials.waterUniforms.uCanal.value.y=l}this.site={lat:t,lon:e,frame:si(e*yt,t*yt)},this.active=!0,this.lastSun.set(0,0,0);for(let a of this.cascades)a.half=0;return this.ground(),this.world.stamp++,this.city}loadPictures(){Object.keys(gh).length&&(this.pending++,hf(this.world.phone?512:1024,gh).then(t=>{if(t){let e=this.materials.shared,n=[e.tColour.value,e.tDetail.value];e.tColour.value=t.colour,e.tDetail.value=t.detail;for(let s of n)s.dispose();this.pictures={loaded:t.loaded,missing:t.missing}}else this.pictures={loaded:0,missing:"all"}}).catch(t=>{this.pictures={loaded:0,error:String(t)}}).finally(()=>{this.pending--,this.world.stamp++}))}remove(){this.active=!1,this.site=null,this.world.globe.shared.uPad.value.set(0,0,0,0),this.world.stamp++}ground(){let t=this.world.globe,e=t.shared,n=this.site,s=e.uWater.value>.5?e.uSea.value:-1e5,r=Math.max(t.heightAt(n.lon*yt,n.lat*yt)??0,s);n.h=r;let a=n.frame;e.uPad.value.set(a.up[0],a.up[1],a.up[2],this.city.radius-80),e.uPadH.value=r-2;let l=ne+r*e.uExag.value;n.origin=[a.up[0]*l,a.up[1]*l,a.up[2]*l]}floorAt(t,e){if(!this.active||!this.city)return null;let[n,s]=this.fromLonLat(t,e);if(Math.hypot(n,s)>this.city.plan.edge)return null;let[r,a]=this.toCity(n,s),l=this.localFloor(r,a);return l==null?null:this.site.h*this.world.globe.shared.uExag.value+l}localFloor(t,e){let n=this.city.plan.groundZ(t,e);if(n==null)return null;let s=this.city.temple,r=this.city.hall,a=Math.max(Math.abs(t-s.x)-s.L/2,Math.abs(e-s.y)-s.W/2);return a<5.1?s.floor-Math.max(0,Math.ceil(a/1.7))*((s.floor-s.z)/4):r&&t*t+e*e<r.RS*r.RS?r.floor:n}pick(t,e){if(!this.active||!this.city)return null;let n=this.world.renderer.domElement,s=n.clientWidth||1,r=n.clientHeight||1;this.ray.setFromCamera(new ie(t/s*2-1,1-e/r*2),this.camera);let a=this.ray.intersectObjects(this.city.meshes.filter(c=>c.visible&&!c.userData.line),!1);if(!a.length)return null;let l=a[0],o=Nl.get(l.object.userData.id),[h,u]=this.toLonLat(l.point.x,l.point.y);return{id:l.object.userData.id,what:o?.what??l.object.userData.id,ref:o?.ref??null,kind:o?.kind??"choice",lon:h,lat:u}}parts(){return this.city?this.city.parts.map(t=>({...t})):[]}viewOf(t){let e=this.city?.spots[t];if(!e||!this.site)return null;let[n,s]=this.toScene(e[0],e[1]),[r,a]=this.toLonLat(n,s);return{lat:a,lon:r,range:e[2],tilt:e[3]*yt,heading:((e[4]+this.params.seaBearing-180)%360+360)%360*yt}}highlight(t){this.lit=t&&this.city?.meshes.some(e=>e.userData.id===t)?t:null,this.applyLook()}setGhost(t){this.ghost=!!t,this.applyLook()}cutaway(t){this.cut=!!t,this.applyLook()}applyLook(){if(!this.city)return;let t=this.materials;for(let e of this.city.meshes){let n=e.userData;if(n.roof&&(e.visible=!this.cut),n.line)continue;let s=this.ghost&&n.ghostable;if(n.water){e.material=n.solid;continue}e.material=s?t.ghost:this.lit?n.id===this.lit?t.glow:t.dim:t.solid,e.castShadow=!s,n.lodHidden&&(e.visible=!1)}t.seaDim.value=this.lit&&this.lit!=="harbours"&&this.lit!=="canal"?.45:1;for(let e of this.cascades)e.half=0;this.world.stamp++}labSpots(){let t={};for(let[e,n]of Object.entries(this.city.lab))t[e]=this.toScene(n[0],n[1]);return t}forceShadows(){this.cascades[0].half=0,this.cascades[1].half=0}update(){if(!this.active)return null;this.ground();let{control:t,camera:e,sun:n,renderer:s}=this.world,r=this.site.frame,a=this.site.origin,l=t.basis,o=[-l.fwd[0],-l.fwd[1],-l.fwd[2]],h=[t.pos[0]-a[0],t.pos[1]-a[1],t.pos[2]-a[2]],u=G=>[hn(G,r.east),hn(G,r.north),hn(G,r.up)],c=u(l.right),f=u(l.up),d=u(o),p=u(h),v=this.camera;v.matrix.set(c[0],f[0],d[0],p[0],c[1],f[1],d[1],p[1],c[2],f[2],d[2],p[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert(),v.projectionMatrix.copy(e.projectionMatrix),v.projectionMatrixInverse.copy(e.projectionMatrixInverse);let g=this.materials,m=this.city.plan;g.shared.uTime.value=this.world.time,this.dome.visible=p[2]<2500&&p[2]>-50,this.dome.visible&&(this.dome.position.set(p[0],p[1],p[2]-40),this.dome.scale.setScalar(38e3),this.dome.updateMatrixWorld());let x=-d[2],_=x<-.02?$t((p[2]-m.B)/-x,5,6e3):6e3,b=[p[0]-d[0]*_,p[1]-d[1]*_],S=_,[A,y]=this.toCity(p[0],p[1]);for(let G of this.city.sectors){let $=G.high.length>0&&Math.hypot(A-G.cx,y-G.cy,p[2])<640;$!==G.near&&(G.near=$,this.cascades[0].half=0,this.cascades[1].half=0),G.low&&(G.low.visible=!$,G.low.userData.lodHidden=$);for(let N of G.high)N.visible=$,N.userData.lodHidden=!$}let T=u([n.dir.x,n.dir.y,n.dir.z]),k=T[2];if(this.lastSun.distanceToSquared(new pt(T[0],T[1],T[2]))>1e-5){this.lastSun.set(T[0],T[1],T[2]);let G=ay(k),$=oy(k);for(let N of this.suns)N.color.setRGB(G[0],G[1],G[2]);this.skyUniforms.uSky.value.set($[0],$[1],$[2]),this.skyUniforms.uSun.value.set(T[0],T[1],T[2]),this.skyUniforms.uSunColour.value.set(G[0],G[1],G[2]),this.env?.dispose(),this.env=this.pmrem.fromScene(this.skyScene,0,1,200),this.scene.environment=this.env.texture,g.ghostUniforms.uColour.value.setRGB($[0]*2.2+G[0]*.25,$[1]*2.2+G[1]*.25,$[2]*2.2+G[2]*.25),g.glowColour.setRGB(G[0]*.05+$[0]*.12,G[1]*.05+$[1]*.12,G[2]*.04+$[2]*.1);for(let N of this.cascades)N.half=0}let H=[T[0],T[1],Math.max(T[2],.03)],J=Math.hypot(H[0],H[1],H[2]);H[0]/=J,H[1]/=J,H[2]/=J;let ft=Math.max(H[2],.14),V=(G=>1.5**Math.ceil(Math.log(G)/Math.log(1.5)))($t(S*1.1,40,620)),O=[{half:V,c:[b[0]-d[0]*V*.35,b[1]-d[1]*V*.35,m.B]},{half:Math.min(V*5.5,m.edge*1.02),c:[b[0]-d[0]*V*1.2,b[1]-d[1]*V*1.2,m.B]},{half:m.edge*1.02,c:[0,0,m.B]}],Y=0;for(let G=0;G<3;G++){let $=this.cascades[G],N=O[G],L=this.suns[G];if(!($.half!==N.half||Math.hypot($.c.x-N.c[0],$.c.y-N.c[1])>N.half*.22)||Y>0&&G<2&&$.half>0)continue;$.half=N.half,$.c.set(N.c[0],N.c[1],N.c[2]);let nt=N.half*1.6+80/ft+200,ut=N.half*1.5+80/ft,j=2*N.half/L.shadow.mapSize.x;L.position.set(N.c[0]+H[0]*nt,N.c[1]+H[1]*nt,N.c[2]+H[2]*nt),L.target.position.set(N.c[0],N.c[1],N.c[2]),L.target.updateMatrixWorld(),L.updateMatrixWorld();let ct=L.shadow.camera;ct.left=-N.half,ct.right=N.half,ct.top=N.half,ct.bottom=-N.half,ct.near=nt-ut,ct.far=nt+ut,ct.updateProjectionMatrix(),L.shadow.bias=-(.02+j*1.1)/(2*ut),L.shadow.normalBias=j*1.5+.02,L.shadow.needsUpdate=!0,G<2&&Y++}let lt=this.mirror,et=g.waterUniforms;if(!!lt&&p[2]<1400&&p[2]>.3&&!this.ghost){let G=s.getDrawingBufferSize(new ie),$=Math.max(2,G.x>>1),N=Math.max(2,G.y>>1);(!lt.target||lt.target.width!==$||lt.target.height!==N)&&(lt.target?.dispose(),lt.target=new Oe($,N,{type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!0}));let L=lt.camera,st=new pt(p[0],p[1],-p[2]);L.fov=$t(t.fovY/yt*1.25,10,120),L.aspect=e.aspect,L.near=1,L.far=16e3,L.updateProjectionMatrix(),L.position.copy(st),L.up.set(f[0],f[1],-f[2]),L.lookAt(st.x-d[0],st.y-d[1],st.z+d[2]),L.updateMatrixWorld(),L.matrixWorldInverse.copy(L.matrixWorld).invert(),lt.vp.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse);let nt=new Fn(new pt(0,0,1),-.05).applyMatrix4(L.matrixWorldInverse),ut=new ge(nt.normal.x,nt.normal.y,nt.normal.z,nt.constant),j=L.projectionMatrix,ct=new ge;ct.x=(Math.sign(ut.x)+j.elements[8])/j.elements[0],ct.y=(Math.sign(ut.y)+j.elements[9])/j.elements[5],ct.z=-1,ct.w=(1+j.elements[10])/j.elements[14],ut.multiplyScalar(2/ut.dot(ct)),j.elements[2]=ut.x,j.elements[6]=ut.y,j.elements[10]=ut.z+1,j.elements[14]=ut.w;let vt=s.shadowMap,mt=vt.autoUpdate,P=s.getRenderTarget();vt.autoUpdate=!1,vt.needsUpdate=!1,s.setRenderTarget(lt.target),s.setClearColor(0,0),s.clear(!0,!0,!1),s.render(this.scene,L),s.setRenderTarget(P),s.setClearColor(0,1),vt.autoUpdate=mt,et.tMirror.value=lt.target.texture,et.uMirrorVP.value.copy(lt.vp),et.uMirror.value=1}else et.uMirror.value=0;return{scene:this.scene,camera:v}}view(){return{lat:this.site.lat*yt,lon:this.site.lon*yt,range:this.city.coreRadius*3.4,tilt:58*yt,heading:(this.params.seaBearing+150)%360*yt}}};var xh={claimed:{ink:"#ffab5c",name:"Claimed"},checked:{ink:"#7fc0ff",name:"Checked"},found:{ink:"#7fe3a0",name:"Found"},context:{ink:"#e9edf5",name:"Place"},plato:{ink:"#f2cc6b",name:"Plato's measure"}},ff={claimed:["claimed","context","plato"],found:["checked","found","context","plato"],all:["claimed","checked","found","context","plato"]},pf=8,ly=new Set(["core","sample","dive","dig","place"]),mf={context:0,plato:1,checked:2,found:3,claimed:4},cy=[[/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i,"#4a4d55"],[/ash|tephra|pumice|ignimbrite/i,"#b9b4ad"],[/salt|evaporite|gypsum|halite/i,"#eef0f2"],[/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i,"#d9cfb4"],[/peat|organic|lignite|soil/i,"#4b3a2a"],[/shell|coquina/i,"#e6dcc8"],[/gravel|pebble|cobble|conglomerate|breccia/i,"#8d8478"],[/sand/i,"#d7bf86"],[/silt/i,"#a89a80"],[/clay|mud|turbidite/i,"#7d7468"]],yh=i=>(cy.find(([t])=>t.test(i??""))??[0,"#9a9488"])[1],vf=i=>i.type==="Polygon"?i.coordinates:i.type==="MultiPolygon"?i.coordinates.flat():[],xf=i=>i.type==="LineString"?[i.coordinates]:i.type==="MultiLineString"?i.coordinates:[],yf=i=>i.type==="Point"?[i.coordinates]:i.type==="MultiPoint"?i.coordinates:[],_f=i=>[...yf(i),...xf(i).flat(),...vf(i).flat()],_i=i=>{let t=i.geometry;if(t.type==="Point")return t.coordinates;if(t.type==="LineString")return t.coordinates[Math.floor(t.coordinates.length/2)];let e=_f(t);return[e.reduce((n,s)=>n+s[0],0)/e.length,e.reduce((n,s)=>n+s[1],0)/e.length]},gf=i=>{let t=_f(i.geometry),e=_i(i),n=0;for(let s of t)n=Math.max(n,Math.hypot((s[0]-e[0])*Math.cos(e[1]*yt),s[1]-e[1])*yt*ne);return n*2},hy=i=>i.position?.how==="from-description"||(i.position?.error_m??0)>=500,Ul=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.entry=null,this.extras=[],this.mode="all",this.focus=null,this.selected=null,this.labels=[],this.markers=new Map,this.on=0,this.origin=null;let e=t.globe.shared;this.size=t.phone?1024:2048,this.near=this.sheet(),this.far=this.sheet(),e.tDecal.value=this.near.tex,e.tDecalFar.value=this.far.tex,this.painted=null,this.dirty=!0,this.tick=0,this.geo=this.shapes(),this.mats=new Map}sheet(){let t=document.createElement("canvas");t.width=t.height=this.size;let e=new Li(t);return e.colorSpace=Bn,e.premultiplyAlpha=!0,e.generateMipmaps=!0,e.minFilter=rn,e.anisotropy=8,{canvas:t,g:t.getContext("2d"),tex:e}}shapes(){let t=(e,n=0)=>(e.rotateX(Math.PI/2),e.translate(0,0,n),e);return{stem:t(new ji(.007,.007,1,6),.5),core:t(new ji(.05,.05,1,20,1,!1),.5),cap:t(new ji(.066,.066,.03,20),1),sample:new Wr(.085).translate(0,0,1.06),dive:new kn(.075,18,12).translate(0,0,1.06),dig:new Zi(.13,.13,.13).rotateZ(Math.PI/4).translate(0,0,1.06),place:new kn(.045,14,10).translate(0,0,.62)}}ink(t,e=1.7){let n=`${t}:${e}`;return this.mats.has(n)||this.mats.set(n,new qe({color:new se(xh[t].ink).multiplyScalar(e)})),this.mats.get(n)}column(t){let e=document.createElement("canvas");e.width=8,e.height=256;let n=e.getContext("2d"),s=(t.column??[]).filter(a=>Number.isFinite(a.from_m)&&Number.isFinite(a.to_m)&&a.to_m>a.from_m);if(s.length){let a=Math.min(...s.map(o=>o.from_m)),l=Math.max(...s.map(o=>o.to_m));n.fillStyle="#9a9488",n.fillRect(0,0,8,256);for(let o of s)n.fillStyle=yh(o.what),n.fillRect(0,(o.from_m-a)/(l-a)*256,8,Math.max(2,(o.to_m-o.from_m)/(l-a)*256));n.fillStyle="rgba(0,0,0,0.35)";for(let o of s)n.fillRect(0,(o.to_m-a)/(l-a)*256-1,8,1.5)}else{n.fillStyle=xh[t.side].ink,n.fillRect(0,0,8,256),n.fillStyle="rgba(0,0,0,0.28)";for(let a=32;a<256;a+=32)n.fillRect(0,a,8,2)}let r=new Li(e);return r.colorSpace=Ie,new qe({map:r,color:new se(1.25,1.25,1.25)})}marker(t){let e=new $e;if(t.kind==="core")e.add(new pe(this.geo.core,this.column(t)),new pe(this.geo.cap,this.ink(t.side)));else{let n=new pe(this.geo.stem,this.ink("context",1.1));t.kind==="place"&&(n.scale.z=.6),e.add(n,new pe(this.geo[t.kind]??this.geo.dive,this.ink(t.side)))}return e.userData.feature=t,e}show(t){this.entry=t??null,this.focus=null,this.selected=null,this.rebuild()}setExtras(t){this.extras=t??[],this.rebuild()}setMode(t){ff[t]&&t!==this.mode&&(this.mode=t,this.rebuild())}setFocus(t){this.focus=t?.length?new Set(t):null,this.restyle()}select(t){this.selected=t??null,this.restyle()}get active(){return!!(this.entry||this.extras.length)}visible(){let t=new Set(ff[this.mode]);return[...this.entry?.features??[],...this.extras].filter(e=>t.has(e.side)&&e.geometry).sort((e,n)=>mf[e.side]-mf[n.side])}lit(t){return!this.focus||this.focus.has(t.id)||t.id===this.selected}rebuild(){for(let e of this.markers.values()){this.scene.remove(e);for(let n of e.children)n.material.map&&(n.material.map.dispose(),n.material.dispose())}this.markers.clear();let t=this.entry?.centre??(this.extras[0]&&{lon:_i(this.extras[0])[0],lat:_i(this.extras[0])[1]});this.origin=t?{lon:t.lon*yt,lat:t.lat*yt,frame:si(t.lon*yt,t.lat*yt)}:null,this.labels=[];for(let e of this.visible()){let[n,s]=_i(e),r={id:e.id,text:e.label,year:e.year??null,side:e.side,kind:e.kind,lon:n,lat:s,lift:0,lit:!0,feature:e};if(ly.has(e.kind)&&e.geometry.type==="Point"){let a=this.marker(e);a.userData.label=r,this.markers.set(e.id,a),this.scene.add(a)}e.label&&this.labels.push(r)}this.restyle()}restyle(){for(let t of this.labels)t.lit=this.lit(t.feature);for(let t of this.markers.values())t.userData.dim=!this.lit(t.userData.feature);this.dirty=!0,this.heights=0,this.world.stamp++}paint(t,e,n,s){let r=t.g,a=this.size,l=a/(2*n),o=si(e.lon,e.lat),h=[0,0,0];r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,a,a),r.lineJoin=r.lineCap="round";let u=([d,p])=>(xn(d*yt,p*yt,h),hn(h,o.up)<.05?null:[a/2+hn(h,o.east)*ne*l,a/2-hn(h,o.north)*ne*l]),c=(d,p)=>{let v=0,g=!1;r.beginPath();for(let m of d){let x=u(m);x&&(v++?r.lineTo(x[0],x[1]):r.moveTo(x[0],x[1]),x[0]>-200&&x[1]>-200&&x[0]<a+200&&x[1]<a+200&&(g=!0))}return p&&r.closePath(),g&&v>1},f=(d,p,v,g)=>{let m=Math.max(1.5,p*s);r.setLineDash([]),r.globalAlpha=.55*v,r.strokeStyle="#04070c",r.lineWidth=m+Math.max(2,2.4*s),r.stroke(),r.setLineDash(g?g.map(x=>Math.max(2,x*s)):[]),r.globalAlpha=v,r.strokeStyle=d,r.lineWidth=m,r.stroke(),r.setLineDash([])};for(let d of this.visible()){let p=d.side==="context"&&d.id!==this.selected?.55:1,v=xh[d.side].ink,g=this.lit(d),m=(g?1:.28)*p,x=d.id===this.selected,_=d.geometry,b=d.dash??(hy(d)?[7,6]:d.kind==="track"?[12,5]:null),S=(d.width??(d.kind==="structure"?3.2:d.kind==="survey-area"?1.8:d.kind==="outline"?1.9:2.2))*(x?1.5:1);for(let A of vf(_))c(A,!0)&&(d.fill!==!1&&(r.globalAlpha=(d.kind==="survey-area"?.13:d.kind==="dig"?.34:.1)*m*p*(x?1.6:1),r.fillStyle=v,r.fill()),f(v,S,m,b));for(let A of xf(_))c(A,!1)&&f(v,S,m,b);for(let A of yf(_)){let y=u(A);if(!y||y[0]<-50||y[1]<-50||y[0]>a+50||y[1]>a+50)continue;let T=(d.position?.error_m??0)*l;T>6*s&&(r.beginPath(),r.arc(y[0],y[1],T,0,Math.PI*2),r.globalAlpha=.07*m*p,r.fillStyle=v,r.fill(),f(v,1.1,.6*m,[5,5])),r.beginPath(),r.arc(y[0],y[1],Math.max(2.5,(x?5.5:3.6)*s),0,Math.PI*2),r.globalAlpha=m,r.fillStyle=v,r.fill(),r.globalAlpha=.7*m,r.strokeStyle="#04070c",r.lineWidth=Math.max(1,1.4*s),r.stroke(),x&&(r.beginPath(),r.arc(y[0],y[1],13*s,0,Math.PI*2),f("#ffffff",1.6,.9,null))}}r.globalAlpha=1,t.tex.needsUpdate=!0}update(){let{world:t}=this,e=t.globe.shared,n=t.control,s=this.active?1:0;if(this.on!==s&&(this.on=$t(this.on+(s?.08:-.12),0,1),t.stamp++),e.uDecalOn.value=this.on,!this.active||!this.origin)return null;let r=performance.now(),a=Math.max(n.range*.7,30),l=this.painted,o=l?Math.hypot((n.lon-l.lon)*Math.cos(l.lat),n.lat-l.lat)*ne:1/0;if((this.dirty||!l||o>l.half*.3||a>l.half*1.5||a<l.half*.62)&&(this.dirty||r-(l?.at??0)>160)){let k={lon:n.lon,lat:n.lat},M=2*Math.tan(n.fovY/2)*n.range/Math.max(t.renderer.domElement.clientHeight,1);this.paint(this.near,k,a,M/(2*a/this.size)),this.paint(this.far,k,a*pf,M/(2*a*pf/this.size)),this.painted={...k,half:a,at:r,frame:si(k.lon,k.lat)},this.dirty=!1,t.stamp++}let h=this.painted,u=h.frame.up,c=n.pos;if(e.uDecalO.value.set(u[0]*ne-c[0],u[1]*ne-c[1],u[2]*ne-c[2]),e.uDecalU.value.set(...h.frame.east).multiplyScalar(1/(2*h.half)),e.uDecalV.value.set(...h.frame.north).multiplyScalar(1/(2*h.half)),!this.markers.size)return null;let f=this.origin.frame,d=[f.up[0]*ne,f.up[1]*ne,f.up[2]*ne],p=k=>[hn(k,f.east),hn(k,f.north),hn(k,f.up)],v=n.basis,g=p(v.right),m=p(v.up),x=p([-v.fwd[0],-v.fwd[1],-v.fwd[2]]),_=p([c[0]-d[0],c[1]-d[1],c[2]-d[2]]),b=this.camera;b.matrix.set(g[0],m[0],x[0],_[0],g[1],m[1],x[1],_[1],g[2],m[2],x[2],_[2],0,0,0,1),b.matrixWorld.copy(b.matrix),b.matrixWorldInverse.copy(b.matrix).invert(),b.projectionMatrix.copy(t.camera.projectionMatrix),b.projectionMatrixInverse.copy(t.camera.projectionMatrixInverse);let S=this.tick++%20===0||this.heights<3;S&&this.heights++;let A=e.uExag.value,y=e.uWater.value>.5?e.uSea.value:-1e5,T=[0,0,0];for(let k of this.markers.values()){let M=k.userData.label;if(S||k.userData.h==null){let ft=Math.max(t.globe.heightAt(M.lon*yt,M.lat*yt)??0,y)*A;xn(M.lon*yt,M.lat*yt,T);let F=[T[0]*(ne+ft)-d[0],T[1]*(ne+ft)-d[1],T[2]*(ne+ft)-d[2]];k.position.set(...p(F)),k.quaternion.setFromUnitVectors(new pt(0,0,1),new pt(...p(T))),k.userData.h=ft}let H=Math.hypot(k.position.x-_[0],k.position.y-_[1],k.position.z-_[2]),J=H*.05*Math.min(1,n.range*1.25/H)**.6*(k.userData.feature.id===this.selected?1.3:1)*(k.userData.dim?.62:1);k.scale.setScalar(J),M.lift=J*(k.userData.feature.kind==="place"?.72:1.16),k.updateMatrixWorld(!0)}return{scene:this.scene,camera:b}}viewOf(t){if(!t){let s=this.entry;if(!s)return null;let r=s.features.map(l=>{let o=_i(l);return Math.hypot((o[0]-s.centre.lon)*Math.cos(s.centre.lat*yt),o[1]-s.centre.lat)*yt*ne+gf(l)/2}).sort((l,o)=>l-o),a=r.length?r[Math.min(r.length-1,Math.floor(r.length*.8))]:(s.radius_km??20)*1e3;return{lon:s.centre.lon*yt,lat:s.centre.lat*yt,range:$t(Math.max(a,2500)*2.9,6e3,6e6),tilt:46*yt,heading:0}}let[e,n]=_i(t);return{lon:e*yt,lat:n*yt,range:$t(Math.max(gf(t)*2.2,(t.position?.error_m??0)*6,900),400,6e6),tilt:50*yt,heading:this.world.control.heading}}};var xr={terrarium:{id:"terrarium",kind:"elevation",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:15,credit:"Terrain Tiles (Mapzen, AWS Open Data)"},s2:{id:"s2",kind:"image",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)"},bluemarble:{id:"bluemarble",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA Blue Marble Next Generation"},night:{id:"night",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA Black Marble"}},bf=(i,t={})=>{let e=t.phone??(Math.min(screen.width,screen.height)<600||matchMedia("(pointer: coarse)").matches),n=new dl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});n.outputColorSpace=xs,n.autoClear=!1;let s=new $n,r=new We(36,1,1,1e8),a=new yl({renderer:n,scene:s,segments:32,threshold:e?400:290,budget:e?170:400,layers:{elevation:xr.terrarium,base:xr.s2,globe:xr.bluemarble,overlay:null,night:xr.night}}),l=new _l(r,i,a),o=new wl(n,{samples:0,steps:e?14:28}),h={renderer:n,scene:s,camera:r,globe:a,control:l,pipeline:o,phone:e,sun:{azimuth:295,altitude:48,follow:!0,dir:new pt(1,0,0)},exposure:1.1,air:1,pixelCap:2,pixelBudget:e?14e5:26e5,scale:1,time:0,fps:60,onFrame:null,paused:!1,adaptive:!0,rest:!0,locals:[],stamp:0},u=()=>{let x=i.clientWidth||1,_=i.clientHeight||1,b=Math.min(devicePixelRatio||1,h.pixelCap),S=Math.min(b,Math.sqrt(h.pixelBudget/(x*_)))*h.scale,A=Math.max(2,Math.round(x*S)),y=Math.max(2,Math.round(_*S));return(i.width!==A||i.height!==y)&&(n.setSize(A,y,!1),r.aspect=x/_,r.updateProjectionMatrix()),o.setSize(A,y),[A,y]},c=()=>{let x=si(l.lon,l.lat),_=h.sun.azimuth*yt,b=h.sun.altitude*yt,S=Yn(En(x.up,Math.sin(b)),Yn(En(x.north,Math.cos(_)),x.east,Math.sin(_)),Math.cos(b));h.sun.follow&&h.sun.dir.set(S[0],S[1],S[2]).normalize()};h.city=new Fl(h),h.locals.push(h.city),h.evidence=new Ul(h),h.locals.push(h.evidence),l.floor=(x,_)=>h.city.floorAt?.(x,_)??null;let f=performance.now(),d=0,p=0,v="",g=0,m=x=>{if(requestAnimationFrame(m),h.paused){f=x;return}let _=$t((x-f)/1e3,.001,.1);f=x,h.time+=_,h.fps+=(1/_-h.fps)*.05;let b=a.loader.busy>0;_>1/38?b||(d++,p=0):_<1/55&&(p++,d=Math.max(0,d-1)),h.adaptive||(d=p=0),d>40&&h.scale>.55&&(h.scale=Math.max(.55,h.scale-.1),d=0),p>300&&h.scale<1&&(h.scale=Math.min(1,h.scale+.1),p=0);let[S,A]=u();h.beforeFrame?.(_),l.update(_),c();let y=`${h.stamp},${h.city.active},${h.sun.azimuth},${h.sun.altitude},${l.pos[0].toFixed(1)},${l.pos[1].toFixed(1)},${l.pos[2].toFixed(1)},${l.heading.toFixed(4)},${l.tilt.toFixed(4)},${l.shift[0].toFixed(3)},${l.shift[1].toFixed(3)},${S},${A}`,T=y!==v||a.loader.busy>0||l.pointers.size>0||h.snap;v=y,T?g=0:g++;let k=g>(h.restSoon?150:600)?h.restSoon?30:12:g>30?3:1;if(h.rest&&g%k){h.onFrame?.(_);return}let M=a.shared;M.uCamPos.value.set(l.pos[0],l.pos[1],l.pos[2]),M.uSun.value.copy(h.sun.dir),M.uTime.value=h.time,M.uPixAngle.value=2*Math.tan(l.fovY/2)/A,a.update(l.view(A));let H=1-$t((Math.sin(h.sun.altitude*yt)-.17)/.6,0,1);if(o.final.uniforms.uExposure.value=h.exposure*(1+.85*H),o.atmo.uniforms.uAir.value+=((M.uLens.value===0?1:.4)*h.air-o.atmo.uniforms.uAir.value)*Math.min(1,_*6),o.render(s,r,{pos:l.pos,basis:l.basis,tanY:Math.tan(l.fovY/2),aspect:r.aspect,near:r.near,far:r.far,sun:h.sun.dir,shift:l.shift},h.locals.map(J=>J.update()).filter(Boolean)),h.onFrame?.(_),h.snap){let J=h.snap;h.snap=null,i.toBlob(ft=>J(ft),"image/jpeg",.9)}};return requestAnimationFrame(m),h};var _h=[["sunken-land","Sunken lands"],["lost-city","Lost cities"],["remote-sensing-find","Found from above"],["treasure","Treasure"],["shipwreck","Shipwrecks"],["tomb","Tombs"],["relic","Relics"]],iS=Object.fromEntries(_h),bh={"sunken-land":"Sunken land","lost-city":"Lost city","remote-sensing-find":"Found from above",treasure:"Treasure",shipwreck:"Shipwreck",tomb:"Tomb",relic:"Relic"},Sf={legend:"Legend",unlocated:"Not found yet",disputed:"Disputed",found:"Found",hoax:"Hoax"},Ps={confirmed:"Confirmed",mainstream:"Leading view",plausible:"Plausible",fringe:"Fringe",rejected:"Rejected",hoax:"Hoax"},kl={found:"Found here",candidate:"Proposed","search-area":"Search area",claimed:"Claimed find",inspiration:"Possible inspiration",origin:"Where it began"},wf={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Mf={found:0,candidate:1,"search-area":2,inspiration:3,claimed:4,origin:5},Cs=i=>(i??"").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),Tf=async(i="./")=>{let t=globalThis.__DATA__,e=(d,p)=>t?.[d]?Promise.resolve(t[d]):fetch(i+d).then(v=>v.ok?v.json():p).catch(()=>p),[n,s,r,a,l,o,h,u,c]=await Promise.all([e("legends.json",{legends:[]}),e("sources.json",{sources:[]}),e("reconstruction.json",null),e("case.json",null),e("evidence.json",null),e("worldfit.json",null),e("audio/index.json",null),e("open.json",null),e("story-media.json",null)]),f=(n.legends??[]).filter(d=>d&&d.id&&d.name&&Array.isArray(d.places));for(let d of f){d.places=d.places.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)),d.main=[...d.places].sort((p,v)=>(wf[p.standing]??9)-(wf[v.standing]??9)||(Mf[p.role]??9)-(Mf[v.role]??9))[0]??null,d.key=Cs([d.name,...d.aka??[]].join(" ")),d.tagKey=Cs((d.tags??[]).join(" "));for(let p of d.places)p.key=Cs(p.name)}return{legends:f.filter(d=>d.main),sources:s.sources??[],reconstruction:r,cas:a,evidence:l?.sites??[],worldfit:o,audio:h,open:u,storyMedia:c?.media??[],checked:n.checked??null}},Ef=i=>{let e=[...i.trim().toUpperCase().replace(/[′’]/g,"'").replace(/[″”]/g,'"').matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter(o=>o[0].trim());if(e.length!==2)return null;let n=o=>(Math.abs(Number(o[1]))+Number(o[2]??0)/60+Number(o[3]??0)/3600)*(Number(o[1])<0||o[4]==="S"||o[4]==="W"?-1:1),[s,r]=e;/[EW]/.test(s[4]??"")&&/[NS]/.test(r[4]??"")&&([s,r]=[r,s]);let a=n(s),l=n(r);return!Number.isFinite(a)||!Number.isFinite(l)||Math.abs(a)>90||Math.abs(l)>180?null:{lat:a,lon:l}},Af=(i,t,e=8)=>{let n=Cs(t);if(!n)return[];let s=[];for(let r of i){let a=0;r.key.startsWith(n)?a=100:r.key.split(" ").some(l=>l.startsWith(n))?a=80:r.key.includes(n)?a=60:r.tagKey.split(" ").includes(n)&&(a=30),a&&s.push({score:a,legend:r});for(let l of r.places){let o=l.key.startsWith(n)?55:l.key.split(" ").some(h=>h.startsWith(n))?45:l.key.includes(n)&&n.length>2?25:0;o&&o>a-30&&s.push({score:o,legend:r,place:l})}}return s.sort((r,a)=>a.score-r.score||r.legend.name.localeCompare(a.legend.name)).slice(0,e)},wh=(i,t)=>{let e=t?{...i.access,...t}:i.access;if(!i.browser?.ok||!e?.url||!["xyz","wmts","wms","arcgis-image","arcgis-map"].includes(i.access.type)||e.crs&&e.crs!=="EPSG:3857"||i.kind==="elevation-tiles")return null;let n=e.url.includes("{z}");if(!n&&!e.url.includes("{bbox}"))return null;let s=i.resolution_m&&i.resolution_m<=30?Math.min(11,Math.max(0,Math.round(15-Math.log2(i.resolution_m))-5)):0;return{id:`src-${i.id}${t?`-${t.id}`:""}`,kind:"image",url:e.url,size:n?256:512,every:n?1:2,minZoom:Math.max(i.access.min_zoom??0,s,n?0:3),maxZoom:i.access.max_zoom??15,maxActive:n?8:4,bbox:i.coverage?.bbox??null,asIs:i.kind==="hillshade"||i.kind==="colour-relief"||i.kind==="anomaly-map"||i.kind==="coverage-map",credit:i.license?.attribution??i.name}};var ls=parent!==window,uy=0,Mh=new Map;addEventListener("message",i=>{i.source!==parent||i.data?.abstracts!=="result"||(Mh.get(i.data.id)?.(i.data),Mh.delete(i.data.id))});var bi=(i,t={})=>new Promise((e,n)=>{if(!ls)return n(Object.assign(new Error("standalone"),{code:"unsupported"}));let s=`c${++uy}`;Mh.set(s,r=>r.ok?e(r.value):n(Object.assign(new Error(r.error?.message??"failed"),{code:r.error?.code??"failed"}))),parent.postMessage({abstracts:"call",id:s,method:i,params:t},"*")}),Rf=async()=>{if(!ls)return null;for(let i=0;i<3;i++){let t=await Promise.race([bi("hello"),new Promise(e=>setTimeout(e,500,null))]).catch(()=>null);if(t)return t}return null},Cf=i=>{if(globalThis.__LAYOUT__)return i(globalThis.__LAYOUT__);if(!ls)return i("viewport");let t="content";i(t),addEventListener("message",e=>{if(e.source!==parent)return;let n=e.data?.abstractsLayout;n!=="content"&&n!=="viewport"||(n==="viewport"&&parent.postMessage({abstractsLayout:"viewport"},"*"),n!==t&&(t=n,i(t)))}),parent.postMessage({abstractsLayout:"request"},"*")},Pf=i=>{ls&&i>0&&Number.isFinite(i)&&parent.postMessage({abstractsHeight:Math.ceil(i)},"*")};var Re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ga=i=>i.replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(),Rn={confirmed:{label:"Tested, and the result stands",short:"Result stands",tone:"good",d:"M4.2 7.4l2 2 3.8-4.6"},refuted:{label:"The claim was shown wrong",short:"Shown wrong",tone:"bad",d:"M4.5 4.5l5 5M9.5 4.5l-5 5"},corrected:{label:"The claim was corrected",short:"Corrected",tone:"warn",d:"M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0"},unresolved:{label:"Still open",short:"Still open",tone:"info",d:"M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1"},"never-tested":{label:"Never tested",short:"Never tested",tone:"mut",d:""},"no-claim":{label:"Made no claim about Atlantis",short:"No claim",tone:"mut",d:"M4.5 7h5"}},va=i=>{let t=Rn[i]??Rn["never-tested"];return`<svg class="g g-${t.tone}${t.d?"":" hollow"}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${t.d?`<path d="${t.d}"/>`:""}</svg>`},Is=i=>i==="fit"?'<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>':i==="brk"?'<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>':'<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>',If=(i,t)=>{let e=i.places,n=new Map;for(let r of e)for(let a of[...r.fits??[],...r.conflicts??[]])n.set(a,(n.get(a)??0)+1);let s=t.claims.filter(r=>r.testable);return{places:e.length,found:e.filter(r=>r.standing==="confirmed"||r.standing==="mainstream").length,checked:e.filter(r=>(r.tests??[]).length).length,checkable:s.length,unmeasured:s.filter(r=>!n.has(r.id)),used:n,searches:t.searches.length,open:t.searches.filter(r=>r.status==="unresolved").length,first:t.searches[0]?.year,last:t.searches.at(-1)?.year}},dy=i=>[[i.places,"places proposed"],[i.found,"where Plato's city has been found"],[i.places-i.checked,"never checked on the ground"],[`${i.unmeasured.length} of ${i.checkable}`,"of Plato's checkable details never measured anywhere"]].map(([t,e])=>`<div class="tile"><b>${t}</b><span>${Re(e)}</span></div>`).join(""),fy=(i,t)=>`<ol class="tl">${i.searches.map(e=>`<li><button class="tl-b${e.id===t?" on":""}" data-search="${Re(e.id)}" aria-label="${e.year}: ${Re(e.title)}. ${Re(Rn[e.status]?.label??"")}">${va(e.status)}<span>${e.year}</span></button></li>`).join("")}</ol>`,py=i=>`<div class="key">${Object.entries(Rn).map(([t,e])=>`<span>${va(t)}<b>${i.searches.filter(n=>n.status===t).length}</b> ${Re(e.short.toLowerCase())}</span>`).join("")}</div>`,Lf=(i,t)=>`
  <div class="pop-h">${va(i.status)}<b>${i.year} \xB7 ${Re(i.title)}</b></div>
  <div class="pop-s">${Re(Rn[i.status]?.label??"")}${i.who?` \xB7 ${Re(i.who)}`:""}</div>
  ${i.announced?`<p><em>Said:</em> ${Re(i.announced)}</p>`:""}
  <p><em>How it ended:</em> ${Re(i.outcome)}</p>
  <div class="row">${i.place?`<button class="btn primary" data-go="${Re(i.place)}">Go to ${Re(t??"the place")}</button>`:""}${/^https?:/.test(i.source??"")?`<a class="btn" href="${Re(i.source)}" target="_blank" rel="noopener">Source</a>`:""}</div>`,Df=(i,t,e,n)=>{let s=Object.fromEntries(t.claims.map(c=>[c.id,c])),r=[...e.used.keys()].filter(c=>s[c]).sort((c,f)=>e.used.get(f)-e.used.get(c)),a=e.unmeasured.map(c=>c.id),l=[...i.places].sort((c,f)=>(f.tests??[]).length-(c.tests??[]).length||(f.fits??[]).length+(f.conflicts??[]).length-((c.fits??[]).length+(c.conflicts??[]).length)||c.name.localeCompare(f.name)),o=(c,f)=>`<th class="col${f?" dim":""}"><button data-claim="${Re(c)}"><span>${Re(s[c].short)}</span></button></th>`,h=(c,f)=>{let d=(c.fits??[]).includes(f),p=(c.conflicts??[]).includes(f);if(!d&&!p)return'<td class="c"></td>';let v=d&&p?"both":d?"fit":"brk";return`<td class="c"><button data-cell="${Re(c.id)}|${Re(f)}|${v}" aria-label="${Re(c.name)}: ${v==="fit"?"said to fit":v==="brk"?"breaks":"argued both ways"} ${Re(s[f].short)}">${Is(v)}</button></td>`},u=l.map(c=>{let f=(c.tests??[]).length;return`<tr><th scope="row"><button data-go="${Re(c.id)}">${Re(ga(c.name))}${n.has(c.id)?'<i class="has-scene"></i>':""}</button></th>${r.map(d=>h(c,d)).join("")}${a.map(()=>'<td class="c dim"></td>').join("")}<td class="n">${f?`<b>${f}</b>`:"<span>0</span>"}</td><td class="v"><i class="sdot p-${Re(c.standing)}"></i>${Re(Ps[c.standing]??c.standing)}</td></tr>`}).join("");return`
    <div class="tiles">${dy(e)}</div>
    <h3>${e.searches} searches, ${e.first} to ${e.last}</h3>
    
    <div class="tl-wrap">${fy(t)}</div>
    ${py(t)}
    <h3>Each place against what Plato wrote</h3>
    
    <div class="grid-wrap"><table class="grid">
      <thead><tr><th></th>${r.map(c=>o(c,!1)).join("")}${a.map(c=>o(c,!0)).join("")}<th class="flat">Field<br>checks</th><th class="flat l">Standing</th></tr></thead>
      <tbody>${u}</tbody>
    </table></div>
    <div class="key"><span>${Is("fit")}said to fit</span><span>${Is("brk")}breaks</span><span>${Is("both")}argued both ways</span><span><i class="has-scene"></i>has a scene to explore</span><span class="dimkey">shaded columns: never measured anywhere</span></div>
    `},Nf=(i,t)=>`
  <div class="pop-h"><b>${Re(i.short)}</b></div>
  <div class="pop-s">${Re(i.ref)}${i.testable?"":" \xB7 not something the ground can test"}</div>
  <p>${Re(i.label)}</p>
  ${i.quote?`<p class="quote">\u201C${Re(i.quote)}\u201D</p>`:""}
  ${i.testable&&i.how_to_test?`<p><em>How to check it:</em> ${Re(i.how_to_test)}</p>`:""}
  <p class="pop-s">${t?`Held against ${t} place${t===1?"":"s"}.`:"Not held against any place yet."}</p>`;var my="https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",Ol=new Map,Bl=null,gy=(i,t,e)=>{let n=`${i}/${t}/${e}`;return Ol.has(n)||Ol.set(n,(async()=>{let s=await fetch(my.replace("{z}",i).replace("{x}",t).replace("{y}",e),{signal:AbortSignal.timeout(25e3)});if(!s.ok)throw new Error(`elevation tile ${n}: HTTP ${s.status}`);let r=await createImageBitmap(await s.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"});Bl??=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256)).getContext("2d",{willReadFrequently:!0}),Bl.clearRect(0,0,256,256),Bl.drawImage(r,0,0),r.close?.();let a=Bl.getImageData(0,0,256,256).data,l=new Float32Array(65536);for(let o=0;o<65536;o++)l[o]=a[o*4]*256+a[o*4+1]+a[o*4+2]/256-32768;return l})().catch(s=>{throw Ol.delete(n),s})),Ol.get(n)},zl=async(i,t)=>{t=$t(Math.round(t),0,10);let e=2**t,n=new Map,s=i.map(([a,l])=>{let o=ss(a*yt,t),h=$t(rs(l*yt,t),0,e-1e-6),u=(Math.floor(o)%e+e)%e,c=Math.floor(h);return n.set(`${u}/${c}`,[u,c]),[`${u}/${c}`,$t(Math.floor((o-Math.floor(o))*256),0,255),$t(Math.floor((h-c)*256),0,255)]}),r=new Map(await Promise.all([...n].map(async([a,[l,o]])=>[a,await gy(t,l,o)])));return s.map(([a,l,o],h)=>lh(r.get(a)[o*256+l],i[h][0],i[h][1]))},Hl=(i,t)=>$t(Math.round(Math.log2(400750167e-1*Math.cos(t*yt)/256/i)),0,10);var xa={lat:35.97389,lon:-5.51611},yr=(i,t,e,n)=>{let s=n/ne,r=e*yt,a=i*yt,l=t*yt,o=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r));return[((l+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(o)))/yt+540)%360-180,o/yt]},vy=(i,t,e,n)=>{let s=Math.sin((e-i)*yt/2)**2+Math.cos(i*yt)*Math.cos(e*yt)*Math.sin((n-t)*yt/2)**2;return 2*ne*Math.asin(Math.min(1,Math.sqrt(s)))},xy=(i,t,e,n)=>{let s=Math.sin((n-t)*yt)*Math.cos(e*yt),r=Math.cos(i*yt)*Math.sin(e*yt)-Math.sin(i*yt)*Math.cos(e*yt)*Math.cos((n-t)*yt);return(Math.atan2(s,r)/yt+360)%360},yy=["north","north-east","east","south-east","south","south-west","west","north-west"],Gl=i=>yy[Math.round(i/45)%8],Sh=i=>{let t=n=>i.claims.find(s=>s.id===n)??{numbers:[]},e=(n,s)=>t(n).numbers.find(r=>r.what.startsWith(s))?.value;return{island:e("central-island-diameter","diameter"),rings:t("ring-widths").numbers.reduce((n,s)=>n+s.value,0),canal:e("canal-to-sea","canal length"),wall:e("outer-wall-50-stades","distance"),plainLong:e("great-plain","plain length"),plainWide:e("great-plain","plain width"),canalGap:e("plain-canals","spacing"),refs:{rings:t("ring-widths").ref,island:t("central-island-diameter").ref,canal:t("canal-to-sea").ref,wall:t("outer-wall-50-stades").ref,plain:t("great-plain").ref,canals:t("plain-canals").ref,pillars:t("beyond-pillars").ref,years:t("nine-thousand-years").ref}}},Ff=i=>{let t=[...i].sort((n,s)=>n-s),e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{low:e(.05),mid:e(.5),high:e(.95),min:t[0],max:t[t.length-1]}},Uf=async({lat:i,lon:t,sea:e,cas:n,stadion:s=185})=>{let r=Sh(n),a=s,l=(r.island/2+r.rings)*a,o=l+r.wall*a,h={lat:i,lon:t,sea:e,stadion:a,plato:r,ringR:l,wallR:o,made:new Date().toISOString().slice(0,10)},u=Hl(120,i),c=[];for(let N=-l;N<=l;N+=110)for(let L=-l;L<=l;L+=110)L*L+N*N<=l*l&&c.push([t+L/(ne*Math.cos(i*yt))/yt,i+N/ne/yt]);let f=await zl(c,u),d=Ff(f);h.rings={across:2*l,low:d.min,high:d.max,mid:d.mid,relief:d.high-d.low,underSea:f.filter(N=>N<e).length/f.length,here:f[Math.floor(f.length/2)],zoom:u};let p=h.rings.mid>=e;h.dry=p;let v=Hl(260,i),g=[],m=400,x=15e4;for(let N=0;N<360;N+=5)for(let L=m;L<=x;L+=m)g.push([N,L,yr(i,t,N,L)]);let _=await zl(g.map(N=>N[2]),v),b=null;for(let N=0;N<g.length;N++)(p?_[N]<e:_[N]>=e)&&(!b||g[N][1]<b.distance)&&(b={distance:g[N][1],bearing:g[N][0],at:g[N][2]});h.shore=b?{...b,kind:p?"sea":"land"}:{distance:null,bearing:null,kind:p?"sea":"land",beyond:x},h.canal={want:r.canal*a+l,from:"centre"};let S=p?h.shore.bearing??180:((h.shore.bearing??0)+180)%360,A=(S+180)%360,y=(S+90)%360,T=p&&h.shore.distance!=null?h.shore.distance:0,k=r.plainLong*a,M=r.plainWide*a,H=(N,L)=>{let st=yr(i,t,S,T-L);return yr(st[1],st[0],y,N)},J=Hl(Math.max(1200,k/110),i),ft=[];for(let N=0;N<44;N++)for(let L=0;L<66;L++)ft.push(H(((L+.5)/66-.5)*k,(N+.5)/44*M));let F=await zl(ft,J),V=F.filter(N=>N>=e),O=V.length?Ff(V):null;h.plain={long:k,wide:M,land:V.length/F.length,low:O?.low??null,high:O?.high??null,mid:O?.mid??null,level:O?V.filter(N=>Math.abs(N-O.mid)<=100).length/F.length:0,inland:A,zoom:J};let Y=vy(i,t,xa.lat,xa.lon),lt=t>xa.lon&&t<42&&i>30&&i<47.5;h.strait={distance:Y,bearing:xy(xa.lat,xa.lon,i,t),inside:lt};let et=(N,L=96)=>Array.from({length:L+1},(st,nt)=>yr(i,t,nt/L*360,N)),X=(N,L,st,nt={})=>({id:`plato-${N}`,side:"plato",kind:"outline",label:L,geometry:st,fill:!1,...nt}),G=[X("rings",`Plato's rings, ${(2*l/1e3).toFixed(1)} km across`,{type:"Polygon",coordinates:[et(l)]},{fill:!0,width:2.4}),X("island",null,{type:"LineString",coordinates:et(r.island/2*a,48)},{width:1.4}),X("wall",`Outer wall, ${r.wall} stades out`,{type:"LineString",coordinates:et(o,128)},{width:1.8,dash:[9,6]}),X("canal",`Canal, ${r.canal} stades`,{type:"LineString",coordinates:[yr(i,t,S,l),yr(i,t,S,o)]},{width:2.6}),X("plain",`The plain, ${Math.round(k/1e3)} by ${Math.round(M/1e3)} km`,{type:"Polygon",coordinates:[[H(-k/2,0),H(k/2,0),H(k/2,M),H(-k/2,M),H(-k/2,0)]]},{width:2.2})],$=[];for(let N=-k/2+r.canalGap*a;N<k/2-1;N+=r.canalGap*a)$.push([H(N,0),H(N,M/2),H(N,M)]);return G.push(X("canals",null,{type:"MultiLineString",coordinates:$},{width:.9})),h.shapes=G,h.seaBearing=S,h};var _y={"survey-area":"Survey",track:"Track",core:"Core",sample:"Sample",dive:"Dive",dig:"Dig",structure:"Claimed shape",outline:"Outline",place:"Place"},by={"from-dataset":"Position from an open data record","stated-coordinates":"Position printed in the source","digitised-from-figure":"Position read off a map in the source","from-description":"Position from a description only"},kf={claimed:"Claimed",checked:"Checked",found:"Found",context:"Places"},Of={"survey-area":'<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>',track:'<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',core:'<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>',sample:'<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',dive:'<circle cx="7" cy="7" r="4" fill="currentColor"/>',dig:'<path d="M3 3h8v8H3z" fill="currentColor"/>',structure:'<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',outline:'<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>',place:'<circle cx="7" cy="7" r="2.200" fill="currentColor"/>'},wy=i=>`<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${Of[i]??Of.place}</svg>`,Bf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,metres:l,toast:o,setSheet:h,body:u,eyebrow:c,stage:f,pinsEl:d,project:p}=i,{control:v,globe:g}=t,m=g.shared,x=t.evidence,_=e.legends.find(R=>R.id==="atlantis"),b=e.cas;if(!_||!b)return null;let S=new Map(e.evidence.map(R=>[R.place,R])),A=new Map(_.places.map(R=>[R.id,R])),y=Object.fromEntries(b.claims.map(R=>[R.id,R])),T=If(_,b),k=Sh(b),M=n.a={view:"list",scene:null,mode:"all",step:-1,feature:null,search:null,sea:null,fit:null,tour:null,more:!1},H=R=>{let B=/^(.{40,220}?[.!?])(\s|$)/.exec(R??"");return B?B[1]:R??""},J=R=>R>=1e5?`${Math.round(R/1e3).toLocaleString("en")} km`:R>=1e4?`${(R/1e3).toFixed(0)} km`:R>=1e3?`${(R/1e3).toFixed(1)} km`:`${Math.round(R)} m`,ft=null,F=(R,B)=>{let K=m.uSea.value,w=performance.now(),I=$t(Math.abs(R-K)*22,500,2600);cancelAnimationFrame(ft);let U=()=>{let C=$t((performance.now()-w)/I,0,1),q=C*C*(3-2*C);i.setSea(K+(R-K)*q,!1),C<1?ft=requestAnimationFrame(U):B?.()};U()},V=()=>{M.sea&&Math.abs(m.uSea.value-M.sea.to)<.6&&F(M.sea.from),M.sea=null},O=R=>{let B=(R.tests??[]).length;return`<button class="prow" data-act="a-place" data-id="${r(R.id)}"><i class="sdot p-${r(R.standing)}${B?"":" hollow"}"></i><span class="pn">${r(ga(R.name))}${S.has(R.id)?'<em class="sc">scene</em>':""}</span><small>${B?`${B} check${B===1?"":"s"}`:"never checked"}</small></button>`},Y=()=>{M.view="list",c.innerHTML='Atlantis <span class="tag s-legend">Legend</span>';let R=[..._.places].sort((B,K)=>Number(S.has(K.id))-Number(S.has(B.id))||(K.tests??[]).length-(B.tests??[]).length||B.name.localeCompare(K.name));u.innerHTML=`
      <h2>Where was Atlantis?</h2>
      <p class="lead">${r(H(_.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${S.size} places with a scene to explore</h3>
      ${R.filter(B=>S.has(B.id)).map(O).join("")}
      <h3>The other ${_.places.length-S.size} proposals</h3>
      ${R.filter(B=>!S.has(B.id)).map(O).join("")}
      
      ${_.origin?.url?`<p class="note">Where the story comes from: ${a(_.origin.url,_.origin.text??"source")}</p>`:""}`},lt=R=>{let B=b.places[R.id]??{fits:{},breaks:{}},K=(q,it)=>`<button class="sc-chip ${it}" data-act="a-claim" data-id="${r(q)}" data-place="${r(R.id)}" data-kind="${it}">${Is(it)}${r(y[q]?.short??q)}</button>`,w=(R.fits??[]).filter(q=>y[q]),I=(R.conflicts??[]).filter(q=>y[q]),U=w.filter(q=>I.includes(q)),C=T.checkable-new Set([...w,...I].filter(q=>y[q].testable)).size;return!w.length&&!I.length?`<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${T.checkable} could be checked.</p>`:`<h3>Against Plato</h3><div class="score">${w.filter(q=>!U.includes(q)).map(q=>K(q,"fit")).join("")}${U.map(q=>K(q,"both")).join("")}${I.filter(q=>!U.includes(q)).map(q=>K(q,"brk")).join("")}</div>
      ${B.reason,""}`},et=()=>M.scene?x.visible().filter(R=>R.side!=="plato"):[],X=R=>`
    <div class="fcard">
      <p>${r(R.what)}</p>
      ${R.result?`<p><b>${R.side==="claimed"?"What a check showed":"Result"}:</b> ${r(R.result)}</p>`:""}
      ${(R.column??[]).length?`<div class="strata">${R.column.map(B=>`<div><i style="background:${i.strataColour(B.what)}"></i><span>${B.from_m}\u2013${B.to_m} m \xB7 ${r(B.what)}${B.age?` \xB7 ${r(B.age)}`:""}</span></div>`).join("")}</div>`:""}
      ${R.evidence?`<p class="quote">\u201C${r(R.evidence)}\u201D</p>`:""}
      <p class="note" style="margin:0">${r(by[R.position?.how]??"")}${Number.isFinite(R.position?.error_m)?`, give or take ${J(R.position.error_m)}`:""}. ${a(R.source,"Source")}${R.position?.source&&R.position.source!==R.source?` \xB7 ${a(R.position.source,"position")}`:""}</p>
    </div>`,G=()=>{let R=et();return R.length?["claimed","checked","found","context"].map(B=>{let K=R.filter(w=>w.side===B);return K.length?`<div class="fgroup s-${B}"><h4><i></i>${kf[B]} \xB7 ${K.length}</h4>${K.map(w=>`<button class="feat${w.id===M.feature?" on":""}" data-act="a-feature" data-id="${r(w.id)}">${wy(w.kind)}<span>${r(w.label)}</span><small>${r([_y[w.kind],w.year].filter(Boolean).join(" \xB7 "))}</small></button>${w.id===M.feature?X(w):""}`).join("")}</div>`:""}).join(""):'<p class="note">Nothing in this view. Try <b>Both</b>.</p>'},$=()=>{let R=M.scene;if(M.step>=0){let K=R.story[M.step];return`<span class="tag s-${K.side==="claimed"?"claimed":K.side==="checked"?"checked":"found"}">${M.step+1} of ${R.story.length} \xB7 ${r(kf[K.side]??K.side)}</span> ${r(K.line)}`}let B=(K,w)=>`<b class="w-${K}">${w}.</b> ${r(R[K].line)} <small>${r([R[K].who,R[K].year].filter(Boolean).join(", "))} \xB7 ${a(R[K].source,"source")}</small>`;return M.mode==="claimed"?B("claimed","Claimed"):M.mode==="found"?B("found","Found"):`${B("claimed","Claimed")}<br>${B("found","Found")}`},N=R=>{let B=(R.best_layers??[]).map(K=>i.overlays.find(w=>w.id===K)).filter(Boolean).slice(0,5);return B.length?`<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${B.map(K=>`<button class="chip${n.overlay?.id===K.id?" on":""}" data-act="a-layer" data-id="${r(K.id)}">${r(K.s.name.replace(/\s*\(.*?\)/g,""))}</button>`).join("")}</div>`:""},L=()=>{let R=M.scene;return`
      <div class="seg modes">${[["claimed","Claimed"],["found","Found"],["all","Both"]].map(([B,K])=>`<button data-act="a-mode" data-v="${B}" class="${M.mode===B&&M.step<0?"on":""} m-${B}">${K}</button>`).join("")}</div>
      <p class="lead" id="a-line">${$()}</p>
      ${R.story.length?`<div class="steps"><span>Walk through it</span>${R.story.map((B,K)=>`<button data-act="a-step" data-i="${K}" class="s-${r(B.side)}${K===M.step?" on":""}" aria-label="Step ${K+1}">${K+1}</button>`).join("")}<button class="nx" data-act="a-next" aria-label="Next step">${M.step>=R.story.length-1?"Start over":M.step<0?"Start \u203A":"Next \u203A"}</button></div>`:""}
      <div id="a-features">${G()}</div>
      ${N(R)}
      ${R.measurements.length?`<h3>Measured here</h3><div class="meas">${R.measurements.slice(0,M.more?99:5).map(B=>`<div><span>${r(B.what)}</span><b>${r(typeof B.value=="number"?B.value.toLocaleString("en"):B.value)} ${r(B.unit??"")}</b>${B.plato_value?`<small>Plato: ${r(B.plato_value)}</small>`:""}<small>${a(B.source,"source")}</small></div>`).join("")}</div>${R.measurements.length>5&&!M.more?`<button class="linkish" data-act="a-more">All ${R.measurements.length} measurements</button>`:""}`:""}`},st=R=>`
    <details class="full"><summary>Read the full case</summary>
      ${R.claim?`<p>${r(R.claim)}</p>`:""}
      ${R.against?`<p><b>Against:</b> ${r(R.against)}</p>`:""}
      ${R.proposed_by?.length?`<p>Proposed by ${r(R.proposed_by.slice(0,4).map(B=>`${B.who}${B.year?` (${B.year})`:""}`).join(", "))}.</p>`:""}
      ${(R.tests??[]).map(B=>`<p><b>Checked:</b> ${r(B.what)}${B.who?` (${r(B.who)}${B.year?`, ${B.year}`:""})`:""}. ${r(B.result)} ${B.url?a(B.url,"Source"):""}</p>`).join("")}
      ${M.scene?.not_located?.length?`<p><b>Could not be placed on the map:</b></p><ul>${M.scene.not_located.slice(0,8).map(B=>`<li>${r(B.what)}${B.why?` <span class="why">(${r(B.why)})</span>`:""}</li>`).join("")}</ul>`:""}
      <p class="note">${An(R.lat,R.lon,3)}${R.precision_km?`, give or take ${R.precision_km} km`:""}${R.underwater?", under water":""}</p>
      ${(R.sources??[]).map(B=>`<a class="src" href="${r(B.url)}" target="_blank" rel="noopener">${r(B.title??B.url)}</a>`).join("")}
    </details>`,nt=()=>{let R=n.place,B=M.scene,K=R.proposed_by?.[0],w=(R.tests??[]).length;M.view="place",c.innerHTML=`${r(kl[R.role]??"Proposed")} <span class="tag t-${r(R.standing)}">${r(Ps[R.standing]??R.standing)}</span>`;let I=u.scrollTop;u.innerHTML=`
      <button class="back" data-act="a-list">\u2039 All ${_.places.length} places</button>
      <h2>${r(R.name)}</h2>
      <div class="when">${K?`Proposed by ${r(K.who)}${K.year?`, ${K.year}`:""}`:""}${R.event_date?`${K?" \xB7 ":""}needs ${r(R.event_date)}`:""}</div>
      ${B?L():`<p class="lead">${r(H(R.claim))}</p>${R.against?`<p class="lead"><b class="w-found">Against.</b> ${r(H(R.against))}</p>`:""}`}
      ${lt(R)}
      ${B?"":`<h3>Checks on the ground \xB7 ${w}</h3>${w?R.tests.map(U=>`<div class="check1">${va("confirmed")}<span><b>${r(U.what)}</b>${U.who?` \xB7 ${r(U.who)}${U.year?`, ${U.year}`:""}`:""}<br>${r(H(U.result))} ${U.url?a(U.url,"Source"):""}</span></div>`).join(""):'<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${B?.needs_sea_level?`<button class="btn${M.sea?" on":""}" data-act="a-sea">${M.sea?"Sea back to where it was":`${B.needs_sea_level.m<0?"Lower":"Raise"} the sea to ${l(B.needs_sea_level.m)}`}</button>`:""}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${st(R)}`,u.scrollTop=I},ut=()=>x.viewOf(null),j=(R,B=!0)=>{let K=n.place;n.legend=_,n.place=R;let w=S.get(R.id)??null;(K!==R||M.scene!==w)&&(V(),M.mode="all",M.step=-1,M.feature=null,M.more=!1,M.fit=null),M.scene=w,w?.dem&&!w.dem.asked&&(w.dem.asked=!0,Td(w.dem,globalThis.__ASSETS__||"./").then(I=>{I&&(g.refresh(I.bbox),t.stamp++)})),x.show(w),x.setExtras([]),x.setMode(M.mode),h("legend"),u.scrollTop=0,nt(),B&&v.flyTo(w?ut():i.viewFor(R)),w?.needs_sea_level?.m<0&&B&&!M.sea&&Math.abs(m.uSea.value-w.needs_sea_level.m)>.6&&m.uWater.value>.5&&(M.sea={from:m.uSea.value,to:w.needs_sea_level.m},setTimeout(()=>{M.sea&&n.place===R&&(F(M.sea.to),o(`Sea lowered to ${l(M.sea.to)}: ${w.needs_sea_level.when??"what this proposal needs"}`,4200),nt())},B?1700:0))},ct=()=>{vt(),n.legend=_,n.place=null,h("legend"),u.scrollTop=0,Y()},vt=()=>{V(),M.scene=null,M.step=-1,M.feature=null,x.show(null),x.setExtras([]),M.fit=null},mt=R=>{M.mode=R,M.step=-1,M.feature=null,x.setMode(R),x.setFocus(null),x.select(null),nt()},P=R=>{let B=M.scene.features.filter(C=>R.includes(C.id));if(!B.length)return ut();let K=B.map(_i),w=K.reduce((C,q)=>C+q[0],0)/K.length,I=K.reduce((C,q)=>C+q[1],0)/K.length,U=0;for(let C of B){let q=x.viewOf(C);U=Math.max(U,q.range/2.2+Math.hypot((_i(C)[0]-w)*Math.cos(I*yt),_i(C)[1]-I)*yt*63710088e-1)}return{lon:w*yt,lat:I*yt,range:$t(U*2.6,900,ut().range*1.2),tilt:48*yt,heading:v.heading}},ot=R=>{let B=M.scene;if(B?.story.length){if(M.step=R>=B.story.length?-1:R,M.feature=null,x.select(null),M.step<0)M.mode="all",x.setMode("all"),x.setFocus(null),v.flyTo(ut(),1.6);else{let K=B.story[M.step];M.mode="all",x.setMode("all"),x.setFocus(K.show??[]),K.show?.length&&v.flyTo(P(K.show),1.8)}nt()}},Z=(R,B=!0)=>{let K=M.scene?.features.find(w=>w.id===R);M.feature=K&&M.feature!==R?R:null,x.select(M.feature),M.feature&&B&&v.flyTo(x.viewOf(K),1.5),n.sheet!=="legend"&&h("legend"),nt(),M.feature&&u.querySelector(".feat.on")?.scrollIntoView({block:"nearest",behavior:"smooth"})},ht=new Map,at=new Set,wt=[0,0],Pt=R=>{let B=ht.get(R.id);return B||(B=document.createElement("button"),B.className="mark",B.innerHTML="<i></i><span></span>",B.addEventListener("click",K=>{K.stopPropagation(),R.side!=="plato"&&Z(R.id,!1)}),d.appendChild(B),ht.set(R.id,B)),B._l=R,B},Jt=()=>{let R=new Set;if(x.active&&x.labels.length){let B=f.clientWidth,K=f.clientHeight,w=[],I=x.labels.map(U=>({l:U,w:(U.id===M.feature?100:0)+(U.lit?10:0)+({claimed:5,found:4,checked:3,plato:2,context:1}[U.side]??0)})).sort((U,C)=>C.w-U.w);for(let{l:U}of I){if(!p(U.lon,U.lat,wt,U.lift)||wt[0]<-10||wt[1]<90||wt[0]>B+10||wt[1]>K-30)continue;let C=U.text.length>34?`${U.text.slice(0,32).trimEnd()}\u2026`:U.text,q=[wt[0]-8,wt[1]-10,wt[0]+14+C.length*6.3,wt[1]+10],it=U.lit&&w.length<26&&q[2]<B-4;if(it){for(let It of w)if(q[0]<It[2]&&q[2]>It[0]&&q[1]<It[3]&&q[3]>It[1]){it=!1;break}}if(!it&&U.id!==M.feature&&U.kind!=="core"&&U.side==="context")continue;it&&w.push(q);let Mt=Pt(U);Mt._text!==C&&(Mt.lastChild.textContent=C,Mt._text=C,Mt.setAttribute("aria-label",`${U.text}${U.year?` (${U.year})`:""}`)),Mt.style.transform=`translate3d(${wt[0].toFixed(1)}px,${wt[1].toFixed(1)}px,0)`;let Et=`mark s-${U.side}${it?"":" dot"}${U.id===M.feature?" on":""}${U.lit?"":" dim"}`;Mt.className!==Et&&(Mt.className=Et),Mt._shown||(Mt.style.display="",Mt._shown=!0),R.add(Mt)}}for(let B of at)R.has(B)||(B.style.display="none",B._shown=!1);at.clear();for(let B of R)at.add(B);if(!x.active&&ht.size){for(let B of ht.values())B.remove();ht.clear()}},Ut=s("#pop"),At=0,Lt=(R,B)=>{Ut.innerHTML=`<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${R}`,Ut.classList.add("open"),At=performance.now();let K=f.getBoundingClientRect(),w=B.getBoundingClientRect(),I=Ut.offsetWidth,U=Ut.offsetHeight,C=$t(w.left-K.left+w.width/2-I/2,8,K.width-I-8),q=w.top-K.top-U-10;Ut.style.left=`${C}px`,Ut.style.top=`${q>=8?q:Math.min(w.bottom-K.top+10,K.height-U-8)}px`},kt=()=>{Ut.classList.remove("open"),M.search=null;for(let R of f.querySelectorAll(".tl-b.on"))R.classList.remove("on");i.pulse(null)},Q=(R,B)=>{let K=b.searches.find(w=>w.id===R);if(K){if(M.search===R)return kt();kt(),M.search=R,B.classList.add("on"),Lt(Lf(K,K.place?A.get(K.place)?.name:null),B),i.pulse(K.place?A.get(K.place):null)}},Wt=(R,B,K,w)=>{let I=y[R];if(!I)return;let U=K&&b.places[K],C=U&&(w==="brk"?U.breaks[R]:w==="fit"?U.fits[R]:null),q=U&&w==="both"?`<p><em>Said to fit:</em> ${r(U.fits[R]?.how??"")} ${a(U.fits[R]?.source,"source")}</p><p><em>Breaks:</em> ${r(U.breaks[R]?.how??"")} ${a(U.breaks[R]?.source,"source")}</p>`:"",it=K?`<div class="pop-h">${Is(w)}<b>${r(A.get(K)?.name??"")} \xB7 ${r(I.short)}</b></div><div class="pop-s">${w==="fit"?"Said to fit":w==="brk"?"Breaks":"Argued both ways"} \xB7 ${r(I.ref)}</div>${C?`<p>${r(C.how)} ${a(C.source,"source")}</p>`:q}<p class="quote">\u201C${r(I.quote??I.label)}\u201D</p>`:Nf(I,T.used.get(R)??0);Lt(it,B)},Rt=s("#board"),Bt=()=>{kt(),s("#board-body").innerHTML=Df(_,b,T,S),Rt.classList.add("open"),f.classList.add("board-open"),s("#board-body").scrollTop=0},_t=()=>{kt(),Rt.classList.remove("open"),f.classList.remove("board-open")},Dt=R=>{let B=A.get(R);B&&(_t(),kt(),j(B,!0))};Rt.addEventListener("click",R=>{let B=R.target.closest("[data-search],[data-claim],[data-cell],[data-go],[data-act]");if(!B)return kt();if(B.dataset.act==="board-x")_t();else if(B.dataset.search)Q(B.dataset.search,B);else if(B.dataset.claim)Wt(B.dataset.claim,B);else if(B.dataset.cell){let[K,w,I]=B.dataset.cell.split("|");Wt(w,B,K,I)}else B.dataset.go&&Dt(B.dataset.go)});for(let R of[s("#board-body"),u])R.addEventListener("scroll",()=>{Ut.classList.contains("open")&&performance.now()-At>350&&kt()},{passive:!0});Ut.addEventListener("click",R=>{let B=R.target.closest("[data-go],[data-act]");B?.dataset.go?Dt(B.dataset.go):B?.dataset.act==="pop-x"&&kt()});let Ot=()=>`<button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-list="1"><b>${T.places}</b> famous claims</button><button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-board="1"><b>${T.checked}</b> checked<i>&nbsp;on the ground</i> \xB7 <b>${T.found}</b> found<span>Board \u203A</span></button>`,Ft=(R,B,K,w,I,U)=>`<div class="fit"><div class="fit-h"><b>${r(R)}</b><small>${r(B??"")}</small></div><div class="fit-b"><span><em>Plato</em>${K}</span><span class="${U??""}"><em>Here</em>${w}</span></div>${I?`<p class="note">${I}</p>`:""}</div>`,z=()=>{let R=M.fit,B=n.place;if(c.textContent="Test the fit",!R||R.state==="loading"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${r(B?.name??"this point")} from the open elevation tiles\u2026</p>`;return}if(R.state==="failed"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`;return}let K=R.plato,w=Et=>`${Et.toLocaleString("en")} stades`,I=R.stadion,U=R.rings,C=R.shore,q=R.plain,it=R.strait,Mt=Math.abs(R.sea)<1?"today's sea level":`the sea at ${l(R.sea)}`;u.innerHTML=`
      <button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${An(R.lat,R.lon,3)} with ${Mt}, at ${I} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0,"Today"],[-50,"Plato's date"],[-125,"Ice-age low"]].map(([Et,It])=>`<button class="chip${Math.abs(R.sea-Et)<1?" on":""}" data-act="a-fit-sea" data-m="${Et}">${It}${Et?` ${l(Et)}`:""}</button>`).join("")}</div>
      ${Ft("Is it above water?",K.refs.years,"<b>Dry land</b>, with the sea let into the rings",R.dry?`<b>Dry</b>, ${l(U.mid-R.sea)} above the sea`:`<b>Under ${Math.round(R.sea-U.mid).toLocaleString("en")} m of water</b>`,R.dry?"":`At this sea level the point is sea floor. Nearest land: ${C.distance==null?`more than ${J(C.beyond)} away`:`${J(C.distance)} to the ${Gl(C.bearing)}`}.`,R.dry?"ok":"no")}
      ${Ft("Ground for the rings",K.refs.rings,`<b>${J(U.across)}</b> across, cut to sea level<small>${w(K.island)} island + rings of ${K.rings} stades</small>`,`<b>${Math.round(U.relief).toLocaleString("en")} m</b> of relief<small>from ${l(U.low)} to ${l(U.high)}</small>`,"Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.")}
      ${Ft("The canal to the sea",K.refs.canal,`<b>${J(R.wallR)}</b> from the centre to the sea<small>a canal of ${w(K.canal)} beyond the rings</small>`,R.dry?C.distance==null?`<b>No sea within ${J(C.beyond)}</b>`:`<b>${J(C.distance)}</b> to the sea, to the ${Gl(C.bearing)}`:"<b>Under water</b>","The outer wall stood the same 50 stades out and met the sea at the canal mouth.")}
      ${Ft("The great plain",K.refs.plain,`<b>${Math.round(q.long/1e3)} by ${Math.round(q.wide/1e3)} km</b>, level<small>${w(K.plainLong)} by ${w(K.plainWide)}</small>`,`<b>${Math.round(q.land*100)}%</b> of that box is land${q.mid==null?"":`<small>${Math.round(q.level*100)}% within 100 m of its middle height (${l(q.mid)})</small>`}`,`Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${Gl(q.inland)}.`)}
      ${Ft("Beyond the Pillars",K.refs.pillars,"<b>In front of the strait</b>, in the outer ocean",`<b>${J(it.distance)}</b> from the Strait of Gibraltar<small>${it.inside?"inside it, on the Mediterranean side":"outside it"}</small>`,"Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.",it.inside?"no":"ok")}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`},E=async(R,B)=>{let K=n.place,w=v.state(),I=B??M.fit?.at??(K?M.scene?{lat:M.scene.centre.lat,lon:M.scene.centre.lon}:{lat:K.lat,lon:K.lon}:{lat:w.lat,lon:w.lon}),U=R??(m.uWater.value>.5?Math.round(m.uSea.value):0);M.fit={state:"loading",at:I},h("fit"),M.view="fit",z();try{let C=await Uf({...I,sea:U,cas:b,stadion:t.city.params.stadion});if(M.view!=="fit")return;M.fit={...C,state:"done",at:I},R!=null&&i.setSea(R,!1),x.setExtras(C.shapes),C.dry&&(t.city.place({lat:C.lat,lon:C.lon,bearing:Math.round(C.seaBearing)}),t.stamp++),v.flyTo({lon:C.lon*yt,lat:C.lat*yt,range:C.wallR*3.4,tilt:50*yt,heading:(C.seaBearing+160)%360*yt},2.2),z()}catch(C){console.warn(C),M.fit={state:"failed",at:I},z()}},dt=()=>{let R=M.fit,B=R.rings,K=R.shore,w=R.plain;return[`Plato's plan at ${R.lat.toFixed(4)}, ${R.lon.toFixed(4)} (sea ${R.sea} m, stadion ${R.stadion} m), measured ${R.made} from Terrain Tiles:`,`- above water: ${R.dry?"yes":"no"} (middle height under the rings ${Math.round(B.mid)} m)`,`- ground under the rings (${Math.round(B.across)} m across): ${Math.round(B.low)} to ${Math.round(B.high)} m, relief ${Math.round(B.relief)} m`,`- nearest ${K.kind}: ${K.distance==null?`none within ${K.beyond} m`:`${Math.round(K.distance)} m at bearing ${K.bearing}`} (Plato: ${Math.round(R.wallR)} m from centre to sea)`,`- plain box ${Math.round(w.long/1e3)} x ${Math.round(w.wide/1e3)} km: ${Math.round(w.land*100)}% land, ${Math.round(w.level*100)}% within 100 m of ${w.mid==null?"n/a":Math.round(w.mid)} m`,`- Strait of Gibraltar: ${Math.round(R.strait.distance/1e3)} km, ${R.strait.inside?"inside":"outside"}`].join(`
`)},gt=(R,B)=>{if(R==="a-list")ct();else if(R==="a-place")j(A.get(B.dataset.id),!0);else if(R==="a-board")Bt();else if(R==="a-mode")mt(B.dataset.v);else if(R==="a-step")ot(Number(B.dataset.i)===M.step?-1:Number(B.dataset.i));else if(R==="a-next")ot(M.step+1);else if(R==="a-feature")Z(B.dataset.id);else if(R==="a-more")M.more=!0,nt();else if(R==="a-layer"){let K=i.overlays.find(w=>w.id===B.dataset.id);i.setOverlay(n.overlay?.id===K.id?null:K),i.drawTag(),nt()}else if(R==="a-claim")Wt(B.dataset.id,B,B.dataset.place,B.dataset.kind);else if(R==="a-sea"){let K=M.scene;M.sea?V():(M.sea={from:m.uSea.value,to:K.needs_sea_level.m},F(M.sea.to)),nt()}else if(R==="a-city"){let K=n.place,w=M.scene?.centre??K;i.standCity(w.lat,w.lon)}else if(R==="a-known"){let K=n.place;i.checkKnown(K.lat,K.lon,Math.max(K.precision_km??10,5))}else if(R==="a-fit")E();else if(R==="a-fit-sea")E(Number(B.dataset.m));else if(R==="a-fit-off")x.setExtras([]),t.city.remove(),t.stamp++,i.drawTag(),o("Cleared");else if(R==="a-fit-copy")navigator.clipboard?.writeText(dt()).then(()=>o("Copied"),()=>o("Could not copy"));else if(R==="a-back")M.view="place",n.place?(h("legend"),nt()):i.closeSheet();else if(R==="a-tour")i.tour?.();else return!1;return!0};return{atlantis:_,scenes:S,stats:T,a:M,seaTo:F,ringStades:k.island/2+k.rings,openPlace:j,openList:ct,leaveScene:vt,openBoard:Bt,closeBoard:_t,hidePop:kt,drawCase:Ot,click:gt,placeMarks:Jt,selectFeature:Z,setStep:ot,setMode:mt,runFit:E,get boardOpen(){return Rt.classList.contains("open")}}};var My=i=>(i??"").split(",")[0].trim(),ya=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")};var zf=({worldfit:i,cas:t})=>{let e=[],n=i,s=t?.searches??[];if(e.push({id:"legend",say:"Atlantis is a story Plato told. Nobody has ever found it.",least:4500}),e.push({id:"tale",say:"He has it told as \u201Ca tale which, though strange, is certainly true\u201D.",least:5500}),e.push({id:"island",say:"Beyond the Pillars of Heracles, out in the Atlantic, lay an island \u201Clarger than Libya and Asia put together\u201D.",least:6500}),e.push({id:"city",say:"At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that \u201Csparkled like fire\u201D.",least:8e3}),e.push({id:"fall",say:"Then, \u201Cin a single day and night of misfortune\u201D, Atlantis \u201Cdisappeared in the depths of the sea\u201D.",least:7e3}),e.push({id:"date",say:"Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.",least:6e3,show:[{at:3.4,for:4.6,big:"9600 BCE"}]}),n){let r=n.best.find(l=>!l.near_old_ice)??n.best[0];e.push({id:"sank",say:`The sea stood about 50 m lower then. Since that date, ${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2 of land have gone under. All of it is glowing now.`,least:8e3,show:[{at:.4,for:3.2,big:"\u221250 m"},{at:4.2,for:6.2,big:`${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2`}]});let a=r?.near?.name?/^off /.test(r.near.name)?` The closest, ${r.near.name},`:` The closest, the ${My(r.near.name)},`:" The closest";r&&e.push({id:"scored",say:`We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${a} scores ${r.top}: a match in the landscape, not a city.`,least:9e3,best:r})}if(s.length){let r=s.filter(l=>l.status==="unresolved").length,a=Math.min(...s.map(l=>l.year));e.push({id:"search",say:`People have gone looking since ${a}. ${s.length} searches are on record, and ${r} of them are still open. Not one has found the city.`,least:9e3,show:[{dots:[...s].sort((l,o)=>l.year-o.year).map(l=>l.status)}]})}return e.push({id:"built",say:"So we built his city as he wrote it, each part tied to a line of his text.",least:5500}),e.push({id:"hall",say:"At its centre he put a shrine, \u201Creserved as holy ground, and encircled with a wall of gold\u201D. We opened it. Inside is everything found so far, and everything still unknown.",least:9500}),e.push({id:"turn",say:"Walk in. The search is yours now.",least:4e3}),e};var Th={lon:-5.61,lat:35.95},Hf=(i,t,e)=>{let{world:n,data:s,$:r,esc:a,setSheet:l,st:o,stage:h}=i,{control:u}=n,c=r("#tour"),f=n.city,d={on:!1,i:0,steps:[],timer:null,paused:!1,started:0,left:0,later:[],sink:null,label:null,offset:0,drag:null},p=(j,ct=0)=>Math.max(ct,2600+j.length*48),v=(j,ct)=>{let vt=d.i,mt=j-d.offset*1e3;if(mt<=0){ct();return}d.later.push(setTimeout(()=>{d.on&&d.i===vt&&ct()},mt))},g=r("#shot"),m=r("#stat"),x=r("#dots"),_=r("#t-mark"),b=s.storyMedia??[],S=j=>globalThis.__STORY__?.[j]??`${globalThis.__ASSETS__||"./"}${j}`,A=()=>g.classList.remove("on"),y=j=>{g.innerHTML=`<img src="${a(S(j.file))}" alt=""><figcaption>${a(j.caption)}</figcaption>`,g.style.setProperty("--hold",`${j.for}s`),g.dataset.where=j.where??"right",g.classList.remove("on"),g.offsetWidth,g.classList.add("on")},T=j=>{m.innerHTML=`<b>${a(j.big)}</b>${j.small?`<span>${a(j.small)}</span>`:""}`,m.classList.remove("on"),m.offsetWidth,m.classList.add("on")},k=(j,ct)=>{x.innerHTML=j.map((vt,mt)=>`<i class="d-${Rn[vt]?.tone??"mut"}" style="animation-delay:${Math.round(mt/j.length*ct)}ms"></i>`).join(""),x.classList.add("on")},M=()=>{A(),m.classList.remove("on"),x.classList.remove("on"),d.label=null,_.classList.remove("on"),i.cityBar?.present(null),h.classList.remove("tour-hunt"),e&&(e.state.forced=!1)},H=(j,ct)=>{d.label=j,_.textContent=ct,_.classList.add("on")},J=[0,0],ft=()=>{if(!d.on)return;if(G(),d.label){let vt=i.project(d.label.lon,d.label.lat,J,0);_.style.opacity=vt?"":"0",vt&&(_.style.transform=`translate(${J[0]}px, ${J[1]}px) translate(-50%, -150%)`)}let j=d.sink,ct=f.city?.group;if(j&&ct){let vt=Math.min(1,(performance.now()-j.from)/j.ms);ct.position.z=-j.deep*vt*vt,ct.updateMatrixWorld(!0),n.stamp++,vt>=1&&(d.sink=null,f.remove(),ct.position.z=0,ct.updateMatrixWorld(!0))}},F=()=>{d.sink=null;let j=f.city?.group;j&&j.position.z&&(j.position.z=0,j.updateMatrixWorld(!0))},V=()=>{let j=(ht,at,wt,Pt=3,Jt=0)=>u.flyTo({lon:ht*yt,lat:at*yt,range:wt,tilt:Jt*yt,heading:0},Pt),ct=()=>{t.leaveScene(),o.legend=o.place=null,l(null)},vt=i.home,mt=()=>{F(),f.active||(f.place({lat:vt.lat,lon:vt.lon,bearing:vt.bearing}),n.stamp++),f.cutaway?.(!1)},P=(ht,at,wt=1.5,Pt={})=>{let Jt=f.viewOf(ht);Jt&&u.flyTo({...Jt,...at?{range:at}:{},...Pt},wt),i.cityBar?.present(ht)},ot=(ht,at=2.6)=>{let wt=(s.evidence??[]).find(Ut=>Ut.id===ht),Pt=t.atlantis.places.find(Ut=>Ut.id===(wt?.place??ht));if(!Pt)return;t.openPlace(Pt,!0),t.setMode("all"),l(null);let Jt=n.evidence.viewOf(null);Jt&&u.flyTo(Jt,at)},Z={legend:()=>{ct(),e?.setGlow(0),i.setSea(0,!1),mt();let ht=f.view();u.jump({...ht,range:7600}),u.flyTo({...ht,range:6200,heading:ht.heading+.5},9)},tale:()=>j(21,37.5,52e5,3.4,8),island:(ht,at)=>{j(Th.lon-6,Th.lat,24e5,3,16),H(Th,"The Pillars of Heracles"),v(at*620,()=>{_.classList.remove("on"),d.label=null,mt(),u.flyTo({...f.view(),range:9e3},at*.36+.6)})},city:(ht,at)=>{mt();let wt=f.view();u.flyTo({...wt,range:7e3,heading:wt.heading+.25},at*.4),v(at*400,()=>P("temple",230,1.5,{tilt:62*yt})),v(at*400+1700,()=>{f.cutaway?.(!0),n.stamp++}),v(at*700,()=>{f.cutaway?.(!1),P("wall-orichalcum",200,1.5)})},fall:(ht,at)=>{i.cityBar?.present(null),mt();let wt=f.view();u.flyTo({...wt,range:8200,tilt:52*yt},1.6),i.sound?.sfx("rise",.3),v(1500,()=>{d.sink={from:performance.now(),ms:Math.max(3e3,at*1e3-2600),deep:46},u.flyTo({...wt,range:15e3,tilt:40*yt,heading:wt.heading+.3},at-1.2)})},date:()=>{F(),f.remove(),e?.setGlow(0),t.seaTo(-50),u.flyTo({lon:3*yt,lat:54*yt,range:32e5,tilt:16*yt,heading:0},3.6)},sank:(ht,at)=>{t.seaTo(0),e?.setGlow(1),i.sound?.sfx("rise",.2),v(at*380,()=>j(108,2,62e5,at*.26,6)),v(at*690,()=>j(-172,62,56e5,at*.28,6))},scored:(ht,at)=>{let wt=ht.best;u.flyTo({lon:wt.lon*yt,lat:wt.lat*yt,range:1e6,tilt:30*yt,heading:0},3.8),e&&(e.state.forced=!0,h.classList.add("tour-hunt")),v(at*500,()=>{e?.scan(wt.lon,wt.lat),i.sound?.sfx("ping",.6)})},search:(ht,at)=>{h.classList.remove("tour-hunt"),e&&(e.state.forced=!1),ot("santorini",2.6),v(at*420,()=>ot("richat",2.8)),v(at*830,()=>{ct(),j(-18,30,95e5,2.6)})},built:(ht,at)=>{ct(),e?.setGlow(.5),i.setSea(0,!1),mt(),u.jump({...f.view(),range:5200}),P("harbours",null,1.3),v(at*340,()=>P("bridges",null,1.2)),v(at*670,()=>P("temple",260,1.2))},hall:(ht,at)=>{i.cityBar?.present(null),mt();let wt=f.viewOf("shrine");wt&&u.flyTo({...wt,range:150,tilt:64*yt,heading:wt.heading+Math.PI},at*.34),v(at*360,()=>{i.sound?.sfx("reveal",.3),i.enterCity?.("hall",!0,{pan:.34,x:4,y:-4,look:[-12,6]})})},turn:()=>i.enterCity?.("hall",!0)};return zf({worldfit:e?s.worldfit:null,cas:s.cas}).map(ht=>({...ht,go:at=>Z[ht.id]?.(ht,at)}))},O=j=>j.split(/(?<=[.!?:]”?)\s+(?=[A-Z“])/).filter(Boolean),Y=()=>d.steps.reduce((j,ct)=>j+ct.total,0),lt=j=>d.steps.slice(0,j).reduce((ct,vt)=>ct+vt.total,0),et=()=>lt(d.i)+(d.steps[d.i].total-(d.paused?d.left:Math.max(0,d.left-(performance.now()-d.started)))),X=j=>{let ct=d.steps[d.i];j!==void 0&&(d.words=j);let vt=Y();c.innerHTML=`<p>${a(d.words??ct.say)}</p><div class="bar"><button class="ib t-play" data-act="tour-pause" aria-label="${d.paused?"Play":"Pause"}">${d.paused?'<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 2.2v9.6L11.6 7z" fill="currentColor"/></svg>':'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="3" y="2.4" width="2.8" height="9.2" rx="1"/><rect x="8.2" y="2.4" width="2.8" height="9.2" rx="1"/></svg>'}</button><div class="scrub" role="slider" tabindex="0" aria-label="Story" aria-valuemin="0" aria-valuemax="${Math.round(vt/1e3)}" aria-valuenow="${Math.round(et()/1e3)}">${d.steps.slice(1).map((mt,P)=>`<i style="left:${lt(P+1)/vt*100}%"></i>`).join("")}<b></b><span></span></div><button class="linkish" data-act="tour-stop">${d.i===d.steps.length-1?"Close":"Skip"}</button></div>`,G()},G=()=>{let j=c.querySelector(".scrub");if(!j)return;let ct=Math.max(0,Math.min(1,(d.drag??et())/Y()));j.querySelector("b").style.width=`${ct*100}%`,j.querySelector("span").style.left=`${ct*100}%`},$=()=>{clearTimeout(d.timer),d.started=performance.now(),d.paused||(d.timer=setTimeout(st,d.left))},N=(j,ct=0)=>{d.i=j;let vt=d.steps[j];for(let at of d.later)clearTimeout(at);d.later=[],M(),!["hall","turn"].includes(vt.id)&&i.walkOn?.()&&i.leaveWalk?.(),F();let mt=vt.len;d.offset=Math.max(0,Math.min(ct,mt-.05)),i.sound?.say(vt.say,d.offset),d.left=vt.total-d.offset*1e3,d.started=performance.now(),vt.go(mt);for(let at of b.filter(wt=>wt.line===vt.id))at.at+at.for>d.offset&&(v(at.at*1e3,()=>y(at)),v((at.at+at.for)*1e3,A));for(let at of vt.show??[])at.dots?k(at.dots,Math.max(0,mt-d.offset)*620):at.at+at.for>d.offset&&(v(at.at*1e3,()=>T(at)),v((at.at+at.for)*1e3,()=>m.classList.remove("on")));let P=O(vt.say),ot=P.reduce((at,wt)=>at+wt.length,0),Z=0,ht=P[0];P.forEach((at,wt)=>{let Pt=Z/ot*mt;wt&&Pt<=d.offset?ht=at:wt&&v(Pt*1e3,()=>X(at)),Z+=at.length}),d.offset=0,X(ht),d.paused&&(d.paused=!1),$()},L=j=>{let ct=Y(),vt=Math.max(0,Math.min(ct-400,j)),mt=0;for(;mt<d.steps.length-1&&lt(mt+1)<=vt;)mt++;N(mt,(vt-lt(mt))/1e3)};c.addEventListener("pointerdown",j=>{let ct=j.target.closest(".scrub");if(!ct)return;j.preventDefault(),ct.setPointerCapture?.(j.pointerId);let vt=ot=>{let Z=ct.getBoundingClientRect();return Math.max(0,Math.min(1,(ot-Z.left)/Z.width))*Y()};d.drag=vt(j.clientX),G();let mt=ot=>{d.drag=vt(ot.clientX),G()},P=ot=>{ct.removeEventListener("pointermove",mt),ct.removeEventListener("pointerup",P),ct.removeEventListener("pointercancel",P);let Z=vt(ot.clientX);d.drag=null,L(Z)};ct.addEventListener("pointermove",mt),ct.addEventListener("pointerup",P),ct.addEventListener("pointercancel",P)}),addEventListener("keydown",j=>{!d.on||j.target.closest?.("input, textarea")||(j.key==="ArrowLeft"||j.key==="ArrowRight"?(L(et()+(j.key==="ArrowLeft"?-5e3:5e3)),j.preventDefault()):j.key===" "&&(c.querySelector('[data-act="tour-pause"]')?.click(),j.preventDefault()))});let st=()=>d.i>=d.steps.length-1?ut():N(d.i+1),nt=()=>{if(!(!t||d.on)){i.leaveWalk?.(),d.steps=V();for(let j of d.steps){let ct=s.audio?.narration?.[ya(j.say)];j.len=ct?ct.seconds:p(j.say,j.least)/1e3,j.total=ct?Math.max(ct.seconds*1e3+700,1500):p(j.say,j.least)}i.sound?.prime(d.steps.map(j=>j.say));for(let j of b)new Image().src=S(j.file);d.on=!0,d.paused=!1,r("#intro").classList.add("gone"),t.closeBoard(),c.classList.add("open"),h.classList.add("touring"),u.idle=!1,i.sound?.bed(!0),N(0)}},ut=()=>{if(d.on){clearTimeout(d.timer);for(let j of d.later)clearTimeout(j);d.later=[],d.on=!1,c.classList.remove("open"),h.classList.remove("touring"),M(),F(),i.sound?.hush(),i.sound?.bed(!1),t.leaveScene(),o.legend=o.place=null,l(null),e?.setGlow(1),Math.abs(n.globe.shared.uSea.value)>.6&&i.setSea(0,!1),f.cutaway?.(!1),i.walkOn?.()?i.walkPan?.(0):i.enterCity?.("hall")}};return c.addEventListener("click",j=>{let ct=j.target.closest("[data-act]")?.dataset.act;ct==="tour-stop"?ut():ct==="tour-next"?st():ct==="tour-pause"&&(d.paused?(d.paused=!1,i.sound?.resume(),$()):(d.paused=!0,clearTimeout(d.timer),i.sound?.pause(),d.left=Math.max(600,d.left-(performance.now()-d.started))),X())}),{start:nt,stop:ut,next:st,tick:ft,get on(){return d.on},get step(){return d.i},get steps(){return d.steps}}};var Gf=i=>{let{world:t,data:e,$:n,esc:s,stage:r}=i,{control:a}=t,l=t.city,o=n("#citybar"),h=e.reconstruction,u=new Map([...(h?.from_text??[]).map(x=>[x.id,{...x,kind:"text"}]),...(h?.choices??[]).map(x=>[x.id,{...x,kind:"choice"}])]),c={open:!1,walk:-1,parts:[],ghost:!1,cut:!1,part:null},f=(x,_)=>{let b=u.get(x)??_;return b?`<p class="cb-what"><span class="tag ${b.kind==="text"?"t-confirmed":"t-fringe"}">${b.kind==="text"?"From the text":"Our choice"}</span> ${s(b.what??x)}${b.ref?` <small>${s(b.ref)}</small>`:""}</p>${b.quote?`<p class="quote">\u201C${s(b.quote)}\u201D</p>`:b.why?`<p class="cb-why">${s(b.why)}</p>`:""}`:""},d=x=>{c.shown=x&&u.has(x)?x:null,o.classList.toggle("present",!!c.shown),c.shown?(o.innerHTML=f(c.shown),l.highlight?.(null)):c.open||(o.innerHTML=""),t.stamp++},p=()=>{let x=l.active&&!i.tourOn()&&!i.walkOn?.()&&a.range<9e4&&!(a.fly&&a.fly.target.range>9e4);x!==c.open&&(c.open=x,o.classList.toggle("open",x),r.classList.toggle("city-on",x),x?v():(c.walk=-1,c.part=null,c.ghost=c.cut=!1))},v=()=>{if(!c.open)return;let x=b=>typeof l[b]=="function",_=c.walk>=0&&c.parts[c.walk];o.innerHTML=`
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${_?`${c.walk+1} of ${c.parts.length}`:""}</span></div>
      ${_?f(_.id,_):c.part?f(c.part.id,c.part):""}
      <div class="bar">
        ${x("parts")&&x("viewOf")?_?'<button class="btn" data-act="cb-prev">Back</button><button class="btn primary" data-act="cb-next">Next</button><button class="btn" data-act="cb-end">Done</button>':'<button class="btn primary" data-act="cb-foot">Walk</button><button class="btn" data-act="cb-walk">Tour</button>':""}
        ${_?"":`${x("setGhost")?`<button class="btn${c.ghost?" on":""}" data-act="cb-ghost">Text only</button>`:""}${x("cutaway")?`<button class="btn${c.cut?" on":""}" data-act="cb-cut">${c.cut?"Close temple":"Open temple"}</button>`:""}<button class="btn" data-act="cb-notes">List</button><button class="ib" data-act="cb-off" aria-label="Remove the city"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>`}
      </div>`},g=x=>{c.walk=x,c.part=null;let _=c.parts[x];if(_){l.highlight?.(_.id);let b=l.viewOf(_.id);b&&a.flyTo(b,2.4)}else l.highlight?.(null);t.stamp++,v()};return o.addEventListener("click",x=>{let _=x.target.closest("[data-act]")?.dataset.act;if(_==="cb-foot")i.enterCity?.("gate");else if(_==="cb-walk")c.parts=l.parts()??[],c.parts.length&&g(0);else if(_==="cb-next")g(c.walk+1>=c.parts.length?-1:c.walk+1);else if(_==="cb-prev")g(Math.max(0,c.walk-1));else if(_==="cb-end")g(-1),a.flyTo(l.view(),2.4);else if(_==="cb-ghost")c.ghost=!c.ghost,l.setGhost(c.ghost),t.stamp++,v();else if(_==="cb-cut"){c.cut=!c.cut,l.cutaway(c.cut),t.stamp++;let b=c.cut&&l.viewOf?.("temple");b&&a.flyTo({...b,tilt:Math.min(b.tilt??.6,40*yt)},2.2),v()}else _==="cb-notes"?i.drawCity():_==="cb-off"&&(l.highlight?.(null),l.remove(),t.stamp++,p(),i.drawTag())}),{sync:p,draw:v,tap:(x,_)=>{if(!l.active||typeof l.pick!="function"||c.walk>=0)return!1;let b=l.pick(x,_);return c.part=b??null,l.highlight?.(b?.id??null),t.stamp++,v(),!!b},present:d,state:c}};var Vf=1.7,Sy=5.2,Ty=15,_a=.55,Ey=1,Ay={plateau:"The citadel",slope:"The planted slope",island:"The island",bridge:"A bridge",ramp:"The stair to the citadel",quay:"A quay","ring-inner":"The inner ring","ring-outer":"The outer ring",racecourse:"The racecourse",town:"The town",bank:"The edge of the town"},Wf=i=>{let{world:t,$:e,stage:n}=i,{control:s}=t,r=t.city,a=t.renderer.domElement,l=e("#walk"),o={on:!1,x:0,y:0,z:0,zs:0,dir:0,pitch:0,vel:[0,0],keys:new Set,look:null,stick:null,goal:null,turn:null,pan:0,locked:!1,hot:null,where:"",place:null,bob:0,moved:!1,hotspots:[],used:!1},h=new pe(new qn(.34,.5,28),new qe({color:new se(1.6,1.6,1.6),transparent:!0,opacity:0,depthWrite:!1}));h.renderOrder=5;let u=matchMedia("(pointer: coarse)").matches,c=()=>r.city.plan,f=()=>{let N=c();return[[N.rA-N.T,N.rA+.4],[N.r1a-.4,N.r1a+N.T],[N.r1b-N.T,N.r1b+.4],[N.r2a-.4,N.r2a+N.T],[N.r2b-N.T,N.r2b+.4]]},d=(N,L)=>{let st=c(),nt=Math.hypot(N,L),ut=r.city.hall,j=r.city.temple;for(let[ct,vt]of f())if(nt>ct-_a&&nt<vt+_a&&!(L<0&&Math.abs(N-st.off)<st.bridgeHalf-9.8))return!0;if(ut){for(let ct of ut.rings)if(Math.abs(nt-ct.r)<ct.t+_a*.5){let vt=N*Math.cos(ct.a)+L*Math.sin(ct.a),mt=Math.abs(-N*Math.sin(ct.a)+L*Math.cos(ct.a));if(!(vt>0&&mt<ct.gap))return!0}if(nt<ut.RC+3){for(let ct of ut.circles)if(Math.hypot(N-ct.x,L-ct.y)<ct.r+_a*.6)return!0}}if(j?.room){let ct=N-j.x,vt=L-j.y,mt=j.room.l/2,P=j.room.w/2,ot=(Z,ht)=>Math.abs(Math.abs(Z)-ht)<1.1+_a*.5;if(Math.abs(ct)<mt+1.6&&Math.abs(vt)<P+1.6&&(ot(vt,P)||ot(ct,mt)&&!(ct>0&&Math.abs(vt)<j.room.door/2-.8)))return!0}return!1},p=(N,L)=>{let st={};return c().groundZ(N,L,st)==null||st.kind==="water"?null:{z:r.localFloor(N,L),kind:st.kind}},v=(N,L,st=o.z)=>{let nt=p(N,L);return!!nt&&Math.abs(nt.z-st)<=Ey&&!d(N,L)},g=(N,L)=>{let st=Math.hypot(N,L),nt=Math.max(1,Math.ceil(st/.35));for(let ut=0;ut<nt;ut++){let j=N/nt,ct=L/nt,vt=!1;for(let[mt,P]of[[0,1],[.6,.8],[-.6,.8],[1.15,.5],[-1.15,.5]]){let ot=Math.cos(mt),Z=Math.sin(mt),ht=o.x+(j*ot-ct*Z)*P,at=o.y+(j*Z+ct*ot)*P;if(v(ht,at)){o.x=ht,o.y=at,o.z=p(ht,at).z,vt=!0;break}}if(!vt){o.vel=[0,0];break}}},m=(N,L,st=90)=>{for(let nt=0;nt<=st;nt+=1.5)for(let ut=0;ut<(nt?16:1);ut++){let j=ut/16*Math.PI*2,ct=N+nt*Math.cos(j),vt=L+nt*Math.sin(j),mt=p(ct,vt);if(mt&&!d(ct,vt))return[ct,vt,mt.z]}return null},x=()=>r.toCity(Math.sin(o.dir),Math.cos(o.dir)),_=(N=0)=>{o.zs+=(o.z-o.zs)*(N?1-Math.exp(-N*11):1);let L=Math.hypot(o.vel[0],o.vel[1]);L>.6&&(o.bob+=N*(L>9?13:9.5));let[st,nt]=r.toScene(o.x,o.y),[ut,j]=r.toLonLat(st,nt);s.walk={lon:ut,lat:j,yaw:o.dir,pitch:o.pitch,eye:Vf,lift:o.zs-o.z+(L>.6?Math.sin(o.bob)*.035:0)}},b=()=>[o.x,o.y,o.zs+Vf],S=()=>{let[N,L]=x(),st=Math.cos(o.pitch),nt=[N*st,L*st,Math.sin(o.pitch)],ut=b(),j=null,ct=.9;for(let vt of o.hotspots){let mt=[vt.x-ut[0],vt.y-ut[1],vt.z-ut[2]],P=Math.hypot(mt[0],mt[1],mt[2]);if(P>vt.reach||P<.3)continue;let ot=(mt[0]*nt[0]+mt[1]*nt[1]+mt[2]*nt[2])/P,Z=Math.cos(Math.min(.75,Math.atan2((vt.size??1.5)/2,P)+.1));ot>Z&&ot-Z+1>ct&&(j=vt,ct=ot-Z+1)}return j},A=e("#w-use"),y=e("#w-where"),T=(N=o.hot)=>{N&&(o.used=!0,o.goal=null,ft(),N.act(N))},k=(N,L)=>{let st=r.site.frame,nt=s.ray(N,L),[ut,j]=r.toCity(hn(nt,st.east),hn(nt,st.north)),ct=[ut,j,hn(nt,st.up)],vt=b(),mt=null,P=1/0;for(let ht of o.hotspots){let at=[ht.x-vt[0],ht.y-vt[1],ht.z-vt[2]],wt=at[0]*ct[0]+at[1]*ct[1]+at[2]*ct[2];wt<.3||wt>ht.reach||Math.hypot(at[0]-ct[0]*wt,at[1]-ct[1]*wt,at[2]-ct[2]*wt)<(ht.size??1.5)*.48&&wt<P&&(mt=ht,P=wt)}if(mt)return T(mt);if(ct[2]>-.04)return;let ot=Math.min(70,(o.zs-vt[2])/ct[2]),Z=m(vt[0]+ct[0]*ot,vt[1]+ct[1]*ot,6);Z&&(o.goal=[Z[0],Z[1]],h.position.set(Z[0],Z[1],Z[2]+.04),h.material.opacity=.9,h.parent!==r.city.group&&r.city.group.add(h),t.stamp++)},M=N=>{if(!o.on)return;if(!r.active||!r.city)return $(!1);let L=o.keys,st=document.activeElement?.closest?.("input, textarea, [contenteditable]"),nt=0,ut=0,j=0;st||((L.has("KeyW")||L.has("ArrowUp"))&&(nt+=1),(L.has("KeyS")||L.has("ArrowDown"))&&(nt-=1),L.has("KeyD")&&(ut+=1),L.has("KeyA")&&(ut-=1),L.has("ArrowRight")&&(j+=1),L.has("ArrowLeft")&&(j-=1)),o.stick&&(nt-=o.stick.dy,ut+=o.stick.dx),o.pan&&(o.dir+=o.pan*N);let ct=Math.hypot(nt,ut);ct>1&&(nt/=ct,ut/=ct);let vt=!st&&(L.has("ShiftLeft")||L.has("ShiftRight"))||o.stick&&Math.hypot(o.stick.dx,o.stick.dy)>.97,[mt,P]=x(),ot=1-Math.exp(-N*(o.stick?16:10)),Z=[mt*nt+P*ut,P*nt-mt*ut];if(o.goal){let Bt=o.goal[0]-o.x,_t=o.goal[1]-o.y,Dt=Math.hypot(Bt,_t);ct>.05||Dt<.45||(o.stuck??0)>.5?(o.goal=null,o.stuck=0):(Z=[Bt/Dt,_t/Dt],vt=Dt>22,Dt<2.5&&(Z=Z.map(Ot=>Ot*Math.max(.35,Dt/2.5))))}!o.goal&&h.material.opacity>0&&(h.material.opacity=Math.max(0,h.material.opacity-N*3),t.stamp++);let ht=vt?Ty:Sy;o.vel[0]+=(Z[0]*ht-o.vel[0])*ot,o.vel[1]+=(Z[1]*ht-o.vel[1])*ot,j&&(o.dir+=j*N*1.9);let at=Math.hypot(o.vel[0],o.vel[1]),wt=`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`,Pt=o.x,Jt=o.y;at>.05&&g(o.vel[0]*N,o.vel[1]*N),o.goal&&(o.stuck=Math.hypot(o.x-Pt,o.y-Jt)<at*N*.2?(o.stuck??0)+N:0),_(N),at>1.2&&Math.hypot(o.vel[0],o.vel[1])>1.2&&(o.moved=!0,i.sound?.step(vt)),wt!==`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`&&t.stamp++;let Ut=r.city.hall,At=r.city.temple,Lt=Math.hypot(o.x,o.y),kt=p(o.x,o.y)?.kind,Q=Ut&&Lt<Ut.RI?"The hall":Ut&&Lt<Ut.RG?"Inside the wall of gold":At&&Math.abs(o.x-At.x)<At.L/2&&Math.abs(o.y-At.y)<At.W/2?"Poseidon's temple":Ay[kt]??"";Q!==o.where&&(o.where=Q,y.textContent=Q,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"));let Wt=Q==="The hall"?"hall":"city";Wt!==o.place&&(o.place=Wt,i.sound?.air(Wt),i.onWalkPlace?.(Wt)),l.classList.toggle("in-hall",Wt==="hall");let Rt=S();Rt!==o.hot&&(o.hot=Rt,A.hidden=!Rt,Rt&&(A.innerHTML=`<span>${i.esc(Rt.label)}</span>`))},H=(N,L,st)=>{o.dir+=N*st,o.pitch=$t(o.pitch-L*st,-1.25,1.35)},J=()=>{if(!(o.locked||!a.requestPointerLock))try{a.requestPointerLock()?.catch?.(()=>{})}catch{}},ft=()=>{document.pointerLockElement===a&&document.exitPointerLock?.()};document.addEventListener("pointerlockchange",()=>{o.locked=document.pointerLockElement===a,l.classList.toggle("locked",o.locked),o.locked||o.keys.clear()}),document.addEventListener("mousemove",N=>{o.on&&o.locked&&H(N.movementX,N.movementY,.0022)}),addEventListener("keydown",N=>{!o.on||N.target.closest?.("input, textarea, [contenteditable]")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"].includes(N.code)&&(o.keys.add(N.code),N.preventDefault()),(N.code==="KeyE"||N.code==="Enter")&&!N.repeat&&(T(),N.preventDefault()))}),addEventListener("keyup",N=>o.keys.delete(N.code)),addEventListener("blur",()=>o.keys.clear());let F=new Map,V=e("#w-stick"),O=44,Y=.14,lt=()=>{let N=a.getBoundingClientRect();return[N.width/2,N.height/2]},et=(N,L)=>{V.style.left=`${N}px`,V.style.top=`${L}px`};a.addEventListener("pointerdown",N=>{if(!o.on)return;let L=a.getBoundingClientRect(),st=N.clientX-L.left,nt=N.clientY-L.top;if(N.pointerType==="mouse"){if(o.locked){k(...lt());return}F.set(N.pointerId,{kind:"look",x:st,y:nt,x0:st,y0:nt,t:performance.now(),mouse:!0})}else{l.classList.contains("touch")||l.classList.add("touch");let ut=st<L.width/2&&!o.stick?"move":"look";F.set(N.pointerId,{kind:ut,x:st,y:nt,x0:st,y0:nt,cx:st,cy:nt,t:performance.now()}),ut==="move"&&(o.stick={dx:0,dy:0},et(st,nt),V.classList.add("on"))}a.setPointerCapture?.(N.pointerId)}),a.addEventListener("pointermove",N=>{let L=F.get(N.pointerId);if(!o.on||!L)return;let st=a.getBoundingClientRect(),nt=N.clientX-st.left,ut=N.clientY-st.top;if(L.kind==="move"){let j=nt-L.cx,ct=ut-L.cy,vt=Math.hypot(j,ct);vt>O&&(L.cx=nt-j/vt*O,L.cy=ut-ct/vt*O,et(L.cx,L.cy),j=nt-L.cx,ct=ut-L.cy);let mt=Math.min(1,Math.hypot(j,ct)/O),P=mt<Y?0:((mt-Y)/(1-Y))**1.4,ot=Math.atan2(ct,j);o.stick={dx:Math.cos(ot)*P,dy:Math.sin(ot)*P},mt>.2&&(o.goal=null),V.firstElementChild.style.transform=`translate(${j}px, ${ct}px)`}else L.mouse?H(nt-L.x,ut-L.y,.004):(o.dir+=(nt-L.x)*.0062,o.pitch=$t(o.pitch-(ut-L.y)*.0045,-1.1,1.2));L.x=nt,L.y=ut});let X=N=>{let L=F.get(N.pointerId);if(!L)return;F.delete(N.pointerId);let st=Math.hypot(L.x-L.x0,L.y-L.y0)<9&&performance.now()-L.t<350;if(L.kind==="move"){o.stick=null,V.classList.remove("on"),V.firstElementChild.style.transform="",V.style.left="",V.style.top="",st&&o.on&&k(L.x,L.y);return}!o.on||!st||(L.mouse&&a.requestPointerLock?(J(),setTimeout(()=>{o.on&&!o.locked&&k(L.x,L.y)},180)):k(L.x,L.y))};a.addEventListener("pointerup",X),a.addEventListener("pointercancel",X),A.addEventListener("click",()=>T());let G=({x:N=0,y:L=-60,dir:st=null,look:nt=null,pan:ut=0,grab:j=!0}={})=>{if(!r.active||!r.city)return!1;let ct=m(N,L);if(!ct)return!1;if([o.x,o.y,o.z]=ct,o.zs=o.z,nt){let[vt,mt]=r.toScene(nt[0]-o.x,nt[1]-o.y);o.dir=Math.atan2(vt,mt)}else o.dir=st??s.heading;return o.pitch=0,o.vel=[0,0],o.keys.clear(),o.goal=null,o.turn=null,o.pan=ut,o.hot=null,o.where="",o.place=null,A.hidden=!0,s.pointers.clear(),s.fly=null,o.on||(o.on=!0,l.hidden=!1,n.classList.add("walking"),i.onWalk?.(!0)),j&&!u&&navigator.userActivation?.isActive&&J(),_(),t.stamp++,!0},$=(N=!0)=>{if(!o.on)return;o.on=!1,o.goal=null,o.pan=0,ft(),h.removeFromParent(),l.hidden=!0,l.classList.remove("went"),n.classList.remove("walking");let L=s.walk;s.walk=null,i.sound?.air(null),L&&(s.jump({lon:L.lon,lat:L.lat,range:40,tilt:1.2,heading:o.dir}),N&&s.flyTo({lon:L.lon,lat:L.lat,range:420,tilt:1.05,heading:o.dir},2.2)),t.stamp++,i.onWalk?.(!1)};return t.beforeFrame=M,{enter:G,leave:$,use:T,lock:J,unlock:ft,footing:m,canStand:v,state:o,hotspots:o.hotspots,eye:b,forward:x,get on(){return o.on}}};var Eh="#eef2f6",Ls="#9aa7b4",Vl="#e9bd62",$f="#0b1016",Ah="#243040",Ds={good:"#5fd0a0",bad:"#f0766a",warn:"#e9bd62",info:"#6fb6f0",mut:"#7c8794"},Ns=["#16324a","#1f6f78","#2b9a8f","#58c08a","#e9bd62","#fff3c4"],Ry=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Cy=-Math.PI/2+30*Math.PI/180,Py=(i,t)=>i.length>t?`${i.slice(0,t-1).replace(/[ ,;:]+\S*$/,"")}\u2026`:i,qf=(i,{A:t,H:e,walk:n})=>{let{world:s,data:r,$:a,esc:l,link:o,setSheet:h,body:u,eyebrow:c,toast:f}=i,d=s.city,p=r.worldfit,v=r.cas,g=r.evidence??[],m=r.open,x={group:null,on:null,boards:[],globe:null,spin:null,painted:!1},_=s.phone?768:1152,b=Math.round(_/1.8),S=_/1152,A=(P,ot=500)=>`${ot} ${Math.round(P*S)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,y=(P,ot,Z)=>{let ht=[],at="";for(let wt of String(ot).split(/\s+/)){let Pt=at?`${at} ${wt}`:wt;P.measureText(Pt).width>Z&&at?(ht.push(at),at=wt):at=Pt}return at&&ht.push(at),ht},T=(P,ot,Z,ht,at,wt,{colour:Pt=Eh,weight:Jt=500,rows:Ut=9,gap:At=1.32}={})=>{P.font=A(wt,Jt),P.fillStyle=Pt,P.textBaseline="top";let Lt=y(P,ot,at*S);return Lt.slice(0,Ut).forEach((kt,Q)=>P.fillText(Q===Ut-1&&Lt.length>Ut?`${kt.replace(/[ ,;:]+\S*$/,"")}\u2026`:kt,Z*S,(ht+Q*wt*At)*S)),ht+Math.min(Ut,Lt.length)*wt*At},k=(P,ot,Z)=>(P.fillStyle=$f,P.fillRect(0,0,_,b),P.fillStyle=Vl,P.fillRect(0,0,_,5*S),T(P,Z,56,52,1040,58,{weight:700,rows:2,gap:1.1})+30),M=(P,ot)=>{P.font=A(20,500),P.fillStyle=Ls,P.textBaseline="alphabetic",P.fillText(ot,56*S,b-30*S),P.fillStyle=Ah,P.fillRect(56*S,b-66*S,_-112*S,1.5*S)},H=(P,ot,Z,ht,at)=>{P.fillStyle=at,P.beginPath(),P.arc(ot*S,Z*S,ht*S,0,7),P.fill()},J=(P,ot,Z,ht,at=9)=>{for(let wt=0;wt<5;wt++)H(P,ot+at+wt*(at*2+6),Z,at,wt<ht?Ns[4]:"#2a3442")},ft=(P,ot,Z,ht,at=22)=>ht.forEach((wt,Pt)=>{P.fillStyle=wt?Ns[4]:"#2a3442",P.fillRect((ot+Pt*(at+5))*S,Z*S,at*S,at*S)}),F=P=>p?.places.find(ot=>ot.id===P),V=(v?.searches??[]).filter(P=>P.status==="unresolved"||P.status==="never-tested"),O=new Set((e?.CLUES??[]).map(P=>P.claim)),Y=(v?.claims??[]).filter(P=>!O.has(P.id)),lt=g.flatMap(P=>(P.not_located??[]).map(ot=>({site:P.name,what:typeof ot=="string"?ot:ot.what??ot.name??ot.id??""}))).filter(P=>P.what),et=(p?.best??[]).filter(P=>!P.near_old_ice),X=P=>{let ot=new Set;return et.filter(Z=>Z.near?.name&&!/^off /.test(Z.near.name)&&!ot.has(Z.near.name)&&ot.add(Z.near.name)).slice(0,P)},G=m?.work?.filter(P=>(P.status??"open")!=="done")??[],$=[];for(let P=0;P<g.length;P+=2)$.push(g.slice(P,P+2));let N=[];for(N.push({id:"welcome",label:"The hall",draw:P=>{let ot=k(P,"The hall","The hall");["His words","Earth scores","Top scores","Places named","Searches","Unknown","Help build"].forEach((ht,at)=>{let wt=at%2,Pt=at>>1;H(P,66+wt*532,ot+18+Pt*62,8,Vl),T(P,ht,92+wt*532,ot+Pt*62,440,34,{weight:600,rows:1})})},sheet:()=>`<h2>The hall</h2><div class="hl-index">${[["text","His words"],["earth","Earth scores"],["best","Top scores"],["claims-1","Places named"],["searches","Searches"],["unknown","Unknown"],["work","Help build"]].map(([P,ot])=>`<button class="btn" data-act="hl-open" data-id="${P}">${ot}</button>`).join("")}</div><div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),N.push({id:"text",label:"His words",draw:P=>{let ot=k(P,"His words","His words"),Z=(e?.CLUES??[]).map(ht=>v?.claims.find(at=>at.id===ht.claim)).filter(Boolean);for(let ht of Z.slice(0,5))H(P,66,ot+17,8,Ns[4]),P.font=A(21,600),P.fillStyle=Ls,P.textBaseline="top",P.textAlign="right",P.fillText(ht.ref.split(";")[0],(_/S-56)*S,(ot+5)*S),P.textAlign="left",ot=T(P,ht.label,92,ot,760,27,{rows:2})+12},sheet:()=>`<h2>What Plato wrote</h2>${(v?.claims??[]).map(P=>`<div class="known"><span>${O.has(P.id)?'<i class="cdot on"></i>':'<i class="cdot"></i>'}${l(P.label)}</span><small>${l(P.ref??"")}</small></div>`).join("")}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>`}),N.push({id:"earth",label:"Earth scores",draw:P=>{let ot=k(P,"The Earth","Earth scores")+6,Z=[...p?.totals.by_score??[]].sort((at,wt)=>wt.score-at.score),ht=Math.max(1,...Z.map(at=>at.km2));for(let at of Z)J(P,56,ot+17,at.score,8),P.fillStyle="#16202c",P.fillRect(190*S,ot*S,640*S,34*S),P.fillStyle=Ns[at.score],P.fillRect(190*S,ot*S,Math.max(at.km2?3:0,640*at.km2/ht)*S,34*S),P.font=A(23,500),P.fillStyle=at.km2?Ls:Ds.bad,P.fillText(at.km2?`${Math.round(at.km2).toLocaleString("en")} km\xB2`:"none",850*S,(ot+17)*S),ot+=48},sheet:()=>{let P=[...p?.totals.by_score??[]].sort((ht,at)=>at.score-ht.score),ot=Math.max(1,...P.map(ht=>ht.km2)),Z=ht=>ht>=1e6?`${(ht/1e6).toFixed(1)} M km\xB2`:ht>=1e3?`${Math.round(ht/1e3)} K km\xB2`:ht?`${Math.round(ht)} km\xB2`:"None";return`<h2>Earth scores</h2>${P.map(ht=>`<div class="hbar"><span class="pips" aria-label="${ht.score} of 5">${[0,1,2,3,4].map(at=>`<i class="${at<ht.score?"on":""}"></i>`).join("")}</span><span class="track"><b style="width:${ht.km2/ot*100}%;background:${Ns[ht.score]}"></b></span><small>${Z(ht.km2)}</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),N.push({id:"best",label:"Top scores",draw:P=>{let ot=k(P,"The leaderboard","Top scores");X(5).forEach((Z,ht)=>{P.font=A(26,700),P.fillStyle=Ls,P.textBaseline="top",P.fillText(String(ht+1),56*S,(ot+2)*S),P.font=A(28,600),P.fillStyle=Eh,P.fillText(Py(Z.near?.name??`${Z.lat.toFixed(1)}, ${Z.lon.toFixed(1)}`,40),104*S,ot*S),ft(P,800,ot+4,(e?.CLUES??[]).map(at=>Z.clues.includes(at.key))),P.font=A(26,700),P.fillStyle=Ns[Z.top],P.textAlign="right",P.fillText(`${Z.top}/5`,(_/S-56)*S,(ot+2)*S),P.textAlign="left",ot+=50})},sheet:()=>{let P=P(5);return`<h2>Top scores</h2>${P.map(ot=>`<div class="hbar"><span class="pips" aria-label="${ot.top} of 5">${[0,1,2,3,4].map(Z=>`<i class="${Z<ot.top?"on":""}"></i>`).join("")}</span><span>${l(ot.near.name)}</span><small>${Math.round(ot.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),$.forEach((P,ot)=>N.push({id:`claims-${ot+1}`,label:P.map(Z=>Z.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join(" \xB7 "),draw:Z=>{k(Z,"Places people named",P.map(ht=>ht.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join("  \xB7  ")),P.forEach((ht,at)=>{let wt=56+at*532,Pt=F(ht.place??ht.id),Jt=196;Z.font=A(20,700),Z.fillStyle=Ds.warn,Z.textBaseline="top",Z.fillText("CLAIMED",wt*S,Jt*S),Jt=T(Z,ht.claimed?.line??"",wt,Jt+28,480,24,{rows:4})+18,Z.font=A(20,700),Z.fillStyle=Ds.good,Z.fillText("EVIDENCE",wt*S,Jt*S),Jt=T(Z,ht.found?.line??"",wt,Jt+28,480,24,{rows:5})+14,Pt&&J(Z,wt,b/S-60,Pt.score,8)}),Z.fillStyle=Ah,Z.fillRect(_/2-1,196*S,1.5*S,b-290*S)},sheet:()=>P.map(Z=>`<h2>${l(Z.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${l(Z.claimed?.line??"")}</p><p><span class="tag">Evidence</span> ${l(Z.found?.line??"")}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${l(Z.place??Z.id)}">See it on the globe</button></div>`).join("")})),N.push({id:"searches",label:"Searches",draw:P=>{let ot=v?.searches??[],Z=k(P,"The searches","Searches"),ht=Ut=>Ut<1950?70+(Ut-1650)/300*250:320+(Ut-1950)/80*770,at=Z+150;P.fillStyle=Ah,P.fillRect(56*S,at*S,(_/S-112)*S,2*S),P.font=A(19,500),P.fillStyle=Ls,P.textBaseline="top",P.textAlign="center";for(let Ut of[1700,1800,1950,1975,2e3,2025])P.fillRect(ht(Ut)*S,(at-6)*S,1.5*S,14*S),P.fillText(String(Ut),ht(Ut)*S,(at+16)*S);P.textAlign="left";let wt=new Map;for(let Ut of ot){let At=Math.round(ht(Ut.year)/15),Lt=wt.get(At)??0;wt.set(At,Lt+1),H(P,At*15,at-20-Lt*24,9,Ds[Rn[Ut.status]?.tone??"mut"])}let Pt=56,Jt=at+78;for(let[Ut,At]of Object.entries(Rn)){let Lt=ot.filter(Q=>Q.status===Ut).length;if(!Lt)continue;H(P,Pt+9,Jt+14,9,Ds[At.tone]),P.font=A(22,500),P.fillStyle=Eh,P.textBaseline="top";let kt=`${Lt} ${At.short.toLowerCase()}`;P.fillText(kt,(Pt+26)*S,Jt*S),Pt+=44+P.measureText(kt).width/S}},sheet:()=>`<h2>Searches</h2>${[...v?.searches??[]].sort((P,ot)=>P.year-ot.year).map(P=>`<div class="known"><span><span class="yr">${P.year}</span>${l(P.title)}</span><small style="color:${Ds[Rn[P.status]?.tone??"mut"]}">${l(Rn[P.status]?.short??P.status)}</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>`}),N.push({id:"unknown",label:"Unknown",draw:P=>{let ot=k(P,"Still unknown","Unknown");for(let Z of V.slice(0,6))H(P,66,ot+15,8,Ds[Rn[Z.status]?.tone??"mut"]),P.font=A(20,600),P.fillStyle=Ls,P.textBaseline="top",P.textAlign="right",P.fillText(String(Z.year),(_/S-56)*S,(ot+3)*S),P.textAlign="left",ot=T(P,Z.title,92,ot,880,25,{rows:1})+11},sheet:()=>`<h2>Unknown</h2><h3>Searches</h3>${V.map(P=>`<div class="known"><span>${l(P.title)}${P.source?` ${o(typeof P.source=="string"?P.source:P.source.url??"","source")}`:""}</span><small>${l(String(P.date??P.year))} \xB7 ${l(Rn[P.status]?.short??"")}</small></div>`).join("")}<h3>Not scored yet</h3>${Y.map(P=>`<div class="known"><span>${l(P.label)}</span><small>${l(P.ref??"")}</small></div>`).join("")}${lt.length?`<h3>No published position</h3>${lt.map(P=>`<div class="known"><span>${l(P.what)}</span><small>${l(P.site.split(",")[0])}</small></div>`).join("")}`:""}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>`}),N.push({id:"work",label:"Help build",draw:P=>{let ot=k(P,"Open work","Help build");[G.slice(0,Math.ceil(Math.min(G.length,10)/2)),G.slice(Math.ceil(Math.min(G.length,10)/2),10)].forEach((ht,at)=>{let wt=ot;for(let Pt of ht)P.font=A(18,700),P.fillStyle=Vl,P.textBaseline="top",P.fillText(Pt.area.toUpperCase(),(56+at*532)*S,wt*S),wt=T(P,Pt.title,56+at*532,wt+24,480,25,{rows:1})+13})},sheet:()=>ut()}),N.push({id:"map",label:"Kircher, 1664",draw:(P,ot)=>{P.fillStyle=$f,P.fillRect(0,0,_,b),P.fillStyle=Vl,P.fillRect(0,0,_,5*S);let Z=(r.storyMedia??[]).find(at=>/kircher/.test(at.file));if(!Z)return;let ht=new Image;ht.onload=()=>{let at=Math.min((_-80*S)/ht.width,(b-110*S)/ht.height),wt=ht.width*at,Pt=ht.height*at;P.drawImage(ht,(_-wt)/2,30*S,wt,Pt),T(P,Z.caption.split(".")[0],56,(30*S+Pt)/S+14,1040,22,{colour:Ls,rows:1}),ot?.()},ht.src=globalThis.__STORY__?.[Z.file]??`${globalThis.__ASSETS__||"./"}${Z.file}`},sheet:()=>{let P=(r.storyMedia??[]).find(ot=>/kircher/.test(ot.file));return P?`<h2>${l(P.caption.split(".")[0])}</h2><p>${o(P.source,P.by)} \xB7 ${l(P.licence)}</p>`:""}});N.length<12;)N.push(null);let L=()=>i.host?.community??m?.community??"atlantis",st=()=>(m?.repository??"").replace(/\/[^/]+$/,`/${L()}`),nt=P=>`Help with a/${L()} on Abstracts (https://abstracts.co/a/${L()}). Its repository is ${st()}.

${P?`The task: ${P.title} (${P.id}, ${P.area}).
${P.why}
Done when: ${P.done_when}`:"Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want."}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${P?` This task starts in: ${P.start.join(", ")}.`:""}
2. Offer to say on the community's Wall that I am taking ${P?P.id:"the task"}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${P?P.check.map(ot=>`\`${ot}\``).join(" and "):"the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${st()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${P?P.id:"the task"} in it.`,ut=()=>`<h2>Help build</h2>${Object.entries(m?.areas??{}).map(([P,ot])=>{let Z=G.filter(ht=>ht.area===P);return Z.length?`<h3>${l(P[0].toUpperCase()+P.slice(1))}</h3>${Z.map(ht=>`<details class="hl-task"><summary><b>${l(ht.title)}</b><small>${l(ht.size)}</small></summary><p>${l(ht.why)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${l(ht.id)}">Copy the prompt for my AI</button></div></details>`).join("")}`:""}).join("")}`,j=P=>{let ot=N.find(Z=>Z?.id===P);ot&&(h("hall"),c.textContent="The hall",u.innerHTML=ot.sheet())};u.addEventListener("click",P=>{let ot=P.target.closest('[data-act^="hl-"]');if(!ot)return;let Z=ot.dataset.act;if(Z==="hl-work")j("work");else if(Z==="hl-open")j(ot.dataset.id);else if(Z==="hl-globe")i.openGlobe?.();else if(Z==="hl-board")i.openGlobe?.(!1),t?.openBoard();else if(Z==="hl-place"){let ht=t?.atlantis.places.find(at=>at.id===ot.dataset.id);i.openGlobe?.(!1),ht&&t.openPlace(ht,!0)}else if(Z==="hl-prompt"){let ht=nt(G.find(at=>at.id===ot.dataset.id)??null);(navigator.clipboard?.writeText(ht)??Promise.reject()).then(()=>f("Copied. Paste it to your AI."),()=>{u.insertAdjacentHTML("beforeend",`<pre class="c-share">${l(ht)}</pre>`),f("Select the text and copy it")})}});let ct=()=>{let Z=document.createElement("canvas");Z.width=720,Z.height=360;let ht=Z.getContext("2d"),at=ht.createImageData(720,360),wt=at.data,Pt=e?.state,Jt=Pt?.n,Ut=Q=>[parseInt(Q.slice(1,3),16),parseInt(Q.slice(3,5),16),parseInt(Q.slice(5,7),16)],At=Ut("#0c2a44"),Lt=Ut("#3b4a3f"),kt=Ns.map(Ut);for(let Q=0;Q<360;Q++){let Wt=Math.max(-85,Math.min(85,90-(Q+.5)/360*180))*Math.PI/180,Rt=Jt?Math.max(0,Math.min(Jt-1,Math.floor((1-Math.log(Math.tan(Wt)+1/Math.cos(Wt))/Math.PI)/2*Jt))):0;for(let Bt=0;Bt<720;Bt++){let _t=At;if(Jt){let Ot=Rt*Jt+Math.floor(Bt/720*Jt),Ft=Pt.state[Ot];_t=Ft===1?Lt:Ft===2?kt[Math.max(1,Ry(Pt.bits[Ot]))]:At}let Dt=(Q*720+Bt)*4;wt[Dt]=_t[0],wt[Dt+1]=_t[1],wt[Dt+2]=_t[2],wt[Dt+3]=255}}return ht.putImageData(at,0,0),Z},vt=()=>{let P=d.city.hall,ot=new $e;ot.name="hall",x.boards=[],P.panels.forEach((Pt,Jt)=>{let Ut=N[Jt];if(!Ut)return;let At=document.createElement("canvas");At.width=_,At.height=b;let Lt=At.getContext("2d");Lt.textAlign="left",Ut.draw(Lt,()=>{x.boards.find(Dt=>Dt.canvas===At).tex.needsUpdate=!0,s.stamp++});let kt=new Li(At);kt.colorSpace=Ie,kt.anisotropy=4;let Q=new pe(new Un(Pt.w,Pt.h),new qe({map:kt})),Wt=new pt(-Math.cos(Pt.a),-Math.sin(Pt.a),0),Rt=new pt(0,0,1),Bt=new pt().crossVectors(Rt,Wt);Q.quaternion.setFromRotationMatrix(new xe().makeBasis(Bt,Rt,Wt)),Q.position.set(Pt.x,Pt.y,Pt.z);let _t=new pe(new Un(Pt.w+.16,Pt.h+.16),new qe({color:new se(.55,.4,.14)}));_t.quaternion.copy(Q.quaternion),_t.position.set(Pt.x-Wt.x*.03,Pt.y-Wt.y*.03,Pt.z),ot.add(_t,Q),x.boards.push({...Ut,mesh:Q,canvas:At,tex:kt,at:Pt})});let Z=new Li(ct());Z.colorSpace=Ie;let ht=new pe(new kn(P.globe.r,48,32),new qe({map:Z}));ht.rotation.x=Math.PI/2;let at=new $e,wt=new $e;return at.add(ht),wt.add(at),wt.rotation.y=.41,wt.position.set(P.globe.x,P.globe.y,P.globe.z),ot.add(wt),x.globe={ball:ht,tex:Z,painted:!!e?.state.ready},x.spin=at,ot};return{sync:()=>{let P=d.city?.group??null;if(P!==x.on&&(x.on=P,P&&d.city.hall)){x.group=vt(),P.add(x.group);let ot=d.city.hall;n.hotspots.length=0;for(let Z of x.boards)n.hotspots.push({id:Z.id,x:Z.at.x,y:Z.at.y,z:Z.at.z,reach:15,size:Z.at.w,label:Z.label,act:()=>j(Z.id)});n.hotspots.push({id:"globe",x:ot.globe.x,y:ot.globe.y,z:ot.globe.z,reach:13,size:ot.globe.r*2.4,label:"Open the globe",act:()=>i.openGlobe?.()})}!x.group||!d.active||(x.globe&&!x.globe.painted&&e?.state.ready&&(x.globe.tex.image=ct(),x.globe.tex.needsUpdate=!0,x.globe.painted=!0,s.stamp++),n.on&&Math.hypot(n.state.x,n.state.y)<d.city.hall.RG&&(x.spin.rotation.z=Cy+(s.time-(x.since??=s.time))*.05,s.stamp++))},show:j,boards:N,promptFor:nt,state:x,counts:{work:G.length,openSearches:V.length,unscored:Y.length,lost:lt.length}}};var Wl=["HALL22","HALL23","HALL24","HALL25","HALL26","HALL27","HALL28","HALL29"],Iy=30,Xf=38,Ly=8,Dy=900,Rh=280,Ny=i=>{let t=0;for(let e of String(i))t=(t*31+e.charCodeAt(0))%360;return t},Yf=(i,{walk:t})=>{let{world:e,$:n,esc:s,toast:r,st:a}=i,l=e.city,o=n("#meet"),h=n("#people"),u=new URLSearchParams(location.search).get("room"),c={state:"off",drawn:null,me:null,members:new Map,socket:null,room:0,seats:8,ice:[],batch:!1,lastPos:"",sentAt:0,saidAt:0,lines:[],muted:new Set,voice:{on:!1,stream:null,mic:!0,peers:new Map},group:null,on:null,tries:0},f=X=>{c.socket?.readyState===1&&c.socket.send(JSON.stringify(X))},d='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>',p=()=>{if(c.drawn!==c.state&&(c.drawn=c.state,o.dataset.state=c.state,o.innerHTML=c.state==="on"?`<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${Rh}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${d}</button><span class="mt-n" id="mt-n"></span></form>`:c.state==="signed-out"?'<button class="btn glass" data-act="mt-signin">Sign in to meet people</button>':c.state==="ask"?'<button class="btn glass" data-act="mt-join">Meet people</button>':c.state==="elsewhere"?`<a class="btn glass" href="https://abstracts.co/a/${s(i.data.open?.community??"atlantis")}?a_hall=1" target="_blank" rel="noopener">Meet people on abstracts.co</a>`:c.state==="joining"?'<button class="btn glass" data-act="mt-join">Meet people</button>':c.state==="full"?'<span class="mt-state">Rooms are full</span>':""),c.state==="on"){let X=n("#mt-log"),G=n("#mt-mic"),$=n("#mt-n");X.innerHTML=c.lines.slice(-6).map(N=>`<p${N.mine?' class="mine"':""}><b>${s(N.name)}</b> ${s(N.text)}</p>`).join(""),X.scrollTop=X.scrollHeight,G.className=`mt-mic${c.voice.on?c.voice.mic?" on":" muted":""}`,G.setAttribute("aria-label",c.voice.on?c.voice.mic?"Mute my microphone":"Unmute my microphone":"Talk with people near me"),G.setAttribute("aria-pressed",String(c.voice.on&&c.voice.mic)),$.textContent=`${c.members.size+1} here`}o.hidden=!o.innerHTML||!t.on},v=(X,G,$=!1)=>{c.lines.push({name:X,text:G,mine:$}),c.lines.length>40&&c.lines.shift(),p()},g=X=>{let G=new $e,$=new se().setHSL(Ny(X)/360,.55,.62),N=$.clone().multiplyScalar(.55),L=new pe(new Hr(.27,.86,4,10),new qe({color:$}));L.rotation.x=Math.PI/2,L.position.z=.72;let st=new pe(new kn(.21,12,10),new qe({color:$.clone().multiplyScalar(1.15)}));st.position.z=1.52;let nt=new pe(new Vr(.09,.26,8),new qe({color:N}));nt.position.set(0,.24,1.5);let ut=new pe(new qn(.42,.5,24),new qe({color:new se(1.4,1.1,.4),transparent:!0,opacity:0}));return ut.position.z=.03,G.add(L,st,nt,ut),G.userData.ring=ut,G},m=X=>{let G=document.createElement("div");return G.className="person",G.innerHTML=`<i></i><span>${s(X.name)}</span>`,h.append(G),G},x=X=>{if(!X?.id||X.id===c.me?.id||c.members.has(X.id))return c.members.get(X?.id);let G={id:X.id,name:X.name||X.username||"Someone",username:X.username,x:0,y:0,dir:0,tx:null,ty:0,tdir:0,voice:!1,talking:0,seen:0,fig:g(X.id),tag:null};return G.fig.visible=!1,G.tag=m(G),c.group?.add(G.fig),c.members.set(X.id,G),G},_=X=>{let G=c.members.get(X);G&&(G.fig.removeFromParent(),G.tag.remove(),H(X),c.members.delete(X),p(),e.stamp++)},b=(X,G)=>{let $=c.members.get(X);!$||!Array.isArray(G)||!G.slice(0,3).every(Number.isFinite)||([$.tx,$.ty,$.tdir]=G,$.voice=!!(G[3]&1),$.seen=performance.now(),$.fig.visible===!1&&($.x=$.tx,$.y=$.ty,$.dir=$.tdir,$.fig.visible=!0))},S=async()=>u?{url:u.replace(/[A-Z2-9]{6}$/,Wl[c.room]),token:`dev.${encodeURIComponent(new URLSearchParams(location.search).get("as")??"Guest")}`,ice:[],room:Wl[c.room]}:bi("roomToken",{room:Wl[c.room]}),A=async(X=!1)=>{if(c.state!=="on"){if(c.state==="joining"){X&&(c.wantAsk=!0);return}c.state="joining",p();try{!u&&X&&await bi("viewer");let G=await S();c.ice=G.ice??[],c.seats=G.seats??8;let $=c.socket=new WebSocket(`${G.url}?token=${encodeURIComponent(G.token)}`);$.onmessage=N=>{let L;try{L=JSON.parse(N.data)}catch{return}y(L)},$.onclose=N=>{if(c.socket===$){c.socket=null;for(let L of[...c.members.keys()])_(L);if(N.code===4003&&c.room<Wl.length-1)return c.room++,c.state="off",A();if(N.code===4003)return c.state="full",p();if(N.code===4001)return c.state="ask",r("You joined from somewhere else"),p();c.state="off",t.on&&c.tries++<5?setTimeout(()=>{t.on&&c.state==="off"&&A()},1500*c.tries):(c.state="ask",p())}}}catch(G){if(c.state=G?.code==="signed_out"?"signed-out":G?.code==="unsupported"?"off":"ask",!X&&c.wantAsk&&c.state==="ask")return c.wantAsk=!1,A(!0);X&&G?.code&&!["denied","cancelled","signed_out"].includes(G.code)&&r("The room is not answering"),p()}}},y=X=>{if(X.t==="welcome"){c.me=X.you,c.state="on",c.tries=0,c.batch=X.seats!==void 0,X.seats&&(c.seats=X.seats);for(let G of X.members??[])x(G);for(let[G,$]of Object.entries(X.pos??{}))b(G,$);c.lastPos="",p()}else if(X.t==="join"){let G=x(X.member);G&&v(G.name,"came in"),c.lastPos=""}else if(X.t==="leave"){let G=c.members.get(X.id);G&&v(G.name,"left"),_(X.id)}else if(X.t==="pos")for(let[G,$]of Object.entries(X.from??{}))b(G,$);else if(X.t==="msg"){let G=X.data,$=c.members.get(X.from);if(!$||!G||typeof G!="object")return;Array.isArray(G.p)?b(X.from,G.p):typeof G.c=="string"&&!c.muted.has(X.from)?(v($.name,G.c.slice(0,Rh)),i.sound?.sfx("tick",.12)):G.rtc&&ft(X.from,G.rtc)}else X.t==="error"&&X.code==="invalid"&&c.batch&&(c.batch=!1)},T=()=>{let X=c.socket;c.socket=null,X?.close(1e3);for(let G of[...c.members.keys()])_(G);V(),(c.state==="on"||c.state==="joining")&&(c.state="ask"),p()},k=X=>{let G=X.trim().slice(0,Rh),$=performance.now();return!G||c.state!=="on"?!1:$-c.saidAt<Dy?(r("A moment between lines"),!1):(c.saidAt=$,f({t:"send",data:{c:G}}),v(c.me?.name??"You",G,!0),!0)},M=c.voice,H=X=>{let G=M.peers.get(X);if(G){M.peers.delete(X);try{G.pc.close()}catch{}G.out?.disconnect(),G.el?.remove()}},J=X=>{if(M.peers.has(X))return M.peers.get(X);let G=new RTCPeerConnection({iceServers:c.ice}),$={pc:G,id:X,out:null,gain:null,pan:null,level:null,el:null,polite:String(c.me.id)>String(X),making:!1};if(M.peers.set(X,$),M.stream)for(let N of M.stream.getAudioTracks())G.addTrack(N,M.stream);else G.addTransceiver("audio",{direction:"recvonly"});return G.onicecandidate=N=>{N.candidate&&f({t:"send",to:X,data:{rtc:{ice:N.candidate}}})},G.onnegotiationneeded=async()=>{try{$.making=!0,await G.setLocalDescription(),f({t:"send",to:X,data:{rtc:{sdp:G.localDescription}}})}catch{}finally{$.making=!1}},G.ontrack=N=>{let L=N.streams[0]??new MediaStream([N.track]),st=i.sound?.context;$.el=Object.assign(document.createElement("audio"),{srcObject:L,muted:!!st,autoplay:!0}),$.el.play?.().catch(()=>{}),st&&($.out=st.createMediaStreamSource(L),$.gain=st.createGain(),$.gain.gain.value=0,$.pan=st.createStereoPanner(),$.level=st.createAnalyser(),$.level.fftSize=256,$.out.connect($.level),$.out.connect($.gain).connect($.pan).connect(i.sound.master))},G.onconnectionstatechange=()=>{["failed","closed"].includes(G.connectionState)&&H(X)},$},ft=async(X,G)=>{if(!M.on)return;let $=J(X),N=$.pc;try{if(G.sdp){if(G.sdp.type==="offer"&&($.making||N.signalingState!=="stable")&&!$.polite)return;await N.setRemoteDescription(G.sdp),G.sdp.type==="offer"&&(await N.setLocalDescription(),f({t:"send",to:X,data:{rtc:{sdp:N.localDescription}}}))}else G.ice&&await N.addIceCandidate(G.ice).catch(()=>{})}catch{}},F=async()=>{if(!M.on){try{M.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),M.mic=!0}catch{M.stream=null,M.mic=!1,r("No microphone: you can listen")}M.on=!0,c.lastPos="",i.sound?.context.state!=="running"&&i.sound?.context.resume().catch(()=>{}),p()}},V=()=>{if(M.on){M.on=!1;for(let X of[...M.peers.keys()])H(X);for(let X of M.stream?.getTracks()??[])X.stop();M.stream=null,c.lastPos="",p()}},O=()=>{M.mic=!M.mic;for(let X of M.stream?.getAudioTracks()??[])X.enabled=M.mic;p()};document.addEventListener("visibilitychange",()=>{if(document.hidden&&M.on&&M.stream){M.mic=!1;for(let X of M.stream.getAudioTracks())X.enabled=!1;p()}});let Y=new pt,lt=X=>{let G=l.city?.group??null;if(G!==c.on)if(c.on=G,G){c.group=new $e,c.group.name="people",G.add(c.group);for(let P of c.members.values())c.group.add(P.fig)}else c.group=null;if(!t.on){(c.state==="on"||c.state==="joining")&&T(),o.hidden||(o.hidden=!0,h.hidden=!0);return}h.hidden=!1,o.hidden&&p();let $=t.state,N=performance.now();if(c.state==="on"){let P=[Math.round($.x*10)/10,Math.round($.y*10)/10,Math.round($.dir*100)/100,M.on?1:0],ot=P.join(",");(ot!==c.lastPos&&N-c.sentAt>(c.batch?200:330)||N-c.sentAt>3e3)&&(c.lastPos=ot,c.sentAt=N,f(c.batch?{t:"pos",data:P}:{t:"send",data:{p:P}}))}if(!c.members.size)return;let L=l.camera,st=e.renderer.domElement,nt=st.clientWidth,ut=st.clientHeight,j=1-Math.exp(-X*9),[ct,vt]=t.forward(),mt=[];for(let P of c.members.values()){if(P.tx==null)continue;let ot=P.x+P.y;P.x+=(P.tx-P.x)*j,P.y+=(P.ty-P.y)*j;let Z=P.tdir-P.dir;Z=Math.atan2(Math.sin(Z),Math.cos(Z)),P.dir+=Z*j;let ht=l.localFloor(P.x,P.y)??$.z;P.fig.position.set(P.x,P.y,ht),P.fig.rotation.z=-P.dir-l.turn,Math.abs(P.x+P.y-ot)>.001&&e.stamp++;let at=Math.hypot(P.x-$.x,P.y-$.y);Y.set(P.x,P.y,ht+1.95).applyMatrix4(G.matrixWorld).project(L);let wt=Y.z<1&&Y.z>-1&&Math.abs(Y.x)<1.05&&Math.abs(Y.y)<1.05&&at<160;P.tag.style.display=wt?"":"none",wt&&(P.tag.style.transform=`translate(${(Y.x+1)/2*nt}px, ${(1-Y.y)/2*ut}px) translate(-50%, -100%)`,P.tag.style.opacity=at<60?1:.6);let Pt=M.peers.get(P.id);if(Pt?.gain){let Jt=at<3?1:Math.max(0,1-(at-3)/(Xf-3))**1.6,Ut=((P.x-$.x)*vt-(P.y-$.y)*ct)/Math.max(at,.5);Pt.gain.gain.value+=((c.muted.has(P.id)?0:Jt)-Pt.gain.gain.value)*j,Pt.pan.pan.value+=(Math.max(-.85,Math.min(.85,Ut))-Pt.pan.pan.value)*j;let At=new Uint8Array(Pt.level.fftSize);Pt.level.getByteTimeDomainData(At);let Lt=0;for(let kt of At)Lt=Math.max(Lt,Math.abs(kt-128));P.talking+=((Lt>9?1:0)-P.talking)*Math.min(1,X*8)}else P.talking*=.9;P.fig.userData.ring.material.opacity=P.talking,P.tag.classList.toggle("talking",P.talking>.4),P.voice&&mt.push([at,P.id])}if(M.on&&c.state==="on"){mt.sort((ot,Z)=>ot[0]-Z[0]);let P=new Set(mt.filter(([ot])=>ot<Iy).slice(0,Ly).map(([,ot])=>ot));for(let ot of P)!M.peers.has(ot)&&String(c.me.id)<String(ot)&&J(ot);for(let[ot]of M.peers){let Z=c.members.get(ot);(!Z||!Z.voice||Math.hypot(Z.x-$.x,Z.y-$.y)>Xf)&&H(ot)}}},et=async()=>{if(c.state==="on"||c.state==="joining")return;if(u)return A();if(!ls)return c.state="elsewhere",p();let X=a.host;if(!X)return c.state="off",p();if(!X.signedIn)return c.state="signed-out",p();c.state="ask",p(),c.tries=0,await A(!1)};return o.addEventListener("click",X=>{let G=X.target.closest("[data-act]")?.dataset.act;G==="mt-signin"?bi("signIn").catch(()=>r("Sign-in is not answering")):G==="mt-join"?A(!0):G==="mt-voice"&&(M.on?M.stream?O():V():F())}),o.addEventListener("submit",X=>{X.preventDefault();let G=n("#mt-text");G&&k(G.value)&&(G.value="",G.blur())}),addEventListener("keydown",X=>{t.on&&c.state==="on"&&(X.code==="KeyT"||X.code==="Slash")&&!X.target.closest?.("input, textarea")&&(n("#mt-text")?.focus(),X.preventDefault()),X.code==="Escape"&&X.target.id==="mt-text"&&X.target.blur()}),{tick:lt,arrive:et,leave:T,join:A,say:k,voiceOn:F,voiceOff:V,mute:O,state:c,get count(){return c.members.size}}};var Fs=[{key:"sank",claim:"sank-in-a-day-and-night",name:"It sank",word:"sank",yes:"Land at Plato's date, open sea today.",no:"It did not go under."},{key:"atlantic",claim:"beyond-pillars",name:"Beyond the Pillars",word:"beyond the Pillars",yes:"On the Atlantic side, outside the strait.",no:"Not on the Atlantic, or inside the strait."},{key:"plain",claim:"great-plain",name:"Great plain",word:"great plain",yes:"Level low ground of the size he gives.",no:"No level plain of his size here."},{key:"mountains",claim:"mountains-shelter-north",name:"Mountains north",word:"mountains north",yes:"Higher ground on the north side than the south.",no:"No mountains sheltering it from the north."},{key:"island",claim:"larger-than-libya-and-asia",name:"An island",word:"island",yes:"The land it stood on was an island then.",no:"Part of a continent then, not an island."}],Fy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Uy=i=>{let t=(i??"").split(",").map(e=>e.trim()).filter(Boolean);return t.length>2?`${t[0]}, ${t[t.length-1]}`:t.join(", ")},Zf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,toast:l,setSheet:o,body:h,eyebrow:u,stage:c}=i,{control:f,globe:d}=t,p=d.shared,v=e.worldfit,g=e.cas;if(!v)return null;let m=s("#hunt"),x=s("#reticle"),_={forced:!1,ready:!1,n:0,score:null,bits:null,state:null,on:!1,last:"",claim:null,glow:1},b=$=>g?.claims.find(N=>N.id===$),S=$=>(b($.claim)?.ref??"").split(";")[0];(async()=>{let $=t.phone?"worldfit-2k.png":"worldfit.png",N=await fetch(globalThis.__WORLDFIT__?.[$]??(globalThis.__ASSETS__||"./")+$);if(!N.ok)throw new Error(`worldfit: HTTP ${N.status}`);let L=await createImageBitmap(await N.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),st=L.width,nt=512,ut=new Uint8Array(st*st),j=new Uint8Array(st*st),ct=new Uint8Array(st*st),mt=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:st,height:nt}):new OffscreenCanvas(st,nt)).getContext("2d",{willReadFrequently:!0});for(let Z=0;Z<st;Z+=nt){mt.clearRect(0,0,st,nt),mt.drawImage(L,0,Z,st,nt,0,0,st,nt);let ht=mt.getImageData(0,0,st,nt).data;for(let at=0,wt=Z*st;at<st*nt;at++,wt++)ut[wt]=ht[at*4],j[wt]=ht[at*4+1],ct[wt]=ht[at*4+2]}L.close?.();let P=new Uint8Array(st*st);for(let Z=0;Z<st;Z++)for(let ht=0;ht<st;ht++){let at=0;for(let wt=-1;wt<=1;wt++){let Pt=Z+wt<0?0:Z+wt>=st?st-1:Z+wt;for(let Jt=-1;Jt<=1;Jt++)at+=ut[Pt*st+(ht+Jt+st)%st]*(Jt||wt?1:2)}P[Z*st+ht]=at*5}let ot=new Sn(P,st,st,fi,an);ot.minFilter=rn,ot.magFilter=Ae,ot.wrapS=Pi,ot.wrapT=_n,ot.generateMipmaps=!0,ot.needsUpdate=!0,p.tHeat.value=ot,p.uHeatLod.value=st<v.grid.size?-1:0,Object.assign(_,{n:st,bits:j,state:ct,ready:!0}),t.stamp++})().catch($=>{console.warn($.message),m.classList.remove("open")});let y=($,N)=>{if(!_.ready)return null;let L=_.n,st=$t(Math.floor(($+180)/360*L),0,L-1),nt=$t(N,-85,85)*yt,ut=$t(Math.floor((1-Math.log(Math.tan(nt)+1/Math.cos(nt))/Math.PI)/2*L),0,L-1),j=_.bits[ut*L+st],ct=_.state[ut*L+st];return{state:ct,bits:j,score:ct===0?0:Fy(j),clues:Fs.map((vt,mt)=>!!(j&1<<mt))}},T={sank:"Sank",atlantic:"Atlantic",plain:"Plain",mountains:"Mountains",island:"Island"};m.innerHTML=`<div class="h-main"><b id="h-score"></b><div class="h-clues">${Fs.map(($,N)=>`<span class="h-c" data-j="${N}"><i></i>${r(T[$.key])}</span>`).join("")}</div><button class="btn primary" data-act="h-claim">Check this spot</button></div>`;let M=()=>{let $=n.hunt&&_.ready&&(!i.busy()||_.forced);$!==_.on&&(_.on=$,m.classList.toggle("open",$),x.classList.toggle("open",$),c.classList.toggle("hunting",$),i.sound?.deep($));let N=n.hunt&&_.ready?$||n.sheet==="claim"||!s("#intro").classList.contains("gone")?_.glow:.3*_.glow:0;if(Math.abs(p.uHeat.value-N)>.004&&(p.uHeat.value+=(N-p.uHeat.value)*.12,t.stamp++),!$)return;x.style.left=`${50+f.shift[0]*50}%`,x.style.top=`${50-f.shift[1]*50}%`;let L=f.lat/yt,st=f.lon/yt,nt=y(st,L),ut=`${nt.state}|${nt.bits}`;if(ut===_.last)return;_.last=ut;let j=s("#h-score");j.innerHTML=nt.state===0?"":`${nt.score}<small>/5</small>`,m.querySelector('[data-act="h-claim"]').disabled=nt.state===0,j.className=`s${nt.state===2?nt.score:0}`,j.setAttribute("aria-label",nt.state===0?"Open sea at Plato's date too: nothing here to sink":nt.state===1?`${nt.score} of 5. Dry land then and now: it never sank`:`${nt.score} of 5, on land that has gone under`),x.className=`open s${nt.state===2?nt.score:0}`;for(let ct of m.querySelectorAll(".h-c"))ct.classList.toggle("on",nt.state!==0&&nt.clues[Number(ct.dataset.j)]);i.sound?.read(nt)},H=null,J=($,N)=>{let L=xn($*yt,N*yt),st=performance.now(),nt=$t(f.range/1e3*.75,30,3500);cancelAnimationFrame(H);let ut=()=>{let j=$t((performance.now()-st)/1700,0,1);p.uScan.value.set(L[0],L[1],L[2],Math.max(nt*(1-(1-j)**2.2),.01)),p.uScanA.value=1.1*(1-j)**1.3,t.stamp++,j<1?H=requestAnimationFrame(ut):p.uScanA.value=0};ut()},ft=$=>{let N=v.totals;return N.by_score.filter(st=>st.score<$).reduce((st,nt)=>st+nt.km2,0)/N.land_that_sank_km2*100},F=($,N)=>`The hunt for Atlantis \u{1F531} ${$.score}/5
${$.clues.map(L=>L?"\u{1F7E9}":"\u{1F7E5}").join("")}
${Fs.map(L=>L.word).join(" \xB7 ")}
${An($.lat,$.lon,2)}${$.name?` \xB7 ${$.name}`:""}
${N}`,V=$=>i.shareUrl({hunt:`${$.lat.toFixed(3)},${$.lon.toFixed(3)}`},!0),O={copy:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',x:'<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',save:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>'},Y=()=>{let $=_.claim,N=v.places;u.textContent="Landscape match";let L=N.filter(nt=>nt.score<$.score).length,st=$.state===0?"Open sea at Plato's date too. There was no land here to sink.":$.state===1?"Dry land then and now. It never sank, which is the heart of the story.":`Better than ${ft($.score).toFixed($.score>=4?1:0)}% of all the land that has gone under. Beats ${L} of the ${N.length} famous claims.`;h.innerHTML=`
      <div class="c-hero s${$.state===2?$.score:0}"><b>${$.state===0?"\u2013":`${$.score}<small>/5</small>`}</b><div class="sq">${$.clues.map(nt=>`<i class="${nt?"y":"n"}"></i>`).join("")}</div></div>
      <h2 class="c-name">${r($.name??An($.lat,$.lon,2))}</h2>
      <div class="c-sub">${$.name?An($.lat,$.lon,2):$.state===2?"Sunken land":$.state===1?"Dry land":"Open sea"}</div>
      <div class="c-list">${Fs.map((nt,ut)=>`<details class="c-row ${$.clues[ut]?"y":"n"}"><summary><i></i>${r(nt.name)}<small>${r(S(nt))}</small></summary><p>${r($.state===0?"No land here at that date.":$.clues[ut]?nt.yes:nt.no)}${b(nt.claim)?.quote?` <em class="q">\u201C${r(b(nt.claim).quote)}\u201D</em>`:""}</p></details>`).join("")}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${O.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${O.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${O.save}</button></div>
      <details class="c-more"><summary>More</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${r(F($,V($)))}</pre>`},lt=async($,N,L=!1)=>{if(!_.ready)return;let st=y(N,$),nt=v.best.find(ut=>ut.near?.name&&!/^off /.test(ut.near.name)&&Math.abs(ut.lat-$)<1.2&&Math.abs(ut.lon-N)<1.2&&st.state===2);_.claim={lat:$,lon:N,...st,name:nt?nt.near.name:null,named:!!nt},n.legend=n.place=null,i.leaveScene(),o("claim"),h.scrollTop=0,Y(),L&&f.flyTo({lon:N*yt,lat:$*yt,range:$t(f.range,6e4,9e5),tilt:30*yt,heading:0},2.4),setTimeout(()=>{J(N,$),i.sound?.sfx("ping",.8),st.state===2&&st.score>=4&&setTimeout(()=>i.sound?.sfx("reveal",.5),500)},L?2200:60);try{let j=(await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${$}&lon=${N}`,{signal:AbortSignal.timeout(6e3)}).then(vt=>vt.json())).features?.[0]?.properties,ct=j&&[j.name??j.county??j.state,j.country].filter(Boolean).join(", ");ct&&_.claim&&_.claim.lat===$&&!_.claim.named&&n.sheet==="claim"&&(_.claim.name=`Near ${ct}`,Y())}catch{}},et=()=>{u.textContent="Top scores";let $=(ut,j)=>`<button class="prow" data-act="h-go" data-ll="${ut.lat},${ut.lon}"><b class="lb s${ut.top}">${ut.top}/5</b><span class="pn">${r(ut.near?.name?Uy(ut.near.name):An(ut.lat,ut.lon,1))}</span><small>${ut.km2.toLocaleString("en")} km\xB2</small></button>`,N=v.best.filter(ut=>!ut.near_old_ice).slice(0,8),L=v.best.filter(ut=>ut.near_old_ice).slice(0,5),st=v.totals,nt=(st.land_that_sank_km2/1e6).toFixed(1);h.innerHTML=`
      <h2>Best on Earth</h2>
      <p class="lead">${nt} million km\xB2 of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${st.by_score.map(ut=>`<div><b class="lb s${ut.score}">${ut.score}/5</b><i style="width:${Math.max(1.5,ut.km2/st.land_that_sank_km2*100).toFixed(1)}%"></i><small>${ut.km2>=1e6?`${(ut.km2/1e6).toFixed(1)} million km\xB2`:ut.km2>=500?`${Math.round(ut.km2/1e3).toLocaleString("en")} thousand km\xB2`:"none"}</small></div>`).join("")}</div>
      <h3>The best matches</h3>
      ${N.map($).join("")}
      ${L.length?`<h3>Near the old ice sheets</h3>${L.map($).join("")}`:""}
      <h3>The famous claims, by the same rules</h3>
      ${v.places.map(ut=>`<button class="prow" data-act="a-place" data-id="${r(ut.id)}"><b class="lb s${ut.score}">${ut.score}/5</b><span class="pn">${r(i.shortName(ut.name))}</span><small>${r(ut.note?"open sea then":ut.clues.map(j=>Fs.find(ct=>ct.key===j).word).join(", ")||"none")}</small></button>`).join("")}
      `},X=()=>{u.textContent="How it's scored";let $=v.rules,N={sank:`The cell was land with the sea ${Math.abs($.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,atlantic:"The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.",plain:`At least ${Math.round($.plain.share_needed*100)}% of a ${Math.round($.plain.long_km)} by ${Math.round($.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${$.plain.low_ground_max_m_above_today} m above today's sea.`,mountains:`The ground ${$.mountains.band_from_km} to ${$.mountains.band_to_km} km to its north averages at least ${$.mountains.north_mean_at_least_m} m, and at least ${$.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,island:`The piece of land it belonged to then was smaller than ${($.island.smaller_than_km2/1e6).toFixed(1)} million km\xB2: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`};h.innerHTML=`
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${g?.claims.filter(L=>L.testable).length??27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${Fs.map(L=>`<div class="c-row y"><i></i><span><b>${r(L.name)}</b> <small>${r(S(L))}</small><br>${r(N[L.key])}${b(L.claim)?.quote?`<br><em class="q">\u201C${r(b(L.claim).quote)}\u201D</em>`:""}</span></div>`).join("")}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${v.limits.map(L=>`<li>${r(L)}</li>`).join("")}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`},G=($,N)=>{let L=_.claim;if($==="h-claim")lt(f.lat/yt,f.lon/yt);else if($==="h-best")n.legend=n.place=null,i.leaveScene(),o("best"),h.scrollTop=0,et();else if($==="h-rules")n.legend=n.place=null,i.leaveScene(),o("rules"),h.scrollTop=0,X();else if($==="h-story")i.tour?.();else if($==="h-go"){let[st,nt]=N.dataset.ll.split(",").map(Number);lt(st,nt,!0)}else if($==="h-share")i.shareOut({text:F(L,""),url:V(L),both:F(L,V(L))});else if($==="h-copy")navigator.clipboard?.writeText(F(L,V(L))).then(()=>l("Copied. Paste it anywhere."),()=>{s("#c-share").hidden=!1,l("Select the text and copy it")});else if($==="h-x")window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(F(L,V(L)))}`,"_blank","noopener");else if($==="h-pic")t.snap=st=>{if(!st)return l("Could not take the picture");let nt=document.createElement("a");nt.href=URL.createObjectURL(st),nt.download=`atlantis-hunt-${L.lat.toFixed(2)}_${L.lon.toFixed(2)}.jpg`,nt.click(),setTimeout(()=>URL.revokeObjectURL(nt.href),4e3)},t.stamp++;else if($==="h-fit")i.fitAt(L.lat,L.lon);else if($==="h-city")i.standCity(L.lat,L.lon);else if($==="h-known")i.checkKnown(L.lat,L.lon,20);else return!1;return!0};return m.addEventListener("click",$=>{let N=$.target.closest("[data-act]");N&&G(N.dataset.act,N)}),{fit:y,claim:lt,scan:J,click:G,tick:M,drawBest:et,state:_,CLUES:Fs,get ready(){return _.ready},setGlow:$=>{_.glow=$}}};var jf={on:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',off:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>'},$l=2.5,ky=.006,Oy=.04,By=.14,Jf=i=>Float32Array.from({length:48},(t,e)=>i(e/47*Math.PI/2)),zy=Jf(Math.sin),Hy=Jf(Math.cos),Kf=i=>{let{data:t,$:e}=i,n=t.audio,s=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n||!s)return null;let r=e("#b-sound"),a={on:!0,ac:null,master:null,buffers:new Map,voice:null,want:new Map,loops:new Map,last:{score:-1,lit:-1,lockAt:0,tickAt:0,stepAt:0},log:[]},l=(F,V={})=>{globalThis.__AUDIOLOG__&&a.log.push({t:performance.now(),kind:F,...V})},o=F=>globalThis.__AUDIO__?.[F]??`${globalThis.__ASSETS__||"./"}audio/${F}`,h=async F=>{let V=o(F);if(V.startsWith("data:")){let Y=atob(V.slice(V.indexOf(",")+1)),lt=new Uint8Array(Y.length);for(let et=0;et<Y.length;et++)lt[et]=Y.charCodeAt(et);return lt.buffer}let O=await fetch(V);if(!O.ok)throw new Error(`${F}: ${O.status}`);return O.arrayBuffer()},u=()=>{if(a.ac)return a.ac;let F=a.ac=new s({latencyHint:"interactive"});a.master=F.createGain();let V=F.createDynamicsCompressor();return V.threshold.value=-9,V.knee.value=6,V.ratio.value=14,V.attack.value=.003,V.release.value=.22,a.master.connect(V).connect(F.destination),F},c=()=>{let F=u();return F.state!=="running"&&F.resume().then(y).catch(()=>{}),F.state==="running"},f=F=>(a.buffers.has(F)||a.buffers.set(F,h(F).then(V=>u().decodeAudioData(V)).catch(()=>null)),a.buffers.get(F)),d=(F=[])=>{for(let V of F){let O=n.narration?.[ya(V)];O&&f(O.file)}},p=(F,{volume:V=1,offset:O=0,at:Y=0,fadeIn:lt=ky,out:et=a.master}={})=>{let X=a.ac,G=X.createBufferSource(),$=X.createGain();G.buffer=F;let N=Math.max(X.currentTime+.005,Y),L=Math.max(.05,F.duration-O),st=Math.min(lt,L/3),nt=Math.min(Oy,L/3);return $.gain.setValueAtTime(0,N),$.gain.linearRampToValueAtTime(V,N+st),$.gain.setValueAtTime(V,N+L-nt),$.gain.linearRampToValueAtTime(0,N+L),G.connect($).connect(et),G.start(N,O),{node:G,gain:$,t0:N,dur:L,offset:O}},v=(F,V=By)=>{let O=a.ac,Y=O.currentTime;if(!(Y>=F.t0+F.dur)){F.gain.gain.cancelScheduledValues(Y),F.gain.gain.setValueAtTime(F.gain.gain.value,Y),F.gain.gain.linearRampToValueAtTime(0,Y+V);try{F.node.stop(Y+V+.03)}catch{}}},g=(F,V=0)=>{m();let O=n.narration?.[ya(F)];if(!O)return 0;if(a.on){let Y=a.voice={clip:O,at:V,playing:null,paused:!1};V<O.seconds-.2&&f(O.file).then(lt=>{a.voice===Y&&!Y.paused&&lt&&a.on&&c()&&(Y.playing=p(lt,{offset:V,fadeIn:V?.05:void 0}),l("say",{file:O.file,volume:1,offset:V}))})}return O.seconds},m=()=>{let F=a.voice;a.voice=null,F?.playing&&(v(F.playing),l("hush",{file:F.clip.file}))},x=()=>{let F=a.voice;!F||F.paused||(F.paused=!0,F.playing&&(F.at=Math.min(F.clip.seconds,F.playing.offset+Math.max(0,a.ac.currentTime-F.playing.t0)),v(F.playing,.09),F.playing=null,l("hush",{file:F.clip.file})))},_=()=>{let F=a.voice;if(!F||!F.paused)return;F.paused=!1;let V=Math.max(0,F.at-.25);a.on&&V<F.clip.seconds-.1&&f(F.clip.file).then(O=>{a.voice===F&&!F.paused&&O&&c()&&(F.playing=p(O,{offset:V,fadeIn:.06}),l("say",{file:F.clip.file,volume:1,offset:V}))})},b=()=>{let F=a.voice,V=F?.playing;return{clip:F?.clip.file??null,paused:!!F?.paused,playing:!!V&&a.ac.currentTime<V.t0+V.dur,at:V?V.offset+Math.max(0,a.ac.currentTime-V.t0):F?.at??0}},S=(F,V=.6)=>{let O=n.sfx?.[F];!O||!a.on||(l("sfx",{file:O.file,volume:V}),f(O.file).then(Y=>{Y&&a.on&&c()&&p(Y,{volume:V})}))},A=(F,V,O=.25)=>{if(!n.sfx?.[F])return;let Y=a.want.get(F);V?Y!==O&&(a.want.set(F,O),y()):Y!==void 0&&(a.want.delete(F),y())};function y(){let F=a.ac;for(let[V,O]of a.loops){let Y=a.on?a.want.get(V):void 0;if(Y===void 0){if(a.loops.delete(V),l("loop-off",{file:O.file}),O.gain){let lt=F.currentTime;O.gain.gain.cancelScheduledValues(lt),O.gain.gain.setValueAtTime(O.gain.gain.value,lt),O.gain.gain.linearRampToValueAtTime(0,lt+1.5);for(let et of O.parts)try{et.node.stop(lt+1.6)}catch{}}}else Y!==O.volume&&O.gain&&(O.volume=Y,O.gain.gain.setTargetAtTime(Y,F.currentTime,.4))}if(a.on){for(let[V,O]of a.want)if(!a.loops.has(V)){let Y={name:V,file:n.sfx[V].file,volume:O,gain:null,parts:[],next:0,buffer:null};a.loops.set(V,Y),l("loop-on",{file:Y.file,volume:O,cross:$l}),f(Y.file).then(lt=>{Y.buffer=lt,y()})}}if(a.loops.size&&c())for(let V of a.loops.values()){if(!V.buffer)continue;let O=F.currentTime,Y=V.buffer.duration,lt=Y-$l;for(V.gain||(V.gain=F.createGain(),V.gain.gain.setValueAtTime(0,O),V.gain.gain.linearRampToValueAtTime(V.volume,O+1.2),V.gain.connect(a.master),V.next=O+.02);V.next<O+1.2;){let et=!V.parts.length,X=F.createBufferSource(),G=F.createGain(),$=V.next;X.buffer=V.buffer,G.gain.setValueAtTime(et?1:0,$),et||G.gain.setValueCurveAtTime(zy,$,$l),G.gain.setValueCurveAtTime(Hy,$+lt,$l-.005),X.connect(G).connect(V.gain),X.start($),V.parts.push({node:X,end:$+Y}),V.next=$+lt}V.parts=V.parts.filter(et=>et.end>O-1)}}setInterval(()=>{a.loops.size&&y()},400),addEventListener("pointerdown",()=>{a.ac&&a.ac.state!=="running"&&c()},{capture:!0,passive:!0});let T=F=>{A("bed",F,.1),F&&(A("deep",!1),A("city",!1))},k=F=>A("deep",F&&!a.want.has("bed")&&!a.want.has("city"),.32),M=F=>{A("city",F==="city",.3),A("bed",F==="hall",.07),F&&A("deep",!1)},H=F=>{let V=performance.now();V-a.last.stepAt<(F?300:420)||(a.last.stepAt=V,S("step",.16+Math.random()*.05))},J=F=>{let V=performance.now(),O=F.state===0?0:F.clues.filter(Boolean).length,Y=F.state===2&&F.score>=4;O>a.last.lit&&V-a.last.tickAt>140&&(S("tick",.3),a.last.tickAt=V),Y&&a.last.score<4&&V-a.last.lockAt>1500&&(S("lock",.4),a.last.lockAt=V),a.last.lit=O,a.last.score=Y?F.score:0},ft=()=>{r.innerHTML=a.on?jf.on:jf.off,r.setAttribute("aria-label",a.on?"Turn sound off":"Turn sound on"),r.setAttribute("aria-pressed",String(a.on))};return r.hidden=!1,r.addEventListener("click",()=>{a.on=!a.on,a.on||m(),y(),ft(),i.toast(a.on?"Sound on":"Sound off",1200)}),ft(),{say:g,hush:m,pause:x,resume:_,prime:d,voiceState:b,sfx:S,loop:A,bed:T,deep:k,air:M,step:H,read:J,state:a,get on(){return a.on},get master(){return u(),a.master},get context(){return u()}}};var ql={lat:35.3,lon:-9.9,bearing:180},Qt=(i,t=document)=>t.querySelector(i),ue=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ba=(i,t)=>/^https?:\/\//.test(i??"")?`<a href="${ue(i)}" target="_blank" rel="noopener">${ue(t)}</a>`:ue(t),cs=i=>`${i<0?"\u2212":i>0?"+":""}${Math.abs(Math.round(i)).toLocaleString("en")} m`,Gy=[{m:0,label:"Today"},{m:-50,label:"9600 BCE",note:"Plato's date for Atlantis; sources give 43 to 58 m below today"},{m:-95,label:"12,500 BCE",note:"before the fastest melt; our own estimate"},{m:-125,label:"19,000 BCE",note:"the low point of the last ice age; estimates run from 116 to 134 m below today"}];var Vy={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Wy=["atlantis","el dorado","troy","titanic","doggerland","lost city of z","amber room","oak island","san jose","endurance","genghis khan","cleopatra","noah","ark of the covenant","valeriana","angkor","machu picchu","ubar","iram","lemuria","ciudad blanca","yonaguni","thonis","upano","roanoke","holy grail","franklin","erebus","alexander","mu","sundaland","beringia","rungholt","paititi","yamashita","cahokia","great zimbabwe","nazca"],Qf=(i,t)=>{let{control:e,globe:n}=i,s=n.shared,r=Qt("#stage"),a=Qt("#view"),l=Qt("#pins"),o=Qt("#sheet"),h=Qt("#body"),u=Qt("#eyebrow"),c={kind:null,legend:null,place:null,sheet:null,mode:"content",overlay:null,overlayMix:1,host:null,known:null},f=t.legends,d=null,p=null,v=null,g=null,m=null,x=null,_=null,b=f.find(w=>w.id==="atlantis")??null;b&&(c.kind="atlantis");for(let w of f){let I=Cs(w.name),U=Wy.findIndex(C=>I.includes(C));w.weight=(U>=0?200-U:0)+Math.min(w.places.length,8)*3+(w.status==="found"?4:0)}let S=()=>{if(c.mode==="viewport")r.style.height="100dvh";else{let w=Math.round($t(r.clientWidth*1.16,560,740));r.style.height=`${w}px`,Pf(w)}e.wheelNeedsKey=c.mode!=="viewport",et()};Cf(w=>{c.mode=w,S()}),addEventListener("resize",S),addEventListener("load",S);let A,y=(w,I=2600)=>{let U=Qt("#toast");U.textContent=w,U.classList.add("open"),clearTimeout(A),A=setTimeout(()=>U.classList.remove("open"),I)},T=new Map,k=(w,I)=>{let U=T.get(I);return U||(U=document.createElement("button"),U.className=`pin s-${w.status}`,U.innerHTML="<i></i><span></span>",U.addEventListener("click",C=>{C.stopPropagation(),L(w,I,!0)}),l.appendChild(U),T.set(I,U),U._shown=!1),U},M=(w,I,U,C=0)=>{let q=xn(w*yt,I*yt,M.d),it=e.pos,Mt=Math.hypot(it[0],it[1],it[2]);if((q[0]*it[0]+q[1]*it[1]+q[2]*it[2])/Mt<(ne-2e3)/Mt)return!1;let It=s.uExag.value,Ht=s.uWater.value>.5?s.uSea.value:-1e5,Gt=Math.max(n.heightAt(w*yt,I*yt)??0,Ht)*It,Ct=ne+Gt+C,Nt=q[0]*Ct-it[0],qt=q[1]*Ct-it[1],Tt=q[2]*Ct-it[2],ae=e.basis,le=Nt*ae.fwd[0]+qt*ae.fwd[1]+Tt*ae.fwd[2];if(le<=i.camera.near)return!1;let De=Math.tan(e.fovY/2),Cn=De*i.camera.aspect;return U[0]=(((Nt*ae.right[0]+qt*ae.right[1]+Tt*ae.right[2])/le/Cn+e.shift[0])*.5+.5)*r.clientWidth,U[1]=(.5-((Nt*ae.up[0]+qt*ae.up[1]+Tt*ae.up[2])/le/De+e.shift[1])*.5)*r.clientHeight,!0};M.d=[0,0,0];let H=new Set,J=()=>{let w=r.clientWidth,I=r.clientHeight,U=e.range<15e5,C=[],q=[0,0],it=c.kind==="atlantis";for(let Tt of f){let ae=Tt===c.legend||it&&Tt===b;if(!(!ae&&(it||c.kind&&Tt.kind!==c.kind)))for(let le of ae||U?Tt.places:[Tt.main])le===c.place&&(d?.a.scene&&e.range<d.a.scene.radius_km*9e3||i.evidence.extras.length)||M(le.lon,le.lat,q)&&(q[0]<-20||q[1]<-20||q[0]>w+20||q[1]>I+20||C.push({legend:Tt,place:le,x:q[0],y:q[1],w:(ae?1e3:0)+(le===c.place?500:0)+Tt.weight+(le===Tt.main?5:0)+(it?60-10*(Vy[le.standing]??5):0)}))}C.sort((Tt,ae)=>ae.w-Tt.w);let Mt=w<500?9:w<900?16:30,Et=[],It=new Set,Ht=0,Gt=0,Ct=!Qt("#intro").classList.contains("gone"),Nt=96,qt=c.sheet&&w<760?I*.38:Ct?I-(w<760?310:300):I;for(let Tt of C){let le=(Tt.legend===c.legend||it&&Tt.legend===b)&&Tt.legend.places.length>1?Tt.place.name:Tt.legend.name;le.length>26&&(le=`${le.slice(0,24).trimEnd()}\u2026`);let De=16+le.length*6.6,Cn=18,Pn=[Tt.x-6,Tt.y-Cn/2,Tt.x+De,Tt.y+Cn/2],Mn=!(c.hunt&&!c.legend&&Tt.place!==c.place)&&Ht<Mt&&Tt.y>Nt&&Tt.y<qt-10&&Pn[2]<w-4;if(Mn){for(let Ee of Et)if(Pn[0]<Ee[2]&&Pn[2]>Ee[0]&&Pn[1]<Ee[3]&&Pn[3]>Ee[1]){Mn=!1;break}}if(!Mn&&(Gt>220||Tt.y>qt))continue;Mn?(Et.push(Pn),Ht++):Gt++;let ke=k(Tt.legend,Tt.place);ke._text!==le&&(ke.lastChild.textContent=le,ke._text=le,ke.setAttribute("aria-label",Tt.place===Tt.legend.main?Tt.legend.name:`${Tt.place.name} (${Tt.legend.name})`)),ke.style.transform=`translate3d(${Tt.x.toFixed(1)}px,${Tt.y.toFixed(1)}px,0)`;let hs=`pin ${it&&Tt.legend===b?`p-${Tt.place.standing}${(Tt.place.tests??[]).length?"":" hollow"}${d?.scenes.has(Tt.place.id)?" scene":""}`:`s-${Tt.legend.status}`}${Mn?"":" dot"}${Tt.place===c.place?" on":""}${Tt.place===p?" pulse":""}`;ke.className!==hs&&(ke.className=hs),ke.style.zIndex=Tt.place===c.place?3:Mn?2:1,ke._shown||(ke.style.display="",ke._shown=!0),It.add(ke)}for(let Tt of H)It.has(Tt)||(Tt.style.display="none",Tt._shown=!1);H.clear();for(let Tt of It)H.add(Tt)},ft=Qt("#kinds"),F=()=>{let w=_h.filter(([I])=>f.some(U=>U.kind===I));r.classList.toggle("others",c.kind!=="atlantis"),ft.innerHTML=(d?d.drawCase():b?`<button class="chip glass${c.kind==="atlantis"?" on":""}" data-kind="atlantis">Atlantis \xB7 ${b.places.length} places</button>`:"")+(d&&c.kind==="atlantis"?"":`<button class="chip glass${c.kind?"":" on"}" data-kind="">${b?`Other legends ${f.length-1}`:`All ${f.length}`}</button>`)+(c.kind==="atlantis"?"":w.map(([I,U])=>`<button class="chip glass${c.kind===I?" on":""}" data-kind="${I}">${ue(U)}</button>`).join(""))},V=Qt("#menu"),O=Qt("#b-menu"),Y=w=>{V.classList.toggle("open",w),O.setAttribute("aria-expanded",String(w)),O.classList.toggle("on",w)};O.addEventListener("click",w=>{w.stopPropagation(),Y(!V.classList.contains("open"))}),V.addEventListener("click",w=>{let I=w.target.closest("button");if(!I)return;Y(!1),Qt("#intro").classList.add("gone"),e.idle=!1;let U=I.dataset.menu;U==="city"?gt.enterCity("gate"):U==="hall"?gt.enterCity("hall"):U==="hunt"?(d?.leaveScene(),c.legend=c.place=null,c.kind!=="atlantis"&&b&&(c.kind="atlantis",F()),gt.openGlobe()):U==="story"?R.start():U==="work"?g.show("work"):U==="best"?(gt.leaveWalk(),_?.click("h-best")):U==="claims"?(gt.leaveWalk(),L(b,null,!1)):U==="board"?(gt.leaveWalk(),d?.openBoard()):U==="rules"?_?.click("h-rules"):U==="credits"&&Qt("#credit").click()}),ft.addEventListener("click",w=>{let I=w.target.closest("[data-kind]");if(I){if(I.dataset.board&&c.kind==="atlantis")return d.openBoard();if(I.dataset.list&&c.kind==="atlantis")return d.openList();c.kind=I.dataset.kind||null,c.kind!=="atlantis"&&d?.a.scene&&(d.leaveScene(),X()),c.kind==="atlantis"&&c.legend&&c.legend!==b&&X(),F()}});let lt=w=>{c.sheet=w,o.dataset.kind=w??"",o.classList.toggle("open",!!w),r.classList.toggle("sheet-open",!!w);for(let[I,U]of[["b-layers","layers"],["b-sea","sea"],["b-known","known"]])Qt(`#${I}`).classList.toggle("on",w===U);r.dataset.sheet=w??"",w&&Qt("#intro").classList.add("gone"),w||(h.innerHTML=""),h.scrollTop=0,et()};function et(){let w=r.clientWidth;e.goalShift=c.sheet?w<760?[0,c.sheet==="legend"||c.sheet==="fit"?.42:.56]:[416/w,0]:[0,0]}let X=()=>{lt(null),c.legend&&!d?.a.scene&&(c.legend=c.place=null)},G=w=>{let I=$t((w.precision_km??10)*1e3*7,12e3,25e5);return{lon:w.lon*yt,lat:w.lat*yt,range:I,tilt:I<2e5?38*yt:0,heading:0}},$=(w,I,U,C)=>I?.length?`<p style="margin-bottom:4px"><b>${w}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${I.map(q=>`<span class="tag t-${U}">${ue(q.replaceAll("-"," "))}</span>`).join("")}</div>`:"",N=()=>{let w=c.legend;u.innerHTML=`${ue(bh[w.kind]??w.kind)} <span class="tag s-${w.status}">${ue(Sf[w.status]??w.status)}</span>`;let I=w.places.map((C,q)=>`
      <div class="place${C===c.place?" on":""}" data-i="${q}">
        <button data-act="place" data-i="${q}">
          <span class="name">${ue(C.name)}<small>${ue(kl[C.role]??C.role??"")}</small></span>
          <span class="tag t-${C.standing}">${ue(Ps[C.standing]??C.standing??"")}</span>
        </button>
        <div class="more">
          ${C.claim?`<p>${ue(C.claim)}</p>`:""}
          ${C.against?`<p><b>Against:</b> ${ue(C.against)}</p>`:""}
          ${C.proposed_by?.length?`<p style="font-size:12.5px">Proposed by ${ue(C.proposed_by.slice(0,3).map(it=>`${it.who}${it.year?` (${it.year})`:""}`).join(", "))}${C.event_date?`. Date it needs: ${ue(C.event_date)}`:""}</p>`:""}
          ${$("Said to fit Plato on",C.fits,"confirmed",w)}${$("Breaks Plato on",C.conflicts,"rejected",w)}
          ${(C.tests??[]).map(it=>`<p><b>Tested:</b> ${ue(it.what)}${it.who?` (${ue(it.who)}${it.year?`, ${it.year}`:""})`:""}. ${ue(it.result)} ${it.url?ba(it.url,"Source"):""}</p>`).join("")}
          <p style="font-size:12.5px;color:var(--faint)">${An(C.lat,C.lon,3)}${C.precision_km?`, give or take ${C.precision_km>=100?Math.round(C.precision_km):C.precision_km} km`:""}${C.underwater?", under water":""}</p>
          ${(C.sources??[]).map(it=>`<a class="src" href="${ue(it.url)}" target="_blank" rel="noopener">${ue(it.title??it.url)}</a>`).join("")}
          <div class="row">${w===b?`<button class="btn primary" data-act="city" data-i="${q}">Stand Plato's city here, to scale</button>`:""}<button class="btn" data-act="known-here" data-i="${q}">What's already recorded here?</button></div>
        </div>
      </div>`).join(""),U=Number.isFinite(w.sea_level_m)&&w.sea_level_m!==0;h.innerHTML=`
      <h2>${ue(w.name)}</h2>
      ${w.when?`<div class="when">${ue(w.when)}</div>`:""}
      <p>${ue(w.summary)}</p>
      ${w.look_for?`<div class="look"><b>What to look for</b> ${ue(w.look_for)}</div>`:""}
      <div class="row" style="margin-top:0">
        ${U?`<button class="btn primary" data-act="sea-to" data-m="${w.sea_level_m}">Set the sea to ${cs(w.sea_level_m)}</button>`:""}
        <button class="btn" data-act="share">Share this view</button>
        ${ls?'<button class="btn" data-act="post">Post what you see</button>':""}
      </div>
      <h3>${w.places.length===1?"Where":`Where people have looked \xB7 ${w.places.length}`}</h3>
      ${I}
      ${w.origin?.url||w.origin?.text?`<p class="note">Where the story comes from: ${ba(w.origin.url,w.origin.text??"source")}</p>`:""}`},L=(w,I,U)=>{if(w===b&&d)return c.kind!=="atlantis"&&(c.kind="atlantis",F()),Qt("#q").blur(),I?d.openPlace(I,U):d.openList();d?.leaveScene(),c.kind==="atlantis"&&w!==b&&(c.kind=null,F()),c.legend=w,c.place=I??w.main,lt("legend"),N(),U&&e.flyTo(G(c.place)),Qt("#q").blur();let C=Qt(".place.on",h);C&&I&&C.scrollIntoView({block:"nearest"})},st=()=>{let w=Qt("#seatag"),I=s.uSea.value,U=s.uWater.value<.5,C=c.overlay,q=[];if(U?q.push("Oceans drained: <b>bare sea floor</b>"):Math.abs(I)>=1&&q.push(`Sea level <b>${cs(I)}</b>`),C){let Mt=40075016*Math.cos(e.lat)/2**C.form.layer.minZoom/290*r.clientHeight*1.5;q.push(P(C)?e.range>Mt?`Zoom in to see <b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b>`:`<b>${ue(C.s.name)}</b> has no data here`)}d?.a.scene&&c.sheet!=="legend"&&c.sheet!=="fit"&&q.push(`<b>${ue(c.place?.name??"")}</b> \xB7 <button class="linkish" data-act="scene-open">open its card</button> \xB7 <button class="linkish" data-act="scene-off">leave</button>`),x?.sync();let it=q.join(" \xB7 ");w._html!==it&&(w.innerHTML=it,w._html=it,w.classList.toggle("open",!!it))},nt=(w,I)=>{s.uSea.value=$t(w,-11e3,9e3),I!==void 0&&(s.uWater.value=I?0:1),n.fitCaps(),st()},ut=()=>{u.textContent="Sea level";let w=s.uSea.value,I=s.uWater.value<.5;h.innerHTML=`
      <div class="big" id="sea-big">${cs(w)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${$t(w,-150,70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${Gy.map(U=>`<button class="chip${Math.abs(U.m-w)<.5&&!I?" on":""}" data-act="sea-to" data-m="${U.m}">${ue(U.label)} ${U.m?cs(U.m):""}</button>`).join("")}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${I?"checked":""}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `},j=(w,I,U=180,C=!0)=>{i.city.place({lat:w,lon:I,bearing:U}),i.stamp++,C&&e.flyTo(i.city.view(),4.5),lt(null),st()},ct=()=>{d?.a.scene||(c.legend=c.place=null),lt("city"),u.textContent="Plato's city, rebuilt";let w=t.reconstruction,I=U=>`<div class="known"><span>${ue(U.what)}</span><small>${ue(U.ref??"")}</small></div>`;h.innerHTML=`
      <p>This is the city Plato describes in the Critias, built to his measurements at ${i.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${w?`<h3>From the text \xB7 ${w.from_text.length}</h3>${w.from_text.map(I).join("")}<h3>Our choices, not in the text \xB7 ${w.choices.length}</h3>${w.choices.map(I).join("")}`:""}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`};Qt("#seatag").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;I==="city-off"&&(i.city.remove(),i.stamp++,st()),I==="city-notes"&&ct(),I==="scene-open"&&c.place&&d.openPlace(c.place,!1),I==="scene-off"&&(d.leaveScene(),c.legend=c.place=null,st())});let vt=[];for(let w of t.sources){if(w.license?.share_ok!==!0)continue;let I=[],U=wh(w);U&&I.push({id:"",name:"Standard",layer:U});for(let C of w.access?.variants??[]){if(/stretch/i.test(`${C.id} ${C.name??""}`))continue;let q=wh(w,C);q&&I.push({id:C.id,name:C.name??C.id,layer:q})}I.length&&vt.push({s:w,forms:I,id:w.id})}let mt=[["lidar","Lidar relief"],["elevation","Terrain"],["seafloor","Sea floor"],["geophysics","Gravity, magnetics, geology"],["imagery","Satellite and air photos"],["radar","Radar"],["historic","Old maps and photos"],["catalog","Where surveys exist"]],P=w=>{let I=w.s.coverage?.bbox;if(!I)return!0;let U=e.lat/yt,C=e.lon/yt;return C>=I[0]&&C<=I[2]&&U>=I[1]&&U<=I[3]},ot=w=>{let I=w.s.coverage?.bbox;return!I||I[2]-I[0]>300&&I[3]-I[1]>120},Z=(w,I)=>{let U=w?w.forms.find(C=>C.id===(I??""))??w.forms[0]:null;c.overlay=w?{...w,form:U}:null,n.setLayer("overlay",U?U.layer:null),s.uOverMode.value=U&&U.layer.asIs?1:0,s.uOverMix.value=c.overlayMix,n.maxZ=U?Math.max(17,Math.min(U.layer.maxZoom+1,19)):17},ht=()=>{u.textContent="Readings and view";let w=s.uLens.value,I=Mt=>{let Et=c.overlay?.id===Mt.id,It=P(Mt),Ht=Mt.s.resolution_m?` \xB7 ${Mt.s.resolution_m>=1e3?`${Mt.s.resolution_m/1e3} km`:`${Mt.s.resolution_m} m`}`:"";return`<button class="layer${Et?" on":""}" data-act="overlay" data-id="${ue(Mt.id)}"><span class="radio"></span><span class="t"><b>${ue(Mt.s.name)}</b><small>${ue(Mt.s.coverage?.note??"")}${Ht}</small></span></button>`+(Et?`<div class="slide" style="margin:2px 10px 8px 36px">
            ${Mt.forms.length>1?`<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${Mt.forms.map(Gt=>`<button class="chip${c.overlay.form===Gt?" on":""}" data-act="overlay-form" data-form="${ue(Gt.id)}">${ue(Gt.name.replace(/\s*\(.*\)$/,""))}</button>`).join("")}</div>`:""}
            <label for="over-mix">Strength</label><output>${Math.round(c.overlayMix*100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${c.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${It?"":'<button class="btn" data-act="overlay-go">Go where it has data</button>'}${Mt.s.docs?`<a class="btn" href="${ue(Mt.s.docs)}" target="_blank" rel="noopener">About this source</a>`:""}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${ue(Mt.s.what??"")} ${Mt.s.license?.name?`Licence: ${ba(Mt.s.license.url,Mt.s.license.name)}.`:""} ${ue(Mt.s.license?.attribution??"")}</p></div>`:"")},U=Mt=>mt.map(([Et,It])=>{let Ht=Mt.filter(Gt=>Gt.s.group===Et);return Ht.length?`<h3>${ue(It)}</h3>${Ht.map(I).join("")}`:""}).join(""),C=vt.filter(Mt=>P(Mt)&&!ot(Mt)),q=vt.filter(ot),it=vt.filter(Mt=>!P(Mt)&&!ot(Mt));h.innerHTML=`
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${w===0?"on":""}">Satellite</button><button data-act="lens" data-v="1" class="${w===1?"on":""}">Bare earth</button><button data-act="lens" data-v="2" class="${w===2?"on":""}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${s.uExag.value.toFixed(1)}\xD7</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${s.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${at(i.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${i.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(i.sun.altitude)}\xB0</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${i.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${s.uShadows.value>.5?"checked":""}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${s.uContours.value>.5?"checked":""}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${s.uNightOn.value>.5?"checked":""}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${C.length?U(C):""}
      ${q.length?`<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${U(q)}`:""}
      ${it.length?`<details style="margin-top:18px"${c.overlay&&it.some(Mt=>Mt.id===c.overlay.id)?" open":""}><summary style="cursor:pointer;font-weight:600">Surveys of other places \xB7 ${it.length}</summary>${U(it)}</details>`:""}
      `},at=w=>["N","NE","E","SE","S","SW","W","NW"][Math.round(w/45)%8]+` ${Math.round(w)}\xB0`,wt=/archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i,Pt=()=>{u.textContent="Already recorded here?";let w=c.known;if(!w){h.innerHTML="<p>Before you call something a discovery, check what is already on record.</p>";return}let I=`<p style="color:var(--dim)">Within <b style="color:var(--ink)">${w.radius} km</b> of ${An(w.lat,w.lon,3)}</p>`;if(w.state==="loading"&&!w.rows.length){h.innerHTML=`${I}<p class="note">Asking Wikidata and OpenStreetMap\u2026</p>`;return}let U=it=>`<div class="known"><span>${it.url?ba(it.url,it.name):ue(it.name)} ${it.type?`<em>\xB7 ${ue(it.type)}</em>`:""}</span><small>${it.km<1?`${Math.round(it.km*1e3)} m`:`${it.km.toFixed(it.km<10?1:0)} km`}</small></div>`,C=w.rows.filter(it=>it.site),q=w.rows.filter(it=>!it.site);h.innerHTML=`${I}
      ${C.length?`<h3>Sites and monuments \xB7 ${C.length}</h3>${C.map(U).join("")}`:"<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>"}
      ${q.length?`<h3>Other named places \xB7 ${q.length}</h3>${q.slice(0,25).map(U).join("")}`:""}
      ${w.state==="loading"?'<p class="note">Still waiting for OpenStreetMap, which can take half a minute\u2026</p>':""}
      ${w.errors.length?`<p class="note">Could not reach: ${ue(w.errors.join(", "))}.</p>`:""}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(w.radius,8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`},Jt=async(w,I,U)=>{let C=Math.round($t(U,2,60)),q=c.known={lat:w,lon:I,radius:C,state:"loading",rows:[],errors:[]};lt("known"),Pt();let it=(Ht,Gt)=>gr(I*yt,w*yt,Gt*yt,Ht*yt)*ne/1e3,Mt=(async()=>{let Ht=`SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${I} ${w})"^^geo:wktLiteral; wikibase:radius "${C}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`,Gt=()=>fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(Ht)}`,{headers:{Accept:"application/sparql-results+json"},signal:AbortSignal.timeout(25e3)}),Ct=await Gt().catch(()=>null);if(Ct?.ok||(await new Promise(Nt=>setTimeout(Nt,1500)),Ct=await Gt()),!Ct.ok)throw new Error("Wikidata");for(let Nt of(await Ct.json()).results.bindings){let qt=/Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(Nt.coord.value);!qt||/^Q\d+$/.test(Nt.itemLabel.value)||q.rows.push({name:Nt.itemLabel.value,type:Nt.inst?.value??"",url:Nt.item.value.replace("http://","https://"),km:it(Number(qt[2]),Number(qt[1])),site:wt.test(Nt.inst?.value??"")})}})().catch(()=>q.errors.push("Wikidata")),Et=(async()=>{let Ht=`[out:json][timeout:12];(nwr["historic"](around:${Math.min(C,8)*1e3},${w},${I}););out center tags 600;`,Gt=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:`data=${encodeURIComponent(Ht)}`,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(4e4)});if(!Gt.ok)throw new Error("OpenStreetMap");for(let Ct of(await Gt.json()).elements){let Nt=Ct.lat??Ct.center?.lat,qt=Ct.lon??Ct.center?.lon,Tt=Ct.tags??{};Nt==null||!Tt.name||["memorial","wayside_cross","wayside_shrine","boundary_stone","milestone"].includes(Tt.historic)||q.rows.push({name:Tt.name,type:[Tt.historic,Tt.site_type].filter(Boolean).join(", ").replaceAll("_"," "),url:`https://www.openstreetmap.org/${Ct.type}/${Ct.id}`,km:it(Nt,qt),site:!0})}})().catch(()=>q.errors.push("OpenStreetMap")),It=()=>{if(c.known!==q)return;let Ht=new Map;for(let Gt of q.rows.sort((Ct,Nt)=>Ct.km-Nt.km)){let Ct=Cs(Gt.name);(!Ht.has(Ct)||Gt.site&&!Ht.get(Ct).site)&&Ht.set(Ct,Gt)}if(q.rows=[...Ht.values()].sort((Gt,Ct)=>Gt.km-Ct.km),c.sheet==="known"){let Gt=h.scrollTop;Pt(),h.scrollTop=Gt}};Mt.then(It),await Promise.all([Mt,Et]),q.state="done",It()},Ut=()=>{let w=e.state(),I={ll:`${w.lat.toFixed(5)},${w.lon.toFixed(5)}`,r:Math.round(w.range)};return Math.abs(w.heading)>.5&&(I.hd=Math.round(w.heading)),w.tilt>.5&&(I.t=Math.round(w.tilt)),Math.abs(s.uSea.value)>=1&&(I.sea=Math.round(s.uSea.value)),s.uWater.value<.5&&(I.dry=1),s.uLens.value&&(I.lens=s.uLens.value),s.uExag.value!==1&&(I.x=s.uExag.value),c.legend&&(I.l=c.legend.id),c.legend&&c.place&&(c.place!==c.legend.main||c.legend===b)&&(I.p=c.place.id),d?.a.scene&&(d.a.mode!=="all"&&d.a.step<0&&(I.m=d.a.mode),d.a.step>=0&&(I.s=d.a.step+1)),i.city.active&&(I.city=`${i.city.site.lat.toFixed(4)},${i.city.site.lon.toFixed(4)},${i.city.params.seaBearing}`),c.overlay&&(I.o=c.overlay.form.id?`${c.overlay.id}.${c.overlay.form.id}`:c.overlay.id),I},At=(w,I)=>{let U=I?{...w}:{...Ut(),...w};if(c.host?.community)return`https://abstracts.co/a/${c.host.community}?${Object.entries(U).map(([q,it])=>`a_${q}=${encodeURIComponent(it)}`).join("&")}`;let C=new URL(location.href);return C.search=new URLSearchParams(U).toString(),C.toString()},Lt=async({text:w,url:I,both:U})=>{try{if(c.host){let C=await bi("share",{url:I,text:w});y(C?.shared===!1?"Not shared":"Ready to share");return}if(navigator.share&&matchMedia("(hover: none)").matches){await navigator.share({text:U??`${w}
${I}`});return}await navigator.clipboard.writeText(U??`${w}
${I}`),y("Copied. Paste it anywhere.")}catch(C){if(C?.code==="cancelled"||C?.name==="AbortError")return;prompt("Copy this",U??`${w}
${I}`)}},kt=async()=>{let w=At(),I=c.legend?`${c.legend.name}: ${c.place?.name??""}`.trim():"A view of the Earth";try{if(c.host){let U=await bi("share",{url:w,text:I});y(U?.shared===!1?"Not shared":"Link ready to share");return}await navigator.clipboard.writeText(w),y("Link copied")}catch(U){if(U?.code==="cancelled")return;prompt("Copy this link",w)}},Q=async()=>{if(!c.host)return y("Open this on abstracts.co to post");if(!c.host.signedIn){try{await bi("signIn")}catch{y("Sign in to post")}return}let w=await new Promise(q=>{i.snap=q});if(!w)return y("Could not take the picture");let I=e.state(),U=An(I.lat,I.lon,3),C=`${c.legend?`${c.legend.name}${c.place?`, ${c.place.name}`:""}`:"Looking at"} ${U}${Math.abs(s.uSea.value)>=1?`, sea at ${cs(s.uSea.value)}`:""}

${At()}`;try{(await bi("post",{text:C,media:[new File([w],"view.jpg",{type:"image/jpeg"})]}))?.post?.url&&y("Posted")}catch(q){q?.code!=="cancelled"&&y(q?.code==="signed_out"?"Sign in to post":"Could not post")}};o.addEventListener("click",w=>{let I=w.target.closest("[data-act]");if(!I)return;let U=I.dataset.act;if(!d?.click(U,I)&&!_?.click(U,I)){if(U==="close")X();else if(U==="city-off")i.city.remove(),i.stamp++,X(),st();else if(U==="place"){let C=c.legend.places[Number(I.dataset.i)];c.place=C,N(),e.flyTo(G(C))}else if(U==="sea-to")nt(Number(I.dataset.m),!1),c.sheet==="sea"?ut():y(`Sea level ${cs(Number(I.dataset.m))}`);else if(U==="share")kt();else if(U==="post")Q();else if(U==="lens")s.uLens.value=Number(I.dataset.v),ht();else if(U==="overlay"){let C=vt.find(it=>it.id===I.dataset.id);Z(c.overlay?.id===C.id?null:C);let q=h.scrollTop;ht(),h.scrollTop=q}else if(U==="overlay-form"){Z(vt.find(q=>q.id===c.overlay.id),I.dataset.form);let C=h.scrollTop;ht(),h.scrollTop=C}else if(U==="overlay-go"){let C=c.overlay?.s.coverage?.bbox;C&&e.flyTo({lon:(C[0]+C[2])/2*yt,lat:(C[1]+C[3])/2*yt,range:$t(Math.max(C[2]-C[0],C[3]-C[1])*111e3*1.1,2e4,12e6)})}else if(U==="city"){let C=c.legend.places[Number(I.dataset.i)];j(C.lat,C.lon)}else if(U==="city-notes")ct();else if(U==="known-here"){let C=c.legend.places[Number(I.dataset.i)];Jt(C.lat,C.lon,Math.max(C.precision_km??10,5))}else if(U==="known-again"){let C=e.state();Jt(C.lat,C.lon,e.range/4e3)}}}),o.addEventListener("input",w=>{let I=w.target;if(I.id==="sea-range"){nt(Number(I.value)),Qt("#sea-big").innerHTML=`${cs(Number(I.value))}<small>against today</small>`;for(let U of h.querySelectorAll(".presets .chip"))U.classList.toggle("on",Number(U.dataset.m)===Number(I.value)&&s.uWater.value>.5)}else I.id==="sea-off"?nt(s.uSea.value,I.checked):I.id==="exag"?(s.uExag.value=Number(I.value),Qt("#exag-out").textContent=`${Number(I.value).toFixed(1)}\xD7`,n.fitCaps()):I.id==="sun-az"?(i.sun.azimuth=Number(I.value),Qt("#az-out").textContent=at(Number(I.value))):I.id==="sun-alt"?(i.sun.altitude=Number(I.value),Qt("#alt-out").textContent=`${I.value}\xB0`):I.id==="opt-shadows"?s.uShadows.value=I.checked?1:0:I.id==="opt-contours"?s.uContours.value=I.checked?1:0:I.id==="opt-night"?s.uNightOn.value=I.checked?1:0:I.id==="over-mix"&&(c.overlayMix=Number(I.value),s.uOverMix.value=c.overlayMix,I.previousElementSibling.textContent=`${Math.round(c.overlayMix*100)}%`)});let Wt=(w,I)=>()=>{if(c.sheet===w)return X();d?.a.scene||(c.legend=c.place=null),lt(w),I()};Qt("#b-layers").addEventListener("click",Wt("layers",ht)),Qt("#b-sea").addEventListener("click",Wt("sea",ut)),Qt("#b-known").addEventListener("click",()=>{if(c.sheet==="known")return X();d?.a.scene||(c.legend=c.place=null);let w=e.state();Jt(w.lat,w.lon,e.range/4e3)}),Qt("#z-in").addEventListener("click",()=>e.zoomBy(.5)),Qt("#z-out").addEventListener("click",()=>e.zoomBy(2)),Qt("#compass").addEventListener("click",()=>e.flyTo({heading:0,tilt:0},.7)),Qt("#credit").addEventListener("click",()=>{let w=n.layers,I=[xr.terrarium.credit,e.range>8e5?w.globe?.credit:w.base.credit,c.overlay?.form.layer.credit,s.uNightOn.value>.5?w.night.credit:null].filter(Boolean);y(`Showing: ${I.join(" \xB7 ")}`,6e3)}),Qt("#intro").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;if(I==="start"){let U=b??[...f].sort((C,q)=>q.weight-C.weight)[0];U&&L(U,null,!0)}I==="tour"&&R.start(),I==="enter"&&gt.enterCity("gate"),I==="hunt"&&(Qt("#intro").classList.add("gone"),e.idle=!1),I==="board"&&(Qt("#intro").classList.add("gone"),d?.openBoard()),I==="sea"&&(b&&nt(-50,!1),lt("sea"),ut())}),e.onTap=(w,I)=>{Qt("#results").classList.remove("open"),d?.hidePop(),x?.tap(w,I)},addEventListener("keydown",w=>{w.key==="Escape"&&(R.on?R.stop():d?.boardOpen?d.closeBoard():v?.on&&c.sheet?lt(null):d?.hidePop())}),a.addEventListener("pointerdown",()=>{Qt("#intro").classList.add("gone"),Qt("#q").blur(),Qt("#results").classList.remove("open"),Y(!1)});let Rt=Qt("#q"),Bt=Qt("#results"),_t=[],Dt=0,Ot=()=>{let w=Rt.value.trim();if(!w){Bt.classList.remove("open");return}let I=Ef(w);_t=I?[{coords:I}]:Af(f,w,7),!I&&w.length>=3&&_t.push({geocode:w}),Dt=Math.min(Dt,_t.length-1),Bt.innerHTML=_t.map((U,C)=>U.coords?`<button class="res${C===Dt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${An(U.coords.lat,U.coords.lon,4)}</b></span><small>Go to coordinates</small></button>`:U.geocode?`<button class="res${C===Dt?" sel":""}" data-i="${C}"><span class="bullet" style="--c:var(--faint)"></span><span>Find \u201C<b>${ue(U.geocode)}</b>\u201D on the map</span><small>Place search</small></button>`:`<button class="res s-${U.legend.status}${C===Dt?" sel":""}" data-i="${C}"><span class="bullet"></span><span><b>${ue(U.place?U.place.name:U.legend.name)}</b>${U.place?` <em>${ue(U.legend.name)}</em>`:""}</span><small>${ue(U.place?Ps[U.place.standing]??"":bh[U.legend.kind]??"")}</small></button>`).join("")||'<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>',Bt.classList.add("open")},Ft=async w=>{if(w){if(Bt.classList.remove("open"),w.coords){e.flyTo({lon:w.coords.lon*yt,lat:w.coords.lat*yt,range:Math.min(e.range,6e4)}),Rt.blur();return}if(w.geocode){try{let U=(await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(w.geocode)}`).then(Et=>Et.json())).features?.[0];if(!U)return y(`No place called \u201C${w.geocode}\u201D`);let[C,q]=U.geometry.coordinates,it=U.properties.extent,Mt=it?Math.max(Math.abs(it[2]-it[0])*Math.cos(q*yt),Math.abs(it[1]-it[3]))*111e3:3e4;e.flyTo({lon:C*yt,lat:q*yt,range:$t(Mt*1.6,3e3,4e6)}),y(`${U.properties.name??w.geocode}${U.properties.country?`, ${U.properties.country}`:""} \xB7 place search by Photon, \xA9 OpenStreetMap`,3800),Rt.blur()}catch{y("Place search is not answering")}return}Rt.value=w.legend.name,L(w.legend,w.place??null,!0)}};Rt.addEventListener("input",()=>{Dt=0,Ot()}),Rt.addEventListener("focus",()=>{Qt("#intro").classList.add("gone"),Ot()}),Rt.addEventListener("keydown",w=>{w.key==="ArrowDown"&&(Dt=Math.min(Dt+1,_t.length-1),Ot(),w.preventDefault()),w.key==="ArrowUp"&&(Dt=Math.max(Dt-1,0),Ot(),w.preventDefault()),w.key==="Escape"&&(Bt.classList.remove("open"),Rt.blur())}),Qt("#search").addEventListener("submit",w=>{w.preventDefault(),Ft(_t[Dt])}),Bt.addEventListener("click",w=>{let I=w.target.closest("[data-i]");I&&Ft(_t[Number(I.dataset.i)])});let z=0,E=Qt("#where"),dt=Qt("#compass svg");i.onFrame=(w=.016)=>{if(g?.sync(),m?.tick(w),R?.tick(),v?.on||(J(),d?.placeMarks(),_?.tick(),e.idle||Qt("#intro").classList.add("gone"),++z%8))return;let I=e.hover&&!e.pointers.size&&matchMedia("(hover: hover)").matches?e.pick(e.hover.x,e.hover.y):null,U=I?I.lat/yt:e.lat/yt,C=I?I.lon/yt:e.lon/yt,q=I?I.height:n.heightAt(e.lon,e.lat),it=s.uSea.value,Mt=q==null?"":q<-.6?`<b>${Math.round(-q).toLocaleString("en")} m</b> below today's sea${s.uWater.value>.5&&q<it?"":", dry"}`:`<b>${Math.round(q).toLocaleString("en")} m</b>`;E.innerHTML=`${An(U,C,e.range<5e4?4:2)} \xB7 ${Mt} \xB7 eye ${wd(e.altitude)}`,dt.style.transform=`rotate(${(-e.heading/yt).toFixed(1)}deg)`,r.classList.toggle("turned",Math.abs(e.heading)>.02||e.tilt>.03),r.classList.toggle("dots",!!c.hunt&&!c.legend),st()};let gt={world:i,data:t,st:c,$:Qt,esc:ue,link:ba,metres:cs,toast:y,setSheet:lt,closeSheet:X,body:h,eyebrow:u,sheet:o,stage:r,pinsEl:l,project:M,setSea:nt,standCity:j,checkKnown:Jt,viewFor:G,drawTag:st,drawCity:ct,strataColour:yh,overlays:vt,setOverlay:Z,shortName:ga,shareUrl:(w,I)=>At(w,I),shareOut:w=>Lt(w),pulse:w=>{p=w??null},tourOn:()=>!1};gt.sound=Kf(gt),d=Bf(gt),gt.leaveScene=()=>d?.leaveScene(),gt.fitAt=(w,I)=>d?.runFit(void 0,{lat:w,lon:I}),gt.busy=()=>!!(d?.a.scene||d?.boardOpen||R.on||!Qt("#intro").classList.contains("gone")||v?.on||i.city.active&&e.range<9e4||c.sheet==="fit"||c.sheet==="legend"||c.sheet&&r.clientWidth<760),_=d?Zf(gt):null,c.hunt=!!_;let R=Hf(gt,d,_);gt.tour=()=>R.start(),gt.tourOn=()=>R.on,x=Gf(gt),gt.cityBar=x,gt.home=ql,Object.defineProperty(gt,"host",{get:()=>c.host??null}),v=Wf(gt),g=qf(gt,{A:d,H:_,walk:v}),m=Yf(gt,{walk:v}),gt.walkOn=()=>v.on,gt.leaveWalk=()=>{v.on&&v.leave(!1)},gt.onWalk=w=>{w?(m.arrive(),c.sheet&&lt(null)):m.leave(),x.sync(),st()},gt.walkPan=w=>{v.state.pan=w},gt.enterCity=(w="gate",I=!1,U={})=>{if(!I&&R.on)return R.stop();d?.leaveScene(),d?.closeBoard(),c.legend=c.place=null,lt(null),Qt("#intro").classList.add("gone"),e.idle=!1,i.city.active||i.city.place({lat:ql.lat,lon:ql.lon,bearing:ql.bearing}),Math.abs(s.uSea.value)>.6&&nt(0,!1);let C=i.city.city.hall;I||B(),v.enter({...w==="hall"?{x:0,y:-(C.RI-6),look:[0,0]}:{x:0,y:-(C.RG+15),look:[0,0]},grab:!I,...U})},gt.openGlobe=(w=!0)=>{lt(null);let I=i.city.site;gt.leaveWalk(),w&&(B(),e.flyTo({lon:(I?.lon??-30)*yt,lat:(I?.lat??25)*yt,range:135e5,tilt:0,heading:0},3.6)),Qt("#b-city").hidden=!d};let B=()=>{r.classList.remove("blink"),r.offsetWidth,r.classList.add("blink")};Qt("#walk").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;I==="w-up"?v.leave(!0):I==="w-hall"?gt.enterCity("hall"):I==="w-globe"&&gt.openGlobe()}),Qt("#b-city").addEventListener("click",()=>gt.enterCity((i.city.active,"gate"))),F(),nt(s.uSea.value),e.idle&&e.jump({range:175e5/Math.min(1,r.clientWidth/r.clientHeight)**.55});let K=w=>{if(!w)return;let I=q=>w[q]==null||w[q]===""||!Number.isFinite(Number(w[q]))?null:Number(w[q]);if(I("x")!=null&&(s.uExag.value=$t(I("x"),1,12)),I("lens")!=null&&(s.uLens.value=$t(Math.round(I("lens")),0,2)),(I("sea")!=null||w.dry)&&nt(I("sea")??0,!!w.dry),w.o){let[q,it]=String(w.o).split("."),Mt=vt.find(Et=>Et.id===q);Mt&&Z(Mt,it)}if(typeof w.city=="string"){let q=w.city.split(",").map(Number);Number.isFinite(q[0])&&Number.isFinite(q[1])&&j(q[0],q[1],Number.isFinite(q[2])?q[2]:180,!1)}let U=w.l&&f.find(q=>q.id===w.l);U&&L(U,U.places.find(q=>q.id===w.p)??null,!1),d?.a.scene&&(["claimed","found"].includes(w.m)&&d.setMode(w.m),I("s")!=null&&d.setStep($t(Math.round(I("s"))-1,-1,d.a.scene.story.length-1)));let C=typeof w.ll=="string"&&w.ll.split(",").map(Number);if(C&&C.length===2&&C.every(Number.isFinite)?(e.jump({lat:$t(C[0],-89,89)*yt,lon:C[1]*yt,range:$t(I("r")??2e6,i.city.active?14:150,e.maxRange),heading:(I("hd")??0)*yt,tilt:$t(I("t")??0,0,i.city.active?88.5:84)*yt}),e.idle=!1):U&&c.place?(e.jump(d?.a.scene?i.evidence.viewOf(null):G(c.place)),e.idle=!1):i.city.active&&(e.jump(i.city.view()),e.idle=!1),(w.ll||U||i.city.active)&&Qt("#intro").classList.add("gone"),w.board&&d&&(Qt("#intro").classList.add("gone"),d.openBoard()),typeof w.hunt=="string"&&_){let q=w.hunt.split(",").map(Number);if(q.length===2&&q.every(Number.isFinite)){Qt("#intro").classList.add("gone"),e.idle=!1;let it=()=>_.ready?_.claim($t(q[0],-85,85),q[1],!w.ll):setTimeout(it,150);it()}}w.tour&&d&&R.start(),(w.walk||w.hall)&&d&&gt.enterCity(w.hall?"hall":"gate")};K(Object.fromEntries(new URLSearchParams(location.search))),Rf().then(w=>{c.host=w,w?.launch&&Object.keys(w.launch).length&&K(w.launch)}),b&&(Qt("#intro h1").textContent="Atlantis",Qt('#intro [data-act="start"]').textContent=_?"Famous claims":"Explore the places"),Qt('#intro [data-act="hunt"]').hidden=!_,_&&(Qt('#intro [data-act="tour"]').textContent="Watch the story");for(let w of document.querySelectorAll("#intro [data-atlantis], #menu [data-atlantis]"))w.hidden=!d;return Qt('#intro [data-act="start"]').hidden=!!_,d&&(Qt("#m-claims").textContent=d.stats.places),_||(Qt("#brand").textContent=b?"Where was Atlantis?":"Lost places"),Qt('#intro [data-act="sea"]').hidden=!!d,Qt('#intro [data-act="enter"]').hidden=!d,Qt("#b-city").hidden=!d,{st:c,selectLegend:L,setSea:nt,setOverlay:Z,overlays:vt,apply:K,viewParams:Ut,A:d,H:_,tour:R,cityBar:x,walk:v,hall:g,meet:m,enterCity:gt.enterCity,openGlobe:gt.openGlobe,sound:gt.sound}};var tp=document.getElementById("view"),Ui=new URLSearchParams(location.search),$y=globalThis.__ASSETS__||"./",ep=()=>{document.getElementById("fail").style.display="grid",document.getElementById("veil").classList.add("gone")},qy=async()=>{if(!tp.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))return ep();let i;try{i=bf(tp,{phone:Ui.get("phone")==="1"?!0:Ui.get("phone")==="0"?!1:void 0})}catch(r){return console.error(r),ep()}globalThis.world=i;let t=await Tf($y);globalThis.ui=Qf(i,t);let e=r=>Ui.get(r)===null?null:Number(Ui.get(r));if(e("az")!==null&&(i.sun.azimuth=e("az")),e("alt")!==null&&(i.sun.altitude=e("alt")),e("exp")!==null&&(i.exposure=e("exp")),e("air")!==null&&(i.air=e("air")),e("shadows")!==null&&(i.globe.shared.uShadows.value=e("shadows")),e("night")!==null&&(i.globe.shared.uNightOn.value=e("night")),Ui.get("still")&&(i.control.idle=!1),globalThis.__STILL__&&(i.control.spin=!1,i.restSoon=!0),Ui.get("clean")){for(let r of["bar","kinds","zoom","readout","intro","seatag","results"])document.getElementById(r).style.display="none";Ui.get("clean")==="2"&&(document.getElementById("pins").style.display="none")}Ui.get("sheet")==="layers"&&document.getElementById("b-layers").click(),Ui.get("sheet")==="sea"&&document.getElementById("b-sea").click();let n=document.getElementById("veil"),s=()=>i.globe.ready?n.classList.add("gone"):setTimeout(s,100);s(),setTimeout(()=>n.classList.add("gone"),12e3)};qy();
