import Link from "next/link"
import { lessons } from "@/data/siteContent"

export default function DistancePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Дистанционные занятия</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Готовые дистанционные уроки
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          Здесь собраны отдельные страницы-уроки: теория, презентация, видео, мини-тест,
          интерактив и итоговая форма.
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
              дистанционный урок
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
    </div>
  )
}
