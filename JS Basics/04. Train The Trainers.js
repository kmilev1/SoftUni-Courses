function trainers(input) {
    let index = 0;
    let sum = 0;
    let cumulSum = 0;
    let counterGrades = 0;
    
    let judges = Number(input[index++]);
    let command = input[index++];

    while (command !== "Finish") {
        let presentationName = command;

        sum = 0;
        
        for (let i = 0; i <  judges; i++) {
            counterGrades++;
            let grade = Number(input[index]);
            index++;
            sum += grade;
        }
        let avg = sum / judges;
        console.log(`${presentationName} - ${avg.toFixed(2)}.`);

        cumulSum += sum;

        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(cumulSum / counterGrades).toFixed(2)}.`)
}

trainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
])