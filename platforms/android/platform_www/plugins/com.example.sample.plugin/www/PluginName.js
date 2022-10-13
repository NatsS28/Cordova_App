cordova.define("com.example.sample.plugin.PluginName", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'PluginName', 'coolMethod', [arg0]);
};

});
