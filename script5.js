//Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir generando presupuestos para cada cliente.//

let ancho=prompt("Ingrese el ancho del espacio a trabajar")
let largo=prompt("Ingrese el largo del espacio a trabajar")
let m2=prompt("Ingrese el número de metros cuadrados que se van a trabajar")
let metro2= (ancho*largo)


console.log("El valor del metro2 es de: " + "$" + metro2 )
console.log("El valor de su trabajo es de: " + "$" + (parseInt(metro2) * parseInt(m2)))
