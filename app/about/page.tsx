import Link from "next/link"
import { ChevronLeft, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm py-3">
        <div className="container flex items-center justify-between">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Imieti</h1>
              <p className="text-xl md:text-2xl font-semibold mb-4">Nigeria's No1 Online Agency.</p>
              <div className="h-1 w-20 bg-white mb-8"></div>
              <p className="text-white/90 text-lg">
                Imieti is an online talent solutions company that facilitates the connection between a pool of freelance
                service providers and customers all around the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-primary/80 mb-8">
                  In the initial phase, We have aggregated talented young individuals who are able to provide Ushering,
                  Modeling, Companionship and/or Entertainment services.
                </p>
                <p className="text-primary/80 mb-12">
                  Through the implementation of multiple quality assurance mechanisms, we are able to ensure that you
                  always get the best professional service.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-12 mb-6">How it works</h2>
                <p className="text-primary/80 mb-4">There are 2 ways to hire a talent from Imieti.</p>
                <ol className="list-decimal pl-6 space-y-4 mb-8">
                  <li className="text-primary/80">
                    Contact Imieti help desk through telephone, WhatsApp or email and request for a talent
                  </li>
                  <li className="text-primary/80">
                    Contact the talent directly. You can get the details of a talent by visiting his/her profile.
                  </li>
                </ol>
                <p className="text-primary/80 mb-4">
                  In order to visit a talent's profile, one will have to be fully registered as a client.
                </p>
                <p className="text-primary/80 mb-12">
                  Visiting a profile requires payment of a token. Usually, upon successful registration as a client,
                  Imieti offers you free tokens which you can use. However, when you run out of tokens, you must buy
                  more.
                </p>

                <div className="bg-secondary/50 p-6 rounded-lg border border-primary/10 mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">Companionship Services</h2>
                  <p className="text-primary/80 mb-4">
                    This is a service whereby a client requests that a talent spend time with him/her for a fee. This is
                    may include the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li className="text-primary/80">Accompany client to an event or ceremony</li>
                    <li className="text-primary/80">Keep client company for a pre-agreed duration</li>
                  </ul>
                  <p className="text-primary/80 font-medium mb-4">
                    It is important to note the following about companionship services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-primary/80 font-medium">It is not prostitution or escort services</li>
                    <li className="text-primary/80 font-medium">It does not involve sexual or any immoral acts</li>
                    <li className="text-primary/80 font-medium">Meeting must be in a public place.</li>
                  </ul>
                </div>

                <p className="text-primary/80 mb-8">
                  Imieti is managed in Nigeria by Caldoc Systems, a fully registered IT company. You can get more
                  information about Caldoc Systems{" "}
                  <a href="#" className="text-primary hover:underline">
                    here
                  </a>
                </p>

                {/* Call to Action Buttons */}
                <div className="grid gap-4 sm:grid-cols-3 my-12">
                  <Button className="bg-primary text-white hover:bg-primary/90 h-auto py-6" asChild>
                    <Link href="#" className="flex flex-col items-center text-center">
                      <span className="text-lg font-medium">Hire Someone</span>
                      <span className="text-xs mt-1">Find the perfect talent</span>
                    </Link>
                  </Button>
                  <Button className="bg-primary text-white hover:bg-primary/90 h-auto py-6" asChild>
                    <Link href="/join" className="flex flex-col items-center text-center">
                      <span className="text-lg font-medium">Join Imieti</span>
                      <span className="text-xs mt-1">Become a talent</span>
                    </Link>
                  </Button>
                  <Button className="bg-primary text-white hover:bg-primary/90 h-auto py-6" asChild>
                    <Link href="/advertise" className="flex flex-col items-center text-center">
                      <span className="text-lg font-medium">Advertise</span>
                      <span className="text-xs mt-1">Promote your brand</span>
                    </Link>
                  </Button>
                </div>

                <div className="text-center mb-12">
                  <p className="text-xl font-medium text-primary mb-4">
                    Connect, Contact and Contract the person(s) you want within minutes
                  </p>
                  <a
                    href="https://wa.me/2348088561126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-medium">WhatsApp +234 808 856 1126 for assistance</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-gradient text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8">
                Whether you're looking to hire talent or join our platform, we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Browse Talent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join as Talent
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <Logo />
              <p className="text-sm text-primary/70 mt-2">
                Professional ushering and modeling services for all your event needs.
              </p>
              <div className="flex space-x-4 pt-2">
                {/* Social media icons would go here */}
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">FB</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">IG</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">TW</span>
                </div>
              </div>
            </div>
            <nav className="space-y-3">
              <h3 className="text-lg font-medium text-primary">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Event Ushering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Fashion Modeling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Brand Promotion
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-3">
              <h3 className="text-lg font-medium text-primary">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-3">
              <h3 className="text-lg font-medium text-primary">Login</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/client-login" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Client Login
                  </Link>
                </li>
                <li>
                  <Link href="/members-login" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    Members Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/imietians-login"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Imietians Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-primary/10">
            <p className="text-xs text-primary/70">© 2024 Imieti Online Agency. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-primary/70 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-xs text-primary/70 hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
