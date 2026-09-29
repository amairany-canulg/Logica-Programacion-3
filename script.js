const boton = document.getElementById("btnFactorial");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {

    let numero;

    while (true) {
        let num = prompt("Ingresa un número entero:");
        if (num === null) {
            resultado.innerHTML = "Operación cancelada";
            return;
        }
        // Convertir a Número
        numero = Number(num);
        if (num.trim() !== "" && !isNaN(numero)) {
            if (Number.isInteger(numero) && numero >= 0) {
                break;
            } else {
                alert("Error! Ingresa un número entero mayor o igual a 0");
            }
        } else {
            alert("Error! Sólo puedes ingresar números ENTEROS.");
        }
    }

    //Calcular factorial
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultado.innerHTML = `
        <p>El factorial de <strong>${numero}</strong> es:</p>
        <h2>${factorial}</h2>
    `;
});