//Домашнее задание
//
// 1. Подключить поиск по введенному слову.
//
// Новости должны обновляться после каждой введенной буквы.
//
// 2. Добавить сортировку. Пример, как должно быть в запросе: sortBy=popularity

class Service {
    constructor () {
        this.key = '275d723746bb48878e04db15c7fcd752';
        this.country = '';
        this.category = '';
        this.sortBy = '';
        this.search = '';
    }
    sendRequest({country='', category=''}) {
        if (country !== '') {
            this.country = country;
        }
        if (category !== '') {
            this.category = category;
        }

        return fetch(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) })
    }

    searchRequest({search='', sortBy=''}) {
        if (search !== '') {
            this.search = search;
        }
        if (sortBy !== '') {
            this.sortBy = sortBy;
        }

        return fetch(`https://newsapi.org/v2/everything?q=${this.search}&sortBy=${this.sortBy}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) })
    }
}

class UI {
    constructor () {
        this.service = new Service();
        this.layout = new LayoutNews();
        this.div = document.querySelector('#row');
    }
    init() {
        const country = document.querySelector('#country');
        const category = document.querySelector('#category');
        const sort = document.querySelector('#sortBy');
        const search = document.querySelector('#search');
        country.addEventListener('change', this.handleSelect.bind(this))
        category.addEventListener('change', this.handleSelect.bind(this))
        sort.addEventListener('change', this.searchNews.bind(this))
        search.addEventListener('keyup', this.searchNews.bind(this))

    }
    handleSelect(event) {

        const {id: selectName, value: selectValue} = event.target;
        this.service.sendRequest({[selectName]: selectValue})
            .then((response) => {
                console.log(response.articles)
                this.layout.renderAll(response.articles)
            })
    }

    searchNews (event) {

        const {id: selectName, value: selectValue} = event.target;
        if (event.target.value != ''){
            this.service.searchRequest({[selectName]: selectValue})
                .then((response) => {
                    console.log(response.articles)
                    this.layout.renderAll(response.articles)
                })
        } else {
            this.div.innerHTML = '';
        }

    }
}

class LayoutNews {
    constructor() {
        this.divRow = document.querySelector('#row');
    }
    renderAll(newsList) {
        this.divRow.innerHTML = '';

        newsList.forEach((news) => {
            const html = this.render(news);
            this.divRow.insertAdjacentHTML('beforeend', html);
        })
    }

    render (news) {
        return `<div class="col s12 m6">
                <div class="card"> 
                  <div class="card-image">
                     <img src="${news.urlToImage}"> 
                  </div>
                  <div class="card-content">
                     <span class="card-title">${news.title || ''}</span>
                     <p>${news.description || ''}</p> 
                  </div>
                  <div class="card-action">
                     <a href="${news.url}" target="_blank">Read more</a> 
                  </div> 
                </div>
            </div>`;
    }
}

const myUI = new UI();
myUI.init();
