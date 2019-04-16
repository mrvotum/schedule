import { dataBase } from './dataBase';

const freeDay = true;

const dataCards = [
  [  // воскресенье
    [
      freeDay,
    ]
  ], // воскресенье
  [  // понедельник
    [
      freeDay,
    ]
  ],  // понедельник
  [   // вторник
    [
      dataBase[0][4],
      dataBase[1][1],
      dataBase[2][0],
      dataBase[3][0],
      dataBase[4][0],
    ],
    [
      dataBase[0][4],
      dataBase[1][1],
      dataBase[2][0],
      dataBase[3][0],
      dataBase[4][0],
    ]
  ],  // вторник
  [   // среда
    [
      dataBase[0][4],
      dataBase[1][0],
      dataBase[2][1],
      dataBase[3][1],
      dataBase[4][1],
    ],
    [
      dataBase[0][4],
      dataBase[1][0],
      dataBase[2][1],
      dataBase[3][1],
      dataBase[4][1],
    ]
  ],  // среда
  [   // четверг
    [
      dataBase[0][3],
      dataBase[1][2],
      dataBase[2][2],
      dataBase[3][1],
      dataBase[4][2],
    ],
    [
      dataBase[0][4],
      dataBase[1][1],
      dataBase[2][3],
      dataBase[3][2],
      dataBase[4][3],
    ],
    [
      dataBase[0][5],
      dataBase[1][1],
      dataBase[2][3],
      dataBase[3][3],
      dataBase[4][3],
    ]
  ],  // четверг
  [   // пятница
    [
      dataBase[0][4],
      dataBase[1][1],
      dataBase[2][4],
      dataBase[3][3],
      dataBase[4][0],
    ],
    [
      dataBase[0][5],
      dataBase[1][1],
      dataBase[2][4],
      dataBase[3][3],
      dataBase[4][0],
    ]
  ],  // пятница
  [   // суббота
    [
      dataBase[0][0],
      dataBase[1][3],
      dataBase[2][5],
      dataBase[3][2],
      dataBase[4][4],
    ],
    [
      dataBase[0][1],
      dataBase[1][3],
      dataBase[2][5],
      dataBase[3][1],
      dataBase[4][4],
    ],
    [
      dataBase[0][2],
      dataBase[1][1],
      dataBase[2][4],
      dataBase[3][1],
      dataBase[4][0],
    ]
  ],  // суббота
];


export default dataCards;
