'use strict'  // новый стандарт ES6

let money, time;  // глобально объявили переменые, чтобы видны были везде

function start() {

    money = +prompt("Ваш бюджет на месяц?", "");

    while ( isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "");

};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Статья расходов №" + (i + 1) + ") Введите обязательную статью расходов в этом месяце", "");
        let q2 = prompt("Статья расходов №" + (i + 1) + ") Во сколько обойдется?", "");
    
        if ( typeof(q1) === 'string' && typeof(q1) != null && typeof(q2) != null 
            && q1 != '' && q2 != '' && q1.length < 50 ) {
            console.log("done");
            appData.expenses[q1] = q2;
        } else {}
    };
}

chooseExpenses();

console.log(appData);

appData.budgetDay = (appData.budget / 30).toFixed(2); // toFixed округляет (в данном сл до 2 знаков после запятой) и возвращает СТРОКУ
alert('Бюджет на один день составит ' + appData.budgetDay);


function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Сумма ваших накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();