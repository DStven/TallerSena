//maximo
function obtnerMaximo() {

    let num1 = parseFloat(prompt("Digite el primero numero: "));
    let num2 = parseFloat(prompt("Digite el segundo numero: "));
    let num3 = parseFloat(prompt("Digite el tercer numero: "));

    let maxNumero = Math.max(num1, num2, num3);

    let result = `El Maximo de los tres numero es: ${maxNumero}`;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}

//Minimo
function obtenerMinimo() {

    num1 = parseFloat(prompt("Digite el primero numero: "));
    num2 = parseFloat(prompt("Digite el segundo numero: "));
    num3 = parseFloat(prompt("Digite el tercer numero: "));

    let minNumero = Math.min(num1, num2, num3);

    let result = `El Minimo de los tres numero es: ${minNumero}`;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;

}

//promedio
function obtenerPromedio() {

    num1 = parseFloat(prompt("Digite el primero numero: "));
    num2 = parseFloat(prompt("Digite el segundo numero: "));
    num3 = parseFloat(prompt("Digite el tercer numero: "));

    let promedio = (num1 + num2 + num3) / 3;

    let result = `El Promedio de los tres numero es: ${promedio}`;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}

//letra mayuscula o minuscula
function letraMayusMinus() {

    let letra = prompt("Digite una letra:");

    let result;
    if (letra.length === 1) {
        if (letra === letra.toUpperCase()) {
            result = "La letra es mayuscula.";
        } else if (letra === letra.toLowerCase()) {
            result = "La letra es minuscula.";
        } else {
            result = "Solo dijite una letra";
        }
    } else {
        result = "Solo dijite una letra";
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}

//caracteres
function caracter() {

    let caracter = prompt("Digite un caracter:");

    let result;

    if (caracter.length === 1 && !isNaN(caracter) && caracter !== " ") {
        result = "El caracter es un digito numerico";
    } else {
        result = "El caracter no es un digito numerico"
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}