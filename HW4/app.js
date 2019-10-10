//Занятие 5. Слайд 4.
//1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function firstFunc(arr, fn) {
    return 'New value: ' + fn(arr)
}

function stringFunc(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    let rightString = array.join('');
    return rightString;
}

function numberFunc (array) {
    return array.map((element) => {
        return element *10
    })
}

function userFunc (array) {
    return array.map((user) => {
        return ` ${user.name} is ${user.age}`
    })
}

function invertFunc(array) {
    return array.map((element) => {
        let invertString = '';
        for (let i = element.length - 1; i >= 0; i--) {
            invertString += element[i]
        }
        return invertString;
    })
}


console.log(firstFunc(['my', 'name', 'is', 'Trinity'], stringFunc));
console.log(firstFunc([10, 20, 30], numberFunc));
console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], userFunc));
console.log(firstFunc(['abc', '123'], invertFunc));



//Слайд 5.
//2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
// аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
// callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить
// число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
// массив.

function myEvery(arr, moreThenFive) {
    if (Array.isArray(arr) && typeof moreThenFive === 'function') {
        for(let i = 0; i < arr.length; i++) {
            if (!moreThenFive(arr[i])) {
                return false
            }
        }
        return true
    } else {
        return 'Please write correct data'
    }

}

let arrayNumber = [10,15,8,15,10,15];

function moreThenFive(element) {
    return element > 5
}

console.log(myEvery(arrayNumber, moreThenFive));


//Слайд 7.
//1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arrayOfNumbers = [1,2,3,5,8,9,10];
const infoArrayOfNumbers = arrayOfNumbers.map((number) => {
    let numberOdd = number % 2 !== 0;
    return {
        'digit': number,
        'odd': numberOdd
    }
});

console.log(infoArrayOfNumbers);


//2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
// вернуть false.

const numbersArray = [12, 4, 50, 1, 0, 18, 40];
const findZero = numbersArray.some((number) => {
    return number === 0
});

console.log(findZero);


//3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
// больше 3х букв. Если да - вернуть true

const stringArray = ['yes', 'hello', 'no', 'easycode', 'what'];
const threeLetterWord = stringArray.some((word) => {
    return word.length > 3
});

console.log(threeLetterWord);


//4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
// в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки

const infoOfPosition = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

const sortIndex = infoOfPosition.sort((a,b) => {
    return a.index - b.index;
});

const stringFromIndex = sortIndex.reduce((acc, arrayOfLetters) => {
    return acc + arrayOfLetters.char
}, '');
console.log(stringFromIndex);


//Слайд 10
//1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']]

const dataArray = [ [14, 45], [1], ['a', 'c', 'd'] ];
const sortDataArray = dataArray.sort((a,b) => {
    return a.length - b.length
});

console.log(sortDataArray);

//2. Есть массив объектов:
// [
// {cpu: 'intel', info: {cores:2, сache: 3}},
// {cpu: 'intel', info: {cores:4, сache: 4}},
// {cpu: 'amd', info: {cores:1, сache: 1}},
// {cpu: 'intel', info: {cores:3, сache: 2}},
// {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Отсортировать их по возрастающему количеству ядер (cores).

const infoAboutProc = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];
const sortInfoAboutProc = infoAboutProc.sort((a,b) => {
    return a.info.cores - b.info.cores
});

console.log(sortInfoAboutProc);


//Слайд 11.
//3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть
// все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// let products = [
// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(array, a, b) {
    let productFilter = products.filter((product) => {
        return product.price >= a && product.price <= b
    });
    productFilter.sort((a, b) => {
        return a.price - b.price
    });
    return productFilter
}

console.log(filterCollection(products, 15, 30));
