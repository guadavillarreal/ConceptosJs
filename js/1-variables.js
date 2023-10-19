//para los comentarios
/*Esto es un comentario
de carias lineas
*/ 
//declarar una variable (var - let - const)
/*let: puedo canviar el valor  
const: no permite canviar el valor 
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

