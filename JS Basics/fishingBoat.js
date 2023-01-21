function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let springPrice = 3000;
    let summerPrice = 4200;
    let autumnPrice = 4200;
    let winterprice = 2600;

    if (fishermen % 2 == 0 && season !== "Autumn") {
        if (fishermen <= 6) {
            springPrice *= .85;
            summerPrice *= .85;
            winterprice *= .85;
        }
        else if (fishermen >= 7 && fishermen <= 11) {
            springPrice *= .8;
            summerPrice *= .8;
            winterprice *= .8;
        }
        else if (fishermen >= 12) {
            springPrice *= .7;
            summerPrice *= .7;
            winterprice *= .7;
        }
    }
    else if (fishermen % 2 == 0 && season == "Autumn") {
        if (fishermen <= 6) {
            autumnPrice *= .9;
        }
        else if (fishermen >= 7 && fishermen <= 11) {
            autumnPrice *= .85;
        }
        else if (fishermen >= 12) {
            autumnPrice *= .75;
        }
    }
    if (fishermen % 2 == 1) {
        if (fishermen <= 6) {
            springPrice *= .9;
            summerPrice *= .9;
            autumnPrice *= .9;
            winterprice *= .9;
        }
        else if (fishermen >= 7 && fishermen <= 11) {
            springPrice *= .85;
            summerPrice *= .85;
            autumnPrice *= .85;
            winterprice *= .85;
        }
        else if (fishermen >= 12) {
            springPrice *= .75;
            summerPrice *= .75;
            autumnPrice *= .75;
            winterprice *= .75;
        }
    }

    if (budget >= springPrice && season == "Spring") {
        console.log(`Yes! You have ${(budget - springPrice).toFixed(2)} leva left.`);
    }
    else if (budget >= summerPrice && season == "Summer") {
        console.log(`Yes! You have ${(budget - summerPrice).toFixed(2)} leva left.`);
    }
    else if (budget >= autumnPrice && season == "Autumn") {
        console.log(`Yes! You have ${(budget - autumnPrice).toFixed(2)} leva left.`);
    }
    else if (budget >= winterprice && season == "Winter") {
        console.log(`Yes! You have ${(budget - winterprice).toFixed(2)} leva left.`);
    }
    if (budget < springPrice && season == "Spring") {
        console.log(`Not enough money! You need ${(springPrice - budget).toFixed(2)} leva.`);
    }
    else if (budget < summerPrice && season == "Summer") {
        console.log(`Not enough money! You need ${(summerPrice - budget).toFixed(2)} leva.`);
    }
    else if (budget < autumnPrice && season == "Autumn") {
        console.log(`Not enough money! You need ${(autumnPrice - budget).toFixed(2)} leva.`);
    }
    else if (budget < winterprice && season == "Winter") {
        console.log(`Not enough money! You need ${(winterprice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
"Summer",
"11"])
fishingBoat(["3600",
"Autumn",
"6"])
fishingBoat(["2000",
"Winter",
"13"])

fishingBoat(["3600",
"Autumn",
"3"])