const Matriz = 5;
let matriz = [];
let posicion = { i: 2, j: 2 }; // Posición inicial en el centro de la matriz
let movimientosInput = document.getElementById("movimientos");
const contenedorMatriz = document.getElementById("matriz");
let posicionesprevias = [];

function renderizarMatriz() {
  contenedorMatriz.innerHTML = ''; // Limpiar la matriz antes de volver a renderizar

  for (let i = 0; i < Matriz; i++) { // Recorre las filas
    for (let j = 0; j < Matriz; j++) { // Recorre las columnas
      const celda = document.createElement("div"); // Crear una celda
      celda.classList.add("celda"); // Asignar la clase 'celda'
      for (let k = 0; k < posicionesprevias.length; k++) {
        if (posicionesprevias[k].i === i && posicionesprevias[k].j === j) {
          celda.style.backgroundColor = "black";
        }
      }
      // Si la posición coincide, mostrar el "0"
      if (i === posicion.i && j === posicion.j) {
        celda.textContent = "0";
        celda.style.backgroundColor = "#30B037";
      } 



      // Añadir la celda al contenedor
      contenedorMatriz.appendChild(celda);
    }
  }
}


function ejecutarMovimientos(...direcciones) {
  direcciones.forEach(direccion => {
    posicionesprevias.push({ i: posicion.i, j: posicion.j} );
    switch (direccion) {
      case 'U':
        if (posicion.i > 0) posicion.i--;
        break;
      case 'D':
        if (posicion.i < Matriz - 1) posicion.i++;
        break;
      case 'L':
        if (posicion.j > 0) posicion.j--;
        break;
      case 'R':
        if (posicion.j < Matriz - 1) posicion.j++;
        break;
    }
  })
  renderizarMatriz();


}

function reiniciar() {
  posicion = { i: 2, j: 2 }; // Restaurar posición inicial
  renderizarMatriz(); // Volver a renderizar la matriz
}

function actualizarVisualizacion() {
  // Limpiar la visualización de celdas anteriores
  for (let i = 0; i < Matriz; i++) {
    for (let j = 0; j < Matriz; j++) {
      const celda = matriz[i][j];
      celda.classList.remove("celda-actual", "celda-recorrido");
    }
  }

  // Marcar la celda actual
  matriz[posicion.i][posicion.j].classList.add("celda-actual");

  // Marcar las celdas recorridas
  for (let i = 0; i < Matriz; i++) {
    for (let j = 0; j < Matriz; j++) {
      if (i !== posicion.i || j !== posicion.j) {
        matriz[i][j].classList.add("celda-recorrido");
      }
    }
  }
}

// Inicializamos la matriz al cargar la página
renderizarMatriz();
ejecutarMovimientos('U','L','L');
