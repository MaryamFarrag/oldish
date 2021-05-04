$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})
$(document).ready(function(){
    setTimeout(function(){
        $(".cssload-my-name").css("opacity","0")
    },1000)
    setTimeout(function(){
        $(".box").css("opacity", "0");
    },1500)
    setTimeout(function(){
        $(".loading").css("opacity", "0");
        $(".loading").css("z-index","-100000");
    },2000)
}) 

let prevScroll = window.pageYOffset
window.onscroll = function(){  
    currentScroll = window.pageYOffset
    if(prevScroll > currentScroll){ //scroll up
        $(".my-bg").css("opacity","1")
    }
    else{//down
        $(".my-bg").css("opacity","0")
    }
    prevScroll = currentScroll
}
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        },
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

    });
  });
  new WOW().init();


