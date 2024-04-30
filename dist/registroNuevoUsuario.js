"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const functions_1 = require("./functions/functions");
function registerUser(usuario) {
    return new Promise((res, req) => {
        setTimeout(() => {
            (0, functions_1.obtenerUsuariosActuales)().then((usuariosRegistrados) => {
                const usuarioExistente = usuariosRegistrados.find(u => u.nickname === usuario.nickname);
                if (usuarioExistente) {
                    req("El usuario ya esta registrado");
                }
                else {
                    usuariosRegistrados.push(usuario);
                    (0, functions_1.guardarUsuario)(usuariosRegistrados);
                    res("Usuario guardado correctamente");
                }
            }).catch((error) => {
                console.error('Error al obtener usuarios:', error);
            });
        }, 5000);
    });
}
exports.registerUser = registerUser;
