window.onload = function() {
	let elements = document.getElementById('word');
	let words = elements.dataset.words.split(', ');
	let period = elements.dataset.period;

	for (var i = 0; i < words.length; i++) {
		let span = document.createElement('span');
		let text = words[i];

		span.innerHTML = text;
		document.getElementById('word').appendChild(span);
	}

	let spans = elements.childNodes;

	for (var i = 0; i < spans.length; i++) {
		spans[i].setAttribute('style', 'animation: word ' + period * spans.length + 's ease ' + i * period + 's infinite');
	}
};
