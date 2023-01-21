function clock() {
    let hour = 0;
    let min = 0;

    while (hour <= 23) {
        while (min <= 59) {
            console.log(hour + ":" + min);
            min++;
        }
        hour++;
        min = 0;
    }
}

clock()