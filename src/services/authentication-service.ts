import { USER_ROLES } from '../lib/constants';
import { mainApi, secureMainApi } from '../lib/apis';

/**
 * @description
 * Our authentication service.
 */
interface SignInResponse {
  responseCode: string;
  responseStatus: string;
  responseMessage: string;
  responsePayload: {
    token: string;
    expiresAt: string;
  };
}
enum REALMS {
  EMTECH = 'EMTECH',
  BRH = 'BRH',
}
export class AuthenticationService {
  /**
   * @description
   * Signs the user in by setting their their user information in the browsers LocalStorage.
   */

  static async signin(data: IUserSigninData): Promise<SignInResponse> {
    const { email, password } = data;
    const response = await mainApi
      .post(
        `/signIn`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Realm: REALMS.EMTECH,
          },
        },
      )
      .then((res) => res?.data)
      .catch((err) => {
        // console.error('Error logging in: ', err.response.data);
        throw Error(err.response);
      });
    return response;
  }

  /**
   * @desciption
   * Logs out the currently authenticated user.
   * remove the logged in user's data from the browser's LocalStorage.
   * This method also clears the full local storage for our app.
   */
  static async signout(): Promise<any> {
    try {
      return true;
      // call signout endpoint if any and clear local storage
    } catch (error) {}
  }

  /**
   * @desciption
   * Extracts the role from the user (AWS CognitoUser) that resides in the browsers LocalStorage.
   */
  static async getUserRole(): Promise<USER_ROLES> {
    try {
      // logic to determine what role you have based on current sesssion
      return USER_ROLES.INTEGRATOR;
    } catch (error) {
      return USER_ROLES.INTEGRATOR;
    }
  }

  static async getFeatureFlags(): Promise<FeatureFlagsResponse[]> {
    const response = await secureMainApi.get(`/feature/getAllFeatures`);
    return response.data;
  }
}

export interface IUserSigninData {
  email: string;
  password: string;
}

export interface FeatureFlagsResponse {
  feature_name: string;
  feature_enabled: number;
  strategy_id: string;
  strategy_params: string;
}
