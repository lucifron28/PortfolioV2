import { awards, certifications } from '@/content/portfolio'

export function Credentials() {
  return (
    <section id="credentials" className="container-shell section-space credentials-section" aria-labelledby="credentials-title">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">Awards</p>
        <h1 id="credentials-title" className="section-title">Awards &amp; credentials.</h1>
      </div>
      <div className="credentials-lists">
        <CredentialList title="Awards" items={awards} />
        <CredentialList title="Certifications and training" items={certifications} />
      </div>
    </section>
  )
}

function CredentialList({ title, items }: { title: string; items: readonly { title: string; detail?: string }[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.title + (item.detail ?? '')}>
            <span>{item.title}</span>
            {item.detail ? <small>{item.detail}</small> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
