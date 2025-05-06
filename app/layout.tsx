import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Imieti Online Agency - Professional Ushering & Modeling Services",
  description: "Imieti connects you with top-tier models and ushers for your events, promotions, and campaigns.",
  icons: {
    icon: [{ url: "/ushers/usher2.jpeg" }, { url: "/favicon.ico" }],
    apple: { url: "/ushers/usher2.jpeg" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
