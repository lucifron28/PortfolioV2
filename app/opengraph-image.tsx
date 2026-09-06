import { ImageResponse } from 'next/og'

export const alt = 'Ron Vincent Cada | BSIT Student and Backend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#09090B', color: '#F8F8F2', fontFamily: 'Trebuchet MS, Arial, sans-serif', padding: 64, position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', left: 64, top: 64, color: '#FF79C6', fontSize: 23, fontWeight: 700, letterSpacing: 4 }}>RON VINCENT CADA / BSIT</div>
      <div style={{ display: 'flex', position: 'absolute', right: 64, top: 64, width: 280, height: 3, background: '#BD93F9' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end', width: '100%', borderTop: '2px solid #30303A', paddingTop: 34 }}>
        <div style={{ display: 'flex', maxWidth: 980, fontSize: 70, lineHeight: 0.98, letterSpacing: -4, fontWeight: 700 }}>BSIT Student and Backend Developer</div>
        <div style={{ display: 'flex', marginTop: 26, color: '#8BE9FD', fontSize: 25 }}>Backend APIs / Android / React / relational data</div>
      </div>
    </div>,
    { ...size },
  )
}
