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
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * (window.innerHeight * 0.6) // Upper portion of screen
      const endX = startX + (Math.random() * 300 + 200) * (Math.random() > 0.5 ? 1 : -1)
      const endY = startY + Math.random() * 200 + 100
      const duration = Math.random() * 2000 + 1000 // 1-3 seconds

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

      // Remove shooting star after animation
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== id))
      }, duration + 500)
    }

    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance every interval
        createShootingStar()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-dracula-primary to-transparent rounded-full opacity-60"
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dracula-primary to-transparent rounded-full opacity-80" />
        </div>
      ))}
    </div>
  )
}
