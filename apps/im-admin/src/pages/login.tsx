import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useLogin } from '@pankod/refine-core';
import { useForm } from '@pankod/refine-mantine';

type LoginVariables = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { mutate } = useLogin<LoginVariables>();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Container size={420} my={60}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        登录
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            mutate(values);
          })}
        >
          <TextInput
            label="用户名"
            placeholder="请输入用户名"
            required
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="密码"
            placeholder="请输入密码"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            {/* <Anchor<'a'>
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor> */}
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
