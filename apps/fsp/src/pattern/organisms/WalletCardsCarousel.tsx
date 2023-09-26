import React from "react";
import WalletBalanceCard from "../transactions/molecules/wallet-balance-card";
import ArrowRightIcon from "../atoms/icons/ArrowRightIcon";
import ArrowLeftIcon from "../atoms/icons/ArrowLeftIcon";

interface WalletBalanceCardDetails {
  walletType: string;
  balance: string;
}
const WalletCardsCarousel = () => {
  const wallet: WalletBalanceCardDetails[] = [
    {
      walletType: "Reserve Wallet Balance",
      balance: "₦2.4Tr",
    },
    {
      walletType: "Wholesale Wallet Balance",
      balance: "₦90B",
    },
    {
      walletType: "Retail Wallet Balance",
      balance: "₦13B",
    },
    {
      walletType: "Total Tokens Redeemed",
      balance: "₦18M",
    },
    {
      walletType: "Total End-user Wallets Created",
      balance: "140M",
    },
    {
      walletType: "Total Institutional Wallets Requested",
      balance: "2000",
    },
  ];
  return (
    <div className='relative py-4 px-8 w-fit'>
      <div className='flex gap-4 max-w-[940px] overflow-x-auto no-scrollbar whitespace-nowrap'>
        {wallet.map((obj: WalletBalanceCardDetails, i: number) => (
          <div key={i}>
            <WalletBalanceCard
              walletType={obj.walletType}
              balance={obj.balance}
            />
          </div>
        ))}
      </div>

      <button className='absolute right-0 top-16 p-1 flex items-center justify-center bg-[#174cff] rounded-full text-white'>
        <ArrowRightIcon />
      </button>
      <button className='absolute left-0 top-16 p-1 flex items-center justify-center bg-[#174cff] rounded-full text-white'>
        <ArrowLeftIcon />
      </button>
    </div>
  );
};

export default WalletCardsCarousel;
