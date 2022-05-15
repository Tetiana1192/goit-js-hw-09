
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const delay = Number(e.target.delay.value);
  const step = Number(e.target.step.value);
  const amount = Number(e.target.amount.value);


  formPromises(delay, step, amount);

}




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}



for (let i = 1; i <= amount; i += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
        }, delay);
      });
    delay += step;
  }
