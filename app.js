const btnMenu = document.querySelector('.menuMobile');
const menuDeroulant = document.querySelector('.menuOpen');
const body = document.querySelector('body');

btnMenu.addEventListener('click', () => {
    menuDeroulant.classList.toggle('active');
    body.style.overflow = 'none';
})