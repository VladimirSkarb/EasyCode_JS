// Занятие 2. Слайд 8.

//1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

let phoneObj = {
    product: 'iphone'
};
phoneObj.price = 1000;
phoneObj['currency'] = 'dollar';
phoneObj.detalis = {
    'mode': 'X',
    'color': 'red'
};
console.log(phoneObj);


//1.Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// console.log(‘block’)
// } else if (a === ‘none’) {
// console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно
// значение.

let a = '';
switch (a) {
    case 'block': console.log('block'); break;
    case 'none': console.log('none'); break;
    case 'inline': console.log('inline'); break;
    default: console.log('other');
}


//2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
// оператора.
//2.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let hiddenVar = 'hidden';
hiddenVar = hiddenVar === 'hidden' ? 'visible' : 'hidden';
console.log(hiddenVar);


//2.2 Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
// (использовать краткую запись).

let x = 8;
x === 0 ? x = 1: x < 0 ? x = 'less then zero': x*= 10;
console.log(x);


//2.3 Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
// Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
car.age > 5 ? (console.log('Need Repair'), car.needRepair = true) : car.needRepair = false;
console.log(car);



//Слайд 10.

//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let string = 'i am in the easycode';
let newString = '';
for (let i=0; i<string.length; i++) {
    if (string[i - 1] === ' ' || i === 0) {
        newString += string[i].toUpperCase();
    } else {
        newString += string[i];
    }
}
console.log(newString);


//2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
// становится первой, предпоследняя - второй итд).

let turnString = 'tseb eht ma i';
let rightString = '';
for (let i=1; i <= turnString.length; i++) {
    rightString += turnString[turnString.length - i];
}
console.log(rightString);


//3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
// Использовать for.

let num = 10;
let factorial = 1;
for (let i=0; i<num; i++) {
    factorial *= num - i;
}
console.log(factorial);


//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = 'JavaScript is a pretty good language';
let newStr = '';
for (let i=0; i<str.length; i++) {
    if (str[i - 1] === ' ') {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i];
    }
    newStr = newStr.replace(/\s/g, '');
}
console.log(newStr);


//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2,
// 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of arrayOfNumber) {
    if (value % 2 === 0) {continue;}
    console.log(value);
}


//6. Дан объект:
// let list = {
// name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
// Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};
for (let key in list) {
    if (typeof (list[key]) === 'string') {
        list[key] = list[key].toUpperCase()
    }
    console.log(list[key]);
}



//Дополнительные задания


//Найти сумму четных цифр числа

let number = 20;
let sumEvenNumb = 0;
for (let i=0; i<number; i++) {
    if (i % 2 === 0) {
        sumEvenNumb += i;
    }
}
console.log(sumEvenNumb);


//Посчитать четные и нечетные цифры числа

let numb = 10;
let sumEvenNumber = 0;
let sumOddNumber = 0;
for (let i=0; i<numb; i++) {
    if (i % 2 === 0) {
        sumEvenNumber += i;
    } else (
        sumOddNumber += i
    )
}
console.log(sumEvenNumber);
console.log(sumOddNumber);
