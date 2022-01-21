import { useEffect, useState } from 'react';
import { AppAuthenticated } from './AppAuthenticated';
import { AppUnauthenticated } from './AppUnauthenticated';
import { useAuth } from './context/auth-context';
import { Loading } from './components/Loading';

export const App = (): JSX.Element => {
  const { appUser, userRole } = useAuth();
  const [userReady, setUserReady] = useState(false);
  useEffect(() => {
    // Check if user data has been loaded before rendering for smoother page load and for analytics initialization
    if (!!userRole && !!appUser?.email) {
      setUserReady(true);
    }
  }, [userRole, appUser]);

  if (appUser) {
    return userReady && userRole ? <AppAuthenticated userRole={userRole} userId={appUser?.email} /> : <Loading />;
  }

  return <AppUnauthenticated />;
};
