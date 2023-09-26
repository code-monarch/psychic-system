"use client";
import React, { FC, useState } from "react";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  IconButton,
  Checkbox,
  VisuallyHidden,
  Button,
} from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import { useSelectWallet } from "@/lib/hooks/useSelectWallet";
import { ISelectWalletProps } from "@/lib/types";

const walletNames: ISelectWalletProps[] = [
  { name: "ZedPay", walletId: "0.0.1238474" },
  { name: "BuyBit", walletId: "0.0.1238475" },
  { name: "DroveWerk", walletId: "0.0.1238476" },
  { name: "XianTech", walletId: "0.0.1238477" },
  { name: "ZedPay", walletId: "0.0.1238478" },
  { name: "BuyBit", walletId: "0.0.1238479" },
  { name: "DroveWerk", walletId: "0.0.1238480" },
  { name: "XianTech", walletId: "0.0.1238481" },
];

interface IProps {
  walletType: string;
}

const PickInstitutionalWalletModal: FC<IProps> = ({ walletType }) => {
  // Determines whether modal is open
  const [isOpen, setIsOpen] = useToggle(false);

  // Determines whether Checkbox is checked
  const [checked, setChecked] = useState<boolean>(false);

  // Handles wallet seleected
  const { handleSelectWallet, selectedWallets } = useSelectWallet();

  console.log("SELECTED WALLETS: ", selectedWallets);

  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <IconButton size='lg' className='!w-[127px]'>
          Send Fund
        </IconButton>
      </AlertDialogueTrigger>

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay
          className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
          isopen={isOpen}
        >
          <AlertDialogueContent>
            <ModalCard
              title='Institutional Wallets'
              closeModal={() => setIsOpen()}
            >
              <div className='space-y-[32px]'>
                {/* Table */}
                <table className='w-full'>
                  {/* Table Head */}
                  <thead className='bg-inherit'>
                    <tr>
                      {/* Wallet Name */}
                      <th
                        scope='col'
                        className='py-4 pr-[152px] pl-9 whitespace-nowrap text-center text-primaryText text-base font-extrabold font-sans rounded-tl-lg'
                      >
                        Wallet Name
                      </th>
                      {/* Wallet Name End */}

                      {/* Wallet ID */}
                      <th
                        scope='col'
                        className='py-4 pr-[89px] whitespace-nowrap text-center text-primaryText text-base font-extrabold font-sans'
                      >
                        Entity
                      </th>
                      {/* Wallet ID End */}

                      {/* Wallet Type */}
                      <th
                        scope='col'
                        className='py-4 pr-[89px] whitespace-nowrap text-right text-primaryText text-base font-extrabold font-sans'
                      >
                        Wallet Type
                      </th>
                      {/* Wallet Type End */}
                    </tr>
                  </thead>
                  {/* Table Head End */}

                  {/* Table Body */}
                  <tbody className='bg-inherit'>
                    {walletNames.map(({ name, walletId }, idx) => (
                      <tr
                        key={idx}
                        className='w-full hover:bg-surfaceColor hover:cursor-pointer'
                        onClick={() => {
                          handleSelectWallet({ name, walletId });
                          selectedWallets.filter((wallet) => {
                            if (wallet.walletId === walletId) {
                              return setChecked(!checked);
                            }
                          });
                          // Pass Wallet name to this
                        }}
                      >
                        {/* Wallet Name */}
                        <td className='flex items-center justify-start space-x-[8px] whitespace-nowrap pr-[130px] py-4 text-base font-sans font-medium text-primaryText'>
                          <Checkbox
                            value='value'
                            checked={checked}
                            onCheckedChange={setChecked}
                            required={false}
                            labelfor={name}
                            labeltext={undefined}
                          />
                          <span id={name}>{name}</span>
                        </td>
                        {/* Wallet Name End */}

                        {/* Wallet ID */}
                        <td className='whitespace-nowrap py-4 pr-12 text-base font-sans font-medium text-primaryText'>
                          {walletId}
                        </td>
                        {/* Wallet ID End */}

                        {/* Wallet Type */}
                        <td className='whitespace-nowrap pr-[85px] py-4 text-base capitalize font-sans font-medium text-primaryText'>
                          {walletType}
                        </td>
                        {/* Wallet Type End */}
                      </tr>
                    ))}
                  </tbody>
                  {/* Table Body End */}
                </table>
                {/* Table End */}
                <VisuallyHidden visible={checked}>
                  <Button size='lg' fullwidth>
                    Fund Institutional Wallet
                  </Button>
                </VisuallyHidden>
              </div>
            </ModalCard>
          </AlertDialogueContent>
        </AlertDialogueOverlay>
      </AlertDialoguePortal>
      {/* Alert Dialogue Portal End */}
    </AlertDialogue>
  );
};

export default PickInstitutionalWalletModal;
