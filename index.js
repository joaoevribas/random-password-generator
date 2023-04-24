"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Grabbing all the elements from the html
let btnEl = document.getElementById("btn-el");
let passwordOne = document.querySelector(".password-one");
let passwordTwo = document.querySelector(".password-two");

// Function to get a random index from the characters array
function getRandomIndex() {
  let random = Math.floor(Math.random() * characters.length);
  return random;
}

// Function to get a random password of 15 characters
function getPassword() {
  let string = "";
  for (let i = 0; i < 15; i++) {
    string += characters[getRandomIndex()];
  }
  return string;
}

// Onclick function for the generate passwords btn
function generatePassword() {
  passwordOne.textContent = getPassword();
  passwordTwo.textContent = getPassword();
}
