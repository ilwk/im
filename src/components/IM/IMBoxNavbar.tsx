import { Avatar } from '@mantine/core';
import { useEffect } from 'react';
import { appwriteClient } from '~/utility';

export const IMBoxNavbar = () => {
  useEffect(() => {
    appwriteClient.subscribe(
      'databases.default.collections.rooms',
      (res) => {
        console.log(res, 'res ');
      }
    );
  }, []);
  return (
    <nav className="bg-white dark:bg-gray-800 justify-between flex flex-col p-4">
      <div>
        <Avatar
          className="cursor-pointer"
          src={null}
          alt="no image here"
        />
      </div>
      <div></div>
    </nav>
  );
};
