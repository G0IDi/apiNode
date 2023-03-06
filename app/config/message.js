import colors from "colors";

const message = (mensaje,tipo)=>{
    switch(tipo){
        case `danger`:
            console.log(mensaje.bgRed);
            break;
        case `warning`:
            console.log(mensaje.bgYellow);
            break;
        case `succes`:
            console.log(mensaje.bgGreen);
            break;

        default:
            console.log(mensaje.bgWhite);
            break;
    }
}

module.exports = message;