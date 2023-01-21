function travelling(input) {
    let index = 0;

    let destination = input[index++];
    let budget = Number(input[index++]);
    
    while (destination !== "End") {
        let sum = 0;
        while (sum < budget) {
            sum += Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`)

        destination = input[index++];

        budget = Number(input[index++]);
    }
}

travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

