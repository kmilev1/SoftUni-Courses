function logistics(input) {
    let nums = Number(input[0]);
    let bus = 200;
    let truck = 175;
    let train = 120;

    let price = 0;
    let sumPrice = 0;
    let sumWeight = 0;
    let avgPrice = 0;
    let cumulBus = 0;
    let cumulTruck = 0;
    let cumulTrain = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= nums; i++) {
        let indexToWeight = Number(input[i]);
        sumWeight = sumWeight + indexToWeight;

        if (indexToWeight <= 3) {
            price = bus * indexToWeight;
            cumulBus += indexToWeight;
        } else if (indexToWeight > 3 && indexToWeight <= 11) {
            price = truck * indexToWeight;
            cumulTruck += indexToWeight;
        } else if (indexToWeight > 11) {
            price = train * indexToWeight;
            cumulTrain += indexToWeight;
        }

        p1 = cumulBus / sumWeight * 100;
        p2 = cumulTruck / sumWeight * 100;
        p3 = cumulTrain / sumWeight * 100;
        sumPrice = sumPrice + price
        avgPrice = sumPrice / sumWeight;

    }
    console.log(avgPrice.toFixed(2))
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
}

logistics([4, 1, 5, 16, 3])