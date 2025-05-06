import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight">IMIETI</span>
              <span className="text-sm font-light">Online Agency</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <MobileMenu />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/client-login" className="text-sm font-medium hover:text-primary transition-colors">
              Client Login
            </Link>
            <Link href="/members-login" className="text-sm font-medium hover:text-primary transition-colors">
              Members Login
            </Link>
            <Link href="/imietians-login" className="text-sm font-medium hover:text-primary transition-colors">
              Imietians Login
            </Link>
            <Link href="/join" className="text-sm font-medium hover:text-primary transition-colors">
              Join Imieti
            </Link>
            <Link href="/advertise" className="text-sm font-medium hover:text-primary transition-colors">
              Advertise
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Rest of the content remains the same */}
      {/* ... */}
    </div>
  )
}
