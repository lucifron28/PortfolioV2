import { awards, certifications } from '@/content/portfolio'

export function Credentials() {
  return (
    <section id="credentials" className="container-shell section-space credentials-section" aria-labelledby="credentials-title">
      <div className="section-heading credentials-heading">
        <p className="eyebrow">Credentials</p>
        <h2 id="credentials-title" className="section-title">Awards, certifications, and training.</h2>
        <p className="section-intro">A concise record of the results and coursework that sit behind the project work.</p>
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
