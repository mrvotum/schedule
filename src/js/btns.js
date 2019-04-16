import dataCards from './dataCards';
import addCard from './addCard';
import { days } from './dataBase';

const date = new Date();
let weekDay = date.getDay(); // день недели
const dataWeek = document.querySelector('[data-time=data_week]');

function removeCards(){
  const subCount = dataCards[weekDay].length;

  for (let i = 0; i < subCount; i++){
    document.querySelector('[data-main=mainHolder]').children[1].remove();
  }
}

function moveRight(){
  removeCards();
  weekDay < 6 ? weekDay++ : weekDay = 0;

  addCard(weekDay);
  dataWeek.textContent = days[weekDay];
}

function moveLeft(){
  removeCards();
  weekDay > 0 ? weekDay-- : weekDay = 6;

  addCard(weekDay);
  dataWeek.textContent = days[weekDay];
}

export { moveLeft, moveRight };
