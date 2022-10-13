import React from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { HeaderTabs } from './HeaderTabs';

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();

  const shouldRenderHeader = user && (user.name || user.avatar);

  return shouldRenderHeader ? <HeaderTabs user={user} /> : null;
};
