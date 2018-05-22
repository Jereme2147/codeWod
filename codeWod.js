"use strict";

var wodTogCount = 2;
var currentResult = "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTlUkyKqM_UBrIxv-7zqr-xQbmIhRwyfUJG6qKMYCGnDxgLPKKKaIqaJvB3bkeCdov6M4_M3nEV2xbQ/pubhtml?widget=true&amp;headers=false\"></iframe>" ;
$(document).ready(function () {
     hideDivs();
     $("#wod").show();
     $("#workOutOfTheDayToggle").click(function(){
         $("#wod").toggle("slow");
         wodArrows();
        
     })
     $("#about").click(function(){
        hideDivs();
        $("#information").toggle("slow");
        dropDown();
     })
     $("#currentWod").click(function(){
         hideDivs();
         $("#wod").show();
         dropDown();
     })
     $("#currentResults").click(function(){
        $("#resultDiv").toggle();
         dropDown();
     })
     $("#reset").click(function(){
         hideDivs();
         dropDown();
         $("#wod").show();
         wodTogCount ++;
         wodArrows();
         
     })
     $("#contact").click(function(){
        $("#contactInfo").toggle();
        dropDown();
     })
     $("#blogger").click(function(){
         $("#blog").toggle();
         dropDown();
     })
});
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function hideDivs(){
    //$("#wod").hide();
    $("#information").hide();
    $("#resultDiv").hide();
    $("#contactInfo").hide();
    $("#blog").hide();
}
function wodArrows(){
    var wodTogUp = "<i class=\"fas fa-angle-double-down fa-2x\"></i>"
    var wodTogDown = "<i class=\"fas fa-angle-double-up fa-2x\"></i>"
    if (wodTogCount % 2 == 1) {
        $("#workOutOfTheDayToggle").html(wodTogDown);
    } else {
        $("#workOutOfTheDayToggle").html(wodTogUp);
    }
    wodTogCount++;
}