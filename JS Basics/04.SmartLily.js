function birthdayGirl(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let pricePerToy = Number(input[2]);
    
    let totalSavings = 0;
    let toysCount = 0;
    let money = 0;
    let moneyMultiplication = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            toysCount++;
        }
        else {
            money += moneyMultiplication;
            money--;
            moneyMultiplication += 10;
        }
    }
    
        totalSavings = money + pricePerToy * toysCount;

        if (totalSavings >= priceWashingMachine) {
            console.log(`Yes! ${(totalSavings - priceWashingMachine).toFixed(2)}`);
        }
        else {
            console.log(`No! ${(priceWashingMachine - totalSavings).toFixed(2)}`);
        }
} ////////////// ДА СЕ ПРЕРЕШИ !!!!!!

birthdayGirl(["21",
"573",
"3"])



