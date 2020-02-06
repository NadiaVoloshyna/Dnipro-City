	
let form = document.getElementById("quiz");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");

let correctAnswers = [one,two,three,four,five,six,seven,eight,nine,ten];

let oned = document.getElementById("oned");
let twod = document.getElementById("twod");
let threed = document.getElementById("threed");
let fourd = document.getElementById("fourd");
let fived = document.getElementById("fived");
let sixd = document.getElementById("sixd");
let sevend = document.getElementById("sevend");
let eightd = document.getElementById("eightd");
let nined = document.getElementById("nined");
let tend = document.getElementById("tend");

let answers = [oned,twod,threed,fourd,fived,sixd,sevend,eightd,nined,tend];

form.addEventListener("submit", function(e) {
	e.preventDefault();
    let count = 0;
for(i = 0; i < correctAnswers.length; i++) {
if(correctAnswers[i].checked) {
		count++;
		answers[i].classList.add("green");
        } else {
        	answers[i].classList.add("red");
        }
}
if(count == 10){
			alert(`100% correct \nGreat job! You are amazing!`);
		} else if(count<10 && count>7) {
			alert(`${count} correct \nAlmost perfect!`)
		} else if(count<=7 && count>5) {
			alert(`${count} correct \nGreat job!`); 
		} else if(count<=5 && count>3) {
			alert(`${count} correct \nWell done!`); 
		} else {
			alert(`${count} correct \nKeep trying!`);    
		}
});


