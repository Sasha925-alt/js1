////////////завдання 1//////////////
let вибрати = Number(prompt("оберіть напій: 1 - кава, 2 - чай, 3 - сік"));
let гроші = Number(prompt("введіть суму грошей"));
let drink;
let price;
switch (вибрати) {
  case 1:
    drink = "кава";
    price = 30;
    break;
  case 2:
    drink = "чай";
    price = 20;
    break;
  case 3:
    drink = "сік";
    price = 25;
    break;
  default:
    console.log("Error: такого напою немає");
}
if (price >= 0) {
  console.log(`Ви вибрали ${drink}. Ціна: ${price} грн.`);
}
if (гроші >= price) {
  let change = гроші - price;
  console.log(`Ви купили ${drink}. Здача: ${change} грн.`);
  console.log("Напій готується...");
}
else {
  console.log("Недостатньо грошей для покупки.");
}
////////////завдання 2//////////////
let вік = Number(prompt("Введіть ваш вік"));
if (вік < 0 || вік > 120) {
  console.log("Помилка: нереальний вік");
}
else {
  let result = вік >= 16 ? "Доступ дозволено" : "Доступ заборонено";
  console.log(result);
}
///////////завдання 3//////////////
let grade = prompt('Введіть оцінку (A, B, C, D, F):').toUpperCase();

switch (grade) {
  case 'A':
    console.log("Відмінно");
    break;
  case 'B':
    console.log("Добре");
    break;
  case 'C':
    console.log("Задовільно");
    break;
  case 'D':
    console.log("Незадовільно");
    break;
  case 'F':
    console.log("Не склав(ла)");
    break;
  default:
    console.log("Помилка: неправильна оцінка");
}

let scholarship = grade !== 'F' ? "Призначено стипендію" : "Стипендія відсутня";
console.log(scholarship);