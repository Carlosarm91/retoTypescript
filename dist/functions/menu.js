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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Definir las opciones del menú
const opciones = [
    { numero: 1, descripcion: "Ver perfil", accion: () => console.log("Mostrando perfil...") },
    { numero: 2, descripcion: "Configuración", accion: () => console.log("Abriendo configuración...") },
    { numero: 3, descripcion: "Salir", accion: () => {
            console.log("Saliendo...");
            process.exit();
        } }
];
// Mostrar el menú
function mostrarMenu() {
    console.log("Seleccione una opción:");
    opciones.forEach(opcion => {
        console.log(`${opcion.numero}. ${opcion.descripcion}`);
    });
}
// Leer la opción seleccionada por el usuario
function leerOpcion() {
    rl.question("Ingrese el número de opción: ", (opcion) => {
        const numeroOpcion = parseInt(opcion);
        const opcionSeleccionada = opciones.find(op => op.numero === numeroOpcion);
        if (!opcionSeleccionada) {
            console.log("Opción no válida");
        }
        else {
            opcionSeleccionada.accion(); // Ejecutar la acción asociada a la opción seleccionada
        }
        mostrarMenu(); // Mostrar el menú nuevamente
        leerOpcion(); // Leer la siguiente opción
    });
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
mostrarMenu(); // Mostrar el menú inicial
leerOpcion(); // Leer la primera opción
