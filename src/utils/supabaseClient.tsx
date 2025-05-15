import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://zurvnvsciywzcjadrlte.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cnZudnNjaXl3emNqYWRybHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNDU2ODMsImV4cCI6MjA2MjkyMTY4M30.OkxOe0Lwvk5Psmk4zabruGioNBeIKfpmTNmAeilK4F8"


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
