'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={mounted ? `Use ${isDark ? 'light' : 'dark'} theme` : 'Choose color theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted ? (
        isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />
      ) : (
        <span aria-hidden="true" className="text-xs font-semibold">Aa</span>
      )}
    </button>
  )
}
