"use client";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { ICollapseSidebarOutput } from "../types";
import { useDispatch } from "react-redux";
import {
  collapseSidebar,
  expandSidebar,
} from "@/redux/features/active-sidebar";

export const useCollapseSidebar = (): ICollapseSidebarOutput => {
  const dispatch = useDispatch();

  // const localStoreState = LocalStore.getItem({ key: SIDEBAR_STATE });

  const sidebarCollapseState = useAppSelector(
    (state) => state?.activeSidebarNav.toggleSidebar
  );

  const [isCollapsed, setIsCollapsed] = useState<boolean>(sidebarCollapseState);

  useEffect(() => {
    setIsCollapsed(sidebarCollapseState);
  }, [dispatch, sidebarCollapseState]);

  /**
   *  @description This function collapse the sidebar
   */
  const collapse = useCallback((): any => {
    dispatch(collapseSidebar());
    return setIsCollapsed(true);
  }, [dispatch]);

  /**
   *  @description This function expands the sidebar
   */
  const expand = useCallback((): any => {
    dispatch(expandSidebar());
    return setIsCollapsed(false);
  }, [dispatch]);

  /**
   * @description Collapse or expand sidebar depending on size of screen
   */
  useEffect(() => {
    if (window.matchMedia("(max-width:1023px)").matches) {
      collapse();
    } else {
      expand();
    }
  }, [collapse, expand]);

  return { isCollapsed, collapse, expand };
};
