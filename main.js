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