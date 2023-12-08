import React, { FC } from "react";
import TransactionInfoWidget from "../organisms/transaction-info-widget";
import PageTitle from "@/pattern/common/atoms/page-title";
import { useGetSingleTransactionQuery } from "@/redux/services/transactions/get-single-transaction";
import { StatusIndicator, VisuallyHidden } from "@emtech/ui";
import Loading from "@/app/(explorerPages)/transactions/loading";
import HbarTransfersWidget from "../organisms/hbar-transfers-widget";
import DataFallback from "@/pattern/common/atoms/data-fallback";

interface IProps {
  timeStamp: string;
}

const TransactionTemplate: FC<IProps> = ({ timeStamp }) => {
  // API query for single Transaction
  const { data, isLoading, isSuccess, isError } = useGetSingleTransactionQuery(
    {
      timestamp: timeStamp,
    },
    {
      pollingInterval: 3000,
      refetchOnReconnect: true,
    }
  );

  const status = data?.transactions?.map((transaction) => {
    return transaction?.result;
  });
  return (
    <div className='w-full flex flex-col space-y-[42px]'>
      <PageTitle
        title='Transaction ID:'
        description={
          <div className='flex items-center divide-x divide-inputBorder'>
            <span className='text-black text-[1.5rem] pr-6'>{timeStamp}</span>
            <span className='pl-6'>
              <StatusIndicator status={status?.[0] ?? "Pending"} />
            </span>
          </div>
        }
      />
      {/* Show Loading Icon when isLoading */}
      <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
        <Loading />
      </VisuallyHidden>

      {/* Show data When available */}
      <VisuallyHidden visible={isSuccess && data?.transactions?.length !== 0}>
        {data?.transactions?.map((transaction, idx) => (
          <div key={idx} className='w-full space-y-[32px]'>
            <TransactionInfoWidget
              transactionType={transaction?.name}
              consensusAt={transaction?.consensus_timestamp}
              transactionHash={transaction?.transaction_hash}
              block={transaction?.nonce}
              nodeSubmittedTo={transaction?.node}
              tokenId={transaction?.entity_id}
              payerAccount={transaction?.transfers?.[3]?.account}
              chargedFee={transaction?.charged_tx_fee}
              maxFee={transaction?.max_fee}
              validDuration={transaction?.valid_duration_seconds}
            />

            {/* Hbar transfers display widget */}
            <HbarTransfersWidget transfers={transaction?.transfers} />
          </div>
        ))}
      </VisuallyHidden>

      {/* Show Placeholder data is empty */}
      <VisuallyHidden
        visible={isError || (data?.transactions?.length === 0 && !isLoading)}
      >
        <DataFallback />
      </VisuallyHidden>
    </div>
  );
};

export default TransactionTemplate;
