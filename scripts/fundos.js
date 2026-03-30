const fundos = document.querySelector('.fundos');
const totalFundos = document.querySelectorAll('.fundo').length;
let currentFundo = 0;
let transicaoEmAndamento = false;

function mostrarProximoFundo() {
    if (transicaoEmAndamento) return;
    transicaoEmAndamento = true;
    const deslocamento = -currentFundo * 100;
    fundos.style.transform = `translateX(${deslocamento}%)`;

    setTimeout(() => {
        currentFundo = (currentFundo + 1) % totalFundos;
        const novoDeslocamento = -currentFundo * 100;
        fundos.style.transition = "transform 1s ease-in-out";
        fundos.style.transform = `translateX(${novoDeslocamento}%)`;

        setTimeout(() => {
            fundos.style.transition = "transform 0s";
            transicaoEmAndamento = false;
        }, 1000);
    }, 5000);
}

window.addEventListener('resize', () => {
    const deslocamento = -currentFundo * 100;
    fundos.style.transform = `translateX(${deslocamento}%)`;
});

setInterval(mostrarProximoFundo, 5000);
