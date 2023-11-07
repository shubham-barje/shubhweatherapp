//Actual api for weather of this application
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'adb89eb127mshffa13dbfd38fcedp1932e1jsn22aac4d4181d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const airQuality = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'adb89eb127mshffa13dbfd38fcedp1932e1jsn22aac4d4181d',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    const weatherapi = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options).then(response => response.json())
    const aqiapi = fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, airQuality).then(response => response.json())

    Promise.all([weatherapi, aqiapi])

        .then(([response,responseaqi]) => {
            console.log(response, responseaqi);

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            overall_aqi.innerHTML = responseaqi.overall_aqi
        })
        .catch(error => {
            console.error(error);
        });
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Mumbai")



   

