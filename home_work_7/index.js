// 1.​ Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.

// let strArr = ["str1", "str22", "str333", "str4444"];

// let lengthArr = strArr.map((e) => e.length);

// console.log(lengthArr);

// 2.​ Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
// 19]. Использую метод reduce() напишите функцию
// currentSums(numbers), которая возвращает новый массив из
// такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой
// позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// function currentSums(numbers) {
//     let newArr = [];
//     let result = numbers.reduce((accum, current) => {
//         newArr.push(accum + current);
//         return accum + current;
//     }, 0);

//     return newArr;
// }

// console.log(currentSums(numbers));

// 3.​ Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.

//*1 вариант решения, где я из массива беру только первый элемент
// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// let newNumbers = numbers.map((e) => `(${e}:${7 - e})`);

// console.log(newNumbers);

//*2 вариант решения, использую только числа из массива
// const numbers = [2, 3, 5, 7, 2, -10, 17, 19];
// const newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     for (let y = i + 1; y < numbers.length; y++) {
//         if (numbers[i] + numbers[y] === 7)
//             newNumbers.push(`(${numbers[i]}:${numbers[y]})`);
//     }
// }

// console.log(newNumbers);

// 4.​ Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.

// str = "Напишите код, создающий массив, который будет состоять";

// function stringToarray(str) {
//     str = str.trim();
//     let strArray = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " " || str[i] === "\n") {
//             //идем по строке до разделяющего символа
//             strArray.push(str.slice(0, 1)); //добавляем в массив первую букву слова до разделяющего символа
//             str = str.slice(i); //создаем новую строку с позиции разделения
//             str = str.trim();
//             i = 0; //обнуляем счетчик, т.к. будем идти по новой строке сначала
//         } else if (i === str.length - 1) {
//             //если последний элемент строки
//             strArray.push(str.slice(0, 1));
//         }
//     }
//     return strArray;
// }

// let strArr = stringToarray(str);

// console.log(strArr);

// 5.​ Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.

// let str = "создающий";
// let strArr = [];
// for (let i = 1; i < str.length - 1; i++) {
//     strArr.push(str[i - 1] + str[i] + str[i + 1]);
// }

// console.log(strArr);

// 6.​ Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// let sortNumArr = numbers.sort((a, b) => a - b);

// console.log(sortNumArr);

// 7.​ Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений через пробел.

// let numArr1 = [7, 29, 14, 75, 64];
// let numArr2 = [2, 5, 9, 53, 53, 32];
// let numArr3 = [9, 44, 42, 65, 21, 76, 0, 13];

// let numArr123 = [...numArr1, ...numArr2, ...numArr3];
// console.log(numArr123);
// const sortnumArr123 = numArr123.sort((a, b) => a - b);
// let sortnumArr123Str = [
//     sortnumArr123.toString().replaceAll(",", " "),
// ];

// console.log(sortnumArr123Str);

// 8.​ Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.

// let numTwoArr = [[1, 2, 3], [4, 5], [6]];
// let numOneArr = [];
// let arrSumm = 0;

// for (let e of numTwoArr) {
//     numOneArr.push(...e);
// }
// console.log(numOneArr); //[ 1, 2, 3, 4, 5, 6 ]

// arrSumm = numOneArr.reduce((accum, current) => accum + current, 0);

// console.log(arrSumm);

// 9.​ Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.

// let numArr = [9, 44, 42, 65, 21, 76, 0, 13];
// let numRevArr = [];

// for (let i = numArr.length - 1; i >= 0; i--) {
//     numRevArr.push(numArr[i]);
// }

// console.log(numRevArr);

// 10.​ Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше
// 10-ти.

// let numArr = [1, 0, -3, 2, 9, 4, 77, 11];
// let numArrSumm = 0;
// let elArrQuantity;

// for (let i = 0; i < numArr.length; i++) {
//     numArrSumm += numArr[i];
//     if (numArrSumm > 10) {
//         elArrQuantity = i + 1;
//         break;
//     }
// }

// console.log(elArrQuantity);

// 11.​ Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(value, elQuantity) {
//     let arr = [];
//     for (let i = 0; i < elQuantity; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(arrayFill("x", 5));
