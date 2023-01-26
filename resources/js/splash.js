/* Crea tu propia lógica para hacer una splash page que desaparezca */
window.onload = setTimeout(function(){
    
    window.scrollTo({
        top: 0
    })
    
}, 500)

window.onload = setTimeout(function(){
    
     let contenedor = document.getElementById("contenedor-carga");
     //let proba = document.querySelector(".proba")

     contenedor.style.visibility = "hidden";
     contenedor.style.opacity = "0";
     //proba.style.visibility = "visible";
     
 }, 2000)

 window.onload = setTimeout(function(){
    //let contenedor = document.getElementById("contenedor-carga");
    let proba = document.querySelector(".proba")

    //contenedor.style.visibility = "hidden";
    //contenedor.style.opacity = "0";
    proba.style.visibility = "visible";
    
}, 2500)