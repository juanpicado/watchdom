var DefaultConfig = require('webpack-babel-conf');
var mutationConf = DefaultConfig('./lib/browser.js', './watchdom.browser.min.js', 'domWatcher');
// mutationConf.plugins = [];
module.exports = mutationConf;
