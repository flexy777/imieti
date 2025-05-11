"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { useRouter } from "next/navigation"

export default function JoinTermsPage() {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleScroll = () => {
    if (!termsRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = termsRef.current
    // Check if scrolled to bottom (with a small buffer)
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setHasScrolledToBottom(true)
    }
  }

  const handleAccept = () => {
    router.push("/join/about")
  }

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
              <h1 className="text-2xl font-bold">Terms and Conditions for use of imieti.com.ng</h1>
              <p className="text-white/80 mt-2">
                Kindly take a moment and review these terms before continuing your registration.
              </p>
            </div>
            <div className="p-6">
              <p className="text-center font-medium mb-4">
                Scroll to the end of the page to accept terms and continue.
              </p>

              <div
                ref={termsRef}
                onScroll={handleScroll}
                className="prose prose-sm max-w-none h-[400px] overflow-y-auto border border-primary/10 rounded-md p-4 bg-secondary/20"
              >
                <p className="mb-4">
                  General terms and conditions for the use of website imieti.com.ng and mobile application.
                </p>
                <p className="mb-4">
                  By logging on to website imieti.com.ng and mobile application accept the following General Terms and
                  Conditions (hereinafter the "GTCs") for using website imieti.com.ng and mobile application.
                </p>
                <p className="mb-6">
                  The Provider enters into this agreement on the use of website imieti.com.ng and mobile application
                  services with Caldoc Systems. Additional contact information, commercial registry data, as well as the
                  name of the authorized representative of website imieti.com.ng and mobile application are accessible
                  via here
                </p>

                <h3 className="text-xl font-bold text-primary mt-8 mb-4">A. DEFINITIONS</h3>
                <p className="mb-3">
                  "Clients": Photographers, brands, Model agencies, casting directors, advertising agencies, production
                  companies, media, showrooms, hair and makeup artists, PR / Events other industry clients and
                  spectators visiting or using website imieti.com.ng or mobile application;
                </p>
                <p className="mb-3">
                  "Providers": Individuals offering Services on website imieti.com.ng and mobile application;
                </p>
                <p className="mb-3">
                  "B-Clients": Photographers, brands, Model agencies, casting directors, advertising agencies,
                  production companies, media, showrooms, hair and makeup artists, PR / Events other industry Clients
                  and spectators that are registered users on website imieti.com.ng or mobile application and that use
                  the Booking System;
                </p>
                <p className="mb-3">
                  "B-Providers": Providers of legal age (18 years-old and older) that are subscribed to website
                  imieti.com.ng or mobile application and that use the Booking System;
                </p>
                <p className="mb-3">
                  "GTCs": General Terms and Conditions for the use of website imieti.com.ng and mobile application by
                  Providers, including Sections A to C.
                </p>
                <p className="mb-3">
                  "GTCs Booking System": General Terms and Conditions accepted by Providers and Clients for the use of
                  the Booking System.
                </p>
                <p className="mb-3">
                  "Booking System": Feature on website imieti.com.ng through which registered Clients are able to book a
                  Provider of legal age (18 years old or over) for a certain job;
                </p>
                <p className="mb-3">"Website": imieti.com.ng.</p>
                <p className="mb-3">"Mobile application":.</p>
                <p className="mb-3">
                  "Registration Fee": Total amount that users must pay by credit card or bank transfer on website
                  imieti.com.ng for registration to use all the features of imieti.com.ng;
                </p>
                <p className="mb-3">
                  "Agreed Date": End date of the job requested by the B-Professional to the B-Provider through the
                  Booking System and that has been agreed between both of them;
                </p>
                <p className="mb-3">
                  "Start Date": Start date of the job requested by the B-Professional to the B-Provider through the
                  Booking System and that has been agreed between both of them;
                </p>
                <p className="mb-6">
                  "Agreed Fee": Fee agreed between the B-Professional and the B-Provider for the job requested by the
                  B-Professional to the B-Provider through the Booking System.
                </p>

                <h3 className="text-xl font-bold text-primary mt-8 mb-4">
                  B. USE OF website imieti.com.ng and mobile application
                </h3>
                <h4 className="text-lg font-semibold text-primary/90 mt-6 mb-3">1. Subject Matter</h4>
                <p className="mb-3 pl-4">
                  1.1 website imieti.com.ng and mobile application offers Providers a platform for presenting their
                  profiles and photo books and for arranging business contacts, particularly with clients.
                </p>
                <p className="mb-3 pl-4">
                  1.2 Certain limited features of website imieti.com.ng and mobile application are offered for free,
                  while the use of the full range of services requires the registration fee. Details about the
                  applicable registration fees for the use of website imieti.com.ng and mobile application by Providers
                  are set forth under 'Fees'. The fees listed thereunder are binding. The applicable registration fee
                  for the service chosen by the Provider shall be due immediately upon registration on website
                  imieti.com.ng and mobile application. Payments can be made using the various payment methods, or the
                  available online payment systems. The Provider may start using the Premium Services if and when
                  website imieti.com.ng and mobile application has received the applicable registration fee.
                </p>
                <p className="mb-3 pl-4">
                  1.3 The Provider acknowledges and agrees that it is technically impossible to achieve 100%
                  availability of website imieti.com.ng and mobile application. website imieti.com.ng and mobile
                  application shall nonetheless endeavor to keep website imieti.com.ng and mobile application available
                  without interruption. Events related to maintenance, security or capacity requirements, and/or events
                  beyond website imieti.com.ng and mobile application control (e.g. disruptions in public communication
                  networks, power failures etc.), may result in brief malfunctions or temporary interruptions of the
                  services provided on website imieti.com.ng and mobile application.
                </p>
                <p className="mb-6 pl-4">
                  1.4 Website imieti.com.ng and mobile application provides Providers with a platform on which to
                  establish contact with other persons or entities, in particular Model agencies. website imieti.com.ng
                  and mobile application does not take part in any communication between Providers and/or any other
                  users of its services. If users enter into agreements with one another via website imieti.com.ng and
                  mobile application, website imieti.com.ng and mobile application shall not be a contracting party to
                  these agreements. The users alone are responsible for the execution and/or fulfillment of agreements
                  in which they enter with one another. website imieti.com.ng and mobile application shall not be held
                  liable if users are unable to contact one another over website imieti.com.ng and mobile application
                  regarding such agreements. Furthermore, website imieti.com.ng and mobile application shall not be
                  liable for breaches of agreements entered into between users.
                </p>

                <h4 className="text-lg font-semibold text-primary/90 mt-6 mb-3">
                  2. Registration on website imieti.com.ng and mobile application
                </h4>
                <p className="mb-3 pl-4">
                  2.1 Providers must register prior to using the services of website imieti.com.ng and mobile
                  application.
                </p>
                <p className="mb-3 pl-4">
                  2.2 The Provider shall only provide accurate and complete data for registration. The registration data
                  include an alias (online) name to be chosen by the Provider for public display with the Provider's
                  profile, whereas the Provider's real name may be made publicly available. The Provider shall report
                  any changes in the registration data to website imieti.com.ng and mobile application without undue
                  delay.
                </p>
                <p className="mb-6 pl-4">
                  2.3 The sign-up to the platform by persons of minor age is not allowed, unless they have the prior and
                  express authorization of their parents, guardians or legal representatives, who will be held
                  responsible for the acts carried out by the minors in their care, in accordance with the applicable
                  regulations. In any case, it will be presumed that the sign-up to the platform imieti.com.ng or mobile
                  application by a person of minor age has been made with the prior and express authorization of his/her
                  parents, guardians or legal representatives.
                </p>

                {/* Additional terms content would continue here... */}
                <h3 className="text-xl font-bold text-primary mt-8 mb-4">C. BOOKING SYSTEM OF imieti.com.ng</h3>
                <p className="mb-6">
                  The Booking System is a feature on website imieti.com.ng through which registered Clients (herein
                  after "B-Clients") are able to book subscribed Providers of legal age (herein after "B-Providers") for
                  a certain job. B-Providers and B-Clients accept the following General Terms and Conditions for using
                  the Booking System of website imieti.com.ng:
                </p>

                <h4 className="text-lg font-semibold text-primary/90 mt-6 mb-3">7. Refund Policy</h4>
                <p className="mb-3">Refund policy for website imieti.com.ng users:</p>
                <p className="mb-3 pl-4">
                  The Provider can request the reimbursement of their payment for a service within the period
                  established by law(7 DAYS).
                </p>
                <p className="mb-3 pl-4">
                  Refunds on services contracted for a period of time after the said 7 day period, cannot be made.
                </p>
                <p className="mb-3 pl-4">Refunds on memberships renewals cannot be made.</p>
                <p className="mb-3 pl-4">
                  Refunds can be offered only if the user did not apply to more than 1 casting and did not initiate
                  conversations with any Providers or Clients using messaging features on imieti.com.ng.
                </p>
                <p className="mb-3 pl-4">
                  A full refund will be offered to Providers that have an account which can't be approved.
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleAccept}
                  disabled={!hasScrolledToBottom}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  {hasScrolledToBottom ? "Accept Terms & Continue" : "Please scroll to the end to continue"}
                </Button>
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
