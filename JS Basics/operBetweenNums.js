function operBetweenNums(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    
    if (num2 == 0) {
         console.log(`Cannot divide ${num1} by zero`); 
    } 
    else if (operator == "+") {
        result = num1 + num2;
        { 
            if (result % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            else if (result % 2 !== 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        }
    }
    else if (operator == "-") {
        result = num1 - num2;
        {
            if (result % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            else if (result % 2 !== 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        }
    }
    else if (operator == "*") {
        result = num1 * num2;
        {
            if (result % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            else if (result % 2 !== 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        }
    }
    else if (operator == "/") {
            result = num1 / num2; {
                console.log(`${num1} / ${num2} = ${(result.toFixed(2))}`); 
            }
        }
    else if (operator == "%") {
            result = num1 % num2; {
            console.log(`${num1} % ${num2} = ${(result)}`); 
        }
    }
}

operBetweenNums(["112",
"0",
"/"])
