"use client";
import React from "react";
import WalletTokens from "@/pattern/common/molecules/wallet-tokens-widget";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import SummaryDrawer from "../organisms/drawers/summary-drawer";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";
import NumberInputWithToggle from "@/pattern/common/molecules/number-input-with-toggle";
import MultiColouredBorderBox from "@/pattern/common/molecules/multi-coloured-box";

const WalletsummaryDrawer = () => {
  // API query that gets already wallet summary
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  return (
    <SummaryDrawer
      trigger='Wallet Summary'
      drawerTitle='Wallet Summary'
      drawerDescription='The total supply, both those in circulation and not in circulation are all here.'
    >
      <div className='w-full flex flex-col items-center gap-y-10 border-b border-borderColor'>
        {/* Total Supply Value */}
        <div className='flex justify-start gap-x-[24px]'>
          <h5 className='text-inputPlaceholder text-lg font-medium font-sans'>
            Total Supply:
          </h5>
          <h2 className='text-primaryText text-2xl font-sans font-[800]'>
            {formatAmountWithDecimals(walletSummary?.totalSupply)}
          </h2>
        </div>
        {/* Total Supply Value End */}

        {/* Total Supply Box */}
        <MultiColouredBorderBox>
          {/* Amount In Circulation */}
          <NumberInputWithToggle
            label='IN CIRCULATION'
            value={walletSummary?.inCirculation}
          />
          {/* Amount In Circulation End */}

          {/* Amount Not In Circulation */}
          <NumberInputWithToggle
            label='NOT IN CIRCULATION'
            value={walletSummary?.notInCirculation}
          />
          {/* Amount Not In Circulation End */}
        </MultiColouredBorderBox>
        {/* Total Supply Box End */}

        {/* Tokens in Circulation and Not in Circulation for various wallets */}
        <div className='flex items-start'>
          {/* Tokens in Circulation */}
          <div className='space-y-[26px] px-[24px] border-r border-borderColor'>
            {/* Title */}
            <h5 className='uppercase text-sm text-primaryText font-sans font-[800]'>
              Tokens In Circulation
            </h5>
            {/* Distribution Wallet Token */}
            <WalletTokens
              abbrv='DW'
              walletType='Distribution Wallet'
              amount={walletSummary?.distributionWalletBalance}
            />
            {/* Distribution Wallet Tokens End */}

            {/* Institutional Wallet Tokens */}
            <WalletTokens
              abbrv='IW'
              walletType='Institutional Wallet'
              amount={walletSummary?.institutionalWalletBalance}
            />
            {/* Institutional Wallet Tokens End */}
          </div>
          {/* Tokens in Circulation End */}

          {/* Tokens not in Circulation */}
          <div className='space-y-[26px] px-[24px]'>
            {/* Title */}
            <h5 className='uppercase text-sm text-primaryText font-sans font-[800]'>
              Tokens Not In Circulation
            </h5>
            {/* Master Wallet Token */}
            <WalletTokens
              abbrv='MW'
              walletType='Master Wallet'
              amount={walletSummary?.masterWalletBalance}
            />
            {/* Master Wallet Tokens End */}
          </div>
          {/* Tokens not in Circulation End */}
        </div>
        {/* Tokens in Circulation and Not in Circulation End */}
      </div>
    </SummaryDrawer>
  );
};

export default WalletsummaryDrawer;
