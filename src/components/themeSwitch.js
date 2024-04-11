import light from '../../dist/assets/light.png';
import dark from '../../dist/assets/dark.png';

const themeSwitch = () => {
    const button = document.getElementById('theme');
    const html = document.documentElement;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(prefersDarkMode){
        html.setAttribute('data-theme', 'dark');
        button.style.backgroundImage = `url(${light})`;
    }else{
        html.setAttribute('data-theme', 'light');
        button.style.backgroundImage = `url(${dark})`;
    }
    
    button.addEventListener('click',()=>{
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        if(newTheme === 'light'){
            button.style.backgroundImage = `url(${dark})`;
        }else{
            button.style.backgroundImage = `url(${light})`;
        }
        html.setAttribute('data-theme', newTheme);
    })
}

export default themeSwitch;