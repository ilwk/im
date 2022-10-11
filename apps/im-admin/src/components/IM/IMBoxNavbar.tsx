import { Avatar } from '@mantine/core';

export const IMBoxNavbar = () => (
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
