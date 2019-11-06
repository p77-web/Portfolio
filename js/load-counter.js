window.addEventListener('load', function(e) {
	changeLoadValue(performance.now());
});

const changeLoadValue = function(time) {
	let percentages = document.querySelector('.counter__percentage');
	let overlay = document.querySelector('.load-overlay');
	let counter_wrapper = document.querySelector('.counter');
	let circle = document.getElementById('overlay-circle');
	let counter = 0;

	setInterval(function() {
		if (counter < parseInt(percentages.dataset.percentage, 10)) {
			counter += 1;
			percentages.innerHTML = counter + '%';
			// circle.setAttribute('style', 'animation: circle-animation ' + time / 100 + 's ease-in;');
		}
		circle.setAttribute('style', 'animation: circle-animation ' + time / 1000 + 's ease-in;');
	}, time / 100);

	setInterval(function() {
		overlay.setAttribute('style', 'background-color: rgba(0, 0, 0, 0); z-index: -1; transition: background-color 1s ease-out;');
		counter_wrapper.setAttribute('style', 'display: none;');
	}, time + 500);
	circle.setAttribute('style', 'display: none;');
};
