import React, { FC, ReactElement } from "react";
import CardDescriptionWidget from "@/pattern/common/molecules/card-description-widget";
import { InfoIcon } from "@emtech/icons";
import { formatCurrency } from "@emtech/utils";
import { useGetTokenCurrencyQuery } from "@/redux/services/tokens/get-token-currency";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";

interface ICurrencyCardProps {
  // Card Title E.g: "Total Tokens Minted"
  title: string;
  // E.g: Circulating supply etc
  value: string | number;
  // Card description
  description: string | ReactElement;
}

// Smaller Currency-manager card
const CurrencyCard: FC<ICurrencyCardProps> = ({
  title,
  value,
  description,
}) => {
  // API query that for wallet summary
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  // API query that for token summary
  const { data: tokenSummary } = useGetTokenCurrencyQuery({
    tokenId: walletSummary?.tokenId,
  });
  return (
    <div className='currency_card_multicolored_border'>
      <div className='bg-surfaceColor w-[280px] h-[140px] flex flex-col items-start justify-center gap-y-[16px] px-[20px] translate-y-[1px] translate-x-[1px] rounded-lg'>
        {/* Card Title */}
        <div className='font-[800] font-sans text-left text-sm text-primaryText max-w-[108px]'>
          {title}
        </div>
        {/* Card Title End */}

        {/* Card Value */}
        <div className='text-primaryText text-4xl font-sans font-[800] uppeprcase'>
          {value
            ? formatCurrency({
                amount: value,
                currencySymbol: `${tokenSummary?.symbol}`,
              })
            : "₦0"}
        </div>
        {/* Card Value End */}
      </div>
      {/* Info Pop Over */}
      <div className='absolute top-[8px] right-[8px]'>
        <CardDescriptionWidget
          trigger={<InfoIcon />}
          description={<p>{description}</p>}
        />
      </div>
      {/* Info Pop Over End */}
    </div>
  );
};

export default CurrencyCard;
