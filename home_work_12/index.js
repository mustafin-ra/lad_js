// 1. ​
// console.log("start");//ск
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);//ск
// });
// console.log("end");//ск

// Порядок:
// 1 console.log("start");  выполняется синхронный код
// 2 console.log(1); при создании промиса выполняется функция промиса
// 3 console.log("end"); выполняется синхронный код

// 2. ​
// console.log("start");//ск
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);//ск
//     resolve(2);
// });
// promise1.then((res) => {//омиз
//     console.log(res);
// });
// console.log("end");//ск

// Порядок:
// 1 console.log("start"); выполняется синхронный код
// 2 console.log(1); при создании промиса выполняется функция промиса
//  * console.log(res); Event Loop помещает в очередь микрозадач коллбэк промиса, в момент когда был вызван коллбэк
// 3 console.log("end"); выполняется синхронный код
// 4 console.log(res); 2 выполняется микрозадача т.е. коллбэк промиса

// 3.​
// console.log("start"); //ск
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1); //ск
//     resolve(2);
//     console.log(3); //ск
// });
// promise1.then((res) => {
//     //омиз
//     console.log(res);
// });
// console.log("end"); //ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
// 2 console.log(1);//при создании промиса выполняется функция промиса
//   * console.log(res);//Event Loop помещает в очередь микрозадач коллбэк промиса, в момент когда был вызван коллбэк
// 3 console.log(3);//при создании промиса выполняется функция промиса
// 4 console.log("end");//выполняется синхронный код
// 5 console.log(res);//2 выполняется микрозадача т.е. коллбэк промиса

// ​4.​
// console.log("start"); //ск
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1); //ск
// });
// promise1.then((res) => {
//     //в омиз не попал, т.к. коллбэк не был вызван
//     console.log(2);
// });
// console.log("end"); //ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
// 2 console.log(1);//выполняется синхронный код
// 3 console.log("end");//выполняется синхронный код

// 5.​
// console.log("start"); //ск
// const fn = () =>
//     new Promise((resolve, reject) => {
//         console.log(1); //ск
//         resolve("success");
//     });
// console.log("middle");//ск
// fn().then((res) => {
//     //омиз
//     console.log(res);
// });
// console.log("end"); //ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
// 2 console.log("middle");//выполняется синхронный код
// 3 console.log(1);//выполняется синхронный код в момент времени вызова функции в теле которой создается промис содержащий функцию
//  *Event Loop помещает в очередь микрозадач коллбэк промиса, в момент вызова коллбэка
// 4 console.log("end");//выполняется синхронный код
// 5 console.log(res);//"success" выполняется микрозадача т.е. коллбэк промиса

// ​6.​
// console.log("start");//ск
// Promise.resolve(1).then((res) => {//омиз
//     console.log(res);
// });
// Promise.resolve(2).then((res) => {//омиз
//     console.log(res);
// });
// console.log("end");//ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
//  *Event Loop помещает в очередь микрозадач коллбэк первого промиса
//  *Event Loop помещает в очередь микрозадач коллбэк второго промиса
// 2 console.log("end");//выполняется синхронный код
// 3 console.log(res);//1 выполняется первая микрозадача помещенная в очередь т.е. коллбэк промиса
// 4 console.log(res);//2 выполняется вторая микрозадача помещенная в очередь т.е. коллбэк промиса

// 7.​
// console.log("start");//ск
// setTimeout(() => {//омаз
//     console.log("setTimeout");
// });
// Promise.resolve().then(() => {//омиз
//     console.log("resolve");
// });
// console.log("end");//ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
//  *Event Loop помещает в очередь макрозадач setTimeout
//  *Event Loop помещает в очередь микрозадач коллбэк промиса
// 2 console.log("end");//выполняется синхронный код
// 3 console.log("resolve");//выполняется очередь микрозадач т.е. одна микрозадача коллбэк промиса
// 4 console.log("setTimeout");//выполняется очередь макрозадач т.е. одна макрозадача setTimeout

// 8.​
// const promise = new Promise((resolve, reject) => {
//     console.log(1); //ск
//     setTimeout(() => {
//         //омаз
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2); //ск
// });
// promise.then((res) => {
//     //омиз
//     console.log(res);
// });
// console.log(4); //ск

// Порядок:
// 1 console.log(1);//при создании промиса выполняются функции промиса
//  *Event Loop помещает в очередь макрозадач setTimeout
// 2 console.log(2);//выполняется следующая синхронная функция промиса
// 3 console.log(4);//выполняется синхронный код
// 4 *на текущий момент очередь микрозадач пустая, идем к очереди макрозадач, в ней setTimeout
// 4.1 console.log("timerStart");//первая синхронная функция макрозадачи setTimeout
// 4.2 *Event Loop помещает в очередь микрозадач коллбэк промиса т.е. resolve("success");
// 4.3 console.log("timerEnd");//вторая синхронная функция макрозадачи setTimeout
// 4.4 console.log(res);//"success" выполняется очередь микрозадач т.е. одна микрозадача коллбэк промиса

// 9.​
// const timer1 = setTimeout(() => {//омаз
//     console.log("timer1");//ск
//     const promise1 = Promise.resolve().then(() => {////омиз
//         console.log("promise1");
//     });
// }, 0);
// const timer2 = setTimeout(() => {//омаз
//     console.log("timer2");
// }, 0);

// Порядок:
//  *Event Loop помещает в очередь макрозадач timer1 setTimeout
//  *Event Loop помещает в очередь макрозадач timer2 setTimeout
// 1 console.log("timer1");//выполняется блок первой макрозадачи
//  *Event Loop помещает коллбэк промиса в очередь микрозадач на этапе вызова коллбэка и сразу выполняется на этапе обработки then ..
// 2 console.log("promise1");//.. и сразу выполняется на этапе обработки then
// 3 console.log("timer2");//выполняется блок второй макрозадачи

// 10.​
// console.log("start");//ск
// const promise1 = Promise.resolve().then(() => {//омиз
//     console.log("promise1");
//     const timer2 = setTimeout(() => {//омаз
//         console.log("timer2");
//     }, 0);
// });
// const timer1 = setTimeout(() => {//омаз
//     console.log("timer1");
//     const promise2 = Promise.resolve().then(() => {//омиз
//         console.log("promise2");
//     });
// }, 0);
// console.log("end");//ск

// Порядок:
// 1 console.log("start");//выполняется синхронный код
//  *Event Loop помещает коллбэк promise1 в очередь микрозадач
//  *Event Loop помещает timer1 в очередь макрозадач
// 2 console.log("end");//выполняется синхронный код
// 3 console.log("promise1");//выполняется функция из обработчика коллбэка первой микрозадачи
//   *Event Loop помещает timer2 в очередь макрозадач
// 4 console.log("timer1");//выполняется блок асинхронной функции из очереди макрозадач
//   *Event Loop помещает коллбэк promise2 в очередь микрозадач
// 5 console.log("promise2");//выполняется функция из обработчика коллбэка первой микрозадачи
// 6 console.log("timer2");//выполняется блок асинхронной функции из очереди макрозадач

let userAge;
