cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sharesdk/www/ShareSDK.js",
        "id": "cordova-plugin-sharesdk.sharesdk",
        "clobbers": [
            "sharesdk"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sharesdk/www/ShareSDKConstants.js",
        "id": "cordova-plugin-sharesdk.ShareSDK",
        "clobbers": [
            "ShareSDK"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});