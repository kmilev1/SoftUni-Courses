function personalTitles2(input) {
    let age = Number(input[0]);
    let sex = input[1];
    if (age >= 16) {
        if (sex == "m") {
            console.log("Mr.");
        }
        else if (sex == "f") {
            console.log("Ms.");
        }
    }
    else if (age < 16) {
        if (sex == "m") {
            console.log("Master");
        }
        else if (sex == "f") {
            console.log("Miss");
        }
    }
}


personalTitles2(["12",
"f"])


