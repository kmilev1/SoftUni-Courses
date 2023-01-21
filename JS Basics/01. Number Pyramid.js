function pyramid(input) {
    let n = Number(input[0]);
    let counter = 1;
    let isBigger = false;
    
    for (let i = 1; i <= n; i++) { // rows
        let currentLine = "";
        for (let j = 1; j <= i; j++) { // columns
            if (counter > n) {
                isBigger = true;
                break;
            }
            currentLine += counter + " ";
            counter++;
        }
        console.log(currentLine);
        if (isBigger) {
            break;
        }
    }
}

pyramid(["15"])