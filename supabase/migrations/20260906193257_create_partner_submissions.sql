/*
# Create partner_submissions table

1. New Tables
   - `partner_submissions`
     - `id` (uuid, primary key)
     - `name` (text, not null)
     - `company` (text, not null)
     - `email` (text, not null)
     - `phone` (text, not null)
     - `type` (text, not null) — type of professional (aannemer, interieuradviseur, etc.)
     - `message` (text, nullable) — optional description
     - `created_at` (timestamptz, default now())

2. Security
   - Enable RLS on `partner_submissions`.
   - Allow anon + authenticated INSERT (public form, no login required).
   - No SELECT/UPDATE/DELETE for public roles (admin-only via dashboard).
*/

CREATE TABLE IF NOT EXISTS partner_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partner_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_partner_submissions" ON partner_submissions;
CREATE POLICY "anon_insert_partner_submissions" ON partner_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
