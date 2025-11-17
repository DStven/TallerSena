function estadoEstudiante() {

    let nota = parseFloat(prompt("Digite la nota del estudiante de (0-5)"));

    let estado;
    if (nota === 5.0) {
        estado = "Exelente";
    } else if (nota >= 4.0 && nota <= 4.9) {
        estado = "Bueno";
    } else if (nota >= 3.0 && nota <= 3.9) {
        estado = "Regular";
    } else if (nota >= 0 && nota <= 2.9) {
        estado = "Deficiente";
    } else {
        estado = "Nota inválida. Debe estar entre 0 y 5.";
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El estado del estudiante es: ${estado}`;
}