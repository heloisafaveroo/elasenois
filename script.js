const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    nav.classList.toggle('open');
});
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        nav.classList.remove('open');
    }
});