import Link from "next/link"
import { lessons, teacherProfile, topics } from "@/data/siteContent"

export default function HomePage() {
  const featuredTopics = topics.slice(0, 4)
  const featuredLessons = lessons.slice(0, 2)

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-full border border-black/10 bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
            учебный хаб • материалы • формы • интерактив
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            {teacherProfile.name}
          </h1>
          <p className="mt-3 text-lg text-neutral-700">{teacherProfile.role}</p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600">
            {teacherProfile.greeting}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/students"
              className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Учащимся
            </Link>
            <Link
              href="/distance"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Дистанционные занятия
            </Link>
            <Link
              href="/teachers"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Учителям
            </Link>
            <Link
              href="/feedback"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Обратная связь
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
            <img
              src={teacherProfile.photo}
              alt={teacherProfile.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-neutral-500">{teacherProfile.school}</p>
            <p className="text-sm text-neutral-500">{teacherProfile.city}</p>
            <p className="text-sm text-neutral-600">{teacherProfile.shortBio}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Ученик",
            text: "Быстрый вход в тему, презентацию, тест, видео и домашнее задание.",
            href: "/students",
          },
          {
            title: "Родитель",
            text: "Короткие инструкции, полезные рекомендации и форма связи.",
            href: "/parents",
          },
          {
            title: "Учитель",
            text: "Каталог презентаций, доски, майндмапы и методические материалы.",
            href: "/teachers",
          },
          {
            title: "Проверяющий",
            text: "Понятная структура, встроенные формы и рабочие ссылки внутри сайта.",
            href: "/about",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            <h2 className="text-lg font-semibold text-neutral-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{item.text}</p>
          </Link>
        ))}
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Актуальные темы
          </h2>
          <p className="mt-2 text-neutral-600">
            Базовые школьные темы по информатике и математике, оформленные как отдельные учебные страницы.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/students/${topic.slug}`}
              className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:bg-neutral-50"
            >
              <div className="mb-3 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                {topic.category}
              </div>
              <h3 className="text-lg font-semibold text-neutral-950">{topic.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Дистанционные занятия
          </h2>
          <p className="mt-2 text-neutral-600">
            Отдельные страницы-уроки с теорией, встроенными формами и ссылками на интерактив.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredLessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/distance/${lesson.slug}`}
              className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:bg-neutral-50"
            >
              <h3 className="text-lg font-semibold text-neutral-950">{lesson.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{lesson.summary}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-neutral-900">
                Открыть занятие →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Быстрый вход
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/students" className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-200">
            Темы для учащихся
          </Link>
          <Link href="/distance" className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-200">
            Дистанционные уроки
          </Link>
          <Link href="/teachers" className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-200">
            Материалы для учителей
          </Link>
          <Link href="/feedback" className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-200">
            Форма обратной связи
          </Link>
          <Link href="/about" className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-200">
            О преподавателе
          </Link>
        </div>
      </section>
    </div>
  )
}