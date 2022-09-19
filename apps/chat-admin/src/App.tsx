import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-react-router-v6'
import dataProvider from '@pankod/refine-simple-rest'
import { authProvider } from './auth-provider'
import { Layout } from './components/Layout'
import { ChannelList, PostList, ReplyList } from './pages'
import { LoginPage } from './pages/LoginPage'

const App = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      resources={[
        { name: 'channels', list: ChannelList },
        {
          name: 'reply',
          list: ReplyList,
        },
      ]}
      authProvider={authProvider}
      LoginPage={LoginPage}
      Layout={Layout}
    />
  )
}

export default App
