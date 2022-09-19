import { useMenu, useNavigation } from '@pankod/refine-core'

const Sider = () => {
  const { menuItems } = useMenu()
  const { push } = useNavigation()

  return (
    <>
      <div className="relative bg-white dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-56 h-screen">
            <nav className="mt-10 px-6 ">
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                href="#"
              >
                <span className="mx-4 text-lg font-normal">客户消息</span>
                <span className="flex-grow text-right"></span>
              </a>
              <a
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <span className="mx-4 text-lg font-normal">自动回复</span>
                <span className="flex-grow text-right"></span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sider
