import Link from "next/link"
import { navigation, teacherProfile } from "@/data/siteContent"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(245,244,240,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="text-sm font-semibold tracking-tight text-neutral-900">
            {teacherProfile.name}
          </div>
          <div className="text-xs text-neutral-500">{teacherProfile.role}</div>
        </Link>

        <nav className="hidden flex-wrap items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-neutral-700 transition hover:bg-white hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}