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
