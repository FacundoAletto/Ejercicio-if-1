const USUARIO_NOMBRE_REGISTRADO_A = "pepe";
const USUARIO_CONTRASENIA_REGISTRADA_A = "asd123";
const USUARIO_NOMBRE_REGISTRADO_B = "pablo";
const USUARIO_CONTRASENIA_REGISTRADA_B = "1234.pablo";

let usuarioNombreIngresado = prompt("Ingrese nombre de usuario");
let usuarioContraseniaIngresada = prompt("Ingrese su contraseña");

if (((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_A) || (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_B)) && ((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA_A) || (usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA_B))) {
    document.write("Bienvenido a su cuenta")
}else{
    document.write("Usuario y contraseña incorrecta")
};