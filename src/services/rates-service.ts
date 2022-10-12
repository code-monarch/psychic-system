import { ratesApi } from '../lib/apis';

/**
 * @description
 * Service for fetching currency exchange rates.
 * Every signed in user will have a user record.
 */
export class RatesService {
  /**
   * @description
   * Get the user record of the currently signed in user.
   * The currently signed in user is inferred from the JWT auth token.
   */
  static async getRates(): Promise<any | null> {
    try {
      const data = await ratesApi
        .get(`latest.json`, {
          params: {
            app_id: 'c5d12ed1aec74b1eb4fb656125742701',
            base: 'USD',
            symbols: 'HTG',
          },
        })
        .then((res) => res?.data)
        .catch((err) => {
          if (err?.response) {
            console.error('Error in getUser: ', err.response.data);
            throw Error(err.response);
          }
        });

      return data;
    } catch (error) {
      if (error !== `No current user`) {
        throw Error(`${error}`);
      }
      return null;
    }
  }
}
