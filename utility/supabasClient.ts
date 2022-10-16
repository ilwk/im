import { createClient } from '@supabase/supabase-js';
import { Database } from 'db.types';

export const supabase = createClient<Database>(
  String(process.env.NEXT_PUBLIC_SUPABASE_URL),
  String(process.env.NEXT_PUBLIC_SUPABASE_KEY)
);
