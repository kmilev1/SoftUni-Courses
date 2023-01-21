function division(input) {
    let num = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let group1 = 0
    let group2 = 0;
    let group3 = 0;

    for (let i = 1; i <= num; i++) {
        let indexToNum = Number(input[i]);
        if (indexToNum % 2 == 0) {
            group1++
        }
        if (indexToNum % 3 == 0) {
            group2++
        }
        if (indexToNum % 4 == 0) {
            group3++
        }
    }
    p1 = group1 / num * 100;
    p2 = group2 / num * 100;
    p3 = group3 / num * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%")
    console.log(p3.toFixed(2) + "%")
}

division([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])