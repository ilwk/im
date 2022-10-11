import {
  createStyles,
  Navbar,
  Tooltip,
  UnstyledButton,
  Stack,
  UnstyledButtonProps,
} from '@mantine/core';
import { IconLogout, IconList } from '@tabler/icons';
import {
  ITreeMenu,
  useLogout,
  useMenu,
  useRouterContext,
} from '@pankod/refine-core';
import { ReactNode } from 'react';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background!,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps extends UnstyledButtonProps {
  icon: ReactNode;
  label?: string;
  active?: boolean;
  onClick?(): void;
  to?: string;
}

const NavbarLink = ({
  icon,
  label,
  active,
  onClick,
  ...props
}: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
        {...props}
      >
        {icon}
      </UnstyledButton>
    </Tooltip>
  );
};

const renderTreeMenu = (tree: ITreeMenu[], selectedKey: string) => {
  const { classes, cx } = useStyles();
  const { Link } = useRouterContext();
  return tree.map((item) => {
    const { icon, label, route } = item;
    const isSelected = route === selectedKey;
    const additionalLinkProps = { component: Link, to: route };
    return (
      <NavbarLink
        key={route}
        icon={icon ?? <IconList />}
        label={label}
        active={isSelected}
        className={cx(classes.link, {
          [classes.active]: isSelected,
        })}
        {...additionalLinkProps}
      ></NavbarLink>
    );
  });
};

export default () => {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();

  const links = renderTreeMenu(menuItems, selectedKey);
  const { mutate } = useLogout();
  return (
    <Navbar
      width={{ base: 82 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background,
      })}
    >
      <Navbar.Section grow>
        <Stack justify="center" spacing={'xs'}>
          {links}
        </Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Stack justify="center">
          <NavbarLink
            onClick={() => mutate()}
            icon={<IconLogout />}
            label={'logout'}
          ></NavbarLink>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
