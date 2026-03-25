import { teacherProfile } from "@/data/siteContent"

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">О преподавателе</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          {teacherProfile.name}
        </h1>
        <p className="mt-3 text-base text-neutral-700">{teacherProfile.role}</p>
        <p className="mt-6 max-w-4xl text-base leading-7 text-neutral-600">
          {teacherProfile.shortBio}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <img
            src={teacherProfile.photo}
            alt={teacherProfile.name}
            className="aspect-[4/5] w-full rounded-[24px] object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-950">Педагогический профиль</h2>
            <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-600">
              <p><span className="font-medium text-neutral-900">Место работы:</span> {teacherProfile.school}</p>
              <p><span className="font-medium text-neutral-900">Город:</span> {teacherProfile.city}</p>
              <p><span className="font-medium text-neutral-900">Email:</span> {teacherProfile.email}</p>
              <p><span className="font-medium text-neutral-900">Telegram:</span> {teacherProfile.telegram}</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-950">Цифровые инструменты</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-600">
              {teacherProfile.tools.map((tool) => (
                <li key={tool}>• {tool}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-950">Достижения и материалы</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-600">
              {teacherProfile.achievements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}