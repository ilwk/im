import { useLogin } from '@pankod/refine-core';
import { useForm } from '@mantine/form';

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { mutate, isLoading } = useLogin<ILoginForm>();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <section className="h-screen grid place-items-center">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          在线客服系统
        </h1>

        <form
          className="mt-6"
          onSubmit={form.onSubmit((values) => {
            mutate(values);
          })}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              用户名
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...form.getInputProps('email')}
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                密码
              </label>
              {/* <a
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a> */}
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...form.getInputProps('password')}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              disabled={isLoading}
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
