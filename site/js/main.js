$(function() {

	/* Preloader
	=============================*/

	$(document).ready(function() {
	 
	    setTimeout(function(){
	       	$('body').addClass('loaded');
	    }, 1500);
	 
	});


	/* Skills bar indicator
	=================================*/
	
	$(".circle").circleProgress({
	 	size: 140,
	 	lineCap: "round",
	 	startAngle: 4.8,
	 	animation: {
	 		duration: 1800
	 	},
	 	fill: {
	 		 color: "#ff1e41"
	 	}
	});

	$(".circle-1").circleProgress({
	 	value: 0.95
	});

	$(".circle-2").circleProgress({
	 	value: 0.85
	});

	$(".circle-3").circleProgress({
	 	value: 0.8
	});

	$(".circle-5").circleProgress({
	 	value: 0.7
	});

	/* Appear Skills block on scroll
	================================*/

	var el1 = $(".circle"),
	     inited = false;

	el1.appear({ force_process: true });

	el1.on('appear', function() {
	   if (!inited) {
	     el1.circleProgress({});
	     inited = true;
	   }
	});

	/* Sticky navigation
	===============================*/

	$("#sticker").sticky({
	 	topSpacing: 0,
	 	zIndex: 10
	});

	/* Menu scrolling
	================================*/

	$(".page-header__nav a").on("click", function(e) {
	 	e.preventDefault();

	 	var toBlock = $(this).attr("href");
	 	var scrolling = $(toBlock).offset().top;

	 	$("html, body").animate({
	 		scrollTop: scrolling
	 	}, 600);
	});

	/* Button scroll
	================================*/

	$(".page-header__scroll").on("click", function() {
	 	var toBlock = $("#benefits");
	 	var scrolling = $(toBlock).offset().top;

	 	$("html, body").animate({
	 		scrollTop: scrolling
	 	}, 600);
	});

	$(".hire").on("click", function(e) {
		e.preventDefault();

	 	var toBlock = $("#contacts");
	 	var scrolling = $(toBlock).offset().top;

	 	$("html, body").animate({
	 		scrollTop: scrolling
	 	}, 600);
	});

});