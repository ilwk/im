import { Refine, ResourceProps } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import { authProvider } from './authProvider';
import { Layout } from './components/Layout';
import {
  ChannelList,
  ReplyList,
  LoginPage,
  DashboardPage,
  SettingPage,
  AccountList,
} from './pages';
import {
  IconMessageCircle2,
  IconRobot,
  IconDashboard,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import { dataProvider, liveProvider } from '@pankod/refine-appwrite';
import { appwriteClient } from './utility';
import {
  ErrorComponent,
  notificationProvider,
  ReadyPage,
} from '@pankod/refine-mantine';

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
      routerProvider={routerProvider}
      dataProvider={dataProvider(appwriteClient, {
        databaseId: '63400fa83fcc4395182f',
      })}
      liveProvider={liveProvider(appwriteClient, {
        databaseId: '63400fa83fcc4395182f',
      })}
      options={{ liveMode: 'auto' }}
      resources={resources}
      authProvider={authProvider}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      LoginPage={LoginPage}
      Layout={Layout}
      catchAll={<ErrorComponent />}
    />
  );
};

export default App;
