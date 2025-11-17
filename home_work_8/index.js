// 1.​ Что выведет функция?
// function f() {
//     alert(this);
// }
// let user = {
//     g: f.bind(this),
// };
// user.g();

// вернёт  Window т.к. мы в качестве контекста через метод  bind передаем this ,
// который в этот момент является глобальным объектом, т.к. this вне тела функции ссылается на глобальный объект
// и при вызове alert this будет глобальным объектом

// 2.​ Можем ли мы изменить this дополнительным связыванием?
// function f() {
//     alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

//нет т.к. привязку bind изменить нельзя

// 3.​ В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
//     alert(this.name);
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
//     name: "Вася",
// });

//свойство sayHi.test = 5 не изменится, т.к. сама функция и ее свойства не меняются при использовании bind

// 4.​ Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "Вася",
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };
// // askPassword(user.loginOk, user.loginFail); // я так понял что в функцию мы передаем копию функции user.loginOk которая не имеет своего контекста
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //вот так работает т.е. нужно передать функции в контексте объекта user

// 5.​ Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "John",
//     login(result) {
//         alert(
//             this.name + (result ? " logged in" : " failed to log in"),
//         );
//     },
// };
// // askPassword(?,?);
// askPassword(
//     user.login.bind(user, true),
//     user.login.bind(user, false),
// );

// 6.​ Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = { value: "Привет" };
// function func(surname, name) {
//     alert(this.value + ", " + surname + " " + name);
// }
// //Тут напишите конструкцию с bind()
// let funcBD = func.bind(elem);
// funcBD("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// funcBD("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 7.​ Есть функция которая складывает три числа.Выполните
// каррирование.
// const sum = (a, b, c) => a + b + c

// let sumCar = (a) => (b) => (c) => a + b + c;
// console.log(sumCar(7)(4)(8));

// 8.​ Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.

// function timer(start, stop) {
//     return () => {
//         while (stop > start) {
//             console.log(stop);
//             stop--;
//         }
//         console.log(
//             `Значение таймера достигло ${stop}, таймер завершил работу`,
//         );
//     };
// }

// let timer1 = timer(1, 10);
// timer1();

// let timer2 = timer(4, 7);
// timer2();
