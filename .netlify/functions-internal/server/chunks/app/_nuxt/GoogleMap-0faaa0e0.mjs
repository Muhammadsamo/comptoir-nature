import { defineComponent, ref, provide, watch, onMounted, onBeforeUnmount, withScopeId, pushScopeId, popScopeId, openBlock, createBlock, createVNode, renderSlot, toRef, inject, Fragment, createCommentVNode, withDirectives, vShow, computed, Comment, markRaw, mergeProps, unref, withCtx, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

let t=Symbol("map"),u=Symbol("api"),v=Symbol("marker"),w=Symbol("markerCluster"),y=Symbol("CustomMarker"),z=Symbol("mapTilesLoaded"),A="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");
var aa=function B(a,b){if(a===b)return !0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return !1;var d;if(Array.isArray(a)){var e=a.length;if(e!=b.length)return !1;for(d=e;0!==d--;)if(!B(a[d],b[d]))return !1;return !0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();var g=Object.keys(a);e=g.length;
if(e!==Object.keys(b).length)return !1;for(d=e;0!==d--;)if(!Object.prototype.hasOwnProperty.call(b,g[d]))return !1;for(d=e;0!==d--;)if(e=g[d],!B(a[e],b[e]))return !1;return !0}return a!==a&&b!==b};
class C{constructor({apiKey:a,channel:b,client:c,id:d="__googleMapsScriptId",libraries:e=[],language:g,region:f,version:l,mapIds:k,nonce:h,retries:m=3,url:n="https://maps.googleapis.com/maps/api/js"}){this.CALLBACK="__googleMapsCallback";this.callbacks=[];this.loading=this.done=!1;this.errors=[];this.version=l;this.apiKey=a;this.channel=b;this.client=c;this.id=d||"__googleMapsScriptId";this.libraries=e;this.language=g;this.region=f;this.mapIds=k;this.nonce=h;this.retries=m;this.url=n;if(C.instance){if(!aa(this.options,
C.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(C.instance.options)}`);return C.instance}C.instance=this;}get options(){return {version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+
1}createUrl(){let a=this.url;a+=`?callback=${this.CALLBACK}`;this.apiKey&&(a+=`&key=${this.apiKey}`);this.channel&&(a+=`&channel=${this.channel}`);this.client&&(a+=`&client=${this.client}`);0<this.libraries.length&&(a+=`&libraries=${this.libraries.join(",")}`);this.language&&(a+=`&language=${this.language}`);this.region&&(a+=`&region=${this.region}`);this.version&&(a+=`&v=${this.version}`);this.mapIds&&(a+=`&map_ids=${this.mapIds.join(",")}`);return a}deleteScript(){let a=document.getElementById(this.id);
a&&a.remove();}load(){return this.loadPromise()}loadPromise(){return new Promise((a,b)=>{this.loadCallback(c=>{c?b(c.error):a(window.google);});})}loadCallback(a){this.callbacks.push(a);this.execute();}setScript(){if(document.getElementById(this.id))this.callback();else {var a=this.createUrl(),b=document.createElement("script");b.id=this.id;b.type="text/javascript";b.src=a;b.onerror=this.loadErrorCallback.bind(this);b.defer=!0;b.async=!0;this.nonce&&(b.nonce=this.nonce);document.head.appendChild(b);}}reset(){this.deleteScript();
this.loading=this.done=!1;this.errors=[];this.onerrorEvent=null;}resetIfRetryingFailed(){this.failed&&this.reset();}loadErrorCallback(a){this.errors.push(a);this.errors.length<=this.retries?(a=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${a} ms.`),setTimeout(()=>{this.deleteScript();this.setScript();},a)):(this.onerrorEvent=a,this.callback());}setCallback(){window.__googleMapsCallback=this.callback.bind(this);}callback(){this.done=!0;this.loading=
!1;this.callbacks.forEach(a=>{a(this.onerrorEvent);});this.callbacks=[];}execute(){this.resetIfRetryingFailed();this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript());}}
function ba(a){return class extends a.OverlayView{constructor(a){super();let {element:b,...d}=a;this.element=b;this.opts=d;this.opts.map&&this.setMap(this.opts.map);}getPosition(){return this.opts.position?this.opts.position instanceof a.LatLng?this.opts.position:new a.LatLng(this.opts.position):null}getVisible(){if(!this.element)return !1;let a=this.element;return "none"!==a.style.display&&"hidden"!==a.style.visibility&&(""===a.style.opacity||.01<Number(a.style.opacity))}onAdd(){if(this.element){var a=
this.getPanes();a&&a.overlayMouseTarget.appendChild(this.element);}}draw(){if(this.element){var a=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(a){this.element.style.position="absolute";let b=this.element.offsetHeight;var c=this.element.offsetWidth;switch(this.opts.anchorPoint){case "TOP_CENTER":c=a.x-c/2;a=a.y;break;case "BOTTOM_CENTER":c=a.x-c/2;a=a.y-b;break;case "LEFT_CENTER":c=a.x;a=a.y-b/2;break;case "RIGHT_CENTER":c=a.x-c;a=a.y-b/2;break;case "TOP_LEFT":c=a.x;a=a.y;break;
case "TOP_RIGHT":c=a.x-c;a=a.y;break;case "BOTTOM_LEFT":c=a.x;a=a.y-b;break;case "BOTTOM_RIGHT":c=a.x-c;a=a.y-b;break;default:c=a.x-c/2,a=a.y-b/2;}this.element.style.left=c+"px";this.element.style.top=a+"px";this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`;this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString());}}}onRemove(){this.element&&this.element.remove();}setOptions(a){this.opts=a;this.draw();}}}let D,E="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");
var F=defineComponent({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,
required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,
required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},
scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:E,setup(a,{emit:b}){let c=ref(),d=ref(!1),e=ref(),g=ref(),
f=ref(!1);provide(t,e);provide(u,g);provide(z,f);let l=()=>{const b={...a};Object.keys(b).forEach(a=>{void 0===b[a]&&delete b[a];});var c=a=>{var b;return a?{position:null===(b=g.value)||void 0===b?void 0:b.ControlPosition[a]}:{}};c={scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:{},panControlOptions:c(a.panControlPosition),zoomControlOptions:c(a.zoomControlPosition),rotateControlOptions:c(a.rotateControlPosition),streetViewControlOptions:c(a.streetViewControlPosition),fullscreenControlOptions:c(a.fullscreenControlPosition),
disableDefaultUI:a.disableDefaultUi};return {...b,...c}},k=watch([g,e],([a,b])=>{a&&b&&(a.event.addListenerOnce(b,"tilesloaded",()=>{f.value=!0;}),setTimeout(k,0));},{immediate:!0}),h=f=>{g.value=markRaw(f.maps);e.value=markRaw(new f.maps.Map(c.value,l()));f=ba(g.value);g.value[y]=f;E.forEach(a=>{var c;null===(c=e.value)||void 0===c?void 0:c.addListener(a,c=>b(a,c));});d.value=!0;f=Object.keys(a).filter(a=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(a)).map(b=>
toRef(a,b));watch([()=>a.center,()=>a.zoom,...f],([a,b],[c,d])=>{var f,g,h;const {center:m,zoom:k,...n}=l();null===(f=e.value)||void 0===f?void 0:f.setOptions(n);void 0!==b&&b!==d&&(null===(g=e.value)||void 0===g?void 0:g.setZoom(b));b=!c||a.lng!==c.lng||a.lat!==c.lat;a&&b&&(null===(h=e.value)||void 0===h?void 0:h.panTo(a));});};onMounted(()=>{if(a.apiPromise&&a.apiPromise instanceof Promise)a.apiPromise.then(h);else {try{const {apiKey:b,region:c,version:d,language:e,libraries:f}=a;D=new C({apiKey:b,
region:c,version:d,language:e,libraries:f});}catch(m){console.error(m);}D.load().then(h);}});onBeforeUnmount(()=>{var a;f.value=!1;e.value&&(null===(a=g.value)||void 0===a?void 0:a.event.clearInstanceListeners(e.value));});return {mapRef:c,ready:d,map:e,api:g,mapTilesLoaded:f}}});
function G(a,b){void 0===b&&(b={});b=b.insertAt;if(a&&"undefined"!==typeof document){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css";"top"===b?c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d):c.appendChild(d);d.styleSheet?d.styleSheet.cssText=a:d.appendChild(document.createTextNode(a));}}G("\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n");let ca=withScopeId("data-v-177d06e3");pushScopeId("data-v-177d06e3");
let da={ref:"mapRef",class:"mapdiv"};popScopeId();let ea=ca(a=>(openBlock(),createBlock("div",null,[createVNode("div",da,null,512),renderSlot(a.$slots,"default",{ready:a.ready,map:a.map,api:a.api,mapTilesLoaded:a.mapTilesLoaded},void 0,!0)])));F.render=ea;F.__scopeId="data-v-177d06e3";
var I=function H(a,b){if(a===b)return !0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return !1;var d;if(Array.isArray(a)){var e=a.length;if(e!=b.length)return !1;for(d=e;0!==d--;)if(!H(a[d],b[d]))return !1;return !0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();var g=Object.keys(a);e=g.length;
if(e!==Object.keys(b).length)return !1;for(d=e;0!==d--;)if(!Object.prototype.hasOwnProperty.call(b,g[d]))return !1;for(d=e;0!==d--;)if(e=g[d],!H(a[e],b[e]))return !1;return !0}return a!==a&&b!==b};
let J=(a,b,c,d)=>{const e=ref(),g=inject(t,ref()),f=inject(u,ref()),l=inject(w,ref()),k=computed(()=>!!(l.value&&f.value&&(e.value instanceof f.value.Marker||e.value instanceof f.value[y])));watch([g,c],(h,[m,n])=>{var q,r,p;h=!I(c.value,n)||g.value!==m;g.value&&f.value&&h&&(e.value?(e.value.setOptions(c.value),k.value&&(null===(q=l.value)||void 0===q?void 0:q.removeMarker(e.value),null===(r=l.value)||void 0===r?void 0:r.addMarker(e.value))):(e.value="Marker"===a?markRaw(new f.value[a](c.value)):
a===y?markRaw(new f.value[a](c.value)):markRaw(new f.value[a]({...c.value,map:g.value})),k.value?null===(p=l.value)||void 0===p?void 0:p.addMarker(e.value):e.value.setMap(g.value),b.forEach(a=>{var b;null===(b=e.value)||void 0===b?void 0:b.addListener(a,b=>d(a,b));})));},{immediate:!0});onBeforeUnmount(()=>{var a,b;e.value&&(null===(a=f.value)||void 0===a?void 0:a.event.clearInstanceListeners(e.value),k.value?null===(b=l.value)||void 0===b?void 0:b.removeMarker(e.value):e.value.setMap(null));});return e},
K="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");
var fa=defineComponent({name:"Marker",props:{options:{type:Object,required:!0}},emits:K,setup(a,{emit:b,expose:c,slots:d}){a=toRef(a,"options");b=J("Marker",K,a,b);provide(v,b);c({marker:b});return ()=>{var a;return null===(a=d.default)||void 0===a?void 0:a.call(d)}}});defineComponent({name:"Polyline",props:{options:{type:Object,required:!0}},emits:A,setup(a,{emit:b}){a=toRef(a,"options");return {polyline:J("Polyline",A,a,b)}},render:()=>null});defineComponent({name:"Polygon",props:{options:{type:Object,
required:!0}},emits:A,setup(a,{emit:b}){a=toRef(a,"options");return {polygon:J("Polygon",A,a,b)}},render:()=>null});let L=A.concat(["bounds_changed"]);defineComponent({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:L,setup(a,{emit:b}){a=toRef(a,"options");return {rectangle:J("Rectangle",L,a,b)}},render:()=>null});let M=A.concat(["center_changed","radius_changed"]);
defineComponent({name:"Circle",props:{options:{type:Object,required:!0}},emits:M,setup(a,{emit:b}){a=toRef(a,"options");return {circle:J("Circle",M,a,b)}},render:()=>null});var N=defineComponent({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(a,{emit:b}){let c=ref(null),d=inject(t,ref()),e=inject(u,ref()),g=inject(z,ref(!1)),f=ref(!1),l=watch([g,e,c],([c,d,e])=>{d&&c&&e&&(k(a.position),f.value=!0,b("content:loaded"),setTimeout(l,0));},{immediate:!0}),
k=a=>{d.value&&e.value&&c.value&&d.value.controls[e.value.ControlPosition[a]].push(c.value);},h=a=>{if(d.value&&e.value){let b=null;a=e.value.ControlPosition[a];d.value.controls[a].forEach((a,d)=>{a===c.value&&(b=d);});null!==b&&d.value.controls[a].removeAt(b);}};onBeforeUnmount(()=>h(a.position));watch(()=>a.position,(a,b)=>{h(b);k(a);});watch(()=>a.index,b=>{b&&c.value&&(c.value.index=a.index);});return {controlRef:c,showContent:f}}});let la={ref:"controlRef"};
N.render=function(a){return openBlock(),createBlock(Fragment,null,[createCommentVNode("\n    v-show must be used instead of v-if otherwise there\n    would be no rendered content pushed to the map controls\n  "),withDirectives(createVNode("div",la,[renderSlot(a.$slots,"default")],512),[[vShow,a.showContent]])],2112)};let O="closeclick content_changed domready position_changed visible zindex_changed".split(" ");
var P=defineComponent({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:O,setup(a,{slots:b,emit:c}){let d=ref(),e=ref(),g=inject(t,ref()),f=inject(u,ref()),l=inject(v,ref()),k,h=computed(()=>{var a;return null===(a=b.default)||void 0===a?void 0:a.call(b).some(a=>a.type!==Comment)});onMounted(()=>{watch([g,()=>a.options],([,a],[b,q])=>{b=!I(a,q)||g.value!==b;g.value&&f.value&&b&&(d.value?(d.value.setOptions({...a,content:h.value?e.value:a.content}),l.value||d.value.open({map:g.value})):
(d.value=markRaw(new f.value.InfoWindow({...a,content:h.value?e.value:a.content})),l.value?k=l.value.addListener("click",()=>{d.value&&d.value.open({map:g.value,anchor:l.value});}):d.value.open({map:g.value}),O.forEach(a=>{var b;null===(b=d.value)||void 0===b?void 0:b.addListener(a,b=>c(a,b));})));},{immediate:!0});});onBeforeUnmount(()=>{var a;k&&k.remove();d.value&&(null===(a=f.value)||void 0===a?void 0:a.event.clearInstanceListeners(d.value),d.value.close());});return {infoWindow:d,infoWindowRef:e,hasSlotContent:h}}});
G("\n.info-window-wrapper[data-v-5b373d6e] {\n  display: none;\n}\n.mapdiv .info-window-wrapper[data-v-5b373d6e] {\n  display: inline-block;\n}\n");let ma=withScopeId("data-v-5b373d6e");pushScopeId("data-v-5b373d6e");let na={key:0,class:"info-window-wrapper"};popScopeId();let oa=ma(a=>a.hasSlotContent?(openBlock(),createBlock("div",na,[createVNode("div",mergeProps({ref:"infoWindowRef"},a.$attrs),[renderSlot(a.$slots,"default",{},void 0,!0)],16)])):createCommentVNode("v-if",!0));P.render=oa;
P.__scopeId="data-v-5b373d6e";function Q(a,b,c,d,e,g){if(!(e-d<=c)){var f=d+e>>1;pa(a,b,f,d,e,g%2);Q(a,b,c,d,f-1,g+1);Q(a,b,c,f+1,e,g+1);}}
function pa(a,b,c,d,e,g){for(;e>d;){if(600<e-d){var f=e-d+1,l=c-d+1,k=Math.log(f),h=.5*Math.exp(2*k/3);k=.5*Math.sqrt(k*h*(f-h)/f)*(0>l-f/2?-1:1);pa(a,b,c,Math.max(d,Math.floor(c-l*h/f+k)),Math.min(e,Math.floor(c+(f-l)*h/f+k)),g);}f=b[2*c+g];l=d;h=e;R(a,b,d,c);for(b[2*e+g]>f&&R(a,b,d,e);l<h;){R(a,b,l,h);l++;for(h--;b[2*l+g]<f;)l++;for(;b[2*h+g]>f;)h--;}b[2*d+g]===f?R(a,b,d,h):(h++,R(a,b,h,e));h<=c&&(d=h+1);c<=h&&(e=h-1);}}function R(a,b,c,d){S(a,c,d);S(b,2*c,2*d);S(b,2*c+1,2*d+1);}
function S(a,b,c){let d=a[b];a[b]=a[c];a[c]=d;}let qa=a=>a[0],ra=a=>a[1];
class sa{constructor(a,b=qa,c=ra,d=64,e=Float64Array){this.nodeSize=d;this.points=a;let g=this.ids=new (65536>a.length?Uint16Array:Uint32Array)(a.length);e=this.coords=new e(2*a.length);for(let d=0;d<a.length;d++)g[d]=d,e[2*d]=b(a[d]),e[2*d+1]=c(a[d]);Q(g,e,d,0,g.length-1,0);}range(a,b,c,d){{var e=this.ids,g=this.coords,f=this.nodeSize;let k=[0,e.length-1,0],h=[],m,n;for(;k.length;){var l=k.pop();let q=k.pop(),r=k.pop();if(q-r<=f){for(l=r;l<=q;l++)m=g[2*l],n=g[2*l+1],m>=a&&m<=c&&n>=b&&n<=d&&h.push(e[l]);
continue}let p=Math.floor((r+q)/2);m=g[2*p];n=g[2*p+1];m>=a&&m<=c&&n>=b&&n<=d&&h.push(e[p]);let x=(l+1)%2;if(0===l?a<=m:b<=n)k.push(r),k.push(p-1),k.push(x);if(0===l?c>=m:d>=n)k.push(p+1),k.push(q),k.push(x);}a=h;}return a}within(a,b,c){{var d=this.ids,e=this.coords,g=this.nodeSize;let m=[0,d.length-1,0],n=[],q=c*c;for(;m.length;){var f=m.pop();let r=m.pop();var l=m.pop();if(r-l<=g){for(f=l;f<=r;f++){l=e[2*f]-a;var k=e[2*f+1]-b;l=l*l+k*k;l<=q&&n.push(d[f]);}continue}k=Math.floor((l+r)/2);let p=e[2*k],
x=e[2*k+1];{var h=p-a;let c=x-b;h=h*h+c*c;}h<=q&&n.push(d[k]);h=(f+1)%2;if(0===f?a-c<=p:b-c<=x)m.push(l),m.push(k-1),m.push(h);if(0===f?a+c>=p:b+c>=x)m.push(k+1),m.push(r),m.push(h);}a=n;}return a}}let ta={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:a=>a},T=Math.fround||(a=>b=>{a[0]=+b;return a[0]})(new Float32Array(1));
class ua{constructor(a){this.options=U(Object.create(ta),a);this.trees=Array(this.options.maxZoom+1);}load(a){let {log:b,minZoom:c,maxZoom:d,nodeSize:e}=this.options;b&&console.time("total time");var g=`prepare ${a.length} points`;b&&console.time(g);this.points=a;let f=[];for(let b=0;b<a.length;b++)a[b].geometry&&f.push(va(a[b],b));this.trees[d+1]=new sa(f,wa,xa,e,Float32Array);b&&console.timeEnd(g);for(a=d;a>=c;a--)g=+Date.now(),f=this._cluster(f,a),this.trees[a]=new sa(f,wa,xa,e,Float32Array),b&&
console.log("z%d: %d clusters in %dms",a,f.length,+Date.now()-g);b&&console.timeEnd("total time");return this}getClusters(a,b){let c=((a[0]+180)%360+360)%360-180;var d=Math.max(-90,Math.min(90,a[1])),e=180===a[2]?180:((a[2]+180)%360+360)%360-180;let g=Math.max(-90,Math.min(90,a[3]));if(360<=a[2]-a[0])c=-180,e=180;else if(c>e){var f=this.getClusters([c,d,180,g],b);d=this.getClusters([-180,d,e,g],b);return f.concat(d)}b=this.trees[this._limitZoom(b)];e=b.range(c/360+.5,V(g),e/360+.5,V(d));d=[];for(f of e)e=
b.points[f],d.push(e.numPoints?ya(e):this.points[e.index]);return d}getChildren(a){var b=this._getOriginId(a),c=this._getOriginZoom(a);let d=this.trees[c];if(!d)throw Error("No cluster with the specified id.");b=d.points[b];if(!b)throw Error("No cluster with the specified id.");b=d.within(b.x,b.y,this.options.radius/(this.options.extent*Math.pow(2,c-1)));c=[];for(let e of b)b=d.points[e],b.parentId===a&&c.push(b.numPoints?ya(b):this.points[b.index]);if(0===c.length)throw Error("No cluster with the specified id.");
return c}getLeaves(a,b,c){let d=[];this._appendLeaves(d,a,b||10,c||0,0);return d}getTile(a,b,c){let d=this.trees[this._limitZoom(a)];a=Math.pow(2,a);let {extent:e,radius:g}=this.options,f=g/e,l=(c-f)/a,k=(c+1+f)/a,h={features:[]};this._addTileFeatures(d.range((b-f)/a,l,(b+1+f)/a,k),d.points,b,c,a,h);0===b&&this._addTileFeatures(d.range(1-f/a,l,1,k),d.points,a,c,a,h);b===a-1&&this._addTileFeatures(d.range(0,l,f/a,k),d.points,-1,c,a,h);return h.features.length?h:null}getClusterExpansionZoom(a){let b=
this._getOriginZoom(a)-1;for(;b<=this.options.maxZoom;){a=this.getChildren(a);b++;if(1!==a.length)break;a=a[0].properties.cluster_id;}return b}_appendLeaves(a,b,c,d,e){b=this.getChildren(b);for(let g of b)if((b=g.properties)&&b.cluster?e=e+b.point_count<=d?e+b.point_count:this._appendLeaves(a,b.cluster_id,c,d,e):e<d?e++:a.push(g),a.length===c)break;return e}_addTileFeatures(a,b,c,d,e,g){for(let k of a){a=b[k];let h=a.numPoints;var f=void 0;let m;var l=void 0;h?(f=za(a),m=a.x,l=a.y):(l=this.points[a.index],
f=l.properties,m=l.geometry.coordinates[0]/360+.5,l=V(l.geometry.coordinates[1]));f={type:1,geometry:[[Math.round(this.options.extent*(m*e-c)),Math.round(this.options.extent*(l*e-d))]],tags:f};let n;h?n=a.id:this.options.generateId?n=a.index:this.points[a.index].id&&(n=this.points[a.index].id);void 0!==n&&(f.id=n);g.features.push(f);}}_limitZoom(a){return Math.max(this.options.minZoom,Math.min(Math.floor(+a),this.options.maxZoom+1))}_cluster(a,b){let c=[],{radius:d,extent:e,reduce:g,minPoints:f}=this.options,
l=d/(e*Math.pow(2,b));for(let d=0;d<a.length;d++){var k=a[d];if(k.zoom<=b)continue;k.zoom=b;let e=this.trees[b+1];var h=e.within(k.x,k.y,l),m=k.numPoints||1;let p=m;for(let a of h){var n=e.points[a];n.zoom>b&&(p+=n.numPoints||1);}if(p>m&&p>=f){n=k.x*m;let a=k.y*m;m=g&&1<m?this._map(k,!0):null;let f=(d<<5)+(b+1)+this.points.length;for(let c of h){h=e.points[c];if(h.zoom<=b)continue;h.zoom=b;let d=h.numPoints||1;n+=h.x*d;a+=h.y*d;h.parentId=f;g&&(m||(m=this._map(k,!0)),g(m,this._map(h)));}k.parentId=
f;c.push(Aa(n/p,a/p,f,p,m));}else if(c.push(k),1<p)for(let a of h)k=e.points[a],k.zoom<=b||(k.zoom=b,c.push(k));}return c}_getOriginId(a){return a-this.points.length>>5}_getOriginZoom(a){return (a-this.points.length)%32}_map(a,b){if(a.numPoints)return b?U({},a.properties):a.properties;a=this.points[a.index].properties;let c=this.options.map(a);return b&&c===a?U({},c):c}}function Aa(a,b,c,d,e){return {x:T(a),y:T(b),zoom:Infinity,id:c,parentId:-1,numPoints:d,properties:e}}
function va(a,b){let [c,d]=a.geometry.coordinates;return {x:T(c/360+.5),y:T(V(d)),zoom:Infinity,index:b,parentId:-1}}function ya(a){var b=a.id,c=za(a);return {type:"Feature",id:b,properties:c,geometry:{type:"Point",coordinates:[360*(a.x-.5),360*Math.atan(Math.exp((180-360*a.y)*Math.PI/180))/Math.PI-90]}}}
function za(a){let b=a.numPoints,c=1E4<=b?`${Math.round(b/1E3)}k`:1E3<=b?`${Math.round(b/100)/10}k`:b;return U(U({},a.properties),{cluster:!0,cluster_id:a.id,point_count:b,point_count_abbreviated:c})}function V(a){a=Math.sin(a*Math.PI/180);a=.5-.25*Math.log((1+a)/(1-a))/Math.PI;return 0>a?0:1<a?1:a}function U(a,b){for(let c in b)a[c]=b[c];return a}function wa(a){return a.x}function xa(a){return a.y}
class W{constructor({markers:a,position:b}){this.markers=a;b&&(this._position=b instanceof google.maps.LatLng?b:new google.maps.LatLng(b));}get bounds(){if(0!==this.markers.length||this._position)return this.markers.reduce((a,b)=>a.extend(b.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(a=>a.getVisible()).length}push(a){this.markers.push(a);}delete(){this.marker&&(this.marker.setMap(null),
delete this.marker);this.markers.length=0;}}class Ba{constructor({maxZoom:a=16}){this.maxZoom=a;}noop({markers:a}){return Ca(a)}}let Ca=a=>a.map(a=>new W({position:a.getPosition(),markers:[a]}));
class Da extends Ba{constructor(a){var {maxZoom:b,radius:c=60}=a,d=["maxZoom","radius"],e={},g;for(g in a)Object.prototype.hasOwnProperty.call(a,g)&&0>d.indexOf(g)&&(e[g]=a[g]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var f=0;for(g=Object.getOwnPropertySymbols(a);f<g.length;f++)0>d.indexOf(g[f])&&Object.prototype.propertyIsEnumerable.call(a,g[f])&&(e[g[f]]=a[g[f]]);}super({maxZoom:b});this.superCluster=new ua(Object.assign({maxZoom:this.maxZoom,radius:c},e));this.state={zoom:null};}calculate(a){let b=
!1;if(!I(a.markers,this.markers)){b=!0;this.markers=[...a.markers];var c=this.markers.map(a=>({type:"Feature",geometry:{type:"Point",coordinates:[a.getPosition().lng(),a.getPosition().lat()]},properties:{marker:a}}));this.superCluster.load(c);}c={zoom:a.map.getZoom()};b||this.state.zoom>this.maxZoom&&c.zoom>this.maxZoom||(b=b||!I(this.state,c));this.state=c;b&&(this.clusters=this.cluster(a));return {clusters:this.clusters,changed:b}}cluster({map:a}){return this.superCluster.getClusters([-180,-90,180,
90],Math.round(a.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[a,b]},properties:c}){if(c.cluster)return new W({markers:this.superCluster.getLeaves(c.cluster_id,Infinity).map(a=>a.properties.marker),position:new google.maps.LatLng({lat:b,lng:a})});a=c.marker;return new W({markers:[a],position:a.getPosition()})}}
class Ea{constructor(a,b){this.markers={sum:a.length};a=b.map(a=>a.count);let c=a.reduce((a,b)=>a+b,0);this.clusters={count:b.length,markers:{mean:c/b.length,sum:c,min:Math.min(...a),max:Math.max(...a)}};}}class Fa{render({count:a,position:b},c){c=window.btoa(`
  <svg fill="${a>Math.max(10,c.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);return new google.maps.Marker({position:b,icon:{url:`data:image/svg+xml;base64,${c}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(a),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${a} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+a})}}class Ga{constructor(){var a=Ga,b=google.maps.OverlayView;for(let c in b.prototype)a.prototype[c]=b.prototype[c];}}var X,Y=X||(X={});Y.CLUSTERING_BEGIN="clusteringbegin";Y.CLUSTERING_END="clusteringend";
Y.CLUSTER_CLICK="click";let Ha=(a,b,c)=>{c.fitBounds(b.bounds);};
class Ia extends Ga{constructor({map:a,markers:b=[],algorithm:c=new Da({}),renderer:d=new Fa,onClusterClick:e=Ha}){super();this.markers=[...b];this.clusters=[];this.algorithm=c;this.renderer=d;this.onClusterClick=e;a&&this.setMap(a);}addMarker(a,b){this.markers.includes(a)||(this.markers.push(a),b||this.render());}addMarkers(a,b){a.forEach(a=>{this.addMarker(a,!0);});b||this.render();}removeMarker(a,b){let c=this.markers.indexOf(a);if(-1===c)return !1;a.setMap(null);this.markers.splice(c,1);b||this.render();
return !0}removeMarkers(a,b){let c=!1;a.forEach(a=>{c=this.removeMarker(a,!0)||c;});c&&!b&&this.render();return c}clearMarkers(a){this.markers.length=0;a||this.render();}render(){let a=this.getMap();if(a instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,X.CLUSTERING_BEGIN,this);let {clusters:b,changed:c}=this.algorithm.calculate({markers:this.markers,map:a,mapCanvasProjection:this.getProjection()});if(c||void 0==c)this.reset(),this.clusters=b,this.renderClusters();google.maps.event.trigger(this,
X.CLUSTERING_END,this);}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this));this.render();}onRemove(){google.maps.event.removeListener(this.idleListener);this.reset();}reset(){this.markers.forEach(a=>a.setMap(null));this.clusters.forEach(a=>a.delete());this.clusters=[];}renderClusters(){let a=new Ea(this.markers,this.clusters),b=this.getMap();this.clusters.forEach(c=>{1===c.markers.length?c.marker=c.markers[0]:(c.marker=this.renderer.render(c,a),this.onClusterClick&&c.marker.addListener("click",
a=>{google.maps.event.trigger(this,X.CLUSTER_CLICK,c);this.onClusterClick(a,c,b);}));c.marker.setMap(b);});}}let Ja=Object.values(X);
defineComponent({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:Ja,setup(a,{emit:b,expose:c,slots:d}){let e=ref(),g=inject(t,ref()),f=inject(u,ref());provide(w,e);watch(g,()=>{g.value&&(e.value=markRaw(new Ia({map:g.value,...a.options})),Ja.forEach(a=>{var c;null===(c=e.value)||void 0===c?void 0:c.addListener(a,c=>b(a,c));}));},{immediate:!0});onBeforeUnmount(()=>{var a;e.value&&(null===(a=f.value)||void 0===a?void 0:a.event.clearInstanceListeners(e.value),e.value.clearMarkers(),
e.value.setMap(null));});c({markerCluster:e});return ()=>{var a;return null===(a=d.default)||void 0===a?void 0:a.call(d)}}});var Z=defineComponent({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(a,{slots:b,emit:c}){let d=ref(),e=ref(),g=computed(()=>{var a;return null===(a=b.default)||void 0===a?void 0:a.call(b).some(a=>a.type!==Comment)}),f=computed(()=>({...a.options,element:d.value}));onMounted(()=>{e=J(y,[],f,c);});return {customMarkerRef:d,customMarker:e,hasSlotContent:g}}});G("\n.custom-marker-wrapper[data-v-b9d5ec8a] {\n  display: none;\n}\n.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {\n  display: inline-block;\n}\n");
let La=withScopeId("data-v-b9d5ec8a");pushScopeId("data-v-b9d5ec8a");let Ma={key:0,class:"custom-marker-wrapper"};popScopeId();let Na=La(a=>a.hasSlotContent?(openBlock(),createBlock("div",Ma,[createVNode("div",mergeProps({ref:"customMarkerRef",style:{cursor:a.$attrs.onClick?"pointer":void 0}},a.$attrs),[renderSlot(a.$slots,"default",{},void 0,!0)],16)])):createCommentVNode("v-if",!0));Z.render=Na;Z.__scopeId="data-v-b9d5ec8a";
defineComponent({name:"HeatmapLayer",props:{options:{type:Object,default:()=>({})}},setup(a){let b=ref(),c=inject(t,ref()),d=inject(u,ref());watch([c,()=>a.options],([,a],[g,f])=>{var e;g=!I(a,f)||c.value!==g;if(c.value&&d.value&&g){a=structuredClone(a);if(a.data&&!(a.data instanceof d.value.MVCArray)){let b=d.value.LatLng;a.data=null===(e=a.data)||void 0===e?void 0:e.map(a=>a instanceof b||"location"in a&&(a.location instanceof b||null===a.location)?a:"location"in a?{...a,location:new b(a.location)}:
new b(a));}b.value?b.value.setOptions(a):b.value=markRaw(new d.value.visualization.HeatmapLayer({...a,map:c.value}));}},{immediate:!0});onBeforeUnmount(()=>{b.value&&b.value.setMap(null);});return {heatmapLayer:b}},render:()=>null});

const apiKey = "AIzaSyCE0jz3YRTCfMzWYj_3En9wXyirf4UVnAc";
const _sfc_main = {
  __name: "GoogleMap",
  __ssrInlineRender: true,
  props: ["lat", "long"],
  setup(__props) {
    const center = { lat: 16.241375, lng: -61.568889 };
    const options = {
      mapId: "7263aa238f6e44ca",
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#523735"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f1e6"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9b2a6"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#dcd2be"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ae9e90"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#93817c"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a5b076"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#447530"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f1e6"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#fdfcf8"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f8c967"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#e9bc62"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#e98d58"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#db8555"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#806b63"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8f7d77"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ebe3cd"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#b9d3c2"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#92998d"
            }
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(F), mergeProps({
        "api-key": apiKey,
        options: options.mapId,
        styles: options.styles,
        style: { "width": "670px", "height": "380px" },
        center,
        zoom: 15
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(fa), {
              options: { position: center }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(fa), {
                options: { position: center }
              }, null, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GoogleMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=GoogleMap-0faaa0e0.mjs.map
