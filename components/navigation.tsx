"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Writings" },
  ]

  return (
    <nav className="mb-16 relative z-10">
      <div className="flex justify-start space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base elegant-text font-medium transition-all duration-300 ${
              pathname === link.href ? "text-white border-b border-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
