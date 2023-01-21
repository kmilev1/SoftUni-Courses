function present (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height / 1000;
    let litres = volume * (1 - percent / 100);
    console.log(litres);
}

present (["105", "77", "89", "18.5"])