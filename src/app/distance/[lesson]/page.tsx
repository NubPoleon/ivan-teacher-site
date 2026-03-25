import Link from "next/link"
import { notFound } from "next/navigation"
import EmbedBlock from "@/components/ui/EmbedBlock"
import DistanceLessonInteractive from "@/components/interactive/DistanceLessonInteractive"
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
            <li>• Прочитай краткую теорию и открой презентацию.</li>
            <li>• Посмотри объяснение и выполни мини-тест.</li>
            <li>• Выполни интерактивное упражнение прямо на сайте.</li>
            <li>• Пройди итоговую форму и проверь домашнее задание.</li>
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
        description="Сюда вставляется embed-ссылка на презентацию урока."
        src={lesson.slidesEmbed}
        heightClassName="h-[420px]"
      />

      <EmbedBlock
        title="Видеообъяснение"
        description="Сюда вставляется embed-ссылка на видео по уроку."
        src={lesson.videoEmbed}
        heightClassName="h-[420px]"
      />

      <EmbedBlock
        title="Мини-тест"
        description="Первый короткий тест внутри страницы."
        src={lesson.miniQuizEmbed}
        heightClassName="h-[620px]"
      />

        <DistanceLessonInteractive lessonSlug={lesson.slug} />

      {lesson.interactiveUrl ? (
        <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">
            Дополнительный интерактив
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Если нужен внешний ресурс, здесь можно оставить ссылку на Miro, iDroo или другой тренажёр.
          </p>

          <a
            href={lesson.interactiveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-black/10 bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Открыть внешний интерактив
          </a>
        </section>
      ) : null}

      <EmbedBlock
        title="Итоговый тест"
        description="Финальная форма для проверки понимания темы."
        src={lesson.finalQuizEmbed}
        heightClassName="h-[620px]"
      />

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Домашнее задание</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
          {lesson.homework.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}