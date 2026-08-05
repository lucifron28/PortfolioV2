'use client'

import dynamic from 'next/dynamic'

const PortfolioMotion = dynamic(() => import('@/components/portfolio-motion').then((module) => module.PortfolioMotion), { ssr: false })

export function MotionBoundary() {
  return <PortfolioMotion />
}
