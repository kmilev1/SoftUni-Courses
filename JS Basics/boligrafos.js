function expenses (input) {
    let countA = Number(input[0]);
    let countB = Number(input[1]);
    let countC = Number(input[2]);
    let discountrate = Number(input[3]);
    let total = (countA * 5.8 + countB * 7.2 + countC * 1.2) * (1 - discountrate / 100)
    console.log(total);
}

expenses (["2", "3", "4", "25"])