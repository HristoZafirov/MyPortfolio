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


function parallax(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;

    parallax(".parallax").forEach(function(par,index,array) {

        var limit= par.offsetTop + par.offsetHeight;

        if(scrolledHeight > par.offsetTop && scrolledHeight <= limit) {
            par.style.backgroundPositionY= (scrolledHeight - par.offsetTop) /2.5+ "px";
        } 
        else {
            par.style.backgroundPositionY= "0";
        }
    });
});


function roadmap(e){
	switch(e){
		case 1: 
			document.getElementById('bubb1').style.display = " block";
			document.getElementById('bubb2').style.display = " none";
			document.getElementById('bubb3').style.display = " none";
			document.getElementById('bubb4').style.display = " none";
			document.getElementById('dot1').style.backgroundColor = "#333";
			document.getElementById('dot2').style.backgroundColor = "transparent";
			document.getElementById('dot3').style.backgroundColor = "transparent";
			document.getElementById('dot4').style.backgroundColor = "transparent";
			break;
		case 2: 
			document.getElementById('bubb1').style.display = " none";
			document.getElementById('bubb2').style.display = " block";
			document.getElementById('bubb3').style.display = " none";
			document.getElementById('bubb4').style.display = " none";
			document.getElementById('dot1').style.backgroundColor = "transparent";
			document.getElementById('dot2').style.backgroundColor = "#333";
			document.getElementById('dot3').style.backgroundColor = "transparent";
			document.getElementById('dot4').style.backgroundColor = "transparent";
			break;
		case 3: 
			document.getElementById('bubb1').style.display = " none";
			document.getElementById('bubb2').style.display = " none";
			document.getElementById('bubb3').style.display = " block";
			document.getElementById('bubb4').style.display = " none";
			document.getElementById('dot1').style.backgroundColor = "transparent";
			document.getElementById('dot2').style.backgroundColor = "transparent";
			document.getElementById('dot3').style.backgroundColor = "#333";
			document.getElementById('dot4').style.backgroundColor = "transparent";
			break;
		case 4: 
			document.getElementById('bubb1').style.display = " none";
			document.getElementById('bubb2').style.display = " none";
			document.getElementById('bubb3').style.display = " none";
			document.getElementById('bubb4').style.display = " block";
			document.getElementById('dot1').style.backgroundColor = "transparent";
			document.getElementById('dot2').style.backgroundColor = "transparent";
			document.getElementById('dot3').style.backgroundColor = "transparent";
			document.getElementById('dot4').style.backgroundColor = "#333";
			break;
		default: 
			document.getElementById('bubb1').style.display = " block";
			document.getElementById('bubb2').style.display = " none";
			document.getElementById('bubb3').style.display = " none";
			document.getElementById('bubb4').style.display = " none";
			document.getElementById('dot1').style.backgroundColor = "#333";
			document.getElementById('dot2').style.backgroundColor = "transparent";
			document.getElementById('dot3').style.backgroundColor = "transparent";
			document.getElementById('dot4').style.backgroundColor = "transparent";
			break;
	}
}