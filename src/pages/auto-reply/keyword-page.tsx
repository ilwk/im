import { useState } from 'react';
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  Tabs,
  Box,
  Button,
  Input,
  Modal,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { KeywordEditForm } from '~/components/Form/KeywordEditForm';
import { useDisclosure } from '@pankod/refine-mantine';
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
  const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
          : theme.colors[theme.primaryColor][0],
    },
  }));

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length
        ? []
        : data.map((item) => item.id)
    );

  const [opened, { open, close }] = useDisclosure(false);

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr
        key={item.id}
        className={cx({ [classes.rowSelected]: selected })}
      >
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.keyword}</td>
        <td>{item.message}</td>
      </tr>
    );
  });
  return (
    <ScrollArea>
      <Group>
        <Button
          onClick={() => {
            open();
          }}
        >
          新建
        </Button>
        <Input
          icon={<IconSearch />}
          placeholder="请输入搜索关键词"
        ></Input>
      </Group>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 &&
                  selection.length !== data.length
                }
                transitionDuration={0}
              />
            </th>
            <th>规则名称</th>
            <th>关键词</th>
            <th>回复内容</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Modal title="新增规则" opened={opened} onClose={close}>
        <KeywordEditForm></KeywordEditForm>
        <Group position="right" mt={'md'}>
          <Button>保存</Button>
        </Group>
      </Modal>
    </ScrollArea>
  );
};
