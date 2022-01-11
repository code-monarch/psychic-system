import { USER_ROLES } from '../lib/constants';

/**
 * @description
 * Our authentication service.
 */
export class AuthenticationService {
  /**
   * @description
   * Signs the user in by setting their their user information in the browsers LocalStorage.
   */
  static async signin(data: IUserSigninData) {
    const { username: email, password } = data;
    try {
      // call sign in endpoint
    } catch (error) {
      // catch errors
    }
  }

  /**
   * @desciption
   * Logs out the currently authenticated user.
   * remove the logged in user's data from the browser's LocalStorage.
   * This method also clears the full local storage for our app.
   */
  static async signout(): Promise<any> {
    try {
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

  /**
   * @description
   * Checks if there is a currently logged in user.
   * fetch cached user token to determine if user is already logged in
   */
  static async getUser() {
    try {
      return {
        displayName: 'Olaide',
        id: '023232owewe023232',
        avatarUrl: 'https://placekitten.com/32/32',
      };
      // return user from local storage?
    } catch (error) {
      return null;
    }
  }
}

export interface IUserSigninData {
  username: string;
  password: string;
}
