import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { BookPageGuest } from '@pages/Book/BookPageGuest';
import { ClubPageGuest } from '@pages/Club/ClubPageGuest';
import { getCookieObject, deleteCookie } from '../webutils';
import { PageNotFound } from '../pages/common/PageNotFound';
import { GUEST_ROUTE } from '../lib/constants';
import { Registration } from '../pages/guest/Registration';
import { Login } from '../pages/guest/Login';
import { PasswordRest } from '../pages/guest/PasswordReset';
import { AuthorSignupVerifyEmail } from '../pages/guest/AuthorSignupVerifyEmail';

/**
 * Routes only a logged out user could visit.
 */
/**
 * @description
 * useEffect statement handles redirecting a user to login if they attempt to view an authenticated URL.
 *
 * @example
 * An unauthenticated user opens an email notification link to reply to a
 * message they recieved, which sends them to a route which only an authenticated
 * user has access to, for example:
 * `reply` ---> `app/messaging?conversationid=5fbc1d5c61e3580009b0f648`
 *
 * In this case, we need to redirect the user to the signin page & pass the intended
 * destination url as a param like so:
 * /app/login?session_redirect=/app/messaging?conversationid=5fbc1d5c61e3580009b0f648
 *
 * Without this method, an unauthenticated user who visits an authenticated route
 * will hit a blank page, since unauthenticated users don't have access to authenticated routes.
 */
export const UnAuthenticatedRoutes = (): JSX.Element => {
  const location: any = useLocation();

  // scroll to up when push a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
      <Switch>
        <Redirect from={GUEST_ROUTE.HOME} to={GUEST_ROUTE.LOGIN} exact />

        {guestRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route
          path="*"
          render={(props) => (
            <Redirect
              to={{
                pathname: GUEST_ROUTE.LOGIN,
                state: {
                  redirectTo: props.location.pathname,
                  redirectState: {}, //state to pass to page that we redirect to after login
                },
              }}
            />
          )}
        />
      </Switch>
  );
};

export const guestRoutes: RouteProps[] = [
  {
    path: GUEST_ROUTE.HOME,
    exact: true,
    component: Registration,
  },
  {
    path: GUEST_ROUTE.SIGNUP,
    exact: true,
    component: Registration,
  },
  {
    path: GUEST_ROUTE.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: `${GUEST_ROUTE.APP}${GUEST_ROUTE.SIGNUP}`,
    exact: true,
    render: () => <Redirect to={{ pathname: GUEST_ROUTE.SIGNUP }} />,
  },
  {
    path: `${GUEST_ROUTE.APP}${GUEST_ROUTE.LOGIN}`,
    exact: true,
    render: () => <Redirect to={{ pathname: GUEST_ROUTE.LOGIN }} />,
  },
  {
    path: GUEST_ROUTE.AUTHOR_VERIFY_EMAIL,
    exact: true,
    component: AuthorSignupVerifyEmail,
  },
  {
    path: GUEST_ROUTE.RESET_PASSWORD,
    exact: true,
    component: PasswordRest,
  },
  {
    path: `${GUEST_ROUTE.BOOK}/:bookLink`,
    exact: false,
    component: BookPageGuest,
  },
  {
    path: `${GUEST_ROUTE.CLUB}/:clubLink/:tab?`,
    exact: false,
    component: ClubPageGuest,
  },
  {
    path: GUEST_ROUTE.PAGE_NOT_FOUND,
    exact: true,
    component: PageNotFound,
  },
];
