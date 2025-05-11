import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { CheckCircle2 } from "lucide-react"

export default function JoinAboutPage() {
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
              <h1 className="text-2xl font-bold">Join Imieti</h1>
              <p className="text-white/80 mt-2">Your gateway to professional opportunities</p>
            </div>
            <div className="p-6">
              {/* Hero section */}
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Can you work as a Model, Usher, Companion or Performing Artist?
                </h2>
                <p className="text-lg text-primary/80 mb-2">
                  Have you been searching for an agent to get these jobs for you?
                </p>
                <p className="text-lg text-primary/80 mb-2">
                  Imieti Online Agency is your trusted partner in getting you hired for jobs.
                </p>
                <p className="text-lg text-primary/80 mb-6">
                  We are the No1 platform used by local and international clients to hire creative talents in Africa
                </p>
              </div>

              {/* About Us section */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-4">About Us</h3>
                <div className="space-y-4 text-primary/80">
                  <p>
                    Imieti Online Agency provides young, talented individuals with the right platform and tools they
                    need to earn money, build a career and get access to an international service market place
                  </p>
                  <p>
                    We work hard to ensure our members get steady jobs and also work as Brand Ambassadors for local and
                    international brands
                  </p>
                  <p>
                    Our strong network with European partners grant our Models and Artists access to European and
                    American markets.
                  </p>
                </div>
                <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10 text-center">
                  <p className="text-xl font-bold text-primary">100% real!</p>
                </div>
              </div>

              {/* How we work section */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-4">How we work</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Choose a membership package to join.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Fill out the registration form.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">
                      Make the necessary registration payment (You must use Visa or Mastercard).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">
                      Create your public profile and upload your pictures and videos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">
                      We will assign you an account manager that will manage your account.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Sit back and let us do the rest.</span>
                  </li>
                </ol>
              </div>

              {/* Benefits section */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-4">Benefits of being a member</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Get called for jobs on a regular basis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">
                      Engage clients and fans with your diary sessions. Get paid each time someone visits your diary
                      room
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Meet new people, make new friends and earn extra income</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Apply to Posted Requests and get hired to provide a service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80">Apply for emergency loans and academic scholarships</span>
                  </li>
                </ul>
              </div>

              {/* CTA section */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-6">Ready to join? Choose what you want to do next.</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                    asChild
                  >
                    <Link href="/join/jobs">See Available Jobs</Link>
                  </Button>
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href="/join/register">Register Now</Link>
                  </Button>
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
