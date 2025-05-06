"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff } from "lucide-react"

// List of Nigerian states
const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export function ImietiansLoginForm() {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Form states
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [state, setState] = useState("")
  const [isAdult, setIsAdult] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isLogin) {
      console.log("Login submitted:", { username, password })
      // Handle login logic here
    } else {
      console.log("Registration submitted:", { email, username, password, state, isAdult })
      // Handle registration logic here
    }
  }

  return (
    <div>
      {/* Toggle buttons */}
      <div className="flex rounded-md overflow-hidden mb-6">
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            !isLogin ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
        >
          Create an Account
        </button>
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            isLogin ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
        >
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin ? (
          // Registration Form
          <>
            <div className="space-y-2">
              <Label htmlFor="email">Enter your Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-username">Enter your Username</Label>
              <Input
                id="reg-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-password">Choose Password</Label>
              <div className="relative">
                <Input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
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

            <div className="space-y-2">
              <Label htmlFor="state">State of Residence</Label>
              <Select value={state} onValueChange={setState} required>
                <SelectTrigger id="state" className="w-full">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="age-check"
                checked={isAdult}
                onCheckedChange={(checked) => setIsAdult(checked as boolean)}
                required
              />
              <Label
                htmlFor="age-check"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I am above 18 years
              </Label>
            </div>
          </>
        ) : (
          // Login Form
          <>
            <div className="space-y-2">
              <Label htmlFor="login-username">Username</Label>
              <Input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password">Password</Label>
              <div className="relative">
                <Input
                  id="login-password"
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

            {/* <div className="text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div> */}
          </>
        )}

        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
          {isLogin ? "Login" : "Create Account"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-primary/70">
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-medium hover:underline"
          >
            {isLogin ? "Create one" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}
