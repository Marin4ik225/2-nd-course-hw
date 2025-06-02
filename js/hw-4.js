// Задание 1
console.log('Задание 1');
let i = 0;
while (i < 2) {
    console.log("Привет ");
    i++;
}


// Задание 2
console.log('Задание 2');
i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


// Задание 3
console.log('Задание 3');
i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}


// Задание 4
console.log('Задание 4');
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


// Задание 5
console.log('Задание 5');
let n = 1000;
i = 0;
while (n >= 50) {
    i++;
    n /= 2;
}
console.log("Результат: n=", n);
console.log("Итераций: ", i);


// Задание 6
console.log('Задание 6');
let fr1 = prompt("Введите дату первой пятницы в месяце:");
let countMounts = 0;
for (let n = 1; n <= 31; n++) {
    if (n == (Number(fr1) + countMounts * 7)) {
        console.log("Сегодня пятница, ", String(n), "-е число. Необходимо подготовить отчет.");
        countMounts++;
    }
}



// Дополнительные задания
// Задание 1
console.log('Задание 1d');
let k = 100;
let countI = 1;
while (k >= 0) {
    countI++;
    k -= 7;
}
console.log("Результат: k=", k);
console.log("Итераций: ", countI);

// Задание 2
console.log('Задание 2d');
let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Сентябрь",
    "Август",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

for (i = 1; i <= 12; i++) {
    console.log(String(i), "-ый месяц ", String(months[i - 1]));
}
// Задание 3
console.log('Задание 3d');
let kniga = {
    название: 'Букварь',
    автор: 'Н.А. Жукова',
    год_издания: '2024',
    жанр: 'Учебное издание'
};

for (let key1 in kniga) {
    console.log(`${key1}: ${kniga[key1]}`);
}

// Задание 4
console.log('Задание 4d');
let mass = [4, 5, 82, 24, 8, 23, 56, 9, 3, 5];
let min = mass[0];
for (i = 0; i < mass.length; i++) {
    if (min > mass[i]) min = mass[i];
    console.log(i, mass[i]);
}
console.log('минимальное число :', min);