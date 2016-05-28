/* globals HTMLElement, MutationObserver */

function isElement(o) {
    return (
      typeof HTMLElement === 'object' ? o instanceof HTMLElement :
      o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
    );
}

var WatchDom = function() {
    var _this = this;
    this._notifycb = [];
    this.observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (_this._notifycb.length > 0) {
                _this._notifycb.map(function(cb) {
                    cb(mutation);
                });
            }
        });
    });
    return this;
};

WatchDom.prototype = {
    observe: function(element, options) {
        options = options || { attributes: true, childList: true, characterData: true };
        if (arguments.length > 0 && isElement(element)) {
            this.observer.observe(element, options);
        }
        return this;
    },
    stop: function() {
        this.observer.disconnect();
        return this;
    },
    notify: function(cb) {
        if (typeof cb === 'function') {
            this._notifycb.push(cb.bind(this));
        }
        return this;
    }
};

module.exports = WatchDom;
