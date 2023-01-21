function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]); 
    let income = 0;
    let seats = rows * columns;
    if (projectionType == "Premiere") {
        income = seats * 12;
    }
    else if (projectionType == "Normal") {
        income = seats * 7.5;
    }
    else if (projectionType == "Discount") {
        income = seats * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"])


