import './style.css'
import navBar from './components/navbar';
import render from './components/render';
import themeSwitch from './components/themeSwitch';
import home from './components/home';
import about from './components/aboutMe';
import weather from './components/weather';


render();
home();
navBar();
themeSwitch();


const homeButton = document.getElementById('home-button');
const weatherButton = document.getElementById('weather-button');
const aboutButton = document.getElementById('about-button');
const hireButton = document.getElementById('hire-button');

homeButton.addEventListener('click',()=>{
    render();
    home();
})

aboutButton.addEventListener('click',()=>{
    render();
    about();
})

hireButton.addEventListener('click',()=>{
    render();
    about();
})

weatherButton.addEventListener('click',()=>{
    render();
    weather();
})