// 1. DATA (Listado de países disponibles)
const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "México", "Paraguay", "Perú", "Uruguay", "Venezuela"];

// 2. REFERENCIAS DE ELEMENTOS
const btnBuscar = document.getElementById('btn-buscar');
const searchWrapper = document.getElementById('search-wrapper');
const inputBusqueda = document.getElementById('input-busqueda');
const listaSugerencias = document.getElementById('lista-sugerencias');

// 3. LOGICA PARA MOSTRAR / OCULTAR EL BUSCADOR (Responsive)
if (btnBuscar && searchWrapper) {
    btnBuscar.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita el cierre inmediato al hacer click en el botón
        searchWrapper.classList.toggle('activo');
        if (searchWrapper.classList.contains('activo') && inputBusqueda) {
            inputBusqueda.focus();
        }
    });
}

// 4. LÓGICA DE BÚSQUEDA Y SUGERENCIAS
if (inputBusqueda && listaSugerencias) {
    inputBusqueda.addEventListener('input', () => {
        const texto = inputBusqueda.value.trim().toLowerCase();
        listaSugerencias.innerHTML = '';

        if (texto.length > 0) {
            const filtrados = paises.filter(p => p.toLowerCase().includes(texto));
            
            if (filtrados.length > 0) {
                listaSugerencias.style.display = 'block';
                filtrados.forEach(pais => {
                    const div = document.createElement('div');
                    div.className = 'sugerencia-item';
                    div.textContent = pais;
                    
                    // Acción al hacer clic en un país sugerido
                    div.onclick = () => {
                        inputBusqueda.value = pais;
                        listaSugerencias.style.display = 'none';
                        const pathPrevia = window.location.pathname.includes('/paises/') ? '' : 'paises/';
                        window.location.href = `${pathPrevia}${pais.toLowerCase()}.html`;
                    };

                    listaSugerencias.appendChild(div);
                });
            } else { 
                listaSugerencias.style.display = 'none'; 
            }
        } else { 
            listaSugerencias.style.display = 'none'; 
        }
    });
}

// 5. CERRAR SUGERENCIAS AL HACER CLIC FUERA
document.addEventListener('click', (e) => {
    if (searchWrapper && !searchWrapper.contains(e.target) && e.target !== btnBuscar) {
        searchWrapper.classList.remove('activo');
        if (listaSugerencias) {
            listaSugerencias.style.display = 'none';
        }
    }
});