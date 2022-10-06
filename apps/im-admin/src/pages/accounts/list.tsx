import { Button, Group } from '@pankod/refine-mantine';
import { CustomersTable } from '~/components/Table/CustomersTable';

export const AccountList = () => {
  const data = [
    {
      avatar: '',
      name: '测试客服1',
      job: '客服',
      username: 'kefu001',
      created_time: '2022-10-1 12:09',
    },
  ];
  return (
    <>
      <Group>
        <Button>新增</Button>
      </Group>
      <CustomersTable data={data}></CustomersTable>
    </>
  );
};
