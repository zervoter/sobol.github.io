var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 53.207206, lng: 50.178547},
   zoom: 16,
   scrollwheel: false,
   zoomControl: false
 });
 var marker;
 marker = new google.maps.Marker({
  position: {lat: 53.207206, lng: 50.178547},          
  map: map,                           
  icon:"img/label.png"
});
};

$(function() {

	/* Slick slider N1
	=========================*/

	$("#slider").slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  rows: 1,
	  arrows: false,
	  speed: 700,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	      {
	        breakpoint: 992,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          infinite: true,
	          dots: false
	        }
	      },
	      {
	        breakpoint: 660,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      }
	    ]  
	});

	$(".partners__btn--prev").on("click", function() {
		$("#slider").slick("slickPrev");
	});

	$(".partners__btn--next").on("click", function() {
		$("#slider").slick("slickNext");
	});


	/* Slick slider N2
	=========================*/

	$("#slider-about").slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  rows: 1,
	  arrows: false,
	  speed: 800,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dots: false
	});

	$(".slider-about__btn--prev").on("click", function() {
		$("#slider-about").slick("slickPrev");
	});

	$(".slider-about__btn--next").on("click", function() {
		$("#slider-about").slick("slickNext");
	});


	/* Slick slider N3
	=========================*/

	$("#slider-reviews").slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  rows: 1,
	  arrows: false,
	  speed: 1100,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  dots: false,
	  responsive: [
	  	  {
	  	    breakpoint: 1200,
	  	    settings: {
	  	      slidesToShow: 2,
	  	      slidesToScroll: 1,
	  	      infinite: true,
	  	      dots: false
	  	    }
	  	  },
	      {
	        breakpoint: 722,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 660,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]  
	});

	$(".reviews__btn--prev").on("click", function() {
		$("#slider-reviews").slick("slickPrev");
	});

	$(".reviews__btn--next").on("click", function() {
		$("#slider-reviews").slick("slickNext");
	});


	/* Modal window
	=========================*/

    $(".modal-show").on("click", function(e) {
    	e.preventDefault();

    	$(".js-modal").fadeOut(150);

    	var currentModal = $(this).attr("href");

    	$(currentModal).fadeIn(500);
    });

    $(".js-modal-close, #js-overlay").on("click", function(e) {
    	e.preventDefault();

    	$(".js-modal, #js-overlay").fadeOut();
    });

});