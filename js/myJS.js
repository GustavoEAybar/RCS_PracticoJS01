//EJERCIATION
//01-Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga "un mensaje"

alert("Un mensaje");

//02-Escribe un programa de una sola línea que escriba en la pantalla un texto que diga "Hello World" (document.write)

document.write("Hola Mundo!");

//03-Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5

document.write(3+5);

// 04-Escribe un programa de dos lineas que pida el nombre del usuario con un prompt y escriba un texto que diga "Hola nombreUsuario"

let nombreUsuario = prompt("Ingresa tu nombre de usuario");
document.write("Hola ", nombreUsuario);


// 05-Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let primerN = prompt("Ingresa el primer numero:");
let segundoN = prompt("Ingresa el segundo numero:");
document.write("La suma de los numeros es igual a: ",parseInt(primerN)+parseInt(segundoN));

// 06-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// let primerNu = prompt("Ingresa un numero otra vez:");
// let segundoNu = prompt("Ingresa otro numero otra vez:");
document.write("El mayor numero ingresado fue:", Math.max (parseInt(primerN), parseInt(segundoN)));

// 07-Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let primerNum = prompt("Ingresa un numero otra vez:");
// let segundoNum = prompt("Ingresa otro numero otra vez:");
let terserN = prompt("Ingresa el tercer numero:");
document.write("El mayor numero ingresado fue:", Math.max (parseInt(primerN), parseInt(segundoN), parseInt(terserN)));

// 08-Escribe un programa que pida un número y diga si es divisible por 2
if (primerN % 2 == 0) {
document.write("el primer numero es divisible por 2.");
} else {
    document.write("el primer numero no es divisible por 2.");
};

// 09-Escribe un programa que pida una frase y escriba las vocales que aparecen



// 10-Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

if (segundoN % 2 == 0){
    document.write("El segundo numero es divisible por 2");
}else if (segundoN % 3 == 0){
    document.write("El segundo numero es divisible por 3");
}else if (segundoN % 5 == 0){
    document.write("El segundo numero es divisible por 5");
}else if (segundoN % 7 == 0){
    document.write("El segundo numero es divisible por 7");
}

// 11-Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


