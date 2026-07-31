export const site = {
  name: "Взгляд из класса",
  tagline: "Подготовка к ЕГЭ по английскому языку",
  description:
    "Онлайн-школа английского языка для школьников 11-х классов. Готовим к ЕГЭ на высокие баллы — с нуля до уверенного результата.",
  cta: "Предзаписаться в группу",
};

export const advantages = [
  {
    title: "Опытные преподаватели",
    description:
      "Сертифицированные педагоги с опытом подготовки к ЕГЭ от 5 лет. Знают все нюансы экзамена.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Программа подстраивается под уровень ученика. Учитываем слабые места и работаем над ними точечно.",
  },
  {
    title: "Удобный формат",
    description:
      "Занятия онлайн из любой точки. Запись уроков доступна всегда. Гибкое расписание.",
  },
  {
    title: "Реальный результат",
    description:
      "Наши выпускники сдают ЕГЭ на «4» и «5». Средний балл — 58 из 68 возможных.",
  },
];

export const teachers = [
  {
    name: "Ильмира",
    photo: "/photo1.jpeg",
    greeting: "Привет! Меня зовут Ильмира.",
    steps: [
      "Я сама сдавала ЕГЭ по английскому — и знаю, каково это сидеть в аудитории и волноваться.",
      "После экзамена я поняла: школьной подготовки недостаточно. Можно сделать обучение понятнее и интереснее.",
      "Я получила кембриджские сертификаты CELTA и TKT, написала авторскую книгу по подготовке к экзаменам и создала курс по ИИ в образовании.",
      "Теперь я учу школьников сдавать ЕГЭ на 90+ баллов. И у меня это получается.",
    ],
  },
];

