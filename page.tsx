'use client'

import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const now = new Date()
    setDateTime(now.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).toUpperCase())
  }, [])

  return (
    <div className="min-h-screen bg-[#000105] font-mono text-white overflow-hidden">
      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px]" />
      
      {/* Static noise effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-screen">
        <div className="absolute inset-0 bg-noise animate-noise" />
      </div>

      {/* Content */}
      <div className="relative p-6 max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-32">
          <div className="text-[#00ff95] tracking-wider">
            CK <span className="inline-block">▶</span>
          </div>
          <div className="text-right">
            <div className="text-[#00ff95] tracking-wider">{dateTime}</div>
            <div className="text-[#00ff95] tracking-wider mt-1">◀ CHANNEL 00 ▶</div>
          </div>
        </header>

        {/* Main content */}
        <main className="space-y-24">
          <div>
            <h1 className="text-2xl tracking-wider mb-4 glitch-text">
              OPEN-SOURCE<br />
              WEBSITES
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-xl tracking-wider leading-relaxed glitch-text">
              HI! I'M CHRISTIAN KAISERMANN, A CARIOCA<br />
              BASED IN BERLIN, WEB ENGINEER, CSS<br />
              ENTHUSIAST AND AVID OPEN-SOURCERER.
            </p>

            <p className="text-xl tracking-wider leading-relaxed glitch-text">
              CURRENTLY, I'M FOCUSED ON IMPROVING THE<br />
              WEB AND ELEVATING DIGITAL EXPERIENCES.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

