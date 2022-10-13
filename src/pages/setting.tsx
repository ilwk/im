import { SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { AccountSettingCard } from '~/components/Card/AccountSettingCard';

export const SettingPage = () => {
  const [value, setValue] = useState('user-setting');

  return (
    <>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          { label: '系统设置', value: 'system-setting' },
          { label: '用户设置', value: 'user-setting' },
          { label: '账号设置', value: 'account-setting' },
        ]}
      />
      <AccountSettingCard />
    </>
  );
};
