import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Star, Calendar, Languages, Ruler, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

// This would normally come from a database
const getTalentById = (id: string) => {
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
      bio: "Sarah is an experienced event host and runway model with a passion for creating memorable experiences. With 5 years in the industry, she has worked with top brands and event companies across Nigeria.",
      skills: ["Public Speaking", "Runway Modeling", "Event Coordination", "Customer Service"],
      pastClients: ["Lagos Fashion Week", "GTBank", "Coca-Cola Nigeria", "MTN"],
      availability: "Weekends and evenings",
      contact: {
        email: "sarah.j@example.com",
        phone: "+234 800 123 4567",
        instagram: "@sarah_j_model",
      },
    },
    // Add more talent profiles as needed
  ]

  return allTalent.find((talent) => talent.id === Number.parseInt(id)) || allTalent[0]
}

export default function TalentDetailPage({ params }: { params: { id: string } }) {
  const talent = getTalentById(params.id)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm py-3">
        <div className="container flex items-center h-16 justify-between">
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
        {/* Back Navigation */}
        <div className="container px-4 md:px-6 py-6">
          <Link href="/talents" className="inline-flex items-center text-primary/70 hover:text-primary">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Talent Directory
          </Link>
        </div>

        {/* Talent Profile */}
        <div className="container px-4 md:px-6 pb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Image */}
              <div className="md:w-1/3 lg:w-1/4">
                <div className="relative aspect-[3/4] w-full">
                  <Image src={talent.image || "/placeholder.svg"} alt={talent.name} fill className="object-cover" />
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">{talent.name}</h1>
                    <p className="text-lg text-primary/70">{talent.specialty}</p>
                    <div className="flex items-center mt-2 text-primary/60">
                      <MapPin className="h-4 w-4 mr-1" />
                      <p>{talent.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full md:w-auto">
                      Book This Talent
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-primary/60 text-sm">Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-primary mr-1" />
                      <span className="font-medium">{talent.rating}/5.0</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-primary/60 text-sm">Experience</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{talent.experience}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-primary/60 text-sm">Languages</span>
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{talent.languages.join(", ")}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-primary/60 text-sm">Height</span>
                    <div className="flex items-center">
                      <Ruler className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{talent.height}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-primary mb-2">About</h2>
                  <p className="text-primary/80">{talent.bio}</p>
                </div>

                {/* Skills */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-primary mb-2">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Past Clients */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-primary mb-2">Past Clients</h2>
                  <div className="flex flex-wrap gap-2">
                    {talent.pastClients.map((client, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 border border-primary/20 text-primary/80 rounded-full text-sm"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-primary mb-2">Contact Information</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      <span className="text-primary/80">{talent.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2" />
                      <span className="text-primary/80">{talent.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="h-4 w-4 text-primary mr-2" />
                      <span className="text-primary/80">{talent.contact.instagram}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary text-white hover:bg-primary/90 flex-1">Book for Event</Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 flex-1">
                    Contact Directly
                  </Button>
                </div>
              </div>
            </div>
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
