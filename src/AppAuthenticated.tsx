import { AuthenticatedRoutes } from './navigation/AuthenticatedRoutes';
import { USER_ROLES } from './lib/constants';
import { TokenDetailsProvider } from './context/token-details-context';

interface IProps {
  userId: string;
  userRole: USER_ROLES;
}

export const AppAuthenticated = ({ userId, userRole }: IProps): JSX.Element => (
  <>
    <TokenDetailsProvider>
      <AuthenticatedRoutes userRole={userRole} userId={userId} />
    </TokenDetailsProvider>
  </>
);
