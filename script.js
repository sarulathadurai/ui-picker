
$.get("components/navbar.html", function(data){
    $("#navbar").replaceWith(data);
});

$(function(){
    $("#nav").load("../components/navbar.html")
});
