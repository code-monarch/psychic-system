import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { AppAuthenticated } from './AppAuthenticated';
import { AppUnauthenticated } from './AppUnauthenticated';
import { useAuth } from './context/auth-context';
import { Loading } from './components/Loading';

export const App = (): JSX.Element => {
  const { appUser, userRole } = useAuth();
  const [userReady, setUserReady] = useState(false);
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Check if user data has been loaded before rendering for smoother page load and for analytics initialization
    if (!!userRole && !!appUser?.preferred_username) {
      setUserReady(true);
    }
  }, [userRole, appUser]);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      queryClient.invalidateQueries();
    });
  }, []);

  if (appUser) {
    return userReady && userRole ? (
      <AppAuthenticated userRole={userRole} userId={appUser?.preferred_username} />
    ) : (
      <Loading />
    );
  }

  return <AppUnauthenticated />;
};
