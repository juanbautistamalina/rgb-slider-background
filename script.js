const body = document.querySelector("body");

// Selección de inputs
const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

// Texto debajo de los inputs
const txtRed = document.getElementById("txt-red");
const txtGreen = document.getElementById("txt-green");
const txtBlue = document.getElementById("txt-blue");

// Colocando el valor inicial de cada color
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

txtRed.innerHTML = red;
txtGreen.innerHTML = green;
txtBlue.innerHTML = blue;

function actualizarColor(red, green, blue){
    let colorRGB = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = colorRGB;
}

inputRed.addEventListener("change", function(){
    red = inputRed.value;
    txtRed.innerHTML = red
    actualizarColor(red, green, blue)
})


inputGreen.addEventListener("change", function(){
    green = inputGreen.value;
    txtGreen.innerHTML = green
    actualizarColor(red, green, blue)
})

inputBlue.addEventListener("change", function(){
    blue = inputBlue.value;
    txtBlue.innerHTML = blue
    actualizarColor(red, green, blue)
})