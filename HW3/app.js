//Занятие 4. Слайд 20;

//1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их
// произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(number) {
    let result = 1;
    if (arguments.length === 0) {
        return 0
    } else {
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    }
}

console.log(multiply(1,2,3));


//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // “tset”.

function turnString(string) {
    let resultString = '';
    for (let i=1; i<=string.length; i++) {
        resultString += string[string.length - i];
    }
    return resultString
}

console.log(turnString('tset'));


//3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFromText(string) {
    let strUnicode = '';
    for (let i=0; i<string.length; i++) {
        strUnicode += string.charCodeAt(i) + ' ';
    }
    return strUnicode
}

console.log(getCodeStringFromText('hello'));


//4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
// число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
// переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
// ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
// числа.

function guessTheNumber(number) {
    let randomNumber = Math.floor(Math.random() * 10 +1);
    if (number >= 1 && number <= 10) {
        if (number === randomNumber) {
            return 'Вы выиграли';
        } else {
            return `Вы не угадали! Ваше число ${number}, а выпало число ${randomNumber}`;
        }
    } else {
        return 'Введите число от 1 до 10';
    }
}

console.log(guessTheNumber(10));


//5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
// n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(number) {
    let arrayOfNumbers = [];
    for (let i=1;i<=number;i++) {
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers
}

console.log(getArray(10));


//6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
// элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(inputArray) {
    let newArray = inputArray.concat(inputArray);
    return newArray
}

console.log(doubleArray([1,2,3]));


//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
// массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection(inputArray) {
    let withoutFirstEl = [];
    for (let element of arguments) {
        element.splice(0, 1);
        withoutFirstEl.push(element);
    }
    return withoutFirstEl
}

console.log(changeCollection([1,2,3,4], ['a','b','c','d']));


//8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
// значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
// массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let user = [{
    name: 'Denis',
    age: '29',
    gender: 'male'
}, {
    name: 'Ivan',
    age: '20',
    gender: 'male'
}];

function funcGetUsers(user, key, value) {
    if (key === undefined || value === undefined)
        return 'Ошибка';
    let sort = [];
    for (let i=0; i<user.length; i++) {
        if (user[i][key] === value) {
            sort.push(user[i])
        }
    }
    return sort
}

console.log(funcGetUsers(user, 'gender', 'male'));


//1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

function negPosArray(inputArray) {
    let positivNumbers = 0;
    let negativNumbers = 0;
    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i] < 0) {
            negativNumbers += 1;
        } else {
            positivNumbers += 1;
        }
    }
    return `Количество отрицательных чисел ${negativNumbers}; Количество положительных чисел ${positivNumbers}`
}
console.log(negPosArray([-2, 3, 4, -5, -6, 2, 4, -56]));


// 2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function getArrayInfo(inputArray) {
    let infoOfArray = [];
    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i] % 2 === 0) {
            infoOfArray.push({'digit': inputArray[i], 'odd': false});
        } else {
            infoOfArray.push({'digit': inputArray[i], 'odd': true});
        }
    }
    return infoOfArray
}

console.log(getArrayInfo([1,2,3,5,8,9,10]));
