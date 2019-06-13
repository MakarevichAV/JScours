'use strict'  // новый стандарт ES6

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");


let appData = {
    budjet: money,
    timeData: time,
    expenses: {
        question1: question2
    },
    optionalExpenses: "",
    income: [

    ],
    savings: false
};

console.log(appData);

let budjetDay = appData.budjet / 30;
alert('Бюджет на один день составит ' + budjetDay);

