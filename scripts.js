let money, time;

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    start: function() {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");

        }
    },
    chooseExpenses: function() {
       for (let i = 0; i < 2; i++) {

            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");

            if ((typeof(a)) === 'string' && !isNaN(b) && (typeof(a)) != null && (typeof(b)) !== null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i = i - 1;

            }

        }; 
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " грн.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Что то пошло не так!");
        };  
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('Какая сумма накоплений?'),
                percent = +prompt('Какой процент?');
            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' грн. в месяц');

        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let exp = prompt('Статья необязательных расходов', '');
            if (isNaN(exp) && exp != null && typeof (exp) != '' && exp.length < 50) {
                appData.optionalExpenses[i] = exp;

            } else {
                i = i - 1;
            }
            console.log(exp);
            console.log(i);
        }
    },
    chooseIncome: function() {

         for ( i = 1; i < 2; i++ ) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
            if ( typeof(items) === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Что то еще?', ''));
                appData.income.sort();
                appData.income.forEach(function(item){
                    alert('Способы доп. заработка: ' + item);
                });
                for ( let key in appData ) {
                    console.log('Наша программа включает в себя данные: ' + key);
                }

    
            } else {
                i = i - 1;
            }

        }



    }

}
appData.chooseIncome();