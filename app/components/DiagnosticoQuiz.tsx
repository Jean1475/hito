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
    }, 260)
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
      setError('Algo ha fallado. Escríbenos directamente a hitomarketingstudio@gmail.com')
      transicionar(() => setFase('email'))
    }
  }

  const stepsFilled = fase === 'quiz' ? pregIdx + 1 : PREGUNTAS.length

  return (
    <>
      <style>{`
        .dq-section {
          background:
            radial-gradient(circle at 20% 14%, rgba(194,64,42,0.10), transparent 40%),
            radial-gradient(circle at 88% 22%, rgba(30,80,201,0.12), transparent 45%),
            linear-gradient(180deg, var(--cream) 0%, var(--paper) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 154px 0 80px;
          box-sizing: border-box;
        }

        /* ---- progress ---- */
        .dq-progress {
          margin-bottom: 36px;
        }
        .dq-steps {
          display: flex;
          gap: 5px;
          margin-bottom: 12px;
        }
        .dq-step-seg {
          flex: 1;
          height: 3px;
          border-radius: 999px;
          background: var(--ink10);
          transition: background 0.4s cubic-bezier(.4,0,.2,1);
        }
        .dq-step-seg.filled {
          background: var(--cobalt);
        }
        .dq-counter {
          display: flex;
          align-items: baseline;
          gap: 3px;
          font-family: var(--font-mono);
          letter-spacing: 0.1em;
        }
        .dq-counter-num {
          font-size: 16px;
          font-weight: 700;
          font-family: var(--font-display);
          letter-spacing: -0.02em;
          color: var(--cobalt);
          line-height: 1;
        }
        .dq-counter-sep {
          font-size: 12px;
          color: var(--ink30);
          margin: 0 2px;
        }
        .dq-counter-total {
          font-size: 12px;
          color: var(--ink50);
        }

        /* ---- inputs ---- */
        .dq-textarea {
          display: block;
          width: 100%;
          padding: 16px 20px;
          background: rgba(255,255,255,0.55);
          border: 1.5px solid var(--ink10);
          border-radius: 10px;
          color: var(--ink);
          font-size: 16px;
          font-family: var(--font-display);
          margin-bottom: 20px;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          resize: none;
          line-height: 1.6;
          box-sizing: border-box;
        }
        .dq-textarea::placeholder { color: var(--ink30); }
        .dq-textarea:focus {
          border-color: var(--cobalt);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 0 3px rgba(30,80,201,0.12);
        }
        .dq-input {
          display: block;
          width: 100%;
          padding: 16px 20px;
          background: rgba(255,255,255,0.55);
          border: 1.5px solid var(--ink10);
          border-radius: 10px;
          color: var(--ink);
          font-size: 16px;
          font-family: var(--font-display);
          margin-bottom: 20px;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          box-sizing: border-box;
        }
        .dq-input::placeholder { color: var(--ink30); }
        .dq-input:focus {
          border-color: var(--cobalt);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 0 3px rgba(30,80,201,0.12);
        }

        /* ---- button ---- */
        .dq-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          border: 1.5px solid var(--ink);
          background: var(--ink);
          color: var(--cream);
          cursor: pointer;
          font-family: var(--font-display);
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.12s, box-shadow 0.15s;
        }
        .dq-btn:not(:disabled):hover {
          background: var(--cobalt);
          border-color: var(--cobalt);
          color: var(--cream);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(30,80,201,0.25);
        }
        .dq-btn:disabled {
          background: transparent;
          border-color: var(--ink10);
          color: var(--ink30);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* ---- action row ---- */
        .dq-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .dq-enter-hint {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink50);
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          user-select: none;
        }
        .dq-enter-hint kbd {
          font-family: var(--font-mono);
          font-size: 11px;
          border: 1px solid var(--ink10);
          border-radius: 4px;
          padding: 2px 6px;
          background: rgba(14,14,16,0.04);
          color: var(--ink50);
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .dq-section { padding: 120px 0 60px; min-height: 100svh; }
          .dq-enter-hint { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dq-step-seg { transition: none; }
        }
      `}</style>

      <section className="dq-section">
        <div className="wrap">

          {/* Encabezado */}
          <div style={{ marginBottom: 48 }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.2em',
              color: 'var(--ink70)',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 18,
            }}>
              <span style={{ color: 'var(--cobalt)' }}>↳</span> Diagnóstico · IA
            </span>
            <h2 style={{
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.055em',
              color: 'var(--ink)',
              margin: '0 0 18px',
            }}>
              ¿Lo construimos?
            </h2>
            <p style={{
              fontSize: 18,
              lineHeight: 1.45,
              color: 'var(--ink70)',
              margin: 0,
              maxWidth: 400,
            }}>
              5 preguntas. La IA te dice si encajamos.
            </p>
          </div>

          {/* Contenedor del quiz */}
          <div style={{ maxWidth: 600 }}>

            {/* Barra de progreso: 5 segmentos + contador */}
            {(fase === 'quiz' || fase === 'email') && (
              <div className="dq-progress">
                <div className="dq-steps">
                  {PREGUNTAS.map((_, i) => (
                    <div
                      key={i}
                      className={`dq-step-seg${i < stepsFilled ? ' filled' : ''}`}
                    />
                  ))}
                </div>
                {fase === 'quiz' && (
                  <div className="dq-counter">
                    <span className="dq-counter-num">{pregIdx + 1}</span>
                    <span className="dq-counter-sep">/</span>
                    <span className="dq-counter-total">{PREGUNTAS.length}</span>
                  </div>
                )}
              </div>
            )}

            {/* Contenido con transición fade + slide */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.26s cubic-bezier(.4,0,.2,1), transform 0.26s cubic-bezier(.4,0,.2,1)',
            }}>

              {fase === 'quiz' && (
                <div>
                  <h3 style={{
                    fontWeight: 800,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    letterSpacing: '-0.025em',
                    color: 'var(--ink)',
                    margin: '0 0 22px',
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
                  <div className="dq-actions">
                    <button
                      className="dq-btn"
                      onClick={siguientePregunta}
                      disabled={!respuestaActual.trim()}
                    >
                      {pregIdx < PREGUNTAS.length - 1 ? 'Siguiente' : 'Ver diagnóstico'}{' '}
                      <span style={{ fontFamily: 'var(--font-mono)' }}>→</span>
                    </button>
                    <span className="dq-enter-hint">
                      <kbd>↵</kbd> Enter para continuar
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
                    color: 'var(--ink)',
                    margin: '0 0 8px',
                    lineHeight: 1.2,
                  }}>
                    ¿Dónde te mandamos el análisis?
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: 'var(--ink50)',
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
                    color: 'var(--ink50)',
                    textTransform: 'uppercase',
                    marginBottom: 22,
                  }}>
                    Procesando
                  </div>
                  <p style={{
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
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
                    color: 'var(--ink50)',
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
                        color: 'var(--ink50)',
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
                        color: 'var(--ink50)',
                        margin: 0,
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.02em',
                        lineHeight: 1.5,
                      }}>
                        Precio orientativo. El coste final depende del alcance exacto.
                        <br />
                        ¿Tienes un presupuesto menor?{' '}
                        <a
                          href="mailto:hitomarketingstudio@gmail.com?subject=Consulta%20presupuesto"
                          style={{ color: 'var(--ink70)', textDecoration: 'underline' }}
                        >
                          Escríbenos y lo vemos.
                        </a>
                      </p>
                    </div>
                  )}
                  <p style={{
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: 'var(--ink)',
                    margin: '0 0 36px',
                    maxWidth: 520,
                    fontWeight: 400,
                  }}>
                    {diagnostico}
                  </p>
                  <a href="mailto:hitomarketingstudio@gmail.com" className="dq-btn">
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
