/////////////////завдання 1//////////////////////
const input = prompt("Введіть число:");
let n = Math.abs(parseInt(input, 10));

if (isNaN(n)) {
    console.log("Це не число!");
} else {
    const isNegative = parseInt(input, 10) < 0;
    let count = 0;
    let reversed = 0;

    if (n === 0) {
        count = 1;
    }

    while (n > 0) {
        const digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
        count++;
    }

    console.log("Кількість цифр: " + count);
    console.log("Число навпаки: " + (isNegative ? "-" : "") + reversed);
}
//////////////завдання 2//////////////////////
const secret = Math.floor(Math.random() * 100) + 1;
const MAX_ATTEMPTS = 5;
let guessed = false;

for (let attempts = 1; attempts <= MAX_ATTEMPTS; attempts++) {
    const input = prompt(
        "Вгадайте число від 1 до 100 (спроба " + attempts + " з " + MAX_ATTEMPTS + "):"
    );

    if (input === null) {
        alert("Гру перервано. Загадане число: " + secret);
        guessed = true;
        break;
    }

    const guess = parseInt(input, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Введіть ціле число від 1 до 100!");
        attempts--;
        continue;
    }

    if (guess < secret) {
        alert("Більше!");
    } else if (guess > secret) {
        alert("Менше!");
    } else {
        alert("Вгадали! Кількість спроб: " + attempts);
        guessed = true;
        break;
    }
}
if (!guessed) {
    alert("Спроби закінчилися. Загадане число: " + secret);
}
////////////завдання 3//////////////////////
let sum = 0;
let count = 0;
let max = -Infinity;
let min = Infinity;
let num;

do {
    num = parseFloat(prompt("Введіть число (0 для завершення):"));

    if (isNaN(num)) {
        alert("Це не число, спробуйте ще раз.");
        num = NaN;
        continue;
    }

    if (num !== 0) {
        sum += num;
        count++;
        if (num > max) max = num;
        if (num < min) min = num;
    }
} while (num !== 0);

if (count === 0) {
    console.log("Жодного числа не введено.");
} else {
    console.log("Сума: " + sum);
    console.log("Середнє арифметичне: " + (sum / count));
    console.log("Найбільше: " + max);
    console.log("Найменше: " + min);
}