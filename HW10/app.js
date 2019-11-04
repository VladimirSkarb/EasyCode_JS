//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//Реализовать минимум одну из задач: (внизу есть пара подсказок для задач со *)

//2.* Добавить сортировку по цене. СортировкИ "от дешевых к дорогим" / "от дорогих к дешевым"


const ARRAY_FIELDS = [
    {name: 'book_name', label: 'Название'},
    {name: 'price', label: 'Цена'},
    {name: 'author', label: 'Автор'},
    {name: 'country', label: 'Страна'},
    {name: 'url', label: 'Картинка'},
    {
        name: 'rate',
        label: 'Рейтинг',
        choices: [1, 2, 3, 4, 5],
        type: 'select',
    },
    {name: 'genre', label: 'Жанр'},
];

const books = [];

class Field {
    constructor({name, label}) {
        this.name = name;
        this.label = label;
    }
}

class InputField extends Field {
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <input name=${this.name} value="" />
        </label>`;
        return html
    }
}

class SelectField extends Field {
    constructor(field) {
        super(field)
        const {choices} = field;
        this.choices = choices;
    }
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <select name=${this.name}>
                ${this.choices.map(choice => `<option>${choice}</option>`)}
            </select>
        </label>`;
        return html
    }
}

class Form {
    constructor(selector) {
        this.selector = selector;
        this.init()
    }
    init() {
        const form = document.createElement('form');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = field.type === 'select' ? new SelectField(field) : new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });
        const btn = document.createElement('button');
        const btnSortUp = document.createElement('button');
        const btnSortDown = document.createElement('button');
        btn.className = 'btn';
        btnSortUp.className = 'btn';
        btnSortDown.className = 'btn';
        btn.textContent = 'Добавить книгу';
        btnSortUp.textContent = 'От дешевых к дорогим';
        btnSortDown.textContent = 'От дорогих к дешевым';
        btn.addEventListener('click', this.addBook);
        btnSortUp.addEventListener('click', this.sortUp);
        btnSortDown.addEventListener('click', this.sortDowm);
        form.append(btn, btnSortUp, btnSortDown);
        bookForm.append(form);
    }
    addBook(event) {
        event.preventDefault();
        const book = ARRAY_FIELDS.reduce((acc, {name}) => {
            const input = document.querySelector(`[name="${name}"]`).value;
            return {...acc, [name]: input}
        }, {})
        books.push(book)
        listBooks.updateListBooks(book)
        const resetForm = document.querySelector('form');
        resetForm.reset()
    }
    sortUp(event) {
        event.preventDefault();
        const sortBooksUp = books.sort((a, b) => {
            return a.price - b.price
        })
        const deletBook = document.querySelector('#book-list');
        deletBook.innerHTML = ''
        listBooks.updateNewListBook()
    }

    sortDowm(event) {
        event.preventDefault();
        const sortBooksDown = books.sort((a, b) => {
            return b.price - a.price
        })
        const deletBook = document.querySelector('#book-list');
        deletBook.innerHTML = ''
        listBooks.updateNewListBook()
    }
}

class Book {
    constructor(book) {
        this.book = book;
    }
    render() {
        const {book_name, price, url} = this.book;
        const html = `<div><h2>${book_name}</h2><img src="${url}" alt=image"><span>Цена: ${price}грн</span></div>`
        return html;
    }
}

class ListBooks {
    updateListBooks(book) {
        const bookList = document.querySelector('#book-list');
        const oneBook = new Book(book);
        const html = oneBook.render();
        bookList.insertAdjacentHTML('beforeend', html)
    }

    updateNewListBook() {
        const oneOfBook = document.querySelector('#book-list');
        books.forEach((book) => {
            const sortBookList = new Book(book);
            const sortRenderList = sortBookList.render();
            oneOfBook.insertAdjacentHTML('beforeend', sortRenderList)
        })

}
}

const form = new Form('#book-form');
const listBooks = new ListBooks();
