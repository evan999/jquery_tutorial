$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper");

var button = $("#lead-banner a");

button[0].onclick = function(){
    $("#point-of-sale").toggleClass("open");
    return false;
};












