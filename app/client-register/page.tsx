import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"

export default function ClientRegisterPage({ searchParams }: { searchParams: { package?: string } }) {
  const packageId = searchParams.package || "starter"

  // Map package IDs to names
  const packageNames: Record<string, string> = {
    starter: "Starter Plan",
    bronze: "Bronze Plan",
    silver: "Silver Plan",
    gold: "Gold Plan",
  }

  const packageName = packageNames[packageId] || "Unknown Package"

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
        <div className="container max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary p-6 text-white">
              <h1 className="text-2xl font-bold">Client Registration</h1>
              <p className="text-white/80 mt-2">
                Create your client account with the {packageName} to access exclusive features
              </p>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <h2 className="text-xl font-medium text-primary mb-4">Registration Form</h2>
                <p className="text-primary/70 mb-6">
                  This is a placeholder for the client registration form. The actual registration form will be
                  implemented based on your requirements.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/client-packages">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      Back to Packages
                    </Button>
                  </Link>
                  <Link href="/client-login">
                    <Button className="bg-primary text-white hover:bg-primary/90">Back to Login</Button>
                  </Link>
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
