/*
  # Create partnership inquiries table

  1. New Tables
    - `partnership_inquiries`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_name` (text)
      - `title` (text)
      - `email` (text)
      - `partnership_type` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `partnership_inquiries` table
    - Add policy for public insert (partnership form)
*/

CREATE TABLE IF NOT EXISTS partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  title text NOT NULL,
  email text NOT NULL,
  partnership_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit partnership inquiries
CREATE POLICY "Anyone can submit partnership inquiries"
  ON partnership_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);