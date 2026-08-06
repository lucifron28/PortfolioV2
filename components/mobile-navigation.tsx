'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { navigationLinks } from '@/content/portfolio'

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const closeMenu = (returnFocus = false) => {
    setIsOpen(false)
    if (returnFocus) window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true)
    }
    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu()
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handlePointer)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handlePointer)
    }
  }, [isOpen])

  return (
    <div ref={rootRef} className="mobile-navigation-root">
      <button ref={triggerRef} type="button" className="icon-button" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      {isOpen ? (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} download={link.download ? true : undefined} onClick={() => closeMenu()}>
              {link.label === 'Resume' ? 'Download résumé' : link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
