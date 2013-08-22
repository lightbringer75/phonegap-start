var app = {
    // Application Constructor
    initialize: function() {this.bindEvents();},
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are: 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function ()
    {
        document.addEventListener('deviceready', this.onDeviceReady, false);
//        document.addEventListener('offline', this.onOffline, false);
//        document.addEventListener('online', this.onOnline, false);
//        document.addEventListener('load', this.onLoad, false);
    },
    ElShow: function (id) { document.getElementById(id).setAttribute('style', 'display:block;'); },
    ElHide: function (id) { document.getElementById(id).setAttribute('style', 'display:none;'); },
    /*
    HideDiv: function (id)
    {
        document.getElementById('DeviceConnecting').setAttribute('style', 'display:none;');
        document.getElementById('DeviceReady').setAttribute('style', 'display:none;');
        document.getElementById('').setAttribute('style', 'display:none;');
        document.getElementById('').setAttribute('style', 'display:none;');
        document.getElementById(id).setAttribute('style', 'display:block;');
    },
    */
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'DeviceReadyEvent' function, we must explicity call 'app.DeviceReadyEvent(...);'
    onDeviceReady: function () { app.DeviceReadyEvent('DeviceReady'); },
    DeviceReadyEvent: function (id)
    {
        app.ElHide('DeviceConnecting');
        app.ElShow('DeviceReady');
        console.log('Received Event: ' + id);
    },

    onOffline: function () { app.OfflineEvent('offline'); },
    OfflineEvent: function (id)
    {
        app.ElHide('DeviceOnline');
        app.ElShow('DeviceOffline');
        console.log('Received Event: ' + id);
    },

    onOnline: function () { app.OnlineEvent('online'); },
    OnlineEvent: function (id)
    {
        app.ElHide('DeviceOffline');
        app.ElShow('DeviceOnline');
        console.log('Received Event: ' + id);
        //DeviceReadyElement.nodeValue = "Ciao"
    },
    onLoad: function () { app.LoadEvent('load'); },
    LoadEvent: function (id)
    {
        console.log('Received Event: ' + id);
    }
};
