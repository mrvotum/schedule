/* eslint-disable linebreak-style */
import { moveRight, moveLeft } from './btns';
import addCard from './addCard';
import { days } from './dataBase';

const dataWeek = document.querySelector('[data-time=data_week]');

const date = new Date();
const weekDay = date.getDay(); // день недели
dataWeek.textContent = days[date.getDay()];

addCard(weekDay);

const leftBtn = document.querySelector('[data-btn=btnLeft]');
const rightBtn = document.querySelector('[data-btn=btnRight]');

leftBtn.addEventListener('click', () => {
  moveLeft();
});

rightBtn.addEventListener('click', () => {
  moveRight();
});
