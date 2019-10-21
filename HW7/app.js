//Занятие 7. Слайд 6
//1. Найти параграф и получить его текстовое содержимое (только текст!)
const textInP = document.querySelector('p');
console.log(textInP.textContent);

//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function infoEl(element) {
    let nodeEl = document.querySelector(element);
    let type = nodeEl.nodeType;
    let name = nodeEl.nodeName;
    let child = 1;
    if (nodeEl.childNodes.length > 0) {
        child = nodeEl.childNodes.length;
    } else {
        child = 0
    }
    return {type, name, child};
}
console.log(infoEl('ul'));

//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
const allLinks = document.querySelectorAll('a');
let arr = [];
allLinks.forEach((node) => {
    if (node.closest('ul')) {
        arr.push(node.textContent);
        return arr;
    }
});
console.log(arr);

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны
// остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
textInP.childNodes.forEach((node) => {
    if (node.nodeType === 3) {
        node.textContent ='-text-';
    }
});

//Слайд 11
//1. Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');
ul.classList.add('list');

//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

allLinks.forEach((node) => {
    if (!node.closest('ul') && !node.closest('div')) {
        node.id = 'link';
        return
    }
});
console.log(allLinks);

//3. На li через один (начиная с самого первого) установить класс “item”
for (let i=1; i < allLinks.length; i+=2) {
    if (allLinks[i].closest('ul')) {
        allLinks[i].classList.add('item')
    }
}
console.log(allLinks);

//4. На все ссылки в примере установить класс “custom-link”
allLinks.forEach((node) => {
    node.classList.add('custom-link')
});
console.log(allLinks);

//Слайд 17
//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ +
// номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
const ulChild = ul.childElementCount;

for (let i=ulChild; i < ulChild +3; i++) {
    const li = `<li class="new-item">item ${i+1}</li>`;
    ul.insertAdjacentHTML('beforeend', li)
}
console.log(ul);

//Слайд 18
//2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку
// один - strong).
const strong = '<strong></strong>';
allLinks.forEach((node) => {
    if (node.closest('ul')) {
        node.insertAdjacentHTML('beforeend', strong)
    }
});

//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте
// сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод
// createElement.
const body = document.body;
let img = document.createElement("img");
img.src = 'img/tyt.jpg';
body.prepend(img);

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент
// установить класс green
const mark = document.querySelector('mark');
const text = ' green';
mark.insertAdjacentText('beforeend', text);
mark.classList.add('green');
