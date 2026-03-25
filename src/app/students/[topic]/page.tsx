import Link from "next/link"
import { notFound } from "next/navigation"
import EmbedBlock from "@/components/ui/EmbedBlock"
import { getLessonBySlug, lessons } from "@/data/siteContent"

type LessonPageProps = {
  params: Promise<{ lesson: string }>
}

export function generateStaticParams() {
  return lessons.map((lesson) => ({ lesson: lesson.slug }))
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lesson: slug } = await params
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    notFound()
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <Link href="/distance" className="text-sm text-neutral-500 hover:text-neutral-900">
          ← Назад к дистанционным занятиям
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
          {lesson.title}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          {lesson.summary}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Цель урока</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            {lesson.objective.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Как пройти занятие</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            <li>• Сначала прочитайте теорию и откройте презентацию.</li>
            <li>• Затем посмотрите объяснение и выполните мини-тест.</li>
            <li>• После этого перейдите к интерактивному заданию и итоговой форме.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Краткий теоретический блок</h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-neutral-600">
          {lesson.theory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <EmbedBlock
        title="Презентация"
        description="Сюда вставляется embed-ссылка на опубликованную презентацию Google Slides."
        src={lesson.slidesEmbed}
      />

      <EmbedBlock
        title="Видеообъяснение"
        description="Сюда можно вставить YouTube embed или другой безопасный iframe-источник."
        src={lesson.videoEmbed}
      />

      <EmbedBlock
        title="Мини-тест"
        description="Первый короткий тест внутри страницы."
        src={lesson.miniQuizEmbed}
      />

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Интерактивное упражнение</h2>
        <p className="mt-3 text-base leading-7 text-neutral-600">
          Здесь можно дать ссылку на интерактивную доску, Miro, iDroo или отдельное упражнение по теме.
        </p>

        {lesson.interactiveUrl ? (
          <a
            href={lesson.interactiveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-black/10 bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Открыть интерактивное задание
          </a>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-5 text-sm text-neutral-600">
            Здесь появится ссылка на интерактив после заполнения файла данных.
          </div>
        )}
      </section>

      <EmbedBlock
        title="Итоговый тест"
        description="Финальная форма для проверки понимания темы."
        src={lesson.finalQuizEmbed}
      />

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Домашнее задание</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
          {lesson.homework.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href="/feedback"
            className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Задать вопрос по уроку
          </Link>
        </div>
      </section>
    </div>
  )
}