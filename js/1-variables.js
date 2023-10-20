//para los comentarios de una unica linea
/*Esto es un comentario
de varias lineas*/

/*declarar una variable (var - let - const) var actualmente no se la utiliza
- let: puedo cambiar el valor  
- const: no permite canviar el valor 
        = operador de asignacion, */
let anioActual = 2023
const url = "https://universe.rollingcodeschool.com/live/videos/64b5c70978c18f053461e4b5"

//mostrar mensajes
/*consol log  */
console.log('Este es un mendaje de consola');
console.log(anioActual);
console.log(url);
console.log('Año: '+(anioActual+2));

//modificar el contenido de una variable
anioActual=2024;
console.log(anioActual);

//url='otro valor'; no se puede hacer porq declare como variable constante
console.log(url);

//para que js identifique las etiquetas de HTML
document.write('<h1>Esto es un mensaje por pantalla</h1>')
document.write('año: '+ anioActual + '<br>');
document.write('Año: '+anioActual);

//ventanas emergentes
alert('Esto es una prueba de alerta');

//si quiero pedirle algo al us uso un prompt
let color = prompt('Ingrese un color');
console.log(color); //para verificar que el us ingrese loq le pido

//solicitar al us un nemro, y al nuemro indicado por elus multiplicarle 15
let numeroSeleccionado=prompt("Ingrese una numero de 1 a 100");
console.log(numeroSeleccionado);
console.log(numeroSeleccionado + 15);

//parseInt('10') devuelve 10
//parseFloat ('10.5')