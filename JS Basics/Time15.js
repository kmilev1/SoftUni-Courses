function Time24 (input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let NewTime = minutes + 15;
    let NewTime1 = NewTime - 60;
    if (NewTime <= 59) {
        NewTimeLast = NewTime;
        hourlast = hour;
    }
    else {
        NewTimeLast = NewTime1;
        hourlast = hour + 1;
    }
    if (NewTimeLast <= 9) {
        NewTimeLast = `0${NewTimeLast}`;
    }
    else {
        NewTimeLast = `${NewTimeLast}`;
    }
    if (hourlast >= 24) {
        hourlast = 0;
    }
    console.log(`${hourlast}:${NewTimeLast}`);
}

Time24 (["1", "46"])


