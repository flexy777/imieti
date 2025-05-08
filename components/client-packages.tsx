"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

interface ClientPackage {
  id: string
  name: string
  price: string
  features: string[]
  recommended?: boolean
}

const clientPackages: ClientPackage[] = [
  {
    id: "starter",
    name: "Starter Plan",
    price: "₦1,000",
    features: [
      "Unlimited Access to Imieti's Database",
      "20 Profile Views",
      "20 Diary Room Views",
      "5 Imieti Connections",
      "10 Service Requests",
    ],
  },
  {
    id: "bronze",
    name: "Bronze Plan",
    price: "₦10,000",
    features: [
      "Unlimited Access to Imieti's Database",
      "200 Profile Views",
      "200 Diary Room Views",
      "50 Imieti Connections",
      "50 Service Requests",
    ],
  },
  {
    id: "silver",
    name: "Silver Plan",
    price: "₦25,000",
    recommended: true,
    features: [
      "Unlimited Access to Imieti's Database",
      "500 Profile Views",
      "500 Diary Room Views",
      "200 Imieti Connections",
      "200 Service Requests",
    ],
  },
  {
    id: "gold",
    name: "Gold Plan",
    price: "₦100,000",
    features: [
      "Unlimited Access to Imieti's Database",
      "2,000 Profile Views",
      "2,000 Diary Room Views",
      "1000 Imieti Connections",
      "1000 Service Requests",
    ],
  },
]

export function ClientPackages() {
  const router = useRouter()

  const handleSelectPackage = (packageId: string) => {
    router.push(`/client-register?package=${packageId}`)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {clientPackages.map((pkg) => (
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
            <div className={`text-2xl font-bold ${pkg.recommended ? "text-white" : "text-primary"}`}>{pkg.price}</div>
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
              onClick={() => handleSelectPackage(pkg.id)}
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
  )
}
