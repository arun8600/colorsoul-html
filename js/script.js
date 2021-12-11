/*
Author       : Dreamguys
Template Name: Ventura - Bootstrap Admin Template
Version      : 1.0
*/

(function($) {
    "use strict";
	 // jquery ready start fixed top nav sticky
// $(document).ready(function() {
// 	// jQuery code
// 	///////////////// fixed menu on scroll for desctop
// 	  if ($(window).width() > 992) {
// 		  var navbar_height =  $('.navbar').outerHeight();
// 		  $(window).scroll(function(){  
// 			  if ($(this).scrollTop() > 300) {
// 		   $('.navbar-wrap').css('height', navbar_height + 'px');
// 				   $('#navbar_top').addClass("fixed-top");
				   
// 			  }else{
// 				  $('#navbar_top').removeClass("fixed-top");
// 				  $('.navbar-wrap').css('height', 'auto');
// 			  }   
// 		  });
// 	  } // end if
//   }); // jquery end sticky


	$(document).ready(function(){ 
		$(window).scroll(function(){ 
			if ($(this).scrollTop() > 100) { 
				$('#scroll').fadeIn(); 
			} else { 
				$('#scroll').fadeOut(); 
			} 
		}); 
		$('#scroll').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});
	
	$('.testimonial_owlCarousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		autoplay: false,
		smartSpeed: 3000,
		autoplayTimeout: 4000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})


	
})(jQuery);

