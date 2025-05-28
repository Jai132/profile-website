import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Cosmic Portfolio",
  description: "An elegant space-themed developer portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${crimsonText.variable}`}>
      <body className="font-body bg-space text-white min-h-screen">{children}</body>
    </html>
  )
}
