function cinemaTickets(input) {
    let index = 0;
    let isFilled = false;

    let counterTickets = 0;
    let counterStudent = 0;
    let counterStandard = 0;
    let counterKids = 0;


    let movieName = input[index++];
    let capacity = Number(input[index++]);
    let ticketType = input[index];

    while (movieName !== "Finish") {
        let countCapacity = 0;

        while (ticketType !== "End") {
            countCapacity++;
            counterTickets++;

            if (ticketType === "student") {
                counterStudent++
            } else if (ticketType === "standard") {
                counterStandard++
            } else if (ticketType === "kid") {
                counterKids++
            }

            if (countCapacity === capacity) {
                isFilled = true;
                break;
            }
            index++;
            ticketType = input[index];
        }

        let filled = countCapacity / capacity * 100;

        console.log(movieName + " - " + filled.toFixed(2) + "% full.");

        index++;
        movieName = input[index++];
        capacity = Number(input[index++]);
        ticketType = input[index];
    }

    let shareStudent = counterStudent / counterTickets * 100;
    let shareStandard = counterStandard / counterTickets * 100;
    let shareKids = counterKids / counterTickets * 100;

    console.log(`Total tickets: ${counterTickets}`);
    console.log(`${shareStudent.toFixed(2)}% student tickets.`);
    console.log(`${shareStandard.toFixed(2)}% standard tickets.`);
    console.log(`${shareKids.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
])