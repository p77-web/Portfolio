window.addEventListener('scroll', e => {
	e.preventDefault();
	changeSign();
});

const changeSign = e => {
	const signAbout = document.getElementById('sign-about');
	const signLanguages = document.getElementById('sign-languages');
	const signPortfolio = document.getElementById('sign-portfolio');
	const subtitle = document.querySelector('.header-content__subtitle');

	console.log(subtitle);
	if (signAbout.getBoundingClientRect().top < 400) {
		if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
			subtitle.setAttribute('style', 'color: green;');
		} else {
			subtitle.setAttribute('style', 'color: blue;');
		}
		signAbout.firstElementChild.setAttribute('style', 'animation: sign-about-animation 1s ease-in forwards;');
	}

	if (signLanguages.getBoundingClientRect().top < 400) {
		signLanguages.firstElementChild.setAttribute('style', 'animation: sign-languages-animation 1s ease-in forwards;');
	}

	if (signPortfolio.getBoundingClientRect().top < 400) {
		signPortfolio.firstElementChild.setAttribute('style', 'animation: sign-portfolio-animation 1s ease-in forwards;');
	}
};
