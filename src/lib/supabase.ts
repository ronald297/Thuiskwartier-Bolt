import { createClient } from '@supabase/supabase-js';

declare global {
  interface Window {
    _ENV_?: {
      VITE_SUPABASE_URL?: string;
      VITE_SUPABASE_ANON_KEY?: string;
    };
  }
}

const runtimeEnv = window._ENV_ ?? import.meta.env;

export const supabaseUrl = runtimeEnv.VITE_SUPABASE_URL;
const supabaseAnonKey = runtimeEnv.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase runtime configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
