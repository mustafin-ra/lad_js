// 1.​ Вывести в терминал строку “Hello World!”
console.log("Hello World");

// 2.​ Создать переменную для каждого типа данных
let myStr = "string";
let myNumber = 11;
let myNull = null;
let myUndefined;
let myBoolean = true;
let mySymbol = Symbol("id");
let myBigInt = 645673545252436547n;
let myObject = {
    name: "Renat",
    age: 41,
};

// 3.​ Вывести в консоль редактора кода созданные переменные
console.log(
    myStr,
    myNumber,
    myNull,
    myUndefined,
    myBoolean,
    mySymbol,
    myBigInt,
    myObject,
);

// 4.​ Вывести ее тип через оператор typeof и функцию typeof
console.log(
    typeof myStr,
    typeof myNumber,
    typeof myNull,
    typeof myUndefined,
    typeof myBoolean,
    typeof mySymbol,
    typeof myBigInt,
    typeof myObject,
);
console.log(
    typeof myStr,
    typeof myNumber,
    typeof myNull,
    typeof myUndefined,
    typeof myBoolean,
    typeof mySymbol,
    typeof myBigInt,
    typeof myObject,
);
console.log(typeof (myStr + 5)); //string
console.log(typeof (myStr - 5)); //number

// 5.​ Попробовать изменить переменную объявленную через const
// const myConstNumber = 7;
// myConstNumber=9; //ошибка

// 6.​ Попробовать изменить переменную с типом object
// объявленную через const
// const myObject2={
//     name:"Renat",
//     age:41,
// };
// myObject2={}; //ошибка

// 7.​ Попробовать изменить переменную с типом object
// объявленную через let
let myObject3 = {
    name: "Renat",
    age: 41,
};
myObject3 = {};
console.log(myObject3); //{}

// 8.​ Попробовать изменить переменную с типом object
// объявленную через var
var myObject4 = {
    name: "Renat",
    age: 41,
};
myObject4 = {};
console.log(myObject4); //{}
