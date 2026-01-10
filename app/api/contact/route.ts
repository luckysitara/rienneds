import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, interest, details } = await request.json()

    // Validate required fields
    if (!email || !interest) {
      return NextResponse.json({ error: "Email and interest are required" }, { status: 400 })
    }

    // Prepare message for Telegram
    const message = `
📩 <b>New Contact Form Submission</b>

📧 <b>Email:</b> ${email}
🎯 <b>Interest:</b> ${interest}
💬 <b>Details:</b> ${details || "N/A"}
    `.trim()

    // Get Telegram credentials from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("[v0] Missing Telegram credentials")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      console.error("[v0] Telegram API error:", await response.text())
      throw new Error("Failed to send Telegram message")
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
