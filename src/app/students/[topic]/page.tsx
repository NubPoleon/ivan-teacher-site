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

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: slug } = await params
  const topic = getTopicBySlug(slug)

  if (!topic) {
    notFound()
  }

  const hasDownloads = topic.downloads.some((item) => item.url)

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

      {topic.slidesEmbed ? (
        <EmbedBlock
          title="Презентация"
          description="Материал по теме в формате презентации."
          src={topic.slidesEmbed}
          heightClassName="h-[420px]"
        />
      ) : null}

      {topic.videoEmbed ? (
        <EmbedBlock
          title="Видео по теме"
          description="Короткое видеообъяснение по теме."
          src={topic.videoEmbed}
          heightClassName="h-[420px]"
        />
      ) : null}

      {topic.formEmbed ? (
        <EmbedBlock
          title="Тест по теме"
          description="Проверочная форма для самоконтроля."
          src={topic.formEmbed}
          heightClassName="h-[620px]"
        />
      ) : null}

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

          {hasDownloads ? (
            <div className="mt-4 flex flex-col gap-3">
              {topic.downloads
                .filter((item) => item.url)
                .map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-4 text-sm text-neutral-600">
              Материалы для скачивания будут добавлены позже.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}