import { createClient } from '@supabase/supabase-js';

// Yeh values .env file se aate hain (root folder mein .env banao, .env.example dekho).
// Agar .env set nahi hai, app phir bhi chalega (graceful fallback) — sirf
// Community page ka data persist nahi hoga, local state mein hi rahega.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
