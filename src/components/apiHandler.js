import weather from "./weather";

const apiKey = '213a40d68b72d08448b191cd0b5a7a14';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function apiHandler (city){

    const input = document.getElementById('input');
    input.value = '';
   
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == '404'){
        console.log('error');
        const dialog = document.querySelector('dialog');
        dialog.showModal();
        document.getElementById('container').style.opacity = '.3';
        const closeButton = dialog.querySelector('button');
        closeButton.addEventListener('click',()=>{
            dialog.close();
            document.getElementById('container').style.opacity = '1';
        })
    }else{
        var data = await response.json();

        console.log(data);

        const weatherType = document.getElementById('weather-type');
        const location = document.getElementById('location');
        const temp = document.getElementById('temperature');
        const humidity = document.getElementById('humidity');
        const windspeed = document.getElementById('windspeed');

        location.innerHTML = city;
        temp.innerHTML = data.main.temp + ' °C';
        humidity.innerHTML = data.main.humidity;
        windspeed.innerHTML = data.wind.speed;

        if(data.weather[0].main === 'Clouds'){
            weatherType.src = './assets/clouds.png';
            weatherType.alt = 'Cloudy';
        } else if(data.weather[0].main === 'Clear'){
            weatherType.src = './assets/clear.png';
            weatherType.alt = 'Clear Weather';
        } else if(data.weather[0].main === 'Haze'){
            weatherType.src = './assets/mist.png';
            weatherType.alt = 'Hazey';
        } else if(data.weather[0].main === 'Snow'){
            weatherType.src = './assets/snow.png';
            weatherType.alt = 'Snowy';
        } else if(data.weather[0].main === 'Rain'){
            weatherType.src = './assets/drizzle.png';
            weatherType.alt = 'Rainy';
        } 

        
    }

}

export default apiHandler;