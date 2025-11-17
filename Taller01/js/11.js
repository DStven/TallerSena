function asignarEquipo() {
    
    let nombre = prompt("Ingrese el nombre del jugador:");
    let cedula = prompt("Ingrese la cédula del jugador:");
    let edad = parseInt(prompt("Ingrese la edad del jugador:"));

    let equipo;

    
    if (edad >= 25 && edad <= 40) {
        equipo = "Profesionales";
    } else if (edad >= 18 && edad <= 24) {
        equipo = "Aficionados";
    } else if (edad >= 12 && edad <= 17) {
        equipo = "Novatos";
    } else {
        equipo = "No puede ser asignado a ningún equipo";
    }

    
    let result = `
        Jugador: ${nombre}<br>
        Cédula: ${cedula}<br>
        Edad: ${edad}<br>
        Equipo asignado: ${equipo}
    `;

    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
}