function intercambioNumero(){
    let a = parseInt(prompt("Dijita el primer valor (A)"));

    let b = parseInt(prompt("Dijita el segundo valor (B)"));

    let resultado = document.getElementById('resultado');

    if (a > b) {
        let aux = a;
        a = b;
        b = aux;
    }

    resultado.innerHTML = `valor final => A = ${a}, B = ${b}`;
}