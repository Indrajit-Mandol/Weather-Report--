const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfaa44f575msh2087168f1857756p1b303cjsn63104a2de4c3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

function feedback() {
	window.open(
		"https://forms.gle/VrQK9kYMSFT4rXh29", "_blank");

}
function userguide() {
	window.open(
		"https://api-ninjas.com/api/weather", "_blank");

}
const getWeather = (city) => {

	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
		})


		.catch(err => console.error(err));
}
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		kolkata1.innerHTML = response.cloud_pct
		kolkata2.innerHTML = response.feels_like
		kolkata3.innerHTML = response.humidity

		kolkata4.innerHTML = response.max_temp
		kolkata5.innerHTML = response.min_temp
		kolkata6.innerHTML = response.sunrise
		kolkata7.innerHTML = response.sunset
		kolkata8.innerHTML = response.temp

		kolkata9.innerHTML = response.wind_degrees
		kolkata10.innerHTML = response.wind_speed



	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		shanghai1.innerHTML = response.cloud_pct
		shanghai2.innerHTML = response.feels_like
		shanghai3.innerHTML = response.humidity

		shanghai4.innerHTML = response.max_temp
		shanghai5.innerHTML = response.min_temp
		shanghai6.innerHTML = response.sunrise
		shanghai7.innerHTML = response.sunset
		shanghai8.innerHTML = response.temp

		shanghai9.innerHTML = response.wind_degrees
		shanghai10.innerHTML = response.wind_speed



	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		lucknow1.innerHTML = response.cloud_pct
		lucknow2.innerHTML = response.feels_like
		lucknow3.innerHTML = response.humidity

		lucknow4.innerHTML = response.max_temp
		lucknow5.innerHTML = response.min_temp
		lucknow6.innerHTML = response.sunrise
		lucknow7.innerHTML = response.sunset
		lucknow8.innerHTML = response.temp

		lucknow9.innerHTML = response.wind_degrees
		lucknow10.innerHTML = response.wind_speed



	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		boston1.innerHTML = response.cloud_pct
		boston2.innerHTML = response.feels_like
		boston3.innerHTML = response.humidity

		boston4.innerHTML = response.max_temp
		boston5.innerHTML = response.min_temp
		boston6.innerHTML = response.sunrise
		boston7.innerHTML = response.sunset
		boston8.innerHTML = response.temp

		boston9.innerHTML = response.wind_degrees
		boston10.innerHTML = response.wind_speed



	})







submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)


})


getWeather("Delhi")