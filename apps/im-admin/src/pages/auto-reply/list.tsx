import { Tabs } from '@mantine/core';
import { LinkedForm } from '~/components/Form/LinkedForm';
import { KeywordTable } from './keyword-page';

export const ReplyList = () => {
  return (
    <Tabs defaultValue={'keyword'}>
      <Tabs.List mb={'md'}>
        <Tabs.Tab value="keyword">关键词自动回复</Tabs.Tab>
        <Tabs.Tab value="first-connect">首次打开自动回复</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="keyword">
        <KeywordTable></KeywordTable>
      </Tabs.Panel>
      <Tabs.Panel value="first-connect">
        <LinkedForm></LinkedForm>
      </Tabs.Panel>
    </Tabs>
  );
};
