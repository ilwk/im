import { createColumnHelper } from '@tanstack/react-table';
import { Table } from './Table';

interface Props {
  data: DataProps[];
}

type DataProps = {
  avatar: string;
  name: string;
  role: string;
  username: string;
  created_time: string;
};

export const CustomersTable: React.FC<Props> = ({ data }) => {
  const columnsHelper = createColumnHelper<DataProps>();
  const columns = [
    columnsHelper.accessor('name', {
      header: '账号',
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('role', {
      header: '权限',
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('username', {
      header: '用户名',
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('created_time', {
      header: '创建时间',
      cell: (info) => info.getValue(),
    }),
  ];

  return <Table data={data} columns={columns}></Table>;
};
