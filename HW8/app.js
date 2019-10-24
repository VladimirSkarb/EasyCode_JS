
//Занятие 10, Слайд 10
//1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(inputFirstValue = 0) {
    return function (inputSecondValue = 0) {
        return  inputFirstValue - inputSecondValue;
    }
}
let result = minus(12)(6);
console.log(result);


//2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между
// вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(firstInputValue) {
    let firstValue = firstInputValue;
    return function (secondInputValue) {
        const secondValue = secondInputValue;
        let res = firstValue*secondValue;
        firstValue = res;
        return res
    }
}
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


//3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const str = (function () {
    let inputStr = '';
    function setString(value = '') {
        inputStr = String(value);
        return inputStr
    }

    function getString() {
        return inputStr
    }

    function getLengthString() {
        const length = inputStr.length;
        return length
    }

    function getTurnString() {
        let turnString = '';
        for (let i=1; i <= inputStr.length; i++) {
            turnString += inputStr[inputStr.length - i];
        } return turnString
    }

    return {
        setString: setString,
        getString: getString,
        getLengthString: getLengthString,
        getTurnString: getTurnString,
    }
}());

str.setString('abcde');
console.log(str.getString());
console.log(str.getLengthString());
console.log(str.getTurnString());


//4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и
// возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно
// храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calc = (function () {
    let value = 0;
    function setValue(inputValue) {
        value = inputValue;
        return this
    }

    function getSum(inputSumValue) {
        value += inputSumValue;
        return this
    }

    function getMinus(inputMinusValue) {
        value -= inputMinusValue;
        return this
    }

    function getMultiply(inputMultiValue) {
        value *= inputMultiValue;
        return this
    }

    function getDivide(inputDivideValue) {
        value /= inputDivideValue;
        return this
    }

    function getToThePower(inputPowerValue) {
        value = Math.pow(value, inputPowerValue);
        return this
    }

    function finalValue() {
        return console.log(value.toFixed(2));
    }

    return {
        setValue: setValue,
        getSum: getSum,
        getMinus: getMinus,
        getMultiply: getMultiply,
        getDivide: getDivide,
        getToThePower: getToThePower,
        finalValue: finalValue,
    }
}());

calc.setValue(10).getSum(15).getMinus(2).getDivide(5).getToThePower(8).finalValue();
