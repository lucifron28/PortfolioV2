'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function PortfolioMotion() {
  useGSAP(() => {
    const mediaQuery = gsap.matchMedia()
    mediaQuery.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const words = gsap.utils.toArray<HTMLElement>('[data-scrub-copy] span')
      if (words.length) {
        gsap.fromTo(words, { opacity: 0.1 }, { opacity: 1, stagger: 0.035, ease: 'none', scrollTrigger: { trigger: '[data-scrub-copy]', start: 'top 80%', end: 'bottom 42%', scrub: true } })
      }
      gsap.utils.toArray<HTMLElement>('[data-project-media]').forEach((media) => {
        gsap.timeline({ scrollTrigger: { trigger: media, start: 'top 95%', end: 'bottom 5%', scrub: true } })
          .fromTo(media, { scale: 0.8, opacity: 0.5, filter: 'brightness(0.7)' }, { scale: 1, opacity: 1, filter: 'brightness(1)', ease: 'none', duration: 0.42 })
          .to(media, { opacity: 0.2, filter: 'brightness(0.45)', ease: 'none', duration: 0.58 })
      })
    })
    return () => mediaQuery.revert()
  })
  return null
}
