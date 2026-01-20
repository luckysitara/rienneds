"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Rienne Digital Solutions" width={48} height={48} className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="font-bold text-base">Rienne</span>
                <span className="font-bold text-sm text-primary">Digital Solutions</span>
              </div>
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
                  Blockchain & Web3
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
                  Web3 Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Connect with us on social media for updates and industry insights.
            </p>
            <a
              href="https://instagram.com/riennedigitalsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
            >
              <Instagram size={18} />
              @riennedigitalsolutions
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <p className="text-sm text-muted-foreground text-center">© 2025 Rienne Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
