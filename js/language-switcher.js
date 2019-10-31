(function() {
	if (typeof NodeList.prototype.forEach === 'function') return false;
	NodeList.prototype.forEach = Array.prototype.forEach;
})();

//  Language translation english and french
var language = {
	en: {
		// Menu
		about: 'About',
		languages: 'Languages',
		buttonLanguage: 'Fr',

		// Header
		title: "Hi! I'm",
		subtitle: 'Junior Developer',
		resume: 'Download resume',
		carousel: 'I like',

		// About section
		about_me: 'About me',
		experience: 'Experience',
		experience_text:
			"I'm currently based in beautiful Montreal. After I finished my studies at UQAM as a computer engineer I've worked for two years as web developer. Prior to that I had studied Law but I turned my sights to computer programming for its international appeal.",
		time: 'Pass time',
		time_text:
			"Coding but, if I'm not at home coding, I like to play soccer, volleyball or to go hiking and camping. However, more importlantly, I enjoy expending my knowledge throught online cources and tutorials.",

		// Languages section
		skills: 'Skills',

		// Portfolio section
		maracana: 'The official site of Maracana Canada Federation.'
	},
	fr: {
		// Menu
		about: 'À propos',
		languages: 'Langages',
		buttonLanguage: 'En',

		// Header
		title: 'Je suis',
		subtitle: 'Développeur Junior',
		resume: 'Télécharger CV',
		carousel: "J'aime le",

		// About section
		about_me: 'À propos',
		experience: 'Expérience',
		experience_text:
			"Je suis actuellement basé dans la belle ville de Montréal. Après mes études à l’UQAM en tant qu’ingénieur informaticien, j’ai travaillé pendant deux ans en tant que développeur web. Avant cela, j'avais étudié le droit, mais je me suis tourné vers la programmation informatique pour son attrait international.",
		time: 'Passe-temps',
		time_text:
			"Coder mais, si je ne suis pas chez moi, j'aime jouer au soccer, au volley-ball ou faire de la randonnée et du camping. Cependant, plus important encore, j'aime bien approfondir mes connaissances grâce aux cours en ligne et aux tutoriels.",

		// Languages section
		skills: 'Compétences',

		// Portfolio section
		maracana: 'Le site officiel de la Fédération Maracana Canada.'
	}
};

window.addEventListener('unload', function(){
  localStorage.removeItem('portfolio__language');
});

function getBrowserLanguage() {
	let browserFullLanguage = window.navigator.userLanguage || window.navigator.language;

	let browserLanguage = browserFullLanguage.split('-');
	if (browserLanguage[0] !== 'en' && browserLanguage[0] !== 'fr') {
		browserLanguage[0] = 'en';
	}

	let language = '';

	// verify if the localStorage has any value stored
	if (localStorage['portfolio__language']) {
		language = localStorage.getItem('portfolio__language');
	} else {
		localStorage.setItem('portfolio__language', browserLanguage[0]);
		language = localStorage.getItem('portfolio__language');
	}

	return language;
}

function getButtonLanguage() {
	let buttonLanguage = document.querySelector('.translate');

	// store user's chosen language
	localStorage.setItem('portfolio__language', buttonLanguage.textContent.trim().toLowerCase());
	let language = localStorage.getItem('portfolio__language');

	return language;
}

// print the text by browser language
window.addEventListener(
	'load',
	function() {
		// get the classes that contain the text to change
		let textToChange = document.querySelectorAll('.translateText');
		// get the classes that contain the pdf link to change
		let pdfBtnLink = document.querySelectorAll('.btn-pdf-link');

		// get the browser default language
		let browserLanguage = getBrowserLanguage();

		pdfBtnLink.forEach(function(link) {
			if (browserLanguage === 'fr') {
				link.setAttribute('href', 'CV Paul Farcas-r.fr.pdf');
			} else {
				link.setAttribute('href', 'CV Paul Farcas-r.en.pdf');
			}
		});

		textToChange.forEach(function(text) {
			// check if the language object has a property like the class' key
			if (language[browserLanguage].hasOwnProperty(text.getAttribute('data-key'))) {
				text.innerHTML = language[browserLanguage][text.getAttribute('data-key')];
			}
		});
	},
	false
);

function changeLanguage() {
	// get the classes that contain the text to change
	let textToChange = document.querySelectorAll('.translateText');
	// get the classes that contain the pdf link to change
	let pdfBtnLink = document.querySelectorAll('.btn-pdf-link');

	let buttonLanguage = getButtonLanguage();

	pdfBtnLink.forEach(function(link) {
		if (buttonLanguage === 'fr') {
			link.setAttribute('href', 'CV Paul Farcas-r.fr.pdf');
		} else {
			link.setAttribute('href', 'CV Paul Farcas-r.en.pdf');
		}
	});

	textToChange.forEach(function(text) {
		// check if the language object has a property like the class' key
		if (language[buttonLanguage].hasOwnProperty(text.getAttribute('data-key'))) {
			text.innerHTML = language[buttonLanguage][text.getAttribute('data-key')];
		}
	});
}
