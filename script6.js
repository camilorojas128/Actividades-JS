//Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que: La hipotenusa al cuadrado es igual a la suma de los otros dos lados al cuadrado (H2 = A2 + B2)//

let Alt=prompt("Ingrese la altura del tríangulo rectángulo")
let Alt2=(Alt * Alt)

console.log("La altura al cuadrado es: " + (Alt * Alt) + "cm")

let Bas=prompt("Ingrese la base del tríangulo rectángulo")
let Bas2=(Bas * Bas)

console.log("La base al cuadrado es: " + (Bas * Bas) + "cm")

let hip2=(Bas2 + Alt2)


console.log("La hipotenusa del tríangulo rectángulo es: " + hip2 + "cm")