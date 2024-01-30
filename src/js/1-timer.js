// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const textInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    timer.initTime = selectedDates[0].getTime();
    if (timer.initTime <= Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
    });

    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(textInput, options);

const timer = {
  initTime: 0,
  start(){
const id = setInterval(() => {
  const different = this.initTime - Date.now();
  const timeObj = convertMs(different);
  render(timeObj);
  if (different < 1000){
    clearInterval(id);
  }
}, 1000)
  },
}

startBtn.addEventListener('click', onBtnClick);

function onBtnClick(){
  timer.start();
  startBtn.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const days = document.querySelector('[data-days]');
  // Remaining hours
  const hours =document.querySelector('[data-hours]');
  // Remaining minutes
  const minutes = document.querySelector('[data-minutes]');
  // Remaining seconds
  const seconds = document.querySelector('[data-seconds]');


function render(timeObj){
days.textContent = timeObj.days.toString().padStart(2, 0);
hours.textContent = timeObj.hours.toString().padStart(2, 0);;
minutes.textContent = timeObj.minutes.toString().padStart(2, 0);;
seconds.textContent = timeObj.seconds.toString().padStart(2, 0);;
}