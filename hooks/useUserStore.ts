import { MessageProps } from '@chatui/core';
import { useEffect, useState } from 'react';
import { supabase } from 'utility';
import { get } from 'lodash-es';

export const getUserID = () => {
  const cache_id = localStorage.getItem('__UID__');
  if (!cache_id) {
    const uuid = (Math.random() + 1).toString(36).substring(7);
    localStorage.setItem('__UID__', uuid);
    return uuid;
  }
  return cache_id;
};

const fetchUserMessage = async (setMessage: Function) => {
  const { data } = await supabase
    .from('messages')
    .select('*')
    .eq('room', getUserID());

  setMessage(data?.map((item) => item.data) || []);
};

export const useUserStore = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [room, setRoom] = useState('');

  const handleNewMessage = (newMessage: any) => {
    setMessages((messages) => [...messages, newMessage]);
  };
  useEffect(() => {
    setRoom(getUserID());
    fetchUserMessage(setMessages);
    supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          handleNewMessage(get(payload, 'new.data'));
        }
      )
      .subscribe();
  }, []);

  return { messages, room };
};
