import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Users,
  Award,
  Calendar,
  Star,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { TypewriterText } from "@/components/typewriter-text"
import { HeroSlideshow } from "@/components/hero-slideshow"

// Hero slideshow images
const heroImages = [
  { src: "/ushers/usher7.jpeg", alt: "Professional models and ushers" },
  { src: "/ushers/usher12.jpeg", alt: "Professional talent" },
  { src: "/ushers/usher8.jpeg", alt: "Event ushers" },
  { src: "/ushers/usher9.jpeg", alt: "Fashion models" },
]

// Featured talent data
const featuredTalent = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Event Hosting & Runway",
    location: "Abuja",
    image: "/ushers/usher1.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Corporate Events & Brand Ambassador",
    location: "Abuja",
    image: "/ushers/usher10.jpeg",
  },
  {
    id: 3,
    name: "Amara Okafor",
    specialty: "Fashion Shows & Photoshoots",
    location: "Lagos",
    image: "/ushers/usher3.jpeg",
  },
  {
    id: 4,
    name: "David Williams",
    specialty: "Product Promotion & Trade Shows",
    location: "Abuja",
    image: "/ushers/usher11.jpeg",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm py-3">
        <div className="container flex h-16 items-center justify-between">
          {/* <div className="w-[180px] sm:w-[220px]">
            <Logo />
          </div> */}
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
            <Link
              href="/join"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Join Imieti
            </Link>
            <Link
              href="/advertise"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Advertise
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              About Us
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Background */}
        <section className="relative py-12 md:py-28 lg:py-36 overflow-hidden bg-navy-gradient text-white">
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 transform origin-top"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-shadow">
                  <TypewriterText text="Connect, Contact and Contract Talents" speed={80} />
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Imieti connects you with top-tier models and ushers for your
                    events, promotions, and campaigns.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-8"
                  >
                    Book Talent
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8"
                  >
                    Join Our Team
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                {/* Desktop image */}
                <div className="relative hidden md:block h-[400px] w-full overflow-hidden rounded-xl border-4 border-white/20 shadow-xl">
                  <Image
                    src="/ushers/usher7.jpeg"
                    alt="Professional models and ushers"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                    {/* Mobile slideshow */}
                        <div className="md:hidden">
                  <HeroSlideshow images={heroImages} />
                </div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm text-center">
                    PREMIUM QUALITY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Background */}
        <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-lines opacity-30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Our Services
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                  Our Premium Services
                </h2>
                <p className="max-w-[700px] text-primary/70 md:text-xl">
                  Discover how Imieti can transform your events with our
                  professional services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-primary/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Event Ushering
                </h3>
                <p className="text-center text-primary/70">
                  Professional ushers for corporate events, weddings, and
                  conferences.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-primary font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-primary/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Fashion Modeling
                </h3>
                <p className="text-center text-primary/70">
                  Runway and photoshoot models for fashion events and brand
                  campaigns.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-primary font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-primary/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Brand Promotion
                </h3>
                <p className="text-center text-primary/70">
                  Brand ambassadors and promotional staff for product launches
                  and marketing.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-primary font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

       {/* Featured Talent with Background */}
        <section className="py-12 md:py-16 lg:py-20 bg-secondary relative">
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Our Talent
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Featured Talent</h2>
                <p className="max-w-[700px] text-primary/70 md:text-xl">
                  Meet some of our exceptional models and ushers
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {featuredTalent.map((talent) => (
                <div
                  key={talent.id}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={talent.image || "/placeholder.svg"}
                      alt={`${talent.name} - ${talent.specialty}`}
                      width={300}
                      height={450}
                      className="object-cover transition-transform group-hover:scale-105 h-full w-full"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="font-bold">{talent.name}</h3>
                    <p className="text-sm">{talent.specialty}</p>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <p className="text-xs">{talent.location}</p>
                    </div>
                    <Button size="sm" className="mt-3 bg-white text-primary hover:bg-white/90" asChild>
                      <Link href={`/talents/${talent.id}`}>Connect</Link>
                    </Button>
                  </div>
                  <div className="p-4 border-t border-primary/10">
                    <div className="flex flex-col gap-2">
                      <div>
                        <h3 className="font-bold text-primary">{talent.name}</h3>
                        <p className="text-sm text-primary/70">{talent.specialty}</p>
                        <div className="flex items-center mt-1 text-primary/60">
                          <MapPin className="h-3 w-3 mr-1" />
                          <p className="text-xs">{talent.location}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary text-white hover:bg-primary/90 w-full" asChild>
                        <Link href={`/talents/${talent.id}`}>Connect</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5" asChild>
                <Link href="/talents">View All Talent</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials with Background */}
        <section className="py-12 md:py-16 lg:py-20 bg-white relative">
          <div className="absolute inset-0 bg-pattern-lines opacity-30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Testimonials
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                  Client Testimonials
                </h2>
                <p className="max-w-[700px] text-primary/70 md:text-xl">
                  What our clients say about working with Imieti talent
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-4 rounded-lg border border-primary/10 p-6 bg-white shadow-md"
                >
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-primary/70 italic">
                    "The ushers from Imieti were professional, punctual, and
                    added a touch of elegance to our corporate event. Highly
                    recommended!"
                  </p>
                  <div className="flex items-center space-x-3 pt-2 border-t border-primary/10">
                    <div className="h-12 w-12 rounded-full bg-primary/10 overflow-hidden">
                      <Image
                        src={`/ushers/usher${i + 2}.jpeg`}
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Client Name</p>
                      <p className="text-sm text-primary/70">
                        Event Manager, Company
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action with Background */}
        <section className="py-12 md:py-16 lg:py-20 bg-navy-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="absolute left-0 top-0 h-full w-1/4 bg-white/10 skew-x-12 transform origin-bottom"></div>
          <div className="absolute right-0 bottom-0 h-full w-1/4 bg-white/10 -skew-x-12 transform origin-top"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                Get Started Today
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-shadow">
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl">
                  Whether you need talent for your event or want to join our
                  team, we're here to help
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8"
                >
                  Book Talent Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8"
                >
                  Join Our Agency
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
                Professional ushering and modeling services for all your event
                needs.
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
                  <Link
                    href="#"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Event Ushering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Fashion Modeling
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Brand Promotion
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-3">
              <h3 className="text-lg font-medium text-primary">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-3">
              <h3 className="text-lg font-medium text-primary">Login</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/client-login"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    Client Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members-login"
                    className="text-sm text-primary/70 hover:text-primary transition-colors"
                  >
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
            <p className="text-xs text-primary/70">
              © 2024 Imieti Online Agency. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-primary/70 hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-xs text-primary/70 hover:text-primary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
