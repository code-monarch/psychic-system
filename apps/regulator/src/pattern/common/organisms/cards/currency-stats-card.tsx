"use client";
import React, { FC, ReactElement } from "react";
import { formatAmountWithDecimals } from "@/lib/helpers/format-amount-with-decimals";
import CardDescriptionWidget from "@/pattern/common/molecules/card-description-widget";
import { InfoIcon } from "@emtech/icons";

interface ICurrencyStatsCardProps {
  title: string; // Card Title E.g: "Total Tokens Minted"
  value: string; // E.g: amount of total tokens minted etc
  description: string | ReactElement; // Card description
}

const CurrencyStatsCard: FC<ICurrencyStatsCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <div className='currency_card_multicolored_border'>
      <div className='bg-surfaceColor w-[calc(100%-2px)] h-[140px] flex flex-col items-start justify-center gap-y-[16px] px-[20px] translate-y-[1px] translate-x-[1px] rounded-lg'>
        {/* Card Title */}
        <div className='currency_card_title'>{title}</div>
        {/* Card Title End */}

        {/* Card Value */}
        <div className='text-primaryText text-4xl font-sans font-[800] uppercase'>
          {formatAmountWithDecimals(value!)}
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

export default CurrencyStatsCard;
