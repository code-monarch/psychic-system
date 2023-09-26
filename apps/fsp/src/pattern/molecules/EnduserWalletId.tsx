import React from "react";
import VerticalSeparator from "../atoms/VerticalSeparator";
import { usePathname } from "next/navigation";

const EnduserWalletId = () => {
  const pathname = usePathname();
  const pathnameMappings: { [key: string]: string } = {
    '/wallet': 'Wallet',
    '/wallet/retail/id': 'Retail',
    '/wallet/reserve/id': 'Reserve',
    '/wallet/wholesale/id': 'Wholesale',
    '/wallet/end-user/id': "End-user",
  };
  const displayText = pathnameMappings[pathname];
  return (
    <div className="flex items-center gap-2">
      <div className="font-semibold">
        <p className="text-2xl">0.0.1239400</p>
      </div>

      <div className="h-[10px]">
        <VerticalSeparator />
      </div>

      <p className="rounded-full bg-[#ecfaf0] text-[#3fcc6a] py-1 px-4 font-medium text-xs">
        {displayText}
      </p>
    </div>
  );
};

export default EnduserWalletId;
