let money = prompt("Ваш бюджет на месяц?", "" );
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);


let appData = {
  budget: money,
  timeZone: time,
  expences: {}, 
  optionalExpences: {},
  savings: false,
  income: []
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expences.a1 = a3;
appData.expences.a2 = a4;

alert(appData.budget / 30);