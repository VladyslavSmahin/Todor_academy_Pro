import {Player} from "./js/player.js";

document.addEventListener('DOMContentLoaded', () => {
    Player();

    const toChangeColorBtn = document.querySelector('.changeColorBtn');
    const text = document.querySelector('.text');

    const my1section = document.querySelector('.section1');
    const myFormBtn = document.querySelector('.myFormBtn');
    const myInput = document.querySelector('#myInput')


    const myUl = document.querySelector('.myUl');
    const newLi = document.createElement('li');
    myUl.appendChild(newLi);
    text.style.color = 'wheat';

    let textInfoForFocus = document.createElement('p');
    my1section.appendChild(textInfoForFocus);
    textInfoForFocus.textContent = '';

    let textInfoForSubmit = document.createElement('p');
    my1section.appendChild(textInfoForSubmit);
    textInfoForSubmit.textContent = '';

    toChangeColorBtn.addEventListener('click', () => {
        if (text.style.color === 'wheat') {
            text.style.color = 'red';
        } else if (text.style.color === 'red') {
            text.style.color = 'blue';
        } else if (text.style.color === 'blue') {
            text.style.color = 'wheat';
        }
    });

    myInput.addEventListener('focus', () => {
        textInfoForFocus.textContent = 'input on focus';
    });

    myInput.addEventListener('blur', () => {
        textInfoForFocus.textContent = 'input off Focus';

    });
    myFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
        myInput.value = '';
        textInfoForSubmit.textContent = 'The form was submitted';
        setTimeout(()=>{
            textInfoForSubmit.textContent = '';
        },2000)
    })

    myUl.addEventListener('click', (e)=>{
        if (e.target.tagName === 'LI') {
            newLi.textContent = e.target.textContent.toUpperCase();
        }
    });
});