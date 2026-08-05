import { skillGroups } from '@/content/portfolio'

export function TechnicalFocus() {
  return (
    <section className="container-shell section-space border-t border-border" aria-labelledby="focus-title">
      <div className="section-heading pt-16">
        <h2 id="focus-title" className="section-title">The tools I use most often.</h2>
      </div>
      <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="border-t border-border pt-5">
            <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
