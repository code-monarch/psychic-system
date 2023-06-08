import mem from 'mem';

import { getUserEmail, mainApi, getRefreshToken, Tokens, setAuthTokensAtLocal, logUserOutAndClearCache } from './apis';
import { LOCAL_STORAGE_KEYS } from './constants';
import { REALMS } from '../services/authentication-service';

const refreshTokenFn = async () => {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    logUserOutAndClearCache();
  }
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
    logUserOutAndClearCache();
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
