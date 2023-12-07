import React, { FC } from "react";
import moment from "moment";
import FieldItem from "@/pattern/common/molecules/field-item";

interface IProps {
  account_id: string;
  EVM_address: string;
  balance: string | number;
  stake_to: string | number;
  pending_reward: string | number;
  auto_renew_period: string | number;
  expires_at: string | number;
  admin_key: string | number;
}

const AccountInfoWidget: FC<IProps> = ({
  account_id,
  EVM_address,
  balance,
  stake_to,
  pending_reward,
  auto_renew_period,
  expires_at,
  admin_key,
}) => {
  return (
    <div className='bg-surfaceColor w-full min-h-[232px] h-fit grid grid-cols-2 gap-14 p-[24px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
      {/* Left Side */}
      <div className='w-full col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Account ID */}
        <FieldItem label='Account ID' value={account_id ?? "None"} />
        {/* EVM Address */}
        <FieldItem label='EVM Address' value={EVM_address ?? "None"} />
        {/* Balance */}
        <FieldItem label='Balance' value={balance ?? "None"} />
        {/* Stake To */}
        <FieldItem label='Stake To' value={stake_to ?? "None"} />
      </div>
      {/* Left Side End */}

      {/* Right Side */}
      <div className='col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
        {/* Pending Reward */}
        <FieldItem label='Pending Reward' value={pending_reward ?? "None"} />
        {/* Auto Renew Period */}
        <FieldItem
          label='Auto Renew Period'
          value={auto_renew_period ?? "None"}
        />
        {/* Expires At */}
        <FieldItem
          label='Expires At'
          value={moment.unix(Number(expires_at)).format("LLLL") ?? "None"}
        />
        {/* Admin Key */}
        <FieldItem label='Admin Key' value={admin_key ?? "None"} />
      </div>
      {/* Right Side End */}
    </div>
  );
};

export default AccountInfoWidget;
