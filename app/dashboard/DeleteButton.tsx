'use client'

import { useTransition } from 'react'
import { deleteLead } from './actions'

export default function DeleteButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm('¿Eliminar este lead? Esta acción no se puede deshacer.')) return
    startTransition(() => deleteLead(id))
  }

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      style={{
        padding: '5px 12px',
        background: 'transparent',
        border: '1px solid rgba(14,14,16,0.12)',
        borderRadius: 999,
        fontSize: 12,
        fontFamily: 'var(--font-display)',
        color: 'rgba(14,14,16,0.35)',
        cursor: pending ? 'not-allowed' : 'pointer',
        letterSpacing: '-0.01em',
        transition: 'border-color 0.15s, color 0.15s',
        opacity: pending ? 0.5 : 1,
      }}
      onMouseEnter={e => {
        if (!pending) {
          (e.target as HTMLButtonElement).style.borderColor = '#e53e3e'
          ;(e.target as HTMLButtonElement).style.color = '#e53e3e'
        }
      }}
      onMouseLeave={e => {
        (e.target as HTMLButtonElement).style.borderColor = 'rgba(14,14,16,0.12)'
        ;(e.target as HTMLButtonElement).style.color = 'rgba(14,14,16,0.35)'
      }}
    >
      {pending ? '...' : 'Eliminar'}
    </button>
  )
}
