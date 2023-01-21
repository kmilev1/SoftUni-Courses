function magicNum(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicN = Number(input[2]);
    let counter = 0;
    let magicFound = false;

    for (let i1 = n1; i1 <= n2; i1++) {
        for (let i2 = n1; i2 <= n2; i2++) {
            counter++;
            if (i1 + i2 === magicN) {
                console.log(`Combination N:${counter} (${i1} + ${i2} = ${magicN})`);
                magicFound = true;
                break;
            }
        }
        if (magicFound) {
            break;
        }
    }
    if (magicFound == false) {
        console.log(`${counter} combinations - neither equals ${magicN}`);
    }
}

magicNum(["1",
    "10",
    "20"
])