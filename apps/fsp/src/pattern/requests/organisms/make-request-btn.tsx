import React, { FC, useState } from "react";
import { PlusIconButton } from "@emtech/ui";
import { useToggle } from "@emtech/utils";
import SelectRequestWalletTypeModal from "./modals/select-request-wallet-type-modal";
import Hidden from "@/pattern/common/atoms/hidden";

interface IProps {
  actionText: string;
}

const MakeRequestBtn: FC<IProps> = ({ actionText }) => {
  const [isOpen, toggleFundWalletModal] = useToggle(false);
  const [wallet, setWallet] = useState<string>("");

  return (
    <div className='space-y-3'>
      <PlusIconButton
        size='md'
        className='capitalize'
        onClick={() => toggleFundWalletModal()}
      >
        {actionText}
      </PlusIconButton>
      <Hidden visible={isOpen ? true : false}>
        <SelectRequestWalletTypeModal
          isOpen={isOpen}
          closeModal={toggleFundWalletModal}
          wallet={wallet}
          setWallet={setWallet}
        />
      </Hidden>
    </div>
  );
};

export default MakeRequestBtn;
