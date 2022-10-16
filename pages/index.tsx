import * as Popover from '@radix-ui/react-popover';
import { PlusIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';

const ChatBox = dynamic(() => import('components/Widget/ChatBox'), {
  ssr: false,
});

const FixedButton = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="p-2 fixed right-12 bottom-12 bg-blue-500 text-white rounded-full shadow">
          <PlusIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="left"
          sideOffset={10}
          align="end"
          className="h-[500px] w-[320px]"
        >
          <ChatBox></ChatBox>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const ClientPage = () => {
  return (
    <section className="h-screen">
      <FixedButton />
    </section>
  );
};

export default ClientPage;
