import { valida } from "./validaciones.js";

console.log("archivo js")

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur',(input)=>{
        valida(input.target);
    })
});