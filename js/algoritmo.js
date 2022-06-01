// DESAFIO 1 - COMPLEMENTARIO


let nombreUsuario = prompt("Ingresa tu nombre de usuario");

if (nombreUsuario != "") {
    alert("Hola " + nombreUsuario);
} else {
    alert("No ingresaste el nombre de usuario, por favor, ingresar de nuevo");
    nombreUsuario = prompt("Ingresa tu nombre de usuario");
}

let costoTotal = 5000;
let costoFinal = 0;
for (let i = 1; i <= 3; i++) {
    let producto = prompt(nombreUsuario + " ingresa el nombre del producto N° " + i);
    alert ("producto " + producto + " agregado al carrito"); 
} 
    alert ("El subtotal de tu carrito es de $" + costoTotal); 
    costoFinal = costoTotal * 1.21;
    alert("El total de tu compra + IVA es de $" + costoFinal);
    alert("Si desea continuar con la compra, haga click en aceptar");