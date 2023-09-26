import React from "react";
import WalletChartTop from "./WalletChartTop";
import InflowChart from "../molecules/InflowChart";
import WalletWeeklyChart from "../transactions/organism/wallet-weekly-chart";
import { useGlobalContext } from "../../../context";
import WalletMonthlyChart from "../transactions/organism/wallet-monthly-chart";
import WalletYearlyChart from "../transactions/organism/wallet-yearly-chart";

const ReserveWalletChartBox = () => {
  const { period } = useGlobalContext();
  return (
    <div className='flex flex-col border border-[#174cff33] rounded-lg p-4'>
      <WalletChartTop />
      {period === "daily" && <InflowChart />}
      {period === "weekly" && <WalletWeeklyChart />}
      {period === "monthly" && <WalletMonthlyChart />}
      {period === "yearly" && <WalletYearlyChart />}
    </div>
  );
};

export default ReserveWalletChartBox;
