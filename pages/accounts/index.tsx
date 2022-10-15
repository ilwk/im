import { LayoutWrapper } from 'components';
import { AccountList } from './list';

export { AccountList };

export const AccountsPage = () => {
  return (
    <LayoutWrapper>
      <AccountList />
    </LayoutWrapper>
  );
};

export default AccountsPage;
