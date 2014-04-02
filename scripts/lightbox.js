$.fn.lightbox = function(){

$(this).click(function(e){
		// stop default action
		e.preventDefault();

		var image_href = $(this).attr('href');
// // targets and stores all the contents of text
		var text = $(this).attr('data-title');

		var lightbox =
			'<div id="lightbox">'+
				'<div id="content">'+
					'<img src="' + image_href + '" class="active">'+
					'<p id="title">' + text +'</p>'+
				'</div>' +
			'</div>';
// fade in bkgrd
		$(lightbox).hide().appendTo('body').fadeIn(200);

		var lightbg = $('#lightbox');

		lightbg.click(function(){
			$(this).fadeOut(300,function(){
				$(this).remove();
			});

		});

		$(document).keyup(function(e){
			// 27 indicate esc button pressed
			if (e.keyCode == 27) {
				$lightbg.fadeOut(300,function(){
				$(this).remove();
			});	

			}
		});

	});


}


