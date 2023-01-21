function kidStore (input) {
    let VacationPrice = Number(input[0]);
    let Pazel = Number(input[1]);
    let Doll = Number(input[2]);
    let Bear = Number(input[3]);
    let Minion = Number(input[4]);
    let Truck = Number(input[5]);
    let PazelPrice = Pazel * 2.6;
    let DollPrice = Doll * 3;
    let BearPrice = Bear * 4.1;
    let MinionPrice = Minion * 8.2;
    let TruckPrice = Truck * 2;
    if (Pazel + Doll + Bear + Minion + Truck >= 50) {
        Revenue = (PazelPrice + DollPrice + BearPrice + MinionPrice + TruckPrice) * (1 - .25);
    }
    else {
        Revenue = PazelPrice + DollPrice + BearPrice + MinionPrice + TruckPrice;
    }
    if (Revenue * (1 - .1) >= VacationPrice) {
        console.log(`Yes! ${(Revenue * (1 - .1) - VacationPrice).toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${(VacationPrice - Revenue * (1 - .1)).toFixed(2)} lv needed.`)
    }
}

KidStore (["320",
"8",
"2",
"5",
"5",
"1"])


