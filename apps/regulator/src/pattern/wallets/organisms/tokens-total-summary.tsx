"use client";
import React, { FC, useEffect, useState } from "react";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const DonutChart = dynamic(() => import("react-apexcharts"));

const fillColors = ["#9747FF", "#31B0C2", "#0D3477", "#FF6C56"];
interface Iprops {
  series: number[];
}

const TokensTotalSummary: FC<Iprops> = ({ series }) => {
  // Get wallet summary
  const { data: walletSummary } = useGetWalletsSummaryQuery();


  const donutChartOption: ApexOptions = {
    chart: {
      type: "donut",
    },
    series: [23, 11, 54, 72],
    labels: [
      "TOTAL SUPPLY",
      "TOKENS DISTRIBUTED",
      "TOTAL ISSUED",
      "TOKENS BURNED",
    ],
    noData: {
      text: "No data",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#1E252D",
        fontSize: "16px",
      },
    },
    fill: {
      colors: fillColors,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "left",
      fontFamily: "Avenir, sans-serif",
      fontSize: "12px",
      fontWeight: 500,
      inverseOrder: false,
      width: 300,
      height: 94,
      offsetX: 0,
      offsetY: 0,
      labels: {
        useSeriesColors: false,
        colors: "#8499B1",
      },
      markers: {
        width: 8,
        height: 8,
        strokeWidth: 0,
        strokeColor: "transparent",
        fillColors: fillColors,
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 6,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          background: "transparent",
          size: "30%",
          labels: {
            show: false,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
    },
  };

  const [chartOption, setChartOption] = useState(donutChartOption);

  // update chart options
  useEffect(() => {
    if (series) {
      setChartOption((prev) => ({
        ...prev,
        plotOptions: {
          pie: {
            donut: {
              ...prev?.plotOptions?.pie?.donut,
            },
          },
        },
      }));
    }
  }, [series]);

  return (
    <div className='min-w-[300px] w-full flex flex-col justify-start items-start gap-y-[25px]'>
      {/* Donut Chart */}
      <div className='min-h-[165px] min-w-[165px] w-full h-full flex justify-start items-center'>
        <DonutChart
          options={chartOption}
          series={series}
          type='donut'
          height={306}
          width={300}
        />
      </div>
      {/* Donut Chart End */}
    </div>
  );
};

export default TokensTotalSummary;
