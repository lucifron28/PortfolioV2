import { credibilityItems } from '@/content/portfolio'

export function CredibilityStrip() {
  return (
    <section className="container-shell credibility-strip" aria-label="Selected credentials">
      <ul>
        {credibilityItems.map((item) => (
          <li key={item.label}>
            <span className="detail-label">{item.label}</span>
            <strong>{item.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
