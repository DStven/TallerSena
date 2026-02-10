//Ejercicio 1
function ejercicio1() {
    document.getElementById("enunciado").innerHTML = `
    <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio
    original y su total con descuento. El descuento lo hace en base a la clave,
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
    en del 20% (sólo existen dos claves).</p>
    
    <input type="button" value="Calcular Descuento" onclick="calcularDescuento()">
    `;

}

function calcularDescuento() {
    var producto = prompt("Ingrese el nombre del producto:");
    var clave = prompt("Ingrese la clave (01 o 02):");
    var precioOriginal = Number(prompt("Ingrese el precio original:"));
    var descuento = 0, total;

    if (isNaN(precioOriginal) || precioOriginal <= 0) {
        alert("Precio inválido");
        return;
    }

    if (clave === "01") {
        descuento = precioOriginal * 0.10;
    } else if (clave === "02") {
        descuento = precioOriginal * 0.20;
    } else {
        alert("Clave inválida");
        return;
    }

    total = precioOriginal - descuento;

    document.getElementById("resultado").innerHTML = `
    Producto: ${producto} <br>
    Clave: ${clave} <br>
    Precio original: $${precioOriginal} <br>
    Descuento: $${descuento} <br>
    Total a pagar: $${total}
`;
}

//Ejercicio 2
function ejercicio2() {
    document.getElementById("enunciado").innerHTML = `
    <p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas,
    precio de las camisas 25000. Si se compran tres camisas o más se aplica
    un descuento del 20% sobre el total de la compra y si son menos de tres
    camisas un descuento del 10%</p>
    
    <input type="button" value="Calcular Total" onclick="calcularTotal()">
    `;
}

function calcularTotal() {
    var precioCamisa = 25000;
    var cantidad = Number(prompt("Ingrese la cantidad de camisas:"));
    var total, descuento;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    total = cantidad * precioCamisa;

    if (cantidad >= 3) {
        descuento = total * 0.20;
    } else {
        descuento = total * 0.10;
    }

    document.getElementById("resultado").innerHTML = `
    Cantidad: ${cantidad} <br>
    Total sin descuento: $${total} <br>
    Descuento: $${descuento} <br>
    Total a pagar: $${total - descuento}
`;

}

// Ejercicio 3
function ejercicio3() {
    document.getElementById("enunciado").innerHTML = `
    <p>En un supermercado se hace una promoción, mediante la cual el cliente
    obtiene un descuento dependiendo de un número que se escoge al azar los
    numeros deben de estar entre 1 y 10. Si el número escogido es menor que
    10 el descuento es del 15% sobre el total de la compra, si es menor o igual
    a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</p>

    <input type="button" value="Calcular Descuento" onclick="calcularDescuentoSupermercado()">
    `;
}

function calcularDescuentoSupermercado() {
    var totalCompra = Number(prompt("Ingrese el total de la compra:"));
    var numAzar = Math.floor(Math.random() * 10) + 1;
    var descuento = 0;

    if (isNaN(totalCompra) || totalCompra <= 0) {
        alert("Total inválido");
        return;
    }

    if (numAzar <= 5) {
        descuento = totalCompra * 0.20;
    } else if (numAzar < 10) {
        descuento = totalCompra * 0.15;
    }

    document.getElementById("resultado").innerHTML = `
    Total compra: $${totalCompra} <br>
    Número al azar: ${numAzar} <br>
    Descuento: $${descuento} <br>
    Total a pagar: $${totalCompra - descuento}
`;

}

//Ejercicio 4
function ejercicio4() {
    document.getElementById("enunciado").innerHTML = `
    <p>Calcular el número de pulsaciones que debe tener una persona por cada 10
    segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es
    femenino es:
    
    <br>num. pulsaciones ← (220 - edad)/10
    y si el sexo es masculino:
    <br>num. pulsaciones ← (210 - edad)/10
    </p>

    <input type="button" value="Calcular Pulsaciones" onclick="calcularPulsaciones()">
    `;
}

