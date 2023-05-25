const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputText = document.getElementById('inputForm');
    const listaDeTarefas = document.querySelector('.listaDeTarefas');

    const divTarefa = document.createElement('div');
    divTarefa.classList.add('tarefa-item');

    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = inputText.value

    const iconeXtarefa = document.createElement('i');
    iconeXtarefa.classList.add('bi-x-circle');

    divTarefa.appendChild(spanTarefa)
    divTarefa.appendChild(iconeXtarefa);

    listaDeTarefas.appendChild(divTarefa);

    if (spanTarefa.textContent.length > 18) {
        spanTarefa.textContent = spanTarefa.textContent.slice(1,18);
    }

    form.reset(); 

    iconeXtarefa.addEventListener('click', (evento) => {
        evento.target.parentNode.remove();
    })
}) 
