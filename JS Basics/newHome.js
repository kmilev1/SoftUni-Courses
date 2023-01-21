function flowersAllAround (input) {
    let flowerType = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let roses = 5 * count;
    let daliya = 3.8 * count;
    let lale = 2.8 * count;
    let nartsis = 3 * count;
    let gladiola = 2.5 * count;

    switch (flowerType) {
        case "Roses": {
            if (count > 80) {
                roses *= .9;
            }
            else {
                roses *= 1;
            }
        }
        break;
        case "Dahlias": {
            if (count > 90) {
                daliya *= .85;
            }
            else {
                daliya *= 1;
            }
        }
        break;
        case "Tulips": {
            if (count > 80) {
                lale *= .85;
            }
            else {
                lale = lale;
            }
        }
        break;
        case "Narcissus": {
            if (count < 120) {
                nartsis *= 1.15;
            }
            else {
                nartsis = nartsis;
            }
        }
        break;
        case "Gladiolus": {
            if (count < 80) {
                gladiola *= 1.2;
            }
            else {
                gladiola = gladiola;
            }
        }
        break;
    }

    switch (flowerType) {
        case "Roses":
            if (budget >= roses) {
                console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - roses).toFixed(2)} leva left.`);
            }
            else {
                console.log(`Not enough money, you need ${Math.abs(budget - roses).toFixed(2)} leva more.`);
            }
        break;
        case "Dahlias":
            if (budget >= daliya) {
                console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - daliya).toFixed(2)} leva left.`);
            }
            else {
                console.log(`Not enough money, you need ${Math.abs(budget - daliya).toFixed(2)} leva more.`);
            }
        break;
        case "Tulips":
            if (budget >= lale) {
                console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - lale).toFixed(2)} leva left.`);
            }
            else {
                console.log(`Not enough money, you need ${Math.abs(budget - lale).toFixed(2)} leva more.`);
            }
        break;
        case "Narcissus":
            if (budget >= nartsis) {
                console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - nartsis).toFixed(2)} leva left.`);
            }
            else {
                console.log(`Not enough money, you need ${Math.abs(budget - nartsis).toFixed(2)} leva more.`);
            }
        break;
        case "Gladiolus":
            if (budget >= gladiola) {
                console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${(budget - gladiola).toFixed(2)} leva left.`);
            }
            else {
                console.log(`Not enough money, you need ${Math.abs(budget - gladiola).toFixed(2)} leva more.`);
            }
        break;
    }
}

flowersAllAround(["Narcissus",
"119",
"360"])


