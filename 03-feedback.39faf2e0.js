function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function j(t){return c=t,f=setTimeout(S,e),l?b(t):a}function x(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function S(){var t=p();if(x(t))return h(t);f=setTimeout(S,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function h(t){return f=void 0,v&&o?b(t):(o=r=void 0,a)}function w(){var t=p(),n=x(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,e),b(u)}return void 0===f&&(f=setTimeout(S,e)),a}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")};b.form.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),b.form.reset(),console.log(formData)})),b.form.addEventListener("input",t(e)((function(t){const e=t.target.value;formData[t.target.name]=e,localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),500));!function(t){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.input.value=e.email,b.textarea.value=e.message,console.log(e))}(),formData={};
//# sourceMappingURL=03-feedback.39faf2e0.js.map
