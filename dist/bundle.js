/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={740:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),s=n(667),c=n.n(s),d=new URL(n(626),n.b),l=a()(r()),p=c()(d);l.push([e.id,`body {\n  background-color: bisque;\n}\n\n.header {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header h1,\np {\n  margin: 0px;\n}\n\n.todoListContainer {\n  border-top: 2px solid black;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-top: 16px;\n}\n\n.noTodosText {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  color: green;\n}\n\n.todoCard {\n  border: solid 2px blue;\n  color: white;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: center;\n  background: url(${p});\n}\n\n.todoCardRed {\n  background-color: red;\n}\n\n.todoCardGreen {\n  background-color: green;\n}\n\n.todo-priority {\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n\n.todo-priority-high {\n  background-color: red;\n}\n.todo-priority-medium {\n  background-color: yellow;\n}\n.todo-priority-low {\n  background-color: green;\n}\n`,""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},626:(e,t,n)=>{e.exports=n.p+"11847e03ada611eb2580.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{n.d(o,{L:()=>L});const e=e=>{const t=document.createElement("p");return t.classList.add("todo-completion-status"),t.innerText=e?"Completed":"Pending",t},t=(e,t)=>{!0===e.completed?(t.classList.remove("todoCardRed"),t.classList.add("todoCardGreen")):!1===e.completed?(t.classList.remove("todoCardGreen"),t.classList.add("todoCardRed")):alert("something is wrong in teh refreshTodoItemCardColor function")},r=()=>{document.querySelector(".todoListContainer").innerHTML=""},i=n=>{const o=document.createElement("div");return o.classList.add("todoCard"),o.appendChild((e=>{const t=document.createElement("h3");return t.classList.add("todo-title"),t.textContent=e,t})(n.title)),o.appendChild((e=>{const t=document.createElement("p");return t.classList.add("todo-description"),t.innerText=e,t})(n.description)),o.appendChild((e=>{const t=document.createElement("p");return t.classList.add("todo-due-date"),t.innerText=e,t})(n.dueDate)),o.appendChild((e=>{const t=document.createElement("p");return t.classList.add("todo-priority"),t.innerText=`Priority: ${e}`,"high"===e&&t.classList.add("todo-priority-high"),"medium"===e&&t.classList.add("todo-priority-medium"),"low"===e&&t.classList.add("todo-priority-low"),t})(n.priority)),o.appendChild((e=>{const t=document.createElement("p");return t.classList.add("todo-Notes-status"),t.innerText=e,t})(n.notes)),o.appendChild((e=>{const t=document.createElement("p");return t.classList.add("todo-Project-status"),t.innerText=`Project: ${e}`,t})(n.project)),o.appendChild(e(n.completed)),t(n,o),o.appendChild(((n,o)=>{const r=document.createElement("button");return r.classList.add("toggleCompletionStatus"),r.innerText="Toggle completion",r.addEventListener("click",(()=>{const r=o.querySelector(".todo-completion-status");var i;n.completed=!0!==(i=n.completed)&&(!1===i||void alert("Something is wrong in the code because the completion status is neither true nor false. on the toggleTodoItemCompletionStatus function"));const a=e(n.completed);o.replaceChild(a,r),t(n,o)})),r})(n,o)),o.appendChild((e=>{const t=document.createElement("button");return t.classList.add("deleteButton"),t.textContent="Delete ToDo",t.addEventListener("click",(()=>{console.log(e);const t=L.indexOf(e);L.splice(t,1),r(),a(L)})),t})(n)),o},a=e=>{const t=document.querySelector(".todoListContainer");if(e.length<=0){const e=document.createElement("p");e.classList.add("noTodosText"),e.innerText="No pending To-Dos - ¡Congratulations!",t.appendChild(e)}else e.forEach((e=>{t.appendChild(i(e))}))};class s{constructor(e,t,n,o,r,i,a){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.project=i,this.completed=a}}document.querySelector(".createDummyDataButton").addEventListener("click",(()=>{r(),c(L),a(L)}));const c=e=>{if(!0===isNaN(3))alert("Please enter a number.");else for(let t=0;t<3;t++)e.push(new s("hello","this is the description","2024-12-31","high","this is the notes","this is the project",!0))};var d=n(379),l=n.n(d),p=n(795),u=n.n(p),m=n(569),h=n.n(m),f=n(565),g=n.n(f),v=n(216),y=n.n(v),x=n(589),b=n.n(x),C=n(740),T={};T.styleTagTransform=b(),T.setAttributes=g(),T.insert=h().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=y(),l()(C.Z,T),C.Z&&C.Z.locals&&C.Z.locals;let L=[];L.push(new s("Title 1","Description 1","Due date 1","Priority 1","Notes 1","Project 1",!0)),c(L),a(L)})()})();