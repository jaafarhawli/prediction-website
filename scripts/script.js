let submit = document.getElementById('btn');
let gender = document.getElementById('gender');
let age = document.getElementById('age');
let nationality = document.getElementById('nationality');
let dog_img = document.getElementById('dog');
let results = document.getElementById('results');
let dog_URL = 'https://dog.ceo/api/breeds/image/random';
let ip_address = document.getElementById('ip');
let ip_URL = 'https://api.ipify.org/?format=json';
let bored_URL = 'https://www.boredapi.com/api/activity';
let bored = document.getElementById('bored');
let bored_text = document.getElementById('bored_text');

//Used axios to access the ip-address api
axios.get(ip_URL).then((res) => {
	ip_address.innerHTML += res.data.ip;
});

bored.addEventListener('click', () => {
	axios
		.get(bored_URL)
		.then((res) => {
			bored_text.innerHTML = res.data.activity;
		})
		.catch((err) => console.log(err));
});

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

	//Show the results
	results.style.display = 'flex';
});
