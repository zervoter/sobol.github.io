$(function() {

	/* Full Page
	============================*/

	 $('#fullpage-js').fullpage();

	 /* Skills bar indicator
	=================================*/
	
	$(".circle").circleProgress({
	 	size: 160,
	 	thickness: 13,
	 	startAngle: 4.7,
	 	animation: {
	 		duration: 1800
	 	},
	});

	$(".circle-1").circleProgress({
	 	value: 0.90,
	 	fill: {
	 		 color: "#30bae7"
	 	}
	});

	$(".circle-2").circleProgress({
	 	value: 0.75,
	 	fill: {
	 		 color: "#d74680"
	 	}
	});

	$(".circle-3").circleProgress({
	 	value: 0.7,
	 	fill: {
	 		 color: "#15c7a8"
	 	}
	});

	$(".circle-4").circleProgress({
	 	value: 0.85,
	 	fill: {
	 		 color: "#eb7d4b"
	 	}
	});

});