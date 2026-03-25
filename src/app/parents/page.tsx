import Link from "next/link"
import { parentGuides, parentTips } from "@/data/siteContent"

export default function ParentsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Родителям</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Как пользоваться сайтом и как помочь ребёнку
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          Этот раздел сделан коротким и спокойным. Здесь собраны основные инструкции,
          чтобы родитель быстро понял, где материалы, как устроены дистанционные занятия
          и как задать вопрос преподавателю.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Как пользоваться сайтом</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            {parentGuides.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Рекомендации</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            {parentTips.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Быстрые переходы</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/students"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Темы для учащихся
          </Link>
          <Link
            href="/distance"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Дистанционные занятия
          </Link>
          <Link
            href="/feedback"
            className="rounded-full border border-black/10 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Задать вопрос
          </Link>
        </div>
      </section>
    </div>
  )
}