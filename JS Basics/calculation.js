function calculation (input) {
    let sqm = input[0];
    let discount = sqm * 7.61 * .18;
    let finalprice = sqm * 7.61 - discount;
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculation (["150"])
