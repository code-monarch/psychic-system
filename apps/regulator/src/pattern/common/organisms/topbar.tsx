"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import TopbarTitle from "../atoms/topbar-page-title";

import { joinClasses } from "@emtech/utils";
import { NotificationIcon } from "@emtech/icons";

import Hidden from "@/pattern/common/atoms/hidden";
import WalletsummaryDrawer from "@/pattern/common/templates/wallet-summary-drawer";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import { useGetTokenCurrencyQuery } from "@/redux/services/tokens/get-token-currency";
import { saveWalletDetails } from "@/lib/helpers/save-wallet-details.helpers";
import CurrencysummaryDrawer from "../templates/currency-summary-drawer";

const Topbar = () => {
  const [exact, setExact] = useState<boolean>(false);

  const pathname = usePathname();

  const isOnWalletRoute = pathname.startsWith("/wallet");

  const isOnCurrencyManagementRoute = pathname.startsWith("/currency");

  useEffect(() => {
    if (pathname === "/") {
      setExact(true);
    }
  }, [pathname]);

  // API query for wallet summary
  const { data: walletSummary, isSuccess: walletSummarySuccess } =
    useGetWalletsSummaryQuery();

  // API query for token Summary
  const { data: tokenSummary, isSuccess: tokenSummarySuccess } =
    useGetTokenCurrencyQuery({
      tokenId: walletSummary?.tokenId,
    });

  // Save Regulator Wallet details
  useEffect(() => {
    if (walletSummarySuccess && tokenSummarySuccess) {
      saveWalletDetails({
        walletId: walletSummary?.walletId,
        tokenId: walletSummary?.tokenId,
        masterWalletId: walletSummary?.masterWalletId,
        distributionWalletId: walletSummary?.distributionWalletId,
        institutionalWalletId: walletSummary?.institutionalWalletId,
        tokenSymbol: tokenSummary?.symbol,
        currencyDecimals: tokenSummary?.decimals,
      });
    }
  }, [
    tokenSummary?.decimals,
    tokenSummary?.symbol,
    tokenSummarySuccess,
    walletSummary?.distributionWalletId,
    walletSummary?.institutionalWalletId,
    walletSummary?.masterWalletId,
    walletSummary?.tokenId,
    walletSummary?.walletId,
    walletSummarySuccess,
  ]);

  return (
    <div
      className={joinClasses(
        "bg-surfaceColor fixed w-screen h-[88px] flex justify-start py-[14px] pr-[10%] shadow-semShadow2 transition-all duration-200 ease-in-out z-[25]"
      )}
    >
      <div className='w-full flex justify-between items-center'>
        <TopbarTitle href={pathname} exact={exact} />

        {/* Wallet/Currency Summary, Notification and more options */}
        <div className='flex items-center h-16 w-fit gap-x-[35px] text-black'>
          {/* Wallet Summary */}
          <Hidden visible={isOnWalletRoute}>
            <WalletsummaryDrawer />
          </Hidden>
          {/* Wallet Summary End */}

          {/* Currency Summary */}
          <Hidden visible={isOnCurrencyManagementRoute}>
            <CurrencysummaryDrawer />
          </Hidden>
          {/* Currency Summary End */}
          <span>
            <NotificationIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
