let min = 0;
let max = 100;

// при нажатии сгенерировать рандомное число
// вывести на экран предложение ввести значение от 0 до 100 (в valueFind)
// сравнить число valueFind с valueRandom
// если больше, то написать больше и предложить ввести еще раз
// ...меньше и предложить ввести еще раз
// равно = вывести сообщение вы угадали
// функция по онклику:
function startGameRandom() {
    let valueRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(valueRandom);
    let valueFind = -1;
    while (valueFind !== valueRandom) {
        valueFind = prompt("Угадайте число. Введите значение от 0 до 100");
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


