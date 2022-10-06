import React from 'react';
import { useRouterContext, TitleProps } from '@pankod/refine-core';
import { Center } from '@mantine/core';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Link to="/">
      <Center p="xs">
        {collapsed ? (
          <img src="/logo-collapsed.svg" alt="Refine" />
        ) : (
          <img src="/logo.svg" alt="Refine" width="140px" />
        )}
      </Center>
    </Link>
  );
};
