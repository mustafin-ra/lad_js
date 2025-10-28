// 1.​ Сделайте функцию, которая возвращает квадрат числа. Число
// передается параметром.

let calcSquareNum = (num) => num ** 2;

console.log(calcSquareNum(7));

// 2.​ Сделайте функцию, которая возвращает сумму двух чисел.

let calcSumNum = (num1, num2) =>
    num1 + num2;

console.log(calcSumNum(7, 5));

// 3.​ Сделайте функцию, которая отнимает от первого числа второе
// и делит на третье.

let calcMathExp = (num1, num2, num3) =>
    (num1 - num2) / num3;

console.log(calcMathExp(7, 5, 2));

// 4.​ Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.

function getDayWeek(numDay) {
    switch (numDay) {
        case 1:
            return "Понедельник";
            break;
        case 2:
            return "Вторник";
            break;
        case 3:
            return "Среда";
            break;
        case 4:
            return "Четверг";
            break;
        case 5:
            return "Пятница";
            break;
        case 6:
            return "Суббота";
            break;
        case 7:
            return "Воскресенье";
            break;
    }
}

console.log(getDayWeek(3));

// 5.​ Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.

let checkEqual = (num1, num2) =>
    num1 === num2 ? true : false;

console.log(checkEqual(7, 7));

// 6.​ Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.

let checkSum = (num1, num2) =>
    num1 + num2 > 10 ? true : false;

console.log(checkSum(7, 2));

// 7.​ Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false.

let isNegativeNum = (num) =>
    num < 0 ? true : false;

console.log(isNegativeNum(-1));

// 8.​ Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
//10. Если это так - пусть функция возвращает true, если не так -
// false.

let isNumberInRange = (num) =>
    num > 0 && num < 10 ? true : false;

console.log(isNumberInRange(11));

// 9.​ *Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.

function getDigitsSum(digit) {
    let DigitsSum = 0;
    let strDigit = String(digit);
    for (
        let i = 0;
        i < strDigit.length;
        i++
    ) {
        DigitsSum += +strDigit[i];
    }
    return DigitsSum;
}

console.log(getDigitsSum(679));

// 10.​ *Найдите все года от 1 до 2020, сумма цифр которых равна
// 13. Для этого используйте вспомогательную функцию
// getDigitsSum из предыдущей задачи.

for (let i = 1; i <= 2020; i++) {
    if (getDigitsSum(i) === 13) {
        console.log(i);
    }
}

//11.​ Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.

let isEven = (num) =>
    num % 2 ? false : true;

console.log(isEven(34));

// 12.​ *Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее). Можно использовать
// функцию getDigitsSum из 9 задачи

let num =
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111n;
let sumNum = getDigitsSum(num);
console.log(sumNum);
while (sumNum >= 9) {
    console.log(sumNum);
    sumNum = getDigitsSum(sumNum);
}
console.log(sumNum);

// 13.​ * Напишите стрелочную функцию, которая будет
// возвращать true если строка является палиндромом и false в
// противном случае.

let isPalindrome = (str) => {
    let cleanStr = str.replace(
        /[,\.\\s]/g,
        "",
    ); //найдёт все запятые, точки,  пробелы (символы \s), по всей строке (флаг g) и заменит их на пустую строку
    for (
        let i = 0;
        i < cleanStr.length;
        i++
    ) {
        if (
            cleanStr[
                i
            ].toLowerCase() !==
            cleanStr[
                cleanStr.length - 1 - i
            ].toLowerCase()
        ) {
            return false;
        }
    }
    return true;
};

console.log(
    isPalindrome(
        " ,  ш        , .....   Ала     ,,,       ш   ",
    ),
);
