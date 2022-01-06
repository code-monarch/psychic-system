import { useEffect } from 'react';
import { Redirect, Route, RouteProps, Switch, useLocation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import {GUEST_ROUTE, MEMBER_ROUTE, USER_ROLES} from '../lib/constants';
import Dashboard from "../pages/Dashboard";

const mapRoute = (route: RouteProps, index: number) => <Route key={index} {...route} />;

interface IProps {
  userId: string;
  userRole: USER_ROLES;
}

/**
 * Routes only a logged in  user could visit.
 */
export const AuthenticatedRoutes = ({ userId, userRole }: IProps): JSX.Element => {
  const location = useLocation<Record<string, unknown>>();


  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // check if we are calling an anautheticated route, so we can redirect to the app
  // const isUnauthenticatedRoute = guestRoutes.some((route) => {
  //   // all routes inlucde the home route, so do an explicit check first
  //   if (route.path === GUEST_ROUTE.HOME && location.pathname !== GUEST_ROUTE.HOME) {
  //     return false;
  //   }
  //   return location.pathname.includes(route.path as string);
  // });

  if (userRole === USER_ROLES.CENTRAL_BANK) {
    return (
        <Switch>
          {centralBankRoutes.map(mapRoute)}
          {commonRoutes.map(mapRoute)}
        </Switch>
    );
  }
  if (userRole === USER_ROLES.INTEGRATOR) {
    return (
        <Switch>
          {integratorRoutes.map(mapRoute)}
          {commonRoutes.map(mapRoute)}
        </Switch>
    );
  }

  // no user role yet
  return <Loading />;
};

const centralBankRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.DASHBOARD,
    exact: true,
    render: () =>  <Dashboard />
  },
  {
    path: MEMBER_ROUTE.HOME,
    exact: true,
    render: () =>  <Redirect to={{ pathname: MEMBER_ROUTE.DASHBOARD }} />
  },
];

const integratorRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.DASHBOARD,
    exact: true,
    render: () =>  <Dashboard />
  },
  {
    path: MEMBER_ROUTE.HOME,
    exact: true,
    render: () =>  <Redirect to={{ pathname: MEMBER_ROUTE.DASHBOARD }} />
  },
];



const commonRoutes: RouteProps[] = [
  {
    path: '*',
    exact: false,
    render: () => <Redirect to={{ pathname: MEMBER_ROUTE.PAGE_NOT_FOUND }} />,
  },
];
