document.addEventListener('DOMContentLoaded', () => {
    var form = document.querySelector('.formulario');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        window.location.href = '../html/login.html'
    })
})