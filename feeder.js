let money = +prompt("Ваш бюджет на месяц?", "" );
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
for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

  if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expences[a] = b;
  } else {
    alert('Введите корректное значение статьи расходов и величины'); 
  };
};

appData.moneyPerDay = appData.expences / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Низкий уровень дохода")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень дохода')
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровнь дохода')
} else {
  console.log('Некорректные значения')
}