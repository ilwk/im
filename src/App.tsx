import { Refine, ResourceProps } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import { authProvider } from '~/authProvider';
import { Layout } from '~/components/Layout/Layout';
import {
  ChannelList,
  ReplyList,
  LoginPage,
  DashboardPage,
  SettingPage,
  AccountList,
  ErrorComponent,
} from '~/pages';
import {
  DashboardIcon,
  PersonIcon,
  ReaderIcon,
  GearIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { dataProvider } from '@pankod/refine-appwrite';
import { appwriteClient } from '~/utility';
import { ClientPage } from '~/pages';

const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: DashboardPage,
    icon: <DashboardIcon />,
  },
  {
    name: 'messages',
    list: ChannelList,
    icon: <ChatBubbleIcon />,
  },
  {
    name: 'auto-reply',
    list: ReplyList,
    icon: <ReaderIcon />,
  },
  {
    name: 'accounts',
    list: AccountList,
    icon: <PersonIcon />,
  },
  {
    name: 'setting',
    list: SettingPage,
    icon: <GearIcon />,
  },
];

const App = () => {
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            element: <ClientPage />,
            path: 'client',
          },
        ],
      }}
      dataProvider={dataProvider(appwriteClient, {
        databaseId: 'default',
      })}
      options={{ liveMode: 'auto' }}
      resources={resources}
      authProvider={authProvider}
      LoginPage={LoginPage}
      Layout={Layout}
      catchAll={<ErrorComponent />}
    />
  );
};

export default App;
