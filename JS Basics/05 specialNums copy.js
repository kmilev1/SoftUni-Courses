function specialNums(input) {
    let num = Number(input[0]);
    let isFound = false;
    let print = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (num % a == 0 && num % b == 0 && num % c == 0 && num % d == 0) {
                        print += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }
    console.log(print)
}

specialNums(["3"])