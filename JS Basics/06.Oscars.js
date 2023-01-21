function oscars(input) {
    let name = input[0];
    let pointsGiven = Number(input[1]);
    let judgeCount = Number(input[2]);
 ////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!////////////// ДА СЕ ПРЕРЕШИ !!!!!!
    let totalPoints = pointsGiven;
 
    let judgeNameIndex = 3;
    let judgeScoreIndex = 4;
 
    for (let i = 0; i < judgeCount; i++) {
        let currentJudgeName = input[judgeNameIndex];
        let currentJudgeScore = Number(input[judgeScoreIndex]);
 
        // Out of array boundaries protection.
        if (!currentJudgeName || !currentJudgeScore) {
            break;
        }
 
        totalPoints += (currentJudgeName.length * currentJudgeScore) / 2;
 
        if (totalPoints > 1250.5) {
            break;
        }
 
        judgeNameIndex += 2;
        judgeScoreIndex += 2;
    }
 
    if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
