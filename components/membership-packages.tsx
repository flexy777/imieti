"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2, AlertCircle, Info } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface PackageFeature {
  text: string
}

interface MembershipPackage {
  name: string
  acctype: number
  price: string
  features: string[]
  recommended?: boolean
  selection_url?: string
}

interface ApiResponse {
  status: number
  message: string
  data: {
    packages: MembershipPackage[]
  }
}

export function MembershipPackages() {
  const [packages, setPackages] = useState<MembershipPackage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getPackages = async () => {
      try {
        setLoading(true)

        // Use our Next.js API route
        const response = await fetch("/api/packages")

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }

        const data = await response.json()

        if (data.status !== 200) {
          throw new Error(data.message || "Failed to fetch packages")
        }

        // Check if we're using fallback data
        if (data.message.includes("fallback")) {
          setIsUsingFallback(true)
        }

        setPackages(data.data.packages)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching packages:", err)
        setError("Failed to load membership packages. Please try again later.")
        setLoading(false)
      }
    }

    getPackages()
  }, [])

  const handleSelectPackage = (acctype: number) => {
    router.push(`/members-register?acctype=${acctype}`)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <span className="text-primary">Loading membership packages...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200 p-6">
        <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
        <p className="text-red-600 font-medium mb-4">{error}</p>
        <Button onClick={() => window.location.reload()} className="bg-primary text-white hover:bg-primary/90">
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <>
      {isUsingFallback && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-700 flex items-start">
          <Info className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Development Mode: Using Sample Data</p>
            <p className="text-sm mt-1">
              The API requires a specific authentication flow that works best in a production environment. For
              development purposes, we're using sample data that matches the structure of the real API response.
            </p>
            <p className="text-sm mt-2">
              <Link href="/docs/api-integration" className="text-blue-600 hover:underline font-medium">
                View API Integration Documentation →
              </Link>
            </p>
          </div>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <div
            key={pkg.acctype}
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
                {/* Format the price to handle "/Year" properly */}
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
                      className={`h-5 w-5 mr-2 flex-shrink-0 ${pkg.recommended ? "text-primary" : "text-primary/70"}`}
                    />
                    <span className="text-sm text-primary/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Button
                onClick={() => handleSelectPackage(pkg.acctype)}
                className={`w-full ${
                  pkg.recommended
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-primary border border-primary hover:bg-primary/5"
                }`}
              >
                Select Package
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
