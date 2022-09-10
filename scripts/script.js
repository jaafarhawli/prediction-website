let submit = document.getElementById('btn');
let gender = document.getElementById('gender');

btn.addEventListener('click', () => {
	var name = document.getElementById('myText').value;
	let gender_URL = `https://api.genderize.io/?name=${name}`;

	//Fetch the gender
	fetch(gender_URL).then((Response) => Response.json()).then((ResponseJson) => {
		gender.innerHTML = ResponseJson.gender;
	});
});
