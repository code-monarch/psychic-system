import React, { FC } from "react";
import FieldItem from "@/pattern/common/molecules/field-item";
import WidgetHeader from "../molecules/widget-header";

interface IProps {
  admin_key: string;
  KYC_key: string;
  freeze_key: string;
  wipe_key: string;
  supply_key: string;
  fee_schedule_key: string;
  pause_key: string;
}

const TokenKeysWidget: FC<IProps> = ({
  admin_key,
  KYC_key,
  freeze_key,
  wipe_key,
  supply_key,
  fee_schedule_key,
  pause_key,
}) => {
  return (
    <div className='flex flex-col space-y-[50px]'>
      <WidgetHeader header='Token Keys' />


      <div className='bg-surfaceColor w-full min-h-[232px] h-fit grid grid-cols-2 gap-14 p-[24px] border-[1px] border-[rgba(35, 118, 250, 0.20)] rounded-[8px]'>
        {/* Left Side */}
        <div className='w-full col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
          {/* Admin Key */}
          <FieldItem
            label='Admin Key'
            value={admin_key ?? "None - Token is immutable"}
          />
          {/* KYC Key */}
          <FieldItem
            label='KYC Key'
            value={KYC_key ?? "None - KYC is not required"}
          />
          {/* Freeze Key */}
          <FieldItem
            label='Freeze Key'
            value={freeze_key ?? "None - Token cannot be frozen"}
          />
          {/* Wipe Key */}
          <FieldItem
            label='Wipe Key'
            value={wipe_key ?? "None - Token cannot be wiped"}
          />
        </div>
        {/* Left Side End */}

        {/* Right Side */}
        <div className='col-span-2 md:col-span-1 flex flex-col divide-y divide-[rgba(35,118,250,0.20)]'>
          {/* Supply Key */}
          <FieldItem label='Supply Key' value={supply_key ?? "None"} />
          {/* Fee Schedule Key */}
          <FieldItem
            label='Fee Schedule Key'
            value={
              fee_schedule_key ?? "None - Custom fee schedule is immutable"
            }
          />
          {/* Pause Key */}
          <FieldItem
            label='Pause Key'
            value={pause_key ?? "None - Token cannot be paused"}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenKeysWidget;
