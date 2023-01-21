function area1 (input) {
    let figureType = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let square = a * a;
    let rectangle = a * b;
    let circle = a * a * Math.PI;
    let triangle = a * b / 2;
    if (figureType == "square") {
        console.log(square.toFixed(3));
    }
    else if (figureType == "rectangle") {
        console.log(rectangle.toFixed(3));
    }
    else if (figureType == "circle") {
        console.log(circle.toFixed(3));
    }
    else if (figureType == "triangle") {
        console.log(triangle.toFixed(3));
    }
}

area1 (["triangle",
"4.5",
"20"])



