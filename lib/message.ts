import { Database } from 'db.types';
import { supabase } from 'utility';

export const fetchMessages = (room: string) => {
  return supabase.from('messages').select('*').eq('room', room);
};

export const addMessage = async (
  data: Database['public']['Tables']['messages']['Insert']
) => {
  const result = await supabase.from('messages').insert(data);
};
