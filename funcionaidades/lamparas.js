let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');
const IMAGENES = ['imagenes/flor3.jpg','imagenes/glass5.jpg','imagenes/glass9.jpg'];

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
let tab1 = document.querySelector("#home");
const imagenGlass =['imagenglass/glass1.jpg','imagenglass/glass2.jpg','imagenglass/glass3.jpg','imagenglass/glass4.jpg',
'imagenglass/glass5.jpg','imagenglass/glass6.jpg','imagenglass/glass7.jpg','imagenglass/glass8.jpg','imagenglass/glass9.jpg','imagenglass/glass10.jpg'];
const imagenFlor = ['imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg',
'imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg','imagenflor/flor1.jpg',]
const epale = ['mai1','mai2','mai3']

function pasarFoto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
window.onload = function () {
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

//---------------- modal login---------------------

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

//------------------- login------------------------

const logionForm = document.querySelector('.loginForm');
logionForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector(".email").value;
    const contrasena = document.querySelector(".contrasena").value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [] 
    const usuarioValido = usuarios.find(usuarios => usuarios.email === email && usuarios.contraseña === contrasena)
    if(!usuarioValido){
       return alert("usuario y/o contraseña incorrectos") 
    }
    alert(`hola ${usuarioValido.name}`)
 })

// --------tabs-----------------------

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    console.log(id)
    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
  if(id === "home"){
    for (let i=0;i<5;i++){  
      let nuevoDiv = document.createElement('div');
      nuevoDiv.id="div";
      nuevoDiv.style.backgroundColor = "red";
      tab1.append(nuevoDiv);
      let imagenGlass = document.createElement('img');
      imagenGlass.innerHTML = epale[i];
      
      nuevoDiv.appendChild(imagenGlass);
      }
  }

}
