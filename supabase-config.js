// supabase-config.js
// Replace dengan credentials Anda dari Step 5 Phase 1
const SUPABASE_URL = 'https://oksizghhxhbeujtsodou.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc2l6Z2hoeGhiZXVqdHNvZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3Nzc0OTYsImV4cCI6MjA4MTM1MzQ5Nn0.cPUrc8c1WlUwvnJWOYQAYfUCnugNhOrXQx482Zkbx_Y'; 

// Initialize Supabase client
const supabase = window.supabase.createClient('https://oksizghhxhbeujtsodou.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc2l6Z2hoeGhiZXVqdHNvZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3Nzc0OTYsImV4cCI6MjA4MTM1MzQ5Nn0.cPUrc8c1WlUwvnJWOYQAYfUCnugNhOrXQx482Zkbx_Y');