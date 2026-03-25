import Link from "next/link"
import { lessons } from "@/data/siteContent"

export default function DistancePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Дистанционные занятия</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Готовые страницы-уроки
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          В этом разделе собраны дистанционные занятия в формате готовых страниц:
          теория, презентация, видео, мини-тест, итоговая форма и домашнее задание.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/distance/${lesson.slug}`}
            className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm transition hover:bg-neutral-50"
          >
            <div className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
              готов пройти сейчас
            </div>
            <h2 className="mt-4 text-xl font-semibold text-neutral-950">
              {lesson.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {lesson.summary}
            </p>
            <span className="mt-5 inline-flex text-sm font-medium text-neutral-900">
              Открыть занятие →
            </span>
          </Link>
        ))}
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Как использовать раздел</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "1. Откройте урок",
              text: "Выберите нужное занятие и пройдите блоки сверху вниз.",
            },
            {
              title: "2. Выполните тесты",
              text: "Мини-тест и итоговая форма могут быть встроены прямо внутрь страницы.",
            },
            {
              title: "3. Проверьте домашнее задание",
              text: "В конце каждого урока есть список действий для закрепления темы.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[22px] border border-black/10 bg-neutral-50 p-5"
            >
              <h3 className="text-base font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}