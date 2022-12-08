// JavaScript Document
console.log("hi");

// Lets voor menue button
let deMenuButton = document.querySelector("header > button");
let deSluitButton = document.querySelector("header nav  button");
let deNav = document.querySelector("header nav:nth-of-type(2)");

// event listeners menue button
deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

// stap 3: Funtions menue
function toggleMenu() {
  deNav.classList.toggle("open");
}