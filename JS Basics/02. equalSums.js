function equalSums(input) {
    let start = Number(input[0])
    let end = Number(input[1]);
    let isPrint = false;

    for (let i = start; i <= end; i++) {
        let printLine = "";
        for (let j = start; j <= end; j++) {
            j = "" + j
            let sumEvens = Number(j[1]) + Number(j[3]) + Number(j[5]);
            let sumOdds = Number(j[0]) + Number(j[2]) + Number(j[4])
            if (sumEvens == sumOdds) {
                isPrint = true;
                printLine += `${j} `
            }
        }
        console.log(printLine)
        if (isPrint) {
            break;
        }
    }
}

equalSums(["100000",
"100050"])
