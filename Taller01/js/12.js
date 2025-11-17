function intercambiarNumero() {
    let num1 = parseInt(prompt("Ingresa el primer nunmero: "));
    let num2 = parseInt(prompt("Ingresa el segundo nunmero: "));
    let num3 = parseInt(prompt("Ingresa el tercer nunmero: "));

    let valorInicial;

    if (num2 > num1 && num2 > num3) {
        let temp = num1;
        num1 = num2;
        num2 = num3;
        num3 = temp;

        valorInicial = `<p><strong>Los números intercambiados son:</strong></p>
        <p>Primer numero: ${num1}</p>
                    <p>Segundo numero: ${num2}</p>
                    <p>Tercer numero: ${num3}</p>`;
    } else {
        valorInicial = `
                    <p><strong>Los numeros no han sido intercambiados, No cumple con la condicion.</strong></p>
                `;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = valorInicial;

}