import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rienne Digital Solutions - Cybersecurity & Tech Education",
  description:
    "Professional cybersecurity services, ethical hacking, penetration testing, and comprehensive tech education programs. Rienne Digital Solutions - Secure Your Digital Future.",
  generator: "v0.app",
  openGraph: {
    title: "Rienne Digital Solutions - Cybersecurity & Tech Education",
    description:
      "Professional cybersecurity services, ethical hacking, penetration testing, and comprehensive tech education programs.",
    url: "https://riennedigitalsolutions.com",
    siteName: "Rienne Digital Solutions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rienne Digital Solutions Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rienne Digital Solutions",
    description: "Cybersecurity services and tech education",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
