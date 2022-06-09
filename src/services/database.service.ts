import { createClient } from '@supabase/supabase-js'

export default class DatabaseService {
  database: any

  constructor() {
    this.database = createClient(
      'https://uwrqrpkjndpqvexiyojs.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM',
    )
  }

  getInstance() {
    return this.database
  }
}
