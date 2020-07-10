//efeitos menu
$("#menu-mobile").click((e) => {
    e.preventDefault();
    if($(".overlay").hasClass("show")) {
        $(".overlay").removeClass("show");
        $(".overlay").addClass("hide");
    }else{
        $(".overlay").removeClass("hide");
        $(".overlay").addClass("show");
    }
});

$(document).click((e) => {
   if(e.target.id === "menu-mobile-wrapper") {
       $(".overlay").removeClass("show");
       $(".overlay").addClass("hide");
   }
});

//slick
$(".carrousel-slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    prevArrow: false,
                                    nextArrow: false,
                                    autoplay: true,
                                }
                            },
                            {
                                breakpoint: 330,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    prevArrow: false,
                                    nextArrow: false,
                                    autoplay: true,
                                }
                            }
                        ],
});

/*Banner*/
$(window).resize(() => {
    let width = $(this).width() + 17;
    if(width <= 762) {
        $("#image-1").attr("src", "./image/slide/banner1-mobile.png");
        $("#image-2").attr("src", "./image/slide/banner2-mobile.png");
        $("#image-3").attr("src", "./image/slide/banner3-mobile.jpg");
        $("#image-4").attr("src", "./image/slide/banner4-mobile.png");
    }else{
        $("#image-1").attr("src", "./image/slide/banner1.png");
        $("#image-2").attr("src", "./image/slide/banner2.png");
        $("#image-3").attr("src", "./image/slide/banner3.jpg");
        $("#image-4").attr("src", "./image/slide/banner4.jpg");
    }

    if(width <= 1180) {

    }
});

$(() => {
    let width = $(this).width() + 17;
    if(width <= 762) {
        $("#image-1").attr("src", "./image/slide/banner1-mobile.png");
        $("#image-2").attr("src", "./image/slide/banner2-mobile.png");
        $("#image-3").attr("src", "./image/slide/banner3-mobile.jpg");
        $("#image-4").attr("src", "./image/slide/banner4-mobile.png");
    }else{
        $("#image-1").attr("src", "./image/slide/banner1.png");
        $("#image-2").attr("src", "./image/slide/banner2.png");
        $("#image-3").attr("src", "./image/slide/banner3.jpg");
        $("#image-4").attr("src", "./image/slide/banner4.jpg");
    }
})

$(".partners-box").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand',
    arrows: true,
    prevArrow: '<div class="prev-arrow"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="next-arrow"><i class="fas fa-chevron-right"></i></div>',
    responsive: [{
        breakpoint: 1180,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
        }
    },
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
                autoplay: true,
            }
        },
    ]
})