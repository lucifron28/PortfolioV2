import { ImageResponse } from 'next/og'

export const alt = 'Ron Vincent Cada, Backend Software Engineering Student'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#F5F3EE', color: '#101828', fontFamily: 'Arial, sans-serif', padding: 64, position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', left: 64, top: 64, color: '#215CCF', fontSize: 23, fontWeight: 700, letterSpacing: 4 }}>RON CADA / PORTFOLIO 2026</div>
      <div style={{ display: 'flex', position: 'absolute', right: 64, top: 64, width: 280, height: 3, background: '#215CCF' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end', width: '100%', borderTop: '2px solid #D5D9E0', paddingTop: 34 }}>
        <div style={{ display: 'flex', maxWidth: 980, fontSize: 74, lineHeight: 0.98, letterSpacing: -4, fontWeight: 700 }}>Backend-focused software engineering student.</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 38, color: '#526074', fontSize: 24 }}><span>ASP.NET Core · React · SQL · Docker</span><span>Lucena City, Philippines</span></div>
      </div>
    </div>,
    size,
  )
}
