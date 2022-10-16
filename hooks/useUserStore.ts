import { MessageProps, useMessages } from '@chatui/core';
import { useEffect, useState } from 'react';
import { supabase } from 'utility';
import { get } from 'lodash-es';
import { addMessage } from 'lib';

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

  setMessage(
    data?.map((item) => ({
      ...item,
      _id: item.id,
      createdAt: item.created_at,
      position: item.username === getUserID() ? 'right' : 'left',
    })) || []
  );
};

export const useUserStore = () => {
  const { messages, resetList, appendMsg } = useMessages();
  const [room, setRoom] = useState('');

  const handleNewMessage = (newMessage: any) => {
    appendMsg(newMessage);
  };

  const sendMsg = (message: MessageProps) => {
    appendMsg(message);
    addMessage({
      username: getUserID(),
      room: getUserID(),
      content: message.content,
      type: message.type,
    });
  };
  useEffect(() => {
    setRoom(getUserID());
    fetchUserMessage(resetList);
    supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          handleNewMessage(payload.new);
        }
      )
      .subscribe();
  }, []);

  return { messages, room, sendMsg };
};
