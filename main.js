document.querySelector('.barra-busqueda').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const links = document.querySelectorAll('.link a');

    if (searchTerm === '') {
        links.forEach(link => {
            link.classList.remove('highlight');
            link.classList.remove('bold');
        });
    } else {
        links.forEach(link => {
            if (link.textContent.toLowerCase().includes(searchTerm)) {
                link.classList.remove('highlight');
                link.classList.add('bold');
            } else {
                link.classList.add('highlight');
                link.classList.remove('bold');
            }
        });
    }
});

function actualizarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();