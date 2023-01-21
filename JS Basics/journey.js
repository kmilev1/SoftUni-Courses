function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let spentMoney = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                spentMoney = budget * .3;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${spentMoney.toFixed(2)}`);
            }
            else if (budget <= 1000) {
                spentMoney = budget * .4;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${spentMoney.toFixed(2)}`);
            }
            else {
                spentMoney = budget * .9;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
            break;
        case "winter":
            if (budget <= 100) {
                spentMoney = budget * .7;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
            else if (budget <= 1000) {
                spentMoney = budget * .8;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
            else {
                spentMoney = budget * .9;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${spentMoney.toFixed(2)}`);
            }
        break;
    }
}

journey(["1500", "summer"])