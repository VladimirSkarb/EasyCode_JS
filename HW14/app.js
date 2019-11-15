const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');
const startBtn = document.querySelector('.start');
const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal')
const reteList = document.querySelector('.rate-list')
const currentName = document.querySelector('#name');
const statMole = document.querySelector('.allCatch');
const allShowtMole = document.querySelector('.allShow');
const selectLevel = document.querySelector('[name="level"]');
const rateBtn = document.querySelector('.rate-btn');
const rateName = document.querySelector('.rate');
const error = document.querySelector('.error');
const close = document.querySelector('.close')
const closeRate = document.querySelector('.close-modal')


let isPlaing = false;
let countMoles = 0;
let allMoles = 0

startBtn.addEventListener('click', startGame);
rateBtn.addEventListener('click', showRate);
moles.forEach((mole) => {
    mole.addEventListener('click', catchMole)
});
close.addEventListener('click', closeModal);
closeRate.addEventListener('click', closeModal);

function catchMole() {
    countMoles++;
    score.textContent = countMoles;
    this.parentElement.classList.remove('up')
}

function randomTime(min, max) {
    return Math.round(Math.random()*(max-min) + min);
}

function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    return hole
}

function showMole() {
    let time = 0;
    if (selectLevel.value === 'light') {
        time = randomTime(1000, 2000);
    } else if (selectLevel.value === 'medium') {
        time = randomTime(800, 1500);
    } else {
        time = randomTime(400, 1000);
    }
    const hole = randomHole(holes);
    allMoles++
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (isPlaing) showMole();
        else finishGame();
    }, time)
}

function startGame() {
    if (currentName.value !== ''){
        menu.style.display = 'none'
        rateBtn.style.display = 'none'
        showMole();
        isPlaing = true;
        setTimeout(()=>{
            isPlaing = false;
        }, 5000)
    } else {
        error.style.display = 'block'
    }
}

function finishGame() {
    menu.style.display = 'block';
    rateBtn.style.display = 'block'
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';

    const list = JSON.parse(localStorage.getItem('usersList')) || [];
    list.push({name: currentName.value, count: countMoles});
    console.log(list)

    localStorage.setItem('usersList', JSON.stringify(list));
    error.style.display = 'none'
    statMole.textContent = countMoles;
    allShowtMole.textContent = allMoles
    countMoles = 0;
    allMoles = 0;
    score.textContent = 0;
    currentName.value = '';
}

function showRate() {
    rateName.innerHTML = ''
    reteList.style.opacity = '1';
    reteList.style.pointerEvents = 'auto';
    const list = JSON.parse(localStorage.getItem('usersList'));
    const a = `<tr><th>Name</th><th>Result</th></tr>`;
    rateName.insertAdjacentHTML('beforeend', a)
    if (list.length > 10) {
        list.slice(-10).forEach(item => {
            const html = `<tr><td>${item.name}</td><td>${item.count}</td></tr>`
            rateName.insertAdjacentHTML('beforeend', html)

        })
    } else list.forEach(item => {
        console.log(item.name, item.count)
        const html = `<tr><td>${item.name}</td><td>${item.count}</td></tr>`
        rateName.insertAdjacentHTML('afterbegin', html)

    })

}

function closeModal() {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    reteList.style.opacity = '0';
    reteList.style.pointerEvents = 'none';
}
