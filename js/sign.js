window.addEventListener('scroll', function(e) {
	e.preventDefault();
	changeSign();
});

const changeSign = function() {
	const signAbout = document.getElementById('sign-about');
	const signLanguages = document.getElementById('sign-languages');
	const signPortfolio = document.getElementById('sign-portfolio');

	if (signAbout.getBoundingClientRect().top < 400) {
		signAbout.firstElementChild.setAttribute('style', 'animation: sign-about-animation 1s ease-in forwards;');
	}

	if (signLanguages.getBoundingClientRect().top < 400) {
		signLanguages.firstElementChild.setAttribute('style', 'animation: sign-languages-animation 1s ease-in forwards;');
	}

	if (signPortfolio.getBoundingClientRect().top < 400) {
		signPortfolio.firstElementChild.setAttribute('style', 'animation: sign-portfolio-animation 1s ease-in forwards;');
	}
};
