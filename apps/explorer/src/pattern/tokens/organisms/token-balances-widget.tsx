import React, { FC } from "react";
import { useGetTokenBalancesQuery } from "@/redux/services/tokens/get-token-balances";
import TokenBalanceTHead from "../molecules/tokens-balances-t-head";
import TokensBalancesTableItem from "../molecules/tokens-balances-table-item";
import WidgetHeader from "../molecules/widget-header";
import { VisuallyHidden } from "@emtech/ui";

const styles = {
  fallback: `w-full flex justify-center items-center text-black text-lg pt-[120px] pb-[30px]`,
};

interface IProps {
  tokenId: string;
}

const TokenBalancesWidget: FC<IProps> = ({ tokenId }) => {
  // API Query for getting Token Balances
  const { data, isLoading, isSuccess, isError } = useGetTokenBalancesQuery(
    {
      token_id: tokenId,
    },
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  return (
    <div className='flex flex-col space-y-[50px]'>
      <WidgetHeader header='Balances' />

      <div className='bg-surfaceColor w-full h-fit p-[24px] space-y-[39px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
        <table className='w-full'>
          {/* Table Head */}
          <thead className='bg-inherit'>
            <TokenBalanceTHead />
          </thead>
          {/* Table Head End */}

          {/* Table Body */}
          <VisuallyHidden visible={isSuccess && data?.balances?.length !== 0}>
            <tbody className='bg-inherit'>
              {data?.balances?.map((balance, idx) => (
                <TokensBalancesTableItem
                  key={idx}
                  accountId={balance?.account}
                  balance={balance?.balance}
                />
              ))}
            </tbody>
          </VisuallyHidden>
          {/* Table Body End */}

          {/* When Table data is Loading*/}
          <VisuallyHidden visible={isLoading}>
            <div className={styles?.fallback}>Loading...</div>
          </VisuallyHidden>

          {/* When Table is Empty or where there is an error */}
          <VisuallyHidden visible={isError || data?.balances?.length === 0}>
            <div className={styles?.fallback}>No Records Found</div>
          </VisuallyHidden>
        </table>
      </div>
    </div>
  );
};

export default TokenBalancesWidget;
