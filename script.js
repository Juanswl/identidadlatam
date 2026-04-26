// 1. DATA (El combustible es el mismo para ambos)
const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "México", "Paraguay", "Perú", "Uruguay", "Venezuela"];

// 2. RUTA PC (Lógica exclusiva para escritorio)
const inputPC = document.getElementById('input-busqueda');
const listaPC = document.getElementById('lista-sugerencias');

if (inputPC && listaPC) {
    inputPC.addEventListener('input', () => {
        const texto = inputPC.value.toLowerCase();
        listaPC.innerHTML = '';
        if (texto.length > 0) {
            const filtrados = paises.filter(p => p.toLowerCase().includes(texto));
            if (filtrados.length > 0) {
                listaPC.style.display = 'block';
                filtrados.forEach(pais => {
                    const div = document.createElement('div');
                    div.className = 'sugerencia-item';
                    div.textContent = pais;
                    div.onclick = () => {
                        inputPC.value = pais;
                        listaPC.style.display = 'none';
                        window.location.href = `paises/${pais.toLowerCase()}.html`;
                    };
                    listaPC.appendChild(div);
                });
            } else { listaPC.style.display = 'none'; }
        } else { listaPC.style.display = 'none'; }
    });
}

// 3. RUTA MÓVIL (Lógica independiente y nativa)
const inputMovil = document.getElementById('input-busqueda-movil');
// OJO: Si quiere resultados diferentes, puede crear otro div en el HTML llamado 'lista-movil'
const listaMovil = document.getElementById('lista-sugerencias'); 
const btnLupa = document.getElementById('btn-buscar-movil');
const contenedorMovil = document.querySelector('.search-box-wrapper');

// Manejo del botón de la lupa
if (btnLupa && contenedorMovil) {
    btnLupa.addEventListener('click', () => {
        contenedorMovil.classList.toggle('activo');
        if (contenedorMovil.classList.contains('activo') && inputMovil) {
            inputMovil.focus();
        }
    });
}

// Lógica de búsqueda exclusiva para móvil
if (inputMovil) {
    inputMovil.addEventListener('input', () => {
        const texto = inputMovil.value.toLowerCase();
        listaMovil.innerHTML = ''; // Aquí usamos la lista, pero desde el input móvil

        if (texto.length > 0) {
            const filtrados = paises.filter(p => p.toLowerCase().includes(texto));
            if (filtrados.length > 0) {
                listaMovil.style.display = 'block';
                filtrados.forEach(pais => {
                    const div = document.createElement('div');
                    div.className = 'sugerencia-item'; // Clase diferente para tunearla en CSS
                    div.textContent = pais;
                    div.onclick = () => {
                        inputMovil.value = pais;
                        listaMovil.style.display = 'none';
                        window.location.href = `paises/${pais.toLowerCase()}.html`;
                    };
                    listaMovil.appendChild(div);
                });
            } else { listaMovil.style.display = 'none'; }
        } else { listaMovil.style.display = 'none'; }
    });
}
