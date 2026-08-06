import { ImageResponse } from 'next/og'

export const alt = 'Ron Vincent Cada | Backend Software Engineering Student'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#F5F3EE', color: '#111111', fontFamily: 'Arial, sans-serif', padding: 64, position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', left: 64, top: 64, color: '#5E5E5A', fontSize: 23, fontWeight: 700, letterSpacing: 4 }}>RON VINCENT CADA / BSIT</div>
      <div style={{ display: 'flex', position: 'absolute', right: 64, top: 64, width: 280, height: 3, background: '#111111' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end', width: '100%', borderTop: '2px solid #D5D5CF', paddingTop: 34 }}>
        <div style={{ display: 'flex', maxWidth: 980, fontSize: 70, lineHeight: 0.98, letterSpacing: -4, fontWeight: 700 }}>Backend Software Engineering Student</div>
        <div style={{ display: 'flex', marginTop: 26, color: '#5E5E5A', fontSize: 25 }}>Secure APIs · workflow systems · Android · source-grounded AI</div>
      </div>
    </div>,
    { ...size },
  )
}
