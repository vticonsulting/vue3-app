import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseSecretKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(
  'https://uwrqrpkjndpqvexiyojs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM',
)
