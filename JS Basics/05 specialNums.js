function specialNums(input) {
    let num = Number(input[0]);
    let isFound = false;
    let print = "";

    for (let i = 1111; i <= 9999; i++) {
        let index = String(i);
        if (num % index[0] == 0 && num % index[1] == 0 && num % index[2] == 0 && num % index[3] == 0) {
            isFound = true;
            print += `${i} `;
        }
    }
    console.log(print)
}

specialNums(["16"])