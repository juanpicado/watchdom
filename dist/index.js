var domWatcher=function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){function e(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}var o=function(){var t=this;return this._notifycb=[],this.observer=new MutationObserver(function(n){n.forEach(function(n){t._notifycb.length>0&&t._notifycb.map(function(t){t(n)})})}),this};o.prototype={observe:function(t,n){return n=n||{attributes:!0,childList:!0,characterData:!0},arguments.length>0&&e(t)&&this.observer.observe(t,n),this},stop:function(){return this.observer.disconnect(),this},notify:function(t){return"function"==typeof t&&this._notifycb.push(t.bind(this)),this}},t.exports=function(){return new(Function.prototype.bind.call(o,null,[]))}}]);