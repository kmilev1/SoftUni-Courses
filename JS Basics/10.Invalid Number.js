function invalidNum(input) {
    let num = Number(input[0]);
    if (num < 100 && num != 0) {
        console.log("invalid");
    }
    else if (num > 200) {
        console.log("invalid");
    }
    else {}
}

invalidNum([""])