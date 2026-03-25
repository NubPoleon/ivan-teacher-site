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
    previewImage: string
    panaboardUrl: string
    activInspireUrl: string
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
  
  const NUMERAL_FILE_ID = "1XNqfTH5IZndm-f-zxdsLpCFoC8Ghc7kW"
  const LINEAR_FILE_ID = "1qkSPf9etfeyVTZhVtKGsyRoBY4a1clFs"
  
  const NUMERAL_PREVIEW = `https://drive.google.com/file/d/${NUMERAL_FILE_ID}/preview`
  const NUMERAL_VIEW = `https://drive.google.com/file/d/${NUMERAL_FILE_ID}/view?usp=sharing`
  const NUMERAL_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${NUMERAL_FILE_ID}`
  const NUMERAL_VIDEO = "https://rutube.ru/play/embed/8ce7c5df9e0ce4eb09d2da0170c365d2/"
  const NUMERAL_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLScqy0lyP4-2QfjSEUB7bocQpN-vaUE-HjF2L2_PtmU-pikm6Q/viewform?embedded=true"
  
  const LINEAR_PREVIEW = `https://drive.google.com/file/d/${LINEAR_FILE_ID}/preview`
  const LINEAR_VIEW = `https://drive.google.com/file/d/${LINEAR_FILE_ID}/view?usp=sharing`
  const LINEAR_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${LINEAR_FILE_ID}`
  const LINEAR_VIDEO = "https://rutube.ru/play/embed/f54da8e42384e191a2437a90e9b12790/"
  const LINEAR_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLScXor3V1Pcy0zKiDjOMWWc9_w2flYkj48x0rXa84DFsnSG3gw/viewform?embedded=true"
  
  // Скрины для раздела "Учителям"
  const NUMERAL_SCREENSHOT = "/numeral-systems.png"
  const LINEAR_SCREENSHOT = "/linear-functions.jpg"
  
  // Ссылки на файлы для досок
  const NUMERAL_PANABOARD_URL = ""
  const NUMERAL_ACTIVINSPIRE_URL = "https://drive.google.com/file/d/11CnBZzou6hIyrFbfHSU6Trjk0JN6fwgT/view?usp=drive_link"
  
  const LINEAR_PANABOARD_URL = ""
  const LINEAR_ACTIVINSPIRE_URL = "https://drive.google.com/file/d/1x0GhB5_JzNGOyHoeqghqm_ng4r6k1gpY/view?usp=drive_link"
  
  // Временные общие комплекты, чтобы не дублировать одно и то же вручную
  const INFORMATICS_PREVIEW = NUMERAL_PREVIEW
  const INFORMATICS_VIEW = NUMERAL_VIEW
  const INFORMATICS_DOWNLOAD = NUMERAL_DOWNLOAD
  const INFORMATICS_VIDEO = NUMERAL_VIDEO
  const INFORMATICS_FORM = NUMERAL_FORM
  
  const MATH_PREVIEW = LINEAR_PREVIEW
  const MATH_VIEW = LINEAR_VIEW
  const MATH_DOWNLOAD = LINEAR_DOWNLOAD
  const MATH_VIDEO = LINEAR_VIDEO
  const MATH_FORM = LINEAR_FORM
  
  export const teacherProfile = {
    name: "Иван Добровольский",
    role: "Учитель информатики и математики",
    school: "Школа № N",
    city: "Томск",
    email: "ivan.dobrovolskiy.95@gmail.com",
    telegram: "@Telivangram",
    photo: "/teacher-photo.jpg",
    greeting:
      "Этот сайт - единая рабочая точка для учащихся, родителей, коллег и проверяющих. Здесь собраны учебные материалы, дистанционные занятия, интерактивные задания и формы обратной связи.",
    shortBio:
      "Я преподаю информатику и математику, делаю упор на понятные объяснения, цифровые инструменты и практику. На сайте можно быстро перейти к теме, открыть материалы, пройти тест и получить домашнее задание.",
    tools: [
      "Google Forms для тестов и обратной связи",
      "Google Slides и Google Drive для презентаций",
      "Rutube для видеообъяснений",
      "Интерактивные задания внутри сайта для дистанционных уроков",
    ],
    achievements: [
      "Курсы повышения квалификации",
      "Участие в методических мероприятиях",
      "Грамоты, сертификаты и педагогические материалы",
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
        "Тема полезна для дальнейшего изучения логических схем, условий и анализа составных выражений в заданиях по информатике.",
      ],
      slidesEmbed: INFORMATICS_PREVIEW,
      videoEmbed: INFORMATICS_VIDEO,
      formEmbed: INFORMATICS_FORM,
      boardUrl: "",
      boardLabel: "Открыть доску по теме",
      downloads: [
        { label: "Скачать памятку по теме", url: INFORMATICS_DOWNLOAD },
        { label: "Скачать презентацию", url: INFORMATICS_DOWNLOAD },
      ],
      homework: [
        "Повтори обозначения логических операций.",
        "Реши 5 простых примеров на логические выражения.",
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
      slidesEmbed: NUMERAL_PREVIEW,
      videoEmbed: NUMERAL_VIDEO,
      formEmbed: NUMERAL_FORM,
      boardUrl: "",
      boardLabel: "Открыть интерактивную доску",
      downloads: [
        { label: "Скачать карточку перевода чисел", url: NUMERAL_DOWNLOAD },
        { label: "Скачать тренировочный лист", url: NUMERAL_DOWNLOAD },
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
      slidesEmbed: MATH_PREVIEW,
      videoEmbed: MATH_VIDEO,
      formEmbed: MATH_FORM,
      boardUrl: "",
      boardLabel: "Открыть координатную доску",
      downloads: [{ label: "Скачать лист с координатной сеткой", url: MATH_DOWNLOAD }],
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
      slidesEmbed: LINEAR_PREVIEW,
      videoEmbed: LINEAR_VIDEO,
      formEmbed: LINEAR_FORM,
      boardUrl: "",
      boardLabel: "Открыть доску с графиками",
      downloads: [
        { label: "Скачать конспект по линейной функции", url: LINEAR_DOWNLOAD },
        { label: "Скачать тренировочные задания", url: LINEAR_DOWNLOAD },
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
      slidesEmbed: NUMERAL_PREVIEW,
      videoEmbed: NUMERAL_VIDEO,
      miniQuizEmbed: NUMERAL_FORM,
      interactiveUrl: "",
      finalQuizEmbed: NUMERAL_FORM,
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
      slidesEmbed: LINEAR_PREVIEW,
      videoEmbed: LINEAR_VIDEO,
      miniQuizEmbed: LINEAR_FORM,
      interactiveUrl: "",
      finalQuizEmbed: LINEAR_FORM,
      homework: [
        "Построй график функции y = 2x + 1.",
        "Определи по графику, чему равны k и b.",
        "Повтори, как изменяется график при разных коэффициентах.",
      ],
    },
  ]
  
  export const teacherPresentations: TeacherPresentation[] = [
    {
      title: "Системы счисления - объяснение и тренажёр",
      description:
        "Материал для объяснения темы и проведения короткой самостоятельной работы.",
      previewImage: NUMERAL_SCREENSHOT,
      panaboardUrl: NUMERAL_PANABOARD_URL,
      activInspireUrl: NUMERAL_ACTIVINSPIRE_URL,
    },
    {
      title: "Линейные функции - графики и разбор",
      description:
        "Презентация с примерами построения графиков и заданиями для класса.",
      previewImage: LINEAR_SCREENSHOT,
      panaboardUrl: LINEAR_PANABOARD_URL,
      activInspireUrl: LINEAR_ACTIVINSPIRE_URL,
    },
  ]
  
  export const boardResources: BoardResource[] = [
    {
      title: "iDroo - доска по системам счисления",
      description:
        "Онлайн-доска для совместной работы, решения примеров и разбора ошибок.",
      type: "iDroo",
      access: "по ссылке, без регистрации - если включён гостевой доступ",
      url: "https://app.idroo.com/ru/boards/HLpmGkUXMJ",
    },
    {
      title: "Miro - mind map по логике и математике",
      description:
        "Интерактивная доска или карта темы для просмотра и самостоятельной работы.",
      type: "Miro",
      access: "просмотр по публичной ссылке",
      url: "https://miro.com/app/live-embed/uXjVGrmnbp0=/?embedMode=view_only_without_ui&moveToViewport=-581%2C-2376%2C2132%2C1299&embedId=741740655094",
    },
  ]
  
  export const mindMaps: MindMap[] = [
    {
      title: "Майндмап: логические операции",
      description:
        "Краткая визуальная схема по операциям НЕ, И, ИЛИ и их свойствам.",
      previewImage: "СИСТЕМЫ_СЧИСЛЕНИЯ.png",
      url: "",
    },
    {
      title: "Майндмап: линейная функция",
      description:
        "Схема по коэффициентам, графику и базовым свойствам линейной функции.",
      previewImage: "/СИСТЕМЫ_СЧИСЛЕНИЯ.png",
      url: "",
    },
  ]
  
  export const methodLibrary = [
    {
      title: "Сценарий урока",
      description: "Шаблон структуры урока с этапами и цифровыми инструментами.",
      url: NUMERAL_VIEW,
    },
    {
      title: "Рабочий лист",
      description: "Печатный или цифровой лист для тренировки по теме.",
      url: LINEAR_VIEW,
    },
    {
      title: "Полезный внешний ресурс",
      description: "Ссылка на проверенный источник с учебными материалами.",
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
    generalEmbed:
      "https://docs.google.com/forms/d/e/1FAIpQLSf2gm6aL3yIOjqkFh40CrdFySrpfOLLEpWHeIl7ib4W_OUFvg/viewform?embedded=true",
    parentsEmbed:
      "https://docs.google.com/forms/d/e/1FAIpQLSd0e3kujk5xwlmGjAZLBiJTIrCzzMw0e59lIwgIAXhJuIzzzg/viewform?embedded=true",
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