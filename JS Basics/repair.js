function repair (input) {
    let A = Number(input[0]);
    let B = Number(input[1]);
    let C = Number(input[2]);
    let hours = Number(input[3]);
    let calc = (A + 2) * 1.5 + (B * 1.1) * 14.5 + C * 5 + .4;
    let labour = calc * .3 * hours;
    let total = calc + labour;
    console.log(total);
}

repair (["10", "11", "4", "8"])