'use client'

import { useState, useEffect, useRef } from 'react'

const PREGUNTAS = [
  {
    texto: '¿Qué estás intentando construir?',
    placeholder: 'Una app, una web, un SaaS... cuéntame la idea, aunque esté a medias.',
  },
  {
    texto: '¿Qué tendría que pasar para que en 6 meses consideres esto un éxito?',
    placeholder: 'Usuarios activos, ingresos, dejar tu trabajo... lo que sea real para ti.',
  },
  {
    texto: '¿Qué te está costando no tener esto ya?',
    placeholder: 'Tiempo, dinero, oportunidades que se te escapan, competidores que se adelantan...',
  },
  {
    texto: '¿Qué te ha impedido arrancarlo hasta ahora?',
    placeholder: 'Sin equipo técnico, sin tiempo, sin presupuesto claro, sin saber por dónde empezar...',
  },
  {
    texto: '¿Hay una fecha, evento o razón por la que necesitas tenerlo lanzado?',
    placeholder: 'Una reunión con inversores, un lanzamiento, una temporada... o simplemente ya no puedes esperar más.',
  },
]

type Fase = 'quiz' | 'email' | 'cargando' | 'resultado'

export default function DiagnosticoQuiz() {
  const [fase, setFase] = useState<Fase>('quiz')
  const [pregIdx, setPregIdx] = useState(0)
  const [respuestas, setRespuestas] = useState<string[]>([])
  const [respuestaActual, setRespuestaActual] = useState('')
  const [email, setEmail] = useState('')
  const [diagnostico, setDiagnostico] = useState('')
  const [precioSugerido, setPrecioSugerido] = useState('')
  const [visible, setVisible] = useState(true)
  const [error, setError] = useState('')
  const [dots, setDots] = useState('.')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (fase !== 'cargando') return
    const id = setInterval(() => {
      setDots(d => (d.length >= 3 ? '.' : d + '.'))
    }, 400)
    return () => clearInterval(id)
  }, [fase])

  useEffect(() => {
    if (fase === 'quiz') textareaRef.current?.focus()
  }, [fase, pregIdx])

  function transicionar(fn: () => void) {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 220)
  }

  function siguientePregunta() {
    if (!respuestaActual.trim()) return
    const nuevas = [...respuestas, respuestaActual.trim()]
    setRespuestas(nuevas)
    setRespuestaActual('')
    if (pregIdx < PREGUNTAS.length - 1) {
      transicionar(() => setPregIdx(i => i + 1))
    } else {
      transicionar(() => setFase('email'))
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      siguientePregunta()
    }
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    transicionar(() => setFase('cargando'))
    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ respuestas, email }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      transicionar(() => {
        setDiagnostico(data.diagnostico)
        setPrecioSugerido(data.precio_sugerido || '')
        setFase('resultado')
      })
    } catch {
      setError('Algo ha fallado. Escríbenos directamente a hola@hito.studio')
      transicionar(() => setFase('email'))
    }
  }

  const progreso =
    fase === 'quiz' ? ((pregIdx + 1) / PREGUNTAS.length) * 100 : 100

  return (
    <>
      <style>{`
        .dq-section {
          background: var(--ink);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 154px 0 80px;
          box-sizing: border-box;
        }
        .dq-textarea {
          display: block;
          width: 100%;
          padding: 14px 18px;
          background: rgba(244,241,233,0.06);
          border: 1px solid rgba(244,241,233,0.18);
          border-radius: 8px;
          color: #F4F1E9;
          font-size: 16px;
          font-family: var(--font-display);
          margin-bottom: 16px;
          outline: none;
          transition: border-color 0.15s;
          resize: none;
          line-height: 1.6;
          box-sizing: border-box;
        }
        .dq-textarea::placeholder { color: rgba(244,241,233,0.28); }
        .dq-textarea:focus { border-color: #1E50C9; }
        .dq-input {
          display: block;
          width: 100%;
          padding: 14px 18px;
          background: rgba(244,241,233,0.06);
          border: 1px solid rgba(244,241,233,0.18);
          border-radius: 8px;
          color: #F4F1E9;
          font-size: 16px;
          font-family: var(--font-display);
          margin-bottom: 16px;
          outline: none;
          transition: border-color 0.15s;
        }
        .dq-input::placeholder { color: rgba(244,241,233,0.32); }
        .dq-input:focus { border-color: #1E50C9; }
        .dq-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          border: 1px solid #F4F1E9;
          background: #F4F1E9;
          color: #0E0E10;
          cursor: pointer;
          font-family: var(--font-display);
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.12s;
        }
        .dq-btn:hover {
          background: #1E50C9;
          border-color: #1E50C9;
          color: #F4F1E9;
          transform: translateY(-1px);
        }
        .dq-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          transform: none;
        }
        @media (max-width: 640px) {
          .dq-section { padding: 120px 0 60px; min-height: 100svh; }
        }
      `}</style>

      <section className="dq-section">
        <div className="wrap">

          {/* Encabezado */}
          <div style={{ marginBottom: 64 }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.2em',
              color: 'rgba(244,241,233,0.5)',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
            }}>
              <span style={{ color: 'var(--cobalt)' }}>↳</span> Diagnóstico · IA
            </span>
            <h2 style={{
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.055em',
              color: 'var(--cream)',
              margin: '0 0 18px',
            }}>
              ¿Lo construimos?
            </h2>
            <p style={{
              fontSize: 18,
              lineHeight: 1.45,
              color: 'rgba(244,241,233,0.6)',
              margin: 0,
              maxWidth: 400,
            }}>
              5 preguntas. La IA te dice si encajamos.
            </p>
          </div>

          {/* Contenedor del quiz */}
          <div style={{ maxWidth: 600 }}>

            {/* Barra de progreso */}
            <div style={{
              height: 1,
              background: 'rgba(244,241,233,0.1)',
              marginBottom: 44,
              borderRadius: 999,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: `${progreso}%`,
                background: 'var(--cobalt)',
                borderRadius: 999,
                transition: 'width 0.4s cubic-bezier(.4,0,.2,1)',
              }} />
            </div>

            {/* Contenido con transición fade + slide */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
            }}>

              {fase === 'quiz' && (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: 'rgba(244,241,233,0.38)',
                    textTransform: 'uppercase',
                    marginBottom: 22,
                  }}>
                    {pregIdx + 1} / {PREGUNTAS.length}
                  </div>
                  <h3 style={{
                    fontWeight: 800,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    letterSpacing: '-0.025em',
                    color: 'var(--cream)',
                    margin: '0 0 24px',
                    lineHeight: 1.2,
                  }}>
                    {PREGUNTAS[pregIdx].texto}
                  </h3>
                  <textarea
                    ref={textareaRef}
                    className="dq-textarea"
                    rows={3}
                    placeholder={PREGUNTAS[pregIdx].placeholder}
                    value={respuestaActual}
                    onChange={e => setRespuestaActual(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <button
                      className="dq-btn"
                      onClick={siguientePregunta}
                      disabled={!respuestaActual.trim()}
                    >
                      {pregIdx < PREGUNTAS.length - 1 ? 'Siguiente' : 'Ver diagnóstico'}{' '}
                      <span style={{ fontFamily: 'var(--font-mono)' }}>→</span>
                    </button>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'rgba(244,241,233,0.25)',
                      letterSpacing: '0.04em',
                    }}>
                      Enter para continuar
                    </span>
                  </div>
                </div>
              )}

              {fase === 'email' && (
                <form onSubmit={enviar}>
                  <h3 style={{
                    fontWeight: 800,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    letterSpacing: '-0.025em',
                    color: 'var(--cream)',
                    margin: '0 0 8px',
                    lineHeight: 1.2,
                  }}>
                    ¿Dónde te mandamos el análisis?
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: 'rgba(244,241,233,0.4)',
                    textTransform: 'uppercase',
                    margin: '0 0 28px',
                  }}>
                    Sin spam. Solo el diagnóstico.
                  </p>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="dq-input"
                  />
                  {error && (
                    <p style={{
                      color: 'var(--warm)',
                      fontSize: 13,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                      margin: '0 0 16px',
                    }}>
                      {error}
                    </p>
                  )}
                  <button type="submit" className="dq-btn">
                    Ver mi diagnóstico{' '}
                    <span style={{ fontFamily: 'var(--font-mono)' }}>→</span>
                  </button>
                </form>
              )}

              {fase === 'cargando' && (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: 'rgba(244,241,233,0.38)',
                    textTransform: 'uppercase',
                    marginBottom: 22,
                  }}>
                    Procesando
                  </div>
                  <p style={{
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: '-0.02em',
                    color: 'var(--cream)',
                    margin: 0,
                  }}>
                    Analizando tu proyecto{dots}
                  </p>
                </div>
              )}

              {fase === 'resultado' && (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: 'rgba(244,241,233,0.38)',
                    textTransform: 'uppercase',
                    marginBottom: 22,
                  }}>
                    Tu diagnóstico
                  </div>
                  {precioSugerido && (
                    <div style={{ marginBottom: 28 }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.18em',
                        color: 'rgba(244,241,233,0.35)',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}>
                        Inversión estimada
                      </div>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        background: 'var(--cobalt)',
                        borderRadius: 999,
                        fontSize: 22,
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.02em',
                        marginBottom: 10,
                      }}>
                        {precioSugerido}
                      </div>
                      <p style={{
                        fontSize: 13,
                        color: 'rgba(244,241,233,0.38)',
                        margin: 0,
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.02em',
                        lineHeight: 1.5,
                      }}>
                        Precio orientativo. El coste final depende del alcance exacto.
                        <br />
                        ¿Tienes un presupuesto menor?{' '}
                        <a
                          href="mailto:hola@hito.studio?subject=Consulta%20presupuesto"
                          style={{ color: 'rgba(244,241,233,0.6)', textDecoration: 'underline' }}
                        >
                          Escríbenos y lo vemos.
                        </a>
                      </p>
                    </div>
                  )}
                  <p style={{
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: 'rgba(244,241,233,0.88)',
                    margin: '0 0 36px',
                    maxWidth: 520,
                    fontWeight: 400,
                  }}>
                    {diagnostico}
                  </p>
                  <a href="mailto:hola@hito.studio" className="dq-btn">
                    Hablamos{' '}
                    <span style={{ fontFamily: 'var(--font-mono)' }}>→</span>
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
