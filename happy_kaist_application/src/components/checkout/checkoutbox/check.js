var ingredient = [
    {
        name: "bun",
        num: 0,
        price: 0.33
    },
    {
        name: "groundbeef",
        num: 0,
        price: 1.33
    },
    {
        name: "gochujang",
        num: 0,
        price: 3.00
    },
    {
        name: "carrot",
        num: 0,
        price: 0.40
    },
    {
        name: "beansprout",
        num: 0,
        price: 0.60
    },
    {
        name: "spinach",
        num: 0,
        price: 0.50
    },
    {
        name: "shiitake mushroom",
        num: 0,
        price: 0.70
    },
    {
        name: "sea salt",
        num: 0,
        price: 0.05
    },
    {
        name: "egg",
        num: 0,
        price: 0.20
    },
    {
        name: "sugar",
        num: 0,
        price: 0.01
    },
    {
        name: "soy sauce",
        num: 0,
        price: 0.00
    },
    {
        name: "garlic",
        num: 0,
        price: 0.70
    },
    {
        name: "sesame oil",
        num: 0,
        price: 0.05
    },
    {
        name: "seaweed",
        num: 0,
        price: 0.49
    },
    {
        name: "roasted sesame seed",
        num: 0,
        price: 0.79
    },
    {
        name: "avocado",
        num: 0,
        price: 1.20
    },
    {
        name: "tomato",
        num: 0,
        price: 0.60
    },
    {
        name: "bell peppers",
        num: 0,
        price: 0.70
    },
    {
        name: "lime",
        num: 0,
        price: 0.59
    },
    {
        name: "coriander",
        num: 0,
        price: 0.30
    },
    {
        name: "salt pepper",
        num: 0,
        price: 0.03
    },
    {
        name: "chia seeds",
        num: 0,
        price: 0.33
    },
    {
        name: "parsley",
        num: 0,
        price: 0.33
    },
    {
        name: "potato",
        num: 0,
        price: 399.99
    },
    {
        name: "butter",
        num: 0,
        price: 1.5
    },
    {
        name: "sour cream",
        num: 0,
        price: 0.42
    },
    {
        name: "green pea",
        num: 0,
        price: 0.40
    },
    {
        name: "canola oil",
        num: 0,
        price: 0.15
    },
    {
        name: "kimchi",
        num: 0,
        price: 399.99
    },
    {
        name: "pork belly",
        num: 0,
        price: 1.99
    },
    {
        name: "tofu",
        num: 0,
        price: 1.03
    },
    {
        name: "dried anchovies",
        num: 0,
        price: 2.25
    },
    {
        name: "onion",
        num: 0,
        price: 0.60
    },
    {
        name: "spring onion",
        num: 0,
        price: 0.45
    },
    {
        name: "dried kelp",
        num: 0,
        price: 0.89
    },
    {
        name: "bun",
        num: 0,
        price: 0.33
    },
    {
        name: "ham",
        num: 0,
        price: 2.25
    },
    {
        name: "lettuce",
        num: 0,
        price: 1
    },
    {
        name: "bacon",
        num: 0,
        price: 1.83
    },
    {
        name: "knive",
        num: 0,
        price: 5
    },
    {
        name: "frying pan",
        num: 0,
        price: 5
    },
    {
        name: "spatula",
        num: 0,
        price: 2
    },
    {
        name: "stove",
        num: 0,
        price: 6
    }
]

export function getIngredientCount(name){
    for(var i = 0; i < ingredient.length; i++){
        if(ingredient[i].name == name){
            return ingredient[i].num;
        }
    }
}

export function getIngredientPrice(name){
    for(var i = 0; i < ingredient.length; i++){
        if(ingredient[i].name == name){
            return ingredient[i].price.toFixed(2)+"\t \tx"+ingredient[i].num+"\t \t \t(total:\t$"+(ingredient[i].num  * ingredient[i].price).toFixed(2)+")";
        }
    }
}

export function setIngredientCount(name, count){
    for(var i = 0; i < ingredient.length; i++){
        if(ingredient[i].name == name){
            ingredient[i].num = count;
        }
    }
}

export function sum(){
    var sum = 0;
    for(var i = 0; i < ingredient.length; i++){
        sum += ingredient[i].num  * ingredient[i].price;
    }
    return sum.toPrecision(3);
}


