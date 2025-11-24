// 1.​ Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         console.log(
//             `Зарплата ${this.name} ${this.surname}:`,
//             this.rate * this.days,
//         );
//     }
//     getFullName() {
//         return this.name + ` ` + this.surname;
//     }
// }

// let worker1 = new Worker("Renat", "Mustafin", 1000, 15);
// worker1.getSalary();
// console.log(worker1.getFullName());

// 2.​ Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workerCount) {
//         super(name, surname, rate, days),
//             (this.workerCount = workerCount);
//     }
//     getSalary() {
//         console.log(
//             `Зарплата ${this.name} ${this.surname}:`,
//             this.rate * this.days * this.workerCount,
//         );
//     }
// }

// let boss1 = new Boss("Ivan", "Trotskiy", 2000, 15, 6);
// boss1.getSalary();
// console.log(boss1.getFullName());

// 3.​ Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         console.log(
//             `Зарплата ${this.name} ${this.surname}:`,
//             this.rate * this.days,
//         );
//     }
//     getFullName() {
//         return this.name + ` ` + this.surname;
//     }
//     get rate() {
//         return this._rate;
//     }
//     set rate(value) {
//         this._rate = value;
//     }
//     get days() {
//         return this._days;
//     }
//     set days(value) {
//         this._days = value;
//     }
// }

// let worker1 = new Worker("Renat", "Mustafin", 1000, 15);
// worker1.rate = 1700;
// worker1.days = 22;
// console.log(worker1.rate, worker1.days);

// 4.​ Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

// class MyString {
//     reverse(str) {
//         let newStr = "";
//         for (let i = str.length - 1; i >= 0; i--) {
//             newStr += str[i];
//         }
//         return newStr;
//     }
//     ucFirst(str) {
//         str = str.trim();
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     ucWords(str) {
//         let strArr = str.split(" ");
//         let newStr = "";
//         for (let e of strArr) {
//             newStr += this.ucFirst(e) + " ";
//         }
//         return newStr;
//     }
// }

// let str1 = new MyString();
// console.log(
//     str1.reverse(
//         "который параметром принимает строку, а возвращает ее в перевернутом виде",
//     ),
// );
// console.log(str1.ucFirst("сделав ее первую букву заглавной"));
// console.log(
//     str1.ucWords("делает заглавной первую букву каждого слова"),
// );

// 5.​ Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// class Validator {
//     isEmail(value) {
//         const regex =
//             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return regex.test(value);
//     }
//     isDomain(value) {
//         const regex = /^((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,})/;
//         return regex.test(value);
//     }
//     isDate(value) {
//         const regex =
//             /^\d{2}[-./]\d{2}[-./]\d{4}$/; /*проверяет, что строка соответствует формату XX/XX/XXXX или XX.XX.XXXX*/
//         return regex.test(value);
//     }
//     isPhone(value) {
//         const regex =
//             /^((\+7|8)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
//         return regex.test(value);
//     }
// }

// let validator1 = new Validator();
// console.log(validator1.isEmail("mustafin.ra@mail.ru"));
// console.log(validator1.isDomain("unn.com"));
// console.log(validator1.isDate("24/11/2025"));
// console.log(validator1.isPhone("89200319913"));

// 6.​ Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.

// class User {
//     constructor(name, surname, year) {
//         this.name = name;
//         this.surname = surname;
//         this.year = year;
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname, year);
//     }
//     getCourse() {
//         let today = new Date();
//         let currentYear = today.getFullYear();
//         console.log(currentYear - this.year);
//     }
// }

// let student1 = new Student("Юрий", "Гагарин", 2020);
// student1.getFullName();
// student1.getCourse();
