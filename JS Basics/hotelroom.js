function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    if (month == "May" || month == "October") {
        if (nights <= 7) {
            priceStudio = 50 * nights;
            priceApartment = 65 * nights;
        }
        else if (nights > 7 && nights <= 14) {
            priceStudio = 50 * nights * .95;
            priceApartment = 65 * nights * 1;
        }
        else if (nights > 14) {
            priceStudio = 50 * nights * .7;
            priceApartment = 65 * nights * .9;
        }
    }
    else if (month == "June" || month == "September") {
        if (nights <= 14) {
            priceStudio = 75.2 * nights;
            priceApartment = 68.7 * nights;
        }
        else if (nights > 14) {
            priceStudio = 75.2 * nights * .8;
            priceApartment = 68.7 * nights * .9;
        }
    }
    else if (month == "July" || month == "August") {
        if (nights <= 14) {
            priceStudio = 76 * nights;
            priceApartment = 77 * nights;
        }
        else if (nights > 14) {
            priceStudio = 76 * nights;
            priceApartment = 77 * nights * .9;
        }
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May",
"0"])


