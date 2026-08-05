import { education, aboutText } from '@/content/portfolio'

export function About() {
  return (
    <section id="about" className="container-shell section-space border-t border-border" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr]">
        <div>
          <h2 id="about-title" className="section-title">Backend work with a clear product purpose.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{aboutText}</p>
        </div>
        <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8">
          <p className="detail-label">Education</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{education.institution}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {education.program} · {education.focus}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{education.expected}</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {education.academicStanding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
