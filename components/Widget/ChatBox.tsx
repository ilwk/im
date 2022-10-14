import Chat, {
  Bubble,
  useMessages,
  MessageProps,
} from '@chatui/core';

import '@chatui/core/dist/index.css';

const inititalMessages: Parameters<typeof useMessages>[0] = [
  {
    type: 'text',
    content: { text: '您好，请问有什么可以帮您？' },
  },
];

const ChatBox = () => {
  const { messages, appendMsg } = useMessages(inititalMessages);

  const handleSend = (type: string, val: string) => {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });
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
