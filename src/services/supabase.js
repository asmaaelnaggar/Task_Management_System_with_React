
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = "https://mrmxcqztwicxoddzyqdb.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybXhjcXp0d2ljeG9kZHp5cWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMzU4MzYsImV4cCI6MjA2MTcxMTgzNn0.8lI-YtPeScVK9bX9Ry9HwWshRHA90lxvnoP2824Mzno"
// const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mrmxcqztwicxoddzyqdb.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybXhjcXp0d2ljeG9kZHp5cWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMzU4MzYsImV4cCI6MjA2MTcxMTgzNn0.8lI-YtPeScVK9bX9Ry9HwWshRHA90lxvnoP2824Mzno"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase