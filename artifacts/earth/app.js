var iu=0,Sc=1,su=2;var bs=1,ru=2,rr=3,ts=0,nn=1,sn=2,ws=0,ar=1,Tc=2,Ec=3,Ac=4,Zr=5;var Ms=100,au=101,ou=102,lu=103,cu=104,jr=200,Jr=201,hu=202,uu=203,or=204,lr=205,du=206,fu=207,pu=208,mu=209,gu=210,vu=211,xu=212,yu=213,_u=214,qa=0,Xa=1,Ya=2,Js=3,Za=4,ja=5,Ja=6,Ka=7,Rc=0,bu=1,wu=2,di=0,Cc=1,Pc=2,Ic=3,Lc=4,Dc=5,Nc=6,Fc=7;var Uc=300,Ss=301,cr=302,So=303,To=304,Pi=1e3,_n=1001,Qa=1002,Ue=1003,Mu=1004;var Kr=1005;var Ae=1006,Eo=1007;var rn=1008;var an=1009,kc=1010,Oc=1011,hr=1012,Ao=1013,ii=1014,Tn=1015,je=1016,Ro=1017,Co=1018,Ts=1020,Bc=35902,zc=35899,Hc=1021,Gc=1022,Ye=1023,Ii=1026,Di=1027,fi=1028,Po=1029,es=1030,Io=1031;var Lo=1033,Qr=33776,ta=33777,ea=33778,na=33779,Do=35840,No=35841,Fo=35842,Uo=35843,ko=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,ia=37490,Go=37491,Vo=37808,Wo=37809,$o=37810,qo=37811,Xo=37812,Yo=37813,Zo=37814,jo=37815,Jo=37816,Ko=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,sa=36285,ll=36286;var Pr=2300,to=2301,Wa=2302,gc=2303,vc=2400,xc=2401,yc=2402;var Su=3200;var cl=0,Tu=1,Bn="",Ie="srgb",xs="srgb-linear",Ir="linear",Se="srgb";var $a=7680;var Eu=519,Au=512,Ru=513,Cu=514,Vc=515,Pu=516,Iu=517,Wc=518,$c=519,Lu=35044;var ns="300 es",Vn=2e3,Ks=2001;function ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Lr("canvas");return i.style.display="block",i}var Ph={},Qs=null;function qc(...i){let t="THREE."+i.shift();Qs?Qs("log",t,...i):console.log(t,...i)}function Nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Nu(i);let t="THREE."+i.shift();if(Qs)Qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Nu(i);let t="THREE."+i.shift();if(Qs)Qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cr(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,oe(...i))}function Fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[qa]:qa,[Ya]:Ja,[Za]:Za,[Js]:ja,[Xa]:Xa,[Ja]:Ya,[Ka]:Ka,[ja]:Js},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,eo=180/Math.PI;function ra(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function rp(i,t){return(i%t+t)%t}function Zl(i,t,e){return(1-e)*i+e*t}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ap(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function op(i,t){if(t.constructor===Float32Array)return i;let e=Xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(c!==v||o!==f||h!==d||u!==p){let g=o*f+h*d+u*p+c*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,l=Math.sin(l*x)/_,o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l}else{o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l;let x=1/Math.sqrt(o*o+h*h+u*u+c*c);o*=x,h*=x,u*=x,c*=x}}t[e]=o,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*c+o*d-h*f,t[e+1]=o*p+u*f+h*c-l*d,t[e+2]=h*p+u*d+l*f-o*c,t[e+3]=u*p-l*c-o*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(n/2),u=l(s/2),c=l(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"YXZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"ZXY":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"ZYX":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"YZX":this._x=f*u*c+h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c-f*d*p;break;case"XZY":this._x=f*u*c-h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c+f*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],u=e[6],c=e[10],f=n+l+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>l&&n>c){let d=2*Math.sqrt(1+n-l-c);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){let d=2*Math.sqrt(1+l-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-n-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,u=e._w;return this._x=n*u+a*l+s*h-r*o,this._y=s*u+a*o+r*l-n*h,this._z=r*u+a*h+n*o-s*l,this._w=a*u-n*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);o=Math.sin(o*h)/u,e=Math.sin(e*h)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ft=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*n),u=2*(l*e-r*s),c=2*(r*n-a*e);return this.x=e+o*h+a*c-l*u,this.y=n+o*u+l*h-r*c,this.z=s+o*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new ft,Ih=new Wn,de=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h)}set(t,e,n,s,r,a,l,o,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],_=s[4],b=s[7],M=s[2],C=s[5],y=s[8];return r[0]=a*v+l*x+o*M,r[3]=a*g+l*_+o*C,r[6]=a*m+l*b+o*y,r[1]=h*v+u*x+c*M,r[4]=h*g+u*_+c*C,r[7]=h*m+u*b+c*y,r[2]=f*v+d*x+p*M,r[5]=f*g+d*_+p*C,r[8]=f*m+d*b+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8];return e*a*u-e*l*h-n*r*u+n*l*o+s*r*h-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=u*a-l*h,f=l*o-u*r,d=h*r-a*o,p=e*c+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=c*v,t[1]=(s*h-u*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*o)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*o-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new de,Lh=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var _e=lp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Lr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var hp=0,Ql=new ft,cn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Ae,a=rn,l=Ye,o=an,h=i.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ra(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uc;cn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,h=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,b=(d+1)/2,M=(m+1)/2,C=(u+f)/4,y=(c+v)/4,T=(p+g)/4;return _>b&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=y/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=T/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=y/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(c-v)/x,this.z=(f-u)/x,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ys=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g)}set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=h,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=-o*c,e[8]=h,e[1]=d+p*h,e[5]=f-v*h,e[9]=-l*o,e[2]=v-f*h,e[6]=p+d*h,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f+v*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=v+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f-v*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=p*h-d,e[8]=f*h+v,e[1]=o*c,e[5]=v*h+f,e[9]=d*h-p,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=v-f*c,e[8]=p*c+d,e[1]=c,e[5]=a*u,e[9]=-l*u,e[2]=-h*u,e[6]=d*c+p,e[10]=f-v*c}else if(t.order==="XZY"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=-c,e[8]=h*u,e[1]=f*c+v,e[5]=a*u,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,dp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Hi.crossVectors(n,Dn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Hi.crossVectors(n,Dn)),Hi.normalize(),Ma.crossVectors(Dn,Hi),s[0]=Hi.x,s[4]=Ma.x,s[8]=Dn.x,s[1]=Hi.y,s[5]=Ma.y,s[9]=Dn.y,s[2]=Hi.z,s[6]=Ma.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],b=n[11],M=n[15],C=s[0],y=s[4],T=s[8],k=s[12],S=s[1],G=s[5],Z=s[9],st=s[13],N=s[2],V=s[6],O=s[10],Y=s[14],ot=s[3],et=s[7],pt=s[11],dt=s[15];return r[0]=a*C+l*S+o*N+h*ot,r[4]=a*y+l*G+o*V+h*et,r[8]=a*T+l*Z+o*O+h*pt,r[12]=a*k+l*st+o*Y+h*dt,r[1]=u*C+c*S+f*N+d*ot,r[5]=u*y+c*G+f*V+d*et,r[9]=u*T+c*Z+f*O+d*pt,r[13]=u*k+c*st+f*Y+d*dt,r[2]=p*C+v*S+g*N+m*ot,r[6]=p*y+v*G+g*V+m*et,r[10]=p*T+v*Z+g*O+m*pt,r[14]=p*k+v*st+g*Y+m*dt,r[3]=x*C+_*S+b*N+M*ot,r[7]=x*y+_*G+b*V+M*et,r[11]=x*T+_*Z+b*O+M*pt,r[15]=x*k+_*st+b*Y+M*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=o*d-h*f,_=l*d-h*c,b=l*f-o*c,M=a*d-h*u,C=a*f-o*u,y=a*c-l*u;return e*(v*x-g*_+m*b)-n*(p*x-g*M+m*C)+s*(p*_-v*M+m*y)-r*(p*b-v*C+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],h=t[6],u=t[10];return e*(a*u-l*h)-n*(r*u-l*o)+s*(r*h-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*l-n*a,_=e*o-s*a,b=e*h-r*a,M=n*o-s*l,C=n*h-r*l,y=s*h-r*o,T=u*v-c*p,k=u*g-f*p,S=u*m-d*p,G=c*g-f*v,Z=c*m-d*v,st=f*m-d*g,N=x*st-_*Z+b*G+M*S-C*k+y*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return t[0]=(l*st-o*Z+h*G)*V,t[1]=(s*Z-n*st-r*G)*V,t[2]=(v*y-g*C+m*M)*V,t[3]=(f*C-c*y-d*M)*V,t[4]=(o*S-a*st-h*k)*V,t[5]=(e*st-s*S+r*k)*V,t[6]=(g*b-p*y-m*_)*V,t[7]=(u*y-f*b+d*_)*V,t[8]=(a*Z-l*S+h*T)*V,t[9]=(n*S-e*Z-r*T)*V,t[10]=(p*C-v*b+m*x)*V,t[11]=(c*b-u*C-d*x)*V,t[12]=(l*k-a*G-o*T)*V,t[13]=(e*G-n*k+s*T)*V,t[14]=(v*_-p*M-g*x)*V,t[15]=(u*M-c*_+f*x)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,h=r*a,u=r*l;return this.set(h*a+n,h*l-s*o,h*o+s*l,0,h*l+s*o,u*l+n,u*o-s*a,0,h*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,u=a+a,c=l+l,f=r*h,d=r*u,p=r*c,v=a*u,g=a*c,m=l*c,x=o*h,_=o*u,b=o*c,M=n.x,C=n.y,y=n.z;return s[0]=(1-(v+m))*M,s[1]=(d+b)*M,s[2]=(p-_)*M,s[3]=0,s[4]=(d-b)*C,s[5]=(1-(f+m))*C,s[6]=(g+x)*C,s[7]=0,s[8]=(p+_)*y,s[9]=(g-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),l=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);let h=1/a,u=1/l,c=1/o;return Kn.elements[0]*=h,Kn.elements[1]*=h,Kn.elements[2]*=h,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=c,Kn.elements[9]*=c,Kn.elements[10]*=c,e.setFromRotationMatrix(Kn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(l===Vn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Ks)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Vn,o=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(l===Vn)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===Ks)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ks=new ft,Kn=new xe,up=new ft(0,0,0),dp=new ft(1,1,1),Hi=new ft,Ma=new ft,Dn=new ft,Nh=new xe,Fh=new Wn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fp=0,Uh=new ft,Os=new Wn,Mi=new xe,Sa=new ft,Mr=new ft,pp=new ft,mp=new Wn,kh=new ft(1,0,0),Oh=new ft(0,1,0),Bh=new ft(0,0,1),zh={type:"added"},gp={type:"removed"},Bs={type:"childadded",child:null},tc={type:"childremoved",child:null},bn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ft,e=new ei,n=new Wn,s=new ft(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new de}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Mr,Sa,this.up):Mi.lookAt(Sa,Mr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Mi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new ft(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=rp(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return _e.workingToColorSpace(mn.copy(this),t),Math.round(be(mn.r*255,0,255))*65536+Math.round(be(mn.g*255,0,255))*256+Math.round(be(mn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,h,u=(l+a)/2;if(l===a)o=0,h=0;else{let c=a-l;switch(h=u<=.5?c/(a+l):c/(2-a-l),a){case n:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-n)/c+2;break;case r:o=(n-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Ie){_e.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Ta);let n=Zl(Gi.h,Ta.h,e),s=Zl(Gi.s,Ta.s,e),r=Zl(Gi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=Ou;var $n=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new ft,Si=new ft,nc=new ft,Ti=new ft,zs=new ft,Hs=new ft,Hh=new ft,ic=new ft,sc=new ft,rc=new ft,ac=new ge,oc=new ge,lc=new ge,qi=class i{constructor(t=new ft,e=new ft,n=new ft){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Si.subVectors(n,e),nc.subVectors(t,e);let a=Qn.dot(Qn),l=Qn.dot(Si),o=Qn.dot(nc),h=Si.dot(Si),u=Si.dot(nc),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*o-l*u)*f,p=(a*u-l*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ti.x),o.addScaledVector(a,Ti.y),o.addScaledVector(l,Ti.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Si.subVectors(t,e),Qn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;zs.subVectors(s,n),Hs.subVectors(r,n),ic.subVectors(t,n);let o=zs.dot(ic),h=Hs.dot(ic);if(o<=0&&h<=0)return e.copy(n);sc.subVectors(t,s);let u=zs.dot(sc),c=Hs.dot(sc);if(u>=0&&c<=u)return e.copy(s);let f=o*c-u*h;if(f<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),e.copy(n).addScaledVector(zs,a);rc.subVectors(t,r);let d=zs.dot(rc),p=Hs.dot(rc);if(p>=0&&d<=p)return e.copy(r);let v=d*h-o*p;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(Hs,l);let g=u*p-d*c;if(g<=0&&c-u>=0&&d-p>=0)return Hh.subVectors(r,s),l=(c-u)/(c-u+(d-p)),e.copy(s).addScaledVector(Hh,l);let m=1/(g+v+f);return a=v*m,l=f*m,e.copy(n).addScaledVector(zs,a).addScaledVector(Hs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new ft(1/0,1/0,1/0),e=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Aa.subVectors(this.max,Sr),Gs.subVectors(t.a,Sr),Vs.subVectors(t.b,Sr),Ws.subVectors(t.c,Sr),Vi.subVectors(Vs,Gs),Wi.subVectors(Ws,Vs),ps.subVectors(Gs,Ws);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-ps.z,ps.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,ps.z,0,-ps.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-ps.y,ps.x,0];return!cc(e,Gs,Vs,Ws,Aa)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,Gs,Vs,Ws,Aa))?!1:(Ra.crossVectors(Vi,Wi),e=[Ra.x,Ra.y,Ra.z],cc(e,Gs,Vs,Ws,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],ti=new ft,Ea=new ci,Gs=new ft,Vs=new ft,Ws=new ft,Vi=new ft,Wi=new ft,ps=new ft,Sr=new ft,Aa=new ft,Ra=new ft,ms=new ft;function cc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ms.fromArray(i,r);let l=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),o=t.dot(ms),h=e.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var Ri=xp();function xp(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):h<-14?(n[o]=1024>>-h-14,n[o|256]=1024>>-h-14|32768,s[o]=-h-1,s[o|256]=-h-1):h<=15?(n[o]=h+15<<10,n[o|256]=h+15<<10|32768,s[o]=13,s[o|256]=13):h<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[o]=h|u}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function yp(i){Math.abs(i)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),i=be(i,-65504,65504),Ri.floatView[0]=i;let t=Ri.uint32View[0],e=t>>23&511;return Ri.baseTable[e]+((t&8388607)>>Ri.shiftTable[e])}function _p(i){let t=i>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[t]+(i&1023)]+Ri.exponentTable[t],Ri.floatView[0]}var Xi=class{static toHalfFloat(t){return yp(t)}static fromHalfFloat(t){return _p(t)}},Ve=new ft,Ca=new ie,bp=0,Le=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?Xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ap(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):op(t,this.array)}};var Dr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},wp=new ci,Tr=new ft,hc=new ft,hi=class{constructor(t=new ft,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(hc)),this.expandByPoint(Tr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mp=0,Gn=new xe,uc=new bn,$s=new ft,Nn=new ci,Er=new ci,en=new ft,Be=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Er.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(Nn.min,Er.min),Nn.expandByPoint(en),en.addVectors(Nn.max,Er.max),Nn.expandByPoint(en)):(Nn.expandByPoint(Er.min),Nn.expandByPoint(Er.max))}Nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)en.fromBufferAttribute(l,h),o&&($s.fromBufferAttribute(t,h),en.add($s)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[],h=new Uint8Array(n.count);for(let k=0;k<n.count;k++)l[k]=new ft,o[k]=new ft;let u=new ft,c=new ft,f=new ft,d=new ie,p=new ie,v=new ie,g=new ft,m=new ft;function x(k,S,G){h[k]=h[S]=h[G]=1,u.fromBufferAttribute(n,k),c.fromBufferAttribute(n,S),f.fromBufferAttribute(n,G),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,G),c.sub(u),f.sub(u),p.sub(d),v.sub(d);let Z=1/(p.x*v.y-v.x*p.y);isFinite(Z)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(Z),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(Z),l[k].add(g),l[S].add(g),l[G].add(g),o[k].add(m),o[S].add(m),o[G].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let k=0,S=_.length;k<S;++k){let G=_[k],Z=G.start,st=G.count;for(let N=Z,V=Z+st;N<V;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new ft,M=new ft,C=new ft,y=new ft;function T(k){C.fromBufferAttribute(s,k),y.copy(C);let S=l[k];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(y,S);let Z=M.dot(o[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,Z)}for(let k=0,S=n.count;k<S;++k)h[k]&&T(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new ft,r=new ft,a=new ft,l=new ft,o=new ft,h=new ft,u=new ft,c=new ft;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(u),o.add(u),h.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,c=l.normalized,f=new h.constructor(o.length*u),d=0,p=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Le(f,u,c)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let o=[],h=r[l];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let h=n[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new ft,Sp=new ft,Tp=new de,Fn=class{constructor(t=new ft(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tp.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ep=0,Yi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=ar,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=or,this.blendDst=lr,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new ft,fc=new ft,Pa=new ft,Ia=new ft,Fr=class{constructor(t=new ft,e=new ft(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),h=Ia.lengthSq(),u=Math.abs(1-a*a),c,f,d,p;if(u>0)if(c=a*o-l,f=a*l-o,p=r*u,c>=0)if(f>=-p)if(f<=p){let v=1/u;c*=v,f*=v,d=c*(c+a*f+2*l)+f*(a*c+f+2*o)+h}else f=r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f=-r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f<=-p?(c=Math.max(0,-(-a*r+l)),f=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h):f<=p?(c=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+h):(c=Math.max(0,-(a*r+l)),f=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(fc).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-f.z)*c,o=(t.max.z-f.z)*c):(l=(t.max.z-f.z)*c,o=(t.min.z-f.z)*c),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,h=l.y,u=l.z,c=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,_=n.z-a.z,b=Math.abs(o),M=Math.abs(h),C=Math.abs(u),y,T,k,S,G,Z,st,N,V,O,Y,ot;if(b>=M&&b>=C?(k=o,Z=c,V=p,ot=m,o>=0?(y=h,T=u,S=f,G=d,st=v,N=g,O=x,Y=_):(y=u,T=h,S=d,G=f,st=g,N=v,O=_,Y=x)):M>=C?(k=h,Z=f,V=v,ot=x,h>=0?(y=u,T=o,S=d,G=c,st=g,N=p,O=_,Y=m):(y=o,T=u,S=c,G=d,st=p,N=g,O=m,Y=_)):(k=u,Z=d,V=g,ot=_,u>=0?(y=o,T=h,S=c,G=f,st=p,N=v,O=m,Y=x):(y=h,T=o,S=f,G=c,st=v,N=p,O=x,Y=m)),k===0)return null;let et=y/k,pt=T/k,dt=1/k,at=S-et*Z,R=G-pt*Z,E=st-et*V,H=N-pt*V,X=O-et*ot,ct=Y-pt*ot,q=X*H-ct*E,lt=at*ct-R*X,gt=E*R-H*at;if(s){if(q<0||lt<0||gt<0)return null}else if((q<0||lt<0||gt<0)&&(q>0||lt>0||gt>0))return null;let mt=q+lt+gt;if(mt===0)return null;let U=dt*(q*Z+lt*V+gt*ot);return(mt>0?U<0:U>0)?null:this.at(U/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new xe,gs=new Fr,La=new hi,Vh=new ft,Da=new ft,Na=new ft,Fa=new ft,pc=new ft,Ua=new ft,Wh=new ft,ka=new ft,pe=class extends bn{constructor(t=new Be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ua.set(0,0,0);for(let o=0,h=r.length;o<h;o++){let u=l[o],c=r[o];u!==0&&(pc.fromBufferAttribute(c,t),a?Ua.addScaledVector(pc,u):Ua.addScaledVector(pc.sub(e),u))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(La.containsPoint(gs.origin)===!1&&(gs.intersectSphere(La,Vh)===null||gs.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,M=_;b<M;b+=3){let C=l.getX(b),y=l.getX(b+1),T=l.getX(b+2);s=Oa(this,m,t,n,h,u,c,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=l.getX(g),_=l.getX(g+1),b=l.getX(g+2);s=Oa(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,M=_;b<M;b+=3){let C=b,y=b+1,T=b+2;s=Oa(this,m,t,n,h,u,c,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,_=g+1,b=g+2;s=Oa(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ap(i,t,e,n,s,r,a,l){let o;if(t.side===nn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===ts,l),o===null)return null;ka.copy(l),ka.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(ka);return h<e.near||h>e.far?null:{distance:h,point:ka.clone(),object:i}}function Oa(i,t,e,n,s,r,a,l,o,h){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(h,Fa);let u=Ap(i,t,e,n,Da,Na,Fa,Wh);if(u){let c=new ft;qi.getBarycoord(Wh,Da,Na,Fa,c),s&&(u.uv=qi.getInterpolatedAttribute(s,l,o,h,c,new ie)),r&&(u.uv1=qi.getInterpolatedAttribute(r,l,o,h,c,new ie)),a&&(u.normal=qi.getInterpolatedAttribute(a,l,o,h,c,new ft),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new ft,materialIndex:0};qi.getNormal(Da,Na,Fa,f.normal),u.face=f,u.barycoord=c}return u}var Sn=class extends cn{constructor(t=null,e=1,n=1,s,r,a,l,o,h=Ue,u=Ue,c,f){super(null,a,l,o,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new xe,$h=new xe,Ba=[],qh=new ci,Rp=new xe,Ar=new pe,Rr=new hi,kr=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),qh.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Rr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),$h.multiplyMatrices(n,qs),Ar.matrixWorld=$h,Ar.raycast(t,Ba);for(let a=0,l=Ba.length;a<l;a++){let o=Ba[a];o.instanceId=r,o.object=this,e.push(o)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,fi,Tn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new hi,Cp=new ie(.5,.5),za=new ft,ui=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],_=r[13],b=r[14],M=r[15];if(s[0].setComponents(h-a,d-u,m-p,M-x).normalize(),s[1].setComponents(h+a,d+u,m+p,M+x).normalize(),s[2].setComponents(h+l,d+c,m+v,M+_).normalize(),s[3].setComponents(h-l,d-c,m-v,M-_).normalize(),n)s[4].setComponents(o,f,g,b).normalize(),s[5].setComponents(h-o,d-f,m-g,M-b).normalize();else if(s[4].setComponents(h-o,d-f,m-g,M-b).normalize(),e===Vn)s[5].setComponents(h+o,d+f,m+g,M+b).normalize();else if(e===Ks)s[5].setComponents(o,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=Cp.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xh=new xe,ro=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(Xh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ui),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Or=class extends cn{constructor(t=[],e=Ss,n,s,r,a,l,o,h,u){super(t,e,n,s,r,a,l,o,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends cn{constructor(t,e,n,s,r,a,l,o,h){super(t,e,n,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends cn{constructor(t,e,n=ii,s,r,a,l=Ue,o=Ue,h,u=Ii,c=1){if(u!==Ii&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,l,o,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Br=class extends ni{constructor(t,e=ii,n=Ss,s,r,a=Ue,l=Ue,o,h=Ii){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zi=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],h=[],u=[],c=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(c,2));function p(v,g,m,x,_,b,M,C,y,T,k){let S=b/y,G=M/T,Z=b/2,st=M/2,N=C/2,V=y+1,O=T+1,Y=0,ot=0,et=new ft;for(let pt=0;pt<O;pt++){let dt=pt*G-st;for(let at=0;at<V;at++){let R=at*S-Z;et[v]=R*x,et[g]=dt*_,et[m]=N,h.push(et.x,et.y,et.z),et[v]=0,et[g]=0,et[m]=C>0?1:-1,u.push(et.x,et.y,et.z),c.push(at/y),c.push(1-pt/T),Y+=1}}for(let pt=0;pt<T;pt++)for(let dt=0;dt<y;dt++){let at=f+dt+V*pt,R=f+dt+V*(pt+1),E=f+(dt+1)+V*(pt+1),H=f+(dt+1)+V*pt;o.push(at,R,H),o.push(R,E,H),ot+=6}l.addGroup(d,ot,k),d+=ot,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hr=class i extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,p=n*2+r,v=s+1,g=new ft,m=new ft;for(let x=0;x<=p;x++){let _=0,b=0,M=0,C=0;if(x<=n){let k=x/n,S=k*Math.PI/2;b=-u-t*Math.cos(S),M=t*Math.sin(S),C=-t*Math.cos(S),_=k*c}else if(x<=n+r){let k=(x-n)/r;b=-u+k*e,M=t,C=0,_=c+k*f}else{let k=(x-n-r)/n,S=k*Math.PI/2;b=u+t*Math.sin(S),M=t*Math.cos(S),C=t*Math.sin(S),_=c+f+k*c}let y=Math.max(0,Math.min(1,_/d)),T=0;x===0?T=.5/s:x===p&&(T=-.5/s);for(let k=0;k<=s;k++){let S=k/s,G=S*Math.PI*2,Z=Math.sin(G),st=Math.cos(G);m.x=-M*st,m.y=b,m.z=M*Z,l.push(m.x,m.y,m.z),g.set(-M*st,C,M*Z),g.normalize(),o.push(g.x,g.y,g.z),h.push(S+T,y)}if(x>0){let k=(x-1)*v;for(let S=0;S<s;S++){let G=k+S,Z=k+S+1,st=x*v+S,N=x*v+S+1;a.push(G,Z,st),a.push(Z,N,st)}}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Gr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],h=new ft,u=new ie;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){let d=n+c/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ji=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],p=0,v=[],g=n/2,m=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){let b=new ft,M=new ft,C=0,y=(e-t)/n;for(let T=0;T<=r;T++){let k=[],S=T/r,G=S*(e-t)+t;for(let Z=0;Z<=s;Z++){let st=Z/s,N=st*o+l,V=Math.sin(N),O=Math.cos(N);M.x=G*V,M.y=-S*n+g,M.z=G*O,c.push(M.x,M.y,M.z),b.set(V,y,O).normalize(),f.push(b.x,b.y,b.z),d.push(st,1-S),k.push(p++)}v.push(k)}for(let T=0;T<s;T++)for(let k=0;k<r;k++){let S=v[k][T],G=v[k+1][T],Z=v[k+1][T+1],st=v[k][T+1];(t>0||k!==0)&&(u.push(S,G,st),C+=3),(e>0||k!==r-1)&&(u.push(G,Z,st),C+=3)}h.addGroup(m,C,0),m+=C}function _(b){let M=p,C=new ie,y=new ft,T=0,k=b===!0?t:e,S=b===!0?1:-1;for(let Z=1;Z<=s;Z++)c.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;let G=p;for(let Z=0;Z<=s;Z++){let N=Z/s*o+l,V=Math.cos(N),O=Math.sin(N);y.x=k*O,y.y=g*S,y.z=k*V,c.push(y.x,y.y,y.z),f.push(0,S,0),C.x=V*.5+.5,C.y=O*.5*S+.5,d.push(C.x,C.y),p++}for(let Z=0;Z<s;Z++){let st=M+Z,N=G+Z;b===!0?u.push(N,N+1,st):u.push(N+1,N,st),T+=3}h.addGroup(m,T,b===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class i extends ji{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),h(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let _=new ft,b=new ft,M=new ft;for(let C=0;C<e.length;C+=3)d(e[C+0],_),d(e[C+1],b),d(e[C+2],M),o(_,b,M,x)}function o(x,_,b,M){let C=M+1,y=[];for(let T=0;T<=C;T++){y[T]=[];let k=x.clone().lerp(b,T/C),S=_.clone().lerp(b,T/C),G=C-T;for(let Z=0;Z<=G;Z++)Z===0&&T===C?y[T][Z]=k:y[T][Z]=k.clone().lerp(S,Z/G)}for(let T=0;T<C;T++)for(let k=0;k<2*(C-T)-1;k++){let S=Math.floor(k/2);k%2===0?(f(y[T][S+1]),f(y[T+1][S]),f(y[T][S])):(f(y[T][S+1]),f(y[T+1][S+1]),f(y[T+1][S]))}}function h(x){let _=new ft;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(x),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let x=new ft;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let b=g(x)/2/Math.PI+.5,M=m(x)/Math.PI+.5;a.push(b,1-M)}p(),c()}function c(){for(let x=0;x<a.length;x+=6){let _=a[x+0],b=a[x+2],M=a[x+4],C=Math.max(_,b,M),y=Math.min(_,b,M);C>.9&&y<.1&&(_<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,_){let b=x*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function p(){let x=new ft,_=new ft,b=new ft,M=new ft,C=new ie,y=new ie,T=new ie;for(let k=0,S=0;k<r.length;k+=9,S+=6){x.set(r[k+0],r[k+1],r[k+2]),_.set(r[k+3],r[k+4],r[k+5]),b.set(r[k+6],r[k+7],r[k+8]),C.set(a[S+0],a[S+1]),y.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),M.copy(x).add(_).add(b).divideScalar(3);let G=g(M);v(C,S+0,x,G),v(y,S+2,_,G),v(T,S+4,b,G)}}function v(x,_,b,M){M<0&&x.x===1&&(a[_]=x.x-1),b.x===0&&b.z===0&&(a[_]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Wr=class i extends ao{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Un=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),h=l+1,u=o+1,c=t/l,f=e/o,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*f-a;for(let _=0;_<h;_++){let b=_*c-r;p.push(b,-x,0),v.push(0,0,1),g.push(_/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){let _=x+h*m,b=x+h*(m+1),M=x+1+h*(m+1),C=x+1+h*m;d.push(_,b,C),d.push(b,M,C)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qn=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],o=[],h=[],u=[],c=t,f=(e-t)/s,d=new ft,p=new ie;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=c*Math.cos(m),d.y=c*Math.sin(m),o.push(d.x,d.y,d.z),h.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}c+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,b=x+n+1,M=x+n+2,C=x+1;l.push(_,b,C),l.push(b,M,C)}}this.setIndex(l),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var kn=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),h=0,u=[],c=new ft,f=new ft,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,b=a+_*l,M=t*Math.cos(b),C=Math.sqrt(t*t-M*M),y=0;m===0&&a===0?y=.5/e:m===n&&o===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let k=T/e,S=s+k*r;c.x=-C*Math.cos(S),c.y=M,c.z=C*Math.sin(S),p.push(c.x,c.y,c.z),f.copy(c).normalize(),v.push(f.x,f.y,f.z),g.push(k+y,1-_),x.push(h++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=u[m][x+1],b=u[m][x],M=u[m+1][x],C=u[m+1][x+1];(m!==0||a>0)&&d.push(_,b,C),(m!==n-1||o<Math.PI)&&d.push(b,M,C)}this.setIndex(d),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yh(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function Yh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Bu={clone:Es,merge:gn},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ir=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var lo=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},co=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case xc:r=t,l=2*e-n;break;case yc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,o=2*n-e;break;case yc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*v+.5*p,b=d*g-d*v;for(let M=0;M!==l;++M)r[M]=m*a[u+M]+x*a[h+M]+_*a[o+M]+b*a[c+M];return r}},uo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==l;++f)r[f]=a[h+f]*c+a[o+f]*u;return r}},fo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},po=class extends Ji{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this.inTangents,c=this.outTangents;if(!u||!c){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==l;++g)r[g]=a[h+g]*v+a[o+g]*p;return r}let f=l*2,d=t-1;for(let p=0;p!==l;++p){let v=a[h+p],g=a[o+p],m=d*f+p*2,x=c[m],_=c[m+1],b=t*f+p*2,M=u[b],C=u[b+1],y=Np(n,e,x,M,s);r[p]=zu(y,v,_,C,g)}return r}};function zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Dp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Np(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=zu(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Dp(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ha(t.settings)&&(n.settings={inTangents:Xs(t.settings.inTangents,Array),outTangents:Xs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ha(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ha(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){ce("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){ce("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&sp(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){ce("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(s)o=!0;else{let c=l*n,f=c-n,d=c+n;for(let p=0;p!==n;++p){let v=e[c+p];if(v!==e[f+p]||v!==e[d+p]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let c=l*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,h=0;h!==n;++h)e[o+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=to;var Ki=class extends On{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Pr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};mo.prototype.ValueTypeName="color";var go=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="number";var vo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),h=t*l;for(let u=h+l;h!==u;h+=4)Wn.slerpFlat(r,0,a,h-l,a,h,o);return r}},$r=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends On{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Pr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="vector";var yo=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],p=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new yo,_o=class{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var mc=new xe,Jh=new ft,Kh=new ft,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new ft,Va=new Wn,oi=new ft,qr=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Va,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new ft,Qh=new ie,tu=new ie,We=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Qh,tu),e.subVectors(tu,Qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/h,s*=a.width/o,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _s=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends wo{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ys=-90,Zs=1,sr=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let r=new We(Ys,Zs,t,e);r.layers=this.layers,this.add(r);let a=new We(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let l=new We(Ys,Zs,t,e);l.layers=this.layers,this.add(l);let o=new We(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let h=new We(Ys,Zs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let h of e)this.remove(h);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zc="\\[\\]\\.:\\/",Fp=new RegExp("["+Zc+"]","g"),jc="[^"+Zc+"]",Up="[^"+Zc.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",jc),Op=/(WCOD+)?/.source.replace("WCOD",Up),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),Hp=new RegExp("^"+kp+Op+Bp+zp+"$"),Gp=["material","materials","bones","map"],bc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=bc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var eu=new xe,Yr=class{constructor(t,e,n=0,s=1/0){this.ray=new Fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)wc(r[a],t,e,!0)}}var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Jc(i,t,e,n){let s=Vp(n);switch(e){case Hc:return i*t;case fi:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Oo:case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ia:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case an:case kc:return{byteLength:1,components:1};case hr:case Oc:case je:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case ii:case Ao:case Tn:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){let t=new WeakMap;function e(l,o){let h=l.array,u=l.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,h,u),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function n(l,o,h){let u=o.array,c=o.updateRanges;if(i.bindBuffer(h,l),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<c.length;d++){let p=c[f],v=c[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,c[f]=v)}c.length=f+1;for(let d=0,p=c.length;d<p;d++){let v=c[d];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
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
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform float backgroundBlurriness;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,xg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:qp,alphahash_pars_fragment:Xp,alphamap_fragment:Yp,alphamap_pars_fragment:Zp,alphatest_fragment:jp,alphatest_pars_fragment:Jp,aomap_fragment:Kp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:vm,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:_m,colorspace_fragment:bm,colorspace_pars_fragment:wm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:km,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Fm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:$m,lights_fragment_end:qm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:Qm,map_particle_fragment:t0,map_particle_pars_fragment:e0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:_0,premultiplied_alpha_fragment:b0,project_vertex:w0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:U0,tonemapping_fragment:k0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:V0,worldpos_vertex:W0,background_vert:$0,background_frag:q0,backgroundCube_vert:X0,backgroundCube_frag:Y0,cube_vert:Z0,cube_frag:j0,depth_vert:J0,depth_frag:K0,distance_vert:Q0,distance_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:yg,points_frag:_g,shadow_vert:bg,shadow_frag:wg,sprite_vert:Mg,sprite_frag:Sg},Zt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:gn([Zt.common,Zt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:gn([Zt.lights,Zt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var hl={r:0,b:0,g:0},Tg=new xe,hd=new de;hd.set(-1,0,0,0,1,0,0,0,1);function Eg(i,t,e,n,s,r){let a=new se(0),l=s===!0?0:1,o,h,u=null,c=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let b=x.backgroundBlurriness>0;_=t.get(_,b)}return _}function p(x){let _=!1,b=d(x);b===null?g(a,l):b&&b.isColor&&(g(b,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){let b=d(_);b&&b.isCubeTexture?(h===void 0&&(h=new pe(new Zi(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Es(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(hd),h.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,(u!==b||c!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(o===void 0&&(o=new pe(new Un(2,2),new Xe({name:"BackgroundMaterial",uniforms:Es(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=b,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=_e.getTransfer(b.colorSpace)!==Se,b.matrixAutoUpdate===!0&&b.updateMatrix(),o.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||c!==b.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,_){x.getRGB(hl,Yc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,_,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:v,dispose:m}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(G,Z,st,N,V){let O=!1,Y=c(G,N,st,Z);r!==Y&&(r=Y,h(r.object)),O=d(G,N,st,V),O&&p(G,N,st,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(G,Z,st,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function o(){return i.createVertexArray()}function h(G){return i.bindVertexArray(G)}function u(G){return i.deleteVertexArray(G)}function c(G,Z,st,N){let V=N.wireframe===!0,O=n[Z.id];O===void 0&&(O={},n[Z.id]=O);let Y=G.isInstancedMesh===!0?G.id:0,ot=O[Y];ot===void 0&&(ot={},O[Y]=ot);let et=ot[st.id];et===void 0&&(et={},ot[st.id]=et);let pt=et[V];return pt===void 0&&(pt=f(o()),et[V]=pt),pt}function f(G){let Z=[],st=[],N=[];for(let V=0;V<e;V++)Z[V]=0,st[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:st,attributeDivisors:N,object:G,attributes:{},index:null}}function d(G,Z,st,N){let V=r.attributes,O=Z.attributes,Y=0,ot=st.getAttributes();for(let et in ot)if(ot[et].location>=0){let dt=V[et],at=O[et];if(at===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(at=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(at=G.instanceColor)),dt===void 0||dt.attribute!==at||at&&dt.data!==at.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function p(G,Z,st,N){let V={},O=Z.attributes,Y=0,ot=st.getAttributes();for(let et in ot)if(ot[et].location>=0){let dt=O[et];dt===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(dt=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(dt=G.instanceColor));let at={};at.attribute=dt,dt&&dt.data&&(at.data=dt.data),V[et]=at,Y++}r.attributes=V,r.attributesNum=Y,r.index=N}function v(){let G=r.newAttributes;for(let Z=0,st=G.length;Z<st;Z++)G[Z]=0}function g(G){m(G,0)}function m(G,Z){let st=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;st[G]=1,N[G]===0&&(i.enableVertexAttribArray(G),N[G]=1),V[G]!==Z&&(i.vertexAttribDivisor(G,Z),V[G]=Z)}function x(){let G=r.newAttributes,Z=r.enabledAttributes;for(let st=0,N=Z.length;st<N;st++)Z[st]!==G[st]&&(i.disableVertexAttribArray(st),Z[st]=0)}function _(G,Z,st,N,V,O,Y){Y===!0?i.vertexAttribIPointer(G,Z,st,V,O):i.vertexAttribPointer(G,Z,st,N,V,O)}function b(G,Z,st,N){v();let V=N.attributes,O=st.getAttributes(),Y=Z.defaultAttributeValues;for(let ot in O){let et=O[ot];if(et.location>=0){let pt=V[ot];if(pt===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(pt=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(pt=G.instanceColor)),pt!==void 0){let dt=pt.normalized,at=pt.itemSize,R=t.get(pt);if(R===void 0)continue;let E=R.buffer,H=R.type,X=R.bytesPerElement,ct=H===i.INT||H===i.UNSIGNED_INT||pt.gpuType===Ao;if(pt.isInterleavedBufferAttribute){let q=pt.data,lt=q.isInterleavedBuffer===!0?q.stride:q.itemSize,gt=pt.offset;if(q.isInstancedInterleavedBuffer||q.isInstancedBufferAttribute){for(let mt=0;mt<et.locationSize;mt++)m(et.location+mt,q.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let mt=0;mt<et.locationSize;mt++)g(et.location+mt);i.bindBuffer(i.ARRAY_BUFFER,E);for(let mt=0;mt<et.locationSize;mt++)_(et.location+mt,at/et.locationSize,H,dt,lt*X,(gt+at/et.locationSize*mt)*X,ct)}else{if(pt.isInstancedBufferAttribute){for(let q=0;q<et.locationSize;q++)m(et.location+q,pt.meshPerAttribute);G.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let q=0;q<et.locationSize;q++)g(et.location+q);i.bindBuffer(i.ARRAY_BUFFER,E);for(let q=0;q<et.locationSize;q++)_(et.location+q,at/et.locationSize,H,dt,at*X,at/et.locationSize*q*X,ct)}}else if(Y!==void 0){let dt=Y[ot];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(et.location,dt);break;case 3:i.vertexAttrib3fv(et.location,dt);break;case 4:i.vertexAttrib4fv(et.location,dt);break;default:i.vertexAttrib1fv(et.location,dt)}}}}x()}function M(){k();for(let G in n){let Z=n[G];for(let st in Z){let N=Z[st];for(let V in N){let O=N[V];for(let Y in O)u(O[Y].object),delete O[Y];delete N[V]}}delete n[G]}}function C(G){if(n[G.id]===void 0)return;let Z=n[G.id];for(let st in Z){let N=Z[st];for(let V in N){let O=N[V];for(let Y in O)u(O[Y].object),delete O[Y];delete N[V]}}delete n[G.id]}function y(G){for(let Z in n){let st=n[Z];for(let N in st){let V=st[N];if(V[G.id]===void 0)continue;let O=V[G.id];for(let Y in O)u(O[Y].object),delete O[Y];delete V[G.id]}}}function T(G){for(let Z in n){let st=n[Z],N=G.isInstancedMesh===!0?G.id:0,V=st[N];if(V!==void 0){for(let O in V){let Y=V[O];for(let ot in Y)u(Y[ot].object),delete Y[ot];delete V[O]}delete st[N],Object.keys(st).length===0&&delete n[Z]}}}function k(){S(),a=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:k,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Rg(i,t,e){let n;function s(o){n=o}function r(o,h){i.drawArrays(n,o,h),e.update(h,n,1)}function a(o,h,u){u!==0&&(i.drawArraysInstanced(n,o,h,u),e.update(h,n,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ye&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(y){let T=y===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==an&&y!==Tn&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=o(h);u!==h&&(oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&c===!1;e.reversedDepthBuffer===!0&&c===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&c===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,maxSamples:M,samples:C}}function Pg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Fn,l=new de,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let p=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=i.get(c);if(!s||p===null||p.length===0||r&&!g)r?u(null):h();else{let x=r?0:n,_=x*4,b=m.clippingState||null;o.value=b,b=u(p,f,_,d);for(let M=0;M!==_;++M)b[M]=e[M];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,p){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){let m=d+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,b=d;_!==v;++_,b+=4)a.copy(c[_]).applyMatrix4(x,l),a.normal.toArray(g,b),g[b+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var la=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zi(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ws});r.uniforms.tEquirect.value=e;let a=new pe(s,r),l=e.minFilter;return e.minFilter===rn&&(e.minFilter=Ae),new sr(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Gu=256,Ig=3,Lg=20,ud=256,dd=16,Dg=3,Ng=new ft,Fg=new se,dr=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sr(1,10,null),this._boxMesh=new pe(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Ng}=r,o=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let c=o.autoClear,f=o.autoClearColor,d=o.autoClearDepth,p=o.autoClearStencil,v=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(t.background=o.getClearColor(Fg));let g=new sr(n,s,u);return g.position.copy(l),g.update(o,t),o.autoClear=c,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gu,ku(t))}_fromTexture(t,e){t.mapping===Ss||t.mapping===cr?this._setSize(t.image.length===0?Gu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-Ig;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ss||t.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ug(),this._integrationMaterial=kg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/dd);for(let a=0;a<=n;a++){let l=i.lodToRoughness(a,n);if(a>n-Dg)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(ud*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Og());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vu(i,t,e){return new la(i,{minFilter:rn,generateMipmaps:t,type:je,colorSpace:xs,depthBuffer:e})}function ca(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:nn,blending:ws,depthTest:!1,depthWrite:!1})}function Ug(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function kg(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dd}},`

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
	`)}function Og(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lg}
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
	`)}function Bg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===So||d===To)if(t.has(f)){let p=t.get(f).texture;return l(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new la(p.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",h),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===So||d===To,v=d===Ss||d===cr;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new dr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new dr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,d){return d===So?f.mapping=Ss:d===To&&(f.mapping=cr),f}function o(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function c(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=v!==null?v.array.length:g.array.length/3-1,_=g.count>=65535?Nr:Dr,b=new _(Math.ceil(x/3)*6,1),M=b.array;if(v!==null){let y=v.array;m=v.version;for(let T=0,k=0;T<x;T+=3){let S=y[T+0],G=y[T+1],Z=y[T+2];M[k++]=S,M[k++]=G,M[k++]=G,M[k++]=Z,M[k++]=Z,M[k++]=S}}else{m=g.version;for(let y=0,T=0;y<x;y+=3){let k=y+0,S=y+1,G=y+2;M[T++]=k,M[T++]=S,M[T++]=S,M[T++]=G,M[T++]=G,M[T++]=k}}b.version=m;let C=r.get(p);C&&t.remove(C),r.set(p,b)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&c(p)}else c(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&o(v)}}return{get:h,update:u,getWireframeAttribute:f,dispose:d}}function Gg(i,t,e){let n;function s(c){n=c}let r,a;function l(c){r=c.type,a=c.bytesPerElement}function o(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new ge;function r(a,l,o){let h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==c){let k=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let b=l.attributes.position.count*_,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*M*4*c),y=new ys(C,b,M,c);y.type=Tn,y.needsUpdate=!0;let T=_*4;for(let S=0;S<c;S++){let G=g[S],Z=m[S],st=x[S],N=b*M*4*S;for(let V=0;V<G.count;V++){let O=V*T;d===!0&&(s.fromBufferAttribute(G,V),C[N+O+0]=s.x,C[N+O+1]=s.y,C[N+O+2]=s.z,C[N+O+3]=0),p===!0&&(s.fromBufferAttribute(Z,V),C[N+O+4]=s.x,C[N+O+5]=s.y,C[N+O+6]=s.z,C[N+O+7]=0),v===!0&&(s.fromBufferAttribute(st,V),C[N+O+8]=s.x,C[N+O+9]=s.y,C[N+O+10]=s.z,C[N+O+11]=st.itemSize===4?s.w:1)}}f={count:c,texture:y,size:new ie(b,M)},n.set(l,f),l.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",h)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var qg={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Lc]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,s,r){let a=new Oe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,u=new Be;u.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Te([0,2,0,0,2,0],2));let c=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pe(u,c),d=new _s(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,x=null,_=[],b=!1;this.setSize=function(M,C){a.setSize(M,C),l!==null&&l.setSize(M,C),o!==null&&o.setSize(M,C);for(let y=0;y<_.length;y++){let T=_[y];T.setSize&&T.setSize(M,C)}},this.setEffects=function(M){_=M,b=_.length>0&&_[0].isRenderPass===!0;let C=a.width,y=a.height;_.length>0&&l===null&&(l=new Oe(C,y,{type:je,depthBuffer:!1,stencilBuffer:!1}),o=new Oe(C,y,{type:je,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&_.some(k=>k.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new ni(C,y),r===!0&&(h.format=Di,h.type=Ts)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let k=0;k<_.length;k++){let S=_[k];S.setSize&&S.setSize(C,y),T&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(h)}},this.begin=function(M,C){if(g||M.toneMapping===di&&_.length===0)return!1;if(x=C,C!==null){let y=C.width,T=C.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return b===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return b},this.end=function(M,C){M.toneMapping=m,g=!0;let y=a,T=l;for(let k=0;k<_.length;k++){let S=_[k];S.enabled!==!1&&(S.render(M,T,y,C),S.needsSwap!==!1&&(y=T,T=T===l?o:l))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,c.defines={},_e.getTransfer(p)===Se&&(c.defines.SRGB_TRANSFER="");let k=qg[v];k&&(c.defines[k]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(x),M.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var fd=new cn,pd=new ni(1,1),md=new Br(1),gd=new ys,vd=new so,xd=new Or,qu=[],Xu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),ju=new Float32Array(4);function fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Ke(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ke(e,n)}}function tv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Ke(e,n)}}function ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function pl(i){return i.version===0&&(i.compareFunction=$c,i.needsUpdate=!0),i}function cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=pl(pd):r=fd,e.setTexture2D(t||r,s)}function hv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vd,s)}function uv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=pl(md):r=xd,e.setTextureCube(t||r,s)}function dv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function fv(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return jg;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(i,t){i.uniform1fv(this.addr,t)}function mv(i,t){let e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function gv(i,t){let e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function vv(i,t){let e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function xv(i,t){let e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yv(i,t){let e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _v(i,t){let e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bv(i,t){i.uniform1iv(this.addr,t)}function wv(i,t){i.uniform2iv(this.addr,t)}function Mv(i,t){i.uniform3iv(this.addr,t)}function Sv(i,t){i.uniform4iv(this.addr,t)}function Tv(i,t){i.uniform1uiv(this.addr,t)}function Ev(i,t){i.uniform2uiv(this.addr,t)}function Av(i,t){i.uniform3uiv(this.addr,t)}function Rv(i,t){i.uniform4uiv(this.addr,t)}function Cv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=pl(pd):a=fd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Pv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vd,r[a])}function Iv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=pl(md):a=xd;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function Lv(i,t,e){let n=this.cache,s=t.length,r=fl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Dv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return vv;case 35674:return xv;case 35675:return yv;case 35676:return _v;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return Tv;case 36294:return Ev;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fv(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dv(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Ju(i,t){i.seq.push(t),i.map[t.id]=t}function Nv(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,l=r[1],o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){Ju(e,h===void 0?new th(l,i,t):new eh(l,i,t));break}else{let c=e.map[l];c===void 0&&(c=new nh(l),Ju(e,c)),e=c}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Nv(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fv=37297,Uv=0;function kv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Qu=new de;function Ov(i){_e._getMatrix(Qu,_e.workingColorSpace,i);let t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kv(i.getShaderSource(t),l)}else return r}function Bv(i,t){let e=Ov(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var zv={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[Lc]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Dc]:"Custom"};function Hv(i,t){let e=zv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new ft;function Gv(){_e.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Wv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $v(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function oa(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(qv,Xv)}function Xv(i,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ih(e)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(Yv,Zv)}function Zv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var jv={[bs]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function Jv(i){return jv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kv={[cr]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tx={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tx[i.combine]||"ENVMAP_BLENDING_NONE"}function nx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=Jv(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Qv(e),c=ex(e),f=Vv(e),d=Wv(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(v=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?me.tonemapping_pars_fragment:"",e.toneMapping!==di?Hv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),Gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=ih(a),a=ed(a,e),a=nd(a,e),l=ih(l),l=ed(l,e),l=nd(l,e),a=id(a),l=id(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+v+a,_=m+g+l,b=Ku(s,s.VERTEX_SHADER,x),M=Ku(s,s.FRAGMENT_SHADER,_);s.attachShader(p,b),s.attachShader(p,M),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function C(S){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(p)||"",Z=s.getShaderInfoLog(b)||"",st=s.getShaderInfoLog(M)||"",N=G.trim(),V=Z.trim(),O=st.trim(),Y=!0,ot=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,b,M);else{let et=td(s,b,"vertex"),pt=td(s,M,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+et+`
`+pt)}else N!==""?oe("WebGLProgram: Program Info Log:",N):(V===""||O==="")&&(ot=!1);ot&&(S.diagnostics={runnable:Y,programLog:N,vertexShader:{log:V,prefix:v},fragmentShader:{log:O,prefix:g}})}s.deleteShader(b),s.deleteShader(M),y=new ur(s,p),T=$v(s,p)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,Fv)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}var ix=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}};function sx(i){return i===es||i===ia||i===sa}function rx(i,t,e,n,s,r){let a=new er,l=new sh,o=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return o.add(y),y===0?"uv":`uv${y}`}function p(y,T,k,S,G,Z){let st=S.fog,N=G.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?S.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||V,O),ot=f[y.type],et=n.precision;y.precision!==null&&(et=n.getMaxPrecision(y.precision),et!==y.precision&&oe("WebGLProgram.getParameters:",y.precision,"not supported, using",et,"instead."));let pt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=pt!==void 0?pt.length:0,at=0;N.morphAttributes.position!==void 0&&(at=1),N.morphAttributes.normal!==void 0&&(at=2),N.morphAttributes.color!==void 0&&(at=3);let R,E,H,X;if(ot){let Tt=mi[ot];R=Tt.vertexShader,E=Tt.fragmentShader}else{R=y.vertexShader,E=y.fragmentShader;let Tt=l.getVertexShaderStage(y),ae=l.getFragmentShaderStage(y);l.update(y,Tt,ae),H=Tt.id,X=ae.id}let ct=i.getRenderTarget(),q=i.state.buffers.depth.getReversed(),lt=G.isInstancedMesh===!0,gt=G.isBatchedMesh===!0,mt=!!y.map,U=!!y.matcap,ht=!!Y,j=ht&&Y.isPMREMTexture===!0,Q=!!y.aoMap,it=!!y.lightMap,bt=!!y.bumpMap&&y.wireframe===!1,It=!!y.normalMap,jt=!!y.displacementMap,Ut=!!y.emissiveMap,At=!!y.metalnessMap,Dt=!!y.roughnessMap,kt=y.anisotropy>0,K=y.clearcoat>0,Ht=y.diffuseRoughness>0,Rt=y.dispersion>0,Bt=y.retroreflectivity>0,_t=y.iridescence>0,Lt=y.sheen>0,Ot=y.transmission>0,Ft=kt&&!!y.anisotropyMap,z=K&&!!y.clearcoatMap,A=K&&!!y.clearcoatNormalMap,ut=K&&!!y.clearcoatRoughnessMap,vt=Ht&&!!y.diffuseRoughnessMap,P=_t&&!!y.iridescenceMap,B=_t&&!!y.iridescenceThicknessMap,J=Lt&&!!y.sheenColorMap,w=Lt&&!!y.sheenRoughnessMap,L=!!y.specularMap,F=!!y.specularColorMap,I=!!y.specularIntensityMap,$=Ot&&!!y.transmissionMap,nt=Ot&&!!y.thicknessMap,Mt=!!y.gradientMap,Et=!!y.alphaMap,Pt=y.alphaTest>0,Gt=!!y.alphaHash,Vt=!!y.extensions,Ct=di;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let Nt=j?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,qt={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:R,fragmentShader:E,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:et,batching:gt,batchingColor:gt&&G._colorsTexture!==null,instancing:lt,instancingColor:lt&&G.instanceColor!==null,instancingMorph:lt&&G.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:U,envMap:ht,envMapMode:ht&&Y.mapping,envMapPMREM:j,envMapMaxLod:j?Nt.length-1:null,envMapSize:j?Nt[0].width:null,aoMap:Q,lightMap:it,bumpMap:bt,normalMap:It,displacementMap:jt,emissiveMap:Ut,normalMapObjectSpace:It&&y.normalMapType===Tu,normalMapTangentSpace:It&&y.normalMapType===cl,packedNormalMap:It&&y.normalMapType===cl&&sx(y.normalMap.format),metalnessMap:At,roughnessMap:Dt,anisotropy:kt,anisotropyMap:Ft,clearcoat:K,clearcoatMap:z,clearcoatNormalMap:A,clearcoatRoughnessMap:ut,diffuseRoughness:Ht,diffuseRoughnessMap:vt,dispersion:Rt,retroreflection:Bt,iridescence:_t,iridescenceMap:P,iridescenceThicknessMap:B,sheen:Lt,sheenColorMap:J,sheenRoughnessMap:w,specularMap:L,specularColorMap:F,specularIntensityMap:I,transmission:Ot,transmissionMap:$,thicknessMap:nt,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:Et,alphaTest:Pt,alphaHash:Gt,combine:y.combine,mapUv:mt&&d(y.map.channel),aoMapUv:Q&&d(y.aoMap.channel),lightMapUv:it&&d(y.lightMap.channel),bumpMapUv:bt&&d(y.bumpMap.channel),normalMapUv:It&&d(y.normalMap.channel),displacementMapUv:jt&&d(y.displacementMap.channel),emissiveMapUv:Ut&&d(y.emissiveMap.channel),metalnessMapUv:At&&d(y.metalnessMap.channel),roughnessMapUv:Dt&&d(y.roughnessMap.channel),anisotropyMapUv:Ft&&d(y.anisotropyMap.channel),clearcoatMapUv:z&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:vt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:P&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:B&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:w&&d(y.sheenRoughnessMap.channel),specularMapUv:L&&d(y.specularMap.channel),specularColorMapUv:F&&d(y.specularColorMap.channel),specularIntensityMapUv:I&&d(y.specularIntensityMap.channel),transmissionMapUv:$&&d(y.transmissionMap.channel),thicknessMapUv:nt&&d(y.thicknessMap.channel),alphaMapUv:Et&&d(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(It||kt),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!N.attributes.uv&&(mt||Et),fog:!!st,useFog:y.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&It===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:q,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:at,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Z.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Ut&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function v(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(g(T,y),m(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){let T=f[y.type],k;if(T){let S=mi[T];k=Bu.clone(S.uniforms)}else k=y.uniforms;return k}function _(y,T){let k=u.get(T);return k!==void 0?++k.usedTimes:(k=new nx(i,T,y,s),h.push(k),u.set(T,k)),k}function b(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:h,dispose:C}}function ax(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ad(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,p,v,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function o(f,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let _=l(f,d,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function h(f,d,p,v,g,m){let x=l(f,d,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||ox),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function c(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function lx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ft,color:new se};break;case"SpotLight":e={position:new ft,direction:new ft,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ft,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ft,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return i[t.id]=e,e}}}function hx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ux=0;function dx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fx(i){let t=new cx,e=hx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ft);let s=new ft,r=new xe,a=new xe;function l(h){let u=0,c=0,f=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,_=0,b=0,M=0,C=0,y=0,T=0,k=0,S=0;h.sort(dx);for(let Z=0,st=h.length;Z<st;Z++){let N=h[Z],V=N.color,O=N.intensity,Y=N.distance,ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===es?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=V.r*O,c+=V.g*O,f+=V.b*O;else if(N.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(N.sh.coefficients[et],O);S++}else if(N.isSunLight){let et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let pt=N.shadow,dt=e.get(N);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),n.sunShadow[p]=dt,n.sunShadowMap[p]=ot;let at=pt.getViewportCount();for(let R=0;R<at;R++)n.sunShadowMatrix[v+R]=pt.getMatrix(R),n.sunShadowCascade[v+R]=pt._cascadeData[R];v+=at,p++}n.sun[d]=et,d++}else if(N.isDirectionalLight){let et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let pt=N.shadow,dt=e.get(N);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.directionalShadow[g]=dt,n.directionalShadowMap[g]=ot,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=et,g++}else if(N.isSpotLight){let et=t.get(N);et.position.setFromMatrixPosition(N.matrixWorld),et.color.copy(V).multiplyScalar(O),et.distance=Y,et.coneCos=Math.cos(N.angle),et.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),et.decay=N.decay,n.spot[x]=et;let pt=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,pt.updateMatrices(N),N.castShadow&&k++),n.spotLightMatrix[x]=pt.matrix,N.castShadow){let dt=e.get(N);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.spotShadow[x]=dt,n.spotShadowMap[x]=ot,y++}x++}else if(N.isRectAreaLight){let et=t.get(N);et.color.copy(V).multiplyScalar(O),et.halfWidth.set(N.width*.5,0,0),et.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=et,_++}else if(N.isPointLight){let et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),et.distance=N.distance,et.decay=N.decay,N.castShadow){let pt=N.shadow,dt=e.get(N);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,dt.shadowCameraNear=pt.camera.near,dt.shadowCameraFar=pt.camera.far,n.pointShadow[m]=dt,n.pointShadowMap[m]=ot,n.pointShadowMatrix[m]=N.shadow.matrix,C++}n.point[m]=et,m++}else if(N.isHemisphereLight){let et=t.get(N);et.skyColor.copy(N.color).multiplyScalar(O),et.groundColor.copy(N.groundColor).multiplyScalar(O),n.hemi[b]=et,b++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let G=n.hash;(G.sunLength!==d||G.directionalLength!==g||G.pointLength!==m||G.spotLength!==x||G.rectAreaLength!==_||G.hemiLength!==b||G.numSunShadows!==p||G.numDirectionalShadows!==M||G.numPointShadows!==C||G.numSpotShadows!==y||G.numSpotMaps!==T||G.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-k,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=S,G.sunLength=d,G.directionalLength=g,G.pointLength=m,G.spotLength=x,G.rectAreaLength=_,G.hemiLength=b,G.numSunShadows=p,G.numDirectionalShadows=M,G.numPointShadows=C,G.numSpotShadows=y,G.numSpotMaps=T,G.numLightProbes=S,n.version=ux++)}function o(h,u){let c=0,f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let b=h[x];if(b.isSunLight){let M=n.sun[c];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),c++}else if(b.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:n}}function od(i){let t=new fx(i),e=[],n=[],s=[];function r(c){u.camera=c,e.length=0,n.length=0,s.length=0}function a(c){c.isLightProbeGrid?s.push(c):e.push(c)}function l(c){n.push(c)}function o(){t.setup(e),s.sort((c,f)=>c.priority-f.priority||c.id-f.id)}function h(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l}}function px(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new od(i),t.set(s,[l])):r>=a.length?(l=new od(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,vx=[new ft(1,0,0),new ft(-1,0,0),new ft(0,1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1)],xx=[new ft(0,-1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,-1,0),new ft(0,-1,0)],ld=new xe,aa=new ft,Qc=new ft;function yx(i,t,e){let n=new ui,s=new ie,r=new ie,a=new ge,l=new lo,o=new co,h={},u=e.maxTextureSize,c={[ts]:nn,[nn]:ts,[sn]:sn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Be;p.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let m=this.type;this.render=function(C,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===ru&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let k=i.getRenderTarget(),S=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ws),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let st=m!==this.type;st&&y.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=C.length;N<V;N++){let O=C[N],Y=O.shadow;if(Y===void 0){oe("WebGLShadowMap:",O,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ot=Y.getFrameExtents();s.multiply(ot),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,Y.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=et,Y.map===null||st===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===rr){if(O.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Oe(s.x,s.y,{format:es,type:je,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),Y.map.texture.name=O.name+".shadowMap",Y.map.depthTexture=new ni(s.x,s.y,Tn),Y.map.depthTexture.name=O.name+".shadowMapDepth",Y.map.depthTexture.format=Ii,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue}else O.isPointLight?(Y.map=new la(s.x),Y.map.depthTexture=new Br(s.x,ii)):(Y.map=new Oe(s.x,s.y),Y.map.depthTexture=new ni(s.x,s.y,ii)),Y.map.depthTexture.name=O.name+".shadowMap",Y.map.depthTexture.format=Ii,this.type===bs?(Y.map.depthTexture.compareFunction=et?Wc:Vc,Y.map.depthTexture.minFilter=Ae,Y.map.depthTexture.magFilter=Ae):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let pt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();O.isPointLight!==!0&&Y.updateMatrices(O,T);let dt=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:T.layers;for(let at=0;at<pt;at++){let R=Y.getCamera(at);if(O.isPointLight){let E=Y.camera,H=Y.matrix,X=O.distance||E.far;X!==E.far&&(E.far=X,E.updateProjectionMatrix()),aa.setFromMatrixPosition(O.matrixWorld),E.position.copy(aa),Qc.copy(E.position),Qc.add(vx[at]),E.up.copy(xx[at]),E.lookAt(Qc),E.updateMatrixWorld(),H.makeTranslation(-aa.x,-aa.y,-aa.z),ld.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ld,E.coordinateSystem,E.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,at),i.clear();else{at===0&&(i.setRenderTarget(Y.map),i.clear());let E=Y.getViewport(at);a.set(r.x*E.x,r.y*E.y,r.x*E.z,r.y*E.w),Z.viewport(a)}n=Y.getFrustum(at),b(y,T,R,O,dt,this.type)}Y.isPointLightShadow!==!0&&this.type===rr&&x(Y,T),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(k,S,G)};function x(C,y){let T=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new Oe(s.x,s.y,{format:es,type:je}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,T,d,v,null)}function _(C,y,T,k){let S=null,G=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)S=G;else if(S=T.isPointLight===!0?o:l,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let Z=S.uuid,st=y.uuid,N=h[Z];N===void 0&&(N={},h[Z]=N);let V=N[st];V===void 0&&(V=S.clone(),N[st]=V,y.addEventListener("dispose",M)),S=V}if(S.visible=y.visible,S.wireframe=y.wireframe,k===rr?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:c[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Z=i.properties.get(S);Z.light=T}return S}function b(C,y,T,k,S,G){if(C.visible===!1)return;if(C.layers.test(S)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===rr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let N=t.update(C),V=C.material;if(Array.isArray(V)){let O=N.groups;for(let Y=0,ot=O.length;Y<ot;Y++){let et=O[Y],pt=V[et.materialIndex];if(pt&&pt.visible){let dt=_(C,pt,k,G);C.onBeforeShadow(i,C,y,T,N,dt,et),i.renderBufferDirect(T,null,N,dt,C,et),C.onAfterShadow(i,C,y,T,N,dt,et)}}}else if(V.visible){let O=_(C,V,k,G);C.onBeforeShadow(i,C,y,T,N,O,null),i.renderBufferDirect(T,null,N,O,C,null),C.onAfterShadow(i,C,y,T,N,O,null)}}let st=C.children;for(let N=0,V=st.length;N<V;N++)b(st[N],y,T,k,S,G)}function M(C){C.target.removeEventListener("dispose",M);for(let T in h){let k=h[T],S=C.target.uuid;S in k&&(k[S].dispose(),delete k[S])}}}function _x(i,t){function e(){let I=!1,$=new ge,nt=null,Mt=new ge(0,0,0,0);return{setMask:function(Et){nt!==Et&&!I&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){I=Et},setClear:function(Et,Pt,Gt,Vt,Ct){Ct===!0&&(Et*=Vt,Pt*=Vt,Gt*=Vt),$.set(Et,Pt,Gt,Vt),Mt.equals($)===!1&&(i.clearColor(Et,Pt,Gt,Vt),Mt.copy($))},reset:function(){I=!1,nt=null,Mt.set(-1,0,0,0)}}}function n(){let I=!1,$=!1,nt=null,Mt=null,Et=null;return{setReversed:function(Pt){if($!==Pt){let Gt=t.get("EXT_clip_control");Pt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),$=Pt;let Vt=Et;Et=null,this.setClear(Vt)}},getReversed:function(){return $},setTest:function(Pt){Pt?q(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Pt){nt!==Pt&&!I&&(i.depthMask(Pt),nt=Pt)},setFunc:function(Pt){if($&&(Pt=Uu[Pt]),Mt!==Pt){switch(Pt){case qa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Et!==Pt&&(Et=Pt,$&&(Pt=1-Pt),i.clearDepth(Pt))},reset:function(){I=!1,nt=null,Mt=null,Et=null,$=!1}}}function s(){let I=!1,$=null,nt=null,Mt=null,Et=null,Pt=null,Gt=null,Vt=null,Ct=null;return{setTest:function(Nt){I||(Nt?q(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Nt){$!==Nt&&!I&&(i.stencilMask(Nt),$=Nt)},setFunc:function(Nt,qt,Tt){(nt!==Nt||Mt!==qt||Et!==Tt)&&(i.stencilFunc(Nt,qt,Tt),nt=Nt,Mt=qt,Et=Tt)},setOp:function(Nt,qt,Tt){(Pt!==Nt||Gt!==qt||Vt!==Tt)&&(i.stencilOp(Nt,qt,Tt),Pt=Nt,Gt=qt,Vt=Tt)},setLocked:function(Nt){I=Nt},setClear:function(Nt){Ct!==Nt&&(i.clearStencil(Nt),Ct=Nt)},reset:function(){I=!1,$=null,nt=null,Mt=null,Et=null,Pt=null,Gt=null,Vt=null,Ct=null}}}let r=new e,a=new n,l=new s,o={},h=new WeakMap,u={},c={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,M=null,C=null,y=null,T=new se(0,0,0),k=0,S=!1,G=null,Z=null,st=null,N=null,V=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ot=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(et)[1]),Y=ot>=1):et.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Y=ot>=2);let pt=null,dt={},at=i.getParameter(i.SCISSOR_BOX),R=i.getParameter(i.VIEWPORT),E=new ge().fromArray(at),H=new ge().fromArray(R);function X(I,$,nt,Mt){let Et=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(I,Pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<nt;Gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D($+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Pt}let ct={};ct[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),q(i.DEPTH_TEST),a.setFunc(Js),bt(!1),It(Sc),q(i.CULL_FACE),Q(ws);function q(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function lt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function gt(I,$){return f[I]!==$?(i.bindFramebuffer(I,$),f[I]=$,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=$),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=$),!0):!1}function mt(I,$){let nt=p,Mt=!1;if(I){nt=d.get($),nt===void 0&&(nt=[],d.set($,nt));let Et=I.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Gt=Et.length;Pt<Gt;Pt++)nt[Pt]=i.COLOR_ATTACHMENT0+Pt;nt.length=Et.length,Mt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(nt)}function U(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let ht={[Ms]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};ht[lu]=i.MIN,ht[cu]=i.MAX;let j={[jr]:i.ZERO,[Jr]:i.ONE,[hu]:i.SRC_COLOR,[or]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[lr]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,$,nt,Mt,Et,Pt,Gt,Vt,Ct,Nt){if(I===ws){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),I!==Zr){if(I!==m||Nt!==S){if((x!==Ms||M!==Ms)&&(i.blendEquation(i.FUNC_ADD),x=Ms,M=Ms),Nt)switch(I){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",I);break}else switch(I){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",I);break}_=null,b=null,C=null,y=null,T.set(0,0,0),k=0,m=I,S=Nt}return}Et=Et||$,Pt=Pt||nt,Gt=Gt||Mt,($!==x||Et!==M)&&(i.blendEquationSeparate(ht[$],ht[Et]),x=$,M=Et),(nt!==_||Mt!==b||Pt!==C||Gt!==y)&&(i.blendFuncSeparate(j[nt],j[Mt],j[Pt],j[Gt]),_=nt,b=Mt,C=Pt,y=Gt),(Vt.equals(T)===!1||Ct!==k)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ct),T.copy(Vt),k=Ct),m=I,S=!1}function it(I,$){I.side===sn?lt(i.CULL_FACE):q(i.CULL_FACE);let nt=I.side===nn;$&&(nt=!nt),bt(nt),I.blending===ar&&I.transparent===!1?Q(ws):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let Mt=I.stencilWrite;l.setTest(Mt),Mt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(I){G!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),G=I)}function It(I){I!==iu?(q(i.CULL_FACE),I!==Z&&(I===Sc?i.cullFace(i.BACK):I===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),Z=I}function jt(I){I!==st&&(Y&&i.lineWidth(I),st=I)}function Ut(I,$,nt){I?(q(i.POLYGON_OFFSET_FILL),(N!==$||V!==nt)&&(N=$,V=nt,a.getReversed()&&($=-$,nt=-nt),i.polygonOffset($,nt))):lt(i.POLYGON_OFFSET_FILL)}function At(I){I?q(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Dt(I){I===void 0&&(I=i.TEXTURE0+O-1),pt!==I&&(i.activeTexture(I),pt=I)}function kt(I,$,nt){nt===void 0&&(pt===null?nt=i.TEXTURE0+O-1:nt=pt);let Mt=dt[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},dt[nt]=Mt),(Mt.type!==I||Mt.texture!==$)&&(pt!==nt&&(i.activeTexture(nt),pt=nt),i.bindTexture(I,$||ct[I]),Mt.type=I,Mt.texture=$)}function K(){let I=dt[pt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(I){ce("WebGLState:",I)}}function Rt(){try{i.compressedTexImage3D(...arguments)}catch(I){ce("WebGLState:",I)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(I){ce("WebGLState:",I)}}function _t(){try{i.texSubImage3D(...arguments)}catch(I){ce("WebGLState:",I)}}function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ce("WebGLState:",I)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ce("WebGLState:",I)}}function Ft(){try{i.texStorage2D(...arguments)}catch(I){ce("WebGLState:",I)}}function z(){try{i.texStorage3D(...arguments)}catch(I){ce("WebGLState:",I)}}function A(){try{i.texImage2D(...arguments)}catch(I){ce("WebGLState:",I)}}function ut(){try{i.texImage3D(...arguments)}catch(I){ce("WebGLState:",I)}}function vt(I){return c[I]!==void 0?c[I]:i.getParameter(I)}function P(I,$){c[I]!==$&&(i.pixelStorei(I,$),c[I]=$)}function B(I){E.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),E.copy(I))}function J(I){H.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),H.copy(I))}function w(I,$){let nt=h.get($);nt===void 0&&(nt=new WeakMap,h.set($,nt));let Mt=nt.get(I);Mt===void 0&&(Mt=i.getUniformBlockIndex($,I.name),i.uniformBlockBinding($,Mt,Mt),nt.set(I,Mt))}function L(I,$,nt){let Et=h.get($).get(I);o[Et]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Et,nt),o[Et]=nt)}function F(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},pt=null,dt={},f={},o={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,M=null,C=null,y=null,T=new se(0,0,0),k=0,S=!1,G=null,Z=null,st=null,N=null,V=null,E.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:q,disable:lt,bindFramebuffer:gt,drawBuffers:mt,useProgram:U,setBlending:Q,setMaterial:it,setFlipSided:bt,setCullFace:It,setLineWidth:jt,setPolygonOffset:Ut,setScissorTest:At,activeTexture:Dt,bindTexture:kt,unbindTexture:K,compressedTexImage2D:Ht,compressedTexImage3D:Rt,texImage2D:A,texImage3D:ut,pixelStorei:P,getParameter:vt,updateUBOMapping:w,uniformBlockBinding:L,texStorage2D:Ft,texStorage3D:z,texSubImage2D:Bt,texSubImage3D:_t,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Ot,scissor:B,viewport:J,reset:F}}function bx(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ie,u=new WeakMap,c=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(z=>p.delete(z)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(z,A){return g?new OffscreenCanvas(z,A):Lr("canvas")}function x(z,A,ut){let vt=1,P=Ft(z);if((P.width>ut||P.height>ut)&&(vt=ut/Math.max(P.width,P.height)),vt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let B=Math.floor(vt*P.width),J=Math.floor(vt*P.height);f===void 0&&(f=m(B,J));let w=A?m(B,J):f;return w.width=B,w.height=J,w.getContext("2d").drawImage(z,0,0,B,J),oe("WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+B+"x"+J+")."),w}else return"data"in z&&oe("WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),z;return z}function _(z){return z.generateMipmaps}function b(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(z,A,ut,vt,P,B=!1){if(z!==null){if(i[z]!==void 0)return i[z];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let J;vt&&(J=t.get("EXT_texture_norm16"),J||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=A;if(A===i.RED&&(ut===i.FLOAT&&(w=i.R32F),ut===i.HALF_FLOAT&&(w=i.R16F),ut===i.UNSIGNED_BYTE&&(w=i.R8),ut===i.UNSIGNED_SHORT&&J&&(w=J.R16_EXT),ut===i.SHORT&&J&&(w=J.R16_SNORM_EXT)),A===i.RED_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.R8UI),ut===i.UNSIGNED_SHORT&&(w=i.R16UI),ut===i.UNSIGNED_INT&&(w=i.R32UI),ut===i.BYTE&&(w=i.R8I),ut===i.SHORT&&(w=i.R16I),ut===i.INT&&(w=i.R32I)),A===i.RG&&(ut===i.FLOAT&&(w=i.RG32F),ut===i.HALF_FLOAT&&(w=i.RG16F),ut===i.UNSIGNED_BYTE&&(w=i.RG8),ut===i.UNSIGNED_SHORT&&J&&(w=J.RG16_EXT),ut===i.SHORT&&J&&(w=J.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RG8UI),ut===i.UNSIGNED_SHORT&&(w=i.RG16UI),ut===i.UNSIGNED_INT&&(w=i.RG32UI),ut===i.BYTE&&(w=i.RG8I),ut===i.SHORT&&(w=i.RG16I),ut===i.INT&&(w=i.RG32I)),A===i.RGB_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RGB8UI),ut===i.UNSIGNED_SHORT&&(w=i.RGB16UI),ut===i.UNSIGNED_INT&&(w=i.RGB32UI),ut===i.BYTE&&(w=i.RGB8I),ut===i.SHORT&&(w=i.RGB16I),ut===i.INT&&(w=i.RGB32I)),A===i.RGBA_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),ut===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),ut===i.UNSIGNED_INT&&(w=i.RGBA32UI),ut===i.BYTE&&(w=i.RGBA8I),ut===i.SHORT&&(w=i.RGBA16I),ut===i.INT&&(w=i.RGBA32I)),A===i.RGB&&(ut===i.UNSIGNED_SHORT&&J&&(w=J.RGB16_EXT),ut===i.SHORT&&J&&(w=J.RGB16_SNORM_EXT),ut===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),ut===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),A===i.RGBA){let L=B?Ir:_e.getTransfer(P);ut===i.FLOAT&&(w=i.RGBA32F),ut===i.HALF_FLOAT&&(w=i.RGBA16F),ut===i.UNSIGNED_BYTE&&(w=L===Se?i.SRGB8_ALPHA8:i.RGBA8),ut===i.UNSIGNED_SHORT&&J&&(w=J.RGBA16_EXT),ut===i.SHORT&&J&&(w=J.RGBA16_SNORM_EXT),ut===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),ut===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&t.get("EXT_color_buffer_float"),w}function y(z,A){let ut;return z?A===null||A===ii||A===Ts?ut=i.DEPTH24_STENCIL8:A===Tn?ut=i.DEPTH32F_STENCIL8:A===hr&&(ut=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ii||A===Ts?ut=i.DEPTH_COMPONENT24:A===Tn?ut=i.DEPTH_COMPONENT32F:A===hr&&(ut=i.DEPTH_COMPONENT16),ut}function T(z,A){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ue&&z.minFilter!==Ae?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function k(z){let A=new WeakRef(z);n.get(z).__ref=A,p.add(A),v.register(z,A,A)}function S(z){let A=n.get(z).__ref;A!==void 0&&(p.delete(A),v.unregister(A))}function G(z){st(z.target)}function Z(z){N(z.target)}function st(z){z.removeEventListener("dispose",G),S(z),O(z),z.isVideoTexture&&u.delete(z),z.isHTMLTexture&&c.delete(z)}function N(z){z.removeEventListener("dispose",Z),S(z),ot(z)}function V(){for(let z of p){let A=z.deref();A!==void 0&&(A.isRenderTarget===!0?N(A):st(A))}p.clear(),c.clear()}function O(z){let A=n.get(z);if(A.__webglInit===void 0)return;let ut=z.source,vt=d.get(ut);if(vt){let P=vt[A.__cacheKey];P.usedTimes--,P.usedTimes===0&&Y(z),Object.keys(vt).length===0&&d.delete(ut)}n.remove(z)}function Y(z){let A=n.get(z);i.deleteTexture(A.__webglTexture);let ut=z.source,vt=d.get(ut);delete vt[A.__cacheKey],a.memory.textures--}function ot(z){let A=n.get(z);A.__depthDisposeCallback&&A.__depthDisposeCallback();let ut=z.depthTexture;if(ut&&ut.renderTarget===z&&st(ut),z.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(A.__webglFramebuffer[P]))for(let B=0;B<A.__webglFramebuffer[P].length;B++)i.deleteFramebuffer(A.__webglFramebuffer[P][B]);else i.deleteFramebuffer(A.__webglFramebuffer[P]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[P])}else{if(Array.isArray(A.__webglFramebuffer))for(let P=0;P<A.__webglFramebuffer.length;P++)i.deleteFramebuffer(A.__webglFramebuffer[P]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let P=0;P<A.__webglColorRenderbuffer.length;P++)A.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[P]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let vt=z.textures;for(let P=0,B=vt.length;P<B;P++){let J=n.get(vt[P]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(vt[P])}n.remove(z)}let et=0;function pt(){et=0}function dt(){return et}function at(z){et=z}function R(){let z=et;return z>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,z}function E(z){let A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.mipmapsAutoUpdate),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function H(z,A){let ut=n.get(z);if(z.isVideoTexture&&Lt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ut.__version!==z.version){let vt=z.image;if(vt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(ut,z,A);return}}else z.isExternalTexture&&(ut.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture,i.TEXTURE0+A)}function X(z,A){let ut=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ut.__version!==z.version){it(ut,z,A);return}else z.isExternalTexture&&(ut.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,ut.__webglTexture,i.TEXTURE0+A)}function ct(z,A){let ut=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ut.__version!==z.version){it(ut,z,A);return}e.bindTexture(i.TEXTURE_3D,ut.__webglTexture,i.TEXTURE0+A)}function q(z,A){let ut=n.get(z);if(z.version>0&&ut.__version!==z.version){bt(ut,z,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture,i.TEXTURE0+A)}let lt={[Pi]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},gt={[Ue]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},mt={[Au]:i.NEVER,[$c]:i.ALWAYS,[Ru]:i.LESS,[Vc]:i.LEQUAL,[Cu]:i.EQUAL,[Wc]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function U(z,A){if(A.type===Tn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ae||A.magFilter===Eo||A.magFilter===Kr||A.magFilter===rn||A.minFilter===Ae||A.minFilter===Eo||A.minFilter===Kr||A.minFilter===rn)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,lt[A.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,lt[A.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,lt[A.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,gt[A.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ue||A.minFilter!==Kr&&A.minFilter!==rn||A.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let ut=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ht(z,A){let ut=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",G),k(A));let vt=A.source,P=d.get(vt);P===void 0&&(P={},d.set(vt,P));let B=E(A);if(B!==z.__cacheKey){P[B]===void 0&&(P[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ut=!0),P[B].usedTimes++;let J=P[z.__cacheKey];J!==void 0&&(P[z.__cacheKey].usedTimes--,J.usedTimes===0&&Y(A)),z.__cacheKey=B,z.__webglTexture=P[B].texture}return ut}function j(z,A,ut){return Math.floor(Math.floor(z/ut)/A)}function Q(z,A,ut,vt){let B=z.updateRanges;if(B.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,ut,vt,A.data);else{B.sort((I,$)=>I.start-$.start);let J=0;for(let I=1;I<B.length;I++){let $=B[J],nt=B[I],Mt=$.start+$.count,Et=j(nt.start,A.width,4),Pt=j($.start,A.width,4);nt.start<=Mt+1&&Et===Pt&&j(nt.start+nt.count-1,A.width,4)===Et?$.count=Math.max($.count,nt.start+nt.count-$.start):(++J,B[J]=nt)}B.length=J+1;let w=e.getParameter(i.UNPACK_ROW_LENGTH),L=e.getParameter(i.UNPACK_SKIP_PIXELS),F=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let I=0,$=B.length;I<$;I++){let nt=B[I],Mt=Math.floor(nt.start/4),Et=Math.ceil(nt.count/4),Pt=Mt%A.width,Gt=Math.floor(Mt/A.width),Vt=Et,Ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Pt,Gt,Vt,Ct,ut,vt,A.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,w),e.pixelStorei(i.UNPACK_SKIP_PIXELS,L),e.pixelStorei(i.UNPACK_SKIP_ROWS,F)}}function it(z,A,ut){let vt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(vt=i.TEXTURE_3D);let P=ht(z,A),B=A.source;e.bindTexture(vt,z.__webglTexture,i.TEXTURE0+ut);let J=n.get(B);if(B.version!==J.__version||P===!0){if(e.activeTexture(i.TEXTURE0+ut),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Ct=_e.getPrimaries(_e.workingColorSpace),Nt=A.colorSpace===Bn?null:_e.getPrimaries(A.colorSpace),qt=A.colorSpace===Bn||Ct===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let L=x(A.image,!1,s.maxTextureSize);L=Ot(A,L);let F=r.convert(A.format,A.colorSpace),I=r.convert(A.type),$=C(A.internalFormat,F,I,A.normalized,A.colorSpace,A.isVideoTexture);U(vt,A);let nt,Mt=A.mipmaps,Et=A.isVideoTexture!==!0,Pt=J.__version===void 0||P===!0,Gt=B.dataReady,Vt=T(A,L);if(A.isDepthTexture)$=y(A.format===Di,A.type),Pt&&(Et?e.texStorage2D(i.TEXTURE_2D,1,$,L.width,L.height):e.texImage2D(i.TEXTURE_2D,0,$,L.width,L.height,0,F,I,null));else if(A.isDataTexture)if(Mt.length>0){Et&&Pt&&e.texStorage2D(i.TEXTURE_2D,Vt,$,Mt[0].width,Mt[0].height);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)nt=Mt[Ct],Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,nt.width,nt.height,F,I,nt.data):e.texImage2D(i.TEXTURE_2D,Ct,$,nt.width,nt.height,0,F,I,nt.data);A.generateMipmaps=!1}else Et?(Pt&&e.texStorage2D(i.TEXTURE_2D,Vt,$,L.width,L.height),Gt&&Q(A,L,F,I)):e.texImage2D(i.TEXTURE_2D,0,$,L.width,L.height,0,F,I,L.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Et&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,$,Mt[0].width,Mt[0].height,L.depth);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)if(nt=Mt[Ct],A.format!==Ye)if(F!==null)if(Et){if(Gt)if(A.layerUpdates.size>0){let qt=Jc(nt.width,nt.height,A.format,A.type);for(let Tt of A.layerUpdates){let ae=nt.data.subarray(Tt*qt/nt.data.BYTES_PER_ELEMENT,(Tt+1)*qt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,Tt,nt.width,nt.height,1,F,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,nt.width,nt.height,L.depth,F,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ct,$,nt.width,nt.height,L.depth,0,nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,nt.width,nt.height,L.depth,F,I,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Ct,$,nt.width,nt.height,L.depth,0,F,I,nt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Et&&Pt&&e.texStorage2D(i.TEXTURE_2D,Vt,$,Mt[0].width,Mt[0].height);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)nt=Mt[Ct],A.format!==Ye?F!==null?Et?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Ct,0,0,nt.width,nt.height,F,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Ct,$,nt.width,nt.height,0,nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,nt.width,nt.height,F,I,nt.data):e.texImage2D(i.TEXTURE_2D,Ct,$,nt.width,nt.height,0,F,I,nt.data)}else if(A.isDataArrayTexture)if(Et){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,$,L.width,L.height,L.depth),Gt)if(A.layerUpdates.size>0){let Ct=Jc(L.width,L.height,A.format,A.type);for(let Nt of A.layerUpdates){let qt=L.data.subarray(Nt*Ct/L.data.BYTES_PER_ELEMENT,(Nt+1)*Ct/L.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,L.width,L.height,1,F,I,qt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,F,I,L.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,L.width,L.height,L.depth,0,F,I,L.data);else if(A.isData3DTexture)Et?(Pt&&e.texStorage3D(i.TEXTURE_3D,Vt,$,L.width,L.height,L.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,F,I,L.data)):e.texImage3D(i.TEXTURE_3D,0,$,L.width,L.height,L.depth,0,F,I,L.data);else if(A.isFramebufferTexture){if(Pt)if(Et)e.texStorage2D(i.TEXTURE_2D,Vt,$,L.width,L.height);else{let Ct=L.width,Nt=L.height;for(let qt=0;qt<Vt;qt++)e.texImage2D(i.TEXTURE_2D,qt,$,Ct,Nt,0,F,I,null),Ct>>=1,Nt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let Ct=i.canvas;if(Ct.hasAttribute("layoutsubtree")||Ct.setAttribute("layoutsubtree","true"),L.parentNode!==Ct){Ct.appendChild(L),c.add(A),Ct.onpaint=Nt=>{let qt=Nt.changedElements;for(let Tt of c)qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,L);else{let qt=i.RGBA,Tt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,Tt,ae,L)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Et&&Pt){let Ct=Ft(Mt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,$,Ct.width,Ct.height)}for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++)nt=Mt[Ct],Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,F,I,nt):e.texImage2D(i.TEXTURE_2D,Ct,$,F,I,nt);A.generateMipmaps=!1}else if(Et){if(Pt){let Ct=Ft(L);e.texStorage2D(i.TEXTURE_2D,Vt,$,Ct.width,Ct.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F,I,L)}else e.texImage2D(i.TEXTURE_2D,0,$,F,I,L);_(A)&&A.mipmapsAutoUpdate===!0&&b(vt),J.__version=B.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function bt(z,A,ut){if(A.image.length!==6)return;let vt=ht(z,A),P=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ut);let B=n.get(P);if(P.version!==B.__version||vt===!0){e.activeTexture(i.TEXTURE0+ut);let J=_e.getPrimaries(_e.workingColorSpace),w=A.colorSpace===Bn?null:_e.getPrimaries(A.colorSpace),L=A.colorSpace===Bn||J===w?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);let F=A.isCompressedTexture||A.image[0].isCompressedTexture,I=A.image[0]&&A.image[0].isDataTexture,$=[];for(let Tt=0;Tt<6;Tt++)!F&&!I?$[Tt]=x(A.image[Tt],!0,s.maxCubemapSize):$[Tt]=I?A.image[Tt].image:A.image[Tt],$[Tt]=Ot(A,$[Tt]);let nt=$[0],Mt=r.convert(A.format,A.colorSpace),Et=r.convert(A.type),Pt=C(A.internalFormat,Mt,Et,A.normalized,A.colorSpace),Gt=A.isVideoTexture!==!0,Vt=B.__version===void 0||vt===!0,Ct=P.dataReady,Nt=T(A,nt);U(i.TEXTURE_CUBE_MAP,A);let qt;if(A.isDepthTexture){if(Pt=y(A.format===Di,A.type),Vt)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pt,nt.width,nt.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,nt.width,nt.height,0,Mt,Et,null)}else if(F){Gt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Pt,nt.width,nt.height);for(let Tt=0;Tt<6;Tt++){qt=$[Tt].mipmaps;for(let ae=0;ae<qt.length;ae++){let le=qt[ae];A.format!==Ye?Mt!==null?Gt?Ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,le.width,le.height,Mt,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,Pt,le.width,le.height,0,le.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,le.width,le.height,Mt,Et,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,Pt,le.width,le.height,0,Mt,Et,le.data)}}}else{if(qt=A.mipmaps,Gt&&Vt){qt.length>0&&Nt++;let Tt=Ft($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Pt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(I){Gt?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,$[Tt].width,$[Tt].height,Mt,Et,$[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,$[Tt].width,$[Tt].height,0,Mt,Et,$[Tt].data);for(let ae=0;ae<qt.length;ae++){let De=qt[ae].image[Tt].image;Gt?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,De.width,De.height,Mt,Et,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,Pt,De.width,De.height,0,Mt,Et,De.data)}}else{Gt?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Mt,Et,$[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,Mt,Et,$[Tt]);for(let ae=0;ae<qt.length;ae++){let le=qt[ae];Gt?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,Mt,Et,le.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,Pt,Mt,Et,le.image[Tt])}}}_(A)&&A.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),B.__version=P.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function It(z,A,ut,vt,P,B){let J=r.convert(ut.format,ut.colorSpace),w=r.convert(ut.type),L=C(ut.internalFormat,J,w,ut.normalized,ut.colorSpace),F=n.get(A),I=n.get(ut);if(I.__renderTarget=A,!F.__hasExternalTextures){let $=Math.max(1,A.width>>B),nt=Math.max(1,A.height>>B);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?e.texImage3D(P,B,L,$,nt,A.depth,0,J,w,null):e.texImage2D(P,B,L,$,nt,0,J,w,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),_t(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,P,I.__webglTexture,0,Bt(A)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,P,I.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(z,A,ut){if(i.bindRenderbuffer(i.RENDERBUFFER,z),A.depthBuffer){let vt=A.depthTexture,P=vt&&vt.isDepthTexture?vt.type:null,B=y(A.stencilBuffer,P),J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(A),B,A.width,A.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(A),B,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,B,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,z)}else{let vt=A.textures;for(let P=0;P<vt.length;P++){let B=vt[P],J=r.convert(B.format,B.colorSpace),w=r.convert(B.type),L=C(B.internalFormat,J,w,B.normalized,B.colorSpace);_t(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(A),L,A.width,A.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(A),L,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,L,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(z,A,ut){let vt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let P=n.get(A.depthTexture);P.__renderTarget=A;let B=vt?A.depthTexture.image[0]:A.depthTexture.image;(!P.__webglTexture||B.width!==A.width||B.height!==A.height)&&(B.width=A.width,B.height=A.height,A.depthTexture.needsUpdate=!0),vt?q(A.depthTexture,0):H(A.depthTexture,0);let J=P.__webglTexture,w=Bt(A),L=vt?i.TEXTURE_CUBE_MAP_POSITIVE_X+ut:i.TEXTURE_2D,F=A.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ii)_t(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,L,J,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,F,L,J,0);else if(A.depthTexture.format===Di)_t(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,L,J,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,F,L,J,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(z){let A=n.get(z),ut=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){let vt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),vt){let P=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,vt.removeEventListener("dispose",P)};vt.addEventListener("dispose",P),A.__depthDisposeCallback=P}A.__boundDepthTexture=vt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(ut)for(let vt=0;vt<6;vt++)Ut(A.__webglFramebuffer[vt],z,vt);else z.texture.mipmaps.length>0?Ut(A.__webglFramebuffer[0],z,0):Ut(A.__webglFramebuffer,z,0);else if(ut){A.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[vt]),A.__webglDepthbuffer[vt]===void 0)A.__webglDepthbuffer[vt]=i.createRenderbuffer(),jt(A.__webglDepthbuffer[vt],z,!1);else{let P=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=A.__webglDepthbuffer[vt];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,B)}}else if(z.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),jt(A.__webglDepthbuffer,z,!1);else{let P=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,B)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(z,A,ut){let vt=n.get(z);A!==void 0&&It(vt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ut!==void 0&&At(z)}function kt(z){let A=z.texture,ut=n.get(z),vt=n.get(A);z.addEventListener("dispose",Z),k(z);let P=z.textures,B=z.isWebGLCubeRenderTarget===!0,J=P.length>1;if(J||(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=A.version,a.memory.textures++),B){ut.__webglFramebuffer=[];for(let w=0;w<6;w++)if(A.mipmaps.length>0){ut.__webglFramebuffer[w]=[];for(let L=0;L<A.mipmaps.length;L++)ut.__webglFramebuffer[w][L]=i.createFramebuffer()}else ut.__webglFramebuffer[w]=i.createFramebuffer()}else{if(A.mipmaps.length>0){ut.__webglFramebuffer=[];for(let w=0;w<A.mipmaps.length;w++)ut.__webglFramebuffer[w]=i.createFramebuffer()}else ut.__webglFramebuffer=i.createFramebuffer();if(J)for(let w=0,L=P.length;w<L;w++){let F=n.get(P[w]);F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&_t(z)===!1){ut.__webglMultisampledFramebuffer=i.createFramebuffer(),ut.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer);for(let w=0;w<P.length;w++){let L=P[w];ut.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ut.__webglColorRenderbuffer[w]);let F=r.convert(L.format,L.colorSpace),I=r.convert(L.type),$=C(L.internalFormat,F,I,L.normalized,L.colorSpace,z.isXRRenderTarget===!0),nt=Bt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,$,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,ut.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ut.__webglDepthRenderbuffer=i.createRenderbuffer(),jt(ut.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),U(i.TEXTURE_CUBE_MAP,A);for(let w=0;w<6;w++)if(A.mipmaps.length>0)for(let L=0;L<A.mipmaps.length;L++)It(ut.__webglFramebuffer[w][L],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,L);else It(ut.__webglFramebuffer[w],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);_(A)?b(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(J){for(let w=0,L=P.length;w<L;w++){let F=P[w],I=n.get(F),$=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&($=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,I.__webglTexture),U($,F),It(ut.__webglFramebuffer,z,F,i.COLOR_ATTACHMENT0+w,$,0),_(F)&&b($)}e.unbindTexture()}else{let w=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(w=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,vt.__webglTexture),U(w,A),A.mipmaps.length>0)for(let L=0;L<A.mipmaps.length;L++)It(ut.__webglFramebuffer[L],z,A,i.COLOR_ATTACHMENT0,w,L);else It(ut.__webglFramebuffer,z,A,i.COLOR_ATTACHMENT0,w,0);_(A)?b(w):A.mipmaps.length>0&&i.texParameteri(w,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}z.depthBuffer&&At(z)}function K(z){let A=z.textures;for(let ut=0,vt=A.length;ut<vt;ut++){let P=A[ut];if(_(P)&&P.mipmapsAutoUpdate===!0){let B=M(z),J=n.get(P).__webglTexture;e.bindTexture(B,J),b(B),e.unbindTexture()}}}let Ht=[];function Rt(z){if(z.samples>0){if(_t(z)===!1){let A=z.textures,ut=z.width,vt=z.height,P=i.COLOR_BUFFER_BIT,B=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(z),w=A.length>1;if(w)for(let F=0;F<A.length;F++)e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let F=0;F<A.length;F++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[F]);let I=n.get(A[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,ut,vt,0,0,ut,vt,P,i.NEAREST),o===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+F),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Ht.push(B),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let F=0;F<A.length;F++){e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,J.__webglColorRenderbuffer[F]);let I=n.get(A[F]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&o){let A=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Bt(z){return Math.min(s.maxSamples,z.samples)}function _t(z){let A=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(z){let A=a.render.frame;u.get(z)!==A&&(u.set(z,A),z.update())}function Ot(z,A){let ut=z.colorSpace,vt=z.format,P=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ut!==xs&&ut!==Bn&&(_e.getTransfer(ut)===Se?(vt!==Ye||P!==an)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",ut)),A}function Ft(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=pt,this.getTextureUnits=dt,this.setTextureUnits=at,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=ct,this.setTextureCube=q,this.rebindTextures=Dt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=It,this.useMultisampledRTT=_t,this.dispose=V}function wx(i,t){function e(n,s=Bn){let r,a=_e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Ye)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===fi)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Fo||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===ia||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Oo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Wo||n===$o||n===qo||n===Xo||n===Yo||n===Zo||n===jo||n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===sa||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,h=null,u=null,c=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new ah,m={},x=e.getContextAttributes(),_=null,b=null,M=[],C=[],y=new ie,T=null,k=null,S=new We;S.viewport=new ge;let G=new We;G.viewport=new ge;let Z=[S,G],st=new Mo,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let H=M[E];return H===void 0&&(H=new nr,M[E]=H),H.getTargetRaySpace()},this.getControllerGrip=function(E){let H=M[E];return H===void 0&&(H=new nr,M[E]=H),H.getGripSpace()},this.getHand=function(E){let H=M[E];return H===void 0&&(H=new nr,M[E]=H),H.getHandSpace()};function O(E){let H=C.indexOf(E.inputSource);if(H===-1)return;let X=M[H];X!==void 0&&(X.update(E.inputSource,E.frame,h||a),X.dispatchEvent({type:E.type,data:E.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ot);for(let E=0;E<M.length;E++){let H=C[E];H!==null&&(C[E]=null,M[E].disconnect(H))}N=null,V=null,g.reset();for(let E in m)delete m[E];if(t.setRenderTarget(_),d=null,f=null,c=null,s=null,b=null,R.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),k!==null){let E=k.camera;E.fov=k.fov,E.zoom=k.zoom,E.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){l=E,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(E){h=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ot),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ct=null,q=null;x.depth&&(q=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=x.stencil?Di:Ii,ct=x.stencil?Ts:ii);let lt={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Oe(f.textureWidth,f.textureHeight,{format:Ye,type:an,depthTexture:new ni(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Ye,type:an,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),R.setContext(s),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(E){for(let H=0;H<E.removed.length;H++){let X=E.removed[H],ct=C.indexOf(X);ct>=0&&(C[ct]=null,M[ct].disconnect(X))}for(let H=0;H<E.added.length;H++){let X=E.added[H],ct=C.indexOf(X);if(ct===-1){for(let lt=0;lt<M.length;lt++)if(lt>=C.length){C.push(X),ct=lt;break}else if(C[lt]===null){C[lt]=X,ct=lt;break}if(ct===-1)break}let q=M[ct];q&&q.connect(X)}}function et(E,H){H===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(H.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let H=E.near,X=E.far;g.texture!==null&&(g.depthNear>0&&(H=g.depthNear),g.depthFar>0&&(X=g.depthFar)),st.near=G.near=S.near=H,st.far=G.far=S.far=X,(N!==st.near||V!==st.far)&&(s.updateRenderState({depthNear:st.near,depthFar:st.far}),N=st.near,V=st.far),st.layers.mask=E.layers.mask|6,S.layers.mask=st.layers.mask&-5,G.layers.mask=st.layers.mask&-3;let ct=E.parent,q=st.cameras;et(st,ct);for(let lt=0;lt<q.length;lt++)et(q[lt],ct);st.projectionMatrix.copy(S.projectionMatrix),st.projectionMatrixInverse.copy(S.projectionMatrixInverse),k===null&&E.isPerspectiveCamera&&(k={camera:E,fov:E.fov,zoom:E.zoom}),pt(E,st,ct)};function pt(E,H,X){X===null?E.matrix.copy(H.matrixWorld):(E.matrix.copy(X.matrixWorld),E.matrix.invert(),E.matrix.multiply(H.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(H.projectionMatrix),E.projectionMatrixInverse.copy(H.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=eo*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(E){o=E,f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(st)},this.getCameraTexture=function(E){return m[E]};let dt=null;function at(E,H){if(u=H.getViewerPose(h||a),p=H,u!==null){let X=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ct=!1;X.length!==st.cameras.length&&(st.cameras.length=0,ct=!0);for(let mt=0;mt<X.length;mt++){let U=X[mt],ht=null;if(d!==null)ht=d.getViewport(U);else{let Q=c.getViewSubImage(f,U);ht=Q.viewport,mt===0&&(t.setRenderTargetTextures(b,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(b))}let j=Z[mt];j===void 0&&(j=new We,j.layers.enable(mt),j.viewport=new ge,Z[mt]=j),j.matrix.fromArray(U.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(U.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ht.x,ht.y,ht.width,ht.height),mt===0&&(st.matrix.copy(j.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),ct===!0&&st.cameras.push(j)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){c=n.getBinding();let mt=c.getDepthInformation(X[0]);mt&&mt.isValid&&mt.texture&&g.init(mt,s.renderState)}if(q&&q.includes("camera-access")&&v){t.state.unbindTexture(),c=n.getBinding();for(let mt=0;mt<X.length;mt++){let U=X[mt].camera;if(U){let ht=m[U];ht||(ht=new zr,m[U]=ht);let j=c.getCameraImage(U);ht.sourceTexture=j}}}}for(let X=0;X<M.length;X++){let ct=C[X],q=M[X];ct!==null&&q!==void 0&&q.update(ct,H,h||a)}dt&&dt(E,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let R=new cd;R.setAnimationLoop(at),this.setAnimationLoop=function(E){dt=E},this.dispose=function(){}}},Tx=new xe,yd=new de;yd.set(-1,0,0,0,1,0,0,0,1);function Ex(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Yc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,_,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,x,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,b=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ax(i,t,e,n){let s={},r={};function a(x,_){let b=_.program;n.uniformBlockBinding(x,b,s[x.id])}function l(x,_){let b=s[x.id];b===void 0&&(p(x),b=o(x),s[x.id]=b,x.addEventListener("dispose",g));let M=_.program;n.updateUBOMapping(x,M);let C=t.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function o(x){let _=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function h(x){let _=s[x.id],b=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,y=b.length;C<y;C++){let T=b[C];if(Array.isArray(T))for(let k=0,S=T.length;k<S;k++)u(T[k],C,k,M);else u(T,C,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,_,b,M){if(f(x,_,b,M)===!0){let C=x.__offset,y=x.value;if(Array.isArray(y)){let T=0;for(let k=0;k<y.length;k++){let S=y[k],G=v(S,!0);c(S,x.__data,T),T+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else c(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,x.__data)}}function c(x,_,b){typeof x=="number"||typeof x=="boolean"?_[b]=x:x.isMatrix3?(_[b]=x.elements[0],_[b+1]=x.elements[1],_[b+2]=x.elements[2],_[b+3]=0,_[b+4]=x.elements[3],_[b+5]=x.elements[4],_[b+6]=x.elements[5],_[b+7]=0,_[b+8]=x.elements[6],_[b+9]=x.elements[7],_[b+10]=x.elements[8],_[b+11]=0):ArrayBuffer.isView(x)?_.set(x.subarray(0,_.length-b),b):x.toArray(_,b)}function f(x,_,b,M){let C=x.value,y=_+"_"+b;if(Array.isArray(C)){M[y]===void 0&&(M[y]=[]);let T=M[y],k=!1;for(let S=0;S<C.length;S++)d(C[S],T,S)===!0&&(k=!0);return k}return d(C,M,y)}function d(x,_,b){if(_[b]===void 0)return typeof x=="number"||typeof x=="boolean"?_[b]=x:ArrayBuffer.isView(x)?_[b]=x.slice():_[b]=x.clone(),!0;{let M=_[b];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return _[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function p(x){let _=x.uniforms,b=0,M=16;for(let y=0,T=_.length;y<T;y++){let k=Array.isArray(_[y])?_[y]:[_[y]];for(let S=0,G=k.length;S<G;S++){let Z=k[S],st=Array.isArray(Z.value)?Z.value:[Z.value],N=Array.isArray(_[y])||Array.isArray(Z.value),V=b;for(let Y=0,ot=st.length;Y<ot;Y++){let et=st[Y],pt=v(et,N),dt=b%M,at=dt%pt.boundary,R=dt+at;b+=at,R!==0&&M-R<pt.storage&&(b+=M-R),Y===0&&(V=b),b+=pt.storage}let O=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new O((b-V)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=V}}let C=b%M;return C>0&&(b+=M-C),x.__size=b,x.__cache={},this}function v(x,_){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),_===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(x){let _=x.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:l,dispose:m}}var Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function Cx(){return pi===null&&(pi=new Sn(Rx,16,16,es,je),pi.name="DFG_LUT",pi.minFilter=Ae,pi.magFilter=Ae,pi.wrapS=_n,pi.wrapT=_n,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var dl=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([Lo,Io,Po]),m=new Set([an,ii,hr,Ts,Ro,Co]),x=new Uint32Array(4),_=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},M=null,C=null,y=[],T=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,G=!1,Z=null,st=null,N=null,V=null;this._outputColorSpace=Ie;let O=0,Y=0,ot=null,et=-1,pt=null,dt=new ge,at=new ge,R=null,E=new se(0),H=0,X=e.width,ct=e.height,q=1,lt=null,gt=null,mt=new ge(0,0,X,ct),U=new ge(0,0,X,ct),ht=!1,j=new ui,Q=new ro,it=!1,bt=!1,It=new xe,jt=new ft,Ut=new ge,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function kt(){return ot===null?q:1}let K=n;function Ht(D,rt){return e.getContext(D,rt)}let Rt,Bt,_t,Lt,Ot,Ft,z,A,ut,vt,P,B,J,w,L,F,I,$,nt,Mt,Et,Pt,Gt;try{let D={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),K===null){let rt="webgl2";if(K=Ht(rt,D),K===null)throw Ht(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(D){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ce("WebGLRenderer: "+D.message),D}function Vt(){Rt=new zg(K),Rt.init(),Et=new wx(K,Rt),Bt=new Cg(K,Rt,t,Et),_t=new _x(K,Rt),Bt.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),st=K.createFramebuffer(),N=K.createFramebuffer(),V=K.createFramebuffer(),Lt=new Vg(K),Ot=new ax,Ft=new bx(K,Rt,_t,Ot,Bt,Et,Lt),z=new Bg(S),A=new $p(K),Pt=new Ag(K,A),ut=new Hg(K,A,Lt,Pt),vt=new $g(K,ut,A,Pt,Lt),$=new Wg(K,Bt,Ft),L=new Pg(Ot),P=new rx(S,z,Rt,Bt,Pt,L),B=new Ex(S,Ot),J=new lx,w=new px(Rt),I=new Eg(S,z,_t,vt,p,o),F=new yx(S,vt,Bt),Gt=new Ax(K,Lt,Bt,_t),nt=new Rg(K,Rt,Lt),Mt=new Gg(K,Rt,Lt),Lt.programs=P.programs,S.capabilities=Bt,S.extensions=Rt,S.properties=Ot,S.renderLists=J,S.shadowMap=F,S.state=_t,S.info=Lt}v!==an&&(k=new Xg(v,e.width,e.height,l,s,r));let Ct=new oh(S,K);this.xr=Ct,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let D=Rt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Rt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(X,ct,!1))},this.getSize=function(D){return D.set(X,ct)},this.setSize=function(D,rt,St=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}X=D,ct=rt,e.width=Math.floor(D*q),e.height=Math.floor(rt*q),St===!0&&(e.style.width=D+"px",e.style.height=rt+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,D,rt)},this.getDrawingBufferSize=function(D){return D.set(X*q,ct*q).floor()},this.setDrawingBufferSize=function(D,rt,St){X=D,ct=rt,q=St,e.width=Math.floor(D*St),e.height=Math.floor(rt*St),this.setViewport(0,0,D,rt)},this.setEffects=function(D){if(v===an){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let rt=0;rt<D.length;rt++)if(D[rt].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(dt)},this.getViewport=function(D){return D.copy(mt)},this.setViewport=function(D,rt,St,xt){D.isVector4?mt.set(D.x,D.y,D.z,D.w):mt.set(D,rt,St,xt),_t.viewport(dt.copy(mt).multiplyScalar(kt()).round())},this.getScissor=function(D){return D.copy(U)},this.setScissor=function(D,rt,St,xt){D.isVector4?U.set(D.x,D.y,D.z,D.w):U.set(D,rt,St,xt),_t.scissor(at.copy(U).multiplyScalar(kt()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(D){_t.setScissorTest(ht=D)},this.setOpaqueSort=function(D){lt=D},this.setTransparentSort=function(D){gt=D},this.getClearColor=function(D){return D.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(D=!0,rt=!0,St=!0){let xt=0;if(D){let wt=!1;if(ot!==null){let Wt=ot.texture.format;wt=g.has(Wt)}if(wt){let Wt=ot.texture.type,Jt=m.has(Wt),zt=I.getClearColor(),Yt=I.getClearAlpha(),te=zt.r,he=zt.g,ve=zt.b;Jt?(x[0]=te,x[1]=he,x[2]=ve,x[3]=Yt,K.clearBufferuiv(K.COLOR,0,x)):(_[0]=te,_[1]=he,_[2]=ve,_[3]=Yt,K.clearBufferiv(K.COLOR,0,_))}else xt|=K.COLOR_BUFFER_BIT}rt&&(xt|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),St&&(xt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),xt!==0&&K.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),Z=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),I.dispose(),J.dispose(),w.dispose(),Ft.dispose(),Ot.dispose(),z.dispose(),vt.dispose(),ut.dispose(),Pt.dispose(),Gt.dispose(),P.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ke),Ct.removeEventListener("sessionend",hs),Ee.stop()};function Nt(D){D.preventDefault(),qc("WebGLRenderer: Context Lost."),G=!0}function qt(){qc("WebGLRenderer: Context Restored."),G=!1;let D=Lt.autoReset,rt=F.enabled,St=F.autoUpdate,xt=F.needsUpdate,wt=F.type;Vt(),Lt.autoReset=D,F.enabled=rt,F.autoUpdate=St,F.needsUpdate=xt,F.type=wt}function Tt(D){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ae(D){let rt=D.target;rt.removeEventListener("dispose",ae),le(rt)}function le(D){De(D),Ot.remove(D)}function De(D){let rt=Ot.get(D).programs;rt!==void 0&&(rt.forEach(function(St){P.releaseProgram(St)}),D.isShaderMaterial&&P.releaseShaderCache(D))}this.renderBufferDirect=function(D,rt,St,xt,wt,Wt){rt===null&&(rt=At);let Jt=wt.isMesh&&wt.matrixWorld.determinantAffine()<0,zt=Xl(D,rt,St,xt,wt);_t.setMaterial(xt,Jt);let Yt=St.index,te=1;if(xt.wireframe===!0){if(Yt=ut.getWireframeAttribute(St),Yt===void 0)return;te=2}let he=St.drawRange,ve=St.attributes.position,Kt=he.start*te,ye=(he.start+he.count)*te;Wt!==null&&(Kt=Math.max(Kt,Wt.start*te),ye=Math.min(ye,(Wt.start+Wt.count)*te)),Yt!==null?(Kt=Math.max(Kt,0),ye=Math.min(ye,Yt.count)):ve!=null&&(Kt=Math.max(Kt,0),ye=Math.min(ye,ve.count));let Ge=ye-Kt;if(Ge<0||Ge===1/0)return;Pt.setup(wt,xt,zt,St,Yt);let Pe,Ce=nt;if(Yt!==null&&(Pe=A.get(Yt),Ce=Mt,Ce.setIndex(Pe)),wt.isMesh)xt.wireframe===!0?(_t.setLineWidth(xt.wireframeLinewidth*kt()),Ce.setMode(K.LINES)):Ce.setMode(K.TRIANGLES);else if(wt.isLine){let dn=xt.linewidth;dn===void 0&&(dn=1),_t.setLineWidth(dn*kt()),wt.isLineSegments?Ce.setMode(K.LINES):wt.isLineLoop?Ce.setMode(K.LINE_LOOP):Ce.setMode(K.LINE_STRIP)}else wt.isPoints?Ce.setMode(K.POINTS):wt.isSprite&&Ce.setMode(K.TRIANGLES);if(wt.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(wt._multiDrawStarts,wt._multiDrawCounts,wt._multiDrawCount);else{let dn=wt._multiDrawStarts,ee=wt._multiDrawCounts,yn=wt._multiDrawCount,Me=Yt?A.get(Yt).bytesPerElement:1,ds=Ot.get(xt).currentProgram.getUniforms();for(let fn=0;fn<yn;fn++)ds.setValue(K,"_gl_DrawID",fn),Ce.render(dn[fn]/Me,ee[fn])}else if(wt.isInstancedMesh)Ce.renderInstances(Kt,Ge,wt.count);else if(St.isInstancedBufferGeometry){let dn=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,ee=Math.min(St.instanceCount,dn);Ce.renderInstances(Kt,Ge,ee)}else Ce.render(Kt,Ge)};function Cn(D,rt,St,xt){Z!==null&&D.isNodeMaterial&&Z.setObject(xt,D),it===!0&&L.setState(D,St,!1),D.transparent===!0&&D.side===sn&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,Ln(D,rt,xt),D.side=ts,D.needsUpdate=!0,Ln(D,rt,xt),D.side=sn):Ln(D,rt,xt)}this.compile=function(D,rt,St=null){St===null&&(St=D),Z!==null&&Z.renderStart(D,rt,St),C=w.get(St),C.init(rt),T.push(C),St.traverseVisible(function(wt){wt.isLight&&wt.layers.test(rt.layers)&&(C.pushLight(wt),wt.castShadow&&C.pushShadow(wt))}),D!==St&&D.traverseVisible(function(wt){wt.isLight&&wt.layers.test(rt.layers)&&(C.pushLight(wt),wt.castShadow&&C.pushShadow(wt))}),C.setupLights(),Z!==null&&Z.updateLights(C.state.lightsArray),bt=this.localClippingEnabled,it=L.init(this.clippingPlanes,bt),it===!0&&L.setGlobalState(this.clippingPlanes,rt),Z!==null&&F.render(C.state.shadowsArray,St,rt);let xt=new Set;return D.traverse(function(wt){if(!(wt.isMesh||wt.isPoints||wt.isLine||wt.isSprite))return;let Wt=wt.material;if(Wt)if(Array.isArray(Wt))for(let Jt=0;Jt<Wt.length;Jt++){let zt=Wt[Jt];Cn(zt,St,rt,wt),xt.add(zt)}else Cn(Wt,St,rt,wt),xt.add(Wt)}),C=T.pop(),Z!==null&&Z.renderEnd(),xt},this.compileAsync=function(D,rt,St=null){let xt=this.compile(D,rt,St);return new Promise(wt=>{function Wt(){if(xt.forEach(function(Jt){let Yt=Ot.get(Jt).currentProgram;(Yt===void 0||Yt.isReady())&&xt.delete(Jt)}),xt.size===0){wt(D);return}setTimeout(Wt,10)}Rt.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Pn=null;function Mn(D){Pn&&Pn(D)}function ke(){Ee.stop()}function hs(){Ee.start()}let Ee=new cd;Ee.setAnimationLoop(Mn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(D){Pn=D,Ct.setAnimationLoop(D),D===null?Ee.stop():Ee.start()},Ct.addEventListener("sessionstart",ke),Ct.addEventListener("sessionend",hs),this.render=function(D,rt){if(rt!==void 0&&rt.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(D,rt);let St=Ct.enabled===!0&&Ct.isPresenting===!0,xt=k!==null&&(ot===null||St)&&k.begin(S,ot);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(rt),rt=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,rt,ot),C=w.get(D,T.length),C.init(rt),C.state.textureUnits=Ft.getTextureUnits(),T.push(C),It.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),rt.isArrayCamera?Q.setFromArrayCamera(rt):j.setFromProjectionMatrix(It,Vn,rt.reversedDepth),bt=this.localClippingEnabled,it=L.init(this.clippingPlanes,bt),M=J.get(D,y.length),M.init(),y.push(M),this.info.render.frame++,Ct.enabled===!0&&Ct.isPresenting===!0){let Jt=S.xr.getDepthSensingMesh();Jt!==null&&He(Jt,rt,-1/0,S.sortObjects)}He(D,rt,0,S.sortObjects),M.finish(),Z!==null&&Z.updateLights(C.state.lightsArray),S.sortObjects===!0&&M.sort(lt,gt),Dt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Dt&&I.addToRenderList(M,D),this.info.autoReset===!0&&this.info.reset(),it===!0&&L.beginShadows();let wt=C.state.shadowsArray;if(F.render(wt,D,rt),it===!0&&L.endShadows(),(xt&&k.hasRenderPass())===!1){let Jt=M.opaque,zt=M.transmissive;if(C.setupLights(),rt.isArrayCamera){let Yt=rt.cameras;if(zt.length>0)for(let te=0,he=Yt.length;te<he;te++){let ve=Yt[te];In(Jt,zt,D,ve)}Dt&&I.render(D);for(let te=0,he=Yt.length;te<he;te++){let ve=Yt[te];jn(M,D,ve,ve.viewport)}}else zt.length>0&&In(Jt,zt,D,rt),Dt&&I.render(D),jn(M,D,rt)}ot!==null&&Y===0&&(Ft.updateMultisampleRenderTarget(ot),Ft.updateRenderTargetMipmap(ot)),xt&&k.end(S),D.isScene===!0&&D.onAfterRender(S,D,rt),Pt.resetDefaultState(),et=-1,pt=null,T.pop(),T.length>0?(C=T[T.length-1],Ft.setTextureUnits(C.state.textureUnits),it===!0&&L.setGlobalState(S.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,Z!==null&&Z.renderEnd()};function He(D,rt,St,xt){if(D.visible===!1)return;if(D.layers.test(rt.layers)){if(D.isGroup)St=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(rt);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){let Jt=rt.isArrayCamera?Q:j;if(!D.frustumCulled||D.intersectsFrustum(Jt)){xt&&Ut.setFromMatrixPosition(D.matrixWorld).applyMatrix4(It);let zt=vt.update(D),Yt=D.material;Yt.visible&&M.push(D,zt,Yt,St,Ut.z,null,rt)}}else if(D.isMesh||D.isLine||D.isPoints){let Jt=rt.isArrayCamera?Q:j;if(!D.frustumCulled||D.intersectsFrustum(Jt)){let zt=vt.update(D),Yt=D.material;if(xt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ut.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ut.copy(zt.boundingSphere.center)),Ut.applyMatrix4(D.matrixWorld).applyMatrix4(It)),Array.isArray(Yt)){let te=zt.groups;for(let he=0,ve=te.length;he<ve;he++){let Kt=te[he],ye=Yt[Kt.materialIndex];ye&&ye.visible&&M.push(D,zt,ye,St,Ut.z,Kt,rt)}}else Yt.visible&&M.push(D,zt,Yt,St,Ut.z,null,rt)}}}let Wt=D.children;for(let Jt=0,zt=Wt.length;Jt<zt;Jt++)He(Wt[Jt],rt,St,xt)}function jn(D,rt,St,xt){let{opaque:wt,transmissive:Wt,transparent:Jt}=D;C.setupLightsView(St),it===!0&&L.setGlobalState(S.clippingPlanes,St),xt&&_t.viewport(dt.copy(xt)),wt.length>0&&ki(wt,rt,St),Wt.length>0&&ki(Wt,rt,St),Jt.length>0&&ki(Jt,rt,St),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function In(D,rt,St,xt){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[xt.id]===void 0){let Kt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[xt.id]=new Oe(1,1,{generateMipmaps:!0,type:Kt?je:an,minFilter:rn,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Wt=C.state.transmissionRenderTarget[xt.id],Jt=xt.viewport||dt;Wt.setSize(Jt.z*S.transmissionResolutionScale,Jt.w*S.transmissionResolutionScale);let zt=S.getRenderTarget(),Yt=S.getActiveCubeFace(),te=S.getActiveMipmapLevel();S.setRenderTarget(Wt),S.getClearColor(E),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Dt&&I.render(St);let he=S.toneMapping;S.toneMapping=di;let ve=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),C.setupLightsView(xt),it===!0&&L.setGlobalState(S.clippingPlanes,xt),ki(D,St,xt),Ft.updateMultisampleRenderTarget(Wt),Ft.updateRenderTargetMipmap(Wt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ye=0,Ge=rt.length;ye<Ge;ye++){let Pe=rt[ye],{object:Ce,geometry:dn,material:ee,group:yn}=Pe;if(ee.side===sn&&Ce.layers.test(xt.layers)){let Me=ee.side;ee.side=nn,ee.needsUpdate=!0,_r(Ce,St,xt,dn,ee,yn),ee.side=Me,ee.needsUpdate=!0,Kt=!0}}Kt===!0&&(Ft.updateMultisampleRenderTarget(Wt),Ft.updateRenderTargetMipmap(Wt))}S.setRenderTarget(zt,Yt,te),S.setClearColor(E,H),ve!==void 0&&(xt.viewport=ve),S.toneMapping=he}function ki(D,rt,St){let xt=rt.isScene===!0?rt.overrideMaterial:null;for(let wt=0,Wt=D.length;wt<Wt;wt++){let Jt=D[wt],{object:zt,geometry:Yt,group:te}=Jt,he=Jt.material;he.allowOverride===!0&&xt!==null&&(he=xt),zt.layers.test(St.layers)&&_r(zt,rt,St,Yt,he,te)}}function _r(D,rt,St,xt,wt,Wt){Z!==null&&wt.isNodeMaterial&&Z.setObject(D,wt),D.onBeforeRender(S,rt,St,xt,wt,Wt),D.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),wt.onBeforeRender(S,rt,St,xt,D,Wt),wt.transparent===!0&&wt.side===sn&&wt.forceSinglePass===!1?(wt.side=nn,wt.needsUpdate=!0,S.renderBufferDirect(St,rt,xt,wt,D,Wt),wt.side=ts,wt.needsUpdate=!0,S.renderBufferDirect(St,rt,xt,wt,D,Wt),wt.side=sn):S.renderBufferDirect(St,rt,xt,wt,D,Wt),D.onAfterRender(S,rt,St,xt,wt,Wt)}function br(D){let rt=0;for(let St of D)St.texture!==null&&rt++;return rt}function Ln(D,rt,St){rt.isScene!==!0&&(rt=At);let xt=Ot.get(D),wt=C.state.lights,Wt=C.state.shadowsArray,Jt=wt.state.version,zt=P.getParameters(D,wt.state,Wt,rt,St,C.state.lightProbeGridArray),Yt=P.getProgramCacheKey(zt),te=xt.programs;xt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?rt.environment:null,xt.fog=rt.fog;let he=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;xt.envMap=z.get(D.envMap||xt.environment,he),xt.envMapRotation=xt.environment!==null&&D.envMap===null?rt.environmentRotation:D.envMapRotation,te===void 0&&(D.addEventListener("dispose",ae),te=new Map,xt.programs=te,xt.programVariants=new Map);let ve=te.get(Yt);if(ve!==void 0){if(xt.currentProgram===ve&&xt.lightsStateVersion===Jt)return Bi(D,zt),ve}else zt.uniforms=P.getUniforms(D),Z!==null&&D.isNodeMaterial&&Z.build(D,St,zt),D.onBeforeCompile(zt,S),ve=P.acquireProgram(zt,Yt),te.set(Yt,ve),xt.uniforms=zt.uniforms;let Kt=xt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Kt.clippingPlanes=L.uniform),Bi(D,zt),xt.needsLights=Xt(D),xt.lightsStateVersion=Jt,xt.needsLights&&(Kt.ambientLightColor.value=wt.state.ambient,Kt.lightProbe.value=wt.state.probe,Kt.sunLights.value=wt.state.sun,Kt.sunLightShadows.value=wt.state.sunShadow,Kt.directionalLights.value=wt.state.directional,Kt.directionalLightShadows.value=wt.state.directionalShadow,Kt.spotLights.value=wt.state.spot,Kt.spotLightShadows.value=wt.state.spotShadow,Kt.rectAreaLights.value=wt.state.rectArea,Kt.ltc_1.value=wt.state.rectAreaLTC1,Kt.ltc_2.value=wt.state.rectAreaLTC2,Kt.pointLights.value=wt.state.point,Kt.pointLightShadows.value=wt.state.pointShadow,Kt.hemisphereLights.value=wt.state.hemi,Kt.sunShadowMatrix.value=wt.state.sunShadowMatrix,Kt.sunShadowCascade.value=wt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=wt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=wt.state.spotLightMatrix,Kt.spotLightMap.value=wt.state.spotLightMap,Kt.pointShadowMatrix.value=wt.state.pointShadowMatrix),xt.numLightProbeGrids=br(C.state.lightProbeGridArray),xt.currentProgram=ve,xt.uniformsList=null,ve}function Oi(D,rt,St,xt,wt){let Wt=Ot.get(D),Jt=Wt.currentProgram.id+","+xt+","+wt,zt=Wt.programVariants.get(Jt);return zt===void 0?(zt=Ln(D,rt,St),Wt.programVariants.set(Jt,zt)):(Wt.currentProgram=zt,Wt.uniformsList=null,Wt.outputColorSpace=xt,Wt.toneMapping=wt),zt}function us(D){if(D.uniformsList===null){let rt=D.currentProgram.getUniforms();D.uniformsList=ur.seqWithValue(rt.seq,D.uniforms)}return D.uniformsList}function Bi(D,rt){let St=Ot.get(D);St.outputColorSpace=rt.outputColorSpace,St.batching=rt.batching,St.batchingColor=rt.batchingColor,St.instancing=rt.instancing,St.instancingColor=rt.instancingColor,St.instancingMorph=rt.instancingMorph,St.skinning=rt.skinning,St.morphTargets=rt.morphTargets,St.morphNormals=rt.morphNormals,St.morphColors=rt.morphColors,St.morphTargetsCount=rt.morphTargetsCount,St.numClippingPlanes=rt.numClippingPlanes,St.numIntersection=rt.numClipIntersection,St.vertexAlphas=rt.vertexAlphas,St.vertexTangents=rt.vertexTangents,St.toneMapping=rt.toneMapping}function Xl(D,rt,St,xt,wt){rt.isScene!==!0&&(rt=At),Ft.resetTextureUnits();let Wt=rt.fog,Jt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?rt.environment:null,zt=ot===null?S.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:_e.workingColorSpace,Yt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap,te=z.get(xt.envMap||Jt,Yt),he=xt.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ve=!!St.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Kt=!!St.morphAttributes.position,ye=!!St.morphAttributes.normal,Ge=!!St.morphAttributes.color,Pe=di;xt.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Pe=S.toneMapping);let Ce=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,ee=Ot.get(xt),yn=C.state.lights;if(it===!0&&(bt===!0||D!==pt)){let Fe=D===pt&&xt.id===et;L.setState(xt,D,Fe)}let Me=!1,ds=!1;xt.version===ee.__version?ee.needsLights&&ee.lightsStateVersion!==yn.state.version||wt.isBatchedMesh&&ee.batching===!1||!wt.isBatchedMesh&&ee.batching===!0||wt.isBatchedMesh&&ee.batchingColor===!0&&wt._colorsTexture===null||wt.isBatchedMesh&&ee.batchingColor===!1&&wt._colorsTexture!==null||wt.isInstancedMesh&&ee.instancing===!1||!wt.isInstancedMesh&&ee.instancing===!0||wt.isSkinnedMesh&&ee.skinning===!1||!wt.isSkinnedMesh&&ee.skinning===!0||wt.isInstancedMesh&&ee.instancingColor===!0&&wt.instanceColor===null||wt.isInstancedMesh&&ee.instancingColor===!1&&wt.instanceColor!==null||wt.isInstancedMesh&&ee.instancingMorph===!0&&wt.morphTexture===null||wt.isInstancedMesh&&ee.instancingMorph===!1&&wt.morphTexture!==null||ee.envMap!==te||xt.fog===!0&&ee.fog!==Wt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==L.numPlanes||ee.numIntersection!==L.numIntersection)||ee.vertexAlphas!==he||ee.vertexTangents!==ve||ee.morphTargets!==Kt||ee.morphNormals!==ye||ee.morphColors!==Ge||ee.morphTargetsCount!==dn||ee.numLightProbeGrids!==br(C.state.lightProbeGridArray)?Me=!0:(ee.outputColorSpace!==zt||ee.toneMapping!==Pe)&&(ds=!0):(Me=!0,ee.__version=xt.version);let fn=ee.currentProgram;(Me===!0||ds===!0)&&(fn=ds===!0?Oi(xt,rt,wt,zt,Pe):Ln(xt,rt,wt),Z&&xt.isNodeMaterial&&Z.onUpdateProgram(xt,fn,ee));let wa=!1,zi=!1,fs=!1,we=fn.getUniforms(),ln=ee.uniforms;if(_t.useProgram(fn.program)&&(wa=!0,zi=!0,fs=!0),xt.id!==et&&(et=xt.id,zi=!0),wa||pt!==D){_t.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),we.setValue(K,"projectionMatrix",D.projectionMatrix),we.setValue(K,"viewMatrix",D.matrixWorldInverse);let tn=we.map.cameraPosition;tn!==void 0&&tn.setValue(K,jt.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&we.setValue(K,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&we.setValue(K,"isOrthographic",D.isOrthographicCamera===!0),pt!==D&&(pt=D,zi=!0,fs=!0)}if(ee.needsLights&&(yn.state.sunShadowMap.length>0&&we.setValue(K,"sunShadowMap",yn.state.sunShadowMap,Ft),yn.state.directionalShadowMap.length>0&&we.setValue(K,"directionalShadowMap",yn.state.directionalShadowMap,Ft),yn.state.spotShadowMap.length>0&&we.setValue(K,"spotShadowMap",yn.state.spotShadowMap,Ft),yn.state.pointShadowMap.length>0&&we.setValue(K,"pointShadowMap",yn.state.pointShadowMap,Ft)),wt.isSkinnedMesh){we.setOptional(K,wt,"bindMatrix"),we.setOptional(K,wt,"bindMatrixInverse");let Fe=wt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(K,"boneTexture",Fe.boneTexture,Ft))}wt.isBatchedMesh&&(we.setOptional(K,wt,"batchingTexture"),we.setValue(K,"batchingTexture",wt._matricesTexture,Ft),we.setOptional(K,wt,"batchingIdTexture"),we.setValue(K,"batchingIdTexture",wt._indirectTexture,Ft),we.setOptional(K,wt,"batchingColorTexture"),wt._colorsTexture!==null&&we.setValue(K,"batchingColorTexture",wt._colorsTexture,Ft));let Jn=St.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&$.update(wt,St,fn),(zi||ee.receiveShadow!==wt.receiveShadow)&&(ee.receiveShadow=wt.receiveShadow,we.setValue(K,"receiveShadow",wt.receiveShadow)),(xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial)&&xt.envMap===null&&rt.environment!==null&&(ln.envMapIntensity.value=rt.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Cx()),zi){if(we.setValue(K,"toneMappingExposure",S.toneMappingExposure),ee.needsLights&&wr(ln,fs),Wt&&xt.fog===!0&&B.refreshFogUniforms(ln,Wt),B.refreshMaterialUniforms(ln,xt,q,ct,C.state.transmissionRenderTarget[D.id]),ee.needsLights&&ee.numLightProbeGrids>0){let Fe=b,tn=0;for(let wi of C.state.lightProbeGridArray)wi.texture!==null&&(Fe.textures[tn]=wi.texture,Fe.min[tn]=wi.boundingBox.min,Fe.max[tn]=wi.boundingBox.max,Fe.resolution[tn]=wi.resolution,tn++);for(let wi in Fe)Fe[wi].length=tn;ln.probesSH.value=Fe.textures,ln.probesMin.value=Fe.min,ln.probesMax.value=Fe.max,ln.probesResolution.value=Fe.resolution}ur.upload(K,us(ee),ln,Ft)}if(xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(ur.upload(K,us(ee),ln,Ft),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&we.setValue(K,"center",wt.center),we.setValue(K,"modelViewMatrix",wt.modelViewMatrix),we.setValue(K,"normalMatrix",wt.normalMatrix),we.setValue(K,"modelMatrix",wt.matrixWorld),xt.uniformsGroups!==void 0){let Fe=xt.uniformsGroups;for(let tn=0,wi=Fe.length;tn<wi;tn++){let Ch=Fe[tn];Gt.update(Ch,fn),Gt.bind(Ch,fn)}}return fn}function wr(D,rt){D.ambientLightColor.needsUpdate=rt,D.lightProbe.needsUpdate=rt,D.sunLights.needsUpdate=rt,D.sunLightShadows.needsUpdate=rt,D.directionalLights.needsUpdate=rt,D.directionalLightShadows.needsUpdate=rt,D.pointLights.needsUpdate=rt,D.pointLightShadows.needsUpdate=rt,D.spotLights.needsUpdate=rt,D.spotLightShadows.needsUpdate=rt,D.rectAreaLights.needsUpdate=rt,D.hemisphereLights.needsUpdate=rt}function Xt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(D,rt,St){let xt=Ot.get(D);xt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,xt.__autoAllocateDepthBuffer===!1&&(xt.__useRenderToTexture=!1),Ot.get(D.texture).__webglTexture=rt,Ot.get(D.depthTexture).__webglTexture=xt.__autoAllocateDepthBuffer?void 0:St,xt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,rt){let St=Ot.get(D);St.__webglFramebuffer=rt,St.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(D,rt=0,St=0){ot=D,O=rt,Y=St;let xt=null,wt=!1,Wt=!1;if(D){let zt=Ot.get(D);if(zt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(K.FRAMEBUFFER,zt.__webglFramebuffer),dt.copy(D.viewport),at.copy(D.scissor),R=D.scissorTest,_t.viewport(dt),_t.scissor(at),_t.setScissorTest(R),et=-1;return}else if(zt.__webglFramebuffer===void 0)Ft.setupRenderTarget(D);else if(zt.__hasExternalTextures)Ft.rebindTextures(D,Ot.get(D.texture).__webglTexture,Ot.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let he=D.depthTexture;if(zt.__boundDepthTexture!==he){if(he!==null&&Ot.has(he)&&(D.width!==he.image.width||D.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(D)}}let Yt=D.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Wt=!0);let te=Ot.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(te[rt])?xt=te[rt][St]:xt=te[rt],wt=!0):D.samples>0&&Ft.useMultisampledRTT(D)===!1?xt=Ot.get(D).__webglMultisampledFramebuffer:Array.isArray(te)?xt=te[St]:xt=te,dt.copy(D.viewport),at.copy(D.scissor),R=D.scissorTest}else dt.copy(mt).multiplyScalar(q).floor(),at.copy(U).multiplyScalar(q).floor(),R=ht;if(St!==0&&(xt=st),_t.bindFramebuffer(K.FRAMEBUFFER,xt)&&_t.drawBuffers(D,xt),_t.viewport(dt),_t.scissor(at),_t.setScissorTest(R),wt){let zt=Ot.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt.__webglTexture,St)}else if(Wt){let zt=rt;for(let Yt=0;Yt<D.textures.length;Yt++){let te=Ot.get(D.textures[Yt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Yt,te.__webglTexture,St,zt)}}else if(D!==null&&St!==0){let zt=Ot.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,zt.__webglTexture,St)}et=-1};function fe(D){let rt=Ot.get(D);return(rt.__readFormat!==D.format||rt.__readType!==D.type)&&(rt.__readFormat=D.format,rt.__readType=D.type,rt.__formatReadable=Bt.textureFormatReadable(D.format),rt.__typeReadable=Bt.textureTypeReadable(D.type)),rt}this.readRenderTargetPixels=function(D,rt,St,xt,wt,Wt,Jt,zt=0){if(!(D&&D.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Ot.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Jt!==void 0&&(Yt=Yt[Jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt){_t.bindFramebuffer(K.FRAMEBUFFER,Yt);try{let te=D.textures[zt],he=te.format,ve=te.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+zt);let Kt=fe(te);if(Kt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=D.width-xt&&St>=0&&St<=D.height-wt&&K.readPixels(rt,St,xt,wt,Et.convert(he),Et.convert(ve),Wt)}finally{let te=ot!==null?Ot.get(ot).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(D,rt,St,xt,wt,Wt,Jt,zt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Ot.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Jt!==void 0&&(Yt=Yt[Jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt)if(rt>=0&&rt<=D.width-xt&&St>=0&&St<=D.height-wt){_t.bindFramebuffer(K.FRAMEBUFFER,Yt);let te=D.textures[zt],he=te.format,ve=te.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+zt);let Kt=fe(te);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.bufferData(K.PIXEL_PACK_BUFFER,Wt.byteLength,K.STREAM_READ),K.readPixels(rt,St,xt,wt,Et.convert(he),Et.convert(ve),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let Ge=ot!==null?Ot.get(ot).__webglFramebuffer:null;_t.bindFramebuffer(K.FRAMEBUFFER,Ge);let Pe=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Fu(K,Pe,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Wt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ye),K.deleteSync(Pe),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,rt=null,St=0){let xt=Math.pow(2,-St),wt=Math.floor(D.image.width*xt),Wt=Math.floor(D.image.height*xt),Jt=rt!==null?rt.x:0,zt=rt!==null?rt.y:0;Ft.setTexture2D(D,0),K.copyTexSubImage2D(K.TEXTURE_2D,St,0,0,Jt,zt,wt,Wt),_t.unbindTexture()},this.copyTextureToTexture=function(D,rt,St=null,xt=null,wt=0,Wt=0){let Jt,zt,Yt,te,he,ve,Kt,ye,Ge,Pe=D.isCompressedTexture?D.mipmaps[Wt]:D.image;if(St!==null)Jt=St.max.x-St.min.x,zt=St.max.y-St.min.y,Yt=St.isBox3?St.max.z-St.min.z:1,te=St.min.x,he=St.min.y,ve=St.isBox3?St.min.z:0;else{let we=Math.pow(2,-wt);Jt=Math.floor(Pe.width*we),zt=Math.floor(Pe.height*we),D.isDataArrayTexture?Yt=Pe.depth:D.isData3DTexture?Yt=Math.floor(Pe.depth*we):Yt=1,te=0,he=0,ve=0}xt!==null?(Kt=xt.x,ye=xt.y,Ge=xt.z):(Kt=0,ye=0,Ge=0);let Ce=Et.convert(rt.format),dn=Et.convert(rt.type),ee;rt.isData3DTexture?(Ft.setTexture3D(rt,0),ee=K.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(Ft.setTexture2DArray(rt,0),ee=K.TEXTURE_2D_ARRAY):(Ft.setTexture2D(rt,0),ee=K.TEXTURE_2D),_t.activeTexture(K.TEXTURE0),_t.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,rt.flipY),_t.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),_t.pixelStorei(K.UNPACK_ALIGNMENT,rt.unpackAlignment);let yn=_t.getParameter(K.UNPACK_ROW_LENGTH),Me=_t.getParameter(K.UNPACK_IMAGE_HEIGHT),ds=_t.getParameter(K.UNPACK_SKIP_PIXELS),fn=_t.getParameter(K.UNPACK_SKIP_ROWS),wa=_t.getParameter(K.UNPACK_SKIP_IMAGES);_t.pixelStorei(K.UNPACK_ROW_LENGTH,Pe.width),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Pe.height),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,te),_t.pixelStorei(K.UNPACK_SKIP_ROWS,he),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,ve);let zi=D.isDataArrayTexture||D.isData3DTexture,fs=rt.isDataArrayTexture||rt.isData3DTexture;if(D.isDepthTexture){let we=Ot.get(D),ln=Ot.get(rt),Jn=Ot.get(we.__renderTarget),Fe=Ot.get(ln.__renderTarget);_t.bindFramebuffer(K.READ_FRAMEBUFFER,Jn.__webglFramebuffer),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let tn=0;tn<Yt;tn++)zi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(D).__webglTexture,wt,ve+tn),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ot.get(rt).__webglTexture,Wt,Ge+tn)),K.blitFramebuffer(te,he,te+Jt,he+zt,Kt,ye,Kt+Jt,ye+zt,K.DEPTH_BUFFER_BIT,K.NEAREST);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(wt!==0||D.isRenderTargetTexture||Ot.has(D)){let we=Ot.get(D),ln=Ot.get(rt);_t.bindFramebuffer(K.READ_FRAMEBUFFER,N),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,V);for(let Jn=0;Jn<Yt;Jn++)zi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,we.__webglTexture,wt,ve+Jn):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,we.__webglTexture,wt),fs?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ln.__webglTexture,Wt,Ge+Jn):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ln.__webglTexture,Wt),wt!==0?K.blitFramebuffer(te,he,te+Jt,he+zt,Kt,ye,Kt+Jt,ye+zt,K.COLOR_BUFFER_BIT,K.NEAREST):fs?K.copyTexSubImage3D(ee,Wt,Kt,ye,Ge+Jn,te,he,Jt,zt):K.copyTexSubImage2D(ee,Wt,Kt,ye,te,he,Jt,zt);_t.bindFramebuffer(K.READ_FRAMEBUFFER,null),_t.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else fs?D.isDataTexture||D.isData3DTexture?K.texSubImage3D(ee,Wt,Kt,ye,Ge,Jt,zt,Yt,Ce,dn,Pe.data):rt.isCompressedArrayTexture?K.compressedTexSubImage3D(ee,Wt,Kt,ye,Ge,Jt,zt,Yt,Ce,Pe.data):K.texSubImage3D(ee,Wt,Kt,ye,Ge,Jt,zt,Yt,Ce,dn,Pe):D.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Wt,Kt,ye,Jt,zt,Ce,dn,Pe.data):D.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Wt,Kt,ye,Pe.width,Pe.height,Ce,Pe.data):K.texSubImage2D(K.TEXTURE_2D,Wt,Kt,ye,Jt,zt,Ce,dn,Pe);_t.pixelStorei(K.UNPACK_ROW_LENGTH,yn),_t.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Me),_t.pixelStorei(K.UNPACK_SKIP_PIXELS,ds),_t.pixelStorei(K.UNPACK_SKIP_ROWS,fn),_t.pixelStorei(K.UNPACK_SKIP_IMAGES,wa),Wt===0&&rt.generateMipmaps===!0&&rt.mipmapsAutoUpdate===!0&&K.generateMipmap(ee),_t.unbindTexture()},this.initRenderTarget=function(D){Ot.get(D).__webglFramebuffer===void 0&&Ft.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ft.setTextureCube(D,0):D.isData3DTexture?Ft.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ft.setTexture2DArray(D,0):Ft.setTexture2D(D,0),_t.unbindTexture()},this.resetState=function(){O=0,Y=0,ot=null,_t.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ne=63710088e-1,pr=2*Math.PI*ne,yt=Math.PI/180,is=Math.atan(Math.sinh(Math.PI)),$t=(i,t,e)=>i<t?t:i>e?e:i,Xn=(i,t,e)=>i+(t-i)*e,_d=i=>i*i*(3-2*i),wn=i=>i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI)),ss=(i,t)=>(i+Math.PI)/(2*Math.PI)*2**t,rs=(i,t)=>{let e=$t(i,-is,is);return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t},gi=(i,t)=>i/2**t*2*Math.PI-Math.PI,zn=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**t))),xn=(i,t,e=[0,0,0])=>{let n=Math.cos(t);return e[0]=n*Math.cos(i),e[1]=n*Math.sin(i),e[2]=Math.sin(t),e},ml=i=>{let t=Math.hypot(i[0],i[1],i[2]);return[Math.atan2(i[1],i[0]),Math.asin($t(i[2]/t,-1,1))]},si=(i,t)=>{let e=xn(i,t),n=[-Math.sin(i),Math.cos(i),0],s=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];return{east:n,north:s,up:e}},hn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],ha=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],mr=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Yn=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],En=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],gr=(i,t,e,n)=>{let s=Math.sin((n-t)/2),r=Math.sin((e-i)/2);return 2*Math.asin(Math.min(1,Math.sqrt(s*s+Math.cos(t)*Math.cos(n)*r*r)))},bd=(i,t,e)=>{let n=hn(i,t),s=hn(i,i)-e*e,r=n*n-s;if(r<0)return-1;let a=Math.sqrt(r),l=-n-a;return l>0?l:-n+a>0?-n+a:-1},An=(i,t,e=4)=>`${Math.abs(i).toFixed(e)}\xB0${i>=0?"N":"S"} ${Math.abs(t).toFixed(e)}\xB0${t>=0?"E":"W"}`,wd=i=>i>=1e5?`${Math.round(i/1e3).toLocaleString("en")} km`:i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)} km`:`${Math.round(i)} m`;var As=[],Px=(i,t)=>{for(let e of As){let[n,s,r,a]=e.bbox;if(i<=n||i>=r||t<=s||t>=a)continue;let l=$t((i-n)/(r-n)*e.width-.5,0,e.width-1.001),o=$t((a-t)/(a-s)*e.height-.5,0,e.height-1.001),h=l|0,u=o|0,c=l-h,f=o-u,d=u*e.width+h,p=e.data,v=(p[d]*(1-c)+p[d+1]*c)*(1-f)+(p[d+e.width]*(1-c)+p[d+e.width+1]*c)*f,g=Math.min((i-n)/(r-n),(r-i)/(r-n),(t-s)/(a-s),(a-t)/(a-s));return[v,_d($t(g*12,0,1))]}return null},lh=(i,t,e)=>{if(!As.length||i>.5)return i;let n=Px(t,e);return n&&n[0]<-.5?i+(n[0]-i)*n[1]:i},Md=(i,t)=>{if(!As.length)return!1;let e=gi(t.x,t.z)/yt,n=gi(t.x+1,t.z)/yt,s=zn(t.y,t.z)/yt,r=zn(t.y+1,t.z)/yt;if(!As.some(({bbox:[l,o,h,u]})=>n>l&&e<h&&s>o&&r<u))return!1;let a=!1;for(let l=0,o=0;l<256;l++){let h=zn(t.y+(l+.5)/256,t.z)/yt;for(let u=0;u<256;u++,o++){let c=i[o];if(c>.5)continue;let f=lh(c,e+(n-e)*(u+.5)/256,h);f!==c&&(i[o]=f,a=!0)}}return a},Sd=i=>{if(!As.length||i.z>11)return!1;let t=gi(i.x,i.z)/yt,e=gi(i.x+1,i.z)/yt,n=zn(i.y,i.z)/yt,s=zn(i.y+1,i.z)/yt;return As.some(({bbox:[r,a,l,o]})=>e>r&&t<l&&n>a&&s<o)},gl=new Map,Td=(i,t="./")=>(gl.has(i.id)||gl.set(i.id,(async()=>{let e=await fetch(globalThis.__PATCHES__?.[i.file]??t+i.file);if(!e.ok)throw new Error(`patch ${i.id}: HTTP ${e.status}`);let n=await createImageBitmap(await e.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:n.width,height:n.height}):new OffscreenCanvas(n.width,n.height)).getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=r.getImageData(0,0,n.width,n.height).data,l=new Float32Array(n.width*n.height);for(let h=0,u=0;h<l.length;h++,u+=4)l[h]=a[u]*256+a[u+1]+a[u+2]/256-32768;let o={...i,width:n.width,height:n.height,data:l};return n.close?.(),As.push(o),o})().catch(e=>(gl.delete(i.id),console.warn(e.message),null))),gl.get(i.id));var ch=20037508342789244e-9,hh=0,Ix=1,Zn=2,Ed=3,Ad=4,Lx=(i,t,e,n)=>{if(i.url.includes("{bbox}")){let r=2*ch/2**t,a=-ch+e*r,l=ch-n*r;return i.url.replace("{bbox}",`${a},${l-r},${a+r},${l}`).replaceAll("{size}",String(i.size??256))}let s=i.subdomains?i.subdomains[(e+n)%i.subdomains.length]:"";return i.url.replace("{s}",s).replace("{z}",t).replace("{x}",e).replace("{y}",n)},Dx=(i,t)=>{if(t.z<(i.minZoom??0)||i.every>1&&(t.z-(i.minZoom??0))%i.every)return!1;let e=i.bbox;return e?t.east>e[0]&&t.west<e[2]&&t.north>e[1]&&t.south<e[3]:!0},uh,vl,Nx=i=>(uh||(uh=typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256),vl=uh.getContext("2d",{willReadFrequently:!0})),vl.globalCompositeOperation="copy",vl.drawImage(i,0,0,256,256),vl.getImageData(0,0,256,256).data),Rd=10,ze=258,Fx=(i,t)=>{let e=i.parent;for(;e&&e.z>Rd;)e=e.parent;for(;e;e=e.parent)if(e.slots[t]?.state===Zn)return e;return null},Ux=i=>{let t=Xi.fromHalfFloat,e=new Float32Array(65536);for(let s=0,r=0;s<256;s++)for(let a=0;a<256;a++,r++)e[r]=i.base+t(i.heights[(s+1)*ze+a+1]);for(let s=0;s<4;s++){let r=Float32Array.from(e),a=0;for(let l=0;l<256;l++)for(let o=0;o<256;o++){let h=l*256+o;if(e[h]<-.5)continue;let u=0,c=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let p=o+d,v=l+f;if(p<0||v<0||p>255||v>255)continue;let g=e[v*256+p];g<-.5&&(u+=g,c++)}c&&(r[h]=u/c,a++)}if(e=r,!a)break}let n=new Float32Array(ze*ze);for(let s=-1;s<=256;s++){let r=s<0?0:s>255?255:s,a=s<0?1:s>255?254:s;for(let l=-1;l<=256;l++){let o=l<0?0:l>255?255:l,h=l<0?1:l>255?254:l;n[(s+1)*ze+l+1]=o===h&&r===a?e[s*256+l]:2*e[r*256+o]-e[a*256+h]}}return n},kx=(i,t,e)=>{let n=Nx(i),s=256*256,r=new Float32Array(s);for(let v=0,g=0;v<s;v++,g+=4)r[v]=n[g]*256+n[g+1]+n[g+2]/256-32768;let a=0;if(t.z>Rd){let v=Fx(t,e),g=v?.slots[e],m=v?2**(t.z-v.z):1,x=v?(t.x-v.x*m)*256:0,_=v?(t.y-v.y*m)*256:0,b=null;for(let M=0,C=0;M<256;M++)for(let y=0;y<256;y++,C++){let T=r[C];if(T>.001){a++;continue}if(!g){r[C]=T<-11100?0:T;continue}b??=g.seaWide??=Ux(g);let k=(x+y+.5)/m+.5,S=(_+M+.5)/m+.5,G=k|0,Z=S|0,st=k-G,N=S-Z,V=Z*ze+G,O=(b[V]*(1-st)+b[V+1]*st)*(1-N)+(b[V+ze]*(1-st)+b[V+ze+1]*st)*N;r[C]=O<-.5?O:T<-11100?-.5:Math.min(T,-.5)}}else a=1;Md(r,t),Sd(t)&&(a=Math.max(a,1));let l=1/0,o=-1/0,h=0;for(let v=0;v<s;v++){let g=r[v];g<l&&(l=g),g>o&&(o=g),h+=g}let u=Math.round(h/s),c=new Uint16Array(ze*ze),f=Xi.toHalfFloat,d=(v,g)=>r[g*256+v];for(let v=-1;v<=256;v++){let g=v<0?0:v>255?255:v,m=v<0?1:v>255?254:v;for(let x=-1;x<=256;x++){let _=x<0?0:x>255?255:x,b=x<0?1:x>255?254:x,M=_===b&&g===m?d(x,v):2*d(_,g)-d(b,m);c[(v+1)*ze+x+1]=f(M-u)}}let p=new Sn(c,ze,ze,fi,je);return p.internalFormat="R16F",p.magFilter=p.minFilter=Ae,p.wrapS=p.wrapT=_n,p.generateMipmaps=!1,p.needsUpdate=!0,{tex:p,heights:c,base:u,min:l,max:o,allSea:a===0}},Ox=(i,t)=>{let e=new cn(i);return e.colorSpace=Ie,e.flipY=!1,e.premultiplyAlpha=!1,e.wrapS=e.wrapT=_n,e.minFilter=rn,e.magFilter=Ae,e.anisotropy=t,e.generateMipmaps=!0,e.needsUpdate=!0,e},xl=class{constructor({maxActive:t=16,anisotropy:e=4}={}){this.maxActive=t,this.anisotropy=e,this.queue=[],this.active=new Set,this.decodeBudget=5,this.pendingDecodes=[],this.loaded=0,this.failed=0,this.onLoad=null}want(t,e,n){let s=t.slots[e.id];return s||(s=t.slots[e.id]={state:Dx(e,t)&&t.z<=e.maxZoom?hh:Ad,tex:null,layer:e,tile:t,priority:0,queued:!1,abort:null},e.kind==="elevation"&&t.parent?.allSea&&(s.state=Ad,t.allSea=!0)),s.priority=n,s.state===hh&&!s.queued&&(s.queued=!0,this.queue.push(s)),s}pump(t){let e=performance.now();for(let s=0;s<this.decodeBudget&&this.pendingDecodes.length&&performance.now()-e<5;s++)this.pendingDecodes.shift()();for(let s of this.active)s.tile.visit<t-30&&s.abort&&s.abort.abort();if(!this.queue.length||(this.queue=this.queue.filter(s=>s.tile.visit>=t-5&&!s.tile.dead?!0:(s.queued=!1,!1)),this.active.size>=this.maxActive))return;this.queue.sort((s,r)=>s.priority-r.priority);let n=new Map;for(let s of this.active)n.set(s.layer.id,(n.get(s.layer.id)??0)+1);for(let s=this.queue.length-1;s>=0&&this.active.size<this.maxActive;s--){let r=this.queue[s],a=n.get(r.layer.id)??0;a>=(r.layer.maxActive??this.maxActive)||(n.set(r.layer.id,a+1),this.queue.splice(s,1),this.start(r))}}start(t){t.queued=!1,t.state=Ix,t.abort=new AbortController,this.active.add(t);let{tile:e,layer:n}=t,s=r=>{this.active.delete(t),t.abort=null,t.state=r,r===Zn&&this.loaded++,r===Ed&&this.failed++,this.onLoad?.(t)};fetch(Lx(n,e.z,e.x,e.y),{signal:t.abort.signal,mode:"cors",credentials:"omit",referrerPolicy:"no-referrer"}).then(r=>{if(!r.ok)throw Object.assign(new Error(`HTTP ${r.status}`),{status:r.status});return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(r=>{this.pendingDecodes.push(()=>{if(e.dead)return r.close?.();if(n.kind==="elevation"){let a=kx(r,e,n.id);r.close?.(),Object.assign(t,a),e.minH=a.min,e.maxH=a.max,e.allSea=a.allSea}else t.tex=Ox(r,this.anisotropy),t.tex.onUpdate=()=>{r.close?.(),t.tex.onUpdate=null};s(Zn)})}).catch(r=>{r.name==="AbortError"?(this.active.delete(t),t.abort=null,t.state=hh):s(Ed)})}get busy(){return this.active.size+this.queue.length+this.pendingDecodes.length}},Cd=i=>{for(let t in i.slots){let e=i.slots[t];e.abort?.abort(),e.tex?.dispose(),e.tex=null,e.heights=null,e.seaWide=null}i.slots={}};var Bx=`
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

${Bx}
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
`;var vr=2,zx=[12,17,22],Hx=[[44,35.5,56.5,48.5],[34.9,30,36.2,33.4],[-117.6,35.6,-116.2,37],[-116.4,32.4,-115,33.8],[25.5,28.3,30.3,30.6],[39.5,11,42.8,15],[88.5,42.3,90.5,43.3],[3.3,51.2,7.3,53.6],[5.5,33.5,9,34.8],[136.5,-29.6,138.3,-27.6],[-68.6,-49.8,-67.9,-49.3],[50.9,43.2,52.3,44],[-.6,52.2,.5,52.9]],dh=class i{constructor(t,e,n,s){this.z=t,this.x=e,this.y=n,this.parent=s,this.children=null,this.lon0=gi(e,t),this.lon1=gi(e+1,t),this.latN=zn(n,t),this.latS=zn(n+1,t),this.west=this.lon0/yt,this.east=this.lon1/yt,this.north=this.latN/yt,this.south=this.latS/yt;let r=(this.lon0+this.lon1)/2,a=zn(n+.5,t);this.center=xn(r,a).map(h=>h*ne);let l=0;for(let[h,u]of[[this.lon0,this.latN],[this.lon1,this.latN],[this.lon0,this.latS],[this.lon1,this.latS]]){let c=xn(h,u);l=Math.max(l,Math.hypot(c[0]*ne-this.center[0],c[1]*ne-this.center[1],c[2]*ne-this.center[2]))}this.radius=l,this.minH=s?s.minH:-8e3,this.maxH=s?s.maxH:6e3,this.slots={},this.visit=0,this.geom=null,this.dead=!1,this.dry=null;for(let h of Hx)if(this.east>h[0]&&this.west<h[2]&&this.north>h[1]&&this.south<h[3]){this.dry=[ss(h[0]*yt,t)-e,rs(h[3]*yt,t)-n,ss(h[2]*yt,t)-e,rs(h[1]*yt,t)-n];break}let o=[];for(let h of zx){let u=2**(h-t);o.push([e*u%64,n*u%64,u])}this.lattice=o}split(){let{z:t,x:e,y:n}=this;this.children=[new i(t+1,2*e,2*n,this),new i(t+1,2*e+1,2*n,this),new i(t+1,2*e,2*n+1,this),new i(t+1,2*e+1,2*n+1,this)]}},Gx=i=>{let t=i+1,e=t*t,n=e+4*t,s=new Float32Array(n*2),r=new Float32Array(n),a=new Uint32Array(4*t);for(let o=0;o<t;o++)for(let h=0;h<t;h++)s[(o*t+h)*2]=h/i,s[(o*t+h)*2+1]=o/i;for(let o=0;o<t;o++)a[o]=o,a[t+o]=i*t+o,a[2*t+o]=o*t,a[3*t+o]=o*t+i;for(let o=0;o<4*t;o++)s[(e+o)*2]=s[a[o]*2],s[(e+o)*2+1]=s[a[o]*2+1],r[e+o]=1;let l=[];for(let o=0;o<i;o++)for(let h=0;h<i;h++){let u=o*t+h,c=u+1,f=u+t,d=f+1;l.push(u,f,c,c,f,d)}for(let o=0;o<4;o++)for(let h=0;h<i;h++){let u=a[o*t+h],c=a[o*t+h+1],f=e+o*t+h,d=f+1;l.push(u,f,c,c,f,d)}return{n:i,side:t,main:e,count:n,edge:a,uv:new Le(s,2),skirt:new Le(r,1),index:new Le(n>65535?new Uint32Array(l):new Uint16Array(l),1)}},Vx=(i,t)=>{let e=new Float32Array(t.count*3),{n,side:s}=t,[r,a,l]=i.center,o=new Float64Array(s),h=new Float64Array(s);for(let c=0;c<s;c++){let f=i.lon0+(i.lon1-i.lon0)*c/n;o[c]=Math.cos(f),h[c]=Math.sin(f)}for(let c=0;c<s;c++){let f=zn(i.y+c/n,i.z),d=Math.cos(f)*ne,p=Math.sin(f)*ne;for(let v=0;v<s;v++){let g=(c*s+v)*3;e[g]=d*o[v]-r,e[g+1]=d*h[v]-a,e[g+2]=p-l}}for(let c=0;c<4*s;c++){let f=t.edge[c]*3,d=(t.main+c)*3;e[d]=e[f],e[d+1]=e[f+1],e[d+2]=e[f+2]}let u=new Be;return u.setAttribute("position",new Le(e,3)),u.setAttribute("uv",t.uv),u.setAttribute("skirt",t.skirt),u.setIndex(t.index),u},Gd=(i,t,e,n=255)=>{let s=new Sn(new Uint8Array([i,t,e,n]),1,1,Ye);return s.needsUpdate=!0,s},yl=class{constructor({renderer:t,scene:e,segments:n=64,threshold:s=340,budget:r=380,layers:a}){this.scene=e,this.grid=Gx(n),this.threshold=s,this.budget=r,this.loader=new xl({anisotropy:Math.min(8,t.capabilities.getMaxAnisotropy())}),this.layers=a,this.maxZ=17,this.frame=0,this.count=0,this.roots=[];for(let l=0;l<2**vr;l++)for(let o=0;o<2**vr;o++)this.roots.push(new dh(vr,o,l,null));this.count=this.roots.length,this.drawn=[],this.pool=[],this.group=new $e,e.add(this.group),this.blank=Gd(20,30,45),this.blankElev=(()=>{let l=new Sn(new Uint16Array([0]),1,1,fi,je);return l.internalFormat="R16F",l.needsUpdate=!0,l})(),this.black=Gd(0,0,0,0),this.shared={uCamPos:{value:new ft},uSun:{value:new ft(1,0,0)},uSea:{value:0},uWater:{value:1},uSeaClamp:{value:0},uExag:{value:1},uTime:{value:0},uPixAngle:{value:.001},uLens:{value:0},uOverMix:{value:1},uOverMode:{value:0},uBathy:{value:.45},uShadows:{value:1},uContours:{value:0},uNightOn:{value:1},uPad:{value:new ge(0,0,0,0)},uPadH:{value:0},tDecal:{value:this.black},tDecalFar:{value:this.black},uDecalOn:{value:0},tHeat:{value:this.black},uHeat:{value:0},uHeatLod:{value:0},uScan:{value:new ge(0,0,1,0)},uScanA:{value:0},uDecalO:{value:new ft},uDecalU:{value:new ft},uDecalV:{value:new ft}},this.frustum=new ui,this.caps=this.makeCaps(),this.stats={tiles:0,depth:0}}makeMaterial(){let t={...this.shared,uCenter:{value:new ft},uCenterRel:{value:new ft},uSkirt:{value:0},tElev:{value:this.blankElev},uElevUV:{value:new ge(1,1,0,0)},uElevBase:{value:0},uElevMpp:{value:1},tFar:{value:this.blankElev},uFarUV:{value:new ge(1,1,0,0)},uFarBase:{value:0},uFarMpp:{value:1},uFarTop:{value:9e3},tBase:{value:this.blank},uBaseUV:{value:new ge(1,1,0,0)},uBaseTexels:{value:256},tGlobe:{value:this.blank},uGlobeUV:{value:new ge(1,1,0,0)},uGlobeOn:{value:0},tOver:{value:this.black},uOverUV:{value:new ge(1,1,0,0)},uOverOn:{value:0},tNight:{value:this.black},uNightUV:{value:new ge(1,1,0,0)},uDry:{value:new ge(2,2,-1,-1)},uLat:{value:[new ie,new ie,new ie]},uLatS:{value:[1,1,1]}};return new Xe({uniforms:t,vertexShader:Id,fragmentShader:Ld,glslVersion:ns,side:sn})}makeCaps(){let n=[];for(let s of[1,-1]){let r=new Float32Array(2307),a=new Float32Array(769),l=[0,0,s*ne];for(let d=0;d<8;d++){let p=s*(is+(Math.PI/2-is)*d/8);for(let v=0;v<96;v++){let g=xn(v/96*2*Math.PI-Math.PI,p),m=(d*96+v)*3;r[m]=g[0]*ne,r[m+1]=g[1]*ne,r[m+2]=g[2]*ne-l[2]}}let o=[];for(let d=0;d<7;d++)for(let p=0;p<96;p++){let v=d*96+p,g=d*96+(p+1)%96,m=v+96,x=g+96;o.push(v,g,m,g,x,m)}let h=768;for(let d=0;d<96;d++)o.push(672+d,672+(d+1)%96,h);let u=new Be;u.setAttribute("position",new Le(r,3)),u.setAttribute("height",new Le(a,1)),u.setIndex(o);let c=new Xe({uniforms:{uCamPos:this.shared.uCamPos,uSun:this.shared.uSun,uExag:this.shared.uExag,uCenter:{value:new ft(...l)},uCenterRel:{value:new ft}},vertexShader:Dd,fragmentShader:Nd,glslVersion:ns,side:sn}),f=new pe(u,c);f.frustumCulled=!1,f.position.set(...l),f.updateMatrixWorld(),this.scene.add(f),n.push({mesh:f,sign:s,rings:8,around:96,centre:l,set:!1})}return n}fitCaps(){let t=this.shared.uWater.value>.5?this.shared.uSea.value:-1e5;for(let e of this.caps){let n=e.mesh.geometry.attributes.height,s=0,r=[];for(let a=0;a<e.around;a++){let l=Math.max(this.heightAt(a/e.around*2*Math.PI-Math.PI,e.sign*(is-.002))??0,t);r.push(l),s+=l/e.around}for(let a=0;a<e.rings;a++)for(let l=0;l<e.around;l++)n.array[a*e.around+l]=r[l]+(s-r[l])*(a/e.rings);n.array[e.rings*e.around]=s,n.needsUpdate=!0}}resolve(t,e){for(let n=t;n;n=n.parent){let s=n.slots[e.id];if(s&&s.state===Zn){let r=2**(t.z-n.z);return{slot:s,z:n.z,scale:1/r,ox:(t.x-n.x*r)/r,oy:(t.y-n.y*r)/r}}}return null}heightAt(t,e){t=wn(t),e=$t(e,-is+1e-6,is-1e-6);let n=2**vr,s=this.roots[$t(Math.floor(rs(e,vr)),0,n-1)*n+$t(Math.floor(ss(t,vr)),0,n-1)],r=null,a=this.layers.elevation.id;for(;s;){let m=s.slots[a];if(m&&m.state===Zn&&(r=s),!s.children)break;let x=ss(t,s.z+1)-2*s.x,_=rs(e,s.z+1)-2*s.y;s=s.children[(_>=1?2:0)+(x>=1?1:0)]}if(!r)return null;let l=r.slots[a],o=$t((ss(t,r.z)-r.x)*256-.5,0,255),h=$t((rs(e,r.z)-r.y)*256-.5,0,255),u=Math.floor(o),c=Math.floor(h),f=Math.min(u+1,255),d=Math.min(c+1,255),p=o-u,v=h-c,g=(m,x)=>Xi.fromHalfFloat(l.heights[(x+1)*ze+m+1]);return l.base+(g(u,c)*(1-p)+g(f,c)*p)*(1-v)+(g(u,d)*(1-p)+g(f,d)*p)*v}measure(t,e){let n=this.shared.uExag.value,s=e.lon;if(!(s>=t.lon0&&s<=t.lon1)){let v=Math.abs(wn(e.lon-t.lon0)),g=Math.abs(wn(e.lon-t.lon1));s=v<g?t.lon0:t.lon1}let r=$t(e.lat,t.latS,t.latN),a=gr(e.lon,e.lat,s,r),l=Math.max(t.maxH,e.sea)*n;if(a>e.horizon+Math.acos(Math.min(1,e.occluder/(ne+Math.max(l,0)+50)))+.002)return null;let o=this._v.set(t.center[0]-e.pos[0],t.center[1]-e.pos[1],t.center[2]-e.pos[2]);if(this._sphere.center.copy(o),this._sphere.radius=t.radius+Math.max(Math.abs(t.minH),Math.abs(t.maxH))*n+200,!this.frustum.intersectsSphere(this._sphere))return null;let h=$t(e.ground,t.minH,t.maxH)*n,u=xn(s,r,this._p),c=ne+Math.max(h,e.sea*n),f=Math.max(Math.hypot(u[0]*c-e.pos[0],u[1]*c-e.pos[1],u[2]*c-e.pos[2]),20),d=pr*Math.cos(r)/2**t.z,p=Math.abs((u[0]*(u[0]*c-e.pos[0])+u[1]*(u[1]*c-e.pos[1])+u[2]*(u[2]*c-e.pos[2]))/f);return d/f*e.pxPerRad*Math.max(.45,Math.sqrt(p))}ensure(t,e){let n=this.layers,s=this.loader,r=s.want(t,n.elevation,e+2e6),a=n.globe?n.globe.maxZoom:-1,l=n.globe&&t.z<=a?s.want(t,n.globe,e+1e6):null,o=t.z>=a?s.want(t,n.base,e+1e6):l;return n.overlay&&s.want(t,n.overlay,e),n.night&&this.shared.uNightOn.value>.5&&s.want(t,n.night,e-1e5),r.state>=Zn&&o.state>=Zn}visit(t,e,n){t.visit=this.frame;let s=this.ensure(t,e);if(s&&t.z<this.maxZ&&e>this.threshold&&this.drawn.length<700){t.children||(t.split(),this.count+=4);let r=!0;for(let a of t.children)a._px=this.measure(a,n),a._px!==null&&(a.visit=this.frame,this.ensure(a,a._px)||(r=!1));if(r){for(let a of t.children)a._px!==null&&this.visit(a,a._px,n);return}}s&&this.drawn.push(t)}update(t){this.frame++;let e=this.shared,n=e.uExag.value,s=e.uWater.value>.5;t.sea=s?e.uSea.value:-12e3;let r=Math.hypot(t.pos[0],t.pos[1],t.pos[2]);t.occluder=ne+(s?Math.min(e.uSea.value,-450):-11e3)*n-100,t.horizon=r>t.occluder?Math.acos(t.occluder/r):Math.PI,this._v??=new ft,this._p??=[0,0,0],this._sphere??=new hi,this.frustum.setFromProjectionMatrix(t.viewProjectionRel),e.uSeaClamp.value=s?e.uSea.value:-1e5,this.drawn.length=0;for(let a of this.roots){let l=this.measure(a,t);if(l===null){a.visit=this.frame,this.ensure(a,1);continue}this.visit(a,l,t)}this.assign(t),this.loader.pump(this.frame),this.frame%90===0&&this.prune(),!this.capsFitted&&this.roots.every(a=>a.slots[this.layers.elevation.id]?.state>=Zn)&&(this.fitCaps(),this.capsFitted=!0);for(let a of this.caps)a.mesh.material.uniforms.uCenterRel.value.set(a.centre[0]-t.pos[0],a.centre[1]-t.pos[1],a.centre[2]-t.pos[2])}assign(t){let e=this.layers,n=0;for(let s=0;s<this.drawn.length;s++){let r=this.drawn[s],a=this.pool[s];a||(a=this.pool[s]=new pe(void 0,this.makeMaterial()),a.frustumCulled=!1,a.matrixAutoUpdate=!1,this.group.add(a)),r.geom??=Vx(r,this.grid),a.geometry=r.geom,a.visible=!0,a.matrix.makeTranslation(r.center[0],r.center[1],r.center[2]),a.matrixWorld.copy(a.matrix);let l=a.material.uniforms;l.uCenter.value.set(r.center[0],r.center[1],r.center[2]),l.uCenterRel.value.set(r.center[0]-t.pos[0],r.center[1]-t.pos[1],r.center[2]-t.pos[2]),l.uSkirt.value=Math.max(pr/2**r.z*.04,30)*Math.max(1,this.shared.uExag.value*.5);let o=this.resolve(r,e.elevation);if(o){let p=256/ze;l.tElev.value=o.slot.tex,l.uElevUV.value.set(o.scale*p,o.scale*p,(1+256*o.ox)/ze,(1+256*o.oy)/ze),l.uElevBase.value=o.slot.base,l.uElevMpp.value=pr/2**o.z/256}else l.tElev.value=this.blankElev,l.uElevBase.value=0,l.uElevMpp.value=pr/2**r.z/256;let h=null;for(let p=r,v=0;p;p=p.parent,v++){let g=p.slots[e.elevation.id];if(g&&g.state===Zn&&(v>=3||!p.parent)){h=p;break}}if(h){let p=2**(r.z-h.z),v=h.slots[e.elevation.id];l.tFar.value=v.tex,l.uFarUV.value.set(256/ze/p,256/ze/p,(1+256*(r.x-h.x*p)/p)/ze,(1+256*(r.y-h.y*p)/p)/ze),l.uFarBase.value=v.base,l.uFarMpp.value=pr/2**h.z/256,l.uFarTop.value=v.max}else l.tFar.value=l.tElev.value,l.uFarUV.value.copy(l.uElevUV.value),l.uFarBase.value=l.uElevBase.value,l.uFarMpp.value=l.uElevMpp.value,l.uFarTop.value=r.maxH;let u=e.globe&&this.resolve(r,e.globe),c=this.resolve(r,e.base)??u;c?(l.tBase.value=c.slot.tex,l.uBaseUV.value.set(c.scale,c.scale,c.ox,c.oy),l.uBaseTexels.value=256*2**c.z):(l.tBase.value=this.blank,l.uBaseTexels.value=256*2**r.z),u?(l.tGlobe.value=u.slot.tex,l.uGlobeUV.value.set(u.scale,u.scale,u.ox,u.oy),l.uGlobeOn.value=1):(l.tGlobe.value=this.blank,l.uGlobeOn.value=0);let f=e.overlay&&this.resolve(r,e.overlay);f?(l.tOver.value=f.slot.tex,l.uOverUV.value.set(f.scale,f.scale,f.ox,f.oy),l.uOverOn.value=1):(l.tOver.value=this.black,l.uOverOn.value=0);let d=e.night&&this.shared.uNightOn.value>.5&&this.resolve(r,e.night);d?(l.tNight.value=d.slot.tex,l.uNightUV.value.set(d.scale,d.scale,d.ox,d.oy)):l.tNight.value=this.black,r.dry?l.uDry.value.set(r.dry[0],r.dry[1],r.dry[2],r.dry[3]):l.uDry.value.set(2,2,-1,-1);for(let p=0;p<3;p++)l.uLat.value[p].set(r.lattice[p][0],r.lattice[p][1]),l.uLatS.value[p]=r.lattice[p][2];r.z>n&&(n=r.z)}for(let s=this.drawn.length;s<this.pool.length;s++)this.pool[s].visible=!1;this.stats.tiles=this.drawn.length,this.stats.depth=n}prune(){let t=this.count>this.budget?45:900,e=n=>{if(!n.children)return;let s=!0;for(let r of n.children)e(r),(r.children||r.visit>=this.frame-t)&&(s=!1);if(s){for(let r of n.children)r.dead=!0,Cd(r),r.geom?.dispose(),r.geom=null;n.children=null,this.count-=4}};for(let n of this.roots)e(n)}refresh(t){let e=this.layers.elevation.id,[n,s,r,a]=t.map(o=>o*yt),l=o=>{if(!(gi(o.x+1,o.z)<=n||gi(o.x,o.z)>=r||zn(o.y,o.z)<=s||zn(o.y+1,o.z)>=a)){if(o.z>=7){let h=o.slots[e];h&&(h.abort?.abort(),h.tex?.dispose(),delete o.slots[e]),o.allSea=!1}o.children?.forEach(l)}};this.roots.forEach(l)}setLayer(t,e){let n=this.layers[t];if(this.layers[t]=e,n&&(!e||n.id!==e.id)){let s=r=>{let a=r.slots[n.id];a&&(a.abort?.abort(),a.tex?.dispose(),delete r.slots[n.id]),r.children&&r.children.forEach(s)};this.roots.forEach(s)}}get ready(){let t=(this.layers.globe??this.layers.base).id;return this.roots.every(e=>e.slots[this.layers.elevation.id]?.state>=Zn&&e.slots[t]?.state>=Zn)}};var fh=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,_l=class{constructor(t,e,n){this.camera=t,this.dom=e,this.globe=n,this.lon=-30*yt,this.lat=25*yt,this.range=175e5,this.heading=0,this.tilt=0,this.goalRange=this.range,this.goalHeading=0,this.goalTilt=0,this.maxRange=6e7,this.floor=null,this.inCity=!1,this.walk=null,this.groundH=0,this.pos=[0,0,0],this.basis={right:[1,0,0],up:[0,1,0],fwd:[0,0,-1]},this.vel=[0,0],this.fly=null,this.anchor=null,this.idle=!0,this.moved=0,this.onChange=null,this.onTap=null,this.wheelNeedsKey=!1,this.shift=[0,0],this.goalShift=[0,0],this.onWheelBlocked=null,this.pointers=new Map,this.bind(),this.place()}get fovY(){return this.camera.fov*yt}get minRange(){return this.inCity?14:150}size(){return[this.dom.clientWidth||1,this.dom.clientHeight||1]}place(){if(this.walk)return this.placeWalk();let t=this.globe,e=t?t.shared.uExag.value:1,n=t&&t.shared.uWater.value>.5?t.shared.uSea.value:-1e5,s=si(this.lon,this.lat),r=Yn(En(s.north,Math.cos(this.heading)),s.east,Math.sin(this.heading)),a=En(s.up,ne+this.groundH),l=Yn(En(s.up,Math.cos(this.tilt)),r,-Math.sin(this.tilt)),o=Yn(a,l,this.range),h=Math.hypot(o[0],o[1],o[2]),[u,c]=ml(o),f=this.floor?.(u,c)??null,d=Math.max(t?Math.max(t.heightAt(u,c)??0,n)*e:0,f??-1e9),p=Math.max(f==null?25:1.7,this.range*.04);h<ne+d+p&&(o=En(o,(ne+d+p)/h),h=ne+d+p);let v=mr(Yn(o,a,-1)),g=Yn(En(r,Math.cos(this.tilt)),s.up,Math.sin(this.tilt)),m=mr(ha(g,v)),x=ha(v,m);this.pos=o,this.basis={right:m,up:x,fwd:En(v,-1)},this.camLon=u,this.camLat=c,this.under=d,this.altitude=h-ne-d;let _=Math.max(f==null?1.5:.5,.06*Math.min(this.altitude,this.range)),b=ne-11e3*e,M=Math.sqrt(Math.max(h*h-b*b,0))+Math.sqrt((ne+9e3*e)**2-b*b)+1e3,C=this.camera;C.near=_,C.far=Math.max(M,_*10),C.updateProjectionMatrix(),C.projectionMatrix.elements[8]=-this.shift[0],C.projectionMatrix.elements[9]=-this.shift[1],C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.matrixAutoUpdate=!1,C.matrix.set(m[0],x[0],v[0],o[0],m[1],x[1],v[1],o[1],m[2],x[2],v[2],o[2],0,0,0,1),C.matrixWorld.copy(C.matrix),C.matrixWorldInverse.copy(C.matrix).invert()}placeWalk(){let t=this.walk,e=this.globe,n=e?e.shared.uExag.value:1,s=si(t.lon,t.lat),r=this.floor?.(t.lon,t.lat)??(e?(e.heightAt(t.lon,t.lat)??0)*n:0),a=ne+r+t.eye+(t.lift??0),l=En(s.up,a),o=Yn(En(s.north,Math.cos(t.yaw)),s.east,Math.sin(t.yaw)),h=mr(Yn(En(o,Math.cos(t.pitch)),s.up,Math.sin(t.pitch))),u=En(h,-1),c=mr(ha(s.up,u)),f=ha(u,c);this.pos=l,this.basis={right:c,up:f,fwd:h},this.lon=this.camLon=t.lon,this.lat=this.camLat=t.lat,this.heading=this.goalHeading=t.yaw,this.tilt=t.pitch,this.groundH=this.under=r,this.altitude=t.eye;let d=ne-11e3*n,p=Math.sqrt(Math.max(a*a-d*d,0))+Math.sqrt((ne+9e3*n)**2-d*d)+1e3,v=this.camera;v.near=.14,v.far=p,v.updateProjectionMatrix(),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.matrixAutoUpdate=!1,v.matrix.set(c[0],f[0],u[0],l[0],c[1],f[1],u[1],l[1],c[2],f[2],u[2],l[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert()}ray(t,e){let[n,s]=this.size(),r=Math.tan(this.fovY/2),a=r*(n/s),l=t/n*2-1-this.shift[0],o=1-e/s*2-this.shift[1],h=this.basis;return mr([h.fwd[0]+h.right[0]*l*a+h.up[0]*o*r,h.fwd[1]+h.right[1]*l*a+h.up[1]*o*r,h.fwd[2]+h.right[2]*l*a+h.up[2]*o*r])}pick(t,e){let n=this.globe,s=n.shared.uExag.value,r=n.shared.uWater.value>.5?n.shared.uSea.value:-1e5,a=this.ray(t,e),l=this.groundH,o=null;for(let h=0;h<5;h++){let u=bd(this.pos,a,ne+l);if(u<0)return o;let c=Yn(this.pos,a,u),[f,d]=ml(c),p=n.heightAt(f,d)??0;o={lon:f,lat:d,height:p,distance:u},l=Math.max(Math.max(p,r)*s,this.floor?.(f,d)??-1e9)}return o}touch(){this.idle=!1,this.fly=null,this.moved=performance.now()}bind(){let t=this.dom;t.style.touchAction="none",t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(this.walk)return;t.setPointerCapture?.(n.pointerId);let s=t.getBoundingClientRect(),r={x:n.clientX-s.left,y:n.clientY-s.top,x0:n.clientX-s.left,y0:n.clientY-s.top,button:n.button,mod:n.ctrlKey||n.shiftKey||n.metaKey||n.altKey,t:performance.now()};this.pointers.set(n.pointerId,r),this.touch(),this.vel=[0,0],this.anchor=null,this.goalRange=this.range,this.pointers.size===1&&(this.grab=this.pick(r.x,r.y)),this.pointers.size===2&&(this.pinch=this.pinchState())}),t.addEventListener("pointermove",n=>{if(this.walk)return;let s=this.pointers.get(n.pointerId),r=t.getBoundingClientRect(),a=n.clientX-r.left,l=n.clientY-r.top;if(this.hover={x:a,y:l},!s)return;let o=a-s.x,h=l-s.y;s.x=a,s.y=l,this.pointers.size===1?s.button===2||s.button===1||s.mod?this.orbit(o,h):this.pan(s,o,h):this.pointers.size===2&&this.pinchMove(),this.onChange?.()});let e=n=>{let s=this.pointers.get(n.pointerId);if(s){if(this.pointers.delete(n.pointerId),this.pointers.size===0&&Math.hypot(s.x-s.x0,s.y-s.y0)<6&&performance.now()-s.t<400&&this.onTap?.(s.x,s.y),this.pointers.size===1){let r=[...this.pointers.values()][0];this.grab=this.pick(r.x,r.y)}this.pinch=null}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{if(this.walk)return;if(this.wheelNeedsKey&&!(n.ctrlKey||n.metaKey)){this.onWheelBlocked?.();return}n.preventDefault(),this.touch();let s=t.getBoundingClientRect(),r=n.deltaMode===1?32:n.deltaMode===2?400:1,a=n.ctrlKey?.012:.0016;this.goalRange=$t(this.goalRange*Math.exp($t(n.deltaY*r,-300,300)*a),this.minRange,this.maxRange);let l=n.clientX-s.left,o=n.clientY-s.top,h=this.pick(l,o);this.anchor=h?{lon:h.lon,lat:h.lat,x:l,y:o}:null},{passive:!1}),t.addEventListener("dblclick",n=>{if(this.walk)return;let s=t.getBoundingClientRect(),r=this.pick(n.clientX-s.left,n.clientY-s.top);r&&this.flyTo({lon:r.lon,lat:r.lat,range:Math.max(this.range*.35,this.minRange*2)},.9)})}pan(t,e,n){let s=[this.lon,this.lat],r=this.pick(t.x,t.y);if(this.grab&&r)this.lon=wn(this.lon+wn(this.grab.lon-r.lon)),this.lat=$t(this.lat+(this.grab.lat-r.lat),-89*yt,89*yt);else{let[,h]=this.size(),u=2*Math.tan(this.fovY/2)*this.range/h/ne,c=Math.cos(this.heading),f=Math.sin(this.heading);this.lon=wn(this.lon-(e*c+n*f)*u/Math.max(Math.cos(this.lat),.2)),this.lat=$t(this.lat+(n*c-e*f)*u,-89*yt,89*yt)}this.place();let a=performance.now(),l=Math.max((a-(this.lastPan??a-16))/1e3,.004);this.lastPan=a;let o=[wn(this.lon-s[0])/l,(this.lat-s[1])/l];this.vel=[Xn(this.vel[0],o[0],.5),Xn(this.vel[1],o[1],.5)]}orbit(t,e){this.heading=this.goalHeading=this.heading-t*.006,this.tilt=this.goalTilt=$t(this.tilt-e*.005,0,this.maxTilt()),this.place()}maxTilt(){return this.inCity&&this.range<900?Xn(88.5,84,$t((this.range-200)/700,0,1))*yt:Xn(84,62,$t((Math.log10(this.range)-5.2)/1.8,0,1))*yt}pinchState(){let[t,e]=[...this.pointers.values()];return{d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x),cy:(t.y+e.y)/2,cx:(t.x+e.x)/2,range:this.range,heading:this.heading,tilt:this.tilt,grab:this.pick((t.x+e.x)/2,(t.y+e.y)/2)}}pinchMove(){let t=this.pinch;if(!t)return;let[e,n]=[...this.pointers.values()],s=Math.hypot(e.x-n.x,e.y-n.y),r=Math.atan2(n.y-e.y,n.x-e.x),a=(e.y+n.y)/2,l=(e.x+n.x)/2;this.range=this.goalRange=$t(t.range*t.d/Math.max(s,1),this.minRange,this.maxRange);let o=r-t.ang;o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)>.12&&(this.heading=this.goalHeading=t.heading+(o-Math.sign(o)*.12));let h=a-t.cy,u=Math.abs(s-t.d);Math.abs(h)>24&&u<40&&(this.tilt=this.goalTilt=$t(t.tilt-(h-Math.sign(h)*24)*.006,0,this.maxTilt())),this.place();let c=this.pick(l,a);t.grab&&c&&(this.lon=wn(this.lon+wn(t.grab.lon-c.lon)),this.lat=$t(this.lat+(t.grab.lat-c.lat),-89*yt,89*yt),this.place())}flyTo(t,e){let n={lon:this.lon,lat:this.lat,range:this.range,heading:this.heading,tilt:this.tilt},s={lon:t.lon??n.lon,lat:t.lat??n.lat,range:$t(t.range??n.range,this.minRange,this.maxRange),heading:t.heading??0,tilt:t.tilt??0},r=gr(n.lon,n.lat,s.lon,s.lat),a=Math.max(n.range,s.range,Math.min(r*ne*1.4,24e6)),l=e??$t(1.4+r*1.6+Math.abs(Math.log(n.range/s.range))*.22+Math.log(a/Math.max(n.range,s.range))*.18,1.2,6.5),o=s.heading-n.heading;o=Math.atan2(Math.sin(o),Math.cos(o)),this.fly={from:n,target:s,hop:a,dur:l,t:0,dh:o,a:xn(n.lon,n.lat),b:xn(s.lon,s.lat),angle:r},this.idle=!1,this.anchor=null,this.vel=[0,0]}zoomBy(t){this.touch(),this.anchor=null,this.goalRange=$t(this.goalRange*t,this.minRange,this.maxRange)}jump(t){Object.assign(this,{lon:t.lon??this.lon,lat:t.lat??this.lat,range:t.range??this.range,heading:t.heading??0,tilt:t.tilt??0}),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,this.fly=null,this.place()}update(t){if(this.walk){this.fly=null,this.inCity=!0,this.shift=[0,0],this.place();return}let e=this.globe,n=e.shared.uExag.value,s=e.shared.uWater.value>.5?e.shared.uSea.value:-1e5,r=1-Math.exp(-t*7);if(this.shift=[Xn(this.shift[0],this.goalShift[0],r),Xn(this.shift[1],this.goalShift[1],r)],this.fly){let o=this.fly;o.t=Math.min(1,o.t+t/o.dur);let h=o.hop>3*Math.max(o.from.range,o.target.range),u=fh(h?$t((o.t-.14)/.72,0,1):o.t);if(o.angle>1e-9){let p=Math.sin(o.angle),v=Math.sin((1-u)*o.angle)/p,g=Math.sin(u*o.angle)/p,[m,x]=ml([o.a[0]*v+o.b[0]*g,o.a[1]*v+o.b[1]*g,o.a[2]*v+o.b[2]*g]);this.lon=m,this.lat=x}let c=fh(o.t),f=Math.exp(Xn(Math.log(o.from.range),Math.log(o.target.range),c)),d=Math.sin(Math.PI*o.t);this.range=Math.exp(Xn(Math.log(f),Math.log(Math.max(o.hop,f)),h?d**.7:d*d)),this.heading=o.from.heading+o.dh*c,this.tilt=Xn(o.from.tilt,o.target.tilt,c)*(h?1-.85*d:1),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,o.t>=1&&(this.fly=null,this.heading=o.target.heading)}else{if(this.idle&&this.spin!==!1&&this.range>4e6&&(this.lon=wn(this.lon+t*.035)),!this.pointers.size){if(Math.abs(this.vel[0])+Math.abs(this.vel[1])>1e-7){this.lon=wn(this.lon+this.vel[0]*t),this.lat=$t(this.lat+this.vel[1]*t,-89*yt,89*yt);let h=Math.exp(-t*4.5);this.vel=[this.vel[0]*h,this.vel[1]*h]}let o=1-Math.exp(-t*9);if(Math.abs(Math.log(this.goalRange/this.range))>1e-4){if(this.range=Math.exp(Xn(Math.log(this.range),Math.log(this.goalRange),o)),this.anchor){this.place();let h=this.pick(this.anchor.x,this.anchor.y);h&&(this.lon=wn(this.lon+wn(this.anchor.lon-h.lon)),this.lat=$t(this.lat+(this.anchor.lat-h.lat),-89*yt,89*yt))}}else this.anchor=null}this.tilt=Math.min(this.tilt,this.maxTilt())}let a=this.floor?.(this.lon,this.lat)??null;this.inCity=a!=null,this.goalRange<this.minRange&&(this.goalRange=this.minRange);let l=Math.max(Math.max(e.heightAt(this.lon,this.lat)??0,s)*n,a??-1e9);this.groundH=Xn(this.groundH,l,1-Math.exp(-t*6)),this.place()}view(t){let e=this.camera,n=new xe().copy(e.matrixWorldInverse);return n.elements[12]=n.elements[13]=n.elements[14]=0,{pos:this.pos,lon:this.camLon,lat:this.camLat,ground:this.under/Math.max(this.globe.shared.uExag.value,1e-6),viewProjectionRel:new xe().multiplyMatrices(e.projectionMatrix,n),pxPerRad:t/(2*Math.tan(this.fovY/2))}}state(){return{lat:this.lat/yt,lon:this.lon/yt,range:this.range,heading:this.heading/yt,tilt:this.tilt/yt}}};var bl=5,wl=class{constructor(t,{samples:e=4,steps:n=20}={}){this.renderer=t,this.samples=e;let s=new Be;s.setAttribute("position",new Le(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),s.setAttribute("uv",new Le(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new pe(s),this.quad.frustumCulled=!1,this.quadScene=new $n,this.quadScene.add(this.quad),this.quadCam=new _s(-1,1,1,-1,0,1);let r=(l,o)=>new Xe({vertexShader:Fd,fragmentShader:l,uniforms:o,glslVersion:ns,depthTest:!1,depthWrite:!1}),a={tDepth:{value:null},uCam:{value:new ft},uRight:{value:new ft},uUp:{value:new ft},uFwd:{value:new ft},uTan:{value:new ie},uShift:{value:new ie},uNear:{value:1},uFar:{value:2},uSun:{value:new ft}};this.atmo=r(kd,{...a,uHaze:{value:1},uSteps:{value:n},uAir:{value:1},uThick:{value:1}}),this.comp=r(Od,{...a,tColor:{value:null},tLight:{value:null},tThrough:{value:null},uPixAngle:{value:.001}}),this.down=r(Bd,{tSrc:{value:null},uTexel:{value:new ie},uThreshold:{value:0}}),this.up=r(zd,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ie}}),this.final=r(Hd,{tColor:{value:null},tBloom:{value:null},uTexel:{value:new ie},uExposure:{value:1},uBloom:{value:.06},uVignette:{value:.35}}),this.w=this.h=0}setSize(t,e){if(t===this.w&&e===this.h)return;this.w=t,this.h=e,this.dispose();let n={type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!1},s=new ni(t,e);s.type=Tn,s.minFilter=s.magFilter=Ue,this.rtScene=new Oe(t,e,{...n,depthBuffer:!0,depthTexture:s,samples:this.samples}),this.rtAir=new Oe(t,e,n),this.rtHalf=new Oe(Math.max(2,t>>1),Math.max(2,e>>1),{...n,count:2,minFilter:Ue,magFilter:Ue}),this.rtDown=[],this.rtUp=[];for(let r=0;r<bl;r++){let a=Math.max(2,t>>r+1),l=Math.max(2,e>>r+1);this.rtDown.push(new Oe(a,l,n)),r<bl-1&&this.rtUp.push(new Oe(a,l,n))}}dispose(){for(let t of[this.rtScene,this.rtAir,this.rtHalf,...this.rtDown??[],...this.rtUp??[]])t?.dispose();this.rtScene?.depthTexture?.dispose()}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,s=[]){let r=this.renderer;r.setRenderTarget(this.rtScene),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let f of s)r.render(f.scene,f.camera),r.setRenderTarget(this.rtScene);let a=this.atmo.uniforms;a.tDepth.value=this.rtScene.depthTexture,a.uCam.value.set(n.pos[0]/1e3,n.pos[1]/1e3,n.pos[2]/1e3),a.uRight.value.set(...n.basis.right),a.uUp.value.set(...n.basis.up),a.uFwd.value.set(...n.basis.fwd),a.uTan.value.set(n.tanY*n.aspect,n.tanY),a.uShift.value.set(n.shift[0],n.shift[1]),a.uNear.value=n.near,a.uFar.value=n.far,a.uSun.value.copy(n.sun);let l=Math.hypot(n.pos[0],n.pos[1],n.pos[2])/1e3-6371,o=Math.min(Math.max((l-1500)/9e3,0),1);a.uThick.value=1+1.1*o*o*(3-2*o),this.pass(this.atmo,this.rtHalf);let h=this.comp.uniforms;h.tColor.value=this.rtScene.texture,h.tLight.value=this.rtHalf.textures[0],h.tThrough.value=this.rtHalf.textures[1],h.uPixAngle.value=2*n.tanY/this.h,this.pass(this.comp,this.rtAir);let u=this.rtAir;for(let f=0;f<bl;f++){let d=this.down.uniforms;d.tSrc.value=u.texture,d.uTexel.value.set(1/u.width,1/u.height),d.uThreshold.value=f===0?1.1:0,this.pass(this.down,this.rtDown[f]),u=this.rtDown[f]}for(let f=bl-2;f>=0;f--){let d=this.up.uniforms;d.tSrc.value=u.texture,d.tAdd.value=this.rtDown[f].texture,d.uTexel.value.set(1/u.width,1/u.height),this.pass(this.up,this.rtUp[f]),u=this.rtUp[f]}let c=this.final.uniforms;c.tColor.value=this.rtAir.texture,c.tBloom.value=u.texture,c.uTexel.value.set(1/this.w,1/this.h),this.pass(this.final,null)}};var ph={version:2,checked:"2026-11-12",what:"How the 3D city on the globe was built from Plato's Critias: which parts follow the text, with the passage, and which parts are our choices because the text is silent. The code is source/engine/city.js and source/engine/city/. Every mesh in the model names one id from this file.",text:{work:"Plato, Critias",translation:"R. G. Bury, Loeb Classical Library, 1929",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.",checked_against:"https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg032/tlg0059.tlg032.perseus-eng2.xml"},units:{stadion_m:185,plethron:"one sixth of a stadion",note:"The stadion is drawn at 185 m. data/plato.json lists the other lengths scholars use; the whole city scales with it."},from_text:[{id:"hill",what:"The city stands on a hill that is low on all sides, about 50 stadia from the sea",ref:"Critias 113c",quote:"at a distance of about 50 stades, there stood a mountain that was low on all sides",param:"hill"},{id:"rings",what:"Three rings of sea and two of land round a central hill",ref:"Critias 113d",quote:"he made circular belts of sea and land enclosing one another alternately, some greater, some smaller, two being of land and three of sea",param:"rings"},{id:"ring-widths",what:"Ring widths from the centre: water 1, land 2, water 2, land 3, water 3 stadia",ref:"Critias 115e",quote:"The greatest of the circles into which a boring was made for the sea was three stades in breadth, and the circle of land next to it was of equal breadth; and of the second pair of circles that of water was two stades in breadth and that of dry land equal again to the preceding one of water; and the circle which ran round the central island itself was of a stade's breadth.",param:"rings"},{id:"island",what:"Central island five stadia across",ref:"Critias 116a",quote:"this island, wherein stood the royal palace, was of five stades in diameter",param:"islandDiameter"},{id:"island-gardens",what:"The central island set in order by the god, bearing every kind of food",ref:"Critias 113e",quote:"producing out of the earth all kinds of food in plenty"},{id:"canal",what:"Canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stadia long",ref:"Critias 115d",quote:"beginning at the sea, they bored a channel right through to the outermost circle, which was three plethra in breadth, one hundred feet in depth, and fifty stades in length",param:"canalLength, canalWidthPlethra"},{id:"canal-mouth",what:"The mouth of the canal on the sea, wide enough for the largest ships",ref:"Critias 115d",quote:"they made the entrance to it from the sea like that to a harbor by opening out a mouth large enough for the greatest ships to sail through",drawn:!1,note:"At the sea, 50 stadia out: beyond the modelled ground. The canal's course is drawn as a line."},{id:"harbours",what:"Three harbours: the three rings of water",ref:"Critias 117d",quote:"after crossing the three outer harbors"},{id:"ship-passages",what:"Roofed passages for one trireme through the rings of land, beside the bridges",ref:"Critias 115d-e",quote:"through the circles of land, which divided those of sea, over against the bridges they opened out a channel leading from circle to circle, large enough to give passage to a single trireme; and this they roofed over above so that the sea-way was subterranean"},{id:"bridges",what:"Bridges over the rings of water, a plethron wide, with towers and gates",ref:"Critias 115c, 116a",quote:"the bridge, which was a plethrum in breadth \u2026 and upon the bridges on each side, over against the passages for the sea, they erected towers and gates",param:"bridgeWidthPlethra"},{id:"bridge-gates",what:"Towers and gates on the bridges, on each side, where the sea passes",ref:"Critias 116a",quote:"upon the bridges on each side, over against the passages for the sea, they erected towers and gates"},{id:"ring-walls",what:"A stone wall round the island, round each ring and along both sides of the bridge",ref:"Critias 116a",quote:"Now the island and the circles and the bridge, which was a plethrum in breadth, they encompassed round about, on this side and on that, with a wall of stone"},{id:"stone",what:"White, black and red stone, quarried on the spot",ref:"Critias 116a-b",quote:"the stone they quarried beneath the central island all round, and from beneath the outer and inner circles, some of it being white, some black and some red"},{id:"rock-docks",what:"Two docks cut into the rock",ref:"Critias 116b",quote:"while quarrying it they constructed two inner docks, hollowed out and roofed over by the native rock"},{id:"patterned-buildings",what:"Buildings of one colour of stone, and buildings patterned in white, black and red",ref:"Critias 116b",quote:"of the buildings some they framed of one simple color, in others they wove a pattern of many colors by blending the stones for the sake of ornament",shape:"ours"},{id:"walls",what:"Walls faced with brass (outer ring), tin (inner ring) and orichalcum (citadel)",ref:"Critias 116b-c",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle; and that of the inner one they coated with tin; and that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"wall-brass",what:"The wall round the outermost ring, covered with brass",ref:"Critias 116b",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle"},{id:"wall-tin",what:"The wall round the inner ring, coated with tin",ref:"Critias 116b",quote:"that of the inner one they coated with tin"},{id:"wall-orichalcum",what:"The wall round the acropolis, coated with orichalcum",ref:"Critias 116b-c",quote:"that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"palace",what:"The royal palace on the central island, enlarged by every king",ref:"Critias 115c-d",quote:"they made of it an abode amazing to behold for the magnitude and beauty of its workmanship",shape:"ours"},{id:"shrine",what:"Shrine of Cleito and Poseidon at the centre, inside a wall of gold; kept as holy ground",ref:"Critias 116c",quote:"In the center there stood a temple sacred to Cleito and Poseidon, which was reserved as holy ground, and encircled with a wall of gold",shape:"ours"},{id:"shrine-wall",what:"The wall of gold round the shrine of Cleito and Poseidon",ref:"Critias 116c",quote:"encircled with a wall of gold"},{id:"temple",what:"Temple of Poseidon: a stadion long, 3 plethra wide, silver outside, gold pinnacles",ref:"Critias 116d",quote:"the temple of Poseidon himself was a stade in length, three plethra in breadth, and of a height which appeared symmetrical therewith \u2026 All the exterior of the temple they coated with silver, save only the pinnacles, and these they coated with gold.",param:"templeLength, templeWidth"},{id:"pinnacles",what:"Gold on the pinnacles of the temple",ref:"Critias 116d",quote:"save only the pinnacles, and these they coated with gold"},{id:"temple-ceiling",what:"Inside the temple: a ceiling of ivory, varied with gold, silver and orichalcum",ref:"Critias 116d",quote:"they made the roof all of ivory in appearance, variegated with gold and silver and orichalcum"},{id:"temple-interior",what:"Inside the temple: walls, pillars and floor covered with orichalcum",ref:"Critias 116d",quote:"all the rest of the walls and pillars and floors they covered with orichalcum"},{id:"poseidon",what:"A gold Poseidon in a chariot with six winged horses, his head touching the roof",ref:"Critias 116d-e",quote:"golden statues, one being that of the God standing on a chariot and driving six \u2026 winged steeds, his own figure so tall as to touch the ridge of the roof"},{id:"nereids",what:"A hundred Nereids on dolphins round him",ref:"Critias 116e",quote:"round about him a hundred Nereids on dolphins"},{id:"votive-inside",what:"Many other statues inside, given by private men",ref:"Critias 116e",quote:"it contained also many other images, the votive offerings of private men",shape:"ours"},{id:"pillar",what:"A pillar of orichalcum inside the temple, with the laws on it",ref:"Critias 119c-d",quote:"a pillar of orichalcum, which was placed within the temple of Poseidon in the center of the island"},{id:"statues",what:"Gold statues of the kings and their wives round the temple",ref:"Critias 116e",quote:"outside, round about the temple, there stood images in gold of all the princes, both themselves and their wives"},{id:"votive-outside",what:"Other offerings round the temple, from kings, citizens and subject peoples",ref:"Critias 116e",quote:"together with many other votive offerings both of the kings and of private persons",shape:"ours"},{id:"altar",what:"The altar, matching the temple in size and workmanship",ref:"Critias 117a",quote:"in respect of its size and its workmanship, harmonized with its surroundings",shape:"ours"},{id:"bulls",what:"Bulls loose in the precinct of Poseidon",ref:"Critias 119d",quote:"In the sacred precincts of Poseidon there were bulls at large",drawn:!1,note:'No animals or people are drawn; see the choice "no-figures".'},{id:"springs",what:"A hot and a cold spring on the central island, with buildings and trees round them",ref:"Critias 113e, 117a-b",quote:"The springs they made use of, one kind being of cold, another of warm water \u2026 these they surrounded with buildings and with plantations of trees",shape:"ours"},{id:"reservoirs",what:"Basins round the springs, some open to the sky and some roofed for hot baths in winter",ref:"Critias 117b",quote:"they set reservoirs round about, some under the open sky, and others under cover to supply hot baths in the winter",shape:"ours"},{id:"baths",what:"Separate baths for the kings, for citizens, for women, and for horses and beasts of burden",ref:"Critias 117b",quote:"they put separate baths for the kings and for the private citizens, besides others for women, and others again for horses and all other beasts of burden",shape:"ours"},{id:"grove",what:"The sacred grove of Poseidon",ref:"Critias 117b",quote:"the sacred grove of Poseidon, which contained trees of all kinds that were of marvellous beauty and height"},{id:"aqueducts",what:"Channels that carry the spring water to the outer rings by the bridges",ref:"Critias 117b",quote:"by means of channels they led the water to the outer circles over against the bridges",shape:"ours"},{id:"ring-buildings",what:"Temples, gardens, exercise grounds and barracks on the rings of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods, and many gardens and many exercising grounds \u2026 in each of the circular belts of island"},{id:"ring-temples",what:"Many temples on each ring of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods",shape:"ours"},{id:"gardens",what:"Many gardens on each ring of land",ref:"Critias 117c",quote:"and many gardens and many exercising grounds"},{id:"gymnasia",what:"Exercise grounds for men on each ring of land",ref:"Critias 117c",quote:"many exercising grounds, some for men and some set apart for horses",shape:"ours"},{id:"horse-grounds",what:"Exercise grounds for horses, kept apart, on each ring of land",ref:"Critias 117c",quote:"some set apart for horses, in each of the circular belts of island",shape:"ours"},{id:"racecourse",what:"Racecourse a stadion wide, running round the middle of the larger ring",ref:"Critias 117c",quote:"in the center of the large island a racecourse laid out for horses, which was a stade in width, while as to length, a strip which ran round the whole circumference",param:"racecourseWidth"},{id:"barracks",what:"Barracks for most of the spearmen on both sides of the racecourse",ref:"Critias 117c",quote:"round about it, on this side and on that, were barracks for the greater part of the spearmen",shape:"ours"},{id:"guard-house",what:"The guard house of the more trusted spearmen, on the smaller ring",ref:"Critias 117c-d",quote:"was posted in the smaller circle, which was nearer the acropolis",shape:"ours"},{id:"guard-dwellings",what:"Dwellings of the most trusted guards, on the acropolis round the kings",ref:"Critias 117d",quote:"had dwellings granted to them within the acropolis round about the persons of the kings",shape:"ours"},{id:"shipyards",what:"Shipyards full of triremes and their gear",ref:"Critias 117d",quote:"the shipyards were full of triremes and all the tackling that belongs to triremes",shape:"ours"},{id:"merchant-ships",what:"Merchant ships filling the canal and the largest harbour",ref:"Critias 117e",quote:"the sea-way and the largest harbor were filled with ships and merchants coming from all quarters",shape:"ours"},{id:"outer-wall",what:"Outer wall 50 stadia from the largest ring, its ends meeting at the canal's mouth on the sea",ref:"Critias 117e",quote:"a wall which began at the sea and ran round in a circle, at a uniform distance of fifty stades from the largest circle and harbor, and its ends converged at the seaward mouth of the channel",param:"outerWallDistance"},{id:"houses",what:"The town inside the outer wall: many houses set close together",ref:"Critias 117e",quote:"The whole of this wall had numerous houses built on to it, set close together",note:'Bury makes the houses line the wall. The Greek is "touto de pan synoikeito hypo pollon kai pyknon oikeseon": all of this was settled with many dense dwellings, which Jowett gives as "The entire area was densely crowded with habitations". We draw the area filled, after the Greek and Jowett.'},{id:"faces-south",what:"The sea lies south of the city",ref:"Critias 118a-b",quote:"this region, all along the island, faced towards the South and was sheltered from the Northern blasts",param:"seaBearing"}],choices:[{id:"stadion",what:"185 m to the stadion",why:"Plato gives stadia, not metres. Lengths from about 157 m to 192 m are used by scholars. The whole city scales with this number."},{id:"style",what:"One style throughout: Greek building forms of Plato's own century (columns, gabled roofs with tiles, ashlar walls with battlements), made strange by the materials the text gives: three colours of stone laid in bands and patterns, and metal skins on walls and temple",why:'Plato wrote about 360 BCE for Athenian readers and uses Greek building words (teichos, pyrgoi, pylai, neosoikoi, gymnasia, hippodromos, neos). He sets the city 9,000 years earlier and says of the temple that "there was something of the barbaric in its appearance" (116d). Rings of wall, each differently coloured and the innermost coated in silver and gold, are what Herodotus (1.98) reports of Ecbatana, the Median capital: a picture of eastern royal splendour his readers knew. So the forms are Greek and the surfaces are the foreign part. This is a drawing of how a Greek reader could have pictured it, not of any real place.',sources:[{what:"Herodotus, Histories 1.98, tr. A. D. Godley (1920): the seven ringed walls of Ecbatana, their battlements white, black, purple, blue, orange, silver and gold",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D98",read:"2026-11-12"}]},{id:"heights",what:"Heights: banks 8 m above the water with a quay 2 m above it, the hill 24 m above the banks, walls 11 m with towers to 17 m, gate towers 21 m",why:'The text says only that the lips of the rings stood "a sufficient height above the level of the sea" for a roofed ship passage (115e), and gives no wall heights. The banks are as high as a trireme without its mast needs to pass under a roof of rock.'},{id:"walls-both-shores",what:"Each ring of land has a wall on both shores, set back from the water behind a harbour strip, and both are faced in that ring's metal on the side towards the water",why:`116a puts the walls round the island, the rings and the bridge "on this side and on that"; 116b names one wall per ring for the metal. We wall both shores and face both in that ring's metal.`},{id:"wall-towers",what:"Towers at intervals along the ring walls, battlements and a walk on top",why:"Towers and gates are stated only for the bridges (116a). A Greek city wall of Plato's time had towers and a crenellated walk."},{id:"metal-look",what:'How the metals look: brass a yellow gold-brown, tin a soft grey-white, orichalcum a red gold "sparkling like fire", silver and gold bright; all slightly weathered sheet, with seams',why:'The text names the metals and says the brass was put on "as though with plaster" (116b). Orichalcum is unknown ("now known only by name", 114e); a red-gold copper alloy is the usual guess.'},{id:"road-offset",what:"One straight road from the town to the palace, 96 m east of the canal's line; the roofed ship passages through the rings of land are on the canal's line",why:'Bridges and ship passages are "over against" each other (115e, 116a). Their exact relation is not given. Ships come up the canal and go straight on through the passages; the road and its bridges run beside them.'},{id:"bridge-form",what:"Bridges of stone on piers with flat spans, a parapet wall each side, the water channel under the roadway",why:"The text gives only the width, a plethron (116a), the walls on both sides and the towers and gates. Greek bridges of the time were piers with corbelled or lintelled openings; the arch was not in general use."},{id:"gate-form",what:"Each bridge end has two towers with a gate between, the gate leaves faced in the ring's metal",why:"116a states towers and gates, no form."},{id:"aqueduct-form",what:"The spring water crosses each bridge in a covered stone channel along the parapet, and falls into basins on the rings",why:'117b says channels led the water to the outer rings by the bridges (Jowett: "by aqueducts along the bridges"). Their form is not given.'},{id:"quays",what:"A level harbour strip at quay height between the water and the foot of each bank, with mooring posts, storehouses on the merchants' harbour and steps up the banks",why:'Not described. Harbours "full of ships" (117e) need them.'},{id:"rock-dock-place",what:"The two rock-cut docks open off the innermost ring of water, in the flank of the central island, as two pairs of roofed slips",why:"116b: two inner docks hollowed out and roofed by the rock, made while quarrying under the island and the rings. The Greek (neosoikous koilous diplous entos) can also be read as double ship sheds. Where they were is not said."},{id:"ship-sheds",what:"Rows of roofed ship sheds on slipways along the three inner harbour strips, each 40 m by 7.4 m, in groups of six",why:"The text has shipyards full of triremes (117d), not their layout. Sheds are sized to the trireme we draw."},{id:"triremes",what:"Triremes about 37 m long and 5.5 m in beam, with a ram, three banks of oars, one mast and an upturned stern",why:"Plato says triremes (115e, 117d) and nothing of their shape. The form follows the Athenian trireme of his own time as rebuilt in the trial ship Olympias.",sources:[{what:"Olympias, the reconstruction of an Athenian trireme (built 1985 to 1987 to John Coates's drawings; 170 oars in three banks; bronze ram)",url:"https://en.wikipedia.org/wiki/Olympias_(trireme)",read:"2026-11-12"}]},{id:"merchantmen",what:"Round-hulled merchant ships 14 to 24 m long with one square sail",why:'117e says only "ships and merchants coming from all quarters".'},{id:"temple-form",what:"Poseidon's temple as a Greek temple with a colonnade all round, on four steps in the three stones, 11 by 22 columns, with a sun disc of gold in each gable",why:"Plato gives its size and metals and says it looked somewhat barbaric (116d). Its form is not described. A stadion by three plethra (185 by 92.5 m) is far larger than any Greek temple; the columns here are 3.4 m thick and 30 m high."},{id:"temple-height",what:"The temple is 41 m to the top of the cornice and 54 m to the ridge",why:'116d: "of a height which appeared symmetrical therewith". We use the proportion of height to width on the front of the Parthenon, 4 to 9.',sources:[{what:"Parthenon: a 4:9 proportion in the elevation",url:"https://en.wikipedia.org/wiki/Parthenon",read:"2026-11-12"}]},{id:"pinnacle-form",what:"The pinnacles are the ornaments on the ridge ends and corners of the roof (akroteria), as tall finials",why:"The Greek word is akroteria. Their shape is not given."},{id:"temple-interior-layout",what:"Inside: one great room with two rows of pillars, Poseidon's chariot at the far end facing the door, the Nereids in rows down both sides, the pillar of the laws before the statue",why:"116d-e and 119c-d list what was inside, not where it stood."},{id:"figure-form",what:"Statues are drawn as plain, smooth figures without faces or detail",why:"We will not invent portraits. The text gives their material (gold) and who they are."},{id:"counts",what:"Numbers: 60 royal statues round the temple, some 30 other offerings, 24 statues inside, towers, ships, sheds, buildings and trees",why:"Not given, except 100 Nereids (116e) and 1,200 ships for the whole fleet (119b). Ten kings and their wives over many generations would be more statues than we draw."},{id:"altar-form",what:"A long stepped altar of white stone before the east front of the temple, 46 m long",why:"117a says only that it matched its surroundings in size and workmanship."},{id:"shrine-form",what:"The shrine of Cleito and Poseidon is a round building with a ring of columns and an open eye in its roof; the wall of gold is 4.5 m high and has a gate towards the sea",why:`116c: holy ground, kept closed (abaton), inside a wall of gold. Nothing more: no shape and no size for either. A round building is one of the forms Greek builders used for a holy place. The gate and the open door are ours, because the shrine is used as this community's hall (see "hall").`},{id:"palace-plan",what:"The palace as ranges of two storeys round courts north of the shrine, with a great hall behind a porch of red columns and a taller hall behind it",why:"115c-d: each king added to it. No plan is given."},{id:"baths-layout",what:"Two round spring houses, two open basins and two roofed ones, three bath buildings round courts and a long trough hall for horses, in the north-east of the island; a stone channel carries the outflow to the grove and to the bridge",why:"117a-b lists them, without a plan."},{id:"grove-trees",what:"The grove: tall cypresses, planes and pines; gardens: olives, fruit trees and vines in rows",why:`117b: "trees of all kinds" of great height and beauty. 115a-b lists the island's fruits. The kinds drawn are Mediterranean, which is a choice.`},{id:"ring-layout",what:"How the rings of land are laid out: temples in walled precincts, gymnasia as colonnaded courts, horse grounds as fenced paddocks, gardens between, a road round each ring",why:"117c lists them and puts the racecourse in the middle of the larger ring with barracks on both sides. The rest of the plan is ours."},{id:"racecourse-form",what:"The racecourse as a sand track a stadion wide between low stone kerbs, with a ring of marker columns down its middle and stone seats by the road",why:"117c gives its width and that it ran round the whole ring."},{id:"house-form",what:"Houses of one and two storeys in blocks round yards, plastered, with tiled roofs, sixteen avenues leading to the harbour",why:"Not described."},{id:"extent",what:"Only the rings and the town within 2.5 stadia of the harbour are modelled, on made ground that ends in a grass bank; the outer wall and the rest of the canal are drawn as lines over the real land",why:"The wall is 50 stadia out (117e), so the whole city is about 23 km across. Levelling that much ground would hide the place it stands on."},{id:"houses-reading",what:"The town fills the ground inside the outer wall, rather than lining the wall",why:'Translations differ at 117e: see the entry "houses". The modelled band shows the nearest part of it.'},{id:"no-figures",what:"No people or animals are drawn",why:"The text has crowds, merchants, spearmen, horses and bulls loose in the precinct (119d). Figures would be invention at every step, and badly drawn ones spoil the scale. Doors, steps, ships and trees give the scale instead."},{id:"water",what:"The water in the rings is calm sea water about 30 m deep, clear enough to see the quay foot",why:"The canal is 100 feet deep (115d). The depth of the rings is not given."},{id:"plain",what:"The great plain, its ditch and canals are not modelled",why:"They are described (118a-e: a plain 3,000 by 2,000 stadia, a ditch a stadion wide and 10,000 stadia long) and are still to do."},{id:"hall",what:"The shrine stands open, and inside it is this community's hall: the research on its wall, a globe on its table",why:"Plato says only that the shrine stood in the centre, was reserved as holy ground, and had a wall of gold round it (116c). He gives it no shape and says nothing of its inside. We made the one closed place in the text the room where the search is shown and people meet. Nothing inside it is from the text."},{id:"home-site",what:"When nobody has stood it anywhere, the city stands on the open Atlantic at 35.3\xB0N, 9.9\xB0W, its canal running south",why:"The text says only that the island lay in front of the Pillars of Heracles, out in the Atlantic (Timaeus 24e). No island is there: the elevation tiles the globe uses put the sea floor at that spot 3,762 m down. The city is set where the words point so that no place anyone has proposed is favoured. It can be stood on any of them instead."}],shape_note:`An entry with "shape": "ours" is stated by Plato, but he gives it no size or form, so everything about how it is drawn is our choice. The page's text-only view draws those pale, together with the choices. An entry with "drawn": false is in the text and not in the model.`};var Ml={stadion:185,islandDiameter:5,rings:[["water",1],["land",2],["water",2],["land",3],["water",3]],canalLength:50,canalWidthPlethra:3,bridgeWidthPlethra:1,templeLength:1,templeWidth:.5,racecourseWidth:1,outerWallDistance:50,bank:8,hill:24,wallHeight:11,wallThickness:4.5,seaBearing:180,modelledTown:2.5},Vd=(i={})=>{let t={...Ml,...i},e=t.stadion,n=e/6,s=e/185,r=[t.islandDiameter/2*e];for(let[,mt]of t.rings)r.push(r[r.length-1]+mt*e);let[a,l,o,h,u,c]=r,f=t.bank,d=2,p=t.wallHeight,v=t.wallThickness,g=t.canalWidthPlethra*n/2,m=t.bridgeWidthPlethra*n/2,x={isle:12*s,r1in:46*s,r1out:46*s,r2in:46*s,r2out:40*s,town:36*s},_=a-x.isle,b=l+x.r1in,M=o-x.r1out,C=h+x.r2in,y=u-x.r2out,T=c+x.town,k=c+t.modelledTown*e,S=k+70*s,G=c+t.outerWallDistance*e,Z=g+m+34*s,st=7.5,N=f+t.hill,V=a*.6,O=a*.76,Y=N-5,ot=f+3,et=Math.sqrt(V*V-Z*Z),pt=O+44*s,dt=(C+y)/2,at=t.racecourseWidth*e/2,R=mt=>Math.sqrt(Math.max(0,mt*mt-Z*Z)),E=[[R(_),R(b)],[R(M),R(C)],[R(y),R(T)]],H=mt=>Math.abs(mt-Z)<=m,X=mt=>mt<=V?N:mt<=O?Y+(ot-Y)*(mt-V)/(O-V):f,ct=(mt,U,ht)=>{let j=Math.hypot(mt,U),Q=(bt,It)=>(ht&&(ht.kind=It),bt);if(j>S)return null;let it=-U;if(H(mt)&&it>0){for(let[bt,It]of E)if(it>=bt-1&&it<=It+1)return Q(f,"bridge");if(it<=pt&&it>=et)return Q(N+(f-N)*(it-et)/(pt-et),"ramp")}return j<=_?Q(X(j),j<=V?"plateau":j<=O?"slope":"island"):j<=a?Q(d,"quay"):j<l?Q(0,"water"):j<=b||j>=M&&j<=o?Q(Math.abs(mt)<st&&it>0?0:d,"quay"):j<=M?Q(f,"ring-inner"):j<h?Q(0,"water"):j<=C||j>=y&&j<=u?Q(Math.abs(mt)<st&&it>0?0:d,"quay"):j<=y?Q(f,Math.abs(j-dt)<at?"racecourse":"ring-outer"):j<c||Math.abs(mt)<g&&it>0?Q(0,"water"):j<=T?Q(d,"quay"):j<=k?Q(f,"town"):Q(f+(-3-f)*(j-k)/(S-k),"bank")},q=-Math.PI/2;return{SEA:q,roadAngle:mt=>q+Math.asin(Math.min(1,Z/mt)),arcsExcept:mt=>{let U=mt.map(([j,Q])=>{let it=j-Q;return it=(it%(2*Math.PI)+2*Math.PI)%(2*Math.PI),[it,it+2*Q]}).sort((j,Q)=>j[0]-Q[0]);if(!U.length)return[[0,2*Math.PI]];let ht=[];for(let j=0;j<U.length;j++){let Q=U[j][1],it=j+1<U.length?U[j+1][0]:U[0][0]+2*Math.PI;it-Q>1e-6&&ht.push([Q,it])}return ht},P:t,S:e,k:s,plethron:n,shores:r,rIsle:a,rW1:l,rL1:o,rW2:h,rL2:u,rW3:c,B:f,Q:d,H:p,T:v,canalHalf:g,bridgeHalf:m,strip:x,rA:_,r1a:b,r1b:M,r2a:C,r2b:y,rT:T,core:k,edge:S,rWall:G,off:Z,tunnelHalf:st,Zp:N,Rp:V,Rs:O,zSlopeTop:Y,zSlopeFoot:ot,rampTop:et,rampFoot:pt,rcMid:dt,rcHalf:at,along:R,bridges:E,onRoad:H,islandZ:X,groundZ:ct}};var re=Math.PI*2,Hn=i=>()=>(i=i*1664525+1013904223>>>0)/4294967296;var vi=class{constructor(){this.c=1,this.s=0,this.x=0,this.y=0,this.z=0}set(t=0,e=0,n=0,s=0){return this.c=Math.cos(s),this.s=Math.sin(s),this.x=t,this.y=e,this.z=n,this}push(t,e,n,s=0){let r=[this.c,this.s,this.x,this.y,this.z],a=Math.cos(s),l=Math.sin(s),o=this.x+this.c*t-this.s*e,h=this.y+this.s*t+this.c*e,u=this.c*a-this.s*l,c=this.s*a+this.c*l;return this.c=u,this.s=c,this.x=o,this.y=h,this.z+=n,r}pop(t){[this.c,this.s,this.x,this.y,this.z]=t}},xi=class{constructor(t,e){this.F=t,this.id=e,this.cap=1024,this.icap=2048,this.pos=new Float32Array(this.cap*3),this.nrm=new Int8Array(this.cap*4),this.col=new Uint8Array(this.cap*4),this.idx=new Uint32Array(this.icap),this.nv=0,this.ni=0,this.s=0,this.r=255,this.g=255,this.b=255}surf(t,e){return this.s=t,e?(this.r=e[0],this.g=e[1],this.b=e[2]):this.r=this.g=this.b=255,this}room(t,e){if(this.nv+t>this.cap){for(;this.nv+t>this.cap;)this.cap*=2;let n=new Float32Array(this.cap*3);n.set(this.pos.subarray(0,this.nv*3)),this.pos=n;let s=new Int8Array(this.cap*4);s.set(this.nrm.subarray(0,this.nv*4)),this.nrm=s;let r=new Uint8Array(this.cap*4);r.set(this.col.subarray(0,this.nv*4)),this.col=r}if(this.ni+e>this.icap){for(;this.ni+e>this.icap;)this.icap*=2;let n=new Uint32Array(this.icap);n.set(this.idx.subarray(0,this.ni)),this.idx=n}}v(t,e,n,s,r,a,l=1){this.room(1,0);let o=this.F,h=this.nv,u=h*3,c=h*4;return this.pos[u]=o.x+o.c*t-o.s*e,this.pos[u+1]=o.y+o.s*t+o.c*e,this.pos[u+2]=o.z+n,this.nrm[c]=(o.c*s-o.s*r)*127,this.nrm[c+1]=(o.s*s+o.c*r)*127,this.nrm[c+2]=a*127,this.col[c]=this.r*l,this.col[c+1]=this.g*l,this.col[c+2]=this.b*l,this.col[c+3]=this.s,this.nv++}tri3(t,e,n){this.room(0,3),this.idx[this.ni++]=t,this.idx[this.ni++]=e,this.idx[this.ni++]=n}quad4(t,e,n,s){this.room(0,6);let r=this.idx,a=this.ni;r[a++]=t,r[a++]=e,r[a++]=n,r[a++]=t,r[a++]=n,r[a++]=s,this.ni=a}quad(t,e,n,s,r=1,a=r,l=a,o=r){let h=e[0]-t[0],u=e[1]-t[1],c=e[2]-t[2],f=s[0]-t[0],d=s[1]-t[1],p=s[2]-t[2],v=u*p-c*d,g=c*f-h*p,m=h*d-u*f,x=Math.hypot(v,g,m)||1;v/=x,g/=x,m/=x;let _=this.v(t[0],t[1],t[2],v,g,m,r);return this.v(e[0],e[1],e[2],v,g,m,a),this.v(n[0],n[1],n[2],v,g,m,l),this.v(s[0],s[1],s[2],v,g,m,o),this.quad4(_,_+1,_+2,_+3),this}tri(t,e,n,s=1,r=s,a=s){let l=e[0]-t[0],o=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],d=o*f-h*c,p=h*u-l*f,v=l*c-o*u,g=Math.hypot(d,p,v)||1;d/=g,p/=g,v/=g;let m=this.v(t[0],t[1],t[2],d,p,v,s);return this.v(e[0],e[1],e[2],d,p,v,r),this.v(n[0],n[1],n[2],d,p,v,a),this.tri3(m,m+1,m+2),this}wall(t,e,n,s,r,a,l=1,o=l){return this.quad([t,e,r],[n,s,r],[n,s,a],[t,e,a],l,l,o,o)}slab(t,e,n,s,r,a=0,l=1){let o=Math.cos(a)/2,h=Math.sin(a)/2,u=o*s,c=h*s,f=-h*r,d=o*r;return this.quad([t-u-f,e-c-d,n],[t+u-f,e+c-d,n],[t+u+f,e+c+d,n],[t-u+f,e-c+d,n],l)}box(t,e,n,s,r,a,l=0,{top:o=!0,bottom:h=!1,foot:u=1,head:c=u,sides:f=15,topShade:d=1}={}){let p=Math.cos(l)/2,v=Math.sin(l)/2,g=p*s,m=v*s,x=-v*r,_=p*r,b=n+a,M=[[t-g-x,e-m-_],[t+g-x,e+m-_],[t+g+x,e+m+_],[t-g+x,e-m+_]];for(let C=0;C<4;C++)if(f&1<<C){let y=M[C],T=M[(C+1)%4];this.wall(y[0],y[1],T[0],T[1],n,b,u,c)}return o&&this.quad([M[0][0],M[0][1],b],[M[1][0],M[1][1],b],[M[2][0],M[2][1],b],[M[3][0],M[3][1],b],d),h&&this.quad([M[3][0],M[3][1],n],[M[2][0],M[2][1],n],[M[1][0],M[1][1],n],[M[0][0],M[0][1],n],u*.6),this}sweep(t,{arcs:e=[[0,re]],step:n=8,sense:s=1}={}){let r=Math.max(...t.map(a=>a[0]),1);for(let[a,l]of e){let o=Math.max(2,Math.ceil((l-a)*r/n));for(let h=0;h<t.length-1;h++){let u=t[h],c=t[h+1];if(Math.abs(u[0]-c[0])<1e-6&&Math.abs(u[1]-c[1])<1e-6)continue;let f=u[2]??1,d=c[2]??1;for(let p=0;p<o;p++){let v=a+(l-a)*p/o,g=a+(l-a)*(p+1)/o,m=Math.cos(v),x=Math.sin(v),_=Math.cos(g),b=Math.sin(g),M=[u[0]*m,u[0]*x,u[1]],C=[u[0]*_,u[0]*b,u[1]],y=[c[0]*_,c[0]*b,c[1]],T=[c[0]*m,c[0]*x,c[1]];s>0?this.quad(M,C,y,T,f,f,d,d):this.quad(C,M,T,y,f,f,d,d)}}}return this}shaft(t,e,n,s,r,a,l=12,{foot:o=1,head:h=o,cap:u=!1,phase:c=0}={}){for(let f=0;f<l;f++){let d=c+f/l*re,p=c+(f+1)/l*re,v=Math.cos(d),g=Math.sin(d),m=Math.cos(p),x=Math.sin(p);this.quad([t+s*v,e+s*g,n],[t+s*m,e+s*x,n],[t+r*m,e+r*x,n+a],[t+r*v,e+r*g,n+a],o,o,h,h),u&&this.tri([t,e,n+a],[t+r*v,e+r*g,n+a],[t+r*m,e+r*x,n+a],h)}return this}turned(t,e,n,s,r=8,{squash:a=1,rot:l=0,shade:o=1}={}){let h=this.nv,u=s.length;for(let c=0;c<u;c++){let[f,d]=s[c],p=s[Math.max(0,c-1)],v=s[Math.min(u-1,c+1)],g=v[0]-p[0],m=v[1]-p[1],x=Math.hypot(g,m)||1,_=m/x,b=-g/x;for(let M=0;M<r;M++){let C=l+M/r*re,y=Math.cos(C),T=Math.sin(C)*a;this.v(t+f*y,e+f*T,n+d,_*y,_*Math.sin(C),b,o)}}for(let c=0;c<u-1;c++)for(let f=0;f<r;f++){let d=h+c*r+f,p=h+c*r+(f+1)%r;this.quad4(d,p,p+r,d+r)}return this}loft(t,{closed:e=!1,flip:n=!1,shade:s=1}={}){let r=this.nv,a=t.length,l=t[0].length;for(let h=0;h<a;h++)for(let u=0;u<l;u++){let c=t[h][u],f=t[Math.min(a-1,h+1)][u],d=t[Math.max(0,h-1)][u],p=t[h][e?(u+1)%l:Math.min(l-1,u+1)],v=t[h][e?(u+l-1)%l:Math.max(0,u-1)],g=f[0]-d[0],m=f[1]-d[1],x=f[2]-d[2],_=p[0]-v[0],b=p[1]-v[1],M=p[2]-v[2],C=m*M-x*b,y=x*_-g*M,T=g*b-m*_,k=(Math.hypot(C,y,T)||1)*(n?-1:1);this.v(c[0],c[1],c[2],C/k,y/k,T/k,c[3]??s)}let o=e?l:l-1;for(let h=0;h<a-1;h++)for(let u=0;u<o;u++){let c=r+h*l+u,f=r+h*l+(u+1)%l;n?this.quad4(c,f,f+l,c+l):this.quad4(c,c+l,f+l,f)}return this}geometry(){let t=new Be;return t.setAttribute("position",new Le(this.pos.slice(0,this.nv*3),3)),t.setAttribute("normal",new Le(this.nrm.slice(0,this.nv*4),4,!0)),t.setAttribute("aTint",new Le(this.col.slice(0,this.nv*4),4,!0)),t.setIndex(new Le(this.nv>65535?this.idx.slice(0,this.ni):new Uint16Array(this.idx.subarray(0,this.ni)),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Sl=class{constructor(){this.F=new vi,this.bins=new Map}to(t){let e=this.bins.get(t);return e||this.bins.set(t,e=new xi(this.F,t)),e}proto(t){return new xi(new vi,t)}},Ni=(i,t,e)=>{let n=new kr(i,t,e.length),s=new xe,r=new Wn,a=new ei,l=new ft,o=new ft,h=new se,u=!1;return e.forEach((c,f)=>{a.set(c.tilt??0,0,c.rot??0,"ZXY"),r.setFromEuler(a),l.set(c.sx??1,c.sy??c.sx??1,c.sz??c.sx??1),o.set(c.x,c.y,c.z??0),n.setMatrixAt(f,s.compose(o,r,l)),c.tint?(u=!0,n.setColorAt(f,h.setRGB(c.tint[0]/255,c.tint[1]/255,c.tint[2]/255,Ie))):u&&n.setColorAt(f,h.setRGB(1,1,1))}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.computeBoundingBox(),n};var ri=["ashlar","paving","tiles","plaster","metal","grass","sand","wood","rock","leaf"],$x=Object.fromEntries(ri.map((i,t)=>[i,t])),Qe=(i,t,e={})=>({layer:$x[i],size:t,metal:0,rough:1,bump:1,pattern:0,wet:1,keep:0,...e}),Tl={stone:Qe("ashlar",3.6),stoneBands:Qe("ashlar",3.6,{pattern:1}),stoneChequer:Qe("ashlar",3.6,{pattern:2}),stoneCourses:Qe("ashlar",3.6,{pattern:3}),smooth:Qe("plaster",5,{rough:.8,bump:.5}),rock:Qe("rock",9,{bump:1.3}),paving:Qe("paving",7),plaster:Qe("plaster",4.5,{bump:.7}),tiles:Qe("tiles",2.6,{keep:1,wet:0}),metal:Qe("metal",4.6,{metal:.72,rough:1.5,wet:0}),gilt:Qe("metal",3.1,{metal:.8,rough:1.15,bump:.3,wet:0}),grass:Qe("grass",7,{keep:1}),sand:Qe("sand",6,{keep:1}),earth:Qe("sand",8,{keep:0}),wood:Qe("wood",2.6,{keep:1}),leaf:Qe("leaf",5.5,{keep:1,wet:0,bump:1.6}),cloth:Qe("plaster",2.2,{wet:0,bump:.4}),dark:Qe("rock",9,{bump:.4,wet:0}),ivory:Qe("plaster",6,{rough:.55,bump:.3,wet:0})},ua=Object.keys(Tl),tt=Object.fromEntries(ua.map((i,t)=>[i,t])),W={white:[226,219,203],black:[70,70,76],red:[150,78,58],brass:[205,160,72],tin:[196,201,204],orichalcum:[226,118,62],silver:[224,228,232],gold:[246,190,78],plaster:[[232,224,207],[222,208,184],[212,193,164],[226,214,196],[204,182,152],[236,230,218]],tile:[[255,255,255],[240,222,205],[226,204,186],[255,240,226]],wood:[150,118,86],darkWood:[92,70,50],hull:[78,60,44],sail:[232,222,198],ivory:[244,236,214],leaf:[[78,104,58],[92,116,66],[66,92,52],[104,122,70]],cypress:[[40,66,42],[48,74,46],[34,58,38]],olive:[[118,132,96],[104,120,88]],trunk:[96,78,60],shade:[26,26,28],sand:[255,255,255],water:[255,255,255]},mh=["canal","merchant-ships","houses","harbours","bridges","bridge-gates","aqueducts","wall-brass","ship-passages","racecourse","barracks","horse-grounds","gymnasia","gardens","ring-temples","patterned-buildings","shipyards","wall-tin","guard-house","rock-docks","wall-orichalcum","guard-dwellings","springs","reservoirs","baths","grove","palace","shrine","shrine-wall","altar","statues","votive-outside","temple","pinnacles","temple-interior","temple-ceiling","poseidon","nereids","votive-inside","pillar"],Ow=[...mh,"hall","rings","island","hill","island-gardens","stone","ring-walls","quays","outer-wall","extent","ship-sheds","triremes","merchantmen","wall-towers","bridge-form","gate-form","palace-plan","house-form","grove-trees","ring-layout","racecourse-form","rock-dock-place","road-offset","temple-form","figure-form"];var Ze=(i,t)=>[Math.min(255,i[0]*t),Math.min(255,i[1]*t),Math.min(255,i[2]*t)],as=(i,t,e,n,s,r,{n:a=12,surf:l=tt.smooth,tint:o=W.white,base:h=!1,shade:u=1,simple:c=!1}={})=>{if(i.surf(l,o),c){c==="pier"?i.box(t,e,n,s*2,s*2,r,0,{top:!1,foot:.8*u,head:.95*u}):(i.shaft(t,e,n,s,s*.82,r-s*.5,6,{foot:.82*u,head:.95*u}),i.box(t,e,n+r-s*.5,s*2.5,s*2.5,s*.5,0,{foot:.9*u,top:!1,bottom:!0}));return}let f=s*.55,d=s*.42,p=r-f-d,v=n;h&&(i.shaft(t,e,n,s*1.3,s*1.3,s*.35,a,{foot:.8*u,head:u,cap:!0}),v+=s*.35),i.shaft(t,e,v,s,s*.8,p-(v-n),a,{foot:.82*u,head:.95*u}),i.shaft(t,e,n+p,s*.8,s*1.22,f,a,{foot:.8*u,head:u}),i.box(t,e,n+p+f,s*2.7,s*2.7,d,0,{foot:.9*u,topShade:.7*u})},Rs=(i,t,e,n,s,r,a,l,o,h)=>{for(let u=0;u<a;u++){let c=a>1?u/(a-1):.5;as(i,t+(n-t)*c,e+(s-e)*c,r,l,o,h)}},Al=(i,t,e,n,s,{over:r=.6,tile:a=W.tile[0],wall:l=[tt.plaster,W.plaster[0]],thick:o=.28,ridgeAlongY:h=!1}={})=>{let u=i.F,c=h?u.push(0,0,0,Math.PI/2):null;h&&([t,e]=[e,t]);let f=t/2+r*.5,d=e/2+r,p=s*r/(e/2),v=n-p,g=n+s;i.surf(tt.tiles,a),i.quad([-f,-d,v],[f,-d,v],[f,0,g],[-f,0,g],.92,.92,1,1),i.quad([f,d,v],[-f,d,v],[-f,0,g],[f,0,g],.92,.92,1,1),i.surf(tt.tiles,Ze(a,.7)),i.wall(-f,-d,f,-d,v-o,v,.7,.85),i.wall(f,d,-f,d,v-o,v,.7,.85);for(let m of[-1,1]){let x=m*f,_=[x,-d,v],b=[x,0,g],M=[x,d,v],C=y=>[y[0],y[1],y[2]-o];m>0?(i.quad(C(_),C(b),b,_,.75),i.quad(C(b),C(M),M,b,.75)):(i.quad(C(b),C(_),_,b,.75),i.quad(C(M),C(b),b,M,.75))}i.surf(tt.wood,W.darkWood),i.quad([f,-d,v-o],[-f,-d,v-o],[-f,-e/2,n-o],[f,-e/2,n-o],.45),i.quad([-f,d,v-o],[f,d,v-o],[f,e/2,n-o],[-f,e/2,n-o],.45),i.surf(l[0],l[1]),i.tri([t/2,-e/2,n],[t/2,e/2,n],[t/2,0,g-.05],.8,.8,.95),i.tri([-t/2,e/2,n],[-t/2,-e/2,n],[-t/2,0,g-.05],.8,.8,.95),c&&u.pop(c)},qx=(i,t,e,n,s,{over:r=.6,tile:a=W.tile[0],thick:l=.28}={})=>{let o=t/2+r,h=e/2+r,u=n-.15,c=n+s,f=Math.max(0,t/2-e/2);i.surf(tt.tiles,a),i.quad([-o,-h,u],[o,-h,u],[f,0,c],[-f,0,c],.92,.92,1,1),i.quad([o,h,u],[-o,h,u],[-f,0,c],[f,0,c],.92,.92,1,1),i.tri([o,-h,u],[o,h,u],[f,0,c],.92,.92,1),i.tri([-o,h,u],[-o,-h,u],[-f,0,c],.92,.92,1),i.surf(tt.tiles,Ze(a,.7)),i.box(0,0,u-l,o*2,h*2,l,0,{top:!1,bottom:!0,foot:.7})},El=(i,t,e,n,s,r,a,l,o)=>{let h=t/2,u=e/2;n===0?i.wall(s-a/2,-u-o,s+a/2,-u-o,r,r+l,.85,1):n===1?i.wall(h+o,s-a/2,h+o,s+a/2,r,r+l,.85,1):n===2?i.wall(s+a/2,u+o,s-a/2,u+o,r,r+l,.85,1):i.wall(-h-o,s+a/2,-h-o,s-a/2,r,r+l,.85,1)},da=(i,t,e,n,s,r,{pw:a=1.5,ph:l=2.5,frame:o=W.white,leaf:h=W.darkWood}={})=>{i.surf(tt.smooth,o),El(i,t,e,n,s,r,a+.5,l+.3,.05),i.surf(tt.wood,h),El(i,t,e,n,s,r,a,l,.09)},Xx=(i,t,e,n,s,r,{pw:a=.8,ph:l=1.1}={})=>{i.surf(tt.smooth,W.white),El(i,t,e,n,s,r-.12,a+.3,l+.24,.04),i.surf(tt.dark,W.shade),El(i,t,e,n,s,r,a,l,.07)},on=(i,t,e,n,s,r,a,l,o={})=>{let{wall:h=[tt.plaster,W.plaster[0]],roof:u="gable",rise:c=Math.min(s,r)*.22,tile:f=W.tile[0],doors:d=[[0,0]],windows:p=1,base:v=null,cornice:g=null,ridgeAlongY:m=r>s,over:x=.6}=o,_=i.F.push(t,e,n,l);if(i.surf(h[0],h[1]).box(0,0,0,s,r,a,0,{top:u==="flat",foot:.78,head:1,topShade:.9}),v&&i.surf(v[0],v[1]).box(0,0,0,s+.3,r+.3,Math.min(1.1,a*.2),0,{foot:.72,head:.9,topShade:.8}),g&&i.surf(tt.smooth,g).box(0,0,a-.45,s+.5,r+.5,.45,0,{bottom:!0,foot:.8,topShade:.8}),u==="gable")Al(i,s,r,a,c,{tile:f,wall:h,ridgeAlongY:m,over:x});else if(u==="hip")qx(i,s,r,a,c,{tile:f,over:x});else{i.surf(h[0],h[1]);for(let[b,M,C,y]of[[0,-r/2+.2,s,.4],[0,r/2-.2,s,.4],[-s/2+.2,0,.4,r-.8],[s/2-.2,0,.4,r-.8]])i.box(b,M,a,C,y,.7,0,{foot:.9,topShade:.95})}for(let[b,M]of d)da(i,s,r,b,M,0,{ph:Math.min(2.6,a*.62)});if(p){let b=Math.max(1,Math.round(a/3.4));for(let M=0;M<b;M++){let C=a/b*M+a/b*.52;for(let y of[0,2,1,3]){let T=y%2?r:s,k=Math.floor(T/3.6)*(p>1,1);for(let S=0;S<k;S++){let G=-T/2+T*(S+.5)/k;M===0&&d.some(([Z,st])=>Z===y&&Math.abs(st-G)<1.6)||(S+M+y)%(p>1?1:2)||Xx(i,s,r,y,G,C,{pw:.7,ph:1})}}}}i.F.pop(_)},yi=(i,t,e,n,s,r,a,l,{wall:o=[tt.stone,W.white],tile:h=W.tile[1],cols:u=Math.max(3,Math.round(s/3.4)),colTint:c=W.white,r:f=.34,simple:d=!0}={})=>{let p=i.F.push(t,e,n,l);i.surf(tt.paving,W.white).box(0,0,0,s+1,r+1,.3,0,{foot:.8,topShade:.75}),i.surf(o[0],o[1]).box(0,r/2-.3,.3,s,.6,a+1.1,0,{foot:.7});for(let x of[-1,1])i.box(x*(s/2-.3),0,.3,.6,r,a+.5,0,{foot:.7});Rs(i,-s/2+.6,-r/2+.5,s/2-.6,-r/2+.5,.3,u,f,a-.4,{n:8,tint:c,simple:d}),i.surf(tt.smooth,c).box(0,-r/2+.5,a-.1,s,.8,.5,0,{bottom:!0,foot:.7});let v=a+.4,g=a+1.5,m=s/2+.4;i.surf(tt.tiles,h).quad([-m,-r/2-.5,v],[m,-r/2-.5,v],[m,r/2+.1,g],[-m,r/2+.1,g],.92,.92,1,1),i.surf(tt.wood,W.darkWood).quad([m,-r/2-.5,v-.2],[-m,-r/2-.5,v-.2],[-m,r/2,g-.25],[m,r/2,g-.25],.4),i.F.pop(p)},Wd=(i,t,e,n,s,r,a,{wall:l=[tt.stone,W.white],colTint:o=W.white,tile:h=W.tile[0],cols:u=4,steps:c=3,closed:f=!1,finial:d=null}={})=>{let p=i.F.push(t,e,n,a),v=.32,g=s*.82,m=s*.052,x=f?0:Math.min(r*.28,s*.6);for(let b=0;b<c;b++)i.surf(tt.smooth,W.white).box(0,0,b*v,s+2.6-b*.9,r+2.6-b*.9,v,0,{foot:.8,topShade:.85});let _=c*v;if(i.surf(l[0],l[1]).box(0,x/2,_,s-1.2,r-x-.6,g,0,{top:!1,foot:.75}),!f){Rs(i,-s/2+m*1.6,-r/2+m*1.6,s/2-m*1.6,-r/2+m*1.6,_,u,m,g,{tint:o}),da(i,s-1.2,r-x-.6,0,0,_,{pw:s*.2,ph:g*.62});let b=i.F.push(0,x/2,0);i.F.pop(b)}if(i.surf(tt.smooth,o).box(0,0,_+g,s+.1,r+.1,s*.1,0,{bottom:!0,foot:.78,topShade:.8}),Al(i,s+.1,r+.1,_+g+s*.1,s*.19,{tile:h,wall:[tt.smooth,o],ridgeAlongY:!0,over:.5}),d)for(let b of[-1,1])i.surf(tt.gilt,d),i.shaft(0,b*(r/2+.3),_+g+s*.29,s*.035,.02,s*.16,6,{foot:.9});i.F.pop(p)},Rl=(i,t,e,n,s,r,a,l,{depth:o=5,wall:h=[tt.stone,W.white],tile:u=W.tile[1],floor:c=[tt.sand,W.sand],gate:f=!0}={})=>{let d=i.F.push(t,e,n,l);i.surf(c[0],c[1]).slab(0,0,.06,s-o*2,r-o*2,0,.95),yi(i,0,r/2-o/2,0,s,o,a,0,{wall:h,tile:u}),yi(i,0,-r/2+o/2,0,s,o,a,Math.PI,{wall:h,tile:u}),yi(i,s/2-o/2,0,0,r-o*2,o,a,-Math.PI/2,{wall:h,tile:u}),yi(i,-s/2+o/2,0,0,r-o*2,o,a,Math.PI/2,{wall:h,tile:u}),f&&i.surf(tt.wood,W.darkWood).wall(-1.4,-r/2-.08,1.4,-r/2-.08,.3,3.2,.8,1),i.F.pop(d)},Fi=(i,t,e,n,s,r,{pitch:a=3.2,w:l=1.7,t:o=.7,h=1.3,lowWall:u=.9}={})=>{let c=Math.hypot(n-t,s-e),f=Math.max(1,Math.round(c/a)),d=(n-t)/c,p=(s-e)/c,v=Math.atan2(p,d),g=p,m=-d;u&&i.box((t+n)/2-g*o/2,(e+s)/2-m*o/2,r,c,o,u,v,{foot:.9,topShade:.9});for(let x=0;x<f;x++){let _=(x+.5)/f*c;i.box(t+d*_-g*o/2,e+p*_-m*o/2,r+u,l,o,h,v,{foot:.92,topShade:.95})}},fa=(i,t,e,n,s,r,a,{face:l=[tt.stone,W.white],crown:o=[tt.stone,W.white],slits:h=!0,band:u=null}={})=>{let c=i.F.push(t,e,n,a),f=s/2;i.surf(l[0],l[1]).box(0,0,0,s,s,r,0,{top:!1,foot:.72}),i.surf(o[0],o[1]).box(0,0,r,s+.7,s+.7,.7,0,{bottom:!0,foot:.8,topShade:.7}),u&&i.surf(u[0],u[1]).box(0,0,r*.62,s+.3,s+.3,.6,0,{bottom:!0,foot:.85});let d=r+.7,p=f+.35;if(i.surf(o[0],o[1]),Fi(i,-p,-p,p,-p,d,{pitch:2.6,w:1.3}),Fi(i,p,-p,p,p,d,{pitch:2.6,w:1.3}),Fi(i,p,p,-p,p,d,{pitch:2.6,w:1.3}),Fi(i,-p,p,-p,-p,d,{pitch:2.6,w:1.3}),h){i.surf(tt.dark,W.shade);for(let v of[0,1,2,3]){let g=v*Math.PI/2,m=Math.cos(g),x=Math.sin(g),_=x*(f+.06),b=-m*(f+.06);i.wall(_-m*.25,b-x*.25,_+m*.25,b+x*.25,r*.7,r*.7+1.8)}}i.F.pop(c)},Yx=[[.125,0],[.12,.08],[.098,.42],[.112,.6],[.092,.69],[.128,.795],[.118,.83],[.05,.855],[.062,.9],[.066,.94],[.045,.985],[0,1]],pa=(i,t,e,n,s,r=0,{n:a=8,tint:l=W.gold,surf:o=tt.gilt,arm:h=!1}={})=>{i.surf(o,l);let u=i.F.push(t,e,n,r);i.turned(0,0,0,Yx.map(([c,f])=>[c*s,f*s]),a,{squash:.62}),h&&i.box(s*.16,-s*.03,s*.72,s*.3,s*.05,s*.05,.25,{bottom:!0}),i.F.pop(u)},Cl=(i,t,e,n,s,r,{plinth:a=[tt.smooth,W.white],tint:l=W.gold,ph:o=s*.32,pw:h=s*.36}={})=>{i.surf(a[0],a[1]).box(t,e,n,h*1.25,h*1.25,o*.2,r,{foot:.75,topShade:.8}),i.box(t,e,n+o*.2,h,h,o*.8,r,{foot:.85,topShade:.8}),pa(i,t,e,n+o,s,r,{tint:l})},$d=(i,t,e,n,s,{surf:r=tt.smooth,tint:a=W.white,treads:l=Math.max(2,Math.round(Math.abs(s-n)/.4))}={})=>{i.surf(r,a);let o=(s-n)/l,h=e/l;for(let u=0;u<l;u++)i.wall(-t/2,u*h,t/2,u*h,n+u*o,n+(u+1)*o,.72,.85),i.quad([-t/2,u*h,n+(u+1)*o],[t/2,u*h,n+(u+1)*o],[t/2,(u+1)*h,n+(u+1)*o],[-t/2,(u+1)*h,n+(u+1)*o],.95)};var qd=(i,t,e)=>{let{B:n,Q:s,rIsle:r,rW1:a,rL1:l,rW2:o,rL2:h,rW3:u,rA:c,r1a:f,r1b:d,r2a:p,r2b:v,rT:g,core:m,edge:x,Zp:_,Rp:b,Rs:M,zSlopeTop:C,zSlopeFoot:y,SEA:T,roadAngle:k,arcsExcept:S,canalHalf:G,bridgeHalf:Z,tunnelHalf:st,off:N,rampTop:V,rampFoot:O,k:Y}=t,ot=e.phone?14:8,et=-3.2,pt=i.to("rings"),dt=i.to("quays"),at=i.to("stone"),R=i.to("rings"),E=i.to("island"),H=i.to("hill"),X=(A,ut)=>Math.asin(Math.min(1,ut/A)),ct=21,q=Math.PI/2,lt=S([[q,X(r,ct)]]);pt.surf(tt.stone,W.white).sweep([[r,et,.6],[r,s,.95]],{arcs:lt,step:ot}),pt.surf(tt.paving,W.white).sweep([[r,s,.95],[c,s,.8]],{arcs:lt,step:ot}),at.surf(tt.stoneCourses,W.white).sweep([[c,s,.7],[c,n,.95]],{arcs:S([[q,X(c,ct)]]),step:ot}),E.surf(tt.grass,[235,235,225]).sweep([[c,n],[M+26,n]],{step:ot}),E.surf(tt.paving,W.white).sweep([[M+26,n+.02],[M,n+.02,.8]],{step:ot});let gt=A=>[[k(A),X(A,Z+.6)]];H.surf(tt.stoneBands,W.white).sweep([[M,n,.7],[M,y+.9,1]],{arcs:S(gt(M)),step:ot}),H.surf(tt.smooth,W.white).sweep([[M,y+.9],[M-.7,y+.9],[M-.7,y,.8]],{arcs:S(gt(M)),step:ot}),H.surf(tt.grass,[255,255,245]).sweep([[M-.7,y],[b,C,.85]],{step:ot}),H.surf(tt.stoneBands,W.white).sweep([[b,C,.7],[b,_+1,1]],{arcs:S(gt(b)),step:ot}),H.surf(tt.smooth,W.white).sweep([[b,_+1],[b-.8,_+1],[b-.8,_,.8]],{arcs:S(gt(b)),step:ot}),E.surf(tt.paving,W.white).sweep([[b,_],[b*.5,_],[.5,_]],{step:ot*2});let mt=(A,ut,vt,P,B)=>{let J=w=>[[T,X(w,st)]];pt.surf(tt.stone,W.white).sweep([[A,et,.6],[A,s,.95]],{arcs:S(J(A)),step:ot,sense:-1}),pt.surf(tt.paving,W.white).sweep([[A,s,.95],[A+vt,s,.8]],{arcs:S(J(A)),step:ot,sense:-1}),at.surf(B[0],B[1]).sweep([[A+vt,s,.7],[A+vt,n,.95]],{arcs:S(J(A+vt)),step:ot,sense:-1}),R.surf(tt.grass,[240,236,220]).sweep([[A+vt,n],[ut-P,n]],{step:ot,sense:-1}),at.surf(B[0],B[1]).sweep([[ut-P,n,.95],[ut-P,s,.7]],{arcs:S(J(ut-P)),step:ot,sense:-1}),pt.surf(tt.paving,W.white).sweep([[ut-P,s,.8],[ut,s,.95]],{arcs:S(J(ut)),step:ot,sense:-1}),pt.surf(tt.stone,W.white).sweep([[ut,s,.95],[ut,et,.6]],{arcs:S(J(ut)),step:ot,sense:-1})};mt(a,l,f-a,l-d,[tt.stoneBands,W.white]),mt(o,h,p-o,h-v,[tt.stoneChequer,W.white]);let U=i.to("ship-passages"),ht=5.6,j=st,Q=(A,ut=j)=>-Math.sqrt(A*A-ut*ut);for(let[A,ut,vt,P]of[[a,l,f-a,l-d],[o,h,p-o,h-v]]){for(let[w,L]of[[Q(A),Q(A+vt)],[Q(ut-P),Q(ut)]])for(let F of[-1,1])pt.surf(tt.stone,W.white),F>0?pt.wall(j,w,j,L,et,s,.6,.95):pt.wall(-j,L,-j,w,et,s,.6,.95);let B=Q(A+vt),J=Q(ut-P);U.surf(tt.rock,[120,116,110]),U.wall(j,B,j,J,et,ht,.3,.2),U.wall(-j,J,-j,B,et,ht,.3,.2),U.quad([-j,B,ht],[j,B,ht],[j,J,ht],[-j,J,ht],.25);for(let[w,L]of[[B,1],[J,-1]]){U.surf(tt.stone,W.red);let F=w+L*.25;L>0?(U.wall(j+2.2,F,-j-2.2,F,ht,n,.85,1),U.wall(j+2.2,F,j,F,s,ht,.8,.9),U.wall(-j,F,-j-2.2,F,s,ht,.8,.9)):(U.wall(-j-2.2,F,j+2.2,F,ht,n,.85,1),U.wall(j,F,j+2.2,F,s,ht,.8,.9),U.wall(-j-2.2,F,-j,F,s,ht,.8,.9)),U.surf(tt.rock,[120,116,110]).quad([-j,w,ht],[j,w,ht],[j,w+L*.3,ht],[-j,w+L*.3,ht],.3)}}let it=i.to("rock-docks"),bt=52*Y,It=Math.sqrt(c*c-ct*ct),jt=Math.sqrt(r*r-ct*ct),Ut=17,At=(ct*2-Ut*2)/3,Dt=n-1.2;it.surf(tt.rock,[150,144,132]),it.wall(-ct,It,ct,It,Dt,n,.8,1);let kt=[-ct+At+Ut/2,ct-At-Ut/2];for(let A of[-ct+At/2,0,ct-At/2])it.wall(A-At/2,It,A+At/2,It,et,Dt,.55,.9);for(let A of kt)it.surf(tt.rock,[118,112,104]),it.wall(A-Ut/2,It,A-Ut/2,It-bt,et,Dt,.32,.22),it.wall(A+Ut/2,It-bt,A+Ut/2,It,et,Dt,.32,.22),it.wall(A-Ut/2,It-bt,A+Ut/2,It-bt,et,Dt,.2,.16),it.quad([A-Ut/2,It-bt,Dt],[A+Ut/2,It-bt,Dt],[A+Ut/2,It,Dt],[A-Ut/2,It,Dt],.2,.2,.35,.35),it.surf(tt.rock,[140,134,122]).quad([A-Ut/2,It-bt+22,-1.2],[A+Ut/2,It-bt+22,-1.2],[A+Ut/2,It-bt,1.6],[A-Ut/2,It-bt,1.6],.3);for(let A of[-1,1])pt.surf(tt.stone,W.white),A>0?pt.wall(ct,It,ct,jt,et,s,.6,.95):pt.wall(-ct,jt,-ct,It,et,s,.6,.95);let K=i.to("houses"),Ht=i.to("canal"),Rt=i.to("extent"),Bt=12*Y,_t=G+Bt,Lt=X(g,_t),Ot=S([[T,Lt]]);pt.surf(tt.stone,W.white).sweep([[u,et,.6],[u,s,.95]],{arcs:S([[T,X(u,G)]]),step:ot,sense:-1}),pt.surf(tt.paving,W.white).sweep([[u,s,.95],[g,s,.8]],{arcs:S([[T,X(u,G)]]),step:ot,sense:-1}),at.surf(tt.stoneCourses,W.white).sweep([[g,s,.7],[g,n,.95]],{arcs:Ot,step:ot,sense:-1}),K.surf(tt.earth,[196,184,160]).sweep([[g,n],[(g+m)/2,n],[m,n]],{arcs:Ot,step:ot*1.5,sense:-1}),Rt.surf(tt.grass,[225,220,190]).sweep([[m,n],[x,-3.2]],{arcs:Ot,step:ot*2,sense:-1});for(let A of[-1,1]){let ut=A*G,vt=A*_t,P=-Math.sqrt(u*u-G*G),B=-Math.sqrt(g*g-_t*_t),J=-x,w=(Vt,Ct,Nt,qt,Tt,ae,le,De,Cn)=>A>0?Vt.wall(qt,Tt,Ct,Nt,ae,le,De,Cn):Vt.wall(Ct,Nt,qt,Tt,ae,le,De,Cn);Ht.surf(tt.stone,W.white),w(Ht,ut,P,ut,J,et,s,.6,.95),Ht.surf(tt.paving,W.white);let L=[ut,P,s],F=[ut,J,s],I=[vt,J,s],$=[vt,B,s];A>0?Ht.quad(L,$,I,F,.9):Ht.quad(L,F,I,$,.9),Ht.surf(tt.stoneCourses,W.white),w(Ht,vt,B,vt,J,s,n,.7,.95);let nt=T+A*Lt,Mt=[g*Math.cos(nt),g*Math.sin(nt)],Et=[m*Math.cos(nt),m*Math.sin(nt)],Pt=[x*Math.cos(nt),x*Math.sin(nt)],Gt=-Math.sqrt(m*m-_t*_t);K.surf(tt.earth,[196,184,160]),A>0?K.tri([Mt[0],Mt[1],n],[Et[0],Et[1],n],[vt,Gt,n]):K.tri([Mt[0],Mt[1],n],[vt,Gt,n],[Et[0],Et[1],n]),Rt.surf(tt.grass,[225,220,190]),A>0?Rt.quad([vt,Gt,n],[Et[0],Et[1],n],[Pt[0],Pt[1],-3.2],[vt,J,n]):Rt.quad([vt,Gt,n],[vt,J,n],[Pt[0],Pt[1],-3.2],[Et[0],Et[1],n])}let Ft=(A,ut,vt,P)=>{for(let B=0;B<vt;B++){let J=B/vt*re;if(P(J))continue;let w=Math.cos(J),L=Math.sin(J),F=A-ut*1.2;dt.surf(tt.smooth,Ze(W.white,.8)).shaft(F*w,F*L,s,.32,.26,.9,6,{cap:!0,foot:.7})}},z=A=>Math.abs(Math.atan2(Math.sin(A-T),Math.cos(A-T)))<.06;return e.phone||(Ft(r,1,90,A=>Math.abs(A-q)<.06),Ft(a,-1,130,z),Ft(l,1,200,z),Ft(o,-1,270,z),Ft(h,1,380,z),Ft(u,-1,480,z)),{dock:{mouths:kt,yFace:It,dockDeep:bt,dw:Ut},canalStrip:Bt}},Xd=(i,t)=>{let{rIsle:e,rW3:n,canalHalf:s,edge:r,rWall:a,core:l,B:o}=i,h=[],u=new pe(new qn(e-70,n+3,180,1),t.sea);u.userData={id:"harbours"},h.push(u);let c=r-n+60,f=new pe(new Un(s*2,c),t.sea);f.position.set(0,-(n+c/2)+2,0),f.userData={id:"canal"},h.push(f);for(let g of h)g.receiveShadow=!0,g.renderOrder=2,g.userData.water=!0;let d=Math.asin(Math.min(1,s/a))*3,p=new pe(new qn(a-22,a+22,360,1,-Math.PI/2+d,Math.PI*2-d*2),t.wallLine);p.userData={id:"outer-wall",line:!0};let v=new pe(new Un(s*2,a-r),t.canalLine);v.position.set(0,-(r+a)/2,0),v.userData={id:"canal",line:!0};for(let g of[p,v])g.renderOrder=5,g.position.z=o,h.push(g);return h};var Yd=(i,t,e)=>{let{B:n,Q:s,H:r,T:a,rA:l,r1a:o,r1b:h,r2a:u,r2b:c,rT:f,core:d,SEA:p,roadAngle:v,arcsExcept:g,bridgeHalf:m,off:x,bridges:_,Zp:b,rampTop:M,rampFoot:C,k:y,Rp:T,Rs:k}=t,S=e.phone?14:8,G=i.to("ring-walls"),Z=i.to("ring-walls#teeth"),st=i.to("wall-towers"),N=(R,E)=>Math.asin(Math.min(1,E/R)),V=(R,E,H,X)=>{let ct=i.to(X),q=g([[v(R),N(R,m+.5)]]),lt={arcs:q,step:S,sense:E},gt=n+r-.9,mt=R+E*.3,U=R-E*a;ct.surf(tt.metal,H).sweep([[R,n-.3,.72],[R,n+r*.45,.95],[R,gt,1]],lt),G.surf(tt.stone,W.white).sweep([[R,gt,.6],[mt,gt,.75],[mt,n+r,.95],[U,n+r,.85],[U,n,.7]],lt);let ht=n+r,j=mt,Q=mt-E*.7;G.sweep([[j,ht,.9],[j,ht+.9,1],[Q,ht+.9,.95],[Q,ht,.8]],lt);let it=e.phone?6.4:3.2,bt=(j+Q)/2;Z.surf(tt.stone,W.white);for(let[At,Dt]of q){let kt=Math.round((Dt-At)*R/it);for(let K=0;K<kt;K++){let Ht=At+(Dt-At)*(K+.5)/kt;Z.box(bt*Math.cos(Ht),bt*Math.sin(Ht),ht+.9,e.phone?3:1.6,.7,1.25,Ht+Math.PI/2,{foot:.95,topShade:.95})}}let It=v(R),jt=Math.max(8,Math.round(re*R/(118*y))),Ut=N(R,m+22);for(let At=0;At<jt;At++){let Dt=It+Ut+(re-2*Ut)*(At+.5)/jt,kt=R-E*(a/2-1.6);fa(st,kt*Math.cos(Dt),kt*Math.sin(Dt),n-.3,8.4,r+5.6,Dt,{face:[tt.metal,H],crown:[tt.stone,W.white],band:[tt.stone,W.white]})}};V(l,1,W.orichalcum,"wall-orichalcum"),V(o,-1,W.tin,"wall-tin"),V(h,1,W.tin,"wall-tin"),V(u,-1,W.brass,"wall-brass"),V(c,1,W.brass,"wall-brass");let O=i.to("bridges"),Y=i.to("bridge-gates"),ot=i.to("aqueducts"),et=[[W.orichalcum,W.tin],[W.tin,W.brass],[W.brass,W.brass]],pt=(R,E,H,X=!0)=>{let ct=Y.F.push(x,-R,n,E>0?0:Math.PI),q=9,lt=r+10,gt=m*2-q*2,mt=9.2;for(let U of[-1,1])fa(Y,U*(m-q/2),0,-.3,q,lt,0,{face:[tt.metal,H],crown:[tt.stone,W.white],band:[tt.stone,W.red]});Y.surf(tt.stoneBands,W.white).box(0,0,mt,gt,4.4,lt-4-mt,0,{bottom:!0,foot:.7,topShade:.8}),Y.surf(tt.stone,W.white),Fi(Y,-gt/2,-2.2,gt/2,-2.2,lt-4,{pitch:2.6,w:1.3}),Fi(Y,gt/2,2.2,-gt/2,2.2,lt-4,{pitch:2.6,w:1.3}),Y.surf(tt.stone,W.red).box(0,-2.3,mt-.9,gt+1.6,.5,1.3,0,{bottom:!0,foot:.8});for(let U of[-1,1]){let ht=gt/2-.2,j=X?U*1.32:0,Q=U*(gt/2-.15);Y.surf(tt.metal,Ze(H,.9)).box(Q-U*Math.cos(j)*ht/2,1.6+Math.abs(Math.sin(j))*ht/2,.15,ht,.35,mt-.4,j,{foot:.6,head:.85})}Y.F.pop(ct)};_.forEach(([R,E],H)=>{let X=E-R,ct=-(R+E)/2;O.surf(tt.stone,W.white).box(x,ct,n-1.5,m*2,X,1.5,0,{top:!1,bottom:!0,foot:.7,head:.95}),O.surf(tt.paving,W.white).slab(x,ct,n,m*2,X,0,.95);let q=Math.max(2,Math.round(X/17));for(let gt=0;gt<=q;gt++){let mt=-R-X*gt/q;O.surf(tt.stoneCourses,W.white).box(x,mt,-3.2,m*2-1.2,3.6,n-3+3.2,0,{top:!1,foot:.55,head:.8}),O.surf(tt.stone,W.white).box(x,mt,n-3,m*2-.6,5.6,.8,0,{bottom:!0,top:!1,foot:.6}),O.box(x,mt,n-2.2,m*2-.2,7.8,.7,0,{bottom:!0,top:!1,foot:.65})}for(let gt of[-1,1]){let mt=x+gt*(m-.6);G.surf(tt.stone,W.white).box(mt,ct,n,1.2,X-9,2.3,0,{foot:.8,topShade:.9}),gt>0?Fi(G,mt+.6,-R-4.5,mt+.6,-E+4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0}):Fi(G,mt-.6,-E+4.5,mt-.6,-R-4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0})}let lt=x-m+2.2;ot.surf(tt.stone,W.white).box(lt,ct,n,1.6,X-10,1.25,0,{foot:.75,topShade:.9}),ot.surf(tt.smooth,W.white);for(let gt=-R-14;gt>-E+10;gt-=24)ot.box(lt,gt,n+1.25,1.9,2.2,.3,0,{foot:.9});pt(R,-1,et[H][0]),pt(E,1,et[H][1])});let dt=_.slice(0,2).map(([,R])=>({x:x-m-9,y:-R-16,z:n,w:9,d:14}));for(let R of dt){ot.surf(tt.stone,W.white);for(let[E,H,X,ct]of[[0,-R.d/2,R.w+1.2,.7],[0,R.d/2,R.w+1.2,.7],[-R.w/2,0,.7,R.d],[R.w/2,0,.7,R.d]])ot.box(R.x+E,R.y+H,R.z,X,ct,1,0,{foot:.8,topShade:.9});ot.surf(tt.stone,W.white).box(R.x+R.w/2+4,R.y+R.d/2+6,R.z,1.6,18,1.25,.35,{foot:.75})}let at=(R,E,H=n)=>{O.surf(tt.paving,W.white).slab(x,-(R+E)/2,H+.14,m*2,E-R,0,.95);for(let X of[-1,1])O.surf(tt.smooth,W.white).box(x+X*m,-(R+E)/2,H,.5,E-R,.34,0,{foot:.8})};at(_[0][1],_[1][0]),at(_[1][1],_[2][0]),at(_[2][1],Math.sqrt(d*d-x*x)),at(C,_[0][0]);{let R=O.F.push(x,-C,0,0),E=C-M,H=m*2;$d(O,H,E,n,b,{surf:tt.paving,treads:e.phone?20:60});for(let X of[-1,1]){let ct=X*(H/2+.6),q=12;for(let lt=0;lt<q;lt++){let gt=E*lt/q,mt=E*(lt+1)/q,U=n+(b-n)*lt/q,ht=n+(b-n)*(lt+1)/q;O.surf(tt.stoneBands,W.white);let j=ct+X*.6,Q=ct-X*.6,it=n-.2;X>0?(O.quad([j,gt,it],[j,mt,it],[j,mt,ht+1.1],[j,gt,U+1.1],.7,.7,1,1),O.quad([Q,mt,ht],[Q,gt,U],[Q,gt,U+1.1],[Q,mt,ht+1.1],.8)):(O.quad([j,mt,it],[j,gt,it],[j,gt,U+1.1],[j,mt,ht+1.1],.7,.7,1,1),O.quad([Q,gt,U],[Q,mt,ht],[Q,mt,ht+1.1],[Q,gt,U+1.1],.8)),O.surf(tt.smooth,W.white).quad([ct-.6,gt,U+1.1],[ct+.6,gt,U+1.1],[ct+.6,mt,ht+1.1],[ct-.6,mt,ht+1.1],.95)}}O.F.pop(R)}return{basins:dt}};var Zd=(i,t,e)=>{let{Zp:n,SEA:s,arcsExcept:r}=t,a=44,l=20,o=1.1,h=l-o,u=24.4,c=u+2,f=5.5,d=9.5,p=3.4,v=6.4,g=6,m=n+.45,x=m,_=m+d,b=(V,O)=>Math.asin(Math.min(1,O/V)),M=e.phone?5:3,C=i.to("shrine-wall").surf(tt.metal,W.gold);C.sweep([[a,n,.8],[a,n+4.5,1],[a-.9,n+4.5,.95],[a-.9,n,.75]],{arcs:r([[s,b(a,g)]]),step:M});for(let V of[-1,1]){let O=s+V*b(a,g+.5);C.shaft((a-.45)*Math.cos(O),(a-.45)*Math.sin(O),n,.95,.8,6.4,10,{cap:!0,foot:.8})}let y=i.to("shrine");for(let V=0;V<3;V++)y.surf(tt.smooth,W.white).sweep([[c+(2-V)*.55,n+V*.15,.8],[c+(2-V)*.55,n+(V+1)*.15,.92],[c+(1-V)*.55,n+(V+1)*.15,.95]],{step:M+1});y.surf(tt.paving,W.white).sweep([[c-.55,m,.95],[h,m,.95]],{step:M+1});let T=r([[s,b(l,p)]]),k=[[s-b(l,p),s+b(l,p)]];y.surf(tt.stoneCourses,W.white).sweep([[l,x,.8],[l,_,1]],{arcs:T,step:M}),y.surf(tt.stoneCourses,W.white).sweep([[l,x+v,.85],[l,_,1]],{arcs:k,step:M}),y.surf(tt.smooth,W.white).sweep([[h,_,.8],[h,x+6.3,.7]],{arcs:T,step:M}),y.surf(tt.smooth,W.white).sweep([[h,_,.8],[h,x+v,.7],[l,x+v,.6]],{arcs:k,step:M});let S=i.to("hall");S.surf(tt.smooth,W.shade).sweep([[h,x+6.3,.9],[h,x,.7]],{arcs:T,step:M}),S.surf(tt.gilt,W.gold).sweep([[h-.04,x+6.42,1],[h-.04,x+6.3,1]],{arcs:T,step:M});for(let V of[-1,1]){let O=s+V*b(l,p),Y=Math.cos(O),ot=Math.sin(O);y.surf(tt.gilt,W.gold).quad([h*Y,h*ot,x],[l*Y,l*ot,x],[l*Y,l*ot,x+v],[h*Y,h*ot,x+v],.9)}S.surf(tt.paving,W.white).sweep([[h,m,.9],[7.2,m,.92]],{step:M}),S.surf(tt.smooth,W.shade).sweep([[7.2,m,.9],[6.2,m,.9]],{step:2}),S.surf(tt.gilt,W.gold).sweep([[6.2,m,1],[6,m,1]],{step:2}),S.surf(tt.paving,W.white).sweep([[6,m,.92],[0,m,.95]],{step:2});let G=e.phone?20:28;for(let V=0;V<G;V++){let O=s+(V+.5)/G*re;as(y,u*Math.cos(O),u*Math.sin(O),m,.72,d,{n:e.phone?8:14,tint:W.white})}y.surf(tt.smooth,W.white).sweep([[u+1,_,.75],[u+1,_+1.1,.95],[u-1,_+1.1,.9],[u-1,_,.7],[u+1,_,.6]],{step:M}),y.surf(tt.gilt,W.gold).sweep([[u+1.05,_+.46,1],[u+1.05,_+.62,1]],{step:M}),y.surf(tt.smooth,W.white).sweep([[l,_+.04,.55],[u-1,_+.04,.6]],{step:M}),y.surf(tt.tiles,W.tile[1]).sweep([[u+1.5,_+1.05,.9],[f,_+5.4,1]],{step:M}),S.surf(tt.smooth,W.shade).sweep([[f,_+5.1,.6],[h,_,.4]],{step:M}),y.surf(tt.gilt,W.gold).sweep([[f,_+5.1,.9],[f,_+5.45,1]],{step:2,sense:-1}),S.surf(tt.smooth,W.white).shaft(0,0,m,3,2.7,.75,28,{cap:!0,foot:.8,head:.96}),S.surf(tt.gilt,W.gold).shaft(0,0,m+.75,1.15,.85,.55,18,{cap:!0,foot:.9});let Z=12,st=.44,N=[];for(let V=0;V<Z;V++){let O=s-st-V*(re-2*st)/(Z-1),Y=Math.sqrt(h*h-(7.2/2+.3)**2)-.12;N.push({x:Y*Math.cos(O),y:Y*Math.sin(O),z:m+3.15,w:7.2,h:4,a:O})}return{RG:a,RH:l,RI:h,RC:u,RS:c,RO:f,floor:m,height:d,panels:N,door:{a:s,half:p},gate:{a:s,half:g},globe:{x:0,y:0,z:m+3.6,r:2.2},rings:[{r:a-.45,t:.8,a:s,gap:g-.9},{r:l-o/2,t:.95,a:s,gap:p-.7}],circles:[{x:0,y:0,r:3.5},...Array.from({length:G},(V,O)=>{let Y=s+(O+.5)/G*re;return{x:u*Math.cos(Y),y:u*Math.sin(Y),r:1.15}})]}};var ai=Math.PI/180,Zx=(i,t,e,n,s,r,a)=>{let l=i.F.push(t,e,n,r),o=s,h=o*.5;i.surf(tt.gilt,a);let u=(c,f,d,p,v=8)=>Array.from({length:v},(g,m)=>{let x=m/v*re;return[c,Math.cos(x)*d,f+Math.sin(x)*p]});i.loft([u(-o*.36,h,.02,.02),u(-o*.32,h,o*.1,o*.12),u(-o*.1,h-o*.01,o*.105,o*.125),u(o*.16,h,o*.1,o*.13),u(o*.27,h+o*.05,o*.07,o*.11),u(o*.36,h+o*.2,o*.05,o*.075),u(o*.42,h+o*.33,o*.04,o*.055),u(o*.52,h+o*.3,o*.028,o*.04),u(o*.6,h+o*.25,o*.02,o*.03)],{closed:!0});for(let[c,f,d]of[[-o*.26,-1,0],[-o*.26,1,0],[o*.18,-1,1],[o*.18,1,1]])i.shaft(c+(d&&f>0?o*.06:0),f*o*.07,d&&f>0?o*.12:0,o*.022,o*.04,h-o*.08-(d&&f>0?o*.12:0),5);for(let c of[-1,1])i.quad([o*.14,c*o*.09,h+o*.08],[-o*.1,c*o*.1,h+o*.06],[-o*.42,c*o*.34,h+o*.5],[-o*.05,c*o*.3,h+o*.42]),i.quad([-o*.05,c*o*.3,h+o*.42],[-o*.42,c*o*.34,h+o*.5],[-o*.62,c*o*.5,h+o*.74],[-o*.2,c*o*.46,h+o*.6]);i.F.pop(l)},jd=(i,t,e,n,s,r)=>{let a=i.F.push(t,e,n,s),l=3.6;i.surf(tt.gilt,r);let o=(h,u,c=6)=>{let f=(h-.5)*l,d=1+Math.sin(h*Math.PI)*.9;return Array.from({length:c},(p,v)=>{let g=v/c*re;return[f,Math.cos(g)*u*.8,d+Math.sin(g)*u]})};i.loft([o(0,.03),o(.12,.2),o(.4,.42),o(.62,.4),o(.85,.2),o(1,.04)],{closed:!0}),i.tri([-l*.5,-.6,1],[-l*.5,.6,1],[-l*.38,0,1.3]),i.tri([l*.02,0,2.25],[l*.2,0,2.2],[l*.02,0,2.75]),pa(i,-.15,0,2,2.5,0,{n:6,tint:r}),i.F.pop(a)},Jd=(i,t,e)=>{let{B:n,Zp:s,Rp:r,Rs:a,rA:l,T:o,S:h,P:u,k:c,off:f,bridgeHalf:d,SEA:p,roadAngle:v,zSlopeTop:g,zSlopeFoot:m,islandZ:x}=t,_=Hn(1160),b=[],M=[],C=(P,B)=>[P*Math.cos(B*ai),P*Math.sin(B*ai)],y=Zd(i,t,e),T=u.templeLength*h,k=u.templeWidth*h,S=-45*c,G=-135*c,Z=i.to("temple"),st=i.to("temple#roof"),N=i.to("temple-interior"),V=i.to("temple-ceiling#roof"),O=i.to("pinnacles#roof"),Y=.9,ot=4,et=ot*Y,pt=k*.325,dt=k*.076,at=k*.0185,R=k*.14,E=Z.F,H=E.push(S,G,s,0);{let P=[W.black,W.white,W.red,W.white];for(let Xt=0;Xt<ot;Xt++)Z.surf(tt.smooth,P[Xt]).box(0,0,Xt*Y,T+(ot-1-Xt)*3.4,k+(ot-1-Xt)*3.4,Y,0,{foot:.78,topShade:.86});let B=11,J=22,w=at*1.7,L={n:e.phone?10:16,surf:tt.metal,tint:W.silver};for(let Xt of[-1,1])Rs(Z,-T/2+w,Xt*(k/2-w),T/2-w,Xt*(k/2-w),et,J,at,pt,L);for(let Xt of[-1,1])Rs(Z,Xt*(T/2-w),-k/2+w+(k-2*w)/(B-1),Xt*(T/2-w),k/2-w-(k-2*w)/(B-1),et,B-2,at,pt,L);let F=et+pt,I=w*2,$=(T-.6)/2-I,nt=(k-.6)/2-I,Mt=(Xt,fe,D,rt,St,xt,wt=!0)=>{let Wt=[[-fe,-D],[fe,-D],[fe,D],[-fe,D]],Jt=[[-rt,-St],[rt,-St],[rt,St],[-rt,St]];for(let zt=0;zt<4;zt++){let Yt=(zt+1)%4,te=[...Wt[zt],Xt],he=[...Wt[Yt],Xt],ve=[...Jt[Yt],Xt],Kt=[...Jt[zt],Xt];wt?Z.quad(te,he,ve,Kt,xt):Z.quad(Kt,ve,he,te,xt)}};Z.surf(tt.metal,W.silver).box(0,0,F,T-.6,k-.6,dt*.4,0,{foot:.75,top:!1}),Mt(F,(T-.6)/2,(k-.6)/2,$,nt,.6,!1),Z.surf(tt.metal,Ze(W.silver,.9)).box(0,0,F+dt*.4,T-.2,k-.2,dt*.38,0,{top:!1,foot:.9}),Z.surf(tt.gilt,W.gold).box(0,0,F+dt*.4,T-.1,k-.1,dt*.07,0,{top:!1}),Z.surf(tt.metal,W.silver).box(0,0,F+dt*.78,T+1.6,k+1.6,dt*.22,0,{foot:.7,top:!1}),Mt(F+dt,(T+1.6)/2,(k+1.6)/2,$,nt,.9),Z.surf(tt.metal,Ze(W.silver,.8)),Z.wall($,-nt,-$,-nt,F,F+dt,.6,.75),Z.wall(-$,nt,$,nt,F,F+dt,.6,.75),Z.wall(-$,-nt,-$,nt,F,F+dt,.6,.75),Z.wall($,nt,$,-nt,F,F+dt,.6,.75);let Et=T-30*c,Pt=k-30*c,Gt=2.2,Vt=9,Ct=pt*.66;Z.surf(tt.metal,W.silver),Z.wall(-Et/2,-Pt/2,Et/2,-Pt/2,et,F,.72,.9),Z.wall(Et/2,Pt/2,-Et/2,Pt/2,et,F,.72,.9),Z.wall(-Et/2,Pt/2,-Et/2,-Pt/2,et,F,.72,.9),Z.wall(Et/2,-Pt/2,Et/2,-Vt/2,et,F,.72,.9),Z.wall(Et/2,Vt/2,Et/2,Pt/2,et,F,.72,.9),Z.wall(Et/2,-Vt/2,Et/2,Vt/2,et+Ct,F,.8,.9),Z.surf(tt.gilt,W.gold),Z.box(Et/2+.2,-Vt/2-.6,et,.6,1.2,Ct+1.2,0,{foot:.8}),Z.box(Et/2+.2,Vt/2+.6,et,.6,1.2,Ct+1.2,0,{foot:.8}),Z.box(Et/2+.2,0,et+Ct,.6,Vt+2.4,1.2,0,{bottom:!0});for(let Xt of[-1,1])Z.surf(tt.metal,W.silver).box(Et/2+Vt/4+.3,Xt*(Vt/2+.25),et,Vt/2,.35,Ct,0,{foot:.7});let Nt=Et-Gt*2,qt=Pt-Gt*2,Tt=W.orichalcum;Mt(F,Et/2,Pt/2,Nt/2,qt/2,.85),N.surf(tt.metal,Tt),N.wall(Nt/2,-qt/2,-Nt/2,-qt/2,et,F,.6,.85),N.wall(-Nt/2,qt/2,Nt/2,qt/2,et,F,.6,.85),N.wall(-Nt/2,-qt/2,-Nt/2,qt/2,et,F,.6,.85),N.wall(Nt/2,-Vt/2,Nt/2,-qt/2,et,F,.6,.85),N.wall(Nt/2,qt/2,Nt/2,Vt/2,et,F,.6,.85),N.wall(Nt/2,Vt/2,Nt/2,-Vt/2,et+Ct,F,.7,.85);for(let Xt of[-1,1])N.wall(Nt/2,Xt*Vt/2,Et/2,Xt*Vt/2,et,et+Ct,.7);N.surf(tt.metal,Ze(Tt,.92)).slab(0,0,et+.04,Nt,qt,0,.8),Z.surf(tt.smooth,W.white).slab(0,0,et+.02,T-.2,k-.2,0,.82);let ae=14,le=qt*.27;for(let Xt of[-1,1])Rs(N,-Nt/2+9,Xt*le,Nt/2-9,Xt*le,et,ae,1.45,pt,{n:e.phone?8:12,surf:tt.metal,tint:Tt,shade:.85});let De=F-.05,Cn=26,Pn=10,Mn=Nt/Cn,ke=qt/Pn,hs=[W.gold,W.silver,Tt];V.surf(tt.ivory,W.ivory).quad([-Nt/2,qt/2,De],[Nt/2,qt/2,De],[Nt/2,-qt/2,De],[-Nt/2,-qt/2,De],.8);for(let Xt=0;Xt<Cn;Xt++)for(let fe=0;fe<Pn;fe++){let D=-Nt/2+(Xt+.5)*Mn,rt=-qt/2+(fe+.5)*ke,St=hs[(Xt+fe*2)%3],xt=.3;V.surf(tt.gilt,St).quad([D-Mn*xt,rt+ke*xt,De-.12],[D+Mn*xt,rt+ke*xt,De-.12],[D+Mn*xt,rt-ke*xt,De-.12],[D-Mn*xt,rt-ke*xt,De-.12],.9)}st.surf(tt.metal,Ze(W.silver,.8)).quad([-T/2,k/2,F+dt*.3],[T/2,k/2,F+dt*.3],[T/2,-k/2,F+dt*.3],[-T/2,-k/2,F+dt*.3],.5);let Ee=F+dt,He=T/2+1.2,jn=k/2+1.6,In=Ee+R;st.surf(tt.metal,Ze(W.silver,.95)),st.quad([-He,-jn,Ee],[He,-jn,Ee],[He,0,In],[-He,0,In],.92,.92,1,1),st.quad([He,jn,Ee],[-He,jn,Ee],[-He,0,In],[He,0,In],.92,.92,1,1);let ki=e.phone?0:46;for(let Xt=0;ki&&Xt<=ki;Xt++){let fe=-He+2*He*Xt/ki;for(let D of[-1,1])st.quad([fe-.25,D*jn,Ee+.25],[fe+.25,D*jn,Ee+.25],[fe+.25,0,In+.25],[fe-.25,0,In+.25],1)}for(let Xt of[-1,1]){let fe=Xt*(T/2-.4);st.surf(tt.metal,W.silver),Xt>0?st.tri([fe,-k/2,Ee],[fe,k/2,Ee],[fe,0,In-.3],.8,.8,.95):st.tri([fe,k/2,Ee],[fe,-k/2,Ee],[fe,0,In-.3],.8,.8,.95),st.surf(tt.gilt,W.gold);let D=R*.3,rt=20;for(let St=0;St<rt;St++){let xt=St/rt*re,wt=(St+1)/rt*re,Wt=[fe+Xt*.25,0,Ee+R*.4],Jt=[fe+Xt*.25,Math.cos(xt)*D,Ee+R*.4+Math.sin(xt)*D],zt=[fe+Xt*.25,Math.cos(wt)*D,Ee+R*.4+Math.sin(wt)*D];Xt>0?st.tri(Wt,Jt,zt):st.tri(Wt,zt,Jt)}}let _r=(Xt,fe,D,rt)=>O.surf(tt.gilt,W.gold).turned(Xt,fe,D,[[rt*.1,0],[rt*.13,rt*.08],[rt*.05,rt*.2],[rt*.16,rt*.45],[rt*.19,rt*.58],[rt*.07,rt*.78],[rt*.03,rt*.9],[0,rt]],8);for(let Xt of[-1,1]){_r(Xt*He,0,In,9.5);for(let fe of[-1,1])_r(Xt*He,fe*jn,Ee,6.5)}let br=e.phone?12:44;for(let Xt=1;Xt<br;Xt++)O.surf(tt.gilt,W.gold).shaft(-He+2*He*Xt/br,0,In,.5,.05,2.6,4);for(let Xt=0;Xt<=(e.phone?0:44);Xt++)for(let fe of[-1,1])O.shaft(-He+2*He*Xt/44,fe*jn,Ee,.45,.05,1.5,4);let Ln=i.to("poseidon"),Oi=-Nt/2+34;Ln.surf(tt.gilt,W.gold).box(Oi-6,0,et,30,22,1.2,0,{foot:.7,topShade:.8}),Ln.box(Oi-9,0,et+3.4,9,7,2.6,0,{bottom:!0,foot:.8});for(let Xt of[-1,1]){let fe=Ln.F.push(Oi-9,Xt*4.2,et+4,0);for(let D=0;D<14;D++){let rt=D/14*re,St=(D+1)/14*re;Ln.tri([0,0,0],[Math.cos(rt)*2.8,0,Math.sin(rt)*2.8],[Math.cos(St)*2.8,0,Math.sin(St)*2.8])}Ln.F.pop(fe)}pa(Ln,Oi-9,0,et+6,pt-6.3,-Math.PI/2,{n:12,arm:!0});for(let Xt=0;Xt<6;Xt++)Zx(Ln,Oi+8+Xt%2*2.5,(Xt-2.5)*3.9,et+1.2,10.5,0,W.gold);let us=i.to("nereids"),Bi=0;for(let Xt=0;Xt<22&&Bi<100;Xt++)for(let[fe,D]of[[le-5.4,1],[le+5.4,-1],[-le+5.4,-1],[-le-5.4,1]]){if(Bi>=88)break;let rt=-Nt/2+12+Xt*(Nt-30)/21;us.surf(tt.metal,Tt).box(rt,fe,et,2.4,1.6,1.3,0,{foot:.6}),jd(us,rt,fe,et+.9,D>0?0:Math.PI,W.gold),Bi++}for(let Xt=0;Bi<100;Xt++,Bi++){let fe=(-.42+.84*Xt/11)*Math.PI,D=Oi+30+Math.cos(fe)*9,rt=Math.sin(fe)*15;us.surf(tt.metal,Tt).box(D,rt,et,2.4,1.6,1.3,fe,{foot:.6}),jd(us,D,rt,et+.9,fe,W.gold)}let Xl=i.to("votive-inside");for(let Xt=0;Xt<24;Xt++){let fe=-Nt/2+14+(Nt-60)*(Xt>>1)/11.5+4,D=Xt%2?1:-1;Cl(Xl,fe,D*(qt/2-2.6),et,3.2+_()*1.4,D>0?-Math.PI/2:Math.PI/2,{plinth:[tt.metal,Tt],tint:Xt%3?W.gold:W.silver})}let wr=i.to("pillar");wr.surf(tt.metal,Tt).box(Nt/2-52,0,et,4.2,4.2,.9,0,{foot:.7}),wr.box(Nt/2-52,0,et+.9,2.2,1,7.5,0,{foot:.85}),wr.box(Nt/2-52,0,et+8.4,2.6,1.3,.5,0,{bottom:!0})}E.pop(H);let X=s+et+pt+dt+R,ct=i.to("statues"),q=i.to("votive-outside");{let P=T/2+15,B=k/2+15,J=2*(2*P+2*B),w=60;for(let L=0;L<w;L++){let F=(L+.5)/w*J,I,$,nt;F<2*P?(I=-P+F,$=-B,nt=-Math.PI/2):(F-=2*P)<2*B?(I=P,$=-B+F,nt=0):(F-=2*B)<2*P?(I=P-F,$=B,nt=Math.PI/2):(F-=2*P,I=-P,$=B-F,nt=Math.PI),!(I===P&&Math.abs($)<9)&&Cl(ct,S+I,G+$,s,4.4,nt+Math.PI/2,{plinth:[tt.smooth,L%2?W.white:W.red]})}for(let L=0;L<38;L++){let F=L%2?1:-1,I=f+F*(d+4+L%3*3.2),$=-t.rampTop+12+(L>>1)*5.6,nt=L%4,Mt=s;Math.hypot(I,$)>r-6||(nt===0?(as(q,I,$,Mt,.42,5.2,{n:8,tint:W.white}),pa(q,I,$,Mt+5.2,2.2,-Math.PI/2,{n:6,tint:W.gold})):nt===1?(q.surf(tt.smooth,W.white).box(I,$,Mt,1.5,.9,.4,0),q.surf(tt.smooth,L%3?W.white:W.black).box(I,$,Mt+.4,1,.32,2.7,0,{foot:.85})):nt===2?q.surf(tt.gilt,L%3?W.brass:W.silver).turned(I,$,Mt,[[.5,0],[.16,.25],[.12,1.1],[.3,1.25],[.85,1.75],[.9,1.85],[0,1.6]],8):Cl(q,I,$,Mt,2.6,-Math.PI/2*F,{tint:L%3?W.gold:W.brass}))}}let lt=i.to("altar"),gt=S+T/2+34*c,mt=G;for(let P=0;P<3;P++)lt.surf(tt.smooth,[W.white,W.red,W.white][P]).box(gt,mt,s+P*.5,15-P*2.2,50-P*2.2,.5,0,{foot:.8,topShade:.88});lt.surf(tt.stoneCourses,W.white).box(gt,mt,s+1.5,6.5,42,3.1,0,{foot:.8}),lt.surf(tt.smooth,W.white).box(gt,mt,s+4.6,7.6,43.2,.55,0,{bottom:!0,foot:.8,topShade:.9});for(let P of[-1,1])lt.surf(tt.smooth,W.white).box(gt,mt+P*21.2,s+5.15,7.6,.9,1.3,0,{foot:.9});lt.surf(tt.gilt,W.gold).box(gt,mt,s+1.6,6.7,42.2,.3,0,{top:!1});let U=i.to("palace"),ht=[tt.stoneBands,W.white],j=[tt.stoneChequer,W.white],Q=[tt.stone,W.white],it=[tt.stone,W.red],bt=W.gold;on(U,0,215*c,s,150,22,14,0,{wall:ht,cornice:W.white,base:[tt.stone,W.black],windows:2,doors:[[0,-40],[0,40]],tile:W.tile[1]}),on(U,-86,152*c,s,22,104,12,0,{wall:Q,cornice:W.red,base:[tt.stone,W.red],windows:2,doors:[[1,-30],[1,30]],tile:W.tile[0]}),on(U,86,152*c,s,22,104,12,0,{wall:Q,cornice:W.red,base:[tt.stone,W.red],windows:2,doors:[[3,-30],[3,30]],tile:W.tile[0]}),on(U,0,196*c,s,34,18,25,0,{wall:j,roof:"hip",cornice:bt,windows:2,doors:[],tile:W.tile[2]}),on(U,0,148*c,s+1.2,44,64,17,0,{wall:ht,cornice:bt,base:[tt.stone,W.black],windows:0,doors:[],tile:W.tile[1],rise:7}),U.surf(tt.smooth,W.white).box(0,148*c,s,48,68,1.2,0,{foot:.8}),U.surf(tt.smooth,W.white).box(0,148*c-34-6,s,44,12,1.2,0,{foot:.8,topShade:.86}),U.box(0,148*c-34-13.5,s,40,3,.8,0,{foot:.8}),U.box(0,148*c-34-16,s,40,2.5,.4,0,{foot:.8}),Rs(U,-19.5,148*c-34-10.5,19.5,148*c-34-10.5,s+1.2,6,1.15,14.6,{n:14,tint:W.red}),U.surf(tt.smooth,W.white).box(0,148*c-34-6,s+15.8,44,12,1.4,0,{bottom:!0,foot:.75});{let P=U.F.push(0,148*c-34-6,0,0);Al(U,44,12,s+17.2,7,{tile:W.tile[1],wall:[tt.smooth,W.white],ridgeAlongY:!0}),U.F.pop(P)}da(U,44,64,0,0,0,{pw:5,ph:9,leaf:W.brass});{let P=U.F.push(0,148*c,s+1.2,0);da(U,44,64,0,0,0,{pw:5,ph:9.5,leaf:W.brass,frame:bt}),U.F.pop(P)}for(let P of[-1,1])yi(U,P*71,150*c,s,96,7,6.2,P>0?Math.PI/2:-Math.PI/2,{wall:Q,colTint:W.red,r:.42,simple:!1}),U.surf(tt.gilt,bt).shaft(P*86,152*c,s+12+4.6,.5,.04,3,6);on(U,-150,62*c,s,20,66,10,-.5,{wall:it,cornice:W.white,base:[tt.stone,W.black],windows:2,doors:[[1,0]],tile:W.tile[3]}),on(U,160,66*c,s,20,60,10,.45,{wall:[tt.stoneCourses,W.white],cornice:W.white,windows:2,doors:[[3,0]],tile:W.tile[3]}),on(U,-205,150*c,s,18,50,8,-.95,{wall:Q,windows:1,doors:[[1,0]],tile:W.tile[0]}),on(U,205,150*c,s,18,50,8,.95,{wall:Q,windows:1,doors:[[3,0]],tile:W.tile[0]});for(let P of[-1,1])for(let B=0;B<7;B++)b.push({x:P*40,y:108*c+B*12,z:s,s:7+_()*2,kind:"cypress",id:"palace"});let It=i.to("guard-dwellings");for(let P=0;P<16;P++){let B=196+P*6.6,[J,w]=C(a+50*c,B);P%5!==4&&on(It,J,w,n,15,9,4.4+P%3*.6,B*ai+Math.PI/2,{wall:[tt.plaster,W.plaster[P%6]],windows:1,doors:[[0,-3]],tile:W.tile[P%4],base:[tt.stone,W.white]})}let jt=i.to("springs"),Ut=i.to("reservoirs"),At=i.to("baths"),Dt=(a+26+l-o)/2+2,kt=(P,B,J,w)=>{P.surf(tt.smooth,W.white).shaft(B,J,n,8.6,8.6,.5,20,{cap:!0,foot:.8,head:.85});for(let L=0;L<10;L++){let F=L/10*re;as(P,B+Math.cos(F)*7.4,J+Math.sin(F)*7.4,n+.5,.42,5.6,{n:8,tint:w})}P.surf(tt.smooth,W.white).shaft(B,J,n+6.1,8.2,8.2,.7,20,{foot:.75}),P.surf(tt.tiles,W.tile[1]).shaft(B,J,n+6.8,8.9,.3,4.2,20,{foot:.9,head:1}),P.surf(tt.gilt,W.gold).shaft(B,J,n+10.9,.35,.03,1.6,6),P.surf(tt.smooth,W.white).shaft(B,J,n+.5,4.4,4.4,.8,16,{foot:.8}),P.shaft(B,J,n+.5,3.8,3.8,.8,16,{foot:.6}),M.push({x:B,y:J,z:n+1.1,r:3.8,id:"springs"})},[K,Ht]=C(Dt,36),[Rt,Bt]=C(Dt,58);kt(jt,K,Ht,W.red),kt(jt,Rt,Bt,W.white);let _t=(P,B,J,w,L)=>{let[F,I]=C(Dt,B),$=B*ai+Math.PI/2,nt=P.F.push(F,I,n,$);P.surf(tt.smooth,W.white);for(let[Mt,Et,Pt,Gt]of[[0,-w/2,J+1.6,.8],[0,w/2,J+1.6,.8],[-J/2,0,.8,w],[J/2,0,.8,w]])P.box(Mt,Et,0,Pt,Gt,.8,0,{foot:.8,topShade:.9});P.surf(tt.paving,W.white).slab(0,0,.05,J+5,w+5,0,.85),P.F.pop(nt),M.push({x:F,y:I,z:n+.6,w:J,d:w,rot:$,id:L})};_t(Ut,47,26,15,"reservoirs"),_t(Ut,26,22,14,"reservoirs");for(let P of[20,64]){let[B,J]=C(Dt+3,P);on(Ut,B,J,n,30,15,6.5,P*ai+Math.PI/2,{wall:[tt.stoneCourses,W.white],windows:0,doors:[[0,0]],tile:W.tile[2],cornice:W.white})}let Lt=(P,B,J,w,L,F)=>{let[I,$]=C(Dt,P);Rl(At,I,$,n,B,J,w,P*ai+Math.PI/2,{depth:6,wall:L,tile:F,floor:[tt.paving,W.white]}),M.push({x:I,y:$,z:n+.35,w:B-22,d:J-20,rot:P*ai+Math.PI/2,id:"baths"})};Lt(73,40,34,5.2,[tt.stoneBands,W.white],W.tile[1]),Lt(84,54,38,4.8,[tt.stone,W.white],W.tile[0]),Lt(96,36,32,4.6,[tt.stone,W.red],W.tile[3]);{let[P,B]=C(Dt,9);yi(At,P,B,n,46,9,4.6,9*ai-Math.PI/2,{wall:[tt.stone,W.black],cols:10});let[J,w]=C(Dt-13,9);_t(At,9,.01,.01,"baths"),M.pop(),M.push({x:J,y:w,z:n+.3,w:40,d:9,rot:9*ai+Math.PI/2,id:"baths"}),At.surf(tt.smooth,W.white).box(J,w,n,42,11,.5,9*ai+Math.PI/2,{foot:.8,topShade:.85})}let Ot=i.to("aqueducts"),Ft=a+30*c,z=v(Ft)+.06,A=205*ai;Ot.surf(tt.smooth,W.white).sweep([[Ft+1.1,n,.8],[Ft+1.1,n+.45],[Ft+.7,n+.45],[Ft+.7,n+.1,.6],[Ft-.7,n+.1,.6],[Ft-.7,n+.45],[Ft-1.1,n+.45],[Ft-1.1,n,.8]],{arcs:[[z,A]],step:6}),M.push({arc:[z,A],r0:Ft-.7,r1:Ft+.7,z:n+.34,id:"aqueducts"});for(let P=0;P<46;P++){let B=12+_()*92,[J,w]=C(a+30+_()*(l-o-a-36),B);b.push({x:J,y:w,z:n,s:7+_()*5,kind:P%3?"plane":"cypress",id:"springs",soft:!0})}let ut=e.phone?260:520;for(let P=0;P<ut;P++){let B=104+_()*86,J=a+32+_()*(l-o-a-38),[w,L]=C(J,B);b.push({x:w,y:L,z:n,s:13+_()*13,kind:["cypress","plane","pine","plane"][P%4],id:"grove"})}let vt=e.phone?300:620;for(let P=0;P<vt;P++){let B=_()*re,J=r+7+Math.floor(_()*6)/6*(a-r-14)+_()*2;Math.abs(Math.atan2(Math.sin(B-v(J)),Math.cos(B-v(J))))<(d+6)/J||b.push({x:J*Math.cos(B),y:J*Math.sin(B),z:x(J),s:3.2+_()*2.6,kind:P%3?"olive":"fruit",id:"island-gardens"})}return{trees:b,pools:M,hall:y,temple:{x:S,y:G,z:s,L:T,W:k,top:X,floor:s+et,room:{l:T-30*c,w:k-30*c,door:9}},altar:{x:gt,y:mt},springs:[[K,Ht],[Rt,Bt]]}};var Kd=(i,t,e)=>{let{B:n,Q:s,T:r,rW1:a,rL1:l,rW2:o,r1a:h,r1b:u,r2a:c,r2b:f,rcMid:d,rcHalf:p,off:v,bridgeHalf:g,SEA:m,roadAngle:x,k:_,rL2:b,rT:M,rW3:C,strip:y}=t,T=Hn(1170),k=[],S=[],G=e.phone?14:8,Z=i.to("ring-temples"),st=i.to("gymnasia"),N=i.to("horse-grounds"),V=i.to("gardens"),O=i.to("patterned-buildings"),Y=i.to("ring-layout"),ot=(At,Dt,kt)=>{let K=At*Math.cos(Dt);return At*Math.sin(Dt)<0&&Math.abs(K-v)<g+kt},et=At=>At[T()*At.length|0],pt={temple:(At,Dt,kt,K,Ht)=>{let Rt=Z,Bt=Rt.F.push(At,Dt,n,kt),_t=Math.min(K-8,78),Lt=Math.min(Ht-8,84);Rt.surf(tt.stone,W.white);for(let[z,A,ut,vt]of[[0,Lt/2,_t,.8],[-_t/2,0,.8,Lt],[_t/2,0,.8,Lt],[-_t/4-2,-Lt/2,_t/2-4,.8],[_t/4+2,-Lt/2,_t/2-4,.8]])Rt.box(z,A,0,ut,vt,2.1,0,{foot:.78,topShade:.9});for(let z of[-1,1])Rt.surf(tt.stone,W.red).box(z*4.6,-Lt/2,0,1.4,1.4,3.4,0,{foot:.8});let Ot=11+T()*7,Ft=T()*3|0;Wd(Rt,0,Lt*.12,0,Ot,Ot*(1.9+T()*.5),0,{wall:[[tt.stone,tt.stoneBands,tt.stoneCourses][Ft],W.white],colTint:Ft===2?W.red:W.white,tile:et(W.tile),cols:Ot>14?6:4,finial:T()<.5?W.gold:null}),Rt.surf(tt.smooth,W.white).box(0,-Lt*.3,0,5,2.4,1.3,0,{foot:.8}),Rt.surf(tt.paving,W.white).slab(0,-Lt*.2,.05,7,Lt*.5,0,.9),Rt.F.pop(Bt);for(let z of[-1,1])for(let A=0;A<5;A++){let ut=z*(_t/2-5),vt=-Lt/2+8+A*((Lt-16)/4),P=Math.cos(kt),B=Math.sin(kt);k.push({x:At+P*ut-B*vt,y:Dt+B*ut+P*vt,z:n,s:9+T()*4,kind:"cypress",id:"ring-temples"})}},gym:(At,Dt,kt,K,Ht)=>{let Rt=Math.min(K-10,74),Bt=Math.min(Ht-12,62);Rl(st,At,Dt,n,Rt,Bt,4.8,kt,{depth:6,wall:[tt.stone,et([W.white,W.white,W.red])],tile:et(W.tile)});let _t=st.F.push(At,Dt,n,kt);for(let Lt=0;Lt<2;Lt++)st.surf(tt.smooth,W.white).box((Lt?1:-1)*6,0,.06,1,1,1.5,0,{foot:.8});st.F.pop(_t)},horses:(At,Dt,kt,K,Ht)=>{let Rt=N,Bt=Rt.F.push(At,Dt,n,kt),_t=Math.min(K-10,88),Lt=Math.min(Ht-22,58);Rt.surf(tt.sand,W.sand).slab(0,-4,.07,_t,Lt,0,.95),Rt.surf(tt.wood,W.wood);let Ot=(ut,vt,P,B)=>{let J=Math.hypot(P-ut,B-vt),w=Math.atan2(B-vt,P-ut);for(let F of[.7,1.25])Rt.box((ut+P)/2,(vt+B)/2,F,J,.12,.16,w,{bottom:!0});let L=Math.round(J/7);for(let F=0;F<=L;F++)Rt.box(ut+(P-ut)*F/L,vt+(B-vt)*F/L,0,.2,.2,1.5,w,{foot:.7})};Ot(-_t/2,-4-Lt/2,_t/2,-4-Lt/2),Ot(_t/2,-4-Lt/2,_t/2,-4+Lt/2),Ot(-_t/2,-4+Lt/2,-_t/2,-4-Lt/2),Rt.F.pop(Bt);let Ft=Math.cos(kt),z=Math.sin(kt),A=-4+Lt/2+6;yi(Rt,At-z*A,Dt+Ft*A,n,_t,8,4.2,kt,{wall:[tt.stone,W.white],tile:et(W.tile),cols:Math.round(_t/5.5),r:.3,simple:"pier"})},garden:(At,Dt,kt,K,Ht)=>{let Rt=V,Bt=Rt.F.push(At,Dt,n,kt),_t=K-12,Lt=Ht-12;Rt.surf(tt.paving,W.white).slab(0,0,.06,3,Lt,0,.9),Rt.slab(0,0,.065,_t,3,0,.9),Rt.surf(tt.smooth,W.white).shaft(0,0,0,3.4,3.4,.7,12,{cap:!0,foot:.8,head:.55}),Rt.surf(tt.stone,W.white);for(let[ut,vt,P,B]of[[0,Lt/2,_t,.5],[0,-Lt/2,_t,.5],[-_t/2,0,.5,Lt],[_t/2,0,.5,Lt]])Rt.box(ut,vt,0,P,B,.9,0,{foot:.8});Rt.F.pop(Bt);let Ot=et(["olive","fruit","fruit","plane"]),Ft=Ot==="plane"?15:11.5,z=Math.cos(kt),A=Math.sin(kt);for(let ut=-_t/2+5;ut<_t/2-3;ut+=Ft)for(let vt=-Lt/2+5;vt<Lt/2-3;vt+=Ft)Math.abs(ut)<4||Math.abs(vt)<4||e.phone&&(ut+vt|0)%2||k.push({x:At+z*ut-A*vt+(T()-.5),y:Dt+A*ut+z*vt+(T()-.5),z:n,s:(Ot==="plane"?9:4)+T()*2.5,kind:Ot,id:"gardens"})},houses:(At,Dt,kt,K,Ht)=>{let Rt=O,Bt=Rt.F.push(At,Dt,n,kt),_t=2+(T()*3|0);for(let Lt=0;Lt<_t;Lt++){let Ot=14+T()*12,Ft=9+T()*5,z=5+T()*5,A=-K/2+12+(K-24)*(Lt+.5)/_t+(T()-.5)*4,ut=(T()-.5)*(Ht-40);on(Rt,A,ut,0,Math.min(Ot,(K-16)/_t),Ft,z,T()<.3?Math.PI/2:0,{wall:[et([tt.stoneBands,tt.stoneChequer,tt.stoneCourses,tt.stone,tt.stone]),et([W.white,W.white,W.red,W.black])],cornice:W.white,tile:et(W.tile),windows:1,doors:[[0,0]]})}Rt.F.pop(Bt);for(let Lt=0;Lt<4;Lt++){let Ot=(T()-.5)*(K-14),Ft=Ht/2-8-T()*8,z=Math.cos(kt),A=Math.sin(kt);k.push({x:At+z*Ot-A*Ft,y:Dt+A*Ot+z*Ft,z:n,s:6+T()*5,kind:et(["plane","cypress","olive"]),id:"gardens"})}}},dt=(At,Dt,kt,K,Ht=104)=>{let Rt=(At+Dt)/2,Bt=Dt-At,_t=Math.floor(re*Rt/Ht),Lt=re*Rt/_t-2;for(let Ot=0;Ot<_t;Ot++){let Ft=m+(Ot+.5)/_t*re;if(ot(Rt,Ft,Lt/2+6))continue;let z=K[(Ot*7+(T()*2|0))%K.length];pt[z](Rt*Math.cos(Ft),Rt*Math.sin(Ft),kt>0?Ft+Math.PI/2:Ft-Math.PI/2,Math.min(Lt,Ht),Bt)}},at=(At,Dt)=>Y.surf(tt.paving,[226,220,205]).sweep([[At-Dt/2,n+.05],[At+Dt/2,n+.05]],{step:G,sense:-1}),R=h+r+5,E=u-r-5,H=(R+E)/2;at(H,9);let X=["temple","garden","gym","garden","houses","horses","temple","garden","houses"];dt(R,H-6,1,X),dt(H+6,E,-1,X);{let At=i.to("guard-house"),Dt=x(H)+.2,kt=(H+10)*Math.cos(Dt),K=(H+10)*Math.sin(Dt),Ht=At.F.push(kt,K,n,Dt-Math.PI/2),Rt=96,Bt=78;for(let[_t,Lt,Ot,Ft,z]of[[0,Bt/2-6,Rt,12,0],[0,-Bt/2+6,Rt,12,0],[-Rt/2+6,0,12,Bt-24,0],[Rt/2-6,0,12,Bt-24,0]])on(At,_t,Lt,0,Ot,Ft,9,z,{wall:[tt.stoneBands,W.white],base:[tt.stone,W.black],cornice:W.red,windows:2,doors:[[Lt>0?0:2,0]],tile:W.tile[2]});for(let _t of[-1,1])for(let Lt of[-1,1])fa(At,_t*(Rt/2-2),Lt*(Bt/2-2),0,9,14,0,{face:[tt.stone,W.red],crown:[tt.stone,W.white]});At.surf(tt.sand,W.sand).slab(0,0,.06,Rt-24,Bt-24,0,.95),At.F.pop(Ht)}let ct=c+r+5,q=f-r-5,lt=d-p,gt=d+p,mt=i.to("racecourse"),U=i.to("racecourse-form"),ht=i.to("barracks");mt.surf(tt.sand,W.sand).sweep([[lt,n+.1],[d,n+.1,.96],[gt,n+.1]],{step:G,sense:-1});for(let[At,Dt]of[[lt,-1],[gt,1]])U.surf(tt.smooth,W.white).sweep([[At-.5,n,.8],[At-.5,n+1],[At+.5,n+1],[At+.5,n,.8]],{step:G,sense:1*(Dt>0,1)});for(let At=0;At<48;At++){let Dt=At/48*re;ot(d,Dt,30)||(as(U,d*Math.cos(Dt),d*Math.sin(Dt),n+.1,.7,6.5,{n:8,tint:At%6?W.white:W.red}),At%6===0&&U.surf(tt.gilt,W.gold).shaft(d*Math.cos(Dt),d*Math.sin(Dt),n+6.6,.5,.05,2,6))}for(let At of[-.13,-.085,.085,.13]){let Dt=x(gt)+At,kt=U.F.push((gt+9)*Math.cos(Dt),(gt+9)*Math.sin(Dt),n,Dt+Math.PI/2);for(let K=0;K<6;K++)U.surf(tt.smooth,W.white).box(0,-K*1.3+3.3,0,60,1.3,.6+(5-K)*.62,0,{foot:.8,topShade:.88});U.F.pop(kt)}let j=At=>Math.floor(re*At/66);for(let[At,Dt]of[[lt-15,-1],[gt+15,1],[lt-31,-1],[gt+31,1]]){let kt=j(At);for(let K=0;K<kt;K++){let Ht=m+(K+.5)/kt*re;ot(At,Ht,40)||K%9===4||on(ht,At*Math.cos(Ht),At*Math.sin(Ht),n,56,9.5,4.6,Dt>0?Ht-Math.PI/2:Ht+Math.PI/2,{wall:[tt.stone,K%4===1?W.red:W.white],windows:1,doors:[[0,-16],[0,0],[0,16]],tile:W.tile[K%4],base:[tt.stone,W.black],rise:2.3})}}at(lt-45,7),at(gt+45,7);let Q=["garden","temple","gym","garden","horses","houses","garden","horses","temple","gym"];dt(ct,lt-50,1,Q),dt(gt+50,q,-1,Q);let it=i.to("ship-sheds"),bt=40,It=7.4,jt=(At,Dt,kt,K)=>{let Ht=it.F.push(At,Dt,0,kt),Rt=4.3,Bt=It/2,_t=-bt/2,Lt=bt/2,Ot=s+.25;it.surf(tt.paving,Ze(W.white,.9)).quad([-Bt,_t-7,-1.3],[Bt,_t-7,-1.3],[Bt,Lt,Ot+1.2],[-Bt,Lt,Ot+1.2],.6,.6,.45,.45),it.surf(tt.stone,W.white);for(let A=0;A<5;A++)it.box(Bt,_t+2+A*((bt-4)/4),s,.7,2.2,Rt,0,{foot:.7});if(it.box(Bt,0,s+Rt,.7,bt,.5,0,{bottom:!0,foot:.7}),K){for(let A=0;A<5;A++)it.box(-Bt,_t+2+A*((bt-4)/4),s,.7,2.2,Rt,0,{foot:.7});it.box(-Bt,0,s+Rt,.7,bt,.5,0,{bottom:!0,foot:.7})}it.wall(Bt,Lt,-Bt,Lt,s,s+Rt+.5,.6,.8);let Ft=s+Rt+.5,z=Ft+1.9;it.surf(tt.tiles,W.tile[(Math.abs(At*7+Dt*3)|0)%4]),it.quad([-Bt-.2,_t-.6,Ft],[0,_t-.6,z],[0,Lt+.3,z],[-Bt-.2,Lt+.3,Ft],.95),it.quad([0,_t-.6,z],[Bt+.2,_t-.6,Ft],[Bt+.2,Lt+.3,Ft],[0,Lt+.3,z],.95),it.surf(tt.wood,W.darkWood).tri([-Bt,_t,Ft],[Bt,_t,Ft],[0,_t,z],.55),it.tri([Bt,Lt,Ft],[-Bt,Lt,Ft],[0,Lt,z],.7),it.F.pop(Ht)};for(let[At,Dt]of[[a,!0],[l,!1],[o,!0]]){let kt=Dt?At+1+bt/2:At-1-bt/2,K=Math.floor(re*kt/(It+.7));for(let Ht=0;Ht<K;Ht++){let Rt=m+(Ht+.5)/K*re,Bt=Ht%14;if(Bt>=6||Math.abs(Math.atan2(Math.sin(Rt-m),Math.cos(Rt-m)))<34/kt||ot(kt,Rt,24)||e.phone&&Ht%28>=9)continue;let _t=Dt?Rt-Math.PI/2:Rt+Math.PI/2;if(jt(kt*Math.cos(Rt),kt*Math.sin(Rt),_t,Bt===0),T()<.7){let Lt=Dt?kt+2:kt-2;S.push({x:Lt*Math.cos(Rt),y:Lt*Math.sin(Rt),z:s+1,rot:Dt?Rt+Math.PI:Rt,tilt:0,sx:1})}}}let Ut=i.to("quays");for(let[At,Dt,kt]of[[f+7,1,44],[M-7,-1,52]]){let K=Math.floor(re*At/(kt+26));for(let Ht=0;Ht<K;Ht++){let Rt=m+(Ht+.5)/K*re;if(!(ot(At,Rt,kt/2+8)||Math.abs(Math.atan2(Math.sin(Rt-m),Math.cos(Rt-m)))<110/At)){if(Ht%5===3){let Bt=Ut.F.push((At+Dt*-6.4)*Math.cos(Rt),(At+Dt*-6.4)*Math.sin(Rt),0,Dt>0?Rt+Math.PI/2:Rt-Math.PI/2);for(let _t=0;_t<14;_t++)Ut.surf(tt.smooth,W.white).box(0,-9+_t*.7+4.5,s,9,.7,(n-s)*(_t+1)/14,0,{foot:.75,topShade:.9});Ut.F.pop(Bt);continue}yi(Ut,At*Math.cos(Rt),At*Math.sin(Rt),s,kt,9,4.4,Dt>0?Rt+Math.PI/2:Rt-Math.PI/2,{wall:[tt.stone,Ht%3?W.white:W.red],tile:W.tile[Ht%4],r:.4,cols:Math.round(kt/5.5),simple:"pier"})}}}return{trees:k,hulls:S,strip:y,rW3:C,rL2:b}};var Pl=(i,t)=>{let e=new xi(new vi,"block"),n=Hn(i),s=(r,a)=>{let l=-22;for(;l<21;){let o=Math.min(22-l,7.5+n()*6.5),h=9+n()*3.5,u=n()<.35?6.2+n()*1.4:3.3+n()*1.2,c=W.plaster[n()*6|0],f=W.tile[n()*4|0],d=r+(a>0?-1:1)*(h/2-5),p=n()<.24;if(t)on(e,l+o/2,d,0,o-.25,h,u,a>0?0:Math.PI,{wall:[tt.plaster,c],tile:f,roof:p?"flat":"gable",windows:1,doors:[[0,(n()-.5)*(o-3.4)]],rise:1.3+n()*.8,ridgeAlongY:!1,over:.45,base:n()<.4?[tt.stone,W.white]:null});else{let v=e.F.push(l+o/2,d,0,a>0?0:Math.PI),g=1.3+n()*.8,m=(o-.25)/2;e.surf(tt.plaster,c).box(0,0,0,o-.25,h,u+(p?.6:0),0,{top:p,foot:.78,sides:p?15:3,topShade:.82}),p||(e.surf(tt.tiles,f).quad([-m,-h/2-.4,u-.2],[m,-h/2-.4,u-.2],[m,0,u+g],[-m,0,u+g],.92,.92,1,1),e.quad([m,h/2+.4,u-.2],[-m,h/2+.4,u-.2],[-m,0,u+g],[m,0,u+g],.92,.92,1,1),e.surf(tt.plaster,c).tri([m,-h/2,u],[m,h/2,u],[m,0,u+g],.85),e.tri([-m,h/2,u],[-m,-h/2,u],[-m,0,u+g],.85)),e.F.pop(v)}l+=o}};return s(-10,1),s(10,-1),t&&(e.surf(tt.plaster,W.plaster[1]).box(-21.6,0,0,.5,9,2.4,0,{foot:.75}),e.box(21.6,0,0,.5,9,2.4,0,{foot:.75}),e.surf(tt.wood,W.darkWood).wall(-21.9,1,-21.9,-1,0,2,.8),e.surf(tt.earth,[205,192,168]).slab(0,0,.04,43,9,0,.75)),e.geometry()},Qd=(i,t)=>{let{rT:e,core:n,B:s,SEA:r,off:a,bridgeHalf:l,canalHalf:o,k:h}=i,u=Hn(1180),c={low:Pl(11,!1),high:[Pl(21,!0),Pl(22,!0),Pl(23,!0)]},f=t.phone?8:24,d=Array.from({length:f},()=>({blocks:[],cx:0,cy:0})),p=37,v=Math.floor((n-e-18)/p),g=t.phone?Math.min(v,7):v,m=[];for(let x=0;x<g;x++){let _=e+24+x*p,b=Math.floor(re*_/50);for(let M=0;M<b;M++){let C=r+(M+.5)/b*re,y=_*Math.cos(C),T=_*Math.sin(C);if(T<0&&(Math.abs(y)<o+12*h+30||Math.abs(y-a)<l+28))continue;let k=(C-r)/re*16;if(Math.abs(k-Math.round(k))*(re/16)*_<29)continue;if(u()<.035){for(let Z=0;Z<5;Z++)m.push({x:y+(u()-.5)*34,y:T+(u()-.5)*22,z:s,s:6+u()*5,kind:u()<.5?"plane":"cypress",id:"house-form"});continue}let S=Math.min(f-1,Math.floor((C-r)/re%1*f)),G=.86+u()*.28;d[S].blocks.push({x:y,y:T,z:s,rot:C+Math.PI/2+(u()<.5?Math.PI:0),sx:re*_/b/50,sy:1,sz:.9+u()*.25,tint:[255*Math.min(1,G),255*Math.min(1,G*.985),255*Math.min(1,G*.95)],kind:u()*3|0})}}for(let x=0;x<f;x++){let _=r+(x+.5)/f*re,b=(e+n)/2;d[x].cx=b*Math.cos(_),d[x].cy=b*Math.sin(_),d[x].reach=re*b/f/2+(n-e)/2}return{protos:c,sectors:d,trees:m}};var tf=(i,t,e,n,s)=>{let r=[];for(let a=0;a<=n;a++){let l=a/n,[o,h,u,c]=e(l),f=(l-.5)*t;r.push([[f,-o,u+c],[f,-o*.96,u*.45+c],[f,-o*.6,-h*.55+c],[f,0,-h+c],[f,o*.6,-h*.55+c],[f,o*.96,u*.45+c],[f,o,u+c]])}i.surf(tt.wood,s).loft(r,{flip:!0}),i.surf(tt.wood,Ze(W.wood,1.05));for(let a=0;a<n;a++){let l=r[a],o=r[a+1];i.quad([l[0][0],l[0][1],l[0][2]-.25],[o[0][0],o[0][1],o[0][2]-.25],[o[6][0],o[6][1],o[6][2]-.25],[l[6][0],l[6][1],l[6][2]-.25],.8)}return r},Il=(i,t,e,n=.07)=>i.quad([t[0],t[1]-n,t[2]],[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],[e[0],e[1]-n,e[2]]),ef=i=>{let t=()=>new xi(new vi,"ship"),e=(s,r)=>{let a=t(),l=37;tf(a,l,o=>{let h=2.75*Math.min(1,Math.sin(Math.min(1,o*1.25)*Math.PI/2)**.7)*(o>.82?Math.max(.06,1-((o-.82)/.18)**1.6):1),u=o<.16?((.16-o)/.16)**2*4.2:o>.9?((o-.9)/.1)**2*1.2:0;return[Math.max(.12,h*(o<.1?.35+o*6.5:1)),1*(o<.12?o/.12:1),2.1,u]},r||i.phone?7:12,W.hull),a.surf(tt.gilt,W.brass).box(l/2+.9,0,-.5,2.6,.5,.9,0,{bottom:!0}),a.surf(tt.wood,W.hull);for(let o of[-1,1])a.box(0,o*3,1.5,l*.66,.6,.5,0,{bottom:!0,foot:.7});a.surf(tt.wood,Ze(W.red,1.1)).box(l/2-2.2,0,2.1,.5,2.6,.9,0);for(let o=-1;o<=1;o++)a.surf(tt.wood,W.hull).quad([-l/2+.2,o*.5-.12,6],[-l/2+.2,o*.5+.12,6],[-l/2+2.6+Math.abs(o)*.3,o*.9+.12,8.4-Math.abs(o)*.5],[-l/2+2.6+Math.abs(o)*.3,o*.9-.12,8.4-Math.abs(o)*.5]);if(s){a.surf(tt.wood,W.wood).shaft(1.5,0,1.8,.2,.13,10.5,5),a.box(1.5,0,11.4,.3,11,.3,0,{bottom:!0}),a.surf(tt.cloth,W.sail).box(1.5,0,10.9,.5,10.4,.55,0,{bottom:!0}),a.surf(tt.wood,W.darkWood),Il(a,[1.5,0,12.2],[l/2-2,0,2.6]),Il(a,[1.5,0,12.2],[-l/2+2,0,5]);let o=i.phone?12:28;for(let h=0;h<o;h++)for(let u of[-1,1]){let c=-l*.3+l*.6*h/(o-1);a.surf(tt.wood,W.wood).quad([c,u*2.9,1.5],[c+.14,u*2.9,1.5],[c+.14-1.2,u*7.2,.05],[c-1.2,u*7.2,.05])}}return a.geometry()},n=s=>{let r=t(),a=19;tf(r,a,l=>{let o=3*Math.sin(Math.min(1,l*1.6)*Math.PI/2)**.6*(l>.72?Math.max(.05,Math.cos((l-.72)/.28*Math.PI/2)**.8):1),h=l<.14?((.14-l)/.14)**1.6*3:l>.86?((l-.86)/.14)**1.6*2.2:0;return[Math.max(.1,o),1.5*Math.min(1,l/.1,(1-l)/.08),1.9,h]},7,Ze(W.hull,1.15)),r.surf(tt.wood,Ze(W.hull,.9));for(let l of[-1,1])r.box(0,l*3.02,1.35,a*.7,.16,.3,0,{bottom:!0});if(r.surf(tt.wood,W.wood).shaft(.6,0,1.6,.24,.15,12.5,5),r.box(.6,0,12.6,.3,11.5,.3,0,{bottom:!0}),s){r.surf(tt.cloth,W.sail);let l=4;for(let o=0;o<l;o++){let h=12.6-o*8.2/l,u=12.6-(o+1)*8.2/l,c=p=>.75+Math.sin(p*Math.PI)*1.6,f=o/l,d=(o+1)/l;r.quad([c(f),-5.4,h],[c(f),5.4,h],[c(d),5.2,u],[c(d),-5.2,u],1,1,.9,.9)}}else r.surf(tt.cloth,W.sail).box(.6,0,12.1,.55,10.8,.6,0,{bottom:!0});r.surf(tt.wood,W.darkWood),Il(r,[.6,0,14],[a/2-.6,0,4.2]),Il(r,[.6,0,14],[-a/2+1,0,4.6]);for(let l of[-1,1])r.quad([.6,0,13.6],[.74,0,13.6],[.74,l*2.9,2],[.6,l*2.9,2]),r.surf(tt.wood,W.wood).box(-a/2+2.2,l*2.6,-.6,.25,.5,4.4,0,{foot:.8});r.surf(tt.wood,Ze(W.wood,.9)).box(-a/2+3.4,0,1.6,2.6,3.2,1.5,0,{foot:.8}),r.surf(tt.tiles,[240,200,170]);for(let[l,o]of[[3.5,-.8],[4.6,.7]])r.shaft(l,o,1.6,.34,.46,.95,5,{cap:!0});return r.geometry()};return{trireme:e(!0),hull:e(!1,!0),merchant:n(!1),sailing:n(!0)}},nf=(i,t)=>{let{rIsle:e,rW1:n,rL1:s,rW2:r,rL2:a,rW3:l,canalHalf:o,edge:h,SEA:u,off:c,bridgeHalf:f,k:d}=i,p=Hn(1190),v=[],g=[],m=[],x=[],_=(M,C)=>!(C<0&&Math.abs(M-c)<f+16),b=t.phone?.5:1;for(let M=0;M<9*b;M++){let C=p()*re,y=(e+n)/2+(p()-.5)*70,T=y*Math.cos(C),k=y*Math.sin(C);_(T,k)&&v.push({x:T,y:k,z:.25,rot:C+Math.PI/2+(p()-.5)*.3})}for(let M=0;M<16*b;M++){let C=p()*re,y=(s+r)/2+(p()-.5)*190,T=y*Math.cos(C),k=y*Math.sin(C);_(T,k)&&v.push({x:T,y:k,z:.25,rot:C+Math.PI/2+(p()-.5)*.4})}for(let M=0;M<26*b;M++){let C=p()*re,y=e+5.5,T=y*Math.cos(C),k=y*Math.sin(C);_(T,k)&&Math.abs(C-Math.PI/2)>.12&&g.push({x:T,y:k,z:.25,rot:C+Math.PI/2})}for(let[M,C]of[[a+12,1],[l-12,-1]]){let y=Math.floor(re*M/15);for(let T=0;T<y;T++){if(p()>.21*b)continue;let k=u+(T+.5)/y*re,S=M*Math.cos(k),G=M*Math.sin(k);!_(S,G)||Math.abs(Math.atan2(Math.sin(k-u),Math.cos(k-u)))<90/M||m.push({x:S,y:G,z:.1,rot:C>0?k:k+Math.PI,sx:.8+p()*.5})}}for(let M=0;M<110*b;M++){let C=p()*re,y=(a+l)/2+(p()-.5)*380,T=y*Math.cos(C),k=y*Math.sin(C);_(T,k)&&(p()<.3?x:m).push({x:T,y:k,z:.1,rot:C+Math.PI/2+(p()-.5)*1.4+(p()<.5?Math.PI:0),sx:.8+p()*.5})}for(let M=0;M<26*b;M++){let C=l+p()*(h-l-30),y=p()<.5?-1:1;(p()<.55?x:m).push({x:y*o*(.25+p()*.4),y:-C,z:.1,rot:y>0?Math.PI/2:-Math.PI/2,sx:.85+p()*.45})}for(let M=0;M<30*b;M++){let C=l+60+p()*(h-l-120),y=p()<.5?-1:1;m.push({x:y*(o-3.6),y:-C,z:.1,rot:Math.PI/2*(p()<.5?1:-1),sx:.8+p()*.4})}return{triremes:v,hulls:g,merchants:m,sailing:x}};var ma=(i,t,e,n,s,r,a,l,o)=>{let h=Hn(o),u=()=>.86+h()*.28;i.surf(tt.leaf,l).turned(t,e,n,[[s*.3,0],[s*u(),r*.36],[s*.8*u(),r*.72],[.01,r]],a,{rot:h()*6,squash:.9+h()*.2})},sf=i=>{let e=()=>new xi(new vi,"tree"),n=e();n.surf(tt.wood,W.trunk).shaft(0,0,0,.022,.018,.12,4),n.surf(tt.leaf,[255,255,255]).turned(0,0,.07,[[.03,0],[.095,.14],[.1,.36],[.06,.72],[.004,.93]],5);let s=e();s.surf(tt.wood,W.trunk).shaft(0,0,0,.035,.025,.42,5),ma(s,.06,.02,.3,.3,.52,5,[255,255,255],3),ma(s,-.14,-.06,.4,.26,.6,5,[235,245,225],4);let r=e();r.surf(tt.wood,W.trunk).shaft(0,0,0,.03,.02,.66,5),ma(r,0,0,.6,.36,.4,6,[215,235,205],5);let a=e();a.surf(tt.wood,W.trunk).shaft(0,0,0,.06,.04,.34,5),ma(a,0,0,.24,.46,.76,5,[255,255,255],6);let l=e();return l.surf(tt.wood,W.trunk).shaft(0,0,0,.045,.03,.36,4),ma(l,0,0,.28,.4,.72,5,[255,255,255],7),{cypress:n.geometry(),plane:s.geometry(),pine:r.geometry(),olive:a.geometry(),fruit:l.geometry()}},rf={cypress:[[150,175,150],[170,190,160],[135,160,140]],plane:[[255,255,255],[235,245,220],[220,235,205],[245,240,200]],pine:[[190,215,185],[205,225,195]],olive:[[225,232,236],[205,216,222]],fruit:[[255,255,235],[240,255,220],[225,240,205]]};var af=Math.PI*2,gh=Object.fromEntries(ri.map(i=>[i,[`${i}_c.jpg`,`${i}_n.jpg`]])),os=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},jx=(i,t,e,n)=>{let s=Math.floor(i),r=Math.floor(t),a=i-s,l=t-r,o=a*a*(3-2*a),h=l*l*(3-2*l),u=(c,f)=>os((c%e+e)%e,(f%e+e)%e,n);return(u(s,r)*(1-o)+u(s+1,r)*o)*(1-h)+(u(s,r+1)*(1-o)+u(s+1,r+1)*o)*h},un=(i,t,e,n,s=4)=>{let r=0,a=.5,l=1;for(let o=0;o<s;o++)r+=a*jx(i*l,t*l,e*l,n+o),a*=.5,l*=2;return r/(1-2**-s)},Jx={ashlar:(i,t)=>{let n=Math.floor(t*8),s=t*8-n,r=2+(n%3===1?1:0),a=os(n,0,3)*.6,l=(i+a)*r,o=Math.floor(l),h=l-o,u=1/r,c=Math.min(h*u*4.2,(1-h)*u*4.2,s*.525,(1-s)*.525)/.022,f=Math.min(1,c),d=.86+.2*os(o%r,n,7),p=un(i*24,t*24,24,5),v=un(i*3,t*3,3,9),g=214*d*(.9+.2*p)*(.9+.14*v)*(.55+.45*f);return[g,g*.985,g*.95,f*(.75+.25*p),.9-.12*p]},paving:(i,t)=>{let n=i*5,s=t*5+Math.floor(i*5)%2*.5,r=Math.floor(n),a=Math.floor(s),l=n-r,o=s-a,h=Math.min(1,Math.min(l,1-l,o,1-o)/.03),u=.84+.22*os(r%5,a%5,11),c=un(i*28,t*28,28,13),f=208*u*(.88+.22*c)*(.5+.5*h);return[f,f*.98,f*.93,h*(.8+.2*c),.86-.14*c]},tiles:(i,t)=>{let s=i*10,r=t*8,a=Math.floor(s),l=Math.floor(r),o=s-a,h=r-l,u=Math.abs(Math.sin(o*Math.PI)),c=h,f=.8+.3*os(a,l,17),d=un(i*30,t*30,30,19),p=.25+.55*u+.2*(1-c),v=f*(.86+.25*d)*(.62+.38*u)*(c<.08?.7:1);return[196*v,112*v,76*v,p,.82]},plaster:(i,t)=>{let e=un(i*6,t*6,6,23,5),n=un(i*40,t*40,40,29,2),s=212*(.9+.14*e)*(.95+.08*n);return[s,s*.99,s*.96,.5+.3*e+.2*n,.9]},metal:(i,t)=>{let n=i*2,s=t*2*2,r=n-Math.floor(n),a=s-Math.floor(s),l=Math.min(1,Math.min(r,1-r,a*.5,(1-a)*.5)/.012),o=un(i*3,t*90,3,31,3),h=un(i*9,t*9,9,37),u=Math.hypot(r*8%1-.5,(a-.06)*4)<.16||Math.hypot(r*8%1-.5,(a-.94)*4)<.16?1:0,c=222*(.9+.1*o)*(.86+.16*h)*(.72+.28*l);return[c,c,c,.5*l+.1*o+.4*u,.34+.32*h+.1*o+.2*(1-l)]},grass:(i,t)=>{let e=un(i*8,t*8,8,41,5),n=un(i*60,t*60,60,43,2),s=un(i*3,t*3,3,47),r=.7+.5*e*n*2;return[(86+46*s)*r,(112+16*s)*r,54*r,n,.95]},sand:(i,t)=>{let e=un(i*10,t*10,10,53,4),n=os(Math.floor(i*256),Math.floor(t*256),59),s=.86+.14*e+.06*n;return[216*s,198*s,162*s,.5*e+.5*n,.96]},wood:(i,t)=>{let n=t*6,s=Math.floor(n),r=n-s,a=Math.min(1,Math.min(r,1-r)/.04),l=un(i*4+os(s,0,61)*9,t*70,4,67,3),h=(.8+.3*os(s,1,71))*(.75+.4*l)*(.55+.45*a);return[150*h,112*h,78*h,a*(.6+.4*l),.8]},rock:(i,t)=>{let e=un(i*5,t*5,5,73,6),n=un(i*2,t*14,2,79,3),s=150*(.6+.5*e)*(.85+.25*n);return[s,s*.97,s*.92,.6*e+.4*n,.94]},leaf:(i,t)=>{let e=un(i*12,t*12,12,83,3),n=un(i*36,t*36,36,89,2),s=.45+1.1*e*(.6+.8*n);return[84*s,112*s,58*s,e*n*1.6,.86]}},of=(i,t)=>{let e=new Uint8Array(t*t*4),n=new Uint8Array(t*t*4),s=new Float32Array(t*t),r=Jx[i];for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=r((o+.5)/t,(l+.5)/t),u=(l*t+o)*4;e[u]=Math.min(255,h[0]),e[u+1]=Math.min(255,h[1]),e[u+2]=Math.min(255,h[2]),e[u+3]=255,s[l*t+o]=h[3],n[u+2]=Math.min(255,h[4]*255),n[u+3]=255}let a=t/64;for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=(s[l*t+(o+1)%t]-s[l*t+(o+t-1)%t])*a,u=(s[(l+1)%t*t+o]-s[(l+t-1)%t*t+o])*a,c=Math.hypot(h,u,1),f=(l*t+o)*4;n[f]=(-h/c*.5+.5)*255,n[f+1]=(-u/c*.5+.5)*255}return{colour:e,detail:n}},Ll=(i,t)=>{let e=new ys(new Uint8Array(i*i*4*ri.length),i,i,ri.length);return e.format=Ye,e.type=an,e.colorSpace=t?Ie:Bn,e.wrapS=e.wrapT=Pi,e.minFilter=rn,e.magFilter=Ae,e.generateMipmaps=!0,e.anisotropy=8,e},lf=(i=128)=>{let t=Ll(i,!0),e=Ll(i,!1);return ri.forEach((n,s)=>{let r=of(n,i);t.image.data.set(r.colour,s*i*i*4),e.image.data.set(r.detail,s*i*i*4)}),t.needsUpdate=e.needsUpdate=!0,{colour:t,detail:e,size:i}},cf=(i=256)=>{let t=new Uint8Array(i*i*4),e=5,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,s=Array.from({length:18},()=>{let a=Math.round((n()-.5)*26)||1,l=Math.round((n()-.5)*26);return[a,l,n()*af,1/Math.hypot(a,l)**1.2]});for(let a=0;a<i;a++)for(let l=0;l<i;l++){let o=0,h=0;for(let[p,v,g,m]of s){let x=Math.cos(af*(p*l+v*a)/i+g)*m;o+=x*p,h+=x*v}let u=-o*.16,c=-h*.16,f=Math.hypot(u,c,1),d=(a*i+l)*4;t[d]=(u/f*.5+.5)*255,t[d+1]=(c/f*.5+.5)*255,t[d+2]=(1/f*.5+.5)*255,t[d+3]=255}let r=new Sn(t,i,i,Ye);return r.wrapS=r.wrapT=Pi,r.minFilter=rn,r.magFilter=Ae,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r},hf=async(i,t)=>{let e=`${globalThis.__ASSETS__||"./"}city/`,n=globalThis.__CITYTEX__,s=async p=>{let v=await fetch(n?.[p]??e+p);if(!v.ok)throw new Error(`${p}: ${v.status}`);return createImageBitmap(await v.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"})},r=await Promise.all(ri.map(async p=>{let v=t[p];if(!v)return null;try{return{colour:await s(v[0]),detail:await s(v[1])}}catch{return null}}));if(!r.some(Boolean))return null;let a=Ll(i,!0),l=Ll(i,!1),h=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(i,i):Object.assign(document.createElement("canvas"),{width:i,height:i})).getContext("2d",{willReadFrequently:!0}),u=p=>(h.setTransform(1,0,0,-1,0,i),h.clearRect(0,0,i,i),h.drawImage(p,0,0,i,i),p.close?.(),h.getImageData(0,0,i,i).data),c=128,f=p=>{let v=new Uint8Array(i*i*4),g=i/c;for(let m=0;m<i;m++)for(let x=0;x<i;x++){let _=((m/g|0)*c+(x/g|0))*4,b=(m*i+x)*4;v[b]=p[_],v[b+1]=p[_+1],v[b+2]=p[_+2],v[b+3]=255}return v},d=[];for(let p=0;p<ri.length;p++){if(r[p])a.image.data.set(u(r[p].colour),p*i*i*4),l.image.data.set(u(r[p].detail),p*i*i*4);else{d.push(ri[p]);let v=of(ri[p],c);a.image.data.set(f(v.colour),p*i*i*4),l.image.data.set(f(v.detail),p*i*i*4)}await new Promise(v=>setTimeout(v,0))}return a.needsUpdate=l.needsUpdate=!0,{colour:a,detail:l,size:i,loaded:ri.length-d.length,missing:d}};var vh=i=>new se().setRGB(i[0]/255,i[1]/255,i[2]/255,Ie),Kx=`
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
`,Qx=`
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
`,ty=()=>{let i=me.lights_fragment_begin,t=i.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),e=i.indexOf("#endif",i.indexOf("#pragma unroll_loop_end",t))+6;if(t<0||e<6)throw new Error("city: three.js light loop not as expected");return i.slice(0,t)+Qx+i.slice(e)},ey=`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`,ny=`
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
`,iy=`
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
`,sy=`
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
`,ry=`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`,ay=`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`,uf=i=>{i.fragmentShader=i.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
${Kx}`).replace("#include <lights_fragment_begin>",ty())},Dl=({phone:i=!1}={})=>{let t=lf(i?64:128),e={tColour:{value:t.colour},tDetail:{value:t.detail},uSurfA:{value:ua.map(p=>{let v=Tl[p];return new ge(v.layer,v.size,v.metal,v.rough)})},uSurfB:{value:ua.map(p=>{let v=Tl[p];return new ge(v.bump,v.pattern,v.wet,v.keep)})},uStone:{value:[vh(W.white),vh(W.black),vh(W.red)]},uGlow:{value:new se(0,0,0)},uTime:{value:0}},n=p=>{let v=new ir({color:16777215,roughness:1,metalness:0,side:sn,envMapIntensity:1});v.shadowSide=sn;let g={value:p};return v.onBeforeCompile=m=>{Object.assign(m.uniforms,{tColour:e.tColour,tDetail:e.tDetail,uSurfA:e.uSurfA,uSurfB:e.uSurfB,uStone:e.uStone,uDim:g,uGlow:e.uGlow}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
${ey}`).replace("#include <project_vertex>",`#include <project_vertex>
${ny}`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
${iy}`).replace("#include <map_fragment>",sy).replace("#include <roughnessmap_fragment>","float roughnessFactor = cityRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = cityMetal;").replace("#include <normal_fragment_maps>",ry).replace("#include <opaque_fragment>",`${ay}
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
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`}),d=(p,v,g)=>new qe({color:new se(p,v,g),transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1,side:sn});return{solid:s,dim:r,glow:a,seaDim:o,glowColour:e.uGlow.value,sea:u(!1),pool:u(!0),ghost:f,wallLine:d(1.5,1.1,.4),canalLine:d(.25,.7,1.3),shared:e,waterUniforms:h,ghostUniforms:c,textures:t}};var Nl=new Map([...ph.from_text.map(i=>[i.id,{id:i.id,what:i.what,ref:i.ref,kind:"text",ours:i.shape==="ours"}]),...ph.choices.map(i=>[i.id,{id:i.id,what:i.what,ref:null,kind:"choice",ours:!0}])]),df=(i={},t={})=>{let e=typeof performance<"u"?performance.now():0,n=Vd(i),s={phone:!!t.phone},r=t.materials??Dl(s),a=new Sl,l=new $e,o=Hn(42),h=[],u=(O,Y,ot={})=>{let et=Nl.get(Y);return et||console.warn(`city: "${Y}" is not in reconstruction.json`),O.userData={...O.userData,id:Y,kind:et?.kind??"choice",ghostable:!!et?.ours&&!ot.keep,solid:O.material,...ot},O.name=Y,!O.userData.line&&!O.userData.water&&(O.castShadow=O.receiveShadow=!0),l.add(O),h.push(O),O},c=qd(a,n,s),f=Yd(a,n,s),d=Jd(a,n,s),p=Kd(a,n,s);for(let[O,Y]of a.bins){if(!Y.nv)continue;let[ot,et]=O.split("#");u(new pe(Y.geometry(),r.solid),ot,et?{[et]:!0}:{})}for(let O of Xd(n,r))u(O,O.userData.id);for(let O of[...d.pools,...f.basins.map(Y=>({...Y,z:Y.z+.8,rot:0,id:"aqueducts"}))]){let Y=O.arc?new qn(O.r0,O.r1,Math.ceil((O.arc[1]-O.arc[0])*O.r1/6),1,O.arc[0],O.arc[1]-O.arc[0]):O.r?new Gr(O.r,20):new Un(O.w,O.d),ot=new pe(Y,r.pool);O.arc?ot.position.z=O.z:(ot.position.set(O.x,O.y,O.z),ot.rotation.z=O.rot??0),ot.receiveShadow=!0,u(ot,O.id,{water:!0,pool:!0})}let v=sf(s),g=Qd(n,s),m=new Map;for(let O of[...d.trees,...p.trees,...g.trees]){let Y=`${O.kind}|${O.id}`;m.has(Y)||m.set(Y,[]);let ot=rf[O.kind],et=ot[o()*ot.length|0],pt=.85+o()*.3;m.get(Y).push({x:O.x,y:O.y,z:O.z-.1,rot:o()*re,sx:O.s*(.9+o()*.3),sy:O.s*(.9+o()*.3),sz:O.s,tint:[Math.min(255,et[0]*pt),Math.min(255,et[1]*pt),Math.min(255,et[2]*pt)]})}let x=0;for(let[O,Y]of m){let[ot,et]=O.split("|");x+=Y.length,u(Ni(v[ot],r.solid,Y),et,{keep:et!=="house-form",tree:!0})}let _=ef(s),b=nf(n,s),M=[255,255,255],C=O=>O.map(Y=>({...Y,sy:Y.sx,sz:Y.sx,tint:Y.tint??M}));for(let O of c.dock.mouths)b.hulls.push({x:O,y:c.dock.yFace-c.dock.dockDeep*.5,z:.2,rot:-Math.PI/2});u(Ni(_.hull,r.solid,C(p.hulls)),"shipyards"),u(Ni(_.hull,r.solid,C(b.hulls)),"triremes",{reflect:!0}),u(Ni(_.trireme,r.solid,C(b.triremes)),"triremes",{reflect:!0}),u(Ni(_.merchant,r.solid,C(b.merchants)),"merchant-ships",{reflect:!0}),u(Ni(_.sailing,r.solid,C(b.sailing)),"merchantmen",{reflect:!0});let y=g.sectors.map(O=>{let Y=O.blocks.length?u(Ni(g.protos.low,r.solid,O.blocks),"house-form"):null,ot=s.phone?[]:[0,1,2].map(et=>{let pt=O.blocks.filter(at=>at.kind===et);if(!pt.length)return null;let dt=u(Ni(g.protos.high[et],r.solid,pt),"house-form");return dt.visible=!1,dt}).filter(Boolean);return{...O,low:Y,high:ot,near:!1}}),T=new Set(["wall-brass","wall-tin","wall-orichalcum","ring-walls","wall-towers","bridges","bridge-gates","stone","rings","ship-sheds","quays","rock-docks","ship-passages","canal"]);for(let O of h)(O.userData.reflect||T.has(O.userData.id)&&!O.userData.water&&!O.userData.line&&!O.userData.teeth)&&O.layers.enable(1);let k=mh.filter(O=>h.some(Y=>Y.userData.id===O)).map(O=>{let Y=Nl.get(O);return{id:O,what:Y.what,ref:Y.ref,kind:Y.kind}}),S=n,G=d.temple,Z={canal:[0,-(S.rW3+330),520,74,0],"merchant-ships":[-420,-(S.rW3-150),380,76,300],houses:[-360,-(S.rT+190),300,68,25],"house-form":[-360,-(S.rT+190),160,74,25],harbours:[S.off-260,-(S.rL2+S.rW3)/2,1e3,68,332],bridges:[S.off+150,-(S.rL2+300),420,74,330],"bridge-gates":[S.off+6,-(S.bridges[2][1]+70),120,80,0],aqueducts:[S.off-8,-(S.bridges[1][1]+30),90,72,20],"wall-brass":[S.off+330,-(S.r2b-60),420,78,300],"ring-walls":[S.off+60,-(S.r2b+30),150,80,60],"wall-towers":[S.off+200,-(S.r2b+10),160,78,310],"ship-passages":[0,-(S.rL2+110),170,82,0],racecourse:[S.off+420,-(S.rcMid-60),520,70,290],barracks:[S.off+240,-(S.rcMid+S.rcHalf+30),170,70,300],"horse-grounds":[S.off+500,-(S.r2a+80),300,64,330],gymnasia:[S.off+330,-(S.r1a+70),260,62,320],gardens:[S.off+260,-(S.r2b-70),240,62,300],"ring-temples":[S.off-300,-(S.r1a+80),240,66,30],"patterned-buildings":[S.off-420,-(S.r1b-60),220,66,20],shipyards:[S.off+330,-(S.rW2-60),260,74,300],"ship-sheds":[S.off+330,-(S.rW2-60),160,78,300],"wall-tin":[S.off+220,-(S.r1b+60),300,78,310],"guard-house":[S.off+200,-(S.r1a+130),260,62,60],"rock-docks":[0,S.rIsle+60,150,80,180],"wall-orichalcum":[S.off+150,-(S.rIsle+60),240,78,320],"guard-dwellings":[-(S.Rs+50),-40,190,66,90],springs:[330,250,190,66,230],reservoirs:[300,300,200,62,230],baths:[120,420,220,62,190],grove:[-220,380,300,66,150],palace:[0,110,330,62,0],shrine:[0,-20,150,68,15],"shrine-wall":[0,-30,120,72,0],hall:[0,0,60,30,0],altar:[d.altar.x+10,d.altar.y,110,72,280],statues:[G.x+G.L/2+20,G.y-G.W/2-10,90,78,300],"votive-outside":[S.off,-(S.rampTop-40),70,78,0],temple:[G.x,G.y,215,70,40],pinnacles:[G.x+G.L/2,G.y,120,60,270],"temple-interior":[G.x+20,G.y,70,84,270,G.floor],"temple-ceiling":[G.x-20,G.y,40,62,270,G.floor],poseidon:[G.x-30,G.y,60,84,270,G.floor],nereids:[G.x+10,G.y+12,30,80,250,G.floor],"votive-inside":[G.x+30,G.y-20,30,80,200,G.floor],pillar:[G.x+22,G.y,26,82,270,G.floor],rings:[0,0,S.rW3*3.4,58,330],island:[0,-60,900,62,0],hill:[S.off+40,-(S.rampFoot+40),200,76,350],stone:[S.off+120,-(S.r1b+40),120,80,300],quays:[S.off+150,-(S.rT-20),140,82,290],"outer-wall":[0,0,S.rWall*2.6,20,0],extent:[0,-S.core,900,66,0],triremes:[S.off+140,-(S.rL1+150),200,78,300],merchantmen:[60,-(S.rW3+200),200,80,0],"island-gardens":[-(S.Rp+30),-30,160,70,90],"racecourse-form":[S.off+60,-(S.rcMid+S.rcHalf+30),180,76,330],"ring-layout":[S.off+300,-(S.r1a+140),300,62,300]},st={centre:[0,0],harbour:[S.off-40,-(S.rL2+150)],temple:[G.x+10,G.y],quay:[S.off+40,-(S.rT-24)]},N=(typeof performance<"u"?performance.now():0)-e,V=0;for(let O of h){let Y=O.geometry,ot=(Y.index?Y.index.count:Y.attributes.position.count)/3;V+=ot*(O.isInstancedMesh?O.count:1)}return{group:l,meshes:h,parts:k,spots:Z,lab:st,sectors:y,plan:n,temple:d.temple,hall:d.hall,radius:n.edge+80,wallRadius:n.rWall,coreRadius:n.rW3,shores:n.shores,materials:r,params:n.P,bank:n.B,stats:{buildMs:N,triangles:V,meshes:h.length,trees:x}}};var oy=i=>{let t=Math.acos($t(i,-1,1))*180/Math.PI,e=Math.min(38,1/(Math.max(i,0)+.15*Math.max(93.885-t,.5)**-1.253)),n=$t((i+.035)/.055,0,1),s=n*n*(3-2*n);return[.0464+.0098+.012,.1085+.0282+.012,.2648+.0013+.012].map(r=>Math.exp(-r*e)*s)},ly=i=>{let t=$t((i+.14)/.44,0,1),e=t*t*(3-2*t);return[.1+.1*e,.13+.17*e,.26+.24*e].map(s=>s*e*.55+.004)},Fl=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.active=!1,this.site=null,this.city=null,this.params={...Ml},this.pending=0,this.buildMs=null,this.ghost=!1,this.lit=null,this.cut=!1;let e=t.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=bs;let n=t.phone?1024:2048;this.suns=[0,1,2].map(r=>{let a=new Xr(16777215,Math.PI);return a.castShadow=!0,a.shadow.mapSize.set(r===2&&!t.phone?4096:n,r===2&&!t.phone?4096:n),a.shadow.autoUpdate=!1,a.shadow.radius=1.4,a.layers.enable(1),this.scene.add(a,a.target),a}),this.cascades=[{half:0,c:new ft(1e9,0,0)},{half:0,c:new ft(1e9,0,0)},{half:0,c:new ft(1e9,0,0)}],this.pmrem=new dr(e),this.skyUniforms={uSky:{value:new ft(.1,.16,.27)},uSun:{value:new ft(0,0,1)},uSunColour:{value:new ft(1,1,1)}};let s=new pe(new kn(50,32,16),new Xe({side:nn,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
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
        }`})),this.dome.rotation.x=Math.PI/2,this.dome.frustumCulled=!1,this.dome.renderOrder=-1,this.scene.add(this.dome),this.lastSun=new ft,this.env=null,this.materials=null,this.mirror=t.phone?null:{target:null,camera:new We,vp:new xe,on:!1},this.mirror&&this.mirror.camera.layers.set(1),this.ray=new Yr}get turn(){return Math.PI-this.params.seaBearing*yt}toCity(t,e){let n=-this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toScene(t,e){let n=this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toLonLat(t,e){let n=this.site.lat*yt;return[this.site.lon*yt+t/(ne*Math.cos(n)),n+e/ne]}fromLonLat(t,e){let n=this.site.lat*yt,s=t-this.site.lon*yt;return s=Math.atan2(Math.sin(s),Math.cos(s)),[s*ne*Math.cos(n),(e-n)*ne]}place({lat:t,lon:e,bearing:n=180,stadion:s=this.params.stadion}){let r=!this.city||s!==this.params.stadion;if(this.params={...this.params,stadion:s,seaBearing:n},r){let a=performance.now();if(this.city){this.scene.remove(this.city.group);for(let h of this.city.meshes)h.geometry.dispose()}this.materials||(this.materials=Dl({phone:this.world.phone}),this.loadPictures()),this.city=df(this.params,{phone:this.world.phone,materials:this.materials}),this.scene.add(this.city.group);let l=this.materials.waterUniforms,o=this.city.shores;for(let h=0;h<6;h++)l.uShores.value[h]=o[h];l.uCanal.value.z=this.city.plan.canalHalf,this.buildMs=Math.round(performance.now()-a),this.applyLook()}this.city.group.rotation.z=this.turn,this.city.group.updateMatrixWorld(!0);{let[a,l]=this.toScene(0,-1);this.materials.waterUniforms.uCanal.value.x=a,this.materials.waterUniforms.uCanal.value.y=l}this.site={lat:t,lon:e,frame:si(e*yt,t*yt)},this.active=!0,this.lastSun.set(0,0,0);for(let a of this.cascades)a.half=0;return this.ground(),this.world.stamp++,this.city}loadPictures(){Object.keys(gh).length&&(this.pending++,hf(this.world.phone?512:1024,gh).then(t=>{if(t){let e=this.materials.shared,n=[e.tColour.value,e.tDetail.value];e.tColour.value=t.colour,e.tDetail.value=t.detail;for(let s of n)s.dispose();this.pictures={loaded:t.loaded,missing:t.missing}}else this.pictures={loaded:0,missing:"all"}}).catch(t=>{this.pictures={loaded:0,error:String(t)}}).finally(()=>{this.pending--,this.world.stamp++}))}remove(){this.active=!1,this.site=null,this.world.globe.shared.uPad.value.set(0,0,0,0),this.world.stamp++}ground(){let t=this.world.globe,e=t.shared,n=this.site,s=e.uWater.value>.5?e.uSea.value:-1e5,r=Math.max(t.heightAt(n.lon*yt,n.lat*yt)??0,s);n.h=r;let a=n.frame;e.uPad.value.set(a.up[0],a.up[1],a.up[2],this.city.radius-80),e.uPadH.value=r-2;let l=ne+r*e.uExag.value;n.origin=[a.up[0]*l,a.up[1]*l,a.up[2]*l]}floorAt(t,e){if(!this.active||!this.city)return null;let[n,s]=this.fromLonLat(t,e);if(Math.hypot(n,s)>this.city.plan.edge)return null;let[r,a]=this.toCity(n,s),l=this.localFloor(r,a);return l==null?null:this.site.h*this.world.globe.shared.uExag.value+l}localFloor(t,e){let n=this.city.plan.groundZ(t,e);if(n==null)return null;let s=this.city.temple,r=this.city.hall,a=Math.max(Math.abs(t-s.x)-s.L/2,Math.abs(e-s.y)-s.W/2);return a<5.1?s.floor-Math.max(0,Math.ceil(a/1.7))*((s.floor-s.z)/4):r&&t*t+e*e<r.RS*r.RS?r.floor:n}pick(t,e){if(!this.active||!this.city)return null;let n=this.world.renderer.domElement,s=n.clientWidth||1,r=n.clientHeight||1;this.ray.setFromCamera(new ie(t/s*2-1,1-e/r*2),this.camera);let a=this.ray.intersectObjects(this.city.meshes.filter(c=>c.visible&&!c.userData.line),!1);if(!a.length)return null;let l=a[0],o=Nl.get(l.object.userData.id),[h,u]=this.toLonLat(l.point.x,l.point.y);return{id:l.object.userData.id,what:o?.what??l.object.userData.id,ref:o?.ref??null,kind:o?.kind??"choice",lon:h,lat:u}}parts(){return this.city?this.city.parts.map(t=>({...t})):[]}viewOf(t){let e=this.city?.spots[t];if(!e||!this.site)return null;let[n,s]=this.toScene(e[0],e[1]),[r,a]=this.toLonLat(n,s);return{lat:a,lon:r,range:e[2],tilt:e[3]*yt,heading:((e[4]+this.params.seaBearing-180)%360+360)%360*yt}}highlight(t){this.lit=t&&this.city?.meshes.some(e=>e.userData.id===t)?t:null,this.applyLook()}setGhost(t){this.ghost=!!t,this.applyLook()}cutaway(t){this.cut=!!t,this.applyLook()}applyLook(){if(!this.city)return;let t=this.materials;for(let e of this.city.meshes){let n=e.userData;if(n.roof&&(e.visible=!this.cut),n.line)continue;let s=this.ghost&&n.ghostable;if(n.water){e.material=n.solid;continue}e.material=s?t.ghost:this.lit?n.id===this.lit?t.glow:t.dim:t.solid,e.castShadow=!s,n.lodHidden&&(e.visible=!1)}t.seaDim.value=this.lit&&this.lit!=="harbours"&&this.lit!=="canal"?.45:1;for(let e of this.cascades)e.half=0;this.world.stamp++}labSpots(){let t={};for(let[e,n]of Object.entries(this.city.lab))t[e]=this.toScene(n[0],n[1]);return t}forceShadows(){this.cascades[0].half=0,this.cascades[1].half=0}update(){if(!this.active)return null;this.ground();let{control:t,camera:e,sun:n,renderer:s}=this.world,r=this.site.frame,a=this.site.origin,l=t.basis,o=[-l.fwd[0],-l.fwd[1],-l.fwd[2]],h=[t.pos[0]-a[0],t.pos[1]-a[1],t.pos[2]-a[2]],u=dt=>[hn(dt,r.east),hn(dt,r.north),hn(dt,r.up)],c=u(l.right),f=u(l.up),d=u(o),p=u(h),v=this.camera;v.matrix.set(c[0],f[0],d[0],p[0],c[1],f[1],d[1],p[1],c[2],f[2],d[2],p[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert(),v.projectionMatrix.copy(e.projectionMatrix),v.projectionMatrixInverse.copy(e.projectionMatrixInverse);let g=this.materials,m=this.city.plan;g.shared.uTime.value=this.world.time,this.dome.visible=p[2]<2500&&p[2]>-50,this.dome.visible&&(this.dome.position.set(p[0],p[1],p[2]-40),this.dome.scale.setScalar(38e3),this.dome.updateMatrixWorld());let x=-d[2],_=x<-.02?$t((p[2]-m.B)/-x,5,6e3):6e3,b=[p[0]-d[0]*_,p[1]-d[1]*_],M=_,[C,y]=this.toCity(p[0],p[1]);for(let dt of this.city.sectors){let at=dt.high.length>0&&Math.hypot(C-dt.cx,y-dt.cy,p[2])<640;at!==dt.near&&(dt.near=at,this.cascades[0].half=0,this.cascades[1].half=0),dt.low&&(dt.low.visible=!at,dt.low.userData.lodHidden=at);for(let R of dt.high)R.visible=at,R.userData.lodHidden=!at}let T=u([n.dir.x,n.dir.y,n.dir.z]),k=T[2];if(this.lastSun.distanceToSquared(new ft(T[0],T[1],T[2]))>1e-5){this.lastSun.set(T[0],T[1],T[2]);let dt=oy(k),at=ly(k);for(let R of this.suns)R.color.setRGB(dt[0],dt[1],dt[2]);this.skyUniforms.uSky.value.set(at[0],at[1],at[2]),this.skyUniforms.uSun.value.set(T[0],T[1],T[2]),this.skyUniforms.uSunColour.value.set(dt[0],dt[1],dt[2]),this.env?.dispose(),this.env=this.pmrem.fromScene(this.skyScene,0,1,200),this.scene.environment=this.env.texture,g.ghostUniforms.uColour.value.setRGB(at[0]*2.2+dt[0]*.25,at[1]*2.2+dt[1]*.25,at[2]*2.2+dt[2]*.25),g.glowColour.setRGB(dt[0]*.05+at[0]*.12,dt[1]*.05+at[1]*.12,dt[2]*.04+at[2]*.1);for(let R of this.cascades)R.half=0}let G=[T[0],T[1],Math.max(T[2],.03)],Z=Math.hypot(G[0],G[1],G[2]);G[0]/=Z,G[1]/=Z,G[2]/=Z;let st=Math.max(G[2],.14),V=(dt=>1.5**Math.ceil(Math.log(dt)/Math.log(1.5)))($t(M*1.1,40,620)),O=[{half:V,c:[b[0]-d[0]*V*.35,b[1]-d[1]*V*.35,m.B]},{half:Math.min(V*5.5,m.edge*1.02),c:[b[0]-d[0]*V*1.2,b[1]-d[1]*V*1.2,m.B]},{half:m.edge*1.02,c:[0,0,m.B]}],Y=0;for(let dt=0;dt<3;dt++){let at=this.cascades[dt],R=O[dt],E=this.suns[dt];if(!(at.half!==R.half||Math.hypot(at.c.x-R.c[0],at.c.y-R.c[1])>R.half*.22)||Y>0&&dt<2&&at.half>0)continue;at.half=R.half,at.c.set(R.c[0],R.c[1],R.c[2]);let X=R.half*1.6+80/st+200,ct=R.half*1.5+80/st,q=2*R.half/E.shadow.mapSize.x;E.position.set(R.c[0]+G[0]*X,R.c[1]+G[1]*X,R.c[2]+G[2]*X),E.target.position.set(R.c[0],R.c[1],R.c[2]),E.target.updateMatrixWorld(),E.updateMatrixWorld();let lt=E.shadow.camera;lt.left=-R.half,lt.right=R.half,lt.top=R.half,lt.bottom=-R.half,lt.near=X-ct,lt.far=X+ct,lt.updateProjectionMatrix(),E.shadow.bias=-(.02+q*1.1)/(2*ct),E.shadow.normalBias=q*1.5+.02,E.shadow.needsUpdate=!0,dt<2&&Y++}let ot=this.mirror,et=g.waterUniforms;if(!!ot&&p[2]<1400&&p[2]>.3&&!this.ghost){let dt=s.getDrawingBufferSize(new ie),at=Math.max(2,dt.x>>1),R=Math.max(2,dt.y>>1);(!ot.target||ot.target.width!==at||ot.target.height!==R)&&(ot.target?.dispose(),ot.target=new Oe(at,R,{type:je,format:Ye,minFilter:Ae,magFilter:Ae,depthBuffer:!0}));let E=ot.camera,H=new ft(p[0],p[1],-p[2]);E.fov=$t(t.fovY/yt*1.25,10,120),E.aspect=e.aspect,E.near=1,E.far=16e3,E.updateProjectionMatrix(),E.position.copy(H),E.up.set(f[0],f[1],-f[2]),E.lookAt(H.x-d[0],H.y-d[1],H.z+d[2]),E.updateMatrixWorld(),E.matrixWorldInverse.copy(E.matrixWorld).invert(),ot.vp.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse);let X=new Fn(new ft(0,0,1),-.05).applyMatrix4(E.matrixWorldInverse),ct=new ge(X.normal.x,X.normal.y,X.normal.z,X.constant),q=E.projectionMatrix,lt=new ge;lt.x=(Math.sign(ct.x)+q.elements[8])/q.elements[0],lt.y=(Math.sign(ct.y)+q.elements[9])/q.elements[5],lt.z=-1,lt.w=(1+q.elements[10])/q.elements[14],ct.multiplyScalar(2/ct.dot(lt)),q.elements[2]=ct.x,q.elements[6]=ct.y,q.elements[10]=ct.z+1,q.elements[14]=ct.w;let gt=s.shadowMap,mt=gt.autoUpdate,U=s.getRenderTarget();gt.autoUpdate=!1,gt.needsUpdate=!1,s.setRenderTarget(ot.target),s.setClearColor(0,0),s.clear(!0,!0,!1),s.render(this.scene,E),s.setRenderTarget(U),s.setClearColor(0,1),gt.autoUpdate=mt,et.tMirror.value=ot.target.texture,et.uMirrorVP.value.copy(ot.vp),et.uMirror.value=1}else et.uMirror.value=0;return{scene:this.scene,camera:v}}view(){return{lat:this.site.lat*yt,lon:this.site.lon*yt,range:this.city.coreRadius*3.4,tilt:58*yt,heading:(this.params.seaBearing+150)%360*yt}}};var xh={claimed:{ink:"#ffab5c",name:"Claimed"},checked:{ink:"#7fc0ff",name:"Checked"},found:{ink:"#7fe3a0",name:"Found"},context:{ink:"#e9edf5",name:"Place"},plato:{ink:"#f2cc6b",name:"Plato's measure"}},ff={claimed:["claimed","context","plato"],found:["checked","found","context","plato"],all:["claimed","checked","found","context","plato"]},pf=8,cy=new Set(["core","sample","dive","dig","place"]),mf={context:0,plato:1,checked:2,found:3,claimed:4},hy=[[/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i,"#4a4d55"],[/ash|tephra|pumice|ignimbrite/i,"#b9b4ad"],[/salt|evaporite|gypsum|halite/i,"#eef0f2"],[/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i,"#d9cfb4"],[/peat|organic|lignite|soil/i,"#4b3a2a"],[/shell|coquina/i,"#e6dcc8"],[/gravel|pebble|cobble|conglomerate|breccia/i,"#8d8478"],[/sand/i,"#d7bf86"],[/silt/i,"#a89a80"],[/clay|mud|turbidite/i,"#7d7468"]],yh=i=>(hy.find(([t])=>t.test(i??""))??[0,"#9a9488"])[1],vf=i=>i.type==="Polygon"?i.coordinates:i.type==="MultiPolygon"?i.coordinates.flat():[],xf=i=>i.type==="LineString"?[i.coordinates]:i.type==="MultiLineString"?i.coordinates:[],yf=i=>i.type==="Point"?[i.coordinates]:i.type==="MultiPoint"?i.coordinates:[],_f=i=>[...yf(i),...xf(i).flat(),...vf(i).flat()],_i=i=>{let t=i.geometry;if(t.type==="Point")return t.coordinates;if(t.type==="LineString")return t.coordinates[Math.floor(t.coordinates.length/2)];let e=_f(t);return[e.reduce((n,s)=>n+s[0],0)/e.length,e.reduce((n,s)=>n+s[1],0)/e.length]},gf=i=>{let t=_f(i.geometry),e=_i(i),n=0;for(let s of t)n=Math.max(n,Math.hypot((s[0]-e[0])*Math.cos(e[1]*yt),s[1]-e[1])*yt*ne);return n*2},uy=i=>i.position?.how==="from-description"||(i.position?.error_m??0)>=500,Ul=class{constructor(t){this.world=t,this.scene=new $n,this.camera=new We,this.camera.matrixAutoUpdate=!1,this.entry=null,this.extras=[],this.mode="all",this.focus=null,this.selected=null,this.labels=[],this.markers=new Map,this.on=0,this.origin=null;let e=t.globe.shared;this.size=t.phone?1024:2048,this.near=this.sheet(),this.far=this.sheet(),e.tDecal.value=this.near.tex,e.tDecalFar.value=this.far.tex,this.painted=null,this.dirty=!0,this.tick=0,this.geo=this.shapes(),this.mats=new Map}sheet(){let t=document.createElement("canvas");t.width=t.height=this.size;let e=new Li(t);return e.colorSpace=Bn,e.premultiplyAlpha=!0,e.generateMipmaps=!0,e.minFilter=rn,e.anisotropy=8,{canvas:t,g:t.getContext("2d"),tex:e}}shapes(){let t=(e,n=0)=>(e.rotateX(Math.PI/2),e.translate(0,0,n),e);return{stem:t(new ji(.007,.007,1,6),.5),core:t(new ji(.05,.05,1,20,1,!1),.5),cap:t(new ji(.066,.066,.03,20),1),sample:new Wr(.085).translate(0,0,1.06),dive:new kn(.075,18,12).translate(0,0,1.06),dig:new Zi(.13,.13,.13).rotateZ(Math.PI/4).translate(0,0,1.06),place:new kn(.045,14,10).translate(0,0,.62)}}ink(t,e=1.7){let n=`${t}:${e}`;return this.mats.has(n)||this.mats.set(n,new qe({color:new se(xh[t].ink).multiplyScalar(e)})),this.mats.get(n)}column(t){let e=document.createElement("canvas");e.width=8,e.height=256;let n=e.getContext("2d"),s=(t.column??[]).filter(a=>Number.isFinite(a.from_m)&&Number.isFinite(a.to_m)&&a.to_m>a.from_m);if(s.length){let a=Math.min(...s.map(o=>o.from_m)),l=Math.max(...s.map(o=>o.to_m));n.fillStyle="#9a9488",n.fillRect(0,0,8,256);for(let o of s)n.fillStyle=yh(o.what),n.fillRect(0,(o.from_m-a)/(l-a)*256,8,Math.max(2,(o.to_m-o.from_m)/(l-a)*256));n.fillStyle="rgba(0,0,0,0.35)";for(let o of s)n.fillRect(0,(o.to_m-a)/(l-a)*256-1,8,1.5)}else{n.fillStyle=xh[t.side].ink,n.fillRect(0,0,8,256),n.fillStyle="rgba(0,0,0,0.28)";for(let a=32;a<256;a+=32)n.fillRect(0,a,8,2)}let r=new Li(e);return r.colorSpace=Ie,new qe({map:r,color:new se(1.25,1.25,1.25)})}marker(t){let e=new $e;if(t.kind==="core")e.add(new pe(this.geo.core,this.column(t)),new pe(this.geo.cap,this.ink(t.side)));else{let n=new pe(this.geo.stem,this.ink("context",1.1));t.kind==="place"&&(n.scale.z=.6),e.add(n,new pe(this.geo[t.kind]??this.geo.dive,this.ink(t.side)))}return e.userData.feature=t,e}show(t){this.entry=t??null,this.focus=null,this.selected=null,this.rebuild()}setExtras(t){this.extras=t??[],this.rebuild()}setMode(t){ff[t]&&t!==this.mode&&(this.mode=t,this.rebuild())}setFocus(t){this.focus=t?.length?new Set(t):null,this.restyle()}select(t){this.selected=t??null,this.restyle()}get active(){return!!(this.entry||this.extras.length)}visible(){let t=new Set(ff[this.mode]);return[...this.entry?.features??[],...this.extras].filter(e=>t.has(e.side)&&e.geometry).sort((e,n)=>mf[e.side]-mf[n.side])}lit(t){return!this.focus||this.focus.has(t.id)||t.id===this.selected}rebuild(){for(let e of this.markers.values()){this.scene.remove(e);for(let n of e.children)n.material.map&&(n.material.map.dispose(),n.material.dispose())}this.markers.clear();let t=this.entry?.centre??(this.extras[0]&&{lon:_i(this.extras[0])[0],lat:_i(this.extras[0])[1]});this.origin=t?{lon:t.lon*yt,lat:t.lat*yt,frame:si(t.lon*yt,t.lat*yt)}:null,this.labels=[];for(let e of this.visible()){let[n,s]=_i(e),r={id:e.id,text:e.label,year:e.year??null,side:e.side,kind:e.kind,lon:n,lat:s,lift:0,lit:!0,feature:e};if(cy.has(e.kind)&&e.geometry.type==="Point"){let a=this.marker(e);a.userData.label=r,this.markers.set(e.id,a),this.scene.add(a)}e.label&&this.labels.push(r)}this.restyle()}restyle(){for(let t of this.labels)t.lit=this.lit(t.feature);for(let t of this.markers.values())t.userData.dim=!this.lit(t.userData.feature);this.dirty=!0,this.heights=0,this.world.stamp++}paint(t,e,n,s){let r=t.g,a=this.size,l=a/(2*n),o=si(e.lon,e.lat),h=[0,0,0];r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,a,a),r.lineJoin=r.lineCap="round";let u=([d,p])=>(xn(d*yt,p*yt,h),hn(h,o.up)<.05?null:[a/2+hn(h,o.east)*ne*l,a/2-hn(h,o.north)*ne*l]),c=(d,p)=>{let v=0,g=!1;r.beginPath();for(let m of d){let x=u(m);x&&(v++?r.lineTo(x[0],x[1]):r.moveTo(x[0],x[1]),x[0]>-200&&x[1]>-200&&x[0]<a+200&&x[1]<a+200&&(g=!0))}return p&&r.closePath(),g&&v>1},f=(d,p,v,g)=>{let m=Math.max(1.5,p*s);r.setLineDash([]),r.globalAlpha=.55*v,r.strokeStyle="#04070c",r.lineWidth=m+Math.max(2,2.4*s),r.stroke(),r.setLineDash(g?g.map(x=>Math.max(2,x*s)):[]),r.globalAlpha=v,r.strokeStyle=d,r.lineWidth=m,r.stroke(),r.setLineDash([])};for(let d of this.visible()){let p=d.side==="context"&&d.id!==this.selected?.55:1,v=xh[d.side].ink,g=this.lit(d),m=(g?1:.28)*p,x=d.id===this.selected,_=d.geometry,b=d.dash??(uy(d)?[7,6]:d.kind==="track"?[12,5]:null),M=(d.width??(d.kind==="structure"?3.2:d.kind==="survey-area"?1.8:d.kind==="outline"?1.9:2.2))*(x?1.5:1);for(let C of vf(_))c(C,!0)&&(d.fill!==!1&&(r.globalAlpha=(d.kind==="survey-area"?.13:d.kind==="dig"?.34:.1)*m*p*(x?1.6:1),r.fillStyle=v,r.fill()),f(v,M,m,b));for(let C of xf(_))c(C,!1)&&f(v,M,m,b);for(let C of yf(_)){let y=u(C);if(!y||y[0]<-50||y[1]<-50||y[0]>a+50||y[1]>a+50)continue;let T=(d.position?.error_m??0)*l;T>6*s&&(r.beginPath(),r.arc(y[0],y[1],T,0,Math.PI*2),r.globalAlpha=.07*m*p,r.fillStyle=v,r.fill(),f(v,1.1,.6*m,[5,5])),r.beginPath(),r.arc(y[0],y[1],Math.max(2.5,(x?5.5:3.6)*s),0,Math.PI*2),r.globalAlpha=m,r.fillStyle=v,r.fill(),r.globalAlpha=.7*m,r.strokeStyle="#04070c",r.lineWidth=Math.max(1,1.4*s),r.stroke(),x&&(r.beginPath(),r.arc(y[0],y[1],13*s,0,Math.PI*2),f("#ffffff",1.6,.9,null))}}r.globalAlpha=1,t.tex.needsUpdate=!0}update(){let{world:t}=this,e=t.globe.shared,n=t.control,s=this.active?1:0;if(this.on!==s&&(this.on=$t(this.on+(s?.08:-.12),0,1),t.stamp++),e.uDecalOn.value=this.on,!this.active||!this.origin)return null;let r=performance.now(),a=Math.max(n.range*.7,30),l=this.painted,o=l?Math.hypot((n.lon-l.lon)*Math.cos(l.lat),n.lat-l.lat)*ne:1/0;if((this.dirty||!l||o>l.half*.3||a>l.half*1.5||a<l.half*.62)&&(this.dirty||r-(l?.at??0)>160)){let k={lon:n.lon,lat:n.lat},S=2*Math.tan(n.fovY/2)*n.range/Math.max(t.renderer.domElement.clientHeight,1);this.paint(this.near,k,a,S/(2*a/this.size)),this.paint(this.far,k,a*pf,S/(2*a*pf/this.size)),this.painted={...k,half:a,at:r,frame:si(k.lon,k.lat)},this.dirty=!1,t.stamp++}let h=this.painted,u=h.frame.up,c=n.pos;if(e.uDecalO.value.set(u[0]*ne-c[0],u[1]*ne-c[1],u[2]*ne-c[2]),e.uDecalU.value.set(...h.frame.east).multiplyScalar(1/(2*h.half)),e.uDecalV.value.set(...h.frame.north).multiplyScalar(1/(2*h.half)),!this.markers.size)return null;let f=this.origin.frame,d=[f.up[0]*ne,f.up[1]*ne,f.up[2]*ne],p=k=>[hn(k,f.east),hn(k,f.north),hn(k,f.up)],v=n.basis,g=p(v.right),m=p(v.up),x=p([-v.fwd[0],-v.fwd[1],-v.fwd[2]]),_=p([c[0]-d[0],c[1]-d[1],c[2]-d[2]]),b=this.camera;b.matrix.set(g[0],m[0],x[0],_[0],g[1],m[1],x[1],_[1],g[2],m[2],x[2],_[2],0,0,0,1),b.matrixWorld.copy(b.matrix),b.matrixWorldInverse.copy(b.matrix).invert(),b.projectionMatrix.copy(t.camera.projectionMatrix),b.projectionMatrixInverse.copy(t.camera.projectionMatrixInverse);let M=this.tick++%20===0||this.heights<3;M&&this.heights++;let C=e.uExag.value,y=e.uWater.value>.5?e.uSea.value:-1e5,T=[0,0,0];for(let k of this.markers.values()){let S=k.userData.label;if(M||k.userData.h==null){let st=Math.max(t.globe.heightAt(S.lon*yt,S.lat*yt)??0,y)*C;xn(S.lon*yt,S.lat*yt,T);let N=[T[0]*(ne+st)-d[0],T[1]*(ne+st)-d[1],T[2]*(ne+st)-d[2]];k.position.set(...p(N)),k.quaternion.setFromUnitVectors(new ft(0,0,1),new ft(...p(T))),k.userData.h=st}let G=Math.hypot(k.position.x-_[0],k.position.y-_[1],k.position.z-_[2]),Z=G*.05*Math.min(1,n.range*1.25/G)**.6*(k.userData.feature.id===this.selected?1.3:1)*(k.userData.dim?.62:1);k.scale.setScalar(Z),S.lift=Z*(k.userData.feature.kind==="place"?.72:1.16),k.updateMatrixWorld(!0)}return{scene:this.scene,camera:b}}viewOf(t){if(!t){let s=this.entry;if(!s)return null;let r=s.features.map(l=>{let o=_i(l);return Math.hypot((o[0]-s.centre.lon)*Math.cos(s.centre.lat*yt),o[1]-s.centre.lat)*yt*ne+gf(l)/2}).sort((l,o)=>l-o),a=r.length?r[Math.min(r.length-1,Math.floor(r.length*.8))]:(s.radius_km??20)*1e3;return{lon:s.centre.lon*yt,lat:s.centre.lat*yt,range:$t(Math.max(a,2500)*2.9,6e3,6e6),tilt:46*yt,heading:0}}let[e,n]=_i(t);return{lon:e*yt,lat:n*yt,range:$t(Math.max(gf(t)*2.2,(t.position?.error_m??0)*6,900),400,6e6),tilt:50*yt,heading:this.world.control.heading}}};var xr={terrarium:{id:"terrarium",kind:"elevation",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:15,credit:"Terrain Tiles (Mapzen, AWS Open Data)"},s2:{id:"s2",kind:"image",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)"},bluemarble:{id:"bluemarble",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA Blue Marble Next Generation"},night:{id:"night",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA Black Marble"}},bf=(i,t={})=>{let e=t.phone??(Math.min(screen.width,screen.height)<600||matchMedia("(pointer: coarse)").matches),n=new dl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});n.outputColorSpace=xs,n.autoClear=!1;let s=new $n,r=new We(36,1,1,1e8),a=new yl({renderer:n,scene:s,segments:32,threshold:e?400:290,budget:e?170:400,layers:{elevation:xr.terrarium,base:xr.s2,globe:xr.bluemarble,overlay:null,night:xr.night}}),l=new _l(r,i,a),o=new wl(n,{samples:0,steps:e?14:28}),h={renderer:n,scene:s,camera:r,globe:a,control:l,pipeline:o,phone:e,sun:{azimuth:295,altitude:48,follow:!0,dir:new ft(1,0,0)},exposure:1.1,air:1,pixelCap:2,pixelBudget:e?14e5:26e5,scale:1,time:0,fps:60,onFrame:null,paused:!1,adaptive:!0,rest:!0,locals:[],stamp:0},u=()=>{let x=i.clientWidth||1,_=i.clientHeight||1,b=Math.min(devicePixelRatio||1,h.pixelCap),M=Math.min(b,Math.sqrt(h.pixelBudget/(x*_)))*h.scale,C=Math.max(2,Math.round(x*M)),y=Math.max(2,Math.round(_*M));return(i.width!==C||i.height!==y)&&(n.setSize(C,y,!1),r.aspect=x/_,r.updateProjectionMatrix()),o.setSize(C,y),[C,y]},c=()=>{let x=si(l.lon,l.lat),_=h.sun.azimuth*yt,b=h.sun.altitude*yt,M=Yn(En(x.up,Math.sin(b)),Yn(En(x.north,Math.cos(_)),x.east,Math.sin(_)),Math.cos(b));h.sun.follow&&h.sun.dir.set(M[0],M[1],M[2]).normalize()};h.city=new Fl(h),h.locals.push(h.city),h.evidence=new Ul(h),h.locals.push(h.evidence),l.floor=(x,_)=>h.city.floorAt?.(x,_)??null;let f=performance.now(),d=0,p=0,v="",g=0,m=x=>{if(requestAnimationFrame(m),h.paused){f=x;return}let _=$t((x-f)/1e3,.001,.1);f=x,h.time+=_,h.fps+=(1/_-h.fps)*.05;let b=a.loader.busy>0;_>1/38?b||(d++,p=0):_<1/55&&(p++,d=Math.max(0,d-1)),h.adaptive||(d=p=0),d>40&&h.scale>.55&&(h.scale=Math.max(.55,h.scale-.1),d=0),p>300&&h.scale<1&&(h.scale=Math.min(1,h.scale+.1),p=0);let[M,C]=u();h.beforeFrame?.(_),l.update(_),c();let y=`${h.stamp},${h.city.active},${h.sun.azimuth},${h.sun.altitude},${l.pos[0].toFixed(1)},${l.pos[1].toFixed(1)},${l.pos[2].toFixed(1)},${l.heading.toFixed(4)},${l.tilt.toFixed(4)},${l.shift[0].toFixed(3)},${l.shift[1].toFixed(3)},${M},${C}`,T=y!==v||a.loader.busy>0||l.pointers.size>0||h.snap;v=y,T?g=0:g++;let k=g>(h.restSoon?150:600)?h.restSoon?30:12:g>30?3:1;if(h.rest&&g%k){h.onFrame?.(_);return}let S=a.shared;S.uCamPos.value.set(l.pos[0],l.pos[1],l.pos[2]),S.uSun.value.copy(h.sun.dir),S.uTime.value=h.time,S.uPixAngle.value=2*Math.tan(l.fovY/2)/C,a.update(l.view(C));let G=1-$t((Math.sin(h.sun.altitude*yt)-.17)/.6,0,1);if(o.final.uniforms.uExposure.value=h.exposure*(1+.85*G),o.atmo.uniforms.uAir.value+=((S.uLens.value===0?1:.4)*h.air-o.atmo.uniforms.uAir.value)*Math.min(1,_*6),o.render(s,r,{pos:l.pos,basis:l.basis,tanY:Math.tan(l.fovY/2),aspect:r.aspect,near:r.near,far:r.far,sun:h.sun.dir,shift:l.shift},h.locals.map(Z=>Z.update()).filter(Boolean)),h.onFrame?.(_),h.snap){let Z=h.snap;h.snap=null,i.toBlob(st=>Z(st),"image/jpeg",.9)}};return requestAnimationFrame(m),h};var _h=[["sunken-land","Sunken lands"],["lost-city","Lost cities"],["remote-sensing-find","Found from above"],["treasure","Treasure"],["shipwreck","Shipwrecks"],["tomb","Tombs"],["relic","Relics"]],iS=Object.fromEntries(_h),bh={"sunken-land":"Sunken land","lost-city":"Lost city","remote-sensing-find":"Found from above",treasure:"Treasure",shipwreck:"Shipwreck",tomb:"Tomb",relic:"Relic"},Sf={legend:"Legend",unlocated:"Not found yet",disputed:"Disputed",found:"Found",hoax:"Hoax"},Ps={confirmed:"Confirmed",mainstream:"Leading view",plausible:"Plausible",fringe:"Fringe",rejected:"Rejected",hoax:"Hoax"},kl={found:"Found here",candidate:"Proposed","search-area":"Search area",claimed:"Claimed find",inspiration:"Possible inspiration",origin:"Where it began"},wf={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Mf={found:0,candidate:1,"search-area":2,inspiration:3,claimed:4,origin:5},Cs=i=>(i??"").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),Tf=async(i="./")=>{let t=globalThis.__DATA__,e=(d,p)=>t?.[d]?Promise.resolve(t[d]):fetch(i+d).then(v=>v.ok?v.json():p).catch(()=>p),[n,s,r,a,l,o,h,u,c]=await Promise.all([e("legends.json",{legends:[]}),e("sources.json",{sources:[]}),e("reconstruction.json",null),e("case.json",null),e("evidence.json",null),e("worldfit.json",null),e("audio/index.json",null),e("open.json",null),e("story-media.json",null)]),f=(n.legends??[]).filter(d=>d&&d.id&&d.name&&Array.isArray(d.places));for(let d of f){d.places=d.places.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)),d.main=[...d.places].sort((p,v)=>(wf[p.standing]??9)-(wf[v.standing]??9)||(Mf[p.role]??9)-(Mf[v.role]??9))[0]??null,d.key=Cs([d.name,...d.aka??[]].join(" ")),d.tagKey=Cs((d.tags??[]).join(" "));for(let p of d.places)p.key=Cs(p.name)}return{legends:f.filter(d=>d.main),sources:s.sources??[],reconstruction:r,cas:a,evidence:l?.sites??[],worldfit:o,audio:h,open:u,storyMedia:c?.media??[],checked:n.checked??null}},Ef=i=>{let e=[...i.trim().toUpperCase().replace(/[′’]/g,"'").replace(/[″”]/g,'"').matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter(o=>o[0].trim());if(e.length!==2)return null;let n=o=>(Math.abs(Number(o[1]))+Number(o[2]??0)/60+Number(o[3]??0)/3600)*(Number(o[1])<0||o[4]==="S"||o[4]==="W"?-1:1),[s,r]=e;/[EW]/.test(s[4]??"")&&/[NS]/.test(r[4]??"")&&([s,r]=[r,s]);let a=n(s),l=n(r);return!Number.isFinite(a)||!Number.isFinite(l)||Math.abs(a)>90||Math.abs(l)>180?null:{lat:a,lon:l}},Af=(i,t,e=8)=>{let n=Cs(t);if(!n)return[];let s=[];for(let r of i){let a=0;r.key.startsWith(n)?a=100:r.key.split(" ").some(l=>l.startsWith(n))?a=80:r.key.includes(n)?a=60:r.tagKey.split(" ").includes(n)&&(a=30),a&&s.push({score:a,legend:r});for(let l of r.places){let o=l.key.startsWith(n)?55:l.key.split(" ").some(h=>h.startsWith(n))?45:l.key.includes(n)&&n.length>2?25:0;o&&o>a-30&&s.push({score:o,legend:r,place:l})}}return s.sort((r,a)=>a.score-r.score||r.legend.name.localeCompare(a.legend.name)).slice(0,e)},wh=(i,t)=>{let e=t?{...i.access,...t}:i.access;if(!i.browser?.ok||!e?.url||!["xyz","wmts","wms","arcgis-image","arcgis-map"].includes(i.access.type)||e.crs&&e.crs!=="EPSG:3857"||i.kind==="elevation-tiles")return null;let n=e.url.includes("{z}");if(!n&&!e.url.includes("{bbox}"))return null;let s=i.resolution_m&&i.resolution_m<=30?Math.min(11,Math.max(0,Math.round(15-Math.log2(i.resolution_m))-5)):0;return{id:`src-${i.id}${t?`-${t.id}`:""}`,kind:"image",url:e.url,size:n?256:512,every:n?1:2,minZoom:Math.max(i.access.min_zoom??0,s,n?0:3),maxZoom:i.access.max_zoom??15,maxActive:n?8:4,bbox:i.coverage?.bbox??null,asIs:i.kind==="hillshade"||i.kind==="colour-relief"||i.kind==="anomaly-map"||i.kind==="coverage-map",credit:i.license?.attribution??i.name}};var ls=parent!==window,dy=0,Mh=new Map;addEventListener("message",i=>{i.source!==parent||i.data?.abstracts!=="result"||(Mh.get(i.data.id)?.(i.data),Mh.delete(i.data.id))});var bi=(i,t={})=>new Promise((e,n)=>{if(!ls)return n(Object.assign(new Error("standalone"),{code:"unsupported"}));let s=`c${++dy}`;Mh.set(s,r=>r.ok?e(r.value):n(Object.assign(new Error(r.error?.message??"failed"),{code:r.error?.code??"failed"}))),parent.postMessage({abstracts:"call",id:s,method:i,params:t},"*")}),Rf=async()=>{if(!ls)return null;for(let i=0;i<3;i++){let t=await Promise.race([bi("hello"),new Promise(e=>setTimeout(e,500,null))]).catch(()=>null);if(t)return t}return null},Cf=i=>{if(globalThis.__LAYOUT__)return i(globalThis.__LAYOUT__);if(!ls)return i("viewport");let t="content";i(t),addEventListener("message",e=>{if(e.source!==parent)return;let n=e.data?.abstractsLayout;n!=="content"&&n!=="viewport"||(n==="viewport"&&parent.postMessage({abstractsLayout:"viewport"},"*"),n!==t&&(t=n,i(t)))}),parent.postMessage({abstractsLayout:"request"},"*")},Pf=i=>{ls&&i>0&&Number.isFinite(i)&&parent.postMessage({abstractsHeight:Math.ceil(i)},"*")};var Re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ga=i=>i.replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(),Rn={confirmed:{label:"Tested, and the result stands",short:"Result stands",tone:"good",d:"M4.2 7.4l2 2 3.8-4.6"},refuted:{label:"The claim was shown wrong",short:"Shown wrong",tone:"bad",d:"M4.5 4.5l5 5M9.5 4.5l-5 5"},corrected:{label:"The claim was corrected",short:"Corrected",tone:"warn",d:"M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0"},unresolved:{label:"Still open",short:"Still open",tone:"info",d:"M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1"},"never-tested":{label:"Never tested",short:"Never tested",tone:"mut",d:""},"no-claim":{label:"Made no claim about Atlantis",short:"No claim",tone:"mut",d:"M4.5 7h5"}},va=i=>{let t=Rn[i]??Rn["never-tested"];return`<svg class="g g-${t.tone}${t.d?"":" hollow"}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${t.d?`<path d="${t.d}"/>`:""}</svg>`},Is=i=>i==="fit"?'<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>':i==="brk"?'<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>':'<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>',If=(i,t)=>{let e=i.places,n=new Map;for(let r of e)for(let a of[...r.fits??[],...r.conflicts??[]])n.set(a,(n.get(a)??0)+1);let s=t.claims.filter(r=>r.testable);return{places:e.length,found:e.filter(r=>r.standing==="confirmed"||r.standing==="mainstream").length,checked:e.filter(r=>(r.tests??[]).length).length,checkable:s.length,unmeasured:s.filter(r=>!n.has(r.id)),used:n,searches:t.searches.length,open:t.searches.filter(r=>r.status==="unresolved").length,first:t.searches[0]?.year,last:t.searches.at(-1)?.year}},fy=i=>[[i.places,"places proposed"],[i.found,"where Plato's city has been found"],[i.places-i.checked,"never checked on the ground"],[`${i.unmeasured.length} of ${i.checkable}`,"of Plato's checkable details never measured anywhere"]].map(([t,e])=>`<div class="tile"><b>${t}</b><span>${Re(e)}</span></div>`).join(""),py=(i,t)=>`<ol class="tl">${i.searches.map(e=>`<li><button class="tl-b${e.id===t?" on":""}" data-search="${Re(e.id)}" aria-label="${e.year}: ${Re(e.title)}. ${Re(Rn[e.status]?.label??"")}">${va(e.status)}<span>${e.year}</span></button></li>`).join("")}</ol>`,my=i=>`<div class="key">${Object.entries(Rn).map(([t,e])=>`<span>${va(t)}<b>${i.searches.filter(n=>n.status===t).length}</b> ${Re(e.short.toLowerCase())}</span>`).join("")}</div>`,Lf=(i,t)=>`
  <div class="pop-h">${va(i.status)}<b>${i.year} \xB7 ${Re(i.title)}</b></div>
  <div class="pop-s">${Re(Rn[i.status]?.label??"")}${i.who?` \xB7 ${Re(i.who)}`:""}</div>
  ${i.announced?`<p><em>Said:</em> ${Re(i.announced)}</p>`:""}
  <p><em>How it ended:</em> ${Re(i.outcome)}</p>
  <div class="row">${i.place?`<button class="btn primary" data-go="${Re(i.place)}">Go to ${Re(t??"the place")}</button>`:""}${/^https?:/.test(i.source??"")?`<a class="btn" href="${Re(i.source)}" target="_blank" rel="noopener">Source</a>`:""}</div>`,Df=(i,t,e,n)=>{let s=Object.fromEntries(t.claims.map(c=>[c.id,c])),r=[...e.used.keys()].filter(c=>s[c]).sort((c,f)=>e.used.get(f)-e.used.get(c)),a=e.unmeasured.map(c=>c.id),l=[...i.places].sort((c,f)=>(f.tests??[]).length-(c.tests??[]).length||(f.fits??[]).length+(f.conflicts??[]).length-((c.fits??[]).length+(c.conflicts??[]).length)||c.name.localeCompare(f.name)),o=(c,f)=>`<th class="col${f?" dim":""}"><button data-claim="${Re(c)}"><span>${Re(s[c].short)}</span></button></th>`,h=(c,f)=>{let d=(c.fits??[]).includes(f),p=(c.conflicts??[]).includes(f);if(!d&&!p)return'<td class="c"></td>';let v=d&&p?"both":d?"fit":"brk";return`<td class="c"><button data-cell="${Re(c.id)}|${Re(f)}|${v}" aria-label="${Re(c.name)}: ${v==="fit"?"said to fit":v==="brk"?"breaks":"argued both ways"} ${Re(s[f].short)}">${Is(v)}</button></td>`},u=l.map(c=>{let f=(c.tests??[]).length;return`<tr><th scope="row"><button data-go="${Re(c.id)}">${Re(ga(c.name))}${n.has(c.id)?'<i class="has-scene"></i>':""}</button></th>${r.map(d=>h(c,d)).join("")}${a.map(()=>'<td class="c dim"></td>').join("")}<td class="n">${f?`<b>${f}</b>`:"<span>0</span>"}</td><td class="v"><i class="sdot p-${Re(c.standing)}"></i>${Re(Ps[c.standing]??c.standing)}</td></tr>`}).join("");return`
    <div class="tiles">${fy(e)}</div>
    <h3>${e.searches} searches, ${e.first} to ${e.last}</h3>
    
    <div class="tl-wrap">${py(t)}</div>
    ${my(t)}
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
  <p class="pop-s">${t?`Held against ${t} place${t===1?"":"s"}.`:"Not held against any place yet."}</p>`;var gy="https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",Ol=new Map,Bl=null,vy=(i,t,e)=>{let n=`${i}/${t}/${e}`;return Ol.has(n)||Ol.set(n,(async()=>{let s=await fetch(gy.replace("{z}",i).replace("{x}",t).replace("{y}",e),{signal:AbortSignal.timeout(25e3)});if(!s.ok)throw new Error(`elevation tile ${n}: HTTP ${s.status}`);let r=await createImageBitmap(await s.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"});Bl??=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256)).getContext("2d",{willReadFrequently:!0}),Bl.clearRect(0,0,256,256),Bl.drawImage(r,0,0),r.close?.();let a=Bl.getImageData(0,0,256,256).data,l=new Float32Array(65536);for(let o=0;o<65536;o++)l[o]=a[o*4]*256+a[o*4+1]+a[o*4+2]/256-32768;return l})().catch(s=>{throw Ol.delete(n),s})),Ol.get(n)},zl=async(i,t)=>{t=$t(Math.round(t),0,10);let e=2**t,n=new Map,s=i.map(([a,l])=>{let o=ss(a*yt,t),h=$t(rs(l*yt,t),0,e-1e-6),u=(Math.floor(o)%e+e)%e,c=Math.floor(h);return n.set(`${u}/${c}`,[u,c]),[`${u}/${c}`,$t(Math.floor((o-Math.floor(o))*256),0,255),$t(Math.floor((h-c)*256),0,255)]}),r=new Map(await Promise.all([...n].map(async([a,[l,o]])=>[a,await vy(t,l,o)])));return s.map(([a,l,o],h)=>lh(r.get(a)[o*256+l],i[h][0],i[h][1]))},Hl=(i,t)=>$t(Math.round(Math.log2(400750167e-1*Math.cos(t*yt)/256/i)),0,10);var xa={lat:35.97389,lon:-5.51611},yr=(i,t,e,n)=>{let s=n/ne,r=e*yt,a=i*yt,l=t*yt,o=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r));return[((l+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(o)))/yt+540)%360-180,o/yt]},xy=(i,t,e,n)=>{let s=Math.sin((e-i)*yt/2)**2+Math.cos(i*yt)*Math.cos(e*yt)*Math.sin((n-t)*yt/2)**2;return 2*ne*Math.asin(Math.min(1,Math.sqrt(s)))},yy=(i,t,e,n)=>{let s=Math.sin((n-t)*yt)*Math.cos(e*yt),r=Math.cos(i*yt)*Math.sin(e*yt)-Math.sin(i*yt)*Math.cos(e*yt)*Math.cos((n-t)*yt);return(Math.atan2(s,r)/yt+360)%360},_y=["north","north-east","east","south-east","south","south-west","west","north-west"],Gl=i=>_y[Math.round(i/45)%8],Sh=i=>{let t=n=>i.claims.find(s=>s.id===n)??{numbers:[]},e=(n,s)=>t(n).numbers.find(r=>r.what.startsWith(s))?.value;return{island:e("central-island-diameter","diameter"),rings:t("ring-widths").numbers.reduce((n,s)=>n+s.value,0),canal:e("canal-to-sea","canal length"),wall:e("outer-wall-50-stades","distance"),plainLong:e("great-plain","plain length"),plainWide:e("great-plain","plain width"),canalGap:e("plain-canals","spacing"),refs:{rings:t("ring-widths").ref,island:t("central-island-diameter").ref,canal:t("canal-to-sea").ref,wall:t("outer-wall-50-stades").ref,plain:t("great-plain").ref,canals:t("plain-canals").ref,pillars:t("beyond-pillars").ref,years:t("nine-thousand-years").ref}}},Ff=i=>{let t=[...i].sort((n,s)=>n-s),e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{low:e(.05),mid:e(.5),high:e(.95),min:t[0],max:t[t.length-1]}},Uf=async({lat:i,lon:t,sea:e,cas:n,stadion:s=185})=>{let r=Sh(n),a=s,l=(r.island/2+r.rings)*a,o=l+r.wall*a,h={lat:i,lon:t,sea:e,stadion:a,plato:r,ringR:l,wallR:o,made:new Date().toISOString().slice(0,10)},u=Hl(120,i),c=[];for(let R=-l;R<=l;R+=110)for(let E=-l;E<=l;E+=110)E*E+R*R<=l*l&&c.push([t+E/(ne*Math.cos(i*yt))/yt,i+R/ne/yt]);let f=await zl(c,u),d=Ff(f);h.rings={across:2*l,low:d.min,high:d.max,mid:d.mid,relief:d.high-d.low,underSea:f.filter(R=>R<e).length/f.length,here:f[Math.floor(f.length/2)],zoom:u};let p=h.rings.mid>=e;h.dry=p;let v=Hl(260,i),g=[],m=400,x=15e4;for(let R=0;R<360;R+=5)for(let E=m;E<=x;E+=m)g.push([R,E,yr(i,t,R,E)]);let _=await zl(g.map(R=>R[2]),v),b=null;for(let R=0;R<g.length;R++)(p?_[R]<e:_[R]>=e)&&(!b||g[R][1]<b.distance)&&(b={distance:g[R][1],bearing:g[R][0],at:g[R][2]});h.shore=b?{...b,kind:p?"sea":"land"}:{distance:null,bearing:null,kind:p?"sea":"land",beyond:x},h.canal={want:r.canal*a+l,from:"centre"};let M=p?h.shore.bearing??180:((h.shore.bearing??0)+180)%360,C=(M+180)%360,y=(M+90)%360,T=p&&h.shore.distance!=null?h.shore.distance:0,k=r.plainLong*a,S=r.plainWide*a,G=(R,E)=>{let H=yr(i,t,M,T-E);return yr(H[1],H[0],y,R)},Z=Hl(Math.max(1200,k/110),i),st=[];for(let R=0;R<44;R++)for(let E=0;E<66;E++)st.push(G(((E+.5)/66-.5)*k,(R+.5)/44*S));let N=await zl(st,Z),V=N.filter(R=>R>=e),O=V.length?Ff(V):null;h.plain={long:k,wide:S,land:V.length/N.length,low:O?.low??null,high:O?.high??null,mid:O?.mid??null,level:O?V.filter(R=>Math.abs(R-O.mid)<=100).length/N.length:0,inland:C,zoom:Z};let Y=xy(i,t,xa.lat,xa.lon),ot=t>xa.lon&&t<42&&i>30&&i<47.5;h.strait={distance:Y,bearing:yy(xa.lat,xa.lon,i,t),inside:ot};let et=(R,E=96)=>Array.from({length:E+1},(H,X)=>yr(i,t,X/E*360,R)),pt=(R,E,H,X={})=>({id:`plato-${R}`,side:"plato",kind:"outline",label:E,geometry:H,fill:!1,...X}),dt=[pt("rings",`Plato's rings, ${(2*l/1e3).toFixed(1)} km across`,{type:"Polygon",coordinates:[et(l)]},{fill:!0,width:2.4}),pt("island",null,{type:"LineString",coordinates:et(r.island/2*a,48)},{width:1.4}),pt("wall",`Outer wall, ${r.wall} stades out`,{type:"LineString",coordinates:et(o,128)},{width:1.8,dash:[9,6]}),pt("canal",`Canal, ${r.canal} stades`,{type:"LineString",coordinates:[yr(i,t,M,l),yr(i,t,M,o)]},{width:2.6}),pt("plain",`The plain, ${Math.round(k/1e3)} by ${Math.round(S/1e3)} km`,{type:"Polygon",coordinates:[[G(-k/2,0),G(k/2,0),G(k/2,S),G(-k/2,S),G(-k/2,0)]]},{width:2.2})],at=[];for(let R=-k/2+r.canalGap*a;R<k/2-1;R+=r.canalGap*a)at.push([G(R,0),G(R,S/2),G(R,S)]);return dt.push(pt("canals",null,{type:"MultiLineString",coordinates:at},{width:.9})),h.shapes=dt,h.seaBearing=M,h};var by={"survey-area":"Survey",track:"Track",core:"Core",sample:"Sample",dive:"Dive",dig:"Dig",structure:"Claimed shape",outline:"Outline",place:"Place"},wy={"from-dataset":"Position from an open data record","stated-coordinates":"Position printed in the source","digitised-from-figure":"Position read off a map in the source","from-description":"Position from a description only"},kf={claimed:"Claimed",checked:"Checked",found:"Found",context:"Places"},Of={"survey-area":'<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>',track:'<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',core:'<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>',sample:'<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',dive:'<circle cx="7" cy="7" r="4" fill="currentColor"/>',dig:'<path d="M3 3h8v8H3z" fill="currentColor"/>',structure:'<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',outline:'<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>',place:'<circle cx="7" cy="7" r="2.200" fill="currentColor"/>'},My=i=>`<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${Of[i]??Of.place}</svg>`,Bf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,metres:l,toast:o,setSheet:h,body:u,eyebrow:c,stage:f,pinsEl:d,project:p}=i,{control:v,globe:g}=t,m=g.shared,x=t.evidence,_=e.legends.find(P=>P.id==="atlantis"),b=e.cas;if(!_||!b)return null;let M=new Map(e.evidence.map(P=>[P.place,P])),C=new Map(_.places.map(P=>[P.id,P])),y=Object.fromEntries(b.claims.map(P=>[P.id,P])),T=If(_,b),k=Sh(b),S=n.a={view:"list",scene:null,mode:"all",step:-1,feature:null,search:null,sea:null,fit:null,tour:null,more:!1},G=P=>{let B=/^(.{40,220}?[.!?])(\s|$)/.exec(P??"");return B?B[1]:P??""},Z=P=>P>=1e5?`${Math.round(P/1e3).toLocaleString("en")} km`:P>=1e4?`${(P/1e3).toFixed(0)} km`:P>=1e3?`${(P/1e3).toFixed(1)} km`:`${Math.round(P)} m`,st=null,N=(P,B)=>{let J=m.uSea.value,w=performance.now(),L=$t(Math.abs(P-J)*22,500,2600);cancelAnimationFrame(st);let F=()=>{let I=$t((performance.now()-w)/L,0,1),$=I*I*(3-2*I);i.setSea(J+(P-J)*$,!1),I<1?st=requestAnimationFrame(F):B?.()};F()},V=()=>{S.sea&&Math.abs(m.uSea.value-S.sea.to)<.6&&N(S.sea.from),S.sea=null},O=P=>{let B=(P.tests??[]).length;return`<button class="prow" data-act="a-place" data-id="${r(P.id)}"><i class="sdot p-${r(P.standing)}${B?"":" hollow"}"></i><span class="pn">${r(ga(P.name))}${M.has(P.id)?'<em class="sc">scene</em>':""}</span><small>${B?`${B} check${B===1?"":"s"}`:"never checked"}</small></button>`},Y=()=>{S.view="list",c.innerHTML='Atlantis <span class="tag s-legend">Legend</span>';let P=[..._.places].sort((B,J)=>Number(M.has(J.id))-Number(M.has(B.id))||(J.tests??[]).length-(B.tests??[]).length||B.name.localeCompare(J.name));u.innerHTML=`
      <h2>Where was Atlantis?</h2>
      <p class="lead">${r(G(_.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${M.size} places with a scene to explore</h3>
      ${P.filter(B=>M.has(B.id)).map(O).join("")}
      <h3>The other ${_.places.length-M.size} proposals</h3>
      ${P.filter(B=>!M.has(B.id)).map(O).join("")}
      
      ${_.origin?.url?`<p class="note">Where the story comes from: ${a(_.origin.url,_.origin.text??"source")}</p>`:""}`},ot=P=>{let B=b.places[P.id]??{fits:{},breaks:{}},J=($,nt)=>`<button class="sc-chip ${nt}" data-act="a-claim" data-id="${r($)}" data-place="${r(P.id)}" data-kind="${nt}">${Is(nt)}${r(y[$]?.short??$)}</button>`,w=(P.fits??[]).filter($=>y[$]),L=(P.conflicts??[]).filter($=>y[$]),F=w.filter($=>L.includes($)),I=T.checkable-new Set([...w,...L].filter($=>y[$].testable)).size;return!w.length&&!L.length?`<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${T.checkable} could be checked.</p>`:`<h3>Against Plato</h3><div class="score">${w.filter($=>!F.includes($)).map($=>J($,"fit")).join("")}${F.map($=>J($,"both")).join("")}${L.filter($=>!F.includes($)).map($=>J($,"brk")).join("")}</div>
      ${B.reason,""}`},et=()=>S.scene?x.visible().filter(P=>P.side!=="plato"):[],pt=P=>`
    <div class="fcard">
      <p>${r(P.what)}</p>
      ${P.result?`<p><b>${P.side==="claimed"?"What a check showed":"Result"}:</b> ${r(P.result)}</p>`:""}
      ${(P.column??[]).length?`<div class="strata">${P.column.map(B=>`<div><i style="background:${i.strataColour(B.what)}"></i><span>${B.from_m}\u2013${B.to_m} m \xB7 ${r(B.what)}${B.age?` \xB7 ${r(B.age)}`:""}</span></div>`).join("")}</div>`:""}
      ${P.evidence?`<p class="quote">\u201C${r(P.evidence)}\u201D</p>`:""}
      <p class="note" style="margin:0">${r(wy[P.position?.how]??"")}${Number.isFinite(P.position?.error_m)?`, give or take ${Z(P.position.error_m)}`:""}. ${a(P.source,"Source")}${P.position?.source&&P.position.source!==P.source?` \xB7 ${a(P.position.source,"position")}`:""}</p>
    </div>`,dt=()=>{let P=et();return P.length?["claimed","checked","found","context"].map(B=>{let J=P.filter(w=>w.side===B);return J.length?`<div class="fgroup s-${B}"><h4><i></i>${kf[B]} \xB7 ${J.length}</h4>${J.map(w=>`<button class="feat${w.id===S.feature?" on":""}" data-act="a-feature" data-id="${r(w.id)}">${My(w.kind)}<span>${r(w.label)}</span><small>${r([by[w.kind],w.year].filter(Boolean).join(" \xB7 "))}</small></button>${w.id===S.feature?pt(w):""}`).join("")}</div>`:""}).join(""):'<p class="note">Nothing in this view. Try <b>Both</b>.</p>'},at=()=>{let P=S.scene;if(S.step>=0){let J=P.story[S.step];return`<span class="tag s-${J.side==="claimed"?"claimed":J.side==="checked"?"checked":"found"}">${S.step+1} of ${P.story.length} \xB7 ${r(kf[J.side]??J.side)}</span> ${r(J.line)}`}let B=(J,w)=>`<b class="w-${J}">${w}.</b> ${r(P[J].line)} <small>${r([P[J].who,P[J].year].filter(Boolean).join(", "))} \xB7 ${a(P[J].source,"source")}</small>`;return S.mode==="claimed"?B("claimed","Claimed"):S.mode==="found"?B("found","Found"):`${B("claimed","Claimed")}<br>${B("found","Found")}`},R=P=>{let B=(P.best_layers??[]).map(J=>i.overlays.find(w=>w.id===J)).filter(Boolean).slice(0,5);return B.length?`<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${B.map(J=>`<button class="chip${n.overlay?.id===J.id?" on":""}" data-act="a-layer" data-id="${r(J.id)}">${r(J.s.name.replace(/\s*\(.*?\)/g,""))}</button>`).join("")}</div>`:""},E=()=>{let P=S.scene;return`
      <div class="seg modes">${[["claimed","Claimed"],["found","Found"],["all","Both"]].map(([B,J])=>`<button data-act="a-mode" data-v="${B}" class="${S.mode===B&&S.step<0?"on":""} m-${B}">${J}</button>`).join("")}</div>
      <p class="lead" id="a-line">${at()}</p>
      ${P.story.length?`<div class="steps"><span>Walk through it</span>${P.story.map((B,J)=>`<button data-act="a-step" data-i="${J}" class="s-${r(B.side)}${J===S.step?" on":""}" aria-label="Step ${J+1}">${J+1}</button>`).join("")}<button class="nx" data-act="a-next" aria-label="Next step">${S.step>=P.story.length-1?"Start over":S.step<0?"Start \u203A":"Next \u203A"}</button></div>`:""}
      <div id="a-features">${dt()}</div>
      ${R(P)}
      ${P.measurements.length?`<h3>Measured here</h3><div class="meas">${P.measurements.slice(0,S.more?99:5).map(B=>`<div><span>${r(B.what)}</span><b>${r(typeof B.value=="number"?B.value.toLocaleString("en"):B.value)} ${r(B.unit??"")}</b>${B.plato_value?`<small>Plato: ${r(B.plato_value)}</small>`:""}<small>${a(B.source,"source")}</small></div>`).join("")}</div>${P.measurements.length>5&&!S.more?`<button class="linkish" data-act="a-more">All ${P.measurements.length} measurements</button>`:""}`:""}`},H=P=>`
    <details class="full"><summary>Read the full case</summary>
      ${P.claim?`<p>${r(P.claim)}</p>`:""}
      ${P.against?`<p><b>Against:</b> ${r(P.against)}</p>`:""}
      ${P.proposed_by?.length?`<p>Proposed by ${r(P.proposed_by.slice(0,4).map(B=>`${B.who}${B.year?` (${B.year})`:""}`).join(", "))}.</p>`:""}
      ${(P.tests??[]).map(B=>`<p><b>Checked:</b> ${r(B.what)}${B.who?` (${r(B.who)}${B.year?`, ${B.year}`:""})`:""}. ${r(B.result)} ${B.url?a(B.url,"Source"):""}</p>`).join("")}
      ${S.scene?.not_located?.length?`<p><b>Could not be placed on the map:</b></p><ul>${S.scene.not_located.slice(0,8).map(B=>`<li>${r(B.what)}${B.why?` <span class="why">(${r(B.why)})</span>`:""}</li>`).join("")}</ul>`:""}
      <p class="note">${An(P.lat,P.lon,3)}${P.precision_km?`, give or take ${P.precision_km} km`:""}${P.underwater?", under water":""}</p>
      ${(P.sources??[]).map(B=>`<a class="src" href="${r(B.url)}" target="_blank" rel="noopener">${r(B.title??B.url)}</a>`).join("")}
    </details>`,X=()=>{let P=n.place,B=S.scene,J=P.proposed_by?.[0],w=(P.tests??[]).length;S.view="place",c.innerHTML=`${r(kl[P.role]??"Proposed")} <span class="tag t-${r(P.standing)}">${r(Ps[P.standing]??P.standing)}</span>`;let L=u.scrollTop;u.innerHTML=`
      <button class="back" data-act="a-list">\u2039 All ${_.places.length} places</button>
      <h2>${r(P.name)}</h2>
      <div class="when">${J?`Proposed by ${r(J.who)}${J.year?`, ${J.year}`:""}`:""}${P.event_date?`${J?" \xB7 ":""}needs ${r(P.event_date)}`:""}</div>
      ${B?E():`<p class="lead">${r(G(P.claim))}</p>${P.against?`<p class="lead"><b class="w-found">Against.</b> ${r(G(P.against))}</p>`:""}`}
      ${ot(P)}
      ${B?"":`<h3>Checks on the ground \xB7 ${w}</h3>${w?P.tests.map(F=>`<div class="check1">${va("confirmed")}<span><b>${r(F.what)}</b>${F.who?` \xB7 ${r(F.who)}${F.year?`, ${F.year}`:""}`:""}<br>${r(G(F.result))} ${F.url?a(F.url,"Source"):""}</span></div>`).join(""):'<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${B?.needs_sea_level?`<button class="btn${S.sea?" on":""}" data-act="a-sea">${S.sea?"Sea back to where it was":`${B.needs_sea_level.m<0?"Lower":"Raise"} the sea to ${l(B.needs_sea_level.m)}`}</button>`:""}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${H(P)}`,u.scrollTop=L},ct=()=>x.viewOf(null),q=(P,B=!0)=>{let J=n.place;n.legend=_,n.place=P;let w=M.get(P.id)??null;(J!==P||S.scene!==w)&&(V(),S.mode="all",S.step=-1,S.feature=null,S.more=!1,S.fit=null),S.scene=w,w?.dem&&!w.dem.asked&&(w.dem.asked=!0,Td(w.dem,globalThis.__ASSETS__||"./").then(L=>{L&&(g.refresh(L.bbox),t.stamp++)})),x.show(w),x.setExtras([]),x.setMode(S.mode),h("legend"),u.scrollTop=0,X(),B&&v.flyTo(w?ct():i.viewFor(P)),w?.needs_sea_level?.m<0&&B&&!S.sea&&Math.abs(m.uSea.value-w.needs_sea_level.m)>.6&&m.uWater.value>.5&&(S.sea={from:m.uSea.value,to:w.needs_sea_level.m},setTimeout(()=>{S.sea&&n.place===P&&(N(S.sea.to),o(`Sea lowered to ${l(S.sea.to)}: ${w.needs_sea_level.when??"what this proposal needs"}`,4200),X())},B?1700:0))},lt=()=>{gt(),n.legend=_,n.place=null,h("legend"),u.scrollTop=0,Y()},gt=()=>{V(),S.scene=null,S.step=-1,S.feature=null,x.show(null),x.setExtras([]),S.fit=null},mt=P=>{S.mode=P,S.step=-1,S.feature=null,x.setMode(P),x.setFocus(null),x.select(null),X()},U=P=>{let B=S.scene.features.filter(I=>P.includes(I.id));if(!B.length)return ct();let J=B.map(_i),w=J.reduce((I,$)=>I+$[0],0)/J.length,L=J.reduce((I,$)=>I+$[1],0)/J.length,F=0;for(let I of B){let $=x.viewOf(I);F=Math.max(F,$.range/2.2+Math.hypot((_i(I)[0]-w)*Math.cos(L*yt),_i(I)[1]-L)*yt*63710088e-1)}return{lon:w*yt,lat:L*yt,range:$t(F*2.6,900,ct().range*1.2),tilt:48*yt,heading:v.heading}},ht=P=>{let B=S.scene;if(B?.story.length){if(S.step=P>=B.story.length?-1:P,S.feature=null,x.select(null),S.step<0)S.mode="all",x.setMode("all"),x.setFocus(null),v.flyTo(ct(),1.6);else{let J=B.story[S.step];S.mode="all",x.setMode("all"),x.setFocus(J.show??[]),J.show?.length&&v.flyTo(U(J.show),1.8)}X()}},j=(P,B=!0)=>{let J=S.scene?.features.find(w=>w.id===P);S.feature=J&&S.feature!==P?P:null,x.select(S.feature),S.feature&&B&&v.flyTo(x.viewOf(J),1.5),n.sheet!=="legend"&&h("legend"),X(),S.feature&&u.querySelector(".feat.on")?.scrollIntoView({block:"nearest",behavior:"smooth"})},Q=new Map,it=new Set,bt=[0,0],It=P=>{let B=Q.get(P.id);return B||(B=document.createElement("button"),B.className="mark",B.innerHTML="<i></i><span></span>",B.addEventListener("click",J=>{J.stopPropagation(),P.side!=="plato"&&j(P.id,!1)}),d.appendChild(B),Q.set(P.id,B)),B._l=P,B},jt=()=>{let P=new Set;if(x.active&&x.labels.length){let B=f.clientWidth,J=f.clientHeight,w=[],L=x.labels.map(F=>({l:F,w:(F.id===S.feature?100:0)+(F.lit?10:0)+({claimed:5,found:4,checked:3,plato:2,context:1}[F.side]??0)})).sort((F,I)=>I.w-F.w);for(let{l:F}of L){if(!p(F.lon,F.lat,bt,F.lift)||bt[0]<-10||bt[1]<90||bt[0]>B+10||bt[1]>J-30)continue;let I=F.text.length>34?`${F.text.slice(0,32).trimEnd()}\u2026`:F.text,$=[bt[0]-8,bt[1]-10,bt[0]+14+I.length*6.3,bt[1]+10],nt=F.lit&&w.length<26&&$[2]<B-4;if(nt){for(let Pt of w)if($[0]<Pt[2]&&$[2]>Pt[0]&&$[1]<Pt[3]&&$[3]>Pt[1]){nt=!1;break}}if(!nt&&F.id!==S.feature&&F.kind!=="core"&&F.side==="context")continue;nt&&w.push($);let Mt=It(F);Mt._text!==I&&(Mt.lastChild.textContent=I,Mt._text=I,Mt.setAttribute("aria-label",`${F.text}${F.year?` (${F.year})`:""}`)),Mt.style.transform=`translate3d(${bt[0].toFixed(1)}px,${bt[1].toFixed(1)}px,0)`;let Et=`mark s-${F.side}${nt?"":" dot"}${F.id===S.feature?" on":""}${F.lit?"":" dim"}`;Mt.className!==Et&&(Mt.className=Et),Mt._shown||(Mt.style.display="",Mt._shown=!0),P.add(Mt)}}for(let B of it)P.has(B)||(B.style.display="none",B._shown=!1);it.clear();for(let B of P)it.add(B);if(!x.active&&Q.size){for(let B of Q.values())B.remove();Q.clear()}},Ut=s("#pop"),At=0,Dt=(P,B)=>{Ut.innerHTML=`<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${P}`,Ut.classList.add("open"),At=performance.now();let J=f.getBoundingClientRect(),w=B.getBoundingClientRect(),L=Ut.offsetWidth,F=Ut.offsetHeight,I=$t(w.left-J.left+w.width/2-L/2,8,J.width-L-8),$=w.top-J.top-F-10;Ut.style.left=`${I}px`,Ut.style.top=`${$>=8?$:Math.min(w.bottom-J.top+10,J.height-F-8)}px`},kt=()=>{Ut.classList.remove("open"),S.search=null;for(let P of f.querySelectorAll(".tl-b.on"))P.classList.remove("on");i.pulse(null)},K=(P,B)=>{let J=b.searches.find(w=>w.id===P);if(J){if(S.search===P)return kt();kt(),S.search=P,B.classList.add("on"),Dt(Lf(J,J.place?C.get(J.place)?.name:null),B),i.pulse(J.place?C.get(J.place):null)}},Ht=(P,B,J,w)=>{let L=y[P];if(!L)return;let F=J&&b.places[J],I=F&&(w==="brk"?F.breaks[P]:w==="fit"?F.fits[P]:null),$=F&&w==="both"?`<p><em>Said to fit:</em> ${r(F.fits[P]?.how??"")} ${a(F.fits[P]?.source,"source")}</p><p><em>Breaks:</em> ${r(F.breaks[P]?.how??"")} ${a(F.breaks[P]?.source,"source")}</p>`:"",nt=J?`<div class="pop-h">${Is(w)}<b>${r(C.get(J)?.name??"")} \xB7 ${r(L.short)}</b></div><div class="pop-s">${w==="fit"?"Said to fit":w==="brk"?"Breaks":"Argued both ways"} \xB7 ${r(L.ref)}</div>${I?`<p>${r(I.how)} ${a(I.source,"source")}</p>`:$}<p class="quote">\u201C${r(L.quote??L.label)}\u201D</p>`:Nf(L,T.used.get(P)??0);Dt(nt,B)},Rt=s("#board"),Bt=()=>{kt(),s("#board-body").innerHTML=Df(_,b,T,M),Rt.classList.add("open"),f.classList.add("board-open"),s("#board-body").scrollTop=0},_t=()=>{kt(),Rt.classList.remove("open"),f.classList.remove("board-open")},Lt=P=>{let B=C.get(P);B&&(_t(),kt(),q(B,!0))};Rt.addEventListener("click",P=>{let B=P.target.closest("[data-search],[data-claim],[data-cell],[data-go],[data-act]");if(!B)return kt();if(B.dataset.act==="board-x")_t();else if(B.dataset.search)K(B.dataset.search,B);else if(B.dataset.claim)Ht(B.dataset.claim,B);else if(B.dataset.cell){let[J,w,L]=B.dataset.cell.split("|");Ht(w,B,J,L)}else B.dataset.go&&Lt(B.dataset.go)});for(let P of[s("#board-body"),u])P.addEventListener("scroll",()=>{Ut.classList.contains("open")&&performance.now()-At>350&&kt()},{passive:!0});Ut.addEventListener("click",P=>{let B=P.target.closest("[data-go],[data-act]");B?.dataset.go?Lt(B.dataset.go):B?.dataset.act==="pop-x"&&kt()});let Ot=()=>`<button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-list="1"><b>${T.places}</b> famous claims</button><button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-board="1"><b>${T.checked}</b> checked<i>&nbsp;on the ground</i> \xB7 <b>${T.found}</b> found<span>Board \u203A</span></button>`,Ft=(P,B,J,w,L,F)=>`<div class="fit"><div class="fit-h"><b>${r(P)}</b><small>${r(B??"")}</small></div><div class="fit-b"><span><em>Plato</em>${J}</span><span class="${F??""}"><em>Here</em>${w}</span></div>${L?`<p class="note">${L}</p>`:""}</div>`,z=()=>{let P=S.fit,B=n.place;if(c.textContent="Test the fit",!P||P.state==="loading"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${r(B?.name??"this point")} from the open elevation tiles\u2026</p>`;return}if(P.state==="failed"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`;return}let J=P.plato,w=Et=>`${Et.toLocaleString("en")} stades`,L=P.stadion,F=P.rings,I=P.shore,$=P.plain,nt=P.strait,Mt=Math.abs(P.sea)<1?"today's sea level":`the sea at ${l(P.sea)}`;u.innerHTML=`
      <button class="back" data-act="a-back">\u2039 ${r(B?.name??"Back")}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${An(P.lat,P.lon,3)} with ${Mt}, at ${L} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0,"Today"],[-50,"Plato's date"],[-125,"Ice-age low"]].map(([Et,Pt])=>`<button class="chip${Math.abs(P.sea-Et)<1?" on":""}" data-act="a-fit-sea" data-m="${Et}">${Pt}${Et?` ${l(Et)}`:""}</button>`).join("")}</div>
      ${Ft("Is it above water?",J.refs.years,"<b>Dry land</b>, with the sea let into the rings",P.dry?`<b>Dry</b>, ${l(F.mid-P.sea)} above the sea`:`<b>Under ${Math.round(P.sea-F.mid).toLocaleString("en")} m of water</b>`,P.dry?"":`At this sea level the point is sea floor. Nearest land: ${I.distance==null?`more than ${Z(I.beyond)} away`:`${Z(I.distance)} to the ${Gl(I.bearing)}`}.`,P.dry?"ok":"no")}
      ${Ft("Ground for the rings",J.refs.rings,`<b>${Z(F.across)}</b> across, cut to sea level<small>${w(J.island)} island + rings of ${J.rings} stades</small>`,`<b>${Math.round(F.relief).toLocaleString("en")} m</b> of relief<small>from ${l(F.low)} to ${l(F.high)}</small>`,"Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.")}
      ${Ft("The canal to the sea",J.refs.canal,`<b>${Z(P.wallR)}</b> from the centre to the sea<small>a canal of ${w(J.canal)} beyond the rings</small>`,P.dry?I.distance==null?`<b>No sea within ${Z(I.beyond)}</b>`:`<b>${Z(I.distance)}</b> to the sea, to the ${Gl(I.bearing)}`:"<b>Under water</b>","The outer wall stood the same 50 stades out and met the sea at the canal mouth.")}
      ${Ft("The great plain",J.refs.plain,`<b>${Math.round($.long/1e3)} by ${Math.round($.wide/1e3)} km</b>, level<small>${w(J.plainLong)} by ${w(J.plainWide)}</small>`,`<b>${Math.round($.land*100)}%</b> of that box is land${$.mid==null?"":`<small>${Math.round($.level*100)}% within 100 m of its middle height (${l($.mid)})</small>`}`,`Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${Gl($.inland)}.`)}
      ${Ft("Beyond the Pillars",J.refs.pillars,"<b>In front of the strait</b>, in the outer ocean",`<b>${Z(nt.distance)}</b> from the Strait of Gibraltar<small>${nt.inside?"inside it, on the Mediterranean side":"outside it"}</small>`,"Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.",nt.inside?"no":"ok")}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`},A=async(P,B)=>{let J=n.place,w=v.state(),L=B??S.fit?.at??(J?S.scene?{lat:S.scene.centre.lat,lon:S.scene.centre.lon}:{lat:J.lat,lon:J.lon}:{lat:w.lat,lon:w.lon}),F=P??(m.uWater.value>.5?Math.round(m.uSea.value):0);S.fit={state:"loading",at:L},h("fit"),S.view="fit",z();try{let I=await Uf({...L,sea:F,cas:b,stadion:t.city.params.stadion});if(S.view!=="fit")return;S.fit={...I,state:"done",at:L},P!=null&&i.setSea(P,!1),x.setExtras(I.shapes),I.dry&&(t.city.place({lat:I.lat,lon:I.lon,bearing:Math.round(I.seaBearing)}),t.stamp++),v.flyTo({lon:I.lon*yt,lat:I.lat*yt,range:I.wallR*3.4,tilt:50*yt,heading:(I.seaBearing+160)%360*yt},2.2),z()}catch(I){console.warn(I),S.fit={state:"failed",at:L},z()}},ut=()=>{let P=S.fit,B=P.rings,J=P.shore,w=P.plain;return[`Plato's plan at ${P.lat.toFixed(4)}, ${P.lon.toFixed(4)} (sea ${P.sea} m, stadion ${P.stadion} m), measured ${P.made} from Terrain Tiles:`,`- above water: ${P.dry?"yes":"no"} (middle height under the rings ${Math.round(B.mid)} m)`,`- ground under the rings (${Math.round(B.across)} m across): ${Math.round(B.low)} to ${Math.round(B.high)} m, relief ${Math.round(B.relief)} m`,`- nearest ${J.kind}: ${J.distance==null?`none within ${J.beyond} m`:`${Math.round(J.distance)} m at bearing ${J.bearing}`} (Plato: ${Math.round(P.wallR)} m from centre to sea)`,`- plain box ${Math.round(w.long/1e3)} x ${Math.round(w.wide/1e3)} km: ${Math.round(w.land*100)}% land, ${Math.round(w.level*100)}% within 100 m of ${w.mid==null?"n/a":Math.round(w.mid)} m`,`- Strait of Gibraltar: ${Math.round(P.strait.distance/1e3)} km, ${P.strait.inside?"inside":"outside"}`].join(`
`)},vt=(P,B)=>{if(P==="a-list")lt();else if(P==="a-place")q(C.get(B.dataset.id),!0);else if(P==="a-board")Bt();else if(P==="a-mode")mt(B.dataset.v);else if(P==="a-step")ht(Number(B.dataset.i)===S.step?-1:Number(B.dataset.i));else if(P==="a-next")ht(S.step+1);else if(P==="a-feature")j(B.dataset.id);else if(P==="a-more")S.more=!0,X();else if(P==="a-layer"){let J=i.overlays.find(w=>w.id===B.dataset.id);i.setOverlay(n.overlay?.id===J.id?null:J),i.drawTag(),X()}else if(P==="a-claim")Ht(B.dataset.id,B,B.dataset.place,B.dataset.kind);else if(P==="a-sea"){let J=S.scene;S.sea?V():(S.sea={from:m.uSea.value,to:J.needs_sea_level.m},N(S.sea.to)),X()}else if(P==="a-city"){let J=n.place,w=S.scene?.centre??J;i.standCity(w.lat,w.lon)}else if(P==="a-known"){let J=n.place;i.checkKnown(J.lat,J.lon,Math.max(J.precision_km??10,5))}else if(P==="a-fit")A();else if(P==="a-fit-sea")A(Number(B.dataset.m));else if(P==="a-fit-off")x.setExtras([]),t.city.remove(),t.stamp++,i.drawTag(),o("Cleared");else if(P==="a-fit-copy")navigator.clipboard?.writeText(ut()).then(()=>o("Copied"),()=>o("Could not copy"));else if(P==="a-back")S.view="place",n.place?(h("legend"),X()):i.closeSheet();else if(P==="a-tour")i.tour?.();else return!1;return!0};return{atlantis:_,scenes:M,stats:T,a:S,seaTo:N,ringStades:k.island/2+k.rings,openPlace:q,openList:lt,leaveScene:gt,openBoard:Bt,closeBoard:_t,hidePop:kt,drawCase:Ot,click:vt,placeMarks:jt,selectFeature:j,setStep:ht,setMode:mt,runFit:A,get boardOpen(){return Rt.classList.contains("open")}}};var Sy=i=>(i??"").split(",")[0].trim(),ya=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")};var zf=({worldfit:i,cas:t})=>{let e=[],n=i,s=t?.searches??[];if(e.push({id:"legend",say:"Atlantis is a story Plato told. Nobody has ever found it.",least:4500}),e.push({id:"tale",say:"He has it told as \u201Ca tale which, though strange, is certainly true\u201D.",least:5500}),e.push({id:"island",say:"Beyond the Pillars of Heracles, out in the Atlantic, lay an island \u201Clarger than Libya and Asia put together\u201D.",least:6500}),e.push({id:"city",say:"At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that \u201Csparkled like fire\u201D.",least:8e3}),e.push({id:"fall",say:"Then, \u201Cin a single day and night of misfortune\u201D, Atlantis \u201Cdisappeared in the depths of the sea\u201D.",least:7e3}),e.push({id:"date",say:"Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.",least:6e3,show:[{at:3.4,for:4.6,big:"9600 BCE"}]}),n){let r=n.best.find(l=>!l.near_old_ice)??n.best[0];e.push({id:"sank",say:`The sea stood about 50 m lower then. Since that date, ${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2 of land have gone under. All of it is glowing now.`,least:8e3,show:[{at:.4,for:3.2,big:"\u221250 m"},{at:4.2,for:6.2,big:`${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2`}]});let a=r?.near?.name?/^off /.test(r.near.name)?` The closest, ${r.near.name},`:` The closest, the ${Sy(r.near.name)},`:" The closest";r&&e.push({id:"scored",say:`We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${a} scores ${r.top}: a match in the landscape, not a city.`,least:9e3,best:r})}if(s.length){let r=s.filter(l=>l.status==="unresolved").length,a=Math.min(...s.map(l=>l.year));e.push({id:"search",say:`People have gone looking since ${a}. ${s.length} searches are on record, and ${r} of them are still open. Not one has found the city.`,least:9e3,show:[{dots:[...s].sort((l,o)=>l.year-o.year).map(l=>l.status)}]})}return e.push({id:"built",say:"So we built his city as he wrote it, each part tied to a line of his text.",least:5500}),e.push({id:"hall",say:"At its centre he put a shrine, \u201Creserved as holy ground, and encircled with a wall of gold\u201D. We opened it. Inside is everything found so far, and everything still unknown.",least:9500}),e.push({id:"turn",say:"Walk in. The search is yours now.",least:4e3}),e};var Th={lon:-5.61,lat:35.95},Hf=(i,t,e)=>{let{world:n,data:s,$:r,esc:a,setSheet:l,st:o,stage:h}=i,{control:u}=n,c=r("#tour"),f=n.city,d={on:!1,i:0,steps:[],timer:null,paused:!1,started:0,left:0,later:[],sink:null,label:null,offset:0,drag:null},p=(q,lt=0)=>Math.max(lt,2600+q.length*48),v=(q,lt)=>{let gt=d.i,mt=q-d.offset*1e3;if(mt<=0){lt();return}d.later.push(setTimeout(()=>{d.on&&d.i===gt&&lt()},mt))},g=r("#shot"),m=r("#stat"),x=r("#dots"),_=r("#t-mark"),b=s.storyMedia??[],M=q=>globalThis.__STORY__?.[q]??`${globalThis.__ASSETS__||"./"}${q}`,C=()=>g.classList.remove("on"),y=q=>{g.innerHTML=`<img src="${a(M(q.file))}" alt=""><figcaption>${a(q.caption)}</figcaption>`,g.style.setProperty("--hold",`${q.for}s`),g.dataset.where=q.where??"right",g.classList.remove("on"),g.offsetWidth,g.classList.add("on")},T=q=>{m.innerHTML=`<b>${a(q.big)}</b>${q.small?`<span>${a(q.small)}</span>`:""}`,m.classList.remove("on"),m.offsetWidth,m.classList.add("on")},k=(q,lt)=>{x.innerHTML=q.map((gt,mt)=>`<i class="d-${Rn[gt]?.tone??"mut"}" style="animation-delay:${Math.round(mt/q.length*lt)}ms"></i>`).join(""),x.classList.add("on")},S=()=>{C(),m.classList.remove("on"),x.classList.remove("on"),d.label=null,_.classList.remove("on"),i.cityBar?.present(null),h.classList.remove("tour-hunt"),e&&(e.state.forced=!1)},G=(q,lt)=>{d.label=q,_.textContent=lt,_.classList.add("on")},Z=[0,0],st=()=>{if(!d.on)return;if(dt(),d.label){let gt=i.project(d.label.lon,d.label.lat,Z,0);_.style.opacity=gt?"":"0",gt&&(_.style.transform=`translate(${Z[0]}px, ${Z[1]}px) translate(-50%, -150%)`)}let q=d.sink,lt=f.city?.group;if(q&&lt){let gt=Math.min(1,(performance.now()-q.from)/q.ms);lt.position.z=-q.deep*gt*gt,lt.updateMatrixWorld(!0),n.stamp++,gt>=1&&(d.sink=null,f.remove(),lt.position.z=0,lt.updateMatrixWorld(!0))}},N=()=>{d.sink=null;let q=f.city?.group;q&&q.position.z&&(q.position.z=0,q.updateMatrixWorld(!0))},V=()=>{let q=(Q,it,bt,It=3,jt=0)=>u.flyTo({lon:Q*yt,lat:it*yt,range:bt,tilt:jt*yt,heading:0},It),lt=()=>{t.leaveScene(),o.legend=o.place=null,l(null)},gt=i.home,mt=()=>{N(),f.active||(f.place({lat:gt.lat,lon:gt.lon,bearing:gt.bearing}),n.stamp++),f.cutaway?.(!1)},U=(Q,it,bt=1.5,It={})=>{let jt=f.viewOf(Q);jt&&u.flyTo({...jt,...it?{range:it}:{},...It},bt),i.cityBar?.present(Q)},ht=(Q,it=2.6)=>{let bt=(s.evidence??[]).find(Ut=>Ut.id===Q),It=t.atlantis.places.find(Ut=>Ut.id===(bt?.place??Q));if(!It)return;t.openPlace(It,!0),t.setMode("all"),l(null);let jt=n.evidence.viewOf(null);jt&&u.flyTo(jt,it)},j={legend:()=>{lt(),e?.setGlow(0),i.setSea(0,!1),mt();let Q=f.view();u.jump({...Q,range:7600}),u.flyTo({...Q,range:6200,heading:Q.heading+.5},9)},tale:()=>q(21,37.5,52e5,3.4,8),island:(Q,it)=>{q(Th.lon-6,Th.lat,24e5,3,16),G(Th,"The Pillars of Heracles"),v(it*620,()=>{_.classList.remove("on"),d.label=null,mt(),u.flyTo({...f.view(),range:9e3},it*.36+.6)})},city:(Q,it)=>{mt();let bt=f.view();u.flyTo({...bt,range:7e3,heading:bt.heading+.25},it*.4),v(it*400,()=>U("temple",230,1.5,{tilt:62*yt})),v(it*400+1700,()=>{f.cutaway?.(!0),n.stamp++}),v(it*700,()=>{f.cutaway?.(!1),U("wall-orichalcum",200,1.5)})},fall:(Q,it)=>{i.cityBar?.present(null),mt();let bt=f.view();u.flyTo({...bt,range:8200,tilt:52*yt},1.6),i.sound?.sfx("rise",.3),v(1500,()=>{d.sink={from:performance.now(),ms:Math.max(3e3,it*1e3-2600),deep:46},u.flyTo({...bt,range:15e3,tilt:40*yt,heading:bt.heading+.3},it-1.2)})},date:()=>{N(),f.remove(),e?.setGlow(0),t.seaTo(-50),u.flyTo({lon:3*yt,lat:54*yt,range:32e5,tilt:16*yt,heading:0},3.6)},sank:(Q,it)=>{t.seaTo(0),e?.setGlow(1),i.sound?.sfx("rise",.2),v(it*380,()=>q(108,2,62e5,it*.26,6)),v(it*690,()=>q(-172,62,56e5,it*.28,6))},scored:(Q,it)=>{let bt=Q.best;u.flyTo({lon:bt.lon*yt,lat:bt.lat*yt,range:1e6,tilt:30*yt,heading:0},3.8),e&&(e.state.forced=!0,h.classList.add("tour-hunt")),v(it*500,()=>{e?.scan(bt.lon,bt.lat),i.sound?.sfx("ping",.6)})},search:(Q,it)=>{h.classList.remove("tour-hunt"),e&&(e.state.forced=!1),ht("santorini",2.6),v(it*420,()=>ht("richat",2.8)),v(it*830,()=>{lt(),q(-18,30,95e5,2.6)})},built:(Q,it)=>{lt(),e?.setGlow(.5),i.setSea(0,!1),mt(),u.jump({...f.view(),range:5200}),U("harbours",null,1.3),v(it*340,()=>U("bridges",null,1.2)),v(it*670,()=>U("temple",260,1.2))},hall:(Q,it)=>{i.cityBar?.present(null),mt();let bt=f.viewOf("shrine");bt&&u.flyTo({...bt,range:150,tilt:64*yt,heading:bt.heading+Math.PI},it*.34),v(it*360,()=>{i.sound?.sfx("reveal",.3),i.enterCity?.("hall",!0,{pan:.34,x:4,y:-4,look:[-12,6]})})},turn:()=>i.enterCity?.("hall",!0)};return zf({worldfit:e?s.worldfit:null,cas:s.cas}).map(Q=>({...Q,go:it=>j[Q.id]?.(Q,it)}))},O=q=>q.split(/(?<=[.!?:]”?)\s+(?=[A-Z“])/).filter(Boolean),Y=()=>d.steps.reduce((q,lt)=>q+lt.total,0),ot=q=>d.steps.slice(0,q).reduce((lt,gt)=>lt+gt.total,0),et=()=>ot(d.i)+(d.steps[d.i].total-(d.paused?d.left:Math.max(0,d.left-(performance.now()-d.started)))),pt=q=>{let lt=d.steps[d.i];q!==void 0&&(d.words=q);let gt=Y();c.innerHTML=`<p>${a(d.words??lt.say)}</p><div class="bar"><button class="ib t-play" data-act="tour-pause" aria-label="${d.paused?"Play":"Pause"}">${d.paused?'<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 2.2v9.6L11.6 7z" fill="currentColor"/></svg>':'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="3" y="2.4" width="2.8" height="9.2" rx="1"/><rect x="8.2" y="2.4" width="2.8" height="9.2" rx="1"/></svg>'}</button><div class="scrub" role="slider" tabindex="0" aria-label="Story" aria-valuemin="0" aria-valuemax="${Math.round(gt/1e3)}" aria-valuenow="${Math.round(et()/1e3)}">${d.steps.slice(1).map((mt,U)=>`<i style="left:${ot(U+1)/gt*100}%"></i>`).join("")}<b></b><span></span></div><button class="linkish" data-act="tour-stop">${d.i===d.steps.length-1?"Close":"Skip"}</button></div>`,dt()},dt=()=>{let q=c.querySelector(".scrub");if(!q)return;let lt=Math.max(0,Math.min(1,(d.drag??et())/Y()));q.querySelector("b").style.width=`${lt*100}%`,q.querySelector("span").style.left=`${lt*100}%`},at=()=>{clearTimeout(d.timer),d.started=performance.now(),d.paused||(d.timer=setTimeout(H,d.left))},R=(q,lt=0)=>{d.i=q;let gt=d.steps[q];for(let it of d.later)clearTimeout(it);d.later=[],S(),!["hall","turn"].includes(gt.id)&&i.walkOn?.()&&i.leaveWalk?.(),N();let mt=gt.len;d.offset=Math.max(0,Math.min(lt,mt-.05)),i.sound?.say(gt.say,d.offset),d.left=gt.total-d.offset*1e3,d.started=performance.now(),gt.go(mt);for(let it of b.filter(bt=>bt.line===gt.id))it.at+it.for>d.offset&&(v(it.at*1e3,()=>y(it)),v((it.at+it.for)*1e3,C));for(let it of gt.show??[])it.dots?k(it.dots,Math.max(0,mt-d.offset)*620):it.at+it.for>d.offset&&(v(it.at*1e3,()=>T(it)),v((it.at+it.for)*1e3,()=>m.classList.remove("on")));let U=O(gt.say),ht=U.reduce((it,bt)=>it+bt.length,0),j=0,Q=U[0];U.forEach((it,bt)=>{let It=j/ht*mt;bt&&It<=d.offset?Q=it:bt&&v(It*1e3,()=>pt(it)),j+=it.length}),d.offset=0,pt(Q),d.paused&&(d.paused=!1),at()},E=q=>{let lt=Y(),gt=Math.max(0,Math.min(lt-400,q)),mt=0;for(;mt<d.steps.length-1&&ot(mt+1)<=gt;)mt++;R(mt,(gt-ot(mt))/1e3)};c.addEventListener("pointerdown",q=>{let lt=q.target.closest(".scrub");if(!lt)return;q.preventDefault(),lt.setPointerCapture?.(q.pointerId);let gt=ht=>{let j=lt.getBoundingClientRect();return Math.max(0,Math.min(1,(ht-j.left)/j.width))*Y()};d.drag=gt(q.clientX),dt();let mt=ht=>{d.drag=gt(ht.clientX),dt()},U=ht=>{lt.removeEventListener("pointermove",mt),lt.removeEventListener("pointerup",U),lt.removeEventListener("pointercancel",U);let j=gt(ht.clientX);d.drag=null,E(j)};lt.addEventListener("pointermove",mt),lt.addEventListener("pointerup",U),lt.addEventListener("pointercancel",U)}),addEventListener("keydown",q=>{!d.on||q.target.closest?.("input, textarea")||(q.key==="ArrowLeft"||q.key==="ArrowRight"?(E(et()+(q.key==="ArrowLeft"?-5e3:5e3)),q.preventDefault()):q.key===" "&&(c.querySelector('[data-act="tour-pause"]')?.click(),q.preventDefault()))});let H=()=>d.i>=d.steps.length-1?ct():R(d.i+1),X=()=>{if(!(!t||d.on)){i.leaveWalk?.(),d.steps=V();for(let q of d.steps){let lt=s.audio?.narration?.[ya(q.say)];q.len=lt?lt.seconds:p(q.say,q.least)/1e3,q.total=lt?Math.max(lt.seconds*1e3+700,1500):p(q.say,q.least)}i.sound?.prime(d.steps.map(q=>q.say));for(let q of b)new Image().src=M(q.file);d.on=!0,d.paused=!1,r("#intro").classList.add("gone"),t.closeBoard(),c.classList.add("open"),h.classList.add("touring"),u.idle=!1,i.sound?.bed(!0),R(0)}},ct=()=>{if(d.on){clearTimeout(d.timer);for(let q of d.later)clearTimeout(q);d.later=[],d.on=!1,c.classList.remove("open"),h.classList.remove("touring"),S(),N(),i.sound?.hush(),i.sound?.bed(!1),t.leaveScene(),o.legend=o.place=null,l(null),e?.setGlow(1),Math.abs(n.globe.shared.uSea.value)>.6&&i.setSea(0,!1),f.cutaway?.(!1),i.walkOn?.()?i.walkPan?.(0):i.enterCity?.("hall")}};return c.addEventListener("click",q=>{let lt=q.target.closest("[data-act]")?.dataset.act;lt==="tour-stop"?ct():lt==="tour-next"?H():lt==="tour-pause"&&(d.paused?(d.paused=!1,i.sound?.resume(),at()):(d.paused=!0,clearTimeout(d.timer),i.sound?.pause(),d.left=Math.max(600,d.left-(performance.now()-d.started))),pt())}),{start:X,stop:ct,next:H,tick:st,get on(){return d.on},get step(){return d.i},get steps(){return d.steps}}};var Gf=i=>{let{world:t,data:e,$:n,esc:s,stage:r}=i,{control:a}=t,l=t.city,o=n("#citybar"),h=e.reconstruction,u=new Map([...(h?.from_text??[]).map(x=>[x.id,{...x,kind:"text"}]),...(h?.choices??[]).map(x=>[x.id,{...x,kind:"choice"}])]),c={open:!1,walk:-1,parts:[],ghost:!1,cut:!1,part:null},f=(x,_)=>{let b=u.get(x)??_;return b?`<p class="cb-what"><span class="tag ${b.kind==="text"?"t-confirmed":"t-fringe"}">${b.kind==="text"?"From the text":"Our choice"}</span> ${s(b.what??x)}${b.ref?` <small>${s(b.ref)}</small>`:""}</p>${b.quote?`<p class="quote">\u201C${s(b.quote)}\u201D</p>`:b.why?`<p class="cb-why">${s(b.why)}</p>`:""}`:""},d=x=>{c.shown=x&&u.has(x)?x:null,o.classList.toggle("present",!!c.shown),c.shown?(o.innerHTML=f(c.shown),l.highlight?.(null)):c.open||(o.innerHTML=""),t.stamp++},p=()=>{let x=l.active&&!i.tourOn()&&!i.walkOn?.()&&a.range<9e4&&!(a.fly&&a.fly.target.range>9e4);x!==c.open&&(c.open=x,o.classList.toggle("open",x),r.classList.toggle("city-on",x),x?v():(c.walk=-1,c.part=null,c.ghost=c.cut=!1))},v=()=>{if(!c.open)return;let x=b=>typeof l[b]=="function",_=c.walk>=0&&c.parts[c.walk];o.innerHTML=`
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${_?`${c.walk+1} of ${c.parts.length}`:""}</span></div>
      ${_?f(_.id,_):c.part?f(c.part.id,c.part):""}
      <div class="bar">
        ${x("parts")&&x("viewOf")?_?'<button class="btn" data-act="cb-prev">Back</button><button class="btn primary" data-act="cb-next">Next</button><button class="btn" data-act="cb-end">Done</button>':'<button class="btn primary" data-act="cb-foot">Walk</button><button class="btn" data-act="cb-walk">Tour</button>':""}
        ${_?"":`${x("setGhost")?`<button class="btn${c.ghost?" on":""}" data-act="cb-ghost">Text only</button>`:""}${x("cutaway")?`<button class="btn${c.cut?" on":""}" data-act="cb-cut">${c.cut?"Close temple":"Open temple"}</button>`:""}<button class="btn" data-act="cb-notes">List</button><button class="ib" data-act="cb-off" aria-label="Remove the city"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>`}
      </div>`},g=x=>{c.walk=x,c.part=null;let _=c.parts[x];if(_){l.highlight?.(_.id);let b=l.viewOf(_.id);b&&a.flyTo(b,2.4)}else l.highlight?.(null);t.stamp++,v()};return o.addEventListener("click",x=>{let _=x.target.closest("[data-act]")?.dataset.act;if(_==="cb-foot")i.enterCity?.("gate");else if(_==="cb-walk")c.parts=l.parts()??[],c.parts.length&&g(0);else if(_==="cb-next")g(c.walk+1>=c.parts.length?-1:c.walk+1);else if(_==="cb-prev")g(Math.max(0,c.walk-1));else if(_==="cb-end")g(-1),a.flyTo(l.view(),2.4);else if(_==="cb-ghost")c.ghost=!c.ghost,l.setGhost(c.ghost),t.stamp++,v();else if(_==="cb-cut"){c.cut=!c.cut,l.cutaway(c.cut),t.stamp++;let b=c.cut&&l.viewOf?.("temple");b&&a.flyTo({...b,tilt:Math.min(b.tilt??.6,40*yt)},2.2),v()}else _==="cb-notes"?i.drawCity():_==="cb-off"&&(l.highlight?.(null),l.remove(),t.stamp++,p(),i.drawTag())}),{sync:p,draw:v,tap:(x,_)=>{if(!l.active||typeof l.pick!="function"||c.walk>=0)return!1;let b=l.pick(x,_);return c.part=b??null,l.highlight?.(b?.id??null),t.stamp++,v(),!!b},present:d,state:c}};var Vf=1.7,Ty=5.2,Ey=15,_a=.55,Ay=1,Ry={plateau:"The citadel",slope:"The planted slope",island:"The island",bridge:"A bridge",ramp:"The stair to the citadel",quay:"A quay","ring-inner":"The inner ring","ring-outer":"The outer ring",racecourse:"The racecourse",town:"The town",bank:"The edge of the town"},Wf=i=>{let{world:t,$:e,stage:n}=i,{control:s}=t,r=t.city,a=t.renderer.domElement,l=e("#walk"),o={on:!1,x:0,y:0,z:0,zs:0,dir:0,pitch:0,vel:[0,0],keys:new Set,look:null,stick:null,goal:null,turn:null,pan:0,locked:!1,hot:null,where:"",place:null,bob:0,moved:!1,hotspots:[],used:!1},h=new pe(new qn(.34,.5,28),new qe({color:new se(1.6,1.6,1.6),transparent:!0,opacity:0,depthWrite:!1}));h.renderOrder=5;let u=matchMedia("(pointer: coarse)").matches,c=()=>r.city.plan,f=()=>{let R=c();return[[R.rA-R.T,R.rA+.4],[R.r1a-.4,R.r1a+R.T],[R.r1b-R.T,R.r1b+.4],[R.r2a-.4,R.r2a+R.T],[R.r2b-R.T,R.r2b+.4]]},d=(R,E)=>{let H=c(),X=Math.hypot(R,E),ct=r.city.hall,q=r.city.temple;for(let[lt,gt]of f())if(X>lt-_a&&X<gt+_a&&!(E<0&&Math.abs(R-H.off)<H.bridgeHalf-9.8))return!0;if(ct){for(let lt of ct.rings)if(Math.abs(X-lt.r)<lt.t+_a*.5){let gt=R*Math.cos(lt.a)+E*Math.sin(lt.a),mt=Math.abs(-R*Math.sin(lt.a)+E*Math.cos(lt.a));if(!(gt>0&&mt<lt.gap))return!0}if(X<ct.RC+3){for(let lt of ct.circles)if(Math.hypot(R-lt.x,E-lt.y)<lt.r+_a*.6)return!0}}if(q?.room){let lt=R-q.x,gt=E-q.y,mt=q.room.l/2,U=q.room.w/2,ht=(j,Q)=>Math.abs(Math.abs(j)-Q)<1.1+_a*.5;if(Math.abs(lt)<mt+1.6&&Math.abs(gt)<U+1.6&&(ht(gt,U)||ht(lt,mt)&&!(lt>0&&Math.abs(gt)<q.room.door/2-.8)))return!0}return!1},p=(R,E)=>{let H={};return c().groundZ(R,E,H)==null||H.kind==="water"?null:{z:r.localFloor(R,E),kind:H.kind}},v=(R,E,H=o.z)=>{let X=p(R,E);return!!X&&Math.abs(X.z-H)<=Ay&&!d(R,E)},g=(R,E)=>{let H=Math.hypot(R,E),X=Math.max(1,Math.ceil(H/.35));for(let ct=0;ct<X;ct++){let q=R/X,lt=E/X,gt=!1;for(let[mt,U]of[[0,1],[.6,.8],[-.6,.8],[1.15,.5],[-1.15,.5]]){let ht=Math.cos(mt),j=Math.sin(mt),Q=o.x+(q*ht-lt*j)*U,it=o.y+(q*j+lt*ht)*U;if(v(Q,it)){o.x=Q,o.y=it,o.z=p(Q,it).z,gt=!0;break}}if(!gt){o.vel=[0,0];break}}},m=(R,E,H=90)=>{for(let X=0;X<=H;X+=1.5)for(let ct=0;ct<(X?16:1);ct++){let q=ct/16*Math.PI*2,lt=R+X*Math.cos(q),gt=E+X*Math.sin(q),mt=p(lt,gt);if(mt&&!d(lt,gt))return[lt,gt,mt.z]}return null},x=()=>r.toCity(Math.sin(o.dir),Math.cos(o.dir)),_=(R=0)=>{o.zs+=(o.z-o.zs)*(R?1-Math.exp(-R*11):1);let E=Math.hypot(o.vel[0],o.vel[1]);E>.6&&(o.bob+=R*(E>9?13:9.5));let[H,X]=r.toScene(o.x,o.y),[ct,q]=r.toLonLat(H,X);s.walk={lon:ct,lat:q,yaw:o.dir,pitch:o.pitch,eye:Vf,lift:o.zs-o.z+(E>.6?Math.sin(o.bob)*.035:0)}},b=()=>[o.x,o.y,o.zs+Vf],M=()=>{let[R,E]=x(),H=Math.cos(o.pitch),X=[R*H,E*H,Math.sin(o.pitch)],ct=b(),q=null,lt=.9;for(let gt of o.hotspots){let mt=[gt.x-ct[0],gt.y-ct[1],gt.z-ct[2]],U=Math.hypot(mt[0],mt[1],mt[2]);if(U>gt.reach||U<.3)continue;let ht=(mt[0]*X[0]+mt[1]*X[1]+mt[2]*X[2])/U,j=Math.cos(Math.min(.75,Math.atan2((gt.size??1.5)/2,U)+.1));ht>j&&ht-j+1>lt&&(q=gt,lt=ht-j+1)}return q},C=e("#w-use"),y=e("#w-where"),T=(R=o.hot)=>{R&&(o.used=!0,o.goal=null,st(),R.act(R))},k=(R,E)=>{let H=r.site.frame,X=s.ray(R,E),[ct,q]=r.toCity(hn(X,H.east),hn(X,H.north)),lt=[ct,q,hn(X,H.up)],gt=b(),mt=null,U=1/0;for(let Q of o.hotspots){let it=[Q.x-gt[0],Q.y-gt[1],Q.z-gt[2]],bt=it[0]*lt[0]+it[1]*lt[1]+it[2]*lt[2];bt<.3||bt>Q.reach||Math.hypot(it[0]-lt[0]*bt,it[1]-lt[1]*bt,it[2]-lt[2]*bt)<(Q.size??1.5)*.48&&bt<U&&(mt=Q,U=bt)}if(mt)return T(mt);if(lt[2]>-.04)return;let ht=Math.min(70,(o.zs-gt[2])/lt[2]),j=m(gt[0]+lt[0]*ht,gt[1]+lt[1]*ht,6);j&&(o.goal=[j[0],j[1]],h.position.set(j[0],j[1],j[2]+.04),h.material.opacity=.9,h.parent!==r.city.group&&r.city.group.add(h),t.stamp++)},S=R=>{if(!o.on)return;if(!r.active||!r.city)return at(!1);let E=o.keys,H=document.activeElement?.closest?.("input, textarea, [contenteditable]"),X=0,ct=0,q=0;H||((E.has("KeyW")||E.has("ArrowUp"))&&(X+=1),(E.has("KeyS")||E.has("ArrowDown"))&&(X-=1),E.has("KeyD")&&(ct+=1),E.has("KeyA")&&(ct-=1),E.has("ArrowRight")&&(q+=1),E.has("ArrowLeft")&&(q-=1)),o.stick&&(X-=o.stick.dy,ct+=o.stick.dx),o.pan&&(o.dir+=o.pan*R);let lt=Math.hypot(X,ct);lt>1&&(X/=lt,ct/=lt);let gt=!H&&(E.has("ShiftLeft")||E.has("ShiftRight"))||o.stick&&Math.hypot(o.stick.dx,o.stick.dy)>.97,[mt,U]=x(),ht=1-Math.exp(-R*(o.stick?16:10)),j=[mt*X+U*ct,U*X-mt*ct];if(o.goal){let Bt=o.goal[0]-o.x,_t=o.goal[1]-o.y,Lt=Math.hypot(Bt,_t);lt>.05||Lt<.45||(o.stuck??0)>.5?(o.goal=null,o.stuck=0):(j=[Bt/Lt,_t/Lt],gt=Lt>22,Lt<2.5&&(j=j.map(Ot=>Ot*Math.max(.35,Lt/2.5))))}!o.goal&&h.material.opacity>0&&(h.material.opacity=Math.max(0,h.material.opacity-R*3),t.stamp++);let Q=gt?Ey:Ty;o.vel[0]+=(j[0]*Q-o.vel[0])*ht,o.vel[1]+=(j[1]*Q-o.vel[1])*ht,q&&(o.dir+=q*R*1.9);let it=Math.hypot(o.vel[0],o.vel[1]),bt=`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`,It=o.x,jt=o.y;it>.05&&g(o.vel[0]*R,o.vel[1]*R),o.goal&&(o.stuck=Math.hypot(o.x-It,o.y-jt)<it*R*.2?(o.stuck??0)+R:0),_(R),it>1.2&&Math.hypot(o.vel[0],o.vel[1])>1.2&&(o.moved=!0,i.sound?.step(gt)),bt!==`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`&&t.stamp++;let Ut=r.city.hall,At=r.city.temple,Dt=Math.hypot(o.x,o.y),kt=p(o.x,o.y)?.kind,K=Ut&&Dt<Ut.RI?"The hall":Ut&&Dt<Ut.RG?"Inside the wall of gold":At&&Math.abs(o.x-At.x)<At.L/2&&Math.abs(o.y-At.y)<At.W/2?"Poseidon's temple":Ry[kt]??"";K!==o.where&&(o.where=K,y.textContent=K,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"));let Ht=K==="The hall"?"hall":"city";Ht!==o.place&&(o.place=Ht,i.sound?.air(Ht),i.onWalkPlace?.(Ht)),l.classList.toggle("in-hall",Ht==="hall");let Rt=M();Rt!==o.hot&&(o.hot=Rt,C.hidden=!Rt,Rt&&(C.innerHTML=`<span>${i.esc(Rt.label)}</span>`))},G=(R,E,H)=>{o.dir+=R*H,o.pitch=$t(o.pitch-E*H,-1.25,1.35)},Z=()=>{if(!(o.locked||!a.requestPointerLock))try{a.requestPointerLock()?.catch?.(()=>{})}catch{}},st=()=>{document.pointerLockElement===a&&document.exitPointerLock?.()};document.addEventListener("pointerlockchange",()=>{o.locked=document.pointerLockElement===a,l.classList.toggle("locked",o.locked),o.locked||o.keys.clear()}),document.addEventListener("mousemove",R=>{o.on&&o.locked&&G(R.movementX,R.movementY,.0022)}),addEventListener("keydown",R=>{!o.on||R.target.closest?.("input, textarea, [contenteditable]")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"].includes(R.code)&&(o.keys.add(R.code),R.preventDefault()),(R.code==="KeyE"||R.code==="Enter")&&!R.repeat&&(T(),R.preventDefault()))}),addEventListener("keyup",R=>o.keys.delete(R.code)),addEventListener("blur",()=>o.keys.clear());let N=new Map,V=e("#w-stick"),O=44,Y=.14,ot=()=>{let R=a.getBoundingClientRect();return[R.width/2,R.height/2]},et=(R,E)=>{V.style.left=`${R}px`,V.style.top=`${E}px`};a.addEventListener("pointerdown",R=>{if(!o.on)return;let E=a.getBoundingClientRect(),H=R.clientX-E.left,X=R.clientY-E.top;if(R.pointerType==="mouse"){if(o.locked){k(...ot());return}N.set(R.pointerId,{kind:"look",x:H,y:X,x0:H,y0:X,t:performance.now(),mouse:!0})}else{l.classList.contains("touch")||l.classList.add("touch");let ct=H<E.width/2&&!o.stick?"move":"look";N.set(R.pointerId,{kind:ct,x:H,y:X,x0:H,y0:X,cx:H,cy:X,t:performance.now()}),ct==="move"&&(o.stick={dx:0,dy:0},et(H,X),V.classList.add("on"))}a.setPointerCapture?.(R.pointerId)}),a.addEventListener("pointermove",R=>{let E=N.get(R.pointerId);if(!o.on||!E)return;let H=a.getBoundingClientRect(),X=R.clientX-H.left,ct=R.clientY-H.top;if(E.kind==="move"){let q=X-E.cx,lt=ct-E.cy,gt=Math.hypot(q,lt);gt>O&&(E.cx=X-q/gt*O,E.cy=ct-lt/gt*O,et(E.cx,E.cy),q=X-E.cx,lt=ct-E.cy);let mt=Math.min(1,Math.hypot(q,lt)/O),U=mt<Y?0:((mt-Y)/(1-Y))**1.4,ht=Math.atan2(lt,q);o.stick={dx:Math.cos(ht)*U,dy:Math.sin(ht)*U},mt>.2&&(o.goal=null),V.firstElementChild.style.transform=`translate(${q}px, ${lt}px)`}else E.mouse?G(X-E.x,ct-E.y,.004):(o.dir+=(X-E.x)*.0062,o.pitch=$t(o.pitch-(ct-E.y)*.0045,-1.1,1.2));E.x=X,E.y=ct});let pt=R=>{let E=N.get(R.pointerId);if(!E)return;N.delete(R.pointerId);let H=Math.hypot(E.x-E.x0,E.y-E.y0)<9&&performance.now()-E.t<350;if(E.kind==="move"){o.stick=null,V.classList.remove("on"),V.firstElementChild.style.transform="",V.style.left="",V.style.top="",H&&o.on&&k(E.x,E.y);return}!o.on||!H||(E.mouse&&a.requestPointerLock?(Z(),setTimeout(()=>{o.on&&!o.locked&&k(E.x,E.y)},180)):k(E.x,E.y))};a.addEventListener("pointerup",pt),a.addEventListener("pointercancel",pt),C.addEventListener("click",()=>T());let dt=({x:R=0,y:E=-60,dir:H=null,look:X=null,pan:ct=0,grab:q=!0}={})=>{if(!r.active||!r.city)return!1;let lt=m(R,E);if(!lt)return!1;if([o.x,o.y,o.z]=lt,o.zs=o.z,X){let[gt,mt]=r.toScene(X[0]-o.x,X[1]-o.y);o.dir=Math.atan2(gt,mt)}else o.dir=H??s.heading;return o.pitch=0,o.vel=[0,0],o.keys.clear(),o.goal=null,o.turn=null,o.pan=ct,o.hot=null,o.where="",o.place=null,C.hidden=!0,s.pointers.clear(),s.fly=null,o.on||(o.on=!0,l.hidden=!1,n.classList.add("walking"),i.onWalk?.(!0)),q&&!u&&navigator.userActivation?.isActive&&Z(),_(),t.stamp++,!0},at=(R=!0)=>{if(!o.on)return;o.on=!1,o.goal=null,o.pan=0,st(),h.removeFromParent(),l.hidden=!0,l.classList.remove("went"),n.classList.remove("walking");let E=s.walk;s.walk=null,i.sound?.air(null),E&&(s.jump({lon:E.lon,lat:E.lat,range:40,tilt:1.2,heading:o.dir}),R&&s.flyTo({lon:E.lon,lat:E.lat,range:420,tilt:1.05,heading:o.dir},2.2)),t.stamp++,i.onWalk?.(!1)};return t.beforeFrame=S,{enter:dt,leave:at,use:T,lock:Z,unlock:st,footing:m,canStand:v,state:o,hotspots:o.hotspots,eye:b,forward:x,get on(){return o.on}}};var Eh="#eef2f6",Ls="#9aa7b4",Vl="#e9bd62",$f="#0b1016",Ah="#243040",Ds={good:"#5fd0a0",bad:"#f0766a",warn:"#e9bd62",info:"#6fb6f0",mut:"#7c8794"},Ns=["#16324a","#1f6f78","#2b9a8f","#58c08a","#e9bd62","#fff3c4"],Cy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Py=-Math.PI/2+30*Math.PI/180,Iy=(i,t)=>i.length>t?`${i.slice(0,t-1).replace(/[ ,;:]+\S*$/,"")}\u2026`:i,qf=(i,{A:t,H:e,walk:n})=>{let{world:s,data:r,$:a,esc:l,link:o,setSheet:h,body:u,eyebrow:c,toast:f}=i,d=s.city,p=r.worldfit,v=r.cas,g=r.evidence??[],m=r.open,x={group:null,on:null,boards:[],globe:null,spin:null,painted:!1},_=s.phone?768:1152,b=Math.round(_/1.8),M=_/1152,C=(U,ht=500)=>`${ht} ${Math.round(U*M)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,y=(U,ht,j)=>{let Q=[],it="";for(let bt of String(ht).split(/\s+/)){let It=it?`${it} ${bt}`:bt;U.measureText(It).width>j&&it?(Q.push(it),it=bt):it=It}return it&&Q.push(it),Q},T=(U,ht,j,Q,it,bt,{colour:It=Eh,weight:jt=500,rows:Ut=9,gap:At=1.32}={})=>{U.font=C(bt,jt),U.fillStyle=It,U.textBaseline="top";let Dt=y(U,ht,it*M);return Dt.slice(0,Ut).forEach((kt,K)=>U.fillText(K===Ut-1&&Dt.length>Ut?`${kt.replace(/[ ,;:]+\S*$/,"")}\u2026`:kt,j*M,(Q+K*bt*At)*M)),Q+Math.min(Ut,Dt.length)*bt*At},k=(U,ht,j)=>(U.fillStyle=$f,U.fillRect(0,0,_,b),U.fillStyle=Vl,U.fillRect(0,0,_,5*M),T(U,j,56,52,1040,58,{weight:700,rows:2,gap:1.1})+30),S=(U,ht)=>{U.font=C(20,500),U.fillStyle=Ls,U.textBaseline="alphabetic",U.fillText(ht,56*M,b-30*M),U.fillStyle=Ah,U.fillRect(56*M,b-66*M,_-112*M,1.5*M)},G=(U,ht,j,Q,it)=>{U.fillStyle=it,U.beginPath(),U.arc(ht*M,j*M,Q*M,0,7),U.fill()},Z=(U,ht,j,Q,it=9)=>{for(let bt=0;bt<5;bt++)G(U,ht+it+bt*(it*2+6),j,it,bt<Q?Ns[4]:"#2a3442")},st=(U,ht,j,Q,it=22)=>Q.forEach((bt,It)=>{U.fillStyle=bt?Ns[4]:"#2a3442",U.fillRect((ht+It*(it+5))*M,j*M,it*M,it*M)}),N=U=>p?.places.find(ht=>ht.id===U),V=(v?.searches??[]).filter(U=>U.status==="unresolved"||U.status==="never-tested"),O=new Set((e?.CLUES??[]).map(U=>U.claim)),Y=(v?.claims??[]).filter(U=>!O.has(U.id)),ot=g.flatMap(U=>(U.not_located??[]).map(ht=>({site:U.name,what:typeof ht=="string"?ht:ht.what??ht.name??ht.id??""}))).filter(U=>U.what),et=(p?.best??[]).filter(U=>!U.near_old_ice),pt=U=>{let ht=new Set;return et.filter(j=>j.near?.name&&!/^off /.test(j.near.name)&&!ht.has(j.near.name)&&ht.add(j.near.name)).slice(0,U)},dt=m?.work?.filter(U=>(U.status??"open")!=="done")??[],at=[];for(let U=0;U<g.length;U+=2)at.push(g.slice(U,U+2));let R=[];for(R.push({id:"welcome",label:"The hall",draw:U=>{let ht=k(U,"The hall","The hall");["His words","Earth scores","Top scores","Places named","Searches","Unknown","Help build"].forEach((Q,it)=>{let bt=it%2,It=it>>1;G(U,66+bt*532,ht+18+It*62,8,Vl),T(U,Q,92+bt*532,ht+It*62,440,34,{weight:600,rows:1})})},sheet:()=>`<h2>The hall</h2><div class="hl-index">${[["text","His words"],["earth","Earth scores"],["best","Top scores"],["claims-1","Places named"],["searches","Searches"],["unknown","Unknown"],["work","Help build"]].map(([U,ht])=>`<button class="btn" data-act="hl-open" data-id="${U}">${ht}</button>`).join("")}</div><div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),R.push({id:"text",label:"His words",draw:U=>{let ht=k(U,"His words","His words"),j=(e?.CLUES??[]).map(Q=>v?.claims.find(it=>it.id===Q.claim)).filter(Boolean);for(let Q of j.slice(0,5))G(U,66,ht+17,8,Ns[4]),U.font=C(21,600),U.fillStyle=Ls,U.textBaseline="top",U.textAlign="right",U.fillText(Q.ref.split(";")[0],(_/M-56)*M,(ht+5)*M),U.textAlign="left",ht=T(U,Q.label,92,ht,760,27,{rows:2})+12},sheet:()=>`<h2>What Plato wrote</h2>${(v?.claims??[]).map(U=>`<div class="known"><span>${O.has(U.id)?'<i class="cdot on"></i>':'<i class="cdot"></i>'}${l(U.label)}</span><small>${l(U.ref??"")}</small></div>`).join("")}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>`}),R.push({id:"earth",label:"Earth scores",draw:U=>{let ht=k(U,"The Earth","Earth scores")+6,j=[...p?.totals.by_score??[]].sort((it,bt)=>bt.score-it.score),Q=Math.max(1,...j.map(it=>it.km2));for(let it of j)Z(U,56,ht+17,it.score,8),U.fillStyle="#16202c",U.fillRect(190*M,ht*M,640*M,34*M),U.fillStyle=Ns[it.score],U.fillRect(190*M,ht*M,Math.max(it.km2?3:0,640*it.km2/Q)*M,34*M),U.font=C(23,500),U.fillStyle=it.km2?Ls:Ds.bad,U.fillText(it.km2?`${Math.round(it.km2).toLocaleString("en")} km\xB2`:"none",850*M,(ht+17)*M),ht+=48},sheet:()=>{let U=[...p?.totals.by_score??[]].sort((Q,it)=>it.score-Q.score),ht=Math.max(1,...U.map(Q=>Q.km2)),j=Q=>Q>=1e6?`${(Q/1e6).toFixed(1)} M km\xB2`:Q>=1e3?`${Math.round(Q/1e3)} K km\xB2`:Q?`${Math.round(Q)} km\xB2`:"None";return`<h2>Earth scores</h2>${U.map(Q=>`<div class="hbar"><span class="pips" aria-label="${Q.score} of 5">${[0,1,2,3,4].map(it=>`<i class="${it<Q.score?"on":""}"></i>`).join("")}</span><span class="track"><b style="width:${Q.km2/ht*100}%;background:${Ns[Q.score]}"></b></span><small>${j(Q.km2)}</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),R.push({id:"best",label:"Top scores",draw:U=>{let ht=k(U,"The leaderboard","Top scores");pt(5).forEach((j,Q)=>{U.font=C(26,700),U.fillStyle=Ls,U.textBaseline="top",U.fillText(String(Q+1),56*M,(ht+2)*M),U.font=C(28,600),U.fillStyle=Eh,U.fillText(Iy(j.near?.name??`${j.lat.toFixed(1)}, ${j.lon.toFixed(1)}`,40),104*M,ht*M),st(U,800,ht+4,(e?.CLUES??[]).map(it=>j.clues.includes(it.key))),U.font=C(26,700),U.fillStyle=Ns[j.top],U.textAlign="right",U.fillText(`${j.top}/5`,(_/M-56)*M,(ht+2)*M),U.textAlign="left",ht+=50})},sheet:()=>{let U=U(5);return`<h2>Top scores</h2>${U.map(ht=>`<div class="hbar"><span class="pips" aria-label="${ht.top} of 5">${[0,1,2,3,4].map(j=>`<i class="${j<ht.top?"on":""}"></i>`).join("")}</span><span>${l(ht.near.name)}</span><small>${Math.round(ht.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),at.forEach((U,ht)=>R.push({id:`claims-${ht+1}`,label:U.map(j=>j.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join(" \xB7 "),draw:j=>{k(j,"Places people named",U.map(Q=>Q.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join("  \xB7  ")),U.forEach((Q,it)=>{let bt=56+it*532,It=N(Q.place??Q.id),jt=196;j.font=C(20,700),j.fillStyle=Ds.warn,j.textBaseline="top",j.fillText("CLAIMED",bt*M,jt*M),jt=T(j,Q.claimed?.line??"",bt,jt+28,480,24,{rows:4})+18,j.font=C(20,700),j.fillStyle=Ds.good,j.fillText("EVIDENCE",bt*M,jt*M),jt=T(j,Q.found?.line??"",bt,jt+28,480,24,{rows:5})+14,It&&Z(j,bt,b/M-60,It.score,8)}),j.fillStyle=Ah,j.fillRect(_/2-1,196*M,1.5*M,b-290*M)},sheet:()=>U.map(j=>`<h2>${l(j.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${l(j.claimed?.line??"")}</p><p><span class="tag">Evidence</span> ${l(j.found?.line??"")}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${l(j.place??j.id)}">See it on the globe</button></div>`).join("")})),R.push({id:"searches",label:"Searches",draw:U=>{let ht=v?.searches??[],j=k(U,"The searches","Searches"),Q=Ut=>Ut<1950?70+(Ut-1650)/300*250:320+(Ut-1950)/80*770,it=j+150;U.fillStyle=Ah,U.fillRect(56*M,it*M,(_/M-112)*M,2*M),U.font=C(19,500),U.fillStyle=Ls,U.textBaseline="top",U.textAlign="center";for(let Ut of[1700,1800,1950,1975,2e3,2025])U.fillRect(Q(Ut)*M,(it-6)*M,1.5*M,14*M),U.fillText(String(Ut),Q(Ut)*M,(it+16)*M);U.textAlign="left";let bt=new Map;for(let Ut of ht){let At=Math.round(Q(Ut.year)/15),Dt=bt.get(At)??0;bt.set(At,Dt+1),G(U,At*15,it-20-Dt*24,9,Ds[Rn[Ut.status]?.tone??"mut"])}let It=56,jt=it+78;for(let[Ut,At]of Object.entries(Rn)){let Dt=ht.filter(K=>K.status===Ut).length;if(!Dt)continue;G(U,It+9,jt+14,9,Ds[At.tone]),U.font=C(22,500),U.fillStyle=Eh,U.textBaseline="top";let kt=`${Dt} ${At.short.toLowerCase()}`;U.fillText(kt,(It+26)*M,jt*M),It+=44+U.measureText(kt).width/M}},sheet:()=>`<h2>Searches</h2>${[...v?.searches??[]].sort((U,ht)=>U.year-ht.year).map(U=>`<div class="known"><span><span class="yr">${U.year}</span>${l(U.title)}</span><small style="color:${Ds[Rn[U.status]?.tone??"mut"]}">${l(Rn[U.status]?.short??U.status)}</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>`}),R.push({id:"unknown",label:"Unknown",draw:U=>{let ht=k(U,"Still unknown","Unknown");for(let j of V.slice(0,6))G(U,66,ht+15,8,Ds[Rn[j.status]?.tone??"mut"]),U.font=C(20,600),U.fillStyle=Ls,U.textBaseline="top",U.textAlign="right",U.fillText(String(j.year),(_/M-56)*M,(ht+3)*M),U.textAlign="left",ht=T(U,j.title,92,ht,880,25,{rows:1})+11},sheet:()=>`<h2>Unknown</h2><h3>Searches</h3>${V.map(U=>`<div class="known"><span>${l(U.title)}${U.source?` ${o(typeof U.source=="string"?U.source:U.source.url??"","source")}`:""}</span><small>${l(String(U.date??U.year))} \xB7 ${l(Rn[U.status]?.short??"")}</small></div>`).join("")}<h3>Not scored yet</h3>${Y.map(U=>`<div class="known"><span>${l(U.label)}</span><small>${l(U.ref??"")}</small></div>`).join("")}${ot.length?`<h3>No published position</h3>${ot.map(U=>`<div class="known"><span>${l(U.what)}</span><small>${l(U.site.split(",")[0])}</small></div>`).join("")}`:""}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>`}),R.push({id:"work",label:"Help build",draw:U=>{let ht=k(U,"Open work","Help build");[dt.slice(0,Math.ceil(Math.min(dt.length,10)/2)),dt.slice(Math.ceil(Math.min(dt.length,10)/2),10)].forEach((Q,it)=>{let bt=ht;for(let It of Q)U.font=C(18,700),U.fillStyle=Vl,U.textBaseline="top",U.fillText(It.area.toUpperCase(),(56+it*532)*M,bt*M),bt=T(U,It.title,56+it*532,bt+24,480,25,{rows:1})+13})},sheet:()=>ct()}),R.push({id:"map",label:"Kircher, 1664",draw:(U,ht)=>{U.fillStyle=$f,U.fillRect(0,0,_,b),U.fillStyle=Vl,U.fillRect(0,0,_,5*M);let j=(r.storyMedia??[]).find(it=>/kircher/.test(it.file));if(!j)return;let Q=new Image;Q.onload=()=>{let it=Math.min((_-80*M)/Q.width,(b-110*M)/Q.height),bt=Q.width*it,It=Q.height*it;U.drawImage(Q,(_-bt)/2,30*M,bt,It),T(U,j.caption.split(".")[0],56,(30*M+It)/M+14,1040,22,{colour:Ls,rows:1}),ht?.()},Q.src=globalThis.__STORY__?.[j.file]??`${globalThis.__ASSETS__||"./"}${j.file}`},sheet:()=>{let U=(r.storyMedia??[]).find(ht=>/kircher/.test(ht.file));return U?`<h2>${l(U.caption.split(".")[0])}</h2><p>${o(U.source,U.by)} \xB7 ${l(U.licence)}</p>`:""}});R.length<12;)R.push(null);let E=()=>i.host?.community??m?.community??"atlantis",H=()=>(m?.repository??"").replace(/\/[^/]+$/,`/${E()}`),X=U=>`Help with a/${E()} on Abstracts (https://abstracts.co/a/${E()}). Its repository is ${H()}.

${U?`The task: ${U.title} (${U.id}, ${U.area}).
${U.why}
Done when: ${U.done_when}`:"Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want."}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${U?` This task starts in: ${U.start.join(", ")}.`:""}
2. Offer to say on the community's Wall that I am taking ${U?U.id:"the task"}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${U?U.check.map(ht=>`\`${ht}\``).join(" and "):"the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${H()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${U?U.id:"the task"} in it.`,ct=()=>`<h2>Help build</h2>${Object.entries(m?.areas??{}).map(([U,ht])=>{let j=dt.filter(Q=>Q.area===U);return j.length?`<h3>${l(U[0].toUpperCase()+U.slice(1))}</h3>${j.map(Q=>`<details class="hl-task"><summary><b>${l(Q.title)}</b><small>${l(Q.size)}</small></summary><p>${l(Q.why)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${l(Q.id)}">Copy the prompt for my AI</button></div></details>`).join("")}`:""}).join("")}`,q=U=>{let ht=R.find(j=>j?.id===U);ht&&(h("hall"),c.textContent="The hall",u.innerHTML=ht.sheet())};u.addEventListener("click",U=>{let ht=U.target.closest('[data-act^="hl-"]');if(!ht)return;let j=ht.dataset.act;if(j==="hl-work")q("work");else if(j==="hl-open")q(ht.dataset.id);else if(j==="hl-globe")i.openGlobe?.();else if(j==="hl-board")i.openGlobe?.(!1),t?.openBoard();else if(j==="hl-place"){let Q=t?.atlantis.places.find(it=>it.id===ht.dataset.id);i.openGlobe?.(!1),Q&&t.openPlace(Q,!0)}else if(j==="hl-prompt"){let Q=X(dt.find(it=>it.id===ht.dataset.id)??null);(navigator.clipboard?.writeText(Q)??Promise.reject()).then(()=>f("Copied. Paste it to your AI."),()=>{u.insertAdjacentHTML("beforeend",`<pre class="c-share">${l(Q)}</pre>`),f("Select the text and copy it")})}});let lt=()=>{let j=document.createElement("canvas");j.width=720,j.height=360;let Q=j.getContext("2d"),it=Q.createImageData(720,360),bt=it.data,It=e?.state,jt=It?.n,Ut=K=>[parseInt(K.slice(1,3),16),parseInt(K.slice(3,5),16),parseInt(K.slice(5,7),16)],At=Ut("#0c2a44"),Dt=Ut("#3b4a3f"),kt=Ns.map(Ut);for(let K=0;K<360;K++){let Ht=Math.max(-85,Math.min(85,90-(K+.5)/360*180))*Math.PI/180,Rt=jt?Math.max(0,Math.min(jt-1,Math.floor((1-Math.log(Math.tan(Ht)+1/Math.cos(Ht))/Math.PI)/2*jt))):0;for(let Bt=0;Bt<720;Bt++){let _t=At;if(jt){let Ot=Rt*jt+Math.floor(Bt/720*jt),Ft=It.state[Ot];_t=Ft===1?Dt:Ft===2?kt[Math.max(1,Cy(It.bits[Ot]))]:At}let Lt=(K*720+Bt)*4;bt[Lt]=_t[0],bt[Lt+1]=_t[1],bt[Lt+2]=_t[2],bt[Lt+3]=255}}return Q.putImageData(it,0,0),j},gt=()=>{let U=d.city.hall,ht=new $e;ht.name="hall",x.boards=[],U.panels.forEach((It,jt)=>{let Ut=R[jt];if(!Ut)return;let At=document.createElement("canvas");At.width=_,At.height=b;let Dt=At.getContext("2d");Dt.textAlign="left",Ut.draw(Dt,()=>{x.boards.find(Lt=>Lt.canvas===At).tex.needsUpdate=!0,s.stamp++});let kt=new Li(At);kt.colorSpace=Ie,kt.anisotropy=4;let K=new pe(new Un(It.w,It.h),new qe({map:kt})),Ht=new ft(-Math.cos(It.a),-Math.sin(It.a),0),Rt=new ft(0,0,1),Bt=new ft().crossVectors(Rt,Ht);K.quaternion.setFromRotationMatrix(new xe().makeBasis(Bt,Rt,Ht)),K.position.set(It.x,It.y,It.z);let _t=new pe(new Un(It.w+.16,It.h+.16),new qe({color:new se(.55,.4,.14)}));_t.quaternion.copy(K.quaternion),_t.position.set(It.x-Ht.x*.03,It.y-Ht.y*.03,It.z),ht.add(_t,K),x.boards.push({...Ut,mesh:K,canvas:At,tex:kt,at:It})});let j=new Li(lt());j.colorSpace=Ie;let Q=new pe(new kn(U.globe.r,48,32),new qe({map:j}));Q.rotation.x=Math.PI/2;let it=new $e,bt=new $e;return it.add(Q),bt.add(it),bt.rotation.y=.41,bt.position.set(U.globe.x,U.globe.y,U.globe.z),ht.add(bt),x.globe={ball:Q,tex:j,painted:!!e?.state.ready},x.spin=it,ht};return{sync:()=>{let U=d.city?.group??null;if(U!==x.on&&(x.on=U,U&&d.city.hall)){x.group=gt(),U.add(x.group);let ht=d.city.hall;n.hotspots.length=0;for(let j of x.boards)n.hotspots.push({id:j.id,x:j.at.x,y:j.at.y,z:j.at.z,reach:15,size:j.at.w,label:j.label,act:()=>q(j.id)});n.hotspots.push({id:"globe",x:ht.globe.x,y:ht.globe.y,z:ht.globe.z,reach:13,size:ht.globe.r*2.4,label:"Open the globe",act:()=>i.openGlobe?.()})}!x.group||!d.active||(x.globe&&!x.globe.painted&&e?.state.ready&&(x.globe.tex.image=lt(),x.globe.tex.needsUpdate=!0,x.globe.painted=!0,s.stamp++),n.on&&Math.hypot(n.state.x,n.state.y)<d.city.hall.RG&&(x.spin.rotation.z=Py+(s.time-(x.since??=s.time))*.05,s.stamp++))},show:q,boards:R,promptFor:X,state:x,counts:{work:dt.length,openSearches:V.length,unscored:Y.length,lost:ot.length}}};var Wl=["HALL22","HALL23","HALL24","HALL25","HALL26","HALL27","HALL28","HALL29"],Ly=30,Xf=38,Dy=8,Ny=900,Rh=280,Yf=i=>{let t=0;for(let e of String(i))t=(t*31+e.charCodeAt(0))%360;return t},Zf=(i,{walk:t})=>{let{world:e,$:n,esc:s,toast:r,st:a}=i,l=e.city,o=n("#meet"),h=n("#people"),u=new URLSearchParams(location.search).get("room"),c={state:"off",drawn:null,me:null,members:new Map,socket:null,room:0,seats:8,ice:[],batch:!1,lastPos:"",sentAt:0,saidAt:0,lines:[],muted:new Set,voice:{on:!1,stream:null,mic:!0,peers:new Map},group:null,on:null,tries:0},f=R=>{c.socket?.readyState===1&&c.socket.send(JSON.stringify(R))},d='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>',p=()=>{if(c.drawn!==c.state&&(c.drawn=c.state,o.dataset.state=c.state,o.innerHTML=c.state==="on"?`<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${Rh}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${d}</button><span class="mt-n" id="mt-n"></span></form>`:c.state==="signed-out"?'<button class="btn glass" data-act="mt-signin">Sign in</button>':c.state==="elsewhere"?`<a class="btn glass" href="https://abstracts.co/a/${s(i.data.open?.community??"atlantis")}?a_hall=1" target="_blank" rel="noopener">Meet people on abstracts.co</a>`:c.state==="full"?'<span class="mt-state">Rooms are full</span>':""),c.state==="on"){let R=n("#mt-log"),E=n("#mt-mic"),H=n("#mt-n");R.innerHTML=c.lines.slice(-6).map(X=>`<p${X.mine?' class="mine"':""}><b>${s(X.name)}</b> ${s(X.text)}</p>`).join(""),R.scrollTop=R.scrollHeight,E.className=`mt-mic${c.voice.on?c.voice.mic?" on":" muted":""}`,E.setAttribute("aria-label",c.voice.on?c.voice.mic?"Mute my microphone":"Unmute my microphone":"Talk with people near me"),E.setAttribute("aria-pressed",String(c.voice.on&&c.voice.mic)),H.textContent=`${c.members.size+1} here`}o.hidden=!o.innerHTML||!t.on},v=n("#here"),g="",m=()=>{let R=[...c.members.values()],E=c.state==="on"?R.map(H=>H.id).join(","):"";E!==g&&(g=E,v.hidden=!E,E&&(v.setAttribute("aria-label",`${R.length+1} here: ${[c.me?.name,...R.map(H=>H.name)].filter(Boolean).join(", ")}`),v.innerHTML=`${R.slice(0,3).map(H=>H.avatar?`<img src="${s(H.avatar)}" alt="">`:`<i style="background:hsl(${Yf(H.id)} 55% 55%)">${s((H.name||"?")[0].toUpperCase())}</i>`).join("")}<b>${R.length+1}</b>`))},x=(R,E,H=!1)=>{c.lines.push({name:R,text:E,mine:H}),c.lines.length>40&&c.lines.shift(),p()},_=R=>{let E=new $e,H=new se().setHSL(Yf(R)/360,.55,.62),X=H.clone().multiplyScalar(.55),ct=new pe(new Hr(.27,.86,4,10),new qe({color:H}));ct.rotation.x=Math.PI/2,ct.position.z=.72;let q=new pe(new kn(.21,12,10),new qe({color:H.clone().multiplyScalar(1.15)}));q.position.z=1.52;let lt=new pe(new Vr(.09,.26,8),new qe({color:X}));lt.position.set(0,.24,1.5);let gt=new pe(new qn(.42,.5,24),new qe({color:new se(1.4,1.1,.4),transparent:!0,opacity:0}));return gt.position.z=.03,E.add(ct,q,lt,gt),E.userData.ring=gt,E},b=R=>{let E=document.createElement("div");return E.className="person",E.innerHTML=`<i></i><span>${s(R.name)}</span>`,h.append(E),E},M=R=>{if(!R?.id||R.id===c.me?.id||c.members.has(R.id))return c.members.get(R?.id);let E={id:R.id,name:R.name||R.username||"Someone",username:R.username,avatar:R.avatar??null,x:0,y:0,dir:0,tx:null,ty:0,tdir:0,voice:!1,talking:0,seen:0,fig:_(R.id),tag:null};return E.fig.visible=!1,E.tag=b(E),c.group?.add(E.fig),c.members.set(R.id,E),E},C=R=>{let E=c.members.get(R);E&&(E.fig.removeFromParent(),E.tag.remove(),N(R),c.members.delete(R),p(),e.stamp++)},y=(R,E)=>{let H=c.members.get(R);!H||!Array.isArray(E)||!E.slice(0,3).every(Number.isFinite)||([H.tx,H.ty,H.tdir]=E,H.voice=!!(E[3]&1),H.seen=performance.now(),H.fig.visible===!1&&(H.x=H.tx,H.y=H.ty,H.dir=H.tdir,H.fig.visible=!0))},T=async()=>u?{url:u.replace(/[A-Z2-9]{6}$/,Wl[c.room]),token:`dev.${encodeURIComponent(new URLSearchParams(location.search).get("as")??"Guest")}`,ice:[],room:Wl[c.room]}:bi("roomToken",{room:Wl[c.room]}),k=async(R=!1)=>{if(c.state!=="on"){if(c.state==="joining"){R&&(c.wantAsk=!0);return}c.state="joining",p();try{let E=await T().catch(async X=>{if(u||X?.code!=="denied")throw X;return await bi("viewer"),T()});c.ice=E.ice??[],c.seats=E.seats??8;let H=c.socket=new WebSocket(`${E.url}?token=${encodeURIComponent(E.token)}`);H.onmessage=X=>{let ct;try{ct=JSON.parse(X.data)}catch{return}S(ct)},H.onclose=X=>{if(c.socket===H){c.socket=null;for(let ct of[...c.members.keys()])C(ct);if(X.code===4003&&c.room<Wl.length-1)return c.room++,c.state="off",k();if(X.code===4003)return c.state="full",p();if(X.code===4001)return c.state="off",p();c.state="off",c.tries++<6?setTimeout(()=>{c.state==="off"&&k()},1500*c.tries):p()}}}catch(E){if(c.state=E?.code==="signed_out"?"signed-out":E?.code==="unsupported"?"off":"ask",!R&&c.wantAsk&&c.state==="ask")return c.wantAsk=!1,k(!0);R&&E?.code&&!["denied","cancelled","signed_out"].includes(E.code)&&r("The room is not answering"),p()}}},S=R=>{if(R.t==="welcome"){c.me=R.you,c.state="on",c.tries=0,c.batch=R.seats!==void 0,R.seats&&(c.seats=R.seats);for(let E of R.members??[])M(E);for(let[E,H]of Object.entries(R.pos??{}))y(E,H);c.lastPos="",p()}else if(R.t==="join"){let E=M(R.member);E&&x(E.name,"came in"),c.lastPos=""}else if(R.t==="leave"){let E=c.members.get(R.id);E&&x(E.name,"left"),C(R.id)}else if(R.t==="pos")for(let[E,H]of Object.entries(R.from??{}))y(E,H);else if(R.t==="msg"){let E=R.data,H=c.members.get(R.from);if(!H||!E||typeof E!="object")return;Array.isArray(E.p)?y(R.from,E.p):typeof E.c=="string"&&!c.muted.has(R.from)?(x(H.name,E.c.slice(0,Rh)),i.sound?.sfx("tick",.12)):E.rtc&&O(R.from,E.rtc)}else R.t==="error"&&R.code==="invalid"&&c.batch&&(c.batch=!1)},G=()=>{let R=c.socket;c.socket=null,R?.close(1e3);for(let E of[...c.members.keys()])C(E);ot(),(c.state==="on"||c.state==="joining")&&(c.state="ask"),p()},Z=R=>{let E=R.trim().slice(0,Rh),H=performance.now();return!E||c.state!=="on"?!1:H-c.saidAt<Ny?(r("A moment between lines"),!1):(c.saidAt=H,f({t:"send",data:{c:E}}),x(c.me?.name??"You",E,!0),!0)},st=c.voice,N=R=>{let E=st.peers.get(R);if(E){st.peers.delete(R);try{E.pc.close()}catch{}E.out?.disconnect(),E.el?.remove()}},V=R=>{if(st.peers.has(R))return st.peers.get(R);let E=new RTCPeerConnection({iceServers:c.ice}),H={pc:E,id:R,out:null,gain:null,pan:null,level:null,el:null,polite:String(c.me.id)>String(R),making:!1};if(st.peers.set(R,H),st.stream)for(let X of st.stream.getAudioTracks())E.addTrack(X,st.stream);else E.addTransceiver("audio",{direction:"recvonly"});return E.onicecandidate=X=>{X.candidate&&f({t:"send",to:R,data:{rtc:{ice:X.candidate}}})},E.onnegotiationneeded=async()=>{try{H.making=!0,await E.setLocalDescription(),f({t:"send",to:R,data:{rtc:{sdp:E.localDescription}}})}catch{}finally{H.making=!1}},E.ontrack=X=>{let ct=X.streams[0]??new MediaStream([X.track]),q=i.sound?.context;H.el=Object.assign(document.createElement("audio"),{srcObject:ct,muted:!!q,autoplay:!0}),H.el.play?.().catch(()=>{}),q&&(H.out=q.createMediaStreamSource(ct),H.gain=q.createGain(),H.gain.gain.value=0,H.pan=q.createStereoPanner(),H.level=q.createAnalyser(),H.level.fftSize=256,H.out.connect(H.level),H.out.connect(H.gain).connect(H.pan).connect(i.sound.master))},E.onconnectionstatechange=()=>{["failed","closed"].includes(E.connectionState)&&N(R)},H},O=async(R,E)=>{if(!st.on)return;let H=V(R),X=H.pc;try{if(E.sdp){if(E.sdp.type==="offer"&&(H.making||X.signalingState!=="stable")&&!H.polite)return;await X.setRemoteDescription(E.sdp),E.sdp.type==="offer"&&(await X.setLocalDescription(),f({t:"send",to:R,data:{rtc:{sdp:X.localDescription}}}))}else E.ice&&await X.addIceCandidate(E.ice).catch(()=>{})}catch{}},Y=async()=>{if(!st.on){try{st.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),st.mic=!0}catch{st.stream=null,st.mic=!1,r("No microphone: you can listen")}st.on=!0,c.lastPos="",i.sound?.context.state!=="running"&&i.sound?.context.resume().catch(()=>{}),p()}},ot=()=>{if(st.on){st.on=!1;for(let R of[...st.peers.keys()])N(R);for(let R of st.stream?.getTracks()??[])R.stop();st.stream=null,c.lastPos="",p()}},et=()=>{st.mic=!st.mic;for(let R of st.stream?.getAudioTracks()??[])R.enabled=st.mic;p()};document.addEventListener("visibilitychange",()=>{if(document.hidden&&st.on&&st.stream){st.mic=!1;for(let R of st.stream.getAudioTracks())R.enabled=!1;p()}});let pt=new ft,dt=R=>{let E=l.city?.group??null;if(E!==c.on)if(c.on=E,E){c.group=new $e,c.group.name="people",E.add(c.group);for(let Q of c.members.values())c.group.add(Q.fig)}else c.group=null;if(m(),!t.on){o.hidden||(o.hidden=!0,h.hidden=!0);return}h.hidden=!1,o.hidden&&p();let H=t.state,X=performance.now();if(c.state==="on"){let Q=[Math.round(H.x*10)/10,Math.round(H.y*10)/10,Math.round(H.dir*100)/100,st.on?1:0],it=Q.join(",");(it!==c.lastPos&&X-c.sentAt>(c.batch?200:330)||X-c.sentAt>3e3)&&(c.lastPos=it,c.sentAt=X,f(c.batch?{t:"pos",data:Q}:{t:"send",data:{p:Q}}))}if(!c.members.size)return;let ct=l.camera,q=e.renderer.domElement,lt=q.clientWidth,gt=q.clientHeight,mt=1-Math.exp(-R*9),[U,ht]=t.forward(),j=[];for(let Q of c.members.values()){if(Q.tx==null)continue;let it=Q.x+Q.y;Q.x+=(Q.tx-Q.x)*mt,Q.y+=(Q.ty-Q.y)*mt;let bt=Q.tdir-Q.dir;bt=Math.atan2(Math.sin(bt),Math.cos(bt)),Q.dir+=bt*mt;let It=l.localFloor(Q.x,Q.y)??H.z;Q.fig.position.set(Q.x,Q.y,It),Q.fig.rotation.z=-Q.dir-l.turn,Math.abs(Q.x+Q.y-it)>.001&&e.stamp++;let jt=Math.hypot(Q.x-H.x,Q.y-H.y);pt.set(Q.x,Q.y,It+1.95).applyMatrix4(E.matrixWorld).project(ct);let Ut=pt.z<1&&pt.z>-1&&Math.abs(pt.x)<1.05&&Math.abs(pt.y)<1.05&&jt<160;Q.tag.style.display=Ut?"":"none",Ut&&(Q.tag.style.transform=`translate(${(pt.x+1)/2*lt}px, ${(1-pt.y)/2*gt}px) translate(-50%, -100%)`,Q.tag.style.opacity=jt<60?1:.6);let At=st.peers.get(Q.id);if(At?.gain){let Dt=jt<3?1:Math.max(0,1-(jt-3)/(Xf-3))**1.6,kt=((Q.x-H.x)*ht-(Q.y-H.y)*U)/Math.max(jt,.5);At.gain.gain.value+=((c.muted.has(Q.id)?0:Dt)-At.gain.gain.value)*mt,At.pan.pan.value+=(Math.max(-.85,Math.min(.85,kt))-At.pan.pan.value)*mt;let K=new Uint8Array(At.level.fftSize);At.level.getByteTimeDomainData(K);let Ht=0;for(let Rt of K)Ht=Math.max(Ht,Math.abs(Rt-128));Q.talking+=((Ht>9?1:0)-Q.talking)*Math.min(1,R*8)}else Q.talking*=.9;Q.fig.userData.ring.material.opacity=Q.talking,Q.tag.classList.toggle("talking",Q.talking>.4),Q.voice&&j.push([jt,Q.id])}if(st.on&&c.state==="on"){j.sort((it,bt)=>it[0]-bt[0]);let Q=new Set(j.filter(([it])=>it<Ly).slice(0,Dy).map(([,it])=>it));for(let it of Q)!st.peers.has(it)&&String(c.me.id)<String(it)&&V(it);for(let[it]of st.peers){let bt=c.members.get(it);(!bt||!bt.voice||Math.hypot(bt.x-H.x,bt.y-H.y)>Xf)&&N(it)}}},at=async()=>{if(c.state==="on"||c.state==="joining")return;if(u)return k();if(!ls)return c.state="elsewhere",p();let R=a.host;if(!R)return c.state="off",p();if(!R.signedIn)return c.state="signed-out",p();c.tries=0,await k(!0),c.state==="ask"&&(c.state="off",p())};return o.addEventListener("click",R=>{let E=R.target.closest("[data-act]")?.dataset.act;E==="mt-signin"?bi("signIn").catch(()=>r("Sign-in is not answering")):E==="mt-join"?k(!0):E==="mt-voice"&&(st.on?st.stream?et():ot():Y())}),o.addEventListener("submit",R=>{R.preventDefault();let E=n("#mt-text");E&&Z(E.value)&&(E.value="",E.blur())}),addEventListener("keydown",R=>{t.on&&c.state==="on"&&(R.code==="KeyT"||R.code==="Slash")&&!R.target.closest?.("input, textarea")&&(n("#mt-text")?.focus(),R.preventDefault()),R.code==="Escape"&&R.target.id==="mt-text"&&R.target.blur()}),{tick:dt,arrive:at,leave:G,join:k,say:Z,voiceOn:Y,voiceOff:ot,mute:et,state:c,get count(){return c.members.size}}};var Fs=[{key:"sank",claim:"sank-in-a-day-and-night",name:"It sank",word:"sank",yes:"Land at Plato's date, open sea today.",no:"It did not go under."},{key:"atlantic",claim:"beyond-pillars",name:"Beyond the Pillars",word:"beyond the Pillars",yes:"On the Atlantic side, outside the strait.",no:"Not on the Atlantic, or inside the strait."},{key:"plain",claim:"great-plain",name:"Great plain",word:"great plain",yes:"Level low ground of the size he gives.",no:"No level plain of his size here."},{key:"mountains",claim:"mountains-shelter-north",name:"Mountains north",word:"mountains north",yes:"Higher ground on the north side than the south.",no:"No mountains sheltering it from the north."},{key:"island",claim:"larger-than-libya-and-asia",name:"An island",word:"island",yes:"The land it stood on was an island then.",no:"Part of a continent then, not an island."}],Fy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Uy=i=>{let t=(i??"").split(",").map(e=>e.trim()).filter(Boolean);return t.length>2?`${t[0]}, ${t[t.length-1]}`:t.join(", ")},jf=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,toast:l,setSheet:o,body:h,eyebrow:u,stage:c}=i,{control:f,globe:d}=t,p=d.shared,v=e.worldfit,g=e.cas;if(!v)return null;let m=s("#hunt"),x=s("#reticle"),_={forced:!1,ready:!1,n:0,score:null,bits:null,state:null,on:!1,last:"",claim:null,glow:1},b=at=>g?.claims.find(R=>R.id===at),M=at=>(b(at.claim)?.ref??"").split(";")[0];(async()=>{let at=t.phone?"worldfit-2k.png":"worldfit.png",R=await fetch(globalThis.__WORLDFIT__?.[at]??(globalThis.__ASSETS__||"./")+at);if(!R.ok)throw new Error(`worldfit: HTTP ${R.status}`);let E=await createImageBitmap(await R.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),H=E.width,X=512,ct=new Uint8Array(H*H),q=new Uint8Array(H*H),lt=new Uint8Array(H*H),mt=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:H,height:X}):new OffscreenCanvas(H,X)).getContext("2d",{willReadFrequently:!0});for(let j=0;j<H;j+=X){mt.clearRect(0,0,H,X),mt.drawImage(E,0,j,H,X,0,0,H,X);let Q=mt.getImageData(0,0,H,X).data;for(let it=0,bt=j*H;it<H*X;it++,bt++)ct[bt]=Q[it*4],q[bt]=Q[it*4+1],lt[bt]=Q[it*4+2]}E.close?.();let U=new Uint8Array(H*H);for(let j=0;j<H;j++)for(let Q=0;Q<H;Q++){let it=0;for(let bt=-1;bt<=1;bt++){let It=j+bt<0?0:j+bt>=H?H-1:j+bt;for(let jt=-1;jt<=1;jt++)it+=ct[It*H+(Q+jt+H)%H]*(jt||bt?1:2)}U[j*H+Q]=it*5}let ht=new Sn(U,H,H,fi,an);ht.minFilter=rn,ht.magFilter=Ae,ht.wrapS=Pi,ht.wrapT=_n,ht.generateMipmaps=!0,ht.needsUpdate=!0,p.tHeat.value=ht,p.uHeatLod.value=H<v.grid.size?-1:0,Object.assign(_,{n:H,bits:q,state:lt,ready:!0}),t.stamp++})().catch(at=>{console.warn(at.message),m.classList.remove("open")});let y=(at,R)=>{if(!_.ready)return null;let E=_.n,H=$t(Math.floor((at+180)/360*E),0,E-1),X=$t(R,-85,85)*yt,ct=$t(Math.floor((1-Math.log(Math.tan(X)+1/Math.cos(X))/Math.PI)/2*E),0,E-1),q=_.bits[ct*E+H],lt=_.state[ct*E+H];return{state:lt,bits:q,score:lt===0?0:Fy(q),clues:Fs.map((gt,mt)=>!!(q&1<<mt))}},T={sank:"Sank",atlantic:"Atlantic",plain:"Plain",mountains:"Mountains",island:"Island"};m.innerHTML=`<div class="h-main"><b id="h-score"></b><div class="h-clues">${Fs.map((at,R)=>`<span class="h-c" data-j="${R}"><i></i>${r(T[at.key])}</span>`).join("")}</div><button class="btn primary" data-act="h-claim">Check this spot</button></div>`;let S=()=>{let at=n.hunt&&_.ready&&(!i.busy()||_.forced);at!==_.on&&(_.on=at,m.classList.toggle("open",at),x.classList.toggle("open",at),c.classList.toggle("hunting",at),i.sound?.deep(at));let R=n.hunt&&_.ready?at||n.sheet==="claim"||!s("#intro").classList.contains("gone")?_.glow:.3*_.glow:0;if(Math.abs(p.uHeat.value-R)>.004&&(p.uHeat.value+=(R-p.uHeat.value)*.12,t.stamp++),!at)return;x.style.left=`${50+f.shift[0]*50}%`,x.style.top=`${50-f.shift[1]*50}%`;let E=f.lat/yt,H=f.lon/yt,X=y(H,E),ct=`${X.state}|${X.bits}`;if(ct===_.last)return;_.last=ct;let q=s("#h-score");q.innerHTML=X.state===0?"":`${X.score}<small>/5</small>`,m.querySelector('[data-act="h-claim"]').disabled=X.state===0,q.className=`s${X.state===2?X.score:0}`,q.setAttribute("aria-label",X.state===0?"Open sea at Plato's date too: nothing here to sink":X.state===1?`${X.score} of 5. Dry land then and now: it never sank`:`${X.score} of 5, on land that has gone under`),x.className=`open s${X.state===2?X.score:0}`;for(let lt of m.querySelectorAll(".h-c"))lt.classList.toggle("on",X.state!==0&&X.clues[Number(lt.dataset.j)]);i.sound?.read(X)},G=null,Z=(at,R)=>{let E=xn(at*yt,R*yt),H=performance.now(),X=$t(f.range/1e3*.75,30,3500);cancelAnimationFrame(G);let ct=()=>{let q=$t((performance.now()-H)/1700,0,1);p.uScan.value.set(E[0],E[1],E[2],Math.max(X*(1-(1-q)**2.2),.01)),p.uScanA.value=1.1*(1-q)**1.3,t.stamp++,q<1?G=requestAnimationFrame(ct):p.uScanA.value=0};ct()},st=at=>{let R=v.totals;return R.by_score.filter(H=>H.score<at).reduce((H,X)=>H+X.km2,0)/R.land_that_sank_km2*100},N=(at,R)=>`The hunt for Atlantis \u{1F531} ${at.score}/5
${at.clues.map(E=>E?"\u{1F7E9}":"\u{1F7E5}").join("")}
${Fs.map(E=>E.word).join(" \xB7 ")}
${An(at.lat,at.lon,2)}${at.name?` \xB7 ${at.name}`:""}
${R}`,V=at=>i.shareUrl({hunt:`${at.lat.toFixed(3)},${at.lon.toFixed(3)}`},!0),O={copy:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',x:'<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',save:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>'},Y=()=>{let at=_.claim,R=v.places;u.textContent="Landscape match";let E=R.filter(X=>X.score<at.score).length,H=at.state===0?"Open sea at Plato's date too. There was no land here to sink.":at.state===1?"Dry land then and now. It never sank, which is the heart of the story.":`Better than ${st(at.score).toFixed(at.score>=4?1:0)}% of all the land that has gone under. Beats ${E} of the ${R.length} famous claims.`;h.innerHTML=`
      <div class="c-hero s${at.state===2?at.score:0}"><b>${at.state===0?"\u2013":`${at.score}<small>/5</small>`}</b><div class="sq">${at.clues.map(X=>`<i class="${X?"y":"n"}"></i>`).join("")}</div></div>
      <h2 class="c-name">${r(at.name??An(at.lat,at.lon,2))}</h2>
      <div class="c-sub">${at.name?An(at.lat,at.lon,2):at.state===2?"Sunken land":at.state===1?"Dry land":"Open sea"}</div>
      <div class="c-list">${Fs.map((X,ct)=>`<details class="c-row ${at.clues[ct]?"y":"n"}"><summary><i></i>${r(X.name)}<small>${r(M(X))}</small></summary><p>${r(at.state===0?"No land here at that date.":at.clues[ct]?X.yes:X.no)}${b(X.claim)?.quote?` <em class="q">\u201C${r(b(X.claim).quote)}\u201D</em>`:""}</p></details>`).join("")}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${O.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${O.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${O.save}</button></div>
      <details class="c-more"><summary>More</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${r(N(at,V(at)))}</pre>`},ot=async(at,R,E=!1)=>{if(!_.ready)return;let H=y(R,at),X=v.best.find(ct=>ct.near?.name&&!/^off /.test(ct.near.name)&&Math.abs(ct.lat-at)<1.2&&Math.abs(ct.lon-R)<1.2&&H.state===2);_.claim={lat:at,lon:R,...H,name:X?X.near.name:null,named:!!X},n.legend=n.place=null,i.leaveScene(),o("claim"),h.scrollTop=0,Y(),E&&f.flyTo({lon:R*yt,lat:at*yt,range:$t(f.range,6e4,9e5),tilt:30*yt,heading:0},2.4),setTimeout(()=>{Z(R,at),i.sound?.sfx("ping",.8),H.state===2&&H.score>=4&&setTimeout(()=>i.sound?.sfx("reveal",.5),500)},E?2200:60);try{let q=(await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${at}&lon=${R}`,{signal:AbortSignal.timeout(6e3)}).then(gt=>gt.json())).features?.[0]?.properties,lt=q&&[q.name??q.county??q.state,q.country].filter(Boolean).join(", ");lt&&_.claim&&_.claim.lat===at&&!_.claim.named&&n.sheet==="claim"&&(_.claim.name=`Near ${lt}`,Y())}catch{}},et=()=>{u.textContent="Top scores";let at=(ct,q)=>`<button class="prow" data-act="h-go" data-ll="${ct.lat},${ct.lon}"><b class="lb s${ct.top}">${ct.top}/5</b><span class="pn">${r(ct.near?.name?Uy(ct.near.name):An(ct.lat,ct.lon,1))}</span><small>${ct.km2.toLocaleString("en")} km\xB2</small></button>`,R=v.best.filter(ct=>!ct.near_old_ice).slice(0,8),E=v.best.filter(ct=>ct.near_old_ice).slice(0,5),H=v.totals,X=(H.land_that_sank_km2/1e6).toFixed(1);h.innerHTML=`
      <h2>Best on Earth</h2>
      <p class="lead">${X} million km\xB2 of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${H.by_score.map(ct=>`<div><b class="lb s${ct.score}">${ct.score}/5</b><i style="width:${Math.max(1.5,ct.km2/H.land_that_sank_km2*100).toFixed(1)}%"></i><small>${ct.km2>=1e6?`${(ct.km2/1e6).toFixed(1)} million km\xB2`:ct.km2>=500?`${Math.round(ct.km2/1e3).toLocaleString("en")} thousand km\xB2`:"none"}</small></div>`).join("")}</div>
      <h3>The best matches</h3>
      ${R.map(at).join("")}
      ${E.length?`<h3>Near the old ice sheets</h3>${E.map(at).join("")}`:""}
      <h3>The famous claims, by the same rules</h3>
      ${v.places.map(ct=>`<button class="prow" data-act="a-place" data-id="${r(ct.id)}"><b class="lb s${ct.score}">${ct.score}/5</b><span class="pn">${r(i.shortName(ct.name))}</span><small>${r(ct.note?"open sea then":ct.clues.map(q=>Fs.find(lt=>lt.key===q).word).join(", ")||"none")}</small></button>`).join("")}
      `},pt=()=>{u.textContent="How it's scored";let at=v.rules,R={sank:`The cell was land with the sea ${Math.abs(at.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,atlantic:"The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.",plain:`At least ${Math.round(at.plain.share_needed*100)}% of a ${Math.round(at.plain.long_km)} by ${Math.round(at.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${at.plain.low_ground_max_m_above_today} m above today's sea.`,mountains:`The ground ${at.mountains.band_from_km} to ${at.mountains.band_to_km} km to its north averages at least ${at.mountains.north_mean_at_least_m} m, and at least ${at.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,island:`The piece of land it belonged to then was smaller than ${(at.island.smaller_than_km2/1e6).toFixed(1)} million km\xB2: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`};h.innerHTML=`
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${g?.claims.filter(E=>E.testable).length??27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${Fs.map(E=>`<div class="c-row y"><i></i><span><b>${r(E.name)}</b> <small>${r(M(E))}</small><br>${r(R[E.key])}${b(E.claim)?.quote?`<br><em class="q">\u201C${r(b(E.claim).quote)}\u201D</em>`:""}</span></div>`).join("")}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${v.limits.map(E=>`<li>${r(E)}</li>`).join("")}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`},dt=(at,R)=>{let E=_.claim;if(at==="h-claim")ot(f.lat/yt,f.lon/yt);else if(at==="h-best")n.legend=n.place=null,i.leaveScene(),o("best"),h.scrollTop=0,et();else if(at==="h-rules")n.legend=n.place=null,i.leaveScene(),o("rules"),h.scrollTop=0,pt();else if(at==="h-story")i.tour?.();else if(at==="h-go"){let[H,X]=R.dataset.ll.split(",").map(Number);ot(H,X,!0)}else if(at==="h-share")i.shareOut({text:N(E,""),url:V(E),both:N(E,V(E))});else if(at==="h-copy")navigator.clipboard?.writeText(N(E,V(E))).then(()=>l("Copied. Paste it anywhere."),()=>{s("#c-share").hidden=!1,l("Select the text and copy it")});else if(at==="h-x")window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(N(E,V(E)))}`,"_blank","noopener");else if(at==="h-pic")t.snap=H=>{if(!H)return l("Could not take the picture");let X=document.createElement("a");X.href=URL.createObjectURL(H),X.download=`atlantis-hunt-${E.lat.toFixed(2)}_${E.lon.toFixed(2)}.jpg`,X.click(),setTimeout(()=>URL.revokeObjectURL(X.href),4e3)},t.stamp++;else if(at==="h-fit")i.fitAt(E.lat,E.lon);else if(at==="h-city")i.standCity(E.lat,E.lon);else if(at==="h-known")i.checkKnown(E.lat,E.lon,20);else return!1;return!0};return m.addEventListener("click",at=>{let R=at.target.closest("[data-act]");R&&dt(R.dataset.act,R)}),{fit:y,claim:ot,scan:Z,click:dt,tick:S,drawBest:et,state:_,CLUES:Fs,get ready(){return _.ready},setGlow:at=>{_.glow=at}}};var Jf={on:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',off:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>'},$l=2.5,ky=.006,Oy=.04,By=.14,Kf=i=>Float32Array.from({length:48},(t,e)=>i(e/47*Math.PI/2)),zy=Kf(Math.sin),Hy=Kf(Math.cos),Qf=i=>{let{data:t,$:e}=i,n=t.audio,s=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n||!s)return null;let r=e("#b-sound"),a={on:!0,ac:null,master:null,buffers:new Map,voice:null,want:new Map,loops:new Map,last:{score:-1,lit:-1,lockAt:0,tickAt:0,stepAt:0},log:[]},l=(N,V={})=>{globalThis.__AUDIOLOG__&&a.log.push({t:performance.now(),kind:N,...V})},o=N=>globalThis.__AUDIO__?.[N]??`${globalThis.__ASSETS__||"./"}audio/${N}`,h=async N=>{let V=o(N);if(V.startsWith("data:")){let Y=atob(V.slice(V.indexOf(",")+1)),ot=new Uint8Array(Y.length);for(let et=0;et<Y.length;et++)ot[et]=Y.charCodeAt(et);return ot.buffer}let O=await fetch(V);if(!O.ok)throw new Error(`${N}: ${O.status}`);return O.arrayBuffer()},u=()=>{if(a.ac)return a.ac;let N=a.ac=new s({latencyHint:"interactive"});a.master=N.createGain();let V=N.createDynamicsCompressor();return V.threshold.value=-9,V.knee.value=6,V.ratio.value=14,V.attack.value=.003,V.release.value=.22,a.master.connect(V).connect(N.destination),N},c=()=>{let N=u();return N.state!=="running"&&N.resume().then(y).catch(()=>{}),N.state==="running"},f=N=>(a.buffers.has(N)||a.buffers.set(N,h(N).then(V=>u().decodeAudioData(V)).catch(()=>null)),a.buffers.get(N)),d=(N=[])=>{for(let V of N){let O=n.narration?.[ya(V)];O&&f(O.file)}},p=(N,{volume:V=1,offset:O=0,at:Y=0,fadeIn:ot=ky,out:et=a.master}={})=>{let pt=a.ac,dt=pt.createBufferSource(),at=pt.createGain();dt.buffer=N;let R=Math.max(pt.currentTime+.005,Y),E=Math.max(.05,N.duration-O),H=Math.min(ot,E/3),X=Math.min(Oy,E/3);return at.gain.setValueAtTime(0,R),at.gain.linearRampToValueAtTime(V,R+H),at.gain.setValueAtTime(V,R+E-X),at.gain.linearRampToValueAtTime(0,R+E),dt.connect(at).connect(et),dt.start(R,O),{node:dt,gain:at,t0:R,dur:E,offset:O}},v=(N,V=By)=>{let O=a.ac,Y=O.currentTime;if(!(Y>=N.t0+N.dur)){N.gain.gain.cancelScheduledValues(Y),N.gain.gain.setValueAtTime(N.gain.gain.value,Y),N.gain.gain.linearRampToValueAtTime(0,Y+V);try{N.node.stop(Y+V+.03)}catch{}}},g=(N,V=0)=>{m();let O=n.narration?.[ya(N)];if(!O)return 0;if(a.on){let Y=a.voice={clip:O,at:V,playing:null,paused:!1};V<O.seconds-.2&&f(O.file).then(ot=>{a.voice===Y&&!Y.paused&&ot&&a.on&&c()&&(Y.playing=p(ot,{offset:V,fadeIn:V?.05:void 0}),l("say",{file:O.file,volume:1,offset:V}))})}return O.seconds},m=()=>{let N=a.voice;a.voice=null,N?.playing&&(v(N.playing),l("hush",{file:N.clip.file}))},x=()=>{let N=a.voice;!N||N.paused||(N.paused=!0,N.playing&&(N.at=Math.min(N.clip.seconds,N.playing.offset+Math.max(0,a.ac.currentTime-N.playing.t0)),v(N.playing,.09),N.playing=null,l("hush",{file:N.clip.file})))},_=()=>{let N=a.voice;if(!N||!N.paused)return;N.paused=!1;let V=Math.max(0,N.at-.25);a.on&&V<N.clip.seconds-.1&&f(N.clip.file).then(O=>{a.voice===N&&!N.paused&&O&&c()&&(N.playing=p(O,{offset:V,fadeIn:.06}),l("say",{file:N.clip.file,volume:1,offset:V}))})},b=()=>{let N=a.voice,V=N?.playing;return{clip:N?.clip.file??null,paused:!!N?.paused,playing:!!V&&a.ac.currentTime<V.t0+V.dur,at:V?V.offset+Math.max(0,a.ac.currentTime-V.t0):N?.at??0}},M=(N,V=.6)=>{let O=n.sfx?.[N];!O||!a.on||(l("sfx",{file:O.file,volume:V}),f(O.file).then(Y=>{Y&&a.on&&c()&&p(Y,{volume:V})}))},C=(N,V,O=.25)=>{if(!n.sfx?.[N])return;let Y=a.want.get(N);V?Y!==O&&(a.want.set(N,O),y()):Y!==void 0&&(a.want.delete(N),y())};function y(){let N=a.ac;for(let[V,O]of a.loops){let Y=a.on?a.want.get(V):void 0;if(Y===void 0){if(a.loops.delete(V),l("loop-off",{file:O.file}),O.gain){let ot=N.currentTime;O.gain.gain.cancelScheduledValues(ot),O.gain.gain.setValueAtTime(O.gain.gain.value,ot),O.gain.gain.linearRampToValueAtTime(0,ot+1.5);for(let et of O.parts)try{et.node.stop(ot+1.6)}catch{}}}else Y!==O.volume&&O.gain&&(O.volume=Y,O.gain.gain.setTargetAtTime(Y,N.currentTime,.4))}if(a.on){for(let[V,O]of a.want)if(!a.loops.has(V)){let Y={name:V,file:n.sfx[V].file,volume:O,gain:null,parts:[],next:0,buffer:null};a.loops.set(V,Y),l("loop-on",{file:Y.file,volume:O,cross:$l}),f(Y.file).then(ot=>{Y.buffer=ot,y()})}}if(a.loops.size&&c())for(let V of a.loops.values()){if(!V.buffer)continue;let O=N.currentTime,Y=V.buffer.duration,ot=Y-$l;for(V.gain||(V.gain=N.createGain(),V.gain.gain.setValueAtTime(0,O),V.gain.gain.linearRampToValueAtTime(V.volume,O+1.2),V.gain.connect(a.master),V.next=O+.02);V.next<O+1.2;){let et=!V.parts.length,pt=N.createBufferSource(),dt=N.createGain(),at=V.next;pt.buffer=V.buffer,dt.gain.setValueAtTime(et?1:0,at),et||dt.gain.setValueCurveAtTime(zy,at,$l),dt.gain.setValueCurveAtTime(Hy,at+ot,$l-.005),pt.connect(dt).connect(V.gain),pt.start(at),V.parts.push({node:pt,end:at+Y}),V.next=at+ot}V.parts=V.parts.filter(et=>et.end>O-1)}}setInterval(()=>{a.loops.size&&y()},400),addEventListener("pointerdown",()=>{a.ac&&a.ac.state!=="running"&&c()},{capture:!0,passive:!0});let T=N=>{C("bed",N,.1),N&&(C("deep",!1),C("city",!1))},k=N=>C("deep",N&&!a.want.has("bed")&&!a.want.has("city"),.32),S=N=>{C("city",N==="city",.3),C("bed",N==="hall",.07),N&&C("deep",!1)},G=N=>{let V=performance.now();V-a.last.stepAt<(N?300:420)||(a.last.stepAt=V,M("step",.16+Math.random()*.05))},Z=N=>{let V=performance.now(),O=N.state===0?0:N.clues.filter(Boolean).length,Y=N.state===2&&N.score>=4;O>a.last.lit&&V-a.last.tickAt>140&&(M("tick",.3),a.last.tickAt=V),Y&&a.last.score<4&&V-a.last.lockAt>1500&&(M("lock",.4),a.last.lockAt=V),a.last.lit=O,a.last.score=Y?N.score:0},st=()=>{r.innerHTML=a.on?Jf.on:Jf.off,r.setAttribute("aria-label",a.on?"Turn sound off":"Turn sound on"),r.setAttribute("aria-pressed",String(a.on))};return r.hidden=!1,r.addEventListener("click",()=>{a.on=!a.on,a.on||m(),y(),st(),i.toast(a.on?"Sound on":"Sound off",1200)}),st(),{say:g,hush:m,pause:x,resume:_,prime:d,voiceState:b,sfx:M,loop:C,bed:T,deep:k,air:S,step:G,read:Z,state:a,get on(){return a.on},get master(){return u(),a.master},get context(){return u()}}};var ql={lat:35.3,lon:-9.9,bearing:180},Qt=(i,t=document)=>t.querySelector(i),ue=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ba=(i,t)=>/^https?:\/\//.test(i??"")?`<a href="${ue(i)}" target="_blank" rel="noopener">${ue(t)}</a>`:ue(t),cs=i=>`${i<0?"\u2212":i>0?"+":""}${Math.abs(Math.round(i)).toLocaleString("en")} m`,Gy=[{m:0,label:"Today"},{m:-50,label:"9600 BCE",note:"Plato's date for Atlantis; sources give 43 to 58 m below today"},{m:-95,label:"12,500 BCE",note:"before the fastest melt; our own estimate"},{m:-125,label:"19,000 BCE",note:"the low point of the last ice age; estimates run from 116 to 134 m below today"}];var Vy={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},Wy=["atlantis","el dorado","troy","titanic","doggerland","lost city of z","amber room","oak island","san jose","endurance","genghis khan","cleopatra","noah","ark of the covenant","valeriana","angkor","machu picchu","ubar","iram","lemuria","ciudad blanca","yonaguni","thonis","upano","roanoke","holy grail","franklin","erebus","alexander","mu","sundaland","beringia","rungholt","paititi","yamashita","cahokia","great zimbabwe","nazca"],tp=(i,t)=>{let{control:e,globe:n}=i,s=n.shared,r=Qt("#stage"),a=Qt("#view"),l=Qt("#pins"),o=Qt("#sheet"),h=Qt("#body"),u=Qt("#eyebrow"),c={kind:null,legend:null,place:null,sheet:null,mode:"content",overlay:null,overlayMix:1,host:null,known:null},f=t.legends,d=null,p=null,v=null,g=null,m=null,x=null,_=null,b=f.find(w=>w.id==="atlantis")??null;b&&(c.kind="atlantis");for(let w of f){let L=Cs(w.name),F=Wy.findIndex(I=>L.includes(I));w.weight=(F>=0?200-F:0)+Math.min(w.places.length,8)*3+(w.status==="found"?4:0)}let M=()=>{if(c.mode==="viewport")r.style.height="100dvh";else{let w=Math.round($t(r.clientWidth*1.16,560,740));r.style.height=`${w}px`,Pf(w)}e.wheelNeedsKey=c.mode!=="viewport",et()};Cf(w=>{c.mode=w,M()}),addEventListener("resize",M),addEventListener("load",M);let C,y=(w,L=2600)=>{let F=Qt("#toast");F.textContent=w,F.classList.add("open"),clearTimeout(C),C=setTimeout(()=>F.classList.remove("open"),L)},T=new Map,k=(w,L)=>{let F=T.get(L);return F||(F=document.createElement("button"),F.className=`pin s-${w.status}`,F.innerHTML="<i></i><span></span>",F.addEventListener("click",I=>{I.stopPropagation(),E(w,L,!0)}),l.appendChild(F),T.set(L,F),F._shown=!1),F},S=(w,L,F,I=0)=>{let $=xn(w*yt,L*yt,S.d),nt=e.pos,Mt=Math.hypot(nt[0],nt[1],nt[2]);if(($[0]*nt[0]+$[1]*nt[1]+$[2]*nt[2])/Mt<(ne-2e3)/Mt)return!1;let Pt=s.uExag.value,Gt=s.uWater.value>.5?s.uSea.value:-1e5,Vt=Math.max(n.heightAt(w*yt,L*yt)??0,Gt)*Pt,Ct=ne+Vt+I,Nt=$[0]*Ct-nt[0],qt=$[1]*Ct-nt[1],Tt=$[2]*Ct-nt[2],ae=e.basis,le=Nt*ae.fwd[0]+qt*ae.fwd[1]+Tt*ae.fwd[2];if(le<=i.camera.near)return!1;let De=Math.tan(e.fovY/2),Cn=De*i.camera.aspect;return F[0]=(((Nt*ae.right[0]+qt*ae.right[1]+Tt*ae.right[2])/le/Cn+e.shift[0])*.5+.5)*r.clientWidth,F[1]=(.5-((Nt*ae.up[0]+qt*ae.up[1]+Tt*ae.up[2])/le/De+e.shift[1])*.5)*r.clientHeight,!0};S.d=[0,0,0];let G=new Set,Z=()=>{let w=r.clientWidth,L=r.clientHeight,F=e.range<15e5,I=[],$=[0,0],nt=c.kind==="atlantis";for(let Tt of f){let ae=Tt===c.legend||nt&&Tt===b;if(!(!ae&&(nt||c.kind&&Tt.kind!==c.kind)))for(let le of ae||F?Tt.places:[Tt.main])le===c.place&&(d?.a.scene&&e.range<d.a.scene.radius_km*9e3||i.evidence.extras.length)||S(le.lon,le.lat,$)&&($[0]<-20||$[1]<-20||$[0]>w+20||$[1]>L+20||I.push({legend:Tt,place:le,x:$[0],y:$[1],w:(ae?1e3:0)+(le===c.place?500:0)+Tt.weight+(le===Tt.main?5:0)+(nt?60-10*(Vy[le.standing]??5):0)}))}I.sort((Tt,ae)=>ae.w-Tt.w);let Mt=w<500?9:w<900?16:30,Et=[],Pt=new Set,Gt=0,Vt=0,Ct=!Qt("#intro").classList.contains("gone"),Nt=96,qt=c.sheet&&w<760?L*.38:Ct?L-(w<760?310:300):L;for(let Tt of I){let le=(Tt.legend===c.legend||nt&&Tt.legend===b)&&Tt.legend.places.length>1?Tt.place.name:Tt.legend.name;le.length>26&&(le=`${le.slice(0,24).trimEnd()}\u2026`);let De=16+le.length*6.6,Cn=18,Pn=[Tt.x-6,Tt.y-Cn/2,Tt.x+De,Tt.y+Cn/2],Mn=!(c.hunt&&!c.legend&&Tt.place!==c.place)&&Gt<Mt&&Tt.y>Nt&&Tt.y<qt-10&&Pn[2]<w-4;if(Mn){for(let Ee of Et)if(Pn[0]<Ee[2]&&Pn[2]>Ee[0]&&Pn[1]<Ee[3]&&Pn[3]>Ee[1]){Mn=!1;break}}if(!Mn&&(Vt>220||Tt.y>qt))continue;Mn?(Et.push(Pn),Gt++):Vt++;let ke=k(Tt.legend,Tt.place);ke._text!==le&&(ke.lastChild.textContent=le,ke._text=le,ke.setAttribute("aria-label",Tt.place===Tt.legend.main?Tt.legend.name:`${Tt.place.name} (${Tt.legend.name})`)),ke.style.transform=`translate3d(${Tt.x.toFixed(1)}px,${Tt.y.toFixed(1)}px,0)`;let hs=`pin ${nt&&Tt.legend===b?`p-${Tt.place.standing}${(Tt.place.tests??[]).length?"":" hollow"}${d?.scenes.has(Tt.place.id)?" scene":""}`:`s-${Tt.legend.status}`}${Mn?"":" dot"}${Tt.place===c.place?" on":""}${Tt.place===p?" pulse":""}`;ke.className!==hs&&(ke.className=hs),ke.style.zIndex=Tt.place===c.place?3:Mn?2:1,ke._shown||(ke.style.display="",ke._shown=!0),Pt.add(ke)}for(let Tt of G)Pt.has(Tt)||(Tt.style.display="none",Tt._shown=!1);G.clear();for(let Tt of Pt)G.add(Tt)},st=Qt("#kinds"),N=()=>{let w=_h.filter(([L])=>f.some(F=>F.kind===L));r.classList.toggle("others",c.kind!=="atlantis"),st.innerHTML=(d?d.drawCase():b?`<button class="chip glass${c.kind==="atlantis"?" on":""}" data-kind="atlantis">Atlantis \xB7 ${b.places.length} places</button>`:"")+(d&&c.kind==="atlantis"?"":`<button class="chip glass${c.kind?"":" on"}" data-kind="">${b?`Other legends ${f.length-1}`:`All ${f.length}`}</button>`)+(c.kind==="atlantis"?"":w.map(([L,F])=>`<button class="chip glass${c.kind===L?" on":""}" data-kind="${L}">${ue(F)}</button>`).join(""))},V=Qt("#menu"),O=Qt("#b-menu"),Y=w=>{V.classList.toggle("open",w),O.setAttribute("aria-expanded",String(w)),O.classList.toggle("on",w)};O.addEventListener("click",w=>{w.stopPropagation(),Y(!V.classList.contains("open"))}),V.addEventListener("click",w=>{let L=w.target.closest("button");if(!L)return;Y(!1),Qt("#intro").classList.add("gone"),e.idle=!1;let F=L.dataset.menu;F==="city"?vt.enterCity("gate"):F==="hall"?vt.enterCity("hall"):F==="hunt"?(d?.leaveScene(),c.legend=c.place=null,c.kind!=="atlantis"&&b&&(c.kind="atlantis",N()),vt.openGlobe()):F==="story"?P.start():F==="work"?g.show("work"):F==="best"?(vt.leaveWalk(),_?.click("h-best")):F==="claims"?(vt.leaveWalk(),E(b,null,!1)):F==="board"?(vt.leaveWalk(),d?.openBoard()):F==="rules"?_?.click("h-rules"):F==="credits"&&Qt("#credit").click()}),st.addEventListener("click",w=>{let L=w.target.closest("[data-kind]");if(L){if(L.dataset.board&&c.kind==="atlantis")return d.openBoard();if(L.dataset.list&&c.kind==="atlantis")return d.openList();c.kind=L.dataset.kind||null,c.kind!=="atlantis"&&d?.a.scene&&(d.leaveScene(),pt()),c.kind==="atlantis"&&c.legend&&c.legend!==b&&pt(),N()}});let ot=w=>{c.sheet=w,o.dataset.kind=w??"",o.classList.toggle("open",!!w),r.classList.toggle("sheet-open",!!w);for(let[L,F]of[["b-layers","layers"],["b-sea","sea"],["b-known","known"]])Qt(`#${L}`).classList.toggle("on",w===F);r.dataset.sheet=w??"",w&&Qt("#intro").classList.add("gone"),w||(h.innerHTML=""),h.scrollTop=0,et()};function et(){let w=r.clientWidth;e.goalShift=c.sheet?w<760?[0,c.sheet==="legend"||c.sheet==="fit"?.42:.56]:[416/w,0]:[0,0]}let pt=()=>{ot(null),c.legend&&!d?.a.scene&&(c.legend=c.place=null)},dt=w=>{let L=$t((w.precision_km??10)*1e3*7,12e3,25e5);return{lon:w.lon*yt,lat:w.lat*yt,range:L,tilt:L<2e5?38*yt:0,heading:0}},at=(w,L,F,I)=>L?.length?`<p style="margin-bottom:4px"><b>${w}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${L.map($=>`<span class="tag t-${F}">${ue($.replaceAll("-"," "))}</span>`).join("")}</div>`:"",R=()=>{let w=c.legend;u.innerHTML=`${ue(bh[w.kind]??w.kind)} <span class="tag s-${w.status}">${ue(Sf[w.status]??w.status)}</span>`;let L=w.places.map((I,$)=>`
      <div class="place${I===c.place?" on":""}" data-i="${$}">
        <button data-act="place" data-i="${$}">
          <span class="name">${ue(I.name)}<small>${ue(kl[I.role]??I.role??"")}</small></span>
          <span class="tag t-${I.standing}">${ue(Ps[I.standing]??I.standing??"")}</span>
        </button>
        <div class="more">
          ${I.claim?`<p>${ue(I.claim)}</p>`:""}
          ${I.against?`<p><b>Against:</b> ${ue(I.against)}</p>`:""}
          ${I.proposed_by?.length?`<p style="font-size:12.5px">Proposed by ${ue(I.proposed_by.slice(0,3).map(nt=>`${nt.who}${nt.year?` (${nt.year})`:""}`).join(", "))}${I.event_date?`. Date it needs: ${ue(I.event_date)}`:""}</p>`:""}
          ${at("Said to fit Plato on",I.fits,"confirmed",w)}${at("Breaks Plato on",I.conflicts,"rejected",w)}
          ${(I.tests??[]).map(nt=>`<p><b>Tested:</b> ${ue(nt.what)}${nt.who?` (${ue(nt.who)}${nt.year?`, ${nt.year}`:""})`:""}. ${ue(nt.result)} ${nt.url?ba(nt.url,"Source"):""}</p>`).join("")}
          <p style="font-size:12.5px;color:var(--faint)">${An(I.lat,I.lon,3)}${I.precision_km?`, give or take ${I.precision_km>=100?Math.round(I.precision_km):I.precision_km} km`:""}${I.underwater?", under water":""}</p>
          ${(I.sources??[]).map(nt=>`<a class="src" href="${ue(nt.url)}" target="_blank" rel="noopener">${ue(nt.title??nt.url)}</a>`).join("")}
          <div class="row">${w===b?`<button class="btn primary" data-act="city" data-i="${$}">Stand Plato's city here, to scale</button>`:""}<button class="btn" data-act="known-here" data-i="${$}">What's already recorded here?</button></div>
        </div>
      </div>`).join(""),F=Number.isFinite(w.sea_level_m)&&w.sea_level_m!==0;h.innerHTML=`
      <h2>${ue(w.name)}</h2>
      ${w.when?`<div class="when">${ue(w.when)}</div>`:""}
      <p>${ue(w.summary)}</p>
      ${w.look_for?`<div class="look"><b>What to look for</b> ${ue(w.look_for)}</div>`:""}
      <div class="row" style="margin-top:0">
        ${F?`<button class="btn primary" data-act="sea-to" data-m="${w.sea_level_m}">Set the sea to ${cs(w.sea_level_m)}</button>`:""}
        <button class="btn" data-act="share">Share this view</button>
        ${ls?'<button class="btn" data-act="post">Post what you see</button>':""}
      </div>
      <h3>${w.places.length===1?"Where":`Where people have looked \xB7 ${w.places.length}`}</h3>
      ${L}
      ${w.origin?.url||w.origin?.text?`<p class="note">Where the story comes from: ${ba(w.origin.url,w.origin.text??"source")}</p>`:""}`},E=(w,L,F)=>{if(w===b&&d)return c.kind!=="atlantis"&&(c.kind="atlantis",N()),Qt("#q").blur(),L?d.openPlace(L,F):d.openList();d?.leaveScene(),c.kind==="atlantis"&&w!==b&&(c.kind=null,N()),c.legend=w,c.place=L??w.main,ot("legend"),R(),F&&e.flyTo(dt(c.place)),Qt("#q").blur();let I=Qt(".place.on",h);I&&L&&I.scrollIntoView({block:"nearest"})},H=()=>{let w=Qt("#seatag"),L=s.uSea.value,F=s.uWater.value<.5,I=c.overlay,$=[];if(F?$.push("Oceans drained: <b>bare sea floor</b>"):Math.abs(L)>=1&&$.push(`Sea level <b>${cs(L)}</b>`),I){let Mt=40075016*Math.cos(e.lat)/2**I.form.layer.minZoom/290*r.clientHeight*1.5;$.push(U(I)?e.range>Mt?`Zoom in to see <b>${ue(I.s.name)}</b>`:`<b>${ue(I.s.name)}</b>`:`<b>${ue(I.s.name)}</b> has no data here`)}d?.a.scene&&c.sheet!=="legend"&&c.sheet!=="fit"&&$.push(`<b>${ue(c.place?.name??"")}</b> \xB7 <button class="linkish" data-act="scene-open">open its card</button> \xB7 <button class="linkish" data-act="scene-off">leave</button>`),x?.sync();let nt=$.join(" \xB7 ");w._html!==nt&&(w.innerHTML=nt,w._html=nt,w.classList.toggle("open",!!nt))},X=(w,L)=>{s.uSea.value=$t(w,-11e3,9e3),L!==void 0&&(s.uWater.value=L?0:1),n.fitCaps(),H()},ct=()=>{u.textContent="Sea level";let w=s.uSea.value,L=s.uWater.value<.5;h.innerHTML=`
      <div class="big" id="sea-big">${cs(w)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${$t(w,-150,70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${Gy.map(F=>`<button class="chip${Math.abs(F.m-w)<.5&&!L?" on":""}" data-act="sea-to" data-m="${F.m}">${ue(F.label)} ${F.m?cs(F.m):""}</button>`).join("")}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${L?"checked":""}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `},q=(w,L,F=180,I=!0)=>{i.city.place({lat:w,lon:L,bearing:F}),i.stamp++,I&&e.flyTo(i.city.view(),4.5),ot(null),H()},lt=()=>{d?.a.scene||(c.legend=c.place=null),ot("city"),u.textContent="Plato's city, rebuilt";let w=t.reconstruction,L=F=>`<div class="known"><span>${ue(F.what)}</span><small>${ue(F.ref??"")}</small></div>`;h.innerHTML=`
      <p>This is the city Plato describes in the Critias, built to his measurements at ${i.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${w?`<h3>From the text \xB7 ${w.from_text.length}</h3>${w.from_text.map(L).join("")}<h3>Our choices, not in the text \xB7 ${w.choices.length}</h3>${w.choices.map(L).join("")}`:""}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`};Qt("#seatag").addEventListener("click",w=>{let L=w.target.closest("[data-act]")?.dataset.act;L==="city-off"&&(i.city.remove(),i.stamp++,H()),L==="city-notes"&&lt(),L==="scene-open"&&c.place&&d.openPlace(c.place,!1),L==="scene-off"&&(d.leaveScene(),c.legend=c.place=null,H())});let gt=[];for(let w of t.sources){if(w.license?.share_ok!==!0)continue;let L=[],F=wh(w);F&&L.push({id:"",name:"Standard",layer:F});for(let I of w.access?.variants??[]){if(/stretch/i.test(`${I.id} ${I.name??""}`))continue;let $=wh(w,I);$&&L.push({id:I.id,name:I.name??I.id,layer:$})}L.length&&gt.push({s:w,forms:L,id:w.id})}let mt=[["lidar","Lidar relief"],["elevation","Terrain"],["seafloor","Sea floor"],["geophysics","Gravity, magnetics, geology"],["imagery","Satellite and air photos"],["radar","Radar"],["historic","Old maps and photos"],["catalog","Where surveys exist"]],U=w=>{let L=w.s.coverage?.bbox;if(!L)return!0;let F=e.lat/yt,I=e.lon/yt;return I>=L[0]&&I<=L[2]&&F>=L[1]&&F<=L[3]},ht=w=>{let L=w.s.coverage?.bbox;return!L||L[2]-L[0]>300&&L[3]-L[1]>120},j=(w,L)=>{let F=w?w.forms.find(I=>I.id===(L??""))??w.forms[0]:null;c.overlay=w?{...w,form:F}:null,n.setLayer("overlay",F?F.layer:null),s.uOverMode.value=F&&F.layer.asIs?1:0,s.uOverMix.value=c.overlayMix,n.maxZ=F?Math.max(17,Math.min(F.layer.maxZoom+1,19)):17},Q=()=>{u.textContent="Readings and view";let w=s.uLens.value,L=Mt=>{let Et=c.overlay?.id===Mt.id,Pt=U(Mt),Gt=Mt.s.resolution_m?` \xB7 ${Mt.s.resolution_m>=1e3?`${Mt.s.resolution_m/1e3} km`:`${Mt.s.resolution_m} m`}`:"";return`<button class="layer${Et?" on":""}" data-act="overlay" data-id="${ue(Mt.id)}"><span class="radio"></span><span class="t"><b>${ue(Mt.s.name)}</b><small>${ue(Mt.s.coverage?.note??"")}${Gt}</small></span></button>`+(Et?`<div class="slide" style="margin:2px 10px 8px 36px">
            ${Mt.forms.length>1?`<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${Mt.forms.map(Vt=>`<button class="chip${c.overlay.form===Vt?" on":""}" data-act="overlay-form" data-form="${ue(Vt.id)}">${ue(Vt.name.replace(/\s*\(.*\)$/,""))}</button>`).join("")}</div>`:""}
            <label for="over-mix">Strength</label><output>${Math.round(c.overlayMix*100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${c.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${Pt?"":'<button class="btn" data-act="overlay-go">Go where it has data</button>'}${Mt.s.docs?`<a class="btn" href="${ue(Mt.s.docs)}" target="_blank" rel="noopener">About this source</a>`:""}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${ue(Mt.s.what??"")} ${Mt.s.license?.name?`Licence: ${ba(Mt.s.license.url,Mt.s.license.name)}.`:""} ${ue(Mt.s.license?.attribution??"")}</p></div>`:"")},F=Mt=>mt.map(([Et,Pt])=>{let Gt=Mt.filter(Vt=>Vt.s.group===Et);return Gt.length?`<h3>${ue(Pt)}</h3>${Gt.map(L).join("")}`:""}).join(""),I=gt.filter(Mt=>U(Mt)&&!ht(Mt)),$=gt.filter(ht),nt=gt.filter(Mt=>!U(Mt)&&!ht(Mt));h.innerHTML=`
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${w===0?"on":""}">Satellite</button><button data-act="lens" data-v="1" class="${w===1?"on":""}">Bare earth</button><button data-act="lens" data-v="2" class="${w===2?"on":""}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${s.uExag.value.toFixed(1)}\xD7</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${s.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${it(i.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${i.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(i.sun.altitude)}\xB0</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${i.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${s.uShadows.value>.5?"checked":""}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${s.uContours.value>.5?"checked":""}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${s.uNightOn.value>.5?"checked":""}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${I.length?F(I):""}
      ${$.length?`<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${F($)}`:""}
      ${nt.length?`<details style="margin-top:18px"${c.overlay&&nt.some(Mt=>Mt.id===c.overlay.id)?" open":""}><summary style="cursor:pointer;font-weight:600">Surveys of other places \xB7 ${nt.length}</summary>${F(nt)}</details>`:""}
      `},it=w=>["N","NE","E","SE","S","SW","W","NW"][Math.round(w/45)%8]+` ${Math.round(w)}\xB0`,bt=/archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i,It=()=>{u.textContent="Already recorded here?";let w=c.known;if(!w){h.innerHTML="<p>Before you call something a discovery, check what is already on record.</p>";return}let L=`<p style="color:var(--dim)">Within <b style="color:var(--ink)">${w.radius} km</b> of ${An(w.lat,w.lon,3)}</p>`;if(w.state==="loading"&&!w.rows.length){h.innerHTML=`${L}<p class="note">Asking Wikidata and OpenStreetMap\u2026</p>`;return}let F=nt=>`<div class="known"><span>${nt.url?ba(nt.url,nt.name):ue(nt.name)} ${nt.type?`<em>\xB7 ${ue(nt.type)}</em>`:""}</span><small>${nt.km<1?`${Math.round(nt.km*1e3)} m`:`${nt.km.toFixed(nt.km<10?1:0)} km`}</small></div>`,I=w.rows.filter(nt=>nt.site),$=w.rows.filter(nt=>!nt.site);h.innerHTML=`${L}
      ${I.length?`<h3>Sites and monuments \xB7 ${I.length}</h3>${I.map(F).join("")}`:"<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>"}
      ${$.length?`<h3>Other named places \xB7 ${$.length}</h3>${$.slice(0,25).map(F).join("")}`:""}
      ${w.state==="loading"?'<p class="note">Still waiting for OpenStreetMap, which can take half a minute\u2026</p>':""}
      ${w.errors.length?`<p class="note">Could not reach: ${ue(w.errors.join(", "))}.</p>`:""}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(w.radius,8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`},jt=async(w,L,F)=>{let I=Math.round($t(F,2,60)),$=c.known={lat:w,lon:L,radius:I,state:"loading",rows:[],errors:[]};ot("known"),It();let nt=(Gt,Vt)=>gr(L*yt,w*yt,Vt*yt,Gt*yt)*ne/1e3,Mt=(async()=>{let Gt=`SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${L} ${w})"^^geo:wktLiteral; wikibase:radius "${I}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`,Vt=()=>fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(Gt)}`,{headers:{Accept:"application/sparql-results+json"},signal:AbortSignal.timeout(25e3)}),Ct=await Vt().catch(()=>null);if(Ct?.ok||(await new Promise(Nt=>setTimeout(Nt,1500)),Ct=await Vt()),!Ct.ok)throw new Error("Wikidata");for(let Nt of(await Ct.json()).results.bindings){let qt=/Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(Nt.coord.value);!qt||/^Q\d+$/.test(Nt.itemLabel.value)||$.rows.push({name:Nt.itemLabel.value,type:Nt.inst?.value??"",url:Nt.item.value.replace("http://","https://"),km:nt(Number(qt[2]),Number(qt[1])),site:bt.test(Nt.inst?.value??"")})}})().catch(()=>$.errors.push("Wikidata")),Et=(async()=>{let Gt=`[out:json][timeout:12];(nwr["historic"](around:${Math.min(I,8)*1e3},${w},${L}););out center tags 600;`,Vt=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:`data=${encodeURIComponent(Gt)}`,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(4e4)});if(!Vt.ok)throw new Error("OpenStreetMap");for(let Ct of(await Vt.json()).elements){let Nt=Ct.lat??Ct.center?.lat,qt=Ct.lon??Ct.center?.lon,Tt=Ct.tags??{};Nt==null||!Tt.name||["memorial","wayside_cross","wayside_shrine","boundary_stone","milestone"].includes(Tt.historic)||$.rows.push({name:Tt.name,type:[Tt.historic,Tt.site_type].filter(Boolean).join(", ").replaceAll("_"," "),url:`https://www.openstreetmap.org/${Ct.type}/${Ct.id}`,km:nt(Nt,qt),site:!0})}})().catch(()=>$.errors.push("OpenStreetMap")),Pt=()=>{if(c.known!==$)return;let Gt=new Map;for(let Vt of $.rows.sort((Ct,Nt)=>Ct.km-Nt.km)){let Ct=Cs(Vt.name);(!Gt.has(Ct)||Vt.site&&!Gt.get(Ct).site)&&Gt.set(Ct,Vt)}if($.rows=[...Gt.values()].sort((Vt,Ct)=>Vt.km-Ct.km),c.sheet==="known"){let Vt=h.scrollTop;It(),h.scrollTop=Vt}};Mt.then(Pt),await Promise.all([Mt,Et]),$.state="done",Pt()},Ut=()=>{let w=e.state(),L={ll:`${w.lat.toFixed(5)},${w.lon.toFixed(5)}`,r:Math.round(w.range)};return Math.abs(w.heading)>.5&&(L.hd=Math.round(w.heading)),w.tilt>.5&&(L.t=Math.round(w.tilt)),Math.abs(s.uSea.value)>=1&&(L.sea=Math.round(s.uSea.value)),s.uWater.value<.5&&(L.dry=1),s.uLens.value&&(L.lens=s.uLens.value),s.uExag.value!==1&&(L.x=s.uExag.value),c.legend&&(L.l=c.legend.id),c.legend&&c.place&&(c.place!==c.legend.main||c.legend===b)&&(L.p=c.place.id),d?.a.scene&&(d.a.mode!=="all"&&d.a.step<0&&(L.m=d.a.mode),d.a.step>=0&&(L.s=d.a.step+1)),i.city.active&&(L.city=`${i.city.site.lat.toFixed(4)},${i.city.site.lon.toFixed(4)},${i.city.params.seaBearing}`),c.overlay&&(L.o=c.overlay.form.id?`${c.overlay.id}.${c.overlay.form.id}`:c.overlay.id),L},At=(w,L)=>{let F=L?{...w}:{...Ut(),...w};if(c.host?.community)return`https://abstracts.co/a/${c.host.community}?${Object.entries(F).map(([$,nt])=>`a_${$}=${encodeURIComponent(nt)}`).join("&")}`;let I=new URL(location.href);return I.search=new URLSearchParams(F).toString(),I.toString()},Dt=async({text:w,url:L,both:F})=>{try{if(c.host){let I=await bi("share",{url:L,text:w});y(I?.shared===!1?"Not shared":"Ready to share");return}if(navigator.share&&matchMedia("(hover: none)").matches){await navigator.share({text:F??`${w}
${L}`});return}await navigator.clipboard.writeText(F??`${w}
${L}`),y("Copied. Paste it anywhere.")}catch(I){if(I?.code==="cancelled"||I?.name==="AbortError")return;prompt("Copy this",F??`${w}
${L}`)}},kt=async()=>{let w=At(),L=c.legend?`${c.legend.name}: ${c.place?.name??""}`.trim():"A view of the Earth";try{if(c.host){let F=await bi("share",{url:w,text:L});y(F?.shared===!1?"Not shared":"Link ready to share");return}await navigator.clipboard.writeText(w),y("Link copied")}catch(F){if(F?.code==="cancelled")return;prompt("Copy this link",w)}},K=async()=>{if(!c.host)return y("Open this on abstracts.co to post");if(!c.host.signedIn){try{await bi("signIn")}catch{y("Sign in to post")}return}let w=await new Promise($=>{i.snap=$});if(!w)return y("Could not take the picture");let L=e.state(),F=An(L.lat,L.lon,3),I=`${c.legend?`${c.legend.name}${c.place?`, ${c.place.name}`:""}`:"Looking at"} ${F}${Math.abs(s.uSea.value)>=1?`, sea at ${cs(s.uSea.value)}`:""}

${At()}`;try{(await bi("post",{text:I,media:[new File([w],"view.jpg",{type:"image/jpeg"})]}))?.post?.url&&y("Posted")}catch($){$?.code!=="cancelled"&&y($?.code==="signed_out"?"Sign in to post":"Could not post")}};o.addEventListener("click",w=>{let L=w.target.closest("[data-act]");if(!L)return;let F=L.dataset.act;if(!d?.click(F,L)&&!_?.click(F,L)){if(F==="close")pt();else if(F==="city-off")i.city.remove(),i.stamp++,pt(),H();else if(F==="place"){let I=c.legend.places[Number(L.dataset.i)];c.place=I,R(),e.flyTo(dt(I))}else if(F==="sea-to")X(Number(L.dataset.m),!1),c.sheet==="sea"?ct():y(`Sea level ${cs(Number(L.dataset.m))}`);else if(F==="share")kt();else if(F==="post")K();else if(F==="lens")s.uLens.value=Number(L.dataset.v),Q();else if(F==="overlay"){let I=gt.find(nt=>nt.id===L.dataset.id);j(c.overlay?.id===I.id?null:I);let $=h.scrollTop;Q(),h.scrollTop=$}else if(F==="overlay-form"){j(gt.find($=>$.id===c.overlay.id),L.dataset.form);let I=h.scrollTop;Q(),h.scrollTop=I}else if(F==="overlay-go"){let I=c.overlay?.s.coverage?.bbox;I&&e.flyTo({lon:(I[0]+I[2])/2*yt,lat:(I[1]+I[3])/2*yt,range:$t(Math.max(I[2]-I[0],I[3]-I[1])*111e3*1.1,2e4,12e6)})}else if(F==="city"){let I=c.legend.places[Number(L.dataset.i)];q(I.lat,I.lon)}else if(F==="city-notes")lt();else if(F==="known-here"){let I=c.legend.places[Number(L.dataset.i)];jt(I.lat,I.lon,Math.max(I.precision_km??10,5))}else if(F==="known-again"){let I=e.state();jt(I.lat,I.lon,e.range/4e3)}}}),o.addEventListener("input",w=>{let L=w.target;if(L.id==="sea-range"){X(Number(L.value)),Qt("#sea-big").innerHTML=`${cs(Number(L.value))}<small>against today</small>`;for(let F of h.querySelectorAll(".presets .chip"))F.classList.toggle("on",Number(F.dataset.m)===Number(L.value)&&s.uWater.value>.5)}else L.id==="sea-off"?X(s.uSea.value,L.checked):L.id==="exag"?(s.uExag.value=Number(L.value),Qt("#exag-out").textContent=`${Number(L.value).toFixed(1)}\xD7`,n.fitCaps()):L.id==="sun-az"?(i.sun.azimuth=Number(L.value),Qt("#az-out").textContent=it(Number(L.value))):L.id==="sun-alt"?(i.sun.altitude=Number(L.value),Qt("#alt-out").textContent=`${L.value}\xB0`):L.id==="opt-shadows"?s.uShadows.value=L.checked?1:0:L.id==="opt-contours"?s.uContours.value=L.checked?1:0:L.id==="opt-night"?s.uNightOn.value=L.checked?1:0:L.id==="over-mix"&&(c.overlayMix=Number(L.value),s.uOverMix.value=c.overlayMix,L.previousElementSibling.textContent=`${Math.round(c.overlayMix*100)}%`)});let Ht=(w,L)=>()=>{if(c.sheet===w)return pt();d?.a.scene||(c.legend=c.place=null),ot(w),L()};Qt("#b-layers").addEventListener("click",Ht("layers",Q)),Qt("#b-sea").addEventListener("click",Ht("sea",ct)),Qt("#b-known").addEventListener("click",()=>{if(c.sheet==="known")return pt();d?.a.scene||(c.legend=c.place=null);let w=e.state();jt(w.lat,w.lon,e.range/4e3)}),Qt("#z-in").addEventListener("click",()=>e.zoomBy(.5)),Qt("#z-out").addEventListener("click",()=>e.zoomBy(2)),Qt("#compass").addEventListener("click",()=>e.flyTo({heading:0,tilt:0},.7)),Qt("#credit").addEventListener("click",()=>{let w=n.layers,L=[xr.terrarium.credit,e.range>8e5?w.globe?.credit:w.base.credit,c.overlay?.form.layer.credit,s.uNightOn.value>.5?w.night.credit:null].filter(Boolean);y(`Showing: ${L.join(" \xB7 ")}`,6e3)}),Qt("#intro").addEventListener("click",w=>{let L=w.target.closest("[data-act]")?.dataset.act;if(L==="start"){let F=b??[...f].sort((I,$)=>$.weight-I.weight)[0];F&&E(F,null,!0)}L==="tour"&&P.start(),L==="enter"&&vt.enterCity("gate"),L==="hunt"&&(Qt("#intro").classList.add("gone"),e.idle=!1),L==="board"&&(Qt("#intro").classList.add("gone"),d?.openBoard()),L==="sea"&&(b&&X(-50,!1),ot("sea"),ct())}),e.onTap=(w,L)=>{Qt("#results").classList.remove("open"),d?.hidePop(),x?.tap(w,L)},addEventListener("keydown",w=>{w.key==="Escape"&&(P.on?P.stop():d?.boardOpen?d.closeBoard():v?.on&&c.sheet?ot(null):d?.hidePop())}),a.addEventListener("pointerdown",()=>{Qt("#intro").classList.add("gone"),Qt("#q").blur(),Qt("#results").classList.remove("open"),Y(!1)});let Rt=Qt("#q"),Bt=Qt("#results"),_t=[],Lt=0,Ot=()=>{let w=Rt.value.trim();if(!w){Bt.classList.remove("open");return}let L=Ef(w);_t=L?[{coords:L}]:Af(f,w,7),!L&&w.length>=3&&_t.push({geocode:w}),Lt=Math.min(Lt,_t.length-1),Bt.innerHTML=_t.map((F,I)=>F.coords?`<button class="res${I===Lt?" sel":""}" data-i="${I}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${An(F.coords.lat,F.coords.lon,4)}</b></span><small>Go to coordinates</small></button>`:F.geocode?`<button class="res${I===Lt?" sel":""}" data-i="${I}"><span class="bullet" style="--c:var(--faint)"></span><span>Find \u201C<b>${ue(F.geocode)}</b>\u201D on the map</span><small>Place search</small></button>`:`<button class="res s-${F.legend.status}${I===Lt?" sel":""}" data-i="${I}"><span class="bullet"></span><span><b>${ue(F.place?F.place.name:F.legend.name)}</b>${F.place?` <em>${ue(F.legend.name)}</em>`:""}</span><small>${ue(F.place?Ps[F.place.standing]??"":bh[F.legend.kind]??"")}</small></button>`).join("")||'<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>',Bt.classList.add("open")},Ft=async w=>{if(w){if(Bt.classList.remove("open"),w.coords){e.flyTo({lon:w.coords.lon*yt,lat:w.coords.lat*yt,range:Math.min(e.range,6e4)}),Rt.blur();return}if(w.geocode){try{let F=(await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(w.geocode)}`).then(Et=>Et.json())).features?.[0];if(!F)return y(`No place called \u201C${w.geocode}\u201D`);let[I,$]=F.geometry.coordinates,nt=F.properties.extent,Mt=nt?Math.max(Math.abs(nt[2]-nt[0])*Math.cos($*yt),Math.abs(nt[1]-nt[3]))*111e3:3e4;e.flyTo({lon:I*yt,lat:$*yt,range:$t(Mt*1.6,3e3,4e6)}),y(`${F.properties.name??w.geocode}${F.properties.country?`, ${F.properties.country}`:""} \xB7 place search by Photon, \xA9 OpenStreetMap`,3800),Rt.blur()}catch{y("Place search is not answering")}return}Rt.value=w.legend.name,E(w.legend,w.place??null,!0)}};Rt.addEventListener("input",()=>{Lt=0,Ot()}),Rt.addEventListener("focus",()=>{Qt("#intro").classList.add("gone"),Ot()}),Rt.addEventListener("keydown",w=>{w.key==="ArrowDown"&&(Lt=Math.min(Lt+1,_t.length-1),Ot(),w.preventDefault()),w.key==="ArrowUp"&&(Lt=Math.max(Lt-1,0),Ot(),w.preventDefault()),w.key==="Escape"&&(Bt.classList.remove("open"),Rt.blur())}),Qt("#search").addEventListener("submit",w=>{w.preventDefault(),Ft(_t[Lt])}),Bt.addEventListener("click",w=>{let L=w.target.closest("[data-i]");L&&Ft(_t[Number(L.dataset.i)])});let z=0,A=Qt("#where"),ut=Qt("#compass svg");i.onFrame=(w=.016)=>{if(g?.sync(),m?.tick(w),P?.tick(),v?.on||(Z(),d?.placeMarks(),_?.tick(),e.idle||Qt("#intro").classList.add("gone"),++z%8))return;let L=e.hover&&!e.pointers.size&&matchMedia("(hover: hover)").matches?e.pick(e.hover.x,e.hover.y):null,F=L?L.lat/yt:e.lat/yt,I=L?L.lon/yt:e.lon/yt,$=L?L.height:n.heightAt(e.lon,e.lat),nt=s.uSea.value,Mt=$==null?"":$<-.6?`<b>${Math.round(-$).toLocaleString("en")} m</b> below today's sea${s.uWater.value>.5&&$<nt?"":", dry"}`:`<b>${Math.round($).toLocaleString("en")} m</b>`;A.innerHTML=`${An(F,I,e.range<5e4?4:2)} \xB7 ${Mt} \xB7 eye ${wd(e.altitude)}`,ut.style.transform=`rotate(${(-e.heading/yt).toFixed(1)}deg)`,r.classList.toggle("turned",Math.abs(e.heading)>.02||e.tilt>.03),r.classList.toggle("dots",!!c.hunt&&!c.legend),H()};let vt={world:i,data:t,st:c,$:Qt,esc:ue,link:ba,metres:cs,toast:y,setSheet:ot,closeSheet:pt,body:h,eyebrow:u,sheet:o,stage:r,pinsEl:l,project:S,setSea:X,standCity:q,checkKnown:jt,viewFor:dt,drawTag:H,drawCity:lt,strataColour:yh,overlays:gt,setOverlay:j,shortName:ga,shareUrl:(w,L)=>At(w,L),shareOut:w=>Dt(w),pulse:w=>{p=w??null},tourOn:()=>!1};vt.sound=Qf(vt),d=Bf(vt),vt.leaveScene=()=>d?.leaveScene(),vt.fitAt=(w,L)=>d?.runFit(void 0,{lat:w,lon:L}),vt.busy=()=>!!(d?.a.scene||d?.boardOpen||P.on||!Qt("#intro").classList.contains("gone")||v?.on||i.city.active&&e.range<9e4||c.sheet==="fit"||c.sheet==="legend"||c.sheet&&r.clientWidth<760),_=d?jf(vt):null,c.hunt=!!_;let P=Hf(vt,d,_);vt.tour=()=>P.start(),vt.tourOn=()=>P.on,x=Gf(vt),vt.cityBar=x,vt.home=ql,Object.defineProperty(vt,"host",{get:()=>c.host??null}),v=Wf(vt),g=qf(vt,{A:d,H:_,walk:v}),m=Zf(vt,{walk:v}),vt.walkOn=()=>v.on,vt.leaveWalk=()=>{v.on&&v.leave(!1)},vt.onWalk=w=>{w&&c.sheet&&ot(null),x.sync(),H()},vt.walkPan=w=>{v.state.pan=w},vt.enterCity=(w="gate",L=!1,F={})=>{if(!L&&P.on)return P.stop();d?.leaveScene(),d?.closeBoard(),c.legend=c.place=null,ot(null),Qt("#intro").classList.add("gone"),e.idle=!1,i.city.active||i.city.place({lat:ql.lat,lon:ql.lon,bearing:ql.bearing}),Math.abs(s.uSea.value)>.6&&X(0,!1);let I=i.city.city.hall;L||B(),v.enter({...w==="hall"?{x:0,y:-(I.RI-6),look:[0,0]}:{x:0,y:-(I.RG+15),look:[0,0]},grab:!L,...F})},vt.openGlobe=(w=!0)=>{ot(null);let L=i.city.site;vt.leaveWalk(),w&&(B(),e.flyTo({lon:(L?.lon??-30)*yt,lat:(L?.lat??25)*yt,range:135e5,tilt:0,heading:0},3.6)),Qt("#b-city").hidden=!d};let B=()=>{r.classList.remove("blink"),r.offsetWidth,r.classList.add("blink")};Qt("#walk").addEventListener("click",w=>{let L=w.target.closest("[data-act]")?.dataset.act;L==="w-up"?v.leave(!0):L==="w-hall"?vt.enterCity("hall"):L==="w-globe"&&vt.openGlobe()}),Qt("#b-city").addEventListener("click",()=>vt.enterCity((i.city.active,"gate"))),N(),X(s.uSea.value),e.idle&&e.jump({range:175e5/Math.min(1,r.clientWidth/r.clientHeight)**.55});let J=w=>{if(!w)return;let L=$=>w[$]==null||w[$]===""||!Number.isFinite(Number(w[$]))?null:Number(w[$]);if(L("x")!=null&&(s.uExag.value=$t(L("x"),1,12)),L("lens")!=null&&(s.uLens.value=$t(Math.round(L("lens")),0,2)),(L("sea")!=null||w.dry)&&X(L("sea")??0,!!w.dry),w.o){let[$,nt]=String(w.o).split("."),Mt=gt.find(Et=>Et.id===$);Mt&&j(Mt,nt)}if(typeof w.city=="string"){let $=w.city.split(",").map(Number);Number.isFinite($[0])&&Number.isFinite($[1])&&q($[0],$[1],Number.isFinite($[2])?$[2]:180,!1)}let F=w.l&&f.find($=>$.id===w.l);F&&E(F,F.places.find($=>$.id===w.p)??null,!1),d?.a.scene&&(["claimed","found"].includes(w.m)&&d.setMode(w.m),L("s")!=null&&d.setStep($t(Math.round(L("s"))-1,-1,d.a.scene.story.length-1)));let I=typeof w.ll=="string"&&w.ll.split(",").map(Number);if(I&&I.length===2&&I.every(Number.isFinite)?(e.jump({lat:$t(I[0],-89,89)*yt,lon:I[1]*yt,range:$t(L("r")??2e6,i.city.active?14:150,e.maxRange),heading:(L("hd")??0)*yt,tilt:$t(L("t")??0,0,i.city.active?88.5:84)*yt}),e.idle=!1):F&&c.place?(e.jump(d?.a.scene?i.evidence.viewOf(null):dt(c.place)),e.idle=!1):i.city.active&&(e.jump(i.city.view()),e.idle=!1),(w.ll||F||i.city.active)&&Qt("#intro").classList.add("gone"),w.board&&d&&(Qt("#intro").classList.add("gone"),d.openBoard()),typeof w.hunt=="string"&&_){let $=w.hunt.split(",").map(Number);if($.length===2&&$.every(Number.isFinite)){Qt("#intro").classList.add("gone"),e.idle=!1;let nt=()=>_.ready?_.claim($t($[0],-85,85),$[1],!w.ll):setTimeout(nt,150);nt()}}w.tour&&d&&P.start(),(w.walk||w.hall)&&d&&vt.enterCity(w.hall?"hall":"gate")};J(Object.fromEntries(new URLSearchParams(location.search))),Rf().then(w=>{c.host=w,w?.launch&&Object.keys(w.launch).length&&J(w.launch),m?.arrive()}),b&&(Qt("#intro h1").textContent="Atlantis",Qt('#intro [data-act="start"]').textContent=_?"Famous claims":"Explore the places"),Qt('#intro [data-act="hunt"]').hidden=!_,_&&(Qt('#intro [data-act="tour"]').textContent="Watch the story");for(let w of document.querySelectorAll("#intro [data-atlantis], #menu [data-atlantis]"))w.hidden=!d;return Qt('#intro [data-act="start"]').hidden=!!_,d&&(Qt("#m-claims").textContent=d.stats.places),_||(Qt("#brand").textContent=b?"Where was Atlantis?":"Lost places"),Qt('#intro [data-act="sea"]').hidden=!!d,Qt('#intro [data-act="enter"]').hidden=!d,Qt("#b-city").hidden=!d,{st:c,selectLegend:E,setSea:X,setOverlay:j,overlays:gt,apply:J,viewParams:Ut,A:d,H:_,tour:P,cityBar:x,walk:v,hall:g,meet:m,enterCity:vt.enterCity,openGlobe:vt.openGlobe,sound:vt.sound}};var ep=document.getElementById("view"),Ui=new URLSearchParams(location.search),$y=globalThis.__ASSETS__||"./",np=()=>{document.getElementById("fail").style.display="grid",document.getElementById("veil").classList.add("gone")},qy=async()=>{if(!ep.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))return np();let i;try{i=bf(ep,{phone:Ui.get("phone")==="1"?!0:Ui.get("phone")==="0"?!1:void 0})}catch(r){return console.error(r),np()}globalThis.world=i;let t=await Tf($y);globalThis.ui=tp(i,t);let e=r=>Ui.get(r)===null?null:Number(Ui.get(r));if(e("az")!==null&&(i.sun.azimuth=e("az")),e("alt")!==null&&(i.sun.altitude=e("alt")),e("exp")!==null&&(i.exposure=e("exp")),e("air")!==null&&(i.air=e("air")),e("shadows")!==null&&(i.globe.shared.uShadows.value=e("shadows")),e("night")!==null&&(i.globe.shared.uNightOn.value=e("night")),Ui.get("still")&&(i.control.idle=!1),globalThis.__STILL__&&(i.control.spin=!1,i.restSoon=!0),Ui.get("clean")){for(let r of["bar","kinds","zoom","readout","intro","seatag","results"])document.getElementById(r).style.display="none";Ui.get("clean")==="2"&&(document.getElementById("pins").style.display="none")}Ui.get("sheet")==="layers"&&document.getElementById("b-layers").click(),Ui.get("sheet")==="sea"&&document.getElementById("b-sea").click();let n=document.getElementById("veil"),s=()=>i.globe.ready?n.classList.add("gone"):setTimeout(s,100);s(),setTimeout(()=>n.classList.add("gone"),12e3)};qy();
