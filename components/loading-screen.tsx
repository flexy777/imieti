"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"

interface LoadingScreenProps {
  showProgressBar?: boolean
}

export function LoadingScreen({ showProgressBar = true }: LoadingScreenProps) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)

    if (showProgressBar) {
      // Simulate progress for better UX
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress >= 90) {
              clearInterval(interval)
              return prevProgress
            }
            return prevProgress + 10
          })
        }, 400)

        return () => clearInterval(interval)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [showProgressBar])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="w-[180px] h-[100px] relative">
          <Logo />
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
        {showProgressBar && (
          <div className="mt-6 w-64 bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}
