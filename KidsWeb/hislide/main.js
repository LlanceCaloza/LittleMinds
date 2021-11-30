
window.addEventListener('scroll', () => {
    var homepage = document.querySelector('.homepage');
    homepage.classList.toggle('sticky', window.scrollY > 0);
});