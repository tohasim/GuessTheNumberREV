"use strict";

window.addEventListener("load", start);

let MAX = 100;
let MIN = 0;
let currentGuess = 0;

function start() {
	document.getElementById(
		"welcomeText"
	).innerText = `Think of a number between ${MIN}-${MAX}, then I'll try to gæs it.`;
	setupEventListeners();
}

function setupEventListeners() {
	document.getElementById("btn-ready").addEventListener("click", (event) => {
		document
			.querySelectorAll(".btn-control")
			.forEach((btn) => btn.classList.remove("hidden"));
		event.target.classList.add("hidden");
		makeGuess();
	});
	document.getElementById("btn-too-high").addEventListener("click", tooHigh);
	document
		.getElementById("btn-correct")
		.addEventListener("click", correctGuess);
	document.getElementById("btn-too-low").addEventListener("click", tooLow);
	document.getElementById("btn-play-again").addEventListener("click", replay);
}

function makeGuess() {
	currentGuess = Math.floor((MIN + MAX) / 2);
	const html = `<li>I gæs that your number is ${currentGuess}</li>`;
	document.getElementById("guessesList").innerHTML += html;
}

function tooHigh() {
	const html = `<li>It was too high</li>`;
	MAX = currentGuess - 1;
	document.getElementById("guessesList").innerHTML += html;
	makeGuess();
}

function tooLow() {
	const html = `<li>It was too low</li>`;
	MIN = currentGuess + 1;
	document.getElementById("guessesList").innerHTML += html;
	makeGuess();
}

function correctGuess() {
	const html = `<li>It was correct.. Yay me!</li>`;
	document.getElementById("guessesList").innerHTML += html;
	document
		.querySelectorAll(".btn-control")
		.forEach((button) => button.classList.add("hidden"));
	document.getElementById("btn-play-again").classList.remove("hidden");
}
function replay() {
	document.getElementById("guessesList").innerHTML = "";
	document.getElementById("btn-ready").classList.remove("hidden");
	document.getElementById("btn-play-again").classList.add("hidden");
}
