'use client'

import { useEffect, useState } from 'react'

export function CRTDateTime() {
  const [dateTime, setDateTime] = useState('')
  const [channel] = useState('00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const formatted = now.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).toUpperCase()
      setDateTime(formatted)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-4 right-4 font-mono text-[#00ff95] text-sm tracking-wider">
      <div className="glitch-text">{dateTime}</div>
      <div className="mt-1 text-right glitch-text">CHANNEL {channel}</div>
    </div>
  )
}

export function Logo() {
  return (
    <div className="font-mono text-2xl tracking-wider glitch-text">
      CK ▶
    </div>
  )
}

