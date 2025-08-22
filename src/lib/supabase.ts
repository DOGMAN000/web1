import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Application {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  college: string;
  transfer_year: string;
  linkedin?: string;
  github?: string;
  passion_answer: string;
  contribution_answer: string;
  challenge_answer: string;
  created_at?: string;
  updated_at?: string;
}

export interface PartnershipInquiry {
  id?: string;
  company_name: string;
  contact_name: string;
  title: string;
  email: string;
  partnership_type: string;
  message: string;
  created_at?: string;
}