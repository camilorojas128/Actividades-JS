//Cheque

 let cant=prompt("Ingrese el número de días que viajara")
 let hotel= 30000
 let comida= 15000
 let varios= 20000

 console.log("El monto de hotel es de: " + "$" + Number(cant*hotel))
 console.log("El monto de comida es de: " + "$" + Number(cant*comida))
 console.log("El monto de gastos varios es de: " + "$" + Number(cant*varios))

 console .log("El monto total del cheque es de: " + "$" + Number((cant*hotel)+(cant*comida)+(cant*varios)))