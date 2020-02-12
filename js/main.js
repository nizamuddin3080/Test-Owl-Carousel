$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
	autoplay: 1000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:1,	
        }
    }
})



//var owl = $('.owl-carousel');
//owl.owlCarousel({
//    loop:true,
//    nav:true,
//    margin:10,
//    responsive:{
//        0:{
//            items:1
//        },
//        600:{
//            items:3
//        },            
//        960:{
//            items:3
//        },
//        1200:{
//            items:3
//        }
//    }
//});
//owl.on('mousewheel', '.owl-stage', function (e) {
//    if (e.deltaY>0) {
//        owl.trigger('next.owl');
//    } else {
//        owl.trigger('prev.owl');
//    }
//    e.preventDefault();
//});
//


//
//$('.owl-carousel').owlCarousel({
//    items:5,
//    loop:true,
//    margin:10,
//    merge:true,
//    responsive:{
//        678:{
//            mergeFit:true
//        },
//        1000:{
//            mergeFit:false
//        }
//    }
//});