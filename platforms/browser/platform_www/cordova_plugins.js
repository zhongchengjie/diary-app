cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-sharesdk/www/ShareSDK.js",
        "id": "cordova-plugin-sharesdk.sharesdk",
        "pluginId": "cordova-plugin-sharesdk",
        "clobbers": [
            "sharesdk"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sharesdk/www/ShareSDKConstants.js",
        "id": "cordova-plugin-sharesdk.ShareSDK",
        "pluginId": "cordova-plugin-sharesdk",
        "clobbers": [
            "ShareSDK"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-sharesdk": "0.1.0"
}
// BOTTOM OF METADATA
});