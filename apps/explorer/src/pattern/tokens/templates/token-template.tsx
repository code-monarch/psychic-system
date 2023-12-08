import React, { FC, useState } from "react";
import PageTitle from "@/pattern/common/atoms/page-title";
import { VisuallyHidden } from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import DataFallback from "@/pattern/common/atoms/data-fallback";
import { Pagination } from "@/lib/hooks/usePagination";
import { useGetSingleFungibleTokenQuery } from "@/redux/services/tokens/get-single-fungible-token";
import FungibleTokenInfoWidget from "../organisms/fungible-token-info-widget";
import TokenKeysWidget from "../organisms/token-keys-widget";
import TokenBalancesWidget from "../organisms/token-balances-widget";

interface IProps {
  tokenId: string;
}

const TokenTemplate: FC<IProps> = ({ tokenId }) => {
  // API query for single Token
  const { data, isLoading, isSuccess, isError } =
    useGetSingleFungibleTokenQuery(
      {
        token_id: tokenId,
      },
      {
        pollingInterval: 3000,
        refetchOnReconnect: true,
      }
    );

  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      {/* Top Section */}
      <PageTitle
        title='Fungible Token: '
        description={
          <span className='text-black text-[1.5rem]'>{tokenId}</span>
        }
      />
      {/* Top Section End */}

      {/* Show Loading Icon when isLoading */}
      <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
        <Loading />
      </VisuallyHidden>

      {/* Show Placeholder when Account data is empty */}
      <VisuallyHidden visible={isError || (!data && !isLoading)}>
        <DataFallback />
      </VisuallyHidden>

      {/* Account data */}
      <VisuallyHidden visible={isSuccess && !!data}>
        <div className='flex flex-col space-y-[48px]'>
          <FungibleTokenInfoWidget
            token_id={data?.token_id}
            EVM_address={""}
            name={data?.name}
            expires_at={data?.expiry_timestamp}
            auto_renew_period={data?.auto_renew_period}
            auto_renew_account={data?.auto_renew_account}
            freeze_default={data?.freeze_default}
            pause_status={data?.pause_status}
            treasury_account={data?.treasury_account_id}
            created_at={data?.created_timestamp}
            modified_at={data?.modified_timestamp}
            total_supply={data?.total_supply}
            initial_supply={data?.initial_supply}
            max_supply={data?.max_supply}
            decimals={data?.decimals}
          />

          {/* Token Keys */}
          <TokenKeysWidget
            KYC_key={data?.kyc_key?.key}
            admin_key={data?.admin_key?.key}
            fee_schedule_key={data?.fee_schedule_key?.key}
            freeze_key={data?.freeze_key?.key}
            pause_key={data?.pause_key?.key}
            supply_key={data?.supply_key?.key}
            wipe_key={data?.wipe_key?.key}
          />

          {/* Token Balances */}
          <TokenBalancesWidget tokenId={tokenId} />
        </div>
      </VisuallyHidden>
      {/* Account data End */}
    </div>
  );
};

export default TokenTemplate;
