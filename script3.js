//Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar este problema.//

let num1=prompt("Ingrese el año de nacimiento")
let num2=prompt("Ingrese el año actual")

console.log("La edad de la persona es: " + (parseInt(num2) - parseInt(num1)) + " " + "años")
