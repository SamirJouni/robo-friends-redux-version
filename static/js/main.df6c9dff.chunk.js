(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(42)},37:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(17),c=n.n(a),i=n(7),s=n(2),l=n(21),u=n(22),h=n(3),d={searchField:""},f={isPending:!1,robots:[],error:""},b=(n(35),n(37),n(4)),g=n(5),p=n(8),m=n(6),v=n(9),E=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green-custom dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"avatar"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},w=function(e){var t=e.robots;return o.a.createElement("div",{style:{height:"55vh",width:"110vw",overflowY:"scroll",paddingRight:"10vw"}},t.map(function(e){return o.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})}))},O=function(e){var t=e.onSearch;return o.a.createElement("div",{className:"pa2 "},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Search Robots"},onChange:t}))},R=function(e){return o.a.createElement("div",{style:{height:"100%",width:"100%",overflow:"hidden"}},e.children)},y=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Our Robots Are Down. We Are Trying To Fix Them..."):this.props.children}}]),t}(r.Component),S=(n(39),function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.handleRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.handleSearch,r=e.robots,a=e.isPending,c=r.filter(function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())});return a?o.a.createElement("h1",{className:"tc roboTitle"},"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"roboTitle"},"RoboFriends"),o.a.createElement(O,{onSearch:n}),o.a.createElement(R,null,o.a.createElement(y,null,o.a.createElement(w,{robots:c}))))}}]),t}(r.Component)),j=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{handleSearch:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},handleRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(S),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=Object(l.createLogger)(),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(h.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(h.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(h.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(h.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.e)(k,Object(s.d)(Object(s.a)(u.a,_)));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");T?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.df6c9dff.chunk.js.map