function calcularPulsaciones() {
    var edad = Number(prompt("Ingrese la edad:"));
    var sexo = prompt("Ingrese sexo (M/F):").toUpperCase();
    var pulsaciones;

    if (isNaN(edad) || edad <= 0) {
        alert("Edad inválida");
        return;
    }

    if (sexo === "F") {
        pulsaciones = (220 - edad) / 10;
    } else if (sexo === "M") {
        pulsaciones = (210 - edad) / 10;
    } else {
        alert("Sexo inválido");
        return;
    }

    document.getElementById("resultado").innerHTML = `
    Edad: ${edad} <br>
    Sexo: ${sexo} <br>
    Pulsaciones: ${pulsaciones}
`;

}

//Ejercicio 5
function ejercicio5() {
    document.getElementById("enunciado").innerHTML = `
    <p>Elabore un algoritmo que lea un número negativo e imprima el número y el
    positivo del mismo.</p>

    <input type="button" value="Calcular Positivo" onclick="calcularPositivo()">
    `;
}

function calcularPositivo() {
    var numero = Number(prompt("Ingrese un número negativo:"));

    if (isNaN(numero) || numero >= 0) {
        alert("Debe ingresar un número negativo");
        return;
    }

    document.getElementById("resultado").innerHTML = `
    Número negativo: ${numero} <br>
    Número positivo: ${Math.abs(numero)}
`;

}

//Ejercicio 6
function ejercicio6() {
    document.getElementById("enunciado").innerHTML = `
    <p> Hacer un algoritmo que permita pasar de kilogramos a gramos y toneladas.</p>

    <input type="button" value="Convertir Unidades" onclick="convertirUnidades()">
    `;
}

function convertirUnidades() {
    var kg = Number(prompt("Ingrese kilogramos:"));

    if (isNaN(kg) || kg < 0) {
        alert("Valor inválido");
        return;
    }

    document.getElementById("resultado").innerHTML = `
    Kilogramos: ${kg} <br>
    Gramos: ${kg * 1000} <br>
    Toneladas: ${kg / 1000}
`;
}


//Ejercicio 7
function ejercicio7() {
    document.getElementById("enunciado").innerHTML = `
    <p>Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto
    cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener
    la respuesta.</p>

    <input type="button" value="Calcular Costo" onclick="calcularCostoGalletas()">
    `;
}

function calcularCostoGalletas() {
    var cantidad = Number(prompt("Ingrese cantidad de galletas:"));
    var precioUnidad = 3500 / 15;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    document.getElementById("resultado").innerHTML = `
    Precio por galleta: $${precioUnidad.toFixed(2)} <br>
    Total a pagar: $${(cantidad * precioUnidad).toFixed(2)}
`;
}

//Ejercicio 8
function ejercicio8() {
    document.getElementById("enunciado").innerHTML = `
    <p>Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de
    cuadernos?. Elabore un algoritmo para hallar la respuesta correcta.</p>

    <input type="button" value="Calcular Costo" onclick="calcularCostoCuadernos()">
    `;
}

function calcularCostoCuadernos() {
    var cantidad = Number(prompt("Ingrese cantidad de cuadernos:"));
    var precioUnidad = 75000 / 15;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    document.getElementById("resultado").innerHTML = `
    Precio por cuaderno: $${precioUnidad.toFixed(2)} <br>
    Total a pagar: $${(cantidad * precioUnidad).toFixed(2)}
`;
}

//Ejercicio 9
function ejercicio9() {
    document.getElementById("enunciado").innerHTML = `
    <p>Realizar un programa que cuente de 1 a 200 e imprima en pantalla los
    números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva
    hasta 20 e imprima los divisibles por 8.</p>

    <input type="button" value="Contar Divisibles" onclick="contarDivisibles()">
    `;
}

function contarDivisibles() {
    var div6 = [];
    var div8 = [];

    for (var i = 1; i <= 200; i++) {
        if (i % 6 === 0) div6.push(i);
    }

    for (var j = 200; j >= 20; j--) {
        if (j % 8 === 0) div8.push(j);
    }

    document.getElementById("resultado").innerHTML = `
    <b>Divisibles por 6:</b><br>${div6.join(", ")} <br><br>
    <b>Divisibles por 8:</b><br>${div8.join(", ")}
`;
}

