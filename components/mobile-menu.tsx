"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary"
        aria-label="Menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs border-l border-primary/10 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              {/* <div className="w-36">
                <Logo />
              </div> */}
                 <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight text-primary">IMIETI</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link
                href="/client-login"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Client Login
              </Link>
              <Link
                href="/members-login"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Members Login
              </Link>
              <Link
                href="/imietians-login"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Imietians Login
              </Link>
              <Link
                href="/join"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Imieti
              </Link>
              <Link
                href="/advertise"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Advertise
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Button className="mt-4 bg-primary text-white hover:bg-primary/90">Get Started</Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
