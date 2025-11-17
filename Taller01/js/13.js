function verificarRequisitos() {

    let nombreStu = prompt("Ingresa nombre del estudiante: ");
    let promedio = parseFloat(prompt("Introduce tu promedio integral: "));
    let antecedentes = prompt("¿tienes antecedentes diciplinarios? (si/no)").toLowerCase();

    let mensaje;

    if (promedio > 4.0 && antecedentes !== "si") {
        mensaje = `
                    <p>el estudiante ${nombreStu} Cumple con los requisitos para optar a ser monitor de la universidad.</p>
                `;
    } else {
        mensaje = `
                    <p>el estudiante ${nombreStu} No cumple con los requisitos para ser monitor.</p>
                `;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje;
}