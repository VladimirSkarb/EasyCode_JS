class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/albums', (res) =>{
    const parsedAlbum = JSON.parse(res);
    const postForRendering = new Post();
    parsedAlbum.forEach((post) => {
        postForRendering.render(post);
    })
});

class Post {
    constructor() {
        this.wrapper = document.querySelector('#album')
        this.wrapperPhotos = document.querySelector('#photos')
    }
    handleClick(event) {
        const albumId = event.currentTarget.dataset.id;
        http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId, (res) =>{
            const parsedPhotos = JSON.parse(res);
            const photosForRendering = new Post();
            const deletePhotos = document.querySelector('#photos');
            deletePhotos.innerHTML = '';
            parsedPhotos.forEach((post) => {
                photosForRendering.renderPhotos(post);
            })

        });

    }
    render(album) {
        const div = document.createElement('div');
        const span = `<span>${album.title}</span>`;
        div.insertAdjacentHTML('beforeend', span);
        div.setAttribute('data-id', album.id);
        div.addEventListener('click', this.handleClick);
        this.wrapper.append(div)
    }
    renderPhotos(photos) {
        const img = document.createElement('img');
        img.setAttribute('src', photos.url);
        this.wrapperPhotos.append(img)
    }
}