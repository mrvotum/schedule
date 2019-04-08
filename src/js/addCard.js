import dataCards from './dataCards.js';

const mainHolder = document.querySelector('[data-main=mainHolder]');

export default function addCard(day){
  const subCount = dataCards[day].length; // кол-во пар
  
  for (let i = 0; i < subCount; i++){
    const cardEl = document.createElement('div');
    cardEl.className = 'shedule__card';

    if(dataCards[day][i][0] === true){ // если нет занятий
      cardEl.innerHTML = `
        <div class="dayOff"><span>Нет занятий</span></div>`;
      mainHolder.appendChild(cardEl);
      break
    }

    cardEl.innerHTML = `
    <div class="data_time">${dataCards[day][i][0]}</div>
    <div class="about-lesson">
      <div class="lecture-hall">${dataCards[day][i][1]}</div>
      <div class="subject">${dataCards[day][i][2]} ${dataCards[day][i][3]}</div>
      <div class="teacher">${dataCards[day][i][4]}</div>
    </div>`;

    mainHolder.appendChild(cardEl);
  }
}
