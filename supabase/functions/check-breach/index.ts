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
    console.log('Check-breach function called');
    
    const { email } = await req.json()
    console.log(`Received email: ${email}`);

    if (!email) {
      console.log('No email provided');
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log(`Checking email: ${email}`);

    // Get API key from environment
    const apiKey = Deno.env.get('HIBP_API_KEY');
    console.log(`API key available: ${apiKey ? 'Yes' : 'No'}`);
    
    if (!apiKey) {
      console.error('HIBP API key not configured');
      return new Response(
        JSON.stringify({ error: 'API configuration error' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Call Have I Been Pwned API with proper headers
    console.log('Making HIBP API call...');
    const response = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, {
      headers: {
        'User-Agent': 'DataBreached-Checker',
        'hibp-api-key': apiKey
      }
    });

    console.log(`HIBP API response status: ${response.status}`);

    let breachData: BreachResponse

    if (response.status === 404) {
      // No breaches found
      console.log('No breaches found for email');
      breachData = {
        email,
        found: false,
        count: 0,
        breaches: []
      }
    } else if (response.status === 200) {
      // Breaches found
      console.log('Breaches found, parsing response');
      const rawBreaches = await response.json()
      console.log(`Found ${rawBreaches.length} breaches`);
      
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
      console.log('Rate limited by HIBP API');
      return new Response(
        JSON.stringify({ error: 'Rate limited. Please try again later.' }),
        { 
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      console.error(`HIBP API returned unexpected status: ${response.status}`);
      const errorText = await response.text();
      console.error(`HIBP API error response: ${errorText}`);
      throw new Error(`API returned status ${response.status}: ${errorText}`)
    }

    console.log('Returning breach data:', breachData);
    return new Response(
      JSON.stringify(breachData),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in check-breach function:', error)
    
    return new Response(
      JSON.stringify({ error: `Failed to check breaches: ${error.message}` }),
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