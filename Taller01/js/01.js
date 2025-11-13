let n_pasajes, cupo, alerta;

const costo_pasaje = 1700;

function consultarPasaje() {
    cupo = parseInt(prompt("Ingrese valor cupo de la tarjeta"));

    n_pasajes = Math.floor(cupo / costo_pasaje);

    //mostrar resultado
    document.getElementById("resultado").innerHTML = "La cantidad de pasajes que tienes es: " + n_pasajes;

    if (n_pasajes <= 2) {
        alerta = "Tiene 2 o menso pasajes, debe recargar.";
    } else {
        alerta = "tienes " + n_pasajes + " pasajes";
    }


    //Mostrar la alerta
    alert(alerta);
};
