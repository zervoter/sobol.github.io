$(function(){$("#slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}),$(".slider__arrows--left").on("click",function(){$("#slider").slick("slickPrev")}),$(".slider__arrows--right").on("click",function(){$("#slider").slick("slickNext")})});