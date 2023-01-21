function tradeCommissions(input) {
    let city = input[0];
    let salesVolume = Number(input[1]);
    if (salesVolume >= 0) {
    switch (city) {
        case "Sofia":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * .05).toFixed(2));
            }
            else if (salesVolume >= 500 && salesVolume <= 1000) {
                console.log((salesVolume * .07).toFixed(2));
            }
            else if (salesVolume >= 1000 && salesVolume <= 10000) {
                console.log((salesVolume * .08).toFixed(2));
            }
            else if (salesVolume > 10000) {
                console.log((salesVolume * .12).toFixed(2));
            }
        break;
        case "Varna":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * .045).toFixed(2));
            }
            else if (salesVolume >= 500 && salesVolume <= 1000) {
                console.log((salesVolume * .075).toFixed(2));
            }
            else if (salesVolume >= 1000 && salesVolume <= 10000) {
                console.log((salesVolume * .1).toFixed(2));
            }
            else if (salesVolume > 10000) {
                console.log((salesVolume * .13).toFixed(2));
            }
        break;
        case "Plovdiv":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * .055).toFixed(2));
            }
            else if (salesVolume >= 500 && salesVolume <= 1000) {
                console.log((salesVolume * .08).toFixed(2));
            }
            else if (salesVolume >= 1000 && salesVolume <= 10000) {
                console.log((salesVolume * .12).toFixed(2));
            }
            else if (salesVolume > 10000) {
                console.log((salesVolume * .145).toFixed(2));
            }
        break;
        default:
            console.log("error");
        }
    }
    else {
    console.log("error");
    }
}

tradeCommissions(["Sofia",
"-50"])