//Ejercicio 10
function ejercicio10() {
    document.getElementById("enunciado").innerHTML = `
    <p>Realizar un programa que capture el nombre de dos personas y las fechas
    de nacimiento con cada campo por separado día, mes y año y calcule la
    edad de dos personas diferentes y diga cuál de ellos es mayor.</p>

    <input type="button" value="Calcular Edad" onclick="calcularEdad()">
    `;
}
function calcularEdadPersona(dia, mes, anio) {
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    const d = hoy.getDate() - fechaNacimiento.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
        edad--;
    }
    return edad;
}
function calcularEdad() {
    const nombre1 = prompt("Ingrese el nombre de la primera persona:");
    const dia1 = Number(prompt("Ingrese el día de nacimiento de " + nombre1 + ":"));
    const mes1 = Number(prompt("Ingrese el mes de nacimiento de " + nombre1 + ":"));
    const anio1 = Number(prompt("Ingrese el año de nacimiento de " + nombre1 + ":"));

    const nombre2 = prompt("Ingrese el nombre de la segunda persona:");
    const dia2 = Number(prompt("Ingrese el día de nacimiento de " + nombre2 + ":"));
    const mes2 = Number(prompt("Ingrese el mes de nacimiento de " + nombre2 + ":"));
    const anio2 = Number(prompt("Ingrese el año de nacimiento de " + nombre2 + ":"));

    const edad1 = calcularEdadPersona(dia1, mes1, anio1);
    const edad2 = calcularEdadPersona(dia2, mes2, anio2);

    let mayor;
    if (edad1 > edad2) {
        mayor = nombre1;
    } else if (edad2 > edad1) {
        mayor = nombre2;
    } else {
        mayor = "Ambos tienen la misma edad";
    }

    document.getElementById("resultado").innerHTML = `
    ${nombre1} tiene ${edad1} años. <br>
    ${nombre2} tiene ${edad2} años. <br>
    La persona mayor es: ${mayor}
`;
}

//Ejercicio 11
function ejercicio11() {
    document.getElementById("enunciado").innerHTML = `
    <p>Un programa que me capture el salario de un empleado y me realice el
    descuento de pensión y salud, pero si el salario es superior a 1200000 no le
    debe descontar.</p>

    <input type="button" value="Salario" onClick="salarioEmpleado()">

    `;

}

function salarioEmpleado() {
    var salario, salarioFinal;
    var descuentoSalud = 0;
    var descuentoPension = 0;

    salario = Number(prompt("Ingrese el salario del empleado"));

    if (isNaN(salario) || salario <= 0) {
        alert("Salario inválido");
        return;
    }

    if (salario <= 1200000) {
        descuentoSalud = salario * 0.04;
        descuentoPension = salario * 0.04;
    }

    salarioFinal = salario - descuentoSalud - descuentoPension;

    document.getElementById("resultado").innerHTML = `
    Salario: $${salario} <br>
    Descuento de salud: $${descuentoSalud} <br>
    Descuento de pensión: $${descuentoPension} <br>
    Salario final: $${salarioFinal}
`;
}


//Ejercicio 12
function ejercicio12(){
    document.getElementById("enunciado").innerHTML = `
    <p>Un programa que, capture el salario de un empleado, y lo divida por 30
    dias del mes, también debe capturar los días trabajados y me debe
    mostrar el total ganado.</p>    

    <input type="button" value="Calcular Salario" onClick="calcularSalario()">
    `;
}

function calcularSalario(){
    var salarioMensual, diasTrabajo,salarioDia, totalGanado;

    salarioMensual = Number(prompt("Ingrese el salario Mensual: "));
    diasTrabajo = Number(prompt("Ingrese dias trabajados: "));

    if(isNaN(salarioMensual) || salarioMensual <= 0){
        alert("Salario Invalido");
        return;
    }

    if(isNaN(diasTrabajo) || diasTrabajo < 0 || diasTrabajo > 30){
        alert("Dias trabajados no validos");
        return;
    }

    salarioDia = salarioMensual / 30;
    totalGanado = salarioDia * diasTrabajo;

    document.getElementById("resultado").innerHTML = `
    Salario mensual: $${salarioMensual} <br>
    Salario por días: $${salarioDia.toFixed(2)} <br>
    Días trabajados: ${diasTrabajo} <br>
    Total ganado: $${totalGanado.toFixed(2)}
`;

}

//Ejercicio 13

function ejercicio13() {
    document.getElementById("enunciado").innerHTML = `
    
    <p>Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por
    4 y 5 y decir si son pares o impares. </p>

    <input type="button" value="contador" onClick="contador()">
    `;
}

