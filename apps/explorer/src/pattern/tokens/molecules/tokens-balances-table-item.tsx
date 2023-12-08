import React, { FC } from "react";

interface IProps {
  accountId: string;
  balance: string;
}

const TokensBalancesTableItem: FC<IProps> = ({ accountId, balance }) => {
  return (
    <tr className='w-full flex items-start justify-between border-b border-b-[rgba(30, 37, 45, 0.15)] cursor-default'>
      {/* Account ID */}
      <td className='whitespace-nowrap py-4 text-base font-sans font-[500] text-semPrimary'>
        <span>{accountId}</span>
      </td>
      {/* Account ID End */}

      {/* Balance */}
      <td className='whitespace-nowrap py-4 text-base font-sans font-[500] text-semPrimary'>
        <span>{balance}</span>
      </td>
      {/* Balance End */}
    </tr>
  );
};

export default TokensBalancesTableItem;
