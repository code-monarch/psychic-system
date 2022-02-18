import { useEffect } from 'react';
import { Redirect, Route, RouteProps, Switch, useLocation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { MEMBER_ROUTE, USER_ROLES } from '../lib/constants';
import Layout from '../pages/Layout';
import { DashboardLandingPage } from '../pages/DashboardLandingPage';

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

  if (userRole === USER_ROLES.CENTRAL_BANK) {
    return (
      <Switch>
        <Route path={MEMBER_ROUTE.GET_STARTED} render={() => <DashboardLandingPage />} />
        {centralBankRoutes.map(mapRoute)}
        {commonRoutes.map(mapRoute)}
      </Switch>
    );
  }
  if (userRole === USER_ROLES.INTEGRATOR) {
    return (
      <Switch>
        <Route path={MEMBER_ROUTE.GET_STARTED} render={() => <DashboardLandingPage />} />
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
    path: MEMBER_ROUTE.HOME,
    render: () => <Layout />,
  },
];

const integratorRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.HOME,
    render: () => <Layout />,
  },
];

const commonRoutes: RouteProps[] = [
  {
    path: '*',
    exact: false,
    render: () => <Redirect to={{ pathname: MEMBER_ROUTE.PAGE_NOT_FOUND }} />,
  },
];
