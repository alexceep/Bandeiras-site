const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.botoes-menu');

    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('responsive');
    });