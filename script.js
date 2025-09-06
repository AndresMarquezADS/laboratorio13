// Funciones básicas
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función principal para realizar operaciones
function realizarOperacion(op, n1, n2) {
    let resultado;

    if (op === 'suma') {
        resultado = sumar(n1, n2);
    } else if (op === 'resta') {
        resultado = restar(n1, n2);
    } else if (op === 'multiplicacion') {
        resultado = multiplicar(n1, n2);
    } else if (op === 'division') {
        resultado = dividir(n1, n2);
    } else {
        resultado = "Operación no válida";
    }

    return resultado;
}

// --- Modo 1: Usando botones e inputs en el HTML ---
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    document.getElementById("suma").innerHTML = "Suma: " + sumar(num1, num2);
    document.getElementById("resta").innerHTML = "Resta: " + restar(num1, num2);
    document.getElementById("multiplicacion").innerHTML = "Multiplicación: " + multiplicar(num1, num2);
    document.getElementById("division").innerHTML = "División: " + dividir(num1, num2);
}

function calcularOperacion(op) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = realizarOperacion(op, num1, num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

// --- Modo 2: Usando while y prompt ---
let opcion = "";
while (opcion !== "salir") {
    opcion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (opcion === "salir") {
        alert("Gracias por usar la calculadora.");
        break;
    }

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    const resultado = realizarOperacion(opcion, num1, num2);
    alert("Resultado: " + resultado);
}
