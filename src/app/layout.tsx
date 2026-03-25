import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Иван Добровольский - сайт преподавателя",
  description:
    "Сайт преподавателя информатики и математики: темы, дистанционные занятия, интерактивные задания, материалы для учащихся, родителей и учителей.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}