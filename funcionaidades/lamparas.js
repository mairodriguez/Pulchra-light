
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
     nombre:"Lampara Circular Kumbaglass",
     imagen:"imagenes/glass1.jpg",
     src:"https://kumbhglass.theshop.jp/",
     tipo:"Glass"
  },
  {
    nombre:"Lampara Derretida Kumbaglass",
    imagen:"imagenes/glass2.jpg",
    src:"https://kumbhglass.theshop.jp/",
    tipo:"Glass"
  },
  {
    nombre:"Lampara De Goteo",
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
    src:"https://www.etsy.com/es/listing/1506680123/lampara-de-flores-lampara-de-mesa-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-19&frs=1&edd=1&organic_search_click=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor5.jpg",
    src:"https://www.etsy.com/es/listing/643199668/lampara-de-flor-de-loto-lampara-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-18&edd=1&organic_search_click=1/",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor6.jpg",
    src:"https://www.etsy.com/es/listing/1092375582/lampara-de-flor-azul-de-pie-con-hojas?click_key=72c3cc535be4817eea6b585f16e57b9f1e60f027%3A1092375582&click_sum=500df822&ref=internal_similar_listing_bot-6&listing_id=1092375582&listing_slug=lampara-de-flor-azul-de-pie-con-hojas",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor7.jpg",
    src:"https://www.etsy.com/es/listing/1313723258/lamparas-de-techo-lampara-en-forma-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp&ref=sr_gallery-1-35&cns=1&edd=1&sts=1&organic_search_click=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor8.jpg",
    src:"https://www.etsy.com/es/listing/1461133997/lampara-de-flores-lampara-de-mesa-de?click_key=55f575fb08793633a91473403e55574a13418a7f%3A1461133997&click_sum=1afbde83&external=1&ref=hp_signed_out_opfy-3-1",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor9.jpg",
    src:"https://www.etsy.com/es/listing/788956144/lampara-flor-con-hada-en-columpio-escoge?click_key=de7e83053387fda1f44f937fd092d2c8702eea9a%3A788956144&click_sum=f931d0a7&ref=sim_strv-6&frs=1",
    tipo:"Flor"
  },
  {
    nombre:"lampara Flor",
    imagen:"imagenes/flor10.jpg",
    src:"https://www.etsy.com/es/listing/594661300/lampara-de-pie-lampara-amarilla?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp+shade&ref=sr_gallery-1-9&cns=1&edd=1&organic_search_click=1",
    tipo:"Flor"
  },


  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa1.jpg",
    src:"https://www.homewode.com/products/handmade-jellyfish-lamp-diy-creative-materials-package?spm=..collection_f20a8d3b-2782-462e-a7b6-ab2752cb7cee.collection_detail_1.39&spm_prev=..index.header_1.1&pp=0&epik=dj0yJnU9Tng0NTg3SHN0dl9maHQ2NDJDd3FsRGYyNWhSVWpjdzkmcD0wJm49NEFjMzZsYkQyRHZWUi1BNGlhRkdLQSZ0PUFBQUFBR1NhbVF3",
    tipo:"Medusa"
  },

  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa2.jpg",
    src:"https://www.etsy.com/es/listing/1252291185/made-to-orden-lampara-en-forma-de-medusa?click_key=63daefbf5b032eb9c1d97b0f99133031c06612d2%3A1252291185&click_sum=6da8a286&ref=search2_top_narrowing_intent_modules_top_rated-2&frs=1&sts=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa3.jpg",
    src:"https://www.etsy.com/es/listing/1486105427/lampara-de-medusa-luminosa-lampara-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish&ref=sr_gallery-1-1&pro=1&edd=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa4.jpg",
    src:"https://www.etsy.com/es/listing/577644890/envio-gratuito-a-los-estados-unidos?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish&ref=sr_gallery-1-4&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa5.jpg",
    src:"https://www.etsy.com/es/listing/1490204630/lampara-de-medusas-lampara-de-forma-de?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jellyfish&ref=sr_gallery-1-16&pro=1&edd=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa6.jpg",
    src:"https://www.contemporarychandeliercompany.co.uk/chandeliers/acrylic-infinity-jellyfish/projectid/1/",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa7.jpg",
    src:"https://www.contemporarychandeliercompany.co.uk/chandeliers/acrylic-infinity-jellyfish/projectid/1/",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa8.jpg",
    src:"https://www.etsy.com/es/listing/594661300/lampara-de-pie-lampara-amarilla?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp+shade&ref=sr_gallery-1-9&cns=1&edd=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
    imagen:"imagenes/medusa9.jpg",
    src:"https://www.etsy.com/es/listing/594661300/lampara-de-pie-lampara-amarilla?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=flower+lamp+shade&ref=sr_gallery-1-9&cns=1&edd=1&organic_search_click=1",
    tipo:"Medusa"
  },
  {
    nombre:"lampara Medusas",
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
                const enlaceflor = document.createElement('a');
                enlaceflor.href = arrayGlass[i].src;
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
                  const enlaceflor = document.createElement('a');
                  enlaceflor.href = arrayFlor[i].src;
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
                    const enlaceflor = document.createElement('a');
                    enlaceflor.href = arrayJelly[i].src;
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