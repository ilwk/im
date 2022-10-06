import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider from '@pankod/refine-simple-rest';
import { authProvider } from './auth-provider';
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

const App = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      resources={[
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
      ]}
      authProvider={authProvider}
      LoginPage={LoginPage}
      Layout={Layout}
    />
  );
};

export default App;
