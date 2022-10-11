import { useState } from 'react';
import {
  createStyles,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Indicator,
} from '@mantine/core';
import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
  IconPoint,
  IconBrandMessenger,
} from '@tabler/icons';
import { Header } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
    borderBottom: `1px solid ${
      theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background
    }`,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background!,
        0.1
      ),
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background!,
      0.1
    ),
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
}

export function HeaderTabsColored({ user }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Header height={64} fixed className={classes.header}>
      <Group position="apart">
        <Group>
          <IconBrandMessenger className="text-green-300" size={30} />
          <Text color={'white'}>IM客服后台管理系统</Text>
        </Group>

        <Group spacing={'xs'}>
          <Indicator color={'green'}>
            <Avatar src={user.image} alt={user.name} size={32} />
          </Indicator>
          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group>
                  <Text
                    weight={500}
                    size="sm"
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>状态</Menu.Label>
              <Menu.Item icon={<IconPoint color="#22c55e" />}>
                在线
              </Menu.Item>
              <Menu.Item icon={<IconPoint color="#eab308" />}>
                忙碌
              </Menu.Item>
              <Menu.Item icon={<IconPoint color="#6b7280" />}>
                离线
              </Menu.Item>

              <Menu.Label>设置</Menu.Label>
              <Menu.Item
                icon={<IconSettings size={14} stroke={1.5} />}
              >
                账号设置
              </Menu.Item>
              <Menu.Item
                icon={<IconSwitchHorizontal size={14} stroke={1.5} />}
              >
                切换用户
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
                退出登录
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Header>
  );
}
