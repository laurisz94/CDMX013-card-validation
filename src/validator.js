const validator = {
  //isValid,
  maskify,

};

function maskify(creditCardNumber) {
  let maskfyString =  creditCardNumber.replace(/.(?=.{4})/g, '#');

  return maskifyString 
}




export default validator;


// tener toda la logica del algoritmo