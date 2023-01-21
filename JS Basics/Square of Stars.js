function squareOfStars(input) {
    for(let i = 0; i < input; i++) {
        if(i === 0 || i === input - 1) {
            console.log('*'.repeat(input));
            continue;
        }
        console.log(`*${' '.repeat(input - 2)}*`);
    }
}

squareOfStars(["5"])