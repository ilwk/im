import { LinkedForm } from 'components/Form/LinkedForm';
import { KeywordTable } from './keyword-page';
import * as Tabs from '@radix-ui/react-tabs';

export const ReplyList = () => {
  return (
    <section className="p-4">
      <Tabs.Root defaultValue="1">
        <Tabs.List className="p-1 space-x-2">
          <Tabs.Trigger value="1">关键词自动回复</Tabs.Trigger>
          <Tabs.Trigger value="2">首次打开自动回复</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">
          <KeywordTable></KeywordTable>
        </Tabs.Content>
        <Tabs.Content value="2">
          <LinkedForm></LinkedForm>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};
