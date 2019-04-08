const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const dataBase = [
  // время
  [
    '09:00-10:30', // 0
    '10:40-12:10', // 1
    '12:20-13:50', // 2
    '16:10-17:40', // 3
    '17:50-19:20', // 4
    '19:30-21:00', // 5
  ],
  // аудитории
  [
    1430, // 0
    2557, // 1
    2667, // 2
    2806  // 3
  ],
  // предмет
  [
    'Системная инженерия',                             // 0
    'Иностранный язык в научной сфере',                // 1
    'Методы подготовки персонализированного контента', // 2
    'Стандарты сжатия информации',                     // 3
    'Алгоритмы и методы обработки изображений',        // 4
    'Защита интеллектуальной собственности',           // 5
  ],
  // тип занятия
  [
    '(Другое)',      // 0
    '(Практика)',    // 1
    '(Лекция)',      // 2
    '(Лаб. работа)', // 3 
  ],
  // препод
  [
    'Ноздрачев Сергей Алексеевич',  // 0
    'Солодкина Елена Алексеевна',   // 1
    'Шурыгин Владимир Николаевич',  // 2
    'Иванько Александр Федорович',  // 3
    'Корнилов Иван Константинович', // 4
  ]
];

export { dataBase, days };
