import { supabase } from 'utility';

export const fetchMessages = (room: string) => {
  return supabase.from('messages').select('*').eq('room', room);
};

export const addMessage = async (data: {
  username: string;
  room: string;
  data: Record<string, any>;
}) => {
  const result = await supabase.from('messages').insert(data);
  console.log(result);
};
