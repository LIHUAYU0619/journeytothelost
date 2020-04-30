$(document).ready(function(){
		$('div.post div.container').each(function(){
			var Hval = $(this).height();
			var Hval_P = $(this).parent().height();
			if (Hval > Hval_P) {
				$(this).parent().find('div#fade').css({'display':'block'});
				$(this).parent().find('a#more').css({'display':'block'});
			}
		});
		$('a#more').click(function(){
			var Hval = $(this).parent().find('div.container').height();
			var Hval_P = $(this).parent().height();
			if (Hval > (Hval_P+500)) {
				$(this).parent().css({'max-height':Hval_P+500});

				var offset = $(this).offset().top - 150;
				$([document.documentElement, document.body]).animate({
			        scrollTop: offset + 500
			    }, 250);

				$(this).hide();
				$(this).parent().find('a#evenmore').css({'display':'block'});
			}else{
				$(this).parent().css({'max-height':Hval-Hval_P});
				$(this).hide();
				$(this).parent().find('div#fade').css({'display':'none'});
				$(this).parent().find('a#less').css({'display':'block'});
			}
		});
		$('a#evenmore').click(function(){
			var Hval = $(this).parent().find('div.container').height();
			$(this).parent().css({'max-height':Hval});

			var offset = $(this).offset().top - 150;
			$([document.documentElement, document.body]).animate({
			    scrollTop: offset + 500
			}, 250);

			$(this).hide();
			$(this).parent().find('div#fade').css({'display':'none'});
			$(this).parent().find('a#less').css({'display':'block'});
		});
		$('a#less').click(function(){
			$(this).parent().css({'max-height':'300px'});

			var post_P = $(this).parent().offset().top;
			$([document.documentElement, document.body]).animate({
			    scrollTop: post_P
			}, 250);

			$(this).hide();
			$(this).parent().find('div#fade').css({'display':'block'});
			$(this).parent().find('a#more').css({'display':'block'});
		});
	});
