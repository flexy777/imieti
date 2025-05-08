import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ApiIntegrationDocs() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Link href="/members-packages" className="inline-flex items-center text-primary/70 hover:text-primary mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Packages
      </Link>

      <div className="prose prose-blue max-w-none">
        <h1>API Integration Documentation</h1>

        <h2>Membership Packages API</h2>

        <p>
          The membership packages API requires a specific authentication flow using CSRF tokens. This document outlines
          how to properly integrate with this API in a production environment.
        </p>

        <h3>API Endpoint</h3>

        <pre>
          <code>https://Imieti.com.ng/V2/memberpackages</code>
        </pre>

        <h3>Authentication Flow</h3>

        <p>The API uses a two-step process with CSRF tokens:</p>

        <ol>
          <li>
            <strong>Initial Request</strong>: Make a request to get a CSRF token
            <ul>
              <li>The initial request will return a 403 Forbidden status</li>
              <li>The response will include a CSRF token in the JSON body</li>
            </ul>
          </li>
          <li>
            <strong>Authenticated Request</strong>: Make a second request with the CSRF token
            <ul>
              <li>Include the CSRF token in the X-CSRF-Token header</li>
              <li>The request should maintain the same session as the first request</li>
            </ul>
          </li>
        </ol>

        <h3>Important Notes</h3>

        <p>During development, we encountered challenges with the API authentication:</p>

        <ol>
          <li>
            <strong>Session Management</strong>: The CSRF token appears to be tied to the PHP session. When making
            requests from a server-side API route, maintaining this session is challenging.
          </li>
          <li>
            <strong>Token Expiration</strong>: The CSRF token seems to expire quickly or is invalidated when used from a
            different context.
          </li>
          <li>
            <strong>Browser vs. Server</strong>: The authentication flow works differently when executed from a browser
            versus a server-side environment.
          </li>
        </ol>

        <h3>Production Implementation</h3>

        <p>For production, we recommend one of the following approaches:</p>

        <ol>
          <li>
            <strong>Client-Side Integration</strong>: Implement the API calls directly in the client-side code, which
            will naturally maintain the browser session.
          </li>
          <li>
            <strong>Server-Side with Cookie Forwarding</strong>: If using server-side API routes, ensure all cookies
            from the initial request are forwarded to subsequent requests.
          </li>
          <li>
            <strong>Direct Backend Integration</strong>: For the most reliable approach, integrate directly from your
            backend server to the API server, using proper session management.
          </li>
        </ol>

        <h3>Example Implementation</h3>

        <pre>
          <code>{`// Client-side implementation example
async function fetchPackages() {
  // Step 1: Get CSRF token
  const initialResponse = await fetch('https://Imieti.com.ng/V2/memberpackages', {
    method: 'GET',
    credentials: 'include'
  });
  
  const initialData = await initialResponse.json();
  const csrfToken = initialData.csrf_token;
  
  if (!csrfToken) {
    throw new Error('No CSRF token found in response');
  }
  
  // Step 2: Use CSRF token to get packages
  const packagesResponse = await fetch('https://Imieti.com.ng/V2/memberpackages', {
    method: 'GET',
    headers: {
      'X-CSRF-Token': csrfToken
    },
    credentials: 'include'
  });
  
  if (!packagesResponse.ok) {
    throw new Error(\`API request failed with status \${packagesResponse.status}\`);
  }
  
  return await packagesResponse.json();
}`}</code>
        </pre>

        <h3>Fallback Strategy</h3>

        <p>
          For development or in case of API unavailability, we've implemented a fallback strategy that returns mock data
          matching the structure of the real API response.
        </p>
      </div>
    </div>
  )
}
