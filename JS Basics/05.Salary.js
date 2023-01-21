function salary(input) {
    let openedTabs = Number(input[0])
    let salary = Number(input[1]);

    let salaryDeductionFB = 150;
    let salaryDeductionInstagram = 100;
    let salaryDeductionReddit = 50;
    
    if (openedTabs >= 1) {
        for (let i = 1; i <= openedTabs+1; i++) {
            let website = input[i];
            
            if (website == "Facebook") {
                salary -= salaryDeductionFB;
            } 
            else if (website == "Instagram") {
                salary -= salaryDeductionInstagram;
            } 
            else if (website == "Reddit") {
                salary -= salaryDeductionReddit;
            }
            else {
                salary = salary;
            }
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(salary); 
    }
}

salary(["4",
"1000",
"Dev.bg",
"Reddit",
"Facebook",
"Facebook"])

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
