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
  IconMessageCircle2,
  IconRobot,
  IconDashboard,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import { dataProvider } from '@pankod/refine-appwrite';
import { appwriteClient } from '~/utility';
import { ClientPage } from '~/pages';

const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: DashboardPage,
    icon: <IconDashboard />,
  },
  {
    name: 'messages',
    list: ChannelList,
    icon: <IconMessageCircle2 />,
  },
  {
    name: 'auto-reply',
    list: ReplyList,
    icon: <IconRobot />,
  },
  {
    name: 'accounts',
    list: AccountList,
    icon: <IconUser />,
  },
  {
    name: 'setting',
    list: SettingPage,
    icon: <IconSettings />,
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
