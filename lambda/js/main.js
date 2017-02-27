$(function() {

	/* Preloader
	==========================*/

	$(document).ready(function() {

		setTimeout(function() {
			$("body").toggleClass("loaded");
			$("#loader").fadeOut();
			$('#preloader').delay(300).fadeOut('slow');
		}, 1500);
	});
	
	/* Buttons scrolling 
	==========================*/

	$("#btn-menu").on("click", function(e) {
		e.preventDefault();
		var scrollMenu = $("#to-menu").offset().top;

		$("html, body").animate({
			scrollTop: scrollMenu - 35
		}, 600);
	});

	$("#btn-book").on("click", function(e) {
		e.preventDefault();
		var scrollBook = $("#to-book").offset().top;

		$("html, body").animate({
			scrollTop: scrollBook - 35
		}, 600);
	});

	/* Fixed Menu on scroll
	============================*/

	var headerHeight = $("#page-header-js").height();

	$(document).on("scroll", function() {
		var documentScroll = $(this).scrollTop();

		if(documentScroll > headerHeight - 45) {
			$("#container-menu-js").addClass("page-header__container-menu-fixed");
		} else {
			$("#container-menu-js").removeClass("page-header__container-menu-fixed");
		}
	});

	/* Menu scrolling
	=============================*/

	$("#main-nav-js a").on("click", function(e) {
		e.preventDefault();

		var toBlock = $(this).attr("href");
		var scrolling = $(toBlock).offset().top;

		$("html, body").animate({
			scrollTop: scrolling - 35
		}, 600);
	});

	/* Accordion 
	================================*/

	$(".booking__link-js").on("click", function(e) {
		e.preventDefault();

		var $this = $(this);
		if (!$this.hasClass("active")) {
			$(".booking__accordion-js").slideUp();
			$(".booking__link-js").removeClass("active");
		}

		$this.toggleClass("active");
		$this.next().slideToggle();
	});

	/* Slick Slider
	=================================*/

	$("#slider").slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});

	$(".reviews__button-prev").on("click", function() {
		$("#slider").slick("slickPrev");
	});

	$(".reviews__button-next").on("click", function() {
		$("#slider").slick("slickNext");
	});
});