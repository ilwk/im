import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
} from '@mantine/core';
import {
  IconUserPlus,
  IconMessage,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconMessage2,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

const icons: any = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
  message: IconMessage,
  message2: IconMessage2,
};

interface StatsGridProps {
  data: {
    title: string;
    icon: keyof typeof icons;
    value: string;
    diff: number;
  }[];
}

const data = [
  {
    title: '总访客数',
    icon: 'user',
    value: '13',
  },
  {
    title: '总消息数',
    icon: 'message',
    value: '50',
  },
  {
    title: '会话数量',
    icon: 'message2',
    value: '2',
  },
];

export const DashboardPage = () => {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>

        <Text size="xs" color="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
  );
};
