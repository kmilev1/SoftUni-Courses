function smallShop(input) {
    let product = (input[0]);
    let city = (input[1]);
    let quantity = Number(input[2]);
    if (city == "Varna") {
        switch (product) {
            case "coffee": 
            console.log(quantity * .45);
            break;
            case "water": 
            console.log(quantity * .7);
            break;
            case "beer": 
            console.log(quantity * 1.1);
            break;
            case "sweets": 
            console.log(quantity * 1.35);
            break;
            case "peanuts": 
            console.log(quantity * 1.55);
            break;
        }
    }
    else if (city == "Sofia") {
        switch (product) {
            case "coffee": 
            console.log(quantity * .5);
            break;
            case "water": 
            console.log(quantity * .8);
            break;
            case "beer": 
            console.log(quantity * 1.2);
            break;
            case "sweets": 
            console.log(quantity * 1.45);
            break;
            case "peanuts": 
            console.log(quantity * 1.6);
            break;
        }
    }
    else if (city == "Plovdiv") {
        switch (product) {
            case "coffee": 
            console.log(quantity * .4);
            break;
            case "water": 
            console.log(quantity * .7);
            break;
            case "beer": 
            console.log(quantity * 1.15);
            break;
            case "sweets": 
            console.log(quantity * 1.3);
            break;
            case "peanuts": 
            console.log(quantity * 1.5);
            break;
        }
    }
}

smallShop(["sweets",
"Sofia",
"2.23"])




