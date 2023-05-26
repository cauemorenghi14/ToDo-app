document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('formularioLogin');

    form.addEventListener('submit', (evento) => {

        evento.preventDefault();

        window.location.href = '../html/home.html';
    });

});


