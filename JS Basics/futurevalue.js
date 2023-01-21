function futurevalue (input) {
    let presentvalue = Number(input[0]);
    let term = Number(input[1]);
    let rate = Number(input[2]);
    let futurevalue = presentvalue + term * ((presentvalue * rate / 100) / 12);
    console.log(futurevalue);
}

futurevalue (["2350", "6", "7"])