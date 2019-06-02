'use strict';
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budjet: money,  
    timeData: time,
    expenses: {"a1":"a2"},
    optionalExpenses: {},
    income: [],
    savings: false
}

var a1 = prompt("Введите обязательную статью расходов в этом месяце");
var a2 = prompt("Во сколько обойдется?");
var a1 = prompt("Введите обязательную статью расходов в этом месяце");
var a2 = prompt("Во сколько обойдется?");
alert(money/30);