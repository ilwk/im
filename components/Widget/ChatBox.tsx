import Chat, {
  Bubble,
  useMessages,
  MessageProps,
} from '@chatui/core';

import '@chatui/core/dist/index.css';
import { fetchMessages } from 'lib';
import { useEffect, useState } from 'react';
import { getUserID as getRoomID, useUserStore } from 'hooks';

const useMessage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [room, setRoom] = useState('');

  useEffect(() => {
    const room_id = getRoomID();
    const getMessages = async () => {
      const { data } = await fetchMessages(room_id);
      setMessages(data || []);
    };
    getMessages();
    setRoom(getRoomID());
  }, []);

  return { data: messages.map((item) => item.data), room };
};

const ChatBox = () => {
  const { room, messages, sendMsg } = useUserStore();

  const handleSend = (type: string, val: string) => {
    if (type === 'text' && val.trim()) {
      const data: any = {
        type: 'text',
        content: { text: val },
        position: 'right',
      };

      sendMsg(data);
    }
  };

  const renderMessageContent = (msg: MessageProps) => {
    const { content } = msg;
    return <Bubble content={content.text} />;
  };

  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};

export default ChatBox;
