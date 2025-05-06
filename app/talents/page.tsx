import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

// Extended talent data for the full page
const allTalent = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Event Hosting & Runway",
    location: "Lagos",
    image: "/ushers/usher1.jpeg",
    rating: 4.9,
    experience: "5 years",
    languages: ["English", "Yoruba"],
    height: "5'9\"",
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Corporate Events & Brand Ambassador",
    location: "Abuja",
    image: "/ushers/usher13.jpeg",
    rating: 4.8,
    experience: "3 years",
    languages: ["English", "Mandarin"],
    height: "6'0\"",
  },
  {
    id: 3,
    name: "Amara Okafor",
    specialty: "Fashion Shows & Photoshoots",
    location: "Port Harcourt",
    image: "/ushers/usher3.jpeg",
    rating: 4.7,
    experience: "4 years",
    languages: ["English", "Igbo"],
    height: "5'10\"",
  },
  {
    id: 4,
    name: "David Williams",
    specialty: "Product Promotion & Trade Shows",
    location: "Lagos",
    image: "/ushers/usher4.jpeg",
    rating: 4.9,
    experience: "6 years",
    languages: ["English", "French"],
    height: "6'1\"",
  },
  {
    id: 5,
    name: "Fatima Ahmed",
    specialty: "Event Coordination & Hosting",
    location: "Kano",
    image: "/ushers/usher5.jpeg",
    rating: 4.8,
    experience: "4 years",
    languages: ["English", "Hausa", "Arabic"],
    height: "5'7\"",
  },
  {
    id: 6,
    name: "James Okonkwo",
    specialty: "Commercial Modeling & Brand Promotion",
    location: "Enugu",
    image: "/ushers/usher6.jpeg",
    rating: 4.6,
    experience: "2 years",
    languages: ["English", "Igbo"],
    height: "6'2\"",
  },
  {
    id: 7,
    name: "Zainab Ibrahim",
    specialty: "Fashion Runway & Photography",
    location: "Abuja",
    image: "/ushers/usher7.jpeg",
    rating: 4.9,
    experience: "5 years",
    languages: ["English", "Hausa"],
    height: "5'11\"",
  },
  {
    id: 8,
    name: "Emmanuel Adebayo",
    specialty: "Corporate Events & Trade Shows",
    location: "Lagos",
    image: "/ushers/usher8.jpeg",
    rating: 4.7,
    experience: "3 years",
    languages: ["English", "Yoruba", "French"],
    height: "5'10\"",
  },
  {
    id: 9,
    name: "Chioma Nwosu",
    specialty: "Event Hosting & Brand Promotion",
    location: "Port Harcourt",
    image: "/ushers/usher9.jpeg",
    rating: 4.8,
    experience: "4 years",
    languages: ["English", "Igbo"],
    height: "5'8\"",
  },
  {
    id: 10,
    name: "Hassan Mohammed",
    specialty: "Commercial Modeling & Promotions",
    location: "Kaduna",
    image: "/ushers/usher10.jpeg",
    rating: 4.6,
    experience: "2 years",
    languages: ["English", "Hausa"],
    height: "6'0\"",
  },
  {
    id: 11,
    name: "Grace Osei",
    specialty: "Fashion Shows & Runway",
    location: "Lagos",
    image: "/ushers/usher11.jpeg",
    rating: 4.9,
    experience: "7 years",
    languages: ["English", "Twi"],
    height: "5'10\"",
  },
  {
    id: 12,
    name: "Victor Eze",
    specialty: "Corporate Events & Ushering",
    location: "Abuja",
    image: "/ushers/usher12.jpeg",
    rating: 4.7,
    experience: "3 years",
    languages: ["English", "Igbo"],
    height: "6'1\"",
  },
]

export default function TalentsPage() {
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
        {/* Page Header */}
        <div className="bg-primary text-white py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">Our Talent Directory</h1>
                <p className="text-white/80 max-w-[600px]">
                  Browse our extensive roster of professional models and ushers for your next event or campaign
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button className="bg-white text-primary hover:bg-white/90">Book Talent</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="border-b bg-white py-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                <input
                  type="search"
                  placeholder="Search by name, specialty, or location..."
                  className="w-full rounded-md border border-primary/20 bg-white pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="outline" className="border-primary/20 text-primary flex-1 md:flex-none">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <select className="rounded-md border border-primary/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 flex-1 md:flex-none">
                  <option value="">Sort By</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="rating">Rating (High-Low)</option>
                  <option value="experience">Experience</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Talent Grid */}
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allTalent.map((talent) => (
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
                  <div className="mt-2 text-xs">
                    <p>Experience: {talent.experience}</p>
                    <p>Languages: {talent.languages.join(", ")}</p>
                    <p>Height: {talent.height}</p>
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

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="sm" className="border-primary/20 text-primary" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                2
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                3
              </Button>
              <span className="px-2 text-primary/60">...</span>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                8
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                Next
              </Button>
            </nav>
          </div>
        </div>
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
