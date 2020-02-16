$(document).ready(function(){
    // Once page is loaded, load script
    $("#hamburger").on('click', function(){
        $(this).toggleClass("active");
        $("section#navigation").fadeToggle(100);
    });
})