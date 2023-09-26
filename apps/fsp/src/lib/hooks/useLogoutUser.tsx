"use client";
import { useCallback, useEffect, useState } from "react";
import { useLazyLogoutQuery } from "../../../redux/services/auth/logout.api-slice";
import { ILogOutOutput } from "../types";
import CookiesManager from "../helpers/cookies-manager";
import { COOKIE_TOKEN, REFRESH_TOKEN } from "../constants/index.constants";

export const useLogoutUser = (): ILogOutOutput => {
  const [logOutStatus, setLogOutStatus] = useState<boolean>(false); // State change when logout is clicked

  // Logout Query
  const [logout] = useLazyLogoutQuery();

  /**
   * @description Calls the logout Query and clears local storage afterwards
   */
  const logoutAndClearToken = useCallback((): void => {
    logout();
    CookiesManager.removeCookie(COOKIE_TOKEN);
    CookiesManager.removeCookie(REFRESH_TOKEN);
  }, [logout]);

  // Log user out when log out status is true
  useEffect(() => {
    if (logOutStatus === true) {
      logoutAndClearToken();
      location.reload();
    }
  }, [logoutAndClearToken, logOutStatus]);

  /**
   * @description Sets log out status to true
   */
  const logOut = useCallback(() => setLogOutStatus(true), []);

  return { logOutStatus, logOut };
};
