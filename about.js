console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted");
}

function rubberDuck(event)
{
	event.preventDefault();

	alert("QUACK QUACK!!!");
}

let form = document.querySelector('form#contact');
let picture = document.querySelector("img")

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', rubberDuck);