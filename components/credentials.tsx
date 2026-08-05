import { awards, certifications } from '@/content/portfolio'

export function Credentials() {
  return (
    <section id="credentials" className="container-shell section-space border-t border-border" aria-labelledby="credentials-title">
      <div className="section-heading">
        <h2 id="credentials-title" className="section-title">Awards, training, and proof of practice.</h2>
      </div>
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-base font-semibold text-foreground">Awards</h3>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {awards.map((award) => (
              <li key={`${award.title}-${award.detail ?? ''}`} className="py-4">
                <p className="text-sm font-medium leading-6 text-foreground">{award.title}</p>
                {award.detail ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{award.detail}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">Certifications and training</h3>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {certifications.map((credential) => (
              <li key={`${credential.title}-${credential.detail ?? ''}`} className="py-4">
                <p className="text-sm font-medium leading-6 text-foreground">{credential.title}</p>
                {credential.detail ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{credential.detail}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
