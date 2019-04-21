let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 
    while ( isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
        
    }
}
start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        console.log(i);
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('not done');
            i = i - 1;

        }

    };  
}
chooseExpenses();



appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " грн.");

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Что то пошло не так!");
};

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какая сумма накоплений?'),
            percent = +prompt('Какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);

    }
}
checkSavings();

/* let i = 0;
while (i < 2) {

    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('not done');
        i = 0;
    }

    i++;
}; */

/* let i = 0;
do {
   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
   } else {
      console.log('not done');
      i = 0;
   }
   i++;     
} while (i < 2); */
