const about = () => {
    const body = document.createElement('div');
    body.id = 'body';
    const name = document.createElement('h1');
    name.innerHTML = 'Nisul Munidasa';
    body.appendChild(name);
    const image = document.createElement('div');
    image.ariaHidden = 'true';
    image.id = 'image';
    body.appendChild(image);
    const info = document.createElement('div');
    info.id = 'description';
    const des = document.createElement('p');
    des.innerHTML = 'I am a web developer still learning my trade. If you have some internships for me or want to disucuss a project with me or want to ask a question or want to propose me, DM me at my instagram 😊';
    info.appendChild(des);
    const instaDiv = document.createElement('div');
    instaDiv.id = 'insta';
    const instaImg = document.createElement('div');
    instaDiv.appendChild(instaImg);
    const insta = document.createElement('a');
    insta.target = '_blank';
    insta.href = 'https://www.instagram.com/ohh.itz.nisul/';
    insta.innerHTML = 'Instagram/Nisul Munidasa';
    insta.ariaLabel = "Nisul Munidasa's Instagram Page";
    instaDiv.appendChild(insta);
    info.appendChild(instaDiv);
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

export default about;