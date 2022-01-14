import { useQuery } from 'react-query';
import { UserService } from '../services/user-service';

import { cacheKey } from './cacheStateKey';

export const useGetUser = () => {
  const result = useQuery({
    queryKey: cacheKey.myUser,
    queryFn: () => UserService.getUser(),
  });
  return result;
};
