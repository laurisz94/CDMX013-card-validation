import validator from './validator.js';

// conectar el dom con la funcionalida logica
const boton = document.getElementById("boton");
//const creditCard = document.getElementById("numeroTarjeta").value;

//Es para que funcione el boton al dar click y crea la variable para traer el valor que ponga el usario
boton.addEventListener('click',function(e){
   e.preventDefault();
   const creditCard = document.getElementById('numeroTarjeta').value;
   validator.isValid(creditCard);
 //console.log(creditCard)

   //numeroCredit = validator.isValid(numeroCredit);
   //mostrarValidacion(numeroCredit)Ho
})

//console.log(validator);

