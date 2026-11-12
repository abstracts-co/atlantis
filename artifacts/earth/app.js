var Su=0,Wc=1,Tu=2;var Ts=1,Eu=2,pr=3,ns=0,sn=1,Ye=2,Es=0,mr=1,gr=2,$c=3,qc=4,ha=5;var As=100,Au=101,Ru=102,Cu=103,Pu=104,ua=200,da=201,Iu=202,Lu=203,vr=204,xr=205,Du=206,Nu=207,Fu=208,Uu=209,ku=210,Ou=211,Bu=212,zu=213,Hu=214,co=0,ho=1,uo=2,ar=3,fo=4,po=5,mo=6,go=7,Xc=0,Gu=1,Vu=2,mi=0,Yc=1,Zc=2,jc=3,Jc=4,Kc=5,Qc=6,th=7;var eh=300,Rs=301,yr=302,Go=303,Vo=304,Ni=1e3,wn=1001,vo=1002,Oe=1003,Wu=1004;var fa=1005;var Ae=1006,Wo=1007;var rn=1008;var an=1009,nh=1010,ih=1011,_r=1012,$o=1013,si=1014,An=1015,Je=1016,qo=1017,Xo=1018,Cs=1020,sh=35902,rh=35899,ah=1021,oh=1022,Ze=1023,Fi=1026,ki=1027,gi=1028,Yo=1029,is=1030,Zo=1031;var jo=1033,pa=33776,ma=33777,ga=33778,va=33779,Jo=35840,Ko=35841,Qo=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37488,rl=37489,xa=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,vl=37818,xl=37819,yl=37820,_l=37821,bl=36492,wl=36494,Ml=36495,Sl=36283,Tl=36284,ya=36285,El=36286;var Vr=2300,xo=2301,oo=2302,Uc=2303,kc=2400,Oc=2401,Bc=2402;var $u=3200;var Al=0,qu=1,zn="",Le="srgb",_s="srgb-linear",Wr="linear",Te="srgb";var lo=7680;var Xu=519,Yu=512,Zu=513,ju=514,lh=515,Ju=516,Ku=517,ch=518,hh=519,uh=35044;var ss="300 es",Wn=2e3,or=2001;function Ep(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){let i=$r("canvas");return i.style.display="block",i}var Yh={},lr=null;function qr(...i){let t="THREE."+i.shift();lr?lr("log",t,...i):console.log(t,...i)}function td(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=td(i);let t="THREE."+i.shift();if(lr)lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=td(i);let t="THREE."+i.shift();if(lr)lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gr(...i){let t=i.join(" ");t in Yh||(Yh[t]=!0,oe(...i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nd={[co]:co,[uo]:mo,[fo]:fo,[ar]:po,[ho]:ho,[mo]:uo,[go]:go,[po]:ar},ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,yo=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Rp(i,t){return(i%t+t)%t}function pc(i,t,e){return(1-e)*i+e*t}function id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sd(i,t){if(t.constructor===Float32Array)return i;let e=Rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function rd(i,t){if(t.constructor===Float32Array)return i;let e=Rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ne=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],h=n[s+1],u=n[s+2],c=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(c!==v||o!==f||h!==d||u!==p){let g=o*f+h*d+u*p+c*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-l;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,l=Math.sin(l*x)/_,o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l}else{o=o*m+f*l,h=h*m+d*l,u=u*m+p*l,c=c*m+v*l;let x=1/Math.sqrt(o*o+h*h+u*u+c*c);o*=x,h*=x,u*=x,c*=x}}t[e]=o,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],h=n[s+2],u=n[s+3],c=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=l*p+u*c+o*d-h*f,t[e+1]=o*p+u*f+h*c-l*d,t[e+2]=h*p+u*d+l*f-o*c,t[e+3]=u*p-l*c-o*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(n/2),u=l(s/2),c=l(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"YXZ":this._x=f*u*c+h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"ZXY":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c-f*d*p;break;case"ZYX":this._x=f*u*c-h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c+f*d*p;break;case"YZX":this._x=f*u*c+h*d*p,this._y=h*d*c+f*u*p,this._z=h*u*p-f*d*c,this._w=h*u*c-f*d*p;break;case"XZY":this._x=f*u*c-h*d*p,this._y=h*d*c-f*u*p,this._z=h*u*p+f*d*c,this._w=h*u*c+f*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],u=e[6],c=e[10],f=n+l+c;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>l&&n>c){let d=2*Math.sqrt(1+n-l-c);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){let d=2*Math.sqrt(1+l-n-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-n-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,u=e._w;return this._x=n*u+a*l+s*h-r*o,this._y=s*u+a*o+r*l-n*h,this._z=r*u+a*h+n*o-s*l,this._w=a*u-n*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let h=Math.acos(l),u=Math.sin(h);o=Math.sin(o*h)/u,e=Math.sin(e*h)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ft=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*n),u=2*(l*e-r*s),c=2*(r*n-a*e);return this.x=e+o*h+a*c-l*u,this.y=n+o*u+l*h-r*c,this.z=s+o*c+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mc=new ft,Zh=new $n,fe=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,o,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h)}set(t,e,n,s,r,a,l,o,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],_=s[4],b=s[7],M=s[2],C=s[5],y=s[8];return r[0]=a*v+l*x+o*M,r[3]=a*g+l*_+o*C,r[6]=a*m+l*b+o*y,r[1]=h*v+u*x+c*M,r[4]=h*g+u*_+c*C,r[7]=h*m+u*b+c*y,r[2]=f*v+d*x+p*M,r[5]=f*g+d*_+p*C,r[8]=f*m+d*b+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8];return e*a*u-e*l*h-n*r*u+n*l*o+s*r*h-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=u*a-l*h,f=l*o-u*r,d=h*r-a*o,p=e*c+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=c*v,t[1]=(s*h-u*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*o)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*o-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(t,e)),this}rotate(t){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gc=new fe,jh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){let i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Te&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Te&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:t,whitePoint:n,transfer:Wr,toXYZ:jh,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:jh,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var _e=Cp();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,_o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=$r("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pp=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Ip=0,xc=new ft,cn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=Ae,a=rn,l=Ze,o=an,h=i.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ps(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=eh;cn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,h=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(h+1)/2,b=(d+1)/2,M=(m+1)/2,C=(u+f)/4,y=(c+v)/4,T=(p+g)/4;return _>b&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=C/n,r=y/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=T/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=y/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(c-v)/x,this.z=(f-u)/x,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ve=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g)}set(t,e,n,s,r,a,l,o,h,u,c,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=h,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=-o*c,e[8]=h,e[1]=d+p*h,e[5]=f-v*h,e[9]=-l*o,e[2]=v-f*h,e[6]=p+d*h,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f+v*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*u,e[9]=-l,e[2]=d*l-p,e[6]=v+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,d=o*c,p=h*u,v=h*c;e[0]=f-v*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*u,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,d=a*c,p=l*u,v=l*c;e[0]=o*u,e[4]=p*h-d,e[8]=f*h+v,e[1]=o*c,e[5]=v*h+f,e[9]=d*h-p,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=v-f*c,e[8]=p*c+d,e[1]=c,e[5]=a*u,e[9]=-l*u,e[2]=-h*u,e[6]=d*c+p,e[10]=f-v*c}else if(t.order==="XZY"){let f=a*o,d=a*h,p=l*o,v=l*h;e[0]=o*u,e[4]=-c,e[8]=h*u,e[1]=f*c+v,e[5]=a*u,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Dp)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),$i.crossVectors(n,Fn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),$i.crossVectors(n,Fn)),$i.normalize(),ka.crossVectors(Fn,$i),s[0]=$i.x,s[4]=ka.x,s[8]=Fn.x,s[1]=$i.y,s[5]=ka.y,s[9]=Fn.y,s[2]=$i.z,s[6]=ka.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],b=n[11],M=n[15],C=s[0],y=s[4],T=s[8],U=s[12],S=s[1],V=s[5],K=s[9],it=s[13],D=s[2],W=s[6],B=s[10],j=s[14],lt=s[3],et=s[7],pt=s[11],dt=s[15];return r[0]=a*C+l*S+o*D+h*lt,r[4]=a*y+l*V+o*W+h*et,r[8]=a*T+l*K+o*B+h*pt,r[12]=a*U+l*it+o*j+h*dt,r[1]=u*C+c*S+f*D+d*lt,r[5]=u*y+c*V+f*W+d*et,r[9]=u*T+c*K+f*B+d*pt,r[13]=u*U+c*it+f*j+d*dt,r[2]=p*C+v*S+g*D+m*lt,r[6]=p*y+v*V+g*W+m*et,r[10]=p*T+v*K+g*B+m*pt,r[14]=p*U+v*it+g*j+m*dt,r[3]=x*C+_*S+b*D+M*lt,r[7]=x*y+_*V+b*W+M*et,r[11]=x*T+_*K+b*B+M*pt,r[15]=x*U+_*it+b*j+M*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],u=t[2],c=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=o*d-h*f,_=l*d-h*c,b=l*f-o*c,M=a*d-h*u,C=a*f-o*u,y=a*c-l*u;return e*(v*x-g*_+m*b)-n*(p*x-g*M+m*C)+s*(p*_-v*M+m*y)-r*(p*b-v*C+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],h=t[6],u=t[10];return e*(a*u-l*h)-n*(r*u-l*o)+s*(r*h-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],u=t[8],c=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*l-n*a,_=e*o-s*a,b=e*h-r*a,M=n*o-s*l,C=n*h-r*l,y=s*h-r*o,T=u*v-c*p,U=u*g-f*p,S=u*m-d*p,V=c*g-f*v,K=c*m-d*v,it=f*m-d*g,D=x*it-_*K+b*V+M*S-C*U+y*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return t[0]=(l*it-o*K+h*V)*W,t[1]=(s*K-n*it-r*V)*W,t[2]=(v*y-g*C+m*M)*W,t[3]=(f*C-c*y-d*M)*W,t[4]=(o*S-a*it-h*U)*W,t[5]=(e*it-s*S+r*U)*W,t[6]=(g*b-p*y-m*_)*W,t[7]=(u*y-f*b+d*_)*W,t[8]=(a*K-l*S+h*T)*W,t[9]=(n*S-e*K-r*T)*W,t[10]=(p*C-v*b+m*x)*W,t[11]=(c*b-u*C-d*x)*W,t[12]=(l*U-a*V-o*T)*W,t[13]=(e*V-n*U+s*T)*W,t[14]=(v*_-p*M-g*x)*W,t[15]=(u*M-c*_+f*x)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,h=r*a,u=r*l;return this.set(h*a+n,h*l-s*o,h*o+s*l,0,h*l+s*o,u*l+n,u*o-s*a,0,h*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,u=a+a,c=l+l,f=r*h,d=r*u,p=r*c,v=a*u,g=a*c,m=l*c,x=o*h,_=o*u,b=o*c,M=n.x,C=n.y,y=n.z;return s[0]=(1-(v+m))*M,s[1]=(d+b)*M,s[2]=(p-_)*M,s[3]=0,s[4]=(d-b)*C,s[5]=(1-(f+m))*C,s[6]=(g+x)*C,s[7]=0,s[8]=(p+_)*y,s[9]=(g-x)*y,s[10]=(1-(f+v))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gs.set(s[0],s[1],s[2]).length(),l=Gs.set(s[4],s[5],s[6]).length(),o=Gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let h=1/a,u=1/l,c=1/o;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=c,Qn.elements[9]*=c,Qn.elements[10]*=c,e.setFromRotationMatrix(Qn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Wn,o=!1){let h=this.elements,u=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(l===Wn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===or)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Wn,o=!1){let h=this.elements,u=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(l===Wn)p=-2/(a-r),v=-(a+r)/(a-r);else if(l===or)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=c,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gs=new ft,Qn=new ve,Lp=new ft(0,0,0),Dp=new ft(1,1,1),$i=new ft,ka=new ft,Fn=new ft,Kh=new ve,Qh=new $n,ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Np=0,tu=new ft,Vs=new $n,Ei=new ve,Oa=new ft,Dr=new ft,Fp=new ft,Up=new $n,eu=new ft(1,0,0),nu=new ft(0,1,0),iu=new ft(0,0,1),su={type:"added"},kp={type:"removed"},Ws={type:"childadded",child:null},yc={type:"childremoved",child:null},gn=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new ft,e=new ni,n=new $n,s=new ft(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new fe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Dr,Oa,this.up):Ei.lookAt(Oa,Dr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),h=a(t.textures),u=a(t.images),c=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new ft(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function _c(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=Rp(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_c(a,r,t+1/3),this.g=_c(a,r,t),this.b=_c(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return _e.workingToColorSpace(mn.copy(this),t),Math.round(be(mn.r*255,0,255))*65536+Math.round(be(mn.g*255,0,255))*256+Math.round(be(mn.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(mn.copy(this),e);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,h,u=(l+a)/2;if(l===a)o=0,h=0;else{let c=a-l;switch(h=u<=.5?c/(a+l):c/(2-a-l),a){case n:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-n)/c+2;break;case r:o=(n-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Le){_e.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,s=mn.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Ba);let n=pc(qi.h,Ba.h,e),s=pc(qi.s,Ba.s,e),r=pc(qi.l,Ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new se;se.NAMES=ad;var qn=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new ft,Ai=new ft,bc=new ft,Ri=new ft,$s=new ft,qs=new ft,ru=new ft,wc=new ft,Mc=new ft,Sc=new ft,Tc=new ge,Ec=new ge,Ac=new ge,Ii=class i{constructor(t=new ft,e=new ft,n=new ft){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Ai.subVectors(n,e),bc.subVectors(t,e);let a=ti.dot(ti),l=ti.dot(Ai),o=ti.dot(bc),h=Ai.dot(Ai),u=Ai.dot(bc),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;let f=1/c,d=(h*o-l*u)*f,p=(a*u-l*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ri)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ri.x),o.addScaledVector(a,Ri.y),o.addScaledVector(l,Ri.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return Tc.setScalar(0),Ec.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Ac.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Tc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(Ac,r.z),a}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Ai.subVectors(t,e),ti.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;$s.subVectors(s,n),qs.subVectors(r,n),wc.subVectors(t,n);let o=$s.dot(wc),h=qs.dot(wc);if(o<=0&&h<=0)return e.copy(n);Mc.subVectors(t,s);let u=$s.dot(Mc),c=qs.dot(Mc);if(u>=0&&c<=u)return e.copy(s);let f=o*c-u*h;if(f<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),e.copy(n).addScaledVector($s,a);Sc.subVectors(t,r);let d=$s.dot(Sc),p=qs.dot(Sc);if(p>=0&&d<=p)return e.copy(r);let v=d*h-o*p;if(v<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(n).addScaledVector(qs,l);let g=u*p-d*c;if(g<=0&&c-u>=0&&d-p>=0)return ru.subVectors(r,s),l=(c-u)/(c-u+(d-p)),e.copy(s).addScaledVector(ru,l);let m=1/(g+v+f);return a=v*m,l=f*m,e.copy(n).addScaledVector($s,a).addScaledVector(qs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hi=class{constructor(t=new ft(1/0,1/0,1/0),e=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),Ha.subVectors(this.max,Nr),Xs.subVectors(t.a,Nr),Ys.subVectors(t.b,Nr),Zs.subVectors(t.c,Nr),Xi.subVectors(Ys,Xs),Yi.subVectors(Zs,Ys),gs.subVectors(Xs,Zs);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-gs.z,gs.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,gs.z,0,-gs.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-gs.y,gs.x,0];return!Rc(e,Xs,Ys,Zs,Ha)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,Xs,Ys,Zs,Ha))?!1:(Ga.crossVectors(Xi,Yi),e=[Ga.x,Ga.y,Ga.z],Rc(e,Xs,Ys,Zs,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],ei=new ft,za=new hi,Xs=new ft,Ys=new ft,Zs=new ft,Xi=new ft,Yi=new ft,gs=new ft,Nr=new ft,Ha=new ft,Ga=new ft,vs=new ft;function Rc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let l=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),o=t.dot(vs),h=e.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var Li=Bp();function Bp(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(n[o]=0,n[o|256]=32768,s[o]=24,s[o|256]=24):h<-14?(n[o]=1024>>-h-14,n[o|256]=1024>>-h-14|32768,s[o]=-h-1,s[o|256]=-h-1):h<=15?(n[o]=h+15<<10,n[o|256]=h+15<<10|32768,s[o]=13,s[o|256]=13):h<128?(n[o]=31744,n[o|256]=64512,s[o]=24,s[o|256]=24):(n[o]=31744,n[o|256]=64512,s[o]=13,s[o|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[o]=h|u}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)a[o]=o<<23;a[31]=1199570944,a[32]=2147483648;for(let o=33;o<63;++o)a[o]=2147483648+(o-32<<23);a[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:l}}function zp(i){Math.abs(i)>65504&&oe("DataUtils.toHalfFloat(): Value out of range."),i=be(i,-65504,65504),Li.floatView[0]=i;let t=Li.uint32View[0],e=t>>23&511;return Li.baseTable[e]+((t&8388607)>>Li.shiftTable[e])}function Hp(i){let t=i>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[t]+(i&1023)]+Li.exponentTable[t],Li.floatView[0]}var ji=class{static toHalfFloat(t){return zp(t)}static fromHalfFloat(t){return Hp(t)}},$e=new ft,Va=new ne,Gp=0,Pe=class extends ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?Rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rd(t,this.array)}};var Xr=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vp=new hi,Fr=new ft,Cc=new ft,ui=class{constructor(t=new ft,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);let e=Fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Cc)),this.expandByPoint(Fr.copy(t.center).sub(Cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wp=0,Vn=new ve,Pc=new gn,js=new ft,Un=new hi,Ur=new hi,nn=new ft,Ue=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Yr:Xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Ur.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(Un.min,Ur.min),Un.expandByPoint(nn),nn.addVectors(Un.max,Ur.max),Un.expandByPoint(nn)):(Un.expandByPoint(Ur.min),Un.expandByPoint(Ur.max))}Un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)nn.fromBufferAttribute(l,h),o&&(js.fromBufferAttribute(t,h),nn.add(js)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[],h=new Uint8Array(n.count);for(let U=0;U<n.count;U++)l[U]=new ft,o[U]=new ft;let u=new ft,c=new ft,f=new ft,d=new ne,p=new ne,v=new ne,g=new ft,m=new ft;function x(U,S,V){h[U]=h[S]=h[V]=1,u.fromBufferAttribute(n,U),c.fromBufferAttribute(n,S),f.fromBufferAttribute(n,V),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,V),c.sub(u),f.sub(u),p.sub(d),v.sub(d);let K=1/(p.x*v.y-v.x*p.y);isFinite(K)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(K),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(K),l[U].add(g),l[S].add(g),l[V].add(g),o[U].add(m),o[S].add(m),o[V].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,S=_.length;U<S;++U){let V=_[U],K=V.start,it=V.count;for(let D=K,W=K+it;D<W;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let b=new ft,M=new ft,C=new ft,y=new ft;function T(U){C.fromBufferAttribute(s,U),y.copy(C);let S=l[U];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(y,S);let K=M.dot(o[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,K)}for(let U=0,S=n.count;U<S;++U)h[U]&&T(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new ft,r=new ft,a=new ft,l=new ft,o=new ft,h=new ft,u=new ft,c=new ft;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),l.fromBufferAttribute(n,p),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.add(u),o.add(u),h.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),c.subVectors(s,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,c=l.normalized,f=new h.constructor(o.length*u),d=0,p=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?d=o[v]*l.data.stride+l.offset:d=o[v]*u;for(let m=0;m<u;m++)f[p++]=h[d++]}return new Pe(f,u,c)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],h=t(o,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let o=[],h=r[l];for(let u=0,c=h.length;u<c;u++){let f=h[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let h=n[o];t.data.attributes[o]=h.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let c=0,f=h.length;c<f;c++){let d=h[c];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=Ps()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=au(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=au(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function au(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ps()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var bn=new ft,Zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Rl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):sd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):rd(t,this.data.array)}},Ic=new ft,$p=new ft,qp=new fe,kn=class{constructor(t=new ft(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ic.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qp.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xp=0,Ui=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=mr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=xr,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dr=class extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Js,kr=new ft,Ks=new ft,Qs=new ft,tr=new ne,Or=new ne,od=new ve,Wa=new ft,Br=new ft,$a=new ft,ou=new ne,Lc=new ne,lu=new ne,jr=class extends gn{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mo(e,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Zr(n,3,0,!1)),Js.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Js,this.material=t,this.center=new ne(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;qa(Wa.set(-.5,-.5,0),Qs,a,Ks,s,r),qa(Br.set(.5,-.5,0),Qs,a,Ks,s,r),qa($a.set(.5,.5,0),Qs,a,Ks,s,r),ou.set(0,0),Lc.set(1,0),lu.set(1,1);let l=t.ray.intersectTriangle(Wa,Br,$a,!1,kr);if(l===null&&(qa(Br.set(-.5,.5,0),Qs,a,Ks,s,r),Lc.set(0,1),l=t.ray.intersectTriangle(Wa,$a,Br,!1,kr),l===null))return;let o=t.ray.origin.distanceTo(kr);o<t.near||o>t.far||e.push({distance:o,point:kr.clone(),uv:Ii.getInterpolation(kr,Wa,Br,$a,ou,Lc,lu,new ne),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function qa(i,t,e,n,s,r){tr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Or.x=r*tr.x-s*tr.y,Or.y=s*tr.x+r*tr.y):Or.copy(tr),i.copy(t),i.x+=Or.x,i.y+=Or.y,i.applyMatrix4(od)}var Pi=new ft,Dc=new ft,Xa=new ft,Ya=new ft,Jr=class{constructor(t=new ft,e=new ft(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dc.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(Dc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xa),l=Ya.dot(this.direction),o=-Ya.dot(Xa),h=Ya.lengthSq(),u=Math.abs(1-a*a),c,f,d,p;if(u>0)if(c=a*o-l,f=a*l-o,p=r*u,c>=0)if(f>=-p)if(f<=p){let v=1/u;c*=v,f*=v,d=c*(c+a*f+2*l)+f*(a*c+f+2*o)+h}else f=r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f=-r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;else f<=-p?(c=Math.max(0,-(-a*r+l)),f=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h):f<=p?(c=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+h):(c=Math.max(0,-(a*r+l)),f=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+f*(f+2*o)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+l)),d=-c*c+f*(f+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Dc).addScaledVector(Xa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-f.z)*c,o=(t.max.z-f.z)*c):(l=(t.max.z-f.z)*c,o=(t.min.z-f.z)*c),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,h=l.y,u=l.z,c=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,_=n.z-a.z,b=Math.abs(o),M=Math.abs(h),C=Math.abs(u),y,T,U,S,V,K,it,D,W,B,j,lt;if(b>=M&&b>=C?(U=o,K=c,W=p,lt=m,o>=0?(y=h,T=u,S=f,V=d,it=v,D=g,B=x,j=_):(y=u,T=h,S=d,V=f,it=g,D=v,B=_,j=x)):M>=C?(U=h,K=f,W=v,lt=x,h>=0?(y=u,T=o,S=d,V=c,it=g,D=p,B=_,j=m):(y=o,T=u,S=c,V=d,it=p,D=g,B=m,j=_)):(U=u,K=d,W=g,lt=_,u>=0?(y=o,T=h,S=c,V=f,it=p,D=v,B=m,j=x):(y=h,T=o,S=f,V=c,it=v,D=p,B=x,j=m)),U===0)return null;let et=y/U,pt=T/U,dt=1/U,at=S-et*K,k=V-pt*K,E=it-et*W,O=D-pt*W,G=B-et*lt,rt=j-pt*lt,X=G*O-rt*E,ot=at*rt-k*G,vt=E*k-O*at;if(s){if(X<0||ot<0||vt<0)return null}else if((X<0||ot<0||vt<0)&&(X>0||ot>0||vt>0))return null;let mt=X+ot+vt;if(mt===0)return null;let F=dt*(X*K+ot*W+vt*lt);return(mt>0?F<0:F>0)?null:this.at(F/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cu=new ve,xs=new Jr,Za=new ui,hu=new ft,ja=new ft,Ja=new ft,Ka=new ft,Nc=new ft,Qa=new ft,uu=new ft,to=new ft,ce=class extends gn{constructor(t=new Ue,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Qa.set(0,0,0);for(let o=0,h=r.length;o<h;o++){let u=l[o],c=r[o];u!==0&&(Nc.fromBufferAttribute(c,t),a?Qa.addScaledVector(Nc,u):Qa.addScaledVector(Nc.sub(e),u))}e.add(Qa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(Za.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Za,hu)===null||xs.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),xs.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,M=_;b<M;b+=3){let C=l.getX(b),y=l.getX(b+1),T=l.getX(b+2);s=eo(this,m,t,n,h,u,c,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=l.getX(g),_=l.getX(g+1),b=l.getX(g+2);s=eo(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=a[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=x,M=_;b<M;b+=3){let C=b,y=b+1,T=b+2;s=eo(this,m,t,n,h,u,c,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let x=g,_=g+1,b=g+2;s=eo(this,a,t,n,h,u,c,x,_,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Yp(i,t,e,n,s,r,a,l){let o;if(t.side===sn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===ns,l),o===null)return null;to.copy(l),to.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(to);return h<e.near||h>e.far?null:{distance:h,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,a,l,o,h){i.getVertexPosition(l,ja),i.getVertexPosition(o,Ja),i.getVertexPosition(h,Ka);let u=Yp(i,t,e,n,ja,Ja,Ka,uu);if(u){let c=new ft;Ii.getBarycoord(uu,ja,Ja,Ka,c),s&&(u.uv=Ii.getInterpolatedAttribute(s,l,o,h,c,new ne)),r&&(u.uv1=Ii.getInterpolatedAttribute(r,l,o,h,c,new ne)),a&&(u.normal=Ii.getInterpolatedAttribute(a,l,o,h,c,new ft),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c:h,normal:new ft,materialIndex:0};Ii.getNormal(ja,Ja,Ka,f.normal),u.face=f,u.barycoord=c}return u}var Tn=class extends cn{constructor(t=null,e=1,n=1,s,r,a,l,o,h=Oe,u=Oe,c,f){super(null,a,l,o,h,u,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},er=new ve,du=new ve,no=[],fu=new hi,Zp=new ve,zr=new ce,Hr=new ui,Qr=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),fu.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Hr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),du.multiplyMatrices(n,er),zr.matrixWorld=du,zr.raycast(t,no);for(let a=0,l=no.length;a<l;a++){let o=no[a];o.instanceId=r,o.object=this,e.push(o)}no.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tn(new Float32Array(s*this.count),s,this.count,gi,An));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new ui,jp=new ne(.5,.5),io=new ft,di=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],h=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],_=r[13],b=r[14],M=r[15];if(s[0].setComponents(h-a,d-u,m-p,M-x).normalize(),s[1].setComponents(h+a,d+u,m+p,M+x).normalize(),s[2].setComponents(h+l,d+c,m+v,M+_).normalize(),s[3].setComponents(h-l,d-c,m-v,M-_).normalize(),n)s[4].setComponents(o,f,g,b).normalize(),s[5].setComponents(h-o,d-f,m-g,M-b).normalize();else if(s[4].setComponents(h-o,d-f,m-g,M-b).normalize(),e===Wn)s[5].setComponents(h+o,d+f,m+g,M+b).normalize();else if(e===or)s[5].setComponents(o,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=jp.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pu=new ve,So=class i{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];pu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new di),n[s].setFromProjectionMatrix(pu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new di),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ta=class extends cn{constructor(t=[],e=Rs,n,s,r,a,l,o,h,u){super(t,e,n,s,r,a,l,o,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fi=class extends cn{constructor(t,e,n,s,r,a,l,o,h){super(t,e,n,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends cn{constructor(t,e,n=si,s,r,a,l=Oe,o=Oe,h,u=Fi,c=1){if(u!==Fi&&u!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:c};super(f,s,r,a,l,o,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends ii{constructor(t,e=si,n=Rs,s,r,a=Oe,l=Oe,o,h=Fi){let u={width:t,height:t,depth:1},c=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,h),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},na=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ji=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],h=[],u=[],c=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(c,2));function p(v,g,m,x,_,b,M,C,y,T,U){let S=b/y,V=M/T,K=b/2,it=M/2,D=C/2,W=y+1,B=T+1,j=0,lt=0,et=new ft;for(let pt=0;pt<B;pt++){let dt=pt*V-it;for(let at=0;at<W;at++){let k=at*S-K;et[v]=k*x,et[g]=dt*_,et[m]=D,h.push(et.x,et.y,et.z),et[v]=0,et[g]=0,et[m]=C>0?1:-1,u.push(et.x,et.y,et.z),c.push(at/y),c.push(1-pt/T),j+=1}}for(let pt=0;pt<T;pt++)for(let dt=0;dt<y;dt++){let at=f+dt+W*pt,k=f+dt+W*(pt+1),E=f+(dt+1)+W*(pt+1),O=f+(dt+1)+W*pt;o.push(at,k,O),o.push(k,E,O),lt+=6}l.addGroup(d,lt,U),d+=lt,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ia=class i extends Ue{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],o=[],h=[],u=e/2,c=Math.PI/2*t,f=e,d=2*c+f,p=n*2+r,v=s+1,g=new ft,m=new ft;for(let x=0;x<=p;x++){let _=0,b=0,M=0,C=0;if(x<=n){let U=x/n,S=U*Math.PI/2;b=-u-t*Math.cos(S),M=t*Math.sin(S),C=-t*Math.cos(S),_=U*c}else if(x<=n+r){let U=(x-n)/r;b=-u+U*e,M=t,C=0,_=c+U*f}else{let U=(x-n-r)/n,S=U*Math.PI/2;b=u+t*Math.sin(S),M=t*Math.cos(S),C=t*Math.sin(S),_=c+f+U*c}let y=Math.max(0,Math.min(1,_/d)),T=0;x===0?T=.5/s:x===p&&(T=-.5/s);for(let U=0;U<=s;U++){let S=U/s,V=S*Math.PI*2,K=Math.sin(V),it=Math.cos(V);m.x=-M*it,m.y=b,m.z=M*K,l.push(m.x,m.y,m.z),g.set(-M*it,C,M*K),g.normalize(),o.push(g.x,g.y,g.z),h.push(S+T,y)}if(x>0){let U=(x-1)*v;for(let S=0;S<s;S++){let V=U+S,K=U+S+1,it=x*v+S,D=x*v+S+1;a.push(V,K,it),a.push(K,D,it)}}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ws=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],h=new ft,u=new ne;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){let d=n+c/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pi=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],c=[],f=[],d=[],p=0,v=[],g=n/2,m=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function x(){let b=new ft,M=new ft,C=0,y=(e-t)/n;for(let T=0;T<=r;T++){let U=[],S=T/r,V=S*(e-t)+t;for(let K=0;K<=s;K++){let it=K/s,D=it*o+l,W=Math.sin(D),B=Math.cos(D);M.x=V*W,M.y=-S*n+g,M.z=V*B,c.push(M.x,M.y,M.z),b.set(W,y,B).normalize(),f.push(b.x,b.y,b.z),d.push(it,1-S),U.push(p++)}v.push(U)}for(let T=0;T<s;T++)for(let U=0;U<r;U++){let S=v[U][T],V=v[U+1][T],K=v[U+1][T+1],it=v[U][T+1];(t>0||U!==0)&&(u.push(S,V,it),C+=3),(e>0||U!==r-1)&&(u.push(V,K,it),C+=3)}h.addGroup(m,C,0),m+=C}function _(b){let M=p,C=new ne,y=new ft,T=0,U=b===!0?t:e,S=b===!0?1:-1;for(let K=1;K<=s;K++)c.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;let V=p;for(let K=0;K<=s;K++){let D=K/s*o+l,W=Math.cos(D),B=Math.sin(D);y.x=U*B,y.y=g*S,y.z=U*W,c.push(y.x,y.y,y.z),f.push(0,S,0),C.x=W*.5+.5,C.y=B*.5*S+.5,d.push(C.x,C.y),p++}for(let K=0;K<s;K++){let it=M+K,D=V+K;b===!0?u.push(D,D+1,it):u.push(D+1,D,it),T+=3}h.addGroup(m,T,b===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ms=class i extends pi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},To=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),h(n),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let _=new ft,b=new ft,M=new ft;for(let C=0;C<e.length;C+=3)d(e[C+0],_),d(e[C+1],b),d(e[C+2],M),o(_,b,M,x)}function o(x,_,b,M){let C=M+1,y=[];for(let T=0;T<=C;T++){y[T]=[];let U=x.clone().lerp(b,T/C),S=_.clone().lerp(b,T/C),V=C-T;for(let K=0;K<=V;K++)K===0&&T===C?y[T][K]=U:y[T][K]=U.clone().lerp(S,K/V)}for(let T=0;T<C;T++)for(let U=0;U<2*(C-T)-1;U++){let S=Math.floor(U/2);U%2===0?(f(y[T][S+1]),f(y[T+1][S]),f(y[T][S])):(f(y[T][S+1]),f(y[T+1][S+1]),f(y[T+1][S]))}}function h(x){let _=new ft;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(x),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let x=new ft;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let b=g(x)/2/Math.PI+.5,M=m(x)/Math.PI+.5;a.push(b,1-M)}p(),c()}function c(){for(let x=0;x<a.length;x+=6){let _=a[x+0],b=a[x+2],M=a[x+4],C=Math.max(_,b,M),y=Math.min(_,b,M);C>.9&&y<.1&&(_<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,_){let b=x*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function p(){let x=new ft,_=new ft,b=new ft,M=new ft,C=new ne,y=new ne,T=new ne;for(let U=0,S=0;U<r.length;U+=9,S+=6){x.set(r[U+0],r[U+1],r[U+2]),_.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),C.set(a[S+0],a[S+1]),y.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),M.copy(x).add(_).add(b).divideScalar(3);let V=g(M);v(C,S+0,x,V),v(y,S+2,_,V),v(T,S+4,b,V)}}function v(x,_,b,M){M<0&&x.x===1&&(a[_]=x.x-1),b.x===0&&b.z===0&&(a[_]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var sa=class i extends To{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},On=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),h=l+1,u=o+1,c=t/l,f=e/o,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let x=m*f-a;for(let _=0;_<h;_++){let b=_*c-r;p.push(b,-x,0),v.push(0,0,1),g.push(_/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){let _=x+h*m,b=x+h*(m+1),M=x+1+h*(m+1),C=x+1+h*m;d.push(_,b,C),d.push(b,M,C)}this.setIndex(d),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xn=class i extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let l=[],o=[],h=[],u=[],c=t,f=(e-t)/s,d=new ft,p=new ne;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=c*Math.cos(m),d.y=c*Math.sin(m),o.push(d.x,d.y,d.z),h.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}c+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,b=x+n+1,M=x+n+2,C=x+1;l.push(_,b,C),l.push(b,M,C)}}this.setIndex(l),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var En=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),h=0,u=[],c=new ft,f=new ft,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,b=a+_*l,M=t*Math.cos(b),C=Math.sqrt(t*t-M*M),y=0;m===0&&a===0?y=.5/e:m===n&&o===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let U=T/e,S=s+U*r;c.x=-C*Math.cos(S),c.y=M,c.z=C*Math.sin(S),p.push(c.x,c.y,c.z),f.copy(c).normalize(),v.push(f.x,f.y,f.z),g.push(U+y,1-_),x.push(h++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=u[m][x+1],b=u[m][x],M=u[m+1][x],C=u[m+1][x+1];(m!==0||a>0)&&d.push(_,b,C),(m!==n-1||o<Math.PI)&&d.push(b,M,C)}this.setIndex(d),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ra=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let o=[],h=[],u=[],c=[],f=new ft,d=new ft,p=new ft;for(let v=0;v<=n;v++){let g=a+v/n*l;for(let m=0;m<=s;m++){let x=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),h.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),c.push(m/s),c.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,x=(s+1)*(v-1)+g-1,_=(s+1)*(v-1)+g,b=(s+1)*v+g;o.push(m,x,b),o.push(x,_,b)}this.setIndex(o),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mu(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mu(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var ld={clone:Is,merge:vn},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Eo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ki=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ao=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function so(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,l=2*e-n;break;case Bc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,o=2*n-e;break;case Bc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*v+.5*p,b=d*g-d*v;for(let M=0;M!==l;++M)r[M]=m*a[u+M]+x*a[h+M]+_*a[o+M]+b*a[c+M];return r}},Po=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=(n-e)/(s-e),c=1-u;for(let f=0;f!==l;++f)r[f]=a[h+f]*c+a[o+f]*u;return r}},Io=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lo=class extends Qi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,h=o-l,u=this.inTangents,c=this.outTangents;if(!u||!c){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==l;++g)r[g]=a[h+g]*v+a[o+g]*p;return r}let f=l*2,d=t-1;for(let p=0;p!==l;++p){let v=a[h+p],g=a[o+p],m=d*f+p*2,x=c[m],_=c[m+1],b=t*f+p*2,M=u[b],C=u[b+1],y=em(n,e,x,M,s);r[p]=cd(y,v,_,C,g)}return r}};function cd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function tm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function em(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=cd(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=tm(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),so(t.settings)&&(n.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Lo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break;case Uc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;so(this.settings)&&(gu(this.settings.inTangents,t),gu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;so(this.settings)&&(vu(this.settings.inTangents,t),vu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){le("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){le("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&Ap(s))for(let l=0,o=s.length;l!==o;++l){let h=s[l];if(isNaN(h)){le("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oo,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(s)o=!0;else{let c=l*n,f=c-n,d=c+n;for(let p=0;p!==n;++p){let v=e[c+p];if(v!==e[f+p]||v!==e[d+p]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let c=l*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[c+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,h=0;h!==n;++h)e[o+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,so(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function vu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=xo;var ts=class extends Bn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Vr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="color";var No=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="number";var Fo=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),h=t*l;for(let u=h+l;h!==u;h+=4)$n.slerpFlat(r,0,a,h-l,a,h,o);return r}},aa=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Bn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Vr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};Uo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){let d=h[c],p=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new ko,Oo=class{constructor(t){this.manager=t!==void 0?t:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bo=class extends gn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Fc=new ve,xu=new ft,yu=new ft,zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ro=new ft,ao=new $n,li=new ft,oa=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,ao,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ro,ao,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new ft,_u=new ne,bu=new ne,qe=class extends oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,bu),e.subVectors(bu,_u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/h,s*=a.width/o,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ss=class extends oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zc=class extends zo{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends Bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ir=-90,sr=1,fr=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new qe(ir,sr,t,e);r.layers=this.layers,this.add(r);let a=new qe(ir,sr,t,e);a.layers=this.layers,this.add(a);let l=new qe(ir,sr,t,e);l.layers=this.layers,this.add(l);let o=new qe(ir,sr,t,e);o.layers=this.layers,this.add(o);let h=new qe(ir,sr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let h of e)this.remove(h);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var fh="\\[\\]\\.:\\/",nm=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",im="[^"+fh.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",ph),rm=/(WCOD+)?/.source.replace("WCOD",im),am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),lm=new RegExp("^"+sm+rm+am+om+"$"),cm=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(t){let e=lm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;le("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Hc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p1=new Float32Array(1);var wu=new ve,ca=class{constructor(t,e,n=0,s=1/0){this.ray=new Jr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return Gc(t,this,n,e),n.sort(Mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gc(t[s],this,n,e);return n.sort(Mu),n}};function Mu(i,t){return i.distance-t.distance}function Gc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)Gc(r[a],t,e,!0)}}var Vc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function mh(i,t,e,n){let s=hm(n);switch(e){case ah:return i*t;case gi:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case Zo:return i*t*2/s.components*s.byteLength;case oh:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case jo:return i*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:case tl:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case Qo:return Math.max(i,8)*Math.max(t,8)/2;case el:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case il:case xa:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case wl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ya:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hm(i){switch(i){case an:case nh:return{byteLength:1,components:1};case _r:case ih:case Je:return{byteLength:2,components:1};case qo:case Xo:return{byteLength:2,components:4};case si:case $o:case An:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ld(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dm(i){let t=new WeakMap;function e(l,o){let h=l.array,u=l.usage,c=h.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,h,u),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function n(l,o,h){let u=o.array,c=o.updateRanges;if(i.bindBuffer(h,l),c.length===0)i.bufferSubData(h,0,u);else{c.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<c.length;d++){let p=c[f],v=c[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,c[f]=v)}c.length=f+1;for(let d=0,p=c.length;d<p;d++){let v=c[d];i.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
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
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#endif`,h0=`uniform sampler2D dfgLUT;
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
}`,u0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
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
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform float backgroundBlurriness;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,_g=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,Bg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:fm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:ym,aomap_pars_fragment:_m,batching_pars_vertex:bm,batching_vertex:wm,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:Tm,iridescence_fragment:Em,bumpmap_pars_fragment:Am,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Im,color_fragment:Lm,color_pars_fragment:Dm,color_pars_vertex:Nm,color_vertex:Fm,common:Um,defaultnormal_vertex:km,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:zm,emissivemap_pars_fragment:Hm,colorspace_fragment:Gm,colorspace_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:$m,envmap_pars_fragment:qm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:s0,envmap_vertex:Ym,fog_vertex:Zm,fog_pars_vertex:jm,fog_fragment:Jm,fog_pars_fragment:Km,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:t0,lights_lambert_fragment:e0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:o0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,lightprobes_pars_fragment:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:y0,map_pars_fragment:_0,map_particle_fragment:b0,map_particle_pars_fragment:w0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:T0,morphcolor_vertex:E0,morphnormal_vertex:A0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:P0,normal_fragment_maps:I0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:N0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:H0,premultiplied_alpha_fragment:G0,project_vertex:V0,dithering_fragment:W0,dithering_pars_fragment:$0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:Z0,shadowmap_vertex:j0,shadowmask_pars_fragment:J0,skinbase_vertex:K0,skinning_pars_vertex:Q0,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:vg,depth_vert:xg,depth_frag:yg,distance_vert:_g,distance_frag:bg,equirect_vert:wg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:Tg,meshbasic_vert:Eg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Ig,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Ug,meshphysical_frag:kg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:zg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Wg,sprite_frag:$g},Zt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},xi={basic:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:vn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:vn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:vn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:vn([Zt.points,Zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:vn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:vn([Zt.common,Zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:vn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:vn([Zt.sprite,Zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:vn([Zt.common,Zt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:vn([Zt.lights,Zt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};xi.physical={uniforms:vn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Cl={r:0,b:0,g:0},qg=new ve,Dd=new fe;Dd.set(-1,0,0,0,1,0,0,0,1);function Xg(i,t,e,n,s,r){let a=new se(0),l=s===!0?0:1,o,h,u=null,c=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let b=x.backgroundBlurriness>0;_=t.get(_,b)}return _}function p(x){let _=!1,b=d(x);b===null?g(a,l):b&&b.isColor&&(g(b,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){let b=d(_);b&&b.isCubeTexture?(h===void 0&&(h=new ce(new Ji(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Is(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Dd),h.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,(u!==b||c!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(o===void 0&&(o=new ce(new On(2,2),new Xe({name:"BackgroundMaterial",uniforms:Is(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=b,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,b.matrixAutoUpdate===!0&&b.updateMatrix(),o.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||c!==b.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=b,c=b.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,_){x.getRGB(Cl,dh(i)),e.buffers.color.setClear(Cl.r,Cl.g,Cl.b,_,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:v,dispose:m}}function Yg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(V,K,it,D,W){let B=!1,j=c(V,D,it,K);r!==j&&(r=j,h(r.object)),B=d(V,D,it,W),B&&p(V,D,it,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(V,K,it,D),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function o(){return i.createVertexArray()}function h(V){return i.bindVertexArray(V)}function u(V){return i.deleteVertexArray(V)}function c(V,K,it,D){let W=D.wireframe===!0,B=n[K.id];B===void 0&&(B={},n[K.id]=B);let j=V.isInstancedMesh===!0?V.id:0,lt=B[j];lt===void 0&&(lt={},B[j]=lt);let et=lt[it.id];et===void 0&&(et={},lt[it.id]=et);let pt=et[W];return pt===void 0&&(pt=f(o()),et[W]=pt),pt}function f(V){let K=[],it=[],D=[];for(let W=0;W<e;W++)K[W]=0,it[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:it,attributeDivisors:D,object:V,attributes:{},index:null}}function d(V,K,it,D){let W=r.attributes,B=K.attributes,j=0,lt=it.getAttributes();for(let et in lt)if(lt[et].location>=0){let dt=W[et],at=B[et];if(at===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(at=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(at=V.instanceColor)),dt===void 0||dt.attribute!==at||at&&dt.data!==at.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function p(V,K,it,D){let W={},B=K.attributes,j=0,lt=it.getAttributes();for(let et in lt)if(lt[et].location>=0){let dt=B[et];dt===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(dt=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(dt=V.instanceColor));let at={};at.attribute=dt,dt&&dt.data&&(at.data=dt.data),W[et]=at,j++}r.attributes=W,r.attributesNum=j,r.index=D}function v(){let V=r.newAttributes;for(let K=0,it=V.length;K<it;K++)V[K]=0}function g(V){m(V,0)}function m(V,K){let it=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;it[V]=1,D[V]===0&&(i.enableVertexAttribArray(V),D[V]=1),W[V]!==K&&(i.vertexAttribDivisor(V,K),W[V]=K)}function x(){let V=r.newAttributes,K=r.enabledAttributes;for(let it=0,D=K.length;it<D;it++)K[it]!==V[it]&&(i.disableVertexAttribArray(it),K[it]=0)}function _(V,K,it,D,W,B,j){j===!0?i.vertexAttribIPointer(V,K,it,W,B):i.vertexAttribPointer(V,K,it,D,W,B)}function b(V,K,it,D){v();let W=D.attributes,B=it.getAttributes(),j=K.defaultAttributeValues;for(let lt in B){let et=B[lt];if(et.location>=0){let pt=W[lt];if(pt===void 0&&(lt==="instanceMatrix"&&V.instanceMatrix&&(pt=V.instanceMatrix),lt==="instanceColor"&&V.instanceColor&&(pt=V.instanceColor)),pt!==void 0){let dt=pt.normalized,at=pt.itemSize,k=t.get(pt);if(k===void 0)continue;let E=k.buffer,O=k.type,G=k.bytesPerElement,rt=O===i.INT||O===i.UNSIGNED_INT||pt.gpuType===$o;if(pt.isInterleavedBufferAttribute){let X=pt.data,ot=X.isInterleavedBuffer===!0?X.stride:X.itemSize,vt=pt.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let mt=0;mt<et.locationSize;mt++)m(et.location+mt,X.meshPerAttribute);V.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let mt=0;mt<et.locationSize;mt++)g(et.location+mt);i.bindBuffer(i.ARRAY_BUFFER,E);for(let mt=0;mt<et.locationSize;mt++)_(et.location+mt,at/et.locationSize,O,dt,ot*G,(vt+at/et.locationSize*mt)*G,rt)}else{if(pt.isInstancedBufferAttribute){for(let X=0;X<et.locationSize;X++)m(et.location+X,pt.meshPerAttribute);V.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let X=0;X<et.locationSize;X++)g(et.location+X);i.bindBuffer(i.ARRAY_BUFFER,E);for(let X=0;X<et.locationSize;X++)_(et.location+X,at/et.locationSize,O,dt,at*G,at/et.locationSize*X*G,rt)}}else if(j!==void 0){let dt=j[lt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(et.location,dt);break;case 3:i.vertexAttrib3fv(et.location,dt);break;case 4:i.vertexAttrib4fv(et.location,dt);break;default:i.vertexAttrib1fv(et.location,dt)}}}}x()}function M(){U();for(let V in n){let K=n[V];for(let it in K){let D=K[it];for(let W in D){let B=D[W];for(let j in B)u(B[j].object),delete B[j];delete D[W]}}delete n[V]}}function C(V){if(n[V.id]===void 0)return;let K=n[V.id];for(let it in K){let D=K[it];for(let W in D){let B=D[W];for(let j in B)u(B[j].object),delete B[j];delete D[W]}}delete n[V.id]}function y(V){for(let K in n){let it=n[K];for(let D in it){let W=it[D];if(W[V.id]===void 0)continue;let B=W[V.id];for(let j in B)u(B[j].object),delete B[j];delete W[V.id]}}}function T(V){for(let K in n){let it=n[K],D=V.isInstancedMesh===!0?V.id:0,W=it[D];if(W!==void 0){for(let B in W){let j=W[B];for(let lt in j)u(j[lt].object),delete j[lt];delete W[B]}delete it[D],Object.keys(it).length===0&&delete n[K]}}}function U(){S(),a=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:U,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Zg(i,t,e){let n;function s(o){n=o}function r(o,h){i.drawArrays(n,o,h),e.update(h,n,1)}function a(o,h,u){u!==0&&(i.drawArraysInstanced(n,o,h,u),e.update(h,n,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,u);let f=0;for(let d=0;d<u;d++)f+=h[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function jg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Ze&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(y){let T=y===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==an&&y!==An&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=o(h);u!==h&&(oe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&c===!1;e.reversedDepthBuffer===!0&&c===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&c===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,maxSamples:M,samples:C}}function Jg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,l=new fe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){let d=c.length!==0||f||n!==0||s;return s=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){let p=c.clippingPlanes,v=c.clipIntersection,g=c.clipShadows,m=i.get(c);if(!s||p===null||p.length===0||r&&!g)r?u(null):h();else{let x=r?0:n,_=x*4,b=m.clippingState||null;o.value=b,b=u(p,f,_,d);for(let M=0;M!==_;++M)b[M]=e[M];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,f,d,p){let v=c!==null?c.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){let m=d+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,b=d;_!==v;++_,b+=4)a.copy(c[_]).applyMatrix4(x,l),a.normal.toArray(g,b),g[b+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var wa=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ta(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Es});r.uniforms.tEquirect.value=e;let a=new ce(s,r),l=e.minFilter;return e.minFilter===rn&&(e.minFilter=Ae),new fr(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ud=256,Kg=3,Qg=20,Nd=256,Fd=16,tv=3,ev=new ft,nv=new se,wr=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fr(1,10,null),this._boxMesh=new ce(new Ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=ev}=r,o=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let c=o.autoClear,f=o.autoClearColor,d=o.autoClearDepth,p=o.autoClearStencil,v=t.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(t.background=o.getClearColor(nv));let g=new fr(n,s,u);return g.position.copy(l),g.update(o,t),o.autoClear=c,o.autoClearColor=f,o.autoClearDepth=d,o.autoClearStencil=p,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ud,id(t))}_fromTexture(t,e){t.mapping===Rs||t.mapping===yr?this._setSize(t.image.length===0?ud:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=dd(t,!1,!1),n=Math.log2(t)-Kg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Rs||t.mapping===yr?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=iv(),this._integrationMaterial=sv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Fd);for(let a=0;a<=n;a++){let l=i.lodToRoughness(a,n);if(a>n-tv)r.roughness.value=l,this._renderCube(t,a,this._integrationMaterial);else{let o=l>0?Math.log2(e)+.5*Math.log2(6/(Nd*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=rv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function dd(i,t,e){return new wa(i,{minFilter:rn,generateMipmaps:t,type:Je,colorSpace:_s,depthBuffer:e})}function Ma(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:me.cube_vert,fragmentShader:e,side:sn,blending:Es,depthTest:!1,depthWrite:!1})}function iv(){return Ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nd}u

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
	`)}function sv(){return Ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fd}},`

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
	`)}function rv(){return Ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qg}
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
	`)}function fd(){return Ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pd(){return Ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function av(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Go||d===Vo)if(t.has(f)){let p=t.get(f).texture;return l(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new wa(p.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",h),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Go||d===Vo,v=d===Rs||d===yr;if(p||v){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new wr(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new wr(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function l(f,d){return d===Go?f.mapping=Rs:d===Vo&&(f.mapping=yr),f}function o(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function ov(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function lv(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function l(p){o(p.target)}function o(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",l),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function c(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=v!==null?v.array.length:g.array.length/3-1,_=g.count>=65535?Yr:Xr,b=new _(Math.ceil(x/3)*6,1),M=b.array;if(v!==null){let y=v.array;m=v.version;for(let T=0,U=0;T<x;T+=3){let S=y[T+0],V=y[T+1],K=y[T+2];M[U++]=S,M[U++]=V,M[U++]=V,M[U++]=K,M[U++]=K,M[U++]=S}}else{m=g.version;for(let y=0,T=0;y<x;y+=3){let U=y+0,S=y+1,V=y+2;M[T++]=U,M[T++]=S,M[T++]=S,M[T++]=V,M[T++]=V,M[T++]=U}}b.version=m;let C=r.get(p);C&&t.remove(C),r.set(p,b)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&c(p)}else c(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&o(v)}}return{get:h,update:u,getWireframeAttribute:f,dispose:d}}function cv(i,t,e){let n;function s(c){n=c}let r,a;function l(c){r=c.type,a=c.bytesPerElement}function o(c,f){i.drawElements(n,f,r,c*a),e.update(f,n,1)}function h(c,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,c*a,d),e.update(f,n,d))}function u(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function hv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,t,e){let n=new WeakMap,s=new ge;function r(a,l,o){let h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==c){let U=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let b=l.attributes.position.count*_,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*M*4*c),y=new bs(C,b,M,c);y.type=An,y.needsUpdate=!0;let T=_*4;for(let S=0;S<c;S++){let V=g[S],K=m[S],it=x[S],D=b*M*4*S;for(let W=0;W<V.count;W++){let B=W*T;d===!0&&(s.fromBufferAttribute(V,W),C[D+B+0]=s.x,C[D+B+1]=s.y,C[D+B+2]=s.z,C[D+B+3]=0),p===!0&&(s.fromBufferAttribute(K,W),C[D+B+4]=s.x,C[D+B+5]=s.y,C[D+B+6]=s.z,C[D+B+7]=0),v===!0&&(s.fromBufferAttribute(it,W),C[D+B+8]=s.x,C[D+B+9]=s.y,C[D+B+10]=s.z,C[D+B+11]=it.itemSize===4?s.w:1)}}f={count:c,texture:y,size:new ne(b,M)},n.set(l,f),l.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let p=l.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",h)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dv(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,c=h.geometry,f=t.get(h,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var fv={[Yc]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[Jc]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function pv(i,t,e,n,s,r){let a=new He(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=null,u=new Ue;u.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Me([0,2,0,0,2,0],2));let c=new Eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ce(u,c),d=new Ss(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,x=null,_=[],b=!1;this.setSize=function(M,C){a.setSize(M,C),l!==null&&l.setSize(M,C),o!==null&&o.setSize(M,C);for(let y=0;y<_.length;y++){let T=_[y];T.setSize&&T.setSize(M,C)}},this.setEffects=function(M){_=M,b=_.length>0&&_[0].isRenderPass===!0;let C=a.width,y=a.height;_.length>0&&l===null&&(l=new He(C,y,{type:Je,depthBuffer:!1,stencilBuffer:!1}),o=new He(C,y,{type:Je,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&_.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&h===null&&(h=new ii(C,y),r===!0&&(h.format=ki,h.type=Cs)),a.dispose(),a.depthTexture=T?h:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<_.length;U++){let S=_[U];S.setSize&&S.setSize(C,y),T&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(h)}},this.begin=function(M,C){if(g||M.toneMapping===mi&&_.length===0)return!1;if(x=C,C!==null){let y=C.width,T=C.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return b===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return b},this.end=function(M,C){M.toneMapping=m,g=!0;let y=a,T=l;for(let U=0;U<_.length;U++){let S=_[U];S.enabled!==!1&&(S.render(M,T,y,C),S.needsSwap!==!1&&(y=T,T=T===l?o:l))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,c.defines={},_e.getTransfer(p)===Te&&(c.defines.SRGB_TRANSFER="");let U=fv[v];U&&(c.defines[U]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(x),M.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var Ud=new cn,kd=new ii(1,1),Od=new ea(1),Bd=new bs,zd=new wo,Hd=new ta,md=[],gd=[],vd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ll(i,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function yv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Qe(e,n)}}function _v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Qe(e,n)}}function bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Qe(e,n)}}function wv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Dl(i){return i.version===0&&(i.compareFunction=hh,i.needsUpdate=!0),i}function Pv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Dl(kd):r=Ud,e.setTexture2D(t||r,s)}function Iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zd,s)}function Lv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Dl(Od):r=Hd,e.setTextureCube(t||r,s)}function Dv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function Nv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return vv;case 35666:return xv;case 35674:return yv;case 35675:return _v;case 35676:return bv;case 5124:case 35670:return wv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return Tv;case 5125:return Ev;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Fv(i,t){i.uniform1fv(this.addr,t)}function Uv(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function kv(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ov(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Bv(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zv(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hv(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gv(i,t){i.uniform1iv(this.addr,t)}function Vv(i,t){i.uniform2iv(this.addr,t)}function Wv(i,t){i.uniform3iv(this.addr,t)}function $v(i,t){i.uniform4iv(this.addr,t)}function qv(i,t){i.uniform1uiv(this.addr,t)}function Xv(i,t){i.uniform2uiv(this.addr,t)}function Yv(i,t){i.uniform3uiv(this.addr,t)}function Zv(i,t){i.uniform4uiv(this.addr,t)}function jv(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl(kd):a=Ud;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Jv(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zd,r[a])}function Kv(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Dl(Od):a=Hd;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||a,r[l])}function Qv(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bd,r[a])}function tx(i){switch(i){case 5126:return Fv;case 35664:return Uv;case 35665:return kv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return $v;case 5125:return qv;case 36294:return Xv;case 36295:return Yv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}var xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}},yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tx(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function _d(i,t){i.seq.push(t),i.map[t.id]=t}function ex(i,t,e){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),a=gh.lastIndex,l=r[1],o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){_d(e,h===void 0?new xh(l,i,t):new yh(l,i,t));break}else{let c=e.map[l];c===void 0&&(c=new _h(l),_d(e,c)),e=c}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);ex(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var nx=37297,ix=0;function sx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var wd=new fe;function rx(i){_e._getMatrix(wd,_e.workingColorSpace,i);let t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+sx(i.getShaderSource(t),l)}else return r}function ax(i,t){let e=rx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ox={[Yc]:"Linear",[Zc]:"Reinhard",[jc]:"Cineon",[Jc]:"ACESFilmic",[Qc]:"AgX",[th]:"Neutral",[Kc]:"Custom"};function lx(i,t){let e=ox[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pl=new ft;function cx(){_e.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),t=Pl.y.toFixed(4),e=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function ba(i){return i!==""}function Sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(i){return i.replace(fx,px)}function px(i,t){let e=me[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bh(e)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(mx,gx)}function gx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var vx={[Ts]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function xx(i){return vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yx={[yr]:"ENVMAP_MODE_REFRACTION"};function _x(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bx={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function wx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bx[i.combine]||"ENVMAP_BLENDING_NONE"}function Mx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=xx(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=_x(e),c=wx(e),f=hx(e),d=ux(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ba).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ba).join(`
`),g.length>0&&(g+=`
`)):(v=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),g=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?me.tonemapping_pars_fragment:"",e.toneMapping!==mi?lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,ax("linearToOutputTexel",e.outputColorSpace),cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ba).join(`
`)),a=bh(a),a=Sd(a,e),a=Td(a,e),l=bh(l),l=Sd(l,e),l=Td(l,e),a=Ed(a),l=Ed(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+v+a,_=m+g+l,b=bd(s,s.VERTEX_SHADER,x),M=bd(s,s.FRAGMENT_SHADER,_);s.attachShader(p,b),s.attachShader(p,M),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function C(S){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(p)||"",K=s.getShaderInfoLog(b)||"",it=s.getShaderInfoLog(M)||"",D=V.trim(),W=K.trim(),B=it.trim(),j=!0,lt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,b,M);else{let et=Md(s,b,"vertex"),pt=Md(s,M,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+et+`
`+pt)}else D!==""?oe("WebGLProgram: Program Info Log:",D):(W===""||B==="")&&(lt=!1);lt&&(S.diagnostics={runnable:j,programLog:D,vertexShader:{log:W,prefix:v},fragmentShader:{log:B,prefix:g}})}s.deleteShader(b),s.deleteShader(M),y=new br(s,p),T=dx(s,p)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,nx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}var Sx=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mh(t),e.set(t,n)),n}},Mh=class{constructor(t){this.id=Sx++,this.code=t,this.usedTimes=0}};function Tx(i){return i===is||i===xa||i===ya}function Ex(i,t,e,n,s,r){let a=new hr,l=new wh,o=new Set,h=[],u=new Map,c=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return o.add(y),y===0?"uv":`uv${y}`}function p(y,T,U,S,V,K){let it=S.fog,D=V.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?S.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||W,B),lt=f[y.type],et=n.precision;y.precision!==null&&(et=n.getMaxPrecision(y.precision),et!==y.precision&&oe("WebGLProgram.getParameters:",y.precision,"not supported, using",et,"instead."));let pt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,dt=pt!==void 0?pt.length:0,at=0;D.morphAttributes.position!==void 0&&(at=1),D.morphAttributes.normal!==void 0&&(at=2),D.morphAttributes.color!==void 0&&(at=3);let k,E,O,G;if(lt){let Tt=xi[lt];k=Tt.vertexShader,E=Tt.fragmentShader}else{k=y.vertexShader,E=y.fragmentShader;let Tt=l.getVertexShaderStage(y),ae=l.getFragmentShaderStage(y);l.update(y,Tt,ae),O=Tt.id,G=ae.id}let rt=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ot=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,mt=!!y.map,F=!!y.matcap,ht=!!j,Z=ht&&j.isPMREMTexture===!0,ct=!!y.aoMap,Y=!!y.lightMap,yt=!!y.bumpMap&&y.wireframe===!1,Ct=!!y.normalMap,jt=!!y.displacementMap,Ut=!!y.emissiveMap,Rt=!!y.metalnessMap,It=!!y.roughnessMap,kt=y.anisotropy>0,J=y.clearcoat>0,zt=y.diffuseRoughness>0,At=y.dispersion>0,Bt=y.retroreflectivity>0,bt=y.iridescence>0,Nt=y.sheen>0,Ot=y.transmission>0,Lt=kt&&!!y.anisotropyMap,z=J&&!!y.clearcoatMap,A=J&&!!y.clearcoatNormalMap,ut=J&&!!y.clearcoatRoughnessMap,gt=zt&&!!y.diffuseRoughnessMap,R=bt&&!!y.iridescenceMap,H=bt&&!!y.iridescenceThicknessMap,Q=Nt&&!!y.sheenColorMap,w=Nt&&!!y.sheenRoughnessMap,I=!!y.specularMap,N=!!y.specularColorMap,P=!!y.specularIntensityMap,q=Ot&&!!y.transmissionMap,nt=Ot&&!!y.thicknessMap,Mt=!!y.gradientMap,Et=!!y.alphaMap,Dt=y.alphaTest>0,Gt=!!y.alphaHash,Vt=!!y.extensions,Pt=mi;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Ft=Z?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,qt={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:E,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:et,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:ot,instancingColor:ot&&V.instanceColor!==null,instancingMorph:ot&&V.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:F,envMap:ht,envMapMode:ht&&j.mapping,envMapPMREM:Z,envMapMaxLod:Z?Ft.length-1:null,envMapSize:Z?Ft[0].width:null,aoMap:ct,lightMap:Y,bumpMap:yt,normalMap:Ct,displacementMap:jt,emissiveMap:Ut,normalMapObjectSpace:Ct&&y.normalMapType===qu,normalMapTangentSpace:Ct&&y.normalMapType===Al,packedNormalMap:Ct&&y.normalMapType===Al&&Tx(y.normalMap.format),metalnessMap:Rt,roughnessMap:It,anisotropy:kt,anisotropyMap:Lt,clearcoat:J,clearcoatMap:z,clearcoatNormalMap:A,clearcoatRoughnessMap:ut,diffuseRoughness:zt,diffuseRoughnessMap:gt,dispersion:At,retroreflection:Bt,iridescence:bt,iridescenceMap:R,iridescenceThicknessMap:H,sheen:Nt,sheenColorMap:Q,sheenRoughnessMap:w,specularMap:I,specularColorMap:N,specularIntensityMap:P,transmission:Ot,transmissionMap:q,thicknessMap:nt,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:Et,alphaTest:Dt,alphaHash:Gt,combine:y.combine,mapUv:mt&&d(y.map.channel),aoMapUv:ct&&d(y.aoMap.channel),lightMapUv:Y&&d(y.lightMap.channel),bumpMapUv:yt&&d(y.bumpMap.channel),normalMapUv:Ct&&d(y.normalMap.channel),displacementMapUv:jt&&d(y.displacementMap.channel),emissiveMapUv:Ut&&d(y.emissiveMap.channel),metalnessMapUv:Rt&&d(y.metalnessMap.channel),roughnessMapUv:It&&d(y.roughnessMap.channel),anisotropyMapUv:Lt&&d(y.anisotropyMap.channel),clearcoatMapUv:z&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:R&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:H&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:w&&d(y.sheenRoughnessMap.channel),specularMapUv:I&&d(y.specularMap.channel),specularColorMapUv:N&&d(y.specularColorMap.channel),specularIntensityMapUv:P&&d(y.specularIntensityMap.channel),transmissionMapUv:q&&d(y.transmissionMap.channel),thicknessMapUv:nt&&d(y.thicknessMap.channel),alphaMapUv:Et&&d(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||kt),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(mt||Et),fog:!!it,useFog:y.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:X,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:at,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:K.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Te,decodeVideoTextureEmissive:Ut&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ye,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function v(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(g(T,y),m(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){let T=f[y.type],U;if(T){let S=xi[T];U=ld.clone(S.uniforms)}else U=y.uniforms;return U}function _(y,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new Mx(i,T,y,s),h.push(U),u.set(T,U)),U}function b(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:h,dispose:C}}function Ax(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,p,v,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function o(f,d,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);let _=l(f,d,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function h(f,d,p,v,g,m){let x=l(f,d,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||Rx),n.length>1&&n.sort(d||Rd),s.length>1&&s.sort(d||Rd)}function c(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function Cx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cd,i.set(n,[a])):s>=r.length?(a=new Cd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new ft,color:new se};break;case"SpotLight":e={position:new ft,direction:new ft,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ft,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ft,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return i[t.id]=e,e}}}function Ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Lx=0;function Dx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nx(i){let t=new Px,e=Ix(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ft);let s=new ft,r=new ve,a=new ve;function l(h){let u=0,c=0,f=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,_=0,b=0,M=0,C=0,y=0,T=0,U=0,S=0;h.sort(Dx);for(let K=0,it=h.length;K<it;K++){let D=h[K],W=D.color,B=D.intensity,j=D.distance,lt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===is?lt=D.shadow.map.texture:lt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=W.r*B,c+=W.g*B,f+=W.b*B;else if(D.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(D.sh.coefficients[et],B);S++}else if(D.isSunLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let pt=D.shadow,dt=e.get(D);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),n.sunShadow[p]=dt,n.sunShadowMap[p]=lt;let at=pt.getViewportCount();for(let k=0;k<at;k++)n.sunShadowMatrix[v+k]=pt.getMatrix(k),n.sunShadowCascade[v+k]=pt._cascadeData[k];v+=at,p++}n.sun[d]=et,d++}else if(D.isDirectionalLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let pt=D.shadow,dt=e.get(D);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.directionalShadow[g]=dt,n.directionalShadowMap[g]=lt,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=et,g++}else if(D.isSpotLight){let et=t.get(D);et.position.setFromMatrixPosition(D.matrixWorld),et.color.copy(W).multiplyScalar(B),et.distance=j,et.coneCos=Math.cos(D.angle),et.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),et.decay=D.decay,n.spot[x]=et;let pt=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,pt.updateMatrices(D),D.castShadow&&U++),n.spotLightMatrix[x]=pt.matrix,D.castShadow){let dt=e.get(D);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,n.spotShadow[x]=dt,n.spotShadowMap[x]=lt,y++}x++}else if(D.isRectAreaLight){let et=t.get(D);et.color.copy(W).multiplyScalar(B),et.halfWidth.set(D.width*.5,0,0),et.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=et,_++}else if(D.isPointLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),et.distance=D.distance,et.decay=D.decay,D.castShadow){let pt=D.shadow,dt=e.get(D);dt.shadowIntensity=pt.intensity,dt.shadowBias=pt.bias,dt.shadowNormalBias=pt.normalBias,dt.shadowRadius=pt.radius,dt.shadowMapSize=pt.mapSize,dt.shadowCameraNear=pt.camera.near,dt.shadowCameraFar=pt.camera.far,n.pointShadow[m]=dt,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=D.shadow.matrix,C++}n.point[m]=et,m++}else if(D.isHemisphereLight){let et=t.get(D);et.skyColor.copy(D.color).multiplyScalar(B),et.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[b]=et,b++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=f;let V=n.hash;(V.sunLength!==d||V.directionalLength!==g||V.pointLength!==m||V.spotLength!==x||V.rectAreaLength!==_||V.hemiLength!==b||V.numSunShadows!==p||V.numDirectionalShadows!==M||V.numPointShadows!==C||V.numSpotShadows!==y||V.numSpotMaps!==T||V.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-U,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=S,V.sunLength=d,V.directionalLength=g,V.pointLength=m,V.spotLength=x,V.rectAreaLength=_,V.hemiLength=b,V.numSunShadows=p,V.numDirectionalShadows=M,V.numPointShadows=C,V.numSpotShadows=y,V.numSpotMaps=T,V.numLightProbes=S,n.version=Lx++)}function o(h,u){let c=0,f=0,d=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let b=h[x];if(b.isSunLight){let M=n.sun[c];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),c++}else if(b.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:n}}function Pd(i){let t=new Nx(i),e=[],n=[],s=[];function r(c){u.camera=c,e.length=0,n.length=0,s.length=0}function a(c){c.isLightProbeGrid?s.push(c):e.push(c)}function l(c){n.push(c)}function o(){t.setup(e),s.sort((c,f)=>c.priority-f.priority||c.id-f.id)}function h(c){t.setupView(e,c)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l}}function Fx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Pd(i),t.set(s,[l])):r>=a.length?(l=new Pd(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`,Ox=[new ft(1,0,0),new ft(-1,0,0),new ft(0,1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1)],Bx=[new ft(0,-1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,-1,0),new ft(0,-1,0)],Id=new ve,_a=new ft,vh=new ft;function zx(i,t,e){let n=new di,s=new ne,r=new ne,a=new ge,l=new Ao,o=new Ro,h={},u=e.maxTextureSize,c={[ns]:sn,[sn]:ns,[Ye]:Ye},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Ux,fragmentShader:kx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ue;p.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ce(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let m=this.type;this.render=function(C,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Eu&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let U=i.getRenderTarget(),S=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Es),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let it=m!==this.type;it&&y.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=C.length;D<W;D++){let B=C[D],j=B.shadow;if(j===void 0){oe("WebGLShadowMap:",B,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let lt=j.getFrameExtents();s.multiply(lt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,j.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=et,j.map===null||it===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===pr){if(B.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new He(s.x,s.y,{format:is,type:Je,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),j.map.texture.name=B.name+".shadowMap",j.map.depthTexture=new ii(s.x,s.y,An),j.map.depthTexture.name=B.name+".shadowMapDepth",j.map.depthTexture.format=Fi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Oe,j.map.depthTexture.magFilter=Oe}else B.isPointLight?(j.map=new wa(s.x),j.map.depthTexture=new ea(s.x,si)):(j.map=new He(s.x,s.y),j.map.depthTexture=new ii(s.x,s.y,si)),j.map.depthTexture.name=B.name+".shadowMap",j.map.depthTexture.format=Fi,this.type===Ts?(j.map.depthTexture.compareFunction=et?ch:lh,j.map.depthTexture.minFilter=Ae,j.map.depthTexture.magFilter=Ae):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Oe,j.map.depthTexture.magFilter=Oe);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let pt=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();B.isPointLight!==!0&&j.updateMatrices(B,T);let dt=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:T.layers;for(let at=0;at<pt;at++){let k=j.getCamera(at);if(B.isPointLight){let E=j.camera,O=j.matrix,G=B.distance||E.far;G!==E.far&&(E.far=G,E.updateProjectionMatrix()),_a.setFromMatrixPosition(B.matrixWorld),E.position.copy(_a),vh.copy(E.position),vh.add(Ox[at]),E.up.copy(Bx[at]),E.lookAt(vh),E.updateMatrixWorld(),O.makeTranslation(-_a.x,-_a.y,-_a.z),Id.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Id,E.coordinateSystem,E.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,at),i.clear();else{at===0&&(i.setRenderTarget(j.map),i.clear());let E=j.getViewport(at);a.set(r.x*E.x,r.y*E.y,r.x*E.z,r.y*E.w),K.viewport(a)}n=j.getFrustum(at),b(y,T,k,B,dt,this.type)}j.isPointLightShadow!==!0&&this.type===pr&&x(j,T),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(U,S,V)};function x(C,y){let T=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new He(s.x,s.y,{format:is,type:Je}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,T,d,v,null)}function _(C,y,T,U){let S=null,V=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)S=V;else if(S=T.isPointLight===!0?o:l,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let K=S.uuid,it=y.uuid,D=h[K];D===void 0&&(D={},h[K]=D);let W=D[it];W===void 0&&(W=S.clone(),D[it]=W,y.addEventListener("dispose",M)),S=W}if(S.visible=y.visible,S.wireframe=y.wireframe,U===pr?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:c[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let K=i.properties.get(S);K.light=T}return S}function b(C,y,T,U,S,V){if(C.visible===!1)return;if(C.layers.test(S)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&V===pr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let D=t.update(C),W=C.material;if(Array.isArray(W)){let B=D.groups;for(let j=0,lt=B.length;j<lt;j++){let et=B[j],pt=W[et.materialIndex];if(pt&&pt.visible){let dt=_(C,pt,U,V);C.onBeforeShadow(i,C,y,T,D,dt,et),i.renderBufferDirect(T,null,D,dt,C,et),C.onAfterShadow(i,C,y,T,D,dt,et)}}}else if(W.visible){let B=_(C,W,U,V);C.onBeforeShadow(i,C,y,T,D,B,null),i.renderBufferDirect(T,null,D,B,C,null),C.onAfterShadow(i,C,y,T,D,B,null)}}let it=C.children;for(let D=0,W=it.length;D<W;D++)b(it[D],y,T,U,S,V)}function M(C){C.target.removeEventListener("dispose",M);for(let T in h){let U=h[T],S=C.target.uuid;S in U&&(U[S].dispose(),delete U[S])}}}function Hx(i,t){function e(){let P=!1,q=new ge,nt=null,Mt=new ge(0,0,0,0);return{setMask:function(Et){nt!==Et&&!P&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){P=Et},setClear:function(Et,Dt,Gt,Vt,Pt){Pt===!0&&(Et*=Vt,Dt*=Vt,Gt*=Vt),q.set(Et,Dt,Gt,Vt),Mt.equals(q)===!1&&(i.clearColor(Et,Dt,Gt,Vt),Mt.copy(q))},reset:function(){P=!1,nt=null,Mt.set(-1,0,0,0)}}}function n(){let P=!1,q=!1,nt=null,Mt=null,Et=null;return{setReversed:function(Dt){if(q!==Dt){let Gt=t.get("EXT_clip_control");Dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),q=Dt;let Vt=Et;Et=null,this.setClear(Vt)}},getReversed:function(){return q},setTest:function(Dt){Dt?X(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Dt){nt!==Dt&&!P&&(i.depthMask(Dt),nt=Dt)},setFunc:function(Dt){if(q&&(Dt=nd[Dt]),Mt!==Dt){switch(Dt){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Dt}},setLocked:function(Dt){P=Dt},setClear:function(Dt){Et!==Dt&&(Et=Dt,q&&(Dt=1-Dt),i.clearDepth(Dt))},reset:function(){P=!1,nt=null,Mt=null,Et=null,q=!1}}}function s(){let P=!1,q=null,nt=null,Mt=null,Et=null,Dt=null,Gt=null,Vt=null,Pt=null;return{setTest:function(Ft){P||(Ft?X(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Ft){q!==Ft&&!P&&(i.stencilMask(Ft),q=Ft)},setFunc:function(Ft,qt,Tt){(nt!==Ft||Mt!==qt||Et!==Tt)&&(i.stencilFunc(Ft,qt,Tt),nt=Ft,Mt=qt,Et=Tt)},setOp:function(Ft,qt,Tt){(Dt!==Ft||Gt!==qt||Vt!==Tt)&&(i.stencilOp(Ft,qt,Tt),Dt=Ft,Gt=qt,Vt=Tt)},setLocked:function(Ft){P=Ft},setClear:function(Ft){Pt!==Ft&&(i.clearStencil(Ft),Pt=Ft)},reset:function(){P=!1,q=null,nt=null,Mt=null,Et=null,Dt=null,Gt=null,Vt=null,Pt=null}}}let r=new e,a=new n,l=new s,o={},h=new WeakMap,u={},c={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,M=null,C=null,y=null,T=new se(0,0,0),U=0,S=!1,V=null,K=null,it=null,D=null,W=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,lt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=lt>=1):et.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=lt>=2);let pt=null,dt={},at=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),E=new ge().fromArray(at),O=new ge().fromArray(k);function G(P,q,nt,Mt){let Et=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(P,Dt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<nt;Gt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(q+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Dt}let rt={};rt[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),X(i.DEPTH_TEST),a.setFunc(ar),yt(!1),Ct(Wc),X(i.CULL_FACE),ct(Es);function X(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function ot(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function vt(P,q){return f[P]!==q?(i.bindFramebuffer(P,q),f[P]=q,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=q),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=q),!0):!1}function mt(P,q){let nt=p,Mt=!1;if(P){nt=d.get(q),nt===void 0&&(nt=[],d.set(q,nt));let Et=P.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Gt=Et.length;Dt<Gt;Dt++)nt[Dt]=i.COLOR_ATTACHMENT0+Dt;nt.length=Et.length,Mt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(nt)}function F(P){return v!==P?(i.useProgram(P),v=P,!0):!1}let ht={[As]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};ht[Cu]=i.MIN,ht[Pu]=i.MAX;let Z={[ua]:i.ZERO,[da]:i.ONE,[Iu]:i.SRC_COLOR,[vr]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[xr]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(P,q,nt,Mt,Et,Dt,Gt,Vt,Pt,Ft){if(P===Es){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),P!==ha){if(P!==m||Ft!==S){if((x!==As||M!==As)&&(i.blendEquation(i.FUNC_ADD),x=As,M=As),Ft)switch(P){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gr:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",P);break}else switch(P){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",P);break}_=null,b=null,C=null,y=null,T.set(0,0,0),U=0,m=P,S=Ft}return}Et=Et||q,Dt=Dt||nt,Gt=Gt||Mt,(q!==x||Et!==M)&&(i.blendEquationSeparate(ht[q],ht[Et]),x=q,M=Et),(nt!==_||Mt!==b||Dt!==C||Gt!==y)&&(i.blendFuncSeparate(Z[nt],Z[Mt],Z[Dt],Z[Gt]),_=nt,b=Mt,C=Dt,y=Gt),(Vt.equals(T)===!1||Pt!==U)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Pt),T.copy(Vt),U=Pt),m=P,S=!1}function Y(P,q){P.side===Ye?ot(i.CULL_FACE):X(i.CULL_FACE);let nt=P.side===sn;q&&(nt=!nt),yt(nt),P.blending===mr&&P.transparent===!1?ct(Es):ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Mt=P.stencilWrite;l.setTest(Mt),Mt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(P){V!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),V=P)}function Ct(P){P!==Su?(X(i.CULL_FACE),P!==K&&(P===Wc?i.cullFace(i.BACK):P===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),K=P}function jt(P){P!==it&&(j&&i.lineWidth(P),it=P)}function Ut(P,q,nt){P?(X(i.POLYGON_OFFSET_FILL),(D!==q||W!==nt)&&(D=q,W=nt,a.getReversed()&&(q=-q,nt=-nt),i.polygonOffset(q,nt))):ot(i.POLYGON_OFFSET_FILL)}function Rt(P){P?X(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function It(P){P===void 0&&(P=i.TEXTURE0+B-1),pt!==P&&(i.activeTexture(P),pt=P)}function kt(P,q,nt){nt===void 0&&(pt===null?nt=i.TEXTURE0+B-1:nt=pt);let Mt=dt[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},dt[nt]=Mt),(Mt.type!==P||Mt.texture!==q)&&(pt!==nt&&(i.activeTexture(nt),pt=nt),i.bindTexture(P,q||rt[P]),Mt.type=P,Mt.texture=q)}function J(){let P=dt[pt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function zt(){try{i.compressedTexImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function At(){try{i.compressedTexImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function bt(){try{i.texSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Lt(){try{i.texStorage2D(...arguments)}catch(P){le("WebGLState:",P)}}function z(){try{i.texStorage3D(...arguments)}catch(P){le("WebGLState:",P)}}function A(){try{i.texImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function ut(){try{i.texImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function gt(P){return c[P]!==void 0?c[P]:i.getParameter(P)}function R(P,q){c[P]!==q&&(i.pixelStorei(P,q),c[P]=q)}function H(P){E.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),E.copy(P))}function Q(P){O.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),O.copy(P))}function w(P,q){let nt=h.get(q);nt===void 0&&(nt=new WeakMap,h.set(q,nt));let Mt=nt.get(P);Mt===void 0&&(Mt=i.getUniformBlockIndex(q,P.name),i.uniformBlockBinding(q,Mt,Mt),nt.set(P,Mt))}function I(P,q,nt){let Et=h.get(q).get(P);o[Et]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Et,nt),o[Et]=nt)}function N(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},c={},pt=null,dt={},f={},o={},d=new WeakMap,p=[],v=null,g=!1,m=null,x=null,_=null,b=null,M=null,C=null,y=null,T=new se(0,0,0),U=0,S=!1,V=null,K=null,it=null,D=null,W=null,E.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:X,disable:ot,bindFramebuffer:vt,drawBuffers:mt,useProgram:F,setBlending:ct,setMaterial:Y,setFlipSided:yt,setCullFace:Ct,setLineWidth:jt,setPolygonOffset:Ut,setScissorTest:Rt,activeTexture:It,bindTexture:kt,unbindTexture:J,compressedTexImage2D:zt,compressedTexImage3D:At,texImage2D:A,texImage3D:ut,pixelStorei:R,getParameter:gt,updateUBOMapping:w,uniformBlockBinding:I,texStorage2D:Lt,texStorage3D:z,texSubImage2D:Bt,texSubImage3D:bt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ot,scissor:H,viewport:Q,reset:N}}function Gx(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ne,u=new WeakMap,c=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(z=>p.delete(z)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(z,A){return g?new OffscreenCanvas(z,A):$r("canvas")}function x(z,A,ut){let gt=1,R=Lt(z);if((R.width>ut||R.height>ut)&&(gt=ut/Math.max(R.width,R.height)),gt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let H=Math.floor(gt*R.width),Q=Math.floor(gt*R.height);f===void 0&&(f=m(H,Q));let w=A?m(H,Q):f;return w.width=H,w.height=Q,w.getContext("2d").drawImage(z,0,0,H,Q),oe("WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+H+"x"+Q+")."),w}else return"data"in z&&oe("WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),z;return z}function _(z){return z.generateMipmaps}function b(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(z,A,ut,gt,R,H=!1){if(z!==null){if(i[z]!==void 0)return i[z];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Q;gt&&(Q=t.get("EXT_texture_norm16"),Q||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=A;if(A===i.RED&&(ut===i.FLOAT&&(w=i.R32F),ut===i.HALF_FLOAT&&(w=i.R16F),ut===i.UNSIGNED_BYTE&&(w=i.R8),ut===i.UNSIGNED_SHORT&&Q&&(w=Q.R16_EXT),ut===i.SHORT&&Q&&(w=Q.R16_SNORM_EXT)),A===i.RED_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.R8UI),ut===i.UNSIGNED_SHORT&&(w=i.R16UI),ut===i.UNSIGNED_INT&&(w=i.R32UI),ut===i.BYTE&&(w=i.R8I),ut===i.SHORT&&(w=i.R16I),ut===i.INT&&(w=i.R32I)),A===i.RG&&(ut===i.FLOAT&&(w=i.RG32F),ut===i.HALF_FLOAT&&(w=i.RG16F),ut===i.UNSIGNED_BYTE&&(w=i.RG8),ut===i.UNSIGNED_SHORT&&Q&&(w=Q.RG16_EXT),ut===i.SHORT&&Q&&(w=Q.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RG8UI),ut===i.UNSIGNED_SHORT&&(w=i.RG16UI),ut===i.UNSIGNED_INT&&(w=i.RG32UI),ut===i.BYTE&&(w=i.RG8I),ut===i.SHORT&&(w=i.RG16I),ut===i.INT&&(w=i.RG32I)),A===i.RGB_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RGB8UI),ut===i.UNSIGNED_SHORT&&(w=i.RGB16UI),ut===i.UNSIGNED_INT&&(w=i.RGB32UI),ut===i.BYTE&&(w=i.RGB8I),ut===i.SHORT&&(w=i.RGB16I),ut===i.INT&&(w=i.RGB32I)),A===i.RGBA_INTEGER&&(ut===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),ut===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),ut===i.UNSIGNED_INT&&(w=i.RGBA32UI),ut===i.BYTE&&(w=i.RGBA8I),ut===i.SHORT&&(w=i.RGBA16I),ut===i.INT&&(w=i.RGBA32I)),A===i.RGB&&(ut===i.UNSIGNED_SHORT&&Q&&(w=Q.RGB16_EXT),ut===i.SHORT&&Q&&(w=Q.RGB16_SNORM_EXT),ut===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),ut===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),A===i.RGBA){let I=H?Wr:_e.getTransfer(R);ut===i.FLOAT&&(w=i.RGBA32F),ut===i.HALF_FLOAT&&(w=i.RGBA16F),ut===i.UNSIGNED_BYTE&&(w=I===Te?i.SRGB8_ALPHA8:i.RGBA8),ut===i.UNSIGNED_SHORT&&Q&&(w=Q.RGBA16_EXT),ut===i.SHORT&&Q&&(w=Q.RGBA16_SNORM_EXT),ut===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),ut===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&t.get("EXT_color_buffer_float"),w}function y(z,A){let ut;return z?A===null||A===si||A===Cs?ut=i.DEPTH24_STENCIL8:A===An?ut=i.DEPTH32F_STENCIL8:A===_r&&(ut=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===si||A===Cs?ut=i.DEPTH_COMPONENT24:A===An?ut=i.DEPTH_COMPONENT32F:A===_r&&(ut=i.DEPTH_COMPONENT16),ut}function T(z,A){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==Oe&&z.minFilter!==Ae?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function U(z){let A=new WeakRef(z);n.get(z).__ref=A,p.add(A),v.register(z,A,A)}function S(z){let A=n.get(z).__ref;A!==void 0&&(p.delete(A),v.unregister(A))}function V(z){it(z.target)}function K(z){D(z.target)}function it(z){z.removeEventListener("dispose",V),S(z),B(z),z.isVideoTexture&&u.delete(z),z.isHTMLTexture&&c.delete(z)}function D(z){z.removeEventListener("dispose",K),S(z),lt(z)}function W(){for(let z of p){let A=z.deref();A!==void 0&&(A.isRenderTarget===!0?D(A):it(A))}p.clear(),c.clear()}function B(z){let A=n.get(z);if(A.__webglInit===void 0)return;let ut=z.source,gt=d.get(ut);if(gt){let R=gt[A.__cacheKey];R.usedTimes--,R.usedTimes===0&&j(z),Object.keys(gt).length===0&&d.delete(ut)}n.remove(z)}function j(z){let A=n.get(z);i.deleteTexture(A.__webglTexture);let ut=z.source,gt=d.get(ut);delete gt[A.__cacheKey],a.memory.textures--}function lt(z){let A=n.get(z);A.__depthDisposeCallback&&A.__depthDisposeCallback();let ut=z.depthTexture;if(ut&&ut.renderTarget===z&&it(ut),z.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(A.__webglFramebuffer[R]))for(let H=0;H<A.__webglFramebuffer[R].length;H++)i.deleteFramebuffer(A.__webglFramebuffer[R][H]);else i.deleteFramebuffer(A.__webglFramebuffer[R]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[R])}else{if(Array.isArray(A.__webglFramebuffer))for(let R=0;R<A.__webglFramebuffer.length;R++)i.deleteFramebuffer(A.__webglFramebuffer[R]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let R=0;R<A.__webglColorRenderbuffer.length;R++)A.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[R]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let gt=z.textures;for(let R=0,H=gt.length;R<H;R++){let Q=n.get(gt[R]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(gt[R])}n.remove(z)}let et=0;function pt(){et=0}function dt(){return et}function at(z){et=z}function k(){let z=et;return z>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,z}function E(z){let A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.mipmapsAutoUpdate),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function O(z,A){let ut=n.get(z);if(z.isVideoTexture&&Nt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ut.__version!==z.version){let gt=z.image;if(gt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(ut,z,A);return}}else z.isExternalTexture&&(ut.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture,i.TEXTURE0+A)}function G(z,A){let ut=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ut.__version!==z.version){Y(ut,z,A);return}else z.isExternalTexture&&(ut.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,ut.__webglTexture,i.TEXTURE0+A)}function rt(z,A){let ut=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ut.__version!==z.version){Y(ut,z,A);return}e.bindTexture(i.TEXTURE_3D,ut.__webglTexture,i.TEXTURE0+A)}function X(z,A){let ut=n.get(z);if(z.version>0&&ut.__version!==z.version){yt(ut,z,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture,i.TEXTURE0+A)}let ot={[Ni]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},vt={[Oe]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},mt={[Yu]:i.NEVER,[hh]:i.ALWAYS,[Zu]:i.LESS,[lh]:i.LEQUAL,[ju]:i.EQUAL,[ch]:i.GEQUAL,[Ju]:i.GREATER,[Ku]:i.NOTEQUAL};function F(z,A){if(A.type===An&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ae||A.magFilter===Wo||A.magFilter===fa||A.magFilter===rn||A.minFilter===Ae||A.minFilter===Wo||A.minFilter===fa||A.minFilter===rn)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ot[A.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ot[A.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ot[A.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,vt[A.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,vt[A.minFilter]),A.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Oe||A.minFilter!==fa&&A.minFilter!==rn||A.type===An&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let ut=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ht(z,A){let ut=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",V),U(A));let gt=A.source,R=d.get(gt);R===void 0&&(R={},d.set(gt,R));let H=E(A);if(H!==z.__cacheKey){R[H]===void 0&&(R[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ut=!0),R[H].usedTimes++;let Q=R[z.__cacheKey];Q!==void 0&&(R[z.__cacheKey].usedTimes--,Q.usedTimes===0&&j(A)),z.__cacheKey=H,z.__webglTexture=R[H].texture}return ut}function Z(z,A,ut){return Math.floor(Math.floor(z/ut)/A)}function ct(z,A,ut,gt){let H=z.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,ut,gt,A.data);else{H.sort((P,q)=>P.start-q.start);let Q=0;for(let P=1;P<H.length;P++){let q=H[Q],nt=H[P],Mt=q.start+q.count,Et=Z(nt.start,A.width,4),Dt=Z(q.start,A.width,4);nt.start<=Mt+1&&Et===Dt&&Z(nt.start+nt.count-1,A.width,4)===Et?q.count=Math.max(q.count,nt.start+nt.count-q.start):(++Q,H[Q]=nt)}H.length=Q+1;let w=e.getParameter(i.UNPACK_ROW_LENGTH),I=e.getParameter(i.UNPACK_SKIP_PIXELS),N=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let P=0,q=H.length;P<q;P++){let nt=H[P],Mt=Math.floor(nt.start/4),Et=Math.ceil(nt.count/4),Dt=Mt%A.width,Gt=Math.floor(Mt/A.width),Vt=Et,Pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Dt,Gt,Vt,Pt,ut,gt,A.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,w),e.pixelStorei(i.UNPACK_SKIP_PIXELS,I),e.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function Y(z,A,ut){let gt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=i.TEXTURE_3D);let R=ht(z,A),H=A.source;e.bindTexture(gt,z.__webglTexture,i.TEXTURE0+ut);let Q=n.get(H);if(H.version!==Q.__version||R===!0){if(e.activeTexture(i.TEXTURE0+ut),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let Pt=_e.getPrimaries(_e.workingColorSpace),Ft=A.colorSpace===zn?null:_e.getPrimaries(A.colorSpace),qt=A.colorSpace===zn||Pt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let I=x(A.image,!1,s.maxTextureSize);I=Ot(A,I);let N=r.convert(A.format,A.colorSpace),P=r.convert(A.type),q=C(A.internalFormat,N,P,A.normalized,A.colorSpace,A.isVideoTexture);F(gt,A);let nt,Mt=A.mipmaps,Et=A.isVideoTexture!==!0,Dt=Q.__version===void 0||R===!0,Gt=H.dataReady,Vt=T(A,I);if(A.isDepthTexture)q=y(A.format===ki,A.type),Dt&&(Et?e.texStorage2D(i.TEXTURE_2D,1,q,I.width,I.height):e.texImage2D(i.TEXTURE_2D,0,q,I.width,I.height,0,N,P,null));else if(A.isDataTexture)if(Mt.length>0){Et&&Dt&&e.texStorage2D(i.TEXTURE_2D,Vt,q,Mt[0].width,Mt[0].height);for(let Pt=0,Ft=Mt.length;Pt<Ft;Pt++)nt=Mt[Pt],Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,nt.width,nt.height,N,P,nt.data):e.texImage2D(i.TEXTURE_2D,Pt,q,nt.width,nt.height,0,N,P,nt.data);A.generateMipmaps=!1}else Et?(Dt&&e.texStorage2D(i.TEXTURE_2D,Vt,q,I.width,I.height),Gt&&ct(A,I,N,P)):e.texImage2D(i.TEXTURE_2D,0,q,I.width,I.height,0,N,P,I.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Et&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,q,Mt[0].width,Mt[0].height,I.depth);for(let Pt=0,Ft=Mt.length;Pt<Ft;Pt++)if(nt=Mt[Pt],A.format!==Ze)if(N!==null)if(Et){if(Gt)if(A.layerUpdates.size>0){let qt=mh(nt.width,nt.height,A.format,A.type);for(let Tt of A.layerUpdates){let ae=nt.data.subarray(Tt*qt/nt.data.BYTES_PER_ELEMENT,(Tt+1)*qt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,Tt,nt.width,nt.height,1,N,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,0,nt.width,nt.height,I.depth,N,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pt,q,nt.width,nt.height,I.depth,0,nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,0,nt.width,nt.height,I.depth,N,P,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Pt,q,nt.width,nt.height,I.depth,0,N,P,nt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Et&&Dt&&e.texStorage2D(i.TEXTURE_2D,Vt,q,Mt[0].width,Mt[0].height);for(let Pt=0,Ft=Mt.length;Pt<Ft;Pt++)nt=Mt[Pt],A.format!==Ze?N!==null?Et?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Pt,0,0,nt.width,nt.height,N,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Pt,q,nt.width,nt.height,0,nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,nt.width,nt.height,N,P,nt.data):e.texImage2D(i.TEXTURE_2D,Pt,q,nt.width,nt.height,0,N,P,nt.data)}else if(A.isDataArrayTexture)if(Et){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,q,I.width,I.height,I.depth),Gt)if(A.layerUpdates.size>0){let Pt=mh(I.width,I.height,A.format,A.type);for(let Ft of A.layerUpdates){let qt=I.data.subarray(Ft*Pt/I.data.BYTES_PER_ELEMENT,(Ft+1)*Pt/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,I.width,I.height,1,N,P,qt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,N,P,I.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,I.width,I.height,I.depth,0,N,P,I.data);else if(A.isData3DTexture)Et?(Dt&&e.texStorage3D(i.TEXTURE_3D,Vt,q,I.width,I.height,I.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,N,P,I.data)):e.texImage3D(i.TEXTURE_3D,0,q,I.width,I.height,I.depth,0,N,P,I.data);else if(A.isFramebufferTexture){if(Dt)if(Et)e.texStorage2D(i.TEXTURE_2D,Vt,q,I.width,I.height);else{let Pt=I.width,Ft=I.height;for(let qt=0;qt<Vt;qt++)e.texImage2D(i.TEXTURE_2D,qt,q,Pt,Ft,0,N,P,null),Pt>>=1,Ft>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let Pt=i.canvas;if(Pt.hasAttribute("layoutsubtree")||Pt.setAttribute("layoutsubtree","true"),I.parentNode!==Pt){Pt.appendChild(I),c.add(A),Pt.onpaint=Ft=>{let qt=Ft.changedElements;for(let Tt of c)qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,I);else{let qt=i.RGBA,Tt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,Tt,ae,I)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Et&&Dt){let Pt=Lt(Mt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,q,Pt.width,Pt.height)}for(let Pt=0,Ft=Mt.length;Pt<Ft;Pt++)nt=Mt[Pt],Et?Gt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,N,P,nt):e.texImage2D(i.TEXTURE_2D,Pt,q,N,P,nt);A.generateMipmaps=!1}else if(Et){if(Dt){let Pt=Lt(I);e.texStorage2D(i.TEXTURE_2D,Vt,q,Pt.width,Pt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,P,I)}else e.texImage2D(i.TEXTURE_2D,0,q,N,P,I);_(A)&&A.mipmapsAutoUpdate===!0&&b(gt),Q.__version=H.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function yt(z,A,ut){if(A.image.length!==6)return;let gt=ht(z,A),R=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ut);let H=n.get(R);if(R.version!==H.__version||gt===!0){e.activeTexture(i.TEXTURE0+ut);let Q=_e.getPrimaries(_e.workingColorSpace),w=A.colorSpace===zn?null:_e.getPrimaries(A.colorSpace),I=A.colorSpace===zn||Q===w?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let N=A.isCompressedTexture||A.image[0].isCompressedTexture,P=A.image[0]&&A.image[0].isDataTexture,q=[];for(let Tt=0;Tt<6;Tt++)!N&&!P?q[Tt]=x(A.image[Tt],!0,s.maxCubemapSize):q[Tt]=P?A.image[Tt].image:A.image[Tt],q[Tt]=Ot(A,q[Tt]);let nt=q[0],Mt=r.convert(A.format,A.colorSpace),Et=r.convert(A.type),Dt=C(A.internalFormat,Mt,Et,A.normalized,A.colorSpace),Gt=A.isVideoTexture!==!0,Vt=H.__version===void 0||gt===!0,Pt=R.dataReady,Ft=T(A,nt);F(i.TEXTURE_CUBE_MAP,A);let qt;if(A.isDepthTexture){if(Dt=y(A.format===ki,A.type),Vt)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Dt,nt.width,nt.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,nt.width,nt.height,0,Mt,Et,null)}else if(N){Gt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Dt,nt.width,nt.height);for(let Tt=0;Tt<6;Tt++){qt=q[Tt].mipmaps;for(let ae=0;ae<qt.length;ae++){let he=qt[ae];A.format!==Ze?Mt!==null?Gt?Pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,he.width,he.height,Mt,he.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,Dt,he.width,he.height,0,he.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,0,0,he.width,he.height,Mt,Et,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae,Dt,he.width,he.height,0,Mt,Et,he.data)}}}else{if(qt=A.mipmaps,Gt&&Vt){qt.length>0&&Ft++;let Tt=Lt(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Dt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(P){Gt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,q[Tt].width,q[Tt].height,Mt,Et,q[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,q[Tt].width,q[Tt].height,0,Mt,Et,q[Tt].data);for(let ae=0;ae<qt.length;ae++){let De=qt[ae].image[Tt].image;Gt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,De.width,De.height,Mt,Et,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,Dt,De.width,De.height,0,Mt,Et,De.data)}}else{Gt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Mt,Et,q[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,Mt,Et,q[Tt]);for(let ae=0;ae<qt.length;ae++){let he=qt[ae];Gt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,0,0,Mt,Et,he.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ae+1,Dt,Mt,Et,he.image[Tt])}}}_(A)&&A.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),H.__version=R.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ct(z,A,ut,gt,R,H){let Q=r.convert(ut.format,ut.colorSpace),w=r.convert(ut.type),I=C(ut.internalFormat,Q,w,ut.normalized,ut.colorSpace),N=n.get(A),P=n.get(ut);if(P.__renderTarget=A,!N.__hasExternalTextures){let q=Math.max(1,A.width>>H),nt=Math.max(1,A.height>>H);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,H,I,q,nt,A.depth,0,Q,w,null):e.texImage2D(R,H,I,q,nt,0,Q,w,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),bt(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,R,P.__webglTexture,0,Bt(A)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,R,P.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(z,A,ut){if(i.bindRenderbuffer(i.RENDERBUFFER,z),A.depthBuffer){let gt=A.depthTexture,R=gt&&gt.isDepthTexture?gt.type:null,H=y(A.stencilBuffer,R),Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(A),H,A.width,A.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(A),H,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,H,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,z)}else{let gt=A.textures;for(let R=0;R<gt.length;R++){let H=gt[R],Q=r.convert(H.format,H.colorSpace),w=r.convert(H.type),I=C(H.internalFormat,Q,w,H.normalized,H.colorSpace);bt(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(A),I,A.width,A.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(A),I,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,I,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(z,A,ut){let gt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let R=n.get(A.depthTexture);R.__renderTarget=A;let H=gt?A.depthTexture.image[0]:A.depthTexture.image;(!R.__webglTexture||H.width!==A.width||H.height!==A.height)&&(H.width=A.width,H.height=A.height,A.depthTexture.needsUpdate=!0),gt?X(A.depthTexture,0):O(A.depthTexture,0);let Q=R.__webglTexture,w=Bt(A),I=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+ut:i.TEXTURE_2D,N=A.depthTexture.format===ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Fi)bt(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,I,Q,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,N,I,Q,0);else if(A.depthTexture.format===ki)bt(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,I,Q,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,N,I,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(z){let A=n.get(z),ut=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){let gt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){let R=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",R)};gt.addEventListener("dispose",R),A.__depthDisposeCallback=R}A.__boundDepthTexture=gt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(ut)for(let gt=0;gt<6;gt++)Ut(A.__webglFramebuffer[gt],z,gt);else z.texture.mipmaps.length>0?Ut(A.__webglFramebuffer[0],z,0):Ut(A.__webglFramebuffer,z,0);else if(ut){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=i.createRenderbuffer(),jt(A.__webglDepthbuffer[gt],z,!1);else{let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,H)}}else if(z.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),jt(A.__webglDepthbuffer,z,!1);else{let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,H)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(z,A,ut){let gt=n.get(z);A!==void 0&&Ct(gt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ut!==void 0&&Rt(z)}function kt(z){let A=z.texture,ut=n.get(z),gt=n.get(A);z.addEventListener("dispose",K),U(z);let R=z.textures,H=z.isWebGLCubeRenderTarget===!0,Q=R.length>1;if(Q||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=A.version,a.memory.textures++),H){ut.__webglFramebuffer=[];for(let w=0;w<6;w++)if(A.mipmaps.length>0){ut.__webglFramebuffer[w]=[];for(let I=0;I<A.mipmaps.length;I++)ut.__webglFramebuffer[w][I]=i.createFramebuffer()}else ut.__webglFramebuffer[w]=i.createFramebuffer()}else{if(A.mipmaps.length>0){ut.__webglFramebuffer=[];for(let w=0;w<A.mipmaps.length;w++)ut.__webglFramebuffer[w]=i.createFramebuffer()}else ut.__webglFramebuffer=i.createFramebuffer();if(Q)for(let w=0,I=R.length;w<I;w++){let N=n.get(R[w]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),a.memory.textures++)}if(z.samples>0&&bt(z)===!1){ut.__webglMultisampledFramebuffer=i.createFramebuffer(),ut.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer);for(let w=0;w<R.length;w++){let I=R[w];ut.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ut.__webglColorRenderbuffer[w]);let N=r.convert(I.format,I.colorSpace),P=r.convert(I.type),q=C(I.internalFormat,N,P,I.normalized,I.colorSpace,z.isXRRenderTarget===!0),nt=Bt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,q,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,ut.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ut.__webglDepthRenderbuffer=i.createRenderbuffer(),jt(ut.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),F(i.TEXTURE_CUBE_MAP,A);for(let w=0;w<6;w++)if(A.mipmaps.length>0)for(let I=0;I<A.mipmaps.length;I++)Ct(ut.__webglFramebuffer[w][I],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,I);else Ct(ut.__webglFramebuffer[w],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);_(A)?b(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(Q){for(let w=0,I=R.length;w<I;w++){let N=R[w],P=n.get(N),q=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(q=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,P.__webglTexture),F(q,N),Ct(ut.__webglFramebuffer,z,N,i.COLOR_ATTACHMENT0+w,q,0),_(N)&&b(q)}e.unbindTexture()}else{let w=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(w=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,gt.__webglTexture),F(w,A),A.mipmaps.length>0)for(let I=0;I<A.mipmaps.length;I++)Ct(ut.__webglFramebuffer[I],z,A,i.COLOR_ATTACHMENT0,w,I);else Ct(ut.__webglFramebuffer,z,A,i.COLOR_ATTACHMENT0,w,0);_(A)?b(w):A.mipmaps.length>0&&i.texParameteri(w,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}z.depthBuffer&&Rt(z)}function J(z){let A=z.textures;for(let ut=0,gt=A.length;ut<gt;ut++){let R=A[ut];if(_(R)&&R.mipmapsAutoUpdate===!0){let H=M(z),Q=n.get(R).__webglTexture;e.bindTexture(H,Q),b(H),e.unbindTexture()}}}let zt=[];function At(z){if(z.samples>0){if(bt(z)===!1){let A=z.textures,ut=z.width,gt=z.height,R=i.COLOR_BUFFER_BIT,H=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(z),w=A.length>1;if(w)for(let N=0;N<A.length;N++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let N=0;N<A.length;N++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[N]);let P=n.get(A[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,ut,gt,0,0,ut,gt,R,i.NEAREST),o===!0&&(zt.length=0,zt.push(i.COLOR_ATTACHMENT0+N),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&zt.push(H),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let N=0;N<A.length;N++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,Q.__webglColorRenderbuffer[N]);let P=n.get(A[N]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&o){let A=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Bt(z){return Math.min(s.maxSamples,z.samples)}function bt(z){let A=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(z){let A=a.render.frame;u.get(z)!==A&&(u.set(z,A),z.update())}function Ot(z,A){let ut=z.colorSpace,gt=z.format,R=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ut!==_s&&ut!==zn&&(_e.getTransfer(ut)===Te?(gt!==Ze||R!==an)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",ut)),A}function Lt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=pt,this.getTextureUnits=dt,this.setTextureUnits=at,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=It,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=bt,this.dispose=W}function Vx(i,t){function e(n,s=zn){let r,a=_e.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Je)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===oh)return i.RGB;if(n===Ze)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===gi)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===is)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===va)if(a===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Ko||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===xa||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===nl)return a===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===xl||n===yl||n===_l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===wl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return a===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===Tl||n===ya||n===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:Wx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,h=null,u=null,c=null,f=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new Sh,m={},x=e.getContextAttributes(),_=null,b=null,M=[],C=[],y=new ne,T=null,U=null,S=new qe;S.viewport=new ge;let V=new qe;V.viewport=new ge;let K=[S,V],it=new Ho,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let O=M[E];return O===void 0&&(O=new ur,M[E]=O),O.getTargetRaySpace()},this.getControllerGrip=function(E){let O=M[E];return O===void 0&&(O=new ur,M[E]=O),O.getGripSpace()},this.getHand=function(E){let O=M[E];return O===void 0&&(O=new ur,M[E]=O),O.getHandSpace()};function B(E){let O=C.indexOf(E.inputSource);if(O===-1)return;let G=M[O];G!==void 0&&(G.update(E.inputSource,E.frame,h||a),G.dispatchEvent({type:E.type,data:E.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",lt);for(let E=0;E<M.length;E++){let O=C[E];O!==null&&(C[E]=null,M[E].disconnect(O))}D=null,W=null,g.reset();for(let E in m)delete m[E];if(t.setRenderTarget(_),d=null,f=null,c=null,s=null,b=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),U!==null){let E=U.camera;E.fov=U.fov,E.zoom=U.zoom,E.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){l=E,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(E){h=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",lt),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,rt=null,X=null;x.depth&&(X=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=x.stencil?ki:Fi,rt=x.stencil?Cs:si);let ot={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new He(f.textureWidth,f.textureHeight,{format:Ze,type:an,depthTexture:new ii(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let G={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new He(d.framebufferWidth,d.framebufferHeight,{format:Ze,type:an,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(E){for(let O=0;O<E.removed.length;O++){let G=E.removed[O],rt=C.indexOf(G);rt>=0&&(C[rt]=null,M[rt].disconnect(G))}for(let O=0;O<E.added.length;O++){let G=E.added[O],rt=C.indexOf(G);if(rt===-1){for(let ot=0;ot<M.length;ot++)if(ot>=C.length){C.push(G),rt=ot;break}else if(C[ot]===null){C[ot]=G,rt=ot;break}if(rt===-1)break}let X=M[rt];X&&X.connect(G)}}function et(E,O){O===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(O.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let O=E.near,G=E.far;g.texture!==null&&(g.depthNear>0&&(O=g.depthNear),g.depthFar>0&&(G=g.depthFar)),it.near=V.near=S.near=O,it.far=V.far=S.far=G,(D!==it.near||W!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),D=it.near,W=it.far),it.layers.mask=E.layers.mask|6,S.layers.mask=it.layers.mask&-5,V.layers.mask=it.layers.mask&-3;let rt=E.parent,X=it.cameras;et(it,rt);for(let ot=0;ot<X.length;ot++)et(X[ot],rt);it.projectionMatrix.copy(S.projectionMatrix),it.projectionMatrixInverse.copy(S.projectionMatrixInverse),U===null&&E.isPerspectiveCamera&&(U={camera:E,fov:E.fov,zoom:E.zoom}),pt(E,it,rt)};function pt(E,O,G){G===null?E.matrix.copy(O.matrixWorld):(E.matrix.copy(G.matrixWorld),E.matrix.invert(),E.matrix.multiply(O.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(O.projectionMatrix),E.projectionMatrixInverse.copy(O.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=yo*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(E){o=E,f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(it)},this.getCameraTexture=function(E){return m[E]};let dt=null;function at(E,O){if(u=O.getViewerPose(h||a),p=O,u!==null){let G=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;G.length!==it.cameras.length&&(it.cameras.length=0,rt=!0);for(let mt=0;mt<G.length;mt++){let F=G[mt],ht=null;if(d!==null)ht=d.getViewport(F);else{let ct=c.getViewSubImage(f,F);ht=ct.viewport,mt===0&&(t.setRenderTargetTextures(b,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(b))}let Z=K[mt];Z===void 0&&(Z=new qe,Z.layers.enable(mt),Z.viewport=new ge,K[mt]=Z),Z.matrix.fromArray(F.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(F.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ht.x,ht.y,ht.width,ht.height),mt===0&&(it.matrix.copy(Z.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),rt===!0&&it.cameras.push(Z)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){c=n.getBinding();let mt=c.getDepthInformation(G[0]);mt&&mt.isValid&&mt.texture&&g.init(mt,s.renderState)}if(X&&X.includes("camera-access")&&v){t.state.unbindTexture(),c=n.getBinding();for(let mt=0;mt<G.length;mt++){let F=G[mt].camera;if(F){let ht=m[F];ht||(ht=new na,m[F]=ht);let Z=c.getCameraImage(F);ht.sourceTexture=Z}}}}for(let G=0;G<M.length;G++){let rt=C[G],X=M[G];rt!==null&&X!==void 0&&X.update(rt,O,h||a)}dt&&dt(E,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),p=null}let k=new Ld;k.setAnimationLoop(at),this.setAnimationLoop=function(E){dt=E},this.dispose=function(){}}},qx=new ve,Gd=new fe;Gd.set(-1,0,0,0,1,0,0,0,1);function Xx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,dh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,_,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),c(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,x,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,b=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,t,e,n){let s={},r={};function a(x,_){let b=_.program;n.uniformBlockBinding(x,b,s[x.id])}function l(x,_){let b=s[x.id];b===void 0&&(p(x),b=o(x),s[x.id]=b,x.addEventListener("dispose",g));let M=_.program;n.updateUBOMapping(x,M);let C=t.render.frame;r[x.id]!==C&&(h(x),r[x.id]=C)}function o(x){let _=i.createBuffer(),b=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,M),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function h(x){let _=s[x.id],b=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let C=0,y=b.length;C<y;C++){let T=b[C];if(Array.isArray(T))for(let U=0,S=T.length;U<S;U++)u(T[U],C,U,M);else u(T,C,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,_,b,M){if(f(x,_,b,M)===!0){let C=x.__offset,y=x.value;if(Array.isArray(y)){let T=0;for(let U=0;U<y.length;U++){let S=y[U],V=v(S,!0);c(S,x.__data,T),T+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else c(y,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,x.__data)}}function c(x,_,b){typeof x=="number"||typeof x=="boolean"?_[b]=x:x.isMatrix3?(_[b]=x.elements[0],_[b+1]=x.elements[1],_[b+2]=x.elements[2],_[b+3]=0,_[b+4]=x.elements[3],_[b+5]=x.elements[4],_[b+6]=x.elements[5],_[b+7]=0,_[b+8]=x.elements[6],_[b+9]=x.elements[7],_[b+10]=x.elements[8],_[b+11]=0):ArrayBuffer.isView(x)?_.set(x.subarray(0,_.length-b),b):x.toArray(_,b)}function f(x,_,b,M){let C=x.value,y=_+"_"+b;if(Array.isArray(C)){M[y]===void 0&&(M[y]=[]);let T=M[y],U=!1;for(let S=0;S<C.length;S++)d(C[S],T,S)===!0&&(U=!0);return U}return d(C,M,y)}function d(x,_,b){if(_[b]===void 0)return typeof x=="number"||typeof x=="boolean"?_[b]=x:ArrayBuffer.isView(x)?_[b]=x.slice():_[b]=x.clone(),!0;{let M=_[b];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return _[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function p(x){let _=x.uniforms,b=0,M=16;for(let y=0,T=_.length;y<T;y++){let U=Array.isArray(_[y])?_[y]:[_[y]];for(let S=0,V=U.length;S<V;S++){let K=U[S],it=Array.isArray(K.value)?K.value:[K.value],D=Array.isArray(_[y])||Array.isArray(K.value),W=b;for(let j=0,lt=it.length;j<lt;j++){let et=it[j],pt=v(et,D),dt=b%M,at=dt%pt.boundary,k=dt+at;b+=at,k!==0&&M-k<pt.storage&&(b+=M-k),j===0&&(W=b),b+=pt.storage}let B=K.type==="int"?Int32Array:K.type==="uint"?Uint32Array:Float32Array;K.__data=new B((b-W)/Float32Array.BYTES_PER_ELEMENT),K.__offset=W}}let C=b%M;return C>0&&(b+=M-C),x.__size=b,x.__cache={},this}function v(x,_){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",x),_===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(x){let _=x.target;_.removeEventListener("dispose",g),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:l,dispose:m}}var Zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function jx(){return vi===null&&(vi=new Tn(Zx,16,16,is,Je),vi.name="DFG_LUT",vi.minFilter=Ae,vi.magFilter=Ae,vi.wrapS=wn,vi.wrapT=wn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Il=class{constructor(t={}){let{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,g=new Set([jo,Zo,Yo]),m=new Set([an,si,_r,Cs,qo,Xo]),x=new Uint32Array(4),_=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},M=null,C=null,y=[],T=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,V=!1,K=null,it=null,D=null,W=null;this._outputColorSpace=Le;let B=0,j=0,lt=null,et=-1,pt=null,dt=new ge,at=new ge,k=null,E=new se(0),O=0,G=e.width,rt=e.height,X=1,ot=null,vt=null,mt=new ge(0,0,G,rt),F=new ge(0,0,G,rt),ht=!1,Z=new di,ct=new So,Y=!1,yt=!1,Ct=new ve,jt=new ft,Ut=new ge,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function kt(){return lt===null?X:1}let J=n;function zt(L,st){return e.getContext(L,st)}let At,Bt,bt,Nt,Ot,Lt,z,A,ut,gt,R,H,Q,w,I,N,P,q,nt,Mt,Et,Dt,Gt;try{let L={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),J===null){let st="webgl2";if(J=zt(st,L),J===null)throw zt(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(L){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),le("WebGLRenderer: "+L.message),L}function Vt(){At=new ov(J),At.init(),Et=new Vx(J,At),Bt=new jg(J,At,t,Et),bt=new Hx(J,At),Bt.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),it=J.createFramebuffer(),D=J.createFramebuffer(),W=J.createFramebuffer(),Nt=new hv(J),Ot=new Ax,Lt=new Gx(J,At,bt,Ot,Bt,Et,Nt),z=new av(S),A=new dm(J),Dt=new Yg(J,A),ut=new lv(J,A,Nt,Dt),gt=new dv(J,ut,A,Dt,Nt),q=new uv(J,Bt,Lt),I=new Jg(Ot),R=new Ex(S,z,At,Bt,Dt,I),H=new Xx(S,Ot),Q=new Cx,w=new Fx(At),P=new Xg(S,z,bt,gt,p,o),N=new zx(S,gt,Bt),Gt=new Yx(J,Nt,Bt,bt),nt=new Zg(J,At,Nt),Mt=new cv(J,At,Nt),Nt.programs=R.programs,S.capabilities=Bt,S.extensions=At,S.properties=Ot,S.renderLists=Q,S.shadowMap=N,S.state=bt,S.info=Nt}v!==an&&(U=new pv(v,e.width,e.height,l,s,r));let Pt=new Th(S,J);this.xr=Pt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let L=At.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=At.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(G,rt,!1))},this.getSize=function(L){return L.set(G,rt)},this.setSize=function(L,st,St=!0){if(Pt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,rt=st,e.width=Math.floor(L*X),e.height=Math.floor(st*X),St===!0&&(e.style.width=L+"px",e.style.height=st+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,L,st)},this.getDrawingBufferSize=function(L){return L.set(G*X,rt*X).floor()},this.setDrawingBufferSize=function(L,st,St){G=L,rt=st,X=St,e.width=Math.floor(L*St),e.height=Math.floor(st*St),this.setViewport(0,0,L,st)},this.setEffects=function(L){if(v===an){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let st=0;st<L.length;st++)if(L[st].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(dt)},this.getViewport=function(L){return L.copy(mt)},this.setViewport=function(L,st,St,xt){L.isVector4?mt.set(L.x,L.y,L.z,L.w):mt.set(L,st,St,xt),bt.viewport(dt.copy(mt).multiplyScalar(kt()).round())},this.getScissor=function(L){return L.copy(F)},this.setScissor=function(L,st,St,xt){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,st,St,xt),bt.scissor(at.copy(F).multiplyScalar(kt()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(L){bt.setScissorTest(ht=L)},this.setOpaqueSort=function(L){ot=L},this.setTransparentSort=function(L){vt=L},this.getClearColor=function(L){return L.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(L=!0,st=!0,St=!0){let xt=0;if(L){let wt=!1;if(lt!==null){let Wt=lt.texture.format;wt=g.has(Wt)}if(wt){let Wt=lt.texture.type,Jt=m.has(Wt),Ht=P.getClearColor(),Yt=P.getClearAlpha(),te=Ht.r,ue=Ht.g,xe=Ht.b;Jt?(x[0]=te,x[1]=ue,x[2]=xe,x[3]=Yt,J.clearBufferuiv(J.COLOR,0,x)):(_[0]=te,_[1]=ue,_[2]=xe,_[3]=Yt,J.clearBufferiv(J.COLOR,0,_))}else xt|=J.COLOR_BUFFER_BIT}st&&(xt|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),St&&(xt|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),xt!==0&&J.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),K=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),P.dispose(),Q.dispose(),w.dispose(),Lt.dispose(),Ot.dispose(),z.dispose(),gt.dispose(),ut.dispose(),Dt.dispose(),Gt.dispose(),R.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",ze),Pt.removeEventListener("sessionend",ds),Ee.stop()};function Ft(L){L.preventDefault(),qr("WebGLRenderer: Context Lost."),V=!0}function qt(){qr("WebGLRenderer: Context Restored."),V=!1;let L=Nt.autoReset,st=N.enabled,St=N.autoUpdate,xt=N.needsUpdate,wt=N.type;Vt(),Nt.autoReset=L,N.enabled=st,N.autoUpdate=St,N.needsUpdate=xt,N.type=wt}function Tt(L){le("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ae(L){let st=L.target;st.removeEventListener("dispose",ae),he(st)}function he(L){De(L),Ot.remove(L)}function De(L){let st=Ot.get(L).programs;st!==void 0&&(st.forEach(function(St){R.releaseProgram(St)}),L.isShaderMaterial&&R.releaseShaderCache(L))}this.renderBufferDirect=function(L,st,St,xt,wt,Wt){st===null&&(st=Rt);let Jt=wt.isMesh&&wt.matrixWorld.determinantAffine()<0,Ht=dc(L,st,St,xt,wt);bt.setMaterial(xt,Jt);let Yt=St.index,te=1;if(xt.wireframe===!0){if(Yt=ut.getWireframeAttribute(St),Yt===void 0)return;te=2}let ue=St.drawRange,xe=St.attributes.position,Kt=ue.start*te,ye=(ue.start+ue.count)*te;Wt!==null&&(Kt=Math.max(Kt,Wt.start*te),ye=Math.min(ye,(Wt.start+Wt.count)*te)),Yt!==null?(Kt=Math.max(Kt,0),ye=Math.min(ye,Yt.count)):xe!=null&&(Kt=Math.max(Kt,0),ye=Math.min(ye,xe.count));let We=ye-Kt;if(We<0||We===1/0)return;Dt.setup(wt,xt,Ht,St,Yt);let Ie,Ce=nt;if(Yt!==null&&(Ie=A.get(Yt),Ce=Mt,Ce.setIndex(Ie)),wt.isMesh)xt.wireframe===!0?(bt.setLineWidth(xt.wireframeLinewidth*kt()),Ce.setMode(J.LINES)):Ce.setMode(J.TRIANGLES);else if(wt.isLine){let dn=xt.linewidth;dn===void 0&&(dn=1),bt.setLineWidth(dn*kt()),wt.isLineSegments?Ce.setMode(J.LINES):wt.isLineLoop?Ce.setMode(J.LINE_LOOP):Ce.setMode(J.LINE_STRIP)}else wt.isPoints?Ce.setMode(J.POINTS):wt.isSprite&&Ce.setMode(J.TRIANGLES);if(wt.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ce.renderMultiDraw(wt._multiDrawStarts,wt._multiDrawCounts,wt._multiDrawCount);else{let dn=wt._multiDrawStarts,ee=wt._multiDrawCounts,_n=wt._multiDrawCount,Se=Yt?A.get(Yt).bytesPerElement:1,ps=Ot.get(xt).currentProgram.getUniforms();for(let fn=0;fn<_n;fn++)ps.setValue(J,"_gl_DrawID",fn),Ce.render(dn[fn]/Se,ee[fn])}else if(wt.isInstancedMesh)Ce.renderInstances(Kt,We,wt.count);else if(St.isInstancedBufferGeometry){let dn=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,ee=Math.min(St.instanceCount,dn);Ce.renderInstances(Kt,We,ee)}else Ce.render(Kt,We)};function In(L,st,St,xt){K!==null&&L.isNodeMaterial&&K.setObject(xt,L),Y===!0&&I.setState(L,St,!1),L.transparent===!0&&L.side===Ye&&L.forceSinglePass===!1?(L.side=sn,L.needsUpdate=!0,Nn(L,st,xt),L.side=ns,L.needsUpdate=!0,Nn(L,st,xt),L.side=Ye):Nn(L,st,xt)}this.compile=function(L,st,St=null){St===null&&(St=L),K!==null&&K.renderStart(L,st,St),C=w.get(St),C.init(st),T.push(C),St.traverseVisible(function(wt){wt.isLight&&wt.layers.test(st.layers)&&(C.pushLight(wt),wt.castShadow&&C.pushShadow(wt))}),L!==St&&L.traverseVisible(function(wt){wt.isLight&&wt.layers.test(st.layers)&&(C.pushLight(wt),wt.castShadow&&C.pushShadow(wt))}),C.setupLights(),K!==null&&K.updateLights(C.state.lightsArray),yt=this.localClippingEnabled,Y=I.init(this.clippingPlanes,yt),Y===!0&&I.setGlobalState(this.clippingPlanes,st),K!==null&&N.render(C.state.shadowsArray,St,st);let xt=new Set;return L.traverse(function(wt){if(!(wt.isMesh||wt.isPoints||wt.isLine||wt.isSprite))return;let Wt=wt.material;if(Wt)if(Array.isArray(Wt))for(let Jt=0;Jt<Wt.length;Jt++){let Ht=Wt[Jt];In(Ht,St,st,wt),xt.add(Ht)}else In(Wt,St,st,wt),xt.add(Wt)}),C=T.pop(),K!==null&&K.renderEnd(),xt},this.compileAsync=function(L,st,St=null){let xt=this.compile(L,st,St);return new Promise(wt=>{function Wt(){if(xt.forEach(function(Jt){let Yt=Ot.get(Jt).currentProgram;(Yt===void 0||Yt.isReady())&&xt.delete(Jt)}),xt.size===0){wt(L);return}setTimeout(Wt,10)}At.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let Ln=null;function Sn(L){Ln&&Ln(L)}function ze(){Ee.stop()}function ds(){Ee.start()}let Ee=new Ld;Ee.setAnimationLoop(Sn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(L){Ln=L,Pt.setAnimationLoop(L),L===null?Ee.stop():Ee.start()},Pt.addEventListener("sessionstart",ze),Pt.addEventListener("sessionend",ds),this.render=function(L,st){if(st!==void 0&&st.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(L,st);let St=Pt.enabled===!0&&Pt.isPresenting===!0,xt=U!==null&&(lt===null||St)&&U.begin(S,lt);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(st),st=Pt.getCamera()),L.isScene===!0&&L.onBeforeRender(S,L,st,lt),C=w.get(L,T.length),C.init(st),C.state.textureUnits=Lt.getTextureUnits(),T.push(C),Ct.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),st.isArrayCamera?ct.setFromArrayCamera(st):Z.setFromProjectionMatrix(Ct,Wn,st.reversedDepth),yt=this.localClippingEnabled,Y=I.init(this.clippingPlanes,yt),M=Q.get(L,y.length),M.init(),y.push(M),this.info.render.frame++,Pt.enabled===!0&&Pt.isPresenting===!0){let Jt=S.xr.getDepthSensingMesh();Jt!==null&&Ve(Jt,st,-1/0,S.sortObjects)}Ve(L,st,0,S.sortObjects),M.finish(),K!==null&&K.updateLights(C.state.lightsArray),S.sortObjects===!0&&M.sort(ot,vt),It=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,It&&P.addToRenderList(M,L),this.info.autoReset===!0&&this.info.reset(),Y===!0&&I.beginShadows();let wt=C.state.shadowsArray;if(N.render(wt,L,st),Y===!0&&I.endShadows(),(xt&&U.hasRenderPass())===!1){let Jt=M.opaque,Ht=M.transmissive;if(C.setupLights(),st.isArrayCamera){let Yt=st.cameras;if(Ht.length>0)for(let te=0,ue=Yt.length;te<ue;te++){let xe=Yt[te];Dn(Jt,Ht,L,xe)}It&&P.render(L);for(let te=0,ue=Yt.length;te<ue;te++){let xe=Yt[te];Jn(M,L,xe,xe.viewport)}}else Ht.length>0&&Dn(Jt,Ht,L,st),It&&P.render(L),Jn(M,L,st)}lt!==null&&j===0&&(Lt.updateMultisampleRenderTarget(lt),Lt.updateRenderTargetMipmap(lt)),xt&&U.end(S),L.isScene===!0&&L.onAfterRender(S,L,st),Dt.resetDefaultState(),et=-1,pt=null,T.pop(),T.length>0?(C=T[T.length-1],Lt.setTextureUnits(C.state.textureUnits),Y===!0&&I.setGlobalState(S.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,K!==null&&K.renderEnd()};function Ve(L,st,St,xt){if(L.visible===!1)return;if(L.layers.test(st.layers)){if(L.isGroup)St=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(st);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){let Jt=st.isArrayCamera?ct:Z;if(!L.frustumCulled||L.intersectsFrustum(Jt)){xt&&Ut.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ct);let Ht=gt.update(L),Yt=L.material;Yt.visible&&M.push(L,Ht,Yt,St,Ut.z,null,st)}}else if(L.isMesh||L.isLine||L.isPoints){let Jt=st.isArrayCamera?ct:Z;if(!L.frustumCulled||L.intersectsFrustum(Jt)){let Ht=gt.update(L),Yt=L.material;if(xt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ut.copy(L.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Ut.copy(Ht.boundingSphere.center)),Ut.applyMatrix4(L.matrixWorld).applyMatrix4(Ct)),Array.isArray(Yt)){let te=Ht.groups;for(let ue=0,xe=te.length;ue<xe;ue++){let Kt=te[ue],ye=Yt[Kt.materialIndex];ye&&ye.visible&&M.push(L,Ht,ye,St,Ut.z,Kt,st)}}else Yt.visible&&M.push(L,Ht,Yt,St,Ut.z,null,st)}}}let Wt=L.children;for(let Jt=0,Ht=Wt.length;Jt<Ht;Jt++)Ve(Wt[Jt],st,St,xt)}function Jn(L,st,St,xt){let{opaque:wt,transmissive:Wt,transparent:Jt}=L;C.setupLightsView(St),Y===!0&&I.setGlobalState(S.clippingPlanes,St),xt&&bt.viewport(dt.copy(xt)),wt.length>0&&Hi(wt,st,St),Wt.length>0&&Hi(Wt,st,St),Jt.length>0&&Hi(Jt,st,St),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Dn(L,st,St,xt){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[xt.id]===void 0){let Kt=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[xt.id]=new He(1,1,{generateMipmaps:!0,type:Kt?Je:an,minFilter:rn,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Wt=C.state.transmissionRenderTarget[xt.id],Jt=xt.viewport||dt;Wt.setSize(Jt.z*S.transmissionResolutionScale,Jt.w*S.transmissionResolutionScale);let Ht=S.getRenderTarget(),Yt=S.getActiveCubeFace(),te=S.getActiveMipmapLevel();S.setRenderTarget(Wt),S.getClearColor(E),O=S.getClearAlpha(),O<1&&S.setClearColor(16777215,.5),S.clear(),It&&P.render(St);let ue=S.toneMapping;S.toneMapping=mi;let xe=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),C.setupLightsView(xt),Y===!0&&I.setGlobalState(S.clippingPlanes,xt),Hi(L,St,xt),Lt.updateMultisampleRenderTarget(Wt),Lt.updateRenderTargetMipmap(Wt),At.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ye=0,We=st.length;ye<We;ye++){let Ie=st[ye],{object:Ce,geometry:dn,material:ee,group:_n}=Ie;if(ee.side===Ye&&Ce.layers.test(xt.layers)){let Se=ee.side;ee.side=sn,ee.needsUpdate=!0,Pr(Ce,St,xt,dn,ee,_n),ee.side=Se,ee.needsUpdate=!0,Kt=!0}}Kt===!0&&(Lt.updateMultisampleRenderTarget(Wt),Lt.updateRenderTargetMipmap(Wt))}S.setRenderTarget(Ht,Yt,te),S.setClearColor(E,O),xe!==void 0&&(xt.viewport=xe),S.toneMapping=ue}function Hi(L,st,St){let xt=st.isScene===!0?st.overrideMaterial:null;for(let wt=0,Wt=L.length;wt<Wt;wt++){let Jt=L[wt],{object:Ht,geometry:Yt,group:te}=Jt,ue=Jt.material;ue.allowOverride===!0&&xt!==null&&(ue=xt),Ht.layers.test(St.layers)&&Pr(Ht,st,St,Yt,ue,te)}}function Pr(L,st,St,xt,wt,Wt){K!==null&&wt.isNodeMaterial&&K.setObject(L,wt),L.onBeforeRender(S,st,St,xt,wt,Wt),L.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),wt.onBeforeRender(S,st,St,xt,L,Wt),wt.transparent===!0&&wt.side===Ye&&wt.forceSinglePass===!1?(wt.side=sn,wt.needsUpdate=!0,S.renderBufferDirect(St,st,xt,wt,L,Wt),wt.side=ns,wt.needsUpdate=!0,S.renderBufferDirect(St,st,xt,wt,L,Wt),wt.side=Ye):S.renderBufferDirect(St,st,xt,wt,L,Wt),L.onAfterRender(S,st,St,xt,wt,Wt)}function Ir(L){let st=0;for(let St of L)St.texture!==null&&st++;return st}function Nn(L,st,St){st.isScene!==!0&&(st=Rt);let xt=Ot.get(L),wt=C.state.lights,Wt=C.state.shadowsArray,Jt=wt.state.version,Ht=R.getParameters(L,wt.state,Wt,st,St,C.state.lightProbeGridArray),Yt=R.getProgramCacheKey(Ht),te=xt.programs;xt.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?st.environment:null,xt.fog=st.fog;let ue=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;xt.envMap=z.get(L.envMap||xt.environment,ue),xt.envMapRotation=xt.environment!==null&&L.envMap===null?st.environmentRotation:L.envMapRotation,te===void 0&&(L.addEventListener("dispose",ae),te=new Map,xt.programs=te,xt.programVariants=new Map);let xe=te.get(Yt);if(xe!==void 0){if(xt.currentProgram===xe&&xt.lightsStateVersion===Jt)return Vi(L,Ht),xe}else Ht.uniforms=R.getUniforms(L),K!==null&&L.isNodeMaterial&&K.build(L,St,Ht),L.onBeforeCompile(Ht,S),xe=R.acquireProgram(Ht,Yt),te.set(Yt,xe),xt.uniforms=Ht.uniforms;let Kt=xt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Kt.clippingPlanes=I.uniform),Vi(L,Ht),xt.needsLights=Xt(L),xt.lightsStateVersion=Jt,xt.needsLights&&(Kt.ambientLightColor.value=wt.state.ambient,Kt.lightProbe.value=wt.state.probe,Kt.sunLights.value=wt.state.sun,Kt.sunLightShadows.value=wt.state.sunShadow,Kt.directionalLights.value=wt.state.directional,Kt.directionalLightShadows.value=wt.state.directionalShadow,Kt.spotLights.value=wt.state.spot,Kt.spotLightShadows.value=wt.state.spotShadow,Kt.rectAreaLights.value=wt.state.rectArea,Kt.ltc_1.value=wt.state.rectAreaLTC1,Kt.ltc_2.value=wt.state.rectAreaLTC2,Kt.pointLights.value=wt.state.point,Kt.pointLightShadows.value=wt.state.pointShadow,Kt.hemisphereLights.value=wt.state.hemi,Kt.sunShadowMatrix.value=wt.state.sunShadowMatrix,Kt.sunShadowCascade.value=wt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=wt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=wt.state.spotLightMatrix,Kt.spotLightMap.value=wt.state.spotLightMap,Kt.pointShadowMatrix.value=wt.state.pointShadowMatrix),xt.numLightProbeGrids=Ir(C.state.lightProbeGridArray),xt.currentProgram=xe,xt.uniformsList=null,xe}function Gi(L,st,St,xt,wt){let Wt=Ot.get(L),Jt=Wt.currentProgram.id+","+xt+","+wt,Ht=Wt.programVariants.get(Jt);return Ht===void 0?(Ht=Nn(L,st,St),Wt.programVariants.set(Jt,Ht)):(Wt.currentProgram=Ht,Wt.uniformsList=null,Wt.outputColorSpace=xt,Wt.toneMapping=wt),Ht}function fs(L){if(L.uniformsList===null){let st=L.currentProgram.getUniforms();L.uniformsList=br.seqWithValue(st.seq,L.uniforms)}return L.uniformsList}function Vi(L,st){let St=Ot.get(L);St.outputColorSpace=st.outputColorSpace,St.batching=st.batching,St.batchingColor=st.batchingColor,St.instancing=st.instancing,St.instancingColor=st.instancingColor,St.instancingMorph=st.instancingMorph,St.skinning=st.skinning,St.morphTargets=st.morphTargets,St.morphNormals=st.morphNormals,St.morphColors=st.morphColors,St.morphTargetsCount=st.morphTargetsCount,St.numClippingPlanes=st.numClippingPlanes,St.numIntersection=st.numClipIntersection,St.vertexAlphas=st.vertexAlphas,St.vertexTangents=st.vertexTangents,St.toneMapping=st.toneMapping}function dc(L,st,St,xt,wt){st.isScene!==!0&&(st=Rt),Lt.resetTextureUnits();let Wt=st.fog,Jt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?st.environment:null,Ht=lt===null?S.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:_e.workingColorSpace,Yt=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap,te=z.get(xt.envMap||Jt,Yt),ue=xt.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,xe=!!St.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Kt=!!St.morphAttributes.position,ye=!!St.morphAttributes.normal,We=!!St.morphAttributes.color,Ie=mi;xt.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ie=S.toneMapping);let Ce=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,dn=Ce!==void 0?Ce.length:0,ee=Ot.get(xt),_n=C.state.lights;if(Y===!0&&(yt===!0||L!==pt)){let Fe=L===pt&&xt.id===et;I.setState(xt,L,Fe)}let Se=!1,ps=!1;xt.version===ee.__version?ee.needsLights&&ee.lightsStateVersion!==_n.state.version||wt.isBatchedMesh&&ee.batching===!1||!wt.isBatchedMesh&&ee.batching===!0||wt.isBatchedMesh&&ee.batchingColor===!0&&wt._colorsTexture===null||wt.isBatchedMesh&&ee.batchingColor===!1&&wt._colorsTexture!==null||wt.isInstancedMesh&&ee.instancing===!1||!wt.isInstancedMesh&&ee.instancing===!0||wt.isSkinnedMesh&&ee.skinning===!1||!wt.isSkinnedMesh&&ee.skinning===!0||wt.isInstancedMesh&&ee.instancingColor===!0&&wt.instanceColor===null||wt.isInstancedMesh&&ee.instancingColor===!1&&wt.instanceColor!==null||wt.isInstancedMesh&&ee.instancingMorph===!0&&wt.morphTexture===null||wt.isInstancedMesh&&ee.instancingMorph===!1&&wt.morphTexture!==null||ee.envMap!==te||xt.fog===!0&&ee.fog!==Wt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==I.numPlanes||ee.numIntersection!==I.numIntersection)||ee.vertexAlphas!==ue||ee.vertexTangents!==xe||ee.morphTargets!==Kt||ee.morphNormals!==ye||ee.morphColors!==We||ee.morphTargetsCount!==dn||ee.numLightProbeGrids!==Ir(C.state.lightProbeGridArray)?Se=!0:(ee.outputColorSpace!==Ht||ee.toneMapping!==Ie)&&(ps=!0):(Se=!0,ee.__version=xt.version);let fn=ee.currentProgram;(Se===!0||ps===!0)&&(fn=ps===!0?Gi(xt,st,wt,Ht,Ie):Nn(xt,st,wt),K&&xt.isNodeMaterial&&K.onUpdateProgram(xt,fn,ee));let Ua=!1,Wi=!1,ms=!1,we=fn.getUniforms(),ln=ee.uniforms;if(bt.useProgram(fn.program)&&(Ua=!0,Wi=!0,ms=!0),xt.id!==et&&(et=xt.id,Wi=!0),Ua||pt!==L){bt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),we.setValue(J,"projectionMatrix",L.projectionMatrix),we.setValue(J,"viewMatrix",L.matrixWorldInverse);let en=we.map.cameraPosition;en!==void 0&&en.setValue(J,jt.setFromMatrixPosition(L.matrixWorld)),Bt.logarithmicDepthBuffer&&we.setValue(J,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&we.setValue(J,"isOrthographic",L.isOrthographicCamera===!0),pt!==L&&(pt=L,Wi=!0,ms=!0)}if(ee.needsLights&&(_n.state.sunShadowMap.length>0&&we.setValue(J,"sunShadowMap",_n.state.sunShadowMap,Lt),_n.state.directionalShadowMap.length>0&&we.setValue(J,"directionalShadowMap",_n.state.directionalShadowMap,Lt),_n.state.spotShadowMap.length>0&&we.setValue(J,"spotShadowMap",_n.state.spotShadowMap,Lt),_n.state.pointShadowMap.length>0&&we.setValue(J,"pointShadowMap",_n.state.pointShadowMap,Lt)),wt.isSkinnedMesh){we.setOptional(J,wt,"bindMatrix"),we.setOptional(J,wt,"bindMatrixInverse");let Fe=wt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(J,"boneTexture",Fe.boneTexture,Lt))}wt.isBatchedMesh&&(we.setOptional(J,wt,"batchingTexture"),we.setValue(J,"batchingTexture",wt._matricesTexture,Lt),we.setOptional(J,wt,"batchingIdTexture"),we.setValue(J,"batchingIdTexture",wt._indirectTexture,Lt),we.setOptional(J,wt,"batchingColorTexture"),wt._colorsTexture!==null&&we.setValue(J,"batchingColorTexture",wt._colorsTexture,Lt));let Kn=St.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&q.update(wt,St,fn),(Wi||ee.receiveShadow!==wt.receiveShadow)&&(ee.receiveShadow=wt.receiveShadow,we.setValue(J,"receiveShadow",wt.receiveShadow)),(xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial)&&xt.envMap===null&&st.environment!==null&&(ln.envMapIntensity.value=st.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=jx()),Wi){if(we.setValue(J,"toneMappingExposure",S.toneMappingExposure),ee.needsLights&&Lr(ln,ms),Wt&&xt.fog===!0&&H.refreshFogUniforms(ln,Wt),H.refreshMaterialUniforms(ln,xt,X,rt,C.state.transmissionRenderTarget[L.id]),ee.needsLights&&ee.numLightProbeGrids>0){let Fe=b,en=0;for(let Ti of C.state.lightProbeGridArray)Ti.texture!==null&&(Fe.textures[en]=Ti.texture,Fe.min[en]=Ti.boundingBox.min,Fe.max[en]=Ti.boundingBox.max,Fe.resolution[en]=Ti.resolution,en++);for(let Ti in Fe)Fe[Ti].length=en;ln.probesSH.value=Fe.textures,ln.probesMin.value=Fe.min,ln.probesMax.value=Fe.max,ln.probesResolution.value=Fe.resolution}br.upload(J,fs(ee),ln,Lt)}if(xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(br.upload(J,fs(ee),ln,Lt),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&we.setValue(J,"center",wt.center),we.setValue(J,"modelViewMatrix",wt.modelViewMatrix),we.setValue(J,"normalMatrix",wt.normalMatrix),we.setValue(J,"modelMatrix",wt.matrixWorld),xt.uniformsGroups!==void 0){let Fe=xt.uniformsGroups;for(let en=0,Ti=Fe.length;en<Ti;en++){let Xh=Fe[en];Gt.update(Xh,fn),Gt.bind(Xh,fn)}}return fn}function Lr(L,st){L.ambientLightColor.needsUpdate=st,L.lightProbe.needsUpdate=st,L.sunLights.needsUpdate=st,L.sunLightShadows.needsUpdate=st,L.directionalLights.needsUpdate=st,L.directionalLightShadows.needsUpdate=st,L.pointLights.needsUpdate=st,L.pointLightShadows.needsUpdate=st,L.spotLights.needsUpdate=st,L.spotLightShadows.needsUpdate=st,L.rectAreaLights.needsUpdate=st,L.hemisphereLights.needsUpdate=st}function Xt(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(L,st,St){let xt=Ot.get(L);xt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,xt.__autoAllocateDepthBuffer===!1&&(xt.__useRenderToTexture=!1),Ot.get(L.texture).__webglTexture=st,Ot.get(L.depthTexture).__webglTexture=xt.__autoAllocateDepthBuffer?void 0:St,xt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,st){let St=Ot.get(L);St.__webglFramebuffer=st,St.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(L,st=0,St=0){lt=L,B=st,j=St;let xt=null,wt=!1,Wt=!1;if(L){let Ht=Ot.get(L);if(Ht.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(J.FRAMEBUFFER,Ht.__webglFramebuffer),dt.copy(L.viewport),at.copy(L.scissor),k=L.scissorTest,bt.viewport(dt),bt.scissor(at),bt.setScissorTest(k),et=-1;return}else if(Ht.__webglFramebuffer===void 0)Lt.setupRenderTarget(L);else if(Ht.__hasExternalTextures)Lt.rebindTextures(L,Ot.get(L.texture).__webglTexture,Ot.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ue=L.depthTexture;if(Ht.__boundDepthTexture!==ue){if(ue!==null&&Ot.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(L)}}let Yt=L.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Wt=!0);let te=Ot.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(te[st])?xt=te[st][St]:xt=te[st],wt=!0):L.samples>0&&Lt.useMultisampledRTT(L)===!1?xt=Ot.get(L).__webglMultisampledFramebuffer:Array.isArray(te)?xt=te[St]:xt=te,dt.copy(L.viewport),at.copy(L.scissor),k=L.scissorTest}else dt.copy(mt).multiplyScalar(X).floor(),at.copy(F).multiplyScalar(X).floor(),k=ht;if(St!==0&&(xt=it),bt.bindFramebuffer(J.FRAMEBUFFER,xt)&&bt.drawBuffers(L,xt),bt.viewport(dt),bt.scissor(at),bt.setScissorTest(k),wt){let Ht=Ot.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ht.__webglTexture,St)}else if(Wt){let Ht=st;for(let Yt=0;Yt<L.textures.length;Yt++){let te=Ot.get(L.textures[Yt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Yt,te.__webglTexture,St,Ht)}}else if(L!==null&&St!==0){let Ht=Ot.get(L.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ht.__webglTexture,St)}et=-1};function pe(L){let st=Ot.get(L);return(st.__readFormat!==L.format||st.__readType!==L.type)&&(st.__readFormat=L.format,st.__readType=L.type,st.__formatReadable=Bt.textureFormatReadable(L.format),st.__typeReadable=Bt.textureTypeReadable(L.type)),st}this.readRenderTargetPixels=function(L,st,St,xt,wt,Wt,Jt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Ot.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Jt!==void 0&&(Yt=Yt[Jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt){bt.bindFramebuffer(J.FRAMEBUFFER,Yt);try{let te=L.textures[Ht],ue=te.format,xe=te.type;L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ht);let Kt=pe(te);if(Kt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=L.width-xt&&St>=0&&St<=L.height-wt&&J.readPixels(st,St,xt,wt,Et.convert(ue),Et.convert(xe),Wt)}finally{let te=lt!==null?Ot.get(lt).__webglFramebuffer:null;bt.bindFramebuffer(J.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(L,st,St,xt,wt,Wt,Jt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Ot.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Jt!==void 0&&(Yt=Yt[Jt],Array.isArray(Yt)&&(Yt=Yt[0])),Yt)if(st>=0&&st<=L.width-xt&&St>=0&&St<=L.height-wt){bt.bindFramebuffer(J.FRAMEBUFFER,Yt);let te=L.textures[Ht],ue=te.format,xe=te.type;L.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ht);let Kt=pe(te);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,ye),J.bufferData(J.PIXEL_PACK_BUFFER,Wt.byteLength,J.STREAM_READ),J.readPixels(st,St,xt,wt,Et.convert(ue),Et.convert(xe),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let We=lt!==null?Ot.get(lt).__webglFramebuffer:null;bt.bindFramebuffer(J.FRAMEBUFFER,We);let Ie=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await ed(J,Ie,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,ye),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Wt),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(ye),J.deleteSync(Ie),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,st=null,St=0){let xt=Math.pow(2,-St),wt=Math.floor(L.image.width*xt),Wt=Math.floor(L.image.height*xt),Jt=st!==null?st.x:0,Ht=st!==null?st.y:0;Lt.setTexture2D(L,0),J.copyTexSubImage2D(J.TEXTURE_2D,St,0,0,Jt,Ht,wt,Wt),bt.unbindTexture()},this.copyTextureToTexture=function(L,st,St=null,xt=null,wt=0,Wt=0){let Jt,Ht,Yt,te,ue,xe,Kt,ye,We,Ie=L.isCompressedTexture?L.mipmaps[Wt]:L.image;if(St!==null)Jt=St.max.x-St.min.x,Ht=St.max.y-St.min.y,Yt=St.isBox3?St.max.z-St.min.z:1,te=St.min.x,ue=St.min.y,xe=St.isBox3?St.min.z:0;else{let we=Math.pow(2,-wt);Jt=Math.floor(Ie.width*we),Ht=Math.floor(Ie.height*we),L.isDataArrayTexture?Yt=Ie.depth:L.isData3DTexture?Yt=Math.floor(Ie.depth*we):Yt=1,te=0,ue=0,xe=0}xt!==null?(Kt=xt.x,ye=xt.y,We=xt.z):(Kt=0,ye=0,We=0);let Ce=Et.convert(st.format),dn=Et.convert(st.type),ee;st.isData3DTexture?(Lt.setTexture3D(st,0),ee=J.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Lt.setTexture2DArray(st,0),ee=J.TEXTURE_2D_ARRAY):(Lt.setTexture2D(st,0),ee=J.TEXTURE_2D),bt.activeTexture(J.TEXTURE0),bt.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,st.flipY),bt.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),bt.pixelStorei(J.UNPACK_ALIGNMENT,st.unpackAlignment);let _n=bt.getParameter(J.UNPACK_ROW_LENGTH),Se=bt.getParameter(J.UNPACK_IMAGE_HEIGHT),ps=bt.getParameter(J.UNPACK_SKIP_PIXELS),fn=bt.getParameter(J.UNPACK_SKIP_ROWS),Ua=bt.getParameter(J.UNPACK_SKIP_IMAGES);bt.pixelStorei(J.UNPACK_ROW_LENGTH,Ie.width),bt.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ie.height),bt.pixelStorei(J.UNPACK_SKIP_PIXELS,te),bt.pixelStorei(J.UNPACK_SKIP_ROWS,ue),bt.pixelStorei(J.UNPACK_SKIP_IMAGES,xe);let Wi=L.isDataArrayTexture||L.isData3DTexture,ms=st.isDataArrayTexture||st.isData3DTexture;if(L.isDepthTexture){let we=Ot.get(L),ln=Ot.get(st),Kn=Ot.get(we.__renderTarget),Fe=Ot.get(ln.__renderTarget);bt.bindFramebuffer(J.READ_FRAMEBUFFER,Kn.__webglFramebuffer),bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let en=0;en<Yt;en++)Wi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ot.get(L).__webglTexture,wt,xe+en),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ot.get(st).__webglTexture,Wt,We+en)),J.blitFramebuffer(te,ue,te+Jt,ue+Ht,Kt,ye,Kt+Jt,ye+Ht,J.DEPTH_BUFFER_BIT,J.NEAREST);bt.bindFramebuffer(J.READ_FRAMEBUFFER,null),bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(wt!==0||L.isRenderTargetTexture||Ot.has(L)){let we=Ot.get(L),ln=Ot.get(st);bt.bindFramebuffer(J.READ_FRAMEBUFFER,D),bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,W);for(let Kn=0;Kn<Yt;Kn++)Wi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,we.__webglTexture,wt,xe+Kn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,we.__webglTexture,wt),ms?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ln.__webglTexture,Wt,We+Kn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ln.__webglTexture,Wt),wt!==0?J.blitFramebuffer(te,ue,te+Jt,ue+Ht,Kt,ye,Kt+Jt,ye+Ht,J.COLOR_BUFFER_BIT,J.NEAREST):ms?J.copyTexSubImage3D(ee,Wt,Kt,ye,We+Kn,te,ue,Jt,Ht):J.copyTexSubImage2D(ee,Wt,Kt,ye,te,ue,Jt,Ht);bt.bindFramebuffer(J.READ_FRAMEBUFFER,null),bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else ms?L.isDataTexture||L.isData3DTexture?J.texSubImage3D(ee,Wt,Kt,ye,We,Jt,Ht,Yt,Ce,dn,Ie.data):st.isCompressedArrayTexture?J.compressedTexSubImage3D(ee,Wt,Kt,ye,We,Jt,Ht,Yt,Ce,Ie.data):J.texSubImage3D(ee,Wt,Kt,ye,We,Jt,Ht,Yt,Ce,dn,Ie):L.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Wt,Kt,ye,Jt,Ht,Ce,dn,Ie.data):L.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Wt,Kt,ye,Ie.width,Ie.height,Ce,Ie.data):J.texSubImage2D(J.TEXTURE_2D,Wt,Kt,ye,Jt,Ht,Ce,dn,Ie);bt.pixelStorei(J.UNPACK_ROW_LENGTH,_n),bt.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Se),bt.pixelStorei(J.UNPACK_SKIP_PIXELS,ps),bt.pixelStorei(J.UNPACK_SKIP_ROWS,fn),bt.pixelStorei(J.UNPACK_SKIP_IMAGES,Ua),Wt===0&&st.generateMipmaps===!0&&st.mipmapsAutoUpdate===!0&&J.generateMipmap(ee),bt.unbindTexture()},this.initRenderTarget=function(L){Ot.get(L).__webglFramebuffer===void 0&&Lt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Lt.setTextureCube(L,0):L.isData3DTexture?Lt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Lt.setTexture2DArray(L,0):Lt.setTexture2D(L,0),bt.unbindTexture()},this.resetState=function(){B=0,j=0,lt=null,bt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ie=63710088e-1,Sr=2*Math.PI*ie,_t=Math.PI/180,rs=Math.atan(Math.sinh(Math.PI)),$t=(i,t,e)=>i<t?t:i>e?e:i,Yn=(i,t,e)=>i+(t-i)*e,Vd=i=>i*i*(3-2*i),Mn=i=>i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI)),as=(i,t)=>(i+Math.PI)/(2*Math.PI)*2**t,os=(i,t)=>{let e=$t(i,-rs,rs);return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t},yi=(i,t)=>i/2**t*2*Math.PI-Math.PI,Hn=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*i/2**t))),yn=(i,t,e=[0,0,0])=>{let n=Math.cos(t);return e[0]=n*Math.cos(i),e[1]=n*Math.sin(i),e[2]=Math.sin(t),e},Nl=i=>{let t=Math.hypot(i[0],i[1],i[2]);return[Math.atan2(i[1],i[0]),Math.asin($t(i[2]/t,-1,1))]},ri=(i,t)=>{let e=yn(i,t),n=[-Math.sin(i),Math.cos(i),0],s=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];return{east:n,north:s,up:e}},hn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],Sa=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],Tr=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Zn=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],Rn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Er=(i,t,e,n)=>{let s=Math.sin((n-t)/2),r=Math.sin((e-i)/2);return 2*Math.asin(Math.min(1,Math.sqrt(s*s+Math.cos(t)*Math.cos(n)*r*r)))},Wd=(i,t,e)=>{let n=hn(i,t),s=hn(i,i)-e*e,r=n*n-s;if(r<0)return-1;let a=Math.sqrt(r),l=-n-a;return l>0?l:-n+a>0?-n+a:-1},Cn=(i,t,e=4)=>`${Math.abs(i).toFixed(e)}\xB0${i>=0?"N":"S"} ${Math.abs(t).toFixed(e)}\xB0${t>=0?"E":"W"}`,$d=i=>i>=1e5?`${Math.round(i/1e3).toLocaleString("en")} km`:i>=1e3?`${(i/1e3).toFixed(i>=1e4?0:1)} km`:`${Math.round(i)} m`;var Ls=[],Jx=(i,t)=>{for(let e of Ls){let[n,s,r,a]=e.bbox;if(i<=n||i>=r||t<=s||t>=a)continue;let l=$t((i-n)/(r-n)*e.width-.5,0,e.width-1.001),o=$t((a-t)/(a-s)*e.height-.5,0,e.height-1.001),h=l|0,u=o|0,c=l-h,f=o-u,d=u*e.width+h,p=e.data,v=(p[d]*(1-c)+p[d+1]*c)*(1-f)+(p[d+e.width]*(1-c)+p[d+e.width+1]*c)*f,g=Math.min((i-n)/(r-n),(r-i)/(r-n),(t-s)/(a-s),(a-t)/(a-s));return[v,Vd($t(g*12,0,1))]}return null},Eh=(i,t,e)=>{if(!Ls.length||i>.5)return i;let n=Jx(t,e);return n&&n[0]<-.5?i+(n[0]-i)*n[1]:i},qd=(i,t)=>{if(!Ls.length)return!1;let e=yi(t.x,t.z)/_t,n=yi(t.x+1,t.z)/_t,s=Hn(t.y,t.z)/_t,r=Hn(t.y+1,t.z)/_t;if(!Ls.some(({bbox:[l,o,h,u]})=>n>l&&e<h&&s>o&&r<u))return!1;let a=!1;for(let l=0,o=0;l<256;l++){let h=Hn(t.y+(l+.5)/256,t.z)/_t;for(let u=0;u<256;u++,o++){let c=i[o];if(c>.5)continue;let f=Eh(c,e+(n-e)*(u+.5)/256,h);f!==c&&(i[o]=f,a=!0)}}return a},Xd=i=>{if(!Ls.length||i.z>11)return!1;let t=yi(i.x,i.z)/_t,e=yi(i.x+1,i.z)/_t,n=Hn(i.y,i.z)/_t,s=Hn(i.y+1,i.z)/_t;return Ls.some(({bbox:[r,a,l,o]})=>e>r&&t<l&&n>a&&s<o)},Fl=new Map,Yd=(i,t="./")=>(Fl.has(i.id)||Fl.set(i.id,(async()=>{let e=await fetch(globalThis.__PATCHES__?.[i.file]??t+i.file);if(!e.ok)throw new Error(`patch ${i.id}: HTTP ${e.status}`);let n=await createImageBitmap(await e.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),r=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:n.width,height:n.height}):new OffscreenCanvas(n.width,n.height)).getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=r.getImageData(0,0,n.width,n.height).data,l=new Float32Array(n.width*n.height);for(let h=0,u=0;h<l.length;h++,u+=4)l[h]=a[u]*256+a[u+1]+a[u+2]/256-32768;let o={...i,width:n.width,height:n.height,data:l};return n.close?.(),Ls.push(o),o})().catch(e=>(Fl.delete(i.id),console.warn(e.message),null))),Fl.get(i.id));var Ah=20037508342789244e-9,Rh=0,Kx=1,jn=2,Zd=3,jd=4,Qx=(i,t,e,n)=>{if(i.url.includes("{bbox}")){let r=2*Ah/2**t,a=-Ah+e*r,l=Ah-n*r;return i.url.replace("{bbox}",`${a},${l-r},${a+r},${l}`).replaceAll("{size}",String(i.size??256))}let s=i.subdomains?i.subdomains[(e+n)%i.subdomains.length]:"";return i.url.replace("{s}",s).replace("{z}",t).replace("{x}",e).replace("{y}",n)},ty=(i,t)=>{if(t.z<(i.minZoom??0)||i.every>1&&(t.z-(i.minZoom??0))%i.every)return!1;let e=i.bbox;return e?t.east>e[0]&&t.west<e[2]&&t.north>e[1]&&t.south<e[3]:!0},Ch,Ul,ey=i=>(Ch||(Ch=typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256),Ul=Ch.getContext("2d",{willReadFrequently:!0})),Ul.globalCompositeOperation="copy",Ul.drawImage(i,0,0,256,256),Ul.getImageData(0,0,256,256).data),Jd=10,Ge=258,ny=(i,t)=>{let e=i.parent;for(;e&&e.z>Jd;)e=e.parent;for(;e;e=e.parent)if(e.slots[t]?.state===jn)return e;return null},iy=i=>{let t=ji.fromHalfFloat,e=new Float32Array(65536);for(let s=0,r=0;s<256;s++)for(let a=0;a<256;a++,r++)e[r]=i.base+t(i.heights[(s+1)*Ge+a+1]);for(let s=0;s<4;s++){let r=Float32Array.from(e),a=0;for(let l=0;l<256;l++)for(let o=0;o<256;o++){let h=l*256+o;if(e[h]<-.5)continue;let u=0,c=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let p=o+d,v=l+f;if(p<0||v<0||p>255||v>255)continue;let g=e[v*256+p];g<-.5&&(u+=g,c++)}c&&(r[h]=u/c,a++)}if(e=r,!a)break}let n=new Float32Array(Ge*Ge);for(let s=-1;s<=256;s++){let r=s<0?0:s>255?255:s,a=s<0?1:s>255?254:s;for(let l=-1;l<=256;l++){let o=l<0?0:l>255?255:l,h=l<0?1:l>255?254:l;n[(s+1)*Ge+l+1]=o===h&&r===a?e[s*256+l]:2*e[r*256+o]-e[a*256+h]}}return n},sy=(i,t,e)=>{let n=ey(i),s=256*256,r=new Float32Array(s);for(let v=0,g=0;v<s;v++,g+=4)r[v]=n[g]*256+n[g+1]+n[g+2]/256-32768;let a=0;if(t.z>Jd){let v=ny(t,e),g=v?.slots[e],m=v?2**(t.z-v.z):1,x=v?(t.x-v.x*m)*256:0,_=v?(t.y-v.y*m)*256:0,b=null;for(let M=0,C=0;M<256;M++)for(let y=0;y<256;y++,C++){let T=r[C];if(T>.001){a++;continue}if(!g){r[C]=T<-11100?0:T;continue}b??=g.seaWide??=iy(g);let U=(x+y+.5)/m+.5,S=(_+M+.5)/m+.5,V=U|0,K=S|0,it=U-V,D=S-K,W=K*Ge+V,B=(b[W]*(1-it)+b[W+1]*it)*(1-D)+(b[W+Ge]*(1-it)+b[W+Ge+1]*it)*D;r[C]=B<-.5?B:T<-11100?-.5:Math.min(T,-.5)}}else a=1;qd(r,t),Xd(t)&&(a=Math.max(a,1));let l=1/0,o=-1/0,h=0;for(let v=0;v<s;v++){let g=r[v];g<l&&(l=g),g>o&&(o=g),h+=g}let u=Math.round(h/s),c=new Uint16Array(Ge*Ge),f=ji.toHalfFloat,d=(v,g)=>r[g*256+v];for(let v=-1;v<=256;v++){let g=v<0?0:v>255?255:v,m=v<0?1:v>255?254:v;for(let x=-1;x<=256;x++){let _=x<0?0:x>255?255:x,b=x<0?1:x>255?254:x,M=_===b&&g===m?d(x,v):2*d(_,g)-d(b,m);c[(v+1)*Ge+x+1]=f(M-u)}}let p=new Tn(c,Ge,Ge,gi,Je);return p.internalFormat="R16F",p.magFilter=p.minFilter=Ae,p.wrapS=p.wrapT=wn,p.generateMipmaps=!1,p.needsUpdate=!0,{tex:p,heights:c,base:u,min:l,max:o,allSea:a===0}},ry=(i,t)=>{let e=new cn(i);return e.colorSpace=Le,e.flipY=!1,e.premultiplyAlpha=!1,e.wrapS=e.wrapT=wn,e.minFilter=rn,e.magFilter=Ae,e.anisotropy=t,e.generateMipmaps=!0,e.needsUpdate=!0,e},kl=class{constructor({maxActive:t=16,anisotropy:e=4}={}){this.maxActive=t,this.anisotropy=e,this.queue=[],this.active=new Set,this.decodeBudget=5,this.pendingDecodes=[],this.loaded=0,this.failed=0,this.onLoad=null}want(t,e,n){let s=t.slots[e.id];return s||(s=t.slots[e.id]={state:ty(e,t)&&t.z<=e.maxZoom?Rh:jd,tex:null,layer:e,tile:t,priority:0,queued:!1,abort:null},e.kind==="elevation"&&t.parent?.allSea&&(s.state=jd,t.allSea=!0)),s.priority=n,s.state===Rh&&!s.queued&&(s.queued=!0,this.queue.push(s)),s}pump(t){let e=performance.now();for(let s=0;s<this.decodeBudget&&this.pendingDecodes.length&&performance.now()-e<5;s++)this.pendingDecodes.shift()();for(let s of this.active)s.tile.visit<t-30&&s.abort&&s.abort.abort();if(!this.queue.length||(this.queue=this.queue.filter(s=>s.tile.visit>=t-5&&!s.tile.dead?!0:(s.queued=!1,!1)),this.active.size>=this.maxActive))return;this.queue.sort((s,r)=>s.priority-r.priority);let n=new Map;for(let s of this.active)n.set(s.layer.id,(n.get(s.layer.id)??0)+1);for(let s=this.queue.length-1;s>=0&&this.active.size<this.maxActive;s--){let r=this.queue[s],a=n.get(r.layer.id)??0;a>=(r.layer.maxActive??this.maxActive)||(n.set(r.layer.id,a+1),this.queue.splice(s,1),this.start(r))}}start(t){t.queued=!1,t.state=Kx,t.abort=new AbortController,this.active.add(t);let{tile:e,layer:n}=t,s=r=>{this.active.delete(t),t.abort=null,t.state=r,r===jn&&this.loaded++,r===Zd&&this.failed++,this.onLoad?.(t)};fetch(Qx(n,e.z,e.x,e.y),{signal:t.abort.signal,mode:"cors",credentials:"omit",referrerPolicy:"no-referrer"}).then(r=>{if(!r.ok)throw Object.assign(new Error(`HTTP ${r.status}`),{status:r.status});return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(r=>{this.pendingDecodes.push(()=>{if(e.dead)return r.close?.();if(n.kind==="elevation"){let a=sy(r,e,n.id);r.close?.(),Object.assign(t,a),e.minH=a.min,e.maxH=a.max,e.allSea=a.allSea}else t.tex=ry(r,this.anisotropy),t.tex.onUpdate=()=>{r.close?.(),t.tex.onUpdate=null};s(jn)})}).catch(r=>{r.name==="AbortError"?(this.active.delete(t),t.abort=null,t.state=Rh):s(Zd)})}get busy(){return this.active.size+this.queue.length+this.pendingDecodes.length}},Kd=i=>{for(let t in i.slots){let e=i.slots[t];e.abort?.abort(),e.tex?.dispose(),e.tex=null,e.heights=null,e.seaWide=null}i.slots={}};var ay=`
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
`,Qd=`
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
`,tf=`
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
`,ef=`
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

${ay}
${Qd}

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
`,nf=`
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
`,sf=`
precision highp float;
in vec3 vRel;
out vec4 outColor;
uniform vec3 uCamPos;
uniform vec3 uSun;
${Qd}
void main() {
  vec3 up = normalize(uCamPos + vRel);
  float mu = dot(up, uSun);
  vec3 col = vec3(0.80, 0.85, 0.90) * (sunTransmit(mu, 0.0) * max(mu, 0.0) + skyLight(mu));
  outColor = vec4(col, 1.0);
}
`,rf=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,af=`
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
`,of=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
layout(location = 0) out vec4 outLight;   // scattered light, and the ground distance in alpha
layout(location = 1) out vec4 outThrough; // how much of the background survives
${af}
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
`,lf=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tColor;
uniform sampler2D tLight;
uniform sampler2D tThrough;
uniform float uPixAngle;
${af}
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
`,cf=`
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
`,hf=`
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
`,uf=`
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
`;var Ar=2,oy=[12,17,22],ly=[[44,35.5,56.5,48.5],[34.9,30,36.2,33.4],[-117.6,35.6,-116.2,37],[-116.4,32.4,-115,33.8],[25.5,28.3,30.3,30.6],[39.5,11,42.8,15],[88.5,42.3,90.5,43.3],[3.3,51.2,7.3,53.6],[5.5,33.5,9,34.8],[136.5,-29.6,138.3,-27.6],[-68.6,-49.8,-67.9,-49.3],[50.9,43.2,52.3,44],[-.6,52.2,.5,52.9]],Ph=class i{constructor(t,e,n,s){this.z=t,this.x=e,this.y=n,this.parent=s,this.children=null,this.lon0=yi(e,t),this.lon1=yi(e+1,t),this.latN=Hn(n,t),this.latS=Hn(n+1,t),this.west=this.lon0/_t,this.east=this.lon1/_t,this.north=this.latN/_t,this.south=this.latS/_t;let r=(this.lon0+this.lon1)/2,a=Hn(n+.5,t);this.center=yn(r,a).map(h=>h*ie);let l=0;for(let[h,u]of[[this.lon0,this.latN],[this.lon1,this.latN],[this.lon0,this.latS],[this.lon1,this.latS]]){let c=yn(h,u);l=Math.max(l,Math.hypot(c[0]*ie-this.center[0],c[1]*ie-this.center[1],c[2]*ie-this.center[2]))}this.radius=l,this.minH=s?s.minH:-8e3,this.maxH=s?s.maxH:6e3,this.slots={},this.visit=0,this.geom=null,this.dead=!1,this.dry=null;for(let h of ly)if(this.east>h[0]&&this.west<h[2]&&this.north>h[1]&&this.south<h[3]){this.dry=[as(h[0]*_t,t)-e,os(h[3]*_t,t)-n,as(h[2]*_t,t)-e,os(h[1]*_t,t)-n];break}let o=[];for(let h of oy){let u=2**(h-t);o.push([e*u%64,n*u%64,u])}this.lattice=o}split(){let{z:t,x:e,y:n}=this;this.children=[new i(t+1,2*e,2*n,this),new i(t+1,2*e+1,2*n,this),new i(t+1,2*e,2*n+1,this),new i(t+1,2*e+1,2*n+1,this)]}},cy=i=>{let t=i+1,e=t*t,n=e+4*t,s=new Float32Array(n*2),r=new Float32Array(n),a=new Uint32Array(4*t);for(let o=0;o<t;o++)for(let h=0;h<t;h++)s[(o*t+h)*2]=h/i,s[(o*t+h)*2+1]=o/i;for(let o=0;o<t;o++)a[o]=o,a[t+o]=i*t+o,a[2*t+o]=o*t,a[3*t+o]=o*t+i;for(let o=0;o<4*t;o++)s[(e+o)*2]=s[a[o]*2],s[(e+o)*2+1]=s[a[o]*2+1],r[e+o]=1;let l=[];for(let o=0;o<i;o++)for(let h=0;h<i;h++){let u=o*t+h,c=u+1,f=u+t,d=f+1;l.push(u,f,c,c,f,d)}for(let o=0;o<4;o++)for(let h=0;h<i;h++){let u=a[o*t+h],c=a[o*t+h+1],f=e+o*t+h,d=f+1;l.push(u,f,c,c,f,d)}return{n:i,side:t,main:e,count:n,edge:a,uv:new Pe(s,2),skirt:new Pe(r,1),index:new Pe(n>65535?new Uint32Array(l):new Uint16Array(l),1)}},hy=(i,t)=>{let e=new Float32Array(t.count*3),{n,side:s}=t,[r,a,l]=i.center,o=new Float64Array(s),h=new Float64Array(s);for(let c=0;c<s;c++){let f=i.lon0+(i.lon1-i.lon0)*c/n;o[c]=Math.cos(f),h[c]=Math.sin(f)}for(let c=0;c<s;c++){let f=Hn(i.y+c/n,i.z),d=Math.cos(f)*ie,p=Math.sin(f)*ie;for(let v=0;v<s;v++){let g=(c*s+v)*3;e[g]=d*o[v]-r,e[g+1]=d*h[v]-a,e[g+2]=p-l}}for(let c=0;c<4*s;c++){let f=t.edge[c]*3,d=(t.main+c)*3;e[d]=e[f],e[d+1]=e[f+1],e[d+2]=e[f+2]}let u=new Ue;return u.setAttribute("position",new Pe(e,3)),u.setAttribute("uv",t.uv),u.setAttribute("skirt",t.skirt),u.setIndex(t.index),u},df=(i,t,e,n=255)=>{let s=new Tn(new Uint8Array([i,t,e,n]),1,1,Ze);return s.needsUpdate=!0,s},Ol=class{constructor({renderer:t,scene:e,segments:n=64,threshold:s=340,budget:r=380,layers:a}){this.scene=e,this.grid=cy(n),this.threshold=s,this.budget=r,this.loader=new kl({anisotropy:Math.min(8,t.capabilities.getMaxAnisotropy())}),this.layers=a,this.maxZ=17,this.frame=0,this.count=0,this.roots=[];for(let l=0;l<2**Ar;l++)for(let o=0;o<2**Ar;o++)this.roots.push(new Ph(Ar,o,l,null));this.count=this.roots.length,this.drawn=[],this.pool=[],this.group=new ke,e.add(this.group),this.blank=df(20,30,45),this.blankElev=(()=>{let l=new Tn(new Uint16Array([0]),1,1,gi,Je);return l.internalFormat="R16F",l.needsUpdate=!0,l})(),this.black=df(0,0,0,0),this.shared={uCamPos:{value:new ft},uSun:{value:new ft(1,0,0)},uSea:{value:0},uWater:{value:1},uSeaClamp:{value:0},uExag:{value:1},uTime:{value:0},uPixAngle:{value:.001},uLens:{value:0},uOverMix:{value:1},uOverMode:{value:0},uBathy:{value:.45},uShadows:{value:1},uContours:{value:0},uNightOn:{value:1},uPad:{value:new ge(0,0,0,0)},uPadH:{value:0},tDecal:{value:this.black},tDecalFar:{value:this.black},uDecalOn:{value:0},tHeat:{value:this.black},uHeat:{value:0},uHeatLod:{value:0},uScan:{value:new ge(0,0,1,0)},uScanA:{value:0},uDecalO:{value:new ft},uDecalU:{value:new ft},uDecalV:{value:new ft}},this.frustum=new di,this.caps=this.makeCaps(),this.stats={tiles:0,depth:0}}makeMaterial(){let t={...this.shared,uCenter:{value:new ft},uCenterRel:{value:new ft},uSkirt:{value:0},tElev:{value:this.blankElev},uElevUV:{value:new ge(1,1,0,0)},uElevBase:{value:0},uElevMpp:{value:1},tFar:{value:this.blankElev},uFarUV:{value:new ge(1,1,0,0)},uFarBase:{value:0},uFarMpp:{value:1},uFarTop:{value:9e3},tBase:{value:this.blank},uBaseUV:{value:new ge(1,1,0,0)},uBaseTexels:{value:256},tGlobe:{value:this.blank},uGlobeUV:{value:new ge(1,1,0,0)},uGlobeOn:{value:0},tOver:{value:this.black},uOverUV:{value:new ge(1,1,0,0)},uOverOn:{value:0},tNight:{value:this.black},uNightUV:{value:new ge(1,1,0,0)},uDry:{value:new ge(2,2,-1,-1)},uLat:{value:[new ne,new ne,new ne]},uLatS:{value:[1,1,1]}};return new Xe({uniforms:t,vertexShader:tf,fragmentShader:ef,glslVersion:ss,side:Ye})}makeCaps(){let n=[];for(let s of[1,-1]){let r=new Float32Array(2307),a=new Float32Array(769),l=[0,0,s*ie];for(let d=0;d<8;d++){let p=s*(rs+(Math.PI/2-rs)*d/8);for(let v=0;v<96;v++){let g=yn(v/96*2*Math.PI-Math.PI,p),m=(d*96+v)*3;r[m]=g[0]*ie,r[m+1]=g[1]*ie,r[m+2]=g[2]*ie-l[2]}}let o=[];for(let d=0;d<7;d++)for(let p=0;p<96;p++){let v=d*96+p,g=d*96+(p+1)%96,m=v+96,x=g+96;o.push(v,g,m,g,x,m)}let h=768;for(let d=0;d<96;d++)o.push(672+d,672+(d+1)%96,h);let u=new Ue;u.setAttribute("position",new Pe(r,3)),u.setAttribute("height",new Pe(a,1)),u.setIndex(o);let c=new Xe({uniforms:{uCamPos:this.shared.uCamPos,uSun:this.shared.uSun,uExag:this.shared.uExag,uCenter:{value:new ft(...l)},uCenterRel:{value:new ft}},vertexShader:nf,fragmentShader:sf,glslVersion:ss,side:Ye}),f=new ce(u,c);f.frustumCulled=!1,f.position.set(...l),f.updateMatrixWorld(),this.scene.add(f),n.push({mesh:f,sign:s,rings:8,around:96,centre:l,set:!1})}return n}fitCaps(){let t=this.shared.uWater.value>.5?this.shared.uSea.value:-1e5;for(let e of this.caps){let n=e.mesh.geometry.attributes.height,s=0,r=[];for(let a=0;a<e.around;a++){let l=Math.max(this.heightAt(a/e.around*2*Math.PI-Math.PI,e.sign*(rs-.002))??0,t);r.push(l),s+=l/e.around}for(let a=0;a<e.rings;a++)for(let l=0;l<e.around;l++)n.array[a*e.around+l]=r[l]+(s-r[l])*(a/e.rings);n.array[e.rings*e.around]=s,n.needsUpdate=!0}}resolve(t,e){for(let n=t;n;n=n.parent){let s=n.slots[e.id];if(s&&s.state===jn){let r=2**(t.z-n.z);return{slot:s,z:n.z,scale:1/r,ox:(t.x-n.x*r)/r,oy:(t.y-n.y*r)/r}}}return null}heightAt(t,e){t=Mn(t),e=$t(e,-rs+1e-6,rs-1e-6);let n=2**Ar,s=this.roots[$t(Math.floor(os(e,Ar)),0,n-1)*n+$t(Math.floor(as(t,Ar)),0,n-1)],r=null,a=this.layers.elevation.id;for(;s;){let m=s.slots[a];if(m&&m.state===jn&&(r=s),!s.children)break;let x=as(t,s.z+1)-2*s.x,_=os(e,s.z+1)-2*s.y;s=s.children[(_>=1?2:0)+(x>=1?1:0)]}if(!r)return null;let l=r.slots[a],o=$t((as(t,r.z)-r.x)*256-.5,0,255),h=$t((os(e,r.z)-r.y)*256-.5,0,255),u=Math.floor(o),c=Math.floor(h),f=Math.min(u+1,255),d=Math.min(c+1,255),p=o-u,v=h-c,g=(m,x)=>ji.fromHalfFloat(l.heights[(x+1)*Ge+m+1]);return l.base+(g(u,c)*(1-p)+g(f,c)*p)*(1-v)+(g(u,d)*(1-p)+g(f,d)*p)*v}measure(t,e){let n=this.shared.uExag.value,s=e.lon;if(!(s>=t.lon0&&s<=t.lon1)){let v=Math.abs(Mn(e.lon-t.lon0)),g=Math.abs(Mn(e.lon-t.lon1));s=v<g?t.lon0:t.lon1}let r=$t(e.lat,t.latS,t.latN),a=Er(e.lon,e.lat,s,r),l=Math.max(t.maxH,e.sea)*n;if(a>e.horizon+Math.acos(Math.min(1,e.occluder/(ie+Math.max(l,0)+50)))+.002)return null;let o=this._v.set(t.center[0]-e.pos[0],t.center[1]-e.pos[1],t.center[2]-e.pos[2]);if(this._sphere.center.copy(o),this._sphere.radius=t.radius+Math.max(Math.abs(t.minH),Math.abs(t.maxH))*n+200,!this.frustum.intersectsSphere(this._sphere))return null;let h=$t(e.ground,t.minH,t.maxH)*n,u=yn(s,r,this._p),c=ie+Math.max(h,e.sea*n),f=Math.max(Math.hypot(u[0]*c-e.pos[0],u[1]*c-e.pos[1],u[2]*c-e.pos[2]),20),d=Sr*Math.cos(r)/2**t.z,p=Math.abs((u[0]*(u[0]*c-e.pos[0])+u[1]*(u[1]*c-e.pos[1])+u[2]*(u[2]*c-e.pos[2]))/f);return d/f*e.pxPerRad*Math.max(.45,Math.sqrt(p))}ensure(t,e){let n=this.layers,s=this.loader,r=s.want(t,n.elevation,e+2e6),a=n.globe?n.globe.maxZoom:-1,l=n.globe&&t.z<=a?s.want(t,n.globe,e+1e6):null,o=t.z>=a?s.want(t,n.base,e+1e6):l;return n.overlay&&s.want(t,n.overlay,e),n.night&&this.shared.uNightOn.value>.5&&s.want(t,n.night,e-1e5),r.state>=jn&&o.state>=jn}visit(t,e,n){t.visit=this.frame;let s=this.ensure(t,e);if(s&&t.z<this.maxZ&&e>this.threshold&&this.drawn.length<700){t.children||(t.split(),this.count+=4);let r=!0;for(let a of t.children)a._px=this.measure(a,n),a._px!==null&&(a.visit=this.frame,this.ensure(a,a._px)||(r=!1));if(r){for(let a of t.children)a._px!==null&&this.visit(a,a._px,n);return}}s&&this.drawn.push(t)}update(t){this.frame++;let e=this.shared,n=e.uExag.value,s=e.uWater.value>.5;t.sea=s?e.uSea.value:-12e3;let r=Math.hypot(t.pos[0],t.pos[1],t.pos[2]);t.occluder=ie+(s?Math.min(e.uSea.value,-450):-11e3)*n-100,t.horizon=r>t.occluder?Math.acos(t.occluder/r):Math.PI,this._v??=new ft,this._p??=[0,0,0],this._sphere??=new ui,this.frustum.setFromProjectionMatrix(t.viewProjectionRel),e.uSeaClamp.value=s?e.uSea.value:-1e5,this.drawn.length=0;for(let a of this.roots){let l=this.measure(a,t);if(l===null){a.visit=this.frame,this.ensure(a,1);continue}this.visit(a,l,t)}this.assign(t),this.loader.pump(this.frame),this.frame%90===0&&this.prune(),!this.capsFitted&&this.roots.every(a=>a.slots[this.layers.elevation.id]?.state>=jn)&&(this.fitCaps(),this.capsFitted=!0);for(let a of this.caps)a.mesh.material.uniforms.uCenterRel.value.set(a.centre[0]-t.pos[0],a.centre[1]-t.pos[1],a.centre[2]-t.pos[2])}assign(t){let e=this.layers,n=0;for(let s=0;s<this.drawn.length;s++){let r=this.drawn[s],a=this.pool[s];a||(a=this.pool[s]=new ce(void 0,this.makeMaterial()),a.frustumCulled=!1,a.matrixAutoUpdate=!1,this.group.add(a)),r.geom??=hy(r,this.grid),a.geometry=r.geom,a.visible=!0,a.matrix.makeTranslation(r.center[0],r.center[1],r.center[2]),a.matrixWorld.copy(a.matrix);let l=a.material.uniforms;l.uCenter.value.set(r.center[0],r.center[1],r.center[2]),l.uCenterRel.value.set(r.center[0]-t.pos[0],r.center[1]-t.pos[1],r.center[2]-t.pos[2]),l.uSkirt.value=Math.max(Sr/2**r.z*.04,30)*Math.max(1,this.shared.uExag.value*.5);let o=this.resolve(r,e.elevation);if(o){let p=256/Ge;l.tElev.value=o.slot.tex,l.uElevUV.value.set(o.scale*p,o.scale*p,(1+256*o.ox)/Ge,(1+256*o.oy)/Ge),l.uElevBase.value=o.slot.base,l.uElevMpp.value=Sr/2**o.z/256}else l.tElev.value=this.blankElev,l.uElevBase.value=0,l.uElevMpp.value=Sr/2**r.z/256;let h=null;for(let p=r,v=0;p;p=p.parent,v++){let g=p.slots[e.elevation.id];if(g&&g.state===jn&&(v>=3||!p.parent)){h=p;break}}if(h){let p=2**(r.z-h.z),v=h.slots[e.elevation.id];l.tFar.value=v.tex,l.uFarUV.value.set(256/Ge/p,256/Ge/p,(1+256*(r.x-h.x*p)/p)/Ge,(1+256*(r.y-h.y*p)/p)/Ge),l.uFarBase.value=v.base,l.uFarMpp.value=Sr/2**h.z/256,l.uFarTop.value=v.max}else l.tFar.value=l.tElev.value,l.uFarUV.value.copy(l.uElevUV.value),l.uFarBase.value=l.uElevBase.value,l.uFarMpp.value=l.uElevMpp.value,l.uFarTop.value=r.maxH;let u=e.globe&&this.resolve(r,e.globe),c=this.resolve(r,e.base)??u;c?(l.tBase.value=c.slot.tex,l.uBaseUV.value.set(c.scale,c.scale,c.ox,c.oy),l.uBaseTexels.value=256*2**c.z):(l.tBase.value=this.blank,l.uBaseTexels.value=256*2**r.z),u?(l.tGlobe.value=u.slot.tex,l.uGlobeUV.value.set(u.scale,u.scale,u.ox,u.oy),l.uGlobeOn.value=1):(l.tGlobe.value=this.blank,l.uGlobeOn.value=0);let f=e.overlay&&this.resolve(r,e.overlay);f?(l.tOver.value=f.slot.tex,l.uOverUV.value.set(f.scale,f.scale,f.ox,f.oy),l.uOverOn.value=1):(l.tOver.value=this.black,l.uOverOn.value=0);let d=e.night&&this.shared.uNightOn.value>.5&&this.resolve(r,e.night);d?(l.tNight.value=d.slot.tex,l.uNightUV.value.set(d.scale,d.scale,d.ox,d.oy)):l.tNight.value=this.black,r.dry?l.uDry.value.set(r.dry[0],r.dry[1],r.dry[2],r.dry[3]):l.uDry.value.set(2,2,-1,-1);for(let p=0;p<3;p++)l.uLat.value[p].set(r.lattice[p][0],r.lattice[p][1]),l.uLatS.value[p]=r.lattice[p][2];r.z>n&&(n=r.z)}for(let s=this.drawn.length;s<this.pool.length;s++)this.pool[s].visible=!1;this.stats.tiles=this.drawn.length,this.stats.depth=n}prune(){let t=this.count>this.budget?45:900,e=n=>{if(!n.children)return;let s=!0;for(let r of n.children)e(r),(r.children||r.visit>=this.frame-t)&&(s=!1);if(s){for(let r of n.children)r.dead=!0,Kd(r),r.geom?.dispose(),r.geom=null;n.children=null,this.count-=4}};for(let n of this.roots)e(n)}refresh(t){let e=this.layers.elevation.id,[n,s,r,a]=t.map(o=>o*_t),l=o=>{if(!(yi(o.x+1,o.z)<=n||yi(o.x,o.z)>=r||Hn(o.y,o.z)<=s||Hn(o.y+1,o.z)>=a)){if(o.z>=7){let h=o.slots[e];h&&(h.abort?.abort(),h.tex?.dispose(),delete o.slots[e]),o.allSea=!1}o.children?.forEach(l)}};this.roots.forEach(l)}setLayer(t,e){let n=this.layers[t];if(this.layers[t]=e,n&&(!e||n.id!==e.id)){let s=r=>{let a=r.slots[n.id];a&&(a.abort?.abort(),a.tex?.dispose(),delete r.slots[n.id]),r.children&&r.children.forEach(s)};this.roots.forEach(s)}}get ready(){let t=(this.layers.globe??this.layers.base).id;return this.roots.every(e=>e.slots[this.layers.elevation.id]?.state>=jn&&e.slots[t]?.state>=jn)}};var Ih=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Bl=class{constructor(t,e,n){this.camera=t,this.dom=e,this.globe=n,this.lon=-30*_t,this.lat=25*_t,this.range=175e5,this.heading=0,this.tilt=0,this.goalRange=this.range,this.goalHeading=0,this.goalTilt=0,this.maxRange=6e7,this.floor=null,this.inCity=!1,this.walk=null,this.groundH=0,this.pos=[0,0,0],this.basis={right:[1,0,0],up:[0,1,0],fwd:[0,0,-1]},this.vel=[0,0],this.fly=null,this.anchor=null,this.idle=!0,this.moved=0,this.onChange=null,this.onTap=null,this.wheelNeedsKey=!1,this.shift=[0,0],this.goalShift=[0,0],this.onWheelBlocked=null,this.pointers=new Map,this.bind(),this.place()}get fovY(){return this.camera.fov*_t}get minRange(){return this.inCity?14:150}size(){return[this.dom.clientWidth||1,this.dom.clientHeight||1]}place(){if(this.walk)return this.placeWalk();let t=this.globe,e=t?t.shared.uExag.value:1,n=t&&t.shared.uWater.value>.5?t.shared.uSea.value:-1e5,s=ri(this.lon,this.lat),r=Zn(Rn(s.north,Math.cos(this.heading)),s.east,Math.sin(this.heading)),a=Rn(s.up,ie+this.groundH),l=Zn(Rn(s.up,Math.cos(this.tilt)),r,-Math.sin(this.tilt)),o=Zn(a,l,this.range),h=Math.hypot(o[0],o[1],o[2]),[u,c]=Nl(o),f=this.floor?.(u,c)??null,d=Math.max(t?Math.max(t.heightAt(u,c)??0,n)*e:0,f??-1e9),p=Math.max(f==null?25:1.7,this.range*.04);h<ie+d+p&&(o=Rn(o,(ie+d+p)/h),h=ie+d+p);let v=Tr(Zn(o,a,-1)),g=Zn(Rn(r,Math.cos(this.tilt)),s.up,Math.sin(this.tilt)),m=Tr(Sa(g,v)),x=Sa(v,m);this.pos=o,this.basis={right:m,up:x,fwd:Rn(v,-1)},this.camLon=u,this.camLat=c,this.under=d,this.altitude=h-ie-d;let _=Math.max(f==null?1.5:.5,.06*Math.min(this.altitude,this.range)),b=ie-11e3*e,M=Math.sqrt(Math.max(h*h-b*b,0))+Math.sqrt((ie+9e3*e)**2-b*b)+1e3,C=this.camera;C.near=_,C.far=Math.max(M,_*10),C.updateProjectionMatrix(),C.projectionMatrix.elements[8]=-this.shift[0],C.projectionMatrix.elements[9]=-this.shift[1],C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.matrixAutoUpdate=!1,C.matrix.set(m[0],x[0],v[0],o[0],m[1],x[1],v[1],o[1],m[2],x[2],v[2],o[2],0,0,0,1),C.matrixWorld.copy(C.matrix),C.matrixWorldInverse.copy(C.matrix).invert()}placeWalk(){let t=this.walk,e=this.globe,n=e?e.shared.uExag.value:1,s=ri(t.lon,t.lat),r=this.floor?.(t.lon,t.lat)??(e?(e.heightAt(t.lon,t.lat)??0)*n:0),a=ie+r+t.eye+(t.lift??0),l=Rn(s.up,a),o=Zn(Rn(s.north,Math.cos(t.yaw)),s.east,Math.sin(t.yaw)),h=Tr(Zn(Rn(o,Math.cos(t.pitch)),s.up,Math.sin(t.pitch))),u=Rn(h,-1),c=Tr(Sa(s.up,u)),f=Sa(u,c);this.pos=l,this.basis={right:c,up:f,fwd:h},this.lon=this.camLon=t.lon,this.lat=this.camLat=t.lat,this.heading=this.goalHeading=t.yaw,this.tilt=t.pitch,this.groundH=this.under=r,this.altitude=t.eye;let d=ie-11e3*n,p=Math.sqrt(Math.max(a*a-d*d,0))+Math.sqrt((ie+9e3*n)**2-d*d)+1e3,v=this.camera;v.near=.14,v.far=p,v.updateProjectionMatrix(),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.matrixAutoUpdate=!1,v.matrix.set(c[0],f[0],u[0],l[0],c[1],f[1],u[1],l[1],c[2],f[2],u[2],l[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert()}ray(t,e){let[n,s]=this.size(),r=Math.tan(this.fovY/2),a=r*(n/s),l=t/n*2-1-this.shift[0],o=1-e/s*2-this.shift[1],h=this.basis;return Tr([h.fwd[0]+h.right[0]*l*a+h.up[0]*o*r,h.fwd[1]+h.right[1]*l*a+h.up[1]*o*r,h.fwd[2]+h.right[2]*l*a+h.up[2]*o*r])}pick(t,e){let n=this.globe,s=n.shared.uExag.value,r=n.shared.uWater.value>.5?n.shared.uSea.value:-1e5,a=this.ray(t,e),l=this.groundH,o=null;for(let h=0;h<5;h++){let u=Wd(this.pos,a,ie+l);if(u<0)return o;let c=Zn(this.pos,a,u),[f,d]=Nl(c),p=n.heightAt(f,d)??0;o={lon:f,lat:d,height:p,distance:u},l=Math.max(Math.max(p,r)*s,this.floor?.(f,d)??-1e9)}return o}touch(){this.idle=!1,this.fly=null,this.moved=performance.now()}bind(){let t=this.dom;t.style.touchAction="none",t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(this.walk)return;t.setPointerCapture?.(n.pointerId);let s=t.getBoundingClientRect(),r={x:n.clientX-s.left,y:n.clientY-s.top,x0:n.clientX-s.left,y0:n.clientY-s.top,button:n.button,mod:n.ctrlKey||n.shiftKey||n.metaKey||n.altKey,t:performance.now()};this.pointers.set(n.pointerId,r),this.touch(),this.vel=[0,0],this.anchor=null,this.goalRange=this.range,this.pointers.size===1&&(this.grab=this.pick(r.x,r.y)),this.pointers.size===2&&(this.pinch=this.pinchState())}),t.addEventListener("pointermove",n=>{if(this.walk)return;let s=this.pointers.get(n.pointerId),r=t.getBoundingClientRect(),a=n.clientX-r.left,l=n.clientY-r.top;if(this.hover={x:a,y:l},!s)return;let o=a-s.x,h=l-s.y;s.x=a,s.y=l,this.pointers.size===1?s.button===2||s.button===1||s.mod?this.orbit(o,h):this.pan(s,o,h):this.pointers.size===2&&this.pinchMove(),this.onChange?.()});let e=n=>{let s=this.pointers.get(n.pointerId);if(s){if(this.pointers.delete(n.pointerId),this.pointers.size===0&&Math.hypot(s.x-s.x0,s.y-s.y0)<6&&performance.now()-s.t<400&&this.onTap?.(s.x,s.y),this.pointers.size===1){let r=[...this.pointers.values()][0];this.grab=this.pick(r.x,r.y)}this.pinch=null}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{if(this.walk)return;if(this.wheelNeedsKey&&!(n.ctrlKey||n.metaKey)){this.onWheelBlocked?.();return}n.preventDefault(),this.touch();let s=t.getBoundingClientRect(),r=n.deltaMode===1?32:n.deltaMode===2?400:1,a=n.ctrlKey?.012:.0016;this.goalRange=$t(this.goalRange*Math.exp($t(n.deltaY*r,-300,300)*a),this.minRange,this.maxRange);let l=n.clientX-s.left,o=n.clientY-s.top,h=this.pick(l,o);this.anchor=h?{lon:h.lon,lat:h.lat,x:l,y:o}:null},{passive:!1}),t.addEventListener("dblclick",n=>{if(this.walk)return;let s=t.getBoundingClientRect(),r=this.pick(n.clientX-s.left,n.clientY-s.top);r&&this.flyTo({lon:r.lon,lat:r.lat,range:Math.max(this.range*.35,this.minRange*2)},.9)})}pan(t,e,n){let s=[this.lon,this.lat],r=this.pick(t.x,t.y);if(this.grab&&r)this.lon=Mn(this.lon+Mn(this.grab.lon-r.lon)),this.lat=$t(this.lat+(this.grab.lat-r.lat),-89*_t,89*_t);else{let[,h]=this.size(),u=2*Math.tan(this.fovY/2)*this.range/h/ie,c=Math.cos(this.heading),f=Math.sin(this.heading);this.lon=Mn(this.lon-(e*c+n*f)*u/Math.max(Math.cos(this.lat),.2)),this.lat=$t(this.lat+(n*c-e*f)*u,-89*_t,89*_t)}this.place();let a=performance.now(),l=Math.max((a-(this.lastPan??a-16))/1e3,.004);this.lastPan=a;let o=[Mn(this.lon-s[0])/l,(this.lat-s[1])/l];this.vel=[Yn(this.vel[0],o[0],.5),Yn(this.vel[1],o[1],.5)]}orbit(t,e){this.heading=this.goalHeading=this.heading-t*.006,this.tilt=this.goalTilt=$t(this.tilt-e*.005,0,this.maxTilt()),this.place()}maxTilt(){return this.inCity&&this.range<900?Yn(88.5,84,$t((this.range-200)/700,0,1))*_t:Yn(84,62,$t((Math.log10(this.range)-5.2)/1.8,0,1))*_t}pinchState(){let[t,e]=[...this.pointers.values()];return{d:Math.hypot(t.x-e.x,t.y-e.y),ang:Math.atan2(e.y-t.y,e.x-t.x),cy:(t.y+e.y)/2,cx:(t.x+e.x)/2,range:this.range,heading:this.heading,tilt:this.tilt,grab:this.pick((t.x+e.x)/2,(t.y+e.y)/2)}}pinchMove(){let t=this.pinch;if(!t)return;let[e,n]=[...this.pointers.values()],s=Math.hypot(e.x-n.x,e.y-n.y),r=Math.atan2(n.y-e.y,n.x-e.x),a=(e.y+n.y)/2,l=(e.x+n.x)/2;this.range=this.goalRange=$t(t.range*t.d/Math.max(s,1),this.minRange,this.maxRange);let o=r-t.ang;o=Math.atan2(Math.sin(o),Math.cos(o)),Math.abs(o)>.12&&(this.heading=this.goalHeading=t.heading+(o-Math.sign(o)*.12));let h=a-t.cy,u=Math.abs(s-t.d);Math.abs(h)>24&&u<40&&(this.tilt=this.goalTilt=$t(t.tilt-(h-Math.sign(h)*24)*.006,0,this.maxTilt())),this.place();let c=this.pick(l,a);t.grab&&c&&(this.lon=Mn(this.lon+Mn(t.grab.lon-c.lon)),this.lat=$t(this.lat+(t.grab.lat-c.lat),-89*_t,89*_t),this.place())}flyTo(t,e){let n={lon:this.lon,lat:this.lat,range:this.range,heading:this.heading,tilt:this.tilt},s={lon:t.lon??n.lon,lat:t.lat??n.lat,range:$t(t.range??n.range,this.minRange,this.maxRange),heading:t.heading??0,tilt:t.tilt??0},r=Er(n.lon,n.lat,s.lon,s.lat),a=Math.max(n.range,s.range,Math.min(r*ie*1.4,24e6)),l=e??$t(1.4+r*1.6+Math.abs(Math.log(n.range/s.range))*.22+Math.log(a/Math.max(n.range,s.range))*.18,1.2,6.5),o=s.heading-n.heading;o=Math.atan2(Math.sin(o),Math.cos(o)),this.fly={from:n,target:s,hop:a,dur:l,t:0,dh:o,a:yn(n.lon,n.lat),b:yn(s.lon,s.lat),angle:r},this.idle=!1,this.anchor=null,this.vel=[0,0]}zoomBy(t){this.touch(),this.anchor=null,this.goalRange=$t(this.goalRange*t,this.minRange,this.maxRange)}jump(t){Object.assign(this,{lon:t.lon??this.lon,lat:t.lat??this.lat,range:t.range??this.range,heading:t.heading??0,tilt:t.tilt??0}),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,this.fly=null,this.place()}update(t){if(this.walk){this.fly=null,this.inCity=!0,this.shift=[0,0],this.place();return}let e=this.globe,n=e.shared.uExag.value,s=e.shared.uWater.value>.5?e.shared.uSea.value:-1e5,r=1-Math.exp(-t*7);if(this.shift=[Yn(this.shift[0],this.goalShift[0],r),Yn(this.shift[1],this.goalShift[1],r)],this.fly){let o=this.fly;o.t=Math.min(1,o.t+t/o.dur);let h=o.hop>3*Math.max(o.from.range,o.target.range),u=Ih(h?$t((o.t-.14)/.72,0,1):o.t);if(o.angle>1e-9){let p=Math.sin(o.angle),v=Math.sin((1-u)*o.angle)/p,g=Math.sin(u*o.angle)/p,[m,x]=Nl([o.a[0]*v+o.b[0]*g,o.a[1]*v+o.b[1]*g,o.a[2]*v+o.b[2]*g]);this.lon=m,this.lat=x}let c=Ih(o.t),f=Math.exp(Yn(Math.log(o.from.range),Math.log(o.target.range),c)),d=Math.sin(Math.PI*o.t);this.range=Math.exp(Yn(Math.log(f),Math.log(Math.max(o.hop,f)),h?d**.7:d*d)),this.heading=o.from.heading+o.dh*c,this.tilt=Yn(o.from.tilt,o.target.tilt,c)*(h?1-.85*d:1),this.goalRange=this.range,this.goalHeading=this.heading,this.goalTilt=this.tilt,o.t>=1&&(this.fly=null,this.heading=o.target.heading)}else{if(this.idle&&this.spin!==!1&&this.range>4e6&&(this.lon=Mn(this.lon+t*.035)),!this.pointers.size){if(Math.abs(this.vel[0])+Math.abs(this.vel[1])>1e-7){this.lon=Mn(this.lon+this.vel[0]*t),this.lat=$t(this.lat+this.vel[1]*t,-89*_t,89*_t);let h=Math.exp(-t*4.5);this.vel=[this.vel[0]*h,this.vel[1]*h]}let o=1-Math.exp(-t*9);if(Math.abs(Math.log(this.goalRange/this.range))>1e-4){if(this.range=Math.exp(Yn(Math.log(this.range),Math.log(this.goalRange),o)),this.anchor){this.place();let h=this.pick(this.anchor.x,this.anchor.y);h&&(this.lon=Mn(this.lon+Mn(this.anchor.lon-h.lon)),this.lat=$t(this.lat+(this.anchor.lat-h.lat),-89*_t,89*_t))}}else this.anchor=null}this.tilt=Math.min(this.tilt,this.maxTilt())}let a=this.floor?.(this.lon,this.lat)??null;this.inCity=a!=null,this.goalRange<this.minRange&&(this.goalRange=this.minRange);let l=Math.max(Math.max(e.heightAt(this.lon,this.lat)??0,s)*n,a??-1e9);this.groundH=Yn(this.groundH,l,1-Math.exp(-t*6)),this.place()}view(t){let e=this.camera,n=new ve().copy(e.matrixWorldInverse);return n.elements[12]=n.elements[13]=n.elements[14]=0,{pos:this.pos,lon:this.camLon,lat:this.camLat,ground:this.under/Math.max(this.globe.shared.uExag.value,1e-6),viewProjectionRel:new ve().multiplyMatrices(e.projectionMatrix,n),pxPerRad:t/(2*Math.tan(this.fovY/2))}}state(){return{lat:this.lat/_t,lon:this.lon/_t,range:this.range,heading:this.heading/_t,tilt:this.tilt/_t}}};var zl=5,Hl=class{constructor(t,{samples:e=4,steps:n=20}={}){this.renderer=t,this.samples=e;let s=new Ue;s.setAttribute("position",new Pe(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),s.setAttribute("uv",new Pe(new Float32Array([0,0,2,0,0,2]),2)),this.quad=new ce(s),this.quad.frustumCulled=!1,this.quadScene=new qn,this.quadScene.add(this.quad),this.quadCam=new Ss(-1,1,1,-1,0,1);let r=(l,o)=>new Xe({vertexShader:rf,fragmentShader:l,uniforms:o,glslVersion:ss,depthTest:!1,depthWrite:!1}),a={tDepth:{value:null},uCam:{value:new ft},uRight:{value:new ft},uUp:{value:new ft},uFwd:{value:new ft},uTan:{value:new ne},uShift:{value:new ne},uNear:{value:1},uFar:{value:2},uSun:{value:new ft}};this.atmo=r(of,{...a,uHaze:{value:1},uSteps:{value:n},uAir:{value:1},uThick:{value:1}}),this.comp=r(lf,{...a,tColor:{value:null},tLight:{value:null},tThrough:{value:null},uPixAngle:{value:.001}}),this.down=r(cf,{tSrc:{value:null},uTexel:{value:new ne},uThreshold:{value:0}}),this.up=r(hf,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ne}}),this.final=r(uf,{tColor:{value:null},tBloom:{value:null},uTexel:{value:new ne},uExposure:{value:1},uBloom:{value:.06},uVignette:{value:.35}}),this.w=this.h=0}setSize(t,e){if(t===this.w&&e===this.h)return;this.w=t,this.h=e,this.dispose();let n={type:Je,format:Ze,minFilter:Ae,magFilter:Ae,depthBuffer:!1},s=new ii(t,e);s.type=An,s.minFilter=s.magFilter=Oe,this.rtScene=new He(t,e,{...n,depthBuffer:!0,depthTexture:s,samples:this.samples}),this.rtAir=new He(t,e,n),this.rtHalf=new He(Math.max(2,t>>1),Math.max(2,e>>1),{...n,count:2,minFilter:Oe,magFilter:Oe}),this.rtDown=[],this.rtUp=[];for(let r=0;r<zl;r++){let a=Math.max(2,t>>r+1),l=Math.max(2,e>>r+1);this.rtDown.push(new He(a,l,n)),r<zl-1&&this.rtUp.push(new He(a,l,n))}}dispose(){for(let t of[this.rtScene,this.rtAir,this.rtHalf,...this.rtDown??[],...this.rtUp??[]])t?.dispose();this.rtScene?.depthTexture?.dispose()}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.quadCam)}render(t,e,n,s=[]){let r=this.renderer;r.setRenderTarget(this.rtScene),r.setClearColor(0,1),r.clear(!0,!0,!1),r.render(t,e);for(let f of s)r.render(f.scene,f.camera),r.setRenderTarget(this.rtScene);let a=this.atmo.uniforms;a.tDepth.value=this.rtScene.depthTexture,a.uCam.value.set(n.pos[0]/1e3,n.pos[1]/1e3,n.pos[2]/1e3),a.uRight.value.set(...n.basis.right),a.uUp.value.set(...n.basis.up),a.uFwd.value.set(...n.basis.fwd),a.uTan.value.set(n.tanY*n.aspect,n.tanY),a.uShift.value.set(n.shift[0],n.shift[1]),a.uNear.value=n.near,a.uFar.value=n.far,a.uSun.value.copy(n.sun);let l=Math.hypot(n.pos[0],n.pos[1],n.pos[2])/1e3-6371,o=Math.min(Math.max((l-1500)/9e3,0),1);a.uThick.value=1+1.1*o*o*(3-2*o),this.pass(this.atmo,this.rtHalf);let h=this.comp.uniforms;h.tColor.value=this.rtScene.texture,h.tLight.value=this.rtHalf.textures[0],h.tThrough.value=this.rtHalf.textures[1],h.uPixAngle.value=2*n.tanY/this.h,this.pass(this.comp,this.rtAir);let u=this.rtAir;for(let f=0;f<zl;f++){let d=this.down.uniforms;d.tSrc.value=u.texture,d.uTexel.value.set(1/u.width,1/u.height),d.uThreshold.value=f===0?1.1:0,this.pass(this.down,this.rtDown[f]),u=this.rtDown[f]}for(let f=zl-2;f>=0;f--){let d=this.up.uniforms;d.tSrc.value=u.texture,d.tAdd.value=this.rtDown[f].texture,d.uTexel.value.set(1/u.width,1/u.height),this.pass(this.up,this.rtUp[f]),u=this.rtUp[f]}let c=this.final.uniforms;c.tColor.value=this.rtAir.texture,c.tBloom.value=u.texture,c.uTexel.value.set(1/this.w,1/this.h),this.pass(this.final,null)}};var Lh={version:2,checked:"2026-11-12",what:"How the 3D city on the globe was built from Plato's Critias: which parts follow the text, with the passage, and which parts are our choices because the text is silent. The code is source/engine/city.js and source/engine/city/. Every mesh in the model names one id from this file.",text:{work:"Plato, Critias",translation:"R. G. Bury, Loeb Classical Library, 1929",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0180%3Atext%3DCriti.",checked_against:"https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0059/tlg032/tlg0059.tlg032.perseus-eng2.xml"},units:{stadion_m:185,plethron:"one sixth of a stadion",note:"The stadion is drawn at 185 m. data/plato.json lists the other lengths scholars use; the whole city scales with it."},from_text:[{id:"hill",what:"The city stands on a hill that is low on all sides, about 50 stadia from the sea",ref:"Critias 113c",quote:"at a distance of about 50 stades, there stood a mountain that was low on all sides",param:"hill"},{id:"rings",what:"Three rings of sea and two of land round a central hill",ref:"Critias 113d",quote:"he made circular belts of sea and land enclosing one another alternately, some greater, some smaller, two being of land and three of sea",param:"rings"},{id:"ring-widths",what:"Ring widths from the centre: water 1, land 2, water 2, land 3, water 3 stadia",ref:"Critias 115e",quote:"The greatest of the circles into which a boring was made for the sea was three stades in breadth, and the circle of land next to it was of equal breadth; and of the second pair of circles that of water was two stades in breadth and that of dry land equal again to the preceding one of water; and the circle which ran round the central island itself was of a stade's breadth.",param:"rings"},{id:"island",what:"Central island five stadia across",ref:"Critias 116a",quote:"this island, wherein stood the royal palace, was of five stades in diameter",param:"islandDiameter"},{id:"island-gardens",what:"The central island set in order by the god, bearing every kind of food",ref:"Critias 113e",quote:"producing out of the earth all kinds of food in plenty"},{id:"canal",what:"Canal from the sea to the outer ring: 3 plethra wide, 100 feet deep, 50 stadia long",ref:"Critias 115d",quote:"beginning at the sea, they bored a channel right through to the outermost circle, which was three plethra in breadth, one hundred feet in depth, and fifty stades in length",param:"canalLength, canalWidthPlethra"},{id:"canal-mouth",what:"The mouth of the canal on the sea, wide enough for the largest ships",ref:"Critias 115d",quote:"they made the entrance to it from the sea like that to a harbor by opening out a mouth large enough for the greatest ships to sail through",drawn:!1,note:"At the sea, 50 stadia out: beyond the modelled ground. The canal's course is drawn as a line."},{id:"harbours",what:"Three harbours: the three rings of water",ref:"Critias 117d",quote:"after crossing the three outer harbors"},{id:"ship-passages",what:"Roofed passages for one trireme through the rings of land, beside the bridges",ref:"Critias 115d-e",quote:"through the circles of land, which divided those of sea, over against the bridges they opened out a channel leading from circle to circle, large enough to give passage to a single trireme; and this they roofed over above so that the sea-way was subterranean"},{id:"bridges",what:"Bridges over the rings of water, a plethron wide, with towers and gates",ref:"Critias 115c, 116a",quote:"the bridge, which was a plethrum in breadth \u2026 and upon the bridges on each side, over against the passages for the sea, they erected towers and gates",param:"bridgeWidthPlethra"},{id:"bridge-gates",what:"Towers and gates on the bridges, on each side, where the sea passes",ref:"Critias 116a",quote:"upon the bridges on each side, over against the passages for the sea, they erected towers and gates"},{id:"ring-walls",what:"A stone wall round the island, round each ring and along both sides of the bridge",ref:"Critias 116a",quote:"Now the island and the circles and the bridge, which was a plethrum in breadth, they encompassed round about, on this side and on that, with a wall of stone"},{id:"stone",what:"White, black and red stone, quarried on the spot",ref:"Critias 116a-b",quote:"the stone they quarried beneath the central island all round, and from beneath the outer and inner circles, some of it being white, some black and some red"},{id:"rock-docks",what:"Two docks cut into the rock",ref:"Critias 116b",quote:"while quarrying it they constructed two inner docks, hollowed out and roofed over by the native rock"},{id:"patterned-buildings",what:"Buildings of one colour of stone, and buildings patterned in white, black and red",ref:"Critias 116b",quote:"of the buildings some they framed of one simple color, in others they wove a pattern of many colors by blending the stones for the sake of ornament",shape:"ours"},{id:"walls",what:"Walls faced with brass (outer ring), tin (inner ring) and orichalcum (citadel)",ref:"Critias 116b-c",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle; and that of the inner one they coated with tin; and that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"wall-brass",what:"The wall round the outermost ring, covered with brass",ref:"Critias 116b",quote:"they covered with brass, as though with plaster, all the circumference of the wall which surrounded the outermost circle"},{id:"wall-tin",what:"The wall round the inner ring, coated with tin",ref:"Critias 116b",quote:"that of the inner one they coated with tin"},{id:"wall-orichalcum",what:"The wall round the acropolis, coated with orichalcum",ref:"Critias 116b-c",quote:"that which encompassed the acropolis itself with orichalcum which sparkled like fire"},{id:"palace",what:"The royal palace on the central island, enlarged by every king",ref:"Critias 115c-d",quote:"they made of it an abode amazing to behold for the magnitude and beauty of its workmanship",shape:"ours"},{id:"shrine",what:"Shrine of Cleito and Poseidon at the centre, inside a wall of gold; kept as holy ground",ref:"Critias 116c",quote:"In the center there stood a temple sacred to Cleito and Poseidon, which was reserved as holy ground, and encircled with a wall of gold",shape:"ours"},{id:"shrine-wall",what:"The wall of gold round the shrine of Cleito and Poseidon",ref:"Critias 116c",quote:"encircled with a wall of gold"},{id:"temple",what:"Temple of Poseidon: a stadion long, 3 plethra wide, silver outside, gold pinnacles",ref:"Critias 116d",quote:"the temple of Poseidon himself was a stade in length, three plethra in breadth, and of a height which appeared symmetrical therewith \u2026 All the exterior of the temple they coated with silver, save only the pinnacles, and these they coated with gold.",param:"templeLength, templeWidth"},{id:"pinnacles",what:"Gold on the pinnacles of the temple",ref:"Critias 116d",quote:"save only the pinnacles, and these they coated with gold"},{id:"temple-ceiling",what:"Inside the temple: a ceiling of ivory, varied with gold, silver and orichalcum",ref:"Critias 116d",quote:"they made the roof all of ivory in appearance, variegated with gold and silver and orichalcum"},{id:"temple-interior",what:"Inside the temple: walls, pillars and floor covered with orichalcum",ref:"Critias 116d",quote:"all the rest of the walls and pillars and floors they covered with orichalcum"},{id:"poseidon",what:"A gold Poseidon in a chariot with six winged horses, his head touching the roof",ref:"Critias 116d-e",quote:"golden statues, one being that of the God standing on a chariot and driving six \u2026 winged steeds, his own figure so tall as to touch the ridge of the roof"},{id:"nereids",what:"A hundred Nereids on dolphins round him",ref:"Critias 116e",quote:"round about him a hundred Nereids on dolphins"},{id:"votive-inside",what:"Many other statues inside, given by private men",ref:"Critias 116e",quote:"it contained also many other images, the votive offerings of private men",shape:"ours"},{id:"pillar",what:"A pillar of orichalcum inside the temple, with the laws on it",ref:"Critias 119c-d",quote:"a pillar of orichalcum, which was placed within the temple of Poseidon in the center of the island"},{id:"statues",what:"Gold statues of the kings and their wives round the temple",ref:"Critias 116e",quote:"outside, round about the temple, there stood images in gold of all the princes, both themselves and their wives"},{id:"votive-outside",what:"Other offerings round the temple, from kings, citizens and subject peoples",ref:"Critias 116e",quote:"together with many other votive offerings both of the kings and of private persons",shape:"ours"},{id:"altar",what:"The altar, matching the temple in size and workmanship",ref:"Critias 117a",quote:"in respect of its size and its workmanship, harmonized with its surroundings",shape:"ours"},{id:"bulls",what:"Bulls loose in the precinct of Poseidon",ref:"Critias 119d",quote:"In the sacred precincts of Poseidon there were bulls at large",drawn:!1,note:'No animals or people are drawn; see the choice "no-figures".'},{id:"springs",what:"A hot and a cold spring on the central island, with buildings and trees round them",ref:"Critias 113e, 117a-b",quote:"The springs they made use of, one kind being of cold, another of warm water \u2026 these they surrounded with buildings and with plantations of trees",shape:"ours"},{id:"reservoirs",what:"Basins round the springs, some open to the sky and some roofed for hot baths in winter",ref:"Critias 117b",quote:"they set reservoirs round about, some under the open sky, and others under cover to supply hot baths in the winter",shape:"ours"},{id:"baths",what:"Separate baths for the kings, for citizens, for women, and for horses and beasts of burden",ref:"Critias 117b",quote:"they put separate baths for the kings and for the private citizens, besides others for women, and others again for horses and all other beasts of burden",shape:"ours"},{id:"grove",what:"The sacred grove of Poseidon",ref:"Critias 117b",quote:"the sacred grove of Poseidon, which contained trees of all kinds that were of marvellous beauty and height"},{id:"aqueducts",what:"Channels that carry the spring water to the outer rings by the bridges",ref:"Critias 117b",quote:"by means of channels they led the water to the outer circles over against the bridges",shape:"ours"},{id:"ring-buildings",what:"Temples, gardens, exercise grounds and barracks on the rings of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods, and many gardens and many exercising grounds \u2026 in each of the circular belts of island"},{id:"ring-temples",what:"Many temples on each ring of land",ref:"Critias 117c",quote:"there they had constructed many temples for gods",shape:"ours"},{id:"gardens",what:"Many gardens on each ring of land",ref:"Critias 117c",quote:"and many gardens and many exercising grounds"},{id:"gymnasia",what:"Exercise grounds for men on each ring of land",ref:"Critias 117c",quote:"many exercising grounds, some for men and some set apart for horses",shape:"ours"},{id:"horse-grounds",what:"Exercise grounds for horses, kept apart, on each ring of land",ref:"Critias 117c",quote:"some set apart for horses, in each of the circular belts of island",shape:"ours"},{id:"racecourse",what:"Racecourse a stadion wide, running round the middle of the larger ring",ref:"Critias 117c",quote:"in the center of the large island a racecourse laid out for horses, which was a stade in width, while as to length, a strip which ran round the whole circumference",param:"racecourseWidth"},{id:"barracks",what:"Barracks for most of the spearmen on both sides of the racecourse",ref:"Critias 117c",quote:"round about it, on this side and on that, were barracks for the greater part of the spearmen",shape:"ours"},{id:"guard-house",what:"The guard house of the more trusted spearmen, on the smaller ring",ref:"Critias 117c-d",quote:"was posted in the smaller circle, which was nearer the acropolis",shape:"ours"},{id:"guard-dwellings",what:"Dwellings of the most trusted guards, on the acropolis round the kings",ref:"Critias 117d",quote:"had dwellings granted to them within the acropolis round about the persons of the kings",shape:"ours"},{id:"shipyards",what:"Shipyards full of triremes and their gear",ref:"Critias 117d",quote:"the shipyards were full of triremes and all the tackling that belongs to triremes",shape:"ours"},{id:"merchant-ships",what:"Merchant ships filling the canal and the largest harbour",ref:"Critias 117e",quote:"the sea-way and the largest harbor were filled with ships and merchants coming from all quarters",shape:"ours"},{id:"outer-wall",what:"Outer wall 50 stadia from the largest ring, its ends meeting at the canal's mouth on the sea",ref:"Critias 117e",quote:"a wall which began at the sea and ran round in a circle, at a uniform distance of fifty stades from the largest circle and harbor, and its ends converged at the seaward mouth of the channel",param:"outerWallDistance"},{id:"houses",what:"The town inside the outer wall: many houses set close together",ref:"Critias 117e",quote:"The whole of this wall had numerous houses built on to it, set close together",note:'Bury makes the houses line the wall. The Greek is "touto de pan synoikeito hypo pollon kai pyknon oikeseon": all of this was settled with many dense dwellings, which Jowett gives as "The entire area was densely crowded with habitations". We draw the area filled, after the Greek and Jowett.'},{id:"faces-south",what:"The sea lies south of the city",ref:"Critias 118a-b",quote:"this region, all along the island, faced towards the South and was sheltered from the Northern blasts",param:"seaBearing"}],choices:[{id:"stadion",what:"185 m to the stadion",why:"Plato gives stadia, not metres. Lengths from about 157 m to 192 m are used by scholars. The whole city scales with this number."},{id:"style",what:"One style throughout: Greek building forms of Plato's own century (columns, gabled roofs with tiles, ashlar walls with battlements), made strange by the materials the text gives: three colours of stone laid in bands and patterns, and metal skins on walls and temple",why:'Plato wrote about 360 BCE for Athenian readers and uses Greek building words (teichos, pyrgoi, pylai, neosoikoi, gymnasia, hippodromos, neos). He sets the city 9,000 years earlier and says of the temple that "there was something of the barbaric in its appearance" (116d). Rings of wall, each differently coloured and the innermost coated in silver and gold, are what Herodotus (1.98) reports of Ecbatana, the Median capital: a picture of eastern royal splendour his readers knew. So the forms are Greek and the surfaces are the foreign part. This is a drawing of how a Greek reader could have pictured it, not of any real place.',sources:[{what:"Herodotus, Histories 1.98, tr. A. D. Godley (1920): the seven ringed walls of Ecbatana, their battlements white, black, purple, blue, orange, silver and gold",url:"https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126%3Abook%3D1%3Achapter%3D98",read:"2026-11-12"}]},{id:"heights",what:"Heights: banks 8 m above the water with a quay 2 m above it, the hill 24 m above the banks, walls 11 m with towers to 17 m, gate towers 21 m",why:'The text says only that the lips of the rings stood "a sufficient height above the level of the sea" for a roofed ship passage (115e), and gives no wall heights. The banks are as high as a trireme without its mast needs to pass under a roof of rock.'},{id:"walls-both-shores",what:"Each ring of land has a wall on both shores, set back from the water behind a harbour strip, and both are faced in that ring's metal on the side towards the water",why:`116a puts the walls round the island, the rings and the bridge "on this side and on that"; 116b names one wall per ring for the metal. We wall both shores and face both in that ring's metal.`},{id:"wall-towers",what:"Towers at intervals along the ring walls, battlements and a walk on top",why:"Towers and gates are stated only for the bridges (116a). A Greek city wall of Plato's time had towers and a crenellated walk."},{id:"metal-look",what:'How the metals look: brass a yellow gold-brown, tin a soft grey-white, orichalcum a red gold "sparkling like fire", silver and gold bright; all slightly weathered sheet, with seams',why:'The text names the metals and says the brass was put on "as though with plaster" (116b). Orichalcum is unknown ("now known only by name", 114e); a red-gold copper alloy is the usual guess.'},{id:"road-offset",what:"One straight road from the town to the palace, 96 m east of the canal's line; the roofed ship passages through the rings of land are on the canal's line",why:'Bridges and ship passages are "over against" each other (115e, 116a). Their exact relation is not given. Ships come up the canal and go straight on through the passages; the road and its bridges run beside them.'},{id:"bridge-form",what:"Bridges of stone on piers with flat spans, a parapet wall each side, the water channel under the roadway",why:"The text gives only the width, a plethron (116a), the walls on both sides and the towers and gates. Greek bridges of the time were piers with corbelled or lintelled openings; the arch was not in general use."},{id:"gate-form",what:"Each bridge end has two towers with a gate between, the gate leaves faced in the ring's metal",why:"116a states towers and gates, no form."},{id:"aqueduct-form",what:"The spring water crosses each bridge in a covered stone channel along the parapet, and falls into basins on the rings",why:'117b says channels led the water to the outer rings by the bridges (Jowett: "by aqueducts along the bridges"). Their form is not given.'},{id:"quays",what:"A level harbour strip at quay height between the water and the foot of each bank, with mooring posts, storehouses on the merchants' harbour and steps up the banks",why:'Not described. Harbours "full of ships" (117e) need them.'},{id:"rock-dock-place",what:"The two rock-cut docks open off the innermost ring of water, in the flank of the central island, as two pairs of roofed slips",why:"116b: two inner docks hollowed out and roofed by the rock, made while quarrying under the island and the rings. The Greek (neosoikous koilous diplous entos) can also be read as double ship sheds. Where they were is not said."},{id:"ship-sheds",what:"Rows of roofed ship sheds on slipways along the three inner harbour strips, each 40 m by 7.4 m, in groups of six",why:"The text has shipyards full of triremes (117d), not their layout. Sheds are sized to the trireme we draw."},{id:"triremes",what:"Triremes about 37 m long and 5.5 m in beam, with a ram, three banks of oars, one mast and an upturned stern",why:"Plato says triremes (115e, 117d) and nothing of their shape. The form follows the Athenian trireme of his own time as rebuilt in the trial ship Olympias.",sources:[{what:"Olympias, the reconstruction of an Athenian trireme (built 1985 to 1987 to John Coates's drawings; 170 oars in three banks; bronze ram)",url:"https://en.wikipedia.org/wiki/Olympias_(trireme)",read:"2026-11-12"}]},{id:"merchantmen",what:"Round-hulled merchant ships 14 to 24 m long with one square sail",why:'117e says only "ships and merchants coming from all quarters".'},{id:"temple-form",what:"Poseidon's temple as a Greek temple with a colonnade all round, on four steps in the three stones, 11 by 22 columns, with a sun disc of gold in each gable",why:"Plato gives its size and metals and says it looked somewhat barbaric (116d). Its form is not described. A stadion by three plethra (185 by 92.5 m) is far larger than any Greek temple; the columns here are 3.4 m thick and 30 m high."},{id:"temple-height",what:"The temple is 41 m to the top of the cornice and 54 m to the ridge",why:'116d: "of a height which appeared symmetrical therewith". We use the proportion of height to width on the front of the Parthenon, 4 to 9.',sources:[{what:"Parthenon: a 4:9 proportion in the elevation",url:"https://en.wikipedia.org/wiki/Parthenon",read:"2026-11-12"}]},{id:"pinnacle-form",what:"The pinnacles are the ornaments on the ridge ends and corners of the roof (akroteria), as tall finials",why:"The Greek word is akroteria. Their shape is not given."},{id:"temple-interior-layout",what:"Inside: one great room with two rows of pillars, Poseidon's chariot at the far end facing the door, the Nereids in rows down both sides, the pillar of the laws before the statue",why:"116d-e and 119c-d list what was inside, not where it stood."},{id:"figure-form",what:"Statues are drawn as plain, smooth figures without faces or detail",why:"We will not invent portraits. The text gives their material (gold) and who they are."},{id:"counts",what:"Numbers: 60 royal statues round the temple, some 30 other offerings, 24 statues inside, towers, ships, sheds, buildings and trees",why:"Not given, except 100 Nereids (116e) and 1,200 ships for the whole fleet (119b). Ten kings and their wives over many generations would be more statues than we draw."},{id:"altar-form",what:"A long stepped altar of white stone before the east front of the temple, 46 m long",why:"117a says only that it matched its surroundings in size and workmanship."},{id:"shrine-form",what:"The shrine of Cleito and Poseidon is a round building with a ring of columns and an open eye in its roof; the wall of gold is 4.5 m high and has a gate towards the sea",why:`116c: holy ground, kept closed (abaton), inside a wall of gold. Nothing more: no shape and no size for either. A round building is one of the forms Greek builders used for a holy place. The gate and the open door are ours, because the shrine is used as this community's hall (see "hall").`},{id:"palace-plan",what:"The palace as ranges of two storeys round courts north of the shrine, with a great hall behind a porch of red columns and a taller hall behind it",why:"115c-d: each king added to it. No plan is given."},{id:"baths-layout",what:"Two round spring houses, two open basins and two roofed ones, three bath buildings round courts and a long trough hall for horses, in the north-east of the island; a stone channel carries the outflow to the grove and to the bridge",why:"117a-b lists them, without a plan."},{id:"grove-trees",what:"The grove: tall cypresses, planes and pines; gardens: olives, fruit trees and vines in rows",why:`117b: "trees of all kinds" of great height and beauty. 115a-b lists the island's fruits. The kinds drawn are Mediterranean, which is a choice.`},{id:"ring-layout",what:"How the rings of land are laid out: temples in walled precincts, gymnasia as colonnaded courts, horse grounds as fenced paddocks, gardens between, a road round each ring",why:"117c lists them and puts the racecourse in the middle of the larger ring with barracks on both sides. The rest of the plan is ours."},{id:"racecourse-form",what:"The racecourse as a sand track a stadion wide between low stone kerbs, with a ring of marker columns down its middle and stone seats by the road",why:"117c gives its width and that it ran round the whole ring."},{id:"house-form",what:"Houses of one and two storeys in blocks round yards, plastered, with tiled roofs, sixteen avenues leading to the harbour",why:"Not described."},{id:"extent",what:"Only the rings and the town within 2.5 stadia of the harbour are modelled, on made ground that ends in a grass bank; the outer wall and the rest of the canal are drawn as lines over the real land",why:"The wall is 50 stadia out (117e), so the whole city is about 23 km across. Levelling that much ground would hide the place it stands on."},{id:"houses-reading",what:"The town fills the ground inside the outer wall, rather than lining the wall",why:'Translations differ at 117e: see the entry "houses". The modelled band shows the nearest part of it.'},{id:"no-figures",what:"No people or animals are drawn",why:"The text has crowds, merchants, spearmen, horses and bulls loose in the precinct (119d). Figures would be invention at every step, and badly drawn ones spoil the scale. Doors, steps, ships and trees give the scale instead."},{id:"water",what:"The water in the rings is calm sea water about 30 m deep, clear enough to see the quay foot",why:"The canal is 100 feet deep (115d). The depth of the rings is not given."},{id:"plain",what:"The great plain, its ditch and canals are not modelled",why:"They are described (118a-e: a plain 3,000 by 2,000 stadia, a ditch a stadion wide and 10,000 stadia long) and are still to do."},{id:"hall",what:"The shrine stands open, and inside it is this community's hall: the research on its wall, a globe on its table",why:"Plato says only that the shrine stood in the centre, was reserved as holy ground, and had a wall of gold round it (116c). He gives it no shape and says nothing of its inside. We made the one closed place in the text the room where the search is shown and people meet. Nothing inside it is from the text."},{id:"home-site",what:"When nobody has stood it anywhere, the city stands on the open Atlantic at 35.3\xB0N, 9.9\xB0W, its canal running south",why:"The text says only that the island lay in front of the Pillars of Heracles, out in the Atlantic (Timaeus 24e). No island is there: the elevation tiles the globe uses put the sea floor at that spot 3,762 m down. The city is set where the words point so that no place anyone has proposed is favoured. It can be stood on any of them instead."}],shape_note:`An entry with "shape": "ours" is stated by Plato, but he gives it no size or form, so everything about how it is drawn is our choice. The page's text-only view draws those pale, together with the choices. An entry with "drawn": false is in the text and not in the model.`};var Gl={stadion:185,islandDiameter:5,rings:[["water",1],["land",2],["water",2],["land",3],["water",3]],canalLength:50,canalWidthPlethra:3,bridgeWidthPlethra:1,templeLength:1,templeWidth:.5,racecourseWidth:1,outerWallDistance:50,bank:8,hill:24,wallHeight:11,wallThickness:4.5,seaBearing:180,modelledTown:2.5},ff=(i={})=>{let t={...Gl,...i},e=t.stadion,n=e/6,s=e/185,r=[t.islandDiameter/2*e];for(let[,mt]of t.rings)r.push(r[r.length-1]+mt*e);let[a,l,o,h,u,c]=r,f=t.bank,d=2,p=t.wallHeight,v=t.wallThickness,g=t.canalWidthPlethra*n/2,m=t.bridgeWidthPlethra*n/2,x={isle:12*s,r1in:46*s,r1out:46*s,r2in:46*s,r2out:40*s,town:36*s},_=a-x.isle,b=l+x.r1in,M=o-x.r1out,C=h+x.r2in,y=u-x.r2out,T=c+x.town,U=c+t.modelledTown*e,S=U+70*s,V=c+t.outerWallDistance*e,K=g+m+34*s,it=7.5,D=f+t.hill,W=a*.6,B=a*.76,j=D-5,lt=f+3,et=Math.sqrt(W*W-K*K),pt=B+44*s,dt=(C+y)/2,at=t.racecourseWidth*e/2,k=mt=>Math.sqrt(Math.max(0,mt*mt-K*K)),E=[[k(_),k(b)],[k(M),k(C)],[k(y),k(T)]],O=mt=>Math.abs(mt-K)<=m,G=mt=>mt<=W?D:mt<=B?j+(lt-j)*(mt-W)/(B-W):f,rt=(mt,F,ht)=>{let Z=Math.hypot(mt,F),ct=(yt,Ct)=>(ht&&(ht.kind=Ct),yt);if(Z>S)return null;let Y=-F;if(O(mt)&&Y>0){for(let[yt,Ct]of E)if(Y>=yt-1&&Y<=Ct+1)return ct(f,"bridge");if(Y<=pt&&Y>=et)return ct(D+(f-D)*(Y-et)/(pt-et),"ramp")}return Z<=_?ct(G(Z),Z<=W?"plateau":Z<=B?"slope":"island"):Z<=a?ct(d,"quay"):Z<l?ct(0,"water"):Z<=b||Z>=M&&Z<=o?ct(Math.abs(mt)<it&&Y>0?0:d,"quay"):Z<=M?ct(f,"ring-inner"):Z<h?ct(0,"water"):Z<=C||Z>=y&&Z<=u?ct(Math.abs(mt)<it&&Y>0?0:d,"quay"):Z<=y?ct(f,Math.abs(Z-dt)<at?"racecourse":"ring-outer"):Z<c||Math.abs(mt)<g&&Y>0?ct(0,"water"):Z<=T?ct(d,"quay"):Z<=U?ct(f,"town"):ct(f+(-3-f)*(Z-U)/(S-U),"bank")},X=-Math.PI/2;return{SEA:X,roadAngle:mt=>X+Math.asin(Math.min(1,K/mt)),arcsExcept:mt=>{let F=mt.map(([Z,ct])=>{let Y=Z-ct;return Y=(Y%(2*Math.PI)+2*Math.PI)%(2*Math.PI),[Y,Y+2*ct]}).sort((Z,ct)=>Z[0]-ct[0]);if(!F.length)return[[0,2*Math.PI]];let ht=[];for(let Z=0;Z<F.length;Z++){let ct=F[Z][1],Y=Z+1<F.length?F[Z+1][0]:F[0][0]+2*Math.PI;Y-ct>1e-6&&ht.push([ct,Y])}return ht},P:t,S:e,k:s,plethron:n,shores:r,rIsle:a,rW1:l,rL1:o,rW2:h,rL2:u,rW3:c,B:f,Q:d,H:p,T:v,canalHalf:g,bridgeHalf:m,strip:x,rA:_,r1a:b,r1b:M,r2a:C,r2b:y,rT:T,core:U,edge:S,rWall:V,off:K,tunnelHalf:it,Zp:D,Rp:W,Rs:B,zSlopeTop:j,zSlopeFoot:lt,rampTop:et,rampFoot:pt,rcMid:dt,rcHalf:at,along:k,bridges:E,onRoad:O,islandZ:G,groundZ:rt}};var re=Math.PI*2,Gn=i=>()=>(i=i*1664525+1013904223>>>0)/4294967296;var _i=class{constructor(){this.c=1,this.s=0,this.x=0,this.y=0,this.z=0}set(t=0,e=0,n=0,s=0){return this.c=Math.cos(s),this.s=Math.sin(s),this.x=t,this.y=e,this.z=n,this}push(t,e,n,s=0){let r=[this.c,this.s,this.x,this.y,this.z],a=Math.cos(s),l=Math.sin(s),o=this.x+this.c*t-this.s*e,h=this.y+this.s*t+this.c*e,u=this.c*a-this.s*l,c=this.s*a+this.c*l;return this.c=u,this.s=c,this.x=o,this.y=h,this.z+=n,r}pop(t){[this.c,this.s,this.x,this.y,this.z]=t}},bi=class{constructor(t,e){this.F=t,this.id=e,this.cap=1024,this.icap=2048,this.pos=new Float32Array(this.cap*3),this.nrm=new Int8Array(this.cap*4),this.col=new Uint8Array(this.cap*4),this.idx=new Uint32Array(this.icap),this.nv=0,this.ni=0,this.s=0,this.r=255,this.g=255,this.b=255}surf(t,e){return this.s=t,e?(this.r=e[0],this.g=e[1],this.b=e[2]):this.r=this.g=this.b=255,this}room(t,e){if(this.nv+t>this.cap){for(;this.nv+t>this.cap;)this.cap*=2;let n=new Float32Array(this.cap*3);n.set(this.pos.subarray(0,this.nv*3)),this.pos=n;let s=new Int8Array(this.cap*4);s.set(this.nrm.subarray(0,this.nv*4)),this.nrm=s;let r=new Uint8Array(this.cap*4);r.set(this.col.subarray(0,this.nv*4)),this.col=r}if(this.ni+e>this.icap){for(;this.ni+e>this.icap;)this.icap*=2;let n=new Uint32Array(this.icap);n.set(this.idx.subarray(0,this.ni)),this.idx=n}}v(t,e,n,s,r,a,l=1){this.room(1,0);let o=this.F,h=this.nv,u=h*3,c=h*4;return this.pos[u]=o.x+o.c*t-o.s*e,this.pos[u+1]=o.y+o.s*t+o.c*e,this.pos[u+2]=o.z+n,this.nrm[c]=(o.c*s-o.s*r)*127,this.nrm[c+1]=(o.s*s+o.c*r)*127,this.nrm[c+2]=a*127,this.col[c]=this.r*l,this.col[c+1]=this.g*l,this.col[c+2]=this.b*l,this.col[c+3]=this.s,this.nv++}tri3(t,e,n){this.room(0,3),this.idx[this.ni++]=t,this.idx[this.ni++]=e,this.idx[this.ni++]=n}quad4(t,e,n,s){this.room(0,6);let r=this.idx,a=this.ni;r[a++]=t,r[a++]=e,r[a++]=n,r[a++]=t,r[a++]=n,r[a++]=s,this.ni=a}quad(t,e,n,s,r=1,a=r,l=a,o=r){let h=e[0]-t[0],u=e[1]-t[1],c=e[2]-t[2],f=s[0]-t[0],d=s[1]-t[1],p=s[2]-t[2],v=u*p-c*d,g=c*f-h*p,m=h*d-u*f,x=Math.hypot(v,g,m)||1;v/=x,g/=x,m/=x;let _=this.v(t[0],t[1],t[2],v,g,m,r);return this.v(e[0],e[1],e[2],v,g,m,a),this.v(n[0],n[1],n[2],v,g,m,l),this.v(s[0],s[1],s[2],v,g,m,o),this.quad4(_,_+1,_+2,_+3),this}tri(t,e,n,s=1,r=s,a=s){let l=e[0]-t[0],o=e[1]-t[1],h=e[2]-t[2],u=n[0]-t[0],c=n[1]-t[1],f=n[2]-t[2],d=o*f-h*c,p=h*u-l*f,v=l*c-o*u,g=Math.hypot(d,p,v)||1;d/=g,p/=g,v/=g;let m=this.v(t[0],t[1],t[2],d,p,v,s);return this.v(e[0],e[1],e[2],d,p,v,r),this.v(n[0],n[1],n[2],d,p,v,a),this.tri3(m,m+1,m+2),this}wall(t,e,n,s,r,a,l=1,o=l){return this.quad([t,e,r],[n,s,r],[n,s,a],[t,e,a],l,l,o,o)}slab(t,e,n,s,r,a=0,l=1){let o=Math.cos(a)/2,h=Math.sin(a)/2,u=o*s,c=h*s,f=-h*r,d=o*r;return this.quad([t-u-f,e-c-d,n],[t+u-f,e+c-d,n],[t+u+f,e+c+d,n],[t-u+f,e-c+d,n],l)}box(t,e,n,s,r,a,l=0,{top:o=!0,bottom:h=!1,foot:u=1,head:c=u,sides:f=15,topShade:d=1}={}){let p=Math.cos(l)/2,v=Math.sin(l)/2,g=p*s,m=v*s,x=-v*r,_=p*r,b=n+a,M=[[t-g-x,e-m-_],[t+g-x,e+m-_],[t+g+x,e+m+_],[t-g+x,e-m+_]];for(let C=0;C<4;C++)if(f&1<<C){let y=M[C],T=M[(C+1)%4];this.wall(y[0],y[1],T[0],T[1],n,b,u,c)}return o&&this.quad([M[0][0],M[0][1],b],[M[1][0],M[1][1],b],[M[2][0],M[2][1],b],[M[3][0],M[3][1],b],d),h&&this.quad([M[3][0],M[3][1],n],[M[2][0],M[2][1],n],[M[1][0],M[1][1],n],[M[0][0],M[0][1],n],u*.6),this}sweep(t,{arcs:e=[[0,re]],step:n=8,sense:s=1}={}){let r=Math.max(...t.map(a=>a[0]),1);for(let[a,l]of e){let o=Math.max(2,Math.ceil((l-a)*r/n));for(let h=0;h<t.length-1;h++){let u=t[h],c=t[h+1];if(Math.abs(u[0]-c[0])<1e-6&&Math.abs(u[1]-c[1])<1e-6)continue;let f=u[2]??1,d=c[2]??1;for(let p=0;p<o;p++){let v=a+(l-a)*p/o,g=a+(l-a)*(p+1)/o,m=Math.cos(v),x=Math.sin(v),_=Math.cos(g),b=Math.sin(g),M=[u[0]*m,u[0]*x,u[1]],C=[u[0]*_,u[0]*b,u[1]],y=[c[0]*_,c[0]*b,c[1]],T=[c[0]*m,c[0]*x,c[1]];s>0?this.quad(M,C,y,T,f,f,d,d):this.quad(C,M,T,y,f,f,d,d)}}}return this}shaft(t,e,n,s,r,a,l=12,{foot:o=1,head:h=o,cap:u=!1,phase:c=0}={}){for(let f=0;f<l;f++){let d=c+f/l*re,p=c+(f+1)/l*re,v=Math.cos(d),g=Math.sin(d),m=Math.cos(p),x=Math.sin(p);this.quad([t+s*v,e+s*g,n],[t+s*m,e+s*x,n],[t+r*m,e+r*x,n+a],[t+r*v,e+r*g,n+a],o,o,h,h),u&&this.tri([t,e,n+a],[t+r*v,e+r*g,n+a],[t+r*m,e+r*x,n+a],h)}return this}turned(t,e,n,s,r=8,{squash:a=1,rot:l=0,shade:o=1}={}){let h=this.nv,u=s.length;for(let c=0;c<u;c++){let[f,d]=s[c],p=s[Math.max(0,c-1)],v=s[Math.min(u-1,c+1)],g=v[0]-p[0],m=v[1]-p[1],x=Math.hypot(g,m)||1,_=m/x,b=-g/x;for(let M=0;M<r;M++){let C=l+M/r*re,y=Math.cos(C),T=Math.sin(C)*a;this.v(t+f*y,e+f*T,n+d,_*y,_*Math.sin(C),b,o)}}for(let c=0;c<u-1;c++)for(let f=0;f<r;f++){let d=h+c*r+f,p=h+c*r+(f+1)%r;this.quad4(d,p,p+r,d+r)}return this}loft(t,{closed:e=!1,flip:n=!1,shade:s=1}={}){let r=this.nv,a=t.length,l=t[0].length;for(let h=0;h<a;h++)for(let u=0;u<l;u++){let c=t[h][u],f=t[Math.min(a-1,h+1)][u],d=t[Math.max(0,h-1)][u],p=t[h][e?(u+1)%l:Math.min(l-1,u+1)],v=t[h][e?(u+l-1)%l:Math.max(0,u-1)],g=f[0]-d[0],m=f[1]-d[1],x=f[2]-d[2],_=p[0]-v[0],b=p[1]-v[1],M=p[2]-v[2],C=m*M-x*b,y=x*_-g*M,T=g*b-m*_,U=(Math.hypot(C,y,T)||1)*(n?-1:1);this.v(c[0],c[1],c[2],C/U,y/U,T/U,c[3]??s)}let o=e?l:l-1;for(let h=0;h<a-1;h++)for(let u=0;u<o;u++){let c=r+h*l+u,f=r+h*l+(u+1)%l;n?this.quad4(c,f,f+l,c+l):this.quad4(c,c+l,f+l,f)}return this}geometry(){let t=new Ue;return t.setAttribute("position",new Pe(this.pos.slice(0,this.nv*3),3)),t.setAttribute("normal",new Pe(this.nrm.slice(0,this.nv*4),4,!0)),t.setAttribute("aTint",new Pe(this.col.slice(0,this.nv*4),4,!0)),t.setIndex(new Pe(this.nv>65535?this.idx.slice(0,this.ni):new Uint16Array(this.idx.subarray(0,this.ni)),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Vl=class{constructor(){this.F=new _i,this.bins=new Map}to(t){let e=this.bins.get(t);return e||this.bins.set(t,e=new bi(this.F,t)),e}proto(t){return new bi(new _i,t)}},Oi=(i,t,e)=>{let n=new Qr(i,t,e.length),s=new ve,r=new $n,a=new ni,l=new ft,o=new ft,h=new se,u=!1;return e.forEach((c,f)=>{a.set(c.tilt??0,0,c.rot??0,"ZXY"),r.setFromEuler(a),l.set(c.sx??1,c.sy??c.sx??1,c.sz??c.sx??1),o.set(c.x,c.y,c.z??0),n.setMatrixAt(f,s.compose(o,r,l)),c.tint?(u=!0,n.setColorAt(f,h.setRGB(c.tint[0]/255,c.tint[1]/255,c.tint[2]/255,Le))):u&&n.setColorAt(f,h.setRGB(1,1,1))}),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),n.computeBoundingBox(),n};var ai=["ashlar","paving","tiles","plaster","metal","grass","sand","wood","rock","leaf"],dy=Object.fromEntries(ai.map((i,t)=>[i,t])),tn=(i,t,e={})=>({layer:dy[i],size:t,metal:0,rough:1,bump:1,pattern:0,wet:1,keep:0,...e}),Wl={stone:tn("ashlar",3.6),stoneBands:tn("ashlar",3.6,{pattern:1}),stoneChequer:tn("ashlar",3.6,{pattern:2}),stoneCourses:tn("ashlar",3.6,{pattern:3}),smooth:tn("plaster",5,{rough:.8,bump:.5}),rock:tn("rock",9,{bump:1.3}),paving:tn("paving",7),plaster:tn("plaster",4.5,{bump:.7}),tiles:tn("tiles",2.6,{keep:1,wet:0}),metal:tn("metal",4.6,{metal:.72,rough:1.5,wet:0}),gilt:tn("metal",3.1,{metal:.8,rough:1.15,bump:.3,wet:0}),grass:tn("grass",7,{keep:1}),sand:tn("sand",6,{keep:1}),earth:tn("sand",8,{keep:0}),wood:tn("wood",2.6,{keep:1}),leaf:tn("leaf",5.5,{keep:1,wet:0,bump:1.6}),cloth:tn("plaster",2.2,{wet:0,bump:.4}),dark:tn("rock",9,{bump:.4,wet:0}),ivory:tn("plaster",6,{rough:.55,bump:.3,wet:0})},Ta=Object.keys(Wl),tt=Object.fromEntries(Ta.map((i,t)=>[i,t])),$={white:[226,219,203],black:[70,70,76],red:[150,78,58],brass:[205,160,72],tin:[196,201,204],orichalcum:[226,118,62],silver:[224,228,232],gold:[246,190,78],plaster:[[232,224,207],[222,208,184],[212,193,164],[226,214,196],[204,182,152],[236,230,218]],tile:[[255,255,255],[240,222,205],[226,204,186],[255,240,226]],wood:[150,118,86],darkWood:[92,70,50],hull:[78,60,44],sail:[232,222,198],ivory:[244,236,214],leaf:[[78,104,58],[92,116,66],[66,92,52],[104,122,70]],cypress:[[40,66,42],[48,74,46],[34,58,38]],olive:[[118,132,96],[104,120,88]],trunk:[96,78,60],shade:[26,26,28],sand:[255,255,255],water:[255,255,255]},Dh=["canal","merchant-ships","houses","harbours","bridges","bridge-gates","aqueducts","wall-brass","ship-passages","racecourse","barracks","horse-grounds","gymnasia","gardens","ring-temples","patterned-buildings","shipyards","wall-tin","guard-house","rock-docks","wall-orichalcum","guard-dwellings","springs","reservoirs","baths","grove","palace","shrine","shrine-wall","altar","statues","votive-outside","temple","pinnacles","temple-interior","temple-ceiling","poseidon","nereids","votive-inside","pillar"],tM=[...Dh,"hall","rings","island","hill","island-gardens","stone","ring-walls","quays","outer-wall","extent","ship-sheds","triremes","merchantmen","wall-towers","bridge-form","gate-form","palace-plan","house-form","grove-trees","ring-layout","racecourse-form","rock-dock-place","road-offset","temple-form","figure-form"];var je=(i,t)=>[Math.min(255,i[0]*t),Math.min(255,i[1]*t),Math.min(255,i[2]*t)],ls=(i,t,e,n,s,r,{n:a=12,surf:l=tt.smooth,tint:o=$.white,base:h=!1,shade:u=1,simple:c=!1}={})=>{if(i.surf(l,o),c){c==="pier"?i.box(t,e,n,s*2,s*2,r,0,{top:!1,foot:.8*u,head:.95*u}):(i.shaft(t,e,n,s,s*.82,r-s*.5,6,{foot:.82*u,head:.95*u}),i.box(t,e,n+r-s*.5,s*2.5,s*2.5,s*.5,0,{foot:.9*u,top:!1,bottom:!0}));return}let f=s*.55,d=s*.42,p=r-f-d,v=n;h&&(i.shaft(t,e,n,s*1.3,s*1.3,s*.35,a,{foot:.8*u,head:u,cap:!0}),v+=s*.35),i.shaft(t,e,v,s,s*.8,p-(v-n),a,{foot:.82*u,head:.95*u}),i.shaft(t,e,n+p,s*.8,s*1.22,f,a,{foot:.8*u,head:u}),i.box(t,e,n+p+f,s*2.7,s*2.7,d,0,{foot:.9*u,topShade:.7*u})},Ds=(i,t,e,n,s,r,a,l,o,h)=>{for(let u=0;u<a;u++){let c=a>1?u/(a-1):.5;ls(i,t+(n-t)*c,e+(s-e)*c,r,l,o,h)}},ql=(i,t,e,n,s,{over:r=.6,tile:a=$.tile[0],wall:l=[tt.plaster,$.plaster[0]],thick:o=.28,ridgeAlongY:h=!1}={})=>{let u=i.F,c=h?u.push(0,0,0,Math.PI/2):null;h&&([t,e]=[e,t]);let f=t/2+r*.5,d=e/2+r,p=s*r/(e/2),v=n-p,g=n+s;i.surf(tt.tiles,a),i.quad([-f,-d,v],[f,-d,v],[f,0,g],[-f,0,g],.92,.92,1,1),i.quad([f,d,v],[-f,d,v],[-f,0,g],[f,0,g],.92,.92,1,1),i.surf(tt.tiles,je(a,.7)),i.wall(-f,-d,f,-d,v-o,v,.7,.85),i.wall(f,d,-f,d,v-o,v,.7,.85);for(let m of[-1,1]){let x=m*f,_=[x,-d,v],b=[x,0,g],M=[x,d,v],C=y=>[y[0],y[1],y[2]-o];m>0?(i.quad(C(_),C(b),b,_,.75),i.quad(C(b),C(M),M,b,.75)):(i.quad(C(b),C(_),_,b,.75),i.quad(C(M),C(b),b,M,.75))}i.surf(tt.wood,$.darkWood),i.quad([f,-d,v-o],[-f,-d,v-o],[-f,-e/2,n-o],[f,-e/2,n-o],.45),i.quad([-f,d,v-o],[f,d,v-o],[f,e/2,n-o],[-f,e/2,n-o],.45),i.surf(l[0],l[1]),i.tri([t/2,-e/2,n],[t/2,e/2,n],[t/2,0,g-.05],.8,.8,.95),i.tri([-t/2,e/2,n],[-t/2,-e/2,n],[-t/2,0,g-.05],.8,.8,.95),c&&u.pop(c)},fy=(i,t,e,n,s,{over:r=.6,tile:a=$.tile[0],thick:l=.28}={})=>{let o=t/2+r,h=e/2+r,u=n-.15,c=n+s,f=Math.max(0,t/2-e/2);i.surf(tt.tiles,a),i.quad([-o,-h,u],[o,-h,u],[f,0,c],[-f,0,c],.92,.92,1,1),i.quad([o,h,u],[-o,h,u],[-f,0,c],[f,0,c],.92,.92,1,1),i.tri([o,-h,u],[o,h,u],[f,0,c],.92,.92,1),i.tri([-o,h,u],[-o,-h,u],[-f,0,c],.92,.92,1),i.surf(tt.tiles,je(a,.7)),i.box(0,0,u-l,o*2,h*2,l,0,{top:!1,bottom:!0,foot:.7})},$l=(i,t,e,n,s,r,a,l,o)=>{let h=t/2,u=e/2;n===0?i.wall(s-a/2,-u-o,s+a/2,-u-o,r,r+l,.85,1):n===1?i.wall(h+o,s-a/2,h+o,s+a/2,r,r+l,.85,1):n===2?i.wall(s+a/2,u+o,s-a/2,u+o,r,r+l,.85,1):i.wall(-h-o,s+a/2,-h-o,s-a/2,r,r+l,.85,1)},Ea=(i,t,e,n,s,r,{pw:a=1.5,ph:l=2.5,frame:o=$.white,leaf:h=$.darkWood}={})=>{i.surf(tt.smooth,o),$l(i,t,e,n,s,r,a+.5,l+.3,.05),i.surf(tt.wood,h),$l(i,t,e,n,s,r,a,l,.09)},py=(i,t,e,n,s,r,{pw:a=.8,ph:l=1.1}={})=>{i.surf(tt.smooth,$.white),$l(i,t,e,n,s,r-.12,a+.3,l+.24,.04),i.surf(tt.dark,$.shade),$l(i,t,e,n,s,r,a,l,.07)},on=(i,t,e,n,s,r,a,l,o={})=>{let{wall:h=[tt.plaster,$.plaster[0]],roof:u="gable",rise:c=Math.min(s,r)*.22,tile:f=$.tile[0],doors:d=[[0,0]],windows:p=1,base:v=null,cornice:g=null,ridgeAlongY:m=r>s,over:x=.6}=o,_=i.F.push(t,e,n,l);if(i.surf(h[0],h[1]).box(0,0,0,s,r,a,0,{top:u==="flat",foot:.78,head:1,topShade:.9}),v&&i.surf(v[0],v[1]).box(0,0,0,s+.3,r+.3,Math.min(1.1,a*.2),0,{foot:.72,head:.9,topShade:.8}),g&&i.surf(tt.smooth,g).box(0,0,a-.45,s+.5,r+.5,.45,0,{bottom:!0,foot:.8,topShade:.8}),u==="gable")ql(i,s,r,a,c,{tile:f,wall:h,ridgeAlongY:m,over:x});else if(u==="hip")fy(i,s,r,a,c,{tile:f,over:x});else{i.surf(h[0],h[1]);for(let[b,M,C,y]of[[0,-r/2+.2,s,.4],[0,r/2-.2,s,.4],[-s/2+.2,0,.4,r-.8],[s/2-.2,0,.4,r-.8]])i.box(b,M,a,C,y,.7,0,{foot:.9,topShade:.95})}for(let[b,M]of d)Ea(i,s,r,b,M,0,{ph:Math.min(2.6,a*.62)});if(p){let b=Math.max(1,Math.round(a/3.4));for(let M=0;M<b;M++){let C=a/b*M+a/b*.52;for(let y of[0,2,1,3]){let T=y%2?r:s,U=Math.floor(T/3.6)*(p>1,1);for(let S=0;S<U;S++){let V=-T/2+T*(S+.5)/U;M===0&&d.some(([K,it])=>K===y&&Math.abs(it-V)<1.6)||(S+M+y)%(p>1?1:2)||py(i,s,r,y,V,C,{pw:.7,ph:1})}}}}i.F.pop(_)},wi=(i,t,e,n,s,r,a,l,{wall:o=[tt.stone,$.white],tile:h=$.tile[1],cols:u=Math.max(3,Math.round(s/3.4)),colTint:c=$.white,r:f=.34,simple:d=!0}={})=>{let p=i.F.push(t,e,n,l);i.surf(tt.paving,$.white).box(0,0,0,s+1,r+1,.3,0,{foot:.8,topShade:.75}),i.surf(o[0],o[1]).box(0,r/2-.3,.3,s,.6,a+1.1,0,{foot:.7});for(let x of[-1,1])i.box(x*(s/2-.3),0,.3,.6,r,a+.5,0,{foot:.7});Ds(i,-s/2+.6,-r/2+.5,s/2-.6,-r/2+.5,.3,u,f,a-.4,{n:8,tint:c,simple:d}),i.surf(tt.smooth,c).box(0,-r/2+.5,a-.1,s,.8,.5,0,{bottom:!0,foot:.7});let v=a+.4,g=a+1.5,m=s/2+.4;i.surf(tt.tiles,h).quad([-m,-r/2-.5,v],[m,-r/2-.5,v],[m,r/2+.1,g],[-m,r/2+.1,g],.92,.92,1,1),i.surf(tt.wood,$.darkWood).quad([m,-r/2-.5,v-.2],[-m,-r/2-.5,v-.2],[-m,r/2,g-.25],[m,r/2,g-.25],.4),i.F.pop(p)},pf=(i,t,e,n,s,r,a,{wall:l=[tt.stone,$.white],colTint:o=$.white,tile:h=$.tile[0],cols:u=4,steps:c=3,closed:f=!1,finial:d=null}={})=>{let p=i.F.push(t,e,n,a),v=.32,g=s*.82,m=s*.052,x=f?0:Math.min(r*.28,s*.6);for(let b=0;b<c;b++)i.surf(tt.smooth,$.white).box(0,0,b*v,s+2.6-b*.9,r+2.6-b*.9,v,0,{foot:.8,topShade:.85});let _=c*v;if(i.surf(l[0],l[1]).box(0,x/2,_,s-1.2,r-x-.6,g,0,{top:!1,foot:.75}),!f){Ds(i,-s/2+m*1.6,-r/2+m*1.6,s/2-m*1.6,-r/2+m*1.6,_,u,m,g,{tint:o}),Ea(i,s-1.2,r-x-.6,0,0,_,{pw:s*.2,ph:g*.62});let b=i.F.push(0,x/2,0);i.F.pop(b)}if(i.surf(tt.smooth,o).box(0,0,_+g,s+.1,r+.1,s*.1,0,{bottom:!0,foot:.78,topShade:.8}),ql(i,s+.1,r+.1,_+g+s*.1,s*.19,{tile:h,wall:[tt.smooth,o],ridgeAlongY:!0,over:.5}),d)for(let b of[-1,1])i.surf(tt.gilt,d),i.shaft(0,b*(r/2+.3),_+g+s*.29,s*.035,.02,s*.16,6,{foot:.9});i.F.pop(p)},Xl=(i,t,e,n,s,r,a,l,{depth:o=5,wall:h=[tt.stone,$.white],tile:u=$.tile[1],floor:c=[tt.sand,$.sand],gate:f=!0}={})=>{let d=i.F.push(t,e,n,l);i.surf(c[0],c[1]).slab(0,0,.06,s-o*2,r-o*2,0,.95),wi(i,0,r/2-o/2,0,s,o,a,0,{wall:h,tile:u}),wi(i,0,-r/2+o/2,0,s,o,a,Math.PI,{wall:h,tile:u}),wi(i,s/2-o/2,0,0,r-o*2,o,a,-Math.PI/2,{wall:h,tile:u}),wi(i,-s/2+o/2,0,0,r-o*2,o,a,Math.PI/2,{wall:h,tile:u}),f&&i.surf(tt.wood,$.darkWood).wall(-1.4,-r/2-.08,1.4,-r/2-.08,.3,3.2,.8,1),i.F.pop(d)},Bi=(i,t,e,n,s,r,{pitch:a=3.2,w:l=1.7,t:o=.7,h=1.3,lowWall:u=.9}={})=>{let c=Math.hypot(n-t,s-e),f=Math.max(1,Math.round(c/a)),d=(n-t)/c,p=(s-e)/c,v=Math.atan2(p,d),g=p,m=-d;u&&i.box((t+n)/2-g*o/2,(e+s)/2-m*o/2,r,c,o,u,v,{foot:.9,topShade:.9});for(let x=0;x<f;x++){let _=(x+.5)/f*c;i.box(t+d*_-g*o/2,e+p*_-m*o/2,r+u,l,o,h,v,{foot:.92,topShade:.95})}},Aa=(i,t,e,n,s,r,a,{face:l=[tt.stone,$.white],crown:o=[tt.stone,$.white],slits:h=!0,band:u=null}={})=>{let c=i.F.push(t,e,n,a),f=s/2;i.surf(l[0],l[1]).box(0,0,0,s,s,r,0,{top:!1,foot:.72}),i.surf(o[0],o[1]).box(0,0,r,s+.7,s+.7,.7,0,{bottom:!0,foot:.8,topShade:.7}),u&&i.surf(u[0],u[1]).box(0,0,r*.62,s+.3,s+.3,.6,0,{bottom:!0,foot:.85});let d=r+.7,p=f+.35;if(i.surf(o[0],o[1]),Bi(i,-p,-p,p,-p,d,{pitch:2.6,w:1.3}),Bi(i,p,-p,p,p,d,{pitch:2.6,w:1.3}),Bi(i,p,p,-p,p,d,{pitch:2.6,w:1.3}),Bi(i,-p,p,-p,-p,d,{pitch:2.6,w:1.3}),h){i.surf(tt.dark,$.shade);for(let v of[0,1,2,3]){let g=v*Math.PI/2,m=Math.cos(g),x=Math.sin(g),_=x*(f+.06),b=-m*(f+.06);i.wall(_-m*.25,b-x*.25,_+m*.25,b+x*.25,r*.7,r*.7+1.8)}}i.F.pop(c)},my=[[.125,0],[.12,.08],[.098,.42],[.112,.6],[.092,.69],[.128,.795],[.118,.83],[.05,.855],[.062,.9],[.066,.94],[.045,.985],[0,1]],Ra=(i,t,e,n,s,r=0,{n:a=8,tint:l=$.gold,surf:o=tt.gilt,arm:h=!1}={})=>{i.surf(o,l);let u=i.F.push(t,e,n,r);i.turned(0,0,0,my.map(([c,f])=>[c*s,f*s]),a,{squash:.62}),h&&i.box(s*.16,-s*.03,s*.72,s*.3,s*.05,s*.05,.25,{bottom:!0}),i.F.pop(u)},Yl=(i,t,e,n,s,r,{plinth:a=[tt.smooth,$.white],tint:l=$.gold,ph:o=s*.32,pw:h=s*.36}={})=>{i.surf(a[0],a[1]).box(t,e,n,h*1.25,h*1.25,o*.2,r,{foot:.75,topShade:.8}),i.box(t,e,n+o*.2,h,h,o*.8,r,{foot:.85,topShade:.8}),Ra(i,t,e,n+o,s,r,{tint:l})},mf=(i,t,e,n,s,{surf:r=tt.smooth,tint:a=$.white,treads:l=Math.max(2,Math.round(Math.abs(s-n)/.4))}={})=>{i.surf(r,a);let o=(s-n)/l,h=e/l;for(let u=0;u<l;u++)i.wall(-t/2,u*h,t/2,u*h,n+u*o,n+(u+1)*o,.72,.85),i.quad([-t/2,u*h,n+(u+1)*o],[t/2,u*h,n+(u+1)*o],[t/2,(u+1)*h,n+(u+1)*o],[-t/2,(u+1)*h,n+(u+1)*o],.95)};var gf=(i,t,e)=>{let{B:n,Q:s,rIsle:r,rW1:a,rL1:l,rW2:o,rL2:h,rW3:u,rA:c,r1a:f,r1b:d,r2a:p,r2b:v,rT:g,core:m,edge:x,Zp:_,Rp:b,Rs:M,zSlopeTop:C,zSlopeFoot:y,SEA:T,roadAngle:U,arcsExcept:S,canalHalf:V,bridgeHalf:K,tunnelHalf:it,off:D,rampTop:W,rampFoot:B,k:j}=t,lt=e.phone?14:8,et=-3.2,pt=i.to("rings"),dt=i.to("quays"),at=i.to("stone"),k=i.to("rings"),E=i.to("island"),O=i.to("hill"),G=(A,ut)=>Math.asin(Math.min(1,ut/A)),rt=21,X=Math.PI/2,ot=S([[X,G(r,rt)]]);pt.surf(tt.stone,$.white).sweep([[r,et,.6],[r,s,.95]],{arcs:ot,step:lt}),pt.surf(tt.paving,$.white).sweep([[r,s,.95],[c,s,.8]],{arcs:ot,step:lt}),at.surf(tt.stoneCourses,$.white).sweep([[c,s,.7],[c,n,.95]],{arcs:S([[X,G(c,rt)]]),step:lt}),E.surf(tt.grass,[235,235,225]).sweep([[c,n],[M+26,n]],{step:lt}),E.surf(tt.paving,$.white).sweep([[M+26,n+.02],[M,n+.02,.8]],{step:lt});let vt=A=>[[U(A),G(A,K+.6)]];O.surf(tt.stoneBands,$.white).sweep([[M,n,.7],[M,y+.9,1]],{arcs:S(vt(M)),step:lt}),O.surf(tt.smooth,$.white).sweep([[M,y+.9],[M-.7,y+.9],[M-.7,y,.8]],{arcs:S(vt(M)),step:lt}),O.surf(tt.grass,[255,255,245]).sweep([[M-.7,y],[b,C,.85]],{step:lt}),O.surf(tt.stoneBands,$.white).sweep([[b,C,.7],[b,_+1,1]],{arcs:S(vt(b)),step:lt}),O.surf(tt.smooth,$.white).sweep([[b,_+1],[b-.8,_+1],[b-.8,_,.8]],{arcs:S(vt(b)),step:lt}),E.surf(tt.paving,$.white).sweep([[b,_],[b*.5,_],[.5,_]],{step:lt*2});let mt=(A,ut,gt,R,H)=>{let Q=w=>[[T,G(w,it)]];pt.surf(tt.stone,$.white).sweep([[A,et,.6],[A,s,.95]],{arcs:S(Q(A)),step:lt,sense:-1}),pt.surf(tt.paving,$.white).sweep([[A,s,.95],[A+gt,s,.8]],{arcs:S(Q(A)),step:lt,sense:-1}),at.surf(H[0],H[1]).sweep([[A+gt,s,.7],[A+gt,n,.95]],{arcs:S(Q(A+gt)),step:lt,sense:-1}),k.surf(tt.grass,[240,236,220]).sweep([[A+gt,n],[ut-R,n]],{step:lt,sense:-1}),at.surf(H[0],H[1]).sweep([[ut-R,n,.95],[ut-R,s,.7]],{arcs:S(Q(ut-R)),step:lt,sense:-1}),pt.surf(tt.paving,$.white).sweep([[ut-R,s,.8],[ut,s,.95]],{arcs:S(Q(ut)),step:lt,sense:-1}),pt.surf(tt.stone,$.white).sweep([[ut,s,.95],[ut,et,.6]],{arcs:S(Q(ut)),step:lt,sense:-1})};mt(a,l,f-a,l-d,[tt.stoneBands,$.white]),mt(o,h,p-o,h-v,[tt.stoneChequer,$.white]);let F=i.to("ship-passages"),ht=5.6,Z=it,ct=(A,ut=Z)=>-Math.sqrt(A*A-ut*ut);for(let[A,ut,gt,R]of[[a,l,f-a,l-d],[o,h,p-o,h-v]]){for(let[w,I]of[[ct(A),ct(A+gt)],[ct(ut-R),ct(ut)]])for(let N of[-1,1])pt.surf(tt.stone,$.white),N>0?pt.wall(Z,w,Z,I,et,s,.6,.95):pt.wall(-Z,I,-Z,w,et,s,.6,.95);let H=ct(A+gt),Q=ct(ut-R);F.surf(tt.rock,[120,116,110]),F.wall(Z,H,Z,Q,et,ht,.3,.2),F.wall(-Z,Q,-Z,H,et,ht,.3,.2),F.quad([-Z,H,ht],[Z,H,ht],[Z,Q,ht],[-Z,Q,ht],.25);for(let[w,I]of[[H,1],[Q,-1]]){F.surf(tt.stone,$.red);let N=w+I*.25;I>0?(F.wall(Z+2.2,N,-Z-2.2,N,ht,n,.85,1),F.wall(Z+2.2,N,Z,N,s,ht,.8,.9),F.wall(-Z,N,-Z-2.2,N,s,ht,.8,.9)):(F.wall(-Z-2.2,N,Z+2.2,N,ht,n,.85,1),F.wall(Z,N,Z+2.2,N,s,ht,.8,.9),F.wall(-Z-2.2,N,-Z,N,s,ht,.8,.9)),F.surf(tt.rock,[120,116,110]).quad([-Z,w,ht],[Z,w,ht],[Z,w+I*.3,ht],[-Z,w+I*.3,ht],.3)}}let Y=i.to("rock-docks"),yt=52*j,Ct=Math.sqrt(c*c-rt*rt),jt=Math.sqrt(r*r-rt*rt),Ut=17,Rt=(rt*2-Ut*2)/3,It=n-1.2;Y.surf(tt.rock,[150,144,132]),Y.wall(-rt,Ct,rt,Ct,It,n,.8,1);let kt=[-rt+Rt+Ut/2,rt-Rt-Ut/2];for(let A of[-rt+Rt/2,0,rt-Rt/2])Y.wall(A-Rt/2,Ct,A+Rt/2,Ct,et,It,.55,.9);for(let A of kt)Y.surf(tt.rock,[118,112,104]),Y.wall(A-Ut/2,Ct,A-Ut/2,Ct-yt,et,It,.32,.22),Y.wall(A+Ut/2,Ct-yt,A+Ut/2,Ct,et,It,.32,.22),Y.wall(A-Ut/2,Ct-yt,A+Ut/2,Ct-yt,et,It,.2,.16),Y.quad([A-Ut/2,Ct-yt,It],[A+Ut/2,Ct-yt,It],[A+Ut/2,Ct,It],[A-Ut/2,Ct,It],.2,.2,.35,.35),Y.surf(tt.rock,[140,134,122]).quad([A-Ut/2,Ct-yt+22,-1.2],[A+Ut/2,Ct-yt+22,-1.2],[A+Ut/2,Ct-yt,1.6],[A-Ut/2,Ct-yt,1.6],.3);for(let A of[-1,1])pt.surf(tt.stone,$.white),A>0?pt.wall(rt,Ct,rt,jt,et,s,.6,.95):pt.wall(-rt,jt,-rt,Ct,et,s,.6,.95);let J=i.to("houses"),zt=i.to("canal"),At=i.to("extent"),Bt=12*j,bt=V+Bt,Nt=G(g,bt),Ot=S([[T,Nt]]);pt.surf(tt.stone,$.white).sweep([[u,et,.6],[u,s,.95]],{arcs:S([[T,G(u,V)]]),step:lt,sense:-1}),pt.surf(tt.paving,$.white).sweep([[u,s,.95],[g,s,.8]],{arcs:S([[T,G(u,V)]]),step:lt,sense:-1}),at.surf(tt.stoneCourses,$.white).sweep([[g,s,.7],[g,n,.95]],{arcs:Ot,step:lt,sense:-1}),J.surf(tt.earth,[196,184,160]).sweep([[g,n],[(g+m)/2,n],[m,n]],{arcs:Ot,step:lt*1.5,sense:-1}),At.surf(tt.grass,[225,220,190]).sweep([[m,n],[x,-3.2]],{arcs:Ot,step:lt*2,sense:-1});for(let A of[-1,1]){let ut=A*V,gt=A*bt,R=-Math.sqrt(u*u-V*V),H=-Math.sqrt(g*g-bt*bt),Q=-x,w=(Vt,Pt,Ft,qt,Tt,ae,he,De,In)=>A>0?Vt.wall(qt,Tt,Pt,Ft,ae,he,De,In):Vt.wall(Pt,Ft,qt,Tt,ae,he,De,In);zt.surf(tt.stone,$.white),w(zt,ut,R,ut,Q,et,s,.6,.95),zt.surf(tt.paving,$.white);let I=[ut,R,s],N=[ut,Q,s],P=[gt,Q,s],q=[gt,H,s];A>0?zt.quad(I,q,P,N,.9):zt.quad(I,N,P,q,.9),zt.surf(tt.stoneCourses,$.white),w(zt,gt,H,gt,Q,s,n,.7,.95);let nt=T+A*Nt,Mt=[g*Math.cos(nt),g*Math.sin(nt)],Et=[m*Math.cos(nt),m*Math.sin(nt)],Dt=[x*Math.cos(nt),x*Math.sin(nt)],Gt=-Math.sqrt(m*m-bt*bt);J.surf(tt.earth,[196,184,160]),A>0?J.tri([Mt[0],Mt[1],n],[Et[0],Et[1],n],[gt,Gt,n]):J.tri([Mt[0],Mt[1],n],[gt,Gt,n],[Et[0],Et[1],n]),At.surf(tt.grass,[225,220,190]),A>0?At.quad([gt,Gt,n],[Et[0],Et[1],n],[Dt[0],Dt[1],-3.2],[gt,Q,n]):At.quad([gt,Gt,n],[gt,Q,n],[Dt[0],Dt[1],-3.2],[Et[0],Et[1],n])}let Lt=(A,ut,gt,R)=>{for(let H=0;H<gt;H++){let Q=H/gt*re;if(R(Q))continue;let w=Math.cos(Q),I=Math.sin(Q),N=A-ut*1.2;dt.surf(tt.smooth,je($.white,.8)).shaft(N*w,N*I,s,.32,.26,.9,6,{cap:!0,foot:.7})}},z=A=>Math.abs(Math.atan2(Math.sin(A-T),Math.cos(A-T)))<.06;return e.phone||(Lt(r,1,90,A=>Math.abs(A-X)<.06),Lt(a,-1,130,z),Lt(l,1,200,z),Lt(o,-1,270,z),Lt(h,1,380,z),Lt(u,-1,480,z)),{dock:{mouths:kt,yFace:Ct,dockDeep:yt,dw:Ut},canalStrip:Bt}},vf=(i,t)=>{let{rIsle:e,rW3:n,canalHalf:s,edge:r,rWall:a,core:l,B:o}=i,h=[],u=new ce(new Xn(e-70,n+3,180,1),t.sea);u.userData={id:"harbours"},h.push(u);let c=r-n+60,f=new ce(new On(s*2,c),t.sea);f.position.set(0,-(n+c/2)+2,0),f.userData={id:"canal"},h.push(f);for(let g of h)g.receiveShadow=!0,g.renderOrder=2,g.userData.water=!0;let d=Math.asin(Math.min(1,s/a))*3,p=new ce(new Xn(a-22,a+22,360,1,-Math.PI/2+d,Math.PI*2-d*2),t.wallLine);p.userData={id:"outer-wall",line:!0};let v=new ce(new On(s*2,a-r),t.canalLine);v.position.set(0,-(r+a)/2,0),v.userData={id:"canal",line:!0};for(let g of[p,v])g.renderOrder=5,g.position.z=o,h.push(g);return h};var xf=(i,t,e)=>{let{B:n,Q:s,H:r,T:a,rA:l,r1a:o,r1b:h,r2a:u,r2b:c,rT:f,core:d,SEA:p,roadAngle:v,arcsExcept:g,bridgeHalf:m,off:x,bridges:_,Zp:b,rampTop:M,rampFoot:C,k:y,Rp:T,Rs:U}=t,S=e.phone?14:8,V=i.to("ring-walls"),K=i.to("ring-walls#teeth"),it=i.to("wall-towers"),D=(k,E)=>Math.asin(Math.min(1,E/k)),W=(k,E,O,G)=>{let rt=i.to(G),X=g([[v(k),D(k,m+.5)]]),ot={arcs:X,step:S,sense:E},vt=n+r-.9,mt=k+E*.3,F=k-E*a;rt.surf(tt.metal,O).sweep([[k,n-.3,.72],[k,n+r*.45,.95],[k,vt,1]],ot),V.surf(tt.stone,$.white).sweep([[k,vt,.6],[mt,vt,.75],[mt,n+r,.95],[F,n+r,.85],[F,n,.7]],ot);let ht=n+r,Z=mt,ct=mt-E*.7;V.sweep([[Z,ht,.9],[Z,ht+.9,1],[ct,ht+.9,.95],[ct,ht,.8]],ot);let Y=e.phone?6.4:3.2,yt=(Z+ct)/2;K.surf(tt.stone,$.white);for(let[Rt,It]of X){let kt=Math.round((It-Rt)*k/Y);for(let J=0;J<kt;J++){let zt=Rt+(It-Rt)*(J+.5)/kt;K.box(yt*Math.cos(zt),yt*Math.sin(zt),ht+.9,e.phone?3:1.6,.7,1.25,zt+Math.PI/2,{foot:.95,topShade:.95})}}let Ct=v(k),jt=Math.max(8,Math.round(re*k/(118*y))),Ut=D(k,m+22);for(let Rt=0;Rt<jt;Rt++){let It=Ct+Ut+(re-2*Ut)*(Rt+.5)/jt,kt=k-E*(a/2-1.6);Aa(it,kt*Math.cos(It),kt*Math.sin(It),n-.3,8.4,r+5.6,It,{face:[tt.metal,O],crown:[tt.stone,$.white],band:[tt.stone,$.white]})}};W(l,1,$.orichalcum,"wall-orichalcum"),W(o,-1,$.tin,"wall-tin"),W(h,1,$.tin,"wall-tin"),W(u,-1,$.brass,"wall-brass"),W(c,1,$.brass,"wall-brass");let B=i.to("bridges"),j=i.to("bridge-gates"),lt=i.to("aqueducts"),et=[[$.orichalcum,$.tin],[$.tin,$.brass],[$.brass,$.brass]],pt=(k,E,O,G=!0)=>{let rt=j.F.push(x,-k,n,E>0?0:Math.PI),X=9,ot=r+10,vt=m*2-X*2,mt=9.2;for(let F of[-1,1])Aa(j,F*(m-X/2),0,-.3,X,ot,0,{face:[tt.metal,O],crown:[tt.stone,$.white],band:[tt.stone,$.red]});j.surf(tt.stoneBands,$.white).box(0,0,mt,vt,4.4,ot-4-mt,0,{bottom:!0,foot:.7,topShade:.8}),j.surf(tt.stone,$.white),Bi(j,-vt/2,-2.2,vt/2,-2.2,ot-4,{pitch:2.6,w:1.3}),Bi(j,vt/2,2.2,-vt/2,2.2,ot-4,{pitch:2.6,w:1.3}),j.surf(tt.stone,$.red).box(0,-2.3,mt-.9,vt+1.6,.5,1.3,0,{bottom:!0,foot:.8});for(let F of[-1,1]){let ht=vt/2-.2,Z=G?F*1.32:0,ct=F*(vt/2-.15);j.surf(tt.metal,je(O,.9)).box(ct-F*Math.cos(Z)*ht/2,1.6+Math.abs(Math.sin(Z))*ht/2,.15,ht,.35,mt-.4,Z,{foot:.6,head:.85})}j.F.pop(rt)};_.forEach(([k,E],O)=>{let G=E-k,rt=-(k+E)/2;B.surf(tt.stone,$.white).box(x,rt,n-1.5,m*2,G,1.5,0,{top:!1,bottom:!0,foot:.7,head:.95}),B.surf(tt.paving,$.white).slab(x,rt,n,m*2,G,0,.95);let X=Math.max(2,Math.round(G/17));for(let vt=0;vt<=X;vt++){let mt=-k-G*vt/X;B.surf(tt.stoneCourses,$.white).box(x,mt,-3.2,m*2-1.2,3.6,n-3+3.2,0,{top:!1,foot:.55,head:.8}),B.surf(tt.stone,$.white).box(x,mt,n-3,m*2-.6,5.6,.8,0,{bottom:!0,top:!1,foot:.6}),B.box(x,mt,n-2.2,m*2-.2,7.8,.7,0,{bottom:!0,top:!1,foot:.65})}for(let vt of[-1,1]){let mt=x+vt*(m-.6);V.surf(tt.stone,$.white).box(mt,rt,n,1.2,G-9,2.3,0,{foot:.8,topShade:.9}),vt>0?Bi(V,mt+.6,-k-4.5,mt+.6,-E+4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0}):Bi(V,mt-.6,-E+4.5,mt-.6,-k-4.5,n+2.3,{pitch:e.phone?6.4:3.2,lowWall:0})}let ot=x-m+2.2;lt.surf(tt.stone,$.white).box(ot,rt,n,1.6,G-10,1.25,0,{foot:.75,topShade:.9}),lt.surf(tt.smooth,$.white);for(let vt=-k-14;vt>-E+10;vt-=24)lt.box(ot,vt,n+1.25,1.9,2.2,.3,0,{foot:.9});pt(k,-1,et[O][0]),pt(E,1,et[O][1])});let dt=_.slice(0,2).map(([,k])=>({x:x-m-9,y:-k-16,z:n,w:9,d:14}));for(let k of dt){lt.surf(tt.stone,$.white);for(let[E,O,G,rt]of[[0,-k.d/2,k.w+1.2,.7],[0,k.d/2,k.w+1.2,.7],[-k.w/2,0,.7,k.d],[k.w/2,0,.7,k.d]])lt.box(k.x+E,k.y+O,k.z,G,rt,1,0,{foot:.8,topShade:.9});lt.surf(tt.stone,$.white).box(k.x+k.w/2+4,k.y+k.d/2+6,k.z,1.6,18,1.25,.35,{foot:.75})}let at=(k,E,O=n)=>{B.surf(tt.paving,$.white).slab(x,-(k+E)/2,O+.14,m*2,E-k,0,.95);for(let G of[-1,1])B.surf(tt.smooth,$.white).box(x+G*m,-(k+E)/2,O,.5,E-k,.34,0,{foot:.8})};at(_[0][1],_[1][0]),at(_[1][1],_[2][0]),at(_[2][1],Math.sqrt(d*d-x*x)),at(C,_[0][0]);{let k=B.F.push(x,-C,0,0),E=C-M,O=m*2;mf(B,O,E,n,b,{surf:tt.paving,treads:e.phone?20:60});for(let G of[-1,1]){let rt=G*(O/2+.6),X=12;for(let ot=0;ot<X;ot++){let vt=E*ot/X,mt=E*(ot+1)/X,F=n+(b-n)*ot/X,ht=n+(b-n)*(ot+1)/X;B.surf(tt.stoneBands,$.white);let Z=rt+G*.6,ct=rt-G*.6,Y=n-.2;G>0?(B.quad([Z,vt,Y],[Z,mt,Y],[Z,mt,ht+1.1],[Z,vt,F+1.1],.7,.7,1,1),B.quad([ct,mt,ht],[ct,vt,F],[ct,vt,F+1.1],[ct,mt,ht+1.1],.8)):(B.quad([Z,mt,Y],[Z,vt,Y],[Z,vt,F+1.1],[Z,mt,ht+1.1],.7,.7,1,1),B.quad([ct,vt,F],[ct,mt,ht],[ct,mt,ht+1.1],[ct,vt,F+1.1],.8)),B.surf(tt.smooth,$.white).quad([rt-.6,vt,F+1.1],[rt+.6,vt,F+1.1],[rt+.6,mt,ht+1.1],[rt-.6,mt,ht+1.1],.95)}}B.F.pop(k)}return{basins:dt}};var yf=(i,t,e)=>{let{Zp:n,SEA:s,arcsExcept:r}=t,a=44,l=20,o=1.1,h=l-o,u=24.4,c=u+2,f=5.5,d=9.5,p=3.4,v=6.4,g=6,m=n+.45,x=m,_=m+d,b=(W,B)=>Math.asin(Math.min(1,B/W)),M=e.phone?5:3,C=i.to("shrine-wall").surf(tt.metal,$.gold);C.sweep([[a,n,.8],[a,n+4.5,1],[a-.9,n+4.5,.95],[a-.9,n,.75]],{arcs:r([[s,b(a,g)]]),step:M});for(let W of[-1,1]){let B=s+W*b(a,g+.5);C.shaft((a-.45)*Math.cos(B),(a-.45)*Math.sin(B),n,.95,.8,6.4,10,{cap:!0,foot:.8})}let y=i.to("shrine");for(let W=0;W<3;W++)y.surf(tt.smooth,$.white).sweep([[c+(2-W)*.55,n+W*.15,.8],[c+(2-W)*.55,n+(W+1)*.15,.92],[c+(1-W)*.55,n+(W+1)*.15,.95]],{step:M+1});y.surf(tt.paving,$.white).sweep([[c-.55,m,.95],[h,m,.95]],{step:M+1});let T=r([[s,b(l,p)]]),U=[[s-b(l,p),s+b(l,p)]];y.surf(tt.stoneCourses,$.white).sweep([[l,x,.8],[l,_,1]],{arcs:T,step:M}),y.surf(tt.stoneCourses,$.white).sweep([[l,x+v,.85],[l,_,1]],{arcs:U,step:M}),y.surf(tt.smooth,$.white).sweep([[h,_,.8],[h,x+6.3,.7]],{arcs:T,step:M}),y.surf(tt.smooth,$.white).sweep([[h,_,.8],[h,x+v,.7],[l,x+v,.6]],{arcs:U,step:M});let S=i.to("hall");S.surf(tt.smooth,$.shade).sweep([[h,x+6.3,.9],[h,x,.7]],{arcs:T,step:M}),S.surf(tt.gilt,$.gold).sweep([[h-.04,x+6.42,1],[h-.04,x+6.3,1]],{arcs:T,step:M});for(let W of[-1,1]){let B=s+W*b(l,p),j=Math.cos(B),lt=Math.sin(B);y.surf(tt.gilt,$.gold).quad([h*j,h*lt,x],[l*j,l*lt,x],[l*j,l*lt,x+v],[h*j,h*lt,x+v],.9)}S.surf(tt.paving,$.white).sweep([[h,m,.9],[7.2,m,.92]],{step:M}),S.surf(tt.smooth,$.shade).sweep([[7.2,m,.9],[6.2,m,.9]],{step:2}),S.surf(tt.gilt,$.gold).sweep([[6.2,m,1],[6,m,1]],{step:2}),S.surf(tt.paving,$.white).sweep([[6,m,.92],[0,m,.95]],{step:2});let V=e.phone?20:28;for(let W=0;W<V;W++){let B=s+(W+.5)/V*re;ls(y,u*Math.cos(B),u*Math.sin(B),m,.72,d,{n:e.phone?8:14,tint:$.white})}y.surf(tt.smooth,$.white).sweep([[u+1,_,.75],[u+1,_+1.1,.95],[u-1,_+1.1,.9],[u-1,_,.7],[u+1,_,.6]],{step:M}),y.surf(tt.gilt,$.gold).sweep([[u+1.05,_+.46,1],[u+1.05,_+.62,1]],{step:M}),y.surf(tt.smooth,$.white).sweep([[l,_+.04,.55],[u-1,_+.04,.6]],{step:M}),y.surf(tt.tiles,$.tile[1]).sweep([[u+1.5,_+1.05,.9],[f,_+5.4,1]],{step:M}),S.surf(tt.smooth,$.shade).sweep([[f,_+5.1,.6],[h,_,.4]],{step:M}),y.surf(tt.gilt,$.gold).sweep([[f,_+5.1,.9],[f,_+5.45,1]],{step:2,sense:-1}),S.surf(tt.smooth,$.white).shaft(0,0,m,3,2.7,.75,28,{cap:!0,foot:.8,head:.96}),S.surf(tt.gilt,$.gold).shaft(0,0,m+.75,1.15,.85,.55,18,{cap:!0,foot:.9});let K=12,it=.44,D=[];for(let W=0;W<K;W++){let B=s-it-W*(re-2*it)/(K-1),j=Math.sqrt(h*h-(7.2/2+.3)**2)-.12;D.push({x:j*Math.cos(B),y:j*Math.sin(B),z:m+3.15,w:7.2,h:4,a:B})}return{RG:a,RH:l,RI:h,RC:u,RS:c,RO:f,floor:m,height:d,panels:D,door:{a:s,half:p},gate:{a:s,half:g},globe:{x:0,y:0,z:m+3.6,r:2.2},rings:[{r:a-.45,t:.8,a:s,gap:g-.9},{r:l-o/2,t:.95,a:s,gap:p-.7}],circles:[{x:0,y:0,r:3.5},...Array.from({length:V},(W,B)=>{let j=s+(B+.5)/V*re;return{x:u*Math.cos(j),y:u*Math.sin(j),r:1.15}})]}};var oi=Math.PI/180,gy=(i,t,e,n,s,r,a)=>{let l=i.F.push(t,e,n,r),o=s,h=o*.5;i.surf(tt.gilt,a);let u=(c,f,d,p,v=8)=>Array.from({length:v},(g,m)=>{let x=m/v*re;return[c,Math.cos(x)*d,f+Math.sin(x)*p]});i.loft([u(-o*.36,h,.02,.02),u(-o*.32,h,o*.1,o*.12),u(-o*.1,h-o*.01,o*.105,o*.125),u(o*.16,h,o*.1,o*.13),u(o*.27,h+o*.05,o*.07,o*.11),u(o*.36,h+o*.2,o*.05,o*.075),u(o*.42,h+o*.33,o*.04,o*.055),u(o*.52,h+o*.3,o*.028,o*.04),u(o*.6,h+o*.25,o*.02,o*.03)],{closed:!0});for(let[c,f,d]of[[-o*.26,-1,0],[-o*.26,1,0],[o*.18,-1,1],[o*.18,1,1]])i.shaft(c+(d&&f>0?o*.06:0),f*o*.07,d&&f>0?o*.12:0,o*.022,o*.04,h-o*.08-(d&&f>0?o*.12:0),5);for(let c of[-1,1])i.quad([o*.14,c*o*.09,h+o*.08],[-o*.1,c*o*.1,h+o*.06],[-o*.42,c*o*.34,h+o*.5],[-o*.05,c*o*.3,h+o*.42]),i.quad([-o*.05,c*o*.3,h+o*.42],[-o*.42,c*o*.34,h+o*.5],[-o*.62,c*o*.5,h+o*.74],[-o*.2,c*o*.46,h+o*.6]);i.F.pop(l)},_f=(i,t,e,n,s,r)=>{let a=i.F.push(t,e,n,s),l=3.6;i.surf(tt.gilt,r);let o=(h,u,c=6)=>{let f=(h-.5)*l,d=1+Math.sin(h*Math.PI)*.9;return Array.from({length:c},(p,v)=>{let g=v/c*re;return[f,Math.cos(g)*u*.8,d+Math.sin(g)*u]})};i.loft([o(0,.03),o(.12,.2),o(.4,.42),o(.62,.4),o(.85,.2),o(1,.04)],{closed:!0}),i.tri([-l*.5,-.6,1],[-l*.5,.6,1],[-l*.38,0,1.3]),i.tri([l*.02,0,2.25],[l*.2,0,2.2],[l*.02,0,2.75]),Ra(i,-.15,0,2,2.5,0,{n:6,tint:r}),i.F.pop(a)},bf=(i,t,e)=>{let{B:n,Zp:s,Rp:r,Rs:a,rA:l,T:o,S:h,P:u,k:c,off:f,bridgeHalf:d,SEA:p,roadAngle:v,zSlopeTop:g,zSlopeFoot:m,islandZ:x}=t,_=Gn(1160),b=[],M=[],C=(R,H)=>[R*Math.cos(H*oi),R*Math.sin(H*oi)],y=yf(i,t,e),T=u.templeLength*h,U=u.templeWidth*h,S=-45*c,V=-135*c,K=i.to("temple"),it=i.to("temple#roof"),D=i.to("temple-interior"),W=i.to("temple-ceiling#roof"),B=i.to("pinnacles#roof"),j=.9,lt=4,et=lt*j,pt=U*.325,dt=U*.076,at=U*.0185,k=U*.14,E=K.F,O=E.push(S,V,s,0);{let R=[$.black,$.white,$.red,$.white];for(let Xt=0;Xt<lt;Xt++)K.surf(tt.smooth,R[Xt]).box(0,0,Xt*j,T+(lt-1-Xt)*3.4,U+(lt-1-Xt)*3.4,j,0,{foot:.78,topShade:.86});let H=11,Q=22,w=at*1.7,I={n:e.phone?10:16,surf:tt.metal,tint:$.silver};for(let Xt of[-1,1])Ds(K,-T/2+w,Xt*(U/2-w),T/2-w,Xt*(U/2-w),et,Q,at,pt,I);for(let Xt of[-1,1])Ds(K,Xt*(T/2-w),-U/2+w+(U-2*w)/(H-1),Xt*(T/2-w),U/2-w-(U-2*w)/(H-1),et,H-2,at,pt,I);let N=et+pt,P=w*2,q=(T-.6)/2-P,nt=(U-.6)/2-P,Mt=(Xt,pe,L,st,St,xt,wt=!0)=>{let Wt=[[-pe,-L],[pe,-L],[pe,L],[-pe,L]],Jt=[[-st,-St],[st,-St],[st,St],[-st,St]];for(let Ht=0;Ht<4;Ht++){let Yt=(Ht+1)%4,te=[...Wt[Ht],Xt],ue=[...Wt[Yt],Xt],xe=[...Jt[Yt],Xt],Kt=[...Jt[Ht],Xt];wt?K.quad(te,ue,xe,Kt,xt):K.quad(Kt,xe,ue,te,xt)}};K.surf(tt.metal,$.silver).box(0,0,N,T-.6,U-.6,dt*.4,0,{foot:.75,top:!1}),Mt(N,(T-.6)/2,(U-.6)/2,q,nt,.6,!1),K.surf(tt.metal,je($.silver,.9)).box(0,0,N+dt*.4,T-.2,U-.2,dt*.38,0,{top:!1,foot:.9}),K.surf(tt.gilt,$.gold).box(0,0,N+dt*.4,T-.1,U-.1,dt*.07,0,{top:!1}),K.surf(tt.metal,$.silver).box(0,0,N+dt*.78,T+1.6,U+1.6,dt*.22,0,{foot:.7,top:!1}),Mt(N+dt,(T+1.6)/2,(U+1.6)/2,q,nt,.9),K.surf(tt.metal,je($.silver,.8)),K.wall(q,-nt,-q,-nt,N,N+dt,.6,.75),K.wall(-q,nt,q,nt,N,N+dt,.6,.75),K.wall(-q,-nt,-q,nt,N,N+dt,.6,.75),K.wall(q,nt,q,-nt,N,N+dt,.6,.75);let Et=T-30*c,Dt=U-30*c,Gt=2.2,Vt=9,Pt=pt*.66;K.surf(tt.metal,$.silver),K.wall(-Et/2,-Dt/2,Et/2,-Dt/2,et,N,.72,.9),K.wall(Et/2,Dt/2,-Et/2,Dt/2,et,N,.72,.9),K.wall(-Et/2,Dt/2,-Et/2,-Dt/2,et,N,.72,.9),K.wall(Et/2,-Dt/2,Et/2,-Vt/2,et,N,.72,.9),K.wall(Et/2,Vt/2,Et/2,Dt/2,et,N,.72,.9),K.wall(Et/2,-Vt/2,Et/2,Vt/2,et+Pt,N,.8,.9),K.surf(tt.gilt,$.gold),K.box(Et/2+.2,-Vt/2-.6,et,.6,1.2,Pt+1.2,0,{foot:.8}),K.box(Et/2+.2,Vt/2+.6,et,.6,1.2,Pt+1.2,0,{foot:.8}),K.box(Et/2+.2,0,et+Pt,.6,Vt+2.4,1.2,0,{bottom:!0});for(let Xt of[-1,1])K.surf(tt.metal,$.silver).box(Et/2+Vt/4+.3,Xt*(Vt/2+.25),et,Vt/2,.35,Pt,0,{foot:.7});let Ft=Et-Gt*2,qt=Dt-Gt*2,Tt=$.orichalcum;Mt(N,Et/2,Dt/2,Ft/2,qt/2,.85),D.surf(tt.metal,Tt),D.wall(Ft/2,-qt/2,-Ft/2,-qt/2,et,N,.6,.85),D.wall(-Ft/2,qt/2,Ft/2,qt/2,et,N,.6,.85),D.wall(-Ft/2,-qt/2,-Ft/2,qt/2,et,N,.6,.85),D.wall(Ft/2,-Vt/2,Ft/2,-qt/2,et,N,.6,.85),D.wall(Ft/2,qt/2,Ft/2,Vt/2,et,N,.6,.85),D.wall(Ft/2,Vt/2,Ft/2,-Vt/2,et+Pt,N,.7,.85);for(let Xt of[-1,1])D.wall(Ft/2,Xt*Vt/2,Et/2,Xt*Vt/2,et,et+Pt,.7);D.surf(tt.metal,je(Tt,.92)).slab(0,0,et+.04,Ft,qt,0,.8),K.surf(tt.smooth,$.white).slab(0,0,et+.02,T-.2,U-.2,0,.82);let ae=14,he=qt*.27;for(let Xt of[-1,1])Ds(D,-Ft/2+9,Xt*he,Ft/2-9,Xt*he,et,ae,1.45,pt,{n:e.phone?8:12,surf:tt.metal,tint:Tt,shade:.85});let De=N-.05,In=26,Ln=10,Sn=Ft/In,ze=qt/Ln,ds=[$.gold,$.silver,Tt];W.surf(tt.ivory,$.ivory).quad([-Ft/2,qt/2,De],[Ft/2,qt/2,De],[Ft/2,-qt/2,De],[-Ft/2,-qt/2,De],.8);for(let Xt=0;Xt<In;Xt++)for(let pe=0;pe<Ln;pe++){let L=-Ft/2+(Xt+.5)*Sn,st=-qt/2+(pe+.5)*ze,St=ds[(Xt+pe*2)%3],xt=.3;W.surf(tt.gilt,St).quad([L-Sn*xt,st+ze*xt,De-.12],[L+Sn*xt,st+ze*xt,De-.12],[L+Sn*xt,st-ze*xt,De-.12],[L-Sn*xt,st-ze*xt,De-.12],.9)}it.surf(tt.metal,je($.silver,.8)).quad([-T/2,U/2,N+dt*.3],[T/2,U/2,N+dt*.3],[T/2,-U/2,N+dt*.3],[-T/2,-U/2,N+dt*.3],.5);let Ee=N+dt,Ve=T/2+1.2,Jn=U/2+1.6,Dn=Ee+k;it.surf(tt.metal,je($.silver,.95)),it.quad([-Ve,-Jn,Ee],[Ve,-Jn,Ee],[Ve,0,Dn],[-Ve,0,Dn],.92,.92,1,1),it.quad([Ve,Jn,Ee],[-Ve,Jn,Ee],[-Ve,0,Dn],[Ve,0,Dn],.92,.92,1,1);let Hi=e.phone?0:46;for(let Xt=0;Hi&&Xt<=Hi;Xt++){let pe=-Ve+2*Ve*Xt/Hi;for(let L of[-1,1])it.quad([pe-.25,L*Jn,Ee+.25],[pe+.25,L*Jn,Ee+.25],[pe+.25,0,Dn+.25],[pe-.25,0,Dn+.25],1)}for(let Xt of[-1,1]){let pe=Xt*(T/2-.4);it.surf(tt.metal,$.silver),Xt>0?it.tri([pe,-U/2,Ee],[pe,U/2,Ee],[pe,0,Dn-.3],.8,.8,.95):it.tri([pe,U/2,Ee],[pe,-U/2,Ee],[pe,0,Dn-.3],.8,.8,.95),it.surf(tt.gilt,$.gold);let L=k*.3,st=20;for(let St=0;St<st;St++){let xt=St/st*re,wt=(St+1)/st*re,Wt=[pe+Xt*.25,0,Ee+k*.4],Jt=[pe+Xt*.25,Math.cos(xt)*L,Ee+k*.4+Math.sin(xt)*L],Ht=[pe+Xt*.25,Math.cos(wt)*L,Ee+k*.4+Math.sin(wt)*L];Xt>0?it.tri(Wt,Jt,Ht):it.tri(Wt,Ht,Jt)}}let Pr=(Xt,pe,L,st)=>B.surf(tt.gilt,$.gold).turned(Xt,pe,L,[[st*.1,0],[st*.13,st*.08],[st*.05,st*.2],[st*.16,st*.45],[st*.19,st*.58],[st*.07,st*.78],[st*.03,st*.9],[0,st]],8);for(let Xt of[-1,1]){Pr(Xt*Ve,0,Dn,9.5);for(let pe of[-1,1])Pr(Xt*Ve,pe*Jn,Ee,6.5)}let Ir=e.phone?12:44;for(let Xt=1;Xt<Ir;Xt++)B.surf(tt.gilt,$.gold).shaft(-Ve+2*Ve*Xt/Ir,0,Dn,.5,.05,2.6,4);for(let Xt=0;Xt<=(e.phone?0:44);Xt++)for(let pe of[-1,1])B.shaft(-Ve+2*Ve*Xt/44,pe*Jn,Ee,.45,.05,1.5,4);let Nn=i.to("poseidon"),Gi=-Ft/2+34;Nn.surf(tt.gilt,$.gold).box(Gi-6,0,et,30,22,1.2,0,{foot:.7,topShade:.8}),Nn.box(Gi-9,0,et+3.4,9,7,2.6,0,{bottom:!0,foot:.8});for(let Xt of[-1,1]){let pe=Nn.F.push(Gi-9,Xt*4.2,et+4,0);for(let L=0;L<14;L++){let st=L/14*re,St=(L+1)/14*re;Nn.tri([0,0,0],[Math.cos(st)*2.8,0,Math.sin(st)*2.8],[Math.cos(St)*2.8,0,Math.sin(St)*2.8])}Nn.F.pop(pe)}Ra(Nn,Gi-9,0,et+6,pt-6.3,-Math.PI/2,{n:12,arm:!0});for(let Xt=0;Xt<6;Xt++)gy(Nn,Gi+8+Xt%2*2.5,(Xt-2.5)*3.9,et+1.2,10.5,0,$.gold);let fs=i.to("nereids"),Vi=0;for(let Xt=0;Xt<22&&Vi<100;Xt++)for(let[pe,L]of[[he-5.4,1],[he+5.4,-1],[-he+5.4,-1],[-he-5.4,1]]){if(Vi>=88)break;let st=-Ft/2+12+Xt*(Ft-30)/21;fs.surf(tt.metal,Tt).box(st,pe,et,2.4,1.6,1.3,0,{foot:.6}),_f(fs,st,pe,et+.9,L>0?0:Math.PI,$.gold),Vi++}for(let Xt=0;Vi<100;Xt++,Vi++){let pe=(-.42+.84*Xt/11)*Math.PI,L=Gi+30+Math.cos(pe)*9,st=Math.sin(pe)*15;fs.surf(tt.metal,Tt).box(L,st,et,2.4,1.6,1.3,pe,{foot:.6}),_f(fs,L,st,et+.9,pe,$.gold)}let dc=i.to("votive-inside");for(let Xt=0;Xt<24;Xt++){let pe=-Ft/2+14+(Ft-60)*(Xt>>1)/11.5+4,L=Xt%2?1:-1;Yl(dc,pe,L*(qt/2-2.6),et,3.2+_()*1.4,L>0?-Math.PI/2:Math.PI/2,{plinth:[tt.metal,Tt],tint:Xt%3?$.gold:$.silver})}let Lr=i.to("pillar");Lr.surf(tt.metal,Tt).box(Ft/2-52,0,et,4.2,4.2,.9,0,{foot:.7}),Lr.box(Ft/2-52,0,et+.9,2.2,1,7.5,0,{foot:.85}),Lr.box(Ft/2-52,0,et+8.4,2.6,1.3,.5,0,{bottom:!0})}E.pop(O);let G=s+et+pt+dt+k,rt=i.to("statues"),X=i.to("votive-outside");{let R=T/2+15,H=U/2+15,Q=2*(2*R+2*H),w=60;for(let I=0;I<w;I++){let N=(I+.5)/w*Q,P,q,nt;N<2*R?(P=-R+N,q=-H,nt=-Math.PI/2):(N-=2*R)<2*H?(P=R,q=-H+N,nt=0):(N-=2*H)<2*R?(P=R-N,q=H,nt=Math.PI/2):(N-=2*R,P=-R,q=H-N,nt=Math.PI),!(P===R&&Math.abs(q)<9)&&Yl(rt,S+P,V+q,s,4.4,nt+Math.PI/2,{plinth:[tt.smooth,I%2?$.white:$.red]})}for(let I=0;I<38;I++){let N=I%2?1:-1,P=f+N*(d+4+I%3*3.2),q=-t.rampTop+12+(I>>1)*5.6,nt=I%4,Mt=s;Math.hypot(P,q)>r-6||(nt===0?(ls(X,P,q,Mt,.42,5.2,{n:8,tint:$.white}),Ra(X,P,q,Mt+5.2,2.2,-Math.PI/2,{n:6,tint:$.gold})):nt===1?(X.surf(tt.smooth,$.white).box(P,q,Mt,1.5,.9,.4,0),X.surf(tt.smooth,I%3?$.white:$.black).box(P,q,Mt+.4,1,.32,2.7,0,{foot:.85})):nt===2?X.surf(tt.gilt,I%3?$.brass:$.silver).turned(P,q,Mt,[[.5,0],[.16,.25],[.12,1.1],[.3,1.25],[.85,1.75],[.9,1.85],[0,1.6]],8):Yl(X,P,q,Mt,2.6,-Math.PI/2*N,{tint:I%3?$.gold:$.brass}))}}let ot=i.to("altar"),vt=S+T/2+34*c,mt=V;for(let R=0;R<3;R++)ot.surf(tt.smooth,[$.white,$.red,$.white][R]).box(vt,mt,s+R*.5,15-R*2.2,50-R*2.2,.5,0,{foot:.8,topShade:.88});ot.surf(tt.stoneCourses,$.white).box(vt,mt,s+1.5,6.5,42,3.1,0,{foot:.8}),ot.surf(tt.smooth,$.white).box(vt,mt,s+4.6,7.6,43.2,.55,0,{bottom:!0,foot:.8,topShade:.9});for(let R of[-1,1])ot.surf(tt.smooth,$.white).box(vt,mt+R*21.2,s+5.15,7.6,.9,1.3,0,{foot:.9});ot.surf(tt.gilt,$.gold).box(vt,mt,s+1.6,6.7,42.2,.3,0,{top:!1});let F=i.to("palace"),ht=[tt.stoneBands,$.white],Z=[tt.stoneChequer,$.white],ct=[tt.stone,$.white],Y=[tt.stone,$.red],yt=$.gold;on(F,0,215*c,s,150,22,14,0,{wall:ht,cornice:$.white,base:[tt.stone,$.black],windows:2,doors:[[0,-40],[0,40]],tile:$.tile[1]}),on(F,-86,152*c,s,22,104,12,0,{wall:ct,cornice:$.red,base:[tt.stone,$.red],windows:2,doors:[[1,-30],[1,30]],tile:$.tile[0]}),on(F,86,152*c,s,22,104,12,0,{wall:ct,cornice:$.red,base:[tt.stone,$.red],windows:2,doors:[[3,-30],[3,30]],tile:$.tile[0]}),on(F,0,196*c,s,34,18,25,0,{wall:Z,roof:"hip",cornice:yt,windows:2,doors:[],tile:$.tile[2]}),on(F,0,148*c,s+1.2,44,64,17,0,{wall:ht,cornice:yt,base:[tt.stone,$.black],windows:0,doors:[],tile:$.tile[1],rise:7}),F.surf(tt.smooth,$.white).box(0,148*c,s,48,68,1.2,0,{foot:.8}),F.surf(tt.smooth,$.white).box(0,148*c-34-6,s,44,12,1.2,0,{foot:.8,topShade:.86}),F.box(0,148*c-34-13.5,s,40,3,.8,0,{foot:.8}),F.box(0,148*c-34-16,s,40,2.5,.4,0,{foot:.8}),Ds(F,-19.5,148*c-34-10.5,19.5,148*c-34-10.5,s+1.2,6,1.15,14.6,{n:14,tint:$.red}),F.surf(tt.smooth,$.white).box(0,148*c-34-6,s+15.8,44,12,1.4,0,{bottom:!0,foot:.75});{let R=F.F.push(0,148*c-34-6,0,0);ql(F,44,12,s+17.2,7,{tile:$.tile[1],wall:[tt.smooth,$.white],ridgeAlongY:!0}),F.F.pop(R)}Ea(F,44,64,0,0,0,{pw:5,ph:9,leaf:$.brass});{let R=F.F.push(0,148*c,s+1.2,0);Ea(F,44,64,0,0,0,{pw:5,ph:9.5,leaf:$.brass,frame:yt}),F.F.pop(R)}for(let R of[-1,1])wi(F,R*71,150*c,s,96,7,6.2,R>0?Math.PI/2:-Math.PI/2,{wall:ct,colTint:$.red,r:.42,simple:!1}),F.surf(tt.gilt,yt).shaft(R*86,152*c,s+12+4.6,.5,.04,3,6);on(F,-150,62*c,s,20,66,10,-.5,{wall:Y,cornice:$.white,base:[tt.stone,$.black],windows:2,doors:[[1,0]],tile:$.tile[3]}),on(F,160,66*c,s,20,60,10,.45,{wall:[tt.stoneCourses,$.white],cornice:$.white,windows:2,doors:[[3,0]],tile:$.tile[3]}),on(F,-205,150*c,s,18,50,8,-.95,{wall:ct,windows:1,doors:[[1,0]],tile:$.tile[0]}),on(F,205,150*c,s,18,50,8,.95,{wall:ct,windows:1,doors:[[3,0]],tile:$.tile[0]});for(let R of[-1,1])for(let H=0;H<7;H++)b.push({x:R*40,y:108*c+H*12,z:s,s:7+_()*2,kind:"cypress",id:"palace"});let Ct=i.to("guard-dwellings");for(let R=0;R<16;R++){let H=196+R*6.6,[Q,w]=C(a+50*c,H);R%5!==4&&on(Ct,Q,w,n,15,9,4.4+R%3*.6,H*oi+Math.PI/2,{wall:[tt.plaster,$.plaster[R%6]],windows:1,doors:[[0,-3]],tile:$.tile[R%4],base:[tt.stone,$.white]})}let jt=i.to("springs"),Ut=i.to("reservoirs"),Rt=i.to("baths"),It=(a+26+l-o)/2+2,kt=(R,H,Q,w)=>{R.surf(tt.smooth,$.white).shaft(H,Q,n,8.6,8.6,.5,20,{cap:!0,foot:.8,head:.85});for(let I=0;I<10;I++){let N=I/10*re;ls(R,H+Math.cos(N)*7.4,Q+Math.sin(N)*7.4,n+.5,.42,5.6,{n:8,tint:w})}R.surf(tt.smooth,$.white).shaft(H,Q,n+6.1,8.2,8.2,.7,20,{foot:.75}),R.surf(tt.tiles,$.tile[1]).shaft(H,Q,n+6.8,8.9,.3,4.2,20,{foot:.9,head:1}),R.surf(tt.gilt,$.gold).shaft(H,Q,n+10.9,.35,.03,1.6,6),R.surf(tt.smooth,$.white).shaft(H,Q,n+.5,4.4,4.4,.8,16,{foot:.8}),R.shaft(H,Q,n+.5,3.8,3.8,.8,16,{foot:.6}),M.push({x:H,y:Q,z:n+1.1,r:3.8,id:"springs"})},[J,zt]=C(It,36),[At,Bt]=C(It,58);kt(jt,J,zt,$.red),kt(jt,At,Bt,$.white);let bt=(R,H,Q,w,I)=>{let[N,P]=C(It,H),q=H*oi+Math.PI/2,nt=R.F.push(N,P,n,q);R.surf(tt.smooth,$.white);for(let[Mt,Et,Dt,Gt]of[[0,-w/2,Q+1.6,.8],[0,w/2,Q+1.6,.8],[-Q/2,0,.8,w],[Q/2,0,.8,w]])R.box(Mt,Et,0,Dt,Gt,.8,0,{foot:.8,topShade:.9});R.surf(tt.paving,$.white).slab(0,0,.05,Q+5,w+5,0,.85),R.F.pop(nt),M.push({x:N,y:P,z:n+.6,w:Q,d:w,rot:q,id:I})};bt(Ut,47,26,15,"reservoirs"),bt(Ut,26,22,14,"reservoirs");for(let R of[20,64]){let[H,Q]=C(It+3,R);on(Ut,H,Q,n,30,15,6.5,R*oi+Math.PI/2,{wall:[tt.stoneCourses,$.white],windows:0,doors:[[0,0]],tile:$.tile[2],cornice:$.white})}let Nt=(R,H,Q,w,I,N)=>{let[P,q]=C(It,R);Xl(Rt,P,q,n,H,Q,w,R*oi+Math.PI/2,{depth:6,wall:I,tile:N,floor:[tt.paving,$.white]}),M.push({x:P,y:q,z:n+.35,w:H-22,d:Q-20,rot:R*oi+Math.PI/2,id:"baths"})};Nt(73,40,34,5.2,[tt.stoneBands,$.white],$.tile[1]),Nt(84,54,38,4.8,[tt.stone,$.white],$.tile[0]),Nt(96,36,32,4.6,[tt.stone,$.red],$.tile[3]);{let[R,H]=C(It,9);wi(Rt,R,H,n,46,9,4.6,9*oi-Math.PI/2,{wall:[tt.stone,$.black],cols:10});let[Q,w]=C(It-13,9);bt(Rt,9,.01,.01,"baths"),M.pop(),M.push({x:Q,y:w,z:n+.3,w:40,d:9,rot:9*oi+Math.PI/2,id:"baths"}),Rt.surf(tt.smooth,$.white).box(Q,w,n,42,11,.5,9*oi+Math.PI/2,{foot:.8,topShade:.85})}let Ot=i.to("aqueducts"),Lt=a+30*c,z=v(Lt)+.06,A=205*oi;Ot.surf(tt.smooth,$.white).sweep([[Lt+1.1,n,.8],[Lt+1.1,n+.45],[Lt+.7,n+.45],[Lt+.7,n+.1,.6],[Lt-.7,n+.1,.6],[Lt-.7,n+.45],[Lt-1.1,n+.45],[Lt-1.1,n,.8]],{arcs:[[z,A]],step:6}),M.push({arc:[z,A],r0:Lt-.7,r1:Lt+.7,z:n+.34,id:"aqueducts"});for(let R=0;R<46;R++){let H=12+_()*92,[Q,w]=C(a+30+_()*(l-o-a-36),H);b.push({x:Q,y:w,z:n,s:7+_()*5,kind:R%3?"plane":"cypress",id:"springs",soft:!0})}let ut=e.phone?260:520;for(let R=0;R<ut;R++){let H=104+_()*86,Q=a+32+_()*(l-o-a-38),[w,I]=C(Q,H);b.push({x:w,y:I,z:n,s:13+_()*13,kind:["cypress","plane","pine","plane"][R%4],id:"grove"})}let gt=e.phone?300:620;for(let R=0;R<gt;R++){let H=_()*re,Q=r+7+Math.floor(_()*6)/6*(a-r-14)+_()*2;Math.abs(Math.atan2(Math.sin(H-v(Q)),Math.cos(H-v(Q))))<(d+6)/Q||b.push({x:Q*Math.cos(H),y:Q*Math.sin(H),z:x(Q),s:3.2+_()*2.6,kind:R%3?"olive":"fruit",id:"island-gardens"})}return{trees:b,pools:M,hall:y,temple:{x:S,y:V,z:s,L:T,W:U,top:G,floor:s+et,room:{l:T-30*c,w:U-30*c,door:9}},altar:{x:vt,y:mt},springs:[[J,zt],[At,Bt]]}};var wf=(i,t,e)=>{let{B:n,Q:s,T:r,rW1:a,rL1:l,rW2:o,r1a:h,r1b:u,r2a:c,r2b:f,rcMid:d,rcHalf:p,off:v,bridgeHalf:g,SEA:m,roadAngle:x,k:_,rL2:b,rT:M,rW3:C,strip:y}=t,T=Gn(1170),U=[],S=[],V=e.phone?14:8,K=i.to("ring-temples"),it=i.to("gymnasia"),D=i.to("horse-grounds"),W=i.to("gardens"),B=i.to("patterned-buildings"),j=i.to("ring-layout"),lt=(Rt,It,kt)=>{let J=Rt*Math.cos(It);return Rt*Math.sin(It)<0&&Math.abs(J-v)<g+kt},et=Rt=>Rt[T()*Rt.length|0],pt={temple:(Rt,It,kt,J,zt)=>{let At=K,Bt=At.F.push(Rt,It,n,kt),bt=Math.min(J-8,78),Nt=Math.min(zt-8,84);At.surf(tt.stone,$.white);for(let[z,A,ut,gt]of[[0,Nt/2,bt,.8],[-bt/2,0,.8,Nt],[bt/2,0,.8,Nt],[-bt/4-2,-Nt/2,bt/2-4,.8],[bt/4+2,-Nt/2,bt/2-4,.8]])At.box(z,A,0,ut,gt,2.1,0,{foot:.78,topShade:.9});for(let z of[-1,1])At.surf(tt.stone,$.red).box(z*4.6,-Nt/2,0,1.4,1.4,3.4,0,{foot:.8});let Ot=11+T()*7,Lt=T()*3|0;pf(At,0,Nt*.12,0,Ot,Ot*(1.9+T()*.5),0,{wall:[[tt.stone,tt.stoneBands,tt.stoneCourses][Lt],$.white],colTint:Lt===2?$.red:$.white,tile:et($.tile),cols:Ot>14?6:4,finial:T()<.5?$.gold:null}),At.surf(tt.smooth,$.white).box(0,-Nt*.3,0,5,2.4,1.3,0,{foot:.8}),At.surf(tt.paving,$.white).slab(0,-Nt*.2,.05,7,Nt*.5,0,.9),At.F.pop(Bt);for(let z of[-1,1])for(let A=0;A<5;A++){let ut=z*(bt/2-5),gt=-Nt/2+8+A*((Nt-16)/4),R=Math.cos(kt),H=Math.sin(kt);U.push({x:Rt+R*ut-H*gt,y:It+H*ut+R*gt,z:n,s:9+T()*4,kind:"cypress",id:"ring-temples"})}},gym:(Rt,It,kt,J,zt)=>{let At=Math.min(J-10,74),Bt=Math.min(zt-12,62);Xl(it,Rt,It,n,At,Bt,4.8,kt,{depth:6,wall:[tt.stone,et([$.white,$.white,$.red])],tile:et($.tile)});let bt=it.F.push(Rt,It,n,kt);for(let Nt=0;Nt<2;Nt++)it.surf(tt.smooth,$.white).box((Nt?1:-1)*6,0,.06,1,1,1.5,0,{foot:.8});it.F.pop(bt)},horses:(Rt,It,kt,J,zt)=>{let At=D,Bt=At.F.push(Rt,It,n,kt),bt=Math.min(J-10,88),Nt=Math.min(zt-22,58);At.surf(tt.sand,$.sand).slab(0,-4,.07,bt,Nt,0,.95),At.surf(tt.wood,$.wood);let Ot=(ut,gt,R,H)=>{let Q=Math.hypot(R-ut,H-gt),w=Math.atan2(H-gt,R-ut);for(let N of[.7,1.25])At.box((ut+R)/2,(gt+H)/2,N,Q,.12,.16,w,{bottom:!0});let I=Math.round(Q/7);for(let N=0;N<=I;N++)At.box(ut+(R-ut)*N/I,gt+(H-gt)*N/I,0,.2,.2,1.5,w,{foot:.7})};Ot(-bt/2,-4-Nt/2,bt/2,-4-Nt/2),Ot(bt/2,-4-Nt/2,bt/2,-4+Nt/2),Ot(-bt/2,-4+Nt/2,-bt/2,-4-Nt/2),At.F.pop(Bt);let Lt=Math.cos(kt),z=Math.sin(kt),A=-4+Nt/2+6;wi(At,Rt-z*A,It+Lt*A,n,bt,8,4.2,kt,{wall:[tt.stone,$.white],tile:et($.tile),cols:Math.round(bt/5.5),r:.3,simple:"pier"})},garden:(Rt,It,kt,J,zt)=>{let At=W,Bt=At.F.push(Rt,It,n,kt),bt=J-12,Nt=zt-12;At.surf(tt.paving,$.white).slab(0,0,.06,3,Nt,0,.9),At.slab(0,0,.065,bt,3,0,.9),At.surf(tt.smooth,$.white).shaft(0,0,0,3.4,3.4,.7,12,{cap:!0,foot:.8,head:.55}),At.surf(tt.stone,$.white);for(let[ut,gt,R,H]of[[0,Nt/2,bt,.5],[0,-Nt/2,bt,.5],[-bt/2,0,.5,Nt],[bt/2,0,.5,Nt]])At.box(ut,gt,0,R,H,.9,0,{foot:.8});At.F.pop(Bt);let Ot=et(["olive","fruit","fruit","plane"]),Lt=Ot==="plane"?15:11.5,z=Math.cos(kt),A=Math.sin(kt);for(let ut=-bt/2+5;ut<bt/2-3;ut+=Lt)for(let gt=-Nt/2+5;gt<Nt/2-3;gt+=Lt)Math.abs(ut)<4||Math.abs(gt)<4||e.phone&&(ut+gt|0)%2||U.push({x:Rt+z*ut-A*gt+(T()-.5),y:It+A*ut+z*gt+(T()-.5),z:n,s:(Ot==="plane"?9:4)+T()*2.5,kind:Ot,id:"gardens"})},houses:(Rt,It,kt,J,zt)=>{let At=B,Bt=At.F.push(Rt,It,n,kt),bt=2+(T()*3|0);for(let Nt=0;Nt<bt;Nt++){let Ot=14+T()*12,Lt=9+T()*5,z=5+T()*5,A=-J/2+12+(J-24)*(Nt+.5)/bt+(T()-.5)*4,ut=(T()-.5)*(zt-40);on(At,A,ut,0,Math.min(Ot,(J-16)/bt),Lt,z,T()<.3?Math.PI/2:0,{wall:[et([tt.stoneBands,tt.stoneChequer,tt.stoneCourses,tt.stone,tt.stone]),et([$.white,$.white,$.red,$.black])],cornice:$.white,tile:et($.tile),windows:1,doors:[[0,0]]})}At.F.pop(Bt);for(let Nt=0;Nt<4;Nt++){let Ot=(T()-.5)*(J-14),Lt=zt/2-8-T()*8,z=Math.cos(kt),A=Math.sin(kt);U.push({x:Rt+z*Ot-A*Lt,y:It+A*Ot+z*Lt,z:n,s:6+T()*5,kind:et(["plane","cypress","olive"]),id:"gardens"})}}},dt=(Rt,It,kt,J,zt=104)=>{let At=(Rt+It)/2,Bt=It-Rt,bt=Math.floor(re*At/zt),Nt=re*At/bt-2;for(let Ot=0;Ot<bt;Ot++){let Lt=m+(Ot+.5)/bt*re;if(lt(At,Lt,Nt/2+6))continue;let z=J[(Ot*7+(T()*2|0))%J.length];pt[z](At*Math.cos(Lt),At*Math.sin(Lt),kt>0?Lt+Math.PI/2:Lt-Math.PI/2,Math.min(Nt,zt),Bt)}},at=(Rt,It)=>j.surf(tt.paving,[226,220,205]).sweep([[Rt-It/2,n+.05],[Rt+It/2,n+.05]],{step:V,sense:-1}),k=h+r+5,E=u-r-5,O=(k+E)/2;at(O,9);let G=["temple","garden","gym","garden","houses","horses","temple","garden","houses"];dt(k,O-6,1,G),dt(O+6,E,-1,G);{let Rt=i.to("guard-house"),It=x(O)+.2,kt=(O+10)*Math.cos(It),J=(O+10)*Math.sin(It),zt=Rt.F.push(kt,J,n,It-Math.PI/2),At=96,Bt=78;for(let[bt,Nt,Ot,Lt,z]of[[0,Bt/2-6,At,12,0],[0,-Bt/2+6,At,12,0],[-At/2+6,0,12,Bt-24,0],[At/2-6,0,12,Bt-24,0]])on(Rt,bt,Nt,0,Ot,Lt,9,z,{wall:[tt.stoneBands,$.white],base:[tt.stone,$.black],cornice:$.red,windows:2,doors:[[Nt>0?0:2,0]],tile:$.tile[2]});for(let bt of[-1,1])for(let Nt of[-1,1])Aa(Rt,bt*(At/2-2),Nt*(Bt/2-2),0,9,14,0,{face:[tt.stone,$.red],crown:[tt.stone,$.white]});Rt.surf(tt.sand,$.sand).slab(0,0,.06,At-24,Bt-24,0,.95),Rt.F.pop(zt)}let rt=c+r+5,X=f-r-5,ot=d-p,vt=d+p,mt=i.to("racecourse"),F=i.to("racecourse-form"),ht=i.to("barracks");mt.surf(tt.sand,$.sand).sweep([[ot,n+.1],[d,n+.1,.96],[vt,n+.1]],{step:V,sense:-1});for(let[Rt,It]of[[ot,-1],[vt,1]])F.surf(tt.smooth,$.white).sweep([[Rt-.5,n,.8],[Rt-.5,n+1],[Rt+.5,n+1],[Rt+.5,n,.8]],{step:V,sense:1*(It>0,1)});for(let Rt=0;Rt<48;Rt++){let It=Rt/48*re;lt(d,It,30)||(ls(F,d*Math.cos(It),d*Math.sin(It),n+.1,.7,6.5,{n:8,tint:Rt%6?$.white:$.red}),Rt%6===0&&F.surf(tt.gilt,$.gold).shaft(d*Math.cos(It),d*Math.sin(It),n+6.6,.5,.05,2,6))}for(let Rt of[-.13,-.085,.085,.13]){let It=x(vt)+Rt,kt=F.F.push((vt+9)*Math.cos(It),(vt+9)*Math.sin(It),n,It+Math.PI/2);for(let J=0;J<6;J++)F.surf(tt.smooth,$.white).box(0,-J*1.3+3.3,0,60,1.3,.6+(5-J)*.62,0,{foot:.8,topShade:.88});F.F.pop(kt)}let Z=Rt=>Math.floor(re*Rt/66);for(let[Rt,It]of[[ot-15,-1],[vt+15,1],[ot-31,-1],[vt+31,1]]){let kt=Z(Rt);for(let J=0;J<kt;J++){let zt=m+(J+.5)/kt*re;lt(Rt,zt,40)||J%9===4||on(ht,Rt*Math.cos(zt),Rt*Math.sin(zt),n,56,9.5,4.6,It>0?zt-Math.PI/2:zt+Math.PI/2,{wall:[tt.stone,J%4===1?$.red:$.white],windows:1,doors:[[0,-16],[0,0],[0,16]],tile:$.tile[J%4],base:[tt.stone,$.black],rise:2.3})}}at(ot-45,7),at(vt+45,7);let ct=["garden","temple","gym","garden","horses","houses","garden","horses","temple","gym"];dt(rt,ot-50,1,ct),dt(vt+50,X,-1,ct);let Y=i.to("ship-sheds"),yt=40,Ct=7.4,jt=(Rt,It,kt,J)=>{let zt=Y.F.push(Rt,It,0,kt),At=4.3,Bt=Ct/2,bt=-yt/2,Nt=yt/2,Ot=s+.25;Y.surf(tt.paving,je($.white,.9)).quad([-Bt,bt-7,-1.3],[Bt,bt-7,-1.3],[Bt,Nt,Ot+1.2],[-Bt,Nt,Ot+1.2],.6,.6,.45,.45),Y.surf(tt.stone,$.white);for(let A=0;A<5;A++)Y.box(Bt,bt+2+A*((yt-4)/4),s,.7,2.2,At,0,{foot:.7});if(Y.box(Bt,0,s+At,.7,yt,.5,0,{bottom:!0,foot:.7}),J){for(let A=0;A<5;A++)Y.box(-Bt,bt+2+A*((yt-4)/4),s,.7,2.2,At,0,{foot:.7});Y.box(-Bt,0,s+At,.7,yt,.5,0,{bottom:!0,foot:.7})}Y.wall(Bt,Nt,-Bt,Nt,s,s+At+.5,.6,.8);let Lt=s+At+.5,z=Lt+1.9;Y.surf(tt.tiles,$.tile[(Math.abs(Rt*7+It*3)|0)%4]),Y.quad([-Bt-.2,bt-.6,Lt],[0,bt-.6,z],[0,Nt+.3,z],[-Bt-.2,Nt+.3,Lt],.95),Y.quad([0,bt-.6,z],[Bt+.2,bt-.6,Lt],[Bt+.2,Nt+.3,Lt],[0,Nt+.3,z],.95),Y.surf(tt.wood,$.darkWood).tri([-Bt,bt,Lt],[Bt,bt,Lt],[0,bt,z],.55),Y.tri([Bt,Nt,Lt],[-Bt,Nt,Lt],[0,Nt,z],.7),Y.F.pop(zt)};for(let[Rt,It]of[[a,!0],[l,!1],[o,!0]]){let kt=It?Rt+1+yt/2:Rt-1-yt/2,J=Math.floor(re*kt/(Ct+.7));for(let zt=0;zt<J;zt++){let At=m+(zt+.5)/J*re,Bt=zt%14;if(Bt>=6||Math.abs(Math.atan2(Math.sin(At-m),Math.cos(At-m)))<34/kt||lt(kt,At,24)||e.phone&&zt%28>=9)continue;let bt=It?At-Math.PI/2:At+Math.PI/2;if(jt(kt*Math.cos(At),kt*Math.sin(At),bt,Bt===0),T()<.7){let Nt=It?kt+2:kt-2;S.push({x:Nt*Math.cos(At),y:Nt*Math.sin(At),z:s+1,rot:It?At+Math.PI:At,tilt:0,sx:1})}}}let Ut=i.to("quays");for(let[Rt,It,kt]of[[f+7,1,44],[M-7,-1,52]]){let J=Math.floor(re*Rt/(kt+26));for(let zt=0;zt<J;zt++){let At=m+(zt+.5)/J*re;if(!(lt(Rt,At,kt/2+8)||Math.abs(Math.atan2(Math.sin(At-m),Math.cos(At-m)))<110/Rt)){if(zt%5===3){let Bt=Ut.F.push((Rt+It*-6.4)*Math.cos(At),(Rt+It*-6.4)*Math.sin(At),0,It>0?At+Math.PI/2:At-Math.PI/2);for(let bt=0;bt<14;bt++)Ut.surf(tt.smooth,$.white).box(0,-9+bt*.7+4.5,s,9,.7,(n-s)*(bt+1)/14,0,{foot:.75,topShade:.9});Ut.F.pop(Bt);continue}wi(Ut,Rt*Math.cos(At),Rt*Math.sin(At),s,kt,9,4.4,It>0?At+Math.PI/2:At-Math.PI/2,{wall:[tt.stone,zt%3?$.white:$.red],tile:$.tile[zt%4],r:.4,cols:Math.round(kt/5.5),simple:"pier"})}}}return{trees:U,hulls:S,strip:y,rW3:C,rL2:b}};var Zl=(i,t)=>{let e=new bi(new _i,"block"),n=Gn(i),s=(r,a)=>{let l=-22;for(;l<21;){let o=Math.min(22-l,7.5+n()*6.5),h=9+n()*3.5,u=n()<.35?6.2+n()*1.4:3.3+n()*1.2,c=$.plaster[n()*6|0],f=$.tile[n()*4|0],d=r+(a>0?-1:1)*(h/2-5),p=n()<.24;if(t)on(e,l+o/2,d,0,o-.25,h,u,a>0?0:Math.PI,{wall:[tt.plaster,c],tile:f,roof:p?"flat":"gable",windows:1,doors:[[0,(n()-.5)*(o-3.4)]],rise:1.3+n()*.8,ridgeAlongY:!1,over:.45,base:n()<.4?[tt.stone,$.white]:null});else{let v=e.F.push(l+o/2,d,0,a>0?0:Math.PI),g=1.3+n()*.8,m=(o-.25)/2;e.surf(tt.plaster,c).box(0,0,0,o-.25,h,u+(p?.6:0),0,{top:p,foot:.78,sides:p?15:3,topShade:.82}),p||(e.surf(tt.tiles,f).quad([-m,-h/2-.4,u-.2],[m,-h/2-.4,u-.2],[m,0,u+g],[-m,0,u+g],.92,.92,1,1),e.quad([m,h/2+.4,u-.2],[-m,h/2+.4,u-.2],[-m,0,u+g],[m,0,u+g],.92,.92,1,1),e.surf(tt.plaster,c).tri([m,-h/2,u],[m,h/2,u],[m,0,u+g],.85),e.tri([-m,h/2,u],[-m,-h/2,u],[-m,0,u+g],.85)),e.F.pop(v)}l+=o}};return s(-10,1),s(10,-1),t&&(e.surf(tt.plaster,$.plaster[1]).box(-21.6,0,0,.5,9,2.4,0,{foot:.75}),e.box(21.6,0,0,.5,9,2.4,0,{foot:.75}),e.surf(tt.wood,$.darkWood).wall(-21.9,1,-21.9,-1,0,2,.8),e.surf(tt.earth,[205,192,168]).slab(0,0,.04,43,9,0,.75)),e.geometry()},Mf=(i,t)=>{let{rT:e,core:n,B:s,SEA:r,off:a,bridgeHalf:l,canalHalf:o,k:h}=i,u=Gn(1180),c={low:Zl(11,!1),high:[Zl(21,!0),Zl(22,!0),Zl(23,!0)]},f=t.phone?8:24,d=Array.from({length:f},()=>({blocks:[],cx:0,cy:0})),p=37,v=Math.floor((n-e-18)/p),g=t.phone?Math.min(v,7):v,m=[];for(let x=0;x<g;x++){let _=e+24+x*p,b=Math.floor(re*_/50);for(let M=0;M<b;M++){let C=r+(M+.5)/b*re,y=_*Math.cos(C),T=_*Math.sin(C);if(T<0&&(Math.abs(y)<o+12*h+30||Math.abs(y-a)<l+28))continue;let U=(C-r)/re*16;if(Math.abs(U-Math.round(U))*(re/16)*_<29)continue;if(u()<.035){for(let K=0;K<5;K++)m.push({x:y+(u()-.5)*34,y:T+(u()-.5)*22,z:s,s:6+u()*5,kind:u()<.5?"plane":"cypress",id:"house-form"});continue}let S=Math.min(f-1,Math.floor((C-r)/re%1*f)),V=.86+u()*.28;d[S].blocks.push({x:y,y:T,z:s,rot:C+Math.PI/2+(u()<.5?Math.PI:0),sx:re*_/b/50,sy:1,sz:.9+u()*.25,tint:[255*Math.min(1,V),255*Math.min(1,V*.985),255*Math.min(1,V*.95)],kind:u()*3|0})}}for(let x=0;x<f;x++){let _=r+(x+.5)/f*re,b=(e+n)/2;d[x].cx=b*Math.cos(_),d[x].cy=b*Math.sin(_),d[x].reach=re*b/f/2+(n-e)/2}return{protos:c,sectors:d,trees:m}};var Sf=(i,t,e,n,s)=>{let r=[];for(let a=0;a<=n;a++){let l=a/n,[o,h,u,c]=e(l),f=(l-.5)*t;r.push([[f,-o,u+c],[f,-o*.96,u*.45+c],[f,-o*.6,-h*.55+c],[f,0,-h+c],[f,o*.6,-h*.55+c],[f,o*.96,u*.45+c],[f,o,u+c]])}i.surf(tt.wood,s).loft(r,{flip:!0}),i.surf(tt.wood,je($.wood,1.05));for(let a=0;a<n;a++){let l=r[a],o=r[a+1];i.quad([l[0][0],l[0][1],l[0][2]-.25],[o[0][0],o[0][1],o[0][2]-.25],[o[6][0],o[6][1],o[6][2]-.25],[l[6][0],l[6][1],l[6][2]-.25],.8)}return r},jl=(i,t,e,n=.07)=>i.quad([t[0],t[1]-n,t[2]],[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],[e[0],e[1]-n,e[2]]),Tf=i=>{let t=()=>new bi(new _i,"ship"),e=(s,r)=>{let a=t(),l=37;Sf(a,l,o=>{let h=2.75*Math.min(1,Math.sin(Math.min(1,o*1.25)*Math.PI/2)**.7)*(o>.82?Math.max(.06,1-((o-.82)/.18)**1.6):1),u=o<.16?((.16-o)/.16)**2*4.2:o>.9?((o-.9)/.1)**2*1.2:0;return[Math.max(.12,h*(o<.1?.35+o*6.5:1)),1*(o<.12?o/.12:1),2.1,u]},r||i.phone?7:12,$.hull),a.surf(tt.gilt,$.brass).box(l/2+.9,0,-.5,2.6,.5,.9,0,{bottom:!0}),a.surf(tt.wood,$.hull);for(let o of[-1,1])a.box(0,o*3,1.5,l*.66,.6,.5,0,{bottom:!0,foot:.7});a.surf(tt.wood,je($.red,1.1)).box(l/2-2.2,0,2.1,.5,2.6,.9,0);for(let o=-1;o<=1;o++)a.surf(tt.wood,$.hull).quad([-l/2+.2,o*.5-.12,6],[-l/2+.2,o*.5+.12,6],[-l/2+2.6+Math.abs(o)*.3,o*.9+.12,8.4-Math.abs(o)*.5],[-l/2+2.6+Math.abs(o)*.3,o*.9-.12,8.4-Math.abs(o)*.5]);if(s){a.surf(tt.wood,$.wood).shaft(1.5,0,1.8,.2,.13,10.5,5),a.box(1.5,0,11.4,.3,11,.3,0,{bottom:!0}),a.surf(tt.cloth,$.sail).box(1.5,0,10.9,.5,10.4,.55,0,{bottom:!0}),a.surf(tt.wood,$.darkWood),jl(a,[1.5,0,12.2],[l/2-2,0,2.6]),jl(a,[1.5,0,12.2],[-l/2+2,0,5]);let o=i.phone?12:28;for(let h=0;h<o;h++)for(let u of[-1,1]){let c=-l*.3+l*.6*h/(o-1);a.surf(tt.wood,$.wood).quad([c,u*2.9,1.5],[c+.14,u*2.9,1.5],[c+.14-1.2,u*7.2,.05],[c-1.2,u*7.2,.05])}}return a.geometry()},n=s=>{let r=t(),a=19;Sf(r,a,l=>{let o=3*Math.sin(Math.min(1,l*1.6)*Math.PI/2)**.6*(l>.72?Math.max(.05,Math.cos((l-.72)/.28*Math.PI/2)**.8):1),h=l<.14?((.14-l)/.14)**1.6*3:l>.86?((l-.86)/.14)**1.6*2.2:0;return[Math.max(.1,o),1.5*Math.min(1,l/.1,(1-l)/.08),1.9,h]},7,je($.hull,1.15)),r.surf(tt.wood,je($.hull,.9));for(let l of[-1,1])r.box(0,l*3.02,1.35,a*.7,.16,.3,0,{bottom:!0});if(r.surf(tt.wood,$.wood).shaft(.6,0,1.6,.24,.15,12.5,5),r.box(.6,0,12.6,.3,11.5,.3,0,{bottom:!0}),s){r.surf(tt.cloth,$.sail);let l=4;for(let o=0;o<l;o++){let h=12.6-o*8.2/l,u=12.6-(o+1)*8.2/l,c=p=>.75+Math.sin(p*Math.PI)*1.6,f=o/l,d=(o+1)/l;r.quad([c(f),-5.4,h],[c(f),5.4,h],[c(d),5.2,u],[c(d),-5.2,u],1,1,.9,.9)}}else r.surf(tt.cloth,$.sail).box(.6,0,12.1,.55,10.8,.6,0,{bottom:!0});r.surf(tt.wood,$.darkWood),jl(r,[.6,0,14],[a/2-.6,0,4.2]),jl(r,[.6,0,14],[-a/2+1,0,4.6]);for(let l of[-1,1])r.quad([.6,0,13.6],[.74,0,13.6],[.74,l*2.9,2],[.6,l*2.9,2]),r.surf(tt.wood,$.wood).box(-a/2+2.2,l*2.6,-.6,.25,.5,4.4,0,{foot:.8});r.surf(tt.wood,je($.wood,.9)).box(-a/2+3.4,0,1.6,2.6,3.2,1.5,0,{foot:.8}),r.surf(tt.tiles,[240,200,170]);for(let[l,o]of[[3.5,-.8],[4.6,.7]])r.shaft(l,o,1.6,.34,.46,.95,5,{cap:!0});return r.geometry()};return{trireme:e(!0),hull:e(!1,!0),merchant:n(!1),sailing:n(!0)}},Ef=(i,t)=>{let{rIsle:e,rW1:n,rL1:s,rW2:r,rL2:a,rW3:l,canalHalf:o,edge:h,SEA:u,off:c,bridgeHalf:f,k:d}=i,p=Gn(1190),v=[],g=[],m=[],x=[],_=(M,C)=>!(C<0&&Math.abs(M-c)<f+16),b=t.phone?.5:1;for(let M=0;M<9*b;M++){let C=p()*re,y=(e+n)/2+(p()-.5)*70,T=y*Math.cos(C),U=y*Math.sin(C);_(T,U)&&v.push({x:T,y:U,z:.25,rot:C+Math.PI/2+(p()-.5)*.3})}for(let M=0;M<16*b;M++){let C=p()*re,y=(s+r)/2+(p()-.5)*190,T=y*Math.cos(C),U=y*Math.sin(C);_(T,U)&&v.push({x:T,y:U,z:.25,rot:C+Math.PI/2+(p()-.5)*.4})}for(let M=0;M<26*b;M++){let C=p()*re,y=e+5.5,T=y*Math.cos(C),U=y*Math.sin(C);_(T,U)&&Math.abs(C-Math.PI/2)>.12&&g.push({x:T,y:U,z:.25,rot:C+Math.PI/2})}for(let[M,C]of[[a+12,1],[l-12,-1]]){let y=Math.floor(re*M/15);for(let T=0;T<y;T++){if(p()>.21*b)continue;let U=u+(T+.5)/y*re,S=M*Math.cos(U),V=M*Math.sin(U);!_(S,V)||Math.abs(Math.atan2(Math.sin(U-u),Math.cos(U-u)))<90/M||m.push({x:S,y:V,z:.1,rot:C>0?U:U+Math.PI,sx:.8+p()*.5})}}for(let M=0;M<110*b;M++){let C=p()*re,y=(a+l)/2+(p()-.5)*380,T=y*Math.cos(C),U=y*Math.sin(C);_(T,U)&&(p()<.3?x:m).push({x:T,y:U,z:.1,rot:C+Math.PI/2+(p()-.5)*1.4+(p()<.5?Math.PI:0),sx:.8+p()*.5})}for(let M=0;M<26*b;M++){let C=l+p()*(h-l-30),y=p()<.5?-1:1;(p()<.55?x:m).push({x:y*o*(.25+p()*.4),y:-C,z:.1,rot:y>0?Math.PI/2:-Math.PI/2,sx:.85+p()*.45})}for(let M=0;M<30*b;M++){let C=l+60+p()*(h-l-120),y=p()<.5?-1:1;m.push({x:y*(o-3.6),y:-C,z:.1,rot:Math.PI/2*(p()<.5?1:-1),sx:.8+p()*.4})}return{triremes:v,hulls:g,merchants:m,sailing:x}};var Ca=(i,t,e,n,s,r,a,l,o)=>{let h=Gn(o),u=()=>.86+h()*.28;i.surf(tt.leaf,l).turned(t,e,n,[[s*.3,0],[s*u(),r*.36],[s*.8*u(),r*.72],[.01,r]],a,{rot:h()*6,squash:.9+h()*.2})},Af=i=>{let e=()=>new bi(new _i,"tree"),n=e();n.surf(tt.wood,$.trunk).shaft(0,0,0,.022,.018,.12,4),n.surf(tt.leaf,[255,255,255]).turned(0,0,.07,[[.03,0],[.095,.14],[.1,.36],[.06,.72],[.004,.93]],5);let s=e();s.surf(tt.wood,$.trunk).shaft(0,0,0,.035,.025,.42,5),Ca(s,.06,.02,.3,.3,.52,5,[255,255,255],3),Ca(s,-.14,-.06,.4,.26,.6,5,[235,245,225],4);let r=e();r.surf(tt.wood,$.trunk).shaft(0,0,0,.03,.02,.66,5),Ca(r,0,0,.6,.36,.4,6,[215,235,205],5);let a=e();a.surf(tt.wood,$.trunk).shaft(0,0,0,.06,.04,.34,5),Ca(a,0,0,.24,.46,.76,5,[255,255,255],6);let l=e();return l.surf(tt.wood,$.trunk).shaft(0,0,0,.045,.03,.36,4),Ca(l,0,0,.28,.4,.72,5,[255,255,255],7),{cypress:n.geometry(),plane:s.geometry(),pine:r.geometry(),olive:a.geometry(),fruit:l.geometry()}},Rf={cypress:[[150,175,150],[170,190,160],[135,160,140]],plane:[[255,255,255],[235,245,220],[220,235,205],[245,240,200]],pine:[[190,215,185],[205,225,195]],olive:[[225,232,236],[205,216,222]],fruit:[[255,255,235],[240,255,220],[225,240,205]]};var Cf=Math.PI*2,Nh=Object.fromEntries(ai.map(i=>[i,[`${i}_c.jpg`,`${i}_n.jpg`]])),cs=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},vy=(i,t,e,n)=>{let s=Math.floor(i),r=Math.floor(t),a=i-s,l=t-r,o=a*a*(3-2*a),h=l*l*(3-2*l),u=(c,f)=>cs((c%e+e)%e,(f%e+e)%e,n);return(u(s,r)*(1-o)+u(s+1,r)*o)*(1-h)+(u(s,r+1)*(1-o)+u(s+1,r+1)*o)*h},un=(i,t,e,n,s=4)=>{let r=0,a=.5,l=1;for(let o=0;o<s;o++)r+=a*vy(i*l,t*l,e*l,n+o),a*=.5,l*=2;return r/(1-2**-s)},xy={ashlar:(i,t)=>{let n=Math.floor(t*8),s=t*8-n,r=2+(n%3===1?1:0),a=cs(n,0,3)*.6,l=(i+a)*r,o=Math.floor(l),h=l-o,u=1/r,c=Math.min(h*u*4.2,(1-h)*u*4.2,s*.525,(1-s)*.525)/.022,f=Math.min(1,c),d=.86+.2*cs(o%r,n,7),p=un(i*24,t*24,24,5),v=un(i*3,t*3,3,9),g=214*d*(.9+.2*p)*(.9+.14*v)*(.55+.45*f);return[g,g*.985,g*.95,f*(.75+.25*p),.9-.12*p]},paving:(i,t)=>{let n=i*5,s=t*5+Math.floor(i*5)%2*.5,r=Math.floor(n),a=Math.floor(s),l=n-r,o=s-a,h=Math.min(1,Math.min(l,1-l,o,1-o)/.03),u=.84+.22*cs(r%5,a%5,11),c=un(i*28,t*28,28,13),f=208*u*(.88+.22*c)*(.5+.5*h);return[f,f*.98,f*.93,h*(.8+.2*c),.86-.14*c]},tiles:(i,t)=>{let s=i*10,r=t*8,a=Math.floor(s),l=Math.floor(r),o=s-a,h=r-l,u=Math.abs(Math.sin(o*Math.PI)),c=h,f=.8+.3*cs(a,l,17),d=un(i*30,t*30,30,19),p=.25+.55*u+.2*(1-c),v=f*(.86+.25*d)*(.62+.38*u)*(c<.08?.7:1);return[196*v,112*v,76*v,p,.82]},plaster:(i,t)=>{let e=un(i*6,t*6,6,23,5),n=un(i*40,t*40,40,29,2),s=212*(.9+.14*e)*(.95+.08*n);return[s,s*.99,s*.96,.5+.3*e+.2*n,.9]},metal:(i,t)=>{let n=i*2,s=t*2*2,r=n-Math.floor(n),a=s-Math.floor(s),l=Math.min(1,Math.min(r,1-r,a*.5,(1-a)*.5)/.012),o=un(i*3,t*90,3,31,3),h=un(i*9,t*9,9,37),u=Math.hypot(r*8%1-.5,(a-.06)*4)<.16||Math.hypot(r*8%1-.5,(a-.94)*4)<.16?1:0,c=222*(.9+.1*o)*(.86+.16*h)*(.72+.28*l);return[c,c,c,.5*l+.1*o+.4*u,.34+.32*h+.1*o+.2*(1-l)]},grass:(i,t)=>{let e=un(i*8,t*8,8,41,5),n=un(i*60,t*60,60,43,2),s=un(i*3,t*3,3,47),r=.7+.5*e*n*2;return[(86+46*s)*r,(112+16*s)*r,54*r,n,.95]},sand:(i,t)=>{let e=un(i*10,t*10,10,53,4),n=cs(Math.floor(i*256),Math.floor(t*256),59),s=.86+.14*e+.06*n;return[216*s,198*s,162*s,.5*e+.5*n,.96]},wood:(i,t)=>{let n=t*6,s=Math.floor(n),r=n-s,a=Math.min(1,Math.min(r,1-r)/.04),l=un(i*4+cs(s,0,61)*9,t*70,4,67,3),h=(.8+.3*cs(s,1,71))*(.75+.4*l)*(.55+.45*a);return[150*h,112*h,78*h,a*(.6+.4*l),.8]},rock:(i,t)=>{let e=un(i*5,t*5,5,73,6),n=un(i*2,t*14,2,79,3),s=150*(.6+.5*e)*(.85+.25*n);return[s,s*.97,s*.92,.6*e+.4*n,.94]},leaf:(i,t)=>{let e=un(i*12,t*12,12,83,3),n=un(i*36,t*36,36,89,2),s=.45+1.1*e*(.6+.8*n);return[84*s,112*s,58*s,e*n*1.6,.86]}},Pf=(i,t)=>{let e=new Uint8Array(t*t*4),n=new Uint8Array(t*t*4),s=new Float32Array(t*t),r=xy[i];for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=r((o+.5)/t,(l+.5)/t),u=(l*t+o)*4;e[u]=Math.min(255,h[0]),e[u+1]=Math.min(255,h[1]),e[u+2]=Math.min(255,h[2]),e[u+3]=255,s[l*t+o]=h[3],n[u+2]=Math.min(255,h[4]*255),n[u+3]=255}let a=t/64;for(let l=0;l<t;l++)for(let o=0;o<t;o++){let h=(s[l*t+(o+1)%t]-s[l*t+(o+t-1)%t])*a,u=(s[(l+1)%t*t+o]-s[(l+t-1)%t*t+o])*a,c=Math.hypot(h,u,1),f=(l*t+o)*4;n[f]=(-h/c*.5+.5)*255,n[f+1]=(-u/c*.5+.5)*255}return{colour:e,detail:n}},Jl=(i,t)=>{let e=new bs(new Uint8Array(i*i*4*ai.length),i,i,ai.length);return e.format=Ze,e.type=an,e.colorSpace=t?Le:zn,e.wrapS=e.wrapT=Ni,e.minFilter=rn,e.magFilter=Ae,e.generateMipmaps=!0,e.anisotropy=8,e},If=(i=128)=>{let t=Jl(i,!0),e=Jl(i,!1);return ai.forEach((n,s)=>{let r=Pf(n,i);t.image.data.set(r.colour,s*i*i*4),e.image.data.set(r.detail,s*i*i*4)}),t.needsUpdate=e.needsUpdate=!0,{colour:t,detail:e,size:i}},Lf=(i=256)=>{let t=new Uint8Array(i*i*4),e=5,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,s=Array.from({length:18},()=>{let a=Math.round((n()-.5)*26)||1,l=Math.round((n()-.5)*26);return[a,l,n()*Cf,1/Math.hypot(a,l)**1.2]});for(let a=0;a<i;a++)for(let l=0;l<i;l++){let o=0,h=0;for(let[p,v,g,m]of s){let x=Math.cos(Cf*(p*l+v*a)/i+g)*m;o+=x*p,h+=x*v}let u=-o*.16,c=-h*.16,f=Math.hypot(u,c,1),d=(a*i+l)*4;t[d]=(u/f*.5+.5)*255,t[d+1]=(c/f*.5+.5)*255,t[d+2]=(1/f*.5+.5)*255,t[d+3]=255}let r=new Tn(t,i,i,Ze);return r.wrapS=r.wrapT=Ni,r.minFilter=rn,r.magFilter=Ae,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r},Df=async(i,t)=>{let e=`${globalThis.__ASSETS__||"./"}city/`,n=globalThis.__CITYTEX__,s=async p=>{let v=await fetch(n?.[p]??e+p);if(!v.ok)throw new Error(`${p}: ${v.status}`);return createImageBitmap(await v.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"})},r=await Promise.all(ai.map(async p=>{let v=t[p];if(!v)return null;try{return{colour:await s(v[0]),detail:await s(v[1])}}catch{return null}}));if(!r.some(Boolean))return null;let a=Jl(i,!0),l=Jl(i,!1),h=(typeof OffscreenCanvas=="function"?new OffscreenCanvas(i,i):Object.assign(document.createElement("canvas"),{width:i,height:i})).getContext("2d",{willReadFrequently:!0}),u=p=>(h.setTransform(1,0,0,-1,0,i),h.clearRect(0,0,i,i),h.drawImage(p,0,0,i,i),p.close?.(),h.getImageData(0,0,i,i).data),c=128,f=p=>{let v=new Uint8Array(i*i*4),g=i/c;for(let m=0;m<i;m++)for(let x=0;x<i;x++){let _=((m/g|0)*c+(x/g|0))*4,b=(m*i+x)*4;v[b]=p[_],v[b+1]=p[_+1],v[b+2]=p[_+2],v[b+3]=255}return v},d=[];for(let p=0;p<ai.length;p++){if(r[p])a.image.data.set(u(r[p].colour),p*i*i*4),l.image.data.set(u(r[p].detail),p*i*i*4);else{d.push(ai[p]);let v=Pf(ai[p],c);a.image.data.set(f(v.colour),p*i*i*4),l.image.data.set(f(v.detail),p*i*i*4)}await new Promise(v=>setTimeout(v,0))}return a.needsUpdate=l.needsUpdate=!0,{colour:a,detail:l,size:i,loaded:ai.length-d.length,missing:d}};var Fh=i=>new se().setRGB(i[0]/255,i[1]/255,i[2]/255,Le),yy=`
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
`,_y=`
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
`,by=()=>{let i=me.lights_fragment_begin,t=i.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),e=i.indexOf("#endif",i.indexOf("#pragma unroll_loop_end",t))+6;if(t<0||e<6)throw new Error("city: three.js light loop not as expected");return i.slice(0,t)+_y+i.slice(e)},wy=`
attribute vec4 aTint;
varying vec3 cPos;
varying vec3 cNrm;
varying vec3 cTint;
flat varying float cSurf;
`,My=`
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
`,Sy=`
#define CITY_SURFACES ${Ta.length}
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
`,Ty=`
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
`,Ey=`
normal = normalize( ( viewMatrix * vec4( normalize( cT * cityTS.x + cB * cityTS.y + cN * cityTS.z ), 0.0 ) ).xyz );
`,Ay=`
outgoingLight = mix( vec3( dot( outgoingLight, vec3( 0.3, 0.55, 0.15 ) ) ) * 0.42, outgoingLight, min( uDim, 1.0 ) ) + uGlow * step( 1.5, uDim );
`,Nf=i=>{i.fragmentShader=i.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
${yy}`).replace("#include <lights_fragment_begin>",by())},Kl=({phone:i=!1}={})=>{let t=If(i?64:128),e={tColour:{value:t.colour},tDetail:{value:t.detail},uSurfA:{value:Ta.map(p=>{let v=Wl[p];return new ge(v.layer,v.size,v.metal,v.rough)})},uSurfB:{value:Ta.map(p=>{let v=Wl[p];return new ge(v.bump,v.pattern,v.wet,v.keep)})},uStone:{value:[Fh($.white),Fh($.black),Fh($.red)]},uGlow:{value:new se(0,0,0)},uTime:{value:0}},n=p=>{let v=new Ki({color:16777215,roughness:1,metalness:0,side:Ye,envMapIntensity:1});v.shadowSide=Ye;let g={value:p};return v.onBeforeCompile=m=>{Object.assign(m.uniforms,{tColour:e.tColour,tDetail:e.tDetail,uSurfA:e.uSurfA,uSurfB:e.uSurfB,uStone:e.uStone,uDim:g,uGlow:e.uGlow}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
${wy}`).replace("#include <project_vertex>",`#include <project_vertex>
${My}`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
${Sy}`).replace("#include <map_fragment>",Ty).replace("#include <roughnessmap_fragment>","float roughnessFactor = cityRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = cityMetal;").replace("#include <normal_fragment_maps>",Ey).replace("#include <opaque_fragment>",`${Ay}
#include <opaque_fragment>`),Nf(m)},v.customProgramCacheKey=()=>"city-solid",v},s=n(1),r=n(.32),a=n(2),l=Lf(i?128:256),o={value:1},h={tWave:{value:l},uTime:e.uTime,uShores:{value:new Float32Array(6)},uCanal:{value:new ge(0,-1,46,1e9)},tMirror:{value:null},uMirror:{value:0},uMirrorVP:{value:new ve},uDim:o},u=p=>{let v=new Ki({color:16777215,roughness:.07,metalness:0,transparent:!0,envMapIntensity:1.15});return v.blending=ha,v.blendSrc=vr,v.blendDst=xr,v.blendSrcAlpha=ua,v.blendDstAlpha=da,v.onBeforeCompile=g=>{Object.assign(g.uniforms,h),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
          #include <opaque_fragment>`),Nf(g)},v.customProgramCacheKey=()=>p?"city-pool":"city-sea",v},c={uColour:{value:new se(.5,.6,.7)}},f=new Xe({uniforms:c,transparent:!0,depthWrite:!1,side:Ye,blending:ha,blendSrc:vr,blendDst:xr,blendSrcAlpha:ua,blendDstAlpha:da,vertexShader:`varying vec3 gN; varying vec3 gV;
      void main() {
        vec4 p = vec4( position, 1.0 ); vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p; n = mat3( instanceMatrix ) * n;
        #endif
        vec4 mv = modelViewMatrix * p; gN = normalMatrix * n; gV = - mv.xyz; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColour; varying vec3 gN; varying vec3 gV;
      void main() { float rim = 1.0 - abs( dot( normalize( gN ), normalize( gV ) ) ); gl_FragColor = vec4( uColour * ( 0.55 + 0.9 * rim ), 0.05 + 0.3 * rim * rim ); }`}),d=(p,v,g)=>new Be({color:new se(p,v,g),transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1,side:Ye});return{solid:s,dim:r,glow:a,seaDim:o,glowColour:e.uGlow.value,sea:u(!1),pool:u(!0),ghost:f,wallLine:d(1.5,1.1,.4),canalLine:d(.25,.7,1.3),shared:e,waterUniforms:h,ghostUniforms:c,textures:t}};var Ql=new Map([...Lh.from_text.map(i=>[i.id,{id:i.id,what:i.what,ref:i.ref,kind:"text",ours:i.shape==="ours"}]),...Lh.choices.map(i=>[i.id,{id:i.id,what:i.what,ref:null,kind:"choice",ours:!0}])]),Ff=(i={},t={})=>{let e=typeof performance<"u"?performance.now():0,n=ff(i),s={phone:!!t.phone},r=t.materials??Kl(s),a=new Vl,l=new ke,o=Gn(42),h=[],u=(B,j,lt={})=>{let et=Ql.get(j);return et||console.warn(`city: "${j}" is not in reconstruction.json`),B.userData={...B.userData,id:j,kind:et?.kind??"choice",ghostable:!!et?.ours&&!lt.keep,solid:B.material,...lt},B.name=j,!B.userData.line&&!B.userData.water&&(B.castShadow=B.receiveShadow=!0),l.add(B),h.push(B),B},c=gf(a,n,s),f=xf(a,n,s),d=bf(a,n,s),p=wf(a,n,s);for(let[B,j]of a.bins){if(!j.nv)continue;let[lt,et]=B.split("#");u(new ce(j.geometry(),r.solid),lt,et?{[et]:!0}:{})}for(let B of vf(n,r))u(B,B.userData.id);for(let B of[...d.pools,...f.basins.map(j=>({...j,z:j.z+.8,rot:0,id:"aqueducts"}))]){let j=B.arc?new Xn(B.r0,B.r1,Math.ceil((B.arc[1]-B.arc[0])*B.r1/6),1,B.arc[0],B.arc[1]-B.arc[0]):B.r?new ws(B.r,20):new On(B.w,B.d),lt=new ce(j,r.pool);B.arc?lt.position.z=B.z:(lt.position.set(B.x,B.y,B.z),lt.rotation.z=B.rot??0),lt.receiveShadow=!0,u(lt,B.id,{water:!0,pool:!0})}let v=Af(s),g=Mf(n,s),m=new Map;for(let B of[...d.trees,...p.trees,...g.trees]){let j=`${B.kind}|${B.id}`;m.has(j)||m.set(j,[]);let lt=Rf[B.kind],et=lt[o()*lt.length|0],pt=.85+o()*.3;m.get(j).push({x:B.x,y:B.y,z:B.z-.1,rot:o()*re,sx:B.s*(.9+o()*.3),sy:B.s*(.9+o()*.3),sz:B.s,tint:[Math.min(255,et[0]*pt),Math.min(255,et[1]*pt),Math.min(255,et[2]*pt)]})}let x=0;for(let[B,j]of m){let[lt,et]=B.split("|");x+=j.length,u(Oi(v[lt],r.solid,j),et,{keep:et!=="house-form",tree:!0})}let _=Tf(s),b=Ef(n,s),M=[255,255,255],C=B=>B.map(j=>({...j,sy:j.sx,sz:j.sx,tint:j.tint??M}));for(let B of c.dock.mouths)b.hulls.push({x:B,y:c.dock.yFace-c.dock.dockDeep*.5,z:.2,rot:-Math.PI/2});u(Oi(_.hull,r.solid,C(p.hulls)),"shipyards"),u(Oi(_.hull,r.solid,C(b.hulls)),"triremes",{reflect:!0}),u(Oi(_.trireme,r.solid,C(b.triremes)),"triremes",{reflect:!0}),u(Oi(_.merchant,r.solid,C(b.merchants)),"merchant-ships",{reflect:!0}),u(Oi(_.sailing,r.solid,C(b.sailing)),"merchantmen",{reflect:!0});let y=g.sectors.map(B=>{let j=B.blocks.length?u(Oi(g.protos.low,r.solid,B.blocks),"house-form"):null,lt=s.phone?[]:[0,1,2].map(et=>{let pt=B.blocks.filter(at=>at.kind===et);if(!pt.length)return null;let dt=u(Oi(g.protos.high[et],r.solid,pt),"house-form");return dt.visible=!1,dt}).filter(Boolean);return{...B,low:j,high:lt,near:!1}}),T=new Set(["wall-brass","wall-tin","wall-orichalcum","ring-walls","wall-towers","bridges","bridge-gates","stone","rings","ship-sheds","quays","rock-docks","ship-passages","canal"]);for(let B of h)(B.userData.reflect||T.has(B.userData.id)&&!B.userData.water&&!B.userData.line&&!B.userData.teeth)&&B.layers.enable(1);let U=Dh.filter(B=>h.some(j=>j.userData.id===B)).map(B=>{let j=Ql.get(B);return{id:B,what:j.what,ref:j.ref,kind:j.kind}}),S=n,V=d.temple,K={canal:[0,-(S.rW3+330),520,74,0],"merchant-ships":[-420,-(S.rW3-150),380,76,300],houses:[-360,-(S.rT+190),300,68,25],"house-form":[-360,-(S.rT+190),160,74,25],harbours:[S.off-260,-(S.rL2+S.rW3)/2,1e3,68,332],bridges:[S.off+150,-(S.rL2+300),420,74,330],"bridge-gates":[S.off+6,-(S.bridges[2][1]+70),120,80,0],aqueducts:[S.off-8,-(S.bridges[1][1]+30),90,72,20],"wall-brass":[S.off+330,-(S.r2b-60),420,78,300],"ring-walls":[S.off+60,-(S.r2b+30),150,80,60],"wall-towers":[S.off+200,-(S.r2b+10),160,78,310],"ship-passages":[0,-(S.rL2+110),170,82,0],racecourse:[S.off+420,-(S.rcMid-60),520,70,290],barracks:[S.off+240,-(S.rcMid+S.rcHalf+30),170,70,300],"horse-grounds":[S.off+500,-(S.r2a+80),300,64,330],gymnasia:[S.off+330,-(S.r1a+70),260,62,320],gardens:[S.off+260,-(S.r2b-70),240,62,300],"ring-temples":[S.off-300,-(S.r1a+80),240,66,30],"patterned-buildings":[S.off-420,-(S.r1b-60),220,66,20],shipyards:[S.off+330,-(S.rW2-60),260,74,300],"ship-sheds":[S.off+330,-(S.rW2-60),160,78,300],"wall-tin":[S.off+220,-(S.r1b+60),300,78,310],"guard-house":[S.off+200,-(S.r1a+130),260,62,60],"rock-docks":[0,S.rIsle+60,150,80,180],"wall-orichalcum":[S.off+150,-(S.rIsle+60),240,78,320],"guard-dwellings":[-(S.Rs+50),-40,190,66,90],springs:[330,250,190,66,230],reservoirs:[300,300,200,62,230],baths:[120,420,220,62,190],grove:[-220,380,300,66,150],palace:[0,110,330,62,0],shrine:[0,-20,150,68,15],"shrine-wall":[0,-30,120,72,0],hall:[0,0,60,30,0],altar:[d.altar.x+10,d.altar.y,110,72,280],statues:[V.x+V.L/2+20,V.y-V.W/2-10,90,78,300],"votive-outside":[S.off,-(S.rampTop-40),70,78,0],temple:[V.x,V.y,215,70,40],pinnacles:[V.x+V.L/2,V.y,120,60,270],"temple-interior":[V.x+20,V.y,70,84,270,V.floor],"temple-ceiling":[V.x-20,V.y,40,62,270,V.floor],poseidon:[V.x-30,V.y,60,84,270,V.floor],nereids:[V.x+10,V.y+12,30,80,250,V.floor],"votive-inside":[V.x+30,V.y-20,30,80,200,V.floor],pillar:[V.x+22,V.y,26,82,270,V.floor],rings:[0,0,S.rW3*3.4,58,330],island:[0,-60,900,62,0],hill:[S.off+40,-(S.rampFoot+40),200,76,350],stone:[S.off+120,-(S.r1b+40),120,80,300],quays:[S.off+150,-(S.rT-20),140,82,290],"outer-wall":[0,0,S.rWall*2.6,20,0],extent:[0,-S.core,900,66,0],triremes:[S.off+140,-(S.rL1+150),200,78,300],merchantmen:[60,-(S.rW3+200),200,80,0],"island-gardens":[-(S.Rp+30),-30,160,70,90],"racecourse-form":[S.off+60,-(S.rcMid+S.rcHalf+30),180,76,330],"ring-layout":[S.off+300,-(S.r1a+140),300,62,300]},it={centre:[0,0],harbour:[S.off-40,-(S.rL2+150)],temple:[V.x+10,V.y],quay:[S.off+40,-(S.rT-24)]},D=(typeof performance<"u"?performance.now():0)-e,W=0;for(let B of h){let j=B.geometry,lt=(j.index?j.index.count:j.attributes.position.count)/3;W+=lt*(B.isInstancedMesh?B.count:1)}return{group:l,meshes:h,parts:U,spots:K,lab:it,sectors:y,plan:n,temple:d.temple,hall:d.hall,radius:n.edge+80,wallRadius:n.rWall,coreRadius:n.rW3,shores:n.shores,materials:r,params:n.P,bank:n.B,stats:{buildMs:D,triangles:W,meshes:h.length,trees:x}}};var Ry=i=>{let t=Math.acos($t(i,-1,1))*180/Math.PI,e=Math.min(38,1/(Math.max(i,0)+.15*Math.max(93.885-t,.5)**-1.253)),n=$t((i+.035)/.055,0,1),s=n*n*(3-2*n);return[.0464+.0098+.012,.1085+.0282+.012,.2648+.0013+.012].map(r=>Math.exp(-r*e)*s)},Cy=i=>{let t=$t((i+.14)/.44,0,1),e=t*t*(3-2*t);return[.1+.1*e,.13+.17*e,.26+.24*e].map(s=>s*e*.55+.004)},tc=class{constructor(t){this.world=t,this.scene=new qn,this.camera=new qe,this.camera.matrixAutoUpdate=!1,this.active=!1,this.site=null,this.city=null,this.params={...Gl},this.pending=0,this.buildMs=null,this.ghost=!1,this.lit=null,this.cut=!1;let e=t.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=Ts;let n=t.phone?1024:2048;this.suns=[0,1,2].map(r=>{let a=new la(16777215,Math.PI);return a.castShadow=!0,a.shadow.mapSize.set(r===2&&!t.phone?4096:n,r===2&&!t.phone?4096:n),a.shadow.autoUpdate=!1,a.shadow.radius=1.4,a.layers.enable(1),this.scene.add(a,a.target),a}),this.cascades=[{half:0,c:new ft(1e9,0,0)},{half:0,c:new ft(1e9,0,0)},{half:0,c:new ft(1e9,0,0)}],this.pmrem=new wr(e),this.skyUniforms={uSky:{value:new ft(.1,.16,.27)},uSun:{value:new ft(0,0,1)},uSunColour:{value:new ft(1,1,1)}};let s=new ce(new En(50,32,16),new Xe({side:sn,uniforms:this.skyUniforms,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir);
          float up = d.z;
          vec3 sky = mix(uSky * 0.9, (uSky + vec3(dot(uSky, vec3(0.34)))) * 1.7, 1.0 - pow(max(up, 0.0), 0.42));   // paler and brighter towards the horizon
          sky += uSunColour * 0.35 * pow(max(dot(d, uSun), 0.0), 24.0);
          vec3 ground = (uSky * 0.6 + uSunColour * max(uSun.z, 0.0) * 0.4) * vec3(0.92, 0.86, 0.76);   // sunlit pale stone and earth, seen from above them
          gl_FragColor = vec4(mix(ground, sky, smoothstep(-0.06, 0.04, up)), 1.0);
        }`}));this.skyScene=new qn,this.skyScene.add(s),this.dome=new ce(new En(1,32,12,0,Math.PI*2,0,Math.PI/2+.06),new Xe({side:sn,uniforms:this.skyUniforms,depthWrite:!0,vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 uSky; uniform vec3 uSun; uniform vec3 uSunColour;
        void main() {
          vec3 d = normalize(vDir.xzy * vec3(1.0, -1.0, 1.0));
          float up = max(d.z, 0.0);
          vec3 sky = mix(uSky * 1.25, (uSky + vec3(dot(uSky, vec3(0.3)))) * 1.5, 1.0 - pow(up, 0.5));
          sky += uSunColour * 0.25 * pow(max(dot(d, uSun), 0.0), 12.0);
          gl_FragColor = vec4(sky, 1.0);
        }`})),this.dome.rotation.x=Math.PI/2,this.dome.frustumCulled=!1,this.dome.renderOrder=-1,this.scene.add(this.dome),this.lastSun=new ft,this.env=null,this.materials=null,this.mirror=t.phone?null:{target:null,camera:new qe,vp:new ve,on:!1},this.mirror&&this.mirror.camera.layers.set(1),this.ray=new ca}get turn(){return Math.PI-this.params.seaBearing*_t}toCity(t,e){let n=-this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toScene(t,e){let n=this.turn,s=Math.cos(n),r=Math.sin(n);return[s*t-r*e,r*t+s*e]}toLonLat(t,e){let n=this.site.lat*_t;return[this.site.lon*_t+t/(ie*Math.cos(n)),n+e/ie]}fromLonLat(t,e){let n=this.site.lat*_t,s=t-this.site.lon*_t;return s=Math.atan2(Math.sin(s),Math.cos(s)),[s*ie*Math.cos(n),(e-n)*ie]}place({lat:t,lon:e,bearing:n=180,stadion:s=this.params.stadion}){let r=!this.city||s!==this.params.stadion;if(this.params={...this.params,stadion:s,seaBearing:n},r){let a=performance.now();if(this.city){this.scene.remove(this.city.group);for(let h of this.city.meshes)h.geometry.dispose()}this.materials||(this.materials=Kl({phone:this.world.phone}),this.loadPictures()),this.city=Ff(this.params,{phone:this.world.phone,materials:this.materials}),this.scene.add(this.city.group);let l=this.materials.waterUniforms,o=this.city.shores;for(let h=0;h<6;h++)l.uShores.value[h]=o[h];l.uCanal.value.z=this.city.plan.canalHalf,this.buildMs=Math.round(performance.now()-a),this.applyLook()}this.city.group.rotation.z=this.turn,this.city.group.updateMatrixWorld(!0);{let[a,l]=this.toScene(0,-1);this.materials.waterUniforms.uCanal.value.x=a,this.materials.waterUniforms.uCanal.value.y=l}this.site={lat:t,lon:e,frame:ri(e*_t,t*_t)},this.active=!0,this.lastSun.set(0,0,0);for(let a of this.cascades)a.half=0;return this.ground(),this.world.stamp++,this.city}loadPictures(){Object.keys(Nh).length&&(this.pending++,Df(this.world.phone?512:1024,Nh).then(t=>{if(t){let e=this.materials.shared,n=[e.tColour.value,e.tDetail.value];e.tColour.value=t.colour,e.tDetail.value=t.detail;for(let s of n)s.dispose();this.pictures={loaded:t.loaded,missing:t.missing}}else this.pictures={loaded:0,missing:"all"}}).catch(t=>{this.pictures={loaded:0,error:String(t)}}).finally(()=>{this.pending--,this.world.stamp++}))}remove(){this.active=!1,this.site=null,this.world.globe.shared.uPad.value.set(0,0,0,0),this.world.stamp++}ground(){let t=this.world.globe,e=t.shared,n=this.site,s=e.uWater.value>.5?e.uSea.value:-1e5,r=Math.max(t.heightAt(n.lon*_t,n.lat*_t)??0,s);n.h=r;let a=n.frame;e.uPad.value.set(a.up[0],a.up[1],a.up[2],this.city.radius-80),e.uPadH.value=r-2;let l=ie+r*e.uExag.value;n.origin=[a.up[0]*l,a.up[1]*l,a.up[2]*l]}floorAt(t,e){if(!this.active||!this.city)return null;let[n,s]=this.fromLonLat(t,e);if(Math.hypot(n,s)>this.city.plan.edge)return null;let[r,a]=this.toCity(n,s),l=this.localFloor(r,a);return l==null?null:this.site.h*this.world.globe.shared.uExag.value+l}localFloor(t,e){let n=this.city.plan.groundZ(t,e);if(n==null)return null;let s=this.city.temple,r=this.city.hall,a=Math.max(Math.abs(t-s.x)-s.L/2,Math.abs(e-s.y)-s.W/2);return a<5.1?s.floor-Math.max(0,Math.ceil(a/1.7))*((s.floor-s.z)/4):r&&t*t+e*e<r.RS*r.RS?r.floor:n}pick(t,e){if(!this.active||!this.city)return null;let n=this.world.renderer.domElement,s=n.clientWidth||1,r=n.clientHeight||1;this.ray.setFromCamera(new ne(t/s*2-1,1-e/r*2),this.camera);let a=this.ray.intersectObjects(this.city.meshes.filter(c=>c.visible&&!c.userData.line),!1);if(!a.length)return null;let l=a[0],o=Ql.get(l.object.userData.id),[h,u]=this.toLonLat(l.point.x,l.point.y);return{id:l.object.userData.id,what:o?.what??l.object.userData.id,ref:o?.ref??null,kind:o?.kind??"choice",lon:h,lat:u}}parts(){return this.city?this.city.parts.map(t=>({...t})):[]}viewOf(t){let e=this.city?.spots[t];if(!e||!this.site)return null;let[n,s]=this.toScene(e[0],e[1]),[r,a]=this.toLonLat(n,s);return{lat:a,lon:r,range:e[2],tilt:e[3]*_t,heading:((e[4]+this.params.seaBearing-180)%360+360)%360*_t}}highlight(t){this.lit=t&&this.city?.meshes.some(e=>e.userData.id===t)?t:null,this.applyLook()}setGhost(t){this.ghost=!!t,this.applyLook()}cutaway(t){this.cut=!!t,this.applyLook()}applyLook(){if(!this.city)return;let t=this.materials;for(let e of this.city.meshes){let n=e.userData;if(n.roof&&(e.visible=!this.cut),n.line)continue;let s=this.ghost&&n.ghostable;if(n.water){e.material=n.solid;continue}e.material=s?t.ghost:this.lit?n.id===this.lit?t.glow:t.dim:t.solid,e.castShadow=!s,n.lodHidden&&(e.visible=!1)}t.seaDim.value=this.lit&&this.lit!=="harbours"&&this.lit!=="canal"?.45:1;for(let e of this.cascades)e.half=0;this.world.stamp++}labSpots(){let t={};for(let[e,n]of Object.entries(this.city.lab))t[e]=this.toScene(n[0],n[1]);return t}forceShadows(){this.cascades[0].half=0,this.cascades[1].half=0}update(){if(!this.active)return null;this.ground();let{control:t,camera:e,sun:n,renderer:s}=this.world,r=this.site.frame,a=this.site.origin,l=t.basis,o=[-l.fwd[0],-l.fwd[1],-l.fwd[2]],h=[t.pos[0]-a[0],t.pos[1]-a[1],t.pos[2]-a[2]],u=dt=>[hn(dt,r.east),hn(dt,r.north),hn(dt,r.up)],c=u(l.right),f=u(l.up),d=u(o),p=u(h),v=this.camera;v.matrix.set(c[0],f[0],d[0],p[0],c[1],f[1],d[1],p[1],c[2],f[2],d[2],p[2],0,0,0,1),v.matrixWorld.copy(v.matrix),v.matrixWorldInverse.copy(v.matrix).invert(),v.projectionMatrix.copy(e.projectionMatrix),v.projectionMatrixInverse.copy(e.projectionMatrixInverse);let g=this.materials,m=this.city.plan;g.shared.uTime.value=this.world.time,this.dome.visible=p[2]<2500&&p[2]>-50,this.dome.visible&&(this.dome.position.set(p[0],p[1],p[2]-40),this.dome.scale.setScalar(38e3),this.dome.updateMatrixWorld());let x=-d[2],_=x<-.02?$t((p[2]-m.B)/-x,5,6e3):6e3,b=[p[0]-d[0]*_,p[1]-d[1]*_],M=_,[C,y]=this.toCity(p[0],p[1]);for(let dt of this.city.sectors){let at=dt.high.length>0&&Math.hypot(C-dt.cx,y-dt.cy,p[2])<640;at!==dt.near&&(dt.near=at,this.cascades[0].half=0,this.cascades[1].half=0),dt.low&&(dt.low.visible=!at,dt.low.userData.lodHidden=at);for(let k of dt.high)k.visible=at,k.userData.lodHidden=!at}let T=u([n.dir.x,n.dir.y,n.dir.z]),U=T[2];if(this.lastSun.distanceToSquared(new ft(T[0],T[1],T[2]))>1e-5){this.lastSun.set(T[0],T[1],T[2]);let dt=Ry(U),at=Cy(U);for(let k of this.suns)k.color.setRGB(dt[0],dt[1],dt[2]);this.skyUniforms.uSky.value.set(at[0],at[1],at[2]),this.skyUniforms.uSun.value.set(T[0],T[1],T[2]),this.skyUniforms.uSunColour.value.set(dt[0],dt[1],dt[2]),this.env?.dispose(),this.env=this.pmrem.fromScene(this.skyScene,0,1,200),this.scene.environment=this.env.texture,g.ghostUniforms.uColour.value.setRGB(at[0]*2.2+dt[0]*.25,at[1]*2.2+dt[1]*.25,at[2]*2.2+dt[2]*.25),g.glowColour.setRGB(dt[0]*.05+at[0]*.12,dt[1]*.05+at[1]*.12,dt[2]*.04+at[2]*.1);for(let k of this.cascades)k.half=0}let V=[T[0],T[1],Math.max(T[2],.03)],K=Math.hypot(V[0],V[1],V[2]);V[0]/=K,V[1]/=K,V[2]/=K;let it=Math.max(V[2],.14),W=(dt=>1.5**Math.ceil(Math.log(dt)/Math.log(1.5)))($t(M*1.1,40,620)),B=[{half:W,c:[b[0]-d[0]*W*.35,b[1]-d[1]*W*.35,m.B]},{half:Math.min(W*5.5,m.edge*1.02),c:[b[0]-d[0]*W*1.2,b[1]-d[1]*W*1.2,m.B]},{half:m.edge*1.02,c:[0,0,m.B]}],j=0;for(let dt=0;dt<3;dt++){let at=this.cascades[dt],k=B[dt],E=this.suns[dt];if(!(at.half!==k.half||Math.hypot(at.c.x-k.c[0],at.c.y-k.c[1])>k.half*.22)||j>0&&dt<2&&at.half>0)continue;at.half=k.half,at.c.set(k.c[0],k.c[1],k.c[2]);let G=k.half*1.6+80/it+200,rt=k.half*1.5+80/it,X=2*k.half/E.shadow.mapSize.x;E.position.set(k.c[0]+V[0]*G,k.c[1]+V[1]*G,k.c[2]+V[2]*G),E.target.position.set(k.c[0],k.c[1],k.c[2]),E.target.updateMatrixWorld(),E.updateMatrixWorld();let ot=E.shadow.camera;ot.left=-k.half,ot.right=k.half,ot.top=k.half,ot.bottom=-k.half,ot.near=G-rt,ot.far=G+rt,ot.updateProjectionMatrix(),E.shadow.bias=-(.02+X*1.1)/(2*rt),E.shadow.normalBias=X*1.5+.02,E.shadow.needsUpdate=!0,dt<2&&j++}let lt=this.mirror,et=g.waterUniforms;if(!!lt&&p[2]<1400&&p[2]>.3&&!this.ghost){let dt=s.getDrawingBufferSize(new ne),at=Math.max(2,dt.x>>1),k=Math.max(2,dt.y>>1);(!lt.target||lt.target.width!==at||lt.target.height!==k)&&(lt.target?.dispose(),lt.target=new He(at,k,{type:Je,format:Ze,minFilter:Ae,magFilter:Ae,depthBuffer:!0}));let E=lt.camera,O=new ft(p[0],p[1],-p[2]);E.fov=$t(t.fovY/_t*1.25,10,120),E.aspect=e.aspect,E.near=1,E.far=16e3,E.updateProjectionMatrix(),E.position.copy(O),E.up.set(f[0],f[1],-f[2]),E.lookAt(O.x-d[0],O.y-d[1],O.z+d[2]),E.updateMatrixWorld(),E.matrixWorldInverse.copy(E.matrixWorld).invert(),lt.vp.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse);let G=new kn(new ft(0,0,1),-.05).applyMatrix4(E.matrixWorldInverse),rt=new ge(G.normal.x,G.normal.y,G.normal.z,G.constant),X=E.projectionMatrix,ot=new ge;ot.x=(Math.sign(rt.x)+X.elements[8])/X.elements[0],ot.y=(Math.sign(rt.y)+X.elements[9])/X.elements[5],ot.z=-1,ot.w=(1+X.elements[10])/X.elements[14],rt.multiplyScalar(2/rt.dot(ot)),X.elements[2]=rt.x,X.elements[6]=rt.y,X.elements[10]=rt.z+1,X.elements[14]=rt.w;let vt=s.shadowMap,mt=vt.autoUpdate,F=s.getRenderTarget();vt.autoUpdate=!1,vt.needsUpdate=!1,s.setRenderTarget(lt.target),s.setClearColor(0,0),s.clear(!0,!0,!1),s.render(this.scene,E),s.setRenderTarget(F),s.setClearColor(0,1),vt.autoUpdate=mt,et.tMirror.value=lt.target.texture,et.uMirrorVP.value.copy(lt.vp),et.uMirror.value=1}else et.uMirror.value=0;return{scene:this.scene,camera:v}}view(){return{lat:this.site.lat*_t,lon:this.site.lon*_t,range:this.city.coreRadius*3.4,tilt:58*_t,heading:(this.params.seaBearing+150)%360*_t}}};var Uh={claimed:{ink:"#ffab5c",name:"Claimed"},checked:{ink:"#7fc0ff",name:"Checked"},found:{ink:"#7fe3a0",name:"Found"},context:{ink:"#e9edf5",name:"Place"},plato:{ink:"#f2cc6b",name:"Plato's measure"}},Uf={claimed:["claimed","context","plato"],found:["checked","found","context","plato"],all:["claimed","checked","found","context","plato"]},kf=8,Py=new Set(["core","sample","dive","dig","place"]),Of={context:0,plato:1,checked:2,found:3,claimed:4},Iy=[[/basalt|lava|gabbro|dolerite|volcanic rock|bedrock|basement/i,"#4a4d55"],[/ash|tephra|pumice|ignimbrite/i,"#b9b4ad"],[/salt|evaporite|gypsum|halite/i,"#eef0f2"],[/limestone|carbonate|beachrock|chalk|coral|reef|ooze|marl/i,"#d9cfb4"],[/peat|organic|lignite|soil/i,"#4b3a2a"],[/shell|coquina/i,"#e6dcc8"],[/gravel|pebble|cobble|conglomerate|breccia/i,"#8d8478"],[/sand/i,"#d7bf86"],[/silt/i,"#a89a80"],[/clay|mud|turbidite/i,"#7d7468"]],kh=i=>(Iy.find(([t])=>t.test(i??""))??[0,"#9a9488"])[1],zf=i=>i.type==="Polygon"?i.coordinates:i.type==="MultiPolygon"?i.coordinates.flat():[],Hf=i=>i.type==="LineString"?[i.coordinates]:i.type==="MultiLineString"?i.coordinates:[],Gf=i=>i.type==="Point"?[i.coordinates]:i.type==="MultiPoint"?i.coordinates:[],Vf=i=>[...Gf(i),...Hf(i).flat(),...zf(i).flat()],Mi=i=>{let t=i.geometry;if(t.type==="Point")return t.coordinates;if(t.type==="LineString")return t.coordinates[Math.floor(t.coordinates.length/2)];let e=Vf(t);return[e.reduce((n,s)=>n+s[0],0)/e.length,e.reduce((n,s)=>n+s[1],0)/e.length]},Bf=i=>{let t=Vf(i.geometry),e=Mi(i),n=0;for(let s of t)n=Math.max(n,Math.hypot((s[0]-e[0])*Math.cos(e[1]*_t),s[1]-e[1])*_t*ie);return n*2},Ly=i=>i.position?.how==="from-description"||(i.position?.error_m??0)>=500,ec=class{constructor(t){this.world=t,this.scene=new qn,this.camera=new qe,this.camera.matrixAutoUpdate=!1,this.entry=null,this.extras=[],this.mode="all",this.focus=null,this.selected=null,this.labels=[],this.markers=new Map,this.on=0,this.origin=null;let e=t.globe.shared;this.size=t.phone?1024:2048,this.near=this.sheet(),this.far=this.sheet(),e.tDecal.value=this.near.tex,e.tDecalFar.value=this.far.tex,this.painted=null,this.dirty=!0,this.tick=0,this.geo=this.shapes(),this.mats=new Map}sheet(){let t=document.createElement("canvas");t.width=t.height=this.size;let e=new fi(t);return e.colorSpace=zn,e.premultiplyAlpha=!0,e.generateMipmaps=!0,e.minFilter=rn,e.anisotropy=8,{canvas:t,g:t.getContext("2d"),tex:e}}shapes(){let t=(e,n=0)=>(e.rotateX(Math.PI/2),e.translate(0,0,n),e);return{stem:t(new pi(.007,.007,1,6),.5),core:t(new pi(.05,.05,1,20,1,!1),.5),cap:t(new pi(.066,.066,.03,20),1),sample:new sa(.085).translate(0,0,1.06),dive:new En(.075,18,12).translate(0,0,1.06),dig:new Ji(.13,.13,.13).rotateZ(Math.PI/4).translate(0,0,1.06),place:new En(.045,14,10).translate(0,0,.62)}}ink(t,e=1.7){let n=`${t}:${e}`;return this.mats.has(n)||this.mats.set(n,new Be({color:new se(Uh[t].ink).multiplyScalar(e)})),this.mats.get(n)}column(t){let e=document.createElement("canvas");e.width=8,e.height=256;let n=e.getContext("2d"),s=(t.column??[]).filter(a=>Number.isFinite(a.from_m)&&Number.isFinite(a.to_m)&&a.to_m>a.from_m);if(s.length){let a=Math.min(...s.map(o=>o.from_m)),l=Math.max(...s.map(o=>o.to_m));n.fillStyle="#9a9488",n.fillRect(0,0,8,256);for(let o of s)n.fillStyle=kh(o.what),n.fillRect(0,(o.from_m-a)/(l-a)*256,8,Math.max(2,(o.to_m-o.from_m)/(l-a)*256));n.fillStyle="rgba(0,0,0,0.35)";for(let o of s)n.fillRect(0,(o.to_m-a)/(l-a)*256-1,8,1.5)}else{n.fillStyle=Uh[t.side].ink,n.fillRect(0,0,8,256),n.fillStyle="rgba(0,0,0,0.28)";for(let a=32;a<256;a+=32)n.fillRect(0,a,8,2)}let r=new fi(e);return r.colorSpace=Le,new Be({map:r,color:new se(1.25,1.25,1.25)})}marker(t){let e=new ke;if(t.kind==="core")e.add(new ce(this.geo.core,this.column(t)),new ce(this.geo.cap,this.ink(t.side)));else{let n=new ce(this.geo.stem,this.ink("context",1.1));t.kind==="place"&&(n.scale.z=.6),e.add(n,new ce(this.geo[t.kind]??this.geo.dive,this.ink(t.side)))}return e.userData.feature=t,e}show(t){this.entry=t??null,this.focus=null,this.selected=null,this.rebuild()}setExtras(t){this.extras=t??[],this.rebuild()}setMode(t){Uf[t]&&t!==this.mode&&(this.mode=t,this.rebuild())}setFocus(t){this.focus=t?.length?new Set(t):null,this.restyle()}select(t){this.selected=t??null,this.restyle()}get active(){return!!(this.entry||this.extras.length)}visible(){let t=new Set(Uf[this.mode]);return[...this.entry?.features??[],...this.extras].filter(e=>t.has(e.side)&&e.geometry).sort((e,n)=>Of[e.side]-Of[n.side])}lit(t){return!this.focus||this.focus.has(t.id)||t.id===this.selected}rebuild(){for(let e of this.markers.values()){this.scene.remove(e);for(let n of e.children)n.material.map&&(n.material.map.dispose(),n.material.dispose())}this.markers.clear();let t=this.entry?.centre??(this.extras[0]&&{lon:Mi(this.extras[0])[0],lat:Mi(this.extras[0])[1]});this.origin=t?{lon:t.lon*_t,lat:t.lat*_t,frame:ri(t.lon*_t,t.lat*_t)}:null,this.labels=[];for(let e of this.visible()){let[n,s]=Mi(e),r={id:e.id,text:e.label,year:e.year??null,side:e.side,kind:e.kind,lon:n,lat:s,lift:0,lit:!0,feature:e};if(Py.has(e.kind)&&e.geometry.type==="Point"){let a=this.marker(e);a.userData.label=r,this.markers.set(e.id,a),this.scene.add(a)}e.label&&this.labels.push(r)}this.restyle()}restyle(){for(let t of this.labels)t.lit=this.lit(t.feature);for(let t of this.markers.values())t.userData.dim=!this.lit(t.userData.feature);this.dirty=!0,this.heights=0,this.world.stamp++}paint(t,e,n,s){let r=t.g,a=this.size,l=a/(2*n),o=ri(e.lon,e.lat),h=[0,0,0];r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,a,a),r.lineJoin=r.lineCap="round";let u=([d,p])=>(yn(d*_t,p*_t,h),hn(h,o.up)<.05?null:[a/2+hn(h,o.east)*ie*l,a/2-hn(h,o.north)*ie*l]),c=(d,p)=>{let v=0,g=!1;r.beginPath();for(let m of d){let x=u(m);x&&(v++?r.lineTo(x[0],x[1]):r.moveTo(x[0],x[1]),x[0]>-200&&x[1]>-200&&x[0]<a+200&&x[1]<a+200&&(g=!0))}return p&&r.closePath(),g&&v>1},f=(d,p,v,g)=>{let m=Math.max(1.5,p*s);r.setLineDash([]),r.globalAlpha=.55*v,r.strokeStyle="#04070c",r.lineWidth=m+Math.max(2,2.4*s),r.stroke(),r.setLineDash(g?g.map(x=>Math.max(2,x*s)):[]),r.globalAlpha=v,r.strokeStyle=d,r.lineWidth=m,r.stroke(),r.setLineDash([])};for(let d of this.visible()){let p=d.side==="context"&&d.id!==this.selected?.55:1,v=Uh[d.side].ink,g=this.lit(d),m=(g?1:.28)*p,x=d.id===this.selected,_=d.geometry,b=d.dash??(Ly(d)?[7,6]:d.kind==="track"?[12,5]:null),M=(d.width??(d.kind==="structure"?3.2:d.kind==="survey-area"?1.8:d.kind==="outline"?1.9:2.2))*(x?1.5:1);for(let C of zf(_))c(C,!0)&&(d.fill!==!1&&(r.globalAlpha=(d.kind==="survey-area"?.13:d.kind==="dig"?.34:.1)*m*p*(x?1.6:1),r.fillStyle=v,r.fill()),f(v,M,m,b));for(let C of Hf(_))c(C,!1)&&f(v,M,m,b);for(let C of Gf(_)){let y=u(C);if(!y||y[0]<-50||y[1]<-50||y[0]>a+50||y[1]>a+50)continue;let T=(d.position?.error_m??0)*l;T>6*s&&(r.beginPath(),r.arc(y[0],y[1],T,0,Math.PI*2),r.globalAlpha=.07*m*p,r.fillStyle=v,r.fill(),f(v,1.1,.6*m,[5,5])),r.beginPath(),r.arc(y[0],y[1],Math.max(2.5,(x?5.5:3.6)*s),0,Math.PI*2),r.globalAlpha=m,r.fillStyle=v,r.fill(),r.globalAlpha=.7*m,r.strokeStyle="#04070c",r.lineWidth=Math.max(1,1.4*s),r.stroke(),x&&(r.beginPath(),r.arc(y[0],y[1],13*s,0,Math.PI*2),f("#ffffff",1.6,.9,null))}}r.globalAlpha=1,t.tex.needsUpdate=!0}update(){let{world:t}=this,e=t.globe.shared,n=t.control,s=this.active?1:0;if(this.on!==s&&(this.on=$t(this.on+(s?.08:-.12),0,1),t.stamp++),e.uDecalOn.value=this.on,!this.active||!this.origin)return null;let r=performance.now(),a=Math.max(n.range*.7,30),l=this.painted,o=l?Math.hypot((n.lon-l.lon)*Math.cos(l.lat),n.lat-l.lat)*ie:1/0;if((this.dirty||!l||o>l.half*.3||a>l.half*1.5||a<l.half*.62)&&(this.dirty||r-(l?.at??0)>160)){let U={lon:n.lon,lat:n.lat},S=2*Math.tan(n.fovY/2)*n.range/Math.max(t.renderer.domElement.clientHeight,1);this.paint(this.near,U,a,S/(2*a/this.size)),this.paint(this.far,U,a*kf,S/(2*a*kf/this.size)),this.painted={...U,half:a,at:r,frame:ri(U.lon,U.lat)},this.dirty=!1,t.stamp++}let h=this.painted,u=h.frame.up,c=n.pos;if(e.uDecalO.value.set(u[0]*ie-c[0],u[1]*ie-c[1],u[2]*ie-c[2]),e.uDecalU.value.set(...h.frame.east).multiplyScalar(1/(2*h.half)),e.uDecalV.value.set(...h.frame.north).multiplyScalar(1/(2*h.half)),!this.markers.size)return null;let f=this.origin.frame,d=[f.up[0]*ie,f.up[1]*ie,f.up[2]*ie],p=U=>[hn(U,f.east),hn(U,f.north),hn(U,f.up)],v=n.basis,g=p(v.right),m=p(v.up),x=p([-v.fwd[0],-v.fwd[1],-v.fwd[2]]),_=p([c[0]-d[0],c[1]-d[1],c[2]-d[2]]),b=this.camera;b.matrix.set(g[0],m[0],x[0],_[0],g[1],m[1],x[1],_[1],g[2],m[2],x[2],_[2],0,0,0,1),b.matrixWorld.copy(b.matrix),b.matrixWorldInverse.copy(b.matrix).invert(),b.projectionMatrix.copy(t.camera.projectionMatrix),b.projectionMatrixInverse.copy(t.camera.projectionMatrixInverse);let M=this.tick++%20===0||this.heights<3;M&&this.heights++;let C=e.uExag.value,y=e.uWater.value>.5?e.uSea.value:-1e5,T=[0,0,0];for(let U of this.markers.values()){let S=U.userData.label;if(M||U.userData.h==null){let it=Math.max(t.globe.heightAt(S.lon*_t,S.lat*_t)??0,y)*C;yn(S.lon*_t,S.lat*_t,T);let D=[T[0]*(ie+it)-d[0],T[1]*(ie+it)-d[1],T[2]*(ie+it)-d[2]];U.position.set(...p(D)),U.quaternion.setFromUnitVectors(new ft(0,0,1),new ft(...p(T))),U.userData.h=it}let V=Math.hypot(U.position.x-_[0],U.position.y-_[1],U.position.z-_[2]),K=V*.05*Math.min(1,n.range*1.25/V)**.6*(U.userData.feature.id===this.selected?1.3:1)*(U.userData.dim?.62:1);U.scale.setScalar(K),S.lift=K*(U.userData.feature.kind==="place"?.72:1.16),U.updateMatrixWorld(!0)}return{scene:this.scene,camera:b}}viewOf(t){if(!t){let s=this.entry;if(!s)return null;let r=s.features.map(l=>{let o=Mi(l);return Math.hypot((o[0]-s.centre.lon)*Math.cos(s.centre.lat*_t),o[1]-s.centre.lat)*_t*ie+Bf(l)/2}).sort((l,o)=>l-o),a=r.length?r[Math.min(r.length-1,Math.floor(r.length*.8))]:(s.radius_km??20)*1e3;return{lon:s.centre.lon*_t,lat:s.centre.lat*_t,range:$t(Math.max(a,2500)*2.9,6e3,6e6),tilt:46*_t,heading:0}}let[e,n]=Mi(t);return{lon:e*_t,lat:n*_t,range:$t(Math.max(Bf(t)*2.2,(t.position?.error_m??0)*6,900),400,6e6),tilt:50*_t,heading:this.world.control.heading}}};var Rr={terrarium:{id:"terrarium",kind:"elevation",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:15,credit:"Terrain Tiles (Mapzen, AWS Open Data)"},s2:{id:"s2",kind:"image",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless 2016 by EOX (contains modified Copernicus Sentinel data 2016)"},bluemarble:{id:"bluemarble",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA Blue Marble Next Generation"},night:{id:"night",kind:"image",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA Black Marble"}},Wf=(i,t={})=>{let e=t.phone??(Math.min(screen.width,screen.height)<600||matchMedia("(pointer: coarse)").matches),n=new Il({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});n.outputColorSpace=_s,n.autoClear=!1;let s=new qn,r=new qe(36,1,1,1e8),a=new Ol({renderer:n,scene:s,segments:32,threshold:e?400:290,budget:e?170:400,layers:{elevation:Rr.terrarium,base:Rr.s2,globe:Rr.bluemarble,overlay:null,night:Rr.night}}),l=new Bl(r,i,a),o=new Hl(n,{samples:0,steps:e?14:28}),h={renderer:n,scene:s,camera:r,globe:a,control:l,pipeline:o,phone:e,sun:{azimuth:295,altitude:48,follow:!0,dir:new ft(1,0,0)},exposure:1.1,air:1,pixelCap:2,pixelBudget:e?14e5:26e5,scale:1,time:0,fps:60,onFrame:null,paused:!1,adaptive:!0,rest:!0,locals:[],stamp:0},u=()=>{let x=i.clientWidth||1,_=i.clientHeight||1,b=Math.min(devicePixelRatio||1,h.pixelCap),M=Math.min(b,Math.sqrt(h.pixelBudget/(x*_)))*h.scale,C=Math.max(2,Math.round(x*M)),y=Math.max(2,Math.round(_*M));return(i.width!==C||i.height!==y)&&(n.setSize(C,y,!1),r.aspect=x/_,r.updateProjectionMatrix()),o.setSize(C,y),[C,y]},c=()=>{let x=ri(l.lon,l.lat),_=h.sun.azimuth*_t,b=h.sun.altitude*_t,M=Zn(Rn(x.up,Math.sin(b)),Zn(Rn(x.north,Math.cos(_)),x.east,Math.sin(_)),Math.cos(b));h.sun.follow&&h.sun.dir.set(M[0],M[1],M[2]).normalize()};h.city=new tc(h),h.locals.push(h.city),h.evidence=new ec(h),h.locals.push(h.evidence),l.floor=(x,_)=>h.city.floorAt?.(x,_)??null;let f=performance.now(),d=0,p=0,v="",g=0,m=x=>{if(requestAnimationFrame(m),h.paused){f=x;return}let _=$t((x-f)/1e3,.001,.1);f=x,h.time+=_,h.fps+=(1/_-h.fps)*.05;let b=a.loader.busy>0;_>1/38?b||(d++,p=0):_<1/55&&(p++,d=Math.max(0,d-1)),h.adaptive||(d=p=0),d>40&&h.scale>.55&&(h.scale=Math.max(.55,h.scale-.1),d=0),p>300&&h.scale<1&&(h.scale=Math.min(1,h.scale+.1),p=0);let[M,C]=u();h.beforeFrame?.(_),l.update(_),c();let y=`${h.stamp},${h.city.active},${h.sun.azimuth},${h.sun.altitude},${l.pos[0].toFixed(1)},${l.pos[1].toFixed(1)},${l.pos[2].toFixed(1)},${l.heading.toFixed(4)},${l.tilt.toFixed(4)},${l.shift[0].toFixed(3)},${l.shift[1].toFixed(3)},${M},${C}`,T=y!==v||a.loader.busy>0||l.pointers.size>0||h.snap;v=y,T?g=0:g++;let U=g>(h.restSoon?150:600)?h.restSoon?30:12:g>30?3:1;if(h.rest&&g%U){h.onFrame?.(_);return}let S=a.shared;S.uCamPos.value.set(l.pos[0],l.pos[1],l.pos[2]),S.uSun.value.copy(h.sun.dir),S.uTime.value=h.time,S.uPixAngle.value=2*Math.tan(l.fovY/2)/C,a.update(l.view(C));let V=1-$t((Math.sin(h.sun.altitude*_t)-.17)/.6,0,1);if(o.final.uniforms.uExposure.value=h.exposure*(1+.85*V),o.atmo.uniforms.uAir.value+=((S.uLens.value===0?1:.4)*h.air-o.atmo.uniforms.uAir.value)*Math.min(1,_*6),o.render(s,r,{pos:l.pos,basis:l.basis,tanY:Math.tan(l.fovY/2),aspect:r.aspect,near:r.near,far:r.far,sun:h.sun.dir,shift:l.shift},h.locals.map(K=>K.update()).filter(Boolean)),h.onFrame?.(_),h.snap){let K=h.snap;h.snap=null,i.toBlob(it=>K(it),"image/jpeg",.9)}};return requestAnimationFrame(m),h};var Oh=[["sunken-land","Sunken lands"],["lost-city","Lost cities"],["remote-sensing-find","Found from above"],["treasure","Treasure"],["shipwreck","Shipwrecks"],["tomb","Tombs"],["relic","Relics"]],yS=Object.fromEntries(Oh),Bh={"sunken-land":"Sunken land","lost-city":"Lost city","remote-sensing-find":"Found from above",treasure:"Treasure",shipwreck:"Shipwreck",tomb:"Tomb",relic:"Relic"},Xf={legend:"Legend",unlocated:"Not found yet",disputed:"Disputed",found:"Found",hoax:"Hoax"},Fs={confirmed:"Confirmed",mainstream:"Leading view",plausible:"Plausible",fringe:"Fringe",rejected:"Rejected",hoax:"Hoax"},nc={found:"Found here",candidate:"Proposed","search-area":"Search area",claimed:"Claimed find",inspiration:"Possible inspiration",origin:"Where it began"},$f={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},qf={found:0,candidate:1,"search-area":2,inspiration:3,claimed:4,origin:5},Ns=i=>(i??"").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),Yf=async(i="./")=>{let t=globalThis.__DATA__,e=(d,p)=>t?.[d]?Promise.resolve(t[d]):fetch(i+d).then(v=>v.ok?v.json():p).catch(()=>p),[n,s,r,a,l,o,h,u,c]=await Promise.all([e("legends.json",{legends:[]}),e("sources.json",{sources:[]}),e("reconstruction.json",null),e("case.json",null),e("evidence.json",null),e("worldfit.json",null),e("audio/index.json",null),e("open.json",null),e("story-media.json",null)]),f=(n.legends??[]).filter(d=>d&&d.id&&d.name&&Array.isArray(d.places));for(let d of f){d.places=d.places.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)),d.main=[...d.places].sort((p,v)=>($f[p.standing]??9)-($f[v.standing]??9)||(qf[p.role]??9)-(qf[v.role]??9))[0]??null,d.key=Ns([d.name,...d.aka??[]].join(" ")),d.tagKey=Ns((d.tags??[]).join(" "));for(let p of d.places)p.key=Ns(p.name)}return{legends:f.filter(d=>d.main),sources:s.sources??[],reconstruction:r,cas:a,evidence:l?.sites??[],worldfit:o,audio:h,open:u,storyMedia:c?.media??[],checked:n.checked??null}},Zf=i=>{let e=[...i.trim().toUpperCase().replace(/[′’]/g,"'").replace(/[″”]/g,'"').matchAll(/(-?\d+(?:\.\d+)?)\s*°?\s*(?:(\d+(?:\.\d+)?)\s*')?\s*(?:(\d+(?:\.\d+)?)\s*")?\s*([NSEW])?/g)].filter(o=>o[0].trim());if(e.length!==2)return null;let n=o=>(Math.abs(Number(o[1]))+Number(o[2]??0)/60+Number(o[3]??0)/3600)*(Number(o[1])<0||o[4]==="S"||o[4]==="W"?-1:1),[s,r]=e;/[EW]/.test(s[4]??"")&&/[NS]/.test(r[4]??"")&&([s,r]=[r,s]);let a=n(s),l=n(r);return!Number.isFinite(a)||!Number.isFinite(l)||Math.abs(a)>90||Math.abs(l)>180?null:{lat:a,lon:l}},jf=(i,t,e=8)=>{let n=Ns(t);if(!n)return[];let s=[];for(let r of i){let a=0;r.key.startsWith(n)?a=100:r.key.split(" ").some(l=>l.startsWith(n))?a=80:r.key.includes(n)?a=60:r.tagKey.split(" ").includes(n)&&(a=30),a&&s.push({score:a,legend:r});for(let l of r.places){let o=l.key.startsWith(n)?55:l.key.split(" ").some(h=>h.startsWith(n))?45:l.key.includes(n)&&n.length>2?25:0;o&&o>a-30&&s.push({score:o,legend:r,place:l})}}return s.sort((r,a)=>a.score-r.score||r.legend.name.localeCompare(a.legend.name)).slice(0,e)},zh=(i,t)=>{let e=t?{...i.access,...t}:i.access;if(!i.browser?.ok||!e?.url||!["xyz","wmts","wms","arcgis-image","arcgis-map"].includes(i.access.type)||e.crs&&e.crs!=="EPSG:3857"||i.kind==="elevation-tiles")return null;let n=e.url.includes("{z}");if(!n&&!e.url.includes("{bbox}"))return null;let s=i.resolution_m&&i.resolution_m<=30?Math.min(11,Math.max(0,Math.round(15-Math.log2(i.resolution_m))-5)):0;return{id:`src-${i.id}${t?`-${t.id}`:""}`,kind:"image",url:e.url,size:n?256:512,every:n?1:2,minZoom:Math.max(i.access.min_zoom??0,s,n?0:3),maxZoom:i.access.max_zoom??15,maxActive:n?8:4,bbox:i.coverage?.bbox??null,asIs:i.kind==="hillshade"||i.kind==="colour-relief"||i.kind==="anomaly-map"||i.kind==="coverage-map",credit:i.license?.attribution??i.name}};var hs=parent!==window,Dy=0,Hh=new Map;addEventListener("message",i=>{i.source!==parent||i.data?.abstracts!=="result"||(Hh.get(i.data.id)?.(i.data),Hh.delete(i.data.id))});var Si=(i,t={})=>new Promise((e,n)=>{if(!hs)return n(Object.assign(new Error("standalone"),{code:"unsupported"}));let s=`c${++Dy}`;Hh.set(s,r=>r.ok?e(r.value):n(Object.assign(new Error(r.error?.message??"failed"),{code:r.error?.code??"failed"}))),parent.postMessage({abstracts:"call",id:s,method:i,params:t},"*")}),Jf=async()=>{if(!hs)return null;for(let i=0;i<3;i++){let t=await Promise.race([Si("hello"),new Promise(e=>setTimeout(e,500,null))]).catch(()=>null);if(t)return t}return null},Kf=i=>{if(globalThis.__LAYOUT__)return i(globalThis.__LAYOUT__);if(!hs)return i("viewport");let t="content";i(t),addEventListener("message",e=>{if(e.source!==parent)return;let n=e.data?.abstractsLayout;n!=="content"&&n!=="viewport"||(n==="viewport"&&parent.postMessage({abstractsLayout:"viewport"},"*"),n!==t&&(t=n,i(t)))}),parent.postMessage({abstractsLayout:"request"},"*")},Qf=i=>{hs&&i>0&&Number.isFinite(i)&&parent.postMessage({abstractsHeight:Math.ceil(i)},"*")};var Re=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Pa=i=>i.replace(/\s*\(.*?\)/g,"").replace(/,.*$/,"").trim(),Pn={confirmed:{label:"Tested, and the result stands",short:"Result stands",tone:"good",d:"M4.2 7.4l2 2 3.8-4.6"},refuted:{label:"The claim was shown wrong",short:"Shown wrong",tone:"bad",d:"M4.5 4.5l5 5M9.5 4.5l-5 5"},corrected:{label:"The claim was corrected",short:"Corrected",tone:"warn",d:"M4 8.4c1-2.6 2-2.6 3 0s2 2.6 3 0"},unresolved:{label:"Still open",short:"Still open",tone:"info",d:"M5.2 5.6a1.9 1.9 0 1 1 2.6 1.7c-.6.3-.8.6-.8 1.2M7 10.4v.1"},"never-tested":{label:"Never tested",short:"Never tested",tone:"mut",d:""},"no-claim":{label:"Made no claim about Atlantis",short:"No claim",tone:"mut",d:"M4.5 7h5"}},Ia=i=>{let t=Pn[i]??Pn["never-tested"];return`<svg class="g g-${t.tone}${t.d?"":" hollow"}" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6"/>${t.d?`<path d="${t.d}"/>`:""}</svg>`},Us=i=>i==="fit"?'<svg class="m m-fit" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/></svg>':i==="brk"?'<svg class="m m-brk" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>':'<svg class="m m-both" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/></svg>',tp=(i,t)=>{let e=i.places,n=new Map;for(let r of e)for(let a of[...r.fits??[],...r.conflicts??[]])n.set(a,(n.get(a)??0)+1);let s=t.claims.filter(r=>r.testable);return{places:e.length,found:e.filter(r=>r.standing==="confirmed"||r.standing==="mainstream").length,checked:e.filter(r=>(r.tests??[]).length).length,checkable:s.length,unmeasured:s.filter(r=>!n.has(r.id)),used:n,searches:t.searches.length,open:t.searches.filter(r=>r.status==="unresolved").length,first:t.searches[0]?.year,last:t.searches.at(-1)?.year}},Ny=i=>[[i.places,"places proposed"],[i.found,"where Plato's city has been found"],[i.places-i.checked,"never checked on the ground"],[`${i.unmeasured.length} of ${i.checkable}`,"of Plato's checkable details never measured anywhere"]].map(([t,e])=>`<div class="tile"><b>${t}</b><span>${Re(e)}</span></div>`).join(""),Fy=(i,t)=>`<ol class="tl">${i.searches.map(e=>`<li><button class="tl-b${e.id===t?" on":""}" data-search="${Re(e.id)}" aria-label="${e.year}: ${Re(e.title)}. ${Re(Pn[e.status]?.label??"")}">${Ia(e.status)}<span>${e.year}</span></button></li>`).join("")}</ol>`,Uy=i=>`<div class="key">${Object.entries(Pn).map(([t,e])=>`<span>${Ia(t)}<b>${i.searches.filter(n=>n.status===t).length}</b> ${Re(e.short.toLowerCase())}</span>`).join("")}</div>`,ep=(i,t)=>`
  <div class="pop-h">${Ia(i.status)}<b>${i.year} \xB7 ${Re(i.title)}</b></div>
  <div class="pop-s">${Re(Pn[i.status]?.label??"")}${i.who?` \xB7 ${Re(i.who)}`:""}</div>
  ${i.announced?`<p><em>Said:</em> ${Re(i.announced)}</p>`:""}
  <p><em>How it ended:</em> ${Re(i.outcome)}</p>
  <div class="row">${i.place?`<button class="btn primary" data-go="${Re(i.place)}">Go to ${Re(t??"the place")}</button>`:""}${/^https?:/.test(i.source??"")?`<a class="btn" href="${Re(i.source)}" target="_blank" rel="noopener">Source</a>`:""}</div>`,np=(i,t,e,n)=>{let s=Object.fromEntries(t.claims.map(c=>[c.id,c])),r=[...e.used.keys()].filter(c=>s[c]).sort((c,f)=>e.used.get(f)-e.used.get(c)),a=e.unmeasured.map(c=>c.id),l=[...i.places].sort((c,f)=>(f.tests??[]).length-(c.tests??[]).length||(f.fits??[]).length+(f.conflicts??[]).length-((c.fits??[]).length+(c.conflicts??[]).length)||c.name.localeCompare(f.name)),o=(c,f)=>`<th class="col${f?" dim":""}"><button data-claim="${Re(c)}"><span>${Re(s[c].short)}</span></button></th>`,h=(c,f)=>{let d=(c.fits??[]).includes(f),p=(c.conflicts??[]).includes(f);if(!d&&!p)return'<td class="c"></td>';let v=d&&p?"both":d?"fit":"brk";return`<td class="c"><button data-cell="${Re(c.id)}|${Re(f)}|${v}" aria-label="${Re(c.name)}: ${v==="fit"?"said to fit":v==="brk"?"breaks":"argued both ways"} ${Re(s[f].short)}">${Us(v)}</button></td>`},u=l.map(c=>{let f=(c.tests??[]).length;return`<tr><th scope="row"><button data-go="${Re(c.id)}">${Re(Pa(c.name))}${n.has(c.id)?'<i class="has-scene"></i>':""}</button></th>${r.map(d=>h(c,d)).join("")}${a.map(()=>'<td class="c dim"></td>').join("")}<td class="n">${f?`<b>${f}</b>`:"<span>0</span>"}</td><td class="v"><i class="sdot p-${Re(c.standing)}"></i>${Re(Fs[c.standing]??c.standing)}</td></tr>`}).join("");return`
    <div class="tiles">${Ny(e)}</div>
    <h3>${e.searches} searches, ${e.first} to ${e.last}</h3>
    
    <div class="tl-wrap">${Fy(t)}</div>
    ${Uy(t)}
    <h3>Each place against what Plato wrote</h3>
    
    <div class="grid-wrap"><table class="grid">
      <thead><tr><th></th>${r.map(c=>o(c,!1)).join("")}${a.map(c=>o(c,!0)).join("")}<th class="flat">Field<br>checks</th><th class="flat l">Standing</th></tr></thead>
      <tbody>${u}</tbody>
    </table></div>
    <div class="key"><span>${Us("fit")}said to fit</span><span>${Us("brk")}breaks</span><span>${Us("both")}argued both ways</span><span><i class="has-scene"></i>has a scene to explore</span><span class="dimkey">shaded columns: never measured anywhere</span></div>
    `},ip=(i,t)=>`
  <div class="pop-h"><b>${Re(i.short)}</b></div>
  <div class="pop-s">${Re(i.ref)}${i.testable?"":" \xB7 not something the ground can test"}</div>
  <p>${Re(i.label)}</p>
  ${i.quote?`<p class="quote">\u201C${Re(i.quote)}\u201D</p>`:""}
  ${i.testable&&i.how_to_test?`<p><em>How to check it:</em> ${Re(i.how_to_test)}</p>`:""}
  <p class="pop-s">${t?`Held against ${t} place${t===1?"":"s"}.`:"Not held against any place yet."}</p>`;var ky="https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",ic=new Map,sc=null,Oy=(i,t,e)=>{let n=`${i}/${t}/${e}`;return ic.has(n)||ic.set(n,(async()=>{let s=await fetch(ky.replace("{z}",i).replace("{x}",t).replace("{y}",e),{signal:AbortSignal.timeout(25e3)});if(!s.ok)throw new Error(`elevation tile ${n}: HTTP ${s.status}`);let r=await createImageBitmap(await s.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"});sc??=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:256,height:256}):new OffscreenCanvas(256,256)).getContext("2d",{willReadFrequently:!0}),sc.clearRect(0,0,256,256),sc.drawImage(r,0,0),r.close?.();let a=sc.getImageData(0,0,256,256).data,l=new Float32Array(65536);for(let o=0;o<65536;o++)l[o]=a[o*4]*256+a[o*4+1]+a[o*4+2]/256-32768;return l})().catch(s=>{throw ic.delete(n),s})),ic.get(n)},rc=async(i,t)=>{t=$t(Math.round(t),0,10);let e=2**t,n=new Map,s=i.map(([a,l])=>{let o=as(a*_t,t),h=$t(os(l*_t,t),0,e-1e-6),u=(Math.floor(o)%e+e)%e,c=Math.floor(h);return n.set(`${u}/${c}`,[u,c]),[`${u}/${c}`,$t(Math.floor((o-Math.floor(o))*256),0,255),$t(Math.floor((h-c)*256),0,255)]}),r=new Map(await Promise.all([...n].map(async([a,[l,o]])=>[a,await Oy(t,l,o)])));return s.map(([a,l,o],h)=>Eh(r.get(a)[o*256+l],i[h][0],i[h][1]))},ac=(i,t)=>$t(Math.round(Math.log2(400750167e-1*Math.cos(t*_t)/256/i)),0,10);var La={lat:35.97389,lon:-5.51611},Cr=(i,t,e,n)=>{let s=n/ie,r=e*_t,a=i*_t,l=t*_t,o=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r));return[((l+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(o)))/_t+540)%360-180,o/_t]},By=(i,t,e,n)=>{let s=Math.sin((e-i)*_t/2)**2+Math.cos(i*_t)*Math.cos(e*_t)*Math.sin((n-t)*_t/2)**2;return 2*ie*Math.asin(Math.min(1,Math.sqrt(s)))},zy=(i,t,e,n)=>{let s=Math.sin((n-t)*_t)*Math.cos(e*_t),r=Math.cos(i*_t)*Math.sin(e*_t)-Math.sin(i*_t)*Math.cos(e*_t)*Math.cos((n-t)*_t);return(Math.atan2(s,r)/_t+360)%360},Hy=["north","north-east","east","south-east","south","south-west","west","north-west"],oc=i=>Hy[Math.round(i/45)%8],Gh=i=>{let t=n=>i.claims.find(s=>s.id===n)??{numbers:[]},e=(n,s)=>t(n).numbers.find(r=>r.what.startsWith(s))?.value;return{island:e("central-island-diameter","diameter"),rings:t("ring-widths").numbers.reduce((n,s)=>n+s.value,0),canal:e("canal-to-sea","canal length"),wall:e("outer-wall-50-stades","distance"),plainLong:e("great-plain","plain length"),plainWide:e("great-plain","plain width"),canalGap:e("plain-canals","spacing"),refs:{rings:t("ring-widths").ref,island:t("central-island-diameter").ref,canal:t("canal-to-sea").ref,wall:t("outer-wall-50-stades").ref,plain:t("great-plain").ref,canals:t("plain-canals").ref,pillars:t("beyond-pillars").ref,years:t("nine-thousand-years").ref}}},sp=i=>{let t=[...i].sort((n,s)=>n-s),e=n=>t[Math.min(t.length-1,Math.floor(n*t.length))];return{low:e(.05),mid:e(.5),high:e(.95),min:t[0],max:t[t.length-1]}},rp=async({lat:i,lon:t,sea:e,cas:n,stadion:s=185})=>{let r=Gh(n),a=s,l=(r.island/2+r.rings)*a,o=l+r.wall*a,h={lat:i,lon:t,sea:e,stadion:a,plato:r,ringR:l,wallR:o,made:new Date().toISOString().slice(0,10)},u=ac(120,i),c=[];for(let k=-l;k<=l;k+=110)for(let E=-l;E<=l;E+=110)E*E+k*k<=l*l&&c.push([t+E/(ie*Math.cos(i*_t))/_t,i+k/ie/_t]);let f=await rc(c,u),d=sp(f);h.rings={across:2*l,low:d.min,high:d.max,mid:d.mid,relief:d.high-d.low,underSea:f.filter(k=>k<e).length/f.length,here:f[Math.floor(f.length/2)],zoom:u};let p=h.rings.mid>=e;h.dry=p;let v=ac(260,i),g=[],m=400,x=15e4;for(let k=0;k<360;k+=5)for(let E=m;E<=x;E+=m)g.push([k,E,Cr(i,t,k,E)]);let _=await rc(g.map(k=>k[2]),v),b=null;for(let k=0;k<g.length;k++)(p?_[k]<e:_[k]>=e)&&(!b||g[k][1]<b.distance)&&(b={distance:g[k][1],bearing:g[k][0],at:g[k][2]});h.shore=b?{...b,kind:p?"sea":"land"}:{distance:null,bearing:null,kind:p?"sea":"land",beyond:x},h.canal={want:r.canal*a+l,from:"centre"};let M=p?h.shore.bearing??180:((h.shore.bearing??0)+180)%360,C=(M+180)%360,y=(M+90)%360,T=p&&h.shore.distance!=null?h.shore.distance:0,U=r.plainLong*a,S=r.plainWide*a,V=(k,E)=>{let O=Cr(i,t,M,T-E);return Cr(O[1],O[0],y,k)},K=ac(Math.max(1200,U/110),i),it=[];for(let k=0;k<44;k++)for(let E=0;E<66;E++)it.push(V(((E+.5)/66-.5)*U,(k+.5)/44*S));let D=await rc(it,K),W=D.filter(k=>k>=e),B=W.length?sp(W):null;h.plain={long:U,wide:S,land:W.length/D.length,low:B?.low??null,high:B?.high??null,mid:B?.mid??null,level:B?W.filter(k=>Math.abs(k-B.mid)<=100).length/D.length:0,inland:C,zoom:K};let j=By(i,t,La.lat,La.lon),lt=t>La.lon&&t<42&&i>30&&i<47.5;h.strait={distance:j,bearing:zy(La.lat,La.lon,i,t),inside:lt};let et=(k,E=96)=>Array.from({length:E+1},(O,G)=>Cr(i,t,G/E*360,k)),pt=(k,E,O,G={})=>({id:`plato-${k}`,side:"plato",kind:"outline",label:E,geometry:O,fill:!1,...G}),dt=[pt("rings",`Plato's rings, ${(2*l/1e3).toFixed(1)} km across`,{type:"Polygon",coordinates:[et(l)]},{fill:!0,width:2.4}),pt("island",null,{type:"LineString",coordinates:et(r.island/2*a,48)},{width:1.4}),pt("wall",`Outer wall, ${r.wall} stades out`,{type:"LineString",coordinates:et(o,128)},{width:1.8,dash:[9,6]}),pt("canal",`Canal, ${r.canal} stades`,{type:"LineString",coordinates:[Cr(i,t,M,l),Cr(i,t,M,o)]},{width:2.6}),pt("plain",`The plain, ${Math.round(U/1e3)} by ${Math.round(S/1e3)} km`,{type:"Polygon",coordinates:[[V(-U/2,0),V(U/2,0),V(U/2,S),V(-U/2,S),V(-U/2,0)]]},{width:2.2})],at=[];for(let k=-U/2+r.canalGap*a;k<U/2-1;k+=r.canalGap*a)at.push([V(k,0),V(k,S/2),V(k,S)]);return dt.push(pt("canals",null,{type:"MultiLineString",coordinates:at},{width:.9})),h.shapes=dt,h.seaBearing=M,h};var Gy={"survey-area":"Survey",track:"Track",core:"Core",sample:"Sample",dive:"Dive",dig:"Dig",structure:"Claimed shape",outline:"Outline",place:"Place"},Vy={"from-dataset":"Position from an open data record","stated-coordinates":"Position printed in the source","digitised-from-figure":"Position read off a map in the source","from-description":"Position from a description only"},ap={claimed:"Claimed",checked:"Checked",found:"Found",context:"Places"},op={"survey-area":'<path d="M2.5 3.5h9v7h-9z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>',track:'<path d="M2 11c3-1 2-6 5-6s2 4 5 3" fill="none" stroke="currentColor" stroke-dasharray="2.5 1.5"/>',core:'<path d="M5.2 2h3.600v10H5.200z" fill="currentColor" fill-opacity=".3" stroke="currentColor"/><path d="M5.200 5.300h3.600M5.200 8.600h3.600" stroke="currentColor"/>',sample:'<path d="M7 2l4 5-4 5-4-5z" fill="currentColor"/>',dive:'<circle cx="7" cy="7" r="4" fill="currentColor"/>',dig:'<path d="M3 3h8v8H3z" fill="currentColor"/>',structure:'<path d="M2 10l4-6 3 4 3-5" fill="none" stroke="currentColor" stroke-width="2"/>',outline:'<path d="M7 2.500c3 0 4.500 2 4.500 4.500S10 11.500 7 11.500 2.500 9.500 2.500 7 4 2.500 7 2.500z" fill="none" stroke="currentColor"/>',place:'<circle cx="7" cy="7" r="2.200" fill="currentColor"/>'},Wy=i=>`<svg class="ki" viewBox="0 0 14 14" aria-hidden="true">${op[i]??op.place}</svg>`,lp=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,metres:l,toast:o,setSheet:h,body:u,eyebrow:c,stage:f,pinsEl:d,project:p}=i,{control:v,globe:g}=t,m=g.shared,x=t.evidence,_=e.legends.find(R=>R.id==="atlantis"),b=e.cas;if(!_||!b)return null;let M=new Map(e.evidence.map(R=>[R.place,R])),C=new Map(_.places.map(R=>[R.id,R])),y=Object.fromEntries(b.claims.map(R=>[R.id,R])),T=tp(_,b),U=Gh(b),S=n.a={view:"list",scene:null,mode:"all",step:-1,feature:null,search:null,sea:null,fit:null,tour:null,more:!1},V=R=>{let H=/^(.{40,220}?[.!?])(\s|$)/.exec(R??"");return H?H[1]:R??""},K=R=>R>=1e5?`${Math.round(R/1e3).toLocaleString("en")} km`:R>=1e4?`${(R/1e3).toFixed(0)} km`:R>=1e3?`${(R/1e3).toFixed(1)} km`:`${Math.round(R)} m`,it=null,D=(R,H)=>{let Q=m.uSea.value,w=performance.now(),I=$t(Math.abs(R-Q)*22,500,2600);cancelAnimationFrame(it);let N=()=>{let P=$t((performance.now()-w)/I,0,1),q=P*P*(3-2*P);i.setSea(Q+(R-Q)*q,!1),P<1?it=requestAnimationFrame(N):H?.()};N()},W=()=>{S.sea&&Math.abs(m.uSea.value-S.sea.to)<.6&&D(S.sea.from),S.sea=null},B=R=>{let H=(R.tests??[]).length;return`<button class="prow" data-act="a-place" data-id="${r(R.id)}"><i class="sdot p-${r(R.standing)}${H?"":" hollow"}"></i><span class="pn">${r(Pa(R.name))}${M.has(R.id)?'<em class="sc">scene</em>':""}</span><small>${H?`${H} check${H===1?"":"s"}`:"never checked"}</small></button>`},j=()=>{S.view="list",c.innerHTML='Atlantis <span class="tag s-legend">Legend</span>';let R=[..._.places].sort((H,Q)=>Number(M.has(Q.id))-Number(M.has(H.id))||(Q.tests??[]).length-(H.tests??[]).length||H.name.localeCompare(Q.name));u.innerHTML=`
      <h2>Where was Atlantis?</h2>
      <p class="lead">${r(V(_.summary))}</p>
      <div class="row" style="margin:0 0 4px"><button class="btn primary" data-act="a-board">Open the board</button><button class="btn" data-act="a-tour">Watch the story</button><button class="btn" data-act="share">Share</button></div>
      <h3>${M.size} places with a scene to explore</h3>
      ${R.filter(H=>M.has(H.id)).map(B).join("")}
      <h3>The other ${_.places.length-M.size} proposals</h3>
      ${R.filter(H=>!M.has(H.id)).map(B).join("")}
      
      ${_.origin?.url?`<p class="note">Where the story comes from: ${a(_.origin.url,_.origin.text??"source")}</p>`:""}`},lt=R=>{let H=b.places[R.id]??{fits:{},breaks:{}},Q=(q,nt)=>`<button class="sc-chip ${nt}" data-act="a-claim" data-id="${r(q)}" data-place="${r(R.id)}" data-kind="${nt}">${Us(nt)}${r(y[q]?.short??q)}</button>`,w=(R.fits??[]).filter(q=>y[q]),I=(R.conflicts??[]).filter(q=>y[q]),N=w.filter(q=>I.includes(q)),P=T.checkable-new Set([...w,...I].filter(q=>y[q].testable)).size;return!w.length&&!I.length?`<h3>Against Plato</h3><p class="note" style="margin-top:0">Nobody has held this place against any detail Plato gives. ${T.checkable} could be checked.</p>`:`<h3>Against Plato</h3><div class="score">${w.filter(q=>!N.includes(q)).map(q=>Q(q,"fit")).join("")}${N.map(q=>Q(q,"both")).join("")}${I.filter(q=>!N.includes(q)).map(q=>Q(q,"brk")).join("")}</div>
      ${H.reason,""}`},et=()=>S.scene?x.visible().filter(R=>R.side!=="plato"):[],pt=R=>`
    <div class="fcard">
      <p>${r(R.what)}</p>
      ${R.result?`<p><b>${R.side==="claimed"?"What a check showed":"Result"}:</b> ${r(R.result)}</p>`:""}
      ${(R.column??[]).length?`<div class="strata">${R.column.map(H=>`<div><i style="background:${i.strataColour(H.what)}"></i><span>${H.from_m}\u2013${H.to_m} m \xB7 ${r(H.what)}${H.age?` \xB7 ${r(H.age)}`:""}</span></div>`).join("")}</div>`:""}
      ${R.evidence?`<p class="quote">\u201C${r(R.evidence)}\u201D</p>`:""}
      <p class="note" style="margin:0">${r(Vy[R.position?.how]??"")}${Number.isFinite(R.position?.error_m)?`, give or take ${K(R.position.error_m)}`:""}. ${a(R.source,"Source")}${R.position?.source&&R.position.source!==R.source?` \xB7 ${a(R.position.source,"position")}`:""}</p>
    </div>`,dt=()=>{let R=et();return R.length?["claimed","checked","found","context"].map(H=>{let Q=R.filter(w=>w.side===H);return Q.length?`<div class="fgroup s-${H}"><h4><i></i>${ap[H]} \xB7 ${Q.length}</h4>${Q.map(w=>`<button class="feat${w.id===S.feature?" on":""}" data-act="a-feature" data-id="${r(w.id)}">${Wy(w.kind)}<span>${r(w.label)}</span><small>${r([Gy[w.kind],w.year].filter(Boolean).join(" \xB7 "))}</small></button>${w.id===S.feature?pt(w):""}`).join("")}</div>`:""}).join(""):'<p class="note">Nothing in this view. Try <b>Both</b>.</p>'},at=()=>{let R=S.scene;if(S.step>=0){let Q=R.story[S.step];return`<span class="tag s-${Q.side==="claimed"?"claimed":Q.side==="checked"?"checked":"found"}">${S.step+1} of ${R.story.length} \xB7 ${r(ap[Q.side]??Q.side)}</span> ${r(Q.line)}`}let H=(Q,w)=>`<b class="w-${Q}">${w}.</b> ${r(R[Q].line)} <small>${r([R[Q].who,R[Q].year].filter(Boolean).join(", "))} \xB7 ${a(R[Q].source,"source")}</small>`;return S.mode==="claimed"?H("claimed","Claimed"):S.mode==="found"?H("found","Found"):`${H("claimed","Claimed")}<br>${H("found","Found")}`},k=R=>{let H=(R.best_layers??[]).map(Q=>i.overlays.find(w=>w.id===Q)).filter(Boolean).slice(0,5);return H.length?`<h3>Surveys that show this place</h3><div class="presets" style="margin-top:0">${H.map(Q=>`<button class="chip${n.overlay?.id===Q.id?" on":""}" data-act="a-layer" data-id="${r(Q.id)}">${r(Q.s.name.replace(/\s*\(.*?\)/g,""))}</button>`).join("")}</div>`:""},E=()=>{let R=S.scene;return`
      <div class="seg modes">${[["claimed","Claimed"],["found","Found"],["all","Both"]].map(([H,Q])=>`<button data-act="a-mode" data-v="${H}" class="${S.mode===H&&S.step<0?"on":""} m-${H}">${Q}</button>`).join("")}</div>
      <p class="lead" id="a-line">${at()}</p>
      ${R.story.length?`<div class="steps"><span>Walk through it</span>${R.story.map((H,Q)=>`<button data-act="a-step" data-i="${Q}" class="s-${r(H.side)}${Q===S.step?" on":""}" aria-label="Step ${Q+1}">${Q+1}</button>`).join("")}<button class="nx" data-act="a-next" aria-label="Next step">${S.step>=R.story.length-1?"Start over":S.step<0?"Start \u203A":"Next \u203A"}</button></div>`:""}
      <div id="a-features">${dt()}</div>
      ${k(R)}
      ${R.measurements.length?`<h3>Measured here</h3><div class="meas">${R.measurements.slice(0,S.more?99:5).map(H=>`<div><span>${r(H.what)}</span><b>${r(typeof H.value=="number"?H.value.toLocaleString("en"):H.value)} ${r(H.unit??"")}</b>${H.plato_value?`<small>Plato: ${r(H.plato_value)}</small>`:""}<small>${a(H.source,"source")}</small></div>`).join("")}</div>${R.measurements.length>5&&!S.more?`<button class="linkish" data-act="a-more">All ${R.measurements.length} measurements</button>`:""}`:""}`},O=R=>`
    <details class="full"><summary>Read the full case</summary>
      ${R.claim?`<p>${r(R.claim)}</p>`:""}
      ${R.against?`<p><b>Against:</b> ${r(R.against)}</p>`:""}
      ${R.proposed_by?.length?`<p>Proposed by ${r(R.proposed_by.slice(0,4).map(H=>`${H.who}${H.year?` (${H.year})`:""}`).join(", "))}.</p>`:""}
      ${(R.tests??[]).map(H=>`<p><b>Checked:</b> ${r(H.what)}${H.who?` (${r(H.who)}${H.year?`, ${H.year}`:""})`:""}. ${r(H.result)} ${H.url?a(H.url,"Source"):""}</p>`).join("")}
      ${S.scene?.not_located?.length?`<p><b>Could not be placed on the map:</b></p><ul>${S.scene.not_located.slice(0,8).map(H=>`<li>${r(H.what)}${H.why?` <span class="why">(${r(H.why)})</span>`:""}</li>`).join("")}</ul>`:""}
      <p class="note">${Cn(R.lat,R.lon,3)}${R.precision_km?`, give or take ${R.precision_km} km`:""}${R.underwater?", under water":""}</p>
      ${(R.sources??[]).map(H=>`<a class="src" href="${r(H.url)}" target="_blank" rel="noopener">${r(H.title??H.url)}</a>`).join("")}
    </details>`,G=()=>{let R=n.place,H=S.scene,Q=R.proposed_by?.[0],w=(R.tests??[]).length;S.view="place",c.innerHTML=`${r(nc[R.role]??"Proposed")} <span class="tag t-${r(R.standing)}">${r(Fs[R.standing]??R.standing)}</span>`;let I=u.scrollTop;u.innerHTML=`
      <button class="back" data-act="a-list">\u2039 All ${_.places.length} places</button>
      <h2>${r(R.name)}</h2>
      <div class="when">${Q?`Proposed by ${r(Q.who)}${Q.year?`, ${Q.year}`:""}`:""}${R.event_date?`${Q?" \xB7 ":""}needs ${r(R.event_date)}`:""}</div>
      ${H?E():`<p class="lead">${r(V(R.claim))}</p>${R.against?`<p class="lead"><b class="w-found">Against.</b> ${r(V(R.against))}</p>`:""}`}
      ${lt(R)}
      ${H?"":`<h3>Checks on the ground \xB7 ${w}</h3>${w?R.tests.map(N=>`<div class="check1">${Ia("confirmed")}<span><b>${r(N.what)}</b>${N.who?` \xB7 ${r(N.who)}${N.year?`, ${N.year}`:""}`:""}<br>${r(V(N.result))} ${N.url?a(N.url,"Source"):""}</span></div>`).join(""):'<p class="note" style="margin-top:0">None on record. Nobody has surveyed, cored or dug here to test this proposal.</p>'}`}
      <div class="row">
        ${H?.needs_sea_level?`<button class="btn${S.sea?" on":""}" data-act="a-sea">${S.sea?"Sea back to where it was":`${H.needs_sea_level.m<0?"Lower":"Raise"} the sea to ${l(H.needs_sea_level.m)}`}</button>`:""}
        <button class="btn primary" data-act="a-fit">Test the fit</button>
        <button class="btn" data-act="a-city">Stand Plato's city here</button>
        <button class="btn" data-act="a-known">Already recorded here?</button>
        <button class="btn" data-act="share">Share</button>
      </div>
      ${O(R)}`,u.scrollTop=I},rt=()=>x.viewOf(null),X=(R,H=!0)=>{let Q=n.place;n.legend=_,n.place=R;let w=M.get(R.id)??null;(Q!==R||S.scene!==w)&&(W(),S.mode="all",S.step=-1,S.feature=null,S.more=!1,S.fit=null),S.scene=w,w?.dem&&!w.dem.asked&&(w.dem.asked=!0,Yd(w.dem,globalThis.__ASSETS__||"./").then(I=>{I&&(g.refresh(I.bbox),t.stamp++)})),x.show(w),x.setExtras([]),x.setMode(S.mode),h("legend"),u.scrollTop=0,G(),H&&v.flyTo(w?rt():i.viewFor(R)),w?.needs_sea_level?.m<0&&H&&!S.sea&&Math.abs(m.uSea.value-w.needs_sea_level.m)>.6&&m.uWater.value>.5&&(S.sea={from:m.uSea.value,to:w.needs_sea_level.m},setTimeout(()=>{S.sea&&n.place===R&&(D(S.sea.to),o(`Sea lowered to ${l(S.sea.to)}: ${w.needs_sea_level.when??"what this proposal needs"}`,4200),G())},H?1700:0))},ot=()=>{vt(),n.legend=_,n.place=null,h("legend"),u.scrollTop=0,j()},vt=()=>{W(),S.scene=null,S.step=-1,S.feature=null,x.show(null),x.setExtras([]),S.fit=null},mt=R=>{S.mode=R,S.step=-1,S.feature=null,x.setMode(R),x.setFocus(null),x.select(null),G()},F=R=>{let H=S.scene.features.filter(P=>R.includes(P.id));if(!H.length)return rt();let Q=H.map(Mi),w=Q.reduce((P,q)=>P+q[0],0)/Q.length,I=Q.reduce((P,q)=>P+q[1],0)/Q.length,N=0;for(let P of H){let q=x.viewOf(P);N=Math.max(N,q.range/2.2+Math.hypot((Mi(P)[0]-w)*Math.cos(I*_t),Mi(P)[1]-I)*_t*63710088e-1)}return{lon:w*_t,lat:I*_t,range:$t(N*2.6,900,rt().range*1.2),tilt:48*_t,heading:v.heading}},ht=R=>{let H=S.scene;if(H?.story.length){if(S.step=R>=H.story.length?-1:R,S.feature=null,x.select(null),S.step<0)S.mode="all",x.setMode("all"),x.setFocus(null),v.flyTo(rt(),1.6);else{let Q=H.story[S.step];S.mode="all",x.setMode("all"),x.setFocus(Q.show??[]),Q.show?.length&&v.flyTo(F(Q.show),1.8)}G()}},Z=(R,H=!0)=>{let Q=S.scene?.features.find(w=>w.id===R);S.feature=Q&&S.feature!==R?R:null,x.select(S.feature),S.feature&&H&&v.flyTo(x.viewOf(Q),1.5),n.sheet!=="legend"&&h("legend"),G(),S.feature&&u.querySelector(".feat.on")?.scrollIntoView({block:"nearest",behavior:"smooth"})},ct=new Map,Y=new Set,yt=[0,0],Ct=R=>{let H=ct.get(R.id);return H||(H=document.createElement("button"),H.className="mark",H.innerHTML="<i></i><span></span>",H.addEventListener("click",Q=>{Q.stopPropagation(),R.side!=="plato"&&Z(R.id,!1)}),d.appendChild(H),ct.set(R.id,H)),H._l=R,H},jt=()=>{let R=new Set;if(x.active&&x.labels.length){let H=f.clientWidth,Q=f.clientHeight,w=[],I=x.labels.map(N=>({l:N,w:(N.id===S.feature?100:0)+(N.lit?10:0)+({claimed:5,found:4,checked:3,plato:2,context:1}[N.side]??0)})).sort((N,P)=>P.w-N.w);for(let{l:N}of I){if(!p(N.lon,N.lat,yt,N.lift)||yt[0]<-10||yt[1]<90||yt[0]>H+10||yt[1]>Q-30)continue;let P=N.text.length>34?`${N.text.slice(0,32).trimEnd()}\u2026`:N.text,q=[yt[0]-8,yt[1]-10,yt[0]+14+P.length*6.3,yt[1]+10],nt=N.lit&&w.length<26&&q[2]<H-4;if(nt){for(let Dt of w)if(q[0]<Dt[2]&&q[2]>Dt[0]&&q[1]<Dt[3]&&q[3]>Dt[1]){nt=!1;break}}if(!nt&&N.id!==S.feature&&N.kind!=="core"&&N.side==="context")continue;nt&&w.push(q);let Mt=Ct(N);Mt._text!==P&&(Mt.lastChild.textContent=P,Mt._text=P,Mt.setAttribute("aria-label",`${N.text}${N.year?` (${N.year})`:""}`)),Mt.style.transform=`translate3d(${yt[0].toFixed(1)}px,${yt[1].toFixed(1)}px,0)`;let Et=`mark s-${N.side}${nt?"":" dot"}${N.id===S.feature?" on":""}${N.lit?"":" dim"}`;Mt.className!==Et&&(Mt.className=Et),Mt._shown||(Mt.style.display="",Mt._shown=!0),R.add(Mt)}}for(let H of Y)R.has(H)||(H.style.display="none",H._shown=!1);Y.clear();for(let H of R)Y.add(H);if(!x.active&&ct.size){for(let H of ct.values())H.remove();ct.clear()}},Ut=s("#pop"),Rt=0,It=(R,H)=>{Ut.innerHTML=`<button class="x" data-act="pop-x" aria-label="Close"><svg width="10" height="10" viewBox="0 0 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>${R}`,Ut.classList.add("open"),Rt=performance.now();let Q=f.getBoundingClientRect(),w=H.getBoundingClientRect(),I=Ut.offsetWidth,N=Ut.offsetHeight,P=$t(w.left-Q.left+w.width/2-I/2,8,Q.width-I-8),q=w.top-Q.top-N-10;Ut.style.left=`${P}px`,Ut.style.top=`${q>=8?q:Math.min(w.bottom-Q.top+10,Q.height-N-8)}px`},kt=()=>{Ut.classList.remove("open"),S.search=null;for(let R of f.querySelectorAll(".tl-b.on"))R.classList.remove("on");i.pulse(null)},J=(R,H)=>{let Q=b.searches.find(w=>w.id===R);if(Q){if(S.search===R)return kt();kt(),S.search=R,H.classList.add("on"),It(ep(Q,Q.place?C.get(Q.place)?.name:null),H),i.pulse(Q.place?C.get(Q.place):null)}},zt=(R,H,Q,w)=>{let I=y[R];if(!I)return;let N=Q&&b.places[Q],P=N&&(w==="brk"?N.breaks[R]:w==="fit"?N.fits[R]:null),q=N&&w==="both"?`<p><em>Said to fit:</em> ${r(N.fits[R]?.how??"")} ${a(N.fits[R]?.source,"source")}</p><p><em>Breaks:</em> ${r(N.breaks[R]?.how??"")} ${a(N.breaks[R]?.source,"source")}</p>`:"",nt=Q?`<div class="pop-h">${Us(w)}<b>${r(C.get(Q)?.name??"")} \xB7 ${r(I.short)}</b></div><div class="pop-s">${w==="fit"?"Said to fit":w==="brk"?"Breaks":"Argued both ways"} \xB7 ${r(I.ref)}</div>${P?`<p>${r(P.how)} ${a(P.source,"source")}</p>`:q}<p class="quote">\u201C${r(I.quote??I.label)}\u201D</p>`:ip(I,T.used.get(R)??0);It(nt,H)},At=s("#board"),Bt=()=>{kt(),s("#board-body").innerHTML=np(_,b,T,M),At.classList.add("open"),f.classList.add("board-open"),s("#board-body").scrollTop=0},bt=()=>{kt(),At.classList.remove("open"),f.classList.remove("board-open")},Nt=R=>{let H=C.get(R);H&&(bt(),kt(),X(H,!0))};At.addEventListener("click",R=>{let H=R.target.closest("[data-search],[data-claim],[data-cell],[data-go],[data-act]");if(!H)return kt();if(H.dataset.act==="board-x")bt();else if(H.dataset.search)J(H.dataset.search,H);else if(H.dataset.claim)zt(H.dataset.claim,H);else if(H.dataset.cell){let[Q,w,I]=H.dataset.cell.split("|");zt(w,H,Q,I)}else H.dataset.go&&Nt(H.dataset.go)});for(let R of[s("#board-body"),u])R.addEventListener("scroll",()=>{Ut.classList.contains("open")&&performance.now()-Rt>350&&kt()},{passive:!0});Ut.addEventListener("click",R=>{let H=R.target.closest("[data-go],[data-act]");H?.dataset.go?Nt(H.dataset.go):H?.dataset.act==="pop-x"&&kt()});let Ot=()=>`<button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-list="1"><b>${T.places}</b> famous claims</button><button class="chip glass case${n.kind==="atlantis"?" on":""}" data-kind="atlantis" data-board="1"><b>${T.checked}</b> checked<i>&nbsp;on the ground</i> \xB7 <b>${T.found}</b> found<span>Board \u203A</span></button>`,Lt=(R,H,Q,w,I,N)=>`<div class="fit"><div class="fit-h"><b>${r(R)}</b><small>${r(H??"")}</small></div><div class="fit-b"><span><em>Plato</em>${Q}</span><span class="${N??""}"><em>Here</em>${w}</span></div>${I?`<p class="note">${I}</p>`:""}</div>`,z=()=>{let R=S.fit,H=n.place;if(c.textContent="Test the fit",!R||R.state==="loading"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button><h2>Laying Plato's plan on the ground</h2><p class="note">Reading heights for ${r(H?.name??"this point")} from the open elevation tiles\u2026</p>`;return}if(R.state==="failed"){u.innerHTML=`<button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button><h2>Could not measure</h2><p>The elevation tiles did not answer. Try again in a moment.</p><div class="row"><button class="btn primary" data-act="a-fit">Try again</button></div>`;return}let Q=R.plato,w=Et=>`${Et.toLocaleString("en")} stades`,I=R.stadion,N=R.rings,P=R.shore,q=R.plain,nt=R.strait,Mt=Math.abs(R.sea)<1?"today's sea level":`the sea at ${l(R.sea)}`;u.innerHTML=`
      <button class="back" data-act="a-back">\u2039 ${r(H?.name??"Back")}</button>
      <h2>Plato's plan, laid on this ground</h2>
      <p class="lead">Measured at ${Cn(R.lat,R.lon,3)} with ${Mt}, at ${I} m to the stade. The gold lines on the globe are his measurements at true size.</p>
      <div class="presets">${[[0,"Today"],[-50,"Plato's date"],[-125,"Ice-age low"]].map(([Et,Dt])=>`<button class="chip${Math.abs(R.sea-Et)<1?" on":""}" data-act="a-fit-sea" data-m="${Et}">${Dt}${Et?` ${l(Et)}`:""}</button>`).join("")}</div>
      ${Lt("Is it above water?",Q.refs.years,"<b>Dry land</b>, with the sea let into the rings",R.dry?`<b>Dry</b>, ${l(N.mid-R.sea)} above the sea`:`<b>Under ${Math.round(R.sea-N.mid).toLocaleString("en")} m of water</b>`,R.dry?"":`At this sea level the point is sea floor. Nearest land: ${P.distance==null?`more than ${K(P.beyond)} away`:`${K(P.distance)} to the ${oc(P.bearing)}`}.`,R.dry?"ok":"no")}
      ${Lt("Ground for the rings",Q.refs.rings,`<b>${K(N.across)}</b> across, cut to sea level<small>${w(Q.island)} island + rings of ${Q.rings} stades</small>`,`<b>${Math.round(N.relief).toLocaleString("en")} m</b> of relief<small>from ${l(N.low)} to ${l(N.high)}</small>`,"Plato has the sea standing in three rings round a low hill, so the ground has to lie close to sea level. Relief is the spread between the lowest and highest twentieth of the ground under the rings.")}
      ${Lt("The canal to the sea",Q.refs.canal,`<b>${K(R.wallR)}</b> from the centre to the sea<small>a canal of ${w(Q.canal)} beyond the rings</small>`,R.dry?P.distance==null?`<b>No sea within ${K(P.beyond)}</b>`:`<b>${K(P.distance)}</b> to the sea, to the ${oc(P.bearing)}`:"<b>Under water</b>","The outer wall stood the same 50 stades out and met the sea at the canal mouth.")}
      ${Lt("The great plain",Q.refs.plain,`<b>${Math.round(q.long/1e3)} by ${Math.round(q.wide/1e3)} km</b>, level<small>${w(Q.plainLong)} by ${w(Q.plainWide)}</small>`,`<b>${Math.round(q.land*100)}%</b> of that box is land${q.mid==null?"":`<small>${Math.round(q.level*100)}% within 100 m of its middle height (${l(q.mid)})</small>`}`,`Plato says the plain lay round the city, ran 2,000 stades up from the sea and faced south. He does not give its corners: here its seaward side is set on the nearest shore, running inland to the ${oc(q.inland)}.`)}
      ${Lt("Beyond the Pillars",Q.refs.pillars,"<b>In front of the strait</b>, in the outer ocean",`<b>${K(nt.distance)}</b> from the Strait of Gibraltar<small>${nt.inside?"inside it, on the Mediterranean side":"outside it"}</small>`,"Bury takes the Pillars of Heracles to be the Strait of Gibraltar. Plato gives a direction, not a distance.",nt.inside?"no":"ok")}
      
      <div class="row"><button class="btn" data-act="a-fit-copy">Copy these numbers</button><button class="btn" data-act="a-fit-off">Clear the gold lines</button></div>`},A=async(R,H)=>{let Q=n.place,w=v.state(),I=H??S.fit?.at??(Q?S.scene?{lat:S.scene.centre.lat,lon:S.scene.centre.lon}:{lat:Q.lat,lon:Q.lon}:{lat:w.lat,lon:w.lon}),N=R??(m.uWater.value>.5?Math.round(m.uSea.value):0);S.fit={state:"loading",at:I},h("fit"),S.view="fit",z();try{let P=await rp({...I,sea:N,cas:b,stadion:t.city.params.stadion});if(S.view!=="fit")return;S.fit={...P,state:"done",at:I},R!=null&&i.setSea(R,!1),x.setExtras(P.shapes),P.dry&&(t.city.place({lat:P.lat,lon:P.lon,bearing:Math.round(P.seaBearing)}),t.stamp++),v.flyTo({lon:P.lon*_t,lat:P.lat*_t,range:P.wallR*3.4,tilt:50*_t,heading:(P.seaBearing+160)%360*_t},2.2),z()}catch(P){console.warn(P),S.fit={state:"failed",at:I},z()}},ut=()=>{let R=S.fit,H=R.rings,Q=R.shore,w=R.plain;return[`Plato's plan at ${R.lat.toFixed(4)}, ${R.lon.toFixed(4)} (sea ${R.sea} m, stadion ${R.stadion} m), measured ${R.made} from Terrain Tiles:`,`- above water: ${R.dry?"yes":"no"} (middle height under the rings ${Math.round(H.mid)} m)`,`- ground under the rings (${Math.round(H.across)} m across): ${Math.round(H.low)} to ${Math.round(H.high)} m, relief ${Math.round(H.relief)} m`,`- nearest ${Q.kind}: ${Q.distance==null?`none within ${Q.beyond} m`:`${Math.round(Q.distance)} m at bearing ${Q.bearing}`} (Plato: ${Math.round(R.wallR)} m from centre to sea)`,`- plain box ${Math.round(w.long/1e3)} x ${Math.round(w.wide/1e3)} km: ${Math.round(w.land*100)}% land, ${Math.round(w.level*100)}% within 100 m of ${w.mid==null?"n/a":Math.round(w.mid)} m`,`- Strait of Gibraltar: ${Math.round(R.strait.distance/1e3)} km, ${R.strait.inside?"inside":"outside"}`].join(`
`)},gt=(R,H)=>{if(R==="a-list")ot();else if(R==="a-place")X(C.get(H.dataset.id),!0);else if(R==="a-board")Bt();else if(R==="a-mode")mt(H.dataset.v);else if(R==="a-step")ht(Number(H.dataset.i)===S.step?-1:Number(H.dataset.i));else if(R==="a-next")ht(S.step+1);else if(R==="a-feature")Z(H.dataset.id);else if(R==="a-more")S.more=!0,G();else if(R==="a-layer"){let Q=i.overlays.find(w=>w.id===H.dataset.id);i.setOverlay(n.overlay?.id===Q.id?null:Q),i.drawTag(),G()}else if(R==="a-claim")zt(H.dataset.id,H,H.dataset.place,H.dataset.kind);else if(R==="a-sea"){let Q=S.scene;S.sea?W():(S.sea={from:m.uSea.value,to:Q.needs_sea_level.m},D(S.sea.to)),G()}else if(R==="a-city"){let Q=n.place,w=S.scene?.centre??Q;i.standCity(w.lat,w.lon)}else if(R==="a-known"){let Q=n.place;i.checkKnown(Q.lat,Q.lon,Math.max(Q.precision_km??10,5))}else if(R==="a-fit")A();else if(R==="a-fit-sea")A(Number(H.dataset.m));else if(R==="a-fit-off")x.setExtras([]),t.city.remove(),t.stamp++,i.drawTag(),o("Cleared");else if(R==="a-fit-copy")navigator.clipboard?.writeText(ut()).then(()=>o("Copied"),()=>o("Could not copy"));else if(R==="a-back")S.view="place",n.place?(h("legend"),G()):i.closeSheet();else if(R==="a-tour")i.tour?.();else return!1;return!0};return{atlantis:_,scenes:M,stats:T,a:S,seaTo:D,ringStades:U.island/2+U.rings,openPlace:X,openList:ot,leaveScene:vt,openBoard:Bt,closeBoard:bt,hidePop:kt,drawCase:Ot,click:gt,placeMarks:jt,selectFeature:Z,setStep:ht,setMode:mt,runFit:A,get boardOpen(){return At.classList.contains("open")}}};var $y=i=>(i??"").split(",")[0].trim(),Da=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")};var cp=({worldfit:i,cas:t})=>{let e=[],n=i,s=t?.searches??[];if(e.push({id:"legend",say:"Atlantis is a story Plato told. Nobody has ever found it.",least:4500}),e.push({id:"tale",say:"He has it told as \u201Ca tale which, though strange, is certainly true\u201D.",least:5500}),e.push({id:"island",say:"Beyond the Pillars of Heracles, out in the Atlantic, lay an island \u201Clarger than Libya and Asia put together\u201D.",least:6500}),e.push({id:"city",say:"At its heart stood a city of rings: sea, then land, then sea again. A temple coated with silver. A wall that \u201Csparkled like fire\u201D.",least:8e3}),e.push({id:"fall",say:"Then, \u201Cin a single day and night of misfortune\u201D, Atlantis \u201Cdisappeared in the depths of the sea\u201D.",least:7e3}),e.push({id:"date",say:"Plato sets this nine thousand years before Solon: about 9600 BCE. That part can be checked.",least:6e3,show:[{at:3.4,for:4.6,big:"9600 BCE"}]}),n){let r=n.best.find(l=>!l.near_old_ice)??n.best[0];e.push({id:"sank",say:`The sea stood about 50 m lower then. Since that date, ${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2 of land have gone under. All of it is glowing now.`,least:8e3,show:[{at:.4,for:3.2,big:"\u221250 m"},{at:4.2,for:6.2,big:`${(n.totals.land_that_sank_km2/1e6).toFixed(1)} million km\xB2`}]});let a=r?.near?.name?/^off /.test(r.near.name)?` The closest, ${r.near.name},`:` The closest, the ${$y(r.near.name)},`:" The closest";r&&e.push({id:"scored",say:`We tested every 10 km of it against his words. Nothing on Earth scores 5 of 5.${a} scores ${r.top}: a match in the landscape, not a city.`,least:9e3,best:r})}if(s.length){let r=s.filter(l=>l.status==="unresolved").length,a=Math.min(...s.map(l=>l.year));e.push({id:"search",say:`People have gone looking since ${a}. ${s.length} searches are on record, and ${r} of them are still open. Not one has found the city.`,least:9e3,show:[{dots:[...s].sort((l,o)=>l.year-o.year).map(l=>l.status)}]})}return e.push({id:"built",say:"So we built his city as he wrote it, each part tied to a line of his text.",least:5500}),e.push({id:"hall",say:"At its centre he put a shrine, \u201Creserved as holy ground, and encircled with a wall of gold\u201D. We opened it. Inside is everything found so far, and everything still unknown.",least:9500}),e.push({id:"turn",say:"Walk in. The search is yours now.",least:4e3}),e};var Vh={lon:-5.61,lat:35.95},hp=(i,t,e)=>{let{world:n,data:s,$:r,esc:a,setSheet:l,st:o,stage:h}=i,{control:u}=n,c=r("#tour"),f=n.city,d={on:!1,i:0,steps:[],timer:null,paused:!1,started:0,left:0,later:[],sink:null,label:null,offset:0,drag:null},p=(X,ot=0)=>Math.max(ot,2600+X.length*48),v=(X,ot)=>{let vt=d.i,mt=X-d.offset*1e3;if(mt<=0){ot();return}d.later.push(setTimeout(()=>{d.on&&d.i===vt&&ot()},mt))},g=r("#shot"),m=r("#stat"),x=r("#dots"),_=r("#t-mark"),b=s.storyMedia??[],M=X=>globalThis.__STORY__?.[X]??`${globalThis.__ASSETS__||"./"}${X}`,C=()=>g.classList.remove("on"),y=X=>{g.innerHTML=`<img src="${a(M(X.file))}" alt=""><figcaption>${a(X.caption)}</figcaption>`,g.style.setProperty("--hold",`${X.for}s`),g.dataset.where=X.where??"right",g.classList.remove("on"),g.offsetWidth,g.classList.add("on")},T=X=>{m.innerHTML=`<b>${a(X.big)}</b>${X.small?`<span>${a(X.small)}</span>`:""}`,m.classList.remove("on"),m.offsetWidth,m.classList.add("on")},U=(X,ot)=>{x.innerHTML=X.map((vt,mt)=>`<i class="d-${Pn[vt]?.tone??"mut"}" style="animation-delay:${Math.round(mt/X.length*ot)}ms"></i>`).join(""),x.classList.add("on")},S=()=>{C(),m.classList.remove("on"),x.classList.remove("on"),d.label=null,_.classList.remove("on"),i.cityBar?.present(null),h.classList.remove("tour-hunt"),e&&(e.state.forced=!1)},V=(X,ot)=>{d.label=X,_.textContent=ot,_.classList.add("on")},K=[0,0],it=()=>{if(!d.on)return;if(dt(),d.label){let vt=i.project(d.label.lon,d.label.lat,K,0);_.style.opacity=vt?"":"0",vt&&(_.style.transform=`translate(${K[0]}px, ${K[1]}px) translate(-50%, -150%)`)}let X=d.sink,ot=f.city?.group;if(X&&ot){let vt=Math.min(1,(performance.now()-X.from)/X.ms);ot.position.z=-X.deep*vt*vt,ot.updateMatrixWorld(!0),n.stamp++,vt>=1&&(d.sink=null,f.remove(),ot.position.z=0,ot.updateMatrixWorld(!0))}},D=()=>{d.sink=null;let X=f.city?.group;X&&X.position.z&&(X.position.z=0,X.updateMatrixWorld(!0))},W=()=>{let X=(ct,Y,yt,Ct=3,jt=0)=>u.flyTo({lon:ct*_t,lat:Y*_t,range:yt,tilt:jt*_t,heading:0},Ct),ot=()=>{t.leaveScene(),o.legend=o.place=null,l(null)},vt=i.home,mt=()=>{D(),f.active||(f.place({lat:vt.lat,lon:vt.lon,bearing:vt.bearing}),n.stamp++),f.cutaway?.(!1)},F=(ct,Y,yt=1.5,Ct={})=>{let jt=f.viewOf(ct);jt&&u.flyTo({...jt,...Y?{range:Y}:{},...Ct},yt),i.cityBar?.present(ct)},ht=(ct,Y=2.6)=>{let yt=(s.evidence??[]).find(Ut=>Ut.id===ct),Ct=t.atlantis.places.find(Ut=>Ut.id===(yt?.place??ct));if(!Ct)return;t.openPlace(Ct,!0),t.setMode("all"),l(null);let jt=n.evidence.viewOf(null);jt&&u.flyTo(jt,Y)},Z={legend:()=>{ot(),e?.setGlow(0),i.setSea(0,!1),mt();let ct=f.view();u.jump({...ct,range:7600}),u.flyTo({...ct,range:6200,heading:ct.heading+.5},9)},tale:()=>X(21,37.5,52e5,3.4,8),island:(ct,Y)=>{X(Vh.lon-6,Vh.lat,24e5,3,16),V(Vh,"The Pillars of Heracles"),v(Y*620,()=>{_.classList.remove("on"),d.label=null,mt(),u.flyTo({...f.view(),range:9e3},Y*.36+.6)})},city:(ct,Y)=>{mt();let yt=f.view();u.flyTo({...yt,range:7e3,heading:yt.heading+.25},Y*.4),v(Y*400,()=>F("temple",230,1.5,{tilt:62*_t})),v(Y*400+1700,()=>{f.cutaway?.(!0),n.stamp++}),v(Y*700,()=>{f.cutaway?.(!1),F("wall-orichalcum",200,1.5)})},fall:(ct,Y)=>{i.cityBar?.present(null),mt();let yt=f.view();u.flyTo({...yt,range:8200,tilt:52*_t},1.6),i.sound?.sfx("rise",.3),v(1500,()=>{d.sink={from:performance.now(),ms:Math.max(3e3,Y*1e3-2600),deep:46},u.flyTo({...yt,range:15e3,tilt:40*_t,heading:yt.heading+.3},Y-1.2)})},date:()=>{D(),f.remove(),e?.setGlow(0),t.seaTo(-50),u.flyTo({lon:3*_t,lat:54*_t,range:32e5,tilt:16*_t,heading:0},3.6)},sank:(ct,Y)=>{t.seaTo(0),e?.setGlow(1),i.sound?.sfx("rise",.2),v(Y*380,()=>X(108,2,62e5,Y*.26,6)),v(Y*690,()=>X(-172,62,56e5,Y*.28,6))},scored:(ct,Y)=>{let yt=ct.best;u.flyTo({lon:yt.lon*_t,lat:yt.lat*_t,range:1e6,tilt:30*_t,heading:0},3.8),e&&(e.state.forced=!0,h.classList.add("tour-hunt")),v(Y*500,()=>{e?.scan(yt.lon,yt.lat),i.sound?.sfx("ping",.6)})},search:(ct,Y)=>{h.classList.remove("tour-hunt"),e&&(e.state.forced=!1),ht("santorini",2.6),v(Y*420,()=>ht("richat",2.8)),v(Y*830,()=>{ot(),X(-18,30,95e5,2.6)})},built:(ct,Y)=>{ot(),e?.setGlow(.5),i.setSea(0,!1),mt(),u.jump({...f.view(),range:5200}),F("harbours",null,1.3),v(Y*340,()=>F("bridges",null,1.2)),v(Y*670,()=>F("temple",260,1.2))},hall:(ct,Y)=>{i.cityBar?.present(null),mt();let yt=f.viewOf("shrine");yt&&u.flyTo({...yt,range:150,tilt:64*_t,heading:yt.heading+Math.PI},Y*.34),v(Y*360,()=>{i.sound?.sfx("reveal",.3),i.enterCity?.("hall",!0,{pan:.34,x:4,y:-4,look:[-12,6]})})},turn:()=>i.enterCity?.("hall",!0)};return cp({worldfit:e?s.worldfit:null,cas:s.cas}).map(ct=>({...ct,go:Y=>Z[ct.id]?.(ct,Y)}))},B=X=>X.split(/(?<=[.!?:]”?)\s+(?=[A-Z“])/).filter(Boolean),j=()=>d.steps.reduce((X,ot)=>X+ot.total,0),lt=X=>d.steps.slice(0,X).reduce((ot,vt)=>ot+vt.total,0),et=()=>lt(d.i)+(d.steps[d.i].total-(d.paused?d.left:Math.max(0,d.left-(performance.now()-d.started)))),pt=X=>{let ot=d.steps[d.i];X!==void 0&&(d.words=X);let vt=j();c.innerHTML=`<p>${a(d.words??ot.say)}</p><div class="bar"><button class="ib t-play" data-act="tour-pause" aria-label="${d.paused?"Play":"Pause"}">${d.paused?'<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 2.2v9.6L11.6 7z" fill="currentColor"/></svg>':'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="3" y="2.4" width="2.8" height="9.2" rx="1"/><rect x="8.2" y="2.4" width="2.8" height="9.2" rx="1"/></svg>'}</button><div class="scrub" role="slider" tabindex="0" aria-label="Story" aria-valuemin="0" aria-valuemax="${Math.round(vt/1e3)}" aria-valuenow="${Math.round(et()/1e3)}">${d.steps.slice(1).map((mt,F)=>`<i style="left:${lt(F+1)/vt*100}%"></i>`).join("")}<b></b><span></span></div><button class="linkish" data-act="tour-stop">${d.i===d.steps.length-1?"Close":"Skip"}</button></div>`,dt()},dt=()=>{let X=c.querySelector(".scrub");if(!X)return;let ot=Math.max(0,Math.min(1,(d.drag??et())/j()));X.querySelector("b").style.width=`${ot*100}%`,X.querySelector("span").style.left=`${ot*100}%`},at=()=>{clearTimeout(d.timer),d.started=performance.now(),d.paused||(d.timer=setTimeout(O,d.left))},k=(X,ot=0)=>{d.i=X;let vt=d.steps[X];for(let Y of d.later)clearTimeout(Y);d.later=[],S(),!["hall","turn"].includes(vt.id)&&i.walkOn?.()&&i.leaveWalk?.(),D();let mt=vt.len;d.offset=Math.max(0,Math.min(ot,mt-.05)),i.sound?.say(vt.say,d.offset),d.left=vt.total-d.offset*1e3,d.started=performance.now(),vt.go(mt);for(let Y of b.filter(yt=>yt.line===vt.id))Y.at+Y.for>d.offset&&(v(Y.at*1e3,()=>y(Y)),v((Y.at+Y.for)*1e3,C));for(let Y of vt.show??[])Y.dots?U(Y.dots,Math.max(0,mt-d.offset)*620):Y.at+Y.for>d.offset&&(v(Y.at*1e3,()=>T(Y)),v((Y.at+Y.for)*1e3,()=>m.classList.remove("on")));let F=B(vt.say),ht=F.reduce((Y,yt)=>Y+yt.length,0),Z=0,ct=F[0];F.forEach((Y,yt)=>{let Ct=Z/ht*mt;yt&&Ct<=d.offset?ct=Y:yt&&v(Ct*1e3,()=>pt(Y)),Z+=Y.length}),d.offset=0,pt(ct),d.paused&&(d.paused=!1),at()},E=X=>{let ot=j(),vt=Math.max(0,Math.min(ot-400,X)),mt=0;for(;mt<d.steps.length-1&&lt(mt+1)<=vt;)mt++;k(mt,(vt-lt(mt))/1e3)};c.addEventListener("pointerdown",X=>{let ot=X.target.closest(".scrub");if(!ot)return;X.preventDefault(),ot.setPointerCapture?.(X.pointerId);let vt=ht=>{let Z=ot.getBoundingClientRect();return Math.max(0,Math.min(1,(ht-Z.left)/Z.width))*j()};d.drag=vt(X.clientX),dt();let mt=ht=>{d.drag=vt(ht.clientX),dt()},F=ht=>{ot.removeEventListener("pointermove",mt),ot.removeEventListener("pointerup",F),ot.removeEventListener("pointercancel",F);let Z=vt(ht.clientX);d.drag=null,E(Z)};ot.addEventListener("pointermove",mt),ot.addEventListener("pointerup",F),ot.addEventListener("pointercancel",F)}),addEventListener("keydown",X=>{!d.on||X.target.closest?.("input, textarea")||(X.key==="ArrowLeft"||X.key==="ArrowRight"?(E(et()+(X.key==="ArrowLeft"?-5e3:5e3)),X.preventDefault()):X.key===" "&&(c.querySelector('[data-act="tour-pause"]')?.click(),X.preventDefault()))});let O=()=>d.i>=d.steps.length-1?rt():k(d.i+1),G=()=>{if(!(!t||d.on)){i.leaveWalk?.(),d.steps=W();for(let X of d.steps){let ot=s.audio?.narration?.[Da(X.say)];X.len=ot?ot.seconds:p(X.say,X.least)/1e3,X.total=ot?Math.max(ot.seconds*1e3+700,1500):p(X.say,X.least)}i.sound?.prime(d.steps.map(X=>X.say));for(let X of b)new Image().src=M(X.file);d.on=!0,d.paused=!1,r("#intro").classList.add("gone"),t.closeBoard(),c.classList.add("open"),h.classList.add("touring"),u.idle=!1,i.sound?.bed(!0),k(0)}},rt=()=>{if(d.on){clearTimeout(d.timer);for(let X of d.later)clearTimeout(X);d.later=[],d.on=!1,c.classList.remove("open"),h.classList.remove("touring"),S(),D(),i.sound?.hush(),i.sound?.bed(!1),t.leaveScene(),o.legend=o.place=null,l(null),e?.setGlow(1),Math.abs(n.globe.shared.uSea.value)>.6&&i.setSea(0,!1),f.cutaway?.(!1),i.walkOn?.()?i.walkPan?.(0):i.enterCity?.("hall")}};return c.addEventListener("click",X=>{let ot=X.target.closest("[data-act]")?.dataset.act;ot==="tour-stop"?rt():ot==="tour-next"?O():ot==="tour-pause"&&(d.paused?(d.paused=!1,i.sound?.resume(),at()):(d.paused=!0,clearTimeout(d.timer),i.sound?.pause(),d.left=Math.max(600,d.left-(performance.now()-d.started))),pt())}),{start:G,stop:rt,next:O,tick:it,get on(){return d.on},get step(){return d.i},get steps(){return d.steps}}};var up=i=>{let{world:t,data:e,$:n,esc:s,stage:r}=i,{control:a}=t,l=t.city,o=n("#citybar"),h=e.reconstruction,u=new Map([...(h?.from_text??[]).map(x=>[x.id,{...x,kind:"text"}]),...(h?.choices??[]).map(x=>[x.id,{...x,kind:"choice"}])]),c={open:!1,walk:-1,parts:[],ghost:!1,cut:!1,part:null},f=(x,_)=>{let b=u.get(x)??_;return b?`<p class="cb-what"><span class="tag ${b.kind==="text"?"t-confirmed":"t-fringe"}">${b.kind==="text"?"From the text":"Our choice"}</span> ${s(b.what??x)}${b.ref?` <small>${s(b.ref)}</small>`:""}</p>${b.quote?`<p class="quote">\u201C${s(b.quote)}\u201D</p>`:b.why?`<p class="cb-why">${s(b.why)}</p>`:""}`:""},d=x=>{c.shown=x&&u.has(x)?x:null,o.classList.toggle("present",!!c.shown),c.shown?(o.innerHTML=f(c.shown),l.highlight?.(null)):c.open||(o.innerHTML=""),t.stamp++},p=()=>{let x=l.active&&!i.tourOn()&&!i.walkOn?.()&&a.range<9e4&&!(a.fly&&a.fly.target.range>9e4);x!==c.open&&(c.open=x,o.classList.toggle("open",x),r.classList.toggle("city-on",x),x?v():(c.walk=-1,c.part=null,c.ghost=c.cut=!1))},v=()=>{if(!c.open)return;let x=b=>typeof l[b]=="function",_=c.walk>=0&&c.parts[c.walk];o.innerHTML=`
      <div class="cb-h"><b>Plato's city, drawn from his text</b><span>${_?`${c.walk+1} of ${c.parts.length}`:""}</span></div>
      ${_?f(_.id,_):c.part?f(c.part.id,c.part):""}
      <div class="bar">
        ${x("parts")&&x("viewOf")?_?'<button class="btn" data-act="cb-prev">Back</button><button class="btn primary" data-act="cb-next">Next</button><button class="btn" data-act="cb-end">Done</button>':'<button class="btn primary" data-act="cb-foot">Walk</button><button class="btn" data-act="cb-walk">Tour</button>':""}
        ${_?"":`${x("setGhost")?`<button class="btn${c.ghost?" on":""}" data-act="cb-ghost">Text only</button>`:""}${x("cutaway")?`<button class="btn${c.cut?" on":""}" data-act="cb-cut">${c.cut?"Close temple":"Open temple"}</button>`:""}<button class="btn" data-act="cb-notes">List</button><button class="ib" data-act="cb-off" aria-label="Remove the city"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m2 2 8 8M10 2l-8 8"/></svg></button>`}
      </div>`},g=x=>{c.walk=x,c.part=null;let _=c.parts[x];if(_){l.highlight?.(_.id);let b=l.viewOf(_.id);b&&a.flyTo(b,2.4)}else l.highlight?.(null);t.stamp++,v()};return o.addEventListener("click",x=>{let _=x.target.closest("[data-act]")?.dataset.act;if(_==="cb-foot")i.enterCity?.("gate");else if(_==="cb-walk")c.parts=l.parts()??[],c.parts.length&&g(0);else if(_==="cb-next")g(c.walk+1>=c.parts.length?-1:c.walk+1);else if(_==="cb-prev")g(Math.max(0,c.walk-1));else if(_==="cb-end")g(-1),a.flyTo(l.view(),2.4);else if(_==="cb-ghost")c.ghost=!c.ghost,l.setGhost(c.ghost),t.stamp++,v();else if(_==="cb-cut"){c.cut=!c.cut,l.cutaway(c.cut),t.stamp++;let b=c.cut&&l.viewOf?.("temple");b&&a.flyTo({...b,tilt:Math.min(b.tilt??.6,40*_t)},2.2),v()}else _==="cb-notes"?i.drawCity():_==="cb-off"&&(l.highlight?.(null),l.remove(),t.stamp++,p(),i.drawTag())}),{sync:p,draw:v,tap:(x,_)=>{if(!l.active||typeof l.pick!="function"||c.walk>=0)return!1;let b=l.pick(x,_);return c.part=b??null,l.highlight?.(b?.id??null),t.stamp++,v(),!!b},present:d,state:c}};var dp=1.7,qy=5.2,Xy=15,Na=.55,Yy=1,Zy={plateau:"The citadel",slope:"The planted slope",island:"The island",bridge:"A bridge",ramp:"The stair to the citadel",quay:"A quay","ring-inner":"The inner ring","ring-outer":"The outer ring",racecourse:"The racecourse",town:"The town",bank:"The edge of the town"},fp=i=>{let{world:t,$:e,stage:n}=i,{control:s}=t,r=t.city,a=t.renderer.domElement,l=e("#walk"),o={on:!1,x:0,y:0,z:0,zs:0,dir:0,pitch:0,vel:[0,0],keys:new Set,look:null,stick:null,goal:null,turn:null,pan:0,locked:!1,hot:null,where:"",place:null,bob:0,moved:!1,hotspots:[],used:!1},h=new ce(new Xn(.34,.5,28),new Be({color:new se(1.6,1.6,1.6),transparent:!0,opacity:0,depthWrite:!1}));h.renderOrder=5;let u=matchMedia("(pointer: coarse)").matches,c=()=>r.city.plan,f=()=>{let k=c();return[[k.rA-k.T,k.rA+.4],[k.r1a-.4,k.r1a+k.T],[k.r1b-k.T,k.r1b+.4],[k.r2a-.4,k.r2a+k.T],[k.r2b-k.T,k.r2b+.4]]},d=(k,E)=>{let O=c(),G=Math.hypot(k,E),rt=r.city.hall,X=r.city.temple;for(let[ot,vt]of f())if(G>ot-Na&&G<vt+Na&&!(E<0&&Math.abs(k-O.off)<O.bridgeHalf-9.8))return!0;if(rt){for(let ot of rt.rings)if(Math.abs(G-ot.r)<ot.t+Na*.5){let vt=k*Math.cos(ot.a)+E*Math.sin(ot.a),mt=Math.abs(-k*Math.sin(ot.a)+E*Math.cos(ot.a));if(!(vt>0&&mt<ot.gap))return!0}if(G<rt.RC+3){for(let ot of rt.circles)if(Math.hypot(k-ot.x,E-ot.y)<ot.r+Na*.6)return!0}}if(X?.room){let ot=k-X.x,vt=E-X.y,mt=X.room.l/2,F=X.room.w/2,ht=(Z,ct)=>Math.abs(Math.abs(Z)-ct)<1.1+Na*.5;if(Math.abs(ot)<mt+1.6&&Math.abs(vt)<F+1.6&&(ht(vt,F)||ht(ot,mt)&&!(ot>0&&Math.abs(vt)<X.room.door/2-.8)))return!0}return!1},p=(k,E)=>{let O={};return c().groundZ(k,E,O)==null||O.kind==="water"?null:{z:r.localFloor(k,E),kind:O.kind}},v=(k,E,O=o.z)=>{let G=p(k,E);return!!G&&Math.abs(G.z-O)<=Yy&&!d(k,E)},g=(k,E)=>{let O=Math.hypot(k,E),G=Math.max(1,Math.ceil(O/.35));for(let rt=0;rt<G;rt++){let X=k/G,ot=E/G,vt=!1;for(let[mt,F]of[[0,1],[.6,.8],[-.6,.8],[1.15,.5],[-1.15,.5]]){let ht=Math.cos(mt),Z=Math.sin(mt),ct=o.x+(X*ht-ot*Z)*F,Y=o.y+(X*Z+ot*ht)*F;if(v(ct,Y)){o.x=ct,o.y=Y,o.z=p(ct,Y).z,vt=!0;break}}if(!vt){o.vel=[0,0];break}}},m=(k,E,O=90)=>{for(let G=0;G<=O;G+=1.5)for(let rt=0;rt<(G?16:1);rt++){let X=rt/16*Math.PI*2,ot=k+G*Math.cos(X),vt=E+G*Math.sin(X),mt=p(ot,vt);if(mt&&!d(ot,vt))return[ot,vt,mt.z]}return null},x=()=>r.toCity(Math.sin(o.dir),Math.cos(o.dir)),_=(k=0)=>{o.zs+=(o.z-o.zs)*(k?1-Math.exp(-k*11):1);let E=Math.hypot(o.vel[0],o.vel[1]);E>.6&&(o.bob+=k*(E>9?13:9.5));let[O,G]=r.toScene(o.x,o.y),[rt,X]=r.toLonLat(O,G);s.walk={lon:rt,lat:X,yaw:o.dir,pitch:o.pitch,eye:dp,lift:o.zs-o.z+(E>.6?Math.sin(o.bob)*.035:0)}},b=()=>[o.x,o.y,o.zs+dp],M=()=>{let[k,E]=x(),O=Math.cos(o.pitch),G=[k*O,E*O,Math.sin(o.pitch)],rt=b(),X=null,ot=1/0;for(let vt of o.hotspots){let mt=[vt.x-rt[0],vt.y-rt[1],vt.z-rt[2]],F=Math.hypot(mt[0],mt[1],mt[2]);if(F>vt.reach||F<.3)continue;let ht=(mt[0]*G[0]+mt[1]*G[1]+mt[2]*G[2])/F,Z=Math.cos(Math.min(.75,Math.atan2((vt.size??1.5)/2,F)+.1));ht>Z&&F<ot&&(X=vt,ot=F)}return X},C=e("#w-use"),y=e("#w-where"),T=(k=o.hot)=>{k&&(o.used=!0,o.goal=null,it(),k.act(k))},U=(k,E)=>{let O=r.site.frame,G=s.ray(k,E),[rt,X]=r.toCity(hn(G,O.east),hn(G,O.north)),ot=[rt,X,hn(G,O.up)],vt=b(),mt=null,F=1/0;for(let ct of o.hotspots){let Y=[ct.x-vt[0],ct.y-vt[1],ct.z-vt[2]],yt=Y[0]*ot[0]+Y[1]*ot[1]+Y[2]*ot[2];yt<.3||yt>ct.reach||Math.hypot(Y[0]-ot[0]*yt,Y[1]-ot[1]*yt,Y[2]-ot[2]*yt)<(ct.size??1.5)*.48&&yt<F&&(mt=ct,F=yt)}if(mt)return T(mt);if(ot[2]>-.04)return;let ht=Math.min(70,(o.zs-vt[2])/ot[2]),Z=m(vt[0]+ot[0]*ht,vt[1]+ot[1]*ht,6);Z&&(o.goal=[Z[0],Z[1]],h.position.set(Z[0],Z[1],Z[2]+.04),h.material.opacity=.9,h.parent!==r.city.group&&r.city.group.add(h),t.stamp++)},S=k=>{if(!o.on)return;if(!r.active||!r.city)return at(!1);let E=o.keys,O=document.activeElement?.closest?.("input, textarea, [contenteditable]"),G=0,rt=0,X=0;O||((E.has("KeyW")||E.has("ArrowUp"))&&(G+=1),(E.has("KeyS")||E.has("ArrowDown"))&&(G-=1),E.has("KeyD")&&(rt+=1),E.has("KeyA")&&(rt-=1),E.has("ArrowRight")&&(X+=1),E.has("ArrowLeft")&&(X-=1)),o.stick&&(G-=o.stick.dy,rt+=o.stick.dx),o.pan&&(o.dir+=o.pan*k);let ot=Math.hypot(G,rt);ot>1&&(G/=ot,rt/=ot);let vt=!O&&(E.has("ShiftLeft")||E.has("ShiftRight"))||o.stick&&Math.hypot(o.stick.dx,o.stick.dy)>.97,[mt,F]=x(),ht=1-Math.exp(-k*(o.stick?16:10)),Z=[mt*G+F*rt,F*G-mt*rt];if(o.goal){let bt=o.goal[0]-o.x,Nt=o.goal[1]-o.y,Ot=Math.hypot(bt,Nt);ot>.05||Ot<.45||(o.stuck??0)>.5?(o.goal=null,o.stuck=0):(Z=[bt/Ot,Nt/Ot],vt=Ot>22,Ot<2.5&&(Z=Z.map(Lt=>Lt*Math.max(.35,Ot/2.5))))}!o.goal&&h.material.opacity>0&&(h.material.opacity=Math.max(0,h.material.opacity-k*3),t.stamp++);let ct=vt?Xy:qy;o.vel[0]+=(Z[0]*ct-o.vel[0])*ht,o.vel[1]+=(Z[1]*ct-o.vel[1])*ht,X&&(o.dir+=X*k*1.9);let Y=Math.hypot(o.vel[0],o.vel[1]),yt=`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`,Ct=o.x,jt=o.y;Y>.05&&g(o.vel[0]*k,o.vel[1]*k),o.goal&&(o.stuck=Math.hypot(o.x-Ct,o.y-jt)<Y*k*.2?(o.stuck??0)+k:0),_(k),Y>1.2&&Math.hypot(o.vel[0],o.vel[1])>1.2&&(o.moved=!0,i.sound?.step(vt)),yt!==`${o.x.toFixed(2)},${o.y.toFixed(2)},${o.dir.toFixed(3)},${o.pitch.toFixed(3)},${(o.zs-o.z).toFixed(2)}`&&t.stamp++;let Ut=r.city.hall,Rt=r.city.temple,It=Math.hypot(o.x,o.y),kt=p(o.x,o.y)?.kind,J=Ut&&It<Ut.RI?"The hall":Ut&&It<Ut.RG?"Inside the wall of gold":Rt&&Math.abs(o.x-Rt.x)<Rt.L/2&&Math.abs(o.y-Rt.y)<Rt.W/2?"Poseidon's temple":Zy[kt]??"";J!==o.where&&(o.where=J,y.textContent=J,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"));let zt=J==="The hall"?"hall":"city";zt!==o.place&&(o.place=zt,i.sound?.air(zt),i.onWalkPlace?.(zt)),l.classList.toggle("in-hall",zt==="hall");let At=M(),Bt=At?.label??"";(At!==o.hot||Bt!==o.hotLabel)&&(o.hot=At,o.hotLabel=Bt,C.hidden=!At,At&&(C.innerHTML=`<span>${i.esc(Bt)}</span>`))},V=(k,E,O)=>{o.dir+=k*O,o.pitch=$t(o.pitch-E*O,-1.25,1.35)},K=()=>{if(!(o.locked||!a.requestPointerLock))try{a.requestPointerLock()?.catch?.(()=>{})}catch{}},it=()=>{document.pointerLockElement===a&&document.exitPointerLock?.()};document.addEventListener("pointerlockchange",()=>{o.locked=document.pointerLockElement===a,l.classList.toggle("locked",o.locked),o.locked||o.keys.clear()}),document.addEventListener("mousemove",k=>{o.on&&o.locked&&V(k.movementX,k.movementY,.0022)}),addEventListener("keydown",k=>{!o.on||k.target.closest?.("input, textarea, [contenteditable]")||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"].includes(k.code)&&(o.keys.add(k.code),k.preventDefault()),(k.code==="KeyE"||k.code==="Enter")&&!k.repeat&&(T(),k.preventDefault()))}),addEventListener("keyup",k=>o.keys.delete(k.code)),addEventListener("blur",()=>o.keys.clear());let D=new Map,W=e("#w-stick"),B=44,j=.14,lt=()=>{let k=a.getBoundingClientRect();return[k.width/2,k.height/2]},et=(k,E)=>{W.style.left=`${k}px`,W.style.top=`${E}px`};a.addEventListener("pointerdown",k=>{if(!o.on)return;let E=a.getBoundingClientRect(),O=k.clientX-E.left,G=k.clientY-E.top;if(k.pointerType==="mouse"){if(o.locked){U(...lt());return}D.set(k.pointerId,{kind:"look",x:O,y:G,x0:O,y0:G,t:performance.now(),mouse:!0})}else{l.classList.contains("touch")||l.classList.add("touch");let rt=O<E.width/2&&!o.stick?"move":"look";D.set(k.pointerId,{kind:rt,x:O,y:G,x0:O,y0:G,cx:O,cy:G,t:performance.now()}),rt==="move"&&(o.stick={dx:0,dy:0},et(O,G),W.classList.add("on"))}a.setPointerCapture?.(k.pointerId)}),a.addEventListener("pointermove",k=>{let E=D.get(k.pointerId);if(!o.on||!E)return;let O=a.getBoundingClientRect(),G=k.clientX-O.left,rt=k.clientY-O.top;if(E.kind==="move"){let X=G-E.cx,ot=rt-E.cy,vt=Math.hypot(X,ot);vt>B&&(E.cx=G-X/vt*B,E.cy=rt-ot/vt*B,et(E.cx,E.cy),X=G-E.cx,ot=rt-E.cy);let mt=Math.min(1,Math.hypot(X,ot)/B),F=mt<j?0:((mt-j)/(1-j))**1.4,ht=Math.atan2(ot,X);o.stick={dx:Math.cos(ht)*F,dy:Math.sin(ht)*F},mt>.2&&(o.goal=null),W.firstElementChild.style.transform=`translate(${X}px, ${ot}px)`}else E.mouse?V(G-E.x,rt-E.y,.004):(o.dir+=(G-E.x)*.0062,o.pitch=$t(o.pitch-(rt-E.y)*.0045,-1.1,1.2));E.x=G,E.y=rt});let pt=k=>{let E=D.get(k.pointerId);if(!E)return;D.delete(k.pointerId);let O=Math.hypot(E.x-E.x0,E.y-E.y0)<9&&performance.now()-E.t<350;if(E.kind==="move"){o.stick=null,W.classList.remove("on"),W.firstElementChild.style.transform="",W.style.left="",W.style.top="",O&&o.on&&U(E.x,E.y);return}!o.on||!O||(E.mouse&&a.requestPointerLock?(K(),setTimeout(()=>{o.on&&!o.locked&&U(E.x,E.y)},180)):U(E.x,E.y))};a.addEventListener("pointerup",pt),a.addEventListener("pointercancel",pt),C.addEventListener("click",()=>T());let dt=({x:k=0,y:E=-60,dir:O=null,look:G=null,pan:rt=0,grab:X=!0}={})=>{if(!r.active||!r.city)return!1;let ot=m(k,E);if(!ot)return!1;if([o.x,o.y,o.z]=ot,o.zs=o.z,G){let[vt,mt]=r.toScene(G[0]-o.x,G[1]-o.y);o.dir=Math.atan2(vt,mt)}else o.dir=O??s.heading;return o.pitch=0,o.vel=[0,0],o.keys.clear(),o.goal=null,o.turn=null,o.pan=rt,o.hot=null,o.where="",o.place=null,C.hidden=!0,s.pointers.clear(),s.fly=null,o.on||(o.on=!0,l.hidden=!1,n.classList.add("walking"),i.onWalk?.(!0)),X&&!u&&navigator.userActivation?.isActive&&K(),_(),t.stamp++,!0},at=(k=!0)=>{if(!o.on)return;o.on=!1,o.goal=null,o.pan=0,it(),h.removeFromParent(),l.hidden=!0,l.classList.remove("went"),n.classList.remove("walking");let E=s.walk;s.walk=null,i.sound?.air(null),E&&(s.jump({lon:E.lon,lat:E.lat,range:40,tilt:1.2,heading:o.dir}),k&&s.flyTo({lon:E.lon,lat:E.lat,range:420,tilt:1.05,heading:o.dir},2.2)),t.stamp++,i.onWalk?.(!1)};return t.beforeFrame=S,{enter:dt,leave:at,use:T,lock:K,unlock:it,footing:m,canStand:v,state:o,hotspots:o.hotspots,eye:b,forward:x,get on(){return o.on}}};var Wh="#eef2f6",ks="#9aa7b4",lc="#e9bd62",pp="#0b1016",$h="#243040",Os={good:"#5fd0a0",bad:"#f0766a",warn:"#e9bd62",info:"#6fb6f0",mut:"#7c8794"},Bs=["#16324a","#1f6f78","#2b9a8f","#58c08a","#e9bd62","#fff3c4"],jy=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},Jy=-Math.PI/2+30*Math.PI/180,Ky=(i,t)=>i.length>t?`${i.slice(0,t-1).replace(/[ ,;:]+\S*$/,"")}\u2026`:i,mp=(i,{A:t,H:e,walk:n})=>{let{world:s,data:r,$:a,esc:l,link:o,setSheet:h,body:u,eyebrow:c,toast:f}=i,d=s.city,p=r.worldfit,v=r.cas,g=r.evidence??[],m=r.open,x={group:null,on:null,boards:[],globe:null,spin:null,painted:!1},_=s.phone?768:1152,b=Math.round(_/1.8),M=_/1152,C=(F,ht=500)=>`${ht} ${Math.round(F*M)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,y=(F,ht,Z)=>{let ct=[],Y="";for(let yt of String(ht).split(/\s+/)){let Ct=Y?`${Y} ${yt}`:yt;F.measureText(Ct).width>Z&&Y?(ct.push(Y),Y=yt):Y=Ct}return Y&&ct.push(Y),ct},T=(F,ht,Z,ct,Y,yt,{colour:Ct=Wh,weight:jt=500,rows:Ut=9,gap:Rt=1.32}={})=>{F.font=C(yt,jt),F.fillStyle=Ct,F.textBaseline="top";let It=y(F,ht,Y*M);return It.slice(0,Ut).forEach((kt,J)=>F.fillText(J===Ut-1&&It.length>Ut?`${kt.replace(/[ ,;:]+\S*$/,"")}\u2026`:kt,Z*M,(ct+J*yt*Rt)*M)),ct+Math.min(Ut,It.length)*yt*Rt},U=(F,ht,Z)=>(F.fillStyle=pp,F.fillRect(0,0,_,b),F.fillStyle=lc,F.fillRect(0,0,_,5*M),T(F,Z,56,52,1040,58,{weight:700,rows:2,gap:1.1})+30),S=(F,ht)=>{F.font=C(20,500),F.fillStyle=ks,F.textBaseline="alphabetic",F.fillText(ht,56*M,b-30*M),F.fillStyle=$h,F.fillRect(56*M,b-66*M,_-112*M,1.5*M)},V=(F,ht,Z,ct,Y)=>{F.fillStyle=Y,F.beginPath(),F.arc(ht*M,Z*M,ct*M,0,7),F.fill()},K=(F,ht,Z,ct,Y=9)=>{for(let yt=0;yt<5;yt++)V(F,ht+Y+yt*(Y*2+6),Z,Y,yt<ct?Bs[4]:"#2a3442")},it=(F,ht,Z,ct,Y=22)=>ct.forEach((yt,Ct)=>{F.fillStyle=yt?Bs[4]:"#2a3442",F.fillRect((ht+Ct*(Y+5))*M,Z*M,Y*M,Y*M)}),D=F=>p?.places.find(ht=>ht.id===F),W=(v?.searches??[]).filter(F=>F.status==="unresolved"||F.status==="never-tested"),B=new Set((e?.CLUES??[]).map(F=>F.claim)),j=(v?.claims??[]).filter(F=>!B.has(F.id)),lt=g.flatMap(F=>(F.not_located??[]).map(ht=>({site:F.name,what:typeof ht=="string"?ht:ht.what??ht.name??ht.id??""}))).filter(F=>F.what),et=(p?.best??[]).filter(F=>!F.near_old_ice),pt=F=>{let ht=new Set;return et.filter(Z=>Z.near?.name&&!/^off /.test(Z.near.name)&&!ht.has(Z.near.name)&&ht.add(Z.near.name)).slice(0,F)},dt=m?.work?.filter(F=>(F.status??"open")!=="done")??[],at=[];for(let F=0;F<g.length;F+=2)at.push(g.slice(F,F+2));let k=[];for(k.push({id:"welcome",label:"The hall",draw:F=>{let ht=U(F,"The hall","The hall");["His words","Earth scores","Top scores","Places named","Searches","Unknown","Help build"].forEach((ct,Y)=>{let yt=Y%2,Ct=Y>>1;V(F,66+yt*532,ht+18+Ct*62,8,lc),T(F,ct,92+yt*532,ht+Ct*62,440,34,{weight:600,rows:1})})},sheet:()=>`<h2>The hall</h2><div class="hl-index">${[["text","His words"],["earth","Earth scores"],["best","Top scores"],["claims-1","Places named"],["searches","Searches"],["unknown","Unknown"],["work","Help build"]].map(([F,ht])=>`<button class="btn" data-act="hl-open" data-id="${F}">${ht}</button>`).join("")}</div><div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}),k.push({id:"text",label:"His words",draw:F=>{let ht=U(F,"His words","His words"),Z=(e?.CLUES??[]).map(ct=>v?.claims.find(Y=>Y.id===ct.claim)).filter(Boolean);for(let ct of Z.slice(0,5))V(F,66,ht+17,8,Bs[4]),F.font=C(21,600),F.fillStyle=ks,F.textBaseline="top",F.textAlign="right",F.fillText(ct.ref.split(";")[0],(_/M-56)*M,(ht+5)*M),F.textAlign="left",ht=T(F,ct.label,92,ht,760,27,{rows:2})+12},sheet:()=>`<h2>What Plato wrote</h2>${(v?.claims??[]).map(F=>`<div class="known"><span>${B.has(F.id)?'<i class="cdot on"></i>':'<i class="cdot"></i>'}${l(F.label)}</span><small>${l(F.ref??"")}</small></div>`).join("")}<div class="row"><button class="btn" data-act="h-rules">How it's scored</button></div>`}),k.push({id:"earth",label:"Earth scores",draw:F=>{let ht=U(F,"The Earth","Earth scores")+6,Z=[...p?.totals.by_score??[]].sort((Y,yt)=>yt.score-Y.score),ct=Math.max(1,...Z.map(Y=>Y.km2));for(let Y of Z)K(F,56,ht+17,Y.score,8),F.fillStyle="#16202c",F.fillRect(190*M,ht*M,640*M,34*M),F.fillStyle=Bs[Y.score],F.fillRect(190*M,ht*M,Math.max(Y.km2?3:0,640*Y.km2/ct)*M,34*M),F.font=C(23,500),F.fillStyle=Y.km2?ks:Os.bad,F.fillText(Y.km2?`${Math.round(Y.km2).toLocaleString("en")} km\xB2`:"none",850*M,(ht+17)*M),ht+=48},sheet:()=>{let F=[...p?.totals.by_score??[]].sort((ct,Y)=>Y.score-ct.score),ht=Math.max(1,...F.map(ct=>ct.km2)),Z=ct=>ct>=1e6?`${(ct/1e6).toFixed(1)} M km\xB2`:ct>=1e3?`${Math.round(ct/1e3)} K km\xB2`:ct?`${Math.round(ct)} km\xB2`:"None";return`<h2>Earth scores</h2>${F.map(ct=>`<div class="hbar"><span class="pips" aria-label="${ct.score} of 5">${[0,1,2,3,4].map(Y=>`<i class="${Y<ct.score?"on":""}"></i>`).join("")}</span><span class="track"><b style="width:${ct.km2/ht*100}%;background:${Bs[ct.score]}"></b></span><small>${Z(ct.km2)}</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),k.push({id:"best",label:"Top scores",draw:F=>{let ht=U(F,"The leaderboard","Top scores");pt(5).forEach((Z,ct)=>{F.font=C(26,700),F.fillStyle=ks,F.textBaseline="top",F.fillText(String(ct+1),56*M,(ht+2)*M),F.font=C(28,600),F.fillStyle=Wh,F.fillText(Ky(Z.near?.name??`${Z.lat.toFixed(1)}, ${Z.lon.toFixed(1)}`,40),104*M,ht*M),it(F,800,ht+4,(e?.CLUES??[]).map(Y=>Z.clues.includes(Y.key))),F.font=C(26,700),F.fillStyle=Bs[Z.top],F.textAlign="right",F.fillText(`${Z.top}/5`,(_/M-56)*M,(ht+2)*M),F.textAlign="left",ht+=50})},sheet:()=>{let F=F(5);return`<h2>Top scores</h2>${F.map(ht=>`<div class="hbar"><span class="pips" aria-label="${ht.top} of 5">${[0,1,2,3,4].map(Z=>`<i class="${Z<ht.top?"on":""}"></i>`).join("")}</span><span>${l(ht.near.name)}</span><small>${Math.round(ht.km2).toLocaleString("en")} km\xB2</small></div>`).join("")}<div class="row c-acts"><button class="btn primary" data-act="hl-globe">Open the globe</button></div>`}}),at.forEach((F,ht)=>k.push({id:`claims-${ht+1}`,label:F.map(Z=>Z.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join(" \xB7 "),draw:Z=>{U(Z,"Places people named",F.map(ct=>ct.name.split(",")[0].replace(/\s*\(.*?\)/g,"")).join("  \xB7  ")),F.forEach((ct,Y)=>{let yt=56+Y*532,Ct=D(ct.place??ct.id),jt=196;Z.font=C(20,700),Z.fillStyle=Os.warn,Z.textBaseline="top",Z.fillText("CLAIMED",yt*M,jt*M),jt=T(Z,ct.claimed?.line??"",yt,jt+28,480,24,{rows:4})+18,Z.font=C(20,700),Z.fillStyle=Os.good,Z.fillText("EVIDENCE",yt*M,jt*M),jt=T(Z,ct.found?.line??"",yt,jt+28,480,24,{rows:5})+14,Ct&&K(Z,yt,b/M-60,Ct.score,8)}),Z.fillStyle=$h,Z.fillRect(_/2-1,196*M,1.5*M,b-290*M)},sheet:()=>F.map(Z=>`<h2>${l(Z.name)}</h2><p><span class="tag t-fringe">Claimed</span> ${l(Z.claimed?.line??"")}</p><p><span class="tag">Evidence</span> ${l(Z.found?.line??"")}</p><div class="row"><button class="btn" data-act="hl-place" data-id="${l(Z.place??Z.id)}">See it on the globe</button></div>`).join("")})),k.push({id:"searches",label:"Searches",draw:F=>{let ht=v?.searches??[],Z=U(F,"The searches","Searches"),ct=Ut=>Ut<1950?70+(Ut-1650)/300*250:320+(Ut-1950)/80*770,Y=Z+150;F.fillStyle=$h,F.fillRect(56*M,Y*M,(_/M-112)*M,2*M),F.font=C(19,500),F.fillStyle=ks,F.textBaseline="top",F.textAlign="center";for(let Ut of[1700,1800,1950,1975,2e3,2025])F.fillRect(ct(Ut)*M,(Y-6)*M,1.5*M,14*M),F.fillText(String(Ut),ct(Ut)*M,(Y+16)*M);F.textAlign="left";let yt=new Map;for(let Ut of ht){let Rt=Math.round(ct(Ut.year)/15),It=yt.get(Rt)??0;yt.set(Rt,It+1),V(F,Rt*15,Y-20-It*24,9,Os[Pn[Ut.status]?.tone??"mut"])}let Ct=56,jt=Y+78;for(let[Ut,Rt]of Object.entries(Pn)){let It=ht.filter(J=>J.status===Ut).length;if(!It)continue;V(F,Ct+9,jt+14,9,Os[Rt.tone]),F.font=C(22,500),F.fillStyle=Wh,F.textBaseline="top";let kt=`${It} ${Rt.short.toLowerCase()}`;F.fillText(kt,(Ct+26)*M,jt*M),Ct+=44+F.measureText(kt).width/M}},sheet:()=>`<h2>Searches</h2>${[...v?.searches??[]].sort((F,ht)=>F.year-ht.year).map(F=>`<div class="known"><span><span class="yr">${F.year}</span>${l(F.title)}</span><small style="color:${Os[Pn[F.status]?.tone??"mut"]}">${l(Pn[F.status]?.short??F.status)}</small></div>`).join("")}<div class="row"><button class="btn primary" data-act="hl-board">Open the board</button></div>`}),k.push({id:"unknown",label:"Unknown",draw:F=>{let ht=U(F,"Still unknown","Unknown");for(let Z of W.slice(0,6))V(F,66,ht+15,8,Os[Pn[Z.status]?.tone??"mut"]),F.font=C(20,600),F.fillStyle=ks,F.textBaseline="top",F.textAlign="right",F.fillText(String(Z.year),(_/M-56)*M,(ht+3)*M),F.textAlign="left",ht=T(F,Z.title,92,ht,880,25,{rows:1})+11},sheet:()=>`<h2>Unknown</h2><h3>Searches</h3>${W.map(F=>`<div class="known"><span>${l(F.title)}${F.source?` ${o(typeof F.source=="string"?F.source:F.source.url??"","source")}`:""}</span><small>${l(String(F.date??F.year))} \xB7 ${l(Pn[F.status]?.short??"")}</small></div>`).join("")}<h3>Not scored yet</h3>${j.map(F=>`<div class="known"><span>${l(F.label)}</span><small>${l(F.ref??"")}</small></div>`).join("")}${lt.length?`<h3>No published position</h3>${lt.map(F=>`<div class="known"><span>${l(F.what)}</span><small>${l(F.site.split(",")[0])}</small></div>`).join("")}`:""}<div class="row"><button class="btn primary" data-act="hl-work">Work to pick up</button></div>`}),k.push({id:"work",label:"Help build",draw:F=>{let ht=U(F,"Open work","Help build");[dt.slice(0,Math.ceil(Math.min(dt.length,10)/2)),dt.slice(Math.ceil(Math.min(dt.length,10)/2),10)].forEach((ct,Y)=>{let yt=ht;for(let Ct of ct)F.font=C(18,700),F.fillStyle=lc,F.textBaseline="top",F.fillText(Ct.area.toUpperCase(),(56+Y*532)*M,yt*M),yt=T(F,Ct.title,56+Y*532,yt+24,480,25,{rows:1})+13})},sheet:()=>rt()}),k.push({id:"map",label:"Kircher, 1664",draw:(F,ht)=>{F.fillStyle=pp,F.fillRect(0,0,_,b),F.fillStyle=lc,F.fillRect(0,0,_,5*M);let Z=(r.storyMedia??[]).find(Y=>/kircher/.test(Y.file));if(!Z)return;let ct=new Image;ct.onload=()=>{let Y=Math.min((_-80*M)/ct.width,(b-110*M)/ct.height),yt=ct.width*Y,Ct=ct.height*Y;F.drawImage(ct,(_-yt)/2,30*M,yt,Ct),T(F,Z.caption.split(".")[0],56,(30*M+Ct)/M+14,1040,22,{colour:ks,rows:1}),ht?.()},ct.src=globalThis.__STORY__?.[Z.file]??`${globalThis.__ASSETS__||"./"}${Z.file}`},sheet:()=>{let F=(r.storyMedia??[]).find(ht=>/kircher/.test(ht.file));return F?`<h2>${l(F.caption.split(".")[0])}</h2><p>${o(F.source,F.by)} \xB7 ${l(F.licence)}</p>`:""}});k.length<12;)k.push(null);let E=()=>i.host?.community??m?.community??"atlantis",O=()=>(m?.repository??"").replace(/\/[^/]+$/,`/${E()}`),G=F=>`Help with a/${E()} on Abstracts (https://abstracts.co/a/${E()}). Its repository is ${O()}.

${F?`The task: ${F.title} (${F.id}, ${F.area}).
${F.why}
Done when: ${F.done_when}`:"Read data/open.json and show me the open tasks, grouped by area, with what each needs. Ask me which one I want."}

1. Read AGENTS.md in the repository first. It says where everything is and which check goes with which file.${F?` This task starts in: ${F.start.join(", ")}.`:""}
2. Offer to say on the community's Wall that I am taking ${F?F.id:"the task"}, so nobody does the same work twice. Post only if I say yes.
3. Do the work on a branch. Nothing from memory: every claim and every position needs a source you fetched. Atlantis is a legend with no archaeological support, and a score is never evidence of a city.
4. Run ${F?F.check.map(ht=>`\`${ht}\``).join(" and "):"the task's checks"}.
5. Show me what changed (for anything visual, pictures at desktop and phone widths) and wait until I accept that version.
6. Then open one pull request to ${O()} from my GitHub account, following https://abstracts.co/kit/abstracts-artifact/SKILL.md, and name ${F?F.id:"the task"} in it.`,rt=()=>`<h2>Help build</h2>${Object.entries(m?.areas??{}).map(([F,ht])=>{let Z=dt.filter(ct=>ct.area===F);return Z.length?`<h3>${l(F[0].toUpperCase()+F.slice(1))}</h3>${Z.map(ct=>`<details class="hl-task"><summary><b>${l(ct.title)}</b><small>${l(ct.size)}</small></summary><p>${l(ct.why)}</p><div class="row"><button class="btn primary" data-act="hl-prompt" data-id="${l(ct.id)}">Copy the prompt for my AI</button></div></details>`).join("")}`:""}).join("")}`,X=F=>{let ht=k.find(Z=>Z?.id===F);ht&&(h("hall"),c.textContent="The hall",u.innerHTML=ht.sheet())};u.addEventListener("click",F=>{let ht=F.target.closest('[data-act^="hl-"]');if(!ht)return;let Z=ht.dataset.act;if(Z==="hl-work")X("work");else if(Z==="hl-open")X(ht.dataset.id);else if(Z==="hl-globe")i.openGlobe?.();else if(Z==="hl-board")i.openGlobe?.(!1),t?.openBoard();else if(Z==="hl-place"){let ct=t?.atlantis.places.find(Y=>Y.id===ht.dataset.id);i.openGlobe?.(!1),ct&&t.openPlace(ct,!0)}else if(Z==="hl-prompt"){let ct=G(dt.find(Y=>Y.id===ht.dataset.id)??null);(navigator.clipboard?.writeText(ct)??Promise.reject()).then(()=>f("Copied. Paste it to your AI."),()=>{u.insertAdjacentHTML("beforeend",`<pre class="c-share">${l(ct)}</pre>`),f("Select the text and copy it")})}});let ot=()=>{let Z=document.createElement("canvas");Z.width=720,Z.height=360;let ct=Z.getContext("2d"),Y=ct.createImageData(720,360),yt=Y.data,Ct=e?.state,jt=Ct?.n,Ut=J=>[parseInt(J.slice(1,3),16),parseInt(J.slice(3,5),16),parseInt(J.slice(5,7),16)],Rt=Ut("#0c2a44"),It=Ut("#3b4a3f"),kt=Bs.map(Ut);for(let J=0;J<360;J++){let zt=Math.max(-85,Math.min(85,90-(J+.5)/360*180))*Math.PI/180,At=jt?Math.max(0,Math.min(jt-1,Math.floor((1-Math.log(Math.tan(zt)+1/Math.cos(zt))/Math.PI)/2*jt))):0;for(let Bt=0;Bt<720;Bt++){let bt=Rt;if(jt){let Ot=At*jt+Math.floor(Bt/720*jt),Lt=Ct.state[Ot];bt=Lt===1?It:Lt===2?kt[Math.max(1,jy(Ct.bits[Ot]))]:Rt}let Nt=(J*720+Bt)*4;yt[Nt]=bt[0],yt[Nt+1]=bt[1],yt[Nt+2]=bt[2],yt[Nt+3]=255}}return ct.putImageData(Y,0,0),Z},vt=()=>{let F=d.city.hall,ht=new ke;ht.name="hall",x.boards=[],F.panels.forEach((Ct,jt)=>{let Ut=k[jt];if(!Ut)return;let Rt=document.createElement("canvas");Rt.width=_,Rt.height=b;let It=Rt.getContext("2d");It.textAlign="left",Ut.draw(It,()=>{x.boards.find(Nt=>Nt.canvas===Rt).tex.needsUpdate=!0,s.stamp++});let kt=new fi(Rt);kt.colorSpace=Le,kt.anisotropy=4;let J=new ce(new On(Ct.w,Ct.h),new Be({map:kt})),zt=new ft(-Math.cos(Ct.a),-Math.sin(Ct.a),0),At=new ft(0,0,1),Bt=new ft().crossVectors(At,zt);J.quaternion.setFromRotationMatrix(new ve().makeBasis(Bt,At,zt)),J.position.set(Ct.x,Ct.y,Ct.z);let bt=new ce(new On(Ct.w+.16,Ct.h+.16),new Be({color:new se(.55,.4,.14)}));bt.quaternion.copy(J.quaternion),bt.position.set(Ct.x-zt.x*.03,Ct.y-zt.y*.03,Ct.z),ht.add(bt,J),x.boards.push({...Ut,mesh:J,canvas:Rt,tex:kt,at:Ct})});let Z=new fi(ot());Z.colorSpace=Le;let ct=new ce(new En(F.globe.r,48,32),new Be({map:Z}));ct.rotation.x=Math.PI/2;let Y=new ke,yt=new ke;Y.add(ct),yt.add(Y),yt.rotation.y=.41,yt.position.set(F.globe.x,F.globe.y,F.globe.z),ht.add(yt);{let Ct=d.city.hall,jt=-5.2,Ut=-(Ct.RI-4.2),Rt=Ct.floor,It=new Ki({color:9067051,metalness:.85,roughness:.35}),kt=new ke;kt.position.set(jt,Ut,Rt);for(let Lt=0;Lt<3;Lt++){let z=Lt/3*Math.PI*2,A=new ce(new pi(.05,.07,1.5,6),It);A.position.set(Math.cos(z)*.32,Math.sin(z)*.32,.72),A.rotation.set(Math.sin(z)*.22,-Math.cos(z)*.22,0,"ZYX"),A.rotation.x=Math.PI/2+Math.sin(z)*.22,A.rotation.y=-Math.cos(z)*.22,kt.add(A)}let J=new ce(new En(.55,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),It);J.rotation.x=Math.PI/2,J.position.z=1.55,J.material.side=Ye,kt.add(J);let zt=new ce(new ra(.55,.045,8,32),It);zt.position.z=1.55,kt.add(zt);let At=new ke;At.position.z=1.5;let Bt=(Lt,z,A,ut,gt)=>{let R=new ce(new Ms(Lt,z,12),new Be({color:new se(A).multiplyScalar(1.8),transparent:!0,opacity:.8,depthWrite:!1,blending:gr}));return R.rotation.x=Math.PI/2,R.position.set(ut,gt,z/2+.05),R};for(let[Lt,z,A,ut,gt]of[[.3,.55,16738832,0,0],[.2,.7,16747562,.16,.08],[.2,.62,16747562,-.15,.1],[.18,.5,16742938,.02,-.18],[.11,.48,16769162,.02,.02]])At.add(Bt(Lt,z,A,ut,gt));let bt=(()=>{let Lt=document.createElement("canvas");Lt.width=Lt.height=64;let z=Lt.getContext("2d"),A=z.createRadialGradient(32,32,0,32,32,32);return A.addColorStop(0,"rgba(255,170,80,0.9)"),A.addColorStop(1,"rgba(255,120,40,0)"),z.fillStyle=A,z.fillRect(0,0,64,64),new fi(Lt)})(),Nt=new jr(new dr({map:bt,transparent:!0,depthWrite:!1,blending:gr}));Nt.scale.set(1.6,1.6,1),Nt.position.z=.4,At.add(Nt);let Ot=new ce(new ws(.52,24),new Be({color:new se(3807754)}));Ot.position.z=1.5,kt.add(Ot,At),ht.add(kt),x.brazier={group:kt,fire:At,embers:Ot,at:{x:jt,y:Ut,z:Rt+1.6}}}return x.globe={ball:ct,tex:Z,painted:!!e?.state.ready},x.spin=Y,ht};return{sync:()=>{let F=d.city?.group??null;if(F!==x.on&&(x.on=F,F&&d.city.hall)){x.group=vt(),F.add(x.group);let ht=d.city.hall;n.hotspots.length=0;for(let Z of x.boards)n.hotspots.push({id:Z.id,x:Z.at.x,y:Z.at.y,z:Z.at.z,reach:15,size:Z.at.w,label:Z.label,act:()=>X(Z.id)});{let Z=x.brazier.at;n.hotspots.push({id:"multiplayer",x:Z.x,y:Z.y,z:Z.z,reach:9,size:1.8,get label(){return i.multiplayerOn?.()?"Leave multiplayer":"Multiplayer"},act:()=>i.multiplayer?.()})}n.hotspots.push({id:"globe",x:ht.globe.x,y:ht.globe.y,z:ht.globe.z,reach:13,size:ht.globe.r*2.4,label:"Open the globe",act:()=>i.openGlobe?.()})}if(!(!x.group||!d.active)){if(x.globe&&!x.globe.painted&&e?.state.ready&&(x.globe.tex.image=ot(),x.globe.tex.needsUpdate=!0,x.globe.painted=!0,s.stamp++),x.brazier){let ht=!!i.multiplayerOn?.();if(x.brazier.fire.visible=ht,x.brazier.embers.material.color.setHex(ht?16734746:3807754),ht&&n.on){let Z=s.time;x.brazier.fire.scale.set(1+Math.sin(Z*11)*.06,1+Math.cos(Z*9)*.06,1+Math.sin(Z*7.3)*.12),s.stamp++}}n.on&&Math.hypot(n.state.x,n.state.y)<d.city.hall.RG&&(x.spin.rotation.z=Jy+(s.time-(x.since??=s.time))*.05,s.stamp++)}},show:X,boards:k,promptFor:G,state:x,counts:{work:dt.length,openSearches:W.length,unscored:j.length,lost:lt.length}}};var cc=["HALL22","HALL23","HALL24","HALL25","HALL26","HALL27","HALL28","HALL29"],Qy=30,gp=38,t1=8,e1=900,qh=280,vp=i=>{let t=0;for(let e of String(i))t=(t*31+e.charCodeAt(0))%360;return t},xp=(i,{walk:t})=>{let{world:e,$:n,esc:s,toast:r,st:a}=i,l=e.city,o=n("#meet"),h=n("#people"),u=new URLSearchParams(location.search).get("room"),c={state:"off",drawn:null,me:null,members:new Map,socket:null,room:0,seats:8,ice:[],batch:!1,lastPos:"",sentAt:0,saidAt:0,lines:[],muted:new Set,voice:{on:!1,stream:null,mic:!0,peers:new Map},group:null,on:null,tries:0},f=E=>{c.socket?.readyState===1&&c.socket.send(JSON.stringify(E))},d='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8" rx="2.5"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.500v2"/></svg>',p=()=>{if(c.drawn!==c.state&&(c.drawn=c.state,o.dataset.state=c.state,o.innerHTML=c.state==="on"?`<div class="mt-log" id="mt-log"></div><form class="mt-say" id="mt-say"><input id="mt-text" maxlength="${qh}" placeholder="Message" autocomplete="off" enterkeyhint="send" aria-label="Write to the room"><button class="mt-mic" id="mt-mic" type="button" data-act="mt-voice">${d}</button><span class="mt-n" id="mt-n"></span></form>`:["signed-out","off","elsewhere"].includes(c.state)?'<button class="btn glass" data-act="mt-start">Multiplayer</button>':c.state==="full"?'<span class="mt-state">Rooms are full</span>':""),c.state==="on"){let E=n("#mt-log"),O=n("#mt-mic"),G=n("#mt-n");E.innerHTML=c.lines.slice(-6).map(rt=>`<p${rt.mine?' class="mine"':""}><b>${s(rt.name)}</b> ${s(rt.text)}</p>`).join(""),E.scrollTop=E.scrollHeight,O.className=`mt-mic${c.voice.on?c.voice.mic?" on":" muted":""}`,O.setAttribute("aria-label",c.voice.on?c.voice.mic?"Mute my microphone":"Unmute my microphone":"Talk with people near me"),O.setAttribute("aria-pressed",String(c.voice.on&&c.voice.mic)),G.textContent=`${c.members.size+1} here`}o.hidden=!o.innerHTML||!t.on},v=n("#here"),g="",m=()=>{let E=[...c.members.values()],O=c.state==="on"?E.map(G=>G.id).join(","):"";O!==g&&(g=O,v.hidden=!O,O&&(v.setAttribute("aria-label",`${E.length+1} here: ${[c.me?.name,...E.map(G=>G.name)].filter(Boolean).join(", ")}`),v.innerHTML=`${E.slice(0,3).map(G=>G.avatar?`<img src="${s(G.avatar)}" alt="">`:`<i style="background:hsl(${vp(G.id)} 55% 55%)">${s((G.name||"?")[0].toUpperCase())}</i>`).join("")}<b>${E.length+1}</b>`))},x=(E,O,G=!1)=>{c.lines.push({name:E,text:O,mine:G}),c.lines.length>40&&c.lines.shift(),p()},_=E=>{let O=new ke,G=new se().setHSL(vp(E)/360,.55,.62),rt=G.clone().multiplyScalar(.55),X=new ce(new ia(.27,.86,4,10),new Be({color:G}));X.rotation.x=Math.PI/2,X.position.z=.72;let ot=new ce(new En(.21,12,10),new Be({color:G.clone().multiplyScalar(1.15)}));ot.position.z=1.52;let vt=new ce(new Ms(.09,.26,8),new Be({color:rt}));vt.position.set(0,.24,1.5);let mt=new ce(new Xn(.42,.5,24),new Be({color:new se(1.4,1.1,.4),transparent:!0,opacity:0}));return mt.position.z=.03,O.add(X,ot,vt,mt),O.userData.ring=mt,O},b=E=>{let O=document.createElement("div");return O.className="person",O.innerHTML=`<i></i><span>${s(E.name)}</span>`,h.append(O),O},M=E=>{if(!E?.id||E.id===c.me?.id||c.members.has(E.id))return c.members.get(E?.id);let O={id:E.id,name:E.name||E.username||"Someone",username:E.username,avatar:E.avatar??null,x:0,y:0,dir:0,tx:null,ty:0,tdir:0,voice:!1,talking:0,seen:0,fig:_(E.id),tag:null};return O.fig.visible=!1,O.tag=b(O),c.group?.add(O.fig),c.members.set(E.id,O),O},C=E=>{let O=c.members.get(E);O&&(O.fig.removeFromParent(),O.tag.remove(),D(E),c.members.delete(E),p(),e.stamp++)},y=(E,O)=>{let G=c.members.get(E);!G||!Array.isArray(O)||!O.slice(0,3).every(Number.isFinite)||([G.tx,G.ty,G.tdir]=O,G.voice=!!(O[3]&1),G.seen=performance.now(),G.fig.visible===!1&&(G.x=G.tx,G.y=G.ty,G.dir=G.tdir,G.fig.visible=!0))},T=async()=>u?{url:u.replace(/[A-Z2-9]{6}$/,cc[c.room]),token:`dev.${encodeURIComponent(new URLSearchParams(location.search).get("as")??"Guest")}`,ice:[],room:cc[c.room]}:Si("roomToken",{room:cc[c.room]}),U=async(E=!1)=>{if(c.state!=="on"){if(c.state==="joining"){E&&(c.wantAsk=!0);return}c.state="joining",p();try{let O=await T().catch(async rt=>{if(u||rt?.code!=="denied")throw rt;return await Si("viewer"),T()});c.ice=O.ice??[],c.seats=O.seats??8;let G=c.socket=new WebSocket(`${O.url}?token=${encodeURIComponent(O.token)}`);G.onmessage=rt=>{let X;try{X=JSON.parse(rt.data)}catch{return}S(X)},G.onclose=rt=>{if(c.socket===G){c.socket=null;for(let X of[...c.members.keys()])C(X);if(rt.code===4003&&c.room<cc.length-1)return c.room++,c.state="off",U();if(rt.code===4003)return c.state="full",p();if(rt.code===4001)return c.state="off",p();c.state="off",c.tries++<6?setTimeout(()=>{c.state==="off"&&U()},1500*c.tries):p()}}}catch(O){if(c.state=O?.code==="signed_out"?"signed-out":O?.code==="unsupported"?"off":"ask",!E&&c.wantAsk&&c.state==="ask")return c.wantAsk=!1,U(!0);E&&O?.code&&!["denied","cancelled","signed_out"].includes(O.code)&&r("The room is not answering"),p()}}},S=E=>{if(E.t==="welcome"){c.me=E.you,c.state="on",c.tries=0,c.batch=E.seats!==void 0,E.seats&&(c.seats=E.seats);for(let O of E.members??[])M(O);for(let[O,G]of Object.entries(E.pos??{}))y(O,G);c.lastPos="",p()}else if(E.t==="join"){let O=M(E.member);O&&x(O.name,"came in"),c.lastPos=""}else if(E.t==="leave"){let O=c.members.get(E.id);O&&x(O.name,"left"),C(E.id)}else if(E.t==="pos")for(let[O,G]of Object.entries(E.from??{}))y(O,G);else if(E.t==="msg"){let O=E.data,G=c.members.get(E.from);if(!G||!O||typeof O!="object")return;Array.isArray(O.p)?y(E.from,O.p):typeof O.c=="string"&&!c.muted.has(E.from)?(x(G.name,O.c.slice(0,qh)),i.sound?.sfx("tick",.12)):O.rtc&&B(E.from,O.rtc)}else E.t==="error"&&E.code==="invalid"&&c.batch&&(c.batch=!1)},V=()=>{let E=c.socket;c.socket=null,E?.close(1e3);for(let O of[...c.members.keys()])C(O);lt(),(c.state==="on"||c.state==="joining")&&(c.state="off"),c.drawn=null,p()},K=E=>{let O=E.trim().slice(0,qh),G=performance.now();return!O||c.state!=="on"?!1:G-c.saidAt<e1?(r("A moment between lines"),!1):(c.saidAt=G,f({t:"send",data:{c:O}}),x(c.me?.name??"You",O,!0),!0)},it=c.voice,D=E=>{let O=it.peers.get(E);if(O){it.peers.delete(E);try{O.pc.close()}catch{}O.out?.disconnect(),O.el?.remove()}},W=E=>{if(it.peers.has(E))return it.peers.get(E);let O=new RTCPeerConnection({iceServers:c.ice}),G={pc:O,id:E,out:null,gain:null,pan:null,level:null,el:null,polite:String(c.me.id)>String(E),making:!1};if(it.peers.set(E,G),it.stream)for(let rt of it.stream.getAudioTracks())O.addTrack(rt,it.stream);else O.addTransceiver("audio",{direction:"recvonly"});return O.onicecandidate=rt=>{rt.candidate&&f({t:"send",to:E,data:{rtc:{ice:rt.candidate}}})},O.onnegotiationneeded=async()=>{try{G.making=!0,await O.setLocalDescription(),f({t:"send",to:E,data:{rtc:{sdp:O.localDescription}}})}catch{}finally{G.making=!1}},O.ontrack=rt=>{let X=rt.streams[0]??new MediaStream([rt.track]),ot=i.sound?.context;G.el=Object.assign(document.createElement("audio"),{srcObject:X,muted:!!ot,autoplay:!0}),G.el.play?.().catch(()=>{}),ot&&(G.out=ot.createMediaStreamSource(X),G.gain=ot.createGain(),G.gain.gain.value=0,G.pan=ot.createStereoPanner(),G.level=ot.createAnalyser(),G.level.fftSize=256,G.out.connect(G.level),G.out.connect(G.gain).connect(G.pan).connect(i.sound.master))},O.onconnectionstatechange=()=>{["failed","closed"].includes(O.connectionState)&&D(E)},G},B=async(E,O)=>{if(!it.on)return;let G=W(E),rt=G.pc;try{if(O.sdp){if(O.sdp.type==="offer"&&(G.making||rt.signalingState!=="stable")&&!G.polite)return;await rt.setRemoteDescription(O.sdp),O.sdp.type==="offer"&&(await rt.setLocalDescription(),f({t:"send",to:E,data:{rtc:{sdp:rt.localDescription}}}))}else O.ice&&await rt.addIceCandidate(O.ice).catch(()=>{})}catch{}},j=async()=>{if(!it.on){try{it.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),it.mic=!0}catch{it.stream=null,it.mic=!1,r("No microphone: you can listen")}it.on=!0,c.lastPos="",i.sound?.context.state!=="running"&&i.sound?.context.resume().catch(()=>{}),p()}},lt=()=>{if(it.on){it.on=!1;for(let E of[...it.peers.keys()])D(E);for(let E of it.stream?.getTracks()??[])E.stop();it.stream=null,c.lastPos="",p()}},et=()=>{it.mic=!it.mic;for(let E of it.stream?.getAudioTracks()??[])E.enabled=it.mic;p()};document.addEventListener("visibilitychange",()=>{if(document.hidden&&it.on&&it.stream){it.mic=!1;for(let E of it.stream.getAudioTracks())E.enabled=!1;p()}});let pt=new ft,dt=E=>{let O=l.city?.group??null;if(O!==c.on)if(c.on=O,O){c.group=new ke,c.group.name="people",O.add(c.group);for(let Y of c.members.values())c.group.add(Y.fig)}else c.group=null;if(m(),!t.on){o.hidden||(o.hidden=!0,h.hidden=!0);return}h.hidden=!1,o.hidden&&p();let G=t.state,rt=performance.now();if(c.state==="on"){let Y=[Math.round(G.x*10)/10,Math.round(G.y*10)/10,Math.round(G.dir*100)/100,it.on?1:0],yt=Y.join(",");(yt!==c.lastPos&&rt-c.sentAt>(c.batch?200:330)||rt-c.sentAt>3e3)&&(c.lastPos=yt,c.sentAt=rt,f(c.batch?{t:"pos",data:Y}:{t:"send",data:{p:Y}}))}if(!c.members.size)return;let X=l.camera,ot=e.renderer.domElement,vt=ot.clientWidth,mt=ot.clientHeight,F=1-Math.exp(-E*9),[ht,Z]=t.forward(),ct=[];for(let Y of c.members.values()){if(Y.tx==null)continue;let yt=Y.x+Y.y;Y.x+=(Y.tx-Y.x)*F,Y.y+=(Y.ty-Y.y)*F;let Ct=Y.tdir-Y.dir;Ct=Math.atan2(Math.sin(Ct),Math.cos(Ct)),Y.dir+=Ct*F;let jt=l.localFloor(Y.x,Y.y)??G.z;Y.fig.position.set(Y.x,Y.y,jt),Y.fig.rotation.z=-Y.dir-l.turn,Math.abs(Y.x+Y.y-yt)>.001&&e.stamp++;let Ut=Math.hypot(Y.x-G.x,Y.y-G.y);pt.set(Y.x,Y.y,jt+1.95).applyMatrix4(O.matrixWorld).project(X);let Rt=pt.z<1&&pt.z>-1&&Math.abs(pt.x)<1.05&&Math.abs(pt.y)<1.05&&Ut<160;Y.tag.style.display=Rt?"":"none",Rt&&(Y.tag.style.transform=`translate(${(pt.x+1)/2*vt}px, ${(1-pt.y)/2*mt}px) translate(-50%, -100%)`,Y.tag.style.opacity=Ut<60?1:.6);let It=it.peers.get(Y.id);if(It?.gain){let kt=Ut<3?1:Math.max(0,1-(Ut-3)/(gp-3))**1.6,J=((Y.x-G.x)*Z-(Y.y-G.y)*ht)/Math.max(Ut,.5);It.gain.gain.value+=((c.muted.has(Y.id)?0:kt)-It.gain.gain.value)*F,It.pan.pan.value+=(Math.max(-.85,Math.min(.85,J))-It.pan.pan.value)*F;let zt=new Uint8Array(It.level.fftSize);It.level.getByteTimeDomainData(zt);let At=0;for(let Bt of zt)At=Math.max(At,Math.abs(Bt-128));Y.talking+=((At>9?1:0)-Y.talking)*Math.min(1,E*8)}else Y.talking*=.9;Y.fig.userData.ring.material.opacity=Y.talking,Y.tag.classList.toggle("talking",Y.talking>.4),Y.voice&&ct.push([Ut,Y.id])}if(it.on&&c.state==="on"){ct.sort((yt,Ct)=>yt[0]-Ct[0]);let Y=new Set(ct.filter(([yt])=>yt<Qy).slice(0,t1).map(([,yt])=>yt));for(let yt of Y)!it.peers.has(yt)&&String(c.me.id)<String(yt)&&W(yt);for(let[yt]of it.peers){let Ct=c.members.get(yt);(!Ct||!Ct.voice||Math.hypot(Ct.x-G.x,Ct.y-G.y)>gp)&&D(yt)}}},at=()=>{c.state==="on"||c.state==="joining"||(c.state=!hs&&!u?"elsewhere":a.host&&!a.host.signedIn&&!u?"signed-out":"off",p())},k=()=>{if(c.state==="on"||c.state==="joining")return V(!0);if(c.state==="signed-out")return Si("signIn").catch(()=>r("Sign-in is not answering"));if(c.state==="elsewhere")return open(`https://abstracts.co/a/${i.data.open?.community??"atlantis"}?a_hall=1`,"_blank","noopener");c.tries=0,U(!0).then(()=>{c.state==="ask"&&(c.state="off",p())})};return o.addEventListener("click",E=>{let O=E.target.closest("[data-act]")?.dataset.act;O==="mt-start"?k():O==="mt-join"?U(!0):O==="mt-voice"&&(it.on?it.stream?et():lt():j())}),o.addEventListener("submit",E=>{E.preventDefault();let O=n("#mt-text");O&&K(O.value)&&(O.value="",O.blur())}),addEventListener("keydown",E=>{t.on&&c.state==="on"&&(E.code==="KeyT"||E.code==="Slash")&&!E.target.closest?.("input, textarea")&&(n("#mt-text")?.focus(),E.preventDefault()),E.code==="Escape"&&E.target.id==="mt-text"&&E.target.blur()}),{tick:dt,arrive:at,choose:k,leave:V,join:U,say:K,voiceOn:j,voiceOff:lt,mute:et,state:c,get count(){return c.members.size}}};var zs=[{key:"sank",claim:"sank-in-a-day-and-night",name:"It sank",word:"sank",yes:"Land at Plato's date, open sea today.",no:"It did not go under."},{key:"atlantic",claim:"beyond-pillars",name:"Beyond the Pillars",word:"beyond the Pillars",yes:"On the Atlantic side, outside the strait.",no:"Not on the Atlantic, or inside the strait."},{key:"plain",claim:"great-plain",name:"Great plain",word:"great plain",yes:"Level low ground of the size he gives.",no:"No level plain of his size here."},{key:"mountains",claim:"mountains-shelter-north",name:"Mountains north",word:"mountains north",yes:"Higher ground on the north side than the south.",no:"No mountains sheltering it from the north."},{key:"island",claim:"larger-than-libya-and-asia",name:"An island",word:"island",yes:"The land it stood on was an island then.",no:"Part of a continent then, not an island."}],n1=i=>{let t=0;for(let e=i;e;e>>=1)t+=e&1;return t},i1=i=>{let t=(i??"").split(",").map(e=>e.trim()).filter(Boolean);return t.length>2?`${t[0]}, ${t[t.length-1]}`:t.join(", ")},yp=i=>{let{world:t,data:e,st:n,$:s,esc:r,link:a,toast:l,setSheet:o,body:h,eyebrow:u,stage:c}=i,{control:f,globe:d}=t,p=d.shared,v=e.worldfit,g=e.cas;if(!v)return null;let m=s("#hunt"),x=s("#reticle"),_={forced:!1,ready:!1,n:0,score:null,bits:null,state:null,on:!1,last:"",claim:null,glow:1},b=at=>g?.claims.find(k=>k.id===at),M=at=>(b(at.claim)?.ref??"").split(";")[0];(async()=>{let at=t.phone?"worldfit-2k.png":"worldfit.png",k=await fetch(globalThis.__WORLDFIT__?.[at]??(globalThis.__ASSETS__||"./")+at);if(!k.ok)throw new Error(`worldfit: HTTP ${k.status}`);let E=await createImageBitmap(await k.blob(),{premultiplyAlpha:"none",colorSpaceConversion:"none"}),O=E.width,G=512,rt=new Uint8Array(O*O),X=new Uint8Array(O*O),ot=new Uint8Array(O*O),mt=(typeof OffscreenCanvas>"u"?Object.assign(document.createElement("canvas"),{width:O,height:G}):new OffscreenCanvas(O,G)).getContext("2d",{willReadFrequently:!0});for(let Z=0;Z<O;Z+=G){mt.clearRect(0,0,O,G),mt.drawImage(E,0,Z,O,G,0,0,O,G);let ct=mt.getImageData(0,0,O,G).data;for(let Y=0,yt=Z*O;Y<O*G;Y++,yt++)rt[yt]=ct[Y*4],X[yt]=ct[Y*4+1],ot[yt]=ct[Y*4+2]}E.close?.();let F=new Uint8Array(O*O);for(let Z=0;Z<O;Z++)for(let ct=0;ct<O;ct++){let Y=0;for(let yt=-1;yt<=1;yt++){let Ct=Z+yt<0?0:Z+yt>=O?O-1:Z+yt;for(let jt=-1;jt<=1;jt++)Y+=rt[Ct*O+(ct+jt+O)%O]*(jt||yt?1:2)}F[Z*O+ct]=Y*5}let ht=new Tn(F,O,O,gi,an);ht.minFilter=rn,ht.magFilter=Ae,ht.wrapS=Ni,ht.wrapT=wn,ht.generateMipmaps=!0,ht.needsUpdate=!0,p.tHeat.value=ht,p.uHeatLod.value=O<v.grid.size?-1:0,Object.assign(_,{n:O,bits:X,state:ot,ready:!0}),t.stamp++})().catch(at=>{console.warn(at.message),m.classList.remove("open")});let y=(at,k)=>{if(!_.ready)return null;let E=_.n,O=$t(Math.floor((at+180)/360*E),0,E-1),G=$t(k,-85,85)*_t,rt=$t(Math.floor((1-Math.log(Math.tan(G)+1/Math.cos(G))/Math.PI)/2*E),0,E-1),X=_.bits[rt*E+O],ot=_.state[rt*E+O];return{state:ot,bits:X,score:ot===0?0:n1(X),clues:zs.map((vt,mt)=>!!(X&1<<mt))}},T={sank:"Sank",atlantic:"Atlantic",plain:"Plain",mountains:"Mountains",island:"Island"};m.innerHTML=`<div class="h-main"><b id="h-score"></b><div class="h-clues">${zs.map((at,k)=>`<span class="h-c" data-j="${k}"><i></i>${r(T[at.key])}</span>`).join("")}</div><button class="btn primary" data-act="h-claim">Check this spot</button></div>`;let S=()=>{let at=n.hunt&&_.ready&&(!i.busy()||_.forced);at!==_.on&&(_.on=at,m.classList.toggle("open",at),x.classList.toggle("open",at),c.classList.toggle("hunting",at),i.sound?.deep(at));let k=n.hunt&&_.ready?at||n.sheet==="claim"||!s("#intro").classList.contains("gone")?_.glow:.3*_.glow:0;if(Math.abs(p.uHeat.value-k)>.004&&(p.uHeat.value+=(k-p.uHeat.value)*.12,t.stamp++),!at)return;x.style.left=`${50+f.shift[0]*50}%`,x.style.top=`${50-f.shift[1]*50}%`;let E=f.lat/_t,O=f.lon/_t,G=y(O,E),rt=`${G.state}|${G.bits}`;if(rt===_.last)return;_.last=rt;let X=s("#h-score");X.innerHTML=G.state===0?"":`${G.score}<small>/5</small>`,m.querySelector('[data-act="h-claim"]').disabled=G.state===0,X.className=`s${G.state===2?G.score:0}`,X.setAttribute("aria-label",G.state===0?"Open sea at Plato's date too: nothing here to sink":G.state===1?`${G.score} of 5. Dry land then and now: it never sank`:`${G.score} of 5, on land that has gone under`),x.className=`open s${G.state===2?G.score:0}`;for(let ot of m.querySelectorAll(".h-c"))ot.classList.toggle("on",G.state!==0&&G.clues[Number(ot.dataset.j)]);i.sound?.read(G)},V=null,K=(at,k)=>{let E=yn(at*_t,k*_t),O=performance.now(),G=$t(f.range/1e3*.75,30,3500);cancelAnimationFrame(V);let rt=()=>{let X=$t((performance.now()-O)/1700,0,1);p.uScan.value.set(E[0],E[1],E[2],Math.max(G*(1-(1-X)**2.2),.01)),p.uScanA.value=1.1*(1-X)**1.3,t.stamp++,X<1?V=requestAnimationFrame(rt):p.uScanA.value=0};rt()},it=at=>{let k=v.totals;return k.by_score.filter(O=>O.score<at).reduce((O,G)=>O+G.km2,0)/k.land_that_sank_km2*100},D=(at,k)=>`The hunt for Atlantis \u{1F531} ${at.score}/5
${at.clues.map(E=>E?"\u{1F7E9}":"\u{1F7E5}").join("")}
${zs.map(E=>E.word).join(" \xB7 ")}
${Cn(at.lat,at.lon,2)}${at.name?` \xB7 ${at.name}`:""}
${k}`,W=at=>i.shareUrl({hunt:`${at.lat.toFixed(3)},${at.lon.toFixed(3)}`},!0),B={copy:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2"/><path d="M11.500 3.800V3.500a1.500 1.500 0 0 0-1.500-1.500H4.500A1.500 1.500 0 0 0 3 3.500V10a1.500 1.500 0 0 0 1.500 1.500h.300"/></svg>',x:'<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M9.300 6.900 14.500 1h-1.300L8.700 6.100 5.100 1H1l5.500 7.800L1 15h1.300l4.800-5.400L10.900 15H15L9.300 6.900Zm-1.700 1.900-.5-.800L2.800 2h1.800l3.500 4.900.5.800 4.600 6.400h-1.800L7.600 8.800Z"/></svg>',save:'<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.500v8.500m0 0 3.200-3.200M9 11 5.800 7.800M3 13.500v.500A1.500 1.500 0 0 0 4.500 15.500h9A1.500 1.500 0 0 0 15 14v-.500"/></svg>'},j=()=>{let at=_.claim,k=v.places;u.textContent="Landscape match";let E=k.filter(G=>G.score<at.score).length,O=at.state===0?"Open sea at Plato's date too. There was no land here to sink.":at.state===1?"Dry land then and now. It never sank, which is the heart of the story.":`Better than ${it(at.score).toFixed(at.score>=4?1:0)}% of all the land that has gone under. Beats ${E} of the ${k.length} famous claims.`;h.innerHTML=`
      <div class="c-hero s${at.state===2?at.score:0}"><b>${at.state===0?"\u2013":`${at.score}<small>/5</small>`}</b><div class="sq">${at.clues.map(G=>`<i class="${G?"y":"n"}"></i>`).join("")}</div></div>
      <h2 class="c-name">${r(at.name??Cn(at.lat,at.lon,2))}</h2>
      <div class="c-sub">${at.name?Cn(at.lat,at.lon,2):at.state===2?"Sunken land":at.state===1?"Dry land":"Open sea"}</div>
      <div class="c-list">${zs.map((G,rt)=>`<details class="c-row ${at.clues[rt]?"y":"n"}"><summary><i></i>${r(G.name)}<small>${r(M(G))}</small></summary><p>${r(at.state===0?"No land here at that date.":at.clues[rt]?G.yes:G.no)}${b(G.claim)?.quote?` <em class="q">\u201C${r(b(G.claim).quote)}\u201D</em>`:""}</p></details>`).join("")}</div>
      <div class="c-acts"><button class="btn primary" data-act="h-share">Share</button><button class="ib" data-act="h-copy" aria-label="Copy" aria-label="Copy">${B.copy}</button><button class="ib" data-act="h-x" aria-label="Post on X" aria-label="Post on X">${B.x}</button><button class="ib" data-act="h-pic" aria-label="Save the picture" aria-label="Save the picture">${B.save}</button></div>
      <details class="c-more"><summary>More</summary><div class="row"><button class="btn" data-act="h-fit">Measure the ground</button><button class="btn" data-act="h-city">Stand Plato's city</button><button class="btn" data-act="h-known">Already recorded?</button><button class="btn" data-act="h-rules">How it's scored</button></div></details>

      <pre class="c-share" id="c-share" hidden>${r(D(at,W(at)))}</pre>`},lt=async(at,k,E=!1)=>{if(!_.ready)return;let O=y(k,at),G=v.best.find(rt=>rt.near?.name&&!/^off /.test(rt.near.name)&&Math.abs(rt.lat-at)<1.2&&Math.abs(rt.lon-k)<1.2&&O.state===2);_.claim={lat:at,lon:k,...O,name:G?G.near.name:null,named:!!G},n.legend=n.place=null,i.leaveScene(),o("claim"),h.scrollTop=0,j(),E&&f.flyTo({lon:k*_t,lat:at*_t,range:$t(f.range,6e4,9e5),tilt:30*_t,heading:0},2.4),setTimeout(()=>{K(k,at),i.sound?.sfx("ping",.8),O.state===2&&O.score>=4&&setTimeout(()=>i.sound?.sfx("reveal",.5),500)},E?2200:60);try{let X=(await fetch(`https://photon.komoot.io/reverse?lang=en&lat=${at}&lon=${k}`,{signal:AbortSignal.timeout(6e3)}).then(vt=>vt.json())).features?.[0]?.properties,ot=X&&[X.name??X.county??X.state,X.country].filter(Boolean).join(", ");ot&&_.claim&&_.claim.lat===at&&!_.claim.named&&n.sheet==="claim"&&(_.claim.name=`Near ${ot}`,j())}catch{}},et=()=>{u.textContent="Top scores";let at=(rt,X)=>`<button class="prow" data-act="h-go" data-ll="${rt.lat},${rt.lon}"><b class="lb s${rt.top}">${rt.top}/5</b><span class="pn">${r(rt.near?.name?i1(rt.near.name):Cn(rt.lat,rt.lon,1))}</span><small>${rt.km2.toLocaleString("en")} km\xB2</small></button>`,k=v.best.filter(rt=>!rt.near_old_ice).slice(0,8),E=v.best.filter(rt=>rt.near_old_ice).slice(0,5),O=v.totals,G=(O.land_that_sank_km2/1e6).toFixed(1);h.innerHTML=`
      <h2>Best on Earth</h2>
      <p class="lead">${G} million km\xB2 of land has gone under since Plato's date. Every 10 km of it is scored on five clues. <b>Nothing scores 5.</b></p>
      <div class="lb-bars">${O.by_score.map(rt=>`<div><b class="lb s${rt.score}">${rt.score}/5</b><i style="width:${Math.max(1.5,rt.km2/O.land_that_sank_km2*100).toFixed(1)}%"></i><small>${rt.km2>=1e6?`${(rt.km2/1e6).toFixed(1)} million km\xB2`:rt.km2>=500?`${Math.round(rt.km2/1e3).toLocaleString("en")} thousand km\xB2`:"none"}</small></div>`).join("")}</div>
      <h3>The best matches</h3>
      ${k.map(at).join("")}
      ${E.length?`<h3>Near the old ice sheets</h3>${E.map(at).join("")}`:""}
      <h3>The famous claims, by the same rules</h3>
      ${v.places.map(rt=>`<button class="prow" data-act="a-place" data-id="${r(rt.id)}"><b class="lb s${rt.score}">${rt.score}/5</b><span class="pn">${r(i.shortName(rt.name))}</span><small>${r(rt.note?"open sea then":rt.clues.map(X=>zs.find(ot=>ot.key===X).word).join(", ")||"none")}</small></button>`).join("")}
      `},pt=()=>{u.textContent="How it's scored";let at=v.rules,k={sank:`The cell was land with the sea ${Math.abs(at.sea_then_m)} m lower, the middle of the range published for Plato's date, and is open sea today.`,atlantic:"The water it lies under is the Atlantic or a sea that opens to it, outside the Strait of Gibraltar.",plain:`At least ${Math.round(at.plain.share_needed*100)}% of a ${Math.round(at.plain.long_km)} by ${Math.round(at.plain.wide_km)} km box round it (his 3,000 by 2,000 stades) was land no more than ${at.plain.low_ground_max_m_above_today} m above today's sea.`,mountains:`The ground ${at.mountains.band_from_km} to ${at.mountains.band_to_km} km to its north averages at least ${at.mountains.north_mean_at_least_m} m, and at least ${at.mountains.north_minus_south_at_least_m} m more than the same band to its south.`,island:`The piece of land it belonged to then was smaller than ${(at.island.smaller_than_km2/1e6).toFixed(1)} million km\xB2: an island, not a continent. Plato says it was larger than Libya and Asia together; no sunken land comes near that.`};h.innerHTML=`
      <h2>Five clues the land can answer</h2>
      <p class="lead">Plato gives ${g?.claims.filter(E=>E.testable).length??27} details that could be checked. A map of heights can answer five of them for the whole planet, at 10 km a cell.</p>
      ${zs.map(E=>`<div class="c-row y"><i></i><span><b>${r(E.name)}</b> <small>${r(M(E))}</small><br>${r(k[E.key])}${b(E.claim)?.quote?`<br><em class="q">\u201C${r(b(E.claim).quote)}\u201D</em>`:""}</span></div>`).join("")}
      <h3>What this cannot tell you</h3>
      <ul class="plain">${v.limits.map(E=>`<li>${r(E)}</li>`).join("")}<li>The thresholds are ours. They are in <b>data/worldfit.json</b>, and <b>tools/make-worldfit.mjs</b> runs the whole thing again with others.</li></ul>
      <div class="row"><button class="btn" data-act="h-best">Best on Earth</button><button class="btn" data-act="close">Back to the hunt</button></div>`},dt=(at,k)=>{let E=_.claim;if(at==="h-claim")lt(f.lat/_t,f.lon/_t);else if(at==="h-best")n.legend=n.place=null,i.leaveScene(),o("best"),h.scrollTop=0,et();else if(at==="h-rules")n.legend=n.place=null,i.leaveScene(),o("rules"),h.scrollTop=0,pt();else if(at==="h-story")i.tour?.();else if(at==="h-go"){let[O,G]=k.dataset.ll.split(",").map(Number);lt(O,G,!0)}else if(at==="h-share")i.shareOut({text:D(E,""),url:W(E),both:D(E,W(E))});else if(at==="h-copy")navigator.clipboard?.writeText(D(E,W(E))).then(()=>l("Copied. Paste it anywhere."),()=>{s("#c-share").hidden=!1,l("Select the text and copy it")});else if(at==="h-x")window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(D(E,W(E)))}`,"_blank","noopener");else if(at==="h-pic")t.snap=O=>{if(!O)return l("Could not take the picture");let G=document.createElement("a");G.href=URL.createObjectURL(O),G.download=`atlantis-hunt-${E.lat.toFixed(2)}_${E.lon.toFixed(2)}.jpg`,G.click(),setTimeout(()=>URL.revokeObjectURL(G.href),4e3)},t.stamp++;else if(at==="h-fit")i.fitAt(E.lat,E.lon);else if(at==="h-city")i.standCity(E.lat,E.lon);else if(at==="h-known")i.checkKnown(E.lat,E.lon,20);else return!1;return!0};return m.addEventListener("click",at=>{let k=at.target.closest("[data-act]");k&&dt(k.dataset.act,k)}),{fit:y,claim:lt,scan:K,click:dt,tick:S,drawBest:et,state:_,CLUES:zs,get ready(){return _.ready},setGlow:at=>{_.glow=at}}};var _p={on:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="M12 6.500a3.500 3.500 0 0 1 0 5M13.800 4.500a6.300 6.300 0 0 1 0 9"/></svg>',off:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v4h2.800L9.500 14V4L5.800 7H3Z"/><path d="m12.500 7 3.500 4M16 7l-3.500 4"/></svg>'},hc=2.5,s1=.006,r1=.04,a1=.14,bp=i=>Float32Array.from({length:48},(t,e)=>i(e/47*Math.PI/2)),o1=bp(Math.sin),l1=bp(Math.cos),wp=i=>{let{data:t,$:e}=i,n=t.audio,s=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n||!s)return null;let r=e("#b-sound"),a={on:!0,ac:null,master:null,buffers:new Map,voice:null,want:new Map,loops:new Map,last:{score:-1,lit:-1,lockAt:0,tickAt:0,stepAt:0},log:[]},l=(D,W={})=>{globalThis.__AUDIOLOG__&&a.log.push({t:performance.now(),kind:D,...W})},o=D=>globalThis.__AUDIO__?.[D]??`${globalThis.__ASSETS__||"./"}audio/${D}`,h=async D=>{let W=o(D);if(W.startsWith("data:")){let j=atob(W.slice(W.indexOf(",")+1)),lt=new Uint8Array(j.length);for(let et=0;et<j.length;et++)lt[et]=j.charCodeAt(et);return lt.buffer}let B=await fetch(W);if(!B.ok)throw new Error(`${D}: ${B.status}`);return B.arrayBuffer()},u=()=>{if(a.ac)return a.ac;let D=a.ac=new s({latencyHint:"interactive"});a.master=D.createGain();let W=D.createDynamicsCompressor();return W.threshold.value=-9,W.knee.value=6,W.ratio.value=14,W.attack.value=.003,W.release.value=.22,a.master.connect(W).connect(D.destination),D},c=()=>{let D=u();return D.state!=="running"&&D.resume().then(y).catch(()=>{}),D.state==="running"},f=D=>(a.buffers.has(D)||a.buffers.set(D,h(D).then(W=>u().decodeAudioData(W)).catch(()=>null)),a.buffers.get(D)),d=(D=[])=>{for(let W of D){let B=n.narration?.[Da(W)];B&&f(B.file)}},p=(D,{volume:W=1,offset:B=0,at:j=0,fadeIn:lt=s1,out:et=a.master}={})=>{let pt=a.ac,dt=pt.createBufferSource(),at=pt.createGain();dt.buffer=D;let k=Math.max(pt.currentTime+.005,j),E=Math.max(.05,D.duration-B),O=Math.min(lt,E/3),G=Math.min(r1,E/3);return at.gain.setValueAtTime(0,k),at.gain.linearRampToValueAtTime(W,k+O),at.gain.setValueAtTime(W,k+E-G),at.gain.linearRampToValueAtTime(0,k+E),dt.connect(at).connect(et),dt.start(k,B),{node:dt,gain:at,t0:k,dur:E,offset:B}},v=(D,W=a1)=>{let B=a.ac,j=B.currentTime;if(!(j>=D.t0+D.dur)){D.gain.gain.cancelScheduledValues(j),D.gain.gain.setValueAtTime(D.gain.gain.value,j),D.gain.gain.linearRampToValueAtTime(0,j+W);try{D.node.stop(j+W+.03)}catch{}}},g=(D,W=0)=>{m();let B=n.narration?.[Da(D)];if(!B)return 0;if(a.on){let j=a.voice={clip:B,at:W,playing:null,paused:!1};W<B.seconds-.2&&f(B.file).then(lt=>{a.voice===j&&!j.paused&&lt&&a.on&&c()&&(j.playing=p(lt,{offset:W,fadeIn:W?.05:void 0}),l("say",{file:B.file,volume:1,offset:W}))})}return B.seconds},m=()=>{let D=a.voice;a.voice=null,D?.playing&&(v(D.playing),l("hush",{file:D.clip.file}))},x=()=>{let D=a.voice;!D||D.paused||(D.paused=!0,D.playing&&(D.at=Math.min(D.clip.seconds,D.playing.offset+Math.max(0,a.ac.currentTime-D.playing.t0)),v(D.playing,.09),D.playing=null,l("hush",{file:D.clip.file})))},_=()=>{let D=a.voice;if(!D||!D.paused)return;D.paused=!1;let W=Math.max(0,D.at-.25);a.on&&W<D.clip.seconds-.1&&f(D.clip.file).then(B=>{a.voice===D&&!D.paused&&B&&c()&&(D.playing=p(B,{offset:W,fadeIn:.06}),l("say",{file:D.clip.file,volume:1,offset:W}))})},b=()=>{let D=a.voice,W=D?.playing;return{clip:D?.clip.file??null,paused:!!D?.paused,playing:!!W&&a.ac.currentTime<W.t0+W.dur,at:W?W.offset+Math.max(0,a.ac.currentTime-W.t0):D?.at??0}},M=(D,W=.6)=>{let B=n.sfx?.[D];!B||!a.on||(l("sfx",{file:B.file,volume:W}),f(B.file).then(j=>{j&&a.on&&c()&&p(j,{volume:W})}))},C=(D,W,B=.25)=>{if(!n.sfx?.[D])return;let j=a.want.get(D);W?j!==B&&(a.want.set(D,B),y()):j!==void 0&&(a.want.delete(D),y())};function y(){let D=a.ac;for(let[W,B]of a.loops){let j=a.on?a.want.get(W):void 0;if(j===void 0){if(a.loops.delete(W),l("loop-off",{file:B.file}),B.gain){let lt=D.currentTime;B.gain.gain.cancelScheduledValues(lt),B.gain.gain.setValueAtTime(B.gain.gain.value,lt),B.gain.gain.linearRampToValueAtTime(0,lt+1.5);for(let et of B.parts)try{et.node.stop(lt+1.6)}catch{}}}else j!==B.volume&&B.gain&&(B.volume=j,B.gain.gain.setTargetAtTime(j,D.currentTime,.4))}if(a.on){for(let[W,B]of a.want)if(!a.loops.has(W)){let j={name:W,file:n.sfx[W].file,volume:B,gain:null,parts:[],next:0,buffer:null};a.loops.set(W,j),l("loop-on",{file:j.file,volume:B,cross:hc}),f(j.file).then(lt=>{j.buffer=lt,y()})}}if(a.loops.size&&c())for(let W of a.loops.values()){if(!W.buffer)continue;let B=D.currentTime,j=W.buffer.duration,lt=j-hc;for(W.gain||(W.gain=D.createGain(),W.gain.gain.setValueAtTime(0,B),W.gain.gain.linearRampToValueAtTime(W.volume,B+1.2),W.gain.connect(a.master),W.next=B+.02);W.next<B+1.2;){let et=!W.parts.length,pt=D.createBufferSource(),dt=D.createGain(),at=W.next;pt.buffer=W.buffer,dt.gain.setValueAtTime(et?1:0,at),et||dt.gain.setValueCurveAtTime(o1,at,hc),dt.gain.setValueCurveAtTime(l1,at+lt,hc-.005),pt.connect(dt).connect(W.gain),pt.start(at),W.parts.push({node:pt,end:at+j}),W.next=at+lt}W.parts=W.parts.filter(et=>et.end>B-1)}}setInterval(()=>{a.loops.size&&y()},400),addEventListener("pointerdown",()=>{a.ac&&a.ac.state!=="running"&&c()},{capture:!0,passive:!0});let T=D=>{C("bed",D,.1),D&&(C("deep",!1),C("city",!1))},U=D=>C("deep",D&&!a.want.has("bed")&&!a.want.has("city"),.32),S=D=>{C("city",D==="city",.3),C("bed",D==="hall",.07),D&&C("deep",!1)},V=D=>{let W=performance.now();W-a.last.stepAt<(D?300:420)||(a.last.stepAt=W,M("step",.16+Math.random()*.05))},K=D=>{let W=performance.now(),B=D.state===0?0:D.clues.filter(Boolean).length,j=D.state===2&&D.score>=4;B>a.last.lit&&W-a.last.tickAt>140&&(M("tick",.3),a.last.tickAt=W),j&&a.last.score<4&&W-a.last.lockAt>1500&&(M("lock",.4),a.last.lockAt=W),a.last.lit=B,a.last.score=j?D.score:0},it=()=>{r.innerHTML=a.on?_p.on:_p.off,r.setAttribute("aria-label",a.on?"Turn sound off":"Turn sound on"),r.setAttribute("aria-pressed",String(a.on))};return r.hidden=!1,r.addEventListener("click",()=>{a.on=!a.on,a.on||m(),y(),it(),i.toast(a.on?"Sound on":"Sound off",1200)}),it(),{say:g,hush:m,pause:x,resume:_,prime:d,voiceState:b,sfx:M,loop:C,bed:T,deep:U,air:S,step:V,read:K,state:a,get on(){return a.on},get master(){return u(),a.master},get context(){return u()}}};var uc={lat:35.3,lon:-9.9,bearing:180},Qt=(i,t=document)=>t.querySelector(i),de=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Fa=(i,t)=>/^https?:\/\//.test(i??"")?`<a href="${de(i)}" target="_blank" rel="noopener">${de(t)}</a>`:de(t),us=i=>`${i<0?"\u2212":i>0?"+":""}${Math.abs(Math.round(i)).toLocaleString("en")} m`,c1=[{m:0,label:"Today"},{m:-50,label:"9600 BCE",note:"Plato's date for Atlantis; sources give 43 to 58 m below today"},{m:-95,label:"12,500 BCE",note:"before the fastest melt; our own estimate"},{m:-125,label:"19,000 BCE",note:"the low point of the last ice age; estimates run from 116 to 134 m below today"}];var h1={confirmed:0,mainstream:1,plausible:2,fringe:3,rejected:4,hoax:5},u1=["atlantis","el dorado","troy","titanic","doggerland","lost city of z","amber room","oak island","san jose","endurance","genghis khan","cleopatra","noah","ark of the covenant","valeriana","angkor","machu picchu","ubar","iram","lemuria","ciudad blanca","yonaguni","thonis","upano","roanoke","holy grail","franklin","erebus","alexander","mu","sundaland","beringia","rungholt","paititi","yamashita","cahokia","great zimbabwe","nazca"],Mp=(i,t)=>{let{control:e,globe:n}=i,s=n.shared,r=Qt("#stage"),a=Qt("#view"),l=Qt("#pins"),o=Qt("#sheet"),h=Qt("#body"),u=Qt("#eyebrow"),c={kind:null,legend:null,place:null,sheet:null,mode:"content",overlay:null,overlayMix:1,host:null,known:null},f=t.legends,d=null,p=null,v=null,g=null,m=null,x=null,_=null,b=f.find(w=>w.id==="atlantis")??null;b&&(c.kind="atlantis");for(let w of f){let I=Ns(w.name),N=u1.findIndex(P=>I.includes(P));w.weight=(N>=0?200-N:0)+Math.min(w.places.length,8)*3+(w.status==="found"?4:0)}let M=()=>{if(c.mode==="viewport")r.style.height="100dvh";else{let w=Math.round($t(r.clientWidth*1.16,560,740));r.style.height=`${w}px`,Qf(w)}e.wheelNeedsKey=c.mode!=="viewport",et()};Kf(w=>{c.mode=w,M()}),addEventListener("resize",M),addEventListener("load",M);let C,y=(w,I=2600)=>{let N=Qt("#toast");N.textContent=w,N.classList.add("open"),clearTimeout(C),C=setTimeout(()=>N.classList.remove("open"),I)},T=new Map,U=(w,I)=>{let N=T.get(I);return N||(N=document.createElement("button"),N.className=`pin s-${w.status}`,N.innerHTML="<i></i><span></span>",N.addEventListener("click",P=>{P.stopPropagation(),E(w,I,!0)}),l.appendChild(N),T.set(I,N),N._shown=!1),N},S=(w,I,N,P=0)=>{let q=yn(w*_t,I*_t,S.d),nt=e.pos,Mt=Math.hypot(nt[0],nt[1],nt[2]);if((q[0]*nt[0]+q[1]*nt[1]+q[2]*nt[2])/Mt<(ie-2e3)/Mt)return!1;let Dt=s.uExag.value,Gt=s.uWater.value>.5?s.uSea.value:-1e5,Vt=Math.max(n.heightAt(w*_t,I*_t)??0,Gt)*Dt,Pt=ie+Vt+P,Ft=q[0]*Pt-nt[0],qt=q[1]*Pt-nt[1],Tt=q[2]*Pt-nt[2],ae=e.basis,he=Ft*ae.fwd[0]+qt*ae.fwd[1]+Tt*ae.fwd[2];if(he<=i.camera.near)return!1;let De=Math.tan(e.fovY/2),In=De*i.camera.aspect;return N[0]=(((Ft*ae.right[0]+qt*ae.right[1]+Tt*ae.right[2])/he/In+e.shift[0])*.5+.5)*r.clientWidth,N[1]=(.5-((Ft*ae.up[0]+qt*ae.up[1]+Tt*ae.up[2])/he/De+e.shift[1])*.5)*r.clientHeight,!0};S.d=[0,0,0];let V=new Set,K=()=>{let w=r.clientWidth,I=r.clientHeight,N=e.range<15e5,P=[],q=[0,0],nt=c.kind==="atlantis";for(let Tt of f){let ae=Tt===c.legend||nt&&Tt===b;if(!(!ae&&(nt||c.kind&&Tt.kind!==c.kind)))for(let he of ae||N?Tt.places:[Tt.main])he===c.place&&(d?.a.scene&&e.range<d.a.scene.radius_km*9e3||i.evidence.extras.length)||S(he.lon,he.lat,q)&&(q[0]<-20||q[1]<-20||q[0]>w+20||q[1]>I+20||P.push({legend:Tt,place:he,x:q[0],y:q[1],w:(ae?1e3:0)+(he===c.place?500:0)+Tt.weight+(he===Tt.main?5:0)+(nt?60-10*(h1[he.standing]??5):0)}))}P.sort((Tt,ae)=>ae.w-Tt.w);let Mt=w<500?9:w<900?16:30,Et=[],Dt=new Set,Gt=0,Vt=0,Pt=!Qt("#intro").classList.contains("gone"),Ft=96,qt=c.sheet&&w<760?I*.38:Pt?I-(w<760?310:300):I;for(let Tt of P){let he=(Tt.legend===c.legend||nt&&Tt.legend===b)&&Tt.legend.places.length>1?Tt.place.name:Tt.legend.name;he.length>26&&(he=`${he.slice(0,24).trimEnd()}\u2026`);let De=16+he.length*6.6,In=18,Ln=[Tt.x-6,Tt.y-In/2,Tt.x+De,Tt.y+In/2],Sn=!(c.hunt&&!c.legend&&Tt.place!==c.place)&&Gt<Mt&&Tt.y>Ft&&Tt.y<qt-10&&Ln[2]<w-4;if(Sn){for(let Ee of Et)if(Ln[0]<Ee[2]&&Ln[2]>Ee[0]&&Ln[1]<Ee[3]&&Ln[3]>Ee[1]){Sn=!1;break}}if(!Sn&&(Vt>220||Tt.y>qt))continue;Sn?(Et.push(Ln),Gt++):Vt++;let ze=U(Tt.legend,Tt.place);ze._text!==he&&(ze.lastChild.textContent=he,ze._text=he,ze.setAttribute("aria-label",Tt.place===Tt.legend.main?Tt.legend.name:`${Tt.place.name} (${Tt.legend.name})`)),ze.style.transform=`translate3d(${Tt.x.toFixed(1)}px,${Tt.y.toFixed(1)}px,0)`;let ds=`pin ${nt&&Tt.legend===b?`p-${Tt.place.standing}${(Tt.place.tests??[]).length?"":" hollow"}${d?.scenes.has(Tt.place.id)?" scene":""}`:`s-${Tt.legend.status}`}${Sn?"":" dot"}${Tt.place===c.place?" on":""}${Tt.place===p?" pulse":""}`;ze.className!==ds&&(ze.className=ds),ze.style.zIndex=Tt.place===c.place?3:Sn?2:1,ze._shown||(ze.style.display="",ze._shown=!0),Dt.add(ze)}for(let Tt of V)Dt.has(Tt)||(Tt.style.display="none",Tt._shown=!1);V.clear();for(let Tt of Dt)V.add(Tt)},it=Qt("#kinds"),D=()=>{let w=Oh.filter(([I])=>f.some(N=>N.kind===I));r.classList.toggle("others",c.kind!=="atlantis"),it.innerHTML=(d?d.drawCase():b?`<button class="chip glass${c.kind==="atlantis"?" on":""}" data-kind="atlantis">Atlantis \xB7 ${b.places.length} places</button>`:"")+(d&&c.kind==="atlantis"?"":`<button class="chip glass${c.kind?"":" on"}" data-kind="">${b?`Other legends ${f.length-1}`:`All ${f.length}`}</button>`)+(c.kind==="atlantis"?"":w.map(([I,N])=>`<button class="chip glass${c.kind===I?" on":""}" data-kind="${I}">${de(N)}</button>`).join(""))},W=Qt("#menu"),B=Qt("#b-menu"),j=w=>{W.classList.toggle("open",w),B.setAttribute("aria-expanded",String(w)),B.classList.toggle("on",w)};B.addEventListener("click",w=>{w.stopPropagation(),j(!W.classList.contains("open"))}),W.addEventListener("click",w=>{let I=w.target.closest("button");if(!I)return;j(!1),Qt("#intro").classList.add("gone"),e.idle=!1;let N=I.dataset.menu;N==="city"?gt.enterCity("gate"):N==="hall"?gt.enterCity("hall"):N==="hunt"?(d?.leaveScene(),c.legend=c.place=null,c.kind!=="atlantis"&&b&&(c.kind="atlantis",D()),gt.openGlobe()):N==="story"?R.start():N==="work"?g.show("work"):N==="best"?(gt.leaveWalk(),_?.click("h-best")):N==="claims"?(gt.leaveWalk(),E(b,null,!1)):N==="board"?(gt.leaveWalk(),d?.openBoard()):N==="rules"?_?.click("h-rules"):N==="credits"&&Qt("#credit").click()}),it.addEventListener("click",w=>{let I=w.target.closest("[data-kind]");if(I){if(I.dataset.board&&c.kind==="atlantis")return d.openBoard();if(I.dataset.list&&c.kind==="atlantis")return d.openList();c.kind=I.dataset.kind||null,c.kind!=="atlantis"&&d?.a.scene&&(d.leaveScene(),pt()),c.kind==="atlantis"&&c.legend&&c.legend!==b&&pt(),D()}});let lt=w=>{c.sheet=w,o.dataset.kind=w??"",o.classList.toggle("open",!!w),r.classList.toggle("sheet-open",!!w);for(let[I,N]of[["b-layers","layers"],["b-sea","sea"],["b-known","known"]])Qt(`#${I}`).classList.toggle("on",w===N);r.dataset.sheet=w??"",w&&Qt("#intro").classList.add("gone"),w||(h.innerHTML=""),h.scrollTop=0,et()};function et(){let w=r.clientWidth;e.goalShift=c.sheet?w<760?[0,c.sheet==="legend"||c.sheet==="fit"?.42:.56]:[416/w,0]:[0,0]}let pt=()=>{lt(null),c.legend&&!d?.a.scene&&(c.legend=c.place=null)},dt=w=>{let I=$t((w.precision_km??10)*1e3*7,12e3,25e5);return{lon:w.lon*_t,lat:w.lat*_t,range:I,tilt:I<2e5?38*_t:0,heading:0}},at=(w,I,N,P)=>I?.length?`<p style="margin-bottom:4px"><b>${w}:</b></p><div class="row" style="gap:4px;margin:0 0 10px">${I.map(q=>`<span class="tag t-${N}">${de(q.replaceAll("-"," "))}</span>`).join("")}</div>`:"",k=()=>{let w=c.legend;u.innerHTML=`${de(Bh[w.kind]??w.kind)} <span class="tag s-${w.status}">${de(Xf[w.status]??w.status)}</span>`;let I=w.places.map((P,q)=>`
      <div class="place${P===c.place?" on":""}" data-i="${q}">
        <button data-act="place" data-i="${q}">
          <span class="name">${de(P.name)}<small>${de(nc[P.role]??P.role??"")}</small></span>
          <span class="tag t-${P.standing}">${de(Fs[P.standing]??P.standing??"")}</span>
        </button>
        <div class="more">
          ${P.claim?`<p>${de(P.claim)}</p>`:""}
          ${P.against?`<p><b>Against:</b> ${de(P.against)}</p>`:""}
          ${P.proposed_by?.length?`<p style="font-size:12.5px">Proposed by ${de(P.proposed_by.slice(0,3).map(nt=>`${nt.who}${nt.year?` (${nt.year})`:""}`).join(", "))}${P.event_date?`. Date it needs: ${de(P.event_date)}`:""}</p>`:""}
          ${at("Said to fit Plato on",P.fits,"confirmed",w)}${at("Breaks Plato on",P.conflicts,"rejected",w)}
          ${(P.tests??[]).map(nt=>`<p><b>Tested:</b> ${de(nt.what)}${nt.who?` (${de(nt.who)}${nt.year?`, ${nt.year}`:""})`:""}. ${de(nt.result)} ${nt.url?Fa(nt.url,"Source"):""}</p>`).join("")}
          <p style="font-size:12.5px;color:var(--faint)">${Cn(P.lat,P.lon,3)}${P.precision_km?`, give or take ${P.precision_km>=100?Math.round(P.precision_km):P.precision_km} km`:""}${P.underwater?", under water":""}</p>
          ${(P.sources??[]).map(nt=>`<a class="src" href="${de(nt.url)}" target="_blank" rel="noopener">${de(nt.title??nt.url)}</a>`).join("")}
          <div class="row">${w===b?`<button class="btn primary" data-act="city" data-i="${q}">Stand Plato's city here, to scale</button>`:""}<button class="btn" data-act="known-here" data-i="${q}">What's already recorded here?</button></div>
        </div>
      </div>`).join(""),N=Number.isFinite(w.sea_level_m)&&w.sea_level_m!==0;h.innerHTML=`
      <h2>${de(w.name)}</h2>
      ${w.when?`<div class="when">${de(w.when)}</div>`:""}
      <p>${de(w.summary)}</p>
      ${w.look_for?`<div class="look"><b>What to look for</b> ${de(w.look_for)}</div>`:""}
      <div class="row" style="margin-top:0">
        ${N?`<button class="btn primary" data-act="sea-to" data-m="${w.sea_level_m}">Set the sea to ${us(w.sea_level_m)}</button>`:""}
        <button class="btn" data-act="share">Share this view</button>
        ${hs?'<button class="btn" data-act="post">Post what you see</button>':""}
      </div>
      <h3>${w.places.length===1?"Where":`Where people have looked \xB7 ${w.places.length}`}</h3>
      ${I}
      ${w.origin?.url||w.origin?.text?`<p class="note">Where the story comes from: ${Fa(w.origin.url,w.origin.text??"source")}</p>`:""}`},E=(w,I,N)=>{if(w===b&&d)return c.kind!=="atlantis"&&(c.kind="atlantis",D()),Qt("#q").blur(),I?d.openPlace(I,N):d.openList();d?.leaveScene(),c.kind==="atlantis"&&w!==b&&(c.kind=null,D()),c.legend=w,c.place=I??w.main,lt("legend"),k(),N&&e.flyTo(dt(c.place)),Qt("#q").blur();let P=Qt(".place.on",h);P&&I&&P.scrollIntoView({block:"nearest"})},O=()=>{let w=Qt("#seatag"),I=s.uSea.value,N=s.uWater.value<.5,P=c.overlay,q=[];if(N?q.push("Oceans drained: <b>bare sea floor</b>"):Math.abs(I)>=1&&q.push(`Sea level <b>${us(I)}</b>`),P){let Mt=40075016*Math.cos(e.lat)/2**P.form.layer.minZoom/290*r.clientHeight*1.5;q.push(F(P)?e.range>Mt?`Zoom in to see <b>${de(P.s.name)}</b>`:`<b>${de(P.s.name)}</b>`:`<b>${de(P.s.name)}</b> has no data here`)}d?.a.scene&&c.sheet!=="legend"&&c.sheet!=="fit"&&q.push(`<b>${de(c.place?.name??"")}</b> \xB7 <button class="linkish" data-act="scene-open">open its card</button> \xB7 <button class="linkish" data-act="scene-off">leave</button>`),x?.sync();let nt=q.join(" \xB7 ");w._html!==nt&&(w.innerHTML=nt,w._html=nt,w.classList.toggle("open",!!nt))},G=(w,I)=>{s.uSea.value=$t(w,-11e3,9e3),I!==void 0&&(s.uWater.value=I?0:1),n.fitCaps(),O()},rt=()=>{u.textContent="Sea level";let w=s.uSea.value,I=s.uWater.value<.5;h.innerHTML=`
      <div class="big" id="sea-big">${us(w)}<small>against today</small></div>
      <div class="slide"><input id="sea-range" type="range" min="-150" max="70" step="1" value="${$t(w,-150,70)}" aria-label="Sea level in metres"></div>
      <div class="presets">${c1.map(N=>`<button class="chip${Math.abs(N.m-w)<.5&&!I?" on":""}" data-act="sea-to" data-m="${N.m}">${de(N.label)} ${N.m?us(N.m):""}</button>`).join("")}</div>
      <label class="check"><input type="checkbox" id="sea-off" ${I?"checked":""}> Drain the oceans and show the bare sea floor</label>
      
      
      
      `},X=(w,I,N=180,P=!0)=>{i.city.place({lat:w,lon:I,bearing:N}),i.stamp++,P&&e.flyTo(i.city.view(),4.5),lt(null),O()},ot=()=>{d?.a.scene||(c.legend=c.place=null),lt("city"),u.textContent="Plato's city, rebuilt";let w=t.reconstruction,I=N=>`<div class="known"><span>${de(N.what)}</span><small>${de(N.ref??"")}</small></div>`;h.innerHTML=`
      <p>This is the city Plato describes in the Critias, built to his measurements at ${i.city.params.stadion} m to the stadion and stood on the real ground at true size. It is a drawing of a text. Nothing like it has been found anywhere.</p>
      ${w?`<h3>From the text \xB7 ${w.from_text.length}</h3>${w.from_text.map(I).join("")}<h3>Our choices, not in the text \xB7 ${w.choices.length}</h3>${w.choices.map(I).join("")}`:""}
      
      <div class="row"><button class="btn" data-act="city-off">Remove the city</button></div>`};Qt("#seatag").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;I==="city-off"&&(i.city.remove(),i.stamp++,O()),I==="city-notes"&&ot(),I==="scene-open"&&c.place&&d.openPlace(c.place,!1),I==="scene-off"&&(d.leaveScene(),c.legend=c.place=null,O())});let vt=[];for(let w of t.sources){if(w.license?.share_ok!==!0)continue;let I=[],N=zh(w);N&&I.push({id:"",name:"Standard",layer:N});for(let P of w.access?.variants??[]){if(/stretch/i.test(`${P.id} ${P.name??""}`))continue;let q=zh(w,P);q&&I.push({id:P.id,name:P.name??P.id,layer:q})}I.length&&vt.push({s:w,forms:I,id:w.id})}let mt=[["lidar","Lidar relief"],["elevation","Terrain"],["seafloor","Sea floor"],["geophysics","Gravity, magnetics, geology"],["imagery","Satellite and air photos"],["radar","Radar"],["historic","Old maps and photos"],["catalog","Where surveys exist"]],F=w=>{let I=w.s.coverage?.bbox;if(!I)return!0;let N=e.lat/_t,P=e.lon/_t;return P>=I[0]&&P<=I[2]&&N>=I[1]&&N<=I[3]},ht=w=>{let I=w.s.coverage?.bbox;return!I||I[2]-I[0]>300&&I[3]-I[1]>120},Z=(w,I)=>{let N=w?w.forms.find(P=>P.id===(I??""))??w.forms[0]:null;c.overlay=w?{...w,form:N}:null,n.setLayer("overlay",N?N.layer:null),s.uOverMode.value=N&&N.layer.asIs?1:0,s.uOverMix.value=c.overlayMix,n.maxZ=N?Math.max(17,Math.min(N.layer.maxZoom+1,19)):17},ct=()=>{u.textContent="Readings and view";let w=s.uLens.value,I=Mt=>{let Et=c.overlay?.id===Mt.id,Dt=F(Mt),Gt=Mt.s.resolution_m?` \xB7 ${Mt.s.resolution_m>=1e3?`${Mt.s.resolution_m/1e3} km`:`${Mt.s.resolution_m} m`}`:"";return`<button class="layer${Et?" on":""}" data-act="overlay" data-id="${de(Mt.id)}"><span class="radio"></span><span class="t"><b>${de(Mt.s.name)}</b><small>${de(Mt.s.coverage?.note??"")}${Gt}</small></span></button>`+(Et?`<div class="slide" style="margin:2px 10px 8px 36px">
            ${Mt.forms.length>1?`<div class="presets" style="grid-column:1/-1;margin:0 0 6px">${Mt.forms.map(Vt=>`<button class="chip${c.overlay.form===Vt?" on":""}" data-act="overlay-form" data-form="${de(Vt.id)}">${de(Vt.name.replace(/\s*\(.*\)$/,""))}</button>`).join("")}</div>`:""}
            <label for="over-mix">Strength</label><output>${Math.round(c.overlayMix*100)}%</output><input id="over-mix" type="range" min="0" max="1" step="0.05" value="${c.overlayMix}">
            <div class="row" style="grid-column:1/-1;margin-top:4px">${Dt?"":'<button class="btn" data-act="overlay-go">Go where it has data</button>'}${Mt.s.docs?`<a class="btn" href="${de(Mt.s.docs)}" target="_blank" rel="noopener">About this source</a>`:""}</div>
            <p class="note" style="grid-column:1/-1;margin:6px 0 0">${de(Mt.s.what??"")} ${Mt.s.license?.name?`Licence: ${Fa(Mt.s.license.url,Mt.s.license.name)}.`:""} ${de(Mt.s.license?.attribution??"")}</p></div>`:"")},N=Mt=>mt.map(([Et,Dt])=>{let Gt=Mt.filter(Vt=>Vt.s.group===Et);return Gt.length?`<h3>${de(Dt)}</h3>${Gt.map(I).join("")}`:""}).join(""),P=vt.filter(Mt=>F(Mt)&&!ht(Mt)),q=vt.filter(ht),nt=vt.filter(Mt=>!F(Mt)&&!ht(Mt));h.innerHTML=`
      <div class="seg" role="tablist"><button data-act="lens" data-v="0" class="${w===0?"on":""}">Satellite</button><button data-act="lens" data-v="1" class="${w===1?"on":""}">Bare earth</button><button data-act="lens" data-v="2" class="${w===2?"on":""}">Height &amp; depth</button></div>
      
      <div class="slide"><label for="exag">Relief, stretched</label><output id="exag-out">${s.uExag.value.toFixed(1)}\xD7</output><input id="exag" type="range" min="1" max="12" step="0.5" value="${s.uExag.value}"></div>
      <div class="slide"><label for="sun-az">Light from</label><output id="az-out">${Y(i.sun.azimuth)}</output><input id="sun-az" type="range" min="0" max="359" step="1" value="${i.sun.azimuth}"></div>
      <div class="slide"><label for="sun-alt">Sun height</label><output id="alt-out">${Math.round(i.sun.altitude)}\xB0</output><input id="sun-alt" type="range" min="3" max="88" step="1" value="${i.sun.altitude}"></div>
      
      <label class="check"><input type="checkbox" id="opt-shadows" ${s.uShadows.value>.5?"checked":""}> Shadows from hills</label>
      <label class="check"><input type="checkbox" id="opt-contours" ${s.uContours.value>.5?"checked":""}> Contour lines</label>
      <label class="check"><input type="checkbox" id="opt-night" ${s.uNightOn.value>.5?"checked":""}> City lights on the night side</label>
      <h2 style="font-size:19px;margin-top:22px">Lay a survey over the ground</h2>
      
      ${P.length?N(P):""}
      ${q.length?`<h2 style="font-size:19px;margin-top:22px">Worldwide</h2>${N(q)}`:""}
      ${nt.length?`<details style="margin-top:18px"${c.overlay&&nt.some(Mt=>Mt.id===c.overlay.id)?" open":""}><summary style="cursor:pointer;font-weight:600">Surveys of other places \xB7 ${nt.length}</summary>${N(nt)}</details>`:""}
      `},Y=w=>["N","NE","E","SE","S","SW","W","NW"][Math.round(w/45)%8]+` ${Math.round(w)}\xB0`,yt=/archaeolog|ruin|mound|tumul|barrow|hillfort|fort|shipwreck|wreck|tomb|necropol|temple|pyramid|ancient|prehistoric|castle|monument|megalith|dolmen|menhir|stone circle|cave|heritage|rock art|petroglyph|geoglyph|palace|monaster|shrine|roman villa|oppidum|tell|kurgan|stupa|former settlement|ghost town|abandoned/i,Ct=()=>{u.textContent="Already recorded here?";let w=c.known;if(!w){h.innerHTML="<p>Before you call something a discovery, check what is already on record.</p>";return}let I=`<p style="color:var(--dim)">Within <b style="color:var(--ink)">${w.radius} km</b> of ${Cn(w.lat,w.lon,3)}</p>`;if(w.state==="loading"&&!w.rows.length){h.innerHTML=`${I}<p class="note">Asking Wikidata and OpenStreetMap\u2026</p>`;return}let N=nt=>`<div class="known"><span>${nt.url?Fa(nt.url,nt.name):de(nt.name)} ${nt.type?`<em>\xB7 ${de(nt.type)}</em>`:""}</span><small>${nt.km<1?`${Math.round(nt.km*1e3)} m`:`${nt.km.toFixed(nt.km<10?1:0)} km`}</small></div>`,P=w.rows.filter(nt=>nt.site),q=w.rows.filter(nt=>!nt.site);h.innerHTML=`${I}
      ${P.length?`<h3>Sites and monuments \xB7 ${P.length}</h3>${P.map(N).join("")}`:"<p><b>No recorded site turned up.</b> That is not proof of a discovery. These two open databases miss most of what national heritage registers hold, and archaeologists keep many site locations unpublished to protect them from looting.</p>"}
      ${q.length?`<h3>Other named places \xB7 ${q.length}</h3>${q.slice(0,25).map(N).join("")}`:""}
      ${w.state==="loading"?'<p class="note">Still waiting for OpenStreetMap, which can take half a minute\u2026</p>':""}
      ${w.errors.length?`<p class="note">Could not reach: ${de(w.errors.join(", "))}.</p>`:""}
      <p class="note">Sources: Wikidata (CC0), nearest first, and OpenStreetMap contributors (ODbL) within ${Math.min(w.radius,8)} km. Next, check the country's heritage register and the published surveys for the area. The community's <b>check-a-find</b> skill walks your agent through it.</p>
      <div class="row"><button class="btn" data-act="known-again">Check the centre of the view</button></div>`},jt=async(w,I,N)=>{let P=Math.round($t(N,2,60)),q=c.known={lat:w,lon:I,radius:P,state:"loading",rows:[],errors:[]};lt("known"),Ct();let nt=(Gt,Vt)=>Er(I*_t,w*_t,Vt*_t,Gt*_t)*ie/1e3,Mt=(async()=>{let Gt=`SELECT ?item ?itemLabel ?coord (SAMPLE(?instLabel_) AS ?inst) WHERE { SERVICE wikibase:around { ?item wdt:P625 ?coord. bd:serviceParam wikibase:center "Point(${I} ${w})"^^geo:wktLiteral; wikibase:radius "${P}"; wikibase:distance ?dist. } OPTIONAL { ?item wdt:P31 ?i. ?i rdfs:label ?instLabel_. FILTER(LANG(?instLabel_) = "en") } SERVICE wikibase:label { bd:serviceParam wikibase:language "en,es,fr,de,it,pt,ar,ru,zh,ja". } } GROUP BY ?item ?itemLabel ?coord ?dist ORDER BY ?dist LIMIT 300`,Vt=()=>fetch(`https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(Gt)}`,{headers:{Accept:"application/sparql-results+json"},signal:AbortSignal.timeout(25e3)}),Pt=await Vt().catch(()=>null);if(Pt?.ok||(await new Promise(Ft=>setTimeout(Ft,1500)),Pt=await Vt()),!Pt.ok)throw new Error("Wikidata");for(let Ft of(await Pt.json()).results.bindings){let qt=/Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(Ft.coord.value);!qt||/^Q\d+$/.test(Ft.itemLabel.value)||q.rows.push({name:Ft.itemLabel.value,type:Ft.inst?.value??"",url:Ft.item.value.replace("http://","https://"),km:nt(Number(qt[2]),Number(qt[1])),site:yt.test(Ft.inst?.value??"")})}})().catch(()=>q.errors.push("Wikidata")),Et=(async()=>{let Gt=`[out:json][timeout:12];(nwr["historic"](around:${Math.min(P,8)*1e3},${w},${I}););out center tags 600;`,Vt=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:`data=${encodeURIComponent(Gt)}`,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(4e4)});if(!Vt.ok)throw new Error("OpenStreetMap");for(let Pt of(await Vt.json()).elements){let Ft=Pt.lat??Pt.center?.lat,qt=Pt.lon??Pt.center?.lon,Tt=Pt.tags??{};Ft==null||!Tt.name||["memorial","wayside_cross","wayside_shrine","boundary_stone","milestone"].includes(Tt.historic)||q.rows.push({name:Tt.name,type:[Tt.historic,Tt.site_type].filter(Boolean).join(", ").replaceAll("_"," "),url:`https://www.openstreetmap.org/${Pt.type}/${Pt.id}`,km:nt(Ft,qt),site:!0})}})().catch(()=>q.errors.push("OpenStreetMap")),Dt=()=>{if(c.known!==q)return;let Gt=new Map;for(let Vt of q.rows.sort((Pt,Ft)=>Pt.km-Ft.km)){let Pt=Ns(Vt.name);(!Gt.has(Pt)||Vt.site&&!Gt.get(Pt).site)&&Gt.set(Pt,Vt)}if(q.rows=[...Gt.values()].sort((Vt,Pt)=>Vt.km-Pt.km),c.sheet==="known"){let Vt=h.scrollTop;Ct(),h.scrollTop=Vt}};Mt.then(Dt),await Promise.all([Mt,Et]),q.state="done",Dt()},Ut=()=>{let w=e.state(),I={ll:`${w.lat.toFixed(5)},${w.lon.toFixed(5)}`,r:Math.round(w.range)};return Math.abs(w.heading)>.5&&(I.hd=Math.round(w.heading)),w.tilt>.5&&(I.t=Math.round(w.tilt)),Math.abs(s.uSea.value)>=1&&(I.sea=Math.round(s.uSea.value)),s.uWater.value<.5&&(I.dry=1),s.uLens.value&&(I.lens=s.uLens.value),s.uExag.value!==1&&(I.x=s.uExag.value),c.legend&&(I.l=c.legend.id),c.legend&&c.place&&(c.place!==c.legend.main||c.legend===b)&&(I.p=c.place.id),d?.a.scene&&(d.a.mode!=="all"&&d.a.step<0&&(I.m=d.a.mode),d.a.step>=0&&(I.s=d.a.step+1)),i.city.active&&(I.city=`${i.city.site.lat.toFixed(4)},${i.city.site.lon.toFixed(4)},${i.city.params.seaBearing}`),c.overlay&&(I.o=c.overlay.form.id?`${c.overlay.id}.${c.overlay.form.id}`:c.overlay.id),I},Rt=(w,I)=>{let N=I?{...w}:{...Ut(),...w};if(c.host?.community)return`https://abstracts.co/a/${c.host.community}?${Object.entries(N).map(([q,nt])=>`a_${q}=${encodeURIComponent(nt)}`).join("&")}`;let P=new URL(location.href);return P.search=new URLSearchParams(N).toString(),P.toString()},It=async({text:w,url:I,both:N})=>{try{if(c.host){let P=await Si("share",{url:I,text:w});y(P?.shared===!1?"Not shared":"Ready to share");return}if(navigator.share&&matchMedia("(hover: none)").matches){await navigator.share({text:N??`${w}
${I}`});return}await navigator.clipboard.writeText(N??`${w}
${I}`),y("Copied. Paste it anywhere.")}catch(P){if(P?.code==="cancelled"||P?.name==="AbortError")return;prompt("Copy this",N??`${w}
${I}`)}},kt=async()=>{let w=Rt(),I=c.legend?`${c.legend.name}: ${c.place?.name??""}`.trim():"A view of the Earth";try{if(c.host){let N=await Si("share",{url:w,text:I});y(N?.shared===!1?"Not shared":"Link ready to share");return}await navigator.clipboard.writeText(w),y("Link copied")}catch(N){if(N?.code==="cancelled")return;prompt("Copy this link",w)}},J=async()=>{if(!c.host)return y("Open this on abstracts.co to post");if(!c.host.signedIn){try{await Si("signIn")}catch{y("Sign in to post")}return}let w=await new Promise(q=>{i.snap=q});if(!w)return y("Could not take the picture");let I=e.state(),N=Cn(I.lat,I.lon,3),P=`${c.legend?`${c.legend.name}${c.place?`, ${c.place.name}`:""}`:"Looking at"} ${N}${Math.abs(s.uSea.value)>=1?`, sea at ${us(s.uSea.value)}`:""}

${Rt()}`;try{(await Si("post",{text:P,media:[new File([w],"view.jpg",{type:"image/jpeg"})]}))?.post?.url&&y("Posted")}catch(q){q?.code!=="cancelled"&&y(q?.code==="signed_out"?"Sign in to post":"Could not post")}};o.addEventListener("click",w=>{let I=w.target.closest("[data-act]");if(!I)return;let N=I.dataset.act;if(!d?.click(N,I)&&!_?.click(N,I)){if(N==="close")pt();else if(N==="city-off")i.city.remove(),i.stamp++,pt(),O();else if(N==="place"){let P=c.legend.places[Number(I.dataset.i)];c.place=P,k(),e.flyTo(dt(P))}else if(N==="sea-to")G(Number(I.dataset.m),!1),c.sheet==="sea"?rt():y(`Sea level ${us(Number(I.dataset.m))}`);else if(N==="share")kt();else if(N==="post")J();else if(N==="lens")s.uLens.value=Number(I.dataset.v),ct();else if(N==="overlay"){let P=vt.find(nt=>nt.id===I.dataset.id);Z(c.overlay?.id===P.id?null:P);let q=h.scrollTop;ct(),h.scrollTop=q}else if(N==="overlay-form"){Z(vt.find(q=>q.id===c.overlay.id),I.dataset.form);let P=h.scrollTop;ct(),h.scrollTop=P}else if(N==="overlay-go"){let P=c.overlay?.s.coverage?.bbox;P&&e.flyTo({lon:(P[0]+P[2])/2*_t,lat:(P[1]+P[3])/2*_t,range:$t(Math.max(P[2]-P[0],P[3]-P[1])*111e3*1.1,2e4,12e6)})}else if(N==="city"){let P=c.legend.places[Number(I.dataset.i)];X(P.lat,P.lon)}else if(N==="city-notes")ot();else if(N==="known-here"){let P=c.legend.places[Number(I.dataset.i)];jt(P.lat,P.lon,Math.max(P.precision_km??10,5))}else if(N==="known-again"){let P=e.state();jt(P.lat,P.lon,e.range/4e3)}}}),o.addEventListener("input",w=>{let I=w.target;if(I.id==="sea-range"){G(Number(I.value)),Qt("#sea-big").innerHTML=`${us(Number(I.value))}<small>against today</small>`;for(let N of h.querySelectorAll(".presets .chip"))N.classList.toggle("on",Number(N.dataset.m)===Number(I.value)&&s.uWater.value>.5)}else I.id==="sea-off"?G(s.uSea.value,I.checked):I.id==="exag"?(s.uExag.value=Number(I.value),Qt("#exag-out").textContent=`${Number(I.value).toFixed(1)}\xD7`,n.fitCaps()):I.id==="sun-az"?(i.sun.azimuth=Number(I.value),Qt("#az-out").textContent=Y(Number(I.value))):I.id==="sun-alt"?(i.sun.altitude=Number(I.value),Qt("#alt-out").textContent=`${I.value}\xB0`):I.id==="opt-shadows"?s.uShadows.value=I.checked?1:0:I.id==="opt-contours"?s.uContours.value=I.checked?1:0:I.id==="opt-night"?s.uNightOn.value=I.checked?1:0:I.id==="over-mix"&&(c.overlayMix=Number(I.value),s.uOverMix.value=c.overlayMix,I.previousElementSibling.textContent=`${Math.round(c.overlayMix*100)}%`)});let zt=(w,I)=>()=>{if(c.sheet===w)return pt();d?.a.scene||(c.legend=c.place=null),lt(w),I()};Qt("#b-layers").addEventListener("click",zt("layers",ct)),Qt("#b-sea").addEventListener("click",zt("sea",rt)),Qt("#b-known").addEventListener("click",()=>{if(c.sheet==="known")return pt();d?.a.scene||(c.legend=c.place=null);let w=e.state();jt(w.lat,w.lon,e.range/4e3)}),Qt("#z-in").addEventListener("click",()=>e.zoomBy(.5)),Qt("#z-out").addEventListener("click",()=>e.zoomBy(2)),Qt("#compass").addEventListener("click",()=>e.flyTo({heading:0,tilt:0},.7)),Qt("#credit").addEventListener("click",()=>{let w=n.layers,I=[Rr.terrarium.credit,e.range>8e5?w.globe?.credit:w.base.credit,c.overlay?.form.layer.credit,s.uNightOn.value>.5?w.night.credit:null].filter(Boolean);y(`Showing: ${I.join(" \xB7 ")}`,6e3)}),Qt("#intro").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;if(I==="start"){let N=b??[...f].sort((P,q)=>q.weight-P.weight)[0];N&&E(N,null,!0)}I==="tour"&&R.start(),I==="enter"&&gt.enterCity("gate"),I==="hunt"&&(Qt("#intro").classList.add("gone"),e.idle=!1),I==="board"&&(Qt("#intro").classList.add("gone"),d?.openBoard()),I==="sea"&&(b&&G(-50,!1),lt("sea"),rt())}),e.onTap=(w,I)=>{Qt("#results").classList.remove("open"),d?.hidePop(),x?.tap(w,I)},addEventListener("keydown",w=>{w.key==="Escape"&&(R.on?R.stop():d?.boardOpen?d.closeBoard():v?.on&&c.sheet?lt(null):d?.hidePop())}),a.addEventListener("pointerdown",()=>{Qt("#intro").classList.add("gone"),Qt("#q").blur(),Qt("#results").classList.remove("open"),j(!1)});let At=Qt("#q"),Bt=Qt("#results"),bt=[],Nt=0,Ot=()=>{let w=At.value.trim();if(!w){Bt.classList.remove("open");return}let I=Zf(w);bt=I?[{coords:I}]:jf(f,w,7),!I&&w.length>=3&&bt.push({geocode:w}),Nt=Math.min(Nt,bt.length-1),Bt.innerHTML=bt.map((N,P)=>N.coords?`<button class="res${P===Nt?" sel":""}" data-i="${P}"><span class="bullet" style="--c:var(--blue)"></span><span><b>${Cn(N.coords.lat,N.coords.lon,4)}</b></span><small>Go to coordinates</small></button>`:N.geocode?`<button class="res${P===Nt?" sel":""}" data-i="${P}"><span class="bullet" style="--c:var(--faint)"></span><span>Find \u201C<b>${de(N.geocode)}</b>\u201D on the map</span><small>Place search</small></button>`:`<button class="res s-${N.legend.status}${P===Nt?" sel":""}" data-i="${P}"><span class="bullet"></span><span><b>${de(N.place?N.place.name:N.legend.name)}</b>${N.place?` <em>${de(N.legend.name)}</em>`:""}</span><small>${de(N.place?Fs[N.place.standing]??"":Bh[N.legend.kind]??"")}</small></button>`).join("")||'<div class="res"><em>Nothing by that name yet. Add it: this community is open.</em></div>',Bt.classList.add("open")},Lt=async w=>{if(w){if(Bt.classList.remove("open"),w.coords){e.flyTo({lon:w.coords.lon*_t,lat:w.coords.lat*_t,range:Math.min(e.range,6e4)}),At.blur();return}if(w.geocode){try{let N=(await fetch(`https://photon.komoot.io/api/?limit=1&lang=en&q=${encodeURIComponent(w.geocode)}`).then(Et=>Et.json())).features?.[0];if(!N)return y(`No place called \u201C${w.geocode}\u201D`);let[P,q]=N.geometry.coordinates,nt=N.properties.extent,Mt=nt?Math.max(Math.abs(nt[2]-nt[0])*Math.cos(q*_t),Math.abs(nt[1]-nt[3]))*111e3:3e4;e.flyTo({lon:P*_t,lat:q*_t,range:$t(Mt*1.6,3e3,4e6)}),y(`${N.properties.name??w.geocode}${N.properties.country?`, ${N.properties.country}`:""} \xB7 place search by Photon, \xA9 OpenStreetMap`,3800),At.blur()}catch{y("Place search is not answering")}return}At.value=w.legend.name,E(w.legend,w.place??null,!0)}};At.addEventListener("input",()=>{Nt=0,Ot()}),At.addEventListener("focus",()=>{Qt("#intro").classList.add("gone"),Ot()}),At.addEventListener("keydown",w=>{w.key==="ArrowDown"&&(Nt=Math.min(Nt+1,bt.length-1),Ot(),w.preventDefault()),w.key==="ArrowUp"&&(Nt=Math.max(Nt-1,0),Ot(),w.preventDefault()),w.key==="Escape"&&(Bt.classList.remove("open"),At.blur())}),Qt("#search").addEventListener("submit",w=>{w.preventDefault(),Lt(bt[Nt])}),Bt.addEventListener("click",w=>{let I=w.target.closest("[data-i]");I&&Lt(bt[Number(I.dataset.i)])});let z=0,A=Qt("#where"),ut=Qt("#compass svg");i.onFrame=(w=.016)=>{if(g?.sync(),m?.tick(w),R?.tick(),v?.on||(K(),d?.placeMarks(),_?.tick(),e.idle||Qt("#intro").classList.add("gone"),++z%8))return;let I=e.hover&&!e.pointers.size&&matchMedia("(hover: hover)").matches?e.pick(e.hover.x,e.hover.y):null,N=I?I.lat/_t:e.lat/_t,P=I?I.lon/_t:e.lon/_t,q=I?I.height:n.heightAt(e.lon,e.lat),nt=s.uSea.value,Mt=q==null?"":q<-.6?`<b>${Math.round(-q).toLocaleString("en")} m</b> below today's sea${s.uWater.value>.5&&q<nt?"":", dry"}`:`<b>${Math.round(q).toLocaleString("en")} m</b>`;A.innerHTML=`${Cn(N,P,e.range<5e4?4:2)} \xB7 ${Mt} \xB7 eye ${$d(e.altitude)}`,ut.style.transform=`rotate(${(-e.heading/_t).toFixed(1)}deg)`,r.classList.toggle("turned",Math.abs(e.heading)>.02||e.tilt>.03),r.classList.toggle("dots",!!c.hunt&&!c.legend),O()};let gt={world:i,data:t,st:c,$:Qt,esc:de,link:Fa,metres:us,toast:y,setSheet:lt,closeSheet:pt,body:h,eyebrow:u,sheet:o,stage:r,pinsEl:l,project:S,setSea:G,standCity:X,checkKnown:jt,viewFor:dt,drawTag:O,drawCity:ot,strataColour:kh,overlays:vt,setOverlay:Z,shortName:Pa,shareUrl:(w,I)=>Rt(w,I),shareOut:w=>It(w),pulse:w=>{p=w??null},tourOn:()=>!1};gt.sound=wp(gt),d=lp(gt),gt.leaveScene=()=>d?.leaveScene(),gt.fitAt=(w,I)=>d?.runFit(void 0,{lat:w,lon:I}),gt.busy=()=>!!(d?.a.scene||d?.boardOpen||R.on||!Qt("#intro").classList.contains("gone")||v?.on||i.city.active&&e.range<9e4||c.sheet==="fit"||c.sheet==="legend"||c.sheet&&r.clientWidth<760),_=d?yp(gt):null,c.hunt=!!_;let R=hp(gt,d,_);gt.tour=()=>R.start(),gt.tourOn=()=>R.on,x=up(gt),gt.cityBar=x,gt.home=uc,Object.defineProperty(gt,"host",{get:()=>c.host??null}),v=fp(gt),g=mp(gt,{A:d,H:_,walk:v}),m=xp(gt,{walk:v}),gt.multiplayer=()=>m.choose(),gt.multiplayerOn=()=>m.state.state==="on",gt.walkOn=()=>v.on,gt.leaveWalk=()=>{v.on&&v.leave(!1)},gt.onWalk=w=>{w&&c.sheet&&lt(null),x.sync(),O()},gt.walkPan=w=>{v.state.pan=w},gt.enterCity=(w="gate",I=!1,N={})=>{if(!I&&R.on)return R.stop();d?.leaveScene(),d?.closeBoard(),c.legend=c.place=null,lt(null),Qt("#intro").classList.add("gone"),e.idle=!1,i.city.active||i.city.place({lat:uc.lat,lon:uc.lon,bearing:uc.bearing}),Math.abs(s.uSea.value)>.6&&G(0,!1);let P=i.city.city.hall;I||H(),v.enter({...w==="hall"?{x:0,y:-(P.RI-6),look:[0,0]}:{x:0,y:-(P.RG+15),look:[0,0]},grab:!I,...N})},gt.openGlobe=(w=!0)=>{lt(null);let I=i.city.site;gt.leaveWalk(),w&&(H(),e.flyTo({lon:(I?.lon??-30)*_t,lat:(I?.lat??25)*_t,range:135e5,tilt:0,heading:0},3.6)),Qt("#b-city").hidden=!d};let H=()=>{r.classList.remove("blink"),r.offsetWidth,r.classList.add("blink")};Qt("#walk").addEventListener("click",w=>{let I=w.target.closest("[data-act]")?.dataset.act;I==="w-up"?v.leave(!0):I==="w-hall"?gt.enterCity("hall"):I==="w-globe"&&gt.openGlobe()}),Qt("#b-city").addEventListener("click",()=>gt.enterCity((i.city.active,"gate"))),D(),G(s.uSea.value),e.idle&&e.jump({range:175e5/Math.min(1,r.clientWidth/r.clientHeight)**.55});let Q=w=>{if(!w)return;let I=q=>w[q]==null||w[q]===""||!Number.isFinite(Number(w[q]))?null:Number(w[q]);if(I("x")!=null&&(s.uExag.value=$t(I("x"),1,12)),I("lens")!=null&&(s.uLens.value=$t(Math.round(I("lens")),0,2)),(I("sea")!=null||w.dry)&&G(I("sea")??0,!!w.dry),w.o){let[q,nt]=String(w.o).split("."),Mt=vt.find(Et=>Et.id===q);Mt&&Z(Mt,nt)}if(typeof w.city=="string"){let q=w.city.split(",").map(Number);Number.isFinite(q[0])&&Number.isFinite(q[1])&&X(q[0],q[1],Number.isFinite(q[2])?q[2]:180,!1)}let N=w.l&&f.find(q=>q.id===w.l);N&&E(N,N.places.find(q=>q.id===w.p)??null,!1),d?.a.scene&&(["claimed","found"].includes(w.m)&&d.setMode(w.m),I("s")!=null&&d.setStep($t(Math.round(I("s"))-1,-1,d.a.scene.story.length-1)));let P=typeof w.ll=="string"&&w.ll.split(",").map(Number);if(P&&P.length===2&&P.every(Number.isFinite)?(e.jump({lat:$t(P[0],-89,89)*_t,lon:P[1]*_t,range:$t(I("r")??2e6,i.city.active?14:150,e.maxRange),heading:(I("hd")??0)*_t,tilt:$t(I("t")??0,0,i.city.active?88.5:84)*_t}),e.idle=!1):N&&c.place?(e.jump(d?.a.scene?i.evidence.viewOf(null):dt(c.place)),e.idle=!1):i.city.active&&(e.jump(i.city.view()),e.idle=!1),(w.ll||N||i.city.active)&&Qt("#intro").classList.add("gone"),w.board&&d&&(Qt("#intro").classList.add("gone"),d.openBoard()),typeof w.hunt=="string"&&_){let q=w.hunt.split(",").map(Number);if(q.length===2&&q.every(Number.isFinite)){Qt("#intro").classList.add("gone"),e.idle=!1;let nt=()=>_.ready?_.claim($t(q[0],-85,85),q[1],!w.ll):setTimeout(nt,150);nt()}}w.tour&&d&&R.start(),(w.walk||w.hall)&&d&&gt.enterCity(w.hall?"hall":"gate")};Q(Object.fromEntries(new URLSearchParams(location.search))),Jf().then(w=>{c.host=w,w?.launch&&Object.keys(w.launch).length&&Q(w.launch),m?.arrive()}),b&&(Qt("#intro h1").textContent="Atlantis",Qt('#intro [data-act="start"]').textContent=_?"Famous claims":"Explore the places"),Qt('#intro [data-act="hunt"]').hidden=!_,_&&(Qt('#intro [data-act="tour"]').textContent="Watch the story");for(let w of document.querySelectorAll("#intro [data-atlantis], #menu [data-atlantis]"))w.hidden=!d;return Qt('#intro [data-act="start"]').hidden=!!_,d&&(Qt("#m-claims").textContent=d.stats.places),_||(Qt("#brand").textContent=b?"Where was Atlantis?":"Lost places"),Qt('#intro [data-act="sea"]').hidden=!!d,Qt('#intro [data-act="enter"]').hidden=!d,Qt("#b-city").hidden=!d,{st:c,selectLegend:E,setSea:G,setOverlay:Z,overlays:vt,apply:Q,viewParams:Ut,A:d,H:_,tour:R,cityBar:x,walk:v,hall:g,meet:m,enterCity:gt.enterCity,openGlobe:gt.openGlobe,sound:gt.sound}};var Sp=document.getElementById("view"),zi=new URLSearchParams(location.search),d1=globalThis.__ASSETS__||"./",Tp=()=>{document.getElementById("fail").style.display="grid",document.getElementById("veil").classList.add("gone")},f1=async()=>{if(!Sp.getContext("webgl2",{failIfMajorPerformanceCaveat:!1}))return Tp();let i;try{i=Wf(Sp,{phone:zi.get("phone")==="1"?!0:zi.get("phone")==="0"?!1:void 0})}catch(r){return console.error(r),Tp()}globalThis.world=i;let t=await Yf(d1);globalThis.ui=Mp(i,t);let e=r=>zi.get(r)===null?null:Number(zi.get(r));if(e("az")!==null&&(i.sun.azimuth=e("az")),e("alt")!==null&&(i.sun.altitude=e("alt")),e("exp")!==null&&(i.exposure=e("exp")),e("air")!==null&&(i.air=e("air")),e("shadows")!==null&&(i.globe.shared.uShadows.value=e("shadows")),e("night")!==null&&(i.globe.shared.uNightOn.value=e("night")),zi.get("still")&&(i.control.idle=!1),globalThis.__STILL__&&(i.control.spin=!1,i.restSoon=!0),zi.get("clean")){for(let r of["bar","kinds","zoom","readout","intro","seatag","results"])document.getElementById(r).style.display="none";zi.get("clean")==="2"&&(document.getElementById("pins").style.display="none")}zi.get("sheet")==="layers"&&document.getElementById("b-layers").click(),zi.get("sheet")==="sea"&&document.getElementById("b-sea").click();let n=document.getElementById("veil"),s=()=>i.globe.ready?n.classList.add("gone"):setTimeout(s,100);s(),setTimeout(()=>n.classList.add("gone"),12e3)};f1();
