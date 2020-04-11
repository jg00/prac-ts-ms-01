"use strict";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0)
        return n1 + n2;
}
function clickHandler(message) {
    console.log("Clicked!! " + message);
}
// If you are certain there is a button element you could just add ! mark above and not need for if statement check here.
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "Youre welome!"));
}
