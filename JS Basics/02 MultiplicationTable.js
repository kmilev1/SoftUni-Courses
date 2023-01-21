function multiplicationTable() {
    let num1 = 1;
    let num2 = 1;

    while (num1 <= 10) {
        while (num2 <= 10) {
            console.log(num1 + " * " + num2 + " = " + num1 * num2);
            num2++;
        }
        num1++;
        num2 = 1;
    }
}

multiplicationTable()