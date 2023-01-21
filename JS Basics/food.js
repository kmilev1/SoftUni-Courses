function food (input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    let calc = chicken * 10.35 + fish * 12.4 + vegan * 8.15;
    let dessert = calc * .2;
    let total = calc + dessert + 2.5;
    console.log(total)
}

food (["9", "2", "6"])