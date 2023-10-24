/* if(condicion logica){
    codigo a ejecutar si se cumple la condicion logica
}
*/
//7- Escriba un programa que pida 3 numeros y escriba en la pantalla el mayor de los 3
//7- Escriba un programa que pida 2 numeros y escriba en la pantalla el mayor de los 2

let numero1 = parseInt(prompt("Ingrese un primer número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));
let numero3 = parseInt(prompt("Ingrese un tercer número"));

if (numero1 > numero2) {
  console.log("El número " + numero1 + " es mayor que el número " + numero2);
} else {
  if (numero2 > numero1) {
    console.log("El número " + numero2 + " es mayor que el número " + numero1);
  } else {
    console.log("Los números ingresados son iguales ( " + numero2 + " )");
  }
}
//hacer ejer hasta condicionales
