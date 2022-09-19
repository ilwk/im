import Chat, { Bubble, useMessages } from '@chatui/core'
// 引入样式
import '@chatui/core/dist/index.css'

type Props = {}

const initialMessages = [
  {
    type: 'text',
    content: { text: '测试测试测试' },
    user: {},
  },
]

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
]

export const ChannelList = (props: Props) => {
  // 消息列表
  const { messages, appendMsg, setTyping } = useMessages(initialMessages)

  // 发送回调
  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      })

      setTyping(true)

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
        })
      }, 1000)
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item) {
    handleSend('text', item.name)
  }

  function renderMessageContent(msg) {
    const { type, content } = msg

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return <Bubble content={content.text} />
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen">
      <div>
        <div className="flex flex-row h-full">
          <nav className="bg-white dark:bg-gray-800 w-20 h-screen justify-between flex flex-col">
            <div className="mt-10 mb-10">
              <a href="#">
                <div className="rounded-full w-10 h-10 mb-3 mx-auto bg-gray-500 flex justify-center items-center ring ring-green-500">
                  1
                </div>
                <div className="rounded-full w-10 h-10 mb-3 mx-auto bg-gray-500 flex justify-center items-center ring ring-blue-500">
                  2
                </div>
              </a>
            </div>
            <div className="mb-4">
              <a href="#">
                <span>
                  <svg
                    className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
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
  )
}
