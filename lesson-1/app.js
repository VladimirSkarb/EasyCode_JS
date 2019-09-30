// Занятие 1. Слайд 10

let string = 'some test string';

//1. Получить первую и последнюю буквы строки
let first = string[0];
let last = string[string.length - 1];
let firstLast = `${first} ${last}`;

//2. Сделать первую и последнюю буквы в верхнем регистре
let upperCaseLetter = `${first.toUpperCase()}${string.substr(1, string.length - 2)}${last.toUpperCase()}`;

//3. Найти положение слова ‘string’ в строке
let findString = 'string';
let findIndex = string.indexOf(findString);
let findLength = findString.length;
let posWord = `${findIndex} ${findLength + findIndex}`;

//4. Найти положение второго пробела (“вручную” ничего не считать)
let secondSpace = string.lastIndexOf(' ');

//5. Получить строку с 5-го символа длиной 4 буквы
let fourLetter = string.substr(5, 4);

//6. Получить строку с 5-го по 9-й символы
let fiveToNine = string.slice(5, 10);

//7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
let withoutLastLetter = string.slice(0, -6);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20;
let b = 16;
string = a.toString() + b.toString();



// Занятие 1. Слайд 13

//1. Получить число pi из Math и округлить его до 2-х знаков после точки
let numberPi = Number(Math.PI.toFixed(2)) ;

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12,
// 51, 12, 13, 51
let minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
let randomNumber = Number(Math.random().toFixed(2));


//b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let integer = Math.floor(Math.random() * 10 +1);

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let sum = 0.6 + 0.7;
sum = parseFloat(sum.toFixed(1));

//5. Получить число из строки ‘100$’
let num = parseFloat('100$');



// Занятие 2. Слайд 12

// Чему равно а, почему?
// let a = 0 || 'string'; // ‘string’; 0 - false, ‘string’ - true
// let a = 1 && 'string'; // 'string'; 1 - tru, 'string' - true - возвращает последнее true;
// let a = null || 25; // 25; null - false, 25 - true.
// let a = null && 25; // null; null - false, при не соблюдении условия возвращается первый false, 25 - true;
// let a = null || 0 || 35; // 35; null - false, 0 - false, 35 - true, при выполнении условия, возвращается последний true;
// let a = null && 0 && 35; // null; null - false, при не выполнении условия, возвращается первый false, 0 - false, 35 - true
// Что отобразится в консоли. Почему?
// 12 + 14 + '12' // '2612'; Сначала произошло сложение чисел, а при сложении со строкой произошла конкатинация и преобразование к строке.
// 3 + 2 - '1' // 4; Произошло сложение чисел, а при вычитании строка преобразуется в число, если внутри нее числовое значение.
// '3' + 2 - 1 // 31; Сначала произошло вычитание, а после конкатинация и преобазование к строке.
// true + 2 // 3; true = 1, а 1+2=3.
// +'10' + 1 // 11; Унарный оператор '+' преобразовывает строку в число. После чего выполняется сложение.
// undefined + 2 // NaN; undefined становится NaN при преобразовании в число.
// null + 5 // 5; null при преобразовании в число, становится 0.
// true + undefined // NaN; undefined становится NaN при преобразовании в число.


// Занятие 2. Слайд 16

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let hiddenVar = 'hidden';
if (hiddenVar === 'hidden') {
    hiddenVar = 'visible';
} else {
    hiddenVar = 'hidden';
}


//2.Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
// (использовать краткую запись).

let x = 8;
if (x === 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else {
    x *= 10;
}


//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
// Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false
}


//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать
// поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
// внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
// расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
if (item.discount && item.discount !== '') {
    item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount) / 100 + '$';
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}


//5. Дан следующий код:
// let product = {
// name: “Яблоко”,
// price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной
// цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: 'Яблоко',
    price: '15$'
};
let min = 10;
let max = 20;
if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('Product not found');
}
