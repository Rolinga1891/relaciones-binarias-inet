
let boton = document.getElementById("generar");
let resultado = document.getElementById("resultado");
let reflexiva = document.getElementById("reflexiva");
let simetrica = document.getElementById("simetrica");
let contenedorMatriz = document.getElementById("matriz");
let detalleReflexiva = document.getElementById("detalleReflexiva");
let detalleSimetrica = document.getElementById("detalleSimetrica");

let matriz = [];

// Generación aleatoria de la relación
boton.addEventListener("click", function() {

    matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];

        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 2);
        }
    }

    mostrarMatriz(matriz);
    actualizarResultados();

});

// Representación visual de la matriz
function mostrarMatriz(matriz) {

    contenedorMatriz.innerHTML = "";

    let esquina = document.createElement("div");
    esquina.textContent = "A";
    esquina.classList.add("encabezado");
    contenedorMatriz.appendChild(esquina);

    for (let j = 0; j < 3; j++) {

        let encabezado = document.createElement("div");
        encabezado.textContent = j + 1;
        encabezado.classList.add("encabezado");
        contenedorMatriz.appendChild(encabezado);
    }

    for (let i = 0; i < 3; i++) {

        let encabezadoFila = document.createElement("div");
        encabezadoFila.textContent = i + 1;
        encabezadoFila.classList.add("encabezado");
        contenedorMatriz.appendChild(encabezadoFila);

        for (let j = 0; j < 3; j++) {

            let casilla = document.createElement("div");

            casilla.textContent = matriz[i][j];
            casilla.classList.add("casilla");

            if (matriz[i][j] === 1) {
                casilla.classList.add("pertenece");
            } else {
                casilla.classList.add("noPertenece");
            }

            // Permite cambiar el valor de la casilla
            casilla.addEventListener("click", function() {

                if (matriz[i][j] === 1) {
                    matriz[i][j] = 0;
                } else {
                    matriz[i][j] = 1;
                }

                mostrarMatriz(matriz);
                actualizarResultados();

            });

            contenedorMatriz.appendChild(casilla);
        }
    }
}

// Actualización de la relación y sus propiedades
function actualizarResultados() {

    let pares = [];

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            if (matriz[i][j] === 1) {
                pares.push("(" + (i + 1) + "," + (j + 1) + ")");
            }
        }
    }

    resultado.textContent = "R = {" + pares.join(", ") + "}";

    // Reflexividad
   
    // Reflexividad
    let esReflexiva = true;
    let faltantesReflexiva = [];

    for (let i = 0; i < 3; i++) {

        if (matriz[i][i] === 0) {
            esReflexiva = false;
            faltantesReflexiva.push("(" + (i + 1) + "," + (i + 1) + ")");
        }
    }

    if (esReflexiva === true) {
        reflexiva.textContent = "Reflexiva: Sí";
        detalleReflexiva.textContent =
            "Todos los elementos están relacionados consigo mismos.";
    } else {
        reflexiva.textContent = "Reflexiva: No";
        detalleReflexiva.textContent =
            "Faltan los pares: " + faltantesReflexiva.join(", ");
    }


  
    // Simetría
    let esSimetrica = true;
    let faltantesSimetria = [];

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            if (matriz[i][j] === 1 && matriz[j][i] === 0) {

                esSimetrica = false;

                faltantesSimetria.push(
                    "(" + (j + 1) + "," + (i + 1) + ")"
                );
            }
        }
    }

    if (esSimetrica === true) {
        simetrica.textContent = "Simétrica: Sí";
        detalleSimetrica.textContent =
            "Todos los pares presentes tienen su inverso.";
    } else {
        simetrica.textContent = "Simétrica: No";
        detalleSimetrica.textContent =
            "Faltan los pares inversos: " + faltantesSimetria.join(", ");
    }

}
