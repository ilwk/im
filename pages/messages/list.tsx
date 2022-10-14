// import { IMBox } from 'components/IM';

import dynamic from 'next/dynamic';

const IMBox = dynamic(() => import('components/IM/IMBox'), {
  ssr: false,
});

type Props = {};

export const ChannelList = (props: Props) => {
  return <IMBox />;
};
