"use client"

import { useEffect, useRef, useState } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  twinkle: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    // Check for dark mode on mount
    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {
        setIsDark(document.documentElement.classList.contains("dark"))
      }
    }

    checkDarkMode()

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 8000) // Responsive star count

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * 0.02 + 0.005,
        })
      }

      starsRef.current = stars
    }

    initStars()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Move star
        star.x -= star.speed

        // Reset star position when it goes off screen
        if (star.x < -10) {
          star.x = canvas.width + 10
          star.y = Math.random() * canvas.height
        }

        // Twinkle effect
        star.opacity += Math.sin(Date.now() * star.twinkle) * 0.01

        // Draw star
        ctx.save()
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.opacity))

        // Different colors for dark and light mode
        if (isDark) {
          // Dark mode: use Dracula colors
          const colorOptions = [
            "#8BE9FD", // Dracula cyan
            "#BD93F9", // Dracula purple
            "#50FA7B", // Dracula green
            "#FFB86C", // Dracula orange
            "#F1FA8C", // Dracula yellow
          ]
          const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]
          ctx.fillStyle = Math.random() > 0.3 ? "#8BE9FD" : randomColor // Mostly cyan, some variety
        } else {
          // Light mode: very subtle stars
          ctx.fillStyle = `rgba(139, 233, 253, ${star.opacity * 0.4})`
        }

        // Draw star with subtle glow effect
        ctx.shadowBlur = star.size * 1.5
        ctx.shadowColor = isDark ? "#8BE9FD" : "rgba(139, 233, 253, 0.3)"

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Add sparkle effect for larger stars
        if (star.size > 1.5) {
          ctx.strokeStyle = isDark ? "#8BE9FD" : "rgba(139, 233, 253, 0.5)"
          ctx.lineWidth = 0.5
          ctx.globalAlpha = star.opacity * 0.3

          // Draw cross sparkle
          ctx.beginPath()
          ctx.moveTo(star.x - star.size * 2, star.y)
          ctx.lineTo(star.x + star.size * 2, star.y)
          ctx.moveTo(star.x, star.y - star.size * 2)
          ctx.lineTo(star.x, star.y + star.size * 2)
          ctx.stroke()
        }

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: isDark
          ? "#0D1117" // Original dark space background from the beginning
          : "#F8F8F2", // Dracula light background
      }}
    />
  )
}
