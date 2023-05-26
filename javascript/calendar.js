const btnSelecionarMes = document.querySelector('.selectBtn');
const valor = document.querySelector('.sBtn-text');
const meses = document.querySelectorAll('.opcao-mes');

meses.forEach((mes) => {
    mes.addEventListener('click', () => {
        let valorMes = mes.querySelector('.mes-txt').textContent;
        valor.textContent = valorMes;
        divPrincipal.classList.toggle('ativo');
    })
})

const divPrincipal = document.querySelector('.calendarios');

btnSelecionarMes.addEventListener('click', () => {
    divPrincipal.classList.toggle('ativo');
})





