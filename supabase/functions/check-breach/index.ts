import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

interface BreachResponse {
  email: string;
  found: boolean;
  count: number;
  breaches: Array<{
    name: string;
    date: string;
    types: string[];
    notes: string;
  }>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Call Have I Been Pwned API
    const response = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, {
      headers: {
        'User-Agent': 'DataBreached-Checker'
      }
    })

    let breachData: BreachResponse

    if (response.status === 404) {
      // No breaches found
      breachData = {
        email,
        found: false,
        count: 0,
        breaches: []
      }
    } else if (response.status === 200) {
      // Breaches found
      const rawBreaches = await response.json()
      
      const breaches = rawBreaches.map((breach: any) => ({
        name: breach.Name,
        date: breach.BreachDate,
        types: breach.DataClasses || [],
        notes: generateSecurityAdvice(breach.DataClasses || [])
      }))

      breachData = {
        email,
        found: true,
        count: breaches.length,
        breaches
      }
    } else if (response.status === 429) {
      // Rate limited
      return new Response(
        JSON.stringify({ error: 'Rate limited. Please try again later.' }),
        { 
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      throw new Error(`API returned status ${response.status}`)
    }

    return new Response(
      JSON.stringify(breachData),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error checking breaches:', error)
    
    return new Response(
      JSON.stringify({ error: 'Failed to check breaches' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

function generateSecurityAdvice(dataClasses: string[]): string {
  if (dataClasses.includes('Passwords')) {
    return 'Change password immediately + enable MFA'
  } else if (dataClasses.includes('Email addresses') && dataClasses.includes('Phone numbers')) {
    return 'Beware targeted phishing + update SMS recovery'
  } else if (dataClasses.includes('Email addresses')) {
    return 'Monitor for phishing attempts'
  } else {
    return 'Review account security settings'
  }
}