$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").slideUp(100);
        
        
    });
    
    $(".slide-button-down").on("click", function(){
        
        $("#lead-banner").slideDown(4000, function(){
            alert("animation complete");
        });
        
        
    });
    
    $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").toggle(1000, function(){
            alert("animation complete");
        });
        
        
    });
})











