import React from "react";
import StatusIndicator from "./table-status-indicator";
import { IRequestsTableResponse } from "@/redux/services/requests/get-requests-table.api-slice";

const FundRedemptionRequestTableItem = ({
  id,
  requestType,
  entity,
  timestamp,
  status,
}: IRequestsTableResponse) => (
  <tr className='w-full hover:bg-surfaceColor cursor-default'>
    {/* Entity */}
    <td className='whitespace-nowrap py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      {entity}
    </td>
    {/* Entity End */}

    {/* Wallet ID */}
    <td className='whitespace-nowrap pr-[85px] py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      {id}
    </td>
    {/* Wallet ID End */}

    {/* Amount */}
    <td className='whitespace-nowrap pr-[16px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      9,0000
    </td>
    {/* Amount End */}

    {/* Status */}
    <td className='whitespace-nowrap py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      <StatusIndicator status={status ?? "active"} />
    </td>
    {/* Status End */}
  </tr>
);

export default FundRedemptionRequestTableItem;
