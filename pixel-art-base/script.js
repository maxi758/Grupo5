const btnAdd = document.getElementById('btnCrearCuadrilla');
const container = document.getElementById('container');
const inputColumna = document.getElementById('numero-columnas');
const inputFilas = document.getElementById('numero-filas')


btnAdd.addEventListener('click', function() {

    container.innerHTML = '';
    container.style.gridTemplateColumns=`repeat(${inputColumna.value}, 1fr)`;
    const producto = parseInt(inputColumna.value * inputFilas.value);
    
    for (let i = 0; i < producto; i++) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('caja');
        container.appendChild(nuevoDiv);
        nuevoDiv.addEventListener('click', function() {
            nuevoDiv.classList.toggle('seleccionado')
        });
    }    
});