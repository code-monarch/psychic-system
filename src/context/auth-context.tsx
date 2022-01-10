import { useContext, createContext, useState } from 'react';
import { useMutation, useQuery, UseMutationResult, QueryCache } from 'react-query';
import { Loading } from '../components/Loading';
import { cacheKey } from '../hooks/cacheStateKey';
import { useGetUser } from '../hooks/useUser';
import {AuthenticationService,IUserSigninData} from "../services/authentication-service";
import {USER_ROLES} from "../lib/constants";

//TODO: configure data interfaces when we connect to the endpoints and replace "any" with the proper interfaces
//TODO: it's possible that we'll have to merge userProfile and app user objects. Depends on data from the backend

type AuthContextProps = {
  appUser: any | null;
  userRole: USER_ROLES | null;
  setAppUser: React.Dispatch<React.SetStateAction<any>>;
  setUserRole: React.Dispatch<React.SetStateAction<USER_ROLES | null>>;
  useSignin: () => UseMutationResult<any, unknown, IUserSigninData, unknown>;
  useSignout: () => UseMutationResult<void, unknown, void, unknown>;
  useGetUserRole: () => UseMutationResult<USER_ROLES, unknown, void, unknown>;
  userProfile: any;
  userProfileRefetch: () => void;
  setUserSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});
AuthContext.displayName = 'AuthContext';

const queryCache = new QueryCache();

const AuthProvider = (props:any) => {
  const [appUser, setAppUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<USER_ROLES | null>(null);
  const [userSignedIn, setUserSignedIn] = useState<boolean>(false);
  const [userSignedUp, setUserSignedUp] = useState<boolean>(false);
  const { data: userProfile, refetch: userProfileRefetch } = useGetUser();

  const {
    data: any,
    isLoading,
    isIdle,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: [cacheKey.currentUser],
    queryFn: AuthenticationService.getUser,
    onSuccess: async (user) => {
      if (user) {
        //TODO: set user if we have any in local storage
        setAppUser(user);
      }
    },
  });

  const { data } = useQuery({
    queryKey: [cacheKey.currentUserRole],
    queryFn: AuthenticationService.getUserRole,
    onSuccess: async (role) => {
      if (role) {
        setUserRole(role);
      }
    },
  });

  if (isLoading || isIdle) {
    return <Loading />;
  }

  if (isError) {
    console.log(`[AuthProvider] -- isError`);
  }

  if (isSuccess) {
    const values: AuthContextProps = {
      appUser,
      userRole,
      setAppUser,
      setUserRole,
      useSignin,
      useSignout,
      useGetUserRole,
      userProfile,
      userProfileRefetch,
      setUserSignedIn,
      setUserSignedUp,
    };
    return <AuthContext.Provider value={values} {...props} />;
  }

  return null
};

function useSignin() {
  const { setUserSignedIn } = useAuth();
  const result = useMutation(AuthenticationService.signin, {
    onSuccess: () => {
      setUserSignedIn(true);

    },
  });
  return result;
}

function useSignout() {
  const { setAppUser, setUserRole } = useAuth();

  const result = useMutation(
    async () => {
      const response: void = await AuthenticationService.signout();
      return response;
    },
    {
      onSuccess: () => {
        setAppUser(null); // this action automatically redirects to login page
        setUserRole(null);
        localStorage.clear();
        queryCache.clear();
      },
    },
  );
  return result;
}

function useGetUserRole() {
  const result = useMutation(AuthenticationService.getUserRole);
  return result;
}

/**
 * @description
 * A hook responsible for interacting with and retrieving data from AuthContext.
 */
function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context as AuthContextProps;
}

export { AuthProvider, useAuth };
