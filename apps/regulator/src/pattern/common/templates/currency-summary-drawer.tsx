"use client";
import React from "react";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import SummaryDrawer from "../organisms/drawers/summary-drawer";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";
import NumberInputWithToggle from "@/pattern/common/molecules/number-input-with-toggle";
import MultiColouredBorderBox from "@/pattern/common/molecules/multi-coloured-box";
import CurrencyStatsCard from "@/pattern/common/organisms/cards/currency-stats-card";

const CurrencysummaryDrawer = () => {
  // API query that gets already currency summary
  const { data: currencySummary } = useGetWalletsSummaryQuery();

  return (
    <SummaryDrawer
      trigger='Currency Summary'
      drawerTitle='Currency Summary'
      drawerDescription='The total tokens minted, distributed and burnt are all shown below.'
    >
      <div className='w-full flex flex-col items-center gap-y-10 border-b border-borderColor'>
        {/* Total Supply Value */}
        <div className='flex justify-start items-center gap-x-[24px]'>
          <h5 className='text-inputPlaceholder text-lg font-medium font-sans'>
            Total Token Minted:
          </h5>
          <h2 className='text-primaryText text-2xl font-sans font-[800]'>
            {formatAmountWithDecimals(currencySummary?.totalSupply)}
          </h2>
        </div>
        {/* Total Supply Value End */}

        {/* Total Supply Box */}
        <MultiColouredBorderBox>
          {/* Amount In Circulation */}
          <div>
            <NumberInputWithToggle
              label='IN CIRCULATION'
              value={currencySummary?.inCirculation}
            />
          </div>
          {/* Amount In Circulation End */}

          {/* Amount Not In Circulation */}
          <div>
            <NumberInputWithToggle
              label='NOT IN CIRCULATION'
              value={currencySummary?.notInCirculation}
            />
          </div>
          {/* Amount Not In Circulation End */}
        </MultiColouredBorderBox>
        {/* Total Supply Box End */}

        <div className='w-full space-y-[21px]'>
          {/* Master Wallet Balance */}
          <CurrencyStatsCard
            title='Master Wallet Balance:'
            description='description'
            value={currencySummary?.masterWalletBalance}
          />
          {/* Master Wallet Balance End */}

          {/* Distribution Wallet Balance */}
          <CurrencyStatsCard
            title='Distribution Wallet Balance:'
            description='description'
            value={currencySummary?.distributionWalletBalance}
          />
          {/* Distribution Wallet Balance End */}

          {/* Total Tokens Burnt */}
          <CurrencyStatsCard
            title='Total Tokens Burnt:'
            description='description'
            value={currencySummary?.institutionalWalletBalance}
          />
          {/* Total Tokens Burnt End */}
        </div>
      </div>
    </SummaryDrawer>
  );
};

export default CurrencysummaryDrawer;
