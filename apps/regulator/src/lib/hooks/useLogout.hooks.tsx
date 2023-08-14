"use client";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
// import { useAppSelector } from "@/redux/hooks";
import { useLazyLogoutQuery } from "../../../redux/services/auth/logout.api-slice";
import LocalStore from "../helpers/session-manager.helpers";
import { ILogOutOutput } from "../types";
import CookiesManager from "../helpers/cookies-manager.helpers";
import { COOKIE_TOKEN, REFRESH_TOKEN } from "../constants/index.constants";

export const useLogout = (): ILogOutOutput => {
  const [logOutStatus, setLogOutStatus] = useState<boolean>(false); // State change when logout is clicked

  // Logout Query
  const [logout] = useLazyLogoutQuery();

  /**
   * @description Calls the logout Query and clears local storage
   */
  const logoutAndClearStorage = useCallback((): void => {
    logout();
    LocalStore.clearStore();
    CookiesManager.removeCookie(COOKIE_TOKEN);
    CookiesManager.removeCookie(REFRESH_TOKEN);
  }, [logout]);

  useEffect(() => {
    if (logOutStatus === true) {
      logoutAndClearStorage();
      location.reload();
    }
  }, [logoutAndClearStorage, logOutStatus]);

  /**
   * @description Sets log out status to true
   */
  const logOut = useCallback(() => setLogOutStatus(true), []);

  return { logOutStatus, logOut };
};
