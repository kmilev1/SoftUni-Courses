function ranklistTennis(input) {
    let countParticipations = Number(input[0]);
    let initialPoints = Number(input[1]);

    let W = 2000;
    let F = 1200;
    let SF = 720;

    let levelF = 0;
    let levelSF = 0;
    let levelW = 0;

    let pointsF = 0;
    let pointsSF = 0;
    let pointsW = 0;

    for (let i = 1; i <= countParticipations+1; i++) {
        let levelAchieved = input[i];

        if (levelAchieved == "F") {
            levelF++;
            pointsF = levelF * F;
        }
        else if (levelAchieved == "SF") {
            levelSF++;
            pointsSF = levelSF * SF;
        }
        else if (levelAchieved == "W") {
            levelW++;
            pointsW = levelW * W;
        }
    }

    totalPoints = initialPoints + pointsF + pointsSF + pointsW;
    avgPoints = (totalPoints - initialPoints) / countParticipations;
    winnerTimes = (levelW / countParticipations) * 100;
    
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(winnerTimes.toFixed(2) + "%")
}

ranklistTennis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])




