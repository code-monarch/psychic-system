export interface ISetCookieProps {
  key: string;
  value: string;
}
export interface IGetCookieProps {
  key: string;
}
export interface ICollapseSidebarOutput {
  isCollapsed: boolean;
  collapse: () => any;
  expand: () => any;
}
export interface ILogOutOutput {
  logOutStatus: boolean;
  logOut: () => void;
}