const wrapper = document.querySelector('.wrapper');
const wrappered = document.querySelector('.wrapper-2');
const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    wrapper.classList.add('hide');
    wrappered.classList.remove('hide');
});