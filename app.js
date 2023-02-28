const btnMenu = document.querySelector('.menuMobileContainer');
const menuDeroulant = document.querySelector('.menuOpen');

btnMenu.addEventListener('click', () => {
    menuDeroulant.classList.toggle('active');
    scrollNone();
})

function scrollNone() {
    const body = document.querySelector('*');
    if (body.style.overflowY === "hidden") {
        body.style.overflowY = "visible";
    } else {
        body.style.overflowY = "hidden";
    }
}