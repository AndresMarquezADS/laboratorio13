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

// Función principal con while y prompt
function iniciarCalculadora() {
    let opcion = "";
    while (opcion !== "salir") {
        opcion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

        if (opcion === "salir") {
            alert("Gracias por usar la calculadora.");
            break;
        }

        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        let resultado;
        if (opcion === "suma") {
            resultado = sumar(num1, num2);
        } else if (opcion === "resta") {
            resultado = restar(num1, num2);
        } else if (opcion === "multiplicacion") {
            resultado = multiplicar(num1, num2);
        } else if (opcion === "division") {
            resultado = dividir(num1, num2);
        } else {
            resultado = "Operación no válida";
        }

        alert("Resultado: " + resultado);
    }
}
