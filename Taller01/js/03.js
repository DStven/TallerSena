function verificarNumero(){
    let numero = parseInt(prompt("Ingresa un número: "));
    let resultado = document.getElementById('resultado');

    let numMayorCero = (numero > 0) ? `el numero ${numero} es mayor que 0` : `El numero ${numero} es menor que 0`;

    let parImpar = (numero % 2 === 0) ? "El numero es par " : "El numero es impar";

    resultado.innerHTML = numMayorCero + "<br>  "  + parImpar;
}