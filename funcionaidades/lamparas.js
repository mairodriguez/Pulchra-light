
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

//  ----------tabs-----------------

const Arrayimagenes = [
  {
     nombre:"Lampara Circular Kumbhglass",
     imagen:"imagenes/glass1.jpg",
     src:"https://kumbhglass.theshop.jp/",
     tipo:"Glass"
  },
  {
    nombre:"Lampara Derretida Kumbhglass",
    imagen:"imagenes/glass2.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara De Goteo estilo cono Kumhbglass",
    imagen:"imagenes/glass3.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara circular de goteo Kumbhglass",
    imagen:"imagenes/glass4.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara circular con agujeros Kumbaglass",
    imagen:"imagenes/glass5.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara De Goteo estilo cono Kumbaglass",
    imagen:"imagenes/glass6.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara circular de goteo Kumbaglass",
    imagen:"imagenes/glass1.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara De Goteo estilo cono Kumbaglass",
    imagen:"imagenes/glass8.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
   },
   {
    nombre:"Lampara circular de goteo roja Kumbhglass",
    imagen:"imagenes/glass9.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  
  {
    nombre:"Lampara tipo cono de goteo roja Kumbhglass",
    imagen:"imagenes/glass10.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  
  
  {
    nombre:"lampara de mesa estilo flor",
    imagen:"imagenes/flor1.jpg",
    src:"https://www.clearhalo.com/products/1-bulb-table-light-korean-garden-dinning-room-night-lamp-with-floral-opal-frosted-glass-shade-in-red-pink?variant=40507826897060",
    tipo:"Flor"
  },
  {
    nombre:"lampara de mesa estilo flor y rosas",
    imagen:"imagenes/flor2.jpg",
    src:"https://www.clearhalo.com/es-es/products/flared-bedroom-night-table-light-pastoral-metal-1-2-lights-green-nightstand-lamp-with-flower-decoration",
    tipo:"Flor"
  },
  {
    nombre:"lampara doble estilo flor",
    imagen:"imagenes/flor3.jpg",
    src:"https://www.amazon.com/L%C3%A1mpara-Tiffany-pantallas-pulgadas-almohadilla/dp/B08PQPQP7H/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=22LRZZWCRRIHC&keywords=lamparas+de+flores+vidrio&qid=1687865908&sprefix=lamparas+de+flores+vidrio%2Caps%2C141&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara de mesa estilo flor",
    imagen:"imagenes/flor4.jpg",
    src:"https://www.etsy.com/es/listing/1506680123/lampara-de-flores-lampara-de-mesa-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-19&frs=1&edd=1&organic_search_click=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara estilo flor colorida",
    imagen:"imagenes/flor5.jpg",
    src:"https://www.etsy.com/es/listing/643199668/lampara-de-flor-de-loto-lampara-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-18&edd=1&organic_search_click=1/",
    tipo:"Flor"
  },
  {
    nombre:"lampara colgante estilo flor colorida",
    imagen:"imagenes/flor6.jpg",
    src:"https://www.etsy.com/es/listing/1092375582/lampara-de-flor-azul-de-pie-con-hojas?click_key=72c3cc535be4817eea6b585f16e57b9f1e60f027%3A1092375582&click_sum=500df822&ref=internal_similar_listing_bot-6&listing_id=1092375582&listing_slug=lampara-de-flor-azul-de-pie-con-hojas",
    tipo:"Flor"
  },
  {
    nombre:"lampara colgante estilo flor de vidrio",
    imagen:"imagenes/flor7.jpg",
    src:"https://www.etsy.com/es/listing/1313723258/lamparas-de-techo-lampara-en-forma-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-35&cns=1&edd=1&sts=1&organic_search_click=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara de vidrio colgante doble estilo flor",
    imagen:"imagenes/flor8.jpg",
    src:"https://www.etsy.com/es/listing/569276057/ca-venier-aplique-2-luces-cristal-y?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=lampara+flor+vidrio&ref=sc_gallery-1-1&frs=1&cns=1&edd=1&plkey=9dfaaacecfb1a6d213812c2ce1953cba06c13218%3A569276057",
    tipo:"Flor"
  },
  {
    nombre:"lampara de mesa estilo rosa doble ",
    imagen:"imagenes/flor9.jpg",
    src:"https://www.etsy.com/es/listing/1184445843/lampara-de-mesa-rosa-con-pantallas-de?click_key=0a6daad6546cdd851eecb91a8aa1d5ee9bcae627%3A1184445843&click_sum=65bd45dc&ref=related-1&sts=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara colgante de vidrio estilo flores",
    imagen:"imagenes/flor10.jpg",
    src:"https://www.etsy.com/es/listing/1463360349/lampara-de-techo-chandelier-con-flores?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=lampara+flor+vidrio&ref=sr_gallery-1-10&edd=1&sts=1&organic_search_click=1",
    tipo:"Flor"
  },



  {
    nombre:"lampara cute estilo medusas",
    imagen:"imagenes/medusa1.jpg",
    src:"https://www.etsy.com/es/listing/556650616/colgante-de-medusas-con-luz-led?click_key=9da77dc4355234355d91251dfbca10ede7cac434%3A556650616&click_sum=7cefacc8&elp_to_elp_for_all_recs=1&ref=landingpage_similar_listing_bot-4&listing_id=556650616&listing_slug=colgante-de-medusas-con-luz-led",
    tipo:"Medusa"
  },

  {
    nombre:"lampara de vidrio estilo medusas",
    imagen:"imagenes/medusa2.jpg",
    src:"https://www.etsy.com/es/listing/1252291185/made-to-orden-lampara-en-forma-de-medusa?click_key=63daefbf5b032eb9c1d97b0f99133031c06612d2%3A1252291185&click_sum=6da8a286&ref=search2_top_narrowing_intent_modules_top_rated-2&frs=1&sts=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara de tela y luces estilo medusas",
    imagen:"imagenes/medusa3.jpg",
    src:"https://www.etsy.com/es/listing/1486105427/lampara-de-medusa-luminosa-lampara-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish&ref=sr_gallery-1-1&pro=1&edd=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara de vidrio estilo medusas",
    imagen:"imagenes/medusa4.jpg",
    src:"https://www.etsy.com/es/listing/577644890/envio-gratuito-a-los-estados-unidos?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish&ref=sr_gallery-1-4&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara rosa de vidrio estilo medusas",
    imagen:"imagenes/medusa5.jpg",
    src:"https://fishcake2012.tumblr.com/post/118457799305/fuskida-blown-glass-jellyfish-table-lamps-by",
    tipo:"Medusa"
  },
  {
    nombre:"lampara brillante estilo medusas",
    imagen:"imagenes/medusa6.jpg",
    src:"https://www.contemporarychandeliercompany.co.uk/chandeliers/acrylic-infinity-jellyfish/projectid/1/",
    tipo:"Medusa"
  },

  {
    nombre:"lampara pequeña de plastico estilo medusa",
    imagen:"imagenes/medusa8.jpg",
    src:"https://www.etsy.com/listing/1510281719/cheerland-glitter-iridescent-jellyfish?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish+lamp&ref=sr_gallery-1-22&pro=1&frs=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"Mini lamparas estilo medusas",
    imagen:"imagenes/medusa9.jpg",
    src:"https://www.contemporarychandeliercompany.co.uk/chandeliers/glass-jellyfish/projectid/2/",
    tipo:"Medusa"
  },
  {
    nombre:"lampara de vidrio estilo medusas",
    imagen:"imagenes/medusa10.jpg",
    src:"https://hardsadness.tumblr.com/post/166907016141/imgfave",
    tipo:"Medusa"
  },


  
  
  
  ]
  let arrayGlass = [];
  let arrayFlor = [];
  let arrayJelly = [];
  let botones = document.querySelectorAll(".botones");
  let contImages = document.querySelector(".contImages")
  
  arrayGlass.length = 0;
  console.log(arrayGlass)
      for (let i = 0; i < botones.length; i++) {
        // contImages.remove()
        botones[i].addEventListener("click", (e) => {
          let indetBoton = e.target;
          arrayGlass.length = 0;
          arrayFlor.length = 0;
          arrayJelly.length = 0;
  
          if(indetBoton.id === "boton1"){
            contImages.innerHTML = "";
            console.log(arrayGlass)
            for(let i = 0; i<Arrayimagenes.length; i++){
              if(Arrayimagenes[i].tipo == "Glass"){
                arrayGlass.push(Arrayimagenes[i])
              }
            }
            for(let i = 0; i <arrayGlass.length;i++){
            
                const figureFlor = document.createElement('figure');
                 figureFlor.className = "figurecont";
                const imagenflor = document.createElement('img');
                imagenflor.src = arrayGlass[i].imagen;
                imagenflor.className = "imagenesTab";
                figureFlor.appendChild(imagenflor);
                
          
          
                const figflor = document.createElement('figcaption');
                figflor.className = "cont-nombreImagenes";
                const enlaceflor = document.createElement('a');
                enlaceflor.href = arrayGlass[i].src;
                enlaceflor.target = "blank_";
                enlaceflor.textContent = arrayGlass[i].nombre;
                enlaceflor.className = "nombreImagenes";
                figflor.appendChild(enlaceflor)
                
                let checkbox = document.createElement('input');
                checkbox.type = 'checked';
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
  
         else if(indetBoton.id === "boton2"){
             contImages.innerHTML = "";
              console.log(arrayGlass)
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
                  figflor.className = "cont-nombreImagenes";
                  const enlaceflor = document.createElement('a');
                  enlaceflor.href = arrayFlor[i].src;
                  enlaceflor.target = "blank_";
                  enlaceflor.textContent =  arrayFlor[i].nombre;
                  enlaceflor.className = "nombreImagenes";
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
      

              else if(indetBoton.id === "boton3"){
                contImages.innerHTML = "";
                for(let i = 0; i<Arrayimagenes.length; i++){
                  if(Arrayimagenes[i].tipo == "Medusa"){
                    arrayJelly.push(Arrayimagenes[i])
                  }
                }
                for(let i = 0; i <arrayJelly.length;i++){
                
                    const figureFlor = document.createElement('figure');
                    const imagenflor = document.createElement('img');
                    imagenflor.src = arrayJelly[i].imagen;
                    imagenflor.className = "imagenesTab";
                    figureFlor.appendChild(imagenflor);
              
              
                    const figflor = document.createElement('figcaption');
                    figflor.className = "cont-nombreImagenes";
                    const enlaceflor = document.createElement('a');
                    enlaceflor.href = arrayJelly[i].src;
                    enlaceflor.target = "blank_";
                    enlaceflor.textContent = arrayJelly[i].nombre;
                    enlaceflor.className = "nombreImagenes";
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