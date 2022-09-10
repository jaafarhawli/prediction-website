let submit = document.getElementById('btn');
let gender = document.getElementById('gender');
let age = document.getElementById('age');
let nationality = document.getElementById('nationality');
let dog_img = document.getElementById('dog');
let dog_URL = 'https://dog.ceo/api/breeds/image/random';

//Fetch a random dog picture
fetch(dog_URL).then((Response) => Response.json()).then((ResponseJson) => {
	dog_img.src = ResponseJson.message;
});

//Fetch the gender, age and nationality when submit button is pressed
btn.addEventListener('click', () => {
	var name = document.getElementById('myText').value;
	let gender_URL = `https://api.genderize.io/?name=${name}`;
	let age_URL = `https://api.agify.io/?name=${name}`;
	let nationality_URL = `https://api.nationalize.io/?name=${name}`;

	//Fetch the gender
	fetch(gender_URL).then((Response) => Response.json()).then((ResponseJson) => {
		gender.innerHTML = ResponseJson.gender;
	});

	//Fetch the age
	fetch(age_URL).then((Response) => Response.json()).then((ResponseJson) => {
		age.innerHTML = ResponseJson.age;
	});

	//Fetch the nationality
	fetch(nationality_URL).then((Response) => Response.json()).then((ResponseJson) => {
		nationality.innerHTML = ResponseJson.country[0].country_id;
		if (ResponseJson.country[1]) {
			nationality.innerHTML += ' ' + ResponseJson.country[1].country_id;
		}
	});
});
