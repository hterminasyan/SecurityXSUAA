$.response.contentType = "application/json";
$.response.status = 200;
$.response.contentType = "text/plain";

$.import("xsodata", "jsexit");
var jsexit = $.xsodata.jsexit;

//Implementation of GET call
function fnHandleGet() {
   
   var x = jsexit.create("vla");
}

//Implementation of PUT call
function fnHandlePut() {
    return {"myStatus":"success"};
}

try {
    switch ( $.request.method ) {
        //Handle your GET calls here
        case $.net.http.GET:
            $.response.setBody(JSON.stringify(fnHandleGet()));
            break;
        //Handle your PUT calls here
        case $.net.http.PUT:
            $.response.setBody(JSON.stringify(fnHandlePut()));
            break;            
        default:
            break;
    }
} catch (err) {
    $.response.setBody("Failed to execute action: " + err.toString());
}