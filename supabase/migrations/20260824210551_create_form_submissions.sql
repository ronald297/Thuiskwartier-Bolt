/*
# Create form submission tables

1. New Tables
  - `contact_submissions`
    - `id` (uuid, primary key)
    - `name` (text, not null) - name of the person submitting
    - `email` (text, not null) - email address
    - `phone` (text, not null) - phone number
    - `message` (text, not null) - the message content
    - `created_at` (timestamptz) - when the submission was made
  - `service_submissions`
    - `id` (uuid, primary key)
    - `name` (text, not null) - name of the person submitting
    - `address` (text, not null) - address
    - `email` (text, not null) - email address
    - `phone` (text, not null) - phone number
    - `order_number` (text) - optional order/project number
    - `category` (text, not null) - product category
    - `description` (text, not null) - description of the service request
    - `created_at` (timestamptz) - when the submission was made

2. Security
  - RLS enabled on both tables.
  - Anon + authenticated can INSERT (public forms, no login required).
  - No SELECT/UPDATE/DELETE for anon — submissions are only readable via the Supabase dashboard.

3. Notes
  - These are public-facing forms with no user login, so only INSERT is allowed.
  - Staff will review submissions through the Supabase dashboard or email notifications.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS service_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  order_number text,
  category text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_service" ON service_submissions;
CREATE POLICY "anon_insert_service" ON service_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);