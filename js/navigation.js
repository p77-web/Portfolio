const hamburger = document.querySelector('#hamburger');
const menu_input = document.querySelector('.menu-container input');

// const menu = document.getElementById('circle-icon');
var isClicked = true;

window.addEventListener('load', () => {
	hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-blue 1s ease-in forwards;');
});

menu_input.addEventListener('click', e => {
	// console.log(menu_input.checked);

	const overlay = document.querySelector('.overlay');
	const nav = document.querySelector('.navigation');
	// const icon = document.querySelector('.menu-toggle span');

	if (menu_input.checked) {
		overlay.classList.toggle('menu-open');
		nav.classList.toggle('menu-open');
	} else {
		overlay.classList.toggle('menu-open');
		nav.classList.toggle('menu-open');
	}

	if (isClicked) {
		hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-red 1s ease-in forwards;');
		isClicked = false;
	} else {
		hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-blue 1s ease-in forwards;');
		isClicked = true;
	}
	e.preventDefault();
});

hamburger.addEventListener('click', e => {
	// const overlay = document.querySelector('.overlay');
	// const nav = document.querySelector('.navigation');
	// // const icon = document.querySelector('.menu-toggle span');
	// if (menu_input.checked) {
	// 	overlay.classList.toggle('menu-open');
	// 	nav.classList.toggle('menu-open');
	// }
	// if (isClicked) {
	// 	// icon.classList.remove('fa-bars');
	// 	// icon.classList.add('fa-times');
	// 	hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-red .5s ease-in forwards;');
	// 	isClicked = false;
	// } else {
	// 	// icon.classList.remove('fa-times');
	// 	// icon.classList.add('fa-bars');
	// 	hamburger.firstElementChild.setAttribute('style', 'animation: menu-animation-blue 1s ease-in forwards;');
	// 	isClicked = true;
	// }
	// e.preventDefault();
});
