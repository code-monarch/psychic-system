import React from "react";
import SelectPeriod from "../molecules/SelectPeriod";

const WalletChartTop = () => {
  return (
    <div className="flex justify-between items-center mb-6 text-sm">
      <div className="flex items-center">
        <p className="font-semibold">Wallet Activity Graph</p>
      </div>

      <div>
        <SelectPeriod />
      </div>
    </div>
  );
};

export default WalletChartTop;
