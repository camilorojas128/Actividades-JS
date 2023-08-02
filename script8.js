//Realiza un algoritmo para determinar cuánto dinero ahorra una persona en un año si considera que cada semana ahorra 15% de su sueldo (considera cuatro semanas por mes y que no cambia el sueldo).//

let salary=prompt("Ingresa el salario del usuario")
let weeks= 48
let saving= (0.15)
let savingyear=(salary*saving)

console.log("El ahorro semanal del usuario es de: " + "$" + (parseInt(salary)*parseFloat(saving)) )
console.log("El ahorro anual del usuario es de: " + "$" + (parseFloat(savingyear)*parseInt(weeks)))