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
  username: string;
  password: string;
};

export const LoginPage = () => {
  const { mutate } = useLogin<LoginVariables>();

  const form = useForm({
    initialValues: {
      username: '',
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
            label="Username"
            placeholder="Your username"
            required
            {...form.getInputProps('username')}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
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
