(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(t,e,a){t.exports=a(41)},31:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),o=(a(31),a(1)),d=a(2),u=a(3),c=a(6),h=a(5),l=a(4),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USE_IMAGE":var a=t.editorBounds,n=t.addImagesDefaultSize,s=t.addImagesTransform.concat();s[e.index]||(s[e.index]={x:(a.width-n.width)/2,y:(a.height-n.height)/2,scale:t.addImagesDefaultScale,rotation:0});var i=t.addImagesMatrix.concat();i[e.index]||(i[e.index]=[t.addImagesDefaultScale,0,0,t.addImagesDefaultScale,(a.width-n.width)/2,(a.height-n.height)/2]);var r=t.addImagesBounds.concat();return r[e.index]||(r[e.index]={x:(a.width-n.width)/2,y:(a.height-n.height)/2,width:n.width*t.addImagesDefaultScale,height:n.height*t.addImagesDefaultScale}),Object(o.a)(Object(o.a)({},t),{},{addImagesTransform:s,addImagesMatrix:i,addImagesBounds:r,justAdded:!0});case"REINIT_MOVABLE":return Object(o.a)(Object(o.a)({},t),{},{justAdded:!1});case"CLEAR_IMAGE":var d=t.addImagesTransform.concat();d[e.index]=null;var u=t.addImagesMatrix.concat();u[e.index]=null;var c=t.addImagesBounds.concat();return c[e.index]=null,Object(o.a)(Object(o.a)({},t),{},{addImagesTransform:d,addImagesMatrix:u,addImagesBounds:c});case"UPDATE_IMAGE":var h=t.addImagesTransform.concat();e.transform&&(h[e.index]=e.transform);var l=t.addImagesMatrix.concat();e.matrix&&(l[e.index]=e.matrix);var m=t.addImagesBounds.concat();return e.bounds&&(m[e.index]=e.bounds),Object(o.a)(Object(o.a)({},t),{},{addImagesTransform:h,addImagesMatrix:l,addImagesBounds:m,justAdded:!1});case"APP_INIT":return Object(o.a)(Object(o.a)({},t),e.data);case"SET_STORE_DATA":return Object(o.a)(Object(o.a)(Object(o.a)({},t),e.data),{},{loaded:!0,justAdded:!0});case"GO_PREV":return Object(o.a)(Object(o.a)({},t),{},{action:"prev"});case"GO_NEXT":return Object(o.a)(Object(o.a)({},t),{},{action:"next"});case"SAVE":return Object(o.a)(Object(o.a)({},t),{},{action:"save"});case"CLEAR_ACTION":return Object(o.a)(Object(o.a)({},t),{},{action:null});default:return t}},p=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return a.extraAction&&(e=t(e,a.extraAction)),e=m(e,a)},g=function(t,e,a,n){return{type:"UPDATE_IMAGE",index:t,transform:e,matrix:a,bounds:n}},b=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={},n.store=n.props.store,n.left_buttonHandler=n.left_buttonHandler.bind(Object(c.a)(n)),n.right_buttonHandler=n.right_buttonHandler.bind(Object(c.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"left_buttonHandler",value:function(t){this.store.dispatch({type:"GO_PREV"})}},{key:"right_buttonHandler",value:function(t){this.store.dispatch({type:"GO_NEXT"})}},{key:"render",value:function(){var t=[];return t.push(this.props.children),this.state.loaded&&(t.push(s.a.createElement("div",{id:"title",key:"title",className:"topMenuTitle"},this.state.title)),t.push(s.a.createElement("div",{id:"left",key:"left",className:"topMenuButton",style:{left:"1%"},onClick:this.left_buttonHandler},"\u041d\u0430\u0437\u0430\u0434")),t.push(s.a.createElement("div",{id:"right",key:"right",className:"topMenuButton",style:{right:"1%"},onClick:this.right_buttonHandler},"\u0412\u043f\u0435\u0440\u0435\u0434"))),s.a.createElement("div",{id:"TopMenu",style:this.props.style},t)}}]),a}(n.Component),f=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={},n.store=n.props.store,n.image_clickHandler=n.image_clickHandler.bind(Object(c.a)(n)),n.clear_buttonHandler=n.clear_buttonHandler.bind(Object(c.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"image_clickHandler",value:function(t){var e=t.target.id,a=Number(e.substr(3));this.store.dispatch(function(t){return{type:"USE_IMAGE",index:t}}(a))}},{key:"clear_buttonHandler",value:function(t){var e=t.target.id,a=Number(e.substr(3));this.store.dispatch(function(t){return{type:"CLEAR_IMAGE",index:t}}(a))}},{key:"render",value:function(){var t=[];if(t.push(this.props.children),this.state&&this.state.loaded&&this.state.addImagesSrc)for(var e=0;e<this.state.addImagesSrc.length;e++){var a=this.state.addImagesSrc[e];this.state.addImagesMatrix[e]?t.push(s.a.createElement("div",{id:"clr"+e,key:"clr"+e,className:"sideMenuButton",style:{top:e/this.state.addImagesSrc.length*100+50/this.state.addImagesSrc.length+"%",transform:"translate(-50%,-50%)"},onClick:this.clear_buttonHandler},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c")):t.push(s.a.createElement("img",{id:"img"+e,key:"img"+e,src:a,className:"sideMenuImage",style:{top:e/this.state.addImagesSrc.length*100+50/this.state.addImagesSrc.length+"%",transform:"translateY(-50%)",height:1/this.state.addImagesSrc.length*100+"%"},onClick:this.image_clickHandler}))}return s.a.createElement("div",{id:"SideMenu",style:this.props.style},t)}}]),a}(n.Component),v=a(17),y=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(d.a)(this,a),(n=e.call(this,t)).state={},n.store=n.props.store,n.currentZ=0,n.targetZs=[],n.targetRefs=[],n.moveableRefs=[];for(var i=0;i<10;i++)n.targetZs.push(0),n.targetRefs.push(s.a.createRef()),n.moveableRefs.push(s.a.createRef());return n.containerRef=s.a.createRef(),n.state={},n.movable_transformHandler=n.movable_transformHandler.bind(Object(c.a)(n)),n.movable_transformEndHandler=n.movable_transformEndHandler.bind(Object(c.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"movable_transformHandler",value:function(t){t.transform&&(t.target.style.transform=t.transform);var e=Number(t.target.id.substr(3)),a=this.state.addImagesTransform[e];null!=t.translate&&(a.x+=Number(t.delta[0])*a.scale,a.y+=Number(t.delta[1])*a.scale),null!=t.scale&&(a.scale*=Number(t.delta[0])),null!=t.rotate&&(a.rotation+=Number(t.delta)),this.store.dispatch(g(e,a))}},{key:"movable_transformEndHandler",value:function(t){var e=Number(t.target.id.substr(3)),a=/\((.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+),\s*(.+)\)/g.exec(window.getComputedStyle(t.target,null).transform),n=Object(o.a)({},this.state.addImagesMatrix);if(a){a.splice(0,1),n=[];for(var s=0;s<a.length;s++)n.push(a[s])}var i=t.target.getBoundingClientRect();i={x:i.x/this.props.geom.scale-this.props.geom.x,y:(i.y-this.props.geom.offsetY)/this.props.geom.scale-this.props.geom.y,width:i.width/this.props.geom.scale,height:i.height/this.props.geom.scale};var r=Object(o.a)({},this.state.addImagesTransform[e]);this.currentZ++,this.targetZs[e]=this.currentZ,this.store.dispatch(g(e,r,n,i))}},{key:"render",value:function(){var t=[];if(t.push(this.props.children),this.state.addImagesSrc){for(var e=[],a=0;a<this.state.addImagesSrc.length;a++)e.push({i:a,z:this.targetZs[a]});e.sort((function(t,e){return t.z-e.z}));for(var n=0;n<e.length;n++){var i=e[n].i,r=this.state.addImagesSrc[i],o=this.state.addImagesTransform[i],d=this.state.addImagesMatrix[i],u=this.state.addImagesBounds[i];o&&d&&u&&(t.push(s.a.createElement("img",{id:"img"+i,key:"img"+i,src:r,className:"editorImage",ref:this.targetRefs[i],style:{transform:"matrix(".concat(d,")"),width:this.state.addImagesDefaultSize.width,height:this.state.addImagesDefaultSize.height},onLoad:this.movable_transformEndHandler,onMouseDown:this.movable_transformEndHandler})),this.state.justAdded||t.push(s.a.createElement(v.a,{key:"Moveable"+i,ref:this.moveableRefs[i],target:this.targetRefs[i].current,pinchThreshold:20,container:this.containerRef.current,draggable:!0,scalable:!0,resizable:!1,warpable:!1,rotatable:!0,pinchable:!1,keepRatio:!0,origin:!1,throttleDrag:1.5,throttleRotate:.2,throttleResize:1,throttleScale:.01,onDrag:this.movable_transformHandler,onResize:this.movable_transformHandler,onScale:this.movable_transformHandler,onWarp:this.movable_transformHandler,onRotate:this.movable_transformHandler,onPinch:this.movable_transformHandler,onDragEnd:this.movable_transformEndHandler,onScaleEnd:this.movable_transformEndHandler,onResizeEnd:this.movable_transformEndHandler,onWarpEnd:this.movable_transformEndHandler,onRotateEnd:this.movable_transformEndHandler,onPinchEnd:this.movable_transformEndHandler})))}}return s.a.createElement("div",{id:"Editor",style:this.props.style,ref:this.containerRef},t)}}]),a}(n.Component),S=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).store=n.props.store,n.ref=s.a.createRef(),n.containerRef=s.a.createRef(),n.editorRef=s.a.createRef(),n.state={editorScale:.15,editorX:0,editorY:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){this.updateBounds(this.ref.current.clientWidth,this.ref.current.clientHeight)}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(Object(o.a)(Object(o.a)({},this.state),t))}}},{key:"updateBounds",value:function(t,e){if((this.lastWidth!==t||this.lastHeight!==e)&&this.state.editorBounds){this.lastWidth=t,this.lastHeight=e;var a=this.state.editorBounds,n=Math.min(t/a.width,e/a.height),s=(t-a.width*n)/2/n,i=(e-a.height*n)/2/n;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{editorScale:n,editorX:s,editorY:i}))}}},{key:"render",value:function(){var t=[];t.push(this.props.children);var e=0;this.ref.current&&(e=this.ref.current.getBoundingClientRect().y);var a={scale:this.state.editorScale,x:this.state.editorX,y:this.state.editorY,offsetY:e};return t.push(s.a.createElement("div",{id:"EditorContainer",key:"EditorContainer",ref:this.containerRef,style:{width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0,transform:"scale(".concat(this.state.editorScale,") translateX(").concat(this.state.editorX,"px) translateY(").concat(this.state.editorY,"px)")}},s.a.createElement(y,{id:"Editor",key:"Editor",scale:this.state.editorScale,store:this.props.store,ref:this.editorRef,geom:a,style:{width:this.state.editorBounds?this.state.editorBounds.width:0,height:this.state.editorBounds?this.state.editorBounds.height:0}}),s.a.createElement("img",{id:"MainImage",key:"MainImage",src:this.state.mainImageSrc}))),s.a.createElement("div",{id:"EditorPlace",style:this.props.style,ref:this.ref},t)}}]),a}(n.Component),E=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={},n.store=n.props.store,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();this.setState(t)}}},{key:"render",value:function(){var t=[];return t.push(this.props.children),t.push(s.a.createElement(f,{store:this.store,key:"SideMenu",style:{width:this.state.sideMenu?this.state.sideMenu.width:0,top:this.state.topMenu?this.state.topMenu.height:0}})),t.push(s.a.createElement(S,{store:this.store,key:"EditorPlace",style:{right:this.state.sideMenu?this.state.sideMenu.width:0,top:this.state.topMenu?this.state.topMenu.height:0}})),t.push(s.a.createElement(b,{store:this.store,key:"TopMenu",style:{height:this.state.topMenu?this.state.topMenu.height:0}})),s.a.createElement("div",{id:"Container"},t)}}]),a}(n.Component),O=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).store=n.props.store,n.state={isLoading:!1,isLoaded:!1},n.loader=null,n.result=null,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(t,e){}},{key:"onStoreChange",value:function(){if(this.mounted){var t=this.store.getState();t.reloadData||t.saveStorageData&&this.saveStorageData()}}},{key:"loadStorageData",value:function(){var t=this.localStorageManager.load();this.store.dispatch(function(t){return{type:"SET_STORAGE_DATA",data:t}}(t))}},{key:"saveStorageData",value:function(){this.localStorageManager.save({}),this.store.dispatch({type:"STORAGE_DATA_SAVED",data:{saveStorageData:!1}})}},{key:"render",value:function(){return null}}]),a}(n.Component),k=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={},n.store=n.props.store,n.actionMap={},n.appStartDelay=500,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.unsubscribe=this.store.subscribe((function(){t.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"onStoreChange",value:function(){var t=this;if(this.mounted){var e=this.store.getState();if(e.justAdded&&(this.loadTimeout=setTimeout((function(){t.store.dispatch({type:"REINIT_MOVABLE"})}),200)),e.action)switch(this.store.dispatch({type:"CLEAR_ACTION"}),e.action){case"next":this.props.app.props.onNext(this.props.app);break;case"prev":this.props.app.props.onPrev(this.props.app);break;case"save":this.props.app.props.onSave(this.props.app)}e.dataForStorageChanged&&this.store.dispatch({type:"SAVE_STORAGE_DATA",data:{saveStorageData:!0,dataForStorageChanged:null}})}}},{key:"stopTimeout",value:function(){this.loadTimeout&&(clearTimeout(this.loadTimeout),this.loadTimeout=null)}},{key:"waitForReload",value:function(){var t=this;this.stopTimeout(),this.loadTimeout=setTimeout((function(){t.store.dispatch({type:"RELOAD_STORE_DATA",data:{dataLoaded:!1,reloadData:!0,loadDataError:!1}})}),this.store.reloadTimeout)}},{key:"render",value:function(){return null}}]),a}(n.Component),j=a(16),I=a(8),_=a(14),w=a.n(_),M=(a(15),{assetsUrl:".",localStoreName:"appState_261020",isMobile:new w.a(window.navigator.userAgent).mobile(),isLocal:!/^h/.test(document.location.toString()),topMenu:{height:"5%"},sideMenu:{width:"10%"},editorBounds:{width:0,height:0},addImagesDefaultSize:{width:500,height:500},addImagesDefaultScale:.5,mainImageSrc:"",addImagesSrc:["","",""],addImagesMatrix:[null,null,null],addImagesBounds:[null,null,null],addImagesTransform:[null,null,null],title:""}),T=(a(40),Object(I.b)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),D=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={},n.initHandler=n.initHandler.bind(Object(c.a)(n)),n.resizeHandler=n.resizeHandler.bind(Object(c.a)(n)),n}return Object(u.a)(a,[{key:"updateLayout",value:function(){var t=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,e=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{windowWidth:t,windowHeight:e}))}},{key:"initHandler",value:function(t){this.updateLayout()}},{key:"resizeHandler",value:function(t){this.updateLayout()}},{key:"setData",value:function(t){T.dispatch(function(t){return{type:"SET_STORE_DATA",data:Object(o.a)({},t)}}(t))}},{key:"getData",value:function(t){return T.getState()}},{key:"componentDidUpdate",value:function(t,e,a){}},{key:"componentDidMount",value:function(){var t;T.dispatch((t=M,{type:"APP_INIT",data:Object(o.a)({},t)})),window.addEventListener("load",this.initHandler),window.addEventListener("resize",this.resizeHandler),this.props.onInit(this)}},{key:"render",value:function(){return s.a.createElement(j.a,{store:T},s.a.createElement(E,{id:"Container",windowWidth:this.state.windowWidth,windowHeight:this.state.windowHeight,store:T},s.a.createElement(O,{store:T}),s.a.createElement(k,{app:this,store:T})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=document.getElementById("editorWidget");console.log(H.getAttribute("oninit")),r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(D,{id:"editorApp",onInit:window[H.getAttribute("oninit")],onNext:window[H.getAttribute("onnext")],onPrev:window[H.getAttribute("onprev")]})),H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.27f89683.chunk.js.map