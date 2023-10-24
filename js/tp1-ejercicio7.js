//7- Escriba un programa que pida 3 numeros y escriba en la pantalla el mayor de los 3

const numero1 = parseInt(prompt("Ingrese un primer número"));
const numero2 = parseInt(prompt("Ingrese un segundo número"));
const numero3 = parseInt(prompt("Ingrese un tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write(
    `El número 1  ( ${numero1} ) es mayor que el número 2 ( ${numero2} ) y 3 ( ${numero3} )`
  );
} else {
  if (numero3 > numero2) {
    document.write(
      `El número 3  ( ${numero3} ) es mayor que el número 2 ( ${numero2} ) y 1 ( ${numero1} )`
    );
  } else if (numero2 > numero3) {
    document.write(
      `El número 2 ( ${numero2} ) es mayor que el número 3 (${numero3}) y 1 (${numero1})`
    );
  } else {
    document.write(`Los números ingresados son iguales (${numero2})`);
  }
}// corregir el ejercicio para entradas como 20 - 20 - 6
