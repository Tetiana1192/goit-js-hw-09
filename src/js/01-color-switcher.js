
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}.padStart(6, '0')}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClickColor);
refs.stopBtn.addEventListener('click', onStartBtnClickColor);


   function onStartBtnClickColor() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
} 

function onStartBtnClickColor() {
  clearInterval(timerId);

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
}



