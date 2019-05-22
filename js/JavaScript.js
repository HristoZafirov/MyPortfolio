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
			document.getElementById('roadmapContent').innerHTML = "<i>Planning</i><br />This is the step where we plan everything before we start designing. The client is usually involved in 80% of the planning stage.";
			break;
		case 2:
			document.getElementById('roadmapContent').innerHTML = "<i>Designing</i><br />During this step a design is made considering the client's requirements. The design must satisfy all needs.";
			break;
		case 3:
			document.getElementById('roadmapContent').innerHTML = "<i>Coding</i><br />The client is NOT involved in this stage, this is when the programmer takes place and follows the steps made during the previous stages.";
			break;
		case 4:
			document.getElementById('roadmapContent').innerHTML = "<i>Testing</i><br />This is the final step of the development process where the complete product is being tested and checked if everything works the way it is supposed to.";
			break;
		default:
			document.getElementById('roadmapContent').innerHTML = "<i>Planning</i><br />This is the step where we plan everything before we start designing. The client is usually involved in 80% of the planning stage.";
			break;
	}
}