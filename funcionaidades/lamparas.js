let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');
const IMAGENES = ['imagenes/flor3.jpg','imagenes/glass5.jpg','imagenes/glass9.jpg'];

let modal = document.getElementById("myModal");
let btn1 = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

const tabs = document.querySelector(".cont-tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
let tab1 = document.querySelector("#home");
let tab2 = document.querySelector("#about");
let tab3 = document.querySelector("#contact");
const imagenGlass =['imagenglass/glass1.jpg','imagenglass/glass2.jpg','imagenglass/glass3.jpg','imagenglass/glass4.jpg',
'imagenglass/glass5.jpg','imagenglass/glass6.jpg','imagenglass/glass8.jpg','imagenglass/glass8.jpg','imagenglass/glass9.jpg','imagenglass/glass9.jpg','imagenglass/glass10.jpg'];
const imagenFlor = ['imagenflor/flor1.jpg','imagenflor/flor2.jpg','imagenflor/flor8.jpg','imagenflor/flor4.jpg','imagenflor/flor5.jpg','imagenflor/flor6.jpg',
'imagenflor/flor7.jpg','imagenflor/flor8.jpg','imagenflor/flor9.jpg','imagenflor/flor2.jpg','imagenflor/flor10.jpg'];
const enlaceFlor = ['https://www.clearhalo.com/products/1-bulb-table-light-korean-garden-dinning-room-night-lamp-with-floral-opal-frosted-glass-shade-in-red-pink?variant=40507826897060',
'https://www.clearhalo.com/es-es/products/flared-bedroom-night-table-light-pastoral-metal-1-2-lights-green-nightstand-lamp-with-flower-decoration',
'https://www.amazon.com/-/es/Candelabro-vintage-colgante-cristal-entrada/dp/B09L86X3S4']

// function pasarFoto() {
//     if(posicionActual >= IMAGENES.length - 1) {
//         posicionActual = 0;
//     } else {
//         posicionActual++;
//     }
//     renderizarImagen();
// }

// /**
//  * Funcion que cambia la foto en la anterior posicion
//  */
// window.onload = function () {
//     if(posicionActual <= 0) {
//         posicionActual = IMAGENES.length - 1;
//     } else {
//         posicionActual--;
//     }
//     renderizarImagen();
// }

//---------------- modal login---------------------

btn1.onclick = function() {
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
    for (let i = 1; i <= 10; i++) {
      const figureGlass = document.createElement('figure');
      const imagenglass = document.createElement('img');
      imagenglass.src = imagenGlass[i];
      imagenglass.className = "imagenes";
      figureGlass.className = "cont-imagenes";
      figureGlass.appendChild(imagenglass);

      // Crear el elemento leyenda y agregar el enlace
      const leyenda = document.createElement('figcaption');
      const enlace = document.createElement('a');
      enlace.href ="https://kumbhglass.theshop.jp/";
      enlace.textContent = `glass`;
      leyenda.appendChild(enlace);

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'heart';
      checkbox.style.chequed
 
   
      var labelheart = document.createElement('label')
      labelheart.setAttribute("for", "heart")
      labelheart.innerHTML = "&#9829";
      labelheart.id = "labelHeart"
   

      checkbox.appendChild(labelheart)
      figureGlass.appendChild(labelheart);
      figureGlass.appendChild(leyenda);
      tab1.appendChild(figureGlass);
    }
  }
   if(id === "about"){
    for (let i = 1; i <= 10; i++) {
      const figureFlor = document.createElement('figure');
      const imagenflor = document.createElement('img');
      imagenflor.src = imagenFlor[i];
      imagenflor.className = "imagenes";
      figureFlor.appendChild(imagenflor);


      const figflor = document.createElement('figcaption');
      const enlaceflor = document.createElement('a');
      enlaceflor.href = enlaceFlor[i];
      enlaceflor.textContent = `glass`;
      figflor.appendChild(enlaceflor)


      figureFlor.appendChild(figflor);
      tab2.appendChild(figureFlor);
    }
  }
  else if(id === "contact"){
    for (let i=0;i<5;i++){  
      let divJelly = document.createElement('div');
      divJelly.id="div";
      tab3.append(divJelly);
      let imagenJelly = document.createElement('img');
      imagenJelly.src = imagenFlor[i];
      
      divJelly.appendChild(imagenGlass);
      }
  }

}
