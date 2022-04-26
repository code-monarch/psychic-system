import { useMutation } from 'react-query';
import { RatesService } from '../services/rates-service';

export const useGetRates = () => {
  const result = useMutation(RatesService.getRates);
  return result;
};
