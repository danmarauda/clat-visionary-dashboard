
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

interface RequestBody {
  key: string;
}

serve(async (req) => {
  try {
    // Parse the request body
    const { key } = await req.json() as RequestBody;
    
    // Get the secret value from Supabase env
    const secretValue = Deno.env.get(key);
    
    if (!secretValue) {
      return new Response(
        JSON.stringify({ error: `Secret ${key} not found` }),
        { headers: { 'Content-Type': 'application/json' }, status: 404 }
      );
    }
    
    // Return the secret value
    return new Response(
      JSON.stringify({ value: secretValue }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    );
  }
})
