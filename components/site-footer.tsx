import { site } from '@/content/portfolio'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-shell flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{site.name}</p>
        <p>{site.location}</p>
      </div>
    </footer>
  )
}
