function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas){
    var pizza ={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = pizzaOven("Estilo Chicago", "Tradicional", ["mozarella"],["pepperoni","salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("lanzada a mano" , "Tradicional",["Morzarella", "feta",], ["chorizo", "champiñones", "salsa de ajo"]);
console.log(pizza3);

var pizza4 = pizzaOven("lanzada a mano" , "Tradicional" , ["cheddar", "feta"], ["tomate", "aceitunas", "carne"]);
console.log(pizza4);