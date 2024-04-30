import { datosNuevoUsuario } from "./functions/functions";
import { registerUser } from "./registroNuevoUsuario";


datosNuevoUsuario().
then(nuevoUsuario => {
    registerUser(nuevoUsuario)
    .then((msj)=>console.log(msj))
    .catch((error)=>console.log("error: ", error));
}).catch(error => {
    console.error("Error al obtener los datos del usuario:", error);
});