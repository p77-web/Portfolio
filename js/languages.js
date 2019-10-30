// window.addEventListener(
// 	'DOMContentLoaded',
// 	function() {
// 		let stops = document.getElementById('bar').getElementsByTagName('stop');
// 		let position = document.getElementById('languages');

// 		const stopArr = [...stops];
// 		stopArr.shift();
// 		stopArr.pop();

// 		var html = document.documentElement;

// 		const changeBarValue = function(e) {
// 			for (const stop of stopArr) {
// 				if (stopArr.length) {
// 					// if (html.scrollHeight - html.clientHeight === 0) {
// 					// 	stop.setAttribute('offset', 100 + '%');
// 					// } else {
// 					// }
// 					const offset = stop.getAttribute('offset');

// 					if ((window.scrollY / (html.scrollHeight - html.clientHeight)) * 100 <= 30) {
// 						stop.setAttribute('offset', (window.scrollY / (html.scrollHeight - html.clientHeight)) * 30 + '%');
// 					}
// 				}
// 			}
// 		};
// 		if (position.getBoundingClientRect().y > 500) {
// 			document.addEventListener('scroll', changeBarValue, true);
// 			console.log('bvsdjhfdks');
// 		}
// 	},
// 	false
// );

window.addEventListener('scroll', function(e) {
	changePosition();
	// changeValue();
	// changeTitleValue();
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

const changeValue = function(e) {
	let percentages = document.querySelectorAll('.languages__percentage');
	let position = document.getElementById('languages');

	if (position.getBoundingClientRect().top < 300 && limit === 0) {
		percentages.forEach(function(percentage) {
			let counter = 0;

			setInterval(function() {
				if (counter < parseInt(percentage.dataset.percentage, 10)) {
					counter += 1;
					percentage.innerHTML = counter + '%';
				}
			}, 20);
		});
		limit = 1;
	}
	if (position.getBoundingClientRect().top > 1000) {
		percentages.forEach(function(percentage) {
			percentage.innerHTML = 0 + '%';
			limit = 0;
		});
	}
};

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

// const changeTitleValue = e => {
// 	let stops = document.getElementById('js').getElementsByTagName('stop');
// 	let position = document.getElementById('languages');
// 	let counter = 0;

// 	const stopArr = [...stops];
// 	stopArr.shift();
// 	stopArr.pop();

// 	var html = document.documentElement;
// 	for (const stop of stopArr) {
// 		if (stopArr.length) {
// 			if (position.getBoundingClientRect().y < 300 && titleLimit === 0) {
// 				setInterval(function() {
// 					if (counter < 100) {
// 						counter += 1;
// 						stop.setAttribute('offset', (window.pageYOffset / (html.scrollHeight - html.clientHeight)) * counter + '%');
// 					}
// 				}, 20);
// 				titleLimit = 1;
// 			}
// 			if (position.getBoundingClientRect().y > 1000) {
// 				stop.setAttribute('offset', 0 + '%');
// 				titleLimit = 0;
// 			}
// 		}
// 	}
// };
