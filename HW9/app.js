//Занятие 16. Слайд 21
//1. Есть класс Planet
// function Planet(name) {
// this.name = name;
// this.getName = function () {
// return 'Planet name is ' + this.name;
// }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’
class Planet {
    constructor(name) {
        this.name = name;
    }
    getName () {
        return 'Planet name is ' + this.name;
    }
}

const milkyWay = new Planet('earth');
console.log(milkyWay.getName());

class PlanetWithSatellite extends Planet{
    constructor(name, satelliteName) {
        super(name);
        this.satelliteName = satelliteName
    }
    getName() {
        return super.getName() + '. The satellite is ' + this.satelliteName;
    }
}

const satellite = new PlanetWithSatellite('earth', 'moon');
console.log(satellite.getName());


//2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество
// этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество
// этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество
// этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)
class Building {
    constructor(name, countOfFloors) {
        this.name = name;
        this.countOfFloors = countOfFloors;
    }
    setCountOfFloors(value) {
        this.countOfFloors = value;
    }
    getCountOfFloors() {
        return this.countOfFloors;
    }
}

const build = new Building('жилстрой', 12);
build.setCountOfFloors(13);
console.log(build.getCountOfFloors());

class House extends Building{
    constructor(name, countOfFloors, countOfFlats) {
        super (name, countOfFloors);
        this.countOfFlats = countOfFlats
    }
    getCountOfFloors() {
        return {
            floors: this.countOfFloors,
            flats: this.countOfFloors * this.countOfFlats,
        }
    }
}

class ShoppingCenter extends Building{
    constructor(name, countOfFloors, countOfMagazine) {
        super (name, countOfFloors);
        this.countOfMagazine = countOfMagazine
    }
    getCountOfMagazine() {
        return {
            floors: this.countOfFloors,
            magazine: this.countOfFloors * this.countOfMagazine,
        }
    }
}

const houseForLive = new House('дом1', 3, 2);
const shop = new ShoppingCenter('Торговый центр', 3, 10);

console.log(houseForLive.getCountOfFloors());
console.log(shop.getCountOfMagazine());


//3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
// (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
// экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод
// “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price){
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInformation = function () {
    return `Name: ${this.name}; Price: ${this.price}`;
};

const furn = new Furniture('sofa', 1000);
console.log(furn.getInformation());

function OfficeFurniture (name, price, computerdesk) {
    Furniture.call(this, name, price);
    this.computerdesk = computerdesk;
    this.getInformation = function () {
        return `Name: ${this.name}; Price: ${this.price}; Computer Desk: ${this.computerdesk}`
    }
}

function HomeFurniture (name, price, color) {
    Furniture.call(this, name, price);
    this.color = color;
    this.getInformation = function () {
        return `Name: ${this.name}; Price: ${this.price}; Color: ${this.color}`
    }
}
const officeFurn = new OfficeFurniture('table', 1000, 'true');
console.log(officeFurn.getInformation());
const homeFurn = new HomeFurniture('chair', 1000, 'black');
console.log(homeFurn.getInformation());


//4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом
// “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть
// объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”:
// класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату
// (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о
// дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, date) {
    this.name = name;
    this.date = date;
}

User.prototype.getInfo = function () {
    return `Name: ${this.name}; Date: ${this.date}`
};
const infoUser = new User('Vladimir', '26.10.2019');
console.log(infoUser.getInfo());

function Admin(name, date, superAdmin) {
    User.call(this, name, date);
    this._superAdmin = superAdmin;
}
Admin.prototype.getInfo = function () {
    return `Name: ${this.name}; Date: ${this.date}; Super Admin: ${this._superAdmin}`
};

function Guest(name, date, validDate) {
    User.call(this, name, date);
    this.validDate = validDate;
}
Guest.prototype.getInfo = function () {
    return `Name: ${this.name}; Date: ${this.date}; Validity: ${this.validDate}`
};

const adminSuper = new Admin('Ivan', '26.10.2019', true);
const validity = new Guest('Igor', '26.10.2019', '06.11.2019');
console.log(adminSuper.getInfo());
console.log(validity.getInfo());
