//Realiza un algoritmo para determinar cuánto pagará finalmente una persona por un artículo, considerando que tiene un descuento de 20%, y debe pagar 15% de IVA//
let Article=prompt("Ingrese el valor del artículo a comprar");
let discount=Number(Article-(Article*0,20));
console.log("El precio del descuento es: " + "$" + discount);
let pricefinal=discount + Number(discount*0,15);
console.log("El precio final del artículo es: " + "$" + pricefinal)