//Слайд 15.
//1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
// элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.
function isParent(parent, child) {
    return child.closest('div') === parent;
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//2. Получить список всех ссылок, которые не находятся внутри списка ul
const allLinks = document.querySelectorAll('a');
let arr = [];
allLinks.forEach((node) => {
    if (!node.closest('ul')) {
        arr.push(node);
        return arr;
    }
});
console.log(arr);

//3. Найти элемент, который находится перед и после списка ul
const ul = document.querySelector('ul');
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
