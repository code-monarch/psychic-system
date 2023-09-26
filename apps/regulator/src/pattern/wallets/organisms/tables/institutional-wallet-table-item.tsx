import React, { FC } from "react";
import StatusIndicator from "../../../common/atoms/table-status-indicator";
import { ArrowRightIcon } from "@emtech/icons";
import { InstitutionWalletTypes } from "@/pattern/types";
import { joinClasses } from "@emtech/utils";

const style = {
  td: `text-inputPlaceholder py-4 text-base font-sans`,
};

interface ITableProps {
  walletId: string;
  institutionName: string;
  balance: string;
  NumberOfEndUsers: string;
  walletType: InstitutionWalletTypes;
  status: "Active" | "Inactive";
}

const InstitutionalWalletTableItem: FC<ITableProps> = ({
  walletId,
  institutionName,
  balance,
  NumberOfEndUsers,
  walletType,
  status,
}) => (
  <tr className='w-full hover:bg-surfaceColor cursor-pointer'>
    {/* Wallet Id */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap pr-[75px] py-4 text-base font-sans text-center text-semPrimary"
      )}
    >
      {walletId}
    </td>
    {/* Wallet Id End */}

    {/* Institution name */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap pl-[10px] py-4 pr-[95px] text-center text-semPrimary"
      )}
    >
      {institutionName}
    </td>
    {/* Institution name End */}

    {/* Balance */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap pr-[116px] py-4 text-center"
      )}
    >
      {balance}
    </td>
    {/* Balance End */}

    {/* Wallet Type */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap pr-[89px] py-4 text-right"
      )}
    >
      {walletType}
    </td>
    {/* Wallet Type End */}

    {/* Number of End user wallet */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap pr-[143px] py-4 text-center"
      )}
    >
      {NumberOfEndUsers}
    </td>
    {/* Number of End user wallet End */}

    {/* Status */}
    <td
      className={joinClasses(
        style.td,
        "whitespace-nowrap flex items-center gap-x-8 pl-[10px] py-4 text-left font-sans text-semPrimary"
      )}
    >
      <span>
        <StatusIndicator status={status} />
      </span>
      <ArrowRightIcon />
    </td>
    {/* Status End */}
  </tr>
);

export default InstitutionalWalletTableItem;
