function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire7f27;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire7f27=a),a.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"3EsVB":"index.9db16aaf.js","cPzGy":"icons.c14567a0.svg"}'));var o=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),s=new P(r||[]);return i(o,"_invoke",{value:$(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",h="executing",f="completed",g={};function v(){}function _(){}function m(){}var y={};l(y,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&r.call(w,o)&&(y=w);var k=m.prototype=v.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function $(e,t,n){var r=p;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return H()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?f:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:H}}function H(){return{value:t,done:!0}}return _.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),l(k,c,"Generator"),l(k,o,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),q(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;q(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},c=async function(e){try{const t=await Promise.race([fetch(e),s(10)]),n=await t.json();if(!t.ok)throw new Error(`Opps ${n.message} , Error code ${t.status}`);return n}catch(e){throw e}},l=async function(e,t){try{const n=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await Promise.race([n,s(10)]),i=await r.json();if(!r.ok)throw new Error(`Opps ${i.message} , Error code ${r.status}`);return i}catch(e){throw e}};const u={recipe:{},search:{query:"",results:[],resultsPerPage:12,page:1},bookmarks:[]},d=function(e=u.search.page){u.search.page=e;const t=(e-1)*u.search.resultsPerPage,n=t+u.search.resultsPerPage;return u.search.results.slice(t,n)},p=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},h=function(e){u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),p()},f=async function(e){try{const t=Object.entries(e).filter((([e,t])=>e.startsWith("ingredient")&&""!==t)).map((([e,t])=>{const n=[quantity,unit,description]=t.split(",").map((e=>e.trim()));if(3!==n.length)throw new Error("oops the ingredintes format is not rescepted please try again withFormat: 'Quantity,Unit,Description'");return{quantity:quantity?+quantity:null,unit:unit,description:description}})),n={publisher:e.publisher,source_url:e.sourceUrl,image_url:e.sourceUrl,title:e.title,bookmarked:!0,ingredients:t,cooking_time:+e.cookingTime,servings:+e.servings},r=await l("https://forkify-api.herokuapp.com/api/v2/recipes?key=8b1dfc78-d0c2-4665-a2ba-3bfb894677e5",n);u.recipe=r.data.recipe,console.log(u.recipe),h(u.recipe)}catch(e){console.error(e)}};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){const e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();var v;v=new URL(a("kyEFX").resolve("cPzGy"),import.meta.url).toString();class _{render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,this._claer(),this._parentElment.insertAdjacentHTML("afterbegin",this._gernerateMarkup())}update(e){this._data=e;const t=this._gernerateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElment.querySelectorAll("*"));r.forEach(((e,t)=>{var n;const r=i[t];e.isEqualNode(r)||""===(null===(n=e.firstChild)||void 0===n?void 0:n.nodeValue.trim())||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}renderSpiner(){this._claer();const e=` \n  <div class='spinner'>\n  <svg>\n  <use href="${t(v)}#icon-loader"></use>\n  </svg>\n  </div> \n\n`;this._parentElment.insertAdjacentElement("beforeend",e.toDomElement())}_claer(){this._parentElment.innerHTML=""}renderError(e=`${this._errorMsg}`){this._claer();const n=` \n  <div class="error">\n  <div>\n    <svg>\n      <use href="${t(v)}#icon-alert-triangle"></use>\n    </svg>\n  </div>\n  <p>${e}</p>\n</div> \n`;this._parentElment.insertAdjacentElement("beforeend",n.toDomElement())}renderMessage(e=`${this._simpleMsg}`){this._claer();const n=` \n<div class="message">\n<div>\n  <svg>\n    <use href="${t(v)}#icon-smile"></use>\n  </svg>\n</div>\n<p>${e}</p>\n</div>\n\n`;this._parentElment.insertAdjacentElement("beforeend",n.toDomElement())}constructor(){g(this,"_data",void 0)}}var m=new class extends _{_gernerateMarkup(){return`\n  <figure class="recipe__fig">\n    <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${t(v)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>\n      <span class="recipe__info-text">minutes</span>\n\n</div>\n\n   \n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${t(v)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n  \n      <div class="recipe__info-buttons">\n        <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings btn--decrease-servings">\n          <svg>\n            <use href="${t(v)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button   data-update-to="${this._data.servings+1}" class="btn--tiny btn--update-servings btn--increase-servings">\n          <svg>\n            <use href="${t(v)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n    <svg>\n      <use href="${t(v)}#icon-user"></use>\n    </svg>\n  </div>\n\n  \n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${t(v)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n  </div>\n  \n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n${this._data.ingredients.map(this._generateMarkupIngredient).join(" ")}\n\n      \n    </ul>\n  </div>\n  \n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.source_url}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${t(v)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n \n  \n\n  `}addHandlerRender(e){["load","hashchange"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElment.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r>0&&e(r)}))}addHandlerbookmark(e){this._parentElment.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkupIngredient(e){return` <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${t(v)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?math.fraction(e.quantity).toString():""}\n    </div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n    </li>\n    `}constructor(...e){super(...e),g(this,"_parentElment",document.querySelector(".recipe")),g(this,"_errorMsg","we could not find your recipete, Please try again  "),g(this,"_simpleMsg","")}};var y=new class{getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentEl.querySelector(".search__field").value=""}constructor(){g(this,"_parentEl",document.querySelector(".search"))}};class b extends _{_gernerateMarkup(){return this._data.map(this._gernerateMarkupPreview).join(" ")}_gernerateMarkupPreview(e){return`\n     <li class="preview">\n            <a class="preview__link ${window.location.hash.slice(1)===e.id?"preview__link--active":""}" href="#${e.id}">\n              <figure class="preview__fig">\n                 <img src="${e.image_url}" alt="${e.title}"/>  \n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${e.title}</h4>\n                <p class="preview__publisher">${e.publisher}</p>\n            \n              </div>\n              <div class="preview__user-generated ${e.key?"":"hidden"}">\n              <svg>\n                <use href="${t(v)}#icon-user"></use>\n              </svg>\n            </div>\n            </a>\n\n          </li>\n    `}}var w=new class extends b{constructor(...e){super(...e),g(this,"_errorMsg","we could not find your query , Please try again with another name "),g(this,"_parentElment",document.querySelector(".results"))}};var k=new class extends _{_gernerateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage),n=this._data.page;return 1===n&&e>1?`   \n     <button data-goto=" ${n+1}" class="btn--inline pagination__btn--next">\n     <span>Page  ${n+1}</span>\n     <svg class="search__icon">\n       <use href="${t(v)}#icon-arrow-right"></use>\n     </svg>\n   </button> \n    `:n<e?`\n       <button data-goto=" ${n-1}" class="btn--inline pagination__btn--prev">\n       <svg class="search__icon">\n         <use href="${t(v)}#icon-arrow-left"></use>\n       </svg>\n       <span>Page ${n-1}</span>\n     </button>\n\n     <button data-goto=" ${n+1}" class="btn--inline pagination__btn--next">\n     <span>Page  ${n+1}</span>\n     <svg class="search__icon">\n       <use href="${t(v)}#icon-arrow-right"></use>\n     </svg>\n   </button> \n      `:n===e&&e>1?`\n     <button data-goto=" ${n-1}" class="btn--inline pagination__btn--prev">\n     <svg class="search__icon">\n       <use href="${t(v)}#icon-arrow-left"></use>\n     </svg>\n     <span>Page ${n-1}</span>\n   </button>\n    `:""}addHandlerClick(e){this._parentElment.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}constructor(...e){super(...e),g(this,"_parentElment",document.querySelector(".pagination"))}};var E=new class extends b{addHandlerInit(e){window.addEventListener("load",e)}constructor(...e){super(...e),g(this,"_errorMsg","No bookmarks yet ,Find it and bookmark it  "),g(this,"_parentElment",document.querySelector(".bookmarks__list"))}};var x=new class extends _{_gernerateMarkup(){return'\n    <div class="upload__column">\n    <h3 class="upload__heading">Recipe data</h3>\n    <label>Title</label>\n    <input value="pizza marocain" required name="title" type="text" />\n    <label>URL</label>\n    <input value="https://"  name="sourceUrl" type="text" />\n    <label>Image URL</label>\n    <input value="https://"  name="image" type="text" />\n    <label>Publisher</label>\n    <input value="SOHAIB MANAH" required name="publisher" type="text" />\n    <label>Prep time</label>\n    <input value="23" required name="cookingTime" type="number" />\n    <label>Servings</label>\n    <input value="23" required name="servings" type="number" />\n  </div>\n\n  <div class="upload__column">\n    <h3 class="upload__heading">Ingredients</h3>\n    <label>Ingredient 1</label>\n    <input\n      value="0.5,kg,Rice"\n      type="text"\n      required\n      name="ingredient-1"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n    <label>Ingredient 2</label>\n    <input\n      value="1,,Avocado"\n      type="text"\n      name="ingredient-2"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n    <label>Ingredient 3</label>\n    <input\n      value=",,salt"\n      type="text"\n      name="ingredient-3"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n    <label>Ingredient 4</label>\n    <input\n      type="text"\n      name="ingredient-4"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n    <label>Ingredient 5</label>\n    <input\n      type="text"\n      name="ingredient-5"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n    <label>Ingredient 6</label>\n    <input\n      type="text"\n      name="ingredient-6"\n      placeholder="Format: \'Quantity,Unit,Description\'"\n    />\n  </div>\n\n  <button class="btn upload__btn">\n    <svg>\n      <use href="src/img/icons.svg#icon-upload-cloud"></use>\n    </svg>\n    <span>Upload</span>\n  </button>\n    '}render(){this._claer(),this._parentElment.insertAdjacentHTML("afterbegin",this._gernerateMarkup())}_showWindow(){this.render(),this.togglerWindow()}_addHandelShowWindow(){this._btnwOpen.addEventListener("click",this._showWindow.bind(this))}addHandelUpload(e){this._parentElment.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_addHandelHideWindowWindow(){this._btnwClose.addEventListener("click",this.togglerWindow.bind(this)),this._overlay.addEventListener("click",this.togglerWindow.bind(this))}togglerWindow(){this._overlay.classList.toggle("hidden"),this._winodw.classList.toggle("hidden")}constructor(){super(),g(this,"_parentElment",document.querySelector(".upload")),g(this,"_winodw",document.querySelector(".add-recipe-window")),g(this,"_overlay",document.querySelector(".overlay")),g(this,"_btnwOpen",document.querySelector(".nav__btn--add-recipe")),g(this,"_btnwClose",document.querySelector(".btn--close-modal")),g(this,"_simpleMsg","Recipe was succefffully uploded "),g(this,"_errorMsg","opps , cannot upload because bad connection your recipe please retry again  "),this._addHandelShowWindow(),this._addHandelHideWindowWindow()}};String.prototype.toDomElement=function(){const e=document.createElement("div");return e.innerHTML=this,e};const $=async function(){try{const e=window.location.hash.slice(1);if(!e)return;m.renderSpiner(),w.update(d()),await async function(e){try{const t=await c(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=8b1dfc78-d0c2-4665-a2ba-3bfb894677e5`),{recipe:n}=t.data;u.recipe=n,u.bookmarks.some((e=>e.id===n.id))?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1}catch(e){throw e}}(e),m.render(u.recipe),E.update(u.bookmarks)}catch(e){m.renderError()}},L=async function(){try{w.renderSpiner();const e=y.getQuery();if(!e)return;await async function(e){try{u.search.query=e;const t=await c(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=8b1dfc78-d0c2-4665-a2ba-3bfb894677e5`);u.search.results=t.data.recipes,u.search.page=1}catch(e){throw e}}(e),w.render(d()),k.render(u.search)}catch(e){console.error(e)}},S=function(e){w.render(d(e)),k.render(u.search)},q=function(e){!function(e){u.recipe.ingredients.forEach((t=>t.quantity*=e/u.recipe.servings)),u.recipe.servings=e}(e),m.update(u.recipe)},P=function(){u.recipe.bookmarked?function(e){const t=u.bookmarks.findIndex((t=>t.id===e));u.bookmarks.splice(t,1),e===u.recipe.id&&(u.recipe.bookmarked=!1),p()}(u.recipe.id):h(u.recipe),m.update(u.recipe),E.render(u.bookmarks)},O=function(){E.render(u.bookmarks)},H=async function(e){try{x.renderSpiner(),await f(e),m.render(u.recipe),E.render(u.bookmarks),x.renderMessage(),window.history.pushState(null,"",`#${u.recipe.id}`),setTimeout((()=>{x.togglerWindow()}),2500)}catch(e){x.renderError();
//! we should reset the form inthe casee of the  fail of  the uploaed and in the succes also
}};E.addHandlerInit(O),m.addHandlerRender($),m.addHandlerUpdateServings(q),m.addHandlerbookmark(P),y.addHandlerSearch(L),k.addHandlerClick(S),x.addHandelUpload(H);
//# sourceMappingURL=index.9db16aaf.js.map
