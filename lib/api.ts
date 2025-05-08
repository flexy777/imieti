// API utility functions

/**
 * Generates or retrieves a CSRF token
 */
export function getCsrfToken(): string {
    // In a real implementation, this would be provided by the server
    // For demo purposes, we'll use the session ID or generate a new one
    if (typeof window === "undefined") {
      return "server-side-token"
    }
  
    const existingToken = window.sessionStorage.getItem("csrfToken")
    if (existingToken) {
      return existingToken
    }
  
    // Generate a simple token (in production, use a more secure method)
    const newToken = `token-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
    window.sessionStorage.setItem("csrfToken", newToken)
    return newToken
  }
  
  /**
   * Makes an API request with the CSRF token included
   */
  export async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
    const csrfToken = getCsrfToken()
  
    const headers = {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
      ...(options.headers || {}),
    }
  
    const response = await fetch(url, {
      ...options,
      headers,
    })
  
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
  
    return response.json()
  }
  
  /**
   * Fetches membership packages from the API
   */
  export async function fetchMembershipPackages() {
    try {
      return await apiRequest<any>("https://Imieti.com.ng/V2/memberpackages")
    } catch (error) {
      console.error("Error fetching membership packages:", error)
      throw error
    }
  }
  