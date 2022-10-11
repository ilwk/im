import { TextInput, Textarea, Group, Select } from '@mantine/core';
import { useForm } from '@mantine/form';

export const KeywordEditForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      keyword_rule: '',
      keyword_value: '',
      message_type: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="规则名称"
        placeholder="请输入规则名称"
        name="name"
        variant="filled"
        {...form.getInputProps('name')}
      />
      <Group mt="xl">
        <Select
          label="关键词"
          data={[
            {
              label: '完全匹配',
              value: '1',
            },
            {
              label: '包含',
              value: '2',
            },
            {
              label: '正则',
              value: '3',
            },
          ]}
          placeholder=""
          name="rule"
          variant="filled"
          {...form.getInputProps('keyword_rule')}
        />
        <TextInput
          label=" "
          placeholder="请输入关键字"
          name="keyword"
          variant="filled"
          width={200}
          {...form.getInputProps('keyword_value')}
        />
      </Group>

      <Textarea
        mt="md"
        label="回复内容"
        placeholder="请输入回复内容"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />
    </form>
  );
};
