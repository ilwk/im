import React, { ReactNode } from 'react';
import { Sidebar, Header } from 'components';

export const Layout: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex dark:bg-neutral-800 dark:text-neutral-100">
      <Sidebar />
      <section className="flex-1 h-screen overflow-hidden flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </section>
    </div>
  );
};

export const LayoutWrapper = Layout;
