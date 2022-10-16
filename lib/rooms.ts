import { supabase } from 'utility';

export const fetchRooms = () => {
  supabase.from('rooms').select().limit(20);
};

export const addRooms = (data = {}) => {
  supabase.from('rooms').insert(data);
};

export const deleteRooms = (id: string) => {
  supabase.from('rooms').delete().match({ id });
};
