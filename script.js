element.on("click", function(){
    
});

$("#lead-banner").dblclick(function(){
    alert("you double clicked me");
    $("#lead-banner").off("dblclick");
});

$("#lead-banner").on("dblclick", function(){
    alert("you double clicked me");
});