function contador() {
    var a = 1;
    var result = '';
    
    while(a <= 1500) {

        if(a % 4 === 0 && a % 5 === 0){
            if (a % 2 === 0){
                result += a + 'Par <br>';
            }else {
                result += a + 'Impar <br>';
            }
        }

        a++;
    }

    document.getElementById("resultado").innerHTML = result;
}

//Ejercicio 14
function ejercicio14(){
    document.getElementById("enunciado").innerHTML = `
    <p>Elaborar un algoritmo, que tenga 10 números enteros. El programa debe
    sumar todos los números que sean múltiplos de 3.</p>

    <input type="button" value="contador" onClick="numerosEntero()">
    `;
}

function numerosEntero(){
    var suma = 0;
    var con = 1;
    var numeros = [];
    var multiplos = [];

    while(con <= 10){
        var num = Number(prompt("Ingresa un numero entero: "));
        numeros.push(num);
        if (num % 3 === 0){
            suma = suma + num;
            multiplos.push(num);
        }
        con ++;
    }

    document.getElementById("resultado").innerHTML = `
    Números ingresados: ${numeros.join(", ")} <br>
    Total de números: 10 <br>
    Múltiplos de 3: ${multiplos.join(", ")} <br>
    Suma de múltiplos de 3: ${suma}
`;
}

//Ejercicio 15
function ejercicio15(){
    document.getElementById("enunciado").innerHTML = `
    <p>Mostrar las 30 primeras potencias de 3 y la suma de ellos.</p>

    <input type="button" value="Potencia" onclick="sumaPotencia()">
    `;
}

function sumaPotencia(){

    var potencia = 1;
    var suma = 0;
    var result = '';
    
    
    for(var con = 1; con <= 30; con++){
        potencia = Math.pow(3, con);
        result += '3^' + con + ' = ' + potencia + '<br> ';
        suma += potencia;
    }
    result += '<br><b>Suma total: ' + suma + '</b>';

    document.getElementById('resultado').innerHTML = result;
}

//Ejercicio 16
function ejercicio16(){
    document.getElementById('enunciado').innerHTML = `
    <p>Un programa con 5 alumnos, cada uno con 5 notas. 
    Calcular el promedio por alumno y mostrar solo los que ganaron.</p>
    
    <input type="button" value="Promedio de notas" onclick="promedioAlumnos()">
    `;
}

function promedioAlumnos(){
    var nombre, nota, suma, promedio;
    var result = '';

    for(var i = 1; i <= 5; i++){
        nombre = prompt("Nombre del estudiante " + i + ":");
        suma = 0;

        for(var j = 1; j <= 5; j++){
            nota = Number(prompt("Ingrese la nota " + j + " de " + nombre + ":"));

            if(isNaN(nota) || nota < 0 || nota > 5){
                alert("Nota invalida");
                return;
            }

            suma += nota;
        }

        promedio = suma / 5;

        if(promedio >= 3){
            result += nombre + 
                ' - Promedio: ' + promedio.toFixed(2) + '<br>';
        }
    }

    if(result === ''){
        result = 'Ningún alumno ganó.';
    }

    document.getElementById('resultado').innerHTML = result;
}

