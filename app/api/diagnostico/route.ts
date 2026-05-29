import { NextRequest } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

const SYSTEM_PROMPT = `Eres el asistente de Hito Studio, un estudio de producto en Madrid que construye webs, MVPs y SaaS para founders y equipos pequeños. Tu tono es directo, honesto y sin relleno. Nunca usas emojis ni lenguaje corporativo.

Dado el perfil del usuario, genera un diagnóstico breve que:
1. Identifica en qué punto está
2. Dice qué servicio de Hito encaja mejor
3. Explica en una frase por qué
4. Termina con una frase directa que invite a hablar, sin ser agresivo

Servicios de referencia:
- Web a medida: desde ~500€
- MVP funcional: desde ~700€
- SaaS o producto completo: desde ~1000€
- Marketing digital: desde ~1200€

A partir del perfil del usuario, estima un rango de precio realista según la complejidad del proyecto. No uses precios fijos — razona: ¿cuántas pantallas? ¿hay lógica de negocio compleja? ¿integraciones? ¿urgencia? El rango puede ser tan amplio como necesites (ej: "600€ – 900€" o "900€ – 1.500€"). Siempre expresa el precio como rango aproximado.

Responde ÚNICAMENTE con JSON válido, sin markdown, sin texto extra. Formato exacto:
{"diagnostico": "texto del diagnóstico en máximo 4 líneas", "precio_sugerido": "700€ – 1.100€"}`

export async function POST(request: NextRequest) {
  try {
    const { respuestas, email } = await request.json()

    if (!Array.isArray(respuestas) || respuestas.length !== 5) {
      return Response.json({ error: 'Respuestas inválidas' }, { status: 400 })
    }

    const userMessage = `Respuestas del quiz:
1. Qué quiere construir: ${respuestas[0]}
2. Cómo sería el éxito en 6 meses: ${respuestas[1]}
3. Coste de no tenerlo ya: ${respuestas[2]}
4. Qué le ha impedido arrancar: ${respuestas[3]}
5. Urgencia o fecha límite: ${respuestas[4]}`

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[diagnostico] Anthropic error:', text)
      throw new Error('Anthropic API error')
    }

    const data = await res.json()
    const rawText: string = data.content[0].text

    let diagnostico: string = rawText
    let precio_sugerido: string = ''

    try {
      const clean = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim()
      const parsed = JSON.parse(clean)
      diagnostico = parsed.diagnostico ?? rawText
      precio_sugerido = parsed.precio_sugerido ?? ''
    } catch {
      // AI didn't return valid JSON — use raw text as diagnosis
    }

    try {
      const admin = createAdminClient()
      await admin.from('leads').insert({
        email: email || null,
        respuesta_1: respuestas[0],
        respuesta_2: respuestas[1],
        respuesta_3: respuestas[2],
        respuesta_4: respuestas[3],
        respuesta_5: respuestas[4],
        diagnostico,
        precio_sugerido,
      })
    } catch (dbError) {
      console.error('[diagnostico] DB insert error:', dbError)
    }

    return Response.json({ diagnostico, precio_sugerido })
  } catch (err) {
    console.error('[diagnostico] error:', err)
    return Response.json({ error: 'Error generando el diagnóstico' }, { status: 500 })
  }
}
