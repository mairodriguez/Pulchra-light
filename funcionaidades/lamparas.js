const IMAGENES = [
    'img/montanya.jpg',
    'img/parque.jpg',
    'img/palmeras.jpg'
];
const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');

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
function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

const logionForm = document.querySelector('.loginForm')
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


 const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}