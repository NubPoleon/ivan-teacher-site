import Link from "next/link"
import { notFound } from "next/navigation"
import EmbedBlock from "@/components/ui/EmbedBlock"
import { getTopicBySlug, topics } from "@/data/siteContent"

type TopicPageProps = {
  params: Promise<{ topic: string }>
}

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.slug }))
}

const interactiveTasks: Record<
  string,
  {
    title: string
    steps: string[]
    result: string
  }
> = {
  "boolean-algebra": {
    title: "Интерактивное задание: логический конструктор",
    steps: [
      "Открой интерактивную доску или форму по теме.",
      "Собери 3 логических выражения с операциями И, ИЛИ и НЕ.",
      "Для каждого выражения определи, при каких значениях переменных оно истинно.",
    ],
    result: "В результате у ученика должен получиться набор разобранных выражений с пояснением.",
  },
  "numeral-systems": {
    title: "Интерактивное задание: перевод чисел",
    steps: [
      "Переведи предложенные числа из десятичной системы в двоичную.",
      "Проверь себя по образцу или в мини-форме.",
      "Сделай 2 обратных перевода из двоичной системы в десятичную.",
    ],
    result: "Ученик закрепляет алгоритм перевода в обе стороны.",
  },
  algorithms: {
    title: "Интерактивное задание: собери алгоритм",
    steps: [
      "Прочитай перепутанные шаги решения задачи.",
      "Расположи шаги в правильном порядке.",
      "Объясни, почему именно такой порядок является корректным.",
    ],
    result: "Ученик понимает, что алгоритм - это точная последовательность действий.",
  },
  "truth-tables": {
    title: "Интерактивное задание: дострой таблицу истинности",
    steps: [
      "Открой шаблон таблицы или форму по теме.",
      "Заполни значения для простого логического выражения.",
      "Сравни результат с готовым ответом и исправь ошибки.",
    ],
    result: "Ученик учится строить таблицу истинности по шагам.",
  },
  "coordinate-plane": {
    title: "Интерактивное задание: точки на координатной плоскости",
    steps: [
      "Открой координатную сетку или интерактивную доску.",
      "Отметь точки по заданным координатам.",
      "Подпиши координаты уже отмеченных точек и проверь себя.",
    ],
    result: "Ученик закрепляет работу с осями и чтение координат.",
  },
  "linear-functions": {
    title: "Интерактивное задание: график линейной функции",
    steps: [
      "Выбери формулу вида y = kx + b.",
      "Построй по ней 2-3 точки и нанеси их на координатную плоскость.",
      "Сделай вывод, как коэффициенты влияют на положение прямой.",
    ],
    result: "Ученик связывает формулу функции с её графиком.",
  },
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: slug } = await params
  const topic = getTopicBySlug(slug)

  if (!topic) {
    notFound()
  }

  const task =
    interactiveTasks[topic.slug] ?? {
      title: "Интерактивное задание",
      steps: [
        "Открой интерактивный материал по теме.",
        "Выполни предложенные задания.",
        "Проверь результат и зафиксируй ошибки.",
      ],
      result: "Итог задания появится после заполнения контента.",
    }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <Link href="/students" className="text-sm text-neutral-500 hover:text-neutral-900">
          ← Назад к разделу «Учащимся»
        </Link>

        <div className="mt-4 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          {topic.category}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
          {topic.title}
        </h1>

        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          {topic.summary}
        </p>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Краткое объяснение темы</h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-neutral-600">
          {topic.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <EmbedBlock
        title="Презентация"
        description="Сюда вставляется embed-ссылка на опубликованную презентацию Google Slides."
        src={topic.slidesEmbed}
        heightClassName="h-[420px]"
      />

      <EmbedBlock
        title="Видео по теме"
        description="Сюда можно вставить YouTube embed или другой безопасный iframe-источник."
        src={topic.videoEmbed}
        heightClassName="h-[420px]"
      />

      <EmbedBlock
        title="Тест по теме"
        description="Сюда вставляется embed-ссылка на Google Form."
        src={topic.formEmbed}
        heightClassName="h-[620px]"
      />

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">{task.title}</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          Этот блок уже заполнен базовой логикой задания. Потом ты заменишь его ссылкой на Miro, iDroo или другой интерактив.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {task.steps.map((step, index) => (
            <div
              key={step}
              className="rounded-[22px] border border-black/10 bg-neutral-50 p-5"
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                Шаг {index + 1}
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[22px] border border-black/10 bg-neutral-50 p-5">
          <h3 className="text-base font-semibold text-neutral-950">Ожидаемый результат</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{task.result}</p>
        </div>

        {topic.boardUrl ? (
          <a
            href={topic.boardUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-black/10 bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {topic.boardLabel}
          </a>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-4 text-sm text-neutral-600">
            Здесь появится ссылка на интерактивную доску или внешний тренажёр.
          </div>
        )}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Домашнее задание</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            {topic.homework.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Скачать материалы</h2>
          <div className="mt-4 flex flex-col gap-3">
            {topic.downloads.map((item) =>
              item.url ? (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="rounded-full border border-dashed border-black/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-600"
                >
                  {item.label} - ссылка пока не добавлена
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
