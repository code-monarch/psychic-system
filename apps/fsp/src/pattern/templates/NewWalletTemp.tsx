import React from "react";
import NewWalletTop from "../organisms/NewWalletTop";
import FundNewWallet from "../organisms/FundNewWallet";
import ReserveWalletChartBox from "../organisms/ReserveWalletChartBox";
import TransactionsTableView from "../organisms/TransactionsTableView";
import { useGlobalContext } from "../../../context";
import { usePathname } from "next/navigation";
import NoDetails from "../molecules/NoDetails";
import EnduserWalletTop from "../organisms/EnduserWalletTop";
import EnduserWalletChartBox from "../organisms/EnduserWalletChartBox";
import EnduserTransactionsTableView from "../organisms/EnduserTransactionsTableView";

const NewWalletTemp = () => {
  const { funded } = useGlobalContext();
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {pathname === "/wallet/end-user/id" ? (
        <div className="mb-8"><EnduserWalletTop /></div>
      ) : (
        <NewWalletTop />
      )}
      {funded === false && pathname === "/wallet/reserve/id" && (
        <div className="self-center my-40">
          <FundNewWallet />
        </div>
      )}
      {funded === false && pathname === "/wallet/wholesale/id" && (
        <div className="self-center my-40">
          <NoDetails />
        </div>
      )}
      {funded === false && pathname === "/wallet/retail/id" && (
        <div className="self-center my-40">
          <NoDetails />
        </div>
      )}
      {funded === true && (
        <div className="my-14">
          <ReserveWalletChartBox />
          <TransactionsTableView />
        </div>
      )}
      {
        pathname === "/wallet/end-user/id" && (
          <div>
            <EnduserWalletChartBox />
            <EnduserTransactionsTableView />
          </div>
        )
      }
    </div>
  );
};

export default NewWalletTemp;
