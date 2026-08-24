import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vdnnpadkdgxzmwpiwill.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbm5wYWRrZGd4em13cGl3aWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NDI2NTgsImV4cCI6MjEwMzExODY1OH0.lYIEcF1DhLyKy3gLWPr7mlgw0LiWDpItD0bZlJt_zb8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
