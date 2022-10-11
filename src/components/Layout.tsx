import React, { useState } from 'react';
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import Navbar from './Navbar';
import { Header } from './Header';
import { LayoutProps } from '@pankod/refine-core';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(
      value || (colorScheme === 'dark' ? 'light' : 'dark')
    );
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppShell navbar={<Navbar />} header={<Header />}>
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
