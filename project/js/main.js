$(function() {

	/* Accordion 
	================================*/

	$(".service__link-js").on("click", function(e) {
		e.preventDefault();

		var $this = $(this);
		if (!$this.hasClass("active")) {
			$(".service__accordion").slideUp();
			$(".service__link-js").removeClass("active");
		}

		$this.toggleClass("active");
		$this.next().slideToggle();
	});

	/* Menu scrolling
	=============================*/

	$(".page-header a").on("click", function(e) {
		e.preventDefault();

		var toBlock = $(this).attr("href");
		var scrolling = $(toBlock).offset().top;

		$("html, body").animate({
			scrollTop: scrolling - 100
		}, 600);
	});

	/* Banner 
	=============================*/
	$(window).on('load', function(){
		var $info = $('.info');
		if ($info.length > 0) {
			var infoHeight = $info.outerHeight();
			$info.css('margin-top', -infoHeight);
			$info.show();
			setTimeout(function(){
				$info.css('margin-top', 0);
			}, 500);

			$('.jsCloseInfo').on('click', function() {
				$info.css('margin-top', -infoHeight);
				setTimeout(function () {
					$info.remove();
				}, 1500);
			});
		}
	});

	/* Animate numbers
	 =============================*/

	/*
	 jQuery animateNumber plugin v0.0.14
	 (c) 2013, Alexandr Borisov.
	 https://github.com/aishek/jquery-animateNumber
	 */
	(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
		a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
		if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);

	var scrollFlag = true;
	$(window).scroll(function() {
		if (scrollFlag) {
			var hT = $('#discount-numbers').offset().top,
				wH = $(window).height(),
				wS = $(this).scrollTop();
			if (wS > (hT-wH)){
				$('#discount-1')
					.prop('number', 0)
					.animateNumber(
						{
							number: 10
						},
						1750
					);
				$('#discount-2')
					.prop('number', 0)
					.animateNumber(
						{
							number: 20
						},
						3000
					);
				scrollFlag = false;
			}
		}

	});




});