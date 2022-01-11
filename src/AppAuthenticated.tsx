import { AuthenticatedRoutes } from './navigation/AuthenticatedRoutes';
import { USER_ROLES } from './lib/constants';

interface IProps {
  userId: string;
  userRole: USER_ROLES;
}

export const AppAuthenticated = ({ userId, userRole }: IProps): JSX.Element => (
  <>
    <AuthenticatedRoutes userRole={userRole} userId={userId} />
  </>
);
