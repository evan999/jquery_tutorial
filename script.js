// Signal page to load changes before page is fully loaded

$(document).on("ready", function(){
    
    $("*").on("click", function(){
        
       console.log(e.target);
       console.log("The event type is: " + e.type); 
       console.log("X coordinate of the event is: " + e.pageX);
       console.log("Y coordinate of the event is: " + e.pageY);
       e.stopPropagation();
       
    });
    
    element.on("click", function(e){
        
    });
    
});

$(document).ready(function(){
 
});

// Wait for element to fully load before changes apply

$(window).on("load", function(){
    
});

$(window).onload(function(){
    
});











