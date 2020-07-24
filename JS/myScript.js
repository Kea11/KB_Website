const menu = document.querySelector('.fancynavbar-toggler');
const exit = document.querySelector('.exit');
const page = document.querySelector('.container');
const nav = document.querySelector('.navbar');

nav.style.display = 'none';

menu.addEventListener('click', () => {
    nav.style.display = 'block';
    page.style.display = 'none';
});

exit.addEventListener('click', () => {
    nav.style.display = 'none';
    page.style.display = 'block';
});