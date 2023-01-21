function fishing3(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let springRent = 3000;
    let summerRent = 4200;
    let autumnRent = 4200;
    let winterRent = 2600;

    if (fishermen <= 6) {
        springRent *= .9;
        summerRent *= .9;
        autumnRent *= .9;
        winterRent *= .9;
    }
    else if (fishermen >= 7 && fishermen <= 11) {
        springRent *= .85;
        summerRent *= .85;
        autumnRent *= .85;
        winterRent *= .85;
    }
    else if (fishermen >= 12) {
        springRent *= .75;
        summerRent *= .75;
        autumnRent *= .75;
        winterRent *= .75;
    }

    if (fishermen % 2 == 0 ) {
        springRent *= 0.95;
        summerRent *= 0.95;
        autumnRent *= 1;
        winterRent *= 0.95;
    }
    else {
        springRent *= 1;
        summerRent *= 1;
        autumnRent *= 1;
        winterRent *= 1;
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

fishing3(["3000",
"Summer",
"11"])
fishing3(["3600",
"Autumn",
"6"])
fishing3(["2000",
"Winter",
"13"])

fishing3(["3600",
"Autumn",
"3"])