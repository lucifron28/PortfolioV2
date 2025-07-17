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
      
      const startX = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1
      const startY = Math.random() * (window.innerHeight * 0.3)
      
      const distance = Math.random() * 400 + 300
      const angle = Math.random() * 45 + 30
      const angleRad = (angle * Math.PI) / 180
      
      const endX = startX + distance * Math.cos(angleRad)
      const endY = startY + distance * Math.sin(angleRad)
      const duration = Math.random() * 1500 + 800

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
      {shootingStars.map((star) => {
        const deltaX = star.endX - star.startX
        const deltaY = star.endY - star.startY
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
        
        return (
          <div
            key={star.id}
            className="absolute"
            style={
              {
                left: star.startX,
                top: star.startY,
                animation: `shootingStar ${star.duration}ms linear forwards`,
                "--end-x": `${deltaX}px`,
                "--end-y": `${deltaY}px`,
              } as React.CSSProperties
            }
          >
            <div className="relative">
              {/* Long trail effect - positioned behind the star */}
              <div 
                className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8BE9FD]/60 to-[#8BE9FD]/90 rounded-full opacity-80" 
                style={{ 
                  transformOrigin: 'right center',
                  transform: `rotate(${angle}deg)`,
                  right: '1px',
                  top: '50%',
                  marginTop: '-0.125rem'
                }} 
              />
              
              {/* Secondary shorter trail for more depth */}
              <div 
                className="absolute w-12 h-0.5 bg-gradient-to-r from-transparent via-[#8BE9FD]/40 to-[#8BE9FD]/70 rounded-full opacity-60" 
                style={{ 
                  transformOrigin: 'right center',
                  transform: `rotate(${angle}deg)`,
                  right: '1px',
                  top: '50%',
                  marginTop: '-0.125rem'
                }} 
              />
              
              {/* Outer glow/aura */}
              <div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#8BE9FD]/30 via-[#8BE9FD]/15 to-transparent rounded-full blur-md" />
              
              {/* Middle glow */}
              <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#8BE9FD]/50 via-[#8BE9FD]/25 to-transparent rounded-full blur-sm" />
              
              {/* Core shooting star */}
              <div className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#8BE9FD] rounded-full opacity-95 shadow-lg shadow-[#8BE9FD]/50" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
