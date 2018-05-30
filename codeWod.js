"use strict";

$(document).ready(function(){
    $("#blog").toggle();
    $("#information").hide();
    $("#wod").hide();
    $("#workOutOfTheDayToggle").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
    })
    $("#cross").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
    })
    $("#currentWod").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
        dropDown();
    })
    $("#resultToggle").click(function(){
        $("#resultDiv").toggle();
    })
    $("#blogToggle").click(function(){
        $("#blog").toggle();
    })
    $("#infoToggle").click(function(){
        $("#information").toggle();
    })
    $("#about").click(function () {
        $("#information").toggle();
        dropDown();
    })
    $("#currentResults").click(function () {
        $("#resultDiv").toggle();
        dropDown();
    })
     $("#blogger").click(function () {
        $("#blog").toggle();
        dropDown(); 
     })
     $("#contact").click(function(){
         dropDown();
     })
     $("#reset").click(function(){
         hideDivs();
         dropDown();
     })
     $("#fullMenuHome").click(function(){
         hideDivs();
     })
    $("#fullMenuBlog").click(function () {
        $("#blog").toggle();
    })
    $("#fullMenuAbout").click(function () {
        $("#information").toggle();
    })
    $("#previousWorkouts").click(function(){
        $("#historical").toggle();
    })
})

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function hideDivs(){
    //$("#wod").hide();
    $("#information").hide();
    $("#resultDiv").hide();
    $("#blog").hide();
    $("#wod").hide();
    $("#crossDiv").show();
    $("#historical").hide();
}


// Drive api*************************************
/* function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'YOUR_API_KEY',
        // clientId and scope are optional if auth is not required.
        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.request({
            'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
        })
    }).then(function (response) {
        console.log(response.result);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
// 1. Load the JavaScript client library.
gapi.load('client', start); */

