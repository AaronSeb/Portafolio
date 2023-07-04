//quiero saber el input seleccionado, para seleccionar el padre
export function valida (input){                                     //exportamos a apps
    const tipoDeInput = input.dataset.tipo                          //mediante la lista dataset selecciona el tipo
    console.log(input.parentElement)                                //imprime el padre contenedor div que va ser modificado

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")            //valida para quitar la clase al padre
        input.parentElement.querySelector(".input-message-error").innerHTML = "";   //valida para limpiar
    }else {
        input.parentElement.classList.add("input-container--invalid")               //agrega la clase al padre
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);     //imprime el mensaje de error, por tipo
    }
}


//quiero saber el tipo de error, creo el arreglo
const tipoDeError =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]



//quiero saber los mensajes de error que va tener, por eso creo un objeto

const mensajesDeErrores = {
    nombre : {
        valueMissing:`Este campo nombre no puede estar vacío`
    },

    email : {
        valueMissing:`Este campo email no puede estar vacío`,
        typeMismatch: `El correo no es válido, formato example@hotmail.com`
    },

    telefono: {
        valueMissing:`Este campo nombre no puede estar vacío`,
        patternMismatch: `debe ingresar como mínimo 9 números`
    },

    asunto : {
        valueMissing:`Este campo nombre no puede estar vacío`
    }
}


//para imprimir el tipo de mensaje de error

function mostrarMensajeDeError(tipoDeInput, input){                     //le paso parametro tipoDeInput, input
    let mensaje = ''
    tipoDeError.forEach(error=>{
        if(input.validity[error]){
            console.log(tipoDeInput,error)      
            console.log(input.validity[error])
            console.log(mensajesDeErrores[tipoDeInput][error])      
            mensaje = mensajesDeErrores[tipoDeInput][error]         //en la variable mensaje, le pongo los mensahes de errores y accedo a los objetos por [tipoDeInput] y [error]
        }
    })
    return mensaje;
}

