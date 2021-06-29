const rootSteps = [
  {
    text: "Укажите характеристики",
    questions: [
      {
        name: "razmer_posadki",
        text: "Размер посадки в метрах",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Размер посадки не может быть < 0"];
          }
          return [true];
        },
      },
      {
        name: "dlina_posadki",
        text: "Длина посадки растений",
        description: "Длина предполагаемой грядки",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Длина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Длина не может быть > 20"];
          }
          return [true];
        },
      },
      {
        name: "shirina_posadki",
        text: "Ширина посадки",
        description: "Именно ширина между крайними растениями ряда",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 3) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
      {
        name: "shirina_ryadov",
        text: "Ширина между рядами",
        description: "Расстояние между рядами",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
      {
        name: "kolvo_ryadov",
        text: "Количество рядов растений",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Количество не может быть < 1"];
          }
          if (val > 20) {
            return [false, "Количество не может быть > 20"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Возможность перекрытия воды",
    questions: [
      {
        name: "need_perekritie_vodi",
        text: "Нужна ли возможность перекрытия воды к отдельным рядам?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Количество растений",
    questions: [
      {
        name: "kolvo_rasteniy",
        text: "Укажите количество растений",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Растений не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Расстояние до воды",
    questions: [
      {
        name: "rasstoyanie_do_vodi",
        text: "Укажите расстояние до источника воды",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Расстояние не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Какое подключение к источнику воды",
    questions: [
      {
        name: "podkluchenie_k_vode",
        text: "Какое нужно подключение к источнику воды?",
        type: "buttons",
        options: [
          {
            name: "1_2f",
            text: "1/2 внутренная",
          },
          {
            name: "1_2m",
            text: "1/2 внешняя",
          },
          {
            name: "3_4f",
            text: "3_4 внутренная",
          },
          {
            name: "3_4m",
            text: "3_4 внешняя",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен фильтр",
    questions: [
      {
        name: "need_filter",
        text: "Нужна ли фильтр для очистки воды?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен таймер",
    questions: [
      {
        name: "need_timer",
        text: "Нужна ли таймер для автоматического полива?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
];
const beltSteps = [
  {
    text: "Укажите характеристики",
    questions: [
      {
        name: "razmer_posadki",
        text: "Размер посадки в метрах",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Размер посадки не может быть < 0"];
          }
          return [true];
        },
      },
      {
        name: "dlina_posadki",
        text: "Длина посадки растений",
        description: "Длина предполагаемой грядки",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Длина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Длина не может быть > 20"];
          }
          return [true];
        },
      },
      {
        name: "shirina_posadki",
        text: "Ширина посадки",
        description: "Именно ширина между крайними растениями ряда",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 3) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
      {
        name: "shirina_ryadov",
        text: "Ширина между рядами",
        description: "Расстояние между рядами",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Возможность перекрытия воды",
    questions: [
      {
        name: "need_perekritie_vodi",
        text: "Нужна ли возможность перекрытия воды к отдельным рядам?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Количество растений",
    questions: [
      {
        name: "kolvo_rasteniy",
        text: "Укажите количество растений",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Растений не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Расстояние до воды",
    questions: [
      {
        name: "rasstoyanie_do_vodi",
        text: "Укажите расстояние до источника воды",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Расстояние не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Какое подключение к источнику воды",
    questions: [
      {
        name: "podkluchenie_k_vode",
        text: "Какое нужно подключение к источнику воды?",
        type: "buttons",
        options: [
          {
            name: "1_2f",
            text: "1/2 внутренная",
          },
          {
            name: "1_2m",
            text: "1/2 внешняя",
          },
          {
            name: "3_4f",
            text: "3_4 внутренная",
          },
          {
            name: "3_4m",
            text: "3_4 внешняя",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен фильтр",
    questions: [
      {
        name: "need_filter",
        text: "Нужна ли фильтр для очистки воды?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен таймер",
    questions: [
      {
        name: "need_timer",
        text: "Нужна ли таймер для автоматического полива?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
];
const treeSteps = [
  {
    text: "Укажите характеристики",
    questions: [
      {
        name: "razmer_posadki",
        text: "Размер посадки в метрах",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Размер посадки не может быть < 0"];
          }
          return [true];
        },
      },
      {
        name: "dlina_posadki",
        text: "Длина посадки растений",
        description: "Длина предполагаемой грядки",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Длина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Длина не может быть > 20"];
          }
          return [true];
        },
      },
      {
        name: "shirina_posadki",
        text: "Ширина посадки",
        description: "Именно ширина между крайними растениями ряда",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 3) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
      {
        name: "shirina_ryadov",
        text: "Ширина между рядами",
        description: "Расстояние между рядами",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Ширина не может быть < 0"];
          }
          if (val > 20) {
            return [false, "Ширина не может быть > 3"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Возможность перекрытия воды",
    questions: [
      {
        name: "need_perekritie_vodi",
        text: "Нужна ли возможность перекрытия воды к отдельным рядам?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Количество растений",
    questions: [
      {
        name: "kolvo_rasteniy",
        text: "Укажите количество растений",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Растений не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Расстояние до воды",
    questions: [
      {
        name: "rasstoyanie_do_vodi",
        text: "Укажите расстояние до источника воды",
        type: "number",
        validation: (val) => {
          if (val < 0) {
            return [false, "Расстояние не может быть < 0"];
          }
          return [true];
        },
      },
    ],
  },
  {
    text: "Какое подключение к источнику воды",
    questions: [
      {
        name: "podkluchenie_k_vode",
        text: "Какое нужно подключение к источнику воды?",
        type: "buttons",
        options: [
          {
            name: "1_2f",
            text: "1/2 внутренная",
          },
          {
            name: "1_2m",
            text: "1/2 внешняя",
          },
          {
            name: "3_4f",
            text: "3_4 внутренная",
          },
          {
            name: "3_4m",
            text: "3_4 внешняя",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен фильтр",
    questions: [
      {
        name: "need_filter",
        text: "Нужна ли фильтр для очистки воды?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
  {
    text: "Нужен таймер",
    questions: [
      {
        name: "need_timer",
        text: "Нужна ли таймер для автоматического полива?",
        type: "buttons",
        options: [
          {
            name: "yes",
            text: "Да",
          },
          {
            name: "no",
            text: "Нет",
          },
        ],
      },
    ],
  },
];

export const scenario = {
  text: "ЧТО БУДЕТЕ ПОЛИВАТЬ?",
  type: "buttons",
  options: [
    {
      name: "root",
      text: "Прикорневой полив",
      description: ["Для доставки воды непосредственно к корню "],
    },
    {
      name: "belt",
      text: "Ленточный полив",
      description: ["Орошение по всей длине грядки от бочки"],
    },
    {
      name: "tree",
      text: "Трубчатый полив",
      description: ["Подходит для кустарников и деревьев"],
    },
  ],
};
export const scenarioAnswers = {
  root: rootSteps,
  belt: beltSteps,
  tree: treeSteps,
};