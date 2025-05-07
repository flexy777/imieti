import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { MembersLoginForm } from "@/components/members-login-form"

export default function MembersLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm py-3">
      <div className="container flex items-center h-16 justify-between">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-primary">
                IMIETI
              </span>
              <span className="text-sm font-light text-primary">
                Online Agency
              </span>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/client-login"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Client Login
            </Link>
            <Link
              href="/members-login"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Members Login
            </Link>
            <Link
              href="/imietians-login"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Imietians Login
            </Link>
            <Link href="/join" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Join Imieti
            </Link>
            <Link
              href="/advertise"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Advertise
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              About Us
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-secondary/30">
        <div className="container max-w-md mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary p-6 text-white text-center">
              <h1 className="text-2xl font-bold">Members Portal</h1>
              <p className="text-white/80 mt-2">Access your member account</p>
            </div>
            <div className="p-6">
              <MembersLoginForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-white py-6">
        <div className="container text-center text-sm text-primary/70">
          <p>© 2024 Imieti Online Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
