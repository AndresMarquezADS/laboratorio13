 function sumar(a, b) { return a + b; }
        function restar(a, b) { return a - b; }
        function multiplicar(a, b) { return a * b; }
        function dividir(a, b) {
            if (b === 0) {
                return "No se puede dividir por cero";
            }
            return a / b;
        }

        function calcular() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            document.getElementById("suma").innerHTML = "Suma: " + sumar(num1, num2);
            document.getElementById("resta").innerHTML = "Resta: " + restar(num1, num2);
            document.getElementById("multiplicacion").innerHTML = "Multiplicación: " + multiplicar(num1, num2);
            document.getElementById("division").innerHTML = "División: " + dividir(num1, num2);
        }

        function realizarOperacion(op) {
            const n1 = parseFloat(document.getElementById("num1").value);
            const n2 = parseFloat(document.getElementById("num2").value);
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

            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }