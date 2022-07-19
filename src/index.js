//Import validator from './validator.js';

//console.log(validator);

// conectar el dom con la funcionalida logica

const boton=document.getElementById("boton")
let numeroTarjeta = document.getElementById("numeroTarjeta")

boton.addEventListener('click',function(e){
   e.preventDefault();
   let mensaje=numeroTarjeta.value
   console.log(mensaje)
})


