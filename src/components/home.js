

const home = () => {
    const body = document.createElement("div");
    body.id = 'home';
    const slide1 = document.createElement('div');
    slide1.id = 'sun';
    body.appendChild(slide1);
    slide1.classList.add('elements');
    const slide2 = document.createElement('div');
    slide2.id = 'rain';
    body.appendChild(slide2);
    slide2.classList.add('elements');
    const slide3 = document.createElement('div');
    slide3.id = 'thunder';
    body.appendChild(slide3);
    slide3.classList.add('elements');
    const slide4 = document.createElement('div');
    slide4.id = 'wind-cloud';
    body.appendChild(slide4);
    slide4.classList.add('elements');
    const slide5 = document.createElement('div');
    slide5.id = 'wind-night';
    body.appendChild(slide5);
    slide5.classList.add('elements');
    const slide6 = document.createElement('div');
    slide6.id = 'windy';
    body.appendChild(slide6);
    slide6.classList.add('elements');
    const info = document.createElement('div');
    info.id = 'info';
    const h1 = document.createElement("h1");
    h1.innerHTML = 'Check The Weather';
    info.appendChild(h1);
    const des = document.createElement('p');
    des.innerHTML = 'Search the location and get the weather details. With just one click!';
    info.appendChild(des);
    const cta = document.createElement('button');
    cta.id = 'cta';
    cta.innerHTML = 'Check Weather';
    info.appendChild(cta);
    body.appendChild(info);
    const container = document.getElementById('container');
    body.style.opacity = '0';
    body.style.transition = 'opacity .3s';
    container.appendChild(body);
    // Animate the section to fade in
    setTimeout(() => {
        body.style.opacity = '1';
    }, 300); // This should match the duration of the transition
      
}

export default home;