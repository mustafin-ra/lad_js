// 1.​ Преобразовать строку в массив слов. Напишите функцию
// stringToarray(str), которая преобразует строку в массив слов.

function stringToarray(str) {
    str = str.trim();
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "\n") {
            //идем по строке до разделяющего символа
            strArray.push(str.slice(0, i)); //добавляем в массив строку сначала до разделяющего символа
            str = str.slice(i); //создаем новую строку с позиции разделения
            str = str.trim();
            i = 0; //обнуляем счетчик, т.к. будем идти по новой строке сначала
        } else if (i === str.length - 1) {
            //если последний элемент строки
            strArray.push(str.slice(0));
        }
    }
    return strArray;
}
console.log(stringToarray("Привет мой    мир, довольно сложно    "));

// 2.​ Напишите функцию deleteСharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.

deleteСharacters = (str, length) =>
    str.length <= length ? str : str.substr(0, length);

console.log(
    deleteСharacters(
        "Приветствую мой    мир, довольно сложно    ",
        7,
    ),
);

// 3.​ Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.

function insertDash(str) {
    let strArray = stringToarray(str);
    let newStr = "";
    for (let i = 0; i < strArray.length; i++) {
        if (i === strArray.length - 1) {
            newStr += `${strArray[i].toUpperCase()}`; //эта проверка нужна для последнего слова, чтобы после него не ставить тире
        } else {
            newStr += `${strArray[i].toUpperCase()} - `;
        }
    }
    return newStr;
}
console.log(
    insertDash(
        "При этом все символы строки необходимо перевести в верхний регистр",
    ),
);

// 4.​ Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.

toUpperFirstSymbol = (str = "пустая строка") =>
    str[0].toUpperCase() + str.slice(1);

console.log(
    toUpperFirstSymbol(
        "Напишите функцию, которая принимает строку в качестве",
    ),
);

// 5.​ Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.

function capitalize(str) {
    strArr = stringToarray(str);
    newStr = "";
    for (let i = 0; i < strArr.length; i++) {
        newStr +=
            strArr[i][0].toUpperCase() + strArr[i].slice(1) + " ";
    }
    return newStr;
}

console.log(
    capitalize(
        "напишите функцию, которая принимает строку в качестве аргумента",
    ),
);

// 6.​ Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».

function changeRegister(str) {
    newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr +=
            str[i].toLowerCase() != str[i]
                ? str[i].toLowerCase()
                : str[i].toUpperCase();
    }
    return newStr;
}

console.log(changeRegister("КаЖдЫй ОхОтНиК"));

// 7.​ Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.

