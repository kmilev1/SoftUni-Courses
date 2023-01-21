function ski(input) {
    let daysVac = Number(input[0]);
    let roomType = input[1];
    let opinion = input[2];
    let nightsCount = daysVac - 1;

    switch (roomType) {
        case "room for one person":
                price = 18 * nightsCount;
        break;
        case "apartment":
            if (nightsCount < 10) {
                price = 25 * nightsCount * .7;
            }
            else if (nightsCount >= 10 && nightsCount <= 15) {
                price = 25 * nightsCount * .65;
            }
            else if (nightsCount > 15) {
                price = 25 * nightsCount * .5;
            }
        break;
        case "president apartment": 
            if (nightsCount < 10) {
                price = 35 * nightsCount * .9;
            }
            else if (nightsCount >= 10 && nightsCount <= 15) {
                price = 35 * nightsCount * .85;
            }
            else if (nightsCount > 15) {
                price = 35 * nightsCount * .8;
            }
        break;
        }
        if (opinion == "positive") {
            price = price * 1.25;
        }
        else if (opinion == "negative") {
            price = price * .9;
        }
        console.log(price.toFixed(2))
}

ski(["10",
"apartment",
"positive"])

