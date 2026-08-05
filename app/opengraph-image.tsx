import { ImageResponse } from 'next/og'

export const alt = 'Ron Vincent Cada, Backend Software Engineering Student'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '72px',
          background: '#f7f9fb',
          color: '#0f172a',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', color: '#245b9a', fontSize: 28, fontWeight: 700 }}>
          RON CADA / PORTFOLIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', fontSize: 74, fontWeight: 700, letterSpacing: -3 }}>Ron Vincent Cada</div>
          <div style={{ display: 'flex', maxWidth: 850, color: '#334155', fontSize: 36, lineHeight: 1.25 }}>
            Backend-focused software engineering student.
          </div>
        </div>
        <div style={{ display: 'flex', color: '#475569', fontSize: 24 }}>
          ASP.NET Core · React · SQL · Docker · Applied AI
        </div>
      </div>
    ),
    size,
  )
}
