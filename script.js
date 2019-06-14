'use strict'  // новый стандарт ES6

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


// let q3 = prompt("Введите обязательную статью расходов в этом месяце", "");
// let q4 = prompt("Во сколько обойдется?", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

for (let i = 0; i < 2; i++) {
    let q1 = prompt("Статья расходов №" + (i + 1) + ") Введите обязательную статью расходов в этом месяце", "");
    let q2 = prompt("Статья расходов №" + (i + 1) + ") Во сколько обойдется?", "");

    if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
        && q1 != '' && q2 != '' && q1.length < 50 ) {
        console.log("done");
        appData.expenses[q1] = q2;
    } else {
        i--;
    }
};

appData.budgetDay = appData.budget / 30;
alert('Бюджет на один день составит ' + appData.budgetDay);

