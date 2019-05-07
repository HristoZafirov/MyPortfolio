function toggleModalOn() {
	let bg = document.getElementById('circle');
	let modal = document.getElementById('modal');
	let topLine = document.getElementById('topLine');
	let middleLine = document.getElementById('middleLine');
	let bottomLine = document.getElementById('bottomLine');

	topLine.style.transform = "rotateZ(45deg)";
	bottomLine.style.transform = "rotateZ(135deg)";
	topLine.style.marginTop = "-1.5px";
	bottomLine.style.marginTop = "-1.5px";
	middleLine.style.display = "none";

	bg.style.transform = "scale(30)";
	window.setTimeout(function(){
		modal.style.display = "block";
	}, 500);
	let icon = document.getElementById('icon');
	icon.setAttribute("onclick", "toggleModalOff()");
}
function toggleModalOff() {
	let bg = document.getElementById('circle');
	let modal = document.getElementById('modal');
	let topLine = document.getElementById('topLine');
	let middleLine = document.getElementById('middleLine');
	let bottomLine = document.getElementById('bottomLine');

	topLine.style.transform = "rotateZ(0)";
	bottomLine.style.transform = "rotateZ(0)";
	topLine.style.marginTop = "-10px";
	bottomLine.style.marginTop = "7px";
	window.setTimeout(function(){
		middleLine.style.display = "block";
	}, 200);

	bg.style.transform = "scale(1)";
	window.setTimeout(function(){
		modal.style.display = "none";
	}, 500);
	let icon = document.getElementById('icon');
	icon.setAttribute("onclick", "toggleModalOn()");
}

