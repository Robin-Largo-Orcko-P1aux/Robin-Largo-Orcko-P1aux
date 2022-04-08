
//////////// ejercicio 1 //////////////////

let edad = prompt("Introduce tu edad");
if (Number(edad) == edad) {	
	if (edad > 18) {
		console.log("puedes conducir")
	}else{{
        console.log("no puedes conducir")
    }}
}
else {
    alert("Introduce un numero válido");
}



//////////// ejercicio 2 ///////////////


let suma = 0;
let numero;
do {
    numero = prompt("ingrese un numero");
    if(Number(numero) == numero){
        numero = Number(numero);
        suma = suma + numero;
    }else{
        if(numero != undefined){
            alert("error introdusca un numero valido");
        }
    }

} 
while (numero != undefined);
console.log(suma);

/////////////// ejercicio 3 //////////////////

let nombre1 = prompt("Nombre 1:");
let edad1 = Number(prompt("Edad 1:"));

let nombre2 = prompt("Nombre 2:");
let edad2 = Number(prompt("Edad 2:"));

let nombre3 = prompt("Nombre 3:");
let edad3 = Number(prompt("Edad 3:"));

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    console.log("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    console.log("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    console.log("El mayor es: " + nombre3);
}



///////// ejercicio 4 ////////////

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num;
for(let i = 0 ; i <= 3 ; i++){
    num = Math.floor((Math.random() * 99) + 1);
    if((num != num1) && (num != num2) && (num != num3)){

    if(i == 1){
        console.log("el primero numero random es :" +num);
        num1 = num;
    }
    if(i == 2){
        console.log("el segundo numero random es :" +num);
        num2 = num;
    }
    if(i == 3){
        console.log("el tercer numero random es :"  +num);
        num3 = num;
    }
   }
}



///////// ejercicio 5 //////////////////////////

let cadena = prompt("Introduce una cadena de texto:");
const numchar = cadena.length;    //Devuelve la longitud del string.
cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
let caracter;
let CantidadVocales = 0;

for (let i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    //recupera el caracter i del string.
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        CantidadVocales++;
    }
}
console.log("Número de Vocales: " + CantidadVocales + ".");



////////// ejercicio 6 ///////////////


let cadena = prompt("Introduce un Texto que contenga paréntesis:");

const numchar = cadena.length;
let j;
let car;
let salida = "";
let copiar = false;
    
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);    
    if (car == ")") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
            copiar = true;
    }
}
console.log(salida);



//////// ejercicio 7 ///////////////////

var cadena = prompt("Introduce un Texto:");
    const numchar = cadena.length;
    let j;
    let car;
    let salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);    
        salida = car + salida;
    }
    console.log(salida);


///// ejercicio 8 //////////////////////

var numero = Number(prompt("Introduce un número entre 1 y 100"));

    if((numero >= 1) && (numero <= 100)) {
        let x = 0;
        let y = 1;
        let z;
        document.write(x);   
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            console.log(z);
            y = x;
            x = z;
        }
    }
    else {
        alert("Introduce un numero en el rango de 1 a 100");
    }
    

    //////// ejercicio 9 ///////////

    let jugados = 0;
    let ganados = 0;
    let perdidos = 0;
    do {
        let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        let aleatorio = Math.floor((Math.random() * 9) + 1);
        let elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    console.log("Partidas jugadas: "+jugados);
    console.log("Partidas ganadas: "+ganados);
    console.log("Partidas perdidas: "+perdidos);
    console.log("Partidas empatadas: "+(jugados-ganados-perdidos));
    

////////// ejercicio 10 /////////

let resultado;
function masIva(precio, iva){
    iva = iva || 21
    let coniva = (precio + precio*iva/100);
    return coniva;
  }
  let precio = Number(prompt("Introduce un precio"));
  let iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    resultado = masIva(precio, iva);
  }
  else{
    resultado = masIva(precio);
  }
  console.log("Precio sin iva: " + precio);
  console.log("Precio con Iva: " + resultado);


/////// ejercicio 11 //////////

function Validar(){

    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    let val = 0;

    if(nombre == ""){
        val++;
    }
    if(edad == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
}
document.getElementById("nombre").addEventListener("keyup", Validar);
document.getElementById("edad").addEventListener("keyup", Validar);


///////// ejercicio 12 /////////////

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}


//////// ejercicio 13 //////

// Ejercicio 1279: Definir una función para calcular la edad a partir de una fecha específica.

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}



///////////// ejercico 14 /////////////////

const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};

let text = prompt("ingrese un texto");
vocales = contarVocales(text);
console.log("cantidad de vocales ="+vocales);



///////// ejercicios 15 ////////////

function val(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}




/////// ejercicio 16 ///////

function EliminarDuplicado(value, index, self) { 
    return self.indexOf(value) === index;
}

 const arreglo =[5,25, 10,'s',5,'a','a'];
 let unicos = arreglo.filter(EliminarDuplicado);
 console.log("elementos unicos :"+unicos);

 

 /////// ejercicio 17//////

    const SepararParesImpares = (numeros = undefined) => {
        if (numeros === undefined)
          return console.log("Debes Ingresar un array de numeros");
      
        if (numeros.length === 0) return console.log("El array ingresado está Vacio");
      
        if (!(numeros instanceof Array))
          return console.log(`El valor ${numeros} no es un Array de Numeros`);
      
        numeros = numeros.filter((numero) => typeof numero === "number");
      
        let pares = [],
          impares = [];
      
        for (let i = 0; i < numeros.length; i++) {
          numeros[i] % 2 === 0
            ? pares.push(numeros[i])
            : impares.push(numeros[i]);
        }
      
        return console.log({
          pares,
          impares,
        });
      };

      SepararParesImpares([1,2,3,4,5,6,7,8,9]);



//////// ajercicio 18 ///