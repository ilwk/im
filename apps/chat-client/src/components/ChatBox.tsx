import Chat, { Bubble, useMessages, MessageProps } from '@chatui/core'
import '@chatui/core/dist/index.css'

const ChatBox = () => {
  const { messages, appendMsg, setTyping } = useMessages([])

  const handleSend = (type: string, val: string) => {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      })

      setTyping(true)

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        })
      }, 1000)
    }
  }

  const renderMessageContent = (msg: MessageProps) => {
    const { content } = msg
    return <Bubble content={content.text} />
  }

  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  )
}

export default ChatBox
