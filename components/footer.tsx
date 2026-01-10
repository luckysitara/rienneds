"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Rienne Digital Solutions" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-lg">Rienne</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering professionals with cybersecurity expertise and cutting-edge tech skills through digital
              innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Ethical Hacking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Security Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Full Stack Dev
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Mobile Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram QR Code */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="bg-background rounded-lg p-3 inline-block border border-border">
              <Image
                src="/instagram-qr.png"
                alt="Rienne Digital Solutions Instagram QR Code"
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3">Scan to follow us on Instagram</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Rienne Digital Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/riennedigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
