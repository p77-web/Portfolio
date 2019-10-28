sayswho = function() {
	var ua = navigator.userAgent;
	var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);

	// alert(navigator.platform);
	return M[1];
};

console.log(navigator.platform);
const hamburger = document.querySelector('#hamburger');
const subtitle = document.querySelector('.header-content__subtitle');

// const menu = document.getElementById('circle-icon');
var isClicked = true;

$(document).on('click touchstart', hamburger, function(event) {
	event.preventDefault();
	alert('sdfhjk');
	if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
		subtitle.setAttribute('style', 'color: blue;');
	} else {
		subtitle.setAttribute('style', 'color: gray;');
	}
});

window.addEventListener('load', () => {
	sayswho();
	hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-blue 1s ease-in forwards;');
});

hamburger.addEventListener('click', e => {
	const overlay = document.querySelector('.overlay');
	const nav = document.querySelector('.navigation');
	// const icon = document.querySelector('.menu-toggle span');

	// alert('click');

	overlay.classList.toggle('menu-open');
	nav.classList.toggle('menu-open');

	if (isClicked) {
		// icon.classList.remove('fa-bars');
		// icon.classList.add('fa-times');
		hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-red .5s ease-in forwards;');

		isClicked = false;
	} else {
		// icon.classList.remove('fa-times');
		// icon.classList.add('fa-bars');
		hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-blue 1s ease-in forwards;');

		isClicked = true;
	}
	e.preventDefault();
});
