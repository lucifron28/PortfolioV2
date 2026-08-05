import { credibilityItems } from '@/content/portfolio'

export function CredibilityStrip() {
  return (
    <section className="border-y border-border" aria-label="Selected credentials">
      <div className="container-shell grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {credibilityItems.map((item) => (
          <div key={item.label} className="credibility-item">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
