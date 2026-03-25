import Link from "next/link"
import { lessons, topics } from "@/data/siteContent"

export default function StudentsPage() {
  const informatics = topics.filter((topic) => topic.category === "Информатика")
  const mathematics = topics.filter((topic) => topic.category === "Математика")

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Учащимся</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Темы, материалы и задания
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          В этом разделе собраны темы по информатике и математике. Для каждой темы предусмотрены короткое объяснение,
          презентация, видео, тест, интерактив и домашнее задание.
        </p>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Быстрый доступ к дистанционным занятиям</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/distance/${lesson.slug}`}
              className="rounded-[22px] border border-black/10 bg-neutral-50 p-5 transition hover:bg-neutral-100"
            >
              <h3 className="text-base font-semibold text-neutral-950">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{lesson.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Информатика</h2>
          <p className="mt-2 text-neutral-600">Базовые темы с переходом на отдельные учебные страницы.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {informatics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/students/${topic.slug}`}
              className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:bg-neutral-50"
            >
              <h3 className="text-lg font-semibold text-neutral-950">{topic.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Математика</h2>
          <p className="mt-2 text-neutral-600">Темы с теорией, материалами и домашними заданиями.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mathematics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/students/${topic.slug}`}
              className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:bg-neutral-50"
            >
              <h3 className="text-lg font-semibold text-neutral-950">{topic.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}