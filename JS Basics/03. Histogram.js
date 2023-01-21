function hystogram(args) {
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let p1Percantage = 0;
    let p2Percantage = 0;
    let p3Percantage = 0;
    let p4Percantage = 0;
    let p5Percantage = 0;

    for (let i = 0; i <  n; i++) {
        let num = Number(args[i]);

        if (num < 200) {
            p1++;
        }
        else if (num < 400) {
            p2++;
        }
        else if (num < 600) {
            p3++;
        }
        else if (num < 800) {
            p4++;
        }
        else {
            p5++;
        }
    }   
    p1Percantage = (p1 / n * 100).toFixed(2);
    p2Percantage = (p2 / n * 100).toFixed(2);
    p3Percantage = (p3 / n * 100).toFixed(2);
    p4Percantage = (p4 / n * 100).toFixed(2);
    p5Percantage = (p5 / n * 100).toFixed(2);
 
    console.log(p1Percantage + "%");
    console.log(p2Percantage + "%");
    console.log(p3Percantage + "%");
    console.log(p4Percantage + "%");
    console.log(p5Percantage + "%");
}


hystogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])


