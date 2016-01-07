/* global $:false */
'use strict';

$(document).ready(function(){
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	// hide n boxes
	$('.box').each(function(){
		if(!$(this).hasClass('active')) {
			$(this).hide();
		}
	});
	// set height to viewport
	$('body').css('height', $(window).height());
	// fadeIn validation
	$('.btn.buy').on('click', function(){
		$(this).parent().addClass('animated fadeOut').one(animationEnd, function(){
			$(this).hide().removeClass('animated fadeOut');
			$(this).next('.validation').addClass('animated fadeIn').show();
		});
	});
	// close validation
	$('.close-modal').on('click', function(){
		$('.validation').removeClass('animated fadeIn').hide();
		$('.buy-action').show();
	});
	// animation slider of plans
	$('#plan-list li').on('click', function(){
		if(!$(this).hasClass('active')) {

			// handle active menu
			$('#plan-list li').removeClass('active');
			$(this).addClass('active');
			// handle animation
			var data = $(this).data('plan');
			$('.box.active').removeClass('active').hide();
			$('.box[data-box=' + data + ']').addClass('animated fadeInUp active').show();
		}
	});
});
