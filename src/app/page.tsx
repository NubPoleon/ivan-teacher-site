import Link from "next/link"
import { teacherProfile } from "@/data/siteContent"

const quickLinks = [
  { href: "/students", label: "Учащимся" },
  { href: "/distance", label: "Дистанционные занятия" },
  { href: "/teachers", label: "Учителям" },
  { href: "/parents", label: "Родителям" },
  { href: "/feedback", label: "Обратная связь" },
  { href: "/about", label: "О преподавателе" },
]

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-black/10 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm text-neutral-500">Личный сайт преподавателя</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          {teacherProfile.name}
        </h1>

        <p className="mt-3 text-lg text-neutral-700">{teacherProfile.role}</p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600">
          {teacherProfile.greeting}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-950">О сайте</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
          На сайте собраны темы по информатике и математике, дистанционные занятия,
          презентации, интерактивные задания, формы обратной связи и методические материалы.
        </p>
      </section>
    </div>
  )
}
