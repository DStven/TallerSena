function consultarPuntos(){
    
    let resultado = document.getElementById('resultado');

    const clases = [
        {nombre: "Ejecutiva", puntos: 2000},
        {nombre: "Normal", puntos: 1000},
        {nombre: "Económica", puntos: 500}
    ];

    let puntos = parseInt(prompt("Ingresar la cantidad de puntos: "));

     if (isNaN(puntos) || puntos < 0) {
        resultado.innerHTML = "Puntos inválidos";  
        return;
     }
     
    if (puntos < 500) {
        resultado.innerHTML = "Puntos insuficientes";
        return; 
    }

    let seleccionClase = " ";

    for (let i = 0; i < clases.length; i++){
        if (puntos >= clases[i].puntos){
            seleccionClase = clases[i].nombre;
            break;
        };
    }

    
    if (seleccionClase) {
        resultado.innerHTML = `Viajas en clase ${seleccionClase}`;
    }else {
        alert("Puntos invalidos");
    }


    
}