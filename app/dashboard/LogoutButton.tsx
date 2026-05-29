'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/browser'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '8px 16px',
        background: 'transparent',
        border: '1px solid rgba(14,14,16,0.2)',
        borderRadius: 999,
        fontSize: 13,
        fontFamily: 'var(--font-display)',
        cursor: 'pointer',
        color: 'rgba(14,14,16,0.5)',
        letterSpacing: '-0.01em',
        transition: 'border-color 0.15s, color 0.15s',
      }}
    >
      Cerrar sesión
    </button>
  )
}
