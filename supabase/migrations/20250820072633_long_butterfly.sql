/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text, unique)
      - `college` (text)
      - `transfer_year` (text)
      - `linkedin` (text, optional)
      - `github` (text, optional)
      - `passion_answer` (text)
      - `contribution_answer` (text)
      - `challenge_answer` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `applications` table
    - Add policy for public insert (applications)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  college text NOT NULL,
  transfer_year text NOT NULL,
  linkedin text,
  github text,
  passion_answer text NOT NULL,
  contribution_answer text NOT NULL,
  challenge_answer text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form submission)
CREATE POLICY "Anyone can submit applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read their own applications
CREATE POLICY "Users can read own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text OR auth.email() = email);