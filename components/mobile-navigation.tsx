'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { navigationLinks } from '@/content/portfolio'

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="icon-button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
      </button>
      {isOpen ? (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download ? true : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
