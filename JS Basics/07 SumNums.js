function sumNums(input) {
    let n = input[0];
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        let sth = n[i];
        sum = Number(sth) + sum;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumNums(["123400587449853222"])