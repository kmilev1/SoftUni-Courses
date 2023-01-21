function trekkingMania(input) {
    let groups = Number(input[0]);
    let sum = 0;

    let climbingMussala = 0;
    let climbingMonblan = 0;
    let climbingKilimandzharo = 0;
    let climbingK2 = 0;
    let climbingEverest = 0;

    let mussalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    for (let i = 1; i <= groups; i++) {
        let countOfPeople = Number(input[i]);
        sum = sum + countOfPeople;

        if (countOfPeople <= 5) {
            mussalaClimbers += countOfPeople;
        }
        else if (countOfPeople <= 12) {
            monblanClimbers += countOfPeople;
        }
        else if (countOfPeople <= 25) {
            kilimClimbers += countOfPeople;
        }
        else if (countOfPeople <= 40) {
            k2Climbers += countOfPeople;
        }
        else if (countOfPeople >= 41) {
            everestClimbers += countOfPeople;
        }
    }
    climbingMussala = mussalaClimbers / sum * 100;
    climbingMonblan = monblanClimbers / sum * 100;
    climbingKilimandzharo = kilimClimbers / sum * 100;
    climbingK2 = k2Climbers / sum * 100;
    climbingEverest = everestClimbers / sum * 100;
    
    console.log(climbingMussala.toFixed(2) + "%")
    console.log(climbingMonblan.toFixed(2) + "%")
    console.log(climbingKilimandzharo.toFixed(2) + "%")
    console.log(climbingK2.toFixed(2) + "%")
    console.log(climbingEverest.toFixed(2) + "%")
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])


