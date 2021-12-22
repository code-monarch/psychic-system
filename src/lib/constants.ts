
/**
 * Object containing the routes that only a logged out user can visit.
 */
export const GUEST_ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  RESET_PASSWORD: '/reset-password',
};

/**
 * Object containing the routes that only a logged in user can visit.
 */
export const MEMBER_ROUTE = {
  HOME: '/',
  // get PAGE_NOT_FOUND(): string {
  //   return '/404';
  // },
};



/**
 * Prefix used to more easily find & identify values we set in our browser's LocalStorage for our app.
 * @example
 * `${LOCAL_STORAGE_KEY_PREFIX}something_about_the_page_or_feature``
 */
const LOCAL_STORAGE_KEY_PREFIX = 'CBDC__';
export const LOCAL_STORAGE_KEYS = {
  WALLET_LIST: `${LOCAL_STORAGE_KEY_PREFIX}WALLET_LIST`,
};
