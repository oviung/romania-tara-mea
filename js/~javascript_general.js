// Slider-ul din landing page (Flex)

$.noConflict();

jQuery(window).load(function() {
  jQuery('.flexslider').flexslider({
    animation: "fade",
    animationSpeed: 800,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 5000,
    startAt: 0
  });
});

// Scroll progresiv pentru butonul din bara de navigatie

jQuery(document).ready(function(){
	var susTopPosition = jQuery('#sus').offset().top;
	jQuery('#scroll').click(function(){
		jQuery('html, body').animate({scrollTop:susTopPosition}, 'slow');
		return false;
	});
});