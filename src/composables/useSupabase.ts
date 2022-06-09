import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseKey = process.env.SUPABASE_PUBLIC_KEY

const supabase = createClient(
  'https://uwrqrpkjndpqvexiyojs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM',
)

export default function useSupabase() {
  return { supabase }
}
