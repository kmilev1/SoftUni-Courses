function summerOutfit(input) {
    let temperature = Number(input[0]);
    let time = input[1];
    if (time == "Morning") {
        if (temperature >= 10 && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`);
        }
        else if (temperature > 18 && temperature <= 24) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else if (temperature >= 25) {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        }
    }
    else if (time == "Afternoon") {
        if (temperature >= 10 && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else if (temperature > 18 && temperature <= 24) {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        }
        else if (temperature >= 25) {
            console.log(`It's ${temperature} degrees, get your Swim Suit and Barefoot.`);
        }
    }
    else if (time == "Evening") {
        if (temperature >= 10 && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else if (temperature > 18 && temperature <= 24) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else if (temperature >= 25) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }
}

summerOutfit(["9", "Evening"])