export const pricingPlans = [
  {
    name: "Полный курс",
    price: "5 400 ₽",
    period: "/месяц",
    description: "Комплексная подготовка к ЕГЭ с нуля за 9 месяцев",
    features: [
      "2 занятия в неделю по 60 минут",
      "Полный разбор всех типов заданий ЕГЭ",
      "Пробный экзамен каждый месяц",
      "Доступ к записям уроков",
      "Онлайн-лекции с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: true,
  },
  {
    name: "Экспресс-курс",
    price: "6 000 ₽",
    period: "/месяц",
    description: "Интенсивная подготовка за 3 месяца до экзамена",
    features: [
      "2 занятия в неделю по 90 минут",
      "Концентрация на самых частых ошибках",
      "Интенсивная практика письменной части",
      "Разбор стратегий выполнения заданий",
      "Онлайн-лекции с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
    isNew: true,
  },
  {
    name: "Интенсив",
    price: "8 000 ₽",
    period: "/месяц",
    description: "Максимальная подготовка за месяц до ЕГЭ",
    features: [
      "3 занятия в неделю по 90 минут",
      "Ежедневные домашние задания с проверкой",
      "Симуляция экзамена в реальных условиях",
      "Разбор устной части с преподавателем",
      "Онлайн-лекции с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
  },
];

export interface DemoTaskContent {
  instruction: string;
  text?: string;
  questions: {
    id: string;
    text: string;
    options?: string[];
  }[];
}

export interface DemoMaterial {
  id: string;
  type: "task" | "test" | "lesson";
  sectionTitle: string;
  title: string;
  description: string;
  taskContent: DemoTaskContent;
  isNew?: boolean;
}

export const demoMaterials: DemoMaterial[] = [
  {
    id: "reading-1",
    type: "task",
    sectionTitle: "Чтение",
    title: "Понимание основного содержания текста",
    description:
      "Прочитайте текст и установите соответствие между заголовками и абзацами. Задание №10 из раздела «Чтение» ЕГЭ по английскому языку.",
    taskContent: {
      instruction:
        "Установите соответствие между заголовками A–F и пронумерованными абзацами текста 1–5. Запишите в таблицу выбранные цифры под соответствующими буквами. Один заголовок лишний.",
      text: `A. The history of the city
B. A place for relaxation
C. Transport in the city
D. The city's famous buildings
E. Cultural life of the city
F. Climate and weather

1. London is one of the most famous cities in the world. It has a population of about 9 million people and is the capital of the United Kingdom. Every year millions of tourists visit London to see its historical monuments and enjoy its unique atmosphere.

2. The city has many beautiful parks and gardens. Hyde Park is one of the largest and most popular parks in central London. Visitors can walk, have a picnic, or even go swimming in the Serpentine lake.

3. London has four seasons: spring, summer, autumn and winter. The weather is often rainy, especially in autumn and winter. However, summers can be warm and pleasant. The temperature rarely goes above 30 degrees Celsius.

4. There are many museums, theatres and art galleries in London. The British Museum, the National Gallery and the Tate Modern are just a few examples. The West End is famous for its theatres and musicals.

5. The London Underground, also called the Tube, is the oldest underground railway in the world. Besides the Tube, people use buses, trains and taxis to get around the city.`,
      questions: [
        { id: "r1", text: "Абзац 1", options: ["A", "B", "C", "D", "E", "F"] },
        { id: "r2", text: "Абзац 2", options: ["A", "B", "C", "D", "E", "F"] },
        { id: "r3", text: "Абзац 3", options: ["A", "B", "C", "D", "E", "F"] },
        { id: "r4", text: "Абзац 4", options: ["A", "B", "C", "D", "E", "F"] },
        { id: "r5", text: "Абзац 5", options: ["A", "B", "C", "D", "E", "F"] },
      ],
    },
  },
  {
    id: "grammar-1",
    type: "task",
    sectionTitle: "Грамматика и лексика",
    title: "Преобразование слов в грамматически правильную форму",
    description:
      "Прочитайте текст и преобразуйте слова в скобках так, чтобы они грамматически соответствовали содержанию текста. Задания №20–28 ЕГЭ.",
    taskContent: {
      instruction:
        "Прочитайте приведённый ниже текст. Преобразуйте слова, напечатанные заглавными буквами в скобках, так, чтобы они грамматически соответствовали содержанию текста. Заполните пропуски полученными словами.",
      text: `Last summer my family and I ___ (GO) on a trip to Scotland. It was my ___ (ONE) time visiting this country. We ___ (BE) there for two weeks and we ___ (SEE) many interesting places. The weather ___ (BE) rainy but we still enjoyed our holiday. I ___ (TAKE) a lot of photos. My mother ___ (BUY) some souvenirs for our friends. I think it ___ (BE) the best holiday in my life. I hope we ___ (GO) there again next year.`,
      questions: [
        { id: "g1", text: "GO" },
        { id: "g2", text: "ONE" },
        { id: "g3", text: "BE" },
        { id: "g4", text: "SEE" },
        { id: "g5", text: "BE" },
        { id: "g6", text: "TAKE" },
        { id: "g7", text: "BUY" },
        { id: "g8", text: "BE" },
        { id: "g9", text: "GO" },
      ],
    },
  },
  {
    id: "speaking-1",
    type: "task",
    sectionTitle: "Устная часть",
    title: "Монологическое высказывание по теме",
    description:
      "Представьте, что вы готовите проект о своём любимом занятии. Вам нужно рассказать о нём за 1,5–2 минуты. Задание №3 устной части ЕГЭ.",
    taskContent: {
      instruction:
        "Вы участвуете в проекте «Моё любимое занятие». Подготовьте монологическое высказывание на эту тему. Вам нужно рассказать:\n\n• чем вы любите заниматься в свободное время;\n• почему вам нравится именно это занятие;\n• как часто вы им занимаетесь;\n• кто разделяет ваше увлечение.\n\nУ вас есть 1,5 минуты на подготовку. Ваше высказывание должно длиться не более 2 минут. Говорите связно и логично.",
      text: "Примерный план ответа:\n\nI'd like to tell you about my favourite hobby. My favourite hobby is reading books. I started reading when I was seven years old and I've loved it ever since.\n\nI enjoy reading because it helps me relax and learn new things. I can travel to different worlds and meet interesting characters without leaving my room.\n\nI read every day, usually before bed. I spend about an hour reading. At the weekend I can read for three or four hours if the book is really interesting.\n\nMy best friend also loves reading. We often exchange books and discuss what we've read. It's great to have someone who shares your interests!",
      questions: [
        {
          id: "s1",
          text: "Расскажите о своём любимом занятии, используя план выше.",
        },
      ],
    },
  },
  {
    id: "listening-1",
    type: "task",
    sectionTitle: "Аудирование",
    title: "Понимание запрашиваемой информации",
    description:
      "Прослушайте диалог и определите, какие утверждения соответствуют содержанию разговора. Задание №3–8 раздела «Аудирование» ЕГЭ.",
    taskContent: {
      instruction:
        "Прослушайте диалог между друзьями о планах на выходные. Определите, какие из приведённых утверждений 1–6 соответствуют содержанию диалога (True), а какие нет (False). Обведите номер выбранного варианта ответа.",
      text: "Текст для аудирования (читает диктор):\n\nSarah: Hi Tom! Have you got any plans for the weekend?\nTom: Hi Sarah! Yes, I'm going to the cinema with my brother on Saturday. There's a new science fiction film on.\nSarah: That sounds great! What time does it start?\nTom: At 3 o'clock in the afternoon. Would you like to join us?\nSarah: I'd love to, but I'm visiting my grandma on Saturday. She lives in the countryside.\nTom: That's a pity. Maybe next time. What about Sunday?\nSarah: On Sunday I'm free. What do you suggest?\nTom: Well, we could go to the park or play tennis.\nSarah: Playing tennis sounds good! I haven't played for a long time.\nTom: Let's meet at the sports centre at 10 am then.\nSarah: Perfect! See you on Sunday.",
      questions: [
        {
          id: "l1",
          text: "Том идёт в кино с родителями.",
          options: ["True", "False"],
        },
        {
          id: "l2",
          text: "Фильм начинается в 3 часа дня.",
          options: ["True", "False"],
        },
        {
          id: "l3",
          text: "Сара собирается навестить бабушку в субботу.",
          options: ["True", "False"],
        },
        {
          id: "l4",
          text: "Сара согласилась пойти в кино в субботу.",
          options: ["True", "False"],
        },
        {
          id: "l5",
          text: "Том предложил сыграть в теннис в воскресенье.",
          options: ["True", "False"],
        },
        {
          id: "l6",
          text: "Они договорились встретиться в 10 утра.",
          options: ["True", "False"],
        },
      ],
    },
  },
  {
    id: "writing-1",
    type: "task",
    sectionTitle: "Письмо",
    title: "Написание личного письма",
    description:
      "Напишите ответ на письмо друга по переписке, используя неформальный стиль. Задание №35 раздела «Письмо» ЕГЭ.",
    taskContent: {
      instruction:
        "У вас есть 30 минут, чтобы написать ответ на письмо. Объём письма — 100–120 слов. Соблюдайте правила оформления личного письма: обращение, благодарность за полученное письмо, ответы на вопросы друга, ваши вопросы, завершающая фраза и подпись.",
      text: "Задание для письма:\n\nYou have received a letter from your English-speaking pen friend Ben.\n\n…Last weekend I went to a music festival with my friends. It was amazing! We listened to different bands, danced and had a great time. What do you usually do at the weekend? Do you prefer spending time outdoors or indoors? What is your favourite type of entertainment?\n\nWrite a letter to Ben. Answer his 3 questions.\nWrite 100–120 words. Remember the rules of letter writing.",
      questions: [
        {
          id: "w1",
          text: "Напишите ответ Бену (100–120 слов), ответив на его вопросы.",
        },
      ],
    },
  },
  {
    id: "test-1",
    type: "test",
    sectionTitle: "Пробный тест",
    title: "Мини-тест: базовый уровень",
    description:
      "Короткий пробный тест из 10 вопросов по основным разделам ЕГЭ. Проверьте свои силы перед началом полноценной подготовки.",
    taskContent: {
      instruction:
        "Ответьте на 10 вопросов из разных разделов ЕГЭ. Вопросы охватывают лексику, грамматику и чтение. На выполнение теста даётся 15 минут.",
      text: "",
      questions: [
        {
          id: "t1",
          text: "Choose the correct word: «She ___ a student.»",
          options: ["am", "is", "are", "be"],
        },
        {
          id: "t2",
          text: "Выберите правильный предлог: «I go to school ___ bus.»",
          options: ["on", "in", "by", "at"],
        },
        {
          id: "t3",
          text: "Choose the correct form: «He ___ football every Sunday.»",
          options: ["play", "plays", "playing", "is playing"],
        },
        {
          id: "t4",
          text: "Переведите на английский: «У меня есть две сестры.»",
          options: [
            "I have two sisters.",
            "I has two sisters.",
            "I am two sisters.",
            "My two sisters.",
          ],
        },
        {
          id: "t5",
          text: "Choose the right article: «___ sun is shining brightly.»",
          options: ["A", "An", "The", "No article"],
        },
      ],
    },
  },
  {
    id: "lesson-1",
    type: "lesson",
    sectionTitle: "Демо-урок",
    title: "Видеоурок: Present Tenses",
    description:
      "Фрагмент урока по теме «Present Tenses: Simple vs Continuous». Разбор правила, примеры из реальных заданий ЕГЭ и практика.",
    isNew: true,
    taskContent: {
      instruction:
        "Посмотрите видеоурок (доступен в записи) и выполните упражнения на разницу между Present Simple и Present Continuous. Это ключевая тема для раздела «Грамматика» ЕГЭ.",
      text: `Основные правила:

Present Simple — для регулярных действий, фактов, расписаний:
• I go to school every day.
• The Earth orbits the Sun.
• The train leaves at 6 pm.

Present Continuous — для действий прямо сейчас, временных ситуаций, планов:
• I am reading a book right now.
• She is staying with her grandmother this week.
• We are meeting friends tonight.

Слова-маркеры Present Simple: always, usually, often, sometimes, never, every day/week/year.
Слова-маркеры Present Continuous: now, right now, at the moment, today, this week, these days.`,
      questions: [
        {
          id: "d1",
          text: "She ___ (work) as a teacher.",
          options: ["work", "works", "is working", "are working"],
        },
        {
          id: "d2",
          text: "Listen! Somebody ___ (sing) in the next room.",
          options: ["sings", "sing", "is singing", "are singing"],
        },
        {
          id: "d3",
          text: "I usually ___ (have) breakfast at 8 o'clock.",
          options: ["have", "has", "am having", "is having"],
        },
        {
          id: "d4",
          text: "They ___ (play) football at the moment.",
          options: ["play", "plays", "are playing", "is playing"],
        },
      ],
    },
  },
];

export const germanTeacher = {
  name: "Ильмира",
  photo: "/photo1.jpeg",
  greeting: "Привет! Меня зовут Ильмира.",
  qualifications: [
    "Диплом МГЛУ (Московский государственный лингвистический университет)",
    "Стажировка в Германии (Гёте-Институт, г. Гёттинген)",
    "Более 20 лет преподавания немецкого языка взрослым",
  ],
  steps: [
    "Я влюбилась в немецкий язык ещё в школе и решила связать с ним свою жизнь.",
    "Окончила МГЛУ, прошла стажировку в Германии, получила международные сертификаты.",
    "Более 20 лет я помогаю взрослым осваивать немецкий — с нуля до свободного общения.",
    "Мои студенты успешно сдают экзамены, переезжают в Германию, находят работу и путешествуют без языкового барьера.",
  ],
};

export const germanFormats = [
  {
    id: "individual",
    title: "Индивидуальные занятия",
    description:
      "Персональная программа под ваш уровень и цели. Идеально для тех, кто начинает с нуля или хочет сфокусироваться на конкретных задачах.",
    features: [
      "Гибкое расписание",
      "Программа под ваш запрос",
      "Упор на разговорную практику",
      "Обратная связь после каждого урока",
    ],
    price: "1 500 ₽",
    period: "/занятие",
    icon: "User",
  },
  {
    id: "club",
    title: "Разговорный клуб",
    description:
      "Регулярные встречи в мини-группах для практики устной речи. Преодолейте языковой барьер и заговорите уверенно.",
    features: [
      "Группы до 6 человек",
      "Актуальные темы для обсуждения",
      "Ролевые игры и дебаты",
      "Разбор типичных ошибок",
    ],
    price: "3 000 ₽",
    period: "/месяц",
    icon: "Users",
  },
  {
    id: "express",
    title: "Экспресс-курс",
    description:
      "Интенсивный курс для тех, кому нужен быстрый результат: переезд, работа, путешествия.",
    features: [
      "3 занятия в неделю по 90 минут",
      "Разговорный интенсив",
      "Деловая лексика и переписка",
      "Подготовка к собеседованию",
    ],
    price: "8 000 ₽",
    period: "/месяц",
    icon: "Zap",
  },
];

export const ctaSection = {
  title: "Готовы начать?",
  description:
    "Предзапишитесь в группу и мы подберём удобное расписание. Занятия проходят в мини-группах до 6 человек — максимум внимания каждому ученику.",
  buttonText: "Предзаписаться в группу",
};

export const methodology = {
  title: "Как мы готовим к ЕГЭ",
  description:
    "Наша методика — это не просто теория. После объяснения каждого раздела материала мы сразу переходим к разбору реальных заданий из ЕГЭ на эту тему.",
  steps: [
    {
      title: "Объясняем тему",
      description:
        "Разбираем правило или тему простым языком, без лишней воды. На примерах, которые понятны каждому.",
    },
    {
      title: "Практика на реальных заданиях",
      description:
        "Сразу после объяснения открываем задания из ЕГЭ прошлых лет и тренируемся. Так вы видите, как теория применяется на экзамене.",
    },
    {
      title: "Закрепляем на пробных тестах",
      description:
        "Каждый месяц — полноценный пробный экзамен с проверкой по критериям ЕГЭ. Отслеживаем прогресс и разбираем ошибки.",
    },
  ],
};
export const courses = [
  {
    id: "oge-full",
    title: "Полный курс подготовки к ЕГЭ",
    description:
      "Комплексная программа с нуля до уверенной сдачи ЕГЭ. Включает все разделы экзамена: аудирование, чтение, грамматика, письмо и устная часть. В программу входит полный доступ к онлайн-лекциям по английскому с разбором материала и онлайн-сборник для отработки навыков.",
    duration: "9 месяцев",
    lessons: "72 занятия",
    price: "5 400 ₽",
    period: "/месяц",
    features: [
      "2 занятия в неделю по 60 минут",
      "Полный разбор всех типов заданий ЕГЭ",
      "Пробный экзамен каждый месяц",
      "Доступ к записям уроков",
      "Полный доступ к онлайн-лекциям по английскому с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: true,
  },
  {
    id: "oge-express",
    title: "Экспресс-курс",
    description:
      "Интенсивная программа для тех, кто хочет повторить материал и закрыть пробелы за 3 месяца до экзамена. В программу входит полный доступ к онлайн-лекциям по английскому с разбором материала и онлайн-сборник для отработки навыков.",
    duration: "3 месяца",
    lessons: "24 занятия",
    price: "6 000 ₽",
    period: "/месяц",
    features: [
      "2 занятия в неделю по 90 минут",
      "Концентрация на самых частых ошибках",
      "Интенсивная практика письменной части",
      "Разбор стратегий выполнения заданий",
      "Полный доступ к онлайн-лекциям по английскому с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
    isNew: true,
  },
  {
    id: "oge-intensive",
    title: "Интенсив перед экзаменом",
    description:
      "Максимально интенсивная подготовка за месяц до ЕГЭ. Каждый день — новый тип заданий, полное погружение в экзаменационный формат. В программу входит полный доступ к онлайн-лекциям по английскому с разбором материала и онлайн-сборник для отработки навыков.",
    duration: "1 месяц",
    lessons: "12 занятий",
    price: "8 000 ₽",
    period: "/месяц",
    features: [
      "3 занятия в неделю по 90 минут",
      "Ежедневные домашние задания с проверкой",
      "Симуляция экзамена в реальных условиях",
      "Разбор устной части с преподавателем",
      "Полный доступ к онлайн-лекциям по английскому с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
  },
  {
    id: "speaking-club",
    title: "Разговорный клуб",
    description:
      "Практика устной английской речи в мини-группах. Помогает преодолеть языковой барьер и уверенно сдать устную часть ЕГЭ. В программу входит полный доступ к онлайн-лекциям по английскому с разбором материала и онлайн-сборник для отработки навыков.",
    duration: "8 месяцев",
    lessons: "32 занятия",
    price: "2 500 ₽",
    period: "/месяц",
    features: [
      "1 занятие в неделю по 60 минут",
      "Темы и ситуации из реального ЕГЭ",
      "Работа в парах и мини-группах",
      "Обратная связь по произношению",
      "Полный доступ к онлайн-лекциям по английскому с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
  },
  {
    id: "oge-individual",
    title: "Индивидуальные занятия",
    description:
      "Персональная программа под ваш уровень и цели. Преподаватель полностью сосредоточен на ваших слабых местах и темпе усвоения. В программу входит полный доступ к онлайн-лекциям по английскому с разбором материала и онлайн-сборник для отработки навыков.",
    duration: "Гибкий график",
    lessons: "По договорённости",
    price: "1 500 ₽",
    period: "/занятие",
    features: [
      "Индивидуальный план подготовки",
      "Гибкое расписание",
      "Фокус на проблемных темах",
      "Подробная обратная связь после каждого урока",
      "Полный доступ к онлайн-лекциям по английскому с разбором материала",
      "Онлайн-сборник для отработки навыков",
    ],
    popular: false,
  },
];

export interface Lecture {
  id: string;
  topic: string;
  description: string;
  duration: string;
  section: string;
}

export const exercises = [
  // ========== Тема 1: Существительные (множественное число) ==========
  {
    id: "nouns-choice-1",
    type: "choice" as const,
    title: "Множественное число существительных",
    instruction:
      "Выберите правильную форму множественного числа для каждого существительного.",
    questions: [
      {
        id: "nc1",
        text: "one cat — two ___",
        options: ["cats", "cates", "caties", "cat"],
        correctAnswer: "cats",
      },
      {
        id: "nc2",
        text: "one box — two ___",
        options: ["boxen", "boxes", "boxs", "boxies"],
        correctAnswer: "boxes",
      },
      {
        id: "nc3",
        text: "one baby — two ___",
        options: ["babys", "babies", "babyes", "babiess"],
        correctAnswer: "babies",
      },
      {
        id: "nc4",
        text: "one knife — two ___",
        options: ["knifes", "knives", "knivs", "knive"],
        correctAnswer: "knives",
      },
      {
        id: "nc5",
        text: "one potato — two ___",
        options: ["potatos", "potatoes", "potato", "potats"],
        correctAnswer: "potatoes",
      },
      {
        id: "nc6",
        text: "one child — two ___",
        options: ["childs", "children", "childes", "childrens"],
        correctAnswer: "children",
      },
      {
        id: "nc7",
        text: "one mouse — two ___",
        options: ["mouses", "mice", "mices", "mouse"],
        correctAnswer: "mice",
      },
      {
        id: "nc8",
        text: "one sheep — two ___",
        options: ["sheeps", "sheep", "sheepes", "sheepies"],
        correctAnswer: "sheep",
      },
      {
        id: "nc9",
        text: "one tooth — two ___",
        options: ["tooths", "teeth", "teethes", "tooth"],
        correctAnswer: "teeth",
      },
      {
        id: "nc10",
        text: "one man — two ___",
        options: ["mans", "men", "mens", "man"],
        correctAnswer: "men",
      },
    ],
  },
  {
    id: "nouns-fill-1",
    type: "fill" as const,
    title: "Образуйте множественное число",
    instruction:
      "Напишите форму множественного числа для каждого существительного.",
    questions: [
      { id: "nf1", text: "One fox, two ___.", correctAnswer: "foxes" },
      { id: "nf2", text: "One city, two ___.", correctAnswer: "cities" },
      { id: "nf3", text: "One leaf, two ___.", correctAnswer: "leaves" },
      { id: "nf4", text: "One deer, two ___.", correctAnswer: "deer" },
      { id: "nf5", text: "One fish, two ___.", correctAnswer: "fish" },
      { id: "nf6", text: "One bus, two ___.", correctAnswer: "buses" },
      { id: "nf7", text: "One shelf, two ___.", correctAnswer: "shelves" },
      { id: "nf8", text: "One foot, two ___.", correctAnswer: "feet" },
      { id: "nf9", text: "One person, two ___.", correctAnswer: "people" },
      { id: "nf10", text: "One woman, two ___.", correctAnswer: "women" },
    ],
  },
  {
    id: "nouns-match-1",
    type: "match" as const,
    title: "Существительные-исключения",
    instruction:
      "Сопоставьте каждое существительное в единственном числе с его формой множественного числа.",
    pairs: [
      { id: "nm1", left: "child", right: "children" },
      { id: "nm2", left: "mouse", right: "mice" },
      { id: "nm3", left: "tooth", right: "teeth" },
      { id: "nm4", left: "foot", right: "feet" },
      { id: "nm5", left: "man", right: "men" },
      { id: "nm6", left: "woman", right: "women" },
      { id: "nm7", left: "person", right: "people" },
      { id: "nm8", left: "sheep", right: "sheep" },
    ],
  },

  // ========== nouns-choice-2 ==========
  {
    id: "nouns-choice-2",
    type: "choice" as const,
    title: "Особые случаи множественного числа",
    instruction:
      "Выберите правильную форму множественного числа для особых случаев.",
    questions: [
      {
        id: "nc11",
        text: "one deer — two ___",
        options: ["deer", "deers", "deeres", "deeries"],
        correctAnswer: "deer",
      },
      {
        id: "nc12",
        text: "one phenomenon — two ___",
        options: ["phenomenons", "phenomena", "phenomenas", "phenomenones"],
        correctAnswer: "phenomena",
      },
      {
        id: "nc13",
        text: "one mother-in-law — two ___",
        options: [
          "mother-in-laws",
          "mothers-in-law",
          "mothers-in-laws",
          "mother-in-law",
        ],
        correctAnswer: "mothers-in-law",
      },
      {
        id: "nc14",
        text: "one cactus — two ___",
        options: ["cactuses", "cacti", "cacti / cactuses", "cactus"],
        correctAnswer: "cacti / cactuses",
      },
      {
        id: "nc15",
        text: "These ___ are too tight. I need a bigger size.",
        options: ["trouser", "trousers", "a trousers", "trouserses"],
        correctAnswer: "trousers",
      },
      {
        id: "nc16",
        text: "one ox — two ___",
        options: ["oxes", "oxen", "oxens", "ox"],
        correctAnswer: "oxen",
      },
    ],
  },

  // ========== Тема 2: Местоимения ==========
  {
    id: "pronouns-choice-1",
    type: "choice" as const,
    title: "Личные и притяжательные местоимения",
    instruction: "Выберите правильное местоимение для заполнения пропуска.",
    questions: [
      {
        id: "pc1",
        text: "___ am a student.",
        options: ["I", "Me", "My", "Mine"],
        correctAnswer: "I",
      },
      {
        id: "pc2",
        text: "Give ___ the book, please.",
        options: ["I", "me", "my", "mine"],
        correctAnswer: "me",
      },
      {
        id: "pc3",
        text: "This is ___ house.",
        options: ["I", "me", "my", "mine"],
        correctAnswer: "my",
      },
      {
        id: "pc4",
        text: "This book is ___.",
        options: ["I", "me", "my", "mine"],
        correctAnswer: "mine",
      },
      {
        id: "pc5",
        text: "She looked at ___ in the mirror.",
        options: ["her", "she", "hers", "herself"],
        correctAnswer: "herself",
      },
      {
        id: "pc6",
        text: "___ don't like coffee.",
        options: ["He", "She", "They", "It"],
        correctAnswer: "They",
      },
      {
        id: "pc7",
        text: "I saw ___ at the party yesterday.",
        options: ["him", "his", "he", "himself"],
        correctAnswer: "him",
      },
      {
        id: "pc8",
        text: "___ car is parked outside.",
        options: ["Their", "Theirs", "They", "Them"],
        correctAnswer: "Their",
      },
    ],
  },
  {
    id: "pronouns-fill-1",
    type: "fill" as const,
    title: "Заполните пропуски местоимениями",
    instruction: "Вставьте подходящее местоимение в правильной форме.",
    questions: [
      {
        id: "pf1",
        text: "___ (Мы) are going to the cinema tonight.",
        correctAnswer: "We",
      },
      {
        id: "pf2",
        text: "Please help ___ (нас) with the homework.",
        correctAnswer: "us",
      },
      {
        id: "pf3",
        text: "___ (Её) dress is very beautiful.",
        correctAnswer: "Her",
      },
      { id: "pf4", text: "This pen is ___ (моя).", correctAnswer: "mine" },
      {
        id: "pf5",
        text: "He hurt ___ (себя) while playing football.",
        correctAnswer: "himself",
      },
      {
        id: "pf6",
        text: "___ (Их) dog is very friendly.",
        correctAnswer: "Their",
      },
    ],
  },

  // ========== pronouns-match-1 ==========
  {
    id: "pronouns-match-1",
    type: "match" as const,
    title: "Типы местоимений",
    instruction: "Сопоставьте тип местоимения с примером его использования.",
    pairs: [
      {
        id: "pm1",
        left: "Личное (подлежащее)",
        right: "She works in a hospital.",
      },
      {
        id: "pm2",
        left: "Личное (дополнение)",
        right: "I saw him at the station.",
      },
      {
        id: "pm3",
        left: "Притяжательное (прилагательное)",
        right: "This is their house.",
      },
      {
        id: "pm4",
        left: "Притяжательное (местоимение)",
        right: "That book is mine.",
      },
      {
        id: "pm5",
        left: "Возвратное",
        right: "She taught herself to play the piano.",
      },
      {
        id: "pm6",
        left: "Указательное",
        right: "Those flowers are beautiful.",
      },
    ],
  },

  // ========== Тема 3: Прилагательные ==========
  {
    id: "adjectives-choice-1",
    type: "choice" as const,
    title: "Степени сравнения прилагательных",
    instruction:
      "Выберите правильную форму прилагательного (сравнительную или превосходную степень).",
    questions: [
      {
        id: "ac1",
        text: "A car is ___ than a bicycle.",
        options: ["fast", "faster", "fastest", "more fast"],
        correctAnswer: "faster",
      },
      {
        id: "ac2",
        text: "This is the ___ book I have ever read.",
        options: [
          "interesting",
          "more interesting",
          "most interesting",
          "interestinger",
        ],
        correctAnswer: "most interesting",
      },
      {
        id: "ac3",
        text: "She is ___ than her sister.",
        options: ["tall", "taller", "tallest", "more tall"],
        correctAnswer: "taller",
      },
      {
        id: "ac4",
        text: "Mount Everest is the ___ mountain in the world.",
        options: ["high", "higher", "highest", "more high"],
        correctAnswer: "highest",
      },
      {
        id: "ac5",
        text: "This exercise is ___ than the previous one.",
        options: [
          "difficult",
          "more difficult",
          "most difficult",
          "difficulter",
        ],
        correctAnswer: "more difficult",
      },
      {
        id: "ac6",
        text: "He is the ___ student in our class.",
        options: ["good", "better", "best", "most good"],
        correctAnswer: "best",
      },
      {
        id: "ac7",
        text: "My health is getting ___.",
        options: ["bad", "worse", "worst", "more bad"],
        correctAnswer: "worse",
      },
      {
        id: "ac8",
        text: "This is the ___ film I have ever seen.",
        options: ["bad", "worse", "worst", "most bad"],
        correctAnswer: "worst",
      },
    ],
  },
  {
    id: "adjectives-fill-1",
    type: "fill" as const,
    title: "Сравнительная и превосходная степень",
    instruction:
      "Поставьте прилагательное в скобках в правильную форму (сравнительную или превосходную).",
    questions: [
      {
        id: "af1",
        text: "Russia is the ___ (large) country in the world.",
        correctAnswer: "largest",
      },
      {
        id: "af2",
        text: "My bag is ___ (heavy) than yours.",
        correctAnswer: "heavier",
      },
      {
        id: "af3",
        text: "She speaks English ___ (fluently) than I do.",
        correctAnswer: "more fluently",
      },
      {
        id: "af4",
        text: "This is the ___ (expensive) restaurant in the city.",
        correctAnswer: "most expensive",
      },
      {
        id: "af5",
        text: "The weather today is ___ (bad) than yesterday.",
        correctAnswer: "worse",
      },
      {
        id: "af6",
        text: "He is the ___ (smart) person I know.",
        correctAnswer: "smartest",
      },
    ],
  },
  {
    id: "adjectives-match-1",
    type: "match" as const,
    title: "Сопоставьте степени сравнения",
    instruction:
      "Сопоставьте каждое прилагательное с его сравнительной и превосходной формами.",
    pairs: [
      { id: "am1", left: "good", right: "better — the best" },
      { id: "am2", left: "bad", right: "worse — the worst" },
      { id: "am3", left: "big", right: "bigger — the biggest" },
      {
        id: "am4",
        left: "beautiful",
        right: "more beautiful — the most beautiful",
      },
      { id: "am5", left: "little", right: "less — the least" },
      { id: "am6", left: "far", right: "farther — the farthest" },
    ],
  },

  // ========== adjectives-choice-2 ==========
  {
    id: "adjectives-choice-2",
    type: "choice" as const,
    title: "Сравнительные конструкции",
    instruction: "Выберите правильную форму для сравнения.",
    questions: [
      {
        id: "ac9",
        text: "She is ___ her sister.",
        options: ["as tall as", "taller as", "so tall as", "as tall than"],
        correctAnswer: "as tall as",
      },
      {
        id: "ac10",
        text: "This book is ___ interesting than that one.",
        options: ["less", "least", "more less", "not as"],
        correctAnswer: "less",
      },
      {
        id: "ac11",
        text: "The more you practise, ___ you become.",
        options: ["the better", "the best", "better", "more better"],
        correctAnswer: "the better",
      },
      {
        id: "ac12",
        text: "He is ___ of the two brothers.",
        options: ["the tallest", "the taller", "tallest", "taller"],
        correctAnswer: "the taller",
      },
      {
        id: "ac13",
        text: "That restaurant is ___ expensive than I expected.",
        options: [
          "a little more",
          "a little most",
          "more little",
          "most little",
        ],
        correctAnswer: "a little more",
      },
      {
        id: "ac14",
        text: "This is ___ option we have.",
        options: ["the least", "the less", "least", "less"],
        correctAnswer: "the least",
      },
    ],
  },

  // ========== Тема 4: Числительные ==========
  {
    id: "numerals-choice-1",
    type: "choice" as const,
    title: "Количественные и порядковые числительные",
    instruction: "Выберите правильную форму числительного.",
    questions: [
      {
        id: "numc1",
        text: "Как будет «первый» по-английски?",
        options: ["one", "first", "oneth", "once"],
        correctAnswer: "first",
      },
      {
        id: "numc2",
        text: "15 пишется как ___",
        options: ["fiveteen", "fifteen", "fifty", "fifth"],
        correctAnswer: "fifteen",
      },
      {
        id: "numc3",
        text: "«Второй» по-английски — это ___",
        options: ["two", "second", "twoth", "twice"],
        correctAnswer: "second",
      },
      {
        id: "numc4",
        text: "50 пишется как ___",
        options: ["fifteen", "fifty", "fivety", "fifteenth"],
        correctAnswer: "fifty",
      },
      {
        id: "numc5",
        text: "«Двенадцатый» по-английски — это ___",
        options: ["twelfth", "twelveth", "twelve", "twentieth"],
        correctAnswer: "twelfth",
      },
      {
        id: "numc6",
        text: "100 пишется как ___",
        options: ["hundred", "a hundred", "one hundred", "Все варианты верны"],
        correctAnswer: "Все варианты верны",
      },
      {
        id: "numc7",
        text: "«Третий» по-английски — это ___",
        options: ["three", "third", "threeth", "thirth"],
        correctAnswer: "third",
      },
      {
        id: "numc8",
        text: "1 000 000 пишется как ___",
        options: ["million", "a million", "one million", "Все варианты верны"],
        correctAnswer: "Все варианты верны",
      },
    ],
  },
  {
    id: "numerals-fill-1",
    type: "fill" as const,
    title: "Напишите числительные словами",
    instruction: "Напишите числительные по-английски словами.",
    questions: [
      { id: "numf1", text: "11 → ___", correctAnswer: "eleven" },
      { id: "numf2", text: "12 → ___", correctAnswer: "twelve" },
      { id: "numf3", text: "20 → ___", correctAnswer: "twenty" },
      { id: "numf4", text: "3-й → ___", correctAnswer: "third" },
      { id: "numf5", text: "5-й → ___", correctAnswer: "fifth" },
      { id: "numf6", text: "9-й → ___", correctAnswer: "ninth" },
    ],
  },

  // ========== numerals-match-1 ==========
  {
    id: "numerals-match-1",
    type: "match" as const,
    title: "Числа и их написание",
    instruction: "Сопоставьте число с его правильным написанием по-английски.",
    pairs: [
      { id: "numm1", left: "21", right: "twenty-one" },
      { id: "numm2", left: "99", right: "ninety-nine" },
      { id: "numm3", left: "143", right: "one hundred and forty-three" },
      { id: "numm4", left: "5 000", right: "five thousand" },
      { id: "numm5", left: "1 000 000", right: "one million" },
      { id: "numm6", left: "2 500", right: "two thousand five hundred" },
    ],
  },

  // ========== Тема 5: Времена глаголов ==========
  {
    id: "tenses-choice-1",
    type: "choice" as const,
    title: "Present Simple vs Present Continuous",
    instruction:
      "Выберите правильную форму глагола: Present Simple или Present Continuous.",
    questions: [
      {
        id: "tc1",
        text: "She ___ as a teacher.",
        options: ["works", "is working", "work", "are working"],
        correctAnswer: "works",
      },
      {
        id: "tc2",
        text: "Listen! Somebody ___ in the next room.",
        options: ["sings", "is singing", "sing", "are singing"],
        correctAnswer: "is singing",
      },
      {
        id: "tc3",
        text: "I usually ___ breakfast at 8 o'clock.",
        options: ["have", "am having", "has", "is having"],
        correctAnswer: "have",
      },
      {
        id: "tc4",
        text: "They ___ football at the moment.",
        options: ["play", "are playing", "plays", "is playing"],
        correctAnswer: "are playing",
      },
      {
        id: "tc5",
        text: "The train ___ at 6 pm every day.",
        options: ["leaves", "is leaving", "leave", "are leaving"],
        correctAnswer: "leaves",
      },
      {
        id: "tc6",
        text: "Look! It ___ outside.",
        options: ["snows", "is snowing", "snow", "are snowing"],
        correctAnswer: "is snowing",
      },
      {
        id: "tc7",
        text: "Water ___ at 100 degrees Celsius.",
        options: ["boils", "is boiling", "boil", "are boiling"],
        correctAnswer: "boils",
      },
      {
        id: "tc8",
        text: "We ___ a party next Saturday.",
        options: ["have", "are having", "has", "is having"],
        correctAnswer: "are having",
      },
    ],
  },
  {
    id: "tenses-fill-1",
    type: "fill" as const,
    title: "Present Perfect",
    instruction: "Поставьте глагол в скобках в Present Perfect.",
    questions: [
      {
        id: "tf1",
        text: "I ___ (already / finish) my homework.",
        correctAnswer: "have already finished",
      },
      {
        id: "tf2",
        text: "She ___ (never / be) to London.",
        correctAnswer: "has never been",
      },
      {
        id: "tf3",
        text: "They ___ (just / arrive) at the airport.",
        correctAnswer: "have just arrived",
      },
      {
        id: "tf4",
        text: "He ___ (not / see) that film yet.",
        correctAnswer: "has not seen",
      },
      {
        id: "tf5",
        text: "___ you ever ___ (eat) sushi?",
        correctAnswer: "Have eaten",
      },
      {
        id: "tf6",
        text: "We ___ (live) here since 2015.",
        correctAnswer: "have lived",
      },
    ],
  },
  {
    id: "tenses-choice-2",
    type: "choice" as const,
    title: "Past Simple vs Past Continuous",
    instruction:
      "Выберите правильную форму глагола: Past Simple или Past Continuous.",
    questions: [
      {
        id: "tc2a",
        text: "I ___ TV when she called.",
        options: ["watched", "was watching", "were watching", "had watched"],
        correctAnswer: "was watching",
      },
      {
        id: "tc2b",
        text: "He ___ to work yesterday.",
        options: ["walked", "was walking", "were walking", "had walked"],
        correctAnswer: "walked",
      },
      {
        id: "tc2c",
        text: "They ___ dinner when the lights went out.",
        options: ["had", "were having", "was having", "have had"],
        correctAnswer: "were having",
      },
      {
        id: "tc2d",
        text: "She ___ a book when I came in.",
        options: ["read", "was reading", "were reading", "has read"],
        correctAnswer: "was reading",
      },
      {
        id: "tc2e",
        text: "We ___ tennis from 5 to 6 yesterday.",
        options: ["played", "were playing", "was playing", "have played"],
        correctAnswer: "were playing",
      },
      {
        id: "tc2f",
        text: "I ___ my keys this morning.",
        options: ["lost", "was losing", "were losing", "had lost"],
        correctAnswer: "lost",
      },
    ],
  },
  {
    id: "tenses-fill-2",
    type: "fill" as const,
    title: "Past Perfect",
    instruction: "Поставьте глагол в скобках в Past Perfect.",
    questions: [
      {
        id: "tf2a",
        text: "She ___ (already / finish) her homework when I called.",
        correctAnswer: "had already finished",
      },
      {
        id: "tf2b",
        text: "He ___ (not / eat) before he left.",
        correctAnswer: "had not eaten",
      },
      {
        id: "tf2c",
        text: "They ___ (live) there for five years before moving.",
        correctAnswer: "had lived",
      },
      {
        id: "tf2d",
        text: "___ you ___ (see) the film before we watched it?",
        correctAnswer: "Had seen",
      },
      {
        id: "tf2e",
        text: "The train ___ (already / leave) when we arrived.",
        correctAnswer: "had already left",
      },
      {
        id: "tf2f",
        text: "I ___ (never / be) to Paris before that trip.",
        correctAnswer: "had never been",
      },
    ],
  },
  {
    id: "tenses-choice-3",
    type: "choice" as const,
    title: "Future Simple и другие формы будущего",
    instruction: "Выберите правильную форму для выражения будущего времени.",
    questions: [
      {
        id: "tc3a",
        text: "I ___ you with your homework.",
        options: ["will help", "am going to help", "help", "helped"],
        correctAnswer: "will help",
      },
      {
        id: "tc3b",
        text: "Look at those clouds! It ___ rain.",
        options: ["will", "is going to", "is raining", "rains"],
        correctAnswer: "is going to",
      },
      {
        id: "tc3c",
        text: "The train ___ at 7 pm tomorrow.",
        options: [
          "will leave",
          "leaves",
          "is leaving",
          "Все варианты возможны",
        ],
        correctAnswer: "leaves",
      },
      {
        id: "tc3d",
        text: "I ___ my grandmother this weekend. I've already bought tickets.",
        options: ["will visit", "am visiting", "visit", "visited"],
        correctAnswer: "am visiting",
      },
      {
        id: "tc3e",
        text: "Don't worry, I ___ you know as soon as I arrive.",
        options: ["will let", "am letting", "let", "am going to let"],
        correctAnswer: "will let",
      },
      {
        id: "tc3f",
        text: "By this time next year, I ___ university.",
        options: [
          "will finish",
          "will have finished",
          "finish",
          "am finishing",
        ],
        correctAnswer: "will have finished",
      },
    ],
  },
  {
    id: "tenses-match-1",
    type: "match" as const,
    title: "Времена и их употребление",
    instruction:
      "Сопоставьте каждое время с его основным случаем употребления.",
    pairs: [
      {
        id: "tm1",
        left: "Present Simple",
        right: "регулярные действия, факты, расписания",
      },
      {
        id: "tm2",
        left: "Present Continuous",
        right: "действия прямо сейчас, временные ситуации",
      },
      {
        id: "tm3",
        left: "Present Perfect",
        right: "действия в прошлом с результатом в настоящем",
      },
      {
        id: "tm4",
        left: "Past Simple",
        right: "законченные действия в прошлом",
      },
      {
        id: "tm5",
        left: "Past Continuous",
        right: "действия в процессе в определённый момент в прошлом",
      },
      {
        id: "tm6",
        left: "Past Perfect",
        right: "действие, которое произошло до другого действия в прошлом",
      },
      {
        id: "tm7",
        left: "Future Simple",
        right: "спонтанные решения, обещания, предсказания",
      },
      {
        id: "tm8",
        left: "Future Perfect",
        right: "действие, которое завершится к определённому моменту в будущем",
      },
    ],
  },

  // ========== tenses-fill-3 ==========
  {
    id: "tenses-fill-3",
    type: "fill" as const,
    title: "Смешанные времена",
    instruction: "Поставьте глагол в скобках в правильное время.",
    questions: [
      {
        id: "tf3a",
        text: "By the time we arrived, they ___ (already / leave).",
        correctAnswer: "had already left",
      },
      {
        id: "tf3b",
        text: "She ___ (work) here for five years next month.",
        correctAnswer: "will have been working",
      },
      {
        id: "tf3c",
        text: "I ___ (wait) for the bus when I saw the accident.",
        correctAnswer: "was waiting",
      },
      {
        id: "tf3d",
        text: "They ___ (build) this bridge since last spring.",
        correctAnswer: "have been building",
      },
      {
        id: "tf3e",
        text: "At this time tomorrow, I ___ (lie) on the beach.",
        correctAnswer: "will be lying",
      },
      {
        id: "tf3f",
        text: "She ___ (not / finish) her project by the deadline.",
        correctAnswer: "had not finished",
      },
    ],
  },

  // ========== Тема 6: Пассивный залог ==========
  {
    id: "passive-choice-1",
    type: "choice" as const,
    title: "Активный и пассивный залог",
    instruction:
      "Выберите правильную форму глагола: активный или пассивный залог.",
    questions: [
      {
        id: "pasc1",
        text: "The letter ___ yesterday.",
        options: ["sent", "was sent", "is sent", "sends"],
        correctAnswer: "was sent",
      },
      {
        id: "pasc2",
        text: "Shakespeare ___ Hamlet.",
        options: ["wrote", "was written", "is written", "writes"],
        correctAnswer: "wrote",
      },
      {
        id: "pasc3",
        text: "The house ___ in 1990.",
        options: ["built", "was built", "builds", "is built"],
        correctAnswer: "was built",
      },
      {
        id: "pasc4",
        text: "English ___ all over the world.",
        options: ["speaks", "is spoken", "spoke", "was spoken"],
        correctAnswer: "is spoken",
      },
      {
        id: "pasc5",
        text: "The cake ___ by my mother.",
        options: ["made", "was made", "makes", "is making"],
        correctAnswer: "was made",
      },
      {
        id: "pasc6",
        text: "The window ___ by the boy.",
        options: ["broke", "was broken", "breaks", "is breaking"],
        correctAnswer: "was broken",
      },
      {
        id: "pasc7",
        text: "This book ___ by millions of people.",
        options: ["reads", "is read", "has read", "was read"],
        correctAnswer: "is read",
      },
      {
        id: "pasc8",
        text: "The project ___ by next month.",
        options: ["will finish", "will be finished", "finishes", "is finished"],
        correctAnswer: "will be finished",
      },
    ],
  },
  {
    id: "passive-fill-1",
    type: "fill" as const,
    title: "Преобразуйте в пассивный залог",
    instruction:
      "Поставьте глагол в скобках в правильную форму пассивного залога.",
    questions: [
      {
        id: "pasf1",
        text: "The work ___ (finish) yesterday.",
        correctAnswer: "was finished",
      },
      {
        id: "pasf2",
        text: "Coffee ___ (grow) in Brazil.",
        correctAnswer: "is grown",
      },
      {
        id: "pasf3",
        text: "The letter ___ (write) by John.",
        correctAnswer: "was written",
      },
      {
        id: "pasf4",
        text: "The room ___ (clean) every day.",
        correctAnswer: "is cleaned",
      },
      {
        id: "pasf5",
        text: "The film ___ (show) next week.",
        correctAnswer: "will be shown",
      },
      {
        id: "pasf6",
        text: "The car ___ (steal) last night.",
        correctAnswer: "was stolen",
      },
    ],
  },

  // ========== passive-match-1 ==========
  {
    id: "passive-match-1",
    type: "match" as const,
    title: "Активный и пассивный залог",
    instruction:
      "Сопоставьте предложение в активном залоге с его эквивалентом в пассивном.",
    pairs: [
      {
        id: "pasm1",
        left: "Shakespeare wrote Hamlet.",
        right: "Hamlet was written by Shakespeare.",
      },
      {
        id: "pasm2",
        left: "The chef is cooking dinner.",
        right: "Dinner is being cooked by the chef.",
      },
      {
        id: "pasm3",
        left: "Someone has stolen my car.",
        right: "My car has been stolen.",
      },
      {
        id: "pasm4",
        left: "They will finish the project soon.",
        right: "The project will be finished soon.",
      },
      {
        id: "pasm5",
        left: "The teacher gave us homework.",
        right: "We were given homework by the teacher.",
      },
      {
        id: "pasm6",
        left: "Millions of people speak English.",
        right: "English is spoken by millions of people.",
      },
    ],
  },

  // ========== Тема 7: Условные предложения ==========
  {
    id: "conditionals-choice-1",
    type: "choice" as const,
    title: "Типы условных предложений",
    instruction: "Выберите правильную форму глагола в условном предложении.",
    questions: [
      {
        id: "cc1",
        text: "If I ___ you, I would study harder.",
        options: ["am", "were", "was", "be"],
        correctAnswer: "were",
      },
      {
        id: "cc2",
        text: "If it rains, I ___ an umbrella.",
        options: ["take", "will take", "would take", "took"],
        correctAnswer: "will take",
      },
      {
        id: "cc3",
        text: "If she had studied, she ___ the exam.",
        options: ["passes", "would pass", "would have passed", "passed"],
        correctAnswer: "would have passed",
      },
      {
        id: "cc4",
        text: "Water ___ if you heat it to 100°C.",
        options: ["boils", "would boil", "will boil", "boiled"],
        correctAnswer: "boils",
      },
      {
        id: "cc5",
        text: "If I had more time, I ___ travelling.",
        options: [
          "take up",
          "will take up",
          "would take up",
          "would have taken up",
        ],
        correctAnswer: "would take up",
      },
      {
        id: "cc6",
        text: "If he ___ earlier, he wouldn't have missed the train.",
        options: ["left", "had left", "leaves", "would leave"],
        correctAnswer: "had left",
      },
    ],
  },
  {
    id: "conditionals-fill-1",
    type: "fill" as const,
    title: "Условные предложения",
    instruction:
      "Поставьте глагол в скобках в правильную форму для условного предложения.",
    questions: [
      {
        id: "cf1",
        text: "If it ___ (rain), I will stay at home.",
        correctAnswer: "rains",
      },
      {
        id: "cf2",
        text: "If I ___ (have) more money, I would buy a car.",
        correctAnswer: "had",
      },
      {
        id: "cf3",
        text: "She would have called if she ___ (know) your number.",
        correctAnswer: "had known",
      },
      {
        id: "cf4",
        text: "If you ___ (heat) ice, it melts.",
        correctAnswer: "heat",
      },
      {
        id: "cf5",
        text: "If we ___ (leave) now, we'll catch the bus.",
        correctAnswer: "leave",
      },
      {
        id: "cf6",
        text: "He would be happier if he ___ (not / worry) so much.",
        correctAnswer: "did not worry",
      },
    ],
  },
  {
    id: "conditionals-match-1",
    type: "match" as const,
    title: "Типы условных предложений",
    instruction: "Сопоставьте тип условного предложения с его формулой.",
    pairs: [
      {
        id: "cm1",
        left: "Zero Conditional",
        right: "If + Present Simple → Present Simple",
      },
      {
        id: "cm2",
        left: "First Conditional",
        right: "If + Present Simple → will + infinitive",
      },
      {
        id: "cm3",
        left: "Second Conditional",
        right: "If + Past Simple → would + infinitive",
      },
      {
        id: "cm4",
        left: "Third Conditional",
        right: "If + Past Perfect → would have + past participle",
      },
    ],
  },

  // ========== conditionals-choice-2 ==========
  {
    id: "conditionals-choice-2",
    type: "choice" as const,
    title: "Смешанные типы условий",
    instruction: "Выберите правильную форму глагола для условного предложения.",
    questions: [
      {
        id: "cc7",
        text: "If I ___ taller, I would have become a basketball player.",
        options: ["am", "were", "had been", "have been"],
        correctAnswer: "had been",
      },
      {
        id: "cc8",
        text: "If she ___ about the meeting, she would be here now.",
        options: ["knew", "had known", "knows", "has known"],
        correctAnswer: "had known",
      },
      {
        id: "cc9",
        text: "If I were you, I ___ that job.",
        options: ["take", "will take", "would take", "would have taken"],
        correctAnswer: "would take",
      },
      {
        id: "cc10",
        text: "Unless you ___ now, you'll miss the bus.",
        options: ["leave", "left", "will leave", "would leave"],
        correctAnswer: "leave",
      },
      {
        id: "cc11",
        text: "Provided that he ___ hard, he will pass the exam.",
        options: ["studies", "studied", "will study", "would study"],
        correctAnswer: "studies",
      },
      {
        id: "cc12",
        text: "If it hadn't been for the map, we ___ lost.",
        options: ["get", "would get", "would have got", "got"],
        correctAnswer: "would have got",
      },
    ],
  },

  // ========== Тема 8: Причастия ==========
  {
    id: "participles-choice-1",
    type: "choice" as const,
    title: "Причастия настоящего и прошедшего времени",
    instruction:
      "Выберите правильную форму причастия (Participle I или Participle II).",
    questions: [
      {
        id: "partc1",
        text: "The ___ (cook) dinner smells delicious.",
        options: ["cooking", "cooked", "cook", "has cooked"],
        correctAnswer: "cooking",
      },
      {
        id: "partc2",
        text: "She was ___ (bore) by the lecture.",
        options: ["boring", "bored", "bore", "bores"],
        correctAnswer: "bored",
      },
      {
        id: "partc3",
        text: "The film was so ___ (excite)!",
        options: ["excited", "exciting", "excite", "excites"],
        correctAnswer: "exciting",
      },
      {
        id: "partc4",
        text: "He looked ___ (worry) about the exam.",
        options: ["worrying", "worried", "worry", "worries"],
        correctAnswer: "worried",
      },
      {
        id: "partc5",
        text: "The ___ (fall) leaves covered the ground.",
        options: ["fallen", "falling", "fell", "falls"],
        correctAnswer: "fallen",
      },
      {
        id: "partc6",
        text: "I heard someone ___ (sing) in the next room.",
        options: ["sang", "singing", "sung", "sings"],
        correctAnswer: "singing",
      },
      {
        id: "partc7",
        text: "The ___ (break) window needs to be replaced.",
        options: ["breaking", "broken", "broke", "breaks"],
        correctAnswer: "broken",
      },
      {
        id: "partc8",
        text: "I'm ___ (tire) after such a long day.",
        options: ["tiring", "tired", "tire", "tires"],
        correctAnswer: "tired",
      },
    ],
  },
  {
    id: "participles-fill-1",
    type: "fill" as const,
    title: "Причастия с окончаниями -ing и -ed",
    instruction:
      "Выберите и впишите правильную форму причастия: с окончанием -ing или -ed.",
    questions: [
      {
        id: "partf1",
        text: "The movie was really ___ (interest).",
        correctAnswer: "interesting",
      },
      {
        id: "partf2",
        text: "I was ___ (interest) in the story.",
        correctAnswer: "interested",
      },
      {
        id: "partf3",
        text: "The news was ___ (shock).",
        correctAnswer: "shocking",
      },
      {
        id: "partf4",
        text: "She was ___ (shock) by the result.",
        correctAnswer: "shocked",
      },
      {
        id: "partf5",
        text: "His behaviour was ___ (annoy).",
        correctAnswer: "annoying",
      },
      {
        id: "partf6",
        text: "He felt ___ (annoy) by the delay.",
        correctAnswer: "annoyed",
      },
    ],
  },
  {
    id: "participles-match-1",
    type: "match" as const,
    title: "Причастия: сопоставление",
    instruction: "Сопоставьте предложение с правильным типом причастия.",
    pairs: [
      {
        id: "partm1",
        left: "The boy playing in the yard is my son.",
        right: "Participle I (активное)",
      },
      {
        id: "partm2",
        left: "The broken vase was expensive.",
        right: "Participle II (пассивное)",
      },
      {
        id: "partm3",
        left: "I am interested in history.",
        right: "Participle II (чувство/состояние)",
      },
      {
        id: "partm4",
        left: "The waiting room was full of people.",
        right: "Participle I (определение)",
      },
      {
        id: "partm5",
        left: "She looked tired after work.",
        right: "Participle II (внешний вид)",
      },
      {
        id: "partm6",
        left: "The running water sounded relaxing.",
        right: "Participle I (активное, звук воды)",
      },
    ],
  },

  // ========== participles-choice-2 ==========
  {
    id: "participles-choice-2",
    type: "choice" as const,
    title: "Причастия в контексте",
    instruction: "Выберите правильную форму причастия для каждого предложения.",
    questions: [
      {
        id: "partc9",
        text: "___ from the hill, the city looked beautiful.",
        options: ["Seeing", "Seen", "See", "To see"],
        correctAnswer: "Seen",
      },
      {
        id: "partc10",
        text: "___ tired, she went to bed early.",
        options: ["Feeling", "Felt", "Feel", "To feel"],
        correctAnswer: "Feeling",
      },
      {
        id: "partc11",
        text: "The children ___ outside are my neighbours.",
        options: ["playing", "played", "play", "are playing"],
        correctAnswer: "playing",
      },
      {
        id: "partc12",
        text: "I found the movie ___. I almost fell asleep.",
        options: ["bored", "boring", "bore", "bores"],
        correctAnswer: "boring",
      },
      {
        id: "partc13",
        text: "___ in 1995, this building is quite old.",
        options: ["Building", "Built", "Build", "To build"],
        correctAnswer: "Built",
      },
      {
        id: "partc14",
        text: "She sat in the corner, ___ by everyone.",
        options: ["ignoring", "ignored", "ignore", "to ignore"],
        correctAnswer: "ignored",
      },
    ],
  },
];

export const exerciseTopics = [
  {
    id: "nouns",
    title: "Существительные",
    description:
      "Множественное число существительных, исключения и особые случаи",
    exerciseIds: [
      "nouns-choice-1",
      "nouns-fill-1",
      "nouns-match-1",
      "nouns-choice-2",
    ],
  },
  {
    id: "pronouns",
    title: "Местоимения",
    description: "Личные, притяжательные, возвратные и объектные местоимения",
    exerciseIds: ["pronouns-choice-1", "pronouns-fill-1", "pronouns-match-1"],
  },
  {
    id: "adjectives",
    title: "Прилагательные",
    description: "Степени сравнения прилагательных, исключения",
    exerciseIds: [
      "adjectives-choice-1",
      "adjectives-fill-1",
      "adjectives-match-1",
      "adjectives-choice-2",
    ],
  },
  {
    id: "numerals",
    title: "Числительные",
    description: "Количественные и порядковые числительные, написание",
    exerciseIds: ["numerals-choice-1", "numerals-fill-1", "numerals-match-1"],
  },
  {
    id: "tenses",
    title: "Времена глаголов",
    description:
      "Present Simple, Present Continuous, Present Perfect, Past Simple, Past Continuous, Past Perfect, Future Simple",
    exerciseIds: [
      "tenses-choice-1",
      "tenses-fill-1",
      "tenses-choice-2",
      "tenses-fill-2",
      "tenses-choice-3",
      "tenses-match-1",
      "tenses-fill-3",
    ],
  },
  {
    id: "passive",
    title: "Пассивный залог",
    description: "Активный и пассивный залог в разных временах",
    exerciseIds: ["passive-choice-1", "passive-fill-1", "passive-match-1"],
  },
  {
    id: "conditionals",
    title: "Условные предложения",
    description: "Zero, First, Second и Third Conditional",
    exerciseIds: [
      "conditionals-choice-1",
      "conditionals-fill-1",
      "conditionals-match-1",
      "conditionals-choice-2",
    ],
  },
  {
    id: "participles",
    title: "Причастия",
    description: "Participle I и Participle II, причастия с -ing и -ed",
    exerciseIds: [
      "participles-choice-1",
      "participles-fill-1",
      "participles-match-1",
      "participles-choice-2",
    ],
  },
];

export const lectures: Lecture[] = [
  {
    id: "lecture-1",
    topic: "Present Tenses: Simple vs Continuous",
    description:
      "Разница между Present Simple и Present Continuous. Типичные ошибки и лайфхаки для ЕГЭ.",
    duration: "45:00",
    section: "Грамматика",
  },
  {
    id: "lecture-2",
    topic: "Past Tenses: всё об английском прошлом",
    description:
      "Past Simple, Past Continuous, Past Perfect — когда и как использовать. Практика на заданиях ЕГЭ.",
    duration: "52:00",
    section: "Грамматика",
  },
  {
    id: "lecture-3",
    topic: "Future Tenses: как говорить о будущем",
    description:
      "Will, going to, Present Continuous для будущего. Разбор стратегий выполнения заданий.",
    duration: "38:00",
    section: "Грамматика",
  },
  {
    id: "lecture-4",
    topic: "Артикли в английском: понятное объяснение",
    description:
      "Когда ставить a/an, the и когда артикль не нужен. Схемы и мнемотехники для запоминания.",
    duration: "55:00",
    section: "Грамматика",
  },
  {
    id: "lecture-5",
    topic: "Чтение: как понимать тексты ЕГЭ",
    description:
      "Стратегии выполнения заданий №10–16 раздела «Чтение». Работа с незнакомыми словами и тайминг.",
    duration: "42:00",
    section: "Чтение",
  },
  {
    id: "lecture-6",
    topic: "Аудирование: учимся слышать детали",
    description:
      "Как тренировать восприятие английской речи на слух. Типы заданий по аудированию и ловушки.",
    duration: "48:00",
    section: "Аудирование",
  },
  {
    id: "lecture-7",
    topic: "Письмо: структура личного письма",
    description:
      "Как правильно писать личное письмо по критериям ЕГЭ. Шаблоны, клише и частые ошибки.",
    duration: "50:00",
    section: "Письмо",
  },
  {
    id: "lecture-8",
    topic: "Эссе: аргументация и структура",
    description:
      "Как писать развёрнутое письменное высказывание. Введение, аргументы, контраргументы, заключение.",
    duration: "56:00",
    section: "Письмо",
  },
  {
    id: "lecture-9",
    topic: "Устная часть: монолог и диалог",
    description:
      "Как готовиться к устной части ЕГЭ. Типовые темы, речевые клише и советы по произношению.",
    duration: "44:00",
    section: "Устная часть",
  },
  {
    id: "lecture-10",
    topic: "Лексика: идиомы и фразовые глаголы",
    description:
      "Топ-50 фразовых глаголов и идиом для ЕГЭ. Как использовать их в письме и устной части.",
    duration: "47:00",
    section: "Лексика",
  },
  {
    id: "lecture-11",
    topic: "Словообразование: приставки и суффиксы",
    description:
      "Как преобразовывать слова для заданий №20–28. Основные суффиксы существительных, прилагательных, глаголов.",
    duration: "40:00",
    section: "Грамматика и лексика",
  },
  {
    id: "lecture-12",
    topic: "Стратегия выполнения экзамена целиком",
    description:
      "Как распределять время на ЕГЭ. С чего начинать, сколько минут на каждую часть, как проверять.",
    duration: "60:00",
    section: "Стратегия",
  },
];
