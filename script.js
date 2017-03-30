/* global $ */
$(document).ready(function() {
    
    $("#counter").hide();
    $("label").hide();
    $(".quest").hide();
    
    var current = 0;  
    
    function nextpg(){
        var next = current + 1;
        var currentSel = ".q" + current;
        var nextSel =".q" + next;
        $(currentSel).hide();
        $(nextSel).show();
        current+= 1;
    }
    
    var points = 0;
    
    function addpoint(){
        points = points + 1;
        return points;
    }

    function changegreen(){
        $("body").css("background-color", "green");
        }
    function changered(){
        $("body").css("background-color", "red");
        }
    
    $(".right").click(function(){
        changegreen();
    });
    $(".wrong").click(function() {
        changered();
    });
    
    $("#start").click(function(){
        $("#counter").show();
        $("label").show();
        $("#home").hide();
    });
    
    $("button").click(function(){
        nextpg();
        // $("#first").show();
    });
    
    $(".right").click(function(){
        addpoint();
        $
    });
});