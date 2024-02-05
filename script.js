"use strict";

window.addEventListener("load", start);

const MAX = 100;
const MIN = 0;

function start() {
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
  const guess = Math.floor(Math.random() * MAX);
  const html = `<li>I gæs that your number is ${guess}</li>`;
  document.getElementById("guessesList").innerHTML += html;
}

function tooHigh() {
  const html = `<li>It was too high</li>`;
  document.getElementById("guessesList").innerHTML += html;
  makeGuess();
}

function tooLow() {
  const html = `<li>It was too low</li>`;
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

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function binarySearch(value, values) {
  let min = 0;
  let max = values.length - 1;
  while (true) {
    let middle = Math.floor((min + max) / 2);
    let guess = values[middle];
    if (guess === value) {
      console.log(guess + " korrekt");
      return guess;
    } else if (guess > value) {
      console.log(guess + " for højt");
      max = middle - 1;
    } else {
      console.log(guess + " for lavt");
      min = middle + 1;
    }
  }
}
