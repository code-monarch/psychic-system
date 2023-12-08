"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ITokensTableItemProps {
  tokens: string;
  symbol: string;
}

const TokensTableItem = ({ tokens, symbol }: ITokensTableItemProps) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/token/${tokens}`);
  };
  return (
    <tr
      className='w-full hover:bg-surfaceColor cursor-pointer'
      onClick={() => handleClick()}
    >
      {/* Tokens */}
      <td className='whitespace-nowrap py-4 pl-[44px] pr-[679px] text-base font-sans text-inputPlaceholder font-[500]'>
        {tokens}
      </td>
      {/* Tokens End */}

      {/* Symbol */}
      <td className='whitespace-nowrap py-4 pr-[230px] text-base font-sans text-inputPlaceholder font-[500]'>
        {symbol}
      </td>
      {/* Symbol End */}
    </tr>
  );
};

export default TokensTableItem;
