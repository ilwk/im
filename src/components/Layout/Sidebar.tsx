import {
  ITreeMenu,
  useLogout,
  useMenu,
  useRouterContext,
} from '@pankod/refine-core';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { PersonIcon } from '@radix-ui/react-icons';

const renderMenu = (tree: ITreeMenu[], selectedKey: string) => {
  const { Link } = useRouterContext();
  return (
    <Tooltip.Provider delayDuration={0}>
      {tree.map((item) => {
        const { icon, label, route } = item;
        const isSelected = route === selectedKey;
        return (
          <Tooltip.Root key={route}>
            <Tooltip.Trigger asChild key={label}>
              <Link
                className={[
                  'transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-neutral-700 hover:text-neutral-100',
                  isSelected
                    ? 'bg-neutral-700 text-neutral-100'
                    : 'text-neutral-300',
                ].join(' ')}
                to={route}
              >
                {icon}
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-neutral-900 text-white rounded p-2 text-xs"
                side="right"
                sideOffset={10}
              >
                {label}
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        );
      })}
    </Tooltip.Provider>
  );
};

const UserDropdownMenu = () => {
  const { mutate } = useLogout();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none">
        <PersonIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          side="right"
          className="w-56 bg-neutral-800 text-white p-1 rounded-md shadow-lg ring-opacity-5 text-xs"
        >
          <DropdownMenu.Label className="px-2 py-1 text-gray-500 text-xs">
            状态
          </DropdownMenu.Label>
          <DropdownMenu.Group>
            <DropdownMenu.Item className="p-2 focus:outline-none focus:bg-neutral-700 rounded cursor-pointer">
              在线
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2 focus:outline-none focus:bg-neutral-700 rounded cursor-pointer">
              忙碌
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2 focus:outline-none focus:bg-neutral-700 rounded cursor-pointer">
              离线
            </DropdownMenu.Item>
            <DropdownMenu.Label className="px-2 py-1 text-gray-500 text-xs">
              设置
            </DropdownMenu.Label>
            <DropdownMenu.Item className="p-2 focus:outline-none focus:bg-neutral-700 rounded cursor-pointer">
              账号设置
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="p-2 focus:outline-none focus:bg-neutral-700 rounded cursor-pointer"
              onClick={() => mutate()}
            >
              退出登录
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const Sidebar = () => {
  const { menuItems, selectedKey } = useMenu();
  return (
    <aside className="flex  flex-col justify-between overflow-y-hidden p-2 border-r dark:border-neutral-700 bg-white dark:bg-neutral-800">
      <nav className="flex flex-col space-y-2">
        {renderMenu(menuItems, selectedKey)}
      </nav>
      <UserDropdownMenu />
    </aside>
  );
};
