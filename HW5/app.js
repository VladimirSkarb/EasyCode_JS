//Занятие 9. Слайд 7
//1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 2,
    height: 3,
    getSquare,
};
function getSquare(width, height) {
    return this.width * this.height
}
console.log(rectangle.getSquare())


//2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
// price: 10,
// discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice,
    getPriceWithDiscount,
};

function getPrice(price) {
    return this.price
}

function getPriceWithDiscount(price, discount) {
    return this.price - this.price * parseFloat(this.discount) / 100
}

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());


//3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const objectHeight = {
    height: 10,
    getIncreasedHeight,
};

function getIncreasedHeight(height) {
    return this.height+1
}

console.log(objectHeight.getIncreasedHeight());


//4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
// value: 1,
// double: function () {...},
// plusOne: function () {...},
// minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    number: 1,
    double,
    plusOne,
    minusOne,
};

function double(number) {
    this.number = this.number*2;
    return this
}
function plusOne(number) {
    this.number = this.number+1;
    return this
}
function minusOne(number) {
    this.number = this.number-1;
    return this
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.number);

//Практика
//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.
//(пример вызова есть в конце теории)

function Calculator(a, b) {
    this.read = function () {
        this.a = +prompt('Введите первое число', 0);
        this.b = +prompt('Введите второе число', 0);
    };
    this.sum = function () {
        return this.a + this.b
    };
    this.mul = function () {
        return this.a * this.b
    }
}

let calc = new Calculator();
calc.read();
alert(`Cумма чисел ${calc.a} и ${calc.b} = ${calc.sum()}`);
alert(`Произведение чисел ${calc.a} и ${calc.b} = ${calc.mul()}`);
console.log(calc.sum());
console.log(calc.mul());
