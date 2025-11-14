function calcularNota() {
    let parcialUno = parseFloat(prompt("Ingresa la nota del primer parcial (0-5):"));
    let parcialDos = parseFloat(prompt("Ingresa la nota del segundo parcial (0-5):"));
    let examenFinal = parseFloat(prompt("Ingresa la nota del examen final (0-5):"));


    let notaFinal = (parcialUno * 0.30) + (parcialDos * 0.30) + (examenFinal * 0.40);


    const notaMin = 3.2;
    let result;

    if (notaFinal >= notaMin) {
        result = `Aprobado con una nota de ${notaFinal.toFixed(1)}`
    } else {
        result = `No aprobo. Tu nota final es ${notaFinal.toFixed(1)}.`;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}