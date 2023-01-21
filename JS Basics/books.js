function hoursperday (input) {
    let pages = Number(input[0]);
    let pagesperhour = Number(input[1]);
    let days = Number(input[2]);
    let hoursperday = pages / pagesperhour / days;
    console.log(hoursperday);
}

hoursperday (["432", "15", "4"])