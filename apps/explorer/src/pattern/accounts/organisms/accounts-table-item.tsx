import React from "react";
import { useRouter } from "next/navigation";
import moment from "moment";

interface IAccountsTableItemProps {
  account: string;
  expiry: string;
  tokens: string | number;
  balance: string | number;
}

const AccountsTableItem = ({
  account,
  expiry,
  tokens,
  balance,
}: IAccountsTableItemProps) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/account/${account}`);
  };
  return (
    <tr
      className='w-full hover:bg-surfaceColor cursor-pointer'
      onClick={() => handleClick()}
    >
      {/* Account */}
      <td className='whitespace-nowrap pl-10 pr-[203px] py-4 text-base font-sans font-[500] text-semPrimary'>
        <span>{account ?? "None"}</span>
      </td>
      {/* Account End */}

      {/* Expiry */}
      <td className='whitespace-nowrap py-4 pr-[238px] text-base font-sans text-inputPlaceholder font-[500]'>
        {moment.unix(Number(expiry)).format("LLLL") ?? "None"}
      </td>
      {/* Expiry End */}

      {/* Tokens */}
      <td className='text-base font-sans text-inputPlaceholder font-[500] whitespace-nowrap py-4 pr-[220px]'>
        {tokens ?? "None"}
      </td>
      {/* Tokens End */}

      {/* Balance */}
      <td className='whitespace-nowrap pr-[112px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500]'>
        {balance ?? "None"}
      </td>
      {/* Balance End */}
    </tr>
  );
};

export default AccountsTableItem;
