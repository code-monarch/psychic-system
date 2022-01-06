import { useEffect } from 'react';
import { Redirect, Route, RouteProps, RouteChildrenProps, Switch, useLocation } from 'react-router-dom';
import { useTracking } from 'react-tracking';
import { ManageDiscussionGuidePage } from 'src/admin/pages/ManageDiscussionGuidePage';

import { ANALYTICS_EVENT_NAMES, ITrackEventInput } from '@shared/analytics';
import { VERIFICATION_STATUS } from '@shared/services/author-service';
import { USER_ROLES } from '@shared/services/user-service';

import { useAbility } from 'src/context/ability-context';
import { useGetUser } from 'src/hooks/useUser';
import { DiscoverClubsPage } from '@pages/DiscoverClubsPage';
import { DiscoverBooksPage } from '@pages/DiscoverBooksPage';
import { ClubPageBasic } from '@pages/Club/ClubPageBasic';
import { ADMIN_ROUTE } from '../admin/utils/constants';
import { BookPagePremium } from '../pages/Book/BookPagePremium';
import { BookPageBasic } from '../pages/Book/BookPageBasic';
import { ProfilePage } from '../pages/ProfilePage';
import { AuthorBooks as AdminAuthorBooks } from '../admin/pages/AuthorBooks';
import { AdminHome } from '../admin/pages/Home';
import { Marketing as AdminMarketing } from '../admin/pages/Marketing';
import { Clubs as AdminClubs } from '../admin/pages/Clubs';
import { ClubBooks as AdminClubBooks } from '../admin/pages/ClubBooks';
import { Books as AdminBooks } from '../admin/pages/Books';
import { ClubBookPlaylist as AdminClubBookPlaylist } from '../admin/pages/ClubBookPlaylist';
import { ClubMarketing as AdminClubMarketing } from '../admin/pages/ClubMarketing';
import { AuthorBookPlaylist as AdminAuthorBookPlaylist } from '../admin/pages/AuthorBookPlaylist';
import { AuthorBookMarketing as AdminAuthorBookMarketing } from '../admin/pages/AuthorBookMarketing';
import { Loading } from '../components/Loading';
import { AuthorOnboardingProvider } from '../context/author-onboarding-context';
import { MessageProvider } from '../context/message-context';
import { ReaderOnboardingProvider } from '../context/reader-onboarding-context';
import { useGetCurrentAuthor } from '../hooks/useGetCurrentAuthor';
import { GUEST_ROUTE, MEMBER_ROUTE } from '../lib/constants';
import { AddDiscussionGuide } from '../pages/AddDiscussionGuide';
import { AuthorOnboarding } from '../pages/AuthorOnboarding';
import { AuthorSettingsPage } from '../pages/AuthorSettings';
import { ClubPage } from '../pages/ClubPage';
import { PageNotFound } from '../pages/common/PageNotFound';
import { EventsPage } from '../pages/EventsPage';
import { DiscoverPage } from '../pages/DiscoverPage';
import { Messaging } from '../pages/Messaging';
import { ReaderOnboardingPage } from '../pages/ReaderOnboarding';
import { ReaderSettingsPage } from '../pages/ReaderSettings';
import { RecordVerticalVideoFlow } from '../pages/RecordVerticalVideoFlow';
import { VideoPage } from '../pages/VideoPage';
import { guestRoutes } from './UnauthenticatedRoutes';
import { IRouteToClubLocationState } from '../lib/route-utils';

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
  // TODO: disable if the user is an author
  const { data: author, isLoading: isAuthorLoading } = useGetCurrentAuthor();
  const { Track, trackEvent } = useTracking<ITrackEventInput>({
    // set the context for future events
    eventData: {
      page: location.pathname,
      path: window.location.href,
    },
  });
  const { ability, isAbilityLoading } = useAbility();
  const isPremium = ability.can('access premium club content', 'nomodel');

  /**
   * @description
   * On url route change, log a page view event.
   * Defining it here means we don't need to add it to components manually as we
   * add new or update old ones.
   */
  useEffect(() => {
    if (!!userRole && !!userId && !!location.pathname) {
      trackEvent({
        // track the page view event
        eventName: ANALYTICS_EVENT_NAMES.PAGE_VIEWED,
      });
    }
  }, [location.pathname, trackEvent, userRole, userId]);

  useEffect(() => {
    if (!location?.state?.selectedVideo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // check if we are calling an anautheticated route, so we can redirect to the app
  const isUnauthenticatedRoute = guestRoutes.some((route) => {
    // all routes inlucde the home route, so do an explicit check first
    if (route.path === GUEST_ROUTE.HOME && location.pathname !== GUEST_ROUTE.HOME) {
      return false;
    }
    return location.pathname.includes(route.path as string);
  });

  if (userRole === USER_ROLES.ADMIN) {
    return (
      <Track>
        <Switch>
          {isPremium ? premiumReaderRoutes.map(mapRoute) : basicReaderRoutes.map(mapRoute)}
          {adminRoutes.map(mapRoute)}
          {authorRoutes.map(mapRoute)}
          {readerRoutes.map(mapRoute)}
          {isUnauthenticatedRoute && <Redirect to={ADMIN_ROUTE.HOME} />}
          {commonRoutes.map(mapRoute)}
        </Switch>
      </Track>
    );
  }
  if (userRole === USER_ROLES.AUTHOR) {
    if (isAuthorLoading) {
      return <Loading />;
    }

    const isAuthorVerified = author?.verifiedInfo?.verificationStatus === VERIFICATION_STATUS.CONFIRMED;
    if (isAuthorVerified) {
      return (
        <Track>
          <Switch>
            {isPremium ? premiumReaderRoutes.map(mapRoute) : basicReaderRoutes.map(mapRoute)}
            {authorRoutes.map(mapRoute)}
            {isUnauthenticatedRoute && <Redirect to={MEMBER_ROUTE.APP} />}
            {commonRoutes.map(mapRoute)}
          </Switch>
        </Track>
      );
    }
    return (
      <Track>
        <Switch>
          {isPremium ? premiumReaderRoutes.map(mapRoute) : basicReaderRoutes.map(mapRoute)}
          {isUnauthenticatedRoute && <Redirect to={MEMBER_ROUTE.APP} />}
          {unverifiedAuthorRoutes.map(mapRoute)}
        </Switch>
      </Track>
    );
  }
  if (userRole === USER_ROLES.READER) {
    return (
      <Track>
        <Switch>
          {isPremium ? premiumReaderRoutes.map(mapRoute) : basicReaderRoutes.map(mapRoute)}
          {readerRoutes.map(mapRoute)}
          {isUnauthenticatedRoute && <Redirect to={MEMBER_ROUTE.APP} />}
          {commonRoutes.map(mapRoute)}
        </Switch>
      </Track>
    );
  }

  // no user role yet
  return <Loading />;
};

const WrappedAuthorOnboarding = () => (
  <AuthorOnboardingProvider>
    <AuthorOnboarding />
  </AuthorOnboardingProvider>
);

const WrappedReaderOnboarding = () => (
  <ReaderOnboardingProvider>
    <ReaderOnboardingPage />
  </ReaderOnboardingProvider>
);

const WrappedMessaging = () => (
  <MessageProvider>
    <Messaging />
  </MessageProvider>
);

const adminRoutes: RouteProps[] = [
  {
    path: ADMIN_ROUTE.HOME,
    exact: true,
    component: AdminHome,
  },
  {
    path: ADMIN_ROUTE.AUTHOR_BOOK,
    exact: true,
    component: ManageDiscussionGuidePage,
  },
  {
    path: ADMIN_ROUTE.AUTHOR_BOOKS,
    exact: true,
    component: AdminAuthorBooks,
  },
  {
    path: ADMIN_ROUTE.MARKETING,
    exact: true,
    component: AdminMarketing,
  },
  {
    path: ADMIN_ROUTE.BOOKS,
    exact: true,
    component: AdminBooks,
  },
  {
    path: ADMIN_ROUTE.CLUBS,
    exact: true,
    component: AdminClubs,
  },
  {
    path: ADMIN_ROUTE.CLUB_MARKETING,
    exact: true,
    component: AdminClubMarketing,
  },
  {
    path: ADMIN_ROUTE.CLUB_BOOKS,
    exact: true,
    component: AdminClubBooks,
  },
  {
    path: ADMIN_ROUTE.CLUB_PLAYLIST,
    exact: true,
    component: AdminClubBookPlaylist,
  },
  {
    path: ADMIN_ROUTE.AUTHOR_BOOK_PLAYLIST,
    exact: true,
    component: AdminAuthorBookPlaylist,
  },
  {
    path: ADMIN_ROUTE.AUTHOR_BOOK_MARKETING,
    exact: true,
    component: AdminAuthorBookMarketing,
  },
];

// 1. route to reader home - without onboarding
// 2. edit my book and discussion guide view
// 3. or a URL directly to the explore page

// TODO:  test author onboarding
const authorRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.APP,
    exact: true,
    component: DiscoverPage,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_ONBOARDING,
    exact: true,
    component: WrappedAuthorOnboarding,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_SETTINGS,
    exact: false,
    component: AuthorSettingsPage,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_DISCUSSION_GUIDE_ADD_FLOW,
    exact: false,
    component: AddDiscussionGuide,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_RECORD_VERTICAL_VIDEO_FLOW,
    exact: false,
    component: RecordVerticalVideoFlow,
  },
];

const unverifiedAuthorRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.APP,
    exact: true,
    component: WrappedAuthorOnboarding,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_ONBOARDING,
    exact: true,
    component: WrappedAuthorOnboarding,
  },
  {
    path: MEMBER_ROUTE.AUTHOR_SETTINGS,
    exact: false,
    component: AuthorSettingsPage,
  },
  {
    path: `${MEMBER_ROUTE.CLUB}/:clubLink/:tab?`,
    exact: false,
    component: ClubPage,
  },
  {
    path: `${MEMBER_ROUTE.PROFILE_PAGE}:username`,
    exact: false,
    component: ProfilePage,
  },
  {
    path: '*',
    exact: false,
    render: () => <Redirect to={{ pathname: MEMBER_ROUTE.PAGE_NOT_FOUND }} />,
  },
];

const MePageRedirect = () => {
  const { data: user } = useGetUser();

  return (
    <>
      {user && <Redirect to={`${MEMBER_ROUTE.PROFILE_PAGE}${user.username}`} />}
      {!user && <Loading />}
    </>
  );
};

const premiumReaderRoutes: RouteProps[] = [
  {
    path: `${MEMBER_ROUTE.BOOK}/:bookLink`,
    exact: true,
    component: BookPagePremium,
  },
  {
    path: `${MEMBER_ROUTE.BOOK}/:bookLink/:tab`,
    exact: true,
    component: BookPagePremium,
  },
  {
    path: `${MEMBER_ROUTE.BOOK}/:bookLink${MEMBER_ROUTE.WATCH_VIDEO}/:videoId`,
    exact: false,
    component: VideoPage,
  },
  {
    path: `${MEMBER_ROUTE.CLUB}/:clubLink${MEMBER_ROUTE.WATCH_VIDEO}/:videoId`,
    exact: false,
    component: VideoPage,
  },
  {
    path: `${MEMBER_ROUTE.CLUB}/:clubLink/:tab?`,
    exact: false,
    render: ({ location }: RouteChildrenProps<null, IRouteToClubLocationState>) => {
      const { state } = location;
      return <ClubPage bookid={state?.bookid} />;
    },
  },
];
const basicReaderRoutes: RouteProps[] = [
  {
    path: `${MEMBER_ROUTE.BOOK}/:bookLink`,
    exact: true,
    component: BookPageBasic,
  },
  {
    path: `${MEMBER_ROUTE.BOOK}/:bookLink/:tab`,
    exact: true,
    component: BookPageBasic,
  },
  {
    path: `${MEMBER_ROUTE.CLUB}/:clubLink/:tab?`,
    exact: false,
    render: ({ location }: RouteChildrenProps<null, IRouteToClubLocationState>) => {
      const { state } = location;
      return <ClubPageBasic openPaymentDialog={state?.openPaymentDialog} />;
    },
  },
];

const readerRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.APP,
    exact: true,
    component: DiscoverPage,
  },
  {
    path: MEMBER_ROUTE.READER_ONBOARDING,
    exact: true,
    component: WrappedReaderOnboarding,
  },
  {
    path: MEMBER_ROUTE.READER_PROFILE,
    exact: true,
    component: MePageRedirect,
  },
  {
    path: MEMBER_ROUTE.READER_SETTINGS,
    exact: false,
    component: ReaderSettingsPage,
  },
];

const commonRoutes: RouteProps[] = [
  {
    path: MEMBER_ROUTE.MESSAGING,
    exact: true,
    component: WrappedMessaging,
  },
  {
    path: MEMBER_ROUTE.DISCOVER,
    exact: false,
    component: DiscoverPage,
  },
  {
    path: MEMBER_ROUTE.DISCOVER_CLUBS,
    exact: true,
    component: DiscoverClubsPage,
  },
  {
    path: MEMBER_ROUTE.DISCOVER_BOOKS,
    exact: true,
    component: DiscoverBooksPage,
  },
  {
    path: MEMBER_ROUTE.EVENTS,
    exact: true,
    component: EventsPage,
  },
  {
    path: MEMBER_ROUTE.PAGE_NOT_FOUND,
    exact: true,
    component: PageNotFound,
  },
  {
    path: `${MEMBER_ROUTE.PROFILE_PAGE}:username`,
    exact: false,
    component: ProfilePage,
  },
  {
    path: `${MEMBER_ROUTE.PROFILE_PAGE}:username`,
    exact: false,
    component: ProfilePage,
  },
  {
    path: '*',
    exact: false,
    render: () => <Redirect to={{ pathname: MEMBER_ROUTE.PAGE_NOT_FOUND }} />,
  },
];
