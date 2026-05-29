import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import LogoutButton from '../LogoutButton'
import DeleteButton from '../DeleteButton'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Hito — Leads',
}

type Lead = {
  id: string
  created_at: string
  email: string | null
  respuesta_1: string | null
  respuesta_2: string | null
  respuesta_3: string | null
  respuesta_4: string | null
  respuesta_5: string | null
  diagnostico: string | null
  precio_sugerido: string | null
}

function isToday(dateStr: string) {
  const d = new Date(dateStr)
  const now = new Date()
  return d.toDateString() === now.toDateString()
}

function groupByDate(leads: Lead[]) {
  const map = new Map<string, Lead[]>()
  const now = new Date()
  const todayStr = now.toDateString()
  const yesterdayStr = new Date(now.getTime() - 86400000).toDateString()

  for (const lead of leads) {
    const d = new Date(lead.created_at)
    const ds = d.toDateString()
    let label: string
    if (ds === todayStr) {
      label = 'Hoy'
    } else if (ds === yesterdayStr) {
      label = 'Ayer'
    } else {
      label = d.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
    }
    if (!map.has(label)) map.set(label, [])
    map.get(label)!.push(lead)
  }

  return Array.from(map.entries()).map(([label, items]) => ({ label, items }))
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      color: 'rgba(14,14,16,0.35)',
      textTransform: 'uppercase',
      marginBottom: 20,
    }}>
      {children}
    </div>
  )
}

function DateSeparator({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        color: 'rgba(14,14,16,0.3)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'rgba(14,14,16,0.07)' }} />
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      color: 'rgba(14,14,16,0.35)',
      textTransform: 'uppercase',
      marginBottom: 6,
    }}>
      {children}
    </div>
  )
}

function LeadCard({ lead, highlight = false }: { lead: Lead; highlight?: boolean }) {
  const date = new Date(lead.created_at)
  const formatted = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const answers = [
    lead.respuesta_1 && { label: 'Qué construir', text: lead.respuesta_1 },
    lead.respuesta_2 && { label: 'Éxito en 6 meses', text: lead.respuesta_2 },
    lead.respuesta_3 && { label: 'Coste de no actuar', text: lead.respuesta_3 },
    lead.respuesta_4 && { label: 'Bloqueo', text: lead.respuesta_4 },
    lead.respuesta_5 && { label: 'Urgencia', text: lead.respuesta_5 },
  ].filter(Boolean) as { label: string; text: string }[]

  return (
    <div style={{
      background: highlight ? '#fff' : '#fff',
      border: highlight ? '1px solid rgba(30,80,201,0.2)' : '1px solid rgba(14,14,16,0.07)',
      borderRadius: 14,
      padding: '24px 28px',
      boxShadow: highlight ? '0 2px 16px rgba(30,80,201,0.06)' : 'none',
    }}>
      {/* Top row: email + hora + delete */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 16,
      }}>
        <div>
          <div style={{
            fontWeight: 700,
            fontSize: 16,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            marginBottom: 3,
          }}>
            {lead.email || <span style={{ color: 'rgba(14,14,16,0.3)', fontWeight: 400 }}>Sin email</span>}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'rgba(14,14,16,0.35)',
          }}>
            {formatted}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          {lead.precio_sugerido && (
            <div style={{
              padding: '6px 14px',
              background: 'var(--cobalt)',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              {lead.precio_sugerido}
            </div>
          )}
          <DeleteButton id={lead.id} />
        </div>
      </div>

      {/* Body: respuestas + diagnóstico */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
      }}>
        <div>
          <Label>Respuestas</Label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {answers.map((r, i) => (
              <div key={i}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.12em',
                  color: 'rgba(14,14,16,0.3)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 2,
                }}>
                  {r.label}
                </span>
                <span style={{ fontSize: 13, color: 'rgba(14,14,16,0.7)', lineHeight: 1.45 }}>
                  {r.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Diagnóstico IA</Label>
          <p style={{
            fontSize: 14,
            lineHeight: 1.65,
            color: 'rgba(14,14,16,0.75)',
            margin: 0,
          }}>
            {lead.diagnostico || <span style={{ color: 'rgba(14,14,16,0.3)' }}>—</span>}
          </p>
        </div>
      </div>
    </div>
  )
}

export default async function LeadsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/dashboard')

  const admin = createAdminClient()
  const { data: leads } = await admin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  const allLeads = (leads ?? []) as Lead[]
  const total = allLeads.length

  const recent = allLeads.filter(l => isToday(l.created_at))
  const older = allLeads.filter(l => !isToday(l.created_at))
  const olderGroups = groupByDate(older)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--cream)',
      fontFamily: 'var(--font-display)',
    }}>
      <header style={{
        borderBottom: '1px solid rgba(14,14,16,0.08)',
        padding: '18px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--cream)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: '-0.055em',
              color: 'var(--ink)',
            }}>
              hito<span style={{ color: 'var(--cobalt)' }}>.</span>
            </span>
          </a>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: 'rgba(14,14,16,0.35)',
            textTransform: 'uppercase',
          }}>
            Leads · {total}
          </span>
        </div>
        <LogoutButton />
      </header>

      <main style={{ padding: '36px', maxWidth: 1200, margin: '0 auto' }}>
        {total === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '100px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.12em',
            color: 'rgba(14,14,16,0.3)',
            textTransform: 'uppercase',
          }}>
            Aún no hay leads registrados.
          </div>
        ) : (
          <>
            {/* Recientes (hoy) */}
            {recent.length > 0 && (
              <div style={{ marginBottom: 48 }}>
                <SectionLabel>Recientes — {recent.length}</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {recent.map(lead => (
                    <LeadCard key={lead.id} lead={lead} highlight />
                  ))}
                </div>
              </div>
            )}

            {/* Divisor entre recientes y anteriores */}
            {recent.length > 0 && older.length > 0 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                margin: '0 0 48px',
              }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(14,14,16,0.1)' }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  color: 'rgba(14,14,16,0.3)',
                  textTransform: 'uppercase',
                }}>
                  Anteriores
                </span>
                <div style={{ flex: 1, height: 1, background: 'rgba(14,14,16,0.1)' }} />
              </div>
            )}

            {/* Anteriores agrupados por fecha */}
            {olderGroups.length > 0 && (
              <div>
                {olderGroups.map(({ label, items }) => (
                  <div key={label} style={{ marginBottom: 40 }}>
                    <DateSeparator label={label} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {items.map(lead => (
                        <LeadCard key={lead.id} lead={lead} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Si todos son de hoy y no hay anteriores */}
            {recent.length > 0 && older.length === 0 && (
              <div style={{
                textAlign: 'center',
                paddingTop: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'rgba(14,14,16,0.25)',
                letterSpacing: '0.1em',
              }}>
                No hay leads anteriores.
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
