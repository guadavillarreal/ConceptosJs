//para los comentarios de una unica linea
/*Esto es un comentario
de varias lineas*/

/*declarar una variable (var - let - const) var actualmente no se la utiliza
- let: puedo cambiar el valor , tienen que empezar con la primera letra minuscula 
- const: no permite cambiar el valor 
        = operador de asignacion, */
let anioActual = 2023;
const url =
  "https://universe.rollingcodeschool.com/live/videos/64b5c70978c18f053461e4b5";

//en los txt debo usar comillas simples o dobles no el txto suelto! lo reconoce como error
/*para mostrar msj por consola utilizo un consol log  */
console.log("Este es un mendaje de consol");
console.log(anioActual);
console.log(url);
console.log("Año: " + (anioActual + 2));

//modificar el contenido de una variable
console.log(anioActual);//hasta este renglon mantiene el valor anterior
anioActual = 2024;//apartir de esta linea lo actualiza al valor que lo modifique
console.log(anioActual);

//url='otro valor'; no se puede hacer porq declare como variable constante
console.log(url);

//para que js escriba algo que yo desees lo hago atravez de document.write
//para que js identifique las etiquetas de HTML
//document.write para que escriba por pantalla
document.write("<h1>Esto es un mensaje por pantalla</h1>");
//concatenamos un txt mas una variable
document.write("año: " + anioActual + "<br>");
document.write("Año: " + anioActual);

//ventanas emergentes
alert("Esto es una prueba de alerta");

//si quiero pedirle algo al us uso un prompt
let color = prompt("Ingrese un color");
console.log(color); //para verificar que el us ingrese loq le pido

//inicializo una variable y con el promt le indico al us que tiene que ingresar
// con parseInt(''); dentro del pront ya cambia automaticamente lo que ingresa el us por un numero entero- transforma el string a num entero
let numeroSeleccionado = parseInt(prompt("Ingrese una número de 1 a 100"));
//muestro el numero seleccionado por el us por consola 
console.log(numeroSeleccionado);
//solicitar al us un nemro, y al nuemro indicado por el us multiplicarle 15
console.log(numeroSeleccionado + 15);
/*en este caso la consola interpreta por string lo ingresado por el
us, porlo que se lo tiene que transformar a un numero*/
// con parseInt('10') devuelve 10 - transforma el string a num entero
//asi tambien con- parseFloat ('10.5')
