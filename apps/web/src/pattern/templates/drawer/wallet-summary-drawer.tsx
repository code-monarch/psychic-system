// TODO: Redo Component

"use client";
import React from "react";
import {
  Drawer,
  Hstack,
  IconButton,
  LinkButton,
  Vstack
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import HiddenEyeIcon from "@/pattern/atoms/icons/hidden-eye";
import EyeOpenIcon from "@/pattern/atoms/icons/eye-open-icon";
import WalletTokens from "@/pattern/molecules/wallet-tokens";
import { PlusIcon } from "@radix-ui/react-icons";

const WalletsummaryDrawer = () => {
  // Determines whether drawer is Open or closed
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines whether Amount "In Circulation" is hidden or visible
  const [hideAmountInCirculation, setHideAmountInCirculation] =
    useToggle(false);

  // Determines whether Amount "Not In Circulation" is hidden or visible
  const [hideAmountNotInCirculation, setHideAmountNotInCirculation] =
    useToggle(false);

  return (
    <aside>
      <Drawer
        isopen={isOpen}
        setisopen={setIsOpen}
        trigger={
          <LinkButton className='underline text-[14px] text-primaryText font-sans font-[800]'>
            Wallet Summary
          </LinkButton>
        }
        drawerTitle='Wallet Summary'
        drawerDescription='The total supply, both those in circulation and not in circulation are all here.'
      >
        <div className='w-full flex flex-col items-center gap-y-[57px] pb-[90px]'>
          <div className='w-full flex flex-col items-center gap-y-10 pb-[40px] border-b border-borderColor'>
            {/* Total Supply Value */}
            <Hstack gap='2xl' className='!justify-center'>
              <h5 className='text-inputPlaceholder text-lg font-medium font-sans'>
                Total Supply:
              </h5>
              <h2 className='text-primaryText text-2xl font-sans font-[800]'>
                ₦140,000,000,000,000
              </h2>
            </Hstack>
            {/* Total Supply Value End */}

            {/* Total Supply Box */}
            <div className='box-shadow'>
              <div className='bg-[#F8FAFE] w-[362px] h-[168px] p-[16px] mt-[1px] ml-[1px] space-y-[24px] rounded-lg z-40'>
                {/* Amount In Circulation */}
                <Vstack gap='lg' className='!w-full'>
                  <h4 className='text-xs text-semanticGreen font-[800]'>
                    IN CIRCULATION
                  </h4>
                  <div className='w-full h-[26px] flex justify-between items-center'>
                    <input
                      type={!hideAmountInCirculation ? "text" : "password"}
                      className='bg-transparent placeholder-transparent text-primaryText text-lg font-sans font-[800] outline-none transition-all'
                      value='₦9,000,000,000,000'
                    />
                    {/* Number Visibillity Toggle */}
                    <button type='button' onClick={setHideAmountInCirculation}>
                      {!hideAmountInCirculation ? (
                        <HiddenEyeIcon />
                      ) : (
                        <EyeOpenIcon />
                      )}
                    </button>
                    {/* Number Visibillity Toggle End */}
                  </div>
                </Vstack>
                {/* Amount In Circulation End */}

                {/* Amount Not In Circulation */}
                <Vstack gap='lg' className='!w-full'>
                  <h4 className='text-xs text-inputPlaceholder font-[800]'>
                    NOT IN CIRCULATION
                  </h4>
                  <div className='w-full h-[26px] flex justify-between items-center'>
                    <input
                      type={!hideAmountNotInCirculation ? "text" : "password"}
                      className='bg-transparent placeholder-transparent text-primaryText text-lg font-sans font-[800] outline-none transition-all'
                      value='₦9,000,000,000,000'
                    />
                    {/* Number Visibillity Toggle */}
                    <button
                      type='button'
                      onClick={setHideAmountNotInCirculation}
                    >
                      {!hideAmountNotInCirculation ? (
                        <HiddenEyeIcon />
                      ) : (
                        <EyeOpenIcon />
                      )}
                    </button>
                    {/* Number Visibillity Toggle End */}
                  </div>
                </Vstack>
                {/* Amount Not In Circulation End */}
              </div>
            </div>
            {/* Total Supply Box End */}

            {/* Tokens in Circulation and Not in Circulation */}
            <div className='flex items-start'>
              {/* Tokens in Circulation */}
              <div className='space-y-[26px] px-[24px] border-r border-borderColor'>
                {/* Title */}
                <h5 className='uppercase text-sm text-primaryText font-sans font-[800]'>
                  Tokens In Circulation
                </h5>
                {/* Distribution Wallet Token */}
                <WalletTokens
                  abbrv='DW'
                  walletType='Distribution Wallet'
                  amount='120B'
                />
                {/* Distribution Wallet Tokens End */}

                {/* Institutional Wallet Tokens */}
                <WalletTokens
                  abbrv='IW'
                  walletType='Institutional Wallet'
                  amount='10B'
                />
                {/* Institutional Wallet Tokens End */}
              </div>
              {/* Tokens in Circulation End */}

              {/* Tokens not in Circulation */}
              <div className='space-y-[26px] px-[24px]'>
                {/* Title */}
                <h5 className='uppercase text-sm text-primaryText font-sans font-[800]'>
                  Tokens Not In Circulation
                </h5>
                {/* Master Wallet Token */}
                <WalletTokens
                  abbrv='MW'
                  walletType='Master Wallet'
                  amount='140Tr'
                />
                {/* Master Wallet Tokens End */}
              </div>
              {/* Tokens not in Circulation End */}
            </div>
            {/* Tokens in Circulation and Not in Circulation End */}
          </div>
          <IconButton size='xl' lefticon={<PlusIcon />} className='!w-[380px]'>
            Fund Distribution Wallet
          </IconButton>
        </div>
      </Drawer>
    </aside>
  );
};

export default WalletsummaryDrawer;
