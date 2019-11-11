window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;


const words = document.querySelector('[name="text"]');
const start = document.querySelector('#start');

start.addEventListener('click', startSpeaking);
recognition.addEventListener('end', recognition.start);
recognition.addEventListener('result', e => {
    words.textContent = e.results[0][0].transcript
});

function startSpeaking () {
    recognition.start();
}
