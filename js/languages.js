window.addEventListener('scroll', function(e) {
	changePosition();
	changeBarValue();
});

const changePosition = function(e) {
	const cards = document.querySelectorAll('.languages-card');

	cards.forEach(function(card) {
		let card_pos = window.pageYOffset * card.dataset.rate;
		let initial_card_pos = card_pos - 500;

		let opacity_level = (1 - (750 - window.scrollY) / 250) * 0.5 + 0.1;

		if (initial_card_pos < 0) {
			card.style.transform = 'translateX(' + initial_card_pos + 'px)';
			card.style.opacity = opacity_level;
		} else {
			card.style.transform = 'translateX(' + 0 + 'px)';
		}
	});
};

let limit = 0;
let titleLimit = 0;
let barLimit = 0;

const changeBarValue = function(e) {
	let percentages = document.querySelectorAll('.languages__bar');
	let position = document.getElementById('languages');

	if (position.getBoundingClientRect().top < 300 && barLimit === 0) {
		percentages.forEach(function(percentage) {
			let counter = 0;
			setInterval(function() {
				if (counter < parseInt(percentage.dataset.percentage, 10)) {
					counter += 1;
					percentage.getElementsByTagName('stop')[1].setAttribute('offset', counter + '%');
				}
			}, 20);
		});
		barLimit = 1;
	}

	if (position.getBoundingClientRect().top > 1000) {
		percentages.forEach(function(percentage) {
			percentage.getElementsByTagName('stop')[1].setAttribute('offset', 0 + '%');
			barLimit = 0;
		});
	}
};
