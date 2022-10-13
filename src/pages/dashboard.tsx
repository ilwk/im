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
import { useEffect, useState } from 'react';
import { database } from '~/utility';
import { APPWRITE_DATABASE } from '~/utility/config';

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

export const DashboardPage = () => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    database
      .listDocuments(APPWRITE_DATABASE, 'stats')
      .then(({ documents }) => {
        setData(documents);
      });
  }, []);
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <div
        className="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200"
        key={stat.label}
      >
        <div className="flex items-center space-x-4">
          {Icon && (
            <Icon
              className={[
                classes.icon,
                'rounded-full bg-blue-500 p-3 text-white',
              ].join(' ')}
              size={48}
              stroke={1.5}
            />
          )}
          <div>
            <h3 className="text-2xl font-medium text-gray-800">
              {stat.value}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="p-4 grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {stats}
    </section>
  );
};
