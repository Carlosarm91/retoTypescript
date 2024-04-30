import { guardarUsuario, obtenerUsuariosActuales } from "./functions/functions";
import { Usuario } from "./usuario.interface";

export function registerUser(usuario: Usuario): Promise<string> {

    return new Promise((res, req) => {
        setTimeout(() => {            
            obtenerUsuariosActuales().then((usuariosRegistrados: Usuario[]) => {
                const usuarioExistente = usuariosRegistrados.find(u => u.nickname === usuario.nickname);
                if (usuarioExistente) {
                    req("El usuario ya esta registrado");
                } else {
                    usuariosRegistrados.push(usuario);
                    guardarUsuario(usuariosRegistrados);
                    res("Usuario guardado correctamente");
                }
            }).catch((error) => {
                console.error('Error al obtener usuarios:', error);
            });
            
        }, 5000);
    });
}

