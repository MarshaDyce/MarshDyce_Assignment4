$(document).ready(function() {

// targeting all h1 with a variable avoid slow page
	var title = $('h5');

	$.fn.greenify = function(){
		this.css("color","#00ff00");

		return this;

	}

	title.greenify();
	$('h5').css("color","#00ff00");

	// title.css("color","#00ff00");
	// $('h1').css("color","#00ff00");

	$('.lightbox_trigger').lightbox();

	$('p').marsha({
		color:"#ff0000",
		fontSize:"40"
	});
});




