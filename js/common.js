$(function() {

	// Custom JS
	
});
var deadline='2019-04-10 23:59:59';
	$('.countdown').downCount({
		date: deadline,
	},
	function(){
	   /* действие после завершения таймера */
	   alert("Время истекло!");
	});

	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
	  
		  // Make sure this.hash has a value before overriding default behavior
		  if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
	  
			// Store hash
			var hash = this.hash;
	  
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 400, function(){
	  
			  // Add hash (#) to URL when done scrolling (default click behavior)
			  window.location.hash = hash;
			});
		  } // End if
		});
	  });

	$(document).ready(function(){
		$('.speakers-slider').slick({
			infinite: false,
			dots: true,
			appendDots : $('.slickdots'),
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			  {
				breakpoint: 960,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: true
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
	  });