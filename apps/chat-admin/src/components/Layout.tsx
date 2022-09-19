import { LayoutProps } from '@pankod/refine-core'
import Sider from './Sider'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sider></Sider>
      <div className="bg-white flex-1">{children}</div>
    </div>
  )
}
