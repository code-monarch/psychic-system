import React from "react";
import WalletIcon2 from "../atoms/icons/WalletIcon2";
import { usePathname } from "next/navigation";

const NoDetails = () => {
    const pathname = usePathname();
    const pathnameMappings: { [key: string]: string } = {
      '/wallet': 'Wallet',
      '/wallet/retail/id': 'Retail Wallet',
      '/wallet/reserve/id': 'Reserve Wallet',
      '/wallet/wholesale/id': 'Wholesale Wallet',
    };
    const displayText = pathnameMappings[pathname];
  return (
    <div className="flex flex-col items-center justify-between gap-8 w-[360px]">
      <div className="flex flex-col items-center gap-3">
        <WalletIcon2 />

        <p className="text-sm text-center">
          You don&apos;t have any details yet. Fund your {displayText} to
          register your detail.
        </p>
      </div>
    </div>
  );
};

export default NoDetails;
