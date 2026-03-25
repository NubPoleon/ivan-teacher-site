"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigation, teacherProfile } from "@/data/siteContent"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()

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
          {navigation.map((item) => {
            const active = isActive(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-3 py-2 text-sm transition",
                  active
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-700 hover:bg-white hover:text-neutral-950",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
