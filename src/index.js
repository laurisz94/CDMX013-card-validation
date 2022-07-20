import validator from './validator.js';

console.log(validator);

// conectar el dom con la funcionalida logica

const boton = document.getElementById("boton")

//const numeroTarjeta = document.getElementById("numeroTarjeta")

//Es para que funcione el boton al dar click y crea la variable para traer el valor que ponga el usario
boton.addEventListener('click',function(e){
   e.preventDefault();
   let numeroCredit = document.getElementById('numeroTarjeta').value;
   numeroCredit = validator.isValid(numeroCredit);
   //mostrarValidacion(numeroCredit)
   //console.log("numeroTarjeta")
})
