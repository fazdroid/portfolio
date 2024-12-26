'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Play, Rewind, FastForward, Pause } from 'lucide-react'

const photos = [
  { id: 1, src: '/placeholder.svg?height=300&width=400', alt: 'Vintage street scene' },
  { id: 2, src: '/placeholder.svg?height=300&width=400', alt: 'Retro portrait' },
  { id: 3, src: '/placeholder.svg?height=300&width=400', alt: 'Neon cityscape' },
  { id: 4, src: '/placeholder.svg?height=300&width=400', alt: 'Analog camera close-up' },
  { id: 5, src: '/placeholder.svg?height=300&width=400', alt: 'Synthwave sunset' },
  { id: 6, src: '/placeholder.svg?height=300&width=400', alt: 'Vintage car at night' },
]

export default function VHSPortfolio() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="p-6 border-b border-gray-700">
        <h1 className="text-4xl font-bold mb-2 glitch" data-text="REWIND">REWIND</h1>
        <p className="text-gray-400">A Nostalgic Photography Journey</p>
      </header>

      <nav className="flex justify-center space-x-4 my-6">
        <button className="vhs-button" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button className="vhs-button">
          <Rewind className="w-6 h-6" />
        </button>
        <button className="vhs-button">
          <FastForward className="w-6 h-6" />
        </button>
      </nav>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="vhs-photo">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="vhs-overlay"></div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-12 p-6 border-t border-gray-700 text-center">
        <p>&copy; 2023 REWIND Photography. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  )
}

