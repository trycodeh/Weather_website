let loc = document.getElementById("location");
let tempicon = document.getElementById("tempicon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
let key = "d02e24592a7a40bfcc9d15f70880173a";

// by weather by search button 

searchbuttom.addEventListener('click',(e)=>
{
	e.preventDefault();
	getWeather(searchinput.value);
	MumbaiWeather(mumbai);
	searchinput.value='';
});
const getWeather=async(city)=>
{
	try{
		const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key} `);
		const weatherData = await response.json();
		console.log(weatherData);
		const { name } = weatherData;
					const { feels_like } = weatherData.main;
					const { id, main } = weatherData.weather[0];
					const {temp} = weatherData.main;
					 const { temp_max } = weatherData.main;
					const { temp_min } = weatherData.main;
					const { humidity } = weatherData.main
					const { sunrise } = weatherData.sys;
					const { sunset } = weatherData.sys;
					const {speed}= weatherData.wind;


					cityname.innerHTML = name

					max_temp.innerHTMl = temp_max
					feels.innerHTML=feels_like
					min_temp.innerHTML = temp_min
					humid.innerHTML=humidity
					humid1.innerHTML=humidity
					sunr.innerHTML=sunrise
					suns.innerHTML=sunset
					wind.innerHTML= main
					TempId.innerHTML =temp;
					Speed.innerHTML =speed;


					

					if (id < 300 && id > 200) {
						tempicon.src = "image/thurderstorm.png"
					}
					else if (id < 400 && id > 300) {
						tempicon.src = "image/Drizzle.png"
					}
					else if (id < 600 && id > 500) {
						tempicon.src = "image/rain.png"
					}
					else if (id < 700 && id > 600) {
						tempicon.src = "image/snow.png"
					}
					else if (id == 800) {
						tempicon.src = "image/Clear.png"
					}
					else if (id > 800 || (id < 800 & id > 700)) {
						tempicon.src = "image/cloud.png"
					}


	}
	catch(error){
 		alert('ciy not found');
	}
};







// for get weather by location

window.addEventListener("load", () => {
	let lon;
	let lat;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			lon = position.coords.longitude;
			lat = position.coords.latitude;
			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}          `

			fetch(api).then((response) => {
				return response.json();
			})

				.then(data => {

					const { name } = data;
					const { feels_like } = data.main;
					const { id, main } = data.weather[0];
					const { temp_max } = data.main;
					const { temp_min } = data.main;
					const { humidity } = data.main
					const { sunrise } = data.sys;
					const { sunset } = data.sys;
					const {temp} = data.main;
					const {speed }= data.wind;

					cityname.innerHTML = name

					max_temp.innerHTMl = temp_max
					feels.innerHTML=feels_like
					min_temp.innerHTML = temp_min
					humid.innerHTML=humidity
					humid1.innerHTML=humidity
					sunr.innerHTML=sunrise
					suns.innerHTML=sunset
					wind.innerHTML= main
					TempId.innerHTML =temp;
					Speed.innerHTML =speed;


					if (id < 300 && id > 200) {
						tempicon.src = "image/thurderstorm.png"
					}
					else if (id < 400 && id > 300) {
						tempicon.src = "image/Drizzle.png"
					}
					else if (id < 600 && id > 500) {
						tempicon.src = "image/rain.png"
					}
					else if (id < 700 && id > 600) {
						tempicon.src = "image/snow.png"
					}
					else if (id == 800) {
						tempicon.src = "image/Clear.png"
					}
					else if (id > 800 || (id < 800 & id > 700)) {
						tempicon.src = "image/cloud.png"
					}

					console.log(data);
				})

		}
		)
	}
})