
import render from "./render";
import weather from "./weather";

const navBar = () => {
   const nav = document.querySelector('nav');
   const buttons = nav.querySelectorAll('button');
   const menu = document.querySelector('.menu');

   menu.addEventListener('click', () => {;
        if(nav.getAttribute('data-visible') == "false"){
            nav.setAttribute('data-visible', 'true');
            menu.classList.add('open');
        }else{
            nav.setAttribute('data-visible', 'false');
            menu.classList.remove('open');
        }
   })

    document.querySelector('#container').addEventListener('click', () => {
        if(nav.getAttribute('data-visible') == "true"){
            nav.setAttribute('data-visible', 'false');
            menu.classList.remove('open');
        }
    });

   buttons.forEach(button => {
        button.addEventListener('click',() => {
            //checks if the unselected class is present or not if yes it removes the unselected class from the button
            if(button.classList.contains('unselected') === true){
                button.classList.remove('unselected');
                //checks the other buttons in the nav and add them the unselected class 
                buttons.forEach((otherButton) => {
                    if (otherButton !== button) {
                        otherButton.classList.add('unselected');
                    }
                });
            }else{
                return;
            }
        })
   })

   //the cta button actions
   const cta = document.getElementById('cta');

   if(cta){
      cta.addEventListener('click',()=>{
        render();
        weather();
        const weatherPage = document.getElementById('weather-button');
        weatherPage.classList.remove('unselected');
        buttons.forEach(button => {
            if(button !== weatherPage){
                button.classList.add('unselected');
            }
        })
      })
   }else{
      console.log("cta doesn't exist");
   }
}

export default navBar;