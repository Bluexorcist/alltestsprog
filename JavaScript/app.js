let money = prompt('Ваш бюджет на месяц');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let question1 = prompt('Введите обязательную статью доходов');
let question2 = prompt('Во сколько обойдется');
let appData = {
  budget: money,
  timeData: time,
  expenses: {question1 : question2
  },
  optionalExpenses: '',
  income: [],
  savings: false
}; 
console.log(alert(money / 30));

