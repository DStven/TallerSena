let n_pasajes, cupo, alerta;

const costo_pasaje = 1700;

function consultarPasaje() {
    cupo = parseInt(prompt("Ingrese valor cupo de la tarjeta"));

    n_pasajes = Math.floor(cupo / costo_pasaje);


    document.getElementById("resultado").innerHTML = "La cantidad de pasajes que tienes es: " + n_pasajes;

    if (n_pasajes <= 2) {
        alerta = "Tiene 2 o menos pasajes, debe recargar.";
    } else {
        alerta = `tienes ${n_pasajes} pasajes`;
    }


   
    alert(alerta);
};
