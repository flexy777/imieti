import { MembershipPackages } from "@/components/membership-packages"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MembershipPackagesPage() {
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
                <h1 className="text-2xl font-bold">Choose Your Membership Package</h1>
                <p className="text-white/80 mt-2">Select the package that best suits your needs</p>
              </div>
              <div className="p-6">
                {/* How we work section */}
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-primary mb-4">How we work</h2>
                  <ol className="space-y-3 pl-6 list-decimal">
                    <li className="text-primary/80">Choose a membership package to join.</li>
                    <li className="text-primary/80">Fill out the registration form.</li>
                    <li className="text-primary/80">
                      Make the necessary registration payment (You must use Visa or Mastercard).
                    </li>
                    <li className="text-primary/80">Create your public profile and upload your pictures and videos.</li>
                    <li className="text-primary/80">
                      We will assign you an account manager that will manage your account.
                    </li>
                    <li className="text-primary/80">Sit back and let us do the rest.</li>
                  </ol>
                </div>

                {/* Benefits section */}
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-primary mb-4">Benefits of being a member</h2>
                  <ul className="space-y-3 pl-6 list-disc">
                    <li className="text-primary/80">Get called for jobs on a regular basis</li>
                    <li className="text-primary/80">
                      Engage clients and fans with your diary sessions. Get paid each time someone visits your diary
                      room
                    </li>
                    <li className="text-primary/80">Meet new people, make new friends and earn extra income</li>
                    <li className="text-primary/80">Apply to Posted Requests and get hired to provide a service</li>
                    <li className="text-primary/80">Apply for emergency loans and academic scholarships</li>
                  </ul>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold text-primary">
                    Ready to join? Choose the type of registration you want.
                  </h2>
                </div>

                {/* Membership packages component */}
                <MembershipPackages />
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
