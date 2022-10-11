import { Refine, ResourceProps } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import { authProvider } from '~/authProvider';
import { Layout } from '~/components/Layout';
import {
  ChannelList,
  ReplyList,
  LoginPage,
  DashboardPage,
  SettingPage,
  AccountList,
  ReadyPage,
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
import { Global, MantineProvider } from '@mantine/core';

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
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Global styles={{ body: { WebkitFontSmoothing: 'auto' } }} />
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider(appwriteClient, {
          databaseId: 'default',
        })}
        options={{ liveMode: 'auto' }}
        resources={resources}
        authProvider={authProvider}
        ReadyPage={ReadyPage}
        LoginPage={LoginPage}
        Layout={Layout}
        catchAll={<ErrorComponent />}
      />
    </MantineProvider>
  );
};

export default App;
