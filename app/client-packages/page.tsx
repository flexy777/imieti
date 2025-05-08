import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { ClientPackages } from "@/components/client-packages"
import { Mail } from "lucide-react"

export default function ClientPackagesPage() {
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
        <div className="container py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
              <div className="bg-primary p-6 text-white">
                <h1 className="text-2xl font-bold">Create a Client Account</h1>
                <p className="text-white/80 mt-2">Choose a package to get started</p>
              </div>
              <div className="p-6">
                {/* Introduction */}
                <div className="mb-10 text-center">
                  <h2 className="text-xl font-bold text-primary mb-4">Imieti is Nigeria's No1 Online Agency.</h2>
                  <p className="text-primary/80 mb-4">
                    Create a Client Account and get access to Imieti's database of over 1,000 talents
                  </p>
                  <p className="text-primary/80 mb-4">
                    Connect, Contact and Contract the person(s) you want within minutes
                  </p>
                  <p className="flex items-center justify-center gap-1 text-primary/70 mb-8">
                    <Mail className="h-4 w-4" />
                    <span>
                      Mail{" "}
                      <a href="mailto:info@imieti.com" className="text-primary hover:underline">
                        info@imieti.com
                      </a>{" "}
                      for assistance
                    </span>
                  </p>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold text-primary">Choose a registration package.</h2>
                </div>

                {/* Client packages component */}
                <ClientPackages />

                {/* Additional information */}
                <div className="mt-12 border-t border-primary/10 pt-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">About Imieti</h3>
                      <p className="text-primary/70">
                        Imieti Online Agency is an online platform developed to provide young, female models and artists
                        access to an international service market place.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-3">Our Management</h3>
                      <p className="text-primary/70">
                        Imieti Online Agency is franchised in Nigeria under Caldoc Systems, a fully registered IT
                        company in Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
