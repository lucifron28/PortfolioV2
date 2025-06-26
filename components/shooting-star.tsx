"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ShootingStar {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  duration: number
  delay: number
}

export function ShootingStars() {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now() + Math.random()
      const startX = Math.random() * (window.innerWidth * 0.3)
      const startY = Math.random() * (window.innerHeight * 0.4) 
      const endX = startX + Math.random() * 300 + 200 
      const endY = startY + Math.random() * 200 + 100 
      const duration = Math.random() * 2000 + 1000 

      const newStar: ShootingStar = {
        id,
        startX,
        startY,
        endX,
        endY,
        duration,
        delay: 0,
      }

      setShootingStars((prev) => [...prev, newStar])

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== id))
      }, duration + 500)
    }

    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        createShootingStar()
      }
    }, 1500) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={
            {
              left: star.startX,
              top: star.startY,
              animation: `shootingStar ${star.duration}ms linear forwards`,
              "--end-x": `${star.endX - star.startX}px`,
              "--end-y": `${star.endY - star.startY}px`,
            } as React.CSSProperties
          }
        >
          {/* Outer glow/aura */}
          <div className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#8BE9FD]/40 via-[#8BE9FD]/20 to-transparent rounded-full blur-sm" />
          
          {/* Middle glow */}
          <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#8BE9FD]/60 via-[#8BE9FD]/30 to-transparent rounded-full blur-xs" />
          
          {/* Core shooting star */}
          <div className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#8BE9FD] to-transparent rounded-full opacity-90" />
          
          {/* Trail effect */}
          <div className="absolute w-8 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8BE9FD]/80 via-[#8BE9FD]/40 to-transparent rounded-full opacity-70" 
               style={{ transform: 'translateX(-50%) translateY(-50%) rotate(25deg)' }} />
        </div>
      ))}
    </div>
  )
}
