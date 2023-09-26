"use client";
import React, { useState, createContext, ReactNode } from 'react';

interface IGlobalContextProps {
  wallet: string;
  id: string;
  funded: boolean;
  period: string;
  tab: string;
  walletType: string;
  setWalletType: (type: string) => void;
  setTab: (tab: string) => void;
  setPeriod: (period: string) => void;
  setFunded: (state: boolean) => void;
  setWallet: (wallet: string) => void;
  setId: (id: string) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  wallet: "",
  id: "",
  funded: false,
  period: "",
  tab: "",
  walletType: "",
  setWalletType: () => {},
  setTab: () => {},
  setPeriod: () => {},
  setFunded: () => {},
  setWallet: () => {},
  setId: () => {},
});

interface IGlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<IGlobalContextProviderProps> = (props) => {
  const [currentWallet, setCurrentWallet] = useState<string>("MASTER");
  const [currentId, setCurrentId] = useState<string>("0.03065441");
  const [funded, setFunded] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("daily");
  const [tab, setTab] = useState<string>("RESERVE");
  const [walletType, setWalletType] = useState<string>("institutional")

  return (
    <GlobalContext.Provider
      value={{
        wallet: currentWallet,
        id: currentId,
        funded: funded,
        period: period,
        tab: tab,
        walletType: walletType,
        setWalletType: setWalletType,
        setTab: setTab,
        setPeriod: setPeriod,
        setFunded: setFunded,
        setWallet: setCurrentWallet,
        setId: setCurrentId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
