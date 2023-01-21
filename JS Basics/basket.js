function basketball (input) {
    let price = Number(input[0]);
    let ketsove = price * (1 - 0.4);
    let ekip = ketsove * (1 - 0.2);
    let ball = ekip * .25;
    let other = ball * .2;
    let total = price + ketsove + ekip + ball + other
    console.log(total);
}

basketball (["550"])