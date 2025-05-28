import type { ReactNode } from "react"

interface TerminalWindowProps {
  title?: string
  children: ReactNode
}

export default function TerminalWindow({ title = "terminal", children }: TerminalWindowProps) {
  return (
    <div className="terminal-border bg-black/90 backdrop-blur-sm relative">
      <div className="scanline"></div>
      <div className="crt-screen relative z-10">
        {/* Terminal header */}
        <div className="flex items-center justify-between p-3 border-b border-green-400/30">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-green-400 text-sm">{title}</div>
          <div className="w-16"></div>
        </div>

        {/* Terminal content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
