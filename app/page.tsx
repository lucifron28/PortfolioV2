import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Credentials } from '@/components/credentials'
import { CredibilityStrip } from '@/components/credibility-strip'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TechnicalFocus } from '@/components/technical-focus'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <CredibilityStrip />
        <SelectedWork />
        <TechnicalFocus />
        <About />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
