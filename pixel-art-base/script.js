const btnAdd = document.getElementById('btnCrearCuadrilla'); //Trae el evento click
const container = document.getElementById('container'); //Trae el div contenedor
const inputColumna = document.getElementById('numero-columnas'); //Trae lo que ingresamos en el input de columnas
const inputFilas = document.getElementById('numero-filas'); //Trae lo que ingresamos en el input de filas


btnAdd.addEventListener('click', function() {
    //Vaciar el html
    container.innerHTML = '';
    //Estilo de css que crea el pixelArt
    container.style.gridTemplateColumns=`repeat(${inputColumna.value}, 1fr)`;
    //Calculo del producto de filas y columnas
    const producto = parseInt(inputColumna.value * inputFilas.value);
    //Inicio del for
    for (let i = 0; i < producto; i++) {
        //Crea el elemento div
        const nuevoDiv = document.createElement('div');
        //Agrega al div una clase "caja"
        nuevoDiv.classList.add('caja');
        //Agrega el div creado al contenedor
        container.appendChild(nuevoDiv);
        //Creamos la funcion
        nuevoDiv.addEventListener('click', function() {
            //Crea la clase "seleccionado" para que al hacer clic cambie el color
            nuevoDiv.classList.toggle('seleccionado')
        });
    }    
});