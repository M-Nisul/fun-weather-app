import apiHandler from "./apiHandler";

const weather = () => {
    const body = document.createElement('div');
    body.id = 'weather';
    const h1 = document.createElement('h1');
    h1.id = 'weatherH1';
    h1.innerHTML = 'Where do you want to find the weather in?';
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.id = 'input';
    input.placeholder = 'Input the location';
    input.maxLength = '15';
    input.minLength = '2';
    const button = document.createElement('button');
    button.addEventListener('click',()=>{
        if(input.value !== ''){
            apiHandler(input.value);
        }else{
            window.alert('insert the city');
        }
        
    })
    const image = document.createElement('img');
    image.id = 'weather-type';
    const h2 = document.createElement('h2');
    h2.id = 'location';
    const h3 = document.createElement('h3');
    h3.id = 'temperature';
    const info = document.createElement('div');
    info.id = 'weatherInfo';
    const h3_1 = document.createElement('h3');
    h3_1.innerHTML = 'N/A';
    h3_1.id = 'humidity';
    const h2_1 = document.createElement('h2');
    h2_1.innerHTML = 'Humidity:';
    const h3_2 = document.createElement('h3');
    h3_2.id = 'windspeed';
    h3_2.innerHTML = 'N/A';
    const h2_2 = document.createElement('h2');
    h2_2.innerHTML = 'Wind Speed:';
    div.appendChild(input);
    div.appendChild(button);
    body.appendChild(div);
    body.appendChild(image);
    body.appendChild(h2);
    body.appendChild(h3);
    info.appendChild(h2_1);
    info.appendChild(h3_1);
    info.appendChild(h2_2);
    info.appendChild(h3_2);
    body.appendChild(info);

    const container = document.getElementById('container');
    container.appendChild(h1);
    container.appendChild(body);
}

export default weather;