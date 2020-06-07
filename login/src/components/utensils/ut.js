
var utensil_info = [
    {
        "number": 1,
        "name": "Oven",
        "checked": false
    },
    {
        "number": 2,
        "name": "MicroWave",
        "checked": false
    },
    {
        "number": 3,
        "name": "Air fryer",
        "checked": false
    },
    {
        "number": 4,
        "name": "Stove",
        "checked": false
    },
    {
        "number": 5,
        "name": "knive",
        "checked": false
    },
    {
        "number": 6,
        "name": "Blender",
        "checked": false
    },
    {
        "number": 7,
        "name": "Measuring spoon",
        "checked": false
    },
    {
        "number": 8,
        "name": "Whisk",
        "checked": false
    },
    {
        "number": 9,
        "name": "Grill pan",
        "checked": false
    },
    {
        "number": 10,
        "name": "Sauce pan",
        "checked": false
    },
    {
        "number": 11,
        "name": "Frying pan",
        "checked": false
    },
    {
        "number": 12,
        "name": "Cooking pot",
        "checked": false
    }
]

export function utName(num){
    for(var i = 0; i < utensil_info.length; i++){
        if(num == i){
            return utensil_info[i].name;
        }
    }
}

export function utImg(num){
    var img_src
    for(var i = 0; i < utensil_info.length; i++){
        if(num == i){
            img_src = '/images/ut' + (i + 1) + '.png';
        }
    }
    return img_src;
}

export function utCheck(num){
    for(var i = 0; i < utensil_info.length; i++){
        if(num == i){
            utensil_info[i].checked = !utensil_info[i].checked;
            return utensil_info[i].checked;
        }
    }    
}

export function utGetCheck(num){
    for(var i = 0; i < utensil_info.length; i++){
        if(num == i){
            console.log(utensil_info[i].checked);
            return utensil_info[i].checked;
        }
    }    
}