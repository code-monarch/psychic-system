import React from "react";
import StatusIndicator from "../../../common/atoms/table-status-indicator";
import { PopOver, PopOverContent, PopOverTrigger } from "@emtech/ui";
import { ViewMoreIcon } from "@emtech/icons";
import RequestDetailsModal from "@/pattern/requests/organisms/modals/request-details-modal";
import { formatDate, formatTime } from "@emtech/utils";
import { IRequestDetailsResponse } from "@/redux/services/requests/get-request-details";

const InstitutionalWalletRequestTableItem = ({
  requestType,
  id,
  status,
  entity,
  timestamp,
}: IRequestDetailsResponse) => (
  <tr className='w-full hover:bg-surfaceColor cursor-default'>
    {/* Request Number */}
    <td className='whitespace-nowrap pl-6  pr-[119px] py-4 text-base font-sans font-[500] text-semPrimary'>
      <span>{id}</span>
    </td>
    {/* Request Number End */}

    {/* Entity */}
    <td className='whitespace-nowrap py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      {entity}
    </td>
    {/* Entity End */}

    {/* Wallet Request Type */}
    <td className='whitespace-nowrap pr-[85px] py-4 text-base font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      {requestType}
    </td>
    {/* Wallet Request Type End */}

    {/* Date & Time */}
    <td className='whitespace-nowrap pr-[16px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      {formatDate(timestamp)} {formatTime(timestamp)}
    </td>
    {/* Date & Time End */}

    {/* Status */}
    <td className='whitespace-nowrap py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary'>
      <StatusIndicator status={status ?? "---"} />
    </td>
    {/* Status End */}

    {/* View More Requests Icon */}
    <td className='whitespace-nowrap px-[16px] py-4 text-base text-left font-sans text-inputPlaceholder font-[500] text-semPrimary cursor-pointer'>
      <PopOver>
        <PopOverTrigger>
          <div>
            <ViewMoreIcon />
          </div>
        </PopOverTrigger>
        <PopOverContent
          showCloseIcon={false}
          className=' !bg-white !min-w-[180px] !min-h-[44px] !text-primaryText !text-sm !font-sans !font-[800] !py-[12px] !px-[20px] !rounded-[5px] !border !shadow-md'
        >
          <RequestDetailsModal id={id} status={status} />
        </PopOverContent>
      </PopOver>
      {/* View More Requests Icon End */}
    </td>
    {/* Status End */}

    {/* View More pop over Icon */}

    {/* View More pop over Icon End */}
  </tr>
);

export default InstitutionalWalletRequestTableItem;
