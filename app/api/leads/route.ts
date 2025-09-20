import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    console.log("New Lead Submitted:", body)

    // Here you could send lead to CRM, email, or DB
    return NextResponse.json({ success: true, message: "Lead received" })
}