//Ejercicio 17
function ejer17(){
    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo, con el dividendo y el divisor y que luego me calcule el
    residuo y el cociente de dicha división.</p>

    <input type="button" value="Enviar" onclick="division()">
    `;
}

function division() {
    
    var dividendo = Number(prompt("Ingrese el dividendo:"));
    var divisor = Number(prompt("Ingrese el divisor:"));

    
    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
        alert("Datos no válidos o división por cero");
        return;
    }

    
    var cociente = Math.trunc(dividendo / divisor); 
    var residuo = dividendo % divisor;

    
    document.getElementById('resultado').innerHTML =
        `Dividendo:${dividendo}<br>
         Divisor: ${divisor}<br>
         Cociente: ${cociente}<br>
         Residuo: ${residuo}`;
}

//Ejercicio 18
function ejercicio18() {
    document.getElementById("enunciado").innerHTML = `
    <p>Diseñar un algoritmo que intercambie los valores de dos variables
    numéricas.</p>

    <input type="button" value="Intercambiar" onclick="intercambiarValores()">
    `;
}

function intercambiarValores() {
    let a = Number(prompt("Ingrese el primer número (a):"));
    let b = Number(prompt("Ingrese el segundo número (b):"));

    if (isNaN(a) || isNaN(b)) {
        alert("Ingrese valores válidos");
        return;
    }

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("resultado").innerHTML = `
        Valor después del intercambio: <br>
        a = ${a} <br>
        b = ${b}
    `;
}

//Ejercicio 19
function ejercicio19() {
    document.getElementById("enunciado").innerHTML = `
    <p>Diseñar un algoritmo que me permita ingresar un valor inicial y luego un
    valor final, para luego calcular el valor central de los números.</p>

    <input type="button" value="Calcular Central" onclick="valorCentral()">
    `;
}

function valorCentral() {
    let inicio = Number(prompt("Ingrese el valor inicial:"));
    let fin = Number(prompt("Ingrese el valor final:"));

    if (isNaN(inicio) || isNaN(fin)) {
        alert("Valores inválidos");
        return;
    }

    let central = (inicio + fin) / 2;

    document.getElementById("resultado").innerHTML = `
        Valor inicial: ${inicio} <br>
        Valor final: ${fin} <br>
        Valor central: ${central}
    `;
}

//Ejercicio 20
function ejercicio20() {
    document.getElementById("enunciado").innerHTML = `
    <p>Se desea calcular independientemente la suma de los números pares e
    impares comprendidos entre 1 y 50.</p>

    <input type="button" value="Calcular Sumas" onclick="sumaParesImpares()">
    `;
}

function sumaParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) sumaPares += i;
        else sumaImpares += i;
    }

    document.getElementById("resultado").innerHTML = `
        Suma de números pares: ${sumaPares} <br>
        Suma de números impares: ${sumaImpares}
    `;
}

//Ejercicio 21
function ejercicio21() {
    document.getElementById("enunciado").innerHTML = `
    <p>Determinar el promedio de una lista 20 de números positivos.</p>

    <input type="button" value="Calcular Promedio" onclick="promedio20Numeros()">
    `;
}

function promedio20Numeros() {
    let suma = 0;
    let numeros = [];

    for (let i = 1; i <= 20; i++) {
        let num = Number(prompt(`Ingrese el número positivo ${i}:`));
        if (isNaN(num) || num <= 0) {
            alert("Número inválido, debe ser positivo");
            return;
        }
        numeros.push(num);
        suma += num;
    }

    let promedio = suma / 20;

    document.getElementById("resultado").innerHTML = `
        Números ingresados: ${numeros.join(", ")} <br>
        Suma: ${suma} <br>
        Promedio: ${promedio.toFixed(2)}
    `;
}

//Ejercicio 22
function ejercicio22() {
    document.getElementById("enunciado").innerHTML = `
    <p>Diseñar un algoritmo que calcule los 5 primeros números impares que
    preceden a un numero N</p>

    <input type="button" value="Calcular Impares" onclick="imparesPrecedenN()">
    `;
}

function imparesPrecedenN() {
    let N = Number(prompt("Ingrese un número N:"));
    if (isNaN(N)) {
        alert("Número inválido");
        return;
    }

    let impares = [];
    let num = N - 1;

    while (impares.length < 5) {
        if (num % 2 !== 0) impares.push(num);
        num--;
    }

    document.getElementById("resultado").innerHTML = `
        Los 5 impares que preceden a ${N}: ${impares.join(", ")}
    `;
}

//Ejercicio23
function ejercicio23() {
    document.getElementById("enunciado").innerHTML = `
    <p>Hacer un programa que muestre si los cincos primeros numeros impares
    son múltiples de tres arrancando de 10</p>

    <input type="button" value="Verificar Múltiplos" onclick="imparesMultiploTres()">
    `;
}

function imparesMultiploTres() {
    let impares = [];
    let contador = 0;
    let num = 10;

    while (impares.length < 5) {
        if (num % 2 !== 0) {
            let esMultiplo3 = (num % 3 === 0) ? "Sí" : "No";
            impares.push(`${num} -> Múltiplo de 3: ${esMultiplo3}`);
        }
        num++;
    }

    document.getElementById("resultado").innerHTML = `
        ${impares.join("<br>")}
    `;
}

