export type ResourceLink = {
    label: string
    url: string
  }
  
  export type Topic = {
    slug: string
    title: string
    category: "Информатика" | "Математика"
    summary: string
    description: string[]
    slidesEmbed: string
    videoEmbed: string
    formEmbed: string
    boardUrl: string
    boardLabel: string
    downloads: ResourceLink[]
    homework: string[]
  }
  
  export type Lesson = {
    slug: string
    title: string
    summary: string
    objective: string[]
    theory: string[]
    slidesEmbed: string
    videoEmbed: string
    miniQuizEmbed: string
    interactiveUrl: string
    finalQuizEmbed: string
    homework: string[]
  }
  
  export type TeacherPresentation = {
    title: string
    description: string
    format: string
    previewEmbed: string
    driveUrl: string
    downloadUrl: string
  }
  
  export type BoardResource = {
    title: string
    description: string
    type: "iDroo" | "Miro"
    access: string
    url: string
  }
  
  export type MindMap = {
    title: string
    description: string
    previewImage: string
    url: string
  }
  
  export const teacherProfile = {
    name: "Иван Добровольский",
    role: "Учитель информатики и математики",
    school: "Школа номер N",
    city: "Томск",
    email: "ivan.dobrovolskiy.95@gmail.com ",
    telegram: "@Telivangram",
    photo: "/teacher-photo.jpg",
    greeting:
      "Этот сайт - единая рабочая точка для учащихся, родителей, коллег и проверяющих. Здесь собраны учебные материалы, дистанционные занятия, интерактивные задания и формы обратной связи.",
    shortBio:
      "Я преподаю информатику и математику, делаю упор на понятные объяснения, цифровые инструменты и практику. На сайте можно быстро перейти к теме, открыть материалы, пройти тест и получить домашнее задание.",
    tools: [
      "Google Forms для тестов и обратной связи",
      "Google Slides для презентаций и дистанционных уроков",
      "Miro для mind map и интерактивных схем",
      "iDroo для совместной работы на доске",
    ],
    achievements: [
      "Курсы повышения квалификации такие то",
      "Участие в конкурсах и методических мероприятиях",
      "Грамоты, сертификаты и публикации",
    ],
  }
  
  export const navigation = [
    { href: "/", label: "Главная" },
    { href: "/students", label: "Учащимся" },
    { href: "/distance", label: "Дистанционные занятия" },
    { href: "/teachers", label: "Учителям" },
    { href: "/parents", label: "Родителям" },
    { href: "/feedback", label: "Обратная связь" },
    { href: "/about", label: "О преподавателе" },
  ]
  
  export const topics: Topic[] = [
    {
      slug: "boolean-algebra",
      title: "Булева алгебра",
      category: "Информатика",
      summary:
        "Базовые логические операции, высказывания, формулы, истинность выражений.",
      description: [
        "В этой теме учащиеся знакомятся с логическими высказываниями и основными логическими операциями: НЕ, И, ИЛИ. Важно научиться не просто запоминать обозначения, а понимать, как строится логическое выражение и как меняется его результат.",
        "Тема полезна для дальнейшего изучения таблиц истинности, логических схем и заданий по информатике, где нужно анализировать условия и преобразовывать выражения.",
      ],
      slidesEmbed: "",
      videoEmbed: "https://rutube.ru/play/embed/482f78dc5595cd2ccf2d18f8bb8bbb05/",
      formEmbed: "",
      boardUrl: "",
      boardLabel: "Открыть доску по теме",
      downloads: [
        { label: "Скачать памятку по теме", url: "" },
        { label: "Скачать презентацию", url: "" },
      ],
      homework: [
        "Повтори обозначения логических операций.",
        "Реши 5 простых примеров на преобразование выражений.",
        "Подготовься к мини-тесту по высказываниям.",
      ],
    },
    {
      slug: "numeral-systems",
      title: "Системы счисления",
      category: "Информатика",
      summary:
        "Двоичная, восьмеричная, десятичная и шестнадцатеричная системы счисления.",
      description: [
        "В этой теме учащиеся учатся переводить числа из одной системы счисления в другую и понимать, зачем вообще используются разные способы записи числа.",
        "Особое внимание уделяется двоичной системе счисления, так как она непосредственно связана с работой компьютера и цифровых устройств.",
      ],
      slidesEmbed: "https://drive.google.com/file/d/1XNqfTH5IZndm-f-zxdsLpCFoC8Ghc7kW/preview",
      videoEmbed: "https://rutube.ru/play/embed/8ce7c5df9e0ce4eb09d2da0170c365d2/",
      formEmbed: "https://docs.google.com/forms/d/e/1FAIpQLScqy0lyP4-2QfjSEUB7bocQpN-vaUE-HjF2L2_PtmU-pikm6Q/viewform?embedded=true",
      boardUrl: "",
      boardLabel: "Открыть интерактивную доску",
      downloads: [
        { label: "Скачать карточку перевода чисел", url: "" },
        { label: "Скачать тренировочный лист", url: "" },
      ],
      homework: [
        "Переведи 6 чисел из десятичной системы в двоичную.",
        "Повтори алгоритм обратного перевода.",
        "Подготовься к итоговому тесту по теме.",
      ],
    },
    
    {
      slug: "coordinate-plane",
      title: "Координатная плоскость",
      category: "Математика",
      summary:
        "Оси координат, точки на плоскости, чтение и построение графиков в базовом формате.",
      description: [
        "Учащиеся учатся ориентироваться на координатной плоскости, понимать расположение точки, подписывать оси и находить координаты по рисунку.",
        "Это базовая тема для дальнейшего перехода к графикам функций, аналитической геометрии и задачам с визуальным представлением данных.",
      ],
      slidesEmbed: "https://drive.google.com/file/d/1qkSPf9etfeyVTZhVtKGsyRoBY4a1clFs/preview",
      videoEmbed: "",
      formEmbed: "",
      boardUrl: "",
      boardLabel: "Открыть координатную доску",
      downloads: [{ label: "Скачать лист с координатной сеткой", url: "" }],
      homework: [
        "Построй 8 точек на координатной плоскости.",
        "Подпиши координаты уже отмеченных точек.",
      ],
    },
    {
      slug: "linear-functions",
      title: "Линейные функции",
      category: "Математика",
      summary:
        "Понимание вида y = kx + b, построение графика и чтение свойств функции.",
      description: [
        "Тема посвящена линейной функции и её графику. Учащиеся разбирают, как коэффициенты влияют на положение прямой, и учатся строить график по нескольким точкам.",
        "На этом материале удобно отрабатывать чтение графиков и связь между формулой и её визуальным представлением.",
      ],
      slidesEmbed: "https://drive.google.com/file/d/1qkSPf9etfeyVTZhVtKGsyRoBY4a1clFs/preview",
      videoEmbed: "",
      formEmbed: "",
      boardUrl: "",
      boardLabel: "Открыть доску с графиками",
      downloads: [
        { label: "Скачать конспект по линейной функции", url: "" },
        { label: "Скачать тренировочные задания", url: "" },
      ],
      homework: [
        "Построй графики двух линейных функций.",
        "Определи коэффициенты по готовому графику.",
        "Реши 3 задачи на чтение графика.",
      ],
    },
  ]
  
  export const lessons: Lesson[] = [
    {
      slug: "distance-numeral-systems",
      title: "Дистанционное занятие: Системы счисления",
      summary:
        "Готовый урок с теорией, презентацией, видео, мини-тестом и итоговой проверкой.",
      objective: [
        "Понять, зачем нужны разные системы счисления.",
        "Научиться переводить числа из десятичной системы в двоичную и обратно.",
        "Закрепить тему через мини-тест и итоговую форму.",
      ],
      theory: [
        "Система счисления - это способ записи чисел с использованием определённого набора символов. В десятичной системе мы используем 10 цифр, в двоичной - только 0 и 1.",
        "Для перевода из десятичной системы в двоичную используется деление на 2 с записью остатков. Для обратного перевода нужно разложить число по степеням основания.",
      ],
      slidesEmbed: "https://drive.google.com/file/d/1XNqfTH5IZndm-f-zxdsLpCFoC8Ghc7kW/preview",
      videoEmbed: "https://rutube.ru/play/embed/8ce7c5df9e0ce4eb09d2da0170c365d2/",
      miniQuizEmbed: "https://docs.google.com/forms/d/e/1FAIpQLScqy0lyP4-2QfjSEUB7bocQpN-vaUE-HjF2L2_PtmU-pikm6Q/viewform?embedded=true",
      interactiveUrl: "",
      finalQuizEmbed: "https://docs.google.com/forms/d/e/1FAIpQLScqy0lyP4-2QfjSEUB7bocQpN-vaUE-HjF2L2_PtmU-pikm6Q/viewform?embedded=true",
      homework: [
        "Выполни ещё 5 переводов чисел самостоятельно.",
        "Повтори правила записи двоичных чисел.",
        "Пришли вопрос через форму обратной связи, если остались затруднения.",
      ],
    },
    {
      slug: "distance-linear-functions",
      title: "Дистанционное занятие: Линейные функции",
      summary:
        "Урок по математике с графиками, объяснением коэффициентов и итоговым мини-контролем.",
      objective: [
        "Повторить вид линейной функции.",
        "Научиться строить график по формуле.",
        "Потренироваться читать свойства функции по графику.",
      ],
      theory: [
        "Линейная функция имеет вид y = kx + b, где k отвечает за наклон прямой, а b - за точку пересечения с осью y.",
        "Чтобы построить график, удобно подставить несколько значений x, получить точки и соединить их прямой линией.",
      ],
      slidesEmbed: "https://drive.google.com/file/d/1qkSPf9etfeyVTZhVtKGsyRoBY4a1clFs/preview",
      videoEmbed: "https://rutube.ru/play/embed/f54da8e42384e191a2437a90e9b12790/",
      miniQuizEmbed: "https://docs.google.com/forms/d/e/1FAIpQLScXor3V1Pcy0zKiDjOMWWc9_w2flYkj48x0rXa84DFsnSG3gw/viewform?embedded=true",
      interactiveUrl: "",
      finalQuizEmbed:  "https://docs.google.com/forms/d/e/1FAIpQLScXor3V1Pcy0zKiDjOMWWc9_w2flYkj48x0rXa84DFsnSG3gw/viewform?embedded=true",
      homework: [
        "Построй график функции y = 2x + 1.",
        "Определи по графику, чему равны k и b.",
        "Повтори, как изменяется график при разных коэффициентах.",
      ],
    },
  ]
  
  export const teacherPresentations: TeacherPresentation[] = [
    {
      title: "Булева алгебра - урок и практика",
      description:
        "Презентация для урока с базовыми логическими операциями и заданиями на закрепление.",
      format: "Google Slides / PDF",
      previewEmbed: "",
      driveUrl: "",
      downloadUrl: "",
    },
    {
      title: "Системы счисления - объяснение и тренажёр",
      description:
        "Материал для объяснения темы и проведения короткой самостоятельной работы.",
      format: "Google Slides / PDF",
      previewEmbed: "",
      driveUrl: "",
      downloadUrl: "",
    },
    {
      title: "Линейные функции - графики и разбор",
      description:
        "Презентация с примерами построения графиков и заданиями для класса.",
      format: "Google Slides / PDF",
      previewEmbed: "",
      driveUrl: "",
      downloadUrl: "",
    },
  ]
  
  export const boardResources: BoardResource[] = [
    {
      title: "iDroo - доска по системам счисления",
      description:
        "Онлайн-доска для совместной работы, решения примеров и разбора ошибок.",
      type: "iDroo",
      access: "по ссылке, без регистрации - если включён гостевой доступ",
      url: "",
    },
    {
      title: "Miro - mind map по логике и алгоритмам",
      description:
        "Интерактивная карта темы с ветками, примерами и опорными схемами.",
      type: "Miro",
      access: "просмотр по публичной ссылке",
      url: "",
    },
  ]
  
  export const mindMaps: MindMap[] = [
    {
      title: "Майндмап: логические операции",
      description:
        "Краткая визуальная схема по операциям НЕ, И, ИЛИ и их свойствам.",
      previewImage: "",
      url: "",
    },
    {
      title: "Майндмап: линейная функция",
      description:
        "Схема по коэффициентам, графику и базовым свойствам линейной функции.",
      previewImage: "",
      url: "",
    },
  ]
  
  export const methodLibrary = [
    {
      title: "Сценарий урока",
      description: "Шаблон структуры урока с этапами и цифровыми инструментами.",
      url: "",
    },
    {
      title: "Рабочий лист",
      description: "Печатный или цифровой лист для тренировки по теме.",
      url: "",
    },
    {
      title: "Полезный внешний ресурс",
      description: "Ссылка на проверенный источник с интерактивной практикой.",
      url: "",
    },
  ]
  
  export const parentGuides = [
    "Откройте раздел «Учащимся» и выберите нужную тему.",
    "Для дистанционного урока используйте раздел «Дистанционные занятия».",
    "Если у ребёнка возникли трудности, отправьте вопрос через форму обратной связи.",
    "Проверьте, что видео и формы открываются на вашем устройстве заранее.",
  ]
  
  export const parentTips = [
    "Помогайте ребёнку соблюдать последовательность: теория -> презентация -> тест -> домашнее задание.",
    "Не подсказывайте ответ сразу - лучше попросите объяснить ход решения.",
    "Если тема даётся тяжело, используйте короткие подходы по 10-15 минут с перерывами.",
  ]
  
  export const feedbackForms = {
    generalEmbed: "https://docs.google.com/forms/d/e/1FAIpQLSf2gm6aL3yIOjqkFh40CrdFySrpfOLLEpWHeIl7ib4W_OUFvg/viewform?embedded=true",
    parentsEmbed: "https://docs.google.com/forms/d/e/1FAIpQLSd0e3kujk5xwlmGjAZLBiJTIrCzzMw0e59lIwgIAXhJuIzzzg/viewform?embedded=true",
  }

  export const faq = [
    {
      question: "Нужно ли регистрироваться, чтобы открыть материалы?",
      answer:
        "Нет. Сайт должен работать как открытая учебная витрина. Если какая-то ссылка требует вход, её нужно заменить на публичную.",
    },
    {
      question: "Где искать дистанционные занятия?",
      answer:
        "В отдельном разделе «Дистанционные занятия». Также на них есть переходы с главной страницы и из раздела «Учащимся».",
    },
    {
      question: "Можно ли скачать материалы на устройство?",
      answer:
        "Да. Для тем и для раздела «Учителям» предусмотрены отдельные кнопки скачивания.",
    },
  ]
  
  export function getTopicBySlug(slug: string) {
    return topics.find((topic) => topic.slug === slug)
  }
  
  export function getLessonBySlug(slug: string) {
    return lessons.find((lesson) => lesson.slug === slug)
  }