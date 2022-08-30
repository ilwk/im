import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-react-router-v6'
import dataProvider from '@pankod/refine-simple-rest'
import { Layout } from './components/Layout'
import { PostList } from './pages'

const App = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      resources={[{ name: 'posts', list: PostList }]}
      Layout={Layout}
    />
  )
}

export default App
