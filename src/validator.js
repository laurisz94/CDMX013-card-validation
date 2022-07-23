const validator = {

isValid : function (creditCard) {//la funcion invertir numero 
//la varibale let  arrayNumber gaurda el arreglo de número, split (nos evuelve un arreglo) prmite separar la cadera y se divide entre cada caracter    
    let arrayNumber = creditCard.split('').reverse().join('');
    let validacionCardNumber = [] 
//console.log(arrayNumber);

//Guardar los valores en un array ya al areves
for (let i=0; i < creditCard.length; i++) { //se cra un ciclo for que va desde la posicion 0 hasta la 16 
    validacionCardNumber.push(parseInt(arrayNumber[i])); 
//console.log(arrayNumber)
}

//length dice el numero de elementos que tiene 

//Iniciar el algoritmo de LUhm
let reverseAarrayNumber = validacionCardNumber//Es para guardar el valor que da en los array 
    for (let i = 0; i <= reverseAarrayNumber.length; i++) {//que sea menor a ese numero de elmentos 16
        let posicion = i + 1; //se crea un variable donde sumamos 1 posion para que se tome la 1era posicion en el array.
        let posicionPar = posicion % 2; //va dividir el numero de la posición sobre 2 y el residuio debe dar 0 
      if (posicionPar===0) {let valor = reverseAarrayNumber[i];
                            let valor2 = valor * 2;
                            reverseAarrayNumber = valor2}
                        
                        else {reverseAarrayNumber[i]*2 ;}
        
console.log(reverseAarrayNumber)

//if(posicionPar ===0) { //Si el valor del residuo es igual a 0 es par 
    //let valor = reverseAarrayNumber[i] // se guarda el valor de los numeros ivertidos en suposicion par
    //let multiplicacion = valor * 2; // el valor se multiplica psor 2 

    //console.log(valor)

//if (multiplicacion >=9){//si el valor de la multiplicacion es mayor a 10 se suma los 2 numeros pero s edeben romper
    //let valor2 = multiplicacion - 9;
}

//else {
    //let valor3 = multiplicacion; 
   // console.log();
}

}


//} //Si la condicion dice que la posicion par es igual a 0 es par    
//}


//Obtener los valores de los numeros en las posiciones pares 
// tener toda la logica del algoritmo
export default validator;