// JavaScript Document
console.log("hi");

// Lets voor menue button
let deMenuButton = document.querySelector("header > button");
let deSluitButton = document.querySelector("header nav  button");
let deWaas = document.querySelector("header div");
let deNav = document.querySelector("header nav");

// event listeners menue button
deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);
deWaas.addEventListener("click", toggleMenu);

// stap 3: Funtions menue
function toggleMenu() {
  deNav.classList.toggle("open");
  deWaas.classList.toggle("open");
}