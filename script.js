document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const paisCards = document.querySelectorAll('.pais-card');

    // Función mágica para quitar acentos
    const eliminarAcentos = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    searchInput.addEventListener('input', (e) => {
        // Normalizamos la búsqueda: minúsculas y sin acentos
        const term = eliminarAcentos(e.target.value.toLowerCase().trim());

        paisCards.forEach(card => {
            const countryName = eliminarAcentos(card.querySelector('h3').textContent.toLowerCase());
            
            if (countryName.includes(term)) {
                card.style.display = "flex";
                card.style.opacity = "1";
            } else {
                card.style.display = "none";
            }
        });
    });
});