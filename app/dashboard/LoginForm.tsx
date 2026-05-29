'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/browser'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError('Credenciales incorrectas.')
      setLoading(false)
      return
    }

    router.push('/dashboard/leads')
    router.refresh()
  }

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '13px 16px',
    border: '1px solid rgba(14,14,16,0.15)',
    borderRadius: 8,
    fontSize: 15,
    fontFamily: 'var(--font-display)',
    background: '#fff',
    outline: 'none',
    color: 'var(--ink)',
    boxSizing: 'border-box',
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--cream)',
      fontFamily: 'var(--font-display)',
    }}>
      <div style={{ width: '100%', maxWidth: 380, padding: '0 24px' }}>
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: '-0.055em',
              color: 'var(--ink)',
            }}>
              hito<span style={{ color: 'var(--cobalt)' }}>.</span>
            </span>
          </a>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            color: 'rgba(14,14,16,0.4)',
            textTransform: 'uppercase',
            marginTop: 8,
            marginBottom: 0,
          }}>
            Dashboard interno
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          {error && (
            <p style={{
              color: '#e53e3e',
              fontSize: 13,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              margin: 0,
            }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '13px 24px',
              background: 'var(--ink)',
              color: 'var(--cream)',
              border: 'none',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
              letterSpacing: '-0.01em',
              marginTop: 4,
              transition: 'opacity 0.15s',
            }}
          >
            {loading ? 'Entrando...' : 'Entrar →'}
          </button>
        </form>
      </div>
    </div>
  )
}
