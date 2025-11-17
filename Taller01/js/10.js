function calcularRendimiento() {

    let nombre1, nombre2, nombre3;
    //estudante 1
    nombre1 = prompt("Ingresa el nombre del primer estudiante");
    let nota1_1 = parseFloat(prompt("Ingresar primera nota"));
    let nota1_2 = parseFloat(prompt("Ingresar segunda nota"));
    let nota1_3 = parseFloat(prompt("Ingresar tercera nota"));

    //estuadiante 2
    nombre2 = prompt("Ingresa el nombre del segundo estudiante");
    let nota2_1 = parseFloat(prompt("Ingresar primera nota"));
    let nota2_2 = parseFloat(prompt("Ingresar segunda nota"));
    let nota2_3 = parseFloat(prompt("Ingresar tercera nota"));

    //estudiante 3
    nombre3 = prompt("Ingresa el nombre del tercer estudiante");
    let nota3_1 = parseFloat(prompt("Ingresar primera nota"));
    let nota3_2 = parseFloat(prompt("Ingresar segunda nota"));
    let nota3_3 = parseFloat(prompt("Ingresar tercera nota"));

    let definitiva1 = (nota1_1 + nota1_2 + nota1_3) / 3;
    let definitiva2 = (nota2_1 + nota2_2 + nota2_3) / 3;
    let definitiva3 = (nota3_1 + nota3_2 + nota3_3) / 3;

    let altoRendimiento = Math.max(definitiva1, definitiva2, definitiva3);
    let bajoRendimiento = Math.min(definitiva1, definitiva2, definitiva3);

    let mejorEstu, peorEstu;
    //alto rendimiento
    if (altoRendimiento === definitiva1) {
        mejorEstu = nombre1;
    } else if (altoRendimiento === definitiva2) {
        mejorEstu = nombre2;
    } else {
        mejorEstu = nombre3;
    }

    //bajo rendimiento
    if (bajoRendimiento === definitiva1) {
        peorEstu = nombre1;
    } else if (altoRendimiento === definitiva2) {
        peorEstu = nombre2;
    } else {
        peorEstu = nombre3;
    }

    let result = `
        Nota definitiva de ${nombre1}: ${definitiva1.toFixed(2)}<br>
        Nota definitiva de ${nombre2}: ${definitiva2.toFixed(2)}<br>
        Nota definitiva de ${nombre3}: ${definitiva3.toFixed(2)}<br><br>
        El mejor rendimiento académico fue para: ${mejorEstu} con una nota de ${altoRendimiento.toFixed(2)}<br>
        El peor rendimiento académico fue para: ${peorEstu} con una nota de ${bajoRendimiento.toFixed(2)}`;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}