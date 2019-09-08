

//loading start function
$(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("#ecg").fadeOut(2000 , function(){
        $("body").css("overflow" , "auto");
    })
})
    


//owl crasuol for parients section1
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})