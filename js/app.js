///////////////// Задача 1////////////////////////
const name="Саша";
const age="14";
const height="1.75";
console.log(`Мене звати ${name}, мені ${age} років, мій зріст ${height} см.`);
//////////////// Задача 2////////////////////////
const city="Київ";
const country="Україна";
const population="2.8 млн";
const isCapital=true;
const nothing=null;
let undefinedVar;
console.log(`Змінна city має тип: ${typeof city}`);
console.log(`Змінна country має тип: ${typeof country}`);
console.log(`Змінна population має тип: ${typeof population}`);
console.log(`Змінна isCapital має тип: ${typeof isCapital}`);
console.log(`Змінна nothing має тип: ${typeof nothing}`);
console.log(`Змінна undefinedVar має тип: ${typeof undefinedVar}`);
//////////////// Задача 3////////////////////////
const price=79.99;
const quantity=4;
const total=price*quantity;
console.log(`Загальна сума: ${total}`);
console.log(`Ціла частина: ${Math.trunc(total)}`);
console.log(`Сума з двома знаками: ${total.toFixed(2)}`);
///////////////// Задача 4////////////////////////
const birthYear=2007;
const currentYear=2026;
console.log(`Вам ${currentYear-birthYear} років.Через 10 років вам буде ${currentYear-birthYear+10} років.`);
////////////////// Задача 5////////////////////////
const totalSeconds = 10000;
Math.trunc(totalSeconds / 3600);
const hours = Math.trunc(totalSeconds / 3600);
const minutes = Math.trunc((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;
console.log(`Час: ${hours} годин, ${minutes} хвилин, ${seconds} секунд.`);