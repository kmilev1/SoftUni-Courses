function CalcArea (input) {
    let FigType = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let square = a * a;
    let rectangle = a * b;
    let circle = a * a * Math.PI;
    let triangle = a * b / 2;
    if (FigType == "square") {
        console.log(square.toFixed(3))
    }
    else if (FigType == "rectangle") {
        console.log(rectangle.toFixed(3))
    }
    else if (FigType == "circle") {
        console.log(circle.toFixed(3))
    }
    else if (FigType == "triangle") {
        console.log(triangle.toFixed(3))
    }
}

CalcArea (["triangle",
"4.5",
"20"])


