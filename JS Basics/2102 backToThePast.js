function backToThePast(input) {
    let money = Number(input[0]);
    let year = Number(input[1]);
    let spentMoney = 0;
    
    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            spentMoney += 12000;
        }
        else {
            let lifetime = i - 1800;
            spentMoney += 12000 + 50 * (18 + lifetime)
        }
    }

    let diff = Math.abs(money - spentMoney);
    if (money >= spentMoney) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    }
    else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
    
backToThePast(["50000", "1802"])
backToThePast(["100000.15", "1808"])