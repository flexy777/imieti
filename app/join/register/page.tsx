import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { Check } from "lucide-react"

interface MemberPackage {
  id: string
  name: string
  price: string
  features: string[]
  recommended?: boolean
}

const memberPackages: MemberPackage[] = [
  {
    id: "starter",
    name: "Starter Registration Package",
    price: "₦5,000/Year",
    features: [
      "Clients hire you directly from the website",
      "We call you for jobs",
      "You get paid ₦2 each time someone visits your profile",
      "You get paid ₦5 each time someone visits your diary room",
      "You get paid maximum of ₦15,000 per job.",
    ],
  },
  {
    id: "business",
    name: "Business Registration Package",
    price: "₦15,000/Year",
    recommended: true,
    features: [
      "Clients hire you directly from the website",
      "We call you for jobs",
      "You can work as a Brand Ambassador for local and international firms",
      "You get paid ₦5 each time someone visits your profile",
      "You get paid ₦5 each time someone visits your diary room",
      "Choose your payment up to a maximum of ₦100,000",
      "Get recommended to prospective clients",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate Registration Package",
    price: "₦150,000/Year",
    features: [
      "Everything in Business Package",
      "We provide you with an agent to manage your career",
      "Set your Fee per Profile View (Up to ₦10,000)",
      "Choose your Pyament per Job/Service up to ₦1,000,000",
      "Get recommended to prospective clients",
      "Get featured on all digital media",
    ],
  },
]

export default function JoinRegisterPage() {
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
              <h1 className="text-2xl font-bold">Choose Your Membership Package</h1>
              <p className="text-white/80 mt-2">Select the package that best suits your needs</p>
            </div>
            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                {memberPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col rounded-lg border ${
                      pkg.recommended
                        ? "border-primary shadow-lg ring-2 ring-primary"
                        : "border-primary/20 shadow-md hover:shadow-lg"
                    } overflow-hidden transition-shadow`}
                  >
                    {pkg.recommended && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        RECOMMENDED
                      </div>
                    )}
                    <div
                      className={`p-6 ${
                        pkg.recommended ? "bg-primary text-white" : "bg-primary/5 text-primary"
                      } text-center border-b ${pkg.recommended ? "border-white/20" : "border-primary/10"}`}
                    >
                      <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                      <div className={`text-2xl font-bold ${pkg.recommended ? "text-white" : "text-primary"}`}>
                        {pkg.price.includes("/") ? (
                          <>
                            {pkg.price.split("/")[0]}
                            <span className="text-base">{`/${pkg.price.split("/")[1]}`}</span>
                          </>
                        ) : (
                          pkg.price
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check
                              className={`h-5 w-5 mr-2 flex-shrink-0 ${
                                pkg.recommended ? "text-primary" : "text-primary/70"
                              }`}
                            />
                            <span className="text-sm text-primary/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 pt-0">
                      <Button
                        className={`w-full ${
                          pkg.recommended
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-white text-primary border border-primary hover:bg-primary/5"
                        }`}
                        asChild
                      >
                        <Link href={`/members-register?acctype=${pkg.id}`}>Select Package</Link>
                      </Button>
                    </div>
                  </div>
                ))}
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
