import React, { FC } from "react";
import moment from "moment";
import FieldItem from "@/pattern/common/molecules/field-item";

interface IProps {
  token_id: string;
  EVM_address: string;
  name: string;
  expires_at: string | number;
  auto_renew_period: string | number;
  auto_renew_account: string | number;
  freeze_default: boolean;
  pause_status: string | number;
  treasury_account: string | number;
  created_at: string | number;
  modified_at: string | number;
  total_supply: string | number;
  initial_supply: string | number;
  max_supply: string | number;
  decimals: string | number;
}

const FungibleTokenInfoWidget: FC<IProps> = ({
  token_id,
  EVM_address,
  name,
  expires_at,
  auto_renew_period,
  auto_renew_account,
  freeze_default,
  pause_status,
  treasury_account,
  created_at,
  modified_at,
  total_supply,
  initial_supply,
  max_supply,
  decimals,
}) => {
  const currentMoment = moment();
  console.log("CURRENT MOMENT: ", currentMoment);

  //   Period Renewal
  const periodRenewal = moment.unix(Number(auto_renew_period));
  const timeUntilPeriodRenewal = currentMoment.diff(periodRenewal, "day", true);

  //   Account Renewal
  const accountRenewal = moment.unix(Number(auto_renew_account));
  const timeUntilAccountRenewal = currentMoment.diff(
    accountRenewal,
    "day",
    true
  );
  return (
    <div className='bg-surfaceColor w-full min-h-[492px] h-fit grid grid-cols-2 gap-14 p-[24px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
      {/* Left Side */}
      <div className='w-full col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Token Id */}
        <FieldItem label='Token ID' value={token_id ?? "None"} />
        {/* EVM Address */}
        <FieldItem label='EVM Address' value={EVM_address ?? "None"} />
        {/* Name */}
        <FieldItem label='Name' value={name ?? "None"} />
        {/* Expires At */}
        <FieldItem
          label='Expires At'
          value={moment(expires_at).format("LLLL") ?? "None"}
        />
        {/* Auto Renew Period */}
        <FieldItem
          label='Auto Renew Period'
          value={timeUntilPeriodRenewal ?? "None"}
        />
        {/* Auto Renew Account */}
        <FieldItem
          label='Auto Renew Account'
          value={timeUntilAccountRenewal ?? "None"}
        />
        {/* Freeze Default */}
        <FieldItem label='Freeze Default' value={freeze_default ?? "None"} />
        {/* Pause Status */}
        <FieldItem label='Pause Status' value={pause_status ?? "None"} />
      </div>
      {/* Left Side End */}

      {/* Right Side */}
      <div className='col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Treasury Account */}
        <FieldItem
          label='Treasury Account'
          value={treasury_account ?? "None"}
        />
        {/* Created At */}
        <FieldItem
          label='Created At'
          value={moment.unix(Number(created_at)).format("LLLL") ?? "None"}
        />
        {/* Modified At */}
        <FieldItem
          label='Modified At'
          value={moment.unix(Number(modified_at)).format("LLLL") ?? "None"}
        />
        {/* Total Supply */}
        <FieldItem label='Total Supply' value={total_supply ?? "None"} />
        {/* Initial Supply */}
        <FieldItem label='Initial Supply' value={initial_supply ?? "None"} />
        {/* Max Supply */}
        <FieldItem label='Max Supply' value={max_supply ?? "None"} />
        {/* Decimals */}
        <FieldItem label='Decimals' value={decimals ?? "None"} />
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default FungibleTokenInfoWidget;
