"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail } from "lucide-react"
import Link from "next/link"

export function ClientLoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", { username, password })
    // Handle login logic here
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
          Login
        </Button>
      </form>

      <div className="mt-6 space-y-2 text-center text-sm">
        <p>
          <Link href="/client-forgot-password" className="text-primary hover:underline">
            Forgot / Change password? Click Here
          </Link>
        </p>
        <p>
          <Link href="/client-packages" className="text-primary hover:underline">
            Not registered? Create an account
          </Link>
        </p>
        <p className="mt-4 flex items-center justify-center gap-1 text-primary/70">
          <Mail className="h-4 w-4" />
          <span>
            Mail{" "}
            <a href="mailto:info@imieti.com.ng" className="text-primary hover:underline">
              info@imieti.com.ng
            </a>{" "}
            for assistance
          </span>
        </p>
      </div>
    </div>
  )
}
