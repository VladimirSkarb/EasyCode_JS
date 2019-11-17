const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
const playbackRate = document.querySelector('[name="playbackRate"]');
const backTime = document.querySelector('[data-skip="-10"]');
const forwardTime = document.querySelector('[data-skip="25"]');

function toggleVideo() {
    if (video.paused) {
        video.play();
        toggle.classList.remove('play');
        toggle.classList.add('pause');
    } else {
        video.pause();
        toggle.classList.remove('pause');
        toggle.classList.add('play')
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime - minutes * 60);
    let x = minutes < 10 ? "0" + minutes : minutes;
    let y = seconds < 10 ? "0" + seconds : seconds;
    let fullMinute = Math.floor(video.duration / 60);
    let fullSecond = Math.floor(video.duration % 60);
    time.value = `${minutes} : ${y} / ${fullMinute} : ${fullSecond}`;
}

function handleVolume() {
    video.volume = volume.value;
}

function handleRate() {
    video.playbackRate = playbackRate.value;
}

function handleTime(event) {
    if (event.target.innerHTML === '« 10s') {
        backTime.value = video.currentTime - 10;
        video.currentTime = backTime.value;
    } else {
        forwardTime.value = video.currentTime + 25;
        video.currentTime = forwardTime.value;
    }
}

toggle.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('input', handleVolume);
playbackRate.addEventListener('input', handleRate);
backTime.addEventListener('click', handleTime);
forwardTime.addEventListener('click', handleTime);
