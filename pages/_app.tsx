import 'styles/globals.css';

import { Refine, ResourceProps } from '@pankod/refine-core';
import type { AppProps } from 'next/app';
import { authProvider } from 'authProvider';
import { Layout } from 'components';
import {
  DashboardIcon,
  PersonIcon,
  ReaderIcon,
  GearIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { ChannelList } from 'pages/messages';
import { DashboardPage } from './dashboard';
import { ReplyList } from './auto-reply';
import { AccountList } from './accounts';
import { SettingPage } from './setting';
import routerProvider from '@pankod/refine-nextjs-router';
import { dataProvider } from '@pankod/refine-appwrite';
import { appwriteClient } from 'utility';
import { LoginPage } from './login';
import { ErrorComponent } from './error';

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(appwriteClient, {
        databaseId: 'default',
      })}
      options={{ liveMode: 'auto' }}
      resources={resources}
      authProvider={authProvider}
      LoginPage={LoginPage}
      Layout={Layout}
      catchAll={<ErrorComponent />}
    >
      <Component {...pageProps} />
    </Refine>
  );
};

export default MyApp;
