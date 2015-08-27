function doClick(e) {
    alert($.label.text);
}
console.log('start');

var bc = Ti.Android.createBroadcastReceiver({
    onReceived: function() {
        $.label.text+=". Sie haben einen Kopfhörer angeschlossen";
        console.log('headset plugged');
    }
});

console.log('onReceived: ' + Ti.Android.ACTION_HEADSET_PLUG);


Ti.Android.registerBroadcastReceiver(bc, [Ti.Android.ACTION_HEADSET_PLUG]);



$.index.open();
