import { KeywordEditForm } from '~/components/Form/KeywordEditForm';
import { Button } from '~/components';
import * as Dialog from '@radix-ui/react-dialog';

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
  const rows = data.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.keyword}</td>
        <td>{item.message}</td>
      </tr>
    );
  });
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            onClick={() => {
              open();
            }}
          >
            新建
          </Button>
        </Dialog.Trigger>
        <table>
          <thead>
            <tr>
              <th>规则名称</th>
              <th>关键词</th>
              <th>回复内容</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>

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
