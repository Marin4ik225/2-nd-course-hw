//--------------------------------------------
//Задание 1
console.log('Задание 1');
let mas1 = [1, 5, 4, 10, 0, 3];
let ind1 = 0;
while (true) {
    if (mas1[ind1] != 10) {
        console.log(mas1[ind1]);
        ind1++;
    } else {
        console.log(mas1[ind1]);
        break;
    }
}

//Задание 2
console.log('Задание 2');
let mas2 = [1, 5, 4, 10, 0, 3];
console.log(mas2.indexOf(4));

//Задание 3
console.log('Задание 3');
let mas3 = [1, 3, 5, 10, 20];
console.log(mas3.join(' '));

//Задание 4
console.log('Задание 4');
let mas4 = [];
for (let i3 = 0; i3 < 3; i3++) {
    mas4.push([1, 1, 1]);
}
console.log(mas4);

//Задание 5
console.log('Задание 5');
let mas5 = [1, 1, 1];
for (let i4 = 0; i4 < 3; i4++) {
    mas5.push(2);
}
console.log(mas5);


//Задание 6
console.log('Задание 6');
let mas6 = [9, 8, 7, 'a', 6, 5];
const filteredmas6 = mas6.filter(item => item != 'a').sort();
console.log(filteredmas6);

//Задание 7
console.log('Задание 7');
let mas7 = [9, 8, 7, 6, 5];
let rezult7 = prompt("Угадайте число от 1 до 10, входящее в массив");
console.log('rezult7=', rezult7, mas7.includes(Number(rezult7)));
mas7.includes(Number(rezult7)) ? alert('Угадал') : alert('Не угадал');
console.log(mas7.includes(Number(rezult7)) ? 'Угадал' : 'Не угадал');

//Задание 8
console.log('Задание 8');
let letter8 = 'abcdef';       // строка
let mas8 = letter8.split(""); // перевод в массив
let mas8_1 = mas8.reverse();  // обращение с массивом
letter8 = mas8_1.join("");    // перевод в строку
console.log(letter8);

//Задание 9
console.log('Задание 9');
let mas9 = [[1, 2, 3], [4, 5, 6]];
let letter9 = mas9.join(",");
mas9 = letter9.split(",");
console.log(mas9);

//Задание 10
console.log('Задание 10');
let mas10 = [5, 5, 6, 4, 8, 2, 1, 3, 2, 0];
for (let i = 0; i < mas10.length; i++) {
    if (i < 9) console.log(mas10[i] + mas10[i + 1]);
}

//Задание 11
console.log('Задание 11');
const mas11 = mas10.map(item => item ** 2);
console.log(mas11);

//Задание 12
console.log('Задание 12');
let mas12 = ['fjmnvhm', 'sdfgdhhj', 'fgdf', 'sdsf'];
let mas12_1 = mas12.map(item => item.length);
console.log(mas12_1);

//Задание 13
console.log('Задание 13');
let mas13 = [2, 4, -6, 8, 4, 8, 0, -3, 5, -8, 0, 4, -585, 25];
console.log(mas13.filter(item => item < 0));

//Задание 14
console.log('Задание 14');
let mas14 = [];
for (let i14 = 0; i14 < 10; i14++) {
    mas14.push(Math.floor(Math.random() * 11));
}
console.log(mas14);
console.log(mas14.filter(item => item % 2 == 0));

//Задание 15
console.log('Задание 15');
let mas15 = [];
for (let i15 = 0; i15 < 6; i15++) {
    mas15.push(Math.floor(Math.random() * 11));
}
const sum15 = mas15.reduce((total, number) => total + number, 0);
console.log(mas15);
console.log(sum15/mas15.length);

