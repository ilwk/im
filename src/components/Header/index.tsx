import React from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import {
  Avatar,
  Group,
  Header as MantineHeader,
  Title as MantineTitle,
} from '@mantine/core';
import { HeaderTabsColored } from './HeaderTabsColored';

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();

  const shouldRenderHeader = user && (user.name || user.avatar);

  return shouldRenderHeader ? (
    <HeaderTabsColored user={user} />
  ) : null;
};
