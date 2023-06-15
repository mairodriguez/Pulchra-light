const carru = document.querySelector(".imagen");
const adelante = document.querySelector(".adelante");
 let counter = 1 ;
adelante.addEventListener("click", ()=> {

    
    
    if(counter == 1){
        carru.src = "imagenes/bandera" + counter + "png";
        counter++;
    }
    else if(counter == 2){
        carru.src = "imagenes/bandera" + counter + "png";
        counter++;
    }
    else if(counter == 3){
        carru.src = "imagenes/bandera" + counter + "png";
        counter++;
    }
    else if(counter == 4){
        carru.src = "imagenes/bandera" + counter + "png";
        counter++;
    }
    else if(counter == 5){
        carru.src = "imagenes/bandera" + counter + "png";
        counter= 1;
    }
})