console.log("hello world");



function favoriteColor(event)
{
	event.preventDefault();
	
	alert("My favorite color is red");
}
function favoritePlace(event)
{
	event.preventDefault();
	
	alert("My favorite place is my room");
}
function favoriteRitual(event)
{
	event.preventDefault();
	
	alert("Jokes on you, I dont have a favorite ritual");
}

let color = document.querySelector('button#color');
let place = document.querySelector('button#place');
let ritual = document.querySelector('button#ritual');

color.addEventListener('click', favoriteColor);
place.addEventListener('click', favoritePlace);
ritual.addEventListener('click', favoriteRitual);