import { KeywordEditForm } from 'components/Form/KeywordEditForm';
import { Button, Table } from 'components';
import * as Dialog from '@radix-ui/react-dialog';
import { createColumnHelper } from '@tanstack/react-table';

const data = [
  {
    id: '1',
    name: '111222',
    message: '123123',
    keyword: '555',
  },
  {
    id: '2',
    name: 'Jilasss',
    message: '123123',
    keyword: '123123',
  },
  {
    id: '3',
    name: 'Henr113',
    message: '1123123',
    keyword: '55asds',
  },
];

export const KeywordTable = () => {
  const columnsHelper = createColumnHelper<{
    id: string;
    name: string;
    message: string;
    keyword: string;
  }>();

  const columns = [
    columnsHelper.accessor('name', {
      header: '名称',
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('keyword', {
      header: '关键词',
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('message', {
      header: '回复内容',
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button onClick={() => {}}>新建</Button>
        </Dialog.Trigger>
        <Table data={data} columns={columns}></Table>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>新增规则</Dialog.Title>
            <Dialog.Description />
            <Dialog.Close />
            <KeywordEditForm></KeywordEditForm>
            <Button>保存</Button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default KeywordTable;
