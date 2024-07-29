/* Pargraph show or hide */

const first = document.querySelector('.first'),
	  second = document.querySelector('.second'),
	  third = document.querySelector('.third'),
	  fourth = document.querySelector('.fourth'),
	  image = document.getElementById('image');

if(first){
	first.addEventListener('click', () =>{
		image.src = "img/laptop1.jpg";
	})
}
if(second){
	second.addEventListener('click', () =>{
		image.src = "img/laptop2.jpg";
	})
}
if(third){
	third.addEventListener('click', () =>{
		image.src = "img/laptop3.jpg";
	})
}
if(fourth){
	fourth.addEventListener('click', () =>{
		image.src = "img/laptop4.jpg";
	})
}