function removeChar(str) {
    let num_letterList =
        "0 1 2 3 4 5 6 7 8 9 Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz";
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (num_letterList.includes(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(
    removeChar(
        "435очищенную от    всех+++=== не буквенно-цифровых символов....@@",
    ),
);

// 8.​ Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.

function zeros(num, len) {
    let newNumStr;

    if (num >= 0) {
        newNumStr = "+" + num;
    } else {
        newNumStr = "" + num; //num.toString()
    }

    for (let i = newNumStr.length + 1; i <= len; i++) {
        newNumStr += 0;
    }
    return newNumStr;
}

console.log(zeros(-54, 7));

// Если на вход подаем положительное число, например 5, и длина 3, то результат должен быть +05 - итого 3 знака.
// Если на вход подаем отрицательное число, например -5, и длина 3, то результат должен быть -03 (я так понимаю
// что это опечатка, т.е. должно быть -05) - тоже три знака.
// В зависимости от положительности числа нужно еще определить знак, плюс или минус

function zeros2(num, len) {
    let newNumStr;
    let nullStr = "";

    if (num >= 0) {
        newNumStr = "+" + num;
    } else {
        newNumStr = "" + num; //num.toString()
    }

    for (let i = newNumStr.length + 1; i <= len; i++) {
        nullStr += 0;
    }
    return newNumStr[0] + nullStr + newNumStr.slice(1);
}

console.log(zeros2(-54, 7));

// 9.​ Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.

function comparison(str1, str2) {
    if (str1.toUpperCase() === str2.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(
    comparison(
        "Напишите функцию comparison(str1, str2), которая сравнивает",
        "Напишите Функцию comparison(str1, str2), Которая сравнивает",
    ),
);
// 10.​ Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.

function insensitiveSearch(str1, str2) {
    return str1.toLowerCase().indexOf(str2.toLowerCase());
}

console.log(
    insensitiveSearch(
        "Напишите функцию, которая осуществляет поиск подстроки",
        "которая",
    ),
);

// 11.​ Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.

// Буду использовать две ранее написанные функции
// stringToarray(),  преобразует строку в массив слов
// toUpperFirstSymbol() принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего
// регистра в верхний.

function initCap(str) {
    let arrStr = stringToarray(str);
    let newStr = "";
    for (let i = 0; i < arrStr.length; i++) {
        newStr += toUpperFirstSymbol(arrStr[i]);
    }
    return newStr;
}
console.log(
    initCap(
        "Буду использовать две ранее написанные функции из задачи",
    ),
);

// 12.​ Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.

function initSnake(str) {
    let arrStr = stringToarray(str);
    let newStr = "";
    for (let i = 0; i < arrStr.length; i++) {
        newStr += arrStr[i].toLowerCase() + "_";
    }
    return newStr.slice(0, newStr.length - 1);
}
console.log(
    initSnake(
        "Буду использовать две ранее написанные функции из задачи",
    ),
);

// 13.​ Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.

function repeatStr(str, n) {
    newStr = "";
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(repeatStr("строку повторяемую", 1));

// 14.​ Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.

function path(pathname) {
    for (let i = pathname.length - 1; i >= 0; i--) {
        if (pathname[i] === "\\") {
            return pathname.slice(i + 1);
        }
    }
}

console.log(path("c:\\distrib\\programming\\vscode.exe"));

// 15.​ Создайте функцию endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.

function endsWith(str, str1) {
    if (str.indexOf(str1, str.length - str1.length) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(endsWith("строку повторяемую", "повторяемую"));

// 16.​ Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра pos.

// буду считать что pos принимает два значения:
// 0 возвращает часть строки, расположенную до
// 1 возвращает часть строки, расположенную после

function getSubstr(str, char, pos) {
    if (str.includes(char)) {
        if (pos === 0) {
            return str.slice(0, str.indexOf(char));
        } else if (pos === 1) {
            return str.slice(str.indexOf(char) + 1);
        }
    } else {
        return `Нет символа "${char}" в строке "${str}"`;
    }
}

console.log(getSubstr("строку повторяемую", "а", 1));

// 17.​ Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По
// умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos = 0) {
    return str.slice(0, pos) + substr + str.slice(pos);
}

console.log(insert("строку повторяемую", "подстрока", 2));

// 18.​ Напишите функцию limitStr(str, n, symb), которая обрезает
// строку, если она длиннее указанного количества символов n.Усеченная строка должна заканчиваться троеточием «...»
// (если не задан параметр symb) или заданным символом symb.

limitStr = (str, n, symb = "...") =>
    str.length > n ? str.slice(0, n) + symb : str;

console.log(
    limitStr(
        "если она длиннее указанного количества символов n.Усеченная строка должна",
        7,
        "?",
    ),
);

// 19.​ Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.

function count(str, stringsearch) {
    let pos = 0;
    let stringsearchCount = 0;
    while (str.indexOf(stringsearch, pos) != -1) {
        pos = str.indexOf(stringsearch, pos) + 1;
        stringsearchCount++;
    }
    return stringsearchCount;
}

console.log(
    count(
        "если она длиннее если указанного количества если символов n.Усеченная строка должна если",
        "если",
    ),
);

// 20.​ Напишите функцию strip(str), которая удаляет все лишние
// пробелы из строки str.

function strip(str) {
    str = str.trim();
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === " " && str[i + 1] === " ") {
            str = str.slice(0, i + 1) + str.slice(i + 2).trim();
        }
    }
    return str;
}

console.log(
    strip(
        "   Напишите          функцию strip(str), которая           удаляет все лишние                пробелы из строки str .             ",
    ),
);

// 21.​ Напишите функцию cutString(str, n), которая удаляет лишние
// слова из строки str, оставив в ней n слов.

function cutString(str, n) {
    let stArr = stringToarray(str);
    let newStr = "";
    for (let i = 0; i < n; i++) {
        newStr += stArr[i] + " ";
    }
    return newStr;
}

console.log(
    cutString(
        "Напишите функцию которая удаляет лишние слова из строки str",
        4,
    ),
);

// 22.​ Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.

//буду считать что word это массив слов

function findWord(word, str) {
    for (i in word) {
        if (!str.includes(word[i])) {
            return false;
        }
    }
    return true;
}

let word = ["лето", "солнце", "море", "счастье"];

console.log(
    findWord(
        word,
        "В это лето солнце на море светило ярко, дарило счастье людям",
    ),
);
