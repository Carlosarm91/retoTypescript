import { Roles } from "../roles.enum";
import { Usuario } from "../usuario.interface";
import * as readline from 'readline';

export function obtenerUsuariosActuales(): Promise<Usuario[]> {
    return new Promise((res) => {
        setTimeout(() => {
            const usuarios = [
                { nombre: "nombre1", nickname: "nickname1", email: "usuario1@mail.com", clave: "clave1", rol: "USUARIO" },
                { nombre: "nombre2", nickname: "nickname2", email: "usuario2@mail.com", clave: "clave2", rol: "ADMIN" }
            ];
            res(usuarios);
        }, 1000);
    });
}

export function guardarUsuario(usuarios: Usuario[]): void {
    console.log("Usuarios guardados ", usuarios)
}

function pedirDatosPorConsola(pregunta: string): Promise<string> {
    return new Promise((res) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            rl.close();
            res(respuesta);
        });
    });
}

export async function datosNuevoUsuario(): Promise<Usuario> {
    const nombre = await pedirDatosPorConsola('Ingrese nombre: ');
    const nickname = await pedirDatosPorConsola('Ingrese nickname: ');
    const email = await pedirDatosPorConsola('Ingrese email: ');
    const clave = await pedirDatosPorConsola('Ingrese clave: ');
    let rol = await pedirDatosPorConsola('Ingrese rol: ');
    if (rol.toUpperCase() =='USUARIO') {
        rol = Roles.Usuario;
    } else if(rol.toUpperCase() =='ADMIN'){
        rol = Roles.Admin;
    }
    const datosNuevoUsuario = { nombre: nombre, nickname: nickname, email: email, clave: clave, rol: rol };
    return datosNuevoUsuario;
}