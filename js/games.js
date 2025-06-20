// Игра 1. Угадай число от 1 до 100

let min1 = 1;
let max1 = 100;

// при нажатии сгенерировать рандомное число
// вывести на экран предложение ввести значение от 0 до 100 (в valueFind)
// сравнить число valueFind с valueRandom
// если больше, то написать больше и предложить ввести еще раз
// ...меньше и предложить ввести еще раз
// равно = вывести сообщение вы угадали
// функция по онклику:
function startGameRandom() {
    let valueRandom = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    console.log(valueRandom);
    let valueFind = -1;
    while (valueFind !== valueRandom) {
        valueFind = prompt("Угадайте число. Введите значение от 1 до 100");
        if (Number(valueFind)) {
            if (valueFind < valueRandom) {
                alert("Загаданное число больше введенного!");
                continue;
            } else {
                if (valueFind > valueRandom) {
                    alert("Загаданное число меньше введенного!");
                    continue;
                } else {
                    alert("Поздравляю. Вы угадали !");
                    break;
                }

            }
        }

    }
}
//-----------------------------------------------------------------------

// Игра 2. Простая арифметика
let min2 = 1;
let max2 = 10;
let a = 0;
let b = 0;
let mas_lessons = [
    {
        funct: (a, b) => {
            rezult = prompt("Найдите сумму двух чисел:  " + a + "+" + b);
            console.log("rezult=", rezult, " ? ", a + b);
            rezult == a + b ? alert("Правильно") : alert("не правильно");
        }
    },
    {
        funct: (a, b) => {
            rezult = prompt("Найдите разность двух чисел:  " + a + "-" + b);
            console.log("rezult=", rezult, " ? ", a - b);
            rezult == a - b ? alert("Правильно") : alert("не правильно");
        }
    },
    {
        funct: (a, b) => {
            rezult = prompt("Найдите произведение двух чисел:  " + a + "*" + b);
            console.log("rezult=", rezult, " ? ", a * b);
            rezult == a * b ? alert("Правильно") : alert("не правильно");
        }
    },
    {
        funct: (a, b) => {
            rezult = prompt("Найдите деление двух чисел (окр до целого):  " + a + "/" + b);
            if (b != 0) {
                console.log("rezult=", rezult, " ? ", Math.round(a / b));
                rezult == Math.round(a / b) ? alert("Правильно") : alert("не правильно");

            } else {
                console.log("rezult=", rezult, "на 0 не делится ");
                alert("на 0 не делится");

            }
        }
    }
];

let lesson = 0;

while (true) {
    lesson = Math.floor(Math.random() * 3) + 1;
    a = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    b = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    mas_lessons[lesson].funct(a, b);
    if (confirm("Продолжаем?") == false) break;
}
 
//-----------------------------------------------------------------------
// Игра 3. «Переверни текст»





//-----------------------------------------------------------------------
// Игра 4. «Викторина»
// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

//-----------------------------------------------------------------------

