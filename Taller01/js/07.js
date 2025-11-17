function calcularPago() {
    let nombreVendedor = prompt("Ingresa el nombre del vendedor:");
    let carrosVendidos = parseInt(prompt("Ingresa el número de autos vendidos:"));

    const pagoBase = 350;
    const comision = 15;
    const bono = 40;
    const pImpuesto = 0.25;

    let sueldoB = pagoBase + (comision * carrosVendidos);

    if (carrosVendidos > 15) {
        sueldoB += bono;
    }

    let impuesto = sueldoB * pImpuesto;

    let sueldoN = sueldoB - impuesto;

    let result = `
    Nombre del vendedor: ${nombreVendedor}<br>
    Sueldo Bruto: $${sueldoB.toFixed(2)}<br>
    Impuesto: $${impuesto.toFixed(2)}
    Sueldo Neto: $${sueldoN.toFixed(2)}
    `;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}