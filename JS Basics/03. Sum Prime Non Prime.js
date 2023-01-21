function sumPrimeNonPrime(input) {
    let index = 0;
    let sumPrimes = 0;
    let sumNonPrimes = 0;

    let command = input[index++];

    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPrimes += num;
            command = input[index];
            index++;
            continue;
        }

        let isNonPrime = false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isNonPrime = true;
                break;
            }
        }

        if (isNonPrime) {
            sumNonPrimes += num;
        } else {
            sumPrimes += num;
        }

        command = input[index];
        index++
    }
    console.log("Sum of all prime numbers is: " + sumPrimes);
    console.log("Sum of all non prime numbers is: " + sumNonPrimes)
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
