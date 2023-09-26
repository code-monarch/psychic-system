import React from "react";
import ArrowDownIcon from "../atoms/icons/ArrowDownIcon";
import EnduserWalletOptions from "./EnduserWalletOptions";
import ChevronRightIcon from "../atoms/icons/ChevronRightIcon";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context";

const EnduserWalletsTable = () => {
  const router = useRouter();
  const { walletType } = useGlobalContext();
  return (
    <div className="relative overflow-x-auto max-w-full">
      <table className="text-sm bg-white w-full text-center border-separate border-spacing-y-2">
        <thead className="bg-[#f8faff] font-semibold py-4">
          <tr className="py-4">
            <th className="p-4 whitespace-nowrap">Wallet ID</th>
            <th className="p-4 whitespace-nowrap">Creation Date</th>
            <th className="p-4 whitespace-nowrap">KYC Level</th>
            <th className="p-4 whitespace-nowrap">Wallet Balance</th>
            <th className="p-4 whitespace-nowrap">Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr className="font-medium hover:bg-[#f8fafe]">
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a" />
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">20-12-2023</td>
            <td className="px-4 py-1 m-4">Enhanced</td>
            <td className="px-4 py-1 m-4">+ &#8358;210,000</td>
            <td className="m-2 bg-[#f9f4ec] text-[#c0933e] inline-block py-1 px-4 rounded-full font-semibold">
              Inactive
            </td>
            <td className="px-1 py-1 m-4">
              <EnduserWalletOptions />
            </td>
            <td className="text-[#174cff] px-1 py-1 m-4">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  router.push(`/wallet/${walletType.toLowerCase()}/id`)
                }
              >
                View <ChevronRightIcon color="#174cff" />
              </button>
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe]">
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a" />
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">20-12-2023</td>
            <td className="px-4 py-1 m-4">Enhanced</td>
            <td className="px-4 py-1 m-4">+ &#8358;210,000</td>
            <td className="m-2 bg-[#f9f4ec] text-[#c0933e] inline-block py-1 px-4 rounded-full font-semibold">
              Inactive
            </td>
            <td className="px-1 py-1 m-4">
              <EnduserWalletOptions />
            </td>
            <td className="text-[#174cff] px-1 py-1 m-4">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  router.push(`/wallet/${walletType.toLowerCase()}/id`)
                }
              >
                View <ChevronRightIcon color="#174cff" />
              </button>
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe]">
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a" />
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">20-12-2023</td>
            <td className="px-4 py-1 m-4">Enhanced</td>
            <td className="px-4 py-1 m-4">+ &#8358;210,000</td>
            <td className="m-2 bg-[#f9f4ec] text-[#c0933e] inline-block py-1 px-4 rounded-full font-semibold">
              Inactive
            </td>
            <td className="px-1 py-1 m-4">
              <EnduserWalletOptions />
            </td>
            <td className="text-[#174cff] px-1 py-1 m-4">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  router.push(`/wallet/${walletType.toLowerCase()}/id`)
                }
              >
                View <ChevronRightIcon color="#174cff" />
              </button>
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe]">
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a" />
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">20-12-2023</td>
            <td className="px-4 py-1 m-4">Enhanced</td>
            <td className="px-4 py-1 m-4">+ &#8358;210,000</td>
            <td className="m-2 bg-[#f9f4ec] text-[#c0933e] inline-block py-1 px-4 rounded-full font-semibold">
              Inactive
            </td>
            <td className="px-1 py-1 m-4">
              <EnduserWalletOptions />
            </td>
            <td className="text-[#174cff] px-1 py-1 m-4">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  router.push(`/wallet/${walletType.toLowerCase()}/id`)
                }
              >
                View <ChevronRightIcon color="#174cff" />
              </button>
            </td>
          </tr>
          <tr className="font-medium hover:bg-[#f8fafe]">
            <td className="px-4 py-1 m-4">
              <span className="bg-[#ecfaf0] text-[#3fcc6a] rounded-full p-2 inline-flex mr-4">
                <ArrowDownIcon color="#3fcc6a" />
              </span>
              0.0.3065441
            </td>
            <td className="px-4 py-1 m-4 text-[#8499b1]">20-12-2023</td>
            <td className="px-4 py-1 m-4">Enhanced</td>
            <td className="px-4 py-1 m-4">+ &#8358;210,000</td>
            <td className="m-2 bg-[#f9f4ec] text-[#c0933e] inline-block py-1 px-4 rounded-full font-semibold">
              Inactive
            </td>
            <td className="px-1 py-1 m-4">
              <EnduserWalletOptions />
            </td>
            <td className="text-[#174cff] px-1 py-1 m-4">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  router.push(`/wallet/${walletType.toLowerCase()}/id`)
                }
              >
                View <ChevronRightIcon color="#174cff" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EnduserWalletsTable;
