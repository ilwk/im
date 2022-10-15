import { useForm } from '@mantine/form';

export const LinkedForm = () => {
  const form = useForm({
    initialValues: {
      message: '您好，请问有什么可以帮您',
    },
    validate: {},
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <textarea
        placeholder="请输入内容"
        name="message"
        {...form.getInputProps('message')}
      />

      <div>
        <button type="submit">保存</button>
      </div>
    </form>
  );
};
