import Link from "next/link"
import { teacherProfile } from "@/data/siteContent"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-sm font-semibold text-neutral-900">
          {teacherProfile.name}
        </div>
        <div className="text-sm text-neutral-600">
          {teacherProfile.role} • {teacherProfile.school}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <Link href={`mailto:${teacherProfile.email}`} className="hover:text-neutral-950">
            {teacherProfile.email}
          </Link>
          <span>{teacherProfile.telegram}</span>
          <span>{teacherProfile.city}</span>
        </div>
      </div>
    </footer>
  )
}