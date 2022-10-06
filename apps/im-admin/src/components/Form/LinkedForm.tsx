import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from '@mantine/core';
import { useForm } from '@pankod/refine-mantine';

export const LinkedForm = () => {
  const form = useForm({
    initialValues: {
      message: '您好，请问有什么可以帮您',
    },
    validate: {},
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Textarea
        mt="md"
        label="消息内容"
        placeholder="请输入内容"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group mt="xl">
        <Button type="submit" size="md">
          保存
        </Button>
      </Group>
    </form>
  );
};
