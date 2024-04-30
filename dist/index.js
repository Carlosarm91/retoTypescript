"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions/functions");
const registroNuevoUsuario_1 = require("./registroNuevoUsuario");
(0, functions_1.datosNuevoUsuario)().
    then(nuevoUsuario => {
    (0, registroNuevoUsuario_1.registerUser)(nuevoUsuario)
        .then((msj) => console.log(msj))
        .catch((error) => console.log("error: ", error));
}).catch(error => {
    console.error("Error al obtener los datos del usuario:", error);
});
