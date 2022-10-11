import Chat, { Bubble, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import { IMBoxNavbar } from './IMBoxNavbar';

type Props = {};

const initialMessages = [
  {
    type: 'text',
    content: { text: '测试测试测试' },
    user: {},
  },
];

// 默认快捷短语，可选
const defaultQuickReplies = [
  {
    name: '短语1',
    isNew: true,
  },
  {
    name: '短语2',
    isHighlight: true,
  },
  {
    name: '短语3',
  },
];

export const IMBox = (props: Props) => {
  // 消息列表
  const { messages, appendMsg, setTyping } =
    useMessages(initialMessages);

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: {
            text: '亲，您遇到什么问题啦？请简要描述您的问题~',
          },
        });
      }, 1000);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item: Record<string, any>) {
    handleSend('text', item.name);
  }

  function renderMessageContent(msg: Record<string, any>) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return <Bubble content={content.text} />;
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex h-full">
      <IMBoxNavbar />
      <div className="flex-1">
        <Chat
          navbar={{ title: '客户1' }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          quickReplies={defaultQuickReplies}
          onQuickReplyClick={handleQuickReplyClick}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};
