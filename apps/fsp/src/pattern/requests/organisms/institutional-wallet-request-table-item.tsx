import React, { FC } from "react";
import StatusIndicator from "./table-status-indicator";
import { RequestTable } from "@/redux/services/requests/get-requests-table.api-slice";
import { formatDate, formatTime } from "@emtech/utils";

const InstitutionalWalletRequestTableItem:FC<Omit<RequestTable, "requestType">> = ({
  entity,
  // id,
  // requestType,
  status,
  timestamp,
}) => {
  return (
    <tr className='w-full hover:bg-surfaceColor cursor-default'>
      {/* Entity */}
      <td className='whitespace-nowrap pl-3 py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
        {entity}
      </td>
      {/* Entity End */}

      {/* Request Time */}
      <td className='whitespace-nowrap pr-[85px] py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
        {formatTime(timestamp)}
      </td>
      {/* Request Time End */}

      {/* Request Date */}
      <td className='whitespace-nowrap pr-[16px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
        {formatDate(timestamp)}
      </td>
      {/* Request Date End */}

      {/* Status */}
      <td className='whitespace-nowrap py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
        <StatusIndicator status={status} />
      </td>
      {/* Status End */}
    </tr>
  );
};

export default InstitutionalWalletRequestTableItem;
