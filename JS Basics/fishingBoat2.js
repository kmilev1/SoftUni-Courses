function fishing2(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let springRent = 3000;
    let summerRent = 4200;
    let autumnRent = 4200;
    let winterRent = 2600;

    if (fishermen % 2 == 0) {
        switch (season) {
            case "Spring":
                if (fishermen <= 6) {
                    springRent *= .85;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    springRent *= .8;
                }
                else if (fishermen >= 12) {
                    springRent *= .7;
                }
            break;
            case "Summer":
                if (fishermen <= 6) {
                    summerRent *= .85;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    summerRent *= .8;
                }
                else if (fishermen >= 12) {
                    summerRent *= .7;
                }
            break;
            case "Autumn":
                if (fishermen <= 6) {
                    autumnRent *= .9;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    autumnRent *= .85;
                }
                else if (fishermen >= 12) {
                    autumnRent *= .75;
                }
            break;
            case "Winter":
                if (fishermen <= 6) {
                    winterRent *= .85;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    winterRent *= .8;
                }
                else if (fishermen >= 12) {
                    winterRent *= .7;
                }
            break;
        }
    }
    else if (fishermen % 2 == 1) {
        switch (season) {
            case "Spring":
                if (fishermen <= 6) {
                    springRent *= .9;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    springRent *= .85;
                }
                else if (fishermen >= 12) {
                    springRent *= .75;
                }
            break;
            case "Summer":
                if (fishermen <= 6) {
                    summerRent *= .9;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    summerRent *= .85;
                }
                else if (fishermen >= 12) {
                    summerRent *= .75;
                }
            break;
            case "Autumn":
                if (fishermen <= 6) {
                    autumnRent *= .9;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    autumnRent *= .85;
                }
                else if (fishermen >= 12) {
                    autumnRent *= .75;
                }
            break;
            case "Winter":
                if (fishermen <= 6) {
                    winterRent *= .9;
                }
                else if (fishermen >= 7 && fishermen <= 11) {
                    winterRent *= .85;
                }
                else if (fishermen >= 12) {
                    winterRent *= .75;
                }
            break;
        }
    }

    if (budget >= springRent && season == "Spring") {
        console.log(`Yes! You have ${(budget - springRent).toFixed(2)} leva left.`);
    }
    else if (budget >= summerRent && season == "Summer") {
        console.log(`Yes! You have ${(budget - summerRent).toFixed(2)} leva left.`);
    }
    else if (budget >= autumnRent && season == "Autumn") {
        console.log(`Yes! You have ${(budget - autumnRent).toFixed(2)} leva left.`);
    }
    else if (budget >= winterRent && season == "Winter") {
        console.log(`Yes! You have ${(budget - winterRent).toFixed(2)} leva left.`);
    }
    if (budget < springRent && season == "Spring") {
        console.log(`Not enough money! You need ${(springRent - budget).toFixed(2)} leva.`);
    }
    else if (budget < summerRent && season == "Summer") {
        console.log(`Not enough money! You need ${(summerRent - budget).toFixed(2)} leva.`);
    }
    else if (budget < autumnRent && season == "Autumn") {
        console.log(`Not enough money! You need ${(autumnRent - budget).toFixed(2)} leva.`);
    }
    else if (budget < winterRent && season == "Winter") {
        console.log(`Not enough money! You need ${(winterRent - budget).toFixed(2)} leva.`);
    }

}

fishing2(["3000",
"Summer",
"11"])
fishing2(["3600",
"Autumn",
"6"])
fishing2(["2000",
"Winter",
"13"])

fishing2(["3600",
"Autumn",
"3"])