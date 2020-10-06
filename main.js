var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'









//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}

for(var i=0; i<cells.length; i++) {
	cells[i].addEventListener('click', e => {
		removeOld();
		e.target.classList.add("onpick");
	});
}

function removeOld() {
	for(var i=0; i<cells.length; i++) {
		cells[i].classList.remove("onpick");
	}
}

function addCalendar() {
	var cell = document.getElementsByClassName("onpick");
	console.log(cell);
	console.log(input.value);
	cell.innerHTML = input.value;
}