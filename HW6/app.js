//Занятие 6. Слайд 7
//Зная структуру html, с помощью изученных
// методов получить (в консоль):
//1. head
const head = document.querySelector('head');
console.log('Head', head);
const elseHead = document.head;
console.log('Else Head', elseHead);

//2. body
const div = document.querySelector('div');
console.log('Body', div.parentElement);
const elseBody = document.body;
console.log('Else Body', elseBody);

//3. все дочерние элементы body и вывести их в
// консоль.
const body = document.querySelector('body');
console.log('Child Element', body.children);

//4. первый div и все его дочерние узлы
console.log('First div', body.firstElementChild);
console.log('First div', div);
//а) вывести все дочерние узлы в консоль
console.log('Children div', div.children);
//б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
for (let i = 1; i < div.children.length - 1; i++) {
    console.log('Middle Element', div.children[i]);
}



