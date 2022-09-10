let submit = document.getElementById('btn');
let gender = document.getElementById('gender');
let age = document.getElementById('age');

btn.addEventListener('click', () => {
	var name = document.getElementById('myText').value;
	let gender_URL = `https://api.genderize.io/?name=${name}`;
	let age_URL = `https://api.agify.io/?name=${name}`;

	//Fetch the gender
	fetch(gender_URL).then((Response) => Response.json()).then((ResponseJson) => {
		gender.innerHTML = ResponseJson.gender;
	});

	//Fetch the age
	fetch(age_URL).then((Response) => Response.json()).then((ResponseJson) => {
		age.innerHTML = ResponseJson.age;
	});
});
