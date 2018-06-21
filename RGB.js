var r; 
var g; 
var b; 
var right = Math.floor(Math.random()*6);
var button = document.querySelectorAll(".b");
var newTurn = document.querySelector("#newColor");
var result = document.querySelector("#result");
setColor();
console.log(b);


for(var i = 0; i < button.length; i++)
{
	button[i].addEventListener("click",checkAnswer);
}
newTurn.addEventListener("click",setColor);


function checkAnswer(){
	var color = r + ", " + g +", " + b;
	if (this.style.background === "rgb(" + color + ")"){
		rightAnswer();
	}
	else{
		this.style.background = "black";
		result.textContent = "Wrong";
	}
}

function rightAnswer(){
	result.textContent = "Correct!";
	var color = r + ", " + g +", " + b;
	for (var i = 0; i < button.length; i++)
	{
		button[i].style.background = "rgb(" + color + ")";
	}
	document.querySelector("#head").style.background = "rgb(" + color + ")";
	newTurn.textContent = "PLAY AGAIN?";
}

function setColor(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	right = Math.floor(Math.random()*6);
	for(var i = 0; i < button.length;i++)
	{
		var color = Math.floor(Math.random()*256) + ", " 
		+ Math.floor(Math.random()*256) +", " + Math.floor(Math.random()*256);
		button[i].style.background = "rgb(" + color + ")";
	}
	var color = r + ", " + g +", " + b;
	button[right].style.background = "rgb(" + color + ")";
	console.log(button[right].style.background);
	document.querySelector("#rValue").textContent = r;
	document.querySelector("#gValue").textContent = g;
	document.querySelector("#bValue").textContent = b;
	document.querySelector("#head").style.background = "blue";
	newTurn.textContent = "NEW COLORS";
	result.textContent = " ";


}