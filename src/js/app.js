import { moveRight, moveLeft } from './btns.js';
import addCard from './addCard.js';
import { days } from './dataBase.js';

const dataWeek = document.querySelector('[data-time=data_week]');

const date = new Date();
let weekDay = date.getDay(); // день недели
dataWeek.textContent = days[date.getDay()];

addCard(weekDay);

const leftBtn = document.querySelector('[data-btn=btnLeft]');
const rightBtn = document.querySelector('[data-btn=btnRight]');

leftBtn.addEventListener('click', (event) => {
  moveLeft();
});

rightBtn.addEventListener('click', (event) => {
  moveRight();
});
