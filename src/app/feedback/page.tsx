import EmbedBlock from "@/components/ui/EmbedBlock"
import { faq, feedbackForms, teacherProfile } from "@/data/siteContent"

export default function FeedbackPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Обратная связь</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Вопросы, обратная связь и контакты
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          Здесь можно оставить любое сообщение, пожелание и обарщение через Google Form
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <EmbedBlock
          title="Общая форма обратной связи"
          description="Обращайтесь с любым вопросом"
          src={feedbackForms.generalEmbed}
          heightClassName="h-[620px]"
        />

        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">Контакты</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            <p>
              <span className="font-medium text-neutral-900">Преподаватель:</span>{" "}
              {teacherProfile.name}
            </p>
            <p>
              <span className="font-medium text-neutral-900">Email:</span>{" "}
              {teacherProfile.email}
            </p>
            <p>
              <span className="font-medium text-neutral-900">Telegram:</span>{" "}
              {teacherProfile.telegram}
            </p>
            <p>
              <span className="font-medium text-neutral-900">Школа / учреждение:</span>{" "}
              {teacherProfile.school}
            </p>
          </div>

          <div className="mt-6 rounded-[22px] border border-black/10 bg-neutral-50 p-5">
            <h3 className="text-base font-semibold text-neutral-950">Когда использовать этот раздел</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-600">
              <li>• если не открывается материал или видео;</li>
              <li>• если нужна помощь по теме;</li>
              <li>• если родителю нужно отправить вопрос преподавателю.</li>
            </ul>
          </div>
        </div>
      </section>

      <EmbedBlock
        title="Форма для родителей"
        description="Обращайтесь с любым вопросом"
        src={feedbackForms.parentsEmbed}
        heightClassName="h-[620px]"
      />

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">Частые вопросы</h2>
        <div className="mt-5 space-y-4">
          {faq.map((item) => (
            <article
              key={item.question}
              className="rounded-[22px] border border-black/10 bg-neutral-50 p-5"
            >
              <h3 className="text-base font-semibold text-neutral-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}