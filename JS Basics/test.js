function test (input) {
    let speed = Number(input[0]);
    if (speed < 10) {
        console.log("slow");
    }
    else if (speed < 50) {
        console.log("average");
    }
    else if (speed < 150) {
        console.log("fast");
    }
    else if (speed < 1000) {
        console.log("ultra fast");
    }
    else {
        console.log("extremely fast")
    }
}

test (["3500"])

function passw (input) {
    let pass = input[0];
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!")
    }
}

passw (["s3cr3t!P@ssw0rd1"])