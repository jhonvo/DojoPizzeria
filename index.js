function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("This is Pizza 1:", pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log("This is Pizza 2:", pizza2);

var pizza3 = pizzaOven("thin", "traditional", ["feta", "goat"], ["mushrooms", "olives", "onions"])
console.log("This is Pizza 3:", pizza3);

var pizza4 = pizzaOven("thick", "traditional", ["goat"], ["olives", "tomatoes", "onions"])
console.log("This is Pizza 4:", pizza4);

