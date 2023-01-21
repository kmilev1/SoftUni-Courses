function Godzilla (input) {
    let Budget = Number(input[0]);
    let Statisti = Number(input[1]);
    let ClothesPrice = Number(input[2]);
    let Dekor = Budget * .1;
    if (Statisti >= 150) {
        RevisedClothesPrice = ClothesPrice * (1 - .1) * Statisti;
    }
    else {
        RevisedClothesPrice = ClothesPrice * Statisti;
    }
    if (Dekor + RevisedClothesPrice >= Budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(Dekor + RevisedClothesPrice - Budget).toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(Budget - (Dekor + RevisedClothesPrice)).toFixed(2)} leva left.`);
    }
}

Godzilla (["9587.88",
"222",
"55.68"])


