'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
   money: money,
   timeData: time,
   expenses: {
      expensesQustion1: prompt("Введите обязательную статью расходов в этом месяце", ""),
      expensesQustion2: prompt("Во сколько обойдется?", "")
   },
   optionalExpenses: {},
   income: [],
   savings: false
}

alert("Ваш бюджет на 1 день: " + appData.money / 30 + " грн.");

// console.log(appData.money);
// console.log(appData.timeData);
// console.log(appData.expenses.expensesQustion1);
// console.log(appData.expenses.expensesQustion2);
