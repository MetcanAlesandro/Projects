const apiKey = 'e9034104e49450aacae046fc8af13557';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404)
    {
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
    }
    else 
    {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    weatherIcon.src = `images/${data.weather[0].main}.png`;

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';

     // console.log(data);
    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
});



