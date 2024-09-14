"use strict";
const DISPLAY = document.getElementById(`display`);
function getDisplay(input) {
    DISPLAY.value += input;
}
function clearDisplay() {
    DISPLAY.value = "";
}
function calculator() {
    try {
        DISPLAY.value = eval(DISPLAY.value);
    }
    catch (error) {
        DISPLAY.value = " error ";
    }
}
