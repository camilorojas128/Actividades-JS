//Realiza el algoritmo para determinar el promedio que obtendrá un alumno, considerando que realiza tres exámenes, de los cuales el primero y el segundo tienen una ponderación de 25%, mientras que el tercero de 50%. //

let nota1=prompt("Ingrese la nota 1")
let nota2=prompt("Ingrese la nota 2")
let nota3=prompt("Ingrese la nota 3")

let valor1=Number(nota1*0,25)
let valor2=Number(nota2*0,25)
let valor3=Number(nota3*0,50)
let div=3


console.log("El promedio del alumno es: " + Number((valor1+valor2+valor3)/div))
