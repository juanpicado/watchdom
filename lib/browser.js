
var WatchDom = require('./index');
module.exports = function() {
    return new (Function.prototype.bind.call(WatchDom, null, []))();
};
