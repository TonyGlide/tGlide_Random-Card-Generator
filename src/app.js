/* eslint-disable */
import "bootstrap";

window.onload = function() {
  document.querySelector(".number").innerHTML = values();
  document.querySelector(".top").innerHTML = sSymbol;
  document.querySelector(".bottom").innerHTML = sSymbol;

  if (sSymbol === "♦" || sSymbol === "♥") {
    document.querySelector(".card").style.color = "red";
  }
};

function values() {
  let ArrNum = [    "2",    "3",    "4",    "5",    "6",    "7",    "8",    "9",    "10",    "J",    "Q",    "K",    "A"  ];
  let numValues = Math.floor(Math.random() * ArrNum.length);
  return ArrNum[numValues];
}
function changeFontColor() {
  return sSymbol;
}
let sSymbol = symbol();
function symbol() {
  let ArrSymbol = ["♦", "♥", "♠", "♣"];
  let sIndex = Math.floor(Math.random() * ArrSymbol.length);
  return ArrSymbol[sIndex];
}
