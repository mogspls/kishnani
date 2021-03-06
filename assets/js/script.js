// Once page is loaded, load script
$(document).ready(function(){
    
    // Hamburger
    $("#hamburger").on('click', function(){
        $(this).toggleClass("active");
        $("section#navigation").fadeToggle(100);
    });
    
    
    // Initiate Slick.JS (The Slider)
    $('#carousel').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: "<button>&lt;</button>",
        nextArrow: "<button>&gt;</button>"
    });
    
    // Video
    
    $("button#video").on('click', function(){
        $("#modal").fadeToggle();
        $("body").toggleClass("noscroll");
    });
    
    // If clicked outside div, then close modal
    $('#modal').click(function (event) {
        $(this).fadeToggle();
    });
})