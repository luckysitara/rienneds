import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, interest, details } = await request.json()

    // Validate required fields
    if (!email || !interest) {
      console.log("[v0] Validation failed - missing email or interest")
      return NextResponse.json({ error: "Email and interest are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Invalid email format:", email)
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Get Telegram credentials from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    console.log("[v0] Telegram config check - Token exists:", !!botToken, "Chat ID exists:", !!chatId)

    if (!botToken || !chatId) {
      console.error("[v0] Missing Telegram credentials - Bot Token:", !!botToken, "Chat ID:", !!chatId)
      return NextResponse.json(
        { error: "Server configuration error - Telegram not configured" },
        { status: 500 }
      )
    }

    // Prepare message for Telegram with proper formatting
    const message = `
📩 <b>New Contact Form Submission</b>

📧 <b>Email:</b> <code>${email}</code>
🎯 <b>Interest:</b> ${interest}
💬 <b>Details:</b> ${details ? `<pre>${details}</pre>` : "<i>No additional details</i>"}
    `.trim()

    console.log("[v0] Preparing to send Telegram message to chat ID:", chatId.substring(0, 3) + "***")

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    const telegramPayload = {
      chat_id: Number(chatId),
      text: message,
      parse_mode: "HTML",
    }

    console.log("[v0] Telegram API call - URL:", telegramUrl.substring(0, 40) + "***")

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(telegramPayload),
    })

    const responseData = await response.json()
    console.log("[v0] Telegram API response status:", response.status, "Data:", responseData)

    if (!response.ok) {
      console.error("[v0] Telegram API error - Status:", response.status, "Response:", responseData)
      throw new Error(`Telegram API error: ${responseData?.description || "Unknown error"}`)
    }

    console.log("[v0] Message sent successfully to Telegram")
    return NextResponse.json(
      { success: true, message: "Message sent successfully to Telegram" },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Error in contact form:", errorMessage)
    return NextResponse.json(
      { error: "Failed to process contact form - " + errorMessage },
      { status: 500 }
    )
  }
}
