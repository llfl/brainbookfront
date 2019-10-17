var trackingId = "UA-30038099-8";
addLoadEvent(loadTracking);
function addLoadEvent(a) {
    var b = window.onload;
    if (typeof window.onload !== "function") {
        window.onload = a
    } else {
        window.onload = function() {
            b();
            a()
        }
    }
}
function loadTracking() {
    window.dataLayer = window.dataLayer || [];
    function a() {
        dataLayer.push(arguments)
    }
    a("js", new Date());
    a("config", trackingId)
};