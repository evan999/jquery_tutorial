// Adding content

var tweet = "<div style='margin: 20px 0; padding: 10px;"
+ "background: #eee'>The big fight live: Ham vs Cheese: </div>";

$("#tweets div").append(tweet);
$("#tweets div").prepend(tweet);
$("#tweets p").before(tweet);
$("#tweets p").after(tweet);
$("#tweets div").html(tweet);

$("#tweets div p").text(tweet);









