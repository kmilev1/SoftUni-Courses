function onTime(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);
    let late = String(`Late`);
    let ontime = String(`On time`);
    let early = String(`Early`)

    let exam = 60 * hourExam + minutesExam;
    let arrive = 60 * hourArrival + minutesArrival;
    let difference = exam - arrive;

    if (arrive > exam) {
        console.log(late);
        if (difference > -60) {
            minutes = difference % 60;
            if (minutes < 10) {
                console.log(`${Math.abs(minutes)} minutes after the start`); 
            }
            else if (minutes > 10) {
                console.log(`${Math.abs(minutes)} minutes after the start`);
            }
        }
        else if (difference <= -60) {
            minutes = -difference % 60;
            hours = Math.trunc(difference / -60);
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`); 
            }
            else {
                console.log(`${hours}:${minutes} hours after the start`); 
            }
        }
    }
    else if (arrive == exam || arrive >= exam - 30) {
        console.log(ontime);
    }
    else if (arrive < exam) {
        console.log(early);
    }

    if (difference < 60 && difference != 0) {
        console.log(`${difference} minutes before the start`)
    }
    else if (difference >= 60) {
        hours = Math.trunc(difference / 60);
        minutes = difference % 60;
            if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`); 
            }
            else if (minutes >= 10) {
                console.log(`${hours}:${minutes} hours before the start`); 
                }
        }
}


onTime(["9",
"30",
"9",
"50"])








 








