import { Select, SelectContent, SelectTrigger } from '@emtech/ui'
import React from 'react'

const WalletTopSection = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        {/* wallet Type */}
        import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  // SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  // SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
  // SelectIcon,
} from "@emtech/ui";
import MoreIcon from "../atoms/icons/MoreIcon";
import CbdcIcon from "../atoms/icons/CbdcIcon";
import LockIcon from "../atoms/icons/LockIcon";
import EuSelectRetailWalletModal from "../organisms/EuSelectRetailWalletModal";

const ReserveWalletTopSection = () => {
  const [select, setSelect] = useState("");
  const [open, setOpen] = useState(true);
  const [enduserFundModal, setEnduserFundModal] = useState<boolean>(false);

  useEffect(() => {
    if (select === "fund wallet") {
      setEnduserFundModal(true);
      setSelect("");
    }
  }, [select]);

  return (
    <div className=''>
      <div>
        <Select
          value={select}
          open={open}
          onOpenChange={setOpen}
          defaultValue=''
          onValueChange={setSelect}
        >
          <SelectTrigger className='rounded-md p-2 text-[#8499b1]'>
            {/* <SelectValue value={select} placeholder={select} /> */}
            {/* <SelectIcon /> */}
            <MoreIcon />
          </SelectTrigger>

          <SelectContent className='text-xs font-medium'>
            <SelectScrollUp />
            <SelectViewport className='font-semibold'>
              <SelectItem value='fund wallet' className='hover:bg-[#f8fafe]'>
                <CbdcIcon color='#1e252d' />
                <SelectItemText>Fund Wallet</SelectItemText>
              </SelectItem>
              <SelectItem value='suspend wallet' className='hover:bg-[#f8fafe]'>
                <LockIcon />
                <SelectItemText>Suspend Wallet</SelectItemText>
              </SelectItem>
            </SelectViewport>
            <SelectScrollDown />
          </SelectContent>
        </Select>
      </div>

      <div className='hidden'>
        <EuSelectRetailWalletModal
          open={enduserFundModal}
          setOpen={setEnduserFundModal}
        />
      </div>
    </div>
  );
};

export default ReserveWalletTopSection
