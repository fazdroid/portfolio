'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CRTDateTime, Logo } from './components/crt-effects'

export default function VHSPortfolio() {
  const [noisePattern, setNoisePattern] = useState('')

  useEffect(() => {
    // Generate noise pattern
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 100
    canvas.height = 100
    if (ctx) {
      const imageData = ctx.createImageData(100, 100)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 255
        imageData.data[i] = value
        imageData.data[i + 1] = value
        imageData.data[i + 2] = value
        imageData.data[i + 3] = 15
      }
      ctx.putImageData(imageData, 0, 0)
      setNoisePattern(canvas.toDataURL())
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono relative overflow-hidden">
      {/* Noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url(${noisePattern})`,
          animation: 'noise 0.2s infinite'
        }}
      />
      
      <div className="relative z-10">
        <header className="p-6">
          <Logo />
          <CRTDateTime />
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="space-y-8">
            <section className="crt-text">
              <h1 className="text-4xl mb-6 glitch-text">OPEN-SOURCE<br />WEBSITES</h1>
              <p className="text-xl leading-relaxed tracking-wide mb-8">
                HI! I'M A CREATIVE DEVELOPER AND PHOTOGRAPHER<br />
                FOCUSED ON CRAFTING UNIQUE DIGITAL EXPERIENCES
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Project ${i}`}
                    width={600}
                    height={400}
                    className="w-full transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold tracking-wider">PROJECT {i}</h3>
                      <p className="text-sm tracking-wide">VIEW PROJECT ►</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

