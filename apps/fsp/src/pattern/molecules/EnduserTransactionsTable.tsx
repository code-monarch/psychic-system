import React from "react";
import ArrowDownIcon from "../atoms/icons/ArrowDownIcon";
import DoubleArrowIcon from "../atoms/icons/DoubleArrowIcon";

const EnduserTransactionsTable = () => {
  return (
    <div className="relative overflow-x-auto max-w-full">
      <table className="text-sm bg-white w-full text-center border-separate border-spacing-y-2">
        <thead className="bg-[#f8faff] font-semibold py-4">
          <tr className="py-4">
            <th className="p-4 whitespace-nowrap">Wallet ID</th>
            <th className="p-4 whitespace-nowrap">KYC Level</th>
            <th className="p-4 whitespace-nowrap">Amount (&#8358;)</th>
            <th className="p-4 whitespace-nowrap">Balance (&#8358;)</th>
            <th className="p-4 whitespace-nowrap">Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="font-medium hover:bg-[#f8fafe] hover:cursor-pointer" onClick={() => alert("transaction details modal")}>
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a"/>
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#1e252d]">Enhanced</td>
            <td className="px-4 py-1 m-4 text-[#3fcc6a]">+ &#8358;102,100,000,000</td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">&#8358;140,000,000,000,000</td>
            <td className="m-2 bg-[#ecfaf0] text-[#3fcc6a] inline-block py-1 px-4 rounded-full font-semibold">
              Success
            </td>
            <td>
                <DoubleArrowIcon color="#1e252d" />
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe] hover:cursor-pointer" onClick={() => alert("transaction details modal")}>
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a"/>
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#1e252d]">Enhanced</td>
            <td className="px-4 py-1 m-4 text-[#3fcc6a]">+ &#8358;102,100,000,000</td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">&#8358;140,000,000,000,000</td>
            <td className="m-2 bg-[#ecfaf0] text-[#3fcc6a] inline-block py-1 px-4 rounded-full font-semibold">
              Success
            </td>
            <td>
                <DoubleArrowIcon color="#1e252d" />
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe] hover:cursor-pointer" onClick={() => alert("transaction details modal")}>
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a"/>
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#1e252d]">Enhanced</td>
            <td className="px-4 py-1 m-4 text-[#3fcc6a]">+ &#8358;102,100,000,000</td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">&#8358;140,000,000,000,000</td>
            <td className="m-2 bg-[#ecfaf0] text-[#3fcc6a] inline-block py-1 px-4 rounded-full font-semibold">
              Success
            </td>
            <td>
                <DoubleArrowIcon color="#1e252d" />
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe] hover:cursor-pointer" onClick={() => alert("transaction details modal")}>
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a"/>
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#1e252d]">Enhanced</td>
            <td className="px-4 py-1 m-4 text-[#3fcc6a]">+ &#8358;102,100,000,000</td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">&#8358;140,000,000,000,000</td>
            <td className="m-2 bg-[#ecfaf0] text-[#3fcc6a] inline-block py-1 px-4 rounded-full font-semibold">
              Success
            </td>
            <td>
                <DoubleArrowIcon color="#1e252d" />
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe] hover:cursor-pointer" onClick={() => alert("transaction details modal")}>
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a"/>
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#1e252d]">Enhanced</td>
            <td className="px-4 py-1 m-4 text-[#3fcc6a]">+ &#8358;102,100,000,000</td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">&#8358;140,000,000,000,000</td>
            <td className="m-2 bg-[#ecfaf0] text-[#3fcc6a] inline-block py-1 px-4 rounded-full font-semibold">
              Success
            </td>
            <td>
                <DoubleArrowIcon color="#1e252d" />
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default EnduserTransactionsTable;
