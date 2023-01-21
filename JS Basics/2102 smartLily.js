function smartLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toys = 0;
    let birthdayCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            birthdayCounter++;
            money += 10 * birthdayCounter;
            money--;
        }
        if (i % 2 === 1) {
            toys++;
            toysRevenue = toyPrice * toys;
        }
    }
    let diff = Math.abs((money + toysRevenue) - washingMachine);
    if ((money + toysRevenue) >= washingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    }
    else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}

smartLily(["21",
"1570.98",
"3"])

