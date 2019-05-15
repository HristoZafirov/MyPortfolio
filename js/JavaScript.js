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
// TO BE FIXED !!!
function fadeIn(par, par2){
    var scrolledHeight= window.pageYOffset;
    var param = document.getElementById(par);
    var limit = document.getElementById(par2);
    var p1 = document.getElementById('demo2');
    var calc = document.getElementById('demo3');
    p2.innerHTML = limit.offsetTop;
    calc.innerHTML = calcHeight(scrolledHeight);
        if(scrolledHeight >= (screen.height * calcHeight(scrolledHeight) - (Math.abs(limit.offsetTop) * (calcHeight(scrolledHeight)+1)))) {
            param.style.display = "block";
        }
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
    if (calcHeight(scrolledHeight) == 1 ) {
        fadeIn('fadeIn1', 'boxfade1');
    } else if (calcHeight(scrolledHeight) == 2) {
        fadeIn('fadeIn2', 'boxfade2');
    }
});