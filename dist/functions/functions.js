"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosNuevoUsuario = exports.guardarUsuario = exports.obtenerUsuariosActuales = void 0;
const roles_enum_1 = require("../roles.enum");
const readline = __importStar(require("readline"));
function obtenerUsuariosActuales() {
    return new Promise((res, req) => {
        setTimeout(() => {
            const usuarios = [
                { nombre: "nombre1", nickname: "nickname1", email: "usuario1@mail.com", clave: "clave1", rol: "USUARIO" },
                { nombre: "nombre2", nickname: "nickname2", email: "usuario2@mail.com", clave: "clave2", rol: "ADMIN" }
            ];
            res(usuarios);
        }, 1000);
    });
}
exports.obtenerUsuariosActuales = obtenerUsuariosActuales;
function guardarUsuario(usuarios) {
    console.log("Usuarios guardados ", usuarios);
}
exports.guardarUsuario = guardarUsuario;
function pedirDatosPorConsola(pregunta) {
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
function datosNuevoUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const nombre = yield pedirDatosPorConsola('Ingrese nombre: ');
        const nickname = yield pedirDatosPorConsola('Ingrese nickname: ');
        const email = yield pedirDatosPorConsola('Ingrese email: ');
        const clave = yield pedirDatosPorConsola('Ingrese clave: ');
        let rol = yield pedirDatosPorConsola('Ingrese rol: ');
        if (rol.toUpperCase() == 'USUARIO') {
            rol = roles_enum_1.Roles.Usuario;
        }
        else if (rol.toUpperCase() == 'ADMIN') {
            rol = roles_enum_1.Roles.Admin;
        }
        const datosNuevoUsuario = { nombre: nombre, nickname: nickname, email: email, clave: clave, rol: rol };
        return datosNuevoUsuario;
    });
}
exports.datosNuevoUsuario = datosNuevoUsuario;
