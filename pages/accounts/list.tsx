import { useEffect, useState } from 'react';
import { Button } from 'components';
import { CustomersTable } from 'components/Table/CustomersTable';
import { team } from 'utility';

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
      <Button>新增</Button>
      <CustomersTable data={data}></CustomersTable>
    </>
  );
};

export default AccountList;
