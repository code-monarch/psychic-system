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

export interface ISelectWalletProps {
  name: string;
  walletId: string;
}

export interface ISelectWalletOutputProps {
  // eslint-disable-next-line no-unused-vars
  handleSelectWallet: (wallet: ISelectWalletProps) => void;
  selectedWallets: ISelectWalletProps[];
}

export enum RequestCreatorDepartments {
  "FSD AML",
  "FSD MC",
  "Regulatory Support",
  "IT Operators",
  "Legal",
  "Innovation",
}
