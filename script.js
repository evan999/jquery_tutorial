$(document).ready(function(){
    alert("jquery loaded");
})

$("#lead-banner p");

$("h3").css({border: "3px solid blue"});

$(".wrapper").css({border: "3px solid red"});

$("#clients").css({border: "3px solid yellow"});

// first and last

$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});

// first-child and last-child

$("contact ul:first-child").css({border: "2px solid red"});
$("contact ul:last-child").css({border: "2px solid red"});

// even 

$("header nav li:even").css({border: "2px solid blue"});

// odd

$("header nav li:odd").css({border: "2px solid blue"});

// not

$("section:not('#contact')").css({border: "2px solid green"});

// less than

$("social-nav li:lt(3)").css({border: "2px solid blue"});

// greater than

$("social-nav li:gt(2)").css({border: "2px solid blue"});

// Attributes

$("img[alt]").css({border: "2px solid pink"});

// Attribute with specific value

$("img[alt=quote]").css({border: "2px solid purple"});










