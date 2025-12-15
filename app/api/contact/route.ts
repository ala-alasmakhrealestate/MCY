import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        // body: { name, email, phone, message }
        // TODO: Integrate with CRM, sheet, email provider, or DB
        // For now we log and return success.

        console.log('[CONTACT] Lead received:', body)

        // Example: send to external CRM webhook:
        // await fetch(process.env.CRM_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(body) });

        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (err) {
        console.error('[CONTACT] error', err)
        return NextResponse.json({ ok: false }, { status: 500 })
    }
}