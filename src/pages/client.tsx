import * as Popover from '@radix-ui/react-popover';
import ChatBox from '~/components/Widget/ChatBox';
import { IconPlus } from '@tabler/icons';

const FixedButton = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="p-2 fixed right-12 bottom-12 bg-blue-500 text-white rounded-full shadow">
          <IconPlus />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="left"
          sideOffset={10}
          align="end"
          className="h-[500px]"
        >
          <ChatBox></ChatBox>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const ClientPage = () => {
  return (
    <section className="h-screen">
      <FixedButton />
    </section>
  );
};
