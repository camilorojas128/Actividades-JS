//Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considera que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas, realiza el algoritmo que permita determinar el cobro.//

let tiempo=prompt("Ingrese el tiempo de uso del estacionamiento") 
let tarifahora=2000

console.log("El valor de la hora es de $2000, las fracciones de hora se toman como hora completa")
console.log("El valor de pago es de: " + "$" + (tiempo * parseInt(tarifahora)))
