/* global $*/
$(document).ready(function() {
    
// Monserrat Diaz Martinez
    $("#counter").hide();
    $("label").hide();
    $(".quest").hide();

// Monserrat Diaz Martinez
    var current = 0;  
    function nextpg(){
        var next = current + 1;
        var currentSel = ".q" + current;
        var nextSel =".q" + next;
        $(currentSel).hide();
        $(nextSel).show();
        current+= 1;
    }

// Yanella Lopez
    var totalRight = 0;
    function addpoint(){
        totalRight = totalRight + 1;
        return totalRight;
    }
    
// Joel Bravo
    function changegreen(){
        $("body").css("background-color", "#60f779");
        }
// Joel Bravo    
    function changered(){
        $("body").css("background-color", "#ff4732");
        }

// Joel Bravo
   var randomNum = Math.floor((Math.random()*5)+1);
         
        function color(){
        if (randomNum === 1){
           $("body").css("background-color", "#0067A9"); 
        }
        else if (randomNum === 2){
           $("body").css("background-color", "#760E32"); 
        }
        else if (randomNum === 3){
           $("body").css("background-color", "#EE5859"); 
        }
        else if (randomNum === 4){
           $("body").css("background-color", "#FFF67A"); 
        }
        else if (randomNum === 5){
           $("body").css("background-color", "#F69E61"); 
        }
        else {
            $("body").css("background-color", "#581845");
        }
    }


// Yanella Lopez
    function surprise(){
        if (totalRight === 10){
            color();
        }
        else {
            $("#extra").append("Can you do better next time?");
        }
    }
    

// Joel Bravo
    $(".right").click(function(){
        changegreen();
// Yanella Lopez
        addpoint();
        $("#counter").val(totalRight);
    });
    
// Joel Bravo
    $(".wrong").click(function() {
        changered();
    });

// Yanella Lopez
    $("#start").click(function(){
        $("#counter").show();
        $("label").show();
        $("#home").hide();
    });

// Monserrat Diaz Martinez
    $("button").click(function(){
        nextpg();
    });
    
// Yanella Lopez
    $(".pre").click(function(){
        surprise();
    });
});
