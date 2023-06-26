
let modal = document.getElementById("myModal");
let btn1 = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

//---------------- modal login---------------------

btn1.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

//------------------- login------------------------

const Arrayimagenes = [
  {
     nombre:"Lampara Vidrio",
     imagen:"imagenes/glass1.jpg",
     src:"https://kumbhglass.theshop.jp/",
     tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass2.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass3.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass4.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass5.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass6.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass1.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass8.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
   },
   {
    nombre:"Lampara Vidrio",
    imagen:"imagenes/glass9.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  
  {
    nombre:"ILamparaVidrio",
    imagen:"imagenes/glass10.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  
  
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor1.jpg",
    src:"https://www.clearhalo.com/products/1-bulb-table-light-korean-garden-dinning-room-night-lamp-with-floral-opal-frosted-glass-shade-in-red-pink?variant=40507826897060",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor2.jpg",
    src:"https://www.clearhalo.com/es-es/products/flared-bedroom-night-table-light-pastoral-metal-1-2-lights-green-nightstand-lamp-with-flower-decoration",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor5.jpg",
    src:"https://www.amazon.com/-/es/Candelabro-vintage-colgante-cristal-entrada/dp/B09L86X3S4",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor4.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor5.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Flor"
  },
  
  
  
  ]
  let arrayGlass = [];
  let arrayFlor = [];
  let arrayJelly = [];
  let botones = document.querySelectorAll(".botones");
  let contImages = document.querySelector(".contImages")
  
  
      for (let i = 0; i < botones.length; i++) {
        // contImages.remove()
        botones[i].addEventListener("click", (e) => {
          let indetBoton = e.target;
          arrayGlass.length = 0;
          arrayFlor.length = 0;
          arrayJelly.length = 0;
  
          if(indetBoton.id === "boton1"){
            for(let i = 0; i<Arrayimagenes.length; i++){
              if(Arrayimagenes[i].tipo == "Glass"){
                arrayGlass.push(Arrayimagenes[i])
              }
            }
            let figureFlor = document.querySelectorAll(".imagenes")
            figureFlor.length = 0
            for(let i = 0; i <arrayGlass.length;i++){
            
                 figureFlor = document.createElement('figure');
                 figureFlor.className = "figurecont";
                const imagenflor = document.createElement('img');
                imagenflor.src = arrayGlass[i].imagen;
                imagenflor.className = "imagenesTab";
                figureFlor.appendChild(imagenflor);
                
          
          
                const figflor = document.createElement('figcaption');
                const enlaceflor = document.createElement('a');
                enlaceflor.href = arrayGlass[i].src;
                enlaceflor.textContent = "Lampara de Vidrio";
                figflor.appendChild(enlaceflor)
                
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'heart';
                checkbox.style.chequed
           
             
                let labelheart = document.createElement('label')
                labelheart.setAttribute("for", "heart")
                labelheart.innerHTML = "&#9829";
                labelheart.id = "labelHeart"
             
          
                checkbox.appendChild(labelheart)
                figureFlor.appendChild(labelheart);
          
          
                figureFlor.appendChild(figflor);
                contImages.appendChild(figureFlor);
              }
            }
  
            if(indetBoton.id === "boton2"){
              arrayGlass.length = 0;
              for(let i = 0; i<Arrayimagenes.length; i++){
                if(Arrayimagenes[i].tipo == "Flor"){
                  arrayFlor.push(Arrayimagenes[i])
                }
              }
              for(let i = 0; i <arrayFlor.length;i++){
              
                  const figureFlor = document.createElement('figure');
                  const imagenflor = document.createElement('img');
                  imagenflor.src = arrayFlor[i].imagen;
                  imagenflor.className = "imagenesTab";
                  figureFlor.appendChild(imagenflor);
            
            
                  const figflor = document.createElement('figcaption');
                  const enlaceflor = document.createElement('a');
                  enlaceflor.href = arrayFlor[i].src;
                  enlaceflor.textContent = "Lampara de Vidrio";
                  figflor.appendChild(enlaceflor)
                  
                  let checkbox = document.createElement('input');
                  checkbox.type = 'checkbox';
                  checkbox.id = 'heart';
                  checkbox.style.chequed
             
               
                  let labelheart = document.createElement('label')
                  labelheart.setAttribute("for", "heart")
                  labelheart.innerHTML = "&#9829";
                  labelheart.id = "labelHeart"
               
            
                  checkbox.appendChild(labelheart)
                  figureFlor.appendChild(labelheart);
            
            
                  figureFlor.appendChild(figflor);
                  contImages.appendChild(figureFlor);
                }
              }
      
  
        });
      }