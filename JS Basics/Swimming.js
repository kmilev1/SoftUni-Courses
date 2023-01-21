function SwimmingRecord (input) {
    let Record = Number(input[0]);
    let DistanceInM = Number(input[1]);
    let TimeFor1M = Number(input[2]);
    let Seconds = DistanceInM * TimeFor1M;
    let Zabavyane = Math.floor(DistanceInM / 15) * 12.5;
    let TotalSeconds = Seconds + Zabavyane;
    if (Record >= TotalSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(TotalSeconds).toFixed(2)} seconds."`);
    }
    else {
        console.log(`No, he failed! He was ${(TotalSeconds - Record).toFixed(2)} seconds slower.`)
    }
}

SwimmingRecord (["55555.67",
"3017",
"5.03"])



