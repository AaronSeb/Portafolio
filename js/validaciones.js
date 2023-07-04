//quiero saber el input seleccionado, para seleccionar el padre
export function valida (input){
    const tipoDeInput = input.dataset.tipo
    console.log(input.parentElement)

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
}


//quiero saber el tipo de error
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

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ''
    tipoDeError.forEach(error=>{
        if(input.validity[error]){
            console.log(tipoDeInput,error)
            console.log(input.validity[error])
            console.log(mensajesDeErrores[tipoDeInput][error])
            mensaje = mensajesDeErrores[tipoDeInput][error]
        }
    })
    return mensaje;
}

