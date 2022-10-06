import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons';

interface UsersTableProps {
  data: {
    avatar: string;
    name: string;
    job: string;
    username: string;
    created_time: string;
  }[];
}

const jobColors: Record<string, string> = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

export const CustomersTable = ({ data }: UsersTableProps) => {
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.job.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.job}
        </Badge>
      </td>
      <td>
        <Anchor<'a'>
          size="sm"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          {item.username}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.created_time}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>账户姓名</th>
            <th>权限</th>
            <th>账号</th>
            <th>创建时间</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
