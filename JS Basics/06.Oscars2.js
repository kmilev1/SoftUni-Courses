function oscarsCalculation(input) {
    let name = input[0];
    let initialPoints = Number(input[1]);
    let judges = Number(input[2]);
    let totalPoints = initialPoints;

    for (let i = 3; i < input.length; i++) {
        console.log(i)
        let judgeName = input[i++];
        let judgePoints = Number(input[i]);
        let judgeName2 = Number(judgeName.length);

        totalPoints += (judgeName2 * judgePoints) / 2;
        
        if (totalPoints > 1250.5) {
            break;
        }
    }
        if (totalPoints > 1250.5) {
          console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
        }
        else if (totalPoints < 1250.5) {
            console.log(`Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
        }
} //////////////////////////////////// ДА СЕ ПРЕРЕШИ!!!!!!!!!!

oscarsCalculation(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
