"use strict";
//using 4 globals for ease of access to the current workouts.  Will be easier to change daily as well.
let woOne = `https://docs.google.com/forms/d/e/1FAIpQLSdZGyPrso56KQb-WBNP_nUm3UjYS05jO_ObD_bcP1bi5u3wBw/viewform`;
let woTwo = `https://docs.google.com/forms/d/e/1FAIpQLSfVDm2u2OG2XAH9pUegr3Rv7ufMDjXbMqXgJvu1RzB6F9K6Vg/viewform`;
let woThree = `https://docs.google.com/forms/d/e/1FAIpQLSdgsmUI80wBbtkC7XUEJFCCtRhNWJ0_QV3ZyoSAdwNay4E7yA/viewform`;
let recentResult = `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT9dacwiRUis4SqIMLr5XALzX7Z98OHX-xs-mMEC8HdJwlibWY5Fsk-8HWsIUUp-xtHob_7v74ZDHie/pubhtml?widget=true&amp;headers=false"></iframe>"></iframe>`;
$(document).ready(function(){
   // alert("Please see the blog post for information");
    $("#blog").toggle();
    $("#information").hide();
    $("#wod").hide();
    $("#workOutOfTheDayToggle").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
        errorMessage();
    })
    $("#crossDiv").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
        errorMessage();
    })
    //removed for now.  Issue to be resolved with mobile
    //iframe scrolling and score entering. 
    //for now links off site. 
    /* $("#currentWod").click(function(){
        $("#wod").toggle("slow");
        $("#crossDiv").toggle();
        dropDown();
    }) */
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
    // $("#previousWorkouts").click(function(){
    //     $("#historical").toggle();
    // })
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
//error message for mobile. Don't delete, but can comment out
//when there's not issues. 
function errorMessage(){
    let message = `<div id="message" style="margin:auto"><p>Trouble viewing or scoring? <a href="${woOne}" target="_blank">CLICK</a>.</p></div>`
    if($("#wod").height() < 10){
        if ($(window).width() < 900) {
            $("#wod").prepend(message);
        }
    } else {
        $("#message").remove();
    }
}

$(document).ready(function(){
    //3-5 days of workouts. 
   //no need to edit anymore.  Using the globals for ease of daily edits and other options. 
    let workouts = {
        newest: woOne.replace('viewform', ''),
        oneBack: woTwo.replace('viewform', ''),
        twoBack: woThree.replace('viewform', ''),
        oneBackResults: recentResult.replace(`<iframe src="`, '').replace(`"></iframe>`, ''),
        oneBackResultsStart: `<iframe src="`,
        oneBackResutltsEnd: `"width="100%" height="250"></iframe>`,
        strStart: `<iframe class=".resp-iframe" id = "wodIframe" src = "`,
        strEnd: `viewform?embedded=true"width = "100%" height = "100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`,
        oldEnd: `viewform`,
    };
    //bellow goes away if I get the mobile iframe issue solved
    $("#currentWod").click(function () {
        $("#currentWod").attr("href", `${workouts.newest}${workouts.oldEnd}`);
        window.open(this.href);
        dropDown();
        return false;
    })
    //do not change bellow **********
    //ALL GOOD DO NOT EDIT DAILY
    $("#wod").html(`${workouts.strStart}${workouts.newest}${workouts.strEnd}`);
    $("#previousWorkouts").attr("href", `${workouts.oneBack}${workouts.oldEnd}`);
    $("#previousWorkouts").click(function(){
        window.open(this.href);
        return false;
    })
    $("#twoBack").attr("href", `${workouts.twoBack}${workouts.oldEnd}`);
    $("#twoBack").click(function () {
        window.open(this.href);
        return false;
    })
    $("#oneBackMobile").click(function(){
        $(this).attr("href", `${workouts.oneBack}${workouts.oldEnd}`);
        window.open(this.href);
        dropDown();
        return false;
    })
    $("#twoBackMobile").click(function () {
        $(this).attr("href", `${workouts.twoBack}${workouts.oldEnd}`);
        window.open(this.href);
        dropDown();
        return false;
    })
    $("#resultDiv").html(`${workouts.oneBackResultsStart}${workouts.oneBackResults}${workouts.oneBackResutltsEnd}`);
})

   
