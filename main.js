document.querySelector('.barra-busqueda').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(searchTerm)) {
            link.classList.add('highlight');
        } else {
            link.classList.remove('highlight');
        }
    });
});