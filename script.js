var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var random = document.getElementById("random");

function setColorsAndCss() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent ="background: " + body.style.background + ";";
}

function setInitalValues() {
	color1.value = "#00FF00";
	color2.value = "#FF0000";
	setColorsAndCss();
}

setInitalValues();

function createRandomHex() {
	var hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	var newHex = "#";
	for(var i = 0; i < 6; i++) {
		newHex += hex[Math.floor(Math.random() * hex.length)];
	}
	return newHex;
}

function createRandomBackground() {
	color1.value = createRandomHex();
	color2.value = createRandomHex();
	setColorsAndCss();
}


function changeGradient() {
	setColorsAndCss();
}

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);

random.addEventListener("click", createRandomBackground);
