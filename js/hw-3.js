// Задание 1
console.log('Задание 1');
let password = '99111';
let pass = prompt("Введите пароль:");
if (pass === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
console.log('Задание 2');
let c = 4;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
console.log('Задание 3');
let d = 125;
let e = 25;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4
console.log('Задание 4');
let a = '2';
let b = '3';

alert(Number(a) + Number(b));
console.log(Number(a) + Number(b));

// Задание 5
console.log('Задание 5');
let monthNumber = prompt("Введите номер месяца:");
switch (monthNumber) {
    case '1':
        console.log("Зима");
        break;
    case '2':
        console.log("Зима");
        break;
    case '12':
        console.log("Зима");
        break;
    case '3':
        console.log("Весна");
        break;
    case '4':
        console.log("Весна");
        break;
    case '5':
        console.log("Весна");
        break;
    case '6':
        console.log("Лето");
        break;
    case '7':
        console.log("Лето");
        break;
    case '8':
        console.log("Лето");
        break;
    case '9':
        console.log("Осень");
        break;
    case '10':
        console.log("Осень");
        break;
    case '11':
        console.log("Осень");
        break;
    default:
        console.log('ввели что-то не то');
}


//   Дополнительные задания

// Задание 1
console.log('Задание 1d');
let num1 = prompt("Пожалуйста, введите любое число");
if (Number(num1) !== NaN) {
    console.log(num1 % 2 === 0 ? " Четное число" : "Не четное число ");
} else {
    console.log('ввели что-то не то');
}

// Задание 2
console.log('Задание 2d');
let clientOS = 0;
console.log(clientOS == 0 ? "Установите версию приложения для iOS по ссылке" : "Установите версию приложения для Android по ссылке");

// Задание 3
console.log('Задание 3d');
let clientDeviceYear = prompt("Введите год ОС");
clientOS = prompt("Введите тип ОС в виде 0 - iOS, 1 - Android");;
let mess = "";
if (clientDeviceYear < 2015) {
    mess = "Установите облегченную версию приложения для ";
} else {
    mess = "Установите версию приложения для ";
}
console.log(mess, clientOS == 0 ? " iOS по ссылке" : " Android по ссылке ");