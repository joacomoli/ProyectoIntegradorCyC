console.log("Estas bien conectado");


var verdurasyFrutas = ["tomate", "lechuga", "espinaca", "Manzana", "frutilla", "Banana"];
verdurasyFrutas[7] = "Durazno";

console.log(verdurasyFrutas[4]);
console.log(verdurasyFrutas);
var ultimoElemento = verdurasyFrutas[verdurasyFrutas.length-1];
console.log(ultimoElemento);
verdurasyFrutas.push("Kiwi");
console.log(verdurasyFrutas);
verdurasyFrutas.pop();
console.log("Borré el ultimo elemento");
console.log(verdurasyFrutas);

function suma (Parametro1,Parametro2){
    return console.log(Parametro1 + Parametro2);
};

suma(10,5);

suma(25,40);
// Hacer un programa que muestre la velocidad a medida que incrementa
// y cuando la velocidad llegue a 60 nos diga que superamos el límite de velocidad

/*
var velocidad = 0;
do {
    console.log(velocidad);
    velocidad++;
    if (velocidad > 60){
        console.log("Superaste el límite de velocidad");
    }
}while(velocidad < 100);

*/

function velocimetro (velocidad,limiteDeVelocidad){
    while (velocidad < 100){
        velocidad++;
        console.log("Tu Velocidad es "+ velocidad);
        if (velocidad > limiteDeVelocidad){
            console.log("Tu Velocidad es "+ velocidad);
            console.log("Superaste el limite de velocidad");
        }
    }
}
velocimetro(20,30);

//Hacer un programa que cuente hasta 20 y a medida
//que el programa cuenta que muestre los datos
//y que nos diga si el numero es par o impar

contador = 0;

while (contador < 20){
    contador++;
    esPar = contador%2;
    if ( esPar == 0){
        console.log("El numero "+contador+ "Es Par");
    }else{console.log("El numero "+contador+"Es Impar")};
};

