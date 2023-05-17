import mem from 'mem';

import { getUserEmail, mainApi, getRefreshToken, Tokens, setAuthTokensAtLocal, logUserOutAndClearCache } from './apis';
import { LOCAL_STORAGE_KEYS } from './constants';
import { REALMS } from '../services/authentication-service';

const refreshTokenFn = async () => {
  const refreshToken = await getRefreshToken();
  const email = await getUserEmail();
  try {
    const response = await mainApi.post(
      '/refreshToken',
      {
        refreshToken,
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Realm: REALMS.EMTECH,
        },
      },
    );

    const tokens: Tokens = response.data || {};

    if (!tokens?.token) {
      logUserOutAndClearCache();
    }
    await setAuthTokensAtLocal(tokens);

    return tokens;
  } catch (error) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
