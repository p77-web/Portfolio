$(window).on('load', function() {
	if ($(this).scrollTop() < 100) {
		$('#scroll-arrow').fadeOut();
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('#scroll-arrow').fadeIn();
	} else {
		$('#scroll-arrow').fadeOut();
	}
});

// init scrollspy
$('body').scrollspy({ target: '#scroll-arrow' });

// add smooth scrolling
$('#scroll-arrow').on('click', function(e) {
	// check for a hash value
	if (this.hash !== '') {
		// prevent default behavior
		e.preventDefault();

		// store hash
		const hash = this.hash;

		// animate smooth scroll
		$('html, body').animate(
			{
				scrollTop: 0
			},
			900,
			function() {
				// add hash to url
				window.location.hash = hash;
			}
		);
	}
});

$('.item').on('click', function(e) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== '') {
		// Prevent default anchor click behavior
		e.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			900,
			function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			}
		);
	} // End if
});
