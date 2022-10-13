import { useState } from 'react';
import { AccountSettingCard } from '~/components/Card/AccountSettingCard';

export const SettingPage = () => {
  const [value, setValue] = useState('user-setting');

  return (
    <>
      <AccountSettingCard />
    </>
  );
};
