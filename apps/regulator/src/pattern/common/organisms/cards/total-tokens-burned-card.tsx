"use client";
import React, { FC, useEffect, useState } from "react";
import BurnTokenModal from "@/pattern/currency/organisms/modals/burn-token-modal";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { formatRadialChartValue } from "@/lib/helpers/format-radial-chart-value";
import WalletStatsCard from "./wallet-stats-card";

const RadialBarChart = dynamic(() => import("react-apexcharts"));

interface ITotalTokensBurnedProps {
  totalTokensBurned: number;
}

const TotalTokensBurnedCard: FC<ITotalTokensBurnedProps> = ({
  totalTokensBurned,
}) => {
  const radialBarChartOption: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    noData: {
      text: "No data",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#1E252D",
        fontSize: "14px",
      },
    },
    fill: {
      colors: ["#0D3477"],
    },
    labels: ["Total Tokens Burned"],
    stroke: {
      lineCap: "round",
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 25,
          size: "60%",
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            color: "#1E252D",
            offsetY: 5,
            fontSize: "16px",
            fontWeight: 500,
            formatter: () => formatRadialChartValue(0),
          },
        },
      },
    },
  };

  const [chartOption, setChartOption] = useState(radialBarChartOption);

  // // update chart options
  useEffect(() => {
    if (totalTokensBurned) {
      setChartOption((prev) => ({
        ...prev,
        plotOptions: {
          radialBar: {
            ...prev?.plotOptions?.radialBar?.hollow,
            dataLabels: {
              ...prev?.plotOptions?.radialBar?.dataLabels,
              value: {
                show: true,
                color: "#1E252D",
                offsetY: 5,
                fontSize: "16px",
                fontWeight: 500,
                formatter: () => formatRadialChartValue(totalTokensBurned),
              },
            },
          },
        },
      }));
    }
  }, [totalTokensBurned]);

  return (
    <>
      <WalletStatsCard
        className='!max-w-[225px]'
        tooltip={
          <p className='text-[14px] text-primaryText font-sans'>
            <strong>Total Tokens</strong> Issued are the amount of tokens /
            coins that&apos;s been minted to the Master Wallet
          </p>
        }
      >
        <div className='w-full h-full flex flex-col justify-between'>
          {/* Heading */}
          <h4 className='text-[18px] text-primaryText text-center whitespace-normal font-sans font-[500]'>
            Total Tokens <br /> Burned
          </h4>
          {/* Heading End */}

          <div className='min-h-[165px] min-w-[165px] w-full h-full flex justify-center items-center'>
            <RadialBarChart
              options={chartOption}
              series={[totalTokensBurned!]}
              type='radialBar'
              height={165}
              width={165}
            />
          </div>

          {/* Issue Token Modal Trigger */}
          <BurnTokenModal btnSize='sm' />
          {/* Issue Token Modal Trigger End */}
        </div>
      </WalletStatsCard>
    </>
  );
};

export default TotalTokensBurnedCard;
