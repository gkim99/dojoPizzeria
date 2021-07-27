function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2)

var p3 = pizzaOven("thin crust", "marinara", ["mozzarella", "cheddar"], ["mushrooms", "bacon", "diced tomatoes"]);
console.log(p3)

var p4 = pizzaOven("hand tossed", "alfredo", ["mozzarella", "pepper jack"], ["ham", "pineapple", "mushrooms"]);
console.log(p4)

var crustType = [
    "thin crust",
    "hand tossed",
    "deep dish",
    "gluten free"
];

var sauceType = [
    "marinara",
    "traditional",
    "alfredo",
    "buffalo",
    "bbq"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "pepper jack",
    "parmesan",
    "vegan"
];

var toppings = [
    "mushrooms",
    "pepperoni",
    "sausage",
    "bacon",
    "onions",
    "ham",
    "pineapple",
    "diced tomatoes"
];

function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza());