const btnAdd = document.getElementById('btnCrearCuadrilla');
const container = document.getElementById('container');


btnAdd.addEventListener('click', function() {
    for (let i = 0; i < 400; i++) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('caja');
        container.appendChild(nuevoDiv);
        nuevoDiv.addEventListener('click', function() {
            nuevoDiv.classList.toggle('seleccionado')
        });

    }
});