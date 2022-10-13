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
        <div className="w-12 h-12 rounded-md bg-slate-500 inline-block"></div>
      </div>
      <div></div>
    </nav>
  );
};
