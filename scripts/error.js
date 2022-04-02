const text = document.querySelector('.error-text p');

text.innerHTML = text.innerText.split("").map(
	(char, i)=>
		`<span style="transform:rotate(${i*6}deg)"> ${char} </span>`

	).join("")