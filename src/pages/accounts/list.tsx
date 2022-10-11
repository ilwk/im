import { Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { CustomersTable } from '~/components/Table/CustomersTable';
import { team } from '~/utility';

type CustomerData = {
  username: string;
  name: string;
  role: string;
  avatar: string;
  created_time: string;
};

export const AccountList = () => {
  const [data, setData] = useState<CustomerData[]>([]);
  useEffect(() => {
    team.listMemberships('admin').then(({ memberships }) => {
      const members = memberships.map((member) => {
        return {
          username: member.userName,
          name: member.userEmail,
          role: member.roles[0],
          avatar: '',
          created_time: member.$createdAt,
        };
      });
      setData(members);
    });
  }, []);
  return (
    <>
      <Group>
        <Button>新增</Button>
      </Group>
      <CustomersTable data={data}></CustomersTable>
    </>
  );
};
