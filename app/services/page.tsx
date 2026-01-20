"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page with services anchor
    router.push("/#services")
  }, [router])

  return null
}
