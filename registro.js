const nombre = prompt("Ingrese su nombre completo:");
const email = prompt("Ingrese su correo electrónico:");
const contraseña = prompt("Ingrese su contraseña:");

if (nombre === "" || nombre === null) {
    console.log("Error: El campo 'nombre' no puede estar vacío");
} else if (email === "" || email === null) {
    console.log("Error: El campo 'correo electrónico' no puede estar vacío");
} else if (contraseña === "" || contraseña === null) {
    console.log("Error: El campo 'contraseña' no puede estar vacío");
} else if (contraseña.length < 8) {
    console.log("Error: La contraseña debe tener al menos 8 caracteres");
} else {
    console.log(`Registro exitoso. ¡Bienvenido, ${nombre}!`);
}
