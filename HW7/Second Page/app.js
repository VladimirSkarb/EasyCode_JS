//6. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:
// Условия:
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при
// этом он должен быть всегда выровнен по правому краю.
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой
// то.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th
// которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта
// это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

const map = ["_id", "name", "isActive", "balance"];
const users = [
    {
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": { total: 300 }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": { total: 400 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    }
];
const div = document.querySelector('div.container');
const table = `<table></table>`;
div.insertAdjacentHTML('beforeend', table);
const firstLine = `<tr><th>#</th><th>Name</th><th>Email</th><th>Balance</th></tr>`;
const tableNode = document.querySelector('table');
tableNode.insertAdjacentHTML('beforeend', firstLine);
let array = [];
let sum = 0;
for (let i=0; i<users.length; i++) {
    array.push({name: users[i].name, email: users[i].email, balance: users[i].balance});
    const infoUser = `<tr><th>${i+1}</th><td>${array[i].name}</td>
    <td>${array[i].email}</td><td>${array[i].balance}</td></tr>`;
    tableNode.insertAdjacentHTML('beforeend', infoUser);
    sum += array[i].balance;
}

const sumLine = `<tr><td></td><td></td><td></td><th>Total Balance: ${sum}</th></tr>`;
tableNode.insertAdjacentHTML('beforeend', sumLine);
