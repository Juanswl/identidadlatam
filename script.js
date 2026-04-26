// 1. DATA
const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "México", "Paraguay", "Perú", "Uruguay", "Venezuela"];

// 2. CONEXIONES (Nombres únicos para evitar el error de "redeclaration")
const inputPC = document.getElementById('input-busqueda');
const inputMovil = document.getElementById('input-busqueda-movil');
const listaSugerencias = document.getElementById('lista-sugerencias');
const btnLupaMovil = document.getElementById('btn-buscar-movil');
const contenedorBuscador = document.querySelector('.search-box-wrapper');

// 3. LÓGICA DE LA LUPA (Móvil)
if (btnLupaMovil && contenedorBuscador) {
    btnLupaMovil.addEventListener('click', () => {
        contenedorBuscador.classList.toggle('activo');
        // Si se abre, ponemos el foco en el input de móvil
        if (contenedorBuscador.classList.contains('activo') && inputMovil) {
            inputMovil.focus();
        }
    });
}

// 4. FUNCIÓN DE FILTRADO (Unificada)
function procesarBusqueda(e) {
    const valor = e.target.value.toLowerCase();
    listaSugerencias.innerHTML = '';

    if (valor.length > 0) {
        const coincidentes = paises.filter(p => p.toLowerCase().includes(valor));
        if (coincidentes.length > 0) {
            listaSugerencias.style.display = 'block';
            coincidentes.forEach(pais => {
                const item = document.createElement('div');
                item.className = 'sugerencia-item';
                item.textContent = pais;
                item.onclick = () => {
                    e.target.value = pais;
                    listaSugerencias.style.display = 'none';
                    window.location.href = `paises/${pais.toLowerCase()}.html`;
                };
                listaSugerencias.appendChild(item);
            });
        } else {
            listaSugerencias.style.display = 'none';
        }
    } else {
        listaSugerencias.style.display = 'none';
    }
}

// 5. ACTIVACIÓN DE CABLES
if (inputPC) inputPC.addEventListener('input', procesarBusqueda);
if (inputMovil) inputMovil.addEventListener('input', procesarBusqueda);


