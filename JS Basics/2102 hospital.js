function hospital(input) {
    let days = Number(input[0]);
    let patients = Number(input[1]);
    let patientsTreated = 0;
    let patientsUntreated = 0;
    let counter = 7;

    for (let i = 1; i <= days; i++) {
        let patientsCount = Number(input[i]);

        if (i % 3 == 0 && patientsUntreated > patientsTreated) {
            counter++
        }
        if (patientsCount <= counter) {
            patientsTreated += patientsCount
        } else {
            patientsTreated += counter;
            patientsUntreated += patientsCount - counter
        }
    }
    console.log(`Treated patients: ${patientsTreated}.`);
    console.log(`Untreated patients: ${patientsUntreated}.`)

}

hospital(["3", "7", "7", "7"])
hospital(["4", "7", "27", "9", "1"])
hospital(["6", "25", "25", "25", "25", "25", "2"])