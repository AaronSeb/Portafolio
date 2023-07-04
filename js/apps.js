import { valida } from "./validaciones.js";

console.log("archivo js")

const inputs = document.querySelectorAll('input');   //selecionar todos los inputs, el querySelectorAll, guarda a todos en arreglos
inputs.forEach(input => {
    input.addEventListener('blur',(input)=>{        //recorremos los inputs y por cada input dispara el evento 'blur', mediante array function le pasa el parametro input, 
        valida(input.target);                       //y lo pasa a un callback valida, que recibe como parametro ese input.target, para saber específicamente cual
    })
});